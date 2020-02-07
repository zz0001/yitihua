<template>
    <div data-role="page" id="dept_handle_list_page">
        <tk-header>
            工单处理
            <span
                    class="right_img right_btn"
                    @click="filtrate"
                    slot="right">筛选</span>
            <span
                    class="right_add right_btn"
                    @click='add'
                    slot="right">新增</span>
        </tk-header>

        <div class="page_content" style="">
            <div class="jszx-bar-icon-up jszx-bar-item-2 casewelcome_title gray_border">
                <div class="leader_wait">
                    <p>我的交办</p>
                </div>
                <div class="leader_already">
                    <p>待办已办任务</p>
                </div>
            </div>

            <div id="dept_handle_wrapper" class="jszx-wrapper">
                <div class="jszx-scroller">
                    <div id="dept_handle_html" class="html_margin">
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
            window.deptQueryType = 1;

            $("#dept_handle_html").empty();
            window.applicationQueryType = 1;
            window.checkNum = 1;
            window.deptQueryType = 1;
            myDeptInit();
            if (!window.deptWelcomePage) {
                if (1 == parseInt(window.deptQueryType)) {
                    //myDeptInit();
                } else {
                    alreadyDeptInit();
                }
                window.deptWelcomePage = true;
            }

            /*筛选*/
            $("#dept_handle_list_page .right_img").listen("quickClick", function (e) {

            });
            $("#dept_handle_list_page .right_add").listen("quickClick", function (e) {
                if ($(".max-dialog").is(':visible') == true) {
                    $(".max-dialog").remove();
                } else {
                    that.$router.push({path: '/deptHandleEdit'});
                }
            });
            /*我发起的*/
            $("#dept_handle_list_page .leader_wait").listen("quickClick", function (e) {

                $(".max-dialog").remove();
                window.checkNum = 1;
                window.deptQueryType = 1;
                window.applicationQueryType = 1;
                myDeptInit();

            });
            /*我处理的*/
            $("#dept_handle_list_page .leader_already").listen("quickClick", function (e) {

                $(".max-dialog").remove();
                window.checkNum = 1;
                window.deptQueryType = 2;
                window.applicationQueryType = 2;
                alreadyDeptInit();
            });
            /*返回*/
            $("#dept_handle_list_page .left_img").listen("quickClick", function (e) {
                if ($(".max-dialog").is(':visible') == true) {
                    $(".max-dialog").remove();
                } else {
                    that.$router.back();
                }
            });

            //初始化代办已办
            function initDeptWelcome() {
                $("#dept_handle_wrapper")[0].style.height = window.localInnerHeight - $("#dept_handle_list_page .page_header").height() - $("#dept_handle_list_page .jszx-bar-icon-up").height() + "px";
                initScroll({
                    "wrapper": "dept_handle_wrapper",
                    "dir": "y",
                    "bounce": false,
                    "scrollBar": true,
                    "pullUpLoading": function (reset) { //上拉
                        if (window.checkNum > window.arrayDataLength) {
                            reset(true);
                            toast("没有更多的数据了");
                        } else {
                            if (window.applicationQueryType == 1) {
                                app_startUpdeptList(reset, window.localStorage.loginId, "XB", "", window.searchPage++);
                            } else {
                                app_deptList(reset, window.localStorage.loginId, "XB", "", window.searchPage++)
                            }

                        }
                    },
                    "pullDownLoading": function (reset) { //下拉
                        window.checkNum = 1;
                        window.searchPage = 2;
                        if (window.applicationQueryType == 1) {
                            app_startUpdeptList(reset, window.localStorage.loginId, "XB", "", 1);
                        } else {
                            app_deptList(reset, window.localStorage.loginId, "XB", "", 1)
                        }

                    }
                });
                scrollToTop("dept_handle_wrapper");
                window.checkNum = 1;

                app_deptList(false, window.localStorage.loginId, "XB", "", 1)
            }

            //初始化2发起
            function initDeptWelcome_faqi() {
                $("#dept_handle_wrapper")[0].style.height = window.localInnerHeight - $("#dept_handle_list_page .page_header").height() - $("#dept_handle_list_page .jszx-bar-icon-up").height() + "px";
                initScroll({
                    "wrapper": "dept_handle_wrapper",
                    "dir": "y",
                    "bounce": false,
                    "scrollBar": true,
                    "pullUpLoading": function (reset) { //上拉
                        if (window.checkNum > window.arrayDataLength) {
                            reset(true);
                            toast("没有更多的数据了");
                        } else {
                            if (window.applicationQueryType == 1) {
                                app_startUpdeptList(reset, window.localStorage.loginId, "XB", "", window.searchPage++);
                            } else {
                                app_deptList(reset, window.localStorage.loginId, "XB", "", window.searchPage++)
                            }
                        }
                    },
                    "pullDownLoading": function (reset) { //下拉
                        window.checkNum = 1;
                        window.searchPage = 2;

                        if (window.applicationQueryType == 1) {
                            app_startUpdeptList(reset, window.localStorage.loginId, "XB", "", 1);
                        } else {
                            app_deptList(reset, window.localStorage.loginId, "XB", "", 1)
                        }
                    }
                });
                scrollToTop("dept_handle_wrapper");
                window.checkNum = 1;
                //window.flag1 = false;
                app_startUpdeptList(false, window.localStorage.loginId, "XB", "", 1);
                //app_deptList(false, window.localStorage.loginId, "xb", "", 1);
            }

            //分类
            function depttypeByClass() {
                showSmallTitle(".case_list_bigclass", "4", function () {
                    //重置

                }, function () {
                    //确定
                    window.checkNum = 1;
                    var val = $("#deptHandle_type option:selected").val();
                    app_deptList(false, window.localStorage.loginId, "XB", val, 1);
                });
                var html = ' <table class="inp_table" cellpadding="0" cellspacing="0">';
                html += '       <tr style="height:10em">';
                html += '           <td style="min-width: 3em;padding:1em;font-size: 20px;" class="gray_line_bottom">请选择类型</td>';
                html += '           <td colspan="2" class="gray_line_bottom" style="text-align: center;">';
                html += '                <select id="deptHandle_type" style="display: inline-block;width: 72%;"><option value="1">待办</option><option value="2">已办</option></select>';
                html += '            </td>';

                html += '       </tr>';
                html += '   </table>';
                var $row = createListRow(html).appendTo($("#screen_content1"));
            }

            //时间段筛选
            function caseSearchByTime() {
                titleScreenSearchHelp("price", function () {
//                    cleanScrollSearchList();
                }, function () {
                    showSmallTitle(".case_welcome_time", 1, function () {
                        //重置
                        $("#screen_content1 div").removeClass("red_font");
                        window.caseStartTime = "";
                        window.caseEndTime = "";
                        $("#dept_start_timer").val("");
                        $("#dept_over_timer").val("");
                    }, function () {
                        //确定
                        window.searchPage = 2;
                        window.caseStartTime = $("#dept_start_timer").val();
                        window.caseEndTime = $("#dept_over_timer").val();
                        app_deptList(false, window.localStorage.loginId, "XB", "", 1);
                    });
                    var html = ' <table class="inp_table" cellpadding="0" cellspacing="0">';
                    html += '       <tr>';
                    html += '           <td style="min-width: 5em;padding:1em;" class="gray_line_bottom">开始时间</td>';
                    html += '           <td class="gray_line_bottom" style="text-align: center;">';
                    html += '               <input id="dept_start_timer" style="text-align: center;" placeholder="请选择开始时间" readonly  type="text"/>';
                    html += '            </td>';
                    html += '           <td class="gray_line_bottom" style="width:2em;min-width:2em;max-width:2em;padding:0em 1em 0em 0em;">';
                    html += '               <img class="div_input_value_img" src="/staitc/resources/images/icon_gray_solid_down.png">';
                    html += '           </td>';
                    html += '       </tr>';
                    html += '       <tr>';
                    html += '           <td style="min-width: 5em;padding: 1em;" class="gray_line_bottom">结束时间</td>';
                    html += '           <td class="gray_line_bottom" style="text-align: center;">';
                    html += '               <input id="dept_over_timer" style="text-align: center" readonly placeholder="请选择结束时间" style="padding:0em 1.5em 0em 0em;"  type="text"/>';
                    html += '           </td>';
                    html += '           <td class="gray_line_bottom" style="width:2em;min-width:2em;max-width:2em;padding:0em 1em 0em 0em;text-align: right;">';
                    html += '               <img class="div_input_value_img" src="/staitc/resources/images/icon_gray_solid_down.png">';
                    html += '           </td>';
                    html += '       </tr>';
                    html += '   </table>';
                    var $row = createListRow(html).appendTo($("#screen_content1"));
                    chooseDate("dept_start_timer", "date");
                    chooseDate("dept_over_timer", "date");
                    $(".alert_edit div").css("margin", "0em");
                    $(".timer_btn").css("margin-top", "2em");
                    $(".timer_btn").css("margin-left", "13%");
                    if (!isNull(window.caseStartTime)) {
                        $("#dept_start_timer").val(window.caseStartTime);
                    }
                    if (!isNull(window.caseEndTime)) {
                        $("#dept_over_timer").val(window.caseEndTime);
                    }
                    $row.find(".timer_btn").listen("quickClick", function (e) {
                        //鐐瑰嚮浜嬩欢
                        var data = $(e.currentTarget).data("data");
                    });
                });
            }

            //清空缓存
            function cleanCaseWelcomeList() {
                window.searchPage = 2;
                window.noticeTypeName = "";
                window.caseStartTime = "";
                window.caseEndTime = "";
                $("#dept_handle_list_page #case_welcome_inp").val("");
                window.choiceThingsParts = "";
                window.choiceBigType = "";
                window.choiceSmallType = "";

                setRestTitle();
            }

            //wode
            function myDeptInit() {
                cleanCaseWelcomeList();
                //鏈姙
                $("#dept_handle_list_page .jszx-bar-icon-up div").removeClass("tab_oranger_font");
                $("#dept_handle_list_page .leader_wait").addClass("tab_oranger_font");
                $("#dept_handle_list_page .casewelcome_search").hide();
                $("#dept_handle_list_page .right_img").hide();
                $("#dept_handle_list_page .right_add").show();

                window.leaderQueryType = "1";

                initDeptWelcome_faqi();
            }

            //aleady
            function alreadyDeptInit() {
                cleanCaseWelcomeList();
                $("#dept_handle_list_page .right_img").show();
                $("#dept_handle_list_page .right_add").hide();
                $("#dept_handle_list_page .jszx-bar-icon-up div").removeClass("tab_oranger_font");
                $("#dept_handle_list_page .leader_already").addClass("tab_oranger_font");

                $("#dept_handle_list_page .casewelcome_search").show();

                window.leaderQueryType = "2";
                initDeptWelcome();
            }

            /**
             * 筛选条件
             * @param type
             */
            function setRestTitle() {
                //$("#case_welcome_bigclass_id").html("大小类");
                $("#case_welcome_time_id").html("上报时间段");
            }

            /**
             *列表
             * @param queryType 查询类型  1：待办 2：已办
             * @param startTime 开始时间
             * @param endTime 结束时间
             * @param eventComponent 事件部门
             * @param bigClass 大类
             * @param smallClass 小类
             */
            function app_deptList(reset, loginId, flag, status, pageNum) {
                if (!reset) {
                    //showLoading("正在搜索...");
                }
                if (parseInt(pageNum) < 2) {
                    $("#dept_handle_html").empty();
                }
                var obj = "";
                obj += toJson("loginId", window.localStorage.loginId) + "&";
                obj += toJson("flag", flag) + "&";
                obj += toJson("status", status) + "&";
                obj += toJson("pageSize", "20") + "&";
                obj += toJson("pageNum", pageNum);

                doPost("caseDepartmentList.action", obj, function (data) {
                    if (!reset) {
                        hideLoading();
                    }
                    if (data.code == 0) {
                        if (reset) {
                            reset(true);
                        }
                        var array = data.datas;
                        getDataLength(data.totalSize, 6);
                        if (data.datas.length < 20) {
                            console.log('进来了')
                            window.checkNum = 2;
                        }
                        console.log("长度：" + data.totalSize);
                        if (!isNull(array) && array.length > 0) {
                            for (var i = 0; i < array.length; i++) {


                                var html = '';
                                html += '<table cellspacing="0" class="list_second_table gray_line_bottom" cellpadding="0">';

                                html += '   <tr>';
                                html += '       <td style="white-space:nowrap;overflow:hidden;text-overflow:ellipsis;"> ' + array[i].linkagename + '</td>';
                                /*  html += '       <td style="width:34%;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">' + array[i].checkItem + '</td>'; */
                                html += '       <td style="padding-left:0.5em;width: 5em;" class="oranger_font">' + array[i].status + '</td>';
                                html += '   </tr>';
                                html += '   <tr>';
                                html += '       <td colspan="3" style="text-align:left;"> ' + array[i].deadLine + '</td>';
                                html += '   </tr>';
                                html += '</table>';
                                var $html = createListRow(html).appendTo("#dept_handle_html");
                                $html.data('data', array[i]);
                                $html.listen("quickClick", function (e) {
                                    var data = $(e.currentTarget).data("data");
                                    window.row_id = data.row_id;
                                    window.currjump = "list";
                                    //window.caseRow_id = data.row_id;
                                    //window.caseRow_id = data.caseno;
                                    that.$router.push({path: '/deptHandleDetail'});
                                });
                            }
                        } else {
                            if (parseInt(pageNum) < 2) {
                                noListShow("", "", "", $("#dept_handle_html"), "");
                            }
                        }
                    } else {
                        /*  if (reset) {
                             reset(true);
                         } */
                        toast(data.message);
                    }
                    // window.flag1 = true;
                }, "");
            }

            //我的发起
            function app_startUpdeptList(reset, loginId, flag, status, pageNum) {
                if (!reset) {
                    hideLoading();
                }
                if (parseInt(pageNum) < 2) {
                    $("#dept_handle_html").empty();
                }
                var obj = "";
                obj += toJson("loginId", window.localStorage.loginId) + "&";
                obj += toJson("flag", flag) + "&";
                obj += toJson("status", "") + "&";
                obj += toJson("pageSize", "20") + "&";
                obj += toJson("pageNum", pageNum);

                doPost("myCaseReportList.action", obj, function (data) {
                    if (!reset) {
                        hideLoading();
                    }
                    if (data.code == 0) {
                        if (reset) {
                            reset(true);
                        }
                        var array = data.datas;
                        getDataLength(data.totalSize, 6);
                        if (data.datas.length < 20) {
                            console.log('进来了')
                            window.checkNum = 2;
                        }
                        console.log("长度：" + data.totalSize);
                        if (!isNull(array) && array.length > 0) {
                            for (var i = 0; i < array.length; i++) {


                                var html = '';
                                html += '<table cellspacing="0" class="list_second_table gray_line_bottom" cellpadding="0">';

                                html += '   <tr>';
                                html += '       <td style="white-space:nowrap;overflow:hidden;text-overflow:ellipsis;"> ' + array[i].linkagename + '</td>';
                                /*  html += '       <td style="width:34%;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">' + array[i].checkItem + '</td>'; */
                                html += '       <td style="padding-left:0.5em;width: 5em;" class="oranger_font">' + array[i].status + '</td>';
                                html += '   </tr>';
                                html += '   <tr>';
                                html += '       <td colspan="3" style="text-align:left;"> ' + array[i].deadLine + '</td>';
                                html += '   </tr>';
                                html += '</table>';
                                var $html = createListRow(html).appendTo("#dept_handle_html");
                                $html.data('data', array[i]);
                                $html.listen("quickClick", function (e) {
                                    var data = $(e.currentTarget).data("data");
                                    window.row_id = data.row_id;
                                    window.currjump = "list";
                                    //window.caseRow_id = data.row_id;
                                    //window.caseRow_id = data.caseno;
                                    that.$router.push({path: '/deptHandleDetail'});


                                });
                            }
                        } else {
                            if (parseInt(pageNum) < 2) {
                                noListShow("", "", "", $("#dept_handle_html"), "");
                            }
                        }
                    } else {
                        /*   if (reset) {
                              reset(true);
                          } */
                        toast(data.message);
                    }

                }, "");
            }
        },
        methods: {
            filtrate(){
                if ($(".max-dialog").is(':visible') == true) {
                    $(".max-dialog").remove();
                } else {
                    showSmallChoice("分类", "时间段", "", function () {
                        setTimeout(function () {
                            depttypeByClass();
                        }, 500);

                    }, function () {
                        setTimeout(function () {
                            caseSearchByTime();
                        }, 500);
                    }, function () {

                    });
                }
            },
            addClick(){
                if ($(".max-dialog").is(':visible') == true) {
                    $(".max-dialog").remove();
                } else {
                    this.$router.push("deptHandleEdit");
                }
            }
        }
    }
