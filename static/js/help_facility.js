/**
 * Created by 陈思燕 on 2016/12/27.
 */
/**
 * 根据经纬度计算距离
 * @param $lat1
 * @param $lng1
 * @param $lat2
 * @param $lng2
 * @param $len_type返回值类型(1-m 2-km)
 * @param $decimal保留小数位数
 * @returns {*}
 */
function getRad(d) {
    var danpi = Math.PI;
    return parseFloat(d) * parseFloat(danpi) / 180;
}

function getDistance(lat1, lng1, lat2, lng2) {
    var f = getRad((parseFloat(lat1) + parseFloat(lat2)) / 2);
    var g = getRad((parseFloat(lat1) - parseFloat(lat2)) / 2);
    var l = getRad((parseFloat(lng1) - parseFloat(lng2)) / 2);
    var sg = Math.sin(g);
    var sl = Math.sin(l);
    var sf = Math.sin(f);
    var s, c, w, r, d, h1, h2;
    var a = 6378137.0; //The Radius of eath in meter.
    var fl = 1 / 298.257;
    sg = sg * sg;
    sl = sl * sl;
    sf = sf * sf;
    s = sg * (1 - sl) + (1 - sf) * sl;
    c = (1 - sg) * (1 - sl) + sf * sl;
    w = Math.atan(Math.sqrt(s / c));
    r = Math.sqrt(s * c) / w;
    d = 2 * w * a;
    h1 = (3 * r - 1) / 2 / c;
    h2 = (3 * r + 1) / 2 / s;
    s = d * (1 + fl * (h1 * sf * (1 - sg) - h2 * (1 - sf) * sg));
    s = s / 100;
    console.log("mi：" + s);
    //s = s.toFixed(0);//指定小数点后的位数。
    return s;
}
/**
 * 返回
 * @param url 返回路径
 */
function hideUpSearchDiv(url, type) {
    if ($(".max-dialog").is(':visible') == true) {
        $(".jszx-bar-item-3 div p img,.jszx-bar-item-2 div p img").attr("src", "/static/resources/images/icon_gray_solid_down.png");
        $(".max-dialog").remove();
    } else {
        if (isNull(type)) {
            if (!isNull(url)) {
                app.$router.push(url);
            }
        } else {
            window.history.back();
        }
    }
}
/**
 * 等待后跳转
 * @param url
 */
function waitJumpPage(url) {
    setTimeout(function() {
        app.$router.push(url);
    }, 1000);
}
/**
 * 问题上报编辑清空
 */
function cleadCaseEdit() {
    $("#case_edit_page table tr td").addClass("gray_line_bottom");
    $("#case_edit_page table tr td input").val("");
    $("#case_edit_page table tr td textarea").val("");
    //图片集合

    window.picture_array = [];
    window.picture_upImg = "";
    window.orginId = ""; //工单来源
    window.choiceThingsParts = ""; //职能事项
    initMapInfo("#case_edit_address");
    window.choiceThingsParts = ""; // 职能事项：
    window.choiceBigType = ""; //部件大类：
    window.choiceSmallType = ""; //部件小类
    window.choiceOneGridId = ""; //网格
    $("#case_edit_img_scroll").css("transform", "none");
    $("#case_edit_img_wrapper .scroll-bar-x").css("transform", "none");
    $("#case_words").val("0/150");
    $("#case_edit_page #case_edit_img").empty();
    $("#case_edit_page #case_edit_img").append('<img class="goodsimgone" style="padding-top:2em;" src="/static/resources/images/icon_add_photo.png" id="choicemore">');
}

function initMapInfo(id) {
    $(id).html(window.localStorage.mapAddress);
    window.choiceLongitude = window.longitude;
    window.choiceLatitude = window.latitude;
}

function setWelcomeBackGround(id, array) {
    var pics = [];
    //var array = ["/static/resources/images/welcome_icon_big.png"];
    if (isNull(array)) {
        pics = ["/static/resources/images/welcome_icon_big.png"];
    } else {
        pics = array;
    }

    var markers = ["/static/resources/images/d_white.png", "/static/resources/images/d_blue.png"];
    var dp = new DynamicPic({
        "id": id, //id，必须
        "pics": pics, //图片URL的数组，必须
        "markers": markers,
        "width": window.innerWidth, //默认为window.innerWidth
        "height": window.innerWidth / 2.6,
        "text": "",
        "stretch": true,
        //"thumbnailCount": array.length,
        "onClick": function(index) {
                //alert(index);
                window.noticeContentId = window.appNoticeTopDetail[index].id;
                app.$router.push("../notice/noticeDetail.html");
            }
            //"onChange": function (index) {
            //    //alert("这是第"+(index+1)+"张图片");
            //}
    });
}
/**
 * 获取当前时间
 * @returns {string}
 */
