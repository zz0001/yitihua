<template>
    <div data-role="page" id="investment_list_page">

        <tk-header>
            年度申报列表
        </tk-header>
        <div class="page_content" style="">


            <div id="investment_wrapper" class="jszx-wrapper">
                <div class="jszx-scroller">
                    <div id="investment_html" class="html_margin">

                    </div>
                </div>
            </div>
        </div>
        <div class="max-dialog max-alert moretitle" id="investment_search_content" style="box-shadow: none; width: 100%; display: -webkit-box; height: 683px;display:none;">
            <div class="max-dialog-masker"></div>
            <div class="max-dialog-frame moretitle_frame screen_search_content_div" style="position: absolute; background: rgb(255, 255, 255); height: 377.6px;">
                <div id="investment_content_height" style="height: 324.6px;">
                    <div id="screen_investment_wrapper" style="width: 100%; height: 324.6px;" class="jszx-wrapper ">
                        <div class="jszx-scroller">
                            <div class="alert_edit" id="investment_content1" style="">

                                <div style="text-align: center; margin-top: 2em; ">年度:<input id="year_list" style="width:60%;display:inline;border-radius: 5px;" class="alert_edit_div_input" type="number"
                                                                                             placeholder="请输入年度"/></div>


                            </div>                  </div>
                        <div class="scroll-bar-y" style="height: 0px;"></div></div>

                    <div class="page_footer screeb_footer" style="position:absolute;bottom:0em;border-top:1px solid #f3f3f3;height:4em;background: #FFFFFF;">
                        <div class="footer_button_div">
                            <div id="housefindempty" style="width:35%;float:left;" class="alert_bottom_three gray_background">重置</div>
                            <div id="housefindlist" style="width:35%;float:left;" class="alert_bottom_three orange_background">确定</div></div></div></div></div></div>

    </div>
</template>

