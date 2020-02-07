<template>
<div data-role="page" id="appEnforEdit_page">
    <div class="page_header">
        <img class="left_img back-button " src="/staitc/resources/images/icon_white_back.png">
        <div class="page_header_title">新增</div>
    </div>
    <div class="page_content">
        <div id="appEnfor_edit_wrapper" class="jszx-wrapper">
            <div class="jszx-scroller">
                <div class="html_margin white_background">
                    <table class="inp_table" cellpadding="0" cellspacing="0">
                        <tr>
                            <td style="padding-top:0.5em;padding-bottom:0.5em;width: 80px;" class="gray_line_bottom">上传文件类型</td>
                            <td colspan="2" class="gray_line_bottom">
                                <div>
                                    <select id="fileselect">
                                        <option value="xls" selected>excel表格</option>
                                        <option value="doc">word文档</option>
                                        <option value="txt">text文本</option>
                                    </select>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td style="padding-top:0.5em;padding-bottom:0.5em;width: 80px;" class="gray_line_bottom">上传附件</td>
                            <td colspan="2" class="gray_line_bottom"><!-- <input style="width:200px;" type="file" name="img" multiple="multiple" /> -->
                                <form action="" enctype="multipart/form-data" style="text-align:center;">
                                    <input style="width:90%;" id="applicationfile" class="filepath" onchange="applicationchangepic(this)" type="file"><br>
                                </form>
                            </td>
                        </tr>
                        <tr>
                            <td>上传图片</td>
                            <td colspan="2">
                                <input id="appEnfprgood_num" class="small" value="0/5" readonly type="text">
                            </td>
                        </tr>
                        <tr>
                            <td colspan="3" class="commodityAddImgs">
                                <div id="appEnfor_edit_img_wrapper" class="jszx-wrapper">
                                    <div class="jszx-scroller" id="appEnfor_edit_img_scroll">
                                        <div id="appEnfor_edit_img"></div>
                                    </div>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td style="padding-top:0.5em;border-bottom: 1px solid #f3f3f3">协办任务名称</td>
                            <td colspan="2" class="gray_line_bottom">
                                <input class="small gray_dark_font" style="color:#999999;" id="appEnfor_linkage_name" />
                            </td>
                        </tr>
                        <tr>
                            <td style="padding-top:0.5em;border-bottom: 1px solid #f3f3f3">截至时间</td>
                            <td colspan="2" class="gray_line_bottom">
                                <input class="small gray_dark_font" style="color:#999999;" readonly="true" id="appEnfor_end_time" />
                            </td>
                        </tr>
                        <tr>
                            <td style="padding-top:0.5em;border-bottom: 1px solid #f3f3f3">问题描述</td>
                            <td colspan="2" class="gray_line_bottom">
                                <input class="small gray_dark_font" style="color:#999999;" readonly="true" id="appEnfor_case_words" />
                            </td>
                        </tr>
                        <tr>
                            <td colspan="3" class="gray_line_bottom">
                                <textarea onfocus="newCheckWord('appEnfor_edit_problem',500,'appEnfor_case_words')" onKeyUp="javascript:newCheckWord('appEnfor_edit_problem',500,'appEnfor_case_words');" onMouseDown="javascript:newCheckWord('appEnfor_edit_problem',500,'appEnfor_case_words');" placeholder="请输入问题描述" id="appEnfor_edit_problem" style="text-align:left;min-height: 5em;padding:0em 0.5em 0em 1em;"></textarea>
                            </td>
                        </tr>
                        <tr>
                            <td style="padding-top:0.5em;" class="gray_line_bottom">处置部门<span>*</span></td>
                            <td colspan="2" class="gray_line_bottom">
                                <input class="small gray_dark_font" style="color:#999999;" readonly="true" id="appEnfor_doDept" />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <div style="height:65px;"> </div>
                            </td>
                        </tr>
                    </table>
                </div>
            </div>
        </div>
    </div>
    <div class="page_footer">
        <div class="footer_button_div">
            <div id="save_appEnfor_leader" class="alert_bottom_three orange_background">交办</div>
        </div>
    </div>
