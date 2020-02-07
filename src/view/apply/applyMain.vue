<template>
    <div>
        <tk-header>日常申请</tk-header>

        <tk-container>
            <div class="my-apply-content">
                <div class="my-apply-content-item">
                    <div class="apply-item-icon-wrapper">
                        <img src="" alt=""/>
                        <div class="unread-number">15</div>
                    </div>
                    <div class="">我的申请</div>
                </div>
                <div class="my-apply-content-item">
                    <div>我的审批</div>
                </div>
            </div>

            <div class="apply-list">
                <div class="apply-item">
                    <img src="" alt=""/>
                    <div>请假</div>
                </div>
                <div class="apply-item">
                    <img src="" alt=""/>
                    <div>加班</div>
                </div>
                <div class="apply-item">
                    <img src="" alt=""/>
                    <div>出差</div>
                </div>
                <div class="apply-item">
                    <img src="" alt=""/>
                    <div>费用</div>
                </div>
                <div class="apply-item">
                    <img src="" alt=""/>
                    <div>通用</div>
                </div>
                <div class="apply-item">
                    <img src="" alt=""/>
                    <div>外出</div>
                </div>
            </div>
        </tk-container>
    </div>
</template>

<script type="text/ecmascript-6">
    export default {
        name: "applyMain",
        data() {
            return {}
        },
        created() {

        },
        mounted() {

        },
        methods: {}
    }
</script>

<style lang="less" scoped>

    .my-apply-content {
        display: grid;
        grid-template-columns: 50% 50%;
        justify-items: center;

        .my-apply-content-item {
            display: flex;
            flex-flow: column nowrap;
            justify-content: start;
            align-items: center;
            width: 100%;
            background-color: #cccccc;

            .apply-item-icon-wrapper {
                position: relative;
                width: 30px;
                height: 30px;
                background-color: pink;

                .unread-number {
                    width: 18px;
                    height: 18px;
                    position: absolute;
                    right: 0;
                    top: 0;
                    background-color: red;
                    color: white;
                    border-radius: 50%;
                    font-size: 12px;
                    text-align: center;
                }
            }
        }
    }

    .apply-list {
        /*display: flex;*/
        /*flex-flow: row wrap;*/
        /*justify-content: start;*/
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-gap: 20px;
        height: 100px;
        justify-items: center;
    }
</style>
