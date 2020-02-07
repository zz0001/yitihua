<template>
<div class="address-list">
    <pot-scroll @scrollMounted="scrollMounted" ref="scroll">
        <ul class="friend_list">
            <li v-if="!filter||(data.name&&data.name.indexOf(filter)!=-1)" @click="$emit('liClick',data)" :class="{isSystem:data.system}" v-for="(data,i) of list_sort">
                <div v-if="!data.system">
                    <img :src="require('./avatar.png')" alt="" />
                    <span v-if="data.name&&!filter">
                        {{ data.name }}
                    </span>
                    <template v-if="data.name&&filter" v-for="(item,index) of data.name.split(filter)">
                        <span v-html="item"></span>
                        <span v-html="filter" class="filter" v-if="index!=(data.name.split(filter).length-1)"></span>
                    </template>
                    <!-- <span class="svg" :class="{active:selectedIds.indexOf(data.id)>=0}">
                        <svg fill="#fff" v-if="selectedIds.indexOf(data.id)>=0" t="1541034906007" class="icon" style="" viewBox="0 0 1397 1024" version="1.1" p-id="1046" width="272.8515625" height="200">
                            <path d="M1396.363636 121.018182c0 0-223.418182 74.472727-484.072727 372.363636-242.036364 269.963636-297.890909 381.672727-390.981818 530.618182C512 1014.690909 372.363636 744.727273 0 549.236364l195.490909-186.181818c0 0 176.872727 121.018182 297.890909 344.436364 0 0 307.2-474.763636 902.981818-707.490909L1396.363636 121.018182 1396.363636 121.018182zM1396.363636 121.018182" p-id="1047" />
                        </svg>
                    </span> -->
                </div>
                <div :class="data.system" ref="letter" v-if="data.system">
                    {{data.system}}
                </div>
            </li>
        </ul>
    </pot-scroll>
    <div @touchend="azend" @touchmove="azmove" @touchstart="azstart" :class="{active:azact}" class="a-z" ref="az">
        <div :class="[item]" :style="{'line-height':oheight+'px'}" v-for="item of letters" :ref="item">
            {{item}}
        </div>
    </div>
    <div v-if="azcontent" class="azcontent">
        {{azcontent}}
    </div>
</div>
</template>

