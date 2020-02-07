<!--指挥调度处理页面-->
<template>
    <div class="dispatch-main">
        <tk-header>指挥调度处理</tk-header>
        <tk-container class="dispatch-content">
            <div class="dispatch-title-wrapper">
                <div class="dispatch-title-left">{{dept}}</div>
                <div class="dispatch-title-right">{{time}}</div>
            </div>

            <div class="dispatch-content" v-html="content"></div>
            <tk-button class="dispatch-sign-btn" @click="handle">签收</tk-button>
        </tk-container>
    </div>
</template>

<script type="text/ecmascript-6">
    import axios from "axios";
    export default {
        name: "handleDispatch",
        data() {
            return {
                id: 0,
                url: '',
                dept: '指挥中心',
                time: '今日 10:11',
                content: '请处理'
            }
        },
        created() {

        },
        mounted() {
            this.url = '/wgh/app/' + 'queryMessageDetail.action';
            this.id = this.$route.query.id;
            ;
            this.getDispatchDetail(this.id);
        },
        methods: {

            getDispatchDetail(row_id) {
                var that=this;
                let obj = {para: 'rowId=' + row_id};
                console.log(JSON.stringify(obj));

                this.$http.post(this.url, obj).then(res => {
                    if (res.code === undefined || res.code === 0) {
                        console.log('接口返回成功');
                        that.time = res.createTime;
                        that.content = res.message;

                    } else {
                        toast(res.message);
                    }
                });



            },
            handle() {
                var rowid=this.id;
                var that=this;
                app.$createPotDialog({
                    $props: {
                        type: 'confirm',
                        content: '你确定要签收吗？'
                    },
                    $events: {
                        confirm(A) {
                            console.log('指挥调度');

                            let param={para: 'rowId=' + rowid};
                            let url='/wgh/app/' + 'receiveMessage.action';
                            axios.post(url, param).then(d => {
                                ;
                                that.$router.push({path: '/toDeal-index'});
                            })
                        }
                    }
                }).show();
            }
        }
    }
</script>

<style lang="less" scoped>
    .dispatch-content {
        width: 100vw;
        background: white;

        .dispatch-title-wrapper {
            width: calc(100% - 20px);
            height: 50px;
            display: flex;
            flex-flow: row nowrap;
            justify-content: space-between;
            align-items: center;
            margin-left: 10px;
            border-bottom: 1px solid #999999;

            .dispatch-title-left {
                font-size: 18px;
            }

            .dispatch-title-right {
                font-size: 18px;
            }
        }

        .dispatch-content {
            width: 100vw;
            height: calc(100% - 124px);
            padding: 24px 10px 0 10px;
            font-size: 18px;
            overflow-y: auto;
            line-height: 24px;
        }

        .dispatch-sign-btn {
            margin-top: 24px;
        }
    }

</style>
