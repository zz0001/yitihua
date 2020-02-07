<template>
    <div class="case-detail">
        <tk-header>案件详情</tk-header>
        <tk-scroll>
            <tk-detail :list="caseNo"></tk-detail>
            <!-- 受理登记 -->
            <tk-title>受理登记</tk-title>
            <tk-detail :list="acceptance"></tk-detail>
            <text-area-view ref="caseDescribe" title="案件描述" readonly="readonly"></text-area-view>
            <div class="caseProfDiv">
                <div class="titp">案件证据</div>
                <div class="contentDiv">
                    <div
                        class="lineContent"
                        v-for="(item,index) in shouliCaseProf"
                        :key="index"
                        @click="showImg(index,1)"
                    >{{item}}</div>
                </div>
            </div>
            <tk-detail :list="report"></tk-detail>
            <!-- 立案审批 -->
            <tk-title>立案审批</tk-title>
            <tk-detail :list="approval"></tk-detail>
            <text-area-view ref="punishDecsion" title="处罚决定" readonly="readonly"></text-area-view>
            <text-area-view ref="caseImport" title="案情摘要" readonly="readonly"></text-area-view>

            <div class="pass">
                <tk-detail :list="opinion"></tk-detail>
                <div class="passDiv">通过</div>
            </div>
            <!-- 调查取证 -->
            <tk-title>调查取证</tk-title>
            <tk-detail :list="investigation"></tk-detail>
            <div class="lianshenpi">
                <div class="lianshenpi-edit step-content">
                    <div v-show="waitSubmitShow">
                        <edit-text-view
                            class="lineClass"
                            title="调查人员"
                            required="true"
                            :hide-arrow="false"
                            :editable="true"
                            ref="diaochaPeo"
                        ></edit-text-view>
                        <edit-text-view
                            class="lineClass"
                            title="调查时间"
                            required="true"
                            :hide-arrow="false"
                            @onClickContent="chooseTime"
                            :editable="false"
                            :choose-content="surveryTime"
                        ></edit-text-view>
                        <!--<text-area-view ref="caseBaseTruthEdit" title="案件基本事实" hint="请填写" required="true" max-length="1000" :hide-split-line="false"></text-area-view>-->
                        <tk-textarea
                            placeholder="请填写案件基本事实"
                            maxlength="1000"
                            v-model="caseBaseTruthEdit"
                        />
                    </div>
                    <div v-show="!waitSubmitShow">
                        <!--<text-view title="调查人员" :content="diaochaPeo"></text-view>-->
                        <!--<text-view title="调查时间" :content="surveryTime"></text-view>-->
                        <tk-detail :list="dcxzList"></tk-detail>
                        <text-area-view ref="caseBaseTruth" title="案件基本事实" readonly="readonly"></text-area-view>
                    </div>

                    <div class="waitSubmit" v-show="waitSubmitShow">
                        <edit-text-view
                            class="lineClass"
                            title="下级审批/处理人"
                            required="true"
                            :hide-arrow="false"
                            @onClickContent="choosePeople"
                            :editable="false"
                            :choose-content="nextPeople"
                        ></edit-text-view>

                        <div class="attachment">
                            <div class="label">
                                <span>案件证据</span>
                                <img
                                    class="add-btn"
                                    @click="addFujian"
                                    src="../../image/add@2x.png"
                                />
                                <!--<button class="add-btn" @click="addFujian">添加</button>-->
                            </div>
                            <div class="attachment-group">
                                <div
                                    v-for="(item,index) in image_url"
                                    :key="index"
                                    class="attachment-item"
                                >
                                    <!--<img src="./icon/附件.png">-->
                                    <div class="addItemTitle">{{workItem(item)}}</div>
                                    <a href="#" class="delete" @click="deletePic(index)"></a>
                                </div>
                            </div>
                        </div>
                        <div class="submitBtn" @click="submit">提交</div>
                    </div>
                    <div class="waitShenpi" v-show="!waitSubmitShow">
                        <div class="caseProfDiv">
                            <div class="titp">案件证据</div>
                            <div class="contentDiv">
                                <div
                                    class="lineContent"
                                    v-for="(item,index) in caseProf"
                                    :key="index"
                                    @click="showImg(index,2)"
                                >{{item}}</div>
                            </div>
                        </div>
                        <!--<text-area-view ref="fillShenPiYiJIan" title="审批意见" hint="请填写审批意见"  required="true" max-length="1000" :hide-split-line="false"></text-area-view>-->
                        <tk-textarea
                            placeholder="请填写审批意见"
                            maxlength="1000"
                            v-model="fillShenPiYiJIan"
                        />
                        <edit-text-view
                            class="lineClass"
                            title="下级审批/处理人"
                            required="true"
                            :hide-arrow="false"
                            @onClickContent="choosePeople"
                            :editable="false"
                            :choose-content="nextPeople"
                        ></edit-text-view>
                        <div class="bottomAgreeDiv">
                            <div class="leftAgreeDiv" @click="agreeSubmit(0)">同意</div>
                            <div class="rightDisAgreeDiv" @click="agreeSubmit(1)">不同意</div>
                        </div>
                    </div>
                </div>
            </div>
        </tk-scroll>
        <!-- <div class="page-content">
            
        </div>-->
    </div>
