<template>
        <div class="box">
                <div @click="$emit('titleClick')" class='title'>{{title}}</div>
                <div class="container">
                         <slot ></slot>
                </div>
        </div>
</template>

<script>
export default {
        props: ['title'],
        data(){
                return {
                        active:0
                }
        }
}
</script>

<style lang="less">

.box {
        position: absolute;
        background: url(../images/box_bg.png) no-repeat;
        .title{
                margin-left:10px;
                color:#fff;
                font-size:12px;
                height:25px;
                line-height:25px;
        }
        .container{
                height:calc(100% - 25px);
        }
}
</style>
