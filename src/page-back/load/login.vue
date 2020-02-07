<template>
    <div data-role="page" id="login_page">

        <img style="width:100%;height:100%;position: absolute;left:0;top:0;z-index:1;"
             src="../../../static/img/login_bg.jpg">
        <div class="page_content" style="background: none;z-index: 100;">
            <div id="login_wrapper" class="jszx-wrapper">
                <div class="jszx-scroller">
                    <div style="margin-left:10%;margin-right:10%;margin-top:7em;text-align: center;">
                        <span style="font-size:25px;color:#444446;font-family:Microsoft YaHei">欢迎登录乡镇一体化</span>
                        <!--<span style="font-size:25px;color:#444446;font-family:Microsoft YaHei">欢迎登录智慧夫子庙</span>-->
                    </div>

                    <div class="login_big_tab">

                        <input id="login_username" placeholder="请输入账号/手机号" type="text"/>
                    </div>
                    <div class="login_big_tab" style="margin-top:1.3em;">

                        <input id="login_userpwd" placeholder="请输入密码" type="password"/>
                        <img id="showpwdimg" src="../../../static/img/icon_eyes.png" style="position: absolute;right:58px;bottom: 113px;width: 25px;" >
                    </div>

                    <div class="footer_button_div" style="margin-top: 2em;">
                        <div id="login_btn" class="alert_bottom_three" style="background:#4B79FC;">登录</div>
                    </div>
                    <table cellpadding="0" cellspacing="0">
                        <tr>
                            <td id="login_yespwd"><img src="../../../static/img/icon_rem.png">记住密码</td>
                            <!--<td><img src="/staitc/resources/images/login__forget.png">忘记密码</td>-->
                        </tr>
                    </table>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "login",
        mounted(){

            $("#login_page").live("pageshow", function () {
                var demoInput = document.getElementById("login_userpwd");
                $("#login_page #login_wrapper")[0].style.height = window.localInnerHeight + "px";
                // initScroll({
                //     "wrapper": "login_wrapper",
                //     "dir": "y",
                //     "bounce": false,
                //     "scrollBar": true
                // });

                //是否自动登录
                if ("yes" == window.localStorage.yesOrNoRemberPwd) {
                    $("#login_page #login_yespwd img").attr("src", "../../../static/img/icon_rem_select.png");
                } else {
                    $("#login_page #login_yespwd img").attr("src", "../../../static/img/icon_rem.png");
                }
                if (!isNull(window.localStorage.passWord)) {
                    $("#login_username").val(window.localStorage.loginId);
                    $("#login_userpwd").val(window.localStorage.passWord);
                    $("#login_del_img").show();
                    $("#login_show_img").show();
                    app_userLogin($("#login_username").val(), $("#login_userpwd").val());
                } else {
                    $("#login_username").val("");
                    $("#login_userpwd").val("");
                }


                //登录
                $("#login_page #login_yespwd").listen("quickClick", function (e) {
                    if ($("#login_page #login_yespwd img").attr("src") == "../../../static/img/icon_rem.png") {
                        window.localStorage.yesOrNoRemberPwd = "yes";
                        console.log("变成选中");
                        $("#login_page #login_yespwd img").attr("src", "../../../static/img/icon_rem_select.png");
                    } else {
                        console.log("变成未选中");
                        window.localStorage.yesOrNoRemberPwd = "";
                        $("#login_page #login_yespwd img").attr("src", "../../../static/img/icon_rem.png");
                    }
                });
                //登录
                $("#login_page .footer_button_div").listen("quickClick", function (e) {
                    if (isNull($("#login_username").val())) {
                        toast("请输入您的用户名");
                    } else if (isNull($("#login_userpwd").val())) {
                        toast("请输入您的登录密码");
                    } else {
                        app_userLogin($("#login_username").val(), $("#login_userpwd").val());
                    }
                });

                $("#showpwdimg").listen("quickClick", function (e) {
                    if (demoInput.type == "password") {
                        demoInput.type = "text";
                        $("#showpwdimg").attr("src","../../../static/img/icon_eye.png");
                    } else {
                        demoInput.type = "password";
                        $("#showpwdimg").attr("src","../../../static/img/icon_eyes.png");
                    }
                });

            });
        }
    }
</script>

<style>
    #login_page table, #login_page table tr, #login_page table tr td {
        background: none;
    }

    #login_page table {
        margin-left: 13%;
    }

    #login_page table tr td {
        color: #444446;
        font-size: 0.9em;
        line-height: 1.6em;
    }

    #login_page table tr td img {
        float: left;
        width: 1.5em;
        padding-right: 0.5em;
    }

    #login_page .login_big_tab {
        background: none;
        width: 76%;
        margin-left: 13%;
        height: 2.5em;
        margin-top: 3.2em;
        border-bottom: 1px solid #cfcfcf;
    }

    #login_page .login_div_img {
        width: 1.2em;
        height: 1.2em;
        float: left;
        margin: 0.6em 0.3em 0em 1.4em;
    }

    #login_page div input {
        color: #333;
        width: 100%;
        height: 2.5em;
        line-height: 2.5em;
        margin: 0em;
        border: none;
    }

    #login_page .alert_bottom_three {
        border-radius: 1.5em;
        margin-left: 10%;
        margin-right: 10%;
    }

    #login_page input::-webkit-input-placeholder {
        color: #fff;
    }
    #login_page  .ui-body-c {
        background: none;
        color:#4d4d4d;
        background-image:none;
    }
    #login_page input::placeholder {
        font-size: 16px;
        font-family: Arial;
        letter-spacing: 2.33px;
        color: #ddd;

    }
</style>