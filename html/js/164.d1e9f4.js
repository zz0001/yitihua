webpackJsonp([164],{1489:function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var i=e(1490),l=e.n(i);for(var r in i)"default"!==r&&function(t){e.d(a,t,function(){return i[t]})}(r);a.default=l.a},1490:function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default={mounted:function(){function t(){$("#approval_detail_wrapper")[0].style.height=window.localInnerHeight-$("#approval_detail_page .page_header").height()+"px",initScroll({wrapper:"approval_detail_wrapper",dir:"y",bounce:!1,scrollBar:!0}),window.lookType="",scrollToTop("approval_detail_wrapper"),$("#approval_detail_page table tr td").addClass("gray_line_bottom"),$("#approval_detail_page table tr td:last-child").html(""),app_approvalDetail()}window.searchPage=2,$("#approval_detail_page").live("pageshow",function(){window.approvalDetailPage||(t(),window.approvalDetailPage=!0),$("#approval_detail_page .right_img").listen("quickClick",function(t){app.$router.push("../casetask/photoLook.html")}),$("#approval_detail_page .back-button").listen("quickClick",function(t){window.history.back()})})}}},1491:function(t,a){},2067:function(t,a,e){"use strict";var i=e(2068);e.d(a,"a",function(){return i.a}),e.d(a,"b",function(){return i.b})},2068:function(t,a,e){"use strict";e.d(a,"a",function(){return i}),e.d(a,"b",function(){return l});var i=function(){var t=this,a=t.$createElement;t._self._c;return t._m(0)},l=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{attrs:{"data-role":"page",id:"approval_detail_page"}},[e("div",{staticClass:"page_header"},[e("img",{staticClass:"left_img back-button",attrs:{src:"/staitc/resources/images/icon_white_back.png"}}),t._v(" "),e("div",{staticClass:"page_header_title"},[t._v("审批详情")]),t._v(" "),e("div",{staticClass:"right_img"},[t._v("附件")])]),t._v(" "),e("div",{staticClass:"page_content"},[e("div",{staticClass:"jszx-wrapper",attrs:{id:"approval_detail_wrapper"}},[e("div",{staticClass:"jszx-scroller"},[e("div",{staticClass:"html_margin white_background",attrs:{id:"approval_detail_html"}},[e("table",{staticClass:"inp_table",attrs:{cellpadding:"0",cellspacing:"0"}},[e("tr",[e("td",{staticStyle:{width:"5em"}},[t._v("事项名称")]),t._v(" "),e("td",{attrs:{colspan:"2",id:"approval_detail_objid"}})]),t._v(" "),e("tr",[e("td",{staticStyle:{width:"5em"}},[t._v("申请人")]),t._v(" "),e("td",{attrs:{colspan:"2",id:"approval_detail_objname"}})]),t._v(" "),e("tr",[e("td",{staticStyle:{width:"5em"}},[t._v("企业名称")]),t._v(" "),e("td",{attrs:{colspan:"2",id:"approval_detail_deptcode"}})]),t._v(" "),e("tr",[e("td",{staticStyle:{width:"5em"}},[t._v("联系地址")]),t._v(" "),e("td",{attrs:{colspan:"2",id:"approval_detail_lianXiDz"}})]),t._v(" "),e("tr",[e("td",{staticStyle:{width:"5em"}},[t._v("项目名称")]),t._v(" "),e("td",{attrs:{colspan:"2",id:"approval_detail_xiangMuMc"}})]),t._v(" "),e("tr",[e("td",{staticStyle:{width:"5em"}},[t._v("项目地址")]),t._v(" "),e("td",{attrs:{colspan:"2",id:"approval_detail_address"}})]),t._v(" "),e("tr",[e("td",{staticStyle:{width:"5em"}},[t._v("审核结果")]),t._v(" "),e("td",{attrs:{colspan:"2",id:"approval_detail_state"}})]),t._v(" "),e("tr",[e("td",{staticStyle:{width:"5em"}},[t._v("批复时间")]),t._v(" "),e("td",{attrs:{colspan:"2",id:"approval_detail_replyDate"}})])])])])])])])}]},2069:function(t,a,e){"use strict";var i=e(1491),l=e.n(i);l.a},479:function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var i=e(2067),l=e(1489);for(var r in l)"default"!==r&&function(t){e.d(a,t,function(){return l[t]})}(r);var d=(e(2069),e(0)),s=Object(d.a)(l.default,i.a,i.b,!1,null,"0caeb1f6",null);a.default=s.exports}});