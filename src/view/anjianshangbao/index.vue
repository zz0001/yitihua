<template>
<div class="anjianshangbao">
    <tk-header>
        案件上报
        <span @click="$router.push('/yishangbao')" slot="right">
            已上报
        </span>
</tk-header>
<tk-scroll>
    <tk-form :list="list11"></tk-form>
    <tk-form :list="list"></tk-form>
    <div v-if="anjianfenlei=='简易程序案件'||anjianfenlei=='一般程序案件'" class="list">
        <div class="tk-form-name">
            案发地点
        </div>
        <div class="value">
            <svg style="display:inline;height:20px;width:20px;" t="1577066894879" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="https://www.w3.org/2000/svg" p-id="1184" width="200" height="200">
                <path d="M512 959.469288c-10.69969 0-16.60519-1.283226-20.36584-5.689582-2.261507-2.64934-229.644237-272.535093-290.237267-403.232784-21.890566-46.818305-33.44267-97.655134-33.44267-147.265018 0-187.090049 154.331971-339.226005 344.045777-339.226005s344.045777 153.187915 344.045777 341.429183c0 56.871265-10.660804 99.841939-36.789904 148.300604C747.006362 687.675068 534.795169 950.618713 532.675902 953.24247c-2.532683 3.166109-7.055696 6.227842-20.145829 6.227842L512 959.470311zM512 272.403087c-72.959685 0-132.325771 59.365062-132.325771 132.325771S439.040315 537.054629 512 537.054629s132.325771-59.365062 132.325771-132.325771S584.959685 272.403087 512 272.403087z" p-id="1185"></path>
            </svg>
            <span>
                当前定位：{{address}}
            </span>
            <svg @click="refresh" style="display:inline;height:20px;width:20px;float:right;" t="1577067015155" class="icon" viewBox="0 0 1027 1024" version="1.1" xmlns="https://www.w3.org/2000/svg" p-id="1909" width="200" height="200">
                <path d="M1020.444444 460.8 834.844444 230.4c-19.2-25.6-57.6-25.6-76.8 0L572.444444 460.8c-12.8 19.2 0 44.8 19.2 44.8l70.4 0c0 134.4 0 307.2-243.2 448-6.4 6.4 0 12.8 6.4 12.8 454.4-70.4 492.8-377.6 492.8-460.8l76.8 0C1020.444444 505.6 1033.244444 480 1020.444444 460.8L1020.444444 460.8 1020.444444 460.8zM438.044444 518.4 361.244444 518.4c0-134.4 0-307.2 243.2-448 6.4-6.4 0-12.8-6.4-12.8C143.644444 128 105.244444 435.2 105.244444 518.4L28.444444 518.4C2.844444 518.4-9.955556 544 9.244444 563.2L194.844444 793.6c19.2 25.6 57.6 25.6 76.8 0l185.6-230.4C470.044444 544 457.244444 518.4 438.044444 518.4L438.044444 518.4 438.044444 518.4z" p-id="1910" fill="#1296db"></path>
            </svg>
        </div>
    </div>
    <tk-form v-if="anjianfenlei=='简易程序案件'" :list="list2"></tk-form>
    <tk-textarea v-if="anjianfenlei=='违建上报'" maxlength="1000" v-model="chufajueding" placeholder="请填写处罚决定"></tk-textarea>
    <tk-textarea v-if="anjianfenlei=='违停上报'" maxlength="1000" v-model="miaoshu" placeholder="请填写描述"></tk-textarea>
    <tk-textarea v-if="anjianfenlei=='一般程序案件'" maxlength="1000" v-model="txt" placeholder="请描述案件"></tk-textarea>
    <tk-textarea v-if="anjianfenlei=='简易程序案件'" maxlength="1000" v-model="txt2" placeholder="请填写处罚决定"></tk-textarea>
    <tk-textarea v-if="anjianfenlei=='简易程序案件'" maxlength="1000" v-model="txt3" placeholder="请填写案件摘要"></tk-textarea>
    <tk-upload-photo v-model="image_url"></tk-upload-photo>
    <tk-button @click="submit">提交</tk-button>
