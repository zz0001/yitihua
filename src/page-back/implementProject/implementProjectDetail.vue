<template>
    <div data-role="page" id="implement_detail_page">

        <tk-header>
            实事详情

        </tk-header>

        <div class="page_content">
            <div id="implement_detail_wrapper" class="jszx-wrapper">
                <div class="jszx-scroller">
                    <div id="implement_detail_html" class="html_margin white_background">
                        <table class="inp_table" cellpadding="0" cellspacing="0" border="0" id="firstTable">
                            <tr>
                                <td colspan="2" style="padding-left: 1.3em;background: #ededed;"><div class="projectname_line"></div><input  id="implement_project_name" style="font-weight: bold;margin-left:1em;display: inline-block;width: 92%;background: #ededed;font-size:18px;" readonly type="text"/></td>
                            </tr>
                            <tr>
                                <td><div style="text-align:center;border-right: 1px solid #d8d5d5;margin-top: 10px;margin-bottom: 10px;"><div class="allfont_color">问题数</div><div class="oranger_font" id="imp_questionNum">0</div></div></td>
                                <td><div style="text-align:center;margin-top: 10px;margin-bottom: 10px;"><div class="allfont_color">督办数</div><div class="green_font" id="imp_superviseNum">0</div></div></td>
                            </tr>
                        </table>
                        <div style="height:18px;background-color:#ededed;"></div>
                        <table class="inp_table" cellpadding="0" cellspacing="0" border="0" id="secondTable">
                            <tr >
                                <td colspan="4" class="table_title">项目详情</td>
                            </tr>
                            <tr>
                                <td class="allfont_color" colspan="4" style="padding-left: 1.3em;">项目编号：<span id="implement_project_no" class="nextfont_color"></span></td>
                            </tr>
                            <tr>
                                <td class="allfont_color" colspan="4" style="padding-left: 1.3em;">所属区域：<span id="projectarea" class="nextfont_color"></span></td>
                            </tr>
                            <tr>
                                <td class="allfont_color" colspan="4" style="padding-left: 1.3em;">项目性质：<span id="implement_project_type" class="nextfont_color"></span></td>
                            </tr>
                            <tr>
                                <td class="allfont_color" colspan="4" style="padding-left: 1.3em;">项目类型：<span id="classification_type" class="nextfont_color"></span></td>
                            </tr>
                            <tr>
                                <td class="allfont_color" colspan="4" style="padding-left: 1.3em;">责任单位：<span id="responsibility_unit" class="nextfont_color"></span></td>
                            </tr>
                            <tr>
                                <td class="allfont_color" colspan="4" style="padding-left: 1.3em;">主导产业：<span id="leading_industry" class="nextfont_color"></span></td>
                            </tr>
                            <tr>
                                <td class="allfont_color" colspan="4" style="padding-left: 1.3em;">新兴产业：<span id="emerging_industry" class="nextfont_color"></span></td>
                            </tr>
                            <tr>
                                <td class="allfont_color" colspan="4" style="padding-left: 1.3em;">投资单位：<span id="investment_unit" class="nextfont_color"></span></td>
                            </tr>

                            <tr><td style="height:1em;"> </td></tr>
                            <tr>
                                <td colspan="4" class="allfont_color" style="padding-left: 1.3em;padding-top:1em;padding-bottom:1em;border-top: 1px solid #e6e6e6;">项目分类：<span id="classification" class="nextfont_color"></span></td>
                            </tr>
                            <tr>
                                <td colspan="4" class="allfont_color" style="padding-top:1em;border-top: 1px solid #e6e6e6;">主要建设内容:</td>

                            </tr>
                            <tr>
                                <td colspan="4" id="construction_content" class="nextfont_color" style="padding-bottom:1em;">
                                    111
                                </td>
                            </tr>
                            <tr>
                                <td colspan="4" class="allfont_color" style="padding-top:1em;border-top: 1px solid #e6e6e6;">年度计划内容:</td>

                            </tr>
                            <tr>
                                <td colspan="4" id="plan_content" class="nextfont_color" style="padding-bottom:1em;">
                                    111
                                </td>
                            </tr>
                        </table>
                        <div style="height:18px;background-color:#ededed;"></div>
                        <table class="inp_table" cellpadding="0" cellspacing="0" border="0" id="thirdTable">
                            <tr>
                                <td colspan="4" class="table_title">责任人和联络员</td>
                            </tr>
                            <tr><td style="height:1em;"> </td></tr>
                            <tr>
                                <td class="allfont_color" colspan="4" style="padding-left: 1.3em;">分管领导：<span id="leaders_charge" class="nextfont_color"></span></td>
                            </tr>
                            <tr>
                                <td class="allfont_color" colspan="4" style="padding-left: 1.3em;">手机：<span id="leaders_charge_phone" class="nextfont_color"></span></td>
                            </tr>
                            <tr>
                                <td class="allfont_color" colspan="4" style="padding-left: 1.3em;">联络员：<span id="liaison_man" class="nextfont_color"></span></td>
                            </tr>

                            <tr>
                                <td class="allfont_color" colspan="4" style="padding-left: 1.3em;">手机：<span id="liaison_man_phone" class="nextfont_color"></span></td>
                            </tr>

                            <tr><td style="height:1em;border-top: 1px solid #e6e6e6;"> </td></tr>

                        </table>
                        <div style="height:18px;background-color:#ededed;"></div>
                        <table class="inp_table" cellpadding="0" cellspacing="0" border="0" id="fourTable">
                            <tr>
                                <td colspan="2" class="table_title" style="padding: 1em 1em;">用地详情</td>
                            </tr>
                            <tr><td style="height:1em;"> </td></tr>
                            <tr>
                                <td style="width:48%"><div style="text-align:center;padding-top: 1em;" >
                                    <div>占地面积</div><div class="blue_font" id="area_covered">0</div></div></td>
                                <td style="width:50%;border-left:1px solid #d8d5d5;padding-left: 10px;"><div style="text-align:center;"><div>是否符合总体规划</div><div class="green_font" id="ismaster_plan">0</div></div></td>
                            </tr>
                            <tr><td style="height:1em;"> </td></tr>
                            <tr>
                                <td colspan="2" class="allfont_color" style="padding-top:1em;padding-bottom:1em;padding-left:1em;border-top: 1px solid #e6e6e6;">规划调整详情:</td>

                            </tr>
                            <tr>
                                <td colspan="2" id="planning_adjustment" class="nextfont_color" style="padding-bottom:1em;padding-left:1em;">

                                </td>
                            </tr>
                            <tr>
                                <td colspan="2" class="allfont_color" style="padding-top:1em;padding-bottom:1em;padding-left:1em;border-top: 1px solid #e6e6e6;">土地落实情况:</td>

                            </tr>
                            <tr>
                                <td colspan="2" id="land_implementation" class="nextfont_color" style="padding-bottom:1em;padding-left:1em;">
                                    1111
                                </td>
                            </tr>
                        </table>

                        <div style="height:18px;background-color:#ededed;"></div>


                        <table class="inp_table" cellpadding="0" cellspacing="0">



                            <tr>
                                <td  colspan="3" class="table_title" style="padding-top:1em;">项目进度</td>

                            </tr>
                            <tr style="border-top: 1px solid #e6e6e6;">
                                <td style="min-width: 10em;" class=""><span class="blue_font"> < </span>总投资</td>
                                <td colspan="2">
                                    <input id="totalInvestment" readonly type="text" class="oranger_font"/>
                                </td>
                            </tr>
                            <tr>
                                <td style="min-width: 10em;" class=""><span class="blue_font"> < </span>年度计划投资</td>
                                <td colspan="2">
                                    <input id="yearPlanInvestment" readonly type="text" class="oranger_font"/>
                                </td>
                            </tr>
                            <tr>
                                <td style="min-width: 10em;" class=""><span class="blue_font"> < </span>年度完成投资</td>
                                <td colspan="2">
                                    <input id="yearFinishInvestment" readonly type="text" class="oranger_font"/>
                                </td>
                            </tr>
                            <tr>
                                <td style="min-width: 10em;" class=""><span class="blue_font"> < </span>年度完成率</td>
                                <td colspan="2">
                                    <input id="completion_rate" readonly type="text" class="oranger_font"/>
                                </td>
                            </tr>

                        </table>
                        <div style="height:18px;background-color:#ededed;"></div>
                        <table class="inp_table" cellpadding="0" cellspacing="0">
                            <tr >
                                <td colspan="3" class="table_title" style="padding-top:1em;">形象进度</td>
                            </tr>
                            <tr>
                                <td id="yearLineList" colspan="3">
                                    <div class="contentyear"><div class="mark"></div><div class="name"><span></span><span class="planinfo">123</span></div><div class="mark"></div></div>
                                    <div class="contentyear"><div class="mark"></div><div class="name"><span></span><span class="planinfo">123</span></div><div class="mark"></div></div>
                                    <div class="contentyear"><div class="mark"></div><div class="name"><span></span><span class="planinfo">123</span></div><div class="mark"></div></div>
                                </td>
                            </tr>
                        </table>
                        <div style="height:18px;background-color:#ededed;"></div>

                        <table class="inp_table" cellpadding="0" cellspacing="0">
                            <tr >
                                <td colspan="3" class="table_title" style="padding-top:1em;">项目图示</td>
                            </tr>

                        </table>

                        <div style="text-align:center;padding-top: 1em;">
                            <div id="monthInvestmentAmount" class="echartsDiv1" style="width:150px;background-color:#3977E6;color:#fff;">月度投资额(万元)</div><div id="investmentCompletionRate" class="echartsDiv1" style="width:150px;">投资完成率（%）</div>
                        </div>
                        <div>
                            <div id="impDetailEcharts" style="width: 100%;height:400px"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="page_footer">
            <div class="footer_button_div">
                <div id="gotoSupervise" class="alert_bottom_three orange_background" style="display: inline-block;width: 39%;margin-right:0;">督察督办</div>
                <div id="gotoQuestion" class="alert_bottom_three orange_background" style="display: inline-block;width: 39%;margin-left:20px;">问题反馈</div>
            </div>
        </div>
        <div id="dbfooter" class="page_footer">
            <div class="footer_button_div">
                <div id="dbgotoSupervise" class="alert_bottom_three orange_background" style="display: inline-block;width: 85%;margin-right:0;">督察督办</div>
            </div>
        </div>
        <div id="wtfooter" class="page_footer">
            <div class="footer_button_div">
                <div id="wtgotoQuestion" class="alert_bottom_three orange_background" style="display: inline-block;width: 85%;margin-right:0;">问题反馈</div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "",
        mounted(){
            window.searchPage = 2;

                if(window.localStorage.userType=="01"){
                    $(".page_footer").show();
                }else{
                    $(".page_footer").hide();
                }
                if(window.localStorage.userType=="08"){
                    if(window.SuperviseAndIssueType=="1"){
                        $("#dbfooter").show();
                    }else{
                        $("#wtfooter").show();
                    }

                }else{
                    $("#dbfooter").hide();
                    $("#wtfooter").hide();
                }

                initImplementDetail();
                /* if (!window.CaseTaskDetailPage) {
                    cleanCaseTaskDetail();
                    app_workOrderDetail(window.caseRow_id);
                    window.CaseTaskDetailPage = true;
                } */
                /*返回*/
                $("#implement_detail_page .back-button").listen("quickClick", function (e) {


                    if(window.localStorage.userType=="08"){
                        $.mobile.changePage("../implementProject/dbList.html");

                    }else{
                        $.mobile.changePage("../implementProject/implementProjectList.html");
                    }

                });
                //图片
                $("#yearLineList").on("click",".findbigpath",function(e){
                    var src=$(e.currentTarget).attr('path');
                    var arr=[];
                    arr.push(src);
                    window.opinionedImgArray=arr;
                    window.lookType = "opinioned";
                    $.mobile.changePage("../casetask/photoLook.html");
                })
                //选择
                $("#implement_detail_page #selecttr").listen("quickClick", function (e) {
                    getselectoption();
                });
                //督办
                $("#gotoSupervise").listen("quickClick", function (e) {
                    window.detailFlag="detail";
                    $.mobile.changePage("../implementProject/replyList.html");
                });
                //督办
                $("#gotoQuestion").listen("quickClick", function (e) {
                    window.detailFlag="detail";
                    $.mobile.changePage("../implementProject/feedbackList.html");
                });
                //督办
                $("#dbgotoSupervise").listen("quickClick", function (e) {
                    window.detailFlag="detail";
                    $.mobile.changePage("../implementProject/replyList.html");
                });
                //督办
                $("#wtgotoQuestion").listen("quickClick", function (e) {
                    window.detailFlag="detail";
                    $.mobile.changePage("../implementProject/feedbackList.html");
                });
                $("#implement_detail_page .right_img").listen("quickClick", function (e) {
                    $.mobile.changePage("../implementProject/investmentInformationList.html");
                });

                //投资完成量(亿元)
                $("#implement_detail_page #monthInvestmentAmount").listen("quickClick", function (e) {
                    $(".echartsDiv1").css("background-color","#fff");
                    $(".echartsDiv1").css("color","#3977E6");
                    $("#monthInvestmentAmount").css("background-color","#3977E6");
                    $("#monthInvestmentAmount").css("color","#fff");
                    findMonthInvestmentAmount_ss(window.localStorage.implementationid);
                });
                //年度完成率(%)
                $("#implement_detail_page #investmentCompletionRate").listen("quickClick", function (e) {
                    $(".echartsDiv1").css("background-color","#fff");
                    $(".echartsDiv1").css("color","#3977E6");
                    $("#investmentCompletionRate").css("background-color","#3977E6");
                    $("#investmentCompletionRate").css("color","#fff");
                    findMonthInvestmentRate_ss(window.localStorage.implementationid);
                });

                /*办理*/
                $("#implement_detail_page .footer_button_div").listen("quickClick", function (e) {
                    console.log("数据：" + JSON.stringify(window.operationListArrayInfo));
                    if (!isNull(window.operationListArrayInfo) && window.operationListArrayInfo.length > 0) {
                        showChoiceOne();
                        setTimeout(function(){
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
                                    var data = $(e.currentTarget).data("data");
                                    console.log("type:" + JSON.stringify(data));
                                    window.caseOneTaskAction = data;
                                    $.mobile.changePage("../casetask/caseTaskEdit.html");
                                });
                            }
                        },500);

                    }
                    //   $.mobile.changePage("../visit/case_task_detail.html");
                });

            function initImplementDetail() {
                $("#implement_detail_wrapper")[0].style.height = window.localInnerHeight - $("#implement_detail_page .page_header").height() - $("#implement_detail_page .page_footer").height() + "px";
                $("#implement_detail_page .page_content").css("height", window.localInnerHeight - $("#implement_detail_page .page_header").height() - $("#implement_detail_page .page_footer").height() + "px");

                initScroll({
                    "wrapper": "implement_detail_wrapper",
                    "dir": "y",
                    "bounce": false,
                    "scrollBar": true
                });
                scrollToTop("implement_detail_wrapper");
                // $("#implement_detail_page table tr td").addClass("gray_line_bottom");
                window.upload_imgscroll = "appEnfor_detail_img_scroll";
                window.upload_imgwrapper = "appEnfor_detail_img_wrapper";
                window.upload_addimg = "appEnfor_detail_img";


                implementProjectInfo();

            }
            function cleanCaseTaskDetail() {
                $("#implement_detail_page table tr td input").val("");
                $("#implement_detail_page table tr td textarea").val("");
                $("#implement_detail_page #appEnfor_detail_img").empty();
                window.caseTaskOneTaskId = "";
                $(".max-dialog").remove();
                $("#appEnfor_detail_img_scroll").css("transform", "none");
                $("#appEnfor_detail_img_wrapper .scroll-bar-x").css("transform", "none");
                window.operationListArrayInfo = [];
            }
            function implementProjectInfo(){
                var id=window.implementInfo.id;

                //接口入参
                var obj = "";
                obj += toJson("id", id) + "&";
                obj += toJson("pageSize", "20") + "&";
                obj += toJson("pageNum", "1");
                //集中整治详情接口
                doPost("ap_proticalProjectList.action", obj, function (data) {

                    var classification_type = data.datas[0].firstlevel+"/"+data.datas[0].secondlevel+"/"+data.datas[0].thirdlevel;
                    $("#imp_questionNum").text(data.datas[0].issueno);
                    $("#imp_superviseNum").text(data.datas[0].superviseno);
                    $("#implement_project_no").text(data.datas[0].projectno);
                    $("#implement_project_name").val(data.datas[0].projectname);
                    var projectnature="";
                    if(data.datas[0].projectnature=="1"){
                        projectnature="新开工";
                    }else if(data.datas[0].projectnature=="2"){
                        projectnature="结转续建";
                    }else if(data.datas[0].projectnature=="3"){
                        projectnature="前期项目";
                    }
                    $("#implement_project_type").text(projectnature);

                    $("#responsibility_unit").text(data.datas[0].responsibleunits);
                    $("#investment_unit").text(data.datas[0].investmentunit);
                    var leadingindustry="";
                    if(data.datas[0].leadingindustry=="1"){
                        leadingindustry="食品";
                    }else if(data.datas[0].leadingindustry=="2"){
                        leadingindustry="汽车";
                    }else if(data.datas[0].leadingindustry=="3"){
                        leadingindustry="建筑";
                    }else if(data.datas[0].leadingindustry=="4"){
                        leadingindustry="电子";
                    }
                    $("#leading_industry").text(leadingindustry);
                    var emergingindustry=data.datas[0].emergingindustry;
                    if(data.datas[0].emergingindustry=="1"){
                        emergingindustry="信息";
                    }else if(data.datas[0].emergingindustry=="2"){
                        emergingindustry="生物";
                    }else if(data.datas[0].emergingindustry=="3"){
                        emergingindustry="新材料";
                    }else if(data.datas[0].emergingindustry=="4"){
                        emergingindustry="新能源";
                    }
                    $("#emerging_industry").text(emergingindustry);
                    var projecttype=data.datas[0].projecttype;
                    if(data.datas[0].projecttype=="1"){
                        projecttype="道路市政";
                    }else if(data.datas[0].projecttype=="2"){
                        projecttype="动迁及有机更新";
                    }else if(data.datas[0].projecttype=="3"){
                        projecttype="环境整治";
                    }else if(data.datas[0].projecttype=="4"){
                        projecttype="绿化景观";
                    }else if(data.datas[0].projecttype=="5"){
                        projecttype="社会事业";
                    }else if(data.datas[0].projecttype=="6"){
                        projecttype="水利工程";
                    }else if(data.datas[0].projecttype=="7"){
                        projecttype="特色田园乡镇";
                    }
                    $("#classification").text(projecttype);
                    $("#classification_type").text(classification_type);
                    $("#projectarea").text(data.datas[0].area);
                    var status="";
                    if(data.datas[0].status=="01"){
                        status="待审核";
                    }else if(data.datas[0].status=="02"){
                        status="审核通过";
                    }else{
                        status="审核未通过";
                    }
                    $("#projectstatus").val(status);
                    $("#construction_content").text(data.datas[0].constructioncontent);

                    $("#leaders_charge").text(data.datas[0].leader);
                    $("#leaders_charge_phone").text(data.datas[0].leaderphone);
                    $("#liaison_man").text(data.datas[0].liaisonman);
                    $("#liaison_man_phone").text(data.datas[0].liaisonphone);
                    var floorspace=data.datas[0].floorspace;
                    if(data.datas[0].floorspace==""){
                        floorspace="0"
                    }
                    $("#area_covered").text(floorspace);
                    var resulttype="";
                    if(data.datas[0].resulttype=="0"){
                        resulttype="否";
                    }else{
                        resulttype="是";
                    }
                    $("#ismaster_plan").text(resulttype);
                    var situation="";
                    if(data.datas[0].situation=="0"){
                        situation="未落实";
                    }else{
                        situation="已落实";
                    }
                    $("#land_implementation").text(situation);
                    $("#planning_adjustment").text(data.datas[0].adjustdetail);
                    window.localStorage.implementationid=data.datas[0].id;
                    appprojectInvestment(data.datas[0].id);
                    findMonthInvestmentAmount_ss(data.datas[0].id);
                    window.projectname=data.datas[0].projectname;
                }, "");
            }
            //年度计划
            function appprojectInvestment(projectno) {


                var obj = "";
                obj += toJson("projectno", projectno);

                doPost("ap_projectInvestment.action", obj, function (data) {

                    $("#yearLineList").empty();
                    if (data.total > 0) {
                        var html='';
                        var array = data.datas;
                        selectyearoption(array);
                        if(array[0].monthlyProgress.length>0){
                            var len=array[0].monthlyProgress.length;
                            var lastdetail=array[0].monthlyProgress[len-1].detail;
                            var lastdetailarr=lastdetail.split(",");
                            $("#yearFinishInvestment").val(lastdetailarr[2]);
                            $("#completion_rate").val(lastdetailarr[3]);
                            window.montharr=[];
                            window.monthInvestmentAmount=[];
                            window.monthCompletionRate=[];
                            for (var i = 0; i < len; i++) {
                                var curr=array[0].monthlyProgress[i].detail;
                                var currarr=curr.split(",");
                                //html+='<div><span>'+array[0].monthlyProgress[i].month+'月</span><div class="contentyear"><div class="mark"></div><div class="name"><span></span><span class="planinfo"> 当月完成投资'+ currarr[0]+'万元</span></div><div class="mark"></div></div></div>'
                                html+='<div >';
                                html+='<div class="stepone">'+array[0].monthlyProgress[i].month+'月</div>'
                                html+='<div class="steptwo"><span></span></div>'
                                html+='<div class="stepthree" style="min-height: 2em;">'+ array[0].monthlyProgress[i].progressDetail;
                                html+='<div style="width:250px;overflow-x: auto;">';
                                if(array[0].monthlyProgress[i].path!==""){
                                    var pstharr=array[0].monthlyProgress[i].path.split(";");
                                    for(var j=0;j<pstharr.length;j++){
                                        var src=window.imgUrl+pstharr[j];
                                        html+='<img class="findbigpath" path="'+pstharr[j]+'" style="width:100px;height:100px;margin-right:10px;" src="'+src+'">';
                                    }


                                }

                                html+='</div>';
                                html+='</div></div>';
                            }
                        }
                        $("#yearLineList").html(html);

                        var total=0;
                        for(var j=0;j<array.length;j++){
                            total+=parseInt(array[j].investmentamount);
                        }
                        $("#totalInvestment").val(total);

                        $("#yearPlanInvestment").val(array[0].investmentamount);



                    }

                }, "");
            }
            function selectyearoption(data){
                var option='';
                option+='<select style="display: inline-block;width: 72%;">'
                for(var i = 0; i < data.length; i++){
                    var se='selected="selected"';
                    if(i==0){

                    }else{
                        se = "";
                    }
                    option+='<option value="'+data[i].id+'" '+se+'>'+data[i].planyear+'年度</option>'
                }
                option+='</select>'
                $("#yearSelect").html(option);
            }
            $("#yearSelect").on("change", "select", function(){
                var id=$(this).val();
                var obj = "";
                obj += toJson("projectno", window.localStorage.implementationid) + "&";
                obj += toJson("id", id);

                doPost("ap_projectInvestment.action", obj, function (data) {
                    var html='';
                    if(data.total>0){
                        var array = data.datas[0];
                        if(array.monthlyProgress.length>0){
                            var len=array.monthlyProgress.length;
                            var lastdetail=array.monthlyProgress[len-1].detail;
                            var lastdetailarr=lastdetail.split(",");

                            for (var i = 0; i < len; i++) {
                                var curr=array.monthlyProgress[i].detail;
                                var currarr=curr.split(",");
                                //html+='<div class="contentyear"><div class="mark"></div><div class="name"><span></span><span class="planinfo">'+array.monthlyProgress[i].month+'月  当月完成投资'+ currarr[0]+'万元</span></div><div class="mark"></div></div>'
                                html+='<div >';
                                html+='<div class="stepone">'+array[0].monthlyProgress[i].month+'月</div>'
                                html+='<div class="steptwo"><span></span></div>'
                                html+='<div class="stepthree" style="min-height: 2em;">'+ array[0].monthlyProgress[i].progressDetail;
                                html+='<div style="width:250px;overflow-x: auto;">';
                                if(array[0].monthlyProgress[i].path!==""){
                                    var pstharr=array[0].monthlyProgress[i].path.split(";");
                                    for(var j=0;j<pstharr.length;j++){
                                        var src=window.imgUrl+pstharr[j];
                                        html+='<img class="findbigpath" path="'+pstharr[j]+'" style="width:100px;height:100px;margin-right:10px;" src="'+src+'">'
                                    }


                                }

                                html+='</div>';
                                html+='</div></div>';
                            }
                        }
                        $("#yearLineList").html(html);

                        //$("#totalInvestment").val(lastdetailarr[0]);
                        $("#yearPlanInvestment").val(array.investmentamount);
                        $("#yearFinishInvestment").val(lastdetailarr[2]);
                        $("#completion_rate").val(lastdetailarr[3]);
                    }
                }, "");
            })
            //折现图
            function showlineEcharts_ss(data){

                var myChart = echarts.init(document.getElementById('impDetailEcharts'));
                myChart.clear();
                //初始化数据


                option = {
                    tooltip: {
                        trigger: 'item',
                        formatter: '{a} <br/>{b} : {c}'
                    },

                    xAxis: {
                        type: 'category',
                        splitLine: {show: false},
                        axisLabel : {//坐标轴刻度标签的相关设置。
                            interval:0,
                            rotate:"45"
                        },
                        data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月']
                    },
                    grid: {
                        left: '3%',
                        right: '4%',
                        bottom: '3%',
                        containLabel: true
                    },
                    yAxis: {
                        type: 'value',
                        axisLabel: {
                            inside: true,
                            textStyle: {
                                color: '#fff'
                            }
                        },
                        axisTick: {
                            show: false
                        },
                        axisLine: {
                            show: false
                        },
                        splitLine:{show: false}
                    },
                    series: [
                        {
                            name: '新增项目数',
                            type: 'line',
                            itemStyle : { normal: {label : {show: true}}},
                            color: '#3977E6',
                            data: data
                        }
                    ]
                };

                myChart.setOption(option);
            }
            //柱状图
            function showBarEcharts_ss(sum){

                var myChart = echarts.init(document.getElementById('impDetailEcharts'));
                myChart.clear();
                //初始化数据

                var barData = sum;

                option = {
                    color: ['#3977E6'],
                    tooltip : {
                        trigger: 'axis',
                        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                        }
                    },
                    grid: {
                        left: '3%',
                        right: '4%',
                        bottom: '3%',
                        containLabel: true
                    },
                    xAxis : [
                        {
                            type : 'category',
                            data : ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"],
                            axisTick: {
                                alignWithLabel: true
                            },
                            axisLabel : {//坐标轴刻度标签的相关设置。
                                interval:0,
                                rotate:"45"
                            }
                        }
                    ],
                    yAxis : [
                        {
                            type : 'value',
                            axisLabel: {
                                inside: true,
                                textStyle: {
                                    color: '#fff'
                                }
                            },
                            axisTick: {
                                show: false
                            },
                            axisLine: {
                                show: false
                            },
                            splitLine:{show: false}
                        }
                    ],
                    series : [
                        {
                            name:'投资额',
                            type:'bar',
                            barWidth: '60%',
                            itemStyle: {
                                normal: {
                                    label: {
                                        show: true, //开启显示
                                        position: 'top', //在上方显示
                                        textStyle: { //数值样式
                                            color: 'black',
                                            fontSize: 16
                                        }
                                    }
                                }
                            },
                            data:barData
                        }
                    ]
                };

                myChart.setOption(option);
            }
            //查数据柱状图
            function findMonthInvestmentAmount_ss(projectno){
                var obj = "";
                obj += toJson("projectno", projectno);
                doPost("findMonthInvestmentAmount.action", obj, function (data) {

                    console.log(data);
                    showBarEcharts_ss(data);

                }, "");

            }
            //查数据折线图
            function findMonthInvestmentRate_ss(projectno){
                var obj = "";
                obj += toJson("projectno", projectno);
                doPost("findMonthInvestmentRate.action", obj, function (data) {

                    console.log(data);
                    showlineEcharts_ss(data);

                }, "");

            }
        }
    }
