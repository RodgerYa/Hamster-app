global.webpackJsonp([70],{130:function(t,e,s){"use strict";var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("view",[s("page-head",{attrs:{title:t.title,mpcomid:"0"}}),t._v(" "),s("view",{staticClass:"page-body"},[s("view",{staticClass:"page-section"},[s("view",{staticClass:"uni-list"},[s("view",{staticClass:"uni-list-cell"},[t._m(0),t._v(" "),s("view",{staticClass:"uni-list-cell-db"},[s("input",{staticClass:"uni-input",attrs:{type:"text",disabled:!0,placeholder:"未获取",value:t.systemInfo.model}})])]),t._v(" "),s("view",{staticClass:"uni-list-cell"},[t._m(1),t._v(" "),s("view",{staticClass:"uni-list-cell-db"},[s("input",{staticClass:"uni-input",attrs:{type:"text",disabled:!0,placeholder:"未获取",value:t.systemInfo.language}})])]),t._v(" "),s("view",{staticClass:"uni-list-cell"},[t._m(2),t._v(" "),s("view",{staticClass:"uni-list-cell-db"},[s("input",{staticClass:"uni-input",attrs:{type:"text",disabled:!0,placeholder:"未获取",value:t.systemInfo.version}})])]),t._v(" "),s("view",{staticClass:"uni-list-cell"},[t._m(3),t._v(" "),s("view",{staticClass:"uni-list-cell-db"},[s("input",{staticClass:"uni-input",attrs:{type:"text",disabled:!0,placeholder:"未获取",value:t.systemInfo.windowWidth}})])]),t._v(" "),s("view",{staticClass:"uni-list-cell"},[t._m(4),t._v(" "),s("view",{staticClass:"uni-list-cell-db"},[s("input",{staticClass:"uni-input",attrs:{type:"text",disabled:!0,placeholder:"未获取",value:t.systemInfo.windowHeight}})])]),t._v(" "),s("view",{staticClass:"uni-list-cell"},[t._m(5),t._v(" "),s("view",{staticClass:"uni-list-cell-db"},[s("input",{staticClass:"uni-input",attrs:{type:"text",disabled:!0,placeholder:"未获取",value:t.systemInfo.pixelRatio}})])])]),t._v(" "),s("view",{staticClass:"btn-area"},[s("button",{attrs:{type:"primary",eventid:"0"},on:{tap:t.getSystemInfo}},[t._v("获取手机系统信息")])],1)])])],1)};i._withStripped=!0;var a={render:i,staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("view",{staticClass:"uni-pd"},[e("view",{staticClass:"uni-label"},[this._v("手机型号")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("view",{staticClass:"uni-pd"},[e("view",{staticClass:"uni-label"},[this._v("语言")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("view",{staticClass:"uni-pd"},[e("view",{staticClass:"uni-label"},[this._v("版本")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("view",{staticClass:"uni-pd"},[e("view",{staticClass:"uni-label"},[this._v("屏幕宽度")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("view",{staticClass:"uni-pd"},[e("view",{staticClass:"uni-label"},[this._v("屏幕高度")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("view",{staticClass:"uni-pd"},[e("view",{staticClass:"uni-label"},[this._v("DPI")])])}]};e.a=a},188:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=l(s(1)),a=l(s(19));function l(t){return t&&t.__esModule?t:{default:t}}s(0).default;new i.default(a.default).$mount(),e.default={config:{navigationBarTitleText:"获取手机系统信息"}}},19:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=s(273),a=s.n(i),l=s(130),n=!1;var u=function(t){n||s(381)},c=s(2)(a.a,l.a,u,null,null);c.options.__file="Users/yanwenbo/Desktop/workspace/hamster-app/pages/API/get-system-info/get-system-info.vue",c.esModule&&Object.keys(c.esModule).some(function(t){return"default"!==t&&"__"!==t.substr(0,2)})&&console.error("named exports are not supported in *.vue files."),c.options.functional&&console.error("[vue-loader] get-system-info.vue: functional components are not supported with templates, they should use render functions."),e.default=c.exports},273:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i,a=s(3),l=(i=a)&&i.__esModule?i:{default:i};var n=s(0).default;e.default={data:function(){return{title:"getSystemInfo",systemInfo:{}}},onUnload:function(){this.systemInfo={}},methods:{getSystemInfo:function(){var t=this;n.getSystemInfo({success:function(e){t.systemInfo=e}})}},components:{pageHead:l.default}}},381:function(t,e){}},[188]);
//# sourceMappingURL=../../../../../.sourcemap/pages/API/get-system-info/get-system-info.js.map