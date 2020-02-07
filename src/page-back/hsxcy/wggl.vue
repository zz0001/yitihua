<template>
    <div data-role="page" id="wggl_page">
        <tk-header>
            积分排名
            <img style="width: 25px" src="/staitc/resources/images/saixuan.png"
                 @click='saixuanicon'
                 slot="right"/>
        </tk-header>

        <div id="wggl_wrapper" class="jszx-wrapper" style="background-color: #fff;">
            <div class="jszx-scroller">
                <div id="wggl_html">
                    <div class="page_message">
                        <p><span></span><span>排名列表</span></p>
                        <table class="inp_table" cellpadding="0" cellspacing="0">

                            <tr>
                                <td style="padding-top:0.5em;padding-bottom:0.5em;border-bottom: 1px solid #f3f3f3">
                                    选择日期
                                </td>
                                <td colspan="2" class="gray_line_bottom">
                                    <input class="small gray_dark_font" style="color:#999999;" readonly="true"
                                           id="select_start_month"/>
                                </td>
                            </tr>
                        </table>

                        <table cellpadding="0" cellspacing="0" border="1" class="statistics">
                            <thead>
                            <th>排名</th>
                            <th>姓名</th>
                            <th><span style="position: relative;top: 2px;">分数 </span>
                                <span id="sortScore" flag="-1" class="caret-wrapper"><i
                                        class="sort-caret ascending"></i><i class="sort-caret descending"></i></span>
                            </th>
                            <th>操作</th>
                            </thead>
                            <tbody id="wggl_tbody">
                            <tr style="background-color: #eee;">
                                <td style="width:20%;">1</td>
                                <td>建筑管理</td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>六位一体</td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
        <div class="page_footer">
            <div class="footer_button_div">
                <div id="find_pmList" class="alert_bottom_three orange_background">查询</div>
            </div>

        </div>
        <div id="wggltimearea" style="position: absolute;top:3em;width:100%;z-index: 900;display:none;">
            <table class="inp_table" cellpadding="0" cellspacing="0">

                <tr>
                    <td colspan="2" style="text-align: center;">筛选</td>
                </tr>

                <tr>
                    <td style="padding-top:0.5em;padding-bottom:0.5em;border-bottom: 1px solid #f3f3f3">姓名</td>
                    <td colspan="2" class="gray_line_bottom">
                        <input class="small gray_dark_font" style="color:#999999;"
                               placeholder="输入名字姓名" id="wggl_username"/>
                    </td>
                </tr>
                <tr>
                    <td style="padding-top:0.5em;padding-bottom:0.5em;border-bottom: 1px solid #f3f3f3">月份</td>
                    <td colspan="2" class="gray_line_bottom">
                        <input class="small gray_dark_font" style="color:#999999;" readonly="true"
                               placeholder="选择月份" id="wggl_month"/>
                    </td>
                </tr>
                <tr>
                    <td colspan="2" style="text-align: center;">
                        <div id="find_score" class="alert_bottom_three blue_background">查询</div>

                    </td>
                </tr>
            </table>
        </div>
    </div>
</template>

