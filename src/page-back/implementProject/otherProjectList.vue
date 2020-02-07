<template>
    <div data-role="page" id="other_list_page">

        <tk-header>
            其他项目列表
        </tk-header>

        <div class="page_content" style="">


            <div id="other_wrapper_list" class="jszx-wrapper">
                <div class="jszx-scroller">
                    <div id="other_html" class="html_margin white_background">

                    </div>
                </div>
            </div>
        </div>



    </div>
</template>

<script>
    export default {
        name: "",
        mounted(){
            var that = this;
            window.searchPage = 2;
                initOtherWelcome();
                window.searchPage = 2;


                /*上报*/
                $("#other_list_page .right_img").listen("quickClick", function (e) {
                });
                /*返回*/
                $("#other_list_page .left_img").listen("quickClick", function (e) {
                    if ($(".max-dialog").is(':visible') == true) {
                        $(".max-dialog").remove();
                    } else {
                        that.$router.back();
                    }
                });
                //筛选
                $("#other_list_page .right_btn").listen("quickClick", function (e) {
                    that.$router.push({path:'echartstest'});
                });
                /*  $("#housefindlist").listen("quickClick", function (e) {

                    app_implementProjectListOther(false, 1);
                });
                $("#housefindempty").listen("quickClick", function (e) {
                    $("#house_caseno_list").val("");
                    $("#house_address_list").val("");
                }); */

            /**
             * 初始化
             */
            function initOtherWelcome() {
                $("#other_wrapper_list")[0].style.height = window.localInnerHeight - $("#other_list_page .page_header").height() - $("#other_list_page .jszx-bar-icon-up").height() + "px";
                initScroll({
                    "wrapper": "other_wrapper_list",
                    "dir": "y",
                    "bounce": false,
                    "scrollBar": true,
                    "pullUpLoading": function (reset) { //上拉
                        if (window.searchPage > window.arrayDataLength) {
                            reset(true);
                            toast("没有更多的数据了");
                        } else {

                            if(window.projecrtype=="-1"){
                                app_findUnStartedListOther(reset, window.searchPage++);
                            }else if(window.projecrtype=="-2"){

                                app_findStartedListOther(reset, window.searchPage++);
                            }else if(window.projecrtype=="-3"){

                                app_findFinishListOther(reset, window.searchPage++);
                            }else if(window.projecrtype=="1"||window.projecrtype=="2"||window.projecrtype=="3"||window.projecrtype=="4"||window.projecrtype=="5"){
                                app_findTotalListOther(reset, window.searchPage++, window.projecrtype)
                            }else{
                                app_implementProjectListOther(reset, window.searchPage++);
                            }
                        }
                    },
                    "pullDownLoading": function (reset) { //下拉
                        window.searchPage = 2;

                        if(window.projecrtype=="-1"){
                            app_findUnStartedListOther(reset, 1);
                        }else if(window.projecrtype=="-2"){

                            app_findStartedListOther(reset, 1);
                        }else if(window.projecrtype=="-3"){

                            app_findFinishListOther(reset, 1);
                        }else if(window.projecrtype=="1"||window.projecrtype=="2"||window.projecrtype=="3"||window.projecrtype=="4"||window.projecrtype=="5"){
                            app_findTotalListOther(reset, 1, window.projecrtype)
                        }else{
                            app_implementProjectListOther(reset, 1)
                        }
                    }
                });
                scrollToTop("other_wrapper_list");

                //开始时间

                //结束时间
                if(window.projecrtype=="-1"){
                    app_findUnStartedListOther(false, 1);
                }else if(window.projecrtype=="-2"){

                    app_findStartedListOther(false, 1);
                }else if(window.projecrtype=="-3"){

                    app_findFinishListOther(false, 1);
                }else if(window.projecrtype=="1"||window.projecrtype=="2"||window.projecrtype=="3"||window.projecrtype=="4"||window.projecrtype=="5"){
                    app_findTotalListOther(false, 1, window.projecrtype)
                }else{
                    app_implementProjectListOther(false, 1);
                }

            }

            //接口调用以及dom构建
            function app_implementProjectListOther(reset, pageNum) {
                if (!reset) {
                    //showLoading("正在搜索...");
                }
                if (parseInt(pageNum) < 2) {
                    $("#other_html").empty();
                }
                var obj = "";

                obj += toJson("pageSize", "20") + "&";
                obj += toJson("pageNum", pageNum);

                doPost("ap_proticalProjectList.action", obj, function (data) {
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
                                var status = "";
                                if(array[i].status=="01"){
                                    status = "待审核";
                                }else if(array[i].status=="02"){
                                    status = "审核通过";
                                }else if(array[i].status=="03"){
                                    status = "审核未通过";
                                }
                                var detailarr=array[i].detail.split(",");

                                var html = '';
                                html += '<table cellspacing="0" class="list_second_table gray_line_bottom" cellpadding="0" >';

                                html += '   <tr>';
                                html += '       <td style="white-space:nowrap;overflow:hidden;text-overflow:ellipsis;padding-top:0.5em;padding-bottom:0.5em;"><div style="display:inline-block;width:5px;height:22px;background:#2b6cd2;vertical-align: middle;"></div><span style="margin-left: 1em;display:inline-block;vertical-align: middle;"> ' + array[i].projectname + '<span></td>';
                                /*  html += '       <td style="width:34%;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">' + array[i].checkItem + '</td>'; */
                                html += '       <td style="padding-left:0.5em;width: 5em;" class="oranger_font"></td>';
                                html += '   </tr>';
                                html += '   <tr>';
                                html += '       <td colspan="3" class="list_top_down"><div style="display: inline-block;width:21%;text-align:center;"><div style="height:24px;">总投资</div><div style="height:24px;" class="oranger_font">' + detailarr[0] + '</div></div> ';
                                html +='<div style="background:#dadada;width: 1px;height:2em;display: inline-block;top: 50%; margin-top: -0.5em;"></div>'
                                html += '<div style="display: inline-block;width:23%;text-align:center;"><div style="height:24px;">年度投资</div><div class="oranger_font" style="height:24px;">' + detailarr[1] + '</div></div>';
                                html +='<div style="background:#dadada;width: 1px;height:2em;display: inline-block;top: 50%; margin-top: -0.5em;"></div>'
                                html += '<div style="display: inline-block;width:27%;text-align:center;"><div style="height:24px;">年度完成投资</div><div class="oranger_font" style="height:24px;">' + detailarr[2] + '</div></div>';
                                html +='<div style="background:#dadada;width: 1px;height:2em;display: inline-block;top: 50%; margin-top: -0.5em;"></div>'
                                html += '<div style="display: inline-block;width:25%;text-align:center;"><div style="height:24px;">年度完成率</div><div class="oranger_font" style="height:24px;">' + detailarr[3] + '</div></div>';

                                html += '</td> </tr>';
                                html += '   <tr style="background: #f5f5f5;">';
                                html += '       <td colspan="3" style="border-top:1px solid #dadada;font-size:14px;text-align:left;padding: 0.5em 0;padding-bottom: 0;"><div style="display: inline-block;width:33%;text-align:center;"><div style="height:24px;">检查督办</div><div class="oranger_font" style="height:24px;">' + array[i].superviseno + '</div></div> ';
                                html +='<div style="background:#dadada;width: 1px;height:2em;display: inline-block;top: 50%; margin-top: -0.5em;"></div>'

                                html += '<div style="display: inline-block;width:32%;text-align:center;"><div style="height:24px;">存在问题</div><div class="green_font" style="height:24px;color:#3d8607;">' + array[i].issueno + '</div></div>';
                                var responsibleunits=array[i].responsibleunits;
                                if(array[i].responsibleunits==""){
                                    responsibleunits="无";
                                }
                                html +='<div style="background:#dadada;width: 1px;height:2em;display: inline-block;top: 50%; margin-top: -0.5em;"></div>'
                                html += '<div style="display: inline-block;width:33%;text-align:center;"><div style="height:24px;">责任单位</div><div class="common_font" style="height:24px;color:#333333;">' + responsibleunits + '</div></div>';
                                html += '</td> </tr>';
                                html += '</table>';
                                html += '<div style="height:0.5em;background-color:#ededed;"></div>';
                                var $html = createListRow(html).appendTo("#other_html");
                                $html.data('data', array[i]);
                                $html.listen("quickClick", function (e) {
                                    var data = $(e.currentTarget).data("data");
                                    window.implementInfo = data;
                                    //window.caseRow_id = data.caseno;
                                    that.$router.push({path:'otherProjectDetail'});


                                });
                            }
                        } else {
                            if (parseInt(pageNum) < 2) {
                                noListShow("", "", "", $("#other_html"), "");
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
            //未开工
            //接口调用以及dom构建
            function app_findUnStartedListOther(reset, pageNum) {
                if (!reset) {
                    //showLoading("正在搜索...");
                }
                if (parseInt(pageNum) < 2) {
                    $("#other_html").empty();
                }
                var obj = "";
                obj += toJson("nature", "2") + "&";
                obj += toJson("pageSize", "20") + "&";
                obj += toJson("pageNum", pageNum);

                doPost("findUnStartedList.action", obj, function (data) {
                    if (!reset) {
                        hideLoading();
                    }
                    if (data.total > 0) {
                        if (reset) {
                            reset(true);
                        }
                        var array = data[window.curryear];
                        getDataLength(data.total, 6);
                        if(data[window.curryear].length < 20){
                            console.log('进来了')
                            window.checkNum = 2;
                        }
                        console.log("长度：" + data.totalSize);
                        if (!isNull(array) && array.length > 0) {
                            for (var i = 0; i < array.length; i++) {
                                var status = "";
                                var totalinvestment=array[i].totalinvestment;
                                var investmentamount=array[i].investmentamount;
                                var yearcompleteamount=array[i].yearcompleteamount;
                                var yearcompleterate=array[i].yearcompleterate;
                                if(array[i].totalinvestment==""){
                                    totalinvestment="0";
                                }
                                if(array[i].investmentamount==""){
                                    investmentamount="0";
                                }
                                if(array[i].yearcompleteamount==""){
                                    yearcompleteamount="0";
                                }
                                if(array[i].yearcompleterate==""){
                                    yearcompleterate="0";
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
                                html +='<div style="background:#dadada;width: 1px;height:2em;display: inline-block;top: 50%; margin-top: -0.5em;"></div>'
                                html += '<div style="display: inline-block;width:25%;text-align:center;"><div style="height:24px;">年度投资</div><div class="oranger_font" style="height:24px;">' + investmentamount + '</div></div>';
                                html +='<div style="background:#dadada;width: 1px;height:2em;display: inline-block;top: 50%; margin-top: -0.5em;"></div>'
                                html += '<div style="display: inline-block;width:25%;text-align:center;"><div style="height:24px;">月投资</div><div class="oranger_font">' + yearcompleteamount + '</div></div>';
                                html +='<div style="background:#dadada;width: 1px;height:2em;display: inline-block;top: 50%; margin-top: -0.5em;"></div>'
                                html += '<div style="display: inline-block;width:25%;text-align:center;"><div style="height:24px;">年度完成率</div><div class="oranger_font" style="height:24px;">' + yearcompleterate + '</div></div>';

                                html += '</td> </tr>';
                                html += '   <tr style="background: #f5f5f5;">';
                                html += '       <td colspan="3" style="border-top:1px solid #dadada;font-size:14px;text-align:left;padding: 0.5em 0;padding-bottom: 0;"><div style="display: inline-block;width:32%;text-align:center;"><div style="height:24px;">检查督办</div><div class="oranger_font" style="height:24px;">' + array[i].superviseno + '</div></div> ';
                                html +='<div style="background:#dadada;width: 1px;height:2em;display: inline-block;top: 50%; margin-top: -0.5em;"></div>'
                                html += '<div style="display: inline-block;width:32%;text-align:center;"><div style="height:24px;">存在问题</div><div class="green_font" style="height:24px;color:#3d8607;">' + array[i].issueno + '</div></div>';
                                var responsibleunits=array[i].responsibleunits;
                                if(array[i].responsibleunits==""){
                                    responsibleunits="无";
                                }
                                html +='<div style="background:#dadada;width: 1px;height:2em;display: inline-block;top: 50%; margin-top: -0.5em;"></div>'
                                html += '<div style="display: inline-block;width:32%;text-align:center;"><div style="height:24px;">责任单位</div><div class="common_font" style="height:24px;color:#333333;">' + responsibleunits + '</div></div>';

                                html += '</td> </tr>';
                                //html += '<tr><td colspan="3" style="height:1em;background-color:#dadada;"></td> </tr>';
                                html += '</table>';
                                html += '<div style="height:0.5em;background-color:#ededed;"></div>';
                                var $html = createListRow(html).appendTo("#other_html");
                                $html.data('data', array[i]);
                                $html.listen("quickClick", function (e) {
                                    var data = $(e.currentTarget).data("data");
                                    window.implementInfo = data;
                                    //window.caseRow_id = data.caseno;
                                    that.$router.push({path:'otherProjectDetail'});
                                });
                            }
                        } else {
                            if (parseInt(pageNum) < 2) {
                                noListShow("", "", "", $("#other_html"), "");
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
            function app_findStartedListOther(reset, pageNum) {
                if (!reset) {
                    //showLoading("正在搜索...");
                }
                if (parseInt(pageNum) < 2) {
                    $("#other_html").empty();
                }
                var obj = "";
                obj += toJson("nature", "2") + "&";
                obj += toJson("pageSize", "20") + "&";
                obj += toJson("pageNum", pageNum);

                doPost("findStartedList.action", obj, function (data) {
                    if (!reset) {
                        hideLoading();
                    }
                    if (data.total > 0) {
                        if (reset) {
                            reset(true);
                        }
                        var array = data[window.curryear];
                        getDataLength(data.total, 6);
                        if(data[window.curryear].length < 20){
                            console.log('进来了')
                            window.checkNum = 2;
                        }
                        console.log("长度：" + data.totalSize);
                        if (!isNull(array) && array.length > 0) {
                            for (var i = 0; i < array.length; i++) {
                                var status = "";
                                var totalinvestment=array[i].totalinvestment;
                                var investmentamount=array[i].investmentamount;
                                var yearcompleteamount=array[i].yearcompleteamount;
                                var yearcompleterate=array[i].yearcompleterate;
                                if(array[i].totalinvestment==""){
                                    totalinvestment="0";
                                }
                                if(array[i].investmentamount==""){
                                    investmentamount="0";
                                }
                                if(array[i].yearcompleteamount==""){
                                    yearcompleteamount="0";
                                }
                                if(array[i].yearcompleterate==""){
                                    yearcompleterate="0";
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
                                html +='<div style="background:#dadada;width: 1px;height:2em;display: inline-block;top: 50%; margin-top: -0.5em;"></div>'
                                html += '<div style="display: inline-block;width:25%;text-align:center;"><div style="height:24px;">年度投资</div><div class="oranger_font" style="height:24px;">' + investmentamount + '</div></div>';
                                html +='<div style="background:#dadada;width: 1px;height:2em;display: inline-block;top: 50%; margin-top: -0.5em;"></div>'
                                html += '<div style="display: inline-block;width:25%;text-align:center;"><div style="height:24px;">月投资</div><div class="oranger_font">' + yearcompleteamount + '</div></div>';
                                html +='<div style="background:#dadada;width: 1px;height:2em;display: inline-block;top: 50%; margin-top: -0.5em;"></div>'
                                html += '<div style="display: inline-block;width:25%;text-align:center;"><div style="height:24px;">年度完成率</div><div class="oranger_font" style="height:24px;">' + yearcompleterate + '</div></div>';

                                html += '</td> </tr>';
                                html += '   <tr style="background: #f5f5f5;">';
                                html += '       <td colspan="3" style="border-top:1px solid #dadada;font-size:14px;text-align:left;padding: 0.5em 0;padding-bottom: 0;"><div style="display: inline-block;width:32%;text-align:center;"><div style="height:24px;">检查督办</div><div class="oranger_font" style="height:24px;">' + array[i].superviseno + '</div></div> ';
                                html +='<div style="background:#dadada;width: 1px;height:2em;display: inline-block;top: 50%; margin-top: -0.5em;"></div>'
                                html += '<div style="display: inline-block;width:32%;text-align:center;"><div style="height:24px;">存在问题</div><div class="green_font" style="height:24px;color:#3d8607;">' + array[i].issueno + '</div></div>';
                                var responsibleunits=array[i].responsibleunits;
                                if(array[i].responsibleunits==""){
                                    responsibleunits="无";
                                }
                                html +='<div style="background:#dadada;width: 1px;height:2em;display: inline-block;top: 50%; margin-top: -0.5em;"></div>'
                                html += '<div style="display: inline-block;width:32%;text-align:center;"><div style="height:24px;">责任单位</div><div class="common_font" style="height:24px;color:#333333;">' + responsibleunits + '</div></div>';

                                html += '</td> </tr>';
                                //html += '<tr><td colspan="3" style="height:1em;background-color:#dadada;"></td> </tr>';
                                html += '</table>';
                                html += '<div style="height:0.5em;background-color:#ededed;"></div>';
                                var $html = createListRow(html).appendTo("#other_html");
                                $html.data('data', array[i]);
                                $html.listen("quickClick", function (e) {
                                    var data = $(e.currentTarget).data("data");
                                    window.implementInfo = data;
                                    //window.caseRow_id = data.caseno;
                                    that.$router.push({path:'otherProjectDetail'});
                                });
                            }
                        } else {
                            if (parseInt(pageNum) < 2) {
                                noListShow("", "", "", $("#other_html"), "");
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
            //已竣工
            function app_findFinishListOther(reset, pageNum) {
                if (!reset) {
                    //showLoading("正在搜索...");
                }
                if (parseInt(pageNum) < 2) {
                    $("#other_html").empty();
                }
                var obj = "";
                obj += toJson("nature", "2") + "&";
                obj += toJson("pageSize", "20") + "&";
                obj += toJson("pageNum", pageNum);

                doPost("findFinishList.action", obj, function (data) {
                    if (!reset) {
                        hideLoading();
                    }
                    if (data.total > 0) {
                        if (reset) {
                            reset(true);
                        }
                        var array = data[window.curryear];
                        getDataLength(data.total, 6);
                        if(data[window.curryear].length < 20){
                            console.log('进来了')
                            window.checkNum = 2;
                        }
                        console.log("长度：" + data.totalSize);
                        if (!isNull(array) && array.length > 0) {
                            for (var i = 0; i < array.length; i++) {
                                var status = "";
                                var totalinvestment=array[i].totalinvestment;
                                var investmentamount=array[i].investmentamount;
                                var yearcompleteamount=array[i].yearcompleteamount;
                                var yearcompleterate=array[i].yearcompleterate;
                                if(array[i].totalinvestment==""){
                                    totalinvestment="0";
                                }
                                if(array[i].investmentamount==""){
                                    investmentamount="0";
                                }
                                if(array[i].yearcompleteamount==""){
                                    yearcompleteamount="0";
                                }
                                if(array[i].yearcompleterate==""){
                                    yearcompleterate="0";
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
                                html +='<div style="background:#dadada;width: 1px;height:2em;display: inline-block;top: 50%; margin-top: -0.5em;"></div>'
                                html += '<div style="display: inline-block;width:25%;text-align:center;"><div style="height:24px;">年度投资</div><div class="oranger_font" style="height:24px;">' + investmentamount + '</div></div>';
                                html +='<div style="background:#dadada;width: 1px;height:2em;display: inline-block;top: 50%; margin-top: -0.5em;"></div>'
                                html += '<div style="display: inline-block;width:25%;text-align:center;"><div style="height:24px;">月投资</div><div class="oranger_font">' + yearcompleteamount + '</div></div>';
                                html +='<div style="background:#dadada;width: 1px;height:2em;display: inline-block;top: 50%; margin-top: -0.5em;"></div>'
                                html += '<div style="display: inline-block;width:25%;text-align:center;"><div style="height:24px;">年度完成率</div><div class="oranger_font" style="height:24px;">' + yearcompleterate + '</div></div>';

                                html += '</td> </tr>';
                                html += '   <tr style="background: #f5f5f5;">';
                                html += '       <td colspan="3" style="border-top:1px solid #dadada;font-size:14px;text-align:left;padding: 0.5em 0;padding-bottom: 0;"><div style="display: inline-block;width:32%;text-align:center;"><div style="height:24px;">检查督办</div><div class="oranger_font" style="height:24px;">' + array[i].superviseno + '</div></div> ';
                                html +='<div style="background:#dadada;width: 1px;height:2em;display: inline-block;top: 50%; margin-top: -0.5em;"></div>'
                                html += '<div style="display: inline-block;width:32%;text-align:center;"><div style="height:24px;">存在问题</div><div class="green_font" style="height:24px;color:#3d8607;">' + array[i].issueno + '</div></div>';
                                var responsibleunits=array[i].responsibleunits;
                                if(array[i].responsibleunits==""){
                                    responsibleunits="无";
                                }
                                html +='<div style="background:#dadada;width: 1px;height:2em;display: inline-block;top: 50%; margin-top: -0.5em;"></div>'
                                html += '<div style="display: inline-block;width:32%;text-align:center;"><div style="height:24px;">责任单位</div><div class="common_font" style="height:24px;color:#333333;">' + responsibleunits + '</div></div>';

                                html += '</td> </tr>';
                                //html += '<tr><td colspan="3" style="height:1em;background-color:#dadada;"></td> </tr>';
                                html += '</table>';
                                html += '<div style="height:0.5em;background-color:#ededed;"></div>';
                                var $html = createListRow(html).appendTo("#other_html");
                                $html.data('data', array[i]);
                                $html.listen("quickClick", function (e) {
                                    var data = $(e.currentTarget).data("data");
                                    window.implementInfo = data;
                                    //window.caseRow_id = data.caseno;
                                    that.$router.push({path:'otherProjectDetail'});
                                });
                            }
                        } else {
                            if (parseInt(pageNum) < 2) {
                                noListShow("", "", "", $("#other_html"), "");
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
            function app_findTotalListOther(reset, pageNum, type) {
                if (!reset) {
                    //showLoading("正在搜索...");
                }
                if (parseInt(pageNum) < 2) {
                    $("#other_html").empty();
                }
                var obj = "";
                obj += toJson("type", type) + "&";
                obj += toJson("pageSize", "20") + "&";
                obj += toJson("nature", "2") + "&";
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
                        if(data[window.curryear].length < 20){
                            console.log('进来了')
                            window.checkNum = 2;
                        }
                        console.log("长度：" + data.totalSize);
                        if (!isNull(array) && array.length > 0) {
                            for (var i = 0; i < array.length; i++) {
                                var status = "";
                                var totalinvestment=array[i].totalinvestment;
                                var investmentamount=array[i].investmentamount;
                                var yearcompleteamount=array[i].yearcompleteamount;
                                var yearcompleterate=array[i].yearcompleterate;
                                if(array[i].totalinvestment==""){
                                    totalinvestment="0";
                                }
                                if(array[i].investmentamount==""){
                                    investmentamount="0";
                                }
                                if(array[i].yearcompleteamount==""){
                                    yearcompleteamount="0";
                                }
                                if(array[i].yearcompleterate==""){
                                    yearcompleterate="0";
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
                                html +='<div style="background:#dadada;width: 1px;height:2em;display: inline-block;top: 50%; margin-top: -0.5em;"></div>'
                                html += '<div style="display: inline-block;width:25%;text-align:center;"><div style="height:24px;">年度投资</div><div class="oranger_font" style="height:24px;">' + investmentamount + '</div></div>';
                                html +='<div style="background:#dadada;width: 1px;height:2em;display: inline-block;top: 50%; margin-top: -0.5em;"></div>'
                                html += '<div style="display: inline-block;width:25%;text-align:center;"><div style="height:24px;">月投资</div><div class="oranger_font">' + yearcompleteamount + '</div></div>';
                                html +='<div style="background:#dadada;width: 1px;height:2em;display: inline-block;top: 50%; margin-top: -0.5em;"></div>'
                                html += '<div style="display: inline-block;width:25%;text-align:center;"><div style="height:24px;">年度完成率</div><div class="oranger_font" style="height:24px;">' + yearcompleterate + '</div></div>';

                                html += '</td> </tr>';
                                html += '   <tr style="background: #f5f5f5;">';
                                html += '       <td colspan="3" style="border-top:1px solid #dadada;font-size:14px;text-align:left;padding: 0.5em 0;padding-bottom: 0;"><div style="display: inline-block;width:32%;text-align:center;"><div style="height:24px;">检查督办</div><div class="oranger_font" style="height:24px;">' + array[i].superviseno + '</div></div> ';
                                html +='<div style="background:#dadada;width: 1px;height:2em;display: inline-block;top: 50%; margin-top: -0.5em;"></div>'
                                html += '<div style="display: inline-block;width:32%;text-align:center;"><div style="height:24px;">存在问题</div><div class="green_font" style="height:24px;color:#3d8607;">' + array[i].issueno + '</div></div>';
                                var responsibleunits=array[i].responsibleunits;
                                if(array[i].responsibleunits==""){
                                    responsibleunits="无";
                                }
                                html +='<div style="background:#dadada;width: 1px;height:2em;display: inline-block;top: 50%; margin-top: -0.5em;"></div>'
                                html += '<div style="display: inline-block;width:32%;text-align:center;"><div style="height:24px;">责任单位</div><div class="common_font" style="height:24px;color:#333333;">' + responsibleunits + '</div></div>';

                                html += '</td> </tr>';
                                //html += '<tr><td colspan="3" style="height:1em;background-color:#dadada;"></td> </tr>';
                                html += '</table>';
                                html += '<div style="height:0.5em;background-color:#ededed;"></div>';
                                var $html = createListRow(html).appendTo("#other_html");
                                $html.data('data', array[i]);
                                $html.listen("quickClick", function (e) {
                                    var data = $(e.currentTarget).data("data");
                                    window.implementInfo = data;
                                    //window.caseRow_id = data.caseno;
                                    that.$router.push({path:'otherProjectDetail'});f
                                });
                            }
                        } else {
                            if (parseInt(pageNum) < 2) {
                                noListShow("", "", "", $("#other_html"), "");
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
    #other_list_page .page_header_title .jszx-bar-icon-up {
        background: #fafafa;
    }

    #other_list_page .home_list_tr_first_td {
        padding: 0.7em;
        padding-left: 0em;
    }

    #other_list_page .right_btn {
        width: 3.5em;
        height: 1.5em;
        color: #ffffff;
    }

    #other_list_page .right_btn .btn_div {
        color: #ffffff;
        border: 1px solid #ffffff;
        height: 1.7em;
        line-height: 1.7em;
        top: -0.5em;
        background: orange;
        text-align: center;
    }

    #other_list_page .jszx-bar-item-3 > div {
        width: 33.3%;
    }

    #other_list_page .tab_oranger_font p,
    .tab_bloack_font p, #other_list_page .jszx-bar-item-3 div p {
        height: 2.8em;
        line-height: 2.8em;
    }

    /*筛选小图标*/
    #other_list_page .jszx-bar-item-3 div p img {
        width: 0.6em;
        height: 0.5em;
        padding-left: 0.5em;
    }

    #other_list_page .home_list_tr_first_td span {
        margin-left: 0.5em;
    }
    #other_list_page .right_img {

        height: 1.5em;
    }
    #other_list_page .search_div{
        height: 3.2em;
        padding: 0.5em 1em 0em 1em;
        margin: 0em;
        background: #edeef1;
    }
    #other_list_page .list_top_down{
        border-top:1px solid #dadada;
        padding: 0.5em 0;
        padding-bottom:0.3em;
        font-size: 14px;
        text-align: left;
    }
    /* #other_list_page .handlelist{
      height:3em;
      padding:1em;

    }

    #other_list_page .lefthandle{
      float:left;
      width:90%;
      border-bottom: 1px solid #ccc;
      height: 3em;
    }
    #other_list_page .lefthandle >div{
      height: 1.5em;
    }
    #other_list_page .righthandle{
      line-height: 3em;
      height: 3em;
      float:left;
      width:10%;
      border-bottom: 1px solid #ccc;
    } */
    #other_list_page .projectname_line{
        display:inline-block;width:5px;height:22px;background:#2b6cd2;vertical-align: middle;
    }
    #other_list_page .projectname{
        margin-left: 1em;
        display:inline-block;
        vertical-align: middle;
    }
    #other_list_page .green_font{
        color:#3d8607;
    }
    #other_list_page .common_font{
        color:#333333;
    }
    #other_list_page .alldivhight{
        height:24px;
    }
    #other_list_page .page_header .page_header_title{
        line-height: 2.3em;
        font-size: 1em;
        height:2.3em;
    }
    #other_list_page .page_header{
        height:2.3em;
    }
    #other_list_page .page_header img{
        height: 1em;
    }
</style>
