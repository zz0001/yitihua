<template>
<div class="test">
    <tk-header :back="false">手机端组件库</tk-header>
    <div class="tips">提示：调用方法见相对项目目录./public/tk_components/example/page</div>
    <div class="scroll-wrapper">
        <tk-scroll>
            <tk-cell-one @click="poperDate">{{time?time:"点击弹出日期控件"}}</tk-cell-one>
            <tk-cell-one :key="index" :spread="true" v-for="(item,index) of [,]">
                可以折叠的单元格
                <div slot="spread">
                    <div style="padding-left:10px;">折叠信息</div>
                    <div style="padding-left:10px;">折叠信息</div>
                </div>
            </tk-cell-one>
            <tk-cell-one @click="poperBottomSelect">下弹出选择按钮组件</tk-cell-one>
            <tk-cell-one @click="poperBottom">下弹出可嵌入元素组件</tk-cell-one>
            <tk-cell-one @click="$router.push('button')">按钮</tk-cell-one>
            <tk-cell-one @click="$router.push('tip')">弹出提示</tk-cell-one>
            <tk-cell-one @click="$router.push('list')">list类组件及search搜索组件</tk-cell-one>
            <tk-cell-one @click="$router.push('sign')">sign签名组件</tk-cell-one>
            <tk-cell-one @click="$router.push('form')">form表单组件</tk-cell-one>
            <tk-cell-one @click="$router.push('menu')">menu菜单栏组件</tk-cell-one>
            <tk-cell-one @click="$router.push('poper')">poper弹出层组件</tk-cell-one>
            <tk-cell-one @click="$router.push('image')">image图片组件 (自带图片放大显示功能)</tk-cell-one>
            <tk-cell-one @click="$router.push('slide')">slide轮播组件</tk-cell-one>
            <tk-cell-one @click="$router.push('other')">其他组件</tk-cell-one>
            <tk-cell-one @click="$router.push('upload')">upload上传资源组件</tk-cell-one>
            <tk-cell-one @click="$router.push('voice')">语音听写功能</tk-cell-one>
            <tk-cell-one @click="$router.push('file')">上传文件功能</tk-cell-one>
            <tk-cell-one @click="$router.push('qrCode')">动态生成二维码功能</tk-cell-one>
        </tk-scroll>
    </div>

</div>
</template>

<script>
export default {
    data() {
        return {
            time: ''
        }
    },
    methods: {
        poperDate() {
            var that = this;
            this.$createTkDate({
                $props: {
                    sign: [{
                            startDate: "2019-12-10",
                            name: "●"
                        },
                        {
                            startDate: "2019-11-30",
                            name: "●"
                        }
                    ]
                },
                $events: {
                    confirm(time) {
                        that.time = time
                    }
                }
            }).show();
        },
        poperBottomSelect() {
            this.$createTkBottomSelect({

            }).show();
        },
        poperBottom() {
            this.$createTkPopBottom().show()
        }
    },
    mounted() {
        window.tk = this;
    }
}
</script>

<style lang="less" scoped>
.tips {
    line-height: 20px;
    font-size: 10px;
    padding: 10px;
    background: rgb(59, 133, 10);
    color: #fff;
    user-select:text;
}

.scroll-wrapper {
    height: calc(100vh - 100px);
}
</style>
