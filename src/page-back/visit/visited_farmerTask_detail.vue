<template>
    <div data-role="page" id="visited_farmerTask_detail_page">
        <div class="page_header">
            <img class="left_img back-button" src="/staitc/resources/images/icon_white_back.png">
            <div class="page_header_title">走访详情</div>
            <div class="right_img right_btn">处理步骤</div>
        </div>
        <div class="page_content">
            <div class="jszx-bar-icon-up jszx-bar-item-2 gray_border">
                <div class="tab_oranger_font taskInfo">
                    <p>任务信息</p>
                </div>
                <div class=" visitInfo">
                    <p>走访信息</p>
                </div>
            </div>
            <div id="visited_farmerTask_detail_wrapper" class="jszx-wrapper">
                <div class="jszx-scroller">
                    <div id="visited_farmer_taskdetail_html" class="html_margin white_background">
                        <table class="inp_table settd_tab" cellpadding="0" cellspacing="0">
                            <tr>
                                <td colspan="2">任务名称</td>
                                <td id="visited_farmerTask_detail_taskName"></td>
                            </tr>

                            <tr>
                                <td style="min-width: 5em;" class="">被访人姓名</td>
                                <td colspan="2" id="visited_farmerTask_detail_respondentsName"></td>
                            </tr>
                            <tr>
                                <td style="min-width: 5em;" class="">访问类型</td>
                                <td colspan="2" id="visited_farmerTask_detail_taskType"></td>
                            </tr>
                            <tr>
                                <td colspan="2">被访人住址</td>
                                <td id="visited_farmerTask_detail_address"></td>
                            </tr>
                            <tr>
                                <td style="min-width: 5em;" class="">任务状态</td>
                                <td colspan="2" id="visited_farmerTask_detail_status"></td>
                            </tr>
                            <tr>
                                <td style="min-width: 5em;" class="">分配时间</td>
                                <td colspan="2" id="visited_farmerTask_detail_allocationTime"></td>
                            </tr>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script type="text/ecmascript-6">
    export default {
        name: "visited_farmerTask_detail",
        data() {
            return {}
        },
        created() {

        },
        mounted() {
            window.searchPage = 2;
            $("#visited_farmerTask_detail_page").live("pageshow", function () {
                initVisitedFarmerTaskDetail();
                /*返回*/
                $("#visited_farmerTask_detail_page .back-button").listen("quickClick", function (e) {
                    $.mobile.changePage("../visit/visitWelcomeList.html");
                });
                //处理步骤
                $("#visited_farmerTask_detail_page .right_btn").listen("quickClick", function (e) {
                    window.setpsSources = "visitEnterprise";
                    $.mobile.changePage("../check/checkedSteps.html");
                });
                /*任务信息*/
                $("#visited_farmerTask_detail_page .taskInfo").listen("quickClick", function (e) {
                    $.mobile.changePage("../visit/visited_farmerTask_detail.html");

                });
                /*走访信息*/
                $("#visited_farmerTask_detail_page .visitInfo").listen("quickClick", function (e) {
                    if (2 == parseInt(window.visitWelcomeTaskInfo.status)) {
                        $.mobile.changePage("../visit/visited_farmer_edit.html");
                    } else {
                        toast("走访尚未完成");
                    }
                });
            });

            function initVisitedFarmerTaskDetail() {
                $("#visited_farmerTask_detail_wrapper")[0].style.height = window.localInnerHeight - $("#visited_farmerTask_detail_page .page_header").height() - $("#visited_farmerTask_detail_page .jszx-bar-icon-up").height() + "px";
                initScroll({
                    "wrapper": "visited_farmerTask_detail_wrapper",
                    "dir": "y",
                    "bounce": false,
                    "scrollBar": true
                });
                scrollToTop("visited_farmerTask_detail_wrapper");
                $("#visited_farmerTask_detail_page table tr td").addClass("gray_line_bottom");
                $("#visited_farmerTask_detail_page table tr td:last-child").html("");
                app_taskContent("", "");
            }
        },
        methods: {}
    }
</script>

<style lang="less" scoped>
    #visited_farmerTask_detail_page .right_btn {
        width: 4.5em;
        right: 0em;
    }

    #visited_farmerTask_detail_page .alert_bottom_three {
        width: 35%;
        float: left;
    }

    #visited_farmerTask_detail_page .jszx-bar-item-2 > div {
        width: 50%;
    }

    #visited_farmerTask_detail_page .jszx-bar-item-2 p,
    .jszx-bar-item-2 p {
        height: 2.8em;
        line-height: 2.8em;
    }
</style>
