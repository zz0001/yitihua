<template>
    <div data-role="page" id="wait_visit_page">
        <div class="page_header">
            <img class="left_img back-button maplistback" src="/staitc/resources/images/icon_white_back.png">
            <div class="page_header_title">大走访</div>
        </div>
        <div class="page_content" style="">
            <div class="jszx-bar-icon-up jszx-bar-item-2 wait_visit_title gray_border">
                <div class="wait_visit_wait">
                    <p>我的待办</p>
                </div>
                <div class="wait_visit_already">
                    <p>我的已办</p>
                </div>
            </div>
            <div class="search_div">
                <input id="wait_visit_inp" class="alert_edit_div_input" type="text"
                       placeholder="请输入搜索内容"/>
                <img id="refresh_service" src="/staitc/resources/images/icon_gray_screen.png"
                     class=" ">
                <div id="service_search" class="orange_background smaller">搜索</div>
            </div>
            <div id="wait_visit_wrapper" class="jszx-wrapper">
                <div class="jszx-scroller">
                    <div id="wait_visit_html" class="html_margin"></div>
                </div>
            </div>
        </div>
    </div>
</template>

<script type="text/ecmascript-6">
    export default {
        name: "visitWelcomeList",
        data() {
            return {}
        },
        created() {

        },
        mounted() {
            window.searchPage = 2;
            $("#wait_visit_page").live("pageshow", function () {
                if (!window.VisitWelcomePage) {
                    window.choiceVisitTaskType = "0";//任务类型
                    if (1 == parseInt(window.thisCheckVisitType)) {
                        noVisit();
                    } else {
                        yesVisit();
                    }
                    window.VisitWelcomePage = true;
                }
                /*筛选*/
                $("#wait_visit_page #refresh_service").off().listen("quickClick", function (e) {
                    hideFilterAlert();
                    if ("yes" != window.filter_alert_status) {
                        showFilterAlert(function () {
                            window.choiceVisitTaskType = "0";
                            $("#wait_visit_page .list_row p").removeClass("oranger_font");
                        }, function () {
                            hideFilterAlert();
                            window.searchPage = 2;
                            app_taskList(false, 1, window.thisCheckVisitType, $("#wait_visit_inp").val());
                        }, function () {
                        });
                        var info1 = '<p class="gray_line_bottom filter_line_height">走访类型：</p>';
                        createListRow(info1).appendTo("#alert_filter_content");
                        for (var i = 0; i < window.visitSourcesList.length; i++) {
                            var sexinfo = '';
                            if (window.choiceVisitTaskType == window.visitSourcesList[i].id) {
                                sexinfo += '<p class="gray_line_bottom oranger_font"  style="padding:0.5em 0.5em 0.5em 2em;">' + window.visitSourcesList[i].name + '</p>';
                            } else {
                                sexinfo += '<p class="gray_line_bottom"  style="padding:0.5em 0.5em 0.5em 2em;">' + window.visitSourcesList[i].name + '</p>';
                            }
                            var $sex_row = createListRow(sexinfo).appendTo("#alert_filter_content");
                            $sex_row.data('data', window.visitSourcesList[i]);
                            $sex_row.listen("quickClick", function (e) {
                                var data = $(e.currentTarget).data("data");
                                window.choiceVisitTaskType = data.id;
                                $(e.currentTarget).siblings().find("p").removeClass("oranger_font");
                                $(e.currentTarget).find("p").addClass("oranger_font");
                            })
                        }
                    }
                });
                /*待办*/
                $("#wait_visit_page .wait_visit_wait").listen("quickClick", function (e) {
                    noVisit();
                });
                /*已办*/
                $("#wait_visit_page .wait_visit_already").listen("quickClick", function (e) {
                    yesVisit();
                });
                /*返回*/
                $("#wait_visit_page .left_img").listen("quickClick", function (e) {
                    $.mobile.changePage("../load/welcome.html");
                });
                /*搜索*/
                $("#wait_visit_page #service_search").listen("quickClick", function (e) {
                    window.searchPage = 2;
                    app_taskList(false, 1, window.thisCheckVisitType, $("#wait_visit_inp").val());
                });
            });

            //未走访
            function noVisit() {
                window.searchPage = 2;
                $("#wait_visit_page #wait_visit_inp").val("");
                $("#wait_visit_page .search_div").hide();
                $("#wait_visit_page #wait_visit_rednum").hide();
                $("#wait_visit_page .wait_visit_title").addClass("gray_border");
                $("#wait_visit_page .wait_visit_title div").removeClass("tab_oranger_font");
                $("#wait_visit_page .wait_visit_wait").addClass("tab_oranger_font");
                window.thisCheckVisitType = "1";
                initVisitWelcome();
            }

            //已办
            function yesVisit() {
                window.searchPage = 2;
                $("#wait_visit_page #wait_visit_inp").val("");
                $("#wait_visit_page .search_div").show();
                $("#wait_visit_page #wait_visit_rednum").show();
                $("#wait_visit_page .wait_visit_title").removeClass("gray_border");
                $("#wait_visit_page .wait_visit_title div").removeClass("tab_oranger_font");
                $("#wait_visit_page .wait_visit_already").addClass("tab_oranger_font");
                window.thisCheckVisitType = "2";
                initVisitWelcome();
            }

            //初始化
            function initVisitWelcome() {
                if (1 == parseInt(window.thisCheckVisitType)) {
                    $("#wait_visit_wrapper")[0].style.height = window.localInnerHeight - $("#wait_visit_page .page_header").height() - $("#wait_visit_page .wait_visit_title").height() + "px";
                } else {
                    $("#wait_visit_wrapper")[0].style.height = window.localInnerHeight - $("#wait_visit_page .page_header").height() - $("#wait_visit_page .search_div").height() - $("#wait_visit_page .wait_visit_title").height() + "px";
                }

                initScroll({
                    "wrapper": "wait_visit_wrapper",
                    "dir": "y",
                    "bounce": false,
                    "scrollBar": true,
                    "pullUpLoading": function (reset) { //上拉
                        if (window.searchPage > window.arrayDataLength) {
                            reset(true);
                            toast("没有更多的数据了");
                        } else {
                            app_taskList(reset, window.searchPage++, window.thisCheckVisitType, $("#wait_visit_inp").val());
                        }
                    },
                    "pullDownLoading": function (reset) { //下拉
                        window.searchPage = 2;
                        app_taskList(reset, 1, window.thisCheckVisitType, $("#wait_visit_inp").val());
                    }
                });
                scrollToTop("wait_visit_wrapper");
                $("#wait_visit_inp").val("");
                app_taskList(false, 1, window.thisCheckVisitType, $("#wait_visit_inp").val());
            }
        },
        methods: {}
    }
