<template>
    <div data-role="page" id="house_list_page">
        <div class="page_header">
            <img class="left_img back-button " src="/staitc/resources/images/icon_white_back.png">
            <div class="page_header_title">房屋列表</div>
            <div class="right_img right_btn" style="height:2.5em">筛选</div>
        </div>

        <div class="page_content2" style="height:100%">


            <div id="house_list_wrapper" class="jszx-wrapper">
                <div class="jszx-scroller">
                    <div id="house_list_html" class="html_margin white_background">
                        <!-- <div class="handlelist">
                           <div class="lefthandle">
                              <div>房屋1</div>
                              <div>2018-08-08</div>
                           </div>
                           <div class="righthandle">
                           <img src="/staitc/resources/images/icon_gray_line_left.png" class="">
                           </div>
                        </div> -->
                    </div>
                </div>
            </div>
        </div>
        <div class="max-dialog max-alert moretitle" id="house_search_content" style="box-shadow: none; width: 100%; display: -webkit-box; height: 683px;display:none;">
            <div class="max-dialog-masker"></div>
            <div class="max-dialog-frame moretitle_frame screen_search_content_div" style="position: absolute; background: rgb(255, 255, 255); height: 377.6px;">
                <div id="small_content_height" style="height: 324.6px;">
                    <div id="screen_content1_wrapper" style="width: 100%; height: 324.6px;" class="jszx-wrapper ">
                        <div class="jszx-scroller">
                            <div class="alert_edit" id="screen_content1" style="">

                                <div style="text-align: center; margin-top: 2em; ">房屋编号:<input id="house_caseno_list" style="width:60%;display:inline;border-radius: 5px;" class="alert_edit_div_input" type="text"
                                                                                               placeholder="请输入房屋编号"/></div>
                                <div style="text-align: center;">房屋地址:<input id="house_address_list" style="width:60%;display:inline;border-radius: 5px;" class="alert_edit_div_input" type="text"
                                                                             placeholder="请输入房屋地址"/></div>
                                <div style="text-align: center;line-height: 48px;">村/社区:<div id="house_cun_list" style="display:inline-block"></div></div>

                            </div>                  </div>
                        <div class="scroll-bar-y" style="height: 0px;"></div></div>

                    <div class="page_footer screeb_footer" style="position:absolute;bottom:0em;border-top:1px solid #f3f3f3;height:4em;background: #FFFFFF;">
                        <div class="footer_button_div">
                            <div id="housefindempty" style="width:35%;float:left;" class="alert_bottom_three gray_background">重置</div>
                            <div id="housefindlist" style="width:35%;float:left;" class="alert_bottom_three orange_background">确定</div></div></div></div></div></div>




    </div>
</template>

