<template>
    <div class="contact-list" v-show="showChildren || root">
        <div class="contact-list-item" v-for="(item, index) in data" @click="onClickContent">
            <div class="contact-list-item-group-wrapper"
                 v-if="item.children.length > 0">
                <div class="contact-list-item-group"
                     @click="onGroupClickContent(item, index)"
                     :style="{'margin-left':item.level*0.7 + 'rem'}">
                    <img style="width: 1rem;margin-right: 0.5rem" src="/static/img/zuzhiqunti111.png">
                    {{item.name}}
                </div>
                <div class="grey-split-line"></div>
                <contact-list :k="item.name" class="contact-list-item-child" :data="item.children"
                              :ref="`${item.id}`"></contact-list>
            </div>

            <div class="contact-list-item-name-wrapper" @click="onPersonClickContent(item,k+index,index)" v-else>
                <div class="contact-list-item-name"
                     :style="{'margin-left':item.level*0.7 + 'rem'}">
                    <img style="width: 14px;margin-right: 0.5rem" src="/static/img/touxiang111.png">
                    {{item.name}}
                </div>
                <div class="rightDiv">
                    <div class="circleDiv" @click="clickChoose(k+index,index)"
                         :class="{active:activeA.a==k+index}"
                    ></div>
                </div>

                <div class="grey-split-line"></div>
            </div>
        </div>
    </div>

</template>

<script>
    export default {
        name: "contact-list",
        data() {
            window.activeA=window.activeA||{a:''};
            return {
                TYPE_NO_CHOICE: 0,
                TYPE_SINGLE_CHOICE: 1,
                TYPE_MULTI_CHOICE: 2,
                showChildren: false,
                clickPosition: 0,
                activitesC:[],
                activeA:window.activeA,
                chosenPeople:'',

            }
        },
        mounted(){
            this.activeA.a = '';
            console.log(' this.activeA.a=='+ this.activeA.a)
        },
        computed: {},
        methods: {
            onClickContent() {
                // setTimeout(()=>{
                //     console.log('item.name='+this.chosenPeople)


                     this.$emit('onClickContent');
                // },500)


            },
            onGroupClickContent(item) {
                // console.log("组 点击项：" + item.name);
                // console.log("点击项 item.id ：" + item.id);
                this.$refs[`${item.id}`][0].showChildren = !this.$refs[`${item.id}`][0].showChildren;
            },
            onPersonClickContent(item,item1) {
                this.chosenPeople = item.name;
                console.log("人 点击项：" + item.name);
                console.log("id 点击项：" + item.id);
                window.namee = item.name;
                window.idd = item.id;

                this.clickChoose(item1);

            },
            clickChoose(item){
                this.activeA.a=item;
            },
        },
        props: {
            data: {},
            k:{type:String,default:''},
            type: {
                type: Number,
                default: 0
            },
            root: {
                type: Boolean,
                default: true
            }
        }
    }
</script>

<style lang="less" scoped>
    @import '../style/less-variable';

    .contact-list {
        display: flex;
        flex-flow: column nowrap;
        justify-content: start;
        align-items: center;
        width: 100%;
        background-color: white;

        .contact-list-item {
            display: flex;
            flex-flow: column nowrap;
            justify-content: start;
            align-items: start;
            width: 100%;

            .contact-list-item-group-wrapper {
                width: 100%;

                .contact-list-item-group {
                    width: 100%;
                    font-size: 14px;
                    height: 40px;
                    display: flex;
                    flex-flow: row nowrap;
                    align-items: center;
                    padding-left: 3%;
                }
            }

            .contact-list-item-name-wrapper {
                width: 100%;
                //border-bottom: 1px solid @grey-split-line;

                .contact-list-item-name {
                    width: 50%;
                    font-size: 14px;
                    height: 40px;
                    display: flex;
                    flex-flow: row nowrap;
                    align-items: center;
                    padding-left: 3%;
                    float: left;
                }
                .rightDiv{
                    /*display: inline-block;*/
                    float: right;
                    width: 20%;
                    height: 40px;
                    line-height: 40px;
                    /*background: red;*/
                    /*text-align: center;*/
                    /*vertical-align: middle;*/
                    .circleDiv{
                        width: 16px;
                        height: 16px;
                        background: #f5f5f5;
                        margin: 10px;
                        margin-left: 23px;
                        border-radius: 7px;

                        /*background-size: 100% 100%;*/
                        &.active{
                            background: url("/static/img/选择.png") no-repeat;
                            background-size: 100% 100%;
                        }
                    }
                }
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
                    font-size: 14px;
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

        .grey-split-line {
            background: @grey-split-line;
            width: 100%;
            height: 1px;
        }
    }
</style>
