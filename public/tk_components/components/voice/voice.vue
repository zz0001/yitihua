<template>
    <div class="tk-voice">
        <svg t="1578360744207" @touchstart="touchstart" @touchend="touchend" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1614" width="200" height="200"><path d="M514.048 650.24c-75.776 0-137.728-61.44-137.728-137.728V275.968c0-75.776 61.44-137.728 137.728-137.728 75.776 0 137.728 61.44 137.728 137.728v237.056c-0.512 75.776-61.952 137.216-137.728 137.216z m0-445.44c-38.912 0-71.168 31.744-71.168 71.168v237.056c0 38.912 31.744 71.168 71.168 71.168 38.912 0 71.168-31.744 71.168-71.168V275.968c-0.512-38.912-32.256-71.168-71.168-71.168zM515.072 881.664c-18.432 0-33.28-14.848-33.28-33.28v-74.752c0-18.432 14.848-33.28 33.28-33.28s33.28 14.848 33.28 33.28v74.752c0 18.432-14.848 33.28-33.28 33.28z" fill="" p-id="1615"></path><path d="M516.096 784.896c-166.4 0-302.08-135.168-302.08-302.08 0-18.432 14.848-33.28 33.28-33.28s33.28 14.848 33.28 33.28c0 129.536 105.472 235.52 235.52 235.52s235.52-105.472 235.52-235.52c0-18.432 14.848-33.28 33.28-33.28s33.28 14.848 33.28 33.28c0 166.4-135.68 302.08-302.08 302.08zM651.776 884.224h-271.36c-18.432 0-33.28-14.848-33.28-33.28s14.848-33.28 33.28-33.28h270.848c18.432 0 33.28 14.848 33.28 33.28s-14.848 33.28-32.768 33.28z" fill="" p-id="1616"></path></svg>
    </div>
</template>

<script>
export default {
    props:['value'],
    data(){
        return {
            tvalue:this.value,
            isVoicing:false
        }
    },
    watch:{
        value(newV){
            this.tvalue=newV
        },
        tvalue(newV){
            this.$emit('input',newV)
        }
    },
    mounted() {

    },
    methods: {
        touchstart(){
            this.isVoicing=true;
            console.log('jsict start')
            jsict.check.check(() => {
                console.log('jsict callback')
                jsict.speech.startListen((res) => {
                    console.log('jsict speech callback')
                    this.tvalue+=res;
                }, () => {
                    console.log('jsict speech callback error')
                });
            }, () => {
            }, 'microphone');

        },
        touchend(){
            this.isVoicing=false;

        }
    }
};
</script>

<style lang="less" scoped>
.tk-voice{
    display: inline-block;
    width:30px;
    height:30px;
    vertical-align: middle;
   .icon{
       width:100%;
       height:100%;
   }
}
</style>