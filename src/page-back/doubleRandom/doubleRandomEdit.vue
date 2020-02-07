<template>

    <div data-role="page" id="random_task_page">
        <tk-header>
            任务查看
        </tk-header>

        <div class="page_content">
            <div id="random_task_wrapper" class="jszx-wrapper">
                <div class="jszx-scroller">
                    <div class="html_margin white_background">
                        <input class="small gray_dark_font" style="color:#999999;"
                               readonly type="hidden"   id="random_id"/>
                        <table class="inp_table" cellpadding="0" cellspacing="0">
                            <tr>
                                <td style="padding-top:0.5em;">截止时间</td>
                                <td colspan="2">
                                    <input class="small gray_dark_font" style="color:#999999;"
                                           readonly    id="random_deadLine"/>
                                </td>
                            </tr>
                            <tr>
                                <td style="padding-top:0.5em;">检查企业名称</td>
                                <td colspan="2">
                                    <input class="small gray_dark_font" style="color:#999999;"
                                           readonly   id="enterprise_name"/>
                                </td>
                            </tr>
                            <tr>
                                <td style="padding-top:0.5em;">抽查人</td>
                                <td colspan="2">
                                    <input class="small gray_dark_font" style="color:#999999;"
                                           readonly   id="spot_check_people"/>
                                </td>
                            </tr>
                            <tr>
                                <td style="padding-top:0.5em;">抽查时间</td>
                                <td colspan="2">
                                    <input class="small gray_dark_font" style="color:#999999;"
                                           readonly id="spot_check_time"/>
                                </td>
                            </tr>

                            <tr >
                                <td style="padding-top:0.5em;">完成状态</td>
                                <td colspan="2">
                                    <input class="small gray_dark_font" style="color:#999999;"
                                           id="random_status" readonly/>
                                </td>
                            </tr>
                            <tr >
                                <td style="padding-top:0.5em;padding-bottom:0.5em;">检查结果</td>
                                <td  colspan="2" >

                                </td>
                            </tr>
                            <tr id="randomstatustr" style="padding-top:0.5em;padding-bottom:0.5em;">
                                <td  colspan="3" >
                                    <div style="padding:5px;">
                                        <input id="selectcheck1" type="checkbox" name="randomType" typevalue="01"/>现场纠正文书&nbsp;&nbsp;
                                        <input id="selectcheck2" type="checkbox" name="randomType" typevalue="02"/>期限改正&nbsp;&nbsp;
                                        <input id="selectcheck3" type="checkbox" name="randomType" typevalue="03"/>限期恢复原状
                                    </div>
                                    <div style="padding:5px;">
                                        <input id="selectcheck4" type="checkbox" name="randomType" typevalue="04"/>停止违法行为&nbsp;&nbsp;
                                        <input id="selectcheck5" type="checkbox" name="randomType" typevalue="05"/>停工
                                    </div>

                                </td>
                            </tr>
                            <tr id="correction_num_tr">
                                <td>现场纠正文书数量</td>
                                <td colspan="2">
                                    <input id="correction_num" class="uploadInput" style="border: 1px solid #ccc;width: 80px;display: inline-block;border-radius: 5px;" type="text">
                                    <div class="uploadcurrent" id="uploadcurrent_1" style="display: inline-block;padding: 0.5em;border-radius: 0.3em;background: #f5a035;color: #fff;">确认上传</div>
                                </td>
                            </tr>
                            <tr id="correction_tr">
                                <td colspan="3" class="commodityAddImgs">
                                    <div id="correction_img_wrapper" class="jszx-wrapper">
                                        <div class="jszx-scroller" id="correction_img_scroll">
                                            <div id="correctionedit_edit_img"></div>
                                        </div>
                                    </div>
                                </td>
                            </tr>
                            <tr id="rectification_num_tr">
                                <td>限期整改文书数量</td>
                                <td colspan="2">
                                    <input id="rectification_num" class="uploadInput" style="border: 1px solid #ccc;width: 80px;display: inline-block;border-radius: 5px;" type="text">
                                    <div class="uploadcurrent" id="uploadcurrent_2" style="display: inline-block;padding: 0.5em;border-radius: 0.3em;background: #f5a035;color: #fff;">确认上传</div>
                                </td>
                            </tr>
                            <tr id="rectification_tr">
                                <td colspan="3" class="commodityAddImgs">
                                    <div id="rectification_img_wrapper" class="jszx-wrapper">
                                        <div class="jszx-scroller" id="rectification_img_scroll">
                                            <div id="rectification_edit_img"></div>
                                        </div>
                                    </div>
                                </td>
                            </tr>
                            <tr id="limitoriginal_num_tr">
                                <td>限期恢复原状文书数量</td>
                                <td colspan="2">
                                    <input id="limitoriginal_num" class="uploadInput" style="border: 1px solid #ccc;width: 80px;display: inline-block;border-radius: 5px;"  type="text">
                                    <div class="uploadcurrent" id="uploadcurrent_3" style="display: inline-block;padding: 0.5em;border-radius: 0.3em;background: #f5a035;color: #fff;">确认上传</div>
                                </td>
                            </tr>
                            <tr id="limitoriginal_tr">
                                <td colspan="3" class="commodityAddImgs">
                                    <div id="limitoriginal_img_wrapper" class="jszx-wrapper">
                                        <div class="jszx-scroller" id="limitoriginal_img_scroll">
                                            <div id="limitoriginal_edit_img"></div>
                                        </div>
                                    </div>
                                </td>
                            </tr>
                            <tr id="stopillegal_num_tr">
                                <td>停止违法行为文书数量</td>
                                <td colspan="2">
                                    <input id="stopillegal_num" class="uploadInput" style="border: 1px solid #ccc;width: 80px;display: inline-block;border-radius: 5px;" type="text">
                                    <div class="uploadcurrent" id="uploadcurrent_4" style="display: inline-block;padding: 0.5em;border-radius: 0.3em;background: #f5a035;color: #fff;">确认上传</div>
                                </td>
                            </tr>
                            <tr id="stopillegal_tr">
                                <td colspan="3" class="commodityAddImgs">
                                    <div id="stopillegal_img_wrapper" class="jszx-wrapper">
                                        <div class="jszx-scroller" id="stopillegal_img_scroll">
                                            <div id="stopillegal_edit_img"></div>
                                        </div>
                                    </div>
                                </td>
                            </tr>
                            <tr id="stopwwork_num_tr">
                                <td>停工文书数量</td>
                                <td colspan="2">
                                    <input id="stopwwork_num" class="uploadInput" style="border: 1px solid #ccc;width: 80px;display: inline-block;border-radius: 5px;" type="text">
                                    <div class="uploadcurrent" id="uploadcurrent_5" style="display: inline-block;padding: 0.5em;border-radius: 0.3em;background: #f5a035;color: #fff;">确认上传</div>
                                </td>
                            </tr>
                            <tr id="stopwwork_tr">
                                <td colspan="3" class="commodityAddImgs">
                                    <div id="stopwwork_img_wrapper" class="jszx-wrapper">
                                        <div class="jszx-scroller" id="stopwwork_img_scroll">
                                            <div id="stopwwork_edit_img"></div>
                                        </div>
                                    </div>
                                </td>
                            </tr>

                        </table>
                        <table id="showdetailimg" class="inp_table" cellpadding="0" cellspacing="0">
                            <tr id="xcws_tr">
                                <td class="gray_line_bottom">现场纠正文书数量</td>
                            </tr>
                            <tr>
                                <td colspan="3" class="commodityAddImgs">
                                    <div id="xcws_img_wrapper" class="jszx-wrapper">
                                        <div class="jszx-scroller" id="xcws_detail_img_scroll">
                                            <div id="xcws_detail_img">
                                            </div>
                                        </div>
                                    </div>
                                </td>
                            </tr>
                            <tr id="xqzg_tr">
                                <td class="gray_line_bottom">限期整改文书数量</td>
                            </tr>
                            <tr>
                                <td colspan="3" class="commodityAddImgs">
                                    <div id="xqzg_img_wrapper" class="jszx-wrapper">
                                        <div class="jszx-scroller" id="xqzg_detail_img_scroll">
                                            <div id="xqzg_detail_img">
                                            </div>
                                        </div>
                                    </div>
                                </td>
                            </tr>
                            <tr id="xqhf_tr">
                                <td class="gray_line_bottom">限期恢复原状文书数量</td>
                            </tr>
                            <tr>
                                <td colspan="3" class="commodityAddImgs">
                                    <div id="xqhf_img_wrapper" class="jszx-wrapper">
                                        <div class="jszx-scroller" id="xqhf_detail_img_scroll">
                                            <div id="xqhf_detail_img">
                                            </div>
                                        </div>
                                    </div>
                                </td>
                            </tr>
                            <tr id="dzwf_tr">
                                <td class="gray_line_bottom">停止违法行为</td>
                            </tr>
                            <tr>
                                <td colspan="3" class="commodityAddImgs">
                                    <div id="dzwf_img_wrapper" class="jszx-wrapper">
                                        <div class="jszx-scroller" id="dzwf_detail_img_scroll">
                                            <div id="dzwf_detail_img">
                                            </div>
                                        </div>
                                    </div>
                                </td>
                            </tr>
                            <tr id="tg_tr">
                                <td class="gray_line_bottom">停工</td>
                            </tr>
                            <tr>
                                <td colspan="3" class="commodityAddImgs">
                                    <div id="tg_img_wrapper" class="jszx-wrapper">
                                        <div class="jszx-scroller" id="tg_detail_img_scroll">
                                            <div id="tg_detail_img">
                                            </div>
                                        </div>
                                    </div>
                                </td>
                            </tr>
                        </table>
                        <div id="checkItemInfo" style="padding:1em;background-color:#fff"></div>
                    </div>
                </div>
            </div>
        </div>
        <div id="doubleRandomfooter" class="page_footer">
            <div class="footer_button_div" style="text-align:center">

                <div id="doubleRandomcommit" class="alert_bottom_three orange_background ">确  认</div>

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
            $("#random_task_page").on("click", ".good", function (e) {
                var src=$(e.currentTarget).attr("src");
                var id=$(e.currentTarget).attr("id");
                var idnum=id.split("_");
                var findId= "#noimg_"+idnum[1];
                var imgtitleId = "#imgtitletr_"+idnum[1];
                var imgcontentId = "#imgcontenttr_"+idnum[1];
                if(src=="../repair/images/KpiactiveImg.png"){
                    $(e.currentTarget).attr("src","../repair/images/KpiactiveImg1.png");
                    $("#random_task_page").find(findId).attr("src","../repair/images/KpiactiveImg.png");
                    $("#random_task_page").find(imgtitleId).attr("style","display:table-row");
                    $("#random_task_page").find(imgcontentId).attr("style","display:table-row");
                }else{
                    $(e.currentTarget).attr("src","../repair/images/KpiactiveImg.png");
                    $("#random_task_page").find(findId).attr("src","../repair/images/KpiactiveImg1.png");
                    $("#random_task_page").find(imgtitleId).attr("style","display:none");
                    $("#random_task_page").find(imgcontentId).attr("style","display:none");
                }
            });

            //商品图片
            $("#random_task_page ").on("click", "#choice1", function (e) {
                window.upload_imgscroll = "correction_img_scroll";
                window.upload_imgwrapper = "correction_img_wrapper";
                window.upload_addimg = "correctionedit_edit_img";
                getdoublePhotograph(1);
            });
            $("#random_task_page ").on("click", "#choice2", function (e) {
                window.upload_imgscroll = "rectification_img_scroll";
                window.upload_imgwrapper = "rectification_img_wrapper";
                window.upload_addimg = "rectification_edit_img";
                getdoublePhotograph(2);
            });
            $("#random_task_page ").on("click", "#choice3", function (e) {
                window.upload_imgscroll = "limitoriginal_img_scroll";
                window.upload_imgwrapper = "limitoriginal_img_wrapper";
                window.upload_addimg = "limitoriginal_edit_img";
                getdoublePhotograph(3);
            });
            $("#random_task_page ").on("click", "#choice4", function (e) {
                window.upload_imgscroll = "stopillegal_img_scroll";
                window.upload_imgwrapper = "stopillegal_img_wrapper";
                window.upload_addimg = "stopillegal_edit_img";
                getdoublePhotograph(4);
            });
            $("#random_task_page ").on("click", "#choice5", function (e) {
                window.upload_imgscroll = "stopwwork_img_scroll";
                window.upload_imgwrapper = "stopwwork_img_wrapper";
                window.upload_addimg = "stopwwork_edit_img";
                getdoublePhotograph(5);
            });
            $("input[name='randomType']").on("click",function(e){
                if ($(this).is(":checked") == true){
                    if($(e.currentTarget).attr("typevalue")=="01"){
                        $("#correction_num_tr").show();
                        $("#correction_tr").show();
                    }else if($(e.currentTarget).attr("typevalue")=="02"){
                        $("#rectification_num_tr").show();
                        $("#rectification_tr").show();
                    }else if($(e.currentTarget).attr("typevalue")=="03"){
                        $("#limitoriginal_num_tr").show();
                        $("#limitoriginal_tr").show();
                    }else if($(e.currentTarget).attr("typevalue")=="04"){
                        $("#stopillegal_num_tr").show();
                        $("#stopillegal_tr").show();
                    }else if($(e.currentTarget).attr("typevalue")=="05"){
                        $("#stopwwork_num_tr").show();
                        $("#stopwwork_tr").show();
                    }
                }else{
                    if($(e.currentTarget).attr("typevalue")=="01"){
                        $("#correction_num_tr").hide();
                        $("#correction_tr").hide();
                    }else if($(e.currentTarget).attr("typevalue")=="02"){
                        $("#rectification_num_tr").hide();
                        $("#rectification_tr").hide();
                    }else if($(e.currentTarget).attr("typevalue")=="03"){
                        $("#limitoriginal_num_tr").hide();
                        $("#limitoriginal_tr").hide();
                    }else if($(e.currentTarget).attr("typevalue")=="04"){
                        $("#stopillegal_num_tr").hide();
                        $("#stopillegal_tr").hide();
                    }else if($(e.currentTarget).attr("typevalue")=="05"){
                        $("#stopwwork_num_tr").hide();
                        $("#stopwwork_tr").hide();
                    }
                }
            })

            $("#random_task_page").on("click", ".no", function (e) {
                var src=$(e.currentTarget).attr("src");
                var id=$(e.currentTarget).attr("id");
                var idnum=id.split("_");
                var findId= "#goodimg_"+idnum[1];
                var imgtitleId = "#imgtitletr_"+idnum[1];
                var imgcontentId = "#imgcontenttr_"+idnum[1];
                if(src=="../repair/images/KpiactiveImg.png"){
                    $(e.currentTarget).attr("src","../repair/images/KpiactiveImg1.png");
                    $("#random_task_page").find(findId).attr("src","../repair/images/KpiactiveImg.png");
                    $("#random_task_page").find(imgtitleId).attr("style","display:none");
                    $("#random_task_page").find(imgcontentId).attr("style","display:none");
                }else{
                    $(e.currentTarget).attr("src","../repair/images/KpiactiveImg.png");
                    $("#random_task_page").find(findId).attr("src","../repair/images/KpiactiveImg1.png");
                    $("#random_task_page").find(imgtitleId).attr("style","display:table-row");
                    $("#random_task_page").find(imgcontentId).attr("style","display:table-row");
                }
            });
            //单次提交
            $("#random_task_page").on("click", ".uploadcurrent", function (e) {
                // window.picture_upImg = "";
                var id=$(e.currentTarget).attr("id");
                var i = id.split("_");
                var num = i[1];
                showLoading("正在上传...");
                var curr = "picture_array"+num;

                var currupImg = "picture_upImg"+num;
                window[currupImg]="";
                if(!window[curr]){
                    hideLoading();
                }else{
                    doubleRandom_upPicture(window[curr][0],1,window[curr],num);
                }

            });



                //设置input和textarea的样式
                $("input").addClass("small gray_dark_font ui-input-text ui-body-c ui-corner-all ui-shadow-inset");
                $("textarea").addClass("ui-input-text ui-body-c ui-corner-all ui-shadow-inset");

                initRandomEdit();
                /*返回*/
                $("#random_task_page .back-button").listen("quickClick", function (e) {
                    that.$router.back();
                });
                //选择
                $("#random_task_page #randomtypetr").listen("quickClick", function (e) {
                    getrandomselect();
                });


                /*保存*/
                $("#random_task_page #doubleRandomcommit").listen("quickClick", function (e) {
                    if(window.randomcommitFlag==0){

                        showContentAlert("确认保存本次提交吗？", function () {
                        }, function () {

                            var arr="[";
                            $("#checkItemInfo input").each(function(e){


                                //alert($(this).attr("name"))
                                var str=$(this).attr("id");
                                var val=$(this).val();
                                var type=$(this).attr("type");
                                if($(this).attr("type")=="checkbox"){
                                    val = $(this).is(":checked");
                                }
                                if($(this).attr("type")=="radio"){
                                    val = $(this).is(":checked");
                                }
                                var obj = "{"+str+":'"+val+"'},";
                                arr += obj;

                            });
                            arr=arr.substr(0,arr.length-1);
                            arr = arr+"]";
                            console.log(arr);

                            doubleRandomcommit(arr);
                        }, "确定");
                        // var data=window.doubleRandomInfo;

                    }

                });


            //领导直派，图片上传
            function doubleRandom_upPicture(img, type, curr, num) {
                //alert("图片张数：" + curr.length + "；当前第" + type + "张");
                //alert("num:"+num)
                var upimg="picture_upImg"+num;
                var obj = "";
                obj += toJson("base64Str", img);
                doPost("app_publicOpinion_upPic_inspection.action", obj, function (data) {
                    if (data.code == 0) {
                        if (type < parseInt(curr.length)) {
                            // alert("当前上传第:" + type + "张,下次上传第" + type + "张");
                            var typename = parseInt(type) + 1;
                            doubleRandom_upPicture(curr[type], typename, curr, num);
                        } else {
                            console.log("图片上传结束");
                        }
                        //alert("isNull(currupImg)"+isNull(window[upimg]))
                        if (isNull(window[upimg])) {
                            window[upimg] = data.datas.path;
                        } else {
                            window[upimg] = window[upimg] + ";" + data.datas.path;
                            //alert("bukong"+window[upimg])
                        }
                        console.log("当前type" + type + "；总共张数：" + curr.length);
                        if (parseInt(type) == curr.length) {
                            //alert("win长度" + window[upimg].length);
                            //alert("type和图片长度相等" + type);
                        } else {
                            console.log("type和图片长度不相等");
                        }
                    } else {
                        toast(data.message);
                    }
                }, "", "");
            }
            /*   function doubleRandom_upPicture(img, type, pictureArray, currNum) {
                // alert("图片张数：" + pictureArray.length + "；当前第" + type + "张");
                  var obj = "";
                  obj += toJson("base64Str", img);
                  doPost("app_publicOpinion_upPic_inspection.action", obj, function (data) {

                      if (data.code == 0) {
                          if (type < parseInt(pictureArray.length)) {
                              console.log("当前上传第:" + type + "张,下次上传第" + type + "张");
                              var typename = parseInt(type) + 1;
                              doubleRandom_upPicture(pictureArray[type], typename, pictureArray, currNum);
                          } else {
                              console.log("图片上传结束");
                          }

                          if (isNull(window.picture_upImg)) {
                              window.picture_upImg = data.datas.path;
                          } else {
                              window.picture_upImg = window.picture_upImg + ";" + data.datas.path;
                          }
                          console.log("当前type" + type + "；总共张数：" + window.picture_array.length);
                          if (parseInt(type) == pictureArray.length) {
                              //doubleRandomcommit();
                              window.allRandomPic[currNum]=window.picture_upImg;
                              //alert("-----"+JSON.stringify(window.allRandomPic))
                              console.log("type和图片长度相等" + type);
                              hideLoading();

                          } else {
                              console.log("type和图片长度不相等");
                          }
                      } else {
                          toast(data.message);
                      }
                  }, "", "");
              } */
            function initRandomEdit() {
                $("#random_task_wrapper")[0].style.height = window.localInnerHeight - $("#random_task_page .page_header").height() - $("#random_task_page .page_footer").height() + "px";
                initScroll({
                    "wrapper": "random_task_wrapper",
                    "dir": "y",
                    "bounce": false,
                    "scrollBar": true
                });
                scrollToTop("random_task_wrapper");
                $("#stopwwork_tr").nextAll().remove();
                loadAllInfo();
                randomEdit();
                window.randomcommitFlag=0;
                window.allRandomPic=[];
                $("#correction_img_scroll").css("transform", "none");
                $("#correction_img_wrapper .scroll-bar-x").css("transform", "none");
                $("#random_task_page #correctionedit_edit_img").empty();
                $("#random_task_page #correctionedit_edit_img").append('<img class="goodsimgone" style="padding-top:0em;" src="/staitc/resources/images/icon_add_photo.png" id="choice1">');
                $("#random_task_page #rectification_edit_img").empty();
                $("#random_task_page #rectification_edit_img").append('<img class="goodsimgone" style="padding-top:0em;" src="/staitc/resources/images/icon_add_photo.png" id="choice2">');
                $("#random_task_page #limitoriginal_edit_img").empty();
                $("#random_task_page #limitoriginal_edit_img").append('<img class="goodsimgone" style="padding-top:0em;" src="/staitc/resources/images/icon_add_photo.png" id="choice3">');
                $("#random_task_page #stopillegal_edit_img").empty();
                $("#random_task_page #stopillegal_edit_img").append('<img class="goodsimgone" style="padding-top:0em;" src="/staitc/resources/images/icon_add_photo.png" id="choice4">');
                $("#random_task_page #stopwwork_edit_img").empty();
                $("#random_task_page #stopwwork_edit_img").append('<img class="goodsimgone" style="padding-top:0em;" src="/staitc/resources/images/icon_add_photo.png" id="choice5">');
                $("#correction_num_tr").hide();
                $("#correction_tr").hide();
                $("#rectification_num_tr").hide();
                $("#rectification_tr").hide();
                $("#limitoriginal_num_tr").hide();
                $("#limitoriginal_tr").hide();
                $("#stopillegal_num_tr").hide();
                $("#stopillegal_tr").hide();
                $("#stopwwork_num_tr").hide();
                $("#stopwwork_tr").hide();
                window.picture_upImg1="";
                window.picture_upImg2="";
                window.picture_upImg3="";
                window.picture_upImg4="";
                window.picture_upImg5="";
                /* var obj=eval("("+"[{r1:false},{r2:true},{r3:true},{r4:false},{r5:false},{r6:true}]"+")");
                for(var i=0;i<obj.length;i++){
                    for(var key in obj[i]){
                        //alert("key:"+key+","+"value:"+obj[i][key]);

                            $("input[id='"+key+"']").val(obj[i][key]);
                            if(obj[i][key]){
                                $("input[id='"+key+"']").attr("checked","checked");
                            }


                    }
                } */
                var data=window.doubleRandomInfo;
                if(data.path==""){
                    $("#xcws_tr").hide();
                }else{
                    $("#xcws_tr").show();
                }
                if(data.path2==""){
                    $("#xqzg_tr").hide();
                }else{
                    $("#xqzg_tr").show();
                }
                if(data.path3==""){
                    $("#xqhf_tr").hide();
                }else{
                    $("#xqhf_tr").show();
                }
                if(data.path4==""){
                    $("#dzwf_tr").hide();
                }else{
                    $("#dzwf_tr").show();
                }
                if(data.path5==""){
                    $("#tg_tr").hide();
                }else{
                    $("#tg_tr").show();
                }
                $("#xcws_detail_img").empty();
                $("#xcws_detail_img_scroll").css("transform", "none");
                $("#xcws_img_wrapper .scroll-bar-x").css("transform", "none");
                $("#xqzg_detail_img").empty();
                $("#xqzg_detail_img_scroll").css("transform", "none");
                $("#xqzg_img_wrapper .scroll-bar-x").css("transform", "none");
                $("#xqhf_detail_img").empty();
                $("#xqhf_detail_img_scroll").css("transform", "none");
                $("#xqhf_img_wrapper .scroll-bar-x").css("transform", "none");
                $("#dzwf_detail_img").empty();
                $("#dzwf_detail_img_scroll").css("transform", "none");
                $("#dzwf_img_wrapper .scroll-bar-x").css("transform", "none");
                $("#tg_detail_img").empty();
                $("#tg_detail_img_scroll").css("transform", "none");
                $("#tg_img_wrapper .scroll-bar-x").css("transform", "none");
                window.upload_imgscroll1 = "xcws_detail_img_scroll";
                window.upload_imgwrapper1 = "xcws_img_wrapper";
                window.upload_addimg1 = "xcws_detail_img";
                window.upload_imgscroll2 = "xqzg_detail_img_scroll";
                window.upload_imgwrapper2 = "xqzg_img_wrapper";
                window.upload_addimg2 = "xqzg_detail_img";
                window.upload_imgscroll3 = "xqhf_detail_img_scroll";
                window.upload_imgwrapper3 = "xqhf_img_wrapper";
                window.upload_addimg3 = "xqhf_detail_img";
                window.upload_imgscroll4 = "dzwf_detail_img_scroll";
                window.upload_imgwrapper4 = "dzwf_img_wrapper";
                window.upload_addimg4 = "dzwf_detail_img";
                window.upload_imgscroll5 = "tg_detail_img_scroll";
                window.upload_imgwrapper5 = "tg_img_wrapper";
                window.upload_addimg5 = "tg_detail_img";
                showTypePic();
                $("#random_deadLine").attr("readonly","readonly");
                $("#enterprise_name").attr("readonly","readonly");
                $("#spot_check_people").attr("readonly","readonly");
                $("#spot_check_time").attr("readonly","readonly");
                $("#readonly").attr("readonly","readonly");

            }
            function randomEdit() {
                $("#random_task_page table tr td").addClass("gray_line_bottom");
                $("#random_task_page table tr td input").val("");
                $("#random_task_page table tr td textarea").val("");
                //图片集合

                var data = window.doubleRandomInfo;
                if(data){
                    window.picture_array = [];
                    window.picture_upImg = "";
                    $("#random_id").val(data.id);
                    $("#random_deadLine").val(data.deadLine);
                    $("#enterprise_name").val(data.enterpriseName);
                    $("#spot_check_people").val(data.userName);
                    $("#spot_check_time").val(data.samplingTime);
                    var status = "";
                    if(data.status=="1"){
                        status="未检查";
                    }else{
                        status="已检查";
                    }
                    if(data.resultContent!==""){
                        $("#random_task_page  input").attr("readonly","readonly");
                        $("input[type='checkbox']").attr("onclick","return false")
                        $("#doubleRandomfooter").hide();
                        $("#random_status").val(status);
                    }else{
                        $("#random_task_page  input").removeAttr("readonly");
                        $("input[type='checkbox']").removeAttr("onclick")
                        $("#doubleRandomfooter").show();
                    }

                }


                $("#task_edit_img_scroll1").css("transform", "none");
                $("#task_edit_img_wrapper .scroll-bar-x").css("transform", "none");
                //$("#leader_words").val("0/150");
                // $("#random_task_page .task_edit_img").empty();
                // $("#random_task_page .task_edit_img").append('<img class="goodsimgone" style="padding-top:2em;" src="/staitc/resources/images/icon_add_photo.png" >');
            }
            //
            /*  function loadAllInfo(){
                 var data=window.doubleRandomInfo;
                 if(data.checkItem!==""){
                     var array=data.checkItem.split(",")
                     var len = array.length;
                     var htmls='';

                     for(var i=0;i<len;i++){
                           htmls+='<tr><td style="padding-top:0.5em;">'+array[i]+'</td>';
                           htmls+='<td colspan="2">';
                           htmls+='<img class="good" id="goodimg_'+i+'" src="../repair/images/KpiactiveImg.png" style="width:7%;vertical-align: middle;">';
                           htmls+='<span class="disI vm" style="line-height: 40px;color:#9f9f9f;margin-right: 0.3em;">合格</span>';
                           htmls+='<img class="no" id="noimg_'+i+'" src="../repair/images/KpiactiveImg1.png" style="width:7%;vertical-align: middle;">';
                           htmls+='<span class="disI vm" style="line-height: 40px;color:#9f9f9f">不合格</span> ';
                           htmls+='</td></tr>';
                           htmls+='<tr id="imgtitletr_'+i+'" style="display:none;"><td style="padding:1.3em;">上传凭证</td>';
                           htmls+='<td colspan="2"><div class="uploadcurrent" id="uploadcurrent_'+i+'" style="display: inline-block;padding: 0.5em;border-radius: 0.3em;background: #f5a035;color: #fff;">确认上传<div></td> </tr>';
                           htmls+='<tr id="imgcontenttr_'+i+'" style="display:none;"><td colspan="3" class="commodityAddImgs">';
                           htmls+='<div id="taskEditImgWrapper_'+i+'" class="jszx-wrapper">';
                           htmls+='<div class="jszx-scroller" id="taskEditImgScroll_'+i+'">';
                           htmls+='<div id="taskEditImg_'+i+'" class="task_edit_img"></div>';
                           htmls+='</div></div></td></tr>';
                     }
                   $("#random_task_wrapper table").append(htmls);

                 }

             } */
            function loadAllInfo(){
                var data=window.doubleRandomInfo;
                /*   if(data.checkItem!==""){
                      var array=data.checkItem;
                      var len = array.length;
                      var htmls='';

                      for(var i=0;i<len;i++){
                          htmls+='<tr><td id="first'+i+'" style="padding:1em 1em;" colspan="3">'+array[i].first+'</td></tr>';
                          htmls+='<tr><td id="second'+i+'" style="padding:1em 1em;" colspan="3">'+array[i].second+'</td></tr>';
                        //有third存在
                          if(array[i].third){
                            var ms3 = array[i].ms3.split("，");

                          htmls+='<tr>';
                          htmls+='<td id="third'+i+'" colspan="3" style="padding:1em 1em;">'+array[i].third+'</td>';
                          htmls+='</tr>';
                          htmls+='<tr>';
                          htmls+='<td colspan="3" style="padding:1em 1em;">';
                          htmls+='<div style="padding:7.5% 0;width:47%;vertical-align:middle;">';
                          htmls+='<input type="checkbox" value="" class="webkit-appearance disI vm">';

                          if(ms3[0].split("（").length>1){

                              var sp=ms3[0].split("（");
                              var spstr=sp[1].replace("）","");
                              var sparr=spstr.split("；")
                              htmls+='<span class="disI vm f14" style="margin-left:3%;">'+sp[0]+'</span>';
                             /*  for(var j=0;j<sparr.length;j++){
                                  htmls+='<div style="padding:7.5% 0;display: inline-block;width:100%;vertical-align:middle;">';
                                  htmls+='<input type="checkbox" value="" class="webkit-appearance disI vm">';
                                  htmls+='<span class="disI vm f14" style="margin-left:3%;">'+sparr[j]+'</span>';
                                  htmls+=' </div>';
                              } */

                /*   		  }else{
                                htmls+='<span class="disI vm f14" style="margin-left:3%;">'+ms3[0]+'</span>';
                            }
                            htmls+='</div>';
                            htmls+='<div style="padding:7.5% 0;width:100%;vertical-align:middle;">';
                            htmls+='<input type="checkbox" value="" class="webkit-appearance disI vm">';
                            if(ms3[1].split("（").length>1){
                                var sp1=ms3[1].split("（");
                                var spstr1=sp1[1].replace("）","");
                                var sparr1=spstr1.split("；")
                                htmls+='<span class="disI vm f14" style="margin-left:3%;">'+sp1[0]+'</span>';
                                /* for(var k=0;k<sparr1.length;k++){
                                    htmls+='<div style="padding:7.5% 0;display: inline-block;width:100%;vertical-align:middle;">';
                                    htmls+='<input type="checkbox" value="" class="webkit-appearance disI vm">';
                                    htmls+='<span class="disI vm f14" style="margin-left:3%;">'+sparr1[k]+'</span>';
                                    htmls+=' </div>';
                                } */

                /*   }else{
                      htmls+='<span class="disI vm f14" style="margin-left:3%;">'+ms3[1]+'</span>';
                  }
                  htmls+=' </div>';
                  htmls+='</td> '
                  htmls+='</tr>'
                 }else{
                     if(array[i].ms2){
                         var ms2arr=array[i].ms2.split("，");
                         if(ms2arr.length>1){
                             htmls+='<tr><td id="third'+i+'" colspan="3" style="padding:1em 1em;">';
                             htmls+='<div style="padding:7.5% 0;width:100%;vertical-align:middle;">';
                             htmls+='<input type="checkbox" value="" class="webkit-appearance disI vm">';
                             if(ms2arr[0].split("（").length>1){
                              var sp=ms2arr[0].split("（");
                              var spstr=sp[1].replace("）","");
                              var sparr=spstr.split("；")
                              htmls+='<span class="disI vm f14" style="margin-left:3%;">'+sp[0]+'</span>';
                               for(var j=0;j<sparr.length;j++){
                                  htmls+='<div style="padding:7.5% 0;display: inline-block;width:100%;vertical-align:middle;">';
                                  if(sparr.length>1){
                                      htmls+='<input type="checkbox" value="" class="webkit-appearance disI vm">';
                                  }
                                  htmls+='<span class="disI vm f14" style="margin-left:3%;">'+sparr[j]+'</span>';
                                  htmls+=' </div>';
                              }

                          }else{
                              htmls+='<span class="disI vm f14" style="margin-left:3%;">'+ms2arr[0]+'</span>';
                          }

                             htmls+=' </div>';
                            htmls+='<div style="padding:7.5% 0;width:100%;vertical-align:middle;">';
                            htmls+='<input type="checkbox" value="" class="webkit-appearance disI vm">';
                            htmls+='<span class="disI vm f14" style="margin-left:3%;">'+ms2arr[1]+'</span>';
                            htmls+=' </div>';
                           htmls+='</td></tr>';
                         }else if(ms2arr.length=1){
                             var res=array[i].ms2;
                             if(array[i].ms2.indexOf("？")!= -1){
                                  res=array[i].ms2.replace("？","<input type='text'/>");
                             }

                             htmls+='<tr>';
                                    htmls+='<td id="secondms'+i+'" colspan="3" style="padding:1em 1em;">'+res+'</td>';
                                    htmls+='</tr>';
                         }

                     }
                 }

                   */

                //	  }

                if(data){
                    var str=data.result;
                    if(str!==""){
                        var arr=str.split(",");
                        arr.forEach(function(value,i){
                            if(value=="01"){
                                $("input[typevalue='01']").attr("checked","checked");
                            }else if(value=="02"){
                                $("input[typevalue='02']").attr("checked","checked");
                            }else if(value=="03"){
                                $("input[typevalue='03']").attr("checked","checked");
                            }else if(value=="04"){
                                $("input[typevalue='04']").attr("checked","checked");
                            }else if(value=="05"){
                                $("input[typevalue='05']").attr("checked","checked");
                            }

                        })
                    }else{
                        $("input[name='randomType']").removeAttr("checked");
                    }


                    var html=data.checkItem;
                    $("#checkItemInfo").html(html);
                    if(data.resultContent!==""){

                        //var obj=eval("("+data.resultContent+")");
                        var obj=data.resultContent;
                        for(var i=0;i<obj.length;i++){
                            for(var key in obj[i]){
                                //alert("key:"+key+","+"value:"+obj[i][key]);

                                $("input[id='"+key+"']").val(obj[i][key]);
                                if(obj[i][key]=="true"){
                                    $("input[id='"+key+"']").attr("checked","checked");
                                }


                            }
                        }
                    }
                }

                //$("#random_task_wrapper table").append(htmls);

                // }
            }

            //上报

            function doubleRandomcommit(arr) {
                //var data=window.doubleRandomInfo;
                var resultContent=[0,1,1];

                var result="";
                $("#randomstatustr input").each(function(e){
                    if($(this).is(":checked")){
                        result+=$(this).attr("typevalue")+",";
                    }

                })
                result=result.substr(0,result.length-1);
                /*   if(data.checkItem!==""){
                      var array=data.checkItem.split(",")
                      var len = array.length;
                      for(var i=0;i<len;i++){
                          var id="#goodimg_"+i;
                          var select="";
                          if($(id).attr("src")=="../repair/images/KpiactiveImg.png"){
                              select=1;
                              window.allRandomPic[i]="";
                          }else{
                              select=2;
                          }
                          resultContent.push(select);
                      }
                  } */
                //alert("join"+window.allRandomPic.join(','));

                /*   var path="";
                  if(window.allRandomPic!==[]){
                      path=window.allRandomPic.join(',')
                  }else{
                      path=",,";
                  } */
                //alert("path-"+path)
                var obj = "";
                if(window.picture_upImg1||window.picture_upImg1!=""){
                    obj += toJson("path", window.picture_upImg1) + "&";
                    obj += toJson("pathno", $("#correction_num").val()) + "&";
                    //alert("path"+$("#correction_num").val());
                }
                if(window.picture_upImg2||window.picture_upImg2!=""){
                    obj += toJson("path2", window.picture_upImg2) + "&";
                    obj += toJson("pathno2", $("#rectification_num").val()) + "&";
                    //alert("path2"+window.picture_upImg2);
                }
                if(window.picture_upImg3||window.picture_upImg3!=""){
                    obj += toJson("path3", window.picture_upImg3) + "&";
                    obj += toJson("pathno3", $("#limitoriginal_num").val()) + "&";
                    //alert("path3"+window.picture_upImg3);
                }
                if(window.picture_upImg4||window.picture_upImg3!=""){
                    obj += toJson("path4", window.picture_upImg4) + "&";
                    obj += toJson("pathno4", $("#stopillegal_num").val()) + "&";
                    //alert("path4"+window.picture_upImg4);
                }
                if(window.picture_upImg5||window.picture_upImg3!=""){
                    obj += toJson("path5", window.picture_upImg5) + "&";
                    obj += toJson("pathno5", $("#stopwwork_num").val()) + "&";
                    //alert("path5"+window.picture_upImg5);
                }
                //alert($("#random_id").val())
                obj += toJson("id", $("#random_id").val()) + "&";//id
                obj += toJson("result", result) + "&";//id
                obj += toJson("resultContent", arr) ;//抽查结果

                //obj += toJson("path", ",,");//图片路径
                doPost("ap_updateRandomInfo.action", obj, function (data) {
                    window.randomcommitFlag=0;
                    $("#doubleRandomcommit").removeClass("gray_gray_background");
                    $("#doubleRandomcommit").addClass("orange_background");
                    if (data.code == 0) {
                        toast(data.message);

                        waitJumpPage("../doubleRandom/doubleRandomList.html");
                    } else {
                        toast(data.message);
                    }
                }, "", "");
            }

            /**
             * 直接拍照
             */
            function getdoublePhotograph(index) {
                var html='<div class="max-dialog">'
                    +   '<div class="max-dialog-masker"></div>'
                    +   '<div style="position:absolute;width:100%;bottom:0;text-align:center;background:#fff;">'
                    +       '<div style="padding:15px;border-bottom:solid 1px #eee;" class="btn1">拍照</div>'
                    +       '<div style="padding:15px;" class="btn2">相册</div>'
                    +   '</div>'
                    +'</div>';
                var $html=$(html).appendTo('.ui-page-active');
                $html.find(".max-dialog-masker").click(function () {
                    $html.remove();
                });
                $html.find(".btn1").click(function () {
                    if(index==1){
                        navigator.camera.getPicture(getdoubleRandowOnlyPhoto, userPicFail, {
                            //destinationType: Camera.DestinationType.DATA_URL
                        });
                    }else if(index==2){
                        navigator.camera.getPicture(getdoubleRandowOnlyPhoto2, userPicFail, {
                            //destinationType: Camera.DestinationType.DATA_URL
                        });
                    }else if(index==3){
                        navigator.camera.getPicture(getdoubleRandowOnlyPhoto3, userPicFail, {
                            //destinationType: Camera.DestinationType.DATA_URL
                        });
                    }else if(index==4){
                        navigator.camera.getPicture(getdoubleRandowOnlyPhoto4, userPicFail, {
                            //destinationType: Camera.DestinationType.DATA_URL
                        });
                    }else if(index==5){
                        navigator.camera.getPicture(getdoubleRandowOnlyPhoto5, userPicFail, {
                            //destinationType: Camera.DestinationType.DATA_URL
                        });
                    }

                    $html.remove();
                });
                $html.find(".btn2").click(function () {
                    if(index==1){
                        navigator.camera.getPicture(getdoubleRandowOnlyPhoto, userPicFail, {
                            //destinationType: Camera.DestinationType.DATA_URL
                            sourceType:Camera.PictureSourceType.PHOTOLIBRARY
                        });
                    }else if(index==2){
                        navigator.camera.getPicture(getdoubleRandowOnlyPhoto2, userPicFail, {
                            //destinationType: Camera.DestinationType.DATA_URL
                            sourceType:Camera.PictureSourceType.PHOTOLIBRARY
                        });
                    }else if(index==3){
                        navigator.camera.getPicture(getdoubleRandowOnlyPhoto3, userPicFail, {
                            //destinationType: Camera.DestinationType.DATA_URL
                            sourceType:Camera.PictureSourceType.PHOTOLIBRARY
                        });
                    }else if(index==4){
                        navigator.camera.getPicture(getdoubleRandowOnlyPhoto4, userPicFail, {
                            //destinationType: Camera.DestinationType.DATA_URL
                            sourceType:Camera.PictureSourceType.PHOTOLIBRARY
                        });
                    }else if(index==5){
                        navigator.camera.getPicture(getdoubleRandowOnlyPhoto5, userPicFail, {
                            //destinationType: Camera.DestinationType.DATA_URL
                            sourceType:Camera.PictureSourceType.PHOTOLIBRARY
                        });
                    }

                    $html.remove();
                });

            }
            /*获取图片的成功回调*/
            /* function getdoubleRandowOnlyPhoto(url) {
                console.log("开始调用方法：" + url);
                compressImage(url, 300, function (base64) {
                    console.log("获取到了图片");
                    var num=window.imgcurrentNum[1];
                   // alert(num)
                    if (!isNull(window.picture_array[num]) && window.picture_array[num].length > 0) {
                        //拍非第一张图片
                        var leng = window.picture_array[num].length;
                        window.picture_array[num][leng] = base64;
                        var commodity_add_img_info = ' <div class="imgdiv">';
                        commodity_add_img_info += '<img class="delimg" src="/staitc/resources/images/del3.png">';
                        commodity_add_img_info += '<img class="goodsimgone" src="' + base64 + '">';
                        commodity_add_img_info += '</div>';
                        window.upload_addimg="taskEditImg_"+num;
                        window.upload_imgscroll="taskEditImgScroll_"+num;
                        window.upload_imgwrapper="taskEditImgWrapper_"+num;
                        imgWidthRandom(window.upload_imgscroll, window.upload_imgwrapper, window.picture_array[num].length, window.upload_addimg);
                        //$("#good_num_").val(window.picture_array[num].length + "/5");

                        var $commodity_add_img_info = createListRow(commodity_add_img_info).appendTo("#" + window.upload_addimg);
                        var $add_img = "";
                      //  alert("window.picture_array[num].length="+window.picture_array[num].length)
                        if (window.picture_array[num].length > 2) {
                            $("#" + window.upload_addimg + " #choice1_"+num).remove();
                        } else {
                            var add_img = '<img class="goodsimgone" style="padding-top:2em;padding-left:1.5em;" src="/staitc/resources/images/icon_add_photo.png" id="choicemore_'+num+'">';
                            $("#" + window.upload_addimg + " #choicemore_"+num).remove();
                            $add_img = createListRow(add_img).appendTo("#" + window.upload_addimg);
                            $add_img.click(function (e) {
                            //	alert("addclick222");
                            //	alert("当前num"+num)
                                window.imgcurrentNum[1]=num;
                                getdoublePhotograph();
                            });
                        }
                        $commodity_add_img_info.data('data', window.picture_array[num][leng]);
                        $commodity_add_img_info.listen("quickClick", function (e) {
                            //点击事件
                            //alert("当前num"+num)
                           // alert("长度"+window.picture_array[num].length)

                            window.upload_addimg="taskEditImg_"+num;
                            var data = $(e.currentTarget).data("data");
                            $(e.currentTarget).hide();
                            if (window.picture_array[num].length < 4) {
                            var add_img = '<img class="goodsimgone" style="margin-left:1.5em;padding-top:2em;" src="/staitc/resources/images/icon_add_photo.png" id="choicemore_'+num+'">';
                            $("#" + window.upload_addimg + " #choicemore_"+num).remove();
                            var $add_img = createListRow(add_img).appendTo("#" + window.upload_addimg);
                              }
                            $add_img.click(function (e) {
                           // 	alert("addclick223");
                            //	alert("当前num"+num);
                                window.imgcurrentNum[1]=num;
                                getdoublePhotograph();
                            });
                            window.upload_addimg="taskEditImg_"+num;
                            imgWidthRandom(window.upload_imgscroll, window.upload_imgwrapper, window.picture_array[num].length, window.upload_addimg);
                        //    alert("当前长度"+window.picture_array[num].length);
                              for (var i = 0; i < window.picture_array[num].length; i++) {
                                if (window.picture_array[num][i] == data) {
                                    //$("#good_num").val(window.picture_array[num].length - 1 + "/5");
                                    window.picture_array[num].splice(i, 1);
                                    $(".max-confirm2").remove();
                                    break;
                                }
                            }
                        });
                    } else {
                        $("#" + window.upload_addimg).empty();
                        console.log("第一张图片");
                        //拍第一张图片
                       // alert("第一张图片");
                        window.picture_array[num] = new Array();
                        window.picture_array[num][0] = base64;
                        var commodity_add_img_info = "";
                        commodity_add_img_info += ' <div class="imgdiv">';
                        commodity_add_img_info += '     <img class="delimg" src="/staitc/resources/images/del3.png">';
                        commodity_add_img_info += '     <img class="goodsimgone" src="' + base64 + '">';
                        commodity_add_img_info += ' </div>';
                        var upload_addimg="taskEditImg_"+num;
                        var taskEditImgScroll="taskEditImgScroll_"+num;
                        var taskEditImgWrapper="taskEditImgWrapper_"+num;
                        window.upload_addimg=upload_addimg;
                        imgWidthRandom(taskEditImgScroll, taskEditImgWrapper, window.picture_array[num].length, upload_addimg);

                        var $commodity_add_img = createListRow(commodity_add_img_info).appendTo("#" + window.upload_addimg);
                        //$("#good_num").val(window.picture_array[num].length + "/5");
                        var $add_img = "";
                        if (window.picture_array[num].length < 4) {
                            var add_img = '<img class="goodsimgone" style="padding-top:2em;margin-left:1.5em;" src="/staitc/resources/images/icon_add_photo.png" id="choicemore_'+num+'">';
                            $("#" + window.upload_addimg + " #choicemore_"+num).remove();
                            $add_img = createListRow(add_img).appendTo("#" + window.upload_addimg);
                            $add_img.click(function (e) {
                            //	alert("11")
                                window.imgcurrentNum[1]=num;
                                getdoublePhotograph();
                            });
                        }

                        $commodity_add_img.data('data', window.picture_array[num][0]);
                        $commodity_add_img.listen("quickClick", function (e) {
                            //点击事件
                            var data = $(e.currentTarget).data("data");
                            //alert("长度"+window.picture_array[num].length)
                            $(e.currentTarget).hide();
                             if (window.picture_array[num].length < 3) {
                            var add_img = '<img class="goodsimgone" style="padding-top:2em;padding-left:1.5em;" src="/staitc/resources/images/icon_add_photo.png" id="choicemore_'+num+'">';
                            $("#" + window.upload_addimg + " #choicemore_"+num).remove();
                            var $add_img = createListRow(add_img).appendTo("#" + window.upload_addimg);
                              }
                            $add_img.click(function (e) {
                                // alert("addclick");
                            //	alert($(e.currentTarget).attr("class"))
                                window.imgcurrentNum[1]=num;
                                getdoublePhotograph();

                            });
                            for (var i = 0; i < window.picture_array[num].length; i++) {
                                if (window.picture_array[num][i] == data) {
                                    window.picture_array[num].splice(i, 1);
                                    //$("#good_num").val(window.picture_array[num].length + "/5");
                                    $(".max-confirm2").remove();
                                    break;
                                }
                            }
                        });
                    }
                });
                console.log("图片：" + window.picture_array[num]);
            } */
            function imgWidthRandom(scrollid, wrapper, array, id) {
                if (array > 2) {
                    $("#" + scrollid)[0].style.width = 185 + "%";

                    $("#" + id)[0].style.width = 185 + "%";
                    initScroll({
                        "wrapper": wrapper,
                        "dir": "x",
                        "bounce": true,
                        "scrollBar": true
                    });
                } else {
                    $("#" + scrollid)[0].style.width = window.localInnerWidth + "px";
                    $("#" + id)[0].style.width = 160 + "%";
                    initScroll({
                        "wrapper": wrapper,
                        "dir": "x",
                        "bounce": true,
                        "scrollBar": true
                    });
                }

            }
            /*获取图片的成功回调*/
            function getdoubleRandowOnlyPhoto(url) {
                console.log("开始调用方法：" + url);
                compressImage(url, 300, function (base64) {
                    console.log("获取到了图片");
                    if (!isNull(window.picture_array1) && window.picture_array1.length > 0) {
                        //拍非第一张图片
                        var leng = window.picture_array1.length;
                        window.picture_array1[leng] = base64;
                        var commodity_add_img_info = ' <div class="imgdiv">';
                        commodity_add_img_info += '<img class="delimg" src="/staitc/resources/images/del3.png">';
                        commodity_add_img_info += '<img class="goodsimgone" src="' + base64 + '">';
                        commodity_add_img_info += '</div>';
                        imgWidth(window.upload_imgscroll, window.upload_imgwrapper, window.picture_array1.length, window.upload_addimg);
                        $("#good_num").val(window.picture_array1.length + "/5");
                        var $commodity_add_img_info = createListRow(commodity_add_img_info).appendTo("#" + window.upload_addimg);
                        var $add_img = "";
                        if (window.picture_array1.length > 4) {
                            $("#" + window.upload_addimg + " #choice1").remove();
                        } else {
                            var add_img = '<img class="goodsimgone" style="padding-top:2em;padding-left:1.5em;" src="/staitc/resources/images/icon_add_photo.png" id="choice1">';
                            $("#" + window.upload_addimg + " #choice1").remove();
                            $add_img = createListRow(add_img).appendTo("#" + window.upload_addimg);
                            $add_img.click(function (e) {
                                getdoubleRandowOnlyPhoto();
                            });
                        }
                        $commodity_add_img_info.data('data', window.picture_array1[leng]);
                        $commodity_add_img_info.listen("quickClick", function (e) {
                            //点击事件
                            var data = $(e.currentTarget).data("data");
                            $(e.currentTarget).hide();
                            //if (window.picture_array1.length < 5) {
                            var add_img = '<img class="goodsimgone" style="margin-left:1.5em;padding-top:2em;" src="/staitc/resources/images/icon_add_photo.png" id="choice1">';
                            $("#" + window.upload_addimg + " #choice1").remove();
                            var $add_img = createListRow(add_img).appendTo("#" + window.upload_addimg);
                            //  }
                            $add_img.click(function (e) {
                                getdoubleRandowOnlyPhoto();
                            });
                            imgWidth(window.upload_imgscroll, window.upload_imgwrapper, window.picture_array1.length, window.upload_addimg);
                            for (var i = 0; i < window.picture_array1.length; i++) {
                                if (window.picture_array1[i] == data) {
                                    $("#good_num").val(window.picture_array1.length - 1 + "/5");
                                    window.picture_array1.splice(i, 1);
                                    $(".max-confirm2").remove();
                                    break;
                                }
                            }
                            //  alert(window.picture_array1.length)
                        });
                    } else {
                        $("#" + window.upload_addimg).empty();
                        console.log("第一张图片");
                        //拍第一张图片
                        window.picture_array1 = new Array();
                        window.picture_array1[0] = base64;
                        var commodity_add_img_info = "";
                        commodity_add_img_info += ' <div class="imgdiv">';
                        commodity_add_img_info += '     <img class="delimg" src="/staitc/resources/images/del3.png">';
                        commodity_add_img_info += '     <img class="goodsimgone" src="' + base64 + '">';
                        commodity_add_img_info += ' </div>';
                        imgWidth(window.upload_imgscroll, window.upload_imgwrapper, window.picture_array1.length, window.upload_addimg);
                        var $commodity_add_img = createListRow(commodity_add_img_info).appendTo("#" + window.upload_addimg);
                        $("#good_num").val(window.picture_array1.length + "/5");
                        var $add_img = "";
                        if (window.picture_array1.length < 4) {
                            var add_img = '<img class="goodsimgone" style="padding-top:2em;margin-left:1.5em;" src="/staitc/resources/images/icon_add_photo.png" id="choice1">';
                            $("#" + window.upload_addimg + " #choice1").remove();
                            $add_img = createListRow(add_img).appendTo("#" + window.upload_addimg);
                            $add_img.click(function (e) {
                                getdoubleRandowOnlyPhoto();
                            });
                        }

                        $commodity_add_img.data('data', window.picture_array1[0]);
                        $commodity_add_img.listen("quickClick", function (e) {
                            //点击事件
                            var data = $(e.currentTarget).data("data");
                            $(e.currentTarget).hide();
                            //  if (window.picture_array1.length < 5) {
                            var add_img = '<img class="goodsimgone" style="padding-top:2em;padding-left:1.5em;" src="/staitc/resources/images/icon_add_photo.png" id="choice1">';
                            $("#" + window.upload_addimg + " #choice1").remove();
                            var $add_img = createListRow(add_img).appendTo("#" + window.upload_addimg);
                            //  }
                            $add_img.click(function (e) {
                                getdoubleRandowOnlyPhoto();
                            });
                            for (var i = 0; i < window.picture_array1.length; i++) {
                                if (window.picture_array1[i] == data) {
                                    window.picture_array1.splice(i, 1);
                                    $("#good_num").val(window.picture_array1.length + "/5");
                                    $(".max-confirm2").remove();
                                    break;
                                }
                            }
                        });
                    }
                });
                console.log("图片：" + window.picture_array1);
            }
            function getdoubleRandowOnlyPhoto2(url) {
                console.log("开始调用方法：" + url);
                compressImage(url, 300, function (base64) {
                    console.log("获取到了图片");
                    if (!isNull(window.picture_array2) && window.picture_array2.length > 0) {
                        //拍非第一张图片
                        var leng = window.picture_array2.length;
                        window.picture_array2[leng] = base64;
                        var commodity_add_img_info = ' <div class="imgdiv">';
                        commodity_add_img_info += '<img class="delimg" src="/staitc/resources/images/del3.png">';
                        commodity_add_img_info += '<img class="goodsimgone" src="' + base64 + '">';
                        commodity_add_img_info += '</div>';
                        imgWidth(window.upload_imgscroll, window.upload_imgwrapper, window.picture_array2.length, window.upload_addimg);
                        $("#good_num").val(window.picture_array2.length + "/5");
                        var $commodity_add_img_info = createListRow(commodity_add_img_info).appendTo("#" + window.upload_addimg);
                        var $add_img = "";
                        if (window.picture_array2.length > 4) {
                            $("#" + window.upload_addimg + " #choice2").remove();
                        } else {
                            var add_img = '<img class="goodsimgone" style="padding-top:2em;padding-left:1.5em;" src="/staitc/resources/images/icon_add_photo.png" id="choice2">';
                            $("#" + window.upload_addimg + " #choice2").remove();
                            $add_img = createListRow(add_img).appendTo("#" + window.upload_addimg);
                            $add_img.click(function (e) {
                                getdoubleRandowOnlyPhoto();
                            });
                        }
                        $commodity_add_img_info.data('data', window.picture_array2[leng]);
                        $commodity_add_img_info.listen("quickClick", function (e) {
                            //点击事件
                            var data = $(e.currentTarget).data("data");
                            $(e.currentTarget).hide();
                            //if (window.picture_array2.length < 5) {
                            var add_img = '<img class="goodsimgone" style="margin-left:1.5em;padding-top:2em;" src="/staitc/resources/images/icon_add_photo.png" id="choice2">';
                            $("#" + window.upload_addimg + " #choice2").remove();
                            var $add_img = createListRow(add_img).appendTo("#" + window.upload_addimg);
                            //  }
                            $add_img.click(function (e) {
                                getdoubleRandowOnlyPhoto();
                            });
                            imgWidth(window.upload_imgscroll, window.upload_imgwrapper, window.picture_array2.length, window.upload_addimg);
                            for (var i = 0; i < window.picture_array2.length; i++) {
                                if (window.picture_array2[i] == data) {
                                    $("#good_num").val(window.picture_array2.length - 1 + "/5");
                                    window.picture_array2.splice(i, 1);
                                    $(".max-confirm2").remove();
                                    break;
                                }
                            }
                        });
                    } else {
                        $("#" + window.upload_addimg).empty();
                        console.log("第一张图片");
                        //拍第一张图片
                        window.picture_array2 = new Array();
                        window.picture_array2[0] = base64;
                        var commodity_add_img_info = "";
                        commodity_add_img_info += ' <div class="imgdiv">';
                        commodity_add_img_info += '     <img class="delimg" src="/staitc/resources/images/del3.png">';
                        commodity_add_img_info += '     <img class="goodsimgone" src="' + base64 + '">';
                        commodity_add_img_info += ' </div>';
                        imgWidth(window.upload_imgscroll, window.upload_imgwrapper, window.picture_array2.length, window.upload_addimg);
                        var $commodity_add_img = createListRow(commodity_add_img_info).appendTo("#" + window.upload_addimg);
                        $("#good_num").val(window.picture_array2.length + "/5");
                        var $add_img = "";
                        if (window.picture_array2.length < 4) {
                            var add_img = '<img class="goodsimgone" style="padding-top:2em;margin-left:1.5em;" src="/staitc/resources/images/icon_add_photo.png" id="choice2">';
                            $("#" + window.upload_addimg + " #choice2").remove();
                            $add_img = createListRow(add_img).appendTo("#" + window.upload_addimg);
                            $add_img.click(function (e) {
                                getdoubleRandowOnlyPhoto();
                            });
                        }

                        $commodity_add_img.data('data', window.picture_array2[0]);
                        $commodity_add_img.listen("quickClick", function (e) {
                            //点击事件
                            var data = $(e.currentTarget).data("data");
                            $(e.currentTarget).hide();
                            //  if (window.picture_array2.length < 5) {
                            var add_img = '<img class="goodsimgone" style="padding-top:2em;padding-left:1.5em;" src="/staitc/resources/images/icon_add_photo.png" id="choice2">';
                            $("#" + window.upload_addimg + " #choice2").remove();
                            var $add_img = createListRow(add_img).appendTo("#" + window.upload_addimg);
                            //  }
                            $add_img.click(function (e) {
                                getdoubleRandowOnlyPhoto();
                            });
                            for (var i = 0; i < window.picture_array2.length; i++) {
                                if (window.picture_array2[i] == data) {
                                    window.picture_array2.splice(i, 1);
                                    $("#good_num").val(window.picture_array2.length + "/5");
                                    $(".max-confirm2").remove();
                                    break;
                                }
                            }
                        });
                    }
                });
                console.log("图片：" + window.picture_array2);
            }

            function getdoubleRandowOnlyPhoto3(url) {
                console.log("开始调用方法：" + url);
                compressImage(url, 300, function (base64) {
                    console.log("获取到了图片");
                    if (!isNull(window.picture_array3) && window.picture_array3.length > 0) {
                        //拍非第一张图片
                        var leng = window.picture_array3.length;
                        window.picture_array3[leng] = base64;
                        var commodity_add_img_info = ' <div class="imgdiv">';
                        commodity_add_img_info += '<img class="delimg" src="/staitc/resources/images/del3.png">';
                        commodity_add_img_info += '<img class="goodsimgone" src="' + base64 + '">';
                        commodity_add_img_info += '</div>';
                        imgWidth(window.upload_imgscroll, window.upload_imgwrapper, window.picture_array3.length, window.upload_addimg);
                        $("#good_num").val(window.picture_array3.length + "/5");
                        var $commodity_add_img_info = createListRow(commodity_add_img_info).appendTo("#" + window.upload_addimg);
                        var $add_img = "";
                        if (window.picture_array3.length > 4) {
                            $("#" + window.upload_addimg + " #choice3").remove();
                        } else {
                            var add_img = '<img class="goodsimgone" style="padding-top:2em;padding-left:1.5em;" src="/staitc/resources/images/icon_add_photo.png" id="choice3">';
                            $("#" + window.upload_addimg + " #choice3").remove();
                            $add_img = createListRow(add_img).appendTo("#" + window.upload_addimg);
                            $add_img.click(function (e) {
                                getdoubleRandowOnlyPhoto();
                            });
                        }
                        $commodity_add_img_info.data('data', window.picture_array3[leng]);
                        $commodity_add_img_info.listen("quickClick", function (e) {
                            //点击事件
                            var data = $(e.currentTarget).data("data");
                            $(e.currentTarget).hide();
                            //if (window.picture_array3.length < 5) {
                            var add_img = '<img class="goodsimgone" style="margin-left:1.5em;padding-top:2em;" src="/staitc/resources/images/icon_add_photo.png" id="choice3">';
                            $("#" + window.upload_addimg + " #choice3").remove();
                            var $add_img = createListRow(add_img).appendTo("#" + window.upload_addimg);
                            //  }
                            $add_img.click(function (e) {
                                getdoubleRandowOnlyPhoto();
                            });
                            imgWidth(window.upload_imgscroll, window.upload_imgwrapper, window.picture_array3.length, window.upload_addimg);
                            for (var i = 0; i < window.picture_array3.length; i++) {
                                if (window.picture_array3[i] == data) {
                                    $("#good_num").val(window.picture_array3.length - 1 + "/5");
                                    window.picture_array3.splice(i, 1);
                                    $(".max-confirm2").remove();
                                    break;
                                }
                            }
                        });
                    } else {
                        $("#" + window.upload_addimg).empty();
                        console.log("第一张图片");
                        //拍第一张图片
                        window.picture_array3 = new Array();
                        window.picture_array3[0] = base64;
                        var commodity_add_img_info = "";
                        commodity_add_img_info += ' <div class="imgdiv">';
                        commodity_add_img_info += '     <img class="delimg" src="/staitc/resources/images/del3.png">';
                        commodity_add_img_info += '     <img class="goodsimgone" src="' + base64 + '">';
                        commodity_add_img_info += ' </div>';
                        imgWidth(window.upload_imgscroll, window.upload_imgwrapper, window.picture_array3.length, window.upload_addimg);
                        var $commodity_add_img = createListRow(commodity_add_img_info).appendTo("#" + window.upload_addimg);
                        $("#good_num").val(window.picture_array3.length + "/5");
                        var $add_img = "";
                        if (window.picture_array3.length < 4) {
                            var add_img = '<img class="goodsimgone" style="padding-top:2em;margin-left:1.5em;" src="/staitc/resources/images/icon_add_photo.png" id="choice3">';
                            $("#" + window.upload_addimg + " #choice3").remove();
                            $add_img = createListRow(add_img).appendTo("#" + window.upload_addimg);
                            $add_img.click(function (e) {
                                getdoubleRandowOnlyPhoto();
                            });
                        }

                        $commodity_add_img.data('data', window.picture_array3[0]);
                        $commodity_add_img.listen("quickClick", function (e) {
                            //点击事件
                            var data = $(e.currentTarget).data("data");
                            $(e.currentTarget).hide();
                            //  if (window.picture_array3.length < 5) {
                            var add_img = '<img class="goodsimgone" style="padding-top:2em;padding-left:1.5em;" src="/staitc/resources/images/icon_add_photo.png" id="choice3">';
                            $("#" + window.upload_addimg + " #choice3").remove();
                            var $add_img = createListRow(add_img).appendTo("#" + window.upload_addimg);
                            //  }
                            $add_img.click(function (e) {
                                getdoubleRandowOnlyPhoto();
                            });
                            for (var i = 0; i < window.picture_array3.length; i++) {
                                if (window.picture_array3[i] == data) {
                                    window.picture_array3.splice(i, 1);
                                    $("#good_num").val(window.picture_array3.length + "/5");
                                    $(".max-confirm2").remove();
                                    break;
                                }
                            }
                        });
                    }
                });
                console.log("图片：" + window.picture_array3);
            }

            function getdoubleRandowOnlyPhoto4(url) {
                console.log("开始调用方法：" + url);
                compressImage(url, 300, function (base64) {
                    console.log("获取到了图片");
                    if (!isNull(window.picture_array4) && window.picture_array4.length > 0) {
                        //拍非第一张图片
                        var leng = window.picture_array4.length;
                        window.picture_array4[leng] = base64;
                        var commodity_add_img_info = ' <div class="imgdiv">';
                        commodity_add_img_info += '<img class="delimg" src="/staitc/resources/images/del3.png">';
                        commodity_add_img_info += '<img class="goodsimgone" src="' + base64 + '">';
                        commodity_add_img_info += '</div>';
                        imgWidth(window.upload_imgscroll, window.upload_imgwrapper, window.picture_array4.length, window.upload_addimg);
                        $("#good_num").val(window.picture_array4.length + "/5");
                        var $commodity_add_img_info = createListRow(commodity_add_img_info).appendTo("#" + window.upload_addimg);
                        var $add_img = "";
                        if (window.picture_array4.length > 4) {
                            $("#" + window.upload_addimg + " #choice4").remove();
                        } else {
                            var add_img = '<img class="goodsimgone" style="padding-top:2em;padding-left:1.5em;" src="/staitc/resources/images/icon_add_photo.png" id="choice4">';
                            $("#" + window.upload_addimg + " #choice4").remove();
                            $add_img = createListRow(add_img).appendTo("#" + window.upload_addimg);
                            $add_img.click(function (e) {
                                getdoubleRandowOnlyPhoto();
                            });
                        }
                        $commodity_add_img_info.data('data', window.picture_array4[leng]);
                        $commodity_add_img_info.listen("quickClick", function (e) {
                            //点击事件
                            var data = $(e.currentTarget).data("data");
                            $(e.currentTarget).hide();
                            //if (window.picture_array4.length < 5) {
                            var add_img = '<img class="goodsimgone" style="margin-left:1.5em;padding-top:2em;" src="/staitc/resources/images/icon_add_photo.png" id="choice4">';
                            $("#" + window.upload_addimg + " #choice4").remove();
                            var $add_img = createListRow(add_img).appendTo("#" + window.upload_addimg);
                            //  }
                            $add_img.click(function (e) {
                                getdoubleRandowOnlyPhoto();
                            });
                            imgWidth(window.upload_imgscroll, window.upload_imgwrapper, window.picture_array4.length, window.upload_addimg);
                            for (var i = 0; i < window.picture_array4.length; i++) {
                                if (window.picture_array4[i] == data) {
                                    $("#good_num").val(window.picture_array4.length - 1 + "/5");
                                    window.picture_array4.splice(i, 1);
                                    $(".max-confirm2").remove();
                                    break;
                                }
                            }
                        });
                    } else {
                        $("#" + window.upload_addimg).empty();
                        console.log("第一张图片");
                        //拍第一张图片
                        window.picture_array4 = new Array();
                        window.picture_array4[0] = base64;
                        var commodity_add_img_info = "";
                        commodity_add_img_info += ' <div class="imgdiv">';
                        commodity_add_img_info += '     <img class="delimg" src="/staitc/resources/images/del3.png">';
                        commodity_add_img_info += '     <img class="goodsimgone" src="' + base64 + '">';
                        commodity_add_img_info += ' </div>';
                        imgWidth(window.upload_imgscroll, window.upload_imgwrapper, window.picture_array4.length, window.upload_addimg);
                        var $commodity_add_img = createListRow(commodity_add_img_info).appendTo("#" + window.upload_addimg);
                        $("#good_num").val(window.picture_array4.length + "/5");
                        var $add_img = "";
                        if (window.picture_array4.length < 4) {
                            var add_img = '<img class="goodsimgone" style="padding-top:2em;margin-left:1.5em;" src="/staitc/resources/images/icon_add_photo.png" id="choice4">';
                            $("#" + window.upload_addimg + " #choice4").remove();
                            $add_img = createListRow(add_img).appendTo("#" + window.upload_addimg);
                            $add_img.click(function (e) {
                                getdoubleRandowOnlyPhoto();
                            });
                        }

                        $commodity_add_img.data('data', window.picture_array4[0]);
                        $commodity_add_img.listen("quickClick", function (e) {
                            //点击事件
                            var data = $(e.currentTarget).data("data");
                            $(e.currentTarget).hide();
                            //  if (window.picture_array4.length < 5) {
                            var add_img = '<img class="goodsimgone" style="padding-top:2em;padding-left:1.5em;" src="/staitc/resources/images/icon_add_photo.png" id="choice4">';
                            $("#" + window.upload_addimg + " #choice4").remove();
                            var $add_img = createListRow(add_img).appendTo("#" + window.upload_addimg);
                            //  }
                            $add_img.click(function (e) {
                                getdoubleRandowOnlyPhoto();
                            });
                            for (var i = 0; i < window.picture_array4.length; i++) {
                                if (window.picture_array4[i] == data) {
                                    window.picture_array4.splice(i, 1);
                                    $("#good_num").val(window.picture_array4.length + "/5");
                                    $(".max-confirm2").remove();
                                    break;
                                }
                            }
                        });
                    }
                });
                console.log("图片：" + window.picture_array4);
            }

            function getdoubleRandowOnlyPhoto5(url) {
                console.log("开始调用方法：" + url);
                compressImage(url, 300, function (base64) {
                    console.log("获取到了图片");
                    if (!isNull(window.picture_array5) && window.picture_array5.length > 0) {
                        //拍非第一张图片
                        var leng = window.picture_array5.length;
                        window.picture_array5[leng] = base64;
                        var commodity_add_img_info = ' <div class="imgdiv">';
                        commodity_add_img_info += '<img class="delimg" src="/staitc/resources/images/del3.png">';
                        commodity_add_img_info += '<img class="goodsimgone" src="' + base64 + '">';
                        commodity_add_img_info += '</div>';
                        imgWidth(window.upload_imgscroll, window.upload_imgwrapper, window.picture_array5.length, window.upload_addimg);
                        $("#good_num").val(window.picture_array5.length + "/5");
                        var $commodity_add_img_info = createListRow(commodity_add_img_info).appendTo("#" + window.upload_addimg);
                        var $add_img = "";
                        if (window.picture_array5.length > 4) {
                            $("#" + window.upload_addimg + " #choice5").remove();
                        } else {
                            var add_img = '<img class="goodsimgone" style="padding-top:2em;padding-left:1.5em;" src="/staitc/resources/images/icon_add_photo.png" id="choice5">';
                            $("#" + window.upload_addimg + " #choice5").remove();
                            $add_img = createListRow(add_img).appendTo("#" + window.upload_addimg);
                            $add_img.click(function (e) {
                                getdoubleRandowOnlyPhoto();
                            });
                        }
                        $commodity_add_img_info.data('data', window.picture_array5[leng]);
                        $commodity_add_img_info.listen("quickClick", function (e) {
                            //点击事件
                            var data = $(e.currentTarget).data("data");
                            $(e.currentTarget).hide();
                            //if (window.picture_array5.length < 5) {
                            var add_img = '<img class="goodsimgone" style="margin-left:1.5em;padding-top:2em;" src="/staitc/resources/images/icon_add_photo.png" id="choice5">';
                            $("#" + window.upload_addimg + " #choice5").remove();
                            var $add_img = createListRow(add_img).appendTo("#" + window.upload_addimg);
                            //  }
                            $add_img.click(function (e) {
                                getdoubleRandowOnlyPhoto();
                            });
                            imgWidth(window.upload_imgscroll, window.upload_imgwrapper, window.picture_array5.length, window.upload_addimg);
                            for (var i = 0; i < window.picture_array5.length; i++) {
                                if (window.picture_array5[i] == data) {
                                    $("#good_num").val(window.picture_array5.length - 1 + "/5");
                                    window.picture_array5.splice(i, 1);
                                    $(".max-confirm2").remove();
                                    break;
                                }
                            }
                        });
                    } else {
                        $("#" + window.upload_addimg).empty();
                        console.log("第一张图片");
                        //拍第一张图片
                        window.picture_array5 = new Array();
                        window.picture_array5[0] = base64;
                        var commodity_add_img_info = "";
                        commodity_add_img_info += ' <div class="imgdiv">';
                        commodity_add_img_info += '     <img class="delimg" src="/staitc/resources/images/del3.png">';
                        commodity_add_img_info += '     <img class="goodsimgone" src="' + base64 + '">';
                        commodity_add_img_info += ' </div>';
                        imgWidth(window.upload_imgscroll, window.upload_imgwrapper, window.picture_array5.length, window.upload_addimg);
                        var $commodity_add_img = createListRow(commodity_add_img_info).appendTo("#" + window.upload_addimg);
                        $("#good_num").val(window.picture_array5.length + "/5");
                        var $add_img = "";
                        if (window.picture_array5.length < 4) {
                            var add_img = '<img class="goodsimgone" style="padding-top:2em;margin-left:1.5em;" src="/staitc/resources/images/icon_add_photo.png" id="choice5">';
                            $("#" + window.upload_addimg + " #choice5").remove();
                            $add_img = createListRow(add_img).appendTo("#" + window.upload_addimg);
                            $add_img.click(function (e) {
                                getdoubleRandowOnlyPhoto();
                            });
                        }

                        $commodity_add_img.data('data', window.picture_array5[0]);
                        $commodity_add_img.listen("quickClick", function (e) {
                            //点击事件
                            var data = $(e.currentTarget).data("data");
                            $(e.currentTarget).hide();
                            //  if (window.picture_array5.length < 5) {
                            var add_img = '<img class="goodsimgone" style="padding-top:2em;padding-left:1.5em;" src="/staitc/resources/images/icon_add_photo.png" id="choice5">';
                            $("#" + window.upload_addimg + " #choice5").remove();
                            var $add_img = createListRow(add_img).appendTo("#" + window.upload_addimg);
                            //  }
                            $add_img.click(function (e) {
                                getdoubleRandowOnlyPhoto();
                            });
                            for (var i = 0; i < window.picture_array5.length; i++) {
                                if (window.picture_array5[i] == data) {
                                    window.picture_array5.splice(i, 1);
                                    $("#good_num").val(window.picture_array5.length + "/5");
                                    $(".max-confirm2").remove();
                                    break;
                                }
                            }
                        });
                    }
                });
                console.log("图片：" + window.picture_array5);
            }

            function showTypePic(){
                var data=window.doubleRandomInfo;
                $(".commodityAddImgs").show();
                if(data.path!=""){
                    if (data.path.indexOf(";") > 0) {
                        var info = data.path.split(";");
                        if (!isNull(info) && info.length > 0) {
                            for (var j = 0; j < info.length; j++) {
                                if (!isNull(info[j])) {
                                    var commodity_add_img_info = ' <div class="imgdiv">';
                                    //commodity_add_img_info += '<img class="delimg" src="/staitc/resources/images/del3.png">';
                                    commodity_add_img_info += '<img class="goodsimgone" src="' + window.imgUrl + info[j] + '">';
                                    commodity_add_img_info += '</div>';
                                    var $commodity_add_img_info = createListRow(commodity_add_img_info).appendTo("#" + window.upload_addimg1);
                                    $commodity_add_img_info.data('data', info[j]);
                                    $commodity_add_img_info.listen("quickClick", function (e) {
                                        var data = $(e.currentTarget).data("data");
                                        var arrdata=[];
                                        arrdata.push(data);
                                        window.opinionedImgArray = arrdata;
                                        var url=window.imgUrl+arrdata[0];
                                        cordova.plugins.StartActivity.startActivity(url,function (data) {
                                        },function (error) {
                                            console.log("startActivity error:" + error);
                                        });
                                    });
                                }
                            }
                            window.opinionedImgArray = info;
                            imgWidth(window.upload_imgscroll1, window.upload_imgwrapper1, data.path.length, window.upload_addimg1);
                        }
                    } else {
                        var arr = [];
                        arr.push(data.path);
                        window.opinionedImgArray = arr;
                        var commodity_add_img_info = ' <div class="imgdiv">';
                        //commodity_add_img_info += '<img class="delimg" src="/staitc/resources/images/del3.png">';
                        commodity_add_img_info += '<img class="goodsimgone" src="' + window.imgUrl + data.path + '">';
                        commodity_add_img_info += '</div>';
                        var $commodity_add_img_info = createListRow(commodity_add_img_info).appendTo("#" + window.upload_addimg1);
                        $commodity_add_img_info.data('data', arr);
                        $commodity_add_img_info.listen("quickClick", function (e) {
                            var data = $(e.currentTarget).data("data");
                            var url=window.imgUrl+data[0];
                            cordova.plugins.StartActivity.startActivity(url,function (data) {
                            },function (error) {
                                console.log("startActivity error:" + error);
                            });
                            window.opinionedImgArray = data;
                        });

                    }}
                if(data.path2!=""){
                    if (data.path2.indexOf(";") > 0) {
                        var info = data.path2.split(";");
                        if (!isNull(info) && info.length > 0) {
                            for (var j = 0; j < info.length; j++) {
                                if (!isNull(info[j])) {
                                    var commodity_add_img_info = ' <div class="imgdiv">';
                                    //commodity_add_img_info += '<img class="delimg" src="/staitc/resources/images/del3.png">';
                                    commodity_add_img_info += '<img class="goodsimgone" src="' + window.imgUrl + info[j] + '">';
                                    commodity_add_img_info += '</div>';
                                    var $commodity_add_img_info = createListRow(commodity_add_img_info).appendTo("#" + window.upload_addimg2);
                                    $commodity_add_img_info.data('data', info[j]);
                                    $commodity_add_img_info.listen("quickClick", function (e) {
                                        var data = $(e.currentTarget).data("data");
                                        var arrdata=[];
                                        arrdata.push(data);
                                        var url=window.imgUrl+arrdata[0];
                                        cordova.plugins.StartActivity.startActivity(url,function (data) {
                                        },function (error) {
                                            console.log("startActivity error:" + error);
                                        });
                                        window.opinionedImgArray = arrdata;
                                    });
                                }
                            }
                            window.opinionedImgArray = info;
                            imgWidth(window.upload_imgscroll2, window.upload_imgwrapper2, data.path2.length, window.upload_addimg2);
                        }
                    } else {
                        var arr = [];
                        arr.push(data.path2);
                        window.opinionedImgArray = arr;
                        var commodity_add_img_info = ' <div class="imgdiv">';
                        //commodity_add_img_info += '<img class="delimg" src="/staitc/resources/images/del3.png">';
                        commodity_add_img_info += '<img class="goodsimgone" src="' + window.imgUrl + data.path2 + '">';
                        commodity_add_img_info += '</div>';
                        var $commodity_add_img_info = createListRow(commodity_add_img_info).appendTo("#" + window.upload_addimg2);
                        $commodity_add_img_info.data('data', arr);
                        $commodity_add_img_info.listen("quickClick", function (e) {
                            var data = $(e.currentTarget).data("data");
                            var url=window.imgUrl+data[0];
                            cordova.plugins.StartActivity.startActivity(url,function (data) {
                            },function (error) {
                                console.log("startActivity error:" + error);
                            });
                            window.opinionedImgArray = data;
                        });

                    }}
                if(data.path3!=""){
                    if (data.path3.indexOf(";") > 0) {
                        var info = data.path3.split(";");
                        if (!isNull(info) && info.length > 0) {
                            for (var j = 0; j < info.length; j++) {
                                if (!isNull(info[j])) {
                                    var commodity_add_img_info = ' <div class="imgdiv">';
                                    //commodity_add_img_info += '<img class="delimg" src="/staitc/resources/images/del3.png">';
                                    commodity_add_img_info += '<img class="goodsimgone" src="' + window.imgUrl + info[j] + '">';
                                    commodity_add_img_info += '</div>';
                                    var $commodity_add_img_info = createListRow(commodity_add_img_info).appendTo("#" + window.upload_addimg3);
                                    $commodity_add_img_info.data('data', info[j]);
                                    $commodity_add_img_info.listen("quickClick", function (e) {
                                        var data = $(e.currentTarget).data("data");
                                        var arrdata=[];
                                        arrdata.push(data);
                                        var url=window.imgUrl+arrdata[0];
                                        cordova.plugins.StartActivity.startActivity(url,function (data) {
                                        },function (error) {
                                            console.log("startActivity error:" + error);
                                        });
                                        window.opinionedImgArray = arrdata;

                                    });
                                }
                            }
                            window.opinionedImgArray = info;
                            imgWidth(window.upload_imgscroll3, window.upload_imgwrapper3, data.path3.length, window.upload_addimg3);
                        }
                    } else {
                        var arr = [];
                        arr.push(data.path3);
                        window.opinionedImgArray = arr;
                        var commodity_add_img_info = ' <div class="imgdiv">';
                        //commodity_add_img_info += '<img class="delimg" src="/staitc/resources/images/del3.png">';
                        commodity_add_img_info += '<img class="goodsimgone" src="' + window.imgUrl + data.path3 + '">';
                        commodity_add_img_info += '</div>';
                        var $commodity_add_img_info = createListRow(commodity_add_img_info).appendTo("#" + window.upload_addimg3);
                        $commodity_add_img_info.data('data', arr);
                        $commodity_add_img_info.listen("quickClick", function (e) {
                            var data = $(e.currentTarget).data("data");
                            window.opinionedImgArray = data;
                            var url=window.imgUrl+data[0];
                            cordova.plugins.StartActivity.startActivity(url,function (data) {
                            },function (error) {
                                console.log("startActivity error:" + error);
                            });

                        });

                    }
                }
                if(data.path4!=""){
                    if (data.path4.indexOf(";") > 0) {
                        var info = data.path4.split(";");
                        if (!isNull(info) && info.length > 0) {
                            for (var j = 0; j < info.length; j++) {
                                if (!isNull(info[j])) {
                                    var commodity_add_img_info = ' <div class="imgdiv">';
                                    //commodity_add_img_info += '<img class="delimg" src="/staitc/resources/images/del3.png">';
                                    commodity_add_img_info += '<img class="goodsimgone" src="' + window.imgUrl + info[j] + '">';
                                    commodity_add_img_info += '</div>';
                                    var $commodity_add_img_info = createListRow(commodity_add_img_info).appendTo("#" + window.upload_addimg4);
                                    $commodity_add_img_info.data('data', info[j]);
                                    $commodity_add_img_info.listen("quickClick", function (e) {
                                        var data = $(e.currentTarget).data("data");
                                        var arrdata=[];
                                        arrdata.push(data);
                                        window.opinionedImgArray = arrdata;
                                        var url=window.imgUrl+arrdata[0];
                                        cordova.plugins.StartActivity.startActivity(url,function (data) {
                                        },function (error) {
                                            console.log("startActivity error:" + error);
                                        });

                                    });
                                }
                            }
                            window.opinionedImgArray = info;
                            imgWidth(window.upload_imgscroll4, window.upload_imgwrapper4, data.path4.length, window.upload_addimg4);
                        }
                    } else {
                        var arr = [];
                        arr.push(data.path4);
                        window.opinionedImgArray = arr;
                        var commodity_add_img_info = ' <div class="imgdiv">';
                        //commodity_add_img_info += '<img class="delimg" src="/staitc/resources/images/del4.png">';
                        commodity_add_img_info += '<img class="goodsimgone" src="' + window.imgUrl + data.path4 + '">';
                        commodity_add_img_info += '</div>';
                        var $commodity_add_img_info = createListRow(commodity_add_img_info).appendTo("#" + window.upload_addimg4);
                        $commodity_add_img_info.data('data', arr);
                        $commodity_add_img_info.listen("quickClick", function (e) {
                            var data = $(e.currentTarget).data("data");
                            window.opinionedImgArray = data;
                            var url=window.imgUrl+data[0];
                            cordova.plugins.StartActivity.startActivity(url,function (data) {
                            },function (error) {
                                console.log("startActivity error:" + error);
                            });

                        });

                    }
                }
                if(data.path5!=""){
                    if (data.path5.indexOf(";") > 0) {
                        var info = data.path5.split(";");
                        if (!isNull(info) && info.length > 0) {
                            for (var j = 0; j < info.length; j++) {
                                if (!isNull(info[j])) {
                                    var commodity_add_img_info = ' <div class="imgdiv">';
                                    //commodity_add_img_info += '<img class="delimg" src="/staitc/resources/images/del3.png">';
                                    commodity_add_img_info += '<img class="goodsimgone" src="' + window.imgUrl + info[j] + '">';
                                    commodity_add_img_info += '</div>';
                                    var $commodity_add_img_info = createListRow(commodity_add_img_info).appendTo("#" + window.upload_addimg5);
                                    $commodity_add_img_info.data('data', info[j]);
                                    $commodity_add_img_info.listen("quickClick", function (e) {
                                        var data = $(e.currentTarget).data("data");
                                        var arrdata=[];
                                        arrdata.push(data);
                                        window.opinionedImgArray = arrdata;
                                        var url=window.imgUrl+arrdata[0];
                                        cordova.plugins.StartActivity.startActivity(url,function (data) {
                                        },function (error) {
                                            console.log("startActivity error:" + error);
                                        });
                                    });
                                }
                            }
                            window.opinionedImgArray = info;
                            imgWidth(window.upload_imgscroll5, window.upload_imgwrapper5, data.path5.length, window.upload_addimg5);
                        }
                    } else {
                        var arr = [];
                        arr.push(data.path5);
                        window.opinionedImgArray = arr;
                        var commodity_add_img_info = ' <div class="imgdiv">';
                        //commodity_add_img_info += '<img class="delimg" src="/staitc/resources/images/del5.png">';
                        commodity_add_img_info += '<img class="goodsimgone" src="' + window.imgUrl + data.path5 + '">';
                        commodity_add_img_info += '</div>';
                        var $commodity_add_img_info = createListRow(commodity_add_img_info).appendTo("#" + window.upload_addimg5);
                        $commodity_add_img_info.data('data', arr);
                        $commodity_add_img_info.listen("quickClick", function (e) {
                            var data = $(e.currentTarget).data("data");
                            window.opinionedImgArray = data;
                            var url=window.imgUrl+data[0];
                            cordova.plugins.StartActivity.startActivity(url,function (data) {
                            },function (error) {
                                console.log("startActivity error:" + error);
                            });

                        });

                    }
                }

            }
        }
    }
