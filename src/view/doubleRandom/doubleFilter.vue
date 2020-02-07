<template>
    <div class="double-random-filter">
        <tk-header>筛选</tk-header>
        <div class="scrollHeight" :style="contentHeight">
            <div class="titleDiv" v-show="false">
                <div class="leftImg"></div>
                <span>抽查类型</span>
            </div>
            <div class="everyBtn" v-show="false"
                 v-for="(item,index) in testBtnAry"
                 :class="{active:actives.indexOf(index)!=-1}"
                 @click="actives.indexOf(index)==-1 ? actives.push(index) : actives.splice(actives.indexOf(index),1)"
            >{{item}}
            </div>

            <div class="titleDiv">
                <div class="leftImg"></div>
                <span>抽查时间</span>
            </div>
            <div class="timePicker">
                <div class="everyDiv" @click="showDatePicker(1)">
                    <div class="leftD">开始时间</div>
                    <div class="rightD" :class="{addColor: startTime === '请选择'}">{{startTime}}</div>
                </div>
                <div style="margin-top: 0.5rem" class="everyDiv" @click="showDatePicker(2)">
                    <div class="leftD">结束时间</div>
                    <div class="rightD" :class="{addColor: endTime === '请选择'}">{{endTime}}</div>
                </div>
            </div>
        </div>
        <div class="bottomDiv">
            <div class="resetBtn" @click="reset()">重置</div>
            <div class="sureBtn" @click="confirm()">确定</div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                contentHeight: {},
                testBtnAry: ['全部', '食品安全', '卫生健康', 'xxxxx'],
                actives: [],
                actives1: [],
                actives2: [],
                startTime: '请选择',
                endTime: '请选择',
                indexTime: '',
            }
        },
        mounted() {
            this.getHeight();
        },
        methods: {
            back() {
                this.$router.go(-1);
            },
            getCurrentDate() {
                let myDate = new Date();
                myDate.getFullYear();
                myDate.getMonth();
                myDate.getDate();
                this.startTime = myDate.getFullYear() + '-' + myDate.getMonth() + '-'
                    + myDate.getDate();
                this.endTime = myDate.getFullYear() + '-' + myDate.getMonth() + '-'
                    + myDate.getDate();
            },
            getHeight() {
                let f = window.innerWidth / 320 * 20;
                let h1 = window.innerHeight - f * 5.2 + 'px';
                this.contentHeight.height = h1;
                console.log(' this.contentHeight.height' + this.contentHeight.height);
            },
            showDatePicker(index) {
                this.indexTime = index;
                if (!this.datePicker) {
                    this.datePicker = this.$createPotDatePicker({
                        title: '请选择时间',
                        min: new Date(2008, 10, 1),
                        max: new Date(2030, 10, 1),
                        value: new Date(),
                        columnCount: 3,
                        cancelTxt: '返回',
                        onSelect: this.selectEndHandle
                    })
                }
                this.datePicker.show()
            },
            selectEndHandle(date, selectedVal, selectedText) {
                if (this.indexTime == 1) {
                    this.startTime = selectedText.toString().split(",").join("-");
                } else {
                    this.endTime = selectedText.toString().split(",").join("-");
                }
                if (this.indexTime == 1) {
                    if (this.endDate) {
                        if ((this.endDate).getTime() <= date.getTime()) {
                            this.toast('开始时间必须小于结束时间');
                            return;
                        } else {
                            this.startDate = date;
                        }
                    } else {
                        this.startDate = date;
                    }
                } else {
                    if (this.startDate) {
                        if ((this.startDate).getTime() >= date.getTime()) {
                            this.toast('开始时间必须小于结束时间');
                            return;
                        } else {
                            this.endDate = date;
                        }
                    } else {
                        this.endDate = date;
                    }
                }
            },
            reset() {
                this.startTime = '请选择';
                this.endTime = '请选择';
            },
            confirm() {
                this.$store.state.random_filter_startTime = this.startTime === '请选择' ? '' : this.startTime + ' 00:00:00';
                this.$store.state.random_filter_endTime = this.endTime === '请选择' ? '' : this.endTime + ' 00:00:00';
                console.log(this.$store.state.random_filter_startTime);
                console.log(this.$store.state.random_filter_endTime);
                this.$router.go(-1);
            }
        }
    }
</script>

<style lang="less" scoped>
    @import '../../style/less-variable';

    .double-random-filter {
        width: 100%;
        height: 100%;
        top: 0;
        background: white;
        overflow: scroll;

        .page-header {
            position: fixed;
            top: 0;
            width: 100%;
            height: 2rem;
            z-index: 100;
        }

        .scrollHeight {
            position: relative;
            top: 2rem;
            width: 100%;
            overflow-y: auto;
            height: calc(100% - 2rem);

            .titleDiv {
                width: 100%;
                height: 2rem;
                line-height: 2rem;
                padding-left: 5%;
                margin-top: 0.2rem;

                .leftImg {
                    float: left;
                    width: 0.15rem;
                    height: 0.8rem;
                    border-radius: 0.2rem;
                    background: @blue;
                    margin-top: 0.6rem;
                    margin-right: 0.6rem;
                }
            }

            .everyBtn {
                display: inline-block;
                width: 26%;
                height: 1.5rem;
                line-height: 1.5rem;
                background: #f4f4f4;
                margin-left: 5%;
                /*border-radius: 0.3rem;*/
                text-align: center;
                margin-bottom: 0.5rem;
                /*background: url("../image/筛选已选择.png") no-repeat;*/
                /*background-size: 100% 100%;*/

                &.active {
                    background: url("../image/筛选已选择.png") no-repeat;
                    background-size: 100% 100%;
                }
            }

            .timePicker {
                width: 100%;
                height: 2rem;
                /*background: red;*/
                line-height: 2rem;
                padding-left: 5%;
                margin-bottom: 0.5rem;

                .everyDiv {
                    width: 95%;
                    height: 1.8rem;
                    line-height: 1.8rem;
                    background: white;
                    padding-left: 5%;
                    padding-right: 5%;
                    border: 1px solid lightgray;
                    border-radius: 0.2rem;

                    .leftD {
                        display: inline-block;
                        float: left;
                        color: darkgray;
                    }

                    .rightD {
                        width: 50%;
                        text-align: right;
                        /*background: red;*/

                        display: inline-block;
                        float: right;

                        &.addColor {
                            color: darkgray;
                        }
                    }

                }


            }


        }
    }


    .bottomDiv {
        position: absolute;
        bottom: 1rem;
        width: 100%;
        height: 2rem;
        /*background: red;*/
        padding-left: 5%;
        padding-right: 5%;

        .resetBtn {
            display: inline-block;
            width: 20%;
            height: 2rem;
            border-radius: 0.3rem;
            background: #FBB441;
            line-height: 2rem;
            text-align: center;
            color: white;
        }

        .sureBtn {
            display: inline-block;
            margin-left: 5%;
            width: 73%;
            height: 2rem;
            border-radius: 0.3rem;
            background: #297aff;
            line-height: 2rem;
            text-align: center;
            color: white;
        }
    }

</style>
