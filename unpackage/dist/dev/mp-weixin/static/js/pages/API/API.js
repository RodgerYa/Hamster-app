global.webpackJsonp([81],{105:function(e,n,a){"use strict";var t=function(){var e=this,n=e.$createElement,a=e._self._c||n;return a("view",{staticClass:"index"},[e._m(0),e._v(" "),e._l(e.lists,function(n,t){return a("view",{key:t,staticClass:"uni-card"},[a("view",{staticClass:"uni-list"},[a("view",{staticClass:"uni-list-cell uni-collapse"},[a("view",{staticClass:"uni-list-cell-navigate uni-navigate-bottom",class:n.open?"uni-active":"",attrs:{"hover-class":"uni-list-cell-hover",eventid:"0-"+t},on:{click:function(n){e.trigerCollapse(t)}}},[e._v("\n\t\t\t\t\t"+e._s(n.name)+"\n\t\t\t\t")]),e._v(" "),a("view",{staticClass:"uni-list uni-collapse",class:n.open?"uni-active":""},e._l(n.pages,function(n,i){return a("view",{key:i,staticClass:"uni-list-cell",attrs:{"hover-class":"uni-list-cell-hover",url:n.url,eventid:"1-"+t+"-"+i},on:{click:function(a){e.goDetailPage(n.url)}}},[a("view",{staticClass:"uni-list-cell-navigate uni-navigate-right"},[e._v(" "+e._s(n.name)+" ")])])}))])])])})],2)};t._withStripped=!0;var i={render:t,staticRenderFns:[function(){var e=this.$createElement,n=this._self._c||e;return n("view",{staticClass:"index-hd"},[n("image",{staticClass:"index-logo",attrs:{src:"../../static/apiIndex.png"}}),this._v(" "),n("view",{staticClass:"page-section-title"},[this._v("以下将演示uni-app接口能力，具体属性参数详见uni-app开发文档。")])])}]};n.a=i},177:function(e,n,a){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var t=s(a(1)),i=s(a(8));function s(e){return e&&e.__esModule?e:{default:e}}a(0).default;new t.default(i.default).$mount(),n.default={config:{navigationBarTitleText:"接口"}}},262:function(e,n,a){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var t=a(0).default;n.default={data:function(){return{lists:[{id:"page",name:"界面",open:!1,pages:[{name:"设置界面标题",url:"set-navigation-bar-title"},{name:"标题栏加载动画",url:"navigation-bar-loading"},{name:"页面跳转",url:"navigator"},{name:"下拉刷新",url:"pull-down-refresh"},{name:"创建动画",url:"animation"},{name:"创建绘画",url:"canvas"},{name:"显示操作菜单",url:"action-sheet"},{name:"显示模态弹窗",url:"modal"},{name:"显示消息提示框",url:"toast"}]},{id:"device",name:"设备",open:!1,pages:[{name:"获取手机网络状态",url:"get-network-type"},{name:"获取手机系统信息",url:"get-system-info"},{name:"打电话",url:"make-phone-call"},{name:"扫码",url:"scan-code"},{name:"剪贴板",url:"clipboard"},{name:"监听加速度传感器",url:"on-accelerometer-change"},{name:"监听罗盘数据",url:"on-compass-change"}]},{id:"network",name:"网络",open:!1,pages:[{name:"发起一个请求",url:"request"},{name:"上传文件",url:"upload-file"},{name:"下载文件",url:"download-file"}]},{id:"media",name:"媒体",open:!1,pages:[{name:"图片",url:"image"},{name:"录音",url:"voice"},{name:"背景音频",url:"background-audio"},{name:"视频",url:"video"},{name:"文件",url:"file"}]},{id:"location",name:"位置",open:!1,pages:[{name:"获取当前位置",url:"get-location"},{name:"使用地图查看位置",url:"open-location"},{name:"使用地图选择位置",url:"choose-location"}]},{id:"storage",name:"数据",open:!1,pages:[{name:"数据存储",url:"storage"}]},{id:"login",name:"登录",open:!1,pages:[{name:"登录",url:"login"},{name:"获取用户信息",url:"get-user-info"}]},{id:"payment",name:"支付",open:!1,pages:[{name:"发起支付",url:"request-payment"}]},{id:"share",name:"分享",open:!1,pages:[{name:"分享",url:"share"}]}]}},onShareAppMessage:function(){return{title:"欢迎体验uni-app",path:"/pages/API/API"}},methods:{trigerCollapse:function(e){for(var n=0,a=this.lists.length;n<a;++n)this.lists[n].open=e===n&&!this.lists[n].open},goDetailPage:function(e){var n=~e.indexOf("platform")?e:"/pages/API/"+e+"/"+e;t.navigateTo({url:n})}}}},356:function(e,n){},8:function(e,n,a){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var t=a(262),i=a.n(t),s=a(105),l=!1;var o=function(e){l||a(356)},r=a(2)(i.a,s.a,o,null,null);r.options.__file="Users/yanwenbo/Desktop/workspace/hamster-app/pages/API/API.vue",r.esModule&&Object.keys(r.esModule).some(function(e){return"default"!==e&&"__"!==e.substr(0,2)})&&console.error("named exports are not supported in *.vue files."),r.options.functional&&console.error("[vue-loader] API.vue: functional components are not supported with templates, they should use render functions."),n.default=r.exports}},[177]);
//# sourceMappingURL=../../../../.sourcemap/pages/API/API.js.map