global.webpackJsonp([78],{11:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=a(265),n=a.n(i),s=a(169),o=!1;var u=function(t){o||a(421)},r=a(2)(n.a,s.a,u,null,null);r.options.__file="Users/yanwenbo/Desktop/workspace/hamster-app/pages/API/background-audio/background-audio.vue",r.esModule&&Object.keys(r.esModule).some(function(t){return"default"!==t&&"__"!==t.substr(0,2)})&&console.error("named exports are not supported in *.vue files."),r.options.functional&&console.error("[vue-loader] background-audio.vue: functional components are not supported with templates, they should use render functions."),e.default=r.exports},169:function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("view",[a("page-head",{attrs:{title:t.title,mpcomid:"0"}}),t._v(" "),a("view",{staticClass:"page-section"},[a("view",{staticClass:"page-body-info"},[a("text",{staticClass:"time-big"},[t._v(t._s(t.formatedPlayTime))]),t._v(" "),a("slider",{staticClass:"slider",attrs:{min:"0",max:"21",step:"1",value:t.playTime,eventid:"0"},on:{change:t.seek}}),t._v(" "),t._m(0)]),t._v(" "),a("view",{staticClass:"page-body-text"},[t._v("注意：离开当前页面后背景音乐将保持播放，但退出uni-app将停止")]),t._v(" "),a("view",{staticClass:"page-body-buttons"},[!0===t.playing?a("block",[a("view",{staticClass:"page-body-button",attrs:{eventid:"1"},on:{tap:t.stop}},[a("image",{attrs:{src:"../../../static/stop.png"}})]),t._v(" "),a("view",{staticClass:"page-body-button",attrs:{eventid:"2"},on:{tap:t.pause}},[a("image",{attrs:{src:"../../../static/pause.png"}})])]):t._e(),t._v(" "),!1===t.playing?a("block",[a("view",{staticClass:"page-body-button"}),t._v(" "),a("view",{staticClass:"page-body-button",attrs:{eventid:"3"},on:{tap:t.play}},[a("image",{attrs:{src:"../../../static/play.png"}})])]):t._e(),t._v(" "),a("view",{staticClass:"page-body-button"})],1)])],1)};i._withStripped=!0;var n={render:i,staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("view",{staticClass:"play-time"},[e("text",[this._v("00:00")]),this._v(" "),e("text",[this._v("00:21")])])}]};e.a=n},180:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=s(a(1)),n=s(a(11));function s(t){return t&&t.__esModule?t:{default:t}}a(0).default;new i.default(n.default).$mount(),e.default={config:{navigationBarTitleText:"背景音频"}}},265:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i,n=a(3),s=(i=n)&&i.__esModule?i:{default:i};var o=a(0).default,u=a(5);e.default={data:function(){return{title:"backgroundAudio",bgAudioMannager:null,dataUrl:"https://img-cdn-qiniu.dcloud.net.cn/uniapp/audio/music.mp3",playing:!1,playTime:0,formatedPlayTime:"00:00:00"}},onLoad:function(){var t=this,e=o.getBackgroundAudioManager();e.title="致爱丽丝",e.singer="暂无",e.coverImgUrl="https://img-cdn-qiniu.dcloud.net.cn/uniapp/audio/music.jpg",e.onPlay(function(){console.log("开始播放"),t.playing=!0}),e.onPause(function(){console.log("暂停播放"),t.playing=!1}),e.onEnded(function(){t.playing=!1,t.playTime=0,t.formatedPlayTime=u.formatTime(0)}),e.onTimeUpdate(function(e){Math.floor(t.bgAudioMannager.currentTime)>Math.floor(t.playTime)&&(t.formatedPlayTime=u.formatTime(Math.floor(t.bgAudioMannager.currentTime))),t.playTime=t.bgAudioMannager.currentTime}),this.bgAudioMannager=e},methods:{play:function(t){this.bgAudioMannager.src?(this.bgAudioMannager.seek(this.playTime),this.bgAudioMannager.play()):(this.bgAudioMannager.startTime=this.playTime,this.bgAudioMannager.src=this.dataUrl)},seek:function(t){this.bgAudioMannager.seek(t.target.value)},pause:function(){this.bgAudioMannager.pause()},stop:function(){this.bgAudioMannager.stop(),this.playing=!1,this.playTime=0,this.formatedPlayTime=u.formatTime(0)}},components:{pageHead:s.default}}},421:function(t,e){}},[180]);
//# sourceMappingURL=../../../../../.sourcemap/pages/API/background-audio/background-audio.js.map