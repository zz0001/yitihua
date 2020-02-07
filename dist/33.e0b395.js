webpackJsonp([33],{

/***/ 1413:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__node_modules_babel_loader_7_1_5_babel_loader_lib_index_js_ref_2_0_node_modules_vue_loader_15_8_3_vue_loader_lib_index_js_vue_loader_options_photoAlreadyDetail_vue_vue_type_script_lang_js___ = __webpack_require__(1414);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__node_modules_babel_loader_7_1_5_babel_loader_lib_index_js_ref_2_0_node_modules_vue_loader_15_8_3_vue_loader_lib_index_js_vue_loader_options_photoAlreadyDetail_vue_vue_type_script_lang_js____default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__node_modules_babel_loader_7_1_5_babel_loader_lib_index_js_ref_2_0_node_modules_vue_loader_15_8_3_vue_loader_lib_index_js_vue_loader_options_photoAlreadyDetail_vue_vue_type_script_lang_js___);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__node_modules_babel_loader_7_1_5_babel_loader_lib_index_js_ref_2_0_node_modules_vue_loader_15_8_3_vue_loader_lib_index_js_vue_loader_options_photoAlreadyDetail_vue_vue_type_script_lang_js___) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__node_modules_babel_loader_7_1_5_babel_loader_lib_index_js_ref_2_0_node_modules_vue_loader_15_8_3_vue_loader_lib_index_js_vue_loader_options_photoAlreadyDetail_vue_vue_type_script_lang_js___[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (__WEBPACK_IMPORTED_MODULE_0__node_modules_babel_loader_7_1_5_babel_loader_lib_index_js_ref_2_0_node_modules_vue_loader_15_8_3_vue_loader_lib_index_js_vue_loader_options_photoAlreadyDetail_vue_vue_type_script_lang_js____default.a); 

/***/ }),

