<template>
    <div style="height:100%;" ref="chart">
    </div>
</template>

<script>
import echarts from 'echarts'
export default {
    props: ['data', 'type','areaStyle'],
    data() {
        return {}
    },
    watch: {
        data(newV) {
                this.init(newV)
        }
    },
    methods: {
        init(d) {
            var data=d.concat([]);
            var myChart = echarts.init(this.$refs.chart);
            var series = [];
	    var yAxis=[];
            var a = data.splice(1);
            var colorsa = ["#009688", "#5FB878",'#1E9FFF','#FFB800','#FF5722'];
            var colors=colorsa.sort(function () {
                return Math.random() - 0.5;
            });
            a.forEach((item, index) => {
                var type;
                if(typeof(this.type)=='string'){
                    type=this.type;
                }else{
                    if(this.type[index]){
                        type=this.type[index];
                    }else{
                        type=this.type[0];
                    }
                }
                yAxis.push({
                    type: 'value',
                    axisLine: {
                        lineStyle: {
                            color: colors[index]
                        }
                    },
		    splitLine:{show:false},
		    offset:index?(index*70-70):0,
                    axisLabel: {
                        fontSize:10,
                        color: "#fff",
			formatter:item.unit?('{value}'+item.unit):''
                    }
                })
                var b={
                    name: item.name,
                    type: type || 'bar',
                    barWidth: '30%',
		    yAxisIndex: index,
                    data: item.value,
                    color: colors[index] || colors[0],
                    label: {
			formatter:item.unit?('{c}'+item.unit):'',
                        normal: {
                            show: true,
                            position: 'top',
                            textStyle: {
                                color: '#fff'
                            },
                            fontSize:10
                        }
                    }
                }
                if(this.areaStyle){
                    b.areaStyle={
                        normal: {
                            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                offset: 0,
                                color: colors[index] || colors[0]
                            }, {
                                offset: 1,
                                color: (colors[index] || colors[0]) + '33'
                            }])
                        }
                    };
                }
                series.push(b)
            })
            console.log(series)
            var option = {
                tooltip: {
                    trigger: 'axis',
                    axisPointer: { // 坐标轴指示器，坐标轴触发有效
                        type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
                    }
                },
                grid: {
                    left: '3%',
                    right: '4%',
                    bottom: '3%',
                    containLabel: true
                },
                xAxis: [{
                    type: 'category',
                    data: data[0].value,
                    axisTick: {
                        color: "#fff",
                        alignWithLabel: true
                    },
                    axisLine: {
                        lineStyle: {
                            color: "#fff"
                        }
                    },
                    axisLabel: {
                        fontSize:10,
                        color: "#fff"
                    }
                }],
                yAxis:yAxis,
                series: series,
                
            };
            myChart.setOption(option);
        }
    },
    mounted() {
        if(this.data.length){
            this.init(this.data);
        }
        
    }
}
</script>

<style>

</style>
