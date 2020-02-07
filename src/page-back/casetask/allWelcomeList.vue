<template>
<div data-role="page" id="all_welcome_page">
    <div class="page_header">
        <img class="left_img back-button" src="/staitc/resources/images/icon_white_back.png">
        <div class="page_header_title">查看工单</div>
        <div class="all_right_img right_btn" style="height:2.5em;display: block;position: absolute;top: 0.5em;z-index: 1;margin-right: 0.9em;float: right;text-align: right">筛选</div>
    </div>
    <div class="page_content">
        <div id="all_welcome_wrapper" class="jszx-wrapper">
            <div class="jszx-scroller">
                <div id="all_welcome_html" class="html_margin">
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
export default {
    mounted() {
        window.searchPage = 2;
        if (!window.CaseWelcomePage) {
            allCaseTaskInit();
            window.CaseWelcomePage = true;
        }

        /*绛涢��*/
        $("#all_welcome_page .all_right_img").listen("quickClick", function (e) {
            if ($(".max-dialog").is(':visible') == true) {
                $(".max-dialog").remove();
            } else {
                showSmallChoice("大小类", "上报时间", function () {
                    setTimeout(function () {
                        allSearchByClass();
                    }, 500);

                }, function () {
                    setTimeout(function () {
                        allSearchByTime();
                    }, 500);
                });
            }
        });
        /*鏉╂柨娲�*/
        $("#all_welcome_page .left_img").listen("quickClick", function (e) {
            /*  if ($(".max-dialog").is(':visible') == true) {
                 $(".max-dialog").remove();
             } else { */
            //app.$router.push("../workassist/workWelcomeType.html");
            $(".max-dialog").remove();
            if (localStorage.getItem("returnNo") == "yes") {
                localStorage.removeItem("returnNo");
                allCaseTaskInit();
            } else {
                app.$router.push("../workassist/workWelcomeType.html");
            }
            /* } */
        });
        //閸掓繂顫愰崠锟�
        function initAllWelcome() {
            $("#all_welcome_wrapper")[0].style.height = window.localInnerHeight - $("#all_welcome_page .page_header").height() - $("#all_welcome_page .casewelcome_title").height() + "px";
            initScroll({
                "wrapper": "all_welcome_wrapper",
                "dir": "y",
                "bounce": false,
                "scrollBar": true,
                "pullUpLoading": function (reset) { //娑撳﹥濯�
                    if (window.searchPage > window.arrayDataLength) {
                        reset(true);
                        toast("正在加载，请稍后！");
                    } else {
                        app_allOrderList(reset, window.searchPage++, window.caseStartTime, window.caseEndTime, window.choiceThingsParts, window.choiceBigType, window.choiceSmallType)
                    }
                },
                "pullDownLoading": function (reset) { //娑撳濯�
                    window.searchPage = 2;
                    app_allOrderList(reset, 1, window.caseStartTime, window.caseEndTime, window.choiceThingsParts, window.choiceBigType, window.choiceSmallType)
                }
            });
            scrollToTop("all_welcome_wrapper");
            app_allOrderList(false, 1, window.caseStartTime, window.caseEndTime, window.choiceThingsParts, window.choiceBigType, window.choiceSmallType);
        }
        //婢堆冪毈缁拷
        function allSearchByClass() {
            showSmallTitle(".case_list_bigclass", "3", function () {
                //闁插秶鐤�
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
                //绾喖鐣�
                // 鐢ㄤ簬鍒ゆ柇杩斿洖椤甸潰
                localStorage.setItem("returnNo", "yes");
                window.choiceThingsParts = window.choiceTemporaryThingsParts;
                window.choiceBigType = window.choiceTemporaryBigType;
                window.choiceSmallType = window.choiceTemporarySmallType;
                hideUpSearchDiv();
                app_allOrderList(false, 1, window.caseStartTime, window.caseEndTime, window.choiceThingsParts, window.choiceBigType, window.choiceSmallType);
            });
            searchThree_getMultiCodeChild(window.caseTaskReportParentId, "", "1");
        }
        //閺冨爼妫垮▓鐢电摣闁拷
        function allSearchByTime() {
            titleScreenSearchHelp("price", function () {
                //                    cleanScrollSearchList();
            }, function () {
                showSmallTitle(".case_welcome_time", 1, function () {
                    //闁插秶鐤�
                    $("#screen_content1 div").removeClass("red_font");
                    window.caseStartTime = "";
                    window.caseEndTime = "";
                    $("#start_timer").val("");
                    $("#over_timer").val("");
                }, function () {
                    //绾喖鐣�
                    // 鐢ㄤ簬鍒ゆ柇杩斿洖椤甸潰
                    localStorage.setItem("returnNo", "yes");
                    window.searchPage = 2;
                    window.caseStartTime = $("#start_timer").val();
                    window.caseEndTime = $("#over_timer").val();
                    app_allOrderList(false, 1, window.caseStartTime, window.caseEndTime, window.choiceThingsParts, window.choiceBigType, window.choiceSmallType);
                });
                var html = ' <table class="inp_table" cellpadding="0" cellspacing="0">';
                html += '       <tr>';
                html += '           <td style="min-width: 5em;padding:1em;" class="gray_line_bottom">开始时间</td>';
                html += '           <td class="gray_line_bottom" style="text-align: center;">';
                html += '               <input id="start_timer" style="text-align: center;" placeholder="请输入开始时间" readonly  type="text"/>';
                html += '            </td>';
                html += '           <td class="gray_line_bottom" style="width:2em;min-width:2em;max-width:2em;padding:0em 1em 0em 0em;text-align: right;">';
                html += '               <img class="div_input_value_img" src="/staitc/resources/images/icon_gray_solid_down.png">';
                html += '           </td>';
                html += '       </tr>';
                html += '       <tr>';
                html += '           <td style="min-width: 5em;padding: 1em;" class="gray_line_bottom">结束时间</td>';
                html += '           <td class="gray_line_bottom" style="text-align: center;">';
                html += '               <input id="over_timer" style="text-align: center" readonly placeholder="请输入结束时间" style="padding:0em 1.5em 0em 0em;"  type="text"/>';
                html += '           </td>';
                html += '           <td class="gray_line_bottom" style="width:2em;min-width:2em;max-width:2em;padding:0em 1em 0em 0em;text-align: right;">';
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
                    //閻愮懓鍤禍瀣╂
                    var data = $(e.currentTarget).data("data");
                });
            });
        }
        //濞撳懐鈹栫紓鎾崇摠
        function cleanAllWelcomeList() {
            window.searchPage = 2;
            window.noticeTypeName = "";
            window.caseStartTime = "";
            window.caseEndTime = "";
            $("#all_welcome_page #case_welcome_inp").val("");
            window.choiceThingsParts = "";
            window.choiceBigType = "";
            window.choiceSmallType = "";
            //閼卞矁鍏樻禍瀣��
            window.choiceTemporaryThingsParts = "";
            //娑撳瓨妞傛径褏琚�
            window.choiceTemporaryBigType = "";
            //娑撳瓨妞傜亸蹇曡
            window.choiceTemporarySmallType = "";
            setRestTitle();
        }

        //瀵板懎濮欓崚婵嗩潗閸栵拷
        function allCaseTaskInit() {
            cleanAllWelcomeList();
            $("#all_welcome_page .casewelcome_title div").removeClass("tab_oranger_font");
            $("#all_welcome_page .casewelcome_wait").addClass("tab_oranger_font");
            $("#all_welcome_page .casewelcome_search").hide();
            $("#all_welcome_page .all_right_img").show();

            initAllWelcome();
        }
        /**
         * 缁涙盯锟藉娼禒锟�
         * @param type
         */
        function setRestTitle() {
            $("#case_welcome_bigclass_id").html("婢堆冪毈缁拷");
            $("#case_welcome_time_id").html("娑撳﹥濮ら弮鍫曟？濞堬拷");
        }
    }
}
</script>

