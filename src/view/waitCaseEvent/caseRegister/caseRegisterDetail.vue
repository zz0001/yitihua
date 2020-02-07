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
                    <div class="case-number">{{caseNo}}</div>
                </div>
                <div class="case-number-right">{{rightTitle}}</div>
            </div>

            <div class="shoulidengji">
                <!--<div class="step-title">受理登记</div>-->
                <tk-title>受理登记</tk-title>
                <!--<text-view title="案件来源" :content="caseOriginName"></text-view>-->
                <!--<text-view title="案件类别" :content="caseTypeName"></text-view>-->
                <!--<text-view title="当事人" :content="curPersonName"></text-view>-->
                <!--<text-view title="案发时间" :content="caseTime"></text-view>-->
                <!--<text-view title="案发地点" :content="location"></text-view>-->
                <tk-detail :list="acceptance"></tk-detail>
                <text-area-view ref="caseDescribe" title="案件描述" readonly="readonly" style="margin-top:0.0625rem"></text-area-view>
                <div class="caseProfDiv">
                    <div class="titp">案件证据</div>
                    <div class="contentDiv">
                        <div
                                class="lineContent"
                                v-for="(item,index) in caseProf"
                                @click="showImg(index)"
                        >{{item}}</div>
                    </div>
                </div>
                <text-view title="上报人" :content="createUserName"></text-view>
                <text-view title="上报时间" :content="createdDate"></text-view>

                <div class="case-description-wrapper">
                    <div class="case-description-title"></div>
                    <div class="case-description-content"></div>
                </div>
            </div>
            <div class="lianshenpi" v-show="addShow">
                <!--<div class="step-title">立案审批</div>-->
                <tk-title>立案审批</tk-title>
                <div class="lianshenpi-edit step-content">
                    <!--<edit-text-view v-show="!shenpiyiJianShow" class="lineClass" title="案由" required="true"-->
                    <!--:hide-arrow="false" @onClickContent="caseSourceChoose"-->
                    <!--:editable="false" :choose-content="fillCase"></edit-text-view>-->

                    <div class="changeS" v-show="!shenpiyiJianShow">
                        <div class="leftT">
                            案由
                            <span style="color: red">&nbsp*</span>
                        </div>
                        <div class="rightDiv">
                            <input class="leftInput" placeholder="请填写>" v-model="fillCase" />
                            <!--<div class="rightInput" @click="caseSourceChoose">-->
                            <!--<img style="width: 30px;" src="../../image/sousuo.png"/>-->
                            <!--</div>-->
                        </div>
                    </div>

                    <!--<edit-text-view v-show="!shenpiyiJianShow" class="lineClass" title="处罚依据" required="true"-->
                    <!--:hide-arrow="false"-->
                    <!--:editable="false" :choose-content="selectAccording"></edit-text-view>-->
                    <edit-text-view
                            v-show="!shenpiyiJianShow"
                            class="lineClass"
                            title="处罚依据"
                            required="true"
                            :hide-arrow="false"
                            :editable="true"
                            ref="selectAccording"
                    ></edit-text-view>
                    <!--<text-area-view-->
                    <!--ref="punshDecsion"-->
                    <!--v-show="!shenpiyiJianShow"-->
                    <!--title="处罚决定"-->
                    <!--hint="请填写处罚决定"-->
                    <!--required="true"-->
                    <!--max-length="1000"-->
                    <!--:hide-split-line="false"-->
                    <!--&gt;</text-area-view>-->
                    <tk-textarea v-show="!shenpiyiJianShow" placeholder="请填写处罚决定" maxlength="1000" v-model="punshDecsion"/>
                    <!--<text-area-view-->
                    <!--ref="caseZhaiYao"-->
                    <!--v-show="!shenpiyiJianShow"-->
                    <!--title="案情摘要"-->
                    <!--hint="请填写案情摘要"-->
                    <!--required="true"-->
                    <!--max-length="1000"-->
                    <!--:hide-split-line="false"-->
                    <!--&gt;</text-area-view>-->
                    <tk-textarea v-show="!shenpiyiJianShow" placeholder="请填写案情摘要" maxlength="1000" v-model="caseZhaiYao"/>
                    <text-view title="案由" v-show="shenpiyiJianShow" :content="caseReason"></text-view>
                    <text-view title="处罚依据" v-show="shenpiyiJianShow" :content="punishReason"></text-view>
                    <text-area-view
                            ref="punishDescide"
                            v-show="shenpiyiJianShow"
                            title="处罚决定"
                            readonly="readonly"
                            :hide-split-line="false"
                    ></text-area-view>
                    <text-area-view
                            ref="punishCase"
                            v-show="shenpiyiJianShow"
                            title="案情摘要"
                            readonly="readonly"
                            :hide-split-line="false"
                    ></text-area-view>

                    <!--<text-area-view-->
                    <!--v-show="shenpiyiJianShow"-->
                    <!--title="审批意见"-->
                    <!--hint="请填写审批意见"-->
                    <!--ref="fillShenPiYiJIan"-->
                    <!--required="true"-->
                    <!--max-length="1000"-->
                    <!--:hide-split-line="false"-->
                    <!--&gt;</text-area-view>-->
                    <tk-textarea v-show="shenpiyiJianShow" placeholder="请填写审批意见" maxlength="1000" v-model="fillShenPiYiJIan"/>
                    <edit-text-view
                            class="lineClass"
                            title="下级审批/处理人"
                            required="true"
                            :hide-arrow="false"
                            @onClickContent="choosePeople"
                            :editable="false"
                            :choose-content="chosenPeople"
                    ></edit-text-view>
                </div>

                <div v-show="!shenpiyiJianShow" class="submitBtn" @click="submit">提交</div>
                <div v-show="shenpiyiJianShow" class="bottomAgreeDiv">
                    <div class="leftAgreeDiv" @click="agreeSubmit(0)">同意</div>
                    <div class="rightDisAgreeDiv" @click="agreeSubmit(1)">不同意</div>
                </div>

                <div class="maskView" v-show="maskShow">
                    <div class="contentDiv">
                        <div class="deleteDiv">
                            <img
                                    @click="showNone"
                                    style="width: 30px;float: right"
                                    src="../../image/shanchu.png"
                            />
                        </div>
                        <div class="titleDiv" style="margin-top: 2rem">
                            <div class="leftDiv">选择案由:</div>
                            <input class="fillDiv" v-model="fillCase" />
                        </div>
                        <div class="askData" v-show="accAndPunShow">
                            <cube-radio-group v-model="selectCase" :options="sourceAry"></cube-radio-group>
                        </div>
                        <div v-show="!accAndPunShow" class="titleDiv" style="height: 3px">
                            <div class="leftDiv" style="width: 60%">暂无匹配项</div>
                        </div>
                        <div v-show="accAndPunShow && secondAccShow">
                            <div class="titleDiv">
                                <div class="leftDiv">选择处罚依据:</div>
                                <div class="fillDiv">{{selectAccording}}</div>
                            </div>
                            <div class="addAccording">{{selectAccording}}</div>
                            <div class="titleDiv">
                                <div class="leftDiv">选择处罚标准:</div>
                                <div class="fillDiv">{{selectStandard}}</div>
                            </div>
                            <div class="askData" style="height: 180px;">
                                <cube-radio-group v-model="selectStandard" :options="accordingAry"></cube-radio-group>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </tk-scroll>
    </div>
