webpackJsonp([22],{

/***/ 1250:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "image/icon_dz.e8ca6c.png";

/***/ }),

/***/ 1401:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__node_modules_babel_loader_7_1_5_babel_loader_lib_index_js_ref_2_0_node_modules_vue_loader_15_8_3_vue_loader_lib_index_js_vue_loader_options_detail_vue_vue_type_script_lang_js___ = __webpack_require__(1402);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__node_modules_babel_loader_7_1_5_babel_loader_lib_index_js_ref_2_0_node_modules_vue_loader_15_8_3_vue_loader_lib_index_js_vue_loader_options_detail_vue_vue_type_script_lang_js____default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__node_modules_babel_loader_7_1_5_babel_loader_lib_index_js_ref_2_0_node_modules_vue_loader_15_8_3_vue_loader_lib_index_js_vue_loader_options_detail_vue_vue_type_script_lang_js___);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__node_modules_babel_loader_7_1_5_babel_loader_lib_index_js_ref_2_0_node_modules_vue_loader_15_8_3_vue_loader_lib_index_js_vue_loader_options_detail_vue_vue_type_script_lang_js___) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__node_modules_babel_loader_7_1_5_babel_loader_lib_index_js_ref_2_0_node_modules_vue_loader_15_8_3_vue_loader_lib_index_js_vue_loader_options_detail_vue_vue_type_script_lang_js___[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (__WEBPACK_IMPORTED_MODULE_0__node_modules_babel_loader_7_1_5_babel_loader_lib_index_js_ref_2_0_node_modules_vue_loader_15_8_3_vue_loader_lib_index_js_vue_loader_options_detail_vue_vue_type_script_lang_js____default.a); 

/***/ }),

