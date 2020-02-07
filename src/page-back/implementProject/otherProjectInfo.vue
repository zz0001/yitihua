<template>
    <div data-role="page" id="other_info">
        <tk-header>
            其他项目
        </tk-header>
        <div class="page_content">
            <div id="other_wrapper" class="jszx-wrapper" style="overflow-y: auto;">
                <div class="jszx-scroller linkList_home_tab">
                    <div>
                        <table class="inp_table" cellpadding="0" cellspacing="0">
                            <tr>
                                <td style="padding-top:0.5em;padding-bottom:0.5em;" class="gray_line_bottom">项目数</td>
                                <td colspan="2" class="gray_line_bottom textalginright">
                                    <span id="other_projectnum">0</span>
                                </td>
                            </tr>
                            <tr>
                                <td style="padding-top:0.5em;padding-bottom:0.5em;" class="gray_line_bottom">项目总投资</td>
                                <td colspan="2" class="gray_line_bottom textalginright">
                                    <span id="other_projectTotal">0</span><span>万元</span>
                                </td>
                            </tr>


                            <tr>
                                <td style="padding-top:0.5em;padding-bottom:0.5em;" class="gray_line_bottom">年度计划投资</td>
                                <td colspan="2" class="gray_line_bottom textalginright">
                                    <span id="other_projectYearPlan">0</span><span>万元</span>
                                </td>
                            </tr>
                            <tr>
                                <td style="padding-top:0.5em;padding-bottom:0.5em;" class="gray_line_bottom">未开工项目数</td>
                                <td id="other_notStartprojectTd" colspan="2" class="gray_line_bottom textalginright">
                                    <span id="other_notStartproject">0</span>
                                </td>
                            </tr>
                            <tr>
                                <td style="padding-top:0.5em;padding-bottom:0.5em;" class="gray_line_bottom">已开工项目数</td>
                                <td id="other_areadyStartprojectTd" colspan="2" class="gray_line_bottom textalginright">
                                    <span id="other_areadyStartproject">0</span>
                                </td>
                            </tr>
                            <tr>
                                <td style="padding-top:0.5em;padding-bottom:0.5em;" class="gray_line_bottom">已竣工项目数</td>
                                <td id="other_areadyFinishprojectTd" colspan="2"
                                    class="gray_line_bottom textalginright">
                                    <span id="other_areadyFinishproject">0</span>
                                </td>
                            </tr>

                        </table>

                    </div>
                    <div style="text-align:center;width:100%;padding-top: 0.5em;">
                        <div id="completion_amount_other" class="echartsDiv1"
                             style="width:35%;background-color:#3977E6;color:#fff;font-size:14px;">投资完成量(万元)
                        </div>
                        <div id="completion_rate_other" class="echartsDiv1"
                             style="width:30%;border-left: 0;border-right: 0;font-size:14px;">年度完成率(%)
                        </div>
                        <div id="superviseTask_other" class="echartsDiv1" style="width: 25%;font-size:14px;">督察督办</div>
                    </div>
                    <div>
                        <div id="other_main" style="width: 100%;height:300px"></div>
                    </div>
                    <div style="padding-top:1em;">
                        <div style="float:left;width:5em;background: #fff;">
                            <ul id="other_projecttypeNameUl">
                                <li id="other_projecttypeNameLi" class="leaderli" style="color:#888;">类别</li>

                            </ul>

                        </div>
                        <div style="background: #fff;float:left; width:calc(100% - 5em);overflow-x:auto;">
                            <div style="width:719px;">
                                <div style="float:left">
                                    <ul id="other_investmentamountUl" style="width:100px">
                                        <li id="other_investmentamountLi" class="leaderli" style="color:#888;">年度计划</li>
                                    </ul>
                                </div>
                                <div style="float:left">
                                    <ul id="other_yearcompleteamountUl" style="width:100px">
                                        <li class="leaderli" style="color:#888;">1-12月投资</li>

                                    </ul>
                                </div>
                                <div style="float:left">
                                    <ul id="other_yearcompleterateUl" style="width:100px">
                                        <li class="leaderli" style="color:#888;">年度完成率</li>

                                    </ul>
                                </div>
                                <div style="float:left">
                                    <ul id="other_numUl" style="width:100px">
                                        <li class="leaderli" style="color:#888;">项目数</li>
                                    </ul>
                                </div>
                                <div style="float:left">
                                    <ul id="other_totalinvestmentUl" style="width:100px">
                                        <li class="leaderli" style="color:#888;">总投资</li>

                                    </ul>
                                </div>
                                <div style="float:left">
                                    <ul id="other_cumulativeinvestmentUl" style="width:100px">
                                        <li class="leaderli" style="color:#888;">累计投资</li>

                                    </ul>
                                </div>
                                <div style="float:left">
                                    <ul id="other_totalcompleterateUl" style="width:115px">
                                        <li class="leaderli" style="color:#888;">总投资完成率</li>

                                    </ul>
                                </div>
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
            //分类
            $("#other_info").on("click", ".leaderli", function (e) {
                var type = $(e.currentTarget).attr("type");
                window.projecrtype = type;
                if (type != "0") {
                    that.$router.push({path: '/otherProjectList'});
                }
            });

            //设置input和textarea的样式
            $("input").addClass("small gray_dark_font ui-input-text ui-body-c ui-corner-all ui-shadow-inset");
            $("textarea").addClass("ui-input-text ui-body-c ui-corner-all ui-shadow-inset");
            findCompletionAmountOther();
            initOtherWaitWelcome();
            //返回
            $("#other_info .back-button").listen("quickClick", function (e) {
                that.$router.back();
            });
            //投资完成量(亿元)
            $("#other_info #completion_amount_other").listen("quickClick", function (e) {
                $(".echartsDiv1").css("background-color", "#fff");
                $(".echartsDiv1").css("color", "#3977E6");
                $("#completion_amount_other").css("background-color", "#3977E6");
                $("#completion_amount_other").css("color", "#fff");
                findCompletionAmountOther();
            });
            //年度完成率(%)
            $("#other_info #completion_rate_other").listen("quickClick", function (e) {
                $(".echartsDiv1").css("background-color", "#fff");
                $(".echartsDiv1").css("color", "#3977E6");
                $("#completion_rate_other").css("background-color", "#3977E6");
                $("#completion_rate_other").css("color", "#fff");
                findAnnualCompleteRateOther();
            });
            //督察督办
            $("#other_info #superviseTask_other").listen("quickClick", function (e) {
                $(".echartsDiv1").css("background-color", "#fff");
                $(".echartsDiv1").css("color", "#3977E6");
                $("#superviseTask_other").css("background-color", "#3977E6");
                $("#superviseTask_other").css("color", "#fff");
                findSuperviseTaskCountOther();
            });
            //为开工
            $("#other_info #other_notStartprojectTd").listen("quickClick", function (e) {
                window.projecrtype = "-1";
                that.$router.push({path: '/otherProjectList'});

            });
            //已开工
            $("#other_info #other_areadyStartprojectTd").listen("quickClick", function (e) {
                window.projecrtype = "-2";
                that.$router.push({path: '/otherProjectList'});

            });
            //已竣工
            $("#other_info #other_areadyFinishprojectTd").listen("quickClick", function (e) {
                window.projecrtype = "-3";
                that.$router.push({path: '/otherProjectList'});
            });

            function initOtherWaitWelcome() {
                $("#other_wrapper")[0].style.height = window.localInnerHeight - $("#other_info .page_header").height() + "px";
                /*   initScroll({
                        "wrapper": "other_wrapper",
                        "dir": "y",
                        "bounce": false,
                        "scrollBar": false
                    });
                     scrollToTop("other_wrapper");  */


                /*   var date=new Date;
                   var year=date.getFullYear();
                   var month=date.getMonth()+1;
                   month =(month<10 ? "0"+month:month);
                   window.curryear=year+"";
                   window.currmonth=month; */
                findItemListOther();
                findProjectTypeList();
                $(".echartsDiv1").css("background-color", "#fff");
                $(".echartsDiv1").css("color", "#3977E6");
                $("#completion_amount_other").css("background-color", "#3977E6");
                $("#completion_amount_other").css("color", "#fff");
                // imgWidthUl(upload_imgscroll, upload_imgwrapper, upload_ultable)
            }

            //数字自增到某一值动画参数（目标元素,自定义配置）
            function NumAutoPlusAnimation(targetEle, options) {

                /*可以自己改造下传入的参数，按照自己的需求和喜好封装该函数*/
                //不传配置就把它绑定在相应html元素的data-xxxx属性上吧
                options = options || {};
                var id = "#" + targetEle;
                var $this = $(id),
                    time = options.time || $this.data('time'), //总时间--毫秒为单位
                    finalNum = options.num || $this.data('value'), //要显示的真实数值
                    regulator = options.regulator || 100, //调速器，改变regulator的数值可以调节数字改变的速度

                    step = finalNum / (time / regulator),/*每30ms增加的数值--*/
                    count = 0, //计数器
                    initial = 0;

                var timer = setInterval(function () {

                    count = count + step;

                    if (count >= finalNum) {
                        clearInterval(timer);
                        count = finalNum;
                    }
                    //t未发生改变的话就直接返回
                    //避免调用text函数，提高DOM性能
                    var t = Math.floor(count);
                    if (t == initial) return;

                    initial = t;

                    $this.text(initial);
                }, 30);
            }

            function showEcharts(leadername, sum) {

                var myChart = echarts.init(document.getElementById('other_main'));
                myChart.clear();
                //初始化数据
                var category = leadername;
                var barData = sum;

                var option = {
                    tooltip: {
                        trigger: 'axis',
                        axisPointer: {
                            type: 'shadow'
                        }
                    },
                    grid: {
                        left: '8%',
                        right: '16%',
                        top: '8%',
                        bottom: '3%',
                        containLabel: true
                    },
                    xAxis: {
                        type: 'value',
                        axisLabel: {
                            inside: true,
                            textStyle: {
                                color: '#fff'
                            }
                        },
                        axisTick: {
                            show: false
                        },
                        axisLine: {
                            show: false
                        },
                        splitLine: {show: false}
                    },
                    yAxis: {
                        type: 'category',
                        data: category,
                        splitLine: {show: false},
                        axisLine: {
                            show: true,
                            lineStyle: {color: '#888'}
                        },
                        axisLabel: {
                            color: '#555',
                            fontSize: 12
                        },
                        axisTick: {
                            show: false
                        },
                        offset: 10,
                        nameTextStyle: {
                            fontSize: 10
                        }
                    },
                    series: [
                        {
                            name: '数量',
                            type: 'bar',
                            data: barData,
                            barWidth: 14,
                            barGap: 10,
                            smooth: true,
                            label: {
                                normal: {
                                    show: true,
                                    position: 'right',
                                    offset: [5, -2],
                                    textStyle: {
                                        color: '#999',
                                        fontSize: 14
                                    }
                                }
                            },
                            color: '#3977E6'
                        }
                    ]
                };
                myChart.setOption(option);
            }

            //环形图
            function showPieEcharts(leadername, sum) {

                var myChart = echarts.init(document.getElementById('other_main'));
                myChart.clear();
                //初始化数据
                var category = leadername;
                var barData = sum;
                var color = ["#4D8DF7", "#ABD16C", "#FAB93B", "#4D75CD", "#FA4C41", "#7ACCF1", "#A888B9", "#858485", "#E75FC3", "#F59A8F", "#F6D54A", "#45DBF7"];

                var option = {

                    legend: {
                        type: 'scroll',
                        orient: 'vertical',
                        x: 'right',
                        left: "75%",
                        top: 20,
                        bottom: 20,
                        data: leadername
                    },
                    color: color,
                    series: [
                        {
                            name: '访问来源',
                            type: 'pie',
                            radius: ['30%', '40%'],
                            center: ['35%', '50%'],
                            avoidLabelOverlap: false,
                            label: {
                                normal: {
                                    show: false,
                                    position: 'center'
                                },
                                emphasis: {
                                    show: true,
                                    textStyle: {
                                        fontSize: '25',
                                        fontWeight: 'bold'
                                    }
                                }
                            },
                            labelLine: {
                                normal: {
                                    show: false
                                }
                            },
                            data: sum
                        }
                    ]
                };

                myChart.setOption(option);
            }

            //查数据
            function findItemListOther() {
                var obj = "";
                obj += toJson("nature", "2");
                doPost("findItemList.action", obj, function (data) {

                    console.log(data[window.curryear])
                    var total = data[window.curryear].total;
                    var othersum = data[window.curryear].sum;
                    var otherannual = data[window.curryear].annual;
                    var unstarted = data[window.curryear].unstarted;
                    var started = data[window.curryear].started;
                    var finished = data[window.curryear].finished;
                    if (data[window.curryear].total == "") {
                        total = "0";
                    }
                    if (data[window.curryear].sum == "") {
                        othersum = "0";
                    }
                    if (data[window.curryear].annual == "") {
                        otherannual = "0";
                    }
                    if (data[window.curryear].unstarted == "") {
                        unstarted = "0";
                    }
                    if (data[window.curryear].started == "") {
                        started = "0";
                    }
                    if (data[window.curryear].finished == "") {
                        finished = "0";
                    }
                    NumAutoPlusAnimation("other_projectnum", {
                        time: 1500,
                        num: total,
                        regulator: 50
                    });
                    NumAutoPlusAnimation("other_projectTotal", {
                        time: 1500,
                        num: othersum,
                        regulator: 50
                    });
                    NumAutoPlusAnimation("other_projectYearPlan", {
                        time: 1500,
                        num: otherannual,
                        regulator: 50
                    });
                    NumAutoPlusAnimation("other_notStartproject", {
                        time: 1500,
                        num: unstarted,
                        regulator: 50
                    });
                    NumAutoPlusAnimation("other_areadyStartproject", {
                        time: 1500,
                        num: started,
                        regulator: 50
                    });
                    NumAutoPlusAnimation("other_areadyFinishproject", {
                        time: 1500,
                        num: finished,
                        regulator: 50
                    })

                }, "");

            }

            //图标数据投资完成量
            function findCompletionAmountOther() {
                var obj = "";
                obj += toJson("nature", "2");
                doPost("findCompletionAmount.action", obj, function (data) {

                    console.log(data[window.curryear]);
                    var leadername = [];
                    var leaderval = [];
                    for (var i = 0; i < data[window.curryear].length; i++) {
                        var name = data[window.curryear][i].leadername;
                        var val = data[window.curryear][i].sum;
                        leadername.push(name);
                        leaderval.push(val);
                    }
                    showEcharts(leadername, leaderval);

                }, "");
            }

            //图标数据年度完成率
            function findAnnualCompleteRateOther() {
                var obj = "";
                obj += toJson("nature", "2");
                doPost("findAnnualCompleteRate.action", obj, function (data) {

                    console.log(data[window.curryear]);
                    var leadername = [];
                    var leaderval = [];
                    for (var i = 0; i < data[window.curryear].length; i++) {
                        var name = data[window.curryear][i].leadername;
                        var val = data[window.curryear][i].result;
                        leadername.push(name);
                        leaderval.push(val);
                    }
                    showEcharts(leadername, leaderval);

                }, "");
            }

            //图标数据督察督办
            function findSuperviseTaskCountOther() {
                var obj = "";
                obj += toJson("nature", "2");
                doPost("findSuperviseTaskCount.action", obj, function (data) {

                    console.log(data[window.curryear]);
                    var leadername = [];
                    var leaderval = [];
                    for (var i = 0; i < data[window.curryear].length; i++) {
                        var obj = {};

                        obj.name = data[window.curryear][i].leadername;
                        obj.value = data[window.curryear][i].num;
                        leadername.push(obj.name);
                        leaderval.push(obj);
                    }
                    showPieEcharts(leadername, leaderval);

                }, "");
            }

            //类别项目数列表
            function findProjectTypeList() {
                var obj = "";
                obj += toJson("nature", "2") + "&";
                obj += toJson("pageSize", "40") + "&";
                obj += toJson("pageNum", "1");
                doPost("findProjectTypeList.action", obj, function (data) {

                    console.log(data[window.curryear]);
                    var typename = [];
                    var investmentamount = [];
                    var yearcompleteamount = [];
                    var yearcompleterate = [];
                    var num = [];
                    var totalinvestment = [];
                    var cumulativeinvestment = [];
                    var totalcompleterate = [];
                    $("#other_projecttypeNameUl li:not(:first)").remove();
                    $("#other_investmentamountUl li:not(:first)").remove();
                    $("#other_yearcompleteamountUl li:not(:first)").remove();
                    $("#other_yearcompleterateUl li:not(:first)").remove();
                    $("#other_numUl li:not(:first)").remove();
                    $("#other_totalinvestmentUl li:not(:first)").remove();
                    $("#other_cumulativeinvestmentUl li:not(:first)").remove();
                    $("#other_totalcompleterateUl li:not(:first)").remove();
                    for (var i = 0; i < data[window.curryear].length; i++) {
                        var type = data[window.curryear][i].type;
                        if (!data[window.curryear][i].type) {
                            type = "0";
                        }
                        var name = data[window.curryear][i].typename;
                        var style = "";
                        if (type == "0") {
                            style = "color:rgb(57, 119, 230);"
                        }
                        htmls = '';
                        htmls += '<li class="leaderli" type="' + type + '" style="color:#444">' + name + '</li>';
                        $("#other_projecttypeNameUl").append(htmls);
                        var invest = data[window.curryear][i].investmentamount;
                        htmls1 = '';
                        htmls1 += '<li class="leaderli" type="' + type + '" style="' + style + '">' + invest + '</li>'
                        $("#other_investmentamountUl").append(htmls1);
                        var completeamount = data[window.curryear][i].yearcompleteamount;
                        htmls2 = '';
                        htmls2 += '<li class="leaderli" type="' + type + '" style="' + style + '">' + completeamount + '</li>'
                        $("#other_yearcompleteamountUl").append(htmls2);
                        var completerate = data[window.curryear][i].yearcompleterate;
                        htmls3 = '';
                        htmls3 += '<li class="leaderli" type="' + type + '" style="' + style + '">' + completerate + '</li>'
                        $("#other_yearcompleterateUl").append(htmls3);
                        var no = data[window.curryear][i].num;
                        htmls4 = '';
                        htmls4 += '<li class="leaderli" type="' + type + '" style="' + style + '">' + no + '</li>'
                        $("#other_numUl").append(htmls4);
                        var total = data[window.curryear][i].totalinvestment;
                        htmls5 = '';
                        htmls5 += '<li class="leaderli" type="' + type + '" style="' + style + '">' + total + '</li>'
                        $("#other_totalinvestmentUl").append(htmls5);
                        var cumulative = data[window.curryear][i].cumulativeinvestment;
                        htmls6 = '';
                        htmls6 += '<li class="leaderli" type="' + type + '" style="' + style + '">' + cumulative + '</li>'
                        $("#other_cumulativeinvestmentUl").append(htmls6);
                        var totalcomp = data[window.curryear][i].totalcompleterate;
                        htmls7 = '';
                        htmls7 += '<li class="leaderli" type="' + type + '" style="' + style + '">' + totalcomp + '</li>'
                        $("#other_totalcompleterateUl").append(htmls7);

                    }


                }, "");
            }
        }
    }