<script>
    export default {
        name: "",
        mounted() {
            var that = this;


            //设置input和textarea的样式
            $("input").addClass("small gray_dark_font ui-input-text ui-body-c ui-corner-all ui-shadow-inset");
            $("textarea").addClass("ui-input-text ui-body-c ui-corner-all ui-shadow-inset");

            //  获取初始数据
            wgglInit();
            chooseDate2("select_start_month", "date");
            chooseDate2("wggl_month", "date");
            // 返回
            $("#wggl_page .left_img").listen("quickClick", function (e) {
                that.$router.back();
            });

            $("#wggl_page").on("click", ".sbxx_mess", function (e) {
                var id = $(e.currentTarget).parent().attr("id");
                window.wgglcurrUserId = id;
                window.selectFlag = "1";
                that.$router.push({path: '/sbxxList'});
            });
            $("#wggl_page").on("click", ".zggj_mess", function (e) {
                var id = $(e.currentTarget).parent().attr("id");
                window.wgglcurrUserId = id;
                window.showsome = "1";
                that.$router.push({path: '/findzggj'});
            });
            $("#find_pmList").listen("quickClick", function (e) {
                window.wggl_userName = "";
                var time = $("#wggl_month").val();
                showwgglList(time);
            });
            $("#sortScore").listen("quickClick", function (e) {

                var val = $(e.currentTarget).attr("flag");
                if (val == "-1") {
                    var reverdata = window.listScoreData;
                    var data = reverdata.reverse();
                    sortShowwgglList(data);
                    $(e.currentTarget).attr("flag", "0");
                } else if (val == "0") {
                    var reverdata = window.listScoreData;
                    var data = reverdata.reverse();
                    sortShowwgglList(data);
                    $(e.currentTarget).attr("flag", "-1");
                }

            });
            $("#find_score").listen("quickClick", function (e) {

                window.wggl_userName = $("#wggl_username").val();
                var time = $("#wggl_month").val();
                showwgglList(time);
                $("#wggltimearea").fadeOut();
            });

            //初始化
            function wgglInit() {
                window.bigClassarr = [];
                $("#wggl_wrapper")[0].style.height = window.localInnerHeight - $("#wggl_page .page_header").height() - $("#wggl_page .page_footer").height() + "px";
                initScroll({
                    "wrapper": "wggl_wrapper",
                    "dir": "y",
                    "bounce": false,
                    "scrollBar": true,
                });
                scrollToTop("wggl_wrapper");

                var myDate = new Date();
                var time = "";
                var year = myDate.getFullYear();
                var month = myDate.getMonth() + 1;       //获取当前月份(0-11,0代表1月)
                month = (month < 10 ? "0" + month : month);
                /*  var day=myDate.getDate();
                 day =(day<10 ? "0"+day:day); */
                time = year + "-" + month;
                $("#select_start_month").val(time);
                window.wggl_userName = "";
                var time = $("#select_start_month").val();
                showwgglList(time);
            }

            // 默认
            function showwgglList(time) {
                showLoading("", "", "", "/staitc/resources/images/loading.gif");
                $("#wggl_tbody").empty();

                var htmls = '';
                var obj = "";
                obj += toJson("startTime", time) + "&";
                obj += toJson("userName", window.wggl_userName) + "&";
                obj += toJson("loginId", window.localStorage.loginId);
                doPost("getIntegralRank.action", obj, function (data) {
                    hideLoading();

                    for (var i = 0; i < data.length; i++) {
                        var index = i + 1;
                        data[i].index = index;

                        if (index % 2 == 0) {
                            htmls += '<tr   style="" ><td style="width:12%;">' + index + '</td><td><div class="dmmcdiv">' + data[i].name + '</div></td><td><div class="dmmcdiv">' + data[i].score + '</div></td><td id="' + data[i].id + '"><div class="smallbtn sbxx_mess">上报信息</div><div class="smallbtn zggj_mess">在格轨迹</div></td></tr>';
                        } else {
                            htmls += '<tr   style="background-color: #eee;" ><td style="width:12%;">' + index + '</td><td><div class="dmmcdiv">' + data[i].name + '</div></td><td><div class="dmmcdiv">' + data[i].score + '</div></td><td id="' + data[i].id + '"><div class="smallbtn sbxx_mess">上报信息</div><div class="smallbtn zggj_mess">在格轨迹</div></td></tr>';
                        }

                    }
                    window.listScoreData = data;
                    $("#wggl_tbody").html(htmls)
                })

            }

            function sortShowwgglList(data) {

                $("#wggl_tbody").empty();
                var htmls = '';
                for (var i = 0; i < data.length; i++) {


                    if (data[i].index % 2 == 0) {
                        htmls += '<tr   style="" ><td style="width:12%;">' + data[i].index + '</td><td style="width:20%;"><div class="dmmcdiv">' + data[i].name + '</div></td><td><div class="dmmcdiv">' + data[i].score + '</div></td><td id="' + data[i].id + '"><div class="smallbtn sbxx_mess">上报信息</div><div class="smallbtn zggj_mess">在格轨迹</div></td></tr>';
                    } else {
                        htmls += '<tr   style="background-color: #eee;" ><td style="width:12%;">' + data[i].index + '</td><td style="width:20%;"><div class="dmmcdiv">' + data[i].name + '</div></td><td><div class="dmmcdiv">' + data[i].score + '</div></td><td id="' + data[i].id + '"><div class="smallbtn sbxx_mess">上报信息</div><div class="smallbtn zggj_mess">在格轨迹</div></td></tr>';
                    }

                }
                $("#wggl_tbody").html(htmls)


            }


            function chooseDate2(id, type) {
                var nowName = '今天';
                if (type == 'time') {
                    nowName = '现在'
                }

                setTimeout(function () {
                    var opt = {};
                    opt.date = {
                        preset: type

                    }; //type=====date日期 、time时间、datetime日期+时间
                    opt.default = {
                        //height: 30,//每一栏的高度
                        //width: 40,//每一栏的宽度
                        theme: 'android-ics light',
                        //皮肤样式
                        display: 'modal',
                        //显示方式
                        mode: 'scroller',
                        //日期选择模式
                        lang: 'zh',
                        showNow: true,
                        nowText: nowName,
                        closeOnOverlay: true,
                        dateOrder: "yymm",
                        dateFormat: 'yy-mm'
                    };
                    var getTisDateBtn = $.extend(opt['date'], opt['default']);
                    var getTisDateTimeBtn = $.extend(opt['datetime'], opt['default']);//初始化年月日时分秒
                    if ("datetime" == type) {
                        console.log("日期");
                        //return getTisDateTimeBtn;
                        $("#" + id).mobiscroll(getTisDateTimeBtn).datetime(getTisDateTimeBtn);//
                        //$("#morning-start-time").mobiscroll(optDateTime).datetime(optDateTime);//
                    } else if ("month" == type) {
                        $("#" + id).mobiscroll(getTisDateBtn);
                    } else {
                        console.log("时间");
                        $("#" + id).mobiscroll($.extend(opt['date'], opt['default']));//
                        //return getTisDateBtn;
                    }
                }, 500);
            }

        },
        methods: {
            saixuanicon(e) {
                if ($(e.currentTarget).hasClass("opened")) {
                    $(e.currentTarget).removeClass("opened")
                    $("#wggltimearea").fadeOut();
                } else {
                    $(e.currentTarget).addClass("opened");
                    $("#wggl_username").val("");
                    $("#wggl_month").val("");
                    $("#wggltimearea").fadeIn();
                }
            }
        }

    }
