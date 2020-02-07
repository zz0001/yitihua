<template>
    <div data-role="page" id="my_part_detail_page">
        <div class="page_header">
            <img class="left_img back-button" src="/staitc/resources/images/icon_white_back.png">
            <div class="page_header_title">部件详情</div>
        </div>
        <div class="page_content">
            <div id="my_part_detail_wrapper" class="jszx-wrapper">
                <div class="jszx-scroller">
                    <div id="my_part_detail_html" class="html_margin white_background">
                        <table class="inp_table" cellpadding="0" cellspacing="0">
                            <tr>
                                <td style="width: 5em;" class="">部件识别码</td>
                                <td colspan="2">
                                    <input id="my_part_detail_objid" readonly type="text"/>
                                </td>
                            </tr>
                            <tr>
                                <td style="width: 5em;" class="">部件名称</td>
                                <td colspan="2">
                                    <input id="my_part_detail_objname" readonly type="text"/>
                                </td>
                            </tr>

                            <tr>
                                <td style="width: 5em;" class="">部件状态</td>
                                <td colspan="2">
                                    <input type="text" readonly id="my_part_detail_component_state"/>
                                </td>
                            </tr>
                            <tr>
                                <td style="width: 5em;" class="">所属网格</td>
                                <td colspan="2">
                                    <input readonly id="my_part_detail_deptcode" type="text"/>
                                </td>
                            </tr>
                            <tr>
                                <td style="width: 5em;" class="">部件大类</td>
                                <td colspan="2">
                                    <input readonly id="my_part_detail_component_type_big" type="text"/>
                                </td>
                            </tr>
                            <tr>
                                <td style="width: 5em;" class="">部件小类</td>
                                <td colspan="2">
                                    <input readonly id="my_part_detail_component_type_small" type="text"/>
                                </td>
                            </tr>
                            <tr>
                                <td style="width: 5em;" class="">主管部门</td>
                                <td colspan="2">
                                    <input readonly id="my_part_detail_manage_dept_name" type="text"/>
                                </td>
                            </tr>
                            <tr>
                                <td style="width: 5em;" class="">权属单位</td>
                                <td colspan="2">
                                    <input readonly id="my_part_detail_ownership_dept_name" type="text"/>
                                </td>
                            </tr>
                            <tr>
                                <td style="width: 5em;" class="">养护单位</td>
                                <td colspan="2">
                                    <input readonly id="my_part_detail_conserve_dept_name" type="text"/>
                                </td>
                            </tr>
                            <tr>
                                <td style="width: 5em;" class="">数据来源</td>
                                <td colspan="2">
                                    <input readonly id="my_part_detail_datasource" type="text"/>
                                </td>

                            <tr>
                                <td style="width: 5em;" class="">初始日期</td>
                                <td colspan="2">
                                    <input readonly id="my_part_detail_startdate" type="text"/>
                                </td>
                            </tr>
                            <tr>
                                <td style="width: 5em;" class="">变更日期</td>
                                <td colspan="2">
                                    <input readonly id="my_part_detail_changedate" type="text"/>
                                </td>
                            </tr>
                            <tr>
                                <td style="width: 5em;" class="">地址</td>
                                <td colspan="2" style="padding:1em 1em 1em 0em;text-align: right;line-height: 1.4em;"
                                    id="my_part_detail_address">
                                </td>
                            </tr>
                            <tr>
                                <td style="width: 5em;">备注</td>
                                <td colspan="2">
                                    <input readonly class="small gray_dark_font" style="color:#999999;"/>
                                </td>
                            </tr>
                            <tr>
                                <td colspan="3">
                        <textarea readonly id="my_part_detail_dote"
                                  style="text-align:left;min-height:2em;padding:0em 0.5em 0em 1em;"></textarea>
                                </td>
                            </tr>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script type="text/ecmascript-6">
    export default {
        name: "myPartDetail",
        data() {
            return {}
        },
        created() {

        },
        mounted() {
            window.searchPage = 2;
            $("#my_part_detail_page").live("pageshow", function () {
                initMyPartDetail();
                /*返回*/
                $("#my_part_detail_page .back-button").listen("quickClick", function (e) {
                    window.history.back();
                });
            });

            function initMyPartDetail() {
                $("#my_part_detail_wrapper")[0].style.height = window.localInnerHeight - $("#my_part_detail_page .page_header").height() + "px";
                initScroll({
                    "wrapper": "my_part_detail_wrapper",
                    "dir": "y",
                    "bounce": false,
                    "scrollBar": true
                });
                scrollToTop("my_part_detail_wrapper");
                $("#my_part_detail_page table tr td").addClass("gray_line_bottom");
                $("#my_part_detail_page table tr td input").val("");
                $("#my_part_detail_page table tr td textarea").val("");
                app_componentDetail();
            }
        },
        methods: {}
    }
</script>

<style lang="less" scoped>

</style>
