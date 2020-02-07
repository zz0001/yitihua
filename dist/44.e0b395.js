webpackJsonp([44],{

/***/ 1366:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__node_modules_babel_loader_7_1_5_babel_loader_lib_index_js_ref_2_0_node_modules_vue_loader_15_8_3_vue_loader_lib_index_js_vue_loader_options_download_vue_vue_type_script_lang_js___ = __webpack_require__(1367);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__node_modules_babel_loader_7_1_5_babel_loader_lib_index_js_ref_2_0_node_modules_vue_loader_15_8_3_vue_loader_lib_index_js_vue_loader_options_download_vue_vue_type_script_lang_js____default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__node_modules_babel_loader_7_1_5_babel_loader_lib_index_js_ref_2_0_node_modules_vue_loader_15_8_3_vue_loader_lib_index_js_vue_loader_options_download_vue_vue_type_script_lang_js___);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__node_modules_babel_loader_7_1_5_babel_loader_lib_index_js_ref_2_0_node_modules_vue_loader_15_8_3_vue_loader_lib_index_js_vue_loader_options_download_vue_vue_type_script_lang_js___) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__node_modules_babel_loader_7_1_5_babel_loader_lib_index_js_ref_2_0_node_modules_vue_loader_15_8_3_vue_loader_lib_index_js_vue_loader_options_download_vue_vue_type_script_lang_js___[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (__WEBPACK_IMPORTED_MODULE_0__node_modules_babel_loader_7_1_5_babel_loader_lib_index_js_ref_2_0_node_modules_vue_loader_15_8_3_vue_loader_lib_index_js_vue_loader_options_download_vue_vue_type_script_lang_js____default.a); 

/***/ }),

/***/ 1367:
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

exports.default = {
    data: function data() {
        return {
            baoming: "一体化演示",
            fuwuqi: "http://10.1.163.149:8090/login",
            icon: "",
            icon2: "",
            imgShow: false
        };
    },

    methods: {
        inputChange: function inputChange() {
            var that = this;
            var reader = new FileReader();
            reader.onload = function (evt) {
                that.icon = evt.target.result;
            };
            reader.readAsDataURL(this.$refs.file.files[0]);

            this.imgShow = true;
        },
        inputChange2: function inputChange2() {
            var that = this;
            var reader = new FileReader();
            reader.onload = function (evt) {
                that.icon2 = evt.target.result;
            };
            reader.readAsDataURL(this.$refs.file2.files[0]);
            this.imgShow = true;
        },
        submit: function submit() {
            if (!this.baoming || !this.fuwuqi || !this.icon || !this.icon2) {
                var signs;
                signs = this.$createSignFail({
                    $props: {
                        content: "存在未填项，请全部填写后再打包"
                    }
                }).show();
                setTimeout(function () {
                    signs.hide();
                }, 2000);
            } else {
                this.$http.post("/server/download", {
                    baoming: this.baoming,
                    fuwuqi: this.fuwuqi,
                    icon: this.icon,
                    icon2: this.icon2
                }).then(function (d) {
                    if (d.code == 0) {
                        location.href = d.path;
                    } else {
                        console.log(12);
                    }
                });
            }
        }
    },
    mounted: function mounted() {}
};

/***/ }),

/***/ 1368:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1585);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(1062).default
var update = add("4d128dbe", content, true, {});

/***/ }),

/***/ 1583:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/_vue-loader@15.8.3@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/_vue-loader@15.8.3@vue-loader/lib??vue-loader-options!./src/view/download.vue?vue&type=template&id=d0381480&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"download"},[_c('tk-header',{attrs:{"back":false}},[_vm._v("下载APP")]),_vm._v(" "),_c('div',{staticClass:"wrap"},[_c('div',{staticClass:"row"},[_c('span',[_vm._v("请输入应用名称")]),_vm._v(" "),_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.baoming),expression:"baoming"}],attrs:{"type":"text"},domProps:{"value":(_vm.baoming)},on:{"input":function($event){if($event.target.composing){ return; }_vm.baoming=$event.target.value}}})]),_vm._v(" "),_c('div',{staticClass:"row"},[_c('span',[_vm._v("请输入服务器地址")]),_vm._v(" "),_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.fuwuqi),expression:"fuwuqi"}],attrs:{"type":"text"},domProps:{"value":(_vm.fuwuqi)},on:{"input":function($event){if($event.target.composing){ return; }_vm.fuwuqi=$event.target.value}}})]),_vm._v(" "),_c('div',{staticClass:"row"},[_c('span',[_vm._v("请上传icon图标")]),_vm._v(" "),_c('input',{ref:"file",attrs:{"type":"file","accept":"image/png"},on:{"change":_vm.inputChange}})]),_vm._v(" "),_c('div',{staticClass:"row"},[_c('span',[_vm._v("请上传启动页")]),_vm._v(" "),_c('input',{ref:"file2",attrs:{"type":"file","accept":"image/png"},on:{"change":_vm.inputChange2}})]),_vm._v(" "),(_vm.imgShow)?_c('div',{staticClass:"img-wrap",on:{"click":function($event){_vm.imgShow=!_vm.imgShow}}},[_c('div',{staticClass:"img-box"},[_c('img',{attrs:{"src":_vm.icon,"alt":""}}),_vm._v(" "),_c('p',[_vm._v("图标预览")])]),_vm._v(" "),_c('div',{staticClass:"img-box"},[_c('img',{attrs:{"src":_vm.icon2,"alt":""}}),_vm._v(" "),_c('p',[_vm._v("启动页预览")])])]):_vm._e()]),_vm._v(" "),_c('tk-button',{on:{"click":_vm.submit}},[_vm._v("生成apk")]),_vm._v(" "),_c('tk-button',{on:{"click":function($event){return _vm.$router.push('/download-history')}}},[_vm._v("查看历史版本")])],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/view/download.vue?vue&type=template&id=d0381480&scoped=true&
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });


