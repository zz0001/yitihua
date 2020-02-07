<template>
<div ref="slide" @mouseover="mouseover" @mouseleave="mouseleave" class="pc-slide">
    <div :style="{'transform':`translateX(${x}px)`,'width':`${width*tdata.length/viewNum-1}px`}" class="pc-slide-scroller">
        <div class="pc-image-container" :style="{'width':`${width/viewNum-1}px`}" :key=index v-for="(item,index) of tdata">
            <div data-magnify="gallery2" data-group="g2" :data-src="item.value" class="pc-image" :style="{'background-image':`url(${item.value})`}"></div>
            <div class="pc-name">{{item.name}}</div>
        </div>
    </div>
    <div @click="active--" class="slide-prev">
        <span class="potic-back"></span>
    </div>
    <div @click="active++" class="slide-next">
        <span class="potic-arrow"></span>
    </div>
</div>
</template>

<script>
export default {
    computed: {
        x() {
            return -this.active * (this.width / this.viewNum - 1);
        },
        dataCpt() {
            var data;
            var a = this.tdata.splice(this.active, this.viewNum)
            return a;
        },
        imgs() {
            var arr = [];
            if (this.url) {
                this.tdata.forEach(item => {
                    arr.push(item.value)
                })
            } else {
                this.data.forEach(item => {
                    arr.push(item.value)
                })
            }
            return arr;
        }
    },
    watch: {
        data(newV) {
            this.tdata = newV;
            this.init();
        },
        active(newV) {
            if (newV >= (this.tdata.length + 1 - this.viewNum)) {
                this.active = 0;
            } else if (newV < 0) {
                this.active = this.tdata.length - this.viewNum
            }
        }
    },
    props: {
        url: {
            type: String,
            default: ''
        },
        data: {
            type: Array,
            default () {
                return [{
                    name: 'XXX',
                    value: 'https://goss3.cfp.cn/creative/vcg/800/new/VCG41N903112794.jpg'
                }, {
                    name: 'XXX',
                    value: 'https://goss.cfp.cn/creative/vcg/800/version23/VCG41183746218.jpg'
                }, {
                    name: 'XXX',
                    value: ' https://goss3.cfp.cn/creative/vcg/800/new/VCG211171037335.jpg'
                }]
            }
        },
        poperImage: {
            type: Boolean,
            default: true
        },
        viewNum: {
            type: Number,
            default: 2
        }
    },
    data() {
        return {
            width: 0,
            active: 0,
            tdata: this.data,
            initialIndex: 0
        }
    },
    mounted() {
        this.width = this.$refs.slide.offsetWidth;
        this.init();
        this.setTime()
        if (this.url) {
            this.$http.post(this.url).then(d => {
                this.tdata = d.data;
            })
        }
    },
    beforeDestroy() {
        clearInterval(this.timer)
    },
    methods: {
        mouseover() {
            clearInterval(this.timer)
        },
        mouseleave() {
            this.setTime();
        },
        setTime() {
            this.timer = setTimeout(() => {
                this.active += 1;
                this.setTime();
            }, 4000)
        },
        init() {
            import('../modules/image.js')
        },
        poper(index) {

        }
    }
}
</script>

<style lang="less">
.pot-image-preview-header {
    bottom: 0;

    .image-preview-custom-header {
        position: absolute;
        bottom: 0;
        width: 100%;
        text-align: center;
        height: 180px;
        z-index: 1000;
        line-height: 100px;
    }
}

.pc-slide {
    overflow: hidden;

    &:hover {

        .slide-prev,
        .slide-next {
            display: block;
        }
    }

    height: 100%;
    box-sizing:border-box;
    position:relative;

    .pc-slide-scroller {
        height: 100%;
        line-height: 100%;
        transition: .3s all;
    }

    .slide-prev,
    .slide-next {
        display: none;
        position: absolute;
        top: calc(50% - 15px);
        background: rgba(11, 108, 160, 0.486);
        width: 30px;
        height: 30px;
        line-height: 30px;
        border-radius: 50%;
        text-align: center;
    }

    .slide-prev {
        left: 0;
    }

    .slide-next {
        right: 0;
    }

    .pc-image-container {
        height: 100%;
        float: left;

        .pc-image {
            transition: 1s all;
            height: calc(100% - 80px);
            background-size: cover;
            background-position: center;
            background-repeat: no-repeat;
            margin: 30px 10px 10px;
            border-radius: 3px;
            cursor: pointer;
        }

        .pc-name {
            transition: .3s all;
            text-align: center;
            color: #fff;
            font-size: 13px;
        }
    }
}
</style>
