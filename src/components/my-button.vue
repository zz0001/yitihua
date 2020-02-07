<template>
    <div class="my-button-wrapper">
        <mt-button type="primary" class="my-button" @click="onClickButton">{{name}}</mt-button>
    </div>
</template>

<script>
    export default {
        name: "my-button",
        props: {
            name: {
                default: '提交'
            },
        },
        data() {
            return {}
        },
        methods: {
            onClickButton() {
                return this.$emit('onClickButton');
            }
        }
    }
</script>

<style lang="less" scoped>
    @import '../style/less-variable';

    .my-button-wrapper {
        width: 100%;
        display: flex;
        flex-flow: column nowrap;
        align-items: center;

        .my-button {
            width: 14.9rem;
            height: 1.9rem;
            background-color: @blue;
            border-radius: 6px;
        }
    }

</style>
