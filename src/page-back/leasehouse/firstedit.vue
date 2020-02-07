<template>
    <div data-role="page" id="house_first_editpage">

        <div class="page_header">
            <img class="left_img back-button" src="/staitc/resources/images/icon_white_back.png"/>
            <div class="page_header_title">出租房信息<span id="updatehouse" style="color:#fff">修改</span></div>
            <div class="right_img right_btn" style="height:2.5em">编辑</div>
        </div>
        <div class="page_content">
            <div class="stepstyle">
                <div class="stepcircle">1</div>
                <div class="stepline"></div>
                <div class="stepcircle2">2</div>
                <div class="stepline2"></div>
                <div class="stepcircle3">3</div>
            </div>
            <div id="house_first_editwrapper" class="jszx-wrapper">
                <div class="jszx-scroller">
                    <div class="html_margin white_background">
                        <table class="inp_table" cellpadding="0" cellspacing="0">
                            <tr>
                                <td style="padding-top:0.5em;width:30%;">网格编号<span>*</span></td>
                                <td colspan="2">
                                    <input class="small gray_dark_font" style="color:#999999;" onkeyup="value=value.replace(/[^\w\.\/]/ig,'')"
                                           id="house_grid_num_edit"/>
                                </td>
                            </tr>
                            <tr>
                                <td style="padding-top:0.5em;padding-bottom:0.5em;">所在村(社区)<span>*</span></td>
                                <td colspan="2" id="house_gridName_edit" class="deptselectTd">

                                </td>
                            </tr>
                            <tr>
                                <td style="padding-top:0.5em;padding-bottom:0.5em;">登记日期</td>
                                <td colspan="2" id="house_createTime" class="deptselectTd">

                                </td>
                            </tr>
                            <tr>
                                <td style="padding-top:0.5em;">房屋编号</td>
                                <td colspan="2">
                                    <input class="small gray_dark_font" style="color:#999999;" onkeyup="value=value.replace(/[^\w\.\/]/ig,'')"
                                           id="house_num_edit"/>
                                </td>
                            </tr>
                            <tr>
                                <td style="padding-top:0.5em;">房屋地址</td>

                                <td style="width:53%;padding:1em 0.5em 1em 0em;line-height: 1.4em;text-align: right;"
                                ><div contenteditable="true" id="house_address_edit"></div></td>
                                <td style="width: 1%;" id="house_edit_address_img">
                                    <img class="div_input_value_img" src="/staitc/resources/images/icon_dz.png"/>
                                </td>
                            </tr>

                            <tr>
                                <td style="padding-top:0.5em;padding-bottom:0.5em;">建筑性质</td>
                                <td id="naturetr_edit" colspan="2" style="text-align:right;padding-right:1.5em">


                                </td>
                            </tr>
                            <tr>
                                <td style="padding-top:0.5em;">建筑结构</td>
                                <td colspan="2" id="building_structure_edit" style="    text-align: right;
    padding-right: 1.5em;">


                                </td>
                            </tr>
                            <tr>
                                <td style="padding-top:0.5em;">建筑用途</td>
                                <td colspan="2">
                                    <input class="small gray_dark_font" style="color:#999999;"
                                           id="house_use_edit"/>
                                </td>
                            </tr>
                            <tr>
                                <td style="padding-top:0.5em;">证件代码（房产证号）</td>
                                <td colspan="2">
                                    <input class="small gray_dark_font" style="color:#999999;" onkeyup="value=value.replace(/[^\w\.\/]/ig,'')"
                                           id="real_estate_edit"/>
                                </td>
                            </tr>
                            <tr>
                                <td style="padding-top:0.5em;">出租用途</td>
                                <td colspan="2">
                                    <input class="small gray_dark_font" style="color:#999999;"
                                           id="lease_use_edit"/>
                                </td>
                            </tr>
                            <tr>
                                <td style="padding-top:0.5em;">隐患类型</td>
                                <td colspan="2">
                                    <input class="small gray_dark_font" style="color:#999999;"
                                           id="hiddendanger_edit"/>
                                </td>
                            </tr>
                            <tr>
                                <td style="padding-top:0.5em;">建筑面积 (平方米)</td>
                                <td colspan="2">
                                    <input type="number" class="small gray_dark_font" style="color:#999999;"
                                           id="house_area_edit"/>
                                </td>
                            </tr>
                            <tr>
                                <td style="padding-top:0.5em;">水表号</td>
                                <td colspan="2">
                                    <input class="small gray_dark_font" style="color:#999999;" onkeyup="value=value.replace(/[^\w\.\/]/ig,'')"
                                           id="house_water_edit"/>
                                </td>
                            </tr>
                            <tr>
                                <td style="padding-top:0.5em;">电表号</td>
                                <td colspan="2">
                                    <input class="small gray_dark_font" style="color:#999999;" onkeyup="value=value.replace(/[^\w\.\/]/ig,'')"
                                           id="house_electric_edit"/>
                                </td>
                            </tr>
                            <tr>
                                <td style="padding-top:0.5em;">气表号</td>
                                <td colspan="2">
                                    <input class="small gray_dark_font" style="color:#999999;" onkeyup="value=value.replace(/[^\w\.\/]/ig,'')"
                                           id="house_gas_edit"/>
                                </td>
                            </tr>




                        </table>
                        <div style="height: 5em;"></div>
                    </div>

                </div>
            </div>

        </div>
        <div class="page_footer">
            <div class="footer_button_div" style="text-align:center">

                <div id="tosecondpage_edit" class="alert_bottom_three orange_background divinline4">下一步</div>

            </div>
        </div>



    </div>
