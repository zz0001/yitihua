<template>
    <div class="handle-case">
        <tk-header>双随机处理</tk-header>
        <tk-container class="handler-case-content-wrapper">
            <div class="handle-case-content">


                <tk-detail :list="detailList"></tk-detail>

            </div>

            <div style="display:flex;">
                <!--<tk-button style="background:#ccc;" :type='0' @click="handleback">拒绝</tk-button>-->
                <tk-button   @click="handleconfirm">处理</tk-button>
            </div>
        </tk-container>
    </div>
</template>

<script type="text/ecmascript-6">

    export default {
        name: "handleCase",
        data() {
            return {

                caseNumber: '',

                detailList: [],
                checkedEnterpriseName:{key: '检查企业', value: ''},
                code: {key: '抽查编号', value: ''},
                deadLine: {key: '抽查时间', value: ''},
                enterpriseName: {key: '抽查地点', value: ''},
                type: {key: '抽查类型', value: ''},
                userName: {key: '执法人员', value: ''},
                operationList:[],
                processList: [],

            }
        },
        created() {

        },
        mounted() {
            this.detailList = [this.checkedEnterpriseName,this.code, this.deadLine, this.enterpriseName, this.type, this.userName];
            this.datas = JSON.parse(this.$route.query.datas);

            let date = new Date(this.datas.startTime);
            let Y = date.getFullYear() + '-';
            let M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-';
            let D = date.getDate() < 10 ? '0' + date.getDate() + ' ' : date.getDate() + ' ';
            let h = date.getHours() < 10 ? '0' + date.getHours() + ':' : date.getHours() + ':';
            let m = date.getMinutes() < 10 ? '0' + date.getMinutes() + ':' : date.getMinutes() + ':';
            let s = date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds();
            let time=Y + M + D + h + m + s;
            this._inputValue(this.checkedEnterpriseName, this.datas.checkedEnterpriseName);
            this._inputValue(this.code, this.datas.checkedNumber);
            this._inputValue(this.deadLine, time);
            this._inputValue(this.enterpriseName, this.datas.checkedaddress);
            this._inputValue(this.type, this.datas.check_type);
            this._inputValue(this.userName, this.datas.checkPerson);
          //  this.getCaseDetail(this.id);
        },
        methods: {
            /**
             * 获取案件详情案件
             */
            getCaseDetail(row_id) {

                // obj += toJson("loginId", window.localStorage.loginId) + "&";
                // obj += toJson("rowId", row_id);
                let obj = {para: 'loginId=' + window.localStorage.loginId + '&' + 'rowId=' + row_id};
                console.log(JSON.stringify(obj));
               // this.url = window.serverUrl + 'dsbOrderDetail.action';
                this.url = 'api/double';
                this.$http.post(this.url, obj).then(res => {
                    if (res.code === undefined || res.code === '0') {
                        console.log('接口返回成功');
                        let detail = res.datas;
                        if (detail !== null) {

                            this._inputValue(this.code, detail.id);
                            this._inputValue(this.deadLine, detail.deadLine);
                            this._inputValue(this.enterpriseName, detail.enterpriseName);
                            this._inputValue(this.type, detail.type);
                            this._inputValue(this.userName, detail.userName);


                            //   this.detailList = detail.operationList;


                            this.processList=detail.processSteps;

                        }
                    } else {
                        toast(res.message);
                    }
                });


            },

            /**
             * 给<tk-detail>组件赋值
             * @param item 需要赋值的具体条目对象
             * @param value 传入的值
             * @private
             */
            _inputValue(item, value) {
                this.$set(item, 'value', value);
            },
            /**
             * 处理案件
             * @private
             */
            _handle() {

                this.$createTkBottomSelect({
                    $props: {
                        data: this.operationList
                    },
                    $events: {
                        itemClick: (index,item) => {
                            // this['handle' + index]()
                            console.log(index);
                            console.log(item);
                            window.caseOneTaskAction=item;
                            this.$router.push({path: '/doubleRandomDetail', query: {type: i.rowId}});
                        }
                    }
                }).show();
            },
            /**
             * 处置
             */
            handleconfirm() {
                this.$router.push({path: '/doubleRandomDetail', query: {type: this.type.value,id:this.datas.id}});

            },
            /**
             * 退回
             */
            handleback() {
                app.$createPotDialog({
                    $props: {
                        type: 'confirm',
                        content: '你是否确定要退回此案件？'
                    },
                    $events: {
                        confirm(A) {

                        }
                    }
                }).show();
            },
            /**
             * 上报
             */
            handle2() {

            },
        }
    }
</script>

<style lang="less" scoped>
    .handle-case {
        width: 100vw;
        height: 100vh;

        .handler-case-content-wrapper {
            background-color: white;
            width: 100vw;

            .handle-case-content {
                width: 100%;
                height: calc(100vh - 130px);
                overflow-y: auto;

                .case-number-wrapper {
                    width: 100%;
                    display: flex;
                    flex-flow: row nowrap;
                    justify-content: start;
                    align-items: center;
                    margin-top: 10px;

                    .case-number-font {
                        font-size: 24px;
                    }

                    .case-number-title {
                        width: 125px;
                        margin-left: 24px;
                        flex: 3.5;
                    }

                    .case-number {
                        margin-right: 24px;
                        flex: 6.5;
                    }
                }

                .picture-list-wrapper {
                    width: 100%;
                    display: flex;
                    flex-flow: column nowrap;
                    align-items: center;
                    padding: 0 24px;
                }

                .case-describe {
                    width: calc(100% - 24px);
                    margin: 0 24px;
                    font-size: 20px;
                    line-height: 30px;
                }

                .case-address-wrapper {
                    width: 100%;
                    display: flex;
                    flex-flow: row nowrap;
                    justify-content: start;
                    align-items: center;
                    margin-top: 12px;

                    .case-address-icon {
                        margin-left: 23px;
                        width: 20px;
                        height: auto;
                    }

                    .case-address {
                        margin: 0 24px 0 14px;
                        font-size: 18px;
                        line-height: 20px;
                    }
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
                                    left:6.5px;
                                    top:16px;
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

            .handle-case-btn {
                padding-top: 10px;
            }
        }
    }
</style>
