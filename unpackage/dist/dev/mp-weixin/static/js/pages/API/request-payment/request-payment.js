global.webpackJsonp([58],{132:function(e,t,n){"use strict";var o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("view",[n("page-head",{attrs:{title:e.title,mpcomid:"0"}}),e._v(" "),n("view",{staticClass:"page-body"},[n("view",{staticClass:"page-section"},[n("view",[e._v("支付金额")]),e._v(" "),e._m(0),e._v(" "),n("view",{staticClass:"desc"},[e._v("实际应用中可自定义金额")]),e._v(" "),n("view",{staticClass:"btn-area"},[n("button",{attrs:{type:"primary",disabled:"true"}},[e._v("微信支付")])],1)])])],1)};o._withStripped=!0;var r={render:o,staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("view",{staticClass:"price"},[t("text",{staticClass:"rmbLogo"},[this._v("￥")]),this._v("0.01")])}]};t.a=r},200:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=s(n(1)),r=s(n(31));function s(e){return e&&e.__esModule?e:{default:e}}n(0).default;new o.default(r.default).$mount(),t.default={config:{navigationBarTitleText:"发起支付"}}},285:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=s(n(4)),r=s(n(3));function s(e){return e&&e.__esModule?e:{default:e}}var a=n(0).default;t.default={data:function(){return{title:"request-payment",providerList:[]}},onLoad:function(){a.showModal({content:"小程序支付正在申请中...",showCancel:!1})},methods:{requestPayment:function(e,t){var n,r=this;return(n=o.default.mark(function n(){var s;return o.default.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return r.providerList[t].loading=!0,n.next=3,r.getOrderInfo(e.id);case 3:if(s=n.sent,console.log("得到订单信息",s),200===s.statusCode){n.next=9;break}return console.log("获得订单信息失败",s),a.showModal({content:"获得订单信息失败",showCancel:!1}),n.abrupt("return");case 9:a.requestPayment({provider:e.id,orderInfo:s.data,success:function(e){console.log("success",e),a.showToast({title:"感谢您的赞助!"})},fail:function(e){console.log("fail",e),a.showModal({content:"支付失败,原因为: "+e.errMsg,showCancel:!1})},complete:function(){r.providerList[t].loading=!1}});case 10:case"end":return n.stop()}},n,r)}),function(){var e=n.apply(this,arguments);return new Promise(function(t,n){return function o(r,s){try{var a=e[r](s),u=a.value}catch(e){return void n(e)}if(!a.done)return Promise.resolve(u).then(function(e){o("next",e)},function(e){o("throw",e)});t(u)}("next")})})()},getOrderInfo:function(e){var t="https://demo.dcloud.net.cn/payment/?payid="+e+"&appid="+(a.os.plus?plus.runtime.appid:"")+"&total=0.01";return new Promise(function(e){a.request({url:t,success:function(t){e(t)},fail:function(t){e(t)}})})}},components:{pageHead:r.default}}},31:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(285),r=n.n(o),s=n(132),a=!1;var u=function(e){a||n(383)},i=n(2)(r.a,s.a,u,null,null);i.options.__file="Users/yanwenbo/Desktop/workspace/hamster-app/pages/API/request-payment/request-payment.vue",i.esModule&&Object.keys(i.esModule).some(function(e){return"default"!==e&&"__"!==e.substr(0,2)})&&console.error("named exports are not supported in *.vue files."),i.options.functional&&console.error("[vue-loader] request-payment.vue: functional components are not supported with templates, they should use render functions."),t.default=i.exports},383:function(e,t){}},[200]);
//# sourceMappingURL=../../../../../.sourcemap/pages/API/request-payment/request-payment.js.map