<template>
    <div data-role="page" id="zggj_main">

        <tk-header>
            在格轨迹
            <div slot="right">
                <img @click="gjlisticon" class="gjlisticon" src="/staitc/resources/images/gjList.png"/>
                <img @click="saixuanicon" class="saixuanicon" src="/staitc/resources/images/saixuan.png"/>
            </div>
        </tk-header>

        <div class="page_content" >
            <div class="html_margin white_background">
                <div id="zggj_map" style="width: 100%;height:calc(100% - 150px);overflow: hidden;margin:0;"></div>
                <table class="inp_table" cellpadding="0" cellspacing="0">

                    <tr>

                    </tr>

                    <tr>
                        <td style="padding-top:0.5em;padding-bottom:0.5em;border-bottom: 1px solid #f3f3f3">选择时间</td>
                        <td colspan="2" class="gray_line_bottom">
                            <input class="small gray_dark_font" style="color:#999999;" readonly="true"
                                   id="select_time"/>
                        </td>
                    </tr>
                    <tr>
                        <td style="padding-top:0.5em;padding-bottom:0.5em;border-bottom: 1px solid #f3f3f3">在格时间(分钟)
                        </td>
                        <td colspan="2" class="gray_line_bottom">
                            <input class="small gray_dark_font" style="color:#999999;" readonly="true" type="text"
                                   id="zgsj_time"/>
                        </td>
                    </tr>
                </table>

            </div>

        </div>

        <div class="page_footer">
            <div class="footer_button_div">

                <div>
                    <div id="find_gj" class="alert_bottom_three blue_background">查看</div>
                </div>
            </div>
        </div>
        <div id="timearea" style="position: absolute;top:3em;width:100%;z-index: 900;display:none;">
            <table class="inp_table" cellpadding="0" cellspacing="0">

                <tr>
                    <td colspan="2" style="text-align: center;">筛选</td>
                </tr>

                <tr>
                    <td style="padding-top:0.5em;padding-bottom:0.5em;border-bottom: 1px solid #f3f3f3">开始时间</td>
                    <td colspan="2" class="gray_line_bottom">
                        <input class="small gray_dark_font" style="color:#999999;" readonly="true"
                               placeholder="选择开始时间" id="zggj_start_time"/>
                    </td>
                </tr>
                <tr>
                    <td style="padding-top:0.5em;padding-bottom:0.5em;border-bottom: 1px solid #f3f3f3">结束时间</td>
                    <td colspan="2" class="gray_line_bottom">
                        <input class="small gray_dark_font" style="color:#999999;" readonly="true"
                               placeholder="选择结束时间" id="zggj_end_time"/>
                    </td>
                </tr>
                <tr>
                    <td colspan="2" style="text-align: center;">
                        <div id="findgj_area" class="alert_bottom_three blue_background">查询</div>

                    </td>
                </tr>
            </table>
        </div>
    </div>
</template>

