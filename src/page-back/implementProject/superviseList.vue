<template>
    <div data-role="page" id="supervise_list_page">
        <tk-header>
            项目列表
        </tk-header>
        <div class="page_content" style="">


            <div id="supervise_wrapper" class="jszx-wrapper">
                <div class="jszx-scroller">
                    <div id="supervise_html" class="html_margin white_background">

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
            initImplementWelcome();
            window.searchPage = 2;


            /*上报*/
            $("#supervise_list_page .right_img").listen("quickClick", function (e) {

            });
            /*返回*/
            $("#supervise_list_page .left_img").listen("quickClick", function (e) {
                if ($(".max-dialog").is(':visible') == true) {
                    $(".max-dialog").remove();
                } else {
                    that.$router.back();
                }
            });
            //筛选
            $("#supervise_list_page .right_btn").listen("quickClick", function (e) {
                that.$router.push({path: '/echartstest'});

            });

            /**
             * 初始化
             */
            function initImplementWelcome() {
                $("#supervise_wrapper")[0].style.height = window.localInnerHeight - $("#supervise_list_page .page_header").height() - $("#supervise_list_page .jszx-bar-icon-up").height() + "px";
                initScroll({
                    "wrapper": "supervise_wrapper",
                    "dir": "y",
                    "bounce": false,
                    "scrollBar": true,
                    "pullUpLoading": function (reset) { //上拉
                        if (window.searchPage > window.arrayDataLength) {
                            reset(true);
                            toast("没有更多的数据了");
                        } else {
                            //app_implementProjectList(reset, window.searchPage++);
                        }
                    },
                    "pullDownLoading": function (reset) { //下拉
                        window.searchPage = 2;
                        //app_implementProjectList(reset, 1)
                    }
                });
                scrollToTop("supervise_wrapper");

                //开始时间
                /*  var date=new Date;
                  var year=date.getFullYear();
                  var month=date.getMonth()+1;
                  month =(month<10 ? "0"+month:month);
                  window.curryear=year+"";
                  window.currmonth=month; */
                //结束时间
                if (window.superviseType == "unstartno") {
                    app_findSuperviseUnstartList(false, 1);
                } else if (window.superviseType == "superviseno") {

                    app_findSuperviseStartList(false, 1);
                } else if (window.superviseType == "issueno") {

                    app_findSuperviseIssueList(false, 1);
                }

            }


            //未开工
            //接口调用以及dom构建
            function app_findSuperviseUnstartList(reset, pageNum) {
                if (!reset) {
                    //showLoading("正在搜索...");
                }
                if (parseInt(pageNum) < 2) {
                    $("#supervise_html").empty();
                }

                var obj = "";
                obj += toJson("leadername", window.superviseListLeadername) + "&";
                obj += toJson("nature", window.currTab) + "&";
                obj += toJson("pageSize", "20") + "&";
                obj += toJson("pageNum", pageNum);

                doPost("findSuperviseUnstartList.action", obj, function (data) {
                    if (!reset) {
                        hideLoading();
                    }
                    if (data.total > 0) {
                        if (reset) {
                            reset(true);
                        }
                        var array = data[window.curryear];
                        getDataLength(data.total, 6);
                        if (data[window.curryear].length < 20) {
                            console.log('进来了')
                            window.checkNum = 2;
                        }
                        console.log("长度：" + data.totalSize);
                        if (!isNull(array) && array.length > 0) {
                            for (var i = 0; i < array.length; i++) {
                                var status = "";
                                var totalinvestment = array[i].totalinvestment;
                                var investmentamount = array[i].investmentamount;
                                var yearcompleteamount = array[i].yearcompleteamount;
                                var yearcompleterate = array[i].yearcompleterate;
                                if (array[i].totalinvestment == "") {
                                    totalinvestment = "0";
                                }
                                if (array[i].investmentamount == "") {
                                    investmentamount = "0";
                                }
                                if (array[i].yearcompleteamount == "") {
                                    yearcompleteamount = "0";
                                }
                                if (array[i].yearcompleterate == "") {
                                    yearcompleterate = "0";
                                }
                                var html = '';
                                html += '<table cellspacing="0" class="list_second_table gray_line_bottom" cellpadding="0" style="">';

                                html += '   <tr >';
                                html += '       <td style="white-space:nowrap;overflow:hidden;text-overflow:ellipsis;padding-top:0.5em;padding-bottom:0.5em;"><div style="display:inline-block;width:5px;height:22px;background:#2b6cd2;vertical-align: middle;"></div><span style="margin-left: 1em;display:inline-block;vertical-align: middle;"> ' + array[i].projectname + '<span></td>';
                                /*  html += '       <td style="width:34%;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">' + array[i].checkItem + '</td>'; */
                                html += '       <td style="padding-left:0.5em;width: 5em;" class="oranger_font"></td>';
                                html += '   </tr>';
                                html += '   <tr >';
                                html += '       <td colspan="3" class="list_top_down"><div style="display: inline-block;width:21%;text-align:center;"><div style="height:24px;">总投资</div><div class="oranger_font" style="height:24px;">' + totalinvestment + '</div></div> ';
                                html += '<div style="background:#dadada;width: 1px;height:2em;display: inline-block;top: 50%; margin-top: -0.5em;"></div>'
                                html += '<div style="display: inline-block;width:25%;text-align:center;"><div style="height:24px;">年度投资</div><div class="oranger_font" style="height:24px;">' + investmentamount + '</div></div>';
                                html += '<div style="background:#dadada;width: 1px;height:2em;display: inline-block;top: 50%; margin-top: -0.5em;"></div>'
                                html += '<div style="display: inline-block;width:25%;text-align:center;"><div style="height:24px;">月投资</div><div class="oranger_font">' + yearcompleteamount + '</div></div>';
                                html += '<div style="background:#dadada;width: 1px;height:2em;display: inline-block;top: 50%; margin-top: -0.5em;"></div>'
                                html += '<div style="display: inline-block;width:25%;text-align:center;"><div style="height:24px;">年度完成率</div><div class="oranger_font" style="height:24px;">' + yearcompleterate + '</div></div>';

                                html += '</td> </tr>';
                                html += '   <tr style="background: #f5f5f5;">';
                                html += '       <td colspan="3" style="border-top:1px solid #dadada;font-size:14px;text-align:left;padding: 0.5em 0;padding-bottom: 0;"><div style="display: inline-block;width:32%;text-align:center;"><div style="height:24px;">检查督办</div><div class="oranger_font" style="height:24px;">' + array[i].superviseno + '</div></div> ';
                                html += '<div style="background:#dadada;width: 1px;height:2em;display: inline-block;top: 50%; margin-top: -0.5em;"></div>'
                                html += '<div style="display: inline-block;width:32%;text-align:center;"><div style="height:24px;">存在问题</div><div class="green_font" style="height:24px;color:#3d8607;">' + array[i].issueno + '</div></div>';
                                var responsibleunits = array[i].responsibleunits;
                                if (array[i].responsibleunits == "") {
                                    responsibleunits = "无";
                                }
                                html += '<div style="background:#dadada;width: 1px;height:2em;display: inline-block;top: 50%; margin-top: -0.5em;"></div>'
                                html += '<div style="display: inline-block;width:32%;text-align:center;"><div style="height:24px;">责任单位</div><div class="common_font" style="height:24px;color:#333333;">' + responsibleunits + '</div></div>';

                                html += '</td> </tr>';
                                //html += '<tr><td colspan="3" style="height:1em;background-color:#dadada;"></td> </tr>';
                                html += '</table>';
                                html += '<div style="height:0.5em;background-color:#ededed;"></div>';
                                var $html = createListRow(html).appendTo("#supervise_html");
                                $html.data('data', array[i]);
                                $html.listen("quickClick", function (e) {
                                    var data = $(e.currentTarget).data("data");
                                    window.implementInfo = data;
                                    that.$router.push({path: '/superviseDetail'});
                                });
                            }
                        } else {
                            if (parseInt(pageNum) < 2) {
                                noListShow("", "", "", $("#supervise_html"), "");
                            }
                        }
                    } else {
                        if (reset) {
                            reset(true);
                        }
                        toast(data.message);
                    }
                    // window.flag1 = true;
                }, "");
            }

            //已开工
            function app_findSuperviseStartList(reset, pageNum) {
                if (!reset) {
                    //showLoading("正在搜索...");
                }
                if (parseInt(pageNum) < 2) {
                    $("#supervise_html").empty();
                }
                var obj = "";
                obj += toJson("leadername", window.superviseListLeadername) + "&";
                obj += toJson("nature", window.currTab) + "&";
                obj += toJson("pageSize", "20") + "&";
                obj += toJson("pageNum", pageNum);

                doPost("findSuperviseStartList.action", obj, function (data) {
                    if (!reset) {
                        hideLoading();
                    }
                    if (data.total > 0) {
                        if (reset) {
                            reset(true);
                        }
                        var array = data[window.curryear];
                        getDataLength(data.total, 6);
                        if (data[window.curryear].length < 20) {
                            console.log('进来了')
                            window.checkNum = 2;
                        }
                        console.log("长度：" + data.totalSize);
                        if (!isNull(array) && array.length > 0) {
                            for (var i = 0; i < array.length; i++) {
                                var status = "";
                                var totalinvestment = array[i].totalinvestment;
                                var investmentamount = array[i].investmentamount;
                                var yearcompleteamount = array[i].yearcompleteamount;
                                var yearcompleterate = array[i].yearcompleterate;
                                if (array[i].totalinvestment == "") {
                                    totalinvestment = "0";
                                }
                                if (array[i].investmentamount == "") {
                                    investmentamount = "0";
                                }
                                if (array[i].yearcompleteamount == "") {
                                    yearcompleteamount = "0";
                                }
                                if (array[i].yearcompleterate == "") {
                                    yearcompleterate = "0";
                                }
                                var html = '';
                                html += '<table cellspacing="0" class="list_second_table gray_line_bottom" cellpadding="0" style="">';

                                html += '   <tr >';
                                html += '       <td style="white-space:nowrap;overflow:hidden;text-overflow:ellipsis;padding-top:0.5em;padding-bottom:0.5em;"><div style="display:inline-block;width:5px;height:22px;background:#2b6cd2;vertical-align: middle;"></div><span style="margin-left: 1em;display:inline-block;vertical-align: middle;"> ' + array[i].projectname + '<span></td>';
                                /*  html += '       <td style="width:34%;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">' + array[i].checkItem + '</td>'; */
                                html += '       <td style="padding-left:0.5em;width: 5em;" class="oranger_font"></td>';
                                html += '   </tr>';
                                html += '   <tr >';
                                html += '       <td colspan="3" class="list_top_down"><div style="display: inline-block;width:21%;text-align:center;"><div style="height:24px;">总投资</div><div class="oranger_font" style="height:24px;">' + totalinvestment + '</div></div> ';
                                html += '<div style="background:#dadada;width: 1px;height:2em;display: inline-block;top: 50%; margin-top: -0.5em;"></div>'
                                html += '<div style="display: inline-block;width:25%;text-align:center;"><div style="height:24px;">年度投资</div><div class="oranger_font" style="height:24px;">' + investmentamount + '</div></div>';
                                html += '<div style="background:#dadada;width: 1px;height:2em;display: inline-block;top: 50%; margin-top: -0.5em;"></div>'
                                html += '<div style="display: inline-block;width:25%;text-align:center;"><div style="height:24px;">月投资</div><div class="oranger_font">' + yearcompleteamount + '</div></div>';
                                html += '<div style="background:#dadada;width: 1px;height:2em;display: inline-block;top: 50%; margin-top: -0.5em;"></div>'
                                html += '<div style="display: inline-block;width:25%;text-align:center;"><div style="height:24px;">年度完成率</div><div class="oranger_font" style="height:24px;">' + yearcompleterate + '</div></div>';

                                html += '</td> </tr>';
                                html += '   <tr style="background: #f5f5f5;">';
                                html += '       <td colspan="3" style="border-top:1px solid #dadada;font-size:14px;text-align:left;padding: 0.5em 0;padding-bottom: 0;"><div style="display: inline-block;width:32%;text-align:center;"><div style="height:24px;">检查督办</div><div class="oranger_font" style="height:24px;">' + array[i].superviseno + '</div></div> ';
                                html += '<div style="background:#dadada;width: 1px;height:2em;display: inline-block;top: 50%; margin-top: -0.5em;"></div>'
                                html += '<div style="display: inline-block;width:32%;text-align:center;"><div style="height:24px;">存在问题</div><div class="green_font" style="height:24px;color:#3d8607;">' + array[i].issueno + '</div></div>';
                                var responsibleunits = array[i].responsibleunits;
                                if (array[i].responsibleunits == "") {
                                    responsibleunits = "无";
                                }
                                html += '<div style="background:#dadada;width: 1px;height:2em;display: inline-block;top: 50%; margin-top: -0.5em;"></div>'
                                html += '<div style="display: inline-block;width:32%;text-align:center;"><div style="height:24px;">责任单位</div><div class="common_font" style="height:24px;color:#333333;">' + responsibleunits + '</div></div>';

                                html += '</td> </tr>';
                                //html += '<tr><td colspan="3" style="height:1em;background-color:#dadada;"></td> </tr>';
                                html += '</table>';
                                html += '<div style="height:0.5em;background-color:#ededed;"></div>';
                                var $html = createListRow(html).appendTo("#supervise_html");
                                $html.data('data', array[i]);
                                $html.listen("quickClick", function (e) {
                                    var data = $(e.currentTarget).data("data");
                                    window.implementInfo = data;
                                    that.$router.push({path: '/superviseDetail'});

                                });
                            }
                        } else {
                            if (parseInt(pageNum) < 2) {
                                noListShow("", "", "", $("#supervise_html"), "");
                            }
                        }
                    } else {
                        if (reset) {
                            reset(true);
                        }
                        toast(data.message);
                    }
                    // window.flag1 = true;
                }, "");
            }

            //存在问题列表
            function app_findSuperviseIssueList(reset, pageNum) {
                if (!reset) {
                    //showLoading("正在搜索...");
                }
                if (parseInt(pageNum) < 2) {
                    $("#supervise_html").empty();
                }
                var obj = "";
                obj += toJson("leadername", window.superviseListLeadername) + "&";
                obj += toJson("nature", window.currTab) + "&";
                obj += toJson("pageSize", "20") + "&";
                obj += toJson("pageNum", pageNum);

                doPost("findSuperviseIssueList.action", obj, function (data) {
                    if (!reset) {
                        hideLoading();
                    }
                    if (data.total > 0) {
                        if (reset) {
                            reset(true);
                        }
                        var array = data[window.curryear];
                        getDataLength(data.total, 6);
                        if (data[window.curryear].length < 20) {
                            console.log('进来了')
                            window.checkNum = 2;
                        }
                        console.log("长度：" + data.totalSize);
                        if (!isNull(array) && array.length > 0) {
                            for (var i = 0; i < array.length; i++) {
                                var status = "";
                                var totalinvestment = array[i].totalinvestment;
                                var investmentamount = array[i].investmentamount;
                                var yearcompleteamount = array[i].yearcompleteamount;
                                var yearcompleterate = array[i].yearcompleterate;
                                if (array[i].totalinvestment == "") {
                                    totalinvestment = "0";
                                }
                                if (array[i].investmentamount == "") {
                                    investmentamount = "0";
                                }
                                if (array[i].yearcompleteamount == "") {
                                    yearcompleteamount = "0";
                                }
                                if (array[i].yearcompleterate == "") {
                                    yearcompleterate = "0";
                                }
                                var html = '';
                                html += '<table cellspacing="0" class="list_second_table gray_line_bottom" cellpadding="0" style="">';

                                html += '   <tr >';
                                html += '       <td style="white-space:nowrap;overflow:hidden;text-overflow:ellipsis;padding-top:0.5em;padding-bottom:0.5em;"><div style="display:inline-block;width:5px;height:22px;background:#2b6cd2;vertical-align: middle;"></div><span style="margin-left: 1em;display:inline-block;vertical-align: middle;"> ' + array[i].projectname + '<span></td>';
                                /*  html += '       <td style="width:34%;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">' + array[i].checkItem + '</td>'; */
                                html += '       <td style="padding-left:0.5em;width: 5em;" class="oranger_font"></td>';
                                html += '   </tr>';
                                html += '   <tr >';
                                html += '       <td colspan="3" class="list_top_down"><div style="display: inline-block;width:21%;text-align:center;"><div style="height:24px;">总投资</div><div class="oranger_font" style="height:24px;">' + totalinvestment + '</div></div> ';
                                html += '<div style="background:#dadada;width: 1px;height:2em;display: inline-block;top: 50%; margin-top: -0.5em;"></div>'
                                html += '<div style="display: inline-block;width:25%;text-align:center;"><div style="height:24px;">年度投资</div><div class="oranger_font" style="height:24px;">' + investmentamount + '</div></div>';
                                html += '<div style="background:#dadada;width: 1px;height:2em;display: inline-block;top: 50%; margin-top: -0.5em;"></div>'
                                html += '<div style="display: inline-block;width:25%;text-align:center;"><div style="height:24px;">月投资</div><div class="oranger_font">' + yearcompleteamount + '</div></div>';
                                html += '<div style="background:#dadada;width: 1px;height:2em;display: inline-block;top: 50%; margin-top: -0.5em;"></div>'
                                html += '<div style="display: inline-block;width:25%;text-align:center;"><div style="height:24px;">年度完成率</div><div class="oranger_font" style="height:24px;">' + yearcompleterate + '</div></div>';

                                html += '</td> </tr>';
                                html += '   <tr style="background: #f5f5f5;">';
                                html += '       <td colspan="3" style="border-top:1px solid #dadada;font-size:14px;text-align:left;padding: 0.5em 0;padding-bottom: 0;"><div style="display: inline-block;width:32%;text-align:center;"><div style="height:24px;">检查督办</div><div class="oranger_font" style="height:24px;">' + array[i].superviseno + '</div></div> ';
                                html += '<div style="background:#dadada;width: 1px;height:2em;display: inline-block;top: 50%; margin-top: -0.5em;"></div>'
                                html += '<div style="display: inline-block;width:32%;text-align:center;"><div style="height:24px;">存在问题</div><div class="green_font" style="height:24px;color:#3d8607;">' + array[i].issueno + '</div></div>';
                                var responsibleunits = array[i].responsibleunits;
                                if (array[i].responsibleunits == "") {
                                    responsibleunits = "无";
                                }
                                html += '<div style="background:#dadada;width: 1px;height:2em;display: inline-block;top: 50%; margin-top: -0.5em;"></div>'
                                html += '<div style="display: inline-block;width:32%;text-align:center;"><div style="height:24px;">责任单位</div><div class="common_font" style="height:24px;color:#333333;">' + responsibleunits + '</div></div>';

                                html += '</td> </tr>';
                                //html += '<tr><td colspan="3" style="height:1em;background-color:#dadada;"></td> </tr>';
                                html += '</table>';
                                html += '<div style="height:0.5em;background-color:#ededed;"></div>';
                                var $html = createListRow(html).appendTo("#supervise_html");
                                $html.data('data', array[i]);
                                $html.listen("quickClick", function (e) {
                                    var data = $(e.currentTarget).data("data");
                                    window.implementInfo = data;

                                    that.$router.push({path: '/superviseDetail'});

                                });
                            }
                        } else {
                            if (parseInt(pageNum) < 2) {
                                noListShow("", "", "", $("#supervise_html"), "");
                            }
                        }
                    } else {
                        if (reset) {
                            reset(true);
                        }
                        toast(data.message);
                    }
                    // window.flag1 = true;
                }, "");
            }

            //项目数列表
            function app_findTotalList(reset, pageNum, type) {
                if (!reset) {
                    //showLoading("正在搜索...");
                }
                if (parseInt(pageNum) < 2) {
                    $("#supervise_html").empty();
                }
                var obj = "";
                obj += toJson("type", type) + "&";
                obj += toJson("pageSize", "20") + "&";
                obj += toJson("nature", "1") + "&";
                obj += toJson("pageNum", pageNum);

                doPost("findTotalList.action", obj, function (data) {
                    if (!reset) {
                        hideLoading();
                    }
                    if (data.total > 0) {
                        if (reset) {
                            reset(true);
                        }
                        var array = data[window.curryear];
                        getDataLength(data.total, 6);
                        if (data[window.curryear].length < 20) {
                            console.log('进来了')
                            window.checkNum = 2;
                        }
                        console.log("长度：" + data.totalSize);
                        if (!isNull(array) && array.length > 0) {
                            for (var i = 0; i < array.length; i++) {
                                var status = "";
                                var totalinvestment = array[i].totalinvestment;
                                var investmentamount = array[i].investmentamount;
                                var yearcompleteamount = array[i].yearcompleteamount;
                                var yearcompleterate = array[i].yearcompleterate;
                                if (array[i].totalinvestment == "") {
                                    totalinvestment = "0";
                                }
                                if (array[i].investmentamount == "") {
                                    investmentamount = "0";
                                }
                                if (array[i].yearcompleteamount == "") {
                                    yearcompleteamount = "0";
                                }
                                if (array[i].yearcompleterate == "") {
                                    yearcompleterate = "0";
                                }
                                var html = '';
                                html += '<table cellspacing="0" class="list_second_table gray_line_bottom" cellpadding="0" style="">';

                                html += '   <tr >';
                                html += '       <td style="white-space:nowrap;overflow:hidden;text-overflow:ellipsis;padding-top:0.5em;padding-bottom:0.5em;"><div style="display:inline-block;width:5px;height:22px;background:#2b6cd2;vertical-align: middle;"></div><span style="margin-left: 1em;display:inline-block;vertical-align: middle;"> ' + array[i].projectname + '<span></td>';
                                /*  html += '       <td style="width:34%;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">' + array[i].checkItem + '</td>'; */
                                html += '       <td style="padding-left:0.5em;width: 5em;" class="oranger_font"></td>';
                                html += '   </tr>';
                                html += '   <tr >';
                                html += '       <td colspan="3" class="list_top_down"><div style="display: inline-block;width:21%;text-align:center;"><div style="height:24px;">总投资</div><div class="oranger_font" style="height:24px;">' + totalinvestment + '</div></div> ';
                                html += '<div style="background:#dadada;width: 1px;height:2em;display: inline-block;top: 50%; margin-top: -0.5em;"></div>'
                                html += '<div style="display: inline-block;width:25%;text-align:center;"><div style="height:24px;">年度投资</div><div class="oranger_font" style="height:24px;">' + investmentamount + '</div></div>';
                                html += '<div style="background:#dadada;width: 1px;height:2em;display: inline-block;top: 50%; margin-top: -0.5em;"></div>'
                                html += '<div style="display: inline-block;width:25%;text-align:center;"><div style="height:24px;">月投资</div><div class="oranger_font">' + yearcompleteamount + '</div></div>';
                                html += '<div style="background:#dadada;width: 1px;height:2em;display: inline-block;top: 50%; margin-top: -0.5em;"></div>'
                                html += '<div style="display: inline-block;width:25%;text-align:center;"><div style="height:24px;">年度完成率</div><div class="oranger_font" style="height:24px;">' + yearcompleterate + '</div></div>';

                                html += '</td> </tr>';
                                html += '   <tr style="background: #f5f5f5;">';
                                html += '       <td colspan="3" style="border-top:1px solid #dadada;font-size:14px;text-align:left;padding: 0.5em 0;padding-bottom: 0;"><div style="display: inline-block;width:32%;text-align:center;"><div style="height:24px;">检查督办</div><div class="oranger_font" style="height:24px;">' + array[i].superviseno + '</div></div> ';
                                html += '<div style="background:#dadada;width: 1px;height:2em;display: inline-block;top: 50%; margin-top: -0.5em;"></div>'
                                html += '<div style="display: inline-block;width:32%;text-align:center;"><div style="height:24px;">存在问题</div><div class="green_font" style="height:24px;color:#3d8607;">' + array[i].issueno + '</div></div>';
                                var responsibleunits = array[i].responsibleunits;
                                if (array[i].responsibleunits == "") {
                                    responsibleunits = "无";
                                }
                                html += '<div style="background:#dadada;width: 1px;height:2em;display: inline-block;top: 50%; margin-top: -0.5em;"></div>'
                                html += '<div style="display: inline-block;width:32%;text-align:center;"><div style="height:24px;">责任单位</div><div class="common_font" style="height:24px;color:#333333;">' + responsibleunits + '</div></div>';

                                html += '</td> </tr>';
                                //html += '<tr><td colspan="3" style="height:1em;background-color:#dadada;"></td> </tr>';
                                html += '</table>';
                                html += '<div style="height:0.5em;background-color:#ededed;"></div>';
                                var $html = createListRow(html).appendTo("#supervise_html");
                                $html.data('data', array[i]);
                                $html.listen("quickClick", function (e) {
                                    var data = $(e.currentTarget).data("data");
                                    window.implementInfo = data;
                                    that.$router.push({path: '/superviseDetail'});

                                });
                            }
                        } else {
                            if (parseInt(pageNum) < 2) {
                                noListShow("", "", "", $("#supervise_html"), "");
                            }
                        }
                    } else {
                        if (reset) {
                            reset(true);
                        }
                        toast(data.message);
                    }
                    // window.flag1 = true;
                }, "");
            }
        }
    }
