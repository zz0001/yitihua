<template>
    <div class="yishangbao">
        <tk-header>已上报案件</tk-header>

        <div @click="qiehuan" class="xuanze">
            已上报<span class="glyphicon glyphicon-menu-down"></span>
        </div>
        <div class="riqi-wrapper">
            <div @click="showTimePicker" class="riqi">
                {{date}} <span class="glyphicon glyphicon-triangle-bottom"></span>
            </div>
        </div>
        <tk-scroll
                :url="urllist"
                :param="params"
                transfer="datas"
                :options="{
                            pullDown: true,
                            pullUp: true
                        }"
                v-model="recordList"
        >
            <div class="patrol-record-item" v-for="item in recordList" @click="showDetailCase(i, item)">
                <div class="patrol-record-item-title">{{item.tacheName}} | {{item.caseReason}}</div>

                <div class="patrol-record-item-time">{{item.createTime}}</div>
            </div>
        </tk-scroll>
    </div>
</template>

<script>
    import axios from "axios";
    export default {
        data(){
            return	{
                date: '',
                list:{
                    type:'select',
                    model:'已办结',
                    select:['已上报']
                },
                recordList: [],
                urllist:'/zhzf/app/case/getAppCaseList.action',
                params:{
                    page: 0,
                    size: 20,
                    caseOrigin: "",
                    caseType: "",
                    startTime: this.date,
                    endTime: "",
                    caseNo: "",
                    userId: ""
                }

            }
        },
        methods:{
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
                        this.aj_findcaseList();
                    }
                }).show();

                // this.$router.push({
                //     path: "chooseTime",
                // })
            },
            qiehuan(){
                var item=this.list;
                if (!this.picker) {
                    var column1 = [];
                    for (var i = 0; i < item.select.length; i++) {
                        column1.push({
                            text: item.select[i],
                            value: i
                        })
                    }
                    this.picker= this.$createPotPicker({
                        title: '请选择',
                        data: [column1],
                        onSelect: (i) => {
                            item.code = i;
                            item.model = item.select[i];
                            item.success && item.success(i, item.ids && item.ids[i]);
                        }
                    })
                }
                this.picker.show()
            },
            aj_findcaseList(){
                var that=this;

                var params={
                    page: 0,
                    size: 20,
                    caseOrigin: "",
                    caseType: "",
                    startTime: that.date,
                    endTime: "",
                    caseNo: "",
                    userId: ""
                };
                let userid="ff8080816df7e603016df7e7a9e10000";
                let url=this.urllist;
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
            showDetailCase(i,item){

                this.$router.push({path: '/normalCaseDetail', query: {caseInfoId: item.id}});
            }
        },
        mounted(){
            let year = new Date().getFullYear();
            let month = new Date().getMonth() + 1;
            this.date = year.toString() + '-' + month.toString().padStart(2, "0")
            this.aj_findcaseList();
        }
    }
</script>

<style lang="less" scoped>
.yishangbao{
    .xuanze{
        text-align: center;
        height:40px;
        line-height:40px;
    }
    .riqi-wrapper{
        background:#F9F9F9;
    }
    .tk-scroll{
        background:#F9F9F9;
    }
    .riqi{
        width:180px;
        background:#fff;
        border-radius:20px;
        height:30px;
        line-height:30px;
        margin-left:13px;
        margin-top:14px;
        padding-left:10px;
        padding-right:10px;
        text-align: center;
    }
    .tk-scroll{
        background-color: #fff;
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
        }
    }
}
</style>
