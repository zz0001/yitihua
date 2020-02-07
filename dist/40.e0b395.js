webpackJsonp([40],{

/***/ 1386:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__node_modules_babel_loader_7_1_5_babel_loader_lib_index_js_ref_2_0_node_modules_vue_loader_15_8_3_vue_loader_lib_index_js_vue_loader_options_more_vue_vue_type_script_lang_js___ = __webpack_require__(1387);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__node_modules_babel_loader_7_1_5_babel_loader_lib_index_js_ref_2_0_node_modules_vue_loader_15_8_3_vue_loader_lib_index_js_vue_loader_options_more_vue_vue_type_script_lang_js____default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__node_modules_babel_loader_7_1_5_babel_loader_lib_index_js_ref_2_0_node_modules_vue_loader_15_8_3_vue_loader_lib_index_js_vue_loader_options_more_vue_vue_type_script_lang_js___);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__node_modules_babel_loader_7_1_5_babel_loader_lib_index_js_ref_2_0_node_modules_vue_loader_15_8_3_vue_loader_lib_index_js_vue_loader_options_more_vue_vue_type_script_lang_js___) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__node_modules_babel_loader_7_1_5_babel_loader_lib_index_js_ref_2_0_node_modules_vue_loader_15_8_3_vue_loader_lib_index_js_vue_loader_options_more_vue_vue_type_script_lang_js___[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (__WEBPACK_IMPORTED_MODULE_0__node_modules_babel_loader_7_1_5_babel_loader_lib_index_js_ref_2_0_node_modules_vue_loader_15_8_3_vue_loader_lib_index_js_vue_loader_options_more_vue_vue_type_script_lang_js____default.a); 

/***/ }),

/***/ 1387:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

exports.default = {
    data: function data() {
        return {
            active: false,
            my: [{
                title: '百度',
                id: '12366',
                to: 'http://www.baidu.com',
                icon: 'http://img5.imgtn.bdimg.com/it/u=3437217665,1564280326&fm=26&gp=0.jpg'
            }],
            more: [{
                title: '百度',
                id: '12366ss',
                to: 'http://www.baidu.com',
                icon: 'http://img5.imgtn.bdimg.com/it/u=3437217665,1564280326&fm=26&gp=0.jpg'
            }]
        };
    },

    methods: {
        cancel: function cancel() {
            this.active = false;
        },
        complete: function complete() {
            this.active = false;
            var ids = this.my.map(function (item) {
                return item.id;
            });
            var mores = this.more.map(function (item) {
                return item.id;
            });
            this.$http.post('/ump/proxy/updateAppletsList', {
                myids: ids.join(','),
                moreids: mores.join(',')
            }).then(function (d) {
                if (d.responseCode == 0) {
                    alert('成功');
                }
            });
        },
        myClick: function myClick(ii) {
            var _this = this;

            if (this.active) {
                this.my = this.my.filter(function (item) {
                    if (item.id == ii.id) {
                        _this.more.push(item);
                    }
                    return item.id != ii.id;
                });
            } else {
                location.href = ii.to;
            }
        },
        moreClick: function moreClick(ii) {
            var _this2 = this;

            if (this.active) {
                this.more = this.more.filter(function (item) {
                    if (item.id == ii.id) {
                        _this2.my.push(item);
                    }
                    return item.id != ii.id;
                });
            } else {
                location.href = ii.to;
            }
        }
    },
    mounted: function mounted() {
        var _this3 = this;

        this.$http.post('/ump/proxy/getAppletsList').then(function (d) {
            if (d.appletsList) {
                _this3.more = d.appletsList;
            }
        });
        this.$http.post('/ump/proxy/myAppletsList').then(function (d) {
            if (d.appletsList) {
                _this3.my = d.appletsList;
            }
        });
    }
};

/***/ }),

/***/ 1388:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1601);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(1062).default
var update = add("de5ad650", content, true, {});

/***/ }),

