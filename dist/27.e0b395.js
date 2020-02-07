webpackJsonp([27],{

/***/ 1192:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "image/slide_example.dc4a37.png";

/***/ }),

/***/ 1287:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__node_modules_babel_loader_7_1_5_babel_loader_lib_index_js_ref_2_0_node_modules_vue_loader_15_8_3_vue_loader_lib_index_js_vue_loader_options_normalCaseDetail_vue_vue_type_script_lang_js___ = __webpack_require__(1288);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__node_modules_babel_loader_7_1_5_babel_loader_lib_index_js_ref_2_0_node_modules_vue_loader_15_8_3_vue_loader_lib_index_js_vue_loader_options_normalCaseDetail_vue_vue_type_script_lang_js____default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__node_modules_babel_loader_7_1_5_babel_loader_lib_index_js_ref_2_0_node_modules_vue_loader_15_8_3_vue_loader_lib_index_js_vue_loader_options_normalCaseDetail_vue_vue_type_script_lang_js___);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__node_modules_babel_loader_7_1_5_babel_loader_lib_index_js_ref_2_0_node_modules_vue_loader_15_8_3_vue_loader_lib_index_js_vue_loader_options_normalCaseDetail_vue_vue_type_script_lang_js___) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__node_modules_babel_loader_7_1_5_babel_loader_lib_index_js_ref_2_0_node_modules_vue_loader_15_8_3_vue_loader_lib_index_js_vue_loader_options_normalCaseDetail_vue_vue_type_script_lang_js___[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (__WEBPACK_IMPORTED_MODULE_0__node_modules_babel_loader_7_1_5_babel_loader_lib_index_js_ref_2_0_node_modules_vue_loader_15_8_3_vue_loader_lib_index_js_vue_loader_options_normalCaseDetail_vue_vue_type_script_lang_js____default.a); 

/***/ }),

