webpackJsonp([49],{

/***/ 1320:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__node_modules_babel_loader_7_1_5_babel_loader_lib_index_js_ref_2_0_node_modules_vue_loader_15_8_3_vue_loader_lib_index_js_vue_loader_options_waitcaseTaskEdit_vue_vue_type_script_lang_js___ = __webpack_require__(1321);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__node_modules_babel_loader_7_1_5_babel_loader_lib_index_js_ref_2_0_node_modules_vue_loader_15_8_3_vue_loader_lib_index_js_vue_loader_options_waitcaseTaskEdit_vue_vue_type_script_lang_js____default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__node_modules_babel_loader_7_1_5_babel_loader_lib_index_js_ref_2_0_node_modules_vue_loader_15_8_3_vue_loader_lib_index_js_vue_loader_options_waitcaseTaskEdit_vue_vue_type_script_lang_js___);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__node_modules_babel_loader_7_1_5_babel_loader_lib_index_js_ref_2_0_node_modules_vue_loader_15_8_3_vue_loader_lib_index_js_vue_loader_options_waitcaseTaskEdit_vue_vue_type_script_lang_js___) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__node_modules_babel_loader_7_1_5_babel_loader_lib_index_js_ref_2_0_node_modules_vue_loader_15_8_3_vue_loader_lib_index_js_vue_loader_options_waitcaseTaskEdit_vue_vue_type_script_lang_js___[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (__WEBPACK_IMPORTED_MODULE_0__node_modules_babel_loader_7_1_5_babel_loader_lib_index_js_ref_2_0_node_modules_vue_loader_15_8_3_vue_loader_lib_index_js_vue_loader_options_waitcaseTaskEdit_vue_vue_type_script_lang_js____default.a); 

/***/ }),

