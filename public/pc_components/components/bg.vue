<template>
<div>
    <!-- <iframe class="baniframe" sandbox="allow-scripts allow-same-origin" id="mh" :src="`http://www.jq22.com/js/a${d}.html`"></iframe> -->
</div>
</template>

<script>
export default {
    data(){
        return {
            d:5
        }
    },
    mounted(){
        setInterval(() => {
            this.d++;
            if(this.d==6){
                this.d++;
            }
            if(this.d==16){
                this.d=1
            }
        }, 20000);
    }
}
</script>

<style scoped>
    .baniframe{
        position:fixed;
        width:100%;
        height:100%;
        z-index:-1;
    }
</style>
