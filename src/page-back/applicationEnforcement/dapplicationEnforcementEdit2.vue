<template>
<div data-role="page" id="random_task_page">
    <div class="page_header">
        <img class="left_img back-button" src="/staitc/resources/images/icon_white_back.png" />
        <div class="page_header_title">任务查看</div>

    </div>
    <div class="page_content">
        <div id="random_task_wrapper" class="jszx-wrapper">
            <div class="jszx-scroller">
                <div class="html_margin white_background">
                    <table class="inp_table" cellpadding="0" cellspacing="0">
                        <tr>
                            <td style="padding-top:0.5em;">名称<span>*</span></td>
                            <td colspan="2">
                                <input class="small gray_dark_font" style="color:#999999;" id="application_name" />
                            </td>
                        </tr>
                        <tr>
                            <td style="padding-top:0.5em;">责任人<span>*</span></td>
                            <td colspan="2">
                                <input class="small gray_dark_font" style="color:#999999;" id="responsibility_people" />
                            </td>
                        </tr>
                        <tr>
                            <td style="padding-top:0.5em;">要求完成时间<span>*</span></td>
                            <td colspan="2">
                                <input class="small gray_dark_font" style="color:#999999;" id="completely_time" />
                            </td>
                        </tr>
                        <!--    <tr>
                            <td style="padding-top:0.5em;" colspan="3">
                               <img src="../repair/images/KpiactiveImg.png" style="width:7%;vertical-align: middle;">
                              <span class="disI vm" style="line-height: 40px;color:#9f9f9f">我我我</span>
                            </td>
                        </tr>
                        <tr>
                            <td>上传凭证</td>
                            <td colspan="2">
                                <input id="good_num" class="small" value="0/3" readonly type="text">
                            </td>
                        </tr>
                        <tr>
                            <td colspan="3" class="commodityAddImgs">
                                <div id="task_edit_img_wrapper1" class="jszx-wrapper">
                                    <div class="jszx-scroller" id="task_edit_img_scroll1">
                                        <div id="task_edit_img1"></div>
                                    </div>
                                </div>
                            </td>
                        </tr> -->

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

            <div id="tenantcommit" class="alert_bottom_three orange_background ">确 认</div>

        </div>
    </div>
</div>
</template>

<script>
export default {
    mounted() {
        window.searchPage = 2;
        $("#random_task_page").live("pageshow", function () {
            initCaseEdit();
            /*返回*/
            $("#random_task_page .back-button").listen("quickClick", function (e) {
                app.$router.push("../applicationEnforcement/applicationEnforcementList.html");
            });

            //商品图片
            $("#random_task_page .goodsimgone").click(function (e) {
                window.upload_imgscroll = "task_edit_img_scroll1";
                window.upload_imgwrapper = "task_edit_img_wrapper";
                window.upload_addimg = "task_edit_img1";
                getPhotograph();
            });
            /*保存*/
            /*     $("#random_task_page .page_footer").listen("quickClick", function (e) {
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

        function initCaseEdit() {
            $("#random_task_wrapper")[0].style.height = window.localInnerHeight - $("#random_task_page .page_header").height() - $("#random_task_page .page_footer").height() + "px";
            initScroll({
                "wrapper": "random_task_wrapper",
                "dir": "y",
                "bounce": false,
                "scrollBar": true
            });
            scrollToTop("random_task_wrapper");
            leaderCaseEdit();
            window.leadercommitFlag = 0;
        }

        function leaderCaseEdit() {
            $("#random_task_page table tr td").addClass("gray_line_bottom");
            $("#random_task_page table tr td input").val("");
            $("#random_task_page table tr td textarea").val("");
            //图片集合

            window.picture_array = [];
            window.picture_upImg = "";
            window.orginId = ""; //工单来源
            window.choiceThingsParts = ""; //职能事项
            initMapInfo("#leader_edit_address");
            window.choiceThingsParts = ""; // 职能事项：
            window.choiceBigType = ""; //部件大类：
            window.choiceSmallType = ""; //部件小类
            window.choiceOneGridId = ""; //网格
            $("#task_edit_img_scroll1").css("transform", "none");
            $("#task_edit_img_wrapper .scroll-bar-x").css("transform", "none");
            $("#leader_words").val("0/150");
            $("#random_task_page #task_edit_img1").empty();
            $("#random_task_page #task_edit_img1").append('<img class="goodsimgone" style="padding-top:2em;" src="/staitc/resources/images/icon_add_photo.png" >');
        }
        //部门名称
        function app_gethousenature(type, source) {
            var obj = "";
            $('.KpiTcbackG').remove();
            var info = '<div class="KpiTcbackG" style="display:none;">' +
                '<div class="naturecontent">' +
                '<p>选择建筑性质</p>' +
                '<form style="padding:3% 5%;">' +

                '<div class="tc mt5">' +
                '<div class="natureselect">合法</div><div class="natureselect" style="border-top: 1px solid #cccccc;">非法</span>' +
                '</div>' +
                '</form>' +
                '</div>' +
                '</div>';

            $('#random_task_page').append($(info));
            //$('#leader_one_html').html(info);                         
            //确定按钮
            $('#random_task_page').find('.natureselect').listen("quickClick", function (e) {
                var val = $(e.currentTarget).text();
                $("#natureValue").text(val);
                $('#random_task_page').find('.KpiTcbackG').hide();

            });
            $('#random_task_page').find('.KpiTcbackG').show();

        }
        //上报

        function appWorkOrder_leaderOrderReport(componentIdNo, problem, deadline, reportTime, doDeptArr) {
            var doDeptStr = "";
            if (doDeptArr.length > 0) {
                for (var i = 0; i < doDeptArr.length; i++) {
                    if (i == doDeptArr.length - 1) {
                        doDeptStr += doDeptArr[i].deptCode;
                    } else {
                        doDeptStr += doDeptArr[i].deptCode + ';';
                    }
                }
            }
            console.error("zhangsan::" + JSON.stringify(window.doDeptArr));
            console.error("zhangsan::" + doDeptStr);

            console.log("上传的图片信息：" + window.picture_upImg + "经纬度：" + window.choiceLongitude + "," + window.choiceLatitude);
            var obj = "";
            obj += toJson("origin", "0") + "&"; //工单来源 4:巡查人员上报
            obj += toJson("loginId", window.localStorage.loginId) + "&"; //工单来源 4:巡查人员上报 
            obj += toJson("eventComponent", $.trim(window.choiceThingsParts)) + "&"; //职能事项
            obj += toJson("bigClass", $.trim(window.choiceBigType)) + "&"; //大类
            obj += toJson("smallClass", $.trim(window.choiceSmallType)) + "&"; //小类类 
            obj += toJson("problem", $.trim(problem)) + "&"; //问题描述
            obj += toJson("reportPics", window.picture_upImg) + "&"; //图片 
            obj += toJson("reportTime", $.trim(reportTime)) + "&"; //上报时间
            obj += toJson("deadLine", $.trim(deadline)) + "&";; //截止时间
            obj += toJson("gridId", doDeptStr); //处置部门
            doPost("LeaderCaseReport.action", obj, function (data) {
                window.leadercommitFlag = 0;
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

    }
}
</script>

<style lang="less" scoped>
#random_task_page .page_header .right_img {
    width: 2em;
    top: 0.2em;
}

/*img start*/
#random_task_page .commodityAddImgs {
    overflow: hidden;
    background: #f3f3f3;
}

#random_task_page .imgdiv {
    padding: 0.7em;
    padding-top: 0em;
    position: relative;
    width: 6em;
    float: left;
}

#random_task_page .goodsimgone {
    float: left;
    height: 6em;
    width: 6em;
    margin-top: -1em;
}

#random_task_page .delimg {
    width: 2em;
    height: 2em;
    position: relative;
    top: 0em;
    left: 5em;
}

