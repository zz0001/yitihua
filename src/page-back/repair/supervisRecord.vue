<template>
    <div data-role="page" id="supervisRecord_page">
        <div class="page_header">
            <img class="left_img back-button " src="/staitc/resources/images/icon_white_back.png">
            <div class="page_header_title">督办记录</div>
        </div>
        <div class="page_content" style="background: #fff;">
            <div id="supervisRecord_wrapper" class="jszx-wrapper">
                <div class="jszx-scroller">
                    <div class="timeaxis">
                        <ul class="KpichulibzList" id="supervisRecordUl">
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script type="text/ecmascript-6">
    export default {
        name: "supervisRecord",
        data() {
            return {}
        },
        created() {

        },
        mounted() {
            var that = this;
            // $("#supervisRecord_page").live("pageshow", function () {
                $("#supervisRecord_wrapper")[0].style.height = window.localInnerHeight - $("#supervisRecord_page .page_header").height() + "px";
                initScroll({
                    "wrapper": "supervisRecord_wrapper",
                    "dir": "y",
                    "bounce": false,
                    "scrollBar": true
                });
                //后退
                $("#supervisRecord_page .back-button").listen("quickClick", function (e) {
                    // $.mobile.changePage("../repair/repairDetail.html");
                    that.$router.back(-1);
                });

                if (window.repairDetailParam_taskno_0411_yfy) {
                    //页面参数
                    var param = window.repairDetailParam_taskno_0411_yfy;
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
                    var supervisRecordUl = $('#supervisRecordUl');
                    supervisRecordUl.empty();
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
                        listStr += '        <span class="disI vm" style="background:#80c1ee;padding:0.6% 5%;border-radius:0.2em;margin-top:5%;">';
                        listStr += '            <span class="f12 disI" style="color:#fff;margin-right:20%"></span>';
                        listStr += '            <img src="images/yyinImg.png" style="width:20%;">';
                        listStr += '        </span>';
                        listStr += '    </div>';
                        listStr += '    <img src="images/passImg.png" class="passImg">';
                        listStr += '</li>';
                        var $listStr = $(listStr).appendTo("#supervisRecordUl");
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

</style>
