webpackJsonp([17],{1449:function(e,o,t){e.exports=t.p+"image/linkage.308500.png"},1450:function(e,o,t){e.exports=t.p+"image/db.9e6f58.png"},1451:function(e,o,t){e.exports=t.p+"image/ybsx.e46ce4.png"},1745:function(e,o,t){e.exports=t.p+"image/jf.201016.png"},1746:function(e,o,t){"use strict";Object.defineProperty(o,"__esModule",{value:!0});var i=t(1747),c=t.n(i);for(var a in i)"default"!==a&&function(e){t.d(o,e,function(){return i[e]})}(a);o.default=c.a},1747:function(e,o,t){"use strict";Object.defineProperty(o,"__esModule",{value:!0}),o.default={name:"welcome",data:function(){return{}},mounted:function(){function e(){var e="";e+=toJson("userid",$.trim(window.localStorage.userId)),doPost("readInformnoticeStatus.action",e,function(e){console.log(e),0!==e.unreadnum?($(".red_notice_num").html(e.unreadnum),$(".red_notice_num").show()):$(".red_notice_num").hide()},"")}function o(){var e=new Date,o="",t=e.getFullYear(),i=e.getMonth()+1;i=i<10?"0"+i:i;var c=e.getDate();c=c<10?"0"+c:c,o=t+"-"+i+"-"+c+" 00:00";var a=o+":00",l="";l+=toJson("startTime",a)+"&",l+=toJson("endTime","")+"&",l+=toJson("userId",window.localStorage.userId),doPost("getLocationByUserId2.action",l,function(e){if(e.time){$("#zgtime span").text(e.time);parseInt(e.time)<120?$("#zgtime span").css("color","red"):$("#zgtime span").css("color","green")}})}function t(){$.ajax({url:"http://wthrcdn.etouch.cn/weather_mini?city=南京",dataType:"jsonp",type:"post",data:{},success:function(e){var o=e.data.forecast[0],t=o.fengli,i=(t.slice(9,12),o.high.substring(2)),c=o.low.substring(2),a=o.type+c+"-"+i;$("#getweater").text(a)}})}function i(){var e="";e+=toJson("userid",$.trim(window.localStorage.userId))+"&",e+=toJson("searchContent","")+"&",e+=toJson("noticeType","")+"&",e+=toJson("pageSize","10")+"&",e+=toJson("pageNum",1),doPost("noticeList.action",e,function(e){if(0==e.code){$("#welcome_wait_work_html").empty();var o=e.datas;if(getDataLength(e.page[0].total),!isNull(o)&&o.length>0){$("#load_welcome_page #welcome_wait_work_html").show();for(var t=0;t<o.length;t++){var i="";i+='<table style="background: none;" cellspacing="0" class="gray_line_bottom list_one_table" cellpadding="0">',i+="   <tr>",i+='       <td colspan="2">',i+="[通知公告]"+o[t].title+"</td>",i+="   </tr>",i+="   <tr>",i+='       <td colspan="2" class="small gray_font" style="text-align: left;">'+o[t].creatTime+"</td>",i+="   </tr>",i+="</table>";var a=createListRow(i).appendTo("#welcome_wait_work_html");a.data("data",o[t]),a.listen("quickClick",function(e){var o=$(e.currentTarget).data("data");console.log("id："+o.row_id),window.noticeContentId=o.row_id,window.noticetype="welcome",c.$router.push({path:"noticeDetail",query:{}})})}}else $("#load_welcome_page #welcome_wait_work_html").hide()}},"")}var c=this;window.searchPage=2,function(){var c="",a=new Date,l=a.getHours();c=l<6?",凌晨好！":l<9?",早上好！":l<12?",上午好！":l<14?",中午好！":l<17?",下午好！":l<19?",傍晚好！":l<22?",晚上好！":",夜里好！";var r=window.localStorage.userName+c;$("#page_header_title #headername").text(r),$(".red_num").hide(),t(),$("#load_welcome_wrapper")[0].style.height=window.localInnerHeight-$("#load_welcome_page #page_header").height()-$("#load_welcome_page .page_footer").height()-$("#zgtime").height()+"px",$("#page_content")[0].style.height=window.localInnerHeight-$("#load_welcome_page #page_header").height()-$("#load_welcome_page .page_footer").height()-$("#zgtime").height()+"px",initScroll({wrapper:"load_welcome_wrapper",dir:"y",bounce:!1,scrollBar:!0}),scrollToTop("load_welcome_wrapper"),app_noticeTopDetail(),$("#load_welcome_page #welcome_notice_vticker").vTicker({animation:"fade",mousePause:!0,showItems:2}),getNewInfo(),window.welcomePage=!0,$("#load_welcome_page #userTypeName").text(window.localStorage.userTypeName),$("#load_welcome_page .page_footer").show(),e(),"03"===window.localStorage.userType&&o(),$("#load_welcome_page .notice_div").hide(),i(),"未签到"==window.localStorage.signState?$("#load_welcome_page .welcome_clock_img img").attr("src","../../../static/img/icon_clock_wei.png"):"签到"==window.localStorage.signState?$("#load_welcome_page .welcome_clock_img img").attr("src","../../../static/img/icon_clock_has.png"):"签退"==window.localStorage.signState&&$("#load_welcome_page .welcome_clock_img img").attr("src","../../../static/img/icon_clock_wei.png"),$("#welcome_xxcj").hide(),$("#welcome_zfxc").hide(),$("#welcome_doubly_stochastic").hide(),$("#welcome_jfcx").hide(),$("#welcome_zggj").hide(),$("#welcome_ldzp").hide(),$("#welcome_ldzb").show(),$("#leader_welcome_wait_work").hide(),$("#leader_welcome_already_work").hide(),$("#welcome_zhcx").hide(),$("#zgtime_div").hide(),"03"===window.localStorage.userType?($("#welcome_xxcj").show(),$("#welcome_jfcx").show(),$("#welcome_zggj").show(),$("#welcome_wait_work").show(),$("#welcome_already_work").show(),$("#welcome_sspai").show(),$("#welcome_tdzx").show(),$("#welcome_leader_instruction").hide(),$("#welcome_wggl").hide(),$("#welcome_ldzb").hide(),$("#zgtime_div").show(),$("#welcome_work_linkage").hide(),$("#welcome_zfxc").hide()):"05"===window.localStorage.userType?($("#welcome_xxcj").show(),$("#welcome_jfcx").hide(),$("#welcome_zggj").show(),$("#welcome_wait_work").hide(),$("#welcome_already_work").hide(),$("#welcome_leader_instruction").hide(),$("#welcome_wggl").hide(),$("#welcome_ldzb").hide()):"02"===window.localStorage.userType||"19"===window.localStorage.userType||"16"===window.localStorage.userType||"15"===window.localStorage.userType?($("#welcome_wait_work").show(),$("#welcome_already_work").show(),$("#welcome_leader_instruction").hide(),$("#welcome_jfcx").hide(),$("#welcome_zggj").hide(),$("#welcome_wggl").show(),$("#welcome_zhcx").show(),$("#welcome_work_linkage").show()):"01"===window.localStorage.userType?($("#welcome_wait_work").hide(),$("#welcome_already_work").hide(),$("#welcome_xxcj").hide(),$("#welcome_jfcx").hide(),$("#welcome_zggj").hide(),$("#welcome_leader_instruction").show(),$("#welcome_wggl").show(),$("#welcome_work_linkage").show()):"14"===window.localStorage.userType?($("#welcome_wait_work").show(),$("#welcome_already_work").show(),$("#welcome_xxcj").hide(),$("#welcome_jfcx").hide(),$("#welcome_zggj").hide(),$("#welcome_leader_instruction").hide(),$("#welcome_wggl").hide(),$("#welcome_tdzx").hide(),$("#welcome_kqdk").hide()):"17"===window.localStorage.userType||"18"===window.localStorage.userType?($("#welcome_wait_work").show(),$("#welcome_already_work").show(),$("#welcome_xxcj").hide(),$("#welcome_jfcx").hide(),$("#welcome_zggj").hide(),$("#welcome_wggl").show(),$("#welcome_ldzp").show(),$("#welcome_ldzb").hide(),$("#welcome_zhcx").show()):"06"===window.localStorage.userType?($("#welcome_doubly_stochastic").show(),$("#welcome_ldzb").show(),$("#welcome_sspai").show(),$("#welcome_tdzx").show(),$("#welcome_wait_work").hide(),$("#welcome_already_work").hide(),$("#welcome_wggl").hide(),$("#welcome_leader_instruction").hide()):"07"===window.localStorage.userType?($("#welcome_xxcj").hide(),$("#welcome_jfcx").hide(),$("#welcome_zggj").show(),$("#welcome_wait_work").show(),$("#welcome_already_work").show(),$("#welcome_doubly_stochastic").show(),$("#welcome_ldzb").hide(),$("#welcome_sspai").show(),$("#welcome_zfxc").show(),$("#welcome_tdzx").show(),$("#welcome_wggl").hide(),$("#welcome_leader_instruction").hide(),$("#welcome_work_linkage").hide()):($("#welcome_xxcj").hide(),$("#welcome_jfcx").hide(),$("#welcome_zggj").hide(),$("#welcome_wait_work").hide(),$("#welcome_already_work").hide(),$("#welcome_leader_instruction").hide(),$("#welcome_wggl").hide(),$("#welcome_ldzp").hide(),$("#welcome_doubly_stochastic").hide(),$("#welcome_sspai").hide(),$("#welcome_zfxc").hide()),setTimeout(function(){console.log("登陆成功，调用jpush"),jsict.StartActivity.setJpushAlias(window.localStorage.userId,function(e){console.log("jpush注册成功！")},function(e){console.log("startActivity error:"+e)})},5e3)}(),$("#page_footer").find(".jszx-bar-icon-up>div:eq(0)").listen("quickClick",function(e){c.$router.push({path:"welcome",query:{}})}),$("#page_footer").find(".jszx-bar-icon-up>div:eq(1)").listen("quickClick",function(e){c.$router.push({path:"noticeWelcomeList",query:{}})}),$("#page_footer").find(".jszx-bar-icon-up>div:eq(2)").listen("quickClick",function(e){c.$router.push({path:"peoplePhone",query:{}})}),$("#page_footer").find(".jszx-bar-icon-up>div:eq(3)").listen("quickClick",function(e){c.$router.push({path:"moreWelcome",query:{}})}),$("#load_welcome_page .welcome_clock_img").listen("quickClick",function(e){c.$router.push({path:"attendance",query:{}})}),$("#load_welcome_page #welcome_wait_work").listen("quickClick",function(e){c.$router.push({path:"waitTodoCaseList",query:{}})}),$("#load_welcome_page #welcome_already_work").listen("quickClick",function(e){c.$router.push({path:"caseAlreadyWelcomeList",query:{}})}),$("#load_welcome_page #leader_welcome_wait_work").listen("quickClick",function(e){c.$router.push({path:"leaderCaseWelcomeList",query:{}})}),$("#load_welcome_page #leader_welcome_already_work").listen("quickClick",function(e){c.$router.push({path:"leaderCaseAlreadyWelcomeList",query:{}})}),$("#load_welcome_page .notice_img").listen("quickClick",function(e){window.CaseWelcomePage="",window.thisCaseQueryType="1",c.$router.push({path:"taskWelcomeList",query:{}})}),$("#load_welcome_page #welcome_parts_issueReport").listen("quickClick",function(e){c.$router.push({path:"caseEdit",query:{}})}),$("#load_welcome_page #welcome_parts_opinion").listen("quickClick",function(e){window.opinionWelcomePage="",c.$router.push({path:"leaderList",query:{}})}),$("#load_welcome_page #welcome_work_approval").listen("quickClick",function(e){window.approvalListPage="",c.$router.push({path:"approvalList",query:{}})}),$("#load_welcome_page #welcome_work_rank").listen("quickClick",function(e){window.opinionWelcomePage="",c.$router.push({path:"rankListType",query:{}})}),$("#load_welcome_page #welcome_kqdk").listen("quickClick",function(e){window.opinionWelcomePage="",c.$router.push({path:"attendance",query:{}})}),$("#load_welcome_page #welcome_work_linkage").listen("quickClick",function(e){window.opinionWelcomePage="",c.$router.push({path:"linkageList",query:{}})}),$("#load_welcome_page #welcome_rental_housing").listen("quickClick",function(e){"01"===window.localStorage.userType?c.$router.push({path:"houseStatistics",query:{}}):c.$router.push({path:"firststep",query:{}})}),$("#load_welcome_page #welcome_doubly_stochastic").listen("quickClick",function(e){c.$router.push({path:"doubleRandomList",query:{}})}),$("#load_welcome_page #welcome_implement_project").listen("quickClick",function(e){c.$router.push({path:"implementProjectIndex",query:{}})}),$("#load_welcome_page #welcome_xxcj").listen("quickClick",function(e){c.$router.push({path:"xxcjList",query:{}})}),$("#load_welcome_page #welcome_zggj").listen("quickClick",function(e){c.$router.push({path:"zggj",query:{}})}),$("#load_welcome_page #welcome_jfcx").listen("quickClick",function(e){c.$router.push({path:"jfcx",query:{}})}),$("#load_welcome_page #welcome_leader_instruction").listen("quickClick",function(e){c.$router.push({path:"leaderInstructionsList",query:{}})}),$("#load_welcome_page #welcome_wggl").listen("quickClick",function(e){c.$router.push({path:"wggl",query:{}})}),$("#load_welcome_page #welcome_ldzp").listen("quickClick",function(e){c.$router.push({path:"leaderEdit",query:{}})}),$("#load_welcome_page #welcome_ldzb").listen("quickClick",function(e){c.$router.push({path:"ldzbEdit",query:{}})}),$("#load_welcome_page #welcome_sspai").listen("quickClick",function(e){setTimeout(function(){c.$router.push({path:"sspEdit",query:{}})},300)}),$("#load_welcome_page #welcome_tdzx").listen("quickClick",function(e){c.$router.push({path:"ddzx",query:{}})}),$("#load_welcome_page #welcome_zhcx").listen("quickClick",function(e){c.$router.push({path:"zhcx",query:{}})}),$("#load_welcome_page #welcome_zfxc").listen("quickClick",function(e){setTimeout(function(){c.$router.push({path:"zfxcEdit",query:{}})},300)})}}},1748:function(e,o){},2328:function(e,o,t){"use strict";var i=t(2329);t.d(o,"a",function(){return i.a}),t.d(o,"b",function(){return i.b})},2329:function(e,o,t){"use strict";t.d(o,"a",function(){return i}),t.d(o,"b",function(){return c});var i=function(){var e=this,o=e.$createElement;e._self._c;return e._m(0)},c=[function(){var e=this,o=e.$createElement,i=e._self._c||o;return i("div",{attrs:{"data-role":"page",id:"load_welcome_page"}},[i("img",{staticStyle:{width:"100%",height:"100%",position:"absolute",left:"0",top:"0","z-index":"1"},attrs:{src:t(2330)}}),e._v(" "),i("div",{staticStyle:{position:"relative","z-index":"99",height:"87px"},attrs:{id:"page_header"}},[i("div",{attrs:{id:"page_header_title"}},[i("div",{attrs:{id:"headername"}},[e._v(",下午好！")]),i("div",{attrs:{id:"getweater"}})]),e._v(" "),i("img",{staticStyle:{width:"68px",padding:"16px",position:"absolute",right:"0"},attrs:{src:t(2331)}})]),e._v(" "),i("div",{staticClass:"page_content",staticStyle:{"z-index":"99",margin:"0 auto",width:"90%","padding-bottom":"64px"},attrs:{id:"page_content"}},[i("div",{staticClass:"jszx-wrapper",attrs:{id:"load_welcome_wrapper"}},[i("div",{staticClass:"jszx-scroller"},[i("div",{attrs:{id:"commodityimgscroll"}}),e._v(" "),i("div",{attrs:{id:"welcome_columnhtml"}}),e._v(" "),i("div",{staticClass:"home_tab_count_div",attrs:{id:"home_left_right_scroll"}},[i("div",{staticClass:"slide"},[i("div",{staticClass:"jszx-bar-icon-up jszx-bar-item-3 home_top_tab",staticStyle:{background:"none"}},[i("div",{attrs:{id:"welcome_doubly_stochastic"}},[i("img",{attrs:{src:t(2332)}}),e._v(" "),i("p",[e._v("双随机")])]),e._v(" "),i("div",{attrs:{id:"welcome_xxcj"}},[i("img",{attrs:{src:t(2333)}}),e._v(" "),i("p",[e._v("巡查上报")])]),e._v(" "),i("div",{attrs:{id:"welcome_wait_work"}},[i("img",{attrs:{src:t(1450)}}),e._v(" "),i("p",[e._v("我的待办")]),e._v(" "),i("div",{staticClass:"red_num welcome_wait_work_rednum"},[e._v("0")])]),e._v(" "),i("div",{attrs:{id:"welcome_already_work"}},[i("img",{attrs:{src:t(1451)}}),e._v(" "),i("p",[e._v("我的已办")])]),e._v(" "),i("div",{attrs:{id:"welcome_work_linkage"}},[i("img",{attrs:{src:t(1449)}}),e._v(" "),i("p",[e._v("联动处置")]),e._v(" "),i("div",{staticClass:"red_num",attrs:{id:"leaderHandle_linkage_num"}},[e._v("11")])]),e._v(" "),i("div",{attrs:{id:"welcome_sspai"}},[i("img",{attrs:{src:t(2334)}}),e._v(" "),i("p",[e._v("随手拍")])]),e._v(" "),i("div",{attrs:{id:"welcome_kqdk"}},[i("img",{attrs:{src:t(2335)}}),e._v(" "),i("p",[e._v("考勤打卡")])]),e._v(" "),i("div",{attrs:{id:"welcome_zhcx"}},[i("img",{attrs:{src:t(2336)}}),e._v(" "),i("p",[e._v("工单查询")])]),e._v(" "),i("div",{attrs:{id:"welcome_wggl"}},[i("img",{attrs:{src:t(1745)}}),e._v(" "),i("p",[e._v("积分排名")])]),e._v(" "),i("div",{attrs:{id:"welcome_ldzp"}},[i("img",{attrs:{src:t(2337)}}),e._v(" "),i("p",[e._v("领导直派")])]),e._v(" "),i("div",{attrs:{id:"welcome_zggj"}},[i("img",{attrs:{src:t(2338)}}),e._v(" "),i("p",[e._v("轨迹查看")])]),e._v(" "),i("div",{attrs:{id:"welcome_jfcx"}},[i("img",{attrs:{src:t(1745)}}),e._v(" "),i("p",[e._v("积分排名")])]),e._v(" "),i("div",{attrs:{id:"welcome_zfxc"}},[i("img",{attrs:{src:t(2339)}}),e._v(" "),i("p",[e._v("执法巡查")])]),e._v(" "),i("div",{attrs:{id:"welcome_tdzx"}},[i("img",{attrs:{src:t(2340)}}),e._v(" "),i("p",[e._v("调度中心")]),e._v(" "),i("div",{staticClass:"red_num welcome_tdzx"})])])])]),e._v(" "),i("div",{staticStyle:{height:"0.5em",background:"#eee",width:"100%"}}),e._v(" "),i("div",{staticStyle:{height:"20px",width:"100%"}}),e._v(" "),i("div",{attrs:{id:"welcome_wait_work_html"}})])])]),e._v(" "),i("div",{staticStyle:{"z-index":"999",position:"fixed",bottom:"50px",width:"100%",background:"#fff"},attrs:{id:"zgtime_div"}},[i("div",{staticStyle:{display:"inline-block","vertical-align":"middle",width:"49%",height:"4em","line-height":"4em","text-align":"left"}},[i("span",{staticStyle:{"padding-left":"1.5em"}},[e._v("今日在格时间")])]),e._v(" "),i("div",{staticStyle:{display:"inline-block","vertical-align":"middle",width:"49%",height:"4em","line-height":"4em","text-align":"right"},attrs:{id:"zgtime"}},[i("span",{staticStyle:{"padding-right":"1.5em",color:"green"}},[e._v("21")])])]),e._v(" "),i("div",{staticClass:"page_footer smaller",staticStyle:{"z-index":"99"},attrs:{id:"page_footer"}},[i("div",{staticClass:"jszx-bar-icon-up jszx-bar-item-4 "},[i("div",[i("img",{attrs:{src:t(2341),alt:""}}),e._v(" "),i("p",{staticStyle:{color:"#0283de"}},[e._v("首页")])]),e._v(" "),i("div",[i("img",{attrs:{src:t(2342),alt:""}}),e._v(" "),i("p",[e._v("公告")]),e._v(" "),i("div",{staticClass:"red_notice_num",staticStyle:{"font-size":"0.5em"}})]),e._v(" "),i("div",[i("img",{attrs:{src:t(2343),alt:""}}),e._v(" "),i("p",[e._v("通讯录")])]),e._v(" "),i("div",[i("img",{attrs:{src:t(2344),alt:""}}),e._v(" "),i("p",[e._v("我的")]),e._v(" "),i("div",{staticClass:"red_round_wode",attrs:{id:"newVersonRed_welcome"}})])])])])}]},2330:function(e,o,t){e.exports=t.p+"image/vg.39ee00.jpg"},2331:function(e,o,t){e.exports=t.p+"image/logo.7b2a2f.png"},2332:function(e,o,t){e.exports=t.p+"image/doubleRandom.e209b4.png"},2333:function(e,o,t){e.exports=t.p+"image/xxcj.546870.png"},2334:function(e,o,t){e.exports=t.p+"image/ssp.ef7f40.png"},2335:function(e,o,t){e.exports=t.p+"image/kqdk.6602f8.png"},2336:function(e,o,t){e.exports=t.p+"image/icon_bjgl.5f87c5.png"},2337:function(e,o,t){e.exports=t.p+"image/ldzp.c06973.png"},2338:function(e,o,t){e.exports=t.p+"image/zggj.4468f8.png"},2339:function(e,o,t){e.exports=t.p+"image/zfxc.9eed98.png"},2340:function(e,o,t){e.exports=t.p+"image/dd.a6e36f.png"},2341:function(e,o,t){e.exports=t.p+"image/icon_one_press.9c34ec.png"},2342:function(e,o,t){e.exports=t.p+"image/icon_two.761eaa.png"},2343:function(e,o,t){e.exports=t.p+"image/icon_three.3fca3c.png"},2344:function(e,o,t){e.exports=t.p+"image/icon_four.55c271.png"},2345:function(e,o,t){"use strict";var i=t(1748),c=t.n(i);c.a},565:function(e,o,t){"use strict";Object.defineProperty(o,"__esModule",{value:!0});var i=t(2328),c=t(1746);for(var a in c)"default"!==a&&function(e){t.d(o,e,function(){return c[e]})}(a);var l=(t(2345),t(0)),r=Object(l.a)(c.default,i.a,i.b,!1,null,"69557553",null);o.default=r.exports}});