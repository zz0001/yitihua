<template>
    <div>
        <tk-header>积分明细</tk-header>
        <tk-container>
            <div class="time-filter-wrapper" @click="selectMonth">
                <div class="time-filter">
                    <div class="time-filter-title">{{date}}</div>
                    <img class="time-filter-arrow" src="../../../static/image/user_info_arrow.png" alt=""/>
                </div>
            </div>
            <div class="point-detail-list-scroll-wrapper">
                <tk-scroll
                        :param="param"
                        ref="scroll"
                        :options="{
                            pullDown: false,
                            pullUp: false
                        }"
                        v-model="pointDetailList"
                        :url="baseURL+'getIntegralRank.action'">
                    <div class="point-detail-list">
                        <div class="point-detail-item">
                            <div class="point-detail-item-left">总积分</div>
                            <div class="point-detail-item-right">
                                <div class="point-detail-item-point">4396</div>
                            </div>
                        </div>
                        <div class="point-detail-item-wrapper" v-for=" (item, index) in pointDetailList">
                            <div class="point-detail-item">
                                <div class="point-detail-item-left">12月25日</div>
                                <div class="point-detail-item-right">
                                    <div class="point-detail-item-point">+{{item.score}}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </tk-scroll>
            </div>
        </tk-container>
    </div>
</template>

<script type="text/ecmascript-6">
    export default {
        name: "pointDetail",
        data() {
            return {
                pointDetailList: [],
                param: {
                    startTime: '',
                    userName: '',
                    loginId: '',
                },
                date: '本月',
                mouthPicker: {}
            }
        },
        created() {

        },
        mounted() {
            this.getCurrentDate();
        },
        methods: {
            /**
             * 获取现在的年月（yyyy-mm）
             */
            getCurrentDate() {
                let year = new Date().getFullYear();
                let month = new Date().getMonth() + 1;
                this.$set(this.param, 'startTime', year.toString() + '-' + month.toString().padStart(2, '0'));
            },
            /**
             * 弹出月份选择器
             */
            selectMonth() {
                let year = new Date().getFullYear();
                let month = new Date().getMonth();
                this.mouthPicker = this.$createPotDatePicker({
                    title: '请选择月份',
                    min: new Date(year - 3, 7, 8, 8, 0, 0),
                    max: new Date(year + 7, 9, 20, 20, 59, 59),
                    value: new Date(),
                    format: {
                        year: 'YY年',
                        month: 'MM月'
                    },
                    columnCount: 2,
                    onSelect: (v) => {
                        console.log(v);
                        let date = (v.getFullYear()).toString() + '-' + (v.getMonth() + 1).toString().padStart(2, '0');
                        console.log(date);
                        if (month === v.getMonth() && year === v.getFullYear()) {
                            this.date = '本月';
                        } else {
                            this.date = date;
                        }
                        this.param = {
                            startTime: date,
                            userName: '',
                            loginId: '',
                        }
                    }
                });
                this.mouthPicker.show();
            }
        }
    }
</script>

<style lang="less" scoped>
    .time-filter-wrapper {
        width: 100vw;
        background-color: white;
        display: flex;
        flex-flow: column nowrap;
        align-items: center;

        .time-filter {
            display: flex;
            flex-flow: row nowrap;
            align-items: center;
            height: 36px;

            .time-filter-title {
                font-size: 16px;
            }

            .time-filter-arrow {
                height: 10px;
                width: auto;
                margin-left: 6px;
            }
        }
    }

    .point-detail-list-scroll-wrapper {
        height: calc(100vh - 50px);

        .point-detail-item {
            width: 100vw;
            height: 72px;
            display: flex;
            flex-flow: row nowrap;
            justify-content: space-between;
            align-items: center;
            background-color: white;
            border-bottom: 1px solid #999999;

            .point-detail-item-left {
                display: flex;
                flex-flow: row nowrap;
                justify-content: space-between;
                align-items: center;
                margin-left: 18px;
            }

            .point-detail-item-right {
                margin-right: 18px;
                font-size: 15px;
                color: #333333;
            }
        }

        .point-detail-item-wrapper {
            width: 100vw;
            display: flex;
            flex-flow: column nowrap;
            justify-content: start;

            .point-detail-item {
                width: 100vw;
                height: 72px;
                display: flex;
                flex-flow: row nowrap;
                justify-content: space-between;
                align-items: center;
                background-color: white;
                border-bottom: 1px solid #999999;

                .point-detail-item-left {
                    display: flex;
                    flex-flow: row nowrap;
                    justify-content: space-between;
                    align-items: center;
                    margin-left: 18px;
                }

                .point-detail-item-right {
                    margin-right: 18px;
                    font-size: 15px;
                    color: #333333;
                }
            }

            .item-split {
                height: 1px;
                background-color: #cccccc;
            }
        }
    }
</style>
