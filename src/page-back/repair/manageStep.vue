<template>
    <div data-role="page" id="manageStep_page">
        <div class="page_header">
            <img class="left_img back-button " src="/staitc/resources/images/icon_white_back.png">
            <div class="page_header_title">处理步骤</div>
        </div>
        <div class="page_content" style="background: #fff;">
            <div id="manageStep_wrapper" class="jszx-wrapper">
                <div class="jszx-scroller">
                    <div class="timeaxis">
                        <ul class="KpichulibzList" id="manageStepList">

                        </ul>
                    </div>
                    <div id="manage_Step_wrapper" class="jszx-wrapper">
                        <div class="jszx-scroller">
                            <div id="manage_Step_html" class="html_margin">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script type="text/ecmascript-6">
    export default {
        name: "manageStep",
        data() {
            return {}
        },
        created() {

        },
        mounted() {
            var that = this;
            // $("#manageStep_page").live("pageshow", function () {
                $("#manageStep_wrapper")[0].style.height = window.localInnerHeight - $("#manageStep_page .page_header").height() + "px";
                initScroll({
                    "wrapper": "manageStep_wrapper",
                    "dir": "y",
                    "bounce": false,
                    "scrollBar": true
                });

                $("#manageStep_page .back-button").listen("quickClick", function (e) {
                    // $.mobile.changePage("../repair/repairDetail.html");
                    that.$router.back(-1);
                });

                if (window.repairDetailParam_0329_yfy) {
                    //页面参数
                    var param = window.repairDetailParam_0329_yfy;
                    //接口入参
                    var obj = "";
                    obj += toJson("centertaskid", param.centertaskid) + "&";
                    obj += toJson("id", param.id);
                    var result = "";
                    //集中整治详情接口
                    doPost("centerTaskProcessList.action", obj, function (data) {
                        //加载集合列表
                        result = data;
                        //加载页面数据
                        if (result.datas.length > 0) {
                            $("#manageStepList").show();
                            $("#manage_Step_wrapper").hide();
                            loadList(result.datas);
                        } else {
                            $("#manageStepList").hide();
                            $("#manage_Step_wrapper").show();
                            noListShow("", "", "", $("#manage_Step_html"), "");
                        }
                    }, "");
                }

                function loadList(list) {
                    var manageStepList = $('#manageStepList');
                    manageStepList.empty();
                    for (var i = 0; i < list.length; i++) {
                        var listStr = '';
                        listStr += '<li>';
                        listStr += '    <div class="disTw">';
                        listStr += '        <span class="f15 huic1 widkd3 disI vm">' + list[i].dealdept + '</span>';
                        listStr += '    </div>';
                        listStr += '    <div class="f13 huic5 mt4">';
                        listStr += '        <span>完成：' + list[i].completeamount + '</span>';
                        listStr += '        <span>完成率：' + list[i].completeprocess + '</span>';
                        listStr += '    </div>';
                        listStr += '    <div class="f13 huic5 mt2">' + list[i].completecontent + '</div>';
                        listStr += '    <div class="f13 huic5 mt2">' + list[i].createtime + '</div>';
                        if (list[i].completestatus == '1')
                            listStr += '    <img src="images/passImg.png" class="passImg">';
                        else
                            listStr += '    <img src="images/nowImg.png" class="passImg">';
                        listStr += '</li>';
                        var $listStr = $(listStr).appendTo("#manageStepList");
                        $listStr.data('data', list[i]);
                        $listStr.listen("quickClick", function (e) {
                            var data = $(e.currentTarget).data("data");
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
