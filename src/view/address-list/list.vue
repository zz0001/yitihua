<template>
    <div class="address-list">
         <tk-header :back="false">
            通讯录
        </tk-header>
        <tk-search v-model="searchVal"></tk-search>
        <tk-address-list @liClick="liClick" :filter="searchVal" v-model="list"></tk-address-list>
        <bar :active="2"/>
    </div>
</template>

<script>
    export default {
        data(){
            return {
                list:[]
            }
        },  
        components:{
            bar:()=>import('../../component/bar.vue')
        },
        mounted(){
             this.list
        }
    }
</script>

<style lang="less" scoped>

</style>