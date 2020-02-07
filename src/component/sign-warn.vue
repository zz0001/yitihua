<template>
    <div class="sign-warn" v-if="isShow">
        <div class="box">
            <span class="icon">
                <svg
                    t="1578990628147"
                    class="icon"
                    viewBox="0 0 1024 1024"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    p-id="1912"
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                    width="200"
                    height="200"
                >
                    <path
                        d="M512 32C246.4 32 32 246.4 32 512s214.4 480 480 480 480-214.4 480-480S777.6 32 512 32z m0 896C281.6 928 96 742.4 96 512S281.6 96 512 96s416 185.6 416 416-185.6 416-416 416z"
                        p-id="1913"
                        fill="#dbdbdb"
                    />
                    <path
                        d="M512 704m-38.4 0a38.4 38.4 0 1 0 76.8 0 38.4 38.4 0 1 0-76.8 0Z"
                        p-id="1914"
                        fill="#dbdbdb"
                    />
                    <path
                        d="M512 256c-28.8 0-48 19.2-48 44.8l16 320c0 9.6 16 19.2 32 19.2 19.2 0 32-9.6 32-19.2l16-320c0-25.6-19.2-44.8-48-44.8z"
                        p-id="1915"
                        fill="#dbdbdb"
                    />
                </svg>
            </span>
            <span class="txt">{{content}}</span>
        </div>
    </div>
</template>

<script>
export default {
    name: "signWarn",
    data() {
        return {
            isShow: false
        };
    },
    props: {
        content: {
            default: "警告"
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
.sign-warn {
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