/***/ 1402:
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
    data: function data() {
        return {
            rootId: '',
            title: '',
            item: {},
            longitude: '',
            latitude: '',
            address: '',
            moreAddress: '',
            describe: '',
            list: [{
                name: '',
                value: '',
                type: 'input',
                placeholder: '地址补充说明（非必填）',
                maxlength: 15
            }],
            photoList: [],
            photoList2: [],
            disposeResult: "",
            autoHandle: true,
            isdispose: true,
            newLocation: {}
        };
    },

    watch: {
        autoHandle: function autoHandle(newv) {
            if (newv == true) {
                this.isdispose = true;
            } else {
                this.isdispose = false;
            }
        }
    },
    created: function created() {},
    mounted: function mounted() {
        // this.$nextTick(() => {
        //
        // });
        // ;
        this.rootId = this.$route.query.id;
        this.title = this.$route.query.title;
        this.item = this.$route.query.item;
        this._getLocation();
        // 取出暂存数据
        if (this.$store.state.patrolReportStorage[this.item.id]) {
            console.log('有暂存数据：');
            console.log(this.$store.state.patrolReportStorage[this.item.id]);
            console.log(this.$store.state.patrolReportStorage);
            this.$set(this.list[0], 'model', this.$store.state.patrolReportStorage[this.item.id].moreAddress);
            // this.list[0].model = this.$store.state.patrolReportStorage[this.item.id].moreAddress;
            this.newLocation = this.$store.state.patrolReportStorage[this.item.id].newLocation;
            this.describe = this.$store.state.patrolReportStorage[this.item.id].describe;
            this.photoList = this.$store.state.patrolReportStorage[this.item.id].photoList;
            this.autoHandle = this.$store.state.patrolReportStorage[this.item.id].autoHandle;
            this.photoList2 = this.$store.state.patrolReportStorage[this.item.id].photoList2;
            this.disposeResult = this.$store.state.patrolReportStorage[this.item.id].disposeResult;
        }

        if (this.newLocation !== undefined && this.newLocation !== null) {
            console.log(this.newLocation);
            this.address = this.newLocation.address;
        }

        this._getCurrentLocation();
    },

    computed: {
        buttonName: function buttonName() {
            return this.autoHandle ? '提交至我的待办' : '上报';
        }
    },
    methods: {
        _getLocation: function _getLocation() {
            var _this = this;

            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(this._showPosition, function (error) {
                    console.log('进入定位错误回调');
                    console.log(error.message);
                    switch (error.code) {
                        case error.PERMISSION_DENIED:
                            console.log("用户拒绝对获取地理位置的请求。");
                            break;
                        case error.POSITION_UNAVAILABLE:
                            console.log("位置信息是不可用的。");
                            break;
                        case error.TIMEOUT:
                            console.log("请求用户地理位置超时。");
                            break;
                        case error.UNKNOWN_ERROR:
                            console.log("未知错误。");
                            break;
                    }
                    setTimeout(_this._getLocation, 500);
                }, {
                    enableHighAccuracy: false, // 是否获取高精度结果
                    timeout: 10000, //超时,毫秒
                    maximumAge: 0 //可以接受多少毫秒的缓存位置
                    // 详细说明 https://developer.mozilla.org/en-US/docs/Web/API/PositionOptions
                });
            } else {
                alert("是否开启了GPS功能");
            }
        },
        _showPosition: function _showPosition(e) {
            if (isNull(e.coords.longitude)) {
                toast("坐标为空,请重新定位");
            } else {
                console.log('定位成功，进入_showPosition');
                window.longitude = e.coords.longitude;
                window.latitude = e.coords.latitude;
                window.choiceLongitude = e.coords.longitude;
                window.choiceLatitude = e.coords.latitude;
            }
        },
        _getCurrentLocation: function _getCurrentLocation() {
            var _this2 = this;

            var geolocation = new BMap.Geolocation();
            // 开启SDK辅助定位
            geolocation.enableSDKLocation();
            geolocation.getCurrentPosition(function (r) {
                console.log((0, _stringify2.default)(r));
                if (geolocation.getStatus() == BMAP_STATUS_SUCCESS) {
                    console.log('地址：' + r.address.province + r.address.city + r.address.district + r.address.street + r.address.street_number);

                    _this2.address = r.address.province + r.address.city + r.address.district + r.address.street + r.address.street_number;
                    console.log(_this2.address);
                } else {
                    console.log('定位failed：' + geolocation.getStatus());
                }
            });
        },
        back: function back() {
            var _this3 = this;

            console.log('点击返回');
            app.$createPotDialog({
                $props: {
                    type: "confirm",
                    confirmBtn: '暂存',
                    cancelBtn: '否',
                    content: "您的问题还未上报，是否进行暂存？",
                    maskClosable: true
                },
                $events: {
                    confirm: function confirm() {
                        if (_this3.$store.state.patrolReportStorage[_this3.item.id] === undefined) {
                            _this3.$store.state.patrolReportStorage[_this3.item.id] = {};
                        }
                        _this3.$store.state.patrolReportStorage[_this3.item.id].hasStorage = true;
                        _this3.$store.state.patrolReportStorage[_this3.item.id].moreAddress = _this3.list[0].model;
                        _this3.$store.state.patrolReportStorage[_this3.item.id].newLocation = _this3.newLocation;
                        _this3.$store.state.patrolReportStorage[_this3.item.id].describe = _this3.describe;
                        _this3.$store.state.patrolReportStorage[_this3.item.id].photoList = _this3.photoList;
                        _this3.$store.state.patrolReportStorage[_this3.item.id].autoHandle = _this3.autoHandle;

                        _this3.$store.state.patrolReportStorage[_this3.item.id].photoList2 = _this3.photoList2;
                        _this3.$store.state.patrolReportStorage[_this3.item.id].disposeResult = _this3.disposeResult;
                        console.log(_this3.$store.state.patrolReportStorage[_this3.item.id]);
                        _this3.$router.back();
                    },
                    cancel: function cancel() {
                        if (_this3.$store.state.patrolReportStorage[_this3.item.id]) {
                            _this3.$store.state.patrolReportStorage[_this3.item.id].hasStorage = false;
                        }
                        _this3.$router.back();
                    }
                }
            }).show();
        },
        chooseLocation: function chooseLocation() {
            var _this4 = this;

            this.$createChooseLocation({
                $props: {
                    value: ''
                },
                $events: {
                    success: function success(val) {
                        console.log('success');
                        _this4.newLocation = val;
                        console.log(_this4.newLocation);
                        _this4.address = _this4.newLocation.address;
                    }
                }
            }).show();
        },
        clickBtn: function clickBtn() {
            console.log(this.autoHandle);
            console.log(this.list[0].model);

            window.picture_array = this.photoList;
            window.picture_array2 = this.photoList2;
            if (!this.photoList) {
                window.picture_array = "";
            }

            if (!isNull(window.picture_array) || window.picture_array.length > 0) {
                window.picture_upImg = "";
                if (this.isdispose == true) {
                    if (window.picture_array2.length == 0) {
                        toast("自行处置图片不能为空");
                        return;
                    }
                }
                this.publicOpinion_upPicture(window.picture_array[0], 1);
            } else {
                this.submit();
            }

            if (this.autoHandle) {
                // 提交至我的待办

            } else {
                    // 待办
                }
        },
        submit: function submit() {

            var that = this;
            console.log(that.isdispose);
            if (isNull(window.longitude)) {
                toast("定位不成功");
            } else if (isNull(this.describe)) {
                toast("请输入问题描述");
            } else if (isNull(window.picture_array)) {
                toast("上报图片不能为空");
            } else if (that.isdispose == true) {
                if (this.photoList2.length == 0) {
                    toast("自行处置图片不能为空");
                } else {
                    var lon = window.longitude;
                    var lat = window.latitude;

                    var dsobj = { para: 'longitude=' + lon + '&latitude=' + lat + '&loginId=&origin=4&eventComponent=' + this.rootId + '&bigClass=' + this.item.id + '&location=' + this.address + '&problem=' + this.describe + '&reportPics=' + window.picture_upImg + '&questionStatus=' + '1' + '&score=' + this.item.score + '&dispose=' + (this.autoHandle ? '1' : '0') + '&backPath=' + window.picture_upImg2 + '&disposeResult=' + this.disposeResult };
                    var url = '/wgh/app/' + 'MobileCaseReport.action';
                    console.log(dsobj);
                    that.$http.post(url, dsobj).then(function (data) {
                        window.leadercommitFlag = 0;

                        if (data.code == 0) {
                            hideLoading();
                            toast(data.message);

                            ;
                            window.originType = "3";
                            that.$router.push({ path: '/welcome', query: {} });
                        } else {
                            hideLoading();
                            toast(data.message);
                        }
                    });
                }
            } else {

                var lon = window.longitude;
                var lat = window.latitude;
                var para = {
                    para:  true ? '1' : '0' + '&backPath=' + window.picture_upImg2 + '&disposeResult=' + this.disposeResult
                };

                var dsobj = { para: 'longitude=' + lon + '&latitude=' + lat + '&loginId=&origin=4&eventComponent=' + this.rootId + '&bigClass=' + this.item.id + '&location=' + this.address + '&problem=' + this.describe + '&reportPics=' + window.picture_upImg + '&questionStatus=' + '1' + '&score=' + this.item.score + '&dispose=' + (this.autoHandle ? '1' : '0') + '&backPath=' + window.picture_upImg2 + '&disposeResult=' + this.disposeResult };
                var _url = '/wgh/app/' + 'MobileCaseReport.action';
                //  let url='https://192.168.1.198:6080/wgh/app/' + 'MobileCaseReport.action';
                console.log(dsobj);
                that.$http.post(_url, dsobj).then(function (data) {
                    window.leadercommitFlag = 0;

                    if (data.code == 0) {
                        hideLoading();
                        toast(data.message);

                        ;
                        window.originType = "3";
                        that.$router.push({ path: '/welcome', query: {} });
                    } else {
                        hideLoading();
                        toast(data.message);
                    }
                });
            }
        },
        publicOpinion_upPicture: function publicOpinion_upPicture(img, type) {
            var that = this;
            console.log("图片张数：" + window.picture_array.length + "；当前第" + type + "张");
            // var obj = "";
            // obj += toJson("base64Str", img);
            // doPost("app_publicOpinion_upPic.action", obj, function (data) {
            //     if (data.code == 0) {
            //         if (type < parseInt(window.picture_array.length)) {
            //             console.log("当前上传第:" + type + "张,下次上传第" + type + "张");
            //             var typename = parseInt(type) + 1;
            //             that.publicOpinion_upPicture(window.picture_array[type], typename);
            //         } else {
            //             console.log("图片上传结束");
            //         }
            //         if (isNull(window.picture_upImg)) {
            //             window.picture_upImg = data.datas.path;
            //         } else {
            //             window.picture_upImg = window.picture_upImg + ";" + data.datas.path;
            //         }
            //         console.log("当前type" + type + "；总共张数：" + window.picture_array.length);
            //         if (parseInt(type) == window.picture_array.length) {
            //             if(that.isdispose==true){
            //                 if (isNull(window.picture_array2)) {
            //                     toast("处理图片不能为空");
            //                 } else {
            //                     that.xxcj_upLoadPic2(window.picture_array2[0], 1);
            //                 }
            //             }else{
            //                 that.submit();
            //             }
            //             that.submit();
            //             console.log("type和图片长度相等" + type);
            //         } else {
            //             console.log("type和图片长度不相等");
            //         }
            //     } else {
            //         toast(data.message);
            //     }
            // }, "", "");
            var url = '/wgh/app/app_publicOpinion_upPic.action';
            var dsobj = { para: 'base64Str=' + img };
            _axios2.default.post(url, dsobj).then(function (data) {
                if (data.code == 0) {
                    if (type < parseInt(window.picture_array.length)) {
                        console.log("当前上传第:" + type + "张,下次上传第" + type + "张");
                        var typename = parseInt(type) + 1;
                        that.publicOpinion_upPicture(window.picture_array[type], typename);
                    } else {
                        console.log("图片上传结束");
                    }
                    if (isNull(window.picture_upImg)) {
                        window.picture_upImg = data.datas.path;
                    } else {
                        window.picture_upImg = window.picture_upImg + ";" + data.datas.path;
                    }
                    console.log("当前type" + type + "；总共张数：" + window.picture_array.length);
                    if (parseInt(type) == window.picture_array.length) {
                        if (that.isdispose == true) {
                            if (isNull(window.picture_array2)) {
                                toast("自行处置图片不能为空");
                            } else {
                                that.xxcj_upLoadPic2(window.picture_array2[0], 1);
                            }
                        } else {
                            that.submit();
                        }
                        //that.submit();
                        console.log("type和图片长度相等" + type);
                    } else {
                        console.log("type和图片长度不相等");
                    }
                } else {
                    toast(data.message);
                }
            });
        },
        xxcj_upLoadPic2: function (_xxcj_upLoadPic) {
            function xxcj_upLoadPic2(_x, _x2) {
                return _xxcj_upLoadPic.apply(this, arguments);
            }

            xxcj_upLoadPic2.toString = function () {
                return _xxcj_upLoadPic.toString();
            };

            return xxcj_upLoadPic2;
        }(function (img, type) {
            var that = this;
            // var obj = "";
            // obj += toJson("base64Str", img);
            // doPost("appWorkOrder_upLoadPic.action", obj, function (data) {
            //     if (data.code == 0) {
            //         console.log("1111111111111111当前上传第:" + type + "张,下次上传第" + type + "张");
            //         if (type < parseInt(window.picture_array2.length)) {
            //             console.log("当前上传第:" + type + "张,下次上传第" + type + "张");
            //             var typename = parseInt(type) + 1;
            //             xxcj_upLoadPic2(window.picture_array2[type], typename);
            //         } else {
            //             console.log("图片上传结束");
            //         }
            //         if (isNull(window.picture_upImg2)) {
            //             window.picture_upImg2 = data.data;
            //         } else {
            //             window.picture_upImg2 = window.picture_upImg2 + ";" + data.data;
            //         }
            //         // alert("图片数据：" + window.picture_upImg2);
            //         //toast(data.message);
            //
            //         if (parseInt(type) == window.picture_array2.length) {
            //             that.submit();
            //             if (isNull(source)) {
            //                 //问题上报
            //
            //             } else if ("caseTaskEdit" == source) {
            //                 //工单处理
            //                 //  appWorkOrder_workOrderProcess($("#case_task_edit_problem").val());
            //             }
            //         }
            //     } else {
            //         toast(data.message);
            //     }
            // }, "", "");
            var url = '/wgh/app/appWorkOrder_upLoadPic.action';
            var dsobj = { para: 'base64Str=' + img };
            _axios2.default.post(url, dsobj).then(function (data) {
                if (data.code == 0) {
                    console.log("1111111111111111当前上传第:" + type + "张,下次上传第" + type + "张");
                    if (type < parseInt(window.picture_array2.length)) {
                        console.log("当前上传第:" + type + "张,下次上传第" + type + "张");
                        var typename = parseInt(type) + 1;
                        xxcj_upLoadPic2(window.picture_array2[type], typename);
                    } else {
                        console.log("图片上传结束");
                    }
                    if (isNull(window.picture_upImg2)) {
                        window.picture_upImg2 = data.data;
                    } else {
                        window.picture_upImg2 = window.picture_upImg2 + ";" + data.data;
                    }
                    // alert("图片数据：" + window.picture_upImg2);
                    //toast(data.message);

                    if (parseInt(type) == window.picture_array2.length) {
                        that.submit();
                        if (isNull(source)) {
                            //问题上报

                        } else if ("caseTaskEdit" == source) {
                            //工单处理
                            //  appWorkOrder_workOrderProcess($("#case_task_edit_problem").val());
                        }
                    }
                } else {
                    toast(data.message);
                }
            });
        })
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