</script>

<style lang="less" scoped>
    #wait_visit_page .page_header_title .jszx-bar-icon-up {
        background: #fafafa;
    }

    #wait_visit_page .home_list_tr_first_td {
        padding: 0.7em;
        padding-left: 0em;
    }

    #wait_visit_page .red_num {
        float: right;
        top: 1.2em;
        right: 2em;
    }

    #wait_visit_page .search_div {
        padding: 0.5em 1em 0em 1em;
        margin: 0em;
        background: #edeef1;
    }

    #wait_visit_page #refresh_service {
        width: 2em;
        height: 2em;
        padding: 0.4em 0.2em 0em 0.8em;
        float: right;
    }

    #wait_visit_page #service_search {
        width: 4em;
        text-align: center;
        color: #ffffff;
        margin-top: 0.7em;
        float: right;
        line-height: 2.2em;
        border-radius: 0.3em;
    }

    #wait_visit_page .search_div {
        height: 3.2em;
    }

    #wait_visit_page .home_list_tr_first_td span {
        margin-left: 0.5em;
    }

    #wait_visit_page table tr:first-child th img {
        width: 2em;
        height: 2em;
        padding-left: 1.3em;
    }

    #wait_visit_page .list_img_table tr:first-child + tr td:last-child {
        padding: 0.7em 1em 0.7em 1.3em;
        text-align: left;
    }

    #wait_visit_page .jszx-bar-item-2 > div {
        width: 50%;
    }

    #wait_visit_page .jszx-bar-item-2 p,
    .jszx-bar-item-2 p {
        height: 2.8em;
        line-height: 2.8em;
    }
</style>
