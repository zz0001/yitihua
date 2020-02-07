<template>
    <div data-role="page" id="patrol_welcome_page">
        <div class="page_header">
            <img class="left_img back-button" src="/staitc/resources/images/icon_white_back.png">
            <div class="page_header_title">日常巡查</div>
            <div class="right_img right_btn">筛选</div>
        </div>
        <div class="page_content" style="">
            <div class="jszx-bar-icon-up patrolwelcome jszx-bar-item-2  gray_border">
                <div class="patrol_welcome_wait">
                    <p>我的待办</p>
                </div>
                <div class="patrol_welcome_already">
                    <p>我的已办</p>
                </div>
            </div>
            <div id="patrol_welcome_wrapper" class="jszx-wrapper">
                <div class="jszx-scroller">
                    <div id="patrol_welcome_html" class="html_margin white_background">

                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script type="text/ecmascript-6">
    export default {
        name: "patrolWelcomeList",
        data() {
            return {}
        },
        created() {

        },
        mounted() {
            window.searchPage = 2;
            $("#patrol_welcome_page").live("pageshow", function () {
                if (!window.patrolWelcomePage) {
                    waitPatrol();
                    window.patrolWelcomePage = true;
                }
                /*任务类型*/
                $("#patrol_welcome_page .patrol_welcome_type").listen("quickClick", function (e) {
                    titleScreenSearchHelp("area", function () {
                    }, function () {
                        showSmallTitle(".patrol_welcome_type", "3");
                        scrollToTop("screen_content1_wrapper");
                    });
                });
                /*待办*/
                $("#patrol_welcome_page .patrol_welcome_wait").listen("quickClick", function (e) {
                    waitPatrol();
                });
                /*已办*/
                $("#patrol_welcome_page .patrol_welcome_already").listen("quickClick", function (e) {
                    yesPatrol();
                });
                /*状态*/
                $("#patrol_welcome_page .patrol_welcome_statu").listen("quickClick", function (e) {
                    titleScreenSearchHelp("area", function () {
                    }, function () {
                        showSmallTitle(".patrol_welcome_type", "1");
                        scrollToTop("screen_content1_wrapper");
                    });
                });
                /*筛选*/
                $("#patrol_welcome_page .right_img").listen("quickClick", function (e) {
                    if ($(".max-dialog").is(':visible') == true) {
                        $(".max-dialog").remove();
                    } else {
                        showSmallChoice("大小类", "", function () {
                            setTimeout(function () {
                                patrolSearchByClass();
                            }, 500);
                        }, null);
                    }
                });
                /*返回*/
                $("#patrol_welcome_page .back-button").listen("quickClick", function (e) {
                    if ($(".max-dialog").is(':visible') == true) {
                        $(".max-dialog").remove();
                    } else {
                        $.mobile.changePage("../load/waitWorkWelcome.html");
                    }
                });
            });

            function patrolSearchByClass() {
                showSmallTitle(".all_parts_list_bigclass", "2", function () {
                    //重置
                    window.choiceBigType = "";
                    window.choiceSmallType = "";
                    window.choiceTemporaryBigType = "";
                    window.choiceTemporarySmallType = "";
                    $("#screen_content1 div p").removeClass("oranger_font");
                    $("#screen_content2 div p").removeClass("oranger_font");
                }, function () {
                    //确定
                    scrollToTop("patrol_welcome_wrapper");
                    window.choiceBigType = window.choiceTemporaryBigType;
                    window.choiceSmallType = window.choiceTemporarySmallType;
                    hideUpSearchDiv();
                    app_patrolDoneList(1, false, window.patrolWorkType);
                });
                app_getType("", "1");
                scrollToTop("screen_content1_wrapper");
            }

            function waitPatrol() {
                $(".max-dialog").remove();
                window.thisPatrolPage = "no";
                initPatrolWelcome();
                $("#patrol_welcome_page .right_img").hide();
                $("#patrol_welcome_page .patrolwelcome div").removeClass("tab_oranger_font");
                $("#patrol_welcome_page .patrol_welcome_wait").addClass("tab_oranger_font");
            }

            function yesPatrol() {
                $(".max-dialog").remove();
                window.thisPatrolPage = "yes";
                initPatrolWelcome();
                $("#patrol_welcome_page .right_img").show();
                $("#patrol_welcome_page .patrolwelcome div").removeClass("tab_oranger_font");
                $("#patrol_welcome_page .patrol_welcome_already").addClass("tab_oranger_font");
            }

            function initPatrolWelcome() {
                $("#patrol_welcome_wrapper")[0].style.height = window.localInnerHeight - $("#patrol_welcome_page .page_header").height() - $("#patrol_welcome_page .jszx-bar-icon-up").height() + "px";
                initScroll({
                    "wrapper": "patrol_welcome_wrapper",
                    "dir": "y",
                    "bounce": false,
                    "scrollBar": true
                });
                window.patrolWorkType = "";
                window.choiceBigType = "";
                window.choiceSmallType = "";
                window.choiceTemporaryBigType = "";
                window.choiceTemporarySmallType = "";
                scrollToTop("patrol_welcome_wrapper");
                $("#patrol_welcome_page #patrol_welcome_html").empty();
                if (window.thisPatrolPage == "yes") {
                    //已办
                    app_patrolDoneList(1, false, window.patrolWorkType);
                } else {
                    app_patrolToDoList(1, false);
                }
            }
        },
        methods: {}
    }
