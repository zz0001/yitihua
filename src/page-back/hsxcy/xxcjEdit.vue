<template>
    <div data-role="page" id="xxcj_edit_page">
        <tk-header>
            巡查上报
        </tk-header>
        <div class="page_content">
            <div id="xxcj_edit_wrapper" class="jszx-wrapper">
                <div class="jszx-scroller">
                    <div class="html_margin white_background">
                        <div class="firrstTitle">
                            <p><span></span><span id="firstdmmc"> </span></p>
                        </div>
                        <div class="secondTitle">
                            <span id="seconddmmc"> </span>
                        </div>
                        <tk-switch name="有问题" v-model="isReport">

                        </tk-switch>
                        <!--<div style="line-height: 26px;">-->
                            <!--<input id="nohas" type="radio" value="0" name="xxcj">无</input>-->
                        <!--</div>-->
                        <!--<div style="line-height: 26px;">-->
                            <!--<input id="has" type="radio" value="1" name="xxcj">有</input>-->
                        <!--</div>-->
                        <div id="imgtitle_tr">
                            <tk-title>上传图片</tk-title>
                            <tk-upload-photo v-model="imagesReport"></tk-upload-photo>
                        </div>

                        <table class="inp_table" cellpadding="0" cellspacing="0">


                            <tr id="location_tr">
                                <td style="min-width: 5em;" class="">位置描述<span>*</span></td>
                                <td style="padding:1em 0.5em 1em 0em;line-height: 1.4em;text-align: right;"
                                >
                                    <div contenteditable="true" id="xxcj_edit_address"></div>
                                </td>
                                <td style="width: 1%;" id="xxcj_edit_address_img">
                                    <img class="div_input_value_img" src="/staitc/resources/images/icon_dz.png"/>
                                </td>
                            </tr>

                            <!--<tr id="imgtitle_tr">-->
                                <!--<td>上传图片</td>-->
                                <!--<td colspan="2">-->
                                    <!--&lt;!&ndash;<input id="good_num" class="small" value="0/5" readonly type="text">&ndash;&gt;-->

                                <!--</td>-->
                            <!--</tr>-->
                            <!--<tr id="img_tr">-->
                                <!--<td colspan="3" class="commodityAddImgs">-->
                                    <!--<div id="xxcj_edit_img_wrapper" class="jszx-wrapper">-->
                                        <!--<div class="jszx-scroller" id="xxcj_edit_img_scroll">-->
                                            <!--<div id="xxcj_edit_img"></div>-->
                                        <!--</div>-->
                                    <!--</div>-->
                                <!--</td>-->
                            <!--</tr>-->
                            <tr id="questiontitle_tr">
                                <td style="padding-top:0.5em;">问题描述<span>*</span></td>
                                <td colspan="2">
                                    <input class="small gray_dark_font" style="color:#999999;" readonly="true"
                                           id="xxcj_words"/>
                                </td>
                            </tr>
                            <tr id="question_tr">
                                <td colspan="3">
                            <textarea
                                    onfocus="newCheckWord('xxcj_edit_problem',500,'xxcj_words')"
                                    onKeyUp="javascript:newCheckWord('xxcj_edit_problem',500,'xxcj_words');"
                                    onMouseDown="javascript:newCheckWord('xxcj_edit_problem',500,'xxcj_words');"
                                    placeholder="请输入问题描述" id="xxcj_edit_problem"
                                    style="text-align:left;min-height: 5em;padding:0em 0.5em 0em 1em;"></textarea>

                                </td>
                            </tr>
                        </table>
                        <div id="selsetdispose_div">
                            <div class="secondTitle">
                                <span>是否自行处理</span>
                            </div>
                            <tk-switch name="自行处理" v-model="iszxcz">   </tk-switch>
                            <!--<div style="line-height: 26px;">-->
                                <!--<input id="nozxcl" type="radio" value="0" name="zxcl">否</input>-->
                            <!--</div>-->
                            <!--<div style="line-height: 26px;">-->
                                <!--<input id="yeszxcl" type="radio" value="1" name="zxcl">是</input>-->
                            <!--</div>-->
                            <div id="cl_img_tr">
                                <tk-title>上传处理图片</tk-title>
                                <tk-upload-photo v-model="imageszxcz"></tk-upload-photo>
                            </div>
                            <table id="cl_table" class="inp_table" cellpadding="0" cellspacing="0">


                                <!--<tr id="cl_imgtitle_tr">-->
                                    <!--<td>上传处理图片</td>-->
                                    <!--<td colspan="2">-->
                                        <!--<input id="cl_good_num" class="small" value="0/5" readonly type="text">-->
                                    <!--</td>-->
                                <!--</tr>-->
                                <!--<tr id="cl_img_tr">-->
                                    <!--<td colspan="3" class="commodityAddImgs">-->
                                        <!--<div id="cl_xxcj_edit_img_wrapper" class="jszx-wrapper">-->
                                            <!--<div class="jszx-scroller" id="cl_xxcj_edit_img_scroll">-->
                                                <!--<div id="cl_xxcj_edit_img"></div>-->
                                            <!--</div>-->
                                        <!--</div>-->
                                    <!--</td>-->
                                <!--</tr>-->
                                <tr id="cl_questiontitle_tr">
                                    <td style="padding-top:0.5em;">处理结果</td>
                                    <td colspan="2">
                                        <input class="small gray_dark_font" style="color:#999999;" readonly="true"
                                               id="cl_xxcj_words"/>
                                    </td>
                                </tr>
                                <tr id="cl_question_tr">
                                    <td colspan="3">
                            <textarea
                                    onfocus="newCheckWord('cl_xxcj_edit_problem',500,'cl_xxcj_words')"
                                    onKeyUp="javascript:newCheckWord('cl_xxcj_edit_problem',500,'cl_xxcj_words');"
                                    onMouseDown="javascript:newCheckWord('cl_xxcj_edit_problem',500,'cl_xxcj_words');"
                                    placeholder="请输入问题描述" id="cl_xxcj_edit_problem"
                                    style="text-align:left;min-height: 5em;padding:0em 0.5em 0em 1em;"></textarea>

                                    </td>
                                </tr>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="page_footer">
            <div class="footer_button_div">
                <div id="save_returnAddress" class="alert_bottom_three orange_background">上报</div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "",
        data(){
            return {
                isReport:true,
                iszxcz:true,
                imagesReport:[],
                imageszxcz:[]
            }
        },
        watch:{
            isReport(newv){
                if(newv==true){
                    $("#imgtitle_tr").show();
                    $("#img_tr").show();
                    $("#questiontitle_tr").show();
                    $("#question_tr").show();
                    window.area = "1";
                }else{
                    $("#imgtitle_tr").hide();
                    $("#img_tr").hide();
                    $("#questiontitle_tr").hide();
                    $("#question_tr").hide();
                    window.area = "0";
                }
            },
            iszxcz(newx){
                if(newx==true){
                    $("#cl_table").show();
                    $("#cl_img_tr").show();
                    window.disposeselect = "1";
                }else{
                    $("#cl_table").hide();
                    $("#cl_img_tr").hide();
                    window.disposeselect = "0";
                }

            }
        },
        mounted() {
            var that = this;
            window.searchPage = 2;

            //设置标题栏，内容栏，底部内容高度
            $(".page_content")[0].style.height = window.localInnerHeight - $(".page_header").height() - $(".page_footer").height() + "px";
            $(".page_content").children("div").get(0).style.height = window.localInnerHeight - $(".page_header").height() - $(".page_footer").height() + "px";
            //设置input和textarea的样式
            $("input").addClass("small gray_dark_font ui-input-text ui-body-c ui-corner-all ui-shadow-inset");
            $("textarea").addClass("ui-input-text ui-body-c ui-corner-all ui-shadow-inset");

            initXxcjEdit();
            /*返回*/
            $("#xxcj_edit_page .back-button").listen("quickClick", function (e) {
                that.$router.back();
            });
            //table1
            $('input[type=radio][name=xxcj]').change(function () {
                if (this.value == '0') {
                    //    $("#xxcj_area_tr").hide();
                    $("#imgtitle_tr").hide();
                    $("#img_tr").hide();
                    $("#questiontitle_tr").hide();
                    $("#question_tr").hide();
                    window.area = "0";
                } else if (this.value == '1') {
                    //    $("#xxcj_area_tr").show();
                    $("#imgtitle_tr").show();
                    $("#img_tr").show();
                    $("#questiontitle_tr").show();
                    $("#question_tr").show();
                    window.area = "1";
                }
            });
            //table12
            $('input[type=radio][name=zxcl]').change(function () {
                if (this.value == '0') {
                    $("#cl_table").hide();
                    window.disposeselect = "0";
                } else if (this.value == '1') {
                    $("#cl_table").show();
                    window.disposeselect = "1";
                }
            });

            //位置
            $("#xxcj_edit_page #xxcj_edit_address_img").listen("quickClick", function (e) {
                showMapAlert("请选择位置", "确定", "", function () {
                    $("#xxcj_edit_address").html($("#map_html_address").html());

                    // console.log($("#map_html_address").html() + "\t,选中的经纬度：" + window.choiceLongitude + "\t," + window.choiceLatitude);
                    $(".mapshowalert").remove();
                });
            });

            //商品图片
            $("#xxcj_edit_page #choicexxcj").click(function (e) {
                window.upload_imgscroll = "xxcj_edit_img_scroll";
                window.upload_imgwrapper = "xxcj_edit_img_wrapper";
                window.upload_addimg = "xxcj_edit_img";
                getPhotograph();
            });
            //商品图片
            $("#xxcj_edit_page #cl_choicemore").click(function (e) {
                window.upload_imgscroll = "cl_xxcj_edit_img_scroll";
                window.upload_imgwrapper = "cl_xxcj_edit_img_wrapper";
                window.upload_addimg = "cl_xxcj_edit_img";
                getzxclPhotograph();
            });
            /*保存*/
            $("#xxcj_edit_page .page_footer").listen("quickClick", function (e) {
                // alert("window.choiceLongitude:"+window.choiceLongitude)
                var flag = checkTextSpace($("#xxcj_edit_problem").val());
                //var questions = $('input[name="xxcj"]:checked').val();
                var dmmc = window.firstdmmc;
                var xxcjpath = window.xxcjpath;
                var area = window.area;
                window.picture_array=that.imagesReport;
                window.picture_array2=that.imageszxcz;
                /* 	if(window.commitFlag){

                    }else{ */

                if (isNull($("#xxcj_edit_address").text())) {
                    toast("位置不能为空");
                }
                else if (isNull(window.picture_array) && that.isReport == true && xxcjpath == "1") {
                    toast("上报图片不能为空");
                } else if ((isNull($("#xxcj_edit_problem").val()) || flag == false) && that.isReport == true) {
                    if (flag == false) {
                        toast("问题描述请不要输入空格");
                    } else {
                        toast("请输入问题描述");
                    }
                }
                   else if (isNull(window.picture_array2)&&window.disposeselect=="1") {
                      toast("处理图片不能为空");
                  }
                else {
                    showContentAlert("确认保存本次提交吗？", function () {
                    }, function () {
                        window.commitFlag = 1;
                        $("#save_returnAddress").removeClass("orange_background");
                        $("#save_returnAddress").addClass("gray_gray_background");

                        if (!isNull(window.picture_array) || window.picture_array.length > 0) {
                            showLoading("上传中", "", "", "/staitc/resources/images/loading.gif");
                            window.picture_upImg = "";
                            xxcj_upLoadPic(window.picture_array[0], 1);
                        } else {
                            xxcjReport();
                        }
                    }, "确定");
                }
                //}
            });


            function initXxcjEdit() {
                $("#xxcj_edit_wrapper")[0].style.height = window.localInnerHeight - $("#xxcj_edit_page .page_header").height() - $("#xxcj_edit_page .page_footer").height() + "px";
                initScroll({
                    "wrapper": "xxcj_edit_wrapper",
                    "dir": "y",
                    "bounce": false,
                    "scrollBar": true
                });
                scrollToTop("xxcj_edit_wrapper");
                window.picture_array = [];
                window.picture_array2 = [];
                $("#xxcj_edit_img_scroll").css("transform", "none");
                $("#xxcjk_edit_img_wrapper .scroll-bar-x").css("transform", "none");

                $("#xxcj_edit_page #xxcj_edit_img").empty();
                $("#xxcj_edit_page #xxcj_edit_img").append('<img class="goodsimgone" style="padding-top:2em;" src="/staitc/resources/images/icon_add_photo.png" id="choicexxcj">');

                $("#cl_xxcj_edit_img_scroll").css("transform", "none");
                $("#cl_xxcj_edit_img_wrapper .scroll-bar-x").css("transform", "none");

                $("#xxcj_edit_page #cl_xxcj_edit_img").empty();
                $("#xxcj_edit_page #cl_xxcj_edit_img").append('<img class="goodsimgone" style="padding-top:2em;" src="/staitc/resources/images/icon_add_photo.png" id="cl_choicemore">');

                clearAlledit();
                //locate();
            }

            //验证内容是否包含空格
            function checkTextSpace(value) {
                var pattern = /\s/;
                if (pattern.test(value)) {
                    return false;
                }
                return true;
            }

            //clear
            function clearAlledit() {
                window.picture_upImg = "";
                window.picture_upImg2 = "";
                $("#firstdmmc").text(window.firstdmmc);
                $("#seconddmmc").text(window.seconddmmc);
                $("#xxcj_edit_address").text(window.localStorage.mapAddress);
                $("#xxcj_edit_problem").val("");
                // $("#xxcj_area").val("");
                //  $("#xxcj_area_tr").show();
                $("#imgtitle_tr").show();
                $("#img_tr").show();
                $("#questiontitle_tr").show();
                $("#question_tr").show();

                $("#good_num").val("0/5");
                $("#xxcj_words").val("0/500");
                $("#cl_xxcj_edit_problem").val("");
                $('input[type=radio][name="xxcj"]:checked').prop("checked", false);
                $('#has').prop("checked", true);
                window.disposeselect = "1";
                //$("#cl_table").hide();
                if (window.dispose == "1") {
                    $("#selsetdispose_div").show();
                } else {
                    $("#selsetdispose_div").hide();
                }
                $("#cl_good_num").val("0/5");
                $("#cl_xxcj_words").val("0/500");
                $('input[type=radio][name="zxcl"]:checked').prop("checked", false);
                $('#yeszxcl').prop("checked", true);
                $("#save_returnAddress").removeClass("gray_gray_background");
                $("#save_returnAddress").addClass("orange_background");
            }

            //
            function xxcjReport() {
                console.log("上传的图片信息：" + window.picture_upImg + "经纬度：" + window.choiceLongitude + "," + window.choiceLatitude);

                var address = $("#xxcj_edit_address").text();
                var problem = $("#xxcj_edit_problem").val();
                //  var area=$("#xxcj_area").val();
               // var questions = $('input[name="xxcj"]:checked').val();
                var questions="1";
                var disposeselect="1";
                if(that.isReport==false){
                    questions="0";
                }
                if(that.iszxcz==false){
                    disposeselect="0";
                }

                var disposeResult = $("#cl_xxcj_edit_problem").val();
                var obj = "";
                obj += toJson("origin", "4") + "&";//工单来源 4:巡查人员上报
                obj += toJson("loginId", $.trim(window.localStorage.loginId)) + "&";//上报人id

                obj += toJson("eventComponent", $.trim(window.eventComponent)) + "&";//职能事项
                obj += toJson("bigClass", $.trim(window.bigClass)) + "&";//大类
                obj += toJson("location", $.trim(address)) + "&";//位置描述
                obj += toJson("problem", $.trim(problem)) + "&";//问题描述
                obj += toJson("reportPics", window.picture_upImg) + "&";//图片
                obj += toJson("longitude", $.trim(window.choiceLongitude)) + "&";//经度
                obj += toJson("latitude", $.trim(window.choiceLatitude)) + "&";//纬度
                obj += toJson("questionStatus", $.trim(questions)) + "&";//上报时间
                obj += toJson("score", $.trim(window.score)) + "&";
                obj += toJson("dispose", $.trim(disposeselect)) + "&";//
                obj += toJson("backPath", $.trim(window.picture_upImg2)) + "&";
                obj += toJson("disposeResult", $.trim(disposeResult));
                //  obj += toJson("area", $.trim(area));//
                doPost("MobileCaseReport.action", obj, function (data) {

                    window.commitFlag = 0;
                    $("#save_returnAddress").removeClass("gray_gray_background");
                    $("#save_returnAddress").addClass("orange_background");
                    if (data.code == 0) {
                        hideLoading();
                        toast(data.message);
                        window.currstep = "1";
                     //   waitJumpPage("../hsxcy/xxcjList.html");
                        that.$router.push({path:'xxcjList',query:{}});
                    } else {
                        hideLoading();
                        toast(data.message);
                    }
                }, "", "");
            }

            function xxcj_upLoadPic(img, type, source) {
                var obj = "";
                obj += toJson("base64Str", img);
                doPost("appWorkOrder_upLoadPic.action", obj, function (data) {
                    if (data.code == 0) {
                        console.log("1111111111111111当前上传第:" + type + "张,下次上传第" + type + "张");
                        if (type < parseInt(window.picture_array.length)) {
                            console.log("当前上传第:" + type + "张,下次上传第" + type + "张");
                            var typename = parseInt(type) + 1;
                            xxcj_upLoadPic(window.picture_array[type], typename, source);
                        } else {
                            console.log("图片上传结束");
                        }
                        if (isNull(window.picture_upImg)) {
                            window.picture_upImg = data.data;
                        } else {
                            window.picture_upImg = window.picture_upImg + ";" + data.data;
                        }
                        console.log("图片数据：" + window.picture_upImg);
                        //toast(data.message);
                        if (parseInt(type) == window.picture_array.length) {
                            if (isNull(source)) {
                                //问题上报

                                if (window.disposeselect == "1") {
                                    if (isNull(window.picture_array2)) {
                                        toast("处理图片不能为空");
                                    } else {
                                        xxcj_upLoadPic2(window.picture_array2[0], 1);
                                    }

                                } else {
                                    xxcjReport();
                                }

                            } else if ("caseTaskEdit" == source) {
                                //工单处理
                                //  appWorkOrder_workOrderProcess($("#case_task_edit_problem").val());
                            }
                        }
                    } else {
                        toast(data.message);
                    }
                }, "", "");
            }

            /**
             * 直接拍照
             */
            function getzxclPhotograph() {
                var html = '<div class="max-dialog">'
                    + '<div class="max-dialog-masker"></div>'
                    + '<div style="position:absolute;width:100%;bottom:0;text-align:center;background:#fff;">'
                    + '<div style="padding:15px;border-bottom:solid 1px #eee;" class="btn1">拍照</div>'
                    + '<div style="padding:15px;" class="btn2">相册</div>'
                    + '</div>'
                    + '</div>';
                var $html = $(html).appendTo('.ui-page-active');
                $html.find(".max-dialog-masker").click(function () {
                    $html.remove();
                });
                $html.find(".btn1").click(function () {
                    navigator.camera.getPicture(getzxclOnlyPhoto, userPicFail, {
                        //destinationType: Camera.DestinationType.DATA_URL
                    });

                    $html.remove();
                });
                $html.find(".btn2").click(function () {
                    navigator.camera.getPicture(getzxclOnlyPhoto, userPicFail, {
                        //destinationType: Camera.DestinationType.DATA_URL
                        sourceType: Camera.PictureSourceType.PHOTOLIBRARY
                    });

                    $html.remove();
                });

            }

            function getzxclOnlyPhoto(url) {
                console.log("开始调用方法：" + url);
                compressImage(url, 300, function (base64) {
                    console.log("获取到了图片");
                    if (!isNull(window.picture_array2) && window.picture_array2.length > 0) {
                        //拍非第一张图片
                        var leng = window.picture_array2.length;
                        window.picture_array2[leng] = base64;
                        var commodity_add_img_info = ' <div class="imgdiv">';
                        commodity_add_img_info += '<img class="delimg" src="/staitc/resources/images/del3.png">';
                        commodity_add_img_info += '<img class="goodsimgone" src="' + base64 + '">';
                        commodity_add_img_info += '</div>';
                        imgWidth(window.upload_imgscroll, window.upload_imgwrapper, window.picture_array2.length, window.upload_addimg);
                        $("#cl_good_num").val(window.picture_array2.length + "/5");
                        var $commodity_add_img_info = createListRow(commodity_add_img_info).appendTo("#" + window.upload_addimg);
                        var $add_img = "";
                        if (window.picture_array2.length > 4) {
                            $("#" + window.upload_addimg + " #cl_choicemore").remove();
                        } else {
                            var add_img = '<img class="goodsimgone" style="padding-top:2em;padding-left:1.5em;" src="/staitc/resources/images/icon_add_photo.png" id="cl_choicemore">';
                            $("#" + window.upload_addimg + " #cl_choicemore").remove();
                            $add_img = createListRow(add_img).appendTo("#" + window.upload_addimg);
                            $add_img.click(function (e) {
                                getzxclPhotograph();
                            });
                        }
                        $commodity_add_img_info.data('data', window.picture_array2[leng]);
                        $commodity_add_img_info.listen("quickClick", function (e) {
                            //点击事件
                            var data = $(e.currentTarget).data("data");
                            $(e.currentTarget).hide();
                            //if (window.picture_array2.length < 5) {
                            var add_img = '<img class="goodsimgone" style="margin-left:1.5em;padding-top:2em;" src="/staitc/resources/images/icon_add_photo.png" id="cl_choicemore">';
                            $("#" + window.upload_addimg + " #cl_choicemore").remove();
                            var $add_img = createListRow(add_img).appendTo("#" + window.upload_addimg);
                            //  }
                            $add_img.click(function (e) {
                                getzxclPhotograph();
                            });
                            imgWidth(window.upload_imgscroll, window.upload_imgwrapper, window.picture_array2.length, window.upload_addimg);
                            for (var i = 0; i < window.picture_array2.length; i++) {
                                if (window.picture_array2[i] == data) {
                                    $("#cl_good_num").val(window.picture_array2.length - 1 + "/5");
                                    window.picture_array2.splice(i, 1);
                                    $(".max-confirm2").remove();
                                    break;
                                }
                            }
                        });
                    } else {
                        $("#" + window.upload_addimg).empty();
                        console.log("第一张图片");
                        //拍第一张图片
                        window.picture_array2 = new Array();
                        window.picture_array2[0] = base64;
                        var commodity_add_img_info = "";
                        commodity_add_img_info += ' <div class="imgdiv">';
                        commodity_add_img_info += '     <img class="delimg" src="/staitc/resources/images/del3.png">';
                        commodity_add_img_info += '     <img class="goodsimgone" src="' + base64 + '">';
                        commodity_add_img_info += ' </div>';
                        imgWidth(window.upload_imgscroll, window.upload_imgwrapper, window.picture_array2.length, window.upload_addimg);
                        var $commodity_add_img = createListRow(commodity_add_img_info).appendTo("#" + window.upload_addimg);
                        $("#cl_good_num").val(window.picture_array2.length + "/5");
                        var $add_img = "";
                        if (window.picture_array2.length < 4) {
                            var add_img = '<img class="goodsimgone" style="padding-top:2em;margin-left:1.5em;" src="/staitc/resources/images/icon_add_photo.png" id="cl_choicemore">';
                            $("#" + window.upload_addimg + " #cl_choicemore").remove();
                            $add_img = createListRow(add_img).appendTo("#" + window.upload_addimg);
                            $add_img.click(function (e) {
                                getzxclPhotograph();
                            });
                        }

                        $commodity_add_img.data('data', window.picture_array2[0]);
                        $commodity_add_img.listen("quickClick", function (e) {
                            //点击事件
                            var data = $(e.currentTarget).data("data");
                            $(e.currentTarget).hide();
                            //  if (window.picture_array2.length < 5) {
                            var add_img = '<img class="goodsimgone" style="padding-top:2em;padding-left:1.5em;" src="/staitc/resources/images/icon_add_photo.png" id="cl_choicemore">';
                            $("#" + window.upload_addimg + " #cl_choicemore").remove();
                            var $add_img = createListRow(add_img).appendTo("#" + window.upload_addimg);
                            //  }
                            $add_img.click(function (e) {
                                getzxclPhotograph();
                            });
                            for (var i = 0; i < window.picture_array2.length; i++) {
                                if (window.picture_array2[i] == data) {
                                    window.picture_array2.splice(i, 1);
                                    $("#cl_good_num").val(window.picture_array2.length + "/5");
                                    $(".max-confirm2").remove();
                                    break;
                                }
                            }
                        });
                    }
                });
                console.log("图片：" + window.picture_array2);
            }

            function xxcj_upLoadPic2(img, type, source) {
                var obj = "";
                obj += toJson("base64Str", img);
                doPost("appWorkOrder_upLoadPic.action", obj, function (data) {
                    if (data.code == 0) {
                        console.log("1111111111111111当前上传第:" + type + "张,下次上传第" + type + "张");
                        if (type < parseInt(window.picture_array2.length)) {
                            console.log("当前上传第:" + type + "张,下次上传第" + type + "张");
                            var typename = parseInt(type) + 1;
                            xxcj_upLoadPic2(window.picture_array2[type], typename, source);
                        } else {
                            console.log("图片上传结束");
                        }
                        if (isNull(window.picture_upImg2)) {
                            window.picture_upImg2 = data.data;
                        } else {
                            window.picture_upImg2 = window.picture_upImg2 + ";" + data.data;
                        }
                        // alert("图片数据：" + window.picture_upImg2);
                        //toast(data.message);
                        if (parseInt(type) == window.picture_array2.length) {
                            if (isNull(source)) {
                                //问题上报
                                xxcjReport();
                            } else if ("caseTaskEdit" == source) {
                                //工单处理
                                //  appWorkOrder_workOrderProcess($("#case_task_edit_problem").val());
                            }
                        }
                    } else {
                        toast(data.message);
                    }
                }, "", "");
            }
        }
    }
