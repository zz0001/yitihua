webpackJsonp([46],{

/***/ 1360:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__node_modules_babel_loader_7_1_5_babel_loader_lib_index_js_ref_2_0_node_modules_vue_loader_15_8_3_vue_loader_lib_index_js_vue_loader_options_download_history_detail_vue_vue_type_script_lang_js___ = __webpack_require__(1361);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__node_modules_babel_loader_7_1_5_babel_loader_lib_index_js_ref_2_0_node_modules_vue_loader_15_8_3_vue_loader_lib_index_js_vue_loader_options_download_history_detail_vue_vue_type_script_lang_js____default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__node_modules_babel_loader_7_1_5_babel_loader_lib_index_js_ref_2_0_node_modules_vue_loader_15_8_3_vue_loader_lib_index_js_vue_loader_options_download_history_detail_vue_vue_type_script_lang_js___);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__node_modules_babel_loader_7_1_5_babel_loader_lib_index_js_ref_2_0_node_modules_vue_loader_15_8_3_vue_loader_lib_index_js_vue_loader_options_download_history_detail_vue_vue_type_script_lang_js___) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__node_modules_babel_loader_7_1_5_babel_loader_lib_index_js_ref_2_0_node_modules_vue_loader_15_8_3_vue_loader_lib_index_js_vue_loader_options_download_history_detail_vue_vue_type_script_lang_js___[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (__WEBPACK_IMPORTED_MODULE_0__node_modules_babel_loader_7_1_5_babel_loader_lib_index_js_ref_2_0_node_modules_vue_loader_15_8_3_vue_loader_lib_index_js_vue_loader_options_download_history_detail_vue_vue_type_script_lang_js____default.a); 

/***/ }),

/***/ 1361:
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

exports.default = {
    data: function data() {
        return {
            list: null
        };
    },
    created: function created() {
        // 获取传过来的参数
        var list = decodeURIComponent(this.$route.query.obj);
        this.list = JSON.parse(list);
        console.log(this.list);
    },

    methods: {
        tiaozhuan: function tiaozhuan(path) {
            location.href = location.origin + path;
        },
        odelete: function odelete(time) {
            var _this = this;

            this.$http.post("/server/delete", {
                id: time
            }).then(function (d) {
                _this.d = _this.d.filter(function (item) {
                    return item.time != time;
                });
            });
            this.$router.push({
                path: "/download-history"
            });
        },
        poper: function poper(path) {
            this.$createTkQrCode({
                $props: {
                    value: location.origin + path
                }
            }).show();
        }
    }
};

/***/ }),

/***/ 1362:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1579);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(1062).default
var update = add("e4931b32", content, true, {});

/***/ }),

/***/ 1577:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/_vue-loader@15.8.3@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/_vue-loader@15.8.3@vue-loader/lib??vue-loader-options!./src/view/download-history-detail.vue?vue&type=template&id=3dd79216&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"application-detail"},[_c('tk-header',[_vm._v("应用详情")]),_vm._v(" "),_c('tk-scroll',[_c('div',{staticClass:"wrap"},[_c('div',{staticClass:"rows1"},[_c('span',{staticClass:"title"},[_vm._v("应用图标：")]),_vm._v(" "),_c('span',{staticClass:"cont"},[_c('img',{staticStyle:{"width":"50px","height":"50px"},attrs:{"src":_vm.list.icon,"alt":""}})])]),_vm._v(" "),_c('div',{staticClass:"rows"},[_c('span',{staticClass:"title"},[_vm._v("应用启动页：")]),_vm._v(" "),_c('span',{staticClass:"cont"},[_c('img',{staticStyle:{"width":"100px","height":"100px"},attrs:{"src":_vm.list.icon2,"alt":""}})])]),_vm._v(" "),_c('div',{staticClass:"rows"},[_c('div',{staticClass:"button",on:{"click":function($event){$event.stopPropagation();return _vm.poper(_vm.list.path)}}},[_vm._v("点击弹出二维码")]),_vm._v(" "),_c('div',{staticClass:"button",staticStyle:{"margin-left":"20px"},on:{"click":function($event){$event.stopPropagation();return _vm.tiaozhuan(_vm.list.path)}}},[_vm._v("点击直接下载")]),_vm._v(" "),_c('div',{staticClass:"button",staticStyle:{"margin-left":"20px"},on:{"click":function($event){$event.stopPropagation();return _vm.odelete(_vm.list.time)}}},[_vm._v("删除")])])])])],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/view/download-history-detail.vue?vue&type=template&id=3dd79216&scoped=true&
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });


