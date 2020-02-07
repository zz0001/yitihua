<template>
    <div data-role="page" id="notice_detail_page">

        <!--<div class="page_header">-->
            <!--<img class="left_img back-button maplistback" src="/staitc/resources/images/icon_white_back.png">-->
            <!--<div class="page_header_title">通知公告详情</div>-->
        <!--</div>-->
        <tk-header>
            通知公告详情

        </tk-header>
        <tk-scroll>
            <div id="notice_detail_wrapper" class="jszx-wrapper">
                <div class="jszx-scroller">
                    <div class="html_margin white_background">
                        <p id="notice_detail_title"></p>
                        <p id="notice_detail_type" class="gray_font small" style="padding-top:0em;"></p>
                        <div id="notice_detail_html">

                        </div>
                        <div id="downtest">
                        </div>
                    </div>
                </div>
            </div>
        </tk-scroll>
        <!--<div class="page_content" style="background: #ffffff;">-->
            <!--<div id="notice_detail_wrapper" class="jszx-wrapper">-->
                <!--<div class="jszx-scroller">-->
                    <!--<div class="html_margin white_background">-->
                        <!--<p id="notice_detail_title"></p>-->
                        <!--<p id="notice_detail_type" class="gray_font small" style="padding-top:0em;"></p>-->
                        <!--<div id="notice_detail_html">-->
                            <!---->
                        <!--</div>-->
                        <!--<div id="downtest">-->
                        <!--</div>-->
                    <!--</div>-->
                <!--</div>-->
            <!--</div>-->
        <!--</div>-->
    </div>
</template>

<script>
    import axios from "axios";
    export default {
        name: "noticeDetail",
        mounted(){
            //totalDigitalRemind();
            window.searchPage = 2;

            this.noticeContentId = this.$route.query.rowId;
            this.app_noticeDetail();
          //  $("#notice_detail_page").live("pageshow", function () {
             //   initNoticeDetail();
                /*杩斿洖*/

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



            }
        },
        methods:{
            app_noticeDetail() {
                var obj = "";
                // obj += toJson("userid", $.trim(window.localStorage.userId)) + "&";
                // obj += toJson("row_id", window.noticeContentId);
               // var url='/wgh/app/' + 'app_noticeDetail.action';
              //  var url="http://192.168.1.147:8080/yth_mysql/app/app_noticeDetail.action";
                var url='/wgh/app'+'/app_noticeDetail.action';
                var params={para: 'userid=&row_id=' + this.noticeContentId+''};
                axios.post(url, params).then(data => {
                    if (data.code == "0") {
                        var array = data.datas[0];
                        $("#notice_detail_title").html(array.title);
                        $("#notice_detail_type").html(array.noticeType + '&nbsp;&nbsp;&nbsp;' + array.creatTime);
                        $("#notice_detail_html").html(array.content);
                        var h = $("#notice_detail_html").find("a");
                        $("#notice_detail_html").find("p").css("text-align","left");
                        var html = '附件下载';
                        var array = [];
                        if(h.length>0){
                            for (var i = 0; i < h.length; i++) {
                                //$("#notice_detail_html").find("a").parent().eq(i).hide();
                                var num = i+1;
                                html += '<div href="'+ h.eq(i).attr("href") +'" style="text-align: left;margin-left: 20pt;">';
                                html +=  h.eq(i).text() ;
                                html += '   </div>';
                                var $html = $("#downtest").html(html);
                            }
                        }

                    } else {
                        toast(data.message);
                    }
                })
                // doPost("app_noticeDetail.action", obj, function (data) {
                //     if (data.code == 0) {
                //         var array = data.datas[0];
                //         $("#notice_detail_title").html(array.title);
                //         $("#notice_detail_type").html(array.noticeType + '&nbsp;&nbsp;&nbsp;' + array.creatTime);
                //         $("#notice_detail_html").html(array.content);
                //         var h = $("#notice_detail_html").find("a");
                //         $("#notice_detail_html").find("p").css("text-align","left");
                //         var html = '附件下载';
                //         var array = [];
                //         if(h.length>0){
                //             for (var i = 0; i < h.length; i++) {
                //                 //$("#notice_detail_html").find("a").parent().eq(i).hide();
                //                 var num = i+1;
                //                 html += '<div href="'+ h.eq(i).attr("href") +'" style="text-align: left;margin-left: 20pt;">';
                //                 html +=  h.eq(i).text() ;
                //                 html += '   </div>';
                //                 var $html = $("#downtest").html(html);
                //             }
                //         }
                //
                //     } else {
                //         toast(data.message);
                //     }
                // }, "");
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
