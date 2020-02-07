import './image.less';
var $W = $(window),
    $D = $(document),
    jqEle = null,
    isMoving = false,
    isResizing = false;
var EVENTS = { CLICK: 'click', KEYDOWN: 'keydown', RESIZE: 'resize', WHEEL: 'wheel mousewheel DOMMouseScroll', MOUSESTART: 'mousedown', MOUSEMOVE: 'mousemove', MOUSEEND: 'mouseup', EVENT_NS: '.magnify' };
var cssSelector = { 'modal': '.magnify-modal', 'header': '.magnify-header', 'footer': '.magnify-footer', 'toolbar': '.magnify-toolbar', 'stage': '.magnify-stage', 'title': '.magnify-title', 'image': '.magnify-image', 'close': '.magnify-btn-close', 'zoomIn': '.magnify-btn-zoomIn', 'zoomOut': '.magnify-btn-zoomOut', 'prev': '.magnify-btn-prev', 'next': '.magnify-btn-next', 'actualSize': '.magnify-btn-actualSize', 'rotateLeft': '.magnify-btn-rotateLeft', 'rotateRight': '.magnify-btn-rotateRight', 'loader': '.magnify-loader', 'btn': '.magnify-btn' };
var defaults = { draggable: false, resizable: false, movable: false, keyboard: false, title: true, Toolbar: ['prev', 'next', 'rotateLeft', 'rotateRight', 'zoomIn', 'actualSize', 'zoomOut'], i18n: { close: '关闭', zoomIn: '放大(+)', zoomOut: '缩小(-)', prev: '上一张(←)', next: '下一张(→)', actualSize: '实际尺寸(Ctrl+Alt+0)', rotateLeft: '左旋转(Ctrl+,)', rotateRight: '右旋转(Ctrl+.)' }, modalSize: [800, 600], modalOffset: [0, 0], ratioThreshold: 0.1, minRatio: 0.1, maxRatio: 16, dragHandle: false, beforeOpen: null, opened: null, beforeClose: null, closed: null, beforeChange: null, changed: null, ieTransforms: { '0': 'progid:DXImageTransform.Microsoft.BasicImage(rotation=0)', '90': 'progid:DXImageTransform.Microsoft.BasicImage(rotation=1)', '180': 'progid:DXImageTransform.Microsoft.BasicImage(rotation=2)', '270': 'progid:DXImageTransform.Microsoft.BasicImage(rotation=3)' } };
var magnify = function(ele, opts) {
    this.settings = $.extend(true, {}, defaults, opts);
    if (opts && $.isArray(opts.Toolbar)) { if (opts.Toolbar.length !== defaults.Toolbar.length) { this.settings.Toolbar = opts.Toolbar; } else { this.settings.Toolbar = defaults.Toolbar; } }
    this.$ele = $(ele);
    this.isOpened = false;
    this.isRotated = false;
    this.rotateAngle = 0;
    this.imageData = {};
    this.modalData = { width: null, height: null, left: null, top: null };
    this.init(ele);
};
magnify.prototype = {
    init: function(ele) {
        var imgSrc = getImgSrc(ele);
        this.groupName = null;
        var currentGroupName = $(ele).data('group');
        var groupList = $D.find('[data-group="' + currentGroupName + '"]');
        if (currentGroupName !== undefined) {
            this.groupName = currentGroupName;
            this.getImgGroup(groupList, imgSrc);
        } else { this.getImgGroup(jqEle.not('[data-group]'), imgSrc); }
        this.open();
        this.loadImg(imgSrc);
        if (this.settings.draggable) { this.draggable(this.$magnify, this.dragHandle, cssSelector.btn) }
        if (this.settings.movable) { this.movable(this.$stage, this.$image); }
        if (this.settings.resizable) { this.resizable(this.$magnify, this.$stage, this.$image, this.settings.modalSize); }
    },
    open: function() {
        if ($(cssSelector.modal)) { $(cssSelector.modal).remove(); }
        this.build();
        this.triggerHook('beforeOpen', this.$ele);
        $('body').append(this.$magnify);
        this.addEvents();
        this.setModalPos(this.$magnify);
        this.triggerHook('opened', this.$ele);
    },
    build: function() {
        var _html = this.createDOM();
        var $magnify = $(_html);
        this.$magnify = $magnify;
        this.$header = $magnify.find(cssSelector.header);
        this.$footer = $magnify.find(cssSelector.footer);
        this.$toolbar = $magnify.find(cssSelector.toolbar);
        this.$stage = $magnify.find(cssSelector.stage);
        this.$title = $magnify.find(cssSelector.title);
        this.$image = $magnify.find(cssSelector.image);
        this.$close = $magnify.find(cssSelector.close);
        this.$zoomIn = $magnify.find(cssSelector.zoomIn);
        this.$zoomOut = $magnify.find(cssSelector.zoomOut);
        this.$prev = $magnify.find(cssSelector.prev);
        this.$next = $magnify.find(cssSelector.next);
        this.$fullScreen = $magnify.find(cssSelector.fullScreen);
        this.$actualSize = $magnify.find(cssSelector.actualSize);
        this.$rotateLeft = $magnify.find(cssSelector.rotateLeft);
        this.$rotateRight = $magnify.find(cssSelector.rotateRight);
        if (!this.settings.dragHandle || this.settings.dragHandle === cssSelector.modal) { this.dragHandle = this.$magnify; } else { this.dragHandle = this.$magnify.find(this.settings.dragHandle); }
    },
    createDOM: function() {
        var btnTpl = { zoomIn: '<a href="javascript:void(0)" class="magnify-btn magnify-btn-zoomIn" title="' + this.settings.i18n.zoomIn + '"></a>', zoomOut: '<a href="javascript:void(0)" class="magnify-btn magnify-btn-zoomOut" title="' + this.settings.i18n.zoomOut + '"></a>', prev: '<a href="javascript:void(0)" class="magnify-btn magnify-btn-prev" title="' + this.settings.i18n.prev + '"></a>', next: '<a href="javascript:void(0)" class="magnify-btn magnify-btn-next" title="' + this.settings.i18n.next + '"></a>', actualSize: '<a href="javascript:void(0)" class="magnify-btn magnify-btn-actualSize" title="' + this.settings.i18n.actualSize + '"></a>', rotateLeft: '<a href="javascript:void(0)" class="magnify-btn magnify-btn-rotateLeft" title="' + this.settings.i18n.rotateLeft + '"></a>', rotateRight: '<a href="javascript:void(0)" class="magnify-btn magnify-btn-rotateRight" title="' + this.settings.i18n.rotateRight + '"></a>' };
        return '<div class="magnify-modal">' +
            '<div class="magnify-header">' + this.createTitle() +
            '<a href="javascript:void(0)" class="magnify-btn-zuida" title="最大化"></a>' +
            '<a href="javascript:void(0)" class="magnify-btn-close" title="' + this.settings.i18n.close + '"></a>' +
            '</div>' +
            '<div class="magnify-stage"><img src="" alt="" class="magnify-image" style="transform: rotate(0deg); transform-origin: 50% 50% 0px;"></div>' +
            '<div class="magnify-footer"><div class="magnify-toolbar">' + this.createBtn(this.settings.Toolbar, btnTpl) + '</div></div>' +
            '</div>';
    },
    createTitle: function() { return this.settings.title ? '<div class="magnify-title"></div>' : ''; },
    createBtn: function(toolbar, btns) {
        var btnStr = '';
        $.each(toolbar, function(index, item) { btnStr += btns[item]; });
        return btnStr;
    },
    setModalSize: function() {
        var self = this;
        var $modal = this.$magnify;
        var winWidth = $W.width();
        var winHeight = $W.height();
        var newLeft = (winWidth - self.modalData.width) / 2;
        var newTop = (winHeight - self.modalData.height) / 2;
        $modal.css({ left: newLeft, top: newTop });
        $.extend(self.modalData, { left: newLeft, top: newTop })
    },
    setModalPos: function(modal) {
        var winWidth = $W.width(),
            winHeight = $W.height(),
            modalSize = this.settings.modalSize,
            modalWidth = modalSize[0],
            modalHeight = modalSize[1];
        modal.css({ width: modalWidth, height: modalHeight, left: (winWidth - modalWidth) / 2, top: (winHeight - modalHeight) / 2 });
        $.extend(this.modalData, { width: modalWidth, height: modalHeight, left: (winWidth - modalWidth) / 2, top: (winHeight - modalHeight) / 2 });
        this.isOpened = true;
    },
    setImageSize: function(img, tag) {
        var stageData = { w: this.$stage.width(), h: this.$stage.height() };
        var scale = 1;
        if (!this.isRotated) { scale = Math.min(stageData.w / img.width, stageData.h / img.height, 1); } else { scale = Math.min(stageData.w / img.height, stageData.h / img.width, 1); }
        if (this.isRotated && tag === 'jump') { this.$image.css({ left: (stageData.w - this.$image.width()) / 2, top: (stageData.h - this.$image.height()) / 2 }) } else { this.$image.css({ width: Math.ceil(img.width * scale), height: Math.ceil(img.height * scale), left: (stageData.w - Math.ceil(img.width * scale)) / 2, top: (stageData.h - Math.ceil(img.height * scale)) / 2 }); }
        $.extend(this.imageData, { width: img.width * scale, height: img.height * scale, left: (stageData.w - img.width * scale) / 2, top: (stageData.h - img.height * scale) / 2 });
        setGrabCursor({ w: this.$image.width(), h: this.$image.height() }, { w: this.$stage.width(), h: this.$stage.height() }, this.$stage, this.isRotated);
        this.$magnify.find(cssSelector.loader).remove();
        this.$image.fadeIn();
    },
    loadImg: function(imgSrc, tag) {
        var self = this;
        var loadHTML = '<div class="magnify-loader"></div>';
        this.$magnify.append(loadHTML);
        self.$image.attr('src', imgSrc.replace('.small', ''));
        preLoadImg(imgSrc, function(img) {
            self.imageData = { originalWidth: img.width, originalHeight: img.height };
            self.setImageSize(img, tag);
        }, function() { self.$magnify.find(cssSelector.loader).remove(); });
        if (this.settings.title) { this.setImgTitle(); }
    },
    getImgGroup: function(list, imgSrc) {
        var self = this;
        self.groupData = [];
        $(list).each(function(index, item) {
            var src = getImgSrc(item);
            self.groupData.push({ src: src, caption: $(item).data('caption') });
            if (imgSrc === src) { self.groupIndex = index; }
        })
    },
    setImgTitle: function() {
        var index = this.groupIndex;
        var caption = this.groupData[index].caption;
        caption = caption ? caption : '';
        this.$title.text(caption);
    },
    triggerHook: function(e, data) { if (typeof this.settings[e] === 'function') { typeof this.settings[e].call(this, $.isArray(data) ? data : [data], this.$magnify); } },
    addEvents: function() {
        var self = this;
        $('.magnify-btn-zuida').on('click', function() {
            $('.magnify-modal').css({
                height: '100%',
                width: '100%',
                left: '0',
                top: '0'
            })
            self.zoom(self.settings.ratioThreshold * 3, { x: self.$stage.width() / 2, y: self.$stage.height() / 2 });
        })
        this.$close.off(EVENTS.CLICK + EVENTS.EVENT_NS).on(EVENTS.CLICK + EVENTS.EVENT_NS, function() { self.close(); });
        this.$prev.off(EVENTS.CLICK + EVENTS.EVENT_NS).on(EVENTS.CLICK + EVENTS.EVENT_NS, function() { self.jump(-1); });
        this.$next.off(EVENTS.CLICK + EVENTS.EVENT_NS).on(EVENTS.CLICK + EVENTS.EVENT_NS, function() { self.jump(1); });
        this.$zoomIn.off(EVENTS.CLICK + EVENTS.EVENT_NS).on(EVENTS.CLICK + EVENTS.EVENT_NS, function() { self.zoom(self.settings.ratioThreshold * 3, { x: self.$stage.width() / 2, y: self.$stage.height() / 2 }); });
        this.$zoomOut.off(EVENTS.CLICK + EVENTS.EVENT_NS).on(EVENTS.CLICK + EVENTS.EVENT_NS, function() { self.zoom(-self.settings.ratioThreshold * 3, { x: self.$stage.width() / 2, y: self.$stage.height() / 2 }); });
        this.$actualSize.off(EVENTS.CLICK + EVENTS.EVENT_NS).on(EVENTS.CLICK + EVENTS.EVENT_NS, function() { self.actualSize(); });
        this.$rotateLeft.off(EVENTS.CLICK + EVENTS.EVENT_NS).on(EVENTS.CLICK + EVENTS.EVENT_NS, function() { self.rotate(-90); });
        this.$rotateRight.off(EVENTS.CLICK + EVENTS.EVENT_NS).on(EVENTS.CLICK + EVENTS.EVENT_NS, function() { self.rotate(90); });
        this.$stage.off(EVENTS.WHEEL + EVENTS.EVENT_NS).on(EVENTS.WHEEL + EVENTS.EVENT_NS, function(e) { self.wheel(e); });
        $D.off(EVENTS.KEYDOWN + EVENTS.EVENT_NS).on(EVENTS.KEYDOWN + EVENTS.EVENT_NS, function(e) { self.keyDown(e); });
        $W.on(EVENTS.RESIZE + EVENTS.EVENT_NS, function() { self.resize(); });
    },
    close: function() {
        this.triggerHook('beforeClose', this.$ele);
        this.$magnify.remove();
        this.isRotated = false;
        this.isOpened = false;
        this.rotateAngle = 0;
        $D.off(EVENTS.KEYDOWN + EVENTS.EVENT_NS);
        $W.off(EVENTS.RESIZE + EVENTS.EVENT_NS);
        this.triggerHook('closed', this.$ele);
    },
    wheel: function(e) {
        stopPre(e);
        var delta = 1;
        if (e.originalEvent.deltaY) { delta = e.originalEvent.deltaY > 0 ? 1 : -1; } else if (e.originalEvent.wheelDelta) { delta = -e.originalEvent.wheelDelta / 120; } else if (e.originalEvent.detail) { delta = e.originalEvent.detail > 0 ? 1 : -1; }
        var ratio = -delta * this.settings.ratioThreshold;
        var pointer = { x: e.originalEvent.clientX - this.$stage.offset().left + $D.scrollLeft(), y: e.originalEvent.clientY - this.$stage.offset().top + $D.scrollTop() };
        this.zoom(ratio, pointer, e);
    },
    zoom: function(ratio, origin) {
        ratio = ratio < 0 ? (1 / (1 - ratio)) : (1 + ratio);
        if (ratio > 0.95 && ratio < 1.05) { ratio = 1; }
        ratio = parseInt(this.$image[0].style.width) / this.imageData.originalWidth * ratio;
        ratio = Math.max(ratio, this.settings.minRatio);
        ratio = Math.min(ratio, this.settings.maxRatio);
        var $image = this.$image;
        var $stage = this.$stage;
        var imgData = { w: this.imageData.width, h: this.imageData.height, x: this.imageData.left, y: this.imageData.top };
        var stageData = { w: $stage.width(), h: $stage.height(), x: $stage.offset().left, y: $stage.offset().top };
        var newWidth = this.imageData.originalWidth * ratio;
        var newHeight = this.imageData.originalHeight * ratio;
        var newLeft = origin.x - (origin.x - imgData.x) / imgData.w * newWidth;
        var newTop = origin.y - (origin.y - imgData.y) / imgData.h * newHeight;
        var gt = !this.isRotated ? 0 : (newWidth - newHeight) / 2;
        var imgNewWidth = !this.isRotated ? newWidth : newHeight;
        var imgNewHeight = !this.isRotated ? newHeight : newWidth;
        var offsetX = stageData.w - newWidth;
        var offsetY = stageData.h - newHeight;
        $image.css({ width: Math.round(newWidth), height: Math.round(newHeight) });
        var imgCurrWidth = $image.width();
        var imgCurrHeight = $image.height();
        if (imgNewWidth <= stageData.w) { newLeft = (stageData.w - imgCurrWidth) / 2; } else { newLeft = -(imgCurrWidth - stageData.w) / 2; }
        if (imgNewHeight <= stageData.h) { newTop = (stageData.h - imgCurrHeight) / 2; } else { newTop = -(imgCurrHeight - stageData.h) / 2; }
        $image.css({ left: Math.round(newLeft), top: Math.round(newTop) })
        $.extend(this.imageData, { width: newWidth, height: newHeight, left: newLeft, top: newTop });
        setGrabCursor({ w: Math.round(imgNewWidth), h: Math.round(imgNewHeight) }, { w: stageData.w, h: stageData.h }, this.$stage);
    },
    jump: function(n) {
        var groupLen = this.groupData.length;
        if (n > 0) { if (this.groupIndex + n >= groupLen) { n = 0 } else { n = this.groupIndex + 1 } }
        if (n < 0) { if (this.groupIndex + n < 0) { n = groupLen + n; } else { n = this.groupIndex + n } }
        this.groupIndex = n;
        this.triggerHook('beforeChange', n);
        this.loadImg(this.groupData[n].src, 'jump');
        this.triggerHook('changed', n);
    },
    actualSize: function() {
        this.isRotated = false;
        this.rotateAngle = 0;
        this.$image.css({ transform: 'rotate(0deg)' });
        var useIeTransforms = function() {
            var isIE = false;
            if (navigator.appName === 'Microsoft Internet Explorer') { if (navigator.userAgent.match(/Trident/i) && navigator.userAgent.match(/MSIE 8.0/i)) { isIE = true } }
            return isIE;
        }();
        if (useIeTransforms) { this.$image.css('filter', 'progid:DXImageTransform.Microsoft.BasicImage(rotation=0)'); }
        this.loadImg(this.groupData[this.groupIndex].src);
    },
    rotate: function(angle) {
        var self = this;
        this.rotateAngle = this.rotateAngle + angle;
        this.isRotated = (this.rotateAngle / 90) % 2 !== 0;
        self.transformDeg(this.$image, self.rotateAngle);
    },
    transformDeg: function(currentImg, currentDeg) {
        var unit = this;
        var useIeTransforms = function() {
            var isIE = false;
            if (navigator.appName === 'Microsoft Internet Explorer') { if (navigator.userAgent.match(/Trident/i) && navigator.userAgent.match(/MSIE 8.0/i)) { isIE = true } }
            return isIE;
        }();
        var cssVal = 'rotate(' + currentDeg + 'deg)';
        var _style = ['', '-webkit-', '-moz-', '-o-', '-ms-'];
        for (var i = 0; i < _style.length; i++) {
            var prefix = _style[i];
            currentImg.css(prefix + 'transform', cssVal);
        }
        if (useIeTransforms) {
            var _IeStyle = ['-ms-', ''];
            for (var j = 0; j < _IeStyle.length; j++) {
                var IEprefix = _IeStyle[j];
                if (Math.abs(currentDeg) >= 360) { currentDeg = currentDeg % 360 }
                currentImg.css(IEprefix + 'filter', unit.settings.ieTransforms[Math.abs(currentDeg)]);
                var imgHeightNum = currentImg.height();
                var imgWidthNum = currentImg.width();
                if (defaults.modalSize[0] >= imgHeightNum) {
                    currentImg.css(IEprefix + 'left', defaults.modalSize[0] / 2 - imgWidthNum / 2 + 'px');
                    currentImg.css(IEprefix + 'top', defaults.modalSize[1] / 2 - imgHeightNum / 2 + 'px');
                } else {
                    currentImg.css(IEprefix + 'left', -(imgWidthNum - defaults.modalSize[0]) / 2 + 'px')
                    currentImg.css(IEprefix + 'top', -(imgHeightNum - defaults.modalSize[1]) / 2 + 'px')
                }
            }
        }
    },
    resize: function() { var self = this; return throttle(function() { self.setModalSize() }, 500); },
    keyDown: function(e) {
        var self = this;
        if (!this.settings.keyboard) return false;
        var keyCode = e.keyCode || e.which || e.charCode;
        var ctrlKey = e.ctrlKey || e.metaKey;
        var altKey = e.altKey || e.metaKey;
        switch (keyCode) {
            case 37:
                self.jump(-1);
                break;
            case 39:
                self.jump(1);
                break;
            case 187:
                self.zoom(self.settings.ratioThreshold * 3, { x: self.$stage.width() / 2, y: self.$stage.height() / 2 });
                break;
            case 189:
                self.zoom(-self.settings.ratioThreshold * 3, { x: self.$stage.width() / 2, y: self.$stage.height() / 2 });
                break;
            case 61:
                self.zoom(self.settings.ratioThreshold * 3, { x: self.$stage.width() / 2, y: self.$stage.height() / 2 });
                break;
            case 173:
                self.zoom(-self.settings.ratioThreshold * 3, { x: self.$stage.width() / 2, y: self.$stage.height() / 2 });
                break;
            case 188:
                if (ctrlKey) { self.rotate(-90); }
                break;
            case 190:
                if (ctrlKey) { self.rotate(90); }
                break;
            case 48:
                if (ctrlKey && altKey) { self.actualSize(); }
                break;
        }
    },
    movable: function(stage, image) {
        var self = this,
            isDragging = false,
            startX = 0,
            startY = 0,
            left = 0,
            top = 0,
            widthDiff = 0,
            heightDiff = 0,
            gt = 0;
        var dragStart = function(e) {
            stopPre(e);
            var imgWidth = $(image).width();
            var imgHeight = $(image).height();
            var stageWidth = $(stage).width();
            var stageHeight = $(stage).height();
            startX = e.clientX;
            startY = e.clientY;
            gt = !self.isRotated ? 0 : (imgWidth - imgHeight) / 2;
            widthDiff = !self.isRotated ? imgWidth - stageWidth : imgHeight - stageWidth;
            heightDiff = !self.isRotated ? imgHeight - stageHeight : imgWidth - stageHeight;
            isDragging = widthDiff > 0 || heightDiff > 0 ? true : false;
            isMoving = widthDiff > 0 || heightDiff > 0 ? true : false;
            left = $(image).position().left - gt;
            top = $(image).position().top + gt;
            if (stage.hasClass('is-grab')) { $('html,body,.magnify-modal,.magnify-stage,.magnify-btn').addClass('is-grabbing'); }
            $D.on(EVENTS.MOUSEMOVE + EVENTS.EVENT_NS, dragMove).on(EVENTS.MOUSEEND + EVENTS.EVENT_NS, dragEnd);
        };
        var dragMove = function(e) {
            stopPre(e);
            if (isDragging) {
                var endX = e.clientX,
                    endY = e.clientY;
                var relativeX = endX - startX,
                    relativeY = endY - startY;
                var newLeft = relativeX + left,
                    newTop = relativeY + top;
                if (heightDiff > 0) { if (relativeY + top > gt) { newTop = gt; } else if (relativeY + top < -heightDiff + gt) { newTop = -heightDiff + gt; } } else { newTop = top; }
                if (widthDiff > 0) { if (relativeX + left > -gt) { newLeft = -gt; } else if (relativeX + left < -widthDiff - gt) { newLeft = -widthDiff - gt; } } else { newLeft = left; }
                $(image).css({ left: newLeft, top: newTop });
                $.extend(self.imageData, { left: newLeft, top: newTop });
            }
        };
        var dragEnd = function() {
            $D.off(EVENTS.MOUSEMOVE + EVENTS.EVENT_NS, dragMove).off(EVENTS.MOUSEEND + EVENTS.EVENT_NS, dragEnd);
            isDragging = false;
            isMoving = false;
            $('html,body,.magnify-modal,.magnify-stage,.magnify-btn').removeClass('is-grabbing');
        };
        $(stage).on(EVENTS.MOUSESTART + EVENTS.EVENT_NS, dragStart);
    },
    draggable: function(modal, dragHandle, dragCancel) {
        var isDragging = false;
        var startX = 0,
            startY = 0,
            left = 0,
            top = 0;
        var dragStart = function(e) {
            e = e || window.event;
            var cancelElem = $(e.target).closest(dragCancel);
            if (cancelElem.length) { return true; }
            isDragging = true;
            startX = e.clientX;
            startY = e.clientY;
            left = $(modal).offset().left;
            top = $(modal).offset().top;
            $D.on(EVENTS.MOUSEMOVE + EVENTS.EVENT_NS, dragMove).on(EVENTS.MOUSEEND + EVENTS.EVENT_NS, dragEnd);
        };
        var dragMove = function(e) {
            stopPre(e);
            if (isDragging && !isMoving && !isResizing) {
                var endX = e.clientX;
                var endY = e.clientY;
                var relativeX = endX - startX;
                var relativeY = endY - startY;
                $(modal).css({ left: relativeX + left, top: relativeY + top })
            }
        };
        var dragEnd = function() {
            $D.off(EVENTS.MOUSEMOVE + EVENTS.EVENT_NS, dragMove).off(EVENTS.MOUSEEND + EVENTS.EVENT_NS, dragEnd);
            isDragging = false;
        };
        $(dragHandle).on(EVENTS.MOUSESTART + EVENTS.EVENT_NS, dragStart);
    }
};
$.fn.Magnify = function(options) {
    jqEle = $(this);
    var opts = $.extend(true, {}, defaults, options);
    jqEle.off(EVENTS.CLICK + EVENTS.EVENT_NS).on(EVENTS.CLICK + EVENTS.EVENT_NS, function(e) {
        stopPro(e);
        stopPre(e);
        $(this).data('magnify', new magnify(this, opts));
    });
    return jqEle;
};