</div>
</template>
<script>
export default {
    mounted() {
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
                clearInterval($('#appEnforEdit_page').data('rememberTimer'));
            } catch (e) {}
            var rememberCount = 0
            rememberTimer = setInterval(function () {
                rememberCount = rememberCount + 1;
                $(".recoedTime").html(rememberCount + "'s");
            }, 1000);
            //定时器end
            $('#appEnforEdit_page').data('mediaRec', mediaRec);
            $('#appEnforEdit_page').data('rememberTimer', rememberTimer);
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
            var mediaRec = $('#appEnforEdit_page').data('mediaRec');
            mediaRec.stopRecord();
            mediaRec.release();
            $(".recordStart").hide();
            $(".recordFinish").show();
            clearInterval($('#appEnforEdit_page').data('rememberTimer'));
        }
        $("#appEnforEdit_page").live("pageshow", function () {
            $("#appEnfor_edit_wrapper")[0].style.height = window.localInnerHeight - $("#appEnforEdit_page .page_header").height() + "px";
            initScroll({
                "wrapper": "appEnfor_edit_wrapper",
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
                initLeaderHandlePageDom();
                //初始化页面数据
                initLeaderHandlePageData();
                //获得详情
                getCenterTaskdetail();
                //
                $('#appEnforEdit_page').data('mediaRec', null);
            }
            /*初始化页面信息*/
            /*初始化事件*/
            function initEvent() {
                //语音录入初始化start
                $(".recordStart").show();
                $(".recordFinish").hide();
                $('#appEnforEdit_page').data('mediaRec', null);
                $('#appEnforEdit_page').data('rememberTimer', null);
                //语音录入初始化end

                //确认
                $("#enterBtn").listen("quickClick", function (e) {
                    //saveENforReport();
                    readerMedia(); //上传语音文件
                });
                $("#save_appEnfor_leader").listen("quickClick", function (e) {
                    if (isNull($("#appEnfor_linkage_name").val())) {
                        toast("请输入协办任务名称");
                    } else if (isNull($("#appEnfor_end_time").val())) { //window.doDeptArr
                        toast("请输入截至时间");
                    } else if (isNull($("#appEnfor_edit_problem").val())) { //window.doDeptArr
                        toast("请输入问题描述");
                    } else if (isNull($("#appEnfor_doDept").val())) { //window.doDeptArr
                        toast("请选处置部门");
                    } else {
                        showContentAlert("确认保存本次提交吗？", function () {}, function () {
                            if (!isNull(window.picture_array) || window.picture_array.length > 0) {
                                showLoading("正在上传...");
                                window.picture_upImg = "";
                                appEnfor_upPicture(window.picture_array[0], 1);
                            } else {
                                saveENforReport();
                            }
                        }, "确定");
                    }
                });
                //后退
                $("#appEnforEdit_page .back-button").listen("quickClick", function (e) {
                    app.$router.push("../applicationEnforcement/applicationEnforcementList.html");
                });
                //处置部门
                $("#appEnforEdit_page #appEnfor_doDept").listen("quickClick", function (e) {
                    app_getappEnforType();
                });
                chooseDate("appEnfor_end_time", "datetime");
                //商品图片
                $("#appEnforEdit_page #appEnforchoice").click(function (e) {
                    window.upload_imgscroll = "appEnfor_edit_img_scroll";
                    window.upload_imgwrapper = "appEnfor_edit_img_wrapper";
                    window.upload_addimg = "appEnfor_edit_img";
                    getPhotograph();
                });
                //播放
                var status = 0; //0 停止；1 开始
                $(".deptrecordPlay").click(function () {
                    if (!window.flag) {
                        window.flag = true;
                        mediaRecObj = new Media(window.wjpwDataDirFileSystem.nativeURL + "/myrecording.mp3", function () {
                            console.log('Media_succ')
                        }, function () {
                            console.log('Media_fail')
                        });
                        $('#appEnforEdit_page').data('mediaRec', mediaRecObj);
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
                        $('#appEnforEdit_page').data('mediaRec', mediaRecObj);
                    }
                    mediaRecObj.release();
                    window.flag = false;
                    window.flag1 = false;
                    $('#appEnforEdit_page').data('mediaRec', null);
                    $(".recordStart").show();
                    $(".recordFinish").hide();
                });
            }
            /*语音转化俄日base64 */
            function readerMedia() {
                if (!$('#appEnforEdit_page').data('mediaRec')) { //无语音文件
                    saveENforReport();
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
                        saveENforReport(data.data);
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
                $('#appEnforEdit_page').data('mediaRec', null);
            }
            /*初始化dom*/
            function initLeaderHandlePageDom() {
                $("#appEnfor_linkage_name").val("");
                $("#appEnfor_end_time").val("");
                $("#appEnfor_doDept").val("");
                $("#appEnfor_edit_problem").val("");
                window.picture_array = [];
                window.picture_upImg = "";
                $("#appEnfor_edit_img_scroll").css("transform", "none");
                $("#appEnfor_edit_img_wrapper .scroll-bar-x").css("transform", "none");
                $("#appEnforEdit_page #appEnfor_edit_img").empty();
                $("#appEnforEdit_page #appEnfor_edit_img").append('<img class="goodsimgone" style="padding-top:2em;" src="/staitc/resources/images/icon_add_photo.png" id="appEnforchoice">');
            }
            /*初始化dom*/
            /*初始化dom*/
            function initLeaderHandlePageData() {
                //任务详情
                $("#appEnforEdit_page").data("taskdetail", null);
                //部门列表
                $("#appEnforEdit_page").data("centerTaskDept", null);
                //选中部门
                $("#appEnforEdit_page").data("taskDept", null);
                //任务编号
                $("#appEnforEdit_page").data("taskno", "");
                //选中部门数组
                $("#appEnforEdit_page").data("taskDeptArray", []);
            }
            /*初始化dom*/
            /*获得详情*/
            function getCenterTaskdetail() {
                if (window.repairListParam_0329_yfy) {
                    //页面参数
                    var param = window.repairListParam_0329_yfy;
                    //接口入参
                    var obj = "";
                    obj += toJson("centertaskid", param.id);
                    //集中整治详情接口
                    doPost("centerTaskdetail.action", obj, function (data) {
                        $("#appEnforEdit_page").data("taskdetail", data);
                        //加载页面数据
                        loadTaskdetail(data);
                    }, "");
                }
            }
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
                            saveENforReport();
                        } else {
                            console.log("type和图片长度不相等");
                        }
                    } else {
                        toast(data.message);
                    }
                }, "", "");
            }
            /*督办任务*/
            function saveENforReport(src) {
                var depts = $("#appEnfor_doDept").val();
                var linkagename = $("#appEnfor_linkage_name").val();
                var completetime = $("#appEnfor_end_time").val();
                var description = $("#appEnfor_edit_problem").val();
                var filepath = "";
                alert(window.applicationUploadPath)
                if (window.applicationUploadPath) {
                    filepath = window.applicationUploadPath;
                }
                //接口入参
                var obj = "";
                obj += toJson("loginId", window.localStorage.userId) + "&";
                obj += toJson("linkagename", linkagename) + "&";
                obj += toJson("completetime", completetime) + "&";
                obj += toJson("description", description) + "&";
                obj += toJson("attachments", window.picture_upImg) + "&";
                obj += toJson("filepath", filepath) + "&";
                obj += toJson("nextperson", window.localStorage.currDeptCodes) + "&";
                obj += toJson("flag", "ZF");
                //集中整治详情接口
                doPost("caseDepartmentReport.action", obj, function (data) {
                    if (data.code == "0") {
                        toast(data.message);
                        app.$router.push("../applicationEnforcement/applicationEnforcementList.html");
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
            /*加载详情列表*/
            function loadDetailList(list) {
                var detailList = $('#detailList');
                list[0] && $("#appEnforEdit_page").data("taskno", list[0].taskno);
                detailList.empty();
                for (var i = 0; i < list.length; i++) {
                    var process = list[i].completeprocess;
                    process = process == "" ? '0' : process.replace("%", "");
                    var processClass = (process > 80 && 3) || (process >= 60 && 2) || 1;
                    var listStr = '';
                    listStr += '<li class="disTw">';
                    listStr += '    <div class="disI vm widkd7">';
                    listStr += '        <p class="disTw">';
                    listStr += '            <span class="widkd5 disI vm f15 huic1">' + list[i].dealdept + '</span>';
                    listStr += '            <span class="widkd5 disI vm tr f12 huic6">' + process + '%</span>';
                    listStr += '        </p>';
                    listStr += '        <p class="KpifootBorder">';
                    listStr += '            <span class="KpifootBorder' + processClass + ' disI" style = "width:' + process + '%"></span>';
                    listStr += '        </p>';
                    listStr += '    </div>';
                    listStr += '    <div class="disI vm widkd3 tr">';
                    listStr += '        <img src="images/xqButtImg1.png" class="widkd7">';
                    listStr += '    </div>';
                    listStr += '</li>';
                    var $listStr = $(listStr).appendTo("#detailList");
                    $listStr.data('data', list[i]);
                    $listStr.listen("quickClick", function (e) {
                        var data = $(e.currentTarget).data("data");
                        window.repairDetailParam_0329_yfy = data;
                        app.$router.push("../repair/manageStep.html");
                    });
                };
            };
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
                        // $("#appEnforEdit_page").data("taskDept",data);
                        $("#appEnforEdit_page").data("taskDeptArray", arraylist);
                    });
                };
                //默认选中第一个
                //$("#appEnforEdit_page").data("taskDept",list[0]);
                arraylist.push(list[0]);
                $("#appEnforEdit_page").data("taskDeptArray", arraylist);
                // $("#blackBg").show();
                //$("#supervisDiv").addClass("kdts-botwrap-open");
            };
            /*加载部门列表*/
        });
        //部门名称
        function app_getappEnforType(type, source) {
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
            var info = '<div class="KpiTcbackG" style="display:none;"><div class="Tipscontent"><p>处理部门</p><ul id="appEnforhear">' +
                '<li class="action"><a href="#appEnforfragment-1"><span>村、社区</span></a></li>' +
                '<li><a href="#appEnforfragment-2"><span>职能部门</span></a></li>' +
                '<li><a href="#appEnforfragment-3"><span>专业公司</span></a></li> </ul>' +
                '<div id="appEnforfragment-1" style="display: block;" class="checkboxList">'
                +
                '</div>' +
                '<div id="appEnforfragment-2" class="checkboxList2">' +
                '</div>' +
                '<div id="appEnforfragment-3" class="checkboxList3">' +
                '</div>' +
                '<div class="tc mt5">' +
                '<span class="KpiFormBut">确定</span>' +
                '</div>' +
                '</div>'
                +
                '</div>';
            $('#appEnforEdit_page').append($(info));
            //$('#leader_one_html').html(info);
            $("#appEnforhear li").eq(0).listen("quickClick", function (e) {
                $("#appEnforhear li").removeClass("action");
                $("#appEnforhear li").eq(0).addClass("action");
                $("#appEnforfragment-2").hide();
                $("#appEnforfragment-3").hide();
                $("#appEnforfragment-1").show();
            })
            $("#appEnforhear li").eq(1).listen("quickClick", function (e) {
                $("#appEnforhear li").removeClass("action");
                $("#appEnforhear li").eq(1).addClass("action");
                $("#appEnforfragment-1").hide();
                $("#appEnforfragment-3").hide();
                $("#appEnforfragment-2").show();
            })
            $("#appEnforhear li").eq(2).listen("quickClick", function (e) {
                $("#appEnforhear li").removeClass("action");
                $("#appEnforhear li").eq(2).addClass("action");
                $("#appEnforfragment-1").hide();
                $("#appEnforfragment-2").hide();
                $("#appEnforfragment-3").show();
            })
            doPost("chooseDepartment.action", obj, function (data) {
                if (!isNull(data) && data.length > 0) {
                    var array = data;
                    for (var i = 0; i < array.length; i++) {
                        var info1;
                        var info2;
                        var info3;
                        window.doDeptArr = [];
                        if (array[i].deptTypeCode == "01") {
                            info1 = $('<div style="padding:1.5% 0;display:inline-block;width:50%;vertical-align:middle;">' +
                                '<input type="checkbox" value="" class="webkit-appearance disI vm">' +
                                '<span class="disI vm f14" style="margin-left:3%;">' + array[i].deptName + '</span>' +
                                ' </div>');
                            info1.data('lidata', array[i]);
                            info1.listen("quickClick", function (e) {
                                var isCheck = $(e.currentTarget).find('input').is(":checked");
                                var data = $(e.currentTarget).data("lidata");
                                if (!isCheck) { //false一开始未选中   true，已被选中
                                    $(e.currentTarget).find('input').attr('checked', true);
                                    if (window.doDeptArr.length > 0) {
                                        var flag = null;
                                        for (var i = 0; i < window.doDeptArr.length; i++) {
                                            if (data.deptCode == window.doDeptArr[i].deptCode) {
                                                flag = true;
                                                break;
                                            }
                                        }
                                        if (!flag) {
                                            window.doDeptArr.push(data);
                                        }
                                    } else {
                                        window.doDeptArr.push(data);
                                    }
                                } else { //去除选中的
                                    $(e.currentTarget).find('input').attr('checked', false);
                                    var index = -1;
                                    for (var i = 0; i < window.doDeptArr.length; i++) {
                                        if (data.deptCode == window.doDeptArr[i].deptCode) {
                                            index = i;
                                            break;
                                        }
                                    }
                                    if (index != -1) {
                                        window.doDeptArr.splice(index, 1);
                                    }
                                }
                                //console.error("data:"+JSON.stringify(data))
                                //console.error("window.doDeptArr:"+JSON.stringify(window.doDeptArr))
                            });
                        } else if (array[i].deptTypeCode == "02") {
                            info2 = $('<div style="padding:1.5% 0;display:inline-block;width:50%;vertical-align:middle;">' +
                                '<input type="checkbox" value="" class="webkit-appearance disI vm">' +
                                '<span class="disI vm f14" style="margin-left:3%;">' + array[i].deptName + '</span>' +
                                ' </div>');
                            info2.data('lidata1', array[i]);
                            info2.listen("quickClick", function (e) {
                                var isCheck = $(e.currentTarget).find('input').is(":checked");
                                var data = $(e.currentTarget).data("lidata1");
                                if (!isCheck) { //false一开始未选中   true，已被选中
                                    $(e.currentTarget).find('input').attr('checked', true);
                                    if (window.doDeptArr.length > 0) {
                                        var flag = null;
                                        for (var i = 0; i < window.doDeptArr.length; i++) {
                                            if (data.deptCode == window.doDeptArr[i].deptCode) {
                                                flag = true;
                                                break;
                                            }
                                        }
                                        if (!flag) {
                                            window.doDeptArr.push(data);
                                        }
                                    } else {
                                        window.doDeptArr.push(data);
                                    }
                                } else { //去除选中的
                                    $(e.currentTarget).find('input').attr('checked', false);
                                    var index = -1;
                                    for (var i = 0; i < window.doDeptArr.length; i++) {
                                        if (data.deptCode == window.doDeptArr[i].deptCode) {
                                            index = i;
                                            break;
                                        }
                                    }
                                    if (index != -1) {
                                        window.doDeptArr.splice(index, 1);
                                    }
                                }
                                //console.error("data:"+JSON.stringify(data))
                                // console.error("window.doDeptArr:"+JSON.stringify(window.doDeptArr))
                            });
                        } else if (array[i].deptTypeCode == "03") {
                            info3 = $('<div style="padding:1.5% 0;display:inline-block;width:50%;vertical-align:middle;">' +
                                '<input type="checkbox" value="" class="webkit-appearance disI vm">' +
                                '<span class="disI vm f14" style="margin-left:3%;">' + array[i].deptName + '</span>' +
                                ' </div>');
                            info3.data('lidata2', array[i]);
                            info3.listen("quickClick", function (e) {
                                var isCheck = $(e.currentTarget).find('input').is(":checked");
                                var data = $(e.currentTarget).data("lidata2");
                                if (!isCheck) { //false一开始未选中   true，已被选中
                                    $(e.currentTarget).find('input').attr('checked', true);
                                    if (window.doDeptArr.length > 0) {
                                        var flag = null;
                                        for (var i = 0; i < window.doDeptArr.length; i++) {
                                            if (data.deptCode == window.doDeptArr[i].deptCode) {
                                                flag = true;
                                                break;
                                            }
                                        }
                                        if (!flag) {
                                            window.doDeptArr.push(data);
                                        }
                                    } else {
                                        window.doDeptArr.push(data);
                                    }
                                } else { //去除选中的
                                    $(e.currentTarget).find('input').attr('checked', false);
                                    var index = -1;
                                    for (var i = 0; i < window.doDeptArr.length; i++) {
                                        if (data.deptCode == window.doDeptArr[i].deptCode) {
                                            index = i;
                                            break;
                                        }
                                    }
                                    if (index != -1) {
                                        window.doDeptArr.splice(index, 1);
                                    }
                                }
                                //console.error("data:"+JSON.stringify(data))
                                //  console.error("window.doDeptArr:"+JSON.stringify(window.doDeptArr))
                            });
                        }
                        $('#appEnforEdit_page').find('.checkboxList').append(info1);
                        $('#appEnforEdit_page').find('.checkboxList2').append(info2);
                        $('#appEnforEdit_page').find('.checkboxList3').append(info3);
                    }
                    //确定按钮
                    $('#appEnforEdit_page').find('.KpiFormBut').listen("quickClick", function (e) {
                        var str = '';
                        var codestr = "";
                        if (window.doDeptArr.length > 0) {
                            for (var i = 0; i < window.doDeptArr.length; i++) {
                                if (i == window.doDeptArr.length - 1) {
                                    str += window.doDeptArr[i].deptName;
                                    codestr += window.doDeptArr[i].deptCode;
                                } else {
                                    str += window.doDeptArr[i].deptName + ',';
                                    codestr += window.doDeptArr[i].deptCode + ',';
                                }
                            }
                        }
                        $('#appEnforEdit_page').find('.KpiTcbackG').hide();
                        $("#appEnfor_doDept").val(str);
                        window.localStorage.currDeptCodes = codestr;
                    });
                    $('#appEnforEdit_page').find('.KpiTcbackG').show();
                } else {
                    toast(data.message);
                }
            }, "", "");
        }
        function applicationchangepic(e) {
            console.log($(e).context.files[0].name)
            var file = $("#applicationfile").val()
            //alert($(e).context.files[0].name)
            var filename = file.replace(/.*(\/|\\)/, "");
            var fileExt = (/[.]/.exec(filename)) ? /[^.]+$/.exec(filename.toLowerCase()) : '';
            console.log(fileExt);
            var reads = new FileReader();
            f = document.getElementById('applicationfile').files[0];
            reads.readAsDataURL(f);
            reads.onload = function (e) {
                console.log(this.result);
                //alert(e.target.result)
                applicationUpload(this.result, fileExt[0]);
            };
        }
        function applicationUpload(img, type) {
            var obj = "";
            var filetype = $("#fileselect option:selected").val();
            obj += toJson("fileType", filetype) + "&";
            obj += toJson("base64Str", img);
            doPost("app_publicOpinion_attachmentUpload.action", obj, function (data) {
                console.log("filetype" + filetype)
                window.fileType = filetype;
                if (data.code == "0") {
                    window.applicationUploadPath = data.datas.path;
                }
            }, "", "");
        }
    }
}
</script>
<style lang="less" scoped>
#appEnforEdit_page .page_header .right_img {
    width: 2em;
    top: 0.2em;
}
/*img start*/
#appEnforEdit_page .commodityAddImgs {
    overflow: hidden;
    background: #f3f3f3;
}
#appEnforEdit_page .imgdiv {
    padding: 0.7em;
    padding-top: 0em;
    position: relative;
    width: 6em;
    float: left;
}
#appEnforEdit_page .goodsimgone {
    float: left;
    height: 6em;
    width: 6em;
    margin-top: -1em;
}
#appEnforEdit_page .delimg {
    width: 2em;
    height: 2em;
    position: relative;
    top: 0em;
    left: 5em;
}
#appEnforEdit_page #appEnfor_edit_img {
    height: 7.5em;
    overflow: hidden;
    display: inline-block;
}
#appEnforEdit_page .goodsimgone {
    float: left;
    height: 6em;
    width: 6em;
    margin-top: -1em;
}
/*img end*/
#appEnforEdit_page .div_input_value_img {
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
#appEnforfragment-1,
#appEnforfragment-2,
#appEnforfragment-3 {
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
</style>