</script>

<style lang="less">
    .page_condition {
        width: 100%;
        height: 7.5em;
        position: relative;
    }

    .page_condition .queryClick {
        position: absolute;
        top: 5%;
        left: 82%;
        width: 15%;
        font-size: 14px;
        word-wrap: break-word;
        letter-spacing: 12px;
        background-color: #0083df;
        height: 80%;
        text-align: center;
        border-radius: 8px;
        font-weight: 700;
        color: #fff;
    }

    .page_condition .headerName {
        position: absolute;
        width: 15%;
        height: 28px;
        line-height: 28px;
        font-size: 18px;
        font-weight: bold;
        text-align: center;
        border-radius: 15px;
        background-color: #fff;
        left: 10px;
        border: solid #cdcdcd 1px;
    }

    .page_condition div.headerName:nth-child(2) {
        top: 1.95em;
    }

    .page_condition div.headerName:nth-child(3) {
        top: 3.85em;
    }

    .page_condition form .ui-select {
        width: 60%;
        left: 20%;
    }

    .page_condition form div:nth-child(3) {
        width: 30%;
    }

    .page_condition form div:nth-child(4) {
        width: 30%;
        top: -35px;
        left: 50%;
    }

    .page_condition form .ui-select .ui-btn {
        margin: 3px;
    }

    .page_condition form .ui-select .ui-btn-icon-right .ui-btn-inner {
        padding: 3px;
    }

    .page_condition form .ui-select .ui-btn-icon-right .ui-icon {
        display: none;
    }

    .page_total {
        height: 9.6em;
        background-color: #fff;
    }

    .page_total ul li {
        float: left;
        text-align: center;
    }

    .page_total ul li p:nth-child(1) {
        font-size: 0.93em;
        height: 1.28em;
        line-height: 1.1em;
        margin-top: 1em;
    }

    .page_total ul li p:nth-child(2) {
        font-size: 1.2em;
        height: 1.57em;
        line-height: 2.5em;
    }

    .page_total ul:nth-child(1) li {
        width: 33%;
    }

    .page_total ul:nth-child(2) li {
        width: 24.5%;

    }

    .page_total ul li.split {
        border-right: 1px solid #cdcdcd;
        width: 0px;
        height: 3em;
        margin-top: 1em;
    }

    .page_message p {
        font-size: 20px;
        padding: 10px;
        font-weight: bold;
    }

    .page_message p span:nth-child(1) {
        display: inline-block;
        width: 6px;
        height: 1.5em;
        background-color: #0083df;
        margin-right: 10px;
        vertical-align: middle;
    }

    .page_message p span:nth-child(2) {
        vertical-align: middle;
    }

    .statistics {
        border-collapse: collapse;
        width: 96%;
        margin-left: 2%;
    }

    .statistics th {
        font-size: 1em;
        text-align: center;
        height: 2.5em;
        line-height: 1.5em;
        border: 1px solid #cdcdcd;
        font-weight: 700;
    }

    .statistics td {
        border: 1px solid #cdcdcd;
        text-align: center;
        height: 2em;
        line-height: 2em;
        font-size: 1em;
        position: relative;
    }

    .queryClick span {
        height: 100%;
        display: inline-block;
        margin: 10px 20px;
        color: #fff;
    }

    .red_numwggl {
        width: 18px;
        height: 18px;
        line-height: 18px;
        top: 6px;
        border-radius: 9px;
        position: absolute;
        text-align: center;
        background: red;
        font-size: 0.5em;
        margin-left: 1em;
        color: #ffffff;
        display: inline-block;

        vertical-align: middle;
    }

    .dmmcdiv {
        display: inline-block;
        vertical-align: middle;
    }

    .statusclass {
        display: none;
    }

    #wggl_page table th {
        width: 0;
    }

    #wggl_page .smallbtn {
        background: #f5a035;
        border-radius: 0.3em;
        text-align: center;
        color: #fff;
        display: inline-block;
        margin-right: 5px;
        line-height: 1.5em;
        padding: 0 5px;
    }

    .caret-wrapper {
        display: inline-flex;
        flex-direction: column;
        align-items: center;
        height: 34px;
        width: 24px;
        vertical-align: middle;
        cursor: pointer;
        overflow: initial;
        position: relative;
    }

    .sort-caret {
        width: 0;
        height: 0;
        border: 5px solid transparent;
        position: absolute;
        left: 7px;

    }

    .sort-caret.ascending {
        border-bottom-color: #c0c4cc;
        top: 5px;
    }

    .sort-caret.descending {
        border-top-color: #c0c4cc;
        bottom: 7px;
    }

    #wggl_page .righticon {
        position: relative;

        height: 52px;
        line-height: 52px;
        top: 0;
        padding: 0;
        margin: 0;
        font-size: 14px;
        text-align: center;
        right: 0em;
    }

    #wggl_page .saixuanicon {
        width: 24px;
        height: 24px;
        margin-right: 1em;
        position: absolute;
        top: 50%;
        right: 1em;
        margin-top: -12px;
    }

</style>