/***/ }),

/***/ 1403:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1616);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(1062).default
var update = add("5d54f027", content, true, {});

/***/ }),

/***/ 1614:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/_vue-loader@15.8.3@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/_vue-loader@15.8.3@vue-loader/lib??vue-loader-options!./src/view/patrolReport/detail.vue?vue&type=template&id=ee97d744&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"inspect-detail"},[_c('tk-header',_vm._g({on:{"left-click":_vm.back}},_vm.$listeners),[_vm._v("\n        "+_vm._s(_vm.title)+"\n    ")]),_vm._v(" "),_c('tk-scroll',{staticClass:"detail-content"},[_c('div',{staticClass:"title"},[_vm._v(_vm._s(_vm.item.dmmc))]),_vm._v(" "),_c('div',{staticClass:"locate",on:{"click":_vm.chooseLocation}},[_c('span',[_c('img',{staticClass:"location-img",attrs:{"src":__webpack_require__(1250),"alt":""}})]),_vm._v(" "),_c('span',[_vm._v(_vm._s(_vm.address))])]),_vm._v(" "),_c('tk-textarea',{attrs:{"placeholder":"请输入问题描述","maxlength":"1000"},model:{value:(_vm.describe),callback:function ($$v) {_vm.describe=$$v},expression:"describe"}}),_vm._v(" "),_c('div',{staticClass:"sub-title"},[_vm._v("上传问题图片")]),_vm._v(" "),_c('tk-upload-photo',{attrs:{"maxlength":"10"},model:{value:(_vm.photoList),callback:function ($$v) {_vm.photoList=$$v},expression:"photoList"}}),_vm._v(" "),_c('tk-switch',{attrs:{"name":"是否自行处理","value":_vm.autoHandle},model:{value:(_vm.autoHandle),callback:function ($$v) {_vm.autoHandle=$$v},expression:"autoHandle"}}),_vm._v(" "),(_vm.isdispose)?_c('div',[_c('div',{staticClass:"imgdispose"},[_c('div',{staticClass:"sub-title"},[_vm._v("上传处理图片")]),_vm._v(" "),_c('tk-upload-photo',{attrs:{"maxlength":"10"},model:{value:(_vm.photoList2),callback:function ($$v) {_vm.photoList2=$$v},expression:"photoList2"}})],1),_vm._v(" "),_c('tk-textarea',{attrs:{"placeholder":"请输入处理描述","maxlength":"1000"},model:{value:(_vm.disposeResult),callback:function ($$v) {_vm.disposeResult=$$v},expression:"disposeResult"}})],1):_vm._e(),_vm._v(" "),_c('tk-button',{staticClass:"detail-btn",on:{"click":_vm.clickBtn}},[_vm._v(_vm._s(_vm.buttonName))])],1)],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/view/patrolReport/detail.vue?vue&type=template&id=ee97d744&
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });


/***/ }),

/***/ 1615:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__node_modules_extract_text_webpack_plugin_3_0_2_extract_text_webpack_plugin_dist_loader_js_ref_8_0_node_modules_vue_style_loader_4_1_2_vue_style_loader_index_js_node_modules_css_loader_0_28_11_css_loader_index_js_ref_8_2_node_modules_vue_loader_15_8_3_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_8_3_node_modules_px2rem_loader_0_1_9_px2rem_loader_index_js_ref_8_4_node_modules_less_loader_4_1_0_less_loader_dist_cjs_js_ref_8_5_node_modules_vue_loader_15_8_3_vue_loader_lib_index_js_vue_loader_options_detail_vue_vue_type_style_index_0_lang_less___ = __webpack_require__(1403);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__node_modules_extract_text_webpack_plugin_3_0_2_extract_text_webpack_plugin_dist_loader_js_ref_8_0_node_modules_vue_style_loader_4_1_2_vue_style_loader_index_js_node_modules_css_loader_0_28_11_css_loader_index_js_ref_8_2_node_modules_vue_loader_15_8_3_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_8_3_node_modules_px2rem_loader_0_1_9_px2rem_loader_index_js_ref_8_4_node_modules_less_loader_4_1_0_less_loader_dist_cjs_js_ref_8_5_node_modules_vue_loader_15_8_3_vue_loader_lib_index_js_vue_loader_options_detail_vue_vue_type_style_index_0_lang_less____default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__node_modules_extract_text_webpack_plugin_3_0_2_extract_text_webpack_plugin_dist_loader_js_ref_8_0_node_modules_vue_style_loader_4_1_2_vue_style_loader_index_js_node_modules_css_loader_0_28_11_css_loader_index_js_ref_8_2_node_modules_vue_loader_15_8_3_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_8_3_node_modules_px2rem_loader_0_1_9_px2rem_loader_index_js_ref_8_4_node_modules_less_loader_4_1_0_less_loader_dist_cjs_js_ref_8_5_node_modules_vue_loader_15_8_3_vue_loader_lib_index_js_vue_loader_options_detail_vue_vue_type_style_index_0_lang_less___);
/* unused harmony reexport namespace */
 /* unused harmony default export */ var _unused_webpack_default_export = (__WEBPACK_IMPORTED_MODULE_0__node_modules_extract_text_webpack_plugin_3_0_2_extract_text_webpack_plugin_dist_loader_js_ref_8_0_node_modules_vue_style_loader_4_1_2_vue_style_loader_index_js_node_modules_css_loader_0_28_11_css_loader_index_js_ref_8_2_node_modules_vue_loader_15_8_3_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_8_3_node_modules_px2rem_loader_0_1_9_px2rem_loader_index_js_ref_8_4_node_modules_less_loader_4_1_0_less_loader_dist_cjs_js_ref_8_5_node_modules_vue_loader_15_8_3_vue_loader_lib_index_js_vue_loader_options_detail_vue_vue_type_style_index_0_lang_less____default.a); 

