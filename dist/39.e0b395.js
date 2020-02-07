webpackJsonp([39],{

/***/ 1392:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__node_modules_babel_loader_7_1_5_babel_loader_lib_index_js_ref_2_0_node_modules_vue_loader_15_8_3_vue_loader_lib_index_js_vue_loader_options_detail_vue_vue_type_script_lang_js___ = __webpack_require__(1393);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__node_modules_babel_loader_7_1_5_babel_loader_lib_index_js_ref_2_0_node_modules_vue_loader_15_8_3_vue_loader_lib_index_js_vue_loader_options_detail_vue_vue_type_script_lang_js____default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__node_modules_babel_loader_7_1_5_babel_loader_lib_index_js_ref_2_0_node_modules_vue_loader_15_8_3_vue_loader_lib_index_js_vue_loader_options_detail_vue_vue_type_script_lang_js___);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__node_modules_babel_loader_7_1_5_babel_loader_lib_index_js_ref_2_0_node_modules_vue_loader_15_8_3_vue_loader_lib_index_js_vue_loader_options_detail_vue_vue_type_script_lang_js___) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__node_modules_babel_loader_7_1_5_babel_loader_lib_index_js_ref_2_0_node_modules_vue_loader_15_8_3_vue_loader_lib_index_js_vue_loader_options_detail_vue_vue_type_script_lang_js___[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (__WEBPACK_IMPORTED_MODULE_0__node_modules_babel_loader_7_1_5_babel_loader_lib_index_js_ref_2_0_node_modules_vue_loader_15_8_3_vue_loader_lib_index_js_vue_loader_options_detail_vue_vue_type_script_lang_js____default.a); 

/***/ }),

/***/ 1393:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _axios = __webpack_require__(488);

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    name: "noticeDetail",
    mounted: function mounted() {
        //totalDigitalRemind();
        window.searchPage = 2;

        this.noticeContentId = this.$route.query.rowId;
        this.app_noticeDetail();
        //  $("#notice_detail_page").live("pageshow", function () {
        //   initNoticeDetail();
        /*杩斿洖*/

        $("#downtest").on("click", "div", function (e) {
            var href = window.downloadUrl + $(e.currentTarget).attr("href");
            var name = $(e.currentTarget).text();
            isFileExist(name, window.cacheDirectory, function (result) {
                if (result) {
                    jsict.appManager.openLocalFile(function () {}, function () {}, window.cacheDirectoryPath + "/" + name);
                } else {
                    showConfirm("<p style='padding:1em;'>确认下载文档吗？</p>", null, null, function () {
                        showLoading("正在下载....");

                        var fileTransfer = new FileTransfer();
                        fileTransfer.download(encodeURI(href), window.cacheDirectoryPath + "/" + name, function (entry) {
                            hideLoading();
                            toast("下载成功！");

                            jsict.appManager.openLocalFile(function () {}, function () {}, window.cacheDirectoryPath + "/" + name);
                        }, function (error) {
                            hideLoading();
                            toast("下载失败，请重试");
                        });
                    });
                }
            });
        });
        //   });
        function initNoticeDetail() {
            $("#notice_detail_wrapper")[0].style.height = window.localInnerHeight - $("#notice_detail_page .page_header").height() + "px";
            initScroll({
                "wrapper": "notice_detail_wrapper",
                "dir": "y",
                "bounce": false,
                "scrollBar": true
            });
            $("#notice_detail_title").html("");
            $("#notice_detail_type").html("");
            $("#notice_detail_html").html("");
            $("#downtest").html("");
            scrollToTop("notice_detail_wrapper");
        }
    },

    methods: {
        app_noticeDetail: function app_noticeDetail() {
            var obj = "";
            // obj += toJson("userid", $.trim(window.localStorage.userId)) + "&";
            // obj += toJson("row_id", window.noticeContentId);
            // var url='/wgh/app/' + 'app_noticeDetail.action';
            //  var url="http://192.168.1.147:8080/yth_mysql/app/app_noticeDetail.action";
            var url = '/wgh/app' + '/app_noticeDetail.action';
            var params = { para: 'userid=&row_id=' + this.noticeContentId + '' };
            _axios2.default.post(url, params).then(function (data) {
                if (data.code == "0") {
                    var array = data.datas[0];
                    $("#notice_detail_title").html(array.title);
                    $("#notice_detail_type").html(array.noticeType + '&nbsp;&nbsp;&nbsp;' + array.creatTime);
                    $("#notice_detail_html").html(array.content);
                    var h = $("#notice_detail_html").find("a");
                    $("#notice_detail_html").find("p").css("text-align", "left");
                    var html = '附件下载';
                    var array = [];
                    if (h.length > 0) {
                        for (var i = 0; i < h.length; i++) {
                            //$("#notice_detail_html").find("a").parent().eq(i).hide();
                            var num = i + 1;
                            html += '<div href="' + h.eq(i).attr("href") + '" style="text-align: left;margin-left: 20pt;">';
                            html += h.eq(i).text();
                            html += '   </div>';
                            var $html = $("#downtest").html(html);
                        }
                    }
                } else {
                    toast(data.message);
                }
            });
            // doPost("app_noticeDetail.action", obj, function (data) {
            //     if (data.code == 0) {
            //         var array = data.datas[0];
            //         $("#notice_detail_title").html(array.title);
            //         $("#notice_detail_type").html(array.noticeType + '&nbsp;&nbsp;&nbsp;' + array.creatTime);
            //         $("#notice_detail_html").html(array.content);
            //         var h = $("#notice_detail_html").find("a");
            //         $("#notice_detail_html").find("p").css("text-align","left");
            //         var html = '附件下载';
            //         var array = [];
            //         if(h.length>0){
            //             for (var i = 0; i < h.length; i++) {
            //                 //$("#notice_detail_html").find("a").parent().eq(i).hide();
            //                 var num = i+1;
            //                 html += '<div href="'+ h.eq(i).attr("href") +'" style="text-align: left;margin-left: 20pt;">';
            //                 html +=  h.eq(i).text() ;
            //                 html += '   </div>';
            //                 var $html = $("#downtest").html(html);
            //             }
            //         }
            //
            //     } else {
            //         toast(data.message);
            //     }
            // }, "");
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
//
//
//

/***/ }),

