<template>
    <div class="text-view">
        <div class="text-view-wrapper">
            <div class="text-view-title">{{title}}</div>
            <div class="text-view-content">{{content}}</div>
        </div>
        <div class="grey-split-line" v-show="!hideLine"></div>
    </div>
</template>

<script>
    export default {
        name: "text-view",
        props: {
            title: {
                default: '标题'
            },
            content: {
                default: ''
            },
            hideLine: {
                default: false
            }
        }
    }
</script>

<style lang="less" scoped>
    @import '../style/less-variable';

    .text-view {
        display: flex;
        flex-flow: column nowrap;
        width: 100%;

        .text-view-wrapper {
            height: 48px;
            width: 100%;
            display: flex;
            flex-flow: row nowrap;
            justify-content: space-between;
            align-items: center;
            background-color: white;
            padding: @padding-height @padding-width;

            .text-view-title {
                flex: 3.6;
                font-size: 16px;
                color: #999999;
                text-align: left;
            }

            .text-view-content {
                flex: 6.5;
                font-size: 16px;
                color: #333333;
                text-align: left;
                // overflow: hidden;
                // text-overflow: ellipsis;
                white-space: nowrap;
                -webkit-line-clamp: 2;
                -webkit-box-orient: vertical;
            }
        }

        .grey-split-line {
            width: 100%;
            height: 1px;
            background-color: @grey-split-line;
        }
    }


</style>
