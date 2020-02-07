<template>
<div data-role="page" id="approval_detail_page">
    <div class="page_header">
        <img class="left_img back-button" src="/staitc/resources/images/icon_white_back.png">
        <div class="page_header_title">审批详情</div>
        <div class="right_img">附件</div>
    </div>
    <div class="page_content">
        <div id="approval_detail_wrapper" class="jszx-wrapper">
            <div class="jszx-scroller">
                <div id="approval_detail_html" class="html_margin white_background">
                    <table class="inp_table" cellpadding="0" cellspacing="0">
                        <tr>
                            <td style="width: 5em;" class="">事项名称</td>
                            <td colspan="2" id="approval_detail_objid"></td>
                        </tr>
                        <tr>
                            <td style="width: 5em;" class="">申请人</td>
                            <td colspan="2" id="approval_detail_objname"></td>
                        </tr>
                        <!--<tr>-->
                        <!--<td style="width: 5em;" class="">联系电话</td>-->
                        <!--<td colspan="2">-->
                        <!--<input type="text" readonly id="approval_detail_component_state"/>-->
                        <!--</td>-->
                        <!--</tr>-->
                        <tr>
                            <td style="width: 5em;" class="">企业名称</td>
                            <td colspan="2" id="approval_detail_deptcode"></td>
                        </tr>
                        <tr>
                            <td style="width: 5em;" class="">联系地址</td>
                            <td colspan="2" id="approval_detail_lianXiDz"></td>
                        </tr>
                        <!--<tr>-->
                        <!--<td style="width: 5em;" class="">办件编号</td>-->
                        <!--<td colspan="2" id="approval_detail_caseNo"></td>-->
                        <!--</tr>-->
                        <tr>
                            <td style="width: 5em;" class="">项目名称</td>
                            <td colspan="2" id="approval_detail_xiangMuMc"></td>
                        </tr>
                        <tr>
                            <td style="width: 5em;" class="">项目地址</td>
                            <td colspan="2" id="approval_detail_address">
                            </td>
                        </tr>
                        <tr>
                            <td style="width: 5em;" class="">审核结果</td>
                            <td colspan="2" id="approval_detail_state"></td>
                        </tr>
                        <tr>
                            <td style="width: 5em;" class="">批复时间</td>
                            <td colspan="2" id="approval_detail_replyDate"></td>
                        </tr>
                    </table>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
export default {
    mounted() {
        window.searchPage = 2;
        $("#approval_detail_page").live("pageshow", function () {
            if (!window.approvalDetailPage) {
                initApprovalDetail();
                window.approvalDetailPage = true;
            }
            //附件
            $("#approval_detail_page .right_img").listen("quickClick", function (e) {
                app.$router.push("../casetask/photoLook.html");
            });
            /*返回*/
            $("#approval_detail_page .back-button").listen("quickClick", function (e) {
                window.history.back();
            });
        });

        function initApprovalDetail() {
            $("#approval_detail_wrapper")[0].style.height = window.localInnerHeight - $("#approval_detail_page .page_header").height() + "px";
            initScroll({
                "wrapper": "approval_detail_wrapper",
                "dir": "y",
                "bounce": false,
                "scrollBar": true
            });
            window.lookType = "";
            scrollToTop("approval_detail_wrapper");
            $("#approval_detail_page table tr td").addClass("gray_line_bottom");
            $("#approval_detail_page table tr td:last-child").html("");
            app_approvalDetail();
        }
    }
}
</script>

<style lang="less" scoped>
#approval_detail_page .page_header .right_img {
    width: 4em;
    text-align: right;
    color: #FFFFFF;
}

#approval_detail_page table tr td {
    padding: 1em 1em 1em 0em;
    line-height: 1.4em;
}

#approval_detail_page table tr td:first-child {
    text-align: left;
    padding-left: 1em;
}

#approval_detail_page table tr td:last-child {
    text-align: right;
}
</style>
