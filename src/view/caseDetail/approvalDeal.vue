<template>
    <div class="approval-deal">
        <tk-header>行政审批处理</tk-header>
        <div class="wrap">
            <div class="theme">{{ theme }}</div>
            <tk-detail-photo :list="img"></tk-detail-photo>
            <tk-title>办件信息</tk-title>
            <tk-detail :list="list1"></tk-detail>
            <tk-title>申办人信息</tk-title>
            <tk-detail :list="list2"></tk-detail>
            <div class="case-handle-process">
                <div class="case-handle-process-title">处理流程</div>
                <div class="case-handle-process-list-wrapper">
                    <div
                        class="case-handle-process-item"
                        v-for="(item, index) in processList"
                        :key="index"
                    >
                        <div class="case-handle-process-item-left">
                            <div
                                class="item-circle"
                                :style="index === processList.length - 1 ? {'backgroundColor': '#cccccc'}:{}"
                            ></div>
                            <div class="item-line"></div>
                        </div>
                        <div class="case-handle-process-item-right">
                            <div class="item-step">{{item.name}}</div>
                            <div class="item-info">{{item.userName}} | {{item.endTime}}</div>
                            <div class="item-result">{{item.message}}</div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="handle-case-btn">
                <tk-button @click="_handle">处理</tk-button>
            </div>
        </div>
    </div>
</template>

<script>
import axios from "axios";
export default {
    data() {
        return {
            url: "/xzsp/mobile/caseDetail.action",
            id: "",
            rowId: "",
            theme: "",
            img: [
                // {
                //     src: require("/static/img/ch01.jpg")
                // },
                // {
                //     src: require("/static/img/ch02.jpg")
                // },
                // {
                //     src: require("/static/img/ch03.jpg")
                // }
            ],
            list1: [],
            list2: [],
            operationList: [],
            processList: []
        };
    },
    created() {
        this.theme = this.$route.query.theme;
        this.rowId = this.$route.query.rowId;
        this.id = this.$route.query.id;
        let obj = { row_id: this.rowId };

        axios.post(this.url, obj).then(d => {
            console.log(d);
            this.processList = d.rows.map(item => {
                return {
                    name: item.tachename,
                    userName: item.username,
                    message: item.tachenote,
                    endTime: item.tacheenddatetime
                };
            });
            let baseinfo = d.baseinfo[0];
            this.list1 = [
                {
                    key: "事项编号",
                    value: baseinfo.servcode
                },
                {
                    key: "申请人类型",
                    value: baseinfo.caseapplicanttype
                },
                {
                    key: "办件申请时间",
                    value: baseinfo.caseapplydatetime
                }
            ];
            this.list2 = [
                {
                    key: "申请人姓名",
                    value: baseinfo.caseapplicant
                },
                {
                    key: "申请者证件类型",
                    value: baseinfo.caseapplicantpapertype
                },
                {
                    key: "申请者证件号码",
                    value: baseinfo.caseapplicantpapercode
                },
                {
                    key: "申请者手机",
                    value: baseinfo.caseapplicantmobile
                },
                {
                    key: "申请者地址",
                    value: baseinfo.address
                }
            ];
        });

        let stepObj = {
            taskid: this.id
        };
        axios.post("/xzsp/mobile/nextStepButton.action", stepObj).then(d => {
            this.operationList = d.buttons.map(item => {
                return {
                    name: item.transname,
                    transid: item.transid,
                    id: item.id
                };
            });
        });
    },
    methods: {
        _handle() {
            var _this = this;
            this.$createTkBottomSelect({
                $props: {
                    data: this.operationList
                },
                $events: {
                    itemClick: (index, item) => {
                        // 除了取消按钮 其他的都会跳转到行政审批处理approvalExamine页面
                        if (index != 3) {
                            this.$router.push({
                                path: "/approvalExamine",
                                query: {
                                    rowId: _this.rowId,
                                    transname: item.name,
                                    transid: item.transid,
                                    id: item.id,
                                    taskid: _this.id
                                }
                            });
                        }
                    }
                }
            }).show();
        }
    }
};
</script>

<style lang="less" scoped>
.approval-deal {
    width: 100vw;
    height: 100vh;
    position: relative;
    .wrap {
        background-color: white;
        width: 100vw;
        height: calc(100vh - 80px);
        .theme {
            font-size: 18px;
            padding-left: 20px;
            padding-top: 10px;
        }
        .case-handle-process {
            width: 100%;
            display: flex;
            flex-flow: column nowrap;
            justify-content: start;
            margin-top: 25px;

            .case-handle-process-title {
                font-size: 18px;
                color: #333333;
                margin: 18px 0 18px 24px;
            }

            .case-handle-process-list-wrapper {
                width: 100%;
                display: flex;
                flex-flow: column nowrap;
                justify-content: start;
                align-items: start;

                .case-handle-process-item {
                    position: relative;
                    width: calc(100% - 48px);
                    height: auto;
                    margin: 0 24px 0 24px;
                    display: flex;
                    flex-flow: row nowrap;
                    justify-content: start;
                    align-items: start;

                    .case-handle-process-item-left {
                        height: 100%;
                        display: flex;
                        flex-flow: column nowrap;
                        justify-content: start;
                        align-items: center;

                        .item-circle {
                            width: 16px;
                            height: 16px;
                            border-radius: 50%;
                            border: 1px solid #cccccc;
                        }

                        .item-line {
                            position: absolute;
                            left: 6.5px;
                            top: 16px;
                            width: 1px;
                            height: calc(100% - 16px);
                            background-color: #f9f9f9;
                        }
                    }

                    .case-handle-process-item-right {
                        display: flex;
                        flex-flow: column nowrap;
                        justify-content: start;
                        align-items: left;
                        margin-left: 20px;

                        .item-step {
                            font-size: 18px;
                            color: #333333;
                            padding-bottom: 10px;
                        }
                        .item-info {
                            padding-bottom: 30px;
                            padding-bottom: 7px;
                            color: #999;
                        }

                        .item-result {
                            padding-bottom: 30px;

                            color: #999;
                        }
                    }
                }
            }
        }
    }
}
</style>