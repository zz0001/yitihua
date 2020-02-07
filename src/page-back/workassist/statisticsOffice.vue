<template>
    <div data-role="page" id="statistics_welcome_page">
        <div class="page_header">
            <img class="left_img back-button" src="/staitc/resources/images/icon_white_back.png">
            <div class="page_header_title">部门办件统计</div>
        </div>
        <div class="page_condition">
            <div class="headerName">时间</div>
            <div class="headerName">部门</div>
            <div class="headerName">类型</div>
            <form action="">
                <select id="time1">
                    <option value="1" selected="selected">默认(本周)</option>
                    <option value="2">本月</option>
                    <option value="3">本季</option>
                    <option value="4">本年</option>
                </select>
                <select id="bumen1">
                </select>
                <select id="zhineng1">
                </select>
                <select id="bigClass1">
                </select>
            </form>
            <div class="queryClickStyle" id="query"><span>点击查看</span></div>
        </div>
        <div id="office_welcome_wrapper" class="jszx-wrapper">
            <div class="jszx-scroller">
                <div id="office_html">

                </div>
            </div>
        </div>
    </div>
</template>

<script type="text/ecmascript-6">
    export default {
        name: "statisticsOffice",
        data() {
            return {}
        },
        created() {

        },
        mounted() {
            var that = this;
            // $("#statistics_welcome_page").live("pageshow", function () {
                // 先获取部门
                get_department1();
                // 在获取职能事项
                get_zhineng1();
                // 获取大类
                get_bigClass1();
                //  获取初始数据
                officeInit();

                // 返回
                $("#statistics_welcome_page .left_img").listen("quickClick", function (e) {
                    if ($(".max-dialog").is(':visible') == true) {
                        $(".max-dialog").remove();
                    } else {
                        // $.mobile.changePage("../workassist/workWelcomeType.html");
                        that.$router.back();
                    }
                });
                // 改变职能大类
                $("#statistics_welcome_page #zhineng1").change(function (e) {
                    get_bigClass1($("#statistics_welcome_page #zhineng1").val());
                })
                // 点击查询
                $("#query").listen("quickClick", function () {
                    app_officeList($("#statistics_welcome_page #zhineng1").val(), $("#statistics_welcome_page #bigClass1").val(), $("#statistics_welcome_page #bumen1").val(), $("#statistics_welcome_page #time1").val());
                })
            // });

            //初始化
            function officeInit() {
                $("#office_welcome_wrapper")[0].style.height = window.localInnerHeight - $("#statistics_welcome_page .page_header").height() - $("#statistics_welcome_page .page_condition").height() + "px";
                initScroll({
                    "wrapper": "office_welcome_wrapper",
                    "dir": "y",
                    "bounce": false,
                    "scrollBar": true,
                });
                scrollToTop("office_welcome_wrapper");
                app_officeList("", "", "", 1);
            }

            //获取部门
            function get_department1() {
                doPost("deptList.action", "", function (data) {
                    var array = data[0].datas;
                    var html = "";
                    html += '<option selected="selected" value="">默认(全部)</option>';
                    for (var i = 0; i < array.length; i++) {
                        html += '<option value="' + array[i].id + '">' + array[i].text + '</option>'
                    }
                    $("#bumen1").html(html);
                    $("#bumen1").prev().children(".ui-btn-text").find("span").html("默认(全部)");
                }, "")
            }

            // 获取职能
            function get_zhineng1() {
                doPost("findMultiCodeList.action", "", function (data) {
                    var html = "";
                    html += '<option selected="selected" value="">默认(全部)</option>';
                    for (var i = 0; i < data.datas.length; i++) {
                        html += '<option value="' + data.datas[i].id + '">' + data.datas[i].text + '</option>'
                    }
                    $("#zhineng1").html(html);
                    $("#zhineng1").prev().children(".ui-btn-text").find("span").html("默认(全部)");
                }, "")
            }

            // 获取大类
            function get_bigClass1(zhineng1) {
                if (zhineng1 == "") {
                    var html = '<option selected="selected" value="">默认(全部)</option>'
                    $("#bigClass1").html(html);
                    $("#bigClass1").prev().children(".ui-btn-text").find("span").html("默认(全部)");
                } else {
                    var obj = "";
                    obj += toJson("selDept", zhineng1);
                    doPost("findMultiCodeList.action", obj, function (data) {
                        var html = "";
                        html += '<option selected="selected" value="">默认(全部)</option>';
                        for (var i = 0; i < data.datas.length; i++) {
                            html += '<option value="' + data.datas[i].id + '">' + data.datas[i].text + '</option>'
                        }
                        $("#bigClass1").html(html);
                        $("#bigClass1").prev().children(".ui-btn-text").find("span").html("默认(全部)");
                    }, "")
                }
            }

            // 请求数据
            function app_officeList(zhineng1, bigClass1, bumen1, time1) {
                var obj = "";
                obj += toJson("component", zhineng1) + "&";
                obj += toJson("bigclass", bigClass1) + "&";
                obj += toJson("gridCode", bumen1) + "&";
                obj += toJson("duration", time1);
                doPost("deptStatistics.action", obj, function (data) {
                    var html = "";
                    html += '<div class="page_total">';
                    html += '<ul><li><p>接单数</p><p>' + data.total.totalworkOrder + '</p></li><li class="split"></li><li><p>处置数</p><p>' + data.total.totaldispose + '</p></li><li class="split"></li><li><p>按时办结率</p><p>' + data.total.totalcomplete + '</p></li></ul>';
                    html += '<ul><li><p>返工单数</p><p>' + data.total.totalredone + '</p></li><li class="split"></li><li><p>延期数</p><p>' + data.total.totaldelay + '</p></li><li class="split"></li><li><p>超期处置数</p><p>' + data.total.totaloverDispose + '</p></li> <li class="split"></li><li><p>超期未处置数</p><p>' + data.total.totaloverUndispose + '</p></li></ul>';
                    html += '</div>'
                    html += '<div class="page_message">';
                    html += '<p><span></span><span>职能事项统计</span></p>';
                    html += '<table cellpadding="0" cellspacing="0" border="1" class="statistics">';
                    html += '<thead><tr><th>部门</th><th>工单数</th><th>按时办结率</th><th>超期未处置数</th></tr></thead>';
                    if (data.datas.length == 0) {
                    }
                    for (var i = 0; i < data.datas.length; i++) {
                        html += '<tbody><tr><td>' + data.datas[i].deptName + '</td><td>' + data.datas[i].workOrder + '</td><td>' + data.datas[i].complete + '</td><td>' + data.datas[i].overUndispose + '</td></tr></tbody>';
                    }
                    html += '</table></div>';
                    $("#office_html").html(html);
                }, "")
            }
        },
        methods: {}
    }
</script>

<style lang="less" scoped>
    .page_condition {
        width: 100%;
        height: 7.5em;
        position: relative;
    }

    .page_condition .queryClickStyle {
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
        top: 2em;
    }

    .page_condition div.headerName:nth-child(3) {
        top: 4.2em;
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
        font-size: 0.7em;
        text-align: center;
        height: 2.5em;
        line-height: 1.5em;
        border: 1px solid #cdcdcd;
        font-weight: 700;
    }

    .statistics td {
        border: 1px solid #cdcdcd;
        text-align: center;
        height: 2.5em;
        line-height: 1.5em;
        font-size: 0.7em;
    }

    .queryClickStyle span {
        height: 100%;
        display: inline-block;
        margin: 10px 20px;
        color: #fff;
    }
</style>
