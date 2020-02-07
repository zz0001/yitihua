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
                <tk-detail :list="approval"></tk-detail>
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

            <div class="lianshenpi">
                <!--<div class="step-title">处罚告知</div>-->
                <tk-title>处罚告知</tk-title>
                <div class="lianshenpi-edit step-content" v-show="waitPunishSubmitShow">
                    <edit-text-view class="lineClass" title="告知方式" required="true"
                                    :hide-arrow="false" @onClickContent="chooseTellType"
                                    :editable="false" :choose-content="tellType"></edit-text-view>
                    <edit-text-view ref="transferPeo" title="文书送达人员" required="true"></edit-text-view>
                    <edit-text-view class="lineClass" title="文书送达时间" required="true"
                                    :hide-arrow="false" @onClickContent="chooseTime(1)"
                                    :editable="false" :choose-content="transferTime"></edit-text-view>
                    <edit-text-view ref="transferAddress" title="文书送达地址" required="true"></edit-text-view>
                    <!--<text-area-view ref="remark" title="备注" hint="请填写" required="true" max-length="1000" :hide-split-line="false"></text-area-view>-->
                    <tk-textarea placeholder="请填写备注" maxlength="1000" v-model="remark"/>
                        <edit-text-view class="lineClass" title="下级审批/处理人" required="true"
                                        :hide-arrow="false" @onClickContent="choosePeople"
                                        :editable="false" :choose-content="nextPeople"></edit-text-view>
                        <div class="attachment">
                            <div class="label">
                                <span>告知附件</span>
                                <img class="add-btn" @click="addFujian(1)" src="../../image/add@2x.png"/>
                                <!--<button class="add-btn" @click="addFujian">添加</button>-->
                            </div>
                            <div class="attachment-group">
                                <div v-for="(item,index) in image_url" :key="index" class="attachment-item">
                                    <!--<img src="./icon/附件.png">-->
                                    <div class="addItemTitle">{{workItem(item)}}</div>
                                    <a href="#" class="delete" @click="deletePic(index,1)"></a>
                                </div>
                            </div>
                        </div>

                    <div class="arguTell">
                        <div class="leftDiv">陈述申辩</div>
                        <div class="rightDiv" @click="changShenBianState">
                            <img v-show="!shenBianAddShow" src="../../image/jian.png" class="jiajianimg"/>
                            <img v-show="shenBianAddShow" src="../../image/jia.png" class="jiajianimg"/>
                        </div>
                    </div>
                    <div class="arguTellContent" v-show="!shenBianAddShow">
                        <edit-text-view ref="chenshuAddress" title="陈述申辩地点" required="true"></edit-text-view>
                        <edit-text-view class="lineClass" title="陈述申辩日期" required="true"
                                        :hide-arrow="false" @onClickContent="chooseTime(2)"
                                        :editable="false" :choose-content="shenbianTime"></edit-text-view>
                        <!--<text-area-view ref="selfPeoShenBian" title="当事人陈述申辩" hint="请填写" required="true" max-length="1000" :hide-split-line="false"></text-area-view>-->
                        <tk-textarea placeholder="请填写当事人陈述申辩" maxlength="1000" v-model="selfPeoShenBian"/>
                        <div class="attachment">
                            <div class="label">
                                <span>陈述申辩相关附件</span>
                                <img class="add-btn" @click="addFujian(2)" src="../../image/add@2x.png"/>
                                <!--<button class="add-btn" @click="addFujian">添加</button>-->
                            </div>
                            <div class="attachment-group">
                                <div v-for="(item,index) in image_url1" :key="index" class="attachment-item">
                                    <!--<img src="./icon/附件.png">-->
                                    <div class="addItemTitle">{{workItem(item)}}</div>
                                    <a href="#" class="delete" @click="deletePic(index,2)"></a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="arguTell">
                        <div class="leftDiv">听证</div>
                        <div class="rightDiv" @click="changTingZhengState">
                            <img v-show="!tingZhengShow" src="../../image/jian.png" class="jiajianimg"/>
                            <img v-show="tingZhengShow" src="../../image/jia.png" class="jiajianimg"/>
                        </div>
                    </div>

                    <div class="arguTellContent" v-show="!tingZhengShow">
                        <edit-text-view ref="tingZhengAddress" title="听证地点" required="true"></edit-text-view>
                        <edit-text-view class="lineClass" title="听证日期" required="true"
                                        :hide-arrow="false" @onClickContent="chooseTime(3)"
                                        :editable="false" :choose-content="tingZhengTime"></edit-text-view>
                        <!--<text-area-view ref="tingZhengContent" title="听证内容" hint="请填写" required="true" max-length="1000" :hide-split-line="false"></text-area-view>-->
                        <tk-textarea placeholder="请填写当事人陈述申辩" maxlength="1000" v-model="tingZhengContent"/>
                        <div class="attachment">
                            <div class="label">
                                <span>听证相关附件</span>
                                <img class="add-btn" @click="addFujian(3)" src="../../image/add@2x.png"/>
                                <!--<button class="add-btn" @click="addFujian">添加</button>-->
                            </div>
                            <div class="attachment-group">
                                <div v-for="(item,index) in image_url2" :key="index" class="attachment-item">
                                    <!--<img src="./icon/附件.png">-->
                                    <div class="addItemTitle">{{workItem(item)}}</div>
                                    <a href="#" class="delete" @click="deletePic(index,3)"></a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="submitBtn" @click="submit">提交</div>
                </div>
                <div class="waitShenPi" v-show="!waitPunishSubmitShow">
                    <text-area-view title="审批意见" hint="请填写审批意见"  required="true" max-length="1000" :hide-split-line="false"></text-area-view>
                    <edit-text-view class="lineClass" title="下级审批/处理人" required="true"
                                    :hide-arrow="false" @onClickContent="choosePeople"
                                    :editable="false" :choose-content="nextPeople"></edit-text-view>
                    <div class="bottomAgreeDiv">
                        <div class="leftAgreeDiv">同意</div>
                        <div class="rightDisAgreeDiv">不同意</div>
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
                surveryPeo: "案件来源",
                caseTimeee:'2019-10-1',
                casetTruth:'',
                yijian:'同意',
                shenpiRen:'张三',
                shenpiTime:'2018-10-1',
                tellType:'',
                tellTypeAry:[
                    {value: 0, text: "直接送达"}, {value: 1, text: "留置送达"},{value: 2, text: "邮寄送达"}, {value: 3, text: "公告送达"}
                ],
                tellTypeId:'',
                transferTime:'',
                nextPeople:'',
                image_url:[],
                // waitSubmitShow:true,
                caseProf:[],
                transferPeo:'',
                transferAddress:'',
                shenBianAddShow:true,
                chenshuAddress:'',
                shenbianTime:'',
                timeIndex:'',
                selfPeoShenBian:'',
                chenshuFuJian:[],
                fuJianIndex:'',
                image_url1:[],
                tingZhengShow:true,
                tingZhengAddress:'',
                tingZhengContent:'',
                image_url2:[],
                tingZhengTime:'',
                waitPunishSubmitShow:'',
                currentPhotoIndex: 0,
                caseId:'',
                allType:'',
                chenShuShenbian:false,
                tingZheng:false,
                annexNo:'',
                currentPhotoIndex:0,
                currentPhotoIndex1:0,
                currentPhotoIndex2:0,




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
                shouliCaseProfPath:[],
                caseProfPath:[],
                acceptance:[],
                approval: [],
                remark:'',
                selfPeoShenBian:'',
            }
        },
        created() {

        },
        mounted() {
            // this.$refs.casetTruth.inputContent = '这是处罚决定。。。';
            // this.$refs.chufajueding.inputContent = 'zzEND';
            // console.log('=== '+ this.$refs.chufajueding.inputContent);

            this.caseId = this.$route.query.id;
            this.allType = this.$route.query.type;
            this.nextPeople = window.namee;


            this.tellTypeId = window.tellType;
            this.tellType = window.tellTypeText;
            this.$refs.transferPeo.inputContent = window.transferPeo;
            this.transferTime = window.transferT;
            this.$refs.transferAddress.inputContent = window.locAdd;
            // this.$refs.remark.inputContent = window.remark;
            this.remark=window.remark;



            this.allType == 1 ? this.waitPunishSubmitShow = true : this.waitPunishSubmitShow = false;

            this.getInformation();


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
                var that=this;
                var path;
                if (tip == 1){
                    path = this.shouliCaseProfPath[index]
                } else {
                    path = this.caseProfPath[index]
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
                   // window.location.href = '/zhzf' + path;
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
                    this.shouliCaseTime = this.formatTime(res.data.caseTime,'Y-M-D');
                    this.location = res.data.location;
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

                            this.caseSource = obj.caseReason;
                            this.caseAccording = obj.punishBasis;
                            this.approval.push(
                                {
                                    key: "案由",
                                    value: obj.caseReason
                                },
                                {
                                    key: "处罚依据",
                                    value: obj.punishBasis
                                }
                            );
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
            chooseTime(index){
                this.timeIndex = index;
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
                // alert(this.timeIndex)

                if (this.timeIndex == 1) {
                    this.transferTime = selectedText.toString().split(",").join("-");
                } else if (this.timeIndex == 2) {
                    this.shenbianTime = selectedText.toString().split(",").join("-");
                } else {
                    this.tingZhengTime = selectedText.toString().split(",").join("-");
                }
            },
            choosePeople(){
                window.tellType = this.tellTypeId;
                window.tellTypeText = this.tellType;
                window.transferPeo = this.$refs.transferPeo.inputContent;
                window.transferT = this.transferTime;
                window.locAdd = this.$refs.transferAddress.inputContent;
                // window.remark = this.$refs.remark.inputContent;
                window.remark = this.remark;


                this.$router.push({
                    path:'/chooseApprover',
                    query:{
                        id:2
                    }
                })
                // this.$router.push('/choosePeople')
            },
            deletePic(index,typeIndex){
                // alert(1)
                if (typeIndex == 1){
                    this.image_url.splice(index, 1);
                } else if (typeIndex == 2) {
                    this.image_url1.splice(index, 1);
                } else {
                    this.image_url2.splice(index, 1);

                }

            },
            addFujian(index){
                this.fuJianIndex = index;
                // if (!this.picker) {
                    this.picker = this.$createPotPicker({
                        title: '添加照片',
                        data: [pictureSourceType],
                        onSelect: this.picturePickerSelectHandle,
                        onCancel: this.cancelHandle
                    });
                // }
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
                if (this.fuJianIndex == 1) {
                    this.image_url.push(imageData);
                } else if (this.fuJianIndex == 2) {
                    // 添加相片
                    this.image_url1.push(imageData);
                } else {
                    this.image_url2.push(imageData);
                }

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
            submit(){
                this.annexNo = this.getTimeStamp();
                if (this.image_url.length <= 0) {
                    this.annexNo = '';
                }
                if (this.image_url.length > 0) {
                    this.photoAllUpload();
                    this.uploadInformation();
                } else {
                    this.uploadInformation();
                }
                // this.uploadInformation();
            },
            photoAllUpload(){
                this.photoUpload();
                this.photoUpload1();
                this.photoUpload2();
            },
            async photoUpload(){
                if (this.currentPhotoIndex < this.image_url.length) {
                    let res = await uploadImage(this.image_url[this.currentPhotoIndex],this.annexNo,'1','1');
                    let response = {};
                    if (res != undefined && res != '') {
                        response = JSON.parse(res);
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
                    // this.uploadInfomation();
                }
            },
            async photoUpload1(){
                if (this.currentPhotoIndex1 < this.image_url1.length) {
                    // alert('要传照片了');
                    // console.log('=====photo upload=====index:' + this.currentPhotoIndex);
                    let res = await uploadImage(this.image_url1[this.currentPhotoIndex1],this.annexNo,'1','2');
                    let response = {};
                    if (res != undefined && res != '') {
                        response = JSON.parse(res);
                    }else {
                        response = res;
                    }
                    if (response.code == '0') {
                        this.currentPhotoIndex1++;
                        this.photoUpload1();
                    } else {
                        this.hideLoading();
                    }
                } else {
                    // this.uploadInfomation();
                }
            },
            async photoUpload2(){
                if (this.currentPhotoIndex2 < this.image_url2.length) {
                    // alert('要传照片了');
                    // console.log('=====photo upload=====index:' + this.currentPhotoIndex);
                    let res = await uploadImage(this.image_url2[this.currentPhotoIndex2],this.annexNo,'1','3');
                    let response = {};
                    if (res != undefined && res != '') {
                        response = JSON.parse(res);
                    }else {
                        response = res;
                    }
                    if (response.code == '0') {
                        this.currentPhotoIndex2++;
                        this.photoUpload2();
                    } else {
                        this.hideLoading();
                    }
                } else {
                    // this.uploadInfomation();
                }
            },

            async uploadInformation(){

                if (this.tellType == '' || this.tellType == null || this.tellType == undefined) {
                    this.toast('请选择告知方式')
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
                if (this.remark == '' || this.remark == null || this.remark == undefined) {
                    this.toast('请填写备注')
                    return;
                }
                if (window.idd == '' || window.idd == null || window.idd == undefined) {
                    this.toast('请选择下级审批人')
                    return;
                }



                var obj ={
                    informWay:this.tellTypeId.toString(),
                    docDeliveryPerson:this.$refs.transferPeo.inputContent,
                    docDeliveryTime:this.transferTime,
                    docLocation:this.$refs.transferAddress.inputContent,
                    remark:this.remark,
                    plea:this.chenShuShenbian,
                    pleaLocation:this.$refs.chenshuAddress.inputContent,//chenshuAddress
                    pleaTime:this.shenbianTime,
                    pleaFact:this.selfPeoShenBian,
                    hear:this.tingZheng,
                    hearLocation:this.$refs.tingZhengAddress.inputContent,//tingZhengAddress
                    hearTime:this.tingZhengTime,
                    hearContent:this.tingZhengContent,//tingZhengContent
                    result:'0',
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
            changShenBianState(){
                this.shenBianAddShow = !this.shenBianAddShow;
                this.chenShuShenbian = !this.chenShuShenbian;
            },
            changTingZhengState(){
                this.tingZhengShow = !this.tingZhengShow;
                this.tingZheng = !this.tingZheng;
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
                        border: 1px solid #dddddd;
                        color: black;
                        //<!--background: @blue;-->
                    }
                }
            }
        }

        .step-title {
            font-size: 21px;
            padding: @padding-height @padding-width;
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
        /*.caseProfDiv{*/
            /*width: 100%;*/
            /*height: 4rem;*/
            /*background: white;*/
            /*padding-left: 3%;*/
            /*border-top: 1px solid #dddddd;*/
            /*border-bottom: 1px solid #dddddd ;*/
            /*.titp{*/
                /*width: 100%;*/
                /*height: 1rem;*/
                /*line-height: 1rem;*/
                /*color: #999999;*/
            /*}*/
            /*.contentDiv{*/
                /*width: 100%;*/
                /*height: 3rem;*/
                /*overflow: scroll;*/
                /*!*background: cyan;*!*/
                /*.lineContent{*/
                    /*width: 100%;*/
                    /*height: 1.5rem;*/
                    /*line-height: 1.5rem;*/
                /*}*/
            /*}*/
        /*}*/
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
        .submitBtn {
            margin: @margin-button-height @margin-button-width;
            height: @bottom-height;
            line-height: @bottom-height;
            text-align: center;
            background: @blue;
            border-radius: 9px;
            color: white;
        }
        .arguTell{
            width: 100%;
            height: 60px;
            margin-top: 15px;
            padding-left: 3%;
            padding-right: 3%;
            background: white;
            border-bottom: 1px solid #dddddd;
            border-top: 1px solid #dddddd;
            .leftDiv{
                float: left;
                width: 120px;
                height: 60px;
                text-align: left;
                line-height: 60px;
                /*background: cyan;*/
            }
            .rightDiv{
                float: right;
                width: 60px;
                height: 60px;
                /*background: red;*/
                padding: 15px;
            }
        }
        .arguTellContent{
            background: white;
        }
        .step-content {
            background-color: white;

        }
        .jiajianimg{
            width: 25px;
        }
    }
</style>
