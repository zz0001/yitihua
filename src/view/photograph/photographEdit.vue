<template>
    <div class="sspEdit">
        <tk-header>
            <div>随手拍</div>
            <div slot="right" @click="showAlreadyList">已上报</div>
        </tk-header>
        <tk-container>
            <div class="photograph-title">上传图片</div>
            <tk-upload-photo v-model="imageList"></tk-upload-photo>
            <div class="locate">
                <span><img class="location-img" src="../../../static/img/icon_dz.png" alt=""></span>
                <span>{{address}}</span>
            </div>

            <tk-textarea placeholder="请输入问题描述" v-model="textAreaVal" maxlength="1000"></tk-textarea>
            <tk-button class="cl_btn" @click="handle">处理</tk-button>
        </tk-container>
    </div>
</template>

<script type="text/ecmascript-6">
    import axios from "axios";
    export default {
        name: "photographEdit",
        data() {
            return {
                imageList: [],
                detailList: [],
                address: '',
                textAreaVal:""

            }
        },
        created() {

        },
        mounted() {
            this._getCurrentLocation();
            this._getLocation();
            window.picture_upImg="";
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
                    } else {
                        console.log('定位failed：' + geolocation.getStatus());
                    }
                });
            },
            handle(){
                var that=this;


                console.log(this.textAreaVal)
                window.picture_array=this.imageList;
                if(!this.imageList){
                    window.picture_array="";
                }
                if(that.address==""){
                    toast("位置不能为空");
                }else if(that.textAreaVal==""){
                    toast("问题描述不能为空");
                }else{
                    this.$createPotDialog({
                        $props:{
                            type:'confirm',
                            content:'确认保存本次提交吗？'
                        },
                        $events:{
                            confirm(A){
                                window.leadercommitFlag=1;
                                if (!isNull(window.picture_array) || window.picture_array.length > 0) {
                                    window.picture_upImg = "";



                                    that.publicOpinion_upPicture(window.picture_array[0],1);

                                }else{
                                    that.appWorkOrder_leaderOrderReport();
                                }
                            }
                        }
                    }).show()
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
                //             that.appWorkOrder_leaderOrderReport();
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
                        //alert("当前type" + type + "；总共张数：" + data.datas.path);

                        if (parseInt(type) == window.picture_array.length) {
                            that.appWorkOrder_leaderOrderReport();
                            console.log("type和图片长度相等" + type);
                        } else {
                            console.log("type和图片长度不相等");
                        }
                    } else {
                        toast(data.message);
                    }
                })
            },
            appWorkOrder_leaderOrderReport(){
                var that=this;
                // var obj = "";
                // obj += toJson("origin", "3") + "&";//工单来源 2：直派，3：随手拍
                // obj += toJson("loginId", window.localStorage.loginId) + "&";//工单来源 4:巡查人员上报
                // obj += toJson("problem", this.textAreaVal) + "&";//问题描述
                // obj += toJson("reportPics", window.picture_upImg) + "&";//图片
                // obj += toJson("longitude", window.choiceLongitude) + "&";//经度
                // obj += toJson("latitude", window.choiceLatitude) + "&";//纬度
                // obj += toJson("location",this.address);//位置描述
                // doPost("dsb.action", obj, function (data) {
                //     window.leadercommitFlag=0;
                //     alert("ssp"+data.message)
                //
                //     if (data.code == 0) {
                //         hideLoading();
                //         toast(data.message);
                //
                //         ;
                //         window.originType="3";
                //         that.$router.push({path:'/welcome',query:{}});
                //     } else {
                //         hideLoading();
                //         toast(data.message);
                //     }
                // }, "", "");

                let url='/wgh/app/dsb.action';
                var dsobj={para: 'origin=3&loginId=&problem='+this.textAreaVal+'&reportPics='+window.picture_upImg+'&longitude='+this.choiceLongitude+'&latitude='+this.choiceLatitude+'&location='+this.address};
                axios.post(url,dsobj).then(data => {
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
            },
            showAlreadyList(){
                this.$router.push({path:'/photoAlreadyCase',query:{}});
            }
        }
    }
</script>

<style lang="less" >
    .sspEdit{


    .photograph-title{
        padding: 10px;
        font-size: 16px;
    }

    .locate {
        width: 100%;
        height: 54px;
        line-height: 54px;
        border-top: 1px solid #cccccc;
        border-bottom: 1px solid #cccccc;
        background-color: #ffffff;

        span {
            display: inline-block;
        }

        .location-img {
            height: 20px;
            width: auto;
            margin-left: 24px;
        }

    }
        .cl_btn{
            position: absolute;
            bottom: 0;
        }
    }
</style>
