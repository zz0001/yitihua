<template>
    <div v-if="isVisible" class="choose-location">
        <tk-header :back="false">
            <div slot="left" v-show="false"></div>
            <input class="choose-location-input" v-model="keyword" placeholder="我的位置" maxlength="100" :onkeydown="getCurrentLocation"/>
            <div slot="right" @click="hide">取消</div>
        </tk-header>
        <div class="allmap" id="allmap" v-show="false"></div>
        <tk-scroll
                :options="{pullDown: false, pullUp: false}"
                v-model="locationList">
            <div class="choose-location-item" v-for="(item, index) in locationList"
                 @click="selectLocation(item)">
                <div class="choose-location-item-left">
                    <div class="choose-location-item-name">{{item.name}}</div>
                    <div class="choose-location-item-address">{{item.address}}</div>
                </div>
                <div class="choose-location-item-right">
                    <div class="choose-location-item-distance">{{calculateDistance(item.location)}}</div>
                </div>
            </div>
        </tk-scroll>
    </div>
</template>

<script type="text/ecmascript-6">
    import Input from "../../../public/pot_components/src/components/input/input";
    import {debounce} from "../../../public/pot_components/src/common/helpers/util";

    export default {
        name: "chooseLocation",
        components: {Input},
        data() {
            return {
                keyword: '',
                locationList: [],
                lng: 118.77625959773,
                lat: 32.049024957943,
                isVisible: false
            }
        },
        created() {
        },
        mounted() {
            window.addEventListener("popstate", this.phoneBack, false);
            this.getCurrentLocation();
            // this.getLocationList(118.77625959773, 32.049024957943, this.keyword);
        },
        computed: {},
        methods: {
            show() {
                this.isVisible = true
            },
            hide() {
                this.isVisible = false
            },
            getCurrentLocation() {
                let geolocation = new BMap.Geolocation();
                // 开启SDK辅助定位
                geolocation.enableSDKLocation();
                geolocation.getCurrentPosition((r) => {
                    console.log(JSON.stringify(r));
                    if (geolocation.getStatus() == BMAP_STATUS_SUCCESS) {
                        var mk = new BMap.Marker(r.point);
                        console.log('您的位置：' + r.point.lng + ',' + r.point.lat);
                        this.lng = r.point.lng;
                        this.lat = r.point.lat;
                        this.getLocationList(this.lng, this.lat, this.keyword);
                    } else {
                        console.log('failed' + geolocation.getStatus());
                    }
                });
            },
            getLocationList(lng, lat, keyword) {
                if (keyword === '') {
                    keyword = '建筑';
                }
                this.axios.post("https://api.map.baidu.com/place/v2/search?query=" + keyword + "&location=" + lat + "," + lng + "&radius=2000&output=json&ak=tKRtxzrOtV70zBS4wZVLUqq5BkgEEaGY&page_size=20").then(d => {
                    console.log(d);
                    this.locationList = d.results;
                });
            },
            calculateDistance(location) {
                let map = new BMap.Map("allmap");
                console.log('this.lng: ' + this.lng);
                console.log('this.lat: ' + this.lat);
                console.log('location.lng: ' + location.lng);
                console.log('location.lat: ' + location.lat);
                let pointA = new BMap.Point(this.lng, this.lat);  // 创建点坐标A
                let pointB = new BMap.Point(location.lng, location.lat);  // 创建点坐标B

                // var pointA = new BMap.Point(106.486654,29.490295);  // 创建点坐标A--大渡口区
                // var pointB = new BMap.Point(106.581515,29.615467);  // 创建点坐标B--江北区
                let range = map.getDistance(pointA, pointB).toFixed(0);
                console.log('range' + range);
                console.log(this._formatDistance(range));
                return this._formatDistance(range);
            },
            /**
             * 格式化距离
             * @param distance 传入的距离（初始格式）
             * @returns {string} '米'或者'千米'格式
             */
            _formatDistance(distance) {
                // 如果小于四位数，显示"米"
                if (distance.length < 4) {
                    return distance + 'm';
                } else {
                    return (distance / 1000).toFixed(1) + 'km';
                }
            },
            selectLocation(item) {
                console.log(item);
                this.$emit('success', item);
                this.hide();
            },
            phoneBack() {
                console.log('监听到手机返回键')
                if (!this.isVisible) {
                    this.hide();
                } else {
                    this.$router.back();
                }
            }
        },
        watch: {
            keyword() {
                console.log('触发监听');
            }
        },
        destroyed() {
            // 当页面销毁必须要移除这个事件，vue不刷新页面，不移除会重复执行这个事件
            window.removeEventListener("popstate", this.phoneBack, false);
        }
    }
</script>

<style lang="less">
    .choose-location {
        width: 100vw;
        height: 100vh;
        background-color: white;
        position: absolute;
        padding-top: 80px;

        .tk-scroll {
        }

        .tk-header {
            position: fixed;
            z-index: 101;
            top: 0;

            .title {
                left: 24px;
                width: 100%;

                .choose-location-input {
                    position: absolute;
                    height: 32px;
                    background-color: white;
                    color: #333333;
                    width: 85%;
                    left: -30px;
                    top: 39px;
                    padding-left: 36px;
                    padding-right: 6px;
                }
            }
        }

        .choose-location-item {
            width: 100%;
            height: 72px;
            display: flex;
            flex-flow: row nowrap;
            align-items: center;
            justify-content: space-between;
            border-bottom: 1px solid #cccccc;

            .choose-location-item-left {
                padding-left: 24px;
                width: 80%;


                .choose-location-item-name {
                    font-size: 18px;
                    overflow: hidden;
                    white-space: nowrap;
                    text-overflow: ellipsis;
                }

                .choose-location-item-address {
                    font-size: 12px;
                    margin-top: 10px;
                    overflow: hidden;
                    white-space: nowrap;
                    text-overflow: ellipsis;
                }
            }

            .choose-location-item-right {
                padding-right: 24px;

                .choose-location-item-distance {
                    font-size: 12px;
                }
            }
        }

    }
</style>
