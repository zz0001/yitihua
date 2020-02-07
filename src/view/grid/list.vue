<!-- 轨迹查询-人员列表 -->
<template>
    <div class="grid-list">
        <div class="person-select">
            <tk-header>轨迹查询</tk-header>
            <div class="select-wrap">
                <tk-search v-model="searchVal"></tk-search>
                <!-- <tk-address-list @liClick="liClick" :filter="searchVal" v-model="list"></tk-address-list> -->
                <tk-scroll>
                    <!-- 这里用计算属性comGrid代替了原先的v-if -->
                    <tk-cell-one :spread="true" v-for="(item,index) of comGrid" :key="index">
                        <span v-if="!searchVal">{{item.deptName}}</span>
                        <!-- 这里item.deptName不好用计算属性过滤，可以直接在标签上过滤 -->
                        <template v-for="(i,idx) of item.deptName.split(searchVal).filter(d=>searchVal)" >
                            <span v-if="i">{{i}}</span>
                            <span class="filter" v-if="idx!=(item.deptName.split(searchVal).length-1)" >{{searchVal}}</span>
                        </template>
                        <ul slot="spread">
                            <li
                                v-for="i of item.children"
                                :key="i.userId"
                                v-if="i.display_name && (i.display_name.indexOf(searchVal)!=-1 || item.deptName.indexOf(searchVal)!=-1)"
                                @click="liClick(i.userId)"
                            >{{ i.display_name }}</li>
                        </ul>
                    </tk-cell-one>
                </tk-scroll>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            searchVal: "",
            grid: [],
            list: []
        };
    },
    computed: {
        comGrid: function() {
            return this.grid.filter(
                // 这里用计算属性过滤一下，return的结果就是原先在标签中的v-if：需要注意的是标签里写的searchVal在这里需要在前面加上this
                item => item.deptName && (item.deptName.indexOf(this.searchVal) != -1 || item.children.map(ii => ii.display_name).join(" ").indexOf(this.searchVal) != -1)
            );
        }
    },
    created() {
        this.url = "/wgh/app/";
        this.userId = window.localStorage.userId;
    },
    mounted() {
        this.getGridList();
    },
    methods: {
        getGridList() {
            const LEVEL = 2; // 网格级别，必填（2：二级网格；3：三级网格）
            let obj = {
                para: "userId=" + this.userId + "&level=" + LEVEL
            };
            this.$http.post(this.url + "gridTableList.action", obj).then(d => {
                d.forEach(item => {
                    this.grid.push(Object.assign({}, item));
                });
            });
        },
        liClick(id) {
            this.$router.push({
                path: "/grid",
                query: { id }
            });
        }
    }
};
</script>

<style lang="less" scoped>
.grid-list {
    width: 100vw;
    height: 100vh;
    .select-wrap {
        width: 100vw;
        height: calc(100vh - 80px);
        overflow: hidden;
        .tk-scroll {
            overflow: hidden;
            li {
                padding-left: 20px;
                height: 40px;
                line-height: 40px;
                border-top: 1px solid #eee;
            }
        }
    }
}
.filter {
    color: rgb(255, 160, 101);
    display: inline-block;

    &:not(:nth-child(1)) {
        margin-left: -5px;
    }
}
</style>

