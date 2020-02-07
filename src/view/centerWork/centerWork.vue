<template>
    <div data-role="page" id="center_list_page">
        <tk-header>中心工作</tk-header>
        <div class="page_content">
            <tk-scroll>
                <ul>
                    <li class="lists" v-for="item of workList" :key="item.id" @click="jump(item.id)">
                        <img class="icon1" src="/staitc/resources/images/icon_gd.png" />
                        <div class="des">
                            <p>{{ item.name }}</p>
                            <p class="smaller gray_font">{{ item.des }}</p>
                        </div>
                        <img class="icon2" src="/static/image/user_info_arrow.png" alt />
                    </li>
                </ul>
            </tk-scroll>
        </div>
    </div>
</template>

<script>
import axios from "axios";

export default {
    data() {
        return {
            workList: []
        };
    },
    created() {
        axios.post("/api/workList").then(d => {
            this.workList = d.map(item => item);
        });
    },
    methods: {
        jump (id) {
            this.$router.push({
                path: 'centerWorkDetail',
                query: {
                    id: id
                }
            });
        }
    },
    mounted() {
        window.searchPage = 2;
        appWorkOrder_centerTaskNum2();
        /*返回*/
        $("#center_list_page .left_img").listen("quickClick", function(e) {
            if ($(".max-dialog").is(":visible") == true) {
                $(".max-dialog").remove();
            } else {
                app.$router.push("../load/welcome.html");
            }
        });
        //中心工作
        $("#welcome_current_work").listen("quickClick", function(e) {
            window.VisitWelcomePage = "";
            window.thisCheckVisitType = "1"; //任务状态 1:未走访 2:已走访
            app.$router.push("../repair/repairList.html");
        });
        //重点工程
        $("#welcome_import_project").listen("quickClick", function(e) {
            window.opinionWelcomePage = "";

            app.$router.push("../importProject/importProjectList.html");
        });
        function appWorkOrder_centerTaskNum2() {
            var obj = "";
            obj += toJson("userid", $.trim(window.localStorage.userId));
            doPost(
                "centerTaskNum.action",
                obj,
                function(data) {
                    console.log(data);
                    if (data.datas !== 0) {
                        //工单待办总数
                        $(".wait_work_welcome_order_centerwork").html(
                            data.datas
                        );
                        $(".wait_work_welcome_order_centerwork").show();
                    } else {
                        $(".wait_work_welcome_order_centerwork").hide();
                        toast(data.message);
                    }
                },
                ""
            );
        }
    }
};
</script>

<style lang="less" scoped>
.page_content {
    width: 100vw;
    height: calc(100vh - 80px);
    overflow: auto;
    li {
        background-color: #fff;
        position: relative;
        width: 100%;
        height: 70px;
        border-top: 1px solid #eee;
        .icon1 {
            position: absolute;
            width: auto;
            height: 30px;
            top: 15px;
            left: 10px;
        }
        .icon2 {
            position: absolute;
            width: auto;
            height: 15px;
            right: 20px;
            top: 25px;
        }
        .des {
            padding-left: 60px;
            height: 100%;
            p {
                line-height: 35px;
            }
        }
    }
}
</style>