/***/ 1288:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _axios = __webpack_require__(488);

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var testPic = { src: __webpack_require__(1192) }; //
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
    name: "handleCase",
    data: function data() {
        return {
            id: 0,
            caseNumber: '',
            photoList: [],
            describe: '在建建筑叫停后又反复进行施工，叫停后无效，依然继续施工。',
            address: '江苏省南京市鼓楼区汉中路268号 中电鸿信信息科技有限公司',
            detailList1: [],
            detailList2: [],
            detailList3: [],
            detailList4: [],
            detailList5: [],
            detailList6: [],
            caseOriginName: { key: '案件来源', value: '' },
            caseNo: { key: '案件编号', value: '' },
            caseTypeName: { key: '案件类别', value: '' },
            shouliDate: { key: '受理时间', value: '' },
            curPersonName: { key: '当事人', value: '' },
            location: { key: '案发地点', value: '' },
            caseDescribe: { key: '案件描述', value: '' },
            createUserName: { key: '上报人', value: '' },
            createdDate: { key: '上报时间', value: '' },

            caseSource: { key: '案由', value: '' },
            caseAccording: { key: '处罚依据', value: '' },
            punishDecsion: { key: '处罚决定', value: '' },
            caseImport: { key: '案情摘要', value: '' },
            lianYijian: { key: '审批意见', value: '' },
            lianShenpiRen: { key: '审批人', value: '' },
            lianShenpiTime: { key: '审批时间', value: '' },

            surveryPeo: { key: '调查人员', value: '' },
            surveyTime: { key: '调查时间', value: '' },
            caseFact: { key: '案件基本事实', value: '' },
            yijian: { key: '审批意见', value: '' },
            shenpiRen: { key: '审批人', value: '' },
            shenpiTime: { key: '审批时间', value: '' },

            tellWay: { key: '告知方式', value: '' },
            tellPeo: { key: '文书送达人员', value: '' },
            tellTime: { key: '文书送达日期', value: '' },
            tellAddress: { key: '文书送达地址', value: '' },
            tellNextPeo: { key: '备注', value: '' },
            tellCaseProf: [],

            decideWay: { key: '决定送达方式', value: '' },
            decidePeo: { key: '文书送达人员', value: '' },
            decideTime: { key: '文书送达日期', value: '' },
            decideAddress: { key: '文书送达地址', value: '' },
            decideRemark: { key: '备注', value: '' },
            decideNextPeo: { key: '下级审批人', value: '' },
            decideCaseProf: []
        };
    },
    created: function created() {},
    mounted: function mounted() {
        this.detailList1 = [this.caseNo];
        this.detailList2 = [this.caseOriginName, this.caseTypeName, this.curPersonName, this.shouliDate, this.location, this.caseDescribe, this.createUserName, this.createdDate];
        this.detailList3 = [this.caseSource, this.caseAccording, this.punishDecsion, this.caseImport, this.lianYijian, this.lianShenpiRen, this.lianShenpiTime];
        this.detailList4 = [this.surveryPeo, this.surveyTime, this.caseFact, this.yijian, this.shenpiRen, this.shenpiTime];
        this.detailList5 = [this.tellWay, this.tellPeo, this.tellTime, this.tellAddress, this.tellNextPeo];
        this.detailList6 = [this.decideWay, this.decidePeo, this.decideTime, this.decideAddress, this.decideRemark, this.decideNextPeo];

        this.caseInfoId = this.$route.query.caseInfoId;

        this.getCaseDetail(this.caseInfoId);
    },

    methods: {
        /**
         * 获取案件详情案件
         */
        getCaseDetail: function getCaseDetail(caseInfoId) {
            var _this = this;

            var that = this;
            // obj += toJson("loginId", window.localStorage.loginId) + "&";
            // obj += toJson("rowId", row_id);
            var params = {
                caseInfoId: caseInfoId,
                userId: ""
            };
            this.url = '/zhzf/app/case/getAppCaseInfo.action';
            //this.url = 'api/detail';
            _axios2.default.post(this.url, params).then(function (res) {

                if (res.code === undefined || res.code === 0) {
                    console.log('接口返回成功');
                    var detail = res.data;
                    ;
                    if (detail !== null) {
                        // if (detail.pics.indexOf(";") > 0) {
                        //     let info = detail.pics.split(";");
                        //     info.forEach(item=>{
                        //         this.photoList.push({
                        //             src:window.imgUrl+item
                        //         })
                        //     })
                        //
                        // } else {
                        //     let arr = [];
                        //     arr.push(detail.pics);
                        //     window.opinionedImgArray = arr;
                        //     if(detail.pics!==""&&detail.pics!=="undefined"){
                        //         this.photoList=[{
                        //             src:window.imgUrl+detail.pics
                        //         }]
                        //     }
                        //
                        // }


                        // TODO: 展示图片

                        _this._inputValue(that.caseNo, detail.caseNo);
                        _this._inputValue(that.caseOriginName, detail.caseOriginName);
                        _this._inputValue(that.caseTypeName, detail.caseTypeName);
                        _this._inputValue(that.curPersonName, detail.curPersonName);
                        _this._inputValue(that.caseDescribe, detail.caseDescribe);
                        _this._inputValue(that.createUserName, detail.createUserName);

                        _this._inputValue(that.shouliDate, _this.formatTime(detail.caseTime, 'Y-M-D'));
                        _this._inputValue(that.location, detail.location);

                        _this._inputValue(that.createdDate, detail.createdDate);

                        var def = res.data.annexSet;
                        var abc = res.data.recordList;

                        for (var i = 0; i < abc.length; i++) {
                            if (abc[i].formTaskId == 'lasp') {
                                var obj = JSON.parse(abc[i].contentJson);
                                console.log('objobj=' + obj);
                                if (obj != null) {

                                    _this._inputValue(that.caseSource, obj.caseReason);
                                    _this._inputValue(that.caseAccording, obj.punishBasis);
                                    _this._inputValue(that.punishDecsion, obj.punishDecide);
                                    _this._inputValue(that.caseImport, obj.caseSummary);
                                }
                            }
                        }
                        for (var i = 0; i < abc.length; i++) {
                            if (abc[i].formTaskId == 'laspsh') {
                                var obj = JSON.parse(abc[i].contentJson);
                                if (obj != null) {
                                    _this._inputValue(that.lianYijian, obj.remark);
                                    _this._inputValue(that.lianShenpiRen, abc[i].userNames);
                                    _this._inputValue(that.lianShenpiTime, abc[i].tacheEndDatetime);
                                }
                            }
                        }

                        for (var i = 0; i < abc.length; i++) {
                            if (abc[i].formTaskId == 'dcqz') {
                                var obj = JSON.parse(abc[i].contentJson);
                                if (obj != null) {
                                    // this.surveryPeo = obj.surveyPerson;
                                    // this.caseTimeee = obj.surveyTime;
                                    // this.$refs.casetTruth.inputContent = obj.caseFact;
                                    that._inputValue(that.surveryPeo, obj.surveyPerson);
                                    that._inputValue(that.surveyTime, obj.surveyTime);
                                    that._inputValue(that.caseFact, obj.caseFact);
                                }
                                // if (abc[i].annexList != null && abc[i].annexList.length > 0) {
                                //     for (var j = 0;j<abc[i].annexList.length;j++){
                                //         this.caseProf.push(abc[i].annexList[j].annexName)
                                //         this.caseProfPath.push(abc[i].annexList[j].annexPath)
                                //
                                //     }
                                // }
                                break;
                            }
                        }
                        for (var i = 0; i < abc.length; i++) {
                            if (abc[i].formTaskId == 'dcqzsh') {

                                var obj = JSON.parse(abc[i].contentJson);
                                if (obj != null) {
                                    // this.yijian = obj.remark;
                                    // this.shenpiRen = abc[i].userNames;
                                    // this.shenpiTime = abc[i].tacheEndDatetime;
                                    that._inputValue(that.yijian, obj.remark);
                                    that._inputValue(that.shenpiRen, abc[i].userNames);
                                    that._inputValue(that.shenpiTime, abc[i].tacheEndDatetime);
                                }

                                break;
                            }
                        }
                        for (var i = 0; i < abc.length; i++) {
                            if (abc[i].formTaskId == 'cfgz') {

                                var obj = JSON.parse(abc[i].contentJson);
                                if (obj != null) {
                                    var tellWay = obj.informWay;
                                    if (obj.informWay == 0) {
                                        tellWay = '直接送达';
                                    } else if (obj.informWay == 1) {
                                        tellWay = '留置送达';
                                    } else if (obj.informWay == 2) {
                                        tellWay = '邮寄送达';
                                    } else {
                                        tellWay = '公告送达';
                                    }
                                    // this.tellPeo = obj.docDeliveryPerson
                                    // this.tellTime = obj.docDeliveryTime
                                    // this.tellAddress = obj.docLocation
                                    // this.$refs.tellRemark.inputContent = obj.remark
                                    // this.tellNextPeo = abc[i].userNames

                                    that._inputValue(that.tellWay, tellWay);
                                    that._inputValue(that.tellPeo, obj.docDeliveryPerson);
                                    that._inputValue(that.tellTime, obj.docDeliveryTime);
                                    that._inputValue(that.tellAddress, obj.docLocation);
                                    that._inputValue(that.tellNextPeo, abc[i].userNames);
                                }
                                // if (abc[i].annexList != null && abc[i].annexList.length > 0) {
                                //     for (var j = 0;j<abc[i].annexList.length;j++){
                                //         if (abc[i].annexList[j].type == 1){
                                //             this.tellCaseProf.push(abc[i].annexList[j].annexName)
                                //             this.tellCaseProfPath.push(abc[i].annexList[j].annexPath)
                                //         } else if (abc[i].annexList[j].type == 2) {
                                //             this.ChenshuCaseProf.push(abc[i].annexList[j].annexName)
                                //             this.ChenshuCaseProfPath.push(abc[i].annexList[j].annexPath)
                                //         } else {
                                //             this.listenCaseProf.push(abc[i].annexList[j].annexName)
                                //             this.listenCaseProfPath.push(abc[i].annexList[j].annexPath)
                                //         }
                                //     }
                                // }
                                // if (obj != null) {
                                //     this.chenShuAddress = obj.pleaLocation
                                //     this.chenShuTime = obj.pleaTime
                                //     this.$refs.chenShuRemark.inputContent = obj.pleaFact
                                //     this.listenAddress = obj.hearLocation
                                //     this.listenTime = obj.hearTime
                                //     this.$refs.listenContent.inputContent = obj.hearContent
                                //
                                //
                                //     this.listenShow = obj.hear
                                //     this.chenShuShow = obj.plea
                                //
                                // }

                                break;
                            }
                        }
                        for (var i = 0; i < abc.length; i++) {
                            if (abc[i].formTaskId == 'cfjd') {

                                var obj = JSON.parse(abc[i].contentJson);
                                var decideWay = "";

                                if (obj != null) {
                                    if (obj.decDeliveryWay == 0) {
                                        decideWay = '直接送达';
                                    } else if (obj.decDeliveryWay == 1) {
                                        decideWay = '留置送达';
                                    } else if (obj.decDeliveryWay == 2) {
                                        decideWay = '邮寄送达';
                                    } else {
                                        decideWay = '公告送达';
                                    }
                                    that._inputValue(that.decideWay, decideWay);
                                    // this.decidePeo = obj.docDeliveryPerson
                                    // this.decideTime = obj.docDeliveryTime
                                    // this.decideAddress = obj.docLocation
                                    // this.$refs.decideRemark.inputContent = obj.remark
                                    that._inputValue(that.decidePeo, obj.docDeliveryTime);
                                    that._inputValue(that.decideTime, obj.docLocation);
                                    that._inputValue(that.decideAddress, obj.docLocation);
                                    that._inputValue(that.decideRemark, obj.remark);
                                }

                                that._inputValue(that.decideNextPeo, abc[i].userNames);
                                // this.decideNextPeo = abc[i].userNames

                                if (abc[i].annexList != null && abc[i].annexList.length > 0) {
                                    for (var j = 0; j < abc[i].annexList.length; j++) {
                                        _this.decideCaseProf.push(abc[i].annexList[j].annexName);
                                        _this.decideCaseProfPath.push(abc[i].annexList[j].annexPath);
                                    }
                                }
                                break;
                            }
                        }

                        if (_this.allType != 1) {
                            for (var i = 0; i < abc.length; i++) {
                                if (abc[i].formTaskId == 'jagd') {
                                    var obj = JSON.parse(abc[i].contentJson);
                                    if (obj != null) {
                                        _this.allEndTime = obj.caseEndTime;
                                        _this.$refs.allEndZhiXing.inputContent = obj.doContent;
                                        _this.$refs.allEndFuYi.inputContent = obj.lawsuit;
                                        _this.allEndNextPeo = abc[i].userNames;
                                    }
                                    if (abc[i].annexList != null && abc[i].annexList.length > 0) {
                                        for (var j = 0; j < abc[i].annexList.length; j++) {
                                            _this.allEndCaseProf.push(abc[i].annexList[j].annexName);
                                            _this.allEndCaseProfPath.push(abc[i].annexList[j].annexPath);
                                        }
                                    }
                                    _this.addUserId = abc[i].userId;
                                    break;
                                }
                            }
                        }
                        //

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
        // 格式化日期，如月、日、时、分、秒保证为2位数
        formatNumber: function formatNumber(n) {
            n = n.toString();
            return n[1] ? n : '0' + n;
        },

        // 参数number为毫秒时间戳，format为需要转换成的日期格式
        formatTime: function formatTime(number, format) {
            var time = new Date(number);
            var newArr = [];
            var formatArr = ['Y', 'M', 'D', 'h', 'm', 's'];
            newArr.push(time.getFullYear());
            newArr.push(this.formatNumber(time.getMonth() + 1));
            newArr.push(this.formatNumber(time.getDate()));

            for (var i in newArr) {
                format = format.replace(formatArr[i], newArr[i]);
            }
            return format;
        }
    }
};

/***/ }),

/***/ 1289:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1501);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(1062).default
var update = add("2a52b515", content, true, {});

/***/ }),

