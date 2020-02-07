webpackJsonp([29],{

/***/ 1437:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__node_modules_babel_loader_7_1_5_babel_loader_lib_index_js_ref_2_0_node_modules_vue_loader_15_8_3_vue_loader_lib_index_js_vue_loader_options_handleDispatch_vue_vue_type_script_lang_js___ = __webpack_require__(1438);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__node_modules_babel_loader_7_1_5_babel_loader_lib_index_js_ref_2_0_node_modules_vue_loader_15_8_3_vue_loader_lib_index_js_vue_loader_options_handleDispatch_vue_vue_type_script_lang_js____default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__node_modules_babel_loader_7_1_5_babel_loader_lib_index_js_ref_2_0_node_modules_vue_loader_15_8_3_vue_loader_lib_index_js_vue_loader_options_handleDispatch_vue_vue_type_script_lang_js___);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__node_modules_babel_loader_7_1_5_babel_loader_lib_index_js_ref_2_0_node_modules_vue_loader_15_8_3_vue_loader_lib_index_js_vue_loader_options_handleDispatch_vue_vue_type_script_lang_js___) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__node_modules_babel_loader_7_1_5_babel_loader_lib_index_js_ref_2_0_node_modules_vue_loader_15_8_3_vue_loader_lib_index_js_vue_loader_options_handleDispatch_vue_vue_type_script_lang_js___[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (__WEBPACK_IMPORTED_MODULE_0__node_modules_babel_loader_7_1_5_babel_loader_lib_index_js_ref_2_0_node_modules_vue_loader_15_8_3_vue_loader_lib_index_js_vue_loader_options_handleDispatch_vue_vue_type_script_lang_js____default.a); 

/***/ }),

/***/ 1438:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _stringify = __webpack_require__(88);

var _stringify2 = _interopRequireDefault(_stringify);

var _axios = __webpack_require__(488);

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    name: "handleDispatch",
    data: function data() {
        return {
            id: 0,
            url: '',
            dept: '指挥中心',
            time: '今日 10:11',
            content: '请处理'
        };
    },
    created: function created() {},
    mounted: function mounted() {
        this.url = '/wgh/app/' + 'queryMessageDetail.action';
        this.id = this.$route.query.id;
        ;
        this.getDispatchDetail(this.id);
    },

    methods: {
        getDispatchDetail: function getDispatchDetail(row_id) {
            var that = this;
            var obj = { para: 'rowId=' + row_id };
            console.log((0, _stringify2.default)(obj));

            this.$http.post(this.url, obj).then(function (res) {
                if (res.code === undefined || res.code === 0) {
                    console.log('接口返回成功');
                    that.time = res.createTime;
                    that.content = res.message;
                } else {
                    toast(res.message);
                }
            });
        },
        handle: function handle() {
            var rowid = this.id;
            var that = this;
            app.$createPotDialog({
                $props: {
                    type: 'confirm',
                    content: '你确定要签收吗？'
                },
                $events: {
                    confirm: function confirm(A) {
                        console.log('指挥调度');

                        var param = { para: 'rowId=' + rowid };
                        var url = '/wgh/app/' + 'receiveMessage.action';
                        _axios2.default.post(url, param).then(function (d) {
                            ;
                            that.$router.push({ path: '/toDeal-index' });
                        });
                    }
                }
            }).show();
        }
    }
}; //
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

/***/ }),

/***/ 1439:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1652);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(1062).default
var update = add("51eaba8a", content, true, {});

/***/ }),

/***/ 1650:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/_vue-loader@15.8.3@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/_vue-loader@15.8.3@vue-loader/lib??vue-loader-options!./src/view/todo/handleDispatch.vue?vue&type=template&id=038a2806&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"dispatch-main"},[_c('tk-header',[_vm._v("指挥调度处理")]),_vm._v(" "),_c('tk-container',{staticClass:"dispatch-content"},[_c('div',{staticClass:"dispatch-title-wrapper"},[_c('div',{staticClass:"dispatch-title-left"},[_vm._v(_vm._s(_vm.dept))]),_vm._v(" "),_c('div',{staticClass:"dispatch-title-right"},[_vm._v(_vm._s(_vm.time))])]),_vm._v(" "),_c('div',{staticClass:"dispatch-content",domProps:{"innerHTML":_vm._s(_vm.content)}}),_vm._v(" "),_c('tk-button',{staticClass:"dispatch-sign-btn",on:{"click":_vm.handle}},[_vm._v("签收")])],1)],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/view/todo/handleDispatch.vue?vue&type=template&id=038a2806&scoped=true&
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });


