<template>
    <div data-role="page" id="deptEdit_page">
        <!--<div class="page_header">-->
            <!--<img class="left_img back-button " src="/staitc/resources/images/icon_white_back.png">-->
            <!--<div class="page_header_title">新增</div>-->
        <!--</div>-->
        <tk-header>
            新增
        </tk-header>
        <div class="page_content">
            <div id="dept_handle_edit_wrapper" class="jszx-wrapper">
                <div class="jszx-scroller">
                    <div class="html_margin white_background">
                        <table class="inp_table" cellpadding="0" cellspacing="0">
                            <tr>
                                <td style="padding-top:0.5em;width: 9em;border-bottom: 1px solid #f3f3f3">协办任务名称</td>
                                <td colspan="2" class="gray_line_bottom">
                                    <input class="small gray_dark_font" style="color:#999999;"
                                           id="depthandle_linkage_name"/>
                                </td>
                            </tr>
                            <tr>
                                <td style="padding-top:0.5em;border-bottom: 1px solid #f3f3f3">截至时间</td>
                                <td colspan="2" class="gray_line_bottom">
                                    <input class="small gray_dark_font" style="color:#999999;" readonly="true"
                                           id="depthandle_end_time"/>
                                </td>
                            </tr>
                            <tr>
                                <td style="padding-top:0.5em;border-bottom: 1px solid #f3f3f3">问题描述</td>
                                <td colspan="2" class="gray_line_bottom">
                                    <input class="small gray_dark_font" style="color:#999999;" readonly="true"
                                           id="depthandle_case_words"/>
                                </td>
                            </tr>
                            <tr>
                                <td colspan="3" class="gray_line_bottom">
                            <textarea
                                    onfocus="newCheckWord('dept_handle_edit_problem',500,'depthandle_case_words')"
                                    onKeyUp="javascript:newCheckWord('dept_handle_edit_problem',500,'depthandle_case_words');"
                                    onMouseDown="javascript:newCheckWord('dept_handle_edit_problem',500,'depthandle_case_words');"
                                    placeholder="请输入问题描述" id="dept_handle_edit_problem"
                                    style="text-align:left;min-height: 5em;padding:0em 0.5em 0em 1em;"></textarea>

                                </td>
                            </tr>
                            <tr>
                                <td style="padding-top:0.5em;" class="gray_line_bottom">处置部门<span>*</span></td>
                                <td colspan="2" class="gray_line_bottom">
                                    <input class="small gray_dark_font" style="color:#999999;" readonly="true"
                                           id="deptEdit_doDept"/>
                                </td>
                            </tr>

                            <tr>
                            <tr>
                                <td>上传图片</td>
                                <td colspan="2">
                                    <input id="deptgood_num" class="small" value="0/5" readonly type="text">
                                </td>
                            </tr>
                            <tr>
                                <td colspan="3" class="commodityAddImgs">
                                    <tk-upload-photo v-model="images"></tk-upload-photo>
                                    <!--<div id="dept_handle_edit_img_wrapper" class="jszx-wrapper">-->
                                        <!--<div class="jszx-scroller" id="dept_handle_edit_img_scroll">-->
                                            <!--<div id="dept_handle_edit_img"></div>-->
                                        <!--</div>-->
                                    <!--</div>-->
                                </td>
                            </tr>

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
        name: "",
        data(){
            return {
                images:[]
            }
        },
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
                    clearInterval($('#deptEdit_page').data('rememberTimer'));
                } catch (e) {
                }
                var rememberCount = 0
                rememberTimer = setInterval(function () {
                    rememberCount = rememberCount + 1;
                    $(".recoedTime").html(rememberCount + "'s");
                }, 1000);
                //定时器end
                $('#deptEdit_page').data('mediaRec', mediaRec);
                $('#deptEdit_page').data('rememberTimer', rememberTimer);

            }

            //录音完成
            function recordFinish() {
                var mediaRec = $('#deptEdit_page').data('mediaRec');
                mediaRec.stopRecord();
                mediaRec.release();
                $(".recordStart").hide();
                $(".recordFinish").show();
                clearInterval($('#deptEdit_page').data('rememberTimer'));
            }


            $("input").addClass("small gray_dark_font ui-input-text ui-body-c ui-corner-all ui-shadow-inset");
            $("textarea").addClass("ui-input-text ui-body-c ui-corner-all ui-shadow-inset");


            initScroll({
                "wrapper": "dept_handle_edit_wrapper",
                "dir": "y",
                "bounce": false,
                "scrollBar": true
            });
            scrollToTop("dept_handle_edit_wrapper");

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
                $('#deptEdit_page').data('mediaRec', null);

            }

            /*初始化页面信息*/

            /*初始化事件*/
            function initEvent() {

                //语音录入初始化start
                $(".recordStart").show();
                $(".recordFinish").hide();
                $('#deptEdit_page').data('mediaRec', null);
                $('#deptEdit_page').data('rememberTimer', null);
                //语音录入初始化end


                //确认
                $("#enterBtn").listen("quickClick", function (e) {
                    //saveDeptReport();
                    readerMedia();//上传语音文件
                });
                $("#save_handle_leader").listen("quickClick", function (e) {
                    window.picture_array=that.images;
                    if (isNull($("#depthandle_linkage_name").val())) {
                        toast("请输入协办任务名称");
                    } else if (isNull($("#depthandle_end_time").val())) {//window.doDeptArr
                        toast("请输入截至时间");
                    } else if (isNull($("#dept_handle_edit_problem").val())) {//window.doDeptArr
                        toast("请输入问题描述");
                    } else if (isNull($("#deptEdit_doDept").val())) {//window.doDeptArr
                        toast("请选处置部门");
                    } else {
                        app.$createPotDialog({
                            $props:{
                                type:'confirm',
                                content:'确认保存本次提交吗？'
                            },
                            $events:{
                                confirm(A){
                                    showLoading("正在上传...");
                                    if (!isNull(window.picture_array) || window.picture_array.length > 0) {
                                        window.picture_upImg = "";
                                        deptHandle_upPicture(window.picture_array[0], 1);

                                    } else {
                                        saveDeptReport();

                                    }
                                }
                            }
                        }).show()
                        // showContentAlert("确认保存本次提交吗？", function () {
                        // }, function () {
                        //     showLoading("正在上传...");
                        //
                        //     if (!isNull(window.picture_array) || window.picture_array.length > 0) {
                        //         window.picture_upImg = "";
                        //         deptHandle_upPicture(window.picture_array[0], 1);
                        //
                        //     } else {
                        //         saveDeptReport();
                        //
                        //     }
                        // }, "确定");
                    }


                });

                //后退
                $("#deptEdit_page .back-button").listen("quickClick", function (e) {
                    that.$router.back();
                });
                //处置部门
                $("#deptEdit_page #deptEdit_doDept").listen("quickClick", function (e) {
                    app_getDeptType();
                });
                 chooseDate("depthandle_end_time", "datetime");
                //商品图片
                $("#deptEdit_page #deptchoicehandle").click(function (e) {
                    window.upload_imgscroll = "dept_handle_edit_img_scroll";
                    window.upload_imgwrapper = "dept_handle_edit_img_wrapper";
                    window.upload_addimg = "dept_handle_edit_img";
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
                        $('#deptEdit_page').data('mediaRec', mediaRecObj);
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
                        $('#deptEdit_page').data('mediaRec', mediaRecObj);
                    }
                    mediaRecObj.release();
                    window.flag = false;
                    window.flag1 = false;
                    $('#deptEdit_page').data('mediaRec', null);
                    $(".recordStart").show();
                    $(".recordFinish").hide();
                });
            }

            /*语音转化俄日base64 */
            function readerMedia() {
                if (!$('#deptEdit_page').data('mediaRec')) {//无语音文件
                    saveDeptReport();
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

                // window.requestFileSystem(LocalFileSystem.PERSISTENT,5*1024*1024,Audio2dataURL,fsFail);
            }

            function readerMedia() {
                if (!$('#deptEdit_page').data('mediaRec')) {//无语音文件
                    saveDeptReport();
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

                // window.requestFileSystem(LocalFileSystem.PERSISTENT,5*1024*1024,Audio2dataURL,fsFail);
            }

            //语音上传接口
            function upMediaVoice(str, type) {
                var obj = "";
                // obj += toJson("taskType", type)+ "&";
                obj += toJson("base64Str", str);

                doPost("app_upAudio.action", obj, function (data) {
                    //  doPost("app_publicOpinion_upPic.action", obj, function (data) {
                    if (data.code == 0) {
                        saveDeptReport(data.data);
                    } else {
                        toast(data.message);
                    }
                }, "", "");
            }

            //创建本地路径
            function buildDir() {
                $('#deptEdit_page').data('mediaRec', null);
            }

            /*初始化dom*/
            function initLeaderHandlePageDom() {
                $("#depthandle_linkage_name").val("");
                $("#depthandle_end_time").val("");
                $("#deptEdit_doDept").val("");
                $("#dept_handle_edit_problem").val("");
                window.picture_array = [];
                window.picture_upImg = "";

                $("#dept_handle_edit_img_scroll").css("transform", "none");
                $("#dept_handle_edit_img_wrapper .scroll-bar-x").css("transform", "none");

                $("#deptEdit_page #dept_handle_edit_img").empty();
                $("#deptEdit_page #dept_handle_edit_img").append('<img class="goodsimgone" style="padding-top:2em;" src="/staitc/resources/images/icon_add_photo.png" id="deptchoicehandle">');
            }

            /*初始化dom*/

            /*初始化dom*/
            function initLeaderHandlePageData() {
                //任务详情
                $("#deptEdit_page").data("taskdetail", null);
                //部门列表
                $("#deptEdit_page").data("centerTaskDept", null);
                //选中部门
                $("#deptEdit_page").data("taskDept", null);
                //任务编号
                $("#deptEdit_page").data("taskno", "");
                //选中部门数组
                $("#deptEdit_page").data("taskDeptArray", []);
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
                        $("#deptEdit_page").data("taskdetail", data);
                        //加载页面数据
                        loadTaskdetail(data);
                    }, "");
                }
            }

            /*获得详情*/

            //领导直派，图片上传
            function deptHandle_upPicture(img, type) {
                // alert("图片张数：" + window.picture_array.length + "；当前第" + type + "张");
                var obj = "";
                obj += toJson("base64Str", img);
                doPost("app_publicOpinion_upPic.action", obj, function (data) {
                    if (data.code == 0) {
                        if (type < parseInt(window.picture_array.length)) {
                            console.log("当前上传第:" + type + "张,下次上传第" + type + "张");
                            var typename = parseInt(type) + 1;
                            deptHandle_upPicture(window.picture_array[type], typename);
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

                            saveDeptReport();


                        } else {
                            console.log("type和图片长度不相等");
                        }
                    } else {
                        toast(data.message);
                    }
                }, "", "");
            }

            /*督办任务*/
            function saveDeptReport(src) {
                var depts = $("#deptEdit_doDept").val();
                var linkagename = $("#depthandle_linkage_name").val();
                var completetime = $("#depthandle_end_time").val();
                var description = $("#dept_handle_edit_problem").val();
                var file = "";
                var fileType = "";
                if (window.deptUploadPath) {
                    file = window.deptUploadPath;
                    fileType = window.fileType;
                }
                //接口入参
                var obj = "";
                obj += toJson("loginId", window.localStorage.userId) + "&";
                obj += toJson("linkagename", linkagename) + "&";
                obj += toJson("completetime", completetime) + "&";
                obj += toJson("description", description) + "&";
                obj += toJson("attachments", window.picture_upImg) + "&";
                obj += toJson("fileType", fileType) + "&";
                obj += toJson("file", file) + "&";
                obj += toJson("nextperson", window.localStorage.currDeptCodes) + "&";
                obj += toJson("flag", "XB");
                //集中整治详情接口
                doPost("caseDepartmentReport.action", obj, function (data) {

                    if (data.code == "0") {
                        toast(data.message);
                        that.$router.push({path: '/deptHandleList'});
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
                ;
                window.localStorage.loadfilePath = window.imgUrl + result.taskdata.attachmentPath;
                //加载详情列表
                loadDetailList(result.centerTaskProgresslist);
            }

            /*加载页面数据*/

            /*加载详情列表*/
            function loadDetailList(list) {
                var detailList = $('#detailList');
                list[0] && $("#deptEdit_page").data("taskno", list[0].taskno);
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
                        that.$router.push({path: '/manageStep'});
                    });
                }
                ;
            };


            //部门名称
            function app_getDeptType(type, source) {
                var obj = "";
                $('.KpiTcbackG').remove();
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
                    + '<div class="tc mt5">' +
                    '<span class="KpiFormBut">确定</span>' +
                    '</div>'
                    + '</div>'

                    + '</div>';

                $('#deptEdit_page').append($(info));
                //$('#leader_one_html').html(info);
                $("#depthear li").eq(0).listen("quickClick", function (e) {
                    $("#depthear li").removeClass("action");
                    $("#depthear li").eq(0).addClass("action");
                    $("#deptfragment-2").hide();
                    $("#deptfragment-3").hide();
                    $("#deptfragment-1").show();
                })
                $("#depthear li").eq(1).listen("quickClick", function (e) {

                    $("#depthear li").removeClass("action");
                    $("#depthear li").eq(1).addClass("action");
                    $("#deptfragment-1").hide();
                    $("#deptfragment-3").hide();
                    $("#deptfragment-2").show();
                })
                $("#depthear li").eq(2).listen("quickClick", function (e) {

                    $("#depthear li").removeClass("action");
                    $("#depthear li").eq(2).addClass("action");
                    $("#deptfragment-1").hide();
                    $("#deptfragment-2").hide();
                    $("#deptfragment-3").show();
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

                                    if (!isCheck) {//false一开始未选中   true，已被选中
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
                                    } else {//去除选中的
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

                                    if (!isCheck) {//false一开始未选中   true，已被选中
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
                                    } else {//去除选中的
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

                                    if (!isCheck) {//false一开始未选中   true，已被选中
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
                                    } else {//去除选中的
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


                            $('#deptEdit_page').find('.checkboxList').append(info1);
                            $('#deptEdit_page').find('.checkboxList2').append(info2);
                            $('#deptEdit_page').find('.checkboxList3').append(info3);
                        }
                        //确定按钮
                        $('#deptEdit_page').find('.KpiFormBut').listen("quickClick", function (e) {
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
                            $('#deptEdit_page').find('.KpiTcbackG').fadeOut(400);
                            $("#deptEdit_doDept").val(str);
                            window.localStorage.currDeptCodes = codestr;

                        });
                        $('#deptEdit_page').find('.KpiTcbackG').show();

                    } else {
                        toast(data.message);
                    }
                }, "", "");
            }

        }
    }
</script>

<style>

    #deptEdit_page .page_header .right_img {
        width: 2em;
        top: 0.2em;
    }

    /*img start*/
    #deptEdit_page .commodityAddImgs {
        overflow: hidden;
        background: #f3f3f3;
    }

    #deptEdit_page .imgdiv {
        padding: 0.7em;
        padding-top: 0em;
        position: relative;
        width: 6em;
        float: left;
    }


    #deptEdit_page .delimg {
        width: 2em;
        height: 2em;
        position: relative;
        top: 0em;
        left: 5em;
    }

    #deptEdit_page #dept_handle_edit_img {
        height: 7.5em;
        overflow: hidden;
        display: inline-block;
    }

    #deptEdit_page .goodsimgone {
        float: left;
        width: 6em;
        margin-top: -1em;
    }

    /*img end*/
    #deptEdit_page .div_input_value_img {
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
    #depthear {
        width: 100%;
        height: 44px;
        line-height: 45px;
        border-bottom: 1px solid #cccccc;
    }

    #depthear li {
        text-align: center;
        width: 33%;
        float: left;
    }

    #deptfragment-1, #deptfragment-2, #deptfragment-3 {
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
