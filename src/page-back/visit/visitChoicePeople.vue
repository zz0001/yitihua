<template>
    <div data-role="page" id="visit_choice_people_edit_page">
        <div class="page_header">
            <img class="left_img back-button" src="/staitc/resources/images/icon_white_back.png">
            <div class="page_header_title">走访指派</div>
        </div>
        <div class="page_content">
            <div id="visit_choice_people_edit_wrapper" class="jszx-wrapper">
                <div class="jszx-scroller">
                    <div class="html_margin white_background">
                        <table class="inp_table" cellpadding="0" cellspacing="0">
                            <tr class="visit_choice_people_edit_people">
                                <td style="min-width: 5em;" class="">人员<span>*</span></td>
                                <td>
                                    <input readonly id="visit_choice_people_edit_people" placeholder="请选择人员" type="text"/>
                                </td>
                                <td style="width: 1%;">
                                    <img src="/staitc/resources/images/icon_gray_solid_down.png">
                                </td>
                            </tr>
                            <tr>
                                <td style="padding-top:0.5em;">处理意见<span>*</span></td>
                                <td colspan="2">
                                    <input class="small gray_dark_font" style="color:#999999;" readonly="true"
                                           id="check_words"/>
                                </td>
                            </tr>
                            <tr>
                                <td colspan="3">
                            <textarea
                                    onfocus="newCheckWord('visit_choice_people_edit_problem',500,'check_words')"
                                    onKeyUp="javascript:newCheckWord('visit_choice_people_edit_problem',500,'check_words');"
                                    onMouseDown="javascript:newCheckWord('visit_choice_people_edit_problem',500,'check_words');"
                                    placeholder="请输入处理意见" id="visit_choice_people_edit_problem"
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
                <div id="save_returnAddress" class="alert_bottom_three orange_background">提交</div>
            </div>
        </div>
    </div>
</template>

<script type="text/ecmascript-6">
    export default {
        name: "visitChoicePeople",
        data() {
            return {}
        },
        created() {

        },
        mounted() {
            window.searchPage = 2;
            $("#visit_choice_people_edit_page").live("pageshow", function () {
                initCheckChoicePeople();
                /*选择*/
                $("#visit_choice_people_edit_page .visit_choice_people_edit_people").listen("quickClick", function (e) {
                    showChoiceOne();
                    app_getDeptAndPerson(window.visitDetailLevel, "visitTaskDetail");
                });
                /*返回*/
                $("#visit_choice_people_edit_page .back-button").listen("quickClick", function (e) {
                    $.mobile.changePage("../visit/visit_task_detail.html");
                });
                /*保存*/
                $("#visit_choice_people_edit_page .footer_button_div").listen("quickClick", function (e) {
                    if (isNull($.trim(window.nextUserId))) {
                        toast("请选择人员");
                    } else if (isNull($.trim($("#visit_choice_people_edit_problem").val()))) {
                        toast("请输入处理意见");
                    } else {
                        app_sendTask(window.visitDetailLevel,$("#visit_choice_people_edit_problem").val());
                    }
                });
            });
            /**
             * 初始化基本信息
             */
            function initCheckChoicePeople() {
                $("#visit_choice_people_edit_wrapper")[0].style.height = window.localInnerHeight - $("#visit_choice_people_edit_page .page_header").height() - $("#visit_choice_people_edit_page .page_footer").height() + "px";
                initScroll({
                    "wrapper": "visit_choice_people_edit_wrapper",
                    "dir": "y",
                    "bounce": false,
                    "scrollBar": true
                });
                window.nextUserId = "";
                scrollToTop("visit_choice_people_edit_wrapper");
                $("#visit_choice_people_edit_page table tr td").addClass("gray_line_bottom");
                $("#visit_choice_people_edit_page table tr td input").val("");
                $("#visit_choice_people_edit_page table tr td textarea").val("");
                window.nextUserId = "";
                $("#check_words").val("0/150");
            }
        },
        methods: {}
    }
</script>

<style lang="less" scoped>
    #visit_choice_people_edit_page table tr td:last-child {
        padding-right: 1em;
    }
</style>
