<template>
    <div data-role="page" id="leadertodo_page">

        <div class="page_header">
            <img class="left_img back-button" src="/staitc/resources/images/icon_white_back.png"/>
            <div class="page_header_title">领导下派</div>

        </div>
        <div class="page_content">
            <div id="leadertodot_wrapper" class="jszx-wrapper">
                <div class="jszx-scroller">
                    <div class="html_margin white_background">
                        <table class="inp_table" cellpadding="0" cellspacing="0">
                            <!--  <tr>
                                 <td>上传图片</td>
                                 <td colspan="2">
                                     <input id="good_num" class="small" value="0/5" readonly type="text">
                                 </td>
                             </tr>
                             <tr>
                                 <td colspan="3" class="commodityAddImgs">
                                     <div id="leader_edit_img_wrapper" class="jszx-wrapper">
                                         <div class="jszx-scroller" id="leadertodo_edit_img_scroll">
                                             <div id="leader_edit_img"></div>
                                         </div>
                                     </div>
                                 </td>
                             </tr>
                               -->


                            <tr>
                                <td style="padding-top:0.5em;">任务事项<span>*</span></td>
                                <td colspan="2">
                                    <input class="small gray_dark_font" style="color:#999999;" readonly="true"
                                           id="leadertodowords"/>
                                </td>
                            </tr>
                            <tr>
                                <td colspan="3">
                            <textarea
                                    onfocus="newCheckWord('leader_todo_problem',500,'leadertodowords')"
                                    onKeyUp="javascript:newCheckWord('leader_todo_problem',500,'leadertodowords');"
                                    onMouseDown="javascript:newCheckWord('leader_todo_problem',500,'leadertodowords');"
                                    placeholder="请输入任务描述" id="leader_todo_problem"
                                    style="text-align:left;min-height: 5em;padding:0em 0.5em 0em 1em;"></textarea>

                                </td>
                            </tr>
                            <!--  <tr>
                                 <td style="padding-top:0.5em;">截止时间<span>*</span></td>
                                 <td colspan="2">
                                     <input class="small gray_dark_font" style="color:#999999;" readonly="true"
                                            id="leader_edit_endTime"/>
                                 </td>
                             </tr> -->
                            <tr>
                                <td style="padding-top:0.5em;">处置部门<span>*</span></td>
                                <td colspan="2">
                                    <input class="small gray_dark_font" style="color:#999999;" readonly="true"
                                           id="leadertodo_doDept"/>
                                </td>
                            </tr>
                            <tr>
                                <td style="padding-top:0.5em;">截止时间</td>
                                <td colspan="2">
                                    <input class="small gray_dark_font" style="color:#999999;" readonly="true"
                                           id="leadertodo_endTime"/>
                                </td>
                            </tr>
                            <tr>
                                <td style="padding-top:0.5em;padding-bottom:0.5em;width: 80px;" class="gray_line_bottom">上传文件类型</td>
                                <td colspan="2" class="gray_line_bottom">
                                    <div style="width:90%;">
                                        <select id="leadertodofileselect">
                                            <option value="xlsx" selected>excel表格</option>
                                            <option value="docx">word文档</option>
                                            <option value="txt">text文本</option>
                                        </select>
                                    </div>

                                </td>
                            </tr>
                            <tr>
                                <td style="padding-top:0.5em;padding-bottom:0.5em;width: 80px;" class="gray_line_bottom">上传附件</td>
                                <td colspan="2" class="gray_line_bottom">
                                    <!-- <input style="width:200px;" type="file" name="img" multiple="multiple" /> -->
                                    <form action="" enctype="multipart/form-data" style="text-align:center;">
                                        <input style="width:90%;" id="leadertodofile" class="filepath" onchange="leadertodochangepic(this)" type="file"><br>
                                        <!-- <img src="" id="show" width="200"> -->
                                    </form>

                                </td>
                            </tr>
                            <tr>
                                <td>上传图片</td>
                                <td colspan="2">
                                    <input id="leadertodogood_num" class="small" value="0/5" readonly type="text">
                                </td>
                            </tr>
                            <tr>
                                <td colspan="3" class="commodityAddImgs">
                                    <div id="leadertodo_edit_img_wrapper" class="jszx-wrapper">
                                        <div class="jszx-scroller" id="leadertodo_edit_img_scroll">
                                            <div id="leadertodo_edit_img"></div>
                                        </div>
                                    </div>
                                </td>
                            </tr>
                        </table>
                    </div>
                </div>
            </div>
        </div>
        <div class="page_footer">
            <div class="footer_button_div">
                <div id="save_leadertodo" class="alert_bottom_three orange_background">保存</div>
            </div>
        </div>


    </div>
