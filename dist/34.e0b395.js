webpackJsonp([34],{

/***/ 1410:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__node_modules_babel_loader_7_1_5_babel_loader_lib_index_js_ref_2_0_node_modules_vue_loader_15_8_3_vue_loader_lib_index_js_vue_loader_options_photoAlreadyCase_vue_vue_type_script_lang_js___ = __webpack_require__(1411);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__node_modules_babel_loader_7_1_5_babel_loader_lib_index_js_ref_2_0_node_modules_vue_loader_15_8_3_vue_loader_lib_index_js_vue_loader_options_photoAlreadyCase_vue_vue_type_script_lang_js____default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__node_modules_babel_loader_7_1_5_babel_loader_lib_index_js_ref_2_0_node_modules_vue_loader_15_8_3_vue_loader_lib_index_js_vue_loader_options_photoAlreadyCase_vue_vue_type_script_lang_js___);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__node_modules_babel_loader_7_1_5_babel_loader_lib_index_js_ref_2_0_node_modules_vue_loader_15_8_3_vue_loader_lib_index_js_vue_loader_options_photoAlreadyCase_vue_vue_type_script_lang_js___) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__node_modules_babel_loader_7_1_5_babel_loader_lib_index_js_ref_2_0_node_modules_vue_loader_15_8_3_vue_loader_lib_index_js_vue_loader_options_photoAlreadyCase_vue_vue_type_script_lang_js___[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (__WEBPACK_IMPORTED_MODULE_0__node_modules_babel_loader_7_1_5_babel_loader_lib_index_js_ref_2_0_node_modules_vue_loader_15_8_3_vue_loader_lib_index_js_vue_loader_options_photoAlreadyCase_vue_vue_type_script_lang_js____default.a); 

/***/ }),

/***/ 1411:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _axios = __webpack_require__(488);

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    name: "patrolRecord",
    data: function data() {
        return {
            date: '',
            urllist: '/wgh/app' + 'findCaseListByUserId.action',
            params: { userId: window.localStorage.userId, origin: 3, pageSize: 20, pageNum: 1, status: "" },

            recordList: []
        };
    },
    created: function created() {},
    mounted: function mounted() {
        // 初始化时间（年月）
        var year = new Date().getFullYear();
        var month = new Date().getMonth() + 1;
        this.date = year.toString() + '-' + month.toString().padStart(2, "0");
        this.ycj_findCaseListByUserId();
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
                }
            }).show();

            // this.$router.push({
            //     path: "chooseTime",
            // })
        },
        ycj_findCaseListByUserId: function ycj_findCaseListByUserId() {
            var that = this;
            // var obj = "";
            // obj += toJson("userId", window.localStorage.userId) + "&";
            // obj += toJson("origin", "3") + "&";
            // obj += toJson("pageSize", "20") + "&";
            // obj += toJson("pageNum", "1") + "&";
            // obj += toJson("status", "");
            // doPost("findCaseListByUserId.action", obj, function (data) {
            //
            //     if (data.code == 0) {
            //
            //         var array = data.datas;
            //
            //         if (!isNull(array) && array.length > 0) {
            //             that.recordList=array;
            //
            //
            //         } else {
            //
            //         }
            //     } else {
            //
            //         toast(data.message);
            //     }
            //     window.flag1 = true;
            // }, "");
            var params = { userId: window.localStorage.userId, origin: 3, pageSize: 20, pageNum: 1, status: "" };
            var url = '/wgh/app' + '/findCaseListByUserId.action';
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
        showDetail: function showDetail(i, item) {

            this.$router.push({ path: '/photoAlreadyDetail', query: { rowId: item.row_id } });
        },
        pullDownnow: function pullDownnow(e) {
            ;
            console.log(e);
        },
        findpullup: function findpullup(e) {
            ;
            console.log(e);
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

/***/ 1412:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1625);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(1062).default
var update = add("151cc51e", content, true, {});

/***/ }),

