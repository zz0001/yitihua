<template>
<div class="more">
    <tk-header :left="active" :back="!active">
        <div @click="cancel" v-show="active" slot="left">
            取消
        </div>
        管理我的应用
        <div @click="complete" v-show="active" slot="right">完成</div>
    </tk-header>
    <tk-scroll>
        <div class="my">
            <div class="title">我的应用</div>
            <div v-if="active&&!my.length">
                 <tk-nodata></tk-nodata>
            </div>
            <div class="my-wrap">
                <div @click="myClick(item)" v-for="item of my">
                    <div class="icon" :style="{'background-image':`url(${item.icon})`}"></div>
                    <div class="title">{{item.title}}</div>
                    <svg v-show="active" t="1579139154210" class="right-top" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2660" width="200" height="200">
                        <path d="M512 0C230.4 0 0 230.4 0 512s230.4 512 512 512 512-230.4 512-512S793.6 0 512 0z m151.466667 633.6c8.533333 8.533333 8.533333 21.333333 0 29.866667-8.533333 8.533333-21.333333 8.533333-29.866667 0L512 541.866667l-121.6 121.6c-8.533333 8.533333-21.333333 8.533333-29.866667 0-8.533333-8.533333-8.533333-21.333333 0-29.866667l121.6-121.6-121.6-121.6c-8.533333-8.533333-8.533333-21.333333 0-29.866667 8.533333-8.533333 21.333333-8.533333 29.866667 0l121.6 121.6 121.6-121.6c8.533333-8.533333 21.333333-8.533333 29.866667 0 8.533333 8.533333 8.533333 21.333333 0 29.866667L541.866667 512l121.6 121.6z" fill="#666767" p-id="2661"></path>
                    </svg>
                </div>

                <div @click="active=true" v-if="!active">
                    <svg style="background:#ddd;" t="1579138863693" class="icon" viewBox="-250 -250 1524 1524" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1912" width="200" height="200">
                        <path d="M554.76 549.889v341c0 26.51-21.491 48-48 48-26.51 0-48-21.49-48-48v-341H114.172c-26.51 0-48-21.49-48-48s21.49-48 48-48H458.76v-340c0-26.51 21.49-48 48-48s48 21.49 48 48v340h346.414c26.51 0 48 21.49 48 48s-21.49 48-48 48H554.76z" p-id="1913"></path>
                    </svg>
                    <div class="title">添加</div>
                </div>
            </div>
        </div>
        <div class="more">
            <div class="title">更多应用</div>
            <div v-if="!more.length">
                <tk-nodata></tk-nodata>
            </div>
            <div class="my-wrap">
                <div @click="moreClick(item)" v-for="item of more">
                    <div class="icon" :style="{'background-image':`url(${item.icon})`}"></div>
                    <div class="title">{{item.title}}</div>
                    <svg v-show="active" t="1579139351889" class="right-top" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3395" width="200" height="200">
                        <path d="M512 1024C229.2224 1024 0 794.7776 0 512 0 229.2224 229.2224 0 512 0 794.7776 0 1024 229.2224 1024 512 1024 794.7776 794.7776 1024 512 1024ZM716.8 486.4 537.6 486.4 537.6 307.2 486.4 307.2 486.4 486.4 307.2 486.4 307.2 537.6 486.4 537.6 486.4 716.8 537.6 716.8 537.6 537.6 716.8 537.6 716.8 486.4Z" p-id="3396"></path>
                    </svg>
                </div>
            </div>
        </div>
    </tk-scroll>
</div>
</template>

<script>
export default {
    data() {
        return {
            active: false,
            my: [{
                title: '百度',
                id: '12366',
                to: 'http://www.baidu.com',
                icon: 'http://img5.imgtn.bdimg.com/it/u=3437217665,1564280326&fm=26&gp=0.jpg'
            }],
            more: [{
                title: '百度',
                id: '12366ss',
                to: 'http://www.baidu.com',
                icon: 'http://img5.imgtn.bdimg.com/it/u=3437217665,1564280326&fm=26&gp=0.jpg'
            }]
        }
    },
    methods: {
        cancel() {
            this.active = false;
        },
        complete() {
            this.active = false;
            var ids = this.my.map(item => item.id);
            var mores = this.more.map(item => item.id);
            this.$http.post('/ump/proxy/updateAppletsList', {
                myids: ids.join(','),
                moreids: mores.join(',')
            }).then(d => {
                if (d.responseCode == 0) {
                    alert('成功')
                }
            })

        },
        myClick(ii) {
            if (this.active) {
                this.my = this.my.filter(item => {
                    if(item.id==ii.id){
                         this.more.push(item)
                    }
                    return item.id != ii.id
                })
               
            } else {
                location.href=ii.to;
            }
        },
        moreClick(ii) {
            if (this.active) {
                this.more = this.more.filter(item => {
                   if(item.id==ii.id){
                         this.my.push(item)
                    }
                    return item.id != ii.id
                })
            } else {
                location.href=ii.to;
            }
        }
    },
    mounted() {
        this.$http.post('/ump/proxy/getAppletsList').then(d => {
            if(d.appletsList){
                this.more = d.appletsList;
            }
            
        })
        this.$http.post('/ump/proxy/myAppletsList').then(d => {
             if(d.appletsList){
                this.my = d.appletsList;
            }
        })
    }
}
</script>

<style lang="less">
.more {
    .tk-nodata{
        text-align: center;
        img{
            width:100px;
            height:100px;
            margin:25px;
            left:0;
            right:0;
        }
    }
    background: rgb(243, 243, 243);

    .my,
    .more {
        background: #fff;

        >.title {
            text-align: center;
            font-size: 20px;
            margin-top: 10px;
        }

        .my-wrap {
            display: flex;

            >div {
                width: 25%;
                overflow: hidden;
                height: 150px;
                position: relative;

                .right-top {
                    position: absolute;
                    width: 20px;
                    height: 20px;
                    right: 0;
                    top: 0;
                }

                .title {
                    position: absolute;
                    bottom: 8px;
                    height: 50px;
                    width: 100%;
                    text-align: center;
                }

                .icon {
                    width: 18vw;
                    border-radius: 15px;
                    height: 18vw;
                    position: absolute;
                    background-size: cover;
                    background-repeat: no-repeat;
                    left: 0;
                    right: 0;
                    bottom: 50px;
                    top: 0;
                    margin: auto;
                }
            }
        }

    }
}
</style>
