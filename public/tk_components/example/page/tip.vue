<template>
<div class="page-tip">
    <tk-header>弹出提示</tk-header>
    <tk-scroll>
        <div class="tipButton" @click="poperTip">
            点击弹出错误提示
        </div>
    </tk-scroll>
</div>
</template>

<script>
export default {
    data() {
        return {}
    },
    methods: {
        poperTip() {

        }
    },
    mounted() {

    }
}
</script>

<style lang="less" scoped>
.tipButton {
    border: 1px solid #ddd;
    border-radius: 3px;
    width: max-content;
    padding:8px 20px;
}
</style>
