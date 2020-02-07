<template>
    <div class="my">
        <!--        <div class="my-header">-->
        <!--            <img class="my-back-arrow" src="" alt="" />-->
        <!--            <div class="my-header-title">我的</div>-->
        <!--        </div>-->
        <tk-header>我的</tk-header>
        <div class="my-content">
            <div class="my-info">
                <div class="my-info-left">
                    <!-- <div class="my-avatar-wrapper">
                        <img class="my-avatar" :src="avatar" alt=""/>
                    </div> -->
                    <div class="my-name">{{name}}</div>
                </div>
                <div class="my-info-right" @click="showPointRank" v-show="iswgh">
                    <div class="my-info-point-tag">积分排名</div>
                </div>
            </div>
            <div class="my-point" v-show="iswgh">
                <div class="my-point-left">
                    <div class="this-month">本月积分</div>
                    <div class="this-month-point">{{point}}</div>
                </div>
                <div class="my-point-right" @click="showPointDetail">
                    <div class="point-detail">积分明细</div>
                    <img class="point-detail-arrow" src="../../../static/image/user_info_arrow.png" alt=""/>
                </div>
            </div>

            <tk-cell-one class="my-option-btn margin-top" data="检查更新" @click="checkUpdate"></tk-cell-one>
            <tk-cell-one class="my-option-btn" data="清除缓存" @click="clearCache"></tk-cell-one>
            <tk-cell-one class="my-option-btn-margin" data="修改密码" @click="modifyPassword"></tk-cell-one>

            <div class="log-out" @click="logout">退出登录</div>
        </div>
    </div>
</template>