</script>

<style scoped>
    #supervise_list_page .page_header_title .jszx-bar-icon-up {
        background: #fafafa;
    }

    #supervise_list_page .home_list_tr_first_td {
        padding: 0.7em;
        padding-left: 0em;
    }

    #supervise_list_page .right_btn {
        width: 3.5em;
        height: 1.5em;
        color: #ffffff;
    }

    #supervise_list_page .right_btn .btn_div {
        color: #ffffff;
        border: 1px solid #ffffff;
        height: 1.7em;
        line-height: 1.7em;
        top: -0.5em;
        background: orange;
        text-align: center;
    }

    #supervise_list_page .jszx-bar-item-3 > div {
        width: 33.3%;
    }

    #supervise_list_page .tab_oranger_font p,
    .tab_bloack_font p, #supervise_list_page .jszx-bar-item-3 div p {
        height: 2.8em;
        line-height: 2.8em;
    }

    #supervise_list_page .page_header .page_header_title {
        line-height: 2.3em;
        font-size: 1em;
        height: 2.3em;
    }

    #supervise_list_page .page_header {
        height: 2.3em;
    }

    #supervise_list_page .page_header img {
        height: 1em;
    }

    /*筛选小图标*/
    #supervise_list_page .jszx-bar-item-3 div p img {
        width: 0.6em;
        height: 0.5em;
        padding-left: 0.5em;
    }

    #supervise_list_page .home_list_tr_first_td span {
        margin-left: 0.5em;
    }

    #supervise_list_page .right_img {

        height: 1.5em;
    }

    #supervise_list_page .search_div {
        height: 3.2em;
        padding: 0.5em 1em 0em 1em;
        margin: 0em;
        background: #edeef1;
    }

    #supervise_list_page .list_top_down {
        border-top: 1px solid #dadada;
        padding: 0.5em 0;
        padding-bottom: 0.3em;
        font-size: 14px;
        text-align: left;
    }

    /* #supervise_list_page .handlelist{
      height:3em;
      padding:1em;

    }
    #supervise_list_page .lefthandle{
      float:left;
      width:90%;
      border-bottom: 1px solid #ccc;
      height: 3em;
    }
    #supervise_list_page .lefthandle >div{
      height: 1.5em;
    }
    #supervise_list_page .righthandle{
      line-height: 3em;
      height: 3em;
      float:left;
      width:10%;
      border-bottom: 1px solid #ccc;
    } */
</style>
