<template>
    <div data-role="page" id="voice_supervisRecord_page">
        <div class="page_header">
            <img class="left_img back-button " src="/staitc/resources/images/icon_white_back.png">
            <div class="page_header_title">督办记录</div>
        </div>
        <div class="page_content" style="background: #fff;">
            <div class="jszx-bar-icon-up jszx-bar-item-2 casewelcome_title gray_border">
                <div class="" style="width:50%"><p id="myvoice2" class="vocietitle_p">待办督办</p></div>
                <div class="" style="width:50%"><p id="allvoice" class="vocietitle_p">全部督办</p></div>
            </div>
            <div id="voice_supervisRecord_wrapper" class="jszx-wrapper">
                <div class="jszx-scroller">
                    <div class="timeaxis2">
                        <ul class="KpichulibzList2" id="voiceSupervisRecordUl">

                        </ul>
                    </div>
                    <div style="height:50px;"></div>
                </div>
            </div>
        </div>
    </div>
</template>

<script type="text/ecmascript-6">
    export default {
        name: "voiceSupervise",
        data() {
            return {}
        },
        created() {

        },
        mounted() {
            var that = this;
            // $("#voice_supervisRecord_page").live("pageshow", function () {
                $("#voice_supervisRecord_wrapper")[0].style.height = window.localInnerHeight - $("#voice_supervisRecord_page .page_header").height() + "px";
                initScroll({
                    "wrapper": "voice_supervisRecord_wrapper",
                    "dir": "y",
                    "bounce": false,
                    "scrollBar": true
                });
                $("#allvoice").css("color", "#000");
                $("#allvoice").css("border-bottom", "0");
                $("#myvoice2").css("color", "#0283de");
                $("#myvoice2").css("border-bottom", "0.2em solid #0283de");
                //后退
                $("#voice_supervisRecord_page .back-button").listen("quickClick", function (e) {
                    // $.mobile.changePage("../load/waitWorkWelcome.html");
                    that.$router.back(-1);
                });
                $("#myvoice2").listen("quickClick", function (e) {
                    $("#allvoice").css("color", "#000");
                    $("#allvoice").css("border-bottom", "0");
                    $("#myvoice2").css("color", "#0283de");
                    $("#myvoice2").css("border-bottom", "0.2em solid #0283de");
                    deptVoiceList();
                })
                $("#allvoice").listen("quickClick", function (e) {
                    $("#myvoice2").css("color", "#000");
                    $("#myvoice2").css("border-bottom", "0");
                    $("#allvoice").css("color", "#0283de");
                    $("#allvoice").css("border-bottom", "0.2em solid #0283de");
                    allVoiceList();
                })

                if (true) {
                    deptVoiceList();
                }

                function allVoiceList() {
                    //页面参数
                    var param = "2018052200165";
                    //接口入参
                    var obj = "";
                    obj += toJson("taskno", param);
                    //集中整治详情接口
                    doPost("centerTaskSupervisionLog.action", obj, function (data) {
                        //加载页面数据
                        loadList(data.datas);
                    }, "");
                }

                function deptVoiceList() {
                    //页面参数
                    var param = window.localStorage.deptId;
                    //接口入参
                    var obj = "";
                    obj += toJson("dealDeptId", param);
                    //集中整治详情接口
                    doPost("centerTaskSupervisionLogByDeptid.action", obj, function (data) {
                        //加载页面数据
                        loadList(data.datas);
                    }, "");
                }

                function loadList(list) {

                    $('#voiceSupervisRecordUl').empty();
                    var voiceSupervisRecordUl = $('#voiceSupervisRecordUl');
                    voiceSupervisRecordUl.empty();
                    for (var i = 0; i < list.length; i++) {
                        var listStr = '';
                        listStr += '<li>';
                        listStr += '    <div class="f13 huic5 mt4">';
                        listStr += '        <span>督办发起人：</span>';
                        listStr += '        <span>' + list[i].loginId + '</span>';
                        listStr += '    </div>';
                        listStr += '    <div class="f13 huic5 mt4">';
                        listStr += '        <span>督办时间：</span>';
                        listStr += '        <span>' + list[i].reportTime + '</span>';
                        listStr += '    </div>';
                        listStr += '    <div class="f13 huic5 mt4">';
                        listStr += '        <span>督办部门：</span>';
                        listStr += '        <span>' + list[i].dealName + '</span>';
                        listStr += '    </div>';
                        listStr += '    <div>';
                        listStr += '        <span class="voicedisI vm2" style="background:#80c1ee;padding:0.6% 5%;border-radius:0.2em;margin-top:5%;">';
                        listStr += '            <span class="f12 voicedisI" style="color:#fff;margin-right:20%"></span>';
                        listStr += '            <img src="images/yyinImg.png" style="width:20%;">';
                        listStr += '        </span>';
                        listStr += '    </div>';
                        listStr += '    <img src="images/passImg.png" class="passImg">';
                        listStr += '</li>';
                        var $listStr = $(listStr).appendTo("#voiceSupervisRecordUl");
                        $listStr.data('data', list[i]);
                        var status = 0;//0 停止；1 开始
                        $listStr.listen("quickClick", function (e) {
                            var data = $(e.currentTarget).data("data");
                            var mediaRecObj = new Media(window.imgUrl + data.attachmentPath, function () {
                                console.log('Media_succ')
                            }, function () {
                                console.log('Media_fail')
                            });
                            mediaRecObj.play();
                        });
                    }
                }
            // });
        },
        methods: {}
    }
</script>

<style lang="less" scoped>
    .timeaxis2 {
        border-left: 1px solid #d8d8d8;
        margin-left: 7%;
    }

    .timeaxis2 li:first-child {
        margin-top: 0;
    }

    .timeaxis2 li {
        position: relative;
        background: #f7f7f7;
        padding: 3% 5%;
        border-radius: 6px;
        margin: 6%;
    }

    .KpichulibzList2 {
        padding-top: 6%;
    }

    .timeaxis2 li .passImg {
        position: absolute;
        z-index: 100;
        top: 2%;
        left: -12%;
        width: 10%;
    }

    .voicedisI {
        display: inline-block;
    }

    .vm2 {
        vertical-align: middle;
    }

    .jszx-bar-icon-up > div {
        position: relative;
        height: 3em;
        text-align: center;
        float: left;
    }

    .vocietitle {
        width: 50%;
    }

    .vocietitle_p {
        height: 2.8em;
        line-height: 2.8em;
    }

    .active {
        color: #0283de;
        border-bottom: 0.2em solid #0283de;
    }
</style>
