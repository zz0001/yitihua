<template>
    <div data-role="page" id="more_welcome_page">

        <tk-header :back="false">
            我的
        </tk-header>

        <div class="page_content">
            <div id="more_welcome_wrapper" class="jszx-wrapper">
                <div class="jszx-scroller">
                    <div id="more_welcome_html" class="html_margin">
                        <img style="width:100%;height:10em;position: absolute;left:0;top:0;z-index:-1;"
                             src="/staitc/resources/images/wode_bg.png">
                        <div id="morewelcome_user_info" class="">
                            <div><img id="more_welcome_logo" class=" logo_img" src="/staitc/resources/images/wode_tx.png"/>
                            </div>
                            <p id="userPhone" class="white_font normal"></p>
                        </div>
                        <table class="gatwway_list_height" id="writeupdatepwd">
                            <tr>
                                <th><img src="/staitc/resources/images/wode_icon1.png" class="more_list_icon"></th>
                                <td class="">修改密码</td>
                                <td><img src="/staitc/resources/images/icon_gray_line_left.png"
                                         class="gatwway_list_icon_right">
                                </td>
                            </tr>
                        </table>
                        <table class="gatwway_list more_about">
                            <tr>
                                <th><img src="/staitc/resources/images/wode_icon4.png" class="more_list_icon"></th>
                                <td class="gray_font">当前版本号<span id="currentVersion"></span></td>
                                <td>
                                </td>
                            </tr>
                        </table>
                        <table id="more_checkupdate" class="gatwway_list_height">
                            <tr>
                                <th><img src="/staitc/resources/images/wode_icon3.png" class="more_list_icon"></th>
                                <td class="gray_font">检查更新</td>
                                <td id="find_new_version">
                                    <span id="newVersonSpan">发现新版本</span>
                                    <div id="newVersonRed" class="red_round"></div>
                                </td>
                                <td><img src="/staitc/resources/images/icon_gray_line_left.png"
                                         class="gatwway_list_icon_right">
                                </td>
                            </tr>
                        </table>
                        <table class="gatwway_list_height" id="more_cleaninfo">
                            <tr>
                                <th><img src="/staitc/resources/images/wode_icon2.png" class="more_list_icon"></th>
                                <td>清除缓存</td>
                                <td><img src="/staitc/resources/images/icon_gray_line_left.png"
                                         class="gatwway_list_icon_right">
                                </td>
                            </tr>
                        </table>
                        <!--<table class="gatwway_list_height" id="more_seemap">-->
                            <!--<tr>-->
                                <!--<th><img src="/staitc/resources/images/wode_icon2.png" class="more_list_icon"></th>-->
                                <!--<td>定位</td>-->
                                <!--<td><img src="/staitc/resources/images/icon_gray_line_left.png"-->
                                         <!--class="gatwway_list_icon_right">-->
                                <!--</td>-->
                            <!--</tr>-->
                        <!--</table>-->
                        <table class="gatwway_list_height" id="writeoff">
                            <tr>
                                <th><img src="/staitc/resources/images/wode_icon5.png" class="more_list_icon"></th>
                                <td>注销</td>
                                <td><img src="/staitc/resources/images/icon_gray_line_left.png"
                                         class="gatwway_list_icon_right">
                                </td>
                            </tr>
                        </table>
                        <!--菜单 end-->
                    </div>
                </div>
            </div>
        </div>
        <div id="page_footer4" class="page_footer smaller">
            <div class="jszx-bar-icon-up jszx-bar-item-4 ">
                <div>
                    <img src="/staitc/resources/images/icon_one.png" alt="">
                    <p>首页</p>
                </div>
                <div>
                    <img src="/staitc/resources/images/icon_two.png" alt="">
                    <p>公告</p>
                </div>
                <div>
                    <img src="/staitc/resources/images/icon_three.png" alt="">
                    <p>通讯录</p>
                </div>
                <div>
                    <img src="/staitc/resources/images/icon_four_press.png" alt="">
                    <p style="color: #0283de;">我的</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "moreWelcome",
        mounted(){
            var that=this;
            $("input").addClass("small gray_dark_font ui-input-text ui-body-c ui-corner-all ui-shadow-inset");

            //首页
            $("#page_footer4").find(".jszx-bar-icon-up>div:eq(0)").listen("quickClick", function(e) {
                that.$router.push({path:'welcome',query:{}});
            });
            //公告
            $("#page_footer4").find(".jszx-bar-icon-up>div:eq(1)").listen("quickClick", function(e) {
                that.$router.push({path:'noticeWelcomeList',query:{}});

            });

            //通讯录
            $("#page_footer4").find(".jszx-bar-icon-up>div:eq(2)").listen("quickClick", function(e) {

                that.$router.push({path:'peoplePhone',query:{}});

            });
            //我的
            $("#page_footer4").find(".jszx-bar-icon-up>div:eq(3)").listen("quickClick", function(e) {

                that.$router.push({path:'moreWelcome',query:{}});

            });

                $("#more_welcome_wrapper")[0].style.height = window.localInnerHeight - $("#more_welcome_page .page_header").height() - $("#more_welcome_page .page_footer").height() + "px";
                $("#more_welcome_page .gray_border_bottom,#more_welcome_page .home_top_tab div p").addClass("small");
                initScroll({
                    "wrapper": "more_welcome_wrapper",
                    "dir": "y",
                    "bounce": false,
                    "scrollBar": false
                });
                scrollToTop("more_welcome_wrapper");
                console.log("登录账号为：" + window.localStorage.loginId);
                $("#currentVersion").html(window.version);
                if(window.redShow=="no"){
                    $("#newVersonRed").hide();
                    $("#newVersonSpan").hide();
                }else{
                    $("#newVersonRed").show();
                    $("#newVersonSpan").show();
                }
                if (!isNull(window.localStorage.userLogo)) {
                    $("#more_welcome_logo").attr("src", window.localStorage.userLogo);
                } else {
                    $("#more_welcome_logo").attr("src", "/staitc/resources/images/wode_tx.png");
                }
                $("#more_welcome_page #userPhone").html(window.localStorage.loginId);
                //注销
                $("#more_welcome_page #writeoff").listen("quickClick", function (e) {

                    // showExitAlert(function () {
                    //     window.localStorage.loginId = "";
                    //     window.localStorage.passWord = "";
                    //     window.localStorage.yesOrNoRemberPwd = "";
                    //    // $.mobile.changePage("../load/login.html");
                    //     that.$router.push({path:'login',query:{}});
                    // }, function () {
                    // });
                    app.$createPotDialog({
                        $props:{
                            type:'confirm',
                            content:'确定要退出吗？'
                        },
                        $events:{
                            confirm(A){
                                window.localStorage.loginId = "";
                                window.localStorage.passWord = "";
                                window.localStorage.yesOrNoRemberPwd = "";
                                // $.mobile.changePage("../load/login.html");
                                that.$router.push({path:'login',query:{}});
                                //TODO 停止定时定位service
                                jsict.logininfo.stop(function(res) {
                                    console.log(res);
                                }, function(err) {
                                    console.error(err);
                                });
                            }
                        }
                    }).show()
                });

                //检查新版本
                $("#more_welcome_page #writeupdatepwd").listen("quickClick", function (e) {
                   // $.mobile.changePage("../more/updatePwd.html");
                    that.$router.push({path:'updatePwd',query:{}});
                });
                //检查新版本
                $("#more_welcome_page #more_checkupdate").listen("quickClick", function (e) {
                    getNewInfo("more");
                });
                //清除缓存
                $("#more_welcome_page #more_cleaninfo").listen("quickClick", function (e) {
                    clearLongMoreInfo();
                });
                //more_seemap
                $("#more_welcome_page #more_seemap").listen("quickClick", function (e) {
                 //   $.mobile.changePage("../attendance/attendance.html");
                    that.$router.push({path:'attendance',query:{}});
                });

            function clearLongMoreInfo() {
                var d = window.longitude;
                var e = window.latitude;
                window.sessionStorage.clear();
                window.longitude = d;
                window.latitude = e;
            }
            function showExitAlert(fun1, fun2) {
                var exixt_html = "<div class='max-dialog max-confirm2'>";
                exixt_html += "     <div class='max-dialog-masker'></div>";
                exixt_html += "     <div class='max-dialog-frame'>";
                exixt_html += "         <div class='max-dialog-content'>";
                exixt_html += "             <p class='small'>确定要退出吗？</p>";
                exixt_html += "             <div class='alert_bottom_three orange_background small'>确定</div>";
                exixt_html += "             <div class='alert_bottom_three gray_background small'>取消</div>";
                exixt_html += "         </div>";
                exixt_html += "     </div>";
                exixt_html += " </div>";
                var $exixt_html = $(exixt_html).fadeIn(800).appendTo("#more_welcome_page");
                $exixt_html.find(".orange_background").bind("click", function() {
                    if (fun1)
                        fun1.call();
                    $(".max-confirm2").fadeOut(800);
                });
                $exixt_html.find(".gray_background").bind("click", function() {
                    if (fun2)
                        fun2.call();
                    $(".max-confirm2").fadeOut(800);
                });

            }
        }
    }
