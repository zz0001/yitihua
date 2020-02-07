<template>
    <div data-role="page" id="wait_linkage_list">

        <tk-header>
            重大项目
            <span
                    @click='searchContent'
                    slot="right">年度</span>
        </tk-header>
        <div class="page_content">
            <div id="importProject_wrapper" class="jszx-wrapper" style="overflow-y: auto;">
                <div class="jszx-scroller linkList_home_tab">

                    <div style="background: #fff;height:20px;border-bottom:1px solid #d9d9d9;margin: 0 auto;width: 96%;">
                        <div class="yeartitle"><span id="curryear_index">2019</span>年</div>
                    </div>

                    <div class="top_tab" style=" height: 15.5em;padding-top: 2.5em;padding-bottom: 0.5em;position: relative;width: 100%;background: #ffffff;">

                        <div id="gotoimplementProject" style=" width: 33.3%;height: 5.5em;position: relative;text-align: center;float: left;">
                            <img src="/staitc/resources/images/icon_welcome_wait_work.png" style="width: 3em;height: 3em;position: relative;"/>
                            <p style="padding-top: 0.4em;text-align: center;font-size: 0.9em;">实事项目</p>
                        </div>

                        <div id="supervisionInspector" style=" width: 33.3%;height: 5.5em;position: relative;text-align: center;float: left;">
                            <img src="/staitc/resources/images/icon_yq.png" style="width: 3em;height: 3em;position: relative;"/>
                            <p style="padding-top: 0.4em;text-align: center;font-size: 0.9em;">督察督办</p>

                        </div>
                        <div id="otherProject" style=" width: 33.3%;height: 5.5em;position: relative;text-align: center;float: left;">
                            <img src="../../../static/img/linkage.png" style="width: 3em;height: 3em;position: relative;"/>
                            <p style="padding-top: 0.4em;text-align: center;font-size: 0.9em;">其他项目</p>
                        </div>
                        <div id="projectRanking" style=" width: 33.3%;height: 5.5em;position: relative;text-align: center;float: left;">
                            <img src="/staitc/resources/images/icon_bjgl.png" style="width: 3em;height: 3em;position: relative;"/>
                            <p style="padding-top: 0.4em;text-align: center;font-size: 0.9em;">项目排名</p>

                        </div>
                        <div id="dbdu" style=" width: 33.3%;height: 5.5em;position: relative;text-align: center;float: left;">
                            <img src="../../../static/img/db.png" style="width: 3em;height: 3em;position: relative;"/>
                            <p style="padding-top: 0.4em;text-align: center;font-size: 0.9em;">待办督办</p>
                            <div class="red_num dbdu_num" >1</div>

                        </div>
                        <div id="dbwt" style=" width: 33.3%;height: 5.5em;position: relative;text-align: center;float: left;">
                            <img src="../../../static/img/ybsx.png" style="width: 3em;height: 3em;position: relative;"/>
                            <p style="padding-top: 0.4em;text-align: center;font-size: 0.9em;">待办问题</p>
                            <div class="red_num dbwt_num" >1</div>

                        </div>

                    </div>

                </div>

            </div>
            <div class="max-dialog max-alert moretitle" id="implement_search_content" style="box-shadow: none; width: 100%; display: -webkit-box; height: 683px;display:none;">
                <div class="max-dialog-masker"></div>
                <div class="max-dialog-frame moretitle_frame screen_search_content_div" style="position: absolute; background: rgb(255, 255, 255); height: 377.6px;">
                    <div id="small_content_height" style="height: 324.6px;">
                        <div id="screen_content1_wrapper" style="width: 100%; height: 324.6px;top: -45px;" class="jszx-wrapper ">
                            <div class="jszx-scroller">
                                <div class="alert_edit" id="screen_content1" style="">

                                    <div style="text-align: center;line-height: 48px;">选择年度:<div id="year_list" style="display:inline-block"></div></div>

                                </div>                  </div>
                            <div class="scroll-bar-y" style="height: 0px;"></div></div>

                        <div class="page_footer screeb_footer" style="position:absolute;bottom:0em;border-top:1px solid #f3f3f3;height:4em;background: #FFFFFF;">
                            <div class="footer_button_div">
                                <div id="configyearempty" style="width:35%;float:left;" class="alert_bottom_three gray_background">重置</div>
                                <div id="configyear" style="width:35%;float:left;" class="alert_bottom_three orange_background">确定</div></div></div></div></div></div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "",
        mounted(){
            var that = this;

            $("#wait_linkage_list").live("pageshow", function () {
                //设置标题栏，内容栏，底部内容高度
                $(".page_content")[0].style.height = window.localInnerHeight - $(".page_header").height() - $(".page_footer").height() + "px";
                $(".page_content").children("div").get(0).style.height = window.localInnerHeight - $(".page_header").height() - $(".page_footer").height() + "px";
                //设置input和textarea的样式
                $("input").addClass("small gray_dark_font ui-input-text ui-body-c ui-corner-all ui-shadow-inset");
                $("textarea").addClass("ui-input-text ui-body-c ui-corner-all ui-shadow-inset");

                initWaitWelcome();
                //返回
                $("#wait_linkage_list .back-button").listen("quickClick", function (e) {
                    that.$router.back();
                });
                //
                $("#wait_linkage_list #gotoimplementProject").listen("quickClick", function (e) {
                    that.$router.push({path:'implementProjectInfo'});
                });
                //
                $("#wait_linkage_list #projectSave").listen("quickClick", function (e) {
                    that.$router.push({path:'projectReserveIndex'});
                });
                //
                $("#wait_linkage_list #supervisionInspector").listen("quickClick", function (e) {
                    that.$router.push({path:'superviseInfo'});
                });
                //
                $("#wait_linkage_list #otherProject").listen("quickClick", function (e) {
                    that.$router.push({path:'otherProjectInfo'});
                });

                $("#wait_linkage_list #projectRanking").listen("quickClick", function (e) {
                    that.$router.push({path:'rankingInfo'});
                });


                $("#wait_linkage_list #configyear").listen("quickClick", function (e) {
                    $("#implement_search_content").hide();
                    window.curryear=$("#year_list option:selected").val();
                    $("#curryear_index").text(window.curryear);
                });
                $("#wait_linkage_list #dbdu").listen("quickClick", function (e) {
                    window.SuperviseAndIssueType="1";
                    that.$router.push({path:'dbList'});
                });
                $("#wait_linkage_list #dbwt").listen("quickClick", function (e) {
                    window.SuperviseAndIssueType="2";
                    that.$router.push({path:'dbList'});a
                });



            });
            function initWaitWelcome() {
                $("#importProject_wrapper")[0].style.height = window.localInnerHeight - $("#wait_linkage_list .page_header").height() + "px";
                /*  initScroll({
                      "wrapper": "importProject_wrapper",
                      "dir": "y",
                      "bounce": false,
                      "scrollBar": false
                  });
                  scrollToTop("importProject_wrapper"); */
                //appWorkOrder_todoTotalByType();
                //开始时间
                if(!window.curryear){
                    var date=new Date;
                    var year=date.getFullYear();
                    var month=date.getMonth()+1;
                    month =(month<10 ? "0"+month:month);
                    window.curryear=year+"";
                    window.currmonth=month;
                }

                //appWorkOrder_todoTotalByType2();
                //appWorkOrder_centerTaskSupervisionLogNum();
                // 添加督办方法
                //appWorkOrder_todoTotalSupervision();
                /*   if(window.localStorage.userType=="01"){
                      $("#leaderHandle").show();
                  }else{
                       $("#leaderHandle").hide();
                  } */
                var upload_imgscroll = "ultable_scroll";
                var upload_imgwrapper = "ultable_wrapper";
                var upload_ultable = "ultable";
                selet_year();
                if(window.localStorage.userType=="08"){
                    $("#dbdu").show();
                    $("#dbwt").show();
                }else{
                    $("#dbdu").hide();
                    $("#dbwt").hide();
                }
                // findSuperviseAndIssueCount();

                // imgWidthUl(upload_imgscroll, upload_imgwrapper, upload_ultable)
            }
            function findSuperviseAndIssueCount() {
                var obj = "";
                obj += toJson("userId", window.localStorage.userId);
                doPost("findSuperviseAndIssueCount.action", obj, function (data) {
                    console.log(data)
                    if (data.sNum !== 0) {
                        //工单待办总数
                        $(".dbdu_num").html(data.sNum);
                        $(".dbwt_num").show();
                    } else {
                        $(".dbdu_num").hide();

                    }
                    if (data.iNum !== 0) {
                        //工单待办总数
                        $(".dbwt_num").html(data.iNum);
                        $(".dbwt_num").show();
                    } else {
                        $(".dbwt_num").hide();

                    }
                }, "");
            }
            function selet_year(){

                var option='';
                option+='<select style="display: inline-block;background: #fff;">';
                option += '<option selected="selected" value="2019">2019年度</option>';
                option += '<option value="2018">2018年度</option>'

                option+='</select>'
                $("#year_list").html(option);

            }
        },
        methods:{
            searchContent(){
                $("#implement_search_content").show();
            }

        }
    }
