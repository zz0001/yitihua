webpackJsonp([36],{2001:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a(2002),i=a.n(n);for(var r in n)"default"!==r&&function(t){a.d(e,t,function(){return n[t]})}(r);e.default=i.a},2002:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a(461),i=function(t){return t&&t.__esModule?t:{default:t}}(n);e.default={name:"pointRank",data:function(){return{pointRankList:[],param:{startTime:"",userName:"",loginId:""},date:"本月",myScore:null,myRanking:null,baseURL:"/wgh/app/"}},created:function(){this.url="/wgh/app/",this.userId=window.localStorage.userId},mounted:function(){var t=(new Date).toJSON().slice(0,7);this.getScoreRank(t)},methods:{getScoreRank:function(t){var e=this,a={para:"userId="+this.userId+"&dateTime="+t};i.default.post(this.url+"scoresRank.action",a).then(function(t){e.pointRankList=t.map(function(t){return t}),e.pointRankList.forEach(function(t,a){if(t.id===e.userId)return e.myScore=t.score,e.myRanking=a+1,!1})})},getCurrentDate:function(){var t=(new Date).getFullYear(),e=(new Date).getMonth()+1;this.$set(this.param,"startTime",t.toString()+"-"+e.toString().padStart(2,"0"))},selectMonth:function(){var t=this,e=(new Date).getFullYear(),a=(new Date).getMonth();this.mouthPicker||(this.mouthPicker=this.$createPotDatePicker({title:"请选择月份",min:new Date(e-3,7,8,8,0,0),max:new Date(e+1,9,20,20,59,59),value:new Date,format:{year:"YY年",month:"MM月"},columnCount:2,onSelect:function(n){console.log(n);var i=n.getFullYear().toString()+"-"+(n.getMonth()+1).toString().padStart(2,"0");console.log(i),a===n.getMonth()&&e===n.getFullYear()?t.date="本月":t.date=i,t.param={startTime:i,userName:"",loginId:""},t.getScoreRank(i)}})),this.mouthPicker.show()}}}},2003:function(t,e){},2605:function(t,e,a){"use strict";var n=a(2606);a.d(e,"a",function(){return n.a}),a.d(e,"b",function(){return n.b})},2606:function(t,e,a){"use strict";a.d(e,"a",function(){return n}),a.d(e,"b",function(){return i});var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"point-rank"},[a("tk-header",[t._v("积分排名")]),t._v(" "),a("tk-container",[a("div",{staticClass:"time-filter-wrapper",on:{click:t.selectMonth}},[a("div",{staticClass:"time-filter"},[a("div",{staticClass:"time-filter-title"},[t._v(t._s(t.date))]),t._v(" "),a("img",{staticClass:"time-filter-arrow",attrs:{src:"/static/image/user_info_arrow.png",alt:""}})])]),t._v(" "),a("div",{staticClass:"mine-score"},[a("span",[t._v("我的积分："+t._s(t.myScore))]),t._v(" "),a("span",[t._v("第"+t._s(t.myRanking)+"名")])]),t._v(" "),a("div",{staticClass:"point-rank-list-scroll-wrapper"},[a("tk-scroll",{ref:"scroll",attrs:{options:{pullDown:!1,pullUp:!1}}},[a("div",{staticClass:"point-rank-list"},t._l(t.pointRankList,function(e,n){return a("div",{key:n,staticClass:"point-rank-item-wrapper"},[a("div",{staticClass:"point-rank-item"},[a("div",{staticClass:"point-rank-item-left"},[a("img",{directives:[{name:"show",rawName:"v-show",value:n<3,expression:"index < 3"}],staticClass:"point-rank-item-avatar",attrs:{src:"/staitc/resources/images/wode_tx.png",alt:""}}),t._v(" "),a("div",{directives:[{name:"show",rawName:"v-show",value:n>=3,expression:"index >= 3"}],staticClass:"point-rank-item-rank"},[t._v(t._s(n+1))]),t._v(" "),a("div",{staticClass:"point-rank-item-info"},[a("div",{staticClass:"point-rank-item-name"},[t._v(t._s(e.name))]),t._v(" "),a("div",{staticClass:"point-rank-item-dept"},[t._v("网格名称")])])]),t._v(" "),a("div",{staticClass:"point-rank-item-right"},[a("div",{staticClass:"point-rank-item-point"},[t._v(t._s(e.score))])])])])}),0)])],1)])],1)},i=[]},2607:function(t,e,a){"use strict";var n=a(2003),i=a.n(n);i.a},647:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a(2605),i=a(2001);for(var r in i)"default"!==r&&function(t){a.d(e,t,function(){return i[t]})}(r);var s=(a(2607),a(0)),o=Object(s.a)(i.default,n.a,n.b,!1,null,"691037a0",null);e.default=o.exports}});