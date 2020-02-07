<template>
    <div data-role="page" id="visited_enterprise_edit_page">
        <div class="page_header">
            <img class="left_img back-button" src="/staitc/resources/images/icon_white_back.png">
            <div class="page_header_title">走访详情</div>
            <div class="right_img right_btn">处理步骤</div>
        </div>
        <div class="page_content">
            <div class="jszx-bar-icon-up jszx-bar-item-2 gray_border">
                <div class=" taskInfo">
                    <p>任务信息</p>
                </div>
                <div class="tab_oranger_font visitInfo">
                    <p>走访信息</p>
                </div>
            </div>
            <div id="visited_enterprise_edit_wrapper" class="jszx-wrapper">
                <div class="jszx-scroller">
                    <div id="visited_enterprise_edit_html" class="html_margin white_background">
                        <table class="inp_table visited_farmer_imgs" cellpadding="0" cellspacing="0">
                            <tr>
                                <td style="padding:1em 1em 1em 1.3em;">上传图片</td>
                                <td colspan="2">
                                    <input class="small" readonly type="text">
                                </td>
                            </tr>
                            <tr>
                                <td colspan="3" class="commodityAddImgs">
                                    <div id="visited_enterprise_edit_img_wrapper" class="jszx-wrapper">
                                        <div class="jszx-scroller" id="visited_enterprise_edit_img_scroll">
                                            <div id="visited_enterprise_edit_img">
                                            </div>
                                        </div>
                                    </div>
                                </td>
                            </tr>
                        </table>
                        <table class="inp_table settd_tab" cellpadding="0" cellspacing="0">
                            <tr>
                                <td style="min-width: 5em;" class="">企业名称</td>
                                <td id="visited_enterprise_edit_enterpriseName"></td>
                            </tr>
                            <tr>
                                <td style="min-width: 5em;" class="">企业负责人</td>
                                <td id="visited_enterprise_edit_businessLeader"></td>
                            </tr>
                            <tr>
                                <td style="min-width: 5em;" class="">负责人职务</td>
                                <td id="visited_enterprise_edit_businessLeaderPosition"></td>
                            </tr>
                            <tr>
                                <td style="min-width: 5em;" class="">负责人手机</td>
                                <td id="visited_enterprise_edit_businessLeaderPhone"></td>
                            </tr>
                            <tr>
                                <td style="min-width: 5em;" class="">企业规模</td>
                                <td id="visited_enterprise_edit_workerNo"></td>
                            </tr>
                            <tr id="visited_enterprise_edit_industryType_tr">
                                <td style="min-width: 5em;" class="">产业类型</td>
                                <td id="visited_enterprise_edit_industryType"></td>
                            </tr>
                            <tr>
                                <td>所属镇（街道、园区）</td>
                                <td id="visited_enterprise_edit_gridid"></td>
                            </tr>
                            <tr>
                                <td style="padding-top:0.5em;">详细地址</td>
                                <td id="visited_enterprise_edit_address"></td>
                            </tr>
                            <tr>
                                <td style="padding-top:0.5em;">经营范围</td>
                                <td id="visited_enterprise_edit_businessScope"></td>
                            </tr>
                        </table>
                        <table class="inp_table settd_tab" cellpadding="0" cellspacing="0">
                            <tr>
                                <td style="min-width: 5em;" class="visited_enterprise_edit_page">本年销售</td>
                                <td id="visited_enterprise_edit_currentSales"></td>
                            </tr>
                            <tr>
                                <td style="min-width: 5em;" class="visited_enterprise_edit_page">本年纳税</td>
                                <td id="visited_enterprise_edit_currentTaxAmount"></td>
                            </tr>
                            <tr>
                                <td style="min-width: 5em;" class="visited_enterprise_edit_page">明年预计销售</td>
                                <td id="visited_enterprise_edit_projectedSales"></td>
                            </tr>
                        </table>
                        <table class="inp_table settd_tab" cellpadding="0" cellspacing="0">
                            <tr>
                                <td>企业问题及诉求</td>
                                <td id="visited_enterprise_edit_problemsAndAppeals"></td>
                            </tr>
                            <tr>
                                <td>问题及诉求解决情况</td>
                                <td id="visited_enterprise_edit_problemsAndAppealsSolution"></td>
                            </tr>
                            <tr>
                                <td>企业建议</td>
                                <td id="visited_enterprise_edit_enterpriseSuggestion"></td>
                            </tr>
                            <tr>
                                <td>建议解决情况</td>
                                <td id="visited_enterprise_edit_suggestionSolved"></td>
                            </tr>
                        </table>
                        <table class="inp_table settd_tab" cellpadding="0" cellspacing="0">
                            <tr>
                                <td style="min-width: 5em;" class="">走访人</td>
                                <td id="visited_enterprise_edit_visitorName"></td>
                            </tr>
                            <tr>
                                <td style="min-width: 5em;" class="">走访人单位</td>
                                <td id="visited_enterprise_edit_visitUnit"></td>
                            </tr>
                            <tr>
                                <td style="min-width: 5em;" class="">走访人电话</td>
                                <td id="visited_enterprise_edit_visitorPhone"></td>
                            </tr>
                            <tr>
                                <td style="min-width: 5em;" class="">走访时间</td>
                                <td id="visited_enterprise_edit_visitorTime"></td>
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
        name: "visited_enterprise_edit",
        data() {
            return {}
        },
        created() {

        },
        mounted() {
            window.searchPage = 2;
            $("#visited_enterprise_edit_page").live("pageshow", function () {
                initVisitedEnterPriseEdit();
                //处理步骤
                $("#visited_enterprise_edit_page .right_btn").listen("quickClick", function (e) {
                    window.setpsSources = "visitEnterprise";
                    $.mobile.changePage("../check/checkedSteps.html");
                });
                /*返回*/
                $("#visited_enterprise_edit_page .back-button").listen("quickClick", function (e) {
                    $.mobile.changePage("../visit/visitWelcomeList.html");
                });
                /*任务信息*/
                $("#visited_enterprise_edit_page .taskInfo").listen("quickClick", function (e) {
                    $.mobile.changePage("../visit/visited_enterpriseTask_detail.html");
                });
                /*走访信息*/
                $("#visited_enterprise_edit_page .visitInfo").listen("quickClick", function (e) {
                    $.mobile.changePage("../visit/visited_enterprise_edit.html");
                });

            });

            function initVisitedEnterPriseEdit() {
                $("#visited_enterprise_edit_wrapper")[0].style.height = window.localInnerHeight - $("#visited_enterprise_edit_page .page_header").height() - $("#visited_enterprise_edit_page .jszx-bar-icon-up").height() + "px";
                initScroll({
                    "wrapper": "visited_enterprise_edit_wrapper",
                    "dir": "y",
                    "bounce": false,
                    "scrollBar": true
                });
                scrollToTop("visited_enterprise_edit_wrapper");
                window.visitEnterpriseImg = [];
                $("#visited_enterprise_edit_page table tr td").addClass("gray_line_bottom");
                $("#visited_enterprise_edit_page table tr td+td").html("");
                window.upload_imgscroll = "visited_enterprise_edit_img_scroll";
                window.upload_imgwrapper = "visited_enterprise_edit_img_wrapper";
                window.upload_addimg = "visited_enterprise_edit_img";
                $("#visited_enterprise_edit_page #visited_enterprise_edit_img").empty();
                $("#visited_enterprise_edit_img_scroll").css("transform", "none");
                $("#visited_enterprise_edit_img_wrapper .scroll-bar-x").css("transform", "none");
                app_getEnterpriseInfo();
            }
        },
        methods: {}
    }
</script>

<style lang="less" scoped>
    #visited_enterprise_edit_page .right_btn {
        width: 4.5em;
        right: 0em;
    }

    #visited_enterprise_edit_page .jszx-bar-item-2 > div {
        width: 50%;
    }

    #visited_enterprise_edit_page .jszx-bar-item-2 p,
    .jszx-bar-item-2 p {
        height: 2.8em;
        line-height: 2.8em;
    }

    #visited_enterprise_edit_page .commodityAddImgs {
        overflow: hidden;
        background: #f3f3f3;
    }

    #visited_enterprise_edit_page .imgdiv {
        padding: 0.7em;
        padding-top: 0em;
        position: relative;
        width: 6em;
        float: left;
    }

    #visited_enterprise_edit_page .goodsimgone {
        float: left;
        height: 6em;
        width: 6em;
        margin-top: -1em;
        margin-right: 0.5em;
    }

    #visited_enterprise_edit_page #visited_enterprise_edit_img {
        height: 7.5em;
        overflow: hidden;
        display: inline-block;
    }
</style>
