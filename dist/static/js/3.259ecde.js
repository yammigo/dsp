(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{333:function(t,e,n){"use strict";n.r(e);var i=n(870),o=n(422);for(var a in o)"default"!==a&&function(t){n.d(e,t,(function(){return o[t]}))}(a);var r=n(10),s=Object(r.a)(o.default,i.a,i.b,!1,null,null,null);s.options.__file="src/components/app/app-frame.vue",e.default=s.exports},422:function(t,e,n){"use strict";n.r(e);var i=n(423),o=n.n(i);for(var a in i)"default"!==a&&function(t){n.d(e,t,(function(){return i[t]}))}(a);e.default=o.a},423:function(t,e,n){"use strict";(function(t,i){var o=n(12);Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=o(n(143)),r=o(n(668)),s=o(n(670)),u=o(n(673)),l=o(n(677)),c=o(n(679)),f=(o(n(113)),n(144)),d=n(146),p={data:function(){return{loading:!0,openSetting:!1,layoutConfig:{siderTheme:"white",showSystab:!1,headerFixed:!1,siderFixed:!1}}},mounted:function(){var e=this;this.init(),this.loading=!1;var n=t.addlistener("SYS_MENU_REFRESH",(function(){e.initMenu()}));this.$once("hook:beforeDestroy",(function(){t.removelistener(n)}))},methods:{init:function(){this.initDict(),this.initMenu()},initDict:function(){},updateLayoutConfig:function(t){var e=t.key,n=t.value;this.layoutConfig[e]=n},initMenu:function(){console.log("保存权限");var e=i.getLocal2Json("SYS_CONFIG_MENU")||d.fullMenuKeys;t.set("SYS_MENUS",e),t.trigger("SYS_MENU_UPDATE"),(0,d.isAuthPage)(this.$route.name)||this.$router.replace({name:"PermissionError"})}},computed:(0,a.default)({},(0,f.mapState)(["siderCollapsed"])),components:{appHead:s.default,appMenu:u.default,SysTabs:c.default,appFooter:l.default,appLayoutSetting:r.default}};e.default=p}).call(this,n(80),n(79).default)},424:function(t,e,n){"use strict";n.r(e);var i=n(425),o=n.n(i);for(var a in i)"default"!==a&&function(t){n.d(e,t,(function(){return i[t]}))}(a);e.default=o.a},425:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={props:{layoutConfig:Object},data:function(){return{}},mounted:function(){},methods:{copySetting:function(){this.$Clipboard({text:JSON.stringify(this.layoutConfig,null,2),showSuccessTip:"复制成功"})}}};e.default=i},426:function(t,e,n){},427:function(t,e,n){"use strict";n.r(e);var i=n(428),o=n.n(i);for(var a in i)"default"!==a&&function(t){n.d(e,t,(function(){return i[t]}))}(a);e.default=o.a},428:function(t,e,n){"use strict";(function(t){var i=n(12);Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=i(n(143)),a=n(144),r=(n(671),{components:{},data:function(){return{searchText:"",userInfo:{avatar:"",loginName:""},infoMenu:[{key:"info",title:"个人信息",icon:"h-icon-user"},{key:"logout",title:"退出登录",icon:"h-icon-outbox"}]}},computed:(0,o.default)({},(0,a.mapState)(["User"]),{siderCollapsed:{get:function(){return this.$store.state.siderCollapsed},set:function(t){this.$store.commit("updateSiderCollapse",t)}}}),mounted:function(){try{this.userInfo=JSON.parse(t.getCookie("userInfo"))}catch(t){}this.listenResize()},methods:{listenResize:function(){var t=this,e=window.innerWidth,n=window.addEventListener("resize",(function(){e!=window.innerWidth&&(t.siderCollapsed&&window.innerWidth>900?t.siderCollapsed=!1:!t.siderCollapsed&&window.innerWidth<900&&(t.siderCollapsed=!0),e=window.innerWidth)}));this.$once("hook:beforeDestroy",(function(){window.removeEventListener("resize",n)})),window.dispatchEvent(new Event("resize"))},goGithub:function(){},goBook:function(){},trigger:function(e){"logout"==e?(t.clearCookie(),this.$router.replace({name:"Login"})):this.$router.push({name:"AccountBasic"})},showSettingModal:function(){this.$emit("openSetting")}}});e.default=r}).call(this,n(79).default)},429:function(t,e,n){},430:function(t,e,n){"use strict";n.r(e);var i=n(431),o=n.n(i);for(var a in i)"default"!==a&&function(t){n.d(e,t,(function(){return i[t]}))}(a);e.default=o.a},431:function(t,e,n){"use strict";(function(t){var i=n(12);Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=i(n(143)),a=n(144),r=i(n(674)),s=n(146),u={props:{theme:String},data:function(){return{menus:[]}},watch:{$route:function(){this.menuSelect()}},mounted:function(){var e=this;this.init();var n=t.addlistener("SYS_MENU_UPDATE",(function(){e.init()}));this.$once("hook:beforeDestroy",(function(){t.removelistener(n)}))},computed:(0,o.default)({},(0,a.mapState)(["siderCollapsed"])),methods:{init:function(){var e=this;this.menus=(0,s.getMenus)(t.get("SYS_MENUS")),this.$nextTick((function(){e.menuSelect()}))},menuSelect:function(){this.$route.name&&this.$refs.menu.select(this.$route.name)},trigger:function(t){t.children.length>0||this.$router.push({name:t.key})},hideMenu:function(){this.$store.commit("updateSiderCollapse",!0)}},components:{appLogo:r.default}};e.default=u}).call(this,n(80))},432:function(t,e,n){"use strict";n.r(e);var i=n(433),o=n.n(i);for(var a in i)"default"!==a&&function(t){n.d(e,t,(function(){return i[t]}))}(a);e.default=o.a},433:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;e.default={data:function(){return{}},mounted:function(){},methods:{},computed:{}}},434:function(t,e,n){},435:function(t,e,n){},436:function(t,e,n){"use strict";n.r(e);var i=n(437),o=n.n(i);for(var a in i)"default"!==a&&function(t){n.d(e,t,(function(){return i[t]}))}(a);e.default=o.a},437:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;e.default={data:function(){return{}}}},438:function(t,e,n){},439:function(t,e,n){"use strict";n.r(e);var i=n(440),o=n.n(i);for(var a in i)"default"!==a&&function(t){n.d(e,t,(function(){return i[t]}))}(a);e.default=o.a},440:function(t,e,n){"use strict";(function(t,i){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=n(681),a={name:"TagsNav",props:{value:Object,homePage:{type:String,default:"Home"}},data:function(){return{nowIndex:null,tagList:[],menus:{}}},computed:{currentRouteObj:function(){var t=this.$route;return{name:t.name,params:t.params,query:t.query}}},methods:{show:function(e){t(e);var n=e.target.parentNode;this.nowIndex=n.getAttribute("index")||n.parentNode.getAttribute("index"),null==this.nowIndex?this.menus={closeAll:"关闭所有标签页"}:this.menus={closeSelf:"关闭标签页",closeOther:"关闭其他标签页",closeAll:"关闭所有标签页"}},trigger:function(t,e,n){if("closeAll"==t)this.clearTab();else if(this.nowIndex){var i=this.tagList[this.nowIndex];"closeOther"==t?this.closeOtherTab(i,this.nowIndex):"closeSelf"==t&&this.close(i)}},init:function(){this.tagList=i.getLocal2Json("SYS_TABS")||[],this.gotoTab(this.$route)},beforeClose:function(){return this.$Confirm("确定要关闭这一页吗")},handleClose:function(t){var e=this;if(t.meta&&t.meta.beforeCloseName)return new Promise(this.beforeClose[t.meta.beforeCloseName]).then((function(n){n&&e.close(t)}));this.close(t)},close:function(t){var e=this.tagList.indexOf(t);this.tagList.splice(e,1);var n=null;this.isCurrentTab(t)&&(this.tagList.length>e?n=this.tagList[e]:this.tagList.length>0?n=this.tagList[e-1]:this.$router.replace({name:this.homePage}),n&&this.$router.replace(n)),this.saveLocal()},handleClick:function(t){this.$router.push(t)},showTitleInside:function(t){return(0,o.showTitle)(t,this)},isCurrentTab:function(t){return(0,o.routeEqual)(this.currentRouteObj,t)},gotoTab:function(t){if(t.name){var e={name:t.name,query:t.query,params:t.params,meta:t.meta||{}};(0,o.isExsit)(e,this.tagList)||(this.tagList.push(e),this.saveLocal())}},closeOtherTab:function(t,e){this.isCurrentTab(t)||this.$router.push(t),this.tagList.splice(0,e),this.tagList.splice(1),this.saveLocal()},clearTab:function(){this.tagList=[],this.saveLocal(),this.isCurrentTab({name:this.homePage})||this.$router.push({name:this.homePage})},saveLocal:function(){i.saveLocal("SYS_TABS",this.tagList)}},mounted:function(){this.init()},watch:{$route:function(t){this.gotoTab(t)}}};e.default=a}).call(this,n(441),n(79).default)},441:function(t,e,n){(function(e){"object"==typeof window&&window,t.exports=function(){"use strict";var t={};return(t=(t=console.log.bind(console))||function(){}).info=function(){console.info.apply(console,arguments)},t.error=function(){console.error.apply(console,arguments)},t}()}).call(this,n(49))},442:function(t,e,n){},668:function(t,e,n){"use strict";n.r(e);var i=n(904),o=n(424);for(var a in o)"default"!==a&&function(t){n.d(e,t,(function(){return o[t]}))}(a);n(669);var r=n(10),s=Object(r.a)(o.default,i.a,i.b,!1,null,null,null);s.options.__file="src/components/app/modules/app-layout-setting.vue",e.default=s.exports},669:function(t,e,n){"use strict";var i=n(426);n.n(i).a},670:function(t,e,n){"use strict";n.r(e);var i=n(905),o=n(427);for(var a in o)"default"!==a&&function(t){n.d(e,t,(function(){return o[t]}))}(a);n(672);var r=n(10),s=Object(r.a)(o.default,i.a,i.b,!1,null,null,null);s.options.__file="src/components/app/app-header.vue",e.default=s.exports},671:function(t,e){e.endianness=function(){return"LE"},e.hostname=function(){return"undefined"!=typeof location?location.hostname:""},e.loadavg=function(){return[]},e.uptime=function(){return 0},e.freemem=function(){return Number.MAX_VALUE},e.totalmem=function(){return Number.MAX_VALUE},e.cpus=function(){return[]},e.type=function(){return"Browser"},e.release=function(){return"undefined"!=typeof navigator?navigator.appVersion:""},e.networkInterfaces=e.getNetworkInterfaces=function(){return{}},e.arch=function(){return"javascript"},e.platform=function(){return"browser"},e.tmpdir=e.tmpDir=function(){return"/tmp"},e.EOL="\n",e.homedir=function(){return"/"}},672:function(t,e,n){"use strict";var i=n(429);n.n(i).a},673:function(t,e,n){"use strict";n.r(e);var i=n(906),o=n(430);for(var a in o)"default"!==a&&function(t){n.d(e,t,(function(){return o[t]}))}(a);n(676);var r=n(10),s=Object(r.a)(o.default,i.a,i.b,!1,null,null,null);s.options.__file="src/components/app/app-menu.vue",e.default=s.exports},674:function(t,e,n){"use strict";n.r(e);var i=n(913),o=n(432);for(var a in o)"default"!==a&&function(t){n.d(e,t,(function(){return o[t]}))}(a);n(675);var r=n(10),s=Object(r.a)(o.default,i.a,i.b,!1,null,null,null);s.options.__file="src/components/app/app-logo.vue",e.default=s.exports},675:function(t,e,n){"use strict";var i=n(434);n.n(i).a},676:function(t,e,n){"use strict";var i=n(435);n.n(i).a},677:function(t,e,n){"use strict";n.r(e);var i=n(907),o=n(436);for(var a in o)"default"!==a&&function(t){n.d(e,t,(function(){return o[t]}))}(a);n(678);var r=n(10),s=Object(r.a)(o.default,i.a,i.b,!1,null,null,null);s.options.__file="src/components/app/app-footer.vue",e.default=s.exports},678:function(t,e,n){"use strict";var i=n(438);n.n(i).a},679:function(t,e,n){"use strict";var i=n(12);Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=i(n(680)).default;e.default=o},680:function(t,e,n){"use strict";n.r(e);var i=n(909),o=n(439);for(var a in o)"default"!==a&&function(t){n.d(e,t,(function(){return o[t]}))}(a);n(682);var r=n(10),s=Object(r.a)(o.default,i.a,i.b,!1,null,null,null);s.options.__file="src/components/common/sys-tabs/sys-tabs.vue",e.default=s.exports},681:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.routeEqual=e.showTitle=e.isExsit=void 0;var i=function(t,e){var n=Object.keys(t),i=Object.keys(e);return n.length===i.length&&(0===n.length&&0===i.length||!n.some((function(n){return t[n]!=e[n]})))};e.isExsit=function(t,e){var n=!0,i=!1,a=void 0;try{for(var r,s=e[Symbol.iterator]();!(n=(r=s.next()).done);n=!0){var u=r.value;if(o(u,t))return!0}}catch(t){i=!0,a=t}finally{try{n||null==s.return||s.return()}finally{if(i)throw a}}return!1};e.showTitle=function(t,e){var n=t.meta.title;if(n)return n};var o=function(t,e){var n=t.params||{},o=e.params||{},a=t.query||{},r=e.query||{};return t.name===e.name&&i(n,o)&&i(a,r)};e.routeEqual=o},682:function(t,e,n){"use strict";var i=n(442);n.n(i).a},870:function(t,e,n){"use strict";n.d(e,"a",(function(){return i})),n.d(e,"b",(function(){return o}));var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t.loading?t._e():n("Layout",{staticClass:"app-frame",attrs:{siderCollapsed:t.siderCollapsed,siderFixed:t.layoutConfig.siderFixed}},[n("Layout",{attrs:{headerFixed:t.layoutConfig.headerFixed}},[n("HHeader",{staticStyle:{position:"relative","z-index":"999",background:"#0A2140"},attrs:{theme:"white"}},[n("appHead",{attrs:{layoutConfig:t.layoutConfig},on:{openSetting:function(e){t.openSetting=!0}}})],1),t._v(" "),t.layoutConfig.showSystab?n("SysTabs",{attrs:{homePage:"Home"}}):t._e(),t._v(" "),n("Content",[n("div",{staticClass:"app-frame-content"},[n("router-view")],1),t._v(" "),n("HFooter",[n("appFooter")],1)],1)],1)],1),t._v(" "),n("Modal",{attrs:{type:"drawer-right"},model:{value:t.openSetting,callback:function(e){t.openSetting=e},expression:"openSetting"}},[n("appLayoutSetting",{attrs:{layoutConfig:t.layoutConfig}})],1)],1)},o=[];i._withStripped=!0},904:function(t,e,n){"use strict";n.d(e,"a",(function(){return i})),n.d(e,"b",(function(){return o}));var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"app-layout-setting-vue"},[n("div",{staticClass:"h-modal-header"},[t._v("系统布局配置")]),t._v(" "),n("div",{staticClass:"h-panel"},[n("div",{staticClass:"h-panel-body"},[n("Form",{staticClass:"setting-form",attrs:{labelWidth:120,labelPosition:"left",readonly:""}},[n("FormItem",{attrs:{label:"Sider风格"}},[n("SwitchList",{attrs:{small:"",datas:{white:"白色",dark:"暗色"}},model:{value:t.layoutConfig.siderTheme,callback:function(e){t.$set(t.layoutConfig,"siderTheme",e)},expression:"layoutConfig.siderTheme"}})],1),t._v(" "),n("FormItem",{attrs:{label:"固定 Header"}},[n("h-switch",{attrs:{small:""},model:{value:t.layoutConfig.headerFixed,callback:function(e){t.$set(t.layoutConfig,"headerFixed",e)},expression:"layoutConfig.headerFixed"}})],1),t._v(" "),n("FormItem",{attrs:{label:"固定侧边菜单"}},[n("h-switch",{attrs:{small:""},model:{value:t.layoutConfig.siderFixed,callback:function(e){t.$set(t.layoutConfig,"siderFixed",e)},expression:"layoutConfig.siderFixed"}})],1),t._v(" "),n("FormItem",{attrs:{label:"开启多Tab"}},[n("h-switch",{attrs:{small:""},model:{value:t.layoutConfig.showSystab,callback:function(e){t.$set(t.layoutConfig,"showSystab",e)},expression:"layoutConfig.showSystab"}})],1),t._v(" "),n("p",{staticClass:"dark-color font13",staticStyle:{padding:"10px 15px"}},[t._v("开启多Tab后，在 app-frame 中打开 keep-alive 才能开启页面缓存")])],1),t._v(" "),n("Button",{attrs:{block:""},on:{click:t.copySetting}},[t._v("复制配置")]),t._v(" "),n("p",{staticClass:"alert-warning"},[t._v("所有的配置都在 app-frame.vue 文件内，通过 layoutConfig 参数设置排版方式。")])],1)])])},o=[];i._withStripped=!0},905:function(t,e,n){"use strict";n.d(e,"a",(function(){return i})),n.d(e,"b",(function(){return o}));var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"app-header"},[n("div",{staticStyle:{"margin-left":"30px",float:"left",color:"#eee"}},[t._v("DSP广告投放平台")]),t._v(" "),n("div",{staticStyle:{"margin-left":"30px",float:"left"}},[n("router-link",{staticClass:"app-header-navItem",attrs:{to:"/home"}},[t._v("首页")]),t._v(" "),n("router-link",{staticClass:"app-header-navItem",attrs:{to:"/extension"}},[t._v("推广")]),t._v(" "),n("router-link",{staticClass:"app-header-navItem",attrs:{to:"/table-basic"}},[t._v("报表")])],1),t._v(" "),n("div",{staticClass:"float-right app-header-info"},[n("DropdownMenu",{attrs:{className:"app-header-dropdown",trigger:"hover",offset:"0,5",width:150,placement:"bottom-end",datas:t.infoMenu},on:{onclick:t.trigger}},[n("Avatar",{attrs:{src:t.userInfo.avatar,width:30}},[n("span",[t._v(t._s(t.userInfo.loginName))])])],1)],1)])},o=[];i._withStripped=!0},906:function(t,e,n){"use strict";n.d(e,"a",(function(){return i})),n.d(e,"b",(function(){return o}));var i=function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"app-menu"},[e("appLogo"),this._v(" "),e("Menu",{ref:"menu",attrs:{datas:this.menus,inlineCollapsed:this.siderCollapsed,className:"h-menu-"+this.theme},on:{click:this.trigger}}),this._v(" "),e("div",{staticClass:"app-menu-mask",on:{click:this.hideMenu}})],1)},o=[];i._withStripped=!0},907:function(t,e,n){"use strict";n.d(e,"a",(function(){return i})),n.d(e,"b",(function(){return o}));var i=function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"app-footer"})},o=[];i._withStripped=!0},909:function(t,e,n){"use strict";n.d(e,"a",(function(){return i})),n.d(e,"b",(function(){return o}));var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"sys-tabs-vue",class:{"sys-tabs-oversize":t.tagList.length>15}},[n("div",{ref:"scrollOuter",staticClass:"tabs-container"},[n("div",{staticClass:"tabs-body"},[n("DropdownMenu",{attrs:{datas:t.menus,trigger:"contextMenu",toggleIcon:!1},on:{click:t.trigger,show:t.show}},t._l(t.tagList,(function(e,i){return n("div",{key:"sys-tab-"+i,staticClass:"tabs-item",class:{"tabs-item-chosen":t.isCurrentTab(e)},attrs:{index:i},on:{click:function(n){return t.handleClick(e)}}},[n("div",{staticClass:"tabs-item-background"}),t._v(" "),n("div",{staticClass:"tabs-item-title"},[n("span",{staticClass:"tabs-item-icon",class:e.meta.icon}),t._v(" "),n("span",[t._v(t._s(e.meta.title))])]),t._v(" "),t.homePage!=e.name?n("span",{staticClass:"tabs-item-close h-icon-close",on:{click:function(n){return n.stopPropagation(),t.handleClose(e)}}}):t._e()])})),0)],1)])])},o=[];i._withStripped=!0},913:function(t,e,n){"use strict";n.d(e,"a",(function(){return i})),n.d(e,"b",(function(){return o}));var i=function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"app-logo"},[e("router-link",{attrs:{to:"/"}},[e("span",{staticClass:"app-logo-icon"}),e("span",{staticClass:"app-logo-text"},[this._v("DSP ADMIN")])])],1)},o=[];i._withStripped=!0}}]);