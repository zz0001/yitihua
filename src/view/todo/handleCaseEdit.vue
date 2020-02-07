<template>
    <div class="handle-case-edit">
        <tk-header>案件处理</tk-header>
        <tk-container>
            <div class="handle-case-edit-content">
                <tk-textarea placeholder="请输入案件内容" v-model="content"></tk-textarea>
                <tk-title>上传案件证据</tk-title>
                <tk-upload-photo v-model="images"></tk-upload-photo>
            </div>
            <tk-button @click="_submit">提交</tk-button>
        </tk-container>
    </div>
</template>

<script type="text/ecmascript-6">
    export default {
        name: "handleCaseEdit",
        data() {
            return {
                images: [],
                content: '',
            }
        },
        created() {

        },
        mounted() {

        },
        methods: {
            _submit() {
                console.log(this.content);

            }
        }
    }
</script>

<style lang="less" scoped>
    .handle-case-edit {
        width: 100vw;
        height: 100vh;

        .handle-case-edit-content {
            height: calc(100% - 50px);
        }
    }
</style>
