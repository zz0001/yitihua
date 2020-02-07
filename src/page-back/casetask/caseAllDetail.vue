<template>
<div data-role="page" id="case_tasked_detail_page">
    <div class="page_header">
        <img class="left_img back-button" src="/staitc/resources/images/icon_white_back.png">
        <div class="page_header_title">工单详情</div>
        <div class="right_img right_btn" style="height:2.5em">处理步骤
            <!--<div class="small btn_div">处理步骤</div>-->
            <!--<div id="case_welcome_rednum" class="red_num" style="">11</div>-->
        </div>
        <!--<div class="small right_img right_btn">-->
        <!--<div class="smaller btn_div">处理步骤</div>-->
        <!--&lt;!&ndash;<div id="welcomecarnum" class="red_num" style="">11</div>&ndash;&gt;-->
        <!--</div>-->
    </div>
    <div class="page_content">
        <div id="case_tasked_detail_wrapper" class="jszx-wrapper">
            <div class="jszx-scroller">
                <div id="wait_visited_html" class="html_margin white_background">
                    <table class="inp_table" cellpadding="0" cellspacing="0">
                        <td colspan="3" class="commodityAddImgs">
                            <div id="case_tasked_detail_img_wrapper" class="jszx-wrapper">
                                <div class="jszx-scroller" id="case_tasked_detail_img_scroll">
                                    <div id="case_tasked_detail_img">
                                    </div>
                                </div>
                            </div>
                        </td>
                        <tr>
                            <td style="min-width: 5em;" class="">工单编号</td>
                            <td colspan="2">
                                <input id="case_tasked_detail_caseNo" readonly type="text" />
                            </td>
                        </tr>
                        <tr>
                            <td style="min-width: 5em;" class="">工单来源</td>
                            <td colspan="2">
                                <input readonly type="tel" id="case_tasked_detail_orgin" />
                            </td>
                        </tr>
                        <!-- <tr>
                            <td style="min-width: 5em;" class="">部件编号</td>
                            <td colspan="2">
                                <input readonly id="case_tasked_detail_componentIdNo" type="text"/>
                            </td>
                        </tr> -->
                        <tr>
                            <td style="min-width: 5em;" class="">所属网格</td>
                            <td colspan="2">
                                <input readonly id="case_tasked_detail_gridId" type="tel" />
                            </td>
                        </tr>
                        <tr>
                            <td style="min-width: 5em;">职能事项</td>
                            <td colspan="2">
                                <input readonly id="case_tasked_detail_eventComponent" type="text" />
                            </td>
                        </tr>
                        <tr>
                            <td style="padding-top:0.5em;">大类</td>
                            <td colspan="2">
                                <input readonly id="case_tasked_detail_bigClass" type="text" />
                            </td>
                        </tr>
                        <tr>
                            <td style="min-width: 5em;" class="">小类</td>
                            <td colspan="2">
                                <input readonly id="case_tasked_detail_smallClass" type="text" />
                            </td>
                        </tr>
                        <tr id="case_tasked_detail_problemsType_tr">
                            <td style="min-width: 5em;" class="">上报时间</td>
                            <td colspan="2">
                                <input readonly id="case_tasked_detail_reportTime" type="tel" />
                            </td>
                        </tr>
                        <tr>
                            <td style="min-width: 5em;" class="">截止时间</td>
                            <td colspan="2">
                                <input readonly id="case_tasked_detail_Deadline" type="tel" />
                            </td>
                        </tr>
                        <tr>
                            <td style="min-width: 5em;" class="">上报人</td>
                            <td colspan="2">
                                <input readonly id="case_tasked_detail_reportPerson" type="text" />
                            </td>
                        </tr>
                        <tr>
                            <td style="min-width: 5em;" class="">联系方式</td>
                            <td colspan="2">
                                <input readonly id="case_tasked_detail_reportPersonPhone" type="text" />
                            </td>
                        </tr>
                        <!-- <tr id="case_tasked_detail_delayType_tr">
                            <td style="min-width: 5em;" class="">延期类型</td>
                            <td colspan="2">
                                <input readonly id="case_tasked_detail_delayType" type="text"/>
                            </td>
                        </tr>
                        <tr id="case_tasked_detail_delayNum_tr">
                            <td style="min-width: 5em;" class="">延期时长</td>
                            <td colspan="2">
                                <input readonly id="case_tasked_detail_delayNum" type="text"/>
                            </td>
                        </tr> -->
                        <tr>
                            <td style="padding-top:0.5em;">位置描述</td>
                            <td colspan="2" id="case_tasked_detail_location" style="padding:1em;text-align: right;"></td>
                        </tr>
                        <tr>
                            <td style="padding-top:0.5em;">问题描述</td>
                            <td colspan="2">
                                <input class="small gray_dark_font" style="color:#999999;" readonly="true" />
                            </td>
                        </tr>
                        <tr>
                            <td colspan="3" style="padding:1em;text-align: left;color: #333333;" id="case_tasked_detail_problem"></td>
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
        initCaseTaskDetail();
        if (!window.CaseTaskDetailPage) {
            cleanCaseTaskDetail();
            app_workOrderDetail(window.caseRow_id);
            window.CaseTaskDetailPage = true;
        }
        /*返回*/
        $("#case_tasked_detail_page .back-button").listen("quickClick", function (e) {
            if ("welcome" == window.welcomeCheckJumpType) {
                app.$router.push("../load/welcome.html");
            } else {
                app.$router.push("../casetask/allWelcomeList.html");
            }

        });
        /*处理步骤*/
        $("#case_tasked_detail_page .right_btn").listen("quickClick", function (e) {
            window.CaseTaskStpsPage = "";
            app.$router.push("../casetask/caseTaskSteps.html");
        });

        function initCaseTaskDetail() {
            $("#case_tasked_detail_wrapper")[0].style.height = window.localInnerHeight - $("#case_tasked_detail_page .page_header").height() + "px";
            $("#case_tasked_detail_page .page_content").css("height", window.localInnerHeight - $("#case_tasked_detail_page .page_header").height() + "px")
            initScroll({
                "wrapper": "case_tasked_detail_wrapper",
                "dir": "y",
                "bounce": false,
                "scrollBar": true
            });
            scrollToTop("case_tasked_detail_wrapper");
            $("#case_tasked_detail_page table tr td").addClass("gray_line_bottom");
            window.upload_imgscroll = "case_tasked_detail_img_scroll";
            window.upload_imgwrapper = "case_tasked_detail_img_wrapper";
            window.upload_addimg = "case_tasked_detail_img";
        }

        function cleanCaseTaskDetail() {
            $("#case_tasked_detail_page table tr td input").val("");
            $("#case_tasked_detail_page table tr td textarea").val("");
            $("#case_tasked_detail_page #case_tasked_detail_img").empty();
            window.caseTaskOneTaskId = "";
            $("#case_tasked_detail_img_scroll").css("transform", "none");
            $("#case_tasked_detail_img_wrapper .scroll-bar-x").css("transform", "none");
            window.operationListArrayInfo = [];
        }
    }
}
</script>

<style lang="less" scoped>
#case_tasked_detail_page .commodityAddImgs {
    overflow: hidden;
    background: #f3f3f3;
}

#case_tasked_detail_page .imgdiv {
    padding: 0.7em;
    padding-top: 0em;
    position: relative;
    width: 6em;
    float: left;
}

#case_tasked_detail_page .goodsimgone {
    float: left;
    height: 6em;
    width: 6em;
    margin-top: 1em;
}

#case_tasked_detail_page #case_detail_img {
    height: 7.5em;
    overflow: hidden;
    display: inline-block;
}

/*img end*/
#case_tasked_detail_page .jszx-bar-item-2>div {
    width: 50%;
}

#case_tasked_detail_page .jszx-bar-item-2 p,
.jszx-bar-item-2 p {
    height: 2.8em;
    line-height: 2.8em;
}

#case_tasked_detail_page .right_btn {
    width: 4.5em;
    right: 0em;
}
</style>
