<template>
    <div data-role="page" id="case_list_page">
        <div class="page_header">
        <img class="left_img back-button " src="/staitc/resources/images/icon_white_back.png">
        <div class="page_header_title">问题列表</div>
        <img class="right_img" src="/staitc/resources/images/icon_gray_add.png">
    </div>
    <div class="page_content" style="">
        <div class="jszx-bar-icon-up jszx-bar-item-3 gray_border">
            <div class="case_list_bigclass">
                <p><span id="case_list_bigclass_id">大小类</span><img
                        src="/staitc/resources/images/icon_gray_solid_down.png"/>
                </p>
            </div>
            <div class="case_list_time">
                <p><span id="case_list_time_id">上报时间</span><img
                        src="/staitc/resources/images/icon_gray_solid_down.png"/></p>
            </div>
            <div class="case_list_status">
                <p><span id="case_list_status_id">状态</span><img
                        src="/staitc/resources/images/icon_gray_solid_down.png"/></p>
            </div>
        </div>
        <div id="case_list_wrapper" class="jszx-wrapper">
            <div class="jszx-scroller">
                <div id="case_list_html" class="html_margin white_background">
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
             inintCaseList();
            setCaseListRestTitle();
            /*大小类*/
            $("#case_list_page .case_list_bigclass").listen("quickClick", function (e) {
                titleScreenSearchHelp("case_list_bigclass", function () {
//                    cleanScrollSearchList();
                }, function () {
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
                        appWorkOrder_myWorkOrder(false, 1);
//                        allApp_componentList(false, 1, "", "", window.partStatuId, window.choiceBigType, window.choiceSmallType);
                    });
                });
                searchThree_getMultiCodeChild(window.caseTaskReportParentId, "", "1");
            });
            /*部件状态*/
            $("#case_list_page .case_list_status").listen("quickClick", function (e) {
                titleScreenSearchHelp("case_list_status", function () {
//                    cleanScrollSearchList();
                }, function () {
                    showSmallTitle(".case_list_status", "1", function () {
                        //重置
                        window.caseStatus = "";
                        window.caseTemporaryStatus = "";
                        $("#screen_content1 div p").removeClass("oranger_font");
                    }, function () {
                        //确定
                        window.caseStatus = window.caseTemporaryStatus;
                        appWorkOrder_myWorkOrder(false, 1);
//                        allApp_componentList(false, 1, "", "", window.partStatuId, window.choiceBigType, window.choiceSmallType);
                    });
//                    searchApp_getBaseType("2", "allparts");
                    scrollToTop("screen_content1_wrapper");
                    for (var i = 0; i < window.caseSearchStatusArrayList.length; i++) {
                        var sexinfo = '';
                        if (window.caseStatus == window.caseSearchStatusArrayList[i].id) {
                            sexinfo += '<p class="gray_line_bottom oranger_font"  style="text-align:center;padding:0.5em 0.5em 0.5em 2em;">' + window.caseSearchStatusArrayList[i].name + '</p>';
                        } else {
                            sexinfo += '<p class="gray_line_bottom"  style="text-align:center;padding:0.5em 0.5em 0.5em 2em;">' + window.caseSearchStatusArrayList[i].name + '</p>';
                        }
                        var $sex_row = createListRow(sexinfo).appendTo("#screen_content1");
                        $sex_row.data('data', window.visitSourcesList[i]);
                        $sex_row.listen("quickClick", function (e) {
                            var data = $(e.currentTarget).data("data");
                            window.caseTemporaryStatus = data.id;
                            $(e.currentTarget).siblings().find("p").removeClass("oranger_font");
                            $(e.currentTarget).find("p").addClass("oranger_font");
                        })
                    }
                });
            });
            /*上报时间段*/
            $("#case_list_page .case_list_time").listen("quickClick", function (e) {
                titleScreenSearchHelp("case_list_time", function () {
//                    cleanScrollSearchList();
                }, function () {
                    showSmallTitle(".case_list_time", 1, function () {
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
                        appWorkOrder_myWorkOrder(false, 1);
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
            });
            /*上报*/
            $("#case_list_page .right_img").listen("quickClick", function (e) {
                app.$router.push("../case/caseEdit.html");
            });
            /*返回*/
            $("#case_list_page .left_img").listen("quickClick", function (e) {
                if ($(".max-dialog").is(':visible') == true) {
                    $(".max-dialog").remove();
                } else {
                    app.$router.push("../load/welcome.html");
                }
            });
            function inintCaseList() {
            $("#case_list_wrapper")[0].style.height = window.localInnerHeight - $("#case_list_page .page_header").height() - $("#case_list_page .jszx-bar-icon-up").height() + "px";
            initScroll({
                "wrapper": "case_list_wrapper",
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
            scrollToTop("case_list_wrapper");
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
            appWorkOrder_myWorkOrder(false, 1);

        }
        /**
         * 筛选条件
         */
        function setCaseListRestTitle() {
            $("#case_list_bigclass_id").html("大小类");
            $("#case_list_time_id").html("上报时间");
            $("#case_list_status_id").html("状态");
        }
        }
    }
</script>

<style lang="less" scoped>
 #case_list_page .page_header_title .jszx-bar-icon-up {
            background: #fafafa;
        }

        #case_list_page .home_list_tr_first_td {
            padding: 0.7em;
            padding-left: 0em;
        }

        #case_list_page .right_btn {
            width: 3.5em;
            height: 1.5em;
            color: #ffffff;
        }

        #case_list_page .right_btn .btn_div {
            color: #ffffff;
            border: 1px solid #ffffff;
            height: 1.7em;
            line-height: 1.7em;
            top: -0.5em;
            background: orange;
            text-align: center;
        }

        #case_list_page .jszx-bar-item-3 > div {
            width: 33.3%;
        }

        #case_list_page .tab_oranger_font p,
        .tab_bloack_font p, #case_list_page .jszx-bar-item-3 div p {
            height: 2.8em;
            line-height: 2.8em;
        }

        /*筛选小图标*/
        #case_list_page .jszx-bar-item-3 div p img {
            width: 0.6em;
            height: 0.5em;
            padding-left: 0.5em;
        }

        #case_list_page .home_list_tr_first_td span {
            margin-left: 0.5em;
        }

        #case_list_page .right_img {
            width: 1.5em;
            height: 1.5em;
        }
</style>