/***/ 1499:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/_vue-loader@15.8.3@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/_vue-loader@15.8.3@vue-loader/lib??vue-loader-options!./src/view/anjianshangbao/normalCaseDetail.vue?vue&type=template&id=3915f19e&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"handle-case"},[_c('tk-header',[_vm._v("案件详情")]),_vm._v(" "),_c('tk-scroll',[_c('div',[_c('tk-detail',{attrs:{"list":_vm.detailList1}}),_vm._v(" "),_c('tk-title',[_vm._v("受理登记")]),_vm._v(" "),_c('tk-detail',{attrs:{"list":_vm.detailList2}}),_vm._v(" "),_c('tk-title',[_vm._v("立案审批")]),_vm._v(" "),_c('tk-detail',{attrs:{"list":_vm.detailList3}}),_vm._v(" "),_c('tk-title',[_vm._v("调查取证")]),_vm._v(" "),_c('tk-detail',{attrs:{"list":_vm.detailList4}}),_vm._v(" "),_c('tk-title',[_vm._v("处罚告知")]),_vm._v(" "),_c('tk-detail',{attrs:{"list":_vm.detailList5}}),_vm._v(" "),_c('tk-title',[_vm._v("处罚决定")]),_vm._v(" "),_c('tk-detail',{attrs:{"list":_vm.detailList6}})],1)])],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/view/anjianshangbao/normalCaseDetail.vue?vue&type=template&id=3915f19e&scoped=true&
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });


