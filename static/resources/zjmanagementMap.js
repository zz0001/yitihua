//var map,point,geolocation,geoc="";
/*function getLocalAddress(id) {
 var map = "";
 var zoom = 12;
 var geocode = "";
 //window.address = "";
 //showMapAlert("请选择位置", "确定", "", function () {
 //    $("#case_edit_address").html($("#map_html_address").html());
 //    window.choiceLongitude = window.shortLongitude;
 //    window.choiceLatitude = window.shortLatitude;
 //    console.log($("#map_html_address").html() + "\t,选中的经纬度：" + window.choiceLongitude + "\t," + window.choiceLatitude);
 //    $(".mapshowalert").remove();
 //});
 map = new T.Map("load_map");
 //设置显示地图的中心点和级别
 //alert(111111);
 map.centerAndZoom(new T.LngLat(32.2059, 119.4443), zoom);
 //alert(3333);
 var lo = new T.Geolocation();
 lo.getCurrentPosition(function (e) {
 //alert(0);
 //if (this.getStatus() == 0) {
 map.centerAndZoom(e.lnglat, 15);
 console.log("获取定位坐标：" + JSON.stringify(e));
 //var marker = new T.Marker(e.lnglat);
 //map.addOverLay(marker);
 window.longitude = e.lnglat.lng;
 window.latitude = e.lnglat.lat;
 window.choiceLongitude = e.lnglat.lng;
 window.choiceLatitude = e.lnglat.lat;
 console.log("经度：" + window.choiceLongitude);
 console.log("纬度：" + window.choiceLatitude);
 geocode = new T.Geocoder();
 geocode.getLocation(e.lnglat, function (result) {
 alert("反编译：" + JSON.stringify(result));
 //alert("aa" + result.getStatus() + "," + result.getAddress());
 //            if (result.getStatus() == 0) {
 window.localStorage.mapAddress = result.formatted_address;
 if (!isNull(id)) {
 $(id).html(window.localStorage.mapAddress);
 }
 //$("#map_address").html(result.getAddress());
 console.log("定位地址" + result.getAddress());
 });

 //alert("status:" + this.getStatus() + JSON.stringify(e.lnglat));
 //if (this.getStatus() == 1) {
 //    map.centerAndZoom(e.lnglat, e.level)
 //    alert("获取定位坐标2：" + e.lnglat.lat + "," + e.lnglat.lng)
 //    var marker = new T.Marker(e.lnglat);
 //    map.addOverLay(marker);
 //    //创建对象
 //    geocode = new T.Geocoder();
 //    alert("b" + JSON.stringify(e.lnglat) + e.lnglat.lat + "," + e.lnglat.lng);
 //    geocode.getLocation(e.lnglat, searchResult);
 //}
 });
 }*/
