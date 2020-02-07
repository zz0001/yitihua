<template>
    <div class="randomDetail">
        <mt-header class="page-header" title="双随机任务详情">
            <mt-button icon="back" slot="left" @click="back"></mt-button>
        </mt-header>
        <div class="page-content">
            <div class="titlelDiv">
                <div class="leftD">{{company}}</div>
                <div class="rightD">{{status(checkState)}}</div>
            </div>
            <text-view title="抽查编号" :content="number"></text-view>
            <text-view title="抽查时间" :content="startTimeRegular"></text-view>
            <text-view title="抽查地址" :content="address"></text-view>
            <text-view title="抽查类型" :content="worType"></text-view>
            <text-view title="执法人员" :content="dutyPeo"></text-view>
            <text-view title="截止时间" :content="endTime"></text-view>

            <div class="submitBtn" @click="handleClick" v-show="!isFinished">处理</div>

            <div class="random-detail-finish" v-show="isFinished"><!--状态为完成的时候展示-->
                <div class="random-detail-radio-list-wrapper">
                    <div class="random-detail-radio-list-title">抽查项目</div>
                    <div class="random-detail-radio-list" v-for="item in allAry">
                        <div class="random-detail-radio-item">
                            <div class="radio-item-content">{{item.project_name}}</div>
                            <div class="radio-item-choose">
                                <cube-radio-group v-model="temp" :options="item.ary"
                                                  :horizontal="true"></cube-radio-group>
                            </div>
                        </div>
                        <div class="grey-split-line"></div>
                    </div>
                </div>

                <div class="random-detail-result-wrapper">
                    <div class="random-detail-result">抽查结果</div>
                    <div class="random-detail-resultrandom_pictures-choose">
                        <cube-radio-group v-model="selectResult" :options="options"
                                          :horizontal="true"></cube-radio-group>
                    </div>
                </div>
                <div class="grey-split-line"></div>
                <!--<text-area-view ref="description" title="简单描述" :content="describe" :show-length="false"-->
                                <!--:readonly="true" :hideSplitLine="false"></text-area-view>-->
                <!--<text-area-view ref="adddescription" title="简单描述" readonly="readonly"></text-area-view ref="adddescription" title="简单描述" readonly="readonly">-->

                <ttxt-area-view title="简单描述" :readonly="false" content="adddescription" ref="desc"></ttxt-area-view>

                <picture-view ref="photo" title="现场照片" :editable="false"></picture-view>

                <div class="random-detail-attach-wrapper" v-show="false">
                    <div class="random-detail-attach-title">附件</div>
                    <div class="random-detail-attach" v-for="item in attaches">
                        <div class="random-detail-attach-name">{{item.name}}</div>
                        <div class="grey-split-line"></div>
                    </div>
                </div>
                <text-view title="上报人" content="zz" v-show="false"></text-view>
                <text-view title="上报时间" content="zz" v-show="false"></text-view>
            </div>
        </div>
    </div>
