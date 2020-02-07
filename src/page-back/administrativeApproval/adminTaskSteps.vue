<template>
<div data-role="page" id="admin_task_steps_page">
    <div class="page_header">
        <img class="left_img back-button" src="/staitc/resources/images/icon_white_back.png">
        <div class="page_header_title">处理步骤</div>
        <!--<div class="small right_img right_btn">page_header_title-->
        <!--<div class="smaller btn_div">查看附件</div>-->
        <!--&lt;!&ndash;<div id="case_welcome_rednum" class="red_num" style="">11</div>&ndash;&gt;-->
        <!--</div>-->
    </div>
    <div class="page_content" style="background: #ffffff;">
        <div id="admin_task_steps_wrapper" class="jszx-wrapper">
            <div class="jszx-scroller">
                <div id="governmentAffairs_steps_html" class="html_margin white_background">
                    <!--  <div class="list_row"><div>    <div class="oranger_font bigger">1、工单上报（上报）    </div>    <p class="normal">开始时间：2018-07-06 15:54:22</p>    <p class="normal">结束时间：2018-07-06 15:54:22</p>    <p class="normal">处理人：沈晓亮</p>    <p class="normal">处理意见：</p>    <p class="normal">状态：完成，用时：0分钟</p></div></div>
                 -->
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
        if (!window.affairsStpsPage) {
            initAffairsSteps();
            showGovernmentAffairsDetail(false, 1);
            window.affairsStpsPage = true;
        }
        //            /*查看附件*/
        //            $("#admin_task_steps_page .right_btn").listen("quickClick", function (e) {
        //                app.$router.push("../casetask/photoLook.html");
        //            });
        /*返回*/
        $("#admin_task_steps_page .back-button").listen("quickClick", function (e) {
            window.history.back();
        });

        function initAffairsSteps() {
            $("#admin_task_steps_wrapper")[0].style.height = window.localInnerHeight - $("#admin_task_steps_page .page_header").height() + "px";
            initScroll({
                "wrapper": "admin_task_steps_wrapper",
                "dir": "y",
                "bounce": false,
                "scrollBar": true,
                "pullUpLoading": function (reset) { //上拉
                    if (window.searchPage > window.arrayDataLength) {
                        reset(true);
                        toast("没有更多的数据了");
                    } else {
                        showGovernmentAffairsDetail(reset, window.searchPage++);
                    }
                },
                "pullDownLoading": function (reset) { //下拉
                    window.searchPage = 2;
                    showGovernmentAffairsDetail(reset, 1)
                }
            });
            scrollToTop("admin_task_steps_wrapper");
            window.lookType = "";
            $("#admin_task_steps_page table tr td").addClass("gray_line_bottom");
            $("#admin_task_steps_page table tr td input").val("");
            $("#admin_task_steps_page table tr td textarea").val("");
        }

        function showGovernmentAffairsDetail(reset, pageNum) {
            if (!reset) {
                //showLoading("正在搜索...");
            }
            if (parseInt(pageNum) < 2) {
                $("#governmentAffairs_steps_html").empty();
            }

            var currAffairCode = window.governmentAffairsInfo.currAffairCode;
            var obj = "";
            obj += toJson("currAffairCode", currAffairCode) + "&";
            obj += toJson("pageSize", "20") + "&";
            obj += toJson("pageNum", pageNum);
            doPost("app_showGovernmentAffairsDetail.action", obj, function (data) {
                if (data.materialData.length > 0) {
                    var array = data.processData;
                    var materialData = data.materialData;
                    if (!isNull(array) && array.length > 0) {
                        for (var i = 0; i < array.length; i++) {

                            var html = '';
                            html += '<div>';
                            var processResult = "";
                            if (!isNull(array[i].processResult)) {
                                processResult = "（" + array[i].processResult + "）";
                            }
                            html += '    <div class="oranger_font bigger">' + [i + 1] + "、" + array[i].processName + processResult;
                            /*  if (1 == parseInt(array[i].isHasAttachment)) {
                                 html += '       <div class="smaller" style="border:1px solid #4ba4e6;color:#4ba4e6;float:right;height:1em;text-align: center;width:3em;line-height:1em;font-size:0.4em;margin-right:1em;margin-top;-0.2em;">图片</div>';
                             } */
                            html += '    </div>';
                            html += '    <p class="normal">处理人：' + array[i].processPersonName + '</p>';
                            html += '    <p class="normal">操作时间：' + array[i].operateTime + '</p>';
                            html += '    <p class="normal">材料名称：' + materialData[i].matName + '</p>';
                            html += '    <p class="normal">材料份数：' + materialData[i].matNumber + '</p>';
                            html += '    <p class="normal">材料类型：' + materialData[i].matType + '</p>';
                            html += '    <p class="normal">备注：' + materialData[i].remarks + '</p>';
                            // html += '    <p class="normal">材料路径：' + array[i].status + '，用时：' + cost + '</p>';
                            html += '</div>';
                            var $html = createListRow(html).appendTo("#governmentAffairs_steps_html");
                            $html.data('data', array[i]);
                            $html.listen("quickClick", function (e) {
                                //点击事件
                                var data = $(e.currentTarget).data("data");
                                console.log("type:" + data.opValue);
                                if (!isNull(data.taskId) && 1 == parseInt(data.isHasAttachment)) {
                                    window.caseTaskIdPic = data.taskId;
                                    window.lookType = "casestep";
                                    app.$router.push("../casetask/photoLook.html");
                                }
                            });
                        }
                    } else {
                        noListShow("", "", "", $("#governmentAffairs_steps_html"), "");
                    }
                } else {
                    toast(data.message);
                }
            }, "");
        }
    }
}
</script>

<style lang="less" scoped>
#admin_task_steps_page #governmentAffairs_steps_html .list_row div:first-child {
    background: #f7f7f7;
    padding: 1em;
    padding: 0.5em 0.1em 0.5em 0.3em;
    border-radius: 0.5em;
}

#admin_task_steps_page #governmentAffairs_steps_html .list_row {
    margin: 1em;
}

#admin_task_steps_page #governmentAffairs_steps_html div p {
    padding: 0.3em;
    line-height: 1.3em;
}

/*#admin_task_steps_page .right_btn {*/
/*width: 3.5em;*/
/*height: 1.5em;*/
/*color: #ffffff;*/
/*}*/

#admin_task_steps_page .right_btn .btn_div {
    color: #ffffff;
    border: 1px solid #ffffff;
    height: 1.7em;
    line-height: 1.7em;
    top: -0.5em;
    background: orange;
    text-align: center;
}
</style>
