webpackJsonp([38],{1989:function(e,s,t){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var i=t(1990),a=t.n(i);for(var n in i)"default"!==n&&function(e){t.d(s,e,function(){return i[e]})}(n);s.default=a.a},1990:function(e,s,t){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var i=t(52),a=function(e){return e&&e.__esModule?e:{default:e}}(i);s.default={data:function(){return{id:0,caseNumber:"",photoList:[],describe:"在建建筑叫停后又反复进行施工，叫停后无效，依然继续施工。",address:"江苏省南京市鼓楼区汉中路268号 中电鸿信信息科技有限公司",detailList:[],caseOrigin:{key:"工单来源",value:""},caseNo:{key:"工单编号",value:""},caseGridName:{key:"所属网格",value:""},caseTime:{key:"截止时间",value:""},reportPerson:{key:"上报人",value:""},operationList:[],processList:[],url:""}},created:function(){},mounted:function(){this.detailList=[this.caseTime,this.caseNo,this.caseOrigin,this.caseGridName,this.reportPerson],this.id=this.$route.query.rowId,this.getCaseDetail(this.id)},methods:{getCaseDetail:function(e){var s=this,t={para:"loginId="+window.localStorage.loginId+"&rowId="+e};console.log((0,a.default)(t)),this.url=window.serverUrl+"dsbOrderDetail.action",this.$http.post(this.url,t).then(function(e){if(void 0===e.code||"0"===e.code){console.log("接口返回成功");var t=e.datas;if(null!==t){if(t.pics.indexOf(";")>0){t.pics.split(";").forEach(function(e){s.photoList.push({src:window.imgUrl+e})})}else{var i=[];i.push(t.pics),window.opinionedImgArray=i,""!==t.pics&&"undefined"!==t.pics&&(s.photoList=[{src:window.imgUrl+t.pics}])}s.address=t.location,s.caseNumber=t.caseNo,s.describe=t.lproblem,s._inputValue(s.caseTime,t.reportTime),s._inputValue(s.caseNo,t.caseNo),s._inputValue(s.caseOrigin,t.origin);var a=t.gridName;a||(a=""),s._inputValue(s.caseGridName,a),s._inputValue(s.reportPerson,t.reportPerson),window.caseTaskOneTaskId=t.taskId,window.caseRow_id=t.rowId,s.processList=t.processSteps}}else toast(e.message)})},_inputValue:function(e,s){this.$set(e,"value",s)},_handle:function(){var e=this;this.$createTkBottomSelect({$props:{data:this.operationList},$events:{itemClick:function(s,t){console.log(s),console.log(t),window.caseOneTaskAction=t,e.$router.push({path:"/waitcaseTaskEdit"})}}}).show()},handle0:function(){this.$router.push({path:"/waitcaseTaskEdit",query:{id:this.id}})},handle1:function(){app.$createPotDialog({$props:{type:"confirm",content:"你是否确定要退回此案件？"},$events:{confirm:function(e){}}}).show()},handle2:function(){}}}},1991:function(e,s){},2593:function(e,s,t){"use strict";var i=t(2594);t.d(s,"a",function(){return i.a}),t.d(s,"b",function(){return i.b})},2594:function(e,s,t){"use strict";t.d(s,"a",function(){return i}),t.d(s,"b",function(){return a});var i=function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("div",{staticClass:"handle-case"},[t("tk-header",[e._v("详情")]),e._v(" "),t("tk-container",{staticClass:"handler-case-content-wrapper"},[t("div",{staticClass:"handle-case-content"},[t("div",{staticClass:"case-number-wrapper"},[t("div",{staticClass:"case-number-font case-number-title"})]),e._v(" "),t("tk-detail-photo",{attrs:{list:e.photoList}}),e._v(" "),t("div",{staticClass:"case-describe"},[e._v(e._s(e.describe))]),e._v(" "),t("div",{staticClass:"case-address-wrapper"},[t("img",{staticClass:"case-address-icon",attrs:{src:"/dist/image/icon_dz.e8ca6c.png",alt:""}}),e._v(" "),t("div",{staticClass:"case-address"},[e._v(e._s(e.address))])]),e._v(" "),t("tk-detail",{attrs:{list:e.detailList}}),e._v(" "),t("div",{staticClass:"case-handle-process"},[t("div",{staticClass:"case-handle-process-title"},[e._v("处理流程")]),e._v(" "),t("div",{staticClass:"case-handle-process-list-wrapper"},e._l(e.processList,function(s,i){return t("div",{staticClass:"case-handle-process-item"},[t("div",{staticClass:"case-handle-process-item-left"},[t("div",{staticClass:"item-circle",style:i===e.processList.length-1?{backgroundColor:"#cccccc"}:{}}),e._v(" "),t("div",{staticClass:"item-line"})]),e._v(" "),t("div",{staticClass:"case-handle-process-item-right"},[t("div",{staticClass:"item-step"},[e._v(e._s(s.name))]),e._v(" "),t("div",{staticClass:"item-info"},[e._v(e._s(s.userName)+"|"+e._s(s.endTime))]),e._v(" "),t("div",{staticClass:"item-result"},[e._v(e._s(s.message))])])])}),0)])],1)])],1)},a=[]},2595:function(e,s,t){"use strict";var i=t(1991),a=t.n(i);a.a},643:function(e,s,t){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var i=t(2593),a=t(1989);for(var n in a)"default"!==n&&function(e){t.d(s,e,function(){return a[e]})}(n);var c=(t(2595),t(0)),r=Object(c.a)(a.default,i.a,i.b,!1,null,"17473d4a",null);s.default=r.exports}});