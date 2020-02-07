<template>
<transition name="fade-to-right">
        <div v-if="tvalue.length" class="choosePeople">
                <div class="map_case_quanxuan" style="display: block;">
                        <a @click="checkboxAct=[],tvalue=[]" class="close">x</a>
                        <div>

                                <div>
                                        <div class="wrapper" style="width: 100%;">
                                                <table class="table1" border="0">
                                                        <thead>
                                                                <tr>
                                                                        <th style="width:60px"></th>
                                                                        <th>序号</th>
                                                                        <th>姓名</th>

                                                                </tr>

                                                        </thead>
                                                        <tbody id="sendnamelist">
                                                                <tr :key="index" v-for="(item,index) of value">
                                                                        <td>
                                                                                <tk-check-box v-model="checkboxAct[index]"></tk-check-box>
                                                                                <!-- <input ref="input" type="checkbox" :value="value.userId" name="message" style="width:30px;height:30px;"> -->
                                                                        </td>
                                                                        <td>{{index+1}}</td>
                                                                        <td>{{item.userName}}</td>
                                                                </tr>
                                                        </tbody>
                                                </table>
                                        </div>
                                        <div style="display:flex;" class="buttons">
                                                <tk-button @click="allChoose">全选</tk-button>
                                                <tk-button @click="reset">重置</tk-button>
                                        </div>

                                </div>

                        </div>
                </div>
                <transition name="fade-to-right">
                        <div v-if="ids.length" class="chartRoom">
                                <div ref="chatContent" class="chat-content-box">
                                        <div :key=index v-for="(item,index) of contents" class="chat-content">
                                                {{item}}
                                        </div>
                                        <div v-if="content" class="chat-content active">
                                                {{content}}
                                                
                                        </div>
                                </div>
                                <div class="chat-file">
                                        <div :style="{width:`${125*src.length}px`}" class="wrapper">
                                                <div :style="{'background-image':`url(${item})`}" :key=index v-for="(item,index) of src">

                                                </div>
                                        </div>

                                </div>
                                <div class="chat-container">
                                        <input v-model="content" type="text">
                                </div>
                                <form id="fileform" method="post" enctype="multipart/form-data">
                                       <input @change="inputChange" ref="input" style="display:none;" type="file" accept="image/png,image/gif,image/jpg,image/jpeg" id="files" name="files" multiple>
                                </form>
                                <div style="display:flex;" class="buttons">
                                        <tk-button @click="chooseFile">选择文件</tk-button>
                                        <tk-button @click="send">
                                                发送
                                                <pot-loading v-if="isloading" style="display:inline-block;vertical-align:middle;"></pot-loading>
                                        </tk-button>
                                </div>

                        </div>
                </transition>

        </div>
</transition>
</template>

<script>
export default {
        props: ['value'],
        components:{
                'pot-loading':()=>import('%/pot_components/src/components/loading/loading.vue')
        },
        data() {
                return {
                        tvalue: this.value,
                        checkboxAct: [],
                        content: '',
                        src: [],
                        contents:[],
                        isloading:false
                }
        },
        computed: {
                ids() {
                        var arr = []
                        this.checkboxAct.forEach((item, index) => {
                                if (item) {
                                        arr.push(this.value[index].userId)
                                }
                        })
                        return arr;
                }
        },
        watch: {
                value(newV) {
                        this.tvalue = newV
                },
                tvalue(newV) {
                        this.$emit('input', newV)
                },
                content(){
                        var dd=this.$refs.chatContent;
                        dd.scrollTop=dd.scrollHeight-dd.offsetHeight;
                }
        },
        mounted() {
                var _this = this;
                window.a = this;
                this.checkboxAct = [];
        },
        methods: {
                chooseFile() {
                        $(this.$refs.input).click();
                },
                inputChange(e) {
                        var _this = this;
                        _this.src = [];
                        this.files = e.target.files;
                        for (var i = 0; i < e.target.files.length; i++) {
                                var file = e.target.files.item(i);
                                console.log(file);
                                //允许文件MIME类型 也可以在input标签中指定accept属性
                                //console.log(/^image\/.*$/i.test(file.type));
                                if (!(/^image\/.*$/i.test(file.type))) {
                                        continue; //不是图片 就跳出这一次循环
                                }
                                //实例化FileReader API
                                var freader = new FileReader();
                                freader.readAsDataURL(file);
                                freader.onload = function (e) {
                                        console.log(e.target.result)
                                        _this.src.push(e.target.result)
                                }
                        }
                },
                send() {
                        this.isloading=true;
                        var _this=this;
                        var vals = this.ids.join(";");
                        var mess = this.content;
                        var file = this.files;
                        console.log(file);
                        function success(data){
                                _this.isloading=false;
                                _this.contents.push(_this.content);
                                _this.content='';
                                _this.files = "";
                                _this.src=[];
                        }
                        if (!file||(!file.length)) {
                                $.ajax({
                                        type: "post",
                                        data: {
                                                "userId": vals,
                                                "message": mess
                                        },
                                        url: "/zhsq/app/sendMessage.action?userId=" + vals + "&message=" + mess,
                                        success
                                });

                        } else {
                                var url ="/zhsq/app/sendMessage.action?userId=" + vals + "&message=" + mess + "&files=" + file;

                                $('#fileform').ajaxSubmit({
                                        type: 'post', // 提交方式 get/post
                                        url: url, // 需要提交的 url
                                        data: {
                                                "userId": vals,
                                                "message": mess
                                        },
                                        success

                                });
                                return false; // 阻止表单自动提交事件

                        }
                },
                allChoose() {
                        var arr = []
                        this.tvalue.forEach((item, index) => {
                                arr.push(true);
                        })
                        this.checkboxAct = arr;
                },
                reset() {
                        this.checkboxAct = [];
                }
        }
}
</script>

