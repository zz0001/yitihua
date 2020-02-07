webpackJsonp([196],{

/***/ 1226:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__node_modules_babel_loader_7_1_5_babel_loader_lib_index_js_ref_2_0_node_modules_vue_loader_15_8_3_vue_loader_lib_index_js_vue_loader_options_chooseApprover_vue_vue_type_script_lang_js___ = __webpack_require__(1227);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__node_modules_babel_loader_7_1_5_babel_loader_lib_index_js_ref_2_0_node_modules_vue_loader_15_8_3_vue_loader_lib_index_js_vue_loader_options_chooseApprover_vue_vue_type_script_lang_js____default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__node_modules_babel_loader_7_1_5_babel_loader_lib_index_js_ref_2_0_node_modules_vue_loader_15_8_3_vue_loader_lib_index_js_vue_loader_options_chooseApprover_vue_vue_type_script_lang_js___);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__node_modules_babel_loader_7_1_5_babel_loader_lib_index_js_ref_2_0_node_modules_vue_loader_15_8_3_vue_loader_lib_index_js_vue_loader_options_chooseApprover_vue_vue_type_script_lang_js___) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__node_modules_babel_loader_7_1_5_babel_loader_lib_index_js_ref_2_0_node_modules_vue_loader_15_8_3_vue_loader_lib_index_js_vue_loader_options_chooseApprover_vue_vue_type_script_lang_js___[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (__WEBPACK_IMPORTED_MODULE_0__node_modules_babel_loader_7_1_5_babel_loader_lib_index_js_ref_2_0_node_modules_vue_loader_15_8_3_vue_loader_lib_index_js_vue_loader_options_chooseApprover_vue_vue_type_script_lang_js____default.a); 

/***/ }),

/***/ 1227:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _regenerator = __webpack_require__(1186);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(1187);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _contactList = __webpack_require__(1239);

var _contactList2 = _interopRequireDefault(_contactList);

var _getData = __webpack_require__(1188);

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

exports.default = {
    name: "chooseApprover",
    components: { ContactList: _contactList2.default },
    data: function data() {
        return {
            list: [],
            chosenPeople: '',
            isShow: false,
            id: '', //1 区域选择。2 人员选择
            titleL: '选择审批人',
            bottomTitle: '选择当事人'
        };
    },
    mounted: function mounted() {

        this.id = this.$route.query.id;

        window.namee = '';
        window.idd = '';

        console.log('this.id==' + this.id);

        this.getApprover();
    },

    methods: {
        hide: function hide() {
            this.isShow = false;
        },
        show: function show() {
            this.isShow = true;
        },
        back: function back() {
            this.$router.go(-1);
        },
        clickData: function clickData() {
            this.chosenPeople = window.namee;

            // console.log('v1==='+window.namee);
        },
        sureCc: function sureCc() {
            this.hide();
            this.$emit('confirm', { id: this.id, chosenPeople: this.chosenPeople });
            // if (this.chosenPeople == '' || this.chosenPeople == null || this.chosenPeople == undefined) {
            //     if (this.id == 1) {
            //         this.toast('请选择区域')
            //     } else {
            //         this.toast('请选择当事人')
            //     }
            //
            //     return;
            // }
            //
            // this.$router.go(-1);
        },
        getApprover: function getApprover() {
            var _this = this;

            return (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
                var res;
                return _regenerator2.default.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                res = void 0;

                                if (!(_this.id == 1)) {
                                    _context.next = 9;
                                    break;
                                }

                                _context.next = 4;
                                return (0, _getData.getAppAreaTree)();

                            case 4:
                                res = _context.sent;

                                _this.titleL = '选择区域';
                                _this.bottomTitle = '选择区域';
                                _context.next = 14;
                                break;

                            case 9:
                                _context.next = 11;
                                return (0, _getData.getApprover)();

                            case 11:
                                res = _context.sent;

                                _this.titleL = '选择审批人';
                                _this.bottomTitle = '选择当事人';

                            case 14:

                                if (res.code == 0) {
                                    _this.list = res.datas;
                                    _this.hideLoading();
                                } else {
                                    _this.hideLoading();
                                    //this.toast(res.message);
                                }

                            case 15:
                            case "end":
                                return _context.stop();
                        }
                    }
                }, _callee, _this);
            }))();
        }
    }
};

/***/ }),

