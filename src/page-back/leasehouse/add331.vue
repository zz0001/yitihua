<template>
    <div data-role="page" id="house331_page">

        <div class="page_header">
            <img class="left_img back-button" src="/staitc/resources/images/icon_white_back.png"/>
            <div class="page_header_title"><span id="add331title" style="color:#fff;">添加</span>331信息</div>
            <div class="right_img right_btn" style="height:2.5em">修改</div>
        </div>
        <div class="page_content">
            <div id="house331_wrapper" class="jszx-wrapper">
                <div class="jszx-scroller">
                    <div class="html_margin white_background">
                        <table class="inp_table" cellpadding="0" cellspacing="0">
                            <tr>
                                <td style="padding-top:0.5em;">防烟面罩</td>
                                <td colspan="2">
                                    <input class="small gray_dark_font" style="color:#999999;"
                                           id="smoke_mask"/>
                                </td>
                            </tr>
                            <tr>
                                <td style="padding-top:0.5em;">手电筒</td>
                                <td colspan="2">
                                    <input class="small gray_dark_font" style="color:#999999;"
                                           id="flashlight"/>
                                </td>
                            </tr>

                            <tr>
                                <td style="padding-top:0.5em;">居住人数</td>
                                <td colspan="2">
                                    <input class="small gray_dark_font" style="color:#999999;" onKeyUp="value=value.replace(/[^\d|chun]/g,'')"
                                           id="live_num"/>
                                </td>
                            </tr>
                            <tr>
                                <td style="padding-top:0.5em;">报警哨</td>
                                <td colspan="2">
                                    <input class="small gray_dark_font" style="color:#999999;"
                                           id="alarm_whistle"/>
                                </td>
                            </tr>
                            <tr>
                                <td style="padding-top:0.5em;">二层逃生绳</td>
                                <td colspan="2">
                                    <input class="small gray_dark_font" style="color:#999999;"
                                           id="escape_rope"/>
                                </td>
                            </tr>
                            <tr>
                                <td style="padding-top:0.5em;">使用燃料炊具</td>
                                <td colspan="2">
                                    <input class="small gray_dark_font" style="color:#999999;"
                                           id="fuel_cooker"/>
                                </td>
                            </tr>
                            <tr>
                                <td style="padding-top:0.5em;">3KG干粉灭火器</td>
                                <td colspan="2">
                                    <input class="small gray_dark_font" style="color:#999999;"
                                           id="fireExtinguisher"/>
                                </td>
                            </tr>
                            <tr>
                                <td style="padding-top:0.5em;">三层逃生梯</td>
                                <td colspan="2">
                                    <input class="small gray_dark_font" style="color:#999999;"
                                           id="emergency_stairs"/>
                                </td>
                            </tr>
                            <tr>
                                <td style="padding-top:0.5em;">电动自行车</td>
                                <td colspan="2">
                                    <input class="small gray_dark_font" style="color:#999999;"
                                           id="electric_bicycle"/>
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

                <div id="331commit" class="alert_bottom_three orange_background ">确  认</div>

            </div>
        </div>



    </div>
</template>

