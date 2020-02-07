<template>
    <div data-role="page" id="jblddetail_page">
        <tk-header>
            详情
        </tk-header>

        <div class="page_content">
            <div id="jblddetail_wrapper" class="jszx-wrapper">
                <div class="jszx-scroller">
                    <div id="jbldvisited_html" class="html_margin white_background">
                        <table class="inp_table" cellpadding="0" cellspacing="0">
                            <td colspan="3" class="commodityAddImgs">
                                <div id="jblddetail_img_wrapper" class="jszx-wrapper">
                                    <div class="jszx-scroller" id="jblddetail_img_scroll">
                                        <div id="jblddetail_img">
                                        </div>
                                    </div>
                                </div>
                            </td>
                            <tr>
                                <td style="min-width: 5em;height: 3em;
" class="" id="jbldDetailNum">发送人
                                </td>
                                <td colspan="2">
                                    <div id="jblddetail_sendName" style="color:#999999;"></div>
                                </td>
                            </tr>


                            <tr>
                                <td style="padding-top:0.5em;height: 3em;
" id="jbldQuestionDesc">接收人
                                </td>
                                <td colspan="2">
                                    <div id="jblddetail_deptName" style="color:#999999;"></div>
                                </td>
                            </tr>
                            <tr>
                                <td style="padding-top:0.5em;height: 3em;
">文件下载
                                </td>
                                <td colspan="2">

                                </td>
                            </tr>
                            <tr>
                                <td colspan="3" style="padding:1.5em;text-align: left;color: #333333;"
                                    id="downtest"></td>
                            </tr>
                        </table>

                    </div>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
    export default {
        name: "",
        mounted() {
            var that = this;

            window.searchPage = 2;
            //设置标题栏，内容栏，底部内容高度
            $(".page_content")[0].style.height = window.localInnerHeight - $(".page_header").height() - $(".page_footer").height() + "px";
            $(".page_content").children("div").get(0).style.height = window.localInnerHeight - $(".page_header").height() - $(".page_footer").height() + "px";
            //设置input和textarea的样式
            $("input").addClass("small gray_dark_font ui-input-text ui-body-c ui-corner-all ui-shadow-inset");
            $("textarea").addClass("ui-input-text ui-body-c ui-corner-all ui-shadow-inset");

            initjbldDetail();
            cleanjbldDetail();
            jbldOrderDetail();
            /*返回*/
            $("#jblddetail_page .back-button").listen("quickClick", function (e) {
                that.$router.back();

            });
            $("#downtest").on("click", "div", function (e) {
                var href = window.downloadUrl + $(e.currentTarget).attr("href")
                var name = $(e.currentTarget).text();
                isFileExist(name, window.cacheDirectory, function (result) {
                    if (result) {
                        jsict.appManager.openLocalFile(function () {
                        }, function () {
                        }, window.cacheDirectoryPath + "/" + name);
                    } else {
                        showConfirm("<p style='padding:1em;'>确认下载文档吗？</p>", null, null, function () {
                            showLoading("正在下载....");
                            console.log(window.cacheDirectoryPath + "/" + name)


                            var fileTransfer = new FileTransfer();
                            fileTransfer.download(
                                encodeURI(href),
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
                    }
                });
            })

            $("#jblddetail_page").on("click", ".smaller", function (e) {
                if (!e.isPropagationStopped()) {
                    var url = $(e.currentTarget).attr("url");
                    if (url.indexOf(";") > 0) {
                        var info = url.split(";");
                        window.opinionedImgArray = info;
                        var urlimg = window.imgUrl + info[0];
                        cordova.plugins.StartActivity.startActivity(urlimg, function (data) {
                        }, function (error) {
                            console.log("startActivity error:" + error);
                        });
                    } else {
                        var arr = [];
                        arr.push(url);
                        window.opinionedImgArray = arr;
                        var urlimg = window.imgUrl + url;
                        cordova.plugins.StartActivity.startActivity(urlimg, function (data) {
                        }, function (error) {
                            console.log("startActivity error:" + error);
                        });
                    }
                }//确定stopPropagation是否被调用过

                e.stopPropagation();//必须要

                // }
            });

            function initjbldDetail() {
                $("#jblddetail_wrapper")[0].style.height = window.localInnerHeight - $("#jblddetail_page .page_header").height() + "px";
                $("#jblddetail_page .page_content").css("height", window.localInnerHeight - $("#jblddetail_page .page_header").height() + "px");

                initScroll({
                    "wrapper": "jblddetail_wrapper",
                    "dir": "y",
                    "bounce": false,
                    "scrollBar": true
                });
                scrollToTop("jblddetail_wrapper");
                $("#jblddetail_page table tr td").addClass("gray_line_bottom");
                window.upload_imgscroll = "jblddetail_img_scroll";
                window.upload_imgwrapper = "jblddetail_img_wrapper";
                window.upload_addimg = "jblddetail_img";
            }

            function cleanjbldDetail() {
                $("#jblddetail_page table tr td input").val("");
                $("#jblddetail_page table tr td textarea").val("");
                $("#jblddetail_page #jblddetail_img").empty();
                window.caseTaskOneTaskId = "";

                $("#jblddetail_img_scroll").css("transform", "none");
                $("#jblddetail_img_wrapper .scroll-bar-x").css("transform", "none");
                window.operationListArrayInfo = [];
            }

            function jbldOrderDetail() {

                var data = window.jbldDetail;
                $("#jblddetail_sendName").text(data.sendName);
                $("#jblddetail_deptName").text(data.deptName);

                var houzhui = data.fileUrl.split(".");
                var name = data.fileName + "." + houzhui[1];
                // $("#jblddetail_fileName").text(data.fileName);
                var url = data.fileUrl;
                var html = "";
                html += '<div href="' + url + '" style="text-align: left;margin-left: 20pt;color:#0a24f1;">';
                html += name;
                html += '   </div>';
                var $html = $("#downtest").html(html);

            }
        }
    }
</script>

<style scoped>
    #jblddetail_page .commodityAddImgs {
        overflow: hidden;
        background: #f3f3f3;
    }

    #jblddetail_page .imgdiv {
        padding: 0.7em;
        padding-top: 0em;
        position: relative;
        width: 6em;
        float: left;
    }

    #jblddetail_page .goodsimgone {
        float: left;
        height: 6em;
        width: 6em;
        margin-top: 1em;
    }

    #jblddetail_page #case_detail_img {
        height: 7.5em;
        overflow: hidden;
        display: inline-block;
    }

    /*img end*/
    #jblddetail_page .jszx-bar-item-2 > div {
        width: 50%;
    }

    #jblddetail_page .jszx-bar-item-2 p,
    .jszx-bar-item-2 p {
        height: 2.8em;
        line-height: 2.8em;
    }

    #jblddetail_page .right_btn {
        width: 4.5em;
        right: 0em;
    }

    /*#jblddetail_page .right_btn .btn_div {*/
    /*width: 4em;*/
    /*}*/
    #jblddetail_page .list_row_case {
        padding: 1em;
    }

    #jblddetail_page .list_row_case div:first-child {
        background: #f7f7f7;
        padding: 1em;
        padding: 0.5em 0.1em 0.5em 0.3em;
        border-radius: 0.5em;
    }

    #jblddetail_page .list_row_case div p {
        padding: 0.3em;
        line-height: 1.3em;
    }
</style>