/***/ 1228:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__node_modules_babel_loader_7_1_5_babel_loader_lib_index_js_ref_2_0_node_modules_vue_loader_15_8_3_vue_loader_lib_index_js_vue_loader_options_contact_list_vue_vue_type_script_lang_js___ = __webpack_require__(1229);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__node_modules_babel_loader_7_1_5_babel_loader_lib_index_js_ref_2_0_node_modules_vue_loader_15_8_3_vue_loader_lib_index_js_vue_loader_options_contact_list_vue_vue_type_script_lang_js____default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__node_modules_babel_loader_7_1_5_babel_loader_lib_index_js_ref_2_0_node_modules_vue_loader_15_8_3_vue_loader_lib_index_js_vue_loader_options_contact_list_vue_vue_type_script_lang_js___);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__node_modules_babel_loader_7_1_5_babel_loader_lib_index_js_ref_2_0_node_modules_vue_loader_15_8_3_vue_loader_lib_index_js_vue_loader_options_contact_list_vue_vue_type_script_lang_js___) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__node_modules_babel_loader_7_1_5_babel_loader_lib_index_js_ref_2_0_node_modules_vue_loader_15_8_3_vue_loader_lib_index_js_vue_loader_options_contact_list_vue_vue_type_script_lang_js___[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (__WEBPACK_IMPORTED_MODULE_0__node_modules_babel_loader_7_1_5_babel_loader_lib_index_js_ref_2_0_node_modules_vue_loader_15_8_3_vue_loader_lib_index_js_vue_loader_options_contact_list_vue_vue_type_script_lang_js____default.a); 

/***/ }),

/***/ 1229:
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
//

exports.default = {
    name: "contact-list",
    data: function data() {
        window.activeA = window.activeA || { a: '' };
        return {
            TYPE_NO_CHOICE: 0,
            TYPE_SINGLE_CHOICE: 1,
            TYPE_MULTI_CHOICE: 2,
            showChildren: false,
            clickPosition: 0,
            activitesC: [],
            activeA: window.activeA,
            chosenPeople: ''

        };
    },
    mounted: function mounted() {
        this.activeA.a = '';
        console.log(' this.activeA.a==' + this.activeA.a);
    },

    computed: {},
    methods: {
        onClickContent: function onClickContent() {
            // setTimeout(()=>{
            //     console.log('item.name='+this.chosenPeople)


            this.$emit('onClickContent');
            // },500)

        },
        onGroupClickContent: function onGroupClickContent(item) {
            // console.log("组 点击项：" + item.name);
            // console.log("点击项 item.id ：" + item.id);
            this.$refs['' + item.id][0].showChildren = !this.$refs['' + item.id][0].showChildren;
        },
        onPersonClickContent: function onPersonClickContent(item, item1) {
            this.chosenPeople = item.name;
            console.log("人 点击项：" + item.name);
            console.log("id 点击项：" + item.id);
            window.namee = item.name;
            window.idd = item.id;

            this.clickChoose(item1);
        },
        clickChoose: function clickChoose(item) {
            this.activeA.a = item;
        }
    },
    props: {
        data: {},
        k: { type: String, default: '' },
        type: {
            type: Number,
            default: 0
        },
        root: {
            type: Boolean,
            default: true
        }
    }
};

/***/ }),

/***/ 1230:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1242);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(1062).default
var update = add("5914cfb8", content, true, {});

/***/ }),

/***/ 1231:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1244);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(1062).default
var update = add("6bda5706", content, true, {});

/***/ }),

/***/ 1238:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/_vue-loader@15.8.3@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/_vue-loader@15.8.3@vue-loader/lib??vue-loader-options!./src/view/anjianshangbao/chooseApprover.vue?vue&type=template&id=3088b238&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('transition',{attrs:{"name":"slide-up"}},[(_vm.isShow)?_c('div',{staticClass:"choose-approver"},[_c('tk-header',{staticClass:"page-header",on:{"left-click":_vm.hide}},[_vm._v("\n            "+_vm._s(_vm.titleL)+"\n\n        ")]),_vm._v(" "),_c('div',{staticClass:"choose-approver-content"},[_c('contact-list',{attrs:{"data":_vm.list,"root":true},on:{"onClickContent":_vm.clickData}})],1),_vm._v(" "),_c('div',{staticClass:"borromPart"},[_c('div',{staticClass:"leftSpan"},[_vm._v(_vm._s(_vm.bottomTitle))]),_vm._v(" "),_c('div',{staticClass:"name"},[_vm._v(_vm._s(_vm.chosenPeople))]),_vm._v(" "),_c('div',{staticClass:"rightDiv",on:{"click":_vm.sureCc}},[_vm._v("确定")])])],1):_vm._e()])}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/view/anjianshangbao/chooseApprover.vue?vue&type=template&id=3088b238&scoped=true&
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });


/***/ }),

/***/ 1239:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__contact_list_vue_vue_type_template_id_4d751183_scoped_true___ = __webpack_require__(1240);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__contact_list_vue_vue_type_script_lang_js___ = __webpack_require__(1228);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_1__contact_list_vue_vue_type_script_lang_js___) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_1__contact_list_vue_vue_type_script_lang_js___[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__contact_list_vue_vue_type_style_index_0_id_4d751183_lang_less_scoped_true___ = __webpack_require__(1241);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__node_modules_vue_loader_15_8_3_vue_loader_lib_runtime_componentNormalizer_js__ = __webpack_require__(0);






/* normalize component */

var component = Object(__WEBPACK_IMPORTED_MODULE_3__node_modules_vue_loader_15_8_3_vue_loader_lib_runtime_componentNormalizer_js__["a" /* default */])(
  __WEBPACK_IMPORTED_MODULE_1__contact_list_vue_vue_type_script_lang_js___["default"],
  __WEBPACK_IMPORTED_MODULE_0__contact_list_vue_vue_type_template_id_4d751183_scoped_true___["a" /* render */],
  __WEBPACK_IMPORTED_MODULE_0__contact_list_vue_vue_type_template_id_4d751183_scoped_true___["b" /* staticRenderFns */],
  false,
  null,
  "4d751183",
  null
  
)

/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 1240:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/_vue-loader@15.8.3@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/_vue-loader@15.8.3@vue-loader/lib??vue-loader-options!./src/component/contact-list.vue?vue&type=template&id=4d751183&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.showChildren || _vm.root),expression:"showChildren || root"}],staticClass:"contact-list"},_vm._l((_vm.data),function(item,index){return _c('div',{staticClass:"contact-list-item",on:{"click":_vm.onClickContent}},[(item.children.length > 0)?_c('div',{staticClass:"contact-list-item-group-wrapper"},[_c('div',{staticClass:"contact-list-item-group",style:({'margin-left':item.level*0.7 + 'rem'}),on:{"click":function($event){return _vm.onGroupClickContent(item, index)}}},[_c('img',{staticStyle:{"width":"1rem","margin-right":"0.5rem"},attrs:{"src":"/static/img/zuzhiqunti111.png"}}),_vm._v("\n                "+_vm._s(item.name)+"\n            ")]),_vm._v(" "),_c('div',{staticClass:"grey-split-line"}),_vm._v(" "),_c('contact-list',{ref:("" + (item.id)),refInFor:true,staticClass:"contact-list-item-child",attrs:{"k":item.name,"data":item.children}})],1):_c('div',{staticClass:"contact-list-item-name-wrapper",on:{"click":function($event){return _vm.onPersonClickContent(item,_vm.k+index,index)}}},[_c('div',{staticClass:"contact-list-item-name",style:({'margin-left':item.level*0.7 + 'rem'})},[_c('img',{staticStyle:{"width":"14px","margin-right":"0.5rem"},attrs:{"src":"/static/img/touxiang111.png"}}),_vm._v("\n                "+_vm._s(item.name)+"\n            ")]),_vm._v(" "),_c('div',{staticClass:"rightDiv"},[_c('div',{staticClass:"circleDiv",class:{active:_vm.activeA.a==_vm.k+index},on:{"click":function($event){return _vm.clickChoose(_vm.k+index,index)}}})]),_vm._v(" "),_c('div',{staticClass:"grey-split-line"})])])}),0)}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/component/contact-list.vue?vue&type=template&id=4d751183&scoped=true&
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });


/***/ }),

