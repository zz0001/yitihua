// CodeMirror, copyright (c) by Marijn Haverbeke and others
// Distributed under an MIT license: http://codemirror.net/LICENSE
import './fold.css';
export default function fold(CodeMirror) {
    "use strict";

    function doFold(cm, pos, options, force) {
        if (options && options.call) {
            var finder = options;
            options = null;
        } else {
            var finder = getOption(cm, options, "rangeFinder");
        }
        if (typeof pos == "number") pos = CodeMirror.Pos(pos, 0);
        var minSize = getOption(cm, options, "minFoldSize");

        function getRange(allowFolded) {
            var range = finder(cm, pos);
            if (!range || range.to.line - range.from.line < minSize) return null;
            var marks = cm.findMarksAt(range.from);
            for (var i = 0; i < marks.length; ++i) {
                if (marks[i].__isFold && force !== "fold") {
                    if (!allowFolded) return null;
                    range.cleared = true;
                    marks[i].clear();
                }
            }
            return range;
        }

        var range = getRange(true);
        if (getOption(cm, options, "scanUp"))
            while (!range && pos.line > cm.firstLine()) {
                pos = CodeMirror.Pos(pos.line - 1, 0);
                range = getRange(false);
            }
        if (!range || range.cleared || force === "unfold") return;

        var myWidget = makeWidget(cm, options);
        CodeMirror.on(myWidget, "mousedown", function(e) {
            myRange.clear();
            CodeMirror.e_preventDefault(e);
        });
        var myRange = cm.markText(range.from, range.to, {
            replacedWith: myWidget,
            clearOnEnter: getOption(cm, options, "clearOnEnter"),
            __isFold: true
        });
        myRange.on("clear", function(from, to) {
            CodeMirror.signal(cm, "unfold", cm, from, to);
        });
        CodeMirror.signal(cm, "fold", cm, range.from, range.to);
    }

    function makeWidget(cm, options) {
        var widget = getOption(cm, options, "widget");
        if (typeof widget == "string") {
            var text = document.createTextNode(widget);
            widget = document.createElement("span");
            widget.appendChild(text);
            widget.className = "CodeMirror-foldmarker";
        } else if (widget) {
            widget = widget.cloneNode(true)
        }
        return widget;
    }

    // Clumsy backwards-compatible interface
    CodeMirror.newFoldFunction = function(rangeFinder, widget) {
        return function(cm, pos) { doFold(cm, pos, { rangeFinder: rangeFinder, widget: widget }); };
    };

    // New-style interface
    CodeMirror.defineExtension("foldCode", function(pos, options, force) {
        doFold(this, pos, options, force);
    });

    CodeMirror.defineExtension("isFolded", function(pos) {
        var marks = this.findMarksAt(pos);
        for (var i = 0; i < marks.length; ++i)
            if (marks[i].__isFold) return true;
    });

    CodeMirror.commands.toggleFold = function(cm) {
        cm.foldCode(cm.getCursor());
    };
    CodeMirror.commands.fold = function(cm) {
        cm.foldCode(cm.getCursor(), null, "fold");
    };
    CodeMirror.commands.unfold = function(cm) {
        cm.foldCode(cm.getCursor(), null, "unfold");
    };
    CodeMirror.commands.foldAll = function(cm) {
        cm.operation(function() {
            for (var i = cm.firstLine(), e = cm.lastLine(); i <= e; i++)
                cm.foldCode(CodeMirror.Pos(i, 0), null, "fold");
        });
    };
    CodeMirror.commands.unfoldAll = function(cm) {
        cm.operation(function() {
            for (var i = cm.firstLine(), e = cm.lastLine(); i <= e; i++)
                cm.foldCode(CodeMirror.Pos(i, 0), null, "unfold");
        });
    };

    CodeMirror.registerHelper("fold", "combine", function() {
        var funcs = Array.prototype.slice.call(arguments, 0);
        return function(cm, start) {
            for (var i = 0; i < funcs.length; ++i) {
                var found = funcs[i](cm, start);
                if (found) return found;
            }
        };
    });

    CodeMirror.registerHelper("fold", "auto", function(cm, start) {
        var helpers = cm.getHelpers(start, "fold");
        for (var i = 0; i < helpers.length; i++) {
            var cur = helpers[i](cm, start);
            if (cur) return cur;
        }
    });

    var defaultOptions = {
        rangeFinder: CodeMirror.fold.auto,
        widget: "\u2194",
        minFoldSize: 0,
        scanUp: false,
        clearOnEnter: true
    };

    CodeMirror.defineOption("foldOptions", null);

    function getOption(cm, options, name) {
        if (options && options[name] !== undefined)
            return options[name];
        var editorOptions = cm.options.foldOptions;
        if (editorOptions && editorOptions[name] !== undefined)
            return editorOptions[name];
        return defaultOptions[name];
    }

    CodeMirror.defineExtension("foldOption", function(options, name) {
        return getOption(this, options, name);
    });
    CodeMirror.defineOption("foldGutter", false, function(cm, val, old) {
        if (old && old != CodeMirror.Init) {
            cm.clearGutter(cm.state.foldGutter.options.gutter);
            cm.state.foldGutter = null;
            cm.off("gutterClick", onGutterClick);
            cm.off("change", onChange);
            cm.off("viewportChange", onViewportChange);
            cm.off("fold", onFold);
            cm.off("unfold", onFold);
            cm.off("swapDoc", onChange);
        }
        if (val) {
            cm.state.foldGutter = new State(parseOptions(val));
            updateInViewport(cm);
            cm.on("gutterClick", onGutterClick);
            cm.on("change", onChange);
            cm.on("viewportChange", onViewportChange);
            cm.on("fold", onFold);
            cm.on("unfold", onFold);
            cm.on("swapDoc", onChange);
        }
    });

    var Pos = CodeMirror.Pos;

    function State(options) {
        this.options = options;
        this.from = this.to = 0;
    }

    function parseOptions(opts) {
        if (opts === true) opts = {};
        if (opts.gutter == null) opts.gutter = "CodeMirror-foldgutter";
        if (opts.indicatorOpen == null) opts.indicatorOpen = "CodeMirror-foldgutter-open";
        if (opts.indicatorFolded == null) opts.indicatorFolded = "CodeMirror-foldgutter-folded";
        return opts;
    }

    function isFolded(cm, line) {
        var marks = cm.findMarks(Pos(line, 0), Pos(line + 1, 0));
        for (var i = 0; i < marks.length; ++i)
            if (marks[i].__isFold && marks[i].find().from.line == line) return marks[i];
    }

    function marker(spec) {
        if (typeof spec == "string") {
            var elt = document.createElement("div");
            elt.className = spec + " CodeMirror-guttermarker-subtle";
            return elt;
        } else {
            return spec.cloneNode(true);
        }
    }

    function updateFoldInfo(cm, from, to) {
        var opts = cm.state.foldGutter.options,
            cur = from;
        var minSize = cm.foldOption(opts, "minFoldSize");
        var func = cm.foldOption(opts, "rangeFinder");
        cm.eachLine(from, to, function(line) {
            var mark = null;
            if (isFolded(cm, cur)) {
                mark = marker(opts.indicatorFolded);
            } else {
                var pos = Pos(cur, 0);
                var range = func && func(cm, pos);
                if (range && range.to.line - range.from.line >= minSize)
                    mark = marker(opts.indicatorOpen);
            }
            cm.setGutterMarker(line, opts.gutter, mark);
            ++cur;
        });
    }

    function updateInViewport(cm) {
        var vp = cm.getViewport(),
            state = cm.state.foldGutter;
        if (!state) return;
        cm.operation(function() {
            updateFoldInfo(cm, vp.from, vp.to);
        });
        state.from = vp.from;
        state.to = vp.to;
    }

    function onGutterClick(cm, line, gutter) {
        var state = cm.state.foldGutter;
        if (!state) return;
        var opts = state.options;
        if (gutter != opts.gutter) return;
        var folded = isFolded(cm, line);
        if (folded) folded.clear();
        else cm.foldCode(Pos(line, 0), opts.rangeFinder);
    }

    function onChange(cm) {
        var state = cm.state.foldGutter;
        if (!state) return;
        var opts = state.options;
        state.from = state.to = 0;
        clearTimeout(state.changeUpdate);
        state.changeUpdate = setTimeout(function() { updateInViewport(cm); }, opts.foldOnChangeTimeSpan || 600);
    }

    function onViewportChange(cm) {
        var state = cm.state.foldGutter;
        if (!state) return;
        var opts = state.options;
        clearTimeout(state.changeUpdate);
        state.changeUpdate = setTimeout(function() {
            var vp = cm.getViewport();
            if (state.from == state.to || vp.from - state.to > 20 || state.from - vp.to > 20) {
                updateInViewport(cm);
            } else {
                cm.operation(function() {
                    if (vp.from < state.from) {
                        updateFoldInfo(cm, vp.from, state.from);
                        state.from = vp.from;
                    }
                    if (vp.to > state.to) {
                        updateFoldInfo(cm, state.to, vp.to);
                        state.to = vp.to;
                    }
                });
            }
        }, opts.updateViewportTimeSpan || 400);
    }

    function onFold(cm, from) {
        var state = cm.state.foldGutter;
        if (!state) return;
        var line = from.line;
        if (line >= state.from && line < state.to)
            updateFoldInfo(cm, line, line + 1);
    }
    CodeMirror.registerHelper("fold", "brace", function(cm, start) {
        var line = start.line,
            lineText = cm.getLine(line);
        var tokenType;

        function findOpening(openCh) {
            for (var at = start.ch, pass = 0;;) {
                var found = at <= 0 ? -1 : lineText.lastIndexOf(openCh, at - 1);
                if (found == -1) {
                    if (pass == 1) break;
                    pass = 1;
                    at = lineText.length;
                    continue;
                }
                if (pass == 1 && found < start.ch) break;
                tokenType = cm.getTokenTypeAt(CodeMirror.Pos(line, found + 1));
                if (!/^(comment|string)/.test(tokenType)) return found + 1;
                at = found - 1;
            }
        }

        var startToken = "{",
            endToken = "}",
            startCh = findOpening("{");
        if (startCh == null) {
            startToken = "[", endToken = "]";
            startCh = findOpening("[");
        }

        if (startCh == null) return;
        var count = 1,
            lastLine = cm.lastLine(),
            end, endCh;
        outer: for (var i = line; i <= lastLine; ++i) {
            var text = cm.getLine(i),
                pos = i == line ? startCh : 0;
            for (;;) {
                var nextOpen = text.indexOf(startToken, pos),
                    nextClose = text.indexOf(endToken, pos);
                if (nextOpen < 0) nextOpen = text.length;
                if (nextClose < 0) nextClose = text.length;
                pos = Math.min(nextOpen, nextClose);
                if (pos == text.length) break;
                if (cm.getTokenTypeAt(CodeMirror.Pos(i, pos + 1)) == tokenType) {
                    if (pos == nextOpen) ++count;
                    else if (!--count) {
                        end = i;
                        endCh = pos;
                        break outer;
                    }
                }
                ++pos;
            }
        }
        if (end == null || line == end && endCh == startCh) return;
        return {
            from: CodeMirror.Pos(line, startCh),
            to: CodeMirror.Pos(end, endCh)
        };
    });

    CodeMirror.registerHelper("fold", "import", function(cm, start) {
        function hasImport(line) {
            if (line < cm.firstLine() || line > cm.lastLine()) return null;
            var start = cm.getTokenAt(CodeMirror.Pos(line, 1));
            if (!/\S/.test(start.string)) start = cm.getTokenAt(CodeMirror.Pos(line, start.end + 1));
            if (start.type != "keyword" || start.string != "import") return null;
            // Now find closing semicolon, return its position
            for (var i = line, e = Math.min(cm.lastLine(), line + 10); i <= e; ++i) {
                var text = cm.getLine(i),
                    semi = text.indexOf(";");
                if (semi != -1) return { startCh: start.end, end: CodeMirror.Pos(i, semi) };
            }
        }

        var startLine = start.line,
            has = hasImport(startLine),
            prev;
        if (!has || hasImport(startLine - 1) || ((prev = hasImport(startLine - 2)) && prev.end.line == startLine - 1))
            return null;
        for (var end = has.end;;) {
            var next = hasImport(end.line + 1);
            if (next == null) break;
            end = next.end;
        }
        return { from: cm.clipPos(CodeMirror.Pos(startLine, has.startCh + 1)), to: end };
    });

    CodeMirror.registerHelper("fold", "include", function(cm, start) {
        function hasInclude(line) {
            if (line < cm.firstLine() || line > cm.lastLine()) return null;
            var start = cm.getTokenAt(CodeMirror.Pos(line, 1));
            if (!/\S/.test(start.string)) start = cm.getTokenAt(CodeMirror.Pos(line, start.end + 1));
            if (start.type == "meta" && start.string.slice(0, 8) == "#include") return start.start + 8;
        }

        var startLine = start.line,
            has = hasInclude(startLine);
        if (has == null || hasInclude(startLine - 1) != null) return null;
        for (var end = startLine;;) {
            var next = hasInclude(end + 1);
            if (next == null) break;
            ++end;
        }
        return {
            from: CodeMirror.Pos(startLine, has + 1),
            to: cm.clipPos(CodeMirror.Pos(end))
        };
    });
    CodeMirror.registerGlobalHelper("fold", "comment", function(mode) {
        return mode.blockCommentStart && mode.blockCommentEnd;
    }, function(cm, start) {
        var mode = cm.getModeAt(start),
            startToken = mode.blockCommentStart,
            endToken = mode.blockCommentEnd;
        if (!startToken || !endToken) return;
        var line = start.line,
            lineText = cm.getLine(line);

        var startCh;
        for (var at = start.ch, pass = 0;;) {
            var found = at <= 0 ? -1 : lineText.lastIndexOf(startToken, at - 1);
            if (found == -1) {
                if (pass == 1) return;
                pass = 1;
                at = lineText.length;
                continue;
            }
            if (pass == 1 && found < start.ch) return;
            if (/comment/.test(cm.getTokenTypeAt(CodeMirror.Pos(line, found + 1))) &&
                (found == 0 || lineText.slice(found - endToken.length, found) == endToken ||
                    !/comment/.test(cm.getTokenTypeAt(CodeMirror.Pos(line, found))))) {
                startCh = found + startToken.length;
                break;
            }
            at = found - 1;
        }

        var depth = 1,
            lastLine = cm.lastLine(),
            end, endCh;
        outer: for (var i = line; i <= lastLine; ++i) {
            var text = cm.getLine(i),
                pos = i == line ? startCh : 0;
            for (;;) {
                var nextOpen = text.indexOf(startToken, pos),
                    nextClose = text.indexOf(endToken, pos);
                if (nextOpen < 0) nextOpen = text.length;
                if (nextClose < 0) nextClose = text.length;
                pos = Math.min(nextOpen, nextClose);
                if (pos == text.length) break;
                if (pos == nextOpen) ++depth;
                else if (!--depth) {
                    end = i;
                    endCh = pos;
                    break outer;
                }
                ++pos;
            }
        }
        if (end == null || line == end && endCh == startCh) return;
        return {
            from: CodeMirror.Pos(line, startCh),
            to: CodeMirror.Pos(end, endCh)
        };
    });
}