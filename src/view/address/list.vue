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
                searchVal:"",
                list:[]
            }
        },  
        components:{
            bar:()=>import('../../component/bar.vue')
        },
        mounted(){
            let obj={para:"userId="+window.localStorage.userId};
           let url= '/wgh/app/app_contactList3.action';
             this.$http.post(url,obj).then(d=>{
                 this.list=d.datas.map(item=>{
                     return Object.assign({
                        id:item.dept_name,
                        name:item.display_name
                    },item)
                 })
             })
        },
        methods:{
            liClick(data){
                this.$router.push({
                    path:'/address-detail',
                    query:{
                        data
                    }
                })
            }
        }
    }
</script>

<style lang="less" scoped>

</style>