<script>
    export default {
        name: "",
        mounted() {

            var that = this;

            //设置标题栏，内容栏，底部内容高度
            $(".page_content")[0].style.height = window.localInnerHeight - $(".page_header").height() - $(".page_footer").height() + "px";
            $(".page_content").children("div").get(0).style.height = window.localInnerHeight - $(".page_header").height() - $(".page_footer").height() + "px";
            //设置input和textarea的样式
            $("input").addClass("small gray_dark_font ui-input-text ui-body-c ui-corner-all ui-shadow-inset");
            $("textarea").addClass("ui-input-text ui-body-c ui-corner-all ui-shadow-inset");


            /*返回*/
            $("#zggj_main .back-button").listen("quickClick", function (e) {
                window.showsome = "1";
                that.$router.back();
            });
            chooseDate("select_time", "datetime");
            chooseDate("zggj_start_time", "datetime");
            chooseDate("zggj_end_time", "datetime");

            $("#find_gj").listen("quickClick", function (e) {
                window.startTime = $("#select_time").val() + ":00";
                zggj_locate();
            });
            $("#zggj_main .gjlisticon").listen("quickClick", function (e) {
                window.zggjflag = "1";
                var time = $("#select_time").val();
                window.zgsj_time = time + ":00";
                window.zgsj_endtime = ""
                /* window.zgsj_endtime=$("#find_zggj_end_time").val()+":00";
                if($("#find_zggj_end_time").val()==""){
                    window.zgsj_endtime=""
                } */
                //window.zgsj_time=time;
                window.wgglcurrUserId = window.localStorage.userId;
                that.$router.push({path: '/gjList'});
            });
            $("#zggj_main .saixuanicon").listen("quickClick", function (e) {

                if ($(e.currentTarget).hasClass("opened")) {
                    $(e.currentTarget).removeClass("opened")
                    $("#timearea").fadeOut();
                } else {
                    $(e.currentTarget).addClass("opened");
                    $("#zggj_start_time").val("");
                    $("#zggj_end_time").val("");
                    $("#timearea").fadeIn();
                }
            });

            $("#findgj_area").listen("quickClick", function (e) {
                var start = $("#zggj_start_time").val() + ":00";
                if ($("#zggj_start_time").val() == "") {
                    start = ""
                }
                var end = $("#zggj_end_time").val() + ":00";
                if ($("#zggj_end_time").val() == "") {
                    end = ""
                }
                window.startTime = start;
                window.endTime = end;
                zggj_locate();
                $("#timearea").fadeOut();
            });

            $("#timearea").hide();

            if (window.showsome == "0") {
                var _CarTrack;
                var map;
                var zoom = 13;
                var geocode = "";
                map = new T.Map('zggj_map');
                var marker = new T.Marker(new T.LngLat(window.currlongitude, window.currlatitude));
                //向地图上添加标注
                map.addOverLay(marker);
                map.centerAndZoom(new T.LngLat(119.22022378700001, 33.064694099000064), zoom);
                var obj = "";
                var time = $("#select_time").val();
                obj += toJson("startTime", window.startTime) + "&";
                obj += toJson("endTime", "") + "&";
                obj += toJson("userId", window.localStorage.userId);
                doPost("getLocationByUserId2.action", obj, function (data) {
                    var style = {
                        color: "#97694f",
                        weight: 3,
                        opacity: 0.8,
                        lineStyle: "dashed"
                    };
                    var points = [];
                    var wgpoints = [];
                    var areaJson = data.array;


                    if (data.area.length > 0) {
                        var wgarea = data.area;

                        for (var j = 0; j < wgarea.length; j++) {
                            wgpoints.push(new T.LngLat(wgarea[j][0], wgarea[j][1]));
                        }


                        //创建线对象 区域面积画线
                        var wgline = new T.Polyline(wgpoints, style);

                        map.addOverLay(wgline);
                    }

                })

            } else {
                var myDate = new Date();
                var time = "";
                var year = myDate.getFullYear();
                var month = myDate.getMonth() + 1;       //获取当前月份(0-11,0代表1月)
                month = (month < 10 ? "0" + month : month);
                var day = myDate.getDate();
                day = (day < 10 ? "0" + day : day);

                time = year + "-" + month + "-" + day + " 00:00";
                $("#select_time").val(time);
                window.startTime = time + ":00";
                window.endTIme = "";

                zggj_locate();
            }

            function zggj_locate() {
                var _CarTrack;
                var map;
                var zoom = 13;
                var geocode = "";
                map = new T.Map('zggj_map');
                map.centerAndZoom(new T.LngLat(119.22022378700001, 33.064694099000064), zoom);
                window.showsome = "1";
                //   var areaJson =[[119.47896676287685,32.49954518890798],[119.47909550890957,32.49958810425222],[119.47939591631923,32.49937352753103],[119.47905259356533,32.4901467285198],[119.47862344012294,32.48182115173757],[119.47720723376308,32.48285111999929],[119.4721861384872,32.48426732635915],[119.46922497973476,32.48473939514577],[119.46454720721279,32.485941024784445],[119.46261601672207,32.48534020996511],[119.46291642413173,32.489460083011984],[119.4611998103622,32.49636945343435],[119.46102814898525,32.497442337040304],[119.46772294268642,32.497699829105734],[119.46798043475185,32.49847230530202],[119.46798043475185,32.49903020477712],[119.47896676287685,32.49954518890798]];
                //向地图上添加标注
                map.clearOverLays();

                var obj = "";

                obj += toJson("startTime", window.startTime) + "&";
                obj += toJson("endTime", window.endTIme) + "&";
                obj += toJson("userId", window.localStorage.userId);
                doPost("getLocationByUserId2.action", obj, function (data) {
                    var style = {
                        color: "#97694f",
                        weight: 3,
                        opacity: 0.8,
                        lineStyle: "dashed"
                    };
                    var points = [];
                    var wgpoints = [];
                    var areaJson = data.array;
                    if (areaJson.length > 0) {
                        for (var i = 0; i < areaJson.length; i++) {
                            if (areaJson[i][0].indexOf("-") == -1 && areaJson[i][1].indexOf("-") == -1) {
                                points.push(new T.LngLat(areaJson[i][0], areaJson[i][1]));
                                // 添加
                                var index = parseInt(i + 1) + "";
                                var latlng = new T.LngLat(areaJson[i][0], areaJson[i][1]);
                                var startIcon = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB0AAAAeCAYAAADQBxWhAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA25pVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDE0IDc5LjE1MTQ4MSwgMjAxMy8wMy8xMy0xMjowOToxNSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDpmZDdjMWRjYi03ZmQ0LWRkNDUtOTYwYi03ZDI4N2E3YzE1NTYiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NjM3OTIwRTBCNjJBMTFFMzk1NTE5NDNCOEIwNDE2NDkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NjM1NTkyRDVCNjJBMTFFMzk1NTE5NDNCOEIwNDE2NDkiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpkNzA1ZmFjMi05YWNiLWFhNDUtOGI1Ny01ZTMzM2MzOGU3YjQiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6NDkyNDhDNTc3MUU5MTFFM0JCMDY4QjkwNjk5QzNFQ0MiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz7CxzDiAAAEqUlEQVR42qRXW2wUVRj+d2f2Mnvfbi/bFmgt0hhJ44VEQ1EjFZNajRYFookaXkyNYoJRjA+YGF6M4otRE3gwiDHiBQvyYBuCwaiASlKbEB6ArEq2tN26u93rzOzu7K7/PzuznbG7s7v4J1/mXP/vnP9yzhlT8Ngo1BET4iHEdsQwoh/hQyQQfyPOI04gflh4eqoMLYipDumDiPc5B7fJ4XKCnbMDa7GA2WyGUqkEUqEAoiACn8mCwAszOPZ1JD57s6QWxId2Bzfh8XrA6XY1VJBNZyCVTIHIC4ex+gqSFxrNMWvKVsSkx+ed6F7T0xQhCY2j8TSPzN395SPWVkg/8Pi9jwU626sN7YwLtrmHmiKneTj/UdLTrHlHOadjKtjbreskwgMbJmB4Zk+17fn2rdBlbdON+yN9Fc6kL8nlxRsLIGT5MTTzVD1SVonS98iHWrK73IPQafXL9X09T8nfk7FzMMD1Qj+3sri1XJf8VUk9Pg+Rvotmnq4X1UQ6jNE5RFGqSo+tHTa6BsDB2OU6lUl+TMzC2+HPdQo+HdynqzuccrQPYXRTmp2rRzquJST5LHpWhmre3VcPtpKGQPqQdNyIdATzUdeomvO/5o3k4zXNeznzp26+om/EyKf9LGvRNarmJInlkzDasRnCQgScAicTBqw++Ck+I/cTIQWSTmlF3y1GpD4zY9Y1kjlpdxQ444Et8iJUE5MPY/kEHJz/tjr+pa4xmOX/gmgxU8nDij6/UZ4uFaXiqo7twa3QZ+2o5CDujBZRK2c32ILwbO8Y3OlY2RgdlSgpo53ekCQpyLDMqk4346gEBmOTd0s+VRehLuA+3x26lCGRChJ9rhuRzuRzuU02u013EpE80fmA7DPyp2retMTDnr6dclSrcmJRf9bnRJE+vxqRnsTb4gW35nC4372xuiM1iKoEid9kGAndPiinjEhP81k+JArCejtXSZ2HA/fAbPIKHFn4Hl5e8yQMuvrg/N0fwRyS80WxpqKP5ybhIh/C/BSA9GHTtBEpOWB/KpE6ppISmRf9SUrIrBQsalCpQsekVi7KPBg9CTl+9uMRKDVzn37t9ft2tnUE4GYl/k8MksuJb5BwV7NX226ccIEm/g/CC6Sn0VjGteNWtUw3/lcYebdj3t7GsCyeLGxDspyYg0RsGc2a/I7SG3eZbYWUJE9mxhQKp5Ope8ulsgvvWcPdRSNLERy/F6tvImG+GavU2grdgZ8gvkBznWIt7DZ8iqwahDsjc57B4uNIJrTiCrNBHynaG1uKSuXy6rsY2+nsfLVVQvVtSwCM4npv10O+gH/CH1h5oizH4uTHw4vPTL+o0WGqs4myArUsD2TUjjrEnYhrawf6PBRYeE5DOHQ9nTl+bUtmMhTVKC1pvqUa9eoYs7I6k4E1lhDvpJaTFV/iV5rLHEFCqrYpV5hXgRtBBzc9RSgC6b1jU563rAKzyeC3Qit2KJevdK/rXTcfCkeir/38XDEqn+pFDSQF2rKkpKKkZAahwDbpe7GUld7CI+6o+HvkKBJaFbdoCeLKHZpTkNcsotQoZWpK9I1fjpcPbB5JHrp0WjH5vEIiaQKlKflXgAEAXi/626c6JuQAAAAASUVORK5CYII=";	//起点图标
                                var endIcon = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB0AAAAeCAYAAADQBxWhAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA25pVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDE0IDc5LjE1MTQ4MSwgMjAxMy8wMy8xMy0xMjowOToxNSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDpmZDdjMWRjYi03ZmQ0LWRkNDUtOTYwYi03ZDI4N2E3YzE1NTYiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NjM3OTIwRTRCNjJBMTFFMzk1NTE5NDNCOEIwNDE2NDkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NjM3OTIwRTNCNjJBMTFFMzk1NTE5NDNCOEIwNDE2NDkiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpkNzA1ZmFjMi05YWNiLWFhNDUtOGI1Ny01ZTMzM2MzOGU3YjQiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6NDkyNDhDNTc3MUU5MTFFM0JCMDY4QjkwNjk5QzNFQ0MiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz4Vkm2hAAAE6klEQVR42qRXb2xTVRQ/70/b163dujm2MYOZgRiCGgJTBijRdGCoIsGZGSRBSRSZMSQj8e8HJX5aokuM4YOYYMzkg8QpwjBAiM4YAhM1GOYgTDZFZd0Ko+3Wrn/fe9dzXi9t39a9tXCSX+57ffec3z33nHvOrcAYg7HmJ6GACIgWxDOItYhGhAcRRlxFnEV8i/hh4bnjDEoQYQ7SxxFdNkVpcpQ5QbY7QJIlEEQRmK6DpmqgppKQjMUhnUicx7mvI/GPt0tqQ+yzKY5dissFjrKyeQ0kYzFIRKNInvwUX3cjeXo+HTHv2Y447HS7d1XW1hZFSELzaD7p0XajA/ZSSD9GxU3lVZ7cNixbAsKiheatod8QM4X0UP8pslMs6Ua7orTnE5JIHTtBem1HjhAXIL//BghLGgsaI327U2lHb32WMfWv8lGWXqhYUPOg3enMrWbzepC2t4G690Ngl4Yzi9i7B8QHls4ywkaugvp2p/Gcisdh6sbEH/i4fK6sluk42BwOE6FBumkD6D+dBTYaMDwUVtxvEOqDl0E/2ZdZcd0CY2Hsz5FcYqAdspdOJumYnZmLdMsswq1Pg+BUQD14GI22gti8EkBRQP/1dxAfXgF6zzFjMdK2VmD+cdC+OWHSJ3tIusWK1ItHxEy65iGDxHagy3jXPuk2Rr0P68Gb7SC/sxtYMAxCtQfUzn0AkxGTPrfnnSumRNooybLpR61rP0BDbcYTNG6Q8cw1BBckNNQbXgr1tdmYZxMwY+9eK1IPVRpTYvw3BtKGdRlP3usCoXk5SC9tAwGzk4XCoB3sARa4AeJGL0ivvmggP+G4vSor0uu6ptWLkpTbXu9aEH0tRtJIz/qATQSBDVwCre8MiKtXGoTs3AXQCJVuEB9rNnlLpRJlyop0dCYpuMoMjyiZ4L7FoF8cAr33+0xhWN0Esq8lYxy3V+//DfRDx8zh0TQa/rEiPa+m0k2yPVe9iIAw6zyiN+orb2WPkLAUY4xFf6aoyRQNP1uRHknFYzsVV7m51GHVEWqqARDsMm4ddhvR+ygelXFgQ8PA/v634MJuFQiUXivSU6l4YgTP1WI81Jnse6ENAJMIMHPZNb8RQ4hMA0NiWHS3QS7wkknVSPuiJxtTtEOkVC1OztfatmK3+NJdc1fxjThvi7UP9md/j0zcpHb3PJbAQ8X006+cFe62co8Hblemw2GIT0V6kPC5YlvbDlToJ8U7IOwnO6X00xjiCVQ8Eg0G8TqSKoqM5tF81DtK+uhlrBRSkiiiNRGdfjk8HghMh6y9pu80j+bTBQ4Jo3dyMSOh1tPrqqpar7hdsz7SvSgaDNGZ2Yxk8VJCIVp8I0Md0VBILfQRCans7OHzShJRQGn45YQwx/eLiM9ik5OmH/n7AcQg6aKQHQlhKwCZf5P4PJHIqOgyo5Su8hW6XtQirlQ3NFSIePfV8c570++PdF278shH/uGJW7pUPfNGvcB7do7It1iw2I3riM54JNOoaRyKRz5HQnqt5i2sksNN7YLuaAi6wyp0S+XXW5nD8BTQw/nCoOhYcavq6u4JjI0F1g2c3j6KtZMaSh5UjvxnQpqPKY60XGTsE5Oq+q4zEu0+Hgp0I6GdhyWfIMh7aJIjlbcInU5JfsEvSryDp7/+btkab8dfA6f4lvs5icrjlWkAbP7/Uv8LMAAT3TYbmguilwAAAABJRU5ErkJggg==";		//终点图标
                                if (i == 0) {
                                    var marker = new T.Marker(new T.LngLat(areaJson[i][0], areaJson[i][1]), {
                                        icon: new T.Icon({
                                            iconUrl: startIcon,
                                            iconSize: new T.Point(30, 30),
                                            iconAnchor: new T.Point(12, 30)
                                        })
                                    });
                                    //向地图上添加标注
                                    map.addOverLay(marker);
                                } else if (i == areaJson.length - 1) {
                                    var marker = new T.Marker(new T.LngLat(areaJson[i][0], areaJson[i][1]), {
                                        icon: new T.Icon({
                                            iconUrl: endIcon,
                                            iconSize: new T.Point(30, 30),
                                            iconAnchor: new T.Point(12, 30)
                                        })
                                    });
                                    //向地图上添加标注
                                    map.addOverLay(marker);
                                } else {
                                    var label = new T.Label({
                                        text: index,
                                        position: latlng,
                                        offset: new T.Point(-25, 0)
                                    });
                                    label.setBorderLine(0)
                                    //label.setBackgroundColor("#cccccc00");
                                    // label.setFontColor("#FF3F2B");
                                    label.setFontColor("#ffffff");

                                    if (areaJson[i][2] != areaJson[i - 1][2]) {
                                        map.addOverLay(label);
                                    }

                                }


                                // map.addOverLay(label);
                            }

                        }

                        map.centerAndZoom(new T.LngLat(areaJson[areaJson.length - 1][0], areaJson[areaJson.length - 1][1]), zoom);
                    }
                    //创建线对象 区域面积画线
                    var line = new T.Polyline(points);

                    map.addOverLay(line);
                    if (data.area.length > 0) {
                        var wgarea = data.area;

                        for (var j = 0; j < wgarea.length; j++) {
                            wgpoints.push(new T.LngLat(wgarea[j][0], wgarea[j][1]));
                        }


                        //创建线对象 区域面积画线
                        var wgline = new T.Polyline(wgpoints, style);

                        map.addOverLay(wgline);
                    }

                    $("#zgsj_time").val(data.time);

                })


            }
        },
        methods:{
            gjlisticon(){
                window.zggjflag = "0";
                ;
                var time = $("#find_select_time").val();
                if($("#find_select_time").val()){
                    window.zgsj_time = time + ":00";
                    window.zgsj_endtime = ""

                    this.$router.push({path: '/gjList'});
                }else{
                    time = $("#select_time").val();

                    window.zgsj_time = time + ":00";
                    window.zgsj_endtime = ""

                    this.$router.push({path: '/gjList'});
                }


            },
            saixuanicon(e){

                if ($(e.currentTarget).hasClass("opened")) {
                    $(e.currentTarget).removeClass("opened")
                    $("#findtimearea").fadeOut();
                } else {
                    $(e.currentTarget).addClass("opened");
                    $("#find_zggj_start_time").val("");
                    $("#find_zggj_end_time").val("");
                    $("#findtimearea").fadeIn();
                }
            }
        }
    }
