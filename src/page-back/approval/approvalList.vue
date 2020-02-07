<template>
<div data-role="page" id="approval_list_page">
    <div class="page_header">
        <img class="left_img back-button" src="/staitc/resources/images/icon_white_back.png">
        <div class="page_header_title">行政审批</div>
    </div>
    <div class="page_content">
        <div class="search_div">
            <input id="approval_list_inp" class="alert_edit_div_input" type="text" placeholder="请输入事项或企业名称" />
            <div id="service_search" class="orange_background smaller">搜索</div>
        </div>
        <div id="approval_list_wrapper" class="jszx-wrapper">
            <div class="jszx-scroller">
                <div id="approval_list_html" class="html_margin white_background">

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
        $("#approval_list_page").live("pageshow", function () {
            if (!window.approvalListPage) {
                initApprovalList();
                window.approvalListPage = true;
            }
            //返回
            $("#approval_list_page .back-button").listen("quickClick", function (e) {
                app.$router.push("../load/welcome.html");
            });

            //搜索
            $("#approval_list_page #service_search").listen("quickClick", function (e) {
                app_approvalList(false, 1, $("#approval_list_inp").val(), $("#approval_list_inp").val());
            });
        });

        function initApprovalList() {
            $("#approval_list_wrapper")[0].style.height = window.localInnerHeight - $("#approval_list_page .page_header").height() - $("#approval_list_page .search_div").height(); -
            $("#approval_list_page .page_footer").height() + "px";
            initScroll({
                "wrapper": "approval_list_wrapper",
                "dir": "y",
                "bounce": false,
                "scrollBar": false,
                "pullUpLoading": function (reset) { //上拉
                    if (window.searchPage > window.arrayDataLength) {
                        reset(true);
                        toast("没有更多的数据了");
                    } else {
                        app_approvalList(reset, window.searchPage++, $("#approval_list_inp").val(), $("#approval_list_inp").val());
                    }
                },
                "pullDownLoading": function (reset) { //下拉
                    window.searchPage = 2;
                    app_approvalList(reset, 1, $("#approval_list_inp").val(), $("#approval_list_inp").val());
                }
            });
            scrollToTop("approval_list_wrapper");
            $("#approval_list_inp").val("");
            app_approvalList(false, 1, $("#approval_list_inp").val(), $("#approval_list_inp").val());
        }
    }
}
</script>

<style lang="less" scoped>
#approval_list_page .search_div {
    /*padding: 0.5em 1em 0em 1em;*/
    /*margin: 0em;*/
    height: 3.2em;
    background: #edeef1;
}

#approval_list_page #approval_list_inp {
    width: 75%;
    margin-top: 0.5em;
}

#approval_list_page #service_search {
    width: 4em;
    text-align: center;
    color: #ffffff;
    margin-top: 1em;
    float: right;
    line-height: 2.2em;
    border-radius: 0.3em;
}

/*#approval_list_page table tr td{*/
/*padding: 0.7em 0em 0.7em 0.5em;*/
/*text-align: left;*/
/*padding-top: 0.5em;*/
/*}*/

/*#approval_list_page table tr:first-child td {*/
/*padding-bottom: 0em;*/
/*}*/
/*#approval_list_page table tr:last-child td {*/
/*padding-left: 1.5em;*/
/*}*/
#approval_list_page .page_content p {
    background: #f3f3f3;
}
</style>
