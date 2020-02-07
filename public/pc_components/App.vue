<template>
<div id="application">
    
    <div style="position:relative;">
        <tk-button @click='liandong'></tk-button>
    </div>
</div>
</template>

<script>
import Vue from 'vue'
export default {
    data() {
        return {
            a: [{
                "name": "年",
                "value": [2017, 2018, 2019]
            }, {
                "name": "一般公共预算收入",
                "unit": "万元",
                "value": [200, 200, 633]
            }, {
                "name": "一般公共预算收入",
                "unit": "万元",
                "value": [200, 200, 633]
            }],
            atype: `["bar","line"]`,
            b: [{
                "name": "a",
                "value": "/static/img/djylSlider/dj_slider1.jpg"
            }, {
                "name": "b",
                "value": "/static/img/djylSlider/dj_slider2.jpg"
            }, {
                "name": "c",
                "value": "/static/img/djylSlider/dj_slider3.jpg"
            }, {
                "name": "d",
                "value": "/static/img/djylSlider/dj_slider4.jpg"
            }],
            c: `[
                               ["aaaaaa","bbbbbb","cccccc"],
                               ["aaaaaa","bbbbbb","cccccc"],
                               ["aaaaaa","bbbbbb","cccccc"],
                               ["aaaaaa","bbbbbb","cccccc"],
                               ["aaaaaa","bbbbbb","cccccc"],
                               ["aaaaaa","bbbbbb","cccccc"],
                               ["aaaaaa","bbbbbb","cccccc"]
                       ]`,
            ctitle: `["aaaaaa","bbbbbb","cccccc"]`,
            d: `<pc-box title="pc-slide使用方法">
                              <pc-chartb :type="['bar','line']" :data='[{
                                        "name": "年",
                                        "value": [2017, 2018, 2019]
                                }, {
                                        "name": "一般公共预算收入",
                                        "unit": "万元",
                                        "value": [200, 200,633]
                                },{
                                        "name": "一般公共预算收入",
                                        "unit": "万元",
                                        "value": [200, 200,633]
                                }]'></pc-chartb>
                      </pc-box>`
        }
    },
    watch: {
        d(newV) {
            this.init(newV)
        }
    },
    methods: {
        liandong(){
            var xian=[{
                        name: 'a',
                        id: 'aa'
                    }, {
                        name: 'b',
                        id: 'bb'
                    }]
            var poper=this.$createLiandong({
                $props:{
                    shiji:[{
                        name: 'a',
                        id: 'a'
                    }, {
                        name: 'b',
                        id: 'b'
                    }],
                    xian:xian
                },
                $events:{
                    shijiClick(){
                        poper.xian=[{
                            name: 'b',
                            id: 'bb'
                        }]
                    }
                }
            })
        },
        poperJSONEditor(d, name) {
            var that = this;
            
            this.$createJSONEditor({
                $props: {
                    value: d
                },
                $events: {
                    success(data) {
                        that[name] = JSON.parse(data);
                    }
                }
            })
        },
        init(data) {
        }
    },
    mounted() {
        this.init(this.d);
    }
}
</script>

<style lang="less">
body {
    margin: 0;
    background: #000;
}

#application {
    display: flex;
    flex-wrap: wrap;

    .tk-button {
            padding-left:20px;
            padding-right:20px;
        width: auto;
        height: 30px;
        line-height: 30px;
    }

    .ibox {
        margin-bottom: 10px;

        .view {
            border: 1px solid #ddd;
            width: calc(50vw);
        }

        textarea {
            width: 50vw;
        }

        width:100%;
        margin-top:250px;
        color:#fff;
        display:flex;
    }

    textarea {
        width: 32vw;
    }

    p {
        color: #fff;
    }

    >div {

        width: 32vw;
        margin-top: 5px;
        height: 400px;

        .box {
            height: 200px;
            background-size: 100% 100%;
            position: static;
        }
    }
}
</style>