/***/ 1241:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__node_modules_extract_text_webpack_plugin_3_0_2_extract_text_webpack_plugin_dist_loader_js_ref_8_0_node_modules_vue_style_loader_4_1_2_vue_style_loader_index_js_node_modules_css_loader_0_28_11_css_loader_index_js_ref_8_2_node_modules_vue_loader_15_8_3_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_8_3_node_modules_px2rem_loader_0_1_9_px2rem_loader_index_js_ref_8_4_node_modules_less_loader_4_1_0_less_loader_dist_cjs_js_ref_8_5_node_modules_vue_loader_15_8_3_vue_loader_lib_index_js_vue_loader_options_contact_list_vue_vue_type_style_index_0_id_4d751183_lang_less_scoped_true___ = __webpack_require__(1230);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__node_modules_extract_text_webpack_plugin_3_0_2_extract_text_webpack_plugin_dist_loader_js_ref_8_0_node_modules_vue_style_loader_4_1_2_vue_style_loader_index_js_node_modules_css_loader_0_28_11_css_loader_index_js_ref_8_2_node_modules_vue_loader_15_8_3_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_8_3_node_modules_px2rem_loader_0_1_9_px2rem_loader_index_js_ref_8_4_node_modules_less_loader_4_1_0_less_loader_dist_cjs_js_ref_8_5_node_modules_vue_loader_15_8_3_vue_loader_lib_index_js_vue_loader_options_contact_list_vue_vue_type_style_index_0_id_4d751183_lang_less_scoped_true____default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__node_modules_extract_text_webpack_plugin_3_0_2_extract_text_webpack_plugin_dist_loader_js_ref_8_0_node_modules_vue_style_loader_4_1_2_vue_style_loader_index_js_node_modules_css_loader_0_28_11_css_loader_index_js_ref_8_2_node_modules_vue_loader_15_8_3_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_8_3_node_modules_px2rem_loader_0_1_9_px2rem_loader_index_js_ref_8_4_node_modules_less_loader_4_1_0_less_loader_dist_cjs_js_ref_8_5_node_modules_vue_loader_15_8_3_vue_loader_lib_index_js_vue_loader_options_contact_list_vue_vue_type_style_index_0_id_4d751183_lang_less_scoped_true___);
/* unused harmony reexport namespace */
 /* unused harmony default export */ var _unused_webpack_default_export = (__WEBPACK_IMPORTED_MODULE_0__node_modules_extract_text_webpack_plugin_3_0_2_extract_text_webpack_plugin_dist_loader_js_ref_8_0_node_modules_vue_style_loader_4_1_2_vue_style_loader_index_js_node_modules_css_loader_0_28_11_css_loader_index_js_ref_8_2_node_modules_vue_loader_15_8_3_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_8_3_node_modules_px2rem_loader_0_1_9_px2rem_loader_index_js_ref_8_4_node_modules_less_loader_4_1_0_less_loader_dist_cjs_js_ref_8_5_node_modules_vue_loader_15_8_3_vue_loader_lib_index_js_vue_loader_options_contact_list_vue_vue_type_style_index_0_id_4d751183_lang_less_scoped_true____default.a); 

/***/ }),

/***/ 1242:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1061)(true);
// imports


