<template>
        <poper :noclose="true">
                <img :style="{transform:`scale(${scale})`}" @mousewheel="scrollA" :src="src" alt="">
        </poper>
</template>

<script>
export default {
        props:['src'],
        components:{
                poper:()=>import('./poper.vue')
        },
        name:'pc-biger-image',
        data(){
                return {
                        y:0
                }
        },
        computed:{
                scale(){
                        var y=this.y;
                        return 1+y/3000
                }
        },
        methods:{
                scrollA(e){
                        if(Math.abs(this.y)<=1000){
                                this.y-=e.deltaY
                        }else if(this.y<0){
                                this.y=-1000
                        }else if(this.y>0){
                                this.y=1000
                        }
                }
        },
        mounted(){
        }
}
</script>

<style lang="less">
        .pc-biger-image{
                position: absolute;
                width:100%;
                top:0;
                left:0;
                height:100%;
                .shade{
                        height:100%;
                        width:100%;
                        background:rgba(0,0,0,.5);
                }
                img{
                         position: absolute;
                         left:0;
                         right:0;
                         top:0;
                         bottom: 0;
                         margin:auto;
                        width:1000px;
                }
        }
</style>