/***/ 1414:
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
            id: 0,
            caseNumber: '',
            photoList: [],
            describe: '在建建筑叫停后又反复进行施工，叫停后无效，依然继续施工。',
            address: '江苏省南京市鼓楼区汉中路268号 中电鸿信信息科技有限公司',
            detailList: [],
            caseOrigin: { key: '工单来源', value: '' },
            caseNo: { key: '工单编号', value: '' },
            caseGridName: { key: '所属网格', value: '' },
            caseTime: { key: '截止时间', value: '' },
            reportPerson: { key: '上报人', value: '' },
            operationList: [],
            processList: [],
            url: ''
        };
    },
    created: function created() {},
    mounted: function mounted() {
        this.detailList = [this.caseTime, this.caseNo, this.caseOrigin, this.caseGridName, this.reportPerson];
        this.id = this.$route.query.rowId;

        this.getCaseDetail(this.id);
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
            this.url = '/wgh/app/' + 'dsbOrderDetail.action';
            //this.url = 'api/detail';
            this.$http.post(this.url, obj).then(function (res) {
                if (res.code === undefined || res.code === '0') {
                    console.log('接口返回成功');
                    var detail = res.datas;

                    if (detail !== null) {
                        if (detail.pics.indexOf(";") > 0) {
                            var info = detail.pics.split(";");
                            info.forEach(function (item) {
                                _this.photoList.push({
                                    src: window.imgUrl + item
                                });
                            });
                        } else {
                            var arr = [];
                            arr.push(detail.pics);
                            window.opinionedImgArray = arr;
                            if (detail.pics !== "" && detail.pics !== "undefined") {
                                _this.photoList = [{
                                    src: window.imgUrl + detail.pics
                                }];
                            }
                        }

                        _this.address = detail.location;
                        _this.caseNumber = detail.caseNo;
                        // TODO: 展示图片
                        _this.describe = detail.lproblem;
                        _this._inputValue(_this.caseTime, detail.reportTime);
                        _this._inputValue(_this.caseNo, detail.caseNo);
                        _this._inputValue(_this.caseOrigin, detail.origin);
                        var gridName = detail.gridName;
                        if (!gridName) {
                            gridName = "";
                        }
                        _this._inputValue(_this.caseGridName, gridName);
                        _this._inputValue(_this.reportPerson, detail.reportPerson);
                        window.caseTaskOneTaskId = detail.taskId;
                        window.caseRow_id = detail.rowId;

                        _this.processList = detail.processSteps;
                    }
                } else {
                    toast(res.message);
                }
            });

            // doPost("dsbOrderDetail.action", obj, function (data) {
            //     if (data.code == 0) {
            //         var array = data.datas;
            //         if (!isNull(array.operationList) && array.operationList.length > 0) {
            //             window.operationListArrayInfo = [];
            //             for (var i = 0; i < array.operationList.length; i++) {
            //                 var info = {
            //                     opName: array.operationList[i].opName,
            //                     opValue: array.operationList[i].opValue,
            //                     destId: array.operationList[i].destId
            //                 };
            //                 window.operationListArrayInfo.push(info);
            //             }
            //             $("#case_task_detail_page .page_footer").show();
            //         } else {
            //             $("#case_task_detail_page .page_footer").hide();
            //         }
            //         if (!isNull(array.pics)) {
            //             $("#case_task_detail_page .commodityAddImgs").show();
            //             $("#case_tasked_detail_page .commodityAddImgs").show();
            //             if (array.pics.indexOf(";") > 0) {
            //                 var info = array.pics.split(";");
            //                 info.forEach(item => {
            //                     that.list.push({
            //                         src: window.imgUrl + item
            //                     })
            //                 })
            //             } else {
            //                 var arr = [];
            //                 arr.push(array.pics);
            //                 window.opinionedImgArray = arr;
            //                 that.list = [{
            //                     src: window.imgUrl + array.pics
            //                 }]
            //             }
            //         } else {
            //             $("#case_task_detail_page .commodityAddImgs").hide();
            //             $("#case_tasked_detail_page .commodityAddImgs").hide();
            //         }
            //         window.caseTaskOneTaskId = array.taskId;
            //         //步骤
            //         if (array.processSteps.length > 0) {
            //             var html = '';
            //             var arr = array.processSteps;
            //             for (var k = 0; k < arr.length; k++) {
            //                 html += '<div class="list_row_case"><div>';
            //                 html += '    <div class="oranger_font bigger">' + [k + 1] + "、" + arr[k].name;
            //                 if (!isNull(arr[k].url)) {
            //                     html += '       <div  url="' + arr[k].url + '" class="smaller" style="border:1px solid #4ba4e6;color:#4ba4e6;float:right;height:1em;text-align: center;width:3em;line-height:1em;font-size:0.4em;margin-right:1em;margin-top;-0.2em;background: #f7f7f7;padding: 0.5em 0.1em 0.5em 0.3em;border-radius: 0.5em;">图片</div>';
            //                 }
            //                 html += '    </div>';
            //                 html += '    <p class="normal">处理时间：' + arr[k].endTime + '</p>';
            //                 html += '    <p class="normal">处理人：' + arr[k].userName + '</p>';
            //                 html += '    <p class="normal">处理情况：' + arr[k].message + '</p>';
            //                 html += '</div></div>';
            //             }
            //             if (window.thisCaseQueryType == "2") {
            //                 $("#case_tasked_steps_html").html(html);
            //             } else {
            //                 $("#case_task_steps_html").html(html);
            //             }
            //         } else {
            //             $("#case_task_steps_html").empty();
            //         }
            //         if (array.dispose == "1") {
            //             that.detailList[7].value = array.disposeResult;
            //             if (!isNull(array.backpath)) {
            //                 that.isShow = true;
            //                 if (array.backpath.indexOf(";") > 0) {
            //
            //                     var info = array.backpath.split(";");
            //                     info.forEach(item => {
            //                         that.list2.push({
            //                             src: window.imgUrl + item
            //                         })
            //                     })
            //                 } else {
            //                     var arr = [];
            //                     arr.push(array.feedbackPic);
            //                     window.opinionedImgArray = arr;
            //                     that.list2 = [{
            //                         src: window.imgUrl + array.feedbackPic
            //                     }]
            //                 }
            //             }
            //         } else {
            //
            //         }
            //         window.localStorage.originNum = array.originNum;
            //         that.detailList[0].value = array.caseNo;
            //         that.detailList[1].value = array.origin;
            //         that.detailList[2].value = array.gridName;
            //         that.detailList[3].value = array.reportPerson;
            //         that.detailList[4].value = array.reportPersonPhone;
            //         that.detailList[5].value = array.location;
            //         that.detailList[6].value = array.problem;
            //         that.detailList[6].detail = array.problem;
            //         window.localStorage.orgin = array.orgin;
            //     } else {
            //         toast(data.message);
            //     }
            // }, "");
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
                        ;
                        _this2.$router.push({ path: '/waitcaseTaskEdit' });
                    }
                }
            }).show();
        },

        /**
         * 处置
         */
        handle0: function handle0() {
            this.$router.push({ path: '/waitcaseTaskEdit', query: { id: this.id } });
            // console.log("数据：" + JSON.stringify(window.operationListArrayInfo));
            // if (!isNull(window.operationListArrayInfo) && window.operationListArrayInfo.length > 0) {
            //     showChoiceOneSelect();
            //     setTimeout(function () {
            //         //点击事件
            //         var data = $(e.currentTarget).data("data");
            //         console.log("type:" + JSON.stringify(data));
            //         window.caseOneTaskAction = data;
            //         // $.mobile.changePage("../casetask/caseTaskEdit.html");
            //         for (var i = 0; i < window.operationListArrayInfo.length; i++) {
            //             var info = '<p class="alert_edit_title gray_line_bottom">' + window.operationListArrayInfo[i].opName + '</p>';
            //             var $row = createListRow(info).appendTo("#choice_one_html");
            //             $row.data('data', window.operationListArrayInfo[i]);
            //             $row.listen("quickClick", function (e) {
            //                 //点击事件
            //                 setTimeout(function () {
            //                     var data = $(e.currentTarget).data("data");
            //                     console.log("type:" + JSON.stringify(data));
            //                     window.caseOneTaskAction = data;
            //                     that.$router.push({path: 'waitcaseTaskEdit', query: {}});
            //                     //$.mobile.changePage("../hscasetask/waitcaseTaskEdit.html");
            //                 }, 500)
            //
            //             });
            //         }
            //     }, 500);
            //
            // }
        },

        /**
         * 退回
         */
        handle1: function handle1() {
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

/***/ 1415:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1628);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(1062).default
var update = add("68d6f328", content, true, {});

