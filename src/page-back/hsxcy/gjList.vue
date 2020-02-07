<template>
    <div data-role="page" id="gj_list_page">
        <tk-header>
            在格轨迹列表
        </tk-header>

        <div class="page_content" style="">
            <div id="gj_wrapper" class="jszx-wrapper">
                <div class="jszx-scroller">
                    <div id="gj_html" class="html_margin">
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
    export default {
        name: "",
        mounted() {
            var that = this;

            window.searchPage = 2;
            //设置标题栏，内容栏，底部内容高度
            $(".page_content")[0].style.height = window.localInnerHeight - $(".page_header").height() - $(".page_footer").height() + "px";
            $(".page_content").children("div").get(0).style.height = window.localInnerHeight - $(".page_header").height() - $(".page_footer").height() + "px";
            //设置input和textarea的样式
            $("input").addClass("small gray_dark_font ui-input-text ui-body-c ui-corner-all ui-shadow-inset");
            $("textarea").addClass("ui-input-text ui-body-c ui-corner-all ui-shadow-inset");

            gjListInit();

            /*返回*/
            $("#gj_list_page .left_img").listen("quickClick", function (e) {
                if (window.zggjflag == "1") {
                    that.$router.push({path: '/zggj'});
                } else {
                    that.$router.back();
                }
            });
            /*筛选*/
            $("#gj_list_page .right_img").listen("quickClick", function (e) {

                $("#ycj_select_content").show();
            });

            //初始化
            function initGjWelcome() {
                $("#gj_wrapper")[0].style.height = window.localInnerHeight - $("#gj_list_page .page_header").height() + "px";
                initScroll({
                    "wrapper": "gj_wrapper",
                    "dir": "y",
                    "bounce": false,
                    "scrollBar": true,
                    "pullUpLoading": function (reset) { //上拉
                        if (window.checkNum > window.arrayDataLength) {
                            reset(true);
                            toast("没有更多的数据了");
                        } else {
                            gj_findListByUserId(reset, window.searchPage++)
                        }
                    },
                    "pullDownLoading": function (reset) { //下拉
                        window.checkNum = 1;
                        window.searchPage = 2;
                        gj_findListByUserId(reset, 1);
                    }
                });
                scrollToTop("gj_wrapper");

                gj_findListByUserId(false, 1);

            }


            //清空缓存
            function cleanGjList() {
                window.searchPage = 2;
                window.noticeTypeName = "";
                window.caseStartTime = "";
                window.caseEndTime = "";
                $("#gj_list_page #case_welcome_inp").val("");
                window.choiceThingsParts = "";
                window.choiceBigType = "";
                window.choiceSmallType = "";
                //职能事项
                window.choiceTemporaryThingsParts = "";
                //临时大类
                window.choiceTemporaryBigType = "";
                //临时小类
                window.choiceTemporarySmallType = "";
                //setRestTitle();

            }

            //待办初始化
            function gjListInit() {
                cleanGjList();
                //未办
                $("#gj_list_page .casewelcome_title div").removeClass("tab_oranger_font");
                $("#gj_list_page .casewelcome_wait").addClass("tab_oranger_font");
                $("#gj_list_page .casewelcome_search").hide();
                // $("#gj_list_page .right_img").hide();
//            $("#gj_list_page #case_welcome_rednum").hide();
                window.thisCaseQueryType = "1";
                initGjWelcome();
            }


            /**
             *工单列表
             * @param queryType 查询类型  1：待办 2：已办
             * @param startTime 开始时间
             * @param endTime 结束时间
             * @param eventComponent 事件部门
             * @param bigClass 大类
             * @param smallClass 小类
             */
            function gj_findListByUserId(reset, pageNum) {
                if (!reset) {
                    showLoading("", "", "", "/staitc/resources/images/loading.gif");
                }
                if (parseInt(pageNum) < 2) {
                    $("#gj_html").empty();
                }

                var obj = "";
                ;
                obj += toJson("userId", window.wgglcurrUserId) + "&";
                obj += toJson("startTime", window.localStorage.zgsj_time) + "&";
                obj += toJson("endTime", window.localStorage.zgsj_endtime) + "&";
                obj += toJson("pageSize", "20") + "&";
                obj += toJson("pageNum", pageNum);
                doPost("locationList.action", obj, function (data) {

                    if (!reset) {
                        hideLoading();
                    }
                    if (data.code == 0) {
                        if (reset) {
                            reset(true);
                        }
                        var array = data.datas;
                        getDataLength(data.total, 6);
                        if (data.datas.length < 20) {
                            console.log('进来了')
                            window.checkNum = 2;
                        }

                        if (!isNull(array) && array.length > 0) {
                            for (var i = 0; i < array.length; i++) {
                                var isInGrid = "";
                                if (array[i].isInGrid == "0") {
                                    isInGrid = "网格内";
                                } else {
                                    isInGrid = "网格外";
                                }


                                var html = '';
                                html += '<table cellspacing="0" class="list_second_table gray_line_bottom" cellpadding="0">';
                                html += '<tr><td colspan="2" style="text-align: left;">' + array[i].createTime + '<span style="padding-left:0.5em;" class="small red_font">' + isInGrid + '</span></td></tr>'
                                html += '   <tr>';


                                html += '   <tr>';
                                /*  html += '       <td class="">' + array[i].caseno + '</td>'; */
                                html += '       <td colspan="2" class="">' + array[i].address + '</td>';
                                html += '   </tr>';
                                html += '   <tr>';


                                html += '   </tr>';
                                html += '</table>';
                                var $html = createListRow(html).appendTo("#gj_html");
                                $html.data('data', array[i]);
                                $html.listen("quickClick", function (e) {
                                    var data = $(e.currentTarget).data("data");
                                    window.currlongitude = data.longitude;
                                    window.currlatitude = data.latitude;
                                    window.showsome = "0";
                                    if (window.zggjflag == "1") {
                                        that.$router.push({path: '/zggj'});
                                    } else {
                                        that.$router.push({path: '/findzggj'});
                                    }
                                });
                            }
                        } else {
                            if (parseInt(pageNum) < 2) {
                                noListShow("", "", "", $("#gj_html"), "");
                            }
                        }
                    } else {
                        if (reset) {
                            reset(true);
                        }
                        toast(data.message);
                    }
                    window.flag1 = true;
                }, "");
            }

            function select_yichang() {

                var option = '';
                option += '<select style="display: inline-block;">';
                option += '<option selected="selected" value="">默认(全部)</option>';
                option += '<option value="0">无异常</option>'
                option += '<option value="1">有异常</option>'
                option += '</select>'
                $("#yichang_list").html(option);


            }
        }
    }
