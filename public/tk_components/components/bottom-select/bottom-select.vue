<template>
    <transition name="tk-picker-fade">
        <popup
                class="tk-pop-bottom"
                type="picker"
                :mask="true"
                :center="false"
                :z-index="100"
                v-show="isVisible"
                @touchmove.prevent
                @mask-click="hide">
            <transition name="tk-picker-move">
                <div v-show="isVisible" class="tk-from-bottom bottom-select-box" @click.stop>
                    <div @click="itemClick(index,item)" v-for="(item,index) of data">
                        {{item.name}}
                    </div>
                    <div @click="hide">取消</div>
                </div>
            </transition>
        </popup>
    </transition>
</template>

<script>
    import popup from '../popup/popup.vue'

    export default {
        components: {
            "popup": popup
        },
        name: 'tk-bottom-select',
        props: {
            data: {
                type: Array,
                default() {
                    return [{
                        name: '选择项a',
                        value:'0'
                    }, {
                        name: '选择项b',
                        value:"0"
                    }]
                }
            }
        },
        data() {
            return {
                isVisible: false
            }
        },
        methods: {
            show() {
                this.isVisible = true;
            },
            hide() {
                this.isVisible = false;
            },
            itemClick(index, item) {
                this.hide();
                this.$emit('itemClick', index, item);
            }
        },
        mounted() {

        }
    }
</script>

<style lang="less">

    .bottom-select-box {
        position: fixed;
        bottom: 0;
        width: 100vw;
        z-index: 1000;
        background: none;
        transition: .3s all;

        > div {
            background: #fff;
            height: 50px;
            line-height: 50px;
            text-align: center;
            border-bottom: 1px solid #ddd;

            &:last-child {
                margin-top: 10px;
            }
        }
    }
</style>