</script>

<style scoped>
    #other_info .red_num {
        width: 1.85em;
        height: 1.9em;
        border-radius: 2em;
        line-height: 1.92em;
        border: 1px solid red;
        margin-left: 0em;
        top: 2.2em;
        position: absolute;
        left: 60%;
    }

    .wait_work_welcome_order_rednum_voice {
        width: 1.85em;
        height: 1.9em;
        border-radius: 2em;
        line-height: 1.92em;
        border: 1px solid red;
        margin-left: 0em;
        top: 2.2em;
        position: absolute;
        left: 60%;
        text-align: center;
        padding: 0.1em;
        background: red;
        font-size: 0.5em;
        color: #FFF;
    }

    .linkList_home_tab {
        padding-top: 0.5em;
        padding-bottom: 0.5em;
    }

    /*    #other_info .linkList_home_tab > div {
           width: 33.3%;
           height: 5.5em;
           position: relative;
           text-align: center;
           float: left;
       }
       #other_info .linkList_home_tab  div p{
           padding-top: 0.4em;
           text-align: center;
           font-size: 0.9em;
       } */
    #other_info .leaderli {
        line-height: 2.2em;
        border-bottom: 1px solid #dadada;
        padding-left: 0.5em;
        font-size: 0.9em;
        color: red;
        text-align: center;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }

    #other_info .top_tab {
        height: 15.5em;
        padding-top: 0.5em;
        padding-bottom: 0.5em;
        position: relative;
        width: 100%;
        background: #ffffff;
    }

    #other_info .top_tab > div {
        width: 33.3%;
        height: 5.5em;
        position: relative;
        text-align: center;
        float: left;
    }

    #other_info .top_tab div img {
        width: 3em;
        height: 3em;
        position: relative;
    }

    #other_info .top_tab div p {
        padding-top: 0.4em;
        text-align: center;
        font-size: 0.9em;
    }

    .echartsDiv1 {
        display: inline-block;
        line-height: 2em;
        border: 1px solid #3977E6;
        color: #3977E6;
    }

    .textalginright {
        text-align: right;
        padding-right: 1.3em;
    }

    #other_info .page_header .page_header_title {
        line-height: 2.3em;
        font-size: 1em;
        height: 2.3em;
    }

    #other_info .page_header {
        height: 2.3em;
    }

    #other_info .page_header img {
        height: 1em;
    }

    #other_info .gray_line_bottom {

        border-bottom: 1px solid #dadada;
    }

    #other_info .inp_table tr td span {
        font-size: 0.85em;
    }

    #other_info .inp_table tr td:first-child {
        padding-left: 1em;
        color: #888;
        font-size: 0.85em;
    }
</style>
