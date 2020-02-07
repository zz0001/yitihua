<template>
    <div class="download-history">
        <tk-header :back="false" :left="true">
            历史版本
            <span class="right_btn" @click="$router.push('/download')" slot="right">生成apk</span>
            <span class="left_btn" @click="deletes()" slot="left" v-if="changeShow">
                <span v-if="!delShow">删除</span>
                <span v-if="delShow">取消</span>
            </span>
        </tk-header>
        <div class="search-wrap">
            <tk-search v-model="searchVal" class="search"></tk-search>
            <div class="change" @click="qiehuan()">
                <svg
                    t="1579400724490"
                    class="icon"
                    viewBox="0 0 1024 1024"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    p-id="2030"
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                    width="200"
                    height="200"
                >
                    <path
                        d="M988.9296 352H32.1296c-19.2 0-32-12.8-32-32s12.8-32 32-32h886.4l-233.6-233.6c-12.8-12.8-12.8-32 0-44.8 12.8-12.8 32-12.8 44.8 0l284.8 281.6c9.6 9.6 12.8 25.6 6.4 38.4-6.4 12.8-19.2 22.4-32 22.4zM316.9296 1024c-9.6 0-16-3.2-22.4-9.6L9.7296 732.8c-9.6-9.6-12.8-25.6-6.4-38.4 6.4-12.8 19.2-22.4 32-22.4H992.1296c19.2 0 32 12.8 32 32s-12.8 32-32 32H105.7296l233.6 233.6c12.8 12.8 12.8 32 0 44.8-6.4 6.4-12.8 9.6-22.4 9.6z"
                        p-id="2031"
                        fill="#bfbfbf"
                    />
                </svg>
            </div>
        </div>

        <tk-scroll class="wrap" v-if="changeShow">
            <div class="list" v-for="(item,index) of lists" :key="index" @click="step(item)">
                <div class="rows rows1">
                    <span class="title">应用名称：</span>
                    <span class="cont">
                        <font
                            :key="idx"
                            v-for="(i,idx) of item.baoming.split(searchVal)"
                            v-if="searchVal"
                        >
                            <font v-if="i">{{i}}</font><font style="color:red;" v-if="idx!=(item.baoming.split(searchVal).length-1)" >{{searchVal}}</font>
                        </font>
                        <font v-if="!searchVal">{{item.baoming}}</font>
                    </span>
                </div>
                <div class="rows rows1">
                    <span class="title">服务器地址</span>
                    <span class="cont">
                        <font
                            :key="idx"
                            v-for="(i,idx) of item.fuwuqi.split(searchVal)"
                            v-if="searchVal"
                        >
                            <font v-if="i">{{i}}</font><font style="color:red;" v-if="idx!=(item.fuwuqi.split(searchVal).length-1)" >{{searchVal}}</font>
                        </font>
                        <font v-if="!searchVal">{{item.fuwuqi}}</font>
                    </span>
                </div>

                <div class="rows rows1">
                    <span class="title">生成时间：</span>
                    <span class="cont">
                        <font
                            :key="idx"
                            v-for="(i,idx) of (new Date(item.time).toLocaleString()).split(searchVal)"
                            v-if="searchVal"
                        >
                            <font v-if="i">{{i}}</font><font style="color:red;" v-if="idx!=((new Date(item.time).toLocaleString()).split(searchVal).length-1)" >{{searchVal}}</font>
                        </font>
                        <font v-if="!searchVal">{{new Date(item.time).toLocaleString()}}</font>
                    </span>
                </div>
                <div
                    v-if="delShow"
                    class="delete"
                    :class="{active:active.indexOf(item.time)!=-1}"
                    @click.stop="change(item)"
                ></div>
            </div>
        </tk-scroll>
        <tk-scroll class="icon-wrap" v-if="!changeShow">
            <div class="icon-list">
                <div class="icon" v-for="(item,index) of d" :key="index" @click="step(item)">
                    <span>
                        <img :src="item.icon" alt />
                    </span>
                    <span>{{ item.baoming }}</span>
                </div>
            </div>
        </tk-scroll>
        <tk-button v-if="delShow" class="del-btn" @click="delFn()">删除</tk-button>
    </div>
</template>

