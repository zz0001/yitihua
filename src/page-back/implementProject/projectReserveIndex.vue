<template>
    <div data-role="page" id="projectReserve_info">

        <tk-header>
            项目储备
        </tk-header>
        <div class="page_content">
            <div id="projectReserve_wrapper" class="jszx-wrapper" style="overflow-y: auto;">
                <div class="jszx-scroller linkList_home_tab">
                    <div>
                        <table class="inp_table" cellpadding="0" cellspacing="0">
                            <tr>
                                <td style="text-align: center;padding-top:0.5em;padding-bottom:0.5em;color:#888;font-size:0.9em;" class="gray_line_bottom">本年度新增项目数</td>
                                <td  class="gray_line_bottom" style="text-align: center;color:#888;font-size:0.9em;">项目总投资（万元）
                                </td>
                            </tr>
                            <tr>
                                <td style="text-align: center;padding-top:0.5em;padding-bottom:0.5em;color:#888;font-size:0.9em;" class="gray_line_bottom" id="yearNewNum">302</td>
                                <td  class="gray_line_bottom" style="text-align: center;font-size:0.9em;">
                                    <span id="projectTotalNum">1010</span>
                                </td>
                            </tr>


                        </table>
                        <div style="height:0.5em;background-color:#ddd;"></div>
                    </div>
                    <div style="font-size:16px;font-weight: bold;padding:1em;color: #666;border-bottom: 1px solid #f3f3f3;">每月新增项目</div>
                    <div id="lineEchart" style="width: 100%;height:250px;"></div>
                    <div style="font-size:16px;font-weight: bold;padding:1em;color: #666;background-color:#f3f3f3;">投资量排名<span>单位：万元</span></div>
                    <div id="barEchart" style="width: 100%;height:250px;"></div>
                    <div style="height:0.5em;background-color:#ddd;"></div>
                    <div style="text-align:center;height: 3em;border-bottom: 1px solid #f3f3f3;position:relative;">
                        <div id="leaderComponentDiv" class="investmentComponentDiv" style="color:#3977E6;">分领导投资组成</div>
                        <div style="background:#ccc;width: 1px;height:1em;position: absolute;top: 50%;left: 50%; margin-top: -0.5em;"></div>
                        <div id="industryComponentDiv" class="investmentComponentDiv">分产业投资组成</div>
                    </div>
                    <div>
                        <div id="pieEchart" style="width: 100%;height:300px;"></div>
                    </div>

                    <div>
                        <table id="projetPercentTable" class="inp_table" cellpadding="0" cellspacing="0">
                            <tr>
                                <td style="padding-top:0.5em;padding-bottom:0.5em;" class="gray_line_bottom">项目数</td>
                                <td colspan="2" class="gray_line_bottom">
                                    <span id="projectnum" >0</span>
                                </td>
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
        name: "",
        mounted(){//分类
            var that = this;

                //设置input和textarea的样式
                $("input").addClass("small gray_dark_font ui-input-text ui-body-c ui-corner-all ui-shadow-inset");
                $("textarea").addClass("ui-input-text ui-body-c ui-corner-all ui-shadow-inset");
                //findCompletionAmount();
                initpprojectReserveWelcome();
                //返回
                $("#projectReserve_info .back-button").listen("quickClick", function (e) {
                    that.$router.back();

                });
                $("#projetPercentTable").on("click", "tr",  function (e) {
                    var reserveType=$(e.currentTarget).attr("reserveType");
                    window.reserveType=reserveType;
                    if(reserveType=="1"){
                        window.resrveUsetype=$(e.currentTarget).attr("leadername");
                        that.$router.push({path:'projectReserveList'});

                    }else{
                        window.resrveUsetype=$(e.currentTarget).attr("type");
                        that.$router.push({path:'projectReserveList'});
                    }
                });
                //投资完成量(亿元)
                $("#projectReserve_info #leaderComponentDiv").listen("quickClick", function (e) {
                    //$(".investmentComponentDiv").css("background-color","#fff");
                    $(".investmentComponentDiv").css("color","#333333");
                    $("#leaderComponentDiv").css("color","#3977E6");
                    findStoreLeader();
                });
                //年度完成率(%)
                $("#projectReserve_info #industryComponentDiv").listen("quickClick", function (e) {
                    //$(".investmentComponentDiv").css("background-color","#fff");
                    $(".investmentComponentDiv").css("color","#333333");
                    $("#industryComponentDiv").css("color","#3977E6");
                    findStoreIndustry();
                });

                //为开工
                $("#projectReserve_info #notStartprojectTd").listen("quickClick", function (e) {
                    window.projecrtype="-1";
                    that.$router.push({path:'implementProjectList'});

                });
                //已开工
                $("#projectReserve_info #areadyStartprojectTd").listen("quickClick", function (e) {
                    window.projecrtype="-2";
                    that.$router.push({path:'implementProjectList'});

                });
                //已竣工
                $("#projectReserve_info #areadyFinishprojectTd").listen("quickClick", function (e) {
                    window.projecrtype="-3";
                    that.$router.push({path:'implementProjectList'});
                });

            function initpprojectReserveWelcome() {
                $("#projectReserve_wrapper")[0].style.height = window.localInnerHeight - $("#projectReserve_info .page_header").height() + "px";

                initScroll({
                    "wrapper": "projectReserve_wrapper",
                    "dir": "y",
                    "bounce": false,
                    "scrollBar": false
                });
                scrollToTop("projectReserve_wrapper");


                /*  var date=new Date;
                  var year=date.getFullYear();
                  var month=date.getMonth()+1;
                  month =(month<10 ? "0"+month:month);
                  window.curryear=year+"";
                  window.currmonth=month; */
                findStoreInfo();
                findAddingMonth();
                findStoreLeader();

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
            function showReservePieEcharts(leadername,sum,total){

                var myChart = echarts.init(document.getElementById('pieEchart'));
                myChart.clear();
                //初始化数据
                var category = leadername;
                var barData = sum;
                var color=["#4D8DF7","#ABD16C","#FAB93B","#4D75CD","#FA4C41","#7ACCF1","#A888B9","#858485","#E75FC3","#F59A8F","#F6D54A","#45DBF7"];

                option = {
                    tooltip: {
                        trigger: 'item',
                        formatter: "{b}: {c} ({d}%)"
                    },
                    color:color,
                    graphic:{
                        type:'text',
                        left:'center',
                        top:'center',
                        style:{
                            text:total,
                            textAlign:'center',
                            fill:'#000',
                            width:30,
                            height:30
                        }
                    },
                    series: [
                        {
                            name:'',
                            type:'pie',
                            radius: ['50%', '70%'],
                            avoidLabelOverlap: false,
                            label: {
                                normal: {
                                    show: false,
                                    position: 'bottom'
                                },
                                emphasis: {
                                    show: false,
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
            //折现图
            function showlineEcharts(data){

                var myChart = echarts.init(document.getElementById('lineEchart'));
                myChart.clear();
                //初始化数据


                option = {
                    tooltip: {
                        trigger: 'item',
                        formatter: '{a} <br/>{b} : {c}'
                    },

                    xAxis: {
                        type: 'category',
                        splitLine: {show: false},
                        axisLabel : {//坐标轴刻度标签的相关设置。
                            interval:0,
                            rotate:"45"
                        },
                        data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月']
                    },
                    grid: {
                        left: '5%',
                        right: '5%',
                        bottom: '3%',
                        top:'8%',
                        containLabel: true
                    },
                    yAxis: {
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
                        splitLine:{show: false}
                    },
                    series: [
                        {
                            name: '新增项目数',
                            type: 'line',
                            itemStyle : { normal: {label : {show: true}}},
                            color: '#3977E6',
                            data: data
                        }
                    ]
                };

                myChart.setOption(option);
            }
            //柱状图
            function showBarEcharts(leadername,sum){

                var myChart = echarts.init(document.getElementById('barEchart'));
                myChart.clear();
                //初始化数据
                var category = leadername;
                var barData = sum;

                option = {
                    color: ['#3977E6'],
                    tooltip : {
                        trigger: 'axis',
                        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                        }
                    },
                    grid: {
                        left: '5%',
                        right: '5%',
                        bottom: '3%',
                        top:'6%',
                        containLabel: true
                    },
                    xAxis : [
                        {
                            type : 'category',
                            data : leadername,
                            axisTick: {
                                alignWithLabel: true
                            },
                            axisLabel : {//坐标轴刻度标签的相关设置。
                                interval:0,
                                rotate:"45"
                            }
                        }
                    ],
                    yAxis : [
                        {
                            type : 'value',
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
                            splitLine:{show: false}
                        }
                    ],
                    series : [
                        {
                            name:'投资量',
                            type:'bar',
                            barWidth: '60%',
                            data:barData
                        }
                    ]
                };

                myChart.setOption(option);
            }
            //查数据
            function findStoreInfo(){
                var obj = "";

                doPost("findStoreInfo.action", obj, function (data) {

                    console.log(data)
                    $("#yearNewNum").text(data.num);
                    $("#projectTotalNum").text(data.money);

                }, "");

            }
            //图标每月新增项目数
            function findAddingMonth(){
                var obj = "";

                doPost("findAddingMonth.action", obj, function (data) {

                    showlineEcharts(data);


                }, "");
            }
            //图标分产业投资组成
            function findStoreIndustry(){
                var obj = "";

                doPost("findStoreIndustry.action", obj, function (data) {
                    console.log(data)
                    var leadername=[];
                    var leaderval=[];
                    var leaderobject=[];
                    var total=0;
                    var html='';
                    for(var i=0;i<data.length;i++){
                        var obj = {};
                        var name=data[i].typename;
                        var value=data[i].money;
                        leadername.push(name);
                        leaderval.push(value);
                        obj.name=data[i].typename;
                        obj.value=data[i].money;
                        leaderobject.push(obj);
                        total+=parseInt(data[i].money);
                        html+='<tr reserveType="2" type="'+data[i].type+'"><td style="padding-top:0.5em;padding-bottom:0.5em;" class="gray_line_bottom">'+data[i].typename+'('+data[i].num+')</td>';
                        html+='<td colspan="2" class="gray_line_bottom" style="text-align: right;padding-right: 1.3em;"><span>'+data[i].percent+'</span></td></tr>';
                    }
                    showBarEcharts(leadername, leaderval);
                    showReservePieEcharts(leadername, leaderobject, total);
                    $("#projetPercentTable").html(html);

                }, "");
            }
            //图标分领导投资组成
            function findStoreLeader(){
                var obj = "";

                doPost("findStoreLeader.action", obj, function (data) {
                    console.log(data)
                    var leadername=[];
                    var leaderval=[];
                    var leaderobject=[];
                    var total=0;
                    var html='';
                    for(var i=0;i<data.length;i++){
                        var obj = {};
                        var name=data[i].leadername;
                        var value=data[i].sum;
                        leadername.push(name);
                        leaderval.push(value);
                        obj.name=data[i].leadername;
                        obj.value=data[i].sum;
                        leaderobject.push(obj);
                        total+=parseInt(data[i].sum);
                        html+='<tr reserveType="1" leadername="'+data[i].leadername+'"><td style="padding-top:0.5em;padding-bottom:0.5em;" class="gray_line_bottom">'+data[i].leadername+'('+data[i].num+')</td>';
                        html+='<td colspan="2" class="gray_line_bottom" style="text-align: right;padding-right: 1.3em;"><span>'+data[i].percent+'</span></td></tr>';
                    }
                    showBarEcharts(leadername, leaderval);
                    showReservePieEcharts(leadername, leaderobject, total);
                    $("#projetPercentTable").html(html);

                }, "");
            }
        }
    }
</script>

<style scoped>
    #projectReserve_wrapper{
        background:#fff;
    }
    #projectReserve_info .red_num {
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
        padding-top: 0.5em;
        padding-bottom: 0.5em;
    }
    /*    #projectReserve_info .linkList_home_tab > div {
           width: 33.3%;
           height: 5.5em;
           position: relative;
           text-align: center;
           float: left;
       }
       #projectReserve_info .linkList_home_tab  div p{
           padding-top: 0.4em;
           text-align: center;
           font-size: 0.9em;
       } */
    .leaderli{
        line-height: 2em;
        border-bottom: 1px solid #ccc;
        padding-left: 0.5em;
    }
    #projectReserve_info .top_tab{
        height: 15.5em;
        padding-top: 0.5em;
        padding-bottom: 0.5em;
        position: relative;
        width: 100%;
        background: #ffffff;
    }
    #projectReserve_info .top_tab >div{
        width: 33.3%;
        height: 5.5em;
        position: relative;
        text-align: center;
        float: left;
    }
    #projectReserve_info .top_tab div img{
        width: 3em;
        height: 3em;
        position: relative;
    }

    #projectReserve_info .top_tab div p{
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
    #projectReserve_wrapper .inp_table td{
        text-align:left;
        font-size:0.9em;
    }
    .investmentComponentDiv{
        float:left;
        width:49%;
        text-align:center;
        padding-top: 0.7em;
        /*   padding: 0.5em 0; */

    }
    #projectReserve_info .page_header .page_header_title{
        line-height: 2.3em;
        font-size: 1em;
        height:2.3em;
    }
    #projectReserve_info .page_header{
        height:2.3em;
    }
    #projectReserve_info .page_header img{
        height: 1em;
    }
</style>
