<template>
<drag-poper ref="drag" @hasMounted=hasMounted :w="1000" :h="700" class="codeEditor">
    <textarea v-model="tvalue" class="editor" ref="codeEditor" name="" id="" cols="30" rows="10"></textarea>
    <div @click="hasOver">完成编辑</div>
</drag-poper>
        
</template>

<script>
    import codeEditor from './codeEditor.js'
    export default {
        name:'codeEditor',
        data(){
            return {
                isShow:true,
                tvalue:this.value||'',
                editor:null,
                isDraggable:true
            }
        },
        props:['value'],
        components: {
            'drag-poper':()=>import('../drag-poper.vue')   
        },
        methods:{
            hide(){
                this.isShow=false;
            },
            hasOver(){
                this.$emit('success',this.editor.getValue())
            },
            hasMounted(){
                this.editor = codeEditor.fromTextArea(this.$refs.codeEditor, {
                    mode: "shell",
                    lineNumbers: true,
                    lineWrapping: true,
                    indentUnit: 4,  // 缩进
                    foldGutter: true,
                    theme: "dracula",
                    gutters: ["CodeMirror-linenumbers", "CodeMirror-foldgutter"]
                })
                this.editor.setValue(this.tvalue);
            }
        },
        mounted(){
            
            

        }
    }
</script>

<style lang="less" scoped>
.codeEditor{
    .button{
            cursor: pointer;
            height:30px;
            width:150px;
            float:right;
            text-align: center;
            line-height:30px;
            background:rgb(255, 213, 28);
            color:#fff;
            
            &:hover{
                    background:rgb(255, 222, 73);
                        &:active{
                            background:rgb(214, 181, 34);
                    }
            }
    }
}
.close {
    position: absolute;
    top: -10px;
    right: -10px;
    width: 20px;
    height: 20px;
    z-index: 100000001;
    background: rgb(0, 0, 0);
    border-radius: 50%;
}
.draggable{
    width:100%;
    height:30px;
    background:burlywood;
}
 .editor{
     width:100%;
     height:calc(100% - 30px);
     padding:13px;
     box-sizing: border-box;
 }
</style>