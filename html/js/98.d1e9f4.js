webpackJsonp([98],{1698:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=a(1699),d=a.n(i);for(var r in i)"default"!==r&&function(t){a.d(e,t,function(){return i[t]})}(r);e.default=d.a},1699:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"leaderDetail",mounted:function(){function t(t){var e="";e+=toJson("loginId",window.localStorage.loginId)+"&",e+=toJson("caseNo",t),doPost("MobileCaseInfo.action",e,function(t){if(0==t.code){var e=t.datas;if(e.pics)if($("#leader_detail_page .commodityAddImgs").show(),e.pics.length>0){for(var a=e.pics,i=0;i<a.length;i++)if(!isNull(a[i])){var d=' <div class="imgdiv">';d+='<img class="goodsimgone" src="'+window.imgUrl+a[i]+'">',d+="</div>";var r=createListRow(d).appendTo("#"+window.upload_addimg);r.data("data",a[i]),r.listen("quickClick",function(t){var e=$(t.currentTarget).data("data"),a=[];a.push(e);var i=window.imgUrl+a[0];cordova.plugins.StartActivity.startActivity(i,function(t){},function(t){console.log("startActivity error:"+t)})})}window.opinionedImgArray=a,imgWidth(window.upload_imgscroll,window.upload_imgwrapper,e.pics.length,window.upload_addimg)}else $("#leader_detail_page .commodityAddImgs").hide(),window.opinionedImgArray=e.pics;else $("#leader_detail_page .commodityAddImgs").hide();$("#leader_detail_taskNo").val(e.caseno),$("#leader_detail_taskFrom").val(e.origin),$("#leader_detail_taskedDept").val(e.deptName),$("#leader_detail_eventComponent").val(e.eventComponent),$("#leader_detail_bigClass").val(e.bigClass),$("#leader_detail_smallClass").val(e.smallClass),$("#leader_detail_orderTime").val(e.reportTime),$("#leader_detail_endTime").val(e.deadLine),$("#leader_detail_problem").html(e.problem)}else toast(t.message)},"")}window.searchPage=2;var e=this;!function(){$("#leader_detail_wrapper")[0].style.height=window.localInnerHeight-$("#leader_detail_page .page_header").height()+"px",initScroll({wrapper:"leader_detail_wrapper",dir:"y",bounce:!1,scrollBar:!0}),scrollToTop("leader_detail_wrapper"),window.opinionedImgArray=[],window.lookType="",$("#leader_detail_page table tr td").addClass("gray_line_bottom"),$("#leader_detail_page table tr td input").val(""),$("#leader_detail_page table tr td textarea").val(""),$("#leader_detail_page #leader_detail_img").empty(),$("#leader_detail_img_scroll").css("transform","none"),$("#leader_detail_img_wrapper .scroll-bar-x").css("transform","none"),window.thisCaseQueryType=2,window.upload_imgscroll="leader_detail_img_scroll",window.upload_imgwrapper="leader_detail_img_wrapper",window.upload_addimg="leader_detail_img",$("#leader_detail_img_scroll").css("transform","none"),$("#leader_detail_img_wrapper .scroll-bar-x").css("transform","none"),t(window.caseRow_id)}(),$("#leader_detail_page .back-button").listen("quickClick",function(t){e.$router.push({path:"leaderList",query:{}})}),$("#leader_detail_page .right_btn").listen("quickClick",function(t){window.CaseTaskStpsPage="",e.$router.push({path:"leaderTaskSteps",query:{}})})}}},1700:function(t,e){},2276:function(t,e,a){"use strict";var i=a(2277);a.d(e,"a",function(){return i.a}),a.d(e,"b",function(){return i.b})},2277:function(t,e,a){"use strict";a.d(e,"a",function(){return i}),a.d(e,"b",function(){return d});var i=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},d=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{"data-role":"page",id:"leader_detail_page"}},[a("div",{staticClass:"page_header"},[a("img",{staticClass:"left_img back-button",attrs:{src:"/staitc/resources/images/icon_white_back.png"}}),t._v(" "),a("div",{staticClass:"page_header_title"},[t._v("任务详情")]),t._v(" "),a("div",{staticClass:"right_img right_btn"},[t._v("处理进度")])]),t._v(" "),a("div",{staticClass:"page_content"},[a("div",{staticClass:"jszx-wrapper",attrs:{id:"leader_detail_wrapper"}},[a("div",{staticClass:"jszx-scroller"},[a("div",{staticClass:"html_margin white_background"},[a("table",{staticClass:"inp_table",attrs:{cellpadding:"0",cellspacing:"0"}},[a("tr",[a("td",{staticClass:"commodityAddImgs",attrs:{colspan:"3"}},[a("div",{staticClass:"jszx-wrapper",attrs:{id:"leader_detail_img_wrapper"}},[a("div",{staticClass:"jszx-scroller",attrs:{id:"leader_detail_img_scroll"}},[a("div",{attrs:{id:"leader_detail_img"}})])])])]),t._v(" "),a("tr",{attrs:{id:"leader_detail_eventComponent_tr"}},[a("td",{staticStyle:{"min-width":"5em"}},[t._v("任务编号")]),t._v(" "),a("td",[a("input",{attrs:{readonly:"",id:"leader_detail_taskNo",type:"text"}})])]),t._v(" "),a("tr",{attrs:{id:"leader_detail_eventComponent_tr"}},[a("td",{staticStyle:{"min-width":"5em"}},[t._v("案件来源")]),t._v(" "),a("td",[a("input",{attrs:{readonly:"",id:"leader_detail_taskFrom",type:"text"}})])]),t._v(" "),a("tr",{attrs:{id:"leader_detail_eventComponent_tr"}},[a("td",{staticStyle:{"min-width":"5em"}},[t._v("处置部门")]),t._v(" "),a("td",[a("input",{attrs:{readonly:"",id:"leader_detail_taskedDept",type:"text"}})])]),t._v(" "),a("tr",{attrs:{id:"leader_detail_eventComponent_tr"}},[a("td",{staticStyle:{"min-width":"5em"}},[t._v("职能事项")]),t._v(" "),a("td",[a("input",{attrs:{readonly:"",id:"leader_detail_eventComponent",type:"text"}})])]),t._v(" "),a("tr",{attrs:{id:"leader_detail_bigClass_tr"}},[a("td",{staticStyle:{"min-width":"5em"}},[t._v("大类")]),t._v(" "),a("td",[a("input",{attrs:{readonly:"",id:"leader_detail_bigClass",type:"text"}})])]),t._v(" "),a("tr",{attrs:{id:"leader_detail_smallClass_tr"}},[a("td",{staticStyle:{"min-width":"5em"}},[t._v("小类")]),t._v(" "),a("td",[a("input",{attrs:{readonly:"",id:"leader_detail_smallClass",type:"text"}})])]),t._v(" "),a("tr",{attrs:{id:"leader_detail_gridCode_tr"}},[a("td",{staticStyle:{"min-width":"5em"}},[t._v("派单时间")]),t._v(" "),a("td",[a("input",{attrs:{readonly:"",id:"leader_detail_orderTime",type:"text"}})])]),t._v(" "),a("tr",[a("td",{staticStyle:{"min-width":"5em"}},[t._v("截止时间")]),t._v(" "),a("td",[a("input",{attrs:{readonly:"",id:"leader_detail_endTime",type:"text"}})])]),t._v(" "),a("tr",[a("td",{staticStyle:{"padding-top":"0.5em"}},[t._v("问题描述")]),t._v(" "),a("td",{attrs:{colspan:"2"}},[a("input",{staticClass:"small gray_dark_font",staticStyle:{color:"#999999"},attrs:{readonly:"true"}})])]),t._v(" "),a("tr",[a("td",{staticStyle:{color:"#333333",padding:"1em","text-align":"left"},attrs:{colspan:"3",id:"leader_detail_problem"}})])])])])])])])}]},2278:function(t,e,a){"use strict";var i=a(1700),d=a.n(i);d.a},549:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=a(2276),d=a(1698);for(var r in d)"default"!==r&&function(t){a.d(e,t,function(){return d[t]})}(r);var l=(a(2278),a(0)),s=Object(l.a)(d.default,i.a,i.b,!1,null,"5ebf4a60",null);e.default=s.exports}});