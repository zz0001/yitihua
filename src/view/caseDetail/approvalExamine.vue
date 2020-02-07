<template>
    <div class="approval-examine">
        <tk-header>行政审批处理</tk-header>

        <tk-scroll>
            <tk-textarea :placeholder="placeholder" v-model="textareas"></tk-textarea>
            <tk-form :list="list"></tk-form>
            <tk-title>上传图片</tk-title>
            <tk-upload-photo v-model="imgList"></tk-upload-photo>
            <tk-title>上传附件</tk-title>
            <tk-upload-file v-model="fileList" @nameChange="nameChange"></tk-upload-file>
            <tk-button style="margin-top:20px;" @click="submit">提交</tk-button>
        </tk-scroll>
    </div>
</template>

<script>
import axios from "axios";

export default {
    data() {
        return {
            placeholder: "请输入审核意见",
            textareas: "",
            imgList: [],
            fileList: [],
            names: [],
            list: [
                {
                    name: "上传文件类型",
                    type: "select",
                    model: "",
                    code: "",
                    select: ["申报材料", "办理过程附件", "办结信息附件"]
                }
            ],
            base64: [],
            rowId: "",
            transid: "",
            id: "",
            transname: "",
            taskId: ""
        };
    },
    created() {
        this.rowId = this.$route.query.rowId;
        this.transid = this.$route.query.transid;
        this.id = this.$route.query.id;
        this.transname = this.$route.query.transname;
        this.taskId = this.$route.query.taskid;
    },
    computed: {
        code() {
            return this.list[0].code;
        }
    },
    watch: {
        fileList() {
            console.log(this.fileList);
        },
        imgList() {
            console.log(this.imgList);
        },
        code() {
            console.log(this.code[0]);
        }
    },
    methods: {
        nameChange(v) {
            this.names = v;
        },
        submit() {
            var fileArr = this.names.map((item, index) => {
                return {
                    name: item,
                    base64: this.fileList[index]
                };
            });
            var imgArr = this.imgList.map(item => {
                return item;
            });

            let row_id = this.rowId;
            let detail = this.textareas;
            let moveStatus = this.id;
            let transName = this.transname;
            let transId = this.transid;
            let taskId = this.taskId;
            let uploadType = this.code[0];

            if (fileArr.length > 0 || imgArr.length > 0) {
                if (uploadType == undefined) {
                    var signs;
                    signs = this.$createSignWarn({
                        $props: {
                            content: "请选择文件类型"
                        }
                    }).show();
                    setTimeout(() => {
                        signs.hide();
                    }, 2000);
                    return;
                }
            }

            let _url = "/xzsp/mobile/processCasebaseinfo.action";
            let _obj = {
                row_id: row_id,
                detail: detail,
                moveStatus: moveStatus,
                transName: transName,
                transId: transId,
                taskId: taskId,
                uploadType: uploadType,
                fileArr: JSON.stringify(fileArr),
                imgArr: JSON.stringify(imgArr)
            };
            axios.post(_url, _obj).then(d => {
                var signs;
                signs = this.$createSignSuccess({
                    $props: {
                        content: "提交成功"
                    }
                }).show();
                setTimeout(() => {
                    signs.hide();
                    this.$router.push({
                        path: "/welcome"
                    });
                }, 3000);
            });
        }
    }
};
</script>

<style lang="less" scoped>
</style>