<!-- 我的待办-首页 -->
<template>
    <div class="to-deal">
        <tk-header :back="false">我的待办</tk-header>
        <tk-scroll>
            <tk-cell-one
                v-if="$store.state.platModule.wggl.userName"
                :spread="true"
                v-for="item of dealList"
                :key="item.id"
            >
                <span>{{ item.name }}</span>
                <ul slot="spread">
                    <li v-for="i of item.detail" @click="showDetail(i, item.name)">
                        <div class="theme">{{ i.theme }}</div>
                        <div>{{ i.address }}</div>
                        <div>
                            <span>{{ i.endTime }}</span>
                            <span>{{ i.classification }}</span>
                        </div>
                    </li>
                </ul>
            </tk-cell-one>
            <tk-cell-one
                v-if="$store.state.platModule.zhzf.userName"
                :spread="true"
                v-for="item of dealList2"
                :key="item.id"
            >
                <span>{{ item.name }}</span>
                <ul slot="spread">
                    <li v-for="i of item.detail" @click="showDetail(i, item.name)">
                        <div class="theme">{{ i.theme }}</div>
                        <div>{{ i.address }}</div>
                        <div>
                            <span>{{ i.endTime }}</span>
                            <span>{{ i.classification }}</span>
                        </div>
                    </li>
                </ul>
            </tk-cell-one>
            <tk-cell-one
                v-if="$store.state.platModule.zwfw.userName"
                :spread="true"
                v-for="item of dealList3"
                :key="item.id"
            >
                <span>{{ item.name }}</span>
                <span class="history" @click="historyTodo()">历史待办</span>
                <ul slot="spread">
                    <li
                        v-for="i of item.detail"
                        @click="showDetail(i, item.name)"
                        :key="i.id"
                        class="approval_sign"
                    >
                        <div class="theme">{{ i.theme }}</div>
                        <div>{{ i.address }} | {{ i.time }}</div>
                        <span class="sign" @click="alert(i)" v-if="!i.sign">签收</span>
                        <span class="sign" @click="alert(i)" v-if="i.sign">办理</span>
                    </li>
                </ul>
            </tk-cell-one>
        </tk-scroll>
        <bar :active="0"></bar>
    </div>
</template>

<script>
import axios from "axios";