</template>

<script>
    export default {
        name: "leadertodoEdit"
    }
    window.searchPage = 2;
    $("#leadertodo_page").live("pageshow", function () {
        initleadertodo();
        /*返回*/
        $("#leadertodo_page .back-button").listen("quickClick", function (e) {
            $.mobile.changePage("../leaderHandle/leaderHandleDetail.html");
        });
        //职能事项
        $("#leadertodo_page #leader_edit_eventComponent_tr").listen("quickClick", function (e) {
            getMultilevelValue("请选择职能事项", 3);
            app_getMultiCodeChild(window.caseTaskReportParentId, "", 1, "caseEdit", "3")
        });
        //大类
        $("#leadertodo_page #leader_edit_bigClass_tr").listen("quickClick", function (e) {
            if (isNull(window.choiceThingsParts)) {
                toast("请先选择职能事项");
            } else {
                getMultilevelValue("请选择大小类", 2);
                app_getMultiCodeChild(window.choiceThingsParts, "", 1, "caseEditBig");
            }
        });
        //小类
        $("#leadertodo_page #leader_edit_smallClass_tr").listen("quickClick", function (e) {
            if (isNull(window.choiceThingsParts)) {
                toast("请先选择职能事项")
            } else if (isNull(window.choiceBigType)) {
                toast("清先选择大类");
            } else {
                getMultilevelValue("请选择大小类", 1);
                app_getMultiCodeChild(window.choiceBigType, "", 1, "caseEditSmall");
            }
        });
        //8ge局办
        $("#leadertodo_page").on("click", "#JB_dept li", function (e) {
            $("#JB_dept li").css("color","#333333");
            $(e.currentTarget).css("color","#F23030");
            var id=$(e.currentTarget).attr("id");
            $("#JB_subdept").empty();
            var obj2="";
            var info1="";
            obj2+= toJson("parentId", id);
            doPost("chooseOfficeDept.action", obj2, function (data2) {
                if (!isNull(data2) && data2.length > 0) {
                    for (var j = 0; j < data2.length; j++) {
                        info1+='<li id="'+data2[j].row_id+'" deptcode="'+data2[j].deptCode+'"><i style="width:80%;display:inline-block;">'+data2[j].deptName+'</i><span style="display:none;color:#F23030">√<span></li>';
                    }
                }
                $('#leadertodo_page').find('#JB_subdept').append(info1);
            })

        });
        $("#leadertodo_page").on("click", "#JB_subdept li", function (e) {

            if($(e.currentTarget).find("span").css("display")=="none"){
                var object={};
                $(e.currentTarget).find("i").css("color","#F23030");
                $(e.currentTarget).find("span").css("display","inline-block");
                var deptcode=$(e.currentTarget).attr("deptcode");
                var deptName=$(e.currentTarget).find("i").text();
                object.deptCode=deptcode;
                object.deptName=deptName;
                window.doDeptArr.push(object);
                console.log(window.doDeptArr)
            }else{
                $(e.currentTarget).find("i").css("color","#333333");
                $(e.currentTarget).find("span").css("display","none");
                var deptcode=$(e.currentTarget).attr("deptcode");
                var index = -1;
                for(var i=0 ; i < window.doDeptArr.length; i++){
                    if(deptcode == window.doDeptArr[i].deptCode){
                        index = i;
                        break;
                    }
                }
                if(index!=-1){
                    window.doDeptArr.splice(index,1);
                }
                console.log(window.doDeptArr)
            }
        });

        //商品图片
        $("#leadertodo_page #choicemore").click(function (e) {
            window.upload_imgscroll = "leadertodo_edit_img_scroll";
            window.upload_imgwrapper = "leadertodo_edit_img_wrapper";
            window.upload_addimg = "leadertodo_edit_img";
            getPhotograph();
        });
        //截止时间
        chooseDate("leadertodo_endTime", "datetime");


        //处置部门
        $("#leadertodo_page #leadertodo_doDept").listen("quickClick", function (e) {
            app_getDeptType();
        });
        /*保存*/
        $("#leadertodo_page .page_footer").listen("quickClick", function (e) {
            /*if (isNull(window.choiceThingsParts)) {
                toast("请选择职能事项");
            } else if (isNull(window.choiceBigType)) {
                toast("请选择大类");
            } else if (isNull(window.choiceSmallType)) {
                toast("请选择小类");
            } else */
            if(window.leadercommitFlag){

            }else{
                if (isNull($("#leader_todo_problem").val())) {
                    toast("请输入问题描述");
                }else if (isNull($("#leadertodo_doDept").val())) {//window.doDeptArr
                    toast("请选处置部门");
                } else {
                    showContentAlert("确认保存本次提交吗？", function () {
                    }, function () {
                        if (!isNull(window.picture_array) || window.picture_array.length > 0) {
                            window.picture_upImg = "";
                            leadtodo_upPicture(window.picture_array[0],1);

                        }else{
                            leaderToDoReport("", $("#leader_todo_problem").val(), window.doDeptArr);
                        }

                    }, "确定");
                }
            }
        });
    });
    //领导直派，图片上传
    function leadtodo_upPicture(img, type) {
        console.log("图片张数：" + window.picture_array.length + "；当前第" + type + "张");
        var obj = "";
        obj += toJson("base64Str", img);
        doPost("app_publicOpinion_upPic.action", obj, function (data) {
            if (data.code == 0) {
                if (type < parseInt(window.picture_array.length)) {
                    console.log("当前上传第:" + type + "张,下次上传第" + type + "张");
                    var typename = parseInt(type) + 1;
                    leadtodo_upPicture(window.picture_array[type], typename);
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
                    leaderToDoReport("", $("#leader_todo_problem").val(), window.doDeptArr);
                    console.log("type和图片长度相等" + type);
                } else {
                    console.log("type和图片长度不相等");
                }
            } else {
                toast(data.message);
            }
        }, "", "");
    }
    function initleadertodo() {
        $("#leadertodot_wrapper")[0].style.height = window.localInnerHeight - $("#leadertodo_page .page_header").height() - $("#leadertodo_page .page_footer").height() + "px";
        initScroll({
            "wrapper": "leadertodot_wrapper",
            "dir": "y",
            "bounce": false,
            "scrollBar": true
        });
        scrollToTop("leadertodot_wrapper");
        leaderCaseEdit();
        window.leadercommitFlag=0;
    }
    function leaderCaseEdit() {
        $("#leadertodo_page table tr td").addClass("gray_line_bottom");
        $("#leadertodo_page table tr td input").val("");
        $("#leadertodo_page table tr td textarea").val("");
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
        $("#leadertodo_edit_img_scroll").css("transform", "none");
        $("#leadertodo_edit_img_wrapper .scroll-bar-x").css("transform", "none");
        $("#leader_words").val("0/150");
        $("#leadertodo_page #leadertodo_edit_img").empty();
        $("#leadertodo_page #leadertodo_edit_img").append('<img class="goodsimgone" style="padding-top:2em;" src="/staitc/resources/images/icon_add_photo.png" id="choicemore">');
    }
    //部门名称
    function app_getDeptType(type, source) {
        var obj = "";
        $('.KpiTcbackG').remove();
        var info = '<div class="KpiTcbackG" style="display:none;"><div class="Tipscontent"><p>处理部门</p><ul id="leaderHandlehear">'
            + '<li class="action"><a href="#leaderfragment-1"><span>村、社区</span></a></li>'
            + '<li><a href="#leaderfragment-2"><span>职能部门</span></a></li>'
            + '<li><a href="#leaderfragment-3"><span>专业公司</span></a></li> </ul>'
            + '<div id="leaderfragment-1" style="display: block;" class="checkboxList">'

            + '</div>'
            + '<div id="leaderfragment-2" class="checkboxList2" style="margin-left:0;">'
            + '</div>'
            + '<div id="leaderfragment-3" class="checkboxList3">'
            + '</div>'
            +             '<div class="tc mt5">'+
            '<span class="KpiFormBut">确定</span>'+
            '</div>'
            + '</div>'

            + '</div>';

        $('#leadertodo_page').append($(info));
        //$('#leader_one_html').html(info);
        $("#leaderHandlehear li").eq(0).listen("quickClick", function (e) {
            $("#leaderHandlehear li").removeClass("action");
            $("#leaderHandlehear li").eq(0).addClass("action");
            $("#leaderfragment-2").hide();
            $("#leaderfragment-3").hide();
            $("#leaderfragment-1").show();
        })
        $("#leaderHandlehear li").eq(1).listen("quickClick", function (e) {

            $("#leaderHandlehear li").removeClass("action");
            $("#leaderHandlehear li").eq(1).addClass("action");
            $("#leaderfragment-1").hide();
            $("#leaderfragment-3").hide();
            $("#leaderfragment-2").show();
            doPost("chooseOffice.action", obj, function (data) {
                if (!isNull(data) && data.length > 0) {
                    var array = data;
                    window.doDeptArr = [];
                    var info1='';
                    info1+='<ul id="JB_dept" style="width:50%;display:inline-block;vertical-align: top;">'
                    for (var i = 0; i < array.length; i++) {
                        var color="";
                        if(i==0){
                            color="color:#F23030";
                        }
                        info1+='<li id="'+array[i].row_id+'" style="'+color+'">'+array[i].deptName+'</li>';
                    }
                    info1+='</ul>';
                    info1+='<ul id="JB_subdept" style="width:50%;display:inline-block;vertical-align: top;">'
                    var obj2="";
                    obj2+= toJson("parentId", array[0].row_id);
                    doPost("chooseOfficeDept.action", obj2, function (data2) {
                        if (!isNull(data2) && data2.length > 0) {
                            for (var j = 0; j < data2.length; j++) {
                                info1+='<li id="'+data2[j].row_id+'" deptcode="'+data2[j].deptCode+'"><i style="width:80%;display:inline-block;">'+data2[j].deptName+'</i><span style="display:none;color:#F23030">√<span></li>';
                            }
                        }
                        info1+='</ul>';
                        $('#leadertodo_page').find('.checkboxList2').append(info1);
                        $('#leadertodo_page').find('.KpiTcbackG').show();
                    })

                    //确定按钮
                    $('#leadertodo_page').find('.KpiFormBut').on("click", function (e){
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
                        //$('#leadertodo_page').find('.KpiTcbackG').hide();
                        $('#leadertodo_page').find('.KpiTcbackG').fadeOut(400);
                        $("#leader_doDept").val(str);
                        console.log(window.doDeptArr)
                    });



                }
            })
        })
        $("#leaderHandlehear li").eq(2).listen("quickClick", function (e) {

            $("#leaderHandlehear li").removeClass("action");
            $("#leaderHandlehear li").eq(2).addClass("action");
            $("#leaderfragment-1").hide();
            $("#leaderfragment-2").hide();
            $("#leaderfragment-3").show();
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


                        });
                    }else if(array[i].deptTypeCode == "02"){



                        /*  info2 = $('<div style="padding:1.5% 0;display:inline-block;width:50%;vertical-align:middle;">'+
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


                        }); */
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


                        });
                    }







                    $('#leadertodo_page').find('.checkboxList').append(info1);
                    $('#leadertodo_page').find('.checkboxList2').append(info2);
                    $('#leadertodo_page').find('.checkboxList3').append(info3);
                }
                //确定按钮
                $('#leadertodo_page').find('.KpiFormBut').listen("quickClick", function (e){
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
                    $('#leadertodo_page').find('.KpiTcbackG').hide();
                    $("#leadertodo_doDept").val(str);

                });
                $('#leadertodo_page').find('.KpiTcbackG').show();

            } else {
                toast(data.message);
            }
        }, "", "");
    }
    //上报

    function leaderToDoReport(componentIdNo, problem, doDeptArr) {
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

        var attachment="";
        var fileType="";
        if(window.attachmentUploadPath){
            attachment=window.attachmentUploadPath;
            fileType=window.fileType;
        }
        var deadLine=$("#leadertodo_endTime").val();
        var obj = "";

        obj += toJson("loginId", window.localStorage.loginId) + "&";
        obj += toJson("row_id", window.leadertodoid) + "&";//职能事项
        obj += toJson("comment", problem) + "&";//问题描述
        obj += toJson("deadLine2", deadLine) + "&";//问题描述
        obj += toJson("pics", window.picture_upImg) + "&";
        obj += toJson("fileType", fileType) + "&";
        obj += toJson("file", attachment) + "&";
        obj += toJson("deptCode", doDeptStr);//处置部门
        doPost("departAssign.action", obj, function (data) {
            if (data.code == 0) {
                toast(data.message);


                waitJumpPage("../leaderHandle/leaderHandleList.html");
            } else {
                toast(data.message);
            }
        }, "", "");
    }

    function leadertodochangepic() {
        var file=$("#leadertodofile").val()
        var filename=file.replace(/.*(\/|\\)/, "");
        var fileExt=(/[.]/.exec(filename)) ? /[^.]+$/.exec(filename.toLowerCase()) : '';
        console.log(fileExt);
        var reads= new FileReader();
        f=document.getElementById('leadertodofile').files[0];
        reads.readAsDataURL(f);
        reads.onload=function (e) {
            console.log(this.result);
            leadtodoattachmentUpload(this.result, fileExt[0]);
        };
    }
    //
    function leadtodoattachmentUpload(img, type) {
        var obj = "";
        var filetype= $("#leadertodofileselect option:selected").val();
        obj += toJson("fileType", filetype) + "&";
        obj += toJson("base64Str", img);
        doPost("app_publicOpinion_attachmentUpload.action", obj, function (data) {
            //console.log(data)
            window.fileType=type;
            if(data.code=="0"){
                window.attachmentUploadPath=data.datas.path;
            }

        }, "", "");
    }
