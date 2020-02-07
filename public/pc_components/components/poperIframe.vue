<template>
        <poper>
                <div class="poperIframe">
                        <iframe ref="iframe" :src="src" frameborder="0">

                        </iframe>
                </div>
        </poper>
</template>

<script>
export default {
        props:['src'],
        name:'poperIframe',
        components:{
                poper:()=>import('./poper.vue')
        },
        mounted(){
                var iframe=this.$refs.iframe.contentWindow.document;
                // iframe.
        }
}
</script>

<style lang="less">
        .poperIframe{
                width:1500px;
                height:1000px;
                background:#fff;
                iframe{
                        width:100%;
                        height:100%;
                        .page_content{
                                background:#000;
                        }
                }
        }
</style>