/***/ }),

/***/ 1651:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__node_modules_extract_text_webpack_plugin_3_0_2_extract_text_webpack_plugin_dist_loader_js_ref_8_0_node_modules_vue_style_loader_4_1_2_vue_style_loader_index_js_node_modules_css_loader_0_28_11_css_loader_index_js_ref_8_2_node_modules_vue_loader_15_8_3_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_8_3_node_modules_px2rem_loader_0_1_9_px2rem_loader_index_js_ref_8_4_node_modules_less_loader_4_1_0_less_loader_dist_cjs_js_ref_8_5_node_modules_vue_loader_15_8_3_vue_loader_lib_index_js_vue_loader_options_handleDispatch_vue_vue_type_style_index_0_id_038a2806_lang_less_scoped_true___ = __webpack_require__(1439);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__node_modules_extract_text_webpack_plugin_3_0_2_extract_text_webpack_plugin_dist_loader_js_ref_8_0_node_modules_vue_style_loader_4_1_2_vue_style_loader_index_js_node_modules_css_loader_0_28_11_css_loader_index_js_ref_8_2_node_modules_vue_loader_15_8_3_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_8_3_node_modules_px2rem_loader_0_1_9_px2rem_loader_index_js_ref_8_4_node_modules_less_loader_4_1_0_less_loader_dist_cjs_js_ref_8_5_node_modules_vue_loader_15_8_3_vue_loader_lib_index_js_vue_loader_options_handleDispatch_vue_vue_type_style_index_0_id_038a2806_lang_less_scoped_true____default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__node_modules_extract_text_webpack_plugin_3_0_2_extract_text_webpack_plugin_dist_loader_js_ref_8_0_node_modules_vue_style_loader_4_1_2_vue_style_loader_index_js_node_modules_css_loader_0_28_11_css_loader_index_js_ref_8_2_node_modules_vue_loader_15_8_3_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_8_3_node_modules_px2rem_loader_0_1_9_px2rem_loader_index_js_ref_8_4_node_modules_less_loader_4_1_0_less_loader_dist_cjs_js_ref_8_5_node_modules_vue_loader_15_8_3_vue_loader_lib_index_js_vue_loader_options_handleDispatch_vue_vue_type_style_index_0_id_038a2806_lang_less_scoped_true___);
/* unused harmony reexport namespace */
 /* unused harmony default export */ var _unused_webpack_default_export = (__WEBPACK_IMPORTED_MODULE_0__node_modules_extract_text_webpack_plugin_3_0_2_extract_text_webpack_plugin_dist_loader_js_ref_8_0_node_modules_vue_style_loader_4_1_2_vue_style_loader_index_js_node_modules_css_loader_0_28_11_css_loader_index_js_ref_8_2_node_modules_vue_loader_15_8_3_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_8_3_node_modules_px2rem_loader_0_1_9_px2rem_loader_index_js_ref_8_4_node_modules_less_loader_4_1_0_less_loader_dist_cjs_js_ref_8_5_node_modules_vue_loader_15_8_3_vue_loader_lib_index_js_vue_loader_options_handleDispatch_vue_vue_type_style_index_0_id_038a2806_lang_less_scoped_true____default.a); 

/***/ }),

/***/ 1652:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1061)(true);
// imports


