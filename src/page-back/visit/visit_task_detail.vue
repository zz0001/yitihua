<template>
    <div data-role="page" id="visit_farmerTask_detail_page">
        <div class="page_header">
            <img class="left_img back-button" src="/staitc/resources/images/icon_white_back.png">
            <div class="page_header_title">任务信息</div>
            <div class="right_img right_btn">处理步骤</div>
        </div>
        <div class="page_content">
            <div id="visit_farmerTask_detail_wrapper" class="jszx-wrapper">
                <div class="jszx-scroller">
                    <div id="visit_task_detail_html" class="html_margin white_background">
                        <table class="inp_table settd_tab" cellpadding="0" cellspacing="0">
                            <tr>
                                <td colspan="2">任务名称</td>
                                <td colspan="2" id="visit_farmerTask_detail_taskName">
                                </td>
                            </tr>
                            <tr>
                                <td style="min-width: 5em;" class="visit_farmerTask_detail_respondentsName_td">被访人姓名
                                </td>
                                <td colspan="2" id="visit_farmerTask_detail_respondentsName"></td>
                            </tr>
                            <tr>
                                <td style="min-width: 5em;" class="">访问类型</td>
                                <td colspan="2" id="visit_farmerTask_detail_taskType"></td>
                            </tr>
                            <tr>
                                <td colspan="2" style="" class="visit_farmerTask_detail_address_td">被访人住址</td>
                                <td id="visit_farmerTask_detail_address"></td>
                            </tr>
                            <tr>
                                <td style="min-width: 5em;" class="">任务状态</td>
                                <td colspan="2" id="visit_farmerTask_detail_status"></td>
                            </tr>
                            <tr>
                                <td style="min-width: 5em;" class="">分配时间</td>
                                <td colspan="2" id="visit_farmerTask_detail_allocationTime"></td>
                            </tr>
                        </table>
                    </div>
                </div>
            </div>
        </div>
        <div class="page_footer">
            <div class="footer_button_div">
                <div class="alert_bottom_three orange_background">办理</div>
            </div>
        </div>
    </div>
</template>

<script type="text/ecmascript-6">
    export default {
        name: "visit_task_detail",
        data() {
            return {}
        },
        created() {

        },
        mounted() {
            window.searchPage = 2;
            $("#visit_farmerTask_detail_page").live("pageshow", function () {
                initVisitFarmerTaskDetail();
                window.visitTaskDetailPage = true;
                //处理步骤
                $("#visit_farmerTask_detail_page .right_btn").listen("quickClick", function (e) {
                    window.setpsSources = "visitEnterprise";
                    $.mobile.changePage("../check/checkedSteps.html");
                });
                /*返回*/
                $("#visit_farmerTask_detail_page .back-button").listen("quickClick", function (e) {
                    if ("welcome" == window.welcomeCheckJumpType) {
                        $.mobile.changePage("../load/welcome.html");
                    } else {
                        $.mobile.changePage("../visit/visitWelcomeList.html");
                    }
                });
                //下派
                $("#visit_farmerTask_detail_page .page_footer").listen("quickClick", function (e) {
                    if (1 == parseInt(window.visitDetailLevel)) {
                        //下派
                        showChoiceOne();
                        setTimeout(function () {
                            if (!isNull(window.visitBtnName) && window.visitBtnName.length > 0) {
                                for (var i = 0; i < window.visitBtnName.length; i++) {
                                    var info = '<p class="alert_edit_title gray_line_bottom">' + window.visitBtnName[i].name + '</p>';
                                    var $row = createListRow(info).appendTo("#choice_one_html");
                                    $row.data('data', window.visitBtnName[i]);
                                    $row.listen("quickClick", function (e) {
                                        //点击事件
                                        var data = $(e.currentTarget).data("data");
                                        window.visitDetailLevel = data.id;
                                        $.mobile.changePage("../visit/visitChoicePeople.html");
                                    });
                                }
                            }
                        }, 500);
                    } else if (2 == parseInt(window.visitDetailLevel)) {
                        //同级指派
                        $.mobile.changePage("../visit/visitChoicePeople.html");
                    } else if (3 == parseInt(window.visitDetailLevel)) {
                        if (parseInt(1) == window.visitWelcomeTaskInfo.taskType) {
                            //农户
                            $.mobile.changePage("../visit/visit_farmer_edit.html");
                        } else {
                            //企业
                            $.mobile.changePage("../visit/visit_enterprise_edit.html");
                        }
                    }
                });
            });

            function initVisitFarmerTaskDetail() {
                $("#visit_farmerTask_detail_wrapper")[0].style.height = window.localInnerHeight - $("#visit_farmerTask_detail_page .page_header").height() - $("#visit_farmerTask_detail_page .page_footer").height() + "px";
                initScroll({
                    "wrapper": "visit_farmerTask_detail_wrapper",
                    "dir": "y",
                    "bounce": false,
                    "scrollBar": true
                });
                scrollToTop("visit_farmerTask_detail_wrapper");
                $("#visit_farmerTask_detail_page table tr td").addClass("gray_line_bottom");
                $("#visit_farmerTask_detail_page table tr td:last-child").html("");
                window.visitDetailLevel = "";
                window.nextUserId = "";
                $(".max-dialog").remove();
                app_taskContent("", "");
            }
        },
        methods: {}
    }
</script>

<style lang="less" scoped>
    #visit_farmerTask_detail_page .right_btn {
        width: 4.5em;
        right: 0;
    }
</style>
