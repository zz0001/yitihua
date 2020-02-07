<template>
<div data-role="page" id="case_edit_page">
    <div class="page_header">
        <img class="left_img back-button" src="/staitc/resources/images/icon_white_back.png" />
        <div class="page_header_title">问题编辑</div>
        <img class="right_img" src="/staitc/resources/images/icon_list.png" />
    </div>
    <div class="page_content">
        <div id="case_edit_wrapper" class="jszx-wrapper">
            <div class="jszx-scroller">
                <div class="html_margin white_background">
                    <table class="inp_table" cellpadding="0" cellspacing="0">
                        <tr>
                            <td>上传图片</td>
                            <td colspan="2">
                                <input id="good_num" class="small" value="0/5" readonly type="text">
                            </td>
                        </tr>
                        <tr>
                            <td colspan="3" class="commodityAddImgs">
                                <div id="case_edit_img_wrapper" class="jszx-wrapper">
                                    <div class="jszx-scroller" id="case_edit_img_scroll">
                                        <div id="case_edit_img"></div>
                                    </div>
                                </div>
                            </td>
                        </tr>
                        <!--<tr id="case_edit_orgin_tr">-->
                        <!--<td style="min-width: 5em;" class="">工单来源<span>*</span></td>-->
                        <!--<td>-->
                        <!--<input readonly id="case_edit_orgin" type="text"-->
                        <!--placeholder="请选择工单来源"/>-->
                        <!--</td>-->
                        <!--<td style="width: 1%;"><img class=""-->
                        <!--src="/staitc/resources/images/icon_gray_solid_down.png"></td>-->
                        <!--</tr>-->
                        <tr id="case_edit_eventComponent_tr">
                            <td style="min-width: 5em;" class="">职能事项<span>*</span></td>
                            <td>
                                <input readonly id="case_edit_eventComponent" type="text" placeholder="请选择职能事项" />
                            </td>
                            <td style="width: 1%;"><img class="" src="/staitc/resources/images/icon_gray_solid_down.png"></td>
                        </tr>
                        <tr id="case_edit_bigClass_tr">
                            <td style="min-width: 5em;" class="">大类<span>*</span></td>
                            <td>
                                <input readonly id="case_edit_bigClass" type="text" placeholder="请选择大类" />
                            </td>
                            <td style="width: 1%;"><img class="" src="/staitc/resources/images/icon_gray_solid_down.png"></td>
                        </tr>
                        <!--<tr id="case_edit_smallClass_tr">-->
                        <!--<td style="min-width: 5em;" class="">小类<span>*</span></td>-->
                        <!--<td>-->
                        <!--<input readonly id="case_edit_smallClass" type="text"-->
                        <!--placeholder="请选择小类"/>-->
                        <!--</td>-->
                        <!--<td style="width: 1%;"><img class=""-->
                        <!--src="/staitc/resources/images/icon_gray_solid_down.png"></td>-->
                        <!--</tr>-->
                        <tr id="case_edit_gridCode_tr">
                            <td style="min-width: 5em;" class="">所属网格<span>*</span></td>
                            <td>
                                <input readonly id="case_edit_gridCode" type="text" placeholder="请选择所属网格" />
                            </td>
                            <td style="width: 1%;"><img class="" src="/staitc/resources/images/icon_gray_solid_down.png">
                            </td>
                        </tr>
                        <tr>
                            <td style="min-width: 5em;" class="">位置描述<span>*</span></td>
                            <td style="padding:1em 0.5em 1em 0em;line-height: 1.4em;text-align: right;">
                                <div contenteditable="true" id="case_edit_address"></div>
                            </td>
                            <td style="width: 1%;" id="case_edit_address_img">
                                <img class="div_input_value_img" src="/staitc/resources/images/icon_dz.png" />
                            </td>
                        </tr>

                        <tr>
                            <td style="padding-top:0.5em;">问题描述<span>*</span></td>
                            <td colspan="2">
                                <input class="small gray_dark_font" style="color:#999999;" readonly="true" id="case_words" />
                            </td>
                        </tr>
                        <tr>
                            <td colspan="3">
                                <textarea onfocus="newCheckWord('case_edit_problem',500,'case_words')" onKeyUp="javascript:newCheckWord('case_edit_problem',500,'case_words');" onMouseDown="javascript:newCheckWord('case_edit_problem',500,'case_words');" placeholder="请输入问题描述" id="case_edit_problem" style="text-align:left;min-height: 5em;padding:0em 0.5em 0em 1em;"></textarea>

                            </td>
                        </tr>
                    </table>
                </div>
            </div>
        </div>
    </div>
    <div class="page_footer">
        <div class="footer_button_div">
            <div id="save_returnAddress" class="alert_bottom_three orange_background">上报</div>
        </div>
    </div>
</div>
</template>

