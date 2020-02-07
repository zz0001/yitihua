<template>
<div class="gundong">
        <ul v-if="ttitle&&ttitle.length" id="aj_ul">
                <li :style="{flex:flex[index]}" :key=index v-for="(item,index) of ttitle">
                        {{item}}
                </li>
        </ul>
        <div ref="conditionBox" class="scroller">
                <ul :style="{transform:`translateY(${y}px)`}" id="aj_ul_2">
                        <li @mouseover="mouseover" @mouseleave="mouseleave" @click="$emit('liClick',tindex[index])" :key=tindex[index] v-for="(item,index) of tdata">
                                <div :style="{flex:flex[idx]}" :key="idx" class="a3_div_content2" style="overflow:hidden;text-overflow:ellipsis;white-space:nowrap;"
                                        v-for="(i,idx) of item"
                                >{{i||'-------'}}</div>
                        </li>
                </ul>
        </div>
</div>
</template>

<script>
export default {
        props:{
                url:{
                        type:String,
                        default:''
                },
                data:{
                        type:Array,
                        default(){
                                return [
                                        ['-------'],
                                        ['-------'],
                                        ['-------'],
                                        ['-------'],
                                        ['-------'],
                                        ['-------'],
                                        ['-------']
                                ]
                        }
                },
                title:{
                        type:Array,
                        default(){
                                return []
                        }
                },
                flex:{
                        type:Array,
                        default(){
                                 return [1,1,1,1,1,1,1,1]
                        }
                }
        },
        data(){
                var arr=[];
                this.data.forEach((item,index)=>{
                        arr.push(index)
                }) 
                return {
                        y:0,
                        tdata:this.data,
                        tindex:arr,
                        ttitle:this.title
                }
        },
        watch:{
                title(newV){
                        this.ttitle=newV;
                },
                data(newV){
                        this.tdata=newV;
                        var arr=[]
                        newV.forEach((item,index)=>{
                                arr.push(index)
                        })
                        this.tindex=arr;
                }
        },
        beforeDestroy(){
                clearInterval(this.timer)
        },
        methods:{
                mouseover(){
                        clearInterval(this.timer)
                },
                mouseleave(){
                        this.setTime()
                },
                setTime(){
                        this.timer=setInterval(()=>{
                                this.y--;
                                if(this.y<=-42){
                                        this.tdata.push(this.tdata.shift())
                                        this.tindex.push(this.tindex.shift())
                                        this.y=0;
                                }
                        },50)
                }
        },
        mounted(){
                if(this.url){
                        this.$http.post(this.url).then(d=>{
                                this.tdata=d.data;
                                var arr=[]
                                d.data.forEach((item,index)=>{
                                        arr.push(index)
                                })
                                this.tindex=arr;
                                this.ttitle=d.title;
                        })
                }
                this.setTime();
        }
}
</script>

<style lang="less">
.gundong {
        height:100%;
        margin-top:5px;
        .scroller{
                height:calc(100% - 25px);
                margin-left:5px;
                margin-right:5px;
                overflow:hidden;
        }
        #aj_ul{
                margin-top:0;
                margin-bottom:0;
                display:flex;
                padding-left:0;
                >li{
                        font-size:13px;
                        text-align: center;
                        flex:1;
                        color:#00f5fe;
                        list-style-type: none;
                }
        }
        #aj_ul_2{
                 padding-left:0;
                >li{
                        font-size:12px;
                        display:flex;
                        cursor: pointer;
                        height:42px;
                        line-height:42px;
                        &:hover{
                                background:#1C318A;
                        }
                }
        }

        .a3_div_content2 {
                color: #ffffff;
                text-align: center;
                display: inline-block;
                width: 24%;
        }

        .a3_div_content2first {
                color: #ffffff;
                text-align: center;
                display: inline-block;
                width: 30%;
                float: left;
        }

        #a33_ul li {
                line-height: 36px;
                font-size: 24px;
                position: relative;
                height: 36px;
        }

        #a33_ul_2 li {
                line-height: 42px;
                position: relative;
                height: 42px;
        }

        #a33_ul_2 li:hover {
                background: #1C318A;
                cursor: pointer;
        }

        .a33_div_head_one {
                color: #00f5fe;
                text-align: center;
                width: 20%;
                position: absolute;
        }

        .a33_div_head_two {
                color: #00f5fe;
                text-align: center;
                width: 60%;
                position: absolute;
                left: 20%;
        }

        .a33_div_head {
                color: #00f5fe;
                text-align: center;
                width: 20%;
                position: absolute;
                left: 80%;
        }

        .a33_div_content {
                color: #ffffff;
                text-align: center;
                position: absolute;
                width: 20%;
                left: 80%;
        }

        .a33_div_content_one {
                color: #ffffff;
                text-align: center;
                position: absolute;
                width: 20%;

        }

        .a33_div_content_two {
                color: #ffffff;
                text-align: center;
                position: absolute;
                width: 60%;
                left: 20%;
        }
}
</style>
