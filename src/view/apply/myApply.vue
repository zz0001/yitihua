<template>
    <div>
        <tk-header>我的申请</tk-header>

        <tk-container>
            <tk-scroll>
                <div class="my-apply-item">
                    <div class="my-apply-item-logo"></div>
                    <div class="my-apply-item-content">
                        <div class="my-apply-item-content-row"></div>
                        <div class="my-apply-item-content-row"></div>
                    </div>
                </div>
            </tk-scroll>
        </tk-container>

    </div>
</template>

<script type="text/ecmascript-6">
    export default {
        name: "myApply",
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

    .my-apply-item {
        .my-apply-item-logo {

        }

        .my-apply-item-content {
            display: flex;
            flex-flow: column nowrap;
            justify-content: space-between;

            .my-apply-item-content-row {

            }
        }
    }
</style>