function stopPro(event) { event = event || window.event; try { event.stopPropagation(); } catch (e) { event.cancelBubble = true; } }

function stopPre(event) { event = event || window.event; try { event.preventDefault(); } catch (e) { event.returnValue = false; } }

function getImgSrc(ele) { return $(ele).data('src') || $(ele).attr('href'); }

function preLoadImg(src, success, error) {
    var img = new Image();
    img.onload = function() { success(img); };
    img.onerror = function() { error(img) };
    img.src = src;
}

function setGrabCursor(imageData, stageData, stage, isRotated) {
    var imgWidth = !isRotated ? imageData.w : imageData.h;
    var imgHeight = !isRotated ? imageData.h : imageData.w;
    if (imgHeight > stageData.h || imgWidth > stageData.w) { stage.addClass('is-grab'); }
    if (imgHeight <= stageData.h && imgWidth <= stageData.w) { stage.removeClass('is-grab') }
}

function throttle(fn, delay) {
    var timer = null;
    var context = this,
        args = arguments;
    clearTimeout(timer);
    timer = setTimeout(function() { fn.apply(context, args); }, delay);
}

// VERSION: 2.3 LAST UPDATE: 11.07.2013
/* 
 * Licensed under the MIT license: http://www.opensource.org/licenses/mit-license.php
 * 
 * Made by Wilq32, wilq32@gmail.com, Wroclaw, Poland, 01.2009
 * Website: http://code.google.com/p/jqueryrotate/ 
 */
