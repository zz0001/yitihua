<template>
    <div class="download">
        <tk-header :back="false">下载APP</tk-header>
        <div class="wrap">
            <div class="row">
                <span>请输入应用名称</span>
                <input v-model="baoming" type="text" />
            </div>
            <div class="row">
                <span>请输入服务器地址</span>
                <input v-model="fuwuqi" type="text" />
            </div>
            <div class="row">
                <span>请上传icon图标</span>
                <input type="file" ref="file" @change="inputChange" accept="image/png" />
            </div>
            <div class="row">
                <span>请上传启动页</span>
                <input type="file" ref="file2" @change="inputChange2" accept="image/png" />
            </div>
            <!-- <tk-switch v-model="switchVal"></tk-switch> -->
            <div class="img-wrap" v-if="imgShow" @click="imgShow=!imgShow">
                <div class="img-box">
                    <img :src="icon" alt />
                    <p>图标预览</p>
                </div>
                <div class="img-box">
                    <img :src="icon2" alt />
                    <p>启动页预览</p>
                </div>
            </div>
        </div>
        <tk-button @click="submit">生成apk</tk-button>
        <tk-button @click="$router.push('/download-history')">查看历史版本</tk-button>
    </div>
</template>

<script>
export default {
    data() {
        return {
            baoming: "一体化演示",
            fuwuqi: "http://10.1.163.149:8090/login",
            icon: "",
            icon2: "",
            imgShow: false
        };
    },
    methods: {
        inputChange() {
            var that = this;
            let reader = new FileReader();
            reader.onload = function(evt) {
                that.icon = evt.target.result;
            };
            reader.readAsDataURL(this.$refs.file.files[0]);

            this.imgShow = true;
        },
        inputChange2() {
            var that = this;
            let reader = new FileReader();
            reader.onload = function(evt) {
                that.icon2 = evt.target.result;
            };
            reader.readAsDataURL(this.$refs.file2.files[0]);
            this.imgShow = true;
        },
        submit() {
            if (!this.baoming || !this.fuwuqi || !this.icon || !this.icon2) {
                var signs;
                signs = this.$createSignFail({
                    $props: {
                        content: "存在未填项，请全部填写后再打包"
                    }
                }).show();
                setTimeout(() => {
                    signs.hide();
                }, 2000);
            } else {
                this.$http
                    .post("/server/download", {
                        baoming: this.baoming,
                        fuwuqi: this.fuwuqi,
                        icon: this.icon,
                        icon2: this.icon2
                    })
                    .then(d => {
                        if (d.code == 0) {
                            location.href = d.path;
                        } else {
                            console.log(12);
                        }
                    });
            }
        }
    },
    mounted() {}
};
</script>

<style lang="less" scoped>
.download {
    width: 100vw;
    height: 100vh;
    .wrap {
        width: 100vw;
        height: calc(100vh - 194px);
        .row {
            display: flex;
            justify-content: space-between;
            text-align: left;
            height: 50px;
            line-height: 50px;
            border-bottom: 1px solid #dbdbdb;
            padding: 0 20px;
            span {
                flex: 3.6;
                color: #666;
            }
            input {
                flex: 6.3;
                width: 30%;
                border: 1px solid #ddd;
                border-radius: 5px;
                height: 30px;
                line-height: 30px;
                margin-top: 10px;
                padding-left: 5px;
            }
        }
        .img-wrap {
            width: 100%;
            height: 200px;
            line-height: 200px;
            text-align: center;
            display: flex;
            justify-content: space-evenly;
            p {
                line-height: 0px;
            }
        }
    }
}
</style>