</template>

<script>
    export default {
        mounted(){
            window.searchPage = 2;
            window.localStorage.isEditFlag="false";
            $("#updatehouse").hide();
            $("#house_first_editwrapper table input").attr("readonly","readonly");
            $("#building_structure_edit select").attr("disabled","disabled");
            $("#naturetr_edit select").attr("disabled","disabled");
            $("#house_first_editpage").live("pageshow", function () {
                initHousufirstEditCaseEdit();
                /*返回*/
                $("#house_first_editpage .back-button").listen("quickClick", function (e) {
                    $.mobile.changePage("../leasehouse/houseList.html");
                });
                //下一步
                $("#house_first_editpage #tosecondpage_edit").listen("quickClick", function (e) {

                    updateHouseInfo();
                });
                //编辑
                $("#house_first_editpage .right_btn").listen("quickClick", function (e) {
                    $("#updatehouse").show();
                    $("#house_first_editwrapper table input").removeAttr("readonly");
                    $("#building_structure_edit select").removeAttr("disabled");
                    $("#naturetr_edit select").removeAttr("disabled","disabled");
                    window.localStorage.isEditFlag="true";
                    $("#house_first_editpage .right_btn").hide();
                });


                //处置部门
                /*    $("#house_first_editpage #naturetr_edit").listen("quickClick", function (e) {
                       if(window.localStorage.isEditFlag=="true"){
                        app_gethousenatureedit();
                       }
                   }); */
                //处置部门
                $("#house_first_editpage #house_gridName_edit").listen("quickClick", function (e) {
                    if(window.localStorage.isEditFlag=="true"){
                        house_getDeptEdit();
                    }
                });
                //位置
                $("#house_first_editpage #house_edit_address_img").listen("quickClick", function (e) {
                    showMapAlert("请选择位置", "确定", "", function () {
                        $("#house_address_edit").html($("#map_html_address").html());
                        window.choiceLongitude = window.shortLongitude;
                        window.choiceLatitude = window.shortLatitude;
                        console.log($("#map_html_address").html() + "\t,选中的经纬度：" + window.choiceLongitude + "\t," + window.choiceLatitude);
                        $(".mapshowalert").remove();
                    });
                });
                /*保存*/
                /*  $("#house_first_editpage .page_footer").listen("quickClick", function (e) {
                     if (isNull(window.choiceThingsParts)) {
                         toast("请选择职能事项");
                     } else if (isNull(window.choiceBigType)) {
                         toast("请选择大类");
                     } else if (isNull(window.choiceSmallType)) {
                         toast("请选择小类");
                     } else
                     if(window.leadercommitFlag){

                     }else{
                     if (isNull($("#leader_handle_edit_problem").val())) {
                         toast("请输入问题描述");
                     }else if (isNull($("#leader_edit_endTime").val())) {
                         toast("请选截止时间");
                     }else if (isNull($("#case_doDept").val())) {//window.doDeptArr
                         toast("请选处置部门");
                     } else {
                         showContentAlert("确认保存本次提交吗？", function () {
                         }, function () {
                             window.leadercommitFlag=1;
                             $("#save_handle_leader").removeClass("orange_background");
                             $("#save_handle_leader").addClass("gray_gray_background");
                             if (!isNull(window.picture_array) || window.picture_array.length > 0) {
                                 window.picture_upImg = "";
                                 publicOpinion_upPicture(window.picture_array[0],1);

                             }else{
                                 appWorkOrder_leaderOrderReport("", $("#leader_handle_edit_problem").val(), $("#leader_edit_endTime").val(), getNowTime(), window.doDeptArr);
                             }
                         }, "确定");
                     }
                     }
                 });*/
            });

            function initHousufirstEditCaseEdit() {
                $("#house_first_editwrapper")[0].style.height = window.localInnerHeight - $("#house_first_editpage .page_header").height() - $("#house_first_editpage .page_footer").height() + "px";
                initScroll({
                    "wrapper": "house_first_editwrapper",
                    "dir": "y",
                    "bounce": false,
                    "scrollBar": true
                });
                $("#updatehouse").hide();
                window.localStorage.isEditFlag="false";
                $("#house_first_editwrapper table input").attr("readonly","readonly");
                buildstructureselectoption();
                $("#building_structure_edit select").attr("disabled","disabled");
                $("#naturetr_edit select").attr("disabled","disabled");
                $("#house_first_editpage .right_btn").show();
                scrollToTop("house_first_editwrapper");

                shouhouseInfoEdit();
                window.leadercommitFlag=0;

            }
            function shouhouseInfoEdit() {
                $("#house_first_editpage table tr td").addClass("gray_line_bottom");
                $("#house_first_editpage table tr td input").val("");
                $("#house_first_editpage table tr td textarea").val("");
                //图片集合

                window.picture_array = [];
                window.picture_upImg = "";

                $("#leader_handle_edit_img_scroll").css("transform", "none");
                $("#leader_handle_edit_img_wrapper .scroll-bar-x").css("transform", "none");
                $("#house_grid_num_edit").val(window.houseListData.gridno);
                $("#house_gridName_edit").text(window.houseListData.gridName);
                $("#house_createTime").text(window.houseListData.createTime);

                var selectval=window.houseListData.structure;
                $('#building_structure_edit select').attr('value',selectval);
                $("#house_num_edit").val(window.houseListData.houseno);
                $("#house_address_edit").text(window.houseListData.address);
                var architecturalNature="";
                if(window.houseListData.architecturalNature=="1"){
                    architecturalNature="合法"
                }else{
                    architecturalNature="非法"
                }
                window.architecturalNature = window.houseListData.architecturalNature;
                $("#naturetr_edit select").attr('value',window.houseListData.architecturalNature);
                //$("#natureValueEdit").text(architecturalNature);
                $("#house_use_edit").val(window.houseListData.constructionApplications);
                $("#house_area_edit").val(window.houseListData.buildingArea);
                $("#house_water_edit").val(window.houseListData.waterMeter);
                $("#house_electric_edit").val(window.houseListData.electricMeter);
                $("#house_gas_edit").val(window.houseListData.gasMeter);
                $("#real_estate_edit").val(window.houseListData.propertyNo);
                $("#lease_use_edit").val(window.houseListData.rentalPurpose);
                $("#hiddendanger_edit").val(window.houseListData.dangerType);
                window.houseId=window.houseListData.id;

                $("#house_first_editpage #leader_handle_edit_img").empty();
                $("#house_first_editpage #leader_handle_edit_img").append('<img class="goodsimgone" style="padding-top:2em;" src="/staitc/resources/images/icon_add_photo.png" id="choicemore">');
            }
            //部门名称
            function app_gethousenatureedit(type, source) {
                var obj = "";
                $('.KpiTcbackG').remove();
                var info = '<div class="KpiTcbackG" style="display:none;">'+
                    '<div class="naturecontent">'+
                    '<p>选择建筑性质</p>'+
                    '<form style="padding:3% 5%;">'+

                    '<div class="tc mt5">'+
                    '<div class="natureselect">合法</div><div class="natureselect" style="border-top: 1px solid #cccccc;">非法</span>'+
                    '</div>'+
                    '</form>'+
                    '</div>'+
                    '</div>';


                $('#house_first_editpage').append($(info));
                //$('#leader_one_html').html(info);
                //确定按钮
                /*   $('#house_first_editpage').find('.natureselect').listen("quickClick", function (e){
                      var val=$(e.currentTarget).text();
                       $("#natureValueEdit").text(val);
                       $('#house_first_editpage').find('.KpiTcbackG').hide();
                       if(val=="合法"){
                           window.architecturalNature=1;
                        }else{
                            window.architecturalNature=2;
                        }

                  }); */
                $('#house_first_editpage').find('.KpiTcbackG').show();


            }
            //上报

            function appWorkOrder_leaderOrderReport(componentIdNo, problem, deadline, reportTime, doDeptArr) {
                var doDeptStr = "";
                if(doDeptArr.length >0 ){
                    for(var i=0;i<doDeptArr.length;i++){
                        if(i==doDeptArr.length-1){
                            doDeptStr += doDeptArr[i].deptCode;
                        }else{
                            doDeptStr+=doDeptArr[i].deptCode+';';
                        }
                    }
                }
                console.error("zhangsan::"+JSON.stringify(window.doDeptArr));
                console.error("zhangsan::"+doDeptStr);

                console.log("上传的图片信息：" + window.picture_upImg + "经纬度：" + window.choiceLongitude + "," + window.choiceLatitude);
                var obj = "";
                obj += toJson("origin", "0") + "&";//工单来源 4:巡查人员上报
                obj += toJson("loginId", window.localStorage.loginId) + "&";//工单来源 4:巡查人员上报
                obj += toJson("eventComponent", $.trim(window.choiceThingsParts)) + "&";//职能事项
                obj += toJson("bigClass", $.trim(window.choiceBigType)) + "&";//大类
                obj += toJson("smallClass", $.trim(window.choiceSmallType)) + "&";//小类类
                obj += toJson("problem", $.trim(problem)) + "&";//问题描述
                obj += toJson("reportPics", window.picture_upImg) + "&";//图片
                obj += toJson("reportTime", $.trim(reportTime)) + "&";//上报时间
                obj += toJson("deadLine", $.trim(deadline)) + "&";;//截止时间
                obj += toJson("gridId", doDeptStr);//处置部门
                doPost("LeaderCaseReport.action", obj, function (data) {
                    window.leadercommitFlag=0;
                    $("#save_handle_leader").removeClass("gray_gray_background");
                    $("#save_handle_leader").addClass("orange_background");
                    if (data.code == 0) {
                        toast(data.message);
                        cleadCaseEdit();
                        window.thisCaseQueryType = "1";
                        window.CaseWelcomePage = "";
                        waitJumpPage("../leaderOrder/leaderList.html");
                    } else {
                        toast(data.message);
                    }
                }, "", "");
            }
            //修改

            function updateHouseInfo() {
                var houseno = $("#house_num_edit").val();
                window.houseno = houseno;
                var address = $("#house_address_edit").text();
                var constructionApplications = $("#house_use_edit").val();
                var buildingArea = $("#house_area_edit").val();
                //var architecturalNature = window.architecturalNature;
                var architecturalNature = $('#naturetr_edit select option:selected').val();
                var waterMeter = $("#house_water_edit").val();
                var electricMeter = $("#house_electric_edit").val();
                var gasMeter = $("#house_gas_edit").val();
                var propertyNo = $("#real_estate_edit").val();
                var rentalPurpose = $("#lease_use_edit").val();
                var dangerType = $("#hiddendanger_edit").val();
                var gridno = $("#house_grid_num_edit").val();
                var gridName = $("#house_gridName_edit").text();
                var structure = $('#building_structure_edit select option:selected').val();
                var id = window.houseId;
                var obj = "";
                obj += toJson("gridno", gridno) + "&";
                obj += toJson("gridName", gridName) + "&";
                obj += toJson("structure", structure) + "&";
                obj += toJson("houseno", houseno) + "&";
                obj += toJson("address", address) + "&";
                obj += toJson("constructionApplications", constructionApplications) + "&";
                obj += toJson("buildingArea", buildingArea) + "&";
                obj += toJson("architecturalNature", architecturalNature) + "&";
                obj += toJson("waterMeter", waterMeter) + "&";
                obj += toJson("electricMeter", electricMeter) + "&";
                obj += toJson("gasMeter", gasMeter) + "&";
                obj += toJson("propertyNo", propertyNo) + "&";
                obj += toJson("rentalPurpose", rentalPurpose)+ "&";
                obj += toJson("dangerType", dangerType)+ "&";
                obj += toJson("id", id)+ "&";
                obj += toJson("delflag", 0);

                if (isNull(gridno)) {
                    toast("请填写网格编号");
                }  else if(isNull(gridName)){
                    toast("请填写所在村（社区）");
                } else if(isNull(houseno)){
                    toast("请填写房屋编号");
                } else if(isNull(address)){
                    toast("请填写房屋地址");
                } else if(isNull(propertyNo)){
                    toast("请填写房产证号");
                } else if(isNull(rentalPurpose)){
                    toast("请填写出租用途");
                }else if(isNull(dangerType)){
                    toast("请填写隐患类型");
                } else if(isNull(buildingArea)){
                    toast("请填写建筑面积");
                }else {
                    doPost("ap_editHouseInfo.action", obj, function (data) {

                        if (data.code == 0) {
                            toast(data.message);

                            $.mobile.changePage("../leasehouse/secondEdit.html");
                        } else {
                            toast(data.message);
                        }
                    }, "", "");
                }

            }
            function buildstructureselectoption(){
                var option='';
                option+='<select style="display: inline-block;width: 72%;">'

                option+='<option value="" selected="selected">请选择</option>';
                option+='<option value="01">木结构</option>'
                option+='<option value="02">砖木结构</option>'
                option+='<option value="03">砖混结构</option>'
                option+='<option value="04">筋混凝土结构</option>'
                option+='<option value="05">钢结构</option>'
                option+='<option value="06">框架结构</option>'

                option+='</select>'
                $("#building_structure_edit").html(option);
                var option2='';
                option2+='<select style="display: inline-block;width: 72%;">'


                option2+='<option value="1">合法</option>'
                option2+='<option value="2">非法</option>'


                option2+='</select>'
                $("#naturetr_edit").html(option2);
            }
            //部门名称
            function house_getDeptEdit() {
                var obj = "";
                $('.KpiTcbackG').remove();
                var info = '<div class="KpiTcbackG" style="display:none;"><div class="Tipscontent"><p>村、社区</p><ul id="firststepDept">'
                    + '<li class="action"><a href="#leaderfragment-1"><span></span></a></li>'
                    + '</ul>'
                    + '<div id="leaderfragment-1" style="display: block;" class="checkboxList">'

                    + '</div>'

                    +             '<div class="tc mt5">'+
                    '<span class="KpiFormBut">确定</span>'+
                    '</div>'
                    + '</div>'

                    + '</div>';

                $('#house_first_editpage').append($(info));
                //$('#leader_one_html').html(info);
                $("#firststepDept li").eq(0).listen("quickClick", function (e) {
                    $("#firststepDept li").removeClass("action");
                    $("#firststepDept li").eq(0).addClass("action");

                    $("#leaderfragment-1").show();
                })


                doPost("ap_findGridNameList.action", obj, function (data) {
                    if (!isNull(data.datas) && data.datas.length > 0) {
                        var array = data.datas;
                        for (var i = 0; i < array.length; i++) {
                            var info1;
                            var info2;
                            var info3;
                            window.doDeptArr = {};

                            info1 = $('<div style="padding:1.5% 0;display:inline-block;width:50%;vertical-align:middle;">'+
                                '<input type="checkbox" value="" class="webkit-appearance disI vm">'+
                                '<span class="disI vm f14" style="margin-left:3%;">'+array[i].text+'</span>'+
                                ' </div>');
                            info1.data('lidata',array[i]);
                            info1.listen("quickClick", function (e) {

                                var isCheck  = $(e.currentTarget).find('input').is(":checked");

                                var data = $(e.currentTarget).data("lidata");

                                if(!isCheck){//false一开始未选中   true，已被选中
                                    $("#leaderfragment-1").find('input').attr('checked', false);
                                    $(e.currentTarget).find('input').attr('checked', true);
                                    window.doDeptArr=data;
                                    /*    if(window.doDeptArr.length>0){
                                           var flag = null;
                                           for(var i=0 ; i < window.doDeptArr.length; i++){
                                               if(data.id == window.doDeptArr[i].id){
                                                   flag = true;
                                                   break;
                                               }
                                           }
                                           if(!flag){
                                               window.doDeptArr.push(data);
                                           }
                                       }else{
                                           window.doDeptArr.push(data);
                                       } */
                                }else{//去除选中的
                                    $(e.currentTarget).find('input').attr('checked', false);
                                    var index = -1;
                                    for(var i=0 ; i < window.doDeptArr.length; i++){
                                        if(data.id == window.doDeptArr[i].id){
                                            index = i;
                                            break;
                                        }
                                    }
                                    if(index!=-1){
                                        window.doDeptArr.splice(index,1);
                                    }
                                }

                                //console.error("data:"+JSON.stringify(data))


                            });








                            $('#house_first_editpage').find('.checkboxList').append(info1);

                        }
                        //确定按钮
                        $('#house_first_editpage').find('.KpiFormBut').listen("quickClick", function (e){
                            var str = '';
                            if(window.doDeptArr){
                                str=window.doDeptArr.text;
                            }
                            /*  if(window.doDeptArr.length>0){
                                 for(var i=0 ; i < window.doDeptArr.length; i++){
                                     if(i == window.doDeptArr.length-1){
                                         str+=window.doDeptArr[i].text;
                                     }else{
                                         str+=window.doDeptArr[i].text+',';
                                     }
                                 }
                             }  */
                            $('#house_first_editpage').find('.KpiTcbackG').hide();
                            $("#house_gridName_edit").text(str);

                        });
                        $('#house_first_editpage').find('.KpiTcbackG').show();

                    } else {
                        toast(data.message);
                    }
                }, "", "");
            }
        }
    }
