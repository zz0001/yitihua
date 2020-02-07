<template>
    <div data-role="page" id="leader_task_steps_page">

        <div class="page_header">
            <img class="left_img back-button" src="/staitc/resources/images/icon_white_back.png">
            <div class="page_header_title">处理进度</div>
            <!--<div class="small right_img right_btn">page_header_title-->
            <!--<div class="smaller btn_div">查看附件</div>-->
            <!--&lt;!&ndash;<div id="case_welcome_rednum" class="red_num" style="">11</div>&ndash;&gt;-->
            <!--</div>-->
        </div>
        <div class="page_content" style="background: #ffffff;">
            <div id="leader_task_steps_wrapper" class="jszx-wrapper">
                <div class="jszx-scroller">
                    <div id="leader_task_steps_html" class="html_margin white_background">

                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "leaderTaskSteps",
        mounted(){
            window.searchPage = 2;
            $("#leader_task_steps_page").live("pageshow", function () {
                if (!window.CaseTaskStpsPage) {
                    initCaseTaskSteps();
                    leaderOrder_viewHistory();
                    window.CaseTaskStpsPage = true;
                }

                /*返回*/
                $("#leader_task_steps_page .back-button").listen("quickClick", function (e) {
                    window.history.back();
                });
            });
            function initCaseTaskSteps() {
                $("#leader_task_steps_wrapper")[0].style.height = window.localInnerHeight - $("#leader_task_steps_page .page_header").height() + "px";
                initScroll({
                    "wrapper": "leader_task_steps_wrapper",
                    "dir": "y",
                    "bounce": false,
                    "scrollBar": true
                });
                scrollToTop("leader_task_steps_wrapper");
                window.lookType = "";
                $("#leader_task_steps_page table tr td").addClass("gray_line_bottom");
                $("#leader_task_steps_page table tr td input").val("");
                $("#leader_task_steps_page table tr td textarea").val("");
            }
            /**
             * 工单处理步骤
             * @param row_id
             */
            function leaderOrder_viewHistory() {
                $("#leader_task_steps_html").empty();
                var obj = "";
                obj += toJson("caseNo", window.caseRow_id) + "&";
                // obj += toJson("taskId", window.caseTaskOneTaskId);
                doPost("CaseSteps.action", obj, function (data) {
                    if (data.code == 0) {
                        var array = data.datas;
                        if (!isNull(array) && array.length > 0) {
                            for (var i = 0; i < array.length; i++) {
                                var cost = "";
                                if (!isNull(array[i].cost)) {
                                    cost = array[i].cost;
                                }
                                var html = '';
                                html += '<div>';
                                var operationName = "";
                                if (!isNull(array[i].operationName)) {
                                    operationName = "（" + array[i].operationName + "）";
                                }
                                html += '    <div class="oranger_font bigger">' + [i + 1] + "、" + array[i].taskName + operationName;
                                if (1 == parseInt(array[i].attachment)) {
                                    html += '       <div class="smaller" style="border:1px solid #4ba4e6;color:#4ba4e6;float:right;height:1em;text-align: center;width:3em;line-height:1em;font-size:0.4em;margin-right:1em;margin-top;-0.2em;">图片</div>';
                                }
                                html += '    </div>';
                                //html += '    <p class="normal">开始时间：' + array[i].startTime + '</p>';
                                html += '    <p class="normal">' + array[i].startTime + '，用时：' + cost + '</p>';
                                html += '    <p class="normal">处理部门:' + array[i].deptName;
                                if (!isNull(array[i].dealPerson)) {
                                    html += '     处理人：' + array[i].dealPerson  ;
                                }
                                html += '</p>';
                                if (!isNull(array[i].comment)){
                                    html += '    <p class="normal">处理意见：' + array[i].comment + '</p>';
                                }

                                //html += '    <p class="normal">状态：' + array[i].status + '，用时：' + cost + '</p>';
                                html += '</div>';
                                var $html = createListRow(html).appendTo("#leader_task_steps_html");
                                $html.data('data', array[i]);
                                $html.listen("quickClick", function (e) {
                                    //点击事件
                                    var data = $(e.currentTarget).data("data");
                                    console.log("type:" + data.opValue);
                                    if (!isNull(data.taskId) && 1 == parseInt(data.attachment)) {
                                        window.caseTaskIdPic = data.taskId;
                                        window.lookType = "casestep";
                                        $.mobile.changePage("../casetask/photoLook.html");
                                    }
                                });
                            }
                        } else {
                            noListShow("", "", "", $("#leader_task_steps_html"), "");
                        }
                    } else {
                        toast(data.message);
                    }
                }, "");
            }
        }
    }

</script>

<style scoped>
    #leader_task_steps_page #leader_task_steps_html .list_row div:first-child {
        background: #f7f7f7;
        padding: 1em;
        padding: 0.5em 0.1em 0.5em 0.3em;
        border-radius: 0.5em;
    }

    #leader_task_steps_page #leader_task_steps_html .list_row {
        margin: 1em;
    }

    #leader_task_steps_page #leader_task_steps_html div p {
        padding: 0.3em;
        line-height: 1.3em;
    }



    #leader_task_steps_page .right_btn .btn_div {
        color: #ffffff;
        border: 1px solid #ffffff;
        height: 1.7em;
        line-height: 1.7em;
        top: -0.5em;
        background: orange;
        text-align: center;
    }
</style>