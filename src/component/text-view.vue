<template>
    <div class="text-view">
        <div class="text-view-wrapper">
            <div class="text-view-title">{{title}}</div>
            <div class="text-view-content">{{content}}</div>
        </div>
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
    .text-view {
        width: 100%;
        height: 52px;

        .text-view-wrapper {
            height: 100%;
            width: 100%;
            display: flex;
            flex-flow: row nowrap;
            justify-content: space-between;
            align-items: center;
            background-color: white;
            padding: 0 10px;
            border-bottom: 1px solid #999999;

            .text-view-title {
                width: 35%;
                font-size: 18px;
                color: #999999;
                text-align: left;
                padding-left: 24px;
            }

            .text-view-content {
                width: 65%;
                font-size: 18px;
                color: #333333;
                text-align: left;
            }
        }
    }


</style>
