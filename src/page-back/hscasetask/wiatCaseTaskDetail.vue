<template>
    <div data-role="page" id="case_task_detail_page">

        <tk-header>
            工单详情
        </tk-header>

        <div class="page_content">
            <div id="case_task_detail_wrapper" class="jszx-wrapper">
                <div class="jszx-scroller">
                    <div id="wait_visited_html" class="html_margin white_background">
                        <tk-detail-photo :list="list"></tk-detail-photo>
                        <tk-detail :list="detailList"></tk-detail>
                        <div v-show="isShow">
                            <tk-title>自行处置图片</tk-title>
                            <tk-detail-photo :list="list2"></tk-detail-photo>
                        </div>
                        <!--<table class="inp_table" cellpadding="0" cellspacing="0">-->
                            <!--&lt;!&ndash;<tr>&ndash;&gt;-->
                                <!--&lt;!&ndash;<td style="min-width: 5em;" colspan="3" class="commodityAddImgs">&ndash;&gt;-->
                                    <!--&lt;!&ndash;<div id="case_task_detail_img_wrapper" class="jszx-wrapper">&ndash;&gt;-->
                                        <!--&lt;!&ndash;<div class="jszx-scroller" id="case_task_detail_img_scroll">&ndash;&gt;-->
                                            <!--&lt;!&ndash;<div id="case_task_detail_img">&ndash;&gt;-->
                                            <!--&lt;!&ndash;</div>&ndash;&gt;-->
                                        <!--&lt;!&ndash;</div>&ndash;&gt;-->
                                    <!--&lt;!&ndash;</div>&ndash;&gt;-->
                                <!--&lt;!&ndash;</td>&ndash;&gt;-->
                            <!--&lt;!&ndash;</tr>&ndash;&gt;-->
                            <!--<tr>-->
                                <!--<td style="min-width: 5em;" class="" id="caseTaskDetailNum">工单编号</td>-->
                                <!--<td colspan="2">-->
                                    <!--<input id="case_task_detail_caseNo" readonly type="text"/>-->
                                <!--</td>-->
                            <!--</tr>-->

                            <!--<tr>-->
                                <!--<td style="min-width: 5em;" class="" id="caseTaskDetailOrgin">信息来源</td>-->
                                <!--<td colspan="2">-->
                                    <!--<input readonly type="tel" id="case_task_detail_orgin"/>-->
                                <!--</td>-->
                            <!--</tr>-->

                            <!--<tr id="sswg_task_tr">-->
                                <!--<td style="min-width: 5em;" class="">所属网格</td>-->
                                <!--<td colspan="2">-->
                                    <!--<input readonly id="case_task_detail_gridId" type="tel"/>-->
                                <!--</td>-->
                            <!--</tr>-->


                            <!--<tr>-->
                                <!--<td style="min-width: 5em;" class="" id="caseTaskDetailPeople">上报人</td>-->
                                <!--<td colspan="2">-->
                                    <!--<input readonly id="case_task_detail_reportPerson" type="text"/>-->
                                <!--</td>-->
                            <!--</tr>-->

                            <!--<tr>-->
                                <!--<td style="padding-top:0.5em;" id="caseTaskQuestionDesc">问题描述</td>-->
                                <!--<td colspan="2">-->
                                    <!--<input class="small gray_dark_font" style="color:#999999;" readonly="true"/>-->
                                <!--</td>-->
                            <!--</tr>-->
                            <!--<tr>-->
                                <!--<td colspan="3" style="padding:1.5em;text-align: left;color: #333333;"-->
                                    <!--id="case_task_detail_problem"></td>-->
                            <!--</tr>-->
                            <!--<tr id="positionDesc_tr">-->
                                <!--<td style="padding-top:0.5em;">位置描述</td>-->
                                <!--<td colspan="2" id="case_task_detail_location"-->
                                    <!--style="padding:1em;text-align: right;"></td>-->
                            <!--</tr>-->
                            <!--<tr id="task_disposeResult_title_tr">-->
                                <!--<td colspan="3" style="padding-top:0.5em;padding-bottom:0.5em;" class="">自行处置结果</td>-->
                            <!--</tr>-->
                            <!--<tr id="task_disposeResult_tr">-->
                                <!--<td colspan="2">-->
                                    <!--<input id="task_disposeResult" class="small gray_dark_font"-->
                                           <!--style="text-align:left;color: #333333;" readonly="true"/>-->
                                <!--</td>-->
                            <!--</tr>-->
                            <!--<tr id="task_disposeResult_img_title_tr">-->
                                <!--<td colspan="3" style="padding-top:0.5em;padding-bottom:0.5em;" class="">自行处置图片</td>-->

                            <!--</tr>-->
                            <!--<tr id="task_disposeResult_img_tr">-->
                                <!--<td colspan="3" class="commodityAddImgs">-->
                                    <!--<div id="case_task_dispose_img_wrapper" class="jszx-wrapper">-->
                                        <!--<div class="jszx-scroller" id="case_task_dispose_img_scroll">-->
                                            <!--<div id="case_task_dispose_detail_img">-->
                                            <!--</div>-->
                                        <!--</div>-->
                                    <!--</div>-->
                                <!--</td>-->
                            <!--</tr>-->

                        <!--</table>-->
                        <div>
                            <tk-title>处理步骤</tk-title>
                            <div id="case_task_steps_html" class="html_margin white_background"
                                 style="background:#fff;">

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="page_footer">
            <div class="footer_button_div">
                <div id="caseBtn" class="alert_bottom_three orange_background">下一步</div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "",
        data() {
            return {
                list: [

                ],
                isShow:false,
                detailList:[{
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
                    },{
                        key:"自行处置结果",
                        value:"",
                    }]

            }
        },
        mounted() {
            var that = this;
            window.searchPage = 2;
            $("input").addClass("small gray_dark_font ui-input-text ui-body-c ui-corner-all ui-shadow-inset");

            window.currpage = "caseTaskpage";
            // if (!window.CaseTaskDetailPage) {
                initCaseTaskDetail();
                cleanCaseTaskDetail();
                app_waitWorkOrderDetail.call(this,window.caseRow_id);
                window.CaseTaskDetailPage = true;
            // }
            /*返回*/
            $("#case_task_detail_page .back-button").listen("quickClick", function (e) {

                if (window.localStorage.userType == "17" || window.localStorage.userType == "18") {
                   // $.mobile.changePage("../case/leaderInstructionsList.html");
                    that.$router.push({path:'leaderInstructionsList',query:{}});
                } else {
                    window.CaseTaskDetailPage = false;
                   // $.mobile.changePage("../hscasetask/waitTodoCaseList.html");
                    that.$router.push({path:'waitTodoCaseList',query:{}});
                }

            });
            /*处理步骤*/
            // $("#case_task_detail_page .right_btn").listen("quickClick", function (e) {
            //     window.CaseTaskStpsPage = "";
            //     $.mobile.changePage("../hscasetask/caseTaskSteps.html");
            // });
            $("#case_task_detail_page").on("click", ".smaller", function (e) {

                if (!e.isPropagationStopped()) {
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
                }//确定stopPropagation是否被调用过

                e.stopPropagation();//必须要

            });
            /*办理*/
            $("#case_task_detail_page #caseBtn").listen("quickClick", function (e) {
                ;
                console.log("数据：" + JSON.stringify(window.operationListArrayInfo));
                if (!isNull(window.operationListArrayInfo) && window.operationListArrayInfo.length > 0) {
                    showChoiceOneSelect();
                    setTimeout(function () {
                        //点击事件
                        var data = $(e.currentTarget).data("data");
                        console.log("type:" + JSON.stringify(data));
                        window.caseOneTaskAction = data;
                        // $.mobile.changePage("../casetask/caseTaskEdit.html");
                        for (var i = 0; i < window.operationListArrayInfo.length; i++) {
                            var info = '<p class="alert_edit_title gray_line_bottom">' + window.operationListArrayInfo[i].opName + '</p>';
                            var $row = createListRow(info).appendTo("#choice_one_html");
                            $row.data('data', window.operationListArrayInfo[i]);
                            $row.listen("quickClick", function (e) {
                                //点击事件
                                setTimeout(function () {
                                    var data = $(e.currentTarget).data("data");
                                    console.log("type:" + JSON.stringify(data));
                                    window.caseOneTaskAction = data;
                                    that.$router.push({path:'waitcaseTaskEdit',query:{}});
                                    //$.mobile.changePage("../hscasetask/waitcaseTaskEdit.html");
                                }, 500)

                            });
                        }
                    }, 500);

                }
                //   $.mobile.changePage("../visit/case_task_detail.html");
            });

            function initCaseTaskDetail() {
                $("#case_task_detail_wrapper")[0].style.height = window.localInnerHeight - $("#case_task_detail_page .page_header").height() - $("#case_task_detail_page .page_footer").height() + "px";
                $("#case_task_detail_page .page_content").css("height", window.localInnerHeight - $("#case_task_detail_page .page_header").height() - $("#case_task_detail_page .page_footer").height() + "px");

                initScroll({
                    "wrapper": "case_task_detail_wrapper",
                    "dir": "y",
                    "bounce": false,
                    "scrollBar": true
                });
                scrollToTop("case_task_detail_wrapper");
                $("#case_task_detail_page table tr td").addClass("gray_line_bottom");
                window.upload_imgscroll = "case_task_detail_img_scroll";
                window.upload_imgwrapper = "case_task_detail_img_wrapper";
                window.upload_addimg = "case_task_detail_img";
                window.upload_imgscroll_dispose = "case_task_dispose_img_scroll";
                window.upload_imgwrapper_dispose = "case_task_dispose_img_wrapper";
                window.upload_addimg_dispose = "case_task_dispose_detail_img";
                /*    if(window.localStorage.userType=="15"||window.localStorage.userType=="16"){
                       $("#caseBtn").text("审  核");
                   }else{
                       $("#caseBtn").text("上报处置情况");
                   } */
            }

            function cleanCaseTaskDetail() {
                $("#case_task_detail_page table tr td input").val("");
                $("#case_task_detail_page table tr td textarea").val("");
                $("#case_task_detail_page #case_task_detail_img").empty();
                $("#case_task_detail_page #case_task_dispose_detail_img").empty();

                window.caseTaskOneTaskId = "";
                // $(".max-dialog").remove();
                $("#case_task_detail_img_scroll").css("transform", "none");
                $("#case_task_detail_img_wrapper .scroll-bar-x").css("transform", "none");
                $("#case_task_dispose_img_scroll").css("transform", "none");
                $("#case_task_dispose_img_wrapper .scroll-bar-x").css("transform", "none");
                window.operationListArrayInfo = [];
            }
        }
    }
    function showChoiceOneSelect() {
        ;
        $(".max-dialog").remove();
        var choice_one = "<div class='max-dialog max-alert alert_value_scroll'>";
        choice_one += "     <div class='max-dialog-masker alert_value_max'></div>";
        choice_one += "     <div class='max-dialog-frame'>";
        choice_one += "         <div  class='max-dialog-content'>";
        choice_one += "             <div id='noconfirm' class='jszx-wrapper max_height_div'>";
        choice_one += "                 <div class='jszx-scroller'>";
        choice_one += "                     <div class='max-dialog-text' id='choice_one_html'>";
        //choice_one += (html || "");
        choice_one += "                     </div>";
        choice_one += "                 </div>";
        choice_one += "             </div>";
        choice_one += "         </div>";
        choice_one += "     </div>";
        choice_one += "</div>";
        var $choice_one = $(choice_one).appendTo("#case_task_detail_page").show();

        //$(".alert_value_scroll").fadeIn(500);
        setTimeout(function() {
            $choice_one.find(".alert_value_max").bind("click", function() {
                $(".alert_value_scroll").fadeOut(500, function() {
                    $(".alert_value_scroll").remove();
                });

            });
        }, 500);
        $choice_one.find("#choice_one_html").bind("click", function() {
            $(".alert_value_scroll").fadeOut(500, function() {
                $(".alert_value_scroll").remove();
            });
        });
    }
    function app_waitWorkOrderDetail(row_id) {
        var that=this;

        var obj = "";

        obj += toJson("loginId", window.localStorage.loginId) + "&";
        //obj += toJson("type", window.thisCaseQueryType) + "&";
        obj += toJson("rowId", row_id);
        doPost("dsbOrderDetail.action", obj, function (data) {
            if (data.code == 0) {
                var array = data.datas;
                if (!isNull(array.operationList) && array.operationList.length > 0) {
                    window.operationListArrayInfo = [];
                    for (var i = 0; i < array.operationList.length; i++) {
                        var info = {
                            opName: array.operationList[i].opName,
                            opValue: array.operationList[i].opValue,
                            destId: array.operationList[i].destId
                        };
                        window.operationListArrayInfo.push(info);
                    }
                    $("#case_task_detail_page .page_footer").show();
                    //initCaseTaskDetail();
                } else {
                    $("#case_task_detail_page .page_footer").hide();
                    //initCaseTaskDetail();
                }
                if (!isNull(array.pics)) {
                    $("#case_task_detail_page .commodityAddImgs").show();
                    $("#case_tasked_detail_page .commodityAddImgs").show();
                    if (array.pics.indexOf(";") > 0) {
                        var info = array.pics.split(";");
                        info.forEach(item=>{
                            that.list.push({
                                src:window.imgUrl+item
                            })
                        })

                    } else {
                        var arr = [];
                        arr.push(array.pics);
                        window.opinionedImgArray = arr;
                        that.list=[{
                            src:window.imgUrl+array.pics
                        }]


                    }
                    //$("#good_num").val(window.picture_array.length + "/5");
                } else {
                    $("#case_task_detail_page .commodityAddImgs").hide();
                    $("#case_tasked_detail_page .commodityAddImgs").hide();
                }
                window.caseTaskOneTaskId = array.taskId;
                //步骤
                if (array.processSteps.length>0) {
                    var html = '';
                    var arr=array.processSteps;
                    for(var k=0;k<arr.length;k++){
                        html += '<div class="list_row_case"><div>';

                        html += '    <div class="oranger_font bigger">' + [k + 1] + "、" + arr[k].name;
                        if (!isNull(arr[k].url)) {
                            html += '       <div  url="'+arr[k].url+'" class="smaller" style="border:1px solid #4ba4e6;color:#4ba4e6;float:right;height:1em;text-align: center;width:3em;line-height:1em;font-size:0.4em;margin-right:1em;margin-top;-0.2em;background: #f7f7f7;padding: 0.5em 0.1em 0.5em 0.3em;border-radius: 0.5em;">图片</div>';
                        }
                        html += '    </div>';
//                 html += '    <p class="normal">开始时间：' + arr[k].startTime + '</p>';
                        html += '    <p class="normal">处理时间：' + arr[k].endTime + '</p>';
                        html += '    <p class="normal">处理人：' + arr[k].userName + '</p>';
                        html += '    <p class="normal">处理情况：' + arr[k].message + '</p>';
                        html += '</div></div>';


                    }
                    if(window.thisCaseQueryType=="2"){
                        $("#case_tasked_steps_html").html(html);
                    }else{
                        $("#case_task_steps_html").html(html);
                    }

                }else{
                    $("#case_task_steps_html").empty();
                }
                if(array.dispose=="1"){
                    that.detailList[7].value=array.disposeResult;

                    if (!isNull(array.backpath)) {

                        that.isShow=true;
                        if (array.backpath.indexOf(";") > 0) {

                            var info = array.backpath.split(";");
                            info.forEach(item=>{
                                that.list2.push({
                                    src:window.imgUrl+item
                                })
                            })

                        } else {
                            
                            var arr = [];
                            arr.push(array.feedbackPic);
                            window.opinionedImgArray = arr;
                            that.list2=[{
                                src:window.imgUrl+array.feedbackPic
                            }]


                        }
                        //$("#good_num").val(window.picture_array.length + "/5");
                    }
                }else{

                }
                window.localStorage.originNum=array.originNum;
                that.detailList[0].value=array.caseNo;
                that.detailList[1].value=array.origin;
                that.detailList[2].value=array.gridName;
                that.detailList[3].value=array.reportPerson;
                that.detailList[4].value=array.reportPersonPhone;
                that.detailList[5].value=array.location;
                that.detailList[6].value=array.problem;
                that.detailList[6].detail=array.problem;



                window.localStorage.orgin=array.orgin;

            } else {

                toast(data.message);
            }
        }, "");
    }
</script>

<style lang="less">
    #case_task_detail_page {

    .commodityAddImgs {
        overflow: hidden;
        background: #f3f3f3;
    }

    .imgdiv {
        padding: 0.7em;
        padding-top: 0em;
        position: relative;
        width: 6em;
        float: left;
    }

    .goodsimgone {
        float: left;
        height: 6em;
        width: 6em;
        margin-top: 1em;
    }

    #case_detail_img {
        height: 7.5em;
        overflow: hidden;
        display: inline-block;
    }

    /*img end*/
    .jszx-bar-item-2 > div {
        width: 50%;
    }

    .jszx-bar-item-2 p,
    .jszx-bar-item-2 p {
        height: 2.8em;
        line-height: 2.8em;
    }

    .right_btn {
        width: 4.5em;
        right: 0em;
    }

    /* .right_btn .btn_div {*/
    /*width: 4em;*/
    /*}*/
    .list_row_case {
        padding: 1em;
    }

    .list_row_case div:first-child {
        background: #f7f7f7;
        padding: 1em;
        padding: 0.5em 0.1em 0.5em 0.3em;
        border-radius: 0.5em;
    }

    .list_row_case div p {
        padding: 0.3em;
        line-height: 1.3em;
    }

    }

</style>
