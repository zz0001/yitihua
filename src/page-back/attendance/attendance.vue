<template>
<div data-role="page" id="attendance_main">
    <tk-header>
        上下班考勤
    </tk-header>
    <div class="html_margin white_background">
        <div id="attendance_map" style="width: 100%;height:calc(100% - 150px);overflow: hidden;margin:0;"></div>
        <table class="inp_table" cellpadding="0" cellspacing="0">
            <tr>

            </tr>
            <tr>
                <td style="min-width: 5em;" class="">当前位置<span>*</span></td>
                <td style="padding:1em 0.5em 1em 0em;line-height: 1.4em;text-align: left;" id="attendance_address"></td>
                <td style="width: 1%;" id="attendance_address_img">
                    <img class="div_input_value_img" src="/staitc/resources/images/icon_blue_refresh.png" />
                </td>
            </tr>
        </table>
        <div class="footer_button_div">
            <div style="width: 50%; float: left">
                <div id="attendance_in_duty" class="alert_bottom_three orange_background">上班</div>
            </div>

            <div style="width: 50%; float: right">
                <div id="attendance_off_duty" class="alert_bottom_three blue_background">下班</div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
export default {
    mounted() {
        init();
        locate();
        /*返回*/
        $("#attendance_main .back-button").listen("quickClick", function (e) {
            app.$router.push("../load/welcome.html");
        });
        //位置
        $("#attendance_main #attendance_address_img").listen("quickClick", function (e) {
            locate();
        });
        //照片
        //            $("#attendance_main #choicemore").click(function (e) {
        //                window.upload_imgscroll = "attendance_img_scroll";
        //                window.upload_imgwrapper = "attendance_img_wrapper";
        //                window.upload_addimg = "attendance_img";
        //                getPhotograph();
        //            });
        //map
       // setTimeout(locate(), 500);

        //上班考勤
        $("#attendance_in_duty").listen("quickClick", function (e) {
            if (isNull($("#attendance_address").html())) {
                toast("请先定位成功");
            } else {
                submit(1);
            }
        });
        //下班考勤
        $("#attendance_off_duty").listen("quickClick", function (e) {
            if (isNull($("#attendance_address").html())) {
                toast("请先定位成功");
            } else {
                submit(2);
            }
        });

        function init() {
            window.picture_array = [];
            window.picture_upImg = "";
            initMapInfo("#attendance_address");
            $("#attendance_img_scroll").css("transform", "none");
            $("#attendance_img_wrapper .scroll-bar-x").css("transform", "none");
            $("#attendance_main #attendance_img").empty();
            $("#attendance_main #attendance_img").append('<img class="goodsimgone" style="padding-top:2em;" src="/staitc/resources/images/icon_add_photo.png" id="choicemore">');
        }

        function initMapInfo(id) {
            $(id).html(window.localStorage.mapAddress);
            window.choiceLongitude = window.longitude;
            window.choiceLatitude = window.latitude;
        }

        function locate() {
            // getLocation();
            getLocation();
            console.log("定位 longitude:" + window.longitude + "||| latitude:" + window.latitude + "|||mapAddress:" + window.localStorage.mapAddress);
            var map;
            var zoom = 12;
            var geocode = "";
            map = new T.Map('attendance_map');
            map.centerAndZoom(new T.LngLat(window.longitude || 120.00623, window.latitude || 32.0444), zoom);
            var icon = new T.Icon({
                iconUrl: "/staitc/resources/images/icon_point.png",
                iconSize: new T.Point(19, 27),
                iconAnchor: new T.Point(10, 25)
            });
            var marker = new T.Marker(new T.LngLat(window.longitude, window.latitude), {
                icon: icon
            });
            //向地图上添加标注
            map.clearOverLays();
            map.addOverLay(marker);
            /*     var lo = new T.Geolocation();
                fn = function (e) {
                    if (this.getStatus() == 0){
                       map.centerAndZoom(e.lnglat, 15)
                      //  alert("获取定位坐标："+e.lnglat.lat + "," + e.lnglat.lng)
                        var marker = new T.Marker(e.lnglat);
                        map.addOverLay(marker);

                    }
                    if(this.getStatus() == 1){
                        map.centerAndZoom(e.lnglat, e.level)
                      //  alert("获取定位坐标："+e.lnglat.lat + "," + e.lnglat.lng)
                        var marker = new T.Marker(e.lnglat);
                        map.addOverLay(marker);
                    }
                }
                lo.getCurrentPosition(fn); */

            //alert("定位获取的地址：" + window.localStorage.mapAddress + "，\t经纬度：" + window.longitude + "\t," + window.latitude);
            $("#attendance_address").html(window.localStorage.mapAddress);
            //$("#map_html_longitudeLatitude").html("经纬度：" + window.choiceLongitude + "\t" + window.choiceLatitude);
            /*展示当前位置 end*/
            //                var cp = new T.CoordinatePickup(map, {
            //                    callback: function (lnglat) {
            //                        var icon = new T.Icon({
            //                            iconUrl: "/staitc/resources/images/icon_point.png",
            //                            iconSize: new T.Point(19, 27),
            //                            iconAnchor: new T.Point(10, 25)
            //                        });
            //                        window.shortLongitude = lnglat.lng.toFixed(4);
            //                        window.shortLatitude = lnglat.lat.toFixed(4);
            //                        //$("#map_html_longitudeLatitude").html("经纬度：" + window.shortLongitude + "\t" + window.shortLatitude);
            //                        //alert("经纬度：" + lnglat.lng.toFixed(4) + ",\t" + lnglat.lat.toFixed(4));
            //                        map.clearOverLays();
            //                        marker = new T.Marker(new T.LngLat(lnglat.lng.toFixed(4), lnglat.lat.toFixed(4)), {icon: icon});
            //                        //向地图上添加标注
            //                        map.addOverLay(marker);
            //
            //                        var ggPoint = new BMap.Point(lnglat.lng,lnglat.lat);
            //                        var pointArr = [];
            //                        pointArr.push(ggPoint);
            //                        var convertor = new BMap.Convertor();
            //                        convertor.translate(pointArr, 1, 5, function(data){
            //                            if(data.status === 0){
            //                                var geocode = new BMap.Geocoder();
            //                                geocode.getLocation(data.points[0], function(result){
            //                                    $("#attendance_address").html(result.address);
            //                                });
            //                            }
            //                        })
            //                        /*var lo = new T.Geolocation();
            //                        geocode = new T.Geocoder();
            //                        geocode.getLocation(lnglat, function (result) {
            //                            $("#map_html_address").html(result.formatted_address);
            //                        });*/
            //                    }
            //                });
            //                cp.addEvent();
        }

        //        function attendance_upLoadPic(img, type, duty) {
        //            var obj = "";
        //            obj += toJson("base64Str", img);
        //            doPost(".action", obj, function (data) {
        //                if (data.code == 0) {
        //                    console.log("======当前上传第:" + type + "张,下次上传第" + type + "张");
        //                    if (type < parseInt(window.picture_array.length)) {
        //                        var typename = parseInt(type) + 1;
        //                        attendance_upLoadPic(window.picture_array[type], typename, duty);
        //                    } else {
        //                        console.log("图片上传结束");
        //                    }
        //                    if (isNull(window.picture_upImg)) {
        //                        window.picture_upImg = data.data;
        //                    } else {
        //                        window.picture_upImg = window.picture_upImg + ";" + data.data;
        //                    }
        //                    console.log("图片数据：" + window.picture_upImg);
        //                    toast(data.message);
        //                    submit(duty);
        //                } else {
        //                    toast(data.message);
        //                }
        //            }, "", "");
        //        }

        function submit(e) {
            console.log("上传的图片信息：" + window.picture_upImg);
            var obj = "";
            obj += toJson("userId", $.trim(window.localStorage.userId)) + "&"; //
            obj += toJson("address", $.trim($("#attendance_address").html())) + "&"; //位置描述
            obj += toJson("attendStatus", $.trim(e)) + "&"; //
            obj += toJson("longitude", $.trim(window.longitude)) + "&"; //
            obj += toJson("latitude", $.trim(window.latitude)); //

            doPost("app_userCheck.action", obj, function (data) {
                if (data.code == 0) {
                    toast(data.message);
                    if (data.attendStatus == "1") {
                        window.localStorage.signState = "签到";
                    } else if (data.attendStatus == "2") {
                        window.localStorage.signState = "签退";
                    }
                    //                    init();
                    //waitJumpPage("../load/welcome.html");
                    that.$router.push({path:'welcome',query:{}});
                } else {
                    toast(data.message);
                }
            }, "", "");
        }
    }
}
</script>

<style lang="less" scoped>
.html_margin {
    height: calc(100vh - 50px);
}

#attendance_main .attendanceAddImgs {
    overflow: hidden;
    background: #f3f3f3;
}

#attendance_main .div_input_value_img {
    width: 1.5em;
    height: 1.5em;
    margin-right: 0.5em;
}

#attendance_main #attendance_img {
    height: 7.5em;
    overflow: hidden;
    display: inline-block;
}

#attendance_main .imgdiv {
    padding: 0.7em;
    padding-top: 0em;
    position: relative;
    width: 6em;
    float: left;
}

#attendance_main .goodsimgone {
    float: left;
    height: 6em;
    width: 6em;
    margin-top: -1em;
}
</style>
