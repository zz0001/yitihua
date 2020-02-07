<template>
    <div class="sign-success" v-if="isShow">
        <div class="box">
            <span class="icon">
                <svg
                    t="1578297757729"
                    class="icon-svg"
                    viewBox="0 0 1024 1024"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    p-id="4361"
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                    width="200"
                    height="200"
                >
                    <path
                        d="M459.755102 637.387755c-5.22449 0-10.44898-2.089796-14.628571-6.269388l-104.489796-104.489796c-8.359184-8.359184-8.359184-21.420408 0-29.779591 8.359184-8.359184 21.420408-8.359184 29.779592 0l104.489795 104.489796c8.359184 8.359184 8.359184 21.420408 0 29.779591-4.702041 4.179592-9.926531 6.269388-15.15102 6.269388z"
                        p-id="4362"
                        fill="#e6e6e6"
                    />
                    <path
                        d="M459.755102 637.387755c-5.22449 0-10.44898-2.089796-14.628571-6.269388-8.359184-8.359184-8.359184-21.420408 0-29.779591l208.979591-208.979592c8.359184-8.359184 21.420408-8.359184 29.779592 0 8.359184 8.359184 8.359184 21.420408 0 29.779592l-208.979592 208.979591c-4.702041 4.179592-9.926531 6.269388-15.15102 6.269388z"
                        p-id="4363"
                        fill="#e6e6e6"
                    />
                    <path
                        d="M512 929.959184c-230.4 0-417.959184-187.559184-417.959184-417.959184s187.559184-417.959184 417.959184-417.959184 417.959184 187.559184 417.959184 417.959184-187.559184 417.959184-417.959184 417.959184z m0-794.122449c-207.412245 0-376.163265 168.75102-376.163265 376.163265s168.75102 376.163265 376.163265 376.163265 376.163265-168.75102 376.163265-376.163265-168.75102-376.163265-376.163265-376.163265z"
                        p-id="4364"
                        fill="#e6e6e6"
                    />
                </svg>
            </span>
            <span class="txt">{{content}}</span>
        </div>
    </div>
</template>

<script>
export default {
    name: "signSuccess",
    data() {
        return {
            isShow: false
        };
    },
    props: {
        content: {
            default: "成功"
        }
    },
    mounted() {
        console.log(this.content);
    },
    methods: {
        show() {
            this.isShow = true;
        },
        hide() {
            this.isShow = false;
        }
    }
};
</script>

<style lang="less" scoped>
.sign-success {
    position: relative;
    width: 100vw;
    height: 100vh;
    .box {
        position: absolute;
        width: 120px;
        height: 110px;
        border-radius: 20px;
        background-color: #333;
        z-index: 100;
        top: 0;
        right: 0;
        left: 0;
        bottom: 0;
        margin: auto;
        color: #eee;
        span {
            width: 100%;
            display: block;
            text-align: center;
        }
        .icon {
            margin: 10px auto 15px;
            width: 40px;
            height: 40px;
            .icon-svg {
                width: 100%;
                height: 100%;
            }
        }
    }
}
</style>