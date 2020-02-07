<template>
        <div class="address-slide">
                <div v-for="item of dataCpt" class="address_box">
                        <img :src="'/zhsq/'+item.img" />
                        <div>
                                <p>姓名：{{item.name}}</p>
                                <p>单位：{{item.unit}}</p>
                                <p>职务：{{item.duty}}</p>
                                <p>手机：{{item.phone}}</p>
                        </div>
                </div>
        </div>
</template>

<script>
        export default {
                props:['data'],
                data(){
                        return {
                                active:0
                        }
                },
                computed:{
                        dataCpt(){
                                var a=this.data.concat([])
                                return a.splice(this.active,2)
                        }
                },
                beforeDestroy(){
                        clearInterval(this.timer)
                },
                mounted(){
                        this.timer=setInterval(()=>{
                                this.active+=2;
                                if(this.active>=this.data.length){
                                        this.active=0;
                                }
                        },5000)
                },
        }
</script>

<style lang="less">
        .address-slide{
                display:flex;
                height:80%;
                .address_box {
                        flex:1;
                        height: 100%;
                        border: 1px solid rgba(154, 210, 211, 0.3);
                        margin-bottom: 20px;
                        float: left;
                }

                .address_box img {
                        width: 144px;
                        height: 100%;
                }

                .address_box>div {
                        float: right;
                        padding-right: 30px;
                        padding-top: 4px;
                }

                .address_box>div p {
                        text-align: left;
                        line-height: 54px;
                }

                .address_box:nth-child(2n) {
                        margin-left: 26px;
                }
        }
</style>
