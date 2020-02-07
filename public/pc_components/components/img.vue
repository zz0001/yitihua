<template>
        <img @click="bigger" :src="src" alt="">
</template>

<script>
import bigerImage from '../modules/biger-image.js';
import Vue from 'vue';
Vue.use(bigerImage);
export default {
        props:['src'],
        methods:{
                bigger(){
                        this.$createPcBigerImage({
                                $props:{
                                        src:this.src
                                }
                        })
                }
        }
}
</script>

<style>

</style>