/***/ 1321:
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
    name: "",
    data: function data() {
        var that = this;
        var a = 0;
        var arr = [['sdfsdf', 'sdf'], ['sdfsssssdf', 'sdasasasf'], ['sssaaaa', 'assss', 'sssasasasas']];
        return {
            content: '',
            images: [],
            isShow: true,
            formList: [{
                type: "selects",
                name: '网格长',
                selects: [],
                model: '请选择网格长',
                hasSelect: [],
                success: function success(i, id) {

                    console.log(i);
                    console.log(id);
                }
            }, {
                type: "selects",
                name: '部门',
                selects: [],
                hasSelect: [],
                model: '请选择部门'
            }, {
                type: "selects",
                name: '分管领导',
                selects: [],
                hasSelect: [],
                model: '请选择分管领导'
            }]

        };
    },
    mounted: function mounted() {
        var that = this;
        window.currthat = this;

        window.searchPage = 2;

        //设置标题栏，内容栏，底部内容高度
        //  $(".page_content")[0].style.height = window.localInnerHeight - $(".page_header").height() - $(".page_footer").height() + "px";
        //  $(".page_content").children("div").get(0).style.height = window.localInnerHeight - $(".page_header").height() - $(".page_footer").height() + "px";
        //设置input和textarea的样式
        $("input").addClass("small gray_dark_font ui-input-text ui-body-c ui-corner-all ui-shadow-inset");
        $("textarea").addClass("ui-input-text ui-body-c ui-corner-all ui-shadow-inset");

        window.currpage = "caseTaskEitpage";
        //  app_getMultiCodeChild_znsx.call(this,window.caseTaskReportParentId, "", 1, "caseEdit", "3");
        // app_getMultiCodeChild_bigclass.call(this,[], [], 1, "caseEdit", "3");
        hs_findgridList.call(this);
        hs_findDepartmentList.call(this);
        hs_findleaderList.call(this);
        inithsCaseTaskEditSelect();
        inithsCaseTaskRectiication();

        /*选择*/
        $("#case_task_edit_page .case_task_edit_people").listen("quickClick", function (e) {
            console.log("所属网格");
            hs_findgridList();
        });
        $("#case_task_edit_page .case_task_edit_deptment").listen("quickClick", function (e) {

            hs_findDepartmentList();
        });
        $("#case_task_edit_page .case_task_edit_leader").listen("quickClick", function (e) {

            hs_findleaderList();
        });
        /*延期时长*/
        $("#case_task_edit_page .case_task_edit_addtime_tr").listen("quickClick", function (e) {
            app_getBaseType(9);
        });
        /*返回*/
        $("#case_task_edit_page .back-button").listen("quickClick", function (e) {
            that.$router.back();
        });
        //定位：
        $("#case_task_edit_page #case_task_edit_address_img").listen("quickClick", function (e) {
            getLocalAddress("#case_task_edit_address");
        });
        // //职能事项
        // $("#case_task_edit_page #case_task_edit_eventComponent_tr").listen("quickClick", function (e) {
        //     getMultilevelValue("请选择职能事项", 3);
        //     app_getMultiCodeChild(window.caseTaskReportParentId, "", 1, "caseEdit", "3")
        // });
        // //大类
        // $("#case_task_edit_page #case_task_edit_bigClass_tr").listen("quickClick", function (e) {
        //     if (isNull(window.choiceThingsParts)) {
        //         toast("请先选择职能事项");
        //     } else {
        //         //getMultilevelValue("请选择大小类", 2);
        //         app_getMultiCodeChild(window.choiceThingsParts, "", 1, "caseEditBig");
        //     }
        // });
        /*保存*/
        // $("#save_returnAddress").listen("quickClick", function (e) {
        //
        //     var opvalue=window.caseOneTaskAction.value;
        //
        //     window.picture_array=that.images;
        //
        //     var sum="";
        //     console.log(that.formList[2].model)
        //     if(!isNull(window.child)){
        //         sum+=window.child+";";
        //     }
        //     if(!isNull(window.deptment)){
        //         sum+=window.deptment+";";
        //     }
        //     if(!isNull(window.leader)){
        //         sum+=window.leader;
        //     }
        //     window.selectsum=sum;
        //
        //     if (window.caseOneTaskAction.value=="2"&&isNull(window.choiceThingsParts)&&window.localStorage.originNum!="4") {
        //         toast("请输入职能事项");
        //     }else if (window.caseOneTaskAction.value=="2"&&isNull(window.choiceBigType)&&window.localStorage.originNum!="4") {
        //         toast("请输入大类");
        //     }else if (window.caseOneTaskAction.value=="2"&&isNull(sum)) {
        //         toast("请选择网格长");
        //     }
        //     /*      else if ((3 == parseInt(window.caseOneTaskAction.opValue)) && (window.picture_array.length == 0||isNull(window.picture_array))) {
        //             toast("请上传图片");
        //         }  */
        //     /*      else if ($("#case_task_edit_problem").val()=="") {
        //              toast("请输入处理意见");
        //          } */
        //     else {
        //         // showContentAlert("确认提交本次处理吗？", function () {
        //         // }, function () {
        //         //     if (!isNull(window.picture_array) || window.picture_array.length > 0) {
        //         //         window.picture_upImg = "";
        //         //         //alert(window.picture_array)
        //         //         appWorkOrder_upLoadPic(window.picture_array[0], 1, "caseTaskEdit");
        //         //     } else {
        //         //         appWorkOrder_workOrderProcess($("#case_task_edit_problem").val());
        //         //     }
        //         // }, "确定");
        //         app.$createPotDialog({
        //             $props:{
        //                 type:'confirm',
        //                 content:'确认提交本次处理吗？'
        //             },
        //             $events:{
        //                 confirm(A){
        //                     if (!isNull(window.picture_array) || window.picture_array.length > 0) {
        //                         window.picture_upImg = "";
        //                         //alert(window.picture_array)
        //                         appWorkOrder_upLoadPic_todo(window.picture_array[0], 1, "caseTaskEdit");
        //                     } else {
        //                         appWorkOrder_workOrderProcess($("#case_task_edit_problem").val());
        //                     }
        //                 }
        //             }
        //         }).show()
        //     }
        // });
        //商品图片
        $("#case_task_edit_page #choicemore").click(function (e) {
            window.upload_imgscroll = "case_task_edit_img_scroll";
            window.upload_imgwrapper = "case_task_edit_img_wrapper";
            window.upload_addimg = "case_task_edit_img";
            getPhotograph();
        });

        /**
         * 是否可选择
         */
        function inithsCaseTaskEditSelect() {
            ;
            console.log(window.caseOneTaskAction.value);
            switch (parseInt(window.caseOneTaskAction.value)) {
                case 1:
                    //下派
                    console.log("下派");
                    $("#case_task_edit_page .case_task_edit_people").hide();
                    $("#case_task_edit_page .case_task_edit_deptment").hide();
                    $("#case_task_edit_page .case_task_edit_leader").hide();
                    that.isShow = false;
                    $("#case_task_edit_eventComponent_tr").hide();
                    $("#case_task_edit_bigClass_tr").hide();
                    // $("#case_task_edit_page .case_task_edit_addtime_tr").hide();
                    $("#case_task_edit_page .case_task_edit_people td:first-child").html("网格长");
                    $("#case_task_edit_page #case_task_edit_people").attr("placeholder", "请选择网格长");
                    break;
                case 2:
                case 32:
                    $("#case_task_edit_page .case_task_edit_people").show();
                    $("#case_task_edit_page .case_task_edit_deptment").show();
                    $("#case_task_edit_page .case_task_edit_leader").show();
                    that.isShow = true;
                    $("#case_task_edit_eventComponent_tr").show();
                    $("#case_task_edit_bigClass_tr").show();
                    if (window.localStorage.originNum == "4") {
                        $("#case_task_edit_eventComponent_tr").hide();
                        $("#case_task_edit_bigClass_tr").hide();
                    }
                    break;
                case 6:
                case 7:
                case 10:
                case 4:
                case 5:
                case 9:
                case 22:
                    console.log("反馈");
                    //  $("#case_task_edit_page .case_task_edit_addtime_tr").hide();
                    $("#case_task_edit_page .case_task_edit_people").hide();
                    $("#case_task_edit_page .case_task_edit_deptment").hide();
                    $("#case_task_edit_page .case_task_edit_leader").hide();
                    that.isShow = false;
                    $("#case_task_edit_eventComponent_tr").hide();
                    $("#case_task_edit_bigClass_tr").hide();
                    //反馈
                    break;
                case 12:
                    $("#case_task_edit_page .case_task_edit_people").hide();
                    $("#case_task_edit_page .case_task_edit_deptment").hide();
                    $("#case_task_edit_page .case_task_edit_leader").show();
                    that.isShow = false;
                    $("#case_task_edit_eventComponent_tr").hide();
                    $("#case_task_edit_bigClass_tr").hide();
                    break;
                case 11:
                case 14:
                case 15:
                case 16:
                case 17:
                case 18:
                case 41:
                case 42:
                case 43:
                    //地址，备注都不展示
                    console.log("111");
                    //     $("#case_task_edit_page .case_task_edit_addtime_tr").hide();
                    $("#case_task_edit_page .case_task_edit_people").hide();
                    $("#case_task_edit_page .case_task_edit_deptment").hide();
                    $("#case_task_edit_page .case_task_edit_leader").hide();
                    that.isShow = false;
                    $("#case_task_edit_eventComponent_tr").hide();
                    $("#case_task_edit_bigClass_tr").hide();
                    break;
                case 13:
                case 131:
                case 8:
                case 132:
                case 133:
                    //申请延期
                    //     $("#case_task_edit_page .case_task_edit_addtime_tr").show();
                    $("#case_task_edit_page .case_task_edit_people").hide();
                    $("#case_task_edit_page .case_task_edit_deptment").hide();
                    $("#case_task_edit_page .case_task_edit_leader").hide();
                    that.isShow = false;
                    $("#case_task_edit_eventComponent_tr").hide();
                    $("#case_task_edit_bigClass_tr").hide();
                    break;
                case 3:
                case 31:
                    //网格长审核
                    console.log("审核");

                    $("#case_task_edit_page .case_task_edit_people").hide();
                    $("#case_task_edit_page .case_task_edit_deptment").hide();
                    $("#case_task_edit_page .case_task_edit_leader").hide();
                    that.isShow = false;
                    $("#case_task_edit_eventComponent_tr").hide();
                    $("#case_task_edit_bigClass_tr").hide();
                    //   $("#case_task_edit_page .case_task_edit_addtime_tr").hide();
                    //    $("#case_task_edit_page .case_task_edit_people td:first-child").html("所属人员<span>*</span>");
                    //    $("#case_task_edit_page #case_task_edit_people").attr("placeholder", "请选择所属人员");
                    break;
                case 33:
                    //网格长审核
                    console.log("反馈");
                    //    $("#case_task_edit_page .case_task_edit_addtime_tr").hide();
                    $("#case_task_edit_page .case_task_edit_people").hide();
                    $("#case_task_edit_page .case_task_edit_deptment").hide();
                    $("#case_task_edit_page .case_task_edit_leader").hide();
                    that.isShow = false;
                    $("#case_task_edit_eventComponent_tr").hide();
                    $("#case_task_edit_bigClass_tr").hide();
                    break;
                default:
                    $("#case_task_edit_page .case_task_edit_people").hide();
                    $("#case_task_edit_page .case_task_edit_deptment").hide();
                    $("#case_task_edit_page .case_task_edit_leader").hide();
                    that.isShow = false;
                    $("#case_task_edit_eventComponent_tr").hide();
                    $("#case_task_edit_bigClass_tr").hide();
            }
        }
        /**
         * 初始化基本信息
         */
        function inithsCaseTaskRectiication() {
            $("#case_task_edit_wrapper")[0].style.height = window.localInnerHeight - $("#case_task_edit_page .page_header").height() - $("#case_task_edit_page .page_footer").height() + "px";
            // initScroll({
            //     "wrapper": "case_task_edit_wrapper",
            //     "dir": "y",
            //     "bounce": false,
            //     "scrollBar": true
            // });
            // scrollToTop("case_task_edit_wrapper");
            $("#case_task_edit_page table tr td").addClass("gray_line_bottom");
            $("#case_task_edit_page table tr td input").val("");
            $("#case_task_edit_page table tr td textarea").val("");
            //图片集合
            window.picture_array = [];
            initMapInfo("#case_task_edit_address");
            //真正上传的图片
            window.picture_upImg = "";
            //
            window.selectsum = "";
            window.childrenId = [];
            window.leaderId = [];
            window.deptmentId = [];
            //人员
            window.caseOneTaskPeopleId = "";
            //延期时间
            window.choiceDelayAddTime = "";
            $("#case_task_edit_img_scroll").css("transform", "none");
            $("#case_task_edit_img_wrapper .scroll-bar-x").css("transform", "none");
            $("#casetask_words").val("0/150");
            $("#case_task_edit_page #case_task_edit_img").empty();
            $("#case_task_edit_page #case_task_edit_img").append('<img class="goodsimgone" style="padding-top:2em;" src="/staitc/resources/images/icon_add_photo.png" id="choicemore">');
            $('input[type=radio][name="area"]:checked').prop("checked", false);
            $('#smallarea').prop("checked", true);
            $("#selectarea_div").hide();

            if (window.localStorage.orgin == "领导交办") {
                $("#taskedirtitle").text("事项处理");
                $("#casestaskselecttype_tr").show();
                $("#casestaskfile_tr").show();
            } else {
                $("#taskedirtitle").text("工单处理");
                $("#casestaskselecttype_tr").hide();
                $("#casestaskfile_tr").hide();
            }
        }
        function casetaskchangepic() {

            var file = $("#casetaskfile").val();
            var filename = file.replace(/.*(\/|\\)/, "");
            var fileExt = /[.]/.exec(filename) ? /[^.]+$/.exec(filename.toLowerCase()) : '';
            console.log(fileExt);
            var reads = new FileReader();
            f = document.getElementById('casetaskfile').files[0];
            reads.readAsDataURL(f);
            reads.onload = function (e) {
                console.log(this.result);
                casetaskattachmentUpload(this.result, fileExt[0]);
            };
        }
        //
        function casetaskattachmentUpload(img, type) {
            var obj = "";
            var filetype = $("#casetaskfileselect option:selected").val();
            obj += toJson("fileType", filetype) + "&";
            obj += toJson("base64Str", img);
            doPost("app_publicOpinion_attachmentUpload.action", obj, function (data) {

                window.casefileType = type;
                if (data.code == "0") {
                    window.caseUploadPath = data.datas.path;
                }
            }, "", "");
        }
        function hs_findgridList() {
            var that = this;
            // var obj = "";
            //
            // doPost("gridList.action", obj, function (data) {
            //
            //     window.childrenId=[];
            //     window.childrentext=[];
            //     var array = data.datas;
            //     console.log("数据：" + JSON.stringify(array));
            //     if (!isNull(array) && array.length > 0) {
            //         var text=[];
            //         var ids=[];
            //         for(var i=0;i<array.length;i++){
            //             text.push(array[i].text);
            //             ids.push(array[i].id);
            //         }
            //         that.formList[0].selects=text;
            //         that.formList[0].ids=ids;
            //
            //     }
            //
            // }, "");
            var url = '/wgh/app/' + 'gridList.action';
            _axios2.default.post(url).then(function (data) {
                window.childrenId = [];
                window.childrentext = [];
                var array = data.datas;
                console.log("数据：" + (0, _stringify2.default)(array));
                if (!isNull(array) && array.length > 0) {
                    var text = [];
                    var ids = [];
                    for (var i = 0; i < array.length; i++) {
                        text.push(array[i].text);
                        ids.push(array[i].id);
                    }
                    that.formList[0].selects = text;
                    that.formList[0].ids = ids;
                }
            });
        }

        function hs_findDepartmentList() {
            var that = this;
            // var obj = "";
            //
            // doPost("departmentList.action", obj, function (data) {
            //
            //     window.deptmentId=[];
            //     window.deptmenttext=[];
            //     var array = data.datas;
            //     console.log("数据：" + JSON.stringify(array));
            //     if (!isNull(array) && array.length > 0) {
            //         var text=[];
            //         var ids=[];
            //         for(var i=0;i<array.length;i++){
            //             text.push(array[i].text);
            //             ids.push(array[i].id);
            //         }
            //         that.formList[1].selects=text;
            //         that.formList[1].ids=ids;
            //
            //     }
            //
            // }, "");
            var url = '/wgh/app/' + 'departmentList.action';
            _axios2.default.post(url).then(function (data) {
                window.deptmentId = [];
                window.deptmenttext = [];
                var array = data.datas;
                console.log("数据：" + (0, _stringify2.default)(array));
                if (!isNull(array) && array.length > 0) {
                    var text = [];
                    var ids = [];
                    for (var i = 0; i < array.length; i++) {
                        text.push(array[i].text);
                        ids.push(array[i].id);
                    }
                    that.formList[1].selects = text;
                    that.formList[1].ids = ids;
                }
            });
        }
        function hs_findleaderList() {
            var that = this;
            //                 var obj = "";
            //
            //                 doPost("leaderList.action", obj, function (data) {
            // ;
            //                     window.leaderId=[];
            //                     window.leadertext=[];
            //                     var array = data.datas;
            //                     console.log("数据：" + JSON.stringify(array));
            //                     if (!isNull(array) && array.length > 0) {
            //                         var text=[];
            //                         var ids=[];
            //                         for(var i=0;i<array.length;i++){
            //                             text.push(array[i].text);
            //                             ids.push(array[i].id);
            //                         }
            //                         that.formList[2].selects=text;
            //                         that.formList[2].ids=ids;
            //
            //                     }
            //
            //                 }, "");
            var url = '/wgh/app/' + 'leaderList.action';
            _axios2.default.post(url).then(function (data) {
                window.leaderId = [];
                window.leadertext = [];
                var array = data.datas;
                console.log("数据：" + (0, _stringify2.default)(array));
                if (!isNull(array) && array.length > 0) {
                    var text = [];
                    var ids = [];
                    for (var i = 0; i < array.length; i++) {
                        text.push(array[i].text);
                        ids.push(array[i].id);
                    }
                    that.formList[2].selects = text;
                    that.formList[2].ids = ids;
                }
            });
        }
        function showGridOne() {
            $(".max-dialog").remove();
            var choice_one = "<div class='max-dialog'>";
            choice_one += "     <div class='max-dialog-masker alert_value_max'></div>";
            choice_one += "     <div class='max-dialog-frame'>";
            choice_one += "         <div  class='max-dialog-content'>";
            choice_one += "             <div id='noconfirm' class='jszx-wrapper max_height_div'>";
            choice_one += "                 <div class='jszx-scroller'>";

            choice_one += "                     <div class='max-dialog-text' id='choice_grid'>";
            //choice_one += (html || "");
            choice_one += "                     </div>";
            choice_one += '<div style="padding: 1em;text-align: center;"><span class="choice_btn" >确定</span></div>';
            choice_one += "                 </div>";

            choice_one += "             </div>";
            choice_one += "         </div>";
            choice_one += "     </div>";
            choice_one += "</div>";
            var $choice_one = $(choice_one).appendTo(".ui-page-active").show();
            initScroll({
                "wrapper": "noconfirm",
                "dir": "y",
                "bounce": true
            });

            setTimeout(function () {
                $choice_one.find(".alert_value_max").bind("click", function () {
                    $(".alert_value_scroll").fadeOut(500, function () {
                        $(".alert_value_scroll").remove();
                    });
                });
            }, 500);
            $choice_one.find("#choice_grid").bind("click", function () {
                $(".alert_value_scroll").fadeOut(500, function () {
                    $(".alert_value_scroll").remove();
                });
            });
        }
        function app_getMultiCodeChild_znsx(parent_id, dmbh, id, type, num) {
            $("#screen_more_content" + id).empty();
            var that = this;
            var obj = "";
            obj += toJson("parent_id", parent_id) + "&";
            obj += toJson("dmbh", dmbh);
            doPost("app_getMultiCodeChild.action", obj, function (data) {
                if (data.code == 0) {
                    var array = data.datas;
                    if (!isNull(array) && array.length > 0) {

                        console.log(that.formList[0].select);
                        var text = [];
                        var ids = [];
                        var dmbh = [];
                        for (var i = 0; i < array.length; i++) {
                            text.push(array[i].text);
                            ids.push(array[i].id);
                            dmbh.push(array[i].dmbh);
                        }
                        that.formList[0].select = text;
                        that.formList[0].ids = ids;
                        that.formList[0].dmbh = dmbh;
                    } else {
                        // toast("暂无数据")
                    }
                } else {
                    toast(data.message);
                }
            }, "", "");
        }
    },

    methods: {
        save_returnAddress: function save_returnAddress() {
            var that = this;

            var opvalue = window.caseOneTaskAction.value;

            window.picture_array = window.currthat.images;

            var sum = "";
            var gridlist = "";
            var deptmentlist = "";
            var leaderlist = "";
            console.log(window.currthat.formList[0].hasSelect);
            if (window.currthat.formList[0].hasSelect.length > 0) {
                var arr = [];
                window.currthat.formList[0].hasSelect.forEach(function (item) {
                    arr.push(window.currthat.formList[0].ids[item]);
                });
                console.log(arr);
                gridlist = arr.join(";");

                sum += gridlist + ";";
            }
            if (window.currthat.formList[1].hasSelect.length > 0) {
                var arr2 = [];
                window.currthat.formList[1].hasSelect.forEach(function (item) {
                    arr2.push(window.currthat.formList[1].ids[item]);
                });
                deptmentlist = arr2.join(";");
                sum += deptmentlist + ";";
            }
            if (window.currthat.formList[2].hasSelect.length > 0) {
                var arr3 = [];
                window.currthat.formList[2].hasSelect.forEach(function (item) {
                    arr3.push(window.currthat.formList[2].ids[item]);
                });
                leaderlist = arr3.join(";");
                window.leaderId = leaderlist;
                sum += leaderlist + ";";
            }
            // if(!isNull(window.child)){
            //     sum+=window.child+";";
            // }
            // if(!isNull(window.deptment)){
            //     sum+=window.deptment+";";
            // }
            // if(!isNull(window.leader)){
            //     sum+=window.leader;
            // }
            window.selectsum = sum;

            if (window.caseOneTaskAction.value == "2" && isNull(window.choiceThingsParts) && window.localStorage.originNum != "4") {
                toast("请输入职能事项");
            } else if (window.caseOneTaskAction.value == "2" && isNull(window.choiceBigType) && window.localStorage.originNum != "4") {
                toast("请输入大类");
            } else if (window.caseOneTaskAction.value == "2" && isNull(sum)) {
                toast("请选择网格长");
            }
            /*      else if ((3 == parseInt(window.caseOneTaskAction.value)) && (window.picture_array.length == 0||isNull(window.picture_array))) {
                    toast("请上传图片");
                }  */
            else if (that.content == "") {
                    toast("请输入工单处理意见");
                } else {
                    // showContentAlert("确认提交本次处理吗？", function () {
                    // }, function () {
                    //     if (!isNull(window.picture_array) || window.picture_array.length > 0) {
                    //         window.picture_upImg = "";
                    //         //alert(window.picture_array)
                    //         appWorkOrder_upLoadPic(window.picture_array[0], 1, "caseTaskEdit");
                    //     } else {
                    //         appWorkOrder_workOrderProcess($("#case_task_edit_problem").val());
                    //     }
                    // }, "确定");
                    app.$createPotDialog({
                        $props: {
                            type: 'confirm',
                            content: '确认提交本次处理吗？'
                        },
                        $events: {
                            confirm: function confirm(A) {
                                if (!isNull(window.picture_array) || window.picture_array.length > 0) {
                                    window.picture_upImg = "";
                                    //alert(window.picture_array)
                                    that.appWorkOrder_upLoadPic_todo(window.picture_array[0], 1, "caseTaskEdit");
                                } else {
                                    that.appWorkOrder_workOrderProcess_todo(that.content);
                                }
                            }
                        }
                    }).show();
                }
        },
        secondselect: function secondselect(indexArr, data) {
            console.log(indexArr);
            app_getMultiCodeChild_bigclass(parent_id, dmbh, id, type, num);
        },
        firstselect: function firstselect() {
            getMultilevelValueEdit("请选择职能事项", 3);
            app_getMultiCodeChild(window.caseTaskReportParentId, "", 1, "caseEdit", "3");
        },
        appWorkOrder_workOrderProcess_todo: function appWorkOrder_workOrderProcess_todo(comment) {
            console.log("上传的图片信息：" + window.picture_upImg);
            var that = this;
            //alert(window.picture_upImg)
            //    var file="";
            //    var fileType="";
            //    if(window.caseUploadPath){
            //    	file=window.caseUploadPath;
            //    	fileType=window.casefileType;
            //    }
            var area = $('input[name="area"]:checked').val();
            if (window.localStorage.currarea == "0") {
                area = "0";
            }
            //alert(window.picture_upImg);
            // var obj = "";
            // obj += toJson("comment", comment) + "&"; //意见
            // obj += toJson("pics", $.trim(window.picture_upImg)) + "&"; //t图片，;号分割
            // obj += toJson("taskId", $.trim(window.caseTaskOneTaskId)) + "&"; //任务的id
            // //  obj += toJson("nxtPerson", $.trim(window.caseOneTaskPeopleId)) + "&";//下一步执行的人
            // obj += toJson("opValue", $.trim(window.caseOneTaskAction.value)) + "&"; //下一流转的条件
            // //   obj += toJson("destId", $.trim(window.caseOneTaskAction.destId)) + "&";//下一节点的id
            // obj += toJson("delayNum", $.trim(window.choiceDelayAddTime)) + "&"; //延期时长
            // obj += toJson("rowId", $.trim(window.caseRow_id)) + "&"; //业务表id
            // obj += toJson("dealPerson", $.trim(window.selectsum)) + "&";
            // obj += toJson("leaderId", $.trim(window.leaderId)) + "&";
            // obj += toJson("eventComponent", $.trim(window.choiceThingsParts)) + "&";
            // obj += toJson("bigClass", $.trim(window.choiceBigType)) + "&";
            // obj += toJson("area", $.trim(area)) + "&";
            // //  obj += toJson("file", $.trim(file)) + "&";//flie
            // //  obj += toJson("fileType", $.trim(fileType)) + "&";//filetype
            // obj += toJson("loginId", $.trim(window.localStorage.loginId));
            // doPost("dsbOrderProcess.action", obj, function(data) {
            //     if (data.code == 0) {
            //         toast(data.message);
            //         window.thisCaseQueryType = "1";
            //         window.CaseWelcomePage = "";
            //         //waitJumpPage("../hscasetask/waitTodoCaseList.html");
            //
            //         that.$router.push({path: '/toDeal-index'});
            //         // that.$router.push("../toDeal-index");
            //     } else {
            //         toast(data.message);
            //     }
            // }, "", "");

            var para = {
                para: 'comment=' + comment + '&pics=' + window.picture_upImg + '&taskId=' + window.caseTaskOneTaskId + '&opValue=' + window.caseOneTaskAction.value + '&delayNum=' + window.choiceDelayAddTime + '&rowId=' + window.caseRow_id + '&dealPerson=' + window.selectsum + '&leaderId=' + window.leaderId + '&eventComponent=' + window.choiceThingsParts + '&bigClass=' + window.choiceBigType + '&area=' + area + '&loginId='
            };
            var url = '/wgh/app/' + 'dsbOrderProcess.action';
            that.$http.post(url, para).then(function (data) {
                if (data.code == 0) {
                    toast(data.message);
                    window.thisCaseQueryType = "1";
                    window.CaseWelcomePage = "";
                    //waitJumpPage("../hscasetask/waitTodoCaseList.html");

                    that.$router.push({ path: '/toDeal-index' });
                    // that.$router.push("../toDeal-index");
                } else {
                    toast(data.message);
                }
            });
        },
        appWorkOrder_upLoadPic_todo: function appWorkOrder_upLoadPic_todo(img, type, source) {
            var that = this;
            // var obj = "";
            // obj += toJson("base64Str", img);
            // doPost("app_publicOpinion_upPic.action", obj, function(data) {
            //     if (data.code == 0) {
            //         console.log("1111111111111111当前上传第:" + type + "张,下次上传第" + type + "张");
            //         if (type < parseInt(window.picture_array.length)) {
            //             console.log("当前上传第:" + type + "张,下次上传第" + type + "张");
            //             var typename = parseInt(type) + 1;
            //             that.appWorkOrder_upLoadPic_todo(window.picture_array[type], typename, source);
            //         } else {
            //             console.log("图片上传结束");
            //         }
            //         if (isNull(window.picture_upImg)) {
            //             window.picture_upImg = data.datas.path;
            //         } else {
            //             window.picture_upImg = window.picture_upImg + ";" + data.datas.path;
            //         }
            //
            //         //alert("图片数据：" + window.picture_upImg);
            //         toast(data.message);
            //         if (parseInt(type) == window.picture_array.length) {
            //
            //             that.appWorkOrder_workOrderProcess_todo(that.content);
            //             if (isNull(source)) {
            //                 //问题上报
            //                 //    appWorkOrder_workOrderReport("", $("#case_edit_address").html(), $("#case_edit_problem").val(), getNowTime(), "");
            //             } else if ("caseTaskEdit" == source) {
            //                 //工单处理
            //
            //             }
            //         }
            //     } else {
            //         toast(data.message);
            //     }
            // }, "", "");
            var url = '/wgh/app/app_publicOpinion_upPic.action';
            var dsobj = { para: 'base64Str=' + img };
            _axios2.default.post(url, dsobj).then(function (data) {
                if (data.code == 0) {
                    console.log("1111111111111111当前上传第:" + type + "张,下次上传第" + type + "张");
                    if (type < parseInt(window.picture_array.length)) {
                        console.log("当前上传第:" + type + "张,下次上传第" + type + "张");
                        var typename = parseInt(type) + 1;
                        that.appWorkOrder_upLoadPic_todo(window.picture_array[type], typename, source);
                    } else {
                        console.log("图片上传结束");
                    }
                    if (isNull(window.picture_upImg)) {
                        window.picture_upImg = data.datas.path;
                    } else {
                        window.picture_upImg = window.picture_upImg + ";" + data.datas.path;
                    }

                    //alert("图片数据：" + window.picture_upImg);
                    toast(data.message);
                    if (parseInt(type) == window.picture_array.length) {

                        that.appWorkOrder_workOrderProcess_todo(that.content);
                        if (isNull(source)) {
                            //问题上报
                            //    appWorkOrder_workOrderReport("", $("#case_edit_address").html(), $("#case_edit_problem").val(), getNowTime(), "");
                        } else if ("caseTaskEdit" == source) {
                            //工单处理

                        }
                    }
                } else {
                    toast(data.message);
                }
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

function app_getMultiCodeChild_bigclass(parent_id, dmbh, id, type, num) {
    var that = this;
    var obj = "";
    obj += toJson("parent_id", parent_id) + "&";
    obj += toJson("dmbh", "");
    doPost("app_getMultiCodeChild.action", obj, function (data) {
        if (data.code == 0) {
            var array = data.datas;
            if (!isNull(array) && array.length > 0) {

                var text = [];
                var ids = [];
                var dmbh = [];
                for (var i = 0; i < array.length; i++) {
                    text.push(array[i].text);
                    ids.push(array[i].id);
                    dmbh.push(array[i].dmbh);
                }
                that.formList[1].select = text;
                that.formList[1].ids = ids;
                that.formList[1].dmbh = dmbh;
            } else {
                // toast("暂无数据")
            }
        } else {
            toast(data.message);
        }
    }, "", "");
}

function getMultilevelValueEdit(title, type) {
    var more_html = '<div class ="max-dialog max-alert morepage">';
    more_html += '   <div class="max-dialog-masker"></div>';
    more_html += '   <div class="max-dialog-frame all_dialog_frame">';
    more_html += '       <div class="allert">';
    more_html += '           <div class="page_header more_alertheader">';
    more_html += '              <img class="more_leftbtn left_img back-button" src="../../../static/image/icon_white_back.png"/>';
    more_html += '               <div class="page_header_title">' + title + '</div>';
    more_html += '           </div>';
    more_html += '           <div class="page_content more_alertcontent" style="background: #ffffff;">';
    if ("2" == type || "3" == type) {
        more_html += '        <div id="screen_more_content1_wrapper" style="-webkit-box-shadow:none;width:' + window.innerWidth * 0.33 + 'px;float: left" class="jszx-wrapper ">';
    } else {
        more_html += '        <div id="screen_more_content1_wrapper" style="width:100%;" class="jszx-wrapper ">';
    }
    more_html += '                  <div class="jszx-scroller">';
    more_html += '                      <div class="alert_edit" id="screen_more_content1" style="">';
    more_html += '                       </div>';
    more_html += '                  </div>';
    more_html += '            </div>';
    if ("2" == type) {
        more_html += '    <div id="screen_more_content2_wrapper" class="jszx-wrapper" width="' + (window.innerWidth - $("#screen_content1_wrapper").width()) + '" style="-webkit-box-shadow:none;float: left;position: absolute;margin-left:7.5em;">';
        more_html += '          <div class="jszx-scroller">';
        more_html += '                  <div class=""  id="screen_more_content2" style="">';
        more_html += '                  </div>';
        more_html += '          </div>';
        more_html += '      </div>';
    } else if ("3" == type) {
        more_html += '    <div id="screen_more_content2_wrapper" class="jszx-wrapper" style="width:' + window.innerWidth * 0.33 + 'px;-webkit-box-shadow:none;float: left;position: absolute;margin-left:' + window.innerWidth * 0.33 + 'px;">';
        more_html += '          <div class="jszx-scroller">';
        more_html += '                  <div class=""  id="screen_more_content2" style="">';
        more_html += '                  </div>';
        more_html += '          </div>';
        more_html += '      </div>';
        more_html += '    <div id="screen_more_content3_wrapper" class="jszx-wrapper"  style="width:' + window.innerWidth * 0.34 + 'px;-webkit-box-shadow:none;float: left;position: absolute;margin-left:' + window.innerWidth * 0.66 + 'px;">';
        more_html += '          <div class="jszx-scroller">';
        more_html += '                  <div class=""  id="screen_more_content3" style="">';
        more_html += '                 </div>';
        more_html += '          </div>';
        more_html += '      </div>';
    } else if ("4" == type) {
        more_html += '    <div id="screen_more_content4_wrapper" class="jszx-wrapper"  style="width：100%;-webkit-box-shadow:none;float: left;position: absolute;">';
        more_html += '          <div class="jszx-scroller">';
        more_html += '                  <div class=""  id="screen_more_content4" style="">';
        more_html += '                  </div>';
        more_html += '          </div>';
        more_html += '      </div>';
    }
    more_html += '           </div>';
    //more_html += '           <div class="page_footer allalertfooter" style="position:absolute;bottom:0em;">';
    //more_html += ' <div class="footer_button_div">';
    //more_html += '     <div id="more_alert_yes" style="width:35%;float:left;" class="alert_bottom_three gray_background">' + (yesname || "取消") + '</div>';
    //more_html += '     <div id="more_alert_noyes"  style="width:35%;float:left;" class="alert_bottom_three orange_background">' + (noname || "取消") + '</div>';
    //more_html += ' </div>';
    //more_html += '           </div>';
    more_html += '       </div>';
    more_html += '   </div>';
    more_html += '</div>';
    var morepage = $(more_html).appendTo("#case_task_edit_page");
    $(".morepage").fadeIn(800);
    $(".more_alertcontent").css("height", window.localInnerHeight - $(".more_alertheader").height() + "px");
    $("#screen_more_content1_wrapper").css("height", window.localInnerHeight - $(".more_alertheader").height() + "px");
    // $("#screen_more_content1_wrapper").height= window.localInnerHeight - $(".more_alertheader").height() + "px";

    if ("2" == type) {
        $("#screen_more_content2_wrapper")[0].style.height = window.localInnerHeight - $(".more_alertheader").height() + "px";
        initScroll({
            "wrapper": "screen_more_content2_wrapper",
            "dir": "y",
            "bounce": false,
            "scrollBar": true
        });
    }
    if ("3" == type) {
        //  $("#screen_more_content2_wrapper")[0].style.height = window.localInnerHeight - $(".more_alertheader").height() + "px";
        $("#screen_more_content2_wrapper").css("height", window.localInnerHeight - $(".more_alertheader").height() + "px");
        $("#screen_more_content3_wrapper").css("height", window.localInnerHeight - $(".more_alertheader").height() + "px");
        //   $("#screen_more_content3_wrapper")[0].style.height = window.localInnerHeight - $(".more_alertheader").height() + "px";
    }
    morepage.find("#more_alert_noyes").bind("click", function () {
        if (nofun) nofun.call();
        $(".morepage").fadeOut(800, function () {
            $(".morepage").remove();
        });
    });
    morepage.find(".more_leftbtn").bind("click", function () {
        $(".morepage").fadeOut(800, function () {
            $(".morepage").remove();
        });
    });
    morepage.find("#more_alert_yes").bind("click", function () {
        if (yesfun) yesfun.call();
        $(".morepage").fadeOut(800, function () {
            $(".morepage").remove();
        });
    });
}

// function appWorkOrder_workOrderProcess_todo(comment) {
//     console.log("上传的图片信息：" + window.picture_upImg);
//     var that=this;
//     //    var file="";
//     //    var fileType="";
//     //    if(window.caseUploadPath){
//     //    	file=window.caseUploadPath;
//     //    	fileType=window.casefileType;
//     //    }
//     var area = $('input[name="area"]:checked').val();
//     if (window.localStorage.currarea == "0") {
//         area = "0";
//     }
//     //alert(window.picture_upImg);
//     var obj = "";
//     obj += toJson("comment", comment) + "&"; //意见
//     obj += toJson("pics", $.trim(window.picture_upImg)) + "&"; //t图片，;号分割
//     obj += toJson("taskId", $.trim(window.caseTaskOneTaskId)) + "&"; //任务的id
//     //  obj += toJson("nxtPerson", $.trim(window.caseOneTaskPeopleId)) + "&";//下一步执行的人
//     obj += toJson("opValue", $.trim(window.caseOneTaskAction.value)) + "&"; //下一流转的条件
//     //   obj += toJson("destId", $.trim(window.caseOneTaskAction.destId)) + "&";//下一节点的id
//     obj += toJson("delayNum", $.trim(window.choiceDelayAddTime)) + "&"; //延期时长
//     obj += toJson("rowId", $.trim(window.caseRow_id)) + "&"; //业务表id
//     obj += toJson("dealPerson", $.trim(window.selectsum)) + "&";
//     obj += toJson("leaderId", $.trim(window.leaderId)) + "&";
//     obj += toJson("eventComponent", $.trim(window.choiceThingsParts)) + "&";
//     obj += toJson("bigClass", $.trim(window.choiceBigType)) + "&";
//     obj += toJson("area", $.trim(area)) + "&";
//     //  obj += toJson("file", $.trim(file)) + "&";//flie
//     //  obj += toJson("fileType", $.trim(fileType)) + "&";//filetype
//     obj += toJson("loginId", $.trim(window.localStorage.loginId));
//     doPost("dsbOrderProcess.action", obj, function(data) {
//         if (data.code == 0) {
//             toast(data.message);
//             window.thisCaseQueryType = "1";
//             window.CaseWelcomePage = "";
//             //waitJumpPage("../hscasetask/waitTodoCaseList.html");
//             alert(1)
//             that.$router.push({path: '/toDeal-index'});
//             // that.$router.push("../toDeal-index");
//         } else {
//             toast(data.message);
//         }
//     }, "", "");
//
// }

// function appWorkOrder_upLoadPic_todo(img, type, source) {
//     var that=this;
//     var obj = "";
//     obj += toJson("base64Str", img);
//     doPost("app_publicOpinion_upPic.action", obj, function(data) {
//         if (data.code == 0) {
//             console.log("1111111111111111当前上传第:" + type + "张,下次上传第" + type + "张");
//             if (type < parseInt(window.picture_array.length)) {
//                 console.log("当前上传第:" + type + "张,下次上传第" + type + "张");
//                 var typename = parseInt(type) + 1;
//                 appWorkOrder_upLoadPic_todo(window.picture_array[type], typename, source);
//             } else {
//                 console.log("图片上传结束");
//             }
//             if (isNull(window.picture_upImg)) {
//                 window.picture_upImg = data.datas.path;
//             } else {
//                 window.picture_upImg = window.picture_upImg + ";" + data.datas.path;
//             }
//
//             //alert("图片数据：" + window.picture_upImg);
//             toast(data.message);
//             if (parseInt(type) == window.picture_array.length) {
//
//                 that.appWorkOrder_workOrderProcess_todo(that.content);
//                 if (isNull(source)) {
//                     //问题上报
//                 //    appWorkOrder_workOrderReport("", $("#case_edit_address").html(), $("#case_edit_problem").val(), getNowTime(), "");
//                 } else if ("caseTaskEdit" == source) {
//                     //工单处理
//
//                 }
//             }
//         } else {
//             toast(data.message);
//         }
//     }, "", "");
// }

/***/ }),

/***/ 1322:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1531);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(1062).default
var update = add("9e7d4bb4", content, true, {});

/***/ }),

