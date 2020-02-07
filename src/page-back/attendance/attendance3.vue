<template>
<div data-role="page" id="attendance_main">
    <div class="page_header">
        <img class="left_img back-button" src="/staitc/resources/images/icon_white_back.png" />
        <div class="page_header_title">上下班考勤</div>
    </div>
    <div class="page_content">
        <div class="html_margin white_background">
            <table class="inp_table" cellpadding="0" cellspacing="0">
                <!--<tr>-->
                <!--<td>上传图片</td>-->
                <!--<td colspan="2">-->
                <!--<input id="good_num" class="small" value="0/5" readonly type="text">-->
                <!--</td>-->
                <!--</tr>-->
                <!--<tr>-->
                <!--<td colspan="3" class="attendanceAddImgs">-->
                <!--<div id="attendance_img_wrapper" class="jszx-wrapper">-->
                <!--<div class="jszx-scroller" id="attendance_img_scroll">-->
                <!--<div id="attendance_img"></div>-->
                <!--</div>-->
                <!--</div>-->
                <!--</td>-->
                <!--</tr>-->
                <tr>
                    <div id="attendance_map" style="width: 100%;height:80%;overflow: hidden;margin:0;"></div>
                </tr>
                <tr>
                    <td style="min-width: 5em;" class="">当前位置<span>*</span></td>
                    <td style="padding:1em 0.5em 1em 0em;line-height: 1.4em;text-align: left;" id="attendance_address"></td>
                    <td style="width: 1%;" id="attendance_address_img">
                        <img class="div_input_value_img" src="/staitc/resources/images/icon_blue_refresh.png" />
                    </td>
                </tr>
            </table>
        </div>
    </div>
    <div class="page_footer">
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
        /*返回*/
        $("#attendance_main .back-button").listen("quickClick", function (e) {
            app.$router.push("../load/welcome.html");
        });
        //位置
        $("#attendance_main #attendance_address_img").listen("quickClick", function (e) {

            locate();
        });
        setTimeout(locate(), 500);

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
        ays();
        map.addOverLay(marker);
        $("#attendance_address").html(window.localStorage.mapAddress);

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
                    waitJumpPage("../load/welcome.html");
                } else {
                    toast(data.message);
                }
            }, "", "");
        }

    }
}
</script>

<style lang="less" scoped>
#attendance_main .attendanceAddImgs {
    overflow: hidden;
    background: #f3f3f3;
}

#attendance_main .div_input_value_img {
    width: 1.5em;
    height: 1.5em;
    padding-right: 0.5em;
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
