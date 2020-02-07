webpackJsonp([21],{

/***/ 1250:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "image/icon_dz.e8ca6c.png";

/***/ }),

/***/ 1416:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__node_modules_babel_loader_7_1_5_babel_loader_lib_index_js_ref_2_0_node_modules_vue_loader_15_8_3_vue_loader_lib_index_js_vue_loader_options_photographEdit_vue_vue_type_script_lang_js___ = __webpack_require__(1417);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__node_modules_babel_loader_7_1_5_babel_loader_lib_index_js_ref_2_0_node_modules_vue_loader_15_8_3_vue_loader_lib_index_js_vue_loader_options_photographEdit_vue_vue_type_script_lang_js____default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__node_modules_babel_loader_7_1_5_babel_loader_lib_index_js_ref_2_0_node_modules_vue_loader_15_8_3_vue_loader_lib_index_js_vue_loader_options_photographEdit_vue_vue_type_script_lang_js___);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__node_modules_babel_loader_7_1_5_babel_loader_lib_index_js_ref_2_0_node_modules_vue_loader_15_8_3_vue_loader_lib_index_js_vue_loader_options_photographEdit_vue_vue_type_script_lang_js___) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__node_modules_babel_loader_7_1_5_babel_loader_lib_index_js_ref_2_0_node_modules_vue_loader_15_8_3_vue_loader_lib_index_js_vue_loader_options_photographEdit_vue_vue_type_script_lang_js___[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (__WEBPACK_IMPORTED_MODULE_0__node_modules_babel_loader_7_1_5_babel_loader_lib_index_js_ref_2_0_node_modules_vue_loader_15_8_3_vue_loader_lib_index_js_vue_loader_options_photographEdit_vue_vue_type_script_lang_js____default.a); 

/***/ }),

/***/ 1417:
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
    name: "photographEdit",
    data: function data() {
        return {
            imageList: [],
            detailList: [],
            address: '',
            textAreaVal: ""

        };
    },
    created: function created() {},
    mounted: function mounted() {
        this._getCurrentLocation();
        this._getLocation();
        window.picture_upImg = "";
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
                } else {
                    console.log('定位failed：' + geolocation.getStatus());
                }
            });
        },
        handle: function handle() {
            var that = this;

            console.log(this.textAreaVal);
            window.picture_array = this.imageList;
            if (!this.imageList) {
                window.picture_array = "";
            }
            if (that.address == "") {
                toast("位置不能为空");
            } else if (that.textAreaVal == "") {
                toast("问题描述不能为空");
            } else {
                this.$createPotDialog({
                    $props: {
                        type: 'confirm',
                        content: '确认保存本次提交吗？'
                    },
                    $events: {
                        confirm: function confirm(A) {
                            window.leadercommitFlag = 1;
                            if (!isNull(window.picture_array) || window.picture_array.length > 0) {
                                window.picture_upImg = "";

                                that.publicOpinion_upPicture(window.picture_array[0], 1);
                            } else {
                                that.appWorkOrder_leaderOrderReport();
                            }
                        }
                    }
                }).show();
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
            //             that.appWorkOrder_leaderOrderReport();
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
                    //alert("当前type" + type + "；总共张数：" + data.datas.path);

                    if (parseInt(type) == window.picture_array.length) {
                        that.appWorkOrder_leaderOrderReport();
                        console.log("type和图片长度相等" + type);
                    } else {
                        console.log("type和图片长度不相等");
                    }
                } else {
                    toast(data.message);
                }
            });
        },
        appWorkOrder_leaderOrderReport: function appWorkOrder_leaderOrderReport() {
            var that = this;
            // var obj = "";
            // obj += toJson("origin", "3") + "&";//工单来源 2：直派，3：随手拍
            // obj += toJson("loginId", window.localStorage.loginId) + "&";//工单来源 4:巡查人员上报
            // obj += toJson("problem", this.textAreaVal) + "&";//问题描述
            // obj += toJson("reportPics", window.picture_upImg) + "&";//图片
            // obj += toJson("longitude", window.choiceLongitude) + "&";//经度
            // obj += toJson("latitude", window.choiceLatitude) + "&";//纬度
            // obj += toJson("location",this.address);//位置描述
            // doPost("dsb.action", obj, function (data) {
            //     window.leadercommitFlag=0;
            //     alert("ssp"+data.message)
            //
            //     if (data.code == 0) {
            //         hideLoading();
            //         toast(data.message);
            //
            //         ;
            //         window.originType="3";
            //         that.$router.push({path:'/welcome',query:{}});
            //     } else {
            //         hideLoading();
            //         toast(data.message);
            //     }
            // }, "", "");

            var url = '/wgh/app/dsb.action';
            var dsobj = { para: 'origin=3&loginId=&problem=' + this.textAreaVal + '&reportPics=' + window.picture_upImg + '&longitude=' + this.choiceLongitude + '&latitude=' + this.choiceLatitude + '&location=' + this.address };
            _axios2.default.post(url, dsobj).then(function (data) {
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
        },
        showAlreadyList: function showAlreadyList() {
            this.$router.push({ path: '/photoAlreadyCase', query: {} });
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

/***/ }),

/***/ 1418:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1631);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(1062).default
var update = add("0d90030b", content, true, {});

