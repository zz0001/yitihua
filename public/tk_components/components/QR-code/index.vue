<template>
    <div v-if="isShow" class="tk-qr-code">
        <div @click="hide" class="shade"></div>
        <div class="code" style="width:200px;height:200px;" ref="code"></div>
    </div>
</template>

<script>
export default {
    props: ["value","width",'height'],
    name:'tk-qr-code',
    watch: {
        value(newV) {
            this.tvalue = newV;
        },
        tvalue(newV) {
            this.init();
            this.$emit("input", newV);
        }
    },
    data() {
        return {
            tvalue: this.value,
            isShow:false
        };
    },
    mounted() {
        this.$nextTick(()=>{
            this.init();
        })
        
    },
    methods: {
        show(){
            this.isShow=true;
            this.$nextTick(this.init)
        },
        hide(){
            this.isShow=false
        },
        init() {
            if(!this.tvalue){
                return 
            }
            $(this.$refs.code).qrcode(this.tvalue);

            $(this.$refs.code).empty();

            var str = this.toUtf8(this.tvalue);
            $(this.$refs.code).qrcode({
                render: "table",

                width:200 ,

                height:200,

                text: str
            });
        },
        toUtf8(str) {
            var out, i, len, c;

            out = "";

            len = str.length;

            for (i = 0; i < len; i++) {
                c = str.charCodeAt(i);

                if (c >= 0x0001 && c <= 0x007f) {
                    out += str.charAt(i);
                } else if (c > 0x07ff) {
                    out += String.fromCharCode(0xe0 | ((c >> 12) & 0x0f));

                    out += String.fromCharCode(0x80 | ((c >> 6) & 0x3f));

                    out += String.fromCharCode(0x80 | ((c >> 0) & 0x3f));
                } else {
                    out += String.fromCharCode(0xc0 | ((c >> 6) & 0x1f));

                    out += String.fromCharCode(0x80 | ((c >> 0) & 0x3f));
                }
            }

            return out;
        }
    }
};
</script>

<style lang="less" scoped>
.tk-qr-code{
    width:100%;
    height:100%;
    position:fixed;
    left:0;
    right:0;
    bottom: 0;
    top:0;
    z-index:1000;
    .shade{
        background:#000;
        opacity: 0.5;
        left:0;
        right:0;
        bottom:0;
        top:0;
        position:fixed;
        z-index:1001;
    }
    .code{
        left:0;
        right:0;
        bottom:0;
        top:0;
        position:absolute;
        margin:auto;z-index:1002;
    }
}
</style>