<template>
<div class="home-page" style="padding-top: 0;">
    <div class="user-info">
        <!-- <div class="user-avatar-wrapper">
                <img class="user-avatar" alt="" :src="avatar"/>
            </div> -->

        <div @click="showMyProfile" class="user-name">{{userName}}</div>
        <div @click="showMyProfile" class="arrow-wrapper">
            <img class="arrow" alt="" src="../../static/image/user_info_arrow.png" />
        </div>
    </div>
    <div class="home-title-split"></div>
    <tk-slide :items="slides" class="home-slide">
        <div class="home-slide-title-wrapper" :slot="index" v-for="(item,index) of slides">
            <div class="home-slide-title">{{item.title}}</div>
        </div>
    </tk-slide>
    <div v-if="$store.state.platModule.wggl.userName" class="notice">
        <div class="notice-left-part">
            <div class="notice-logo-wrapper">
                <img class="notice-logo" alt="" src="../../static/image/notice_logo.png" />
            </div>
            <div class="notice-title">{{noticeTitle}}</div>
        </div>
        <div class="notice-right-part">
            <div class="more-notice-wrapper" @click="showNoticeList">
                <div class="more-notice">更多</div>
            </div>
        </div>
    </div>
    <tk-scroll>
        <div class="menu-wrapper">
            <div class="menu-title-wrapper">
                <div class="menu-title">工作管理</div>
                <img class="add-menu-item" alt="" src="../../static/image/add_new_menu_item.png" v-show="false" />
            </div>
            <div class="menu">
                <div class="menu-item" v-for="item in workManagementMenu" @click="onMenuItemClick(item)">
                    <div class="menu-item-logo-wrapper">
                        <img class="menu-item-logo" :src="item.img" alt="" />
                        <!-- <img class="menu-item-remind" v-show="item.remind"
                                 src="../../static/image/menu_item_remind.png" alt=""/> -->
                    </div>
                    <div class="menu-item-title">{{item.title}}</div>
                </div>
            </div>
        </div>

        <div class="menu-wrapper">
            <div class="menu-title-wrapper">
                <div class="menu-title">信息查询</div>
                <img class="add-menu-item" alt="" src="../../static/image/add_new_menu_item.png" v-show="false" />
            </div>
            <div class="menu">
                <div class="menu-item" v-for="item in infoQueryMenu" @click="onMenuItemClick(item)">
                    <div class="menu-item-logo-wrapper">
                        <img class="menu-item-logo" :src="item.img" alt="" />
                        <img class="menu-item-remind" v-show="item.title !== '' && item.remind" src="../../static/image/menu_item_remind.png" alt="" />
                    </div>
                    <div class="menu-item-title">{{item.title}}</div>
                </div>
            </div>
        </div>
        <div class="menu-wrapper">
            <div class="menu-title-wrapper">
                <div class="menu-title">扩展应用</div>
                <img class="add-menu-item" alt="" src="../../static/image/add_new_menu_item.png" v-show="false" />
            </div>
            <div class="menu">
                <div v-for="item of my" class="menu-item" @click="kuozhan(item)">
                    <div class="menu-item-logo-wrapper">
                        <img class="menu-item-logo" :src="item.icon" alt="" />
                        
                    </div>
                    <div class="menu-item-title">{{item.title}}</div>
                </div>
                <div class="menu-item" @click="$router.push('more')">
                    <div class="menu-item-logo-wrapper">
                        <div class="menu-item-logo">
                            <svg t="1579079278485" class="icon" viewBox="0 0 1037 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2062" width="200" height="200">
                                <path d="M344.323556 497.872502H126.662662A126.855186 126.855186 0 0 1 0.002338 370.237869V153.551284a126.855186 126.855186 0 0 1 126.660324-126.660323h217.660894a126.855186 126.855186 0 0 1 126.660324 126.660323V370.237869a126.855186 126.855186 0 0 1-126.660324 127.634633zM126.662662 85.349572A68.201713 68.201713 0 0 0 58.460949 153.551284V370.237869a68.201713 68.201713 0 0 0 68.201713 68.201712h217.660894a68.201713 68.201713 0 0 0 68.201713-68.201712V153.551284a68.201713 68.201713 0 0 0-68.201713-68.201712zM344.323556 1024H126.662662A126.855186 126.855186 0 0 1 0.002338 896.365366V679.678782a126.855186 126.855186 0 0 1 126.660324-126.660323h217.660894a126.855186 126.855186 0 0 1 126.660324 126.660323V896.365366a126.855186 126.855186 0 0 1-126.660324 127.634634zM126.662662 611.477069a68.201713 68.201713 0 0 0-68.201713 68.201713V896.365366a68.201713 68.201713 0 0 0 68.201713 68.201713h217.660894a68.201713 68.201713 0 0 0 68.201713-68.201713V679.678782a68.201713 68.201713 0 0 0-68.201713-68.201713zM883.311948 1024H665.845916a126.855186 126.855186 0 0 1-126.660324-126.660324V679.678782a126.855186 126.855186 0 0 1 126.660324-126.660323h217.466032a126.855186 126.855186 0 0 1 126.660324 126.660323V896.365366a126.855186 126.855186 0 0 1-126.660324 127.634634zM665.845916 611.477069a68.201713 68.201713 0 0 0-68.201713 68.201713V896.365366a68.201713 68.201713 0 0 0 68.201713 68.201713h217.466032a68.201713 68.201713 0 0 0 68.201713-68.201713V679.678782a68.201713 68.201713 0 0 0-68.201713-68.201713zM774.578932 524.763463a125.686013 125.686013 0 0 1-89.636537-37.023787l-136.403425-136.403425a126.855186 126.855186 0 0 1 0-179.078211l136.403425-136.403425a126.855186 126.855186 0 0 1 179.078212 0l136.403425 136.403425a126.855186 126.855186 0 0 1 0 179.078211l-136.403425 136.403425a125.686013 125.686013 0 0 1-89.441675 37.023787z m0-466.304852a68.006851 68.006851 0 0 0-48.325785 19.486203l-136.403425 136.403426a68.201713 68.201713 0 0 0 0 96.456708l136.403425 136.403425a70.150333 70.150333 0 0 0 96.456708 0l136.403425-136.403425a68.396575 68.396575 0 0 0 0-96.456708l-136.403425-136.403426a68.006851 68.006851 0 0 0-48.130923-19.486203z" p-id="2063" fill="#ffffff"></path>
                            </svg>
                        </div>
                        
                    </div>
                    <div class="menu-item-title">更多</div>
                </div>
            </div>
        </div>
    </tk-scroll>

    <bar :active="1"></bar>