<script>
export default {
    data() {
        return {
            d: [],
            origin: "",
            delShow: false,
            active: [],
            searchVal: "",
            changeShow: true
        };
    },
    computed: {
        lists: function() {
            return this.d.filter(
                // 这里用计算属性过滤一下，return的结果就是原先在标签中的v-if：需要注意的是标签里写的searchVal在这里需要在前面加上this
                item =>
                    item.baoming &&
                    (item.baoming.indexOf(this.searchVal) != -1 ||
                        item.fuwuqi.indexOf(this.searchVal) != -1 ||
                        new Date(item.time)
                            .toLocaleString()
                            .indexOf(this.searchVal) != -1)
            );
        }
    },
    mounted() {
        this.origin = location.origin;
        this.$http.get("/server/api/apkhistory").then(d => {
            this.d = d.reverse();
        });
    },
    methods: {
        deletes() {
            this.delShow = !this.delShow;
        },
        qiehuan() {
            this.changeShow = !this.changeShow;
        },
        step(item) {
            console.log(item);
            var str = JSON.stringify(item);
            this.$router.push({
                path: "/download-history-detail",
                query: {
                    obj: encodeURIComponent(str)
                }
            });
        },
        change(item) {
            if (this.active.indexOf(item.time) != -1) {
                this.active.splice(this.active.indexOf(item.time), 1);
            } else {
                this.active.push(item.time);
            }
        },
        delFn() {
            this.delShow = false;
            this.active.forEach(item => {
                this.$http
                    .post("/server/delete", {
                        id: item
                    })
                    .then(d => {
                        this.d = this.d.filter(item => item.time != item);
                    });
            });
        }
    }
};
</script>

<style lang="less" scoped>
.download-history {
    width: 100vw;
    height: 100vh;
    position: relative;
    .right_btn {
        right: 0em;
    }
    .left_btn {
        right: 5em;
    }
    .search-wrap {
        position: relative;
        .change {
            position: absolute;
            top: 18px;
            right: 20px;
            width: 15px;
            height: 20px;
            svg {
                width: 100%;
                height: 100%;
            }
        }
    }
    .wrap {
        height: calc(100vh - 140px);
        .list {
            width: 100vw;
            position: relative;
            border-bottom: 1px solid #ddd;
            padding: 10px 20px;
            box-sizing: border-box;
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
            .rows1 {
                height: 50px;
                line-height: 50px;
            }
            .delete {
                border: 1px solid #ddd;
                position: absolute;
                width: 20px;
                height: 20px;
                right: 20px;
                bottom: 20px;
                &.active {
                    background: brown;
                }
                /*	隐藏CheckBox属性原来的样式*/
                input[type="checkbox"] {
                    /* visibility 属性规定元素是否可见*/
                    // visibility: visible;
                    width: 20px;
                    height: 20px;
                    border: 1px solid #666;
                    -webkit-appearance: checkbox;
                }
                label {
                    display: block;
                    width: 20px;
                    height: 20px;
                    line-height: 20px;
                    cursor: pointer;
                    position: absolute;
                    border: 1px solid #ccc; /*改变复选框的边框颜色也可以不要边框*/
                    top: 1px;
                    left: 1px;
                }
                /* checked 预先选定复选框或单选按钮。*/
                .input:checked + label:before {
                    /*before为伪元素可以在元素之后添加内容*/
                    display: block;
                    /*	css3中的content字符编码*/
                    content: "\2713";
                    /*	复选框里面的&radic;居中*/
                    text-align: center;
                    /*	复选框里面的&radic;大小*/
                    font-size: 20px;
                    /*	字体的颜色*/
                    color: #666;
                    /*  复选框勾选后的背景颜色*/
                    background: white;
                }
            }
        }
    }
    .icon-wrap {
        height: calc(100vh - 140px);
        .icon-list {
            display: flex;
            flex-wrap: wrap;
            .icon {
                width: 25%;
                text-align: center;
                margin-top: 20px;
                margin-bottom: 20px;
                span {
                    display: inline-block;
                    &:nth-child(1) {
                        width: 50%;
                        height: 60px;
                        img {
                            width: 100%;
                            height: 100%;
                        }
                    }
                }
            }
        }
    }
    .del-btn {
        position: fixed;
        bottom: 0;
        z-index: 1;
    }
}
</style>