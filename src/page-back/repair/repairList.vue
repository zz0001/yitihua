<template>
    <div data-role="page" id="repairList_page">
        <link rel="stylesheet" type="text/css" href="css/newStyle20180327.css"/>
        <div class="page_header">
            <img class="left_img back-button " src="/staitc/resources/images/icon_white_back.png">
            <div class="page_header_title">中心工作</div>
        </div>
        <div class="page_content" style="background: none;">
            <div id="repairList_wrapper" class="jszx-wrapper">
                <div class="jszx-scroller">
                    <div class="KpiIndexContent">
                        <ul class="KpiIndexContentList" id='repairListUl'>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script type="text/ecmascript-6">
    export default {
        name: "repairList",
        data() {
            return {}
        },
        created() {

        },
        mounted() {
            var that = this;
            // $("#repairList_page").live("pageshow", function () {
                $("#repairList_wrapper")[0].style.height = window.localInnerHeight - $("#repairList_page .page_header").height() + "px";
                initScroll({
                    "wrapper": "repairList_wrapper",
                    "dir": "y",
                    "bounce": false,
                    "scrollBar": true
                });
                $("#repairList_page .back-button").listen("quickClick", function (e) {
                    // $.mobile.changePage("../centerwork/centerWorkList.html");
                    that.$router.back(-1);
                });

                //接口入参
                var obj = "";
                obj += toJson("loginId", window.localStorage.loginId);
                //集中整治列表接口
                doPost("centerTasklist.action", obj, function (data) {
                    //加载集合列表
                    loadListUl(data.num)
                }, "");

                /*加载集合列表*/
                function loadListUl(list) {
                    var repairListUl = $('#repairListUl');
                    repairListUl.empty();
                    for (var i = 0; i < list.length; i++) {
                        var listStr = '';
                        listStr += '<li class="disTw">';
                        listStr += '    <div class="vm disI listLeft">';
                        listStr += '        <p class="f15 huic2 lhei22">';
                        listStr += '            <span>' + list[i].centertaskname + '</span>';
                        listStr += '        </p>';
                        listStr += '        <p class="f15 huic2 lhei22">';
                        listStr += '            <span>开始时间</span>';
                        listStr += '            <span>' + list[i].taskgettime + '</span>';
                        listStr += '        </p>';
                        listStr += '        <p class="f15 huic2 lhei22">';
                        listStr += '            <span>结束时间</span>';
                        listStr += '            <span>' + list[i].taskfinishtime + '</span>';
                        listStr += '        </p>';
                        listStr += '    </div>';
                        if (list[i].taskstatus == '0')
                            listStr += '    <div class="vm disI listRight tr orginc">处理中</div>';
                        else
                            listStr += '    <div class="vm disI listRight tr">已完成</div>';
                        listStr += '</li>';
                        var $listStr = $(listStr).appendTo("#repairListUl");
                        $listStr.data('data', list[i]);
                        $listStr.listen("quickClick", function (e) {
                            var data = $(e.currentTarget).data("data");
                            window.repairListParam_0329_yfy = data;
                            // $.mobile.changePage("../repair/repairDetail.html");
                            that.$router.push('/repairDetail');
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
