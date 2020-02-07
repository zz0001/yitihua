<template>
    <div data-role="page" id="ycj_detail_page">
        <tk-header>
            采集详情
        </tk-header>
        <div class="page_content">
            <div id="ycj_detail_wrapper" class="jszx-wrapper">
                <div class="jszx-scroller">
                    <div id="ycj_visited_html" class="html_margin white_background">
                        <tk-detail-photo :list="imgs"></tk-detail-photo>
                        <tk-detail :list="list"></tk-detail>

                        <!--<table class="inp_table" cellpadding="0" cellspacing="0">-->
                            <!--<td colspan="3" class="commodityAddImgs">-->
                                <!--<div id="ycj_detail_img_wrapper" class="jszx-wrapper">-->
                                    <!--<div class="jszx-scroller" id="ycj_detail_img_scroll">-->
                                        <!--<div id="ycj_detail_img">-->
                                        <!--</div>-->
                                    <!--</div>-->
                                <!--</div>-->
                            <!--</td>-->
                            <!--<tr>-->
                                <!--<td style="min-width: 5em;" class="" id="ycjDetailNum">工单编号</td>-->
                                <!--<td colspan="2">-->
                                    <!--<input id="ycj_detail_caseNo" readonly type="text"/>-->
                                <!--</td>-->
                            <!--</tr>-->

                            <!--<tr>-->
                                <!--<td style="min-width: 5em;" class="" id="ycj_caseDetailOrgin">工单来源</td>-->
                                <!--<td colspan="2">-->
                                    <!--<input readonly type="tel" id="ycj_case_tasked_detail_orgin"/>-->
                                <!--</td>-->
                            <!--</tr>-->
                            <!--<tr id="sswg_task_tr">-->
                                <!--<td style="min-width: 5em;" class="">所属网格</td>-->
                                <!--<td colspan="2">-->
                                    <!--<input readonly id="ycj_detail_gridId" type="tel"/>-->
                                <!--</td>-->
                            <!--</tr>-->


                            <!--<tr>-->
                                <!--<td style="min-width: 5em;" class="" id="ycjDetailPeople">上报人</td>-->
                                <!--<td colspan="2">-->
                                    <!--<input readonly id="ycj_detail_reportPerson" type="text"/>-->
                                <!--</td>-->
                            <!--</tr>-->
                            <!--<tr id="contact_tr">-->
                                <!--<td style="min-width: 5em;" class="">联系方式</td>-->
                                <!--<td colspan="2">-->
                                    <!--<input readonly id="ycj_detail_reportPersonPhone" type="text"/>-->
                                <!--</td>-->
                            <!--</tr>-->

                            <!--<tr id="ycjpositionDesc_tr">-->
                                <!--<td style="padding-top:0.5em;">位置描述</td>-->
                                <!--<td colspan="2" id="ycj_detail_location" style="padding:1em;text-align: right;"></td>-->
                            <!--</tr>-->
                            <!--<tr>-->
                                <!--<td style="padding-top:0.5em;" id="ycjQuestionDesc">问题描述</td>-->
                                <!--<td colspan="2">-->
                                    <!--<input class="small gray_dark_font" style="color:#999999;" readonly="true"/>-->
                                <!--</td>-->
                            <!--</tr>-->
                            <!--<tr>-->
                                <!--<td colspan="3" style="padding:1.5em;text-align: left;color: #333333;"-->
                                    <!--id="ycj_detail_problem"></td>-->
                            <!--</tr>-->
                        <!--</table>-->
                        <div>
                            <div style="padding: 1.3em;font-size: 1em;background: #fff;color: #9f9f9f;">处理步骤</div>
                            <div id="ycj_steps_html" class="html_margin white_background" style="background:#fff;">

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
    export default {
        name: "",
        data(){
            return{
                imgs:[],
                list:[
                    {
                        key:"工单编号",
                        value:""
                    },
                    {
                        key:"工单来源",
                        value:""
                    }
                    ,
                    {
                        key:"所属网格",
                        value:""
                    },
                    {
                        key:"上报人",
                        value:""
                    },
                    {
                        key:"联系方式",
                        value:""
                    },
                    {
                        key:"位置描述",
                        value:""
                    },
                    {
                        key:"问题描述",
                        value:"",
                        detail:''
                    }
                ]
            }
    },
        mounted() {

            var that = this;
            window.searchPage = 2;
            //设置标题栏，内容栏，底部内容高度
            $(".page_content")[0].style.height = window.localInnerHeight - $(".page_header").height() - $(".page_footer").height() + "px";
            $(".page_content").children("div").get(0).style.height = window.localInnerHeight - $(".page_header").height() - $(".page_footer").height() + "px";
            //设置input和textarea的样式
            $("input").addClass("small gray_dark_font ui-input-text ui-body-c ui-corner-all ui-shadow-inset");
            $("textarea").addClass("ui-input-text ui-body-c ui-corner-all ui-shadow-inset");

            initycjDetail();
            cleanycjDetail();
            ycjOrderDetail(window.caseRow_id);
            /*返回*/
            $("#ycj_detail_page .back-button").listen("quickClick", function (e) {

                if (window.currstatus == "sbxx") {
                    window.selectFlag = "1";
                    that.$router.push({path: '/sbxxList'});
                } else {
                    that.$router.back();
                }
            });
            /*处理步骤*/
            $("#ycj_detail_page .right_btn").listen("quickClick", function (e) {
                window.CaseTaskStpsPage = "";
                that.$router.push({path: '/caseTaskSteps'});
            });
            $("#ycj_detail_page").on("click", ".smaller", function (e) {
                var url = $(e.currentTarget).attr("url");

                if (url.indexOf(";") > 0) {
                    var info = url.split(";");
                    window.opinionedImgArray = info;
                    var urlimg = window.imgUrl + info[0];
                    cordova.plugins.StartActivity.startActivity(urlimg, function (data) {
                    }, function (error) {
                        console.log("startActivity error:" + error);
                    });
                } else {
                    var arr = [];
                    arr.push(url);
                    window.opinionedImgArray = arr;
                    var urlimg = window.imgUrl + url;
                    cordova.plugins.StartActivity.startActivity(urlimg, function (data) {
                    }, function (error) {
                        console.log("startActivity error:" + error);
                    });
                }
            });

            function initycjDetail() {
                $("#ycj_detail_wrapper")[0].style.height = window.localInnerHeight - $("#ycj_detail_page .page_header").height() + "px";
                $("#ycj_detail_page .page_content").css("height", window.localInnerHeight - $("#ycj_detail_page .page_header").height() + "px");

                initScroll({
                    "wrapper": "ycj_detail_wrapper",
                    "dir": "y",
                    "bounce": false,
                    "scrollBar": true
                });
                scrollToTop("ycj_detail_wrapper");
                $("#ycj_detail_page table tr td").addClass("gray_line_bottom");
                window.upload_imgscroll = "ycj_detail_img_scroll";
                window.upload_imgwrapper = "ycj_detail_img_wrapper";
                window.upload_addimg = "ycj_detail_img";
            }

            function cleanycjDetail() {
                $("#ycj_detail_page table tr td input").val("");
                $("#ycj_detail_page table tr td textarea").val("");
                $("#ycj_detail_page #ycj_detail_img").empty();
                window.caseTaskOneTaskId = "";

                $("#ycj_detail_img_scroll").css("transform", "none");
                $("#ycj_detail_img_wrapper .scroll-bar-x").css("transform", "none");
                window.operationListArrayInfo = [];
            }

            function ycjOrderDetail(row_id) {

                var obj = "";
                //obj += toJson("userId", window.localStorage.userId) + "&";
                //obj += toJson("type", window.thisCaseQueryType) + "&";
                obj += toJson("row_id", row_id);
                doPost("workOrderDetail.action", obj, function (data) {

                    if (data.code == 0) {
                        var array = data.datas;


                        if (!isNull(array.pics)) {
                            $("#ycj_detail_page .commodityAddImgs").show();
                            if (array.pics.indexOf(";") > 0) {
                                var info = array.pics.split(";");
                                info.forEach(item=>{
                                    that.imgs.push({
                                        src:window.imgUrl+item
                                    })
                                })
                            } else {
                                var arr = [];
                                arr.push(array.pics);
                                window.opinionedImgArray = arr;
                                that.imgs=[{
                                    src:window.imgUrl+array.pics
                                }]

                            }

                        } else {
                            $("#ycj_detail_page .commodityAddImgs").hide();
                        }
                        window.caseTaskOneTaskId = array.taskId;
                        //步骤
                        //步骤
                        if (array.processSteps.length > 0) {
                            var html = '';
                            var arr = array.processSteps;
                            for (var k = 0; k < arr.length; k++) {
                                html += '<div class="list_row_case"><div>';

                                html += '    <div class="oranger_font bigger">' + [k + 1] + "、" + arr[k].name;
                                if (!isNull(arr[k].url)) {
                                    html += '       <div  url="' + arr[k].url + '" class="smaller" style="border:1px solid #4ba4e6;color:#4ba4e6;float:right;height:1em;text-align: center;width:3em;line-height:1em;font-size:0.4em;margin-right:1em;margin-top;-0.2em;background: #f7f7f7;padding: 0.5em 0.1em 0.5em 0.3em;border-radius: 0.5em;">图片</div>';
                                }
                                html += '    </div>';
                                html += '    <p class="normal">处理时间：' + arr[k].endTime + '</p>';
                                html += '    <p class="normal">处理人：' + arr[k].userName + '</p>';
                                html += '    <p class="normal">处理情况：' + arr[k].message + '</p>';
                                html += '</div></div>';
                            }
                            $("#ycj_steps_html").html(html);

                        } else {
                            $("#ycj_steps_html").empty();
                        }
                        //批示内容


                        //工单编号
                        that.list[0].value=array.caseNo;
                        that.list[1].value=array.origin;
                        that.list[2].value=array.gridName;
                        that.list[3].value=array.reportPerson;
                        that.list[4].value=array.reportPersonPhone;
                        that.list[5].value=array.location;
                        that.list[6].value=array.problem;
                        that.list[6].detail=array.problem;


                       // $("#ycj_detail_caseNo").val(array.caseNo);
                        //工单来源
                       // $("#ycj_case_tasked_detail_orgin").val(array.origin)
                        //部件编号
                        //$("#case_tasked_detail_componentIdNo").val(array.componentIdNo);
                        //所属网格
                       // $("#ycj_detail_gridId").val(array.gridName);
                        //职能事项
                       // $("#ycj_detail_eventComponent").val(array.eventComponent);
                        //大类
                       // $("#ycj_detail_bigClass").val(array.bigClass);

                        //上报时间
                       // $("#ycj_detail_reportTime").val(array.reportTime);
                        //截止时间
                       // $("#ycj_detail_Deadline").val(array.deadline);
                        //分管领导截止时间


                        //上报人
                      //  $("#ycj_detail_reportPerson").val(array.reportPerson);
                        //联系方式
                      //  $("#ycj_detail_reportPersonPhone").val(array.reportPersonPhone);
                        //位置描述
                      //  $("#ycj_detail_location").html(array.location);
                        //问题描述
                      //  $("#ycj_detail_problem").html(array.problem);
                        //领导查看

                    } else {
                        toast(data.message);
                    }
                }, "");
            }
        }
    }