// module
exports.push([module.i, ".cube-tab_active[data-v-4d751183]{color:#297aff!important}.cube-tab_active i[data-v-4d751183]:before{color:#297aff}.cube-tab[data-v-4d751183]{width:6rem}.cube-tab>i[data-v-4d751183]{font-size:1.25rem;line-height:1.5}.cube-tab>div[data-v-4d751183]{font-size:.625rem}.cube-toast-icon[data-v-4d751183]{margin-top:-.5rem}.contact-list[data-v-4d751183]{-webkit-box-align:center;-ms-flex-align:center;align-items:center;background-color:#fff}.contact-list .contact-list-item[data-v-4d751183],.contact-list[data-v-4d751183]{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-flow:column nowrap;flex-flow:column nowrap;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:start;width:100%}.contact-list .contact-list-item[data-v-4d751183]{-webkit-box-align:start;-ms-flex-align:start;align-items:start}.contact-list .contact-list-item .contact-list-item-group-wrapper[data-v-4d751183]{width:100%}.contact-list .contact-list-item .contact-list-item-group-wrapper .contact-list-item-group[data-v-4d751183]{width:100%;font-size:.875rem;height:2.5rem;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-flow:row nowrap;flex-flow:row nowrap;-webkit-box-align:center;-ms-flex-align:center;align-items:center;padding-left:3%}.contact-list .contact-list-item .contact-list-item-name-wrapper[data-v-4d751183]{width:100%}.contact-list .contact-list-item .contact-list-item-name-wrapper .contact-list-item-name[data-v-4d751183]{width:50%;font-size:.875rem;height:2.5rem;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-flow:row nowrap;flex-flow:row nowrap;-webkit-box-align:center;-ms-flex-align:center;align-items:center;padding-left:3%;float:left}.contact-list .contact-list-item .contact-list-item-name-wrapper .rightDiv[data-v-4d751183]{float:right;width:20%;height:2.5rem;line-height:2.5rem}.contact-list .contact-list-item .contact-list-item-name-wrapper .rightDiv .circleDiv[data-v-4d751183]{width:1rem;height:1rem;background:#f5f5f5;margin:.625rem;margin-left:1.4375rem;border-radius:.4375rem}.contact-list .contact-list-item .contact-list-item-name-wrapper .rightDiv .circleDiv.active[data-v-4d751183]{background:url(\"/static/img/选择.png\") no-repeat;background-size:100% 100%}.contact-list .contact-list-item .borromPart[data-v-4d751183]{position:absolute;bottom:0;width:100%;height:8%;background:#fff}.contact-list .contact-list-item .borromPart .leftSpan[data-v-4d751183]{float:left;margin-left:5%;color:gray;height:2.3rem;line-height:2.3rem}.contact-list .contact-list-item .borromPart .name[data-v-4d751183]{color:#297aff;margin-left:.5rem;font-size:.875rem;float:left;height:2.3rem;line-height:2.3rem;text-align:left;width:6rem;overflow:hidden;white-space:nowrap;text-overflow:ellipsis}.contact-list .contact-list-item .borromPart .rightDiv[data-v-4d751183]{float:right;margin-right:5%;width:29%;height:2.1rem;background:#297aff;line-height:2.1rem;border-radius:.5rem;text-align:center;color:#fff}.contact-list .grey-split-line[data-v-4d751183]{background:#ddd;width:100%;height:.0625rem}", "", {"version":3,"sources":["/Users/zz/project/zhzf_platform/vue/mobile1.0/src/component/contact-list.vue"],"names":[],"mappings":"AAAA,kCACE,uBAAyB,CAC3B,AAEA,2CACE,aAAc,CAChB,AAEA,2BACE,UAAW,CACb,AAEA,6BACE,kBAAkB,AAClB,eAAgB,CAClB,AAEA,+BACE,iBAAmB,CACrB,AAEA,kCACE,iBAAmB,CACrB,AAEA,+BAIE,yBAAmB,AAAnB,sBAAmB,AAAnB,mBAAmB,AAEnB,qBAAuB,CACzB,AAEA,iFARE,oBAAa,AAAb,oBAAa,AAAb,aAAa,AACb,4BAAwB,AAAxB,6BAAwB,AAAxB,4BAAwB,AAAxB,wBAAwB,AACxB,uBAAsB,AAAtB,oBAAsB,AAAtB,sBAAsB,AAEtB,UAAW,CAUb,AANA,kDAIE,wBAAkB,AAAlB,qBAAkB,AAAlB,iBAAkB,CAEpB,AAEA,mFACE,UAAW,CACb,AAEA,4GACE,WAAW,AACX,kBAAmB,AACnB,cAAc,AACd,oBAAa,AAAb,oBAAa,AAAb,aAAa,AACb,8BAAqB,AAArB,6BAAqB,AAArB,yBAAqB,AAArB,qBAAqB,AACrB,yBAAmB,AAAnB,sBAAmB,AAAnB,mBAAmB,AACnB,eAAgB,CAClB,AAEA,kFACE,UAAW,CACb,AAEA,0GACE,UAAU,AACV,kBAAmB,AACnB,cAAc,AACd,oBAAa,AAAb,oBAAa,AAAb,aAAa,AACb,8BAAqB,AAArB,6BAAqB,AAArB,yBAAqB,AAArB,qBAAqB,AACrB,yBAAmB,AAAnB,sBAAmB,AAAnB,mBAAmB,AACnB,gBAAgB,AAChB,UAAW,CACb,AAEA,4FAEE,YAAY,AACZ,UAAU,AACV,cAAc,AACd,kBAAmB,CAIrB,AAEA,uGACE,WAAW,AACX,YAAY,AACZ,mBAAmB,AACnB,eAAgB,AAChB,sBAAsB,AACtB,sBAAwB,CAE1B,AAEA,8GACE,+CAA+C,AAC/C,yBAA0B,CAC5B,AAEA,8DACE,kBAAkB,AAClB,SAAS,AACT,WAAW,AACX,UAAU,AACV,eAAiB,CACnB,AAEA,wEACE,WAAW,AACX,eAAe,AACf,WAAW,AACX,cAAc,AAEd,kBAAmB,CACrB,AAEA,oEACE,cAAc,AACd,kBAAmB,AACnB,kBAAmB,AACnB,WAAW,AACX,cAAc,AAEd,mBAAmB,AACnB,gBAAgB,AAEhB,WAAW,AACX,gBAAgB,AAChB,mBAAmB,AACnB,sBAAuB,CACzB,AAEA,wEACE,YAAY,AACZ,gBAAgB,AAChB,UAAU,AACV,cAAc,AACd,mBAAmB,AACnB,mBAAmB,AACnB,oBAAqB,AACrB,kBAAkB,AAClB,UAAY,CACd,AAEA,gDACE,gBAAmB,AACnB,WAAW,AACX,eAAiB,CACnB","file":"contact-list.vue?vue&type=style&index=0&id=4d751183&lang=less&scoped=true&","sourcesContent":[".cube-tab_active {\n  color: #297aff !important;\n}\n\n.cube-tab_active i::before {\n  color: #297aff;\n}\n\n.cube-tab {\n  width: 6rem;\n}\n\n.cube-tab > i {\n  font-size: 1.25rem;\n  line-height: 1.5;\n}\n\n.cube-tab > div {\n  font-size: 0.625rem;\n}\n\n.cube-toast-icon {\n  margin-top: -0.5rem;\n}\n\n.contact-list {\n  display: flex;\n  flex-flow: column nowrap;\n  justify-content: start;\n  align-items: center;\n  width: 100%;\n  background-color: white;\n}\n\n.contact-list .contact-list-item {\n  display: flex;\n  flex-flow: column nowrap;\n  justify-content: start;\n  align-items: start;\n  width: 100%;\n}\n\n.contact-list .contact-list-item .contact-list-item-group-wrapper {\n  width: 100%;\n}\n\n.contact-list .contact-list-item .contact-list-item-group-wrapper .contact-list-item-group {\n  width: 100%;\n  font-size: 0.875rem;\n  height: 2.5rem;\n  display: flex;\n  flex-flow: row nowrap;\n  align-items: center;\n  padding-left: 3%;\n}\n\n.contact-list .contact-list-item .contact-list-item-name-wrapper {\n  width: 100%;\n}\n\n.contact-list .contact-list-item .contact-list-item-name-wrapper .contact-list-item-name {\n  width: 50%;\n  font-size: 0.875rem;\n  height: 2.5rem;\n  display: flex;\n  flex-flow: row nowrap;\n  align-items: center;\n  padding-left: 3%;\n  float: left;\n}\n\n.contact-list .contact-list-item .contact-list-item-name-wrapper .rightDiv {\n  /*display: inline-block;*/\n  float: right;\n  width: 20%;\n  height: 2.5rem;\n  line-height: 2.5rem;\n  /*background: red;*/\n  /*text-align: center;*/\n  /*vertical-align: middle;*/\n}\n\n.contact-list .contact-list-item .contact-list-item-name-wrapper .rightDiv .circleDiv {\n  width: 1rem;\n  height: 1rem;\n  background: #f5f5f5;\n  margin: 0.625rem;\n  margin-left: 1.4375rem;\n  border-radius: 0.4375rem;\n  /*background-size: 100% 100%;*/\n}\n\n.contact-list .contact-list-item .contact-list-item-name-wrapper .rightDiv .circleDiv.active {\n  background: url(\"/static/img/选择.png\") no-repeat;\n  background-size: 100% 100%;\n}\n\n.contact-list .contact-list-item .borromPart {\n  position: absolute;\n  bottom: 0;\n  width: 100%;\n  height: 8%;\n  background: white;\n}\n\n.contact-list .contact-list-item .borromPart .leftSpan {\n  float: left;\n  margin-left: 5%;\n  color: gray;\n  height: 2.3rem;\n  /*background: orange;*/\n  line-height: 2.3rem;\n}\n\n.contact-list .contact-list-item .borromPart .name {\n  color: #297aff;\n  margin-left: 0.5rem;\n  font-size: 0.875rem;\n  float: left;\n  height: 2.3rem;\n  /*background: orange;*/\n  line-height: 2.3rem;\n  text-align: left;\n  /*background: red;*/\n  width: 6rem;\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n}\n\n.contact-list .contact-list-item .borromPart .rightDiv {\n  float: right;\n  margin-right: 5%;\n  width: 29%;\n  height: 2.1rem;\n  background: #297aff;\n  line-height: 2.1rem;\n  border-radius: 0.5rem;\n  text-align: center;\n  color: white;\n}\n\n.contact-list .grey-split-line {\n  background: #dddddd;\n  width: 100%;\n  height: 0.0625rem;\n}"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ 1243:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__node_modules_extract_text_webpack_plugin_3_0_2_extract_text_webpack_plugin_dist_loader_js_ref_8_0_node_modules_vue_style_loader_4_1_2_vue_style_loader_index_js_node_modules_css_loader_0_28_11_css_loader_index_js_ref_8_2_node_modules_vue_loader_15_8_3_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_8_3_node_modules_px2rem_loader_0_1_9_px2rem_loader_index_js_ref_8_4_node_modules_less_loader_4_1_0_less_loader_dist_cjs_js_ref_8_5_node_modules_vue_loader_15_8_3_vue_loader_lib_index_js_vue_loader_options_chooseApprover_vue_vue_type_style_index_0_id_3088b238_lang_less_scoped_true___ = __webpack_require__(1231);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__node_modules_extract_text_webpack_plugin_3_0_2_extract_text_webpack_plugin_dist_loader_js_ref_8_0_node_modules_vue_style_loader_4_1_2_vue_style_loader_index_js_node_modules_css_loader_0_28_11_css_loader_index_js_ref_8_2_node_modules_vue_loader_15_8_3_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_8_3_node_modules_px2rem_loader_0_1_9_px2rem_loader_index_js_ref_8_4_node_modules_less_loader_4_1_0_less_loader_dist_cjs_js_ref_8_5_node_modules_vue_loader_15_8_3_vue_loader_lib_index_js_vue_loader_options_chooseApprover_vue_vue_type_style_index_0_id_3088b238_lang_less_scoped_true____default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__node_modules_extract_text_webpack_plugin_3_0_2_extract_text_webpack_plugin_dist_loader_js_ref_8_0_node_modules_vue_style_loader_4_1_2_vue_style_loader_index_js_node_modules_css_loader_0_28_11_css_loader_index_js_ref_8_2_node_modules_vue_loader_15_8_3_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_8_3_node_modules_px2rem_loader_0_1_9_px2rem_loader_index_js_ref_8_4_node_modules_less_loader_4_1_0_less_loader_dist_cjs_js_ref_8_5_node_modules_vue_loader_15_8_3_vue_loader_lib_index_js_vue_loader_options_chooseApprover_vue_vue_type_style_index_0_id_3088b238_lang_less_scoped_true___);
/* unused harmony reexport namespace */
 /* unused harmony default export */ var _unused_webpack_default_export = (__WEBPACK_IMPORTED_MODULE_0__node_modules_extract_text_webpack_plugin_3_0_2_extract_text_webpack_plugin_dist_loader_js_ref_8_0_node_modules_vue_style_loader_4_1_2_vue_style_loader_index_js_node_modules_css_loader_0_28_11_css_loader_index_js_ref_8_2_node_modules_vue_loader_15_8_3_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_8_3_node_modules_px2rem_loader_0_1_9_px2rem_loader_index_js_ref_8_4_node_modules_less_loader_4_1_0_less_loader_dist_cjs_js_ref_8_5_node_modules_vue_loader_15_8_3_vue_loader_lib_index_js_vue_loader_options_chooseApprover_vue_vue_type_style_index_0_id_3088b238_lang_less_scoped_true____default.a); 

/***/ }),

/***/ 1244:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1061)(true);
// imports


