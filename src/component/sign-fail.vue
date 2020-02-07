<template>
    <div class="sign-fail" v-if="isShow">
        <div class="box">
            <span class="icon">
                <svg
                    t="1578381441566"
                    class="icon"
                    viewBox="0 0 1024 1024"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    p-id="6632"
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                    width="200"
                    height="200"
                >
                    <path
                        d="M709.492364 742.4 742.4 709.492364 544.907636 512 742.4 314.507636 709.492364 281.6 512 479.092364 314.507636 281.6 281.6 314.507636 479.092364 512 281.6 709.492364 314.507636 742.4 512 544.907636Z"
                        p-id="6633"
                        fill="#e6e6e6"
                    />
                    <path
                        d="M1024 512c0-282.763636-229.236364-512-512-512C229.236364 0 0 229.236364 0 512c0 282.763636 229.236364 512 512 512C794.763636 1024 1024 794.763636 1024 512zM46.545455 512C46.545455 254.929455 254.929455 46.545455 512 46.545455s465.454545 208.384 465.454545 465.454545-208.384 465.454545-465.454545 465.454545S46.545455 769.070545 46.545455 512z"
                        p-id="6634"
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
    name: "signFail",
    data() {
        return {
            isShow: false
        };
    },
    props: {
        content: {
            default: "失败"
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
.sign-fail {
    position: relative;
    width: 100vw;
    height: 100vh;
    .box {
        position: absolute;
        width: 260px;
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
            display: block;
            margin: 10px auto 15px;
            width: 40px;
            height: 40px;
            .icon-svg {
                width: 100%;
                height: 100%;
            }
        }
        .txt {
            margin-top: 15px;
        }
    }
}
</style>