webpackJsonp([93],{1713:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=i(1714),r=i.n(a);for(var d in a)"default"!==d&&function(e){i.d(t,e,function(){return a[e]})}(d);t.default=r.a},1714:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=i(52),r=function(e){return e&&e.__esModule?e:{default:e}}(a);t.default={name:"zhxcEdit",mounted:function(){function e(t,i){console.log("图片张数："+window.picture_array.length+"；当前第"+i+"张");var r="";r+=toJson("base64Str",t),doPost("app_publicOpinion_upPic.action",r,function(t){if(0==t.code){if(i<parseInt(window.picture_array.length)){console.log("当前上传第:"+i+"张,下次上传第"+i+"张");var r=parseInt(i)+1;e(window.picture_array[i],r)}else console.log("图片上传结束");isNull(window.picture_upImg)?window.picture_upImg=t.datas.path:window.picture_upImg=window.picture_upImg+";"+t.datas.path,console.log("当前type"+i+"；总共张数："+window.picture_array.length),parseInt(i)==window.picture_array.length?(a("",$("#zfxc_edit_problem").val(),$("#ssp_edit_endTime").val(),getNowTime(),window.doDeptArr),console.log("type和图片长度相等"+i)):console.log("type和图片长度不相等")}else toast(t.message)},"","")}function t(){$("#zfxc_edit_page table tr td").addClass("gray_line_bottom"),$("#zfxc_edit_page table tr td input").val(""),$("#zfxc_edit_page table tr td textarea").val(""),window.picture_array=[],window.picture_upImg="",window.orginId="",window.choiceThingsParts="",initMapInfo("#zfxc_edit_address"),window.choiceThingsParts="",window.choiceBigType="",window.choiceSmallType="",window.choiceOneGridId="",$("#zfxc_edit_img_scroll").css("transform","none"),$("#zfxc_edit_img_wrapper .scroll-bar-x").css("transform","none"),$("#ssp_words").val("0/150"),$("#zfxc_edit_page #zfxc_edit_img").empty(),$("#zfxc_edit_page #zfxc_edit_img").append('<img class="goodsimgone" style="padding-top:2em;" src="/staitc/resources/images/icon_add_photo.png" id="choicemore">')}function i(e,t){$(".KpiTcbackG").remove();$("#zfxc_edit_page").append($('<div class="KpiTcbackG" style="display:none;"><div class="Tipscontent"><p>处理部门</p><ul id="hear"><li class="action"><a href="#fragment-1"><span>村、社区</span></a></li><li><a href="#fragment-2"><span>职能部门</span></a></li><li><a href="#fragment-3"><span>专业公司</span></a></li> </ul><div id="fragment-1" style="display: block;" class="checkboxList"></div><div id="fragment-2" class="checkboxList2"></div><div id="fragment-3" class="checkboxList3"></div><div class="tc mt5"><span class="KpiFormBut">确定</span></div></div></div>')),$("#hear li").eq(0).listen("quickClick",function(e){$("#hear li").removeClass("action"),$("#hear li").eq(0).addClass("action"),$("#fragment-2").hide(),$("#fragment-3").hide(),$("#fragment-1").show()}),$("#hear li").eq(1).listen("quickClick",function(e){$("#hear li").removeClass("action"),$("#hear li").eq(1).addClass("action"),$("#fragment-1").hide(),$("#fragment-3").hide(),$("#fragment-2").show()}),$("#hear li").eq(2).listen("quickClick",function(e){$("#hear li").removeClass("action"),$("#hear li").eq(2).addClass("action"),$("#fragment-1").hide(),$("#fragment-2").hide(),$("#fragment-3").show()}),doPost("chooseDepartment.action","",function(e){if(!isNull(e)&&e.length>0){for(var t=e,i=0;i<t.length;i++){var a,d,n;window.doDeptArr=[],"01"==t[i].deptTypeCode?(a=$('<div style="padding:1.5% 0;display:inline-block;width:50%;vertical-align:middle;"><input type="checkbox" value="" class="webkit-appearance disI vm"><span class="disI vm f14" style="margin-left:3%;">'+t[i].deptName+"</span> </div>"),a.data("lidata",t[i]),a.listen("quickClick",function(e){var t=$(e.currentTarget).find("input").is(":checked"),i=$(e.currentTarget).data("lidata");if(t){$(e.currentTarget).find("input").attr("checked",!1);for(var a=-1,d=0;d<window.doDeptArr.length;d++)if(i.deptCode==window.doDeptArr[d].deptCode){a=d;break}-1!=a&&window.doDeptArr.splice(a,1)}else if($(e.currentTarget).find("input").attr("checked",!0),window.doDeptArr.length>0){for(var n=null,d=0;d<window.doDeptArr.length;d++)if(i.deptCode==window.doDeptArr[d].deptCode){n=!0;break}n||window.doDeptArr.push(i)}else window.doDeptArr.push(i);console.error("window.doDeptArr:"+(0,r.default)(window.doDeptArr))})):"02"==t[i].deptTypeCode?(d=$('<div style="padding:1.5% 0;display:inline-block;width:50%;vertical-align:middle;"><input type="checkbox" value="" class="webkit-appearance disI vm"><span class="disI vm f14" style="margin-left:3%;">'+t[i].deptName+"</span> </div>"),d.data("lidata1",t[i]),d.listen("quickClick",function(e){var t=$(e.currentTarget).find("input").is(":checked"),i=$(e.currentTarget).data("lidata1");if(t){$(e.currentTarget).find("input").attr("checked",!1);for(var a=-1,d=0;d<window.doDeptArr.length;d++)if(i.deptCode==window.doDeptArr[d].deptCode){a=d;break}-1!=a&&window.doDeptArr.splice(a,1)}else if($(e.currentTarget).find("input").attr("checked",!0),window.doDeptArr.length>0){for(var n=null,d=0;d<window.doDeptArr.length;d++)if(i.deptCode==window.doDeptArr[d].deptCode){n=!0;break}n||window.doDeptArr.push(i)}else window.doDeptArr.push(i);console.error("window.doDeptArr:"+(0,r.default)(window.doDeptArr))})):"03"==t[i].deptTypeCode&&(n=$('<div style="padding:1.5% 0;display:inline-block;width:50%;vertical-align:middle;"><input type="checkbox" value="" class="webkit-appearance disI vm"><span class="disI vm f14" style="margin-left:3%;">'+t[i].deptName+"</span> </div>"),n.data("lidata2",t[i]),n.listen("quickClick",function(e){var t=$(e.currentTarget).find("input").is(":checked"),i=$(e.currentTarget).data("lidata2");if(t){$(e.currentTarget).find("input").attr("checked",!1);for(var a=-1,d=0;d<window.doDeptArr.length;d++)if(i.deptCode==window.doDeptArr[d].deptCode){a=d;break}-1!=a&&window.doDeptArr.splice(a,1)}else if($(e.currentTarget).find("input").attr("checked",!0),window.doDeptArr.length>0){for(var n=null,d=0;d<window.doDeptArr.length;d++)if(i.deptCode==window.doDeptArr[d].deptCode){n=!0;break}n||window.doDeptArr.push(i)}else window.doDeptArr.push(i);console.error("window.doDeptArr:"+(0,r.default)(window.doDeptArr))})),$("#zfxc_edit_page").find(".checkboxList").append(a),$("#zfxc_edit_page").find(".checkboxList2").append(d),$("#zfxc_edit_page").find(".checkboxList3").append(n)}$("#zfxc_edit_page").find(".KpiFormBut").listen("quickClick",function(e){var t="";if(window.doDeptArr.length>0)for(var i=0;i<window.doDeptArr.length;i++)i==window.doDeptArr.length-1?t+=window.doDeptArr[i].deptName:t+=window.doDeptArr[i].deptName+",";$("#zfxc_edit_page").find(".KpiTcbackG").hide(),$("#case_doDept").val(t)}),$("#zfxc_edit_page").find(".KpiTcbackG").show()}else toast(e.message)},"","")}function a(e,t,i,a,d){console.error("zhangsan::"+(0,r.default)(window.doDeptArr)),console.error("zhangsan::"),console.log("上传的图片信息："+window.picture_upImg+"经纬度："+window.choiceLongitude+","+window.choiceLatitude);var n=$("#zfxc_edit_address").text(),o="";o+=toJson("origin","5")+"&",o+=toJson("loginId",window.localStorage.loginId)+"&",o+=toJson("problem",$.trim(t))+"&",o+=toJson("reportPics",window.picture_upImg)+"&",o+=toJson("longitude",$.trim(window.choiceLongitude))+"&",o+=toJson("latitude",$.trim(window.choiceLatitude))+"&",o+=toJson("location",$.trim(n)),doPost("dsb.action",o,function(e){window.leadercommitFlag=0,$("#zfxc_save_returnAddress_leader").removeClass("gray_gray_background"),$("#zfxc_save_returnAddress_leader").addClass("orange_background"),0==e.code?(hideLoading(),toast(e.message),cleadCaseEdit(),waitJumpPage("../load/welcome.html")):(hideLoading(),toast(e.message))},"","")}function d(e){return!/\s/.test(e)}var n=this;window.searchPage=2,function(){$("#zfxc_edit_wrapper")[0].style.height=window.localInnerHeight-$("#zfxc_edit_page .page_header").height()-$("#zfxc_edit_page .page_footer").height()+"px",initScroll({wrapper:"zfxc_edit_wrapper",dir:"y",bounce:!1,scrollBar:!0}),scrollToTop("zfxc_edit_wrapper"),t(),window.leadercommitFlag=0}(),$("#zfxc_edit_page .back-button").listen("quickClick",function(e){n.$router.push({path:"welcome",query:{}})}),$("#zfxc_edit_page #zfxc_edit_address_img").listen("quickClick",function(e){showMapAlert("请选择位置","确定","",function(){$("#zfxc_edit_address").html($("#map_html_address").html()),$(".mapshowalert").remove()})}),$("#zfxc_edit_page #choicemore").click(function(e){window.upload_imgscroll="zfxc_edit_img_scroll",window.upload_imgwrapper="zfxc_edit_img_wrapper",window.upload_addimg="zfxc_edit_img",getPhotograph()}),$("#zfxc_edit_page .right_img").listen("quickClick",function(e){window.originType="5",n.$router.push({path:"ycjList",query:{}})}),chooseDate("ssp_edit_endTime","datetime"),$("#zfxc_edit_page #case_doDept").listen("quickClick",function(e){i()}),$("#zfxc_edit_page .page_footer").listen("quickClick",function(t){var i=d($("#zfxc_edit_problem").val());window.leadercommitFlag||(isNull($("#zfxc_edit_problem").val())||0==i?0==i?toast("问题描述请不要输入空格"):toast("请输入问题描述"):showContentAlert("确认保存本次提交吗？",function(){},function(){window.leadercommitFlag=1,$("#zfxc_save_returnAddress_leader").removeClass("orange_background"),$("#zfxc_save_returnAddress_leader").addClass("gray_gray_background"),!isNull(window.picture_array)||window.picture_array.length>0?(window.picture_upImg="",showLoading("上传中","","","/staitc/resources/images/loading.gif"),e(window.picture_array[0],1)):a("",$("#zfxc_edit_problem").val())},"确定"))})}}},1715:function(e,t){},2291:function(e,t,i){"use strict";var a=i(2292);i.d(t,"a",function(){return a.a}),i.d(t,"b",function(){return a.b})},2292:function(e,t,i){"use strict";i.d(t,"a",function(){return a}),i.d(t,"b",function(){return r});var a=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},r=[function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{attrs:{"data-role":"page",id:"zfxc_edit_page"}},[i("div",{staticClass:"page_header"},[i("img",{staticClass:"left_img back-button",attrs:{src:"/staitc/resources/images/icon_white_back.png"}}),e._v(" "),i("div",{staticClass:"page_header_title"},[e._v("执法巡查")]),e._v(" "),i("div",{staticClass:"right_img right_btn",staticStyle:{height:"52px","line-height":"52px",top:"0",padding:"0",margin:"0","font-size":"14px","text-align":"center",right:"0em"}},[e._v("已上报")])]),e._v(" "),i("div",{staticClass:"page_content"},[i("div",{staticClass:"jszx-wrapper",attrs:{id:"zfxc_edit_wrapper"}},[i("div",{staticClass:"jszx-scroller"},[i("div",{staticClass:"html_margin white_background"},[i("table",{staticClass:"inp_table",attrs:{cellpadding:"0",cellspacing:"0"}},[i("tr",[i("td",[e._v("上传图片")]),e._v(" "),i("td",{attrs:{colspan:"2"}},[i("input",{staticClass:"small",attrs:{id:"good_num",value:"0/5",readonly:"",type:"text"}})])]),e._v(" "),i("tr",[i("td",{staticClass:"commodityAddImgs",attrs:{colspan:"3"}},[i("div",{staticClass:"jszx-wrapper",attrs:{id:"zfxc_edit_img_wrapper"}},[i("div",{staticClass:"jszx-scroller",attrs:{id:"zfxc_edit_img_scroll"}},[i("div",{attrs:{id:"zfxc_edit_img"}})])])])]),e._v(" "),i("tr",{attrs:{id:"zfxc_location_tr"}},[i("td",{staticStyle:{"min-width":"5em"}},[e._v("位置描述"),i("span",[e._v("*")])]),e._v(" "),i("td",{staticStyle:{padding:"1em 0.5em 1em 0em","line-height":"1.4em","text-align":"right"}},[i("div",{attrs:{contenteditable:"true",id:"zfxc_edit_address"}})]),e._v(" "),i("td",{staticStyle:{width:"1%"},attrs:{id:"zfxc_edit_address_img"}},[i("img",{staticClass:"div_input_value_img",attrs:{src:"/staitc/resources/images/icon_dz.png"}})])]),e._v(" "),i("tr",[i("td",{staticStyle:{"padding-top":"0.5em"}},[e._v("问题描述"),i("span",[e._v("*")])]),e._v(" "),i("td",{attrs:{colspan:"2"}},[i("input",{staticClass:"small gray_dark_font",staticStyle:{color:"#999999"},attrs:{readonly:"true",id:"zfxc_case_words"}})])]),e._v(" "),i("tr",[i("td",{attrs:{colspan:"3"}},[i("textarea",{staticStyle:{"text-align":"left","min-height":"5em",padding:"0em 0.5em 0em 1em"},attrs:{onfocus:"newCheckWord('zfxc_edit_problem',500,'zfxc_case_words')",onKeyUp:"javascript:newCheckWord('zfxc_edit_problem',500,'zfxc_case_words');",onMouseDown:"javascript:newCheckWord('zfxc_edit_problem',500,'zfxc_case_words');",placeholder:"请输入问题描述",id:"zfxc_edit_problem"}})])])])])])])]),e._v(" "),i("div",{staticClass:"page_footer"},[i("div",{staticClass:"footer_button_div"},[i("div",{staticClass:"alert_bottom_three orange_background",attrs:{id:"zfxc_save_returnAddress_leader"}},[e._v("保存")])])])])}]},2293:function(e,t,i){"use strict";var a=i(1715),r=i.n(a);r.a},554:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=i(2291),r=i(1713);for(var d in r)"default"!==d&&function(e){i.d(t,e,function(){return r[e]})}(d);var n=(i(2293),i(0)),o=Object(n.a)(r.default,a.a,a.b,!1,null,"23fed3db",null);t.default=o.exports}});