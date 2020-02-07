<template>
    <div data-role="page" id="case_already_welcome_page">
          <div class="page_header">
        <img class="left_img back-button" src="/staitc/resources/images/icon_white_back.png">
        <div class="page_header_title">我的已办</div>
        <!-- <div class="right_img right_btn" style="height:2.5em">筛选</div> -->
    </div>
    <div class="page_content" style="">
      <!--   <div class="jszx-bar-icon-up jszx-bar-item-2 casewelcome_title gray_border">
            <div class="casewelcome_wait">
                <p>我的待办</p>
            </div>
            <div class="casewelcome_already">
                <p>我的已办</p>
            </div>
        </div> -->
        <!--<div class="jszx-bar-icon-up jszx-bar-item-2 casewelcome_search gray_border">-->
        <!--<div class="case_welcome_bigclass">-->
        <!--<p><span id="case_welcome_bigclass_id">大小类</span><img-->
        <!--src="/staitc/resources/images/icon_gray_solid_down.png"/>-->
        <!--</p>-->
        <!--</div>-->
        <!--<div class="case_welcome_time">-->
        <!--<p><span id="case_welcome_time_id">上报时间段</span><img-->
        <!--src="/staitc/resources/images/icon_gray_solid_down.png"/></p>-->
        <!--</div>-->
        <!--</div>-->
        <div id="case_already_welcome_wrapper" class="jszx-wrapper">
            <div class="jszx-scroller">
                <div id="case_already_welcome_html" class="html_margin">
                </div>
            </div>
        </div>
    </div>
    </div>
</template>

