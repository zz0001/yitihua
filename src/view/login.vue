<template>
    <div id="login_page">
        <img
                style="width:100%;height:100%;position: absolute;left:0;top:0;z-index:1;"
                src="/static/img/bg@2x.png"
        />
        <div class="page_content" style="background: none;z-index: 100;">
            <div id="login_wrapper" class="jszx-wrapper">
                <div class="jszx-scroller">
                    <div class="title">
                        <img
                                style="width:30%; margin-bottom:20px;"
                                src="/static/img/logo@2x.png"
                                alt
                        />
                        <img style="width:70%;" src="/static/img/title@2x.png" alt/>
                        <!-- <span style="font-size:25px;color:#444446;font-family:Microsoft YaHei">欢迎登录乡镇一体化</span> -->
                        <!--<span style="font-size:25px;color:#444446;font-family:Microsoft YaHei">欢迎登录智慧夫子庙</span>-->
                    </div>

                    <div class="login_big_tab">
                        <img class="user_icon" src="/static/img/admin@2x.png" alt/>
                        <input
                                v-model="userId"
                                id="login_username"
                                placeholder="请输入用户名/手机号"
                                type="text"
                        />
                    </div>
                    <div class="login_big_tab" style="margin-top:30px;">
                        <img class="user_icon" src="/static/img/pw@2x.png" alt/>
                        <input
                                v-model="password"
                                id="login_userpwd"
                                placeholder="请输入密码"
                                type="password"
                        />
                        <img id="showpwdimg" src="/static/img/close@2x.png"/>
                    </div>
                    <table cellpadding="0" cellspacing="0">
                        <tbody>
                        <tr>
                            <td id="login_yespwd">
                                <img src="/static/img/rem01@2x.png"/>记住密码
                            </td>
                            <!--<td><img src="/staitc/resources/images/login__forget.png">忘记密码</td>-->
                        </tr>
                        </tbody>
                    </table>
                    <div class="footer_button_div" style="margin-top: 30px;">
                        <div
                                @click="submit"
                                id="login_btn"
                                class="alert_bottom_three"
                                style="background:linear-gradient(to right, #64a2f9, #1f74e7)"
                        >登录
                        </div>
                    </div>
                    <p class="corn">中电鸿信信息科技有限公司</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "login",
        data() {
            return {
                userId: "",
                password: ""
            };
        },
        methods: {
            submit() {
                if (!this.userId) {
                    this.$createPotToast({txt: "请输入用户名"}).show();
                }
                if (!this.password) {
                    this.$createPotToast({txt: "请输入密码"}).show();
                }
                this.$http
                    .post("/ump/proxy/phoneLogin", {
                        userId: this.userId,
                        password: this.password
                    })
                    .then(d => {
                        if (d.type == "1") {
                            localStorage.setItem("loginName", this.userId);
                            localStorage.setItem("password", this.password);
                            localStorage.setItem("token", d.result);
                            localStorage.setItem(
                                "userId",
                                d.platModule.zhzf.userId
                            );
                            if (d.platModule.wggl.userName) {
                                localStorage.setItem(
                                    "userName",
                                    d.platModule.wggl.userName
                                );
                            }
                            if (d.platModule.hslh.userName) {
                                localStorage.setItem(
                                    "userName",
                                    d.platModule.hslh.userName
                                );
                            }
                            if (d.platModule.zhzf.userName) {
                                localStorage.setItem(
                                    "userName",
                                    d.platModule.zhzf.userName
                                );
                            }
                            if (d.platModule.zwfw.userName) {
                                localStorage.setItem(
                                    "userName",
                                    d.platModule.zwfw.userName
                                );
                            }
                            this.$store.state.platModule = d.platModule;
                            this.$router.push("/welcome");
                        } else {
                            this.$createPotToast({txt: "账号名密码有误"}).show();
                        }
                    });
            },
            getNewInfo(isshow) {
                console.log('进入自动更新方法。');
                let obj = {};
                this.$http.post('/wgh/app/app_autoUpdate.action', obj).then(data => {
                    console.log(data);
                    console.log('当前版本：' + this.$store.state.version);
                    console.log('服务器版本：' + data.version);
                    if (this.$store.state.version !== data.version) {
                        console.log('版本不一致，需要下载更新');
                        app.$createPotDialog({
                            $props: {
                                type: 'confirm',
                                content: '是否更新应用？'
                            },
                            $events: {
                                confirm: (A) => {
                                    this.getSDCard(data.url);
                                }
                            }
                        }).show();
                    }
                }, e => {
                    console.log(e);
                });
            },
            getSDCard(url) {
                jsict.util.getSDCardPath((data) => {
                        window.sdCardPath = isNull(data.internal) ? data.external : data.internal; //得到sdcard目录
                        window.resolveLocalFileSystemURI("file://" + window.sdCardPath,
                            (de) => {
                                de.getDirectory("zjxq", {
                                        create: true,
                                        exclusive: false
                                    },
                                    () => { //利用DirectoryEntry对象创建sdcard下的目录azbj
                                        console.log("开始下载");
                                        window.appPath = window.sdCardPath + "/zjxq/";
                                        this.download(window.appPath, window.appurl);
                                    },
                                    () => {
                                        toast("目录创建失败，请检查sdcard");
                                    });
                            },
                            () => {
                                toast("目录创建失败，请检查sdcard");
                            });
                    },
                    (err) => {
                        toast("没有检测到sdcard,无法更新");
                    });
            },
            download(path, uploadurl) {
                console.log('进入下载方法download');
                var fileTransfer = new FileTransfer();
                console.log("正在下载地址：" + uploadurl);
                // var url = encodeURI(uploadurl);
                var url = encodeURI('http://www.hxwqzs.com/apk/wqzs2116.apk');
                var filePath = path + "zjxq.apk";
                console.log("path：" + path);
                $("#yes_update_btn").html("正在下载：" + 0 + "%");
                console.log("下载路径：" + url);
                console.log("安装文件路径：" + filePath);
                console.log("安装路径：" + window.appPath + "zjxq.apk");
                //js端回调下载传进度
                fileTransfer.onprogress = (progressEvent) => {
                    if (progressEvent.lengthComputable) {
                        console.log("文件进度：" + fileTransfer._id + "  " + progressEvent.loaded / progressEvent.total);
                        var temp = parseInt(progressEvent.loaded / progressEvent.total * 100);
                        $("#yes_update_btn").html("正在下载：" + temp + "%");
                    } else {
                        toast("下载失败");
                    }
                };
                console.log("url：" + url + "\t,filePath：" + filePath);
                fileTransfer.download(url, filePath,
                    (entry) => {
                        // jsict.appManager.installApp(() => {
                        //     console.log("成功安装app");
                        // }, (err) => {
                        //     console.log("安装app失败");
                        // }, window.appPath + "zjxq.apk");

                        jsict.installApk.install(function () {
                            console.log("成功安装app");
                        }, function () {
                            console.log("安装app失败");
                        }, "/zjxq/zjxq.apk");
                    },
                    (error) => {
                        console.log("download error source " + error.source);
                        console.log("download error target " + error.target);
                        console.log("upload error code" + error.code);
                    }, true);
            }
        },
        created() {
            this.getNewInfo();
        },
        mounted() {
            var demoInput = document.getElementById("login_userpwd");
            $("#login_page #login_wrapper")[0].style.height =
                window.localInnerHeight + "px";
            if ("yes" == window.localStorage.yesOrNoRemberPwd) {
                $("#login_page #login_yespwd img").attr(
                    "src",
                    "/static/img/rem02@2x.png"
                );
                this.userId=window.localStorage.getItem("loginName");
                this.password=window.localStorage.getItem("password");
            } else {
                $("#login_page #login_yespwd img").attr(
                    "src",
                    "/static/img/rem01@2x.png"
                );
            }
            if (!isNull(window.localStorage.passWord)) {
                $("#login_username").val(window.localStorage.loginId);
                $("#login_userpwd").val(window.localStorage.passWord);
                $("#login_del_img").show();
                $("#login_show_img").show();
                app_userLogin(
                    $("#login_username").val(),
                    $("#login_userpwd").val()
                );
            } else {
                $("#login_username").val("");
                $("#login_userpwd").val("");
            }

            //登录
            $("#login_page #login_yespwd").listen("quickClick", function (e) {
                if (
                    $("#login_page #login_yespwd img").attr("src") ==
                    "/static/img/rem01@2x.png"
                ) {
                    window.localStorage.yesOrNoRemberPwd = "yes";
                    console.log("变成选中");
                    $("#login_page #login_yespwd img").attr(
                        "src",
                        "/static/img/rem02@2x.png"
                    );
                } else {
                    console.log("变成未选中");
                    window.localStorage.yesOrNoRemberPwd = "";
                    $("#login_page #login_yespwd img").attr(
                        "src",
                        "/static/img/rem01@2x.png"
                    );
                }
            });
            // //登录
            // $("#login_page .footer_button_div").listen("quickClick", function(e) {
            //     if (isNull($("#login_username").val())) {
            //         toast("请输入您的用户名");
            //     } else if (isNull($("#login_userpwd").val())) {
            //         toast("请输入您的登录密码");
            //     } else {
            //         app_userLogin(
            //             $("#login_username").val(),
            //             $("#login_userpwd").val()
            //         );
            //     }
            // });

            $("#showpwdimg").listen("quickClick", function (e) {
                if (demoInput.type == "password") {
                    demoInput.type = "text";
                    $("#showpwdimg").attr("src", "/static/img/open@2x.png");
                } else {
                    demoInput.type = "password";
                    $("#showpwdimg").attr("src", "/static/img/close@2x.png");
                }
            });
        }
    };
