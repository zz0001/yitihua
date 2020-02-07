<template>
    <div data-role="page" id="dept_handle_detail_page">
        <tk-header>
            任务详情
        </tk-header>

        <div class="page_content">
            <div id="dept_handle_detail_wrapper" class="jszx-wrapper">
                <div class="jszx-scroller">
                    <div id="dept_handle_html" class="html_margin white_background">
                        <table class="inp_table" cellpadding="0" cellspacing="0">
                            <td colspan="3" class="commodityAddImgs">
                                <div id="dept_handle_detail_img_wrapper" class="jszx-wrapper">
                                    <div class="jszx-scroller" id="dept_handle_detail_img_scroll">
                                        <div id="dept_handle_detail_img">
                                        </div>
                                    </div>
                                </div>
                            </td>
                            <tr>
                                <td style="min-width: 5em;" class="">任务编号</td>
                                <td colspan="2">
                                    <input id="dept_task_detail_caseNo" readonly type="text"/>
                                </td>
                            </tr>


                            <tr>
                                <td style="min-width: 5em;" class="">交办时间</td>
                                <td colspan="2">
                                    <input readonly id="dept_task_detail_reportTime" type="tel"/>
                                </td>
                            </tr>

                            <tr>
                                <td style="min-width: 5em;" class="">交办部门</td>
                                <td colspan="2">
                                    <input readonly id="dept_task_detail_reportPerson" type="text"/>
                                </td>
                            </tr>


                            <tr>
                                <td style="padding-top:0.5em;">问题描述</td>
                                <td colspan="2">
                                    <input class="small gray_dark_font" style="color:#999999;" readonly="true"/>
                                </td>
                            </tr>
                            <tr>
                                <td colspan="3" style="padding:1em;text-align: left;color: #333333;"
                                    id="dept_task_detail_problem"></td>
                            </tr>
                            <tr id="deptfile_tr">
                                <td colspan="3" style="padding:1em;text-align: left;color: #333333;"><span
                                        id="deptfilePath123" download="排名.xls">附件下载</span></td>
                            </tr>
                        </table>
                    </div>
                </div>
            </div>
        </div>
        <div class="page_footer">
            <div class="footer_button_div">
                <div class="alert_bottom_three orange_background">办理</div>
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

            $("input").addClass("small gray_dark_font ui-input-text ui-body-c ui-corner-all ui-shadow-inset");

            initdeptHandleDetail();
            cleanCaseTaskDetail();

            /*返回*/
            $("#dept_handle_detail_page .back-button").listen("quickClick", function (e) {
                //window.history.back();
                if (window.currjump == "welcome") {
                    that.$router.push({path: '/welcome'});
                } else {
                    that.$router.push({path: '/deptHandleList'});

                }

            });

            /*办理*/
            $("#dept_handle_detail_page .footer_button_div").listen("quickClick", function (e) {
                console.log("数据：" + JSON.stringify(window.operationListArrayInfo));
                if (!isNull(window.operationListArrayInfo) && window.operationListArrayInfo.length > 0) {
                    showChoiceOne();
                    setTimeout(function () {
                        //点击事件
                        var data = $(e.currentTarget).data("data");
                        console.log("type:" + JSON.stringify(data));
                        window.caseOneTaskAction = data;

                        for (var i = 0; i < window.operationListArrayInfo.length; i++) {
                            var info = '<p class="alert_edit_title gray_line_bottom">' + window.operationListArrayInfo[i].opName + '</p>';
                            var $row = createListRow(info).appendTo("#choice_one_html");
                            $row.data('data', window.operationListArrayInfo[i]);
                            $row.listen("quickClick", function (e) {
                                //点击事件
                                var data = $(e.currentTarget).data("data");
                                console.log("type:" + JSON.stringify(data));
                                window.caseOneTaskAction = data;
                                window.localStorage.orgin = "部门协办";
                                window.localStorage.currpage = "部门协办";
                                waitJumpPage("../casetask/caseTaskEdit.html");

                            });
                        }
                    }, 500);

                }

            });

            function initdeptHandleDetail() {
                $("#dept_handle_detail_wrapper")[0].style.height = window.localInnerHeight - $("#dept_handle_detail_page .page_header").height() - $("#dept_handle_detail_page .page_footer").height() + "px";
                $("#dept_handle_detail_page .page_content").css("height", window.localInnerHeight - $("#dept_handle_detail_page .page_header").height() - $("#dept_handle_detail_page .page_footer").height() + "px");

                initScroll({
                    "wrapper": "dept_handle_detail_wrapper",
                    "dir": "y",
                    "bounce": false,
                    "scrollBar": true
                });
                scrollToTop("dept_handle_detail_wrapper");
                $("#dept_handle_detail_page table tr td").addClass("gray_line_bottom");
                window.upload_imgscroll = "dept_handle_detail_img_scroll";
                window.upload_imgwrapper = "dept_handle_detail_img_wrapper";
                window.upload_addimg = "dept_handle_detail_img";
                caseDepartmentInfo();
            }

            function cleanCaseTaskDetail() {
                $("#dept_handle_detail_page table tr td input").val("");
                $("#dept_handle_detail_page table tr td textarea").val("");
                $("#dept_handle_detail_page #dept_handle_detail_img").empty();
                window.caseTaskOneTaskId = "";
                $(".max-dialog").remove();
                $("#dept_handle_detail_img_scroll").css("transform", "none");
                $("#dept_handle_detail_img_wrapper .scroll-bar-x").css("transform", "none");
                window.operationListArrayInfo = [];
            }

            function caseDepartmentInfo() {


                //接口入参
                var obj = "";
                obj += toJson("loginId", window.localStorage.loginId) + "&";
                obj += toJson("row_id", window.row_id) + "&";
                obj += toJson("flag", "XB");
                //集中整治详情接口
                doPost("caseDepartmentInfo.action", obj, function (data) {
                    ;
                    if (data.code == "0") {
                        window.caseRow_id = window.row_id;
                        window.caseTaskOneTaskId = data.datas.taskId;
                        var array = data.datas;
                        if (array.pics) {
                            $("#dept_handle_detail_page .commodityAddImgs").show();
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
                                            that.$router.push({path: '/photoLook'});
                                        });
                                    }
                                }
                                window.opinionedImgArray = info;
                                imgWidth(window.upload_imgscroll, window.upload_imgwrapper, array.pics.length, window.upload_addimg);
                            } else {
                                $("#dept_handle_detail_page .commodityAddImgs").hide();
                                window.opinionedImgArray = array.pics;
                            }
                            //$("#good_num").val(window.picture_array.length + "/5");
                        } else {
                            $("#dept_handle_detail_page .commodityAddImgs").hide();
                        }
                        $("#dept_task_detail_caseNo").val(data.datas.linkageno);
                        $("#dept_task_detail_reportTime").val(data.datas.createtime);
                        $("#dept_task_detail_reportPerson").val(data.datas.dutyperson);
                        $("#dept_task_detail_problem").text(data.datas.description);
                        window.localStorage.file = window.imgUrl + data.datas.file;
                        window.fileType = data.datas.fileType;
                        if (data.datas.file) {
                            $("#deptfile_tr").show();

                        } else {
                            $("#deptfile_tr").hide();
                        }
                        if (!isNull(array.operationList) && array.operationList.length > 0) {
                            window.operationListArrayInfo = [];
                            for (var i = 0; i < array.operationList.length; i++) {
                                var info = {
                                    opName: array.operationList[i].opName,
                                    opValue: array.operationList[i].opValue,
                                    destId: array.operationList[i].destId
                                };
                                window.operationListArrayInfo.push(info);
                            }
                            $("#dept_handle_detail_page .page_footer").show();

                        } else {
                            $("#dept_handle_detail_page .page_footer").hide();

                        }
                    }
                }, "");
            }

            //附件下载
            $("#deptfilePath123").bind("click", function (e) {
                var url = window.localStorage.file;
                var name = $(e.currentTarget).text() + "." + window.fileType;
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
                    //   }
                });


            })
        }
    }
</script>

<style scoped>

    #dept_handle_detail_page .commodityAddImgs {
        overflow: hidden;
        background: #f3f3f3;
    }

    #dept_handle_detail_page .imgdiv {
        padding: 0.7em;
        padding-top: 0em;
        position: relative;
        width: 6em;
        float: left;
    }

    #dept_handle_detail_page .goodsimgone {
        float: left;
        height: 6em;
        width: 6em;
        margin-top: 1em;
    }

    #dept_handle_detail_page #case_detail_img {
        height: 7.5em;
        overflow: hidden;
        display: inline-block;
    }

    /*img end*/
    #dept_handle_detail_page .jszx-bar-item-2 > div {
        width: 50%;
    }

    #dept_handle_detail_page .jszx-bar-item-2 p,
    .jszx-bar-item-2 p {
        height: 2.8em;
        line-height: 2.8em;
    }

    #dept_handle_detail_page .right_btn {
        width: 4.5em;
        right: 0em;
    }

</style>
