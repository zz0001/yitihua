<template>
<div data-role="page" id="center_list_page">
    <div class="page_header">
        <img class="left_img back-button " src="/staitc/resources/images/icon_white_back.png">
        <div class="page_header_title">中心工作</div>
        <!--<div class="right_img right_btn">新增</div>-->
    </div>

    <div class="page_content">
        <div id="center_work_welcome_wrapper" class="jszx-wrapper">
            <div class="jszx-scroller">
                <table cellpadding="0" cellspacing="0" class="list_table">
                    <tr id="welcome_current_work" class="wait_work_welcome_order">
                        <th>
                            <img src="/staitc/resources/images/icon_gd.png" style="width: 2.9em;height: 2.9em;padding: 1em 1.5em;">
                            <div class="wait_work_welcome_order_centerwork" style="display: none;"></div>
                        </th>
                        <td style="padding:0em;border-bottom: 1px solid #edeef1;">
                            <p>当前工作</p>
                            <p style="padding-bottom:0.6em;" class="smaller gray_font">中心工作列表，工作详情</p>
                        </td>
                        <td style="border-bottom: 1px solid #edeef1;">
                            <img src="/staitc/resources/images/icon_gray_line_left.png" class="gatwway_list_icon_right">
                        </td>
                    </tr>

                    <tr id="welcome_import_project" class="wait_work_welcome_task">
                        <th>
                            <img src="/staitc/resources/images/icon_xc.png" class="more_list_icon">

                        </th>
                        <td style="padding:0em;border-bottom: 1px solid #edeef1;">
                            <p>重点工程</p>
                            <p style="padding-bottom:0.6em;" class="smaller gray_font">工程列表，工程详情</p>
                        </td>
                        <td style="text-align: right;padding-right: 1em;border-bottom: 1px solid #edeef1;">
                            <img src="/staitc/resources/images/icon_gray_line_left.png" class="gatwway_list_icon_right">
                        </td>
                    </tr>
                </table>
            </div>
        </div>
    </div>

</div>
</template>

<script>
export default {
    mounted() {
        window.searchPage = 2;
        appWorkOrder_centerTaskNum2();
        /*返回*/
        $("#center_list_page .left_img").listen("quickClick", function (e) {
            if ($(".max-dialog").is(':visible') == true) {
                $(".max-dialog").remove();
            } else {
                app.$router.push("../load/welcome.html");
            }
        });
        //中心工作
        $("#welcome_current_work").listen("quickClick", function (e) {
            window.VisitWelcomePage = "";
            window.thisCheckVisitType = "1"; //任务状态 1:未走访 2:已走访
            app.$router.push("../repair/repairList.html");

        });
        //重点工程
        $("#welcome_import_project").listen("quickClick", function (e) {
            window.opinionWelcomePage = "";

            app.$router.push("../importProject/importProjectList.html");

        });
        function appWorkOrder_centerTaskNum2() {
            var obj = "";
            obj += toJson("userid", $.trim(window.localStorage.userId));
            doPost("centerTaskNum.action", obj, function (data) {
                console.log(data)
                if (data.datas !== 0) {
                    //工单待办总数
                    $(".wait_work_welcome_order_centerwork").html(data.datas);
                    $(".wait_work_welcome_order_centerwork").show();
                } else {
                    $(".wait_work_welcome_order_centerwork").hide();
                    toast(data.message);
                }
            }, "");
        }

    }
}
</script>

<style scoped>
#center_list_page .page_header_title .jszx-bar-icon-up {
    background: #fafafa;
}

#center_list_page .home_list_tr_first_td {
    padding: 0.7em;
    padding-left: 0em;
}

#center_list_page .right_btn {
    width: 3.5em;
    height: 1.5em;
    color: #ffffff;
}

#center_list_page .right_btn .btn_div {
    color: #ffffff;
    border: 1px solid #ffffff;
    height: 1.7em;
    line-height: 1.7em;
    top: -0.5em;
    background: orange;
    text-align: center;
}

#center_list_page .jszx-bar-item-3>div {
    width: 33.3%;
}

#center_list_page .tab_oranger_font p,
.tab_bloack_font p,
#center_list_page .jszx-bar-item-3 div p {
    height: 2.8em;
    line-height: 2.8em;
}

/*筛选小图标*/
#center_list_page .jszx-bar-item-3 div p img {
    width: 0.6em;
    height: 0.5em;
    padding-left: 0.5em;
}

#center_list_page .home_list_tr_first_td span {
    margin-left: 0.5em;
}

#center_list_page .right_img {
    width: 1.5em;
    height: 1.5em;
}

#center_list_page #welcome_notice_html table tr td {
    padding: 0em;
    margin: 0em;
    padding-left: 1em;
}

/*广告滚动 end*/

/*通知 start*/
#center_list_page .notice_div {
    width: 100%;
    background: #ffffff;
    padding-left: 1em;
    height: 3em;
}

#center_list_page .notice_img {
    float: left;
    width: 2em;
    height: 1.1em;
    margin-top: 1em;
    /*margin-left: 0.5em;*/
    border-right: 1px solid #f7f7f7;
}

#center_list_page .one_notice {
    /*float: left;*/
    /*margin-left: 3.5em;*/
    line-height: 1.4em;
    /*margin-top: 0.3em;*/
    padding-bottom: 0.3em;
}

/*通知 end*/
/*菜单 start*/
#center_list_page .jszx-bar-item-3>div {
    width: 33.3%;
}

.home_top_tab {
    height: 5.5em;
    padding-top: 0.5em;
    padding-bottom: 0.5em;
}

#center_list_page .home_top_tab div p {
    padding-top: 0.4em;
    text-align: center;
    font-size: 0.9em;
}

#center_list_page .jszx-bar-item-3 img {
    width: 3em;
    height: 3em;
}

/*#load_welcome_page #welcome_wait_work_html .home_list_tr_first_td span {*/
/*margin-left: 0.5em;*/
/*}*/

/*   #center_list_page table tr th img {
        width: 2em;
        height: 2em;
        padding: 0.7em 0em 0.7em 1.3em;
    } */

#center_list_page .list_img_table tr:first-child td {
    padding: 0.7em 0em 0em 0.7em;
}

#center_list_page .list_img_table tr:first-child+tr td:last-child {
    padding: 0.7em 1em 0.7em 0.8em;
    text-align: left;
}

/*  #welcome_current_work img{
        width: 3em;
        height: 3em;
    } */
.wait_work_welcome_order_centerwork {
    width: 1.85em;
    height: 1.9em;
    border-radius: 2em;
    line-height: 1.92em;
    border: 1px solid red;
    margin-left: 0em;
    top: 2.2em;
    position: absolute;
    left: 15%;
    text-align: center;
    padding: 0.1em;
    background: red;
    font-size: 0.5em;
    color: #FFF;
}
</style>
