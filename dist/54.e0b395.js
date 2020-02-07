webpackJsonp([54],{

/***/ 1292:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__node_modules_babel_loader_7_1_5_babel_loader_lib_index_js_ref_2_0_node_modules_vue_loader_15_8_3_vue_loader_lib_index_js_vue_loader_options_yishangbao_vue_vue_type_script_lang_js___ = __webpack_require__(1293);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__node_modules_babel_loader_7_1_5_babel_loader_lib_index_js_ref_2_0_node_modules_vue_loader_15_8_3_vue_loader_lib_index_js_vue_loader_options_yishangbao_vue_vue_type_script_lang_js____default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__node_modules_babel_loader_7_1_5_babel_loader_lib_index_js_ref_2_0_node_modules_vue_loader_15_8_3_vue_loader_lib_index_js_vue_loader_options_yishangbao_vue_vue_type_script_lang_js___);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__node_modules_babel_loader_7_1_5_babel_loader_lib_index_js_ref_2_0_node_modules_vue_loader_15_8_3_vue_loader_lib_index_js_vue_loader_options_yishangbao_vue_vue_type_script_lang_js___) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__node_modules_babel_loader_7_1_5_babel_loader_lib_index_js_ref_2_0_node_modules_vue_loader_15_8_3_vue_loader_lib_index_js_vue_loader_options_yishangbao_vue_vue_type_script_lang_js___[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (__WEBPACK_IMPORTED_MODULE_0__node_modules_babel_loader_7_1_5_babel_loader_lib_index_js_ref_2_0_node_modules_vue_loader_15_8_3_vue_loader_lib_index_js_vue_loader_options_yishangbao_vue_vue_type_script_lang_js____default.a); 

/***/ }),

/***/ 1293:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _axios = __webpack_require__(488);

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    data: function data() {
        return {
            date: '',
            list: {
                type: 'select',
                model: '已办结',
                select: ['已上报']
            },
            recordList: [],
            urllist: '/zhzf/app/case/getAppCaseList.action',
            params: {
                page: 0,
                size: 20,
                caseOrigin: "",
                caseType: "",
                startTime: this.date,
                endTime: "",
                caseNo: "",
                userId: ""
            }

        };
    },

    methods: {
        showTimePicker: function showTimePicker() {
            var _this = this;

            var year = new Date().getFullYear();
            var month = new Date().getMonth();
            this.$createPotDatePicker({
                title: "请选择月份",
                min: new Date(year - 3, 7, 8, 8, 0, 0),
                max: new Date(year + 7, 9, 20, 20, 59, 59),
                value: new Date(),
                format: {
                    year: "YY年",
                    month: "MM月"
                },
                columnCount: 2,
                onSelect: function onSelect(v) {
                    console.log(v);
                    var date = v.getFullYear().toString() + "-" + (v.getMonth() + 1).toString().padStart(2, "0");
                    console.log(date);
                    // if (
                    //     month === v.getMonth() &&
                    //     year === v.getFullYear()
                    // ) {
                    //     this.date = "本月";
                    // } else {
                    //     this.date = date;
                    // }
                    _this.date = date;
                    _this.aj_findcaseList();
                }
            }).show();

            // this.$router.push({
            //     path: "chooseTime",
            // })
        },
        qiehuan: function qiehuan() {
            var item = this.list;
            if (!this.picker) {
                var column1 = [];
                for (var i = 0; i < item.select.length; i++) {
                    column1.push({
                        text: item.select[i],
                        value: i
                    });
                }
                this.picker = this.$createPotPicker({
                    title: '请选择',
                    data: [column1],
                    onSelect: function onSelect(i) {
                        item.code = i;
                        item.model = item.select[i];
                        item.success && item.success(i, item.ids && item.ids[i]);
                    }
                });
            }
            this.picker.show();
        },
        aj_findcaseList: function aj_findcaseList() {
            var that = this;

            var params = {
                page: 0,
                size: 20,
                caseOrigin: "",
                caseType: "",
                startTime: that.date,
                endTime: "",
                caseNo: "",
                userId: ""
            };
            var userid = "ff8080816df7e603016df7e7a9e10000";
            var url = this.urllist;
            _axios2.default.post(url, params).then(function (data) {

                if (data.code == 0) {

                    var array = data.datas;

                    if (!isNull(array) && array.length > 0) {
                        that.recordList = array;
                    } else {}
                } else {

                    toast(data.message);
                }
                window.flag1 = true;
            });
        },
        showDetailCase: function showDetailCase(i, item) {

            this.$router.push({ path: '/normalCaseDetail', query: { caseInfoId: item.id } });
        }
    },
    mounted: function mounted() {
        var year = new Date().getFullYear();
        var month = new Date().getMonth() + 1;
        this.date = year.toString() + '-' + month.toString().padStart(2, "0");
        this.aj_findcaseList();
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

/***/ 1294:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1505);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(1062).default
var update = add("ad0a8e58", content, true, {});

