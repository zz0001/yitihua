<template>
    <div class="tk-slide">
        <pot-slide ref="slide" :data="items" @change="changePage" :autoPlay="autoPlay" :loop="loop"
                   :showDots="showDots" :options="{allowVertical: true}">
            <pot-slide-item v-for="(item, index) in items" :key="index" @click.native="clickHandler(item, index)">
                <img :src="item.image" v-show="showImg">
                <div class="text">
                    <slot :name="index"></slot>
                </div>
            </pot-slide-item>
        </pot-slide>
    </div>
</template>

<script>
    export default {
        props: {
            items: {
                type: Array,
                default: () => [
                    {
                        image: require('./banner01.jpg')
                    },
                    {
                        image: require('./banner02.jpg')
                    },
                    {
                        image: require('./banner03.jpg')
                    }
                ]
            },
            autoPlay: {
                type: Boolean,
                default: true
            },
            loop: {
                type: Boolean,
                default: true
            },
            showDots: {
                type: Boolean,
                default: true
            },
            showImg: {
                type: Boolean,
                default: true
            }
        },
        methods: {
            changePage() {

            }
        }
    }
</script>

<style lang="less">
    .tk-slide {
        position: relative;
        width: 100%;

        .pot-slide-group {
            height: 200px;
            overflow: hidden;
        }

        .text {
            position: absolute;
            width: 100%;
            left: 10px;
            top: 140px;
            height: 40px;
            z-index: 100;
        }

        img {
            width: 100%;
        }
    }
</style>
