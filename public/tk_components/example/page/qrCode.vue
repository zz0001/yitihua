<template>
    <div class="qr-code">
        <tk-header>二维码</tk-header>
        <input v-model="url"/>
        <tk-qr-code v-model="url"></tk-qr-code>
        
    </div>
</template>

<script>
export default {
    data() {
        return {
            url: ''
        };
    }
};
</script>

<style lang="less" scoped>
</style>