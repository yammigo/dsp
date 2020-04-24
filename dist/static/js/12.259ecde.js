(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{334:function(t,a,e){"use strict";e.r(a);var s=e(869),l=e(443);for(var r in l)"default"!==r&&function(t){e.d(a,t,(function(){return l[t]}))}(r);e(683);var o=e(10),i=Object(o.a)(l.default,s.a,s.b,!1,null,null,null);i.options.__file="src/components/home/index.vue",a.default=i.exports},443:function(t,a,e){"use strict";e.r(a);var s=e(444),l=e.n(s);for(var r in s)"default"!==r&&function(t){e.d(a,t,(function(){return s[t]}))}(r);a.default=l.a},444:function(t,a,e){"use strict";var s=e(12);Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var l=s(e(445)),r=s(e(446)),o=s(e(447)),i={data:function(){return{data1:l.default,data2:r.default,data3:o.default,type:"type1"}},methods:{openMore:function(){this.$router.push({name:"Chart"})}}};a.default=i},445:function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;a.default={tooltip:{trigger:"axis"},legend:{data:["最高价","最低价"]},toolbox:{show:!0,feature:{mark:{show:!0},dataView:{show:!0,readOnly:!1},magicType:{show:!0,type:["line","bar"]},restore:{show:!0},saveAsImage:{show:!0}}},calculable:!0,xAxis:[{type:"category",boundaryGap:!1,data:["周一","周二","周三","周四","周五","周六","周日"]}],yAxis:[{type:"value",axisLabel:{formatter:"{value} K"}}],series:[{name:"最高价",type:"line",data:[11,11,15,13,12,13,10],markPoint:{data:[{type:"max",name:"最大值"},{type:"min",name:"最小值"}]},smooth:!0,markLine:{data:[{type:"average",name:"平均值"}]}},{name:"最低价",type:"line",data:[1,-2,2,5,3,2,0],smooth:!0,markPoint:{data:[{name:"周最低",value:-2,xAxis:1,yAxis:-1.5}]},markLine:{data:[{type:"average",name:"平均值"}]}}]}},446:function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;a.default={title:{text:"南丁格尔玫瑰图",subtext:"纯属虚构",x:"center"},tooltip:{trigger:"item",formatter:"{a} <br/>{b} : {c} ({d}%)"},legend:{x:"center",y:"bottom",data:["rose1","rose2","rose3","rose4","rose5","rose6","rose7","rose8"]},toolbox:{show:!0,feature:{mark:{show:!0},dataView:{show:!0,readOnly:!1},magicType:{show:!0,type:["pie","funnel"]},restore:{show:!0},saveAsImage:{show:!0}}},calculable:!0,series:[{name:"半径模式",type:"pie",radius:[20,110],center:["25%","50%"],roseType:"radius",label:{normal:{show:!1},emphasis:{show:!0}},lableLine:{normal:{show:!1},emphasis:{show:!0}},data:[{value:10,name:"rose1"},{value:5,name:"rose2"},{value:15,name:"rose3"},{value:25,name:"rose4"},{value:20,name:"rose5"},{value:35,name:"rose6"},{value:30,name:"rose7"},{value:40,name:"rose8"}]},{name:"面积模式",type:"pie",radius:[30,110],center:["75%","50%"],roseType:"area",data:[{value:10,name:"rose1"},{value:5,name:"rose2"},{value:15,name:"rose3"},{value:25,name:"rose4"},{value:20,name:"rose5"},{value:35,name:"rose6"},{value:30,name:"rose7"},{value:40,name:"rose8"}]}]}},447:function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;a.default={title:{text:"堆叠区域图"},tooltip:{trigger:"axis",axisPointer:{type:"cross",label:{backgroundColor:"#6a7985"}}},legend:{data:["邮件营销","联盟广告","视频广告","直接访问","搜索引擎"]},toolbox:{feature:{saveAsImage:{}}},grid:{left:"3%",right:"4%",bottom:"3%",containLabel:!0},xAxis:[{type:"category",boundaryGap:!1,data:["周一","周二","周三","周四","周五","周六","周日"]}],yAxis:[{type:"value"}],series:[{name:"邮件营销",type:"line",stack:"总量",areaStyle:{},data:[120,132,101,134,90,230,210]},{name:"联盟广告",type:"line",stack:"总量",areaStyle:{},data:[220,182,191,234,290,330,310]},{name:"视频广告",type:"line",stack:"总量",areaStyle:{},data:[150,232,201,154,190,330,410]},{name:"直接访问",type:"line",stack:"总量",areaStyle:{normal:{}},data:[320,332,301,334,390,330,320]},{name:"搜索引擎",type:"line",stack:"总量",label:{normal:{show:!0,position:"top"}},areaStyle:{normal:{}},data:[820,932,901,934,1290,1330,1320]}]}},448:function(t,a,e){},683:function(t,a,e){"use strict";var s=e(448);e.n(s).a},869:function(t,a,e){"use strict";e.d(a,"a",(function(){return s})),e.d(a,"b",(function(){return l}));var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"app-home-vue frame-page"},[e("Row",{attrs:{space:30}},[e("Cell",{attrs:{xs:24,sm:24,md:24,lg:16,xl:16}},[e("div",{staticClass:"h-panel"},[e("div",{staticClass:"relative"},[e("Tabs",{staticClass:"common-panel-tabs",attrs:{datas:{type1:"数据走势",type2:"数据分布"}},model:{value:t.type,callback:function(a){t.type=a},expression:"type"}}),t._v(" "),e("div",{staticClass:"middle-right",staticStyle:{right:"25px"}},[e("span",{staticClass:"text-hover",on:{click:t.openMore}},[t._v("查看更多")])])],1),t._v(" "),e("div",{staticClass:"home-part-body"},["type1"==t.type?e("Chart",{key:"type1",attrs:{options:t.data1}}):t._e(),t._v(" "),"type2"==t.type?e("Chart",{key:"type2",attrs:{options:t.data3}}):t._e()],1)])]),t._v(" "),e("Cell",{attrs:{xs:24,sm:24,md:24,lg:8,xl:8}},[e("div",{staticClass:"h-panel"},[e("div",{staticClass:"h-panel-bar"},[e("div",{staticClass:"h-panel-title"},[t._v("订单统计")]),t._v(" "),e("div",{staticClass:"h-panel-right"},[e("span",{staticClass:"gray-color"},[t._v("总共达成")]),e("i",{staticClass:"h-split"}),e("span",{staticClass:"font20 primary-color"},[t._v("200")]),e("i",{staticClass:"h-split"}),e("span",{staticClass:"gray-color"},[t._v("W")])])]),t._v(" "),e("div",{staticClass:"h-panel-body progress-div home-part-body"},[e("p",[e("Progress",{attrs:{percent:99,color:"green"}},[e("span",{attrs:{slot:"title"},slot:"title"},[t._v("订单状态")]),e("span",{attrs:{slot:"text"},slot:"text"},[t._v("4个")])])],1),t._v(" "),e("p",[e("Progress",{attrs:{percent:88,color:"blue"}},[e("span",{attrs:{slot:"title"},slot:"title"},[t._v("订单状态")]),e("span",{attrs:{slot:"text"},slot:"text"},[t._v("0个")])])],1),t._v(" "),e("p",[e("Progress",{attrs:{percent:55,color:"red"}},[e("span",{attrs:{slot:"title"},slot:"title"},[t._v("订单状态")]),e("span",{attrs:{slot:"text"},slot:"text"},[t._v("0个")])])],1),t._v(" "),e("p",[e("Progress",{attrs:{percent:77,color:"blue"}},[e("span",{attrs:{slot:"title"},slot:"title"},[t._v("订单状态")]),e("span",{attrs:{slot:"text"},slot:"text"},[t._v("0个")])])],1),t._v(" "),e("p",[e("Progress",{attrs:{percent:66,color:"yellow"}},[e("span",{attrs:{slot:"title"},slot:"title"},[t._v("订单状态")]),e("span",{attrs:{slot:"text"},slot:"text"},[t._v("0个")])])],1)])])]),t._v(" "),e("Cell",{attrs:{xs:24,sm:24,md:24,lg:16,xl:16}},[e("div",{staticClass:"h-panel"},[e("div",{staticClass:"h-panel-bar"},[e("div",{staticClass:"h-panel-title"},[t._v("数据比例")])]),t._v(" "),e("div",{staticClass:"home-part-body2"},[e("Chart",{attrs:{options:t.data2}})],1)])]),t._v(" "),e("Cell",{attrs:{xs:24,sm:24,md:24,lg:8,xl:8}},[e("div",{staticClass:"h-panel"},[e("div",{staticClass:"h-panel-bar"},[e("div",{staticClass:"h-panel-title"},[t._v("数据比例")])]),t._v(" "),e("div",{staticClass:"h-panel-body home-part-body2"},[e("Row",{attrs:{space:20}},[e("Cell",{staticClass:"text-right",attrs:{width:10}},[e("h-circle",{attrs:{percent:76,"stroke-width":10,size:90}},[e("p",[e("span",{staticClass:"font28"},[t._v(t._s(parseInt(93.48)))]),e("span",{staticClass:"gray-color"},[t._v(" / 123")])])])],1),t._v(" "),e("Cell",{attrs:{width:14}},[e("p",{staticClass:"gray-color"},[t._v("目前达成比例")]),t._v(" "),e("p",{staticClass:"dark-color font22"},[t._v("122,332,98")])]),t._v(" "),e("p",{staticClass:"clearfix"}),t._v(" "),e("Cell",{staticClass:"text-right",attrs:{width:10}},[e("h-circle",{attrs:{percent:99,"stroke-width":10,size:90,color:"green"}},[e("p",[e("span",{staticClass:"font28"},[t._v(t._s(parseInt(93.48)))]),e("span",{staticClass:"gray-color"},[t._v(" / 123")])])])],1),t._v(" "),e("Cell",{attrs:{width:14}},[e("p",{staticClass:"gray-color"},[t._v("目前达成比例")]),t._v(" "),e("p",{staticClass:"dark-color font22"},[t._v("122,332,98")])]),t._v(" "),e("p",{staticClass:"clearfix"}),t._v(" "),e("Cell",{staticClass:"text-right",attrs:{width:10}},[e("h-circle",{attrs:{percent:22,"stroke-width":10,size:90,color:"red"}},[e("p",[e("span",{staticClass:"font28"},[t._v(t._s(parseInt(93.48)))]),e("span",{staticClass:"gray-color"},[t._v(" / 123")])])])],1),t._v(" "),e("Cell",{attrs:{width:14}},[e("p",{staticClass:"gray-color"},[t._v("目前达成比例")]),t._v(" "),e("p",{staticClass:"dark-color font22"},[t._v("122,332,98")])])],1)],1)])])],1)],1)},l=[];s._withStripped=!0}}]);