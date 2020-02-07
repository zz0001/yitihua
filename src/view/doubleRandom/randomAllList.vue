<template>
    <div class="random-finished-list">
        <tk-header>
            双随机任务记录
            <div slot="right" @click="jumpFilter">
                <img style="width: 0.8rem; height: 0.8rem;" src="../image/icon_filter.png">
            </div>
        </tk-header>
        <div class="page-content">
            <search-content v-model="newVV" placeholder="输入企业名称查询"></search-content>

            <div class="case-list-scroll-wrapper">
                <pot-scroll ref="scroll"
                             :data="caseList"
                             :options="options"
                             @pulling-down="initList"
                             @pulling-up="loadMore">
                    <div class="case-scroll-list">
                        <div v-for="item in caseList" @click="onItemClick(item)">
                            <div class="case-item">
                                <div class="case-item-top">
                                    <div class="case-item-title">{{item.checkedNumber}}</div>
                                    <div class="case-item-status">{{status(item.check_state)}}</div>
                                </div>
                                <div class="grey-line-wrapper">
                                    <div class="grey-line"></div>
                                </div>
                                <div class="case-item-info-line">
                                    <div class="case-item-info-line-title">抽查时间：</div>
                                    <div class="case-item-info-line-content">{{date(item.startTime).substr(0,10)}}</div>
                                </div>
                                <div class="case-item-info-line">
                                    <div class="case-item-info-line-title">抽查地址：</div>
                                    <div class="case-item-info-line-content">{{item.checkedaddress}}
                                    </div>
                                </div>
                                <div class="case-item-info-line">
                                    <div class="case-item-info-line-title">抽查类型：</div>
                                    <div class="case-item-info-line-content">{{item.check_type}}</div>
                                </div>
                                <div class="case-item-info-line">
                                    <div class="case-item-info-line-title">执法人员：</div>
                                    <div class="case-item-info-line-content">{{item.checkPerson}}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </pot-scroll>
            </div>
        </div>
    </div>
</template>

<script>
    import SearchContent from '../../component/searchContent';
    import {getDoubleRandomList} from "../../modules/getData";

    export default {
        name: "normalCaseList",
        components: {
            SearchContent
        },
        data() {
            return {
                caseList: [],
                pullDownRefreshTXT: '刷新成功',
                totalNum: 0,
                id: '',
                newVV: '',
                pageNumber: 0,
            }
        },
        watch: {
            newVV(newV) {
                console.log('newV=' + newV)
                this.getList();
            }
        },
        computed: {
            options() {
                return {
                    pullDownRefresh: {
                        threshold: 40,
                        txt: this.pullDownRefreshTXT
                    },
                    pullUpLoad: this.pullUpLoadObj,
                    scrollbar: false
                }
            },
            pullUpLoadObj: function () {
                return this.caseList.length < this.totalNum ?
                    {
                        threshold: 40,
                        txt: '加载更多'
                    } : false;
            },
            date() {
                return function (timestamp) {
                    let date = new Date(timestamp);
                    let Y = date.getFullYear() + '-';
                    let M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-';
                    let D = date.getDate() < 10 ? '0' + date.getDate() + ' ' : date.getDate() + ' ';
                    let h = date.getHours() < 10 ? '0' + date.getHours() + ':' : date.getHours() + ':';
                    let m = date.getMinutes() < 10 ? '0' + date.getMinutes() + ':' : date.getMinutes() + ':';
                    let s = date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds();
                    return Y + M + D + h + m + s;
                }
            },
            status() {
                return function (status) {
                    switch (status) {
                        case 0:
                            return '未检查';
                        case 1:
                            return '已检查';
                    }
                }
            }
        },
        mounted() {
            this.id = this.$route.query.id;
            console.log(this.id);
            this.caseList.splice(0,this.caseList.length)
            this.getList();
        },
        methods: {
            back() {
                this.$store.state.random_filter_startTime = '';
                this.$store.state.random_filter_endTime = '';
                this.$router.go(-1);
            },
            jumpFilter() {
                this.$router.push('/doubleFilter');
            },
            searchMethods(val, val2) {
                console.log('val11==' + val)
            },
            async getList() {
                let res = await getDoubleRandomList(this.pageNumber, this.newVV, '',
                    this.$store.state.random_filter_startTime, this.$store.state.random_filter_endTime, '1');
                if (res.code === 0) {
                    this.hideLoading();
                    this.totalNum = res.totalCount;
                    if (this.pageNumber === 0) {
                        this.caseList = res.datas;
                    } else {
                        this.caseList = [...this.caseList, ...res.datas];
                    }
                } else {
                    this.hideLoading();
                    this.toast(res.message);
                }
            },
            initList() {
                console.log("刷新");
                this.pageNumber = 0;
                this.getList();
            },
            loadMore() {
                console.log("加载更多");
                this.pageNumber++;
                this.getList();
            },
            onItemClick(item) {


                this.$store.state.random_id = item.id;
                this.$store.state.random_company = item.checkedEnterpriseName;
                this.$store.state.random_number = item.checkedEnterpriseName;
                this.$store.state.random_time = item.startTime;
                this.$store.state.random_address = item.checkedaddress;
                this.$store.state.random_type = item.check_type;
                this.$store.state.random_person = item.checkPerson;
                this.$store.state.random_checkState = item.check_state;
                this.$store.state.random_checkResult = item.check_result;
                this.$store.state.random_describe = item.remarks;
                this.$store.state.endTime = item.endTime;


                var tempAry=[];
                if (item.pic_annexno == '' || item.pic_annexno == null || item.pic_annexno == undefined) {
                    this.$store.state.random_pictures = tempAry;
                } else {
                    this.$store.state.random_pictures = item.check_mission_number;
                }

                this.$router.push({
                    path: '/randomDetail',
                });
            }
        }
    }
