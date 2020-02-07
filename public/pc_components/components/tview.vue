<template>
<transition name="fade-view">
    <div class="view">
        <vue-drag-resize :w="width||500" :h="height||300" :x="left||400" :y="top||300" class="tview" v-if="avalue">
            <svg @click="hide" class="close icon" t="1572312740176" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2045" width="200" height="200">
                <path d="M512 0C229.325 0 0 229.325 0 512s229.325 512 512 512 512-229.325 512-512S794.675 0 512 0z" p-id="2046"></path>
                <path d="M722.995 713.165c-10.675 10.675-29.67 10.675-40.55 0l-161.05-161.05-161.075 161.05c-10.675 10.675-29.645 10.675-40.525 0-10.675-10.65-10.675-29.645 0-40.525l161.05-161.075-160.41-160.41c-10.675-10.675-10.675-29.67 0-40.55 10.65-10.65 29.645-10.65 40.525 0L521.395 471.04l160.41-160.435c11.315-10.65 29.67-10.65 40.55 0 10.65 10.675 10.65 29.67 0 40.55L561.92 511.565 722.995 672.64c10.65 10.88 10.65 29.875 0 40.525z" fill="#FFFFFF" p-id="2047"></path>
            </svg>
            <div :style="{'transform':`translate(${x}px,${y}px)`}" @mousemove="mousemove" @mouseup="mouseup" @mousedown="mousedown" ref="videobox" id="videobox">
                <div style="background:red;"></div>
                <video autoplay="autoplay" ref="myVideo" id="myVideo" class="video-js vjs-default-skin vjs-big-play-centered" controls preload="auto" width="2000" height="1500" data-setup='{}'>
                    <source id="source" :src="avalue" type="application/x-mpegURL">
                </video>
            </div>
        </vue-drag-resize>
    </div>
</transition>
</template>

<script>
import dragResize from './vue-drag-resize/index.vue';
export default {
    props: ['value','top','left',"width","height"],
    components: {
        'vue-drag-resize':dragResize
    },
    name: 'tview',
    data() {
        return {
            avalue: this.value,
            isShow: false,
            player: null,
            x: 0,
            y: 0,
            startX: 0,
            startY: 0
        }
    },
    watch: {
        value(newv) {
            this.avalue = newv;
        },
        avalue(url) {
            if (url) {
                this.$nextTick(() => {
                    //  this.$refs.videobox.innerHTML = '';
                    // var str2 = `<video id="myVideo" class="video-js vjs-default-skin vjs-big-play-centered" controls preload="auto" width="300" height="250">
                    //         <source id="source" src="${url}" type="application/x-mpegURL">
                    // </video>`;
                    // this.$refs.videobox.innerHTML=str2;
                    this.init();

                })
            }
        }
    },
    mounted() {
        this.isShow = true;
        this.$nextTick(() => {
            this.init();
        })

    },
    methods: {
        init() {
            if (this.$refs.myVideo) {
                this.player = videojs(this.$refs.myVideo, {
                    bigPlayButton: true,
                    textTrackDisplay: false,
                    posterImage: false,
                    errorDisplay: false
                }, function () {
                    this.play();
                })
            } else {
                setTimeout(() => {
                    this.init();
                }, 1000)
            }

        },
        show() {
            this.isShow = true;
        },
        hide() {
            this.avalue = '';
            this.player.dispose()

        },
        mousemove(e) {
            // this.x=e.screenX-this.startX;
            // this.y=e.screenY-this.startY;
        },
        mousedown(e) {
            // this.startX=e.screenX;
            // this.startY=e.screenY;
        },
        mouseup(e) {
            // this.startX=e.screenX;
            // this.startY=e.screenY;
        }
    }
}
</script>

<style lang="less">
.video-js {
    width: 100%;
    height: 100%;
}

.tview {
    width: 300px;
    height: 200px;
    z-index:10000 !important;
}

.view {
    z-index:10000;

    .close {
        position: absolute;
        top: -10px;
        right: -10px;
        width: 20px;
        height: 20px;
        z-index: 100000001;
        background: rgb(0, 0, 0);
        border-radius: 50%;
    }

    #videobox {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        margin: auto;
    }
}
</style>
