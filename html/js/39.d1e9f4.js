webpackJsonp([39],{1986:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=r(1987),n=r.n(a);for(var o in a)"default"!==o&&function(t){r.d(e,t,function(){return a[t]})}(o);e.default=n.a},1987:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=r(461),n=function(t){return t&&t.__esModule?t:{default:t}}(a);e.default={name:"patrolRecord",data:function(){return{date:"",urllist:"/wgh/appfindCaseListByUserId.action",params:{userId:window.localStorage.userId,origin:3,pageSize:20,pageNum:1,status:""},recordList:[]}},created:function(){},mounted:function(){var t=(new Date).getFullYear(),e=(new Date).getMonth()+1;this.date=t.toString()+"-"+e.toString().padStart(2,"0"),this.ycj_findCaseListByUserId()},methods:{showTimePicker:function(){var t=this,e=(new Date).getFullYear();(new Date).getMonth();this.$createPotDatePicker({title:"请选择月份",min:new Date(e-3,7,8,8,0,0),max:new Date(e+7,9,20,20,59,59),value:new Date,format:{year:"YY年",month:"MM月"},columnCount:2,onSelect:function(e){console.log(e);var r=e.getFullYear().toString()+"-"+(e.getMonth()+1).toString().padStart(2,"0");console.log(r),t.date=r}}).show()},ycj_findCaseListByUserId:function(){var t=this,e={userId:window.localStorage.userId,origin:3,pageSize:20,pageNum:1,status:""};n.default.post("/wgh/app/findCaseListByUserId.action",e).then(function(e){if(0==e.code){var r=e.datas;!isNull(r)&&r.length>0&&(t.recordList=r)}else toast(e.message);window.flag1=!0})},showDetail:function(t,e){this.$router.push({path:"/photoAlreadyDetail",query:{rowId:e.row_id}})},pullDownnow:function(t){console.log(t)},findpullup:function(t){console.log(t)}}}},1988:function(t,e){},2590:function(t,e,r){"use strict";var a=r(2591);r.d(e,"a",function(){return a.a}),r.d(e,"b",function(){return a.b})},2591:function(t,e,r){"use strict";r.d(e,"a",function(){return a}),r.d(e,"b",function(){return n});var a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("tk-header",[t._v("随手拍")]),t._v(" "),r("tk-container",[r("div",{staticClass:"patrol-record-status"},[r("div",{staticClass:"patrol-record-status-name"},[t._v("已上报")]),t._v(" "),r("img",{staticClass:"patrol-record-status-arrow",attrs:{src:"",alt:""}})]),t._v(" "),r("tk-scroll",{staticStyle:{"background-color":"white"},attrs:{url:t.urllist,param:t.params,transfer:"datas",options:{pullDown:!0,pullUp:!0}},model:{value:t.recordList,callback:function(e){t.recordList=e},expression:"recordList"}},t._l(t.recordList,function(e){return r("div",{staticClass:"patrol-record-item",on:{click:function(r){return t.showDetail(t.i,e)}}},[r("div",{staticClass:"patrol-record-item-title"},[t._v("工单编号："+t._s(e.caseno)+" || "+t._s(e.origin))]),t._v(" "),r("div",{staticClass:"patrol-record-item-time"},[t._v(t._s(e.reportTime))])])}),0)],1)],1)},n=[]},2592:function(t,e,r){"use strict";var a=r(1988),n=r.n(a);n.a},642:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=r(2590),n=r(1986);for(var o in n)"default"!==o&&function(t){r.d(e,t,function(){return n[t]})}(o);var i=(r(2592),r(0)),s=Object(i.a)(n.default,a.a,a.b,!1,null,"70d7dcf0",null);e.default=s.exports}});