/***/ }),

/***/ 1626:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/_vue-loader@15.8.3@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/_vue-loader@15.8.3@vue-loader/lib??vue-loader-options!./src/view/photograph/photoAlreadyDetail.vue?vue&type=template&id=763f7265&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"handle-case"},[_c('tk-header',[_vm._v("详情")]),_vm._v(" "),_c('tk-container',{staticClass:"handler-case-content-wrapper"},[_c('div',{staticClass:"handle-case-content"},[_c('div',{staticClass:"case-number-wrapper"},[_c('div',{staticClass:"case-number-font case-number-title"})]),_vm._v(" "),_c('tk-detail-photo',{attrs:{"list":_vm.photoList}}),_vm._v(" "),_c('div',{staticClass:"case-describe"},[_vm._v(_vm._s(_vm.describe))]),_vm._v(" "),_c('div',{staticClass:"case-address-wrapper"},[_c('img',{staticClass:"case-address-icon",attrs:{"src":"/dist/image/icon_dz.e8ca6c.png","alt":""}}),_vm._v(" "),_c('div',{staticClass:"case-address"},[_vm._v(_vm._s(_vm.address))])]),_vm._v(" "),_c('tk-detail',{attrs:{"list":_vm.detailList}}),_vm._v(" "),_c('div',{staticClass:"case-handle-process"},[_c('div',{staticClass:"case-handle-process-title"},[_vm._v("处理流程")]),_vm._v(" "),_c('div',{staticClass:"case-handle-process-list-wrapper"},_vm._l((_vm.processList),function(item,index){return _c('div',{staticClass:"case-handle-process-item"},[_c('div',{staticClass:"case-handle-process-item-left"},[_c('div',{staticClass:"item-circle",style:(index === _vm.processList.length - 1 ? {'backgroundColor': '#cccccc'}:{})}),_vm._v(" "),_c('div',{staticClass:"item-line"})]),_vm._v(" "),_c('div',{staticClass:"case-handle-process-item-right"},[_c('div',{staticClass:"item-step"},[_vm._v(_vm._s(item.name))]),_vm._v(" "),_c('div',{staticClass:"item-info"},[_vm._v(_vm._s(item.userName)+"|"+_vm._s(item.endTime))]),_vm._v(" "),_c('div',{staticClass:"item-result"},[_vm._v(_vm._s(item.message))])])])}),0)])],1)])],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/view/photograph/photoAlreadyDetail.vue?vue&type=template&id=763f7265&scoped=true&
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });


/***/ }),

/***/ 1627:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__node_modules_extract_text_webpack_plugin_3_0_2_extract_text_webpack_plugin_dist_loader_js_ref_8_0_node_modules_vue_style_loader_4_1_2_vue_style_loader_index_js_node_modules_css_loader_0_28_11_css_loader_index_js_ref_8_2_node_modules_vue_loader_15_8_3_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_8_3_node_modules_px2rem_loader_0_1_9_px2rem_loader_index_js_ref_8_4_node_modules_less_loader_4_1_0_less_loader_dist_cjs_js_ref_8_5_node_modules_vue_loader_15_8_3_vue_loader_lib_index_js_vue_loader_options_photoAlreadyDetail_vue_vue_type_style_index_0_id_763f7265_lang_less_scoped_true___ = __webpack_require__(1415);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__node_modules_extract_text_webpack_plugin_3_0_2_extract_text_webpack_plugin_dist_loader_js_ref_8_0_node_modules_vue_style_loader_4_1_2_vue_style_loader_index_js_node_modules_css_loader_0_28_11_css_loader_index_js_ref_8_2_node_modules_vue_loader_15_8_3_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_8_3_node_modules_px2rem_loader_0_1_9_px2rem_loader_index_js_ref_8_4_node_modules_less_loader_4_1_0_less_loader_dist_cjs_js_ref_8_5_node_modules_vue_loader_15_8_3_vue_loader_lib_index_js_vue_loader_options_photoAlreadyDetail_vue_vue_type_style_index_0_id_763f7265_lang_less_scoped_true____default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__node_modules_extract_text_webpack_plugin_3_0_2_extract_text_webpack_plugin_dist_loader_js_ref_8_0_node_modules_vue_style_loader_4_1_2_vue_style_loader_index_js_node_modules_css_loader_0_28_11_css_loader_index_js_ref_8_2_node_modules_vue_loader_15_8_3_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_8_3_node_modules_px2rem_loader_0_1_9_px2rem_loader_index_js_ref_8_4_node_modules_less_loader_4_1_0_less_loader_dist_cjs_js_ref_8_5_node_modules_vue_loader_15_8_3_vue_loader_lib_index_js_vue_loader_options_photoAlreadyDetail_vue_vue_type_style_index_0_id_763f7265_lang_less_scoped_true___);
/* unused harmony reexport namespace */
 /* unused harmony default export */ var _unused_webpack_default_export = (__WEBPACK_IMPORTED_MODULE_0__node_modules_extract_text_webpack_plugin_3_0_2_extract_text_webpack_plugin_dist_loader_js_ref_8_0_node_modules_vue_style_loader_4_1_2_vue_style_loader_index_js_node_modules_css_loader_0_28_11_css_loader_index_js_ref_8_2_node_modules_vue_loader_15_8_3_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_8_3_node_modules_px2rem_loader_0_1_9_px2rem_loader_index_js_ref_8_4_node_modules_less_loader_4_1_0_less_loader_dist_cjs_js_ref_8_5_node_modules_vue_loader_15_8_3_vue_loader_lib_index_js_vue_loader_options_photoAlreadyDetail_vue_vue_type_style_index_0_id_763f7265_lang_less_scoped_true____default.a); 

/***/ }),

/***/ 1628:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1061)(true);
// imports


