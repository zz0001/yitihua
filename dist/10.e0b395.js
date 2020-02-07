webpackJsonp([10],{

/***/ 1192:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "image/slide_example.dc4a37.png";

/***/ }),

/***/ 1235:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "image/user_info_arrow.7c5188.png";

/***/ }),

/***/ 1236:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "image/add_new_menu_item.e36d25.png";

/***/ }),

/***/ 1463:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__node_modules_babel_loader_7_1_5_babel_loader_lib_index_js_ref_2_0_node_modules_vue_loader_15_8_3_vue_loader_lib_index_js_vue_loader_options_welcome_vue_vue_type_script_lang_js___ = __webpack_require__(1464);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__node_modules_babel_loader_7_1_5_babel_loader_lib_index_js_ref_2_0_node_modules_vue_loader_15_8_3_vue_loader_lib_index_js_vue_loader_options_welcome_vue_vue_type_script_lang_js____default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__node_modules_babel_loader_7_1_5_babel_loader_lib_index_js_ref_2_0_node_modules_vue_loader_15_8_3_vue_loader_lib_index_js_vue_loader_options_welcome_vue_vue_type_script_lang_js___);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__node_modules_babel_loader_7_1_5_babel_loader_lib_index_js_ref_2_0_node_modules_vue_loader_15_8_3_vue_loader_lib_index_js_vue_loader_options_welcome_vue_vue_type_script_lang_js___) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__node_modules_babel_loader_7_1_5_babel_loader_lib_index_js_ref_2_0_node_modules_vue_loader_15_8_3_vue_loader_lib_index_js_vue_loader_options_welcome_vue_vue_type_script_lang_js___[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (__WEBPACK_IMPORTED_MODULE_0__node_modules_babel_loader_7_1_5_babel_loader_lib_index_js_ref_2_0_node_modules_vue_loader_15_8_3_vue_loader_lib_index_js_vue_loader_options_welcome_vue_vue_type_script_lang_js____default.a); 

/***/ }),