</script>

<style scoped>
    #dept_handle_list_page .page_header_title .jszx-bar-icon-up {
        background: #fafafa;
    }

    #dept_handle_list_page .list_table tr:first-child td {
        padding: 1em 0em 0em 1.3em;
    }

    #dept_handle_list_page .list_table tr td {
        padding: 0.7em 0em 1em 1.3em;
    }

    #dept_handle_list_page .home_list_tr_first_td {
        padding: 0.7em;
        padding-left: 0em;
    }

    /*#dept_handle_list_page .page_header .right_img {*/
    /*right: 1.5em;*/
    /*}*/

    #dept_handle_list_page .red_num {
        /*margin-left: 3.3em;*/
        float: right;
        top: 1.2em;
        right: 2em;
    }

    #dept_handle_list_page .search_div {
        padding: 0.5em 1em 0em 1em;
        margin: 0em;
        background: #edeef1;
    }

    #dept_handle_list_page #case_welcome_inp {
        width: 65%;
        float: left;
        line-height: 2.5em;
        height: 2.5em;
    }

    #dept_handle_list_page #refresh_service {
        width: 2em;
        height: 2em;
        padding: 0.4em 0.2em 0em 0.8em;
        float: right;
    }

    #dept_handle_list_page #service_search {
        width: 4em;
        text-align: center;
        color: #ffffff;
        margin-top: 0.7em;
        float: right;
        line-height: 2.2em;
        border-radius: 0.3em;
    }

    #dept_handle_list_page .search_div {
        height: 3.2em;
    }

    #dept_handle_list_page .home_list_tr_first_td span {
        margin-left: 0.5em;
    }

    #dept_handle_list_page .small_img {
        height: 1.2em;
    }

    #dept_handle_list_page .jszx-bar-item-2 > div {
        width: 50%;
    }

    #dept_handle_list_page .tab_oranger_font p,
    .tab_bloack_font p, #dept_handle_list_page .jszx-bar-item-2 div p {
        height: 2.8em;
        line-height: 2.8em;
    }

    /*绛涢�夊皬鍥炬爣*/
    #dept_handle_list_page .jszx-bar-item-2 div p img {
        width: 0.6em;
        height: 0.5em;
        padding-left: 0.5em;
    }

    #dept_handle_list_page .right_btn {
        width: 4.5em;
        right: 0em;
        height: 2.5em;
        margin-top: 0;
    }

    #dept_handle_list_page .jszx-bar-item-2 > div {
        width: 50%;
    }

    #dept_handle_list_page .jszx-bar-item-2 p,
    .jszx-bar-item-2 p {
        height: 2.8em;
        line-height: 2.8em;
    }
</style>
