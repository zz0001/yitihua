<template>
    <div data-role="page" id="case_task_edit_page">
        <tk-header>
            工单处理
        </tk-header>
        <div class="page_content">
            <div id="case_task_edit_wrapper" class="jszx-wrapper">
                <div class="jszx-scroller">
                    <div class="html_margin white_background">
                        <table class="inp_table" cellpadding="0" cellspacing="0">

                            <tr class="case_task_edit_people">
                                <td style="min-width: 5em;" class="">所属网格<span>*</span></td>
                                <td>
                                    <input readonly id="case_task_edit_people" placeholder="请选择所属网格" type="text"/>
                                </td>
                                <td style="width: 1%;padding-right:1em;">
                                    <img src="/staitc/resources/images/icon_gray_solid_down.png">
                                </td>
                            </tr>
                            <tr class="case_task_edit_addtime_tr">
                                <td style="min-width: 5em;" class="">延期时长<span>*</span></td>
                                <td>
                                    <input readonly id="case_task_edit_addtime" placeholder="请选择延期时长" type="text"/>
                                </td>
                                <td style="width: 1%;padding-right:1em;">
                                    <img src="/staitc/resources/images/icon_gray_solid_down.png">
                                </td>
                            </tr>

                        </table>
                        <table class="inp_table" cellpadding="0" cellspacing="0">
                            <tr>
                                <td style="padding-top:0.5em;">处理意见<span>*</span></td>
                                <td colspan="2">
                                    <input class="small gray_dark_font" style="color:#999999;" readonly="true"
                                           id="casetask_words"/>
                                </td>
                            </tr>
                            <tr>
                                <td colspan="3">
                            <textarea
                                    onfocus="newCheckWord('case_task_edit_problem',500,'casetask_words')"
                                    onKeyUp="javascript:newCheckWord('case_task_edit_problem',500,'casetask_words');"
                                    onMouseDown="javascript:newCheckWord('case_task_edit_problem',500,'casetask_words');"
                                    placeholder="请输入处理意见" id="case_task_edit_problem"
                                    style="text-align:left;min-height: 5em;padding:0em 0.5em 0em 1em;"></textarea>

                                </td>
                            </tr>
                            <tr id="casestaskselecttype_tr">
                                <td style="padding-top:0.5em;padding-bottom:0.5em;width: 80px;"
                                    class="gray_line_bottom">上传文件类型
                                </td>
                                <td colspan="2" class="gray_line_bottom">
                                    <div style="width:90%;">
                                        <select id="casetaskfileselect">
                                            <option value="xlsx" selected>excel表格</option>
                                            <option value="docx">word文档</option>
                                            <option value="txt">text文本</option>
                                        </select>
                                    </div>

                                </td>
                            </tr>
                            <tr id="casestaskfile_tr">
                                <td style="padding-top:0.5em;padding-bottom:0.5em;width: 80px;"
                                    class="gray_line_bottom">上传附件
                                </td>
                                <td colspan="2" class="gray_line_bottom">
                                    <!-- <input style="width:200px;" type="file" name="img" multiple="multiple" /> -->
                                    <form action="" enctype="multipart/form-data" style="text-align:center;">
                                        <input style="width:90%;" id="casetaskfile" class="filepath"
                                               onchange="casetaskchangepic(this)" type="file"><br>
                                        <!-- <img src="" id="show" width="200"> -->
                                    </form>

                                </td>
                            </tr>
                            <tr>
                                <td>上传图片</td>
                                <td colspan="2">
                                    <input id="good_num" class="small" value="0/5" readonly type="text">
                                </td>
                            </tr>
                            <tr>
                                <td colspan="3" class="commodityAddImgs">
                                    <div id="case_task_edit_img_wrapper" class="jszx-wrapper">
                                        <div class="jszx-scroller" id="case_task_edit_img_scroll">
                                            <div id="case_task_edit_img">
                                            </div>
                                        </div>
                                    </div>
                                </td>
                            </tr>
                        </table>
                    </div>
                </div>
            </div>
        </div>
        <div class="page_footer">
            <div class="footer_button_div">
                <div id="save_returnAddress" class="alert_bottom_three orange_background">提交</div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "",
        mounted() {
            var that = this;
            window.searchPage = 2;

            //设置input和textarea的样式
            $("input").addClass("small gray_dark_font ui-input-text ui-body-c ui-corner-all ui-shadow-inset");
            $("textarea").addClass("ui-input-text ui-body-c ui-corner-all ui-shadow-inset");

            initCaseTaskRectiication();
            initCaseTaskEditSelect();
            /*选择*/
            $("#case_task_edit_page .case_task_edit_people").listen("quickClick", function (e) {
                console.log("所属网格");
                appWorkOrder_getPersonData();
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
            /*保存*/
            $("#case_task_edit_page .footer_button_div").listen("quickClick", function (e) {
                ;
                if ((13 == parseInt(window.caseOneTaskAction.opValue) || 131 == parseInt(window.caseOneTaskAction.opValue) || 132 == parseInt(window.caseOneTaskAction.opValue) || 133 == parseInt(window.caseOneTaskAction.opValue) || 8 == parseInt(window.caseOneTaskAction.opValue)) && isNull(window.choiceDelayAddTime)) {
                    toast("请输入延期时长");
                } else if (1 == parseInt(window.caseOneTaskAction.opValue) && isNull(window.caseOneTaskPeopleId)) {
                    toast("请选择所属网格");
                } else if ((3 == parseInt(window.caseOneTaskAction.opValue)) && isNull(window.caseOneTaskPeopleId)) {
                    toast("请选择所属人员");
                } else if ($("#case_task_edit_problem").val() == "") {
                    toast("请输入处理意见");
                } else {
                    showContentAlert("确认提交本次处理吗？", function () {
                    }, function () {
                        if (!isNull(window.picture_array) || window.picture_array.length > 0) {
                            window.picture_upImg = "";
                            appWorkOrder_upLoadPic(window.picture_array[0], 1, "caseTaskEdit");
                        } else {
                            appWorkOrder_workOrderProcess($("#case_task_edit_problem").val());
                        }
                    }, "确定");
                }
            });
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
            function initCaseTaskEditSelect() {
                switch (parseInt(window.caseOneTaskAction.opValue)) {
                    case 1:
                        //下派
                        console.log("下派");
                        $("#case_task_edit_page .case_task_edit_people").show();
                        $("#case_task_edit_page .case_task_edit_addtime_tr").hide();
                        $("#case_task_edit_page .case_task_edit_people td:first-child").html("所属网格<span>*</span>");
                        $("#case_task_edit_page #case_task_edit_people").attr("placeholder", "请选择所属网格");
                        break;
                    case 2:
                    case 6:
                    case 7:
                    case 10:
                    case 4:
                    case 5:
                    case 9:
                        console.log("反馈");
                        $("#case_task_edit_page .case_task_edit_addtime_tr").hide();
                        $("#case_task_edit_page .case_task_edit_people").hide();
                        //反馈
                        break;
                    case 11:
                    case 12:
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
                        $("#case_task_edit_page .case_task_edit_addtime_tr").hide();
                        $("#case_task_edit_page .case_task_edit_people").hide();
                        break;
                    case 13:
                    case 131:
                    case 8:
                    case 132:
                    case 133:
                        //申请延期
                        $("#case_task_edit_page .case_task_edit_addtime_tr").show();
                        $("#case_task_edit_page .case_task_edit_people").hide();
                        break;
                    case 3:
                        //网格长审核
                        console.log("审核");
                        $("#case_task_edit_page .case_task_edit_people").show();
                        $("#case_task_edit_page .case_task_edit_addtime_tr").hide();
                        $("#case_task_edit_page .case_task_edit_people td:first-child").html("所属人员<span>*</span>");
                        $("#case_task_edit_page #case_task_edit_people").attr("placeholder", "请选择所属人员");
                        break;
                    case 33:
                        //网格长审核
                        console.log("反馈");
                        $("#case_task_edit_page .case_task_edit_addtime_tr").hide();
                        $("#case_task_edit_page .case_task_edit_people").hide();
                        break;
                }
            }

            /**
             * 初始化基本信息
             */
            function initCaseTaskRectiication() {
                $("#case_task_edit_wrapper")[0].style.height = window.localInnerHeight - $("#case_task_edit_page .page_header").height() - $("#case_task_edit_page .page_footer").height() + "px";
                initScroll({
                    "wrapper": "case_task_edit_wrapper",
                    "dir": "y",
                    "bounce": false,
                    "scrollBar": true
                });
                scrollToTop("case_task_edit_wrapper");
                $("#case_task_edit_page table tr td").addClass("gray_line_bottom");
                $("#case_task_edit_page table tr td input").val("");
                $("#case_task_edit_page table tr td textarea").val("");
                //图片集合
                window.picture_array = [];
                initMapInfo("#case_task_edit_address");
                //真正上传的图片
                window.picture_upImg = "";
                //人员
                window.caseOneTaskPeopleId = "";
                //延期时间
                window.choiceDelayAddTime = "";
                $("#case_task_edit_img_scroll").css("transform", "none");
                $("#case_task_edit_img_wrapper .scroll-bar-x").css("transform", "none");
                $("#casetask_words").val("0/150");
                $("#case_task_edit_page #case_task_edit_img").empty();
                $("#case_task_edit_page #case_task_edit_img").append('<img class="goodsimgone" style="padding-top:2em;" src="/staitc/resources/images/icon_add_photo.png" id="choicemore">');
                ;
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

                var file = $("#casetaskfile").val()
                var filename = file.replace(/.*(\/|\\)/, "");
                var fileExt = (/[.]/.exec(filename)) ? /[^.]+$/.exec(filename.toLowerCase()) : '';
                console.log(fileExt);
                var reads = new FileReader();
                f = document.getElementById('casetaskfile').files[0];
                reads.readAsDataURL(f);
                reads.onload = function (e) {
                    console.log(this.result);
                    casetaskattachmentUpload(this.result, fileExt[0]);
                };
            }

            function casetaskattachmentUpload(img, type) {
                var obj = "";
                var filetype = $("#casetaskfileselect option:selected").val();
                obj += toJson("fileType", filetype) + "&";
                obj += toJson("base64Str", img);
                doPost("app_publicOpinion_attachmentUpload.action", obj, function (data) {
                    ;
                    window.casefileType = type;
                    if (data.code == "0") {
                        window.caseUploadPath = data.datas.path;
                    }

                }, "", "");
            }
        }
    }
</script>

<style>
    /*img start*/
    #case_task_edit_page .commodityAddImgs {
        overflow: hidden;
        background: #f3f3f3;
    }

    #case_task_edit_page .imgdiv {
        padding: 0.7em;
        padding-top: 0em;
        position: relative;
        width: 6em;
        float: left;
    }

    #case_task_edit_page .goodsimgone {
        float: left;

        width: 6em;
        margin-top: -1em;
    }

    #case_task_edit_page .delimg {
        width: 2em;
        height: 2em;
        position: relative;
        top: 0em;
        left: 5em;
    }

    #case_task_edit_page #case_task_edit_img {
        height: 7.5em;
        overflow: hidden;
        display: inline-block;
    }

    #case_task_edit_page .goodsimgone {
        float: left;

        width: 6em;
        margin-top: -1em;
    }

    /*img end*/
    #case_task_edit_page .div_input_value_img {
        width: 1.5em;
        height: 1.5em;
        padding-right: 0.5em;
    }
</style>
