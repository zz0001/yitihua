<template>
    <div data-role="page" id="house_first_page">

        <div class="page_header">
            <img class="left_img back-button" src="/staitc/resources/images/icon_white_back.png"/>
            <div class="page_header_title">出租房信息</div>
            <div class="right_img right_btn" style="height:2.5em">列表</div>
        </div>
        <div class="page_content">
            <div class="stepstyle">
                <div class="stepcircle">1</div>
                <div class="stepline"></div>
                <div class="stepcircle2">2</div>
                <div class="stepline2"></div>
                <div class="stepcircle3">3</div>
            </div>
            <div id="house_first_wrapper" class="jszx-wrapper">
                <div class="jszx-scroller">
                    <div class="html_margin white_background">
                        <table class="inp_table" cellpadding="0" cellspacing="0">
                            <tr>
                                <td style="padding-top:0.5em;width:30%;">网格编号<span>*</span></td>
                                <td colspan="2">
                                    <input class="small gray_dark_font" style="color:#999999;" onkeyup="value=value.replace(/[^\w\.\/]/ig,'')"
                                           id="house_grid_num"/>
                                </td>
                            </tr>
                            <tr>
                                <td style="padding-top:0.5em;">所在村(社区)<span>*</span></td>
                                <td colspan="2" id="showdeptment_tr">
                                    <input class="small gray_dark_font" style="color:#999999;" readonly
                                           id="house_gridName"/>
                                </td>
                            </tr>
                            <tr>
                                <td style="padding-top:0.5em;">房屋编号<span>*</span></td>
                                <td colspan="2">
                                    <input class="small gray_dark_font" style="color:#999999;" onkeyup="value=value.replace(/[^\w\.\/]/ig,'')"
                                           id="house_num"/>
                                </td>
                            </tr>
                            <tr>
                                <td style="padding-top:0.5em;">房屋地址<span>*</span></td>
                                <!--  <td colspan="2">
                                     <input class="small gray_dark_font" style="color:#999999;"
                                            id="house_address"/>
                                 </td> -->
                                <td style="padding:1em 0.5em 1em 0em;line-height: 1.4em;text-align: right;width:53%"
                                ><div contenteditable="true" id="house_address"></div></td>
                                <td style="width: 1%;" id="house_step_address_img">
                                    <img class="div_input_value_img" src="/staitc/resources/images/icon_dz.png"/>
                                </td>
                            </tr>
                            <tr>
                                <td style="padding-top:0.5em;">证件代码（房产证号）<span>*</span></td>
                                <td colspan="2">
                                    <input class="small gray_dark_font" style="color:#999999;" onkeyup="value=value.replace(/[^\w\.\/]/ig,'')"
                                           id="real_estate"/>
                                </td>
                            </tr>
                            <tr>
                                <td style="padding-top:0.5em;">出租用途<span>*</span></td>
                                <td colspan="2">
                                    <input class="small gray_dark_font" style="color:#999999;"
                                           id="lease_use"/>
                                </td>
                            </tr>
                            <tr>
                                <td style="padding-top:0.5em;">隐患类型<span>*</span></td>
                                <td colspan="2">
                                    <input class="small gray_dark_font" style="color:#999999;"
                                           id="hiddendanger"/>
                                </td>
                            </tr>

                            <tr>
                                <td style="padding-top:0.5em;padding-bottom:0.5em;">建筑性质</td>
                                <td id="naturetr" colspan="2" style="text-align:right;padding-right:1.5em">
                                    <!-- <i id="natureValue"></i> <img id="house_nature" class="" src="/staitc/resources/images/icon_gray_solid_down.png"> -->

                                </td>
                            </tr>
                            <tr>
                                <td style="padding-top:0.5em;">建筑结构</td>
                                <td colspan="2" id="building_structure" style="text-align: right;padding-right: 1.5em;">
                                    <!--  <select style="display: inline-block;width: 72%;" >
                                            <option value="" selected="selected">请选择</option>
                                            <option value="01">木结构</option>
                                            <option value="02">砖木结构</option>
                                            <option value="03">砖混结构</option>
                                            <option value="04">筋混凝土结构</option>
                                            <option value="05">钢结构</option>
                                            <option value="06">框架结构</option>
                                        </select> -->
                                </td>
                            </tr>
                            <tr>
                                <td style="padding-top:0.5em;">建筑用途</td>
                                <td colspan="2">
                                    <input class="small gray_dark_font" style="color:#999999;"
                                           id="house_use"/>
                                </td>
                            </tr>
                            <tr>
                                <td style="padding-top:0.5em;">建筑面积 (平方米)<span>*</span></td>
                                <td colspan="2">
                                    <input type="number" class="small gray_dark_font" style="color:#999999;"
                                           id="house_area"/>
                                </td>
                            </tr>
                            <tr>
                                <td style="padding-top:0.5em;">水表号</td>
                                <td colspan="2">
                                    <input class="small gray_dark_font" style="color:#999999;" onkeyup="value=value.replace(/[^\w\.\/]/ig,'')"
                                           id="house_water"/>
                                </td>
                            </tr>
                            <tr>
                                <td style="padding-top:0.5em;">电表号</td>
                                <td colspan="2">
                                    <input class="small gray_dark_font" style="color:#999999;" onkeyup="value=value.replace(/[^\w\.\/]/ig,'')"
                                           id="house_electric"/>
                                </td>
                            </tr>
                            <tr>
                                <td style="padding-top:0.5em;">气表号</td>
                                <td colspan="2">
                                    <input class="small gray_dark_font" style="color:#999999;" onkeyup="value=value.replace(/[^\w\.\/]/ig,'')"
                                           id="house_gas"/>
                                </td>
                            </tr>



                            <!--   <tr>
                                  <td style="padding-top:0.5em;">截止时间<span>*</span></td>
                                  <td colspan="2">
                                      <input class="small gray_dark_font" style="color:#999999;" readonly="true"
                                             id="leader_edit_endTime"/>
                                  </td>
                              </tr>
                              <tr>
                                  <td style="padding-top:0.5em;">处置部门<span>*</span></td>
                                  <td colspan="2">
                                      <input class="small gray_dark_font" style="color:#999999;" readonly="true"
                                             id="case_doDept"/>
                                  </td>
                              </tr> -->
                        </table>
                        <div style="height: 5em;"></div>
                    </div>

                </div>
            </div>
            <!--  <div class="select_type">
                <div>合法</div>
                <div>非法</div>
            </div> -->
        </div>
        <div class="page_footer">
            <div class="footer_button_div" style="text-align:center">
                <!--  <div id="savefirst" class="alert_bottom_three orange_background divinline">暂存</div> -->
                <div id="tosecondpage" class="alert_bottom_three orange_background divinline">下一步</div>

            </div>
        </div>



    </div>