var map, geolocation;
var x_PI = 3.14159265358979324 * 3000.0 / 180.0;
var PI = 3.1415926535897932384626;
var a = 6378245.0;
var ee = 0.00669342162296594323;
//function gaoDe() {
//
//    //加载地图，调用浏览器定位服务
//    map = new AMap.Map('load_map', {
//        resizeEnable: true
//    });
//    map.plugin('AMap.Geolocation', function (data) {
//        geolocation = new AMap.Geolocation({
//            enableHighAccuracy: true,//是否使用高精度定位，默认:true
//            timeout: 10000,          //超过10秒后停止定位，默认：无穷大
//            buttonOffset: new AMap.Pixel(10, 20),//定位按钮与设置的停靠位置的偏移量，默认：Pixel(10, 20)
//            zoomToAccuracy: true,      //定位成功后调整地图视野范围使定位位置及精度范围视野内可见，默认：false
//            buttonPosition: 'RB'
//        });
//        map.addControl(geolocation);
//        geolocation.getCurrentPosition();
//        AMap.event.addListener(geolocation, 'complete', function (data) {
//            alert(JSON.stringify(data));
//            var geocode = new T.Geocoder();
//            geocode.getLocation(new T.LngLat(data.position.getLng(), data.position.getLat()), searchResult);
//        });//返回定位信息
//        AMap.event.addListener(geolocation, 'error', onError);      //返回定位出错信息
//    });
//}
function searchResult(result) {
    //alert("定位的信息：" + JSON.stringify(result));
    window.localStorage.mapAddress = result.address;
    if (!isNull(window.setIdMapAddress)) {
        $("#" + window.setIdMapAddress).html(window.localStorage.mapAddress);
    }
}
function getLocation() {
    //alert(1);
    if (navigator.geolocation) {
        //alert(3);
        navigator.geolocation.getCurrentPosition(showPosition, function showError(error) {
            //alert("错误：" + JSON.stringify(error));
//            if (isNull(window.latitude)) {
//                window.longitude = "120.00623";
//                window.latitude = "32.0444";
//                window.choiceLongitude = "120.00623";
//                window.choiceLatitude = "32.0444";
//                window.localStorage.mapAddress = "江苏省泰兴市虹桥镇沿江大道";
//            }
            //gaoDe();
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
        }, {
            enableHighAccuracy: false, // 是否获取高精度结果
            timeout: 10000, //超时,毫秒
            maximumAge: 0 //可以接受多少毫秒的缓存位置
            // 详细说明 https://developer.mozilla.org/en-US/docs/Web/API/PositionOptions
        });
    } else {
        alert("是否开启了GPS功能");
    }
}
/*function showPosition(e) {
//	alert(JSON.stringify("原生:"+e.coords.longitude+','+e.coords.latitude));

//
//	var map = new BMap.Map("attendance_map");
//	var point = new BMap.Point(119.457090,32.498610);
//	map.centerAndZoom(point,12);

	  var lo = new T.Geolocation();
      fn = function (e) {
          if (this.getStatus() == 0){
        	  window.longitude = e.lnglat.lng;
            window.latitude = e.lnglat.lat;
            window.choiceLongitude = e.lnglat.lng;
    	    window.choiceLatitude = e.lnglat.lat;


          }
          if(this.getStatus() == 1){
        	  window.longitude = e.lnglat.lng;
              window.latitude = e.lnglat.lat;
              window.choiceLongitude = e.lnglat.lng;
      	    window.choiceLatitude = e.lnglat.lat;

          }
      }
      lo.getCurrentPosition(fn);
      map=new T.Map("attendance_map");
      var geocode = new T.Geocoder();
      //var pt = new BMap.Point("120.963940", "32.480520");
      var pt = new T.LngLat(120.963940, 32.480520)
      geocode.getLocation(pt,searchResult2);

	var geolocation = new BMap.Geolocation();
    geolocation.getCurrentPosition(function (r) {
        if (this.getStatus() == BMAP_STATUS_SUCCESS) {
            var mk = new BMap.Marker(r.point);
            var geoc = new BMap.Geocoder();
            var pt = new BMap.Point(r.point.lng, r.point.lat);
            var pt = new BMap.Point("120.963940", "32.480520");

            geoc.getLocation(pt, function (rs) {
                var addComp = rs.addressComponents;
                window.localStorage.mapAddress = addComp.city + addComp.district + addComp.street + addComp.streetNumber;
              //  alert( addComp.city + addComp.district  +","+ addComp.street +","+ addComp.streetNumber)
                if (!isNull(window.setIdMapAddress)) {
                    $("#" + window.setIdMapAddress).html(window.localStorage.mapAddress);
                }
                // alert(window.netlocation)
            });
        }
        else {
            alert('failed' + this.getStatus());
        }
    }, { enableHighAccuracy: true })

}*/
function showPosition(e) {
   //alert(JSON.stringify(e));
	if (isNull(e.coords.longitude)) {
		toast("坐标为空,请重新定位");
	}else{
		window.longitude = e.coords.longitude;
	    window.latitude = e.coords.latitude;
	    window.choiceLongitude = e.coords.longitude;
	    window.choiceLatitude = e.coords.latitude;
	    var ggPoint = new BMap.Point(window.longitude,window.latitude);
	    var pointArr = [];
	    pointArr.push(ggPoint);
	    var convertor = new BMap.Convertor();
	    convertor.translate(pointArr, 1, 5, function(data){
	        if(data.status === 0){
	            var geocode = new BMap.Geocoder();
	            geocode.getLocation(data.points[0], searchResult);
	        }
	    })
	}

}
/*function searchResult2(result){
	alert(JSON.stringify(result.getAddress()))
}*/
