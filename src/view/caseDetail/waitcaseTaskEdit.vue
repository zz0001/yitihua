<template>
    <div data-role="page" id="case_task_edit_page">
        <tk-header>
            工单处理
        </tk-header>
        <tk-container>
            <tk-scroll>
            <div class="handle-case-edit-content">
                <table class="inp_table" cellpadding="0" cellspacing="0">
                    <tr id="case_task_edit_eventComponent_tr">
                        <td style="min-width: 5em;color: #333333;" class="">职能事项<span>*</span></td>
                        <td @click="firstselect" style="text-align: right;">
                            <input readonly id="case_task_edit_eventComponent" type="text"
                                   placeholder="请选择职能事项" style="font-size: 14px;"/>
                        </td>
                        <td style="width: 5%;padding-left:0;"><img class="" src="/dist/image/right.cc5faf.png"></td>
                    </tr>
                    <tr id="case_task_edit_bigClass_tr">
                        <td style="min-width: 5em;color: #333333;" class="">大类<span>*</span></td>
                        <td @click="secondselect" style="text-align: right;">
                            <input readonly id="case_task_edit_bigClass" type="text"
                                   placeholder="请选择大类"/>
                        </td>
                        <td style="width: 5%;font-size: 13px;padding-left:0;"><img class="" src="/dist/image/right.cc5faf.png"></td>
                    </tr>
                </table>
                <div v-show="isShow">
                    <tk-form :list="formList" ></tk-form>
                </div>
                <tk-textarea placeholder="请输入工单处理意见" v-model="content"></tk-textarea>
                <tk-title>上传工单证据</tk-title>
                <tk-upload-photo v-model="images"></tk-upload-photo>
            </div>
                </tk-scroll>
            <tk-button id="save_returnAddress" @click="save_returnAddress">提交</tk-button>
        </tk-container>


        <!--<div class="page_content">-->
            <!--<tk-scroll>-->
                <!--<table class="inp_table" cellpadding="0" cellspacing="0">-->
                <!--<tr id="case_task_edit_eventComponent_tr">-->
                <!--<td style="min-width: 5em;color: #333333;" class="">职能事项<span>*</span></td>-->
                <!--<td @click="firstselect" >-->
                <!--<input readonly id="case_task_edit_eventComponent" type="text"-->
                <!--placeholder="请选择职能事项" style="font-size: 14px;"/>-->
                <!--</td>-->
                <!--<td style="width: 5%;padding-right: 13px;"><img class="" src="image/right.cc5faf.png"></td>-->
                <!--</tr>-->
                <!--<tr id="case_task_edit_bigClass_tr">-->
                <!--<td style="min-width: 5em;color: #333333;" class="">大类<span>*</span></td>-->
                <!--<td @click="secondselect">-->
                <!--<input readonly id="case_task_edit_bigClass" type="text"-->
                <!--placeholder="请选择大类"/>-->
                <!--</td>-->
                <!--<td style="width: 5%;font-size: 13px;"><img class="" src="image/right.cc5faf.png"></td>-->
                <!--</tr>-->
                <!--</table>-->
                <!--<div v-show="isShow">-->
                    <!--<tk-form :list="formList" ></tk-form>-->
                <!--</div>-->

                <!--<div id="selectarea_div" style="display:none;">-->
                    <!--<div class="secondTitle">-->
                        <!--<span>面积<span>*</span></span>-->
                    <!--</div>-->
                    <!--<div style="line-height: 26px;">-->
                        <!--<input id="smallarea" type="radio" value="0" name="area">小于<span class="currarea"></span>-->
                    <!--</div>-->
                    <!--<div style="line-height: 26px;">-->
                        <!--<input id="bigarea" type="radio" value="1" name="area">大于<span class="currarea"></span>-->
                    <!--</div>-->
                <!--</div>-->
                <!--<table class="inp_table" cellpadding="0" cellspacing="0">-->
                    <!--<tr>-->
                        <!--<td style="padding-left:13px;color:#333333;">办理情况<span>*</span></td>-->
                        <!--<td colspan="2">-->
                            <!--<input class="small gray_dark_font" style="color:#999999;" readonly="true"-->
                                   <!--id="casetask_words"/>-->
                        <!--</td>-->
                    <!--</tr>-->
                    <!--<tr>-->
                        <!--<td colspan="3">-->
                            <!--<textarea-->
                                    <!--onfocus="newCheckWord('case_task_edit_problem',500,'casetask_words')"-->
                                    <!--onKeyUp="javascript:newCheckWord('case_task_edit_problem',500,'casetask_words');"-->
                                    <!--onMouseDown="javascript:newCheckWord('case_task_edit_problem',500,'casetask_words');"-->
                                    <!--placeholder="请输入办理情况" id="case_task_edit_problem"-->
                                    <!--style="text-align:left;min-height: 5em;padding:0em 0.5em 0em 1em;"></textarea>-->

                        <!--</td>-->
                    <!--</tr>-->
                    <!--&lt;!&ndash;<tr id="casestaskselecttype_tr">&ndash;&gt;-->
                        <!--&lt;!&ndash;<td style="padding-top:0.5em;padding-bottom:0.5em;width: 80px;" class="gray_line_bottom">上传文件类型</td>&ndash;&gt;-->
                        <!--&lt;!&ndash;<td colspan="2" class="gray_line_bottom">&ndash;&gt;-->
                            <!--&lt;!&ndash;<div style="width:90%;">&ndash;&gt;-->
                                <!--&lt;!&ndash;<select id="casetaskfileselect">&ndash;&gt;-->
                                    <!--&lt;!&ndash;<option value="xlsx" selected>excel表格</option>&ndash;&gt;-->
                                    <!--&lt;!&ndash;<option value="docx">word文档</option>&ndash;&gt;-->
                                    <!--&lt;!&ndash;<option value="txt">text文本</option>&ndash;&gt;-->
                                <!--&lt;!&ndash;</select>&ndash;&gt;-->
                            <!--&lt;!&ndash;</div>&ndash;&gt;-->

                        <!--&lt;!&ndash;</td>&ndash;&gt;-->
                    <!--&lt;!&ndash;</tr>&ndash;&gt;-->
                    <!--&lt;!&ndash;<tr id="casestaskfile_tr">&ndash;&gt;-->
                        <!--&lt;!&ndash;<td style="padding-top:0.5em;padding-bottom:0.5em;width: 80px;" class="gray_line_bottom">上传附件</td>&ndash;&gt;-->
                        <!--&lt;!&ndash;<td colspan="2" class="gray_line_bottom">&ndash;&gt;-->

                            <!--&lt;!&ndash;<form action="" enctype="multipart/form-data" style="text-align:center;">&ndash;&gt;-->
                                <!--&lt;!&ndash;<input style="width:90%;" id="casetaskfile" class="filepath" onchange="casetaskchangepic(this)" type="file"><br>&ndash;&gt;-->

                            <!--&lt;!&ndash;</form>&ndash;&gt;-->

                        <!--&lt;!&ndash;</td>&ndash;&gt;-->
                    <!--&lt;!&ndash;</tr>&ndash;&gt;-->
                    <!--&lt;!&ndash;<tr>&ndash;&gt;-->
                        <!--&lt;!&ndash;<td>上传图片</td>&ndash;&gt;-->
                        <!--&lt;!&ndash;<td colspan="2">&ndash;&gt;-->
                            <!--&lt;!&ndash;<input id="good_num" class="small" value="0/5" readonly type="text">&ndash;&gt;-->
                        <!--&lt;!&ndash;</td>&ndash;&gt;-->
                    <!--&lt;!&ndash;</tr>&ndash;&gt;-->
                    <!--&lt;!&ndash;<tr>&ndash;&gt;-->
                        <!--&lt;!&ndash;<td colspan="3" class="commodityAddImgs">&ndash;&gt;-->
                            <!--&lt;!&ndash;<div id="case_task_edit_img_wrapper" class="jszx-wrapper">&ndash;&gt;-->
                                <!--&lt;!&ndash;<div class="jszx-scroller" id="case_task_edit_img_scroll">&ndash;&gt;-->
                                    <!--&lt;!&ndash;<div id="case_task_edit_img">&ndash;&gt;-->
                                    <!--&lt;!&ndash;</div>&ndash;&gt;-->
                                <!--&lt;!&ndash;</div>&ndash;&gt;-->
                            <!--&lt;!&ndash;</div>&ndash;&gt;-->
                        <!--&lt;!&ndash;</td>&ndash;&gt;-->
                    <!--&lt;!&ndash;</tr>&ndash;&gt;-->
                <!--</table>-->
                <!--<tk-title>上传图片</tk-title>-->
                <!--<tk-upload-photo v-model="images"></tk-upload-photo>-->
            <!--</tk-scroll>-->
            <!--&lt;!&ndash;<div id="case_task_edit_wrapper" class="jszx-wrapper">&ndash;&gt;-->
                <!--&lt;!&ndash;<div class="jszx-scroller">&ndash;&gt;-->
                    <!--&lt;!&ndash;<div class="html_margin white_background">&ndash;&gt;-->

                        <!--&lt;!&ndash;&lt;!&ndash;<table class="inp_table" cellpadding="0" cellspacing="0">&ndash;&gt;&ndash;&gt;-->
                            <!--&lt;!&ndash;&lt;!&ndash;<tr id="case_task_edit_eventComponent_tr">&ndash;&gt;&ndash;&gt;-->
                                <!--&lt;!&ndash;&lt;!&ndash;<td style="min-width: 5em;" class="">职能事项<span>*</span></td>&ndash;&gt;&ndash;&gt;-->
                                <!--&lt;!&ndash;&lt;!&ndash;<td>&ndash;&gt;&ndash;&gt;-->
                                    <!--&lt;!&ndash;&lt;!&ndash;<input readonly id="case_task_edit_eventComponent" type="text"&ndash;&gt;&ndash;&gt;-->
                                           <!--&lt;!&ndash;&lt;!&ndash;placeholder="请选择职能事项"/>&ndash;&gt;&ndash;&gt;-->
                                <!--&lt;!&ndash;&lt;!&ndash;</td>&ndash;&gt;&ndash;&gt;-->
                                <!--&lt;!&ndash;&lt;!&ndash;<td style="width: 1%;"><img class=""&ndash;&gt;&ndash;&gt;-->
                                                            <!--&lt;!&ndash;&lt;!&ndash;src="/staitc/resources/images/icon_gray_solid_down.png"></td>&ndash;&gt;&ndash;&gt;-->
                            <!--&lt;!&ndash;&lt;!&ndash;</tr>&ndash;&gt;&ndash;&gt;-->
                            <!--&lt;!&ndash;&lt;!&ndash;<tr id="case_task_edit_bigClass_tr">&ndash;&gt;&ndash;&gt;-->
                                <!--&lt;!&ndash;&lt;!&ndash;<td style="min-width: 5em;" class="">大类<span>*</span></td>&ndash;&gt;&ndash;&gt;-->
                                <!--&lt;!&ndash;&lt;!&ndash;<td>&ndash;&gt;&ndash;&gt;-->
                                    <!--&lt;!&ndash;&lt;!&ndash;<input readonly id="case_task_edit_bigClass" type="text"&ndash;&gt;&ndash;&gt;-->
                                           <!--&lt;!&ndash;&lt;!&ndash;placeholder="请选择大类"/>&ndash;&gt;&ndash;&gt;-->
                                <!--&lt;!&ndash;&lt;!&ndash;</td>&ndash;&gt;&ndash;&gt;-->
                                <!--&lt;!&ndash;&lt;!&ndash;<td style="width: 1%;"><img class=""&ndash;&gt;&ndash;&gt;-->
                                                            <!--&lt;!&ndash;&lt;!&ndash;src="/staitc/resources/images/icon_gray_solid_down.png"></td>&ndash;&gt;&ndash;&gt;-->
                            <!--&lt;!&ndash;&lt;!&ndash;</tr>&ndash;&gt;&ndash;&gt;-->
                            <!--&lt;!&ndash;&lt;!&ndash;<tr class="case_task_edit_people">&ndash;&gt;&ndash;&gt;-->
                                <!--&lt;!&ndash;&lt;!&ndash;<td style="min-width: 5em;" class="">网格长</td>&ndash;&gt;&ndash;&gt;-->
                                <!--&lt;!&ndash;&lt;!&ndash;<td>&ndash;&gt;&ndash;&gt;-->
                                    <!--&lt;!&ndash;&lt;!&ndash;<input readonly id="case_task_edit_people" placeholder="请选择网格长" type="text"/>&ndash;&gt;&ndash;&gt;-->
                                <!--&lt;!&ndash;&lt;!&ndash;</td>&ndash;&gt;&ndash;&gt;-->
                                <!--&lt;!&ndash;&lt;!&ndash;<td style="width: 1%;padding-right:1em;">&ndash;&gt;&ndash;&gt;-->
                                    <!--&lt;!&ndash;&lt;!&ndash;<img src="/staitc/resources/images/icon_gray_solid_down.png">&ndash;&gt;&ndash;&gt;-->
                                <!--&lt;!&ndash;&lt;!&ndash;</td>&ndash;&gt;&ndash;&gt;-->
                            <!--&lt;!&ndash;&lt;!&ndash;</tr>&ndash;&gt;&ndash;&gt;-->

                            <!--&lt;!&ndash;&lt;!&ndash;<tr class="case_task_edit_deptment">&ndash;&gt;&ndash;&gt;-->
                                <!--&lt;!&ndash;&lt;!&ndash;<td style="min-width: 5em;" class="">部门</td>&ndash;&gt;&ndash;&gt;-->
                                <!--&lt;!&ndash;&lt;!&ndash;<td>&ndash;&gt;&ndash;&gt;-->
                                    <!--&lt;!&ndash;&lt;!&ndash;<input readonly id="case_task_edit_deptment" placeholder="请选择部门" type="text"/>&ndash;&gt;&ndash;&gt;-->
                                <!--&lt;!&ndash;&lt;!&ndash;</td>&ndash;&gt;&ndash;&gt;-->
                                <!--&lt;!&ndash;&lt;!&ndash;<td style="width: 1%;padding-right:1em;">&ndash;&gt;&ndash;&gt;-->
                                    <!--&lt;!&ndash;&lt;!&ndash;<img src="/staitc/resources/images/icon_gray_solid_down.png">&ndash;&gt;&ndash;&gt;-->
                                <!--&lt;!&ndash;&lt;!&ndash;</td>&ndash;&gt;&ndash;&gt;-->
                            <!--&lt;!&ndash;&lt;!&ndash;</tr>&ndash;&gt;&ndash;&gt;-->
                            <!--&lt;!&ndash;&lt;!&ndash;<tr class="case_task_edit_leader">&ndash;&gt;&ndash;&gt;-->
                                <!--&lt;!&ndash;&lt;!&ndash;<td style="min-width: 5em;" class="">分管领导</td>&ndash;&gt;&ndash;&gt;-->
                                <!--&lt;!&ndash;&lt;!&ndash;<td>&ndash;&gt;&ndash;&gt;-->
                                    <!--&lt;!&ndash;&lt;!&ndash;<input readonly id="case_task_edit_leader" placeholder="请选择分管领导" type="text"/>&ndash;&gt;&ndash;&gt;-->
                                <!--&lt;!&ndash;&lt;!&ndash;</td>&ndash;&gt;&ndash;&gt;-->
                                <!--&lt;!&ndash;&lt;!&ndash;<td style="width: 1%;padding-right:1em;">&ndash;&gt;&ndash;&gt;-->
                                    <!--&lt;!&ndash;&lt;!&ndash;<img src="/staitc/resources/images/icon_gray_solid_down.png">&ndash;&gt;&ndash;&gt;-->
                                <!--&lt;!&ndash;&lt;!&ndash;</td>&ndash;&gt;&ndash;&gt;-->
                            <!--&lt;!&ndash;&lt;!&ndash;</tr>&ndash;&gt;&ndash;&gt;-->

                        <!--&lt;!&ndash;&lt;!&ndash;</table>&ndash;&gt;&ndash;&gt;-->

                    <!--&lt;!&ndash;</div>&ndash;&gt;-->
                <!--&lt;!&ndash;</div>&ndash;&gt;-->
            <!--&lt;!&ndash;</div>&ndash;&gt;-->
        <!--</div>-->

    </div>
