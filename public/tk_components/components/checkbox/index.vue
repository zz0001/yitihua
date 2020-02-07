<template>
        <div @click="tvalue=!tvalue" :class="{active:tvalue}" class="tk-check-box">
               
        </div>
</template>

<script>
export default {
        props:['value'],
        data(){
                return {
                        tvalue:this.value
                }
        },
        watch:{
                value(newV){
                        this.tvalue=newV
                },
                tvalue(newV){
                        this.$emit('input',newV)
                }
        }
}
</script>

<style lang="less">
        .tk-check-box{
                width:20px;
                height:20px;
                border:1px solid rgb(21, 224, 48);
                border-radius:2px;
                transition:.3s all;
                box-sizing: border-box;
                &.active{
                         border:none;
                        background:rgb(21, 224, 48);
                }
        }
</style>
