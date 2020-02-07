/*
 * vertical news ticker
 * Tadas Juozapaitis ( kasp3rito@gmail.com )
 * http://plugins.jquery.com/project/vTicker
 */
// ´úÂëÕûÀí£ºÀÁÈËÖ®¼Ò lanrenzhijia.com
(function(a) {
    a.fn.vTicker = function(b) {
        var c = {
            speed: 700,
            pause: 4000,
            showItems: 3,
            animation: "",
            mousePause: true,
            isPaused: false,
            direction: "up",
            height: 2.5
        };
        var b = a.extend(c, b);
        moveUp = function(g, d, e) {
            if (e.isPaused) {
                return
            }
            var f = g.children("div");
            var h = f.children("div:first").clone(true);
            if (e.height > 0) {
                d = f.children("div:first").height()
            }
            f.animate({
                top: "-=" + d + "px"
            }, e.speed, function() {
                a(this).children("div:first").remove();
                a(this).css("top", "0px")
            });
            if (e.animation == "fade") {
                f.children("div:first").fadeOut(e.speed);
                if (e.height == 0) {
                    f.children("div:eq(" + e.showItems + ")").hide().fadeIn(e.speed)
                }
            }
            h.appendTo(f)
        };
        moveDown = function(g, d, e) {
            if (e.isPaused) {
                return
            }
            var f = g.children("div");
            var h = f.children("div:last").clone(true);
            if (e.height > 0) {
                d = f.children("div:first").height()
            }
            f.css("top", "-" + d + "px").prepend(h);
            f.animate({
                top: 0
            }, e.speed, function() {
                a(this).children("div:last").remove()
            });
            if (e.animation == "fade") {
                if (e.height == 0) {
                    f.children("div:eq(" + e.showItems + ")").fadeOut(e.speed)
                }
                f.children("div:first").hide().fadeIn(e.speed)
            }
        };
        return this.each(function() {
            var f = a(this);
            var e = 0;
            f.css({
                overflow: "hidden",
                position: "relative"
            }).children("div").css({
                position: "absolute",
                margin: 0,
                padding: 0
            }).children("div").css({
                margin: 0,
                padding: 0
            });
            if (b.height == 0) {
                f.children("div").children("div").each(function() {
                    if (a(this).height() > e) {
                        e = a(this).height()
                    }
                });
                f.children("div").children("div").each(function() {
                    a(this).height(e)
                });
                f.height(e * b.showItems)
            } else {
                f.height(b.height)
            }
            var d = setInterval(function() {
                if (b.direction == "up") {
                    moveUp(f, e, b)
                } else {
                    moveDown(f, e, b)
                }
            }, b.pause);
            if (b.mousePause) {
                f.bind("mouseenter", function() {
                    b.isPaused = true
                }).bind("mouseleave", function() {
                    b.isPaused = false
                })
            }
        })
    }
})(jQuery);
