<template>
    <div class="tk-upload-file">
        <div class="wrap">
            <div class="btns">
                <span>
                    <svg
                        t="1578383533507"
                        class="icon"
                        viewBox="0 0 1024 1024"
                        version="1.1"
                        xmlns="http://www.w3.org/2000/svg"
                        p-id="7443"
                        xmlns:xlink="http://www.w3.org/1999/xlink"
                        width="200"
                        height="200"
                    >
                        <path
                            d="M851.968 503.808 532.48 503.808 532.48 188.416c0-12.288-8.192-20.48-20.48-20.48S491.52 176.128 491.52 188.416l0 319.488L172.032 507.904c-12.288 0-20.48 8.192-20.48 20.48s8.192 20.48 20.48 20.48L491.52 548.864l0 319.488c0 12.288 8.192 20.48 20.48 20.48s20.48-8.192 20.48-20.48l0-319.488 319.488 0c12.288 0 20.48-8.192 20.48-20.48S864.256 503.808 851.968 503.808z"
                            p-id="7444"
                            fill="#8a8a8a"
                        />
                    </svg>
                </span>
                <input type="file" class="float-file" placeholder @change="addFile()" ref="file" />
            </div>
            <div class="tip">支持扩展名：.rar .zip .doc .docx .pdf...</div>
        </div>
        <div class="file-list">
            <ul>
                <li v-for="(item,index) of list" :key="index">
                    <span>{{ item.name }}</span>
                    <span class="del" @click="del(index)">删除</span>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    props: ["value"],
    data() {
        return {
            list: [],
            tvalue: []
        };
    },
    watch: {
        tvalue(newV) {
            this.$emit("input", newV);
            this.$emit('nameChange',this.list.map(item=>item.name))
        }
    },
    mounted() {
        window.a = this;
    },
    methods: {
        addFile() {
            var that = this;
            this.list.push(this.$refs.file.files[0]);
            // 文件转base64编码
            let reader = new FileReader();
            reader.onload = function(evt) {
                var base64 = evt.target.result;
                that.tvalue.push(base64);
            };
            reader.readAsDataURL(this.$refs.file.files[0]);
        },
        del(index) {
            this.list.splice(index, 1);
            this.tvalue.splice(index, 1);
        }
    }
};
</script>

<style lang="less" scoped>
.wrap {
    width: 100vw;
    margin: 10px 0;
    .btns {
        margin: 0 20px;
        height: 50px;
        background-color: #eee;
        position: relative;
        span {
            position: absolute;
            display: block;
            margin: auto;
            width: 25px;
            height: 25px;
            left: 0;
            right: 0;
            top: 0;
            bottom: 0;
            svg {
                width: 100%;
                height: 100%;
            }
        }
        .float-file {
            width: 100%;
            height: 100%;
            opacity: 0;
        }
    }
    .tip {
        margin: 10px 0 0 20px;
        color: #666;
    }
}
.file-list {
    width: 100vw;
    border-top: 1px solid #dbdbdb;
    li {
        display: flex;
        justify-content: space-between;
        padding: 10px 20px;
        color: #666;
        height: 50px;
        line-height: 30px;
        border-bottom: 1px solid #dbdbdb;
        .del {
            width: 70px;
            height: 30px;
            background-color: #555;
            color: #dbdbdb;
            text-align: center;
            border-radius: 15px;
        }
    }
}
</style>