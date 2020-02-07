<template>
    <div data-role="page" id="my_parts_list_page">
        <div class="page_header">
            <img class="left_img back-button" src="/staitc/resources/images/icon_white_back.png">
            <div class="page_header_title">部件列表</div>
            <img class="right_img back-button" src="/staitc/resources/images/icon_gray_add.png">
        </div>
        <div class="page_content" style="">
            <div id="my_parts_list_wrapper" class="jszx-wrapper">
                <div class="jszx-scroller">
                    <div id="my_parts_list_html" class="html_margin">

                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script type="text/ecmascript-6">
    export default {
        name: "myPartsList",
        data() {
            return {}
        },
        created() {

        },
        mounted() {
            window.searchPage = 2;
            $("#my_parts_list_page").live("pageshow", function () {
                initMyPartsList();
                /*大小类*/
                $("#my_parts_list_page .my_parts_list_bigclass").listen("quickClick", function (e) {
                    titleScreenSearchHelp("area", function () {
                    }, function () {
                        showSmmyTitle(".my_parts_list_bigclass", "3");
                        scrollToTop("screen_content1_wrapper");
                    });
                });
                /*部件状态*/
                $("#my_parts_list_page .my_parts_list_time").listen("quickClick", function (e) {
                    titleScreenSearchHelp("area", function () {
                    }, function () {
                        showSmmyTitle(".my_parts_list_bigclass", "1");
                        scrollToTop("screen_content1_wrapper");
                    });
                });
                /*返回*/
                $("#my_parts_list_page .left_img").listen("quickClick", function (e) {
                    $.mobile.changePage("../load/partManagementWelcome.html");
                });
                /*上报*/
                $("#my_parts_list_page .right_img").listen("quickClick", function (e) {
                    window.partDetailId = "";
                    $.mobile.changePage("../parts/myAddPart.html");
                });
            });

            function initMyPartsList() {
                $("#my_parts_list_wrapper")[0].style.height = window.localInnerHeight - $("#my_parts_list_page .page_header").height() + "px";
                initScroll({
                    "wrapper": "my_parts_list_wrapper",
                    "dir": "y",
                    "bounce": false,
                    "scrollBar": true,
                    "pullUpLoading": function (reset) { //上拉
                        if (window.searchPage > window.arrayDataLength) {
                            reset(true);
                            toast("没有更多的数据了");
                        } else {
                            app_componentList(reset, window.searchPage++, "", window.localStorage.userId, "", "", "");
                        }
                    },
                    "pullDownLoading": function (reset) { //下拉
                        window.searchPage = 2;
                        app_componentList(reset, 1, "", window.localStorage.userId, "", "", "");
                    }
                });
                scrollToTop("my_parts_list_wrapper");
                app_componentList(false, 1, "", window.localStorage.userId, "", "", "")
            }

            /**
             * 筛选条件
             * @param type
             */
            function setRestTitle() {
                $("#my_parts_list_bigclass_id").html("大小类");
                $("#my_parts_list_time_id").html("部件状态");
            }
        },
        methods: {}
    }
</script>

<style lang="less" scoped>
    #my_parts_list_page .home_list_tr_first_td span {
        margin-left: 0.5em;
    }

    #my_parts_list_page .jszx-bar-item-2 > div {
        width: 50%;
    }

    #my_parts_list_page .tab_oranger_font p,
    .tab_bloack_font p, #my_parts_list_page .jszx-bar-item-2 div p {
        height: 2.8em;
        line-height: 2.8em;
    }

    /*筛选小图标*/
    #my_parts_list_page .jszx-bar-item-2 div p img {
        width: 0.6em;
        height: 0.5em;
        padding-left: 0.5em;
    }

    #my_parts_list_page .page_header .right_img {
        width: 1.5em;
        height: 1.5em;
    }
</style>
