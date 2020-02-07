<template>
    <div data-role="page" id="random_task_page_detail">
        <tk-header>
            任务查看
        </tk-header>
        <div class="page_content">
            <div id="random_task_wrapper_detail" class="jszx-wrapper">
                <div class="jszx-scroller">
                    <div class="html_margin white_background">
                        <table class="inp_table" cellpadding="0" cellspacing="0">
                            <tr>
                                <td style="padding-top:0.5em;">任务id</td>
                                <td colspan="2">
                                    <input class="small gray_dark_font" style="color:#999999;"
                                           readonly    id="random_id_detail"/>
                                </td>
                            </tr>
                            <tr>
                                <td style="padding-top:0.5em;">截止时间</td>
                                <td colspan="2">
                                    <input class="small gray_dark_font" style="color:#999999;"
                                           readonly    id="random_deadLine_detail"/>
                                </td>
                            </tr>
                            <tr>
                                <td style="padding-top:0.5em;">检查企业名称</td>
                                <td colspan="2">
                                    <input class="small gray_dark_font" style="color:#999999;"
                                           readonly   id="enterprise_name_detail"/>
                                </td>
                            </tr>
                            <tr>
                                <td style="padding-top:0.5em;">抽查人</td>
                                <td colspan="2">
                                    <input class="small gray_dark_font" style="color:#999999;"
                                           readonly   id="spot_check_people_detail"/>
                                </td>
                            </tr>
                            <tr>
                                <td style="padding-top:0.5em;">抽查时间</td>
                                <td colspan="2">
                                    <input class="small gray_dark_font" style="color:#999999;"
                                           readonly id="spot_check_time_detail"/>
                                </td>
                            </tr>
                            <tr id="randomstatustr">
                                <td style="padding-top:0.5em;">完成状态</td>
                                <td colspan="2">
                                    <input class="small gray_dark_font" style="color:#999999;"
                                           id="random_status_detail" readonly/>
                                </td>
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
        name: "",
        mounted(){

            var that = this;
            window.searchPage = 2;
                //设置input和textarea的样式
                $("input").addClass("small gray_dark_font ui-input-text ui-body-c ui-corner-all ui-shadow-inset");
                $("textarea").addClass("ui-input-text ui-body-c ui-corner-all ui-shadow-inset");


                initRandomEdit();
                /*返回*/
                $("#random_task_page_detail .back-button").listen("quickClick", function (e) {
                    that.$router.back();
                });


                //商品图片
                $("#random_task_page_detail").on("click", ".goodsimgone", function (e) {
                    var upload_addimg=$(e.currentTarget).parent().attr("id");
                    var upload_imgscroll=$(e.currentTarget).parent().parent().attr("id");
                    var upload_imgwrapper=$(e.currentTarget).parent().parent().parent().attr("id");
                    window.upload_imgscroll = upload_imgscroll;
                    window.upload_imgwrapper = upload_imgwrapper;
                    window.upload_addimg = upload_addimg;
                    window.imgcurrentNum=upload_addimg.split("_");
                    getdoublePhotograph();
                });


            function initRandomEdit() {
                $("#random_task_wrapper_detail")[0].style.height = window.localInnerHeight - $("#random_task_page_detail .page_header").height() - $("#random_task_page_detail .page_footer").height() + "px";
                initScroll({
                    "wrapper": "random_task_wrapper_detail",
                    "dir": "y",
                    "bounce": false,
                    "scrollBar": true
                });
                scrollToTop("random_task_wrapper_detail");
                $("#randomstatustr").nextAll().remove();
                loadAllInfo();
                leaderCaseEdit();
                window.randomcommitFlag=0;
                window.allRandomPic=[];
            }
            function leaderCaseEdit() {
                $("#random_task_page_detail table tr td").addClass("gray_line_bottom");
                $("#random_task_page_detail table tr td input").val("");
                $("#random_task_page_detail table tr td textarea").val("");
                //图片集合

                var data = window.doubleRandomInfo;
                window.picture_array = [];
                window.picture_upImg = "";
                $("#random_id_detail").val(data.id);
                $("#random_deadLine_detail").val(data.deadLine);
                $("#enterprise_name_detail").val(data.enterpriseName);
                $("#spot_check_people_detail").val(data.userName);
                $("#spot_check_time_detail").val(data.samplingTime);
                var status = "";
                if(data.status=="1"){
                    status="未检查";
                }else{
                    status="已检查";
                }
                $("#random_status_detail").val(status);
                var resultarr = data.resultContent.split(",");
                for(var i=0;i<resultarr.length;i++){
                    var findgoodId= "#goodimg_"+i;
                    var findnoId= "#noimg_"+i;
                    var imgdetailtitle="#imgdetailtitletr_"+i;
                    var imgdetailcontent="#imgdetailcontenttr_"+i;
                    if(resultarr[i]=="2"){
                        //不合格
                        $("#random_task_page_detail").find(findgoodId).attr("src","../repair/images/KpiactiveImg1.png");
                        $("#random_task_page_detail").find(findnoId).attr("src","../repair/images/KpiactiveImg.png");
                        $("#random_task_page_detail").find(imgdetailtitle).attr("style","display:table-row");
                        $("#random_task_page_detail").find(imgdetailcontent).attr("style","display:table-row");
                    }else{
                        $("#random_task_page_detail").find(findgoodId).attr("src","../repair/images/KpiactiveImg.png");
                        $("#random_task_page_detail").find(findnoId).attr("src","../repair/images/KpiactiveImg1.png");
                    }
                }

                $("#task_edit_img_scroll1").css("transform", "none");
                $("#task_edit_img_wrapper .scroll-bar-x").css("transform", "none");

            }
            //
            function loadAllInfo(){
                var data=window.doubleRandomInfo;

                if(data.checkItem!==""){
                    var array=data.checkItem.split(",");
                    var len = array.length;
                    var htmls='';
                    var imgarray=data.path.split(",");
                    for(var i=0;i<len;i++){
                        htmls+='<tr><td style="padding-top:0.5em;">'+array[i]+'</td>';
                        htmls+='<td colspan="2">';
                        htmls+='<img class="good" id="goodimg_'+i+'" src="../repair/images/KpiactiveImg.png" style="width:7%;vertical-align: middle;">';
                        htmls+='<span class="disI vm" style="line-height: 40px;color:#9f9f9f;margin-right: 0.3em;">合格</span>';
                        htmls+='<img class="no" id="noimg_'+i+'" src="../repair/images/KpiactiveImg1.png" style="width:7%;vertical-align: middle;">';
                        htmls+='<span class="disI vm" style="line-height: 40px;color:#9f9f9f">不合格</span> ';
                        htmls+='</td></tr>';
                        htmls+='<tr id="imgdetailtitletr_'+i+'" style="display:none;"><td style="padding:1.3em;">上传凭证</td>';
                        htmls+='<td colspan="2"></td> </tr>';
                        htmls+='<tr id="imgdetailcontenttr_'+i+'" style="display:none;"><td colspan="3" class="commodityAddImgs">';
                        htmls+='<div id="taskDetailImgWrapper_'+i+'" class="jszx-wrapper">';
                        htmls+='<div class="jszx-scroller" id="taskDetailImgScroll_'+i+'">';
                        htmls+='<div id="taskDetailImg_'+i+'" class="task_edit_img">';
                        var arr=imgarray[i].split(";");
                        for(var j=0;j<arr.length;j++){

                            if (!isNull(imgarray[i])) {

                                htmls += ' <div class="imgdiv">';
                                htmls += '<img class="goodsimgone" src="' + window.imgUrl + arr[j] + '">';
                                htmls += '</div>';
                                /*  var $htmls = createListRow(commodity_add_img_info).appendTo("#" + window.upload_addimg);
                                 $commodity_add_img_info.listen("quickClick", function (e) {
                                     var data = $(e.currentTarget).data("data");
                                     window.lookType = "opinioned";
                                     $.mobile.changePage("../casetask/photoLook.html");
                                 }); */
                            }
                        }
                        htmls+='</div></div></div></td></tr>';

                    }
                    $("#random_task_wrapper_detail table").append(htmls);
                    for(var h=0;h<len;h++){
                        var arr1=imgarray[h].split(";");
                        if (!isNull(imgarray[h])) {
                            imgWidth("taskDetailImgScroll_"+h, "taskDetailImgWrapper_"+h, arr1.length, "taskDetailImg_"+h);
                        }
                    }


                }

            }
        }
    }
