<template>
<tpoper class="poper-txt">
        <div class="popup-box">
                <div class="popup_title">{{title}}</div>
                <div class="popup-body">
                        <div v-if="data" class="popup-content">
                                <p v-html="data"></p>
                        </div>
                        <div class="popup-images" v-if="img&&img.length">
                                <div data-magnify="gallery2" data-group="tt9" :data-src="item" class="images-item" v-for="(item,index) of img" :style="{'background-image':`url(${item})`}">

                                </div>
                        </div>
                        <div class="wgzwgy" v-if="detail">
                                <div v-if="detail.wgz" class="wgz">
                                        <div class="wgz_title"><img  src="../img/wgz_title.png" align="center"></div>
                                        <div class="personnel">
                                                <img data-magnify="gallery2" data-group="tt10" :data-src="detail.wgz.userPic?'/wgh/'+detail.wgz.userPic:'/static/img/wgy_icon.jpg'" class="photo" :src="detail.wgz.userPic?'/wgh/'+detail.wgz.userPic:'/static/img/wgy_icon.jpg'" />
                                                <p>{{detail.wgz.userName}}<span>{{detail.wgz.duty}}</span></p>
                                                <p class="phone">{{detail.wgz.mobile}}</p>
                                        </div>
                                </div>
                                <div v-if="detail.police&&detail.police.length" class="wgy">
                                        <div class="wgz_title"><img  src="../img/minjing.png" align="center"></div>
                                        <div :key=index v-for="(item,index) of detail.police" class="personnel">
                                                <img data-magnify="gallery2" data-group="tt10" :data-src="item.userPic?'/wgh/'+item.userPic:'/static/img/wgy_icon.jpg'" class="photo" :src="item.userPic?'/wgh/'+item.userPic:'/static/img/wgy_icon.jpg'" />
                                                <p>{{item.userName}}<span>{{item.duty}}</span></p>
                                                <p class="phone">{{item.mobile}}</p>
                                        </div>
                                </div>
                                <div v-if="detail.messenger&&detail.messenger.length" class="wgy">
                                        <div class="wgz_title"><img  src="../img/msg.png" align="center"></div>
                                        <div :key=index v-for="(item,index) of detail.messenger" class="personnel">
                                                <img data-magnify="gallery2" data-group="tt10" :data-src="item.userPic?'/wgh/'+item.userPic:'/static/img/wgy_icon.jpg'" class="photo" :src="item.userPic?'/wgh/'+item.userPic:'/static/img/wgy_icon.jpg'" />
                                                <p>{{item.userName}}<span>{{item.duty}}</span></p>
                                                <p class="phone">{{item.mobile}}</p>
                                        </div>
                                </div>
                                <div v-if="detail.wgy" class="wgy">
                                        <div class="wgz_title"><img src="../img/wgy_title.png" align="center"></div>
                                        <div :key=index v-for="(item,index) of detail.wgy" class="personnel">
                                                <img data-magnify="gallery2" data-group="tt10" :data-src="item.userPic?'/wgh/'+item.userPic:'/static/img/wgy_icon.jpg'" class="photo" :src="item.userPic?'/wgh/'+item.userPic:'/static/img/wgy_icon.jpg'" />
                                                <p>{{item.userName}}<span>{{item.duty}}</span></p>
                                                <p class="phone">{{item.mobile}}</p>
                                        </div>
                                </div>
                        </div>
                </div>



        </div>
</tpoper>
</template>

<script>
export default {
        props: ['data', 'title','detail',"img"],
        name: 'poperTxt',
        components: {
                tpoper: () => import('./poper.vue')
        },
        methods:{
                poperImage(index){
                        this.$createPotImagePreview({
                                $props:{
                                        initialIndex:index,
                                        imgs:this.img,loop:true
                                },
                                $events:{
                                        change:(i)=>{
                                                this.initialIndex=i
                                        }
                                }
                        }).show()

                }
        },
        mounted() {}
}
</script>

