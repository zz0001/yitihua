<template>
<div class="button-page">
    <tk-header>按钮组件</tk-header>
    <tk-scroll>
        <tk-button>按钮type=0</tk-button>
        <div style="display:flex;">
            <tk-button :type='0'>按钮组1</tk-button>
            <tk-button style="background:red;" :type="0">按钮组2,控制背景色</tk-button>
        </div>
    </tk-scroll>
</div>
</template>

<script>
export default {
    data() {
        return {}
    },
    mounted() {

    }
}
</script>

<style lang="less" scoped>

</style>
