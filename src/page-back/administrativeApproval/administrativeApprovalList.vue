<template>
<div data-role="page" id="approval_list_page">
    <div class="page_header">
        <img class="left_img back-button " src="/staitc/resources/images/icon_white_back.png">
        <div class="page_header_title">行政审批</div>

    </div>

    <div class="page_content" style="">
        <div id="approval_list_wrapper" class="jszx-wrapper">
            <div class="jszx-scroller">
                <div id="approval_list_html" class="html_margin white_background">

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
        inintApprovalList();

        /*大小类*/

        /*上报*/
        $("#approval_list_page .right_img").listen("quickClick", function (e) {
            app.$router.push("../administrativeApproval/administrativeApprovalEdit.html");
        });
        /*返回*/
        $("#approval_list_page .left_img").listen("quickClick", function (e) {

            app.$router.push("../linkage/linkageList.html");

        });

        function inintApprovalList() {
            $("#approval_list_wrapper")[0].style.height = window.localInnerHeight - $("#approval_list_page .page_header").height() - $("#approval_list_page .jszx-bar-icon-up").height() + "px";
            initScroll({
                "wrapper": "approval_list_wrapper",
                "dir": "y",
                "bounce": false,
                "scrollBar": true,
                "pullUpLoading": function (reset) { //上拉
                    if (window.searchPage > window.arrayDataLength) {
                        reset(true);
                        toast("没有更多的数据了");
                    } else {
                        showGovernmentAffairsList(reset, window.searchPage++);
                    }
                },
                "pullDownLoading": function (reset) { //下拉
                    window.searchPage = 2;
                    showGovernmentAffairsList(reset, 1)
                }
            });
            scrollToTop("approval_list_wrapper");

            //开始时间

            //结束时间

            showGovernmentAffairsList(false, 1);
            //leader_handle(false, 1);

        }

        //接口调用以及dom构建
        function showGovernmentAffairsList(reset, pageNum) {
            if (!reset) {
                //showLoading("正在搜索...");
            }
            if (parseInt(pageNum) < 2) {
                $("#approval_list_html").empty();
            }
            var obj = "";

            obj += toJson("pageSize", "20") + "&";
            obj += toJson("pageNum", pageNum);
            doPost("app_showGovernmentAffairs.action", obj, function (data) {
                if (!reset) {
                    hideLoading();
                }
                if (data.total > 0) {
                    if (reset) {
                        reset(true);
                    }
                    var array = data.datas;
                    getDataLength(data.total);
                    if (!isNull(array) && array.length > 0) {
                        for (var i = 0; i < array.length; i++) {

                            var html = '';
                            html += '<table cellspacing="0" class="list_second_table gray_line_bottom" cellpadding="0">';

                            html += '   <tr>';
                            html += '       <td style="white-space:nowrap;overflow:hidden;text-overflow:ellipsis;"> ' + [i + 1] + "、" + array[i].affairName + '</td>';
                            /*  html += '       <td style="width:34%;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">' + array[i].checkItem + '</td>'; */
                            html += '       <td style="padding-left:0.5em;" class="oranger_font"> </td>';
                            html += '   </tr>';
                            html += '   <tr>';
                            html += '       <td colspan="3" style="text-align:left;"> ' + array[i].acceptTime + "&nbsp;-&nbsp;" + array[i].endTime + '</td>';
                            html += '   </tr>';
                            html += '</table>';
                            var $html = createListRow(html).appendTo("#approval_list_html");
                            $html.data('data', array[i]);
                            $html.listen("quickClick", function (e) {
                                var data = $(e.currentTarget).data("data");
                                window.governmentAffairsInfo = data;
                                app.$router.push("../administrativeApproval/administrativeApprovalEdit.html");

                            });
                        }
                    } else {
                        noListShow("", "", "", $("#approval_list_html"), "");
                    }
                } else {
                    //if (reset) {
                    //    reset(true);
                    //}
                    toast(data.message);
                    noListShow("", "", "", $("#approval_list_html"), "");
                }
            }, "");
        }
    }
}
</script>

<style lang="less">
#approval_list_page .page_header_title .jszx-bar-icon-up {
    background: #fafafa;
}

#approval_list_page .home_list_tr_first_td {
    padding: 0.7em;
    padding-left: 0em;
}

#approval_list_page .right_btn {
    width: 3.5em;
    height: 1.5em;
    color: #ffffff;
}

#approval_list_page .right_btn .btn_div {
    color: #ffffff;
    border: 1px solid #ffffff;
    height: 1.7em;
    line-height: 1.7em;
    top: -0.5em;
    background: orange;
    text-align: center;
}

#approval_list_page .jszx-bar-item-3>div {
    width: 33.3%;
}

#approval_list_page .tab_oranger_font p,
.tab_bloack_font p,
#approval_list_page .jszx-bar-item-3 div p {
    height: 2.8em;
    line-height: 2.8em;
}

/*筛选小图标*/
#approval_list_page .jszx-bar-item-3 div p img {
    width: 0.6em;
    height: 0.5em;
    padding-left: 0.5em;
}

#approval_list_page .home_list_tr_first_td span {
    margin-left: 0.5em;
}

#approval_list_page .right_img {

    height: 1.5em;
}

.list_row {
    border-bottom: 1px solid #ccc;
}
</style>
