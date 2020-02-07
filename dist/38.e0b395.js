webpackJsonp([38],{

/***/ 1395:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__node_modules_babel_loader_7_1_5_babel_loader_lib_index_js_ref_2_0_node_modules_vue_loader_15_8_3_vue_loader_lib_index_js_vue_loader_options_list_vue_vue_type_script_lang_js___ = __webpack_require__(1396);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__node_modules_babel_loader_7_1_5_babel_loader_lib_index_js_ref_2_0_node_modules_vue_loader_15_8_3_vue_loader_lib_index_js_vue_loader_options_list_vue_vue_type_script_lang_js____default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__node_modules_babel_loader_7_1_5_babel_loader_lib_index_js_ref_2_0_node_modules_vue_loader_15_8_3_vue_loader_lib_index_js_vue_loader_options_list_vue_vue_type_script_lang_js___);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__node_modules_babel_loader_7_1_5_babel_loader_lib_index_js_ref_2_0_node_modules_vue_loader_15_8_3_vue_loader_lib_index_js_vue_loader_options_list_vue_vue_type_script_lang_js___) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__node_modules_babel_loader_7_1_5_babel_loader_lib_index_js_ref_2_0_node_modules_vue_loader_15_8_3_vue_loader_lib_index_js_vue_loader_options_list_vue_vue_type_script_lang_js___[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (__WEBPACK_IMPORTED_MODULE_0__node_modules_babel_loader_7_1_5_babel_loader_lib_index_js_ref_2_0_node_modules_vue_loader_15_8_3_vue_loader_lib_index_js_vue_loader_options_list_vue_vue_type_script_lang_js____default.a); 

/***/ }),

/***/ 1396:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _axios = __webpack_require__(488);

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    name: "noticeWelcomeList",
    data: function data() {
        return {
            date: '',
            searchContent: "",
            urllist: '/wgh/app/' + 'noticeList.action',
            //  urllist:"http://192.168.1.147:8080/yth_mysql/app/noticeList.action",
            params: { para: 'userid=&' + 'searchContent=&noticeType=&pageSize=20', pageNum: 1 },

            recordList: []
        };
    },
    mounted: function mounted() {
        window.searchPage = 2;
        var that = this;
        this.app_noticeList();
        $("#notice_welcome_list_html").empty();
        $("#notice_welcome_list_page #service_search").listen("quickClick", function (e) {
            window.searchPage = 2;

            that.params = { para: 'userid=&' + 'searchContent=' + that.searchContent + '&noticeType=&pageSize=20', pageNum: 1 };
            that.app_noticeList();
        });
        // initNoticeWelcomeList()
        // function initNoticeWelcomeList() {
        //     $("#notice_welcome_list_wrapper")[0].style.height = window.localInnerHeight - $("#notice_welcome_list_page .page_header").height() - $("#notice_welcome_list_page .search_div").height()-$("#notice_welcome_list_page .page_footer").height() + "px";
        //     initScroll({
        //         "wrapper": "notice_welcome_list_wrapper",
        //         "dir": "y",
        //         "bounce": false,
        //         "scrollBar": true,
        //         "pullUpLoading": function (reset) { //涓婃媺
        //
        //             if (window.searchPage > window.arrayDataLength) {
        //                 reset(true);
        //                 toast("没有更多的数据了");
        //             } else {
        //                 app_noticeList(reset, window.searchPage++, $("#notice_welcome_list_inp").val(), window.noticeTypeList, "notice_welcome_list_html");
        //             }
        //         },
        //         "pullDownLoading": function (reset) { //涓嬫媺
        //             window.searchPage = 2;
        //             app_noticeList(reset, 1, $("#notice_welcome_list_inp").val(), window.noticeTypeList, "notice_welcome_list_html");
        //         }
        //     });
        //     scrollToTop("notice_welcome_list_wrapper");
        //     window.noticeTypeName = "";
        //     app_noticeList(false, 1, "", "", "notice_welcome_list_html");
        //     $("#notice_welcome_list_page #notice_welcome_list_inp").val("");
        //     window.noticeTypeList = "";
        //     window.noticetype="";
        // }
    },

    methods: {
        app_noticeList: function app_noticeList() {
            var that = this;
            //var url="http://192.168.1.147:8080/yth_mysql/app/noticeList.action"
            _axios2.default.post(this.urllist, this.params).then(function (data) {

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

            this.$router.push({ path: '/notice-detail', query: { rowId: item.row_id } });
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
//
//
//
//
//
//
//

/***/ }),

/***/ 1397:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1610);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(1062).default
var update = add("29e8fd2a", content, true, {});

/***/ }),

