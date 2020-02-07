webpackJsonp([55],{

/***/ 1255:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__node_modules_babel_loader_7_1_5_babel_loader_lib_index_js_ref_2_0_node_modules_vue_loader_15_8_3_vue_loader_lib_index_js_vue_loader_options_detail_vue_vue_type_script_lang_js___ = __webpack_require__(1256);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__node_modules_babel_loader_7_1_5_babel_loader_lib_index_js_ref_2_0_node_modules_vue_loader_15_8_3_vue_loader_lib_index_js_vue_loader_options_detail_vue_vue_type_script_lang_js____default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__node_modules_babel_loader_7_1_5_babel_loader_lib_index_js_ref_2_0_node_modules_vue_loader_15_8_3_vue_loader_lib_index_js_vue_loader_options_detail_vue_vue_type_script_lang_js___);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__node_modules_babel_loader_7_1_5_babel_loader_lib_index_js_ref_2_0_node_modules_vue_loader_15_8_3_vue_loader_lib_index_js_vue_loader_options_detail_vue_vue_type_script_lang_js___) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__node_modules_babel_loader_7_1_5_babel_loader_lib_index_js_ref_2_0_node_modules_vue_loader_15_8_3_vue_loader_lib_index_js_vue_loader_options_detail_vue_vue_type_script_lang_js___[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (__WEBPACK_IMPORTED_MODULE_0__node_modules_babel_loader_7_1_5_babel_loader_lib_index_js_ref_2_0_node_modules_vue_loader_15_8_3_vue_loader_lib_index_js_vue_loader_options_detail_vue_vue_type_script_lang_js____default.a); 

/***/ }),

/***/ 1256:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    name: "peopleDetail",
    data: function data() {
        return {};
    },
    created: function created() {},
    mounted: function mounted() {
        var that = this;
        console.log(this.$route.query.data);
        // $("#people_detail_page").live("pageshow", function () {
        initPeopleDetail();
        //返回
        $("#people_detail_page .back-button").listen("quickClick", function (e) {
            // $.mobile.changePage("../phone/peoplePhone.html");
            that.$router.back(-1);
        });
        $(".sort_box").on("click", ".sort_list", function (e) {
            var phone = $(e.currentTarget).attr("mobile");
        });

        // });

        function initPeopleDetail() {
            $("#people_detail_wrapper")[0].style.height = window.localInnerHeight - $("#people_detail_page .page_header").height() - $("#people_detail_page .page_footer").height(); //- $("#people_detail_page .search_div").height()
            -$("#people_detail_page .page_footer").height() + "px";
            // initScroll({
            //     "wrapper": "people_detail_wrapper",
            //     "dir": "y",
            //     "bounce": false,
            //     "scrollBar": false
            // });
            window.info = '{"code":"0","datas":[{"deptName":"系统管理","userList":[{"phone":" ","tel":" ","id":"402880e92db726b5012db729f65f0001","userName":"系统管理员"}],"userCount":1,"id":"402880e92db5d2ee012db601b2220004"},{"deptName":"江苏省","userList":[],"userCount":0,"children":[{"children":[{"children":[{"children":[{"children":[{"id":"002002001001001001","text":"走访三级网格测试"}],"id":"002002001001001","text":"走访二级网格测试","state":"closed"}],"id":"002002001001","text":"丁岗镇(新能源产业园)","state":"closed"},{"id":"002002001002","text":"大路镇"},{"id":"002002001003","text":"姚桥镇"},{"id":"002002001004","text":"大港街道"},{"id":"002002001005","text":"丁卯街道(大学科技园)"}],"id":"002002001","text":"吴江平望","state":"closed"}],"id":"002002","text":"镇江市","state":"closed"}],"id":"8a8184b55b45f27c015b474e66520055"}]}';
            //scrollToTop("people_detail_wrapper");
            $("#people_phone_html").empty();
            $("#people_phone_inp").val("");

            var phone = that.$route.query.data.mobile;
            var tel = that.$route.query.data.tel;
            var duty = that.$route.query.data.duty;
            var peoplename = that.$route.query.data.display_name;
            $("#peopleName").text(peoplename);

            if (phone) {
                $("#peoplePhone span").text(phone);
            } else {
                $("#peoplePhone span").text("");
            }
            if (tel) {
                $("#peopleTel span").text(tel);
            } else {
                $("#peopleTel span").text("");
            }
            if (duty) {
                $("#peopleDuty span").text(duty);
            } else {
                $("#peopleDuty span").text("");
            }
            if (!phone) {
                $(".callphone").hide();
            } else {
                $(".callphone").show();
            }
            if (!tel) {
                $(".calltel").hide();
            } else {
                $(".calltel").show();
            }
        }

        $(".callphone").on("click", function () {
            showContentAlert('确定要给：' + window.peoplename + "，拨打电话吗<br/>温馨提醒，无SIM卡无法拨打电话哦", function () {}, function () {
                jsict.util.call(function () {
                    console.log("电话拨打ok");
                }, function (err) {
                    console.log("电话拨打失败" + err);
                }, window.phone);
            }, "拨打");
        });
        $(".calltel").on("click", function () {
            showContentAlert('确定要给：' + window.peoplename + "，拨打电话吗<br/>温馨提醒，无SIM卡无法拨打电话哦", function () {}, function () {
                jsict.util.call(function () {
                    console.log("电话拨打ok");
                }, function (err) {
                    console.log("电话拨打失败" + err);
                }, window.tel);
            }, "拨打");
        });
    },

    methods: {
        toChat: function toChat() {
            this.$router.push('/chatRoom');
        }
    }
};

