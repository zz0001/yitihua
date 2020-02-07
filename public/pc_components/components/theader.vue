<template>
<div class="theader">
        <div class="top">
                <div class="time_area">{{time}}</div>
                <div class="weather_area">
                        <i class="weather_icon"></i>
                        当前用户：
                        <span class="weather">{{uname}}</span>
                        <svg @click="exit" style="cursor:pointer;display:inline;margin-top:2px;" t="1564310618880" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2388" width="25" height="25"><path d="M463.121779 125.44199c0-33.995255 29.188786-61.538565 65.182558-61.538565 35.999912 0 65.172325 27.54331 65.172325 61.538565l0 342.323553c0 33.985022-29.172413 61.533448-65.172325 61.533448-35.994796 0-65.182558-27.548426-65.182558-61.533448L463.121779 125.44199 463.121779 125.44199zM512.005117 960.095551c-224.976938 0-407.359778-172.21527-407.359778-384.640334 0-163.541727 108.297518-302.880215 260.71079-358.520443L365.356129 353.862353c-78.180594 46.232974-130.354883 128.068817-130.354883 221.592864 0 144.455019 124.027781 261.551948 277.004895 261.551948 152.98837 0 276.999778-117.096928 276.999778-261.551948 0-79.858816-38.009685-151.2334-97.760534-199.215204L691.245384 230.454696c134.977157 62.657039 228.110301 193.397708 228.110301 345.011778C919.364895 787.880281 736.982054 960.095551 512.005117 960.095551L512.005117 960.095551zM512.005117 960.095551" p-id="2389" fill="#1296db"></path></svg>
                </div>
        </div>
        <div class="head">
                <div class="nav">
                        <ul>
                                <li class="need-click" :key=index v-for='(item,index) of menu' :class="{active02:active==index}">
                                        <router-link @click="active=index" :to="item.path">{{item.name}}</router-link>
                                </li>
                        </ul>
                </div>
        </div>
        <slot></slot>
</div>
</template>

<script>

export default {
        data() {
                return {
                        date: new Date(),
                        quanxian:'',
                        uname:''
                }
        },
        computed: {
                menu(){
                        return this.$store.state.routes;
                },
                active(){
                        var a;
                        this.$store.state.routes.forEach((item,index)=>{
                                if('/'+item.path==this.$route.path){
                                        a=index
                                }
                        })
                        return a;
                },
                time() {
                        var date = this.date;
                        var a = date.getFullYear();
                        var b = date.getMonth() + 1;
                        var c = date.getDate();
                        var d = date.getDay();
                        var e = a + '年' + this.bqws(b) + '月' + this.bqws(c) + '日';
                        var f = '星期' + ['日', '一', '二', '三', '四', '五', '六'][d];
                        var g = date.toTimeString().substring(0, 8);
                        return e + ' ' + f + ' ' + g;
                }
        },
        methods: {
                exit(){
                        localStorage.removeItem('uid')
                        location.href = "/static/login"
                },
                topClick() {
                        location.href = "/myController"
                },
                bqws(d) {
                        if (d < 10) {
                                return '0' + d;
                        } else {
                                return d;
                        }
                }
        },
        beforeDestroy() {
                clearInterval(this.timer)
        },
        mounted() {
                
                this.timer = setInterval(() => {
                        this.date = new Date();
                }, 1000)

        }
}
</script>

<style lang="less" scoped>
.theader{
        .top {
                width: 100%;
                height: 100px;
                background: url(~../img/top_bg.png) no-repeat center bottom;
                position: relative;
        }
        .time_area {
                position: absolute;
                top: 42px;
                left: 58px;
                font-size: 19px;
                color: #ffffff;
        }

        .time_area span {
                font-size: 19px;
                color: #ffffff;
        }

        .time_area span.week {
                margin-left: 15px;
        }
        .head {
                width: 100%;
                height: 70px;
                position: relative;
        }
        .need-click{
                box-sizing: border-box;
                margin:10px;
        }
        .logo {
                width: 514px;
                height: 77px;
                background: url(~../img/logo.png) no-repeat center center;
                position: relative;
                z-index: 100;
        }
        .weather_area {
                position: absolute;
                top: 42px;
                right: 88px;
                font-size: 19px;
                color: #ffffff;
                display: flex;
        }

        .weather_icon {
                width: 40px;
                height: 40px;
                display: block;
                margin-right: 18px;
                position: relative;
                top: -10px;
                background: url(~../img/cloud-icons/mai2.png) no-repeat center center;
                background-size: cover;
        }

        .weather_area span {
                font-size: 19px;
                color: #ffffff;
        }

        .nav {
                width: 56%;
                height: 90%;
                display: flex;
                justify-content: center;
                align-items: center;
                margin: 0 auto;
                li.active02{
                        border:1px solid #00e4ff;
                }
        }

        .nav ul {
                display: flex;
                flex: auto;
                align-items: center;
                justify-content: center;
        }

        .nav ul:first-child {
                position: relative;
                left: 15px;
                top: -5px;
        }

        .nav ul:last-child {
                position: relative;
                left: -15px;
                top: -5px;
        }

        .nav ul:first-child li {
                -webkit-transform: skewX(22deg);
                -moz-transform: skewX(22deg);
                -ms-transform: skewX(22deg);
                -o-transform: skewX(22deg);
                transform: skewX(22deg);
        }

        .nav ul:last-child li {
                -webkit-transform: skewX(-22deg);
                -moz-transform: skewX(-22deg);
                -ms-transform: skewX(-22deg);
                -o-transform: skewX(-22deg);
                transform: skewX(-22deg);
        }

        .nav ul li {
                height: 40px;
                flex: 1;
                text-align: center;
                line-height: 40px;
                float: left;
                background: rgba(21, 155, 245, 0.3);
                box-shadow: inset 0 0 50px rgb(13, 147, 221);
        }

        .nav ul:first-child li a {
                color: #fff;
                display: block;
                font-size: 22px;
                transform: skewX(-22deg);
        }

        .nav ul:last-child li a {
                color: #fff;
                display: block;
                font-size: 22px;
                transform: skewX(22deg);
        }

        .nav ul li a:hover {
                color: #00f5fe;
                text-decoration: none;
        }
        .nav ul:first-child li.active01 {
                height: 42px;
                line-height: 42px;
                color: #00f5fe;
                border: 2px solid #00e4ff;
                border-radius: 2px;
                background: rgba(21, 155, 245, 0.3);
                transform: skewX(22deg);
                box-shadow: inset 0 0 65px rgb(17, 139, 218);
        }

        .nav ul:first-child li.active01 a {
                color: #00f5fe;
        }

        .nav ul:last-child li.active02 {
                height: 45px;
                line-height: 45px;
                color: #00f5fe;
                border: 2px solid #00e4ff;
                border-radius: 2px;
                background: rgba(21, 155, 245, 0.3);
                transform: skewX(-22deg);
                box-shadow: inset 0 0 65px rgb(17, 139, 218);
        }

        .nav ul:last-child li.active02 a {
                color: #00f5fe;
        }
}







</style>
