<template>
<div class="bar">
    <div :class="{active:active==index}" @click="goRouter(index)" :key="index" v-for="(item,index) of list">
        <div :class="[item.class,{active:active==index}]"></div>
        {{item.name}}
    </div>
</div>
</template>

<script>
export default {
    props:{
        active:{
            type:Number,
            default:0
        },
    },
    methods:{
        goRouter(index){
            this.$router.push(['/toDeal-index','/welcome','/address-list'][index])
        }
    },
    data() {
        return {
            list: [{
                name: '待办',
                class: 'daiban'
            }, {
                name: '工作台',
                class: "gongzuotai"
            }, {
                name: '通讯录',
                class: "tongxunlu"
            }]
        }
    },
    mounted() {

    }
}
</script>

<style lang="less" scoped>
.bar {
    z-index:10;
    position: fixed;
    bottom: 0;
    width: 100vw;
    display: flex;
    background: #fff;
    height: 60px;
    box-shadow: 0px 0px 6px rgba(0, 0, 0, 0.548);

    >div {
        flex: 1;
        text-align: center;
        box-sizing: border-box;
        font-size: 13px;
        padding-top: 8px;
        &.active{
            color:#4582FD;
        }
        >div {
            height: 24px;
            background-repeat: no-repeat;
            background-position: center center;
            background-size: contain;
            margin-bottom: 5px;

            &.daiban {
                background-image: url('./barImage/a1.png');

                &.active {
                    background-image: url('./barImage/a2.png');
                }
            }

            &.gongzuotai {
                background-image: url('./barImage/b1.png');

                &.active {
                    background-image: url('./barImage/b2.png');
                }

            }

            &.tongxunlu {
                background-image: url('./barImage/c1.png');

                &.active {
                    background-image: url('./barImage/c2.png');
                }

            }
        }

    }

}
</style>