// module
exports.push([module.i, ".slide-up-enter[data-v-3088b238],.slide-up-leave-active[data-v-3088b238]{opacity:0;-webkit-transform:translateY(100%);transform:translateY(100%)}.choose-approver[data-v-3088b238]{-webkit-transition:all .5s;transition:all .5s;width:100%;top:0;background:#f4f4f4;position:absolute;bottom:0;right:0;left:0;z-index:10000}.choose-approver .page-header[data-v-3088b238]{position:fixed;top:0;width:100%;z-index:100}.choose-approver .choose-approver-content[data-v-3088b238]{width:100%;height:83%;margin-top:2.5rem;overflow-y:scroll}.choose-approver .borromPart[data-v-3088b238]{position:absolute;bottom:0;width:100%;height:8%;background:#fff}.choose-approver .borromPart .leftSpan[data-v-3088b238]{float:left;margin-left:5%;color:gray;height:2.3rem;line-height:2.3rem}.choose-approver .borromPart .name[data-v-3088b238]{color:#297aff;margin-left:.5rem;font-size:.7rem;float:left;height:2.3rem;line-height:2.3rem;text-align:left;width:6rem;overflow:hidden;white-space:nowrap;text-overflow:ellipsis}.choose-approver .borromPart .rightDiv[data-v-3088b238]{float:right;margin-right:5%;width:29%;height:2.1rem;background:#297aff;line-height:2.1rem;border-radius:.5rem;text-align:center;color:#fff}", "", {"version":3,"sources":["/Users/zz/project/zhzf_platform/vue/mobile1.0/src/view/anjianshangbao/chooseApprover.vue"],"names":[],"mappings":"AAKA,yEACE,UAAU,AACV,mCAA6B,AAA7B,0BAA6B,CAC/B,AAEA,kCACE,2BAAoB,AAApB,mBAAoB,AACpB,WAAW,AACX,MAAM,AACN,mBAAmB,AACnB,kBAAkB,AAClB,SAAS,AACT,QAAQ,AACR,OAAO,AACP,aAAc,CAChB,AAEA,+CACE,eAAe,AACf,MAAM,AACN,WAAW,AACX,WAAY,CACd,AAEA,2DACE,WAAW,AACX,WAAW,AACX,kBAAkB,AAClB,iBAAkB,CACpB,AAEA,8CACE,kBAAkB,AAClB,SAAS,AACT,WAAW,AACX,UAAU,AACV,eAAiB,CACnB,AAEA,wDACE,WAAW,AACX,eAAe,AACf,WAAW,AACX,cAAc,AAEd,kBAAmB,CACrB,AAEA,oDACE,cAAc,AACd,kBAAmB,AACnB,gBAAiB,AACjB,WAAW,AACX,cAAc,AAEd,mBAAmB,AACnB,gBAAgB,AAEhB,WAAW,AACX,gBAAgB,AAChB,mBAAmB,AACnB,sBAAuB,CACzB,AAEA,wDACE,YAAY,AACZ,gBAAgB,AAChB,UAAU,AACV,cAAc,AACd,mBAAmB,AACnB,mBAAmB,AACnB,oBAAqB,AACrB,kBAAkB,AAClB,UAAY,CACd","file":"chooseApprover.vue?vue&type=style&index=0&id=3088b238&lang=less&scoped=true&","sourcesContent":[".slide-up-leave-active {\n  opacity: 0;\n  transform: translate(0, 100%);\n}\n\n.slide-up-enter {\n  opacity: 0;\n  transform: translate(0, 100%);\n}\n\n.choose-approver {\n  transition: 0.5s all;\n  width: 100%;\n  top: 0;\n  background: #f4f4f4;\n  position: absolute;\n  bottom: 0;\n  right: 0;\n  left: 0;\n  z-index: 10000;\n}\n\n.choose-approver .page-header {\n  position: fixed;\n  top: 0;\n  width: 100%;\n  z-index: 100;\n}\n\n.choose-approver .choose-approver-content {\n  width: 100%;\n  height: 83%;\n  margin-top: 2.5rem;\n  overflow-y: scroll;\n}\n\n.choose-approver .borromPart {\n  position: absolute;\n  bottom: 0;\n  width: 100%;\n  height: 8%;\n  background: white;\n}\n\n.choose-approver .borromPart .leftSpan {\n  float: left;\n  margin-left: 5%;\n  color: gray;\n  height: 2.3rem;\n  /*background: orange;*/\n  line-height: 2.3rem;\n}\n\n.choose-approver .borromPart .name {\n  color: #297aff;\n  margin-left: 0.5rem;\n  font-size: 0.7rem;\n  float: left;\n  height: 2.3rem;\n  /*background: orange;*/\n  line-height: 2.3rem;\n  text-align: left;\n  /*background: red;*/\n  width: 6rem;\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n}\n\n.choose-approver .borromPart .rightDiv {\n  float: right;\n  margin-right: 5%;\n  width: 29%;\n  height: 2.1rem;\n  background: #297aff;\n  line-height: 2.1rem;\n  border-radius: 0.5rem;\n  text-align: center;\n  color: white;\n}"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ 492:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__chooseApprover_vue_vue_type_template_id_3088b238_scoped_true___ = __webpack_require__(1238);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__chooseApprover_vue_vue_type_script_lang_js___ = __webpack_require__(1226);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_1__chooseApprover_vue_vue_type_script_lang_js___) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_1__chooseApprover_vue_vue_type_script_lang_js___[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__chooseApprover_vue_vue_type_style_index_0_id_3088b238_lang_less_scoped_true___ = __webpack_require__(1243);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__node_modules_vue_loader_15_8_3_vue_loader_lib_runtime_componentNormalizer_js__ = __webpack_require__(0);






/* normalize component */

var component = Object(__WEBPACK_IMPORTED_MODULE_3__node_modules_vue_loader_15_8_3_vue_loader_lib_runtime_componentNormalizer_js__["a" /* default */])(
  __WEBPACK_IMPORTED_MODULE_1__chooseApprover_vue_vue_type_script_lang_js___["default"],
  __WEBPACK_IMPORTED_MODULE_0__chooseApprover_vue_vue_type_template_id_3088b238_scoped_true___["a" /* render */],
  __WEBPACK_IMPORTED_MODULE_0__chooseApprover_vue_vue_type_template_id_3088b238_scoped_true___["b" /* staticRenderFns */],
  false,
  null,
  "3088b238",
  null
  
)

/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ })

});