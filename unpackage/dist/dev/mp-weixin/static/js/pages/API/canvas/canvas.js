global.webpackJsonp([77],{100:function(e,t,n){"use strict";var o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("view",[n("page-head",{attrs:{title:e.title,mpcomid:"0"}}),e._v(" "),n("view",{staticClass:"page-body"},[n("view",{staticClass:"page-section"},[n("canvas",{staticClass:"canvas-element",attrs:{"canvas-id":"canvas"}}),e._v(" "),n("scroll-view",{staticClass:"canvas-buttons",attrs:{"scroll-y":"true"}},e._l(e.names,function(t,o){return n("block",{key:o},[n("button",{staticClass:"canvas-button",attrs:{eventid:"0-"+o},on:{tap:function(n){e.handleCanvasButton(t)}}},[e._v(e._s(t))])],1)}))],1)])],1)};o._withStripped=!0;var a={render:o,staticRenderFns:[]};t.a=a},12:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(266),a=n.n(o),i=n(100),r=!1;var s=function(e){r||n(351)},l=n(2)(a.a,i.a,s,null,null);l.options.__file="Users/yanwenbo/Desktop/workspace/hamster-app/pages/API/canvas/canvas.vue",l.esModule&&Object.keys(l.esModule).some(function(e){return"default"!==e&&"__"!==e.substr(0,2)})&&console.error("named exports are not supported in *.vue files."),l.options.functional&&console.error("[vue-loader] canvas.vue: functional components are not supported with templates, they should use render functions."),t.default=l.exports},181:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=i(n(1)),a=i(n(12));function i(e){return e&&e.__esModule?e:{default:e}}n(0).default;new o.default(a.default).$mount(),t.default={config:{navigationBarTitleText:"创建绘画"}}},266:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o,a=n(3),i=(o=a)&&o.__esModule?o:{default:o};var r=n(0).default,s=null;t.default={data:function(){return{title:"createContext",names:["rotate","scale","reset","translate","save","restore","drawImage","fillText","fill","stroke","clearRect","beginPath","closePath","moveTo","lineTo","rect","arc","quadraticCurveTo","bezierCurveTo","setFillStyle","setStrokeStyle","setGlobalAlpha","setShadow","setFontSize","setLineCap","setLineJoin","setLineWidth","setMiterLimit"]}},onReady:function(){s=r.createCanvasContext("canvas")},methods:{toTempFilePath:function(){r.canvasToTempFilePath({canvasId:"canvas",success:function(e){console.log(e)},fail:function(e){console.log(e)}})},handleCanvasButton:function(e){this[e]()},rotate:function(){s.beginPath(),s.rotate(10*Math.PI/180),s.rect(225,75,20,10),s.fill(),s.draw()},scale:function(){s.beginPath(),s.rect(25,25,50,50),s.stroke(),s.scale(2,2),s.beginPath(),s.rect(25,25,50,50),s.stroke(),s.draw()},reset:function(){s.beginPath(),s.setFillStyle("#000000"),s.setStrokeStyle("#000000"),s.setFontSize(10),s.setGlobalAlpha(1),s.setShadow(0,0,0,"rgba(0, 0, 0, 0)"),s.setLineCap("butt"),s.setLineJoin("miter"),s.setLineWidth(1),s.setMiterLimit(10),s.draw()},translate:function(){s.beginPath(),s.rect(10,10,100,50),s.fill(),s.translate(70,70),s.beginPath(),s.fill(),s.draw()},save:function(){s.beginPath(),s.setStrokeStyle("#00ff00"),s.save(),s.scale(2,2),s.setStrokeStyle("#ff0000"),s.rect(0,0,100,100),s.stroke(),s.restore(),s.rect(0,0,50,50),s.stroke(),s.draw()},restore:function(){[3,2,1].forEach(function(e){s.beginPath(),s.save(),s.scale(e,e),s.rect(10,10,100,100),s.stroke(),s.restore()}),s.draw()},drawImage:function(){s.drawImage("../../../static/uni@2x.png",0,0),s.draw()},fillText:function(){s.setStrokeStyle("#ff0000"),s.beginPath(),s.moveTo(0,10),s.lineTo(300,10),s.stroke(),s.setFontSize(10),s.fillText("Hello World",0,30),s.setFontSize(20),s.fillText("Hello World",100,30),s.beginPath(),s.moveTo(0,30),s.lineTo(300,30),s.stroke(),s.draw()},fill:function(){s.beginPath(),s.rect(20,20,150,100),s.setStrokeStyle("#00ff00"),s.fill(),s.draw()},stroke:function(){s.beginPath(),s.moveTo(20,20),s.lineTo(20,100),s.lineTo(70,100),s.setStrokeStyle("#00ff00"),s.stroke(),s.draw()},clearRect:function(){s.setFillStyle("#ff0000"),s.beginPath(),s.rect(0,0,300,150),s.fill(),s.clearRect(20,20,100,50),s.draw()},beginPath:function(){s.beginPath(),s.setLineWidth(5),s.setStrokeStyle("#ff0000"),s.moveTo(0,75),s.lineTo(250,75),s.stroke(),s.beginPath(),s.setStrokeStyle("#0000ff"),s.moveTo(50,0),s.lineTo(150,130),s.stroke(),s.draw()},closePath:function(){s.beginPath(),s.setLineWidth(1),s.moveTo(20,20),s.lineTo(20,100),s.lineTo(70,100),s.closePath(),s.stroke(),s.draw()},moveTo:function(){s.beginPath(),s.moveTo(0,0),s.lineTo(300,150),s.stroke(),s.draw()},lineTo:function(){s.beginPath(),s.moveTo(20,20),s.lineTo(20,100),s.lineTo(70,100),s.stroke(),s.draw()},rect:function(){s.beginPath(),s.rect(20,20,150,100),s.stroke(),s.draw()},arc:function(){s.beginPath(),s.setLineWidth(2),s.arc(75,75,50,0,2*Math.PI,!0),s.moveTo(110,75),s.arc(75,75,35,0,Math.PI,!1),s.moveTo(65,65),s.arc(60,65,5,0,2*Math.PI,!0),s.moveTo(95,65),s.arc(90,65,5,0,2*Math.PI,!0),s.stroke(),s.draw()},quadraticCurveTo:function(){s.beginPath(),s.moveTo(20,20),s.quadraticCurveTo(20,100,200,20),s.stroke(),s.draw()},bezierCurveTo:function(){s.beginPath(),s.moveTo(20,20),s.bezierCurveTo(20,100,200,100,200,20),s.stroke(),s.draw()},setFillStyle:function(){["#fef957","rgb(242,159,63)","rgb(242,117,63)","#e87e51"].forEach(function(e,t){s.setFillStyle(e),s.beginPath(),s.rect(0+75*t,0,50,50),s.fill()}),s.draw()},setStrokeStyle:function(){["#fef957","rgb(242,159,63)","rgb(242,117,63)","#e87e51"].forEach(function(e,t){s.setStrokeStyle(e),s.beginPath(),s.rect(0+75*t,0,50,50),s.stroke()}),s.draw()},setGlobalAlpha:function(){s.setFillStyle("#000000"),[1,.5,.1].forEach(function(e,t){s.setGlobalAlpha(e),s.beginPath(),s.rect(0+75*t,0,50,50),s.fill()}),s.draw(),s.setGlobalAlpha(1)},setShadow:function(){s.beginPath(),s.setShadow(10,10,10,"rgba(0, 0, 0, 199)"),s.rect(10,10,100,100),s.fill(),s.draw()},setFontSize:function(){[10,20,30,40].forEach(function(e,t){s.setFontSize(e),s.fillText("Hello, world",20,20+40*t)}),s.draw()},setLineCap:function(){s.setLineWidth(10),["butt","round","square"].forEach(function(e,t){s.beginPath(),s.setLineCap(e),s.moveTo(20,20+20*t),s.lineTo(100,20+20*t),s.stroke()}),s.draw()},setLineJoin:function(){s.setLineWidth(10),["bevel","round","miter"].forEach(function(e,t){s.beginPath(),s.setLineJoin(e),s.moveTo(20+80*t,20),s.lineTo(100+80*t,50),s.lineTo(20+80*t,100),s.stroke()}),s.draw()},setLineWidth:function(){[2,4,6,8,10].forEach(function(e,t){s.beginPath(),s.setLineWidth(e),s.moveTo(20,20+20*t),s.lineTo(100,20+20*t),s.stroke()}),s.draw()},setMiterLimit:function(){s.setLineWidth(4),[2,4,6,8,10].forEach(function(e,t){s.beginPath(),s.setMiterLimit(e),s.moveTo(20+80*t,20),s.lineTo(100+80*t,50),s.lineTo(20+80*t,100),s.stroke()}),s.draw()}},components:{pageHead:i.default}}},351:function(e,t){}},[181]);
//# sourceMappingURL=../../../../../.sourcemap/pages/API/canvas/canvas.js.map