/***/ }),

/***/ 1503:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/_vue-loader@15.8.3@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/_vue-loader@15.8.3@vue-loader/lib??vue-loader-options!./src/view/anjianshangbao/yishangbao.vue?vue&type=template&id=33601227&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"yishangbao"},[_c('tk-header',[_vm._v("已上报案件")]),_vm._v(" "),_c('div',{staticClass:"xuanze",on:{"click":_vm.qiehuan}},[_vm._v("\n        已上报"),_c('span',{staticClass:"glyphicon glyphicon-menu-down"})]),_vm._v(" "),_c('div',{staticClass:"riqi-wrapper"},[_c('div',{staticClass:"riqi",on:{"click":_vm.showTimePicker}},[_vm._v("\n            "+_vm._s(_vm.date)+" "),_c('span',{staticClass:"glyphicon glyphicon-triangle-bottom"})])]),_vm._v(" "),_c('tk-scroll',{attrs:{"url":_vm.urllist,"param":_vm.params,"transfer":"datas","options":{
                        pullDown: true,
                        pullUp: true
                    }},model:{value:(_vm.recordList),callback:function ($$v) {_vm.recordList=$$v},expression:"recordList"}},_vm._l((_vm.recordList),function(item){return _c('div',{staticClass:"patrol-record-item",on:{"click":function($event){return _vm.showDetailCase(_vm.i, item)}}},[_c('div',{staticClass:"patrol-record-item-title"},[_vm._v(_vm._s(item.tacheName)+" | "+_vm._s(item.caseReason))]),_vm._v(" "),_c('div',{staticClass:"patrol-record-item-time"},[_vm._v(_vm._s(item.createTime))])])}),0)],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/view/anjianshangbao/yishangbao.vue?vue&type=template&id=33601227&scoped=true&
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });


/***/ }),

