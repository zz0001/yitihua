<template>
    <div data-role="page" id="implement_edit_page">

        <tk-header>
            督办意见
        </tk-header>
        <div class="page_content">
            <div id="implement_edit_wrapper" class="jszx-wrapper">
                <div class="jszx-scroller">
                    <div class="html_margin white_background">
                        <table class="inp_table" cellpadding="0" cellspacing="0">


                            <tr>
                                <td style="padding-top:0.5em;border-bottom: 1px solid #f3f3f3">项目名称</td>
                                <td colspan="2" class="gray_line_bottom">
                                    <input class="small gray_dark_font" style="color:#999999;text-overflow: ellipsis;"
                                           id="projectname_edit"/>
                                </td>
                            </tr>
                            <tr>
                                <td style="padding-top:0.5em;border-bottom: 1px solid #f3f3f3">选择人员</td>
                                <td colspan="2" class="gray_line_bottom">
                                    <input class="small gray_dark_font" style="color:#999999;"
                                           id="handlername_edit"/>
                                </td>
                            </tr>
                            <tr>
                                <td style="padding-top:0.5em;border-bottom: 1px solid #f3f3f3">增加描述</td>
                                <td colspan="2" class="gray_line_bottom">
                                    <input class="small gray_dark_font" style="color:#999999;" readonly="true"
                                           id="supervisesuggestion"/>
                                </td>
                            </tr>
                            <tr>
                                <td colspan="3" class="gray_line_bottom">
                            <textarea
                                    onfocus="newCheckWord('supervisesuggestion_problem',500,'supervisesuggestion')"
                                    onKeyUp="javascript:newCheckWord('supervisesuggestion_problem',500,'supervisesuggestion');"
                                    onMouseDown="javascript:newCheckWord('supervisesuggestion_problem',500,'supervisesuggestion');"
                                    placeholder="请增加你的描述" id="supervisesuggestion_problem"
                                    style="text-align:left;min-height: 5em;padding:0em 0.5em 0em 1em;"></textarea>

                                </td>
                            </tr>
                            <tr id="leadreply_tr">
                                <td colspan="3" style="padding: 1em;">督办人 <span id="leadreply"></span></td>
                            </tr>
                            <tr id="leadreplytime_tr">
                                <td colspan="3" style="padding: 1em;">督办时间 <span id="leadreplytime"></span></td>
                            </tr>

                        </table>
                    </div>


                </div>
            </div>
        </div>
        <div class="page_footer">
            <div class="footer_button_div">
                <div id="save_implement_edit" class="alert_bottom_three orange_background">确 认</div>
            </div>
        </div>


    </div>
</template>

