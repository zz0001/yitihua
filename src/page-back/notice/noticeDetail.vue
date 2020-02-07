<template>
    <div data-role="page" id="notice_detail_page">

        <!--<div class="page_header">-->
            <!--<img class="left_img back-button maplistback" src="/staitc/resources/images/icon_white_back.png">-->
            <!--<div class="page_header_title">通知公告详情</div>-->
        <!--</div>-->
        <tk-header>
            通知公告详情

        </tk-header>
        <div class="page_content" style="background: #ffffff;">
            <div id="notice_detail_wrapper" class="jszx-wrapper">
                <div class="jszx-scroller">
                    <div class="html_margin white_background">
                        <p id="notice_detail_title">高温预警：下周本地气温将到达40摄氏度</p>
                        <p id="notice_detail_type" class="gray_font small" style="padding-top:0em;">本地新闻&nbsp;&nbsp;2017/07/14</p>
                        <div id="notice_detail_html">
                            10天后 镇江天气： 白天晴间多云，温暖，夜间多云，温暖， 气温26℃～35℃， 南偏西风 一级
                        </div>
                        <div id="downtest">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "noticeDetail",
        mounted(){
            totalDigitalRemind();
            window.searchPage = 2;
          //  $("#notice_detail_page").live("pageshow", function () {
                initNoticeDetail();
                /*杩斿洖*/
                $("#notice_detail_page .left_img").listen("quickClick", function (e) {
                    if(window.noticetype=="welcome"){
                        $.mobile.changePage("../load/welcome.html");
                    }else{
                        $.mobile.changePage("../notice/noticeWelcomeList.html");
                    }

                    //app_noticeList(false, 1, "", "", "notice_welcome_list_html");
                });
                $("#downtest").on("click", "div", function (e) {
                    var href = window.downloadUrl + $(e.currentTarget).attr("href")
                    var name = $(e.currentTarget).text();
                    isFileExist(name, window.cacheDirectory, function (result) {
                        if(result){
                            jsict.appManager.openLocalFile(function(){}, function(){}, window.cacheDirectoryPath+"/"+name);
                        }else{
                            showConfirm("<p style='padding:1em;'>确认下载文档吗？</p>",null,null,function () {
                                showLoading("正在下载....");

                                var fileTransfer = new FileTransfer();
                                fileTransfer.download(
                                    encodeURI(href),
                                    window.cacheDirectoryPath+"/"+name,
                                    function(entry){
                                        hideLoading();
                                        toast("下载成功！");

                                        jsict.appManager.openLocalFile(function(){}, function(){}, window.cacheDirectoryPath+"/"+name);
                                    },
                                    function(error){
                                        hideLoading();
                                        toast("下载失败，请重试");
                                    }
                                );
                            })
                        }
                    });
                })
         //   });
            function initNoticeDetail() {
                $("#notice_detail_wrapper")[0].style.height = window.localInnerHeight - $("#notice_detail_page .page_header").height() + "px";
                initScroll({
                    "wrapper": "notice_detail_wrapper",
                    "dir": "y",
                    "bounce": false,
                    "scrollBar": true
                });
                $("#notice_detail_title").html("");
                $("#notice_detail_type").html("");
                $("#notice_detail_html").html("");
                $("#downtest").html("");
                scrollToTop("notice_detail_wrapper");


                app_noticeDetail();
            }
        }
    }
</script>

<style scoped>
    #notice_detail_page div p {
        text-align: center;
        padding: 0.8em;
    }

    #notice_detail_page .img_wrapper img ,  #notice_detail_page p img {
        width: 100%;
    }

    #notice_detail_page #notice_detail_html {
        padding: 0em 1em;
        line-height: 1.5em;
    }
    #down div{
        text-align: left;
        margin-left: 20pt;
    }
</style>
