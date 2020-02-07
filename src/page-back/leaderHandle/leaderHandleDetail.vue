<template>
    <div data-role="page" id="leader_handle_detail_page">
        <div class="page_header">
            <img class="left_img back-button" src="/staitc/resources/images/icon_white_back.png">
            <div class="page_header_title">任务详情</div>
            <div class="right_img right_btn" style="height:3.5em;width:4.5em;">处理步骤</div>
        </div>
        <div class="page_content">
            <div id="leader_handle_detail_wrapper" class="jszx-wrapper">
                <div class="jszx-scroller">
                    <div id="leader_handle_html" class="html_margin white_background">
                        <table class="inp_table" cellpadding="0" cellspacing="0">
                            <td colspan="3" class="commodityAddImgs">
                                <div id="leader_handle_detail_img_wrapper" class="jszx-wrapper">
                                    <div class="jszx-scroller" id="leader_handle_detail_img_scroll">
                                        <div id="leader_handle_detail_img">
                                        </div>
                                    </div>
                                </div>
                            </td>
                            <tr>
                                <td style="min-width: 5em;" class="">任务编号</td>
                                <td colspan="2">
                                    <input id="leader_task_detail_caseNo" readonly type="text"/>
                                </td>
                            </tr>
                            <tr>
                                <td style="min-width: 5em;" class="">任务事项</td>
                                <td colspan="2">
                                    <input id="leader_task_detail_title" readonly type="text"/>
                                </td>
                            </tr>



                            <tr >
                                <td style="min-width: 5em;" class="">截至时间</td>
                                <td colspan="2">
                                    <input readonly id="leader_task_detail_reportTime" type="tel"/>
                                </td>
                            </tr>
                            <tr id="deadline2_tr">
                                <td style="min-width: 5em;" class="">分管领导截至时间</td>
                                <td colspan="2">
                                    <input readonly id="leader_task_detail_deadline2" type="tel"/>
                                </td>
                            </tr>
                            <tr>
                                <td style="min-width: 5em;" class="">待办人</td>
                                <td colspan="2">
                                    <input readonly id="leader_task_detail_reportPerson" type="text"/>
                                </td>
                            </tr>


                            <tr>
                                <td style="padding-top:0.5em;">事项描述</td>
                                <td colspan="2">
                                    <input class="small gray_dark_font" style="color:#999999;" readonly="true"/>
                                </td>
                            </tr>
                            <tr>
                                <td colspan="3" style="padding:1em;text-align: left;color: #333333;"
                                    id="leader_task_detail_problem"></td>
                            </tr>
                            <tr id="audio_tr">
                                <td style="padding-top:0.5em;padding-bottom:0.5em;">交办语音</td>
                                <td colspan="2" style="padding:1em;text-align: right;color: #333333;padding-right: 1em;">
	                                <span class="disI vm" style="background:#80c1ee;display: inline-block;padding:1% 8%;border-radius:0.2em;margin-top:5%;">
		                          <span id="audio_span" class="f12 disI" style="color:#fff;margin-right:20%"></span>
		                              <img src="../repair/images/yyinImg.png" style="width:37%;">
		                          </span>
                                </td>
                            </tr>
                            <tr id="attachment_tr">
                                <td colspan="3" style="padding:1em;text-align: left;color: #333333;" ><span id="filePath123"  download="排名.xls">附件下载</span></td>
                            </tr>
                        </table>
                    </div>
                </div>
            </div>
        </div>
        <div class="page_footer">
            <div class="footer_button_div">
                <div id="leadertodo" class="alert_bottom_three orange_background">办理</div>
            </div>
        </div>
    </div>
    
</template>

<script>
    export default {
        mounted:{
            
        }

    }

</script>

<style scoped>
    #leader_handle_detail_page .commodityAddImgs {
        overflow: hidden;
        background: #f3f3f3;
    }

    #leader_handle_detail_page .imgdiv {
        padding: 0.7em;
        padding-top: 0em;
        position: relative;
        width: 6em;
        float: left;
    }

    #leader_handle_detail_page .goodsimgone {
        float: left;
        height: 6em;
        width: 6em;
        margin-top: 1em;
    }

    #leader_handle_detail_page #case_detail_img {
        height: 7.5em;
        overflow: hidden;
        display: inline-block;
    }

    /*img end*/
    #leader_handle_detail_page .jszx-bar-item-2 > div {
        width: 50%;
    }

    #leader_handle_detail_page .jszx-bar-item-2 p,
    .jszx-bar-item-2 p {
        height: 2.8em;
        line-height: 2.8em;
    }

    #leader_handle_detail_page .right_btn {
        width: 4.5em;
        right: 0em;
    }
</style>