</template>

<script type="text/ecmascript-6">
    import axios from "axios";
    export default {
        name: "",
        data(){
            var that=this;
            var a=0;
            var arr=[['sdfsdf','sdf'],['sdfsssssdf','sdasasasf'],['sssaaaa','assss','sssasasasas']]
            return {
                content: '',
                images:[],
                isShow:true,
                formList:[{
                    type:"selects",
                    name:'网格长',
                    selects:[],
                    model:'请选择网格长',
                    hasSelect:[],
                    success(i,id){

                        console.log(i)
                        console.log(id)
                    }
                },{
                    type:"selects",
                    name:'部门',
                    selects:[],
                    hasSelect:[],
                    model:'请选择部门'
                },{
                    type:"selects",
                    name:'分管领导',
                    selects:[],
                    hasSelect:[],
                    model:'请选择分管领导'
                }],

            }
        },
        mounted(){
            var that = this;
            window.currthat=this;

            window.searchPage = 2;


                //设置标题栏，内容栏，底部内容高度
              //  $(".page_content")[0].style.height = window.localInnerHeight - $(".page_header").height() - $(".page_footer").height() + "px";
              //  $(".page_content").children("div").get(0).style.height = window.localInnerHeight - $(".page_header").height() - $(".page_footer").height() + "px";
                //设置input和textarea的样式
                $("input").addClass("small gray_dark_font ui-input-text ui-body-c ui-corner-all ui-shadow-inset");
                $("textarea").addClass("ui-input-text ui-body-c ui-corner-all ui-shadow-inset");

                window.currpage="caseTaskEitpage";
            //  app_getMultiCodeChild_znsx.call(this,window.caseTaskReportParentId, "", 1, "caseEdit", "3");
           // app_getMultiCodeChild_bigclass.call(this,[], [], 1, "caseEdit", "3");
              hs_findgridList.call(this);
            hs_findDepartmentList.call(this);
            hs_findleaderList.call(this);
            inithsCaseTaskEditSelect();
                inithsCaseTaskRectiication();





                /*选择*/
                $("#case_task_edit_page .case_task_edit_people").listen("quickClick", function (e) {
                    console.log("所属网格");
                    hs_findgridList();
                });
                $("#case_task_edit_page .case_task_edit_deptment").listen("quickClick", function (e) {

                    hs_findDepartmentList();
                });
                $("#case_task_edit_page .case_task_edit_leader").listen("quickClick", function (e) {

                    hs_findleaderList();
                });
                /*延期时长*/
                $("#case_task_edit_page .case_task_edit_addtime_tr").listen("quickClick", function (e) {
                    app_getBaseType(9);
                });
                /*返回*/
                $("#case_task_edit_page .back-button").listen("quickClick", function (e) {
                    that.$router.back();
                });
                //定位：
                $("#case_task_edit_page #case_task_edit_address_img").listen("quickClick", function (e) {
                    getLocalAddress("#case_task_edit_address");
                });
                // //职能事项
                // $("#case_task_edit_page #case_task_edit_eventComponent_tr").listen("quickClick", function (e) {
                //     getMultilevelValue("请选择职能事项", 3);
                //     app_getMultiCodeChild(window.caseTaskReportParentId, "", 1, "caseEdit", "3")
                // });
                // //大类
                // $("#case_task_edit_page #case_task_edit_bigClass_tr").listen("quickClick", function (e) {
                //     if (isNull(window.choiceThingsParts)) {
                //         toast("请先选择职能事项");
                //     } else {
                //         //getMultilevelValue("请选择大小类", 2);
                //         app_getMultiCodeChild(window.choiceThingsParts, "", 1, "caseEditBig");
                //     }
                // });
                /*保存*/
                // $("#save_returnAddress").listen("quickClick", function (e) {
                //
                //     var opvalue=window.caseOneTaskAction.value;
                //
                //     window.picture_array=that.images;
                //
                //     var sum="";
                //     console.log(that.formList[2].model)
                //     if(!isNull(window.child)){
                //         sum+=window.child+";";
                //     }
                //     if(!isNull(window.deptment)){
                //         sum+=window.deptment+";";
                //     }
                //     if(!isNull(window.leader)){
                //         sum+=window.leader;
                //     }
                //     window.selectsum=sum;
                //
                //     if (window.caseOneTaskAction.value=="2"&&isNull(window.choiceThingsParts)&&window.localStorage.originNum!="4") {
                //         toast("请输入职能事项");
                //     }else if (window.caseOneTaskAction.value=="2"&&isNull(window.choiceBigType)&&window.localStorage.originNum!="4") {
                //         toast("请输入大类");
                //     }else if (window.caseOneTaskAction.value=="2"&&isNull(sum)) {
                //         toast("请选择网格长");
                //     }
                //     /*      else if ((3 == parseInt(window.caseOneTaskAction.opValue)) && (window.picture_array.length == 0||isNull(window.picture_array))) {
                //             toast("请上传图片");
                //         }  */
                //     /*      else if ($("#case_task_edit_problem").val()=="") {
                //              toast("请输入处理意见");
                //          } */
                //     else {
                //         // showContentAlert("确认提交本次处理吗？", function () {
                //         // }, function () {
                //         //     if (!isNull(window.picture_array) || window.picture_array.length > 0) {
                //         //         window.picture_upImg = "";
                //         //         //alert(window.picture_array)
                //         //         appWorkOrder_upLoadPic(window.picture_array[0], 1, "caseTaskEdit");
                //         //     } else {
                //         //         appWorkOrder_workOrderProcess($("#case_task_edit_problem").val());
                //         //     }
                //         // }, "确定");
                //         app.$createPotDialog({
                //             $props:{
                //                 type:'confirm',
                //                 content:'确认提交本次处理吗？'
                //             },
                //             $events:{
                //                 confirm(A){
                //                     if (!isNull(window.picture_array) || window.picture_array.length > 0) {
                //                         window.picture_upImg = "";
                //                         //alert(window.picture_array)
                //                         appWorkOrder_upLoadPic_todo(window.picture_array[0], 1, "caseTaskEdit");
                //                     } else {
                //                         appWorkOrder_workOrderProcess($("#case_task_edit_problem").val());
                //                     }
                //                 }
                //             }
                //         }).show()
                //     }
                // });
                //商品图片
                $("#case_task_edit_page #choicemore").click(function (e) {
                    window.upload_imgscroll = "case_task_edit_img_scroll";
                    window.upload_imgwrapper = "case_task_edit_img_wrapper";
                    window.upload_addimg = "case_task_edit_img";
                    getPhotograph();
                });


            /**
             * 是否可选择
             */
            function inithsCaseTaskEditSelect() {
                ;
                console.log(window.caseOneTaskAction.value)
                switch (parseInt(window.caseOneTaskAction.value)) {
                    case 1:
                        //下派
                        console.log("下派");
                        $("#case_task_edit_page .case_task_edit_people").hide();
                        $("#case_task_edit_page .case_task_edit_deptment").hide();
                        $("#case_task_edit_page .case_task_edit_leader").hide();
                        that.isShow=false;
                        $("#case_task_edit_eventComponent_tr").hide();
                        $("#case_task_edit_bigClass_tr").hide();
                        // $("#case_task_edit_page .case_task_edit_addtime_tr").hide();
                        $("#case_task_edit_page .case_task_edit_people td:first-child").html("网格长");
                        $("#case_task_edit_page #case_task_edit_people").attr("placeholder", "请选择网格长");
                        break;
                    case 2:
                    case 32:
                        $("#case_task_edit_page .case_task_edit_people").show();
                        $("#case_task_edit_page .case_task_edit_deptment").show();
                        $("#case_task_edit_page .case_task_edit_leader").show();
                        that.isShow=true;
                        $("#case_task_edit_eventComponent_tr").show();
                        $("#case_task_edit_bigClass_tr").show();
                        if(window.localStorage.originNum=="4"){
                            $("#case_task_edit_eventComponent_tr").hide();
                            $("#case_task_edit_bigClass_tr").hide();
                        }
                        break;
                    case 6:
                    case 7:
                    case 10:
                    case 4:
                    case 5:
                    case 9:
                    case 22:
                        console.log("反馈");
                        //  $("#case_task_edit_page .case_task_edit_addtime_tr").hide();
                        $("#case_task_edit_page .case_task_edit_people").hide();
                        $("#case_task_edit_page .case_task_edit_deptment").hide();
                        $("#case_task_edit_page .case_task_edit_leader").hide();
                        that.isShow=false;
                        $("#case_task_edit_eventComponent_tr").hide();
                        $("#case_task_edit_bigClass_tr").hide();
                        //反馈
                        break;
                    case 12:
                        $("#case_task_edit_page .case_task_edit_people").hide();
                        $("#case_task_edit_page .case_task_edit_deptment").hide();
                        $("#case_task_edit_page .case_task_edit_leader").show();
                        that.isShow=false;
                        $("#case_task_edit_eventComponent_tr").hide();
                        $("#case_task_edit_bigClass_tr").hide();
                        break;
                    case 11:
                    case 14:
                    case 15:
                    case 16:
                    case 17:
                    case 18:
                    case 41:
                    case 42:
                    case 43:
                        //地址，备注都不展示
                        console.log("111");
                        //     $("#case_task_edit_page .case_task_edit_addtime_tr").hide();
                        $("#case_task_edit_page .case_task_edit_people").hide();
                        $("#case_task_edit_page .case_task_edit_deptment").hide();
                        $("#case_task_edit_page .case_task_edit_leader").hide();
                        that.isShow=false;
                        $("#case_task_edit_eventComponent_tr").hide();
                        $("#case_task_edit_bigClass_tr").hide();
                        break;
                    case 13:
                    case 131:
                    case 8:
                    case 132:
                    case 133:
                        //申请延期
                        //     $("#case_task_edit_page .case_task_edit_addtime_tr").show();
                        $("#case_task_edit_page .case_task_edit_people").hide();
                        $("#case_task_edit_page .case_task_edit_deptment").hide();
                        $("#case_task_edit_page .case_task_edit_leader").hide();
                        that.isShow=false;
                        $("#case_task_edit_eventComponent_tr").hide();
                        $("#case_task_edit_bigClass_tr").hide();
                        break;
                    case 3:
                    case 31:
                        //网格长审核
                        console.log("审核");

                        $("#case_task_edit_page .case_task_edit_people").hide();
                        $("#case_task_edit_page .case_task_edit_deptment").hide();
                        $("#case_task_edit_page .case_task_edit_leader").hide();
                        that.isShow=false;
                        $("#case_task_edit_eventComponent_tr").hide();
                        $("#case_task_edit_bigClass_tr").hide();
                        //   $("#case_task_edit_page .case_task_edit_addtime_tr").hide();
                        //    $("#case_task_edit_page .case_task_edit_people td:first-child").html("所属人员<span>*</span>");
                        //    $("#case_task_edit_page #case_task_edit_people").attr("placeholder", "请选择所属人员");
                        break;
                    case 33:
                        //网格长审核
                        console.log("反馈");
                        //    $("#case_task_edit_page .case_task_edit_addtime_tr").hide();
                        $("#case_task_edit_page .case_task_edit_people").hide();
                        $("#case_task_edit_page .case_task_edit_deptment").hide();
                        $("#case_task_edit_page .case_task_edit_leader").hide();
                        that.isShow=false;
                        $("#case_task_edit_eventComponent_tr").hide();
                        $("#case_task_edit_bigClass_tr").hide();
                        break;
                    default:
                        $("#case_task_edit_page .case_task_edit_people").hide();
                        $("#case_task_edit_page .case_task_edit_deptment").hide();
                        $("#case_task_edit_page .case_task_edit_leader").hide();
                        that.isShow=false;
                        $("#case_task_edit_eventComponent_tr").hide();
                        $("#case_task_edit_bigClass_tr").hide();
                }
            }
            /**
             * 初始化基本信息
             */
            function inithsCaseTaskRectiication() {
                $("#case_task_edit_wrapper")[0].style.height = window.localInnerHeight - $("#case_task_edit_page .page_header").height() - $("#case_task_edit_page .page_footer").height() + "px";
                // initScroll({
                //     "wrapper": "case_task_edit_wrapper",
                //     "dir": "y",
                //     "bounce": false,
                //     "scrollBar": true
                // });
               // scrollToTop("case_task_edit_wrapper");
                $("#case_task_edit_page table tr td").addClass("gray_line_bottom");
                $("#case_task_edit_page table tr td input").val("");
                $("#case_task_edit_page table tr td textarea").val("");
                //图片集合
                window.picture_array = [];
                initMapInfo("#case_task_edit_address");
                //真正上传的图片
                window.picture_upImg = "";
                //
                window.selectsum="";
                window.childrenId=[];
                window.leaderId=[];
                window.deptmentId=[];
                //人员
                window.caseOneTaskPeopleId = "";
                //延期时间
                window.choiceDelayAddTime = "";
                $("#case_task_edit_img_scroll").css("transform", "none");
                $("#case_task_edit_img_wrapper .scroll-bar-x").css("transform", "none");
                $("#casetask_words").val("0/150");
                $("#case_task_edit_page #case_task_edit_img").empty();
                $("#case_task_edit_page #case_task_edit_img").append('<img class="goodsimgone" style="padding-top:2em;" src="/staitc/resources/images/icon_add_photo.png" id="choicemore">');
                $('input[type=radio][name="area"]:checked').prop("checked", false);
                $('#smallarea').prop("checked", true);
                $("#selectarea_div").hide();


                if(window.localStorage.orgin=="领导交办"){
                    $("#taskedirtitle").text("事项处理");
                    $("#casestaskselecttype_tr").show();
                    $("#casestaskfile_tr").show();
                }else{
                    $("#taskedirtitle").text("工单处理");
                    $("#casestaskselecttype_tr").hide();
                    $("#casestaskfile_tr").hide();
                }
            }
            function casetaskchangepic() {

                var file=$("#casetaskfile").val()
                var filename=file.replace(/.*(\/|\\)/, "");
                var fileExt=(/[.]/.exec(filename)) ? /[^.]+$/.exec(filename.toLowerCase()) : '';
                console.log(fileExt);
                var reads= new FileReader();
                f=document.getElementById('casetaskfile').files[0];
                reads.readAsDataURL(f);
                reads.onload=function (e) {
                    console.log(this.result);
                    casetaskattachmentUpload(this.result, fileExt[0]);
                };
            }
            //
            function casetaskattachmentUpload(img, type) {
                var obj = "";
                var filetype= $("#casetaskfileselect option:selected").val();
                obj += toJson("fileType", filetype) + "&";
                obj += toJson("base64Str", img);
                doPost("app_publicOpinion_attachmentUpload.action", obj, function (data) {

                    window.casefileType=type;
                    if(data.code=="0"){
                        window.caseUploadPath=data.datas.path;
                    }

                }, "", "");
            }
            function hs_findgridList() {
                var that=this;
                // var obj = "";
                //
                // doPost("gridList.action", obj, function (data) {
                //
                //     window.childrenId=[];
                //     window.childrentext=[];
                //     var array = data.datas;
                //     console.log("数据：" + JSON.stringify(array));
                //     if (!isNull(array) && array.length > 0) {
                //         var text=[];
                //         var ids=[];
                //         for(var i=0;i<array.length;i++){
                //             text.push(array[i].text);
                //             ids.push(array[i].id);
                //         }
                //         that.formList[0].selects=text;
                //         that.formList[0].ids=ids;
                //
                //     }
                //
                // }, "");
                let url='/wgh/app/' + 'gridList.action';
                axios.post(url).then(data => {
                    window.childrenId=[];
                    window.childrentext=[];
                    var array = data.datas;
                    console.log("数据：" + JSON.stringify(array));
                    if (!isNull(array) && array.length > 0) {
                        var text=[];
                        var ids=[];
                        for(var i=0;i<array.length;i++){
                            text.push(array[i].text);
                            ids.push(array[i].id);
                        }
                        that.formList[0].selects=text;
                        that.formList[0].ids=ids;

                    }
                })
            }

            function hs_findDepartmentList() {
                var that=this;
                // var obj = "";
                //
                // doPost("departmentList.action", obj, function (data) {
                //
                //     window.deptmentId=[];
                //     window.deptmenttext=[];
                //     var array = data.datas;
                //     console.log("数据：" + JSON.stringify(array));
                //     if (!isNull(array) && array.length > 0) {
                //         var text=[];
                //         var ids=[];
                //         for(var i=0;i<array.length;i++){
                //             text.push(array[i].text);
                //             ids.push(array[i].id);
                //         }
                //         that.formList[1].selects=text;
                //         that.formList[1].ids=ids;
                //
                //     }
                //
                // }, "");
                let url='/wgh/app/' + 'departmentList.action';
                axios.post(url).then(data => {
                    window.deptmentId=[];
                    window.deptmenttext=[];
                    var array = data.datas;
                    console.log("数据：" + JSON.stringify(array));
                    if (!isNull(array) && array.length > 0) {
                        var text=[];
                        var ids=[];
                        for(var i=0;i<array.length;i++){
                            text.push(array[i].text);
                            ids.push(array[i].id);
                        }
                        that.formList[1].selects=text;
                        that.formList[1].ids=ids;

                    }
                })
            }
            function hs_findleaderList() {
                var that=this;
//                 var obj = "";
//
//                 doPost("leaderList.action", obj, function (data) {
// ;
//                     window.leaderId=[];
//                     window.leadertext=[];
//                     var array = data.datas;
//                     console.log("数据：" + JSON.stringify(array));
//                     if (!isNull(array) && array.length > 0) {
//                         var text=[];
//                         var ids=[];
//                         for(var i=0;i<array.length;i++){
//                             text.push(array[i].text);
//                             ids.push(array[i].id);
//                         }
//                         that.formList[2].selects=text;
//                         that.formList[2].ids=ids;
//
//                     }
//
//                 }, "");
                let url='/wgh/app/' + 'leaderList.action';
                axios.post(url).then(data => {
                    window.leaderId=[];
                    window.leadertext=[];
                    var array = data.datas;
                    console.log("数据：" + JSON.stringify(array));
                    if (!isNull(array) && array.length > 0) {
                        var text=[];
                        var ids=[];
                        for(var i=0;i<array.length;i++){
                            text.push(array[i].text);
                            ids.push(array[i].id);
                        }
                        that.formList[2].selects=text;
                        that.formList[2].ids=ids;

                    }
                })
            }
            function showGridOne() {
                $(".max-dialog").remove();
                var choice_one = "<div class='max-dialog'>";
                choice_one += "     <div class='max-dialog-masker alert_value_max'></div>";
                choice_one += "     <div class='max-dialog-frame'>";
                choice_one += "         <div  class='max-dialog-content'>";
                choice_one += "             <div id='noconfirm' class='jszx-wrapper max_height_div'>";
                choice_one += "                 <div class='jszx-scroller'>";

                choice_one += "                     <div class='max-dialog-text' id='choice_grid'>";
                //choice_one += (html || "");
                choice_one += "                     </div>";
                choice_one +='<div style="padding: 1em;text-align: center;"><span class="choice_btn" >确定</span></div>'
                choice_one += "                 </div>";

                choice_one += "             </div>";
                choice_one += "         </div>";
                choice_one += "     </div>";
                choice_one += "</div>";
                var $choice_one = $(choice_one).appendTo(".ui-page-active").show();
                initScroll({
                    "wrapper": "noconfirm",
                    "dir": "y",
                    "bounce": true
                });

                setTimeout(function () {
                    $choice_one.find(".alert_value_max").bind("click", function () {
                        $(".alert_value_scroll").fadeOut(500, function () {
                            $(".alert_value_scroll").remove();
                        });

                    });
                }, 500);
                $choice_one.find("#choice_grid").bind("click", function () {
                    $(".alert_value_scroll").fadeOut(500, function () {
                        $(".alert_value_scroll").remove();
                    });
                });
            }
            function app_getMultiCodeChild_znsx(parent_id, dmbh, id, type, num) {
                $("#screen_more_content" + id).empty();
                var that=this;
                var obj = "";
                obj += toJson("parent_id", parent_id) + "&";
                obj += toJson("dmbh", dmbh);
                doPost("app_getMultiCodeChild.action", obj, function (data) {
                        if (data.code == 0) {
                            var array = data.datas;
                            if (!isNull(array) && array.length > 0) {

                                console.log(that.formList[0].select)
                                var text=[];
                                var ids=[];
                                var dmbh=[];
                                for(var i=0;i<array.length;i++){
                                    text.push(array[i].text);
                                    ids.push(array[i].id);
                                    dmbh.push(array[i].dmbh);
                                }
                                that.formList[0].select=text;
                                that.formList[0].ids=ids;
                                that.formList[0].dmbh=dmbh;

                            } else {
                                // toast("暂无数据")
                            }
                        } else {
                            toast(data.message);
                        }
                    },
                    "", ""
                )
                ;
            }

        },
        methods:{

            save_returnAddress() {
                var that=this;

                var opvalue=window.caseOneTaskAction.value;

                window.picture_array=window.currthat.images;

                var sum="";
                var gridlist="";
                var deptmentlist="";
                var leaderlist="";
                console.log(window.currthat.formList[0].hasSelect)
                if(window.currthat.formList[0].hasSelect.length>0){
                    let arr=[];
                    window.currthat.formList[0].hasSelect.forEach(item=>{
                        arr.push(window.currthat.formList[0].ids[item]);
                    })
                    console.log(arr);
                    gridlist= arr.join(";");

                    sum+=gridlist+";";
                }
                if(window.currthat.formList[1].hasSelect.length>0){
                    let arr2=[];
                    window.currthat.formList[1].hasSelect.forEach(item=>{
                        arr2.push(window.currthat.formList[1].ids[item]);
                    })
                    deptmentlist= arr2.join(";");
                    sum+=deptmentlist+";";
                }
                if(window.currthat.formList[2].hasSelect.length>0){
                    let arr3=[];
                    window.currthat.formList[2].hasSelect.forEach(item=>{
                        arr3.push(window.currthat.formList[2].ids[item]);
                    })
                    leaderlist= arr3.join(";");
                    window.leaderId=leaderlist;
                    sum+=leaderlist+";";
                }
                // if(!isNull(window.child)){
                //     sum+=window.child+";";
                // }
                // if(!isNull(window.deptment)){
                //     sum+=window.deptment+";";
                // }
                // if(!isNull(window.leader)){
                //     sum+=window.leader;
                // }
                window.selectsum=sum;

                if (window.caseOneTaskAction.value=="2"&&isNull(window.choiceThingsParts)&&window.localStorage.originNum!="4") {
                    toast("请输入职能事项");
                }else if (window.caseOneTaskAction.value=="2"&&isNull(window.choiceBigType)&&window.localStorage.originNum!="4") {
                    toast("请输入大类");
                }else if (window.caseOneTaskAction.value=="2"&&isNull(sum)) {
                    toast("请选择网格长");
                }
                /*      else if ((3 == parseInt(window.caseOneTaskAction.value)) && (window.picture_array.length == 0||isNull(window.picture_array))) {
                        toast("请上传图片");
                    }  */
                 else if (that.content=="") {
                         toast("请输入工单处理意见");
                     }
                else {
                    // showContentAlert("确认提交本次处理吗？", function () {
                    // }, function () {
                    //     if (!isNull(window.picture_array) || window.picture_array.length > 0) {
                    //         window.picture_upImg = "";
                    //         //alert(window.picture_array)
                    //         appWorkOrder_upLoadPic(window.picture_array[0], 1, "caseTaskEdit");
                    //     } else {
                    //         appWorkOrder_workOrderProcess($("#case_task_edit_problem").val());
                    //     }
                    // }, "确定");
                    app.$createPotDialog({
                        $props:{
                            type:'confirm',
                            content:'确认提交本次处理吗？'
                        },
                        $events:{
                            confirm(A){
                                if (!isNull(window.picture_array) || window.picture_array.length > 0) {
                                    window.picture_upImg = "";
                                    //alert(window.picture_array)
                                    that.appWorkOrder_upLoadPic_todo(window.picture_array[0], 1, "caseTaskEdit");
                                } else {
                                    that.appWorkOrder_workOrderProcess_todo(that.content);
                                }
                            }
                        }
                    }).show()
                }

    },
            secondselect(indexArr, data){
                console.log(indexArr);
                app_getMultiCodeChild_bigclass(parent_id, dmbh, id, type, num)
            },
            firstselect(){
                getMultilevelValueEdit("请选择职能事项", 3);
                app_getMultiCodeChild(window.caseTaskReportParentId, "", 1, "caseEdit", "3")
            },
            appWorkOrder_workOrderProcess_todo(comment) {
                console.log("上传的图片信息：" + window.picture_upImg);
                var that=this;
                //alert(window.picture_upImg)
                //    var file="";
                //    var fileType="";
                //    if(window.caseUploadPath){
                //    	file=window.caseUploadPath;
                //    	fileType=window.casefileType;
                //    }
                var area = $('input[name="area"]:checked').val();
                if (window.localStorage.currarea == "0") {
                    area = "0";
                }
                //alert(window.picture_upImg);
                // var obj = "";
                // obj += toJson("comment", comment) + "&"; //意见
                // obj += toJson("pics", $.trim(window.picture_upImg)) + "&"; //t图片，;号分割
                // obj += toJson("taskId", $.trim(window.caseTaskOneTaskId)) + "&"; //任务的id
                // //  obj += toJson("nxtPerson", $.trim(window.caseOneTaskPeopleId)) + "&";//下一步执行的人
                // obj += toJson("opValue", $.trim(window.caseOneTaskAction.value)) + "&"; //下一流转的条件
                // //   obj += toJson("destId", $.trim(window.caseOneTaskAction.destId)) + "&";//下一节点的id
                // obj += toJson("delayNum", $.trim(window.choiceDelayAddTime)) + "&"; //延期时长
                // obj += toJson("rowId", $.trim(window.caseRow_id)) + "&"; //业务表id
                // obj += toJson("dealPerson", $.trim(window.selectsum)) + "&";
                // obj += toJson("leaderId", $.trim(window.leaderId)) + "&";
                // obj += toJson("eventComponent", $.trim(window.choiceThingsParts)) + "&";
                // obj += toJson("bigClass", $.trim(window.choiceBigType)) + "&";
                // obj += toJson("area", $.trim(area)) + "&";
                // //  obj += toJson("file", $.trim(file)) + "&";//flie
                // //  obj += toJson("fileType", $.trim(fileType)) + "&";//filetype
                // obj += toJson("loginId", $.trim(window.localStorage.loginId));
                // doPost("dsbOrderProcess.action", obj, function(data) {
                //     if (data.code == 0) {
                //         toast(data.message);
                //         window.thisCaseQueryType = "1";
                //         window.CaseWelcomePage = "";
                //         //waitJumpPage("../hscasetask/waitTodoCaseList.html");
                //
                //         that.$router.push({path: '/toDeal-index'});
                //         // that.$router.push("../toDeal-index");
                //     } else {
                //         toast(data.message);
                //     }
                // }, "", "");

                let para = {
                    para: 'comment=' + comment
                    + '&pics=' + window.picture_upImg
                    + '&taskId=' + window.caseTaskOneTaskId
                    + '&opValue=' + window.caseOneTaskAction.value
                    + '&delayNum=' + window.choiceDelayAddTime
                    + '&rowId=' + window.caseRow_id
                    + '&dealPerson=' + window.selectsum
                    + '&leaderId=' + window.leaderId
                    + '&eventComponent=' + window.choiceThingsParts
                    + '&bigClass=' + window.choiceBigType
                    + '&area=' + area
                    + '&loginId='
                };
                let url='/wgh/app/' + 'dsbOrderProcess.action';
                that.$http.post(url,para).then(data => {
                    if (data.code == 0) {
                        toast(data.message);
                        window.thisCaseQueryType = "1";
                        window.CaseWelcomePage = "";
                        //waitJumpPage("../hscasetask/waitTodoCaseList.html");

                        that.$router.push({path: '/toDeal-index'});
                        // that.$router.push("../toDeal-index");
                    } else {
                        toast(data.message);
                    }
                })
            },
            appWorkOrder_upLoadPic_todo(img, type, source) {
                var that=this;
                // var obj = "";
                // obj += toJson("base64Str", img);
                // doPost("app_publicOpinion_upPic.action", obj, function(data) {
                //     if (data.code == 0) {
                //         console.log("1111111111111111当前上传第:" + type + "张,下次上传第" + type + "张");
                //         if (type < parseInt(window.picture_array.length)) {
                //             console.log("当前上传第:" + type + "张,下次上传第" + type + "张");
                //             var typename = parseInt(type) + 1;
                //             that.appWorkOrder_upLoadPic_todo(window.picture_array[type], typename, source);
                //         } else {
                //             console.log("图片上传结束");
                //         }
                //         if (isNull(window.picture_upImg)) {
                //             window.picture_upImg = data.datas.path;
                //         } else {
                //             window.picture_upImg = window.picture_upImg + ";" + data.datas.path;
                //         }
                //
                //         //alert("图片数据：" + window.picture_upImg);
                //         toast(data.message);
                //         if (parseInt(type) == window.picture_array.length) {
                //
                //             that.appWorkOrder_workOrderProcess_todo(that.content);
                //             if (isNull(source)) {
                //                 //问题上报
                //                 //    appWorkOrder_workOrderReport("", $("#case_edit_address").html(), $("#case_edit_problem").val(), getNowTime(), "");
                //             } else if ("caseTaskEdit" == source) {
                //                 //工单处理
                //
                //             }
                //         }
                //     } else {
                //         toast(data.message);
                //     }
                // }, "", "");
                let url='/wgh/app/app_publicOpinion_upPic.action';
                var dsobj={para: 'base64Str='+img};
                axios.post(url,dsobj).then(data => {
                    if (data.code == 0) {
                        console.log("1111111111111111当前上传第:" + type + "张,下次上传第" + type + "张");
                        if (type < parseInt(window.picture_array.length)) {
                            console.log("当前上传第:" + type + "张,下次上传第" + type + "张");
                            var typename = parseInt(type) + 1;
                            that.appWorkOrder_upLoadPic_todo(window.picture_array[type], typename, source);
                        } else {
                            console.log("图片上传结束");
                        }
                        if (isNull(window.picture_upImg)) {
                            window.picture_upImg = data.datas.path;
                        } else {
                            window.picture_upImg = window.picture_upImg + ";" + data.datas.path;
                        }

                        //alert("图片数据：" + window.picture_upImg);
                        toast(data.message);
                        if (parseInt(type) == window.picture_array.length) {

                            that.appWorkOrder_workOrderProcess_todo(that.content);
                            if (isNull(source)) {
                                //问题上报
                                //    appWorkOrder_workOrderReport("", $("#case_edit_address").html(), $("#case_edit_problem").val(), getNowTime(), "");
                            } else if ("caseTaskEdit" == source) {
                                //工单处理

                            }
                        }
                    } else {
                        toast(data.message);
                    }
                })
            }
        }
    }

    function app_getMultiCodeChild_bigclass(parent_id, dmbh, id, type, num) {
        var that=this;
        var obj = "";
        obj += toJson("parent_id", parent_id) + "&";
        obj += toJson("dmbh", "");
        doPost("app_getMultiCodeChild.action", obj, function (data) {
                if (data.code == 0) {
                    var array = data.datas;
                    if (!isNull(array) && array.length > 0) {


                        var text=[];
                        var ids=[];
                        var dmbh=[];
                        for(var i=0;i<array.length;i++){
                            text.push(array[i].text);
                            ids.push(array[i].id);
                            dmbh.push(array[i].dmbh);
                        }
                        that.formList[1].select=text;
                        that.formList[1].ids=ids;
                        that.formList[1].dmbh=dmbh;

                    } else {
                        // toast("暂无数据")
                    }
                } else {
                    toast(data.message);
                }
            },
            "", ""
        )
        ;
    }

    function getMultilevelValueEdit(title, type) {
        var more_html = '<div class ="max-dialog max-alert morepage">';
        more_html += '   <div class="max-dialog-masker"></div>';
        more_html += '   <div class="max-dialog-frame all_dialog_frame">';
        more_html += '       <div class="allert">';
        more_html += '           <div class="page_header more_alertheader">';
        more_html += '              <img class="more_leftbtn left_img back-button" src="../../../static/image/icon_white_back.png"/>';
        more_html += '               <div class="page_header_title">' + title + '</div>';
        more_html += '           </div>';
        more_html += '           <div class="page_content more_alertcontent" style="background: #ffffff;">';
        if ("2" == type || "3" == type) {
            more_html += '        <div id="screen_more_content1_wrapper" style="-webkit-box-shadow:none;width:' + (window.innerWidth * 0.33) + 'px;float: left" class="jszx-wrapper ">';
        } else {
            more_html += '        <div id="screen_more_content1_wrapper" style="width:100%;" class="jszx-wrapper ">';
        }
        more_html += '                  <div class="jszx-scroller">';
        more_html += '                      <div class="alert_edit" id="screen_more_content1" style="">';
        more_html += '                       </div>';
        more_html += '                  </div>';
        more_html += '            </div>';
        if ("2" == type) {
            more_html += '    <div id="screen_more_content2_wrapper" class="jszx-wrapper" width="' + (window.innerWidth - $("#screen_content1_wrapper").width()) + '" style="-webkit-box-shadow:none;float: left;position: absolute;margin-left:7.5em;">';
            more_html += '          <div class="jszx-scroller">';
            more_html += '                  <div class=""  id="screen_more_content2" style="">';
            more_html += '                  </div>';
            more_html += '          </div>';
            more_html += '      </div>';
        } else if ("3" == type) {
            more_html += '    <div id="screen_more_content2_wrapper" class="jszx-wrapper" style="width:' + (window.innerWidth * 0.33) + 'px;-webkit-box-shadow:none;float: left;position: absolute;margin-left:' + (window.innerWidth * 0.33) + 'px;">';
            more_html += '          <div class="jszx-scroller">';
            more_html += '                  <div class=""  id="screen_more_content2" style="">';
            more_html += '                  </div>';
            more_html += '          </div>';
            more_html += '      </div>';
            more_html += '    <div id="screen_more_content3_wrapper" class="jszx-wrapper"  style="width:' + (window.innerWidth * 0.34) + 'px;-webkit-box-shadow:none;float: left;position: absolute;margin-left:' + (window.innerWidth * 0.66) + 'px;">';
            more_html += '          <div class="jszx-scroller">';
            more_html += '                  <div class=""  id="screen_more_content3" style="">';
            more_html += '                 </div>';
            more_html += '          </div>';
            more_html += '      </div>';
        } else if ("4" == type) {
            more_html += '    <div id="screen_more_content4_wrapper" class="jszx-wrapper"  style="width：100%;-webkit-box-shadow:none;float: left;position: absolute;">';
            more_html += '          <div class="jszx-scroller">';
            more_html += '                  <div class=""  id="screen_more_content4" style="">';
            more_html += '                  </div>';
            more_html += '          </div>';
            more_html += '      </div>';
        }
        more_html += '           </div>';
        //more_html += '           <div class="page_footer allalertfooter" style="position:absolute;bottom:0em;">';
        //more_html += ' <div class="footer_button_div">';
        //more_html += '     <div id="more_alert_yes" style="width:35%;float:left;" class="alert_bottom_three gray_background">' + (yesname || "取消") + '</div>';
        //more_html += '     <div id="more_alert_noyes"  style="width:35%;float:left;" class="alert_bottom_three orange_background">' + (noname || "取消") + '</div>';
        //more_html += ' </div>';
        //more_html += '           </div>';
        more_html += '       </div>';
        more_html += '   </div>';
        more_html += '</div>';
        var morepage = $(more_html).appendTo("#case_task_edit_page");
        $(".morepage").fadeIn(800);
        $(".more_alertcontent").css("height", window.localInnerHeight - $(".more_alertheader").height() + "px");
        $("#screen_more_content1_wrapper").css("height", window.localInnerHeight - $(".more_alertheader").height() + "px");
       // $("#screen_more_content1_wrapper").height= window.localInnerHeight - $(".more_alertheader").height() + "px";

        if ("2" == type) {
            $("#screen_more_content2_wrapper")[0].style.height = window.localInnerHeight - $(".more_alertheader").height() + "px";
            initScroll({
                "wrapper": "screen_more_content2_wrapper",
                "dir": "y",
                "bounce": false,
                "scrollBar": true
            });
        }
        if ("3" == type) {
          //  $("#screen_more_content2_wrapper")[0].style.height = window.localInnerHeight - $(".more_alertheader").height() + "px";
            $("#screen_more_content2_wrapper").css("height", window.localInnerHeight - $(".more_alertheader").height() + "px");
            $("#screen_more_content3_wrapper").css("height", window.localInnerHeight - $(".more_alertheader").height() + "px");
         //   $("#screen_more_content3_wrapper")[0].style.height = window.localInnerHeight - $(".more_alertheader").height() + "px";

        }
        morepage.find("#more_alert_noyes").bind("click", function() {
            if (nofun)
                nofun.call();
            $(".morepage").fadeOut(800, function() {
                $(".morepage").remove();
            });

        });
        morepage.find(".more_leftbtn").bind("click", function() {
            $(".morepage").fadeOut(800, function() {
                $(".morepage").remove();
            });
        });
        morepage.find("#more_alert_yes").bind("click", function() {
            if (yesfun)
                yesfun.call();
            $(".morepage").fadeOut(800, function() {
                $(".morepage").remove();
            });

        });
    }

    // function appWorkOrder_workOrderProcess_todo(comment) {
    //     console.log("上传的图片信息：" + window.picture_upImg);
    //     var that=this;
    //     //    var file="";
    //     //    var fileType="";
    //     //    if(window.caseUploadPath){
    //     //    	file=window.caseUploadPath;
    //     //    	fileType=window.casefileType;
    //     //    }
    //     var area = $('input[name="area"]:checked').val();
    //     if (window.localStorage.currarea == "0") {
    //         area = "0";
    //     }
    //     //alert(window.picture_upImg);
    //     var obj = "";
    //     obj += toJson("comment", comment) + "&"; //意见
    //     obj += toJson("pics", $.trim(window.picture_upImg)) + "&"; //t图片，;号分割
    //     obj += toJson("taskId", $.trim(window.caseTaskOneTaskId)) + "&"; //任务的id
    //     //  obj += toJson("nxtPerson", $.trim(window.caseOneTaskPeopleId)) + "&";//下一步执行的人
    //     obj += toJson("opValue", $.trim(window.caseOneTaskAction.value)) + "&"; //下一流转的条件
    //     //   obj += toJson("destId", $.trim(window.caseOneTaskAction.destId)) + "&";//下一节点的id
    //     obj += toJson("delayNum", $.trim(window.choiceDelayAddTime)) + "&"; //延期时长
    //     obj += toJson("rowId", $.trim(window.caseRow_id)) + "&"; //业务表id
    //     obj += toJson("dealPerson", $.trim(window.selectsum)) + "&";
    //     obj += toJson("leaderId", $.trim(window.leaderId)) + "&";
    //     obj += toJson("eventComponent", $.trim(window.choiceThingsParts)) + "&";
    //     obj += toJson("bigClass", $.trim(window.choiceBigType)) + "&";
    //     obj += toJson("area", $.trim(area)) + "&";
    //     //  obj += toJson("file", $.trim(file)) + "&";//flie
    //     //  obj += toJson("fileType", $.trim(fileType)) + "&";//filetype
    //     obj += toJson("loginId", $.trim(window.localStorage.loginId));
    //     doPost("dsbOrderProcess.action", obj, function(data) {
    //         if (data.code == 0) {
    //             toast(data.message);
    //             window.thisCaseQueryType = "1";
    //             window.CaseWelcomePage = "";
    //             //waitJumpPage("../hscasetask/waitTodoCaseList.html");
    //             alert(1)
    //             that.$router.push({path: '/toDeal-index'});
    //             // that.$router.push("../toDeal-index");
    //         } else {
    //             toast(data.message);
    //         }
    //     }, "", "");
    //
    // }

    // function appWorkOrder_upLoadPic_todo(img, type, source) {
    //     var that=this;
    //     var obj = "";
    //     obj += toJson("base64Str", img);
    //     doPost("app_publicOpinion_upPic.action", obj, function(data) {
    //         if (data.code == 0) {
    //             console.log("1111111111111111当前上传第:" + type + "张,下次上传第" + type + "张");
    //             if (type < parseInt(window.picture_array.length)) {
    //                 console.log("当前上传第:" + type + "张,下次上传第" + type + "张");
    //                 var typename = parseInt(type) + 1;
    //                 appWorkOrder_upLoadPic_todo(window.picture_array[type], typename, source);
    //             } else {
    //                 console.log("图片上传结束");
    //             }
    //             if (isNull(window.picture_upImg)) {
    //                 window.picture_upImg = data.datas.path;
    //             } else {
    //                 window.picture_upImg = window.picture_upImg + ";" + data.datas.path;
    //             }
    //
    //             //alert("图片数据：" + window.picture_upImg);
    //             toast(data.message);
    //             if (parseInt(type) == window.picture_array.length) {
    //
    //                 that.appWorkOrder_workOrderProcess_todo(that.content);
    //                 if (isNull(source)) {
    //                     //问题上报
    //                 //    appWorkOrder_workOrderReport("", $("#case_edit_address").html(), $("#case_edit_problem").val(), getNowTime(), "");
    //                 } else if ("caseTaskEdit" == source) {
    //                     //工单处理
    //
    //                 }
    //             }
    //         } else {
    //             toast(data.message);
    //         }
    //     }, "", "");
    // }
