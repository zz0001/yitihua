<template>
<div ref="cascade" id="tk-cascade" class="tk-cascade">
    <slot></slot>
</div>
</template>

<script>
import MobileSelect from '../../modules/mobileSelect.js';
export default {
    props: ['data'],
    watch: {
        data(newV) {
            this.init(newV);
        }
    },
    methods: {
        init(data) {
            var mobileSelect4 = new MobileSelect({
                trigger: this.$refs.cascade,
                title: '地区选择',
                wheels: [{
                    data: this.data || [{
                            id: '1',
                            value: '附近',
                            childs: [{
                                    id: '1',
                                    value: '1000米'
                                },
                                {
                                    id: '2',
                                    value: '2000米'
                                },
                                {
                                    id: '3',
                                    value: '3000米'
                                },
                                {
                                    id: '4',
                                    value: '5000米'
                                },
                                {
                                    id: '5',
                                    value: '10000米'
                                }
                            ]
                        },
                        {
                            id: '2',
                            value: '上城区'
                        },
                        {
                            id: '3',
                            value: '下城区'
                        },
                        {
                            id: '4',
                            value: '江干区'
                        },
                        {
                            id: '5',
                            value: '拱墅区'
                        },
                        {
                            id: '6',
                            value: '西湖区'
                        }
                    ]
                }],
                transitionEnd: (indexArr, data) => {
                    this.$emit('transitionEnd', indexArr, data)
                },
                callback: function (indexArr, data) {
                    this.$emit('callback', indexArr, data)
                }
            });
        }
    },
    mounted() {
        this.init(this.data)
    }
}
</script>

<style lang="less" scoped>
.tk-cascade {
    height: 50px;
}
</style>
