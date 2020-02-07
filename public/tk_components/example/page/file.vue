<template>
    <div class="tk-upload-file">
        <tk-header>上传文件</tk-header>
        <tk-upload-file v-model="list"></tk-upload-file>
    </div>
</template>

<script>
export default {
    data() {
        return {
            list: [
            ]
        };
    },
    watch:{
        list(){
            console.log(this.list)
        },
    },
    mounted(){
    },
    methods: {
    }
};
</script>

<style lang="less" scoped>

</style>