<script>
    export default {
        mounted(){
            window.searchPage = 2;
            $("#house_list_page").live("pageshow", function () {
                ininthouseList();
                window.searchPage = 2;


                /*上报*/
                $("#house_list_page .right_img").listen("quickClick", function (e) {
                    // $.mobile.changePage("../leasehouse/firstEdit.html");
                });
                /*返回*/
                $("#house_list_page .left_img").listen("quickClick", function (e) {
                    $.mobile.changePage("../load/welcome.html");
                });
                //筛选
                $("#house_list_page .right_btn").listen("quickClick", function (e) {
                    $("#house_search_content").show();
                });
                $("#housefindlist").listen("quickClick", function (e) {

                    houseInfoList(false, 1);
                });
                $("#housefindempty").listen("quickClick", function (e) {
                    $("#house_caseno_list").val("");
                    $("#house_address_list").val("");
                    $("#house_cun_list option:first").prop("selected", 'selected');

                });

            });
            /**
             * 初始化
             */
            function ininthouseList() {
                $("#house_list_wrapper")[0].style.height = window.localInnerHeight - $("#house_list_page .page_header").height() - $("#house_list_page .jszx-bar-icon-up").height() + "px";
                initScroll({
                    "wrapper": "house_list_wrapper",
                    "dir": "y",
                    "bounce": false,
                    "scrollBar": true,
                    "pullUpLoading": function (reset) { //上拉
                        if (window.searchPage > window.arrayDataLength) {
                            reset(true);
                            toast("没有更多的数据了");
                        } else {
                            houseInfoList(reset, window.searchPage++);
                        }
                    },
                    "pullDownLoading": function (reset) { //下拉
                        window.searchPage = 2;
                        houseInfoList(reset, 1)
                    }
                });
                scrollToTop("house_list_wrapper");

                //开始时间

                //结束时间
                $("#house_caseno_list").val("");
                $("#house_address_list").val("");
                console.log($("#house_caseno_list").val())
                houseInfoList(false, 1);
                selet_cun();
            }

            //接口调用以及dom构建
            function houseInfoList(reset, pageNum) {
                if (!reset) {
                    //showLoading("正在搜索...");
                }
                if (parseInt(pageNum) < 2) {
                    $("#house_list_html").empty();
                }
                var obj = "";
                var houseid="";
                var house_caseno_list = $("#house_caseno_list").val();
                var house_address_list = $("#house_address_list").val();
                var housedeptname= $("#house_cun_list option:selected").text();
                if(housedeptname=="默认(全部)"){
                    housedeptname="";
                }
                obj += toJson("id", houseid) + "&";
                obj += toJson("pageSize", "20") + "&";
                obj += toJson("houseno", house_caseno_list) + "&";
                obj += toJson("address", house_address_list) + "&";
                obj += toJson("deptName", housedeptname) + "&";
                obj += toJson("pageNum", pageNum);
                doPost("ap_houseInfoList.action", obj, function (data) {
                    if (!reset) {
                        hideLoading();
                    }
                    if (data.total > 0) {
                        $("#house_search_content").hide();
                        if (reset) {
                            reset(true);
                        }
                        var array = data.datas;
                        getDataLength(data.total);
                        if (!isNull(array) && array.length > 0) {
                            for (var i = 0; i < array.length; i++) {
                                var html='';
                                html+='<div class="handlelist"><div class="lefthandle">';
                                html+='<div>'+array[i].address+'</div><div>'+array[i].houseno+'</div></div>';
                                html+='<div class="righthandle"><img src="/staitc/resources/images/icon_gray_line_left.png" class="">';
                                html+='</div></div>';

                                var $html = createListRow(html).appendTo("#house_list_html");
                                $html.data('data', array[i]);
                                $html.listen("quickClick", function (e) {

                                    var data = $(e.currentTarget).data("data");
                                    window.houseListData = data;
                                    $.mobile.changePage("../leasehouse/firstEdit.html");
                                });
                            }
                        } else {
                            $("#house_search_content").hide();
                            noListShow("", "", "", $("#house_list_html"), "");
                        }
                    } else {
                        //if (reset) {
                        //    reset(true);
                        //}
                        $("#house_search_content").hide();
                        toast(data.message);
                        noListShow("", "", "", $("#house_list_html"), "");
                    }
                }, "");
            }
            function selet_cun(){

                doPost("deptList.action", "", function (data) {
                    var array = data[0].datas;
                    var option='';
                    option+='<select style="display: inline-block;">';
                    option += '<option selected="selected" value="">默认(全部)</option>';
                    for (var i = 0; i < array.length; i++) {
                        option += '<option value="' + array[i].id + '">' + array[i].text + '</option>'
                    }
                    option+='</select>'
                    $("#house_cun_list").html(option);
                }, "")


            }

        }
    }
</script>

<style scoped>
    #house_list_page .page_header_title .jszx-bar-icon-up {
        background: #fafafa;
    }

    #house_list_page .home_list_tr_first_td {
        padding: 0.7em;
        padding-left: 0em;
    }

    #house_list_page .right_btn {
        width: 3.5em;
        height: 1.5em;
        color: #ffffff;
    }

    #house_list_page .right_btn .btn_div {
        color: #ffffff;
        border: 1px solid #ffffff;
        height: 1.7em;
        line-height: 1.7em;
        top: -0.5em;
        background: orange;
        text-align: center;
    }

    #house_list_page .jszx-bar-item-3 > div {
        width: 33.3%;
    }

    #house_list_page .tab_oranger_font p,
    .tab_bloack_font p, #house_list_page .jszx-bar-item-3 div p {
        height: 2.8em;
        line-height: 2.8em;
    }

    /*筛选小图标*/
    #house_list_page .jszx-bar-item-3 div p img {
        width: 0.6em;
        height: 0.5em;
        padding-left: 0.5em;
    }

    #house_list_page .home_list_tr_first_td span {
        margin-left: 0.5em;
    }
    #house_list_page .right_img {

        height: 1.5em;
    }
    #house_list_page .search_div{
        height: 3.2em;
        padding: 0.5em 1em 0em 1em;
        margin: 0em;
        background: #edeef1;
    }
</style>