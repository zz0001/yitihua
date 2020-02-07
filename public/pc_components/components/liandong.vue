<template>
<div class="site_list_main" id="site_list_main" v-if="isShow">
    <div class="site_r_bg1"></div>
    <div class="site_r_bg2"></div>
    <div class="site_r_bg3"></div>
    <div class="site_r1">
        <div class="c1">省级：</div>
        <div class="c2 c_list1"><a @click="$emit('shenClick')" data="1">江苏省</a></div>
    </div>
    <div class="site_r2">
        <div class="c1">市级：</div>
        <div class="c2 c_list2">
            <a :class="{active:shijiAct==index}" v-for="(item,index) of shiji" @click="shijiAct=index,$emit('shijiClick',item,index)" :title="item.name">{{item.name}}</a>
        </div>
    </div>
    <div class="site_r3">
        <div class="c1">县(市、区)：</div>
        <div class="c2">
            <!--淮安市区县-->
            <div class="c_list3" style="display: block;">
                <a :class="{active:xianAct==index}" @click="xianAct=index,$emit('xianClick',item,index)" v-for="(item,index) of xian" :title="item.name">{{item.name}}</a>
            </div>

        </div>
    </div>
    <div class="site_r4">
        <div class="c1">乡镇街道：</div>
        <div class="c2">
            <!--南京市乡镇-->
            <div class="cccc">
                <!--玄武区乡镇-->
                <div class="c_list4">
                    <a :class="{active:jieAct==index}" @click="jieAct=index,$emit('jieClick',item,index)" v-for="(item,index) of jie"  :title="item.name" >{{item.name}}</a>
                </div>
            </div>

        </div>
    </div>
</div>
</template>

<script>
export default {
    name:'liandong',
    
    props: {
        shiji: {
            type: Array,
            default () {
                return [{
                    name: 'a',
                    id: 'a'
                }, {
                    name: 'b',
                    id: 'b'
                }]
            }
        },
        xian: {
            type: Array,
            default () {
                return [{
                    name: 'a',
                    id: 'aa'
                }, {
                    name: 'b',
                    id: 'bb'
                }]
            }
        },
        jie: {
            type: Array,
            default () {
                return [{
                    name: 'c',
                    id: 'cc'
                }, {
                    name: 'd',
                    id: 'dd'
                }]
            }
        }
    },
    data() {
        return {
            shijiAct:-1,
            xianAct:-1,
            jieAct:-1,
            isShow:true
        }
    },
    mounted() {
        
    },
    methods:{
        show(){
            this.isShow=true;
        },
        hide(){
            this.isShow=false;
        },
    }
}
</script>

<style lang="less" scoped>
.site_list_main {
    /* display: none; */
    width: 1220px;
    height: auto;
    padding-top: 25px;
    padding-bottom: 15px;
    position: absolute;
    top: 35px;
    left: 10px;

}

.site_list_main a:hover,
.site_list_main a.active {
    background-color: #4178be;
    cursor: pointer;
    color: #fff;
}

.site_r_bg1 {
    width: 1220px;
    height: 25px;
    position: absolute;
    top: 0px;
    left: 0px;
    background: url(http://www.jszwfw.gov.cn/picture/79/1910200124140194217.png) top no-repeat;
}

.site_r_bg2 {
    width: 1220px;
    height: auto;
    position: absolute;
    top: 25px;
    bottom: 10px;
    background: url(http://www.jszwfw.gov.cn/picture/79/1909231626429236710.png) top repeat-y;
}

.site_r_bg3 {
    width: 1220px;
    height: 10px;
    position: absolute;
    bottom: 0px;
    left: 0px;
    background: url(http://www.jszwfw.gov.cn/picture/79/1909231626429428016.png) bottom no-repeat;
}

.site_r1,
.site_r2,
.site_r3,
.site_r4 {
    width: 1100px;
    height: auto;
    min-height: 45px;
    margin: 0 auto;
    padding: 10px 0px 10px 95px;
    overflow: hidden;
    position: relative;
    border-bottom: 1px dashed #d4d5d9;
}

.site_list_main .c1 {
    width: 95px;
    font-weight: bold;
    height: 35px;
    position: absolute;
    top: 10px;
    left: 0px;
    font-size: 15px;
    line-height: 35px;
    color: #4178be;
    text-align: right;
}

.site_list_main .c2 {
    height: auto;
    overflow: hidden;
}

.c_list3,
.c_list4 {
    height: auto;
    overflow: hidden;
}

.site_list_main .c2 a {
    display: block;
    float: left;
    padding: 0px 10px;
    margin-left: 5px;
    margin-right: 5px;
    font-size: 15px;
    line-height: 35px;
}
</style>