/***/ 1504:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__node_modules_extract_text_webpack_plugin_3_0_2_extract_text_webpack_plugin_dist_loader_js_ref_8_0_node_modules_vue_style_loader_4_1_2_vue_style_loader_index_js_node_modules_css_loader_0_28_11_css_loader_index_js_ref_8_2_node_modules_vue_loader_15_8_3_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_8_3_node_modules_px2rem_loader_0_1_9_px2rem_loader_index_js_ref_8_4_node_modules_less_loader_4_1_0_less_loader_dist_cjs_js_ref_8_5_node_modules_vue_loader_15_8_3_vue_loader_lib_index_js_vue_loader_options_yishangbao_vue_vue_type_style_index_0_id_33601227_lang_less_scoped_true___ = __webpack_require__(1294);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__node_modules_extract_text_webpack_plugin_3_0_2_extract_text_webpack_plugin_dist_loader_js_ref_8_0_node_modules_vue_style_loader_4_1_2_vue_style_loader_index_js_node_modules_css_loader_0_28_11_css_loader_index_js_ref_8_2_node_modules_vue_loader_15_8_3_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_8_3_node_modules_px2rem_loader_0_1_9_px2rem_loader_index_js_ref_8_4_node_modules_less_loader_4_1_0_less_loader_dist_cjs_js_ref_8_5_node_modules_vue_loader_15_8_3_vue_loader_lib_index_js_vue_loader_options_yishangbao_vue_vue_type_style_index_0_id_33601227_lang_less_scoped_true____default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__node_modules_extract_text_webpack_plugin_3_0_2_extract_text_webpack_plugin_dist_loader_js_ref_8_0_node_modules_vue_style_loader_4_1_2_vue_style_loader_index_js_node_modules_css_loader_0_28_11_css_loader_index_js_ref_8_2_node_modules_vue_loader_15_8_3_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_8_3_node_modules_px2rem_loader_0_1_9_px2rem_loader_index_js_ref_8_4_node_modules_less_loader_4_1_0_less_loader_dist_cjs_js_ref_8_5_node_modules_vue_loader_15_8_3_vue_loader_lib_index_js_vue_loader_options_yishangbao_vue_vue_type_style_index_0_id_33601227_lang_less_scoped_true___);
/* unused harmony reexport namespace */
 /* unused harmony default export */ var _unused_webpack_default_export = (__WEBPACK_IMPORTED_MODULE_0__node_modules_extract_text_webpack_plugin_3_0_2_extract_text_webpack_plugin_dist_loader_js_ref_8_0_node_modules_vue_style_loader_4_1_2_vue_style_loader_index_js_node_modules_css_loader_0_28_11_css_loader_index_js_ref_8_2_node_modules_vue_loader_15_8_3_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_8_3_node_modules_px2rem_loader_0_1_9_px2rem_loader_index_js_ref_8_4_node_modules_less_loader_4_1_0_less_loader_dist_cjs_js_ref_8_5_node_modules_vue_loader_15_8_3_vue_loader_lib_index_js_vue_loader_options_yishangbao_vue_vue_type_style_index_0_id_33601227_lang_less_scoped_true____default.a); 

/***/ }),

/***/ 1505:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1061)(true);
// imports