</template>

<script>
import TextView from "../../../components/text-view";
import TextAreaView from "../../../components/text-area-view";
import EditTextView from "../../../components/edit-text-view";
import MyButton from "../../../components/my-button";
import {
    getAppCaseInfo,
    getAppInspectionView
} from "../../../modules/getData.js";
import { uploadImage } from "../../../config/upload.js";
var col = require("../../../../webpack.config");

const pictureSourceType = [
    { text: "拍照", value: "1" },
    { text: "从相册选择", value: "2" }
];

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
            caseNo: [],
            acceptance: [],
            report: [],
            approval: [],
            opinion: [],
            investigation: [],
            punishDecsion: "",
            caseImport: "",
            diaochaPeo: "",
            surveryTime: "",
            nextPeople: "管理员",
            image_url: [],
            waitSubmitShow: "",
            caseProf: [
                // '身份证1.png','身份证2.png','身份证1.png','身份证2.png'
            ],
            caseProfPath: [],

            chosenId: "",
            chosenPeople: "",
            allType: "",
            caseId: "",
            annexNo: "",
            currentPhotoIndex: 0,

            shouliCaseProf: [],
            shouliCaseProfPath: [],
            caseDescribe: "",
            fillShenPiYiJIan: "",
            caseBaseTruthEdit: "",
            dcxzList:[]
        };
    },
    created() {
        console.log(" window.shenpiyijian1=" + window.shenpiyijiann);
    },
    mounted() {
        // this.$refs.punishDecsion.inputContent = '这是处罚决定。。。';
        // this.$refs.caseImport.inputContent = '这是案情摘要。。。';

        this.caseId = this.$route.query.id;
        this.allType = this.$route.query.type;

        this.allType == 1
            ? (this.waitSubmitShow = true)
            : (this.waitSubmitShow = false);

        // console.log(' window.shenpiyijian='+ window.shenpiyijiann)
        //
        this.nextPeople = window.namee;
        this.$refs.diaochaPeo.inputContent = window.surveyPerson;
        this.surveryTime = window.surveyTime;
        // this.$refs.caseBaseTruthEdit.inputContent = window.caseFact
        this.caseBaseTruthEdit = window.caseFact;

        // this.$refs.fillShenPiYiJIan.inputContent = window.shenpiyijiann;
        this.fillShenPiYiJIan = window.shenpiyijiann;

        this.getInformation();
        // this.$refs.chufajueding.inputContent = 'zzEND';
    },
    methods: {
        toast(txt, type, fn) {
            this.$createPotToast({
                time: 1500,
                mask: true,
                txt: txt || "正在加载中...",
                type: type,
                onTimeout: fn || null
            }).show();
        },
        showImg(index, tip) {
            var that = this;
            var path;
            if (tip == 1) {
                path = this.shouliCaseProfPath[index];
            } else {
                path = this.caseProfPath[index];
            }

            console.log("path==" + path);
            // this.$router.push({
            //     path:'/imgShow',
            //     query:{
            //         imgSrc:path
            //     }
            // })

            if (navigator.platform.toLowerCase() === "iphone") {
                this.$router.push({
                    path: "/imgShow",
                    query: {
                        imgSrc: path
                    }
                });
            } else {
                //  window.location.href = '/zhzf' + path;
                var href = col.proxy[2].target + path;
                var arr = path.split(".");
                var name = "综合执法." + arr[1];

                that.checkSDCard(href, name);
            }
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
        workItem(item) {
            var tempAry = item.split("/");
            var returnStr = tempAry[tempAry.length - 1];
            return returnStr;
        },
        async getInformation() {
            let res = await getAppCaseInfo(this.caseId);
            if (res.code == 0) {
                this.caseNo.push({
                    key: "案件编号",
                    value: res.data.caseNo
                });
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
                        value: res.data.curPersonName
                            ? res.data.curPersonName
                            : window.curPersonName
                    },
                    {
                        key: "案发时间",
                        value: this.formatTime(res.data.caseTime, "Y-M-D")
                    },
                    {
                        key: "案发地点",
                        value: res.data.location
                    }
                );
                this.$refs.caseDescribe.inputContent = res.data.caseDescribe;
                this.report.push(
                    {
                        key: "上报人",
                        value: res.data.createUserName
                    },
                    {
                        key: "上报时间",
                        value: res.data.createdDate
                            ? res.data.createdDate.substring(0, 10)
                            : ""
                    }
                );

                var abc = res.data.recordList;

                var def = res.data.annexSet;
                if (def != null && def.length > 0) {
                    for (var j = 0; j < def.length; j++) {
                        this.shouliCaseProf.push(def[j].annexName); //caseProfPath
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
                for (var i = 0; i < abc.length; i++) {
                    if (abc[i].formTaskId == "lasp") {
                        var obj = JSON.parse(abc[i].contentJson);
                        if (obj != null) {
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
                            this.$refs.punishDecsion.inputContent =
                                obj.punishDecide;
                            this.$refs.caseImport.inputContent =
                                obj.caseSummary;
                        }

                        break;
                    }
                }
                for (var i = 0; i < abc.length; i++) {
                    if (abc[i].formTaskId == "laspsh") {
                        var obj = JSON.parse(abc[i].contentJson);
                        this.opinion.push(
                            {
                                key: "审批意见",
                                value: obj.remark
                            },
                            {
                                key: "审批人",
                                value: abc[i].userNames
                            },
                            {
                                key: "审批时间",
                                value: abc[i].tacheEndDatetime
                            }
                        );

                        break;
                    }
                }

                if (this.allType == 2) {
                    for (var i = 0; i < abc.length; i++) {
                        if (abc[i].formTaskId == "dcqz") {
                            var obj = JSON.parse(abc[i].contentJson);
                            console.log("obj=" + JSON.stringify(obj));
                            this.diaochaPeo = obj.surveyPerson;
                            this.surveryTime = obj.surveyTime;
                            this.acceptance.push(
                                {
                                    key: "调查人员",
                                    value: this.diaochaPeo
                                },
                                {
                                    key: "调查时间",
                                    value: this.surveryTime
                                }
                            );
                            this.$refs.caseBaseTruth.inputContent =
                                obj.caseFact;
                            if (
                                abc[i].annexList != null &&
                                abc[i].annexList.length > 0
                            ) {
                                for (
                                    var j = 0;
                                    j < abc[i].annexList.length;
                                    j++
                                ) {
                                    this.caseProf.push(
                                        abc[i].annexList[j].annexName
                                    );
                                    this.caseProfPath.push(
                                        abc[i].annexList[j].annexPath
                                    );
                                }
                            }
                            break;
                        }
                    }
                }

                this.hideLoading();
            } else {
                this.hideLoading();
                this.toast(res.message);
            }
        },
        back() {
            this.$router.go(-1);
        },
        chooseTime() {
            if (!this.datePicker) {
                this.datePicker = this.$createPotDatePicker({
                    title: "请选择时间",
                    min: new Date(2008, 10, 1),
                    max: new Date(2030, 10, 1),
                    value: new Date(),
                    columnCount: 3,
                    cancelTxt: "返回",
                    onSelect: this.selectEndHandle
                });
            }
            this.datePicker.show();
        },
        selectEndHandle(date, selectedVal, selectedText) {
            this.surveryTime = selectedText
                .toString()
                .split(",")
                .join("-");
        },
        choosePeople() {
            // console.log('this.$refs.caseBaseTruth.inputContent='+this.$refs.caseBaseTruthEdit.inputContent)

            window.surveyPerson = this.$refs.diaochaPeo.inputContent;
            window.surveyTime = this.surveryTime;
            // window.caseFact = this.$refs.caseBaseTruthEdit.inputContent
            window.caseFact = this.caseBaseTruthEdit;

            // window.shenpiyijiann = this.$refs.fillShenPiYiJIan.inputContent;
            window.shenpiyijiann = this.fillShenPiYiJIan;
            //   console.log(' window.shenpiyijian1111='+ this.$refs.fillShenPiYiJIan.inputContent)

            this.$router.push({
                path: "/chooseApprover",
                query: {
                    id: 2
                }
            });
        },
        deletePic(index) {
            this.image_url.splice(index, 1);
        },
        addFujian() {
            if (!this.picker) {
                this.picker = this.$createPotPicker({
                    title: "添加照片",
                    data: [pictureSourceType],
                    onSelect: this.picturePickerSelectHandle,
                    onCancel: this.cancelHandle
                });
            }
            this.picker.show();
        },
        picturePickerSelectHandle(selectedVal, selectedIndex, selectedText) {
            switch (selectedIndex.toString()) {
                case "0":
                    this.addPictureFromCamera();
                    break;
                case "1":
                    this.addPictureFromGallery();
                    break;
            }
        },
        addPictureFromCamera() {
            console.log("addPictureFromCamera in");
            navigator.camera.getPicture(
                imageData => {
                    this.addPicSuccessCallback(imageData);
                },
                function errorCallback(message) {
                    console.log("camera错误回调：" + message);
                },
                {
                    destinationType: Camera.DestinationType.FILE_URI,
                    sourceType: Camera.PictureSourceType.CAMERA
                }
            );
        },
        addPictureFromGallery() {
            navigator.camera.getPicture(
                imageData => {
                    this.addPicSuccessCallback(imageData);
                },
                function errorCallback(message) {
                    console.log("gallery错误回调：" + message);
                },
                {
                    destinationType: Camera.DestinationType.FILE_URI,
                    sourceType: Camera.PictureSourceType.PHOTOLIBRARY
                }
            );
        },
        addPicSuccessCallback(imageData) {
            // 添加相片
            this.image_url.push(imageData);
        },
        submit() {
            this.annexNo = this.getTimeStamp();

            if (this.image_url.length <= 0) {
                this.annexNo = "";
            }

            if (this.image_url.length > 0) {
                this.photoUpload();
            } else {
                this.uploadInfomation();
            }
            // this.uploadInfomation();
        },
        async uploadInfomation() {
            if (
                window.idd == "" ||
                window.idd == null ||
                window.idd == undefined
            ) {
                this.toast("请选择下级审批人");
                return;
            }
            if (
                this.$refs.diaochaPeo.inputContent == "" ||
                this.$refs.diaochaPeo.inputContent == null ||
                this.$refs.diaochaPeo.inputContent == undefined
            ) {
                this.toast("请填写调查人员");
                return;
            }
            if (
                this.surveryTime == "" ||
                this.surveryTime == null ||
                this.surveryTime == undefined
            ) {
                this.toast("请选择调查时间");
                return;
            }
            if (
                this.caseBaseTruthEdit == "" ||
                this.caseBaseTruthEdit == null ||
                this.caseBaseTruthEdit == undefined
            ) {
                this.toast("请填写基本事实");
                return;
            }

            var obj = {
                surveyPerson: this.$refs.diaochaPeo.inputContent,
                surveyTime: this.surveryTime,
                caseFact: this.caseBaseTruthEdit,
                result: 0,
                userId: window.idd
            };
            var contentJson, result, caseInfoId, dutyUserId, annexNo;
            contentJson = JSON.stringify(obj);
            result = "0";
            caseInfoId = this.caseId;
            dutyUserId = window.idd;

            // this.annexNo = this.getTimeStamp();

            annexNo = this.annexNo;

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
        async photoUpload() {
            if (this.currentPhotoIndex < this.image_url.length) {
                // alert('要传照片了');
                // console.log('=====photo upload=====index:' + this.currentPhotoIndex);
                let res = await uploadImage(
                    this.image_url[this.currentPhotoIndex],
                    this.annexNo,
                    "1",
                    "1"
                );
                let response = {};
                if (res != undefined && res != "") {
                    response = JSON.parse(res);
                    // alert('response='+response);
                } else {
                    response = res;
                }
                if (response.code == "0") {
                    this.currentPhotoIndex++;
                    this.photoUpload();
                } else {
                    this.hideLoading();
                }
            } else {
                this.uploadInfomation();
            }
        },
        async agreeSubmit(value) {
            // var str = this.$refs.fillShenPiYiJIan.inputContent;
            var str = this.fillShenPiYiJIan;
            if (str == "" || str == null || str == undefined) {
                this.toast("请填写审批意见");
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
        getTimeStamp() {
            let date = new Date();
            let year = date.getFullYear().toString(); //获取当前年份
            let mon = (date.getMonth() + 1).toString(); //获取当前月份
            let da = date.getDate().toString(); //获取当前日.toString()
            let h = date.getHours().toString(); //获取小时
            let m = date.getMinutes().toString(); //获取分钟
            let s = date.getSeconds().toString(); //获取秒
            return year + mon + da + h + m + s;
        }
    }
};
</script>

<style lang="less">
@import "../../../style/less-variable";

.case-detail {
    width: 100vw;
    height: 100vh;
    background: #f4f4f4;
    .pass {
        position: relative;
        .passDiv {
            position: absolute;
            right: 20px;
            top: calc(50% - 18px);
            width: 66px;
            height: 36px;
            line-height: 36px;
            border-radius: 6px;
            color: black;
            border: 1px solid #dddddd;
            text-align: center;
        }
    }
    .shenpiDiv {
        width: 100%;
        height: 150px;
        background: white;

        border-top: 1px solid #dddddd;
        border-bottom: 1px solid #dddddd;
        .leftDiv {
            float: left;
            width: 80%;
            height: 120px;
            /*background: cyan;*/
            padding-left: 3%;
            .yiJian {
                width: 100%;
                height: 39.9px;
                line-height: 39.9px;
                font-size: 18px;
            }
        }
        .rightDiv {
            float: right;
            width: 20%;
            height: 120px;
            /*background: orange;*/
            text-align: center;
            vertical-align: middle;
            .passDiv {
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
            }
        }
    }

    .step-title {
        font-size: 21px;
        padding: @padding-height @padding-width;
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
        .attachment-group {
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
                a.delete:active {
                    background: url("../../image/shanchu.png") no-repeat center;
                    background-size: 18px 18px;
                }
            }
        }
    }
    .caseProfDiv {
        width: 100%;
        background: white;
        padding-left: 3%;
        border-top: 1px solid #dddddd;
        border-bottom: 1px solid #dddddd;
        .titp {
            width: 100%;
            height: 30px;
            line-height: 30px;
            color: #999999;
        }
        .contentDiv {
            width: 100%;
            overflow: scroll;
            /*background: cyan;*/
            .lineContent {
                width: 100%;
                height: 45px;
                line-height: 45px;
                padding-left: 40px;
            }
        }
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
    .submitBtn {
        margin: @margin-button-height @margin-button-width;
        height: @bottom-height;
        line-height: @bottom-height;
        text-align: center;
        background: @blue;
        border-radius: 9px;
        color: white;
    }
    .step-content {
        background-color: white;
    }
}
</style>
