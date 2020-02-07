<template>
    <div data-role="page" id="ycj_list_page">
        <tk-header>
            已采集列表
            <span
                    @click='filtrate'
                    slot="right">筛选</span>
        </tk-header>
        <div class="page_content" style="">
            <div id="ycj_wrapper" class="jszx-wrapper">
                <div class="jszx-scroller">
                    <div id="ycj_html" class="html_margin">
                    </div>
                </div>
            </div>
        </div>
        <div id="ycj_select_content"
             style="box-shadow: none; width: 100%; display: -webkit-box; height: 683px;display:none;position: absolute;top: 52px;">
            <div class="max-dialog-masker"></div>
            <div class="max-dialog-frame moretitle_frame screen_search_content_div"
                 style="position: absolute; background: rgb(255, 255, 255); height: 377.6px;">
                <div style="height: 324.6px;">
                    <div style="width: 100%; height: 324.6px;" class="jszx-wrapper ">
                        <div class="jszx-scroller">
                            <div class="alert_edit" style="">


                                <div style="text-align: center;line-height: 48px;">是否异常:
                                    <div id="yichang_list" style="display:inline-block"></div>
                                </div>

                            </div>
                        </div>
                        <div class="scroll-bar-y" style="height: 0px;"></div>
                    </div>

                    <div class="screeb_footer"
                         style="position:absolute;bottom:0em;border-top:1px solid #f3f3f3;height:4em;background: #FFFFFF;width: 100%;overflow: hidden;">
                        <div class="footer_button_div">
                            <div id="ycj_empty" style="width:35%;float:left;"
                                 class="alert_bottom_three gray_background">重置
                            </div>
                            <div id="ycj_btn" style="width:35%;float:left;"
                                 class="alert_bottom_three orange_background">确定
                            </div>
                        </div>
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

            ycjListInit();

            /*返回*/
            $("#ycj_list_page .left_img").listen("quickClick", function (e) {
                if ($("#ycj_select_content").is(':visible') == true) {

                    $("#ycj_select_content").hide();
                } else {
                    if (window.originType == "2") {
                        that.$router.push({path: '/leaderEdit'});
                    } else if (window.originType == "3") {
                        that.$router.push({path: '/sspEdit'});
                    } else if (window.originType == "4") {
                        that.$router.push({path: '/hsxcy'});
                    }

                }
            });

            //banjie
            $("#ycj_btn").listen("quickClick", function (e) {
                $("#ycj_select_content").hide();
                scrollToTop("ycj_wrapper");
                window.searchPage = 2;
                window.ycjselectFlag = "0";
                ycj_findCaseListByUserId(false, 1);
            });
            $("#ycj_empty").listen("quickClick", function (e) {

                $("#yichang_list option:first").prop("selected", 'selected');

            });

            //初始化
            function initYcjWelcome() {
                $("#ycj_wrapper")[0].style.height = window.localInnerHeight - $("#ycj_list_page .page_header").height() + "px";
                initScroll({
                    "wrapper": "ycj_wrapper",
                    "dir": "y",
                    "bounce": false,
                    "scrollBar": true,
                    "pullUpLoading": function (reset) { //上拉
                        if (window.checkNum > window.arrayDataLength) {
                            reset(true);
                            toast("没有更多的数据了");
                        } else {
                            ycj_findCaseListByUserId(reset, window.searchPage++)
                        }
                    },
                    "pullDownLoading": function (reset) { //下拉
                        window.checkNum = 1;
                        window.searchPage = 2;
                        ycj_findCaseListByUserId(reset, 1)
                    }
                });
                scrollToTop("ycj_wrapper");
                window.checkNum = 1;
                window.flag1 = false;
                window.ycjselectFlag = "1";
                ycj_findCaseListByUserId(false, 1);
                select_yichang();
            }


            //清空缓存
            function cleanycjList() {
                window.searchPage = 2;
                window.noticeTypeName = "";
                window.caseStartTime = "";
                window.caseEndTime = "";
                $("#ycj_list_page #case_welcome_inp").val("");
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
                if (window.originType != "4") {
                    $("#ycj_list_page .page_header_title").text("已上报");
                }
            }

            //待办初始化
            function ycjListInit() {
                cleanycjList();
                //未办
                $("#ycj_list_page .casewelcome_title div").removeClass("tab_oranger_font");
                $("#ycj_list_page .casewelcome_wait").addClass("tab_oranger_font");
                $("#ycj_list_page .casewelcome_search").hide();
                // $("#ycj_list_page .right_img").hide();
//            $("#ycj_list_page #case_welcome_rednum").hide();
                window.thisCaseQueryType = "1";
                initYcjWelcome();
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
            function ycj_findCaseListByUserId(reset, pageNum) {
                if (!reset) {
                    showLoading("", "", "", "/staitc/resources/images/loading.gif");
                }
                if (parseInt(pageNum) < 2) {
                    $("#ycj_html").empty();
                }
                var ycselect = $("#yichang_list option:selected").val();
                if (!window.yc_select && ycselect == "") {
                    window.yc_select = "";
                } else {
                    if (window.ycjselectFlag == "0") {
                        window.yc_select = ycselect;
                    } else if (window.ycjselectFlag == "1") {
                        if (ycselect) {
                            window.yc_select = ycselect;
                        } else {
                            window.yc_select = "1";
                        }
                    }

                }
                ;
                var obj = "";
                obj += toJson("userId", window.localStorage.userId) + "&";
                obj += toJson("origin", window.originType) + "&";
                //     obj += toJson("startTime", startTime) + "&";
                //    obj += toJson("eventComponent", eventComponent) + "&";
                //     obj += toJson("bigClass", bigClass) + "&";
                //     obj += toJson("smallClass", smallClass) + "&";
                obj += toJson("pageSize", "20") + "&";
                obj += toJson("pageNum", pageNum) + "&";
                obj += toJson("status", window.yc_select);
                doPost("findCaseListByUserId.action", obj, function (data) {

                    if (!reset) {
                        hideLoading();
                    }
                    if (data.code == 0) {
                        if (reset) {
                            reset(true);
                        }
                        var array = data.datas;
                        getDataLength(data.total, 6);
                        if (data.datas.length < 20) {
                            console.log('进来了')
                            window.checkNum = 2;
                        }
                        console.log("长度：" + data.page.total);
                        if (!isNull(array) && array.length > 0) {
                            for (var i = 0; i < array.length; i++) {
                                var bigtype = "";
                                if (!isNull(array[i].eventComponent)) {
                                    if (isNull(bigtype)) {
                                        bigtype = array[i].eventComponent;
                                    } else {
                                        bigtype = bigtype + "/" + array[i].eventComponent;
                                    }
                                }
                                if (!isNull(array[i].bigClass)) {
                                    if (isNull(bigtype)) {
                                        bigtype = array[i].bigClass;
                                    } else {
                                        bigtype = bigtype + "/" + array[i].bigClass;
                                    }
                                }
                                if (!isNull(array[i].smallClass)) {
                                    if (isNull(bigtype)) {
                                        bigtype = array[i].smallClass;
                                    } else {
                                        bigtype = bigtype + "/" + array[i].smallClass;
                                    }
                                }
                                var html = '';
                                html += '<table cellspacing="0" class="list_second_table gray_line_bottom" cellpadding="0">';
                                html += '<tr><td colspan="2" style="text-align: left;">' + ((data.page.pageNum - 1) * 20 + (i + 1)) + '、工单编号 ' + array[i].caseno + '<span style="padding-left:0.5em;" class="small red_font">' + array[i].origin + '</span></td></tr>'
                                html += '   <tr>';


                                html += '   <tr>';
                                /*  html += '       <td class="">' + array[i].caseno + '</td>'; */
                                html += '       <td colspan="2" class="">' + array[i].reportTime + '</td>';
                                html += '   </tr>';
                                html += '   <tr>';
                                if (array[i].location) {
                                    html += '       <td colspan="2" class="small gray_font">' + array[i].location + '</td>';
                                } else {
                                    html += '       <td colspan="2" class="small gray_font"></td>';
                                }

                                html += '   </tr>';
                                html += '</table>';
                                var $html = createListRow(html).appendTo("#ycj_html");
                                $html.data('data', array[i]);
                                $html.listen("quickClick", function (e) {
                                    var data = $(e.currentTarget).data("data");
                                    window.caseRow_id = data.row_id;
                                    //window.caseRow_id = data.caseno;
                                    window.currstatus = "ycj";
                                    window.welcomeCheckJumpType = "";
                                    that.$router.push({path: '/ycjDetail'});

                                });
                            }
                        } else {
                            if (parseInt(pageNum) < 2) {
                                noListShow("", "", "", $("#ycj_html"), "");
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

            function select_yichang() {

                var option = '';
                option += '<select style="display: inline-block;">';
                option += '<option selected="selected" value="">默认(全部)</option>';
                option += '<option value="0">无异常</option>'
                option += '<option value="1">有异常</option>'
                option += '</select>'
                $("#yichang_list").html(option);


            }
        },
        methods: {
            filtrate() {
                $("#ycj_select_content").show();
            }

        }
    }
</script>

<style scoped>
    #ycj_list_page .page_header_title .jszx-bar-icon-up {
        background: #fafafa;
    }

    #ycj_list_page .list_table tr:first-child td {
        padding: 1em 0em 0em 1.3em;
    }

    #ycj_list_page .list_table tr td {
        padding: 0.7em 0em 1em 1.3em;
    }

    #ycj_list_page .home_list_tr_first_td {
        padding: 0.7em;
        padding-left: 0em;
    }

    /*#ycj_list_page .page_header .right_img {*/
    /*right: 1.5em;*/
    /*}*/

    #ycj_list_page .red_num {
        /*margin-left: 3.3em;*/
        float: right;
        top: 1.2em;
        right: 2em;
    }

    #ycj_list_page .search_div {
        padding: 0.5em 1em 0em 1em;
        margin: 0em;
        background: #edeef1;
    }

    #ycj_list_page #case_welcome_inp {
        width: 65%;
        float: left;
        line-height: 2.5em;
        height: 2.5em;
    }

    #ycj_list_page #refresh_service {
        width: 2em;
        height: 2em;
        padding: 0.4em 0.2em 0em 0.8em;
        float: right;
    }

    #ycj_list_page #service_search {
        width: 4em;
        text-align: center;
        color: #ffffff;
        margin-top: 0.7em;
        float: right;
        line-height: 2.2em;
        border-radius: 0.3em;
    }

    #ycj_list_page .search_div {
        height: 3.2em;
    }

    #ycj_list_page .home_list_tr_first_td span {
        margin-left: 0.5em;
    }


    #ycj_list_page .small_img {
        height: 1.2em;
    }

    #ycj_list_page .jszx-bar-item-2 > div {
        width: 50%;
    }

    #ycj_list_page .tab_oranger_font p,
    .tab_bloack_font p, #ycj_list_page .jszx-bar-item-2 div p {
        height: 2.8em;
        line-height: 2.8em;
    }

    /*筛选小图标*/
    #ycj_list_page .jszx-bar-item-2 div p img {
        width: 0.6em;
        height: 0.5em;
        padding-left: 0.5em;
    }

    #ycj_list_page .right_btn {
        width: 4.5em;
        right: 0em;
        height: 2.5em;
    }

    #ycj_list_page .jszx-bar-item-2 > div {
        width: 50%;
    }

    #ycj_list_page .jszx-bar-item-2 p,
    .jszx-bar-item-2 p {
        height: 2.8em;
        line-height: 2.8em;
    }

</style>