</script>

<style scoped>
    #more_welcome_page #morewelcome_user_info {
        height: 10em;
    }

    #more_welcome_page #morewelcome_user_info p, #more_welcome_page #morewelcome_user_info div {
        text-align: center;
        padding-top: 1.3em;
    }

    #more_welcome_page .logo_img {
        width: 5em;
        height: 5em;
    }

    /*用户信息 end*/
    /*左右滑动菜单 start*/
    #more_welcome_page .gatwway_list tr td {
        border-bottom: 0.1em solid #edeef1;
    }

    #more_welcome_page .gatwway_list_height {
        border-bottom: 0.5em solid #edeef1;
        width: 100%;
    }

    #more_welcome_page .gatwway_list tr td + td,
    .gatwway_list_height tr td + td {
        width: 1%;
    }

    #more_welcome_page #find_new_version {
        width: 8em;
        padding-right: 1em;
    }

    #more_welcome_page table tr td:last-child {
        padding-right: 1em;
    }

    #more_welcome_page .red_round {
        margin-top: 0.2em;
    }

    #more_welcome_page .more_list_icon {
        width: 1.5em;
        height: 1.5em;
        padding:0;
        margin: 1em 1.5em;
    }
    #page_footer4{
        z-index: 999;
        position: fixed;
        bottom: 0px;
        width: 100%;
        height: 4em;
    }
</style>