/***/ }),

/***/ 1578:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__node_modules_extract_text_webpack_plugin_3_0_2_extract_text_webpack_plugin_dist_loader_js_ref_8_0_node_modules_vue_style_loader_4_1_2_vue_style_loader_index_js_node_modules_css_loader_0_28_11_css_loader_index_js_ref_8_2_node_modules_vue_loader_15_8_3_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_8_3_node_modules_px2rem_loader_0_1_9_px2rem_loader_index_js_ref_8_4_node_modules_less_loader_4_1_0_less_loader_dist_cjs_js_ref_8_5_node_modules_vue_loader_15_8_3_vue_loader_lib_index_js_vue_loader_options_download_history_detail_vue_vue_type_style_index_0_id_3dd79216_lang_less_scoped_true___ = __webpack_require__(1362);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__node_modules_extract_text_webpack_plugin_3_0_2_extract_text_webpack_plugin_dist_loader_js_ref_8_0_node_modules_vue_style_loader_4_1_2_vue_style_loader_index_js_node_modules_css_loader_0_28_11_css_loader_index_js_ref_8_2_node_modules_vue_loader_15_8_3_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_8_3_node_modules_px2rem_loader_0_1_9_px2rem_loader_index_js_ref_8_4_node_modules_less_loader_4_1_0_less_loader_dist_cjs_js_ref_8_5_node_modules_vue_loader_15_8_3_vue_loader_lib_index_js_vue_loader_options_download_history_detail_vue_vue_type_style_index_0_id_3dd79216_lang_less_scoped_true____default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__node_modules_extract_text_webpack_plugin_3_0_2_extract_text_webpack_plugin_dist_loader_js_ref_8_0_node_modules_vue_style_loader_4_1_2_vue_style_loader_index_js_node_modules_css_loader_0_28_11_css_loader_index_js_ref_8_2_node_modules_vue_loader_15_8_3_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_8_3_node_modules_px2rem_loader_0_1_9_px2rem_loader_index_js_ref_8_4_node_modules_less_loader_4_1_0_less_loader_dist_cjs_js_ref_8_5_node_modules_vue_loader_15_8_3_vue_loader_lib_index_js_vue_loader_options_download_history_detail_vue_vue_type_style_index_0_id_3dd79216_lang_less_scoped_true___);
/* unused harmony reexport namespace */
 /* unused harmony default export */ var _unused_webpack_default_export = (__WEBPACK_IMPORTED_MODULE_0__node_modules_extract_text_webpack_plugin_3_0_2_extract_text_webpack_plugin_dist_loader_js_ref_8_0_node_modules_vue_style_loader_4_1_2_vue_style_loader_index_js_node_modules_css_loader_0_28_11_css_loader_index_js_ref_8_2_node_modules_vue_loader_15_8_3_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_8_3_node_modules_px2rem_loader_0_1_9_px2rem_loader_index_js_ref_8_4_node_modules_less_loader_4_1_0_less_loader_dist_cjs_js_ref_8_5_node_modules_vue_loader_15_8_3_vue_loader_lib_index_js_vue_loader_options_download_history_detail_vue_vue_type_style_index_0_id_3dd79216_lang_less_scoped_true____default.a); 

/***/ }),

/***/ 1579:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1061)(true);
// imports


