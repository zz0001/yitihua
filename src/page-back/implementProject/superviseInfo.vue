<template>
    <div data-role="page" id="supervise_info_page">

        <tk-header>
            督察督办
        </tk-header>
        <div class="page_content" style="">
            <div>
                <table class="superviseTitle1" style="background-color: #0283de;">
                    <tr style="background-color: #0283de;text-align: center;line-height:2em;">
                        <td id="trueProject" style="color: #fff;font-size:0.95em;">实事项目</td>
                        <td id="otherProject1" style="color:rgba(255,255,255,0.7);font-size:0.95em;">其他项目</td>

                    </tr>
                </table>
                <table class="superviseTitle2" style="text-align: center;">
                    <tr style="line-height:3em;">

                        <td id="unstartno_td">未开工(<i id="unstartno"></i>)</td>
                        <td id="superviseno_td">已督办(<i id="superviseno"></i>)</td>
                        <td id="issueno_td">存在问题(<i id="issueno"></i>)</td>
                    </tr>
                </table>
            </div>

            <div id="supervise_info_wrapper" class="jszx-wrapper">
                <div class="jszx-scroller">
                    <div id="supervise_info_html" class="html_margin white_background">
                        <ul>

                        </ul>
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
            //设置input和textarea的样式
            $("input").addClass("small gray_dark_font ui-input-text ui-body-c ui-corner-all ui-shadow-inset");
            $("textarea").addClass("ui-input-text ui-body-c ui-corner-all ui-shadow-inset");
            window.currTab = "1";
            window.superviseType = "unstartno";
            inintsuperviseInfo();
            window.searchPage = 2;


            /*上报*/
            $("#supervise_info_page .right_img").listen("quickClick", function (e) {

            });
            /*返回*/
            $("#supervise_info_page .left_img").listen("quickClick", function (e) {
                that.$router.back();
            });
            //筛选
            $("#supervise_info_page .right_btn").listen("quickClick", function (e) {
                $("#house_search_content").show();
            });
            $("#trueProject").listen("quickClick", function (e) {
                $(".superviseTitle1 td").css("color", "rgba(255,255,255,0.7)");
                $("#trueProject").css("color", "#fff");
                window.currTab = "1";
                $("#supervise_info_html").empty();
                findSuperviseNo("1");
                findSuperviseUnstart("1");
            });
            $("#otherProject1").listen("quickClick", function (e) {

                $(".superviseTitle1 td").css("color", "rgba(255,255,255,0.7)");
                $("#otherProject1").css("color", "#fff");
                window.currTab = "2";
                $("#supervise_info_html").empty();
                findSuperviseNo("2");
                findSuperviseUnstart("2");
            });
            $("#unstartno_td").listen("quickClick", function (e) {
                $(".superviseTitle2 td").css("color", "#555");
                $(".superviseTitle2 i").css("color", "#555");
                $("#unstartno_td").css("color", "#0283de");
                $("#unstartno_td i").css("color", "#0283de");
                $("#supervise_info_html").empty();
                window.superviseType = "unstartno";
                findSuperviseNo(window.currTab);
                findSuperviseUnstart(window.currTab);
            });
            $("#superviseno_td").listen("quickClick", function (e) {
                $(".superviseTitle2 td").css("color", "#555");
                $(".superviseTitle2 i").css("color", "#555");
                $("#superviseno_td").css("color", "#0283de");
                $("#superviseno_td i").css("color", "#0283de");
                $("#supervise_info_html").empty();
                window.superviseType = "superviseno";
                findSuperviseNo(window.currTab);
                findSuperviseStart(window.currTab);
            });
            $("#issueno_td").listen("quickClick", function (e) {
                $(".superviseTitle2 td").css("color", "#555");
                $(".superviseTitle2 i").css("color", "#555");
                $("#issueno_td").css("color", "#0283de");
                $("#issueno_td i").css("color", "#0283de");
                $("#supervise_info_html").empty();
                window.superviseType = "issueno";
                findSuperviseNo(window.currTab);
                findSuperviseIssue(window.currTab);
            });

            /**
             * 初始化
             */
            function inintsuperviseInfo() {
                //$("#supervise_info_wrapper")[0].style.height = window.localInnerHeight - $("#supervise_info_page .page_header").height() - $("#supervise_info_page .jszx-bar-icon-up").height() + "px";
                /*      initScroll({
                         "wrapper": "supervise_info_wrapper",
                         "dir": "y",
                         "bounce": false,
                         "scrollBar": true,
                         "pullUpLoading": function (reset) { //上拉
                             if (window.searchPage > window.arrayDataLength) {
                                 reset(true);
                                 toast("没有更多的数据了");
                             } else {
                                 //houseInfoList(reset, window.searchPage++);
                             }
                         },
                         "pullDownLoading": function (reset) { //下拉
                             window.searchPage = 2;
                             //houseInfoList(reset, 1)
                         }
                     }); */
                // scrollToTop("supervise_info_wrapper");

                //开始时间

                //结束时间
                if (window.currTab == "1") {
                    $(".superviseTitle1 td").css("color", "rgba(255,255,255,0.7)");
                    $("#trueProject").css("color", "#fff");
                    superviseSelect();
                } else {
                    $(".superviseTitle1 td").css("color", "rgba(255,255,255,0.7)");
                    $("#otherProject1").css("color", "#fff");
                    superviseSelect();
                }

            }

            function superviseSelect() {
                if (window.superviseType == "unstartno") {
                    $(".superviseTitle2 td").css("color", "#555");
                    $(".superviseTitle2 i").css("color", "#555");
                    $("#unstartno_td").css("color", "#0283de");
                    $("#unstartno_td i").css("color", "#0283de");
                    $("#supervise_info_html").empty();
                    window.superviseType = "unstartno";
                    findSuperviseNo(window.currTab);
                    findSuperviseUnstart(window.currTab);
                } else if (window.superviseType == "superviseno") {
                    $(".superviseTitle2 td").css("color", "#555");
                    $(".superviseTitle2 i").css("color", "#555");
                    $("#superviseno_td").css("color", "#0283de");
                    $("#superviseno_td i").css("color", "#0283de");
                    $("#supervise_info_html").empty();
                    window.superviseType = "superviseno";
                    findSuperviseNo(window.currTab);
                    findSuperviseStart(window.currTab);
                } else if (window.superviseType == "issueno") {
                    $(".superviseTitle2 td").css("color", "#555");
                    $(".superviseTitle2 i").css("color", "#555");
                    $("#superviseno_td").css("color", "#0283de");
                    $("#superviseno_td i").css("color", "#0283de");
                    $("#supervise_info_html").empty();
                    window.superviseType = "superviseno";
                    findSuperviseNo(window.currTab);
                    findSuperviseStart(window.currTab);
                }
            }

            //接口调用以及dom构建
            function houseInfoList(reset, pageNum) {
                if (!reset) {
                    //showLoading("正在搜索...");
                }
                if (parseInt(pageNum) < 2) {
                    $("#supervise_info_html").empty();
                }
                var obj = "";
                var houseid = "";
                var house_caseno_list = $("#house_caseno_list").val();
                var house_address_list = $("#house_address_list").val();
                obj += toJson("id", houseid) + "&";
                obj += toJson("pageSize", "20") + "&";
                obj += toJson("houseno", house_caseno_list) + "&";
                obj += toJson("address", house_address_list) + "&";
                obj += toJson("pageNum", pageNum);
                doPost("ap_houseInfoList.action", obj, function (data) {
                    if (!reset) {
                        hideLoading();
                    }
                    if (data.total > 0) {
                        $("#house_search_content").hide();
                        if (reset) {
                            reset(true);
                        }
                        var array = data.datas;
                        getDataLength(data.total);
                        if (!isNull(array) && array.length > 0) {
                            for (var i = 0; i < array.length; i++) {
                                var html = '';
                                html += '<div class="handlelist"><div class="lefttd">';
                                html += '<div style="display: inline-block;vertical-align: middle;line-height:2.5em;padding-left:1em;">' + array[i].address + '</div><div style="display: inline-block;vertical-align: middle;padding-left:1em;line-height:2.5em">' + array[i].houseno + '</div></div>';
                                html += '<div class="righttd"><img src="/staitc/resources/images/icon_next.png" class="icon_left">';
                                html += '</div></div>';

                                var $html = createListRow(html).appendTo("#supervise_info_html");
                                $html.data('data', array[i]);
                                $html.listen("quickClick", function (e) {

                                    var data = $(e.currentTarget).data("data");
                                    window.houseListData = data;
                                    that.$router.push({path: '/firstEdit'});
                                });
                            }
                        } else {
                            $("#house_search_content").hide();
                            noListShow("", "", "", $("#supervise_info_html"), "");
                        }
                    } else {
                        //if (reset) {
                        //    reset(true);
                        //}
                        $("#house_search_content").hide();
                        toast(data.message);
                        noListShow("", "", "", $("#supervise_info_html"), "");
                    }
                }, "");
            }

            //督察督办数
            function findSuperviseNo(type) {
                var obj = "";
                obj += toJson("nature", type);
                doPost("findSuperviseNo.action", obj, function (data) {
                    console.log(data)
                    $("#unstartno").text(data.unstartno);
                    $("#superviseno").text(data.superviseno);
                    $("#issueno").text(data.issueno);

                }, "");

            }

            //督察督办-未开工
            function findSuperviseUnstart(type) {
                var obj = "";
                obj += toJson("nature", type);
                doPost("findSuperviseUnstart.action", obj, function (data) {
                    console.log(data)
                    for (var i = 0; i < data.length; i++) {
                        var html = '';
                        html += '<div class="handlelist"><div class="lefttd">';
                        html += '<div style="display:inline-block;vertical-align: middle;line-height:2.5em;padding-left:1em;">' + data[i].leadername + '</div><div style="display:inline-block;vertical-align: middle;line-height:2.5em;margin-left:3em;color:red;">' + data[i].num + '</div></div>';
                        html += '<div class="righttd"><img src="/staitc/resources/images/icon_next.png" class="icon_left">';
                        html += '</div></div>';

                        var $html = createListRow(html).appendTo("#supervise_info_html");
                        $html.data('data', data[i]);
                        $html.listen("quickClick", function (e) {

                            var data = $(e.currentTarget).data("data");
                            window.superviseListLeadername = data.leadername;
                            that.$router.push({path: '/superviseList'});

                        });
                    }
                }, "");

            }

            //督察督办-37.已督办
            function findSuperviseStart(type) {
                var obj = "";
                obj += toJson("nature", type);
                doPost("findSuperviseStart.action", obj, function (data) {
                    console.log(data)
                    for (var i = 0; i < data.length; i++) {
                        var html = '';
                        html += '<div class="handlelist"><div class="lefttd">';
                        html += '<div style="display:inline-block;vertical-align: middle;line-height:2.5em;padding-left:1em;">' + data[i].leadername + '</div><div style="display:inline-block;vertical-align: middle;line-height:2.5em;margin-left:3em;color:red;">' + data[i].num + '</div></div>';
                        html += '<div class="righttd"><img src="/staitc/resources/images/icon_next.png" class="icon_left">';
                        html += '</div></div>';

                        var $html = createListRow(html).appendTo("#supervise_info_html");
                        $html.data('data', data[i]);
                        $html.listen("quickClick", function (e) {

                            var data = $(e.currentTarget).data("data");
                            window.superviseListLeadername = data.leadername;
                            that.$router.push({path: '/superviseList'});
                        });
                    }
                }, "");

            }

            //督察督办-38.存在问题
            function findSuperviseIssue(type) {
                var obj = "";
                obj += toJson("nature", type);
                doPost("findSuperviseIssue.action", obj, function (data) {
                    console.log(data)
                    for (var i = 0; i < data.length; i++) {
                        var html = '';
                        html += '<div class="handlelist"><div class="lefttd">';
                        html += '<div style="display:inline-block;vertical-align: middle;line-height:2.5em;padding-left:1em;">' + data[i].leadername + '</div><div style="display:inline-block;vertical-align: middle;line-height:2.5em;margin-left:3em;color:red;">' + data[i].num + '</div></div>';
                        html += '<div class="righttd"><img src="/staitc/resources/images/icon_next.png" class="icon_left">';
                        html += '</div></div>';

                        var $html = createListRow(html).appendTo("#supervise_info_html");
                        $html.data('data', data[i]);
                        $html.listen("quickClick", function (e) {

                            var data = $(e.currentTarget).data("data");
                            window.superviseListLeadername = data.leadername;
                            that.$router.push({path: '/superviseList'});
                        });
                    }
                }, "");

            }
        }
    }
