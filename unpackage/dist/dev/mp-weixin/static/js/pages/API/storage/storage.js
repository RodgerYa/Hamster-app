global.webpackJsonp([53],{121:function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("view",[a("page-head",{attrs:{title:t.title,mpcomid:"0"}}),t._v(" "),a("view",{staticClass:"page-body"},[a("view",{staticClass:"page-section"},[a("view",{staticClass:"uni-list"},[a("view",{staticClass:"uni-list-cell"},[t._m(0),t._v(" "),a("view",{staticClass:"uni-list-cell-db"},[a("input",{staticClass:"uni-input",attrs:{type:"text",placeholder:"请输入key",name:"key",value:t.key,eventid:"0"},on:{input:t.keyChange}})])]),t._v(" "),a("view",{staticClass:"uni-list-cell"},[t._m(1),t._v(" "),a("view",{staticClass:"uni-list-cell-db"},[a("input",{staticClass:"uni-input",attrs:{type:"text",placeholder:"请输入value",name:"data",value:t.data,eventid:"1"},on:{input:t.dataChange}})])])]),t._v(" "),a("view",{staticClass:"btn-area"},[a("button",{staticClass:"btn-setstorage",attrs:{type:"primary",eventid:"2"},on:{tap:t.setStorage}},[t._v("存储数据")]),t._v(" "),a("button",{attrs:{eventid:"3"},on:{tap:t.getStorage}},[t._v("读取数据")]),t._v(" "),a("button",{attrs:{eventid:"4"},on:{tap:t.clearStorage}},[t._v("清理数据")])],1)])])],1)};s._withStripped=!0;var n={render:s,staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("view",{staticClass:"uni-list-cell-left"},[e("view",{staticClass:"uni-label"},[this._v("key")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("view",{staticClass:"uni-list-cell-left"},[e("view",{staticClass:"uni-label"},[this._v("value")])])}]};e.a=n},205:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=i(a(1)),n=i(a(36));function i(t){return t&&t.__esModule?t:{default:t}}a(0).default;new s.default(n.default).$mount(),e.default={config:{navigationBarTitleText:"数据存储"}}},290:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s,n=a(3),i=(s=n)&&s.__esModule?s:{default:s};var l=a(0).default;e.default={data:function(){return{title:"get/set/clearStorage",key:"",data:""}},methods:{keyChange:function(t){this.key=t.target.value},dataChange:function(t){this.data=t.target.value},getStorage:function(){var t=this.key;this.data;0===t.length?l.showModal({title:"读取数据失败",content:"key 不能为空",showCancel:!1}):l.getStorage({key:t,success:function(t){l.showModal({title:"读取数据成功",content:"data: '"+t.data+"'",showCancel:!1})},fail:function(){l.showModal({title:"读取数据失败",content:"找不到 key 对应的数据",showCancel:!1})}})},setStorage:function(){var t=this.key,e=this.data;0===t.length?l.showModal({title:"保存数据失败",content:"key 不能为空",showCancel:!1}):l.setStorage({key:t,data:e,success:function(t){l.showModal({title:"存储数据成功",content:" ",showCancel:!1})},fail:function(){l.showModal({title:"储存数据失败!",showCancel:!1})}})},clearStorage:function(){l.clearStorageSync(),this.key="",this.data="",l.showModal({title:"清除数据成功",content:" ",showCancel:!1})}},components:{pageHead:i.default}}},36:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=a(290),n=a.n(s),i=a(121),l=!1;var o=function(t){l||a(372)},u=a(2)(n.a,i.a,o,null,null);u.options.__file="Users/yanwenbo/Desktop/workspace/hamster-app/pages/API/storage/storage.vue",u.esModule&&Object.keys(u.esModule).some(function(t){return"default"!==t&&"__"!==t.substr(0,2)})&&console.error("named exports are not supported in *.vue files."),u.options.functional&&console.error("[vue-loader] storage.vue: functional components are not supported with templates, they should use render functions."),e.default=u.exports},372:function(t,e){}},[205]);
//# sourceMappingURL=../../../../../.sourcemap/pages/API/storage/storage.js.map