</template>
<script>
    import TextView from '../../component/text-view';
    import ttxtAreaView from "../../component/text-area-view";
    import {getDoubleRandomDetail} from "../../modules/getData";
    import PictureView from "../../component/picture-view";
    import {baseImgUrl} from "../../config/env";

    export default {
        data() {
            return {
                adddescription:'11',
                // 列表页面传参数
                id: '',
                company: '',
                number: '',
                address: '',
                worType: '',
                dutyPeo: '',
                startTime: '',
                startTimeRegular: '',
                coverPeo: '交办人',
                checkState: 0,
                describe: '',
                pictures: [],

                allAry: [],
                isFinished: false,
                selectResult: '',
                //1 无异常 2 现场整改 3 案件上报
                options: [
                    {label: '无异常', value: '1', disabled: true},
                    {label: '现场整改', value: '2', disabled: true},
                    {label: '案件上报', value: '3', disabled: true}
                ],
                attaches: [{name: "123456.jpg"}, {name: "123456.jpg"}],
                temp: '1',
                endTime:'',
            }
        },
        components: {
            PictureView,
            TextView,
            ttxtAreaView
        },
        computed: {
            date() {
                return function (timestamp) {
                    let date = new Date(timestamp);
                    let Y = date.getFullYear() + '-';
                    let M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-';
                    let D = date.getDate() < 10 ? '0' + date.getDate() + ' ' : date.getDate() + ' ';
                    let h = date.getHours() < 10 ? '0' + date.getHours() + ':' : date.getHours() + ':';
                    let m = date.getMinutes() < 10 ? '0' + date.getMinutes() + ':' : date.getMinutes() + ':';
                    let s = date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds();
                    return Y + M + D + h + m + s;
                }
            },
            status() {
                return function (status) {
                    switch (status) {
                        case 0:
                            return '未检查';
                        case 1:
                            return '已检查';
                    }
                }
            }
        },
        methods: {
            back() {
                this.$router.go(-1);
            },
            handleClick() {
                this.$router.push({
                    path: '/randomHandle',
                    query: {
                        id: this.id,
                    }
                })
            },
            async getDetail(id) {
                let res = await getDoubleRandomDetail(id);
                if (res.code === 0) {
                    this.hideLoading();
                    this.allAry = res.datas.map(item => {
                        item.ary = [
                            {label: '是', value: '1', disabled: this.isFinished},
                            {label: '否', value: '2', disabled: this.isFinished},
                        ];
                        return item;
                    });
                } else {
                    this.hideLoading();
                    this.toast(res.message);
                }
            },
            regularDate(timestamp) {
                console.log('调用regularDate ' + timestamp);
                let date = new Date(timestamp);
                let Y = date.getFullYear() + '-';
                let M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-';
                let D = date.getDate() < 10 ? '0' + date.getDate() + ' ' : date.getDate() + ' ';
                let h = date.getHours() < 10 ? '0' + date.getHours() + ':' : date.getHours() + ':';
                let m = date.getMinutes() < 10 ? '0' + date.getMinutes() + ':' : date.getMinutes() + ':';
                let s = date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds();
                return Y + M + D + h + m + s;
            }
        },
        created() {
            this.id = this.$store.state.random_id;
            this.company = this.$store.state.random_company;
            this.number = this.$store.state.random_number;
            this.address = this.$store.state.random_address;
            this.startTime = this.$store.state.random_time;
            this.startTimeRegular = this.regularDate(this.startTime).substr(0,10);
            this.worType = this.$store.state.random_type;
            this.dutyPeo = this.$store.state.random_person;
            this.checkState = this.$store.state.random_checkState;
            this.checkResult = this.$store.state.random_checkResult;
            this.describe = this.$store.state.random_describe;
            // this.$refs.adddescription.inputContent = this.describe;
            console.log('startTimeRegular: ' + this.startTimeRegular);
            console.log('describe: ' + this.describe);
            this.endTime = this.regularDate(this.$store.state.endTime).substr(0,10);



            this.selectResult = this.$store.state.random_checkResult;
            console.log('this.$store.state.random_checkResult: ' + this.$store.state.random_checkResult);


            this.isFinished = this.checkState !== 0;

            console.log('isFinished === ' + this.isFinished);


        },
        mounted() {
            this.$refs.desc.inputContent = this.$store.state.random_describe;
            if (this.isFinished) {
                console.log('this.$store.state.random_pictures==' + this.$store.state.random_pictures)

                if (this.$store.state.random_pictures.length > 0) {
                    console.log('有照片');
                    this.pictures = this.$store.state.random_pictures.map(item => {
                        return baseImgUrl + item.annexFilepath;
                    });
                    console.log(this.pictures);
                    this.$refs.photo.setImages(this.pictures);
                } else {
                    console.log('没有照片');
                }
                this.getDetail(this.id);
            }
        }
    }
</script>
<style lang="less" scoped>
    @import '../../style/less-variable';

    .randomDetail {
        width: 100%;
        height: 100%;
        top: 0;
        background: #f4f4f4;
        overflow: scroll;

        .page-header {
            position: fixed;
            top: 0;
            width: 100%;
            height: 2rem;
            z-index: 100;
        }

        .page-content {
            position: relative;
            top: 2rem;
            width: 100%;
            overflow-y: auto;
            height: calc(100% - 2rem);

            .titlelDiv {
                width: 100%;
                height: 1.6rem;
                background: white;
                padding-right: 3%;
                padding-left: 3%;
                font-size: 0.7rem;
                line-height: 1.6rem;
                margin-bottom: 0.5rem;

                .leftD {
                    float: left;
                }

                .rightD {
                    float: right;
                }
            }

            .submitBtn {
                margin: @margin-button-height @margin-button-width;
                height: @bottom-height;
                line-height: @bottom-height;
                text-align: center;
                background: @blue;
                border-radius: 0.3rem;
                color: white;
            }

            .random-detail-finish {
                width: 100%;
                display: flex;
                flex-flow: column nowrap;
                background-color: white;
                margin-top: 0.6rem;

                .random-detail-radio-list-wrapper {
                    width: 100%;
                    display: flex;
                    flex-flow: column nowrap;

                    .random-detail-radio-list-title {
                        padding: @padding-height @padding-width;
                        font-size: @title-font;
                        color: @title-color;
                    }

                    .random-detail-radio-list {
                        width: 100%;

                        .random-detail-radio-item {
                            display: flex;
                            flex-flow: row nowrap;
                            justify-content: space-between;
                            align-items: center;
                            padding: @padding-height @padding-width;
                        }
                    }
                }

                .random-detail-result-wrapper {
                    width: 100%;
                    display: flex;
                    flex-flow: row nowrap;
                    justify-content: space-between;
                    align-items: center;
                    padding: @padding-height @padding-width;
                }

                .random-detail-attach-wrapper {
                    width: 100%;
                    display: flex;
                    flex-flow: column nowrap;
                    align-items: flex-start;

                    .random-detail-attach-title {
                        padding: @padding-height @padding-width;
                        color: @title-color;
                        font-size: @title-font;
                    }

                    .random-detail-attach {
                        width: 100%;
                        color: @content-color;
                        font-size: @subtitle-font;

                        .random-detail-attach-name {
                            font-size: @title-font;
                            padding: @padding-height @padding-width;
                        }
                    }
                }
            }
        }

        .grey-split-line {
            width: 100%;
            height: 1px;
            background-color: @grey-split-line;
        }
    }
</style>

<style lang="less">
    .cube-radio_disabled .cube-radio-ui {
        background-color: #bbb;
    }
</style>
