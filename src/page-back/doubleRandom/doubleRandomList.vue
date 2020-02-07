<template>
    <div data-role="page" id="random_list_page">
        <tk-header>
            双随机列表as
        </tk-header>

        <div class="page_content" style="">
            <div id="random_list_wrapper" class="jszx-wrapper">
                <div class="jszx-scroller">
                    <div id="random_list_html" class="html_margin white_background">
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
    export default {
        name: "",
        mounted(){
            var that = this;

            window.searchPage = 2;
                inintrandomCaseList();

                /*大小类*/

                /*上报*/
                $("#random_list_page .right_img").listen("quickClick", function (e) {
                    that.$router.push({path:'doubleRandomEdit'});
                });
                /*返回*/
                $("#random_list_page .left_img").listen("quickClick", function (e) {
                    that.$router.back();
                });
            /**
             * 初始化
             */

            function inintrandomCaseList() {
                $("#random_list_wrapper")[0].style.height = window.localInnerHeight - $("#random_list_page .page_header").height() - $("#random_list_page .jszx-bar-icon-up").height() + "px";
                initScroll({
                    "wrapper": "random_list_wrapper",
                    "dir": "y",
                    "bounce": false,
                    "scrollBar": true,
                    "pullUpLoading": function (reset) { //上拉
                        if (window.searchPage > window.arrayDataLength) {
                            reset(true);
                            toast("没有更多的数据了");
                        } else {
                            doubleRandomList(reset, window.searchPage++);
                        }
                    },
                    "pullDownLoading": function (reset) { //下拉
                        window.searchPage = 2;
                        doubleRandomList(reset, 1)
                    }
                });
                scrollToTop("random_list_wrapper");



                doubleRandomList(false, 1);

            }

            //接口调用以及dom构建
            function doubleRandomList(reset, pageNum) {
                if (!reset) {
                    hideLoading();
                }
                if (parseInt(pageNum) < 2) {
                    $("#random_list_html").empty();
                }
                var obj = "";
                obj += toJson("userId", window.localStorage.userId) + "&";
                obj += toJson("pageSize", "20") + "&";
                obj += toJson("pageNum", pageNum);
                doPost("ap_doubleRandomInfoList.action", obj, function (data) {
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
                                var status = "";
                                if(array[i].status=="1"){
                                    status="未检查";
                                }else{
                                    status="已检查";
                                }
                                var bigtype = "";

                                var html = '';
                                html += '<table cellspacing="0" class="list_second_table gray_line_bottom" cellpadding="0">';

                                html += '   <tr>';
                                html += '       <td style="white-space:nowrap;overflow:hidden;text-overflow:ellipsis;"> ' + array[i].enterpriseName + '</td>';
                                /*  html += '       <td style="width:34%;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">' + array[i].checkItem + '</td>'; */
                                html += '       <td style="padding-left:0.5em;" class="oranger_font">' + status + '</td>';
                                html += '   </tr>';
                                html += '   <tr>';
                                html += '       <td colspan="3" style="text-align:left;"> ' + array[i].samplingTime+"&nbsp;-&nbsp;"+array[i].deadLine + '</td>';
                                html += '   </tr>';
                                html += '</table>';
                                var $html = createListRow(html).appendTo("#random_list_html");
                                $html.data('data', array[i]);
                                $html.listen("quickClick", function (e) {
                                    var data = $(e.currentTarget).data("data");
                                    window.doubleRandomInfo = data;
                                    that.$router.push({path:'doubleRandomEdit'});
                                });
                            }
                        } else {
                            if (parseInt(pageNum) < 2) {
                                noListShow("", "", "", $("#implement_html"), "");
                            }
                        }
                    } else {
                        if (reset) {
                            reset(true);
                        }
                        toast(data.message);
                        noListShow("", "", "", $("#random_list_html"), "");
                    }
                }, "");
            }
        }
    }
</script>

<style scoped>
    #random_list_page .page_header_title .jszx-bar-icon-up {
        background: #fafafa;
    }

    #random_list_page .home_list_tr_first_td {
        padding: 0.7em;
        padding-left: 0em;
    }

    #random_list_page .right_btn {
        width: 3.5em;
        height: 1.5em;
        color: #ffffff;
    }

    #random_list_page .right_btn .btn_div {
        color: #ffffff;
        border: 1px solid #ffffff;
        height: 1.7em;
        line-height: 1.7em;
        top: -0.5em;
        background: orange;
        text-align: center;
    }

    #random_list_page .jszx-bar-item-3 > div {
        width: 33.3%;
    }

    #random_list_page .tab_oranger_font p,
    .tab_bloack_font p, #random_list_page .jszx-bar-item-3 div p {
        height: 2.8em;
        line-height: 2.8em;
    }

    /*筛选小图标*/
    #random_list_page .jszx-bar-item-3 div p img {
        width: 0.6em;
        height: 0.5em;
        padding-left: 0.5em;
    }

    #random_list_page .home_list_tr_first_td span {
        margin-left: 0.5em;
    }
    #random_list_page .right_img {

        height: 1.5em;
    }
</style>