</script>

<style scoped>
    #wait_linkage_list .red_num {
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
        background:#fff;
    }

    .leaderli{
        line-height: 2em;
        border-bottom: 1px solid #ccc;
    }
    #wait_linkage_list .top_tab{
        height: 15.5em;
        padding-top: 0.5em;
        padding-bottom: 0.5em;
        position: relative;
        width: 100%;
        background: #ffffff;
    }
    #wait_linkage_list .top_tab >div{
        width: 33.3%;
        height: 5.5em;
        position: relative;
        text-align: center;
        float: left;
    }
    #wait_linkage_list .top_tab div img{
        width: 3em;
        height: 3em;
        position: relative;
    }

    #wait_linkage_list .top_tab div p{
        padding-top: 0.4em;
        text-align: center;
        font-size: 0.9em;
    }
    .yeartitle{
        width:5em;
        height: 2em;
        background: #fff;
        text-align: center;
        position: absolute; left: 0; top: 1em; right: 0;
        margin: auto;

        z-index:99;
    }
    #wait_linkage_list .page_header .page_header_title{
        line-height: 2.3em;
        font-size: 1em;
        height:2.3em;
    }
    #wait_linkage_list .page_header{
        height:2.3em;
    }
    #wait_linkage_list .page_header img{
        height: 1em;
    }
    #wait_linkage_list .page_content{
        background: #ededed;
    }
    #wait_linkage_list .red_num {
        top: 0em;
        width: 2em;
        bottom: 3em;
        height: 2em;
        border-radius: 2.5em;
        left: 34%;
        border: 1px solid red;
        position: absolute;

        text-align: center;
        padding: 0.1em;
        background: red;
        font-size: 0.5em;
        margin-left: 3.7em;
        color: #ffffff;
        line-height: 2em;
    }
</style>
