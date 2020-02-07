<template>
    <div data-role="page" id="document_detail_page">
        <div class="page_header">
            <img class="left_img back-button" src="/staitc/resources/images/icon_white_back.png">
            <div class="page_header_title">文档资料详情</div>
        </div>
        <div class="page_content">
            <div id="document_detail_wrapper" class="jszx-wrapper">
                <div class="jszx-scroller">
                    <div id="document_detail_html" class="html_margin white_background">
                        <table class="inp_table" cellpadding="0" cellspacing="0">
                            <tr>
                                <td style="width: 5em;" class="">部门名称</td>
                                <td colspan="2" id="document_detail_deptName"></td>
                            </tr>
                            <tr>
                                <td style="width: 5em;" class="">文档类型</td>
                                <td colspan="2" id="document_detail_fileName"></td>
                            </tr>
                            <tr>
                                <td style="width: 5em;" class="">文档类型名称</td>
                                <td colspan="2" id="document_detail_fileTypeName"></td>
                            </tr>
                            <tr>
                                <td style="width: 5em;" class="">是否共享</td>
                                <td colspan="2" id="document_detail_isShare"></td>
                            </tr>
                            <tr>
                                <td style="width: 5em;" class="">文件真实名称</td>
                                <td colspan="2" id="document_detail_fileRealName" style="color:blue;"></td>
                            </tr>
                            <tr>
                                <td style="width: 5em;" class="">文档描述</td>
                                <td colspan="2" id="document_detail_fileDesc">
                                </td>
                            </tr>
                            <tr>
                                <td style="width: 5em;" class="">创建时间</td>
                                <td colspan="2" id="document_detail_creatTime">
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
        name: "documentManagementDetail",
        data() {
            return {}
        },
        created() {

        },
        mounted() {
            window.searchPage = 2;
            // $("#document_detail_page").live("pageshow", function () {
                if (!window.documentDetailPage) {
                    initdocumentDetail();
                    window.documentDetailPage = true;
                }
                /*返回*/
                $("#document_detail_page .back-button").listen("quickClick", function (e) {
                    // $.mobile.changePage("../workassist/documentManagement.html");
                    that.$router.back(-1);
                });
                $("#document_detail_fileRealName").bind("click", function (e) {
                    var url = $(e.currentTarget).data("url");
                    var name = $(e.currentTarget).text();

                    isFileExist(name, window.cacheDirectory, function (result) {
                        if (result) {
                            jsict.appManager.openLocalFile(function () {
                            }, function () {
                            }, window.cacheDirectoryPath + "/" + name);
                        } else {
                            showConfirm("<p style='padding:1em;'>确认下载文档吗？</p>", null, null, function () {
                                showLoading("正在下载....");
                                var fileTransfer = new FileTransfer();
                                fileTransfer.download(
                                    encodeURI(window.imgUrl + url),
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
            // });

            function initdocumentDetail() {
                $("#document_detail_wrapper")[0].style.height = window.localInnerHeight - $("#document_detail_page .page_header").height() + "px";
                initScroll({
                    "wrapper": "document_detail_wrapper",
                    "dir": "y",
                    "bounce": false,
                    "scrollBar": true
                });
                window.lookType = "";
                scrollToTop("document_detail_wrapper");
                $("#document_detail_page table tr td").addClass("gray_line_bottom");
                $("#document_detail_page table tr td:last-child").html("");
                app_documentDetail();
            }
        },
        methods: {}
    }
</script>

<style lang="less" scoped>
    #document_detail_page .page_header .right_img {
        width: 4em;
        text-align: right;
        color: #FFFFFF;
    }

    #document_detail_page table tr td {
        padding: 1em 1em 1em 0em;
        line-height: 1.4em;
    }

    #document_detail_page table tr td:first-child {
        text-align: left;
        padding-left: 1em;
    }

    #document_detail_page table tr td:last-child {
        text-align: right;
    }
</style>