/***/ 1464:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _axios = __webpack_require__(488);

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    components: {
        bar: function bar() {
            return __webpack_require__.e/* import() */(195/* duplicate */).then(__webpack_require__.bind(null, 1237));
        }
    },
    name: "welcome",
    created: function created() {
        var _this = this;

        this.$http.post('/ump/proxy/myAppletsList').then(function (d) {
            if (d.appletsList) {
                _this.my = d.appletsList;
            }
        });
    },
    data: function data() {
        return {
            // 所有功能菜单项的实例
            my: [],
            item_xunchashangbao: {
                title: '巡查上报',
                img: __webpack_require__(1678),
                remind: false
            },
            item_anjianshangbao: {
                title: '案件上报',
                img: __webpack_require__(1679),
                remind: false
            },
            item_duchaduban: {
                title: '督查督办',
                img: __webpack_require__(1680),
                remind: false
            },
            item_shuangsuiji: {
                title: '双随机',
                img: __webpack_require__(1681),
                remind: false
            },
            item_kaoqindaka: {
                title: '考勤打卡',
                img: __webpack_require__(1682),
                remind: false
            },
            item_suishoupai: {
                title: '随手拍',
                img: __webpack_require__(1683),
                remind: false
            },
            item_guijichaxun: {
                title: '轨迹查询',
                img: __webpack_require__(1684),
                remind: false
            },
            item_jifenpaiming: {
                title: '积分排名',
                img: __webpack_require__(1685),
                remind: false
            },
            item_zhongxingongzuo: {
                title: '中心工作',
                img: __webpack_require__(1686),
                remind: false
            },
            item_anjianchaxun: {
                title: '案件查询',
                img: '../../static/image/home_menu_anjianchaxun.png',
                remind: false
            },
            // 行政审批相关菜单暂时隐藏
            // item_xingzhengxiangduiren: {
            //     title: '行政相对人',
            //     img: require('../../static/image/home_menu_xingzhengxiangduiren.png'),
            //     remind: false
            // },
            // item_xingzhengxuke: {
            //     title: '行政许可',
            //     img: require('../../static/image/home_menu_xingzhengxuke.png'),
            //     remind: false
            // },
            // item_falvfagui: {
            //     title: '法律法规',
            //     img: require('../../static/image/home_menu_falvfagui.png'),
            //     remind: false
            // },
            // item_qiyexinxi: {
            //     title: '企业信息',
            //     img: require('../../static/image/home_menu_qiyexinxi.png'),
            //     remind: false
            // },
            // 功能菜单项对应的红点标记boolean值

            // 登录信息
            userName: '张政',
            avatar: '',
            // 轮播图list
            slides: [{
                image: __webpack_require__(1192)
            }, {
                image: __webpack_require__(1192)
            }, {
                image: __webpack_require__(1192)
            }, {
                image: __webpack_require__(1192)
            }, {
                image: __webpack_require__(1192)
            }],
            // 首页notice
            noticeTitle: '各重大园区四季度重大建设项目集中接受视察',

            // 【工作管理】菜单
            workManagementMenu: [],
            // 【信息查询】菜单
            infoQueryMenu: []
        };
    },

    methods: {
        kuozhan: function kuozhan(item) {
            location.href = item.to;
        },

        /**
         * 跳转到【我的】
         */
        showMyProfile: function showMyProfile() {
            this.$router.push({
                path: '/my',
                query: {}
            });
        },

        /**
         * 跳转到【通知公告】
         */
        showNoticeList: function showNoticeList() {
            this.$router.push({
                path: '/notice-list',
                query: {}
            });
        },

        /**
         * 跳转到公告详情页
         */
        showNoticeDetail: function showNoticeDetail() {},

        /**
         * 菜单项的点击事件
         * @param item 功能模块
         */
        onMenuItemClick: function onMenuItemClick(item) {
            window.opinionWelcomePage = "";
            console.log('点击项的名称：' + item.title);
            switch (item.title) {
                case '巡查上报':
                    this.$router.push({
                        path: '/patrolReport',
                        query: {}
                    });
                    break;
                case '案件上报':
                    this.$router.push({
                        path: '/anjianshangbao',
                        query: {}
                    });
                    break;
                case '督查督办':
                    this.$router.push({
                        path: '/duchaduban',
                        query: {}
                    });
                    break;
                case '双随机':
                    this.$router.push({
                        path: '/doubleRandom-list',
                        query: {}
                    });
                    break;
                case '考勤打卡':
                    this.$router.push({
                        path: 'attendance',
                        query: {}
                    });
                    break;
                case '随手拍':
                    this.$router.push({
                        // path: '/odd/sspEdit',
                        path: 'photographEdit',
                        query: {}
                    });
                    break;
                case '轨迹查询':
                    this.$router.push({
                        path: '/grid-list',
                        query: {}
                    });
                    break;
                case '积分排名':
                    this.$router.push({
                        path: '/pointRank',
                        query: {}
                    });
                    break;
                case '中心工作':
                    this.$router.push({
                        path: '/centerWork',
                        query: {}
                    });
                    break;
                case '案件查询':
                    this.$router.push({
                        path: '/yishangbao',
                        query: {}
                    });
                    break;
                case '行政相对人':
                    this.$router.push({
                        path: '/administrativeCounterpart',
                        query: {}
                    });
                    break;
                case '行政许可':
                    this.$router.push({
                        path: '/administrativeLicense',
                        query: {}
                    });
                    break;
                case '法律法规':
                    this.$router.push({
                        path: '/lawAndRegulation',
                        query: {}
                    });
                    break;
                case '企业信息':
                    this.$router.push({
                        path: '/enterprise',
                        query: {}
                    });
                    break;
                default:
                    break;
            }
        },

        /**
         * 假如菜单项数量不能被4整除，则需要补充空白项，使得布局完善
         * @param menuList 功能菜单list
         * @private
         */
        _polishMenu: function _polishMenu(menuList) {
            if (menuList != null && menuList.length % 4 !== 0) {
                var polishNumber = 4 - menuList.length % 4;
                for (var i = 0; i < polishNumber; i++) {
                    menuList.splice(menuList.length, 0, {
                        title: '',
                        img: '',
                        remind: false
                    });
                }
            }
        },
        app_noticeTopDetail: function app_noticeTopDetail() {

            var arrayimg = [];
            var that = this;
            var url = '/wgh/app/app_noticeTopDetail.action';
            //let para={token: window.localStorage.userId};
            // var obj = "";
            // obj += toJson("userId", $.trim(window.localStorage.userId));
            // doPost("app_noticeTopDetail.action", obj, function (data) {
            //     if (!isNull(data.datas) && data.datas.length > 0) {
            //         for (var i = 0; i < data.datas.length; i++) {
            //             let o={
            //                 image:window.imgUrl + data.datas[i].pics,
            //                 title:data.datas[i].title
            //             };
            //             arrayimg.push(o);
            //
            //         }
            //         that.slides=arrayimg;
            //         console.log(that.slides);
            //     }
            // }, "");

            _axios2.default.post(url).then(function (data) {

                console.log(data);
                if (!isNull(data.datas) && data.datas.length > 0) {
                    for (var i = 0; i < data.datas.length; i++) {
                        var o = {
                            image: window.imgUrl + data.datas[i].pics,
                            title: data.datas[i].title
                        };
                        arrayimg.push(o);
                    }
                    that.slides = arrayimg;
                    console.log(that.slides);
                }
            });
        },
        checkLocation: function checkLocation() {
            jsict.check.check(function (res) {
                console.log('========= 获取location权限成功');
            }, function (err) {
                console.log('========= 获取location权限失败');
            }, 'location');
        }
    },
    mounted: function mounted() {
        var _this2 = this;

        this.userLogo = window.localStorage.userLogo;
        if (window.navigator.platform !== 'MacIntel' && window.navigator.platform !== 'iPhone' && window.navigator.platform !== 'Win32') {
            setTimeout(function () {
                _this2.checkLocation();
            }, 500);
        }
        ////////////////////////////////////////////////////////
        // TODO: 菜单demo
        this.workManagementMenu = [];
        this.infoQueryMenu = [];
        if (this.$store.state.platModule.wggl.userName) {
            //网格化
            this.workManagementMenu.push(this.item_xunchashangbao);
            this.workManagementMenu.push(this.item_kaoqindaka);
            this.workManagementMenu.push(this.item_suishoupai);
            this.infoQueryMenu.push(this.item_guijichaxun);
            this.infoQueryMenu.push(this.item_jifenpaiming);
            //   this.infoQueryMenu.push(this.item_zhongxingongzuo)
        }
        if (this.$store.state.platModule.zhzf.userName) {
            //综合执法
            this.workManagementMenu.push(this.item_anjianshangbao);
            this.infoQueryMenu.push(this.item_anjianchaxun);
        }

        this.$set(this.item_xunchashangbao, 'remind', true);
        this.$set(this.item_kaoqindaka, 'remind', true);

        // TODO: 登录信息展示
        this.avatar = window.localStorage.userLogo;
        this.userName = window.localStorage.userName;
        ////////////////////////////////////////////////////////
        this.app_noticeTopDetail();
        // zz: 进行jpush注册和定时定位任务启动
        setTimeout(function () {
            console.log('登陆成功，调用jpush');
            jsict.StartActivity.setJpushAlias(localStorage.getItem('userId'), function (data) {
                console.log('jpush注册成功！');
            }, function (error) {
                console.log("startActivity error:" + error);
            });
        }, 5000);
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

/***/ 1465:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1688);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(1062).default
var update = add("f9ba53f8", content, true, {});

