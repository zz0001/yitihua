<template>
    <div class="function-item-content">
        <div class="common-function-icon">
            <img class="common-function-icon-img" :src="img" alt="">
        </div>
        <div class="common-function-name">{{name}}</div>
    </div>
</template>

<script type="text/ecmascript-6">
    export default {
        name: "my-menu-item",
        props: ['img', 'name'],
        data() {
            return {}
        },
        created() {

        },
        mounted() {

        },
        methods: {}
    }
</script>

<style lang="less" scoped>
    .function-item-content {
        display: flex;
        flex-flow: column nowrap;
        align-items: center;

        .common-function-icon {
            margin-top: 2px;

            .common-function-icon-img {
                height: 45px;
                width: 45px;
            }
        }

        .common-function-name {
            text-align: center;
            margin-top: 5px;
            font-size: 14px;
        }
    }
</style>