/***/ 1623:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/_vue-loader@15.8.3@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/_vue-loader@15.8.3@vue-loader/lib??vue-loader-options!./src/view/photograph/photoAlreadyCase.vue?vue&type=template&id=70d7dcf0&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('tk-header',[_vm._v("随手拍")]),_vm._v(" "),_c('tk-container',[_c('div',{staticClass:"patrol-record-status"},[_c('div',{staticClass:"patrol-record-status-name"},[_vm._v("已上报")]),_vm._v(" "),_c('img',{staticClass:"patrol-record-status-arrow",attrs:{"src":"","alt":""}})]),_vm._v(" "),_c('tk-scroll',{staticStyle:{"background-color":"white"},attrs:{"url":_vm.urllist,"param":_vm.params,"transfer":"datas","options":{
                        pullDown: true,
                        pullUp: true
                    }},model:{value:(_vm.recordList),callback:function ($$v) {_vm.recordList=$$v},expression:"recordList"}},_vm._l((_vm.recordList),function(item){return _c('div',{staticClass:"patrol-record-item",on:{"click":function($event){return _vm.showDetail(_vm.i, item)}}},[_c('div',{staticClass:"patrol-record-item-title"},[_vm._v("工单编号："+_vm._s(item.caseno)+" || "+_vm._s(item.origin))]),_vm._v(" "),_c('div',{staticClass:"patrol-record-item-time"},[_vm._v(_vm._s(item.reportTime))])])}),0)],1)],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/view/photograph/photoAlreadyCase.vue?vue&type=template&id=70d7dcf0&scoped=true&
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });


/***/ }),

/***/ 1624:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__node_modules_extract_text_webpack_plugin_3_0_2_extract_text_webpack_plugin_dist_loader_js_ref_8_0_node_modules_vue_style_loader_4_1_2_vue_style_loader_index_js_node_modules_css_loader_0_28_11_css_loader_index_js_ref_8_2_node_modules_vue_loader_15_8_3_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_8_3_node_modules_px2rem_loader_0_1_9_px2rem_loader_index_js_ref_8_4_node_modules_less_loader_4_1_0_less_loader_dist_cjs_js_ref_8_5_node_modules_vue_loader_15_8_3_vue_loader_lib_index_js_vue_loader_options_photoAlreadyCase_vue_vue_type_style_index_0_id_70d7dcf0_lang_less_scoped_true___ = __webpack_require__(1412);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__node_modules_extract_text_webpack_plugin_3_0_2_extract_text_webpack_plugin_dist_loader_js_ref_8_0_node_modules_vue_style_loader_4_1_2_vue_style_loader_index_js_node_modules_css_loader_0_28_11_css_loader_index_js_ref_8_2_node_modules_vue_loader_15_8_3_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_8_3_node_modules_px2rem_loader_0_1_9_px2rem_loader_index_js_ref_8_4_node_modules_less_loader_4_1_0_less_loader_dist_cjs_js_ref_8_5_node_modules_vue_loader_15_8_3_vue_loader_lib_index_js_vue_loader_options_photoAlreadyCase_vue_vue_type_style_index_0_id_70d7dcf0_lang_less_scoped_true____default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__node_modules_extract_text_webpack_plugin_3_0_2_extract_text_webpack_plugin_dist_loader_js_ref_8_0_node_modules_vue_style_loader_4_1_2_vue_style_loader_index_js_node_modules_css_loader_0_28_11_css_loader_index_js_ref_8_2_node_modules_vue_loader_15_8_3_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_8_3_node_modules_px2rem_loader_0_1_9_px2rem_loader_index_js_ref_8_4_node_modules_less_loader_4_1_0_less_loader_dist_cjs_js_ref_8_5_node_modules_vue_loader_15_8_3_vue_loader_lib_index_js_vue_loader_options_photoAlreadyCase_vue_vue_type_style_index_0_id_70d7dcf0_lang_less_scoped_true___);
/* unused harmony reexport namespace */
 /* unused harmony default export */ var _unused_webpack_default_export = (__WEBPACK_IMPORTED_MODULE_0__node_modules_extract_text_webpack_plugin_3_0_2_extract_text_webpack_plugin_dist_loader_js_ref_8_0_node_modules_vue_style_loader_4_1_2_vue_style_loader_index_js_node_modules_css_loader_0_28_11_css_loader_index_js_ref_8_2_node_modules_vue_loader_15_8_3_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_8_3_node_modules_px2rem_loader_0_1_9_px2rem_loader_index_js_ref_8_4_node_modules_less_loader_4_1_0_less_loader_dist_cjs_js_ref_8_5_node_modules_vue_loader_15_8_3_vue_loader_lib_index_js_vue_loader_options_photoAlreadyCase_vue_vue_type_style_index_0_id_70d7dcf0_lang_less_scoped_true____default.a); 