/***/ }),

/***/ 1629:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/_vue-loader@15.8.3@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/_vue-loader@15.8.3@vue-loader/lib??vue-loader-options!./src/view/photograph/photographEdit.vue?vue&type=template&id=05c5be85&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"sspEdit"},[_c('tk-header',[_c('div',[_vm._v("随手拍")]),_vm._v(" "),_c('div',{attrs:{"slot":"right"},on:{"click":_vm.showAlreadyList},slot:"right"},[_vm._v("已上报")])]),_vm._v(" "),_c('tk-container',[_c('div',{staticClass:"photograph-title"},[_vm._v("上传图片")]),_vm._v(" "),_c('tk-upload-photo',{model:{value:(_vm.imageList),callback:function ($$v) {_vm.imageList=$$v},expression:"imageList"}}),_vm._v(" "),_c('div',{staticClass:"locate"},[_c('span',[_c('img',{staticClass:"location-img",attrs:{"src":__webpack_require__(1250),"alt":""}})]),_vm._v(" "),_c('span',[_vm._v(_vm._s(_vm.address))])]),_vm._v(" "),_c('tk-textarea',{attrs:{"placeholder":"请输入问题描述","maxlength":"1000"},model:{value:(_vm.textAreaVal),callback:function ($$v) {_vm.textAreaVal=$$v},expression:"textAreaVal"}}),_vm._v(" "),_c('tk-button',{staticClass:"cl_btn",on:{"click":_vm.handle}},[_vm._v("处理")])],1)],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/view/photograph/photographEdit.vue?vue&type=template&id=05c5be85&
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });


/***/ }),

/***/ 1630:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__node_modules_extract_text_webpack_plugin_3_0_2_extract_text_webpack_plugin_dist_loader_js_ref_8_0_node_modules_vue_style_loader_4_1_2_vue_style_loader_index_js_node_modules_css_loader_0_28_11_css_loader_index_js_ref_8_2_node_modules_vue_loader_15_8_3_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_8_3_node_modules_px2rem_loader_0_1_9_px2rem_loader_index_js_ref_8_4_node_modules_less_loader_4_1_0_less_loader_dist_cjs_js_ref_8_5_node_modules_vue_loader_15_8_3_vue_loader_lib_index_js_vue_loader_options_photographEdit_vue_vue_type_style_index_0_lang_less___ = __webpack_require__(1418);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__node_modules_extract_text_webpack_plugin_3_0_2_extract_text_webpack_plugin_dist_loader_js_ref_8_0_node_modules_vue_style_loader_4_1_2_vue_style_loader_index_js_node_modules_css_loader_0_28_11_css_loader_index_js_ref_8_2_node_modules_vue_loader_15_8_3_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_8_3_node_modules_px2rem_loader_0_1_9_px2rem_loader_index_js_ref_8_4_node_modules_less_loader_4_1_0_less_loader_dist_cjs_js_ref_8_5_node_modules_vue_loader_15_8_3_vue_loader_lib_index_js_vue_loader_options_photographEdit_vue_vue_type_style_index_0_lang_less____default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__node_modules_extract_text_webpack_plugin_3_0_2_extract_text_webpack_plugin_dist_loader_js_ref_8_0_node_modules_vue_style_loader_4_1_2_vue_style_loader_index_js_node_modules_css_loader_0_28_11_css_loader_index_js_ref_8_2_node_modules_vue_loader_15_8_3_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_8_3_node_modules_px2rem_loader_0_1_9_px2rem_loader_index_js_ref_8_4_node_modules_less_loader_4_1_0_less_loader_dist_cjs_js_ref_8_5_node_modules_vue_loader_15_8_3_vue_loader_lib_index_js_vue_loader_options_photographEdit_vue_vue_type_style_index_0_lang_less___);
/* unused harmony reexport namespace */
 /* unused harmony default export */ var _unused_webpack_default_export = (__WEBPACK_IMPORTED_MODULE_0__node_modules_extract_text_webpack_plugin_3_0_2_extract_text_webpack_plugin_dist_loader_js_ref_8_0_node_modules_vue_style_loader_4_1_2_vue_style_loader_index_js_node_modules_css_loader_0_28_11_css_loader_index_js_ref_8_2_node_modules_vue_loader_15_8_3_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_8_3_node_modules_px2rem_loader_0_1_9_px2rem_loader_index_js_ref_8_4_node_modules_less_loader_4_1_0_less_loader_dist_cjs_js_ref_8_5_node_modules_vue_loader_15_8_3_vue_loader_lib_index_js_vue_loader_options_photographEdit_vue_vue_type_style_index_0_lang_less____default.a); 

