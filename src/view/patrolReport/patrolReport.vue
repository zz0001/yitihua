<!-- 巡查上报首页 -->
<template>
    <div class="patrol-report">
        <tk-header>
            <div>巡查上报</div>
            <div slot="right" @click="showInspectRecord">已上报</div>
        </tk-header>
        <div class="content">
            <div class="manage-list">
                <!-- 巡查上报列表 -->
                <tk-cell-one :spread="true" v-for="item of manageList" :key="item.id">
                    <div class="title">{{ item.dmmc }}</div>
                    <div v-if="item.bigClass.length" class="count">共 {{item.bigClass.length}} 项</div>
                    <ul slot="spread">
                        <li v-for="i of item.bigClass" :key="i.id" @click="pupop(i, item.dmmc, item.id)">
                            {{ i.dmmc }}
                            <span v-if="hasStorage(i.id)">暂存中</span>
                        </li>
                    </ul>
                </tk-cell-one>
            </div>
        </div>
    </div>
</template>

<script>
    import axios from "axios";

    export default {
        props: {
            spread: {
                default() {
                    return "";
                }
            }
        },
        data() {
            return {
                manageList: [],
                longitude: '',
                latitude: '',
                address: '',
            };
        },
        computed: {},
        created() {
            // 获取巡查上报列表内容
            // axios.post("/api/patrolReport").then(d => {
            //     this.manageList = d.map(item => {
            //         return item;
            //     });
            // });

            let para = {para: "userId=" + window.localStorage.userId};
            axios.post(this.baseURL + "getEventcomponentForInfoCollection.action", para).then(d => {
                this.manageList = d;
                console.log(this.manageList.length);
            });
        },
        mounted() {
        },
        methods: {
            pupop(item, title, id) {
                app.$createPotDialog({
                    $props: {
                        type: "confirm",
                        confirmBtn: '存在',
                        cancelBtn: '无',
                        content: item.dmmc,
                        maskClosable: true
                    },
                    $events: {
                        confirm: (A) => {
                            this.$router.push({
                                path: "patrolReport-detail",
                                query: {
                                    item: item,
                                    title: title,
                                    id: id,
                                }
                            });
                        }
                    }
                }).show();
            },
            showInspectRecord() {
                console.log('showInspectRecord');
                this.$router.push({
                    path: "/patrolRecord",
                });
            },
            hasStorage(id) {
                return this.$store.state.patrolReportStorage[id] && this.$store.state.patrolReportStorage[id].hasStorage;
            },
            /**
             * 点击"无问题"，直接上报
             */
            submit() {
                let para = {
                    para: 'loginId=' + window.localStorage.userId
                    + '&origin' + ''
                    + '&eventComponent' + this.item.id
                    + '&bigClass' + ''
                    + '&location' + this.address
                    + '&problem' + ''
                    + '&longitude' + this.longitude
                    + '&latitude' + this.latitude
                    + '&reportPics' + ''
                    + '&questionStatus' + '0'
                    + '&score' + this.score
                    + '&dispose' + this.autoHandle ? '1' : '0'
                };
                axios.post(this.baseURL + "MobileCaseReport.action", para).then(d => {
                });
            }
        }
    };
</script>

<style lang="less" scoped>
    @import "../../style/expecial.less";

    .patrol-report {
        width: 100vw;
        height: 100vh;

        .content {
            width: 100vw;
            height: calc(100vh - 80px);

            .manage-list {
                width: 100%;
                min-height: 50px;
                line-height: 50px;

                .title {
                    min-width: 40%;
                    float: left;
                }

                .count {
                    margin-left: 40px;
                }

                li {
                    position: relative;
                    list-style: inside;
                    width: 100%;
                    height: 50px;
                    line-height: 50px;
                    border-bottom: 1px solid #eee;
                    padding-left: 50px;

                    span {
                        position: absolute;
                        display: inline-block;
                        border: 1px solid #ddd;
                        border-radius: 15px;
                        background-color: #ddd;
                        width: 60px;
                        height: 30px;
                        font-size: 12px;
                        right: 40px;
                        top: 10px;
                        text-align: center;
                        line-height: 30px;
                    }
                }
            }
        }
    }
</style>
