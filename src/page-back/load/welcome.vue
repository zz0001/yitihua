<template>
    <div data-role="page" id="load_welcome_page" >

        <!--标题-->
        <img style="width:100%;height:100%;position: absolute;left:0;top:0;z-index:1;"
             src="../../../static/img/vg.jpg">
        <div id="page_header" style="position: relative;z-index: 99;height:87px;">
            <div id="page_header_title" ><div id="headername">,下午好！</div><div id="getweater"></div></div>

            <img style="width: 68px;padding: 16px;position: absolute;right:0;" src=".../../../static/img/logo.png">

        </div>

        <!--内容-->
        <div id="page_content" class="page_content" style="z-index: 99;margin: 0 auto;width: 90%;padding-bottom: 64px;">
            <div id="load_welcome_wrapper" class="jszx-wrapper">
                <div class="jszx-scroller">
                    <div id="commodityimgscroll" ></div>
                    <div id="welcome_columnhtml"></div>

                    <div id="home_left_right_scroll" class="home_tab_count_div">
                        <div class="slide">
                            <div class="jszx-bar-icon-up jszx-bar-item-3 home_top_tab" style="background:none;">
                                <div id="welcome_doubly_stochastic">
                                    <img src="../../../static/img/doubleRandom.png"/>
                                    <p>双随机</p>

                                </div>
                                <div id="welcome_xxcj">
                                    <img src="../../../static/img/xxcj.png"/>
                                    <p>巡查上报</p>
                                </div>
                                <div id="welcome_wait_work">
                                    <img src="../../../static/img/db.png"/>
                                    <p>我的待办</p>
                                    <div class="red_num welcome_wait_work_rednum" style="">0</div>
                                </div>
                                <div id="welcome_already_work">
                                    <img src="../../../static/img/ybsx.png"/>
                                    <p>我的已办</p>
                                    <!--  <div class="red_num welcome_wait_work_rednum" style="">11</div> -->
                                </div>

                                <div id="welcome_work_linkage">
                                    <img src="../../../static/img/linkage.png"/>
                                    <p>联动处置</p>
                                    <div id="leaderHandle_linkage_num" class="red_num" style="">11</div>
                                </div>


                                <div id="welcome_sspai">
                                    <img src="../../../static/img/ssp.png"/>
                                    <p>随手拍</p>
                                </div>

                                <div id="welcome_kqdk">
                                    <img src="../../../static/img/kqdk.png"/>
                                    <p>考勤打卡</p>
                                </div>
                                <div id="welcome_zhcx">
                                    <img src="../../../static/img/icon_bjgl.png"/>
                                    <p>工单查询</p>
                                </div>
                                <div id="welcome_wggl">
                                    <img src="../../../static/img/jf.png"/>
                                    <p>积分排名</p>
                                </div>
                                <div id="welcome_ldzp">
                                    <img src="../../../static/img/ldzp.png"/>
                                    <p>领导直派</p>
                                </div>

                                <div id="welcome_zggj">
                                    <img src="../../../static/img/zggj.png"/>
                                    <p>轨迹查看</p>
                                </div>
                                <!--       <div id="welcome_qyswg">
                                         <img src="/staitc/resources/images/icon_bjgl.png"/>
                                          <p>全要素网格</p>
                                      </div> -->
                                <div id="welcome_jfcx">
                                    <img src="../../../static/img/jf.png"/>
                                    <p>积分排名</p>
                                </div>
                                <div id="welcome_zfxc">
                                    <img src="../../../static/img/zfxc.png"/>
                                    <p>执法巡查</p>
                                </div>
                                <div id="welcome_tdzx">
                                    <img src="../../../static/img/dd.png"/>
                                    <p>调度中心</p>
                                    <div class="red_num welcome_tdzx" style=""></div>
                                </div>


                            </div>


                        </div>

                    </div>
                    <div style="height:0.5em;background:#eee;width:100%;"></div>
                    <div style="height:20px;width:100%;"></div>

                    <div id="welcome_wait_work_html"></div>
                </div>
            </div>
        </div>
        <!--底部-->
        <div id="zgtime_div" style="z-index: 999;position: fixed;bottom: 50px;width: 100%;background: #fff;">
            <div style="display:inline-block;vertical-align: middle;width:49%;height:4em;line-height:4em;text-align:left;"><span style="padding-left: 1.5em;">今日在格时间</span></div>
            <div id="zgtime" style="display:inline-block;vertical-align: middle;width:49%;height:4em;line-height:4em;text-align:right;"><span style="padding-right: 1.5em;color:green;">21</span></div>
        </div>
        <div id="page_footer" class="page_footer smaller" style="z-index: 99;">
            <div class="jszx-bar-icon-up jszx-bar-item-4 ">
                <div>
                    <img src="../../../static/img/icon_one_press.png" alt="">
                    <p style="color: #0283de;">首页</p>
                </div>
                <div>
                    <img src="../../../static/img/icon_two.png" alt="">
                    <p>公告</p>
                    <div  class="red_notice_num" style="font-size:0.5em;"></div>
                </div>
                <div>
                    <img src="../../../static/img/icon_three.png" alt="">
                    <p>通讯录</p>
                </div>
                <div>
                    <img src="../../../static/img/icon_four.png" alt="">
                    <p>我的</p>
                    <div id="newVersonRed_welcome" class="red_round_wode"></div>
                </div>
            </div>
        </div>
        <!--  <div class="welcome_clock_img" style="position: absolute;right: 1em;bottom:4em;"><img
                style="width:3em;height:3em;"
                src="/staitc/resources/images/icon_clock_wei.png">
        </div>  -->




    </div>
