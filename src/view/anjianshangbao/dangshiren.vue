<template>
    <transition name='slide-up'>
        <div class="dangshiren" v-if="isShow" style="z-index:600;position:absolute;">
            <tk-header @left-click="hide">选择当事人</tk-header>
            <tk-container class="choose-person-in-action">
                <tk-tab-container :value="[{label: '自然人'}, {label: '单位'}]" :active="active">
                    <div :slot="0" class="natural-person-list">
                        <tk-scroll class="scroller" v-model="naturalPersonList"
                        >
                            <!--                        :options="{pullDown: false, pullUp: false}"-->
                            <div class="person-in-action-item" v-for="item in naturalPersonList"
                                 @click="choosePerson(item)">
                                <div class="person-item-left">
                                    <div class="person-name">{{item.name}}</div>
                                    <div class="person-id">身份证：{{item.idNum}}</div>
                                </div>
                                <div class="person-item-right">
                                    <img class="person-chosen" v-show="item.id === chosenPerson.id"
                                         src="../../image/icon_chosen.png" alt=""/>
                                    <img class="person-chosen" v-show="item.id !== chosenPerson.id"
                                         src="../../image/icon_not_chosen.png" alt=""/>
                                </div>
                            </div>
                        </tk-scroll>
                    </div>

                    <div :slot="1" class="natural-person-list">
                        <tk-scroll v-model="companyList"
                                   :options="{pullDown: false, pullUp: false}">
                            <div class="person-in-action-item" v-for="item in companyList"
                                 @click="choosePerson(item)">
                                <div class="person-item-left">
                                    <div class="person-name">{{item.name}}</div>
                                    <div class="person-id">负责人：{{item.header}}</div>
                                </div>
                                <div class="person-item-right">
                                    <img class="person-chosen" v-show="item.id === chosenPerson.id"
                                         src="../../image/icon_chosen.png" alt=""/>
                                    <img class="person-chosen" v-show="item.id !== chosenPerson.id"
                                         src="../../image/icon_not_chosen.png" alt=""/>
                                </div>
                            </div>
                        </tk-scroll>
                    </div>
                </tk-tab-container>

                <div class="footer-chosen-person">
                    <div class="chosen-person-name-wrapper">
                        <div class="chosen-person-title">选择当事人：</div>
                        <div class="chosen-person-name">{{chosenPerson.name}}</div>
                    </div>
                    <tk-button class="confirm-button" @click="confirm">确定</tk-button>
                </div>
            </tk-container>
        </div>
    </transition>
</template>

<script>

    export default {
        name: 'dangshiren',
        data() {
            return {
                active: 0,
                isShow: false,
                naturalPersonList: [],
                companyList: [],
                chosenPerson: {
                    id: ''
                },
            }
        },
        created() {
            this.chosenPerson = this.$store.state.chosenPersonInAction;
            this.getPerson();
        },
        mounted() {

        },
        methods: {
            hide() {
                this.isShow = false;
            },
            show() {
                this.isShow = true;
            },
            getPerson(curPersonName = '') {
                let param = {
                    userId: 'ff8080816df7e603016df7e7a9e10000',
                    curPersonName: curPersonName, // 搜索字段
                    page: '0',
                    size: '99999'
                };

                this.$http.post('/zhzf/app/common/queryCurPersons', param).then(d => {
                    this.naturalPersonList = d.datas.filter(item => {
                        return item.typeTotal === 2;
                    });

                    this.companyList = d.datas.filter(item => {
                        return item.typeTotal === 1;
                    });
                });
            },
            choosePerson(item) {
                this.chosenPerson = item;
            },
            confirm() {
                console.log(this.chosenPerson);
                if (this.chosenPerson === undefined || this.chosenPerson.id === '') {
                    console.log('没选人');
                    // toast('请选择当事人');
                    this.$createPotToast({txt: "请选择当事人"}).show();
                    return;
                }
                this.$emit('confirm', {
                    id: this.chosenPerson.id,
                    name: this.chosenPerson.name,
                })
                this.hide();
            }
        }
    }
</script>

<style lang="less">
    @import "../../../public/tk_components/style/variable";

    .slide-up-leave-active {
        opacity: 0;
        transform: translate(0, 100%);
    }

    .slide-up-enter {
        opacity: 0;
        transform: translate(0, 100%);
    }

    .dangshiren {
        transition: .5s all;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
    }

    .choose-person-in-action {

        .scroller {
            height: calc(100vh - 80px);
        }

        .pot-tab-bar {
            background-color: white;
            height: 40px;
        }

        .tk-slide {
            height: 100%;

            .pot-slide {
                height: 100%;

                .pot-slide-group {
                    height: 100%;

                    .pot-slide-item {
                        height: 100%;

                        .text {
                            top: 0;
                            left: 0;
                            height: 100%;

                            .natural-person-list {
                                width: 100%;
                                height: 100%;
                            }
                        }
                    }
                }
            }
        }

        .person-in-action-item {
            height: 72px;
            display: flex;
            flex-flow: row nowrap;
            justify-content: space-between;
            align-items: center;
            background-color: white;
            border-bottom: 1px solid @split-color;

            .person-item-left {
                display: flex;
                flex-flow: column nowrap;
                justify-content: start;
                align-items: start;
                padding-left: @common-padding;

                .person-name {
                    font-size: 17px;
                    color: @detail-content-color;
                }

                .person-id {
                    font-size: 14px;
                    color: @detail-title-color;
                    margin-top: 10px;
                }
            }

            .person-item-right {
                padding-right: @common-padding;

                .person-chosen {
                    width: 22px;
                    height: 22px;
                }
            }
        }

        .footer-chosen-person {
            position: absolute;
            bottom: 0;
            display: flex;
            flex-flow: row nowrap;
            justify-content: space-between;
            align-items: center;
            width: 100%;
            z-index: 300;
            background-color: white;
            padding: 10px @common-padding;

            .chosen-person-name-wrapper {
                width: 72%;
                font-size: 16px;
                display: flex;
                flex-flow: row nowrap;
                justify-content: start;
                align-items: center;

                .chosen-person-title {
                    color: #666666;
                    font-size: 16px
                }

                .chosen-person-name {
                    color: #4582FD;
                    font-size: 18px;
                    overflow: hidden;
                    white-space: nowrap;
                    text-overflow: ellipsis;
                    padding-left: 4px;
                }
            }

            .tk-button {
                margin-bottom: 0;
                height: 36px;
                line-height: 36px;
            }

            .confirm-button {
                width: 20%;
            }
        }
    }

</style>
