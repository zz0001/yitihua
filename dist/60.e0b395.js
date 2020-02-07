webpackJsonp([60],{

/***/ 1303:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__node_modules_babel_loader_7_1_5_babel_loader_lib_index_js_ref_2_0_node_modules_vue_loader_15_8_3_vue_loader_lib_index_js_vue_loader_options_approvalExamine_vue_vue_type_script_lang_js___ = __webpack_require__(1304);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__node_modules_babel_loader_7_1_5_babel_loader_lib_index_js_ref_2_0_node_modules_vue_loader_15_8_3_vue_loader_lib_index_js_vue_loader_options_approvalExamine_vue_vue_type_script_lang_js____default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__node_modules_babel_loader_7_1_5_babel_loader_lib_index_js_ref_2_0_node_modules_vue_loader_15_8_3_vue_loader_lib_index_js_vue_loader_options_approvalExamine_vue_vue_type_script_lang_js___);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__node_modules_babel_loader_7_1_5_babel_loader_lib_index_js_ref_2_0_node_modules_vue_loader_15_8_3_vue_loader_lib_index_js_vue_loader_options_approvalExamine_vue_vue_type_script_lang_js___) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__node_modules_babel_loader_7_1_5_babel_loader_lib_index_js_ref_2_0_node_modules_vue_loader_15_8_3_vue_loader_lib_index_js_vue_loader_options_approvalExamine_vue_vue_type_script_lang_js___[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (__WEBPACK_IMPORTED_MODULE_0__node_modules_babel_loader_7_1_5_babel_loader_lib_index_js_ref_2_0_node_modules_vue_loader_15_8_3_vue_loader_lib_index_js_vue_loader_options_approvalExamine_vue_vue_type_script_lang_js____default.a); 

/***/ }),

/***/ 1304:
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
            placeholder: "请输入审核意见",
            textareas: "",
            imgList: [],
            fileList: [],
            names: [],
            list: [{
                name: "上传文件类型",
                type: "select",
                model: "",
                code: "",
                select: ["申报材料", "办理过程附件", "办结信息附件"]
            }],
            base64: [],
            rowId: "",
            transid: "",
            id: "",
            transname: "",
            taskId: ""
        };
    },
    created: function created() {
        this.rowId = this.$route.query.rowId;
        this.transid = this.$route.query.transid;
        this.id = this.$route.query.id;
        this.transname = this.$route.query.transname;
        this.taskId = this.$route.query.taskid;
    },

    computed: {
        code: function code() {
            return this.list[0].code;
        }
    },
    watch: {
        fileList: function fileList() {
            console.log(this.fileList);
        },
        imgList: function imgList() {
            console.log(this.imgList);
        },
        code: function code() {
            console.log(this.code[0]);
        }
    },
    methods: {
        nameChange: function nameChange(v) {
            this.names = v;
        },
        submit: function submit() {
            var _this = this;

            var fileArr = this.names.map(function (item, index) {
                return {
                    name: item,
                    base64: _this.fileList[index]
                };
            });
            var imgArr = this.imgList.map(function (item) {
                return item;
            });

            var row_id = this.rowId;
            var detail = this.textareas;
            var moveStatus = this.id;
            var transName = this.transname;
            var transId = this.transid;
            var taskId = this.taskId;
            var uploadType = this.code[0];

            if (fileArr.length > 0 || imgArr.length > 0) {
                if (uploadType == undefined) {
                    var signs;
                    signs = this.$createSignWarn({
                        $props: {
                            content: "请选择文件类型"
                        }
                    }).show();
                    setTimeout(function () {
                        signs.hide();
                    }, 2000);
                    return;
                }
            }

            var _url = "/xzsp/mobile/processCasebaseinfo.action";
            var _obj = {
                row_id: row_id,
                detail: detail,
                moveStatus: moveStatus,
                transName: transName,
                transId: transId,
                taskId: taskId,
                uploadType: uploadType,
                fileArr: (0, _stringify2.default)(fileArr),
                imgArr: (0, _stringify2.default)(imgArr)
            };
            _axios2.default.post(_url, _obj).then(function (d) {
                var signs;
                signs = _this.$createSignSuccess({
                    $props: {
                        content: "提交成功"
                    }
                }).show();
                setTimeout(function () {
                    signs.hide();
                    _this.$router.push({
                        path: "/welcome"
                    });
                }, 3000);
            });
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

/***/ }),

/***/ 1513:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/_vue-loader@15.8.3@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/_vue-loader@15.8.3@vue-loader/lib??vue-loader-options!./src/view/caseDetail/approvalExamine.vue?vue&type=template&id=085661a8&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"approval-examine"},[_c('tk-header',[_vm._v("行政审批处理")]),_vm._v(" "),_c('tk-scroll',[_c('tk-textarea',{attrs:{"placeholder":_vm.placeholder},model:{value:(_vm.textareas),callback:function ($$v) {_vm.textareas=$$v},expression:"textareas"}}),_vm._v(" "),_c('tk-form',{attrs:{"list":_vm.list}}),_vm._v(" "),_c('tk-title',[_vm._v("上传图片")]),_vm._v(" "),_c('tk-upload-photo',{model:{value:(_vm.imgList),callback:function ($$v) {_vm.imgList=$$v},expression:"imgList"}}),_vm._v(" "),_c('tk-title',[_vm._v("上传附件")]),_vm._v(" "),_c('tk-upload-file',{on:{"nameChange":_vm.nameChange},model:{value:(_vm.fileList),callback:function ($$v) {_vm.fileList=$$v},expression:"fileList"}}),_vm._v(" "),_c('tk-button',{staticStyle:{"margin-top":"20px"},on:{"click":_vm.submit}},[_vm._v("提交")])],1)],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/view/caseDetail/approvalExamine.vue?vue&type=template&id=085661a8&scoped=true&
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });


/***/ }),

/***/ 509:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__approvalExamine_vue_vue_type_template_id_085661a8_scoped_true___ = __webpack_require__(1513);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__approvalExamine_vue_vue_type_script_lang_js___ = __webpack_require__(1303);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_1__approvalExamine_vue_vue_type_script_lang_js___) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_1__approvalExamine_vue_vue_type_script_lang_js___[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_15_8_3_vue_loader_lib_runtime_componentNormalizer_js__ = __webpack_require__(0);





/* normalize component */

var component = Object(__WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_15_8_3_vue_loader_lib_runtime_componentNormalizer_js__["a" /* default */])(
  __WEBPACK_IMPORTED_MODULE_1__approvalExamine_vue_vue_type_script_lang_js___["default"],
  __WEBPACK_IMPORTED_MODULE_0__approvalExamine_vue_vue_type_template_id_085661a8_scoped_true___["a" /* render */],
  __WEBPACK_IMPORTED_MODULE_0__approvalExamine_vue_vue_type_template_id_085661a8_scoped_true___["b" /* staticRenderFns */],
  false,
  null,
  "085661a8",
  null
  
)

/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ })

});