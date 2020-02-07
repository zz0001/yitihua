<template>
<div data-role="page" id="voice_supervisRecord_page">
    <div class="page_header">
        <img class="left_img back-button " src="/staitc/resources/images/icon_white_back.png">
        <div class="page_header_title">督办记录</div>
    </div>
    <div class="page_content" style="background: #fff;">
        <div id="voice_supervisRecord_wrapper" class="jszx-wrapper">
            <div class="jszx-scroller">

                <div class="timeaxis2">
                    <ul class="KpichulibzList" id="voiceSupervisRecordUl">

                    </ul>
                </div>

            </div>
        </div>
    </div>
</div>
</template>

<script>
export default {
    mounted() {
        $("#voice_supervisRecord_wrapper")[0].style.height = window.localInnerHeight - $("#voice_supervisRecord_page .page_header").height() + "px";
        initScroll({
            "wrapper": "voice_supervisRecord_wrapper",
            "dir": "y",
            "bounce": false,
            "scrollBar": true
        });
        //后退
        $("#voice_supervisRecord_page .back-button").listen("quickClick", function (e) {
            app.$router.push("../load/waitWorkWelcome.html");
        });

        if (true) {
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

        function loadList(list) {
            var voiceSupervisRecordUl = $('#voiceSupervisRecordUl');
            voiceSupervisRecordUl.empty();
            for (var i = 0; i < list.length; i++) {
                var listStr = '';
                listStr += '<li>';
                listStr += '    <div class="f13 huic5 mt4">';
                listStr += '        <span>督办时间：</span>';
                listStr += '        <span>' + list[i].reportTime + '</span>';
                listStr += '    </div>';
                listStr += '    <div class="f13 huic5 mt4">';
                listStr += '        <span>督办部门：</span>';
                listStr += '        <span>' + list[i].dealName + '</span>';
                listStr += '    </div>';
                listStr += '    <div>';
                listStr += '        <span class="disI vm" style="background:#80c1ee;padding:0.6% 5%;border-radius:0.2em;margin-top:5%;">';
                listStr += '            <span class="f12 disI" style="color:#fff;margin-right:20%"></span>';
                listStr += '            <img src="images/yyinImg.png" style="width:20%;">';
                listStr += '        </span>';
                listStr += '    </div>';
                listStr += '    <img src="images/passImg.png" class="passImg">';
                listStr += '</li>';
                var $listStr = $(listStr).appendTo("#voiceSupervisRecordUl");
                $listStr.data('data', list[i]);
                var status = 0; //0 停止；1 开始 
                $listStr.listen("quickClick", function (e) {
                    var data = $(e.currentTarget).data("data");
                    mediaRecObj = new Media(window.imgUrl + data.attachmentPath, function () {
                        console.log('Media_succ')
                    }, function () {
                        console.log('Media_fail')
                    });
                    if (status == 0) {
                        setTimeout(function () {
                            status = 1;
                        }, 2000);
                        mediaRecObj.play();
                    } else if (status == 1) {
                        setTimeout(function () {
                            status = 0;
                        }, 2000);
                        mediaRecObj.pause();
                    }
                });
            };

        }
    }
}
</script>

<style scoped>
.timeaxis2 {
    border-left: 1px solid #d8d8d8;
    margin-left: 7%;
}
</style>
