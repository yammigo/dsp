(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{341:function(t,a,e){"use strict";e.r(a);var i=e(896),n=e(491);for(var r in n)"default"!==r&&function(t){e.d(a,t,(function(){return n[t]}))}(r);e(696);var o=e(11),s=Object(o.a)(n.default,i.a,i.b,!1,null,null,null);s.options.__file="src/components/demo-components/table/basic.vue",a.default=s.exports},491:function(t,a,e){"use strict";e.r(a);var i=e(492),n=e.n(i);for(var r in i)"default"!==r&&function(t){e.d(a,t,(function(){return i[t]}))}(r);a.default=n.a},492:function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var i={data:function(){return{keyword:"",sort:"updatedAt:desc",sortList:{"updatedAt:desc":"更新时间倒序","updatedAt:asc":"更新时间正序","createdAt:desc":"创建时间倒序","createdAt:asc":"创建时间正序"},pagination:{page:1,size:20,total:0},tabs:[{key:"China",title:"Malawi"},{key:"Niger",title:"Niger"},{key:"Curaçao",title:"Curaçao"},{key:"Korea",title:"Korea"},{key:"Malawi",title:"Malawi"}],type:"China",datas:[],counts:{},loading:!1}},mounted:function(){this.init()},methods:{init:function(){this.getData(),this.getCounts()},changePage:function(){this.getData(!0)},getCounts:function(){var t=this;setTimeout((function(){t.counts={China:900,Niger:90,"Curaçao":20,Korea:30,Malawi:45}}),1e3)},getData:function(){var t=this,a=arguments.length>0&&void 0!==arguments[0]&&arguments[0];a&&(this.pagination.page=1),this.loading=!0,setTimeout((function(){t.datas=[{name:"Dakota Rice",salary:"$36,738",country:"Niger",city:"Oud-Turnhout"},{name:"Minerva Hooper",salary:"$23,789",country:"Curaçao",city:"Sinaai-Waas"},{name:"Sage Rodriguez",salary:"$56,142",country:"Netherlands",city:"Baileux"},{name:"Philip Chaney",salary:"$38,735",country:"Korea, South",city:"Overland Park"},{name:"Doris Greene",salary:"$63,542",country:"Malawi",city:"Feldkirchen in Kärnten"},{name:"Mason Porter",salary:"$78,615",country:"Chile",city:"Gloucester"},{name:"Dakota Rice",salary:"$36,738",country:"Niger",city:"Oud-Turnhout"},{name:"Minerva Hooper",salary:"$23,789",country:"Curaçao",city:"Sinaai-Waas"},{name:"Sage Rodriguez",salary:"$56,142",country:"Netherlands",city:"Baileux"},{name:"Philip Chaney",salary:"$38,735",country:"Korea, South",city:"Overland Park"},{name:"Doris Greene",salary:"$63,542",country:"Malawi",city:"Feldkirchen in Kärnten"},{name:"Mason Porter",salary:"$78,615",country:"Chile",city:"Gloucester"}],t.pagination.total=100,t.loading=!1}),1e3)}},computed:{}};a.default=i},493:function(t,a,e){},696:function(t,a,e){"use strict";var i=e(493);e.n(i).a},896:function(t,a,e){"use strict";e.d(a,"a",(function(){return i})),e.d(a,"b",(function(){return n}));var i=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"table-basic-vue frame-page h-panel"},[t._m(0),t._v(" "),e("div",{staticClass:"h-panel-body"},[e("div",[e("Tabs",{attrs:{datas:t.tabs,className:"common-status-filter-tabs"},on:{change:function(a){return t.getData(!0)}},scopedSlots:t._u([{key:"item",fn:function(a){var i=a.tab;return[e("p",{staticClass:"code"},[t._v(t._s(t.counts[""+i.key]||0))]),t._v(" "),e("p",{staticClass:"name"},[t._v(t._s(i.title))])]}}]),model:{value:t.type,callback:function(a){t.type=a},expression:"type"}})],1),t._v(" "),e("div",{staticClass:"common-filter-bar"},[e("div",{staticClass:"float-right"},[e("Select",{directives:[{name:"width",rawName:"v-width",value:160,expression:"160"}],staticClass:"common-filter-select",attrs:{autosize:"",datas:t.sortList,"no-border":!0,"null-option":!1,placeholder:"请选择您的内容"},on:{input:function(a){return t.getData(!0)}},model:{value:t.sort,callback:function(a){t.sort=a},expression:"sort"}})],1)]),t._v(" "),e("Table",{attrs:{loading:t.loading,datas:t.datas}},[e("TableItem",{attrs:{title:"序号"},scopedSlots:t._u([{key:"default",fn:function(a){var e=a.index;return[t._v(t._s(e+1)+" ")]}}])}),t._v(" "),e("TableItem",{attrs:{width:200,prop:"name",title:"姓名"}}),t._v(" "),e("TableItem",{attrs:{width:200,prop:"salary",title:"薪资"}}),t._v(" "),e("TableItem",{attrs:{width:200,prop:"country",title:"国家"}}),t._v(" "),e("TableItem",{attrs:{width:200,prop:"city",title:"城市"}}),t._v(" "),e("TableItem",{attrs:{width:200,prop:"name",title:"姓名"}}),t._v(" "),e("TableItem",{attrs:{width:200,prop:"salary",title:"薪资"}}),t._v(" "),e("TableItem",{attrs:{width:200,prop:"country",title:"国家"}}),t._v(" "),e("TableItem",{attrs:{width:200,prop:"city",title:"城市"}}),t._v(" "),e("TableItem",{attrs:{width:200,prop:"name",title:"姓名"}}),t._v(" "),e("TableItem",{attrs:{width:200,prop:"salary",title:"薪资"}}),t._v(" "),e("TableItem",{attrs:{width:200,prop:"country",title:"国家"}}),t._v(" "),e("TableItem",{attrs:{width:200,prop:"city",title:"城市"}})],1),t._v(" "),e("p"),t._v(" "),t.pagination.total>0?e("Pagination",{attrs:{align:"right"},on:{change:t.changePage},model:{value:t.pagination,callback:function(a){t.pagination=a},expression:"pagination"}}):t._e()],1)])},n=[function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"h-panel-bar"},[a("span",{staticClass:"h-panel-title"},[this._v("基础表格")])])}];i._withStripped=!0}}]);