</script>

<style scoped>

   #random_task_page_detail .page_header .right_img {
                              width: 2em;
                              top: 0.2em;
                          }

    /*img start*/
    #random_task_page_detail .commodityAddImgs {
        overflow: hidden;
        background: #f3f3f3;
    }

    #random_task_page_detail .imgdiv {
        padding: 0.7em;
        padding-top: 0em;
        position: relative;
        width: 6em;
        float: left;
    }

    #random_task_page_detail .goodsimgone {
        float: left;
        height: 6em;
        width: 6em;
        margin-top: 1em;
    }

    #random_task_page_detail .delimg {
        width: 2em;
        height: 2em;
        position: relative;
        top: 0em;
        left: 5em;
    }

    #random_task_page_detail .task_edit_img {
        height: 7.5em;
        overflow: hidden;
        display: inline-block;
    }



    /*img end*/
    #random_task_page_detail .div_input_value_img {
        width: 1.5em;
        height: 1.5em;
        padding-right: 0.5em;
    }

    /*复选框样式*/
    .KpiTcbackG{
        position: absolute;
        top:0;
        left:0;
        bottom:0;
        right:0;
        z-index: 20;
        background: rgba(0,0,0,0.5);
    }
    .KpiTcbackG .naturecontent{
        width:50%;
        margin:50% auto 0;
        background: #fff;
        border-radius: 6px;
        padding: 5%;height:200px;
        overflow-y: auto;
    }

    .webkit-appearance{
        -webkit-appearance:checkbox!important;
    }
    .disI{
        display: inline-block;
    }
    .vm{
        vertical-align: middle;
    }
    .f14{
        font-size: 14px;
    }
    .KpiFormBut{
        width:30%;
        background: #f5a035;
        padding:1.5%;
        border-radius: 3px;
        color: #fff;
        display:inline-block;
    }
    .tc{
        text-align: center;
    }
    .mt5{
        margin-top: 5%;
    }
    /*复选框样式end*/
    #hear {
        width: 100%;
        height: 44px;
        line-height: 45px;
        border-bottom: 1px solid #cccccc;
    }
    #hear li {
        text-align: center;
        width: 33%;
        float: left;
    }

    .action{
        border-bottom: 2px solid red;
        height: 43px;
    }
    .select_type{
        position: absolute;
        background-color:#fff;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        width: 50%;
        height: 30%;
        margin: auto;
    }
    #doubleRandomfooter{
        position: fixed;
        bottom: 0;
    }





</style>