</tk-scroll>
</div>
</template>

<script>
import Vue from 'vue'
import fetch from '../../config/fetch.js';
import {doAppSaveSimpleCase,doAppSaveCase} from '../../modules/getData.js';
export default {
    created() {
        this.$http.post('/zhzf/app/common/getAppAreaTree').then(d => {
            this.list[0].select = d.datas[0].children.map(item => item.name);
            this.list[0].ids=d.datas[0].children.map(item=>item.id)
        })
        this.$http.post('/zhzf/app/common/getDicValue?dictCode=%E6%A1%88%E4%BB%B6%E6%9D%A5%E6%BA%90').then(d => {
            this.list[1].select = d.datas.map(item => item.text)
            this.list[1].ids=d.datas.map(item => item.code)
        })
        this.$http.post("/zhzf/app/common/getDicValue?dictCode=%E6%A1%88%E4%BB%B6%E7%B1%BB%E5%88%AB").then(d => {
            this.list[2].select = d.datas.map(item => item.text)
            this.list[2].ids=d.datas.map(item => item.code)
        })
    },
    computed: {
        anjianfenlei() {//案件分类
            return this.list11[0].model
        },
        caseSourceId(){//案件来源
            return this.list[1].id
        },
        caseArea(){
            return this.list[0].id
        },
        caseTypeId(){
            return this.list[2].id
        },
        caseTime(){
            return this.list[4].model
        },
        fillCase(){
            return this.list2[0].model;
        }
    },
    watch: {
        anjianfenlei(newV) {
            if (newV == '违建上报') {
                this.list=this.list22;
            }else if(newV=='一般程序案件'||newV=='简易程序案件'){
                this.list=this.listodd;
            }else if(newV=='违停上报'){
                this.list=this.list33;
            }
        }
    },
    data() {
        return {
            address: '正在获取定位信息...',
            image_url: [],
            txt: '',
            txt2: '',
            txt3: '',
            chufajueding:'',
            chosenId2:'',
            list33:[{//违停上报
                type:'input',
                name:'编号',
                model:''
            },{
                type:'selectData',
                name:'案发时间',
                model:'',
                select: [''],
            },{
                type:'input',
                name:'车牌号',
                model:''
            },{
                type:'input',
                name:'车型',
                model:''
            },{
                type:'input',
                name:'车色',
                model:''
            },{
                type:'input',
                name:'位置',
                model:''
            }],
            miaoshu:'',
            list22:[{//违建上报
                type: 'poper',
                component:()=>import('./dangshiren.vue'),
                $events:{
                    confirm:({
                        id,name
                    })=>{
                        this.list22[0].model=name;
                         this.chosenId2=id;
                    }
                },
                name: '当事人',
                model:''
            },{
                type:'input',
                name:'联系电话',
                 model:''
            },{
                type:'input',
                name:'联系地址',
                 model:''
            },{
                type:'selectData',
                name:'案发时间',
                model:''
            },{
                type:'input',
                name:'建筑面积',
                 model:''
            },{
                type:'input',
                name:'处罚决定书文号',
                model:''
            },{
                type:'selectData',
                name:'处罚时间',
                model:''
            }],
            list11:[{//头部单独
                 type: 'select',
                select: ['一般程序案件', '简易程序案件','违建上报','违停上报'],
                name: '案件分类',
                model: '一般程序案件'
            }],
            list: [{
                type: 'select',
                name: '案发区域',
                ids:[],
                select: [],
                id:'',
                model: ''
            }, {
                type: 'select',
                name: '案件来源',
                select: [''],
                ids:[],id:'',
                model: ''
            }, {
                type: 'select',
                select: [''],
                name: '案件类别',
                ids:[],id:'',
                model: ''
            }, {
                type: 'poper',
                component:()=>import('./dangshiren.vue'),
                $events:{
                    confirm:({
                        id,name
                    })=>{
                        this.list[3].model=name;
                         this.chosenId=id;
                    }
                },
                name: '当事人',
                model:''
            }, {
                type: 'selectData',
                select: [''],
                model:'',
                name: '案发时间'
            }],
            list2: [{
                type: 'input',
                model: '',
                name: '案由'
            }, {
                type: 'input',
                model: '',
                name: '处罚依据'
            }, {
                type: 'input',
                model:'',
                name: '处罚标准'
            },{
                type: 'poper',
                component:()=>import('./dangshiren.vue'),
                $events:{
                    confirm:({
                        id,name
                    })=>{
                        this.list2[3].model=name;
                        window.idd=id;
                    }
                },
                name: '案件承办人',
                model:''
            }]
        }
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
        async photoUpload() {
            if (this.currentPhotoIndex < this.image_url.length) {
                // console.log('=====photo upload=====index:' + this.currentPhotoIndex);
                let res = await uploadImage(this.image_url[this.currentPhotoIndex], this.annexNo, '1','1');
                let response = {};
                if (res != undefined && res != '') {
                    response = JSON.parse(res);
                } else {
                    response = res;
                }
                if (response.code == '0') {
                    this.currentPhotoIndex++;
                    this.photoUpload();
                } else {
                    // this.hideLoading();
                }
            } else {
                this.uploadInfomation();
            }
        },
        async uploadInfomation() {
            //caseSourceId  caseTypeId chosenId  caseTime
            if (this.caseSourceId == '' || this.caseSourceId == null || this.caseSourceId == undefined) {
                this.toast('请选择案件来源')
                return;
            }
            if (this.caseArea == '' || this.caseArea == null || this.caseArea == undefined) {
                this.toast('请选择案发区域')
                return;
            }
            if (this.caseTypeId == '' || this.caseTypeId == null || this.caseTypeId == undefined) {
                this.toast('请选择案件类别')
                return;
            }
            if (this.chosenId == '' || this.chosenId == null || this.chosenId == undefined) {
                this.toast('请选择当事人')
                return;
            }
            
            
            if (this.caseTime == '' || this.caseTime == null || this.caseTime == undefined) {
                this.toast('请选择案发时间')
                return;
            }
            if(this.anjianfenlei=='简易程序案件'){
                if (this.fillCase == '' || this.fillCase == null || this.fillCase == undefined) {
                    this.toast('请选择案由')
                    return;
                }
                if (window.idd == '' || window.idd == null || window.idd == undefined) {
                    this.toast('请选择案情承办人')
                    return;
                }
            }

            var userId, areaId, caseOrigin, caseType, curPerson, curPersonName, longitude,
                latitude, caseTime, address, caseDescribe, annexNo;
            userId = localStorage.getItem('userId');
            areaId=this.caseArea;
            caseOrigin = this.caseSourceId;
            caseType = this.caseTypeId;
            curPerson = this.chosenId;
            curPersonName = this.chosenPeople;
            longitude = window.longtidue;
            latitude = window.langtidue;
            caseTime = this.caseTime;
            address = this.address;
            caseDescribe = this.txt;
            annexNo = this.annexNo;
            if(this.anjianfenlei=='一般程序案件'){
                let res = await doAppSaveCase(userId,areaId, caseOrigin, caseType, curPerson, curPersonName, longitude,
                    latitude, caseTime, address, caseDescribe, annexNo);
                    this.toast('提交成功')
                    setTimeout(()=>{
                        this.$router.go(-1)
                    },1000)
                
                if (res.code == 0) {

                    this.caseSourceId = '',
                        this.caseTypeId = '',
                        this.chosenPeople = '',
                        this.caseTime = '',
                        this.$refs.caseDesc.inputContent = '',
                        localStorage.setItem('chosePeoName', '');
                    localStorage.setItem('chosePeoId', '');


                    this.toast(res.message);

                    setTimeout(() => {
                        this.$router.go(-1)
                    }, 1000)

                    // console.log(JSO);


                    // this.hideLoading()
                } else {
                    // this.hideLoading();
                    this.toast(res.message);
                }
            }else if (this.anjianfenlei=='简易程序案件'){
                this.toast('提交成功')
                    setTimeout(()=>{
                        this.$router.go(-1)
                    },1000)
                let res = await doAppSaveSimpleCase(userId, caseOrigin, caseType, curPerson,caseTime,
                    longitude, latitude,  location, caseReason,caseReasonStr,punishmentBasis
                    ,penaltyDecision,caseSummary,  caseOrganizer, sendTimeStart, sendTimeEnd,annexNo);
                    this.toast('提交成功')
                    setTimeout(()=>{
                        this.$router.go(-1)
                    },1000)
                if (res.code == 0) {

                    this.caseSourceId = '',
                        this.caseTypeId  = '',
                        this.chosenPeople = '',
                        this.caseTime='',
                        // this.$refs.caseDesc.inputContent = '',
                        // localStorage.setItem('chosePeoName','');
                      localStorage.setItem('chosePeoId','');


                    this.toast(res.message);

                    setTimeout(()=>{
                        this.$router.go(-1)
                    },1000)

                    // console.log(JSO);



                    this.hideLoading()
                } else {
                    this.hideLoading();
                    this.toast(res.message);
                }
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
        submit() {
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
        refresh() {
            this.address='正在获取定位信息...';
            this._getLocation();

        },
        _showPosition(e) {
            if (isNull(e.coords.longitude)) {
                toast("坐标为空,请重新定位");
            } else {
                console.log('定位成功，进入_showPosition');
                window.longitude = e.coords.longitude;
                window.latitude = e.coords.latitude;
                window.choiceLongitude = e.coords.longitude;
                window.choiceLatitude = e.coords.latitude;
                var ggPoint = new BMap.Point(window.longitude, window.latitude);
                var pointArr = [];
                pointArr.push(ggPoint);
                var convertor = new BMap.Convertor();
                convertor.translate(pointArr, 1, 5, data => {
                    if (data.status === 0) {
                        var geocode = new BMap.Geocoder();
                        geocode.getLocation(data.points[0], result => this._searchResult(result));
                    }
                });
            }
        },
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
        _searchResult(result) {
            console.log('_searchResult: ' + result.address);
            window.localStorage.mapAddress = result.address;
            this.address = result.address;
            if (!isNull(window.setIdMapAddress)) {
                this.address = window.localStorage.mapAddress;
            }
            this._refreshMap();
        },
        _refreshMap() {
            console.log('进入_refreshMap');
            console.log('当前longitude：' + window.longitude);
            console.log('当前latitude：' + window.latitude);
            let map;
            let zoom = 16;
            let geocode = "";
            map = new T.Map('attendance_map');
            map.centerAndZoom(new T.LngLat(window.longitude || 120.00623, window.latitude || 32.0444), zoom);
            let icon = new T.Icon({
                iconUrl: require("../../image/icon_point.png"),
                iconSize: new T.Point(19, 27),
                iconAnchor: new T.Point(10, 25)
            });
            let marker = new T.Marker(new T.LngLat(window.longitude, window.latitude), {
                icon: icon
            });
            //向地图上添加自己位置的标志
            map.clearOverLays();
            map.addOverLay(marker);

            // let label = new T.Label({
            //     text: window.localStorage.mapAddress,
            //     position: new T.LngLat(window.longitude, window.latitude),
            //     offset: new T.Point(-9, 0)
            // });
            // //向地图上添加地址文本
            // map.addOverLay(label);

            // 定义该矩形的显示区域
            let circle = new T.Circle(new T.LngLat(window.longitude, window.latitude), 200, {
                color: "blue",
                weight: 1,
                opacity: 0.5,
                fillColor: "#666666",
                fillOpacity: 0.3,
                lineStyle: "solid"
            });
            //向地图上添加圆
            map.addOverLay(circle);
        }
    },
    mounted() {
        window.aa=this;
        this.listodd=this.list;
        this.refresh();
    }
}
</script>

<style lang="less" scoped>
.anjianshangbao {
    .list {
        height: 100px;
        padding: 13px;

        .value {
            margin-top: 12px;

            span {
                font-size: 12px;
            }

        }
    }
}
</style>
