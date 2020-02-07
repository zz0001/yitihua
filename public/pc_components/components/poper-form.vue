<template>
    <div v-if="show" class="poper-form">
        <div @click="show=false" class="shade"></div>
        <div class="poper-form-container">
            <div :key="index" v-for="(item,index) of data">
                {{item.name}}
                <input v-model="item.value"/>
            </div>
            <div @click="confirm" class="btn1">确定</div>
        </div>
        
    </div>
</template>

<script>
export default {
    name:'poper-form',
    data(){
        return {
            show:true
        }
    },
    methods:{
        hide(){
            this.show=false;
        },
        confirm(){
            this.$emit('confirm',this.data)
        }
    },
    props:{
        data:{
            type:Array,
            default(){
                return [
                    {
                        name:'名称',
                        value:''
                    }
                ]
            }
        }
    }
}
</script>

<style lang="less">
    .poper-form{
        width:100vw;
        height:100vh;
        position:fixed;
        left:0;
        top:0;
        .shade{
            background:rgba(0, 0, 0, 0.5);
            width:100vw;
            height:100vh;
            position:fixed;
            left:0;
            top:0;
        }
        .poper-form-container{
            width:400px;
            height:500px;
            background:#fff;
            border:1px solid #ddd;
            position:absolute;
            left:0;
            right:0;
            top:0;
            bottom:0;
            margin:auto;
        }
    }
</style>