</template>

<script>
    export default {
       mounted(){
           window.searchPage = 2;
           $("#house_first_page").live("pageshow", function () {
               initfirstAdd();
               /*返回*/
               $("#house_first_page .back-button").listen("quickClick", function (e) {
                   $.mobile.changePage("../load/welcome.html");
               });
               //下一步
               $("#house_first_page #tosecondpage").listen("quickClick", function (e) {
                   window.nextpage=1;
                   addHouseInfo();
               });
               //选择
               $("#house_first_page #naturetr").listen("quickClick", function (e) {
                   //gethousenature();
               });
               $("#house_first_page .right_btn").listen("quickClick", function (e) {
                   $.mobile.changePage("../leasehouse/houseList.html");
               });
               //处置部门
               $("#house_first_page #showdeptment_tr").listen("quickClick", function (e) {
                   house_getDept();
               });
               //位置
               $("#house_first_page #house_step_address_img").listen("quickClick", function (e) {
                   showMapAlert("请选择位置", "确定", "", function () {
                       $("#house_address").html($("#map_html_address").html());
                       window.choiceLongitude = window.shortLongitude;
                       window.choiceLatitude = window.shortLatitude;
                       console.log($("#map_html_address").html() + "\t,选中的经纬度：" + window.choiceLongitude + "\t," + window.choiceLatitude);
                       $(".mapshowalert").remove();
                   });
               });

               /*保存*/
               /*  $("#house_first_page .page_footer").listen("quickClick", function (e) {
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
           //领导直派，图片上传
           function publicOpinion_upPicture(img, type) {
               console.log("图片张数：" + window.picture_array.length + "；当前第" + type + "张");
               var obj = "";
               obj += toJson("base64Str", img);
               doPost("app_publicOpinion_upPic.action", obj, function (data) {
                   if (data.code == 0) {
                       if (type < parseInt(window.picture_array.length)) {
                           console.log("当前上传第:" + type + "张,下次上传第" + type + "张");
                           var typename = parseInt(type) + 1;
                           publicOpinion_upPicture(window.picture_array[type], typename);
                       } else {
                           console.log("图片上传结束");
                       }
                       if (isNull(window.picture_upImg)) {
                           window.picture_upImg = data.datas.path;
                       } else {
                           window.picture_upImg = window.picture_upImg + ";" + data.datas.path;
                       }
                       console.log("当前type" + type + "；总共张数：" + window.picture_array.length);
                       if (parseInt(type) == window.picture_array.length) {
                           appWorkOrder_leaderOrderReport("", $("#leader_handle_edit_problem").val(), $("#leader_edit_endTime").val(), getNowTime(), window.doDeptArr);
                           console.log("type和图片长度相等" + type);
                       } else {
                           console.log("type和图片长度不相等");
                       }
                   } else {
                       toast(data.message);
                   }
               }, "", "");
           }
           function initfirstAdd() {
               $("#house_first_wrapper")[0].style.height = window.localInnerHeight - $("#house_first_page .page_header").height() - $("#house_first_page .page_footer").height() + "px";
               initScroll({
                   "wrapper": "house_first_wrapper",
                   "dir": "y",
                   "bounce": false,
                   "scrollBar": true
               });
               scrollToTop("house_first_wrapper");
               buildstructureselectoption_firststep();
               emptyfirstadd();
               window.leadercommitFlag=0;
           }
           function emptyfirstadd() {
               $("#house_first_page table tr td").addClass("gray_line_bottom");
               $("#house_first_page table tr td input").val("");
               $("#house_first_page table tr td textarea").val("");
               //图片集合

               window.picture_array = [];
               window.picture_upImg = "";
               window.orginId = "";//工单来源
               window.choiceThingsParts = "";//职能事项
               initMapInfo("#leader_edit_address");
               window.choiceThingsParts = "";// 职能事项：
               window.choiceBigType = "";//部件大类：
               window.choiceSmallType = "";//部件小类
               window.choiceOneGridId = "";//网格
               $("#leader_handle_edit_img_scroll").css("transform", "none");
               $("#leader_handle_edit_img_wrapper .scroll-bar-x").css("transform", "none");
               $("#leader_words").val("0/150");
               $("#house_first_page #leader_handle_edit_img").empty();
               $("#house_first_page #leader_handle_edit_img").append('<img class="goodsimgone" style="padding-top:2em;" src="/staitc/resources/images/icon_add_photo.png" id="choicemore">');
               $("#house_gridName").val("");
               $("#house_num").val("");
               window.houseno = "";
               //$("#natureValue").text("");
               $("#house_address").text("");
               $("#house_use").val("");
               $("#house_area").val("");
               $("#house_water").val("");
               $("#house_electric").val("");
               $("#house_gas").val("");
               $("#real_estate").val("");
               $("#lease_use").val("");
               $("#hiddendanger").val("");
               window.architecturalNature="";
           }
           //部门名称
           function gethousenature(type, source) {
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


               $('#house_first_page').append($(info));
               //$('#leader_one_html').html(info);
               //确定按钮
               $('#house_first_page').find('.natureselect').listen("quickClick", function (e){
                   var val=$(e.currentTarget).text();
                   $("#natureValue").text(val);
                   $('#house_first_page').find('.KpiTcbackG').hide();
                   if(val=="合法"){
                       window.architecturalNature=1;
                   }else{
                       window.architecturalNature=2;
                   }

               });
               $('#house_first_page').find('.KpiTcbackG').show();


           }
           //上报

           function addHouseInfo() {
               var houseno = $("#house_num").val();
               window.houseno = houseno;
               var address = $("#house_address").text();
               var constructionApplications = $("#house_use").val();
               var buildingArea = $("#house_area").val();
               // var architecturalNature = window.architecturalNature;
               var architecturalNature =$('#naturetr select option:selected').val();
               var waterMeter = $("#house_water").val();
               var electricMeter = $("#house_electric").val();
               var gasMeter = $("#house_gas").val();
               var propertyNo = $("#real_estate").val();
               var rentalPurpose = $("#lease_use").val();
               var dangerType = $("#hiddendanger").val();
               var gridno = $("#house_grid_num").val();
               var gridName = $("#house_gridName").val();
               var structure = $('#building_structure select option:selected').val();
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
               obj += toJson("dangerType", dangerType);
               if (isNull(gridno)) {
                   toast("请填写网格编号");
               }  else if(isNull(gridName)){
                   toast("请填写所在村（社区）");
               }else if(isNull(houseno)){
                   toast("请填写房屋编号");
               } else if(isNull(address)){
                   toast("请填写房屋地址");
               } else if(isNull(propertyNo)){
                   toast("请填写房产证号");
               }else if(isNull(rentalPurpose)){
                   toast("请填写出租用途");
               }else if(isNull(dangerType)){
                   toast("请填写隐患类型");
               } else if(isNull(buildingArea)){
                   toast("请填写建筑面积");
               }else {
                   doPost("ap_addHouseInfo.action", obj, function (data) {

                       if (data.code == 0) {
                           toast(data.message);
                           window.houseId=data.id;
                           $.mobile.changePage("../leasehouse/secondstep.html");
                       } else {
                           toast(data.message);
                       }
                   }, "", "");
               }

           }
           function buildstructureselectoption_firststep(){
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
               $("#building_structure").html(option);
               var option2='';
               option2+='<select style="display: inline-block;width: 72%;">'


               option2+='<option value="1">合法</option>'
               option2+='<option value="2">非法</option>'


               option2+='</select>'
               $("#naturetr").html(option2);
           }

           //部门名称
           function house_getDept() {
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

               $('#house_first_page').append($(info));
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

                                   /*   if(window.doDeptArr.length>0){
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
                                   window.doDeptArr={};
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








                           $('#house_first_page').find('.checkboxList').append(info1);

                       }
                       //确定按钮
                       $('#house_first_page').find('.KpiFormBut').listen("quickClick", function (e){
                           var str = '';

                           if(window.doDeptArr){
                               str=window.doDeptArr.text;
                           }
                           /*   if(window.doDeptArr.length>0){

                                  for(var i=0 ; i < window.doDeptArr.length; i++){
                                     if(i == window.doDeptArr.length-1){
                                         str+=window.doDeptArr[i].text;
                                     }else{
                                         str+=window.doDeptArr[i].text+',';
                                     }
                                 }
                             } */
                           $('#house_first_page').find('.KpiTcbackG').hide();
                           $("#house_gridName").val(str);

                       });
                       $('#house_first_page').find('.KpiTcbackG').show();

                   } else {
                       toast(data.message);
                   }
               }, "", "");
           }
       }
    }
