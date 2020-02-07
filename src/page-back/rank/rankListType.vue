<template>
    <div data-role="page" id="rank_type_page">
        <div class="page_header">
            <img class="left_img back-button " src="/staitc/resources/images/icon_white_back.png">
            <div class="page_header_title">排名考核</div>
            <div class="right_img right_btn">全部</div>
        </div>

        <div class="page_content" style="">
            <div id="rank_type_wrapper" class="jszx-wrapper">
                <div class="jszx-scroller">
                    <p class="selectTypeTitle">选择分类</p>
                    <ul class="ranklist" id="ranklisttype">

                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script type="text/ecmascript-6">
    export default {
        name: "rankListType",
        data() {
            return {}
        },
        created() {

        },
        mounted() {
            var that = this;
            window.searchPage = 2;
            // $("#rank_type_page").live("pageshow", function () {
                ininListType();
                /*大小类*/
                /*分类*/
                $("#rank_type_page .right_img").listen("quickClick", function (e) {
                    window.localStorage.rankType = "";
                    $.mobile.changePage("../rank/rankList.html");
                    that.$router.push('/rankList');
                });
                /*返回*/
                $("#rank_type_page .left_img").listen("quickClick", function (e) {
                    if ($(".max-dialog").is(':visible') == true) {
                        $(".max-dialog").remove();
                    } else {
                        // $.mobile.changePage("../load/welcome.html");
                        that.$router.back(-1);
                    }
                });
                $("#rank_type_page ul").on("click", "li", function (e) {
                    var type = "0" + $(e.currentTarget).attr("value");
                    window.localStorage.rankType = type;
                    // $.mobile.changePage("../rank/rankList.html");
                    that.$router.push('/rankList');
                });
            // });

            /**
             * 初始化
             */
            function ininListType() {
                $("#rank_type_wrapper")[0].style.height = window.localInnerHeight - $("#rank_type_page .page_header").height() - $("#rank_type_page .jszx-bar-icon-up").height() + "px";
                initScroll({
                    "wrapper": "rank_type_wrapper",
                    "dir": "y",
                    "bounce": false,
                    "scrollBar": true,
                    "pullUpLoading": function (reset) { //上拉
                        if (window.searchPage > window.arrayDataLength) {
                            reset(true);
                            toast("没有更多的数据了");
                        } else {
                        }
                    },
                    "pullDownLoading": function (reset) { //下拉
                        window.searchPage = 2;
                    }
                });
                scrollToTop("rank_type_wrapper");
                window.noticeTypeName = "";
                window.caseStatus = "";
                window.caseTemporaryStatus = "";
                //开始时间
                window.caseStartTime = "";
                //结束时间
                window.caseEndTime = "";
                //职能事项
                window.choiceThingsParts = "";
                //大类
                window.choiceBigType = "";
                //小类
                window.choiceSmallType = "";
                //临时职能事项
                window.choiceTemporaryThingsParts = "";
                //临时大类
                window.choiceTemporaryBigType = "";
                //临时小类
                window.choiceTemporarySmallType = "";
                $("#ranklisttype").empty();
                ranklist_type(false, 1);
            }

            //接口调用以及dom构建
            function ranklist_type(reset, pageNum) {
                if (!reset) {
                }
                if (parseInt(pageNum) < 2) {
                    $("#ranklisttype").empty();
                }
                var obj = "";
                obj += toJson("userid", $.trim(window.localStorage.userId)) + "&";
                obj += toJson("pageSize", "20") + "&";
                obj += toJson("pageNum", pageNum);
                doPost("rankList.action", obj, function (data) {
                    if (!reset) {
                        hideLoading();
                    }
                    if (data.code) {
                        var htmls = "";
                        for (var j = 0; j < data.code.length; j++) {
                            htmls += '<li onclick="licilck()" value=' + data.code[j].value + '><span class="disI vm" style="color:#555555;width:93%;">' + data.code[j].text + '</span></li>'
                        }
                        $("#ranklisttype").html(htmls);
                    } else {
                        noListShow("", "", "", $("#ranklisttype"), "");
                    }
                }, "");
            }
        },
        methods: {}
    }
</script>

<style lang="less" scoped>
    #rank_type_page .page_header_title .jszx-bar-icon-up {
        background: #fafafa;
    }

    #rank_type_page .home_list_tr_first_td {
        padding: 0.7em;
        padding-left: 0em;
    }

    #rank_type_page .right_btn {
        width: 3.5em;
        height: 1.5em;
        color: #ffffff;
    }

    #rank_type_page .right_btn .btn_div {
        color: #ffffff;
        border: 1px solid #ffffff;
        height: 1.7em;
        line-height: 1.7em;
        top: -0.5em;
        background: orange;
        text-align: center;
    }

    #rank_type_page .jszx-bar-item-3 > div {
        width: 33.3%;
    }

    #rank_type_page .tab_oranger_font p,
    .tab_bloack_font p, #rank_type_page .jszx-bar-item-3 div p {
        height: 2.8em;
        line-height: 2.8em;
    }

    /*筛选小图标*/
    #rank_type_page .jszx-bar-item-3 div p img {
        width: 0.6em;
        height: 0.5em;
        padding-left: 0.5em;
    }

    #rank_type_page .home_list_tr_first_td span {
        margin-left: 0.5em;
    }

    #rank_type_page .right_img {
        width: 4.5em;
        height: 4.5em;
    }

    #red_round_rank {
        width: 0.5em;
        height: 0.5em;
        background: red;
        border-radius: 0.5em;
        position: relative;
        float: left;
        border: 2px solid #ffffff;
    }

    .right_fenlei {
        position: absolute;
        top: 0.5em;
        right: 1em;
        z-index: 1;
        margin-top: 0.4em;
        text-align: right;
        width: 2.5em;
        height: 2.5em;
        display: block;
        color: #FFF;
    }

    .KpiTcbackG2 {
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        z-index: 20;
        background: rgba(0, 0, 0, 0.5);
    }

    .KpiFooterContent2 {
        background: #fff;
        position: absolute;
        bottom: -100%;
        left: 0;
        right: 0;
        z-index: 25;
        padding: 0 5% 5% 5%;
        -webkit-transition: all 1s ease;
        transition: all 1s ease;
    }

    .kdts-botwrap-open2 {
        bottom: 0;
        -webkit-transition: all 1s ease;
        transition: all 1s ease;
    }

    .ranklist {
        background: #fff;
        padding-left: 4%;
        margin-top: 2.5%;
        text-align: center;
    }

    .ranklist li {
        padding: 4% 4% 4% 0;
        border-bottom: 1px solid #e5e3e3;
    }

    .selectTypeTitle {
        padding: 0.5em 2em;
    }
</style>
