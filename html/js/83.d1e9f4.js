webpackJsonp([83],{1757:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=i(1758),c=i.n(s);for(var n in s)"default"!==n&&function(e){i.d(t,e,function(){return s[e]})}(n);t.default=c.a},1758:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"noticeWelcomeList",mounted:function(){window.searchPage=2;var e=this;$("#notice_welcome_list_page").live("pageshow",function(){$("#notice_welcome_list_html").empty(),app_noticeList(!1,1,$("#notice_welcome_list_inp").val(),window.noticeTypeList,"notice_welcome_list_html"),$("#page_footer2").find(".jszx-bar-icon-up>div:eq(0)").listen("quickClick",function(t){e.$router.push({path:"welcome",query:{}})}),$("#page_footer2").find(".jszx-bar-icon-up>div:eq(1)").listen("quickClick",function(t){e.$router.push({path:"noticeWelcomeList",query:{}})}),$("#page_footer2").find(".jszx-bar-icon-up>div:eq(2)").listen("quickClick",function(t){e.$router.push({path:"peoplePhone",query:{}})}),$("#page_footer2").find(".jszx-bar-icon-up>div:eq(3)").listen("quickClick",function(t){e.$router.push({path:"moreWelcome",query:{}})}),$("#notice_welcome_list_page .left_img").listen("quickClick",function(e){window.noticeWelcomePage=!1,$.mobile.changePage("../load/welcome.html")}),$("#notice_welcome_list_page #service_search").listen("quickClick",function(e){window.searchPage=2,app_noticeList(!1,1,$("#notice_welcome_list_inp").val(),window.noticeTypeList,"notice_welcome_list_html")})})}}},1759:function(e,t){},2354:function(e,t,i){"use strict";var s=i(2355);i.d(t,"a",function(){return s.a}),i.d(t,"b",function(){return s.b})},2355:function(e,t,i){"use strict";i.d(t,"a",function(){return s}),i.d(t,"b",function(){return c});var s=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{attrs:{"data-role":"page",id:"notice_welcome_list_page"}},[i("tk-header",{attrs:{back:!1}},[e._v("\n        通知公告\n    ")]),e._v(" "),e._m(0),e._v(" "),e._m(1)],1)},c=[function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"page_content"},[i("div",{staticClass:"search_div"},[i("input",{staticClass:"alert_edit_div_input",staticStyle:{width:"80%"},attrs:{id:"notice_welcome_list_inp",type:"text",placeholder:"请输入搜索内容"}}),e._v(" "),i("img",{staticClass:" ",staticStyle:{display:"none"},attrs:{id:"refresh_service",src:"/staitc/resources/images/icon_gray_screen.png"}}),e._v(" "),i("div",{staticClass:"orange_background smaller",attrs:{id:"service_search"}},[e._v("搜索")])]),e._v(" "),i("div",{staticClass:"jszx-wrapper",attrs:{id:"notice_welcome_list_wrapper"}},[i("div",{staticClass:"jszx-scroller"},[i("div",{staticClass:"html_margin white_background",attrs:{id:"notice_welcome_list_html"}})])])])},function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"page_footer smaller",staticStyle:{position:"fixed",bottom:"0"},attrs:{id:"page_footer2"}},[i("div",{staticClass:"jszx-bar-icon-up jszx-bar-item-4 "},[i("div",[i("img",{attrs:{src:"/staitc/resources/images/icon_one.png",alt:""}}),e._v(" "),i("p",[e._v("首页")])]),e._v(" "),i("div",[i("img",{attrs:{src:"/staitc/resources/images/icon_two_press.png",alt:""}}),e._v(" "),i("p",{staticStyle:{color:"#0283de"}},[e._v("公告")]),e._v(" "),i("div",{staticClass:"red_notice_num",staticStyle:{"font-size":"0.5em"}})]),e._v(" "),i("div",[i("img",{attrs:{src:"/staitc/resources/images/icon_three.png",alt:""}}),e._v(" "),i("p",[e._v("通讯录")])]),e._v(" "),i("div",[i("img",{attrs:{src:"/staitc/resources/images/icon_four.png",alt:""}}),e._v(" "),i("p",[e._v("我的")]),e._v(" "),i("div",{staticClass:"red_round_wode",attrs:{id:"newVersonRed_welcome"}})])])])}]},2356:function(e,t,i){"use strict";var s=i(1759),c=i.n(s);c.a},569:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=i(2354),c=i(1757);for(var n in c)"default"!==n&&function(e){i.d(t,e,function(){return c[e]})}(n);var a=(i(2356),i(0)),o=Object(a.a)(c.default,s.a,s.b,!1,null,"4c19a938",null);t.default=o.exports}});