webpackJsonp([54],{1858:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(1859),a=n.n(o);for(var i in o)"default"!==i&&function(e){n.d(t,e,function(){return o[e]})}(i);t.default=a.a},1859:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"peopleDetail",data:function(){return{}},created:function(){},mounted:function(){var e=this;console.log(this.$route.query.data),function(){$("#people_detail_wrapper")[0].style.height=window.localInnerHeight-$("#people_detail_page .page_header").height()-$("#people_detail_page .page_footer").height(),$("#people_detail_page .page_footer").height(),window.info='{"code":"0","datas":[{"deptName":"系统管理","userList":[{"phone":" ","tel":" ","id":"402880e92db726b5012db729f65f0001","userName":"系统管理员"}],"userCount":1,"id":"402880e92db5d2ee012db601b2220004"},{"deptName":"江苏省","userList":[],"userCount":0,"children":[{"children":[{"children":[{"children":[{"children":[{"id":"002002001001001001","text":"走访三级网格测试"}],"id":"002002001001001","text":"走访二级网格测试","state":"closed"}],"id":"002002001001","text":"丁岗镇(新能源产业园)","state":"closed"},{"id":"002002001002","text":"大路镇"},{"id":"002002001003","text":"姚桥镇"},{"id":"002002001004","text":"大港街道"},{"id":"002002001005","text":"丁卯街道(大学科技园)"}],"id":"002002001","text":"吴江平望","state":"closed"}],"id":"002002","text":"镇江市","state":"closed"}],"id":"8a8184b55b45f27c015b474e66520055"}]}',$("#people_phone_html").empty(),$("#people_phone_inp").val("");var t=e.$route.query.data.mobile,n=e.$route.query.data.tel,o=e.$route.query.data.duty,a=e.$route.query.data.display_name;$("#peopleName").text(a),t?$("#peoplePhone span").text(t):$("#peoplePhone span").text(""),n?$("#peopleTel span").text(n):$("#peopleTel span").text(""),o?$("#peopleDuty span").text(o):$("#peopleDuty span").text(""),t?$(".callphone").show():$(".callphone").hide(),n?$(".calltel").show():$(".calltel").hide()}(),$("#people_detail_page .back-button").listen("quickClick",function(t){e.$router.back(-1)}),$(".sort_box").on("click",".sort_list",function(e){$(e.currentTarget).attr("mobile")}),$(".callphone").on("click",function(){showContentAlert("确定要给："+window.peoplename+"，拨打电话吗<br/>温馨提醒，无SIM卡无法拨打电话哦",function(){},function(){jsict.util.call(function(){console.log("电话拨打ok")},function(e){console.log("电话拨打失败"+e)},window.phone)},"拨打")}),$(".calltel").on("click",function(){showContentAlert("确定要给："+window.peoplename+"，拨打电话吗<br/>温馨提醒，无SIM卡无法拨打电话哦",function(){},function(){jsict.util.call(function(){console.log("电话拨打ok")},function(e){console.log("电话拨打失败"+e)},window.tel)},"拨打")})},methods:{toChat:function(){this.$router.push("/chatRoom")}}}},1860:function(e,t){},2455:function(e,t,n){"use strict";var o=n(2456);n.d(t,"a",function(){return o.a}),n.d(t,"b",function(){return o.b})},2456:function(e,t,n){"use strict";n.d(t,"a",function(){return o}),n.d(t,"b",function(){return a});var o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{"data-role":"page",id:"people_detail_page"}},[n("tk-header",[e._v("\n        联系人详情\n    ")]),e._v(" "),e._m(0)],1)},a=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"page_content"},[n("div",{staticClass:"jszx-wrapper",attrs:{id:"people_detail_wrapper"}},[n("div",{staticClass:"jszx-scroller"},[n("div",[n("div",{staticStyle:{"text-align":"center",background:"#fff",height:"6em"}},[n("img",{staticStyle:{"margin-top":"1em"}})]),e._v(" "),n("div",{staticClass:"name",attrs:{id:"peopleName"}})]),e._v(" "),n("div",{staticClass:"sxsplit"}),e._v(" "),n("div",{attrs:{id:"peoplePhone"}},[e._v("手机:"),n("span"),e._v(" "),n("img",{staticClass:"callphone",attrs:{src:"/staitc/resources/images/call.png"}})]),e._v(" "),n("div",{attrs:{id:"peopleTel"}},[e._v("固定电话:"),n("span"),e._v(" "),n("img",{staticClass:"calltel",attrs:{src:"/staitc/resources/images/call.png"}})]),e._v(" "),n("div",{attrs:{id:"peopleDuty"}},[e._v("职务:"),n("span")])])])])}]},2457:function(e,t,n){"use strict";var o=n(1860),a=n.n(o);a.a},606:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(2455),a=n(1858);for(var i in a)"default"!==i&&function(e){n.d(t,e,function(){return a[e]})}(i);var l=(n(2457),n(0)),s=Object(l.a)(a.default,o.a,o.b,!1,null,"90810186",null);t.default=s.exports}});