<template>
    <iv data-role="page" id="feedbacklist_page">


        <tk-header>
            问题反馈
            <span
                    @click='$router.push({path:"feedbackEdit"})'
                    slot="right">新增</span>
        </tk-header>

        <div class="page_content">
            <div id="feedback_list_wrapper" class="jszx-wrapper" style="background: #fff;">
                <div class="jszx-scroller">
                    <div class="html_margin white_background" id="feedback_html">


                    </div>

                </div>
            </div>
        </div>

        <div class="KpiTcbackG" id="feedbackblackBg" style="background:#000;opacity: 0.7;display:none;">
        </div>

        <div class="KpiFooterContent2" id="feedbacksupervisDiv" style="display:none;">
            <p class="KpiNameTitle"></p>
            <table class="inp_table" cellpadding="0" cellspacing="0">
                <tr>
                    <td style="padding: 1em;">督办回复</td>
                    <td style="text-align:right;"><span style="color:#3977E6;" id="configbackhandlername_editfeedback">确定</span>
                    </td>
                </tr>
                <tr>
                    <td colspan="2" style="padding: 0;">
                           <textarea
                                   onfocus="newCheckWord('feedback_edit_problem',500,'feedback_case_words')"
                                   onKeyUp="javascript:newCheckWord('feedback_edit_problem',500,'feedback_case_words');"
                                   onMouseDown="javascript:newCheckWord('feedback_edit_problem',500,'feedback_case_words');"
                                   placeholder="请增加你的描述" id="feedback_edit_problem"
                                   style="text-align:left;min-height: 5em;padding:0em 0.5em 0em 1em;"></textarea>

                        <input class="small gray_dark_font" style="color:#999999;width: 70%;" readonly="true"
                               id="feedback_case_words"/>
                    </td>
                </tr>
            </table>
        </div>


    </iv>
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
                    clearInterval($('#feedbacklist_page').data('rememberTimer'));
                } catch (e) {
                }
                var rememberCount = 0
                rememberTimer = setInterval(function () {
                    rememberCount = rememberCount + 1;
                    $(".recoedTime").html(rememberCount + "'s");
                }, 1000);
                //定时器end
                $('#feedbacklist_page').data('mediaRec', mediaRec);
                $('#feedbacklist_page').data('rememberTimer', rememberTimer);

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
                var mediaRec = $('#feedbacklist_page').data('mediaRec');
                mediaRec.stopRecord();
                mediaRec.release();
                $(".recordStart").hide();
                $(".recordFinish").show();
                clearInterval($('#feedbacklist_page').data('rememberTimer'));
            }

            //设置标题栏，内容栏，底部内容高度
            $(".page_content")[0].style.height = window.localInnerHeight - $(".page_header").height() - $(".page_footer").height() + "px";
            $(".page_content").children("div").get(0).style.height = window.localInnerHeight - $(".page_header").height() - $(".page_footer").height() + "px";
            //设置input和textarea的样式
            $("input").addClass("small gray_dark_font ui-input-text ui-body-c ui-corner-all ui-shadow-inset");
            $("textarea").addClass("ui-input-text ui-body-c ui-corner-all ui-shadow-inset");

            $("#feedback_list_wrapper")[0].style.height = window.localInnerHeight - $("#feedbacklist_page .page_header").height() + "px";

            initScroll({
                "wrapper": "feedback_list_wrapper",
                "dir": "y",
                "bounce": false,
                "scrollBar": true,
                "pullUpLoading": function (reset) { //上拉
                    if (window.searchPage > window.arrayDataLength) {
                        reset(true);
                        toast("没有更多的数据了");
                    } else {
                        feedfindIssueList(reset, window.searchPage++);
                    }
                },
                "pullDownLoading": function (reset) { //下拉
                    window.searchPage = 2;

                    feedfindIssueList(reset, 1)
                }
            });


            //初始化页面信息
            initReplyPage();
            //初始化方法
            initEvent()

            //创建本地路径
            // buildDir();


            /*初始化页面信息*/
            function initReplyPage() {
                //初始化dom

                //初始化页面数据
                initImplementEditPageData();
                //获得详情
                feedfindIssueList(false, 1);
                //
                $('#feedbacklist_page').data('mediaRec', null);

            }

            /*初始化页面信息*/


            /*初始化事件*/
            function initEvent() {

                //语音录入初始化start
                $(".recordStart").show();
                $(".recordFinish").hide();
                $('#feedbacklist_page').data('mediaRec', null);
                $('#feedbacklist_page').data('rememberTimer', null);
                //语音录入初始化end

                //回复
                $("#feedback_html").on("click", ".reply", function (e) {

                    window.feedId = $(e.currentTarget).attr("feedId");
                    $("#feedback_edit_problem").val("");
                    $("#feedback_case_words").val("0/500");
                    $("#feedbackblackBg").show();
                    //   $("#feedbacksupervisDiv").addClass("kdts-botwrap-open");
                    $("#feedbacksupervisDiv").show();
                });
                //关闭
                $("#feedback_html").on("click", ".close", function (e) {
                    var obj = "";
                    window.feedId = $(e.currentTarget).attr("feedId");
                    obj += toJson("issueid", window.feedId) + "&";

                    obj += toJson("isClosed", "1");

                    doPost("findIssueReply.action", obj, function (data) {

                        if (data.code == "0") {

                            toast(data.message);
                            feedfindIssueList(false, 1);
                        }


                    }, "");
                });
                //回复确认
                //关闭
                $("#feedback_html").on("click", ".close", function (e) {

                });

                $("#feedbacklist_page #configbackhandlername_editfeedback").listen("quickClick", function (e) {
                    findIssueReply();
                });
                //选择人员
                $("#feedbacklist_page #feedback_peopleselect_tr").listen("quickClick", function (e) {
                    selsectPeople();
                });


                $("#feedbacklist_page #feedbackblackBg").listen("quickClick", function (e) {

                    $("#feedbackblackBg").hide();
                    /*  $("#feedbacksupervisDiv").removeClass("kdts-botwrap-open");
                     $("#feedbackNewsupervisDiv").removeClass("kdts-botwrap-open"); */
                    $("#feedbacksupervisDiv").hide();
                });

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

                //后退
                $("#feedbacklist_page .back-button").listen("quickClick", function (e) {

                    if (window.detailFlag == "detail") {
                        that.$router.push({path: '/implementProjectDetail'});
                    } else if (window.detailFlag == "other") {
                        that.$router.push({path: '/otherProjectDetail'});
                    } else if (window.detailFlag == "reserve") {
                        that.$router.push({path: '/projectReserveDetail'});
                    } else if (window.detailFlag == "rank") {
                        that.$router.push({path: '/rankingDetail'});
                    } else if (window.detailFlag == "supervise") {
                        that.$router.push({path: '/superviseDetail'});
                    }
                });
                //处置部门
                $("#feedbacklist_page #handlername_edit").listen("quickClick", function (e) {
                    app_handlername();
                });
                chooseDate("appEnfor_end_time", "datetime");
                //商品图片
                $("#feedbacklist_page #appEnforchoice").click(function (e) {
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
                        $('#feedbacklist_page').data('mediaRec', mediaRecObj);
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
                        $('#feedbacklist_page').data('mediaRec', mediaRecObj);
                    }
                    mediaRecObj.release();
                    window.flag = false;
                    window.flag1 = false;
                    $('#feedbacklist_page').data('mediaRec', null);
                    $(".recordStart").show();
                    $(".recordFinish").hide();
                });
            }

            /*语音转化俄日base64 */
            function readerMedia() {
                if (!$('#feedbacklist_page').data('mediaRec')) {//无语音文件
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
            /*   function buildDir(){
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
                  $('#feedbacklist_page').data('mediaRec',null);
              }
   */


            /*初始化dom*/

            /*初始化dom*/


            /*初始化dom*/
            function initImplementEditPageData() {
                //任务详情
                $("#feedbacklist_page").data("taskdetail", null);
                //部门列表
                $("#feedbacklist_page").data("centerTaskDept", null);
                //选中部门
                $("#feedbacklist_page").data("taskDept", null);
                //任务编号
                $("#feedbacklist_page").data("taskno", "");
                //选中部门数组
                $("#feedbacklist_page").data("taskDeptArray", []);
            }

            /*初始化dom*/


            /*加载页面数据*/

            function feedfindIssueList(reset, pageNum) {
                if (!reset) {
                    //showLoading("正在搜索...");
                }
                if (parseInt(pageNum) < 2) {
                    $("#feedback_html").empty();
                }

                var obj = "";
                //window.localStorage.implementationid="2c90e4c966c339d20166c3d1ac2b045d";
                obj += toJson("projectno", window.localStorage.implementationid) + "&";
                obj += toJson("pageSize", "20") + "&";
                obj += toJson("pageNum", pageNum);

                doPost("findIssueList.action", obj, function (data) {
                    if (!reset) {
                        hideLoading();
                    }
                    if (data.total > 0) {
                        if (reset) {
                            reset(true);
                        }
                        var array = data.datas;
                        getDataLength(data.total, 6);
                        if (data.datas.length < 20) {
                            console.log('进来了')
                            window.checkNum = 2;
                        }
                        console.log("长度：" + data.total);
                        if (!isNull(array) && array.length > 0) {
                            var html = '';
                            for (var i = 0; i < array.length; i++) {

                                html += '<div style="background: #fff;border-bottom: 1px solid #ccc;"><div style="padding: 0.5em;">' + array[i].suggestion + '</div>';
                                html += '<div><div style="display:inline-block;width:46%;padding: 0.5em;vertical-align: middle;">';
                                html += '<div style="padding: 0.5em 0; color: #aaa;">督办人：' + array[i].userName + '</div>';
                                html += '<div style="padding: 0.5em 0; color: #aaa;">' + array[i].createTime + '</div></div>';

                                html += '<div style="display:inline-block;width:49%;vertical-align: middle;text-align: center;">';
                                if (array[i].isClosed == "1") {
                                    html += '<span>已关闭</span>'
                                } else {
                                    html += '<span feedId="' + array[i].id + '"  class="reply" style="border:1px solid #ccc;padding: 5px;border-radius: 5px;margin-right: 20px;">回复</span>';
                                    html += '<span feedId="' + array[i].id + '"  class="close" style="border:1px solid #ccc;padding: 5px;border-radius: 5px;margin-right: 20px;">关闭</span>';
                                }

                                html += '</div></div>';
                                if (array[i].reply.length > 0) {
                                    html += '<div style="padding-bottom: 20px;">'
                                    for (var j = 0; j < array[i].reply.length; j++) {
                                        html += '<table class="inp_table" cellpadding="0" cellspacing="0" style="margin-left: 5px;background: #ddd;width:97%;border-bottom: 1px solid #ccc;">';
                                        html += ' <tr style="background: #ddd;"><td style="padding: 1em;color:#3977E6">回复人：' + array[i].reply[j].replyName + '</td><td style="text-align:center;">' + array[i].reply[j].createTime + '</td></tr>';
                                        html += '<tr style="background: #ddd;"><td colspan="2" style="padding: 1em;color:#555">' + array[i].reply[j].replyContent + '</td></tr></table>';
                                    }
                                    html += '</div>'
                                }
                                html += '</div>';
                                html += '<div style="height:18px;background-color:#ededed;"></div>';

                            }
                            $("#feedback_html").html(html);
                        } else {
                            $("#feedback_html").html("");
                        }
                    } else {
                        if (reset) {
                            reset(true);
                        }
                        toast(data.message);
                    }
                    // window.flag1 = true;
                }, "");
            }

            /*加载页面数据*/
            function findIssueReply() {
                var content = $("#feedback_edit_problem").val();
                var obj = "";
                obj += toJson("issueid", window.feedId) + "&";
                obj += toJson("userid", window.localStorage.userId) + "&";
                obj += toJson("username", window.localStorage.userName) + "&";
                obj += toJson("replycontent", content) + "&";
                obj += toJson("isClosed", "0");
                doPost("findIssueReply.action", obj, function (data) {

                    if (data.code == "0") {
                        $("#feedbackblackBg").hide();
                        // $("#feedbacksupervisDiv").removeClass("kdts-botwrap-open");
                        $("#feedbacksupervisDiv").hide();
                        toast(data.message);
                        feedfindIssueList(false, 1);
                    }


                }, "");


            }


            function selsectPeople() {
                var obj = "";
                $('.KpiTcbackG').remove();
                var info = '<div id="peopleKpiTcbackG" class="KpiTcbackG" style="display:none;">' +
                    '<div class="Tipscontent">' +
                    '<p>督办人</p>' +
                    '<form style="padding:3% 5%;">' +
                    '<div class="checkboxList">' +

                    '</div>' +
                    '<div class="tc mt5">' +
                    '<span class="KpiFormBut">确定</span>' +
                    '</div>' +
                    '</form>' +
                    '</div>' +
                    '</div>';

                $('#feedbacklist_page').append($(info));
                //$('#leader_ontml').html(info);
                $.ajax({
                    type: "POST",
                    url: window.imgUrl + "jsp/issuestask/findUsersByType.action",
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

                                window.doUsersArr = [];

                                info1 = $('<div style="padding:1.5% 0;display:inline-block;width:50%;vertical-align:middle;">' +
                                    '<input type="checkbox" value="" class="webkit-appearance disI vm">' +
                                    '<span class="disI vm f14" style="margin-left:3%;">' + array[i].text + '</span>' +
                                    ' </div>');
                                info1.data('lidata', array[i]);
                                info1.listen("quickClick", function (e) {

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
                                                window.doUsersArr.push(data);
                                            }
                                        } else {
                                            window.doUsersArr.push(data);
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


                                $('#feedbacklist_page').find('.checkboxList').append(info1);

                            }
                            //确定按钮
                            $('#feedbacklist_page').find('.KpiFormBut').listen("quickClick", function (e) {
                                var str = '';
                                var codestr = "";
                                if (window.doUsersArr.length > 0) {
                                    for (var i = 0; i < window.doUsersArr.length; i++) {
                                        if (i == window.doUsersArr.length - 1) {
                                            str += window.doUsersArr[i].text;
                                            codestr += window.doUsersArr[i].id;
                                        } else {
                                            str += window.doUsersArr[i].text + ',';
                                            codestr += window.doUsersArr[i].id + ',';
                                        }
                                    }
                                }
                                $('#feedbacklist_page').find('#peopleKpiTcbackG').hide();
                                $("#feedback_peopleselect_edit").val(str);
                                window.localStorage.currhandlernameCodes = codestr;

                            });
                            $('#feedbacklist_page').find('#peopleKpiTcbackG').show();

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

            function findIssueClose() {
                var content = $("#feedback_edit_problem").val();
                var obj = "";
                obj += toJson("issueid", window.feedId) + "&";
                /*  obj += toJson("userid", window.localStorage.userId) + "&";
                 obj += toJson("username", window.localStorage.userName) + "&";
                 obj += toJson("replycontent", content); */
                obj += toJson("isClosed", "1");
                doPost("findIssueReply.action", obj, function (data) {

                    if (data.code == "0") {

                        toast(data.message);
                        feedfindIssueList(false, 1);
                    }


                }, "");


            }
        }
    }
</script>

<style scoped>
    #feedbacklist_page .page_header .right_img {
        width: 2em;
        top: 0.2em;
    }

    /*img start*/
    #feedbacklist_page .commodityAddImgs {
        overflow: hidden;
        background: #f3f3f3;
    }

    #feedbacklist_page .imgdiv {
        padding: 0.7em;
        padding-top: 0em;
        position: relative;
        width: 6em;
        float: left;
    }

    #feedbacklist_page .goodsimgone {
        float: left;
        height: 6em;
        width: 6em;
        margin-top: -1em;
    }

    #feedbacklist_page .delimg {
        width: 2em;
        height: 2em;
        position: relative;
        top: 0em;
        left: 5em;
    }

    #feedbacklist_page #appEnfor_edit_img {
        height: 7.5em;
        overflow: hidden;
        display: inline-block;
    }

    #feedbacklist_page .goodsimgone {
        float: left;
        height: 6em;
        width: 6em;
        margin-top: -1em;
    }

    /*img end*/
    #feedbacklist_page .div_input_value_img {
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

    .KpiFooterContent2 {
        background: #fff;
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        z-index: 25;
        padding: 0 5% 5% 5%;
        -webkit-transition: all 1s ease;
        transition: all 1s ease;
    }

    #feedbacklist_page .page_header .page_header_title {
        line-height: 2.3em;
        font-size: 1em;
        height: 2.3em;
    }

    #feedbacklist_page .page_header {
        height: 2.3em;
    }

    #feedbacklist_page .page_header img {
        height: 1em;
    }
</style>
