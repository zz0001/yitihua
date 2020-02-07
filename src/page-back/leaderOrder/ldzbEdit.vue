<template>
    <div data-role="page" id="ldzb_edit_page">

        <tk-header>
            领导直报
        </tk-header>
        <div class="page_content">
            <div id="ldzb_edit_wrapper" class="jszx-wrapper">
                <div class="jszx-scroller">
                    <div class="html_margin white_background">
                        <table class="inp_table" cellpadding="0" cellspacing="0">
                            <tr>
                                <td>上传图片</td>
                                <td colspan="2">
                                    <input id="good_num" class="small" value="0/5" readonly type="text">
                                </td>
                            </tr>
                            <tr>
                                <td colspan="3" class="commodityAddImgs">
                                    <div id="ldzb_edit_img_wrapper" class="jszx-wrapper">
                                        <div class="jszx-scroller" id="ldzb_edit_img_scroll">
                                            <div id="ldzb_edit_img"></div>
                                        </div>
                                    </div>
                                </td>
                            </tr>

                            <!--<tr id="ldzb_edit_eventComponent_tr">-->
                            <!--<td style="min-width: 5em;" class="">职能事项<span></span></td>-->
                            <!--<td>-->
                            <!--<input readonly id="case_edit_eventComponent" type="text"-->
                            <!--placeholder="请选择职能事项"/>-->
                            <!--</td>-->
                            <!--<td style="width: 1%;"><img class=""-->
                            <!--src="/staitc/resources/images/icon_gray_solid_down.png"></td>-->
                            <!--</tr>-->
                            <!--<tr id="ldzb_edit_bigClass_tr">-->
                            <!--<td style="min-width: 5em;" class="">大类<span></span></td>-->
                            <!--<td>-->
                            <!--<input readonly id="case_edit_bigClass" type="text"-->
                            <!--placeholder="请选择大类"/>-->
                            <!--</td>-->
                            <!--<td style="width: 1%;"><img class=""-->
                            <!--src="/staitc/resources/images/icon_gray_solid_down.png"></td>-->
                            <!--</tr>-->
                            <!--<tr id="ldzb_edit_smallClass_tr">-->
                            <!--<td style="min-width: 5em;" class="">小类<span></span></td>-->
                            <!--<td>-->
                            <!--<input readonly id="case_edit_smallClass" type="text"-->
                            <!--placeholder="请选择小类"/>-->
                            <!--</td>-->
                            <!--<td style="width: 1%;"><img class=""-->
                            <!--src="/staitc/resources/images/icon_gray_solid_down.png"></td>-->
                            <!--</tr> -->

                            <tr id="ldzb_location_tr">
                                <td style="min-width: 5em;" class="">位置描述<span>*</span></td>
                                <td style="padding:1em 0.5em 1em 0em;line-height: 1.4em;text-align: right;"
                                ><div contenteditable="true" id="ldzb_edit_address"></div></td>
                                <td style="width: 1%;" id="ldzb_edit_address_img">
                                    <img class="div_input_value_img" src="/staitc/resources/images/icon_dz.png"/>
                                </td>
                            </tr>
                            <tr>
                                <td style="padding-top:0.5em;">问题描述<span>*</span></td>
                                <td colspan="2">
                                    <input class="small gray_dark_font" style="color:#999999;" readonly="true"
                                           id="case_words"/>
                                </td>
                            </tr>
                            <tr>
                                <td colspan="3">
                            <textarea
                                    onfocus="newCheckWord('ldzb_edit_problem',500,'case_words')"
                                    onKeyUp="javascript:newCheckWord('ldzb_edit_problem',500,'case_words');"
                                    onMouseDown="javascript:newCheckWord('ldzb_edit_problem',500,'case_words');"
                                    placeholder="请输入问题描述" id="ldzb_edit_problem"
                                    style="text-align:left;min-height: 5em;padding:0em 0.5em 0em 1em;"></textarea>

                                </td>
                            </tr>
                            <!--    <tr>
                                   <td style="padding-top:0.5em;">截止时间<span>*</span></td>
                                   <td colspan="2">
                                       <input class="small gray_dark_font" style="color:#999999;" readonly="true"
                                              id="ldzb_edit_endTime"/>
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
                    </div>
                </div>
            </div>
        </div>
        <div class="page_footer">
            <div class="footer_button_div">
                <div id="save_returnAddress_leader" class="alert_bottom_three orange_background">保存</div>
            </div>
        </div>


    </div>
</template>

