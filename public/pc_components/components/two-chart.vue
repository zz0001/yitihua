<template>
<div ref="chart" class="two-chart">'

</div>
</template>

<script>
import echarts from 'echarts'
export default {
        props: {
                data: {
                        type: Array,
                        default () {
                                return []
                        }
                }
        },
        methods:{
                setOption(newV){
                        var myChart= echarts.init(this.$refs.chart);
                        var data_x=[];
                        var data_y=[];
                        var vv=[];
                        newV.forEach(item=>{
                                data_x.push(item.name)
                                data_y.push(item.value)
                                vv.push(
                                       {
                                                name: item.name,
                                                icon: 'square',
                                                textStyle: {
                                                        color: '#819EDA',
                                                        fontSize: 20
                                                }
                                        } 
                                )
                        })
                        var option = {
                                backgroundColor: 'rgba(0,0,0,0)',
                                legend: {
                                        orient: 'vertical',
                                        bottom: 50,
                                        right: "22%",
                                        top:"20%",
                                        data: vv
                                },
                                color: ['#3AA7F9', '#F56C7C', '#FD9A36', '#EBE028', '#31CE65', '#20DACD', '#D671F5', '#F430E8', '#8A31FB'],
                                series: [{
                                        name: '事项名',
                                        type: 'pie',
                                        radius: ['40%', '55%'],
                                        center: ['30%', '50%'],
                                        data:newV,
                                        label: {
                                                normal: {
                                                        show: true,
                                                        formatter: '{d}%',
                                                        fontSize: 14
                                                },

                                        },
                                        labelLine: {
                                                show: false
                                        },
                                        itemStyle: {
                                                emphasis: {
                                                        shadowBlur: 10,
                                                        shadowOffsetX: 0,
                                                        shadowColor: 'rgba(0, 0, 0, 0.5)'
                                                }
                                        }
                                }]
                        };
                        myChart.setOption(option);
                }
        },
        watch: {
                data(newV) {
                        this.setOption(newV)
                }
        },
        mounted(){
                this.setOption(this.data);
        }
}
</script>

<style lang="less">
        .two-chart{
                height:100%;
        }
</style>
