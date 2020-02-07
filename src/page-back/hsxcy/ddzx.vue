<template>
    <div data-role="page" id="ddzx_list_page">

        <tk-header>
            调度列表
        </tk-header>
        <div class="page_content" style="">
            <div id="ddzx_wrapper" class="jszx-wrapper">
                <div class="jszx-scroller">
                    <div id="ddzx_html" class="html_margin">
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

            ddzxListInit();


            /*返回*/
            $("#ddzx_list_page .left_img").listen("quickClick", function (e) {
                that.$router.back();
            });
            $("#ddzx_list_page").on("click", ".lookimg", function (e) {

                var url = $(e.currentTarget).attr("url");
                var urlimg = window.imgUrl + url;
                cordova.plugins.StartActivity.startActivity(urlimg, function (data) {
                }, function (error) {
                    console.log("startActivity error:" + error);
                });

            });


            //初始化
            function initddzxWelcome() {
                $("#ddzx_wrapper")[0].style.height = window.localInnerHeight - $("#ddzx_list_page .page_header").height() + "px";
                initScroll({
                    "wrapper": "ddzx_wrapper",
                    "dir": "y",
                    "bounce": false,
                    "scrollBar": true,
                    "pullUpLoading": function (reset) { //上拉
                        if (window.checkNum > window.arrayDataLength) {
                            reset(true);
                            toast("没有更多的数据了");
                        } else {
                            queryMessage(reset, window.searchPage++)
                        }
                    },
                    "pullDownLoading": function (reset) { //下拉
                        window.checkNum = 1;
                        window.searchPage = 2;
                        queryMessage(reset, 1)
                    }
                });
                scrollToTop("ddzx_wrapper");
                window.checkNum = 1;
                window.flag1 = false;
                queryMessage(false, 1);
            }


            //清空缓存
            function cleanddzxList() {
                window.searchPage = 2;
                window.noticeTypeName = "";
                window.caseStartTime = "";
                window.caseEndTime = "";
                $("#ddzx_list_page #case_welcome_inp").val("");
                window.choiceThingsParts = "";
                window.choiceBigType = "";
                window.choiceSmallType = "";
                //职能事项
                window.choiceTemporaryThingsParts = "";
                //临时大类
                window.choiceTemporaryBigType = "";
                //临时小类
                window.choiceTemporarySmallType = "";
                //setRestTitle();
            }

            //待办初始化
            function ddzxListInit() {
                cleanddzxList();
                //未办
                $("#ddzx_list_page .casewelcome_title div").removeClass("tab_oranger_font");
                $("#ddzx_list_page .casewelcome_wait").addClass("tab_oranger_font");
                $("#ddzx_list_page .casewelcome_search").hide();
                $("#ddzx_list_page .right_img").hide();
//            $("#ddzx_list_page #case_welcome_rednum").hide();
                window.thisCaseQueryType = "1";
                initddzxWelcome();
            }


            /**
             *工单列表
             * @param queryType 查询类型  1：待办 2：已办
             * @param startTime 开始时间
             * @param endTime 结束时间
             * @param eventComponent 事件部门
             * @param bigClass 大类
             * @param smallClass 小类
             */
            function queryMessage(reset, pageNum) {
                if (!reset) {
                    showLoading("", "", "", "/staitc/resources/images/loading.gif");
                }
                if (parseInt(pageNum) < 2) {
                    $("#ddzx_html").empty();
                }
                var obj = "";
                obj += toJson("userId", window.localStorage.userId) + "&";

                obj += toJson("pageSize", "20") + "&";
                obj += toJson("pageNum", pageNum) + "&";
                // obj += toJson("endTime", endTime);
                doPost("queryMessage.action", obj, function (data) {

                    if (!reset) {
                        hideLoading();
                    }
                    if (data.code == 0) {
                        if (reset) {
                            reset(true);
                        }
                        var array = data.data;
                        getDataLength(data.total, 6);
                        if (data.data.length < 20) {
                            console.log('进来了')
                            window.checkNum = 2;
                        }

                        if (!isNull(array) && array.length > 0) {
                            for (var i = 0; i < array.length; i++) {
                                var bigtype = "";

                                var html = '';
                                html += '<table cellspacing="0" rowid=' + array[i].rowId + ' class="list_second_table gray_line_bottom" cellpadding="0">';
                                html += '<tr><td colspan="2" style="text-align: left;">';
                                if (array[i].readStatus == "0") {
                                    html += '<div class="red_round_rank"></div>';
                                }
                                html += ((data.page.pageNum - 1) * 20 + (i + 1)) + '、创建时间 ' + array[i].createTime;
                                if (array[i].path) {
                                    html += '       <div  url="' + array[i].path + '" class="lookimg" style="border:1px solid #4ba4e6;color:#4ba4e6;float:right;height:1em;text-align: center;width:3em;line-height:1em;font-size:0.4em;margin-right:1em;margin-top;-0.2em;background: #f7f7f7;padding: 0.5em 0.1em 0.5em 0.3em;border-radius: 0.5em;">图片</div>';
                                }
                                html += ' </td></tr>  <tr>';
                                /*  html += '       <td class="">' + array[i].caseno + '</td>'; */
                                html += '       <td colspan="2" style="text-align: left;">' + array[i].message + '';

                                html += '  </td> </tr>';
                                html += '   <tr>';
                                if (array[i].location) {
                                    html += '       <td colspan="2" class="small gray_font">' + array[i].location + '</td>';
                                } else {
                                    html += '       <td colspan="2" class="small gray_font"></td>';
                                }

                                html += '   </tr>';
                                html += '</table>';
                                var $html = createListRow(html).appendTo("#ddzx_html");
                                $html.data('data', array[i]);
                                $html.listen("quickClick", function (e) {
                                    var data = $(e.currentTarget).data("data");
                                    window.localStorage.ddRow_id = data.rowId;

                                    that.$router.push({path: '/ddzxDetail'});
                                });
                            }
                        } else {
                            if (parseInt(pageNum) < 2) {
                                noListShow("", "", "", $("#ddzx_html"), "");
                            }
                        }
                    } else {
                        if (reset) {
                            reset(true);
                        }
                        toast(data.message);
                    }
                    window.flag1 = true;
                }, "");
            }
        }
    }
