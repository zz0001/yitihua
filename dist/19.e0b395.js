webpackJsonp([19],{

/***/ 1206:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var ip = 'http://180.100.74.68';
module.exports = {
    "rem": 16, //是否修改px为rem
    "auto_open_browser": true,
    "https": false, //是否为https服务
    "postCss": true,
    "entry": "index",
    "commonJs": "base",
    "port": 8090,
    "static": true,
    "compress": false,
    "proxy": [{
        api: ["/wgh"],
        // target: "http://192.168.3.49:6080"
        target: "http://10.1.163.172:8087"
    }, {
        api: ["/xzsp"],
        target: "http://10.1.163.173:8084"
    }, {
        api: ['/api'],
        target: "http://localhost:3333"
    }, {
        api: ['/zhzf'],
        target: "http://10.1.163.172:8085"
    }, {
        api: ['/ump'],
        target: "http://10.1.163.172:8081"
        // target:"http://192.168.123.108:8080"
    }]
};

/***/ }),

/***/ 1245:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "image/icon_point.0cd860.png";

/***/ }),

/***/ 1297:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__node_modules_babel_loader_7_1_5_babel_loader_lib_index_js_ref_2_0_node_modules_vue_loader_15_8_3_vue_loader_lib_index_js_vue_loader_options_attendance_vue_vue_type_script_lang_js___ = __webpack_require__(1298);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__node_modules_babel_loader_7_1_5_babel_loader_lib_index_js_ref_2_0_node_modules_vue_loader_15_8_3_vue_loader_lib_index_js_vue_loader_options_attendance_vue_vue_type_script_lang_js____default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__node_modules_babel_loader_7_1_5_babel_loader_lib_index_js_ref_2_0_node_modules_vue_loader_15_8_3_vue_loader_lib_index_js_vue_loader_options_attendance_vue_vue_type_script_lang_js___);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__node_modules_babel_loader_7_1_5_babel_loader_lib_index_js_ref_2_0_node_modules_vue_loader_15_8_3_vue_loader_lib_index_js_vue_loader_options_attendance_vue_vue_type_script_lang_js___) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__node_modules_babel_loader_7_1_5_babel_loader_lib_index_js_ref_2_0_node_modules_vue_loader_15_8_3_vue_loader_lib_index_js_vue_loader_options_attendance_vue_vue_type_script_lang_js___[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (__WEBPACK_IMPORTED_MODULE_0__node_modules_babel_loader_7_1_5_babel_loader_lib_index_js_ref_2_0_node_modules_vue_loader_15_8_3_vue_loader_lib_index_js_vue_loader_options_attendance_vue_vue_type_script_lang_js____default.a); 

/***/ }),

/***/ 1298:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _axios = __webpack_require__(488);

var _axios2 = _interopRequireDefault(_axios);

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

var conf = __webpack_require__(1206);

