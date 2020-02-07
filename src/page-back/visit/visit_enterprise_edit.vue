<template>
    <div data-role="page" id="visit_enterprise_edit_page">
        <div class="page_header">
            <img class="left_img back-button" src="/staitc/resources/images/icon_white_back.png">
            <div class="page_header_title">走访记录</div>
        </div>
        <div class="page_content">
            <div id="visit_enterprise_edit_wrapper" class="jszx-wrapper">
                <div class="jszx-scroller">
                    <div id="visit_enterprise_edit_html" class="html_margin white_background">
                        <table class="inp_table" cellpadding="0" cellspacing="0">
                            <tr>
                                <td style="padding:1em 1em 1em 1.3em;">上传图片</td>
                                <td colspan="2">
                                    <input id="good_num" class="small" value="0/5" readonly type="text">
                                </td>
                            </tr>
                            <tr>
                                <td colspan="3" class="commodityAddImgs">
                                    <div id="visit_enterprise_edit_img_wrapper" class="jszx-wrapper">
                                        <div class="jszx-scroller" id="visit_enterprise_edit_img_scroll">
                                            <div id="visit_enterprise_edit_img">
                                            </div>
                                        </div>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td style="min-width: 5em;" class="">企业名称</td>
                                <td colspan="2">
                                    <input id="visit_enterprise_edit_enterpriseName" readonly type="text"/>
                                </td>
                            </tr>
                            <tr>
                                <td style="min-width: 5em;" class="">企业负责人</td>
                                <td colspan="2">
                                    <input readonly id="visit_enterprise_edit_businessLeader" type="text"/>
                                </td>
                            </tr>
                            <tr>
                                <td style="min-width: 5em;" class="">负责人职务<span>*</span></td>
                                <td colspan="2">
                                    <input type="text" id="visit_enterprise_edit_businessLeaderPosition"
                                           placeholder="请输入负责人职务"/>
                                </td>
                            </tr>
                            <tr>
                                <td style="min-width: 5em;" class="">负责人手机</td>
                                <td colspan="2">
                                    <input readonly id="visit_enterprise_edit_businessLeaderPhone" type="tel"/>
                                </td>
                            </tr>
                            <tr>
                                <td style="min-width: 5em;" class="">企业规模</td>
                                <td colspan="2">
                                    <input readonly id="visit_enterprise_edit_workerNo" type="text"/>
                                </td>
                            </tr>
                            <tr id="visit_enterprise_edit_industryType_tr">
                                <td style="min-width: 5em;" class="">产业类型</td>
                                <td>
                                    <input readonly id="visit_enterprise_edit_industryType" type="text"
                                           placeholder="请选择产业类型"/>
                                </td>
                                <td style="width: 1%;"><img class="div_input_value_img"
                                                            src="/staitc/resources/images/icon_gray_solid_down.png"></td>
                            </tr>
                            <tr>
                                <td colspan="2" style="width:80%;">所属镇（街道、园区）</td>
                                <td>
                                    <input class="small gray_dark_font" style="color:#999999;"
                                           id="addrss_addprov_words"/>
                                </td>
                            </tr>
                            <tr>
                                <td colspan="3">
                    <textarea readonly id="visit_enterprise_edit_"
                              style="text-align:left;min-height:2em;padding:0em 0.5em 0em 1em;"></textarea>
                                </td>
                            </tr>
                            <tr>
                                <td style="padding-top:0.5em;">详细地址</td>
                                <td colspan="2">
                                    <input id="edit_address_words" class="small gray_dark_font" style="color:#999999;"
                                           readonly="true"/>
                                </td>
                            </tr>
                            <tr>
                                <td colspan="3">
                            <textarea id="visit_enterprise_edit_address" readonly
                                      style="text-align:left;min-height: 5em;padding:0em 0.5em 0em 1em;"></textarea>
                                </td>
                            </tr>
                            <tr>
                                <td style="padding-top:0.5em;">经营范围</td>
                                <td colspan="2">
                                    <input class="small gray_dark_font" style="color:#999999;" readonly
                                           id="edit_businessScope_words"/>
                                </td>
                            </tr>
                            <tr>
                                <td colspan="3">
                            <textarea id="visit_enterprise_edit_businessScope" readonly
                                      style="text-align:left;min-height: 5em;padding:0em 0.5em 0em 1em;"></textarea>
                                </td>
                            </tr>
                        </table>
                        <table class="inp_table" cellpadding="0" cellspacing="0">
                            <tr>
                                <td style="min-width: 5em;" class="visit_enterprise_edit_page">本年销售<span>*</span></td>
                                <td>
                                    <input id="visit_enterprise_edit_currentSales" type="tel" class="input_no_border"
                                           placeholder="请输入本年销售"/>
                                </td>
                                <td style="width:2em;padding-right:0.5em;">万元</td>
                            </tr>
                            <tr>
                                <td style="min-width: 5em;" class="visit_enterprise_edit_page">本年纳税<span>*</span></td>
                                <td>
                                    <input id="visit_enterprise_edit_currentTaxAmount" type="tel"
                                           class="input_no_border"
                                           placeholder="请输入本年纳税"/>
                                </td>
                                <td style="width:2em;padding-right:0.5em;">万元</td>
                            </tr>
                            <tr>
                                <td style="min-width: 5em;" class="visit_enterprise_edit_page">明年预计销售<span>*</span></td>
                                <td>
                                    <input id="visit_enterprise_edit_projectedSales" type="tel" class="input_no_border"
                                           placeholder="请输入明年预计销售"/>
                                </td>
                                <td class="" style="width:2em;padding-right:0.5em;">万元</td>
                            </tr>
                        </table>
                        <table class="inp_table" cellpadding="0" cellspacing="0">
                            <tr>
                                <td colspan="2">企业问题及诉求<span>*</span></td>
                                <td>
                                    <input id="visit_enterprise_problemsAndAppeals_words" class="small gray_dark_font"
                                           style="color:#999999;" readonly="true"
                                           value="0/150"/>
                                </td>
                            </tr>
                            <tr>
                                <td colspan="3">
                            <textarea
                                    onfocus="newCheckWord('visit_enterprise_edit_problemsAndAppeals',500,'visit_enterprise_problemsAndAppeals_words')"
                                    onKeyUp="javascript:newCheckWord('visit_enterprise_edit_problemsAndAppeals',500,'visit_enterprise_problemsAndAppeals_words');"
                                    onMouseDown="javascript:newCheckWord('visit_enterprise_edit_problemsAndAppeals',500,'visit_enterprise_problemsAndAppeals_words');"
                                    id="visit_enterprise_edit_problemsAndAppeals" placeholder="请输入企业问题及诉求"
                                    style="text-align:left;min-height: 5em;padding:0em 0.5em 0em 1em;"></textarea>
                                </td>
                            </tr>
                            <tr>
                                <td colspan="2" style="width:80%;">问题及诉求解决情况<span>*</span></td>
                                <td>
                                    <input id="edit_problemsAndAppealsSolution_words" class="small gray_dark_font"
                                           style="color:#999999;" readonly="true"
                                           value="0/150"/>
                                </td>
                            </tr>
                            <tr>
                                <td colspan="3">
                            <textarea
                                    onfocus="newCheckWord('visit_enterprise_edit_problemsAndAppealsSolution',500,'edit_problemsAndAppealsSolution_words')"
                                    onKeyUp="javascript:newCheckWord('visit_enterprise_edit_problemsAndAppealsSolution',500,'edit_problemsAndAppealsSolution_words');"
                                    onMouseDown="javascript:newCheckWord('visit_enterprise_edit_problemsAndAppealsSolution',500,'edit_problemsAndAppealsSolution_words');"
                                    id="visit_enterprise_edit_problemsAndAppealsSolution" placeholder="请输入问题及诉求解决情况"
                                    style="text-align:left;min-height: 5em;padding:0em 0.5em 0em 1em;"></textarea>
                                </td>
                            </tr>
                            <tr>
                                <td>企业建议<span>*</span></td>
                                <td colspan="2">
                                    <input id="edit_enterpriseSuggestion_words" class="small gray_dark_font"
                                           style="color:#999999;" readonly="true"
                                           value="0/150"/>
                                </td>
                            </tr>
                            <tr>
                                <td colspan="3">
                            <textarea
                                    onfocus="newCheckWord('visit_enterprise_edit_enterpriseSuggestion',500,'edit_enterpriseSuggestion_words')"
                                    onKeyUp="javascript:newCheckWord('visit_enterprise_edit_enterpriseSuggestion',500,'edit_enterpriseSuggestion_words');"
                                    onMouseDown="javascript:newCheckWord('visit_enterprise_edit_enterpriseSuggestion',500,'edit_enterpriseSuggestion_words');"
                                    id="visit_enterprise_edit_enterpriseSuggestion" placeholder="请输入企业建议"
                                    style="text-align:left;min-height: 5em;padding:0em 0.5em 0em 1em;"></textarea>
                                </td>
                            </tr>
                            <tr>
                                <td>建议解决情况<span>*</span></td>
                                <td colspan="2">
                                    <input id="visit_enterprise_suggestionSolved_words" class="small gray_dark_font"
                                           style="color:#999999;" readonly="true"
                                           value="0/150"/>
                                </td>
                            </tr>
                            <tr>
                                <td colspan="3">
                            <textarea
                                    onfocus="newCheckWord('visit_enterprise_edit_suggestionSolved',500,'visit_enterprise_suggestionSolved_words')"
                                    onKeyUp="javascript:newCheckWord('visit_enterprise_edit_suggestionSolved',500,'visit_enterprise_suggestionSolved_words');"
                                    onMouseDown="javascript:newCheckWord('visit_enterprise_edit_suggestionSolved',500,'visit_enterprise_suggestionSolved_words');"
                                    id="visit_enterprise_edit_suggestionSolved" placeholder="请输入建议解决情况"
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
        name: "visit_enterprise_edit",
        data() {
            return {}
        },
        created() {

        },
        mounted() {
            window.searchPage = 2;
            $("#visit_enterprise_edit_page").live("pageshow", function () {
                initVisitEnterPriseEdit();
                app_enterpriseBaseInfo();
                /*返回*/
                $("#visit_enterprise_edit_page .back-button").listen("quickClick", function (e) {
                    window.history.back();
                });
                //产业类型
                $("#visit_enterprise_edit_page #visit_enterprise_edit_industryType_tr").listen("quickClick", function (e) {
                    app_getBaseType(7);
                });

                //商品图片
                $("#visit_enterprise_edit_page #choicemore").click(function (e) {
                    window.upload_imgscroll = "visit_enterprise_edit_img_scroll";
                    window.upload_imgwrapper = "visit_enterprise_edit_img_wrapper";
                    window.upload_addimg = "visit_enterprise_edit_img";
                    getPhotograph();
                });
                /*保存*/
                $("#visit_enterprise_edit_page #save_returnAddress").listen("quickClick", function (e) {
                    if (isNull($.trim($("#visit_enterprise_edit_businessLeaderPosition").val()))) {
                        toast("请输入负责人职务");
                    } else if (isNull($.trim($("#visit_enterprise_edit_currentSales").val()))) {
                        toast("请输入本年销售");
                    } else if (isNaN($.trim($("#visit_enterprise_edit_currentSales").val()))) {
                        toast("本年销售只能输入整数或者小数");
                    } else if (parseFloat($.trim($("#visit_enterprise_edit_currentSales").val())) < 0) {
                        toast("本年销售必须大于0");
                    } else if (isNull($.trim($("#visit_enterprise_edit_currentTaxAmount").val()))) {
                        toast("请输入本年纳税");
                    } else if (isNaN($.trim($("#visit_enterprise_edit_currentTaxAmount").val()))) {
                        toast("本年纳税只能输入整数或者小数");
                    } else if (parseFloat($.trim($("#visit_enterprise_edit_currentTaxAmount").val())) < 0) {
                        toast("本年纳税必须大于0");
                    } else if (isNull($.trim($("#visit_enterprise_edit_projectedSales").val()))) {
                        toast("请输入明年预计销售");
                    } else if (isNaN($.trim($("#visit_enterprise_edit_projectedSales").val()))) {
                        toast("明年预计销售只能输入整数或者小数");
                    } else if (parseFloat($.trim($("#visit_enterprise_edit_projectedSales").val())) < 0) {
                        toast("明年预计销售必须大于0");
                    } else if (isNull($.trim($("#visit_enterprise_edit_problemsAndAppeals").val()))) {
                        toast("请输入企业问题及诉求");
                    } else if (isNull($.trim($("#visit_enterprise_edit_problemsAndAppealsSolution").val()))) {
                        toast("请输入问题及诉求解决情况");
                    } else if (isNull($.trim($("#visit_enterprise_edit_enterpriseSuggestion").val()))) {
                        toast("请输入企业建议");
                    } else if (isNull($.trim($("#visit_enterprise_edit_suggestionSolved").val()))) {
                        toast("请输入建议解决情况");
                    } else {
                        if (!isNull(window.picture_array) || window.picture_array.length > 0) {
                            window.picture_upImg = "";
                            app_upPic(window.picture_array[0], 0, 2);
                        } else {
                            app_saveEnterpriseInfo(window.visitWelcomeTaskId, $("#visit_enterprise_edit_businessLeaderPosition").val(), $("#visit_enterprise_edit_currentSales").val(), $("#visit_enterprise_edit_currentTaxAmount").val(), $("#visit_enterprise_edit_projectedSales").val(), $("#visit_enterprise_edit_problemsAndAppeals").val(), $("#visit_enterprise_edit_problemsAndAppealsSolution").val(), $("#visit_enterprise_edit_enterpriseSuggestion").val(), $("#visit_enterprise_edit_suggestionSolved").val());
                        }
                    }
                });
            });

            function initVisitEnterPriseEdit() {
                $("#visit_enterprise_edit_wrapper")[0].style.height = window.localInnerHeight - $("#visit_enterprise_edit_page .page_header").height() - $("#visit_enterprise_edit_page .page_footer").height() + "px";
                initScroll({
                    "wrapper": "visit_enterprise_edit_wrapper",
                    "dir": "y",
                    "bounce": false,
                    "scrollBar": true
                });
                scrollToTop("visit_enterprise_edit_wrapper");
                $("#visit_enterprise_edit_page table tr td").addClass("gray_line_bottom");
                $("#visit_enterprise_edit_page table tr td input").val("");
                $("#visit_enterprise_edit_page table tr td textarea").val("");
                $("#visit_enterprise_edit_img_scroll").css("transform", "none");
                $("#visit_enterprise_edit_img_wrapper .scroll-bar-x").css("transform", "none");
                $("#edit_problemsAndAppealsSolution_words").val("0/150");
                $("#visit_enterprise_problemsAndAppeals_words").val("0/150");
                $("#edit_enterpriseSuggestion_words").val("0/150");
                $("#visit_enterprise_suggestionSolved_words").val("0/150");
                $("#visit_enterprise_edit_page #good_num").val("0/5");
                //图片集合
                window.picture_array = [];
                //走访产业类型
                window.visitIndustryTypeId = "";
                window.nextUserId = "";
                $("#visit_enterprise_edit_page #visit_enterprise_edit_img").empty();
                $("#visit_enterprise_edit_page #visit_enterprise_edit_img").append('<img class="goodsimgone" style="padding-top:2em;" src="/staitc/resources/images/icon_add_photo.png" id="choicemore">');
            }
        },
        methods: {}
    }
</script>

<style lang="less" scoped>
    #visit_enterprise_edit_page .commodityAddImgs {
        overflow: hidden;
        background: #f3f3f3;
    }

    #visit_enterprise_edit_page .imgdiv {
        padding: 0.7em;
        padding-top: 0em;
        position: relative;
        width: 6em;
        float: left;
    }

    #visit_enterprise_edit_page .goodsimgone {
        float: left;
        height: 6em;
        width: 6em;
        margin-top: -1em;
    }

    #visit_enterprise_edit_page .delimg {
        width: 2em;
        height: 2em;
        position: relative;
        top: 0em;
        left: 5em;
    }

    #visit_enterprise_edit_page #visit_enterprise_edit_img {
        height: 7.5em;
        overflow: hidden;
        display: inline-block;
    }

    #visit_enterprise_edit_page .goodsimgone {
        float: left;
        height: 6em;
        width: 6em;
        margin-top: -1em;
    }
</style>
