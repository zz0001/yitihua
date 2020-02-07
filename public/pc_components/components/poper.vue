<template>
        <transition name="poper">
                <div class="poper" v-if="isShow">
                        <div @click="hide" class="shade"></div>
                        
                        <div class="poper-box">
                                <img class="close" v-if="!noclose" @click="hide" src="../images/close.png" alt="">
                                <slot></slot>
                        </div>
                </div>
        </transition>
</template>

<script>
export default {
        props:['noclose'],
        data() {
                return {
                        isShow: false
                }
        },
        name: 'poper',
        mounted(){
                this.isShow=true;
        },
        methods: {
                show() {
                        this.isShow = true;
                },
                hide() {
                        this.isShow = false;
                }
        },
}
</script>

<style lang="less">
.poper-enter,.poper-leave-active{
        .poper-box{
                opacity: 0;
        }
        .shade {
                opacity: 0;
        }
}
.poper-enter{
        .poper-box{
                margin-top:10%;
        }
        
}
.poper-leave-active{
        .poper-box{
                margin-top:-10%;
        }
}
.poper {
        transition: .5s all;
        width: 100vw;
        height: 100vh;
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: 1001;
        display:flex;
        // content:center;
        // align-item:center;
        .shade {
                transition: .5s all;
                position: absolute;
                left: 0;
                right: 0;
                bottom: 0;
                top: 0;
                background: rgba(0, 0, 0, 0.5);
        }

        .poper-box {
                
                .close{
                        width:30px;
                        height:30px;
                        position:absolute;
                        right:-15px;
                        top:-15px;
                }
                transition: .5s all;
                // background: #04236dcc;
                position: absolute;
                width:auto;
                transform: translate( -50%, -50%);
                top:50%;
                left:50%
        }
}
</style>
