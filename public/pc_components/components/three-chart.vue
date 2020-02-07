<template>
    <div ref="threeChart" class="three-chart">
    </div>
</template>

<script>
import echarts from 'echarts'
export default {
    props: {
        type: {
            type: String,
            default: 'line'
        },
        data: {
            type: Object,
            default () {
                return {
                    x: {
                        name: '时间',
                        value: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
                    },
                    y: {
                        name: '最高温度',
                        value: [11, 11, 15, 13, 12, 13, 10]
                    },
                    z: {
                        name: '最低温度',
                        value: [1, -2, 2, 5, 3, 2, 0]
                    },
                    unit: '℃'
                }
            }
        }
    },
    methods: {
        setOption() {
            this.myChart = echarts.init(this.$refs.threeChart);
            this.data.y = this.data.y || {};
            this.data.x = this.data.x || {};
            this.data.z = this.data.z || {};
            var option = {
                tooltip: {
                    trigger: 'axis',
                    axisPointer: {
                        lineStyle: {
                            color: '#57617B'
                        }
                    }
                },
                grid: {
                    left: '15%',
                    right: '5%',
                },
                legend: {
                    icon: 'rect',
                    itemWidth: 14,
                    itemHeight: 5,
                    itemGap: 13,
                    data: [this.data.y.name, this.data.z.name],
                    right: '4%',
                    textStyle: {
                        fontSize: 16,
                        color: '#F1F1F3'
                    }
                },
                xAxis: {
                    type: 'category',
                    axisLabel: {
                        color: '#88CBF6',
                        fontSize: 16
                    },
                    axisLine: {
                        lineStyle: {
                            color:'#88CBF6'
                        }
                    },
                    data: this.data.x.value
                },
                yAxis: {
                    type: 'value',
                    axisLabel: {
                        formatter: '{value} ' + this.data.unit,
                        interval: 3,
                        color: '#88CBF6'
                    },
                    splitLine:{
                        lineStyle:{
                            color:['#88CBF655']
                        }
                    },
                    axisLine: {
                        lineStyle: {
                            color: '#88CBF6'
                        }
                    }
                },
                series: [{
                        name: this.data.y.name,
                        type: this.type,
                        data: this.data.y.value,
                        label:{
                                show:true,
                                color:'#fff'
                        },
                        itemStyle: {
                            normal: {
                                color: '#3AA7F9'
                            }
                        }
                    },
                    {
                        name: this.data.z.name,
                        type: this.type,
                        data: this.data.z.value,
                        label:{
                                show:true,
                                color:'#fff'
                        },
                        itemStyle: {
                            normal: {
                                color: '#FD9A36'
                            }
                        }
                    }
                ]
            }
            this.myChart.setOption(option)
        }
    },
    mounted() {
        this.setOption();
    },
    watch: {
        data(newV) {
            this.setOption();
        }
    }

}
</script>

<style lang="less">
.three-chart {
    height: 100%;
}
</style>
