<template>
    <div data-role="page" id="udpate_pwd_page">


        <tk-header>
            修改密码
        </tk-header>
        <div class="page_content">
            <div id="udpate_pwd_wrapper" class="jszx-wrapper">
                <div class="jszx-scroller">
                    <table class="inp_table" cellpadding="0" cellspacing="0">
                        <tr id="udpate_pwd_eventComponent_tr">
                            <td style="min-width: 5em;" class="">原密码<span>*</span></td>
                            <td>
                                <input id="udpate_pwd_passwordOld" type="password"
                                       placeholder="请输入原密码"/>
                            </td>

                        </tr>
                        <tr id="udpate_pwd_bigClass_tr">
                            <td style="min-width: 5em;" class="">新密码<span>*</span></td>
                            <td>
                                <input id="udpate_pwd_passwordNew" type="password"
                                       placeholder="请输入新密码"/>
                            </td>

                        </tr>
                        <tr id="udpate_pwd_smallClass_tr">
                            <td style="min-width: 5em;" class="">确认密码<span>*</span></td>
                            <td>
                                <input id="udpate_pwd_passwordYes" type="password"
                                       placeholder="请输入确认密码"/>
                            </td>
                        </tr>
                    </table>
                    
                </div>
                <tk-button style="position:fixed;bottom:0;" @click="save">保存</tk-button>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "updatePwd",
        methods:{
            save(){
                if (isNull($.trim($("#udpate_pwd_passwordOld").val()))) {
                    toast("请输入原密码");
                } else if (isNull($.trim($("#udpate_pwd_passwordNew").val()))) {
                    toast("请输入新密码");
                } else if ($.trim($("#udpate_pwd_passwordNew").val()).length != 6) {
                    toast("密码为6位数");
                } else if (isNull($.trim($("#udpate_pwd_passwordYes").val()))) {
                    toast("请输入确认密码");
                }else if ($.trim($("#udpate_pwd_passwordNew").val()) != $.trim($("#udpate_pwd_passwordYes").val())) {
                    toast("新密码和确认密码不一致");
                } else {
                    appWorkOrder_changePassword($("#udpate_pwd_passwordOld").val(), $("#udpate_pwd_passwordNew").val());
                }
            }
        },
        mounted(){
            window.searchPage = 2;

                initPwdEdit();
            $("input").addClass("small gray_dark_font ui-input-text ui-body-c ui-corner-all ui-shadow-inset");
            $("textarea").addClass("ui-input-text ui-body-c ui-corner-all ui-shadow-inset");

            /*返回*/
                $("#udpate_pwd_page .back-button").listen("quickClick", function (e) {
                    $.mobile.changePage("../more/moreWelcome.html");
                });

            function initPwdEdit() {
                $("#udpate_pwd_wrapper")[0].style.height = window.localInnerHeight - $("#udpate_pwd_page .page_header").height() - $("#udpate_pwd_page .page_footer").height() + "px";
                initScroll({
                    "wrapper": "udpate_pwd_wrapper",
                    "dir": "y",
                    "bounce": false,
                    "scrollBar": true
                });
                scrollToTop("udpate_pwd_wrapper");
                $("#udpate_pwd_page table tr td").addClass("gray_line_bottom");
                $("#udpate_pwd_page table tr td input").val("");
            }
        }
    }
</script>

<style scoped>

</style>