<template>
    <div data-role="page" id="notice_welcome_list_page">
        <tk-header :back="false">
            通知公告
        </tk-header>

        <div class="page_content" style="">
            <div class="search_div">
                <input id="notice_welcome_list_inp" style="width:80%;" class="alert_edit_div_input" type="text"
                       placeholder="请输入搜索内容"/>
                <img id="refresh_service" style="display: none;" src="/staitc/resources/images/icon_gray_screen.png"
                     class=" ">
                <div id="service_search" class="orange_background smaller">搜索</div>
            </div>
            <div id="notice_welcome_list_wrapper" class="jszx-wrapper">
                <div class="jszx-scroller">
                    <div id="notice_welcome_list_html" class="html_margin white_background">
                    </div>
                </div>
            </div>
        </div>
        <div id="page_footer2" class="page_footer smaller" style="position: fixed;bottom: 0;">
            <div class="jszx-bar-icon-up jszx-bar-item-4 ">
                <div>
                    <img src="/staitc/resources/images/icon_one.png" alt="">
                    <p >首页</p>
                </div>
                <div>
                    <img src="/staitc/resources/images/icon_two_press.png" alt="">
                    <p style="color: #0283de;">公告</p>
                    <div  class="red_notice_num" style="font-size:0.5em;"></div>
                </div>
                <div>
                    <img src="/staitc/resources/images/icon_three.png" alt="">
                    <p>通讯录</p>
                </div>
                <div>
                    <img src="/staitc/resources/images/icon_four.png" alt="">
                    <p>我的</p>
                    <div id="newVersonRed_welcome" class="red_round_wode"></div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "noticeWelcomeList",
        mounted(){
            window.searchPage = 2;
            var that=this;

            $("#notice_welcome_list_page").live("pageshow", function () {
                $("#notice_welcome_list_html").empty();
                app_noticeList(false, 1, $("#notice_welcome_list_inp").val(), window.noticeTypeList, "notice_welcome_list_html");


//首页
                $("#page_footer2").find(".jszx-bar-icon-up>div:eq(0)").listen("quickClick", function(e) {
                    that.$router.push({path:'welcome',query:{}});
                });
                //公告
                $("#page_footer2").find(".jszx-bar-icon-up>div:eq(1)").listen("quickClick", function(e) {
                    that.$router.push({path:'noticeWelcomeList',query:{}});

                });

                //通讯录
                $("#page_footer2").find(".jszx-bar-icon-up>div:eq(2)").listen("quickClick", function(e) {

                    that.$router.push({path:'peoplePhone',query:{}});

                });
                //我的
                $("#page_footer2").find(".jszx-bar-icon-up>div:eq(3)").listen("quickClick", function(e) {

                    that.$router.push({path:'moreWelcome',query:{}});

                });

                /*返回*/
                $("#notice_welcome_list_page .left_img").listen("quickClick", function (e) {
                    window.noticeWelcomePage = false;
                    $.mobile.changePage("../load/welcome.html");
                });
                /*搜索*/
                $("#notice_welcome_list_page #service_search").listen("quickClick", function (e) {
                    window.searchPage = 2;
                    app_noticeList(false, 1, $("#notice_welcome_list_inp").val(), window.noticeTypeList, "notice_welcome_list_html");
                });
            })
            function initNoticeWelcomeList() {
                $("#notice_welcome_list_wrapper")[0].style.height = window.localInnerHeight - $("#notice_welcome_list_page .page_header").height() - $("#notice_welcome_list_page .search_div").height()-$("#notice_welcome_list_page .page_footer").height() + "px";
                initScroll({
                    "wrapper": "notice_welcome_list_wrapper",
                    "dir": "y",
                    "bounce": false,
                    "scrollBar": true,
                    "pullUpLoading": function (reset) { //涓婃媺

                        if (window.searchPage > window.arrayDataLength) {
                            reset(true);
                            toast("没有更多的数据了");
                        } else {
                            app_noticeList(reset, window.searchPage++, $("#notice_welcome_list_inp").val(), window.noticeTypeList, "notice_welcome_list_html");
                        }
                    },
                    "pullDownLoading": function (reset) { //涓嬫媺
                        window.searchPage = 2;
                        app_noticeList(reset, 1, $("#notice_welcome_list_inp").val(), window.noticeTypeList, "notice_welcome_list_html");
                    }
                });
                scrollToTop("notice_welcome_list_wrapper");
                window.noticeTypeName = "";
                app_noticeList(false, 1, "", "", "notice_welcome_list_html");
                $("#notice_welcome_list_page #notice_welcome_list_inp").val("");
                window.noticeTypeList = "";
                window.noticetype="";
            }
        }
    }
</script>

<style scoped>
    #notice_welcome_list_page .page_header_title .jszx-bar-icon-up {
        background: #fafafa;
    }

    #notice_welcome_list_page .home_list_tr_first_td {
        padding: 0.7em;
        padding-left: 0em;
    }


    #notice_welcome_list_page .search_div {
        padding: 0.5em 1em 0em 1em;
        margin: 0em;
        background: #edeef1;
    }



    #notice_welcome_list_page #refresh_service {
        width: 2em;
        height: 2em;
        padding: 0.4em 0.2em 0em 0.8em;
        float: right;
    }

    #notice_welcome_list_page #service_search {
        width: 4em;
        text-align: center;
        color: #ffffff;
        margin-top: 0.7em;
        float: right;
        line-height: 2.2em;
        border-radius: 0.3em;
    }

    #notice_welcome_list_page .search_div {
        height: 3.2em;
    }

    #notice_welcome_list_page .home_list_tr_first_td span {
        margin-left: 0.5em;
    }
    .red_round_rank{
        width: 0.5em;
        height: 0.5em;
        background: red;
        border-radius: 0.5em;
        position: relative;
        float: left;
        /* margin-right: 2.0em;
        margin-top: -3.5em; */
        border: 2px solid #ffffff;
    }
</style>