<script>
export default {
    mounted() {
        initCaseEdit();
        /*返回*/
        $("#case_edit_page .back-button").listen("quickClick", function (e) {
            app.$router.push("../load/welcome.html");
        });
        /*列表*/
        $("#case_edit_page .right_img").listen("quickClick", function (e) {
            app.$router.push("../case/caseList.html");
        });
        //位置
        $("#case_edit_page #case_edit_address_img").listen("quickClick", function (e) {
            showMapAlert("请选择位置", "确定", "", function () {
                $("#case_edit_address").html($("#map_html_address").html());
                window.choiceLongitude = window.shortLongitude;
                window.choiceLatitude = window.shortLatitude;
                console.log($("#map_html_address").html() + "\t,选中的经纬度：" + window.choiceLongitude + "\t," + window.choiceLatitude);
                $(".mapshowalert").remove();
            });
        });
        //职能事项
        $("#case_edit_page #case_edit_eventComponent_tr").listen("quickClick", function (e) {
            getMultilevelValue("请选择职能事项", 3);
            app_getMultiCodeChild(window.caseTaskReportParentId, "", 1, "caseEdit", "3")
        });
        //大类
        $("#case_edit_page #case_edit_bigClass_tr").listen("quickClick", function (e) {
            if (isNull(window.choiceThingsParts)) {
                toast("请先选择职能事项");
            } else {
                getMultilevelValue("请选择大小类", 2);
                app_getMultiCodeChild(window.choiceThingsParts, "", 1, "caseEditBig");
            }
        });
        //小类
        // $("#case_edit_page #case_edit_smallClass_tr").listen("quickClick", function (e) {
        //     if (isNull(window.choiceThingsParts)) {
        //         toast("请先选择职能事项")
        //     } else if (isNull(window.choiceBigType)) {
        //         toast("清先选择大类");
        //     } else {
        //         getMultilevelValue("请选择大小类", 1);
        //         app_getMultiCodeChild(window.choiceBigType, "", 1, "caseEditSmall");
        //     }
        // });
        //所属网格
        $("#case_edit_page #case_edit_gridCode_tr").listen("quickClick", function (e) {
            showProvCity();
            $("#screen_city_val").html("");
            app_findAllDeptByUser();
        });
        //商品图片
        $("#case_edit_page #choicemore").click(function (e) {
            window.upload_imgscroll = "case_edit_img_scroll";
            window.upload_imgwrapper = "case_edit_img_wrapper";
            window.upload_addimg = "case_edit_img";
            getPhotograph();
        });
        /*保存*/
        $("#case_edit_page .page_footer").listen("quickClick", function (e) {
            // alert("window.choiceLongitude:"+window.choiceLongitude)
            var flag = checkTextSpace($("#case_edit_problem").val());
            if (window.commitFlag) {

            } else {
                if (isNull(window.choiceThingsParts)) {
                    toast("请选择职能事项");
                } else if (isNull(window.choiceBigType)) {
                    toast("请选择大类");
                }
                /*    else if (isNull(window.choiceLongitude)) {
                          toast("经纬度为空，请选择重新定位");
                    }  */
                else if (isNull(window.choiceOneGridId)) {
                    toast("请选择所属网格");
                }
                // else if (isNull($("#case_edit_address").html())) {
                //     toast("请选择地址");
                // }
                else if (isNull($("#case_edit_problem").val()) || flag == false) {
                    if (flag == false) {
                        toast("问题描述请不要输入空格");
                    } else {
                        toast("请输入问题描述");
                    }
                } else {
                    showContentAlert("确认保存本次提交吗？", function () {}, function () {
                        window.commitFlag = 1;
                        $("#save_returnAddress").removeClass("orange_background");
                        $("#save_returnAddress").addClass("gray_gray_background");
                        if (!isNull(window.picture_array) || window.picture_array.length > 0) {
                            window.picture_upImg = "";
                            appWorkOrder_upLoadPic(window.picture_array[0], 1);
                        } else {
                            appWorkOrder_workOrderReport("", $("#case_edit_address").html(), $("#case_edit_problem").val(), getNowTime(), "");
                        }
                    }, "确定");
                }
            }
        });

        function initCaseEdit() {
            $("#case_edit_wrapper")[0].style.height = window.localInnerHeight - $("#case_edit_page .page_header").height() - $("#case_edit_page .page_footer").height() + "px";
            initScroll({
                "wrapper": "case_edit_wrapper",
                "dir": "y",
                "bounce": false,
                "scrollBar": true
            });
            scrollToTop("case_edit_wrapper");
            cleadCaseEdit();
            window.commitFlag = 0;
        }
        //验证内容是否包含空格
        function checkTextSpace(value) {
            var pattern = /\s/;
            if (pattern.test(value)) {
                return false;
            }
            return true;
        }
    }
}
</script>

<style lang="less" scoped>
#case_edit_page .page_header .right_img {
    width: 2em;
    top: 0.2em;
}

/*img start*/
#case_edit_page .commodityAddImgs {
    overflow: hidden;
    background: #f3f3f3;
}

#case_edit_page .imgdiv {
    padding: 0.7em;
    padding-top: 0em;
    position: relative;
    width: 6em;
    float: left;
}

#case_edit_page .goodsimgone {
    float: left;
    height: 6em;
    width: 6em;
    margin-top: -1em;
}

#case_edit_page .delimg {
    width: 2em;
    height: 2em;
    position: relative;
    top: 0em;
    left: 5em;
}

#case_edit_page #case_edit_img {
    height: 7.5em;
    overflow: hidden;
    display: inline-block;
}

#case_edit_page .goodsimgone {
    float: left;
    height: 6em;
    width: 6em;
    margin-top: -1em;
}

/*img end*/
#case_edit_page .div_input_value_img {
    width: 1.5em;
    height: 1.5em;
    padding-right: 0.5em;
}
</style>
