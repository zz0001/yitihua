webpackJsonp([52],{

/***/ 1305:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__node_modules_babel_loader_7_1_5_babel_loader_lib_index_js_ref_2_0_node_modules_vue_loader_15_8_3_vue_loader_lib_index_js_vue_loader_options_doubleRandom_vue_vue_type_script_lang_js___ = __webpack_require__(1306);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__node_modules_babel_loader_7_1_5_babel_loader_lib_index_js_ref_2_0_node_modules_vue_loader_15_8_3_vue_loader_lib_index_js_vue_loader_options_doubleRandom_vue_vue_type_script_lang_js____default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__node_modules_babel_loader_7_1_5_babel_loader_lib_index_js_ref_2_0_node_modules_vue_loader_15_8_3_vue_loader_lib_index_js_vue_loader_options_doubleRandom_vue_vue_type_script_lang_js___);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__node_modules_babel_loader_7_1_5_babel_loader_lib_index_js_ref_2_0_node_modules_vue_loader_15_8_3_vue_loader_lib_index_js_vue_loader_options_doubleRandom_vue_vue_type_script_lang_js___) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__node_modules_babel_loader_7_1_5_babel_loader_lib_index_js_ref_2_0_node_modules_vue_loader_15_8_3_vue_loader_lib_index_js_vue_loader_options_doubleRandom_vue_vue_type_script_lang_js___[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (__WEBPACK_IMPORTED_MODULE_0__node_modules_babel_loader_7_1_5_babel_loader_lib_index_js_ref_2_0_node_modules_vue_loader_15_8_3_vue_loader_lib_index_js_vue_loader_options_doubleRandom_vue_vue_type_script_lang_js____default.a); 

/***/ }),

/***/ 1306:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _stringify = __webpack_require__(88);

var _stringify2 = _interopRequireDefault(_stringify);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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
    name: "handleCase",
    data: function data() {
        return {

            caseNumber: '',

            detailList: [],
            checkedEnterpriseName: { key: '检查企业', value: '' },
            code: { key: '抽查编号', value: '' },
            deadLine: { key: '抽查时间', value: '' },
            enterpriseName: { key: '抽查地点', value: '' },
            type: { key: '抽查类型', value: '' },
            userName: { key: '执法人员', value: '' },
            operationList: [],
            processList: []

        };
    },
    created: function created() {},
    mounted: function mounted() {
        this.detailList = [this.checkedEnterpriseName, this.code, this.deadLine, this.enterpriseName, this.type, this.userName];
        this.datas = JSON.parse(this.$route.query.datas);

        var date = new Date(this.datas.startTime);
        var Y = date.getFullYear() + '-';
        var M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-';
        var D = date.getDate() < 10 ? '0' + date.getDate() + ' ' : date.getDate() + ' ';
        var h = date.getHours() < 10 ? '0' + date.getHours() + ':' : date.getHours() + ':';
        var m = date.getMinutes() < 10 ? '0' + date.getMinutes() + ':' : date.getMinutes() + ':';
        var s = date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds();
        var time = Y + M + D + h + m + s;
        this._inputValue(this.checkedEnterpriseName, this.datas.checkedEnterpriseName);
        this._inputValue(this.code, this.datas.checkedNumber);
        this._inputValue(this.deadLine, time);
        this._inputValue(this.enterpriseName, this.datas.checkedaddress);
        this._inputValue(this.type, this.datas.check_type);
        this._inputValue(this.userName, this.datas.checkPerson);
        //  this.getCaseDetail(this.id);
    },

    methods: {
        /**
         * 获取案件详情案件
         */
        getCaseDetail: function getCaseDetail(row_id) {
            var _this = this;

            // obj += toJson("loginId", window.localStorage.loginId) + "&";
            // obj += toJson("rowId", row_id);
            var obj = { para: 'loginId=' + window.localStorage.loginId + '&' + 'rowId=' + row_id };
            console.log((0, _stringify2.default)(obj));
            // this.url = window.serverUrl + 'dsbOrderDetail.action';
            this.url = 'api/double';
            this.$http.post(this.url, obj).then(function (res) {
                if (res.code === undefined || res.code === '0') {
                    console.log('接口返回成功');
                    var detail = res.datas;
                    if (detail !== null) {

                        _this._inputValue(_this.code, detail.id);
                        _this._inputValue(_this.deadLine, detail.deadLine);
                        _this._inputValue(_this.enterpriseName, detail.enterpriseName);
                        _this._inputValue(_this.type, detail.type);
                        _this._inputValue(_this.userName, detail.userName);

                        //   this.detailList = detail.operationList;


                        _this.processList = detail.processSteps;
                    }
                } else {
                    toast(res.message);
                }
            });
        },


        /**
         * 给<tk-detail>组件赋值
         * @param item 需要赋值的具体条目对象
         * @param value 传入的值
         * @private
         */
        _inputValue: function _inputValue(item, value) {
            this.$set(item, 'value', value);
        },

        /**
         * 处理案件
         * @private
         */
        _handle: function _handle() {
            var _this2 = this;

            this.$createTkBottomSelect({
                $props: {
                    data: this.operationList
                },
                $events: {
                    itemClick: function itemClick(index, item) {
                        // this['handle' + index]()
                        console.log(index);
                        console.log(item);
                        window.caseOneTaskAction = item;
                        _this2.$router.push({ path: '/doubleRandomDetail', query: { type: i.rowId } });
                    }
                }
            }).show();
        },

        /**
         * 处置
         */
        handleconfirm: function handleconfirm() {
            this.$router.push({ path: '/doubleRandomDetail', query: { type: this.type.value, id: this.datas.id } });
        },

        /**
         * 退回
         */
        handleback: function handleback() {
            app.$createPotDialog({
                $props: {
                    type: 'confirm',
                    content: '你是否确定要退回此案件？'
                },
                $events: {
                    confirm: function confirm(A) {}
                }
            }).show();
        },

        /**
         * 上报
         */
        handle2: function handle2() {}
    }
};