/***/ 1608:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/_vue-loader@15.8.3@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/_vue-loader@15.8.3@vue-loader/lib??vue-loader-options!./src/view/notice/list.vue?vue&type=template&id=5692577e&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{"data-role":"page","id":"notice_welcome_list_page"}},[_c('tk-header',[_vm._v("\n        通知公告\n    ")]),_vm._v(" "),_c('div',{staticClass:"page_content"},[_c('div',{staticClass:"search_div"},[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.searchContent),expression:"searchContent"}],staticClass:"alert_edit_div_input",staticStyle:{"width":"80%"},attrs:{"id":"notice_welcome_list_inp","type":"text","placeholder":"请输入搜索内容"},domProps:{"value":(_vm.searchContent)},on:{"input":function($event){if($event.target.composing){ return; }_vm.searchContent=$event.target.value}}}),_vm._v(" "),_c('img',{staticClass:" ",staticStyle:{"display":"none"},attrs:{"id":"refresh_service","src":"/staitc/resources/images/icon_gray_screen.png"}}),_vm._v(" "),_c('div',{staticClass:"orange_background smaller",attrs:{"id":"service_search"}},[_vm._v("搜索")])]),_vm._v(" "),_c('tk-scroll',{staticStyle:{"background-color":"white"},attrs:{"url":_vm.urllist,"param":_vm.params,"transfer":"datas","options":{
                        pullDown: true,
                        pullUp: true
                    }},model:{value:(_vm.recordList),callback:function ($$v) {_vm.recordList=$$v},expression:"recordList"}},_vm._l((_vm.recordList),function(item){return _c('div',{staticClass:"patrol-record-item",on:{"click":function($event){return _vm.showDetail(_vm.i, item)}}},[_c('div',{staticClass:"patrol-record-item-title"},[_vm._v(_vm._s(item.title))]),_vm._v(" "),_c('div',{staticClass:"patrol-record-item-time"},[_vm._v(_vm._s(item.noticeType)+"||"+_vm._s(item.creatTime))])])}),0)],1)],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/view/notice/list.vue?vue&type=template&id=5692577e&scoped=true&
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });


/***/ }),

/***/ 1609:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__node_modules_extract_text_webpack_plugin_3_0_2_extract_text_webpack_plugin_dist_loader_js_ref_8_0_node_modules_vue_style_loader_4_1_2_vue_style_loader_index_js_node_modules_css_loader_0_28_11_css_loader_index_js_ref_8_2_node_modules_vue_loader_15_8_3_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_8_3_node_modules_px2rem_loader_0_1_9_px2rem_loader_index_js_ref_8_4_node_modules_less_loader_4_1_0_less_loader_dist_cjs_js_ref_8_5_node_modules_vue_loader_15_8_3_vue_loader_lib_index_js_vue_loader_options_list_vue_vue_type_style_index_0_id_5692577e_lang_less_scoped_true___ = __webpack_require__(1397);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__node_modules_extract_text_webpack_plugin_3_0_2_extract_text_webpack_plugin_dist_loader_js_ref_8_0_node_modules_vue_style_loader_4_1_2_vue_style_loader_index_js_node_modules_css_loader_0_28_11_css_loader_index_js_ref_8_2_node_modules_vue_loader_15_8_3_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_8_3_node_modules_px2rem_loader_0_1_9_px2rem_loader_index_js_ref_8_4_node_modules_less_loader_4_1_0_less_loader_dist_cjs_js_ref_8_5_node_modules_vue_loader_15_8_3_vue_loader_lib_index_js_vue_loader_options_list_vue_vue_type_style_index_0_id_5692577e_lang_less_scoped_true____default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__node_modules_extract_text_webpack_plugin_3_0_2_extract_text_webpack_plugin_dist_loader_js_ref_8_0_node_modules_vue_style_loader_4_1_2_vue_style_loader_index_js_node_modules_css_loader_0_28_11_css_loader_index_js_ref_8_2_node_modules_vue_loader_15_8_3_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_8_3_node_modules_px2rem_loader_0_1_9_px2rem_loader_index_js_ref_8_4_node_modules_less_loader_4_1_0_less_loader_dist_cjs_js_ref_8_5_node_modules_vue_loader_15_8_3_vue_loader_lib_index_js_vue_loader_options_list_vue_vue_type_style_index_0_id_5692577e_lang_less_scoped_true___);
/* unused harmony reexport namespace */
 /* unused harmony default export */ var _unused_webpack_default_export = (__WEBPACK_IMPORTED_MODULE_0__node_modules_extract_text_webpack_plugin_3_0_2_extract_text_webpack_plugin_dist_loader_js_ref_8_0_node_modules_vue_style_loader_4_1_2_vue_style_loader_index_js_node_modules_css_loader_0_28_11_css_loader_index_js_ref_8_2_node_modules_vue_loader_15_8_3_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_8_3_node_modules_px2rem_loader_0_1_9_px2rem_loader_index_js_ref_8_4_node_modules_less_loader_4_1_0_less_loader_dist_cjs_js_ref_8_5_node_modules_vue_loader_15_8_3_vue_loader_lib_index_js_vue_loader_options_list_vue_vue_type_style_index_0_id_5692577e_lang_less_scoped_true____default.a); 