/***/ }),

/***/ 1616:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1061)(true);
// imports


// module
exports.push([module.i, ".inspect-detail{width:100vw;height:100vh;background-color:#fff}.inspect-detail .list input{float:left;text-align:left;width:calc(100% - 3.625rem)}.inspect-detail .detail-content{overflow-y:auto;background-color:#fff}.inspect-detail .detail-content .title{width:100%;height:4rem;line-height:4rem;padding-left:1.5rem;font-size:1.5rem}.inspect-detail .detail-content .locate{width:100%;height:3.375rem;line-height:3.375rem;border-top:.0625rem solid #ccc;border-bottom:.0625rem solid #ccc}.inspect-detail .detail-content .locate span{display:inline-block}.inspect-detail .detail-content .locate .location-img{height:1.25rem;width:auto;margin-left:1.5rem}.inspect-detail .detail-content .sub-title{width:100%;height:3rem;line-height:3rem;padding-left:1.5rem;font-size:1.125rem;border-top:.0625rem solid #ccc}.inspect-detail .detail-content .detail-btn{margin-top:5rem}.inspect-detail .detail-content .imgdispose{border-bottom:.0625rem solid #ddd}", "", {"version":3,"sources":["/Users/zz/project/zhzf_platform/vue/mobile1.0/src/view/patrolReport/detail.vue"],"names":[],"mappings":"AAAA,gBACE,YAAY,AACZ,aAAa,AACb,qBAAuB,CACzB,AAEA,4BACE,WAAW,AACX,gBAAgB,AAChB,2BAA4B,CAC9B,AAEA,gCACE,gBAAgB,AAChB,qBAAuB,CACzB,AAEA,uCACE,WAAW,AACX,YAAY,AACZ,iBAAiB,AACjB,oBAAoB,AACpB,gBAAiB,CACnB,AAEA,wCACE,WAAW,AACX,gBAAgB,AAChB,qBAAqB,AACrB,+BAAmC,AACnC,iCAAsC,CACxC,AAEA,6CACE,oBAAqB,CACvB,AAEA,sDACE,eAAe,AACf,WAAW,AACX,kBAAmB,CACrB,AAEA,2CACE,WAAW,AACX,YAAY,AACZ,iBAAiB,AACjB,oBAAoB,AACpB,mBAAmB,AACnB,8BAAmC,CACrC,AAEA,4CACE,eAAgB,CAClB,AAEA,4CACE,iCAAmC,CACrC","file":"detail.vue?vue&type=style&index=0&lang=less&","sourcesContent":[".inspect-detail {\n  width: 100vw;\n  height: 100vh;\n  background-color: white;\n}\n\n.inspect-detail .list input {\n  float: left;\n  text-align: left;\n  width: calc(100% - 3.625rem);\n}\n\n.inspect-detail .detail-content {\n  overflow-y: auto;\n  background-color: white;\n}\n\n.inspect-detail .detail-content .title {\n  width: 100%;\n  height: 4rem;\n  line-height: 4rem;\n  padding-left: 1.5rem;\n  font-size: 1.5rem;\n}\n\n.inspect-detail .detail-content .locate {\n  width: 100%;\n  height: 3.375rem;\n  line-height: 3.375rem;\n  border-top: 0.0625rem solid #cccccc;\n  border-bottom: 0.0625rem solid #cccccc;\n}\n\n.inspect-detail .detail-content .locate span {\n  display: inline-block;\n}\n\n.inspect-detail .detail-content .locate .location-img {\n  height: 1.25rem;\n  width: auto;\n  margin-left: 1.5rem;\n}\n\n.inspect-detail .detail-content .sub-title {\n  width: 100%;\n  height: 3rem;\n  line-height: 3rem;\n  padding-left: 1.5rem;\n  font-size: 1.125rem;\n  border-top: 0.0625rem solid #cccccc;\n}\n\n.inspect-detail .detail-content .detail-btn {\n  margin-top: 5rem;\n}\n\n.inspect-detail .detail-content .imgdispose {\n  border-bottom: 0.0625rem solid #ddd;\n}"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ 538:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__detail_vue_vue_type_template_id_ee97d744___ = __webpack_require__(1614);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__detail_vue_vue_type_script_lang_js___ = __webpack_require__(1401);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_1__detail_vue_vue_type_script_lang_js___) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_1__detail_vue_vue_type_script_lang_js___[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__detail_vue_vue_type_style_index_0_lang_less___ = __webpack_require__(1615);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__node_modules_vue_loader_15_8_3_vue_loader_lib_runtime_componentNormalizer_js__ = __webpack_require__(0);






/* normalize component */

var component = Object(__WEBPACK_IMPORTED_MODULE_3__node_modules_vue_loader_15_8_3_vue_loader_lib_runtime_componentNormalizer_js__["a" /* default */])(
  __WEBPACK_IMPORTED_MODULE_1__detail_vue_vue_type_script_lang_js___["default"],
  __WEBPACK_IMPORTED_MODULE_0__detail_vue_vue_type_template_id_ee97d744___["a" /* render */],
  __WEBPACK_IMPORTED_MODULE_0__detail_vue_vue_type_template_id_ee97d744___["b" /* staticRenderFns */],
  false,
  null,
  null,
  null
  
)

/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ })

});