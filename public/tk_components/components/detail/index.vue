<style lang="less">
    @import '../../style/variable';

    .tkn-detail {
        background: white;
        width: auto;
        margin-top: 5px;
        margin-bottom: 5px;
        box-sizing: border-box;

        .list:not(:last-child) {
            border-bottom: 1px solid @split-color;
        }

        .list {
            font-size: 17px;
            height: @common-height;
            display: flex;
            line-height: @common-height;
            padding: 0 @common-padding;
            box-sizing: border-box;

            .key {
                flex: 3.6;
                text-align: left;
                color: @detail-title-color;
            }

            .value {
                flex: 6.5;
                text-align: left;
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
                color: @detail-content-color;
            }

            .icon {
                width: 20px;
                line-height: @common-height;
                height: @common-height;
                font-size: 12px;
                text-align: center;

                &::before {
                    transition: .3s all;
                    display: block;
                }

                &.active {
                    &::before {
                        transform: rotateZ(90deg);
                    }
                }
            }
        }

        .wrap {
            overflow: hidden;
            display: none;
            padding: 13px;
            padding-top: 20px;
            padding-bottom: 20px;
            line-height: 30px;
            color: #999;
            font-size: 14px;

            &.active {
                display: block;
            }
        }
    }
</style>
<template>
    <div class="tkn-detail">
        <template v-for="(item,index) of list">
            <div :key="index" @click="item_click(item,index)" class="list">
                <div v-html="item.key" class="key"></div>
                <div v-html="item.value" class="value"></div>
                <div v-if="item.detail||item.value.length>len" :class="{active:actives.indexOf(index)!=-1}"
                     class="icon glyphicon glyphicon-menu-right"></div>
            </div>
            <ul v-html="item.detail||item.value" :class="{active:actives.indexOf(index)!=-1}" class="wrap" v-if="item.detail||item.value.length>len">
                
            </ul>
        </template>
    </div>
</template>

<script>
    export default {
        name: 'tk-detail',
        data() {
            return {
                actives: [],
                len:20
            }
        },
        methods: {
            item_click(item, index) {
                if (item.detail||item.value.length>this.len) {
                    console.log(index);
                    var i = this.actives.indexOf(index);
                    console.log(i);
                    if (i == -1) {
                        this.actives.push(index)
                    } else {
                        this.actives.splice(i, 1);
                    }
                    console.log(this.actives)
                }
                item.click && item.click.call(this)
            }
        },
        props: {
            list: {
                type: Array,
                default() {
                    return [{
                        key: 'key',
                        value: 'value'
                    }]
                }
            }
        }
    }
</script>

