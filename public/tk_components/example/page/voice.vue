<template>
    <div>
        <tk-header>语音识别</tk-header>
        <tk-textarea v-model="a"></tk-textarea>
    </div>
</template>

<script>
export default {
   data(){
       return {
            a:''
       }
      
   },
   watch:{
       a(v){console.log(v)}
   }
};
</script>

<style lang="less" scoped>

</style>