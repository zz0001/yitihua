<template>
    <div class="handle-case">
        <tk-header>工作详情</tk-header>
        <tk-container class="handler-case-content-wrapper">
            <div class="handle-case-content">
                <div class="case-number-wrapper">
                    <div class="case-number-font case-number-title">当前工作</div>
                </div>

                <tk-detail-photo :list="photoList"></tk-detail-photo>

                <div class="case-describe">{{describe}}</div>

                <div class="case-address-wrapper">
                    <img class="case-address-icon" src="/dist/image/icon_dz.e8ca6c.png" alt=""/>
                    <div class="case-address">{{address}}</div>
                </div>

                <tk-detail :list="detailList"></tk-detail>

                <!-- <div class="case-handle-process">
                    <div class="case-handle-process-title">处理流程</div>
                    <div class="case-handle-process-list-wrapper">
                        <div class="case-handle-process-item" v-for="(item, index) in processList" :key="index">
                            <div class="case-handle-process-item-left">
                                <div class="item-circle"
                                     :style="index === processList.length - 1 ? {'backgroundColor': '#cccccc'}:{}"></div>
                                <div class="item-line"></div>
                            </div>
                            <div class="case-handle-process-item-right">
                                <div class="item-step">{{item.name}}</div>
                                <div class="item-info">{{item.userName}}|{{item.endTime}}</div>
                                <div class="item-result">{{item.message}}</div>
                            </div>
                        </div>
                    </div>
                </div> -->
            </div>

            <div class="handle-case-btn">
                <tk-button @click="_handle">处理</tk-button>
            </div>
        </tk-container>
    </div>
</template>

