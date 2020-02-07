<template>
    <div data-role="page" id="leaderEdit_page">


        <div class="page_header">
            <img class="left_img back-button " src="/staitc/resources/images/icon_white_back.png">
            <div class="page_header_title">新增</div>

        </div>
        <div class="page_content" >
            <div id="leader_handle_edit_wrapper" class="jszx-wrapper">
                <div class="jszx-scroller">
                    <div class="html_margin white_background">
                        <table class="inp_table" cellpadding="0" cellspacing="0">

                            <tr>
                                <td style="padding-top:0.5em;" class="gray_line_bottom">处置领导(单位)<span>*</span></td>
                                <td colspan="2" class="gray_line_bottom">
                                    <input class="small gray_dark_font" style="color:#999999;" readonly="true"
                                           id="leader_doDept"/>
                                </td>
                            </tr>
                            <tr>
                                <td style="padding-top:0.5em;" class="gray_line_bottom">任务事项<span>*</span></td>
                                <td colspan="2" class="gray_line_bottom">
                                    <input class="small gray_dark_font" style="color:#999999;"
                                           id="leader_todo_title"/>
                                </td>
                            </tr>

                            <tr>
                                <!-- <td  style="padding-top:0.5em;border-bottom: 1px solid #f3f3f3">领导批示<span>*</span></td> -->
                                <td colspan="3" class="gray_line_bottom">
                                    <div style="float: left;line-height: 50px;padding-top:0.5em;"><i style="color: #9f9f9f;">领导批示</i></div>
                                    <input class="small gray_dark_font" style="color:#999999;width: 70%;" readonly="true"
                                           id="handle_case_words"/>
                                </td>
                            </tr>
                            <tr >
                                <td colspan="3" class="gray_line_bottom">
                            <textarea
                                    onfocus="newCheckWord('leader_handle_edit_problem',500,'handle_case_words')"
                                    onKeyUp="javascript:newCheckWord('leader_handle_edit_problem',500,'handle_case_words');"
                                    onMouseDown="javascript:newCheckWord('leader_handle_edit_problem',500,'handle_case_words');"
                                    placeholder="请输入领导批示" id="leader_handle_edit_problem"
                                    style="text-align:left;min-height: 5em;padding:0em 0.5em 0em 1em;"></textarea>

                                </td>
                            </tr>
                            <tr style="height:4em">
                                <td style="padding-top:0.5em;">
                                    语音输入
                                </td>
                                <td colspan="2" style="text-align:right;padding-right:2em">
                                    <div style="padding:3% 0;display: table; width:100%">

            <span class="disI vm tr" style="width:40%">
		            <span class="recordStart">
		               <img id="recordVoice" class="recordVoice" src="../repair/images/AcButtYUyin.png" style="width:46%;">
		            </span>

		            <span class="recordFinish" style="display: none;">
		                <span id="recordPlay" class="disI vm recordPlay" style="background:#80c1ee;padding:1% 5%;border-radius:0.2em;margin-right:5%;">
		                    <span class="f12 disI recoedTime" style="color:#fff;margin-right:12%;">--</span>
		                    <img src="../repair/images/yyinImg.png" style="width:20%;">
		                </span>
		                <img id="recordDel" class="recordDel" src="../repair/images/KpiDelete.png" style="width:12%;" >
		            </span>

		        </span>

                                    </div>


                                </td>
                            </tr>
                            <tr>
                                <td style="padding-top:0.5em;border-bottom: 1px solid #f3f3f3">截至时间</td>
                                <td colspan="2" class="gray_line_bottom">
                                    <input class="small gray_dark_font" style="color:#999999;" readonly="true"
                                           id="leader_handle_end_time"/>
                                </td>
                            </tr>
                            <tr>
                                <td style="padding-top:0.5em;padding-bottom:0.5em;width: 80px;" class="gray_line_bottom">上传文件类型</td>
                                <td colspan="2" class="gray_line_bottom">
                                    <div style="width:90%;">
                                        <select id="leadfileselect">
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
                                        <input style="width:90%;" id="file" class="filepath" onchange="changepic(this)" type="file"><br>
                                        <!-- <img src="" id="show" width="200"> -->
                                    </form>

                                </td>
                            </tr>
                            <tr>
                                <td>上传图片</td>
                                <td colspan="2">
                                    <input id="good_num" class="small" value="0/5" readonly type="text">
                                </td>
                            </tr>
                            <tr>
                                <td colspan="3" class="commodityAddImgs">
                                    <div id="leader_handle_edit_img_wrapper" class="jszx-wrapper">
                                        <div class="jszx-scroller" id="leader_handle_edit_img_scroll">
                                            <div id="leader_handle_edit_img"></div>
                                        </div>
                                    </div>
                                </td>
                            </tr>
                            <tr><td><div style="height:65px;"> </div></td></tr>
                        </table>
                    </div>






                </div>
            </div>
        </div>
        <div class="page_footer">
            <div class="footer_button_div">
                <div id="save_handle_leader" class="alert_bottom_three orange_background">交办</div>
            </div>
        </div>


    </div>