/***/ }),

/***/ 1675:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/_vue-loader@15.8.3@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/_vue-loader@15.8.3@vue-loader/lib??vue-loader-options!./src/view/welcome.vue?vue&type=template&id=7539aafa&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"home-page",staticStyle:{"padding-top":"0"}},[_c('div',{staticClass:"user-info"},[_c('div',{staticClass:"user-name",on:{"click":_vm.showMyProfile}},[_vm._v(_vm._s(_vm.userName))]),_vm._v(" "),_c('div',{staticClass:"arrow-wrapper",on:{"click":_vm.showMyProfile}},[_c('img',{staticClass:"arrow",attrs:{"alt":"","src":__webpack_require__(1235)}})])]),_vm._v(" "),_c('div',{staticClass:"home-title-split"}),_vm._v(" "),_c('tk-slide',{staticClass:"home-slide",attrs:{"items":_vm.slides}},_vm._l((_vm.slides),function(item,index){return _c('div',{staticClass:"home-slide-title-wrapper",attrs:{"slot":index},slot:index},[_c('div',{staticClass:"home-slide-title"},[_vm._v(_vm._s(item.title))])])}),0),_vm._v(" "),(_vm.$store.state.platModule.wggl.userName)?_c('div',{staticClass:"notice"},[_c('div',{staticClass:"notice-left-part"},[_vm._m(0),_vm._v(" "),_c('div',{staticClass:"notice-title"},[_vm._v(_vm._s(_vm.noticeTitle))])]),_vm._v(" "),_c('div',{staticClass:"notice-right-part"},[_c('div',{staticClass:"more-notice-wrapper",on:{"click":_vm.showNoticeList}},[_c('div',{staticClass:"more-notice"},[_vm._v("更多")])])])]):_vm._e(),_vm._v(" "),_c('tk-scroll',[_c('div',{staticClass:"menu-wrapper"},[_c('div',{staticClass:"menu-title-wrapper"},[_c('div',{staticClass:"menu-title"},[_vm._v("工作管理")]),_vm._v(" "),_c('img',{directives:[{name:"show",rawName:"v-show",value:(false),expression:"false"}],staticClass:"add-menu-item",attrs:{"alt":"","src":__webpack_require__(1236)}})]),_vm._v(" "),_c('div',{staticClass:"menu"},_vm._l((_vm.workManagementMenu),function(item){return _c('div',{staticClass:"menu-item",on:{"click":function($event){return _vm.onMenuItemClick(item)}}},[_c('div',{staticClass:"menu-item-logo-wrapper"},[_c('img',{staticClass:"menu-item-logo",attrs:{"src":item.img,"alt":""}})]),_vm._v(" "),_c('div',{staticClass:"menu-item-title"},[_vm._v(_vm._s(item.title))])])}),0)]),_vm._v(" "),_c('div',{staticClass:"menu-wrapper"},[_c('div',{staticClass:"menu-title-wrapper"},[_c('div',{staticClass:"menu-title"},[_vm._v("信息查询")]),_vm._v(" "),_c('img',{directives:[{name:"show",rawName:"v-show",value:(false),expression:"false"}],staticClass:"add-menu-item",attrs:{"alt":"","src":__webpack_require__(1236)}})]),_vm._v(" "),_c('div',{staticClass:"menu"},_vm._l((_vm.infoQueryMenu),function(item){return _c('div',{staticClass:"menu-item",on:{"click":function($event){return _vm.onMenuItemClick(item)}}},[_c('div',{staticClass:"menu-item-logo-wrapper"},[_c('img',{staticClass:"menu-item-logo",attrs:{"src":item.img,"alt":""}}),_vm._v(" "),_c('img',{directives:[{name:"show",rawName:"v-show",value:(item.title !== '' && item.remind),expression:"item.title !== '' && item.remind"}],staticClass:"menu-item-remind",attrs:{"src":__webpack_require__(1676),"alt":""}})]),_vm._v(" "),_c('div',{staticClass:"menu-item-title"},[_vm._v(_vm._s(item.title))])])}),0)]),_vm._v(" "),_c('div',{staticClass:"menu-wrapper"},[_c('div',{staticClass:"menu-title-wrapper"},[_c('div',{staticClass:"menu-title"},[_vm._v("扩展应用")]),_vm._v(" "),_c('img',{directives:[{name:"show",rawName:"v-show",value:(false),expression:"false"}],staticClass:"add-menu-item",attrs:{"alt":"","src":__webpack_require__(1236)}})]),_vm._v(" "),_c('div',{staticClass:"menu"},[_vm._l((_vm.my),function(item){return _c('div',{staticClass:"menu-item",on:{"click":function($event){return _vm.kuozhan(item)}}},[_c('div',{staticClass:"menu-item-logo-wrapper"},[_c('img',{staticClass:"menu-item-logo",attrs:{"src":item.icon,"alt":""}})]),_vm._v(" "),_c('div',{staticClass:"menu-item-title"},[_vm._v(_vm._s(item.title))])])}),_vm._v(" "),_c('div',{staticClass:"menu-item",on:{"click":function($event){return _vm.$router.push('more')}}},[_c('div',{staticClass:"menu-item-logo-wrapper"},[_c('div',{staticClass:"menu-item-logo"},[_c('svg',{staticClass:"icon",attrs:{"t":"1579079278485","viewBox":"0 0 1037 1024","version":"1.1","xmlns":"http://www.w3.org/2000/svg","p-id":"2062","width":"200","height":"200"}},[_c('path',{attrs:{"d":"M344.323556 497.872502H126.662662A126.855186 126.855186 0 0 1 0.002338 370.237869V153.551284a126.855186 126.855186 0 0 1 126.660324-126.660323h217.660894a126.855186 126.855186 0 0 1 126.660324 126.660323V370.237869a126.855186 126.855186 0 0 1-126.660324 127.634633zM126.662662 85.349572A68.201713 68.201713 0 0 0 58.460949 153.551284V370.237869a68.201713 68.201713 0 0 0 68.201713 68.201712h217.660894a68.201713 68.201713 0 0 0 68.201713-68.201712V153.551284a68.201713 68.201713 0 0 0-68.201713-68.201712zM344.323556 1024H126.662662A126.855186 126.855186 0 0 1 0.002338 896.365366V679.678782a126.855186 126.855186 0 0 1 126.660324-126.660323h217.660894a126.855186 126.855186 0 0 1 126.660324 126.660323V896.365366a126.855186 126.855186 0 0 1-126.660324 127.634634zM126.662662 611.477069a68.201713 68.201713 0 0 0-68.201713 68.201713V896.365366a68.201713 68.201713 0 0 0 68.201713 68.201713h217.660894a68.201713 68.201713 0 0 0 68.201713-68.201713V679.678782a68.201713 68.201713 0 0 0-68.201713-68.201713zM883.311948 1024H665.845916a126.855186 126.855186 0 0 1-126.660324-126.660324V679.678782a126.855186 126.855186 0 0 1 126.660324-126.660323h217.466032a126.855186 126.855186 0 0 1 126.660324 126.660323V896.365366a126.855186 126.855186 0 0 1-126.660324 127.634634zM665.845916 611.477069a68.201713 68.201713 0 0 0-68.201713 68.201713V896.365366a68.201713 68.201713 0 0 0 68.201713 68.201713h217.466032a68.201713 68.201713 0 0 0 68.201713-68.201713V679.678782a68.201713 68.201713 0 0 0-68.201713-68.201713zM774.578932 524.763463a125.686013 125.686013 0 0 1-89.636537-37.023787l-136.403425-136.403425a126.855186 126.855186 0 0 1 0-179.078211l136.403425-136.403425a126.855186 126.855186 0 0 1 179.078212 0l136.403425 136.403425a126.855186 126.855186 0 0 1 0 179.078211l-136.403425 136.403425a125.686013 125.686013 0 0 1-89.441675 37.023787z m0-466.304852a68.006851 68.006851 0 0 0-48.325785 19.486203l-136.403425 136.403426a68.201713 68.201713 0 0 0 0 96.456708l136.403425 136.403425a70.150333 70.150333 0 0 0 96.456708 0l136.403425-136.403425a68.396575 68.396575 0 0 0 0-96.456708l-136.403425-136.403426a68.006851 68.006851 0 0 0-48.130923-19.486203z","p-id":"2063","fill":"#ffffff"}})])])]),_vm._v(" "),_c('div',{staticClass:"menu-item-title"},[_vm._v("更多")])])],2)])]),_vm._v(" "),_c('bar',{attrs:{"active":1}})],1)}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"notice-logo-wrapper"},[_c('img',{staticClass:"notice-logo",attrs:{"alt":"","src":__webpack_require__(1677)}})])}]


