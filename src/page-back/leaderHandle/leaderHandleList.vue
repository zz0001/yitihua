<template>
    <div data-role="page" id="leader_handle_list_page">
        <div class="page_header">
            <img class="left_img back-button " src="/staitc/resources/images/icon_white_back.png">
            <div class="page_header_title">领导交办</div>
            <div class="right_img right_btn" style="height:2.5em">新增</div>
        </div>

        <div class="page_content" style="">
            <div id="leader_list_wrapper" class="jszx-wrapper">
                <div class="jszx-scroller">
                    <div id="leader_list_html" class="html_margin white_background">
                        <div class="handlelist">

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "leaderHandleList"
    }
    window.searchPage = 2;
    $("#leader_handle_list_page").live("pageshow", function () {
        inintLeaderList();
        window.searchPage = 2;
        /*大小类*/

        /*上报*/
        $("#leader_handle_list_page .right_img").listen("quickClick", function (e) {
            $.mobile.changePage("../leaderHandle/leaderHandleEdit.html");
        });
        /*返回*/
        $("#leader_handle_list_page .left_img").listen("quickClick", function (e) {
            $.mobile.changePage("../linkage/linkageList.html");

        });
        $("#leader_handle_list_page .handlelist").listen("quickClick", function (e) {
            $.mobile.changePage("../leaderHandle/leaderHandleDetail.html");

        });
    });
    /**
     * 初始化
     */
    function inintLeaderList() {
        $("#leader_list_wrapper")[0].style.height = window.localInnerHeight - $("#leader_handle_list_page .page_header").height() - $("#leader_handle_list_page .jszx-bar-icon-up").height() + "px";
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
                    leader_handle_List(reset, window.searchPage++);
                }
            },
            "pullDownLoading": function (reset) { //下拉
                window.searchPage = 2;
                leader_handle_List(reset, 1)
            }
        });
        scrollToTop("leader_list_wrapper");

        //开始时间

        //结束时间



        if(window.localStorage.loginId=="daidan"||window.localStorage.loginId=="shenchunrong"){
            $("#leader_handle_list_page .right_img").show();
            window.localStorage.isbigLeader="0";
            leader_handle_List2(false, 1);
        }else{
            $("#leader_handle_list_page .right_img").show();
            window.localStorage.isbigLeader="1";
            leader_handle_List1(false, 1);
        }
    }

    //接口调用以及dom构建
    function leader_handle_List1(reset, pageNum) {
        if (!reset) {
            //showLoading("正在搜索...");
        }
        if (parseInt(pageNum) < 2) {
            $("#leader_list_html").empty();
        }
        $("#leader_list_html").empty();
        var obj = "";
        obj += toJson("loginId", window.localStorage.loginId) + "&";
        obj += toJson("origin", "JB") + "&";
        obj += toJson("pageSize", "20") + "&";
        obj += toJson("pageNum", pageNum);
        doPost("LeaderAssignList.action", obj, function (data) {
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
                        html += '       <td  colspan="3">' + problemStr + '</td>';
                        html += '       <td style="padding-left:0.5em;" class="oranger_font">' + array[i].leaderStatus + '</td>';
                        html += '   </tr>';
                        html += '   <tr>';
                        html += '       <td colspan="3" style="text-align:left;"> ' + array[i].reporttime+ '</td>';
                        html += '   </tr>';
                        html += '</table>';
                        var $html = createListRow(html).appendTo("#leader_list_html");
                        $html.data('data', array[i]);
                        $html.listen("quickClick", function (e) {
                            var data = $(e.currentTarget).data("data");
                            window.currjump="list";
                            window.leadercaseno = data.caseno;
                            $.mobile.changePage("../leaderHandle/leaderHandleDetail.html");
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

    //接口调用以及dom构建
    function leader_handle_List2(reset, pageNum) {
        if (!reset) {
            //showLoading("正在搜索...");
        }
        if (parseInt(pageNum) < 2) {
            $("#leader_list_html").empty();
        }
        $("#leader_list_html").empty();
        var obj = "";
        obj += toJson("loginId", window.localStorage.loginId) + "&";
        obj += toJson("origin", "JB") + "&";
        obj += toJson("pageSize", "20") + "&";
        obj += toJson("pageNum", pageNum);
        doPost("LeaderAssignListNew.action", obj, function (data) {
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
                        html += '       <td  colspan="3">' + problemStr + '</td>';
                        html += '       <td style="padding-left:0.5em;" class="oranger_font">' + array[i].leaderStatus + '</td>';
                        html += '   </tr>';
                        html += '   <tr>';
                        html += '       <td colspan="3" style="text-align:left;"> ' + array[i].reporttime+ '</td>';
                        html += '   </tr>';
                        html += '</table>';
                        var $html = createListRow(html).appendTo("#leader_list_html");
                        $html.data('data', array[i]);
                        $html.listen("quickClick", function (e) {
                            var data = $(e.currentTarget).data("data");
                            getCaseinfoList(false, 1, data.caseno);
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
    //接口调用以及dom构建
    function getCaseinfoList(reset, pageNum, caseno) {
        if (!reset) {
            //showLoading("正在搜索...");
        }
        if (parseInt(pageNum) < 2) {
            $("#leader_list_html").empty();
        }
        $("#leader_list_html").empty();
        var obj = "";
        obj += toJson("caseno", caseno) + "&";
        obj += toJson("pageSize", "20") + "&";
        obj += toJson("pageNum", pageNum);
        doPost("getCaseinfoList.action", obj, function (data) {
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
                        html += '       <td  colspan="3">' + problemStr + '</td>';
                        html += '       <td style="padding-left:0.5em;" class="oranger_font"></td>';
                        html += '   </tr>';
                        html += '   <tr>';
                        html += '       <td colspan="3" style="text-align:left;"> ' + array[i].reporttime+ '</td>';
                        html += '   </tr>';
                        html += '</table>';
                        var $html = createListRow(html).appendTo("#leader_list_html");
                        $html.data('data', array[i]);
                        $html.listen("quickClick", function (e) {
                            var data = $(e.currentTarget).data("data");
                            window.currjump="list";
                            window.leadercaseno = data.caseno;
                            $.mobile.changePage("../leaderHandle/leaderHandleDetail.html");
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
</script>

<style scoped>
    #leader_handle_list_page .page_header_title .jszx-bar-icon-up {
        background: #fafafa;
    }

    #leader_handle_list_page .home_list_tr_first_td {
        padding: 0.7em;
        padding-left: 0em;
    }

    #leader_handle_list_page .right_btn {
        width: 3.5em;
        height: 1.5em;
        color: #ffffff;
    }

    #leader_handle_list_page .right_btn .btn_div {
        color: #ffffff;
        border: 1px solid #ffffff;
        height: 1.7em;
        line-height: 1.7em;
        top: -0.5em;
        background: orange;
        text-align: center;
    }

    #leader_handle_list_page .jszx-bar-item-3 > div {
        width: 33.3%;
    }

    #leader_handle_list_page .tab_oranger_font p,
    .tab_bloack_font p, #leader_handle_list_page .jszx-bar-item-3 div p {
        height: 2.8em;
        line-height: 2.8em;
    }

    /*筛选小图标*/
    #leader_handle_list_page .jszx-bar-item-3 div p img {
        width: 0.6em;
        height: 0.5em;
        padding-left: 0.5em;
    }

    #leader_handle_list_page .home_list_tr_first_td span {
        margin-left: 0.5em;
    }
    #leader_handle_list_page .right_img {

        height: 1.5em;
    }

</style>