<template>
    <div data-role="page" id="repairDetail_page">
        <div class="page_header">
            <img class="left_img back-button " src="/staitc/resources/images/icon_white_back.png">
            <div class="page_header_title">任务详情</div>
            <div class="right_img right_btn"
                 style="font-size: 0.8em;white-space: nowrap;margin-top: 0.7em;height: 3.5em;">督办记录
            </div>
        </div>
        <div class="page_content" style="background: none;">
            <div id="repairDetail_wrapper" class="jszx-wrapper">
                <div class="jszx-scroller">
                    <table class="inp_table" cellpadding="0" cellspacing="0">
                        <tr>
                            <td colspan="3" class="commodityAddImgs">
                                <div id="centertask_img_wrapper" class="jszx-wrapper">
                                    <div class="jszx-scroller" id="centertask_img_scroll">
                                        <div id="centertask_detail_img">
                                        </div>
                                    </div>
                                </div>
                            </td>
                        </tr>
                    </table>
                    <div class="KpiIndexContent">
                        <ul class="KpixqContentList">
                            <li class="disTw">
                                <div class="disI vm f14 huic4 xqListleft">
                                    任务编号
                                </div>
                                <div class="disI vm f14 huic1 xqListright tr" id="id">
                                </div>
                            </li>
                            <li class="disTw">
                                <div class="disI vm f14 huic4 xqListleft">
                                    任务名称
                                </div>
                                <div class="disI vm f14 huic1 xqListright tr" id="centertaskname">
                                </div>
                            </li>
                            <li class="disTw">
                                <div class="disI vm f14 huic4 xqListleft">
                                    下达时间
                                </div>
                                <div class="disI vm f14 huic1 xqListright tr" id="taskgettime">
                                </div>
                            </li>
                            <li class="disTw">
                                <div class="disI vm f14 huic4 xqListleft">
                                    要求完成时间
                                </div>
                                <div class="disI vm f14 huic1 xqListright tr" id="taskfinishtime">
                                </div>
                            </li>
                            <li class="disTw">
                                <div class="disI vm f14 huic4 xqListleft">
                                    责任人
                                </div>
                                <div class="disI vm f14 huic1 xqListright tr" id="fzr">
                                </div>
                            </li>
                            <li class="disTw">
                                <div class="disI vm f14 huic4 xqListleft">
                                    状态
                                </div>
                                <div class="disI vm f14 huic1 xqListright tr" id="taskstatus">
                                </div>
                            </li>
                        </ul>
                        <div class="KpiwentText">
                            <p class="f14 huic4">问题描述</p>
                            <p class="KpiwentText_content f14 huic1 lhei22" id="centertaskdescription"></p>
                        </div>
                        <div class="KpiwentText bord0im" id="voicefiledown">
                            <p class="f14 huic4">附件</p>
                            <p class="KpiwentText_content1" id="loadFile">
                                <img src="images/KpifjImg.png" class="vm" width="25">
                                <span class="f13 huic5 vm disI">附件下载</span>
                            </p>
                        </div>
                    </div>
                    <div>
                        <ul class="KpifenleijdList" id="detailList"></ul>
                    </div>
                    <div class="KpifooterNewButon tc" id="supervisBtn">督办</div>
                </div>
            </div>
        </div>

        <div class="KpiTcbackG" id="blackBg" style="display:none">
        </div>
        <div class="KpiFooterContent" id="supervisDiv">
            <p class="KpiNameTitle">处置部门</p>
            <ul class="KpibumenList" id="taskDeptUl">
            </ul>
            <div style="padding:3% 0;display: table; width:100%">
                <span style="width:60%;" class="disI f15 vm">语音输入</span>
                <span class="disI vm tr" style="width:40%">
		            <span class="recordStart">
		               <img id="luying" class="luying" src="images/AcButtYUyin.png" style="width:46%;">
		            </span>

		            <span class="recordFinish" style="display: none;">
		                <span id="recordPlay" class="disI vm recordPlay"
                              style="background:#80c1ee;padding:1% 5%;border-radius:0.2em;margin-right:5%;">
		                    <span class="f12 disI recoedTime" style="color:#fff;margin-right:12%;">--</span>
		                    <img src="images/yyinImg.png" style="width:20%;">
		                </span>
		                <img id="recordDel" class="recordDel" src="images/KpiDelete.png" style="width:12%;">
		            </span>
		        </span>
            </div>
            <div style="padding:2.5% 0;background:#f5a034;border-radius:0.3em;color:#fef4eb" class="tc" id="enterBtn">
                确定
            </div>
        </div>
    </div>
