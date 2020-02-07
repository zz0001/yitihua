<template>
    <div class="history">
        <tk-header>历史待办</tk-header>
        <tk-scroll>
            <ul>
                <li v-for="(item,index) of list" :key="index" @click="step(item)">
                    <div class="theme">{{ item.theme }}</div>
                    <div class="info">
                        <span>{{ item.address }}</span>
                        <span>| {{ item.time }}</span>
                    </div>
                </li>
            </ul>
        </tk-scroll>
    </div>
</template>

<script>
import axios from "axios";
export default {
    data() {
        return {
            list: []
        };
    },
    created() {
        var _this = this;
        axios.post("/xzsp/mobile/waitDoneList.action?&userId=").then(d => {
            console.log(d);
            if (d.rows) {
                _this.list = d.rows.map((item, index) => {
                    return {
                        id: index + 1,
                        rowId: item.row_id,
                        theme: item.servname,
                        address: item.casefrom,
                        time: item.createtime
                    };
                });
            }
        });
    },
    methods: {
        step(item) {
            this.$router.push({
                path: "/orderDetail",
                query: {
                    rowId: item.rowId,
                    theme: item.theme
                }
            });
        }
    }
};
</script>

<style lang="less" scoped>
.history {
    width: 100vw;
    height: 100vh;
    li {
        padding: 10px 20px;
        border-bottom: 1px solid #dbdbdb;
        .theme {
            line-height: 30px;
            font-size: 16px;
        }
        .info {
            line-height: 20px;
            span {
                font-size: 12px;
            }
        }
    }
}
</style>