/***/ }),

/***/ 1307:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1516);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(1062).default
var update = add("557bf95f", content, true, {});

/***/ }),

/***/ 1514:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/_vue-loader@15.8.3@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/_vue-loader@15.8.3@vue-loader/lib??vue-loader-options!./src/view/caseDetail/doubleRandom.vue?vue&type=template&id=92e2df44&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"handle-case"},[_c('tk-header',[_vm._v("双随机处理")]),_vm._v(" "),_c('tk-container',{staticClass:"handler-case-content-wrapper"},[_c('div',{staticClass:"handle-case-content"},[_c('tk-detail',{attrs:{"list":_vm.detailList}})],1),_vm._v(" "),_c('div',{staticStyle:{"display":"flex"}},[_c('tk-button',{on:{"click":_vm.handleconfirm}},[_vm._v("处理")])],1)])],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/view/caseDetail/doubleRandom.vue?vue&type=template&id=92e2df44&scoped=true&
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });


/***/ }),

/***/ 1515:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__node_modules_extract_text_webpack_plugin_3_0_2_extract_text_webpack_plugin_dist_loader_js_ref_8_0_node_modules_vue_style_loader_4_1_2_vue_style_loader_index_js_node_modules_css_loader_0_28_11_css_loader_index_js_ref_8_2_node_modules_vue_loader_15_8_3_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_8_3_node_modules_px2rem_loader_0_1_9_px2rem_loader_index_js_ref_8_4_node_modules_less_loader_4_1_0_less_loader_dist_cjs_js_ref_8_5_node_modules_vue_loader_15_8_3_vue_loader_lib_index_js_vue_loader_options_doubleRandom_vue_vue_type_style_index_0_id_92e2df44_lang_less_scoped_true___ = __webpack_require__(1307);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__node_modules_extract_text_webpack_plugin_3_0_2_extract_text_webpack_plugin_dist_loader_js_ref_8_0_node_modules_vue_style_loader_4_1_2_vue_style_loader_index_js_node_modules_css_loader_0_28_11_css_loader_index_js_ref_8_2_node_modules_vue_loader_15_8_3_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_8_3_node_modules_px2rem_loader_0_1_9_px2rem_loader_index_js_ref_8_4_node_modules_less_loader_4_1_0_less_loader_dist_cjs_js_ref_8_5_node_modules_vue_loader_15_8_3_vue_loader_lib_index_js_vue_loader_options_doubleRandom_vue_vue_type_style_index_0_id_92e2df44_lang_less_scoped_true____default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__node_modules_extract_text_webpack_plugin_3_0_2_extract_text_webpack_plugin_dist_loader_js_ref_8_0_node_modules_vue_style_loader_4_1_2_vue_style_loader_index_js_node_modules_css_loader_0_28_11_css_loader_index_js_ref_8_2_node_modules_vue_loader_15_8_3_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_8_3_node_modules_px2rem_loader_0_1_9_px2rem_loader_index_js_ref_8_4_node_modules_less_loader_4_1_0_less_loader_dist_cjs_js_ref_8_5_node_modules_vue_loader_15_8_3_vue_loader_lib_index_js_vue_loader_options_doubleRandom_vue_vue_type_style_index_0_id_92e2df44_lang_less_scoped_true___);
/* unused harmony reexport namespace */
 /* unused harmony default export */ var _unused_webpack_default_export = (__WEBPACK_IMPORTED_MODULE_0__node_modules_extract_text_webpack_plugin_3_0_2_extract_text_webpack_plugin_dist_loader_js_ref_8_0_node_modules_vue_style_loader_4_1_2_vue_style_loader_index_js_node_modules_css_loader_0_28_11_css_loader_index_js_ref_8_2_node_modules_vue_loader_15_8_3_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_8_3_node_modules_px2rem_loader_0_1_9_px2rem_loader_index_js_ref_8_4_node_modules_less_loader_4_1_0_less_loader_dist_cjs_js_ref_8_5_node_modules_vue_loader_15_8_3_vue_loader_lib_index_js_vue_loader_options_doubleRandom_vue_vue_type_style_index_0_id_92e2df44_lang_less_scoped_true____default.a); 