exports.default = {
    name: "attendance",
    data: function data() {
        return {
            time: '09:41',
            duty: '上班打卡',
            inRange: true,
            address: '',
            timer: ''
        };
    },
    created: function created() {
        var _this = this;

        var obj = { para: 'userId=' + window.localStorage.userId };
        var url = window.serverUrl + 'app_userStateCheck.action';
        // axios.post(url, obj).then(d => {
        //
        //     console.log(d);
        //     if (d.attendStatus == "0") {
        //         this.duty = "上班打卡"
        //     } else if (d.attendStatus == "1") {
        //         this.duty = "下班打卡"
        //     } else {
        //         this.duty = "下班打卡"
        //     }
        //
        //
        // })

        this.$http.post('/wgh/app/app_userStateCheck.action', obj).then(function (d) {
            console.log(d);
            if (d.attendStatus == "0") {
                _this.duty = "上班打卡";
            } else if (d.attendStatus == "1") {
                _this.duty = "下班打卡";
            } else {
                _this.duty = "下班打卡";
            }
        });
    },
    mounted: function mounted() {

        this._getLocation();
        this.timer = setInterval(this._clock, 1000);
    },
    beforeDestroy: function beforeDestroy() {
        clearInterval(this.timer);
    },

    methods: {
        showMapWithoutPosition: function showMapWithoutPosition() {
            // 开局一张图

        },
        _getLocation: function _getLocation() {
            var _this2 = this;

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
                    setTimeout(_this2._getLocation, 500);
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
            var _this3 = this;

            if (isNull(e.coords.longitude)) {
                toast("坐标为空,请重新定位");
            } else {
                console.log('定位成功，进入_showPosition');
                window.longitude = e.coords.longitude;
                window.latitude = e.coords.latitude;
                window.choiceLongitude = e.coords.longitude;
                window.choiceLatitude = e.coords.latitude;
                var ggPoint = new BMap.Point(window.longitude, window.latitude);
                var pointArr = [];
                pointArr.push(ggPoint);
                var convertor = new BMap.Convertor();
                convertor.translate(pointArr, 1, 5, function (data) {
                    if (data.status === 0) {
                        var geocode = new BMap.Geocoder();
                        geocode.getLocation(data.points[0], function (result) {
                            return _this3._searchResult(result);
                        });
                    }
                });
            }
        },
        _searchResult: function _searchResult(result) {
            console.log('_searchResult: ' + result.address);
            window.localStorage.mapAddress = result.address;
            this.address = result.address;
            if (!isNull(window.setIdMapAddress)) {
                $("#" + window.setIdMapAddress).html(window.localStorage.mapAddress);
            }
            this._refreshMap();
        },
        _refreshMap: function _refreshMap() {
            console.log('进入_refreshMap');
            console.log('当前longitude：' + window.longitude);
            console.log('当前latitude：' + window.latitude);
            var map = void 0;
            var zoom = 16;
            var geocode = "";
            map = new T.Map('attendance_map');
            map.centerAndZoom(new T.LngLat(window.longitude || 120.00623, window.latitude || 32.0444), zoom);
            var icon = new T.Icon({
                iconUrl: __webpack_require__(1245),
                iconSize: new T.Point(19, 27),
                iconAnchor: new T.Point(10, 25)
            });
            var marker = new T.Marker(new T.LngLat(window.longitude, window.latitude), {
                icon: icon
            });
            //向地图上添加自己位置的标志
            map.clearOverLays();
            map.addOverLay(marker);

            // let label = new T.Label({
            //     text: window.localStorage.mapAddress,
            //     position: new T.LngLat(window.longitude, window.latitude),
            //     offset: new T.Point(-9, 0)
            // });
            // //向地图上添加地址文本
            // map.addOverLay(label);

            // 定义该矩形的显示区域
            var circle = new T.Circle(new T.LngLat(window.longitude, window.latitude), 200, {
                color: "blue",
                weight: 1,
                opacity: 0.5,
                fillColor: "#666666",
                fillOpacity: 0.3,
                lineStyle: "solid"
            });
            //向地图上添加圆
            map.addOverLay(circle);
        },

        /**
         * 获取当前时间
         * @private
         */
        _clock: function _clock() {
            var now = new Date();
            var year = now.getFullYear(); //得到年份
            var month = now.getMonth(); //得到月份
            var date = now.getDate(); //得到日期
            var day = now.getDay(); //得到周几
            var hour = now.getHours().toString().padStart(2, '0'); //得到小时
            var min = now.getMinutes().toString().padStart(2, '0'); //得到分钟
            var sec = now.getSeconds(); //得到秒
            // 拼接字符串 HH:mm
            this.time = hour + ':' + min;
        },
        attend: function attend() {
            console.log('点击了打卡按钮');
            var status = this.duty === '上班打卡' ? 1 : 2;
            // 首先判断是否定位成功
            this.submit(status);

            // if (isNull(this.address)) {
            //     toast('请等待定位成功');
            //     return;
            // }
            // // 然后判断范围
            // if (this.inRange) {
            //     //如果在打卡范围内，直接打卡
            //     this.submit(status);
            // } else {
            //     //如果不在打卡范围内，弹对话框提示是否打卡
            //
            // }
        },

        /**
         * 上下班打卡
         * @param e 上班:1 下班:2
         */
        submit: function submit(e) {
            var _this4 = this;

            // let obj = "";
            // obj += toJson("userId", $.trim(window.localStorage.userId)) + "&";
            // obj += toJson("address", $.trim(this.address)) + "&";
            // obj += toJson("attendStatus", $.trim(e)) + "&";
            // obj += toJson("longitude", $.trim(window.longitude)) + "&";
            // obj += toJson("latitude", $.trim(window.latitude));
            //
            // doPost.call(this, "app_userCheck.action", obj, data => {
            //     // doPost("app_userCheck.action", obj, data => {
            //     console.log('attendance接口返回');
            //     console.log(data);
            //     if (data.code == 0) {
            //         toast(data.message);
            //         if (data.attendStatus == "1") {
            //             // window.localStorage.signState = "签到";
            //             this.duty = '上班打卡';
            //             console.log('服务器地址： ' + conf.proxy[0].target);
            //             jsict.logininfo.save((res) => {
            //                 console.log(res);
            //             }, (err) => {
            //                 console.error(err);
            //             }, localStorage.getItem('token'), conf.proxy[0].target);
            //             jsict.logininfo.start((res) => {
            //                 console.log(res);
            //             }, (err) => {
            //                 console.error(err);
            //             });
            //         } else if (data.attendStatus == "2") {
            //             // window.localStorage.signState = "签退";
            //             this.duty = '下班打卡';
            //             jsict.logininfo.stop((res) => {
            //                 console.log(res);
            //             }, (err) => {
            //                 console.error(err);
            //             });
            //         }
            //         this.$router.back();
            //     } else {
            //         toast(data.message);
            //     }
            // }, "", "");

            this.$http.post('wgh/app/app_userCheck.action', {
                token: localStorage.getItem('token'),
                address: this.address,
                attendStatus: e,
                longitude: window.longitude,
                latitude: window.latitude
            }).then(function (data) {
                console.log(data);
                if (data.code == 0) {
                    toast(data.message);
                    if (data.attendStatus == "1") {
                        // window.localStorage.signState = "签到";
                        _this4.duty = '上班打卡';
                        console.log('服务器地址： ' + conf.proxy[0].target);
                        jsict.logininfo.save(function (res) {
                            console.log(res);
                        }, function (err) {
                            console.error(err);
                        }, localStorage.getItem('token'), conf.proxy[0].target);
                        jsict.logininfo.start(function (res) {
                            console.log(res);
                        }, function (err) {
                            console.error(err);
                        });
                    } else if (data.attendStatus == "2") {
                        // window.localStorage.signState = "签退";
                        _this4.duty = '下班打卡';
                        jsict.logininfo.stop(function (res) {
                            console.log(res);
                        }, function (err) {
                            console.error(err);
                        });
                    }
                    _this4.$router.back();
                } else {
                    toast(data.message);
                }
            });
        },
        _test: function _test() {
            jsict.check.check(function () {
                jsict.speech.startListen(function (res) {
                    console.log('前端接收到语音：\n' + res);
                }, function () {});
            }, function () {}, 'microphone');
        }
    }
};

