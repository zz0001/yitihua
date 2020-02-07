<template>
    <div class="point-rank">
        <tk-header>积分排名</tk-header>
        <tk-container>
            <div class="time-filter-wrapper" @click="selectMonth">
                <div class="time-filter">
                    <div class="time-filter-title">{{date}}</div>
                    <img class="time-filter-arrow" src="/static/image/user_info_arrow.png" alt />
                </div>
            </div>
            <div class="point-rank-list-scroll-wrapper">
                <tk-scroll
                    :param="param"
                    ref="scroll"
                    :options="{
                            pullDown: false,
                            pullUp: false
                        }"
                    v-model="pointRankList"
                    :url="baseURL+'getIntegralRank.action'"
                >
                    <div class="grid-list">
                        <ul>
                            <li v-for="item of gridList" :key="item.id" @click="showGridPointRank(item.name)">
                                <span>{{ item.name }}</span>
                                <img
                                    src="/static/image/user_info_arrow.png"
                                    alt
                                />
                            </li>
                        </ul>
                    </div>
                </tk-scroll>
            </div>
        </tk-container>
    </div>
</template>

<script>
import axios from "axios";

export default {
    name: "pointRank",
    data() {
        return {
            pointRankList: [],
            param: {
                startTime: "",
                userName: "",
                loginId: ""
            },
            date: "本月",
            mineScore: 524,
            gridList: []
        };
    },
    created() {
        axios.post("/api/gridList").then(d => {
            this.gridList = d.map(item => item);
        });
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
            this.$set(
                this.param,
                "startTime",
                year.toString() + "-" + month.toString().padStart(2, "0")
            );
        },
        selectMonth() {
            let year = new Date().getFullYear();
            let month = new Date().getMonth();
            if (!this.mouthPicker) {
                this.mouthPicker = this.$createPotDatePicker({
                    title: "请选择月份",
                    min: new Date(year - 3, 7, 8, 8, 0, 0),
                    max: new Date(year + 7, 9, 20, 20, 59, 59),
                    value: new Date(),
                    format: {
                        year: "YY年",
                        month: "MM月"
                    },
                    columnCount: 2,
                    onSelect: v => {
                        console.log(v);
                        let date =
                            v.getFullYear().toString() +
                            "-" +
                            (v.getMonth() + 1).toString().padStart(2, "0");
                        console.log(date);
                        if (
                            month === v.getMonth() &&
                            year === v.getFullYear()
                        ) {
                            this.date = "本月";
                        } else {
                            this.date = date;
                        }
                        this.param = {
                            startTime: date,
                            userName: "",
                            loginId: ""
                        };
                    }
                });
            }

            this.mouthPicker.show();
        },
        /**
         * 点击各网格查看网格内人员积分排名
         */
        showGridPointRank(name){
            this.$router.push({
                path: '/pointRank',
                query: {}
            });
        }
    }
};
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

.mine-score {
    padding: 0 5%;
    height: 36px;
    line-height: 36px;
    background-color: #fff;
    border-top: 1px solid #999;
    border-bottom: 1px solid #999;
    display: flex;
    justify-content: space-between;
    span {
        display: inline-block;
    }
}

.point-rank-list-scroll-wrapper {
    height: calc(100vh - 50px);

    .point-rank-item-wrapper {
        width: 100vw;
        display: flex;
        flex-flow: column nowrap;
        justify-content: start;

        .point-rank-item {
            width: 100vw;
            height: 72px;
            display: flex;
            flex-flow: row nowrap;
            justify-content: space-between;
            align-items: center;
            background-color: white;
            border-bottom: 1px solid #999999;

            .point-rank-item-left {
                display: flex;
                flex-flow: row nowrap;
                justify-content: space-between;
                align-items: center;
                margin-left: 18px;

                .point-rank-item-avatar {
                    width: 30px;
                    height: 30px;
                }

                .point-rank-item-rank {
                    width: 30px;
                    height: 30px;
                    line-height: 30px;
                    text-align: center;
                    font-size: 15px;
                }

                .point-rank-item-info {
                    margin-left: 10px;
                    display: flex;
                    flex-flow: column nowrap;
                    justify-content: start;
                    align-items: start;

                    .point-rank-item-name {
                        font-size: 18px;
                        color: #333333;
                    }

                    .point-rank-item-dept {
                        font-size: 14px;
                        color: #666666;
                        margin-top: 10px;
                    }
                }
            }

            .point-rank-item-right {
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

    .grid-list {
        width: 100vw;
        background-color: #fff;
        li {
            height: 70px;
            line-height: 70px;
            border-top: 1px solid #999;
            position: relative;
            span {
                display: inline-block;
                padding-left: 20px;
            }
            img{
                position: absolute;
                right: 20px;
                width: auto;
                height: 10px;
                top: 30px;
            }
        }
    }
}
</style>
