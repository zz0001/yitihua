<template>
    <div data-role="page" id="visit_farmer_edit_page">
        <div class="page_header">
            <img class="left_img back-button" src="/staitc/resources/images/icon_white_back.png">
            <div class="page_header_title">走访记录</div>
        </div>
        <div class="page_content">
            <div id="visit_farmer_edit_wrapper" class="jszx-wrapper">
                <div class="jszx-scroller">
                    <div id="visit_farmer_edit_html" class="html_margin white_background">
                        <table class="inp_table" cellpadding="0" cellspacing="0">
                            <tr>
                                <td style="padding:1em 1em 1em 1.3em;">上传图片</td>
                                <td colspan="2">
                                    <input id="good_num" class="small" value="0/5" readonly type="text">
                                </td>
                            </tr>
                            <tr>
                                <td colspan="3" class="commodityAddImgs">
                                    <div id="visit_farmer_edit_img_wrapper" class="jszx-wrapper">
                                        <div class="jszx-scroller" id="visit_farmer_edit_img_scroll">
                                            <div id="visit_farmer_edit_img">
                                            </div>
                                        </div>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td style="min-width: 5em;" class="">走访人</td>
                                <td colspan="2">
                                    <input id="visit_farmer_edit_farmerName" readonly type="text"/>
                                </td>
                            </tr>
                            <tr>
                                <td style="min-width: 5em;" class="">农户姓名</td>
                                <td colspan="2">
                                    <input id="visit_farmer_edit_businessLeader" readonly type="text"/>
                                </td>
                            </tr>
                            <tr>
                                <td style="min-width: 5em;" class="">年龄<span>*</span></td>
                                <td colspan="2">
                                    <input type="tel" id="visit_farmer_edit_age"
                                           placeholder="请输入年龄" maxlength="3"/>
                                </td>
                            </tr>
                            <tr>
                                <td style="min-width: 5em;" class="">工作单位<span>*</span></td>
                                <td colspan="2">
                                    <input placeholder="请输入工作单位" id="visit_farmer_edit_workUnit" type="text"/>
                                </td>
                            </tr>
                            <tr>
                                <td style="min-width: 5em;" class="">联系电话<span>*</span></td>
                                <td colspan="2">
                                    <input placeholder="请输入联系电话" id="visit_farmer_edit_respondentsPhone" type="tel"/>
                                </td>
                            </tr>
                            <tr>
                                <td colspan="2">农户住址<span>*</span></td>
                                <td>
                                    <input class="small gray_dark_font" style="color:#999999;"
                                           id="address_words"/>
                                </td>
                            </tr>
                            <tr>
                                <td colspan="3">
                                <textarea placeholder="请输入农户住址" id="visit_farmer_edit_address"
                                          style="text-align:left;min-height:2em;padding:0em 0.5em 0em 1em;"></textarea>
                                </td>
                            </tr>
                            <tr>
                                <td style="padding-top:0.5em;">诉求<span>*</span></td>
                                <td colspan="2">
                                    <input id="visit_farmer_approval_words" class="small gray_dark_font"
                                           style="color:#999999;"
                                           readonly="true"/>
                                </td>
                            </tr>
                            <tr>
                                <td colspan="3">
                            <textarea
                                    onfocus="newCheckWord('visit_farmer_edit_appeal',500,'visit_farmer_approval_words')"
                                    onKeyUp="javascript:newCheckWord('visit_farmer_edit_appeal',500,'visit_farmer_approval_words');"
                                    onMouseDown="javascript:newCheckWord('visit_farmer_edit_appeal',500,'visit_farmer_approval_words');"
                                    id="visit_farmer_edit_appeal" placeholder="请输入诉求"
                                    style="text-align:left;min-height: 5em;padding:0em 0.5em 0em 1em;"></textarea>

                                </td>
                            </tr>
                            <tr>
                                <td style="min-width: 5em;" class="">诉求数量<span>*</span></td>
                                <td colspan="2">
                                    <input placeholder="请输入诉求数量" id="visit_farmer_edit_appealNo" type="tel"/>
                                </td>
                            </tr>
                            <tr>
                                <td style="padding-top:0.5em;">问题分类<span>*</span></td>
                                <td colspan="2">
                                    <input id="visit_farmer_edit_words" class="small gray_dark_font"
                                           style="color:#999999;"
                                           readonly="true"/>
                                </td>
                            </tr>
                            <tr>
                                <td colspan="3">
                            <textarea
                                    onfocus="newCheckWord('visit_farmer_edit_problemsType',500,'visit_farmer_edit_words')"
                                    onKeyUp="javascript:newCheckWord('visit_farmer_edit_problemsType',500,'visit_farmer_edit_words');"
                                    onMouseDown="javascript:newCheckWord('visit_farmer_edit_problemsType',500,'visit_farmer_edit_words');"
                                    id="visit_farmer_edit_problemsType" placeholder="请输入问题分类"
                                    style="text-align:left;min-height: 5em;padding:0em 0.5em 0em 1em;"></textarea>

                                </td>
                            </tr>
                            <tr>
                                <td style="min-width: 5em;" class="">解决问题个数<span>*</span></td>
                                <td colspan="2">
                                    <input placeholder="请输入解决问题个数" id="visit_farmer_edit_solveNo" type="tel"/>
                                </td>
                            </tr>

                            <tr>
                                <td style="padding-top:0.5em;">解决问题描述<span>*</span></td>
                                <td colspan="2">
                                    <input class="small gray_dark_font" style="color:#999999;" readonly="true"
                                           id="edit_solovedProblemsDescription_words"/>
                                </td>
                            </tr>
                            <tr>
                                <td colspan="3">
                            <textarea
                                    onfocus="newCheckWord('visit_farmer_edit_solovedProblemsDescription',500,'edit_solovedProblemsDescription_words')"
                                    onKeyUp="javascript:newCheckWord('visit_farmer_edit_solovedProblemsDescription',500,'edit_solovedProblemsDescription_words');"
                                    onMouseDown="javascript:newCheckWord('visit_farmer_edit_solovedProblemsDescription',500,'edit_solovedProblemsDescription_words');"
                                    placeholder="请输入解决问题描述" id="visit_farmer_edit_solovedProblemsDescription"
                                    style="text-align:left;min-height: 5em;padding:0em 0.5em 0em 1em;"></textarea>
                                </td>
                            </tr>
                        </table>
                    </div>
                </div>
            </div>
        </div>
        <div class="page_footer">
            <div class="footer_button_div">
                <div id="save_returnAddress" class="alert_bottom_three orange_background">保存</div>
            </div>
        </div>
    </div>