// module
exports.push([module.i, ".yishangbao .xuanze[data-v-33601227]{text-align:center;height:2.5rem;line-height:2.5rem}.yishangbao .riqi-wrapper[data-v-33601227],.yishangbao .tk-scroll[data-v-33601227]{background:#f9f9f9}.yishangbao .riqi[data-v-33601227]{width:11.25rem;background:#fff;border-radius:1.25rem;height:1.875rem;line-height:1.875rem;margin-left:.8125rem;margin-top:.875rem;padding-left:.625rem;padding-right:.625rem;text-align:center}.yishangbao .tk-scroll[data-v-33601227]{background-color:#fff}.yishangbao .patrol-record-item[data-v-33601227]{height:5.25rem;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-flow:column;flex-flow:column;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:start;-ms-flex-align:start;align-items:start;background-color:#fff;border-bottom:.0625rem solid #ccc;padding-left:1.5rem}.yishangbao .patrol-record-item .patrol-record-item-title[data-v-33601227]{font-size:1.125rem;overflow:hidden;white-space:nowrap;text-overflow:ellipsis;width:calc(100% - 1.5rem)}.yishangbao .patrol-record-item .patrol-record-item-time[data-v-33601227]{margin-top:.875rem;font-size:.75rem}", "", {"version":3,"sources":["/Users/zz/project/zhzf_platform/vue/mobile1.0/src/view/anjianshangbao/yishangbao.vue"],"names":[],"mappings":"AAAA,qCACE,kBAAkB,AAClB,cAAc,AACd,kBAAmB,CACrB,AAMA,mFACE,kBAAmB,CACrB,AAEA,mCACE,eAAe,AACf,gBAAgB,AAChB,sBAAsB,AACtB,gBAAgB,AAChB,qBAAqB,AACrB,qBAAsB,AACtB,mBAAoB,AACpB,qBAAsB,AACtB,sBAAuB,AACvB,iBAAkB,CACpB,AAEA,wCACE,qBAAsB,CACxB,AAEA,iDACE,eAAe,AACf,oBAAa,AAAb,oBAAa,AAAb,aAAa,AACb,4BAAiB,AAAjB,6BAAiB,AAAjB,qBAAiB,AAAjB,iBAAiB,AACjB,wBAAuB,AAAvB,qBAAuB,AAAvB,uBAAuB,AACvB,wBAAkB,AAAlB,qBAAkB,AAAlB,kBAAkB,AAClB,sBAAuB,AACvB,kCAAsC,AACtC,mBAAoB,CACtB,AAEA,2EACE,mBAAmB,AACnB,gBAAgB,AAChB,mBAAmB,AACnB,uBAAuB,AACvB,yBAA0B,CAC5B,AAEA,0EACE,mBAAoB,AACpB,gBAAkB,CACpB","file":"yishangbao.vue?vue&type=style&index=0&id=33601227&lang=less&scoped=true&","sourcesContent":[".yishangbao .xuanze {\n  text-align: center;\n  height: 2.5rem;\n  line-height: 2.5rem;\n}\n\n.yishangbao .riqi-wrapper {\n  background: #F9F9F9;\n}\n\n.yishangbao .tk-scroll {\n  background: #F9F9F9;\n}\n\n.yishangbao .riqi {\n  width: 11.25rem;\n  background: #fff;\n  border-radius: 1.25rem;\n  height: 1.875rem;\n  line-height: 1.875rem;\n  margin-left: 0.8125rem;\n  margin-top: 0.875rem;\n  padding-left: 0.625rem;\n  padding-right: 0.625rem;\n  text-align: center;\n}\n\n.yishangbao .tk-scroll {\n  background-color: #fff;\n}\n\n.yishangbao .patrol-record-item {\n  height: 5.25rem;\n  display: flex;\n  flex-flow: column;\n  justify-content: center;\n  align-items: start;\n  background-color: white;\n  border-bottom: 0.0625rem solid #cccccc;\n  padding-left: 1.5rem;\n}\n\n.yishangbao .patrol-record-item .patrol-record-item-title {\n  font-size: 1.125rem;\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  width: calc(100% - 1.5rem);\n}\n\n.yishangbao .patrol-record-item .patrol-record-item-time {\n  margin-top: 0.875rem;\n  font-size: 0.75rem;\n}"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ 505:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__yishangbao_vue_vue_type_template_id_33601227_scoped_true___ = __webpack_require__(1503);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__yishangbao_vue_vue_type_script_lang_js___ = __webpack_require__(1292);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_1__yishangbao_vue_vue_type_script_lang_js___) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_1__yishangbao_vue_vue_type_script_lang_js___[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__yishangbao_vue_vue_type_style_index_0_id_33601227_lang_less_scoped_true___ = __webpack_require__(1504);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__node_modules_vue_loader_15_8_3_vue_loader_lib_runtime_componentNormalizer_js__ = __webpack_require__(0);






/* normalize component */

var component = Object(__WEBPACK_IMPORTED_MODULE_3__node_modules_vue_loader_15_8_3_vue_loader_lib_runtime_componentNormalizer_js__["a" /* default */])(
  __WEBPACK_IMPORTED_MODULE_1__yishangbao_vue_vue_type_script_lang_js___["default"],
  __WEBPACK_IMPORTED_MODULE_0__yishangbao_vue_vue_type_template_id_33601227_scoped_true___["a" /* render */],
  __WEBPACK_IMPORTED_MODULE_0__yishangbao_vue_vue_type_template_id_33601227_scoped_true___["b" /* staticRenderFns */],
  false,
  null,
  "33601227",
  null
  
)

/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ })

});