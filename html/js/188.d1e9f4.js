webpackJsonp([188],{1800:function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var s=e(1801),i=e.n(s);for(var n in s)"default"!==n&&function(t){e.d(a,t,function(){return s[t]})}(n);a.default=i.a},1801:function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default={name:"manageStep",data:function(){return{}},created:function(){},mounted:function(){function t(t){$("#manageStepList").empty();for(var a=0;a<t.length;a++){var e="";e+="<li>",e+='    <div class="disTw">',e+='        <span class="f15 huic1 widkd3 disI vm">'+t[a].dealdept+"</span>",e+="    </div>",e+='    <div class="f13 huic5 mt4">',e+="        <span>完成："+t[a].completeamount+"</span>",e+="        <span>完成率："+t[a].completeprocess+"</span>",e+="    </div>",e+='    <div class="f13 huic5 mt2">'+t[a].completecontent+"</div>",e+='    <div class="f13 huic5 mt2">'+t[a].createtime+"</div>","1"==t[a].completestatus?e+='    <img src="images/passImg.png" class="passImg">':e+='    <img src="images/nowImg.png" class="passImg">',e+="</li>";var s=$(e).appendTo("#manageStepList");s.data("data",t[a]),s.listen("quickClick",function(t){$(t.currentTarget).data("data")})}}var a=this;if($("#manageStep_wrapper")[0].style.height=window.localInnerHeight-$("#manageStep_page .page_header").height()+"px",initScroll({wrapper:"manageStep_wrapper",dir:"y",bounce:!1,scrollBar:!0}),$("#manageStep_page .back-button").listen("quickClick",function(t){a.$router.back(-1)}),window.repairDetailParam_0329_yfy){var e=window.repairDetailParam_0329_yfy,s="";s+=toJson("centertaskid",e.centertaskid)+"&",s+=toJson("id",e.id);var i="";doPost("centerTaskProcessList.action",s,function(a){i=a,i.datas.length>0?($("#manageStepList").show(),$("#manage_Step_wrapper").hide(),t(i.datas)):($("#manageStepList").hide(),$("#manage_Step_wrapper").show(),noListShow("","","",$("#manage_Step_html"),""))},"")}},methods:{}}},2397:function(t,a,e){"use strict";var s=e(2398);e.d(a,"a",function(){return s.a}),e.d(a,"b",function(){return s.b})},2398:function(t,a,e){"use strict";e.d(a,"a",function(){return s}),e.d(a,"b",function(){return i});var s=function(){var t=this,a=t.$createElement;t._self._c;return t._m(0)},i=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{attrs:{"data-role":"page",id:"manageStep_page"}},[e("div",{staticClass:"page_header"},[e("img",{staticClass:"left_img back-button ",attrs:{src:"/staitc/resources/images/icon_white_back.png"}}),t._v(" "),e("div",{staticClass:"page_header_title"},[t._v("处理步骤")])]),t._v(" "),e("div",{staticClass:"page_content",staticStyle:{background:"#fff"}},[e("div",{staticClass:"jszx-wrapper",attrs:{id:"manageStep_wrapper"}},[e("div",{staticClass:"jszx-scroller"},[e("div",{staticClass:"timeaxis"},[e("ul",{staticClass:"KpichulibzList",attrs:{id:"manageStepList"}})]),t._v(" "),e("div",{staticClass:"jszx-wrapper",attrs:{id:"manage_Step_wrapper"}},[e("div",{staticClass:"jszx-scroller"},[e("div",{staticClass:"html_margin",attrs:{id:"manage_Step_html"}})])])])])])])}]},585:function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var s=e(2397),i=e(1800);for(var n in i)"default"!==n&&function(t){e.d(a,t,function(){return i[t]})}(n);var r=e(0),c=Object(r.a)(i.default,s.a,s.b,!1,null,"5b204bf3",null);a.default=c.exports}});