// module
exports.push([module.i, ".handle-case[data-v-763f7265]{width:100vw;height:100vh}.handle-case .handler-case-content-wrapper[data-v-763f7265]{background-color:#fff;width:100vw}.handle-case .handler-case-content-wrapper .handle-case-content[data-v-763f7265]{width:100%;height:calc(100vh - 8.125rem);overflow-y:auto}.handle-case .handler-case-content-wrapper .handle-case-content .case-number-wrapper[data-v-763f7265]{width:100%;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-flow:row nowrap;flex-flow:row nowrap;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:start;-webkit-box-align:center;-ms-flex-align:center;align-items:center;margin-top:.625rem}.handle-case .handler-case-content-wrapper .handle-case-content .case-number-wrapper .case-number-font[data-v-763f7265]{font-size:1.5rem}.handle-case .handler-case-content-wrapper .handle-case-content .case-number-wrapper .case-number-title[data-v-763f7265]{width:7.8125rem;margin-left:1.5rem;-webkit-box-flex:3.5;-ms-flex:3.5;flex:3.5}.handle-case .handler-case-content-wrapper .handle-case-content .case-number-wrapper .case-number[data-v-763f7265]{margin-right:1.5rem;-webkit-box-flex:6.5;-ms-flex:6.5;flex:6.5}.handle-case .handler-case-content-wrapper .handle-case-content .picture-list-wrapper[data-v-763f7265]{width:100%;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-flow:column nowrap;flex-flow:column nowrap;-webkit-box-align:center;-ms-flex-align:center;align-items:center;padding:0 1.5rem}.handle-case .handler-case-content-wrapper .handle-case-content .case-describe[data-v-763f7265]{width:calc(100% - 1.5rem);margin:0 1.5rem;font-size:1.25rem;line-height:1.875rem}.handle-case .handler-case-content-wrapper .handle-case-content .case-address-wrapper[data-v-763f7265]{width:100%;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-flow:row nowrap;flex-flow:row nowrap;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:start;-webkit-box-align:center;-ms-flex-align:center;align-items:center;margin-top:.75rem}.handle-case .handler-case-content-wrapper .handle-case-content .case-address-wrapper .case-address-icon[data-v-763f7265]{margin-left:1.4375rem;width:1.25rem;height:auto}.handle-case .handler-case-content-wrapper .handle-case-content .case-address-wrapper .case-address[data-v-763f7265]{margin:0 1.5rem 0 .875rem;font-size:1.125rem;line-height:1.25rem}.handle-case .handler-case-content-wrapper .handle-case-content .case-handle-process[data-v-763f7265]{width:100%;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-flow:column nowrap;flex-flow:column nowrap;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:start;margin-top:1.5625rem}.handle-case .handler-case-content-wrapper .handle-case-content .case-handle-process .case-handle-process-title[data-v-763f7265]{font-size:1.125rem;color:#333;margin:1.125rem 0 1.125rem 1.5rem}.handle-case .handler-case-content-wrapper .handle-case-content .case-handle-process .case-handle-process-list-wrapper[data-v-763f7265]{width:100%;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-flow:column nowrap;flex-flow:column nowrap;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:start;-webkit-box-align:start;-ms-flex-align:start;align-items:start}.handle-case .handler-case-content-wrapper .handle-case-content .case-handle-process .case-handle-process-list-wrapper .case-handle-process-item[data-v-763f7265]{position:relative;width:calc(100% - 3rem);height:auto;margin:0 1.5rem;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-flow:row nowrap;flex-flow:row nowrap;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:start;-webkit-box-align:start;-ms-flex-align:start;align-items:start}.handle-case .handler-case-content-wrapper .handle-case-content .case-handle-process .case-handle-process-list-wrapper .case-handle-process-item .case-handle-process-item-left[data-v-763f7265]{height:100%;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-flow:column nowrap;flex-flow:column nowrap;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:start;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.handle-case .handler-case-content-wrapper .handle-case-content .case-handle-process .case-handle-process-list-wrapper .case-handle-process-item .case-handle-process-item-left .item-circle[data-v-763f7265]{width:1rem;height:1rem;border-radius:50%;border:.0625rem solid #ccc}.handle-case .handler-case-content-wrapper .handle-case-content .case-handle-process .case-handle-process-list-wrapper .case-handle-process-item .case-handle-process-item-left .item-line[data-v-763f7265]{position:absolute;left:.40625rem;top:1rem;width:.0625rem;height:calc(100% - 1rem);background-color:#f9f9f9}.handle-case .handler-case-content-wrapper .handle-case-content .case-handle-process .case-handle-process-list-wrapper .case-handle-process-item .case-handle-process-item-right[data-v-763f7265]{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-flow:column nowrap;flex-flow:column nowrap;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:start;-webkit-box-align:left;-ms-flex-align:left;align-items:left;margin-left:1.25rem}.handle-case .handler-case-content-wrapper .handle-case-content .case-handle-process .case-handle-process-list-wrapper .case-handle-process-item .case-handle-process-item-right .item-step[data-v-763f7265]{font-size:1.125rem;color:#333;padding-bottom:.625rem}.handle-case .handler-case-content-wrapper .handle-case-content .case-handle-process .case-handle-process-list-wrapper .case-handle-process-item .case-handle-process-item-right .item-info[data-v-763f7265]{padding-bottom:1.875rem;padding-bottom:.4375rem;color:#999}.handle-case .handler-case-content-wrapper .handle-case-content .case-handle-process .case-handle-process-list-wrapper .case-handle-process-item .case-handle-process-item-right .item-result[data-v-763f7265]{padding-bottom:1.875rem;color:#999}", "", {"version":3,"sources":["/Users/zz/project/zhzf_platform/vue/mobile1.0/src/view/photograph/photoAlreadyDetail.vue"],"names":[],"mappings":"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","file":"photoAlreadyDetail.vue?vue&type=style&index=0&id=763f7265&lang=less&scoped=true&","sourcesContent":[".handle-case {\n  width: 100vw;\n  height: 100vh;\n}\n\n.handle-case .handler-case-content-wrapper {\n  background-color: white;\n  width: 100vw;\n}\n\n.handle-case .handler-case-content-wrapper .handle-case-content {\n  width: 100%;\n  height: calc(100vh - 8.125rem);\n  overflow-y: auto;\n}\n\n.handle-case .handler-case-content-wrapper .handle-case-content .case-number-wrapper {\n  width: 100%;\n  display: flex;\n  flex-flow: row nowrap;\n  justify-content: start;\n  align-items: center;\n  margin-top: 0.625rem;\n}\n\n.handle-case .handler-case-content-wrapper .handle-case-content .case-number-wrapper .case-number-font {\n  font-size: 1.5rem;\n}\n\n.handle-case .handler-case-content-wrapper .handle-case-content .case-number-wrapper .case-number-title {\n  width: 7.8125rem;\n  margin-left: 1.5rem;\n  flex: 3.5;\n}\n\n.handle-case .handler-case-content-wrapper .handle-case-content .case-number-wrapper .case-number {\n  margin-right: 1.5rem;\n  flex: 6.5;\n}\n\n.handle-case .handler-case-content-wrapper .handle-case-content .picture-list-wrapper {\n  width: 100%;\n  display: flex;\n  flex-flow: column nowrap;\n  align-items: center;\n  padding: 0 1.5rem;\n}\n\n.handle-case .handler-case-content-wrapper .handle-case-content .case-describe {\n  width: calc(100% - 1.5rem);\n  margin: 0 1.5rem;\n  font-size: 1.25rem;\n  line-height: 1.875rem;\n}\n\n.handle-case .handler-case-content-wrapper .handle-case-content .case-address-wrapper {\n  width: 100%;\n  display: flex;\n  flex-flow: row nowrap;\n  justify-content: start;\n  align-items: center;\n  margin-top: 0.75rem;\n}\n\n.handle-case .handler-case-content-wrapper .handle-case-content .case-address-wrapper .case-address-icon {\n  margin-left: 1.4375rem;\n  width: 1.25rem;\n  height: auto;\n}\n\n.handle-case .handler-case-content-wrapper .handle-case-content .case-address-wrapper .case-address {\n  margin: 0 1.5rem 0 0.875rem;\n  font-size: 1.125rem;\n  line-height: 1.25rem;\n}\n\n.handle-case .handler-case-content-wrapper .handle-case-content .case-handle-process {\n  width: 100%;\n  display: flex;\n  flex-flow: column nowrap;\n  justify-content: start;\n  margin-top: 1.5625rem;\n}\n\n.handle-case .handler-case-content-wrapper .handle-case-content .case-handle-process .case-handle-process-title {\n  font-size: 1.125rem;\n  color: #333333;\n  margin: 1.125rem 0 1.125rem 1.5rem;\n}\n\n.handle-case .handler-case-content-wrapper .handle-case-content .case-handle-process .case-handle-process-list-wrapper {\n  width: 100%;\n  display: flex;\n  flex-flow: column nowrap;\n  justify-content: start;\n  align-items: start;\n}\n\n.handle-case .handler-case-content-wrapper .handle-case-content .case-handle-process .case-handle-process-list-wrapper .case-handle-process-item {\n  position: relative;\n  width: calc(100% - 3rem);\n  height: auto;\n  margin: 0 1.5rem 0 1.5rem;\n  display: flex;\n  flex-flow: row nowrap;\n  justify-content: start;\n  align-items: start;\n}\n\n.handle-case .handler-case-content-wrapper .handle-case-content .case-handle-process .case-handle-process-list-wrapper .case-handle-process-item .case-handle-process-item-left {\n  height: 100%;\n  display: flex;\n  flex-flow: column nowrap;\n  justify-content: start;\n  align-items: center;\n}\n\n.handle-case .handler-case-content-wrapper .handle-case-content .case-handle-process .case-handle-process-list-wrapper .case-handle-process-item .case-handle-process-item-left .item-circle {\n  width: 1rem;\n  height: 1rem;\n  border-radius: 50%;\n  border: 0.0625rem solid #cccccc;\n}\n\n.handle-case .handler-case-content-wrapper .handle-case-content .case-handle-process .case-handle-process-list-wrapper .case-handle-process-item .case-handle-process-item-left .item-line {\n  position: absolute;\n  left: 0.40625rem;\n  top: 1rem;\n  width: 0.0625rem;\n  height: calc(100% - 1rem);\n  background-color: #f9f9f9;\n}\n\n.handle-case .handler-case-content-wrapper .handle-case-content .case-handle-process .case-handle-process-list-wrapper .case-handle-process-item .case-handle-process-item-right {\n  display: flex;\n  flex-flow: column nowrap;\n  justify-content: start;\n  align-items: left;\n  margin-left: 1.25rem;\n}\n\n.handle-case .handler-case-content-wrapper .handle-case-content .case-handle-process .case-handle-process-list-wrapper .case-handle-process-item .case-handle-process-item-right .item-step {\n  font-size: 1.125rem;\n  color: #333333;\n  padding-bottom: 0.625rem;\n}\n\n.handle-case .handler-case-content-wrapper .handle-case-content .case-handle-process .case-handle-process-list-wrapper .case-handle-process-item .case-handle-process-item-right .item-info {\n  padding-bottom: 1.875rem;\n  padding-bottom: 0.4375rem;\n  color: #999;\n}\n\n.handle-case .handler-case-content-wrapper .handle-case-content .case-handle-process .case-handle-process-list-wrapper .case-handle-process-item .case-handle-process-item-right .item-result {\n  padding-bottom: 1.875rem;\n  color: #999;\n}"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ 542:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__photoAlreadyDetail_vue_vue_type_template_id_763f7265_scoped_true___ = __webpack_require__(1626);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__photoAlreadyDetail_vue_vue_type_script_lang_js___ = __webpack_require__(1413);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_1__photoAlreadyDetail_vue_vue_type_script_lang_js___) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_1__photoAlreadyDetail_vue_vue_type_script_lang_js___[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__photoAlreadyDetail_vue_vue_type_style_index_0_id_763f7265_lang_less_scoped_true___ = __webpack_require__(1627);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__node_modules_vue_loader_15_8_3_vue_loader_lib_runtime_componentNormalizer_js__ = __webpack_require__(0);






/* normalize component */

var component = Object(__WEBPACK_IMPORTED_MODULE_3__node_modules_vue_loader_15_8_3_vue_loader_lib_runtime_componentNormalizer_js__["a" /* default */])(
  __WEBPACK_IMPORTED_MODULE_1__photoAlreadyDetail_vue_vue_type_script_lang_js___["default"],
  __WEBPACK_IMPORTED_MODULE_0__photoAlreadyDetail_vue_vue_type_template_id_763f7265_scoped_true___["a" /* render */],
  __WEBPACK_IMPORTED_MODULE_0__photoAlreadyDetail_vue_vue_type_template_id_763f7265_scoped_true___["b" /* staticRenderFns */],
  false,
  null,
  "763f7265",
  null
  
)

/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ })

});