webpackJsonp([31],{1737:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a(1738),i=a.n(n);for(var o in n)"default"!==o&&function(t){a.d(e,t,function(){return n[t]})}(o);e.default=i.a},1738:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={mounted:function(){function t(){var t="";t+=toJson("dealDeptId",window.localStorage.deptId),doPost("centerTaskSupervisionLogNum.action",t,function(t){console.log(t),0!==t.num?($(".wait_work_welcome_order_rednum_voice").html(t.num),$(".wait_work_welcome_order_rednum_voice").show()):($(".wait_work_welcome_order_rednum_voice").hide(),toast(t.message))},"")}var e=this;!function(){$("#wait_linkage_wrapper")[0].style.height=window.localInnerHeight-$("#wait_linkage_list .page_header").height()+"px",initScroll({wrapper:"wait_linkage_wrapper",dir:"y",bounce:!1,scrollBar:!1}),scrollToTop("wait_linkage_wrapper"),appWorkOrder_todoTotalByType2(),t(),appWorkOrder_todoTotalSupervision(),"01"==window.localStorage.userType?$("#leaderHandle").show():$("#leaderHandle").hide()}(),function(){var t="";t+=toJson("loginId",window.localStorage.loginId),doPost("getCount.action",t,function(t){console.log(t),0==t.caseinfo?$("#caseinfonum").hide():$("#caseinfonum").show(),0==t.caseDepartmentCo?$("#caseDepartmentConum").hide():$("#caseDepartmentConum").show(),0==t.comLaw?$("#comLawnum").hide():$("#comLawnum").show(),$("#caseinfonum").text(t.caseinfo),$("#caseDepartmentConum").text(t.caseDepartmentCo),$("#comLawnum").text(t.comLaw)},"")}(),$("#wait_linkage_list #deptApply").listen("quickClick",function(t){e.$router.push({path:"deptHandleList",query:{}})})}}},1739:function(t,e){},2315:function(t,e,a){"use strict";var n=a(2316);a.d(e,"a",function(){return n.a}),a.d(e,"b",function(){return n.b})},2316:function(t,e,a){"use strict";a.d(e,"a",function(){return n}),a.d(e,"b",function(){return i});var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{"data-role":"page",id:"wait_linkage_list"}},[a("tk-header",[t._v("\n        联动处置\n\n    ")]),t._v(" "),t._m(0)],1)},i=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"page_content"},[n("div",{staticClass:"jszx-wrapper",attrs:{id:"wait_linkage_wrapper"}},[n("div",{staticClass:"jszx-scroller linkList_home_tab"},[n("table",{staticClass:"list_table",attrs:{cellpadding:"0",cellspacing:"0"}},[n("tr",{staticClass:"work_welcome_leaderchecked",attrs:{id:"deptApply"}},[n("th",{staticStyle:{position:"relative"}},[n("img",{staticStyle:{height:"70px",padding:"1em 1.5em"},attrs:{src:a(2317)}}),t._v(" "),n("div",{staticClass:"red_num wait_work_welcome_opinion_rednum",attrs:{id:"caseDepartmentConum"}},[t._v("11")])]),t._v(" "),n("td",{staticStyle:{padding:"0em"}},[n("p",[t._v("部门协办")]),t._v(" "),n("p",{staticClass:"smaller gray_font",staticStyle:{"padding-bottom":"0.6em"}})]),t._v(" "),n("td",{staticStyle:{"text-align":"right",padding:"0","padding-right":"1em"}},[n("img",{staticClass:"gatwway_list_icon_right",attrs:{src:"/staitc/resources/images/icon_gray_line_left.png"}})])])])])])])}]},2317:function(t,e,a){t.exports=a.p+"image/dept.e4efb8.png"},2318:function(t,e,a){"use strict";var n=a(1739),i=a.n(n);i.a},562:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a(2315),i=a(1737);for(var o in i)"default"!==o&&function(t){a.d(e,t,function(){return i[t]})}(o);var r=(a(2318),a(0)),s=Object(r.a)(i.default,n.a,n.b,!1,null,"01932dbe",null);e.default=s.exports}});