</template>

<script>
    //getAppCaseInfo
    import TextView from "../../../components/text-view";
    import TextAreaView from "../../../components/text-area-view";
    import EditTextView from "../../../components/edit-text-view";
    import MyButton from "../../../components/my-button";
    import {
        getAppCaseInfo,
        findStandardByName,
        findStandardByCase,
        getAppInspectionView
    } from "../../../modules/getData.js";
    var col = require("../../../../webpack.config");

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
                caseProf: [
                    // '身份证1.png','身份证2.png','身份证1.png','身份证2.png'
                ],
                caseDeasipp: "",
                shenpiyiJianShow: "",
                caseId: "",
                caseReason: "",
                punishReason: "",
                fillCase: "",
                selectAccording: "",
                rightTitle: "",

                caseNo: "",
                caseOriginName: "",
                caseTypeName: "",
                curPersonName: "",
                caseTime: "",
                location: "",
                caseDescribe: "",
                createUserName: "",
                createdDate: "",

                maskShow: false,
                selectCase: "",
                sourceAry: [],
                sourceIdAry: [],
                selectAccordingId: "",
                selectStandard: "",
                selectStandardId: "",
                accordingAry: [
                    // 'Option1','Option2','Option3'
                ],
                accordingIdAry: [
                    // '1','2','3'
                ],
                publishProveOne: "",
                publishProveTwo: "",

                chosenId: "",
                chosenPeople: "",
                allType: "",

                caseProfPath: [],

                accAndPunShow: false,
                secondAccShow: false,
                addId: "",
                addShow: true,
                punshDecsion:'',
                caseZhaiYao:'',
                fillShenPiYiJIan:'',
                acceptance:[],
            };
        },
        created() {
            // this.caseDupty = window.namee;

            this.chosenId = localStorage.getItem("userId");
            this.chosenPeople = window.namee;
        },
        watch: {
            // fillCase(newName, oldName) {
            //     this.findStandardByName(newName)
            // },
            //案由
            selectCase(newName, oldName) {
                var index = this.sourceAry.indexOf(newName);
                this.sourceId = this.sourceIdAry[this.sourceAry.indexOf(newName)];
                window.sourceId = this.sourceIdAry[this.sourceAry.indexOf(newName)];
                this.fillCase = newName;
                this.findStandardByCase(this.sourceId);
            },
            //处罚标准
            selectStandard(newName, oldName) {
                this.selectStandardId = this.accordingIdAry[
                    this.accordingAry.indexOf(newName)
                    ];
                // this.$refs.punshDecsion.inputContent =
                //     this.fillCase +
                //     "违反" +
                //     this.selectAccording +
                //     this.publishProveOne +
                //     this.publishProveOne +
                //     this.selectStandard;
                if(this.fillCase==null){
                    this.fillCase="";
                }
                if(this.selectAccording==null){
                    this.selectAccording="";
                }
                if(this.publishProveOne==null){
                    this.publishProveOne="";
                }
                if(this.selectStandard==null){
                    this.selectStandard="";
                }
                this.punshDecsion =
                    this.fillCase +
                    "违反" +
                    this.selectAccording +
                    this.publishProveOne +
                    this.publishProveOne +
                    this.selectStandard;

                // this.$refs.caseZhaiYao.inputContent =
                //     "经巡查发现，" +
                //     this.curPersonName +
                //     "于【" +
                //     this.caseTime +
                //     "】在【" +
                //     this.location +
                //     "】,【" +
                //     this.fillCase +
                //     "】。以上行为违反了【" +
                //     this.selectAccording +
                //     "】的规定。";
                if(this.curPersonName==null){
                    this.curPersonName="";
                }
                if(this.caseTime==null){
                    this.caseTime="";
                }
                if(this.location==null){
                    this.location="";
                }
                if(this.fillCase==null){
                    this.fillCase="";
                }
                if(this.selectAccording==null){
                    this.selectAccording="";
                }
                this.caseZhaiYao =
                    "经巡查发现，" +
                    this.curPersonName +
                    "于【" +
                    this.caseTime +
                    "】在【" +
                    this.location +
                    "】,【" +
                    this.fillCase +
                    "】。以上行为违反了【" +
                    this.selectAccording +
                    "】的规定。";
                this.maskShow = false;
            }
        },
        mounted() {
            this.caseId = this.$route.query.id;
            this.allType = this.$route.query.type;
            this.rightTitle = this.$route.query.rightTitle;

            this.addId = this.$route.query.addId;
            console.log("this.addId==" + this.addId);

            if (this.addId == 3) {
                this.addShow = false;
            } else {
                this.allType == 1
                    ? (this.shenpiyiJianShow = false)
                    : (this.shenpiyiJianShow = true);
            }

            this.fillCase = localStorage.getItem("fillCase");
            this.selectAccording = localStorage.getItem("selectAccording");

            this.$refs.selectAccording.inputContent = window.selectAccording;

            this.publishProveOne = localStorage.getItem("publishProveOne");
            // this.publishProveTwo = localStorage.getItem('publishProveTwo');
            this.selectStandard = localStorage.getItem("selectStandard");
            // this.$refs.caseZhaiYao.inputContent = localStorage.getItem(
            //     "caseSummary"
            // );
            this.caseZhaiYao = localStorage.getItem(
                "caseSummary"
            );

            this.fillCase = localStorage.getItem("fillCase");
            this.curPersonName = localStorage.getItem("curPersonName");
            this.caseTime = localStorage.getItem("caseTime");
            this.location = localStorage.getItem("location");

            this.sourceId = window.sourceId;

            // this.$refs.fillShenPiYiJIan.inputContent = window.shenPiYiJian;
            this.fillShenPiYiJIan = window.shenPiYiJian;

            var abc = window.curPersonName;
            console.log("abc==" + abc);

            this.getInformation();
        },
        methods: {
            _inputValue(item, value) {
                this.$set(item, 'value', value);
            },
            toast(txt, type, fn) {
                this.$createPotToast({
                    time: 1500,
                    mask: true,
                    txt: txt || "正在加载中...",
                    type: type,
                    onTimeout: fn || null
                }).show();
            },
            showImg(index) {
                // this.$router.push({
                //     path:'/imgShow',
                //     query:{
                //         imgSrc:this.caseProfPath[index]
                //     }
                // })
                var that = this;
                if (navigator.platform.toLowerCase() === "iphone") {
                    this.$router.push({
                        path: "/imgShow",
                        query: {
                            imgSrc: path
                        }
                    });
                } else {
                    // window.location.href = '/zhzf' + path;
                    var href = col.proxy[2].target + path;
                    var arr = path.split(".");
                    var name = "综合执法." + arr[1];

                    that.checkSDCard(href, name);
                }
            },
            async agreeSubmit(value) {
                var str = this.fillShenPiYiJIan;
                if (str === "" || str == null || str === undefined) {
                    this.toast("请填写审批意见");
                    return;
                }
                if (
                    window.idd === "" ||
                    window.idd == null ||
                    window.idd === undefined
                ) {
                    this.toast("请选择下级审批人");
                    return;
                }

                var obj = {
                    remark: this.fillShenPiYiJIan,
                    result: value,
                    userId: window.idd
                };
                var contentJson, result, caseInfoId, dutyUserId, annexNo;
                contentJson = JSON.stringify(obj);
                result = value;
                caseInfoId = this.caseId;
                dutyUserId = window.idd;

                let res = await getAppInspectionView(
                    contentJson,
                    result,
                    caseInfoId,
                    dutyUserId
                );
                if (res.code == 0) {
                    this.toast(res.message);
                    setTimeout(() => {
                        this.$router.go(-1);
                    }, 1000);

                    this.hideLoading();
                } else {
                    this.hideLoading();
                    this.toast(res.message);
                }
            },
            back() {
                this.$router.go(-1);
            },
            test() {
                console.log("=== " + this.$refs.anqingzhaiyao.inputContent);
            },
            async submit() {
                if (
                    this.fillCase == "" ||
                    this.fillCase == null ||
                    this.fillCase == undefined
                ) {
                    this.toast("请选择案由");
                    return;
                }
                if (
                    window.idd === "" ||
                    window.idd == null ||
                    window.idd === undefined
                ) {
                    this.toast("请选择下级审批人");
                    return;
                }

                var obj = {
                    caseReason: this.fillCase,
                    punishBasis:
                    this.$refs.selectAccording.inputContent +
                    this.publishProveOne,
                    punishDecide: this.selectStandard,
                    caseSummary: this.caseZhaiYao,
                    result: 0,
                    userId: window.idd
                };

                var contentJson, result, caseInfoId, dutyUserId, annexNo;
                contentJson = JSON.stringify(obj);
                result = "0";
                caseInfoId = this.caseId;
                dutyUserId = window.idd;
                annexNo = "";

                let res = await getAppInspectionView(
                    contentJson,
                    result,
                    caseInfoId,
                    dutyUserId,
                    annexNo
                );
                if (res.code == 0) {
                    this.toast(res.message);

                    setTimeout(() => {
                        this.$router.go(-1);
                    }, 1000);

                    this.hideLoading();
                } else {
                    this.hideLoading();
                    this.toast(res.message);
                }
            },
            choosePeople() {
                localStorage.setItem("fillCase", this.fillCase);
                localStorage.setItem("selectAccording", this.selectAccording);
                localStorage.setItem("publishProveOne", this.publishProveOne);
                // localStorage.setItem('publishProveTwo', this.publishProveTwo);
                localStorage.setItem("selectStandard", this.selectStandard);
                localStorage.setItem(
                    "caseSummary",
                    this.caseZhaiYao
                );

                localStorage.setItem("curPersonName", this.curPersonName);
                localStorage.setItem("caseTime", this.caseTime);
                localStorage.setItem("location", this.location);

                window.sourceId = this.sourceId;

                // window.shenPiYiJian = this.$refs.fillShenPiYiJIan.inputContent;
                window.shenPiYiJian = this.fillShenPiYiJIan;

                window.selectAccording = this.$refs.selectAccording.inputContent;

                this.$router.push({
                    path: "/chooseApprover",
                    query: {
                        id: 2
                    }
                });
            },
            caseSourceChoose() {
                // this.maskShow = true;
                // this.$router.push('/caseReason')
                window.caseTime = this.caseTime;
                this.$router.push({
                    path: "/caseReason",
                    query: {
                        text: this.fillCase
                    }
                });
            },
            async findStandardByName(value) {
                let res = await findStandardByName(value);
                if (res.code == 0) {
                    this.sourceIdAry.splice(0, this.sourceIdAry.length);
                    this.sourceAry.splice(0, this.sourceAry.length);

                    if (res.datas.length > 0) {
                        this.accAndPunShow = true;
                    } else {
                        this.accAndPunShow = false;
                    }

                    for (var i = 0; i < res.datas.length; i++) {
                        this.sourceAry.push(res.datas[i].caseReason);
                        this.sourceIdAry.push(res.datas[i].id);
                    }
                    this.hideLoading();
                } else {
                    this.hideLoading();
                    this.toast(res.message);
                }
            },
            async findStandardByCase(value) {
                let res = await findStandardByCase(value);
                if (res.code == 0) {
                    if (
                        res.data.manageProve != "" ||
                        res.data.manageProve != null
                    ) {
                        this.secondAccShow = true;
                    } else {
                        this.secondAccShow = false;
                    }

                    //处罚依据
                    this.selectAccording = res.data.manageProve;
                    this.selectAccordingId = res.data.manageProveId;
                    this.$refs.selectAccording.inputContent =
                        res.data.manageProve + res.data.publishProveOne;

                    this.accordingIdAry.splice(0, this.accordingIdAry.length);
                    this.accordingAry.splice(0, this.accordingAry.length);
                    this.publishProveOne = res.data.publishProveOne;
                    this.publishProveTwo = "";

                    for (var i = 0; i < res.data.freeCutLink.length; i++) {
                        this.accordingAry.push(res.data.freeCutLink[i].polt);
                        this.accordingIdAry.push(res.data.freeCutLink[i].id);
                    }
                    this.hideLoading();
                } else {
                    this.hideLoading();
                    this.toast(res.message);
                }
            },
            sureMaskView() {
                this.maskShow = false;
            },
            showNone() {
                this.maskShow = false;
            },

            // 格式化日期，如月、日、时、分、秒保证为2位数
            formatNumber(n) {
                n = n.toString();
                return n[1] ? n : "0" + n;
            },
            // 参数number为毫秒时间戳，format为需要转换成的日期格式
            formatTime(number, format) {
                let time = new Date(number);
                let newArr = [];
                let formatArr = ["Y", "M", "D", "h", "m", "s"];
                newArr.push(time.getFullYear());
                newArr.push(this.formatNumber(time.getMonth() + 1));
                newArr.push(this.formatNumber(time.getDate()));

                for (let i in newArr) {
                    format = format.replace(formatArr[i], newArr[i]);
                }
                return format;
            },

            async getInformation() {
                let res = await getAppCaseInfo(this.caseId);
                if (res.code == 0) {
                    this.caseNo = res.data.caseNo;
                    this.caseOriginName = res.data.caseOriginName;
                    this.caseTypeName = res.data.caseTypeName;
                    this.curPersonName = res.data.curPersonName;

                     if (this.curPersonName == '' || this.curPersonName == null || this.curPersonName == undefined) {
                         this.curPersonName = "";
                     }
                    //     console.log(1111);
                    // } else {
                    //     console.log(2222);
                    // }

                    this.caseTime = this.formatTime(res.data.caseTime, "Y-M-D");
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
                            value: this.caseTime
                        },
                        {
                            key: "案发地点",
                            value: this.location
                        }
                    );

                    this.$refs.caseDescribe.inputContent = res.data.caseDescribe;
                    this.createUserName = res.data.createUserName;
                    this.createdDate =
                        res.data.createdDate != null
                            ? res.data.createdDate.substring(0, 10)
                            : "";

                    if (this.fillCase) {
                        this.caseZhaiYao =
                            "经巡查发现，" +
                            this.curPersonName +
                            "于【" +
                            this.caseTime +
                            "】在【" +
                            this.location +
                            "】,【" +
                            this.fillCase +
                            "】。以上行为违反了【" +
                            this.selectAccording +
                            "】的规定。";
                    }

                    var abc = res.data.recordList;
                    var def = res.data.annexSet;
                    if (def != null && def.length > 0) {
                        for (var j = 0; j < def.length; j++) {
                            this.caseProf.push(def[j].annexName); //caseProfPath
                            this.caseProfPath.push(def[j].annexPath);
                        }
                    }
                    // for (var i = 0;i<abc.length;i++) {
                    //     if (abc[i].formTaskId == 'sldj') {
                    //         if (abc[i].annexList != null && abc[i].annexList.length > 0) {
                    //             for (var j = 0;j<abc[i].annexList.length;j++){
                    //                 this.caseProf.push(abc[i].annexList[j].annexName)
                    //             }
                    //         }
                    //         break;
                    //     }
                    // }
                    if (this.addId == 3) {
                    } else {
                        if (this.allType == 2) {
                            if (res.data.recordList.length >= 1) {
                                var abc =
                                    res.data.recordList[
                                    res.data.recordList.length - 2
                                        ];
                                var obj = JSON.parse(abc.contentJson);
                                if (obj) {
                                    this.caseReason = obj.caseReason;
                                    this.punishReason = obj.punishBasis; //punishDescide  punishCase
                                    this.$refs.punishCase.inputContent =
                                        obj.caseSummary;
                                    this.$refs.punishDescide.inputContent =
                                        obj.punishDecide;
                                }
                            }
                        }
                    }
                    this.hideLoading();
                } else {
                    this.hideLoading();
                    this.toast(res.message);
                }
            }
        }
    };
