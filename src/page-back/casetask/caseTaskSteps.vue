<template>
<div data-role="page" id="case_task_steps_page">
    <div class="page_header">
        <img class="left_img back-button" src="/staitc/resources/images/icon_white_back.png">
        <div class="page_header_title">处理步骤</div>
        <!--<div class="small right_img right_btn">page_header_title-->
        <!--<div class="smaller btn_div">查看附件</div>-->
        <!--&lt;!&ndash;<div id="case_welcome_rednum" class="red_num" style="">11</div>&ndash;&gt;-->
        <!--</div>-->
    </div>
    <div class="page_content" style="background: #ffffff;">
        <div id="case_task_steps_wrapper" class="jszx-wrapper">
            <div class="jszx-scroller">
                <div id="case_task_steps_html" class="html_margin white_background">

                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
export default {
    mounted() {
        initCaseTaskSteps();
        appWorkOrder_viewHistory();
        if (!window.CaseTaskStpsPage) {

            window.CaseTaskStpsPage = true;
        }
        //            /*查看附件*/
        //            $("#case_task_steps_page .right_btn").listen("quickClick", function (e) {
        //                app.$router.push("../casetask/photoLook.html");
        //            });
        /*返回*/
        $("#case_task_steps_page .back-button").listen("quickClick", function (e) {
            window.history.back();
        });

        function initCaseTaskSteps() {
            $("#case_task_steps_wrapper")[0].style.height = window.localInnerHeight - $("#case_task_steps_page .page_header").height() + "px";
            initScroll({
                "wrapper": "case_task_steps_wrapper",
                "dir": "y",
                "bounce": false,
                "scrollBar": true
            });
            scrollToTop("case_task_steps_wrapper");
            window.lookType = "";
            $("#case_task_steps_page table tr td").addClass("gray_line_bottom");
            $("#case_task_steps_page table tr td input").val("");
            $("#case_task_steps_page table tr td textarea").val("");
        }
    }
}
</script>

<style scoped>
#case_task_steps_page #case_task_steps_html .list_row div:first-child {
    background: #f7f7f7;
    padding: 1em;
    padding: 0.5em 0.1em 0.5em 0.3em;
    border-radius: 0.5em;
}

#case_task_steps_page #case_task_steps_html .list_row {
    margin: 1em;
}

#case_task_steps_page #case_task_steps_html div p {
    padding: 0.3em;
    line-height: 1.3em;
}

/*#case_task_steps_page .right_btn {*/
/*width: 3.5em;*/
/*height: 1.5em;*/
/*color: #ffffff;*/
/*}*/

#case_task_steps_page .right_btn .btn_div {
    color: #ffffff;
    border: 1px solid #ffffff;
    height: 1.7em;
    line-height: 1.7em;
    top: -0.5em;
    background: orange;
    text-align: center;
}
</style>