</script>

<style scoped>
    #gj_list_page .page_header_title .jszx-bar-icon-up {
        background: #fafafa;
    }

    #gj_list_page .list_table tr:first-child td {
        padding: 1em 0em 0em 1.3em;
    }

    #gj_list_page .list_table tr td {
        padding: 0.7em 0em 1em 1.3em;
    }

    #gj_list_page .home_list_tr_first_td {
        padding: 0.7em;
        padding-left: 0em;
    }

    /*#gj_list_page .page_header .right_img {*/
    /*right: 1.5em;*/
    /*}*/

    #gj_list_page .red_num {
        /*margin-left: 3.3em;*/
        float: right;
        top: 1.2em;
        right: 2em;
    }

    #gj_list_page .search_div {
        padding: 0.5em 1em 0em 1em;
        margin: 0em;
        background: #edeef1;
    }

    #gj_list_page #case_welcome_inp {
        width: 65%;
        float: left;
        line-height: 2.5em;
        height: 2.5em;
    }

    #gj_list_page #refresh_service {
        width: 2em;
        height: 2em;
        padding: 0.4em 0.2em 0em 0.8em;
        float: right;
    }

    #gj_list_page #service_search {
        width: 4em;
        text-align: center;
        color: #ffffff;
        margin-top: 0.7em;
        float: right;
        line-height: 2.2em;
        border-radius: 0.3em;
    }

    #gj_list_page .search_div {
        height: 3.2em;
    }

    #gj_list_page .home_list_tr_first_td span {
        margin-left: 0.5em;
    }

    #gj_list_page .small_img {
        height: 1.2em;
    }

    #gj_list_page .jszx-bar-item-2 > div {
        width: 50%;
    }

    #gj_list_page .tab_oranger_font p,
    .tab_bloack_font p, #gj_list_page .jszx-bar-item-2 div p {
        height: 2.8em;
        line-height: 2.8em;
    }

    /*筛选小图标*/
    #gj_list_page .jszx-bar-item-2 div p img {
        width: 0.6em;
        height: 0.5em;
        padding-left: 0.5em;
    }

    #gj_list_page .right_btn {
        width: 4.5em;
        right: 0em;
        height: 2.5em;
    }

    #gj_list_page .jszx-bar-item-2 > div {
        width: 50%;
    }

    #gj_list_page .jszx-bar-item-2 p,
    .jszx-bar-item-2 p {
        height: 2.8em;
        line-height: 2.8em;
    }

    #gj_list_page .list_second_table tr td {
        padding: 0.7em 1em 0em 1.3em;
    }
</style>
