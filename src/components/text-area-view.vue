<template>
    <div>
        <div class="text-area-view-wrapper">
            <div class="text-area-view-head">
                <div class="text-area-view-title-wrapper">
                    <div class="text-area-view-title"
                    :class="{dark:readonly == 'readonly'}"
                    >{{title}}</div>
                    <div class="text-area-view-required" v-show="required">&nbsp*</div>
                </div>
                <div class="text-area-view-number" v-show="!readonly&&showLength">{{contentLength}}/{{maxLength}}</div>
            </div>

            <textarea class="text-area-view-content" :class="{dark:readonly == 'readonly'}" :placeholder="readonly?'':hint" :maxlength="maxLength"
                      v-model="inputContent" :rows="rows" :readonly="readonly"></textarea>
        </div>
        <div class="grey-split-line" v-show="!hideSplitLine"></div>
    </div>

</template>

<script>
    export default {
        name: "text-area-view",
        props: {
            title: {
                default: '标题'
            },
            required: {
                default: false
            },
            maxLength: {
                default: 1000
            },
            showLength: {
                default: true
            },
            hint: {
                default: '请输入'
            },
            rows: {
                default: 4
            },
            hideSplitLine: {
                default: true
            },
            readonly: {
                default: false
            },
            content: {
                default: ''
            }
        },
        data() {
            return {
                inputContent: this.content
            }
        },
        computed: {
            contentLength: function () {
                return this.inputContent.length;
            }
        }
    }
</script>

<style lang="less" scoped>
    @import '../style/less-variable';

    .text-area-view-wrapper {
        display: flex;
        flex-flow: column nowrap;
        justify-content: center;
        align-items: center;
        width: 100%;
        padding: @padding-height @padding-width;
        background-color: white;

        .text-area-view-head {
            display: flex;
            flex-flow: row nowrap;
            justify-content: space-between;
            width: 100%;

            .text-area-view-title-wrapper {
                display: flex;
                flex-flow: row nowrap;
                align-items: center;
                justify-content: start;

                .text-area-view-title {
                    font-size: 16px;
                    color: @title-color;
                    &.dark{
                        color: #999999;
                    }
                }


                .text-area-view-required {
                    font-size: @title-font;
                    color: red;
                }
            }

            .text-area-view-number {
                font-size: @subtitle-font;
                color: #999999;
            }
        }

        .text-area-view-content {
            width: 100%;
            font-size: 16px;
            color: @content-color;
            text-indent: 2em;
            margin-top: 10px;
            -webkit-select-user:auto;
            -webkit-user-select: auto;
            /*&.dark{*/
                /*color: #999999;*/
            /*}*/

        }
    }

    .grey-split-line {
        background: @grey-split-line;
        width: 100%;
        height: 1px;
    }
</style>