/***/ }),

/***/ 1257:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1470);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(1062).default
var update = add("524b0f24", content, true, {});

/***/ }),

/***/ 1468:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/_vue-loader@15.8.3@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/_vue-loader@15.8.3@vue-loader/lib??vue-loader-options!./src/view/address/detail.vue?vue&type=template&id=91abd072&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{"data-role":"page","id":"people_detail_page"}},[_c('tk-header',[_vm._v("\n        联系人详情\n    ")]),_vm._v(" "),_vm._m(0)],1)}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"page_content"},[_c('div',{staticClass:"jszx-wrapper",attrs:{"id":"people_detail_wrapper"}},[_c('div',{staticClass:"jszx-scroller"},[_c('div',[_c('div',{staticStyle:{"text-align":"center","background":"#fff","height":"6em"}},[_c('img',{staticStyle:{"margin-top":"1em"}})]),_vm._v(" "),_c('div',{staticClass:"name",attrs:{"id":"peopleName"}})]),_vm._v(" "),_c('div',{staticClass:"sxsplit"}),_vm._v(" "),_c('div',{attrs:{"id":"peoplePhone"}},[_vm._v("手机:"),_c('span'),_vm._v(" "),_c('img',{staticClass:"callphone",attrs:{"src":"/static/resources/images/call.png"}})]),_vm._v(" "),_c('div',{attrs:{"id":"peopleTel"}},[_vm._v("固定电话:"),_c('span'),_vm._v(" "),_c('img',{staticClass:"calltel",attrs:{"src":"/static/resources/images/call.png"}})]),_vm._v(" "),_c('div',{attrs:{"id":"peopleDuty"}},[_vm._v("职务:"),_c('span')])])])])}]


// CONCATENATED MODULE: ./src/view/address/detail.vue?vue&type=template&id=91abd072&scoped=true&
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });


/***/ }),