</script>

<style scoped>

    #random_task_page .page_header .right_img {
                              width: 2em;
                              top: 0.2em;
                          }

    /*img start*/
    #random_task_page .commodityAddImgs {
        overflow: hidden;
        background: #f3f3f3;
    }

    #random_task_page .imgdiv {
        padding: 0.7em;
        padding-top: 0em;
        position: relative;
        width: 6em;
        float: left;
    }

    #random_task_page .goodsimgone {
        float: left;
        height: 6em;
        width: 6em;
        margin-top: 1em;
    }

    #random_task_page .delimg {
        width: 2em;
        height: 2em;
        position: relative;
        top: 0em;
        left: 5em;
    }

    #random_task_page .task_edit_img {
        height: 7.5em;
        overflow: hidden;
        display: inline-block;
    }



    /*img end*/
    #random_task_page .div_input_value_img {
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
        padding: 5%;height:240px;
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
        /*  position: fixed;
         bottom: 0; */
    }
    #random_task_wrapper .ui-checkbox input, .ui-radio input{
        position: unset;
        width:16px;
        height:16px;

    }
    .ui-checkbox{
        display: inline-block;
    }
    #checkItemInfo input[type="text"] {
        border: 1px solid #ccc;
    }
    #random_task_page .natureselect{
        padding:0.5em;
    }
    .uploadInput{
        border: 1px solid #ccc;width: 80px;display: inline-block;border-radius: 5px;
    }


</style>