/***/ }),

/***/ 1625:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1061)(true);
// imports


// module
exports.push([module.i, ".patrol-record-status[data-v-70d7dcf0]{width:100%;height:2.375rem;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-flow:row nowrap;flex-flow:row nowrap;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;background-color:#fff}.patrol-record-status .patrol-record-status-name[data-v-70d7dcf0]{font-size:.9375rem}.patrol-record-date[data-v-70d7dcf0]{width:100%;height:3.25rem;-ms-flex-flow:row;flex-flow:row}.patrol-record-date .patrol-record-date-wrapper[data-v-70d7dcf0],.patrol-record-date[data-v-70d7dcf0]{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.patrol-record-date .patrol-record-date-wrapper[data-v-70d7dcf0]{min-width:9.875rem;height:2.25rem;-ms-flex-flow:row nowrap;flex-flow:row nowrap;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;background-color:#fff;margin-left:1.5rem;border-radius:1.125rem}.patrol-record-date .patrol-record-date-wrapper .patrol-record-date-content[data-v-70d7dcf0]{font-size:.75rem;padding:0 .5rem}.patrol-record-item[data-v-70d7dcf0]{height:5.25rem;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-flow:column;flex-flow:column;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:start;-ms-flex-align:start;align-items:start;background-color:#fff;border-bottom:.0625rem solid #ccc;padding-left:1.5rem}.patrol-record-item .patrol-record-item-title[data-v-70d7dcf0]{font-size:1.125rem;overflow:hidden;white-space:nowrap;text-overflow:ellipsis;width:calc(100% - 1.5rem)}.patrol-record-item .patrol-record-item-time[data-v-70d7dcf0]{margin-top:.875rem;font-size:.75rem;color:#999}", "", {"version":3,"sources":["/Users/zz/project/zhzf_platform/vue/mobile1.0/src/view/photograph/photoAlreadyCase.vue"],"names":[],"mappings":"AAAA,uCACE,WAAW,AACX,gBAAgB,AAChB,oBAAa,AAAb,oBAAa,AAAb,aAAa,AACb,8BAAqB,AAArB,6BAAqB,AAArB,yBAAqB,AAArB,qBAAqB,AACrB,yBAAmB,AAAnB,sBAAmB,AAAnB,mBAAmB,AACnB,wBAAuB,AAAvB,qBAAuB,AAAvB,uBAAuB,AACvB,qBAAuB,CACzB,AAEA,kEACE,kBAAoB,CACtB,AAEA,qCACE,WAAW,AACX,eAAe,AAEf,kBAAc,AAAd,aAAc,CAEhB,AAEA,sGALE,oBAAa,AAAb,oBAAa,AAAb,aAAa,AACb,8BAAc,AAAd,6BAAc,AACd,yBAAmB,AAAnB,sBAAmB,AAAnB,kBAAmB,CAarB,AAVA,iEACE,mBAAmB,AACnB,eAAe,AAEf,yBAAqB,AAArB,qBAAqB,AACrB,wBAAuB,AAAvB,qBAAuB,AAAvB,uBAAuB,AAEvB,sBAAuB,AACvB,mBAAmB,AACnB,sBAAuB,CACzB,AAEA,6FACE,iBAAkB,AAClB,eAAiB,CACnB,AAEA,qCACE,eAAe,AACf,oBAAa,AAAb,oBAAa,AAAb,aAAa,AACb,4BAAiB,AAAjB,6BAAiB,AAAjB,qBAAiB,AAAjB,iBAAiB,AACjB,wBAAuB,AAAvB,qBAAuB,AAAvB,uBAAuB,AACvB,wBAAkB,AAAlB,qBAAkB,AAAlB,kBAAkB,AAClB,sBAAuB,AACvB,kCAAsC,AACtC,mBAAoB,CACtB,AAEA,+DACE,mBAAmB,AACnB,gBAAgB,AAChB,mBAAmB,AACnB,uBAAuB,AACvB,yBAA0B,CAC5B,AAEA,8DACE,mBAAoB,AACpB,iBAAkB,AAClB,UAAc,CAChB","file":"photoAlreadyCase.vue?vue&type=style&index=0&id=70d7dcf0&lang=less&scoped=true&","sourcesContent":[".patrol-record-status {\n  width: 100%;\n  height: 2.375rem;\n  display: flex;\n  flex-flow: row nowrap;\n  align-items: center;\n  justify-content: center;\n  background-color: white;\n}\n\n.patrol-record-status .patrol-record-status-name {\n  font-size: 0.9375rem;\n}\n\n.patrol-record-date {\n  width: 100%;\n  height: 3.25rem;\n  display: flex;\n  flex-flow: row;\n  align-items: center;\n}\n\n.patrol-record-date .patrol-record-date-wrapper {\n  min-width: 9.875rem;\n  height: 2.25rem;\n  display: flex;\n  flex-flow: row nowrap;\n  justify-content: center;\n  align-items: center;\n  background-color: white;\n  margin-left: 1.5rem;\n  border-radius: 1.125rem;\n}\n\n.patrol-record-date .patrol-record-date-wrapper .patrol-record-date-content {\n  font-size: 0.75rem;\n  padding: 0 0.5rem;\n}\n\n.patrol-record-item {\n  height: 5.25rem;\n  display: flex;\n  flex-flow: column;\n  justify-content: center;\n  align-items: start;\n  background-color: white;\n  border-bottom: 0.0625rem solid #cccccc;\n  padding-left: 1.5rem;\n}\n\n.patrol-record-item .patrol-record-item-title {\n  font-size: 1.125rem;\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  width: calc(100% - 1.5rem);\n}\n\n.patrol-record-item .patrol-record-item-time {\n  margin-top: 0.875rem;\n  font-size: 0.75rem;\n  color: #999999;\n}"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ 541:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__photoAlreadyCase_vue_vue_type_template_id_70d7dcf0_scoped_true___ = __webpack_require__(1623);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__photoAlreadyCase_vue_vue_type_script_lang_js___ = __webpack_require__(1410);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_1__photoAlreadyCase_vue_vue_type_script_lang_js___) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_1__photoAlreadyCase_vue_vue_type_script_lang_js___[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__photoAlreadyCase_vue_vue_type_style_index_0_id_70d7dcf0_lang_less_scoped_true___ = __webpack_require__(1624);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__node_modules_vue_loader_15_8_3_vue_loader_lib_runtime_componentNormalizer_js__ = __webpack_require__(0);






/* normalize component */

var component = Object(__WEBPACK_IMPORTED_MODULE_3__node_modules_vue_loader_15_8_3_vue_loader_lib_runtime_componentNormalizer_js__["a" /* default */])(
  __WEBPACK_IMPORTED_MODULE_1__photoAlreadyCase_vue_vue_type_script_lang_js___["default"],
  __WEBPACK_IMPORTED_MODULE_0__photoAlreadyCase_vue_vue_type_template_id_70d7dcf0_scoped_true___["a" /* render */],
  __WEBPACK_IMPORTED_MODULE_0__photoAlreadyCase_vue_vue_type_template_id_70d7dcf0_scoped_true___["b" /* staticRenderFns */],
  false,
  null,
  "70d7dcf0",
  null
  
)

/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ })

});