</template>

<script type="text/ecmascript-6">
    export default {
        name: "visit_farmer_edit",
        data() {
            return {}
        },
        created() {

        },
        mounted() {
            window.searchPage = 2;
            $("#visit_farmer_edit_page").live("pageshow", function () {
                initVisitfarmerEdit();
                /*返回*/
                $("#visit_farmer_edit_page .back-button").listen("quickClick", function (e) {
                    window.history.back();
                });
                //商品图片
                $("#visit_farmer_edit_page #choicemore").click(function (e) {
                    window.upload_imgscroll = "visit_farmer_edit_img_scroll";
                    window.upload_imgwrapper = "visit_farmer_edit_img_wrapper";
                    window.upload_addimg = "visit_farmer_edit_img";
                    getPhotograph();
                });
                /*保存*/
                $("#visit_farmer_edit_page #save_returnAddress").listen("quickClick", function (e) {
                    if (isNull($.trim($("#visit_farmer_edit_age").val()))) {
                        toast("请输入年龄");
                    } else if (isInteger($("#visit_farmer_edit_age").val())) {
                        toast("年龄必须是整数");
                    } else if (isNull($.trim($("#visit_farmer_edit_workUnit").val()))) {
                        toast("请输入工作单位");
                    } else if (isNull($("#visit_farmer_edit_respondentsPhone").val())) {
                        toast("请输入联系电话");
                    } else if (!isPhone($("#visit_farmer_edit_respondentsPhone").val())) {
                        toast("联系电话格式不正确");
                    } else if (isNull($("#visit_farmer_edit_address").val())) {
                        toast("请输入农户住址");
                    } else if (isNull($.trim($("#visit_farmer_edit_appeal").val()))) {
                        toast("请输入诉求");
                    } else if (isNull($("#visit_farmer_edit_appealNo").val())) {
                        toast("请输入诉求数量");
                    } else if (isInteger($("#visit_farmer_edit_appealNo").val())) {
                        toast("诉求数量必须是整数");
                    } else if (isNull($.trim($("#visit_farmer_edit_problemsType").val()))) {
                        toast("请输入问题分类");
                    } else if (isNull($("#visit_farmer_edit_solveNo").val())) {
                        toast("请输入解决问题个数");
                    } else if (isInteger($("#visit_farmer_edit_solveNo").val())) {
                        toast("解决问题个数必须是整数");
                    } else if (isNull($.trim($("#visit_farmer_edit_solovedProblemsDescription").val()))) {
                        toast("请输入解决问题描述");
                    } else {
                        if (!isNull(window.picture_array) || window.picture_array.length > 0) {
                            window.picture_upImg = "";
                            app_upPic(window.picture_array[0], 0, 1);
                        } else {
                            app_saveFarmerInfo(window.visitWelcomeTaskId, $("#visit_farmer_edit_age").val(), $("#visit_farmer_edit_workUnit").val(), $("#visit_farmer_edit_respondentsPhone").val(), $("#visit_farmer_edit_address").val(), $("#visit_farmer_edit_appeal").val(), $("#visit_farmer_edit_appealNo").val(), $("#visit_farmer_edit_problemsType").val(), $("#visit_farmer_edit_solveNo").val(), $("#visit_farmer_edit_solovedProblemsDescription").val());
                        }
                    }
                });
            });

            function initVisitfarmerEdit() {
                $("#visit_farmer_edit_wrapper")[0].style.height = window.localInnerHeight - $("#visit_farmer_edit_page .page_header").height() - $("#visit_farmer_edit_page .page_footer").height() + "px";
                initScroll({
                    "wrapper": "visit_farmer_edit_wrapper",
                    "dir": "y",
                    "bounce": false,
                    "scrollBar": true
                });
                scrollToTop("visit_farmer_edit_wrapper");
                $("#visit_farmer_edit_page table tr td").addClass("gray_line_bottom");
                $("#visit_farmer_edit_page table tr td input").val("");
                $("#visit_farmer_edit_page table tr td textarea").val("");
                $("#visit_farmer_approval_words").val("0/150");
                $("#visit_farmer_edit_words").val("0/150");
                $("#edit_solovedProblemsDescription_words").val("0/150");
                //图片集合
                window.picture_array = [];
                //走访问题分类
                window.visitQuestionType = "";
                window.picture_upImg = "";
                $("#visit_farmer_edit_img_scroll").css("transform", "none");
                $("#visit_farmer_edit_img_wrapper .scroll-bar-x").css("transform", "none");
                window.nextUserId = "";
                $("#visit_farmer_edit_page #visit_farmer_edit_img").empty();
                $("#visit_farmer_edit_page #visit_farmer_edit_img").append('<img class="goodsimgone" style="padding-top:2em;" src="/staitc/resources/images/icon_add_photo.png" id="choicemore">');
                //农户姓名
                $("#visit_farmer_edit_farmerName").val(window.localStorage.userName);
                $("#visit_farmer_edit_businessLeader").val(window.visitWelcomeTaskInfo.name);
                $("#visit_farmer_edit_address").val(window.visitWelcomeTaskInfo.address);
            }
        },
        methods: {}
    }
</script>

<style lang="less" scoped>
    /*img start*/
    #visit_farmer_edit_page .commodityAddImgs {
        overflow: hidden;
        background: #f3f3f3;
    }

    #visit_farmer_edit_page .imgdiv {
        padding: 0.7em;
        padding-top: 0em;
        position: relative;
        width: 6em;
        float: left;
    }

    #visit_farmer_edit_page .goodsimgone {
        float: left;
        height: 6em;
        width: 6em;
        margin-top: -1em;
    }

    #visit_farmer_edit_page .delimg {
        width: 2em;
        height: 2em;
        position: relative;
        top: 0em;
        left: 5em;
    }

    #visit_farmer_edit_page #visit_farmer_edit_img {
        height: 7.5em;
        overflow: hidden;
        display: inline-block;
    }

    #visit_farmer_edit_page .goodsimgone {
        float: left;
        height: 6em;
        width: 6em;
        margin-top: -1em;
    }
</style>
