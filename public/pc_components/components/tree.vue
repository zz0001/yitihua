<template>
<div style="cursor:pointer;" class="tree">
        <div class="parent" :key="index" v-for="(item,index) of data">
                <div @click="showChildren(index)" class="title">
                        <span :class="{active:show.indexOf(index)!=-1}" class="icon"></span>
                        {{item.text}}
                </div>
                <div :class="{active:show.indexOf(index)!=-1}" class="children" :key="index+'-'+index2" v-for="(item2,index2) of item.children">
                        <div @click="showchild(index+'-'+index2)" class="title">
                                <span :class="{active:show2.indexOf(index+'-'+index2)!=-1}" class="icon"></span>
                                {{item2.text}}
                        </div>
                        <div @click="showchild2(item3)" :class="{active:show2.indexOf(index+'-'+index2)!=-1}" class="child" :key=index3 v-for="(item3,index3) of item2.children">
                                <span class="icon-radius" :class="{active:ids.indexOf(item3.id)!=-1}"></span>
                                {{item3.text}}
                        </div>
                </div>
        </div>
</div>
</template>

<script>
export default {
        data() {
                return {
                        show: [],
                        show2: [],
                        ids:[]
                }
        },
        methods: {
                showchild2(item){
                        var id=item.id;
                        var idx = this.ids.indexOf(id);
                        if (idx == -1) {
                                this.ids.push(id)
                        } else {
                                
                                this.ids.splice(idx, 1);
                        }
                        this.$emit('childrenClick',item)
                },
                showchild(index) {
                        var idx = this.show2.indexOf(index);
                        if (idx == -1) {
                                this.show2.push(index)
                        } else {
                                this.show2.splice(idx, 1);
                        }
                },
                showChildren(index) {
                        var idx = this.show.indexOf(index);
                        if (idx == -1) {
                                this.show.push(index)
                        } else {
                                this.show.splice(idx, 1);
                        }
                }
        },
        props: {
                data: {
                        type: Array,
                        default: () => [{
                                text: 'parent',
                                id:'1',
                                children: [{
                                        text: 'children',
                                        id:'1-1',
                                        children: [{
                                                text:'child1'
                                        }]
                                }, {
                                        title: 'children2',
                                        id:'1-2',
                                        children: [{
                                                text:'child1'
                                        }]
                                }]
                        }, {
                                text: 'parent2',
                                id:'2',
                                children: [{
                                        title: 'children',
                                        id:'2-1',
                                        children: [{
                                                text:'child1',
                                                id:'2-1-1'
                                        }]
                                }, {
                                        title: 'children2',
                                        id:'2-2',
                                        children:  [{
                                                text:'child1',
                                                id:'2-1-2'
                                        }]
                                }]
                        }, {
                                text: 'parent3',
                                id:'3',
                                children: [{
                                        title: 'children',
                                        id:'3-1',
                                        children: [{
                                                text:'child1',
                                                id:'2-1-3'
                                        }]
                                }, {
                                        title: 'children2',
                                        id:'3-2',
                                        children: [{
                                                text:'child1',
                                                id:'2-1-4'
                                        }]
                                }]
                        }]
                }
        },
        mounted() {

        }
}
</script>

<style lang="less">
.bigger-box-enter,
.bigger-box-leave-active {
        transform: scaleY(0);
}
.bigger-enter,
.bigger-leave-active {
        transform: scaleY(0);
}
.tree {

        >.parent {
                overflow: hidden;
                .title {
                        .icon{
                                vertical-align: middle;
                                display: inline-block;
                                width:12px;
                                height:12px;
                                border-left:6px solid rgb(153, 240, 39);
                                box-sizing:border-box;
                                border-top:6px solid transparent;
                                border-bottom:6px solid transparent;
                                transition:.3s all;
                                &.active{
                                        transform:rotateZ(90deg);
                                }
                        }
                }

                .children {
                         transition: .3s all;
                        overflow: hidden;
                        margin-left: 10px;
                        height:0;
                        &.active{
                                height:auto;
                        }
                        >.title {}

                        .child {
                                height:0;
                                margin-left: 20px;
                                .icon-radius{
                                        vertical-align: middle;
                                        transition: .3s all;
                                        &.active{
                                                background:#d6b506;
                                        }
                                        border-radius:2px;
                                        border:1px solid #d6b506;
                                        display: inline-block;
                                        width:14px;
                                        height:14px;
                                        
                                }
                                &.active{
                                        height:27px;
                                }
                        }
                }
        }
}
</style>
