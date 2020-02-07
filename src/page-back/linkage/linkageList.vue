<template>
    <div data-role="page" id="wait_linkage_list">


        <tk-header>
            联动处置

        </tk-header>
        <div class="page_content">
            <div id="wait_linkage_wrapper" class="jszx-wrapper">
                <div class="jszx-scroller linkList_home_tab">
                    <table cellpadding="0" cellspacing="0" class="list_table">
                        <!--<tr class="work_welcome_file" id="leaderHandle">-->
                            <!--<th style="position:relative"><img src="../../../static/img/leaderHandle.png" class="more_list_icon">-->
                                <!--<div id="caseinfonum" class="red_num wait_work_welcome_opinion_rednum" style="">11</div>-->
                            <!--</th>-->
                            <!--<td style="padding:0em;">-->
                                <!--<p>领导交办</p>-->
                                <!--<p style="padding-bottom:0.6em;" class="smaller gray_font"></p>-->

                            <!--</td>-->
                            <!--<td><img src="../../../static/img/icon_gray_line_left.png" class="gatwway_list_icon_right">-->
                            <!--</td>-->
                        <!--</tr>-->
                        <!-- 领导查看 -->
                        <tr class="work_welcome_leaderchecked" id="deptApply">
                            <th style="position:relative"><img src="../../../static/img/dept.png" style="height:70px;padding: 1em 1.5em;">
                                <div id="caseDepartmentConum" class="red_num wait_work_welcome_opinion_rednum" style="">11</div>
                            </th>
                            <td style="padding:0em;">
                                <p>部门协办</p>
                                <p style="padding-bottom:0.6em;" class="smaller gray_font"></p>

                            </td>
                            <td style="text-align: right;padding: 0;padding-right: 1em;"><img src="/staitc/resources/images/icon_gray_line_left.png" class="gatwway_list_icon_right">
                            </td>
                        </tr>
                        <!-- 事项统计 -->
                        <!--     <tr class="statistics_analysis" id="administrativeApproval">
                                 <th><img src="../load/images/administrativeApproval.png" class="more_list_icon"></th>
                                 <td style="padding:0em;">
                                     <p>行政审批</p>
                                     <p style="padding-bottom:0.6em;" class="smaller gray_font"></p>
                                 </td>
                                 <td style="text-align: right; padding-right: 1em;"><img src="/staitc/resources/images/icon_gray_line_left.png" class="gatwway_list_icon_right">
                                 </td>
                             </tr>
                             &lt;!&ndash; 部门办件统计 &ndash;&gt;
                             <tr class="statistics_office" id="lawApply">
                                 <th style="position:relative"><img src="../load/images/applicationEnforcement.png" class="more_list_icon">
                                 <div id="comLawnum" class="red_num wait_work_welcome_opinion_rednum" style="">11</div>
                                 </th>
                                 <td style="padding:0em;">
                                     <p>执法申请</p>
                                     <p style="padding-bottom:0.6em;" class="smaller gray_font"></p>

                                 </td>
                                 <td style="text-align: right; padding-right: 1em;"><img src="/staitc/resources/images/icon_gray_line_left.png" class="gatwway_list_icon_right">
                                 </td>
                             </tr>-->
                    </table>

                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        mounted(){
                var that=this;
                initWaitWelcome();
                appWork_getCountNum();
                //返回
                // $("#wait_linkage_list .back-button").listen("quickClick", function (e) {
                //     $.mobile.changePage("../load/welcome.html");
                // });
                //领导交办
                // $("#wait_linkage_list #leaderHandle").listen("quickClick", function (e) {
                //     $.mobile.changePage("../leaderHandle/leaderHandleList.html");
                // });
                //部门发起
                $("#wait_linkage_list #deptApply").listen("quickClick", function (e) {
                    // $.mobile.changePage("../deptHandle/deptHandleList.html");
                    that.$router.push({path:'deptHandleList',query:{}});
                });
                //行政审批
                // $("#wait_linkage_list #administrativeApproval").listen("quickClick", function (e) {
                //     $.mobile.changePage("../administrativeApproval/administrativeApprovalList.html");
                // });
                //执法申请
                // $("#wait_linkage_list #lawApply").listen("quickClick", function (e) {
                //     $.mobile.changePage("../applicationEnforcement/applicationEnforcementList.html");
                // });

            function initWaitWelcome() {
                $("#wait_linkage_wrapper")[0].style.height = window.localInnerHeight - $("#wait_linkage_list .page_header").height() + "px";
                initScroll({
                    "wrapper": "wait_linkage_wrapper",
                    "dir": "y",
                    "bounce": false,
                    "scrollBar": false
                });
                scrollToTop("wait_linkage_wrapper");
                //appWorkOrder_todoTotalByType();
                appWorkOrder_todoTotalByType2();
                appWorkOrder_centerTaskSupervisionLogNum();
                // 添加督办方法
                appWorkOrder_todoTotalSupervision();
                if(window.localStorage.userType=="01"){
                    $("#leaderHandle").show();
                }else{
                    $("#leaderHandle").hide();
                }



            }
            function appWorkOrder_centerTaskSupervisionLogNum() {
                var obj = "";
                obj += toJson("dealDeptId", window.localStorage.deptId);
                doPost("centerTaskSupervisionLogNum.action", obj, function (data) {
                    console.log(data)
                    if (data.num !== 0) {
                        //工单待办总数
                        $(".wait_work_welcome_order_rednum_voice").html(data.num);
                        $(".wait_work_welcome_order_rednum_voice").show();
                    } else {
                        $(".wait_work_welcome_order_rednum_voice").hide();
                        toast(data.message);
                    }
                }, "");
            }
            function appWork_getCountNum() {
                var obj = "";
                obj += toJson("loginId", window.localStorage.loginId);
                doPost("getCount.action", obj, function (data) {
                    console.log(data)
                    if(data.caseinfo==0){
                        $("#caseinfonum").hide();
                    }else{
                        $("#caseinfonum").show();
                    }
                    if(data.caseDepartmentCo==0){
                        $("#caseDepartmentConum").hide();
                    }else{
                        $("#caseDepartmentConum").show();
                    }
                    if(data.comLaw==0){
                        $("#comLawnum").hide();
                    }else{
                        $("#comLawnum").show();
                    }
                    $("#caseinfonum").text(data.caseinfo);
                    $("#caseDepartmentConum").text(data.caseDepartmentCo);
                    $("#comLawnum").text(data.comLaw);

                }, "");
            }
        }
    }
</script>

<style scoped>
    #wait_linkage_list .red_num {
        width: 1.85em;
        height: 1.9em;
        border-radius: 2em;
        line-height: 1.92em;
        border: 1px solid red;
        margin-left: 0em;
        top: 1.2em;
        position: absolute;
        left: 60%;
    }
    .wait_work_welcome_order_rednum_voice{
        width: 1.85em;
        height: 1.9em;
        border-radius: 2em;
        line-height: 1.92em;
        border: 1px solid red;
        margin-left: 0em;
        top: 2.2em;
        position: absolute;
        left: 60%;
        text-align: center;
        padding: 0.1em;
        background: red;
        font-size: 0.5em;
        color: #FFF;
    }
    .linkList_home_tab{
        padding-top: 0.5em;
        padding-bottom: 0.5em;
    }
    #wait_linkage_list .linkList_home_tab > div {
        width: 33.3%;
        height: 5.5em;
        position: relative;
        text-align: center;
        float: left;
    }
    #wait_linkage_list .linkList_home_tab  div p{
        padding-top: 0.4em;
        text-align: center;
        font-size: 0.9em;
    }
</style>