/***/ 1394:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1607);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(1062).default
var update = add("859a3c3e", content, true, {});

/***/ }),

/***/ 1605:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/_vue-loader@15.8.3@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/_vue-loader@15.8.3@vue-loader/lib??vue-loader-options!./src/view/notice/detail.vue?vue&type=template&id=f942dda2&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{"data-role":"page","id":"notice_detail_page"}},[_c('tk-header',[_vm._v("\n        通知公告详情\n\n    ")]),_vm._v(" "),_c('tk-scroll',[_c('div',{staticClass:"jszx-wrapper",attrs:{"id":"notice_detail_wrapper"}},[_c('div',{staticClass:"jszx-scroller"},[_c('div',{staticClass:"html_margin white_background"},[_c('p',{attrs:{"id":"notice_detail_title"}}),_vm._v(" "),_c('p',{staticClass:"gray_font small",staticStyle:{"padding-top":"0em"},attrs:{"id":"notice_detail_type"}}),_vm._v(" "),_c('div',{attrs:{"id":"notice_detail_html"}}),_vm._v(" "),_c('div',{attrs:{"id":"downtest"}})])])])])],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/view/notice/detail.vue?vue&type=template&id=f942dda2&scoped=true&
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });


/***/ }),

/***/ 1606:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__node_modules_extract_text_webpack_plugin_3_0_2_extract_text_webpack_plugin_dist_loader_js_ref_6_0_node_modules_vue_style_loader_4_1_2_vue_style_loader_index_js_node_modules_css_loader_0_28_11_css_loader_index_js_ref_6_2_node_modules_vue_loader_15_8_3_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_6_3_node_modules_px2rem_loader_0_1_9_px2rem_loader_index_js_ref_6_4_node_modules_vue_loader_15_8_3_vue_loader_lib_index_js_vue_loader_options_detail_vue_vue_type_style_index_0_id_f942dda2_scoped_true_lang_css___ = __webpack_require__(1394);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__node_modules_extract_text_webpack_plugin_3_0_2_extract_text_webpack_plugin_dist_loader_js_ref_6_0_node_modules_vue_style_loader_4_1_2_vue_style_loader_index_js_node_modules_css_loader_0_28_11_css_loader_index_js_ref_6_2_node_modules_vue_loader_15_8_3_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_6_3_node_modules_px2rem_loader_0_1_9_px2rem_loader_index_js_ref_6_4_node_modules_vue_loader_15_8_3_vue_loader_lib_index_js_vue_loader_options_detail_vue_vue_type_style_index_0_id_f942dda2_scoped_true_lang_css____default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__node_modules_extract_text_webpack_plugin_3_0_2_extract_text_webpack_plugin_dist_loader_js_ref_6_0_node_modules_vue_style_loader_4_1_2_vue_style_loader_index_js_node_modules_css_loader_0_28_11_css_loader_index_js_ref_6_2_node_modules_vue_loader_15_8_3_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_6_3_node_modules_px2rem_loader_0_1_9_px2rem_loader_index_js_ref_6_4_node_modules_vue_loader_15_8_3_vue_loader_lib_index_js_vue_loader_options_detail_vue_vue_type_style_index_0_id_f942dda2_scoped_true_lang_css___);
/* unused harmony reexport namespace */
 /* unused harmony default export */ var _unused_webpack_default_export = (__WEBPACK_IMPORTED_MODULE_0__node_modules_extract_text_webpack_plugin_3_0_2_extract_text_webpack_plugin_dist_loader_js_ref_6_0_node_modules_vue_style_loader_4_1_2_vue_style_loader_index_js_node_modules_css_loader_0_28_11_css_loader_index_js_ref_6_2_node_modules_vue_loader_15_8_3_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_6_3_node_modules_px2rem_loader_0_1_9_px2rem_loader_index_js_ref_6_4_node_modules_vue_loader_15_8_3_vue_loader_lib_index_js_vue_loader_options_detail_vue_vue_type_style_index_0_id_f942dda2_scoped_true_lang_css____default.a); 

