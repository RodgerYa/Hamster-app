global.webpackJsonp([46],{168:function(t,e,a){"use strict";var s=function(){var t=this.$createElement,e=this._self._c||t;return e("view",[e("page-head",{attrs:{title:this.title,mpcomid:"0"}}),this._v(" "),this._m(0)],1)};s._withStripped=!0;var n={render:s,staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("view",{staticClass:"page-body"},[e("view",{staticClass:"page-body-wrapper"},[e("canvas",{staticClass:"canvas",attrs:{"canvas-id":"canvas"}})])])}]};e.a=n},212:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=i(a(1)),n=i(a(43));function i(t){return t&&t.__esModule?t:{default:t}}a(0).default;new s.default(n.default).$mount(),e.default={config:{navigationBarTitleText:"canvas"}}},297:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s,n=a(3),i=(s=n)&&s.__esModule?s:{default:s};var o=a(0).default,c=null,r=null;e.default={data:function(){return{title:"canvas",screenWidth:o.getSystemInfoSync().windowWidth,canvasWidth:0,position:{x:150,y:150,vx:2,vy:2}}},onReady:function(){c=o.createCanvasContext("canvas"),this.canvasWidth=this.screenWidth/750*610,this.position={x:this.canvasWidth/2,y:this.canvasWidth/2,vx:2,vy:2},this.drawBall(),r=setInterval(this.drawBall,17)},onUnload:function(){clearInterval(r),this.position={x:0,y:0,vx:0,vy:0}},methods:{drawBall:function(){var t=this.position;function e(t,e){c.beginPath(0),c.arc(t,e,5,0,2*Math.PI),c.setFillStyle("#1aad19"),c.setStrokeStyle("rgba(1,1,1,0)"),c.fill(),c.stroke()}t.x+=t.vx,t.y+=t.vy,t.x>=this.canvasWidth&&(t.vx=-2),t.x<=7&&(t.vx=2),t.y>=this.canvasWidth&&(t.vy=-2),t.y<=7&&(t.vy=2),e(t.x,this.canvasWidth/2),e(this.canvasWidth/2,t.y),e(this.canvasWidth-t.x,this.canvasWidth/2),e(this.canvasWidth/2,this.canvasWidth-t.y),e(t.x,t.y),e(this.canvasWidth-t.x,this.canvasWidth-t.y),e(t.x,this.canvasWidth-t.y),e(this.canvasWidth-t.x,t.y),c.draw()}},components:{pageHead:i.default}}},420:function(t,e){},43:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=a(297),n=a.n(s),i=a(168),o=!1;var c=function(t){o||a(420)},r=a(2)(n.a,i.a,c,null,null);r.options.__file="Users/yanwenbo/Desktop/workspace/hamster-app/pages/component/canvas/canvas.vue",r.esModule&&Object.keys(r.esModule).some(function(t){return"default"!==t&&"__"!==t.substr(0,2)})&&console.error("named exports are not supported in *.vue files."),r.options.functional&&console.error("[vue-loader] canvas.vue: functional components are not supported with templates, they should use render functions."),e.default=r.exports}},[212]);
//# sourceMappingURL=../../../../../.sourcemap/pages/component/canvas/canvas.js.map