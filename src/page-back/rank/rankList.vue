<template>
    <div data-role="page" id="rank_list_page">
        <div class="page_header">
            <img class="left_img back-button " src="/staitc/resources/images/icon_white_back.png">
            <div class="page_header_title">排名考核</div>
            <div class="right_img right_btn">全部</div>
        </div>

        <div class="page_content" style="">
            <div id="rank_list_wrapper" class="jszx-wrapper">
                <div class="jszx-scroller">
                    <div id="rank_list_html" class="html_margin white_background">
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script type="text/ecmascript-6">
    export default {
        name: "rankList",
        data() {
            return {}
        },
        created() {

        },
        mounted() {
            var that = this;
            window.searchPage = 2;
            // $("#rank_list_page").live("pageshow", function () {
                inintRankList();
                /*大小类*/
                /*分类*/
                $("#rank_list_page .right_img").listen("quickClick", function (e) {
                    window.localStorage.rankType = "";
                    $("#rank_list_html").empty();
                    ranklist_workOrder(false, 1);
                });
                /*返回*/
                $("#rank_list_page .left_img").listen("quickClick", function (e) {
                    if ($(".max-dialog").is(':visible') == true) {
                        $(".max-dialog").remove();
                    } else {
                        // $.mobile.changePage("../rank/rankListType.html");
                        that.$router.back(-1);
                    }
                });
                /*筛选*/
                $("#rank_list_page .right_fenlei").listen("quickClick", function (e) {
                    $("#rankbg").show();
                    $("#rankselect").show();
                    $("#rankselect").addClass("kdts-botwrap-open2");
                });
                $("#rank_list_page #rankbg").listen("quickClick", function (e) {
                    $("#rankbg").hide();
                    $("#rankselect").hide();
                    $("#rankselect").removeClass("kdts-botwrap-open2");
                });
                $("#rank_list_page #ranklisttype").on("click", "li", function (e) {
                    $("#rank_list_html").empty();
                    var obj = "";
                    obj += toJson("userid", $.trim(window.localStorage.userId)) + "&";
                    obj += toJson("pageSize", "20") + "&";
                    obj += toJson("pageNum", 1) + "&";
                    obj += toJson("type", window.localStorage.rankType);
                    doPost("rankList.action", obj, function (data) {
                        $("#rank_list_html").empty();
                        if (data.totalsize > 0) {
                            var array = data.datas;
                            getDataLength(data.totalsize);
                            if (!isNull(array) && array.length > 0) {
                                var html = '';
                                for (var i = 0; i < array.length; i++) {
                                    var status = array[i].status;
                                    var bigtype = "";
                                    var html = '';
                                    html += '<table cellspacing="0" class="list_second_table gray_line_bottom" cellpadding="0">';
                                    html += '   <tr>';
                                    html += '       <td colspan="3" style="text-align:left;padding-left:2em;">';
                                    if (array[i].readstatus == "") {
                                        html += '<div class="red_round_rank" id="red_round_rank"></div>';
                                    }
                                    html += array[i].checktask + '</td>';
                                    html += '   </tr>';
                                    html += '   <tr>';
                                    html += '       <td style="width:30%;text-align:left;"> ' + array[i].releaseparty + '</td>';
                                    html += '       <td >' + array[i].releasetime + '</td>';
                                    html += '   </tr>';
                                    html += '</table>';
                                    var $html = createListRow(html).appendTo("#rank_list_html");
                                    $html.data('data', array[i]);
                                    $html.listen("quickClick", function (e) {
                                        var data = $(e.currentTarget).data("data");
                                        window.caseRow_id = data.id;
                                        // $.mobile.changePage("../rank/rankDetail.html");
                                        that.$router.push('/rankDetail');
                                    });
                                }
                            } else {
                                noListShow("", "", "", $("#rank_list_html"), "");
                            }
                        } else {
                            toast(data.message);
                        }
                    }, "");
                });
            // });

            /**
             * 初始化
             */
            function inintRankList() {
                $("#rank_list_wrapper")[0].style.height = window.localInnerHeight - $("#rank_list_page .page_header").height() - $("#rank_list_page .jszx-bar-icon-up").height() + "px";
                initScroll({
                    "wrapper": "rank_list_wrapper",
                    "dir": "y",
                    "bounce": false,
                    "scrollBar": true,
                    "pullUpLoading": function (reset) { //上拉
                        if (window.searchPage > window.arrayDataLength) {
                            reset(true);
                            toast("没有更多的数据了");
                        } else {
                            appWorkOrder_myWorkOrder(reset, window.searchPage++);
                        }
                    },
                    "pullDownLoading": function (reset) { //下拉
                        window.searchPage = 2;
                        appWorkOrder_myWorkOrder(reset, 1)
                    }
                });
                scrollToTop("rank_list_wrapper");
                window.noticeTypeName = "";
                window.caseStatus = "";
                window.caseTemporaryStatus = "";
                //开始时间
                window.caseStartTime = "";
                //结束时间
                window.caseEndTime = "";
                //职能事项
                window.choiceThingsParts = "";
                //大类
                window.choiceBigType = "";
                //小类
                window.choiceSmallType = "";
                //临时职能事项
                window.choiceTemporaryThingsParts = "";
                //临时大类
                window.choiceTemporaryBigType = "";
                //临时小类
                window.choiceTemporarySmallType = "";
                ranklist_workOrder(false, 1);
            }

            //接口调用以及dom构建
            function ranklist_workOrder(reset, pageNum) {
                if (!reset) {
                    //showLoading("正在搜索...");
                }
                if (parseInt(pageNum) < 2) {
                    $("#rank_list_html").empty();
                }
                var obj = "";
                obj += toJson("userid", $.trim(window.localStorage.userId)) + "&";
                obj += toJson("pageSize", "20") + "&";
                obj += toJson("pageNum", 1) + "&";
                obj += toJson("type", window.localStorage.rankType);
                doPost("rankList.action", obj, function (data) {
                    if (!reset) {
                        hideLoading();
                    }
                    if (data.totalsize > 0) {
                        if (reset) {
                            reset(true);
                        }
                        var array = data.datas;
                        getDataLength(data.totalsize);
                        if (!isNull(array) && array.length > 0) {
                            var html = '';
                            for (var i = 0; i < array.length; i++) {
                                var status = array[i].status;
                                var bigtype = "";

                                var html = '';
                                html += '<table cellspacing="0" class="list_second_table gray_line_bottom" cellpadding="0">';

                                html += '   <tr>';
                                html += '       <td colspan="3" style="text-align:left;padding-left:2em;">';
                                if (array[i].readstatus == "") {
                                    html += '<div class="red_round_rank" style="width: 0.5em;height: 0.5em;background: red;border-radius: 0.5em;position: relative;float: left;border: 2px solid #ffffff;"></div>';
                                }
                                html += array[i].checktask + '</td>';
                                html += '   </tr>';
                                html += '   <tr>';
                                html += '       <td style="width:30%;text-align:left;"> ' + array[i].releaseparty + '</td>';
                                html += '       <td >' + array[i].releasetime + '</td>';
                                html += '   </tr>';
                                html += '</table>';
                                var $html = createListRow(html).appendTo("#rank_list_html");
                                $html.data('data', array[i]);
                                $html.listen("quickClick", function (e) {
                                    var data = $(e.currentTarget).data("data");
                                    window.caseRow_id = data.id;
                                    // $.mobile.changePage("../rank/rankDetail.html");
                                    that.$router.push('rankDetail');
                                });
                            }
                        } else {
                            noListShow("", "", "", $("#rank_list_html"), "");
                        }
                    } else {
                        toast(data.message);
                    }
                }, "");
            }
        },
        methods: {}
    }
