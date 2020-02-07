<template>
<div id="application">
    <transition :name="transitionName">
        <router-view class="child-view"></router-view>
    </transition>
</div>
</template>

<script>
export default {
    data() {
        return {
            transitionName: 'slide-right',
            isBack: false
        }
    },
    mounted() {
        
        window.app = this;
        var that = this;
        setTimeout(() => {
            document.addEventListener("backbutton", function () {
                that.$router.isBack = true;
                that.$router.go(-1)
            }, false);
        }, 1000)
        // var origin = location.origin;
        // this.wsUrl = origin.replace('https://', 'ws://')
        // this.ws = new WebSocket(this.wsUrl);
        // this.ws.onclose = function (e) {
        //     //开启断线重连
        //     console.error('socket close')
        //     that.relink();
        // }
        // this.ws.onerror = function (e) {
        //     console.error('socket error')
        //     //开启断线重连
        //     that.relink();
        // }
        // this.ws.onopen = function () {
        //     console.log('socket connected')
        //     if (that.timer) {
        //         clearInterval(that.timer)
        //         that.timer = null
        //     }
        // }
        // this.ws.onmessage = function (e) {
        //     var options = JSON.parse(e.data);
        //     var index;
        //     if (options.type == 'message') {
        //         console.log(options)
        //     } else if (options.type == 'close') {
        //         index && index.hide();
        //     }

        // }
    },
    watch: {
        $route(to, from, next) {
            var that = this;
            let isBack = that.$router.isBack;
            console.log(isBack)
            if (['/address-list', '/welcome', '/toDeal-index'].indexOf(from.path) != -1 && (['/address-list', '/welcome', '/toDeal-index'].indexOf(to.path) != -1)) {
                that.transitionName = "slide-disappear"
            } else if (isBack) {
                that.transitionName = "slide-right"
            } else {
                that.transitionName = "slide-left"
            }

            that.$router.isBack = false;
        }
    }
}
</script>

<style lang="less" scoped>
@speed: 30%;
@speed2: 30%;
@opt: 0;

.child-view {
    position: absolute;

    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    transition: all .3s ease-in-out;
}

.slide-disappear-enter {
    opacity: 0;
    z-index: 1;
}

.slide-disappear-leave-active {
    opacity: 0;
    z-index: -1;
}

.slide-left-enter {
    opacity: @opt;
    transform: translate(@speed, 0);
}

.slide-right-leave-active {
    opacity: @opt;
    transform: translate(@speed2, 0);
}

.slide-right-enter {
    opacity: @opt;
    transform: translate(-@speed, 0);
}

.slide-left-leave-active {
    opacity: @opt;
    transform: translate(-@speed2, 0);
}

.slide-up-leave-active {
    opacity: @opt;
    transform: translate(0, -@speed2);
}

.slide-up-enter {
    opacity: @opt;
    transform: translate(0, @speed);
}

.slide-down-leave-active {
    opacity: @opt;
    transform: translate(0, @speed2);
}

.slide-down-enter {
    opacity: @opt;
    transform: translate(0, -@speed);
}
</style>
