global.webpackJsonp([4],{11:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},u=i(n(1)),r=i(n(3)),a=i(n(7));function i(e){return e&&e.__esModule?e:{default:e}}n(0).default;u.default.config.productionTip=!1,u.default.prototype.$store=a.default,r.default.mpType="app",new u.default(o({store:a.default},r.default)).$mount(),t.default={config:{pages:["^pages/bill/bill","pages/account/account","pages/user/user"],window:{navigationBarTextStyle:"black",navigationBarTitleText:"测试",navigationBarBackgroundColor:"#F8F8F8",backgroundColor:"#F8F8F8"},tabBar:{color:"#7A7E83",selectedColor:"#007AFF",borderStyle:"black",backgroundColor:"#ffffff",list:[{pagePath:"pages/bill/bill",text:"账单"},{pagePath:"pages/account/account",text:"账户"},{pagePath:"pages/user/user",text:"我的"}]}}}},15:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});n(0).default;t.default={onLaunch:function(){console.log("App Launch")},onShow:function(){console.log("App Show")},onHide:function(){console.log("App Hide")}}},22:function(e,t){},3:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(15),u=n.n(o),r=!1;var a=function(e){r||n(22)},i=n(2)(u.a,null,a,null,null);i.options.__file="Users/yanwenbo/Desktop/workspace/hamster-app/App.vue",i.esModule&&Object.keys(i.esModule).some(function(e){return"default"!==e&&"__"!==e.substr(0,2)})&&console.error("named exports are not supported in *.vue files."),t.default=i.exports},7:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=a(n(19)),u=a(n(1)),r=a(n(28));function a(e){return e&&e.__esModule?e:{default:e}}var i=n(0).default;u.default.use(r.default);var l=new r.default.Store({state:{hasLogin:!1,loginProvider:"",openid:null},mutations:{login:function(e,t){e.hasLogin=!0,e.loginProvider=t},logout:function(e){e.hasLogin=!1,e.openid=null},setOpenid:function(e,t){e.openid=t}},actions:{getUserOpenId:function(){var e,t=(e=o.default.mark(function e(t){var n=t.commit,u=t.state;return o.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,new Promise(function(e,t){u.openid?e(u.openid):i.login({success:function(t){n("login"),setTimeout(function(){console.log("uni.request mock openid[123456789]"),n("setOpenid","123456789"),e("123456789")},1e3)},fail:function(e){console.log("uni.login 接口调用失败，将无法正常使用开放接口等服务",e),t(e)}})});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}},e,this)}),function(){var t=e.apply(this,arguments);return new Promise(function(e,n){return function o(u,r){try{var a=t[u](r),i=a.value}catch(e){return void n(e)}if(!a.done)return Promise.resolve(i).then(function(e){o("next",e)},function(e){o("throw",e)});e(i)}("next")})});return function(e){return t.apply(this,arguments)}}()}});t.default=l}},[11]);
//# sourceMappingURL=../../.sourcemap/app.js.map