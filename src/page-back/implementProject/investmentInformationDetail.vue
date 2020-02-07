<template>
    <div data-role="page" id="investment_detail_page">


        <tk-header>
            投资详情
        </tk-header>
        <div class="page_content">
            <div id="investment_detail_wrapper" class="jszx-wrapper">
                <div class="jszx-scroller">
                    <div id="investment_detail_html" class="html_margin white_background">
                        <table class="inp_table" cellpadding="0" cellspacing="0">

                            <tr>
                                <td style="min-width: 5em;" class="">计划年度</td>
                                <td colspan="2">
                                    <input id="year_plan" readonly type="text"/>
                                </td>
                            </tr>




                            <tr >
                                <td style="min-width: 5em;" class="">年度计划投资</td>
                                <td colspan="2">
                                    <input id="year_plan_investment" readonly type="text"/>
                                </td>
                            </tr>

                            <tr>
                                <td style="min-width: 5em;" class="">申报人员</td>
                                <td colspan="2">
                                    <input id="declare_people" readonly type="text"/>
                                </td>
                            </tr>
                            <tr>
                                <td style="min-width: 5em;" class="">申报日期</td>
                                <td colspan="2">
                                    <input id="declare_time" readonly type="text"/>
                                </td>
                            </tr>
                            <tr>
                                <td style="min-width: 5em;" class="">审核人员</td>
                                <td colspan="2">
                                    <input id="investment_examine_people" readonly type="text"/>
                                </td>
                            </tr>
                            <tr>
                                <td style="min-width: 5em;" class="">审核日期</td>
                                <td colspan="2">
                                    <input id="investment_examine_time" readonly type="text"/>
                                </td>
                            </tr>


                            <tr>
                                <td style="padding-top:0.5em;">目标形象进度</td>
                                <td colspan="2">
                                    <input class="small gray_dark_font" style="color:#999999;" readonly="true"/>
                                </td>
                            </tr>
                            <tr>
                                <td colspan="3" style="padding:1em;text-align: left;color: #333333;"
                                    id="target_progress"></td>
                            </tr>


                        </table>
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
            window.searchPage = 2;0
                //设置标题栏，内容栏，底部内容高度
                $(".page_content")[0].style.height = window.localInnerHeight - $(".page_header").height() - $(".page_footer").height() + "px";
                $(".page_content").children("div").get(0).style.height = window.localInnerHeight - $(".page_header").height() - $(".page_footer").height() + "px";
                //设置input和textarea的样式
                $("input").addClass("small gray_dark_font ui-input-text ui-body-c ui-corner-all ui-shadow-inset");
                $("textarea").addClass("ui-input-text ui-body-c ui-corner-all ui-shadow-inset");

                initInvestmentDetail();
                /* if (!window.CaseTaskDetailPage) {
                    cleanInvestmentDetail();
                    app_workOrderDetail(window.caseRow_id);
                    window.CaseTaskDetailPage = true;
                } */
                /*返回*/
                $("#investment_detail_page .back-button").listen("quickClick", function (e) {
                    that.$router.back();

                });

                /*办理*/
                $("#investment_detail_page .footer_button_div").listen("quickClick", function (e) {
                    console.log("数据：" + JSON.stringify(window.operationListArrayInfo));
                    if (!isNull(window.operationListArrayInfo) && window.operationListArrayInfo.length > 0) {
                        showChoiceOne();
                        setTimeout(function(){
                            //点击事件
                            var data = $(e.currentTarget).data("data");
                            console.log("type:" + JSON.stringify(data));
                            window.caseOneTaskAction = data;

                            for (var i = 0; i < window.operationListArrayInfo.length; i++) {
                                var info = '<p class="alert_edit_title gray_line_bottom">' + window.operationListArrayInfo[i].opName + '</p>';
                                var $row = createListRow(info).appendTo("#choice_one_html");
                                $row.data('data', window.operationListArrayInfo[i]);
                                $row.listen("quickClick", function (e) {
                                    //点击事件
                                    var data = $(e.currentTarget).data("data");
                                    console.log("type:" + JSON.stringify(data));
                                    window.caseOneTaskAction = data;


                                    that.$router.push({path:'caseTaskEdit'});
                                });
                            }
                        },500);

                    }

                });

            function initInvestmentDetail() {
                $("#investment_detail_wrapper")[0].style.height = window.localInnerHeight - $("#investment_detail_page .page_header").height() - $("#investment_detail_page .page_footer").height() + "px";
                $("#investment_detail_page .page_content").css("height", window.localInnerHeight - $("#investment_detail_page .page_header").height() - $("#investment_detail_page .page_footer").height() + "px");

                initScroll({
                    "wrapper": "investment_detail_wrapper",
                    "dir": "y",
                    "bounce": false,
                    "scrollBar": true
                });
                scrollToTop("investment_detail_wrapper");
                $("#investment_detail_page table tr td").addClass("gray_line_bottom");

                appInvestmentDetail();
            }
            function cleanInvestmentDetail() {
                $("#investment_detail_page table tr td input").val("");
                $("#investment_detail_page table tr td textarea").val("");


                $(".max-dialog").remove();
                $("#appEnfor_detail_img_scroll").css("transform", "none");
                $("#appEnfor_detail_img_wrapper .scroll-bar-x").css("transform", "none");

            }
            function appInvestmentDetail(){

                var projectno=window.projectInvestment.projectno;
                var id=window.projectInvestment.id;
                //接口入参
                var obj = "";
                obj += toJson("projectno", projectno) + "&";
                obj += toJson("id", id);
                //集中整治详情接口
                doPost("ap_projectInvestment.action", obj, function (data) {

                    if(data.total>0){
                        var array = data.datas[0];

                        $("#year_plan").val(array.planyear);
                        $("#year_plan_investment").val(array.investmentamount);
                        $("#declare_people").val(array.declarepersonnel);
                        $("#declare_time").val(array.declarationdate);
                        $("#investment_examine_people").val(array.auditor);
                        $("#investment_examine_time").val(array.approvaldate);

                        $("#target_progress").text(array.processrate);
                    }
                }, "");
            }
        }
    }
</script>

<style scoped>
    #investment_detail_page .commodityAddImgs {
        overflow: hidden;
        background: #f3f3f3;
    }

    #investment_detail_page .imgdiv {
        padding: 0.7em;
        padding-top: 0em;
        position: relative;
        width: 6em;
        float: left;
    }

    #investment_detail_page .goodsimgone {
        float: left;
        height: 6em;
        width: 6em;
        margin-top: 1em;
    }

    #investment_detail_page #case_detail_img {
        height: 7.5em;
        overflow: hidden;
        display: inline-block;
    }

    /*img end*/
    #investment_detail_page .jszx-bar-item-2 > div {
        width: 50%;
    }

    #investment_detail_page .jszx-bar-item-2 p,
    .jszx-bar-item-2 p {
        height: 2.8em;
        line-height: 2.8em;
    }

    #investment_detail_page .right_btn {
        width: 4.5em;
        right: 0em;
    }
    #investment_detail_page .page_header .page_header_title{
        line-height: 2.3em;
        font-size: 1em;
        height:2.3em;
    }
    #investment_detail_page .page_header{
        height:2.3em;
    }
    #investment_detail_page .page_header img{
        height: 1em;
    }

</style>