#random_task_page #task_edit_img1 {
    height: 7.5em;
    overflow: hidden;
    display: inline-block;
}

#random_task_page .goodsimgone {
    float: left;
    height: 6em;
    width: 6em;
    margin-top: -1em;
}

/*img end*/
#random_task_page .div_input_value_img {
    width: 1.5em;
    height: 1.5em;
    padding-right: 0.5em;
}

/*复选框样式*/
.KpiTcbackG {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: 20;
    background: rgba(0, 0, 0, 0.5);
}

.KpiTcbackG .naturecontent {
    width: 50%;
    margin: 50% auto 0;
    background: #fff;
    border-radius: 6px;
    padding: 5%;
    height: 200px;
    overflow-y: auto;
}

.webkit-appearance {
    -webkit-appearance: checkbox !important;
}

.disI {
    display: inline-block;
}

.vm {
    vertical-align: middle;
}

.f14 {
    font-size: 14px;
}

.KpiFormBut {
    width: 30%;
    background: #f5a035;
    padding: 1.5%;
    border-radius: 3px;
    color: #fff;
    display: inline-block;
}

.tc {
    text-align: center;
}

.mt5 {
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

#fragment-1,
#fragment-2,
#fragment-3 {
    width: 100%;
    display: none;
    text-align: left;
    margin-left: 22px;
    margin-top: 12px;
}

.action {
    border-bottom: 2px solid red;
    height: 43px;
}

.select_type {
    position: absolute;
    background-color: #fff;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    width: 50%;
    height: 30%;
    margin: auto;
}

.natureselect {
    padding: 1.5em;
}

.divinline {
    display: inline-block;
    width: 8em;
}

.stepstyle {
    position:relative;
    height: 5em;
}

.stepcircle {
    top: 2em;
    width: 2em;
    bottom: 3em;
    height: 2em;
    border-radius: 2.5em;
    left: 6em;
    border: 1px solid #25e020;
    position: absolute;
    line-height: 2em;
    text-align: center;
    padding: 0.1em;
    background: #25e020;
    font-size: 0.5em;
    color: #fff;
}

.stepcircle2 {
    top: 2em;
    width: 2em;
    bottom: 3em;
    height: 2em;
    border-radius: 2.5em;
    left: 16em;
    border: 1px solid #c9dac9;
    position: absolute;
    line-height: 2em;
    text-align: center;
    padding: 0.1em;
    background: #c9dac9;
    font-size: 0.5em;
    color: #fff;
}

.stepcircle3 {
    top: 2em;
    width: 2em;
    bottom: 3em;
    height: 2em;
    border-radius: 2.5em;
    left: 26em;
    border: 1px solid #c9dac9;
    position: absolute;
    line-height: 2em;
    text-align: center;
    padding: 0.1em;
    background: #c9dac9;
    font-size: 0.5em;
    color: #fff;
}

.stepline {
    position: absolute;
    left: 6em;
    top: 2.5em;
    margin-top: -1px;
    width: 6em;
    height: 2px;
    background: #ccc;
}

.stepline2 {
    position: absolute;
    left: 13.5em;
    top: 2.5em;
    margin-top: -1px;
    width: 6em;
    height: 2px;
    background: #ccc;
}
</style>