// CONCATENATED MODULE: ./src/view/welcome.vue?vue&type=template&id=7539aafa&scoped=true&
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });


/***/ }),

/***/ 1676:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "image/menu_item_remind.5b9de7.png";

/***/ }),

/***/ 1677:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "image/notice_logo.df4b93.png";

/***/ }),

/***/ 1678:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "image/home_menu_xunchashangbao.f1e7aa.png";

/***/ }),

/***/ 1679:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "image/home_menu_anjianshangbao.633211.png";

/***/ }),

/***/ 1680:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "image/home_menu_duchaduban.52fead.png";

/***/ }),

/***/ 1681:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "image/home_menu_shuangsuiji.e1aafb.png";

/***/ }),

/***/ 1682:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "image/home_menu_kaoqindaka.859bd1.png";

/***/ }),

/***/ 1683:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "image/home_menu_suishoupai.0d8744.png";

/***/ }),

/***/ 1684:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "image/home_menu_guijichaxun.160472.png";

/***/ }),

/***/ 1685:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "image/home_menu_jifenpaiming.39acd9.png";

/***/ }),

/***/ 1686:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "image/home_menu_zhongxingongzuo.d99463.png";

/***/ }),

/***/ 1687:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__node_modules_extract_text_webpack_plugin_3_0_2_extract_text_webpack_plugin_dist_loader_js_ref_8_0_node_modules_vue_style_loader_4_1_2_vue_style_loader_index_js_node_modules_css_loader_0_28_11_css_loader_index_js_ref_8_2_node_modules_vue_loader_15_8_3_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_8_3_node_modules_px2rem_loader_0_1_9_px2rem_loader_index_js_ref_8_4_node_modules_less_loader_4_1_0_less_loader_dist_cjs_js_ref_8_5_node_modules_vue_loader_15_8_3_vue_loader_lib_index_js_vue_loader_options_welcome_vue_vue_type_style_index_0_id_7539aafa_lang_less_scoped_true___ = __webpack_require__(1465);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__node_modules_extract_text_webpack_plugin_3_0_2_extract_text_webpack_plugin_dist_loader_js_ref_8_0_node_modules_vue_style_loader_4_1_2_vue_style_loader_index_js_node_modules_css_loader_0_28_11_css_loader_index_js_ref_8_2_node_modules_vue_loader_15_8_3_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_8_3_node_modules_px2rem_loader_0_1_9_px2rem_loader_index_js_ref_8_4_node_modules_less_loader_4_1_0_less_loader_dist_cjs_js_ref_8_5_node_modules_vue_loader_15_8_3_vue_loader_lib_index_js_vue_loader_options_welcome_vue_vue_type_style_index_0_id_7539aafa_lang_less_scoped_true____default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__node_modules_extract_text_webpack_plugin_3_0_2_extract_text_webpack_plugin_dist_loader_js_ref_8_0_node_modules_vue_style_loader_4_1_2_vue_style_loader_index_js_node_modules_css_loader_0_28_11_css_loader_index_js_ref_8_2_node_modules_vue_loader_15_8_3_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_8_3_node_modules_px2rem_loader_0_1_9_px2rem_loader_index_js_ref_8_4_node_modules_less_loader_4_1_0_less_loader_dist_cjs_js_ref_8_5_node_modules_vue_loader_15_8_3_vue_loader_lib_index_js_vue_loader_options_welcome_vue_vue_type_style_index_0_id_7539aafa_lang_less_scoped_true___);
/* unused harmony reexport namespace */
 /* unused harmony default export */ var _unused_webpack_default_export = (__WEBPACK_IMPORTED_MODULE_0__node_modules_extract_text_webpack_plugin_3_0_2_extract_text_webpack_plugin_dist_loader_js_ref_8_0_node_modules_vue_style_loader_4_1_2_vue_style_loader_index_js_node_modules_css_loader_0_28_11_css_loader_index_js_ref_8_2_node_modules_vue_loader_15_8_3_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_8_3_node_modules_px2rem_loader_0_1_9_px2rem_loader_index_js_ref_8_4_node_modules_less_loader_4_1_0_less_loader_dist_cjs_js_ref_8_5_node_modules_vue_loader_15_8_3_vue_loader_lib_index_js_vue_loader_options_welcome_vue_vue_type_style_index_0_id_7539aafa_lang_less_scoped_true____default.a); 