</script>

<style scoped>
    #implement_detail_page .commodityAddImgs {
        overflow: hidden;
        background: #f3f3f3;
    }

    #implement_detail_page .imgdiv {
        padding: 0.7em;
        padding-top: 0em;
        position: relative;
        width: 6em;
        float: left;
    }

    #implement_detail_page .goodsimgone {
        float: left;
        height: 6em;
        width: 6em;
        margin-top: 1em;
    }

    #implement_detail_page #case_detail_img {
        height: 7.5em;
        overflow: hidden;
        display: inline-block;
    }

    /*img end*/
    #implement_detail_page .jszx-bar-item-2 > div {
        width: 50%;
    }

    #implement_detail_page .jszx-bar-item-2 p,
    .jszx-bar-item-2 p {
        height: 2.8em;
        line-height: 2.8em;
    }

    #implement_detail_page .right_btn {
        width: 4.5em;
        right: 0em;
    }

    /*#implement_detail_page .right_btn .btn_div {*/
    /*width: 4em;*/
    /*}*/
    #yearLineList .contentyear{
        height: 3.3125em;
        display:inline-block;
        margin-left:0.5em;
    }
    #yearLineList .contentyear .mark{
        width: 1px;
        height: 1.1em;
        background-color: #acacac;
        margin-left: 8px;
    }
    #yearLineList .contentyear .name{
        line-height: 1em;
    }
    #yearLineList .contentyear .name span{
        display:inline-block;
    }
    #yearLineList .contentyear .name span:nth-child(1) {
        background: url(/staitc/resources/images/green2x.png) no-repeat;
        background-size: 18px 18px;
        width: 18px;
        height: 18px;
        display: inline-block;
        text-align: center;
        color: #fff;
        margin-right: 10px;
    }
    #firstTable tr td:first-child,#fourTable tr td:first-child {
        padding:0;
    }
    #secondTable tr td:first-child,#thirdTable tr td:first-child{
        padding-top:1em;
    }
    #firstTable tr td:last-child input, #firstTable tr td:last-child textarea, .input_no_border{
        text-align:left;
    }
    #secondTable tr td:last-child input, #secondTable tr td:last-child textarea, .input_no_border{
        text-align:left;

    }
    #secondTable tr td,#thirdTable tr td,#fourTable tr td{
        padding-top:1em;
    }
    .echartsDiv1{
        display:inline-block;
        line-height: 2em;
        border:1px solid #3977E6;
        color:#3977E6;
    }
    .stepone{
        width: 15%;
        float: left;
    }
    .steptwo{
        float: left;
        width: 8%;
        background: url(/staitc/resources/images/green2x.png) no-repeat;
        background-size: 18px 18px;
        width: 18px;
        height: 18px;
        display: inline-block;
        text-align: center;
        color: #fff;
        margin-right: -10px;
        z-index: 10000000;
        position: relative;
    }
    .stepthree{
        width: 74%;
        float: left;
        padding-left: 20px;
        border-left: 1px solid #ccc;
    }
    #implement_detail_page .projectname_line{
        display:inline-block;width:5px;height:22px;background:#2b6cd2;vertical-align: middle;
    }
    #implement_detail_page .green_font{
        color:#3d8607;
    }
    #implement_detail_page .blue_font{
        color:#6589e9;
    }
    #implement_detail_page .common_font{
        color:#333333;
    }
    #implement_detail_page .allfont_color{
        color:#666666;
        padding-bottom: 1em;
    }
    #implement_detail_page .nextfont_color{
        color:#333333;
    }
    #implement_detail_page .table_title{
        padding-left: 1em;padding-bottom:1em;border-bottom: 1px solid #e6e6e6;color:#000;font-weight: bold;font-size:18px;
    }
    #implement_detail_page .page_header .page_header_title{
        line-height: 2.3em;
        font-size: 1em;
        height:2.3em;
    }
    #implement_detail_page .page_header{
        height:2.3em;
    }
    #implement_detail_page .page_header img{
        height: 1em;
    }
</style>
