<template>
    <div data-role="page" id="patrol_record_page">
        <div class="page_header">
            <img class="left_img back-button" src="/staitc/resources/images/icon_white_back.png">
            <div class="page_header_title">巡查记录</div>
        </div>
        <div class="page_content">
            <div id="patrol_record_wrapper" class="jszx-wrapper">
                <div class="jszx-scroller">
                    <table class="inp_table settd_tab gray_line_bigger_bottom" cellpadding="0" cellspacing="0">
                        <tr>
                            <td class="address_td">已巡查：<span class="oranger_font" id="patrol_record_patrolTimes"></span>
                            </td>
                            <td>巡查次数：<span class="oranger_font" id="patrol_record_patrolTotalTimes"></span></td>
                        </tr>
                        <tr>
                            <td id="patrol_record_number_tr" class="address_td"><span id="patrol_record_number"></span>
                                <img class="div_input_value_img" src="/staitc/resources/images/icon_gray_solid_down.png">
                            </td>
                            <td id="patrol_record_mapline" class="address_td">轨迹</td>
                        </tr>
                    </table>
                    <div id="patrol_record_html" class="html_margin white_background"></div>
                </div>
            </div>
        </div>
    </div>
</template>

<script type="text/ecmascript-6">
    export default {
        name: "patrolRecord",
        data() {
            return {}
        },
        created() {

        },
        mounted() {
            window.searchPage = 2;
            $("#patrol_record_page").live("pageshow", function () {
                initPatrolRecord();
                /*第几次*/
                $("#patrol_record_page #patrol_record_number_tr").listen("quickClick", function (e) {
                    showChoiceOne();
                    for (var j = 0; j < parseInt(window.patrolTotalTimes); j++) {
                        var info = '<p class="alert_edit_title gray_line_bottom">' + (j + 1) + '</p>';
                        var $row = createListRow(info).appendTo("#choice_one_html");
                        $row.data('data', j);
                        $row.listen("quickClick", function (e) {
                            var data = $(e.currentTarget).data("data");
                            console.log("当前数据：" + JSON.stringify(data) + "\t," + data);
                            if ((parseInt(data) + 1) > window.allPatrolRecordInfo.length) {
                                console.log("没有数据");
                                toast("只有" + window.allPatrolRecordInfo.length + "次的巡查记录哦");
                            } else {
                                window.thisPatrolPage = parseInt(data) + 1;
                                $("#patrol_record_number").html("第" + window.thisPatrolPage + "次");
                                console.log(data + "长度：" + window.allPatrolRecordInfo.length);
                                console.log("开始赋值：");
                                $("#patrol_record_html").empty();
                                setRecordHtml(window.allPatrolRecordInfo[data]);
                            }
                        });
                    }
                });
                /*轨迹*/
                $("#patrol_record_page #patrol_record_mapline").listen("quickClick", function (e) {
                    app_patrolTrail();

                });
                /*返回*/
                $("#patrol_record_page .back-button").listen("quickClick", function (e) {
                    window.history.back();
                });
            });

            function initPatrolRecord() {
                $("#patrol_record_wrapper")[0].style.height = window.localInnerHeight - $("#patrol_record_page .page_header").height() + "px";
                initScroll({
                    "wrapper": "patrol_record_wrapper",
                    "dir": "y",
                    "bounce": false,
                    "scrollBar": true
                });
                scrollToTop("patrol_record_wrapper");
                $("#patrol_record_html").empty();
                app_patrolRecord();
            }
        },
        methods: {}
    }
</script>

<style lang="less" scoped>
    #patrol_record_page .div_input_value_img {
        padding-right: 0.5em;
    }

    #patrol_record_page .address_td {
    }

    #patrol_record_page .inp_table tr td:first-child {
    }

    #patrol_record_page .p_title {
        padding: 1em;
        background: #f7f7f7;
    }

    #patrol_record_page .commodityAddImgs {
        overflow: hidden;
        background: #f3f3f3;
    }

    #patrol_record_page .imgdiv {
        padding: 0 0.7em 0.7em;
        position: relative;
        width: 6em;
        float: left;
    }

    #patrol_record_page .goodsimgone {
        height: 6em;
        width: 6em;
    }

    #patrol_record_page .delimg {
        width: 2em;
        height: 2em;
        position: relative;
        top: 0;
        left: 5em;
    }
</style>
