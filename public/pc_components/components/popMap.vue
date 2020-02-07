<template>
        <div v-if="showd" class="popMap">
                <img @click="smallScreen" class="icon-right-top" src="../img/suoxiao.png" alt="">
                <grid-map :noFullScreen="false"></grid-map>
        </div>
       
</template>

<script>
export default {
        name:'pop-map',
        data(){
                return {
                        showd:false
                }
        },
        components:{
                gridMap:()=>import('../page/grid-map.vue'),
                poper:()=>import('./poper.vue')
        },
        methods:{
                smallScreen(){
                        this.showd=false;
                },
                show(){
                        this.showd=true;
                }
        }
}
</script>

<style lang="less">
        .popMap{
                position:fixed;
                top:0;
                left:0;
                width:1920px;
                height:1080px;
        }
</style>
