webpackJsonp([118],{1629:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=i(1630),n=i.n(a);for(var r in a)"default"!==r&&function(e){i.d(t,e,function(){return a[e]})}(r);t.default=n.a},1630:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"",mounted:function(){function e(){var e=new Media(window.wjpwDataDirFileSystem.nativeURL+"/myrecording.mp3",function(){console.log("Media_succ")},function(){console.log("Media_fail")});e.startRecord();try{clearInterval($("#implement_edit_page").data("rememberTimer"))}catch(e){}var t=0;rememberTimer=setInterval(function(){t+=1,$(".recoedTime").html(t+"'s")},1e3),$("#implement_edit_page").data("mediaRec",e),$("#implement_edit_page").data("rememberTimer",rememberTimer)}function t(){var e=$("#implement_edit_page").data("mediaRec");e.stopRecord(),e.release(),$(".recordStart").hide(),$(".recordFinish").show(),clearInterval($("#implement_edit_page").data("rememberTimer"))}function i(){function e(e){e.root.getFile("zjmanagement/data/myrecording.mp3",{create:!1},function(e){e.file(function(e){var t=new FileReader;t.onloadend=function(e){a(e.target.result,"3")},t.readAsDataURL(e)},function(){console.log("file error ")})},function(){console.log("获取文件失败！")})}function t(){toast("路径请求失败！！")}if(!$("#implement_edit_page").data("mediaRec"))return void o();window.requestFileSystem(LocalFileSystem.PERSISTENT,5242880,e,t)}function a(e,t){var i="";i+=toJson("base64Str",e),doPost("app_upAudio.action",i,function(e){0==e.code?o(e.data):toast(e.message)},"","")}function n(){$("#projectname_edit").val(""),$("#handlername_edit").val(""),$("#supervisesuggestion_problem").val(""),window.localStorage.currhandlernameCodes=""}function r(){$("#implement_edit_page").data("taskdetail",null),$("#implement_edit_page").data("centerTaskDept",null),$("#implement_edit_page").data("taskDept",null),$("#implement_edit_page").data("taskno",""),$("#implement_edit_page").data("taskDeptArray",[])}function o(e){var t=window.localStorage.implementationid,i=window.projectname,a=window.localStorage.currhandlernameCodes,n=$("#handlername_edit").val(),r=$("#supervisesuggestion_problem").val(),o="";o+=toJson("id",t)+"&",o+=toJson("projectname",i)+"&",o+=toJson("userid",window.localStorage.userId)+"&",o+=toJson("username",window.localStorage.userName)+"&",o+=toJson("handlerid",a)+"&",o+=toJson("handlername",n)+"&",o+=toJson("supervisesuggestion",r),doPost("ap_projectSupervise.action",o,function(e){"0"==e.code&&(toast(e.message),l.$router.push({path:"/replyList"}))},"")}function d(e,t){$(".KpiTcbackG").remove();$("#implement_edit_page").append($('<div class="KpiTcbackG" style="display:none;"><div class="Tipscontent"><p>督办人</p><form style=""><div class="checkboxList"></div><div class="tc mt5"><span class="KpiFormBut">确定</span></div></form></div></div>')),$.ajax({type:"POST",url:window.serverUrl+"findUsersByType.action",timeout:6e4,data:{},dataType:"json",contentType:"application/x-www-form-urlencoded; charset=utf-8",success:function(e){if(hideLoading(),!isNull(e)&&e.length>0){for(var t=e,i=1;i<t.length;i++){var a;window.doUsersArr={},a=$('<div style="padding:1.5% 0;display:inline-block;width:50%;vertical-align:middle;"><input type="radio" value="" class="disI vm"><span class="disI vm f14" style="margin-left:3%;">'+t[i].text+"</span> </div>"),a.data("lidata",t[i]),a.listen("quickClick",function(e){$(".KpiTcbackG").find("input").attr("checked",!1);var t=$(e.currentTarget).find("input").is(":checked"),i=$(e.currentTarget).data("lidata");if(t){$(e.currentTarget).find("input").attr("checked",!1);for(var a=-1,n=0;n<window.doUsersArr.length;n++)if(i.id==window.doUsersArr[n].id){a=n;break}-1!=a&&window.doUsersArr.splice(a,1)}else if($(e.currentTarget).find("input").attr("checked",!0),window.doUsersArr.length>0){for(var r=null,n=0;n<window.doUsersArr.length;n++)if(i.id==window.doUsersArr[n].id){r=!0;break}r||(window.doUsersArr=i)}else window.doUsersArr=i}),$("#implement_edit_page").find(".checkboxList").append(a)}$("#implement_edit_page").find(".KpiFormBut").listen("quickClick",function(e){var t="",i="";t=window.doUsersArr.text,i=window.doUsersArr.id,$("#implement_edit_page").find(".KpiTcbackG").hide(),$("#handlername_edit").val(t),window.localStorage.currhandlernameCodes=i}),$("#implement_edit_page").find(".KpiTcbackG").show()}else toast(e.message)},error:function(e){hideLoading(),toast("请检查网络")}})}var l=this;$(".deptrecordVoice").on({touchstart:function(t){e()},touchmove:function(){},touchend:function(){t()}}),$(".page_content")[0].style.height=window.localInnerHeight-$(".page_header").height()-$(".page_footer").height()+"px",$(".page_content").children("div").get(0).style.height=window.localInnerHeight-$(".page_header").height()-$(".page_footer").height()+"px",$("input").addClass("small gray_dark_font ui-input-text ui-body-c ui-corner-all ui-shadow-inset"),$("textarea").addClass("ui-input-text ui-body-c ui-corner-all ui-shadow-inset"),$("#implement_edit_wrapper")[0].style.height=window.localInnerHeight-$("#implement_edit_page .page_header").height()+"px",initScroll({wrapper:"implement_edit_wrapper",dir:"y",bounce:!1,scrollBar:!0}),function(){n(),r(),$("#implement_edit_page").data("mediaRec",null)}(),function(){$(".recordStart").show(),$(".recordFinish").hide(),$("#implement_edit_page").data("mediaRec",null),$("#implement_edit_page").data("rememberTimer",null);var e=new Date,t=e.getFullYear(),a=e.getMonth()+1;a=a<10?"0"+a:a;var n=e.getDate(),r=e.getHours(),s=e.getMinutes(),c=e.getSeconds(),p=t+"-"+a+"-"+n+" "+r+":"+s+":"+c,m="",u="";m+='<td colspan="3" style="padding: 1em;">督办人&nbsp; &nbsp;&nbsp;&nbsp; <i id="leadreply">'+window.localStorage.userName+"</i></td>",u+='<td colspan="3" style="padding: 1em;">督办时间 &nbsp; <i id="leadreplytime">'+p+"</i></td>",$("#leadreply_tr").html(m),$("#leadreplytime_tr").html(u),$("#projectname_edit").val(window.projectname),$("#enterBtn").listen("quickClick",function(e){i()}),$("#save_implement_edit").listen("quickClick",function(e){isNull($("#projectname_edit").val())?toast("请输入项目名称"):isNull($("#handlername_edit").val())?toast("请输入督察人姓名"):isNull($("#supervisesuggestion_problem").val())?toast("请输入督办意见"):showContentAlert("确认保存本次提交吗？",function(){},function(){o()},"确定")}),$("#implement_edit_page").on("click",".KpiTcbackG",function(e){}),$("#implement_edit_page .back-button").listen("quickClick",function(e){l.$router.back()}),$("#implement_edit_page #handlername_edit").listen("quickClick",function(e){d()}),chooseDate("appEnfor_end_time","datetime"),$("#implement_edit_page #appEnforchoice").click(function(e){window.upload_imgscroll="appEnfor_edit_img_scroll",window.upload_imgwrapper="appEnfor_edit_img_wrapper",window.upload_addimg="appEnfor_edit_img",getPhotograph()}),$(".deptrecordPlay").click(function(){window.flag||(window.flag=!0,mediaRecObj=new Media(window.wjpwDataDirFileSystem.nativeURL+"/myrecording.mp3",function(){console.log("Media_succ")},function(){console.log("Media_fail")}),$("#implement_edit_page").data("mediaRec",mediaRecObj)),mediaRecObj.play()}),$(".deptrecordDel").click(function(){window.flag1||(window.flag1=!0,mediaRecObj=new Media(window.wjpwDataDirFileSystem.nativeURL+"/myrecording.mp3",function(){console.log("Media_succ")},function(){console.log("Media_fail")}),$("#implement_edit_page").data("mediaRec",mediaRecObj)),mediaRecObj.release(),window.flag=!1,window.flag1=!1,$("#implement_edit_page").data("mediaRec",null),$(".recordStart").show(),$(".recordFinish").hide()})}(),function(){window.requestFileSystem(window.LocalFileSystem.PERSISTENT,5242880,function(e){window.wjpwFileSystem=e,e.root.getDirectory("zjmanagement",{create:!0,exclusive:!1},function(e){window.rootDirFileSystem=e,e.getDirectory("data",{create:!0,exclusive:!1},function(e){window.wjpwDataDirFileSystem=e},null)},null)},null),$("#implement_edit_page").data("mediaRec",null)}()}}},1631:function(e,t){},2207:function(e,t,i){"use strict";var a=i(2208);i.d(t,"a",function(){return a.a}),i.d(t,"b",function(){return a.b})},2208:function(e,t,i){"use strict";i.d(t,"a",function(){return a}),i.d(t,"b",function(){return n});var a=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{attrs:{"data-role":"page",id:"implement_edit_page"}},[i("tk-header",[e._v("\n        督办意见\n    ")]),e._v(" "),e._m(0),e._v(" "),e._m(1)],1)},n=[function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"page_content"},[i("div",{staticClass:"jszx-wrapper",attrs:{id:"implement_edit_wrapper"}},[i("div",{staticClass:"jszx-scroller"},[i("div",{staticClass:"html_margin white_background"},[i("table",{staticClass:"inp_table",attrs:{cellpadding:"0",cellspacing:"0"}},[i("tr",[i("td",{staticStyle:{"padding-top":"0.5em","border-bottom":"1px solid #f3f3f3"}},[e._v("项目名称")]),e._v(" "),i("td",{staticClass:"gray_line_bottom",attrs:{colspan:"2"}},[i("input",{staticClass:"small gray_dark_font",staticStyle:{color:"#999999","text-overflow":"ellipsis"},attrs:{id:"projectname_edit"}})])]),e._v(" "),i("tr",[i("td",{staticStyle:{"padding-top":"0.5em","border-bottom":"1px solid #f3f3f3"}},[e._v("选择人员")]),e._v(" "),i("td",{staticClass:"gray_line_bottom",attrs:{colspan:"2"}},[i("input",{staticClass:"small gray_dark_font",staticStyle:{color:"#999999"},attrs:{id:"handlername_edit"}})])]),e._v(" "),i("tr",[i("td",{staticStyle:{"padding-top":"0.5em","border-bottom":"1px solid #f3f3f3"}},[e._v("增加描述")]),e._v(" "),i("td",{staticClass:"gray_line_bottom",attrs:{colspan:"2"}},[i("input",{staticClass:"small gray_dark_font",staticStyle:{color:"#999999"},attrs:{readonly:"true",id:"supervisesuggestion"}})])]),e._v(" "),i("tr",[i("td",{staticClass:"gray_line_bottom",attrs:{colspan:"3"}},[i("textarea",{staticStyle:{"text-align":"left","min-height":"5em",padding:"0em 0.5em 0em 1em"},attrs:{onfocus:"newCheckWord('supervisesuggestion_problem',500,'supervisesuggestion')",onKeyUp:"javascript:newCheckWord('supervisesuggestion_problem',500,'supervisesuggestion');",onMouseDown:"javascript:newCheckWord('supervisesuggestion_problem',500,'supervisesuggestion');",placeholder:"请增加你的描述",id:"supervisesuggestion_problem"}})])]),e._v(" "),i("tr",{attrs:{id:"leadreply_tr"}},[i("td",{staticStyle:{padding:"1em"},attrs:{colspan:"3"}},[e._v("督办人 "),i("span",{attrs:{id:"leadreply"}})])]),e._v(" "),i("tr",{attrs:{id:"leadreplytime_tr"}},[i("td",{staticStyle:{padding:"1em"},attrs:{colspan:"3"}},[e._v("督办时间 "),i("span",{attrs:{id:"leadreplytime"}})])])])])])])])},function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"page_footer"},[i("div",{staticClass:"footer_button_div"},[i("div",{staticClass:"alert_bottom_three orange_background",attrs:{id:"save_implement_edit"}},[e._v("确 认")])])])}]},2209:function(e,t,i){"use strict";var a=i(1631),n=i.n(a);n.a},526:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=i(2207),n=i(1629);for(var r in n)"default"!==r&&function(e){i.d(t,e,function(){return n[e]})}(r);var o=(i(2209),i(0)),d=Object(o.a)(n.default,a.a,a.b,!1,null,"422469c7",null);t.default=d.exports}});