</script>

<style>
    #xxcj_edit_page .page_header .right_img {
        width: 2em;
        top: 0.2em;
    }

    /*img start*/
    #xxcj_edit_page .commodityAddImgs {
        overflow: hidden;
        background: #f3f3f3;
    }

    #xxcj_edit_page .imgdiv {
        padding: 0.7em;
        padding-top: 0em;
        position: relative;
        width: 6em;
        float: left;
    }

    #xxcj_edit_page .goodsimgone {
        float: left;
        height: 6em;
        width: 6em;
        margin-top: -1em;
    }

    #xxcj_edit_page .delimg {
        width: 2em;
        height: 2em;
        position: relative;
        top: 0em;
        left: 5em;
    }

    #xxcj_edit_page #xxcj_edit_img {
        height: 7.5em;
        overflow: hidden;
        display: inline-block;
    }

    #xxcj_edit_page .goodsimgone {
        float: left;
        height: 6em;
        width: 6em;
        margin-top: -1em;
    }

    /*img end*/
    #xxcj_edit_page .div_input_value_img {
        width: 1.5em;
        height: 1.5em;
        margin-right: 0.5em;
    }

    .firrstTitle {
        font-size: 20px;
        padding: 10px;
        font-weight: bold;
    }

    .secondTitle {
        font-size: 20px;
        padding: 20px;
    }

    #xxcj_edit_wrapper .ui-radio {
        display: inline-block;
        vertical-align: middle;
        padding-left: 40px;
    }

    #xxcj_edit_wrapper .ui-radio input {
        width: 16px;
        height: 16px;
        margin: -8px 0 0 0;
    }

    #xxcj_edit_wrapper .white_background {
        background: #FFFFFF;
    }
    .inp_table tr td:first-child{
        padding-left:13px;

    }
</style>