/***/ }),

/***/ 1584:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__node_modules_extract_text_webpack_plugin_3_0_2_extract_text_webpack_plugin_dist_loader_js_ref_8_0_node_modules_vue_style_loader_4_1_2_vue_style_loader_index_js_node_modules_css_loader_0_28_11_css_loader_index_js_ref_8_2_node_modules_vue_loader_15_8_3_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_8_3_node_modules_px2rem_loader_0_1_9_px2rem_loader_index_js_ref_8_4_node_modules_less_loader_4_1_0_less_loader_dist_cjs_js_ref_8_5_node_modules_vue_loader_15_8_3_vue_loader_lib_index_js_vue_loader_options_download_vue_vue_type_style_index_0_id_d0381480_lang_less_scoped_true___ = __webpack_require__(1368);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__node_modules_extract_text_webpack_plugin_3_0_2_extract_text_webpack_plugin_dist_loader_js_ref_8_0_node_modules_vue_style_loader_4_1_2_vue_style_loader_index_js_node_modules_css_loader_0_28_11_css_loader_index_js_ref_8_2_node_modules_vue_loader_15_8_3_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_8_3_node_modules_px2rem_loader_0_1_9_px2rem_loader_index_js_ref_8_4_node_modules_less_loader_4_1_0_less_loader_dist_cjs_js_ref_8_5_node_modules_vue_loader_15_8_3_vue_loader_lib_index_js_vue_loader_options_download_vue_vue_type_style_index_0_id_d0381480_lang_less_scoped_true____default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__node_modules_extract_text_webpack_plugin_3_0_2_extract_text_webpack_plugin_dist_loader_js_ref_8_0_node_modules_vue_style_loader_4_1_2_vue_style_loader_index_js_node_modules_css_loader_0_28_11_css_loader_index_js_ref_8_2_node_modules_vue_loader_15_8_3_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_8_3_node_modules_px2rem_loader_0_1_9_px2rem_loader_index_js_ref_8_4_node_modules_less_loader_4_1_0_less_loader_dist_cjs_js_ref_8_5_node_modules_vue_loader_15_8_3_vue_loader_lib_index_js_vue_loader_options_download_vue_vue_type_style_index_0_id_d0381480_lang_less_scoped_true___);
/* unused harmony reexport namespace */
 /* unused harmony default export */ var _unused_webpack_default_export = (__WEBPACK_IMPORTED_MODULE_0__node_modules_extract_text_webpack_plugin_3_0_2_extract_text_webpack_plugin_dist_loader_js_ref_8_0_node_modules_vue_style_loader_4_1_2_vue_style_loader_index_js_node_modules_css_loader_0_28_11_css_loader_index_js_ref_8_2_node_modules_vue_loader_15_8_3_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_8_3_node_modules_px2rem_loader_0_1_9_px2rem_loader_index_js_ref_8_4_node_modules_less_loader_4_1_0_less_loader_dist_cjs_js_ref_8_5_node_modules_vue_loader_15_8_3_vue_loader_lib_index_js_vue_loader_options_download_vue_vue_type_style_index_0_id_d0381480_lang_less_scoped_true____default.a); 

/***/ }),

/***/ 1585:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1061)(true);
// imports


