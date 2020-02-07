<template>
    <transition name="fade">
        <div class="my-dialog-body">
            <div class="my-dialog">
                <div class="my-dialog-title">{{title}}</div>
                <div class="my-dialog-content">{{content}}</div>
                <div class="my-dialog-button-wrapper">
                    <div class="my-dialog-button-negative" @click="onClickNegative">{{negativeContent}}</div>
                    <div class="my-dialog-button-split"></div>
                    <div class="my-dialog-button-positive" @click="onClickPositive">{{positiveContent}}</div>
                </div>
            </div>
        </div>
    </transition>
</template>

<script>
    export default {
        name: "my-dialog",
        props: {
            title: {
                default: '提示'
            },
            content: {
                required: true
            },
            negativeContent: {
                default: '取消'
            },
            positiveContent: {
                default: '确定'
            }
        },
        data() {
            return {

            }
        },
        methods: {
            onClickNegative() {
                this.$emit('onClickNegative');
            },
            onClickPositive() {
                this.$emit('onClickPositive');
            }
        }
    }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
    .my-dialog-body
        position fixed
        width 100%
        top 0
        bottom 0
        left 0
        background rgba(0, 0, 0, 0.5)
        z-index: 1000;
        backdrop-filter: blur(10px);
        &.fade-enter-active, &.fade-leave-active
            transition: all 0.2s ease
        &.fade-enter, &.fade-leave-active
            opacity: 0
        .my-dialog
            position fixed
            display flex
            flex-flow column nowrap
            justify-content space-between
            top 0
            left 0
            right 0
            bottom 0
            margin auto
            background white
            border-radius 5px
            width 80%
            height 150px
            .my-dialog-title
                height 20px
                line-height 20px
                text-align center
                color #333333
                padding 20px 0 0 0
                font-size 15px
            .my-dialog-content
                height 20px
                line-height 20px
                text-align center
                color #999999
                font-size 14px
            .my-dialog-button-wrapper
                display flex
                flex-flow row nowrap
                height 50px
                .my-dialog-button-negative
                    flex 1
                    height 50px
                    line-height 50px
                    text-align center
                    color #999999
                    border 1px #d2d3d5
                    border-style solid none none none
                    font-size 14px
                .my-dialog-button-split
                    height 50px
                    width 1px
                    background #d2d3d5
                    margin 0 auto
                .my-dialog-button-positive
                    flex 1
                    height 50px
                    line-height 50px
                    text-align center
                    color #cb2a22
                    border 1px #d2d3d5
                    border-style solid none none none
                    font-size 14px
</style>
