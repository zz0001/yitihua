<template>
    <div class="inspect-detail">
        <tk-header v-on="$listeners" @left-click="back">
            {{title}}
        </tk-header>
        <tk-scroll class="detail-content">
            <div class="title">{{item.dmmc}}</div>
            <div class="locate" @click="chooseLocation">
                <span><img class="location-img" src="../../../static/img/icon_dz.png" alt=""></span>
                <span>{{address}}</span>
            </div>
            <!--<tk-form :list="list"/>-->
            <tk-textarea placeholder="请输入问题描述" maxlength="1000" v-model="describe"/>
            <div class="sub-title">上传问题图片</div>
            <tk-upload-photo v-model="photoList" maxlength="10"/>
            <tk-switch name="是否自行处理" :value="autoHandle" v-model="autoHandle"/>
            <div v-if="isdispose">
                <div class="imgdispose">
            <div class="sub-title">上传处理图片</div>
            <tk-upload-photo v-model="photoList2" maxlength="10"/>
                </div>
            <tk-textarea placeholder="请输入处理描述" maxlength="1000" v-model="disposeResult"/>
            </div>
            <tk-button class="detail-btn" @click="clickBtn">{{buttonName}}</tk-button>
        </tk-scroll>
    </div>
</template>

<script>
    import axios from "axios";
    export default {
        data() {
            return {
                rootId: '',
                title: '',
                item: {},
                longitude: '',
                latitude: '',
                address: '',
                moreAddress: '',
                describe: '',
                list: [{
                    name: '',
                    value: '',
                    type: 'input',
                    placeholder: '地址补充说明（非必填）',
                    maxlength: 15,
                }],
                photoList: [],
                photoList2:[],
                disposeResult:"",
                autoHandle: true,
                isdispose:true,
                newLocation: {},
            }
        },
        watch:{
            autoHandle(newv){
                if(newv==true){
                    this.isdispose=true;
                }else{
                    this.isdispose=false;
                }
            }
        },
        created() {

        },
        mounted() {
            // this.$nextTick(() => {
            //
            // });
            // ;
            this.rootId = this.$route.query.id;
            this.title = this.$route.query.title;
            this.item = this.$route.query.item;
            this._getLocation();
            // 取出暂存数据
            if (this.$store.state.patrolReportStorage[this.item.id]) {
                console.log('有暂存数据：');
                console.log(this.$store.state.patrolReportStorage[this.item.id]);
                console.log(this.$store.state.patrolReportStorage);
                this.$set(this.list[0], 'model', this.$store.state.patrolReportStorage[this.item.id].moreAddress);
                // this.list[0].model = this.$store.state.patrolReportStorage[this.item.id].moreAddress;
                this.newLocation = this.$store.state.patrolReportStorage[this.item.id].newLocation;
                this.describe = this.$store.state.patrolReportStorage[this.item.id].describe;
                this.photoList = this.$store.state.patrolReportStorage[this.item.id].photoList;
                this.autoHandle = this.$store.state.patrolReportStorage[this.item.id].autoHandle;
                this.photoList2 = this.$store.state.patrolReportStorage[this.item.id].photoList2;
                this.disposeResult = this.$store.state.patrolReportStorage[this.item.id].disposeResult;
            }

            if (this.newLocation !== undefined && this.newLocation !== null) {
                console.log(this.newLocation);
                this.address = this.newLocation.address;
            }

            this._getCurrentLocation();
        },
        computed: {
            buttonName: function () {
                return this.autoHandle ? '提交至我的待办' : '上报';
            }
        },
        methods: {
            _getLocation() {
                if (navigator.geolocation) {
                    navigator.geolocation.getCurrentPosition(this._showPosition, error => {
                        console.log('进入定位错误回调');
                        console.log(error.message);
                        switch (error.code) {
                            case error.PERMISSION_DENIED:
                                console.log("用户拒绝对获取地理位置的请求。");
                                break;
                            case error.POSITION_UNAVAILABLE:
                                console.log("位置信息是不可用的。");
                                break;
                            case error.TIMEOUT:
                                console.log("请求用户地理位置超时。");
                                break;
                            case error.UNKNOWN_ERROR:
                                console.log("未知错误。");
                                break;
                        }
                        setTimeout(this._getLocation, 500);
                    }, {
                        enableHighAccuracy: false, // 是否获取高精度结果
                        timeout: 10000, //超时,毫秒
                        maximumAge: 0 //可以接受多少毫秒的缓存位置
                        // 详细说明 https://developer.mozilla.org/en-US/docs/Web/API/PositionOptions
                    });
                } else {
                    alert("是否开启了GPS功能");
                }
            },
            _showPosition(e){
                if (isNull(e.coords.longitude)) {
                    toast("坐标为空,请重新定位");
                } else {
                    console.log('定位成功，进入_showPosition');
                    window.longitude = e.coords.longitude;
                    window.latitude = e.coords.latitude;
                    window.choiceLongitude = e.coords.longitude;
                    window.choiceLatitude = e.coords.latitude;

                }
            },
            _getCurrentLocation() {
                let geolocation = new BMap.Geolocation();
                // 开启SDK辅助定位
                geolocation.enableSDKLocation();
                geolocation.getCurrentPosition((r) => {
                    console.log(JSON.stringify(r));
                    if (geolocation.getStatus() == BMAP_STATUS_SUCCESS) {
                        console.log('地址：' + r.address.province + r.address.city + r.address.district + r.address.street + r.address.street_number);

                        this.address = r.address.province + r.address.city + r.address.district + r.address.street + r.address.street_number;
                        console.log(this.address);
                    } else {
                        console.log('定位failed：' + geolocation.getStatus());
                    }
                });
            },
            back() {
                console.log('点击返回');
                app.$createPotDialog({
                    $props: {
                        type: "confirm",
                        confirmBtn: '暂存',
                        cancelBtn: '否',
                        content: "您的问题还未上报，是否进行暂存？",
                        maskClosable: true
                    },
                    $events: {
                        confirm: () => {
                            if (this.$store.state.patrolReportStorage[this.item.id] === undefined) {
                                this.$store.state.patrolReportStorage[this.item.id] = {};
                            }
                            this.$store.state.patrolReportStorage[this.item.id].hasStorage = true;
                            this.$store.state.patrolReportStorage[this.item.id].moreAddress = this.list[0].model;
                            this.$store.state.patrolReportStorage[this.item.id].newLocation = this.newLocation;
                            this.$store.state.patrolReportStorage[this.item.id].describe = this.describe;
                            this.$store.state.patrolReportStorage[this.item.id].photoList = this.photoList;
                            this.$store.state.patrolReportStorage[this.item.id].autoHandle = this.autoHandle;

                            this.$store.state.patrolReportStorage[this.item.id].photoList2 = this.photoList2;
                            this.$store.state.patrolReportStorage[this.item.id].disposeResult = this.disposeResult;
                            console.log(this.$store.state.patrolReportStorage[this.item.id]);
                            this.$router.back();
                        },
                        cancel: () => {
                            if (this.$store.state.patrolReportStorage[this.item.id]) {
                                this.$store.state.patrolReportStorage[this.item.id].hasStorage = false;
                            }
                            this.$router.back();
                        }
                    }
                }).show();
            },
            chooseLocation() {
                this.$createChooseLocation({
                    $props: {
                        value: ''
                    },
                    $events: {
                        success: (val) => {
                            console.log('success');
                            this.newLocation = val;
                            console.log(this.newLocation);
                            this.address = this.newLocation.address;
                        }
                    }
                }).show()
            },
            clickBtn() {
                console.log(this.autoHandle);
                console.log(this.list[0].model);

                window.picture_array=this.photoList;
                window.picture_array2=this.photoList2;
                if(!this.photoList){
                    window.picture_array="";
                }

                if (!isNull(window.picture_array) || window.picture_array.length > 0) {
                    window.picture_upImg = "";
                    if(this.isdispose==true){
                        if(window.picture_array2.length==0){
                            toast("自行处置图片不能为空");
                            return;
                        }
                    }
                    this.publicOpinion_upPicture(window.picture_array[0],1);

                }else{
                    this.submit();
                }

                if (this.autoHandle) {
                    // 提交至我的待办

                } else {
                    // 待办
                }
            },
            submit() {

                var that=this;
                console.log(that.isdispose)
                if (isNull(window.longitude)){
                    toast("定位不成功");
                }
                else if (isNull(this.describe)){
                    toast("请输入问题描述");
                }
                else if (isNull(window.picture_array)){
                    toast("上报图片不能为空");
                }else if(that.isdispose==true){
                    if(this.photoList2.length==0){
                        toast("自行处置图片不能为空");
                    }else{
                        var lon=window.longitude;
                        var lat=window.latitude;


                        var dsobj={para: 'longitude='+lon+'&latitude='+lat+'&loginId=&origin=4&eventComponent='+this.rootId+'&bigClass=' + this.item.id+'&location=' + this.address+'&problem=' + this.describe+'&reportPics=' + window.picture_upImg+'&questionStatus=' + '1'+'&score=' + this.item.score+'&dispose=' + (this.autoHandle ? '1' : '0')+'&backPath='+window.picture_upImg2+'&disposeResult='+this.disposeResult};
                        let url='/wgh/app/' + 'MobileCaseReport.action';
                        console.log(dsobj)
                        that.$http.post(url,dsobj).then(data => {
                            window.leadercommitFlag=0;


                            if (data.code == 0) {
                                hideLoading();
                                toast(data.message);

                                ;
                                window.originType="3";
                                that.$router.push({path:'/welcome',query:{}});
                            } else {
                                hideLoading();
                                toast(data.message);
                            }
                        })
                    }
                }else{

                    var lon=window.longitude;
                    var lat=window.latitude;
                    let para = {
                        para: 'loginId=' + window.localStorage.loginId
                        + '&origin=' + '4'
                        + '&eventComponent=' + this.rootId
                        + '&bigClass=' + this.item.id
                        + '&location=' + this.address
                        + '&problem=' + this.describe
                        + '&longitude=' + lon
                        + '&latitude=' + lat
                        + '&reportPics=' + window.picture_upImg
                        + '&questionStatus=' + '1'
                        + '&score=' + this.item.score
                        + '&dispose=' + this.autoHandle ? '1' : '0'
                        + '&backPath='+window.picture_upImg2
                        + '&disposeResult='+this.disposeResult
                    };

                    var dsobj={para: 'longitude='+lon+'&latitude='+lat+'&loginId=&origin=4&eventComponent='+this.rootId+'&bigClass=' + this.item.id+'&location=' + this.address+'&problem=' + this.describe+'&reportPics=' + window.picture_upImg+'&questionStatus=' + '1'+'&score=' + this.item.score+'&dispose=' + (this.autoHandle ? '1' : '0')+'&backPath='+window.picture_upImg2+'&disposeResult='+this.disposeResult};
                   let url='/wgh/app/' + 'MobileCaseReport.action';
                  //  let url='https://192.168.1.198:6080/wgh/app/' + 'MobileCaseReport.action';
                    console.log(dsobj)
                    that.$http.post(url,dsobj).then(data => {
                        window.leadercommitFlag=0;


                        if (data.code == 0) {
                            hideLoading();
                            toast(data.message);

                            ;
                            window.originType="3";
                            that.$router.push({path:'/welcome',query:{}});
                        } else {
                            hideLoading();
                            toast(data.message);
                        }
                    })






                }





            },
            publicOpinion_upPicture(img, type) {
                var that=this;
                console.log("图片张数：" + window.picture_array.length + "；当前第" + type + "张");
                // var obj = "";
                // obj += toJson("base64Str", img);
                // doPost("app_publicOpinion_upPic.action", obj, function (data) {
                //     if (data.code == 0) {
                //         if (type < parseInt(window.picture_array.length)) {
                //             console.log("当前上传第:" + type + "张,下次上传第" + type + "张");
                //             var typename = parseInt(type) + 1;
                //             that.publicOpinion_upPicture(window.picture_array[type], typename);
                //         } else {
                //             console.log("图片上传结束");
                //         }
                //         if (isNull(window.picture_upImg)) {
                //             window.picture_upImg = data.datas.path;
                //         } else {
                //             window.picture_upImg = window.picture_upImg + ";" + data.datas.path;
                //         }
                //         console.log("当前type" + type + "；总共张数：" + window.picture_array.length);
                //         if (parseInt(type) == window.picture_array.length) {
                //             if(that.isdispose==true){
                //                 if (isNull(window.picture_array2)) {
                //                     toast("处理图片不能为空");
                //                 } else {
                //                     that.xxcj_upLoadPic2(window.picture_array2[0], 1);
                //                 }
                //             }else{
                //                 that.submit();
                //             }
                //             that.submit();
                //             console.log("type和图片长度相等" + type);
                //         } else {
                //             console.log("type和图片长度不相等");
                //         }
                //     } else {
                //         toast(data.message);
                //     }
                // }, "", "");
                let url='/wgh/app/app_publicOpinion_upPic.action';
                var dsobj={para: 'base64Str='+img};
                axios.post(url,dsobj).then(data => {
                        if (data.code == 0) {
                            if (type < parseInt(window.picture_array.length)) {
                                console.log("当前上传第:" + type + "张,下次上传第" + type + "张");
                                var typename = parseInt(type) + 1;
                                that.publicOpinion_upPicture(window.picture_array[type], typename);
                            } else {
                                console.log("图片上传结束");
                            }
                            if (isNull(window.picture_upImg)) {
                                window.picture_upImg = data.datas.path;
                            } else {
                                window.picture_upImg = window.picture_upImg + ";" + data.datas.path;
                            }
                            console.log("当前type" + type + "；总共张数：" + window.picture_array.length);
                            if (parseInt(type) == window.picture_array.length) {
                                if(that.isdispose==true){
                                    if (isNull(window.picture_array2)) {
                                        toast("自行处置图片不能为空");
                                    } else {
                                        that.xxcj_upLoadPic2(window.picture_array2[0], 1);
                                    }
                                }else{
                                    that.submit();
                                }
                                //that.submit();
                                console.log("type和图片长度相等" + type);
                            } else {
                                console.log("type和图片长度不相等");
                            }
                        } else {
                            toast(data.message);
                        }
                })

            },
            xxcj_upLoadPic2(img, type) {
                var that=this;
                // var obj = "";
                // obj += toJson("base64Str", img);
                // doPost("appWorkOrder_upLoadPic.action", obj, function (data) {
                //     if (data.code == 0) {
                //         console.log("1111111111111111当前上传第:" + type + "张,下次上传第" + type + "张");
                //         if (type < parseInt(window.picture_array2.length)) {
                //             console.log("当前上传第:" + type + "张,下次上传第" + type + "张");
                //             var typename = parseInt(type) + 1;
                //             xxcj_upLoadPic2(window.picture_array2[type], typename);
                //         } else {
                //             console.log("图片上传结束");
                //         }
                //         if (isNull(window.picture_upImg2)) {
                //             window.picture_upImg2 = data.data;
                //         } else {
                //             window.picture_upImg2 = window.picture_upImg2 + ";" + data.data;
                //         }
                //         // alert("图片数据：" + window.picture_upImg2);
                //         //toast(data.message);
                //
                //         if (parseInt(type) == window.picture_array2.length) {
                //             that.submit();
                //             if (isNull(source)) {
                //                 //问题上报
                //
                //             } else if ("caseTaskEdit" == source) {
                //                 //工单处理
                //                 //  appWorkOrder_workOrderProcess($("#case_task_edit_problem").val());
                //             }
                //         }
                //     } else {
                //         toast(data.message);
                //     }
                // }, "", "");
                let url='/wgh/app/appWorkOrder_upLoadPic.action';
                var dsobj={para: 'base64Str='+img};
                axios.post(url,dsobj).then(data => {
                    if (data.code == 0) {
                        console.log("1111111111111111当前上传第:" + type + "张,下次上传第" + type + "张");
                        if (type < parseInt(window.picture_array2.length)) {
                            console.log("当前上传第:" + type + "张,下次上传第" + type + "张");
                            var typename = parseInt(type) + 1;
                            xxcj_upLoadPic2(window.picture_array2[type], typename);
                        } else {
                            console.log("图片上传结束");
                        }
                        if (isNull(window.picture_upImg2)) {
                            window.picture_upImg2 = data.data;
                        } else {
                            window.picture_upImg2 = window.picture_upImg2 + ";" + data.data;
                        }
                        // alert("图片数据：" + window.picture_upImg2);
                        //toast(data.message);

                        if (parseInt(type) == window.picture_array2.length) {
                            that.submit();
                            if (isNull(source)) {
                                //问题上报

                            } else if ("caseTaskEdit" == source) {
                                //工单处理
                                //  appWorkOrder_workOrderProcess($("#case_task_edit_problem").val());
                            }
                        }
                    } else {
                        toast(data.message);
                    }
                })
            }

        }
    }
</script>

<style lang="less">
    .inspect-detail {
        width: 100vw;
        height: 100vh;
        background-color: white;

        .list {
            input {
                float: left;
                text-align: left;
                width: calc(100% - 58px);
            }
        }

        .detail-content {
            overflow-y: auto;
            background-color: white;

            .title {
                width: 100%;
                height: 64px;
                line-height: 64px;
                padding-left: 24px;
                font-size: 24px;
            }

            .locate {
                width: 100%;
                height: 54px;
                line-height: 54px;
                border-top: 1px solid #cccccc;
                border-bottom: 1px solid #cccccc;

                span {
                    display: inline-block;
                }

                .location-img {
                    height: 20px;
                    width: auto;
                    margin-left: 24px;
                }
            }

            .sub-title {
                width: 100%;
                height: 48px;
                line-height: 48px;
                padding-left: 24px;
                font-size: 18px;
                border-top: 1px solid #cccccc;
            }

            .detail-btn {
                margin-top: 80px;
            }
            .imgdispose{
                border-bottom:1px solid #ddd;
            }
        }

    }
</style>