</script>

<style lang="less" scoped>
    #rank_list_page .page_header_title .jszx-bar-icon-up {
        background: #fafafa;
    }

    #rank_list_page .home_list_tr_first_td {
        padding: 0.7em 0.7em 0.7em 0em;
    }

    #rank_list_page .right_btn {
        width: 3.5em;
        height: 1.5em;
        color: #ffffff;
    }

    #rank_list_page .right_btn .btn_div {
        color: #ffffff;
        border: 1px solid #ffffff;
        height: 1.7em;
        line-height: 1.7em;
        top: -0.5em;
        background: orange;
        text-align: center;
    }

    #rank_list_page .jszx-bar-item-3 > div {
        width: 33.3%;
    }

    #rank_list_page .tab_oranger_font p,
    .tab_bloack_font p, #rank_list_page .jszx-bar-item-3 div p {
        height: 2.8em;
        line-height: 2.8em;
    }

    /*筛选小图标*/
    #rank_list_page .jszx-bar-item-3 div p img {
        width: 0.6em;
        height: 0.5em;
        padding-left: 0.5em;
    }

    #rank_list_page .home_list_tr_first_td span {
        margin-left: 0.5em;
    }

    #rank_list_page .right_img {
        width: 4.5em;
        height: 4.5em;
    }

    #red_round_rank {
        width: 0.5em;
        height: 0.5em;
        background: red;
        border-radius: 0.5em;
        position: relative;
        float: left;
        border: 2px solid #ffffff;
    }

    .right_fenlei {
        position: absolute;
        top: 0.5em;
        right: 1em;
        z-index: 1;
        margin-top: 0.4em;
        text-align: right;
        width: 2.5em;
        height: 2.5em;
        display: block;
        color: #FFF;
    }

    .KpiTcbackG2 {
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        z-index: 20;
        background: rgba(0, 0, 0, 0.5);
    }

    .KpiFooterContent2 {
        background: #fff;
        position: absolute;
        bottom: -100%;
        left: 0;
        right: 0;
        z-index: 25;
        padding: 0 5% 5% 5%;
        -webkit-transition: all 1s ease;
        transition: all 1s ease;
    }

    .kdts-botwrap-open2 {
        bottom: 0;
        -webkit-transition: all 1s ease;
        transition: all 1s ease;
    }
</style>