</div>
</template>

<script>
import axios from "axios";

export default {
    components: {
        bar: () => import('../component/bar.vue')
    },
    name: "welcome",
    created(){
         this.$http.post('/ump/proxy/myAppletsList').then(d => {
             if(d.appletsList){
                this.my = d.appletsList;
            }
        })
    },
    data() {
        return {
            // 所有功能菜单项的实例
            my:[],
            item_xunchashangbao: {
                title: '巡查上报',
                img: require('../../static/image/home_menu_xunchashangbao.png'),
                remind: false
            },
            item_anjianshangbao: {
                title: '案件上报',
                img: require('../../static/image/home_menu_anjianshangbao.png'),
                remind: false
            },
            item_duchaduban: {
                title: '督查督办',
                img: require('../../static/image/home_menu_duchaduban.png'),
                remind: false
            },
            item_shuangsuiji: {
                title: '双随机',
                img: require('../../static/image/home_menu_shuangsuiji.png'),
                remind: false
            },
            item_kaoqindaka: {
                title: '考勤打卡',
                img: require('../../static/image/home_menu_kaoqindaka.png'),
                remind: false
            },
            item_suishoupai: {
                title: '随手拍',
                img: require('../../static/image/home_menu_suishoupai.png'),
                remind: false
            },
            item_guijichaxun: {
                title: '轨迹查询',
                img: require('../../static/image/home_menu_guijichaxun.png'),
                remind: false
            },
            item_jifenpaiming: {
                title: '积分排名',
                img: require('../../static/image/home_menu_jifenpaiming.png'),
                remind: false
            },
            item_zhongxingongzuo: {
                title: '中心工作',
                img: require('../../static/image/home_menu_zhongxingongzuo.png'),
                remind: false
            },
            item_anjianchaxun: {
                title: '案件查询',
                img: '../../static/image/home_menu_anjianchaxun.png',
                remind: false
            },
            // 行政审批相关菜单暂时隐藏
            // item_xingzhengxiangduiren: {
            //     title: '行政相对人',
            //     img: require('../../static/image/home_menu_xingzhengxiangduiren.png'),
            //     remind: false
            // },
            // item_xingzhengxuke: {
            //     title: '行政许可',
            //     img: require('../../static/image/home_menu_xingzhengxuke.png'),
            //     remind: false
            // },
            // item_falvfagui: {
            //     title: '法律法规',
            //     img: require('../../static/image/home_menu_falvfagui.png'),
            //     remind: false
            // },
            // item_qiyexinxi: {
            //     title: '企业信息',
            //     img: require('../../static/image/home_menu_qiyexinxi.png'),
            //     remind: false
            // },
            // 功能菜单项对应的红点标记boolean值

            // 登录信息
            userName: '张政',
            avatar: '',
            // 轮播图list
            slides: [{
                    image: require('../../static/image/slide_example.png')
                },
                {
                    image: require('../../static/image/slide_example.png')
                },
                {
                    image: require('../../static/image/slide_example.png')
                },
                {
                    image: require('../../static/image/slide_example.png')
                },
                {
                    image: require('../../static/image/slide_example.png')
                }
            ],
            // 首页notice
            noticeTitle: '各重大园区四季度重大建设项目集中接受视察',

            // 【工作管理】菜单
            workManagementMenu: [],
            // 【信息查询】菜单
            infoQueryMenu: [],
        }
    },
    methods: {
        kuozhan(item){
            location.href=item.to;
        },
        /**
         * 跳转到【我的】
         */
        showMyProfile() {
            this.$router.push({
                path: '/my',
                query: {}
            });
        },
        /**
         * 跳转到【通知公告】
         */
        showNoticeList() {
            this.$router.push({
                path: '/notice-list',
                query: {}
            });
        },
        /**
         * 跳转到公告详情页
         */
        showNoticeDetail() {

        },
        /**
         * 菜单项的点击事件
         * @param item 功能模块
         */
        onMenuItemClick(item) {
            window.opinionWelcomePage = "";
            console.log('点击项的名称：' + item.title);
            switch (item.title) {
                case '巡查上报':
                    this.$router.push({
                        path: '/patrolReport',
                        query: {}
                    });
                    break;
                case '案件上报':
                    this.$router.push({
                        path: '/anjianshangbao',
                        query: {}
                    });
                    break;
                case '督查督办':
                    this.$router.push({
                        path: '/duchaduban',
                        query: {}
                    });
                    break;
                case '双随机':
                    this.$router.push({
                        path: '/doubleRandom-list',
                        query: {}
                    });
                    break;
                case '考勤打卡':
                    this.$router.push({
                        path: 'attendance',
                        query: {}
                    });
                    break;
                case '随手拍':
                    this.$router.push({
                        // path: '/odd/sspEdit',
                        path: 'photographEdit',
                        query: {}
                    });
                    break;
                case '轨迹查询':
                    this.$router.push({
                        path: '/grid-list',
                        query: {}
                    });
                    break;
                case '积分排名':
                    this.$router.push({
                        path: '/pointRank',
                        query: {}
                    });
                    break;
                case '中心工作':
                    this.$router.push({
                        path: '/centerWork',
                        query: {}
                    });
                    break;
                case '案件查询':
                    this.$router.push({
                        path: '/yishangbao',
                        query: {}
                    });
                    break;
                case '行政相对人':
                    this.$router.push({
                        path: '/administrativeCounterpart',
                        query: {}
                    });
                    break;
                case '行政许可':
                    this.$router.push({
                        path: '/administrativeLicense',
                        query: {}
                    });
                    break;
                case '法律法规':
                    this.$router.push({
                        path: '/lawAndRegulation',
                        query: {}
                    });
                    break;
                case '企业信息':
                    this.$router.push({
                        path: '/enterprise',
                        query: {}
                    });
                    break;
                default:
                    break;
            }
        },
        /**
         * 假如菜单项数量不能被4整除，则需要补充空白项，使得布局完善
         * @param menuList 功能菜单list
         * @private
         */
        _polishMenu(menuList) {
            if (menuList != null && menuList.length % 4 !== 0) {
                let polishNumber = 4 - menuList.length % 4;
                for (let i = 0; i < polishNumber; i++) {
                    menuList.splice(menuList.length, 0, {
                        title: '',
                        img: '',
                        remind: false
                    });
                }
            }
        },
        app_noticeTopDetail() {

            var arrayimg = [];
            var that = this;
            let url = '/wgh/app/app_noticeTopDetail.action';
            //let para={token: window.localStorage.userId};
            // var obj = "";
            // obj += toJson("userId", $.trim(window.localStorage.userId));
            // doPost("app_noticeTopDetail.action", obj, function (data) {
            //     if (!isNull(data.datas) && data.datas.length > 0) {
            //         for (var i = 0; i < data.datas.length; i++) {
            //             let o={
            //                 image:window.imgUrl + data.datas[i].pics,
            //                 title:data.datas[i].title
            //             };
            //             arrayimg.push(o);
            //
            //         }
            //         that.slides=arrayimg;
            //         console.log(that.slides);
            //     }
            // }, "");

            axios.post(url).then(data => {

                console.log(data);
                if (!isNull(data.datas) && data.datas.length > 0) {
                    for (var i = 0; i < data.datas.length; i++) {
                        let o = {
                            image: window.imgUrl + data.datas[i].pics,
                            title: data.datas[i].title
                        };
                        arrayimg.push(o);

                    }
                    that.slides = arrayimg;
                    console.log(that.slides);
                }

            })

        },
        checkLocation() {
            jsict.check.check((res) => {
                console.log('========= 获取location权限成功');
            }, (err) => {
                console.log('========= 获取location权限失败');
            }, 'location');
        }
    },
    mounted() {
        this.userLogo = window.localStorage.userLogo
        if (window.navigator.platform !== 'MacIntel' && window.navigator.platform !== 'iPhone' && window.navigator.platform !== 'Win32') {
            setTimeout(() => {
                this.checkLocation();
            }, 500)
        }
        ////////////////////////////////////////////////////////
        // TODO: 菜单demo
        this.workManagementMenu = [];
        this.infoQueryMenu = [];
        if (this.$store.state.platModule.wggl.userName) { //网格化
            this.workManagementMenu.push(this.item_xunchashangbao)
            this.workManagementMenu.push(this.item_kaoqindaka)
            this.workManagementMenu.push(this.item_suishoupai)
            this.infoQueryMenu.push(this.item_guijichaxun)
            this.infoQueryMenu.push(this.item_jifenpaiming)
            //   this.infoQueryMenu.push(this.item_zhongxingongzuo)

        }
        if (this.$store.state.platModule.zhzf.userName) { //综合执法
            this.workManagementMenu.push(this.item_anjianshangbao)
            this.infoQueryMenu.push(this.item_anjianchaxun)

        }


        this.$set(this.item_xunchashangbao, 'remind', true);
        this.$set(this.item_kaoqindaka, 'remind', true);

        // TODO: 登录信息展示
        this.avatar = window.localStorage.userLogo;
        this.userName = window.localStorage.userName;
        ////////////////////////////////////////////////////////
        this.app_noticeTopDetail();
        // zz: 进行jpush注册和定时定位任务启动
        setTimeout(function () {
            console.log('登陆成功，调用jpush');
            jsict.StartActivity.setJpushAlias(localStorage.getItem('userId'), function (data) {
                console.log('jpush注册成功！');
            }, function (error) {
                console.log("startActivity error:" + error);
            });
        }, 5000);
    }
}
</script>

