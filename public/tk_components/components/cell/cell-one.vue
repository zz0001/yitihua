<style lang="less">
    @import '../../style/variable';

    .tk-cell-one {
        margin-top: -1px;
        box-sizing: border-box;
        border-top: 1px solid @split-color;
        border-bottom: 1px solid @split-color;
        background: white;

        &.menu {
            margin: 5px;
            text-align: center;
            width: calc(25% - 10px);
            float: left;
            font-size: 14px;
            color: #636060;

            .tk-cell-one-box {
                border-bottom: none;
                padding: 0;
            }

            svg {
                display: none;
            }
        }

        .spread {
            overflow: hidden;
            // padding:13px;
            // padding-top:20px;
            // padding-bottom:20px;
            line-height: 30px;
            color: #999;
            height: 0;
            font-size: 14px;
            transition: .3s all;
            opacity: 0;
            padding-left: 0px;
            padding-right: 0px;
            // padding-top:-30px;
            // padding-bottom:-30px;
            &.active {
                opacity: 1;
                height: auto;
                padding-top: 20px;
                padding-bottom: 20px;

                > div {
                    margin-top: -20px;
                    margin-bottom: -20px;
                }
            }
        }

        .tk-cell-one-box {
            line-height: @common-height;
            // background:#fff;
            padding-left: @common-padding;
            position: relative;
            padding-right: calc(@common-padding + 20px);
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
        }

        svg {
            right: 20px;
            top: 20px;
            width: 10px;
            height: 10px;
            position: absolute;
            transition: .3s all;

            &.active {
                transform: rotateZ(90deg);
            }
        }

        .filter {
            color: rgb(211, 94, 27);
        }
    }
</style>
<template>
    <div class="tk-cell-one" :class="type" v-if="data.indexOf(filter)!=-1">
        <div @click="cellClick" class="tk-cell-one-box">
            <slot name="icon"></slot>
            <span v-if="data&&!filter" v-html="data"></span>
            <template v-if="data&&filter" v-for="(item,index) of data.split(filter)">
                <span v-html="item"></span>
                <span v-html="filter" class="filter" v-if="index!=(data.split(filter).length-1)"></span>
            </template>
            <div>
                <slot class="tk-cell-one-container"></slot>
            </div>

            <svg v-if="rightIcon" :class="{active}" t="1558487314770" class="icon" style="" viewBox="0 0 1024 1024"
                 version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1965" xmlns:xlink="http://www.w3.org/1999/xlink"
                 width="50" height="50">
                <path d="M274.550725 0l512 512-512 512-37.10145-34.628019 477.371981-477.371981-477.371981-477.371981z"
                      p-id="1966"></path>
            </svg>
        </div>

        <div v-if="spread" class="spread" :class="{active:spread&&active}">
            <div>
                <slot name="spread">

                </slot>
            </div>

        </div>
    </div>
</template>

<script>
    export default {
        props: {
            rightIcon: {
                default: true,
                type: Boolean
            },
            spread: {
                type: Boolean,
                default: false
            },
            type: {
                type: String,
                default: ''
            },
            data: {
                type: String,
                default: ''
            },
            filter: {
                type: String,
                default: ''
            }
        },
        data() {
            return {
                active: false
            }
        },
        methods: {
            touchStart(e) {
                // click(e);
            },
            cellClick() {

                if (!this.spread) {
                    this.$emit('click');
                } else {
                    this.active = !this.active;
                }
            }
        }
    }
</script>