/***/ }),

/***/ 1607:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1061)(true);
// imports


// module
exports.push([module.i, "#notice_detail_page div p[data-v-f942dda2]{text-align:center;padding:.8em}#notice_detail_page .img_wrapper img[data-v-f942dda2],#notice_detail_page p img[data-v-f942dda2]{width:100%}#notice_detail_page #notice_detail_html[data-v-f942dda2]{padding:0 1em;line-height:1.5em}#down div[data-v-f942dda2]{text-align:left;margin-left:20pt}", "", {"version":3,"sources":["/Users/zz/project/zhzf_platform/vue/mobile1.0/src/view/notice/detail.vue"],"names":[],"mappings":"AAAA,2CACE,kBAAkB,AAClB,YAAc,CAChB,AAEA,iGAEE,UAAW,CACb,AAEA,yDACE,cAAgB,AAChB,iBAAkB,CACpB,AAEA,2BACE,gBAAgB,AAChB,gBAAiB,CACnB","file":"detail.vue?vue&type=style&index=0&id=f942dda2&scoped=true&lang=css&","sourcesContent":["#notice_detail_page div p {\n  text-align: center;\n  padding: 0.8em;\n}\n\n#notice_detail_page .img_wrapper img,\n#notice_detail_page p img {\n  width: 100%;\n}\n\n#notice_detail_page #notice_detail_html {\n  padding: 0em 1em;\n  line-height: 1.5em;\n}\n\n#down div {\n  text-align: left;\n  margin-left: 20pt;\n}"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ 535:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__detail_vue_vue_type_template_id_f942dda2_scoped_true___ = __webpack_require__(1605);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__detail_vue_vue_type_script_lang_js___ = __webpack_require__(1392);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_1__detail_vue_vue_type_script_lang_js___) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_1__detail_vue_vue_type_script_lang_js___[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__detail_vue_vue_type_style_index_0_id_f942dda2_scoped_true_lang_css___ = __webpack_require__(1606);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__node_modules_vue_loader_15_8_3_vue_loader_lib_runtime_componentNormalizer_js__ = __webpack_require__(0);






/* normalize component */

var component = Object(__WEBPACK_IMPORTED_MODULE_3__node_modules_vue_loader_15_8_3_vue_loader_lib_runtime_componentNormalizer_js__["a" /* default */])(
  __WEBPACK_IMPORTED_MODULE_1__detail_vue_vue_type_script_lang_js___["default"],
  __WEBPACK_IMPORTED_MODULE_0__detail_vue_vue_type_template_id_f942dda2_scoped_true___["a" /* render */],
  __WEBPACK_IMPORTED_MODULE_0__detail_vue_vue_type_template_id_f942dda2_scoped_true___["b" /* staticRenderFns */],
  false,
  null,
  "f942dda2",
  null
  
)

/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ })

});