/***/ }),

/***/ 1516:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1061)(true);
// imports


// module
exports.push([module.i, ".handle-case[data-v-92e2df44]{width:100vw;height:100vh}.handle-case .handler-case-content-wrapper[data-v-92e2df44]{background-color:#fff;width:100vw}.handle-case .handler-case-content-wrapper .handle-case-content[data-v-92e2df44]{width:100%;height:calc(100vh - 8.125rem);overflow-y:auto}.handle-case .handler-case-content-wrapper .handle-case-content .case-number-wrapper[data-v-92e2df44]{width:100%;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-flow:row nowrap;flex-flow:row nowrap;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:start;-webkit-box-align:center;-ms-flex-align:center;align-items:center;margin-top:.625rem}.handle-case .handler-case-content-wrapper .handle-case-content .case-number-wrapper .case-number-font[data-v-92e2df44]{font-size:1.5rem}.handle-case .handler-case-content-wrapper .handle-case-content .case-number-wrapper .case-number-title[data-v-92e2df44]{width:7.8125rem;margin-left:1.5rem;-webkit-box-flex:3.5;-ms-flex:3.5;flex:3.5}.handle-case .handler-case-content-wrapper .handle-case-content .case-number-wrapper .case-number[data-v-92e2df44]{margin-right:1.5rem;-webkit-box-flex:6.5;-ms-flex:6.5;flex:6.5}.handle-case .handler-case-content-wrapper .handle-case-content .picture-list-wrapper[data-v-92e2df44]{width:100%;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-flow:column nowrap;flex-flow:column nowrap;-webkit-box-align:center;-ms-flex-align:center;align-items:center;padding:0 1.5rem}.handle-case .handler-case-content-wrapper .handle-case-content .case-describe[data-v-92e2df44]{width:calc(100% - 1.5rem);margin:0 1.5rem;font-size:1.25rem;line-height:1.875rem}.handle-case .handler-case-content-wrapper .handle-case-content .case-address-wrapper[data-v-92e2df44]{width:100%;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-flow:row nowrap;flex-flow:row nowrap;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:start;-webkit-box-align:center;-ms-flex-align:center;align-items:center;margin-top:.75rem}.handle-case .handler-case-content-wrapper .handle-case-content .case-address-wrapper .case-address-icon[data-v-92e2df44]{margin-left:1.4375rem;width:1.25rem;height:auto}.handle-case .handler-case-content-wrapper .handle-case-content .case-address-wrapper .case-address[data-v-92e2df44]{margin:0 1.5rem 0 .875rem;font-size:1.125rem;line-height:1.25rem}.handle-case .handler-case-content-wrapper .handle-case-content .case-handle-process[data-v-92e2df44]{width:100%;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-flow:column nowrap;flex-flow:column nowrap;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:start;margin-top:1.5625rem}.handle-case .handler-case-content-wrapper .handle-case-content .case-handle-process .case-handle-process-title[data-v-92e2df44]{font-size:1.125rem;color:#333;margin:1.125rem 0 1.125rem 1.5rem}.handle-case .handler-case-content-wrapper .handle-case-content .case-handle-process .case-handle-process-list-wrapper[data-v-92e2df44]{width:100%;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-flow:column nowrap;flex-flow:column nowrap;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:start;-webkit-box-align:start;-ms-flex-align:start;align-items:start}.handle-case .handler-case-content-wrapper .handle-case-content .case-handle-process .case-handle-process-list-wrapper .case-handle-process-item[data-v-92e2df44]{position:relative;width:calc(100% - 3rem);height:auto;margin:0 1.5rem;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-flow:row nowrap;flex-flow:row nowrap;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:start;-webkit-box-align:start;-ms-flex-align:start;align-items:start}.handle-case .handler-case-content-wrapper .handle-case-content .case-handle-process .case-handle-process-list-wrapper .case-handle-process-item .case-handle-process-item-left[data-v-92e2df44]{height:100%;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-flow:column nowrap;flex-flow:column nowrap;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:start;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.handle-case .handler-case-content-wrapper .handle-case-content .case-handle-process .case-handle-process-list-wrapper .case-handle-process-item .case-handle-process-item-left .item-circle[data-v-92e2df44]{width:1rem;height:1rem;border-radius:50%;border:.0625rem solid #ccc}.handle-case .handler-case-content-wrapper .handle-case-content .case-handle-process .case-handle-process-list-wrapper .case-handle-process-item .case-handle-process-item-left .item-line[data-v-92e2df44]{position:absolute;left:.40625rem;top:1rem;width:.0625rem;height:calc(100% - 1rem);background-color:#f9f9f9}.handle-case .handler-case-content-wrapper .handle-case-content .case-handle-process .case-handle-process-list-wrapper .case-handle-process-item .case-handle-process-item-right[data-v-92e2df44]{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-flow:column nowrap;flex-flow:column nowrap;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:start;-webkit-box-align:left;-ms-flex-align:left;align-items:left;margin-left:1.25rem}.handle-case .handler-case-content-wrapper .handle-case-content .case-handle-process .case-handle-process-list-wrapper .case-handle-process-item .case-handle-process-item-right .item-step[data-v-92e2df44]{font-size:1.125rem;color:#333;padding-bottom:.625rem}.handle-case .handler-case-content-wrapper .handle-case-content .case-handle-process .case-handle-process-list-wrapper .case-handle-process-item .case-handle-process-item-right .item-info[data-v-92e2df44]{padding-bottom:1.875rem;padding-bottom:.4375rem;color:#999}.handle-case .handler-case-content-wrapper .handle-case-content .case-handle-process .case-handle-process-list-wrapper .case-handle-process-item .case-handle-process-item-right .item-result[data-v-92e2df44]{padding-bottom:1.875rem;color:#999}.handle-case .handler-case-content-wrapper .handle-case-btn[data-v-92e2df44]{padding-top:.625rem}", "", {"version":3,"sources":["/Users/zz/project/zhzf_platform/vue/mobile1.0/src/view/caseDetail/doubleRandom.vue"],"names":[],"mappings":"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","file":"doubleRandom.vue?vue&type=style&index=0&id=92e2df44&lang=less&scoped=true&","sourcesContent":[".handle-case {\n  width: 100vw;\n  height: 100vh;\n}\n\n.handle-case .handler-case-content-wrapper {\n  background-color: white;\n  width: 100vw;\n}\n\n.handle-case .handler-case-content-wrapper .handle-case-content {\n  width: 100%;\n  height: calc(100vh - 8.125rem);\n  overflow-y: auto;\n}\n\n.handle-case .handler-case-content-wrapper .handle-case-content .case-number-wrapper {\n  width: 100%;\n  display: flex;\n  flex-flow: row nowrap;\n  justify-content: start;\n  align-items: center;\n  margin-top: 0.625rem;\n}\n\n.handle-case .handler-case-content-wrapper .handle-case-content .case-number-wrapper .case-number-font {\n  font-size: 1.5rem;\n}\n\n.handle-case .handler-case-content-wrapper .handle-case-content .case-number-wrapper .case-number-title {\n  width: 7.8125rem;\n  margin-left: 1.5rem;\n  flex: 3.5;\n}\n\n.handle-case .handler-case-content-wrapper .handle-case-content .case-number-wrapper .case-number {\n  margin-right: 1.5rem;\n  flex: 6.5;\n}\n\n.handle-case .handler-case-content-wrapper .handle-case-content .picture-list-wrapper {\n  width: 100%;\n  display: flex;\n  flex-flow: column nowrap;\n  align-items: center;\n  padding: 0 1.5rem;\n}\n\n.handle-case .handler-case-content-wrapper .handle-case-content .case-describe {\n  width: calc(100% - 1.5rem);\n  margin: 0 1.5rem;\n  font-size: 1.25rem;\n  line-height: 1.875rem;\n}\n\n.handle-case .handler-case-content-wrapper .handle-case-content .case-address-wrapper {\n  width: 100%;\n  display: flex;\n  flex-flow: row nowrap;\n  justify-content: start;\n  align-items: center;\n  margin-top: 0.75rem;\n}\n\n.handle-case .handler-case-content-wrapper .handle-case-content .case-address-wrapper .case-address-icon {\n  margin-left: 1.4375rem;\n  width: 1.25rem;\n  height: auto;\n}\n\n.handle-case .handler-case-content-wrapper .handle-case-content .case-address-wrapper .case-address {\n  margin: 0 1.5rem 0 0.875rem;\n  font-size: 1.125rem;\n  line-height: 1.25rem;\n}\n\n.handle-case .handler-case-content-wrapper .handle-case-content .case-handle-process {\n  width: 100%;\n  display: flex;\n  flex-flow: column nowrap;\n  justify-content: start;\n  margin-top: 1.5625rem;\n}\n\n.handle-case .handler-case-content-wrapper .handle-case-content .case-handle-process .case-handle-process-title {\n  font-size: 1.125rem;\n  color: #333333;\n  margin: 1.125rem 0 1.125rem 1.5rem;\n}\n\n.handle-case .handler-case-content-wrapper .handle-case-content .case-handle-process .case-handle-process-list-wrapper {\n  width: 100%;\n  display: flex;\n  flex-flow: column nowrap;\n  justify-content: start;\n  align-items: start;\n}\n\n.handle-case .handler-case-content-wrapper .handle-case-content .case-handle-process .case-handle-process-list-wrapper .case-handle-process-item {\n  position: relative;\n  width: calc(100% - 3rem);\n  height: auto;\n  margin: 0 1.5rem 0 1.5rem;\n  display: flex;\n  flex-flow: row nowrap;\n  justify-content: start;\n  align-items: start;\n}\n\n.handle-case .handler-case-content-wrapper .handle-case-content .case-handle-process .case-handle-process-list-wrapper .case-handle-process-item .case-handle-process-item-left {\n  height: 100%;\n  display: flex;\n  flex-flow: column nowrap;\n  justify-content: start;\n  align-items: center;\n}\n\n.handle-case .handler-case-content-wrapper .handle-case-content .case-handle-process .case-handle-process-list-wrapper .case-handle-process-item .case-handle-process-item-left .item-circle {\n  width: 1rem;\n  height: 1rem;\n  border-radius: 50%;\n  border: 0.0625rem solid #cccccc;\n}\n\n.handle-case .handler-case-content-wrapper .handle-case-content .case-handle-process .case-handle-process-list-wrapper .case-handle-process-item .case-handle-process-item-left .item-line {\n  position: absolute;\n  left: 0.40625rem;\n  top: 1rem;\n  width: 0.0625rem;\n  height: calc(100% - 1rem);\n  background-color: #f9f9f9;\n}\n\n.handle-case .handler-case-content-wrapper .handle-case-content .case-handle-process .case-handle-process-list-wrapper .case-handle-process-item .case-handle-process-item-right {\n  display: flex;\n  flex-flow: column nowrap;\n  justify-content: start;\n  align-items: left;\n  margin-left: 1.25rem;\n}\n\n.handle-case .handler-case-content-wrapper .handle-case-content .case-handle-process .case-handle-process-list-wrapper .case-handle-process-item .case-handle-process-item-right .item-step {\n  font-size: 1.125rem;\n  color: #333333;\n  padding-bottom: 0.625rem;\n}\n\n.handle-case .handler-case-content-wrapper .handle-case-content .case-handle-process .case-handle-process-list-wrapper .case-handle-process-item .case-handle-process-item-right .item-info {\n  padding-bottom: 1.875rem;\n  padding-bottom: 0.4375rem;\n  color: #999;\n}\n\n.handle-case .handler-case-content-wrapper .handle-case-content .case-handle-process .case-handle-process-list-wrapper .case-handle-process-item .case-handle-process-item-right .item-result {\n  padding-bottom: 1.875rem;\n  color: #999;\n}\n\n.handle-case .handler-case-content-wrapper .handle-case-btn {\n  padding-top: 0.625rem;\n}"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ 510:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__doubleRandom_vue_vue_type_template_id_92e2df44_scoped_true___ = __webpack_require__(1514);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__doubleRandom_vue_vue_type_script_lang_js___ = __webpack_require__(1305);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_1__doubleRandom_vue_vue_type_script_lang_js___) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_1__doubleRandom_vue_vue_type_script_lang_js___[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__doubleRandom_vue_vue_type_style_index_0_id_92e2df44_lang_less_scoped_true___ = __webpack_require__(1515);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__node_modules_vue_loader_15_8_3_vue_loader_lib_runtime_componentNormalizer_js__ = __webpack_require__(0);






/* normalize component */

var component = Object(__WEBPACK_IMPORTED_MODULE_3__node_modules_vue_loader_15_8_3_vue_loader_lib_runtime_componentNormalizer_js__["a" /* default */])(
  __WEBPACK_IMPORTED_MODULE_1__doubleRandom_vue_vue_type_script_lang_js___["default"],
  __WEBPACK_IMPORTED_MODULE_0__doubleRandom_vue_vue_type_template_id_92e2df44_scoped_true___["a" /* render */],
  __WEBPACK_IMPORTED_MODULE_0__doubleRandom_vue_vue_type_template_id_92e2df44_scoped_true___["b" /* staticRenderFns */],
  false,
  null,
  "92e2df44",
  null
  
)

/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ })

});