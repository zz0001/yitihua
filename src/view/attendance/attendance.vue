<template>
    <div class="attendance">
        <tk-header>上下班考勤</tk-header>
        <div class="attendance-content">
            <div class="map-wrapper">
                <div class="attendance-map" id="attendance_map"></div>
            </div>
            <div class="attend-btn-wrapper">
                <div class="attend-btn">
                    <div class="circle-wrapper" @click="attend">
                        <!--                    <div class="circle-wrapper" @click="_test">-->
                        <div class="attendance-time">{{time}}</div>
                        <div class="attendance-duty">{{duty}}</div>
                    </div>
                </div>

            </div>
        </div>
    </div>
</template>

<script type="text/ecmascript-6">
    const conf = require('../../../webpack.config');

    import axios from "axios";

    export default {
        name: "attendance",
        data() {
            return {
                time: '09:41',
                duty: '上班打卡',
                inRange: true,
                address: '',
                timer: '',
            }
        },
        created() {
            let obj = {para: 'userId=' + window.localStorage.userId};
            let url = window.serverUrl + 'app_userStateCheck.action';
            // axios.post(url, obj).then(d => {
            //
            //     console.log(d);
            //     if (d.attendStatus == "0") {
            //         this.duty = "上班打卡"
            //     } else if (d.attendStatus == "1") {
            //         this.duty = "下班打卡"
            //     } else {
            //         this.duty = "下班打卡"
            //     }
            //
            //
            // })

            this.$http.post('/wgh/app/app_userStateCheck.action', obj).then(d => {
                console.log(d);
                if (d.attendStatus == "0") {
                    this.duty = "上班打卡"
                } else if (d.attendStatus == "1") {
                    this.duty = "下班打卡"
                } else {
                    this.duty = "下班打卡"
                }
            });
        },
        mounted() {

            this._getLocation();
            this.timer = setInterval(this._clock, 1000);


        },
        beforeDestroy() {
            clearInterval(this.timer);
        },
        methods: {
            showMapWithoutPosition() {
                // 开局一张图

            },
            _getLocation() {
                if (navigator.geolocation) {
                    navigator.geolocation.getCurrentPosition(this._showPosition, error => {
                        console.log('进入定位错误回调');
                        console.log(error.message);
                        switch (error.code) {
                            case error.PERMISSION_DENIED:
                                console.log("用户拒绝对获取地理位置的请求。");
                                break;
                            case error.POSITION_UNAVAILABLE:
                                console.log("位置信息是不可用的。");
                                break;
                            case error.TIMEOUT:
                                console.log("请求用户地理位置超时。");
                                break;
                            case error.UNKNOWN_ERROR:
                                console.log("未知错误。");
                                break;
                        }
                        setTimeout(this._getLocation, 500);
                    }, {
                        enableHighAccuracy: false, // 是否获取高精度结果
                        timeout: 10000, //超时,毫秒
                        maximumAge: 0 //可以接受多少毫秒的缓存位置
                        // 详细说明 https://developer.mozilla.org/en-US/docs/Web/API/PositionOptions
                    });
                } else {
                    alert("是否开启了GPS功能");
                }
            },
            _showPosition(e) {
                if (isNull(e.coords.longitude)) {
                    toast("坐标为空,请重新定位");
                } else {
                    console.log('定位成功，进入_showPosition');
                    window.longitude = e.coords.longitude;
                    window.latitude = e.coords.latitude;
                    window.choiceLongitude = e.coords.longitude;
                    window.choiceLatitude = e.coords.latitude;
                    var ggPoint = new BMap.Point(window.longitude, window.latitude);
                    var pointArr = [];
                    pointArr.push(ggPoint);
                    var convertor = new BMap.Convertor();
                    convertor.translate(pointArr, 1, 5, data => {
                        if (data.status === 0) {
                            var geocode = new BMap.Geocoder();
                            geocode.getLocation(data.points[0], result => this._searchResult(result));
                        }
                    });
                }
            },
            _searchResult(result) {
                console.log('_searchResult: ' + result.address);
                window.localStorage.mapAddress = result.address;
                this.address = result.address;
                if (!isNull(window.setIdMapAddress)) {
                    $("#" + window.setIdMapAddress).html(window.localStorage.mapAddress);
                }
                this._refreshMap();
            },
            _refreshMap() {
                console.log('进入_refreshMap');
                console.log('当前longitude：' + window.longitude);
                console.log('当前latitude：' + window.latitude);
                let map;
                let zoom = 16;
                let geocode = "";
                map = new T.Map('attendance_map');
                map.centerAndZoom(new T.LngLat(window.longitude || 120.00623, window.latitude || 32.0444), zoom);
                let icon = new T.Icon({
                    iconUrl: require("../../image/icon_point.png"),
                    iconSize: new T.Point(19, 27),
                    iconAnchor: new T.Point(10, 25)
                });
                let marker = new T.Marker(new T.LngLat(window.longitude, window.latitude), {
                    icon: icon
                });
                //向地图上添加自己位置的标志
                map.clearOverLays();
                map.addOverLay(marker);

                // let label = new T.Label({
                //     text: window.localStorage.mapAddress,
                //     position: new T.LngLat(window.longitude, window.latitude),
                //     offset: new T.Point(-9, 0)
                // });
                // //向地图上添加地址文本
                // map.addOverLay(label);

                // 定义该矩形的显示区域
                let circle = new T.Circle(new T.LngLat(window.longitude, window.latitude), 200, {
                    color: "blue",
                    weight: 1,
                    opacity: 0.5,
                    fillColor: "#666666",
                    fillOpacity: 0.3,
                    lineStyle: "solid"
                });
                //向地图上添加圆
                map.addOverLay(circle);
            },
            /**
             * 获取当前时间
             * @private
             */
            _clock() {
                let now = new Date();
                let year = now.getFullYear(); //得到年份
                let month = now.getMonth();//得到月份
                let date = now.getDate();//得到日期
                let day = now.getDay();//得到周几
                let hour = now.getHours().toString().padStart(2, '0');//得到小时
                let min = now.getMinutes().toString().padStart(2, '0');//得到分钟
                let sec = now.getSeconds();//得到秒
                // 拼接字符串 HH:mm
                this.time = hour + ':' + min;
            },
            attend() {
                console.log('点击了打卡按钮');
                let status = this.duty === '上班打卡' ? 1 : 2;
                // 首先判断是否定位成功
                this.submit(status);

                // if (isNull(this.address)) {
                //     toast('请等待定位成功');
                //     return;
                // }
                // // 然后判断范围
                // if (this.inRange) {
                //     //如果在打卡范围内，直接打卡
                //     this.submit(status);
                // } else {
                //     //如果不在打卡范围内，弹对话框提示是否打卡
                //
                // }
            },
            /**
             * 上下班打卡
             * @param e 上班:1 下班:2
             */
            submit(e) {
                // let obj = "";
                // obj += toJson("userId", $.trim(window.localStorage.userId)) + "&";
                // obj += toJson("address", $.trim(this.address)) + "&";
                // obj += toJson("attendStatus", $.trim(e)) + "&";
                // obj += toJson("longitude", $.trim(window.longitude)) + "&";
                // obj += toJson("latitude", $.trim(window.latitude));
                //
                // doPost.call(this, "app_userCheck.action", obj, data => {
                //     // doPost("app_userCheck.action", obj, data => {
                //     console.log('attendance接口返回');
                //     console.log(data);
                //     if (data.code == 0) {
                //         toast(data.message);
                //         if (data.attendStatus == "1") {
                //             // window.localStorage.signState = "签到";
                //             this.duty = '上班打卡';
                //             console.log('服务器地址： ' + conf.proxy[0].target);
                //             jsict.logininfo.save((res) => {
                //                 console.log(res);
                //             }, (err) => {
                //                 console.error(err);
                //             }, localStorage.getItem('token'), conf.proxy[0].target);
                //             jsict.logininfo.start((res) => {
                //                 console.log(res);
                //             }, (err) => {
                //                 console.error(err);
                //             });
                //         } else if (data.attendStatus == "2") {
                //             // window.localStorage.signState = "签退";
                //             this.duty = '下班打卡';
                //             jsict.logininfo.stop((res) => {
                //                 console.log(res);
                //             }, (err) => {
                //                 console.error(err);
                //             });
                //         }
                //         this.$router.back();
                //     } else {
                //         toast(data.message);
                //     }
                // }, "", "");

                this.$http.post('wgh/app/app_userCheck.action', {
                    token: localStorage.getItem('token'),
                    address: this.address,
                    attendStatus: e,
                    longitude: window.longitude,
                    latitude: window.latitude
                }).then(data => {
                    console.log(data);
                    if (data.code == 0) {
                        toast(data.message);
                        if (data.attendStatus == "1") {
                            // window.localStorage.signState = "签到";
                            this.duty = '上班打卡';
                            console.log('服务器地址： ' + conf.proxy[0].target);
                            jsict.logininfo.save((res) => {
                                console.log(res);
                            }, (err) => {
                                console.error(err);
                            }, localStorage.getItem('token'), conf.proxy[0].target);
                            jsict.logininfo.start((res) => {
                                console.log(res);
                            }, (err) => {
                                console.error(err);
                            });
                        } else if (data.attendStatus == "2") {
                            // window.localStorage.signState = "签退";
                            this.duty = '下班打卡';
                            jsict.logininfo.stop((res) => {
                                console.log(res);
                            }, (err) => {
                                console.error(err);
                            });
                        }
                        this.$router.back();
                    } else {
                        toast(data.message);
                    }
                });
            },
            _test() {
                jsict.check.check(() => {
                    jsict.speech.startListen((res) => {
                        console.log('前端接收到语音：\n' + res);
                    }, () => {
                    });
                }, () => {
                }, 'microphone');
            }
        }
    }
</script>

<style lang="less" scoped>
    .attendance {
        width: 100%;
        height: 100%;

        .attendance-content {
            width: 100%;
            height: 100%;

            .map-wrapper {
                overflow: hidden;
                width: 100%;
                height: 60%;

                .attendance-map {
                    width: 100%;
                    height: 100%;
                    overflow: hidden;
                    margin: 0;
                    z-index: 1;
                }
            }

            .attend-btn-wrapper {
                position: relative;
                width: 100%;
                height: 40%;
                display: flex;
                flex-flow: row nowrap;
                align-items: center;
                justify-content: center;

                .attend-btn {
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    display: flex;
                    flex-flow: column nowrap;
                    align-items: center;
                    justify-content: center;

                    .circle-wrapper {
                        width: 120px;
                        height: 120px;
                        border-radius: 50%;
                        border: 3px solid #1b86d7;
                        display: flex;
                        flex-flow: column nowrap;
                        align-items: center;
                        justify-content: center;

                        .attendance-time {
                            font-size: 20.5px;
                            font-weight: bold;
                            color: #333333;
                        }

                        .attendance-duty {
                            margin-top: 17px;
                            font-size: 15.4px;
                            color: #666666;
                        }
                    }
                }
            }
        }
    }
</style>
