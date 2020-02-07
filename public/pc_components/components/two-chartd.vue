<template>
<div style="height:100%;" ref="chartBox"></div>
</template>

<script>
export default {
        props: ['url'],
        data() {
                return {
                        option: {
                                xAxis: {
                                        axisLabel: {
                                                interval: 0,
                                                rotate: 40
                                        }
                                }
                        },
                        chartData: [{
                                name: '入党积极分子',
                                value: 180
                        }, {
                                name: '转正党员',
                                value: 120
                        }],
                        types: ['zhuzhuangtu2'],
                        active: 0
                }
        },
        beforeDestroy() {
                clearInterval(this.timer)
        },
        methods: {
                setTime(modules) {
                        var runtime = () => {
                                modules[this.types[this.active]](this.$refs.chartBox, this.chartData, '人')
                                this.active++;
                                if (this.active >= this.types.length) {
                                        this.active = 0
                                }
                        }
                        runtime()
                        this.timer = setInterval(runtime, 4000)
                }
        },
        mounted() {
                this.$http.post(this.url).then(d => {
                        this.chartData = d.data;
                        import('@/js/echarts_ku.js').then(modules => {
                                this.setTime(modules)
                        })
                })
        }
}
</script>

<style>

</style>
