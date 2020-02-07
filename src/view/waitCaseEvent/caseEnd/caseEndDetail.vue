<template>
    <div class="case-detail">
        <!--<mt-header class="page-header" title="案件详情">-->
            <!--<mt-button icon="back" slot="left" @click="back"></mt-button>-->
        <!--</mt-header>-->
        <tk-header>案件详情</tk-header>
      <tk-scroll>
        <div class="page-content">
            <div class="case-number-wrapper">
                <div class="case-number-left">
                    <div class="case-title">案件编号：</div>
                </div>
                <div class="case-number-right">{{caseNo}}</div>
            </div>
            <div class="shoulidengji">
                <!--<div class="step-title">受理登记</div>-->
                <tk-title>受理登记</tk-title>
                <!--<text-view title="案件来源" :content="caseOriginName"></text-view>-->
                <!--<text-view title="案件类别" :content="caseTypeName"></text-view>-->
                <!--<text-view title="当事人" :content="curPersonName"></text-view>-->
                <!--<text-view title="案发时间" :content="shouliCaseTime"></text-view>-->
                <!--<text-view title="案发地点" :content="location"></text-view>-->
                <tk-detail :list="acceptance"></tk-detail>
                <text-area-view ref="caseDescribe" title="案件描述" readonly="readonly"></text-area-view>
                <div class="caseProfDiv">
                    <div class="titp">
                        案件证据
                    </div>
                    <div class="contentDiv">
                        <div class="lineContent" v-for="(item, index) in shouliCaseProf" @click="showImg(index,1)">
                            {{item}}
                        </div>
                    </div>
                </div>
                <text-view title="上报人" :content="createUserName"></text-view>
                <text-view title="上报时间" :content="createdDate"></text-view>

                <div class="case-description-wrapper">
                    <div class="case-description-title"></div>
                    <div class="case-description-content"></div>
                </div>
            </div>
            <div class="shoulidengji">
                <!--<div class="step-title">立案审批</div>-->
                <tk-title>立案审批</tk-title>
                <text-view title="案由" :content="caseSource"></text-view>
                <text-view title="处罚依据" :content="caseAccording"></text-view>
                <text-area-view ref="punishDecsion" title="处罚决定" readonly="readonly"></text-area-view>
                <text-area-view ref="caseImport" title="案情摘要" readonly="readonly"></text-area-view>
                <div class="shenpiDiv">
                    <div class="leftDiv">
                        <div class="yiJian">审批意见:{{lianYijian}}</div>
                        <div class="yiJian">审批人:{{lianShenpiRen}}</div>
                        <div class="yiJian">审批时间:{{lianShenpiTime}}</div>
                    </div>
                    <div class="rightDiv">
                        <div class="passDiv">通过</div>
                    </div>

                </div>

            </div>
            <div class="shoulidengji">
                <!--<div class="step-title">调查取证</div>-->
                <tk-title>调查取证</tk-title>
                <text-view title="调查人员" :content="surveryPeo"></text-view>
                <text-view title="调查时间" :content="caseTimeee"></text-view>
                <text-area-view ref="casetTruth" title="案件基本事实" readonly="readonly"></text-area-view>
                <div class="caseProfDiv">
                    <div class="titp">
                        案件证据
                    </div>
                    <div class="contentDiv">
                        <div class="lineContent" v-for="(item, index) in caseProf" @click="showImg(index,2)">
                            {{item}}
                        </div>
                    </div>
                </div>

                <div class="shenpiDiv">
                    <div class="leftDiv">
                        <div class="yiJian">审批意见:{{yijian}}</div>
                        <div class="yiJian">审批人:{{shenpiRen}}</div>
                        <div class="yiJian">审批时间:{{shenpiTime}}</div>
                    </div>
                    <div class="rightDiv">
                        <div class="passDiv">通过</div>
                    </div>

                </div>

            </div>
            <div class="shoulidengji">
                <!--<div class="step-title">处罚告知</div>-->
                <tk-title>处罚告知</tk-title>
                <text-view title="告知方式" :content="tellWay"></text-view>
                <text-view title="文书送达人员" :content="tellPeo"></text-view>
                <text-view title="文书送达日期" :content="tellTime"></text-view>
                <text-view title="文书送达地址" :content="tellAddress"></text-view>
                <text-area-view ref="tellRemark" title="备注" readonly="readonly"></text-area-view>
                <text-view title="下级审批人" :content="tellNextPeo"></text-view>
                <div class="caseProfDiv">
                    <div class="titp">
                        告知附件
                    </div>
                    <div class="contentDiv">
                        <div class="lineContent" v-for="(item, index) in tellCaseProf" @click="showImg(index,3)">
                                {{item}}
                            </div>
                        </div>
                    </div>
                    <div class="chenShu" v-show="chenShuShow">
                        <text-view title="陈述申辩地点" :content="chenShuAddress"></text-view>
                        <text-view title="陈述申辩日期" :content="chenShuTime"></text-view>
                        <text-area-view ref="chenShuRemark" title="当事人的陈述申辩" readonly="readonly"></text-area-view>
                        <div class="caseProfDiv">
                            <div class="titp">
                                陈述申辩相关附件
                            </div>
                            <div class="contentDiv">
                                <div class="lineContent" v-for="(item, index) in ChenshuCaseProf" @click="showImg(index,4)">
                                {{item}}
                            </div>
                        </div>
                    </div>
                </div>
                <div class="tingZheng" v-show="listenShow">
                    <text-view title="听证地点" :content="listenAddress"></text-view>
                    <text-view title="听证日期" :content="listenTime"></text-view>
                    <text-area-view ref="listenContent" title="听证内容" readonly="readonly"></text-area-view>
                    <div class="caseProfDiv">
                        <div class="titp">
                            陈述申辩相关附件
                        </div>
                        <div class="contentDiv">
                            <div class="lineContent" v-for="(item, index) in listenCaseProf" @click="showImg(index,5)">
                                {{item}}
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <div class="shoulidengji">
                <!--<div class="step-title">处罚决定</div>-->
                <tk-title>处罚决定</tk-title>
                <text-view title="决定送达方式" :content="decideWay"></text-view>
                <text-view title="文书送达人员" :content="decidePeo"></text-view>
                <text-view title="文书送达日期" :content="decideTime"></text-view>
                <text-view title="文书送达地址" :content="decideAddress"></text-view>
                <text-area-view ref="decideRemark" title="备注" readonly="readonly"></text-area-view>
                <text-view title="下级审批人" :content="decideNextPeo"></text-view>
                <div class="caseProfDiv">
                    <div class="titp">
                        回执附件
                    </div>
                    <div class="contentDiv">
                        <div class="lineContent" v-for="(item, index) in decideCaseProf" @click="showImg(index,6)">
                            {{item}}
                        </div>
                    </div>
                </div>
            </div>

            <div v-show="addShow">
            <div class="shoulidengji" v-show="waitSubmitShow">
                <!--<div class="step-title">结案归档</div>-->
                <tk-title>结案归档</tk-title>

                <edit-text-view class="lineClass" title="结案时间" required="true"
                                :hide-arrow="false" @onClickContent="chooseTime()"
                                :editable="false" :choose-content="endTimeee"></edit-text-view>
                <!--<edit-text-view ref="transferAddress" title="文书送达地址" required="true"></edit-text-view>-->
                <!--<text-area-view ref="zhiXingQingkuang" title="执行情况" hint="请填写"  max-length="1000" :hide-split-line="false"></text-area-view>-->
                <tk-textarea placeholder="请输入执行情况" maxlength="1000" v-model="zhiXingQingkuang"/>
                <!--<text-area-view ref="fuYi" title="复议诉讼情况" hint="请填写"  max-length="1000" :hide-split-line="false"></text-area-view>-->
                <tk-textarea placeholder="请输入复议诉讼情况" maxlength="1000" v-model="fuYi"/>
                <edit-text-view class="lineClass" title="下级审批/处理人" required="true"
                                :hide-arrow="false" @onClickContent="choosePeople"
                                :editable="false" :choose-content="nextPeople"></edit-text-view>
                <div class="attachment">
                    <div class="label">
                        <span>结案附件</span>
                        <img class="add-btn" @click="addFujian()" src="../../image/add@2x.png"/>
                    </div>
                    <div class="attachment-group">
                        <div v-for="(item,index) in image_url" :key="index" class="attachment-item">
                            <div class="addItemTitle">{{workItem(item)}}</div>
                            <a href="#" class="delete" @click="deletePic(index)"></a>
                        </div>
                    </div>
                </div>
                <div class="submitBtn" @click="submit">提交</div>
            </div>

            <div class="lianshenpi" v-show="!waitSubmitShow">

                <div class="shoulidengji">
                    <!--<div class="step-title">归案结挡</div>-->
                    <tk-title>归案结挡</tk-title>
                    <text-view title="结案日期" :content="allEndTime"></text-view>
                    <text-area-view ref="allEndZhiXing" title="执行情况" readonly="readonly"></text-area-view>
                    <text-area-view ref="allEndFuYi" title="复议诉讼情况" readonly="readonly"></text-area-view>
                    <!--<text-area-view ref="allEndReamrk" title="备注" readonly="readonly"></text-area-view>-->
                    <text-view title="下级审批人" :content="allEndNextPeo"></text-view>
                    <div class="caseProfDiv">
                        <div class="titp">
                            结案附件
                        </div>
                        <div class="contentDiv">
                            <div class="lineContent" v-for="(item, index) in allEndCaseProf" @click="showImg(index,7)">
                                {{item}}
                            </div>
                        </div>
                    </div>
                </div>
                <!--<div class="step-title">结案归档</div>-->
                <tk-title>结案归档</tk-title>
                <!--<text-area-view ref="fillShenPiYiJIan" title="审批意见" hint="请填写审批意见"  required="true" max-length="1000" :hide-split-line="false"></text-area-view>-->
                <tk-textarea placeholder="请填写审批意见" maxlength="1000" v-model="fillShenPiYiJIan"/>
                <!--<edit-text-view class="lineClass" title="下级审批/处理人" required="true"-->
                                <!--:hide-arrow="false" @onClickContent="choosePeople"-->
                                <!--:editable="false" :choose-content="chosenPeo"></edit-text-view>-->
                <div  class="bottomAgreeDiv">
                    <div class="leftAgreeDiv" @click="agreeSubmit(0)">同意</div>
                    <div class="rightDisAgreeDiv" @click="agreeSubmit(1)">不同意</div>
                </div>
            </div>
            </div>
        </div>
      </tk-scroll>
    </div>
