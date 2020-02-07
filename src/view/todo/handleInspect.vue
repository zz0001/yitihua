<!--督察督办处理-->
<template>
    <div>
        <tk-header>督察督办处理</tk-header>
        <tk-container>
            <div class="handle-inspect-content">
                <div class="titlelDiv">
                    <div class="leftD">{{titleL}}</div>
                    <div class="rightD">{{statuss}}</div>
                </div>
                <tk-detail :list="detailList"></tk-detail>



            </div>

            <tk-button @click="_handle">处理</tk-button>
        </tk-container>
    </div>
</template>

<script type="text/ecmascript-6">
    export default {
        name: "handleInspect",
        data() {
            return {
                id: 0,
                titleL:"",
                statuss:"",
                detailList: [],
                taskType: {key: '任务类型', value: ''},
                personInCharge: {key: '责任人', value: ''},
                endTime: {key: '截止时间', value: ''},
                publisher: {key: '交办人', value: ''},
                submitTime: {key: '交办时间', value: ''},
                describe: {key: '任务内容', value: ''},
                processList: [],
                url: '',
            }
        },
        created() {

        },
        mounted() {
            this.detailList = [this.taskType, this.personInCharge, this.endTime, this.publisher, this.submitTime,this.describe];

            this.datas = JSON.parse(this.$route.query.datas);

            this.titleL=this.datas.missionName;
            this.statuss=this.datas.missionState;
            this._inputValue(this.taskType, this.datas.missionType);
            this._inputValue(this.personInCharge, this.datas.dutyName);
            this._inputValue(this.endTime, this.datas.missionDeadline);
            this._inputValue(this.publisher, this.datas.creatorId);
            this._inputValue(this.submitTime, this.datas.createdDate);
            this._inputValue(this.describe, this.datas.missionContent);
        },
        methods: {
            /**
             * 给<tk-detail>组件赋值
             * @param item 需要赋值的具体条目对象
             * @param value 传入的值
             * @private
             */
            getCaseDetail(row_id) {

                // obj += toJson("loginId", window.localStorage.loginId) + "&";
                // obj += toJson("rowId", row_id);
                let obj = {para: 'loginId=' + window.localStorage.loginId + '&' + 'rowId=' + row_id};
                console.log(JSON.stringify(obj));
                //this.url = window.serverUrl + 'dsbOrderDetail.action';
                this.url = 'api/inspectDetail';
                this.$http.post(this.url, obj).then(res => {
                    if (res.code === undefined || res.code === '0') {
                        console.log('接口返回成功');
                        let detail = res.datas;
                        if (detail !== null) {
                            this.caseNumber = detail.caseNo;
                            // TODO: 展示图片
                            this.describe = detail.problem;
                            this._inputValue(this.taskType, detail.taskType);
                            this._inputValue(this.personInCharge, detail.personInCharge);
                            this._inputValue(this.endTime, detail.endTime);
                            this._inputValue(this.publisher, detail.publisher);
                            this._inputValue(this.submitTime, detail.submitTime);


                            //   this.detailList = detail.operationList;


                            this.processList=detail.processSteps;

                        }
                    } else {
                        toast(res.message);
                    }
                });


            },

            _inputValue(item, value) {
                this.$set(item, 'value', value);
            },
            _handle() {
                this.$router.push({path: '/handleInspectEdit', query: {id:this.datas.id}});
            },
            /**
             * 处置
             */

        }
    }
</script>

<style lang="less" scoped>
    .handle-inspect-content {
        width: 100%;
        height: calc(100% - 50px);
        background: #fff;

        .titlelDiv{
            width: 100%;
            height: 30px;
            background: white;
            padding-right: 3%;
            padding-left: 3%;
            font-size: 16px;
            line-height: 30px;
            margin-bottom: 0.5rem;
            .leftD{
                float: left;
                width: 80%;
                overflow: hidden;
                white-space: nowrap;
                text-overflow: ellipsis;

            }
            .rightD{
                float: right;
            }

        }
        .case-describe {
            width: calc(100% - 24px);
            padding: 0 10px;
            font-size: 16px;
            line-height: 30px;

        }
        .inspect-handle-process {
            width: 100%;
            display: flex;
            flex-flow: column nowrap;
            justify-content: start;
            margin-top: 25px;
            .tk-title .left{
                font-size:18px;
            }
            .inspect-handle-process-title {
                font-size: 18px;
                color: #333333;
                margin: 18px 0 18px 24px;
            }

            .inspect-handle-process-list-wrapper {
                width: 100%;
                display: flex;
                flex-flow: column nowrap;
                justify-content: start;
                align-items: start;

                .inspect-handle-process-item {
                    position: relative;
                    width: calc(100% - 48px);
                    height: auto;
                    margin: 0 24px 0 24px;
                    display: flex;
                    flex-flow: row nowrap;
                    justify-content: start;
                    align-items: start;

                    .inspect-handle-process-item-left {
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
                            left:6.5px;
                            top:16px;
                            width: 1px;
                            height: calc(100% - 16px);
                            background-color: #f9f9f9;
                        }
                    }

                    .inspect-handle-process-item-right {
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
</style>