<script type="text/ecmascript-6">
    const testPic = {src: require('../../../static/image/slide_example.png')};
    export default {
        name: "handleCase",
        data() {
            return {
                id: 0,
                caseNumber: '',
                photoList: [testPic, testPic, testPic, testPic],
                describe: '工作重心转移到******',
                address: '江苏省南京市鼓楼区汉中路268号 中电鸿信信息科技有限公司',
                detailList: [],
                caseOrigin: {key: '工单来源', value: '12345工单'},
                caseNo: {key: '工单编号', value: '2019121200003003'},
                caseGridName: {key: '所属网格', value: '西寺村网格三'},
                caseTime: {key: '截止时间', value: '2019-12-15'},
                reportPerson: {key: '上报人', value: '王*峰'},
                operationList:[{name: "处理",value:"1"},{name: "作废", value: "2"},{name: "上报", value: "3"}],
                processList: [],
                url: '',
            }
        },
        created() {

        },
        mounted() {
            this.detailList = [this.caseTime, this.caseNo, this.caseOrigin, this.caseGridName, this.reportPerson];
            this.id = this.$route.query.id;
            // this.getCaseDetail(this.id);
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
                this.url = '/wgh/app/' + 'dsbOrderDetail.action';
                //this.url = 'api/detail';
                this.$http.post(this.url, obj).then(res => {
                    if (res.code === undefined || res.code === '0') {
                        console.log('接口返回成功');
                        let detail = res.datas;
                        if (detail !== null) {
                            this.caseNumber = detail.caseNo;
                            // TODO: 展示图片
                            this.describe = detail.problem;
                            this._inputValue(this.caseTime, detail.reportTime);
                            this._inputValue(this.caseNo, detail.caseNo);
                            this._inputValue(this.caseOrigin, detail.origin);
                            let gridName=detail.gridName;
                            if(!gridName){
                                gridName="";
                            }
                            this._inputValue(this.caseGridName, gridName);
                            this._inputValue(this.reportPerson, detail.reportPerson);

                           this.operationList=detail.operationList.map(item=>{
                               return {
                                   name:item.opName,
                                   value:item.opValue
                               }
                           });
                         //   this.detailList = detail.operationList;


                            this.processList=detail.processSteps;

                        }
                    } else {
                        toast(res.message);
                    }
                });

                // doPost("dsbOrderDetail.action", obj, function (data) {
                //     if (data.code == 0) {
                //         var array = data.datas;
                //         if (!isNull(array.operationList) && array.operationList.length > 0) {
                //             window.operationListArrayInfo = [];
                //             for (var i = 0; i < array.operationList.length; i++) {
                //                 var info = {
                //                     opName: array.operationList[i].opName,
                //                     opValue: array.operationList[i].opValue,
                //                     destId: array.operationList[i].destId
                //                 };
                //                 window.operationListArrayInfo.push(info);
                //             }
                //             $("#case_task_detail_page .page_footer").show();
                //         } else {
                //             $("#case_task_detail_page .page_footer").hide();
                //         }
                //         if (!isNull(array.pics)) {
                //             $("#case_task_detail_page .commodityAddImgs").show();
                //             $("#case_tasked_detail_page .commodityAddImgs").show();
                //             if (array.pics.indexOf(";") > 0) {
                //                 var info = array.pics.split(";");
                //                 info.forEach(item => {
                //                     that.list.push({
                //                         src: window.imgUrl + item
                //                     })
                //                 })
                //             } else {
                //                 var arr = [];
                //                 arr.push(array.pics);
                //                 window.opinionedImgArray = arr;
                //                 that.list = [{
                //                     src: window.imgUrl + array.pics
                //                 }]
                //             }
                //         } else {
                //             $("#case_task_detail_page .commodityAddImgs").hide();
                //             $("#case_tasked_detail_page .commodityAddImgs").hide();
                //         }
                //         window.caseTaskOneTaskId = array.taskId;
                //         //步骤
                //         if (array.processSteps.length > 0) {
                //             var html = '';
                //             var arr = array.processSteps;
                //             for (var k = 0; k < arr.length; k++) {
                //                 html += '<div class="list_row_case"><div>';
                //                 html += '    <div class="oranger_font bigger">' + [k + 1] + "、" + arr[k].name;
                //                 if (!isNull(arr[k].url)) {
                //                     html += '       <div  url="' + arr[k].url + '" class="smaller" style="border:1px solid #4ba4e6;color:#4ba4e6;float:right;height:1em;text-align: center;width:3em;line-height:1em;font-size:0.4em;margin-right:1em;margin-top;-0.2em;background: #f7f7f7;padding: 0.5em 0.1em 0.5em 0.3em;border-radius: 0.5em;">图片</div>';
                //                 }
                //                 html += '    </div>';
                //                 html += '    <p class="normal">处理时间：' + arr[k].endTime + '</p>';
                //                 html += '    <p class="normal">处理人：' + arr[k].userName + '</p>';
                //                 html += '    <p class="normal">处理情况：' + arr[k].message + '</p>';
                //                 html += '</div></div>';
                //             }
                //             if (window.thisCaseQueryType == "2") {
                //                 $("#case_tasked_steps_html").html(html);
                //             } else {
                //                 $("#case_task_steps_html").html(html);
                //             }
                //         } else {
                //             $("#case_task_steps_html").empty();
                //         }
                //         if (array.dispose == "1") {
                //             that.detailList[7].value = array.disposeResult;
                //             if (!isNull(array.backpath)) {
                //                 that.isShow = true;
                //                 if (array.backpath.indexOf(";") > 0) {
                //
                //                     var info = array.backpath.split(";");
                //                     info.forEach(item => {
                //                         that.list2.push({
                //                             src: window.imgUrl + item
                //                         })
                //                     })
                //                 } else {
                //                     var arr = [];
                //                     arr.push(array.feedbackPic);
                //                     window.opinionedImgArray = arr;
                //                     that.list2 = [{
                //                         src: window.imgUrl + array.feedbackPic
                //                     }]
                //                 }
                //             }
                //         } else {
                //
                //         }
                //         window.localStorage.originNum = array.originNum;
                //         that.detailList[0].value = array.caseNo;
                //         that.detailList[1].value = array.origin;
                //         that.detailList[2].value = array.gridName;
                //         that.detailList[3].value = array.reportPerson;
                //         that.detailList[4].value = array.reportPersonPhone;
                //         that.detailList[5].value = array.location;
                //         that.detailList[6].value = array.problem;
                //         that.detailList[6].detail = array.problem;
                //         window.localStorage.orgin = array.orgin;
                //     } else {
                //         toast(data.message);
                //     }
                // }, "");
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
                            this.$router.push({path: '/waitcaseTaskEdit'});
                        }
                    }
                }).show();
            },
            /**
             * 处置
             */
            handle0() {
                this.$router.push({path: '/waitcaseTaskEdit', query: {id: this.id}});
                // console.log("数据：" + JSON.stringify(window.operationListArrayInfo));
                // if (!isNull(window.operationListArrayInfo) && window.operationListArrayInfo.length > 0) {
                //     showChoiceOneSelect();
                //     setTimeout(function () {
                //         //点击事件
                //         var data = $(e.currentTarget).data("data");
                //         console.log("type:" + JSON.stringify(data));
                //         window.caseOneTaskAction = data;
                //         // $.mobile.changePage("../casetask/caseTaskEdit.html");
                //         for (var i = 0; i < window.operationListArrayInfo.length; i++) {
                //             var info = '<p class="alert_edit_title gray_line_bottom">' + window.operationListArrayInfo[i].opName + '</p>';
                //             var $row = createListRow(info).appendTo("#choice_one_html");
                //             $row.data('data', window.operationListArrayInfo[i]);
                //             $row.listen("quickClick", function (e) {
                //                 //点击事件
                //                 setTimeout(function () {
                //                     var data = $(e.currentTarget).data("data");
                //                     console.log("type:" + JSON.stringify(data));
                //                     window.caseOneTaskAction = data;
                //                     that.$router.push({path: 'waitcaseTaskEdit', query: {}});
                //                     //$.mobile.changePage("../hscasetask/waitcaseTaskEdit.html");
                //                 }, 500)
                //
                //             });
                //         }
                //     }, 500);
                //
                // }
            },
            /**
             * 退回
             */
            handle1() {
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
                    height: 60px;
                    line-height: 60px;
                    display: flex;
                    flex-flow: row nowrap;
                    justify-content: start;
                    align-items: center;

                    .case-number-font {
                        font-size: 20px;
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
                    line-height: 50px;
                }

                .case-address-wrapper {
                    width: 100%;
                    height: 50px;
                    line-height: 50px;
                    display: flex;
                    flex-flow: row nowrap;
                    justify-content: start;
                    align-items: center;

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