</template>

<script type="text/ecmascript-6">
    export default {
        name: "repairDetail",
        data() {
            return {}
        },
        created() {

        },
        mounted() {
            var that = this;
            $(".luying").on({
                touchstart: function (e) {
                    recordAudio()
                },
                touchmove: function () {

                },
                touchend: function () {
                    recordFinish();
                }
            });

            // $("#repairDetail_page").live("pageshow", function () {
                $("#repairDetail_wrapper")[0].style.height = window.localInnerHeight - $("#repairDetail_page .page_header").height() + "px";
                initScroll({
                    "wrapper": "repairDetail_wrapper",
                    "dir": "y",
                    "bounce": false,
                    "scrollBar": true
                });
                window.upload_imgscroll = "centertask_img_scroll";
                window.upload_imgwrapper = "centertask_img_wrapper";
                window.upload_addimg = "centertask_detail_img";
                $("#centertask_img_scroll").css("transform", "none");
                $("#centertask_img_wrapper .scroll-bar-x").css("transform", "none");
                //初始化页面信息
                initPage();
                //初始化方法
                initEvent()

                /*初始化页面信息*/
                function initPage() {
                    //初始化dom
                    initPageDom();
                    //初始化页面数据
                    initPageData();
                    //获得详情
                    getCenterTaskdetail();
                    $('#repairDetail_page').data('mediaRec', null);
                }

                /*初始化页面信息*/

                /*初始化事件*/
                function initEvent() {
                    //督办按钮
                    $("#supervisBtn").listen("quickClick", function (e) {
                        var centerTaskDept = $("#repairDetail_page").data("centerTaskDept");
                        //语音录入初始化start
                        $(".recordStart").show();
                        $(".recordFinish").hide();
                        $('#repairDetail_page').data('mediaRec', null);
                        $('#repairDetail_page').data('rememberTimer', null);
                        //语音录入初始化end
                        if (centerTaskDept) {
                            $("#blackBg").show();
                            $("#supervisDiv").addClass("kdts-botwrap-open");
                        } else {
                            getCenterTaskDept();
                        }
                    });

                    //背景
                    $("#blackBg").listen("quickClick", function (e) {
                        $("#blackBg").hide();
                        $("#supervisDiv").removeClass("kdts-botwrap-open");
                    });

                    //确认
                    $("#enterBtn").listen("quickClick", function (e) {
                        readerMedia();//上传语音文件
                    });

                    //后退
                    $("#repairDetail_page .back-button").listen("quickClick", function (e) {
                        // $.mobile.changePage("../repair/repairList.html");
                        that.$router.back(-1);
                    });
                    //督办记录
                    $("#repairDetail_page .right_img").listen("quickClick", function (e) {
                        window.repairDetailParam_taskno_0411_yfy = $("#repairDetail_page").data("taskno");
                        // $.mobile.changePage("../repair/supervisRecord.html");
                        //$.mobile.changePage("../repair/test.html");
                        that.$router.push('/supervisRecord');
                    });

                    //播放
                    var status = 0;//0 停止；1 开始
                    $(".recordPlay").click(function () {
                        if (!window.flag) {
                            window.flag = true;
                            mediaRecObj = new Media(window.wjpwDataDirFileSystem.nativeURL + "/myrecording.mp3", function () {
                                console.log('Media_succ')
                            }, function () {
                                console.log('Media_fail')
                            });
                            $('#repairDetail_page').data('mediaRec', mediaRecObj);
                        }
                        mediaRecObj.play();
                    });
                    //删除
                    $(".recordDel").click(function () {
                        if (!window.flag1) {
                            window.flag1 = true;
                            mediaRecObj = new Media(window.wjpwDataDirFileSystem.nativeURL + "/myrecording.mp3", function () {
                                console.log('Media_succ')
                            }, function () {
                                console.log('Media_fail')
                            });
                            $('#repairDetail_page').data('mediaRec', mediaRecObj);
                        }
                        mediaRecObj.release();
                        window.flag = false;
                        window.flag1 = false;
                        $('#repairDetail_page').data('mediaRec', null);
                        $(".recordStart").show();
                        $(".recordFinish").hide();
                    });
                }

                /*语音转化俄日base64 */
                function readerMedia() {
                    if (!$('#repairDetail_page').data('mediaRec')) {//无语音文件
                        centerTaskSupervision();
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
                            centerTaskSupervision(data.data);
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
                    $('#repairDetail_page').data('mediaRec', null);
                }

                /*初始化dom*/
                function initPageDom() {
                    $('#id').html("");
                    $('#centertaskname').html("");
                    $('#taskgettime').html("");
                    $('#taskfinishtime').html("");
                    $('#fzr').html("");
                    $('#centertaskdescription').html("");
                    $('#taskstatus').html("");
                    $("#blackBg").hide();
                    $("#supervisDiv").removeClass("kdts-botwrap-open");
                }

                /*初始化dom*/
                function initPageData() {
                    //任务详情
                    $("#repairDetail_page").data("taskdetail", null);
                    //部门列表
                    $("#repairDetail_page").data("centerTaskDept", null);
                    //选中部门
                    $("#repairDetail_page").data("taskDept", null);
                    //任务编号
                    $("#repairDetail_page").data("taskno", "");
                    //选中部门数组
                    $("#repairDetail_page").data("taskDeptArray", []);
                }

                /*初始化dom*/
                //附件下载
                $("#loadFile").bind("click", function (e) {
                    var url = window.localStorage.loadfilePath;
                    var houzhuistr = window.repair_houzhui.split(";");
                    var name = "语音附件下载" + "." + houzhuistr[0];

                    console.log(url)
                    console.log(name)
                    isFileExist(name, window.cacheDirectory, function (result) {
                        showConfirm("<p style='padding:1em;'>确认下载文档吗？</p>", null, null, function () {
                            showLoading("正在下载....");

                            var fileTransfer = new FileTransfer();
                            fileTransfer.download(
                                encodeURI(url),
                                window.cacheDirectoryPath + "/" + name,
                                function (entry) {
                                    hideLoading();
                                    toast("下载成功！");
                                    jsict.appManager.openLocalFile(function () {
                                    }, function () {
                                    }, window.cacheDirectoryPath + "/" + name);
                                },
                                function (error) {
                                    hideLoading();
                                    toast("下载失败，请重试");
                                }
                            );
                        })
                    });
                })

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
                            $("#repairDetail_page").data("taskdetail", data);
                            //加载页面数据
                            loadTaskdetail(data);
                        }, "");
                    }
                }

                /*任务部门*/
                function getCenterTaskDept() {
                    //接口入参
                    var obj = "";
                    obj += toJson("taskno", $("#repairDetail_page").data("taskno"));
                    //集中整治详情接口
                    doPost("centerTaskDept.action", obj, function (data) {
                        $("#repairDetail_page").data("centerTaskDept", data);
                        //加载页面数据
                        loadTaskDept(data.datas);
                    }, "");
                }

                /*督办任务*/
                function centerTaskSupervision(src) {
                    var taskDeptArray = $("#repairDetail_page").data("taskDeptArray");
                    var dealDeptId = "";
                    var dealName = "";
                    if (taskDeptArray.length > 0) {
                        for (var i = 0; i < taskDeptArray.length; i++) {
                            dealDeptId += taskDeptArray[i].dealDeptId + ",";
                            dealName += taskDeptArray[i].dealName + ",";
                        }
                        dealDeptId = dealDeptId.slice(0, dealDeptId.length - 1);
                        dealName = dealName.slice(0, dealName.length - 1);
                        var mediaRecObj = new Media(window.wjpwDataDirFileSystem.nativeURL + "/myrecording.mp3", function () {
                            console.log('Media_succ')
                        }, function () {
                            console.log('Media_fail')
                        });
                        var mediaDuration = 0;
                        mediaRecObj.release();
                        var seconds = $(".recordPlay .recoedTime").html();
                        mediaDuration = seconds.substr(0, seconds.length - 2);
                        if (!src) {
                            src = "";
                            mediaDuration = 0;
                        }
                        //接口入参

                        var obj = "";
                        obj += toJson("loginId", window.localStorage.userName) + "&";
                        obj += toJson("dealDeptId", dealDeptId) + "&";
                        obj += toJson("dealName", dealName) + "&";
                        obj += toJson("duration", mediaDuration) + "&";
                        obj += toJson("attachmentPath", src) + "&";
                        obj += toJson("taskno", $("#repairDetail_page").data("taskno"));
                        //集中整治详情接口
                        doPost("centerTaskSupervision.action", obj, function (data) {
                            $("#blackBg").hide();
                            $("#supervisDiv").removeClass("kdts-botwrap-open");
                        }, "");
                    } else {
                        toast("请选择村/部门");
                    }
                }

                /*加载页面数据*/
                function loadTaskdetail(result) {

                    if (result.taskdata.imgPath) {
                        $("#repairDetail_page .commodityAddImgs").show();
                        var arrimg = result.taskdata.imgPath.split(";");
                        if (arrimg.length > 0) {
                            for (var j = 0; j < arrimg.length; j++) {
                                if (!isNull(arrimg[j])) {
                                    var commodity_add_img_info = ' <div class="imgdiv">';
                                    commodity_add_img_info += '<img class="goodsimgone" src="' + window.imgUrl + arrimg[j] + '">';
                                    commodity_add_img_info += '</div>';
                                    var $commodity_add_img_info = createListRow(commodity_add_img_info).appendTo("#" + window.upload_addimg);
                                    $commodity_add_img_info.listen("quickClick", function (e) {
                                        window.lookType = "opinioned";
                                        // $.mobile.changePage("../casetask/photoLook.html");
                                        that.$router.push('/photoLook');
                                    });
                                }
                            }
                            window.opinionedImgArray = arrimg;
                            imgWidth(window.upload_imgscroll, window.upload_imgwrapper, arrimg.length, window.upload_addimg);
                        } else {
                            $("#repairDetail_page .commodityAddImgs").hide();
                            window.opinionedImgArray = array.pics;
                        }
                    } else {
                        $("#repairDetail_page .commodityAddImgs").hide();
                    }
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
                    var houzhui = result.taskdata.attachmentPath.split(".");
                    window.repair_houzhui = houzhui[1];
                    if (result.taskdata.attachmentPath !== "") {
                        $("#voicefiledown").show();
                    } else {
                        $("#voicefiledown").hide();
                    }
                    //加载详情列表
                    loadDetailList(result.centerTaskProgresslist);
                }

                /*加载详情列表*/
                function loadDetailList(list) {
                    var detailList = $('#detailList');
                    list[0] && $("#repairDetail_page").data("taskno", list[0].taskno);
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
                            // $.mobile.changePage("../repair/manageStep.html");
                            that.$router.push('/manageStep');
                        });
                    }
                };

                /*加载部门列表*/
                function loadTaskDept(list) {
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
                            $("#repairDetail_page").data("taskDeptArray", arraylist);
                        });
                    }
                    //默认选中第一个
                    arraylist.push(list[0]);
                    $("#repairDetail_page").data("taskDeptArray", arraylist);
                    $("#blackBg").show();
                    $("#supervisDiv").addClass("kdts-botwrap-open");
                };
                /*加载部门列表*/
            // });


            function recordAudio() {
                var mediaRec = new Media(window.wjpwDataDirFileSystem.nativeURL + "/myrecording.mp3", function () {
                    console.log('Media_succ');
                }, function () {
                    console.log('Media_fail');
                });
                mediaRec.startRecord();
                //定时器
                try {
                    clearInterval($('#repairDetail_page').data('rememberTimer'));
                } catch (e) {
                }
                var rememberCount = 0
                rememberTimer = setInterval(function () {
                    rememberCount = rememberCount + 1;
                    $(".recoedTime").html(rememberCount + "'s");
                }, 1000);
                //定时器end
                $('#repairDetail_page').data('mediaRec', mediaRec);
                $('#repairDetail_page').data('rememberTimer', rememberTimer);
            }

            function onSuccess() {
                console.log("recordAudio():Audio Success");
            }

            function onError(error) {
                console.log('code: ' + error.code + '\n' +
                    'message: ' + error.message + '\n');
            }

            //录音完成
            function recordFinish() {
                var mediaRec = $('#repairDetail_page').data('mediaRec');
                mediaRec.stopRecord();
                mediaRec.release();
                $(".recordStart").hide();
                $(".recordFinish").show();
                clearInterval($('#repairDetail_page').data('rememberTimer'));
            }
        },
        methods: {}
    }
</script>

<style lang="less" scoped>
    /*img start*/
    #repairDetail_page .commodityAddImgs {
        overflow: hidden;
        background: #f3f3f3;
    }

    #repairDetail_page .imgdiv {
        padding: 0.7em;
        padding-top: 0em;
        position: relative;
        width: 6em;
        float: left;
    }

    #repairDetail_page .goodsimgone {
        float: left;
        height: 6em;
        width: 6em;
        margin-top: 0.7em;
    }

    #repairDetail_page .delimg {
        width: 2em;
        height: 2em;
        position: relative;
        top: 0em;
        left: 5em;
    }

    #repairDetail_page #centertask_detail_img {
        height: 7.5em;
        overflow: hidden;
        display: inline-block;
    }

    #repairDetail_page .goodsimgone {
        float: left;
        height: 6em;
        width: 6em;
        margin-top: 0.7em;
    }
</style>
