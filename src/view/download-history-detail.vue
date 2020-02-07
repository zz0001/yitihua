<template>
    <div class="application-detail">
        <tk-header>应用详情</tk-header>
        <tk-scroll>
            <div class="wrap">
                <div class="rows1">
                    <span class="title">应用图标：</span>
                    <span class="cont">
                        <img style="width:50px;height:50px;" :src="list.icon" alt />
                    </span>
                </div>
                <div class="rows">
                    <span class="title">应用启动页：</span>
                    <span class="cont">
                        <img style="width:100px;height:100px;" :src="list.icon2" alt />
                    </span>
                </div>
                <div class="rows">
                    <div @click.stop="poper(list.path)" class="button">点击弹出二维码</div>
                    <div
                        style="margin-left:20px;"
                        class="button"
                        @click.stop="tiaozhuan(list.path)"
                    >点击直接下载</div>
                    <div
                        style="margin-left:20px;"
                        class="button"
                        @click.stop="odelete(list.time)"
                    >删除</div>
                </div>
            </div>
        </tk-scroll>
    </div>
</template>

<script>
export default {
    data() {
        return {
            list: null
        };
    },
    created() {
        // 获取传过来的参数
        var list = decodeURIComponent(this.$route.query.obj);
        this.list = JSON.parse(list);
        console.log(this.list);
    },
    methods: {
        tiaozhuan(path) {
            location.href = location.origin + path;
        },
        odelete(time) {
            this.$http
                .post("/server/delete", {
                    id: time
                })
                .then(d => {
                    this.d = this.d.filter(item => item.time != time);
                });
            this.$router.push({
                path: "/download-history"
            });
        },
        poper(path) {
            this.$createTkQrCode({
                $props: {
                    value: location.origin + path
                }
            }).show();
        }
    }
};
</script>

<style lang="less" scoped>
.application-detail {
    width: 100vw;
    height: 100vh;
    .wrap {
        padding: 10px 20px;
        .rows1 {
            display: flex;
            height: 50px;
            line-height: 50px;
            .title {
                flex: 3.6;
                font-weight: bold;
            }
            .cont {
                flex: 6.3;
            }
        }
        .rows {
            display: flex;
            height: 150px;
            line-height: 150px;
            .title {
                flex: 3.6;
                font-weight: bold;
            }
            .cont {
                flex: 6.3;
            }
        }
    }
}
</style>