<script>
    export default {
        name: "add331"
    }
    window.searchPage = 2;
    $("#house331_page").live("pageshow", function () {
        intiRelevantRequire();
        /*返回*/
        $("#house331_page .back-button").listen("quickClick", function (e) {
            if(window.isaddofedit==0){
                $.mobile.changePage("../leasehouse/secondstep.html");
                findtenementInfo();
            }else{
                $.mobile.changePage("../leasehouse/secondEdit.html");
                findtenementInfo1();
            }
        });
        //下一步
        $("#house331_page #331commit").listen("quickClick", function (e) {
            addRelevantRequireInfo();
        });
        //编辑
        $("#house331_page .right_btn").listen("quickClick", function (e) {
            window.is331Edit="0";
            $("#house331_page table input").removeAttr("readonly");
            $("#house331_page .right_btn").hide();
        });

        //处置部门
        $("#house331_page #house_nature").listen("quickClick", function (e) {
            if(window.is331Edit=="0"){
                app_gethousenature();
            }
        });
        /*保存*/
        /*     $("#house331_page .page_footer").listen("quickClick", function (e) {
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
            }); */
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
    function intiRelevantRequire() {
        $("#house331_wrapper")[0].style.height = window.localInnerHeight - $("#house331_page .page_header").height() - $("#house331_page .page_footer").height() + "px";
        initScroll({
            "wrapper": "house331_wrapper",
            "dir": "y",
            "bounce": false,
            "scrollBar": true
        });
        scrollToTop("house331_wrapper");
        leaderCaseEdit();
        window.leadercommitFlag=0;
        if(window.isaddofedit==0){
            $("#add331title").text("添加");
        }else{
            $("#add331title").text("修改");
            findRelevantRequireInfo();
        }
        if(window.isaddofedit==0){
            $("#house331_page table input").removeAttr("readonly");
            $("#house331_page .right_btn").hide();
            window.is331Edit="0";
        }else{
            $("#house331_page table input").attr("readonly","readonly");
            $("#house331_page .right_btn").show();
            window.is331Edit="1";
        }

    }
    function leaderCaseEdit() {
        $("#house331_page table tr td").addClass("gray_line_bottom");
        $("#house331_page table tr td input").val("");
        $("#house331_page table tr td textarea").val("");
        //图片集合

        window.picture_array = [];
        window.picture_upImg = "";
        window.orginId = "";//工单来源
        window.choiceThingsParts = "";//职能事项

        window.choiceThingsParts = "";// 职能事项：
        window.choiceBigType = "";//部件大类：
        window.choiceSmallType = "";//部件小类
        window.choiceOneGridId = "";//网格
        $("#leader_handle_edit_img_scroll").css("transform", "none");
        $("#leader_handle_edit_img_wrapper .scroll-bar-x").css("transform", "none");
        $("#leader_words").val("0/150");
        $("#house331_page #leader_handle_edit_img").empty();
        $("#house331_page #leader_handle_edit_img").append('<img class="goodsimgone" style="padding-top:2em;" src="/staitc/resources/images/icon_add_photo.png" id="choicemore">');
    }

    //上报

    function addRelevantRequireInfo() {

        var smokemask = $("#smoke_mask").val();
        var flashlight = $("#flashlight").val();
        var peopleno = $("#live_num").val();
        var whistle = $("#alarm_whistle").val();
        var rope = $("#escape_rope").val();
        var fuelcookers = $("#fuel_cooker").val();
        var extinguishr = $("#fireExtinguisher").val();
        var escapeladder = $("#emergency_stairs").val();
        var electricbicycle = $("#electric_bicycle").val();
        var houseno = window.houseno;
        //houseno="123";

        var obj = "";
        obj += toJson("smokemask", smokemask) + "&";
        obj += toJson("flashlight", flashlight) + "&";
        obj += toJson("peopleno", peopleno) + "&";
        obj += toJson("whistle", whistle) + "&";
        obj += toJson("rope", rope) + "&";
        obj += toJson("fuelcookers", fuelcookers) + "&";
        obj += toJson("extinguishr", extinguishr) + "&";
        obj += toJson("escapeladder", escapeladder) + "&";
        obj += toJson("electricbicycle", electricbicycle) + "&";
        obj += toJson("houseno", houseno);

        doPost("ap_addRelevantRequireInfo.action", obj, function (data) {

            if (data.code == 0) {
                toast(data.message);
                if(window.isaddofedit==0){
                    $.mobile.changePage("../leasehouse/secondstep.html");

                }else{
                    $.mobile.changePage("../leasehouse/secondEdit.html");

                }
            } else {
                toast(data.message);
            }
        }, "", "");
    }

    function findRelevantRequireInfo() {


        // var electricbicycle = $("#electric_bicycle").val();
        var houseno = window.houseno;
        //houseno="123";

        var obj = "";

        //obj += toJson("electricbicycle", electricbicycle) + "&";
        obj += toJson("houseno", houseno);

        doPost("ap_relevantRequireInfoList.action", obj, function (data) {
            $("#smoke_mask").val(data.datas[0].smokemask);
            $("#flashlight").val(data.datas[0].flashlight);
            $("#live_num").val(data.datas[0].peopleno);
            $("#alarm_whistle").val(data.datas[0].whistle);
            $("#escape_rope").val(data.datas[0].rope);
            $("#fuel_cooker").val(data.datas[0].fuelcookers);
            $("#fireExtinguisher").val(data.datas[0].extinguishr);
            $("#emergency_stairs").val(data.datas[0].escapeladder);
            $("#electric_bicycle").val(data.datas[0].electricbicycle);

        }, "", "");
    }
</script>

<style scoped>
    #house331_page .page_header .right_img {
        width: 2em;
        top: 0.2em;
    }

    /*img start*/
    #house331_page .commodityAddImgs {
        overflow: hidden;
        background: #f3f3f3;
    }

    #house331_page .imgdiv {
        padding: 0.7em;
        padding-top: 0em;
        position: relative;
        width: 6em;
        float: left;
    }

    #house331_page .goodsimgone {
        float: left;
        height: 6em;
        width: 6em;
        margin-top: -1em;
    }

    #house331_page .delimg {
        width: 2em;
        height: 2em;
        position: relative;
        top: 0em;
        left: 5em;
    }

    #house331_page #leader_handle_edit_img {
        height: 7.5em;
        overflow: hidden;
        display: inline-block;
    }

    #house331_page .goodsimgone {
        float: left;
        height: 6em;
        width: 6em;
        margin-top: -1em;
    }

    /*img end*/
    #house331_page .div_input_value_img {
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
        width: 8em;
    }
</style>