</script>

<style lang="less" scoped>
    #patrol_welcome_page .page_header_title .jszx-bar-icon-up {
        background: #fafafa;
    }

    #patrol_welcome_page .tab_oranger_font p,
    .tab_bloack_font p, #patrol_welcome_page .jszx-bar-item-2 div p {
        height: 2.8em;
        line-height: 2.8em;
    }

    #patrol_welcome_page .page_header_title .jszx-bar-icon-up {
        background: #fafafa;
    }

    #patrol_welcome_page .home_list_tr_first_td {
        padding: 0.7em;
        padding-left: 0em;
    }

    #patrol_welcome_page .search_div {
        padding: 0.5em 1em 0em 1em;
        margin: 0em;
        background: #edeef1;
    }

    #patrol_welcome_page #patrol_welcome_inp {
        width: 65%;
        float: left;
        line-height: 2.5em;
        height: 2.5em;
    }

    #patrol_welcome_page #refresh_service {
        width: 2em;
        height: 2em;
        padding: 0.4em 0.2em 0em 0.8em;
        float: right;
    }

    #patrol_welcome_page #service_search {
        width: 4em;
        text-align: center;
        color: #ffffff;
        margin-top: 0.7em;
        float: right;
        line-height: 2.2em;
        border-radius: 0.3em;
    }

    #patrol_welcome_page .search_div {
        height: 3.2em;
    }

    #patrol_welcome_page .home_list_tr_first_td span {
        margin-left: 0.5em;
    }

    #patrol_welcome_page table tr td {
        padding: 0.7em 0em 0.3em 1em;
    }

    #patrol_welcome_page table tr:last-child td {
        padding: 0.3em 1em 0.7em 1.2em;
    }

    #patrol_welcome_page .small_img {
        height: 1.2em;
    }

    #patrol_welcome_page .jszx-bar-item-2 > div {
        width: 50%;
    }

    #patrol_welcome_page .tab_oranger_font p,
    .tab_bloack_font p, #patrol_welcome_page .jszx-bar-item-2 div p {
        height: 2.8em;
        line-height: 2.8em;
    }

    /*筛选小图标*/
    #patrol_welcome_page .jszx-bar-item-2 div p img {
        width: 0.6em;
        height: 0.5em;
        padding-left: 0.5em;
    }

    #patrol_welcome_page .jszx-bar-item-2 > div {
        width: 50%;
    }

    #patrol_welcome_page .jszx-bar-item-2 p,
    .jszx-bar-item-2 p {
        height: 2.8em;
        line-height: 2.8em;
    }
</style>
