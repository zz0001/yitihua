webpackJsonp([67],{1815:function(i,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var e=a(1816),s=a.n(e);for(var n in e)"default"!==n&&function(i){a.d(t,i,function(){return e[i]})}(n);t.default=s.a},1816:function(i,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"visitWelcomeList",data:function(){return{}},created:function(){},mounted:function(){function i(){window.searchPage=2,$("#wait_visit_page #wait_visit_inp").val(""),$("#wait_visit_page .search_div").hide(),$("#wait_visit_page #wait_visit_rednum").hide(),$("#wait_visit_page .wait_visit_title").addClass("gray_border"),$("#wait_visit_page .wait_visit_title div").removeClass("tab_oranger_font"),$("#wait_visit_page .wait_visit_wait").addClass("tab_oranger_font"),window.thisCheckVisitType="1",a()}function t(){window.searchPage=2,$("#wait_visit_page #wait_visit_inp").val(""),$("#wait_visit_page .search_div").show(),$("#wait_visit_page #wait_visit_rednum").show(),$("#wait_visit_page .wait_visit_title").removeClass("gray_border"),$("#wait_visit_page .wait_visit_title div").removeClass("tab_oranger_font"),$("#wait_visit_page .wait_visit_already").addClass("tab_oranger_font"),window.thisCheckVisitType="2",a()}function a(){1==parseInt(window.thisCheckVisitType)?$("#wait_visit_wrapper")[0].style.height=window.localInnerHeight-$("#wait_visit_page .page_header").height()-$("#wait_visit_page .wait_visit_title").height()+"px":$("#wait_visit_wrapper")[0].style.height=window.localInnerHeight-$("#wait_visit_page .page_header").height()-$("#wait_visit_page .search_div").height()-$("#wait_visit_page .wait_visit_title").height()+"px",initScroll({wrapper:"wait_visit_wrapper",dir:"y",bounce:!1,scrollBar:!0,pullUpLoading:function(i){window.searchPage>window.arrayDataLength?(i(!0),toast("没有更多的数据了")):app_taskList(i,window.searchPage++,window.thisCheckVisitType,$("#wait_visit_inp").val())},pullDownLoading:function(i){window.searchPage=2,app_taskList(i,1,window.thisCheckVisitType,$("#wait_visit_inp").val())}}),scrollToTop("wait_visit_wrapper"),$("#wait_visit_inp").val(""),app_taskList(!1,1,window.thisCheckVisitType,$("#wait_visit_inp").val())}window.searchPage=2,$("#wait_visit_page").live("pageshow",function(){window.VisitWelcomePage||(window.choiceVisitTaskType="0",1==parseInt(window.thisCheckVisitType)?i():t(),window.VisitWelcomePage=!0),$("#wait_visit_page #refresh_service").off().listen("quickClick",function(i){if(hideFilterAlert(),"yes"!=window.filter_alert_status){showFilterAlert(function(){window.choiceVisitTaskType="0",$("#wait_visit_page .list_row p").removeClass("oranger_font")},function(){hideFilterAlert(),window.searchPage=2,app_taskList(!1,1,window.thisCheckVisitType,$("#wait_visit_inp").val())},function(){});createListRow('<p class="gray_line_bottom filter_line_height">走访类型：</p>').appendTo("#alert_filter_content");for(var t=0;t<window.visitSourcesList.length;t++){var a="";window.choiceVisitTaskType==window.visitSourcesList[t].id?a+='<p class="gray_line_bottom oranger_font"  style="padding:0.5em 0.5em 0.5em 2em;">'+window.visitSourcesList[t].name+"</p>":a+='<p class="gray_line_bottom"  style="padding:0.5em 0.5em 0.5em 2em;">'+window.visitSourcesList[t].name+"</p>";var e=createListRow(a).appendTo("#alert_filter_content");e.data("data",window.visitSourcesList[t]),e.listen("quickClick",function(i){var t=$(i.currentTarget).data("data");window.choiceVisitTaskType=t.id,$(i.currentTarget).siblings().find("p").removeClass("oranger_font"),$(i.currentTarget).find("p").addClass("oranger_font")})}}}),$("#wait_visit_page .wait_visit_wait").listen("quickClick",function(t){i()}),$("#wait_visit_page .wait_visit_already").listen("quickClick",function(i){t()}),$("#wait_visit_page .left_img").listen("quickClick",function(i){$.mobile.changePage("../load/welcome.html")}),$("#wait_visit_page #service_search").listen("quickClick",function(i){window.searchPage=2,app_taskList(!1,1,window.thisCheckVisitType,$("#wait_visit_inp").val())})})},methods:{}}},1817:function(i,t){},2412:function(i,t,a){"use strict";var e=a(2413);a.d(t,"a",function(){return e.a}),a.d(t,"b",function(){return e.b})},2413:function(i,t,a){"use strict";a.d(t,"a",function(){return e}),a.d(t,"b",function(){return s});var e=function(){var i=this,t=i.$createElement;i._self._c;return i._m(0)},s=[function(){var i=this,t=i.$createElement,a=i._self._c||t;return a("div",{attrs:{"data-role":"page",id:"wait_visit_page"}},[a("div",{staticClass:"page_header"},[a("img",{staticClass:"left_img back-button maplistback",attrs:{src:"/staitc/resources/images/icon_white_back.png"}}),i._v(" "),a("div",{staticClass:"page_header_title"},[i._v("大走访")])]),i._v(" "),a("div",{staticClass:"page_content"},[a("div",{staticClass:"jszx-bar-icon-up jszx-bar-item-2 wait_visit_title gray_border"},[a("div",{staticClass:"wait_visit_wait"},[a("p",[i._v("我的待办")])]),i._v(" "),a("div",{staticClass:"wait_visit_already"},[a("p",[i._v("我的已办")])])]),i._v(" "),a("div",{staticClass:"search_div"},[a("input",{staticClass:"alert_edit_div_input",attrs:{id:"wait_visit_inp",type:"text",placeholder:"请输入搜索内容"}}),i._v(" "),a("img",{staticClass:" ",attrs:{id:"refresh_service",src:"/staitc/resources/images/icon_gray_screen.png"}}),i._v(" "),a("div",{staticClass:"orange_background smaller",attrs:{id:"service_search"}},[i._v("搜索")])]),i._v(" "),a("div",{staticClass:"jszx-wrapper",attrs:{id:"wait_visit_wrapper"}},[a("div",{staticClass:"jszx-scroller"},[a("div",{staticClass:"html_margin",attrs:{id:"wait_visit_html"}})])])])])}]},2414:function(i,t,a){"use strict";var e=a(1817),s=a.n(e);s.a},591:function(i,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var e=a(2412),s=a(1815);for(var n in s)"default"!==n&&function(i){a.d(t,i,function(){return s[i]})}(n);var r=(a(2414),a(0)),_=Object(r.a)(s.default,e.a,e.b,!1,null,"83da5a86",null);t.default=_.exports}});