</script>

<style >
    #ycj_detail_page .commodityAddImgs {
        overflow: hidden;
        background: #f3f3f3;
    }

    #ycj_detail_page .imgdiv {
        padding: 0.7em;
        padding-top: 0em;
        position: relative;
        width: 6em;
        float: left;
    }

    #ycj_detail_page .goodsimgone {
        float: left;
        height: 6em;
        width: 6em;
        margin-top: 1em;
    }

    #ycj_detail_page #case_detail_img {
        height: 7.5em;
        overflow: hidden;
        display: inline-block;
    }

    /*img end*/
    #ycj_detail_page .jszx-bar-item-2 > div {
        width: 50%;
    }

    #ycj_detail_page .jszx-bar-item-2 p,
    .jszx-bar-item-2 p {
        height: 2.8em;
        line-height: 2.8em;
    }

    #ycj_detail_page .right_btn {
        width: 4.5em;
        right: 0em;
    }

    /*#ycj_detail_page .right_btn .btn_div {*/
    /*width: 4em;*/
    /*}*/
    #ycj_detail_page .list_row_case {
        padding: 1em;
    }

    #ycj_detail_page .list_row_case div:first-child {
        background: #f7f7f7;
        padding: 1em;
        padding: 0.5em 0.1em 0.5em 0.3em;
        border-radius: 0.5em;
    }

    #ycj_detail_page .list_row_case div p {
        padding: 0.3em;
        line-height: 1.3em;
    }
</style>