(function(k) {
    for (var d, f, l = document.getElementsByTagName("head")[0].style, h = ["transformProperty", "WebkitTransform", "OTransform", "msTransform", "MozTransform"], g = 0; g < h.length; g++) void 0 !== l[h[g]] && (d = h[g]);
    d && (f = d.replace(/[tT]ransform/, "TransformOrigin"), "T" == f[0] && (f[0] = "t"));
    var IE = "v" == "\v";
    jQuery.fn.extend({
        rotate: function(a) {
            if (0 !== this.length && "undefined" != typeof a) {
                "number" == typeof a && (a = { angle: a });
                for (var b = [], c = 0, d = this.length; c < d; c++) {
                    var e = this.get(c);
                    if (e.Wilq32 && e.Wilq32.PhotoEffect) e.Wilq32.PhotoEffect._handleRotation(a);
                    else {
                        var f = k.extend(!0, {}, a),
                            e = (new Wilq32.PhotoEffect(e, f))._rootObj;
                        b.push(k(e))
                    }
                }
                return b
            }
        },
        getRotateAngle: function() {
            for (var a = [], b = 0, c = this.length; b < c; b++) {
                var d = this.get(b);
                d.Wilq32 && d.Wilq32.PhotoEffect && (a[b] = d.Wilq32.PhotoEffect._angle)
            }
            return a
        },
        stopRotate: function() {
            for (var a = 0, b = this.length; a < b; a++) {
                var c = this.get(a);
                c.Wilq32 && c.Wilq32.PhotoEffect && clearTimeout(c.Wilq32.PhotoEffect._timer)
            }
        }
    });
    var Wilq32 = window.Wilq32 || {};
    Wilq32.PhotoEffect = function() {
        return d ? function(a, b) {
            a.Wilq32 = { PhotoEffect: this };
            this._img = this._rootObj = this._eventObj = a;
            this._handleRotation(b)
        } : function(a, b) {
            this._img = a;
            this._onLoadDelegate = [b];
            this._rootObj = document.createElement("span");
            this._rootObj.style.display = "inline-block";
            this._rootObj.Wilq32 = { PhotoEffect: this };
            a.parentNode.insertBefore(this._rootObj, a);
            if (a.complete) this._Loader();
            else {
                var c = this;
                jQuery(this._img).bind("load", function() { c._Loader() })
            }
        }
    }();
    Wilq32.PhotoEffect.prototype = {
        _setupParameters: function(a) {
            this._parameters = this._parameters || {};
            "number" !==
            typeof this._angle && (this._angle = 0);
            "number" === typeof a.angle && (this._angle = a.angle);
            this._parameters.animateTo = "number" === typeof a.animateTo ? a.animateTo : this._angle;
            this._parameters.step = a.step || this._parameters.step || null;
            this._parameters.easing = a.easing || this._parameters.easing || this._defaultEasing;
            this._parameters.duration = a.duration || this._parameters.duration || 1E3;
            this._parameters.callback = a.callback || this._parameters.callback || this._emptyFunction;
            this._parameters.center = a.center || this._parameters.center || ["50%", "50%"];
            this._rotationCenterX = "string" == typeof this._parameters.center[0] ? parseInt(this._parameters.center[0], 10) / 100 * this._imgWidth * this._aspectW : this._parameters.center[0];
            this._rotationCenterY = "string" == typeof this._parameters.center[1] ? parseInt(this._parameters.center[1], 10) / 100 * this._imgHeight * this._aspectH : this._parameters.center[1];
            a.bind && a.bind != this._parameters.bind && this._BindEvents(a.bind)
        },
        _emptyFunction: function() {},
        _defaultEasing: function(a, b, c, d, e) {
            return -d * ((b = b / e - 1) * b * b * b -
                1) + c
        },
        _handleRotation: function(a, b) { d || this._img.complete || b ? (this._setupParameters(a), this._angle == this._parameters.animateTo ? this._rotate(this._angle) : this._animateStart()) : this._onLoadDelegate.push(a) },
        _BindEvents: function(a) {
            if (a && this._eventObj) {
                if (this._parameters.bind) {
                    var b = this._parameters.bind,
                        c;
                    for (c in b) b.hasOwnProperty(c) && jQuery(this._eventObj).unbind(c, b[c])
                }
                this._parameters.bind = a;
                for (c in a) a.hasOwnProperty(c) && jQuery(this._eventObj).bind(c, a[c])
            }
        },
        _Loader: function() {
            return IE ? function() {
                var a =
                    this._img.width,
                    b = this._img.height;
                this._imgWidth = a;
                this._imgHeight = b;
                this._img.parentNode.removeChild(this._img);
                this._vimage = this.createVMLNode("image");
                this._vimage.src = this._img.src;
                this._vimage.style.height = b + "px";
                this._vimage.style.width = a + "px";
                this._vimage.style.position = "absolute";
                this._vimage.style.top = "0px";
                this._vimage.style.left = "0px";
                this._aspectW = this._aspectH = 1;
                this._container = this.createVMLNode("group");
                this._container.style.width = a;
                this._container.style.height = b;
                this._container.style.position =
                    "absolute";
                this._container.style.top = "0px";
                this._container.style.left = "0px";
                this._container.setAttribute("coordsize", a - 1 + "," + (b - 1));
                this._container.appendChild(this._vimage);
                this._rootObj.appendChild(this._container);
                this._rootObj.style.position = "relative";
                this._rootObj.style.width = a + "px";
                this._rootObj.style.height = b + "px";
                this._rootObj.setAttribute("id", this._img.getAttribute("id"));
                this._rootObj.className = this._img.className;
                for (this._eventObj = this._rootObj; a = this._onLoadDelegate.shift();) this._handleRotation(a, !0)
            } : function() {
                this._rootObj.setAttribute("id", this._img.getAttribute("id"));
                this._rootObj.className = this._img.className;
                this._imgWidth = this._img.naturalWidth;
                this._imgHeight = this._img.naturalHeight;
                var a = Math.sqrt(this._imgHeight * this._imgHeight + this._imgWidth * this._imgWidth);
                this._width = 3 * a;
                this._height = 3 * a;
                this._aspectW = this._img.offsetWidth / this._img.naturalWidth;
                this._aspectH = this._img.offsetHeight / this._img.naturalHeight;
                this._img.parentNode.removeChild(this._img);
                this._canvas = document.createElement("canvas");
                this._canvas.setAttribute("width", this._width);
                this._canvas.style.position = "relative";
                this._canvas.style.left = -this._img.height * this._aspectW + "px";
                this._canvas.style.top = -this._img.width * this._aspectH + "px";
                this._canvas.Wilq32 = this._rootObj.Wilq32;
                this._rootObj.appendChild(this._canvas);
                this._rootObj.style.width = this._img.width * this._aspectW + "px";
                this._rootObj.style.height = this._img.height * this._aspectH + "px";
                this._eventObj = this._canvas;
                for (this._cnv = this._canvas.getContext("2d"); a = this._onLoadDelegate.shift();) this._handleRotation(a, !0)
            }
        }(),
        _animateStart: function() {
            this._timer && clearTimeout(this._timer);
            this._animateStartTime = +new Date;
            this._animateStartAngle = this._angle;
            this._animate()
        },
        _animate: function() {
            var a = +new Date,
                b = a - this._animateStartTime > this._parameters.duration;
            if (b && !this._parameters.animatedGif) clearTimeout(this._timer);
            else {
                if (this._canvas || this._vimage || this._img) a = this._parameters.easing(0, a - this._animateStartTime, this._animateStartAngle, this._parameters.animateTo - this._animateStartAngle, this._parameters.duration),
                    this._rotate(~~(10 * a) / 10);
                this._parameters.step && this._parameters.step(this._angle);
                var c = this;
                this._timer = setTimeout(function() { c._animate.call(c) }, 10)
            }
            this._parameters.callback && b && (this._angle = this._parameters.animateTo, this._rotate(this._angle), this._parameters.callback.call(this._rootObj))
        },
        _rotate: function() {
            var a = Math.PI / 180;
            return IE ? function(a) {
                this._angle = a;
                this._container.style.rotation = a % 360 + "deg";
                this._vimage.style.top = -(this._rotationCenterY - this._imgHeight / 2) + "px";
                this._vimage.style.left = -(this._rotationCenterX - this._imgWidth / 2) + "px";
                this._container.style.top = this._rotationCenterY - this._imgHeight / 2 + "px";
                this._container.style.left = this._rotationCenterX - this._imgWidth / 2 + "px"
            } : d ? function(a) {
                this._angle = a;
                this._img.style[d] = "rotate(" + a % 360 + "deg)";
                this._img.style[f] = this._parameters.center.join(" ")
            } : function(b) {
                this._angle = b;
                b = b % 360 * a;
                this._canvas.width = this._width;
                this._canvas.height = this._height;
                this._cnv.translate(this._imgWidth * this._aspectW, this._imgHeight * this._aspectH);
                this._cnv.translate(this._rotationCenterX,
                    this._rotationCenterY);
                this._cnv.rotate(b);
                this._cnv.translate(-this._rotationCenterX, -this._rotationCenterY);
                this._cnv.scale(this._aspectW, this._aspectH);
                this._cnv.drawImage(this._img, 0, 0)
            }
        }()
    };
    $('body').on('click', '*[data-magnify]', function() {
        $(this).Magnify({
            Toolbar: [
                'prev',
                'next',
                'rotateLeft',
                'rotateRight',
                'zoomIn',
                'actualSize',
                'zoomOut'
            ],
            keyboard: true,
            draggable: true,
            movable: true,
            modalSize: [800, 600],
            beforeOpen: function(obj, data) {
                console.log('beforeOpen')
            },
            opened: function(obj, data) {
                console.log('opened')
            },
            beforeClose: function(obj, data) {
                console.log('beforeClose')
            },
            closed: function(obj, data) {
                console.log('closed')
            },
            beforeChange: function(obj, data) {
                console.log('beforeChange')
            },
            changed: function(obj, data) {
                console.log('changed')
            }
        });
        $(this).click();
    })
    IE && (Wilq32.PhotoEffect.prototype.createVMLNode = function() {
        document.createStyleSheet().addRule(".rvml", "behavior:url(#default#VML)");
        try {
            return !document.namespaces.rvml && document.namespaces.add("rvml", "urn:schemas-microsoft-com:vml"),
                function(a) { return document.createElement("<rvml:" + a + ' class="rvml">') }
        } catch (a) {
            return function(a) {
                return document.createElement("<" +
                    a + ' xmlns="urn:schemas-microsoft.com:vml" class="rvml">')
            }
        }
    }())
})(jQuery);