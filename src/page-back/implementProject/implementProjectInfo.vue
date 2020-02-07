<template>
    <div data-role="page" id="implement_info">

        <tk-header>
            实事项目
        </tk-header>
        <div class="page_content">
            <div id="importProjectInfo_wrapper" class="jszx-wrapper" style="overflow-y: auto;">
                <div class="jszx-scroller linkList_home_tab">
                    <div>
                        <table class="inp_table" cellpadding="0" cellspacing="0">
                            <tr>
                                <td style="padding-top:0.5em;padding-bottom:0.5em;" class="gray_line_bottom">项目数</td>
                                <td colspan="2" class="gray_line_bottom textalginright">
                                    <span id="projectnum" >0</span>
                                </td>
                            </tr>
                            <tr>
                                <td style="padding-top:0.5em;padding-bottom:0.5em;" class="gray_line_bottom">项目总投资</td>
                                <td colspan="2" class="gray_line_bottom textalginright">
                                    <span id="projectTotal" >0</span><span>万元</span>
                                </td>
                            </tr>


                            <tr>
                                <td style="padding-top:0.5em;padding-bottom:0.5em;" class="gray_line_bottom">年度计划投资</td>
                                <td colspan="2" class="gray_line_bottom textalginright">
                                    <span id="projectYearPlan">0</span><span>万元</span>
                                </td>
                            </tr>
                            <tr>
                                <td style="padding-top:0.5em;padding-bottom:0.5em;" class="gray_line_bottom">未开工项目数</td>
                                <td id="notStartprojectTd" colspan="2" class="gray_line_bottom textalginright">
                                    <span id="notStartproject">0</span>
                                </td>
                            </tr>
                            <tr>
                                <td style="padding-top:0.5em;padding-bottom:0.5em;" class="gray_line_bottom">已开工项目数</td>
                                <td id="areadyStartprojectTd" colspan="2" class="gray_line_bottom textalginright">
                                    <span id="areadyStartproject">0</span>
                                </td>
                            </tr>
                            <tr>
                                <td style="padding-top:0.5em;padding-bottom:0.5em;" class="gray_line_bottom">已竣工项目数</td>
                                <td id="areadyFinishprojectTd" colspan="2" class="gray_line_bottom textalginright">
                                    <span id="areadyFinishproject">0</span>
                                </td>
                            </tr>

                        </table>

                    </div>
                    <div style="text-align:center;width:100%;padding-top: 0.5em;">
                        <div id="completion_amount" class="echartsDiv1" style="width:35%;background-color:#3977E6;color:#fff;font-size:14px;">投资完成量(万元)</div><div id="completion_rate" class="echartsDiv1" style="width:30%;border-left: 0;border-right: 0;font-size:14px;">年度完成率(%)</div><div id="superviseTask" class="echartsDiv1" style="width: 25%;font-size:14px;">督察督办</div>
                    </div>
                    <div>
                        <div id="main" style="width: 100%;height:300px"></div>
                    </div>
                    <div style="padding-top:1em;">
                        <div style="float:left;width:5em;background: #fff;">
                            <ul id="projecttypeNameUl">
                                <li id="projecttypeNameLi" class="leaderli" style="color:#888;">类别</li>

                            </ul>

                        </div>
                        <div style="background: #fff;float:left; width:calc(100% - 5em);overflow-x:auto;">
                            <div style="width:719px;">
                                <div style="float:left">
                                    <ul id="investmentamountUl" style="width:100px">
                                        <li id="investmentamountLi" class="leaderli" style="color:#888;">年度计划</li>
                                    </ul>
                                </div>
                                <div style="float:left">
                                    <ul id="yearcompleteamountUl" style="width:100px">
                                        <li class="leaderli" style="color:#888;">1-12月投资</li>

                                    </ul>
                                </div>
                                <div style="float:left">
                                    <ul id="yearcompleterateUl" style="width:100px">
                                        <li class="leaderli" style="color:#888;">年度完成率</li>

                                    </ul>
                                </div>
                                <div style="float:left">
                                    <ul id="numUl" style="width:100px">
                                        <li class="leaderli" style="color:#888;">项目数</li>
                                    </ul>
                                </div>
                                <div style="float:left">
                                    <ul id="totalinvestmentUl" style="width:100px">
                                        <li class="leaderli" style="color:#888;">总投资</li>

                                    </ul>
                                </div>
                                <div style="float:left">
                                    <ul id="cumulativeinvestmentUl" style="width:100px">
                                        <li class="leaderli" style="color:#888;">累计投资</li>

                                    </ul>
                                </div>
                                <div style="float:left">
                                    <ul id="totalcompleterateUl" style="width:115px">
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
        mounted(){
            //分类
            $("#implement_info").on("click", ".leaderli",  function (e) {
                var type=$(e.currentTarget).attr("type");
                window.projecrtype=type;
                if(type!="0"){
                    $.mobile.changePage("../implementProject/implementProjectList.html");
                }
            });

                findCompletionAmount();
                initWaitWelcome();
                //返回
                $("#implement_info .back-button").listen("quickClick", function (e) {
                    $.mobile.changePage("../implementProject/implementProjectIndex.html");
                });
                //投资完成量(亿元)
                $("#implement_info #completion_amount").listen("quickClick", function (e) {
                    $(".echartsDiv1").css("background-color","#fff");
                    $(".echartsDiv1").css("color","#3977E6");
                    $("#completion_amount").css("background-color","#3977E6");
                    $("#completion_amount").css("color","#fff");
                    findCompletionAmount();
                });
                //年度完成率(%)
                $("#implement_info #completion_rate").listen("quickClick", function (e) {
                    $(".echartsDiv1").css("background-color","#fff");
                    $(".echartsDiv1").css("color","#3977E6");
                    $("#completion_rate").css("background-color","#3977E6");
                    $("#completion_rate").css("color","#fff");
                    findAnnualCompleteRate();
                });
                //督察督办
                $("#implement_info #superviseTask").listen("quickClick", function (e) {
                    $(".echartsDiv1").css("background-color","#fff");
                    $(".echartsDiv1").css("color","#3977E6");
                    $("#superviseTask").css("background-color","#3977E6");
                    $("#superviseTask").css("color","#fff");
                    findSuperviseTaskCount();
                });
                //为开工
                $("#implement_info #notStartprojectTd").listen("quickClick", function (e) {
                    window.projecrtype="-1";
                    $.mobile.changePage("../implementProject/implementProjectList.html");

                });
                //已开工
                $("#implement_info #areadyStartprojectTd").listen("quickClick", function (e) {
                    window.projecrtype="-2";
                    $.mobile.changePage("../implementProject/implementProjectList.html");

                });
                //已竣工
                $("#implement_info #areadyFinishprojectTd").listen("quickClick", function (e) {
                    window.projecrtype="-3";
                    $.mobile.changePage("../implementProject/implementProjectList.html");

                });




            function initWaitWelcome() {
                $("#importProjectInfo_wrapper")[0].style.height = window.localInnerHeight - $("#implement_info .page_header").height() + "px";
                /*  initScroll({
                      "wrapper": "importProjectInfo_wrapper",
                      "dir": "y",
                      "bounce": false,
                      "scrollBar": false
                  });
                  scrollToTop("importProjectInfo_wrapper"); */



                findItemList();
                findProjectTypeList();
                $(".echartsDiv1").css("background-color","#fff");
                $(".echartsDiv1").css("color","#3977E6");
                $("#completion_amount").css("background-color","#3977E6");
                $("#completion_amount").css("color","#fff");

                // imgWidthUl(upload_imgscroll, upload_imgwrapper, upload_ultable)
            }

            //数字自增到某一值动画参数（目标元素,自定义配置）
            function NumAutoPlusAnimation(targetEle, options) {

                /*可以自己改造下传入的参数，按照自己的需求和喜好封装该函数*/
                //不传配置就把它绑定在相应html元素的data-xxxx属性上吧
                options = options || {};
                var id= "#"+targetEle;
                var $this = $(id),
                    time = options.time || $this.data('time'), //总时间--毫秒为单位
                    finalNum = options.num || $this.data('value'), //要显示的真实数值
                    regulator = options.regulator || 100, //调速器，改变regulator的数值可以调节数字改变的速度

                    step = finalNum / (time / regulator),/*每30ms增加的数值--*/
                    count = 0, //计数器
                    initial = 0;

                var timer = setInterval(function() {

                    count = count + step;

                    if(count >= finalNum) {
                        clearInterval(timer);
                        count = finalNum;
                    }
                    //t未发生改变的话就直接返回
                    //避免调用text函数，提高DOM性能
                    var t = Math.floor(count);
                    if(t == initial) return;

                    initial = t;

                    $this.text(initial);
                }, 30);
            }
            function showImplementEcharts(leadername,sum){

                var myChart = echarts.init(document.getElementById('main'));
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
                        bottom:'3%',
                        containLabel: true
                    },
                    xAxis: {
                        show: false,
                    },
                    yAxis: {
                        type: 'category',
                        data: category,
                        splitLine: {
                            show: false
                        },
                        axisLine: {
                            show: true,
                            lineStyle: {color: '#888'}
                        },
                        axisLabel: {
                            color: '#555',
                            fontSize: 10,

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
                                    textStyle: {
                                        color: '#888',
                                        fontSize: 12
                                    }
                                }
                            },
                            color: '#3977E6'
                        }
                    ]
                };
                myChart.setOption(option);
            }
            function showImplementEchartsND(leadername,sum){

                var myChart = echarts.init(document.getElementById('main'));
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
                        bottom:'3%',
                        containLabel: true
                    },
                    xAxis: {
                        show: false,
                    },
                    yAxis: {
                        type: 'category',
                        data: category,
                        splitLine: {
                            show: false
                        },
                        axisLine: {
                            show: true,
                            lineStyle: {color: '#888'}
                        },
                        axisLabel: {
                            color: '#555',
                            fontSize: 10,

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
                                    textStyle: {
                                        color: '#888',
                                        fontSize: 12
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
            function showimplementPieEcharts(leadername,sum){

                var myChart = echarts.init(document.getElementById('main'));
                myChart.clear();
                //初始化数据
                var category = leadername;
                var barData = sum;
                var color=["#4D8DF7","#ABD16C","#FAB93B","#4D75CD","#FA4C41","#7ACCF1","#A888B9","#858485","#E75FC3","#F59A8F","#F6D54A","#45DBF7"];

                var option = {

                    legend: {
                        type: 'scroll',
                        orient: 'vertical',
                        x: 'right',
                        left: "75%",
                        top: 20,
                        bottom: 20,
                        data:leadername
                    },
                    color:color,
                    series: [
                        {
                            name:'访问来源',
                            type:'pie',
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
                            data:sum
                        }
                    ]
                };

                myChart.setOption(option);
            }
            //查数据
            function findItemList(){
                var obj = "";
                obj += toJson("nature", "1");
                doPost("findItemList.action", obj, function (data) {

                    console.log(data[window.curryear])
                    NumAutoPlusAnimation("projectnum", {
                        time: 1500,
                        num: data[window.curryear].total,
                        regulator: 50
                    });
                    NumAutoPlusAnimation("projectTotal", {
                        time: 1500,
                        num: data[window.curryear].sum,
                        regulator: 50
                    });
                    NumAutoPlusAnimation("projectYearPlan", {
                        time: 1500,
                        num: data[window.curryear].annual,
                        regulator: 50
                    });
                    NumAutoPlusAnimation("notStartproject", {
                        time: 1500,
                        num: data[window.curryear].unstarted,
                        regulator: 50
                    });
                    NumAutoPlusAnimation("areadyStartproject", {
                        time: 1500,
                        num: data[window.curryear].started,
                        regulator: 50
                    });
                    NumAutoPlusAnimation("areadyFinishproject", {
                        time: 1500,
                        num: data[window.curryear].finished,
                        regulator: 50
                    })

                }, "");

            }
            //图标数据投资完成量
            function findCompletionAmount(){
                var obj = "";
                obj += toJson("nature", "1");
                doPost("findCompletionAmount.action", obj, function (data) {
                    if(data[window.curryear]){
                        console.log(data[window.curryear]);
                        var leadername=[];
                        var leaderval=[];
                        for(var i=0;i<data[window.curryear].length;i++){
                            var name=data[window.curryear][i].leadername;
                            var val=data[window.curryear][i].sum;
                            if(data[window.curryear][i].sum==""){
                                val=0;
                            }
                            leadername.push(name);
                            leaderval.push(val);
                        }
                        showImplementEcharts(leadername,leaderval);
                    }
                }, "");
            }
            //图标数据年度完成率
            function findAnnualCompleteRate(){
                var obj = "";
                obj += toJson("nature", "1");
                doPost("findAnnualCompleteRate.action", obj, function (data) {

                    console.log(data[window.curryear]);
                    var leadername=[];
                    var leaderval=[];
                    for(var i=0;i<data[window.curryear].length;i++){
                        var name=data[window.curryear][i].leadername;
                        var val=data[window.curryear][i].result;
                        leadername.push(name);
                        leaderval.push(val);
                    }
                    showImplementEchartsND(leadername,leaderval);

                }, "");
            }
            //图标数据督察督办
            function findSuperviseTaskCount(){
                var obj = "";
                obj += toJson("nature", "1");
                doPost("findSuperviseTaskCount.action", obj, function (data) {

                    console.log(data[window.curryear]);
                    var leadername=[];
                    var leaderval=[];
                    for(var i=0;i<data[window.curryear].length;i++){
                        var obj = {};

                        obj.name=data[window.curryear][i].leadername;
                        obj.value=data[window.curryear][i].num;
                        leadername.push(obj.name);
                        leaderval.push(obj);
                    }
                    showimplementPieEcharts(leadername,leaderval);

                }, "");
            }
            //类别项目数列表
            function findProjectTypeList(){
                var obj = "";
                obj += toJson("nature", "1") + "&";
                obj += toJson("pageSize", "40") + "&";
                obj += toJson("pageNum", "1");
                doPost("findProjectTypeList.action", obj, function (data) {

                    console.log(data[window.curryear]);
                    var typename=[];
                    var investmentamount=[];
                    var yearcompleteamount=[];
                    var yearcompleterate=[];
                    var num=[];
                    var totalinvestment=[];
                    var cumulativeinvestment=[];
                    var totalcompleterate=[];
                    $("#projecttypeNameUl li:not(:first)").remove();
                    $("#investmentamountUl li:not(:first)").remove();
                    $("#yearcompleteamountUl li:not(:first)").remove();
                    $("#yearcompleterateUl li:not(:first)").remove();
                    $("#numUl li:not(:first)").remove();
                    $("#totalinvestmentUl li:not(:first)").remove();
                    $("#cumulativeinvestmentUl li:not(:first)").remove();
                    $("#totalcompleterateUl li:not(:first)").remove();
                    for(var i=0;i<data[window.curryear].length;i++){
                        var type=data[window.curryear][i].type;
                        if(!data[window.curryear][i].type){
                            type="0";
                        }
                        var name=data[window.curryear][i].typename;
                        var style="";
                        if(type=="0"){
                            style="color:rgb(57, 119, 230);"
                        }
                        htmls='';
                        htmls+='<li class="leaderli" type="'+type+'" style="color:#444">'+name+'</li>';
                        $("#projecttypeNameUl").append(htmls);
                        var invest=data[window.curryear][i].investmentamount;
                        htmls1='';
                        htmls1+='<li class="leaderli" type="'+type+'" style="'+style+'">'+invest+'</li>'
                        $("#investmentamountUl").append(htmls1);
                        var completeamount=data[window.curryear][i].yearcompleteamount;
                        htmls2='';
                        htmls2+='<li class="leaderli" type="'+type+'" style="'+style+'">'+completeamount+'</li>'
                        $("#yearcompleteamountUl").append(htmls2);
                        var completerate=data[window.curryear][i].yearcompleterate;
                        htmls3='';
                        htmls3+='<li class="leaderli" type="'+type+'" style="'+style+'">'+completerate+'</li>'
                        $("#yearcompleterateUl").append(htmls3);
                        var no=data[window.curryear][i].num;
                        htmls4='';
                        htmls4+='<li class="leaderli" type="'+type+'" style="'+style+'">'+no+'</li>'
                        $("#numUl").append(htmls4);
                        var total=data[window.curryear][i].totalinvestment;
                        htmls5='';
                        htmls5+='<li class="leaderli" type="'+type+'" style="'+style+'">'+total+'</li>'
                        $("#totalinvestmentUl").append(htmls5);
                        var cumulative=data[window.curryear][i].cumulativeinvestment;
                        htmls6='';
                        htmls6+='<li class="leaderli" type="'+type+'" style="'+style+'">'+cumulative+'</li>'
                        $("#cumulativeinvestmentUl").append(htmls6);
                        var totalcomp=data[window.curryear][i].totalcompleterate;
                        htmls7='';
                        htmls7+='<li class="leaderli" type="'+type+'" style="'+style+'">'+totalcomp+'</li>'
                        $("#totalcompleterateUl").append(htmls7);

                    }


                }, "");
            }

        }
    }
</script>

<style scoped>
    #implement_info .red_num {
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
    .wait_work_welcome_order_rednum_voice{
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
    .linkList_home_tab{
        /*   padding-top: 0.5em; */
        padding-bottom: 0.5em;
    }
    /*    #implement_info .linkList_home_tab > div {
           width: 33.3%;
           height: 5.5em;
           position: relative;
           text-align: center;
           float: left;
       }
       #implement_info .linkList_home_tab  div p{
           padding-top: 0.4em;
           text-align: center;
           font-size: 0.9em;
       } */

    #implement_info .leaderli{
        line-height: 2.2em;
        border-bottom: 1px solid #dadada;
        padding-left: 0.5em;
        font-size:0.9em;
        color:red;
        text-align: center;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }
    #implement_info .top_tab{
        height: 15.5em;
        padding-top: 0.5em;
        padding-bottom: 0.5em;
        position: relative;
        width: 100%;
        background: #ffffff;
    }
    #implement_info .top_tab >div{
        width: 33.3%;
        height: 5.5em;
        position: relative;
        text-align: center;
        float: left;
    }
    #implement_info .top_tab div img{
        width: 3em;
        height: 3em;
        position: relative;
    }

    #implement_info .top_tab div p{
        padding-top: 0.4em;
        text-align: center;
        font-size: 0.9em;
    }
    .echartsDiv1{
        display:inline-block;
        line-height: 2em;
        border:1px solid #3977E6;
        color:#3977E6;
    }
    .textalginright{
        text-align: right;
        padding-right: 1em;
    }
    #implement_info .page_header{
        height:2.3em;
        line-height: 2.3em;
    }
    #implement_info .page_header .left_img{
        height:1em;
    }
    #implement_info .inp_table tr td:first-child{
        padding-left: 1em;
        color: #888;
        font-size: 0.85em;
    }
    #implement_info .gray_line_bottom{

        border-bottom: 1px solid #dadada;
    }
    #implement_info .inp_table tr td span{
        font-size: 0.85em;
    }
    #implement_info .page_header .page_header_title{
        line-height: 2.3em;
        font-size: 1em;
    }
</style>
