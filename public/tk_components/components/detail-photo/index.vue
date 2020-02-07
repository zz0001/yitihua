<style lang="less">
    @import '../../style/variable.less';

    .tk-detail-photo {
        background: #fff;
        overflow: hidden;
        margin-left: 20px;
        margin-right: 20px;

        .tk-detail-photo-item {
            border-radius: 4px;
            float: left;
            justify-content: flex-start;
            width: calc(((100vw - 48px) / 4) - 10px);
            height: calc(((100vw - 48px) / 4) - 10px);
            background: @default_bg_color;
            margin: 6px;

            .tk-detail-photo-item-box {
                width: 100%;
                height: 100%;
                background-repeat: no-repeat;
                background-size: cover;
                border-radius: 5px;
                background-position: center center;
            }
        }

        .clearFloat {
            clear: both;
        }
    }
</style>
<template>
    <div class="tk-detail-photo">
        <div v-for="(item,index) of list"
             class="tk-detail-photo-item">
            <div @click="toBigger(index)"
                 class="tk-detail-photo-item-box"
                 :style="{'background-image':`url(${item.src})`}">
            </div>
        </div>
        <div class="clearFloat"></div>
    </div>
</template>

<script>
    export default {
        props: {
            list: {
                type: Array,
                default: () => []
            }
        },
        computed: {
            srcs() {
                var arr = [];
                this.list.forEach(item => {
                    arr.push(item.src)
                })
                return arr;
            }
        },
        methods: {
            toBigger(index) {
                this.$createPotImagePreview({
                    imgs: this.srcs,
                    initialIndex: index
                }).show()
            }
        }
    }
</script>

