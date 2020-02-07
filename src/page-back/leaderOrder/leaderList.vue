<template>
    <div data-role="page" id="leader_list_page">
        <div class="page_header">
            <img class="left_img back-button " src="/staitc/resources/images/icon_white_back.png">
            <div class="page_header_title">领导直派</div>
            <div class="right_img right_btn" style="height:2.5em">新增</div>
        </div>

        <div class="page_content" style="">
            <div id="leader_list_wrapper" class="jszx-wrapper">
                <div class="jszx-scroller">
                    <div id="leader_list_html" class="html_margin white_background">
                    </div>
                </div>
            </div>
        </div>


    </div>
</template>

<script>
    export default {
        name: "leaderList",
        mounted(){
            window.searchPage = 2;
            var that=this;
                inintCaseList();

                /*大小类*/

                /*上报*/
                $("#leader_list_page .right_img").listen("quickClick", function (e) {
                    //$.mobile.changePage("../leaderOrder/leaderEdit.html");
                    that.$router.push({path:'leaderEdit',query:{}});
                });
                /*返回*/
                $("#leader_list_page .left_img").listen("quickClick", function (e) {
                    /* if ($(".max-dialog").is(':visible') == true) {
                        $(".max-dialog").remove();
                    } else {
                        $.mobile.changePage("../load/welcome.html");
                    } */

                    that.$router.push({path:'welcome',query:{}});
                });

            /**
             * 初始化
             */
            function inintCaseList() {
                $("#leader_list_wrapper")[0].style.height = window.localInnerHeight - $("#leader_list_page .page_header").height() - $("#leader_list_page .jszx-bar-icon-up").height() + "px";
                initScroll({
                    "wrapper": "leader_list_wrapper",
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
                scrollToTop("leader_list_wrapper");
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
                leader_workOrder(false, 1);

            }

            //接口调用以及dom构建
            function leader_workOrder(reset, pageNum) {
                if (!reset) {
                    //showLoading("正在搜索...");
                }
                if (parseInt(pageNum) < 2) {
                    $("#leader_list_html").empty();
                }
                var obj = "";
                obj += toJson("loginId", window.localStorage.loginId) + "&";
                obj += toJson("pageSize", "20") + "&";
                obj += toJson("pageNum", pageNum);
                doPost("MobileCaseinfoList.action", obj, function (data) {
                    if (!reset) {
                        hideLoading();
                    }
                    if (data.code == 0) {
                        if (reset) {
                            reset(true);
                        }
                        var array = data.datas;
                        getDataLength(data.totalSize);
                        if (!isNull(array) && array.length > 0) {
                            for (var i = 0; i < array.length; i++) {
                                var status = array[i].status;
                                var bigtype = "";
                                var problemStr =  array[i].problem;
                                if(array[i].problem.length>5){
                                    problemStr = array[i].problem.substring(0,5)+'...'
                                }
                                var html = '';
                                html += '<table cellspacing="0" class="list_second_table gray_line_bottom" cellpadding="0">';

                                html += '   <tr>';
                                html += '       <td> ' + array[i].caseno + '</td>';
                                html += '       <td style="width:34%;">' + problemStr + '</td>';
                                html += '       <td style="padding-left:0.5em;" class="oranger_font">' + status + '</td>';
                                html += '   </tr>';
                                html += '   <tr>';
                                html += '       <td colspan="3" style="text-align:left;"> ' + array[i].reportTime+"&nbsp;-&nbsp;"+array[i].deadLine + '</td>';
                                html += '   </tr>';
                                html += '</table>';
                                var $html = createListRow(html).appendTo("#leader_list_html");
                                $html.data('data', array[i]);
                                $html.listen("quickClick", function (e) {
                                    var data = $(e.currentTarget).data("data");
                                    window.caseRow_id = data.caseno;
                                   // $.mobile.changePage("../leaderOrder/leaderDetail.html");
                                    that.$router.push({path:'leaderDetail',query:{}});
                                });
                            }
                        } else {
                            noListShow("", "", "", $("#leader_list_html"), "");
                        }
                    } else {
                        //if (reset) {
                        //    reset(true);
                        //}
                        toast(data.message);
                    }
                }, "");
            }
        }
    }

</script>

<style scoped>
    #leader_list_page .page_header_title .jszx-bar-icon-up {
        background: #fafafa;
    }

    #leader_list_page .home_list_tr_first_td {
        padding: 0.7em;
        padding-left: 0em;
    }

    #leader_list_page .right_btn {
        width: 3.5em;
        height: 1.5em;
        color: #ffffff;
    }

    #leader_list_page .right_btn .btn_div {
        color: #ffffff;
        border: 1px solid #ffffff;
        height: 1.7em;
        line-height: 1.7em;
        top: -0.5em;
        background: orange;
        text-align: center;
    }

    #leader_list_page .jszx-bar-item-3 > div {
        width: 33.3%;
    }

    #leader_list_page .tab_oranger_font p,
    .tab_bloack_font p, #leader_list_page .jszx-bar-item-3 div p {
        height: 2.8em;
        line-height: 2.8em;
    }

    /*筛选小图标*/
    #leader_list_page .jszx-bar-item-3 div p img {
        width: 0.6em;
        height: 0.5em;
        padding-left: 0.5em;
    }

    #leader_list_page .home_list_tr_first_td span {
        margin-left: 0.5em;
    }
    #leader_list_page .right_img {
        width: 1.5em;
        height: 1.5em;
    }
</style>