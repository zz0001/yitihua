webpackJsonp([167],{1480:function(t,i,e){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var a=e(1481),n=e.n(a);for(var o in a)"default"!==o&&function(t){e.d(i,t,function(){return a[t]})}(o);i.default=n.a},1481:function(t,i,e){"use strict";Object.defineProperty(i,"__esModule",{value:!0}),i.default={mounted:function(){function t(){var t=window.localStorage.filepath,i=$("#downloadlawApplyName").text();console.log(t),console.log(i),isFileExist(i,window.cacheDirectory,function(e){showConfirm("<p style='padding:1em;'>确认下载文档吗？</p>",null,null,function(){showLoading("正在下载...."),(new FileTransfer).download(encodeURI(t),window.cacheDirectoryPath+"/"+i,function(t){hideLoading(),toast("下载成功！"),jsict.appManager.openLocalFile(function(){},function(){},window.cacheDirectoryPath+"/"+i)},function(t){hideLoading(),toast("下载失败，请重试")})})})}function i(){$("#application_wrapper")[0].style.height=window.localInnerHeight-$("#application_list_page .page_header").height()-$("#application_list_page .jszx-bar-icon-up").height()+"px",initScroll({wrapper:"application_wrapper",dir:"y",bounce:!1,scrollBar:!0,pullUpLoading:function(t){window.checkNum>window.arrayDataLength?(t(!0),toast("没有更多的数据了")):1==window.applicationQueryType?r(t,window.localStorage.loginId,"ZF","",window.searchPage++):d(t,window.localStorage.loginId,"ZF","",window.searchPage++)},pullDownLoading:function(t){window.checkNum=1,window.searchPage=2,1==window.applicationQueryType?r(t,window.localStorage.loginId,"ZF","",1):d(t,window.localStorage.loginId,"ZF","",1)}}),scrollToTop("application_wrapper"),window.checkNum=1,d(!1,window.localStorage.loginId,"ZF","",1)}function e(){$("#application_wrapper")[0].style.height=window.localInnerHeight-$("#application_list_page .page_header").height()-$("#application_list_page .jszx-bar-icon-up").height()+"px",initScroll({wrapper:"application_wrapper",dir:"y",bounce:!1,scrollBar:!0,pullUpLoading:function(t){window.checkNum>window.arrayDataLength?(t(!0),toast("没有更多的数据了")):1==window.applicationQueryType?r(t,window.localStorage.loginId,"ZF","",window.searchPage++):d(t,window.localStorage.loginId,"ZF","",window.searchPage++)},pullDownLoading:function(t){window.checkNum=1,window.searchPage=2,1==window.applicationQueryType?r(t,window.localStorage.loginId,"ZF","",1):d(t,window.localStorage.loginId,"ZF","",1)}}),scrollToTop("application_wrapper"),window.checkNum=1,r(!1,window.localStorage.loginId,"ZF","",1)}function a(){showSmallTitle(".case_list_bigclass","4",function(){},function(){window.checkNum=1;var t=$("#enforcement_type option:selected").val();d(!1,window.localStorage.loginId,"ZF",t,1)});var t=' <table class="inp_table" cellpadding="0" cellspacing="0">';t+='       <tr style="height:10em">',t+='           <td style="min-width: 3em;padding:1em;font-size: 20px;" class="gray_line_bottom">请选择类型</td>',t+='           <td colspan="2" class="gray_line_bottom" style="text-align: center;">',t+='               <select id="enforcement_type" style="display: inline-block;width: 72%;"><option value="1">待办</option><option value="2">已办</option></select>',t+="            </td>",t+="       </tr>",t+="   </table>";createListRow(t).appendTo($("#screen_content1"))}function n(){titleScreenSearchHelp("price",function(){},function(){showSmallTitle(".case_welcome_time",1,function(){$("#screen_content1 div").removeClass("red_font"),window.caseStartTime="",window.caseEndTime="",$("#dept_start_timer").val(""),$("#dept_over_timer").val("")},function(){window.searchPage=2,window.caseStartTime=$("#dept_start_timer").val(),window.caseEndTime=$("#dept_over_timer").val(),d(!1,window.localStorage.loginId,"ZF","",1)});var t=' <table class="inp_table" cellpadding="0" cellspacing="0">';t+="       <tr>",t+='           <td style="min-width: 5em;padding:1em;" class="gray_line_bottom">开始时间</td>',t+='           <td class="gray_line_bottom" style="text-align: center;">',t+='               <input id="dept_start_timer" style="text-align: center;" placeholder="请选择开始时间" readonly  type="text"/>',t+="            </td>",t+='           <td class="gray_line_bottom" style="width:2em;min-width:2em;max-width:2em;padding:0em 1em 0em 0em;">',t+='               <img class="div_input_value_img" src="/staitc/resources/images/icon_gray_solid_down.png">',t+="           </td>",t+="       </tr>",t+="       <tr>",t+='           <td style="min-width: 5em;padding: 1em;" class="gray_line_bottom">结束时间</td>',t+='           <td class="gray_line_bottom" style="text-align: center;">',t+='               <input id="dept_over_timer" style="text-align: center" readonly placeholder="请选择结束时间" style="padding:0em 1.5em 0em 0em;"  type="text"/>',t+="           </td>",t+='           <td class="gray_line_bottom" style="width:2em;min-width:2em;max-width:2em;padding:0em 1em 0em 0em;text-align: right;">',t+='               <img class="div_input_value_img" src="/staitc/resources/images/icon_gray_solid_down.png">',t+="           </td>",t+="       </tr>",t+="   </table>";var i=createListRow(t).appendTo($("#screen_content1"));chooseDate("dept_start_timer","date"),chooseDate("dept_over_timer","date"),$(".alert_edit div").css("margin","0em"),$(".timer_btn").css("margin-top","2em"),$(".timer_btn").css("margin-left","13%"),isNull(window.caseStartTime)||$("#dept_start_timer").val(window.caseStartTime),isNull(window.caseEndTime)||$("#dept_over_timer").val(window.caseEndTime),i.find(".timer_btn").listen("quickClick",function(t){$(t.currentTarget).data("data")})})}function o(){window.searchPage=2,window.noticeTypeName="",window.caseStartTime="",window.caseEndTime="",$("#application_list_page #case_welcome_inp").val(""),window.choiceThingsParts="",window.choiceBigType="",window.choiceSmallType="",s()}function l(){o(),$("#application_list_page .casewelcome_title div").removeClass("tab_oranger_font"),$("#application_list_page .leader_wait").addClass("tab_oranger_font"),$("#application_list_page .casewelcome_search").hide(),$("#application_list_page .right_img").hide(),$("#application_list_page .right_add").show(),window.leaderQueryType="1",e()}function c(){o(),$("#application_list_page .right_img").show(),$("#application_list_page .right_add").hide(),$("#application_list_page .casewelcome_title div").removeClass("tab_oranger_font"),$("#application_list_page .leader_already").addClass("tab_oranger_font"),$("#application_list_page .casewelcome_search").show(),window.leaderQueryType="2",i()}function s(){$("#case_welcome_time_id").html("上报时间段")}function d(t,i,e,a,n){parseInt(n)<2&&$("#application_html").empty();var o="";o+=toJson("loginId",window.localStorage.loginId)+"&",o+=toJson("flag",e)+"&",o+=toJson("status",a)+"&",o+=toJson("pageSize","20")+"&",o+=toJson("pageNum",n),doPost("caseDepartmentList.action",o,function(i){if(t||hideLoading(),0==i.code){t&&t(!0);var e=i.datas;if(getDataLength(i.totalSize,6),i.datas.length<20&&(console.log("进来了"),window.checkNum=2),console.log("长度："+i.totalSize),!isNull(e)&&e.length>0)for(var a=0;a<e.length;a++){var o="";o+='<table cellspacing="0" class="list_second_table gray_line_bottom" cellpadding="0">',o+="   <tr>",o+='       <td style="white-space:nowrap;overflow:hidden;text-overflow:ellipsis;"> '+e[a].linkagename+"</td>",o+='       <td style="padding-left:0.5em;width: 5em;" class="oranger_font">'+e[a].status+"</td>",o+="   </tr>",o+="   <tr>",o+='       <td colspan="3" style="text-align:left;"> '+e[a].deadLine+"</td>",o+="   </tr>",o+="</table>";var l=createListRow(o).appendTo("#application_html");l.data("data",e[a]),l.listen("quickClick",function(t){var i=$(t.currentTarget).data("data");window.row_id=i.row_id,window.currjump="list",app.$router.push("../applicationEnforcement/applicationEnforcementDetail.html")})}else parseInt(n)<2&&noListShow("","","",$("#application_html"),"")}else t&&t(!0),toast(i.message)},"")}function r(t,i,e,a,n){t||hideLoading(),parseInt(n)<2&&$("#application_html").empty();var o="";o+=toJson("loginId",window.localStorage.loginId)+"&",o+=toJson("flag",e)+"&",o+=toJson("status","")+"&",o+=toJson("pageSize","20")+"&",o+=toJson("pageNum",n),doPost("myCaseReportList.action",o,function(i){if(t||hideLoading(),0==i.code){t&&t(!0);var e=i.datas;if(getDataLength(i.totalSize,6),i.datas.length<20&&(console.log("进来了"),window.checkNum=2),console.log("长度："+i.totalSize),!isNull(e)&&e.length>0)for(var a=0;a<e.length;a++){var o="";o+='<table cellspacing="0" class="list_second_table gray_line_bottom" cellpadding="0">',o+="   <tr>",o+='       <td style="white-space:nowrap;overflow:hidden;text-overflow:ellipsis;"> '+e[a].linkagename+"</td>",o+='       <td style="padding-left:0.5em;width: 5em;" class="oranger_font">'+e[a].status+"</td>",o+="   </tr>",o+="   <tr>",o+='       <td colspan="3" style="text-align:left;"> '+e[a].deadLine+"</td>",o+="   </tr>",o+="</table>";var l=createListRow(o).appendTo("#application_html");l.data("data",e[a]),l.listen("quickClick",function(t){var i=$(t.currentTarget).data("data");window.row_id=i.row_id,window.currjump="list",app.$router.push("../applicationEnforcement/applicationEnforcementDetail.html")})}else t&&t(!0),parseInt(n)<2&&noListShow("","","",$("#application_html"),"")}else t&&t(!0),toast(i.message),noListShow("","","",$("#application_html"),"")},"")}function p(){doPost("findZFBZMB.action","",function(t){console.log(t.filepath),window.localStorage.filepath=window.imgUrl+t.filepath},"")}window.searchPage=2,window.applicationQueryType=1,$("#application_list_page").live("pageshow",function(){window.applicationWelcomePage=!1,$("#application_html").empty(),p(),window.applicationWelcomePage||(1==parseInt(window.applicationQueryType)?l():c(),window.applicationWelcomePage=!0),$("#application_list_page .right_img").listen("quickClick",function(t){1==$(".max-dialog").is(":visible")?$(".max-dialog").remove():showSmallChoice("分类","时间段",function(){setTimeout(function(){a()},500)},function(){setTimeout(function(){n()},500)})}),$("#application_list_page .right_add").listen("quickClick",function(t){1==$(".max-dialog").is(":visible")?$(".max-dialog").remove():app.$router.push("../applicationEnforcement/applicationEnforcementEdit.html")}),$("#application_list_page .leader_wait").listen("quickClick",function(t){$(".max-dialog").remove(),window.checkNum=1,window.applicationQueryType=1,l()}),$("#application_list_page .leader_already").listen("quickClick",function(t){$(".max-dialog").remove(),window.checkNum=1,window.applicationQueryType=2,c()}),$("#application_list_page .left_img").listen("quickClick",function(t){1==$(".max-dialog").is(":visible")?$(".max-dialog").remove():app.$router.push("../linkage/linkageList.html")}),$("#downloadlawApply").listen("quickClick",function(t){$("#applicationblackBg").show(),$("#applicationDiv").show()}),$("#configapplication").on("click",function(i){$("#applicationblackBg").hide(),$("#applicationDiv").hide(),t()}),$("#applicationblackBg").listen("quickClick",function(t){$("#applicationblackBg").hide(),$("#applicationDiv").hide()})})}}},1482:function(t,i){},2058:function(t,i,e){"use strict";var a=e(2059);e.d(i,"a",function(){return a.a}),e.d(i,"b",function(){return a.b})},2059:function(t,i,e){"use strict";e.d(i,"a",function(){return a}),e.d(i,"b",function(){return n});var a=function(){var t=this,i=t.$createElement;t._self._c;return t._m(0)},n=[function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{attrs:{"data-role":"page",id:"application_list_page"}},[e("div",{staticClass:"page_header"},[e("img",{staticClass:"left_img back-button",attrs:{src:"/staitc/resources/images/icon_white_back.png"}}),t._v(" "),e("div",{staticClass:"page_header_title"},[t._v("执法申请列表")]),t._v(" "),e("div",{staticClass:"right_img right_btn",staticStyle:{height:"2.5em"}},[t._v("筛选")]),t._v(" "),e("div",{staticClass:"right_add right_btn",staticStyle:{height:"2.5em"}},[t._v("新增")])]),t._v(" "),e("div",{staticClass:"page_content"},[e("div",{staticClass:"jszx-bar-icon-up jszx-bar-item-2 casewelcome_title gray_border"},[e("div",{staticClass:"leader_wait"},[e("p",[t._v("我的交办")])]),t._v(" "),e("div",{staticClass:"leader_already"},[e("p",[t._v("待办已办任务")])]),t._v(" "),e("div",{staticStyle:{width:"30%"},attrs:{id:"downloadlawApply"}},[e("p",[t._v("下载模板")])])]),t._v(" "),e("div",{staticClass:"jszx-wrapper",attrs:{id:"application_wrapper"}},[e("div",{staticClass:"jszx-scroller"},[e("div",{staticClass:"html_margin",attrs:{id:"application_html"}})])])]),t._v(" "),e("div",{staticClass:"KpiTcbackG",staticStyle:{display:"none"},attrs:{id:"applicationblackBg"}}),t._v(" "),e("div",{staticClass:"KpiFooterContent2",staticStyle:{display:"none"},attrs:{id:"applicationDiv"}},[e("p",{staticClass:"KpiNameTitle"}),t._v(" "),e("table",{staticClass:"inp_table",attrs:{cellpadding:"0",cellspacing:"0"}},[e("tr",[e("td",{staticStyle:{padding:"1em"},attrs:{id:"downloadlawApplyName"}},[t._v("执法申请模板")]),t._v(" "),e("td",{staticStyle:{"text-align":"right"},attrs:{colspan:"2"}},[e("span",{staticStyle:{color:"#3977E6"},attrs:{id:"configapplication"}},[t._v("下载")])])]),t._v(" "),e("tr",[e("td",{staticStyle:{padding:"1em"}}),t._v(" "),e("td",{staticStyle:{"text-align":"right"},attrs:{colspan:"2"}})])])])])}]},2060:function(t,i,e){"use strict";var a=e(1482),n=e.n(a);n.a},476:function(t,i,e){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var a=e(2058),n=e(1480);for(var o in n)"default"!==o&&function(t){e.d(i,t,function(){return n[t]})}(o);var l=(e(2060),e(0)),c=Object(l.a)(n.default,a.a,a.b,!1,null,"95abebe6",null);i.default=c.exports}});