function getNowTime() {
    var date = new Date();
    var seperator1 = "-"; //年月日分隔符
    var seperator2 = ":"; //时分秒分隔符
    var month = date.getMonth() + 1; //月份是0~11，要加1为当前月
    var strDate = date.getDate();
    if (month >= 1 && month <= 9) {
        month = "0" + month;
    }
    if (strDate >= 0 && strDate <= 9) {
        strDate = "0" + strDate;
    }
    var currentdate = date.getFullYear() + seperator1 + month + seperator1 + strDate + " " + date.getHours() + seperator2 + date.getMinutes() + seperator2 + date.getSeconds();
    return currentdate;
}

function getPageScroll() {
    var xScroll, yScroll;
    if (self.pageYOffset) {
        yScroll = self.pageYOffset;
        xScroll = self.pageXOffset;
    } else if (document.documentElement && document.documentElement.scrollTop) { // Explorer 6 Strict
        yScroll = document.documentElement.scrollTop;
        xScroll = document.documentElement.scrollLeft;
    } else if (document.body) { // all other Explorers
        yScroll = document.body.scrollTop;
        xScroll = document.body.scrollLeft;
    }
    arrayPageScroll = new Array(xScroll, yScroll);
    return arrayPageScroll;
    console.log("滑动高度" + JSON.stringify(arrayPageScroll));
};

function setSearchByMap(obj, map) {
    $("#allscreen_html_div").empty();
    var array = obj;
    console.log("数据：" + JSON.stringify(array));
    if (!isNull(array) && array.length > 0) {
        for (var i = 0; i < array.length; i++) {
            var html = '<table><p style="padding:0.9em 0.5em;" class="gray_line_bottom"><img style="width:1.5em;height:1.4em;float:left;padding:0em 0.5em 0.5em 1em;" src="/static/resources/images/location.png"/>' + array[i].name + "&nbsp;" + array[i].address + '</p>';
            var $html = createListRow(html).appendTo("#allscreen_html_div");
            $html.data('data', array[i]);
            $html.listen("quickClick", function(e) {
                var data = $(e.currentTarget).data("data");
                $(".all_screenpage").remove();
                //坐标
                var lnglatArr = data.lonlat.split(" ");
                var icon = new T.Icon({
                    iconUrl: "/static/resources/images/icon_point.png",
                    iconSize: new T.Point(19, 27),
                    iconAnchor: new T.Point(10, 25)
                });
                window.shortLongitude = lnglatArr[0];
                window.shortLatitude = lnglatArr[1];
                $("#map_html_longitudeLatitude").html("经纬度：" + window.shortLongitude + "\t" + window.shortLatitude);
                //var map = new T.Map('mapalerttwo');
                //map.centerAndZoom(new T.LngLat(window.longitude, window.latitude), map.getZoom());
                map.clearOverLays();
                marker = new T.Marker(new T.LngLat(lnglatArr[0], lnglatArr[1]), { icon: icon });
                //向地图上添加标注
                map.addOverLay(marker);
                $("#map_html_address").html(data.name + "&nbsp;" + data.address);
            });
        }
    }
}
/**
 *播放Mediaplayer格式的视频，包括.avi .mpg .mpeg .wmv .wma .asf .mid .mp3等
 *参数说明
 u - 媒体URL
 w - 媒体宽度width
 h - 媒体高度height
 */