</template>

<script>
    export default {
        name: "welcome",
        data(){
            return {
            }
        },
        mounted(){
            var that=this;
            window.searchPage = 2;
            // $("#load_welcome_page").live("pageshow", function () {
                initWelcome();

                function buildDir(){
                    // window.requestFileSystem(window.LocalFileSystem.PERSISTENT, 0, function(fileSystem) {
                    //     window.wjpwFileSystem = fileSystem;
                    //     fileSystem.root.getDirectory("zjmanagement",{
                    //         create: true,
                    //         exclusive:false
                    //     },function(newFile){
                    //         window.rootDirFileSystem = newFile;
                    //         newFile.getDirectory("data",{
                    //             create: true,
                    //             exclusive:false
                    //         },function(newfile){
                    //             window.wjpwDataDirFileSystem = newfile;
                    //             console.log("zhangsan newfile11:"+JSON.stringify(newfile));
                    //         },null);
                    //         console.log("zhangsan newFile:"+JSON.stringify(newFile));
                    //     },null);
                    //
                    //     console.log("zhangsan fileSystem:"+JSON.stringify(fileSystem));
                    // }, null);
                }

//首页
            $("#page_footer").find(".jszx-bar-icon-up>div:eq(0)").listen("quickClick", function(e) {
                that.$router.push({path:'welcome',query:{}});
            });
            //公告
            $("#page_footer").find(".jszx-bar-icon-up>div:eq(1)").listen("quickClick", function(e) {
                that.$router.push({path:'noticeWelcomeList',query:{}});

            });

            //通讯录
            $("#page_footer").find(".jszx-bar-icon-up>div:eq(2)").listen("quickClick", function(e) {

                that.$router.push({path:'peoplePhone',query:{}});

            });
            //我的
            $("#page_footer").find(".jszx-bar-icon-up>div:eq(3)").listen("quickClick", function(e) {

                that.$router.push({path:'moreWelcome',query:{}});

            });


                //签到
                $("#load_welcome_page .welcome_clock_img").listen("quickClick", function (e) {

                  //  $.mobile.changePage("../attendance/attendance.html");
                    that.$router.push({path:'attendance',query:{}});
                });
                //任务事项
                $("#load_welcome_page #welcome_wait_work").listen("quickClick", function (e) {
                  //  $.mobile.changePage("../hscasetask/waitTodoCaseList.html");
                    that.$router.push({path:'waitTodoCaseList',query:{}});
                });
                $("#load_welcome_page #welcome_already_work").listen("quickClick", function (e) {
                   // $.mobile.changePage("../hscasetask/caseAlreadyWelcomeList.html");
                    that.$router.push({path:'caseAlreadyWelcomeList',query:{}});
                });
                $("#load_welcome_page #leader_welcome_wait_work").listen("quickClick", function (e) {
                    // $.mobile.changePage("../case/leaderCaseWelcomeList.html");
                    that.$router.push({path:'leaderCaseWelcomeList',query:{}});
                });
                $("#load_welcome_page #leader_welcome_already_work").listen("quickClick", function (e) {
                    // $.mobile.changePage("../case/leaderCaseAlreadyWelcomeList.html");
                    that.$router.push({path:'leaderCaseAlreadyWelcomeList',query:{}});
                });
                //通知公告
                $("#load_welcome_page .notice_img").listen("quickClick", function (e) {
                    // $.mobile.changePage("../notice/noticeWelcomeList.html");
                    window.CaseWelcomePage = "";
                    window.thisCaseQueryType = "1";
                    // $.mobile.changePage("../casetask/taskWelcomeList.html");
                    that.$router.push({path:'taskWelcomeList',query:{}});

                });

                //问题上报
                $("#load_welcome_page #welcome_parts_issueReport").listen("quickClick", function (e) {
                    // $.mobile.changePage("../case/caseEdit.html");
                    that.$router.push({path:'caseEdit',query:{}});
                });

                //领导直派
                $("#load_welcome_page #welcome_parts_opinion").listen("quickClick", function (e) {
                    window.opinionWelcomePage = "";
                    // $.mobile.changePage("../leaderOrder/leaderList.html");
                    that.$router.push({path:'leaderList',query:{}});

                });
                //行政审批
                $("#load_welcome_page #welcome_work_approval").listen("quickClick", function (e) {
                    window.approvalListPage = "";
                    // $.mobile.changePage("../approval/approvalList.html");
                    that.$router.push({path:'approvalList',query:{}});
                });
                //排名考核
                $("#load_welcome_page #welcome_work_rank").listen("quickClick", function (e) {
                    window.opinionWelcomePage = "";
                    // $.mobile.changePage("../rank/rankListType.html");
                    that.$router.push({path:'rankListType',query:{}});
                });
                //考勤
                $("#load_welcome_page #welcome_kqdk").listen("quickClick", function (e) {
                    window.opinionWelcomePage = "";
                    // $.mobile.changePage("../attendance/attendance3.html");
                    that.$router.push({path:'attendance',query:{}});
                });


                    //局办联动
                    $("#load_welcome_page #welcome_work_linkage").listen("quickClick", function (e) {
                        window.opinionWelcomePage = "";
                  //      $.mobile.changePage("../linkage/linkageList.html");
                        that.$router.push({path:'linkageList',query:{}});
                    });
                //出租房
                $("#load_welcome_page #welcome_rental_housing").listen("quickClick", function (e) {
                    if(window.localStorage.userType === "01"){
                        // $.mobile.changePage("../leasehouse/houseStatistics.html");
                        that.$router.push({path:'houseStatistics',query:{}});
                    }else{
                        // $.mobile.changePage("../leasehouse/firststep.html");
                        that.$router.push({path:'firststep',query:{}});
                    }

                });
                //双随机
                $("#load_welcome_page #welcome_doubly_stochastic").listen("quickClick", function (e) {
                    // $.mobile.changePage("../doubleRandom/doubleRandomList.html");
                    that.$router.push({path:'doubleRandomList',query:{}});
                });
                //实施项目
                $("#load_welcome_page #welcome_implement_project").listen("quickClick", function (e) {
                    // $.mobile.changePage("../implementProject/implementProjectIndex.html");
                    that.$router.push({path:'implementProjectIndex',query:{}});
                });
                //信息采集
                $("#load_welcome_page #welcome_xxcj").listen("quickClick", function (e) {
                    // $.mobile.changePage("../hsxcy/xxcjList.html");
                    that.$router.push({path:'xxcjList',query:{}});
                });
                //在格轨迹
                $("#load_welcome_page #welcome_zggj").listen("quickClick", function (e) {
                    // $.mobile.changePage("../hsxcy/zggj.html");
                    that.$router.push({path:'zggj',query:{}});
                });
                //积分查询
                $("#load_welcome_page #welcome_jfcx").listen("quickClick", function (e) {
                    // $.mobile.changePage("../hsxcy/jfcx.html");
                    that.$router.push({path:'jfcx',query:{}});
                });
                //领导批示
                $("#load_welcome_page #welcome_leader_instruction").listen("quickClick", function (e) {
                    // $.mobile.changePage("../case/leaderInstructionsList.html");
                    that.$router.push({path:'leaderInstructionsList',query:{}});
                });
                //网格管理
                $("#load_welcome_page #welcome_wggl").listen("quickClick", function (e) {
                    // $.mobile.changePage("../hsxcy/wggl.html");
                    that.$router.push({path:'wggl',query:{}});
                });
                //领导直派
                $("#load_welcome_page #welcome_ldzp").listen("quickClick", function (e) {
                    // $.mobile.changePage("../leaderOrder/leaderEdit.html");
                    that.$router.push({path:'leaderEdit',query:{}});
                });
                //领导直报
                $("#load_welcome_page #welcome_ldzb").listen("quickClick", function (e) {
                    // $.mobile.changePage("../leaderOrder/ldzbEdit.html");
                    that.$router.push({path:'ldzbEdit',query:{}});
                });
                //随手拍
                $("#load_welcome_page #welcome_sspai").listen("quickClick", function (e) {

                    setTimeout(function(){
                       // $.mobile.changePage("../leaderOrder/sspEdit.html");
                        that.$router.push({path:'sspEdit',query:{}});
                    }, 300)
                });
                //调度
                $("#load_welcome_page #welcome_tdzx").listen("quickClick", function (e) {
                 //   $.mobile.changePage("../hsxcy/ddzx.html");
                    that.$router.push({path:'ddzx',query:{}});
                });
                //综合查询 $("#welcome_zhcx")
                $("#load_welcome_page #welcome_zhcx").listen("quickClick", function (e) {
                  //  $.mobile.changePage("../hsxcy/zhcx.html");
                    that.$router.push({path:'zhcx',query:{}});
                });

                //随手拍
                $("#load_welcome_page #welcome_zfxc").listen("quickClick", function (e) {

                    setTimeout(function(){
                        // $.mobile.changePage("../leaderOrder/zfxcEdit.html");
                        that.$router.push({path:'zfxcEdit',query:{}});
                    }, 300)

                });


            // });
            function initWelcome() {
                var timetext="";
                var now = new Date()
                var hour = now.getHours()
                if(hour < 6){timetext=",凌晨好！"}
                else if (hour < 9){timetext=",早上好！"}
                else if (hour < 12){timetext=",上午好！"}
                else if (hour < 14){timetext=",中午好！"}
                else if (hour < 17){timetext=",下午好！"}
                else if (hour < 19){timetext=",傍晚好！"}
                else if (hour < 22){timetext=",晚上好！"}
                else {timetext=",夜里好！"}
                var page_header_title=window.localStorage.userName+timetext;
                $("#page_header_title #headername").text(page_header_title)
                $(".red_num").hide();
                getweater();
                $("#load_welcome_wrapper")[0].style.height = window.localInnerHeight - $("#load_welcome_page #page_header").height() - $("#load_welcome_page .page_footer").height()-$("#zgtime").height() + "px";
                $("#page_content")[0].style.height=window.localInnerHeight - $("#load_welcome_page #page_header").height() - $("#load_welcome_page .page_footer").height()-$("#zgtime").height() + "px";
                initScroll({
                    "wrapper": "load_welcome_wrapper",
                    "dir": "y",
                    "bounce": false,
                    "scrollBar": true
                });
                scrollToTop("load_welcome_wrapper");
              //  if (!window.welcomePage) {

                    app_noticeTopDetail();
                    $('#load_welcome_page #welcome_notice_vticker').vTicker({
//                    speed: 5000,
//                    pause: 300,
                        animation: 'fade',
                        mousePause: true,
                        showItems: 2
                    });
//                $("#welcome_notice_html").empty();//
                     getNewInfo();
                    window.welcomePage = true;

              //  }
                //姓名
                //  $("#load_welcome_page .right_img").text(window.localStorage.userName);
                $("#load_welcome_page #userTypeName").text(window.localStorage.userTypeName);

                //首页待办数量
                //appWorkOrder_todoTotal("1,2");
                //appWorkOrder_todoTotalByType();
                $("#load_welcome_page .page_footer").show();
                appWorkOrder_noticereadStatus();
                //totalDigitalRemind();
                if(window.localStorage.userType === "03"){
                    welcom_zg_time();
                }


                //待办列表
                //  appWorkOrder_allAgendaList();
                $("#load_welcome_page .notice_div").hide();
                //通知公告
                app_noticeList_welcome();
                // app_noticeList(false, 1, "", "", "welcome_notice_html");
                //app_workOrder_List(false, 1, "", "", "welcome_notice_html");
                if (window.localStorage.signState == "未签到") {
                    //为签到
                    $("#load_welcome_page .welcome_clock_img img").attr("src","../../../static/img/icon_clock_wei.png");
                } else if(window.localStorage.signState == "签到"){
                    //在线
                    $("#load_welcome_page .welcome_clock_img img").attr("src","../../../static/img/icon_clock_has.png");
                }else if(window.localStorage.signState == "签退"){
                    //在线
                    $("#load_welcome_page .welcome_clock_img img").attr("src","../../../static/img/icon_clock_wei.png");
                }
                //    权限
                $("#welcome_xxcj").hide();
                $("#welcome_zfxc").hide();
                $("#welcome_doubly_stochastic").hide();
                $("#welcome_jfcx").hide();
                $("#welcome_zggj").hide();
                $("#welcome_ldzp").hide();
                $("#welcome_ldzb").show();
                $("#leader_welcome_wait_work").hide();
                $("#leader_welcome_already_work").hide();
                $("#welcome_zhcx").hide();
                $("#zgtime_div").hide();
                if(window.localStorage.userType === "03"){
                    $("#welcome_xxcj").show();
                    $("#welcome_jfcx").show();
                    $("#welcome_zggj").show();
                    $("#welcome_wait_work").show();
                    $("#welcome_already_work").show();
                    $("#welcome_sspai").show();
                    $("#welcome_tdzx").show();
                    $("#welcome_leader_instruction").hide();
                    $("#welcome_wggl").hide();
                    $("#welcome_ldzb").hide();
                    $("#zgtime_div").show();
                    $("#welcome_work_linkage").hide();
                    // $("#welcome_work_help").hide();
                    //     $("#welcome_big_visit").hide();
                    $("#welcome_zfxc").hide();
                    // $("#welcome_qyswg").show();
                }else if(window.localStorage.userType === "05"){
                    $("#welcome_xxcj").show();
                    $("#welcome_jfcx").hide();
                    $("#welcome_zggj").show();
                    $("#welcome_wait_work").hide();
                    $("#welcome_already_work").hide();
                    $("#welcome_leader_instruction").hide();
                    $("#welcome_wggl").hide();
                    $("#welcome_ldzb").hide();
                }else if(window.localStorage.userType === "02"||window.localStorage.userType === "19"||window.localStorage.userType === "16"||window.localStorage.userType === "15"){
                    $("#welcome_wait_work").show();
                    $("#welcome_already_work").show();
                    $("#welcome_leader_instruction").hide();
                    $("#welcome_jfcx").hide();
                    $("#welcome_zggj").hide();
                    $("#welcome_wggl").show();
                    $("#welcome_zhcx").show();
                    $("#welcome_work_linkage").show();
                    //  $("#welcome_qyswg").show();
                }else if(window.localStorage.userType === "01"){
                    $("#welcome_wait_work").hide();
                    $("#welcome_already_work").hide();
                    $("#welcome_xxcj").hide();
                    $("#welcome_jfcx").hide();
                    $("#welcome_zggj").hide();
                    $("#welcome_leader_instruction").show();
                    $("#welcome_wggl").show();
                    $("#welcome_work_linkage").show();
                    //   $("#welcome_qyswg").hide();
                }else if(window.localStorage.userType === "14"){
                    $("#welcome_wait_work").show();
                    $("#welcome_already_work").show();
                    $("#welcome_xxcj").hide();
                    $("#welcome_jfcx").hide();
                    $("#welcome_zggj").hide();
                    $("#welcome_leader_instruction").hide();
                    $("#welcome_wggl").hide();
                    $("#welcome_tdzx").hide();
                    $("#welcome_kqdk").hide();
                }

                else if(window.localStorage.userType === "17"||window.localStorage.userType === "18"){
                    //	$("#leader_welcome_wait_work").show();
                    //    $("#leader_welcome_already_work").show();
                    $("#welcome_wait_work").show();
                    $("#welcome_already_work").show();
                    $("#welcome_xxcj").hide();
                    $("#welcome_jfcx").hide();
                    $("#welcome_zggj").hide();
                    //  $("#welcome_leader_instruction").show();
                    $("#welcome_wggl").show();
                    $("#welcome_ldzp").show();
                    $("#welcome_ldzb").hide();
                    $("#welcome_zhcx").show();
                    //  $("#welcome_qyswg").hide();
                }else if(window.localStorage.userType === "06"){
                    $("#welcome_doubly_stochastic").show();
                    $("#welcome_ldzb").show();
                    $("#welcome_sspai").show();
                    $("#welcome_tdzx").show();
                    $("#welcome_wait_work").hide();
                    $("#welcome_already_work").hide();
                    $("#welcome_wggl").hide();
                    $("#welcome_leader_instruction").hide();
                }else if(window.localStorage.userType === "07"){
                    $("#welcome_xxcj").hide();
                    $("#welcome_jfcx").hide();
                    $("#welcome_zggj").show();
                    $("#welcome_wait_work").show();
                    $("#welcome_already_work").show();
                    $("#welcome_doubly_stochastic").show();
                    $("#welcome_ldzb").hide();
                    $("#welcome_sspai").show();
                    $("#welcome_zfxc").show();
                    $("#welcome_tdzx").show();
                    $("#welcome_wggl").hide();
                    $("#welcome_leader_instruction").hide();
                    $("#welcome_work_linkage").hide();
                    //      $("#welcome_big_visit").hide();
                }
                else{
                    $("#welcome_xxcj").hide();
                    $("#welcome_jfcx").hide();
                    $("#welcome_zggj").hide();
                    $("#welcome_wait_work").hide();
                    $("#welcome_already_work").hide();
                    $("#welcome_leader_instruction").hide();
                    $("#welcome_wggl").hide();
                    $("#welcome_ldzp").hide();
                    $("#welcome_doubly_stochastic").hide();
                    $("#welcome_sspai").hide();
                    $("#welcome_zfxc").hide();
                }


                // zz: 进行jpush注册和定时定位任务启动
                setTimeout(function() {
                    console.log('登陆成功，调用jpush');
                    jsict.StartActivity.setJpushAlias(window.localStorage.userId,function (data) {
                        console.log('jpush注册成功！');
                    }, function(error) {
                        console.log("startActivity error:" + error);
                    });
                }, 5000);
            }
            function app_workOrder_List(reset, pageNum, searchContent, noticeType, id) {

                if (parseInt(pageNum) < 2) {
                    $("#" + id).empty();
                }
                var obj = "";
                //obj += toJson("userId", $.trim(window.localStorage.userId));
                obj += toJson("userId", window.localStorage.userId) + "&";
                obj += toJson("queryType", "1") + "&";
                obj += toJson("startTime", "") + "&";
                obj += toJson("eventComponent", "") + "&";
                obj += toJson("bigClass", "") + "&";
                obj += toJson("smallClass", "") + "&";
                obj += toJson("pageSize", "20") + "&";
                obj += toJson("pageNum", "1") + "&";
                obj += toJson("endTime", "");
                doPost("appWorkOrder_supervisionOrderList.action", obj, function (data) {
                    if (!reset) {
                        hideLoading();
                    }
                    if (data.code == 0) {
                        if (reset) {
                            reset(true);
                        }
                        var array = data.datas;
                        // getDataLength(data.page.total);
                        if (!isNull(array) && array.length > 0) {
                            $("#load_welcome_page .notice_div").show();
                            for (var i = 0; i < array.length; i++) {
                                var html = '';
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
                                if ("welcome_notice_html" == id) {
                                    // html += '   <div class="small one_notice">' + array[i].name + '</div>';
                                    html += '<table cellspacing="0" class="gray_line_bottom list_one_table" cellpadding="0">';
                                    html += '   <tr>';
                                    html += '       <td colspan="2">' + bigtype + '</td>';
                                    html += '   </tr>';
                                    html += '   <tr>';
                                    html += '       <td class="small gray_font" colspan="2" style="text-align: left;">' + array[i].reportTime + '</td>';
                                    html += '   </tr>';
                                    html += '</table>';
                                    var $html = createListRow(html).appendTo("#" + id);
                                    $html.data('data', array[i]);
                                    $html.listen("quickClick", function (e) {
                                        // var data = $(e.currentTarget).data("data");
                                        // window.noticeContentId = data.row_id;
                                        // $.mobile.changePage("../casetask/caseTaskDetail.html");
                                    });
                                } else {
                                    html += '<table cellspacing="0" class="gray_line_bottom list_one_table" cellpadding="0">';
                                    html += '   <tr>';
                                    html += '       <td colspan="2">' + bigtype + '</td>';
                                    html += '   </tr>';
                                    html += '   <tr>';

                                    html += '       <td class="small gray_font" colspan="2" style="text-align: left;">' + array[i].reportTime + '</td>';
                                    html += '   </tr>';
                                    html += '</table>';
                                    var $html = createListRow(html).appendTo("#" + id);
                                    $html.data('data', array[i]);
                                    $html.listen("quickClick", function (e) {
                                        var data = $(e.currentTarget).data("data");
                                        console.log("id：" + data.row_id);
                                        window.noticeContentId = data.row_id;
                                        // $.mobile.changePage("../casetask/caseTaskDetail.html");
                                    });
                                }
                            }
                        } else {
                            $("#load_welcome_page .notice_div").hide();
                            if (parseInt(pageNum) < 2) {
                                noListShow("", "", "", $("#" + id), "");
                            }
                        }
                    } else {
                        if (reset) {
                            reset(true);
                        }
                        //toast(data.message);
                    }
                }, "");
            }


            function appWorkOrder_todoTotalreadStatus() {
                var obj = "";
                obj += toJson("userid", $.trim(window.localStorage.userId));
                doPost("readStatus.action", obj, function (data) {
                    console.log(data)
                    if (data.unreadnum !== 0) {
                        //工单待办总数
                        $(".work_rank").html(data.unreadnum);
                        $(".work_rank").show();
                    } else {
                        $(".work_rank").hide();
                        // toast(data.message);
                    }
                }, "");
            }
            function appWorkOrder_noticereadStatus() {
                var obj = "";
                obj += toJson("userid", $.trim(window.localStorage.userId));
                doPost("readInformnoticeStatus.action", obj, function (data) {
                    console.log(data)
                    if (data.unreadnum !== 0) {
                        //工单待办总数
                        $(".red_notice_num").html(data.unreadnum);
                        $(".red_notice_num").show();
                    } else {
                        $(".red_notice_num").hide();
                        //toast(data.message);
                    }
                }, "");
            }
            function appWorkOrder_centerTaskNum() {
                var obj = "";
                obj += toJson("userid", $.trim(window.localStorage.userId));
                doPost("centerTaskNum.action", obj, function (data) {
                    console.log(data)
                    if (data.datas !== 0) {
                        //工单待办总数
                        $(".wait_work_welcome_visit_rednum").html(data.datas);
                        $(".wait_work_welcome_visit_rednum").show();
                    } else {
                        $(".wait_work_welcome_visit_rednum").hide();
                        //toast(data.message);
                    }
                }, "");
            }
            function welcome_getCountNum() {
                var obj = "";
                obj += toJson("loginId", window.localStorage.loginId);
                doPost("getCount.action", obj, function (data) {
                    console.log(data)
                    var total=parseInt(data.caseinfo)+parseInt(data.caseDepartmentCo)+parseInt(data.comLaw);
                    if (total !== 0) {
                        //工单待办总数
                        $("#leaderHandle_linkage_num").show();
                        if(window.localStorage.userType === "02"){
                            total=parseInt(data.caseDepartmentCo)+parseInt(data.comLaw);
                            $("#leaderHandle_linkage_num").hide();
                        }
                        $("#leaderHandle_linkage_num").html(total);

                    } else {
                        $("#leaderHandle_linkage_num").hide();

                    }


                }, "");
            }
            function welcom_zg_time(){
                var myDate = new Date();
                var time="";
                var year=myDate.getFullYear();
                var month=myDate.getMonth()+1;       //获取当前月份(0-11,0代表1月)
                month =(month<10 ? "0"+month:month);
                var day=myDate.getDate();
                day =(day<10 ? "0"+day:day);
                time=year+"-"+month+"-"+day+" 00:00";

                var starttime=time+":00";
                var obj="";

                obj += toJson("startTime", starttime)+ "&";
                obj += toJson("endTime", "")+ "&";
                obj += toJson("userId", window.localStorage.userId);
                doPost("getLocationByUserId2.action", obj, function (data) {
                    if(data.time){
                        $("#zgtime span").text(data.time);
                        var curtime=parseInt(data.time);
                        if(curtime<120){
                            $("#zgtime span").css("color","red");
                        }else{
                            $("#zgtime span").css("color","green");
                        }
                    }
                })
            }
            function getweater() {

                $.ajax({
                    url: "https://wthrcdn.etouch.cn/weather_mini?city=南京",
                    dataType: "jsonp",
                    type: "post",
                    data: {

                    },
                    success: function (data) {
                        // console.log(data.data.forecast[0]);
                        var forecast=data.data.forecast[0];
                        var str = forecast.fengli,
                            fengli = str.slice(9,12);
                        // console.log(fengli);
                        //  $("#nowTime>span:nth-child(4)").text("最"+forecast.high);
                        // $("#nowTime>span:nth-child(5)").text("最"+forecast.low);
                        var qw=forecast.high.substring(2);
                        var lw=forecast.low.substring(2);
                        var all=forecast.type+lw+"-"+qw;
                        // $("#nowTime>span:nth-child(8)").text(forecast.type);
                        $("#getweater").text(all)

                    }
                })
            }
            function app_noticeList_welcome() {



                var obj = "";
                obj += toJson("userid", $.trim(window.localStorage.userId)) + "&";
                obj += toJson("searchContent", "") + "&";
                obj += toJson("noticeType", "") + "&";
                obj += toJson("pageSize", "10") + "&";
                obj += toJson("pageNum", 1);
                doPost("noticeList.action", obj, function (data) {

                    if (data.code == 0) {
                        $("#welcome_wait_work_html").empty();
                        var array = data.datas;
                        getDataLength(data.page[0].total);
                        if (!isNull(array) && array.length > 0) {
                            $("#load_welcome_page #welcome_wait_work_html").show();
                            for (var i = 0; i < array.length; i++) {
                                var html = '';


                            html += '<table style="background: none;" cellspacing="0" class="gray_line_bottom list_one_table" cellpadding="0">';
                                html += '   <tr>';
                                html += '       <td colspan="2">'

                                html +=	'[通知公告]'+array[i].title + '</td>';
                                html += '   </tr>';
                                html += '   <tr>';

                                html += '       <td colspan="2" class="small gray_font" style="text-align: left;">' + array[i].creatTime + '</td>';
                                html += '   </tr>';
                                html += '</table>';
                                var $html = createListRow(html).appendTo("#welcome_wait_work_html");
                                $html.data('data', array[i]);
                                $html.listen("quickClick", function (e) {
                                    var data = $(e.currentTarget).data("data");
                                    console.log("id：" + data.row_id);
                                    window.noticeContentId = data.row_id;
                                    window.noticetype="welcome";
                                   // $.mobile.changePage("../notice/noticeDetail.html");
                                    that.$router.push({path:'noticeDetail',query:{}});
                                });


                            }
                        } else {
                            $("#load_welcome_page #welcome_wait_work_html").hide();

                        }
                    } else {

                    }
                }, "");
            }
        }
    }
