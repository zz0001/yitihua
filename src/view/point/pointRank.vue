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
            <div class="mine-score">
                <span>我的积分：{{ myScore }}</span>
                <span>第{{ myRanking }}名</span>
            </div>
            <div class="point-rank-list-scroll-wrapper">
                <tk-scroll
                    ref="scroll"
                    :options="{
                            pullDown: false,
                            pullUp: false
                        }"
                >
                    <div class="point-rank-list">
                        <div
                            class="point-rank-item-wrapper"
                            v-for=" (item, index) in pointRankList"
                            :key="index"
                        >
                            <div class="point-rank-item">
                                <div class="point-rank-item-left">
                                    <img
                                        class="point-rank-item-avatar"
                                        src="/static/resources/images/wode_tx.png"
                                        alt
                                        v-show="index < 3"
                                    />
                                    <div
                                        class="point-rank-item-rank"
                                        v-show="index >= 3"
                                    >{{index+1}}</div>
                                    <div class="point-rank-item-info">
                                        <div class="point-rank-item-name">{{item.name}}</div>
                                        <div class="point-rank-item-dept">网格名称</div>
                                    </div>
                                </div>
                                <div class="point-rank-item-right">
                                    <div class="point-rank-item-point">{{item.score}}</div>
                                </div>
                            </div>
                        </div>
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
            myScore: null,
            myRanking: null,
            baseURL: "/wgh/app/"
        };
    },
    created() {
        this.url = "/wgh/app/";
        this.userName = window.localStorage.userName;
    },
    mounted() {
        const DATE = new Date().toJSON().slice(0, 7);
        // this.getCurrentDate();
        this.getScoreRank(DATE);
    },
    methods: {
        getScoreRank(date) {
            let paramObj = {
                para: "userId=" + this.userId + "&dateTime=" + date
            };
            var _this = this;
            axios.post(this.url + "scoresRank.action", paramObj).then(d => {
                _this.pointRankList = d.map(item => item);
                _this.pointRankList.forEach((item, index) => {
                    if (item.name === _this.userName) {
                        _this.myScore = item.score;
                        _this.myRanking = index + 1;
                        return false;
                    }
                });
            });
        },
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
                    max: new Date(year + 1, 9, 20, 20, 59, 59),
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
                        this.getScoreRank(date);
                    }
                });
            }

            this.mouthPicker.show();
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
            img {
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
