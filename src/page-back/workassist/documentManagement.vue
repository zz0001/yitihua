<template>
    <div data-role="page" id="document_management_page">
        <div class="page_header">
            <img class="left_img back-button maplistback" src="/staitc/resources/images/icon_white_back.png">
            <div class="page_header_title">文档资料</div>
        </div>
        <div class="page_content" style="">
            <div class="search_div">
                <input id="document_management_inp" class="alert_edit_div_input" type="text" placeholder="请输入搜索内容"/>
                <img id="refresh_service" src="/staitc/resources/images/icon_gray_screen.png"
                     class=" " style="display: none;">
                <div id="service_search" class="orange_background smaller">搜索</div>
            </div>
            <div id="document_management_wrapper" class="jszx-wrapper">
                <div class="jszx-scroller">
                    <div id="document_management_html" class="html_margin">
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script type="text/ecmascript-6">
    export default {
        name: "documentManagement",
        data() {
            return {}
        },
        created() {

        },
        mounted() {
            var that = this;
            window.searchPage = 2;
            // $("#document_management_page").live("pageshow", function () {
                if (!window.documentWelcomePage) {
                    initDocumentManagement();
                    window.documentWelcomePage = true;
                }
                /*筛选*/
                $("#document_management_page #refresh_service").off().listen("quickClick", function (e) {
                    hideFilterAlert();
                    if ("yes" != window.filter_alert_status) {
                        showFilterAlert(function () {
                        }, function () {
                            if (isNull(window.filter_community_code) && isNull(window.filter_community_code)) {
                                toast("您还没有选择筛选条件");
                            } else {
                                hideFilterAlert();
                                app_documentList(false, 1, "", $("#document_management_inp").val(), window.fileTypeList);
                            }
                        }, function () {
                        });
                    }
                });
                /*返回*/
                $("#document_management_page .maplistback").listen("quickClick", function (e) {
                    // $.mobile.changePage("../workassist/workWelcomeType.html");
                    that.$router.back(-1);
                });
                /*搜索*/
                $("#document_management_page #service_search").listen("quickClick", function (e) {
                    window.searchPage = 2;
                    app_documentList(false, 1, "1", $("#document_management_inp").val(), window.fileTypeList);
                });
            // });

            function initDocumentManagement() {
                $("#document_management_wrapper")[0].style.height = window.localInnerHeight - $("#document_management_page .page_header").height() - $("#document_management_page .search_div").height() + "px";
                initScroll({
                    "wrapper": "document_management_wrapper",
                    "dir": "y",
                    "bounce": false,
                    "scrollBar": true,
                    "pullUpLoading": function (reset) { //上拉
                        if (window.searchPage > window.arrayDataLength) {
                            reset(true);
                            toast("没有更多的数据了");
                        } else {
                            app_documentList(reset, window.searchPage++, "1", $("#document_management_inp").val(), window.fileTypeList);
                        }
                    },
                    "pullDownLoading": function (reset) { //下拉
                        window.searchPage = 2;
                        app_documentList(reset, 1, "1", $("#document_management_inp").val(), window.fileTypeList);
                    }
                });
                scrollToTop("document_management_wrapper");
                window.noticeTypeName = "";
                window.fileTypeList = [];
                $("#document_management_page #document_management_inp").val("");
                app_documentList(false, 1, "1", "", "");
            }
        },
        methods: {}
    }
</script>

<style lang="less" scoped>
    #document_management_page .page_header_title .jszx-bar-icon-up {
        background: #fafafa;
    }

    #document_management_page .home_list_tr_first_td {
        padding: 0.7em;
        padding-left: 0em;
    }

    #document_management_page #document_management_inp {
        width: 75%;
        margin-top: 0.5em;
    }

    #document_management_page #refresh_service {
        width: 2em;
        height: 2em;
        padding: 0.4em 0.2em 0em 0.8em;
        float: right;
    }

    #document_management_page #service_search {
        width: 4em;
        text-align: center;
        color: #ffffff;
        margin-top: 0.7em;
        float: right;
        line-height: 2.2em;
        border-radius: 0.3em;
    }

    #document_management_page .search_div {
        background: #edeef1;
        height: 3.2em;
    }

    #document_management_page .home_list_tr_first_td span {
        margin-left: 0.5em;
    }
</style>
