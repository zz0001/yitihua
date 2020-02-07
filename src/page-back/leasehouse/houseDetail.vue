<template>
    <div data-role="page" id="secondhouse_detail_page">

        <div class="page_header">
            <img class="left_img back-button" src="/staitc/resources/images/icon_white_back.png">
            <div class="page_header_title">租户详情</div>

        </div>
        <div class="page_content">
            <div id="secondhouse_detail_wrapper" class="jszx-wrapper">
                <div class="jszx-scroller">
                    <div id="secondhouseDetail_html" class="html_margin white_background">
                        <table class="inp_table" cellpadding="0" cellspacing="0">

                            <tr>
                                <td style="min-width: 5em;" class="">租户公民身份号码</td>
                                <td colspan="2">
                                    <input id="houseDetail_idNo" readonly type="text"/>
                                </td>
                            </tr>
                            <tr>
                                <td style="min-width: 5em;" class="">租户姓名</td>
                                <td colspan="2">
                                    <input id="houseDetail_idName" readonly type="text"/>
                                </td>
                            </tr>
                            <tr >
                                <td style="min-width: 5em;" class="">租户联系方式</td>
                                <td colspan="2">
                                    <input readonly id="houseDetail_phoneNo" type="tel"/>
                                </td>
                            </tr>
                            <tr id="deadline2_tr">
                                <td style="min-width: 5em;" class="">租户籍贯</td>
                                <td colspan="2">
                                    <input readonly id="houseDetail_nativePlace" type="tel"/>
                                </td>
                            </tr>
                            <tr>
                                <td style="min-width: 5em;" class="">性别</td>
                                <td colspan="2">
                                    <input readonly id="houseDetail_sex" type="text"/>
                                </td>
                            </tr>

                            <tr>
                                <td style="min-width: 5em;" class="">暂住证号</td>
                                <td colspan="2">
                                    <input readonly id="houseDetail_stayNo" type="text"/>
                                </td>
                            </tr>
                            <tr>
                                <td style="min-width: 5em;" class="">人员类型</td>
                                <td colspan="2">
                                    <input readonly id="houseDetail_personType" type="text"/>
                                </td>
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
       mounted(){
           window.searchPage = 2;
           $("#secondhouse_detail_page").live("pageshow", function () {
               cleanCaseTaskDetail();
               initLeaderHandleDetail();

               /*返回*/
               $("#secondhouse_detail_page .back-button").listen("quickClick", function (e) {
                   //$.mobile.changePage("../leaderHandle/leaderHandleList.html");
                   // window.history.back();
                   $.mobile.changePage("../leasehouse/houseStatistics.html");
               });




           });
           function initLeaderHandleDetail() {
               $("#secondhouse_detail_wrapper")[0].style.height = window.localInnerHeight - $("#secondhouse_detail_page .page_header").height() - $("#secondhouse_detail_page .page_footer").height() + "px";
               $("#secondhouse_detail_page .page_content").css("height", window.localInnerHeight - $("#secondhouse_detail_page .page_header").height() - $("#secondhouse_detail_page .page_footer").height() + "px");

               initScroll({
                   "wrapper": "secondhouse_detail_wrapper",
                   "dir": "y",
                   "bounce": false,
                   "scrollBar": true
               });
               scrollToTop("secondhouse_detail_wrapper");
               $("#secondhouse_detail_page table tr td").addClass("gray_line_bottom");

               secondhouseDetailInfo();
           }
           function cleanCaseTaskDetail() {
               $("#secondhouse_detail_page table tr td input").val("");
               $("#secondhouse_detail_page table tr td textarea").val("");
               $("#secondhouse_detail_page #leader_handle_detail_img").empty();
               window.caseTaskOneTaskId = "";
               $(".max-dialog").remove();
               $("#leader_handle_detail_img_scroll").css("transform", "none");
               $("#leader_handle_detail_img_wrapper .scroll-bar-x").css("transform", "none");
               window.operationListArrayInfo = [];
           }
           function secondhouseDetailInfo(){


               //接口入参
               var obj = "";
               obj += toJson("id",  window.houseid);
               //集中整治详情接口
               doPost("ap_findTenementDetail.action", obj, function (data) {

                   $("#houseDetail_idNo").val(data.idNo);
                   $("#houseDetail_idName").val(data.idName);
                   $("#houseDetail_phoneNo").val(data.phoneNo);

                   $("#houseDetail_nativePlace").val(data.nativePlace);
                   var sex=""
                   if(data.sex=="1"){
                       sex="男";
                   }else{
                       sex="女";
                   }
                   $("#houseDetail_sex").val(sex);
                   $("#houseDetail_stayNo").val(data.stayNo);
                   var personType=""
                   if(data.personType=="1"){
                       personType="承租人";
                   }else if(data.personType=="2"){
                       personType="二房东";
                   }else if(data.personType=="3"){
                       personType="共住人";
                   }
                   $("#houseDetail_personType").val(personType);
               }, "");
           }
       }
    }
</script>

<style scoped>
    #secondhouse_detail_page .commodityAddImgs {
        overflow: hidden;
        background: #f3f3f3;
    }

    #secondhouse_detail_page .imgdiv {
        padding: 0.7em;
        padding-top: 0em;
        position: relative;
        width: 6em;
        float: left;
    }

    #secondhouse_detail_page .goodsimgone {
        float: left;
        height: 6em;
        width: 6em;
        margin-top: 1em;
    }

    #secondhouse_detail_page #case_detail_img {
        height: 7.5em;
        overflow: hidden;
        display: inline-block;
    }

    /*img end*/
    #secondhouse_detail_page .jszx-bar-item-2 > div {
        width: 50%;
    }

    #secondhouse_detail_page .jszx-bar-item-2 p,
    .jszx-bar-item-2 p {
        height: 2.8em;
        line-height: 2.8em;
    }

    #secondhouse_detail_page .right_btn {
        width: 4.5em;
        right: 0em;
    }
</style>