</script>

<style lang="less" scoped>
    @import '../../style/less-variable';

    .random-finished-list {
        width: 100%;
        height: 100%;
        top: 0;
        background: #f4f4f4;
        overflow: scroll;

        .page-header {
            position: fixed;
            top: 0;
            width: 100%;
            height: 2rem;
            z-index: 100;
        }

        .page-content {
            position: relative;
            top: 1rem;
            width: 100%;
            overflow-y: auto;
            height: calc(100% - 2rem);

            .case-list-scroll-wrapper {
                width: 100%;
                top: 2.4rem;
                overflow: scroll;
                height: 92%;
                -webkit-overflow-scrolling: touch;

                .cube-scroll-wrapper {
                    width: 100%;
                }

                .case-scroll-list {
                    width: 100%;

                    .case-item {
                        display: flex;
                        flex-flow: column nowrap;
                        align-items: center;
                        width: 100%;
                        background-color: white;
                        margin-bottom: 0.3rem;

                        .case-item-top {
                            display: flex;
                            flex-flow: row nowrap;
                            justify-content: space-between;
                            align-items: center;
                            width: 100%;
                            padding: @padding-height @padding-width;

                            .case-item-title {
                                color: @content-color;
                                font-size: 1.2rem;
                                overflow: hidden;
                                white-space: nowrap;
                                text-overflow: ellipsis;
                                width: 70%;
                            }

                            .case-item-status {
                                font-size: 1rem;
                                text-align: right;
                            }
                        }

                        .grey-line-wrapper {
                            width: 100%;
                            padding: 0 @padding-width;

                            .grey-line {
                                height: 1px;
                                background-color: @grey-split-line;
                            }
                        }

                        .case-item-info-line {
                            display: flex;
                            flex-flow: row nowrap;
                            justify-content: flex-start;
                            align-items: center;
                            width: 100%;
                            padding: @padding-height @padding-width;

                            .case-item-info-line-title {
                                font-size: 1rem;
                                color: @title-color;
                                text-align: start;
                            }

                            .case-item-info-line-content {
                                width: 70%;
                                font-size: 1rem;
                                color: @title-color;
                                overflow: hidden;
                                white-space: nowrap;
                                text-overflow: ellipsis;
                            }
                        }
                    }
                }
            }
        }
    }
</style>