// module
exports.push([module.i, ".dispatch-content[data-v-038a2806]{width:100vw;background:#fff}.dispatch-content .dispatch-title-wrapper[data-v-038a2806]{width:calc(100% - 1.25rem);height:3.125rem;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-flow:row nowrap;flex-flow:row nowrap;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;-webkit-box-align:center;-ms-flex-align:center;align-items:center;margin-left:.625rem;border-bottom:.0625rem solid #999}.dispatch-content .dispatch-title-wrapper .dispatch-title-left[data-v-038a2806],.dispatch-content .dispatch-title-wrapper .dispatch-title-right[data-v-038a2806]{font-size:1.125rem}.dispatch-content .dispatch-content[data-v-038a2806]{width:100vw;height:calc(100% - 7.75rem);padding:1.5rem .625rem 0;font-size:1.125rem;overflow-y:auto;line-height:1.5rem}.dispatch-content .dispatch-sign-btn[data-v-038a2806]{margin-top:1.5rem}", "", {"version":3,"sources":["/Users/zz/project/zhzf_platform/vue/mobile1.0/src/view/todo/handleDispatch.vue"],"names":[],"mappings":"AAAA,mCACE,YAAY,AACZ,eAAiB,CACnB,AAEA,2DACE,2BAA2B,AAC3B,gBAAgB,AAChB,oBAAa,AAAb,oBAAa,AAAb,aAAa,AACb,8BAAqB,AAArB,6BAAqB,AAArB,yBAAqB,AAArB,qBAAqB,AACrB,yBAA8B,AAA9B,sBAA8B,AAA9B,8BAA8B,AAC9B,yBAAmB,AAAnB,sBAAmB,AAAnB,mBAAmB,AACnB,oBAAqB,AACrB,iCAAsC,CACxC,AAMA,iKACE,kBAAmB,CACrB,AAEA,qDACE,YAAY,AACZ,4BAA4B,AAC5B,yBAAmC,AACnC,mBAAmB,AACnB,gBAAgB,AAChB,kBAAmB,CACrB,AAEA,sDACE,iBAAkB,CACpB","file":"handleDispatch.vue?vue&type=style&index=0&id=038a2806&lang=less&scoped=true&","sourcesContent":[".dispatch-content {\n  width: 100vw;\n  background: white;\n}\n\n.dispatch-content .dispatch-title-wrapper {\n  width: calc(100% - 1.25rem);\n  height: 3.125rem;\n  display: flex;\n  flex-flow: row nowrap;\n  justify-content: space-between;\n  align-items: center;\n  margin-left: 0.625rem;\n  border-bottom: 0.0625rem solid #999999;\n}\n\n.dispatch-content .dispatch-title-wrapper .dispatch-title-left {\n  font-size: 1.125rem;\n}\n\n.dispatch-content .dispatch-title-wrapper .dispatch-title-right {\n  font-size: 1.125rem;\n}\n\n.dispatch-content .dispatch-content {\n  width: 100vw;\n  height: calc(100% - 7.75rem);\n  padding: 1.5rem 0.625rem 0 0.625rem;\n  font-size: 1.125rem;\n  overflow-y: auto;\n  line-height: 1.5rem;\n}\n\n.dispatch-content .dispatch-sign-btn {\n  margin-top: 1.5rem;\n}"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ 549:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__handleDispatch_vue_vue_type_template_id_038a2806_scoped_true___ = __webpack_require__(1650);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__handleDispatch_vue_vue_type_script_lang_js___ = __webpack_require__(1437);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_1__handleDispatch_vue_vue_type_script_lang_js___) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_1__handleDispatch_vue_vue_type_script_lang_js___[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__handleDispatch_vue_vue_type_style_index_0_id_038a2806_lang_less_scoped_true___ = __webpack_require__(1651);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__node_modules_vue_loader_15_8_3_vue_loader_lib_runtime_componentNormalizer_js__ = __webpack_require__(0);






/* normalize component */

var component = Object(__WEBPACK_IMPORTED_MODULE_3__node_modules_vue_loader_15_8_3_vue_loader_lib_runtime_componentNormalizer_js__["a" /* default */])(
  __WEBPACK_IMPORTED_MODULE_1__handleDispatch_vue_vue_type_script_lang_js___["default"],
  __WEBPACK_IMPORTED_MODULE_0__handleDispatch_vue_vue_type_template_id_038a2806_scoped_true___["a" /* render */],
  __WEBPACK_IMPORTED_MODULE_0__handleDispatch_vue_vue_type_template_id_038a2806_scoped_true___["b" /* staticRenderFns */],
  false,
  null,
  "038a2806",
  null
  
)

/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ })

});