<script>
    export default {
        name: "",
        mounted() {
            var that = this;

            $(".deptrecordVoice").on({
                touchstart: function (e) {
                    //alert(window.pwDirFileSystem.nativeURL)
                    recordAudio()
                },
                touchmove: function () {

                },
                touchend: function () {
                    recordFinish();
                }
            });

            function recordAudio() {
                var mediaRec = new Media(window.wjpwDataDirFileSystem.nativeURL + "/myrecording.mp3", function () {
                    console.log('Media_succ');
                }, function () {
                    console.log('Media_fail');
                });
                mediaRec.startRecord();
                //定时器
                try {
                    clearInterval($('#implement_edit_page').data('rememberTimer'));
                } catch (e) {
                }
                var rememberCount = 0
                rememberTimer = setInterval(function () {
                    rememberCount = rememberCount + 1;
                    $(".recoedTime").html(rememberCount + "'s");
                }, 1000);
                //定时器end
                $('#implement_edit_page').data('mediaRec', mediaRec);
                $('#implement_edit_page').data('rememberTimer', rememberTimer);

            }

            // onSuccess Callback
            //
            function onSuccess() {
                console.log("recordAudio():Audio Success");
            }

            // onError Callback
            //
            function onError(error) {
                console.log('code: ' + error.code + '\n' +
                    'message: ' + error.message + '\n');
            }

            //==========

            //录音完成
            function recordFinish() {
                var mediaRec = $('#implement_edit_page').data('mediaRec');
                mediaRec.stopRecord();
                mediaRec.release();
                $(".recordStart").hide();
                $(".recordFinish").show();
                clearInterval($('#implement_edit_page').data('rememberTimer'));
            }

            //设置标题栏，内容栏，底部内容高度
            $(".page_content")[0].style.height = window.localInnerHeight - $(".page_header").height() - $(".page_footer").height() + "px";
            $(".page_content").children("div").get(0).style.height = window.localInnerHeight - $(".page_header").height() - $(".page_footer").height() + "px";
            //设置input和textarea的样式
            $("input").addClass("small gray_dark_font ui-input-text ui-body-c ui-corner-all ui-shadow-inset");
            $("textarea").addClass("ui-input-text ui-body-c ui-corner-all ui-shadow-inset");

            $("#implement_edit_wrapper")[0].style.height = window.localInnerHeight - $("#implement_edit_page .page_header").height() + "px";

            initScroll({
                "wrapper": "implement_edit_wrapper",
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
            function initLeaderHandlePage() {
                //初始化dom
                initImplementEditPageDom();
                //初始化页面数据
                initImplementEditPageData();
                //获得详情
                //getCenterTaskdetail();
                //
                $('#implement_edit_page').data('mediaRec', null);

            }

            /*初始化页面信息*/


            /*初始化事件*/
            function initEvent() {

                //语音录入初始化start
                $(".recordStart").show();
                $(".recordFinish").hide();
                $('#implement_edit_page').data('mediaRec', null);
                $('#implement_edit_page').data('rememberTimer', null);
                //语音录入初始化end

                var date = new Date;
                var year = date.getFullYear();
                var month = date.getMonth() + 1;
                month = (month < 10 ? "0" + month : month);
                var day = date.getDate();
                var hour = date.getHours(); //获取当前小时数(0-23)
                var min = date.getMinutes(); //获取当前分钟数(0-59)
                var sec = date.getSeconds(); //获取当前秒数(0-59)
                var time = year + "-" + month + "-" + day + " " + hour + ":" + min + ":" + sec;
                var htmls = '';
                var htmls2 = '';
                htmls += '<td colspan="3" style="padding: 1em;">督办人&nbsp; &nbsp;&nbsp;&nbsp; <i id="leadreply">' + window.localStorage.userName + '</i></td>';
                htmls2 += '<td colspan="3" style="padding: 1em;">督办时间 &nbsp; <i id="leadreplytime">' + time + '</i></td>';
                $("#leadreply_tr").html(htmls);
                $("#leadreplytime_tr").html(htmls2);
                $("#projectname_edit").val(window.projectname);
                //确认
                $("#enterBtn").listen("quickClick", function (e) {
                    //saveImplementEdit();
                    readerMedia();//上传语音文件
                });
                $("#save_implement_edit").listen("quickClick", function (e) {

                    if (isNull($("#projectname_edit").val())) {
                        toast("请输入项目名称");
                    } else if (isNull($("#handlername_edit").val())) {//window.doUsersArr
                        toast("请输入督察人姓名");
                    } else if (isNull($("#supervisesuggestion_problem").val())) {//window.doUsersArr
                        toast("请输入督办意见");
                    } else {
                        showContentAlert("确认保存本次提交吗？", function () {
                        }, function () {
                            saveImplementEdit();
                        }, "确定");
                    }
                });
                $("#implement_edit_page").on("click", ".KpiTcbackG", function (e) {

                });
                //后退
                $("#implement_edit_page .back-button").listen("quickClick", function (e) {
                    that.$router.back();
                });
                //处置部门
                $("#implement_edit_page #handlername_edit").listen("quickClick", function (e) {
                    app_handlername();
                });
                chooseDate("appEnfor_end_time", "datetime");
                //商品图片
                $("#implement_edit_page #appEnforchoice").click(function (e) {
                    window.upload_imgscroll = "appEnfor_edit_img_scroll";
                    window.upload_imgwrapper = "appEnfor_edit_img_wrapper";
                    window.upload_addimg = "appEnfor_edit_img";
                    getPhotograph();
                });


                //播放
                var status = 0;//0 停止；1 开始
                $(".deptrecordPlay").click(function () {
                    if (!window.flag) {
                        window.flag = true;
                        mediaRecObj = new Media(window.wjpwDataDirFileSystem.nativeURL + "/myrecording.mp3", function () {
                            console.log('Media_succ')
                        }, function () {
                            console.log('Media_fail')
                        });
                        $('#implement_edit_page').data('mediaRec', mediaRecObj);
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
                $(".deptrecordDel").click(function () {
                    if (!window.flag1) {
                        window.flag1 = true;
                        mediaRecObj = new Media(window.wjpwDataDirFileSystem.nativeURL + "/myrecording.mp3", function () {
                            console.log('Media_succ')
                        }, function () {
                            console.log('Media_fail')
                        });
                        $('#implement_edit_page').data('mediaRec', mediaRecObj);
                    }
                    mediaRecObj.release();
                    window.flag = false;
                    window.flag1 = false;
                    $('#implement_edit_page').data('mediaRec', null);
                    $(".recordStart").show();
                    $(".recordFinish").hide();
                });
            }

            /*语音转化俄日base64 */
            function readerMedia() {
                if (!$('#implement_edit_page').data('mediaRec')) {//无语音文件
                    saveImplementEdit();
                    return;
                }

                function Audio2dataURL(fileSystem) {
                    fileSystem.root.getFile("zjmanagement/data/myrecording.mp3", {
                        create: false
                    }, function (fileEntry) {
                        fileEntry.file(function (file) {
                            var reader = new FileReader();
                            reader.onloadend = function (e) {
                                upMediaVoice(e.target.result, '3');
                            }
                            reader.readAsDataURL(file);
                        }, function () {
                            console.log("file error ")
                        });
                    }, function () {
                        console.log("获取文件失败！")
                    });
                }

                function fsFail() {
                    toast("路径请求失败！！")
                }

                window.requestFileSystem(LocalFileSystem.PERSISTENT, 5 * 1024 * 1024, Audio2dataURL, fsFail);
            }

            //语音上传接口
            function upMediaVoice(str, type) {
                var obj = "";
                // obj += toJson("taskType", type)+ "&";
                obj += toJson("base64Str", str);

                doPost("app_upAudio.action", obj, function (data) {
                    //  doPost("app_publicOpinion_upPic.action", obj, function (data) {
                    if (data.code == 0) {
                        saveImplementEdit(data.data);
                    } else {
                        toast(data.message);
                    }
                }, "", "");
            }


            //创建本地路径
            function buildDir() {
                window.requestFileSystem(window.LocalFileSystem.PERSISTENT, 5 * 1024 * 1024, function (fileSystem) {
                    window.wjpwFileSystem = fileSystem;
                    fileSystem.root.getDirectory("zjmanagement", {
                        create: true,
                        exclusive: false
                    }, function (newFile) {
                        window.rootDirFileSystem = newFile;
                        newFile.getDirectory("data", {
                            create: true,
                            exclusive: false
                        }, function (newfile) {
                            window.wjpwDataDirFileSystem = newfile;
                        }, null);
                    }, null);
                }, null);
                $('#implement_edit_page').data('mediaRec', null);
            }


            /*初始化dom*/
            function initImplementEditPageDom() {
                $("#projectname_edit").val("");
                $("#handlername_edit").val("");
                $("#supervisesuggestion_problem").val("");

                window.localStorage.currhandlernameCodes = "";

            }

            /*初始化dom*/


            /*初始化dom*/
            function initImplementEditPageData() {
                //任务详情
                $("#implement_edit_page").data("taskdetail", null);
                //部门列表
                $("#implement_edit_page").data("centerTaskDept", null);
                //选中部门
                $("#implement_edit_page").data("taskDept", null);
                //任务编号
                $("#implement_edit_page").data("taskno", "");
                //选中部门数组
                $("#implement_edit_page").data("taskDeptArray", []);


            }

            /*初始化dom*/


            /*获得详情*/
            /*     function getCenterTaskdetail(){
                    if(window.repairListParam_0329_yfy){
                        //页面参数
                        var param = window.repairListParam_0329_yfy;
                        //接口入参
                        var obj = "";
                        obj += toJson("centertaskid", param.id);
                        //集中整治详情接口
                        doPost("centerTaskdetail.action", obj, function (data) {
                            $("#implement_edit_page").data("taskdetail",data);
                            //加载页面数据
                            loadTaskdetail(data);
                        }, "");
                    }
                } */
            /*获得详情*/


//领导直派，图片上传
            function appEnfor_upPicture(img, type) {
                // alert("图片张数：" + window.picture_array.length + "；当前第" + type + "张");
                var obj = "";
                obj += toJson("base64Str", img);
                doPost("app_publicOpinion_upPic.action", obj, function (data) {
                    if (data.code == 0) {
                        if (type < parseInt(window.picture_array.length)) {
                            console.log("当前上传第:" + type + "张,下次上传第" + type + "张");
                            var typename = parseInt(type) + 1;
                            appEnfor_upPicture(window.picture_array[type], typename);
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

                            saveImplementEdit();


                        } else {
                            console.log("type和图片长度不相等");
                        }
                    } else {
                        toast(data.message);
                    }
                }, "", "");
            }


            /*督办任务*/
            function saveImplementEdit(src) {
                var id = window.localStorage.implementationid;
                var projectname = window.projectname;
                var handlerid = window.localStorage.currhandlernameCodes;
                var handlername = $("#handlername_edit").val();

                var supervisesuggestion_problem = $("#supervisesuggestion_problem").val();
                //接口入参
                var obj = "";
                obj += toJson("id", id) + "&";
                obj += toJson("projectname", projectname) + "&";
                obj += toJson("userid", window.localStorage.userId) + "&";
                obj += toJson("username", window.localStorage.userName) + "&";
                obj += toJson("handlerid", handlerid) + "&";
                obj += toJson("handlername", handlername) + "&";
                obj += toJson("supervisesuggestion", supervisesuggestion_problem);
                //集中整治详情接口
                doPost("ap_projectSupervise.action", obj, function (data) {

                    if (data.code == "0") {
                        toast(data.message);
                        that.$router.push({path: '/replyList'});
                    }

                }, "");

            }

            /*督办任务*/


            /*加载页面数据*/
            function loadTaskdetail(result) {
                $('#id').html(result.taskdata.taskno);
                $('#centertaskname').html(result.taskdata.centertaskname);
                $('#taskgettime').html(window.repairListParam_0329_yfy.taskgettime);
                $('#taskfinishtime').html(result.taskdata.taskfinishtime);
                $('#fzr').html(result.taskdata.fzr);
                $('#centertaskdescription').html(result.taskdata.centertaskdescription);
                if (result.taskdata.taskstatus == '1') {
                    $('#taskstatus').html("已完成");
                } else {
                    $('#taskstatus').html("处理中");
                }

                window.localStorage.loadfilePath = window.imgUrl + result.taskdata.attachmentPath;
                //加载详情列表
                //loadDetailList(result.centerTaskProgresslist);
            }

            /*加载页面数据*/


            /*加载部门列表*/
            function loadTaskAppEnfor(list) {
                var taskDeptUl = $('#taskDeptUl');
                var arraylist = [];
                taskDeptUl.empty();
                for (var i = 0; i < list.length; i++) {
                    var listStr = '';
                    listStr += '<li>';
                    if (i == 0) {

                        listStr += '    <span class="disI vm" style="color:#0283de;width:93%;">' + list[i].dealName + '</span>';
                        listStr += '    <img src="images/KpiactiveImg.png" style="width:7%;">';
                    } else {
                        listStr += '    <span class="disI vm" style="color:#555555;width:93%;">' + list[i].dealName + '</span>';
                        listStr += '    <img src="images/KpiactiveImg1.png" style="width:7%;">';
                    }
                    listStr += '</li>';
                    var $listStr = $(listStr).appendTo("#taskDeptUl");
                    $listStr.data('data', list[i]);
                    $listStr.listen("quickClick", function (e) {
                        var liList = $(e.currentTarget).parent().find("li");
                        var data = $(e.currentTarget).data("data");
                        if ($(e.currentTarget).find("img").attr("src") == "images/KpiactiveImg1.png") {
                            $(e.currentTarget).find("span").css("color", "#0283de");
                            $(e.currentTarget).find("img").attr("src", "images/KpiactiveImg.png");
                            arraylist.push(data);
                        } else {
                            $(e.currentTarget).find("span").css("color", "#555555");
                            $(e.currentTarget).find("img").attr("src", "images/KpiactiveImg1.png");
                            arraylist.splice($.inArray(data, arraylist), 1);
                        }
                        //选中部门数据
                        // $("#implement_edit_page").data("taskDept",data);
                        $("#implement_edit_page").data("taskDeptArray", arraylist);
                    });
                }
                ;
                //默认选中第一个
                //$("#implement_edit_page").data("taskDept",list[0]);
                arraylist.push(list[0]);
                $("#implement_edit_page").data("taskDeptArray", arraylist);
                // $("#blackBg").show();
                //$("#supervisDiv").addClass("kdts-botwrap-open");
            };
            /*加载部门列表*/


            //部门名称
            function app_handlername(type, source) {
                var obj = "";
                $('.KpiTcbackG').remove();
                var info = '<div class="KpiTcbackG" style="display:none;">' +
                    '<div class="Tipscontent">' +
                    '<p>督办人</p>' +
                    '<form style="">' +
                    '<div class="checkboxList">' +

                    '</div>' +
                    '<div class="tc mt5">' +
                    '<span class="KpiFormBut">确定</span>' +
                    '</div>' +
                    '</form>' +
                    '</div>' +
                    '</div>';

                $('#implement_edit_page').append($(info));
                //$('#leader_ontml').html(info);

                $.ajax({
                    type: "POST",
                    url: window.serverUrl + "findUsersByType.action",
                    timeout: 60000,
                    //设置超时
                    data: {},
                    dataType: "json",
                    contentType: "application/x-www-form-urlencoded; charset=utf-8",
                    success: function (data) {
                        hideLoading();

                        if (!isNull(data) && data.length > 0) {
                            var array = data;
                            for (var i = 1; i < array.length; i++) {
                                var info1;

                                window.doUsersArr = {};

                                info1 = $('<div style="padding:1.5% 0;display:inline-block;width:50%;vertical-align:middle;">' +
                                    '<input type="radio" value="" class="disI vm">' +
                                    '<span class="disI vm f14" style="margin-left:3%;">' + array[i].text + '</span>' +
                                    ' </div>');
                                info1.data('lidata', array[i]);
                                info1.listen("quickClick", function (e) {
                                    $(".KpiTcbackG").find('input').attr('checked', false);
                                    var isCheck = $(e.currentTarget).find('input').is(":checked");

                                    var data = $(e.currentTarget).data("lidata");

                                    if (!isCheck) {//false一开始未选中   true，已被选中
                                        $(e.currentTarget).find('input').attr('checked', true);
                                        if (window.doUsersArr.length > 0) {
                                            var flag = null;
                                            for (var i = 0; i < window.doUsersArr.length; i++) {
                                                if (data.id == window.doUsersArr[i].id) {
                                                    flag = true;
                                                    break;
                                                }
                                            }
                                            if (!flag) {
                                                window.doUsersArr = data;
                                            }
                                        } else {
                                            window.doUsersArr = data;
                                        }
                                    } else {//去除选中的
                                        $(e.currentTarget).find('input').attr('checked', false);
                                        var index = -1;
                                        for (var i = 0; i < window.doUsersArr.length; i++) {
                                            if (data.id == window.doUsersArr[i].id) {
                                                index = i;
                                                break;
                                            }
                                        }
                                        if (index != -1) {
                                            window.doUsersArr.splice(index, 1);
                                        }
                                    }

                                    //console.error("data:"+JSON.stringify(data))
                                    //console.error("window.doUsersArr:"+JSON.stringify(window.doUsersArr))

                                });


                                $('#implement_edit_page').find('.checkboxList').append(info1);

                            }
                            //确定按钮
                            $('#implement_edit_page').find('.KpiFormBut').listen("quickClick", function (e) {
                                var str = '';
                                var codestr = "";
                                /*                                     if(window.doUsersArr.length>0){
                                                                        for(var i=0 ; i < window.doUsersArr.length; i++){
                                                                            if(i == window.doUsersArr.length-1){
                                                                                str+=window.doUsersArr[i].text;
                                                                                codestr+=window.doUsersArr[i].id;
                                                                            }else{
                                                                                str+=window.doUsersArr[i].text+',';
                                                                                codestr+=window.doUsersArr[i].id+',';
                                                                            }
                                                                        }
                                                                    }  */
                                str = window.doUsersArr.text;
                                codestr = window.doUsersArr.id;
                                $('#implement_edit_page').find('.KpiTcbackG').hide();
                                $("#handlername_edit").val(str);
                                window.localStorage.currhandlernameCodes = codestr;

                            });
                            $('#implement_edit_page').find('.KpiTcbackG').show();

                        } else {
                            toast(data.message);
                        }
                    },
                    error: function (date) {
                        hideLoading();
                        toast("请检查网络");
                    }
                });

            }
        }
    }
</script>

<style scoped>
    #implement_edit_page .page_header .right_img {
        width: 2em;
        top: 0.2em;
    }

    /*img start*/
    #implement_edit_page .commodityAddImgs {
        overflow: hidden;
        background: #f3f3f3;
    }

    #implement_edit_page .imgdiv {
        padding: 0.7em;
        padding-top: 0em;
        position: relative;
        width: 6em;
        float: left;
    }

    #implement_edit_page .goodsimgone {
        float: left;
        height: 6em;
        width: 6em;
        margin-top: -1em;
    }

    #implement_edit_page .delimg {
        width: 2em;
        height: 2em;
        position: relative;
        top: 0em;
        left: 5em;
    }

    #implement_edit_page #appEnfor_edit_img {
        height: 7.5em;
        overflow: hidden;
        display: inline-block;
    }

    #implement_edit_page .goodsimgone {
        float: left;
        height: 6em;
        width: 6em;
        margin-top: -1em;
    }

    /*img end*/
    #implement_edit_page .div_input_value_img {
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

    .KpiTcbackG .Tipscontent {
        width: 81%;
        margin: 40% auto 0;
        background: #fff;
        border-radius: 6px;
        padding: 5%;
        height: 350px;
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
        display: inline-block;
        width: 86%;
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
    #appEnforhear {
        width: 100%;
        height: 44px;
        line-height: 45px;
        border-bottom: 1px solid #cccccc;
    }

    #appEnforhear li {
        text-align: center;
        width: 33%;
        float: left;
    }

    #appEnforfragment-1, #appEnforfragment-2, #appEnforfragment-3 {
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

    #implement_edit_page .page_header .page_header_title {
        line-height: 2.3em;
        font-size: 1em;
        height: 2.3em;
    }

    #implement_edit_page .page_header {
        height: 2.3em;
    }

    #implement_edit_page .page_header img {
        height: 1em;
    }

</style>