/***/ }),

/***/ 1299:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1509);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(1062).default
var update = add("7c9bd238", content, true, {});

/***/ }),

/***/ 1507:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/_vue-loader@15.8.3@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/_vue-loader@15.8.3@vue-loader/lib??vue-loader-options!./src/view/attendance/attendance.vue?vue&type=template&id=f34350ce&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"attendance"},[_c('tk-header',[_vm._v("上下班考勤")]),_vm._v(" "),_c('div',{staticClass:"attendance-content"},[_vm._m(0),_vm._v(" "),_c('div',{staticClass:"attend-btn-wrapper"},[_c('div',{staticClass:"attend-btn"},[_c('div',{staticClass:"circle-wrapper",on:{"click":_vm.attend}},[_c('div',{staticClass:"attendance-time"},[_vm._v(_vm._s(_vm.time))]),_vm._v(" "),_c('div',{staticClass:"attendance-duty"},[_vm._v(_vm._s(_vm.duty))])])])])])],1)}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"map-wrapper"},[_c('div',{staticClass:"attendance-map",attrs:{"id":"attendance_map"}})])}]


// CONCATENATED MODULE: ./src/view/attendance/attendance.vue?vue&type=template&id=f34350ce&scoped=true&
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });


/***/ }),

/***/ 1508:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__node_modules_extract_text_webpack_plugin_3_0_2_extract_text_webpack_plugin_dist_loader_js_ref_8_0_node_modules_vue_style_loader_4_1_2_vue_style_loader_index_js_node_modules_css_loader_0_28_11_css_loader_index_js_ref_8_2_node_modules_vue_loader_15_8_3_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_8_3_node_modules_px2rem_loader_0_1_9_px2rem_loader_index_js_ref_8_4_node_modules_less_loader_4_1_0_less_loader_dist_cjs_js_ref_8_5_node_modules_vue_loader_15_8_3_vue_loader_lib_index_js_vue_loader_options_attendance_vue_vue_type_style_index_0_id_f34350ce_lang_less_scoped_true___ = __webpack_require__(1299);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__node_modules_extract_text_webpack_plugin_3_0_2_extract_text_webpack_plugin_dist_loader_js_ref_8_0_node_modules_vue_style_loader_4_1_2_vue_style_loader_index_js_node_modules_css_loader_0_28_11_css_loader_index_js_ref_8_2_node_modules_vue_loader_15_8_3_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_8_3_node_modules_px2rem_loader_0_1_9_px2rem_loader_index_js_ref_8_4_node_modules_less_loader_4_1_0_less_loader_dist_cjs_js_ref_8_5_node_modules_vue_loader_15_8_3_vue_loader_lib_index_js_vue_loader_options_attendance_vue_vue_type_style_index_0_id_f34350ce_lang_less_scoped_true____default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__node_modules_extract_text_webpack_plugin_3_0_2_extract_text_webpack_plugin_dist_loader_js_ref_8_0_node_modules_vue_style_loader_4_1_2_vue_style_loader_index_js_node_modules_css_loader_0_28_11_css_loader_index_js_ref_8_2_node_modules_vue_loader_15_8_3_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_8_3_node_modules_px2rem_loader_0_1_9_px2rem_loader_index_js_ref_8_4_node_modules_less_loader_4_1_0_less_loader_dist_cjs_js_ref_8_5_node_modules_vue_loader_15_8_3_vue_loader_lib_index_js_vue_loader_options_attendance_vue_vue_type_style_index_0_id_f34350ce_lang_less_scoped_true___);
/* unused harmony reexport namespace */
 /* unused harmony default export */ var _unused_webpack_default_export = (__WEBPACK_IMPORTED_MODULE_0__node_modules_extract_text_webpack_plugin_3_0_2_extract_text_webpack_plugin_dist_loader_js_ref_8_0_node_modules_vue_style_loader_4_1_2_vue_style_loader_index_js_node_modules_css_loader_0_28_11_css_loader_index_js_ref_8_2_node_modules_vue_loader_15_8_3_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_8_3_node_modules_px2rem_loader_0_1_9_px2rem_loader_index_js_ref_8_4_node_modules_less_loader_4_1_0_less_loader_dist_cjs_js_ref_8_5_node_modules_vue_loader_15_8_3_vue_loader_lib_index_js_vue_loader_options_attendance_vue_vue_type_style_index_0_id_f34350ce_lang_less_scoped_true____default.a); 

