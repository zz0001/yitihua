webpackJsonp([328],{1437:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(1438),o=n.n(i);for(var s in i)"default"!==s&&function(t){n.d(e,t,function(){return i[t]})}(s);e.default=o.a},1438:function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var o=n(1382),s=i(o),a=n(1383),c=i(a),r=n(1454),l=i(r),u=n(1400);e.default={name:"chooseApprover",components:{ContactList:l.default},data:function(){return{list:[],chosenPeople:"",isShow:!1,id:"",titleL:"选择审批人",bottomTitle:"选择当事人"}},mounted:function(){this.id=this.$route.query.id,window.namee="",window.idd="",console.log("this.id=="+this.id),this.getApprover()},methods:{hide:function(){this.isShow=!1},show:function(){this.isShow=!0},back:function(){this.$router.go(-1)},clickData:function(){this.chosenPeople=window.namee},sureCc:function(){this.hide(),this.$emit("confirm",{id:this.id,chosenPeople:this.chosenPeople})},getApprover:function(){var t=this;return(0,c.default)(s.default.mark(function e(){var n;return s.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(n=void 0,1!=t.id){e.next=9;break}return e.next=4,(0,u.getAppAreaTree)();case 4:n=e.sent,t.titleL="选择区域",t.bottomTitle="选择区域",e.next=14;break;case 9:return e.next=11,(0,u.getApprover)();case 11:n=e.sent,t.titleL="选择审批人",t.bottomTitle="选择当事人";case 14:0==n.code?(t.list=n.datas,t.hideLoading()):t.hideLoading();case 15:case"end":return e.stop()}},e,t)}))()}}}},1439:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(1440),o=n.n(i);for(var s in i)"default"!==s&&function(t){n.d(e,t,function(){return i[t]})}(s);e.default=o.a},1440:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"contact-list",data:function(){return window.activeA=window.activeA||{a:""},{TYPE_NO_CHOICE:0,TYPE_SINGLE_CHOICE:1,TYPE_MULTI_CHOICE:2,showChildren:!1,clickPosition:0,activitesC:[],activeA:window.activeA,chosenPeople:""}},mounted:function(){this.activeA.a="",console.log(" this.activeA.a=="+this.activeA.a)},computed:{},methods:{onClickContent:function(){this.$emit("onClickContent")},onGroupClickContent:function(t){this.$refs[""+t.id][0].showChildren=!this.$refs[""+t.id][0].showChildren},onPersonClickContent:function(t,e){this.chosenPeople=t.name,console.log("人 点击项："+t.name),console.log("id 点击项："+t.id),window.namee=t.name,window.idd=t.id,this.clickChoose(e)},clickChoose:function(t){this.activeA.a=t}},props:{data:{},k:{type:String,default:""},type:{type:Number,default:0},root:{type:Boolean,default:!0}}}},1441:function(t,e){},1442:function(t,e){},1452:function(t,e,n){"use strict";var i=n(1453);n.d(e,"a",function(){return i.a}),n.d(e,"b",function(){return i.b})},1453:function(t,e,n){"use strict";n.d(e,"a",function(){return i}),n.d(e,"b",function(){return o});var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("transition",{attrs:{name:"slide-up"}},[t.isShow?n("div",{staticClass:"choose-approver"},[n("tk-header",{staticClass:"page-header",on:{"left-click":t.hide}},[t._v("\n            "+t._s(t.titleL)+"\n\n        ")]),t._v(" "),n("div",{staticClass:"choose-approver-content"},[n("contact-list",{attrs:{data:t.list,root:!0},on:{onClickContent:t.clickData}})],1),t._v(" "),n("div",{staticClass:"borromPart"},[n("div",{staticClass:"leftSpan"},[t._v(t._s(t.bottomTitle))]),t._v(" "),n("div",{staticClass:"name"},[t._v(t._s(t.chosenPeople))]),t._v(" "),n("div",{staticClass:"rightDiv",on:{click:t.sureCc}},[t._v("确定")])])],1):t._e()])},o=[]},1454:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(1455),o=n(1439);for(var s in o)"default"!==s&&function(t){n.d(e,t,function(){return o[t]})}(s);var a=(n(1457),n(0)),c=Object(a.a)(o.default,i.a,i.b,!1,null,"4d751183",null);e.default=c.exports},1455:function(t,e,n){"use strict";var i=n(1456);n.d(e,"a",function(){return i.a}),n.d(e,"b",function(){return i.b})},1456:function(t,e,n){"use strict";n.d(e,"a",function(){return i}),n.d(e,"b",function(){return o});var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{directives:[{name:"show",rawName:"v-show",value:t.showChildren||t.root,expression:"showChildren || root"}],staticClass:"contact-list"},t._l(t.data,function(e,i){return n("div",{staticClass:"contact-list-item",on:{click:t.onClickContent}},[e.children.length>0?n("div",{staticClass:"contact-list-item-group-wrapper"},[n("div",{staticClass:"contact-list-item-group",style:{"margin-left":.7*e.level+"rem"},on:{click:function(n){return t.onGroupClickContent(e,i)}}},[n("img",{staticStyle:{width:"1rem","margin-right":"0.5rem"},attrs:{src:"/static/img/zuzhiqunti111.png"}}),t._v("\n                "+t._s(e.name)+"\n            ")]),t._v(" "),n("div",{staticClass:"grey-split-line"}),t._v(" "),n("contact-list",{ref:""+e.id,refInFor:!0,staticClass:"contact-list-item-child",attrs:{k:e.name,data:e.children}})],1):n("div",{staticClass:"contact-list-item-name-wrapper",on:{click:function(n){return t.onPersonClickContent(e,t.k+i,i)}}},[n("div",{staticClass:"contact-list-item-name",style:{"margin-left":.7*e.level+"rem"}},[n("img",{staticStyle:{width:"14px","margin-right":"0.5rem"},attrs:{src:"/static/img/touxiang111.png"}}),t._v("\n                "+t._s(e.name)+"\n            ")]),t._v(" "),n("div",{staticClass:"rightDiv"},[n("div",{staticClass:"circleDiv",class:{active:t.activeA.a==t.k+i},on:{click:function(e){return t.clickChoose(t.k+i,i)}}})]),t._v(" "),n("div",{staticClass:"grey-split-line"})])])}),0)},o=[]},1457:function(t,e,n){"use strict";var i=n(1441),o=n.n(i);o.a},1458:function(t,e,n){"use strict";var i=n(1442),o=n.n(i);o.a},470:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(1452),o=n(1437);for(var s in o)"default"!==s&&function(t){n.d(e,t,function(){return o[t]})}(s);var a=(n(1458),n(0)),c=Object(a.a)(o.default,i.a,i.b,!1,null,"3088b238",null);e.default=c.exports}});