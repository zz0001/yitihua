<template>
    <div data-role="page" id="rank_detail_page">
        <div class="page_header">
            <img class="left_img back-button" src="/staitc/resources/images/icon_white_back.png">
            <div class="page_header_title">考核详情</div>
        </div>
        <div class="page_content">
            <div id="importproject_detail_wrapper" class="jszx-wrapper">
                <div class="jszx-scroller">
                    <div class="html_margin white_background">
                        <table class="inp_table" cellpadding="0" cellspacing="0">
                            <tr>
                                <td style="min-width: 5em;" class="">考核任务</td>
                                <td>
                                    <input readonly id="assessmentTask" type="text"/>
                                </td>
                            </tr>
                            <tr>
                                <td style="min-width: 5em;" class="">发布单位（人）</td>
                                <td>
                                    <input readonly id="publishCompany" type="text"/>
                                </td>
                            </tr>
                            <tr>
                                <td style="min-width: 5em;" class="">发布时间</td>
                                <td>
                                    <input readonly id="publishTime" type="text"/>
                                </td>
                            </tr>
                            <tr>
                                <td style="padding-top:0.5em;">详细描述</td>
                            </tr>
                            <tr>
                                <td colspan="2">
                                    <textarea id="textareainfo" rows="5" cols="20" readonly
                                              style="text-align: left"></textarea>
                                </td>
                            </tr>
                            <tr>
                                <td id="excel_td" colspan="2"
                                    style="padding-top: 1.5em;padding-bottom: 1.5em;padding-left:1.3em;">
                                    <span id="filePath" download="排名.xls">附件下载</span>
                                </td>
                            </tr>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script type="text/ecmascript-6">
    export default {
        name: "rankDetail",
        data() {
            return {}
        },
        created() {

        },
        mounted() {
            var that = this;
            window.searchPage = 2;
            // $("#rank_detail_page").live("pageshow", function () {
                initCaseDetail();
                /*返回*/
                $("#rank_detail_page .back-button").listen("quickClick", function (e) {
                    // $.mobile.changePage("../rank/rankList.html");
                    that.$router.back(-1);
                });
                /*处理步骤*/
                $("#rank_detail_page .right_btn").listen("quickClick", function (e) {
                    window.CaseTaskStpsPage = "";
                    $.mobile.changePage("../leaderOrder/leaderTaskSteps.html");
                });
                $("#filePath").bind("click", function (e) {
                    var url = window.localStorage.filePath;
                    var name = $(e.currentTarget).text();
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
            // });

            function initCaseDetail() {
                $("#importproject_detail_wrapper")[0].style.height = window.localInnerHeight - $("#rank_detail_page .page_header").height() + "px";
                initScroll({
                    "wrapper": "importproject_detail_wrapper",
                    "dir": "y",
                    "bounce": false,
                    "scrollBar": true
                });
                scrollToTop("importproject_detail_wrapper");
                window.opinionedImgArray = [];
                window.lookType = "";
                $("#rank_detail_page table tr td").addClass("gray_line_bottom");
                $("#rank_detail_page table tr td input").val("");
                $("#rank_detail_page table tr td textarea").val("");
                window.thisCaseQueryType = 2;
                app_leaderOrderDetail(window.caseRow_id);
            }

            //接口调用及数据回写
            function app_leaderOrderDetail(row_id) {
                var obj = "";
                obj += toJson("id", row_id) + "&";
                obj += toJson("userid", $.trim(window.localStorage.userId));
                doPost("rankDetail.action", obj, function (data) {
                    if (data && data.datas.length > 0) {
                        var array = data.datas[0];
                        $("#assessmentTask").val(array.checktask);
                        //工单来源
                        $("#publishCompany").val(array.releaseparty);
                        $("#publishTime").val(array.releasetime);
                        $("#textareainfo").val(array.detail);
                        var html = "";
                        var url = "#";
                        window.localStorage.filePath = window.imgUrl + array.filePath;
                        if (array.filePath) {
                            $("#filePath").show();
                        }
                    } else {
                        toast(data.message);
                    }
                }, "");
            }
        },
        methods: {}
    }
</script>

<style lang="less" scoped>
    #rank_detail_page .commodityAddImgs {
        overflow: hidden;
        background: #f3f3f3;
    }

    #rank_detail_page .imgdiv {
        padding: 0 0.7em 0.7em;
        position: relative;
        width: 6em;
        float: left;
    }

    #rank_detail_page .goodsimgone {
        float: left;
        height: 6em;
        width: 6em;
        margin-top: 0.7em;
    }

    #rank_detail_page .delimg {
        width: 2em;
        height: 2em;
        position: relative;
        top: 0;
        left: 5em;
    }

    #rank_detail_page #leader_detail_img {
        height: 7.5em;
        overflow: hidden;
        display: inline-block;
    }

    #rank_detail_page .goodsimgone {
        float: left;
        height: 6em;
        width: 6em;
        margin-top: 0.7em;
    }

    #rank_detail_page .div_input_value_img {
        width: 1.5em;
        height: 1.5em;
        padding-right: 0.5em;
    }

    #rank_detail_page .right_btn {
        width: 4.5em;
        right: 0;
    }
</style>