</script>

<style lang="less" scope>
    #login_wrapper {
        .title {
            margin-left: 10%;
            margin-right: 10%;
            text-align: center;
        }

        .login_big_tab {
            position: relative;
            background: none;
            width: 76%;
            margin-left: 13%;
            height: 2.2rem;
            margin-top: 48px;
            border-bottom: 1px solid #cfcfcf;

            .user_icon {
                position: absolute;
                left: 0px;
                top: 7px;
                width: 15px;
            }

            #showpwdimg {
                position: absolute;
                right: 0px;
                top: 10px;
                width: 20px;
            }

            input {
                color: #333;
                width: 100%;
                height: 2.2rem;
                line-height: 2.2rem;
                margin: 0rem;
                padding-left: 30px;
                border: none;
                box-shadow: 0 0 0 1000px rgba(0, 0, 0, 0) inset;
            }
        }

        table {
            margin: 20px 0 0 70%;
        }

        .corn {
            margin-top: 200px;
            text-align: center;
        }
    }

    #login_page table,
    #login_page table tr,
    #login_page table tr td {
        background: none;
    }

    #login_page table tr td {
        color: #444446;
        font-size: 12px;
        line-height: 14px;
    }

    #login_page table tr td img {
        float: left;
        width: 20px;
        padding-right: 7px;
    }

    #login_page .alert_bottom_three {
        border-radius: 18px;
        margin-left: 10%;
        margin-right: 10%;
    }

    #login_page input::-webkit-input-placeholder {
        color: #fff;
    }

    #login_page .ui-body-c {
        background: none;
        color: #4d4d4d;
        background-image: none;
    }

    #login_page input::placeholder {
        font-size: 16px;
        font-family: Arial;
        letter-spacing: 2.33px;
        color: #ddd;
    }
</style>
