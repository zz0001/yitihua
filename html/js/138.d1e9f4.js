webpackJsonp([138],{1569:function(a,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=t(1570),s=t.n(i);for(var o in i)"default"!==o&&function(a){t.d(e,a,function(){return i[a]})}(o);e.default=s.a},1570:function(a,e,t){"use strict";function i(){$(".max-dialog").remove();var a="<div class='max-dialog max-alert alert_value_scroll'>";a+="     <div class='max-dialog-masker alert_value_max'></div>",a+="     <div class='max-dialog-frame'>",a+="         <div  class='max-dialog-content'>",a+="             <div id='noconfirm' class='jszx-wrapper max_height_div'>",a+="                 <div class='jszx-scroller'>",a+="                     <div class='max-dialog-text' id='choice_one_html'>",a+="                     </div>",a+="                 </div>",a+="             </div>",a+="         </div>",a+="     </div>",a+="</div>";var e=$(a).appendTo("#case_task_detail_page").show();setTimeout(function(){e.find(".alert_value_max").bind("click",function(){$(".alert_value_scroll").fadeOut(500,function(){$(".alert_value_scroll").remove()})})},500),e.find("#choice_one_html").bind("click",function(){$(".alert_value_scroll").fadeOut(500,function(){$(".alert_value_scroll").remove()})})}function s(a){var e=this,t="";t+=toJson("loginId",window.localStorage.loginId)+"&",t+=toJson("rowId",a),doPost("dsbOrderDetail.action",t,function(a){if(0==a.code){var t=a.datas;if(!isNull(t.operationList)&&t.operationList.length>0){window.operationListArrayInfo=[];for(var i=0;i<t.operationList.length;i++){var s={opName:t.operationList[i].opName,opValue:t.operationList[i].opValue,destId:t.operationList[i].destId};window.operationListArrayInfo.push(s)}$("#case_task_detail_page .page_footer").show()}else $("#case_task_detail_page .page_footer").hide();if(isNull(t.pics))$("#case_task_detail_page .commodityAddImgs").hide(),$("#case_tasked_detail_page .commodityAddImgs").hide();else if($("#case_task_detail_page .commodityAddImgs").show(),$("#case_tasked_detail_page .commodityAddImgs").show(),t.pics.indexOf(";")>0){var s=t.pics.split(";");s.forEach(function(a){e.list.push({src:window.imgUrl+a})})}else{var o=[];o.push(t.pics),window.opinionedImgArray=o,e.list=[{src:window.imgUrl+t.pics}]}if(window.caseTaskOneTaskId=t.taskId,t.processSteps.length>0){for(var r="",o=t.processSteps,l=0;l<o.length;l++)r+='<div class="list_row_case"><div>',r+='    <div class="oranger_font bigger">'+[l+1]+"、"+o[l].name,isNull(o[l].url)||(r+='       <div  url="'+o[l].url+'" class="smaller" style="border:1px solid #4ba4e6;color:#4ba4e6;float:right;height:1em;text-align: center;width:3em;line-height:1em;font-size:0.4em;margin-right:1em;margin-top;-0.2em;background: #f7f7f7;padding: 0.5em 0.1em 0.5em 0.3em;border-radius: 0.5em;">图片</div>'),r+="    </div>",r+='    <p class="normal">处理时间：'+o[l].endTime+"</p>",r+='    <p class="normal">处理人：'+o[l].userName+"</p>",r+='    <p class="normal">处理情况：'+o[l].message+"</p>",r+="</div></div>";"2"==window.thisCaseQueryType?$("#case_tasked_steps_html").html(r):$("#case_task_steps_html").html(r)}else $("#case_task_steps_html").empty();if("1"==t.dispose&&(e.detailList[7].value=t.disposeResult,!isNull(t.backpath)))if(e.isShow=!0,t.backpath.indexOf(";")>0){var s=t.backpath.split(";");s.forEach(function(a){e.list2.push({src:window.imgUrl+a})})}else{var o=[];o.push(t.feedbackPic),window.opinionedImgArray=o,e.list2=[{src:window.imgUrl+t.feedbackPic}]}window.localStorage.originNum=t.originNum,e.detailList[0].value=t.caseNo,e.detailList[1].value=t.origin,e.detailList[2].value=t.gridName,e.detailList[3].value=t.reportPerson,e.detailList[4].value=t.reportPersonPhone,e.detailList[5].value=t.location,e.detailList[6].value=t.problem,e.detailList[6].detail=t.problem,window.localStorage.orgin=t.orgin}else toast(a.message)},"")}Object.defineProperty(e,"__esModule",{value:!0});var o=t(52),r=function(a){return a&&a.__esModule?a:{default:a}}(o);e.default={name:"",data:function(){return{list:[],isShow:!1,detailList:[{key:"工单编号",value:""},{key:"工单来源",value:""},{key:"所属网格",value:""},{key:"上报人",value:""},{key:"联系方式",value:""},{key:"位置描述",value:""},{key:"问题描述",value:"",detail:""},{key:"自行处置结果",value:""}]}},mounted:function(){var a=this;window.searchPage=2,$("input").addClass("small gray_dark_font ui-input-text ui-body-c ui-corner-all ui-shadow-inset"),window.currpage="caseTaskpage",function(){$("#case_task_detail_wrapper")[0].style.height=window.localInnerHeight-$("#case_task_detail_page .page_header").height()-$("#case_task_detail_page .page_footer").height()+"px",$("#case_task_detail_page .page_content").css("height",window.localInnerHeight-$("#case_task_detail_page .page_header").height()-$("#case_task_detail_page .page_footer").height()+"px"),initScroll({wrapper:"case_task_detail_wrapper",dir:"y",bounce:!1,scrollBar:!0}),scrollToTop("case_task_detail_wrapper"),$("#case_task_detail_page table tr td").addClass("gray_line_bottom"),window.upload_imgscroll="case_task_detail_img_scroll",window.upload_imgwrapper="case_task_detail_img_wrapper",window.upload_addimg="case_task_detail_img",window.upload_imgscroll_dispose="case_task_dispose_img_scroll",window.upload_imgwrapper_dispose="case_task_dispose_img_wrapper",window.upload_addimg_dispose="case_task_dispose_detail_img"}(),function(){$("#case_task_detail_page table tr td input").val(""),$("#case_task_detail_page table tr td textarea").val(""),$("#case_task_detail_page #case_task_detail_img").empty(),$("#case_task_detail_page #case_task_dispose_detail_img").empty(),window.caseTaskOneTaskId="",$("#case_task_detail_img_scroll").css("transform","none"),$("#case_task_detail_img_wrapper .scroll-bar-x").css("transform","none"),$("#case_task_dispose_img_scroll").css("transform","none"),$("#case_task_dispose_img_wrapper .scroll-bar-x").css("transform","none"),window.operationListArrayInfo=[]}(),s.call(this,window.caseRow_id),window.CaseTaskDetailPage=!0,$("#case_task_detail_page .back-button").listen("quickClick",function(e){"17"==window.localStorage.userType||"18"==window.localStorage.userType?a.$router.push({path:"leaderInstructionsList",query:{}}):(window.CaseTaskDetailPage=!1,a.$router.push({path:"waitTodoCaseList",query:{}}))}),$("#case_task_detail_page").on("click",".smaller",function(a){if(!a.isPropagationStopped()){var e=$(a.currentTarget).attr("url");if(e.indexOf(";")>0){var t=e.split(";");window.opinionedImgArray=t;var i=window.imgUrl+t[0];cordova.plugins.StartActivity.startActivity(i,function(a){},function(a){console.log("startActivity error:"+a)})}else{var s=[];s.push(e),window.opinionedImgArray=s;var i=window.imgUrl+e;cordova.plugins.StartActivity.startActivity(i,function(a){},function(a){console.log("startActivity error:"+a)})}}a.stopPropagation()}),$("#case_task_detail_page #caseBtn").listen("quickClick",function(e){console.log("数据："+(0,r.default)(window.operationListArrayInfo)),!isNull(window.operationListArrayInfo)&&window.operationListArrayInfo.length>0&&(i(),setTimeout(function(){var t=$(e.currentTarget).data("data");console.log("type:"+(0,r.default)(t)),window.caseOneTaskAction=t;for(var i=0;i<window.operationListArrayInfo.length;i++){var s='<p class="alert_edit_title gray_line_bottom">'+window.operationListArrayInfo[i].opName+"</p>",o=createListRow(s).appendTo("#choice_one_html");o.data("data",window.operationListArrayInfo[i]),o.listen("quickClick",function(e){setTimeout(function(){var t=$(e.currentTarget).data("data");console.log("type:"+(0,r.default)(t)),window.caseOneTaskAction=t,a.$router.push({path:"waitcaseTaskEdit",query:{}})},500)})}},500))})}}},1571:function(a,e){},2147:function(a,e,t){"use strict";var i=t(2148);t.d(e,"a",function(){return i.a}),t.d(e,"b",function(){return i.b})},2148:function(a,e,t){"use strict";t.d(e,"a",function(){return i}),t.d(e,"b",function(){return s});var i=function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("div",{attrs:{"data-role":"page",id:"case_task_detail_page"}},[t("tk-header",[a._v("\n        工单详情\n    ")]),a._v(" "),t("div",{staticClass:"page_content"},[t("div",{staticClass:"jszx-wrapper",attrs:{id:"case_task_detail_wrapper"}},[t("div",{staticClass:"jszx-scroller"},[t("div",{staticClass:"html_margin white_background",attrs:{id:"wait_visited_html"}},[t("tk-detail-photo",{attrs:{list:a.list}}),a._v(" "),t("tk-detail",{attrs:{list:a.detailList}}),a._v(" "),t("div",{directives:[{name:"show",rawName:"v-show",value:a.isShow,expression:"isShow"}]},[t("tk-title",[a._v("自行处置图片")]),a._v(" "),t("tk-detail-photo",{attrs:{list:a.list2}})],1),a._v(" "),t("div",[t("tk-title",[a._v("处理步骤")]),a._v(" "),t("div",{staticClass:"html_margin white_background",staticStyle:{background:"#fff"},attrs:{id:"case_task_steps_html"}})],1)],1)])])]),a._v(" "),a._m(0)],1)},s=[function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("div",{staticClass:"page_footer"},[t("div",{staticClass:"footer_button_div"},[t("div",{staticClass:"alert_bottom_three orange_background",attrs:{id:"caseBtn"}},[a._v("下一步")])])])}]},2149:function(a,e,t){"use strict";var i=t(1571),s=t.n(i);s.a},506:function(a,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=t(2147),s=t(1569);for(var o in s)"default"!==o&&function(a){t.d(e,a,function(){return s[a]})}(o);var r=(t(2149),t(0)),l=Object(r.a)(s.default,i.a,i.b,!1,null,null,null);e.default=l.exports}});