<template>
    <div data-role="page" id="visited_farmer_edit_page">
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
            <div id="visited_farmer_edit_wrapper" class="jszx-wrapper">
                <div class="jszx-scroller">
                    <div id="visited_farmer_html" class="html_margin white_background">
                        <table class="inp_table visited_farmer_imgs" cellpadding="0" cellspacing="0">
                            <tr>
                                <td style="padding:0.8em 0em 0.8em 1.3em">上传图片</td>
                                <td colspan="2">
                                    <input class="small" readonly type="text">
                                </td>
                            </tr>
                            <tr>
                                <td colspan="3" class="commodityAddImgs">
                                    <div id="visited_farmer_edit_img_wrapper" class="jszx-wrapper">
                                        <div class="jszx-scroller" id="visited_farmer_edit_img_scroll">
                                            <div id="visited_farmer_edit_img">
                                            </div>
                                        </div>
                                    </div>
                                </td>
                            </tr>
                        </table>
                        <table class="inp_table settd_tab" cellpadding="0" cellspacing="0">
                            <tr>
                                <td style="min-width: 5em;" class="">农户姓名</td>
                                <td colspan="2" id="visited_farmer_edit_businessLeader"></td>
                            </tr>
                            <tr>
                                <td style="min-width: 5em;" class="">年龄</td>
                                <td colspan="2" id="visited_farmer_edit_age"></td>
                            </tr>
                            <tr>
                                <td style="min-width: 5em;" class="">工作单位</td>
                                <td colspan="2" id="visited_farmer_edit_workUnit"></td>
                            </tr>
                            <tr>
                                <td style="min-width: 5em;" class="">联系电话</td>
                                <td colspan="2" id="visited_farmer_edit_respondentsPhone"></td>
                            </tr>
                            <tr>
                                <td colspan="2">农户住址</td>
                                <td id="visited_farmer_edit_address"></td>
                            </tr>
                            <tr>
                                <td style="padding-top:0.5em;">诉求</td>
                                <td colspan="2" id="visited_farmer_edit_appeal"></td>
                            </tr>
                            <tr>
                                <td style="min-width: 5em;" class="">诉求数量</td>
                                <td colspan="2" id="visited_farmer_edit_appealNo"></td>
                            </tr>
                            <tr id="visited_farmer_edit_problemsType_tr">
                                <td style="min-width: 5em;" class="">问题分类</td>
                                <td colspan="2" id="visited_farmer_edit_problemsType"></td>
                            </tr>
                            <tr>
                                <td style="min-width: 5em;" class="">解决问题个数</td>
                                <td colspan="2" id="visited_farmer_edit_solveNo"></td>
                            </tr>

                            <tr>
                                <td style="padding-top:0.5em;">解决问题描述</td>
                                <td colspan="2" id="visited_farmer_edit_solovedProblemsDescription"></td>
                            </tr>
                        </table>
                        <table class="inp_table settd_tab" cellpadding="0" cellspacing="0">
                            <tr>
                                <td style="min-width: 5em;" class="">走访人</td>
                                <td colspan="2" id="visited_farmer_edit_visitorName"></td>
                            </tr>
                            <tr>
                                <td style="min-width: 5em;" class="">走访人单位</td>
                                <td colspan="2" id="visited_farmer_edit_visitUnit"></td>
                            </tr>
                            <tr>
                                <td style="min-width: 5em;" class="">走访人电话</td>
                                <td colspan="2" id="visited_farmer_edit_visitorPhone"></td>
                            </tr>
                            <tr>
                                <td style="min-width: 5em;" class="">走访时间</td>
                                <td colspan="2" id="visited_farmer_edit_visitorTime"></td>
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
        name: "visited_farmer_edit",
        data() {
            return {}
        },
        created() {

        },
        mounted() {
            window.searchPage = 2;
            $("#visited_farmer_edit_page").live("pageshow", function () {
                initVisitedFarmerEdit();
                /*返回*/
                $("#visited_farmer_edit_page .back-button").listen("quickClick", function (e) {
                    $.mobile.changePage("../visit/visitWelcomeList.html");
                });
                //处理步骤
                $("#visited_farmer_edit_page .right_btn").listen("quickClick", function (e) {
                    window.setpsSources = "visitEnterprise";
                    $.mobile.changePage("../check/checkedSteps.html");
                });
                /*任务信息*/
                $("#visited_farmer_edit_page .taskInfo").listen("quickClick", function (e) {
                    $.mobile.changePage("../visit/visited_farmerTask_detail.html");
                });
                /*走访信息*/
                $("#visited_farmer_edit_page .visitInfo").listen("quickClick", function (e) {
                    $.mobile.changePage("../visit/visited_farmer_edit.html");
                });
            });

            function initVisitedFarmerEdit() {
                $("#visited_farmer_edit_wrapper")[0].style.height = window.localInnerHeight - $("#visited_farmer_edit_page .page_header").height() - $("#visited_farmer_edit_page .jszx-bar-icon-up").height() + "px";
                initScroll({
                    "wrapper": "visited_farmer_edit_wrapper",
                    "dir": "y",
                    "bounce": false,
                    "scrollBar": true
                });
                scrollToTop("visited_farmer_edit_wrapper");
                $("#visited_farmer_edit_page table tr td").addClass("gray_line_bottom");
                $("#visited_farmer_edit_page .settd_tab tr td+td ").html("");
                window.visitFarmerImg = [];
                window.upload_imgscroll = "visited_farmer_edit_img_scroll";
                window.upload_imgwrapper = "visited_farmer_edit_img_wrapper";
                window.upload_addimg = "visited_farmer_edit_img";
                $("#visited_farmer_edit_img_scroll").css("transform", "none");
                $("#visited_farmer_edit_img_wrapper .scroll-bar-x").css("transform", "none");
                $("#visited_farmer_edit_page #visited_farmer_edit_img").empty();
                app_getFarmersInfo();
            }
        },
        methods: {}
    }
</script>

<style lang="less" scoped>
    #visited_farmer_edit_page .right_btn {
        width: 4.5em;
        right: 0em;
    }

    #visited_farmer_edit_page .jszx-bar-item-2 > div {
        width: 50%;
    }

    #visited_farmer_edit_page .jszx-bar-item-2 p,
    .jszx-bar-item-2 p {
        height: 2.8em;
        line-height: 2.8em;
    }

    #visited_farmer_edit_page .commodityAddImgs {
        overflow: hidden;
        background: #f3f3f3;
    }

    #visited_farmer_edit_page .imgdiv {
        padding: 0.7em;
        padding-top: 0em;
        position: relative;
        width: 6em;
        float: left;
    }

    #visited_farmer_edit_page .goodsimgone {
        float: left;
        height: 6em;
        width: 6em;
        margin-top: -1em;
        margin-right: 0.5em;
    }

    #visited_farmer_edit_page #visited_farmer_edit_img {
        height: 7.5em;
        overflow: hidden;
        display: inline-block;
    }
</style>