// module
exports.push([module.i, ".application-detail[data-v-3dd79216]{width:100vw;height:100vh}.application-detail .wrap[data-v-3dd79216]{padding:.625rem 1.25rem}.application-detail .wrap .rows1[data-v-3dd79216]{display:-webkit-box;display:-ms-flexbox;display:flex;height:3.125rem;line-height:3.125rem}.application-detail .wrap .rows1 .title[data-v-3dd79216]{-webkit-box-flex:3.6;-ms-flex:3.6;flex:3.6;font-weight:700}.application-detail .wrap .rows1 .cont[data-v-3dd79216]{-webkit-box-flex:6.3;-ms-flex:6.3;flex:6.3}.application-detail .wrap .rows[data-v-3dd79216]{display:-webkit-box;display:-ms-flexbox;display:flex;height:9.375rem;line-height:9.375rem}.application-detail .wrap .rows .title[data-v-3dd79216]{-webkit-box-flex:3.6;-ms-flex:3.6;flex:3.6;font-weight:700}.application-detail .wrap .rows .cont[data-v-3dd79216]{-webkit-box-flex:6.3;-ms-flex:6.3;flex:6.3}", "", {"version":3,"sources":["/Users/zz/project/zhzf_platform/vue/mobile1.0/src/view/download-history-detail.vue"],"names":[],"mappings":"AAAA,qCACE,YAAY,AACZ,YAAa,CACf,AAEA,2CACE,uBAAyB,CAC3B,AAEA,kDACE,oBAAa,AAAb,oBAAa,AAAb,aAAa,AACb,gBAAgB,AAChB,oBAAqB,CACvB,AAEA,yDACE,qBAAS,AAAT,aAAS,AAAT,SAAS,AACT,eAAiB,CACnB,AAEA,wDACE,qBAAS,AAAT,aAAS,AAAT,QAAS,CACX,AAEA,iDACE,oBAAa,AAAb,oBAAa,AAAb,aAAa,AACb,gBAAgB,AAChB,oBAAqB,CACvB,AAEA,wDACE,qBAAS,AAAT,aAAS,AAAT,SAAS,AACT,eAAiB,CACnB,AAEA,uDACE,qBAAS,AAAT,aAAS,AAAT,QAAS,CACX","file":"download-history-detail.vue?vue&type=style&index=0&id=3dd79216&lang=less&scoped=true&","sourcesContent":[".application-detail {\n  width: 100vw;\n  height: 100vh;\n}\n\n.application-detail .wrap {\n  padding: 0.625rem 1.25rem;\n}\n\n.application-detail .wrap .rows1 {\n  display: flex;\n  height: 3.125rem;\n  line-height: 3.125rem;\n}\n\n.application-detail .wrap .rows1 .title {\n  flex: 3.6;\n  font-weight: bold;\n}\n\n.application-detail .wrap .rows1 .cont {\n  flex: 6.3;\n}\n\n.application-detail .wrap .rows {\n  display: flex;\n  height: 9.375rem;\n  line-height: 9.375rem;\n}\n\n.application-detail .wrap .rows .title {\n  flex: 3.6;\n  font-weight: bold;\n}\n\n.application-detail .wrap .rows .cont {\n  flex: 6.3;\n}"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ 524:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__download_history_detail_vue_vue_type_template_id_3dd79216_scoped_true___ = __webpack_require__(1577);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__download_history_detail_vue_vue_type_script_lang_js___ = __webpack_require__(1360);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_1__download_history_detail_vue_vue_type_script_lang_js___) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_1__download_history_detail_vue_vue_type_script_lang_js___[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__download_history_detail_vue_vue_type_style_index_0_id_3dd79216_lang_less_scoped_true___ = __webpack_require__(1578);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__node_modules_vue_loader_15_8_3_vue_loader_lib_runtime_componentNormalizer_js__ = __webpack_require__(0);






/* normalize component */

var component = Object(__WEBPACK_IMPORTED_MODULE_3__node_modules_vue_loader_15_8_3_vue_loader_lib_runtime_componentNormalizer_js__["a" /* default */])(
  __WEBPACK_IMPORTED_MODULE_1__download_history_detail_vue_vue_type_script_lang_js___["default"],
  __WEBPACK_IMPORTED_MODULE_0__download_history_detail_vue_vue_type_template_id_3dd79216_scoped_true___["a" /* render */],
  __WEBPACK_IMPORTED_MODULE_0__download_history_detail_vue_vue_type_template_id_3dd79216_scoped_true___["b" /* staticRenderFns */],
  false,
  null,
  "3dd79216",
  null
  
)

/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ })

});