/***/ 1599:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/_vue-loader@15.8.3@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/_vue-loader@15.8.3@vue-loader/lib??vue-loader-options!./src/view/more.vue?vue&type=template&id=d84edd2a&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"more"},[_c('tk-header',{attrs:{"left":_vm.active,"back":!_vm.active}},[_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.active),expression:"active"}],attrs:{"slot":"left"},on:{"click":_vm.cancel},slot:"left"},[_vm._v("\r\n            取消\r\n        ")]),_vm._v("\r\n        管理我的应用\r\n        "),_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.active),expression:"active"}],attrs:{"slot":"right"},on:{"click":_vm.complete},slot:"right"},[_vm._v("完成")])]),_vm._v(" "),_c('tk-scroll',[_c('div',{staticClass:"my"},[_c('div',{staticClass:"title"},[_vm._v("我的应用")]),_vm._v(" "),(_vm.active&&!_vm.my.length)?_c('div',[_c('tk-nodata')],1):_vm._e(),_vm._v(" "),_c('div',{staticClass:"my-wrap"},[_vm._l((_vm.my),function(item){return _c('div',{on:{"click":function($event){return _vm.myClick(item)}}},[_c('div',{staticClass:"icon",style:({'background-image':("url(" + (item.icon) + ")")})}),_vm._v(" "),_c('div',{staticClass:"title"},[_vm._v(_vm._s(item.title))]),_vm._v(" "),_c('svg',{directives:[{name:"show",rawName:"v-show",value:(_vm.active),expression:"active"}],staticClass:"right-top",attrs:{"t":"1579139154210","viewBox":"0 0 1024 1024","version":"1.1","xmlns":"http://www.w3.org/2000/svg","p-id":"2660","width":"200","height":"200"}},[_c('path',{attrs:{"d":"M512 0C230.4 0 0 230.4 0 512s230.4 512 512 512 512-230.4 512-512S793.6 0 512 0z m151.466667 633.6c8.533333 8.533333 8.533333 21.333333 0 29.866667-8.533333 8.533333-21.333333 8.533333-29.866667 0L512 541.866667l-121.6 121.6c-8.533333 8.533333-21.333333 8.533333-29.866667 0-8.533333-8.533333-8.533333-21.333333 0-29.866667l121.6-121.6-121.6-121.6c-8.533333-8.533333-8.533333-21.333333 0-29.866667 8.533333-8.533333 21.333333-8.533333 29.866667 0l121.6 121.6 121.6-121.6c8.533333-8.533333 21.333333-8.533333 29.866667 0 8.533333 8.533333 8.533333 21.333333 0 29.866667L541.866667 512l121.6 121.6z","fill":"#666767","p-id":"2661"}})])])}),_vm._v(" "),(!_vm.active)?_c('div',{on:{"click":function($event){_vm.active=true}}},[_c('svg',{staticClass:"icon",staticStyle:{"background":"#ddd"},attrs:{"t":"1579138863693","viewBox":"-250 -250 1524 1524","version":"1.1","xmlns":"http://www.w3.org/2000/svg","p-id":"1912","width":"200","height":"200"}},[_c('path',{attrs:{"d":"M554.76 549.889v341c0 26.51-21.491 48-48 48-26.51 0-48-21.49-48-48v-341H114.172c-26.51 0-48-21.49-48-48s21.49-48 48-48H458.76v-340c0-26.51 21.49-48 48-48s48 21.49 48 48v340h346.414c26.51 0 48 21.49 48 48s-21.49 48-48 48H554.76z","p-id":"1913"}})]),_vm._v(" "),_c('div',{staticClass:"title"},[_vm._v("添加")])]):_vm._e()],2)]),_vm._v(" "),_c('div',{staticClass:"more"},[_c('div',{staticClass:"title"},[_vm._v("更多应用")]),_vm._v(" "),(!_vm.more.length)?_c('div',[_c('tk-nodata')],1):_vm._e(),_vm._v(" "),_c('div',{staticClass:"my-wrap"},_vm._l((_vm.more),function(item){return _c('div',{on:{"click":function($event){return _vm.moreClick(item)}}},[_c('div',{staticClass:"icon",style:({'background-image':("url(" + (item.icon) + ")")})}),_vm._v(" "),_c('div',{staticClass:"title"},[_vm._v(_vm._s(item.title))]),_vm._v(" "),_c('svg',{directives:[{name:"show",rawName:"v-show",value:(_vm.active),expression:"active"}],staticClass:"right-top",attrs:{"t":"1579139351889","viewBox":"0 0 1024 1024","version":"1.1","xmlns":"http://www.w3.org/2000/svg","p-id":"3395","width":"200","height":"200"}},[_c('path',{attrs:{"d":"M512 1024C229.2224 1024 0 794.7776 0 512 0 229.2224 229.2224 0 512 0 794.7776 0 1024 229.2224 1024 512 1024 794.7776 794.7776 1024 512 1024ZM716.8 486.4 537.6 486.4 537.6 307.2 486.4 307.2 486.4 486.4 307.2 486.4 307.2 537.6 486.4 537.6 486.4 716.8 537.6 716.8 537.6 537.6 716.8 537.6 716.8 486.4Z","p-id":"3396"}})])])}),0)])])],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/view/more.vue?vue&type=template&id=d84edd2a&
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });


/***/ }),

/***/ 1600:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__node_modules_extract_text_webpack_plugin_3_0_2_extract_text_webpack_plugin_dist_loader_js_ref_8_0_node_modules_vue_style_loader_4_1_2_vue_style_loader_index_js_node_modules_css_loader_0_28_11_css_loader_index_js_ref_8_2_node_modules_vue_loader_15_8_3_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_8_3_node_modules_px2rem_loader_0_1_9_px2rem_loader_index_js_ref_8_4_node_modules_less_loader_4_1_0_less_loader_dist_cjs_js_ref_8_5_node_modules_vue_loader_15_8_3_vue_loader_lib_index_js_vue_loader_options_more_vue_vue_type_style_index_0_lang_less___ = __webpack_require__(1388);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__node_modules_extract_text_webpack_plugin_3_0_2_extract_text_webpack_plugin_dist_loader_js_ref_8_0_node_modules_vue_style_loader_4_1_2_vue_style_loader_index_js_node_modules_css_loader_0_28_11_css_loader_index_js_ref_8_2_node_modules_vue_loader_15_8_3_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_8_3_node_modules_px2rem_loader_0_1_9_px2rem_loader_index_js_ref_8_4_node_modules_less_loader_4_1_0_less_loader_dist_cjs_js_ref_8_5_node_modules_vue_loader_15_8_3_vue_loader_lib_index_js_vue_loader_options_more_vue_vue_type_style_index_0_lang_less____default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__node_modules_extract_text_webpack_plugin_3_0_2_extract_text_webpack_plugin_dist_loader_js_ref_8_0_node_modules_vue_style_loader_4_1_2_vue_style_loader_index_js_node_modules_css_loader_0_28_11_css_loader_index_js_ref_8_2_node_modules_vue_loader_15_8_3_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_8_3_node_modules_px2rem_loader_0_1_9_px2rem_loader_index_js_ref_8_4_node_modules_less_loader_4_1_0_less_loader_dist_cjs_js_ref_8_5_node_modules_vue_loader_15_8_3_vue_loader_lib_index_js_vue_loader_options_more_vue_vue_type_style_index_0_lang_less___);
/* unused harmony reexport namespace */
 /* unused harmony default export */ var _unused_webpack_default_export = (__WEBPACK_IMPORTED_MODULE_0__node_modules_extract_text_webpack_plugin_3_0_2_extract_text_webpack_plugin_dist_loader_js_ref_8_0_node_modules_vue_style_loader_4_1_2_vue_style_loader_index_js_node_modules_css_loader_0_28_11_css_loader_index_js_ref_8_2_node_modules_vue_loader_15_8_3_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_8_3_node_modules_px2rem_loader_0_1_9_px2rem_loader_index_js_ref_8_4_node_modules_less_loader_4_1_0_less_loader_dist_cjs_js_ref_8_5_node_modules_vue_loader_15_8_3_vue_loader_lib_index_js_vue_loader_options_more_vue_vue_type_style_index_0_lang_less____default.a); 

/***/ }),

/***/ 1601:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1061)(true);
// imports


