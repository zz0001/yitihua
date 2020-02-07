<template>
<tpoper class="poperDetail">
    <div class="detail-box">
        <div class="detail_title">{{title}}</div>
        <div class="detail-body">
            <template v-for="(item,index) of data">
                <div class="detail-line" :key="index" v-if="!item.type">
                    <div>{{item.key}}</div>
                    <div>{{item.value}}</div>
                </div>
                <div :key="index" v-if="item.type=='images'&&item.value.length" class="img-container">
                    <div>{{item.key}}</div>
                    <div class="img-box">
                        <div class="left-arrow"></div>
                        <div class="img-content">
                            <ul>
                                <li :key=idx v-for="(i,idx) of item.value">
                                        <img data-magnify="gallery2" data-group="oo2" :data-src="i" :src="i" />
                                </li>
                            </ul>
                        </div>
                        <div class="right-arrow"></div>
                    </div>
                </div>
                <div v-if="item.type=='list'" :key="index" class="step-container">
                    <div class="detail-line">{{item.key}}</div>
                    <div class="step-content">
                        <div v-for="(i,idx) of item.value" :key=idx class="step">
                            <div class="step-title">【{{idx+1}}】{{i.name}}</div>
                            <div class="step-line">处理时间：{{i.startTime}}</div>
                            <div class="step-line">处理人：{{i.userName}}</div>
                            <div class="step-line">处理情况：{{i.message}}</div>
                        </div>
                    </div>
                </div>
            </template>
        </div>



    </div>
</tpoper>
</template>

<script>
export default {
    name: 'poperDetail',
    props: ['data', 'title'],
    components: {
        tpoper: () => import('./poper.vue')
    },
    mounted() {
        import('../modules/image.js').then(modules => {
        })
    },
    methods: {
        poperImageView(imgs, index) {
            console.log(imgs)
            console.log(index)
            this.$createPotImagePreview({
                $props: {
                    initialIndex: index,
                    imgs,
                    loop: true
                },
                $events: {
                    change: (i) => {
                        this.initialIndex = i
                    }
                }
            }).show();

        }
    }
}
</script>

<style lang="less">
.pot-image-preview {
    width: 1920px;
    height: 1080px;
}

.poperDetail {
    .detail-box {
        margin: 0 auto;
        width: 602px;
        height: 700px;
        background: url(../img/tc_bg.png) no-repeat top center;
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
        min-height:40px;
        line-height:40px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        border-bottom:1px dotted rgba(221, 221, 221, 0.295);
        &:nth-child(2n)>div:first-child,&:nth-child(2n+1)>div:last-child{
                // background:rgba(29, 66, 70, 0.5);
        }
        &:nth-child(2n+1)>div:first-child,&:nth-child(2n)>div:last-child{
                // background:rgba(8, 8, 51, 0.342);
        }
        >div:first-child{
                display:block;
                width:100px;
                flex:1;
                height:100%;
                text-align:center;
                border-right:1px dotted rgba(255, 255, 255, 0.253);
        }
        >div:last-child{
                padding-left:10px;
                width:100px;
                height:100%;
                flex:3;
        }
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
        width: auto;
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
}
</style>
