<template>
    <div>
        <tk-header>随手拍</tk-header>
        <tk-container>
            <div class="patrol-record-status">
                <div class="patrol-record-status-name">已上报</div>
                <img class="patrol-record-status-arrow" src="" alt=""/>
            </div>
            <!--<div class="patrol-record-date">-->
                <!--<div class="patrol-record-date-wrapper" @click="showTimePicker">-->
                    <!--<div class="patrol-record-date-content">{{date}}</div>-->
                    <!--<img class="patrol-record-date-arow" src="" alt=""/>-->
                <!--</div>-->
            <!--</div>-->
            <tk-scroll
                    style="background-color: white"
                    :url="urllist"
                    :param="params"
                    transfer="datas"
                    :options="{
                            pullDown: true,
                            pullUp: true
                        }"
                    v-model="recordList">
                <div class="patrol-record-item" v-for="item in recordList" @click="showDetail(i, item)">
                    <div class="patrol-record-item-title">工单编号：{{item.caseno}} || {{item.origin}}</div>

                    <div class="patrol-record-item-time">{{item.reportTime}}</div>
                </div>
            </tk-scroll>
        </tk-container>
    </div>
</template>

<script type="text/ecmascript-6">
    import axios from "axios";
    export default {
        name: "patrolRecord",
        data() {
            return {
                date: '',
                urllist:'/wgh/app' + 'findCaseListByUserId.action',
                params:{userId: window.localStorage.userId,origin:3,pageSize:20,pageNum:1,status:""},

                recordList: [

                ],
            }
        },
        created() {

        },
        mounted() {
            // 初始化时间（年月）
            let year = new Date().getFullYear();
            let month = new Date().getMonth() + 1;
            this.date = year.toString() + '-' + month.toString().padStart(2, "0");
            this.ycj_findCaseListByUserId();
        },
        methods: {
            showTimePicker() {
                let year = new Date().getFullYear();
                let month = new Date().getMonth();
                this.$createPotDatePicker({
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
                        // if (
                        //     month === v.getMonth() &&
                        //     year === v.getFullYear()
                        // ) {
                        //     this.date = "本月";
                        // } else {
                        //     this.date = date;
                        // }
                        this.date = date;
                    }
                }).show();

                // this.$router.push({
                //     path: "chooseTime",
                // })
            },
            ycj_findCaseListByUserId(){
                var that=this;
                // var obj = "";
                // obj += toJson("userId", window.localStorage.userId) + "&";
                // obj += toJson("origin", "3") + "&";
                // obj += toJson("pageSize", "20") + "&";
                // obj += toJson("pageNum", "1") + "&";
                // obj += toJson("status", "");
                // doPost("findCaseListByUserId.action", obj, function (data) {
                //
                //     if (data.code == 0) {
                //
                //         var array = data.datas;
                //
                //         if (!isNull(array) && array.length > 0) {
                //             that.recordList=array;
                //
                //
                //         } else {
                //
                //         }
                //     } else {
                //
                //         toast(data.message);
                //     }
                //     window.flag1 = true;
                // }, "");
              var params={userId: window.localStorage.userId,origin:3,pageSize:20,pageNum:1,status:""};
               let url='/wgh/app' + '/findCaseListByUserId.action';
                   axios.post(url, params).then(data => {

                    if (data.code == 0) {

                        var array = data.datas;

                        if (!isNull(array) && array.length > 0) {
                            that.recordList=array;


                        } else {

                        }
                    } else {

                        toast(data.message);
                    }
                    window.flag1 = true;
                })
            },
            showDetail(i,item){


                this.$router.push({path: '/photoAlreadyDetail', query: {rowId: item.row_id}});
            },
            pullDownnow(e){
                ;
                console.log(e)
            },
            findpullup(e){
                ;
                console.log(e)
            }

        }
    }
</script>

<style lang="less" scoped>
    .patrol-record-status {
        width: 100%;
        height: 38px;
        display: flex;
        flex-flow: row nowrap;
        align-items: center;
        justify-content: center;
        background-color: white;

        .patrol-record-status-name {
            font-size: 15px;
        }

        .patrol-record-status-arrow {

        }
    }

    .patrol-record-date {
        width: 100%;
        height: 52px;
        display: flex;
        flex-flow: row;
        align-items: center;

        .patrol-record-date-wrapper {
            min-width: 158px;
            height: 36px;
            display: flex;
            flex-flow: row nowrap;
            justify-content: center;
            align-items: center;
            background-color: white;
            margin-left: 24px;
            border-radius: 18px;

            .patrol-record-date-content {
                font-size: 12px;
                padding: 0 8px;
            }
        }
    }

    .patrol-record-item {
        height: 84px;
        display: flex;
        flex-flow: column;
        justify-content: center;
        align-items: start;
        background-color: white;
        border-bottom: 1px solid #cccccc;
        padding-left: 24px;

        .patrol-record-item-title {
            font-size: 18px;
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
            width: calc(100% - 24px);
        }

        .patrol-record-item-time {
            margin-top: 14px;
            font-size: 12px;
            color: rgb(153,153,153);
        }

    }
</style>