</script>

<style lang="less" scoped>
    #load_welcome_page{
        margin-top:-50px;
    }
    #load_welcome_page #commodityimgscroll div div img {
        width: 100%;
    }
    #load_welcome_page #commodityimgscroll{
        box-shadow: 0 0 5px #000;
    }
    #load_welcome_page .red_num {
        top: 0em;
        width: 2em;
        bottom: 3em;
        height: 2em;
        border-radius: 2.5em;
        left: 34%;
        border: 1px solid red;
        /*margin-left: 6em;*/
        /*float: right;*/
        line-height: 2em;
    }

    /*广告滚动 start*/
    #load_welcome_page #welcome_notice_vticker {
        overflow: hidden;
        position: relative;
        min-height: 3em;
        vertical-align: middle;
        max-height: 3em;
        /*margin-right: 0.5em;*/
    }

    /*#load_welcome_page #welcome_notice_vticker div {*/
    /*position: absolute;*/
    /*width: 100%;*/
    /*min-height: 1em;*/
    /*max-height: 1em;*/
    /*}*/

    #welcome_notice_vticker div table {
        min-height: 1em;
        max-height: 1em;
        display: list-item;
    }

    #load_welcome_page #welcome_notice_html table tr td {
        padding: 0em;
        margin: 0em;
        padding-left: 1em;
    }

    /*广告滚动 end*/

    /*通知 start*/
    #load_welcome_page .notice_div {
        width: 100%;
        background: #ffffff;
        padding-left: 1em;
        height: 3em;
    }

    #load_welcome_page .notice_img {
        float: left;
        width: 2em;
        height: 1.1em;
        margin-top: 1em;
        /*margin-left: 0.5em;*/
        border-right: 1px solid #f7f7f7;
    }

    #load_welcome_page .one_notice {
        /*float: left;*/
        /*margin-left: 3.5em;*/
        line-height: 1.4em;
        /*margin-top: 0.3em;*/
        padding-bottom: 0.3em;
    }

    /*通知 end*/
    /*菜单 start*/
    #load_welcome_page .jszx-bar-item-3 > div {
        width: 25%;
        height: 5.5em;
    }

    #load_welcome_page .home_top_tab {
        height: 11.5em;
        padding-top: 1.5em;
        padding-bottom: 0.5em;
    }

    #load_welcome_page .home_top_tab div p {
        padding-top: 0.4em;
        text-align: center;
        font-size: 0.9em;
    }

    #load_welcome_page .jszx-bar-item-3 img {
        width: 1.5em;
        height: 1.5em;
    }

    /*#load_welcome_page #welcome_wait_work_html .home_list_tr_first_td span {*/
    /*margin-left: 0.5em;*/
    /*}*/

    #load_welcome_page table tr th img {
        width: 2em;
        height: 2em;
        padding: 0.7em 0em 0.7em 1.3em;
    }

    #load_welcome_page .list_img_table tr:first-child td {
        padding: 0.7em 0em 0em 0.7em;
    }

    #load_welcome_page .list_img_table tr:first-child + tr td:last-child {
        padding: 0.7em 1em 0.7em 0.8em;
        text-align: left;
    }
    .red_round_wode{
        width: 0.5em;
        height: 0.5em;
        background: red;
        border-radius: 0.5em;
        position: relative;
        float: right;
        margin-right: 2.0em;
        margin-top: -3.5em;
        border: 2px solid #ffffff;
    }
    .red_notice_num{
        width: 2em;
        height: 2em;
        background: red;
        border-radius: 1.5em;
        position: absolute;
        float: right;
        margin-left: 6em;
        margin-top: -6em;
        border: 2px solid #ffffff;
        color: #fff;
        font-size: 0.5em;
        line-height: 2em;

    }

    /*菜单 end*/
    /**不换行**/
    .nochangline{
        white-space:nowrap;
        overflow:hidden;
        text-overflow:ellipsis;
    }
    .page_header_title span{
        color:#fff;
    }

    #page_header_title{
        padding: 16px;
        font-size: 1.2em;
        color: #fff;
        display: inline-block;
        width: 58%;
        vertical-align: top;
    }
    #page_header_title div{
        color: #fff;
    }

    #page_content{
        background: none;
    }
    #page_footer{
        z-index: 999;
        position: fixed;
        bottom: 0px;
        width: 100%;
        height: 4em;
    }
    #load_welcome_page .list_one_table tr:first-child td{
        padding: 0.8em 0em 0em 0.8em;
    }
</style>
