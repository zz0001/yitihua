<template>
    <div data-role="page" id="partrol_detail_page">
        <div class="page_header">
            <img class="left_img back-button" src="/staitc/resources/images/icon_white_back.png">
            <div class="page_header_title">巡查详情</div>
            <div class="right_img">记录</div>
        </div>
        <div class="page_content">
            <div id="partrol_detail_wrapper" class="jszx-wrapper">
                <div class="jszx-scroller">
                    <div id="partrol_detail_html" class="html_margin white_background">
                        <table class="inp_table settd_tab" cellpadding="0" cellspacing="0">
                            <tr>
                                <td style="min-width: 5em;">标题</td>
                                <td id="partrol_detail_title" colspan="2"></td>
                            </tr>
                            <tr>
                                <td style="min-width: 5em;">所属网格</td>
                                <td colspan="2" id="partrol_detail_gridName"></td>
                            </tr>
                            <tr>
                                <td style="min-width: 5em;">任务类型</td>
                                <td colspan="2" id="partrol_detail_taskType"></td>
                            </tr>
                            <tr>
                                <td style="min-width: 5em;">开始时间</td>
                                <td colspan="2" id="partrol_detail_startTime"></td>
                            </tr>
                            <tr>
                                <td style="min-width: 5em;">结束时间</td>
                                <td colspan="2" id="partrol_detail_enddate"></td>
                            </tr>
                            <tr id="partrol_detail_industryType_tr">
                                <td style="min-width: 5em;">巡查人员</td>
                                <td colspan="2" id="partrol_detail_patrolPerson"></td>
                            </tr>
                            <tr>
                                <td colspan="2">任务描述</td>
                                <td>
                                    <input class="small gray_dark_font" style="color:#999999;"/>
                                </td>
                            </tr>
                            <tr>
                                <td colspan="3" style="color:#333333;" id="partrol_detail_task_desc"></td>
                            </tr>
                            <tr>
                                <td style="min-width: 5em;" class="">指派人</td>
                                <td colspan="2" id="partrol_detail_assignPerson"></td>
                            </tr>
                            <tr>
                                <td style="min-width: 5em;">指派时间</td>
                                <td colspan="2" id="partrol_detail_assignTime"></td>
                            </tr>
                            <tr>
                                <td style="min-width: 5em;" class="">巡查次数</td>
                                <td colspan="2" id="partrol_detail_patrolTimes"></td>
                            </tr>
                        </table>
                    </div>
                </div>
            </div>
        </div>
        <div class="page_footer">
            <div class="footer_button_div"></div>
        </div>
    </div>
</template>

<script type="text/ecmascript-6">
    export default {
        name: "patrolDetail",
        data() {
            return {}
        },
        created() {

        },
        mounted() {
            window.searchPage = 2;
            $("#partrol_detail_page").live("pageshow", function () {
                initPartrolDetail();
                /*返回*/
                $("#partrol_detail_page .back-button").listen("quickClick", function (e) {
                    window.history.back();
                });
                /*记录*/
                $("#partrol_detail_page .right_img").listen("quickClick", function (e) {
                    $.mobile.changePage("../patrol/patrolRecord.html");
                });
            });

            function initPartrolDetail() {
                $("#partrol_detail_wrapper")[0].style.height = window.localInnerHeight - $("#partrol_detail_page .page_header").height() - $("#partrol_detail_page .page_footer").height() + "px";
                initScroll({
                    "wrapper": "partrol_detail_wrapper",
                    "dir": "y",
                    "bounce": false,
                    "scrollBar": true
                });
                scrollToTop("partrol_detail_wrapper");
                $("#partrol_detail_page table tr td").addClass("gray_line_bottom");
                $("#partrol_detail_page table tr td:last-child").html("");
                $("#partrol_detail_page .footer_button_div").empty();
                app_patrolDetail();
            }
        },
        methods: {}
    }
</script>

<style lang="less" scoped>
    #partrol_detail_page .alert_bottom_three {
        width: 35%;
        float: left;
    }

    #partrol_detail_page .page_header .right_img {
        top: 0.6em;
    }
</style>