function pv_m(u, w, h) {
    var pv = '';
    pv += '<object width="' + w + '" height="' + h + '" id="iask_v" classid="" codebase="http://activex.microsoft.com/activex/controls/mplayer/en/nsmp2inf.cab#Version=6,4,5,715" standby="Loading Microsoft Windows Media Player components..." type="application/x-oleobject">';
    pv += '<param name="FileName" value="' + u + '">';
    pv += '<param name="AutoStart" value="1">';
    pv += '<param name="AutoSize" value="1">';
    pv += '<param name="ShowControls" value="1">';
    pv += '<param name="ShowPositionControls" value="0">';
    pv += '<param name="ShowAudioControls" value="1">';
    pv += '<param name="ShowTracker" value="1">';
    pv += '<param name="ShowDisplay" value="0">';
    pv += '<param name="ShowStatusBar" value="1">';
    pv += '<param name="ShowGotoBar" value="0">';
    pv += '<param name="ShowCaptioning" value="0">';
    pv += '<param name="PlayCount" value="1">';
    pv += '<param name="AnimationAtStart" value="0">';
    pv += '<param name="TransparentAtStart" value="0">';
    pv += '<param name="AllowScan" value="0">';
    pv += '<param name="EnableContextMenu" value="0">';
    pv += '<param name="ClickToPlay" value="0">';
    pv += '<param name="InvokeURLs" value="1">';
    pv += '<param name="DefaultFrame" value="">';
    pv += '<embed src="' + u + '" width="' + w + '" height="' + h + '" type="application/x-mplayer2" pluginspage="" name="MediaPlayer" showcontrols="1" showpositioncontrols="0" showaudiocontrols="1" showtracker="1" showdisplay="0" showstatusbar="1" autosize="0" showgotobar="0" showcaptioning="0" autostart="1" autorewind="0" animationatstart="0" transparentatstart="0" allowscan="1" enablecontextmenu="1" clicktoplay="0" invokeurls="1" defaultframe=""></embed>';
    pv += '</object>';
    return pv;
}
/**
 * 块和列表展示切换
 * @param pageid 页面id
 * @param divname 块容器
 * @param tabname 列表容器
 * @param wrapper 是否滑到顶部 为空不滑
 */
function changeShowType(pageid, divname, tabname, wrapper) {
    if ($(divname).is(':visible') == true) {
        console.log("列表展示");
        $("#" + pageid + " .list_row").css("width", "100%");
        $("#" + pageid + " .list_row").css("margin-right", "0%");
        $("#" + pageid + ".list_row").css("margin-top", "0%");
        $("#" + pageid + " .list_row").css("border", "none");
        if (!isNull(wrapper)) {
            scrollToTop(wrapper);
        }
        $(divname).hide();
        $(tabname).show();
    } else {
        console.log("非列表展示");
        $("#" + pageid + " .list_row").css("width", "48%");
        $("#" + pageid + " .list_row").css("margin-right", "1%");
        $("#" + pageid + " .list_row").css("margin-top", "1%");
        $("#" + pageid + " .list_row").css("border", "1px solid #eaeaea");
        if (!isNull(wrapper)) {
            scrollToTop(wrapper);
        }
        $(divname).show();
        $(tabname).hide();
    }
}
/**
 * 刷新时展示方式
 * @param pageid
 * @param divname
 * @param tabname
 * @param wrapper
 */
function showDivOrTab(pageid, divname, tabname, wrapper) {
    if ($(divname).is(':visible') == true) {
        console.log("非列表展示");
        $("#" + pageid + " .list_row").css("width", "48%");
        $("#" + pageid + " .list_row").css("margin-right", "1%");
        $("#" + pageid + " .list_row").css("margin-top", "1%");
        $("#" + pageid + " .list_row").css("border", "1px solid #eaeaea");
        if (!isNull(wrapper)) {
            scrollToTop(wrapper);
        }
        $(divname).show();
        $(tabname).hide();

    } else {
        console.log("列表展示");
        $("#" + pageid + " .list_row").css("width", "100%");
        $("#" + pageid + " .list_row").css("margin-right", "0%");
        $("#" + pageid + ".list_row").css("margin-top", "0%");
        $("#" + pageid + " .list_row").css("border", "none");
        if (!isNull(wrapper)) {
            scrollToTop(wrapper);
        }
        $(divname).hide();
        $(tabname).show();
    }
}
/**
 * 切换展示方式tab
 * @param page 当前页面
 * @param typeval tab类型值
 * @param classname
 * @param pageid
 * @param wrapper
 * @param divname 快容器id
 * @param tabname 列表容器id
 */
function menuFun(page, typeval, classname, pageid, wrapper, divname, tabname) {
    hideFilterAlert();
    page = 2;
    scrollToTop(wrapper);
    $(divname).show();
    $(tabname).hide();
    $("#" + pageid + " .list_row").css("width", "48%");
    $("#" + pageid + " .list_row").css("margin-right", "1%");
    $("#" + pageid + " .list_row").css("margin-top", "1%");
    $("#" + pageid + " .list_row").css("border", "1px solid #eaeaea");
    //var name = "window." + windowname;
    window.menuCommodity_search_type = typeval;
    $("#" + pageid + " .jszx-bar-item-4 div p").removeClass("table_oranger_p");
    $("#" + pageid + " ." + classname + " p").addClass("table_oranger_p");
}