/***/ 1529:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/_vue-loader@15.8.3@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/_vue-loader@15.8.3@vue-loader/lib??vue-loader-options!./src/view/caseDetail/waitcaseTaskEdit.vue?vue&type=template&id=74fef5b2&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{"data-role":"page","id":"case_task_edit_page"}},[_c('tk-header',[_vm._v("\n        工单处理\n    ")]),_vm._v(" "),_c('tk-container',[_c('tk-scroll',[_c('div',{staticClass:"handle-case-edit-content"},[_c('table',{staticClass:"inp_table",attrs:{"cellpadding":"0","cellspacing":"0"}},[_c('tr',{attrs:{"id":"case_task_edit_eventComponent_tr"}},[_c('td',{staticStyle:{"min-width":"5em","color":"#333333"}},[_vm._v("职能事项"),_c('span',[_vm._v("*")])]),_vm._v(" "),_c('td',{staticStyle:{"text-align":"right"},on:{"click":_vm.firstselect}},[_c('input',{staticStyle:{"font-size":"14px"},attrs:{"readonly":"","id":"case_task_edit_eventComponent","type":"text","placeholder":"请选择职能事项"}})]),_vm._v(" "),_c('td',{staticStyle:{"width":"5%","padding-left":"0"}},[_c('img',{attrs:{"src":"/dist/image/right.cc5faf.png"}})])]),_vm._v(" "),_c('tr',{attrs:{"id":"case_task_edit_bigClass_tr"}},[_c('td',{staticStyle:{"min-width":"5em","color":"#333333"}},[_vm._v("大类"),_c('span',[_vm._v("*")])]),_vm._v(" "),_c('td',{staticStyle:{"text-align":"right"},on:{"click":_vm.secondselect}},[_c('input',{attrs:{"readonly":"","id":"case_task_edit_bigClass","type":"text","placeholder":"请选择大类"}})]),_vm._v(" "),_c('td',{staticStyle:{"width":"5%","font-size":"13px","padding-left":"0"}},[_c('img',{attrs:{"src":"/dist/image/right.cc5faf.png"}})])])]),_vm._v(" "),_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.isShow),expression:"isShow"}]},[_c('tk-form',{attrs:{"list":_vm.formList}})],1),_vm._v(" "),_c('tk-textarea',{attrs:{"placeholder":"请输入工单处理意见"},model:{value:(_vm.content),callback:function ($$v) {_vm.content=$$v},expression:"content"}}),_vm._v(" "),_c('tk-title',[_vm._v("上传工单证据")]),_vm._v(" "),_c('tk-upload-photo',{model:{value:(_vm.images),callback:function ($$v) {_vm.images=$$v},expression:"images"}})],1)]),_vm._v(" "),_c('tk-button',{attrs:{"id":"save_returnAddress"},on:{"click":_vm.save_returnAddress}},[_vm._v("提交")])],1)],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/view/caseDetail/waitcaseTaskEdit.vue?vue&type=template&id=74fef5b2&
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });


/***/ }),

/***/ 1530:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__node_modules_extract_text_webpack_plugin_3_0_2_extract_text_webpack_plugin_dist_loader_js_ref_8_0_node_modules_vue_style_loader_4_1_2_vue_style_loader_index_js_node_modules_css_loader_0_28_11_css_loader_index_js_ref_8_2_node_modules_vue_loader_15_8_3_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_8_3_node_modules_px2rem_loader_0_1_9_px2rem_loader_index_js_ref_8_4_node_modules_less_loader_4_1_0_less_loader_dist_cjs_js_ref_8_5_node_modules_vue_loader_15_8_3_vue_loader_lib_index_js_vue_loader_options_waitcaseTaskEdit_vue_vue_type_style_index_0_lang_less___ = __webpack_require__(1322);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__node_modules_extract_text_webpack_plugin_3_0_2_extract_text_webpack_plugin_dist_loader_js_ref_8_0_node_modules_vue_style_loader_4_1_2_vue_style_loader_index_js_node_modules_css_loader_0_28_11_css_loader_index_js_ref_8_2_node_modules_vue_loader_15_8_3_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_8_3_node_modules_px2rem_loader_0_1_9_px2rem_loader_index_js_ref_8_4_node_modules_less_loader_4_1_0_less_loader_dist_cjs_js_ref_8_5_node_modules_vue_loader_15_8_3_vue_loader_lib_index_js_vue_loader_options_waitcaseTaskEdit_vue_vue_type_style_index_0_lang_less____default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__node_modules_extract_text_webpack_plugin_3_0_2_extract_text_webpack_plugin_dist_loader_js_ref_8_0_node_modules_vue_style_loader_4_1_2_vue_style_loader_index_js_node_modules_css_loader_0_28_11_css_loader_index_js_ref_8_2_node_modules_vue_loader_15_8_3_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_8_3_node_modules_px2rem_loader_0_1_9_px2rem_loader_index_js_ref_8_4_node_modules_less_loader_4_1_0_less_loader_dist_cjs_js_ref_8_5_node_modules_vue_loader_15_8_3_vue_loader_lib_index_js_vue_loader_options_waitcaseTaskEdit_vue_vue_type_style_index_0_lang_less___);
/* unused harmony reexport namespace */
 /* unused harmony default export */ var _unused_webpack_default_export = (__WEBPACK_IMPORTED_MODULE_0__node_modules_extract_text_webpack_plugin_3_0_2_extract_text_webpack_plugin_dist_loader_js_ref_8_0_node_modules_vue_style_loader_4_1_2_vue_style_loader_index_js_node_modules_css_loader_0_28_11_css_loader_index_js_ref_8_2_node_modules_vue_loader_15_8_3_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_8_3_node_modules_px2rem_loader_0_1_9_px2rem_loader_index_js_ref_8_4_node_modules_less_loader_4_1_0_less_loader_dist_cjs_js_ref_8_5_node_modules_vue_loader_15_8_3_vue_loader_lib_index_js_vue_loader_options_waitcaseTaskEdit_vue_vue_type_style_index_0_lang_less____default.a); 

