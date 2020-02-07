<template>
    <div data-role="page" id="house_tenant_page">
        <div class="page_header">
            <img class="left_img back-button" src="/staitc/resources/images/icon_white_back.png"/>
            <div class="page_header_title"><span id="addtenanttitle" style="color:#fff;">添加</span>租户信息</div>
            <div class="right_img right_btn" style="height:2.5em">修改</div>
        </div>
        <div class="page_content">
            <div id="house_tenant_wrapper" class="jszx-wrapper">
                <div class="jszx-scroller">
                    <div class="html_margin white_background">
                        <table class="inp_table" cellpadding="0" cellspacing="0">
                            <tr>
                                <td>上传图片</td>
                                <td colspan="2">
                                    <input id="good_num" class="small" value="0/1" readonly type="text">
                                </td>
                            </tr>
                            <tr>
                                <td colspan="3" class="commodityAddImgs">
                                    <div id="tenant_edit_img_wrapper" class="jszx-wrapper">
                                        <div class="jszx-scroller" id="tenant_edit_img_scroll">
                                            <div id="tenant_edit_img"></div>
                                        </div>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td style="padding-top:0.5em;padding-bottom:0.5em;">人员类型<span>*</span></td>
                                <td id="tenant_nature" colspan="2" style="text-align:right;padding-right:1.5em">
                                    <i id="tenantypeValue"></i> <img  class="" src="/staitc/resources/images/icon_gray_solid_down.png">
                                </td>
                            </tr>
                            <tr>
                                <td style="padding-top:0.5em;">身份证号码<span>*</span></td>
                                <td colspan="2">
                                    <input class="small gray_dark_font" style="color:#999999;" onkeyup="value=value.replace(/[^\w\.\/]/ig,'')"
                                           id="tenant_card"/>
                                </td>
                            </tr>
                            <tr>
                                <td style="padding-top:0.5em;">姓名<span>*</span></td>
                                <td colspan="2">
                                    <input class="small gray_dark_font" style="color:#999999;"
                                           id="tenant_name"/>
                                </td>
                            </tr>

                            <tr>
                                <td style="padding-top:0.5em;">联系方式<span>*</span></td>
                                <td colspan="2">
                                    <input type="number" class="small gray_dark_font" style="color:#999999;"
                                           id="tenant_phone"/>
                                </td>
                            </tr>
                            <tr id="sex_tr">
                                <td style="padding-top:0.5em;padding-bottom:0.5em;">性别<span>*</span></td>
                                <td id="tenant_sex" colspan="2" style="text-align:right;padding-right:1.5em">
                                    <i id="sexValue"></i> <img  class="" src="/staitc/resources/images/icon_gray_solid_down.png">
                                </td>
                            </tr>
                            <tr id="relationship_tr">
                                <td style="padding-top:0.5em;">与承租人关系</td>
                                <td colspan="2">
                                    <input class="small gray_dark_font" style="color:#999999;"
                                           id="tenant_relationship"/>
                                </td>
                            </tr>
                            <tr id="nation_tr">
                                <td style="padding-top:0.5em;">民族</td>
                                <td colspan="2">
                                    <input class="small gray_dark_font" style="color:#999999;"
                                           id="tenant_nation"/>
                                </td>
                            </tr>
                            <tr id="permit_tr">
                                <td style="padding-top:0.5em;">暂住证号码</td>
                                <td colspan="2">
                                    <input class="small gray_dark_font" style="color:#999999;" onkeyup="value=value.replace(/[^\w\.\/]/ig,'')"
                                           id="tenant_permit"/>
                                </td>
                            </tr>
                            <tr id="place_tr">
                                <td style="padding-top:0.5em;">籍贯</td>
                                <td colspan="2">
                                    <input class="small gray_dark_font" style="color:#999999;"
                                           id="tenant_place"/>
                                </td>
                            </tr>
                            <!--     <tr>
                                     <td style="padding-top:0.5em;">二房东姓名</td>
                                     <td colspan="2">
                                         <input class="small gray_dark_font" style="color:#999999;"
                                                id="midlandlord_nam"/>
                                     </td>
                                 </tr>
                                  <tr>
                                     <td style="padding-top:0.5em;">二房东身份证号码</td>
                                     <td colspan="2">
                                         <input class="small gray_dark_font" style="color:#999999;"
                                                id="midlandlord_card"/>
                                     </td>
                                 </tr>
                                  <tr>
                                     <td style="padding-top:0.5em;">二房东联系方式</td>
                                     <td colspan="2">
                                         <input class="small gray_dark_font" style="color:#999999;"
                                                id="midlandlord_phone"/>
                                     </td>
                                 </tr>
                                  <tr>
                                     <td style="padding-top:0.5em;">共住人姓名</td>
                                     <td colspan="2">
                                         <input class="small gray_dark_font" style="color:#999999;"
                                                id="sharepeople_name"/>
                                     </td>
                                 </tr>
                                   <tr>
                                     <td style="padding-top:0.5em;">共住人身份证号码</td>
                                     <td colspan="2">
                                         <input class="small gray_dark_font" style="color:#999999;"
                                                id="sharepeople_card"/>
                                     </td>
                                 </tr>
                                <tr>
                                     <td style="padding-top:0.5em;">共住人联系方式</td>
                                     <td colspan="2">
                                         <input class="small gray_dark_font" style="color:#999999;"
                                                id="sharepeople_phone"/>
                                     </td>
                                 </tr>
                                  <tr>
                                     <td style="padding-top:0.5em;">共住人暂住证号码</td>
                                     <td colspan="2">
                                         <input class="small gray_dark_font" style="color:#999999;"
                                                id="sharepeople_permit"/>
                                     </td>
                                 </tr>
                                  <tr>
                                     <td style="padding-top:0.5em;">共住人籍贯</td>
                                     <td colspan="2">
                                         <input class="small gray_dark_font" style="color:#999999;"
                                                id="sharepeople_place"/>
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

                <div id="tenantcommit" class="alert_bottom_three orange_background ">确  认</div>

            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "addTenant"
    }
    window.searchPage = 2;
    $("#house_tenant_page").live("pageshow", function () {
        initaddTenantEdit();
        /*返回*/
        $("#house_tenant_page .back-button").listen("quickClick", function (e) {
            if(window.isaddofedit==0){
                window.nextpage=2;
                $.mobile.changePage("../leasehouse/secondstep.html");

                findtenementInfo();
            }else{
                $.mobile.changePage("../leasehouse/secondEdit.html");
                findtenementInfo1();
            }

        });
        //下一步
        $("#house_tenant_page #tenantcommit").listen("quickClick", function (e) {

            addTenementInfo();
        });
        //编辑
        $("#house_tenant_page .right_btn").listen("quickClick", function (e) {
            window.istenantEdit="0";
            $("#house_tenant_page table input").removeAttr("readonly");
            $("#house_tenant_page .right_btn").hide();
        });

        //处置部门
        $("#house_tenant_page #tenant_nature").listen("quickClick", function (e) {
            if(window.istenantEdit=="0"){
                app_gethousetenanttype();
            }
        });
        //性别
        $("#house_tenant_page #tenant_sex").listen("quickClick", function (e) {
            if(window.istenantEdit=="0"){
                app_gettenantsex();
            }
        });
        //商品图片
        $("#house_tenant_page #tenantchoicemore").click(function (e) {
            window.upload_imgscroll = "tenant_edit_img_scroll";
            window.upload_imgwrapper = "tenant_edit_img_wrapper";
            window.upload_addimg = "tenant_edit_img";
            getPhotographTenant();
        });
        /*保存*/
        /*     $("#house_tenant_page .page_footer").listen("quickClick", function (e) {
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
                            addTenant_upPicture(window.picture_array[0],1);

                        }else{
                            appWorkOrder_leaderOrderReport("", $("#leader_handle_edit_problem").val(), $("#leader_edit_endTime").val(), getNowTime(), window.doDeptArr);
                        }
                    }, "确定");
                }
                }
            }); */
    });
    //领导直派，图片上传
    function addTenant_upPicture(img, type) {
        console.log("图片张数：" + window.picture_array.length + "；当前第" + type + "张");
        var obj = "";
        obj += toJson("base64Str", img);
        doPost("app_publicOpinion_upPic.action", obj, function (data) {
            toast(data.message);
            if (data.code == 0) {
                if (type < parseInt(window.picture_array.length)) {
                    console.log("当前上传第:" + type + "张,下次上传第" + type + "张");
                    var typename = parseInt(type) + 1;
                    addTenant_upPicture(window.picture_array[type], typename);
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
                    if(window.localStorage.isupdateTenant=="true"){
                        updateTenementInfo();
                    }else{
                        commitTenementInfo();
                    }
                    console.log("type和图片长度相等" + type);
                    hideLoading();
                } else {
                    console.log("type和图片长度不相等");
                }
            } else {
                toast(data.message);
            }
        }, "", "");
    }
    function initaddTenantEdit() {
        $("#house_tenant_wrapper")[0].style.height = window.localInnerHeight - $("#house_tenant_page .page_header").height() - $("#house_tenant_page .page_footer").height() + "px";
        initScroll({
            "wrapper": "house_tenant_wrapper",
            "dir": "y",
            "bounce": false,
            "scrollBar": true
        });
        scrollToTop("house_tenant_wrapper");
        $("#relationship_tr").hide();
        addTenantempty();
        window.addtenantcommitFlag=0;
        window.localStorage.isupdateTenant="false";
        if(window.addTenantFlag!="0"){
            if(window.currTenantInfo){
                window.localStorage.isupdateTenant="true";
                var data=window.currTenantInfo;
                var tenantypeValue="";
                if(data.personType=="1"){
                    tenantypeValue="承租人";
                    $("#relationship_tr").hide();
                    window.relationship=1;
                }else if(data.personType=="2"){
                    tenantypeValue="二房东";
                    $("#relationship_tr").hide();
                    window.relationship=1;
                }else if(data.personType=="3"){
                    tenantypeValue="共住人";
                    $("#relationship_tr").show();
                    window.relationship=0;
                }
                window.personType=data.personType;
                var tenantypeSex="";
                if(data.sex=="1"){
                    tenantypeSex="男";
                }else {
                    tenantypeSex="女";
                }
                window.personSex=data.sex;
                $("#sexValue").text(tenantypeSex);
                $("#tenant_relationship").val(data.relationship);
                $("#tenant_nation").val(data.nation);
                $("#tenantypeValue").text(tenantypeValue);
                $("#tenant_card").val(data.idNo);
                $("#tenant_name").val(data.idName);
                $("#tenant_phone").val(data.phoneNo);
                $("#tenant_permit").val(data.stayNo);
                $("#tenant_place").val(data.nativePlace);
            }
        }

        if(window.isaddofedit==0){
            $("#addtenanttitle").text("添加");
        }else{
            $("#addtenanttitle").text("修改");
        }

        if(window.isaddofedit==0){
            $("#house_tenant_page table input").removeAttr("readonly");
            $("#house_tenant_page .right_btn").hide();
            window.istenantEdit="0";
        }else{
            $("#house_tenant_page table input").attr("readonly","readonly");
            $("#house_tenant_page .right_btn").show();
            window.istenantEdit="1";
        }

    }
    function addTenantempty() {
        $("#house_tenant_page table tr td").addClass("gray_line_bottom");
        $("#house_tenant_page table tr td input").val("");
        $("#house_tenant_page table tr td textarea").val("");
        $("#tenantypeValue").text("");
        $("#tenant_card").val("");
        $("#tenant_name").val("");
        $("#tenant_phone").val("");
        $("#tenant_permit").val("");
        $("#tenant_place").val("");
        $("#sexValue").text("");
        //图片集合

        window.picture_array = [];
        window.picture_upImg = "";

        $("#tenant_edit_img_scroll").css("transform", "none");
        $("#tenant_edit_img_wrapper .scroll-bar-x").css("transform", "none");
        $("#leader_words").val("0/150");
        var data=window.currTenantInfo;
        $("#house_tenant_page #tenant_edit_img").empty();
        if(data){
            if(data!=""){
                var img="";
                if(data.img!=""){
                    img = window.imgUrl+data.img;
                }else{
                    img = "/staitc/resources/images/icon_add_photo.png"
                }

                $("#house_tenant_page #tenant_edit_img").append('<img class="goodsimgone" style="padding-top:2em;" src="'+img+'" id="tenantchoicemore">');
            }else{
                $("#house_tenant_page #tenant_edit_img").append('<img class="goodsimgone" style="padding-top:2em;" src="/staitc/resources/images/icon_add_photo.png" id="tenantchoicemore">');
            }

        }else{
            $("#house_tenant_page #tenant_edit_img").append('<img class="goodsimgone" style="padding-top:2em;" src="/staitc/resources/images/icon_add_photo.png" id="tenantchoicemore">');
        }

    }
    //部门名称
    function app_gethousetenanttype() {
        var obj = "";
        $('.KpiTcbackG').remove();
        var info = '<div class="KpiTcbackG" style="display:none;">'+
            '<div class="naturecontent">'+
            '<p>选择人员类型</p>'+
            '<form style="padding:3% 5%;">'+

            '<div class="tc mt5">'+
            '<div class="natureselect">承租人</div><div class="natureselect" style="border-top: 1px solid #cccccc;">二房东</div><div class="natureselect" style="border-top: 1px solid #cccccc;">共住人</div>'+
            '</div>'+
            '</form>'+
            '</div>'+
            '</div>';


        $('#house_tenant_page').append($(info));
        //$('#leader_one_html').html(info);
        //确定按钮
        $('#house_tenant_page').find('.natureselect').listen("quickClick", function (e){
            var val=$(e.currentTarget).text();
            $("#tenantypeValue").text(val);
            $('#house_tenant_page').find('.KpiTcbackG').hide(100);
            if(val=="二房东"){
                $("#permit_tr").show();
                $("#place_tr").show();
                window.personType=2;
                window.relationship=1;
                $("#relationship_tr").hide();
            }else if(val=="承租人"){
                $("#permit_tr").show();
                $("#place_tr").show();
                window.personType=1;
                window.relationship=1;
                $("#relationship_tr").hide();
            }else{
                $("#permit_tr").show();
                $("#place_tr").show();
                $("#relationship_tr").show();
                window.personType=3;
                window.relationship=0;
            }

        });
        $('#house_tenant_page').find('.KpiTcbackG').show();


    }
    //性别
    function app_gettenantsex() {
        var obj = "";
        $('.KpiTcbackG').remove();
        var info = '<div class="KpiTcbackG" style="display:none;">'+
            '<div class="naturecontent">'+
            '<p>选择性别</p>'+
            '<form style="padding:3% 5%;">'+

            '<div class="tc mt5">'+
            '<div class="natureselect">男</div><div class="natureselect" style="border-top: 1px solid #cccccc;">女</div>'+
            '</div>'+
            '</form>'+
            '</div>'+
            '</div>';


        $('#house_tenant_page').append($(info));
        //$('#leader_one_html').html(info);
        //确定按钮
        $('#house_tenant_page').find('.natureselect').listen("quickClick", function (e){
            var val=$(e.currentTarget).text();
            $("#sexValue").text(val);
            $('#house_tenant_page').find('.KpiTcbackG').hide(100);
            if(val=="男"){

                window.personSex=1;
            }else if(val=="女"){

                window.personSex=2;
            }

        });
        $('#house_tenant_page').find('.KpiTcbackG').show();


    }
    //上报

    function addTenementInfo() {

        var idNo = $("#tenant_card").val();
        var idName = $("#tenant_name").val();
        var phoneNo = $("#tenant_phone").val();
        var personType = window.personType;
        var stayNo = $("#tenant_permit").val();
        var nativePlace = $("#tenant_place").val();
        var houseno = window.houseId;
        var personSex = window.personSex;
        var relationship = $("#tenant_relationship").val();

        if (isNull(idNo)) {
            toast("请填写身份号码");
        } else if (isNull($("#tenantypeValue").text())) {
            toast("请选择租户类型");
        } else if (isNull(idName)) {
            toast("请填写姓名");
        } else if (isNull(phoneNo)) {
            toast("请填写联系方式");
        }else if (isNull(personSex)) {
            toast("请选择性别");
        }else if (window.relationship==0&&relationship=="") {
            toast("请填写与承租人关系");
        }else if (isNull(houseno)) {
            toast("请填写房屋编号");
        }  else {
            showContentAlert("确认保存本次提交吗？", function () {
            }, function () {

                if (!isNull(window.picture_array) || window.picture_array.length > 0) {
                    /*  window.addtenantcommitFlag=1;
                      $("#tenantcommit").removeClass("orange_background");
                      $("#tenantcommit").addClass("gray_gray_background"); */
                    showLoading("正在上传...");
                    window.picture_upImg = "";
                    addTenant_upPicture(window.picture_array[0],1);

                }else{
                    if(window.localStorage.isupdateTenant=="true"){
                        updateTenementInfo();
                    }else{
                        commitTenementInfo();
                    }
                }
            }, "确定");


        }

    }
    //添加
    function commitTenementInfo(){
        var idNo = $("#tenant_card").val();
        var idName = $("#tenant_name").val();
        var phoneNo = $("#tenant_phone").val();
        var personType = window.personType;
        var stayNo = $("#tenant_permit").val();
        var nativePlace = $("#tenant_place").val();
        var houseno = window.houseId;
        var personSex = window.personSex;
        var relationship = $("#tenant_relationship").val();
        var nation = $("#tenant_nation").val();
        var obj = "";
        obj += toJson("idNo", idNo) + "&";
        obj += toJson("idName", idName) + "&";
        obj += toJson("phoneNo", phoneNo) + "&";
        obj += toJson("personType", personType) + "&";
        obj += toJson("nativePlace", nativePlace) + "&";
        obj += toJson("stayNo", stayNo) + "&";
        obj += toJson("houseno", houseno)+ "&";
        obj += toJson("sex", personSex)+ "&";
        obj += toJson("relationship", relationship)+ "&";
        obj += toJson("nation", nation)+ "&";
        obj += toJson("attachmentPath", window.picture_upImg);
        doPost("ap_addTenementInfo.action", obj, function (data) {

            if (data.code == 0) {
                toast(data.message);

                if(window.isaddofedit==0){
                    window.nextpage=2;
                    $.mobile.changePage("../leasehouse/secondstep.html");

                    findtenementInfo();
                }else{
                    $.mobile.changePage("../leasehouse/secondEdit.html");
                    findtenementInfo1();
                }

            } else {
                toast(data.message);
            }
        }, "", "");
    }
    //修改
    function updateTenementInfo(){

        var id = window.currTenantInfo.id;
        var idNo = $("#tenant_card").val();
        var idName = $("#tenant_name").val();
        var phoneNo = $("#tenant_phone").val();
        var personType = window.personType;
        if(personType==""){
            personType = window.currTenantInfo.personType;
        }
        var stayNo = $("#tenant_permit").val();
        var nativePlace = $("#tenant_place").val();
        var houseno = window.houseId;
        var personSex = window.personSex;
        var relationship = $("#tenant_relationship").val();
        var nation = $("#tenant_nation").val();
        var obj = "";
        obj += toJson("id", id) + "&";
        obj += toJson("idNo", idNo) + "&";
        obj += toJson("idName", idName) + "&";
        obj += toJson("phoneNo", phoneNo) + "&";
        obj += toJson("personType", personType) + "&";
        obj += toJson("nativePlace", nativePlace) + "&";
        obj += toJson("stayNo", stayNo) + "&";
        obj += toJson("houseno", houseno)+ "&";
        obj += toJson("delflag", "0")+ "&";
        obj += toJson("sex", personSex)+ "&";
        obj += toJson("relationship", relationship)+ "&";
        obj += toJson("nation", nation)+ "&";
        obj += toJson("attachmentPath", window.picture_upImg);
        doPost("ap_editTenementInfo.action", obj, function (data) {

            if (data.code == 0) {
                toast(data.message);

                if(window.isaddofedit==0){
                    window.nextpage=2;
                    $.mobile.changePage("../leasehouse/secondstep.html");

                    findtenementInfo();
                }else{
                    $.mobile.changePage("../leasehouse/secondEdit.html");
                    findtenementInfo1();
                }

            } else {
                toast(data.message);
            }
        }, "", "");
    }
    /**
     * 直接拍照
     */
    function getPhotographTenant() {
        var html='<div class="max-dialog">'
            +   '<div class="max-dialog-masker"></div>'
            +   '<div style="position:absolute;width:100%;bottom:0;text-align:center;background:#fff;">'
            +       '<div style="padding:15px;border-bottom:solid 1px #eee;" class="btn1">拍照</div>'
            +       '<div style="padding:15px;" class="btn2">相册</div>'
            +   '</div>'
            +'</div>';
        var $html=$(html).appendTo('.ui-page-active');
        $html.find(".max-dialog-masker").click(function () {
            $html.remove();
        });
        $html.find(".btn1").click(function () {
            navigator.camera.getPicture(getOnlyPhotoTenant, userPicFail, {
                //destinationType: Camera.DestinationType.DATA_URL
            });
            $html.remove();
        });
        $html.find(".btn2").click(function () {
            navigator.camera.getPicture(getOnlyPhotoTenant, userPicFail, {
                //destinationType: Camera.DestinationType.DATA_URL
                sourceType:Camera.PictureSourceType.PHOTOLIBRARY
            });
            $html.remove();
        });

    }
    /*获取图片的成功回调*/
    function getOnlyPhotoTenant(url) {
        console.log("开始调用方法：" + url);
        compressImage(url, 300, function (base64) {
            console.log("获取到了图片");
            if (!isNull(window.picture_array) && window.picture_array.length > 0) {

            } else {
                $("#" + window.upload_addimg).empty();
                console.log("第一张图片");
                //拍第一张图片
                window.picture_array = new Array();
                window.picture_array[0] = base64;
                var commodity_add_img_info = "";
                commodity_add_img_info += ' <div class="imgdiv">';
                commodity_add_img_info += '     <img class="delimg" src="/staitc/resources/images/del3.png">';
                commodity_add_img_info += '     <img class="goodsimgone" src="' + base64 + '">';
                commodity_add_img_info += ' </div>';
                imgWidth(window.upload_imgscroll, window.upload_imgwrapper, window.picture_array.length, window.upload_addimg);
                var $commodity_add_img = createListRow(commodity_add_img_info).appendTo("#" + window.upload_addimg);
                $("#good_num").val(window.picture_array.length + "/1");
                var $add_img = "";
                /*  if (window.picture_array.length < 2) {
                     var add_img = '<img class="goodsimgone" style="padding-top:2em;margin-left:1.5em;" src="/staitc/resources/images/icon_add_photo.png" id="choicemore">';
                     $("#" + window.upload_addimg + " #choicemore").remove();
                     $add_img = createListRow(add_img).appendTo("#" + window.upload_addimg);
                     $add_img.click(function (e) {
                         getPhotographTenant();
                     });
                 } */

                $commodity_add_img.data('data', window.picture_array[0]);
                $commodity_add_img.listen("quickClick", function (e) {
                    //点击事件
                    var data = $(e.currentTarget).data("data");
                    $(e.currentTarget).hide();
                    //  if (window.picture_array.length < 5) {
                    var add_img = '<img class="goodsimgone" style="padding-top:2em;padding-left:1.5em;" src="/staitc/resources/images/icon_add_photo.png" id="choicemore">';
                    $("#" + window.upload_addimg + " #choicemore").remove();
                    var $add_img = createListRow(add_img).appendTo("#" + window.upload_addimg);
                    //  }
                    $add_img.click(function (e) {
                        getPhotographTenant();
                    });
                    for (var i = 0; i < window.picture_array.length; i++) {
                        if (window.picture_array[i] == data) {
                            window.picture_array.splice(i, 1);
                            $("#good_num").val(window.picture_array.length + "/1");
                            $(".max-confirm2").remove();
                            break;
                        }
                    }
                });
            }
        });
        console.log("图片：" + window.picture_array);
    }
</script>

<style scoped>
    #house_tenant_page .page_header .right_img {
        width: 2em;
        top: 0.2em;
    }

    /*img start*/
    #house_tenant_page .commodityAddImgs {
        overflow: hidden;
        background: #f3f3f3;
    }

    #house_tenant_page .imgdiv {
        padding: 0.7em;
        padding-top: 0em;
        position: relative;
        width: 6em;
        float: left;
    }

    #house_tenant_page .goodsimgone {
        float: left;
        height: 6em;
        width: 6em;
        margin-top: -1em;
    }

    #house_tenant_page .delimg {
        width: 2em;
        height: 2em;
        position: relative;
        top: 0em;
        left: 5em;
    }

    #house_tenant_page #tenant_edit_img {
        height: 7.5em;
        overflow: hidden;
        display: inline-block;
    }

    #house_tenant_page .goodsimgone {
        float: left;
        height: 6em;
        width: 6em;
        margin-top: -1em;
    }

    /*img end*/
    #house_tenant_page .div_input_value_img {
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
    #house_tenant_page .KpiTcbackG .naturecontent{
        width:50%;
        margin:50% auto 0;
        background: #fff;
        border-radius: 6px;
        padding: 5%;height:254px;
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
</style>
