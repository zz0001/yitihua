webpackJsonp([143],{1554:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a(1555),r=a.n(n);for(var i in n)"default"!==i&&function(t){a.d(e,t,function(){return n[t]})}(i);e.default=r.a},1555:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"",mounted:function(){function t(t,a){t||hideLoading(),parseInt(a)<2&&$("#random_list_html").empty();var n="";n+=toJson("userId",window.localStorage.userId)+"&",n+=toJson("pageSize","20")+"&",n+=toJson("pageNum",a),doPost("ap_doubleRandomInfoList.action",n,function(n){if(t||hideLoading(),n.total>0){t&&t(!0);var r=n.datas;if(getDataLength(n.total),!isNull(r)&&r.length>0)for(var i=0;i<r.length;i++){var o="";o="1"==r[i].status?"未检查":"已检查";var s="";s+='<table cellspacing="0" class="list_second_table gray_line_bottom" cellpadding="0">',s+="   <tr>",s+='       <td style="white-space:nowrap;overflow:hidden;text-overflow:ellipsis;"> '+r[i].enterpriseName+"</td>",s+='       <td style="padding-left:0.5em;" class="oranger_font">'+o+"</td>",s+="   </tr>",s+="   <tr>",s+='       <td colspan="3" style="text-align:left;"> '+r[i].samplingTime+"&nbsp;-&nbsp;"+r[i].deadLine+"</td>",s+="   </tr>",s+="</table>";var l=createListRow(s).appendTo("#random_list_html");l.data("data",r[i]),l.listen("quickClick",function(t){var a=$(t.currentTarget).data("data");window.doubleRandomInfo=a,e.$router.push({path:"doubleRandomEdit"})})}else parseInt(a)<2&&noListShow("","","",$("#implement_html"),"")}else t&&t(!0),toast(n.message),noListShow("","","",$("#random_list_html"),"")},"")}var e=this;window.searchPage=2,function(){$("#random_list_wrapper")[0].style.height=window.localInnerHeight-$("#random_list_page .page_header").height()-$("#random_list_page .jszx-bar-icon-up").height()+"px",initScroll({wrapper:"random_list_wrapper",dir:"y",bounce:!1,scrollBar:!0,pullUpLoading:function(e){window.searchPage>window.arrayDataLength?(e(!0),toast("没有更多的数据了")):t(e,window.searchPage++)},pullDownLoading:function(e){window.searchPage=2,t(e,1)}}),scrollToTop("random_list_wrapper"),t(!1,1)}(),$("#random_list_page .right_img").listen("quickClick",function(t){e.$router.push({path:"doubleRandomEdit"})}),$("#random_list_page .left_img").listen("quickClick",function(t){e.$router.back()})}}},1556:function(t,e){},2132:function(t,e,a){"use strict";var n=a(2133);a.d(e,"a",function(){return n.a}),a.d(e,"b",function(){return n.b})},2133:function(t,e,a){"use strict";a.d(e,"a",function(){return n}),a.d(e,"b",function(){return r});var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{"data-role":"page",id:"random_list_page"}},[a("tk-header",[t._v("\n        双随机列表as\n    ")]),t._v(" "),t._m(0)],1)},r=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"page_content"},[a("div",{staticClass:"jszx-wrapper",attrs:{id:"random_list_wrapper"}},[a("div",{staticClass:"jszx-scroller"},[a("div",{staticClass:"html_margin white_background",attrs:{id:"random_list_html"}})])])])}]},2134:function(t,e,a){"use strict";var n=a(1556),r=a.n(n);r.a},501:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a(2132),r=a(1554);for(var i in r)"default"!==i&&function(t){a.d(e,t,function(){return r[t]})}(i);var o=(a(2134),a(0)),s=Object(o.a)(r.default,n.a,n.b,!1,null,"41b39555",null);e.default=s.exports}});