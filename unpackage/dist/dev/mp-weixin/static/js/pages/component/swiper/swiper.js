global.webpackJsonp([28],{175:function(t,e,i){"use strict";var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("view",[i("page-head",{attrs:{title:t.title,mpcomid:"0"}}),t._v(" "),i("view",{staticClass:"page-body"},[i("view",{staticClass:"page-section page-section-spacing swiper"},[i("swiper",{attrs:{"indicator-dots":t.indicatorDots,autoplay:t.autoplay,interval:t.interval,duration:t.duration}},[i("swiper-item",{attrs:{mpcomid:"1"}},[i("view",{staticClass:"swiper-item color1"},[t._v("A")])]),t._v(" "),i("swiper-item",{attrs:{mpcomid:"2"}},[i("view",{staticClass:"swiper-item color2"},[t._v("B")])]),t._v(" "),i("swiper-item",{attrs:{mpcomid:"3"}},[i("view",{staticClass:"swiper-item color3"},[t._v("C")])])],1)],1),t._v(" "),i("view",{staticClass:"page-section swiper-list"},[i("view",{staticClass:"uni-list"},[i("view",{staticClass:"uni-list-cell uni-list-cell-pd"},[i("view",{staticClass:"uni-list-cell-db"},[t._v("指示点")]),t._v(" "),i("switch",{attrs:{checked:t.indicatorDots,eventid:"0"},on:{change:t.changeIndicatorDots}})]),t._v(" "),i("view",{staticClass:"uni-list-cell uni-list-cell-pd"},[i("view",{staticClass:"uni-list-cell-db"},[t._v("自动播放")]),t._v(" "),i("switch",{attrs:{checked:t.autoplay,eventid:"1"},on:{change:t.changeAutoplay}})])])]),t._v(" "),i("view",{staticClass:"page-section page-section-spacing"},[i("view",{staticClass:"page-section-title"},[i("text",[t._v("幻灯片切换时长(ms)")]),t._v(" "),i("text",{staticClass:"info"},[t._v(t._s(t.duration))])]),t._v(" "),i("slider",{attrs:{value:t.duration,min:"500",max:"2000",eventid:"2"},on:{change:t.durationChange}}),t._v(" "),i("view",{staticClass:"page-section-title"},[i("text",[t._v("自动播放间隔时长(ms)")]),t._v(" "),i("text",{staticClass:"info"},[t._v(t._s(t.interval))])]),t._v(" "),i("slider",{attrs:{value:t.interval,min:"2000",max:"10000",eventid:"3"},on:{change:t.intervalChange}})])])],1)};a._withStripped=!0;var s={render:a,staticRenderFns:[]};e.a=s},230:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n(i(1)),s=n(i(61));function n(t){return t&&t.__esModule?t:{default:t}}i(0).default;new a.default(s.default).$mount(),e.default={config:{navigationBarTitleText:"swiper"}}},315:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a,s=i(3),n=(a=s)&&a.__esModule?a:{default:a};i(0).default;e.default={data:function(){return{title:"swiper",background:["color1","color2","color3"],indicatorDots:!0,vertical:!1,autoplay:!1,interval:2e3,duration:500}},methods:{changeIndicatorDots:function(t){this.indicatorDots=!this.indicatorDots},changeAutoplay:function(t){this.autoplay=!this.autoplay},intervalChange:function(t){this.interval=t.target.value},durationChange:function(t){this.duration=t.target.value}},components:{pageHead:n.default}}},427:function(t,e){},61:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=i(315),s=i.n(a),n=i(175),o=!1;var l=function(t){o||i(427)},r=i(2)(s.a,n.a,l,null,null);r.options.__file="Users/yanwenbo/Desktop/workspace/hamster-app/pages/component/swiper/swiper.vue",r.esModule&&Object.keys(r.esModule).some(function(t){return"default"!==t&&"__"!==t.substr(0,2)})&&console.error("named exports are not supported in *.vue files."),r.options.functional&&console.error("[vue-loader] swiper.vue: functional components are not supported with templates, they should use render functions."),e.default=r.exports}},[230]);
//# sourceMappingURL=../../../../../.sourcemap/pages/component/swiper/swiper.js.map