</script>

<style lang="less">
    /*img start*/
    #case_task_edit_page{
        .pot-scroll-wrapper{
         height: 92%;
        }
    .commodityAddImgs {
        overflow: hidden;
        background: #f3f3f3;
    }

    .imgdiv {
        padding: 0.7em;
        padding-top: 0em;
        position: relative;
        width: 6em;
        float: left;
    }

    .goodsimgone {
        float: left;
        width: 6em;
        margin-top: -1em;
    }

    .delimg {
        width: 2em;
        height: 2em;
        position: relative;
        top: 0em;
        left: 5em;
    }

    #case_task_edit_img {
        height: 7.5em;
        overflow: hidden;
        display: inline-block;
    }

    /*img end*/
    .div_input_value_img {
        width: 1.5em;
        height: 1.5em;
        padding-right: 0.5em;
    }
    #selectarea_div{
        background: #ffffff;
    }
    .secondTitle{
        padding: 20px;
        padding-left: 1.3em;
    }
    .secondTitle span{
        color: #9f9f9f;
    }
     .ui-radio{
        display: inline-block;
        vertical-align: middle;
        padding-left: 40px;
    }
      .ui-radio input{
        width: 16px;
        height:16px;
        margin: -8px 0 0 0;
    }
    #leaderfragment-1,#leaderfragment-2,#leaderfragment-3 {
        width: 100%;
        display: none;
        text-align: left;
        margin-left: 22px;
        margin-top: 12px;
    }
    .action{
        border-bottom: 2px solid red;
        height: 43px;
    }
    #JB_dept li{
        line-height: 35px;
        border-bottom: 1px solid #ddd;
        font-size: 15px
    }
    #JB_subdept li{
        line-height: 35px;
        border-bottom: 1px solid #ddd;
        font-size: 15px;
    }
    .choice_btn{
        background:#f5a035;
        width: 5em;
        display: inline-block;
        height: 2em;
        line-height: 2em;
        border-radius: 0.3em;
        color:#fff;
    }
    .alert_edit_title{
        text-align: left;
    }
        .inp_table td{
            padding-left:13px;line-height: 50px;border-bottom:1px solid #efefef;
        }
    }
</style>