<style lang="less" scoped>
#all_welcome_page .page_header_title .jszx-bar-icon-up {
    background: #fafafa;
}

#all_welcome_page .list_table tr:first-child td {
    padding: 1em 0em 0em 1.3em;
}

#all_welcome_page .list_table tr td {
    padding: 0.7em 0em 1em 1.3em;
}

#all_welcome_page .home_list_tr_first_td {
    padding: 0.7em;
    padding-left: 0em;
}

#all_welcome_page .red_num {
    /*margin-left: 3.3em;*/
    float: right;
    top: 1.2em;
    right: 2em;
}

#all_welcome_page .search_div {
    padding: 0.5em 1em 0em 1em;
    margin: 0em;
    background: #edeef1;
}

#all_welcome_page #case_welcome_inp {
    width: 65%;
    float: left;
    line-height: 2.5em;
    height: 2.5em;
}

#all_welcome_page #refresh_service {
    width: 2em;
    height: 2em;
    padding: 0.4em 0.2em 0em 0.8em;
    float: right;
}

#all_welcome_page #service_search {
    width: 4em;
    text-align: center;
    color: #ffffff;
    margin-top: 0.7em;
    float: right;
    line-height: 2.2em;
    border-radius: 0.3em;
}

#all_welcome_page .search_div {
    height: 3.2em;
}

#all_welcome_page .home_list_tr_first_td span {
    margin-left: 0.5em;
}

#all_welcome_page .small_img {
    height: 1.2em;
}

#all_welcome_page .jszx-bar-item-2>div {
    width: 50%;
}

#all_welcome_page .tab_oranger_font p,
.tab_bloack_font p,
#all_welcome_page .jszx-bar-item-2 div p {
    height: 2.8em;
    line-height: 2.8em;
}

/*缁涙盯锟藉鐨崶鐐垼*/
#all_welcome_page .jszx-bar-item-2 div p img {
    width: 0.6em;
    height: 0.5em;
    padding-left: 0.5em;
}

#all_welcome_page .right_btn {
    width: 4.5em;
    right: 0em;
    height: 2.5em;
}

#all_welcome_page .jszx-bar-item-2>div {
    width: 50%;
}

#all_welcome_page .jszx-bar-item-2 p,
.jszx-bar-item-2 p {
    height: 2.8em;
    line-height: 2.8em;
}
</style>
