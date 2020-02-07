<template>

    <div data-role="page" id="case_welcome_page">
        <tk-header>
            我的待办
        </tk-header>
        <div class="page_content" style="">
            <div id="case_welcome_wrapper" class="jszx-wrapper">
                <div class="jszx-scroller">
                    <div id="case_welcome_html" class="html_margin">
                    </div>
                </div>
            </div>
        </div>
    </div>

</template>

<script>
    export default {
        name: "",
        mounted() {
            var that = this;
            window.searchPage = 2;

            waitTaskInit();

            /*返回*/
            $("#case_welcome_page .left_img").listen("quickClick", function (e) {
                that.$router.back();
            });

            //初始化
            function initCaseWelcome_dai() {
                $("#case_welcome_wrapper")[0].style.height = window.localInnerHeight - $("#case_welcome_page .page_header").height() + "px";
                initScroll({
                    "wrapper": "case_welcome_wrapper",
                    "dir": "y",
                    "bounce": false,
                    "scrollBar": true,
                    "pullUpLoading": function (reset) { //上拉
                        if (window.checkNum > window.arrayDataLength) {
                            reset(true);
                            toast("没有更多的数据了");




                        } else {
                            app_workOrderListHs(reset, window.searchPage++, "1", window.caseStartTime, window.caseEndTime, window.choiceThingsParts, window.choiceBigType, window.choiceSmallType)
                        }
                    },
                    "pullDownLoading": function (reset) { //下拉
                        window.checkNum = 1;
                        window.searchPage = 2;
                        app_workOrderListHs(reset, 1, "1", window.caseStartTime, window.caseEndTime, window.choiceThingsParts, window.choiceBigType, window.choiceSmallType)
                    }
                });
                scrollToTop("case_welcome_wrapper");
                window.checkNum = 1;
                window.flag1 = false;
                app_workOrderListHs(false, 1, "1", window.caseStartTime, window.caseEndTime, window.choiceThingsParts, window.choiceBigType, window.choiceSmallType);
            }

            //清空缓存
            function cleanCaseList_dai() {
                window.searchPage = 2;
                window.noticeTypeName = "";
                window.caseStartTime = "";
                window.caseEndTime = "";
                $("#case_welcome_page #case_welcome_inp").val("");
                window.choiceThingsParts = "";
                window.choiceBigType = "";
                window.choiceSmallType = "";
                //职能事项
                window.choiceTemporaryThingsParts = "";
                //临时大类
                window.choiceTemporaryBigType = "";
                //临时小类
                window.choiceTemporarySmallType = "";
                //setRestTitle();
            }

            //待办初始化
            function waitTaskInit() {
                cleanCaseList_dai();
                //未办
                $("#case_welcome_page .casewelcome_title div").removeClass("tab_oranger_font");
                $("#case_welcome_page .casewelcome_wait").addClass("tab_oranger_font");
                $("#case_welcome_page .casewelcome_search").hide();
                $("#case_welcome_page .right_img").hide();
//            $("#case_welcome_page #case_welcome_rednum").hide();
                window.thisCaseQueryType = "1";
                initCaseWelcome_dai();
            }

            /**
             *工单列表
             * @param queryType 查询类型  1：待办 2：已办
             * @param startTime 开始时间
             * @param endTime 结束时间
             * @param eventComponent 事件部门
             * @param bigClass 大类
             * @param smallClass 小类
             */
            function app_workOrderListHs(reset, pageNum, queryType, startTime, endTime, eventComponent, bigClass, smallClass) {
                if (!reset) {
                    showLoading("", "", "", "/staitc/resources/images/loading.gif");
                }

                if (parseInt(pageNum) < 2) {
                    $("#case_welcome_html").empty();
                }
                var obj = "";
                obj += toJson("loginId", window.localStorage.loginId) + "&";
                obj += toJson("queryType", queryType) + "&";
                //     obj += toJson("startTime", startTime) + "&";
                //    obj += toJson("eventComponent", eventComponent) + "&";
                //     obj += toJson("bigClass", bigClass) + "&";
                //     obj += toJson("smallClass", smallClass) + "&";
                obj += toJson("pageSize", "20") + "&";
                obj += toJson("pageNum", pageNum) + "&";
                // obj += toJson("endTime", endTime);
                doPost("dsbOrderList.action", obj, function (data) {


                    if (!reset) {
                        hideLoading();
                    }
                    if (data.code == 0) {
                        if (reset) {
                            reset(true);
                        }
                        var array = data.datas;
                        getDataLength(data.total, 6);
                        if (data.datas.length < 20) {
                            console.log('进来了')
                            window.checkNum = 2;
                        }
                        console.log("长度：" + data.page.total);
                        if (!isNull(array) && array.length > 0) {
                            for (var i = 0; i < array.length; i++) {
                                var bigtype = "";
                                if (!isNull(array[i].eventComponent)) {
                                    if (isNull(bigtype)) {
                                        bigtype = array[i].eventComponent;
                                    } else {
                                        bigtype = bigtype + "/" + array[i].eventComponent;
                                    }
                                }
                                if (!isNull(array[i].bigClass)) {
                                    if (isNull(bigtype)) {
                                        bigtype = array[i].bigClass;
                                    } else {
                                        bigtype = bigtype + "/" + array[i].bigClass;
                                    }
                                }
                                if (!isNull(array[i].smallClass)) {
                                    if (isNull(bigtype)) {
                                        bigtype = array[i].smallClass;
                                    } else {
                                        bigtype = bigtype + "/" + array[i].smallClass;
                                    }
                                }
                                var html = '';
                                html += '<table cellspacing="0" class="list_second_table gray_line_bottom" cellpadding="0">';
                                html += '<tr><td  colspan="2" style="text-align: left;">' + ((data.page.pageNum - 1) * 20 + (i + 1)) + '、工单编号 ' + array[i].caseNo + '<span style="padding-left:0.5em;" class="small red_font">' + array[i].origin + '</span></td></tr>'
                                html += '   <tr>';

                                if (1 == queryType) {
                                    html += '       <td colspan="2" class="" style="text-align: left;">' + bigtype + '</td>';
                                    //html += '       <td class="small red_font"></td>';
                                } else {
                                    html += '       <td colspan="2" class="small" style="text-align: left;">' + bigtype + '</td>';
                                }
                                html += '   <tr>';

                                html += '       <td colspan="2">' + array[i].reportTime + '</td>';
                                html += '   </tr>';
                                html += '   <tr>';
                                if (array[i].location) {
                                    html += '       <td colspan="2" class="small gray_font">' + array[i].location + '</td>';
                                } else {
                                    html += '       <td colspan="2" class="small gray_font"></td>';
                                }

                                html += '   </tr>';
                                html += '</table>';
                                var $html = createListRow(html).appendTo("#case_welcome_html");
                                $html.data('data', array[i]);
                                $html.listen("quickClick", function (e) {
                                    var data = $(e.currentTarget).data("data");
                                    window.caseRow_id = data.rowId;
                                    //window.caseRow_id = data.caseno;

                                    window.welcomeCheckJumpType = "";
                                    if (1 == parseInt(queryType)) {
                                        window.CaseTaskDetailPage = "";

                                        that.$router.push({path: '/wiatCaseTaskDetail', query: {}});
                                        //  $.mobile.changePage("../hscasetask/wiatCaseTaskDetail.html");
                                    } else {
                                        window.CaseTaskedDetailPage = "";
                                        that.$router.push({path: '/alreadyCaseTaskedDetail', query: {}});
                                        //  $.mobile.changePage("../hscasetask/alreadyCaseTaskedDetail.html");
                                    }
                                });
                            }
                        } else {
                            if (parseInt(pageNum) < 2) {
                                noListShow("", "", "", $("#case_welcome_html"), "");
                            }
                        }
                    } else {
                        if (reset) {
                            reset(true);
                        }
                        toast(data.message);
                    }
                    window.flag1 = true;
                }, "");
            }

        }
    }