/***/ }),

/***/ 1500:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__node_modules_extract_text_webpack_plugin_3_0_2_extract_text_webpack_plugin_dist_loader_js_ref_8_0_node_modules_vue_style_loader_4_1_2_vue_style_loader_index_js_node_modules_css_loader_0_28_11_css_loader_index_js_ref_8_2_node_modules_vue_loader_15_8_3_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_8_3_node_modules_px2rem_loader_0_1_9_px2rem_loader_index_js_ref_8_4_node_modules_less_loader_4_1_0_less_loader_dist_cjs_js_ref_8_5_node_modules_vue_loader_15_8_3_vue_loader_lib_index_js_vue_loader_options_normalCaseDetail_vue_vue_type_style_index_0_id_3915f19e_lang_less_scoped_true___ = __webpack_require__(1289);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__node_modules_extract_text_webpack_plugin_3_0_2_extract_text_webpack_plugin_dist_loader_js_ref_8_0_node_modules_vue_style_loader_4_1_2_vue_style_loader_index_js_node_modules_css_loader_0_28_11_css_loader_index_js_ref_8_2_node_modules_vue_loader_15_8_3_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_8_3_node_modules_px2rem_loader_0_1_9_px2rem_loader_index_js_ref_8_4_node_modules_less_loader_4_1_0_less_loader_dist_cjs_js_ref_8_5_node_modules_vue_loader_15_8_3_vue_loader_lib_index_js_vue_loader_options_normalCaseDetail_vue_vue_type_style_index_0_id_3915f19e_lang_less_scoped_true____default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__node_modules_extract_text_webpack_plugin_3_0_2_extract_text_webpack_plugin_dist_loader_js_ref_8_0_node_modules_vue_style_loader_4_1_2_vue_style_loader_index_js_node_modules_css_loader_0_28_11_css_loader_index_js_ref_8_2_node_modules_vue_loader_15_8_3_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_8_3_node_modules_px2rem_loader_0_1_9_px2rem_loader_index_js_ref_8_4_node_modules_less_loader_4_1_0_less_loader_dist_cjs_js_ref_8_5_node_modules_vue_loader_15_8_3_vue_loader_lib_index_js_vue_loader_options_normalCaseDetail_vue_vue_type_style_index_0_id_3915f19e_lang_less_scoped_true___);
/* unused harmony reexport namespace */
 /* unused harmony default export */ var _unused_webpack_default_export = (__WEBPACK_IMPORTED_MODULE_0__node_modules_extract_text_webpack_plugin_3_0_2_extract_text_webpack_plugin_dist_loader_js_ref_8_0_node_modules_vue_style_loader_4_1_2_vue_style_loader_index_js_node_modules_css_loader_0_28_11_css_loader_index_js_ref_8_2_node_modules_vue_loader_15_8_3_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_8_3_node_modules_px2rem_loader_0_1_9_px2rem_loader_index_js_ref_8_4_node_modules_less_loader_4_1_0_less_loader_dist_cjs_js_ref_8_5_node_modules_vue_loader_15_8_3_vue_loader_lib_index_js_vue_loader_options_normalCaseDetail_vue_vue_type_style_index_0_id_3915f19e_lang_less_scoped_true____default.a); 