<script>
    export default {
        mounted(){
             window.searchPage = 2;
            alreadyCaseTaskInit();


            /*筛选*/
            $("#case_already_welcome_page .right_img").listen("quickClick", function (e) {
                if ($(".max-dialog").is(':visible') == true) {
                    $(".max-dialog").remove();
                } else {
                    showSmallChoice("大小类", "上报时间", function () {
                        setTimeout(function () {
                            caseSearchByClass();
                        }, 500);

                    }, function () {
                        setTimeout(function () {
                            caseSearchByTime();
                        }, 500);
                    });
                }
            });


            /*返回*/
            $("#case_already_welcome_page .left_img").listen("quickClick", function (e) {
                if ($(".max-dialog").is(':visible') == true) {
                    $(".max-dialog").remove();
                } else {
                    app.$router.push("../load/welcome.html");
                }
            });

            function initCaseWelcomeAlready() {
            $("#case_already_welcome_wrapper")[0].style.height = window.localInnerHeight - $("#case_already_welcome_page .page_header").height() + "px";
            initScroll({
                "wrapper": "case_already_welcome_wrapper",
                "dir": "y",
                "bounce": false,
                "scrollBar": true,
                "pullUpLoading": function (reset) { //上拉
                    if (window.checkNum > window.arrayDataLength) {
                        reset(true);
                        toast("没有更多的数据了");
                    } else {
                        app_workOrderListHs_already(reset, window.searchPage++, "2", window.caseStartTime, window.caseEndTime, window.choiceThingsParts, window.choiceBigType, window.choiceSmallType)
                    }
                },
                "pullDownLoading": function (reset) { //下拉
                	window.checkNum = 1;
                    window.searchPage = 2;
                    app_workOrderListHs_already(reset, 1, "2", window.caseStartTime, window.caseEndTime, window.choiceThingsParts, window.choiceBigType, window.choiceSmallType)
                }
            });
            scrollToTop("case_already_welcome_wrapper");
            window.checkNum = 1;
            window.flag1 = false;
            app_workOrderListHs_already(false, 1, "2", window.caseStartTime, window.caseEndTime, window.choiceThingsParts, window.choiceBigType, window.choiceSmallType);
        }
        //大小类
        function caseSearchByClass() {
            showSmallTitle(".case_list_bigclass", "3", function () {
                //重置
                window.choiceBigType = "";
                window.choiceSmallType = "";
                window.choiceThingsParts = "";
                window.choiceTemporaryThingsParts = "";
                window.choiceTemporaryBigType = "";
                window.choiceTemporarySmallType = "";
                $("#screen_content1 div p").removeClass("oranger_font");
                $("#screen_content2 div p").removeClass("oranger_font");
                $("#screen_content3 div p").removeClass("oranger_font");
            }, function () {
                //确定
                window.choiceThingsParts = window.choiceTemporaryThingsParts;
                window.choiceBigType = window.choiceTemporaryBigType;
                window.choiceSmallType = window.choiceTemporarySmallType;
                hideUpSearchDiv();
                app_workOrderListHs_already(false, 1, "2", window.caseStartTime, window.caseEndTime, window.choiceThingsParts, window.choiceBigType, window.choiceSmallType);
            });
            searchThree_getMultiCodeChild(window.caseTaskReportParentId, "", "1");
        }
        //时间段筛选
        function caseSearchByTime() {
            titleScreenSearchHelp("price", function () {
//                    cleanScrollSearchList();
            }, function () {
                showSmallTitle(".case_welcome_time", 1, function () {
                    //重置
                    $("#screen_content1 div").removeClass("red_font");
                    window.caseStartTime = "";
                    window.caseEndTime = "";
                    $("#start_timer").val("");
                    $("#over_timer").val("");
                }, function () {
                    //确定
                    window.searchPage = 2;
                    window.caseStartTime = $("#start_timer").val();
                    window.caseEndTime = $("#over_timer").val();
                    app_workOrderListHs_already(false, 1, "2", window.caseStartTime, window.caseEndTime, window.choiceThingsParts, window.choiceBigType, window.choiceSmallType);
                });
                var html = ' <table class="inp_table" cellpadding="0" cellspacing="0">';
                html += '       <tr>';
                html += '           <td style="min-width: 5em;padding:1em;" class="gray_line_bottom">开始时间</td>';
                html += '           <td class="gray_line_bottom" style="text-align: center;">';
                html += '               <input id="start_timer" style="text-align: center;" placeholder="请选择开始时间" readonly  type="text"/>';
                html += '            </td>';
                html += '           <td class="gray_line_bottom" style="width:2em;min-width:2em;max-width:2em;padding:0em 1em 0em 0em;">';
                html += '               <img class="div_input_value_img" src="/staitc/resources/images/icon_gray_solid_down.png">';
                html += '           </td>';
                html += '       </tr>';
                html += '       <tr>';
                html += '           <td style="min-width: 5em;padding: 1em;" class="gray_line_bottom">结束时间</td>';
                html += '           <td class="gray_line_bottom" style="text-align: center;">';
                html += '               <input id="over_timer" style="text-align: center" readonly placeholder="请选择结束时间" style="padding:0em 1.5em 0em 0em;"  type="text"/>';
                html += '           </td>';
                html += '           <td class="gray_line_bottom" style="width:2em;min-width:2em;max-width:2em;padding:0em 1em 0em 0em;">';
                html += '               <img class="div_input_value_img" src="/staitc/resources/images/icon_gray_solid_down.png">';
                html += '           </td>';
                html += '       </tr>';
                html += '   </table>';
                var $row = createListRow(html).appendTo($("#screen_content1"));
                chooseDate("start_timer", "date");
                chooseDate("over_timer", "date");
                $(".alert_edit div").css("margin", "0em");
                $(".timer_btn").css("margin-top", "2em");
                $(".timer_btn").css("margin-left", "13%");
                if (!isNull(window.caseStartTime)) {
                    $("#start_timer").val(window.caseStartTime);
                }
                if (!isNull(window.caseEndTime)) {
                    $("#over_timer").val(window.caseEndTime);
                }
                $row.find(".timer_btn").listen("quickClick", function (e) {
                    //点击事件
                    var data = $(e.currentTarget).data("data");
                });
            });
        }
        //清空缓存
        function cleanCaseWelcomeList() {
            window.searchPage = 2;
            window.noticeTypeName = "";
            window.caseStartTime = "";
            window.caseEndTime = "";
            $("#case_already_welcome_page #case_welcome_inp").val("");
            window.choiceThingsParts = "";
            window.choiceBigType = "";
            window.choiceSmallType = "";
            //职能事项
            window.choiceTemporaryThingsParts = "";
            //临时大类
            window.choiceTemporaryBigType = "";
            //临时小类
            window.choiceTemporarySmallType = "";
            setRestTitle();
        }

        //待办初始化
        function waitCaseTaskInit() {
            cleanCaseWelcomeList();
            //未办
            $("#case_already_welcome_page .casewelcome_title div").removeClass("tab_oranger_font");
            $("#case_already_welcome_page .casewelcome_wait").addClass("tab_oranger_font");
            $("#case_already_welcome_page .casewelcome_search").hide();
            $("#case_already_welcome_page .right_img").hide();
//            $("#case_already_welcome_page #case_welcome_rednum").hide();
            window.thisCaseQueryType = "1";
            initCaseWelcomeAlready();
        }

        //已办初始化
        function alreadyCaseTaskInit() {
            cleanCaseWelcomeList();
            $("#case_already_welcome_page .right_img").show();
            $("#case_already_welcome_page .casewelcome_title div").removeClass("tab_oranger_font");
            $("#case_already_welcome_page .casewelcome_already").addClass("tab_oranger_font");
            //已办
//            appWorkOrder_todoTotalByType();
            $("#case_already_welcome_page .casewelcome_search").show();
//            $("#case_already_welcome_page #case_welcome_rednum").show();
            window.thisCaseQueryType = "2";
            initCaseWelcomeAlready();
        }

        /**
         * 筛选条件
         * @param type
         */
        function setRestTitle() {
            $("#case_welcome_bigclass_id").html("大小类");
            $("#case_welcome_time_id").html("上报时间段");
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
        function app_workOrderListHs_already(reset, pageNum, queryType, startTime, endTime, eventComponent, bigClass, smallClass) {
            if (!reset) {
                //showLoading("正在搜索...");
            }
            if (parseInt(pageNum) < 2) {
                $("#case_already_welcome_html").empty();
            }
            var obj = "";
            obj += toJson("userId", window.localStorage.userId) + "&";
            obj += toJson("queryType", queryType) + "&";
       //     obj += toJson("startTime", startTime) + "&";
        //    obj += toJson("eventComponent", eventComponent) + "&";
       //     obj += toJson("bigClass", bigClass) + "&";
      //     obj += toJson("smallClass", smallClass) + "&";
            obj += toJson("pageSize", "20") + "&";
            obj += toJson("pageNum", pageNum) + "&";
           // obj += toJson("endTime", endTime);
            doPost("workOrderListHs.action", obj, function (data) {

            	if (!reset) {
                    hideLoading();
                }
                if (data.code == 0) {
                    if (reset) {
                        reset(true);
                    }
                    var array = data.datas;
                    getDataLength(data.total, 6);
                    if(data.datas.length < 20){
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
                            html += '<tr><td colspan="2" style="text-align: left;">'+ ((data.page.pageNum - 1)*20 +(i+1))+'、工单编号 ' + array[i].caseno + '<span style="padding-left:0.5em;" class="small red_font">' + array[i].status + '</span></td></tr>'
                            html += '   <tr>';

                            if (1 == queryType) {
                            	html += '       <td colspan="2" class="" style="text-align: left;">' + bigtype + '<span style="padding-left:0.5em;" class="small red_font">' + array[i].status + '</span></td>';
                                //html += '       <td class="small red_font"></td>';
                            } else {
                                html += '       <td colspan="2" class="small" style="text-align: left;">' + bigtype + '</td>';
                            }
                            html += '   <tr>';
                            html += '       <td class="" colspan="2">上报时间' + array[i].reportTime + '</td>';
                            html += '   </tr>';
                            html += '   <tr>';
                            if (array[i].location) {
                            	html += '       <td colspan="2" class="small gray_font">' + array[i].location + '</td>';
                            } else {
                            	html += '       <td colspan="2" class="small gray_font"></td>';
                            }

                            html += '   </tr>';
                            html += '</table>';
                            var $html = createListRow(html).appendTo("#case_already_welcome_html");
                            $html.data('data', array[i]);
                            $html.listen("quickClick", function (e) {
                                var data = $(e.currentTarget).data("data");
                                window.caseRow_id = data.row_id;
                                //window.caseRow_id = data.caseno;

                                window.welcomeCheckJumpType = "";
                                if (1 == parseInt(queryType)) {
                                    window.CaseTaskDetailPage = "";
                                    app.$router.push("../casetask/caseTaskDetail.html");
                                } else {
                                    window.CaseTaskedDetailPage = "";
                                    app.$router.push("../casetask/caseTaskedDetail.html");
                                }
                            });
                        }
                    } else {
                        if (parseInt(pageNum) < 2) {
                            noListShow("", "", "", $("#case_already_welcome_html"), "");
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
#case_already_welcome_page .page_header_title .jszx-bar-icon-up {
            background: #fafafa;
        }

        #case_already_welcome_page .list_table tr:first-child td {
            padding: 1em 0em 0em 1.3em;
        }

        #case_already_welcome_page .list_table tr td {
            padding: 0.7em 0em 1em 1.3em;
        }

        #case_already_welcome_page .home_list_tr_first_td {
            padding: 0.7em;
            padding-left: 0em;
        }

        /*#case_already_welcome_page .page_header .right_img {*/
        /*right: 1.5em;*/
        /*}*/

        #case_already_welcome_page .red_num {
            /*margin-left: 3.3em;*/
            float: right;
            top: 1.2em;
            right: 2em;
        }

        #case_already_welcome_page .search_div {
            padding: 0.5em 1em 0em 1em;
            margin: 0em;
            background: #edeef1;
        }

        #case_already_welcome_page #case_welcome_inp {
            width: 65%;
            float: left;
            line-height: 2.5em;
            height: 2.5em;
        }

        #case_already_welcome_page #refresh_service {
            width: 2em;
            height: 2em;
            padding: 0.4em 0.2em 0em 0.8em;
            float: right;
        }

        #case_already_welcome_page #service_search {
            width: 4em;
            text-align: center;
            color: #ffffff;
            margin-top: 0.7em;
            float: right;
            line-height: 2.2em;
            border-radius: 0.3em;
        }

        #case_already_welcome_page .search_div {
            height: 3.2em;
        }

        #case_already_welcome_page .home_list_tr_first_td span {
            margin-left: 0.5em;
        }

        /*#case_already_welcome_page table tr:first-child td:first-child {*/
        /*padding: 0.7em 0em 0.7em 0.5em;*/
        /*line-height: 1.3em;*/
        /*text-align: left;*/
        /*}*/

        /*#case_already_welcome_page table tr:last-child td {*/
        /*padding:0em 0em 0.6em 0.5em;*/
        /*line-height: 1.3em;*/
        /*}*/

        /*#case_already_welcome_page table tr:first-child td:last-child {*/
        /*text-align: right;*/
        /*vertical-align: middle;*/
        /*max-width: 6em;*/
        /*min-width: 6em;*/
        /*}*/

        /*#case_already_welcome_page table:last-child tr td:last-child {*/
        /*padding: 0.3em 1em 0.7em 0.6em;*/
        /*text-align: left;*/
        /*}*/
        #case_already_welcome_page .small_img {
            height: 1.2em;
        }

        #case_already_welcome_page .jszx-bar-item-2 > div {
            width: 50%;
        }

        #case_already_welcome_page .tab_oranger_font p,
        .tab_bloack_font p, #case_already_welcome_page .jszx-bar-item-2 div p {
            height: 2.8em;
            line-height: 2.8em;
        }

        /*筛选小图标*/
        #case_already_welcome_page .jszx-bar-item-2 div p img {
            width: 0.6em;
            height: 0.5em;
            padding-left: 0.5em;
        }

        #case_already_welcome_page .right_btn {
            width: 4.5em;
            right: 0em;
            height: 2.5em;
        }

        #case_already_welcome_page .jszx-bar-item-2 > div {
            width: 50%;
        }

        #case_already_welcome_page .jszx-bar-item-2 p,
        .jszx-bar-item-2 p {
            height: 2.8em;
            line-height: 2.8em;
        }
</style>
