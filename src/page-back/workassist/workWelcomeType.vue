<template>
    <div data-role="page" id="work_welcome_page">
        <div class="page_header">
            <img class="left_img back-button" src="/staitc/resources/images/icon_white_back.png">
            <div class="page_header_title">工作助手</div>
        </div>
        <div class="page_content">
            <div id="work_welcome_wrapper" class="jszx-wrapper">
                <div class="jszx-scroller html_margin">
                    <table cellpadding="0" cellspacing="0" class="list_table">
                        <tr class="work_welcome_file">
                            <th><img src="/staitc/resources/images/icon_word.png" class="more_list_icon"></th>
                            <td style="padding:0em;">
                                <p>文档资料</p>
                                <p style="padding-bottom:0.6em;" class="smaller gray_font">文档资料，文档资料</p>
                            </td>
                            <td><img src="/staitc/resources/images/icon_gray_line_left.png"
                                     class="gatwway_list_icon_right">
                            </td>
                        </tr>
                        <!-- 领导查看 -->
                        <tr class="work_welcome_leaderchecked">
                            <th><img src="/staitc/resources/images/icon_word.png" class="more_list_icon"></th>
                            <td style="padding:0em;">
                                <p>领导查看</p>
                                <p style="padding-bottom:0.6em;" class="smaller gray_font">领导查看全部工单</p>
                            </td>
                            <td style="text-align: right; padding-right: 1em;"><img
                                    src="/staitc/resources/images/icon_gray_line_left.png"
                                    class="gatwway_list_icon_right">
                            </td>
                        </tr>
                        <!-- 事项统计 -->
                        <tr class="statistics_analysis">
                            <th><img src="/staitc/resources/images/icon_word.png" class="more_list_icon"></th>
                            <td style="padding:0em;">
                                <p>事项统计</p>
                                <p style="padding-bottom:0.6em;" class="smaller gray_font">统计一段时间事项</p>
                            </td>
                            <td style="text-align: right; padding-right: 1em;"><img
                                    src="/staitc/resources/images/icon_gray_line_left.png"
                                    class="gatwway_list_icon_right">
                            </td>
                        </tr>
                        <!-- 部门办件统计 -->
                        <tr class="statistics_office">
                            <th><img src="/staitc/resources/images/icon_word.png" class="more_list_icon"></th>
                            <td style="padding:0em;">
                                <p>部门办件统计</p>
                                <p style="padding-bottom:0.6em;" class="smaller gray_font">统计部门办件情况</p>
                            </td>
                            <td style="text-align: right; padding-right: 1em;"><img
                                    src="/staitc/resources/images/icon_gray_line_left.png"
                                    class="gatwway_list_icon_right">
                            </td>
                        </tr>
                        <!--   排名考核 -->
                        <tr class="statistics_rank">
                            <th><img src="/staitc/resources/images/icon_word.png" class="more_list_icon"></th>
                            <td style="padding:0em;">
                                <p>排名考核</p>
                                <p style="padding-bottom:0.6em;" class="smaller gray_font">统计部门办件情况</p>
                            </td>
                            <td style="text-align: right; padding-right: 1em;"><img
                                    src="/staitc/resources/images/icon_gray_line_left.png"
                                    class="gatwway_list_icon_right">
                            </td>
                        </tr>
                    </table>
                </div>
            </div>
        </div>
    </div>
</template>

<script type="text/ecmascript-6">
    export default {
        name: "workWelcomeType",
        data() {
            return {}
        },
        created() {

        },
        mounted() {
            // $("#work_welcome_page").live("pageshow", function () {
                initWorkWelcome();
                //返回
                $("#work_welcome_page .back-button").listen("quickClick", function (e) {
                    // $.mobile.changePage("../load/welcome.html");
                    that.$router.back();
                });
                //文档资料
                $("#work_welcome_page .work_welcome_file").listen("quickClick", function (e) {
                    window.documentWelcomePage = "";
                    // $.mobile.changePage("../workassist/documentManagement.html");
                    that.$router.push('/documentManagement');
                });
                // 领导查看
                $("#work_welcome_page .work_welcome_leaderchecked").listen("quickClick", function (e) {
                    window.CaseWelcomePage = "";
                    window.thisCaseQueryType = "1";
                    // $.mobile.changePage("../casetask/allWelcomeList.html");
                    that.$router.push('/allWelcomeList');
                });
                // 统计分析
                $("#work_welcome_page .statistics_analysis").listen("quickClick", function (e) {
                    // $.mobile.changePage("../workassist/statisticsAnalysis.html");
                    that.$router.push('/statisticsAnalysis');
                });
                // 部门办件统计
                $("#work_welcome_page .statistics_office").listen("quickClick", function (e) {
                    // $.mobile.changePage("../workassist/statisticsOffice.html");
                    that.$router.push('/statisticsOffice');
                });
                // 排名考核
                $("#work_welcome_page .statistics_rank").listen("quickClick", function (e) {
                    window.opinionWelcomePage = "";
                    // $.mobile.changePage("../rank/rankListType.html");
                    that.$router.push('/rankListType');
                });
            // });

            function initWorkWelcome() {
                $("#work_welcome_wrapper")[0].style.height = window.localInnerHeight - $("#work_welcome_page .page_header").height() + "px";
                initScroll({
                    "wrapper": "work_welcome_wrapper",
                    "dir": "y",
                    "bounce": false,
                    "scrollBar": false
                });
                scrollToTop("work_welcome_wrapper");
                // 权限判定
                if (window.localStorage.userType === "01") {
                    $(".work_welcome_leaderchecked").show();
                    $(".statistics_analysis").show();
                    $(".statistics_office").show();
                } else {
                    $(".work_welcome_leaderchecked").hide();
                    $(".statistics_analysis").hide();
                    $(".statistics_office").hide();
                }
            }
        },
        methods: {}
    }
</script>

<style lang="less" scoped>
    #work_welcome_page table tr td p {
        padding: 0.6em 0.6em 0 0;
    }

    #work_welcome_page .gatwway_list_height {
        border-bottom: 0.5em solid #edeef1;
        width: 100%;
    }

    #work_welcome_page .gatwway_list tr td + td,
    .gatwway_list_height tr td + td {
        width: 1%;
    }
</style>