<script>
    export default {
        name: "ldzbEdit",
        mounted(){
            window.searchPage = 2;
            var that=this;
                initCaseEdit();
                //设置标题栏，内容栏，底部内容高度
                
                $(".page_content")[0].style.height = window.localInnerHeight - $(".tk-header").height() - $(".page_footer").height() + "px";
                $(".page_content").children("div").get(0).style.height = window.localInnerHeight - $(".page_header").height() - $(".page_footer").height() + "px";
                //设置input和textarea的样式
                $("input").addClass("small gray_dark_font ui-input-text ui-body-c ui-corner-all ui-shadow-inset");
                $("textarea").addClass("ui-input-text ui-body-c ui-corner-all ui-shadow-inset");

                /*返回*/
                $("#ldzb_edit_page .back-button").listen("quickClick", function (e) {

                    that.$router.push({path:'welcome',query:{}});
                });
                //位置
                $("#ldzb_edit_page #ldzb_edit_address_img").listen("quickClick", function (e) {
                    showMapAlert("请选择位置", "确定", "", function () {
                        $("#ldzb_edit_address").html($("#map_html_address").html());

                        // console.log($("#map_html_address").html() + "\t,选中的经纬度：" + window.choiceLongitude + "\t," + window.choiceLatitude);
                        $(".mapshowalert").remove();
                    });
                });

                //商品图片
                $("#ldzb_edit_page #choicemore").click(function (e) {
                    window.upload_imgscroll = "ldzb_edit_img_scroll";
                    window.upload_imgwrapper = "ldzb_edit_img_wrapper";
                    window.upload_addimg = "ldzb_edit_img";
                    getPhotograph();
                });
                //截止时间
                chooseDate("ldzb_edit_endTime", "datetime");


                //处置部门
                $("#ldzb_edit_page #case_doDept").listen("quickClick", function (e) {
                    app_getDeptType();
                });
                /*保存*/
                $("#ldzb_edit_page .page_footer").listen("quickClick", function (e) {
                    /*if (isNull(window.choiceThingsParts)) {
                        toast("请选择职能事项");
                    } else if (isNull(window.choiceBigType)) {
                        toast("请选择大类");
                    } else if (isNull(window.choiceSmallType)) {
                        toast("请选择小类");
                    } else */
                    var flag=checkTextSpace($("#ldzb_edit_problem").val());
                    if(window.leadercommitFlag){

                    }else{
                        if (isNull($("#ldzb_edit_problem").val())||flag==false) {
                            if(flag==false){
                                toast("问题描述请不要输入空格");
                            }else{
                                toast("请输入问题描述");
                            }
                        } else {
                            showContentAlert("确认保存本次提交吗？", function () {
                            }, function () {
                                window.leadercommitFlag=1;
                                $("#save_returnAddress_leader").removeClass("orange_background");
                                $("#save_returnAddress_leader").addClass("gray_gray_background");
                                if (!isNull(window.picture_array) || window.picture_array.length > 0) {
                                    window.picture_upImg = "";
                                    publicOpinion_upPicture(window.picture_array[0],1);

                                }else{
                                    appWorkOrder_leaderOrderReport("", $("#ldzb_edit_problem").val());
                                }
                            }, "确定");
                        }
                    }
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
                            appWorkOrder_leaderOrderReport("", $("#ldzb_edit_problem").val(), $("#ldzb_edit_endTime").val(), getNowTime(), window.doDeptArr);
                            console.log("type和图片长度相等" + type);
                        } else {
                            console.log("type和图片长度不相等");
                        }
                    } else {
                        toast(data.message);
                    }
                }, "", "");
            }
            function initCaseEdit() {
                $("#ldzb_edit_wrapper")[0].style.height = window.localInnerHeight - $("#ldzb_edit_page .page_header").height() - $("#ldzb_edit_page .page_footer").height() + "px";
                initScroll({
                    "wrapper": "ldzb_edit_wrapper",
                    "dir": "y",
                    "bounce": false,
                    "scrollBar": true
                });
                scrollToTop("ldzb_edit_wrapper");
                leaderCaseEdit();
                window.leadercommitFlag=0;
            }
            function leaderCaseEdit() {
                $("#ldzb_edit_page table tr td").addClass("gray_line_bottom");
                $("#ldzb_edit_page table tr td input").val("");
                $("#ldzb_edit_page table tr td textarea").val("");
                //图片集合

                window.picture_array = [];
                window.picture_upImg = "";
                window.orginId = "";//工单来源
                window.choiceThingsParts = "";//职能事项
                initMapInfo("#ldzb_edit_address");
                window.choiceThingsParts = "";// 职能事项：
                window.choiceBigType = "";//部件大类：
                window.choiceSmallType = "";//部件小类
                window.choiceOneGridId = "";//网格
                $("#ldzb_edit_img_scroll").css("transform", "none");
                $("#ldzb_edit_img_wrapper .scroll-bar-x").css("transform", "none");
                $("#ldzb_words").val("0/500");
                $("#ldzb_edit_page #ldzb_edit_img").empty();
                $("#ldzb_edit_page #ldzb_edit_img").append('<img class="goodsimgone" style="" src="/staitc/resources/images/icon_add_photo.png" id="choicemore">');
            }
            //部门名称
            function app_getDeptType(type, source) {
                var obj = "";
                $('.KpiTcbackG').remove();
                // var info = '<div class="KpiTcbackG" style="display:none;">'+
                //         '<div class="Tipscontent">'+
                //             '<p>处理部门</p>'+
                //             '<form style="padding:3% 5%;">'+
                //             '<div class="checkboxList">'+
                //
                //             '</div>'+
                //             '<div class="tc mt5">'+
                //                 '<span class="KpiFormBut">确定</span>'+
                //             '</div>'+
                //             '</form>'+
                //         '</div>'+
                //     '</div>';
                var info = '<div class="KpiTcbackG" style="display:none;"><div class="Tipscontent"><p>处理部门</p><ul id="hear">'
                    + '<li class="action"><a href="#fragment-1"><span>村、社区</span></a></li>'
                    + '<li><a href="#fragment-2"><span>职能部门</span></a></li>'
                    + '<li><a href="#fragment-3"><span>专业公司</span></a></li> </ul>'
                    + '<div id="fragment-1" style="display: block;" class="checkboxList">'

                    + '</div>'
                    + '<div id="fragment-2" class="checkboxList2">'
                    + '</div>'
                    + '<div id="fragment-3" class="checkboxList3">'
                    + '</div>'
                    +             '<div class="tc mt5">'+
                    '<span class="KpiFormBut">确定</span>'+
                    '</div>'
                    + '</div>'

                    + '</div>';

                $('#ldzb_edit_page').append($(info));
                //$('#ldzb_one_html').html(info);
                $("#hear li").eq(0).listen("quickClick", function (e) {
                    $("#hear li").removeClass("action");
                    $("#hear li").eq(0).addClass("action");
                    $("#fragment-2").hide();
                    $("#fragment-3").hide();
                    $("#fragment-1").show();
                })
                $("#hear li").eq(1).listen("quickClick", function (e) {

                    $("#hear li").removeClass("action");
                    $("#hear li").eq(1).addClass("action");
                    $("#fragment-1").hide();
                    $("#fragment-3").hide();
                    $("#fragment-2").show();
                })
                $("#hear li").eq(2).listen("quickClick", function (e) {

                    $("#hear li").removeClass("action");
                    $("#hear li").eq(2).addClass("action");
                    $("#fragment-1").hide();
                    $("#fragment-2").hide();
                    $("#fragment-3").show();
                })

                doPost("chooseDepartment.action", obj, function (data) {
                    if (!isNull(data) && data.length > 0) {
                        var array = data;
                        for (var i = 0; i < array.length; i++) {
                            var info1;
                            var info2;
                            var info3;
                            window.doDeptArr = [];
                            if(array[i].deptTypeCode == "01"){
                                info1 = $('<div style="padding:1.5% 0;display:inline-block;width:50%;vertical-align:middle;">'+
                                    '<input type="checkbox" value="" class="webkit-appearance disI vm">'+
                                    '<span class="disI vm f14" style="margin-left:3%;">'+array[i].deptName+'</span>'+
                                    ' </div>');
                                info1.data('lidata',array[i]);
                                info1.listen("quickClick", function (e) {

                                    var isCheck  = $(e.currentTarget).find('input').is(":checked");

                                    var data = $(e.currentTarget).data("lidata");

                                    if(!isCheck){//false一开始未选中   true，已被选中
                                        $(e.currentTarget).find('input').attr('checked', true);
                                        if(window.doDeptArr.length>0){
                                            var flag = null;
                                            for(var i=0 ; i < window.doDeptArr.length; i++){
                                                if(data.deptCode == window.doDeptArr[i].deptCode){
                                                    flag = true;
                                                    break;
                                                }
                                            }
                                            if(!flag){
                                                window.doDeptArr.push(data);
                                            }
                                        }else{
                                            window.doDeptArr.push(data);
                                        }
                                    }else{//去除选中的
                                        $(e.currentTarget).find('input').attr('checked', false);
                                        var index = -1;
                                        for(var i=0 ; i < window.doDeptArr.length; i++){
                                            if(data.deptCode == window.doDeptArr[i].deptCode){
                                                index = i;
                                                break;
                                            }
                                        }
                                        if(index!=-1){
                                            window.doDeptArr.splice(index,1);
                                        }
                                    }

                                    //console.error("data:"+JSON.stringify(data))
                                    console.error("window.doDeptArr:"+JSON.stringify(window.doDeptArr))

                                });
                            }else if(array[i].deptTypeCode == "02"){
                                info2 = $('<div style="padding:1.5% 0;display:inline-block;width:50%;vertical-align:middle;">'+
                                    '<input type="checkbox" value="" class="webkit-appearance disI vm">'+
                                    '<span class="disI vm f14" style="margin-left:3%;">'+array[i].deptName+'</span>'+
                                    ' </div>');
                                info2.data('lidata1',array[i]);
                                info2.listen("quickClick", function (e) {

                                    var isCheck  = $(e.currentTarget).find('input').is(":checked");

                                    var data = $(e.currentTarget).data("lidata1");

                                    if(!isCheck){//false一开始未选中   true，已被选中
                                        $(e.currentTarget).find('input').attr('checked', true);
                                        if(window.doDeptArr.length>0){
                                            var flag = null;
                                            for(var i=0 ; i < window.doDeptArr.length; i++){
                                                if(data.deptCode == window.doDeptArr[i].deptCode){
                                                    flag = true;
                                                    break;
                                                }
                                            }
                                            if(!flag){
                                                window.doDeptArr.push(data);
                                            }
                                        }else{
                                            window.doDeptArr.push(data);
                                        }
                                    }else{//去除选中的
                                        $(e.currentTarget).find('input').attr('checked', false);
                                        var index = -1;
                                        for(var i=0 ; i < window.doDeptArr.length; i++){
                                            if(data.deptCode == window.doDeptArr[i].deptCode){
                                                index = i;
                                                break;
                                            }
                                        }
                                        if(index!=-1){
                                            window.doDeptArr.splice(index,1);
                                        }
                                    }

                                    //console.error("data:"+JSON.stringify(data))
                                    console.error("window.doDeptArr:"+JSON.stringify(window.doDeptArr))

                                });
                            }else if(array[i].deptTypeCode == "03"){
                                info3 = $('<div style="padding:1.5% 0;display:inline-block;width:50%;vertical-align:middle;">'+
                                    '<input type="checkbox" value="" class="webkit-appearance disI vm">'+
                                    '<span class="disI vm f14" style="margin-left:3%;">'+array[i].deptName+'</span>'+
                                    ' </div>');
                                info3.data('lidata2',array[i]);
                                info3.listen("quickClick", function (e) {

                                    var isCheck  = $(e.currentTarget).find('input').is(":checked");

                                    var data = $(e.currentTarget).data("lidata2");

                                    if(!isCheck){//false一开始未选中   true，已被选中
                                        $(e.currentTarget).find('input').attr('checked', true);
                                        if(window.doDeptArr.length>0){
                                            var flag = null;
                                            for(var i=0 ; i < window.doDeptArr.length; i++){
                                                if(data.deptCode == window.doDeptArr[i].deptCode){
                                                    flag = true;
                                                    break;
                                                }
                                            }
                                            if(!flag){
                                                window.doDeptArr.push(data);
                                            }
                                        }else{
                                            window.doDeptArr.push(data);
                                        }
                                    }else{//去除选中的
                                        $(e.currentTarget).find('input').attr('checked', false);
                                        var index = -1;
                                        for(var i=0 ; i < window.doDeptArr.length; i++){
                                            if(data.deptCode == window.doDeptArr[i].deptCode){
                                                index = i;
                                                break;
                                            }
                                        }
                                        if(index!=-1){
                                            window.doDeptArr.splice(index,1);
                                        }
                                    }

                                    //console.error("data:"+JSON.stringify(data))
                                    console.error("window.doDeptArr:"+JSON.stringify(window.doDeptArr))

                                });
                            }







                            $('#ldzb_edit_page').find('.checkboxList').append(info1);
                            $('#ldzb_edit_page').find('.checkboxList2').append(info2);
                            $('#ldzb_edit_page').find('.checkboxList3').append(info3);
                        }
                        //确定按钮
                        $('#ldzb_edit_page').find('.KpiFormBut').listen("quickClick", function (e){
                            var str = '';
                            if(window.doDeptArr.length>0){
                                for(var i=0 ; i < window.doDeptArr.length; i++){
                                    if(i == window.doDeptArr.length-1){
                                        str+=window.doDeptArr[i].deptName;
                                    }else{
                                        str+=window.doDeptArr[i].deptName+',';
                                    }
                                }
                            }
                            $('#ldzb_edit_page').find('.KpiTcbackG').hide();
                            $("#case_doDept").val(str);

                        });
                        $('#ldzb_edit_page').find('.KpiTcbackG').show();

                    } else {
                        toast(data.message);
                    }
                }, "", "");
            }
            //上报

            function appWorkOrder_leaderOrderReport(componentIdNo, problem, deadline, reportTime, doDeptArr) {
                var doDeptStr = "";
                /*    if(doDeptArr.length >0 ){
                       for(var i=0;i<doDeptArr.length;i++){
                           if(i==doDeptArr.length-1){
                               doDeptStr += doDeptArr[i].deptCode;
                           }else{
                               doDeptStr+=doDeptArr[i].deptCode+';';
                           }
                       }
                   } */
                console.error("zhangsan::"+JSON.stringify(window.doDeptArr));
                console.error("zhangsan::"+doDeptStr);

                console.log("上传的图片信息：" + window.picture_upImg + "经纬度：" + window.choiceLongitude + "," + window.choiceLatitude);
                var address=$("#ldzb_edit_address").text();
                var obj = "";
                obj += toJson("origin", "1") + "&";//工单来源 2：直派，3：随手拍
                obj += toJson("loginId", window.localStorage.loginId) + "&";//工单来源 4:巡查人员上报
                /*  obj += toJson("eventComponent", $.trim(window.choiceThingsParts)) + "&";//职能事项
                 obj += toJson("bigClass", $.trim(window.choiceBigType)) + "&";//大类
                 obj += toJson("smallClass", $.trim(window.choiceSmallType)) + "&";//小类类  */
                obj += toJson("problem", $.trim(problem)) + "&";//问题描述
                obj += toJson("reportPics", window.picture_upImg) + "&";//图片
                obj += toJson("longitude", $.trim(window.choiceLongitude)) + "&";//经度
                obj += toJson("latitude", $.trim(window.choiceLatitude)) + "&";//纬度
                obj += toJson("location", $.trim(address));//位置描述

                doPost("dsb.action", obj, function (data) {
                    window.leadercommitFlag=0;
                    $("#save_returnAddress_leader").removeClass("gray_gray_background");
                    $("#save_returnAddress_leader").addClass("orange_background");
                    if (data.code == 0) {
                        toast(data.message);
                        cleadCaseEdit();
                        //  window.thisCaseQueryType = "1";
                        //  window.CaseWelcomePage = "";
                       // waitJumpPage("../load/welcome.html");
                        that.$router.push({path:'welcome',query:{}});
                    } else {
                        toast(data.message);
                    }
                }, "", "");
            }
            //验证内容是否包含空格
            function checkTextSpace(value){
                var pattern=/\s/;
                if(pattern.test(value)) {
                    return false;
                }
                return true;
            }
        }
    }

</script>

<style >
    #ldzb_edit_page .page_header .right_img {
        width: 2em;
        top: 0.2em;
    }

    /*img start*/
    #ldzb_edit_page .commodityAddImgs {
        overflow: hidden;

    }

    #ldzb_edit_page .imgdiv {
        padding: 0.7em;
        padding-top: 0em;
        position: relative;
        width: 6em;
        float: left;
    }

    #ldzb_edit_page .goodsimgone {
        float: left;
        height: 6em;
        width: 6em;
        margin-top: 1em;
        padding-bottom: 0;
    }

    #ldzb_edit_page .delimg {
        width: 2em;
        height: 2em;
        position: relative;
        top: 0em;
        left: 5em;
    }

    #ldzb_edit_page #ldzb_edit_img {
        height: 7.5em;
        overflow: hidden;
        display: inline-block;
    }



    /*img end*/
    #ldzb_edit_page .div_input_value_img {
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
    #hear {
        width: 100%;
        height: 44px;
        line-height: 45px;
        border-bottom: 1px solid #cccccc;
    }
    #hear li {
        text-align: center;
        width: 33%;
        float: left;
    }
    #fragment-1,#fragment-2,#fragment-3 {
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
</style>