</script>

<style scoped>
    #house_first_editpage .page_header .right_img {
        width: 2em;
        top: 0.5em;
    }

    /*img start*/
    #house_first_editpage .commodityAddImgs {
        overflow: hidden;
        background: #f3f3f3;
    }

    #house_first_editpage .imgdiv {
        padding: 0.7em;
        padding-top: 0em;
        position: relative;
        width: 6em;
        float: left;
    }

    #house_first_editpage .goodsimgone {
        float: left;
        height: 6em;
        width: 6em;
        margin-top: -1em;
    }

    #house_first_editpage .delimg {
        width: 2em;
        height: 2em;
        position: relative;
        top: 0em;
        left: 5em;
    }

    #house_first_editpage #leader_handle_edit_img {
        height: 7.5em;
        overflow: hidden;
        display: inline-block;
    }

    #house_first_editpage .goodsimgone {
        float: left;
        height: 6em;
        width: 6em;
        margin-top: -1em;
    }

    /*img end*/
    #house_first_editpage .div_input_value_img {
        width: 1.5em;
        height: 1.5em;
        padding-right: 0.5em;
    }

    /*复选框样式*/
    .KpiTcbackG{
        position: absolute;
        top:0;
        left:0;
        bottom:0;
        right:0;
        z-index: 20;
        background: rgba(0,0,0,0.5);
    }
    .KpiTcbackG .naturecontent{
        width:50%;
        margin:50% auto 0;
        background: #fff;
        border-radius: 6px;
        padding: 5%;height:200px;
        overflow-y: auto;
    }

    .webkit-appearance{
        -webkit-appearance:checkbox!important;
    }
    .disI{
        display: inline-block;
    }
    .vm{
        vertical-align: middle;
    }
    .f14{
        font-size: 14px;
    }
    .KpiFormBut{
        width:30%;
        background: #f5a035;
        padding:1.5%;
        border-radius: 3px;
        color: #fff;
        display:inline-block;
    }
    .tc{
        text-align: center;
    }
    .mt5{
        margin-top: 5%;
    }
    /*复选框样式*/
    .KpiTcbackG{
        position: absolute;
        top:0;
        left:0;
        bottom:0;
        right:0;
        z-index: 20;
        background: rgba(0,0,0,0.5);
    }
    .KpiTcbackG .Tipscontent{
        width:81%;
        margin:40% auto 0;
        background: #fff;
        border-radius: 6px;
        padding: 5%;height:350px;
        overflow-y: auto;
    }
    .webkit-appearance{
        -webkit-appearance:checkbox!important;
    }
    .disI{
        display: inline-block;
    }
    .vm{
        vertical-align: middle;
    }
    .f14{
        font-size: 14px;
    }
    .KpiFormBut{
        width:30%;
        background: #f5a035;
        padding:1.5%;
        border-radius: 3px;
        color: #fff;
        display:inline-block;
    }
    .tc{
        text-align: center;
    }
    .mt5{
        margin-top: 5%;
    }
    /*复选框样式end*/
    #leaderHandlehear {
        width: 100%;
        height: 44px;
        line-height: 45px;
        border-bottom: 1px solid #cccccc;
    }
    #leaderHandlehear li {
        text-align: center;
        width: 33%;
        float: left;
    }
    #leaderfragment-1,#leaderfragment-2,#leaderfragment-3 {
        width: 100%;
        display: none;
        text-align: left;
        margin-left: 22px;
        margin-top: 12px;
    }
    .action{
        border-bottom: 2px solid red;
        height: 43px;
    }
    .select_type{
        position: absolute;
        background-color:#fff;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        width: 50%;
        height: 30%;
        margin: auto;
    }
    .natureselect{
        padding:1.5em;
    }
    .divinline4{
        display:inline-block;
        width: 10em;
    }
    #house_first_editpage select{
        background: #fff;
        width: 100%;
        height: 40px;
        line-height: 40px;
    }
    .deptselectTd{
        text-align: right;
        padding: .4em;
        margin: .5em 0;
    }
</style>