<style lang="less">
.poper-txt {

        .popup-images{
                width:100%;
                height:600px;
                display: flex;
                .images-item{
                        flex:1;
                        background-size:contain;
                        background-position:center center;
                        background-repeat: no-repeat;
                        margin:10px;
                        transition:.3s all;
                }
        }
        .detail-box {
                margin: 0 auto;
                width: 602px;
                height: 700px;
                background: url(../img/tc_bg.png) no-repeat top center;
        }
        .photo{
                width:150px;
                height:200px;
        }
        .detail_title {
                font-size: 22px;
                text-align: center;
                line-height: 50px;
                padding-top: 35px;

        }

        .detail-body {
                margin: 0 auto;
                width: 86%;
                height: 560px;
                overflow-y: scroll;
                padding: 10px 20px 0px 20px;
        }

        .detail-body::-webkit-scrollbar {
                display: none;
        }

        .detail-line {
                min-height: 40px;
                display: flex;
                justify-content: space-between;
                align-items: center;
        }

        .detail-line span {
                font-size: 18px;
        }

        .detail-line>span:first-child {
                flex-shrink: 0;
        }

        .detail-line>span:last-child {
                flex-grow: 1;
                text-align: right;
        }
        .img-container {
                margin: 15px 0;
                border-top: 1px solid rgba(255, 255, 255, 0.3);
        }

        .img-box {
                height: 110px;
                margin-bottom: 10px
        }

        .img-box>div {
                float: left;
        }

        .img-content {
                width: 470px;
                height: 100%;
                overflow: hidden;
                position: relative;
        }

        .img-content ul {
                height: 110px;
                position: absolute;
                left: 0;
                transition: 0.2s all linear;
        }

        .img-content li {
                float: left;
                width: 150px;
                height: 110px;
                margin: 0 5px;
        }

        .left-arrow,
        .right-arrow {
                width: 20px;
                height: 100%;
                white-space: nowrap;
                overflow: hidden;
                cursor: pointer;
        }

        .left-arrow {
                background: url(../img/left.png) no-repeat center;
        }

        .right-arrow {
                background: url(../img/right.png) no-repeat center;
        }

        .img-box img {
                display: block;
                width: 150px;
                height: 110px;
                border-radius: 5px;
                cursor: pointer;
        }

        .step-container {
                padding-top: 5px;
                border-top: 1px solid rgba(255, 255, 255, 0.3);
        }

        .step {
                background: rgba(20, 58, 128, 0.5);
                padding: 0 10px 8px;
                margin-top: 10px;
        }

        .step-title {
                color: #02F6FE;
                font-size: 17px;
                line-height: 35px;
        }

        .step-line {
                font-size: 16px;
                line-height: 25px;
        }

        /*cunjieshao*/
        .popup-box {
                max-height:780px;
                padding-bottom:30px;
                margin: 0 auto;
                width: 1045px;
                min-height: 200px;

                background: url(../img/cjj_bg.png) no-repeat top center;
                .popup-body {
                        box-sizing:border-box;
                        max-height:645px;
                        margin: 0 auto;
                        width: 90%;
                        min-height: 100px;
                        overflow-y: scroll;
                        margin-top:10px;
                        padding: 30px 20px 30px 20px;
                }
        }

        .popup_title {
                font-size: 26px;
                text-align: center;
                line-height: 50px;
                padding-top: 35px;

        }


        .popup-content {
                min-height: 0px;
                overflow-y:scroll;
                &::-webkit-scrollbar{
                        display:none;
                }
                border-bottom: 1px solid rgba(255, 255, 255, 0.3);
        }

        .popup-content P {
                font-size:20px;
                background-color:transparent !important;
                text-indent: 36px;
                line-height: 40px;
        }

        .wgzwgy {
                height: 307px;
                margin-top: 30px;
                display: flex;
        }

        .wgz {
                display: flex;
        }

        .wgz_title {
                margin-top: 55px;
                width: 24px;
                height: 197px;
        }

        .personnel {
                margin-left: 16px;
                padding: 25px;
                width: 149px;
                height: 267px;
                background: url(../img/gzry_bk.png) no-repeat center
        }

        .personnel p {
                text-align: center;
                line-height: 30px;
                font-size: 16px;
        }

        .personnel p span {
                margin-left: 15px;
                font-size: 16px;
        }

        .personnel p.phone {
                font-size: 20px;
        }

        .wgy {
                display: flex;
                padding-left: 30px;
        }
}
</style>
