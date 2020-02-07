<template>
        <transition name="popup">
                <div v-if="isShow" class="popup">
                        <slot></slot>
                </div>
        </transition>
</template>

<script>
export default {
        data() {
                return {
                        isShow: false
                }
        },
        name: 'poper',
        mounted(){
                this.isShow=true;
        },
        methods: {
                show() {
                        this.isShow = true;
                },
                hide() {
                        this.isShow = false;
                }
        },
}
</script>

<style lang="less">
.popup-enter,.popup-leave-active{
                transform:translateY(50%);
                opacity: 0;
}
.popup {
        transition: .3s all;
        z-index: 99999;
        display:flex;
        content:center;
        align-item:center;
}
</style>