/***/ }),

/***/ 1501:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1061)(true);
// imports


// module
exports.push([module.i, ".handle-case[data-v-3915f19e]{width:100vw;height:100vh}.handle-case .handler-case-content-wrapper[data-v-3915f19e]{background-color:#fff;width:100vw}.handle-case .handler-case-content-wrapper .handle-case-content[data-v-3915f19e]{width:100%;height:calc(100vh - 8.125rem);overflow-y:auto}.handle-case .handler-case-content-wrapper .handle-case-content .case-number-wrapper[data-v-3915f19e]{width:100%;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-flow:row nowrap;flex-flow:row nowrap;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:start;-webkit-box-align:center;-ms-flex-align:center;align-items:center;margin-top:.625rem}.handle-case .handler-case-content-wrapper .handle-case-content .case-number-wrapper .case-number-font[data-v-3915f19e]{font-size:1.125rem}.handle-case .handler-case-content-wrapper .handle-case-content .case-number-wrapper .case-number-title[data-v-3915f19e]{width:7.8125rem;padding-left:.75rem;-webkit-box-flex:3.5;-ms-flex:3.5;flex:3.5}.handle-case .handler-case-content-wrapper .handle-case-content .case-number-wrapper .case-number[data-v-3915f19e]{margin-right:1.5rem;-webkit-box-flex:6.5;-ms-flex:6.5;flex:6.5}.handle-case .handler-case-content-wrapper .handle-case-content .picture-list-wrapper[data-v-3915f19e]{width:100%;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-flow:column nowrap;flex-flow:column nowrap;-webkit-box-align:center;-ms-flex-align:center;align-items:center;padding:0 1.5rem}.handle-case .handler-case-content-wrapper .handle-case-content .case-describe[data-v-3915f19e]{width:calc(100% - 1.5rem);margin:0 1.5rem;font-size:1.25rem;line-height:1.875rem}.handle-case .handler-case-content-wrapper .handle-case-content .case-address-wrapper[data-v-3915f19e]{width:100%;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-flow:row nowrap;flex-flow:row nowrap;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:start;-webkit-box-align:center;-ms-flex-align:center;align-items:center;margin-top:.75rem}.handle-case .handler-case-content-wrapper .handle-case-content .case-address-wrapper .case-address-icon[data-v-3915f19e]{margin-left:1.4375rem;width:1.25rem;height:auto}.handle-case .handler-case-content-wrapper .handle-case-content .case-address-wrapper .case-address[data-v-3915f19e]{margin:0 1.5rem 0 .875rem;font-size:1.125rem;line-height:1.25rem}.handle-case .handler-case-content-wrapper .handle-case-content .case-handle-process[data-v-3915f19e]{width:100%;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-flow:column nowrap;flex-flow:column nowrap;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:start;margin-top:1.5625rem}.handle-case .handler-case-content-wrapper .handle-case-content .case-handle-process .case-handle-process-title[data-v-3915f19e]{font-size:1.125rem;color:#333;margin:1.125rem 0 1.125rem 1.5rem}.handle-case .handler-case-content-wrapper .handle-case-content .case-handle-process .case-handle-process-list-wrapper[data-v-3915f19e]{width:100%;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-flow:column nowrap;flex-flow:column nowrap;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:start;-webkit-box-align:start;-ms-flex-align:start;align-items:start}.handle-case .handler-case-content-wrapper .handle-case-content .case-handle-process .case-handle-process-list-wrapper .case-handle-process-item[data-v-3915f19e]{position:relative;width:calc(100% - 3rem);height:auto;margin:0 1.5rem;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-flow:row nowrap;flex-flow:row nowrap;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:start;-webkit-box-align:start;-ms-flex-align:start;align-items:start}.handle-case .handler-case-content-wrapper .handle-case-content .case-handle-process .case-handle-process-list-wrapper .case-handle-process-item .case-handle-process-item-left[data-v-3915f19e]{height:100%;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-flow:column nowrap;flex-flow:column nowrap;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:start;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.handle-case .handler-case-content-wrapper .handle-case-content .case-handle-process .case-handle-process-list-wrapper .case-handle-process-item .case-handle-process-item-left .item-circle[data-v-3915f19e]{width:1rem;height:1rem;border-radius:50%;border:.0625rem solid #ccc}.handle-case .handler-case-content-wrapper .handle-case-content .case-handle-process .case-handle-process-list-wrapper .case-handle-process-item .case-handle-process-item-left .item-line[data-v-3915f19e]{position:absolute;left:.40625rem;top:1rem;width:.0625rem;height:calc(100% - 1rem);background-color:#f9f9f9}.handle-case .handler-case-content-wrapper .handle-case-content .case-handle-process .case-handle-process-list-wrapper .case-handle-process-item .case-handle-process-item-right[data-v-3915f19e]{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-flow:column nowrap;flex-flow:column nowrap;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:start;-webkit-box-align:left;-ms-flex-align:left;align-items:left;margin-left:1.25rem}.handle-case .handler-case-content-wrapper .handle-case-content .case-handle-process .case-handle-process-list-wrapper .case-handle-process-item .case-handle-process-item-right .item-step[data-v-3915f19e]{font-size:1.125rem;color:#333;padding-bottom:.625rem}.handle-case .handler-case-content-wrapper .handle-case-content .case-handle-process .case-handle-process-list-wrapper .case-handle-process-item .case-handle-process-item-right .item-info[data-v-3915f19e]{padding-bottom:1.875rem;padding-bottom:.4375rem;color:#999}.handle-case .handler-case-content-wrapper .handle-case-content .case-handle-process .case-handle-process-list-wrapper .case-handle-process-item .case-handle-process-item-right .item-result[data-v-3915f19e]{padding-bottom:1.875rem;color:#999}", "", {"version":3,"sources":["/Users/zz/project/zhzf_platform/vue/mobile1.0/src/view/anjianshangbao/normalCaseDetail.vue"],"names":[],"mappings":"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","file":"normalCaseDetail.vue?vue&type=style&index=0&id=3915f19e&lang=less&scoped=true&","sourcesContent":[".handle-case {\n  width: 100vw;\n  height: 100vh;\n}\n\n.handle-case .handler-case-content-wrapper {\n  background-color: white;\n  width: 100vw;\n}\n\n.handle-case .handler-case-content-wrapper .handle-case-content {\n  width: 100%;\n  height: calc(100vh - 8.125rem);\n  overflow-y: auto;\n}\n\n.handle-case .handler-case-content-wrapper .handle-case-content .case-number-wrapper {\n  width: 100%;\n  display: flex;\n  flex-flow: row nowrap;\n  justify-content: start;\n  align-items: center;\n  margin-top: 0.625rem;\n}\n\n.handle-case .handler-case-content-wrapper .handle-case-content .case-number-wrapper .case-number-font {\n  font-size: 1.125rem;\n}\n\n.handle-case .handler-case-content-wrapper .handle-case-content .case-number-wrapper .case-number-title {\n  width: 7.8125rem;\n  padding-left: 0.75rem;\n  flex: 3.5;\n}\n\n.handle-case .handler-case-content-wrapper .handle-case-content .case-number-wrapper .case-number {\n  margin-right: 1.5rem;\n  flex: 6.5;\n}\n\n.handle-case .handler-case-content-wrapper .handle-case-content .picture-list-wrapper {\n  width: 100%;\n  display: flex;\n  flex-flow: column nowrap;\n  align-items: center;\n  padding: 0 1.5rem;\n}\n\n.handle-case .handler-case-content-wrapper .handle-case-content .case-describe {\n  width: calc(100% - 1.5rem);\n  margin: 0 1.5rem;\n  font-size: 1.25rem;\n  line-height: 1.875rem;\n}\n\n.handle-case .handler-case-content-wrapper .handle-case-content .case-address-wrapper {\n  width: 100%;\n  display: flex;\n  flex-flow: row nowrap;\n  justify-content: start;\n  align-items: center;\n  margin-top: 0.75rem;\n}\n\n.handle-case .handler-case-content-wrapper .handle-case-content .case-address-wrapper .case-address-icon {\n  margin-left: 1.4375rem;\n  width: 1.25rem;\n  height: auto;\n}\n\n.handle-case .handler-case-content-wrapper .handle-case-content .case-address-wrapper .case-address {\n  margin: 0 1.5rem 0 0.875rem;\n  font-size: 1.125rem;\n  line-height: 1.25rem;\n}\n\n.handle-case .handler-case-content-wrapper .handle-case-content .case-handle-process {\n  width: 100%;\n  display: flex;\n  flex-flow: column nowrap;\n  justify-content: start;\n  margin-top: 1.5625rem;\n}\n\n.handle-case .handler-case-content-wrapper .handle-case-content .case-handle-process .case-handle-process-title {\n  font-size: 1.125rem;\n  color: #333333;\n  margin: 1.125rem 0 1.125rem 1.5rem;\n}\n\n.handle-case .handler-case-content-wrapper .handle-case-content .case-handle-process .case-handle-process-list-wrapper {\n  width: 100%;\n  display: flex;\n  flex-flow: column nowrap;\n  justify-content: start;\n  align-items: start;\n}\n\n.handle-case .handler-case-content-wrapper .handle-case-content .case-handle-process .case-handle-process-list-wrapper .case-handle-process-item {\n  position: relative;\n  width: calc(100% - 3rem);\n  height: auto;\n  margin: 0 1.5rem 0 1.5rem;\n  display: flex;\n  flex-flow: row nowrap;\n  justify-content: start;\n  align-items: start;\n}\n\n.handle-case .handler-case-content-wrapper .handle-case-content .case-handle-process .case-handle-process-list-wrapper .case-handle-process-item .case-handle-process-item-left {\n  height: 100%;\n  display: flex;\n  flex-flow: column nowrap;\n  justify-content: start;\n  align-items: center;\n}\n\n.handle-case .handler-case-content-wrapper .handle-case-content .case-handle-process .case-handle-process-list-wrapper .case-handle-process-item .case-handle-process-item-left .item-circle {\n  width: 1rem;\n  height: 1rem;\n  border-radius: 50%;\n  border: 0.0625rem solid #cccccc;\n}\n\n.handle-case .handler-case-content-wrapper .handle-case-content .case-handle-process .case-handle-process-list-wrapper .case-handle-process-item .case-handle-process-item-left .item-line {\n  position: absolute;\n  left: 0.40625rem;\n  top: 1rem;\n  width: 0.0625rem;\n  height: calc(100% - 1rem);\n  background-color: #f9f9f9;\n}\n\n.handle-case .handler-case-content-wrapper .handle-case-content .case-handle-process .case-handle-process-list-wrapper .case-handle-process-item .case-handle-process-item-right {\n  display: flex;\n  flex-flow: column nowrap;\n  justify-content: start;\n  align-items: left;\n  margin-left: 1.25rem;\n}\n\n.handle-case .handler-case-content-wrapper .handle-case-content .case-handle-process .case-handle-process-list-wrapper .case-handle-process-item .case-handle-process-item-right .item-step {\n  font-size: 1.125rem;\n  color: #333333;\n  padding-bottom: 0.625rem;\n}\n\n.handle-case .handler-case-content-wrapper .handle-case-content .case-handle-process .case-handle-process-list-wrapper .case-handle-process-item .case-handle-process-item-right .item-info {\n  padding-bottom: 1.875rem;\n  padding-bottom: 0.4375rem;\n  color: #999;\n}\n\n.handle-case .handler-case-content-wrapper .handle-case-content .case-handle-process .case-handle-process-list-wrapper .case-handle-process-item .case-handle-process-item-right .item-result {\n  padding-bottom: 1.875rem;\n  color: #999;\n}"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ 503:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__normalCaseDetail_vue_vue_type_template_id_3915f19e_scoped_true___ = __webpack_require__(1499);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__normalCaseDetail_vue_vue_type_script_lang_js___ = __webpack_require__(1287);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_1__normalCaseDetail_vue_vue_type_script_lang_js___) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_1__normalCaseDetail_vue_vue_type_script_lang_js___[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__normalCaseDetail_vue_vue_type_style_index_0_id_3915f19e_lang_less_scoped_true___ = __webpack_require__(1500);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__node_modules_vue_loader_15_8_3_vue_loader_lib_runtime_componentNormalizer_js__ = __webpack_require__(0);






/* normalize component */

var component = Object(__WEBPACK_IMPORTED_MODULE_3__node_modules_vue_loader_15_8_3_vue_loader_lib_runtime_componentNormalizer_js__["a" /* default */])(
  __WEBPACK_IMPORTED_MODULE_1__normalCaseDetail_vue_vue_type_script_lang_js___["default"],
  __WEBPACK_IMPORTED_MODULE_0__normalCaseDetail_vue_vue_type_template_id_3915f19e_scoped_true___["a" /* render */],
  __WEBPACK_IMPORTED_MODULE_0__normalCaseDetail_vue_vue_type_template_id_3915f19e_scoped_true___["b" /* staticRenderFns */],
  false,
  null,
  "3915f19e",
  null
  
)

/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ })

});