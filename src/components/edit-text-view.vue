<template>
    <div class="edit-text-view">
        <div class="edit-text-view-item">
            <div class="edit-text-view-item-left">
                <div class="edit-text-view-item-title">{{title}}</div>
                <div class="edit-text-view-item-require" v-show="required">&nbsp*</div>
            </div>
            <div class="edit-text-view-item-right">
                <div class="edit-text-view-item-content-choose"
                     :style="{color: (chooseContent === ''|| chooseContent === '请选择') ? '#919191' : '#333333'}"
                     @click="onClickContent" v-show="!editable">
                    {{(chooseContent === ''|| chooseContent === '请选择') ? chooseHint : chooseContent}}
                </div>
                <input class="edit-text-view-item-content-edit" :placeholder="inputHint" v-show="editable" v-model="inputContent"/>
                <img class="edit-text-view-item-arrow" src="/static/img/arrow_rh.png" v-show="!hideArrow"/>
            </div>
        </div>
        <div class="grey-split-line" v-show="!hideSplitLine"></div>
    </div>
</template>

<script>
    export default {
        name: "edit-text-view",
        props: {
            title: {
                default: '这里是标题'
            },
            required: {
                default: false
            },
            editable: {
                default: true
            },
            chooseContent: {
                default: ''
            },
            chooseHint: {
                default: '请选择'
            },
            inputHint: {
                default: '请填写'
            },
            hideArrow: {
                default: true
            },
            hideSplitLine: {
                default: false
            },
            content: {

            }
        },
        data() {
            return {
                inputContent: this.content
            }
        },
        methods: {
            onClickContent() {
               return this.$emit('onClickContent');
            }
        }
    }
</script>

<style lang="less" scoped>
    @import '../style/less-variable';

    .edit-text-view-item {
        height: 48px;
        display: flex;
        flex-flow: row nowrap;
        justify-content: space-between;
        width: 100%;
        padding: @padding-height @padding-width;
        background: white;

        .edit-text-view-item-left {
            display: flex;
            flex-flow: row nowrap;
            align-items: center;
            justify-content: start;

            .edit-text-view-item-title {
                font-size: @title-font;
                color: @title-color;
            }

            .edit-text-view-item-require {
                font-size: @title-font;
                color: red;
            }
        }

        .edit-text-view-item-right {
            display: flex;
            flex-flow: row nowrap;
            align-items: center;
            justify-content: start;

            .edit-text-view-item-content-choose {
                font-size: @title-font;
                text-align: right;
            }

            .edit-text-view-item-content-edit {
                font-size: @title-font;
                color: @content-color;
                text-align: right;
                width: 9rem;
            }

            .edit-text-view-item-arrow {
                width: 0.4rem;
                height: 0.4rem;
                padding-left: 0.1rem;
            }
        }
    }

    .grey-split-line {
        background: @grey-split-line;
        width: 100%;
        height: 1px;
    }
</style>