/***/ }),

/***/ 1631:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1061)(true);
// imports


// module
exports.push([module.i, ".sspEdit .photograph-title{padding:.625rem;font-size:1rem}.sspEdit .locate{width:100%;height:3.375rem;line-height:3.375rem;border-top:.0625rem solid #ccc;border-bottom:.0625rem solid #ccc;background-color:#fff}.sspEdit .locate span{display:inline-block}.sspEdit .locate .location-img{height:1.25rem;width:auto;margin-left:1.5rem}.sspEdit .cl_btn{position:absolute;bottom:0}", "", {"version":3,"sources":["/Users/zz/project/zhzf_platform/vue/mobile1.0/src/view/photograph/photographEdit.vue"],"names":[],"mappings":"AAAA,2BACE,gBAAiB,AACjB,cAAe,CACjB,AAEA,iBACE,WAAW,AACX,gBAAgB,AAChB,qBAAqB,AACrB,+BAAmC,AACnC,kCAAsC,AACtC,qBAAyB,CAC3B,AAEA,sBACE,oBAAqB,CACvB,AAEA,+BACE,eAAe,AACf,WAAW,AACX,kBAAmB,CACrB,AAEA,iBACE,kBAAkB,AAClB,QAAS,CACX","file":"photographEdit.vue?vue&type=style&index=0&lang=less&","sourcesContent":[".sspEdit .photograph-title {\n  padding: 0.625rem;\n  font-size: 1rem;\n}\n\n.sspEdit .locate {\n  width: 100%;\n  height: 3.375rem;\n  line-height: 3.375rem;\n  border-top: 0.0625rem solid #cccccc;\n  border-bottom: 0.0625rem solid #cccccc;\n  background-color: #ffffff;\n}\n\n.sspEdit .locate span {\n  display: inline-block;\n}\n\n.sspEdit .locate .location-img {\n  height: 1.25rem;\n  width: auto;\n  margin-left: 1.5rem;\n}\n\n.sspEdit .cl_btn {\n  position: absolute;\n  bottom: 0;\n}"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ 543:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__photographEdit_vue_vue_type_template_id_05c5be85___ = __webpack_require__(1629);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__photographEdit_vue_vue_type_script_lang_js___ = __webpack_require__(1416);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_1__photographEdit_vue_vue_type_script_lang_js___) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_1__photographEdit_vue_vue_type_script_lang_js___[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__photographEdit_vue_vue_type_style_index_0_lang_less___ = __webpack_require__(1630);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__node_modules_vue_loader_15_8_3_vue_loader_lib_runtime_componentNormalizer_js__ = __webpack_require__(0);






/* normalize component */

var component = Object(__WEBPACK_IMPORTED_MODULE_3__node_modules_vue_loader_15_8_3_vue_loader_lib_runtime_componentNormalizer_js__["a" /* default */])(
  __WEBPACK_IMPORTED_MODULE_1__photographEdit_vue_vue_type_script_lang_js___["default"],
  __WEBPACK_IMPORTED_MODULE_0__photographEdit_vue_vue_type_template_id_05c5be85___["a" /* render */],
  __WEBPACK_IMPORTED_MODULE_0__photographEdit_vue_vue_type_template_id_05c5be85___["b" /* staticRenderFns */],
  false,
  null,
  null,
  null
  
)

/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ })

});