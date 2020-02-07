<template>
    <div data-role="page" id="all_parts_list_page">
        <div class="page_header">
            <img class="left_img back-button " src="/staitc/resources/images/icon_white_back.png">
            <div class="page_header_title">部件列表</div>
            <div class="right_img right_btn">筛选</div>
        </div>
        <div class="page_content" style="">
            <div id="all_parts_list_wrapper" class="jszx-wrapper">
                <div class="jszx-scroller">
                    <div id="all_parts_list_html" class="html_margin white_background">
                        <table cellspacing="0" class="gray_line_bottom" cellpadding="0">
                            <tr>
                                <td>污水井盖 | 公共设施/污水井盖</td>
                                <td class="small red_font">破损</td>
                            </tr>
                            <tr>
                                <td class="small gray_font">丁岗镇 | 水利局 | 水利部门</td>
                                <td class="small gray_font">2017/07/11</td>
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
        name: "allPartsList",
        data() {
            return {}
        },
        mounted() {
            var that = this;
            console.log('进入allPartsList mounted()');
            window.searchPage = 2;
            // $("#all_parts_list_page").live("pageshow", function () {
                console.log('进入allPartsList live(pageshow)');
                if (!window.allPartsListPage) {
                    initAllPartsList();
                    window.allPartsListPage = true;
                }

                /*筛选*/
                $("#all_parts_list_page .right_img").listen("quickClick", function (e) {
                    console.log('点击筛选');
                    showSmallChoice("大小类", "部件状态", function () {
                        setTimeout(function () {
                            partsSearchByClass();
                        }, 500);
                    }, function () {
                        setTimeout(function () {
                            partsSearchByStatus();
                        }, 500);
                    });
                });
                /*返回*/
                $("#all_parts_list_page .left_img").listen("quickClick", function (e) {
                    console.log('点击返回');
                    // hideUpSearchDiv("../load/partManagementWelcome.html");
                    that.$router.go(-1);
                });
            // });

            //初始化
            function initAllPartsList() {
                console.log('初始化方法');
                $("#all_parts_list_wrapper")[0].style.height = window.localInnerHeight - $("#all_parts_list_page .page_header").height() + "px";
                initScroll({
                    "wrapper": "all_parts_list_wrapper",
                    "dir": "y",
                    "bounce": false,
                    "scrollBar": true,
                    "pullUpLoading": function (reset) { //上拉
                        if (window.searchPage > window.arrayDataLength) {
                            reset(true);
                            toast("没有更多的数据了");
                        } else {
                            allApp_componentList(reset, window.searchPage++, "", "", window.partStatuId, window.choiceBigType, window.choiceSmallType);
                        }
                    },
                    "pullDownLoading": function (reset) { //下拉
                        window.searchPage = 2;
                        allApp_componentList(reset, 1, "", "", window.partStatuId, window.choiceBigType, window.choiceSmallType);
                    }
                });
                scrollToTop("all_parts_list_wrapper");
                window.noticeTypeName = "";
                window.partStatuId = "";
                window.choiceBigType = "";
                window.choiceSmallType = "";
                window.choiceSearchPartType = "";
                window.choiceTemporaryBigType = "";
                window.choiceTemporarySmallType = "";
                window.partTemporaryStatuId = "";
                allApp_componentList(false, 1, "", "", "", "", "");
            }

            //大小类
            function partsSearchByClass() {
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
                    window.choiceBigType = window.choiceTemporaryBigType;
                    window.choiceSmallType = window.choiceTemporarySmallType;
                    hideUpSearchDiv();
                    allApp_componentList(false, 1, "", "", window.partStatuId, window.choiceBigType, window.choiceSmallType);
                });
                searchApp_getMultiCodeChild(window.bigSmallDepartmentId, "", "1");
                scrollToTop("screen_content1_wrapper");
            }

            //状态
            function partsSearchByStatus() {
                showSmallTitle(".all_parts_list_time", "1", function () {
                    //重置
                    window.partStatuId = "";
                    window.partTemporaryStatuId = "";
                    $("#screen_content1 div p").removeClass("oranger_font");
                }, function () {
                    //确定
                    window.partStatuId = window.partTemporaryStatuId;
                    allApp_componentList(false, 1, "", "", window.partStatuId, window.choiceBigType, window.choiceSmallType);
                });
                searchApp_getBaseType("2", "allparts");
                scrollToTop("screen_content1_wrapper");
            }
        },
        methods: {

        }
    }
</script>

<style lang="less" scoped>
    #all_parts_list_page .page_header_title .jszx-bar-icon-up {
        background: #fafafa;
    }

    #all_parts_list_page .home_list_tr_first_td {
        padding: 0.7em 0.7em 0.7em 0;
    }

    #all_parts_list_page .search_div {
        padding: 0.5em 1em 0 1em;
        margin: 0;
        background: #edeef1;
    }

    #all_parts_list_page #all_parts_list_inp {
        width: 65%;
        float: left;
        line-height: 2.5em;
        height: 2.5em;
    }

    #all_parts_list_page #refresh_service {
        width: 2em;
        height: 2em;
        padding: 0.4em 0.2em 0 0.8em;
        float: right;
    }

    #all_parts_list_page #service_search {
        width: 4em;
        text-align: center;
        color: #ffffff;
        margin-top: 0.7em;
        float: right;
        line-height: 2.2em;
        border-radius: 0.3em;
    }

    #all_parts_list_page .search_div {
        height: 3.2em;
    }

    #all_parts_list_page .home_list_tr_first_td span {
        margin-left: 0.5em;
    }

    #all_parts_list_page .jszx-bar-item-2 > div {
        width: 50%;
    }

    #all_parts_list_page .tab_oranger_font p,
    .tab_bloack_font p, #all_parts_list_page .jszx-bar-item-2 div p {
        height: 2.8em;
        line-height: 2.8em;
    }

    /*筛选小图标*/
    #all_parts_list_page .jszx-bar-item-2 div p img {
        width: 0.6em;
        height: 0.5em;
        padding-left: 0.5em;
    }
</style>
