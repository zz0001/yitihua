webpackJsonp([195],{

/***/ 1237:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__bar_vue_vue_type_template_id_a719dfe8_scoped_true___ = __webpack_require__(1472);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__bar_vue_vue_type_script_lang_js___ = __webpack_require__(1260);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_1__bar_vue_vue_type_script_lang_js___) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_1__bar_vue_vue_type_script_lang_js___[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__bar_vue_vue_type_style_index_0_id_a719dfe8_lang_less_scoped_true___ = __webpack_require__(1473);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__node_modules_vue_loader_15_8_3_vue_loader_lib_runtime_componentNormalizer_js__ = __webpack_require__(0);






/* normalize component */

var component = Object(__WEBPACK_IMPORTED_MODULE_3__node_modules_vue_loader_15_8_3_vue_loader_lib_runtime_componentNormalizer_js__["a" /* default */])(
  __WEBPACK_IMPORTED_MODULE_1__bar_vue_vue_type_script_lang_js___["default"],
  __WEBPACK_IMPORTED_MODULE_0__bar_vue_vue_type_template_id_a719dfe8_scoped_true___["a" /* render */],
  __WEBPACK_IMPORTED_MODULE_0__bar_vue_vue_type_template_id_a719dfe8_scoped_true___["b" /* staticRenderFns */],
  false,
  null,
  "a719dfe8",
  null
  
)

/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 1260:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__node_modules_babel_loader_7_1_5_babel_loader_lib_index_js_ref_2_0_node_modules_vue_loader_15_8_3_vue_loader_lib_index_js_vue_loader_options_bar_vue_vue_type_script_lang_js___ = __webpack_require__(1261);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__node_modules_babel_loader_7_1_5_babel_loader_lib_index_js_ref_2_0_node_modules_vue_loader_15_8_3_vue_loader_lib_index_js_vue_loader_options_bar_vue_vue_type_script_lang_js____default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__node_modules_babel_loader_7_1_5_babel_loader_lib_index_js_ref_2_0_node_modules_vue_loader_15_8_3_vue_loader_lib_index_js_vue_loader_options_bar_vue_vue_type_script_lang_js___);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__node_modules_babel_loader_7_1_5_babel_loader_lib_index_js_ref_2_0_node_modules_vue_loader_15_8_3_vue_loader_lib_index_js_vue_loader_options_bar_vue_vue_type_script_lang_js___) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__node_modules_babel_loader_7_1_5_babel_loader_lib_index_js_ref_2_0_node_modules_vue_loader_15_8_3_vue_loader_lib_index_js_vue_loader_options_bar_vue_vue_type_script_lang_js___[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (__WEBPACK_IMPORTED_MODULE_0__node_modules_babel_loader_7_1_5_babel_loader_lib_index_js_ref_2_0_node_modules_vue_loader_15_8_3_vue_loader_lib_index_js_vue_loader_options_bar_vue_vue_type_script_lang_js____default.a); 

/***/ }),

/***/ 1261:
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

exports.default = {
    props: {
        active: {
            type: Number,
            default: 0
        }
    },
    methods: {
        goRouter: function goRouter(index) {
            this.$router.push(['/toDeal-index', '/welcome', '/address-list'][index]);
        }
    },
    data: function data() {
        return {
            list: [{
                name: '待办',
                class: 'daiban'
            }, {
                name: '工作台',
                class: "gongzuotai"
            }, {
                name: '通讯录',
                class: "tongxunlu"
            }]
        };
    },
    mounted: function mounted() {}
};

/***/ }),

/***/ 1262:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1474);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(1062).default
var update = add("fb854bbc", content, true, {});

/***/ }),

/***/ 1472:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/_vue-loader@15.8.3@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/_vue-loader@15.8.3@vue-loader/lib??vue-loader-options!./src/component/bar.vue?vue&type=template&id=a719dfe8&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"bar"},_vm._l((_vm.list),function(item,index){return _c('div',{key:index,class:{active:_vm.active==index},on:{"click":function($event){return _vm.goRouter(index)}}},[_c('div',{class:[item.class,{active:_vm.active==index}]}),_vm._v("\r\n        "+_vm._s(item.name)+"\r\n    ")])}),0)}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/component/bar.vue?vue&type=template&id=a719dfe8&scoped=true&
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });


/***/ }),

/***/ 1473:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__node_modules_extract_text_webpack_plugin_3_0_2_extract_text_webpack_plugin_dist_loader_js_ref_8_0_node_modules_vue_style_loader_4_1_2_vue_style_loader_index_js_node_modules_css_loader_0_28_11_css_loader_index_js_ref_8_2_node_modules_vue_loader_15_8_3_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_8_3_node_modules_px2rem_loader_0_1_9_px2rem_loader_index_js_ref_8_4_node_modules_less_loader_4_1_0_less_loader_dist_cjs_js_ref_8_5_node_modules_vue_loader_15_8_3_vue_loader_lib_index_js_vue_loader_options_bar_vue_vue_type_style_index_0_id_a719dfe8_lang_less_scoped_true___ = __webpack_require__(1262);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__node_modules_extract_text_webpack_plugin_3_0_2_extract_text_webpack_plugin_dist_loader_js_ref_8_0_node_modules_vue_style_loader_4_1_2_vue_style_loader_index_js_node_modules_css_loader_0_28_11_css_loader_index_js_ref_8_2_node_modules_vue_loader_15_8_3_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_8_3_node_modules_px2rem_loader_0_1_9_px2rem_loader_index_js_ref_8_4_node_modules_less_loader_4_1_0_less_loader_dist_cjs_js_ref_8_5_node_modules_vue_loader_15_8_3_vue_loader_lib_index_js_vue_loader_options_bar_vue_vue_type_style_index_0_id_a719dfe8_lang_less_scoped_true____default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__node_modules_extract_text_webpack_plugin_3_0_2_extract_text_webpack_plugin_dist_loader_js_ref_8_0_node_modules_vue_style_loader_4_1_2_vue_style_loader_index_js_node_modules_css_loader_0_28_11_css_loader_index_js_ref_8_2_node_modules_vue_loader_15_8_3_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_8_3_node_modules_px2rem_loader_0_1_9_px2rem_loader_index_js_ref_8_4_node_modules_less_loader_4_1_0_less_loader_dist_cjs_js_ref_8_5_node_modules_vue_loader_15_8_3_vue_loader_lib_index_js_vue_loader_options_bar_vue_vue_type_style_index_0_id_a719dfe8_lang_less_scoped_true___);
/* unused harmony reexport namespace */
 /* unused harmony default export */ var _unused_webpack_default_export = (__WEBPACK_IMPORTED_MODULE_0__node_modules_extract_text_webpack_plugin_3_0_2_extract_text_webpack_plugin_dist_loader_js_ref_8_0_node_modules_vue_style_loader_4_1_2_vue_style_loader_index_js_node_modules_css_loader_0_28_11_css_loader_index_js_ref_8_2_node_modules_vue_loader_15_8_3_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_8_3_node_modules_px2rem_loader_0_1_9_px2rem_loader_index_js_ref_8_4_node_modules_less_loader_4_1_0_less_loader_dist_cjs_js_ref_8_5_node_modules_vue_loader_15_8_3_vue_loader_lib_index_js_vue_loader_options_bar_vue_vue_type_style_index_0_id_a719dfe8_lang_less_scoped_true____default.a); 

/***/ }),

