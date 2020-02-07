<template>
    <div class="page_header">
        <tk-header>
            巡查上报
            <span
                    @click='rightClick'
                    slot="right">已上报</span>
        </tk-header>
        <div id="xxcj_wrapper" class="jszx-wrapper" style="background-color: #fff;">
            <div class="jszx-scroller">
                <div id="xxcj_html">
                    <div class="page_message">
                        <tk-title>上报列表</tk-title>
                        <!--<p><span></span><span></span></p>-->
                        <table cellpadding="0" cellspacing="0" border="1" class="statistics">

                            <tbody id="cjlb_tbody">
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
        <div class="page_footer" style="display:none;">
            <div class="footer_button_div">
                <div id="backtofirst" class="alert_bottom_three orange_background">返回</div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "",
        mounted() {
            var that = this;

            //设置标题栏，内容栏，底部内容高度
            //设置input和textarea的样式
            $("input").addClass("small gray_dark_font ui-input-text ui-body-c ui-corner-all ui-shadow-inset");
            $("textarea").addClass("ui-input-text ui-body-c ui-corner-all ui-shadow-inset");
            ;
            //  获取初始数据
            xxcjInit();

            // 返回
            $("#xxcj_page .left_img").listen("quickClick", function (e) {

                if (window.currstep == "2") {
                    $("#xxcj_page .page_footer").hide();
                    window.currstep = "1";
                    showfirstList();
                } else {
                    that.$router.back();
                }
            });
            // 已采集
            $("#xxcj_page .right_img").listen("quickClick", function (e) {

            });

            $("#cjlb_tbody").on("click", ".tosecond", function (e) {
                window.currstep = "2";
                $("#xxcj_page .page_footer").show();
                var id = $(e.currentTarget).attr("id");
                window.eventComponent = id;
                var dmmc = $(e.currentTarget).attr("currtitle");
                window.firstdmmc = dmmc;
                var index = $(e.currentTarget).attr("currnum");
                showsecondList(index);
            })
            $("#cjlb_tbody").on("click", ".toedit", function (e) {
                var id = $(e.currentTarget).attr("id");
                window.bigClass = id;
                var dmmc = $(e.currentTarget).attr("currtitle");
                window.seconddmmc = dmmc;
                var area = $(e.currentTarget).attr("area");
                window.area = area;
                var score = $(e.currentTarget).attr("score");
                window.score = score;
                var path = $(e.currentTarget).attr("path");
                window.xxcjpath = path;
                var dispose = $(e.currentTarget).attr("dispose");
                window.dispose = dispose;
                that.$router.push({path: '/xxcjEdit'});

            })
            $(".page_footer").listen("quickClick", function (e) {
                window.currstep = "1";
                $("#xxcj_page .page_footer").hide();
                showfirstList();
            });

            //初始化
            function xxcjInit() {
                window.bigClassarr = [];
                $("#xxcj_wrapper")[0].style.height = window.localInnerHeight - $("#xxcj_page .page_header").height() - $("#xxcj_page .page_footer").height() + "px";
                initScroll({
                    "wrapper": "xxcj_wrapper",
                    "dir": "y",
                    "bounce": false,
                    "scrollBar": true,
                });
                scrollToTop("xxcj_wrapper");
                $("#xxcj_page .page_footer").hide();
                window.currstep = "1";
                showfirstList();
            }

            //第一级
            function showfirstList() {
                $("#cjlb_tbody").empty();
                var htmls = '';
                var obj = "";
                var classname = "tosecond";

                obj += toJson("userId", window.localStorage.userId);
                doPost("getEventcomponentForInfoCollection.action", obj, function (data) {

                    for (var i = 0; i < data.length; i++) {
                        window.bigClassarr.push(data[i].bigClass);
                        var index = i + 1;
                        var style = "display:none;";
                        if (data[i].count != 0) {
                            style = "";
                        }
                        if (index % 2 == 0) {
                            htmls += '<tr id="' + data[i].id + '" class="' + classname + '" style="" currtitle="' + data[i].dmmc + '" currnum="' + i + '" ><td style="width:20%;">' + index + '</td><td><div class="dmmcdiv">' + data[i].dmmc + '</div><div class="red_numxxcj" style="' + style + '">' + data[i].count + '</div></td></tr>';
                        } else {
                            htmls += '<tr id="' + data[i].id + '" class="' + classname + '" style="background-color: #eee;" currtitle="' + data[i].dmmc + '" currnum="' + i + '"><td style="width:20%;">' + index + '</td><td><div class="dmmcdiv">' + data[i].dmmc + '</div><div class="red_numxxcj" style="' + style + '">' + data[i].count + '</div></td></tr>';
                        }

                    }
                    $("#cjlb_tbody").html(htmls)
                })

            }

            //第2级
            function showsecondList(num) {
                $("#cjlb_tbody").empty();
                var htmls = '';
                var obj = "";
                var classname = "toedit";
                var data = window.bigClassarr[num];
                for (var i = 0; i < data.length; i++) {
                    var index = i + 1;
                    var statusclass = "";
                    if (data[i].status == "0") {
                        statusclass = "";
                    } else {
                        statusclass = "statusclass";
                    }
                    if (index % 2 == 0) {
                        htmls += '<tr id="' + data[i].id + '" class="' + classname + '" style="" currtitle="' + data[i].dmmc + '" area="' + data[i].area + '" score="' + data[i].score + '" path="' + data[i].path + '" dispose="' + data[i].dispose + '"><td style="width:20%;"><span class="' + statusclass + '" style="color:red;">*</span>' + index + '</td><td>' + data[i].dmmc + '</td></tr>';
                    } else {
                        htmls += '<tr id="' + data[i].id + '" class="' + classname + '" style="background-color: #eee;" currtitle="' + data[i].dmmc + '" area="' + data[i].area + '" score="' + data[i].score + '" path="' + data[i].path + '" dispose="' + data[i].dispose + '"><td style="width:20%;"><span class="' + statusclass + '" style="color:red;">*</span>' + index + '</td><td>' + data[i].dmmc + '</td></tr>';
                    }

                }
                $("#cjlb_tbody").html(htmls)

            }
        },
        methods: {
            rightClick() {
                window.originType = "4";
                this.$router.push({path: '/ycjList'});
            }
        }
    }
</script>

<style >
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

    .red_numxxcj {
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
</style>