<style lang="less">
.fade-to-right-enter,
.fade-to-right-leave-active {
        transform: translateX(-200px);
        opacity: 0;
}

.choosePeople {
        position: relative;
        height:calc(100% - 90px);
        transition: .4s all;
        z-index: 7000;
        width: 600px;
        .wrapper{
                height:calc(100% - 50px);
                overflow:scroll;
                
        }
        

        .map_case_quanxuan {
                width: 250px;
                padding: 10px;
                height:calc(100% - 90px);
                box-sizing: border-box;
                position: absolute;
                top: 38px;
                left: 10px;
                background: #2a8dff86;
                z-index: 7000;
                >div{
                        height:100%;
                        >div{
                                height:100%;
                        }
                }
                textarea {
                        width: calc(100% - 10px);
                        height: 130px;
                        padding: 13px;
                        box-sizing: border-box;
                        color: #222;
                }

                .close {
                        position: absolute;
                        top: 0;
                        right: 0;
                        padding: 4px 4px 0 0;
                        border: none;
                        text-align: center;
                        width: 18px;
                        height: 14px;
                        font: 16px/14px Tahoma, Verdana, sans-serif;
                        color: #c3c3c3;
                        font-weight: 700;
                        cursor: pointer;

                        .table1 {
                                width: 100%;

                                tr td {
                                        text-align: center;
                                        height: 50px;
                                        cursor: pointer;
                                }
                        }
                }
        }

        .chartRoom {
                width: 250px;
                height: 400px;
                transition: .3s all;
                position: absolute;
                top: 38px;
                left: 280px;
                z-index: 7000;
                background: #2a8dff86;
                padding: 10px;
                box-sizing: border-box;
                .chat-content-box{
                        overflow-y: scroll;
                        &::-webkit-scrollbar {
                                width: 4px;
                                height: 0px;
                        }
                        &::-webkit-scrollbar-track {
                                width: 1px;
                                height: 4px;
                                background: rgb(197, 190, 190);
                        }
                        &::-webkit-scrollbar-thumb {
                                width: 3px;
                                height: 4px;
                                background: #2a8dff;
                        }
                        background:#669edd86;
                        height: calc(100% - 180px);
                }
                .chat-file {
                        background:#669edd86;
                        width: calc(100% - 20px);
                        height: 90px;
                        bottom: 90px;
                        position: absolute;
                        overflow-x: scroll;

                        &::-webkit-scrollbar {
                                width: 0px;
                                height: 4px;
                        }

                        &::-webkit-scrollbar-button {
                                display: none;
                        }

                        &::-webkit-scrollbar-track {
                                width: 1px;
                                height: 4px;
                                background: rgb(197, 190, 190);
                        }

                        &::-webkit-scrollbar-thumb {
                                width: 3px;
                                height: 4px;
                                background: #2a8dff;
                        }

                        &::-webkit-scrollbar-corner {
                                display: none;
                        }

                        .wrapper {
                                height: 100px;

                                >div {
                                        width: 82px;
                                        float: left;
                                        height: 90px;
                                        background-repeat: no-repeat;
                                        background-size: contain;
                                        background-position: center;
                                }
                        }

                }

                .chat-content {
                        transition: background-color .5s;
                        &.active{
                                background:#d6b506;
                        }
                        height: auto;
                        overflow: scroll;
                        background:#5FB878;
                        margin-top:5px;
                        padding:10px;
                        border-radius:4px;
                        &::-webkit-scrollbar {
                                display: none;
                        }
                }

                .chat-container {

                        bottom: 50px;
                        width: 100%;
                        position: absolute;

                        input {
                                width: calc(100% - 20px);
                                border: none;
                                outline: none;
                                font-size: 14px;
                                height: 30px;
                                line-height: 30px;
                                padding-left: 13px;
                                padding-right: 13px;
                                color: #fff;
                                box-sizing: border-box;
                                background: #a3c6ee86;
                        }
                }
        }

        .buttons {
                bottom: 10px;
                position: absolute;
                height: 30px;
                width: calc(100% - 20px);

                >div {
                        flex: 1;
                        height: 30px;
                        line-height: 30px;
                        font-size: 13px;
                        cursor: pointer;
                        margin-left: 5px;
                        margin-right: 5px;
                }
        }
}
</style>