/***/ 1469:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__node_modules_extract_text_webpack_plugin_3_0_2_extract_text_webpack_plugin_dist_loader_js_ref_8_0_node_modules_vue_style_loader_4_1_2_vue_style_loader_index_js_node_modules_css_loader_0_28_11_css_loader_index_js_ref_8_2_node_modules_vue_loader_15_8_3_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_8_3_node_modules_px2rem_loader_0_1_9_px2rem_loader_index_js_ref_8_4_node_modules_less_loader_4_1_0_less_loader_dist_cjs_js_ref_8_5_node_modules_vue_loader_15_8_3_vue_loader_lib_index_js_vue_loader_options_detail_vue_vue_type_style_index_0_id_91abd072_lang_less_scoped_true___ = __webpack_require__(1257);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__node_modules_extract_text_webpack_plugin_3_0_2_extract_text_webpack_plugin_dist_loader_js_ref_8_0_node_modules_vue_style_loader_4_1_2_vue_style_loader_index_js_node_modules_css_loader_0_28_11_css_loader_index_js_ref_8_2_node_modules_vue_loader_15_8_3_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_8_3_node_modules_px2rem_loader_0_1_9_px2rem_loader_index_js_ref_8_4_node_modules_less_loader_4_1_0_less_loader_dist_cjs_js_ref_8_5_node_modules_vue_loader_15_8_3_vue_loader_lib_index_js_vue_loader_options_detail_vue_vue_type_style_index_0_id_91abd072_lang_less_scoped_true____default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__node_modules_extract_text_webpack_plugin_3_0_2_extract_text_webpack_plugin_dist_loader_js_ref_8_0_node_modules_vue_style_loader_4_1_2_vue_style_loader_index_js_node_modules_css_loader_0_28_11_css_loader_index_js_ref_8_2_node_modules_vue_loader_15_8_3_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_8_3_node_modules_px2rem_loader_0_1_9_px2rem_loader_index_js_ref_8_4_node_modules_less_loader_4_1_0_less_loader_dist_cjs_js_ref_8_5_node_modules_vue_loader_15_8_3_vue_loader_lib_index_js_vue_loader_options_detail_vue_vue_type_style_index_0_id_91abd072_lang_less_scoped_true___);
/* unused harmony reexport namespace */
 /* unused harmony default export */ var _unused_webpack_default_export = (__WEBPACK_IMPORTED_MODULE_0__node_modules_extract_text_webpack_plugin_3_0_2_extract_text_webpack_plugin_dist_loader_js_ref_8_0_node_modules_vue_style_loader_4_1_2_vue_style_loader_index_js_node_modules_css_loader_0_28_11_css_loader_index_js_ref_8_2_node_modules_vue_loader_15_8_3_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_8_3_node_modules_px2rem_loader_0_1_9_px2rem_loader_index_js_ref_8_4_node_modules_less_loader_4_1_0_less_loader_dist_cjs_js_ref_8_5_node_modules_vue_loader_15_8_3_vue_loader_lib_index_js_vue_loader_options_detail_vue_vue_type_style_index_0_id_91abd072_lang_less_scoped_true____default.a); 

/***/ }),

/***/ 1470:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1061)(true);
// imports