<script type="text/ecmascript-6">
    import axios from "axios";
    export default {
        name: "my",
        data() {
            return {
                pointRankList: [],
                name: '',
                avatar: '',
                point: '',
                iswgh:false
            }
        },
        created() {

        },
        mounted() {
            this.name = window.localStorage.userName;
            if (!isNull(window.localStorage.userLogo)) {
                this.avatar = window.localStorage.userLogo;
            } else {
                this.avatar = '/staitc/resources/images/wode_tx.png';
            }
            this.getMyPoint();
            if (this.$store.state.platModule.wggl.userName) {
                this.iswgh=true;
            }
        },
        methods: {
            /**
             *  跳转到【积分排名】
             */
            showPointRank() {
                this.$router.push({path: '/pointRank', query: {}});
            },
            /**
             *  跳转到【积分详情】
             */
            showPointDetail() {
                this.$router.push({path: '/pointDetail', query: {}});
            },
            /**
             * 检查更新
             */
            checkUpdate() {
                console.log('检查更新');
                this.getNewInfo("more");
            },
            /**
             * 清除缓存
             */
            clearCache() {
                let d = window.longitude;
                let e = window.latitude;
                window.sessionStorage.clear();
                window.longitude = d;
                window.latitude = e;
                toast('缓存已清除');
            },
            /**
             * 修改密码
             */
            modifyPassword() {
                this.$router.push({path: '/updatePwd', query: {}});
            },
            /**
             * 退出登录
             */
            logout() {
                var that=this;
                app.$createPotDialog({
                    $props: {
                        type: 'confirm',
                        content: '确定要退出吗？'
                    },
                    $events: {
                        confirm(A) {
                            window.localStorage.loginId = "";
                            window.localStorage.passWord = "";
                            window.localStorage.yesOrNoRemberPwd = "";
                            //TODO 停止定时定位service
                            that.$router.push({path: '/login', query: {}});
                            jsict.logininfo.stop(function (res) {
                                console.log(res);
                            }, function (err) {
                                console.error(err);
                            });

                        }
                    }
                }).show();
            },
            /**
             * 获取我的积分
             */
            getMyPoint() {

                let obj = {
                    para:
                    "userId=" +
                    window.localStorage.userId +
                    "&dateTime=" +
                    "2019-12"
                };
                Promise.all([
                    axios
                        .post(
                            '/wgh/app/' + "scoresRank.action",
                            obj
                        )
                        .then(d => {
                            this.pointRankList = d.map(item => item);
                        })
                ]).then(() => {
                    this.pointRankList.forEach((item, index) => {
                        if (item.id === window.localStorage.userId) {
                            this.point = item.score;

                        }
                    });
                });
            },
            getNewInfo(isshow) {
                console.log('进入自动更新方法。');
                var obj = "";
                //obj += toJson("type", "3") + "&"; //类型网格长
                //obj += toJson("version", window.version); //版本号
                let url = '/wgh/app/app_autoUpdate.action';
                axios.post(url).then(data => {
                    if (data.code == "0") {
                        console.log("版本：" + JSON.stringify(data) + "\t" + window.version > data.version);
                        window.appurl = window.imgUrl + data.url;
                        console.log("下载地址：" + window.appurl);
                        window.ismust = data.ismust;
                        //alert(JSON.stringify(data));
                        //console.log("没转换之前的：" + window.version +"转换之后的："+ number(window.version)+"\t," + number(data.version));
                        if (!isNull(data.version)) {
                            var version = data.version.toString().split(".");
                            var localversion = window.version.toString().split(".");
                            if (parseInt(localversion[0])>=parseInt(version[0])){
                                if(parseInt(localversion[0])>parseInt(version[0])){
                                    if (!isNull(isshow)) {
                                        toast("已经是最新版本了");
                                    }
                                    window.ismust = "";
                                    window.redShow = "no";
                                    $("#newVersonRed").hide();
                                    $(".red_round_wode").hide();
                                }else{
                                    if(parseInt(localversion[1]) >= parseInt(version[1])){
                                        if (!isNull(isshow)) {
                                            toast("已经是最新版本了");
                                        }
                                        window.ismust = "";
                                        window.redShow = "no";
                                        $("#newVersonRed").hide();
                                        $(".red_round_wode").hide();
                                    }else{
                                        window.redShow = "yes";
                                        $("#newVersonRed").show();
                                        $(".red_round_wode").show();

                                        if (!isNull(window.ismust)) {
                                            if (window.ismust == 1) {
                                                //强制更新
                                                showUpdate("1");
                                                $("#alert_update_version").html(data.desc);
                                            } else if (window.ismust == 3) {
                                                //选择更新
                                                showUpdate();
                                                $("#alert_update_version").html(data.desc);
                                            } else {
                                                //不更新
                                                if (!isNull(isshow)) {
                                                    toast("已经是最新版本了");
                                                }
                                            }
                                        }
                                    }
                                }

                            }else{
                                window.redShow = "yes";
                                $("#newVersonRed").show();
                                $(".red_round_wode").show();

                                if (!isNull(window.ismust)) {
                                    if (window.ismust == 1) {
                                        //强制更新
                                        showUpdate("1");
                                        $("#alert_update_version").html(data.desc);
                                    } else if (window.ismust == 3) {
                                        //选择更新
                                        showUpdate();
                                        $("#alert_update_version").html(data.desc);
                                    } else {
                                        //不更新
                                        if (!isNull(isshow)) {
                                            toast("已经是最新版本了");
                                        }
                                    }
                                }
                            }

                        } else {
                            if (!isNull(isshow)) {
                                toast("已经是最新版本了");
                            }
                        }
                    } else {
                        toast(data.message);
                    }
                })
                // doPost("app_autoUpdate.action", obj, function(data) {
                //     if (data.code == 0) {
                //         console.log("版本：" + JSON.stringify(data) + "\t" + window.version > data.version);
                //         window.appurl = window.imgUrl + data.url;
                //         console.log("下载地址：" + window.appurl);
                //         window.ismust = data.ismust;
                //         //alert(JSON.stringify(data));
                //         console.log("没转换之前的：" + window.version +"转换之后的："+ window.version+"\t," + data.version);
                //         if (!isNull(data.version)) {
                //             var version = data.version.toString().split(".");
                //             var localversion = window.version.toString().split(".");
                //
                //             if (parseInt(localversion[0]) >= parseInt(version[0]) && parseInt(localversion[1]) >= parseInt(version[1])) {
                //                 if (!isNull(isshow)) {
                //                     toast("已经是最新版本了");
                //                 }
                //                 window.ismust = "";
                //                 window.redShow = "no";
                //                 $("#newVersonRed").hide();
                //                 $(".red_round_wode").hide();
                //             } else {
                //                 console.log('需要更新');
                //                 window.redShow = "yes";
                //                 $("#newVersonRed").show();
                //                 $(".red_round_wode").show();
                //
                //                 if (!isNull(window.ismust)) {
                //                     if (window.ismust == 1) {
                //                         console.log('需要强制更新');
                //                         //强制更新
                //                         showUpdate("1");
                //                         $("#alert_update_version").html(data.desc);
                //                     } else if (window.ismust == 3) {
                //                         //选择更新
                //                         showUpdate();
                //                         $("#alert_update_version").html(data.desc);
                //                     } else {
                //                         //不更新
                //                         if (!isNull(isshow)) {
                //                             toast("已经是最新版本了");
                //                         }
                //                     }
                //                 }
                //             }
                //         } else {
                //             if (!isNull(isshow)) {
                //                 toast("已经是最新版本了");
                //             }
                //         }
                //     } else {
                //         toast(data.message);
                //     }
                // }, "", "1");
            }
        }
    }
