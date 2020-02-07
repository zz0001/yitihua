<template>
    <div data-role="page" id="my_add_part_page">
        <div class="page_header">
            <img class="left_img back-button" src="/staitc/resources/images/icon_white_back.png">
            <div class="page_header_title">部件上报</div>
        </div>
        <div class="page_content">
            <div id="my_add_part_wrapper" class="jszx-wrapper">
                <div class="jszx-scroller">
                    <div id="my_add_part_html" class="html_margin white_background">
                        <table class="inp_table" cellpadding="0" cellspacing="0">
                            <tr>
                                <td style="min-width: 5em;" class="">部件名称<span>*</span></td>
                                <td colspan="2">
                                    <input style="padding-right: 1em;" id="my_add_part_objname" placeholder="请输入部件名称"
                                           type="text"/>
                                </td>
                            </tr>
                            <tr class="my_add_part_component_state_tr">
                                <td style="min-width: 5em;" class="">部件状态<span>*</span></td>
                                <td>
                                    <input type="text" placeholder="请选择部件状态" readonly id="my_add_part_component_state"/>
                                </td>
                                <td style="width: 1%;">
                                    <img src="/staitc/resources/images/icon_gray_solid_down.png">
                                </td>
                            </tr>
                            <tr class="my_add_part_deptcode_tr">
                                <td style="min-width: 5em;" class="">所属网格<span>*</span></td>
                                <td>
                                    <input readonly id="my_add_part_deptcode" placeholder="请选择所属网格" type="text"/>
                                </td>
                                <td style="width: 1%;">
                                    <img src="/staitc/resources/images/icon_gray_solid_down.png">
                                </td>
                            </tr>
                            <tr class="my_add_part_component_type_big_tr">
                                <td style="min-width: 5em;" class="">部件大类<span>*</span></td>
                                <td>
                                    <input readonly id="my_add_part_component_type_big" placeholder="请选择部件大类"
                                           type="text"/>
                                </td>
                                <td style="width: 1%;">
                                    <img src="/staitc/resources/images/icon_gray_solid_down.png">
                                </td>
                            </tr>
                            <tr class="my_add_part_component_type_small_tr">
                                <td style="min-width: 5em;" class="">部件小类<span>*</span></td>
                                <td>
                                    <input readonly id="my_add_part_component_type_small" placeholder="请选择部件小类"
                                           type="text"/>
                                </td>
                                <td style="width: 1%;">
                                    <img src="/staitc/resources/images/icon_gray_solid_down.png">
                                </td>
                            </tr>
                            <tr class="my_add_part_manage_dept_name_tr">
                                <td style="min-width: 5em;" class="">主管部门<span>*</span></td>
                                <td>
                                    <input readonly id="my_add_part_manage_dept_name" placeholder="请选择主管部门"
                                           type="text"/>
                                </td>
                                <td style="width: 1%;">
                                    <img src="/staitc/resources/images/icon_gray_solid_down.png">
                                </td>
                            </tr>
                            <tr class="my_add_part_ownership_dept_name_tr">
                                <td style="min-width: 5em;" class="">权属单位<span>*</span></td>
                                <td>
                                    <input readonly id="my_add_part_ownership_dept_name" placeholder="请选择权属单位"
                                           type="text"/>
                                </td>
                                <td style="width: 1%;">
                                    <img src="/staitc/resources/images/icon_gray_solid_down.png">
                                </td>
                            </tr>
                            <tr class="my_add_part_conserve_dept_name_tr">
                                <td style="min-width: 5em;" class="">养护单位</td>
                                <td>
                                    <input readonly id="my_add_part_conserve_dept_name" placeholder="请选择养护单位"
                                           type="text"/>
                                </td>
                                <td style="width: 1%;">
                                    <img src="/staitc/resources/images/icon_gray_solid_down.png">
                                </td>
                            </tr>
                            <tr class="my_add_part_datasource_tr">
                                <td style="min-width: 5em;" class="">数据来源<span>*</span></td>
                                <td>
                                    <input readonly id="my_add_part_datasource" placeholder="请选择数据来源" type="text"/>
                                </td>
                                <td style="width: 1%;">
                                    <img src="/staitc/resources/images/icon_gray_solid_down.png">
                                </td>
                            <tr>
                                <td style="min-width: 5em;" class="">初始日期<span>*</span></td>
                                <td>
                                    <input readonly id="my_add_part_startdate" placeholder="请选择初始日期" type="text"/>
                                </td>
                                <td style="width: 1%;">
                                    <img src="/staitc/resources/images/icon_gray_solid_down.png">
                                </td>
                            </tr>
                            <tr>
                                <td style="min-width: 5em;" class="">变更日期</td>
                                <td>
                                    <input readonly id="my_add_part_changedate" placeholder="请选择变更日期" type="text"/>
                                </td>
                                <td style="width: 1%;">
                                    <img src="/staitc/resources/images/icon_gray_solid_down.png">
                                </td>
                            </tr>
                            <tr>
                                <td style="min-width: 5em;" class="">地址<span>*</span></td>
                                <td id="my_add_part_address" class="class_tdaddres">

                                </td>
                                <td id="case_edit_address_img" style="width: 1%;"><img class="div_input_value_img"
                                                                                       src="/staitc/resources/images/icon_dz.png">
                                </td>
                            </tr>
                            <tr>
                                <td>备注</td>
                                <td colspan="2">
                                    <input readonly id="my_add_part_words" class="small gray_dark_font"
                                           style="color:#999999;"/>
                                </td>
                            </tr>
                            <tr>
                                <td colspan="3">
                        <textarea id="my_add_part_note" placeholder="请输入备注"
                                  onfocus="newCheckWord('my_add_part_note',500,'my_add_part_words')"
                                  onKeyUp="javascript:newCheckWord('my_add_part_note',500,'my_add_part_words');"
                                  onMouseDown="javascript:newCheckWord('my_add_part_note',500,'my_add_part_words');"
                                  style="text-align:left;min-height:2em;padding:0em 0.5em 0em 1em;"></textarea>
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
        name: "myAddPart",
        data() {
            return {}
        },
        created() {

        },
        mounted() {
            window.searchPage = 2;
            $("#my_add_part_page").live("pageshow", function () {
                initMyAddpart();
                /*返回*/
                $("#my_add_part_page .back-button").listen("quickClick", function (e) {
                    $.mobile.changePage("../parts/myPartsList.html");
                });

                //地址
                $("#my_add_part_page #case_edit_address_img").listen("quickClick", function (e) {
                    showMapAlert("请选择位置", "确定", "", function () {
                        $("#my_add_part_address").html($("#map_html_address").html());
                        window.choiceLongitude = window.shortLongitude;
                        window.choiceLatitude = window.shortLatitude;
                        console.log($("#map_html_address").html() + "\t,选中的经纬度：" + window.choiceLongitude + "\t," + window.choiceLatitude);
                    });
                });
                //部件状态
                $("#my_add_part_page .my_add_part_component_state_tr").listen("quickClick", function (e) {
                    app_getBaseType(2);
                });
                //所属网格
                $("#my_add_part_page .my_add_part_deptcode_tr").listen("quickClick", function (e) {
                    showProvCity();
                    $("#screen_city_val").html("");
                    app_findAllDeptByUser();
                });
                //部件大类
                $("#my_add_part_page .my_add_part_component_type_big_tr").listen("quickClick", function (e) {
                    getMultilevelValue("请选择大小类", 2);
                    app_getMultiCodeChild(window.bigSmallDepartmentId, "", 1, "bigsmall");
                });
                //部件小类
                $("#my_add_part_page .my_add_part_component_type_small_tr").listen("quickClick", function (e) {
                    getMultilevelValue("请选择大小类", 2);
                    app_getMultiCodeChild(window.bigSmallDepartmentId, "", 1, "bigsmall");
                });
                //主管部门
                $("#my_add_part_page .my_add_part_manage_dept_name_tr").listen("quickClick", function (e) {
                    getMultilevelValue("请选择主管部门", 3);
                    app_getDepartmentCodeChild("", "002", 1, "manage_dept_name");
                });
                //权属单位
                $("#my_add_part_page .my_add_part_ownership_dept_name_tr").listen("quickClick", function (e) {
                    getMultilevelValue("请选择权属单位", 3);
                    app_getDepartmentCodeChild("", "002", 1, "ownership_dept_name");
                });
                //养护单位
                $("#my_add_part_page .my_add_part_conserve_dept_name_tr").listen("quickClick", function (e) {
                    getMultilevelValue("请选择养护单位", 3);
                    app_getDepartmentCodeChild("", "002", 1, "conserve_dept_name");
                });
                //数据来源
                $("#my_add_part_page .my_add_part_datasource_tr").listen("quickClick", function (e) {
                    app_getBaseType(3);
                });
                /*保存*/
                $("#my_add_part_page #save_returnAddress").listen("quickClick", function (e) {
                    if (!isNull(window.partDetailId)) {
                        app_componentEdit(window.partDetailId, $("#my_add_part_objname").val(), $("#my_add_part_startdate").val(), $("#my_add_part_changedate").val(), $("#my_add_part_address").html(), $("#my_add_part_note").val());
                    } else {
                        app_componentEdit("", $("#my_add_part_objname").val(), $("#my_add_part_startdate").val(), $("#my_add_part_changedate").val(), $("#my_add_part_address").html(), $("#my_add_part_note").val());
                    }
                });
            });

            function initMyAddpart() {
                $("#my_add_part_wrapper")[0].style.height = window.localInnerHeight - $("#my_add_part_page .page_header").height() - $("#my_add_part_page .page_footer").height() + "px";
                initScroll({
                    "wrapper": "my_add_part_wrapper",
                    "dir": "y",
                    "bounce": false,
                    "scrollBar": true
                });
                scrollToTop("my_add_part_wrapper");
                $("#my_add_part_page table tr td").addClass("gray_line_bottom");
                $("#my_add_part_page table tr td input").val("");
                $("#my_add_part_page table tr td textarea").val("");
                window.choiceBigType = "";//部件大类
                window.partStatuName = "";//部件状态
                window.partStatuId = "";//部件状态
                window.choiceSmallType = "";//部件小类
                window.choiceOneGridId = "";//所属网格
                window.choiceManageDeptCode = "";//主管部门
                window.choiceManageDeptName = "";//主管部门：
                window.choiceOwnershipDeptCode = "";//权属单位：
                window.choiceOwnershipDeptName = "";//权属单位：
                window.choiceConserveDeptCode = "";//养护单位：
                window.choiceconserveDeptName = "";//养护单位：
                window.choiceOneDataSourceId = "";//数据来源：
                window.choiceLongitude = window.longitude;
                window.choiceLatitude = window.latitude;
                $("#my_add_part_words").val("0/150");
                $("#my_add_part_address").html(window.localStorage.mapAddress);
                chooseDate("my_add_part_startdate", "datetime");
                chooseDate("my_add_part_changedate", "datetime");
                if (!isNull(window.partDetailId)) {
                    app_componentDetail();
                }
            }
        },
        methods: {}
    }
</script>

<style lang="less" scoped>
    #my_add_part_page .inp_table tr td input, .inp_table tr td textarea, .input_no_border {
        padding-right: 0.5em;
    }

    #my_add_part_page .div_input_value_img {
        width: 1.5em;
        height: 1.5em;
        padding-right: 0.5em;
    }
</style>
