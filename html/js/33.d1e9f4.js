webpackJsonp([33],{2018:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=i(2019),a=i.n(s);for(var n in s)"default"!==n&&function(t){i.d(e,t,function(){return s[t]})}(n);e.default=a.a},2019:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=i(52),a=function(t){return t&&t.__esModule?t:{default:t}}(s);e.default={name:"handleInspect",data:function(){return{id:0,titleL:"",statuss:"",detailList:[],taskType:{key:"任务类型",value:""},personInCharge:{key:"责任人",value:""},endTime:{key:"截止时间",value:""},publisher:{key:"交办人",value:""},submitTime:{key:"交办时间",value:""},describe:{key:"任务内容",value:""},processList:[],url:""}},created:function(){},mounted:function(){this.detailList=[this.taskType,this.personInCharge,this.endTime,this.publisher,this.submitTime,this.describe],this.datas=JSON.parse(this.$route.query.datas),this.titleL=this.datas.missionName,this.statuss=this.datas.missionState,this._inputValue(this.taskType,this.datas.missionType),this._inputValue(this.personInCharge,this.datas.dutyName),this._inputValue(this.endTime,this.datas.missionDeadline),this._inputValue(this.publisher,this.datas.creatorId),this._inputValue(this.submitTime,this.datas.createdDate),this._inputValue(this.describe,this.datas.missionContent)},methods:{getCaseDetail:function(t){var e=this,i={para:"loginId="+window.localStorage.loginId+"&rowId="+t};console.log((0,a.default)(i)),this.url="api/inspectDetail",this.$http.post(this.url,i).then(function(t){if(void 0===t.code||"0"===t.code){console.log("接口返回成功");var i=t.datas;null!==i&&(e.caseNumber=i.caseNo,e.describe=i.problem,e._inputValue(e.taskType,i.taskType),e._inputValue(e.personInCharge,i.personInCharge),e._inputValue(e.endTime,i.endTime),e._inputValue(e.publisher,i.publisher),e._inputValue(e.submitTime,i.submitTime),e.processList=i.processSteps)}else toast(t.message)})},_inputValue:function(t,e){this.$set(t,"value",e)},_handle:function(){this.$router.push({path:"/handleInspectEdit",query:{id:this.datas.id}})}}}},2020:function(t,e){},2622:function(t,e,i){"use strict";var s=i(2623);i.d(e,"a",function(){return s.a}),i.d(e,"b",function(){return s.b})},2623:function(t,e,i){"use strict";i.d(e,"a",function(){return s}),i.d(e,"b",function(){return a});var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("tk-header",[t._v("督察督办处理")]),t._v(" "),i("tk-container",[i("div",{staticClass:"handle-inspect-content"},[i("div",{staticClass:"titlelDiv"},[i("div",{staticClass:"leftD"},[t._v(t._s(t.titleL))]),t._v(" "),i("div",{staticClass:"rightD"},[t._v(t._s(t.statuss))])]),t._v(" "),i("tk-detail",{attrs:{list:t.detailList}})],1),t._v(" "),i("tk-button",{on:{click:t._handle}},[t._v("处理")])],1)],1)},a=[]},2624:function(t,e,i){"use strict";var s=i(2020),a=i.n(s);a.a},652:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=i(2622),a=i(2018);for(var n in a)"default"!==n&&function(t){i.d(e,t,function(){return a[t]})}(n);var u=(i(2624),i(0)),r=Object(u.a)(a.default,s.a,s.b,!1,null,"21d74e82",null);e.default=r.exports}});