<script>
function pySegSort(arr, prop) {
    if (!String.prototype.localeCompare)
        return null;
    var letters = "*abcdefghjklmnopqrstwxyz".split('');
    var zh = "阿八嚓哒妸发旮哈讥咔垃马拏噢妑七呥扨它穵夕丫帀".split('');
    var segs = [];
    letters.forEach(function(that,i){
        var arr1 = [];
        var arr2 = [];
        arr.forEach(function(_this){
            var a = _this[prop].charCodeAt();
            if (a < 123 && (that.toLowerCase() == _this[prop].toLowerCase()[0])) {
                arr1.push(_this);
                _this.letters = that.toUpperCase();
            }
            if (a > 122 && (!zh[i - 1] || zh[i - 1].localeCompare(_this[prop][0], "zh") <= 0) && _this[prop][0].localeCompare(zh[i], "zh") == -1) {
                arr2.push(_this);
                _this.letters = that.toUpperCase();
            }
        })
        if (arr1.length || arr2.length) {
            arr1.sort(function (a, b) {
                return a[prop].localeCompare(b[prop], "zh");
            });
            arr2.sort(function (a, b) {
                return a[prop].localeCompare(b[prop], "zh");
            });
            segs.push(arr1.concat(arr2));
        }
    })
    var result = [];
    for (var i = 0; i < segs.length; i++) {
        result = result.concat(segs[i])
    }
    return result;
}
export default {
    props: ['value', 'filter'],
    data() {
        return {
            selected: [],
            azact: false,
            oheight: 0,
            azcontent: '',
            positionY: [],
            pageLetterPosition: [],
            letters: "↑abcdefghjklmnopqrstwxyz".toUpperCase().split(''),
            list: this.value
        }
    },
    computed: {
        list_sort() {
            var list = this.list
            if (!list) return;
            var arr = [];
            var olist = pySegSort(list, 'name');
            var oactive;
            for (var i = 0; i < olist.length; i++) {
                if (oactive != olist[i].letters) {
                    arr.push({
                        system: olist[i].letters
                    })
                    oactive = olist[i].letters
                }
                arr.push(olist[i]);
            }
            return arr;
        }
    },
    watch: {
        value(newV) {
            this.list = newV;
            if(newV.length){
                this.$nextTick(() => {
                    this.scrollMounted();
                })
            }
            
        },
        azcontent(newV) {
            if (!newV) return;
            if (newV == '↑') {
                this.$refs.scroll.scrollTo(0, 0, 300);
            } else {
                for (var i = 0; i < this.pageLetterPosition.length; i++) {
                    if (this.pageLetterPosition[i].letter == newV) {
                        console.log(this.pageLetterPosition[i].position);
                        this.$refs.scroll.scrollTo(0, -this.pageLetterPosition[i].position,500,'ease');
                    }
                }
            }

        }
    },
    mounted() {

    },
    methods: {
        scrollMounted() {
            this.$nextTick(() => {
                this.mountAZ();
            })

        },
        mountAZ() {
            var arr = [];
            var height = this.$refs.az.offsetHeight / 24;
            this.oheight = height;
            var top = $('.a-z .A').offset().top;
            for (var i = 0; i <= this.letters.length; i++) {
                arr.push(top + height * (i - 1));
            }
            if(this.$refs.letter){
                this.$refs.letter.forEach((item) => {
                    this.pageLetterPosition.push({
                        letter: item.className,
                        position: item.offsetTop
                    })
                })
            }
            
            this.positionY = arr;
        },
        az(e) {
            var y = e.targetTouches[0].clientY;
            var positionY = this.positionY;
            for (var i = 0; i < positionY.length; i++) {
                if (y < positionY[i]) {
                    this.azcontent = this.letters[i - 1];
                    break;
                }
            }
        },
        azstart(e) {
            this.azact = true;
            this.startY = e.targetTouches[0].clientY;
            this.az.call(this, e);
        },
        azmove(e) {
            var y = e.targetTouches[0].clientY;
            var minus = this.positionY[1] - this.positionY[0]
            if (Math.abs(y - this.startY) >= minus) {
                this.az.call(this, e)
                this.startY = y;
            }
        },
        azend() {
            this.azact = false;
            this.azcontent = '';
        }
    }
}
</script>

<style lang="less">
@keyframes mymove {
    from {
        transform: scale(0, 0);
    }

    to {
        transform: scale(1, 1);
    }
}

.address-list {
    height: calc(100vh - 180px);
    width:100vw;
    .filter {
        color: rgb(211, 94, 27);
    }
}

.friend_list {
    padding-bottom:100px;
    >li {
        background: #fff;
        height: 50px;
        line-height: 50px;
        line-height: 50px;
        padding-left: 20px;
        margin-top: -1px;
    }

    >li:not(.isSystem) {
        position: relative;
        padding-left: 50px;
        border-bottom: 1px solid #e5e5e5;
        border-top: 1px solid #e5e5e5;
        img {
            position: absolute;
            left: 10px;
            top: 8px;
            width: 30px;
            height: 30px;
        }

        >div {
            span.svg{
                margin-top: 15px;
                display: inline-block;
                float: right;
                margin-right: 35px;
                width: 20px;
                height: 20px;
                border: 1px solid #e5e5e5;
                border-radius: 3px;
                transition: .3s all;

                &.active {
                    background: #0084ff;
                    border: 1px solid #0084ff;
                    position: relative;

                    svg {
                        animation: mymove .3s;
                        position: absolute;
                        top: 2px;
                        left: 2px;
                        width: 15px;
                        height: 15px;
                    }
                }
            }
        }
    }

    >li.isSystem {
        height: 40px;
        line-height: 40px;
        padding-left: 20px;
        background: #f8f8f8;
        color: #666;
        font-size: 14px;
    }
}

.a-z.active {
    background: rgba(0, 0, 0, .05);
}

.a-z {
    z-index: 100;
    position: absolute;
    top: 110px;
    bottom: 110px;
    font-size: 10px;
    color: #278add;
    right: 0;
    width: 30px;
    display: flex;
    flex-direction: column;
    text-align: center;

    div {
        vertical-align: middle;
        flex: 1;
    }
}

.azcontent {
    z-index: 100;
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    top: 0;
    margin: auto;
    background: rgba(0, 0, 0, .3);
    border-radius: 10px;
    font-size: 30px;
    color: #fff;
    line-height: 100px;
    height: 100px;
    width: 100px;
    text-align: center;
}
</style>