// module
exports.push([module.i, ".more{background:#f3f3f3}.more .tk-nodata{text-align:center}.more .tk-nodata img{width:6.25rem;height:6.25rem;margin:1.5625rem;left:0;right:0}.more .more,.more .my{background:#fff}.more .more>.title,.more .my>.title{text-align:center;font-size:1.25rem;margin-top:.625rem}.more .more .my-wrap,.more .my .my-wrap{display:-webkit-box;display:-ms-flexbox;display:flex}.more .more .my-wrap>div,.more .my .my-wrap>div{width:25%;overflow:hidden;height:9.375rem;position:relative}.more .more .my-wrap>div .right-top,.more .my .my-wrap>div .right-top{position:absolute;width:1.25rem;height:1.25rem;right:0;top:0}.more .more .my-wrap>div .title,.more .my .my-wrap>div .title{position:absolute;bottom:.5rem;height:3.125rem;width:100%;text-align:center}.more .more .my-wrap>div .icon,.more .my .my-wrap>div .icon{width:18vw;border-radius:.9375rem;height:18vw;position:absolute;background-size:cover;background-repeat:no-repeat;left:0;right:0;bottom:3.125rem;top:0;margin:auto}", "", {"version":3,"sources":["/Users/zz/project/zhzf_platform/vue/mobile1.0/src/view/more.vue"],"names":[],"mappings":"AAAA,MACE,kBAAmB,CACrB,AAEA,iBACE,iBAAkB,CACpB,AAEA,qBACE,cAAc,AACd,eAAe,AACf,iBAAiB,AACjB,OAAO,AACP,OAAQ,CACV,AAEA,sBAEE,eAAgB,CAClB,AAEA,oCAEE,kBAAkB,AAClB,kBAAkB,AAClB,kBAAoB,CACtB,AAEA,wCAEE,oBAAa,AAAb,oBAAa,AAAb,YAAa,CACf,AAEA,gDAEE,UAAU,AACV,gBAAgB,AAChB,gBAAgB,AAChB,iBAAkB,CACpB,AAEA,sEAEE,kBAAkB,AAClB,cAAc,AACd,eAAe,AACf,QAAQ,AACR,KAAM,CACR,AAEA,8DAEE,kBAAkB,AAClB,aAAc,AACd,gBAAgB,AAChB,WAAW,AACX,iBAAkB,CACpB,AAEA,4DAEE,WAAW,AACX,uBAAwB,AACxB,YAAY,AACZ,kBAAkB,AAClB,sBAAsB,AACtB,4BAA4B,AAC5B,OAAO,AACP,QAAQ,AACR,gBAAgB,AAChB,MAAM,AACN,WAAY,CACd","file":"more.vue?vue&type=style&index=0&lang=less&","sourcesContent":[".more {\n  background: #f3f3f3;\n}\n\n.more .tk-nodata {\n  text-align: center;\n}\n\n.more .tk-nodata img {\n  width: 6.25rem;\n  height: 6.25rem;\n  margin: 1.5625rem;\n  left: 0;\n  right: 0;\n}\n\n.more .my,\n.more .more {\n  background: #fff;\n}\n\n.more .my > .title,\n.more .more > .title {\n  text-align: center;\n  font-size: 1.25rem;\n  margin-top: 0.625rem;\n}\n\n.more .my .my-wrap,\n.more .more .my-wrap {\n  display: flex;\n}\n\n.more .my .my-wrap > div,\n.more .more .my-wrap > div {\n  width: 25%;\n  overflow: hidden;\n  height: 9.375rem;\n  position: relative;\n}\n\n.more .my .my-wrap > div .right-top,\n.more .more .my-wrap > div .right-top {\n  position: absolute;\n  width: 1.25rem;\n  height: 1.25rem;\n  right: 0;\n  top: 0;\n}\n\n.more .my .my-wrap > div .title,\n.more .more .my-wrap > div .title {\n  position: absolute;\n  bottom: 0.5rem;\n  height: 3.125rem;\n  width: 100%;\n  text-align: center;\n}\n\n.more .my .my-wrap > div .icon,\n.more .more .my-wrap > div .icon {\n  width: 18vw;\n  border-radius: 0.9375rem;\n  height: 18vw;\n  position: absolute;\n  background-size: cover;\n  background-repeat: no-repeat;\n  left: 0;\n  right: 0;\n  bottom: 3.125rem;\n  top: 0;\n  margin: auto;\n}"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ 533:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__more_vue_vue_type_template_id_d84edd2a___ = __webpack_require__(1599);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__more_vue_vue_type_script_lang_js___ = __webpack_require__(1386);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_1__more_vue_vue_type_script_lang_js___) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_1__more_vue_vue_type_script_lang_js___[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__more_vue_vue_type_style_index_0_lang_less___ = __webpack_require__(1600);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__node_modules_vue_loader_15_8_3_vue_loader_lib_runtime_componentNormalizer_js__ = __webpack_require__(0);






/* normalize component */

var component = Object(__WEBPACK_IMPORTED_MODULE_3__node_modules_vue_loader_15_8_3_vue_loader_lib_runtime_componentNormalizer_js__["a" /* default */])(
  __WEBPACK_IMPORTED_MODULE_1__more_vue_vue_type_script_lang_js___["default"],
  __WEBPACK_IMPORTED_MODULE_0__more_vue_vue_type_template_id_d84edd2a___["a" /* render */],
  __WEBPACK_IMPORTED_MODULE_0__more_vue_vue_type_template_id_d84edd2a___["b" /* staticRenderFns */],
  false,
  null,
  null,
  null
  
)

/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ })

});