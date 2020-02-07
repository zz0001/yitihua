<template>
    <div data-role="page" id="ddzxdetail_page">
        <tk-header>
            采集详情
        </tk-header>

        <div class="page_content">
            <div id="ddzxdetail_wrapper" class="jszx-wrapper">
                <div class="jszx-scroller">
                    <div id="ddzxvisited_html" class="html_margin white_background">
                        <table class="inp_table" cellpadding="0" cellspacing="0">
                            <td colspan="3" class="commodityAddImgs">
                                <div id="ddzxdetail_img_wrapper" class="jszx-wrapper">
                                    <div class="jszx-scroller" id="ddzxdetail_img_scroll">
                                        <div id="ddzxdetail_img">
                                        </div>
                                    </div>
                                </div>
                            </td>
                            <tr>
                                <td style="min-width: 5em;" class="" id="ddzxDetailNum">创建时间</td>
                                <td colspan="2">
                                    <input id="ddzxdetail_caseNo" readonly type="text"/>
                                </td>
                            </tr>


                            <tr>
                                <td style="padding-top:0.5em;" id="ddzxQuestionDesc">消息内容</td>
                                <td colspan="2">
                                    <input class="small gray_dark_font" style="color:#999999;" readonly="true"/>
                                </td>
                            </tr>
                            <tr>
                                <td colspan="3" style="padding:1.5em;text-align: left;color: #333333;"
                                    id="ddzxdetail_problem"></td>
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

            initddzxDetail();
            cleanddzxDetail();
            ddzxOrderDetail(window.localStorage.ddRow_id);
            /*返回*/
            $("#ddzxdetail_page .back-button").listen("quickClick", function (e) {
                that.$router.back();

            });

            $("#ddzxdetail_page").on("click", ".smaller", function (e) {
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

            });


            function initddzxDetail() {
                $("#ddzxdetail_wrapper")[0].style.height = window.localInnerHeight - $("#ddzxdetail_page .page_header").height() + "px";
                $("#ddzxdetail_page .page_content").css("height", window.localInnerHeight - $("#ddzxdetail_page .page_header").height() + "px");

                initScroll({
                    "wrapper": "ddzxdetail_wrapper",
                    "dir": "y",
                    "bounce": false,
                    "scrollBar": true
                });
                scrollToTop("ddzxdetail_wrapper");
                $("#ddzxdetail_page table tr td").addClass("gray_line_bottom");
                window.upload_imgscroll = "ddzxdetail_img_scroll";
                window.upload_imgwrapper = "ddzxdetail_img_wrapper";
                window.upload_addimg = "ddzxdetail_img";
            }

            function cleanddzxDetail() {
                $("#ddzxdetail_page table tr td input").val("");
                $("#ddzxdetail_page table tr td textarea").val("");
                $("#ddzxdetail_page #ddzxdetail_img").empty();
                window.caseTaskOneTaskId = "";

                $("#ddzxdetail_img_scroll").css("transform", "none");
                $("#ddzxdetail_img_wrapper .scroll-bar-x").css("transform", "none");
                window.operationListArrayInfo = [];
            }

            function ddzxOrderDetail(row_id) {

                var obj = "";
                //obj += toJson("userId", window.localStorage.userId) + "&";
                //obj += toJson("type", window.thisCaseQueryType) + "&";
                obj += toJson("rowId", row_id);
                doPost("queryMessageDetail.action", obj, function (data) {

                    //if (data.code == 0) {
                    var array = data;


                    if (!isNull(array.path)) {
                        $("#ddzxdetail_page .commodityAddImgs").show();
                        if (array.path.indexOf(";") > 0) {
                            var info = array.path.split(";");
                            if (!isNull(info) && info.length > 0) {
                                for (var j = 0; j < info.length; j++) {
                                    if (!isNull(info[j])) {
                                        var commodity_add_img_info = ' <div class="imgdiv">';
                                        //commodity_add_img_info += '<img class="delimg" src="/staitc/resources/images/del3.png">';
                                        commodity_add_img_info += '<img class="goodsimgone" src="' + window.imgUrl + info[j] + '">';
                                        commodity_add_img_info += '</div>';
                                        var $commodity_add_img_info = createListRow(commodity_add_img_info).appendTo("#" + window.upload_addimg);
                                        $commodity_add_img_info.data('data', info[j]);
                                        $commodity_add_img_info.listen("quickClick", function (e) {
                                            var data = $(e.currentTarget).data("data");
                                            var arrdata = [];
                                            arrdata.push(data);
                                            var url = window.imgUrl + arrdata[0];
                                            cordova.plugins.StartActivity.startActivity(url, function (data) {
                                            }, function (error) {
                                                console.log("startActivity error:" + error);
                                            });

                                        });
                                    }
                                }
                                window.opinionedImgArray = info;
                                imgWidth(window.upload_imgscroll, window.upload_imgwrapper, array.path.length, window.upload_addimg);
                            }
                        } else {
                            var arr = [];
                            arr.push(array.path);
                            window.opinionedImgArray = arr;
                            var commodity_add_img_info = ' <div class="imgdiv">';
                            //commodity_add_img_info += '<img class="delimg" src="/staitc/resources/images/del3.png">';
                            commodity_add_img_info += '<img class="goodsimgone" src="' + window.imgUrl + array.path + '">';
                            commodity_add_img_info += '</div>';
                            var $commodity_add_img_info = createListRow(commodity_add_img_info).appendTo("#" + window.upload_addimg);
                            $commodity_add_img_info.data('data', arr);
                            $commodity_add_img_info.listen("quickClick", function (e) {
                                var data = $(e.currentTarget).data("data");
                                var url = window.imgUrl + data[0];
                                cordova.plugins.StartActivity.startActivity(url, function (data) {
                                }, function (error) {
                                    console.log("startActivity error:" + error);
                                });

                            });

                        }

                    } else {
                        $("#ddzxdetail_page .commodityAddImgs").hide();
                    }

                    //步骤


                    //工单编号
                    $("#ddzxdetail_caseNo").val(array.createTime);

                    //问题描述
                    $("#ddzxdetail_problem").html(array.message);
                    //领导查看


                }, "");
            }
        }
    }
</script>

<style scoped>
    #ddzxdetail_page .commodityAddImgs {
        overflow: hidden;
        background: #f3f3f3;
    }

    #ddzxdetail_page .imgdiv {
        padding: 0.7em;
        padding-top: 0em;
        position: relative;
        width: 6em;
        float: left;
    }

    #ddzxdetail_page .goodsimgone {
        float: left;
        height: 6em;
        width: 6em;
        margin-top: 1em;
    }

    #ddzxdetail_page #case_detail_img {
        height: 7.5em;
        overflow: hidden;
        display: inline-block;
    }

    /*img end*/
    #ddzxdetail_page .jszx-bar-item-2 > div {
        width: 50%;
    }

    #ddzxdetail_page .jszx-bar-item-2 p,
    .jszx-bar-item-2 p {
        height: 2.8em;
        line-height: 2.8em;
    }

    #ddzxdetail_page .right_btn {
        width: 4.5em;
        right: 0em;
    }

    #ddzxdetail_page .list_row_case {
        padding: 1em;
    }

    #ddzxdetail_page .list_row_case div:first-child {
        background: #f7f7f7;
        padding: 1em;
        padding: 0.5em 0.1em 0.5em 0.3em;
        border-radius: 0.5em;
    }

    #ddzxdetail_page .list_row_case div p {
        padding: 0.3em;
        line-height: 1.3em;
    }
</style>
