webpackJsonp([160],{1501:function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var i=e(1502),s=e.n(i);for(var r in i)"default"!==r&&function(t){e.d(a,t,function(){return i[t]})}(r);a.default=s.a},1502:function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default={mounted:function(){window.searchPage=2,function(){$("#case_detail_wrapper")[0].style.height=window.localInnerHeight-$("#case_detail_page .page_header").height()+"px",initScroll({wrapper:"case_detail_wrapper",dir:"y",bounce:!1,scrollBar:!0}),scrollToTop("case_detail_wrapper"),window.opinionedImgArray=[],window.lookType="",$("#case_detail_page table tr td").addClass("gray_line_bottom"),$("#case_detail_page table tr td input").val(""),$("#case_detail_page table tr td textarea").val(""),$("#case_detail_page #case_detail_img").empty(),$("#case_detail_img_scroll").css("transform","none"),$("#case_detail_img_wrapper .scroll-bar-x").css("transform","none"),window.thisCaseQueryType=2,window.upload_imgscroll="case_detail_img_scroll",window.upload_imgwrapper="case_detail_img_wrapper",window.upload_addimg="case_detail_img",$("#case_detail_img_scroll").css("transform","none"),$("#case_detail_img_wrapper .scroll-bar-x").css("transform","none"),app_myOrderDetail(window.caseRow_id)}(),$("#case_detail_page .back-button").listen("quickClick",function(t){app.$router.push("../case/caseList.html")}),$("#case_detail_page .right_btn").listen("quickClick",function(t){window.CaseTaskStpsPage="",app.$router.push("../casetask/caseTaskSteps.html")})}}},1503:function(t,a){},2079:function(t,a,e){"use strict";var i=e(2080);e.d(a,"a",function(){return i.a}),e.d(a,"b",function(){return i.b})},2080:function(t,a,e){"use strict";e.d(a,"a",function(){return i}),e.d(a,"b",function(){return s});var i=function(){var t=this,a=t.$createElement;t._self._c;return t._m(0)},s=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{attrs:{"data-role":"page",id:"case_detail_page"}},[e("div",{staticClass:"page_header"},[e("img",{staticClass:"left_img back-button",attrs:{src:"/staitc/resources/images/icon_white_back.png"}}),t._v(" "),e("div",{staticClass:"page_header_title"},[t._v("问题详情")]),t._v(" "),e("div",{staticClass:"right_img right_btn"},[t._v("处理步骤")])]),t._v(" "),e("div",{staticClass:"page_content"},[e("div",{staticClass:"jszx-wrapper",attrs:{id:"case_detail_wrapper"}},[e("div",{staticClass:"jszx-scroller"},[e("div",{staticClass:"html_margin white_background"},[e("table",{staticClass:"inp_table",attrs:{cellpadding:"0",cellspacing:"0"}},[e("tr",[e("td",{staticClass:"commodityAddImgs",attrs:{colspan:"3"}},[e("div",{staticClass:"jszx-wrapper",attrs:{id:"case_detail_img_wrapper"}},[e("div",{staticClass:"jszx-scroller",attrs:{id:"case_detail_img_scroll"}},[e("div",{attrs:{id:"case_detail_img"}})])])])]),t._v(" "),e("tr",{attrs:{id:"case_detail_eventComponent_tr"}},[e("td",{staticStyle:{"min-width":"5em"}},[t._v("职能事项")]),t._v(" "),e("td",[e("input",{attrs:{readonly:"",id:"case_detail_eventComponent",type:"text"}})])]),t._v(" "),e("tr",{attrs:{id:"case_detail_bigClass_tr"}},[e("td",{staticStyle:{"min-width":"5em"}},[t._v("大类")]),t._v(" "),e("td",[e("input",{attrs:{readonly:"",id:"case_detail_bigClass",type:"text"}})])]),t._v(" "),e("tr",{attrs:{id:"case_detail_smallClass_tr"}},[e("td",{staticStyle:{"min-width":"5em"}},[t._v("小类")]),t._v(" "),e("td",[e("input",{attrs:{readonly:"",id:"case_detail_smallClass",type:"text"}})])]),t._v(" "),e("tr",{attrs:{id:"case_detail_gridCode_tr"}},[e("td",{staticStyle:{"min-width":"5em"}},[t._v("所属网格")]),t._v(" "),e("td",[e("input",{attrs:{readonly:"",id:"case_detail_gridCode",type:"text"}})])]),t._v(" "),e("tr",[e("td",{staticStyle:{"min-width":"5em"}},[t._v("上报时间")]),t._v(" "),e("td",[e("input",{attrs:{readonly:"",id:"case_detail_reportTime",type:"text"}})])]),t._v(" "),e("tr",[e("td",{staticStyle:{"min-width":"5em"}},[t._v("位置描述")]),t._v(" "),e("td",{staticStyle:{padding:"1em 0.5em 1em 0em","text-align":"right"},attrs:{id:"case_detail_address"}})]),t._v(" "),e("tr",[e("td",{staticStyle:{"padding-top":"0.5em"}},[t._v("问题描述")]),t._v(" "),e("td",{attrs:{colspan:"2"}},[e("input",{staticClass:"small gray_dark_font",staticStyle:{color:"#999999"},attrs:{readonly:"true"}})])]),t._v(" "),e("tr",[e("td",{staticStyle:{color:"#333333",padding:"1em","text-align":"left"},attrs:{colspan:"3",id:"case_detail_problem"}})])])])])])])])}]},2081:function(t,a,e){"use strict";var i=e(1503),s=e.n(i);s.a},483:function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var i=e(2079),s=e(1501);for(var r in s)"default"!==r&&function(t){e.d(a,t,function(){return s[t]})}(r);var l=(e(2081),e(0)),d=Object(l.a)(s.default,i.a,i.b,!1,null,"a9aa9bc0",null);a.default=d.exports}});