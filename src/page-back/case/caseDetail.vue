<template>
<div data-role="page" id="case_detail_page">
    <div class="page_header">
        <img class="left_img back-button" src="/staitc/resources/images/icon_white_back.png">
        <div class="page_header_title">问题详情</div>
        <div class="right_img right_btn">处理步骤</div>
    </div>
    <div class="page_content">
        <div id="case_detail_wrapper" class="jszx-wrapper">
            <div class="jszx-scroller">
                <div class="html_margin white_background">
                    <table class="inp_table" cellpadding="0" cellspacing="0">
                        <!--<tr>-->
                        <!--<td>上传图片</td>-->
                        <!--<td colspan="2">-->
                        <!--<input id="good_num" class="small" value="0/5" readonly type="text">-->
                        <!--</td>-->
                        <!--</tr>-->
                        <tr>
                            <td colspan="3" class="commodityAddImgs">
                                <div id="case_detail_img_wrapper" class="jszx-wrapper">
                                    <div class="jszx-scroller" id="case_detail_img_scroll">
                                        <div id="case_detail_img">
                                        </div>
                                    </div>
                                </div>
                            </td>
                        </tr>
                        <tr id="case_detail_eventComponent_tr">
                            <td style="min-width: 5em;" class="">职能事项</td>
                            <td>
                                <input readonly id="case_detail_eventComponent" type="text" />
                            </td>
                        </tr>
                        <tr id="case_detail_bigClass_tr">
                            <td style="min-width: 5em;" class="">大类</td>
                            <td>
                                <input readonly id="case_detail_bigClass" type="text" />
                            </td>
                        </tr>
                        <tr id="case_detail_smallClass_tr">
                            <td style="min-width: 5em;" class="">小类</td>
                            <td>
                                <input readonly id="case_detail_smallClass" type="text" />
                            </td>
                        </tr>
                        <tr id="case_detail_gridCode_tr">
                            <td style="min-width: 5em;" class="">所属网格</td>
                            <td>
                                <input readonly id="case_detail_gridCode" type="text" />
                            </td>
                        </tr>
                        <!--<tr>-->
                        <!--<td style="min-width: 5em;" class="">问题状态</td>-->
                        <!--<td>-->
                        <!--<input readonly id="case_detail_status" type="text"/>-->
                        <!--</td>-->
                        <!--</tr>-->
                        <tr>
                            <td style="min-width: 5em;" class="">上报时间</td>
                            <td>
                                <input readonly id="case_detail_reportTime" type="text" />
                            </td>
                        </tr>
                        <tr>
                            <td style="min-width: 5em;" class="">位置描述</td>
                            <td id="case_detail_address" style="padding:1em 0.5em 1em 0em;text-align: right;"></td>
                        </tr>
                        <tr>
                            <td style="padding-top:0.5em;">问题描述</td>
                            <td colspan="2">
                                <input class="small gray_dark_font" style="color:#999999;" readonly="true" />
                            </td>
                        </tr>
                        <tr>
                            <td colspan="3" style="color:#333333;padding:1em;text-align: left;" id="case_detail_problem"></td>
                        </tr>
                    </table>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
export default {
    mounted() {
        window.searchPage = 2;
        initCaseDetail();
        /*返回*/
        $("#case_detail_page .back-button").listen("quickClick", function (e) {
            app.$router.push("../case/caseList.html");
        });
        /*处理步骤*/
        $("#case_detail_page .right_btn").listen("quickClick", function (e) {
            window.CaseTaskStpsPage = "";
            app.$router.push("../casetask/caseTaskSteps.html");
        });

        function initCaseDetail() {
            $("#case_detail_wrapper")[0].style.height = window.localInnerHeight - $("#case_detail_page .page_header").height() + "px";
            initScroll({
                "wrapper": "case_detail_wrapper",
                "dir": "y",
                "bounce": false,
                "scrollBar": true
            });
            scrollToTop("case_detail_wrapper");
            window.opinionedImgArray = [];
            window.lookType = "";
            $("#case_detail_page table tr td").addClass("gray_line_bottom");
            $("#case_detail_page table tr td input").val("");
            $("#case_detail_page table tr td textarea").val("");
            $("#case_detail_page #case_detail_img").empty();
            $("#case_detail_img_scroll").css("transform", "none");
            $("#case_detail_img_wrapper .scroll-bar-x").css("transform", "none");
            window.thisCaseQueryType = 2;
            window.upload_imgscroll = "case_detail_img_scroll";
            window.upload_imgwrapper = "case_detail_img_wrapper";
            window.upload_addimg = "case_detail_img";
            $("#case_detail_img_scroll").css("transform", "none");
            $("#case_detail_img_wrapper .scroll-bar-x").css("transform", "none");
            app_myOrderDetail(window.caseRow_id);
        }
    }
}
</script>
    
<style lang="less" scoped>
    /*img start*/
        #case_detail_page .commodityAddImgs {
            overflow: hidden;
            background: #f3f3f3;
        }

        #case_detail_page .imgdiv {
            padding: 0.7em;
            padding-top: 0em;
            position: relative;
            width: 6em;
            float: left;
        }

        #case_detail_page .goodsimgone {
            float: left;
            height: 6em;
            width: 6em;
            margin-top: 0.7em;
        }

        #case_detail_page .delimg {
            width: 2em;
            height: 2em;
            position: relative;
            top: 0em;
            left: 5em;
        }

        #case_detail_page #case_detail_img {
            height: 7.5em;
            overflow: hidden;
            display: inline-block;
        }

        #case_detail_page .goodsimgone {
            float: left;
            height: 6em;
            width: 6em;
            margin-top: 0.7em;
        }

        /*img end*/
        #case_detail_page .div_input_value_img {
            width: 1.5em;
            height: 1.5em;
            padding-right: 0.5em;
        }

        #case_detail_page .right_btn {
            width: 4.5em;
            right: 0em;
        }

</style>