</script>

<style scoped>
    #ddzx_list_page .page_header_title .jszx-bar-icon-up {
        background: #fafafa;
    }

    #ddzx_list_page .list_table tr:first-child td {
        padding: 1em 0em 0em 1.3em;
    }

    #ddzx_list_page .list_table tr td {
        padding: 0.7em 0em 1em 1.3em;
    }

    #ddzx_list_page .home_list_tr_first_td {
        padding: 0.7em;
        padding-left: 0em;
    }

    /*#ddzx_list_page .page_header .right_img {*/
    /*right: 1.5em;*/
    /*}*/

    #ddzx_list_page .red_num {
        /*margin-left: 3.3em;*/
        float: right;
        top: 1.2em;
        right: 2em;
    }

    #ddzx_list_page .search_div {
        padding: 0.5em 1em 0em 1em;
        margin: 0em;
        background: #edeef1;
    }

    #ddzx_list_page #case_welcome_inp {
        width: 65%;
        float: left;
        line-height: 2.5em;
        height: 2.5em;
    }

    #ddzx_list_page #refresh_service {
        width: 2em;
        height: 2em;
        padding: 0.4em 0.2em 0em 0.8em;
        float: right;
    }

    #ddzx_list_page #service_search {
        width: 4em;
        text-align: center;
        color: #ffffff;
        margin-top: 0.7em;
        float: right;
        line-height: 2.2em;
        border-radius: 0.3em;
    }

    #ddzx_list_page .search_div {
        height: 3.2em;
    }

    #ddzx_list_page .home_list_tr_first_td span {
        margin-left: 0.5em;
    }

    /*#ddzx_list_page table tr:first-child td:first-child {*/
    /*padding: 0.7em 0em 0.7em 0.5em;*/
    /*line-height: 1.3em;*/
    /*text-align: left;*/
    /*}*/

    /*#ddzx_list_page table tr:last-child td {*/
    /*padding:0em 0em 0.6em 0.5em;*/
    /*line-height: 1.3em;*/
    /*}*/

    /*#ddzx_list_page table tr:first-child td:last-child {*/
    /*text-align: right;*/
    /*vertical-align: middle;*/
    /*max-width: 6em;*/
    /*min-width: 6em;*/
    /*}*/

    /*#ddzx_list_page table:last-child tr td:last-child {*/
    /*padding: 0.3em 1em 0.7em 0.6em;*/
    /*text-align: left;*/
    /*}*/
    #ddzx_list_page .small_img {
        height: 1.2em;
    }

    #ddzx_list_page .jszx-bar-item-2 > div {
        width: 50%;
    }

    #ddzx_list_page .tab_oranger_font p,
    .tab_bloack_font p, #ddzx_list_page .jszx-bar-item-2 div p {
        height: 2.8em;
        line-height: 2.8em;
    }

    /*筛选小图标*/
    #ddzx_list_page .jszx-bar-item-2 div p img {
        width: 0.6em;
        height: 0.5em;
        padding-left: 0.5em;
    }

    #ddzx_list_page .right_btn {
        width: 4.5em;
        right: 0em;
        height: 2.5em;
    }

    #ddzx_list_page .jszx-bar-item-2 > div {
        width: 50%;
    }

    #ddzx_list_page .jszx-bar-item-2 p,
    .jszx-bar-item-2 p {
        height: 2.8em;
        line-height: 2.8em;
    }

    .red_round_rank {
        width: 0.5em;
        height: 0.5em;
        background: red;
        border-radius: 0.5em;
        position: relative;
        display: inline-block;
        vertical-align: middle;
        /* margin-right: 2.0em;
        margin-top: -3.5em; */
        border: 2px solid #ffffff;
    }
</style>