/***/ 1474:
/***/ (function(module, exports, __webpack_require__) {

var escape = __webpack_require__(1065);
exports = module.exports = __webpack_require__(1061)(true);
// imports


// module
exports.push([module.i, ".bar[data-v-a719dfe8]{z-index:10;position:fixed;bottom:0;width:100vw;display:-webkit-box;display:-ms-flexbox;display:flex;background:#fff;height:3.75rem;-webkit-box-shadow:0 0 .375rem rgba(0,0,0,.548);box-shadow:0 0 .375rem rgba(0,0,0,.548)}.bar>div[data-v-a719dfe8]{-webkit-box-flex:1;-ms-flex:1;flex:1;text-align:center;-webkit-box-sizing:border-box;box-sizing:border-box;font-size:.8125rem;padding-top:.5rem}.bar>div.active[data-v-a719dfe8]{color:#4582fd}.bar>div>div[data-v-a719dfe8]{height:1.5rem;background-repeat:no-repeat;background-position:50%;background-size:contain;margin-bottom:.3125rem}.bar>div>div.daiban[data-v-a719dfe8]{background-image:url(" + escape(__webpack_require__(1475)) + ")}.bar>div>div.daiban.active[data-v-a719dfe8]{background-image:url(" + escape(__webpack_require__(1476)) + ")}.bar>div>div.gongzuotai[data-v-a719dfe8]{background-image:url(" + escape(__webpack_require__(1477)) + ")}.bar>div>div.gongzuotai.active[data-v-a719dfe8]{background-image:url(" + escape(__webpack_require__(1478)) + ")}.bar>div>div.tongxunlu[data-v-a719dfe8]{background-image:url(" + escape(__webpack_require__(1479)) + ")}.bar>div>div.tongxunlu.active[data-v-a719dfe8]{background-image:url(" + escape(__webpack_require__(1480)) + ")}", "", {"version":3,"sources":["/Users/zz/project/zhzf_platform/vue/mobile1.0/src/component/bar.vue"],"names":[],"mappings":"AAAA,sBACE,WAAW,AACX,eAAe,AACf,SAAS,AACT,YAAY,AACZ,oBAAa,AAAb,oBAAa,AAAb,aAAa,AACb,gBAAgB,AAChB,eAAe,AACf,gDAA6C,AAA7C,uCAA6C,CAC/C,AAEA,0BACE,mBAAO,AAAP,WAAO,AAAP,OAAO,AACP,kBAAkB,AAClB,8BAAsB,AAAtB,sBAAsB,AACtB,mBAAoB,AACpB,iBAAmB,CACrB,AAEA,iCACE,aAAc,CAChB,AAEA,8BACE,cAAc,AACd,4BAA4B,AAC5B,wBAAkC,AAClC,wBAAwB,AACxB,sBAAwB,CAC1B,AAEA,qCACE,8CAA0C,CAC5C,AAEA,4CACE,8CAA0C,CAC5C,AAEA,yCACE,8CAA0C,CAC5C,AAEA,gDACE,8CAA0C,CAC5C,AAEA,wCACE,8CAA0C,CAC5C,AAEA,+CACE,8CAA0C,CAC5C","file":"bar.vue?vue&type=style&index=0&id=a719dfe8&lang=less&scoped=true&","sourcesContent":[".bar {\n  z-index: 10;\n  position: fixed;\n  bottom: 0;\n  width: 100vw;\n  display: flex;\n  background: #fff;\n  height: 3.75rem;\n  box-shadow: 0 0 0.375rem rgba(0, 0, 0, 0.548);\n}\n\n.bar > div {\n  flex: 1;\n  text-align: center;\n  box-sizing: border-box;\n  font-size: 0.8125rem;\n  padding-top: 0.5rem;\n}\n\n.bar > div.active {\n  color: #4582FD;\n}\n\n.bar > div > div {\n  height: 1.5rem;\n  background-repeat: no-repeat;\n  background-position: center center;\n  background-size: contain;\n  margin-bottom: 0.3125rem;\n}\n\n.bar > div > div.daiban {\n  background-image: url('./barImage/a1.png');\n}\n\n.bar > div > div.daiban.active {\n  background-image: url('./barImage/a2.png');\n}\n\n.bar > div > div.gongzuotai {\n  background-image: url('./barImage/b1.png');\n}\n\n.bar > div > div.gongzuotai.active {\n  background-image: url('./barImage/b2.png');\n}\n\n.bar > div > div.tongxunlu {\n  background-image: url('./barImage/c1.png');\n}\n\n.bar > div > div.tongxunlu.active {\n  background-image: url('./barImage/c2.png');\n}"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ 1475:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "image/a1.bf2763.png";

/***/ }),

/***/ 1476:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "image/a2.8f5153.png";

/***/ }),

/***/ 1477:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "image/b1.5d006b.png";

/***/ }),

/***/ 1478:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "image/b2.7e986c.png";

/***/ }),

/***/ 1479:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "image/c1.513718.png";

/***/ }),

/***/ 1480:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "image/c2.29ff72.png";

/***/ })

});