/***/ }),

/***/ 1531:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1061)(true);
// imports


// module
exports.push([module.i, "#case_task_edit_page .pot-scroll-wrapper{height:92%}#case_task_edit_page .commodityAddImgs{overflow:hidden;background:#f3f3f3}#case_task_edit_page .imgdiv{padding:.7em;padding-top:0;position:relative;width:6em;float:left}#case_task_edit_page .goodsimgone{float:left;width:6em;margin-top:-1em}#case_task_edit_page .delimg{width:2em;height:2em;position:relative;top:0;left:5em}#case_task_edit_page #case_task_edit_img{height:7.5em;overflow:hidden;display:inline-block}#case_task_edit_page .div_input_value_img{width:1.5em;height:1.5em;padding-right:.5em}#case_task_edit_page #selectarea_div{background:#fff}#case_task_edit_page .secondTitle{padding:1.25rem;padding-left:1.3em}#case_task_edit_page .secondTitle span{color:#9f9f9f}#case_task_edit_page .ui-radio{display:inline-block;vertical-align:middle;padding-left:2.5rem}#case_task_edit_page .ui-radio input{width:1rem;height:1rem;margin:-.5rem 0 0}#case_task_edit_page #leaderfragment-1,#case_task_edit_page #leaderfragment-2,#case_task_edit_page #leaderfragment-3{width:100%;display:none;text-align:left;margin-left:1.375rem;margin-top:.75rem}#case_task_edit_page .action{border-bottom:.125rem solid red;height:2.6875rem}#case_task_edit_page #JB_dept li,#case_task_edit_page #JB_subdept li{line-height:2.1875rem;border-bottom:.0625rem solid #ddd;font-size:.9375rem}#case_task_edit_page .choice_btn{background:#f5a035;width:5em;display:inline-block;height:2em;line-height:2em;border-radius:.3em;color:#fff}#case_task_edit_page .alert_edit_title{text-align:left}#case_task_edit_page .inp_table td{padding-left:.8125rem;line-height:3.125rem;border-bottom:.0625rem solid #efefef}", "", {"version":3,"sources":["/Users/zz/project/zhzf_platform/vue/mobile1.0/src/view/caseDetail/waitcaseTaskEdit.vue"],"names":[],"mappings":"AAMA,yCACE,UAAW,CACb,AAEA,uCACE,gBAAgB,AAChB,kBAAmB,CACrB,AAEA,6BACE,aAAc,AACd,cAAgB,AAChB,kBAAkB,AAClB,UAAU,AACV,UAAW,CACb,AAEA,kCACE,WAAW,AACX,UAAU,AACV,eAAgB,CAClB,AAEA,6BACE,UAAU,AACV,WAAW,AACX,kBAAkB,AAClB,MAAQ,AACR,QAAS,CACX,AAEA,yCACE,aAAa,AACb,gBAAgB,AAChB,oBAAqB,CACvB,AAEA,0CACE,YAAY,AACZ,aAAa,AACb,kBAAoB,CACtB,AAEA,qCACE,eAAmB,CACrB,AAEA,kCACE,gBAAgB,AAChB,kBAAmB,CACrB,AAEA,uCACE,aAAc,CAChB,AAEA,+BACE,qBAAqB,AACrB,sBAAsB,AACtB,mBAAoB,CACtB,AAEA,qCACE,WAAW,AACX,YAAY,AACZ,iBAAqB,CACvB,AAEA,qHAGE,WAAW,AACX,aAAa,AACb,gBAAgB,AAChB,qBAAqB,AACrB,iBAAmB,CACrB,AAEA,6BACE,gCAAiC,AACjC,gBAAiB,CACnB,AAQA,qEACE,sBAAsB,AACtB,kCAAmC,AACnC,kBAAoB,CACtB,AAEA,iCACE,mBAAmB,AACnB,UAAU,AACV,qBAAqB,AACrB,WAAW,AACX,gBAAgB,AAChB,mBAAoB,AACpB,UAAW,CACb,AAEA,uCACE,eAAgB,CAClB,AAEA,mCACE,sBAAuB,AACvB,qBAAqB,AACrB,oCAAsC,CACxC","file":"waitcaseTaskEdit.vue?vue&type=style&index=0&lang=less&","sourcesContent":["/*img start*/\n\n#case_task_edit_page {\n  /*img end*/\n}\n\n#case_task_edit_page .pot-scroll-wrapper {\n  height: 92%;\n}\n\n#case_task_edit_page .commodityAddImgs {\n  overflow: hidden;\n  background: #f3f3f3;\n}\n\n#case_task_edit_page .imgdiv {\n  padding: 0.7em;\n  padding-top: 0em;\n  position: relative;\n  width: 6em;\n  float: left;\n}\n\n#case_task_edit_page .goodsimgone {\n  float: left;\n  width: 6em;\n  margin-top: -1em;\n}\n\n#case_task_edit_page .delimg {\n  width: 2em;\n  height: 2em;\n  position: relative;\n  top: 0em;\n  left: 5em;\n}\n\n#case_task_edit_page #case_task_edit_img {\n  height: 7.5em;\n  overflow: hidden;\n  display: inline-block;\n}\n\n#case_task_edit_page .div_input_value_img {\n  width: 1.5em;\n  height: 1.5em;\n  padding-right: 0.5em;\n}\n\n#case_task_edit_page #selectarea_div {\n  background: #ffffff;\n}\n\n#case_task_edit_page .secondTitle {\n  padding: 1.25rem;\n  padding-left: 1.3em;\n}\n\n#case_task_edit_page .secondTitle span {\n  color: #9f9f9f;\n}\n\n#case_task_edit_page .ui-radio {\n  display: inline-block;\n  vertical-align: middle;\n  padding-left: 2.5rem;\n}\n\n#case_task_edit_page .ui-radio input {\n  width: 1rem;\n  height: 1rem;\n  margin: -0.5rem 0 0 0;\n}\n\n#case_task_edit_page #leaderfragment-1,\n#case_task_edit_page #leaderfragment-2,\n#case_task_edit_page #leaderfragment-3 {\n  width: 100%;\n  display: none;\n  text-align: left;\n  margin-left: 1.375rem;\n  margin-top: 0.75rem;\n}\n\n#case_task_edit_page .action {\n  border-bottom: 0.125rem solid red;\n  height: 2.6875rem;\n}\n\n#case_task_edit_page #JB_dept li {\n  line-height: 2.1875rem;\n  border-bottom: 0.0625rem solid #ddd;\n  font-size: 0.9375rem;\n}\n\n#case_task_edit_page #JB_subdept li {\n  line-height: 2.1875rem;\n  border-bottom: 0.0625rem solid #ddd;\n  font-size: 0.9375rem;\n}\n\n#case_task_edit_page .choice_btn {\n  background: #f5a035;\n  width: 5em;\n  display: inline-block;\n  height: 2em;\n  line-height: 2em;\n  border-radius: 0.3em;\n  color: #fff;\n}\n\n#case_task_edit_page .alert_edit_title {\n  text-align: left;\n}\n\n#case_task_edit_page .inp_table td {\n  padding-left: 0.8125rem;\n  line-height: 3.125rem;\n  border-bottom: 0.0625rem solid #efefef;\n}"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ 515:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__waitcaseTaskEdit_vue_vue_type_template_id_74fef5b2___ = __webpack_require__(1529);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__waitcaseTaskEdit_vue_vue_type_script_lang_js___ = __webpack_require__(1320);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_1__waitcaseTaskEdit_vue_vue_type_script_lang_js___) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_1__waitcaseTaskEdit_vue_vue_type_script_lang_js___[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__waitcaseTaskEdit_vue_vue_type_style_index_0_lang_less___ = __webpack_require__(1530);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__node_modules_vue_loader_15_8_3_vue_loader_lib_runtime_componentNormalizer_js__ = __webpack_require__(0);






/* normalize component */

var component = Object(__WEBPACK_IMPORTED_MODULE_3__node_modules_vue_loader_15_8_3_vue_loader_lib_runtime_componentNormalizer_js__["a" /* default */])(
  __WEBPACK_IMPORTED_MODULE_1__waitcaseTaskEdit_vue_vue_type_script_lang_js___["default"],
  __WEBPACK_IMPORTED_MODULE_0__waitcaseTaskEdit_vue_vue_type_template_id_74fef5b2___["a" /* render */],
  __WEBPACK_IMPORTED_MODULE_0__waitcaseTaskEdit_vue_vue_type_template_id_74fef5b2___["b" /* staticRenderFns */],
  false,
  null,
  null,
  null
  
)

/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ })

});