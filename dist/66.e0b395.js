webpackJsonp([66],{

/***/ 1258:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__node_modules_babel_loader_7_1_5_babel_loader_lib_index_js_ref_2_0_node_modules_vue_loader_15_8_3_vue_loader_lib_index_js_vue_loader_options_list_vue_vue_type_script_lang_js___ = __webpack_require__(1259);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__node_modules_babel_loader_7_1_5_babel_loader_lib_index_js_ref_2_0_node_modules_vue_loader_15_8_3_vue_loader_lib_index_js_vue_loader_options_list_vue_vue_type_script_lang_js____default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__node_modules_babel_loader_7_1_5_babel_loader_lib_index_js_ref_2_0_node_modules_vue_loader_15_8_3_vue_loader_lib_index_js_vue_loader_options_list_vue_vue_type_script_lang_js___);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__node_modules_babel_loader_7_1_5_babel_loader_lib_index_js_ref_2_0_node_modules_vue_loader_15_8_3_vue_loader_lib_index_js_vue_loader_options_list_vue_vue_type_script_lang_js___) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__node_modules_babel_loader_7_1_5_babel_loader_lib_index_js_ref_2_0_node_modules_vue_loader_15_8_3_vue_loader_lib_index_js_vue_loader_options_list_vue_vue_type_script_lang_js___[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (__WEBPACK_IMPORTED_MODULE_0__node_modules_babel_loader_7_1_5_babel_loader_lib_index_js_ref_2_0_node_modules_vue_loader_15_8_3_vue_loader_lib_index_js_vue_loader_options_list_vue_vue_type_script_lang_js____default.a); 

/***/ }),

/***/ 1259:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _assign = __webpack_require__(10);

var _assign2 = _interopRequireDefault(_assign);

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

exports.default = {
    data: function data() {
        return {
            searchVal: "",
            list: []
        };
    },

    components: {
        bar: function bar() {
            return __webpack_require__.e/* import() */(195/* duplicate */).then(__webpack_require__.bind(null, 1237));
        }
    },
    mounted: function mounted() {
        var _this = this;

        var obj = { para: "userId=" + window.localStorage.userId };
        var url = '/wgh/app/app_contactList3.action';
        this.$http.post(url, obj).then(function (d) {
            _this.list = d.datas.map(function (item) {
                return (0, _assign2.default)({
                    id: item.dept_name,
                    name: item.display_name
                }, item);
            });
        });
    },

    methods: {
        liClick: function liClick(data) {
            this.$router.push({
                path: '/address-detail',
                query: {
                    data: data
                }
            });
        }
    }
};

/***/ }),

/***/ 1471:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/_vue-loader@15.8.3@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/_vue-loader@15.8.3@vue-loader/lib??vue-loader-options!./src/view/address/list.vue?vue&type=template&id=02ed7641&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"address-list"},[_c('tk-header',{attrs:{"back":false}},[_vm._v("\n        通讯录\n    ")]),_vm._v(" "),_c('tk-search',{model:{value:(_vm.searchVal),callback:function ($$v) {_vm.searchVal=$$v},expression:"searchVal"}}),_vm._v(" "),_c('tk-address-list',{attrs:{"filter":_vm.searchVal},on:{"liClick":_vm.liClick},model:{value:(_vm.list),callback:function ($$v) {_vm.list=$$v},expression:"list"}}),_vm._v(" "),_c('bar',{attrs:{"active":2}})],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/view/address/list.vue?vue&type=template&id=02ed7641&scoped=true&
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });


/***/ }),

/***/ 496:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__list_vue_vue_type_template_id_02ed7641_scoped_true___ = __webpack_require__(1471);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__list_vue_vue_type_script_lang_js___ = __webpack_require__(1258);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_1__list_vue_vue_type_script_lang_js___) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_1__list_vue_vue_type_script_lang_js___[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_15_8_3_vue_loader_lib_runtime_componentNormalizer_js__ = __webpack_require__(0);





/* normalize component */

var component = Object(__WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_15_8_3_vue_loader_lib_runtime_componentNormalizer_js__["a" /* default */])(
  __WEBPACK_IMPORTED_MODULE_1__list_vue_vue_type_script_lang_js___["default"],
  __WEBPACK_IMPORTED_MODULE_0__list_vue_vue_type_template_id_02ed7641_scoped_true___["a" /* render */],
  __WEBPACK_IMPORTED_MODULE_0__list_vue_vue_type_template_id_02ed7641_scoped_true___["b" /* staticRenderFns */],
  false,
  null,
  "02ed7641",
  null
  
)

/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ })

});