<script>
    export default {
        name: "",
        mounted(){
            var that = this;
            window.searchPage = 2;
            window.deptQueryType = 1;
                myInvestment();


                $("#investment_list_page .right_add").listen("quickClick", function (e) {
                    if ($(".max-dialog").is(':visible') == true) {
                        $(".max-dialog").remove();
                    } else {
                        that.$router.push({path:'implementProjectEdit'});
                    }
                });

                /*返回*/
                $("#investment_list_page .left_img").listen("quickClick", function (e) {
                    console.log(window.implementInfo)
                    that.$router.back();
                });
                //筛选
                $("#investment_list_page .right_btn").listen("quickClick", function (e) {
                    $("#investment_search_content").show();
                });



            function initInvestment() {
                $("#investment_wrapper")[0].style.height = window.localInnerHeight - $("#investment_list_page .page_header").height() - $("#investment_list_page .jszx-bar-icon-up").height() + "px";
                initScroll({
                    "wrapper": "investment_wrapper",
                    "dir": "y",
                    "bounce": false,
                    "scrollBar": true,
                    "pullUpLoading": function (reset) { //上拉
                        if (window.searchPage > window.arrayDataLength) {
                            reset(true);
                            toast("没有更多的数据了");
                        } else {
                            appprojectInvestment(reset, window.searchPage++);
                        }
                    },
                    "pullDownLoading": function (reset) { //下拉
                        window.searchPage = 2;
                        appprojectInvestment(reset, 1)
                    }
                });
                scrollToTop("investment_wrapper");


                appprojectInvestment(false, 1);

            }
            //分类
            function depttypeByClass() {
                showSmallTitle(".case_list_bigclass", "4", function () {
                    //重置

                }, function () {
                    //确定
                    window.checkNum = 1;
                    var val=$("#enforcement_type option:selected").val();
                    app_EnforcementList(false, window.localStorage.loginId, "ZF", val, 1);
                });
                var html = ' <table class="inp_table" cellpadding="0" cellspacing="0">';
                html += '       <tr style="height:10em">';
                html += '           <td style="min-width: 3em;padding:1em;font-size: 20px;" class="gray_line_bottom">请选择类型</td>';
                html += '           <td colspan="2" class="gray_line_bottom" style="text-align: center;">';
                html += '               <select id="enforcement_type" style="display: inline-block;width: 72%;"><option value="1">待办</option><option value="2">已办</option></select>';
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
                        app_EnforcementList(false,  window.localStorage.loginId, "ZF", "", 1);
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
            function cleanInvestmentList() {
                window.searchPage = 2;
                $("#investment_html").empty();
            }

            //wode
            function myInvestment() {
                cleanInvestmentList();
                //鏈姙
                $("#investment_list_page .casewelcome_title div").removeClass("tab_oranger_font");
                $("#investment_list_page .leader_wait").addClass("tab_oranger_font");
                $("#investment_list_page .casewelcome_search").hide();

                $("#investment_list_page .right_add").show();
//            $("#investment_list_page #case_welcome_rednum").hide();
                window.leaderQueryType = "1";
                //initDeptWelcome();
                initInvestment();
            }

            //aleady
            function alreadyDeptInit() {
                cleanInvestmentList();
                $("#investment_list_page .right_img").show();
                $("#investment_list_page .right_add").hide();
                $("#investment_list_page .casewelcome_title div").removeClass("tab_oranger_font");
                $("#investment_list_page .leader_already").addClass("tab_oranger_font");
                //宸插姙
//            appWorkOrder_todoTotalByType();
                $("#investment_list_page .casewelcome_search").show();
//            $("#investment_list_page #case_welcome_rednum").show();
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

            //我的发起
            function appprojectInvestment(reset) {
                if (!reset) {
                    //showLoading("正在搜索...");
                }
                $("#investment_html").empty();
                var obj = "";
                obj += toJson("projectno", window.localStorage.implementationid);

                doPost("ap_projectInvestment.action", obj, function (data) {
                    if (!reset) {
                        hideLoading();
                    }
                    if (data.total > 0) {
                        if (reset) {
                            reset(true);
                        }
                        var array = data.datas;
                        getDataLength(data.total, 6);
                        if(data.datas.length < 20){
                            console.log('进来了')
                            window.checkNum = 2;
                        }
                        console.log("长度：" + data.totalSize);
                        if (!isNull(array) && array.length > 0) {
                            for (var i = 0; i < array.length; i++) {



                                var html = '';
                                html += '<table cellspacing="0" class="list_second_table gray_line_bottom" cellpadding="0">';

                                html += '   <tr>';
                                html += '       <td style="white-space:nowrap;overflow:hidden;text-overflow:ellipsis;"> ' + array[i].planyear + '年度</td>';
                                /*  html += '       <td style="width:34%;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">' + array[i].checkItem + '</td>'; */
                                html += '       <td style="padding-left:0.5em;width: 5em;" class="oranger_font">' + array[i].declarepersonnel + '</td>';
                                html += '   </tr>';
                                html += '   <tr>';
                                html += '       <td colspan="3" style="text-align:left;"> ' + array[i].declarationdate+'--' + array[i].approvaldate+'</td>';
                                html += '   </tr>';
                                html += '</table>';
                                var $html = createListRow(html).appendTo("#investment_html");
                                $html.data('data', array[i]);
                                $html.listen("quickClick", function (e) {
                                    var data = $(e.currentTarget).data("data");
                                    window.projectInvestment = data;
                                    //window.caseRow_id = data.row_id;
                                    //window.caseRow_id = data.caseno;
                                    that.$router.push({path:'investmentInformationDetail'});


                                });
                            }
                        } else {
                            if (parseInt(pageNum) < 2) {
                                noListShow("", "", "", $("#investment_html"), "");
                            }
                        }
                    } else {
                        if (reset) {
                            reset(true);
                        }
                        toast(data.message);
                    }

                }, "");
            }
        }
    }
</script>

<style scoped>
    #investment_list_page .page_header_title .jszx-bar-icon-up {
        background: #fafafa;
    }

    #investment_list_page .list_table tr:first-child td {
        padding: 1em 0em 0em 1.3em;
    }

    #investment_list_page .list_table tr td {
        padding: 0.7em 0em 1em 1.3em;
    }

    #investment_list_page .home_list_tr_first_td {
        padding: 0.7em;
        padding-left: 0em;
    }

    /*#investment_list_page .page_header .right_img {*/
    /*right: 1.5em;*/
    /*}*/

    #investment_list_page .red_num {
        /*margin-left: 3.3em;*/
        float: right;
        top: 1.2em;
        right: 2em;
    }

    #investment_list_page .search_div {
        padding: 0.5em 1em 0em 1em;
        margin: 0em;
        background: #edeef1;
    }

    #investment_list_page #case_welcome_inp {
        width: 65%;
        float: left;
        line-height: 2.5em;
        height: 2.5em;
    }

    #investment_list_page #refresh_service {
        width: 2em;
        height: 2em;
        padding: 0.4em 0.2em 0em 0.8em;
        float: right;
    }

    #investment_list_page #service_search {
        width: 4em;
        text-align: center;
        color: #ffffff;
        margin-top: 0.7em;
        float: right;
        line-height: 2.2em;
        border-radius: 0.3em;
    }

    #investment_list_page .search_div {
        height: 3.2em;
    }

    #investment_list_page .home_list_tr_first_td span {
        margin-left: 0.5em;
    }

    #investment_list_page .small_img {
        height: 1.2em;
    }

    #investment_list_page .jszx-bar-item-2 > div {
        width: 50%;
    }

    #investment_list_page .tab_oranger_font p,
    .tab_bloack_font p, #investment_list_page .jszx-bar-item-2 div p {
        height: 2.8em;
        line-height: 2.8em;
    }


    #investment_list_page .jszx-bar-item-2 div p img {
        width: 0.6em;
        height: 0.5em;
        padding-left: 0.5em;
    }

    #investment_list_page .right_btn {
        width: 4.5em;
        right: 0em;
        height: 2.5em;
    }

    #investment_list_page .jszx-bar-item-2 > div {
        width: 50%;
    }

    #investment_list_page .jszx-bar-item-2 p,
    .jszx-bar-item-2 p {
        height: 2.8em;
        line-height: 2.8em;
    }
</style>
