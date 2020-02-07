<template>
    <div class="handle-case">
        <tk-header>案件详情</tk-header>
        <tk-scroll >
            <div >
                <tk-detail :list="detailList1"></tk-detail>

                <tk-title>受理登记</tk-title>

                <tk-detail :list="detailList2"></tk-detail>
                <tk-title>立案审批</tk-title>
                <div>
                    <tk-form :list="list"></tk-form>
                </div>
                <div v-show="shenpiyiJianShow">
                    <tk-title >审批意见*</tk-title>
                    <tk-textarea placeholder="请输入案件内容" v-model="spcontent"></tk-textarea>
                </div>





            </div>
            <div class="handle-case-btn" v-show="!shenpiyiJianShow">
                <tk-button @click="_handle">提交</tk-button>
            </div>
            <div style="display:flex;" class="handle-case-btn" v-show="shenpiyiJianShow">
                <tk-button @click="handle0">同意</tk-button>
                <tk-button @click="handle1">不同意</tk-button>
            </div>

        </tk-scroll>
    </div>
</template>

<script>
    import axios from "axios";
    const testPic = {src: require('../../../static/image/slide_example.png')};
    // export const getAppInspectionView = (contentJson, result, caseInfoId, dutyUserId, annexNo) => fetch('post', '/app/case/saveProcess', {
    //     contentJson: contentJson,
    //     result: result,
    //     caseInfoId: caseInfoId,
    //     dutyUserId: dutyUserId,
    //     annexNo: annexNo,
    // });
    import {getAppInspectionView} from '../../modules/getData.js';
    export default {
        name: "handleCase",
        components:{'edit-text-view':()=>import("../../component/edit-text-view.vue")},
        data() {
            var that=this;
            return {
                id: 0,
                shenpiyiJianShow: '',
                spcontent:'',
                list:[{
                    type:'input',
                    name:'案由',
                    model:''
                },{
                    type:'input',
                    name:'处罚依据',
                    model:''
                },{
                    type:'textarea',
                    name:'处罚决定',
                    placeholder:"请输入处罚决定",
                    model:''
                },{
                    type:'textarea',
                    name:'案情摘要',
                    placeholder:"请输入案情摘要",
                    model:''
                },{
                    type:'poper',
                    component:()=>import('./chooseApprover.vue'),
                    $events:{
                      confirm({id,chosenPeople}){
                          console.log(id)
                          that.list[4].model=chosenPeople;
                      }
                    },
                    name: '下级审批/处理人',
                    model:''

                }],
                cfjd_value:'',
                chosenPeople:"",
                caseNumber: '',
                photoList: [],
                describe: '在建建筑叫停后又反复进行施工，叫停后无效，依然继续施工。',
                address: '江苏省南京市鼓楼区汉中路268号 中电鸿信信息科技有限公司',
                detailList1: [],
                detailList2: [],
                detailList3: [],
                detailList4: [],
                detailList5: [],
                detailList6: [],
                caseOriginName: {key: '案件来源', value: ''},
                caseNo: {key: '案件编号', value: ''},
                caseTypeName: {key: '案件类别', value: ''},
                shouliDate: {key: '受理时间', value: ''},
                curPersonName: {key: '当事人', value: ''},
                location:{key: '案发地点', value: ''},
                caseDescribe:{key: '案件描述', value: ''},
                createUserName:{key: '上报人', value: ''},
                createdDate:{key: '上报时间', value: ''},

                caseSource:{key: '案由', value: ''},
                caseAccording:{key: '处罚依据', value: ''},
                punishDecsion:{key: '处罚决定', value: ''},
                caseImport:{key: '案情摘要', value: ''},
                lianYijian:{key: '审批意见', value: ''},
                lianShenpiRen:{key: '审批人', value: ''},
                lianShenpiTime:{key: '审批时间', value: ''},

                surveryPeo:{key: '调查人员', value: ''},
                surveyTime:{key: '调查时间', value: ''},
                caseFact:{key: '案件基本事实', value: ''},
                yijian:{key: '审批意见', value: ''},
                shenpiRen:{key: '审批人', value: ''},
                shenpiTime:{key: '审批时间', value: ''},

                tellWay:{key: '告知方式', value: ''},
                tellPeo:{key: '文书送达人员', value: ''},
                tellTime:{key: '文书送达日期', value: ''},
                tellAddress:{key: '文书送达地址', value: ''},
                tellNextPeo:{key: '备注', value: ''},
                tellCaseProf:[],

                decideWay:{key: '决定送达方式', value: ''},
                decidePeo:{key: '文书送达人员', value: ''},
                decideTime:{key: '文书送达日期', value: ''},
                decideAddress:{key: '文书送达地址', value: ''},
                decideRemark:{key: '备注', value: ''},
                decideNextPeo:{key: '下级审批人', value: ''},
                decideCaseProf:[],
                anyou:"",
                chufayiju:""
            }
        },
        created() {

        },
        mounted() {
            this.detailList1 = [this.caseNo];
            this.detailList2 =[this.caseOriginName,this.caseTypeName,this.curPersonName,this.shouliDate,this.location,this.caseDescribe,this.createUserName,this.createdDate];
            this.detailList3 =[this.caseSource,this.caseAccording,this.punishDecsion,this.caseImport,this.lianYijian,this.lianShenpiRen,this.lianShenpiTime];
            this.allType = this.$route.query.tacheName;
            this.allType == '立案审批' ? this.shenpiyiJianShow = false : this.shenpiyiJianShow = true;
            this.caseInfoId = this.$route.query.id;

            this.getCaseDetail(this.caseInfoId);
        },
        methods: {
            /**
             * 获取案件详情案件
             */
            getCaseDetail(caseInfoId) {
                var that=this;
                // obj += toJson("loginId", window.localStorage.loginId) + "&";
                // obj += toJson("rowId", row_id);
                var params={
                    caseInfoId: caseInfoId,
                    userId: "ff8080816df7e603016df7e7a9e10000"
                };
                let userId="ff8080816df97a2b016dfc93a8f80420"
                this.url =  '/zhzf/app/case/getAppCaseInfo.action?caseInfoId='+caseInfoId+'&userId='+userId;
                //this.url = 'api/detail';
                axios.get(this.url).then(res => {

                    if (res.code === undefined || res.code === 0) {
                        console.log('接口返回成功');
                        let detail = res.data;
                        ;
                        if (detail !== null) {


                            // TODO: 展示图片

                            this._inputValue(that.caseNo, detail.caseNo);
                            this._inputValue(that.caseOriginName, detail.caseOriginName);
                            this._inputValue(that.caseTypeName, detail.caseTypeName);
                            this._inputValue(that.curPersonName, detail.curPersonName);
                            this._inputValue(that.caseDescribe, detail.caseDescribe);
                            this._inputValue(that.createUserName, detail.createUserName);

                            this._inputValue(that.shouliDate, this.formatTime(detail.caseTime,'Y-M-D'));
                            this._inputValue(that.location, detail.location);

                            this._inputValue(that.createdDate, detail.createdDate);

                            var def = res.data.annexSet;
                            var abc = res.data.recordList;



                            for (var i = 0;i<abc.length;i++) {
                                if (abc[i].formTaskId == 'lasp') {
                                    var obj = JSON.parse(abc[i].contentJson);
                                    console.log('objobj='+obj)
                                    if (obj != null) {

                                        this._inputValue(that.caseSource, obj.caseReason);
                                        this._inputValue(that.caseAccording, obj.punishBasis);
                                        this._inputValue(that.punishDecsion, obj.punishDecide);
                                        this._inputValue(that.caseImport, obj.caseSummary);
                                    }

                                }
                            }
                            for (var i = 0;i<abc.length;i++) {
                                if (abc[i].formTaskId == 'laspsh') {
                                    var obj = JSON.parse(abc[i].contentJson);
                                    if (obj != null) {
                                        this._inputValue(that.lianYijian, obj.remark);
                                        this._inputValue(that.lianShenpiRen, abc[i].userNames);
                                        this._inputValue(that.lianShenpiTime, abc[i].tacheEndDatetime);

                                    }

                                }
                            }

                            for (var i = 0;i<abc.length;i++) {
                                if (abc[i].formTaskId == 'dcqz') {
                                    var obj = JSON.parse(abc[i].contentJson);
                                    if (obj != null) {
                                        // this.surveryPeo = obj.surveyPerson;
                                        // this.caseTimeee = obj.surveyTime;
                                        // this.$refs.casetTruth.inputContent = obj.caseFact;
                                        that._inputValue(that.surveryPeo, obj.surveyPerson);
                                        that._inputValue(that.surveyTime, obj.surveyTime);
                                        that._inputValue(that.caseFact, obj.caseFact);

                                    }
                                    // if (abc[i].annexList != null && abc[i].annexList.length > 0) {
                                    //     for (var j = 0;j<abc[i].annexList.length;j++){
                                    //         this.caseProf.push(abc[i].annexList[j].annexName)
                                    //         this.caseProfPath.push(abc[i].annexList[j].annexPath)
                                    //
                                    //     }
                                    // }
                                    break;
                                }
                            }
                            for (var i = 0;i<abc.length;i++) {
                                if (abc[i].formTaskId == 'dcqzsh') {

                                    var obj = JSON.parse(abc[i].contentJson);
                                    if (obj != null) {
                                        // this.yijian = obj.remark;
                                        // this.shenpiRen = abc[i].userNames;
                                        // this.shenpiTime = abc[i].tacheEndDatetime;
                                        that._inputValue(that.yijian, obj.remark);
                                        that._inputValue(that.shenpiRen, abc[i].userNames);
                                        that._inputValue(that.shenpiTime, abc[i].tacheEndDatetime);

                                    }

                                    break;
                                }
                            }


                            //





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
            async _handle() {
                // this.$createTkBottomSelect({
                //     $props: {
                //         data: this.operationList
                //     },
                //     $events: {
                //         itemClick: (index,item) => {
                //             // this['handle' + index]()
                //             console.log(index);
                //             console.log(item);
                //             window.caseOneTaskAction=item;
                //             ;
                //             this.$router.push({path: '/waitcaseTaskEdit'});
                //         }
                //     }
                // }).show();

                var obj = {
                    caseReason: this.list[0].model,
                    punishBasis: this.list[1].model,
                    punishDecide: "",
                    caseSummary: this.list[3].model,
                    result: 0,
                    userId: window.localStorage.userId,
                }

                var contentJson, result, caseInfoId, dutyUserId, annexNo;
                contentJson = JSON.stringify(obj);
                result = '0';
                caseInfoId = this.caseInfoId;
                dutyUserId = window.localStorage.userId;
                annexNo = '';


                let res = await getAppInspectionView(contentJson, result, caseInfoId, dutyUserId, annexNo);
                 if (res.code == 0) {

                     this.toast(res.message);

                     setTimeout(() => {
                         this.$router.push({path: '/toDeal-index'});
                     }, 1000)

                    // this.hideLoading()
                 } else {
                   //  this.hideLoading();
                     this.toast(res.message);
                 }
            },
            /**
             * 处置
             */
            async handle0() {
                var obj = {
                    remark: this.spcontent,
                    result: 0,
                    userId: window.localStorage.userId
                }
                var contentJson, result, caseInfoId, dutyUserId, annexNo;
                contentJson = JSON.stringify(obj);
                result = 0;
                caseInfoId = this.caseInfoId;
                dutyUserId = window.localStorage.userId;
                let res = await getAppInspectionView(contentJson, result, caseInfoId, dutyUserId);
                if (res.code == 0) {
                    this.toast(res.message);
                    setTimeout(() => {
                        this.$router.go(-1)
                    }, 1000);

                    //this.hideLoading()
                } else {
                    //this.hideLoading();
                    this.toast(res.message);
                }
            },
            /**
             * 退回
             */
            async handle1() {
                var obj = {
                    remark: this.spcontent,
                    result: 1,
                    userId: window.localStorage.userId
                }
                var contentJson, result, caseInfoId, dutyUserId, annexNo;
                contentJson = JSON.stringify(obj);
                result = 1;
                caseInfoId = this.caseInfoId;
                dutyUserId = window.localStorage.userId;
                let res = await getAppInspectionView(contentJson, result, caseInfoId, dutyUserId);
                if (res.code == 0) {
                    this.toast(res.message);
                    setTimeout(() => {
                        this.$router.go(-1)
                    }, 1000);

                    //this.hideLoading()
                } else {
                    //this.hideLoading();
                    this.toast(res.message);
                }
            },
            /**
             * 上报
             */
            // 格式化日期，如月、日、时、分、秒保证为2位数
            formatNumber (n) {
                n = n.toString()
                return n[1] ? n : '0' + n;
            },
            // 参数number为毫秒时间戳，format为需要转换成的日期格式
            formatTime (number, format) {
                let time = new Date(number)
                let newArr = []
                let formatArr = ['Y', 'M', 'D', 'h', 'm', 's']
                newArr.push(time.getFullYear())
                newArr.push(this.formatNumber(time.getMonth() + 1))
                newArr.push(this.formatNumber(time.getDate()))

                for (let i in newArr) {
                    format = format.replace(formatArr[i], newArr[i])
                }
                return format;
            },
            choosePeople() {

                // localStorage.setItem('fillCase', this.fillCase);
                // localStorage.setItem('selectAccording', this.selectAccording);
                // localStorage.setItem('publishProveOne', this.publishProveOne);
                // // localStorage.setItem('publishProveTwo', this.publishProveTwo);
                // localStorage.setItem('selectStandard', this.selectStandard);
                // localStorage.setItem('caseSummary', this.$refs.caseZhaiYao.inputContent);
                //
                // localStorage.setItem('curPersonName', this.curPersonName);
                // localStorage.setItem('caseTime', this.caseTime);
                // localStorage.setItem('location', this.location);

              //  window.sourceId = this.sourceId

              //  window.shenPiYiJian = this.$refs.fillShenPiYiJIan.inputContent;


            //    window.selectAccording = this.$refs.selectAccording.inputContent;


                this.$router.push({
                    path:'/chooseApprover',
                    query:{
                        id:2
                    }
                })




            },
        }
    }
</script>

<style lang="less" scoped>
    .handle-case {
        width: 100vw;
        height: 100vh;
        .handle-case-btn{
            >div{
                margin:5px;
            }
        }
        .tk-form textarea{
            height: 108px;
        }
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
                        font-size: 18px;
                    }

                    .case-number-title {
                        width: 125px;
                        padding-left: 12px;
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


        }

        .ajinput{
            display: inline-block;
            width:30%;
            padding-left: 14px;
            color: #999;
        }

        .tk-form-name{
            color: #999999;
        }
    }
</style>