</script>

<style scoped>
    #house_first_page .page_header .right_img {
        width: 2em;
        top: 0.5em;
    }

    /*img start*/
    #house_first_page .commodityAddImgs {
        overflow: hidden;
        background: #f3f3f3;
    }

    #house_first_page .imgdiv {
        padding: 0.7em;
        padding-top: 0em;
        position: relative;
        width: 6em;
        float: left;
    }

    #house_first_page .goodsimgone {
        float: left;
        height: 6em;
        width: 6em;
        margin-top: -1em;
    }

    #house_first_page .delimg {
        width: 2em;
        height: 2em;
        position: relative;
        top: 0em;
        left: 5em;
    }

    #house_first_page #leader_handle_edit_img {
        height: 7.5em;
        overflow: hidden;
        display: inline-block;
    }

    #house_first_page .goodsimgone {
        float: left;
        height: 6em;
        width: 6em;
        margin-top: -1em;
    }

    /*img end*/
    #house_first_page .div_input_value_img {
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
    .divinline{
        display:inline-block;
        width: 10em;
    }
    .stepstyle{
        position:relative;
        height:5em;
        line-height:5em;
        text-algin:center;
        padding-left:15%
    }
    .stepcircle{
        float:left;
        margin-top: 2em;
        width: 3em;
        height: 3em;
        border-radius: 2.5em;
        border: 1px solid #25e020;
        line-height: 3em;
        text-align: center;
        padding: 0.1em;
        background: #25e020;
        font-size: 0.5em;
        color:#fff;
    }
    .stepcircle2{
        float:left;
        margin-top: 2em;
        width: 3em;
        height: 3em;
        border-radius: 2.5em;

        border: 1px solid #c9dac9;
        line-height: 3em;
        text-align: center;
        padding: 0.1em;
        background: #c9dac9;
        font-size: 0.5em;
        color:#fff;
    }
    .stepcircle22{
        float:left;
        margin-top: 2em;
        width: 3em;
        height: 3em;
        border-radius: 2.5em;
        border: 1px solid #25e020;
        line-height: 3em;
        text-align: center;
        padding: 0.1em;
        background: #25e020;
        font-size: 0.5em;
        color:#fff;
    }
    .stepcircle33{
        float:left;
        margin-top: 2em;
        width: 3em;
        height: 3em;
        border-radius: 2.5em;
        border: 1px solid #25e020;
        line-height: 3em;
        text-align: center;
        padding: 0.1em;
        background: #25e020;
        font-size: 0.5em;
        color:#fff;
    }

    .stepcircle3{
        float:left;
        margin-top: 2em;
        width: 3em;
        height: 3em;
        border-radius: 2.5em;
        border: 1px solid #c9dac9;
        line-height: 3em;
        text-align: center;
        padding: 0.1em;
        background: #c9dac9;
        font-size: 0.5em;
        color:#fff;
    }
    .stepline{
        float:left;
        margin-top: 2em;
        width:6em;height:2px;background:#ccc;
    }
    .stepline2{
        float:left;
        margin-top: 2em;
        width:6em;height:2px;background:#ccc;
    }
    #house_first_page select{
        background: #fff;
        width: 100%;
        height: 40px;
        line-height: 40px;
    }
</style>