// module
exports.push([module.i, ".download[data-v-d0381480]{width:100vw;height:100vh}.download .wrap[data-v-d0381480]{width:100vw;height:calc(100vh - 12.125rem)}.download .wrap .row[data-v-d0381480]{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;text-align:left;height:3.125rem;line-height:3.125rem;border-bottom:.0625rem solid #dbdbdb;padding:0 1.25rem}.download .wrap .row span[data-v-d0381480]{-webkit-box-flex:3.6;-ms-flex:3.6;flex:3.6;color:#666}.download .wrap .row input[data-v-d0381480]{-webkit-box-flex:6.3;-ms-flex:6.3;flex:6.3;width:30%;border:.0625rem solid #ddd;border-radius:.3125rem;height:1.875rem;line-height:1.875rem;margin-top:.625rem;padding-left:.3125rem}.download .wrap .img-wrap[data-v-d0381480]{width:100%;height:12.5rem;line-height:12.5rem;text-align:center;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:space-evenly;-ms-flex-pack:space-evenly;justify-content:space-evenly}.download .wrap .img-wrap p[data-v-d0381480]{line-height:0}", "", {"version":3,"sources":["/Users/zz/project/zhzf_platform/vue/mobile1.0/src/view/download.vue"],"names":[],"mappings":"AAAA,2BACE,YAAY,AACZ,YAAa,CACf,AAEA,iCACE,YAAY,AACZ,8BAA+B,CACjC,AAEA,sCACE,oBAAa,AAAb,oBAAa,AAAb,aAAa,AACb,yBAA8B,AAA9B,sBAA8B,AAA9B,8BAA8B,AAC9B,gBAAgB,AAChB,gBAAgB,AAChB,qBAAqB,AACrB,qCAAsC,AACtC,iBAAkB,CACpB,AAEA,2CACE,qBAAS,AAAT,aAAS,AAAT,SAAS,AACT,UAAW,CACb,AAEA,4CACE,qBAAS,AAAT,aAAS,AAAT,SAAS,AACT,UAAU,AACV,2BAA4B,AAC5B,uBAAwB,AACxB,gBAAgB,AAChB,qBAAqB,AACrB,mBAAoB,AACpB,qBAAuB,CACzB,AAEA,2CACE,WAAW,AACX,eAAe,AACf,oBAAoB,AACpB,kBAAkB,AAClB,oBAAa,AAAb,oBAAa,AAAb,aAAa,AACb,8BAA6B,AAA7B,2BAA6B,AAA7B,4BAA6B,CAC/B,AAEA,6CACE,aAAc,CAChB","file":"download.vue?vue&type=style&index=0&id=d0381480&lang=less&scoped=true&","sourcesContent":[".download {\n  width: 100vw;\n  height: 100vh;\n}\n\n.download .wrap {\n  width: 100vw;\n  height: calc(100vh - 12.125rem);\n}\n\n.download .wrap .row {\n  display: flex;\n  justify-content: space-between;\n  text-align: left;\n  height: 3.125rem;\n  line-height: 3.125rem;\n  border-bottom: 0.0625rem solid #dbdbdb;\n  padding: 0 1.25rem;\n}\n\n.download .wrap .row span {\n  flex: 3.6;\n  color: #666;\n}\n\n.download .wrap .row input {\n  flex: 6.3;\n  width: 30%;\n  border: 0.0625rem solid #ddd;\n  border-radius: 0.3125rem;\n  height: 1.875rem;\n  line-height: 1.875rem;\n  margin-top: 0.625rem;\n  padding-left: 0.3125rem;\n}\n\n.download .wrap .img-wrap {\n  width: 100%;\n  height: 12.5rem;\n  line-height: 12.5rem;\n  text-align: center;\n  display: flex;\n  justify-content: space-evenly;\n}\n\n.download .wrap .img-wrap p {\n  line-height: 0;\n}"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ 526:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__download_vue_vue_type_template_id_d0381480_scoped_true___ = __webpack_require__(1583);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__download_vue_vue_type_script_lang_js___ = __webpack_require__(1366);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_1__download_vue_vue_type_script_lang_js___) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_1__download_vue_vue_type_script_lang_js___[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__download_vue_vue_type_style_index_0_id_d0381480_lang_less_scoped_true___ = __webpack_require__(1584);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__node_modules_vue_loader_15_8_3_vue_loader_lib_runtime_componentNormalizer_js__ = __webpack_require__(0);






/* normalize component */

var component = Object(__WEBPACK_IMPORTED_MODULE_3__node_modules_vue_loader_15_8_3_vue_loader_lib_runtime_componentNormalizer_js__["a" /* default */])(
  __WEBPACK_IMPORTED_MODULE_1__download_vue_vue_type_script_lang_js___["default"],
  __WEBPACK_IMPORTED_MODULE_0__download_vue_vue_type_template_id_d0381480_scoped_true___["a" /* render */],
  __WEBPACK_IMPORTED_MODULE_0__download_vue_vue_type_template_id_d0381480_scoped_true___["b" /* staticRenderFns */],
  false,
  null,
  "d0381480",
  null
  
)

/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ })

});