</script>

<style scoped>
    #case_welcome_page .page_header_title .jszx-bar-icon-up {
        background: #fafafa;
    }

    #case_welcome_page .list_table tr:first-child td {
        padding: 1em 0em 0em 1.3em;
    }

    #case_welcome_page .list_table tr td {
        padding: 0.7em 0em 1em 1.3em;
    }

    #case_welcome_page .home_list_tr_first_td {
        padding: 0.7em;
        padding-left: 0em;
    }

    /*#case_welcome_page .page_header .right_img {*/
    /*right: 1.5em;*/
    /*}*/

    #case_welcome_page .red_num {
        /*margin-left: 3.3em;*/
        float: right;
        top: 1.2em;
        right: 2em;
    }

    #case_welcome_page .search_div {
        padding: 0.5em 1em 0em 1em;
        margin: 0em;
        background: #edeef1;
    }

    #case_welcome_page #case_welcome_inp {
        width: 65%;
        float: left;
        line-height: 2.5em;
        height: 2.5em;
    }

    #case_welcome_page #refresh_service {
        width: 2em;
        height: 2em;
        padding: 0.4em 0.2em 0em 0.8em;
        float: right;
    }

    #case_welcome_page #service_search {
        width: 4em;
        text-align: center;
        color: #ffffff;
        margin-top: 0.7em;
        float: right;
        line-height: 2.2em;
        border-radius: 0.3em;
    }

    #case_welcome_page .search_div {
        height: 3.2em;
    }

    #case_welcome_page .home_list_tr_first_td span {
        margin-left: 0.5em;
    }

    #case_welcome_page .small_img {
        height: 1.2em;
    }

    #case_welcome_page .jszx-bar-item-2 > div {
        width: 50%;
    }

    #case_welcome_page .tab_oranger_font p,
    .tab_bloack_font p, #case_welcome_page .jszx-bar-item-2 div p {
        height: 2.8em;
        line-height: 2.8em;
    }

    /*筛选小图标*/
    #case_welcome_page .jszx-bar-item-2 div p img {
        width: 0.6em;
        height: 0.5em;
        padding-left: 0.5em;
    }

    #case_welcome_page .right_btn {
        width: 4.5em;
        right: 0em;
        height: 2.5em;
    }

    #case_welcome_page .jszx-bar-item-2 > div {
        width: 50%;
    }

    #case_welcome_page .jszx-bar-item-2 p,
    .jszx-bar-item-2 p {
        height: 2.8em;
        line-height: 2.8em;
    }
</style>
