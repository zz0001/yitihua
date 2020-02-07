<template>
    <div data-role="page" id="leader_detail_page">


        <div class="page_header">
            <img class="left_img back-button" src="/staitc/resources/images/icon_white_back.png">
            <div class="page_header_title">任务详情</div>
            <div class="right_img right_btn">处理进度</div>
        </div>
        <div class="page_content">
            <div id="leader_detail_wrapper" class="jszx-wrapper">
                <div class="jszx-scroller">
                    <div class="html_margin white_background">
                        <table class="inp_table" cellpadding="0" cellspacing="0">

                            <tr>
                                <td colspan="3" class="commodityAddImgs">
                                    <div id="leader_detail_img_wrapper" class="jszx-wrapper">
                                        <div class="jszx-scroller" id="leader_detail_img_scroll">
                                            <div id="leader_detail_img">
                                            </div>
                                        </div>
                                    </div>
                                </td>
                            </tr>
                            <tr id="leader_detail_eventComponent_tr">
                                <td style="min-width: 5em;" class="">任务编号</td>
                                <td>
                                    <input readonly id="leader_detail_taskNo" type="text"/>
                                </td>
                            </tr>
                            <tr id="leader_detail_eventComponent_tr">
                                <td style="min-width: 5em;" class="">案件来源</td>
                                <td>
                                    <input readonly id="leader_detail_taskFrom" type="text"/>
                                </td>
                            </tr>
                            <tr id="leader_detail_eventComponent_tr">
                                <td style="min-width: 5em;" class="">处置部门</td>
                                <td>
                                    <input readonly id="leader_detail_taskedDept" type="text"/>
                                </td>
                            </tr>
                            <tr id="leader_detail_eventComponent_tr">
                                <td style="min-width: 5em;" class="">职能事项</td>
                                <td>
                                    <input readonly id="leader_detail_eventComponent" type="text"/>
                                </td>
                            </tr>
                            <tr id="leader_detail_bigClass_tr">
                                <td style="min-width: 5em;" class="">大类</td>
                                <td>
                                    <input readonly id="leader_detail_bigClass" type="text"/>
                                </td>
                            </tr>
                            <tr id="leader_detail_smallClass_tr">
                                <td style="min-width: 5em;" class="">小类</td>
                                <td>
                                    <input readonly id="leader_detail_smallClass" type="text"/>
                                </td>
                            </tr>
                            <tr id="leader_detail_gridCode_tr">
                                <td style="min-width: 5em;" class="">派单时间</td>
                                <td>
                                    <input readonly id="leader_detail_orderTime" type="text"/>
                                </td>
                            </tr>
                            <!-- <tr id="leader_detail_gridCode_tr">
                                <td style="min-width: 5em;" class="">所属网格</td>
                                <td>
                                    <input readonly id="leader_detail_gridCode" type="text"/>
                                </td>
                            </tr> -->

                            <!-- <tr>
                                <td style="min-width: 5em;" class="">上报时间</td>
                                <td>
                                    <input readonly id="leader_detail_reportTime" type="text"/>
                                </td>
                            </tr> -->
                            <tr>
                                <td style="min-width: 5em;" class="">截止时间</td>
                                <td>
                                    <input readonly id="leader_detail_endTime" type="text"/>
                                </td>
                            </tr>
                            <!-- <tr>
                                <td style="min-width: 5em;" class="">位置描述</td>
                                <td id="leader_detail_address" style="padding:1em 0.5em 1em 0em;text-align: right;"></td>
                            </tr> -->
                            <tr>
                                <td style="padding-top:0.5em;">问题描述</td>
                                <td colspan="2">
                                    <input class="small gray_dark_font" style="color:#999999;" readonly="true"/>
                                </td>
                            </tr>
                            <tr>
                                <td colspan="3" style="color:#333333;padding:1em;text-align: left;"
                                    id="leader_detail_problem"></td>
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
        name: "leaderDetail",
        mounted(){
            window.searchPage = 2;
            var that=this;
                initCaseDetail();
                /*返回*/
                $("#leader_detail_page .back-button").listen("quickClick", function (e) {
                    // $.mobile.changePage("../leaderOrder/leaderList.html");
                    that.$router.push({path:'leaderList',query:{}});

                });
                /*处理步骤*/
                $("#leader_detail_page .right_btn").listen("quickClick", function (e) {
                    window.CaseTaskStpsPage = "";
                    //$.mobile.changePage("../leaderOrder/leaderTaskSteps.html");
                    that.$router.push({path:'leaderTaskSteps',query:{}});
                });

            function initCaseDetail() {
                $("#leader_detail_wrapper")[0].style.height = window.localInnerHeight - $("#leader_detail_page .page_header").height() + "px";
                initScroll({
                    "wrapper": "leader_detail_wrapper",
                    "dir": "y",
                    "bounce": false,
                    "scrollBar": true
                });
                scrollToTop("leader_detail_wrapper");
                window.opinionedImgArray = [];
                window.lookType = "";
                $("#leader_detail_page table tr td").addClass("gray_line_bottom");
                $("#leader_detail_page table tr td input").val("");
                $("#leader_detail_page table tr td textarea").val("");
                $("#leader_detail_page #leader_detail_img").empty();
                $("#leader_detail_img_scroll").css("transform", "none");
                $("#leader_detail_img_wrapper .scroll-bar-x").css("transform", "none");
                window.thisCaseQueryType = 2;
                window.upload_imgscroll = "leader_detail_img_scroll";
                window.upload_imgwrapper = "leader_detail_img_wrapper";
                window.upload_addimg = "leader_detail_img";
                $("#leader_detail_img_scroll").css("transform", "none");
                $("#leader_detail_img_wrapper .scroll-bar-x").css("transform", "none");
                app_leaderOrderDetail(window.caseRow_id);
            }

            //接口调用及数据回写
            function app_leaderOrderDetail(row_id) {
                var obj = "";
                obj += toJson("loginId", window.localStorage.loginId) + "&";
                obj += toJson("caseNo", row_id);
                doPost("MobileCaseInfo.action", obj, function (data) {
                    if (data.code == 0) {
                        var array = data.datas;
                        if (array.pics) {
                            $("#leader_detail_page .commodityAddImgs").show();
                            if (array.pics.length > 0) {
                                var info = array.pics;
                                for (var j = 0; j < info.length; j++) {
                                    if (!isNull(info[j])) {
                                        var commodity_add_img_info = ' <div class="imgdiv">';
                                        commodity_add_img_info += '<img class="goodsimgone" src="' + window.imgUrl + info[j] + '">';
                                        commodity_add_img_info += '</div>';
                                        var $commodity_add_img_info = createListRow(commodity_add_img_info).appendTo("#" + window.upload_addimg);
                                        $commodity_add_img_info.data('data', info[j]);
                                        $commodity_add_img_info.listen("quickClick", function (e) {
                                            var data = $(e.currentTarget).data("data");
                                            var arrdata=[];
                                            arrdata.push(data);
                                            var url=window.imgUrl+arrdata[0];
                                            cordova.plugins.StartActivity.startActivity(url,function (data) {
                                            },function (error) {
                                                console.log("startActivity error:" + error);
                                            });

                                        });
                                    }
                                }
                                window.opinionedImgArray = info;
                                imgWidth(window.upload_imgscroll, window.upload_imgwrapper, array.pics.length, window.upload_addimg);
                            } else {
                                $("#leader_detail_page .commodityAddImgs").hide();
                                window.opinionedImgArray = array.pics;
                            }
                            //$("#good_num").val(window.picture_array.length + "/5");
                        } else {
                            $("#leader_detail_page .commodityAddImgs").hide();
                        }
                        //工单编号
                        $("#leader_detail_taskNo").val(array.caseno);
                        //工单来源
                        $("#leader_detail_taskFrom").val(array.origin);
                        //处置部门
                        $("#leader_detail_taskedDept").val(array.deptName);
                        //部件编号
                        //$("#case_task_detail_componentIdNo").val(array.componentIdNo);
                        //所属网格
                        //$("#leader_detail_gridCode").val(array.gridName);
                        //职能事项
                        $("#leader_detail_eventComponent").val(array.eventComponent);
                        //大类
                        $("#leader_detail_bigClass").val(array.bigClass);
                        //小类
                        $("#leader_detail_smallClass").val(array.smallClass);
                        //上报时间
                        //$("#leader_detail_reportTime").val(array.reportTime);
                        //派单时间
                        $("#leader_detail_orderTime").val(array.reportTime);
                        //截止时间
                        $("#leader_detail_endTime").val(array.deadLine);
                        //上报人
                        //$("#case_task_detail_reportPerson").val(array.reportPerson);
                        //联系方式
                        //$("#case_task_detail_reportPersonPhone").val(array.reportPersonPhone);
                        //位置描述
                        //$("#leader_detail_address").html(array.location);
                        //问题描述
                        $("#leader_detail_problem").html(array.problem);
                    } else {
                        //if (reset) {
                        //    reset(true);
                        //}
                        toast(data.message);
                    }
                }, "");
            }
        }
    }

</script>

<style scoped>
    #leader_detail_page .commodityAddImgs {
        overflow: hidden;
        background: #f3f3f3;
    }

    #leader_detail_page .imgdiv {
        padding: 0.7em;
        padding-top: 0em;
        position: relative;
        width: 6em;
        float: left;
    }

    #leader_detail_page .goodsimgone {
        float: left;
        height: 6em;
        width: 6em;
        margin-top: 0.7em;
    }

    #leader_detail_page .delimg {
        width: 2em;
        height: 2em;
        position: relative;
        top: 0em;
        left: 5em;
    }

    #leader_detail_page #leader_detail_img {
        height: 7.5em;
        overflow: hidden;
        display: inline-block;
    }

    #leader_detail_page .goodsimgone {
        float: left;
        height: 6em;
        width: 6em;
        margin-top: 0.7em;
    }

    /*img end*/
    #leader_detail_page .div_input_value_img {
        width: 1.5em;
        height: 1.5em;
        padding-right: 0.5em;
    }

    #leader_detail_page .right_btn {
        width: 4.5em;
        right: 0em;
    }
</style>