</script>

<style lang="less" scoped>
    .my {
        width: 100%;
        height: 100%;
        background-color: #f8f8f8;

        .my-content {
            width: 100%;
            height: calc(100% - 80px);
            display: flex;
            flex-flow: column nowrap;
            align-items: center;
            justify-content: start;
            overflow-y: auto;

            .my-info {
                width: 100%;
                display: flex;
                flex-flow: row nowrap;
                justify-content: space-between;
                align-items: center;
                margin-top: 36px;

                .my-info-left {
                    display: flex;
                    flex-flow: row nowrap;
                    justify-content: start;
                    align-items: center;

                    .my-avatar-wrapper {
                        width: 100px;
                        height: 100px;
                        margin-left: 20.5px;
                        display: flex;
                        flex-flow: row nowrap;
                        align-items: center;

                        .my-avatar {
                            width: 100px;
                            height: 100px;
                            border-radius: 50%;
                        }
                    }

                    .my-name {
                        font-size: 24px;
                        margin-left: 36px;
                    }
                }

                .my-info-right {
                    width: 80px;
                    height: 36px;
                    display: flex;
                    flex-flow: row nowrap;
                    justify-content: start;
                    align-items: center;
                    background-color: #cccccc;
                    border-radius: 18px 0 0 18px;

                    .my-info-point-tag {
                        width: 100%;
                        display: flex;
                        flex-flow: column nowrap;
                        align-items: center;
                        font-size: 14px;
                    }
                }
            }

            .my-point {
                width: 100%;
                display: flex;
                flex-flow: row nowrap;
                justify-content: space-between;
                align-items: center;
                margin-top: 36px;

                .my-point-left {
                    display: flex;
                    flex-flow: row nowrap;
                    justify-content: start;
                    align-items: center;
                    margin-left: 20.5px;

                    .this-month {
                        font-size: 16px;
                    }

                    .this-month-point {
                        font-size: 20px;
                        margin-left: 18px;
                    }
                }

                .my-point-right {
                    display: flex;
                    flex-flow: row nowrap;
                    justify-content: start;
                    align-items: center;

                    .point-detail {
                        font-size: 16px;
                        display: flex;
                        flex-flow: row nowrap;
                        align-items: center;
                        line-height: 20px;
                        text-align: center;
                    }

                    .point-detail-arrow {
                        margin-right: 20px;
                        margin-left: 5px;
                        height: 10px;
                        width: auto;
                    }
                }
            }

            .margin-top {
                margin-top: 22px;
            }

            .my-option-btn {
                width: 100%;
            }

            .my-option-btn-margin {
                width: 100%;
                margin-top: 18px;
            }

            .log-out {
                height: 54px;
                width: 100%;
                line-height: 54px;
                font-size: 18px;
                color: red;
                text-align: center;
                margin-top: 20px;
                background-color: white;
            }
        }
    }
</style>