<style lang="less" scoped>
.home-page {
    width: 100%;
    background-color: white;
    overflow-y: scroll;
    display: flex;
    flex-flow: column nowrap;
    align-items: center;

    .tk-scroll {
        width: 100%;
    }

    .user-info {
        width: 90%;
        height: 30px;
        display: flex;
        flex-flow: row nowrap;
        justify-content: start;
        align-items: center;
        margin-top: 18px;
        padding-top: 36px;

        .user-avatar-wrapper {
            width: 28.8px;
            height: 28.8px;
            display: flex;
            align-items: center;
            justify-content: center;

            .user-avatar {
                width: 100%;
                height: 100%;
                margin: auto;
            }
        }

        .user-name {
            margin-left: 12px;
            font-size: 22px;
            color: #111111;
        }

        .arrow-wrapper {
            height: 15px;
            display: flex;
            align-items: center;
            justify-content: center;
            margin-left: 9.6px;

            .arrow {
                height: 100%;
                width: auto;
            }
        }
    }

    .home-title-split {
        width: 100vw;
        height: 38px;
        border-bottom: 1px solid #f2f2f2;
    }

    .home-slide {
        margin-top: 13px;
    }

    .home-slide-title-wrapper {
        height: 26.4px;
        width: 100%;
        display: flex;
        flex-flow: row nowrap;
        align-items: center;
        background: linear-gradient(to right, #2164d7, transparent);

        .home-slide-title {
            width: 80%;
            font-size: 15px;
            color: white;
            font-weight: bold;
            margin-left: 21.6px;
            overflow: hidden;
            text-overflow: ellipsis;
        }
    }

    .notice {
        width: 90%;
        margin-top: 9px;
        padding-bottom: 4px;
        display: flex;
        flex-flow: row nowrap;
        justify-content: space-between;
        align-items: center;

        .notice-left-part {
            display: flex;
            flex-flow: row nowrap;
            justify-content: start;
            align-items: center;
            width: 81%;

            .notice-logo-wrapper {
                height: 24px;
                width: 42px;
                display: flex;
                align-items: center;
                justify-content: center;

                .notice-logo {
                    height: 100%;
                    width: auto;
                }
            }

            .notice-title {
                display: inline-block;
                white-space: nowrap;
                width: calc(100% - 42px);
                overflow: hidden;
                text-overflow: ellipsis;
                color: #666666;
                font-size: 14.4px;
                padding: 10px 0;
            }
        }

        .notice-right-part {
            width: 54px;
            height: 24px;
            background-color: #eeeeee;
            border-radius: 12px;
            display: flex;
            flex-flow: column nowrap;
            align-items: center;

            .more-notice-wrapper {
                display: flex;
                flex-flow: row nowrap;
                height: 100%;
                align-items: center;
            }

            .more-notice {
                color: #5b89f6;
            }
        }
    }

    .menu-wrapper {
        width: 100%;
        padding: 12px;
        padding-bottom: 30px;
        display: flex;
        flex-flow: column nowrap;
        justify-content: start;
        align-items: start;
        margin-top: 12px;

        .menu-title-wrapper {
            display: flex;
            flex-flow: row nowrap;
            justify-content: start;
            align-items: center;
            padding-left: 15px;

            .menu-title {
                font-size: 18px;
                color: #333333;
            }

            .add-menu-item {
                width: 15.6px;
                height: 15.6px;
                margin-left: 18px;
            }
        }

        .menu {
            display: flex;
            flex-flow: row wrap;
            align-items: center;
            width: 100%;

            .menu-item {
                margin-top: 19.6px;
                display: flex;
                flex-flow: column nowrap;
                align-items: center;
                width: 25%;
                height: 90px;

                .menu-item-logo-wrapper {
                    position: relative;
                    width: 72px;
                    height: 72px;
                    flex: 1;
                    .menu-item-logo {
                        background: #2164d7;
                        border-radius: 15px;
                        position: absolute;
                        height: 60px;
                        width: 60px;
                        top: 6px;
                        left: 6px;
                        .icon{
                            height:40px;
                            width:40px;
                            margin-left:10px;
                            margin-top:10px;
                        }
                    }

                    .menu-item-remind {
                        position: absolute;
                        width: 14.4px;
                        height: 14.4px;
                        right: 0;
                    }
                }

                .menu-item-title {
                    font-size: 14.4px;
                    color: #333333;
                }
            }
        }
    }
}
</style>