</script>

<style scoped>
    #leadertodo_page .page_header .right_img {
        width: 2em;
        top: 0.2em;
    }

    /*img start*/
    #leadertodo_page .commodityAddImgs {
        overflow: hidden;
        background: #f3f3f3;
    }

    #leadertodo_page .imgdiv {
        padding: 0.7em;
        padding-top: 0em;
        position: relative;
        width: 6em;
        float: left;
    }

    #leadertodo_page .goodsimgone {
        float: left;
        height: 6em;
        width: 6em;
        margin-top: -1em;
    }

    #leadertodo_page .delimg {
        width: 2em;
        height: 2em;
        position: relative;
        top: 0em;
        left: 5em;
    }

    #leadertodo_page #leadertodo_edit_img {
        height: 7.5em;
        overflow: hidden;
        display: inline-block;
    }

    #leadertodo_page .goodsimgone {
        float: left;
        height: 6em;
        width: 6em;
        margin-top: -1em;
    }

    /*img end*/
    #leadertodo_page .div_input_value_img {
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
    #JB_dept li{
        line-height: 35px;
        border-bottom: 1px solid #ddd;
        font-size: 15px
    }
    #JB_subdept li{
        line-height: 35px;
        border-bottom: 1px solid #ddd;
        font-size: 15px;
    }
</style>