export default {
    components: {
        bar: () => import("../../component/bar.vue")
    },
    props: {
        spread: {
            default() {
                return "";
            }
        }
    },
    data() {
        return {
            dealList: [],
            dealList2: [],
            dealList3: [],
            gridlist: [],
            zhList: [],
            anjianList: [],
            doubleList: [],
            dubanList: [],
            approvalList: [],
            signSuccess: true // 暂时作为签收成功与否的标志（接口写好后删除）
        };
    },
    created() {
        var that = this;
        // 获取待办内容
        // var obj = "";
        // obj += toJson("loginId", window.localStorage.loginId) + "&";
        // obj += toJson("queryType", "1") + "&";
        // obj += toJson("pageSize", "20") + "&";
        // obj += toJson("pageNum", pageNum) + "&";
        let obj = { para: "userId=&queryType=1&pageSize=20&pageNum=1" };
        this.url = "/wgh/app/dsbOrderList.action";

        let zhobj = {
            para: "userId=&" + "pageSize=20&pageNum=1"
        };
        this.zhurl = "/wgh/app/queryMessage.action";

        //  let userid='ff8080816df97a2b016dfc93a8f80420';
        // let userid=window.localStorage.userId;
        let obj3 = { page: 1, size: 100 };
        let anjianurl =
            "/zhzf/app/case/getAppMyCaseList?page=0&size=100&userId=";
        let doubleurl =
            "/zhzf/app/doublerandom/appDoubleRandomWaitDone?page=0&size=15&enterpriseName=&checkType=&startTime=&endTime=&checkState=0&userId=";
        let dubanurl =
            "/zhzf/app/mission/appMissionQuery?page=0&size=500&missionName=&missionType=&startTime=&endTime=&userId=";

        if (this.$store.state.platModule.wggl.userName) {
            Promise.all([
                axios.post(this.url, obj).then(d => {
                    console.log(d);
                    let detailarr = d.datas;
                    let gridlist = [];

                    that.gridlist = detailarr.map(i => {
                        let theme = "";
                        if (i.eventComponent && i.bigClass) {
                            theme = i.eventComponent + " | " + i.bigClass;
                        }
                        return {
                            id: 1,
                            rowId: i.rowId,
                            theme: "工单编号：" + i.caseNo,
                            address: i.location,
                            endTime: i.reportTime + "截至",
                            classification: "|" + i.origin
                        };
                    });

                    console.log(that.gridlist);
                }),
                axios.post(this.zhurl, zhobj).then(d => {
                    console.log(d);
                    let detailarr = d.data;

                    that.zhList = detailarr.map(i => {
                        let theme = "";
                        if (i.readStatus == "0") {
                            theme = "未签收";
                        } else {
                            theme = "已签收";
                        }
                        return {
                            id: 2,
                            rowId: i.rowId,
                            theme: "创建时间" + i.createTime,
                            address: i.message,
                            endTime: "",
                            classification: theme
                        };
                    });

                    console.log(that.zhList);
                })
            ]).then(values => {
                // 依次从返回的数据接口数组中获取不同接口数据
                this.dealList = [
                    {
                        id: 1,
                        name: "网格任务",
                        detail: that.gridlist
                    },
                    {
                        id: 2,
                        name: "指挥调度",
                        detail: that.zhList
                    }
                ];
            });
        }
        if (this.$store.state.platModule.zhzf.userName) {
            Promise.all([
                axios.post(anjianurl).then(d => {
                    console.log(d);
                    if (d.code == 0) {
                        let detailarr = d.datas;

                        that.anjianList = detailarr.map(i => {
                            console.log(i);

                            return {
                                id: 3,
                                rowId: i.id,
                                theme: "案件编号：" + i.caseNo,
                                address: i.location,
                                endTime: "案发时间" + i.caseTime,
                                classification: "| " + i.tacheName,
                                tacheName: i.tacheName
                            };
                        });
                    }
                }),
                axios.post(doubleurl).then(d => {
                    console.log(d);
                    if (d.code == 0) {
                        let detailarr = d.datas;

                        that.doubleList = detailarr.map(i => {
                            let date = new Date(i.startTime);
                            let Y = date.getFullYear() + "-";
                            let M =
                                (date.getMonth() + 1 < 10
                                    ? "0" + (date.getMonth() + 1)
                                    : date.getMonth() + 1) + "-";
                            let D =
                                date.getDate() < 10
                                    ? "0" + date.getDate() + " "
                                    : date.getDate() + " ";
                            let h =
                                date.getHours() < 10
                                    ? "0" + date.getHours() + ":"
                                    : date.getHours() + ":";
                            let m =
                                date.getMinutes() < 10
                                    ? "0" + date.getMinutes() + ":"
                                    : date.getMinutes() + ":";
                            let s =
                                date.getSeconds() < 10
                                    ? "0" + date.getSeconds()
                                    : date.getSeconds();
                            let time = Y + M + D + h + m + s;
                            return {
                                id: 4,
                                rowId: i.id,
                                theme: "执法人员：" + i.checkPerson,
                                address: i.checkedaddress,
                                endTime: "抽查时间" + time,
                                classification: "| " + i.check_type,
                                datas: i
                            };
                        });
                    }
                }),
                axios.post(dubanurl).then(d => {
                    console.log(d);
                    if (d.code == 0) {
                        let detailarr = d.datas;

                        that.dubanList = detailarr.map(i => {
                            return {
                                id: 5,
                                rowId: i.id,
                                theme: "任务编号：" + i.missionSno,
                                address: "任务内容：" + i.missionContent,
                                endTime: i.missionDeadline + "截止",
                                classification: "| " + i.missionType,
                                datas: i
                            };
                        });
                    }
                })
            ]).then(values => {
                // 依次从返回的数据接口数组中获取不同接口数据
                this.dealList2 = [
                    {
                        id: 3,
                        name: "案件",
                        detail: that.anjianList
                    },
                    {
                        id: 4,
                        name: "双随机",
                        detail: that.doubleList
                    },
                    {
                        id: 5,
                        name: "督查督办",
                        detail: that.dubanList
                    }
                ];
            });
        }

        if (this.$store.state.platModule.zwfw.userName) {
            let xzspUrl = "/xzsp/mobile/waitToDoList.action?&userId=";
            Promise.all([
                axios.post(xzspUrl).then(d => {
                    console.log(d);
                    if (d.rows) {
                        that.approvalList = d.rows.map(item => {
                            return {
                                id: item.id,
                                rowId: item.row_id,
                                theme: item.servname,
                                address: item.casefrom,
                                time: item.createtime,
                                sign: item.assignee
                            };
                        });
                    }
                })
            ]).then(values => {
                // 依次从返回的数据接口数组中获取不同接口数据
                that.dealList3 = [
                    {
                        id: 6,
                        name: "行政审批",
                        detail: that.approvalList
                    }
                ];
            });
        }
    },
    mounted() {
        var that = this;
    },
    methods: {
        showDetail(i, name) {
            switch (name) {
                case "网格任务":
                    this.$router.push({
                        path: "/gridCaseDetail",
                        query: { id: i.rowId }
                    });
                    break;
                case "指挥调度":
                    this.$router.push({
                        path: "/handleDispatch",
                        query: { id: i.rowId }
                    });
                    break;
                case "案件":
                    // this.$router.push({path: '/ajWaitToDo', query: {id: i.rowId,tacheName:i.tacheName}});
                    if (
                        i.tacheName === "立案审批" ||
                        i.tacheName === "立案审批审核"
                    ) {
                        var type;
                        i.tacheName === "立案审批" ? (type = 1) : (type = 2);
                        console.log("type==" + type);
                        this.$router.push({
                            path: "/caseRegisterDetail",
                            query: {
                                id: i.rowId,
                                type: type,
                                rightTitle: i.tacheName,
                                editable: true
                            }
                        });
                    } else if (
                        i.tacheName === "调查取证" ||
                        i.tacheName === "调查取证审核"
                    ) {
                        var type;
                        i.tacheName === "调查取证" ? (type = 1) : (type = 2);
                        this.$router.push({
                            path: "/caseSurveryDetail",
                            query: {
                                id: i.rowId,
                                type: type
                            }
                        });
                    } else if (
                        i.tacheName === "处罚告知" ||
                        i.tacheName === "处罚告知审核"
                    ) {
                        var type;
                        i.tacheName === "处罚告知" ? (type = 1) : (type = 2);
                        this.$router.push({
                            path: "/punishNoticeDetail",
                            query: {
                                id: i.rowId,
                                type: type
                            }
                        });
                        // this.$router.push('/punishNoticeDetail');
                    } else if (i.tacheName === "处罚决定") {
                        var type;
                        i.tacheName === "处罚决定" ? (type = 1) : (type = 2);
                        this.$router.push({
                            path: "/decsionDetail",
                            query: {
                                id: i.rowId,
                                type: type
                            }
                        });
                        // this.$router.push('/decsionDetail');
                    } else {
                        var type;
                        i.tacheName === "结案归档" ? (type = 1) : (type = 2);
                        this.$router.push({
                            path: "/caseEndDetail",
                            query: {
                                id: i.rowId,
                                type: type
                            }
                        });
                        // this.$router.push('/caseEndDetail');
                    }
                    break;
                case "双随机":
                    this.$router.push({
                        path: "/doubleRandom",
                        query: { datas: JSON.stringify(i.datas) }
                    });
                    break;
                case "督查督办":
                    this.$router.push({
                        path: "/handleInspect",
                        query: { datas: JSON.stringify(i.datas) }
                    });
                    break;
                default:
                    break;
            }
        },
        alert(i) {
            var _this = this;
            if (!i.sign) {
                let _obj = {
                    row_id: i.rowId,
                    taskid: i.id
                };
                axios.post("/xzsp/mobile/getClaim.action", _obj).then(d => {
                    console.log(d);
                    if (d.code == "0") {
                        var signs;
                        signs = _this
                            .$createSignSuccess({
                                $props: {
                                    content: "签收成功"
                                }
                            })
                            .show();
                        setTimeout(() => {
                            signs.hide();
                            i.sign = "2";
                        }, 2000);
                    } else {
                        var signs;
                        signs = this.$createSignFail({
                            $props: {
                                content: "提交失败，请稍后再次提交"
                            }
                        }).show();
                        setTimeout(() => {
                            signs.hide();
                        }, 2000);
                    }
                });
            } else {
                this.$router.push({
                    path: "/approvalDeal",
                    query: {
                        id: i.id,
                        rowId: i.rowId,
                        theme: i.theme
                    }
                });
            }
        },
        historyTodo() {
            this.$router.push({
                path: "/historyDeal"
            });
        }
    }
};
</script>

<style lang="less">
@import "../../style/expecial.less";

.to-deal {
    width: 100vw;
    height: 100vh;
    .spread {
        background: #f8f8f8;
    }
    .history {
        display: inline-block;
        position: absolute;
        width: 120px;
        height: 30px;
        top: 20%;
        right: 40px;
        background-color: #999;
        text-align: center;
        line-height: 30px;
        color: #eee;
        border-radius: 15px;
    }
    li {
        position: relative;
        border-bottom: 1px solid #eee;
        margin: 10px 0 10px 30px;

        .theme {
            color: #000;
        }
    }
    .approval_sign {
        position: relative;
        .sign {
            display: inline-block;
            position: absolute;
            width: 60px;
            height: 30px;
            top: 25%;
            right: 20px;
            background-color: #999;
            text-align: center;
            line-height: 30px;
            color: #eee;
            border-radius: 15px;
        }
    }
}
</style>