</script>

<style lang="less">
    #zggj_main{
        .html_margin {
            height: calc(100vh - 90px);
        }
    .attendanceAddImgs {
        overflow: hidden;
        background: #f3f3f3;
    }

    .div_input_value_img {
        width: 1.5em;
        height: 1.5em;
        padding-right: 0.5em;
    }

    #attendance_img {
        height: 7.5em;
        overflow: hidden;
        display: inline-block;
    }

    .imgdiv {
        padding: 0.7em;
        padding-top: 0em;
        position: relative;
        width: 6em;
        float: left;
    }

    .goodsimgone {
        float: left;
        height: 6em;
        width: 6em;
        margin-top: -1em;
    }

    .tdt-label {
        /*  background: rgba(255,255,255,0); */

        background: rgba(222, 14, 14, 1);
        border-radius: 20px;
    }

    .righticon {
        position: absolute;

        height: 52px;
        line-height: 52px;
        top: 0;
        padding: 0;
        margin: 0;
        font-size: 14px;
        text-align: center;
        right: 0em;
    }

    .gjlisticon {
        width: 24px;
        height: 24px;
        vertical-align: middle;
        margin-right: 1em;
    }

    .saixuanicon {
        width: 24px;
        height: 24px;
        vertical-align: middle;
        margin-right: 1em;
    }

    .tk-header .right {
        width: auto !important;
    }
    }


</style>
