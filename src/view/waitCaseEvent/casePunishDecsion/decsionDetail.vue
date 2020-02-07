<template>
    <div class="case-detail">
        <!--<mt-header class="page-header" title="处罚决定">-->
            <!--<mt-button icon="back" slot="left" @click="back"></mt-button>-->
        <!--</mt-header>-->
        <tk-header>处罚决定</tk-header>
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
                <tk-detail :list="detailList"></tk-detail>
                <text-area-view ref="caseDescribe" title="案件描述" readonly="readonly"></text-area-view>
                <div class="caseProfDiv">
                    <div class="titp">
                        案件证据
                    </div>
                    <div class="contentDiv">
                        <div class="lineContent" v-for="item,index in shouliCaseProf" @click="showImg(index,1)">
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
                <!--<text-view title="案由" :content="caseSource"></text-view>-->
                <!--<text-view title="处罚依据" :content="caseAccording"></text-view>-->
                <tk-detail :list="detailList2"></tk-detail>
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
                        <div class="lineContent" v-for="item,index in caseProf" @click="showImg(index,2)">
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
                <!--<text-view title="告知方式" :content="tellWay"></text-view>-->
                <!--<text-view title="文书送达人员" :content="tellPeo"></text-view>-->
                <!--<text-view title="文书送达日期" :content="tellTime"></text-view>-->
                <!--<text-view title="文书送达地址" :content="tellAddress"></text-view>-->
                <tk-detail :list="detailList3"></tk-detail>
                <text-area-view ref="tellRemark" title="备注" readonly="readonly"></text-area-view>
                <text-view title="下级审批人" :content="tellNextPeo"></text-view>
                <div class="caseProfDiv">
                    <div class="titp">
                        告知附件
                    </div>
                    <div class="contentDiv">
                        <div class="lineContent" v-for="item,index in tellCaseProf" @click="showImg(index,3)">
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
                            <div class="lineContent" v-for="item,index in ChenshuCaseProf" @click="showImg(index,4)">
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
                            听证申辩相关附件
                        </div>
                        <div class="contentDiv">
                            <div class="lineContent" v-for="item,index in listenCaseProf" @click="showImg(index,5)">
                                {{item}}
                            </div>
                        </div>
                    </div>
                </div>



            </div>


            <div class="shoulidengji" v-show="waitSubmitShow">
                <!--<div class="step-title">处罚决定</div>-->
                <tk-title>处罚决定</tk-title>
                <edit-text-view class="lineClass" title="决定送达方式" required="true"
                                :hide-arrow="false" @onClickContent="chooseTellType"
                                :editable="false" :choose-content="tellType"></edit-text-view>
                <edit-text-view ref="transferPeo" title="文书送达人员" required="true"></edit-text-view>
                <edit-text-view class="lineClass" title="文书送达时间" required="true"
                                :hide-arrow="false" @onClickContent="chooseTime()"
                                :editable="false" :choose-content="transferTime"></edit-text-view>
                <edit-text-view ref="transferAddress" title="文书送达地址" required="true"></edit-text-view>
                <!--<text-area-view ref="remark" title="备注" hint="请填写"  max-length="1000" :hide-split-line="false"></text-area-view>-->
                <tk-textarea placeholder="请填写备注" maxlength="1000" v-model="remark"/>
                <edit-text-view class="lineClass" title="下级审批/处理人" required="true"
                                :hide-arrow="false" @onClickContent="choosePeople"
                                :editable="false" :choose-content="nextPeople"></edit-text-view>
                <div class="attachment">
                    <div class="label">
                        <span>回执附件</span>
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
                        <div class="lineContent" v-for="item,index in caseProf" @click="showImg(index,2)">
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
                <!--<div class="step-title">处罚告知</div>-->
                <tk-title>处罚告知</tk-title>
                    <text-area-view title="审批意见" hint="请填写审批意见"  required="true" max-length="1000" :hide-split-line="false"></text-area-view>
                    <edit-text-view class="lineClass" title="下级审批/处理人" required="true"
                                    :hide-arrow="false" @onClickContent="choosePeople"
                                    :editable="false" :choose-content="chosenPeo"></edit-text-view>
                <div  class="bottomAgreeDiv">
                    <div class="leftAgreeDiv">同意</div>
                    <div class="rightDisAgreeDiv">不同意</div>
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
    import {uploadImage} from '../../../config/upload.js'
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
                transferTime:'',
                nextPeople:'',
                image_url:[],
                waitSubmitShow:true,
                surveryPeo:'',
                caseTimeee:'',
                yijian:'同意',
                shenpiRen:'张三',
                shenpiTime:'2018-10-1',
                caseId:'',
                allType:'',
                annexNo:'',
                currentPhotoIndex: 0,


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

                caseProfPath:[],
                shouliCaseProfPath:[],
                tellCaseProfPath:[],
                ChenshuCaseProfPath:[],
                listenCaseProfPath:[],
                remark:'',
                detailList:[],
                caseOriginNamelist: {key: '案件来源', value: ''},
                caseTypeNamelist: {key: '案件类别', value: ''},
                curPersonNamelist: {key: '当事人', value: ''},
                shouliCaseTimelist: {key: '案发时间', value: ''},
                locationlist: {key: '案发地点', value: ''},
                detailList2:[],
                caseSourcelist: {key: '案由', value: ''},
                caseAccordinglist: {key: '处罚依据', value: ''},
                detailList3:[]
            }
        },
        mounted() {


            this.caseId = this.$route.query.id;
            this.allType = this.$route.query.type;

             this.nextPeople = window.namee;
            this.tellTypeId = window.tellType;
            this.tellType = window.tellTypeText;

            this.$refs.transferPeo.inputContent = window.transferPeo;
            this.transferTime = window.transferT;
            this.$refs.transferAddress.inputContent = window.locAdd;
            this.remark = window.remark;



            this.getInformation();

            // this.detailList=[this.caseOriginNamelist,this.caseTypeNamelist,this.curPersonNamelist,this.shouliCaseTimelist,this.locationlist];
            this.detailList2=[this.caseSourcelist,this.caseAccordinglist];

         },
        methods: {
            _inputValue(item, value) {
                this.$set(item, 'value', value);
            },
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
                } else {
                    path = this.listenCaseProfPath[index]
                }
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
                  //  window.location.href = "http://10.1.163.172:8085" + path;
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
            async getInformation(){
                let res = await getAppCaseInfo(this.caseId);
                if (res.code == 0) {

                    this.caseOriginName = res.data.caseOriginName;
                    this.caseTypeName = res.data.caseTypeName;
                    this.curPersonName = res.data.curPersonName;
                    if (this.curPersonName == '' || this.curPersonName == null || this.curPersonName == undefined) {
                        this.curPersonName = "";
                    }
                    this.shouliCaseTime = this.formatTime(res.data.caseTime,'Y-M-D');
                    this.location = res.data.location;
                    this.$refs.caseDescribe.inputContent = res.data.caseDescribe;
                    this.createUserName = res.data.createUserName;
                    this.createdDate =  res.data.createdDate != null ? res.data.createdDate.substring(0,10):'';
                    this.caseNo = res.data.caseNo;

                    this._inputValue(this.caseOriginNamelist, res.data.caseOriginName);
                    this._inputValue(this.caseTypeNamelist, res.data.caseOriginName);
                    this._inputValue(this.curPersonNamelist, this.curPersonName);
                    this._inputValue(this.shouliCaseTimelist, this.formatTime(res.data.caseTime,'Y-M-D'));
                    this._inputValue(this.locationlist, res.data.location);


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

                            this.caseSource = obj.caseReason;
                            this.caseAccording = obj.punishBasis;
                            this._inputValue(this.caseSourcelist, this.caseSource);
                            this._inputValue(this.caseAccordinglist, this.caseAccording);
                            this.$refs.punishDecsion.inputContent = obj.punishDecide;
                            this.$refs.caseImport.inputContent = obj.caseSummary;
                            break;
                        }
                    }
                    for (var i = 0;i<abc.length;i++) {
                        if (abc[i].formTaskId == 'laspsh') {
                            var obj = JSON.parse(abc[i].contentJson);
                            this.lianYijian = obj.remark;
                            this.lianShenpiRen = abc[i].userNames;
                            this.lianShenpiTime = abc[i].tacheEndDatetime;

                            break;
                        }
                    }

                    for (var i = 0;i<abc.length;i++) {
                        if (abc[i].formTaskId == 'dcqz') {
                            var obj = JSON.parse(abc[i].contentJson);

                            this.surveryPeo = obj.surveyPerson;
                            this.caseTimeee = obj.surveyTime;
                            this.$refs.casetTruth.inputContent = obj.caseFact;

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
                            this.yijian = obj.remark;
                            this.shenpiRen = abc[i].userNames;
                            this.shenpiTime = abc[i].tacheEndDatetime;

                            break;
                        }
                    }
                    for (var i = 0;i<abc.length;i++) {
                        if (abc[i].formTaskId == 'cfgz') {

                            var obj = JSON.parse(abc[i].contentJson);
                            // this.tellWay = obj.informWay;
                            if (obj.informWay == 0){
                                this.tellWay = '直接送达'
                            } else if (obj.informWay == 1){
                                this.tellWay = '留置送达'
                            } else if (obj.informWay == 2){
                                this.tellWay = '邮寄送达'
                            }else {
                                this.tellWay = '公告送达'
                            }
                            this.tellPeo = obj.docDeliveryPerson;
                            this.tellTime = obj.docDeliveryTime;
                            this.tellAddress = obj.docLocation;
                            this.detailList3.push(
                                {
                                    key: "告知方式",
                                    value: this.tellWay
                                },
                                {
                                    key: "文书送达人员",
                                    value: this.tellPeo
                                },
                                {
                                    key: "文书送达日期",
                                    value: this.tellTime
                                },
                                {
                                    key: "文书送达地址",
                                    value: this.tellAddress
                                }
                            );
                            this.$refs.tellRemark.inputContent = obj.remark;
                            this.tellNextPeo = abc[i].userNames;

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

                            this.chenShuAddress = obj.pleaLocation
                            this.chenShuTime = obj.pleaTime
                            this.$refs.chenShuRemark.inputContent = obj.pleaFact
                            this.listenAddress = obj.hearLocation
                            this.listenTime = obj.hearTime
                            this.$refs.listenContent.inputContent = obj.hearContent
                            // console.log('obj.plea=='+typeof (obj.plea))

                            this.listenShow = obj.hear
                            this.chenShuShow = obj.plea



                            // this.shenpiRen = abc[i].userNames;
                            // this.shenpiTime = abc[i].tacheStartDatetime;

                            break;
                        }
                    }

                    this.detailList=[this.caseOriginNamelist,this.caseTypeNamelist,this.curPersonNamelist,this.shouliCaseTimelist,this.locationlist];
                    this.hideLoading()
                } else{
                    this.hideLoading();
                    this.toast(res.message);
                }

            },

            workItem(item){
                var tempAry = item.split("/");
                var returnStr = tempAry[tempAry.length - 1];
                return returnStr;
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
                    this.uploadInfomation();
                }

            },
            async uploadInfomation(){
                if (this.tellType == '' || this.tellType == null || this.tellType == undefined) {
                    this.toast('请选择送达方式')
                    return;
                }
                if (this.$refs.transferPeo.inputContent == '' || this.$refs.transferPeo.inputContent == null || this.$refs.transferPeo.inputContent == undefined) {
                    this.toast('请填写送达人员')
                    return;
                }
                if (this.transferTime == '' || this.transferTime == null || this.transferTime == undefined) {
                    this.toast('请选择送达时间')
                    return;
                }
                if (this.$refs.transferAddress.inputContent == '' || this.$refs.transferAddress.inputContent == null || this.$refs.transferAddress.inputContent == undefined) {
                    this.toast('请填写送达地址')
                    return;
                }
                // if (this.$refs.remark.inputContent == '' || this.$refs.remark.inputContent == null || this.$refs.remark.inputContent == undefined) {
                //     this.toast('请填写备注')
                //     return;
                // }
                if (window.idd == '' || window.idd == null || window.idd == undefined) {
                    this.toast('请选择下级审批人')
                    return;
                }


                var obj ={
                    decDeliveryWay:this.tellTypeId.toString(),
                    docDeliveryPerson:this.$refs.transferPeo.inputContent,
                    docDeliveryTime:this.transferTime,
                    docLocation:this.$refs.transferAddress.inputContent,
                    remark:this.remark,
                    result:0,
                    userId:window.idd
                }
                var contentJson,result,caseInfoId,dutyUserId,annexNo;
                contentJson = JSON.stringify(obj);
                result = '0';
                caseInfoId = this.caseId;
                dutyUserId = window.idd;
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
                    this.uploadInfomation();
                }
            },

            choosePeople(){

                window.tellType = this.tellTypeId;
                window.tellTypeText = this.tellType;
                window.transferPeo = this.$refs.transferPeo.inputContent;
                window.transferT = this.transferTime;
                window.locAdd = this.$refs.transferAddress.inputContent;
                window.remark = this.remark;


                this.$router.push({
                    path:'/chooseApprover',
                    query:{
                        id:2
                    }
                })
            },
            chooseTellType(){
                this.picker = this.$createPotPicker({
                    title: '告知方式',
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
            this.transferTime = selectedText.toString().split(",").join("-");
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
            checkSDCard(url, name) {
                console.log("将要下载的路径：" + url + "\t，文件名称" + name);
                var that=this;
                jsict.util.getSDCardPath(function(data) {
                        window.sdCardPath = isNull(data.internal) ? data.external : data.internal; //得到sdcard目录
                        window.resolveLocalFileSystemURI("file://" + window.sdCardPath,
                            function(de) {
                                de.getDirectory("word", {
                                        create: true,
                                        exclusive: false
                                    },
                                    function() { //利用DirectoryEntry对象创建sdcard下的目录azbj
                                        //window.appPath = window.sdCardPath + "/word/";//文件路径
                                        window.fileParth = url;
                                        that.checkDownload(window.sdCardPath + "/word/", url, name);
                                    },
                                    function() {
                                        showAlert("目录创建失败，请检查sdcard");
                                    });
                            },
                            function() {
                                showAlert("目录创建失败，请检查sdcard");
                            });
                    },
                    function(err) {
                        showAlert("没有检测到sdcard,无法更新");
                    });
            },
            checkDownload(path, uploadurl, name) {
                //showLoading();
                var fileTransfer = new FileTransfer();
                var uri = encodeURI(uploadurl);
                console.log("uri:" + uri);
                var filePath = path + name;
                window.filePathUrl = path + name;
                fileTransfer.onprogress = function(progressEvent) {
                    if (progressEvent.lengthComputable) {
                        var temp = parseInt(progressEvent.loaded / progressEvent.total * 100);
                        if (temp == 100) {
                            toast("下载完成，文件在" + filePath);
                        }
                        console.log("正在下载：" + temp + "%");
                    } else {

                    }
                }; //js端回调下载传进度
                fileTransfer.download(
                    uri,
                    filePath,
                    function(entry) {
                        hideLoading();
                        jsict.appManager.openLocalFile(
                            function() {
                                console.log("uinstalled the app");
                            },
                            function(err) {
                                console.log(err);
                            }, window.filePathUrl);
                        console.log("路径：" + uri);
                        console.log("download complete: " + entry.fullPath);
                    },
                    function(error) {
                        console.log("download error source " + error.source);
                        console.log("download error target " + error.target);
                        console.log("upload error code" + error.code);
                    }
                );
            }
         }
    }
</script>

<style lang="less" scoped>
    @import '../../../style/less-variable';

    .case-detail {
        /*width: 100%;*/
        /*top: 0;*/
        /*background: #f4f4f4;*/
        /*overflow: scroll;*/
        /*position: fixed;*/


        width: 100%;
        height: 100%;
        top: 0;
        background: #f4f4f4;
        overflow: scroll;

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
                    font-size: 18px;
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
                   // <!--background: @blue;-->
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
