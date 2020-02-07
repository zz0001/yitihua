<template>
        <span class="bntanv num">
                {{value}}
        </span>
</template>

<script>
export default {
        props:['data','step','time'],
        data(){
                return {
                        value:0
                }
        },
        mounted(){
                this.setTime();
        },
        methods:{
                setTime(){
                        setTimeout(()=>{
                                if(this.data==this.value){
                                        return;
                                }else{
                                        this.value++;
                                        this.setTime()
                                }
                        },100)
                        
                }
        }
}
</script>

<style lang="less">
        .bntanv.num{
                display:inline-block;
                padding:4px;
                margin-left:2px;
                font-size:18px;
                text-indent:0;
                letter-spacing: 0;
                text-align: center;
                background:linear-gradient(180deg, #284fc9, #0e1782);
        }
</style>
