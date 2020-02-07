<template>
    <div class="gauge" ref="chart">
    </div>
</template>
<script>
import echarts from 'echarts'
export default {
    props:['data'],
    watch:{
        data(newV){
            this.init(newV)
        }
    },
    methods:{
        init(data){
            var myChart= echarts.init(this.$refs.chart);
            var option = {
                tooltip : {
                    formatter: "{a} <br/>{b} : {c}%"
                },
                radius:'80%',
                series: [
                    {
                        name: '业务指标',
                        type: 'gauge',
                        radius:'100%',
                        title:{color:'#fff'},
                        detail: {formatter:'{value}%'},
                        axisLabel:{show:true,color:'#fff'},
                        data: [{value: data||50, name: '完成率'}]
                    }
                ]
            };
            myChart.setOption(option);
        }
    },
    mounted(){
        this.init(this.data)
    }
}
</script>
<style lang="less">
    .gauge{
        height:100%;
    }
</style>