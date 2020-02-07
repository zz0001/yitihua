<template>
    <div class="handle-case-edit">
        <tk-header>督察督办处理</tk-header>
        <tk-container>
            <div class="handle-case-edit-content">
                <tk-textarea placeholder="请输入督办任务内容" v-model="content"></tk-textarea>
                <tk-title>上传图片</tk-title>
                <tk-upload-photo v-model="tempImgAry"></tk-upload-photo>
            </div>
            <tk-button @click="_submit">处理</tk-button>
        </tk-container>
    </div>
</template>

<script type="text/ecmascript-6">
    import {appMissionQuery1} from '../../modules/getData.js';
    import {uploadImage} from '../../config/upload.js';
    export default {
        name: "handleCaseEdit",
        data() {
            return {
                tempImgAry: [],
                content: '',
                annexNo:'',
                currentPhotoIndex:0,
                currentDate:''
            }
        },
        created() {

        },
        mounted() {
            this.id=this.$route.query.id;
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
            _submit() {

                this.annexNo = this.getTimeStamp();
                if (this.tempImgAry.length <= 0) {
                    this.annexNo = '';
                }
                if (this.tempImgAry.length > 0) {
                    this.photoUpload();
                } else {
                    this.appMissionQuery1();
                }

            },
            getCurrentDate(){
                var myDate = new Date();
                // myDate.getYear();
                myDate.getFullYear();
                myDate.getMonth();
                myDate.getDate();
                this.currentDate = myDate.getFullYear() + '-'+ myDate.getMonth() + '-'
                    +myDate.getDate();

                // this.startTime = myDate.getFullYear() + '-'+ myDate.getMonth() + '-'
                //     +myDate.getDate();
                // this.endTime = myDate.getFullYear() + '-'+ myDate.getMonth() + '-'
                //     +myDate.getDate();


            },
            async appMissionQuery1(){
                debugger;
                var  missionCondition,upPicture,Id;

                missionCondition = this.content;

                if(missionCondition == '' || missionCondition == undefined){
                    this.toast('请填写完成情况')
                    return;
                }

                upPicture = this.annexNo;
                Id = this.id;
                console.log(this.currentDate);


                let res = await appMissionQuery1(missionCondition,upPicture,Id,this.currentDate);
                if (res.code == 0) {
                    this.toast(res.message);

                    setTimeout(()=>{
                        this.$router.go(-2)
                    },1000)


                } else {

                }
            },
            async photoUpload(){
                if (this.currentPhotoIndex < this.tempImgAry.length) {
                    // console.log('=====photo upload=====index:' + this.currentPhotoIndex);
                    let res = await uploadImage(this.tempImgAry[this.currentPhotoIndex],this.annexNo,'10','1');
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
                    this.appMissionQuery1();
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
            },
        }
    }
</script>

<style lang="less" scoped>
    .handle-case-edit {
        width: 100vw;
        height: 100vh;

        .handle-case-edit-content {
            height: calc(100% - 50px);
        }
    }
</style>