/***/ }),

/***/ 1610:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1061)(true);
// imports


// module
exports.push([module.i, "#notice_welcome_list_wrapper[data-v-5692577e]{height:calc(100vh - 8em - 2.1875rem)}#notice_welcome_list_page .page_header_title .jszx-bar-icon-up[data-v-5692577e]{background:#fafafa}#notice_welcome_list_page .home_list_tr_first_td[data-v-5692577e]{padding:.7em;padding-left:0}#notice_welcome_list_page .search_div[data-v-5692577e]{padding:.5em 1em 0;margin:0;background:#edeef1}#notice_welcome_list_page #refresh_service[data-v-5692577e]{width:2em;height:2em;padding:.4em .2em 0 .8em;float:right}#notice_welcome_list_page #service_search[data-v-5692577e]{width:4em;text-align:center;color:#fff;margin-top:.7em;float:right;line-height:2.2em;border-radius:.3em}#notice_welcome_list_page .search_div[data-v-5692577e]{height:4em}#notice_welcome_list_page .home_list_tr_first_td span[data-v-5692577e]{margin-left:.5em}.red_round_rank[data-v-5692577e]{width:.5em;height:.5em;background:red;border-radius:.5em;position:relative;float:left;border:.125rem solid #fff}.patrol-record-item[data-v-5692577e]{height:5.25rem;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-flow:column;flex-flow:column;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:start;-ms-flex-align:start;align-items:start;background-color:#fff;border-bottom:.0625rem solid #ccc;padding-left:1.5rem}.patrol-record-item .patrol-record-item-title[data-v-5692577e]{font-size:1.125rem;overflow:hidden;white-space:nowrap;text-overflow:ellipsis;width:calc(100% - 1.5rem)}.patrol-record-item .patrol-record-item-time[data-v-5692577e]{margin-top:.875rem;font-size:.75rem;color:#999}", "", {"version":3,"sources":["/Users/zz/project/zhzf_platform/vue/mobile1.0/src/view/notice/list.vue"],"names":[],"mappings":"AAAA,8CACE,oCAAqC,CACvC,AAEA,gFACE,kBAAmB,CACrB,AAEA,kEACE,aAAc,AACd,cAAiB,CACnB,AAEA,uDACE,mBAA0B,AAC1B,SAAW,AACX,kBAAmB,CACrB,AAEA,4DACE,UAAU,AACV,WAAW,AACX,yBAA8B,AAC9B,WAAY,CACd,AAEA,2DACE,UAAU,AACV,kBAAkB,AAClB,WAAc,AACd,gBAAiB,AACjB,YAAY,AACZ,kBAAkB,AAClB,kBAAoB,CACtB,AAEA,uDACE,UAAW,CACb,AAEA,uEACE,gBAAkB,CACpB,AAEA,iCACE,WAAY,AACZ,YAAa,AACb,eAAe,AACf,mBAAoB,AACpB,kBAAkB,AAClB,WAAW,AAGX,yBAA8B,CAChC,AAEA,qCACE,eAAe,AACf,oBAAa,AAAb,oBAAa,AAAb,aAAa,AACb,4BAAiB,AAAjB,6BAAiB,AAAjB,qBAAiB,AAAjB,iBAAiB,AACjB,wBAAuB,AAAvB,qBAAuB,AAAvB,uBAAuB,AACvB,wBAAkB,AAAlB,qBAAkB,AAAlB,kBAAkB,AAClB,sBAAuB,AACvB,kCAAsC,AACtC,mBAAoB,CACtB,AAEA,+DACE,mBAAmB,AACnB,gBAAgB,AAChB,mBAAmB,AACnB,uBAAuB,AACvB,yBAA0B,CAC5B,AAEA,8DACE,mBAAoB,AACpB,iBAAkB,AAClB,UAAc,CAChB","file":"list.vue?vue&type=style&index=0&id=5692577e&lang=less&scoped=true&","sourcesContent":["#notice_welcome_list_wrapper {\n  height: calc(100vh - 8em - 2.1875rem);\n}\n\n#notice_welcome_list_page .page_header_title .jszx-bar-icon-up {\n  background: #fafafa;\n}\n\n#notice_welcome_list_page .home_list_tr_first_td {\n  padding: 0.7em;\n  padding-left: 0em;\n}\n\n#notice_welcome_list_page .search_div {\n  padding: 0.5em 1em 0em 1em;\n  margin: 0em;\n  background: #edeef1;\n}\n\n#notice_welcome_list_page #refresh_service {\n  width: 2em;\n  height: 2em;\n  padding: 0.4em 0.2em 0em 0.8em;\n  float: right;\n}\n\n#notice_welcome_list_page #service_search {\n  width: 4em;\n  text-align: center;\n  color: #ffffff;\n  margin-top: 0.7em;\n  float: right;\n  line-height: 2.2em;\n  border-radius: 0.3em;\n}\n\n#notice_welcome_list_page .search_div {\n  height: 4em;\n}\n\n#notice_welcome_list_page .home_list_tr_first_td span {\n  margin-left: 0.5em;\n}\n\n.red_round_rank {\n  width: 0.5em;\n  height: 0.5em;\n  background: red;\n  border-radius: 0.5em;\n  position: relative;\n  float: left;\n  /* margin-right: 2.0em;\n        margin-top: -3.5em; */\n  border: 0.125rem solid #ffffff;\n}\n\n.patrol-record-item {\n  height: 5.25rem;\n  display: flex;\n  flex-flow: column;\n  justify-content: center;\n  align-items: start;\n  background-color: white;\n  border-bottom: 0.0625rem solid #cccccc;\n  padding-left: 1.5rem;\n}\n\n.patrol-record-item .patrol-record-item-title {\n  font-size: 1.125rem;\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  width: calc(100% - 1.5rem);\n}\n\n.patrol-record-item .patrol-record-item-time {\n  margin-top: 0.875rem;\n  font-size: 0.75rem;\n  color: #999999;\n}"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ 536:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__list_vue_vue_type_template_id_5692577e_scoped_true___ = __webpack_require__(1608);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__list_vue_vue_type_script_lang_js___ = __webpack_require__(1395);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_1__list_vue_vue_type_script_lang_js___) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_1__list_vue_vue_type_script_lang_js___[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__list_vue_vue_type_style_index_0_id_5692577e_lang_less_scoped_true___ = __webpack_require__(1609);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__node_modules_vue_loader_15_8_3_vue_loader_lib_runtime_componentNormalizer_js__ = __webpack_require__(0);






/* normalize component */

var component = Object(__WEBPACK_IMPORTED_MODULE_3__node_modules_vue_loader_15_8_3_vue_loader_lib_runtime_componentNormalizer_js__["a" /* default */])(
  __WEBPACK_IMPORTED_MODULE_1__list_vue_vue_type_script_lang_js___["default"],
  __WEBPACK_IMPORTED_MODULE_0__list_vue_vue_type_template_id_5692577e_scoped_true___["a" /* render */],
  __WEBPACK_IMPORTED_MODULE_0__list_vue_vue_type_template_id_5692577e_scoped_true___["b" /* staticRenderFns */],
  false,
  null,
  "5692577e",
  null
  
)

/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ })

});