/***/ }),

/***/ 1509:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1061)(true);
// imports


// module
exports.push([module.i, ".attendance .attendance-content[data-v-f34350ce],.attendance[data-v-f34350ce]{width:100%;height:100%}.attendance .attendance-content .map-wrapper[data-v-f34350ce]{overflow:hidden;width:100%;height:60%}.attendance .attendance-content .map-wrapper .attendance-map[data-v-f34350ce]{width:100%;height:100%;overflow:hidden;margin:0;z-index:1}.attendance .attendance-content .attend-btn-wrapper[data-v-f34350ce]{position:relative;height:40%;-webkit-box-orient:horizontal;-ms-flex-flow:row nowrap;flex-flow:row nowrap}.attendance .attendance-content .attend-btn-wrapper .attend-btn[data-v-f34350ce],.attendance .attendance-content .attend-btn-wrapper[data-v-f34350ce]{width:100%;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-direction:normal;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}.attendance .attendance-content .attend-btn-wrapper .attend-btn[data-v-f34350ce]{position:absolute;top:0;left:0;height:100%;-webkit-box-orient:vertical;-ms-flex-flow:column nowrap;flex-flow:column nowrap}.attendance .attendance-content .attend-btn-wrapper .attend-btn .circle-wrapper[data-v-f34350ce]{width:7.5rem;height:7.5rem;border-radius:50%;border:.1875rem solid #1b86d7;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-flow:column nowrap;flex-flow:column nowrap;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}.attendance .attendance-content .attend-btn-wrapper .attend-btn .circle-wrapper .attendance-time[data-v-f34350ce]{font-size:1.28125rem;font-weight:700;color:#333}.attendance .attendance-content .attend-btn-wrapper .attend-btn .circle-wrapper .attendance-duty[data-v-f34350ce]{margin-top:1.0625rem;font-size:.9625rem;color:#666}", "", {"version":3,"sources":["/Users/zz/project/zhzf_platform/vue/mobile1.0/src/view/attendance/attendance.vue"],"names":[],"mappings":"AAKA,8EACE,WAAW,AACX,WAAY,CACd,AAEA,8DACE,gBAAgB,AAChB,WAAW,AACX,UAAW,CACb,AAEA,8EACE,WAAW,AACX,YAAY,AACZ,gBAAgB,AAChB,SAAS,AACT,SAAU,CACZ,AAEA,qEACE,kBAAkB,AAElB,WAAW,AAEX,8BAAqB,AAArB,yBAAqB,AAArB,oBAAqB,CAGvB,AAEA,sJARE,WAAW,AAEX,oBAAa,AAAb,oBAAa,AAAb,aAAa,AACb,6BAAqB,AACrB,yBAAmB,AAAnB,sBAAmB,AAAnB,mBAAmB,AACnB,wBAAuB,AAAvB,qBAAuB,AAAvB,sBAAuB,CAazB,AAVA,iFACE,kBAAkB,AAClB,MAAM,AACN,OAAO,AAEP,YAAY,AAEZ,4BAAwB,AAAxB,4BAAwB,AAAxB,uBAAwB,CAG1B,AAEA,iGACE,aAAa,AACb,cAAc,AACd,kBAAkB,AAClB,8BAA+B,AAC/B,oBAAa,AAAb,oBAAa,AAAb,aAAa,AACb,4BAAwB,AAAxB,6BAAwB,AAAxB,4BAAwB,AAAxB,wBAAwB,AACxB,yBAAmB,AAAnB,sBAAmB,AAAnB,mBAAmB,AACnB,wBAAuB,AAAvB,qBAAuB,AAAvB,sBAAuB,CACzB,AAEA,kHACE,qBAAqB,AACrB,gBAAiB,AACjB,UAAc,CAChB,AAEA,kHACE,qBAAqB,AACrB,mBAAoB,AACpB,UAAc,CAChB","file":"attendance.vue?vue&type=style&index=0&id=f34350ce&lang=less&scoped=true&","sourcesContent":[".attendance {\n  width: 100%;\n  height: 100%;\n}\n\n.attendance .attendance-content {\n  width: 100%;\n  height: 100%;\n}\n\n.attendance .attendance-content .map-wrapper {\n  overflow: hidden;\n  width: 100%;\n  height: 60%;\n}\n\n.attendance .attendance-content .map-wrapper .attendance-map {\n  width: 100%;\n  height: 100%;\n  overflow: hidden;\n  margin: 0;\n  z-index: 1;\n}\n\n.attendance .attendance-content .attend-btn-wrapper {\n  position: relative;\n  width: 100%;\n  height: 40%;\n  display: flex;\n  flex-flow: row nowrap;\n  align-items: center;\n  justify-content: center;\n}\n\n.attendance .attendance-content .attend-btn-wrapper .attend-btn {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  display: flex;\n  flex-flow: column nowrap;\n  align-items: center;\n  justify-content: center;\n}\n\n.attendance .attendance-content .attend-btn-wrapper .attend-btn .circle-wrapper {\n  width: 7.5rem;\n  height: 7.5rem;\n  border-radius: 50%;\n  border: 0.1875rem solid #1b86d7;\n  display: flex;\n  flex-flow: column nowrap;\n  align-items: center;\n  justify-content: center;\n}\n\n.attendance .attendance-content .attend-btn-wrapper .attend-btn .circle-wrapper .attendance-time {\n  font-size: 1.28125rem;\n  font-weight: bold;\n  color: #333333;\n}\n\n.attendance .attendance-content .attend-btn-wrapper .attend-btn .circle-wrapper .attendance-duty {\n  margin-top: 1.0625rem;\n  font-size: 0.9625rem;\n  color: #666666;\n}"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ 507:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__attendance_vue_vue_type_template_id_f34350ce_scoped_true___ = __webpack_require__(1507);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__attendance_vue_vue_type_script_lang_js___ = __webpack_require__(1297);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_1__attendance_vue_vue_type_script_lang_js___) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_1__attendance_vue_vue_type_script_lang_js___[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__attendance_vue_vue_type_style_index_0_id_f34350ce_lang_less_scoped_true___ = __webpack_require__(1508);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__node_modules_vue_loader_15_8_3_vue_loader_lib_runtime_componentNormalizer_js__ = __webpack_require__(0);






/* normalize component */

var component = Object(__WEBPACK_IMPORTED_MODULE_3__node_modules_vue_loader_15_8_3_vue_loader_lib_runtime_componentNormalizer_js__["a" /* default */])(
  __WEBPACK_IMPORTED_MODULE_1__attendance_vue_vue_type_script_lang_js___["default"],
  __WEBPACK_IMPORTED_MODULE_0__attendance_vue_vue_type_template_id_f34350ce_scoped_true___["a" /* render */],
  __WEBPACK_IMPORTED_MODULE_0__attendance_vue_vue_type_template_id_f34350ce_scoped_true___["b" /* staticRenderFns */],
  false,
  null,
  "f34350ce",
  null
  
)

/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ })

});