</template>

<script>
    import TextView from '../../../components/text-view';
    import TextAreaView from "../../../components/text-area-view";
    import EditTextView from "../../../components/edit-text-view";
    import MyButton from "../../../components/my-button";
    import {getAppCaseInfo,getAppInspectionView} from '../../../modules/getData.js'
    import {uploadImage} from '../../../config/upload.js';
    var col=require('../../../../webpack.config');


    const pictureSourceType = [{text: '拍照', value: '1'}, {text: '从相册选择', value: '2'}];

    export default {
        name: "caseDetail",
        components: {
            MyButton,
            EditTextView,
            TextAreaView,
            TextView
        },
        data() {
            return {
                caseSource: "",
                caseType: "",
                selfDuty:'',
                caseTime:'',
                casePlace:'',
                caseDescrip:'',
                caseProf:[],
                uploadPeo:'',
                uploadTime:'',
                caseDeasipp:'',
                chosenPeo:'',


                tellType:'',
                tellTypeAry:[
                    {value: 0, text: "直接送达"}, {value: 1, text: "留置送达"},{value: 2, text: "邮寄送达"}, {value: 3, text: "公告送达"}
                ],
                tellTypeId:'',
                nextPeople:'',
                image_url:[],
                waitSubmitShow:'',
                surveryPeo:'',
                caseTimeee:'',
                endCaseTime:'',
                yijian:'同意',
                shenpiRen:'张三',
                shenpiTime:'2018-10-1',
                caseId:'',
                allType:'',
                annexNo:'',
                currentPhotoIndex: 0,
                endTimeee:'',

                caseNo:'',
                caseOriginName: '',
                caseTypeName: '',
                curPersonName: '',
                shouliCaseTime: '',
                location: '',
                caseDescribe: '',
                createUserName: '',
                createdDate: '',
                shouliCaseProf:[],


                caseSource:'',
                caseAccording:'',
                punishDecsion:'',
                caseImport:'',
                lianYijian:'',
                lianShenpiRen:'',
                lianShenpiTime:'',


                tellWay:'',
                tellPeo:'',
                tellTime:'',
                tellAddress:'',
                tellNextPeo:'',
                tellCaseProf:[],
                chenShuAddress:'',
                chenShuTime:'',
                ChenshuCaseProf:[],
                listenAddress:'',
                listenTime:'',
                listenCaseProf:[],

                chenShuShow:'',
                listenShow:'',


                decideWay:'',
                decidePeo:'',
                decideTime:'',
                decideAddress:'',
                decideNextPeo:'',
                decideCaseProf:[],

                allEndTime:'',
                allEndNextPeo:'',
                allEndCaseProf:[],

                addId:'',
                addShow:true,


                caseProfPath:[],
                shouliCaseProfPath:[],
                tellCaseProfPath:[],
                ChenshuCaseProfPath:[],
                listenCaseProfPath:[],
                decideCaseProfPath:[],
                allEndCaseProfPath:[],

                addUserId:'',
                zhiXingQingkuang:'',
                fuYi:'',
                fillShenPiYiJIan:'',
                acceptance:[],
            }
        },
        created() {

        },
        mounted() {
            // this.$refs.chufajueding.inputContent = 'zzEND';
            // this.$refs.casetTruth.inputContent = '这是案件基本事实，案基本事实。。。';

            this.caseId = this.$route.query.id;
            this.allType = this.$route.query.type;
            // console.log('window.namee='+this.endTimeee)\
            this.addId = this.$route.query.addId;



            this.chosenPeo = window.namee;
            this.nextPeople = window.namee;
            this.endTimeee = window.endTime;
            // this.$refs.zhiXingQingkuang.inputContent = window.sitiation;
            this.zhiXingQingkuang = window.sitiation;
            // this.$refs.fuYi.inputContent = window.FuYi;
            this.fuYi = window.FuYi;
            // this.$refs.fillShenPiYiJIan.inputContent = window.shenPiYiJian;
            this.fillShenPiYiJIan = window.shenPiYiJian;




            if ( this.addId == 3) {
                this.addShow = false;
            } else {
                this.addShow = true;
            }
            //1
            this.allType == 1 ? this.waitSubmitShow = true : this.waitSubmitShow = false;

            this.getInformation();

            // console.log('=== '+ this.$refs.chufajueding.inputContent);
        },
        methods: {
            toast(txt, type, fn){
                this.$createPotToast({
                    time: 1500,
                    mask: true,
                    txt: txt||'正在加载中...',
                    type: type,
                    onTimeout: fn || null
                }).show()
            },
            showImg(index,tip){
                console.log('tip=='+tip);
                var that=this;
                var path;
                if (tip == 1){
                    path = this.shouliCaseProfPath[index]
                } else if (tip == 2){
                    path = this.caseProfPath[index]
                }  else if (tip == 3){
                    path = this.tellCaseProfPath[index]
                }else if (tip == 4){
                    path = this.ChenshuCaseProfPath[index]
                } else if (tip == 5) {
                    path = this.listenCaseProfPath[index]
                } else if (tip == 6) {
                    path = this.decideCaseProfPath[index]
                } else {
                    path = this.allEndCaseProfPath[index]
                }
                console.log('path=='+path)
                // this.$router.push({
                //     path:'/imgShow',
                //     query:{
                //         imgSrc:path
                //     }
                // })

                if (navigator.platform.toLowerCase() === 'iphone') {
                    this.$router.push({
                        path : '/imgShow',
                        query : {
                            imgSrc:path
                        }});
                } else {
                  //  window.location.href = '/zhzf' + path;

                    var href =col.proxy[2].target + path;
                    var arr=path.split(".");
                    var name="综合执法."+arr[1];

                    that.checkSDCard(href, name);
                }
            },
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


            workItem(item){
                var tempAry = item.split("/");
                var returnStr = tempAry[tempAry.length - 1];
                return returnStr;
            },
            async getInformation(){
                let res = await getAppCaseInfo(this.caseId);
                if (res.code == 0) {
                    this.caseOriginName = res.data.caseOriginName;
                    this.caseTypeName = res.data.caseTypeName;
                    this.curPersonName = res.data.curPersonName;
                    if (this.curPersonName == '' || this.curPersonName == null || this.curPersonName == undefined) {
                        this.curPersonName = "";
                    }
                    this.shouliCaseTime =  this.formatTime(res.data.caseTime,'Y-M-D');

                    this.location = res.data.location;
                    debugger;
                    this.acceptance.push(
                        {
                            key: "案件来源",
                            value: res.data.caseOriginName
                        },
                        {
                            key: "案件类别",
                            value: res.data.caseTypeName
                        },
                        {
                            key: "当事人",
                            value: this.curPersonName
                        },
                        {
                            key: "案发时间",
                            value: this.shouliCaseTime
                        },
                        {
                            key: "案发地点",
                            value: this.location
                        }
                    );

                    this.$refs.caseDescribe.inputContent = res.data.caseDescribe;
                    this.createUserName = res.data.createUserName;
                    this.createdDate = res.data.createdDate != null ? res.data.createdDate.substring(0,10):'';
                    this.caseNo = res.data.caseNo;

                    var abc = res.data.recordList;

                    var def = res.data.annexSet;
                    if (def != null && def.length > 0) {
                        for (var j = 0;j<def.length;j++){
                            this.shouliCaseProf.push(def[j].annexName);//caseProfPath
                            this.shouliCaseProfPath.push(def[j].annexPath);
                        }
                    }

                    // for (var i = 0;i<abc.length;i++) {
                    //     if (abc[i].formTaskId == 'sldj') {
                    //         if (abc[i].annexList != null && abc[i].annexList.length > 0) {
                    //             for (var j = 0;j<abc[i].annexList.length;j++){
                    //                 this.shouliCaseProf.push(abc[i].annexList[j].annexName)
                    //             }
                    //         }
                    //         break;
                    //     }
                    // }

                    for (var i = 0;i<abc.length;i++) {
                        if (abc[i].formTaskId == 'lasp') {
                            var obj = JSON.parse(abc[i].contentJson);
                            console.log('objobj='+obj)
                            if (obj != null) {
                                this.caseSource = obj.caseReason;
                                this.caseAccording = obj.punishBasis;
                                this.$refs.punishDecsion.inputContent = obj.punishDecide;
                                this.$refs.caseImport.inputContent = obj.caseSummary;
                            }
                            break;
                        }
                    }
                    for (var i = 0;i<abc.length;i++) {
                        if (abc[i].formTaskId == 'laspsh') {
                            var obj = JSON.parse(abc[i].contentJson);
                            if (obj != null) {
                                this.lianYijian = obj.remark;
                                this.lianShenpiRen = abc[i].userNames;
                                this.lianShenpiTime = abc[i].tacheEndDatetime;
                            }
                            break;
                        }
                    }

                    for (var i = 0;i<abc.length;i++) {
                        if (abc[i].formTaskId == 'dcqz') {
                            var obj = JSON.parse(abc[i].contentJson);
                            if (obj != null) {
                                this.surveryPeo = obj.surveyPerson;
                                this.caseTimeee = obj.surveyTime;
                                this.$refs.casetTruth.inputContent = obj.caseFact;
                            }
                            if (abc[i].annexList != null && abc[i].annexList.length > 0) {
                                for (var j = 0;j<abc[i].annexList.length;j++){
                                    this.caseProf.push(abc[i].annexList[j].annexName)
                                    this.caseProfPath.push(abc[i].annexList[j].annexPath)

                                }
                            }
                            break;
                        }
                    }
                    for (var i = 0;i<abc.length;i++) {
                        if (abc[i].formTaskId == 'dcqzsh') {

                            var obj = JSON.parse(abc[i].contentJson);
                            if (obj != null) {
                                this.yijian = obj.remark;
                                this.shenpiRen = abc[i].userNames;
                                this.shenpiTime = abc[i].tacheEndDatetime;

                            }

                            break;
                        }
                    }
                    for (var i = 0;i<abc.length;i++) {
                        if (abc[i].formTaskId == 'cfgz') {

                            var obj = JSON.parse(abc[i].contentJson);
                            if (obj != null) {
                                this.tellWay = obj.informWay;
                                if (obj.informWay == 0) {
                                    this.tellWay = '直接送达'
                                } else if (obj.informWay == 1) {
                                    this.tellWay = '留置送达'
                                } else if (obj.informWay == 2) {
                                    this.tellWay = '邮寄送达'
                                } else {
                                    this.tellWay = '公告送达'
                                }
                                this.tellPeo = obj.docDeliveryPerson
                                this.tellTime = obj.docDeliveryTime
                                this.tellAddress = obj.docLocation
                                this.$refs.tellRemark.inputContent = obj.remark
                                this.tellNextPeo = abc[i].userNames
                            }
                            if (abc[i].annexList != null && abc[i].annexList.length > 0) {
                                for (var j = 0;j<abc[i].annexList.length;j++){
                                    if (abc[i].annexList[j].type == 1){
                                        this.tellCaseProf.push(abc[i].annexList[j].annexName)
                                        this.tellCaseProfPath.push(abc[i].annexList[j].annexPath)
                                    } else if (abc[i].annexList[j].type == 2) {
                                        this.ChenshuCaseProf.push(abc[i].annexList[j].annexName)
                                        this.ChenshuCaseProfPath.push(abc[i].annexList[j].annexPath)
                                    } else {
                                        this.listenCaseProf.push(abc[i].annexList[j].annexName)
                                        this.listenCaseProfPath.push(abc[i].annexList[j].annexPath)
                                    }
                                }
                            }
                            if (obj != null) {
                                this.chenShuAddress = obj.pleaLocation
                                this.chenShuTime = obj.pleaTime
                                this.$refs.chenShuRemark.inputContent = obj.pleaFact
                                this.listenAddress = obj.hearLocation
                                this.listenTime = obj.hearTime
                                this.$refs.listenContent.inputContent = obj.hearContent
                                // console.log('obj.plea=='+typeof (obj.plea))

                                this.listenShow = obj.hear
                                this.chenShuShow = obj.plea

                            }

                            break;
                        }
                    }
                    for (var i = 0;i<abc.length;i++) {
                        if (abc[i].formTaskId == 'cfjd') {

                            var obj = JSON.parse(abc[i].contentJson);

                            if (obj != null) {
                                if (obj.decDeliveryWay == 0){
                                    this.decideWay = '直接送达'
                                } else if (obj.decDeliveryWay == 1){
                                    this.decideWay = '留置送达'
                                } else if (obj.decDeliveryWay == 2){
                                    this.decideWay = '邮寄送达'
                                }else {
                                    this.decideWay = '公告送达'
                                }
                                this.decidePeo = obj.docDeliveryPerson
                                this.decideTime = obj.docDeliveryTime
                                this.decideAddress = obj.docLocation
                                this.$refs.decideRemark.inputContent = obj.remark

                            }



                            this.decideNextPeo = abc[i].userNames

                            if (abc[i].annexList != null && abc[i].annexList.length > 0) {
                                for (var j = 0;j<abc[i].annexList.length;j++){
                                    this.decideCaseProf.push(abc[i].annexList[j].annexName)
                                    this.decideCaseProfPath.push(abc[i].annexList[j].annexPath)

                                }
                            }
                            break;
                        }
                    }

                    if (this.allType != 1) {
                        for (var i = 0;i<abc.length;i++) {
                            if (abc[i].formTaskId == 'jagd') {
                                var obj = JSON.parse(abc[i].contentJson);
                                if (obj != null){
                                    this.allEndTime = obj.caseEndTime;
                                    this.$refs.allEndZhiXing.inputContent = obj.doContent;
                                    this.$refs.allEndFuYi.inputContent = obj.lawsuit;
                                    this.allEndNextPeo = abc[i].userNames
                                }
                                if (abc[i].annexList != null && abc[i].annexList.length > 0) {
                                    for (var j = 0;j<abc[i].annexList.length;j++){
                                        this.allEndCaseProf.push(abc[i].annexList[j].annexName)
                                        this.allEndCaseProfPath.push(abc[i].annexList[j].annexPath)
                                    }
                                }
                                this.addUserId = abc[i].userId;
                                break;
                            }
                        }
                    }




                    this.hideLoading()
                } else{
                    this.hideLoading();
                    this.toast(res.message);
                }

            },
            async agreeSubmit(value){
                var str = this.fillShenPiYiJIan;
                var nextUserId;
                if (str == '' || str == null || str == undefined) {
                    this.toast('请填写审批意见')
                    return;
                }
                if (value == '0'){
                    nextUserId = localStorage.getItem('userId');
                    console.log('00');
                } else {
                    nextUserId = this.addUserId;
                        console.log('11');
                }

                // if (window.idd == '' || window.idd == null || window.idd == undefined) {
                //     this.toast('请选择下级审批人')
                //     return;
                // }


                var obj ={
                    remark:this.fillShenPiYiJIan,
                    result:value,
                    userId:nextUserId
                }
                var contentJson,result,caseInfoId,dutyUserId,annexNo;
                contentJson = JSON.stringify(obj);
                result = value;
                caseInfoId = this.caseId;
                dutyUserId = nextUserId;


                let res = await getAppInspectionView(contentJson,result,caseInfoId,dutyUserId);
                if (res.code == 0) {

                    this.toast(res.message);

                    setTimeout(()=>{
                        this.$router.go(-1)
                    },1000)

                    this.hideLoading()
                } else{
                    this.hideLoading();
                    this.toast(res.message);
                }
            },
            back() {
                this.$router.go(-1);
            },
            test() {
                console.log('=== '+ this.$refs.anqingzhaiyao.inputContent);
            },
            submit(){
                this.annexNo = this.getTimeStamp();
                if (this.image_url.length <= 0) {
                    this.annexNo = '';
                }

                if (this.image_url.length > 0) {
                    this.photoUpload();
                } else {
                    this.uploadInformation();
                }
            },
            async uploadInformation(){
                if (this.endTimeee == '' || this.endTimeee == null || this.endTimeee == undefined) {
                    this.toast('请选择结案时间')
                    return;
                }
                if (window.idd == '' || window.idd == null || window.idd == undefined) {
                    this.toast('请选择下级审批人')
                    return;
                }



                var obj ={
                    caseEndTime:this.endTimeee,
                    doContent:this.zhiXingQingkuang,
                    lawsuit:this.fuYi,
                    result:'0',
                    userId:window.idd
                }
                var contentJson,result,caseInfoId,dutyUserId,annexNo;
                contentJson = JSON.stringify(obj);
                result = '0';
                caseInfoId = this.caseId;
                dutyUserId = window.idd;

                // this.annexNo = this.getTimeStamp();

                // console.log('obj=='+JSON.stringify(obj))

                annexNo = this.annexNo;

                let res = await getAppInspectionView(contentJson,result,caseInfoId,dutyUserId,annexNo);
                if (res.code == 0) {
                    this.toast(res.message);
                    setTimeout(()=>{
                        this.$router.go(-1)
                    },1000)

                    this.hideLoading()
                } else{
                    this.hideLoading();
                    this.toast(res.message);
                }
            },
            async photoUpload(){
                if (this.currentPhotoIndex < this.image_url.length) {
                    // alert('要传照片了');
                    // console.log('=====photo upload=====index:' + this.currentPhotoIndex);
                    let res = await uploadImage(this.image_url[this.currentPhotoIndex],this.annexNo,'1','1');
                    let response = {};
                    if (res != undefined && res != '') {
                        response = JSON.parse(res);
                        // alert('response='+response);
                    }else {
                        response = res;
                    }
                    if (response.code == '0') {
                        this.currentPhotoIndex++;
                        this.photoUpload();
                    } else {
                        this.hideLoading();
                    }
                } else {
                    this.uploadInformation();
                }
            },

            choosePeople(){
                window.endTime = this.endTimeee;
                // window.sitiation = this.$refs.zhiXingQingkuang.inputContent;
                window.sitiation = this.zhiXingQingkuang;
                window.FuYi = this.fuYi;

                window.shenPiYiJian = this.fillShenPiYiJIan;

                    this.$router.push({
                    path:'/chooseApprover',
                    query:{
                        id:2
                    }
                })
            },
            chooseTellType(){
                this.picker = this.$createPotPicker({
                    title: '案件来源',
                    data: [this.tellTypeAry],
                    onSelect: this.selectTypeHandler,
                    onCancel: this.cancelHandler
                });
                this.picker.show();
            },
            selectTypeHandler(selectedVal, selectedIndex, selectedText){
                this.tellType = selectedText[0];
                this.tellTypeId = selectedVal[0];

                localStorage.setItem('caseTypeText',selectedText[0]);
                localStorage.setItem('caseTypeId',selectedVal[0]);

                // console.log('caseTypeId='+this.caseTypeId)
            },
            chooseTime(){
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
            selectEndHandle (date, selectedVal, selectedText) {
                this.endTimeee = selectedText.toString().split(",").join("-");
            },
            deletePic(index){
                this.image_url.splice(index, 1);


            },
            addFujian(index){
                this.fuJianIndex = index;
                if (!this.picker) {
                    this.picker = this.$createPotPicker({
                        title: '添加照片',
                        data: [pictureSourceType],
                        onSelect: this.picturePickerSelectHandle,
                        onCancel: this.cancelHandle
                    });
                }
                this.picker.show();
            },
            picturePickerSelectHandle(selectedVal, selectedIndex, selectedText) {
                switch (selectedIndex.toString()) {
                    case '0':
                        this.addPictureFromCamera();
                        break;
                    case '1':
                        this.addPictureFromGallery();
                        break;
                }
            },
            addPictureFromCamera() {
                console.log('addPictureFromCamera in');
                navigator.camera.getPicture((imageData) => {
                        this.addPicSuccessCallback(imageData);
                    },
                    function errorCallback(message) {
                        console.log('camera错误回调：' + message);
                    }, {
                        destinationType: Camera.DestinationType.FILE_URI,
                        sourceType: Camera.PictureSourceType.CAMERA
                    });
            },
            addPictureFromGallery() {
                navigator.camera.getPicture((imageData) => {
                        this.addPicSuccessCallback(imageData);
                    },
                    function errorCallback(message) {
                        console.log('gallery错误回调：' + message);
                    }, {
                        destinationType: Camera.DestinationType.FILE_URI,
                        sourceType: Camera.PictureSourceType.PHOTOLIBRARY
                    });
            },
            addPicSuccessCallback(imageData) {
                this.image_url.push(imageData);
            },
            getTimeStamp() {
                let date = new Date();
                let year = date.getFullYear().toString(); //获取当前年份
                let mon = (date.getMonth() + 1).toString(); //获取当前月份
                let da = date.getDate().toString(); //获取当前日.toString()
                let h = date.getHours().toString(); //获取小时
                let m = date.getMinutes().toString(); //获取分钟
                let s = date.getSeconds().toString(); //获取秒
                return year + mon + da + h + m + s;
            },
        }
    }
</script>

<style lang="less" scoped>
    @import '../../../style/less-variable';

    .case-detail {

        width: 100%;
        height: 100%;
        top: 0;
        background: #f4f4f4;
        overflow: scroll;


        /*width: 100%;*/
        /*height: 100%;*/
        /*position: absolute;*/
        /*background: #f8f8f8;*/

        .page-header {
            position: fixed;
            top: 0;
            width: 100%;
            height: 60px;
            z-index: 100;
        }

        .page-content {
            /*position: relative;*/
            /*top: 2rem;*/
            /*width: 100%;*/
            /*overflow-y: auto;*/
            position: relative;

            width: 100%;
            overflow-y: auto;
            height: 100%;

            .case-number-wrapper {
                height: 48px;
                width: 100%;
                display: flex;
                flex-flow: row nowrap;
                justify-content: space-between;
                align-items: center;
                padding: @padding-height @padding-width;
                background-color: white;

                .case-number-left {
                    display: flex;
                    flex-flow: row nowrap;
                    justify-content: start;
                    align-items: center;

                    .case-title {
                        font-size: @title-font;
                        color: @title-color;
                    }

                    .case-number {
                        font-size: @title-font;
                        color: @content-color;
                    }
                }

                .case-number-right {

                }
            }
            .shoulidengji {
                display: flex;
                flex-flow: column nowrap;
                width: 100%;
                .caseProfDiv{
                    width: 100%;
                    height: 120px;
                    background: white;
                    padding-left: 3%;
                    border-top: 1px solid #dddddd;
                    border-bottom: 1px solid #dddddd ;
                    .titp{
                        width: 100%;
                        height: 30px;
                        line-height: 30px;
                        color: #999999;
                    }
                    .contentDiv{
                        width: 100%;
                        height: 90px;
                        overflow: scroll;
                        /*background: cyan;*/
                        .lineContent{
                            width: 100%;
                            height: 45px;
                            line-height: 45px;
                        }
                    }
                }
            }
        }
        .shenpiDiv{
            width: 100%;
            height: 150px;
            background: white;

            border-top: 1px solid #dddddd;
            border-bottom: 1px solid #dddddd;
            .leftDiv{
                float: left;
                width: 80%;
                height: 120px;
                /*background: cyan;*/
                padding-left: 3%;
                .yiJian{
                    width: 100%;
                    height: 39.9px;
                    line-height: 39.9px;
                    overflow: hidden;
                    white-space: nowrap;
                    text-overflow: ellipsis;
                }
            }
            .rightDiv{
                float: right;
                width: 20%;
                height: 120px;
                /*background: orange;*/
                text-align: center;
                vertical-align: middle;
                .passDiv{
                    width: 66px;
                    height: 36px;
                    line-height: 36px;
                    /*background: red;*/
                    border-radius: 6px;
                    margin-top: 45px;
                    margin-left: 15px;
                    /*border: 1px solid #dddddd;*/
                    color: black;
                    //<!--background: @blue;-->
                    border: 1px solid #dddddd;
                    //background: @blue;
                }
            }
        }
        .step-title {
            color: #333333;
            font-size: 21px;
            padding: @padding-height @padding-width;
        }

        .step-content {
            background-color: white;
        }
        .submitBtn {
            margin: @margin-button-height @margin-button-width;
            height: @bottom-height;
            line-height: @bottom-height;
            text-align: center;
            background: @blue;
            border-radius: 9px;
            color: white;
        }
        .attachment {
            border-bottom: 1px solid #e5e5e5;
            font-size: 27px;
            padding-left: 5%;
            padding-right: 3%;
            background: white;
            width: 100%;
            height: 210px;
            /*overflow: scroll;*/
            background: white;
            margin-top: 15px;
            .label {
                /*margin-left: 0.7rem;*/
                height: 60px;
                line-height: 60px;
                display: flex;
                justify-content: space-between;
                align-items: center;
                font-size: @title-font;
                /*background: red;*/
                .add-btn {
                    width: 90px;
                    height: 33px;
                }
            }
            .attachment-group{
                width: 100%;
                height: 150px;
                overflow: scroll;
                .attachment-item {
                    display: flex;
                    flex-flow: row nowrap;
                    justify-content: flex-start;
                    align-items: center;
                    height: 45px;
                    /*padding-left: 0.7rem;*/
                    position: relative;
                    font-size: @title-font;
                    div {
                        width: 85%;
                        white-space: nowrap;
                        overflow: hidden;
                        text-overflow: ellipsis;
                    }
                    .delete {
                        width: 45px;
                        height: 45px;
                        position: absolute;
                        right: 0;
                        background: url("../../image/shanchu.png") no-repeat center;
                        background-size: 18px 18px;
                    }
                    a.delete:active{
                        background: url("../../image/shanchu.png") no-repeat center;
                        background-size: 18px 18px;
                    }
                }
            }

        }
        .caseProfDiv{
            width: 100%;
            height: 120px;
            background: white;
            padding-left: 3%;
            border-top: 1px solid #dddddd;
            border-bottom: 1px solid #dddddd ;
            .titp{
                width: 100%;
                height: 30px;
                line-height: 30px;
                color: #999999;
            }
            .contentDiv{
                width: 100%;
                height: 90px;
                overflow: scroll;
                /*background: cyan;*/
                .lineContent{
                    width: 100%;
                    height: 45px;
                    line-height: 45px;
                }
            }
        }
        .bottomAgreeDiv{
            width: 100%;
            height: 120px;
            background: white;
            .leftAgreeDiv{
                float: left;
                margin-top: 36px;
                height: 51px;
                line-height: 51px;
                width: 120px;
                border-radius: 9px;
                color: white;
                background: @blue;
                text-align: center;
                margin-left: 20%;
            }
            .rightDisAgreeDiv{
                float: right;
                margin-top: 36px;
                height: 51px;
                line-height: 51px;
                width: 120px;
                border-radius: 9px;
                color: white;
                background: orange;
                text-align: center;
                margin-right: 20%;
            }
        }
    }
</style>
