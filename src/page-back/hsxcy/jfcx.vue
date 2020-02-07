<template>
    <div data-role="page" id="jfcx_page">

        <tk-header>
            积分查询
        </tk-header>

        <div id="jfcx_wrapper" class="jszx-wrapper" style="background-color: #fff;">
            <!--<div class="jszx-scroller">-->
                <tk-scroll>
                <div id="jfcx_html">
                    <div class="page_message">
                        <p><span></span><span>排名列表</span></p>
                        <table cellpadding="0" cellspacing="0" border="1" class="statistics">
                            <thead>
                            <th>排名</th>
                            <th>姓名</th>
                            <th>分数</th>
                            </thead>
                            <tbody id="jfcx_tbody">
                            <!--<tr style="background-color: #eee;">-->
                                <!--<td style="width:20%;">1</td>-->
                                <!--<td>建筑管理</td>-->
                            <!--</tr>-->
                            <!--<tr>-->
                                <!--<td>2</td>-->
                                <!--<td>六位一体</td>-->
                            <!--</tr>-->
                            </tbody>
                        </table>
                    </div>
                </div>
                </tk-scroll>
            <!--</div>-->
        </div>
        <div class="page_footer" style="display:none;">
            <div class="footer_button_div">
                <div id="jf_back" class="alert_bottom_three orange_background">返回</div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "",
        mounted() {

            var that = this;
            ;
            //设置标题栏，内容栏，底部内容高度
            //$(".page_content")[0].style.height = window.localInnerHeight - $(".page_header").height() - $(".page_footer").height() + "px";
            //$(".page_content").children("div").get(0).style.height = window.localInnerHeight - $(".page_header").height() - $(".page_footer").height() + "px";
            //设置input和textarea的样式
            $("input").addClass("small gray_dark_font ui-input-text ui-body-c ui-corner-all ui-shadow-inset");
            $("textarea").addClass("ui-input-text ui-body-c ui-corner-all ui-shadow-inset");

            //  获取初始数据
            jfcxInit();

            // 返回
            $("#jfcx_page .left_img").listen("quickClick", function (e) {
                that.$router.back();
            });


            //初始化
            function jfcxInit() {
                window.bigClassarr = [];
              //  $("#jfcx_wrapper")[0].style.height = window.localInnerHeight - $("#jfcx_page .page_header").height() - $("#jfcx_page .page_footer").height() + "px";

                showjfList();
            }

            //第一级
            function showjfList() {
                $("#jfcx_tbody").empty();
                var htmls = '';
                var obj = "";

                // obj += toJson("startTime", "");
                doPost("getIntegralRank.action", obj, function (data) {

                    for (var i = 0; i < data.length; i++) {

                        var index = i + 1;
                        if (index % 2 == 0) {
                            htmls += '<tr id="' + data[i].id + '"  style="" ><td style="width:20%;">' + index + '</td><td><div class="dmmcdiv">' + data[i].name + '</div></td><td><div class="dmmcdiv">' + data[i].score + '</div></td></tr>';
                        } else {
                            htmls += '<tr id="' + data[i].id + '"  style="background-color: #eee;" ><td style="width:20%;">' + index + '</td><td><div class="dmmcdiv">' + data[i].name + '</div></td><td><div class="dmmcdiv">' + data[i].score + '</div></td></tr>';
                        }

                    }
                    $("#jfcx_tbody").html(htmls)
                })

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

    .red_numjfcx {
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

    #jfcx_page table th {
        width: 0;
    }
</style>
