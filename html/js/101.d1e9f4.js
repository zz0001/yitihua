webpackJsonp([101],{1689:function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var i=t(1690),n=t.n(i);for(var o in i)"default"!==o&&function(e){t.d(a,e,function(){return i[e]})}(o);a.default=n.a},1690:function(e,a,t){"use strict";function i(){$("#leaderHandle_steps_wrapper")[0].style.height=window.localInnerHeight-$("#leaderHandle_steps_page .page_header").height()+"px",initScroll({wrapper:"leaderHandle_steps_wrapper",dir:"y",bounce:!1,scrollBar:!0}),scrollToTop("leaderHandle_steps_wrapper"),window.lookType="",$("#leaderHandle_steps_page table tr td").addClass("gray_line_bottom"),$("#leaderHandle_steps_page table tr td input").val(""),$("#leaderHandle_steps_page table tr td textarea").val(""),n()}function n(){$("#leaderHandle_steps_html").empty();var e="";e+=toJson("row_id",window.leadertodoid)+"&",e+=toJson("loginId",window.localStorage.loginId)+"&",e+=toJson("leaderState",window.localStorage.userType)+"&",e+=toJson("taskId",window.caseTaskOneTaskId),doPost("appWorkOrder_viewHistory.action",e,function(e){if(0==e.code){var a=e.datas;if(!isNull(a)&&a.length>0){for(var t=0,i=0;i<a.length;i++)if(""!=a[i].taskName){var n="";isNull(a[i].cost)||(n=a[i].cost);var o="";o+="<div>";isNull(a[i].operationName)||"（"+a[i].operationName+"）",o+='    <div class="oranger_font bigger">'+[i+1]+"、"+a[i].taskName,1==parseInt(a[i].HasAttachment)&&(o+='       <div id="leaderpicImgfirst" class="smaller" style="border:1px solid #4ba4e6;color:#4ba4e6;float:right;height:1em;text-align: center;width:3em;line-height:1em;font-size:0.4em;margin-right:1em;margin-top;-0.2em;background: #f7f7f7;padding: 0.5em 0.1em 0.5em 0.3em;border-radius: 0.5em;">图片</div>'),1==parseInt(a[i].HasFile)&&(o+='       <div id="leaderlookfilefirst" taskid="'+a[i].taskId+'" class="smaller" style="border:1px solid #4ba4e6;color:#4ba4e6;float:right;height:1em;text-align: center;width:3em;line-height:1em;font-size:0.4em;margin-right:1em;margin-top;-0.2em;background: #f7f7f7;padding: 0.5em 0.1em 0.5em 0.3em;border-radius: 0.5em;">附件</div>'),1==parseInt(a[i].isHasAttachment)&&(o+='       <div id="leaderpicImg" taskid="'+a[i].taskId+'" class="smaller" style="border:1px solid #4ba4e6;color:#4ba4e6;float:right;height:1em;text-align: center;width:3em;line-height:1em;font-size:0.4em;margin-right:1em;margin-top;-0.2em;background: #f7f7f7;padding: 0.5em 0.1em 0.5em 0.3em;border-radius: 0.5em;">图片</div>'),1==parseInt(a[i].isHasFile)&&(o+='       <div id="leaderlookfile" taskid="'+a[i].taskId+'" class="smaller" style="border:1px solid #4ba4e6;color:#4ba4e6;float:right;height:1em;text-align: center;width:3em;line-height:1em;font-size:0.4em;margin-right:1em;margin-top;-0.2em;background: #f7f7f7;padding: 0.5em 0.1em 0.5em 0.3em;border-radius: 0.5em;">附件</div>'),o+="    </div>",o+='    <p class="normal">开始时间：'+a[i].startTime+"</p>",o+='    <p class="normal">结束时间：'+a[i].endTime+"</p>",isNull(a[i].dealPerson)||(o+='    <p class="normal">处理人：'+a[i].dealPerson+"</p>"),o+='    <p class="normal">处理意见：'+a[i].comment+"</p>",o+='    <p class="normal">状态：'+a[i].status+"，用时："+n+"</p>",o+="</div>";var r=createListRow(o).appendTo("#leaderHandle_steps_html");t+=1,r.data("data",a[i]),r.find("#leaderpicImg").listen("quickClick",function(e){var a=$(e.currentTarget).attr("taskid");window.caseTaskIdPic=a,window.hasAttachment="",window.lookType="casestep",$.mobile.changePage("../casetask/photoLook.html")}),r.find("#leaderlookfile").listen("quickClick",function(e){var a=$(e.currentTarget).attr("taskid"),t="";t+=toJson("row_id",window.leadertodoid)+"&",t+=toJson("taskId",a),doPost("appWorkOrder_viewAttach.action",t,function(e){if(0==e.code){var a=e.datas.url[0].split("."),t=window.imgUrl+e.datas.url[0],i="步骤完成附件下载."+a[1];isFileExist(i,window.cacheDirectory,function(e){showConfirm("<p style='padding:1em;'>确认下载文档吗？</p>",null,null,function(){showLoading("正在下载...."),(new FileTransfer).download(encodeURI(t),window.cacheDirectoryPath+"/"+i,function(e){hideLoading(),toast("下载成功！"),jsict.appManager.openLocalFile(function(){},function(){},window.cacheDirectoryPath+"/"+i)},function(e){hideLoading(),toast("下载失败，请重试")})})})}})}),r.find("#leaderlookfilefirst").listen("quickClick",function(e){var a=($(e.currentTarget).attr("taskid"),"");a+=toJson("row_id",window.leadertodoid)+"&",a+=toJson("hasFile","1")+"&",a+=toJson("taskId","1"),doPost("appWorkOrder_viewAttach.action",a,function(e){if(0==e.code){var a=e.datas.file[0].split("."),t=window.imgUrl+e.datas.file[0],i="步骤附件下载."+a[1];console.log(t),console.log(i),isFileExist(i,window.cacheDirectory,function(e){showConfirm("<p style='padding:1em;'>确认下载文档吗？</p>",null,null,function(){showLoading("正在下载...."),(new FileTransfer).download(encodeURI(t),window.cacheDirectoryPath+"/"+i,function(e){hideLoading(),toast("下载成功！"),jsict.appManager.openLocalFile(function(){},function(){},window.cacheDirectoryPath+"/"+i)},function(e){hideLoading(),toast("下载失败，请重试")})})})}})}),r.find("#leaderpicImgfirst").listen("quickClick",function(e){window.caseTaskIdPic="1",window.caseRow_id=window.leadertodoid,window.hasAttachment="1",window.lookType="leadercasestep",$.mobile.changePage("../casetask/photoLook.html")})}}else noListShow("","","",$("#leaderHandle_steps_html"),"")}else toast(e.message)},"")}Object.defineProperty(a,"__esModule",{value:!0}),a.default={name:"leaderHandleSteps"},window.searchPage=2,$("#leaderHandle_steps_page").live("pageshow",function(){i(),window.CaseTaskStpsPage||(window.CaseTaskStpsPage=!0),$("#leaderHandle_steps_page .back-button").listen("quickClick",function(e){$.mobile.changePage("../leaderHandle/leaderHandleDetail.html")})})},1691:function(e,a){},2267:function(e,a,t){"use strict";var i=t(2268);t.d(a,"a",function(){return i.a}),t.d(a,"b",function(){return i.b})},2268:function(e,a,t){"use strict";t.d(a,"a",function(){return i}),t.d(a,"b",function(){return n});var i=function(){var e=this,a=e.$createElement;e._self._c;return e._m(0)},n=[function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{attrs:{"data-role":"page",id:"leaderHandle_steps_page"}},[t("div",{staticClass:"page_header"},[t("img",{staticClass:"left_img back-button",attrs:{src:"/staitc/resources/images/icon_white_back.png"}}),e._v(" "),t("div",{staticClass:"page_header_title"},[e._v("处理步骤")])]),e._v(" "),t("div",{staticClass:"page_content",staticStyle:{background:"#ffffff"}},[t("div",{staticClass:"jszx-wrapper",attrs:{id:"leaderHandle_steps_wrapper"}},[t("div",{staticClass:"jszx-scroller"},[t("div",{staticClass:"html_margin white_background",attrs:{id:"leaderHandle_steps_html"}})])])])])}]},2269:function(e,a,t){"use strict";var i=t(1691),n=t.n(i);n.a},546:function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var i=t(2267),n=t(1689);for(var o in n)"default"!==o&&function(e){t.d(a,e,function(){return n[e]})}(o);var r=(t(2269),t(0)),s=Object(r.a)(n.default,i.a,i.b,!1,null,"29a30bc2",null);a.default=s.exports}});