// module
exports.push([module.i, "#people_detail_page .search_div[data-v-91abd072]{height:3.2em;background:#edeef1}#people_detail_page #people_phone_inp[data-v-91abd072]{width:75%;float:left;margin-top:.5em}#people_detail_page #people_phone_search[data-v-91abd072]{width:4em;text-align:center;color:#fff;margin-top:1em;float:right;line-height:2.2em;border-radius:.3em}#people_detail_page .page_content p[data-v-91abd072],#people_detail_page table tr td[data-v-91abd072]:first-child{padding:1em;text-align:left}#people_detail_page table[data-v-91abd072]{margin-left:0}#people_detail_page table tr td[data-v-91abd072]:last-child{padding-right:1em;width:2em}#people_detail_page .page_content p[data-v-91abd072]{background:#f3f3f3}#people_detail_page .phone_upback_img[data-v-91abd072]{width:.5em;padding:0 .5em}#peopleName[data-v-91abd072]{height:3em;background-color:#fff;text-align:center}#peopleDuty[data-v-91abd072],#peoplePhone[data-v-91abd072],#peopleTel[data-v-91abd072]{height:5em;background-color:#fff;line-height:5em;padding-left:2em;border-bottom:.0625rem solid #ddd}.sxsplit[data-v-91abd072]{height:1em;background-color:#ddd}.callphone[data-v-91abd072],.calltel[data-v-91abd072]{float:right;margin-top:1.8em;margin-right:1em;width:1.375rem}", "", {"version":3,"sources":["/Users/zz/project/zhzf_platform/vue/mobile1.0/src/view/address/detail.vue"],"names":[],"mappings":"AAAA,iDACE,aAAa,AACb,kBAAmB,CACrB,AAEA,uDACE,UAAU,AACV,WAAW,AACX,eAAiB,CACnB,AAEA,0DACE,UAAU,AACV,kBAAkB,AAClB,WAAc,AACd,eAAe,AACf,YAAY,AACZ,kBAAkB,AAClB,kBAAoB,CACtB,AAEA,kHAEE,YAAY,AACZ,eAAgB,CAClB,AAEA,2CACE,aAAgB,CAClB,AAEA,4DACE,kBAAkB,AAClB,SAAU,CACZ,AAEA,qDACE,kBAAmB,CACrB,AAEA,uDACE,WAAY,AACZ,cAAkB,CACpB,AAEA,6BACE,WAAW,AACX,sBAAyB,AACzB,iBAAkB,CACpB,AAEA,uFAGE,WAAW,AACX,sBAAyB,AACzB,gBAAgB,AAChB,iBAAiB,AACjB,iCAAmC,CACrC,AAEA,0BACE,WAAW,AACX,qBAAsB,CACxB,AAEA,sDAEE,YAAY,AACZ,iBAAiB,AACjB,iBAAiB,AACjB,cAAe,CACjB","file":"detail.vue?vue&type=style&index=0&id=91abd072&lang=less&scoped=true&","sourcesContent":["#people_detail_page .search_div {\n  height: 3.2em;\n  background: #edeef1;\n}\n\n#people_detail_page #people_phone_inp {\n  width: 75%;\n  float: left;\n  margin-top: 0.5em;\n}\n\n#people_detail_page #people_phone_search {\n  width: 4em;\n  text-align: center;\n  color: #ffffff;\n  margin-top: 1em;\n  float: right;\n  line-height: 2.2em;\n  border-radius: 0.3em;\n}\n\n#people_detail_page table tr td:first-child,\n#people_detail_page .page_content p {\n  padding: 1em;\n  text-align: left;\n}\n\n#people_detail_page table {\n  margin-left: 0em;\n}\n\n#people_detail_page table tr td:last-child {\n  padding-right: 1em;\n  width: 2em;\n}\n\n#people_detail_page .page_content p {\n  background: #f3f3f3;\n}\n\n#people_detail_page .phone_upback_img {\n  width: 0.5em;\n  padding: 0em 0.5em;\n}\n\n#peopleName {\n  height: 3em;\n  background-color: #ffffff;\n  text-align: center;\n}\n\n#peoplePhone,\n#peopleTel,\n#peopleDuty {\n  height: 5em;\n  background-color: #ffffff;\n  line-height: 5em;\n  padding-left: 2em;\n  border-bottom: 0.0625rem solid #ddd;\n}\n\n.sxsplit {\n  height: 1em;\n  background-color: #ddd;\n}\n\n.callphone,\n.calltel {\n  float: right;\n  margin-top: 1.8em;\n  margin-right: 1em;\n  width: 1.375rem;\n}"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ 495:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__detail_vue_vue_type_template_id_91abd072_scoped_true___ = __webpack_require__(1468);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__detail_vue_vue_type_script_lang_js___ = __webpack_require__(1255);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_1__detail_vue_vue_type_script_lang_js___) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_1__detail_vue_vue_type_script_lang_js___[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__detail_vue_vue_type_style_index_0_id_91abd072_lang_less_scoped_true___ = __webpack_require__(1469);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__node_modules_vue_loader_15_8_3_vue_loader_lib_runtime_componentNormalizer_js__ = __webpack_require__(0);






/* normalize component */

var component = Object(__WEBPACK_IMPORTED_MODULE_3__node_modules_vue_loader_15_8_3_vue_loader_lib_runtime_componentNormalizer_js__["a" /* default */])(
  __WEBPACK_IMPORTED_MODULE_1__detail_vue_vue_type_script_lang_js___["default"],
  __WEBPACK_IMPORTED_MODULE_0__detail_vue_vue_type_template_id_91abd072_scoped_true___["a" /* render */],
  __WEBPACK_IMPORTED_MODULE_0__detail_vue_vue_type_template_id_91abd072_scoped_true___["b" /* staticRenderFns */],
  false,
  null,
  "91abd072",
  null
  
)

/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ })

});