</script>

<style lang="less" scoped>
    @import "../../../style/less-variable";

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
        /*padding-top: 2.2rem;*/

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
                        font-size: 16px;
                        color: @title-color;
                    }

                    .case-number {
                        font-size: 16px;
                        color: @content-color;
                    }
                }

                .case-number-right {
                    font-size: 16px;
                }
            }

            .shoulidengji {
                display: flex;
                flex-flow: column nowrap;
                width: 100%;

                .caseProfDiv {
                    width: 100%;
                    height: 120px;
                    background: white;
                    padding: 13.5px 15px;
                    border-top: 1px solid #dddddd;
                    border-bottom: 1px solid #dddddd;
                    box-sizing: border-box;
                    .titp {
                        width: 100%;
                        height: 30px;
                        line-height: 30px;
                        color: #999999;
                    }

                    .contentDiv {
                        width: 100%;
                        height: 90px;
                        overflow: scroll;
                        /*background: cyan;*/

                        .lineContent {
                            width: 100%;
                            height: 45px;
                            line-height: 45px;
                            padding-left: 30px;
                        }
                    }
                }
            }
        }

        .step-title {
            color: #333333;
            font-size: 16px;
            padding: @padding-height @padding-width;
        }

        .step-content {
            background-color: white;
        }

        .maskView {
            width: 100%;
            height: 170%;
            top: 0;
            bottom: 0;
            position: absolute;
            background: black;
            z-index: 20000;
            opacity: 0.9;

            .contentDiv {
                width: 80%;
                height: 510px;
                margin-left: 10%;
                /*margin-top: 120px;*/
                background: white;
                padding: 15px 15px 15px;
                padding-top: 0;
                padding-right: 0;
                position: fixed;
                .deleteDiv {
                    float: right;
                    width: 100%;
                    height: 30px;
                    /*background: red;*/
                    margin-bottom: 30px;
                }

                .titleDiv {
                    width: 100%;
                    height: 33px;
                    /*background: red;*/
                    text-align: left;
                    .leftDiv {
                        float: left;
                        width: 50%;
                        height: 30px;
                        line-height: 45px;
                        /*text-align: center;*/
                        padding-left: 15px;
                        font-size: 21px;
                    }
                    .fillDiv {
                        display: none;
                        float: left;
                        width: 50%;
                        height: 45px;
                        line-height: 45px;
                        text-align: left;
                        /*background: orange;*/
                        border: 1px solid gray;
                        border-radius: 9px;
                        overflow: hidden;
                        white-space: nowrap;
                        text-overflow: ellipsis;
                    }
                }
                .addAccording {
                    width: 100%;
                    height: 45px;
                    line-height: 45px;
                    padding-left: 15px;
                    overflow: hidden;
                    white-space: nowrap;
                    text-overflow: ellipsis;
                }
                .askData {
                    width: 100%;
                    height: 60px;
                    /*background: cyan;*/
                    overflow: scroll;
                }
                .sureDiv {
                    width: 120px;
                    height: 60px;
                    margin-top: 12px;
                    margin-left: 33%;
                    background: @blue;
                    border-radius: 9px;
                    color: white;
                    line-height: 60px;
                    text-align: center;
                }
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

        .bottomAgreeDiv {
            width: 100%;
            height: 120px;
            background: white;

            .leftAgreeDiv {
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

            .rightDisAgreeDiv {
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
        .changeS {
            width: 100%;
            height: 48px;
            border-bottom: 1px solid @grey-split-line;
            background: white;
            padding-left: 3%;
            line-height: 48px;
            /*padding-right: 3%;*/
            .leftT {
                float: left;
            }
            .rightDiv {
                float: right;
                width: 70%;
                height: 100%;
                color: #333333;
                /*background: red;*/
                .leftInput {
                    width: 95%;
                    /*margin-top: 0.2rem;*/
                    height: 36px;
                    /*background: cyan;*/
                    text-align: right;
                    color: #333333;
                }
                .rightInput {
                    display: inline-block;
                    float: right;
                    width: 18%;
                    height: 100%;
                    /*background: orange;*/
                    text-align: center;

                    padding-left: 6px;
                }
            }
        }
    }
</style>