/***/ }),

/***/ 1688:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1061)(true);
// imports


// module
exports.push([module.i, ".home-page[data-v-7539aafa]{width:100%;background-color:#fff;overflow-y:scroll;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-flow:column nowrap;flex-flow:column nowrap;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.home-page .tk-scroll[data-v-7539aafa]{width:100%}.home-page .user-info[data-v-7539aafa]{width:90%;height:1.875rem;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-flow:row nowrap;flex-flow:row nowrap;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:start;margin-top:1.125rem;padding-top:2.25rem}.home-page .user-info .user-avatar-wrapper[data-v-7539aafa],.home-page .user-info[data-v-7539aafa]{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.home-page .user-info .user-avatar-wrapper[data-v-7539aafa]{width:1.8rem;height:1.8rem;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}.home-page .user-info .user-avatar-wrapper .user-avatar[data-v-7539aafa]{width:100%;height:100%;margin:auto}.home-page .user-info .user-name[data-v-7539aafa]{margin-left:.75rem;font-size:1.375rem;color:#111}.home-page .user-info .arrow-wrapper[data-v-7539aafa]{height:.9375rem;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;margin-left:.6rem}.home-page .user-info .arrow-wrapper .arrow[data-v-7539aafa]{height:100%;width:auto}.home-page .home-title-split[data-v-7539aafa]{width:100vw;height:2.375rem;border-bottom:.0625rem solid #f2f2f2}.home-page .home-slide[data-v-7539aafa]{margin-top:.8125rem}.home-page .home-slide-title-wrapper[data-v-7539aafa]{height:1.65rem;width:100%;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-flow:row nowrap;flex-flow:row nowrap;-webkit-box-align:center;-ms-flex-align:center;align-items:center;background:-webkit-gradient(linear,left top,right top,from(#2164d7),to(transparent));background:linear-gradient(90deg,#2164d7,transparent)}.home-page .home-slide-title-wrapper .home-slide-title[data-v-7539aafa]{width:80%;font-size:.9375rem;color:#fff;font-weight:700;margin-left:1.35rem;overflow:hidden;text-overflow:ellipsis}.home-page .notice[data-v-7539aafa]{width:90%;margin-top:.5625rem;padding-bottom:.25rem;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between}.home-page .notice .notice-left-part[data-v-7539aafa],.home-page .notice[data-v-7539aafa]{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-flow:row nowrap;flex-flow:row nowrap;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.home-page .notice .notice-left-part[data-v-7539aafa]{-webkit-box-pack:start;-ms-flex-pack:start;justify-content:start;width:81%}.home-page .notice .notice-left-part .notice-logo-wrapper[data-v-7539aafa]{height:1.5rem;width:2.625rem;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}.home-page .notice .notice-left-part .notice-logo-wrapper .notice-logo[data-v-7539aafa]{height:100%;width:auto}.home-page .notice .notice-left-part .notice-title[data-v-7539aafa]{display:inline-block;white-space:nowrap;width:calc(100% - 2.625rem);overflow:hidden;text-overflow:ellipsis;color:#666;font-size:.9rem;padding:.625rem 0}.home-page .notice .notice-right-part[data-v-7539aafa]{width:3.375rem;height:1.5rem;background-color:#eee;border-radius:.75rem;-webkit-box-orient:vertical;-ms-flex-flow:column nowrap;flex-flow:column nowrap}.home-page .notice .notice-right-part .more-notice-wrapper[data-v-7539aafa],.home-page .notice .notice-right-part[data-v-7539aafa]{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-direction:normal;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.home-page .notice .notice-right-part .more-notice-wrapper[data-v-7539aafa]{-webkit-box-orient:horizontal;-ms-flex-flow:row nowrap;flex-flow:row nowrap;height:100%}.home-page .notice .notice-right-part .more-notice[data-v-7539aafa]{color:#5b89f6}.home-page .menu-wrapper[data-v-7539aafa]{width:100%;padding:.75rem;padding-bottom:1.875rem;-webkit-box-orient:vertical;-ms-flex-flow:column nowrap;flex-flow:column nowrap;-webkit-box-align:start;-ms-flex-align:start;align-items:start;margin-top:.75rem}.home-page .menu-wrapper .menu-title-wrapper[data-v-7539aafa],.home-page .menu-wrapper[data-v-7539aafa]{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-direction:normal;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:start}.home-page .menu-wrapper .menu-title-wrapper[data-v-7539aafa]{-webkit-box-orient:horizontal;-ms-flex-flow:row nowrap;flex-flow:row nowrap;-webkit-box-align:center;-ms-flex-align:center;align-items:center;padding-left:.9375rem}.home-page .menu-wrapper .menu-title-wrapper .menu-title[data-v-7539aafa]{font-size:1.125rem;color:#333}.home-page .menu-wrapper .menu-title-wrapper .add-menu-item[data-v-7539aafa]{width:.975rem;height:.975rem;margin-left:1.125rem}.home-page .menu-wrapper .menu[data-v-7539aafa]{-webkit-box-orient:horizontal;-ms-flex-flow:row wrap;flex-flow:row wrap;width:100%}.home-page .menu-wrapper .menu .menu-item[data-v-7539aafa],.home-page .menu-wrapper .menu[data-v-7539aafa]{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-direction:normal;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.home-page .menu-wrapper .menu .menu-item[data-v-7539aafa]{margin-top:1.225rem;-webkit-box-orient:vertical;-ms-flex-flow:column nowrap;flex-flow:column nowrap;width:25%;height:5.625rem}.home-page .menu-wrapper .menu .menu-item .menu-item-logo-wrapper[data-v-7539aafa]{position:relative;width:4.5rem;height:4.5rem;-webkit-box-flex:1;-ms-flex:1;flex:1}.home-page .menu-wrapper .menu .menu-item .menu-item-logo-wrapper .menu-item-logo[data-v-7539aafa]{background:#2164d7;border-radius:.9375rem;position:absolute;height:3.75rem;width:3.75rem;top:.375rem;left:.375rem}.home-page .menu-wrapper .menu .menu-item .menu-item-logo-wrapper .menu-item-logo .icon[data-v-7539aafa]{height:2.5rem;width:2.5rem;margin-left:.625rem;margin-top:.625rem}.home-page .menu-wrapper .menu .menu-item .menu-item-logo-wrapper .menu-item-remind[data-v-7539aafa]{position:absolute;width:.9rem;height:.9rem;right:0}.home-page .menu-wrapper .menu .menu-item .menu-item-title[data-v-7539aafa]{font-size:.9rem;color:#333}", "", {"version":3,"sources":["/Users/zz/project/zhzf_platform/vue/mobile1.0/src/view/welcome.vue"],"names":[],"mappings":"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","file":"welcome.vue?vue&type=style&index=0&id=7539aafa&lang=less&scoped=true&","sourcesContent":[".home-page {\n  width: 100%;\n  background-color: white;\n  overflow-y: scroll;\n  display: flex;\n  flex-flow: column nowrap;\n  align-items: center;\n}\n\n.home-page .tk-scroll {\n  width: 100%;\n}\n\n.home-page .user-info {\n  width: 90%;\n  height: 1.875rem;\n  display: flex;\n  flex-flow: row nowrap;\n  justify-content: start;\n  align-items: center;\n  margin-top: 1.125rem;\n  padding-top: 2.25rem;\n}\n\n.home-page .user-info .user-avatar-wrapper {\n  width: 1.8rem;\n  height: 1.8rem;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.home-page .user-info .user-avatar-wrapper .user-avatar {\n  width: 100%;\n  height: 100%;\n  margin: auto;\n}\n\n.home-page .user-info .user-name {\n  margin-left: 0.75rem;\n  font-size: 1.375rem;\n  color: #111111;\n}\n\n.home-page .user-info .arrow-wrapper {\n  height: 0.9375rem;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin-left: 0.6rem;\n}\n\n.home-page .user-info .arrow-wrapper .arrow {\n  height: 100%;\n  width: auto;\n}\n\n.home-page .home-title-split {\n  width: 100vw;\n  height: 2.375rem;\n  border-bottom: 0.0625rem solid #f2f2f2;\n}\n\n.home-page .home-slide {\n  margin-top: 0.8125rem;\n}\n\n.home-page .home-slide-title-wrapper {\n  height: 1.65rem;\n  width: 100%;\n  display: flex;\n  flex-flow: row nowrap;\n  align-items: center;\n  background: linear-gradient(to right, #2164d7, transparent);\n}\n\n.home-page .home-slide-title-wrapper .home-slide-title {\n  width: 80%;\n  font-size: 0.9375rem;\n  color: white;\n  font-weight: bold;\n  margin-left: 1.35rem;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n\n.home-page .notice {\n  width: 90%;\n  margin-top: 0.5625rem;\n  padding-bottom: 0.25rem;\n  display: flex;\n  flex-flow: row nowrap;\n  justify-content: space-between;\n  align-items: center;\n}\n\n.home-page .notice .notice-left-part {\n  display: flex;\n  flex-flow: row nowrap;\n  justify-content: start;\n  align-items: center;\n  width: 81%;\n}\n\n.home-page .notice .notice-left-part .notice-logo-wrapper {\n  height: 1.5rem;\n  width: 2.625rem;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.home-page .notice .notice-left-part .notice-logo-wrapper .notice-logo {\n  height: 100%;\n  width: auto;\n}\n\n.home-page .notice .notice-left-part .notice-title {\n  display: inline-block;\n  white-space: nowrap;\n  width: calc(100% - 2.625rem);\n  overflow: hidden;\n  text-overflow: ellipsis;\n  color: #666666;\n  font-size: 0.9rem;\n  padding: 0.625rem 0;\n}\n\n.home-page .notice .notice-right-part {\n  width: 3.375rem;\n  height: 1.5rem;\n  background-color: #eeeeee;\n  border-radius: 0.75rem;\n  display: flex;\n  flex-flow: column nowrap;\n  align-items: center;\n}\n\n.home-page .notice .notice-right-part .more-notice-wrapper {\n  display: flex;\n  flex-flow: row nowrap;\n  height: 100%;\n  align-items: center;\n}\n\n.home-page .notice .notice-right-part .more-notice {\n  color: #5b89f6;\n}\n\n.home-page .menu-wrapper {\n  width: 100%;\n  padding: 0.75rem;\n  padding-bottom: 1.875rem;\n  display: flex;\n  flex-flow: column nowrap;\n  justify-content: start;\n  align-items: start;\n  margin-top: 0.75rem;\n}\n\n.home-page .menu-wrapper .menu-title-wrapper {\n  display: flex;\n  flex-flow: row nowrap;\n  justify-content: start;\n  align-items: center;\n  padding-left: 0.9375rem;\n}\n\n.home-page .menu-wrapper .menu-title-wrapper .menu-title {\n  font-size: 1.125rem;\n  color: #333333;\n}\n\n.home-page .menu-wrapper .menu-title-wrapper .add-menu-item {\n  width: 0.975rem;\n  height: 0.975rem;\n  margin-left: 1.125rem;\n}\n\n.home-page .menu-wrapper .menu {\n  display: flex;\n  flex-flow: row wrap;\n  align-items: center;\n  width: 100%;\n}\n\n.home-page .menu-wrapper .menu .menu-item {\n  margin-top: 1.225rem;\n  display: flex;\n  flex-flow: column nowrap;\n  align-items: center;\n  width: 25%;\n  height: 5.625rem;\n}\n\n.home-page .menu-wrapper .menu .menu-item .menu-item-logo-wrapper {\n  position: relative;\n  width: 4.5rem;\n  height: 4.5rem;\n  flex: 1;\n}\n\n.home-page .menu-wrapper .menu .menu-item .menu-item-logo-wrapper .menu-item-logo {\n  background: #2164d7;\n  border-radius: 0.9375rem;\n  position: absolute;\n  height: 3.75rem;\n  width: 3.75rem;\n  top: 0.375rem;\n  left: 0.375rem;\n}\n\n.home-page .menu-wrapper .menu .menu-item .menu-item-logo-wrapper .menu-item-logo .icon {\n  height: 2.5rem;\n  width: 2.5rem;\n  margin-left: 0.625rem;\n  margin-top: 0.625rem;\n}\n\n.home-page .menu-wrapper .menu .menu-item .menu-item-logo-wrapper .menu-item-remind {\n  position: absolute;\n  width: 0.9rem;\n  height: 0.9rem;\n  right: 0;\n}\n\n.home-page .menu-wrapper .menu .menu-item .menu-item-title {\n  font-size: 0.9rem;\n  color: #333333;\n}"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ 558:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__welcome_vue_vue_type_template_id_7539aafa_scoped_true___ = __webpack_require__(1675);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__welcome_vue_vue_type_script_lang_js___ = __webpack_require__(1463);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_1__welcome_vue_vue_type_script_lang_js___) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_1__welcome_vue_vue_type_script_lang_js___[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__welcome_vue_vue_type_style_index_0_id_7539aafa_lang_less_scoped_true___ = __webpack_require__(1687);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__node_modules_vue_loader_15_8_3_vue_loader_lib_runtime_componentNormalizer_js__ = __webpack_require__(0);






/* normalize component */

var component = Object(__WEBPACK_IMPORTED_MODULE_3__node_modules_vue_loader_15_8_3_vue_loader_lib_runtime_componentNormalizer_js__["a" /* default */])(
  __WEBPACK_IMPORTED_MODULE_1__welcome_vue_vue_type_script_lang_js___["default"],
  __WEBPACK_IMPORTED_MODULE_0__welcome_vue_vue_type_template_id_7539aafa_scoped_true___["a" /* render */],
  __WEBPACK_IMPORTED_MODULE_0__welcome_vue_vue_type_template_id_7539aafa_scoped_true___["b" /* staticRenderFns */],
  false,
  null,
  "7539aafa",
  null
  
)

/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ })

});