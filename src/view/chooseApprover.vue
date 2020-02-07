<template>
    <div class="choose-approver">
        <!--<mt-header class="page-header" :title='titleL'>-->
            <!--<mt-button icon="back" slot="left" @click="back"></mt-button>-->
        <!--</mt-header>-->
        <tk-header>处理人</tk-header>

        <div class="choose-approver-content">
            <contact-list :data="list" :root="true" v-on:onClickContent = 'clickData'></contact-list>
        </div>
        <div class="borromPart">
            <div class="leftSpan">{{bottomTitle}}</div>
            <div class="name" >{{chosenPeople}}</div>
            <div class="rightDiv" @click="sureCc">确定</div>
        </div>
    </div>
</template>

<script>
    import ContactList from "../components/contact-list";
    import {getApprover,getAppAreaTree} from '../modules/getData.js'

    export default {
        name: "chooseApprover",
        components: {ContactList},
        data() {
            return {
                list: [],
                chosenPeople:'',
                id:'',//1 区域选择。2 人员选择
                titleL:'选择审批人',
                bottomTitle:'选择当事人',
            }
        },
        mounted() {
            this.id = this.$route.query.id;

            window.namee = '';
            window.idd = '';

            console.log('this.id=='+this.id)


            this.getApprover();
        },
        methods: {
            back() {
                this.$router.go(-1);
            },
            clickData(){
                this.chosenPeople = window.namee;

               // console.log('v1==='+window.namee);
            },
            sureCc(){

                if (this.chosenPeople == '' || this.chosenPeople == null || this.chosenPeople == undefined) {
                    if (this.id == 1) {
                        this.toast('请选择区域')
                    } else {
                        this.toast('请选择当事人')
                    }

                    return;
                }

                this.$router.go(-1);
            },
            async getApprover() {
                let res;
                if (this.id == 1) {
                    res = await getAppAreaTree();
                    this.titleL = '选择区域'
                    this.bottomTitle = '选择区域'
                } else {
                    res = await getApprover();
                    this.titleL = '选择审批人'
                    this.bottomTitle = '选择当事人'
                }


                if (res.code == 0) {
                    this.list = res.datas;
                    this.hideLoading();
                } else {
                    this.hideLoading();
                    this.toast(res.message);
                }
            }
        }
    }
</script>

<style lang="less" scoped>
    .choose-approver {
        width: 100%;
        top: 0;
        background: #f4f4f4;
        /*position: fixed;*/

        .page-header {
            position: fixed;
            top: 0;
            width: 100%;
            z-index: 100;
        }

        .choose-approver-content {
            width: 100%;
            height: 83%;
            margin-top: 2.5rem;
            overflow-y: scroll;
        }
        .borromPart{
            position: absolute;
            bottom: 0;
            width: 100%;
            height: 8%;
            background: white;

            .leftSpan{
                float: left;
                margin-left: 5%;
                color: gray;
                height: 2.3rem;
                /*background: orange;*/
                line-height: 2.3rem;

            }
            .name{
                color: #297aff;
                margin-left: 0.5rem;
                font-size: 0.7rem;
                float: left;
                height: 2.3rem;
                /*background: orange;*/
                line-height: 2.3rem;
                text-align: left;
                /*background: red;*/
                width: 6rem;
                overflow: hidden;
                white-space: nowrap;
                text-overflow: ellipsis;
            }
            .rightDiv{
                float: right;
                margin-right: 5%;
                width: 29%;
                height: 2.1rem;
                background: #297aff;
                line-height: 2.1rem;
                border-radius: 0.5rem;
                text-align: center;
                color: white;
            }

        }
    }


</style>