</script>

<style scoped>
    #supervise_info_page .page_header_title .jszx-bar-icon-up {
        background: #fafafa;
    }

    #supervise_info_page .home_list_tr_first_td {
        padding: 0.7em;
        padding-left: 0em;
    }

    #supervise_info_page .right_btn {
        width: 3.5em;
        height: 1.5em;
        color: #ffffff;
    }

    #supervise_info_page .right_btn .btn_div {
        color: #ffffff;
        border: 1px solid #ffffff;
        height: 1.7em;
        line-height: 1.7em;
        top: -0.5em;
        background: orange;
        text-align: center;
    }

    #supervise_info_page .jszx-bar-item-3 > div {
        width: 33.3%;
    }

    #supervise_info_page .tab_oranger_font p,
    .tab_bloack_font p, #supervise_info_page .jszx-bar-item-3 div p {
        height: 2.8em;
        line-height: 2.8em;
    }

    /*筛选小图标*/
    #supervise_info_page .jszx-bar-item-3 div p img {
        width: 0.6em;
        height: 0.5em;
        padding-left: 0.5em;
    }

    #supervise_info_page .home_list_tr_first_td span {
        margin-left: 0.5em;
    }

    #supervise_info_page .right_img {

        height: 1.5em;
    }

    #supervise_info_page .search_div {
        height: 3.2em;
        padding: 0.5em 1em 0em 1em;
        margin: 0em;
        background: #edeef1;
    }

    .superviseTitle1, .superviseTitle2 {
        height: 2em;
    }

    .superviseTitle1, .superviseTitle1 tr {
        background-color: #0283de;
        text-align: center;
    }

    .superviseTitle1 td {
        color: #fff;
    }

    .superviseTitle2 {
        text-align: center;
    }

    .superviseTitle2 td {
        font-size: 0.8em;
    }

    #supervise_info_page .handlelist {
        height: 2.5em;
        padding: 0;
        border-bottom: 1px solid #dadada;
    }

    #supervise_info_page .lefttd, .righttd {
        line-height: 2.5em;
        height: 2.5em;
        border: none;

        vertical-align: middle;
        display: inline-block;
    }

    .lefttd {
        width: 90%;
    }

    .righttd {
        width: 10%;
        position: relative;


    }

    .icon_left {
        height: 17px;
        width: 10px;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }

    #supervise_info_page .page_header .page_header_title {
        line-height: 2.3em;
        font-size: 1em;
        height: 2.3em;
    }

    #supervise_info_page .page_header {
        height: 2.3em;
    }

    #supervise_info_page .page_header img {
        height: 1em;
    }
</style>
