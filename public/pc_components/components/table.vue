<template>
    <div class="pc-table">
        <div class="row title">
            <div :style="{width:width[index]+'px'}" v-for="(item,index) of title" class="col">
                {{item}}
            </div>
            <div class="col">
                操作
            </div>
        </div>
        <div v-for="(item,index) of data" class="row">
            <div :style="{width:width[idx]+'px'}" v-for="(i,idx) of item" class="col">
                {{i}}
            </div>
            <div style="display:flex;width:200px;" class="col">
                <div v-for="(i,idx) of buttons" @click="buttonClick(idx,index)" style="flex:1;" :class="['btn'+(idx+1)]">
                    {{i}}
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            width:this.colWidth
        }
    },
    watch:{
        colWidth(newV){
            this.width=newV
        }
    },
    methods:{
        buttonClick(idx,index){
            this.$emit('buttonClick',idx,index)
        }
    },
    props:{
        title:{
            type:Array,
            default(){
                return ['a','b','c','d']
            }
        },
        buttons:{
            type:Array,
            default(){
                return ['编辑','删除']
            }
        },
        colWidth:{
            type:Array,
            default(){
                return [100,100,100,100]
            }
        },
        data:{
            type:Array,
            default(){
                return [[
                    'ab','bc','cd','da'
                ],[
                    'aa','bb','cc','dd'
                ],[
                    'ac','bd','ca','db'
                ]]
            }
        }
    }
}
</script>

<style lang="less">
    @border:1px solid #E6E6E6;
    .pc-table{
        height:auto;
        border-right:@border;
        .row{
            &.title{
                background:#F2F2F2;
            }
            &:first-child{
                border-top:@border;
            }
            border-bottom:@border;
            overflow: hidden;
            .col{
                width:100px;
                height:50px;
                line-height:50px;
                text-align: center;
                border-left:@border;
                float:left;   
            }
            clear: both;
        }
        clear:both;
    }
</style>
