webpackJsonp([127],{1602:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=r(1603),i=r.n(a);for(var c in a)"default"!==c&&function(t){r.d(e,t,function(){return a[t]})}(c);e.default=i.a},1603:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"",mounted:function(){function t(){$("#cjlb_tbody").empty();var t="",e="";e+=toJson("userId",window.localStorage.userId),doPost("getEventcomponentForInfoCollection.action",e,function(e){for(var r=0;r<e.length;r++){window.bigClassarr.push(e[r].bigClass);var a=r+1,i="display:none;";0!=e[r].count&&(i=""),t+=a%2==0?'<tr id="'+e[r].id+'" class="tosecond" style="" currtitle="'+e[r].dmmc+'" currnum="'+r+'" ><td style="width:20%;">'+a+'</td><td><div class="dmmcdiv">'+e[r].dmmc+'</div><div class="red_numxxcj" style="'+i+'">'+e[r].count+"</div></td></tr>":'<tr id="'+e[r].id+'" class="tosecond" style="background-color: #eee;" currtitle="'+e[r].dmmc+'" currnum="'+r+'"><td style="width:20%;">'+a+'</td><td><div class="dmmcdiv">'+e[r].dmmc+'</div><div class="red_numxxcj" style="'+i+'">'+e[r].count+"</div></td></tr>"}$("#cjlb_tbody").html(t)})}function e(t){$("#cjlb_tbody").empty();for(var e="",r=window.bigClassarr[t],a=0;a<r.length;a++){var i=a+1,c="";c="0"==r[a].status?"":"statusclass",e+=i%2==0?'<tr id="'+r[a].id+'" class="toedit" style="" currtitle="'+r[a].dmmc+'" area="'+r[a].area+'" score="'+r[a].score+'" path="'+r[a].path+'" dispose="'+r[a].dispose+'"><td style="width:20%;"><span class="'+c+'" style="color:red;">*</span>'+i+"</td><td>"+r[a].dmmc+"</td></tr>":'<tr id="'+r[a].id+'" class="toedit" style="background-color: #eee;" currtitle="'+r[a].dmmc+'" area="'+r[a].area+'" score="'+r[a].score+'" path="'+r[a].path+'" dispose="'+r[a].dispose+'"><td style="width:20%;"><span class="'+c+'" style="color:red;">*</span>'+i+"</td><td>"+r[a].dmmc+"</td></tr>"}$("#cjlb_tbody").html(e)}var r=this;$("input").addClass("small gray_dark_font ui-input-text ui-body-c ui-corner-all ui-shadow-inset"),$("textarea").addClass("ui-input-text ui-body-c ui-corner-all ui-shadow-inset"),function(){window.bigClassarr=[],$("#xxcj_wrapper")[0].style.height=window.localInnerHeight-$("#xxcj_page .page_header").height()-$("#xxcj_page .page_footer").height()+"px",initScroll({wrapper:"xxcj_wrapper",dir:"y",bounce:!1,scrollBar:!0}),scrollToTop("xxcj_wrapper"),$("#xxcj_page .page_footer").hide(),window.currstep="1",t()}(),$("#xxcj_page .left_img").listen("quickClick",function(e){"2"==window.currstep?($("#xxcj_page .page_footer").hide(),window.currstep="1",t()):r.$router.back()}),$("#xxcj_page .right_img").listen("quickClick",function(t){}),$("#cjlb_tbody").on("click",".tosecond",function(t){window.currstep="2",$("#xxcj_page .page_footer").show();var r=$(t.currentTarget).attr("id");window.eventComponent=r;var a=$(t.currentTarget).attr("currtitle");window.firstdmmc=a,e($(t.currentTarget).attr("currnum"))}),$("#cjlb_tbody").on("click",".toedit",function(t){var e=$(t.currentTarget).attr("id");window.bigClass=e;var a=$(t.currentTarget).attr("currtitle");window.seconddmmc=a;var i=$(t.currentTarget).attr("area");window.area=i;var c=$(t.currentTarget).attr("score");window.score=c;var s=$(t.currentTarget).attr("path");window.xxcjpath=s;var o=$(t.currentTarget).attr("dispose");window.dispose=o,r.$router.push({path:"/xxcjEdit"})}),$(".page_footer").listen("quickClick",function(e){window.currstep="1",$("#xxcj_page .page_footer").hide(),t()})},methods:{rightClick:function(){window.originType="4",this.$router.push({path:"/ycjList"})}}}},1604:function(t,e){},2180:function(t,e,r){"use strict";var a=r(2181);r.d(e,"a",function(){return a.a}),r.d(e,"b",function(){return a.b})},2181:function(t,e,r){"use strict";r.d(e,"a",function(){return a}),r.d(e,"b",function(){return i});var a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"page_header"},[r("tk-header",[t._v("\n        巡查上报\n        "),r("span",{attrs:{slot:"right"},on:{click:t.rightClick},slot:"right"},[t._v("已上报")])]),t._v(" "),r("div",{staticClass:"jszx-wrapper",staticStyle:{"background-color":"#fff"},attrs:{id:"xxcj_wrapper"}},[r("div",{staticClass:"jszx-scroller"},[r("div",{attrs:{id:"xxcj_html"}},[r("div",{staticClass:"page_message"},[r("tk-title",[t._v("上报列表")]),t._v(" "),t._m(0)],1)])])]),t._v(" "),t._m(1)],1)},i=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("table",{staticClass:"statistics",attrs:{cellpadding:"0",cellspacing:"0",border:"1"}},[r("tbody",{attrs:{id:"cjlb_tbody"}},[r("tr",{staticStyle:{"background-color":"#eee"}},[r("td",{staticStyle:{width:"20%"}},[t._v("1")]),t._v(" "),r("td",[t._v("建筑管理")])]),t._v(" "),r("tr",[r("td",[t._v("2")]),t._v(" "),r("td",[t._v("六位一体")])])])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"page_footer",staticStyle:{display:"none"}},[r("div",{staticClass:"footer_button_div"},[r("div",{staticClass:"alert_bottom_three orange_background",attrs:{id:"backtofirst"}},[t._v("返回")])])])}]},2182:function(t,e,r){"use strict";var a=r(1604),i=r.n(a);i.a},517:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=r(2180),i=r(1602);for(var c in i)"default"!==c&&function(t){r.d(e,t,function(){return i[t]})}(c);var s=(r(2182),r(0)),o=Object(s.a)(i.default,a.a,a.b,!1,null,null,null);e.default=o.exports}});