</template>

<script>
    export default {
        name: "leaderHandleEdit"
    }
    $(".recordVoice").on({
        touchstart: function(e){
            //alert(window.pwDirFileSystem.nativeURL)
            recordAudio()
        },
        touchmove: function(){

        },
        touchend: function(){
            recordFinish();
        }
    });
    function recordAudio() {
        var mediaRec = new Media(window.wjpwDataDirFileSystem.nativeURL+"/myrecording.mp3", function(){console.log('Media_succ');}, function(){console.log('Media_fail');});
        mediaRec.startRecord();
        //定时器
        try{clearInterval( $('#leaderEdit_page').data('rememberTimer'));}catch(e){}
        var rememberCount = 0
        rememberTimer = setInterval(function(){
            rememberCount = rememberCount+1;
            $(".recoedTime").html(rememberCount+"'s");
        },1000);
        //定时器end
        $('#leaderEdit_page').data('mediaRec',mediaRec);
        $('#leaderEdit_page').data('rememberTimer',rememberTimer);

    }
    // onSuccess Callback
    //
    function onSuccess() {
        console.log("recordAudio():Audio Success");
    }

    // onError Callback
    //
    function onError(error) {
        console.log('code: '    + error.code    + '\n' +
            'message: ' + error.message + '\n');
    }
    //==========

    //录音完成
    function recordFinish() {
        var mediaRec = $('#leaderEdit_page').data('mediaRec');
        mediaRec.stopRecord();
        mediaRec.release();
        $(".recordStart").hide();
        $(".recordFinish").show();
        clearInterval( $('#leaderEdit_page').data('rememberTimer'));
    }
    $("#leaderEdit_page").live("pageshow", function () {
        $("#leader_handle_edit_wrapper")[0].style.height = window.localInnerHeight - $("#leaderEdit_page .page_header").height() + "px";

        initScroll({
            "wrapper": "leader_handle_edit_wrapper",
            "dir": "y",
            "bounce": false,
            "scrollBar": true
        });


        //初始化页面信息
        initLeaderHandlePage();
        //初始化方法
        initEvent()

        //创建本地路径
        buildDir();


        /*初始化页面信息*/
        function initLeaderHandlePage(){
            //初始化dom
            initLeaderHandlePageDom();
            //初始化页面数据
            initLeaderHandlePageData();
            //获得详情
            getCenterTaskdetail();
            //
            $('#leaderEdit_page').data('mediaRec',null);

        }
        /*初始化页面信息*/




        /*初始化事件*/
        function initEvent(){

            //语音录入初始化start
            $(".recordStart").show();
            $(".recordFinish").hide();
            $('#leaderEdit_page').data('mediaRec',null);
            $('#leaderEdit_page').data('rememberTimer',null);
            //语音录入初始化end


            //确认
            $("#save_handle_leader").listen("quickClick", function (e) {
                if (isNull($("#leader_todo_title").val())) {
                    toast("请输入任务事项");
                }else if (isNull($("#leader_doDept").val())) {//window.doDeptArr
                    toast("请选处置领导（部门）");
                } else {
                    showContentAlert("确认保存本次提交吗？", function () {
                    }, function () {
                        showLoading("正在上传...");
                        /* window.leadercommitFlag=1;
                        $("#save_returnAddress_leader").removeClass("orange_background");
                        $("#save_returnAddress_leader").addClass("gray_gray_background"); */
                        if (!isNull(window.picture_array) || window.picture_array.length > 0) {
                            window.picture_upImg = "";
                            LeaderHandle_upPicture(window.picture_array[0],1);

                        }else{
                            //submitLeaderHandle();
                            leaderHandlereaderMedia();//上传语音文件
                        }
                    }, "确定");
                }
                //submitLeaderHandle();
                //leaderHandlereaderMedia();//上传语音文件
            });

            //后退
            $("#leaderEdit_page .back-button").listen("quickClick", function (e) {
                $.mobile.changePage("../leaderHandle/leaderHandleList.html");
            });
            //商品图片
            $("#leaderEdit_page #choicehandle").click(function (e) {
                window.upload_imgscroll = "leader_handle_edit_img_scroll";
                window.upload_imgwrapper = "leader_handle_edit_img_wrapper";
                window.upload_addimg = "leader_handle_edit_img";
                getPhotograph();
            });
            //处置部门
            $("#leaderEdit_page #leader_doDept").listen("quickClick", function (e) {
                if(window.deptLoading){
                    window.deptLoading=false;
                    app_getLeaderType();
                }
            });
            chooseDate("leader_handle_end_time", "datetime");

            //close
            $("#leaderEdit_page").on("click", "#closeLeadDept", function (e) {
                $('#leaderEdit_page').find('.KpiTcbackG').hide();
            });
            //8ge局办
            $("#leaderEdit_page").on("click", "#JB_dept li", function (e) {
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
                    $('#leaderEdit_page').find('#JB_subdept').append(info1);
                })

            });
            $("#leaderEdit_page").on("click", "#JB_subdept li", function (e) {

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

            //长按录音
            /*         $(".recordVoice").on({
                        touchstart: function(e){
                            var mediaRec = new Media(window.wjpwDataDirFileSystem.nativeURL+"/myrecording.mp3", function(){console.log('Media_succ');}, function(){console.log('Media_fail');});
                            mediaRec.startRecord();
                            //定时器
                            try{clearInterval( $('#leaderEdit_page').data('rememberTimer'));}catch(e){}
                            var rememberCount = 0
                            rememberTimer = setInterval(function(){
                                rememberCount = rememberCount+1;
                                $(".recoedTime").html(rememberCount+"'s");
                            },1000);
                            //定时器end
                            $('#leaderEdit_page').data('mediaRec',mediaRec);
                            $('#leaderEdit_page').data('rememberTimer',rememberTimer);
                        },
                        touchmove: function(){

                        },
                        touchend: function(){
                            var mediaRec = $('#leaderEdit_page').data('mediaRec');
                            mediaRec.stopRecord();
                            mediaRec.release();
                            $(".recordStart").hide();
                            $(".recordFinish").show();
                            clearInterval( $('#leaderEdit_page').data('rememberTimer'));
                            //clearTimeout(timeOutEvent);
                        }
                    }); */

            //播放
            var status = 0;//0 停止；1 开始
            $(".recordPlay").click(function(){
                if(!window.flag){
                    window.flag =  true;
                    mediaRecObj = new Media(window.wjpwDataDirFileSystem.nativeURL+"/myrecording.mp3", function(){console.log('Media_succ')}, function(){console.log('Media_fail')});
                    $('#leaderEdit_page').data('mediaRec',mediaRecObj);
                }
                mediaRecObj.play();
                /*   if(status==0){
                      setTimeout(function(){
                          status = 1;
                      },1000);
                      mediaRecObj.play();
                  }else if(status==1){
                      setTimeout(function(){
                          status = 0;
                      },1000);
                      mediaRecObj.pause();
                  } */
            });
            //删除
            $(".recordDel").click(function(){
                if(!window.flag1){
                    window.flag1 =  true;
                    mediaRecObj = new Media(window.wjpwDataDirFileSystem.nativeURL+"/myrecording.mp3", function(){console.log('Media_succ')}, function(){console.log('Media_fail')});
                    $('#leaderEdit_page').data('mediaRec',mediaRecObj);
                }
                mediaRecObj.release();
                window.flag =  false;
                window.flag1 = false;
                $('#leaderEdit_page').data('mediaRec',null);
                $(".recordStart").show();
                $(".recordFinish").hide();
            });
        }





        /*初始化dom*/
        function initLeaderHandlePageDom(){
            $('#leader_doDept').val("");
            $('#leader_handle_edit_problem').val("");
            window.picture_array = [];
            window.picture_upImg = "";
            window.leaderHandleAudio = "";
            window.deptLoading=true;
            /* $("#blackBg").hide(); */

            $("#leader_handle_edit_img_scroll").css("transform", "none");
            $("#leader_handle_edit_img_wrapper .scroll-bar-x").css("transform", "none");

            $("#leaderEdit_page #leader_handle_edit_img").empty();
            $("#leaderEdit_page #leader_handle_edit_img").append('<img class="goodsimgone" style="padding-top:2em;" src="/staitc/resources/images/icon_add_photo.png" id="choicehandle">');
        }
        /*初始化dom*/





        /*初始化dom*/
        function initLeaderHandlePageData(){
            //任务详情
            $("#leaderEdit_page").data("taskdetail",null);
            //部门列表
            $("#leaderEdit_page").data("centerTaskDept",null);
            //选中部门
            $("#leaderEdit_page").data("taskDept",null);
            //任务编号
            $("#leaderEdit_page").data("taskno","");
            //选中部门数组
            $("#leaderEdit_page").data("taskDeptArray",[]);
            $("#leader_handle_end_time").val("");
        }
        /*初始化dom*/




        /*获得详情*/
        function getCenterTaskdetail(){
            if(window.repairListParam_0329_yfy){
                //页面参数
                var param = window.repairListParam_0329_yfy;
                //接口入参
                var obj = "";
                obj += toJson("centertaskid", param.id);
                //集中整治详情接口
                doPost("centerTaskdetail.action", obj, function (data) {
                    $("#leaderEdit_page").data("taskdetail",data);
                    //加载页面数据
                    loadTaskdetail(data);
                }, "");
            }
        }
        /*获得详情*/
















        /*加载页面数据*/
        function loadTaskdetail(result){
            $('#id').html(result.taskdata.taskno);
            $('#centertaskname').html(result.taskdata.centertaskname);
            $('#taskgettime').html(window.repairListParam_0329_yfy.taskgettime);
            $('#taskfinishtime').html(result.taskdata.taskfinishtime);
            $('#fzr').html(result.taskdata.fzr);
            $('#centertaskdescription').html(result.taskdata.centertaskdescription);
            if(result.taskdata.taskstatus == '1'){
                $('#taskstatus').html("已完成");
            }else{
                $('#taskstatus').html("处理中");
            }

            window.localStorage.loadfilePath =window.imgUrl + result.taskdata.attachmentPath;
            //加载详情列表
            loadDetailList(result.centerTaskProgresslist);
        }
        /*加载页面数据*/


    });
    //部门名称
    /*    function app_getLeaderType(type, source) {
           var obj = "";
           $('.KpiTcbackG').remove();
            var info = '<div class="KpiTcbackG" style="display:none;">'+
                    '<div class="Tipscontent">'+
                        '<p>分管人员</p>'+
                        '<form style="padding:3% 5%;">'+
                        '<div class="checkboxList">'+

                        '</div>'+
                        '<div class="tc mt5">'+
                            '<span class="KpiFormBut">确定</span>'+
                       '</div>'+
                        '</form>'+
                    '</div>'+
                '</div>';
           var info = '<div class="KpiTcbackG" style="display:none;"><div class="Tipscontent"><p>处理部门</p><ul id="depthear">'
                   + '<li class="action"><a href="#deptfragment-1"><span>村、社区</span></a></li>'
                   + '<li><a href="#deptfragment-2"><span>职能部门</span></a></li>'
               + '<li><a href="#deptfragment-3"><span>专业公司</span></a></li> </ul>'
               + '<div id="deptfragment-1" style="display: block;" class="checkboxList">'

               + '</div>'
               + '<div id="deptfragment-2" class="checkboxList2">'
               + '</div>'
               + '<div id="deptfragment-3" class="checkboxList3">'
               + '</div>'
               +             '<div class="tc mt5">'+
                       '<span class="KpiFormBut">确定</span>'+
                       '</div>'
               + '</div>'

               + '</div>';

               $('#leaderEdit_page').append($(info));
               //$('#leader_one_html').html(info);


           doPost("chooseLeader.action", obj, function (data) {
               if (!isNull(data) && data.length > 0) {
                   var array = data;
                       for (var i = 0; i < array.length; i++) {
                           var info1;

                           window.doDeptArr = [];

                                info1 = $('<div style="padding:1.5% 0;display:inline-block;width:50%;vertical-align:middle;">'+
                                   '<input type="checkbox"  value="" class="disI vm">'+
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
                                               if(data.row_id == window.doDeptArr[i].row_id){
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
                                           if(data.row_id == window.doDeptArr[i].row_id){
                                               index = i;
                                               break;
                                           }
                                       }
                                       if(index!=-1){
                                           window.doDeptArr.splice(index,1);
                                       }
                                   }

                                   //console.error("data:"+JSON.stringify(data))
                                   //console.error("window.doDeptArr:"+JSON.stringify(window.doDeptArr))

                               });



                           $('#leaderEdit_page').find('.checkboxList').append(info1);

                       }
                       //确定按钮

                       $('#leaderEdit_page').find('.KpiFormBut').listen("quickClick", function (e){
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
                            $('#leaderEdit_page').find('.KpiTcbackG').hide();
                            $("#leader_doDept").val(str);

                       });
                      $('#leaderEdit_page').find('.KpiTcbackG').show();

               } else {
                   toast(data.message);
               }
           }, "", "");
       } */

    function app_getLeaderType(type, source) {
        var obj = "";
        $("#leaderfragment-1").empty();
        window.assignFlag="1";
        //var info1;
        /*  var info2;
         var info3; */
        $('.KpiTcbackG').remove();
        var info = '<div class="KpiTcbackG" style="display:none;"><div class="Tipscontent"><p style="display: inline-block;">处理人员</p><i style="float:right;" id="closeLeadDept">X</i><ul id="leaderHandlehear">'
            + '<li class="action"><a href="#leaderfragment-1"><span>局办</span></a></li>'
            + '<li><a href="#leaderfragment-2"><span>分管领导</span></a></li>'
            + '</ul>'
            + '<div id="leaderfragment-1" style="width: 110%;display: block;margin-left:0;" class="checkboxList">'

            + '</div>'
            + '<div id="leaderfragment-2" class="checkboxList2">'
            + '</div>'
            + '<div id="leaderfragment-3" class="checkboxList3">'
            + '</div>'
            +             '<div class="tc mt5">'+
            '<span class="KpiFormBut">确定</span>'+
            '</div>'
            + '</div>'

            + '</div>';

        $('#leaderEdit_page').append($(info));
        //$('#leader_one_html').html(info);
        $("#leaderHandlehear li").eq(0).listen("quickClick", function (e) {
            $("#leaderHandlehear li").removeClass("action");
            $("#leaderHandlehear li").eq(0).addClass("action");
            $("#leaderfragment-2").hide();
            $("#leaderfragment-1").show();
            window.assignFlag="1";
        })
        $("#leaderHandlehear li").eq(1).listen("quickClick", function (e) {

            $("#leaderHandlehear li").removeClass("action");
            $("#leaderHandlehear li").eq(1).addClass("action");
            $("#leaderfragment-1").hide();
            $("#leaderfragment-2").show();
            window.assignFlag="2";
            doPost("chooseLeader.action", obj, function (data) {
                $("#leaderfragment-2").empty();
                if (!isNull(data) && data.length > 0) {
                    var array = data;
                    for (var i = 0; i < array.length; i++) {
                        var info2;

                        window.doDeptArr = [];

                        info2 = $('<div style="padding:1.5% 0;display:inline-block;width:50%;vertical-align:middle;">'+
                            '<input type="checkbox"  value="" class="disI vm">'+
                            '<span class="disI vm f14" style="margin-left:3%;">'+array[i].deptName+'</span>'+
                            ' </div>');
                        info2.data('lidata',array[i]);
                        info2.listen("quickClick", function (e) {

                            var isCheck  = $(e.currentTarget).find('input').is(":checked");

                            var data = $(e.currentTarget).data("lidata");

                            if(!isCheck){//false一开始未选中   true，已被选中
                                $(e.currentTarget).find('input').attr('checked', true);
                                if(window.doDeptArr.length>0){
                                    var flag = null;
                                    for(var i=0 ; i < window.doDeptArr.length; i++){
                                        if(data.row_id == window.doDeptArr[i].row_id){
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
                                    if(data.row_id == window.doDeptArr[i].row_id){
                                        index = i;
                                        break;
                                    }
                                }
                                if(index!=-1){
                                    window.doDeptArr.splice(index,1);
                                }
                            }

                            //console.error("data:"+JSON.stringify(data))
                            //console.error("window.doDeptArr:"+JSON.stringify(window.doDeptArr))

                        });


                        $('#leaderEdit_page').find('.checkboxList2').append(info2);
                        window.deptLoading=true;
                        //$('#leaderEdit_page').find('.checkboxList').append(info2);

                    }
                    //确定按钮

                    $('#leaderEdit_page').find('.KpiFormBut').on("click", function (e){
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
                        //    $('#leaderEdit_page').find('.KpiTcbackG').hide();
                        $('#leaderEdit_page').find('.KpiTcbackG').fadeOut(400);
                        $("#leader_doDept").val(str);
                        console.log(window.doDeptArr)
                    });
                    $('#leaderEdit_page').find('.KpiTcbackG').show();

                } else {
                    toast(data.message);
                }
            }, "", "");
        })
        if(window.assignFlag=="1"){
            doPost("chooseOffice.action", obj, function (data) {
                $("#leaderfragment-1").empty();
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
                        $('#leaderEdit_page').find('.checkboxList').append(info1);
                        $('#leaderEdit_page').find('.KpiTcbackG').show();
                        window.deptLoading=true;
                    })

                    //确定按钮
                    $('#leaderEdit_page').find('.KpiFormBut').on("click", function (e){
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
                        //$('#leaderEdit_page').find('.KpiTcbackG').hide();
                        $('#leaderEdit_page').find('.KpiTcbackG').fadeOut(400);
                        $("#leader_doDept").val(str);
                        console.log(window.doDeptArr)
                    });



                }
            })
            /* 	doPost("chooseOffice.action", obj, function (data) {
                    if (!isNull(data) && data.length > 0) {
                        var array = data;
                            for (var i = 0; i < array.length; i++) {
                            	var info1;
                                window.doDeptArr = [];

                                     info1 = $('<div style="padding:1.5% 0;display:inline-block;width:55%;vertical-align:middle;">'+
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


                                $('#leaderEdit_page').find('.checkboxList').append(info1);
                               // $('#leaderEdit_page').find('.checkboxList2').append(info2);

                            }



                            //确定按钮
                            $('#leaderEdit_page').find('.KpiFormBut').on("click", function (e){
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
                                 //$('#leaderEdit_page').find('.KpiTcbackG').hide();
                                 $('#leaderEdit_page').find('.KpiTcbackG').fadeOut(400);
                                 $("#leader_doDept").val(str);
                                 console.log(window.doDeptArr)
                            });
                           $('#leaderEdit_page').find('.KpiTcbackG').show();

                    } else {
                        toast(data.message);
                    }
                }, "", ""); */
        }else if(window.assignFlag=="2"){

        }

    }
    //领导直派，图片上传
    function LeaderHandle_upPicture(img, type) {
        // alert("图片张数：" + window.picture_array.length + "；当前第" + type + "张");
        var obj = "";
        obj += toJson("base64Str", img);
        doPost("app_publicOpinion_upPic.action", obj, function (data) {
            if (data.code == 0) {
                if (type < parseInt(window.picture_array.length)) {
                    console.log("当前上传第:" + type + "张,下次上传第" + type + "张");
                    var typename = parseInt(type) + 1;
                    LeaderHandle_upPicture(window.picture_array[type], typename);
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

                    leaderHandlereaderMedia();


                } else {
                    console.log("type和图片长度不相等");
                }
            } else {
                toast(data.message);
            }
        }, "", "");
    }
    /*督办任务*/
    function submitLeaderHandle(src){
        var dealName = "";

        /*   var mediaRecObj = new Media(window.wjpwDataDirFileSystem.nativeURL+"/myrecording.mp3", function(){console.log('Media_succ')}, function(){console.log('Media_fail')});
          var mediaDuration  = 0;
          mediaRecObj.release();
          var seconds =  $(".recordPlay .recoedTime").html();
          mediaDuration = seconds.substr(0,seconds.length-2);
          if(!src){
              src = "";
              mediaDuration = 0;
          } */
        //接口入参
        /* alert(src)
        alert(window.picture_upImg) */
        hideLoading();

        var doDeptStr = "";
        var rowid="";
        var deptcode="";
        if(window.assignFlag=="2"){
            if(window.doDeptArr.length >0 ){
                for(var i=0;i<window.doDeptArr.length;i++){
                    if(i==window.doDeptArr.length-1){
                        rowid += window.doDeptArr[i].row_id;
                    }else{
                        rowid+=window.doDeptArr[i].row_id+',';
                    }
                }
            }
            deptcode="";
        }else{
            if(window.doDeptArr.length >0 ){
                for(var i=0;i<window.doDeptArr.length;i++){
                    if(i==window.doDeptArr.length-1){
                        deptcode += window.doDeptArr[i].deptCode;
                    }else{
                        deptcode+=window.doDeptArr[i].deptCode+';';
                    }
                }
            }
            rowid="";
        }

        if(!src){
            src="";
        }
        var attachment="";
        var fileType="";
        if(window.attachmentUploadPath){
            attachment=window.attachmentUploadPath;
            fileType=window.fileType;
        }
        var caseTitle=$("#leader_todo_title").val();
        var deadLine=$("#leader_handle_end_time").val();
        var obj = "";
        obj += toJson("loginId", window.localStorage.loginId) + "&";
        obj += toJson("origin", "JB") + "&";
        obj += toJson("caseTitle", caseTitle) + "&";
        obj += toJson("deadLine", deadLine) + "&";
        obj += toJson("audio", src) + "&";
        obj += toJson("row_id", rowid) + "&";
        obj += toJson("deptCode", deptcode) + "&";
        obj += toJson("reportPics", window.picture_upImg) + "&";
        obj += toJson("fileType", fileType) + "&";
        obj += toJson("attachment", attachment) + "&";
        obj += toJson("problem", $("#leader_handle_edit_problem").val());
        //集中整治详情接口
        doPost("LeaderAssign.action", obj, function (data) {
            toast(data.message);
            if(data.code=="0"){
                $.mobile.changePage("../leaderHandle/leaderHandleList.html");
            }

        }, "");

    }
    /*督办任务*/

    /*语音转化俄日base64 */
    function leaderHandlereaderMedia(){
        if(!$('#leaderEdit_page').data('mediaRec')){//无语音文件
            submitLeaderHandle();
            return;
        }
        function Audio2dataURL (fileSystem) {
            fileSystem.root.getFile("zjmanagement/data/myrecording.mp3",{
                create: false
            },function(fileEntry){
                fileEntry.file(function(file){
                    var reader = new FileReader();
                    reader.onloadend =  function(e){
                        upMediaVoice(e.target.result,'3');
                    }
                    reader.readAsDataURL(file);
                },function(){
                    console.log("file error ")
                });
            },function(){
                console.log("获取文件失败！")
            });
        }
        function fsFail(){
            toast("路径请求失败！！")
        }
        window.requestFileSystem(LocalFileSystem.PERSISTENT,5*1024*1024,Audio2dataURL,fsFail);
    }
    //语音上传接口
    function upMediaVoice(str,type) {
        var obj = "";
        // obj += toJson("taskType", type)+ "&";
        obj += toJson("base64Str", str);
        doPost("app_upAudio.action", obj, function (data) {
            //  doPost("app_publicOpinion_upPic.action", obj, function (data) {
            if (data.code == 0) {
                window.leaderHandleAudio=data.data;
                submitLeaderHandle(data.data);
            } else {
                toast(data.message);
            }
        }, "", "");
    }



    //创建本地路径
    function buildDir(){
        window.requestFileSystem(window.LocalFileSystem.PERSISTENT, 5*1024*1024, function(fileSystem) {
            window.wjpwFileSystem = fileSystem;
            fileSystem.root.getDirectory("zjmanagement",{
                create: true,
                exclusive:false
            },function(newFile){
                window.rootDirFileSystem = newFile;
                newFile.getDirectory("data",{
                    create: true,
                    exclusive:false
                },function(newfile){
                    window.wjpwDataDirFileSystem = newfile;
                },null);
            },null);
        }, null);
        $('#leaderEdit_page').data('mediaRec',null);
    }

    function changepic() {
        var file=$("#file").val()
        var filename=file.replace(/.*(\/|\\)/, "");
        var fileExt=(/[.]/.exec(filename)) ? /[^.]+$/.exec(filename.toLowerCase()) : '';
        console.log(fileExt);
        var reads= new FileReader();
        f=document.getElementById('file').files[0];
        reads.readAsDataURL(f);
        reads.onload=function (e) {
            console.log(this.result);
            attachmentUpload(this.result, fileExt[0]);
        };
    }
    //
    function attachmentUpload(img, type) {
        var obj = "";
        var filetype= $("#leadfileselect option:selected").val();
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
    #leaderEdit_page .page_header .right_img {
        width: 2em;
        top: 0.2em;
    }

    /*img start*/
    #leaderEdit_page .commodityAddImgs {
        overflow: hidden;
        background: #f3f3f3;
    }

    #leaderEdit_page .imgdiv {
        padding: 0.7em;
        padding-top: 0em;
        position: relative;
        width: 6em;
        float: left;
    }

    #leaderEdit_page .goodsimgone {
        float: left;
        height: 6em;
        width: 6em;
        margin-top: -1em;
    }

    #leaderEdit_page .delimg {
        width: 2em;
        height: 2em;
        position: relative;
        top: 0em;
        left: 5em;
    }

    #leaderEdit_page #leader_handle_edit_img {
        height: 7.5em;
        overflow: hidden;
        display: inline-block;
    }

    #leaderEdit_page .goodsimgone {
        float: left;
        height: 6em;
        width: 6em;
        margin-top: -1em;
    }

    /*img end*/
    #leaderEdit_page .div_input_value_img {
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
