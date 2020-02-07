<template>
<div data-role="page" id="appEnfor_detail_page">
    <div class="page_header">
        <img class="left_img back-button" src="/staitc/resources/images/icon_white_back.png">
        <div class="page_header_title">任务详情</div>

    </div>
    <div class="page_content">
        <div id="appEnfor_detail_wrapper" class="jszx-wrapper">
            <div class="jszx-scroller">
                <div id="appEnfor_detail_html" class="html_margin white_background">
                    <table class="inp_table" cellpadding="0" cellspacing="0">
                        <td colspan="3" class="commodityAddImgs">
                            <div id="appEnfor_detail_img_wrapper" class="jszx-wrapper">
                                <div class="jszx-scroller" id="appEnfor_detail_img_scroll">
                                    <div id="appEnfor_detail_img">
                                    </div>
                                </div>
                            </div>
                        </td>
                        <tr>
                            <td style="min-width: 5em;" class="">任务编号</td>
                            <td colspan="2">
                                <input id="appEnfor_detail_caseNo" readonly type="text" />
                            </td>
                        </tr>

                        <tr>
                            <td style="min-width: 5em;" class="">交办时间</td>
                            <td colspan="2">
                                <input readonly id="appEnfor_detail_reportTime" type="tel" />
                            </td>
                        </tr>

                        <tr>
                            <td style="min-width: 5em;" class="">交办部门</td>
                            <td colspan="2">
                                <input readonly id="appEnfor_detail_reportPerson" type="text" />
                            </td>
                        </tr>

                        <tr>
                            <td style="padding-top:0.5em;">问题描述</td>
                            <td colspan="2">
                                <input class="small gray_dark_font" style="color:#999999;" readonly="true" />
                            </td>
                        </tr>
                        <tr>
                            <td colspan="3" style="padding:1em;text-align: left;color: #333333;" id="appEnfor_detail_problem"></td>
                        </tr>
                        <tr id="applicationdown_tr">
                            <td colspan="3" style="padding:1em;text-align: left;color: #333333;"><span id="applicationdown" download="附件.xls">附件下载</span></td>
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
    mounted() {
        window.searchPage = 2;
        initdeptHandleDetail();
        /* if (!window.CaseTaskDetailPage) {
            cleanCaseTaskDetail();
            app_workOrderDetail(window.caseRow_id);
            window.CaseTaskDetailPage = true;
        } */
        /*返回*/
        $("#appEnfor_detail_page .back-button").listen("quickClick", function (e) {
            //window.history.back();
            if (window.currjump == "welcome") {
                app.$router.push("../load/welcome.html");
            } else {
                app.$router.push("../applicationEnforcement/applicationEnforcementList.html");
            }
            /* if ("welcome" == window.welcomeCheckJumpType) {
                    app.$router.push("../load/welcome.html");
                } else {
                    app.$router.push("../applicationEnforcement/applicationEnforcementList.html");
                } */

        });

        /*办理*/
        $("#appEnfor_detail_page .footer_button_div").listen("quickClick", function (e) {
            console.log("数据：" + JSON.stringify(window.operationListArrayInfo));
            if (!isNull(window.operationListArrayInfo) && window.operationListArrayInfo.length > 0) {
                showChoiceOne();
                setTimeout(function () {
                    //点击事件
                    var data = $(e.currentTarget).data("data");
                    console.log("type:" + JSON.stringify(data));
                    window.caseOneTaskAction = data;
                    // app.$router.push("../casetask/caseTaskEdit.html");
                    for (var i = 0; i < window.operationListArrayInfo.length; i++) {
                        var info = '<p class="alert_edit_title gray_line_bottom">' + window.operationListArrayInfo[i].opName + '</p>';
                        var $row = createListRow(info).appendTo("#choice_one_html");
                        $row.data('data', window.operationListArrayInfo[i]);
                        $row.listen("quickClick", function (e) {
                            //点击事件
                            var data = $(e.currentTarget).data("data");
                            console.log("type:" + JSON.stringify(data));
                            window.caseOneTaskAction = data;
                            app.$router.push("../casetask/caseTaskEdit.html");
                        });
                    }
                }, 500);

            }
            //   app.$router.push("../visit/case_task_detail.html");
        });

        function initdeptHandleDetail() {
            $("#appEnfor_detail_wrapper")[0].style.height = window.localInnerHeight - $("#appEnfor_detail_page .page_header").height() - $("#appEnfor_detail_page .page_footer").height() + "px";
            $("#appEnfor_detail_page .page_content").css("height", window.localInnerHeight - $("#appEnfor_detail_page .page_header").height() - $("#appEnfor_detail_page .page_footer").height() + "px");

            initScroll({
                "wrapper": "appEnfor_detail_wrapper",
                "dir": "y",
                "bounce": false,
                "scrollBar": true
            });
            scrollToTop("appEnfor_detail_wrapper");
            $("#appEnfor_detail_page table tr td").addClass("gray_line_bottom");
            window.upload_imgscroll = "appEnfor_detail_img_scroll";
            window.upload_imgwrapper = "appEnfor_detail_img_wrapper";
            window.upload_addimg = "appEnfor_detail_img";
            appEnforDepartmentInfo();
        }

        function cleanCaseTaskDetail() {
            $("#appEnfor_detail_page table tr td input").val("");
            $("#appEnfor_detail_page table tr td textarea").val("");
            $("#appEnfor_detail_page #appEnfor_detail_img").empty();
            window.caseTaskOneTaskId = "";
            $(".max-dialog").remove();
            $("#appEnfor_detail_img_scroll").css("transform", "none");
            $("#appEnfor_detail_img_wrapper .scroll-bar-x").css("transform", "none");
            window.operationListArrayInfo = [];
        }

        function appEnforDepartmentInfo() {

            //接口入参
            var obj = "";
            obj += toJson("row_id", window.row_id) + "&";
            obj += toJson("flag", "ZF");
            //集中整治详情接口
            doPost("caseDepartmentInfo.action", obj, function (data) {

                if (data.code == "0") {
                    var array = data.datas;
                    if (array.pics) {
                        $("#appEnfor_detail_page .commodityAddImgs").show();
                        if (array.pics.length > 0) {
                            var info = array.pics;
                            for (var j = 0; j < info.length; j++) {
                                if (!isNull(info[j])) {
                                    var commodity_add_img_info = ' <div class="imgdiv">';
                                    commodity_add_img_info += '<img class="goodsimgone" src="' + window.imgUrl + info[j] + '">';
                                    commodity_add_img_info += '</div>';
                                    var $commodity_add_img_info = createListRow(commodity_add_img_info).appendTo("#" + window.upload_addimg);
                                    $commodity_add_img_info.listen("quickClick", function (e) {
                                        var data = $(e.currentTarget).data("data");
                                        window.lookType = "opinioned";
                                        app.$router.push("../casetask/photoLook.html");
                                    });
                                }
                            }
                            window.opinionedImgArray = info;
                            imgWidth(window.upload_imgscroll, window.upload_imgwrapper, array.pics.length, window.upload_addimg);
                        } else {
                            $("#appEnfor_detail_page .commodityAddImgs").hide();
                            window.opinionedImgArray = array.pics;
                        }
                        //$("#good_num").val(window.picture_array.length + "/5");
                    } else {
                        $("#appEnfor_detail_page .commodityAddImgs").hide();
                    }
                    $("#appEnfor_detail_caseNo").val(data.datas.linkageno);
                    $("#appEnfor_detail_reportTime").val(data.datas.createtime);
                    $("#appEnfor_detail_reportPerson").val(data.datas.dutyperson);
                    $("#appEnfor_detail_problem").text(data.datas.description);
                    window.localStorage.filepath = window.imgUrl + data.datas.filepath;
                    if (data.datas.filepath != "") {
                        $("#applicationdown_tr").show();

                    } else {
                        $("#applicationdown_tr").hide();
                    }
                }
            }, "");
        }
        //附件下载
        $("#applicationdown").bind("click", function (e) {
            var url = window.localStorage.filepath;
            var name = $(e.currentTarget).text();
            console.log(url)
            console.log(name)
            isFileExist(name, window.cacheDirectory, function (result) {
                /*     if(result){
                        jsict.appManager.openLocalFile(function(){}, function(){}, window.cacheDirectoryPath+"/"+name);
                    }else{ */
                showConfirm("<p style='padding:1em;'>确认下载文档吗？</p>", null, null, function () {
                    showLoading("正在下载....");

                    var fileTransfer = new FileTransfer();
                    fileTransfer.download(
                        encodeURI(url),
                        window.cacheDirectoryPath + "/" + name,
                        function (entry) {
                            hideLoading();
                            toast("下载成功！");

                            jsict.appManager.openLocalFile(function () {}, function () {}, window.cacheDirectoryPath + "/" + name);
                        },
                        function (error) {
                            hideLoading();
                            toast("下载失败，请重试");
                        }
                    );
                })
                //   }
            });

        })
    }

}
</script>

<style lang="less" scoped>
#appEnfor_detail_page .commodityAddImgs {
    overflow: hidden;
    background: #f3f3f3;
}

#appEnfor_detail_page .imgdiv {
    padding: 0.7em;
    padding-top: 0em;
    position: relative;
    width: 6em;
    float: left;
}

#appEnfor_detail_page .goodsimgone {
    float: left;
    height: 6em;
    width: 6em;
    margin-top: 1em;
}

#appEnfor_detail_page #case_detail_img {
    height: 7.5em;
    overflow: hidden;
    display: inline-block;
}

/*img end*/
#appEnfor_detail_page .jszx-bar-item-2>div {
    width: 50%;
}

#appEnfor_detail_page .jszx-bar-item-2 p,
.jszx-bar-item-2 p {
    height: 2.8em;
    line-height: 2.8em;
}

#appEnfor_detail_page .right_btn {
    width: 4.5em;
    right: 0em;
}
</style>
