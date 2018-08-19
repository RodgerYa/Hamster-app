global.webpackJsonp([53],{

/***/ 161:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('view', [_c('page-head', {
    attrs: {
      "title": _vm.title,
      "mpcomid": '0'
    }
  }), _vm._v(" "), _c('view', {
    staticClass: "page-body"
  }, [_c('view', {
    staticClass: "page-section"
  }, [(_vm.recording === false && _vm.playing === false && _vm.hasRecord === false) ? _c('block', [_c('view', {
    staticClass: "page-body-time"
  }, [_c('text', {
    staticClass: "time-big"
  }, [_vm._v(_vm._s(_vm.formatedRecordTime))])]), _vm._v(" "), _c('view', {
    staticClass: "page-body-buttons"
  }, [_c('view', {
    staticClass: "page-body-button"
  }), _vm._v(" "), _c('view', {
    staticClass: "page-body-button",
    attrs: {
      "eventid": '0'
    },
    on: {
      "tap": _vm.startRecord
    }
  }, [_c('image', {
    attrs: {
      "src": "../../../static/record.png"
    }
  })]), _vm._v(" "), _c('view', {
    staticClass: "page-body-button"
  })])]) : _vm._e(), _vm._v(" "), (_vm.recording === true) ? _c('block', [_c('view', {
    staticClass: "page-body-time"
  }, [_c('text', {
    staticClass: "time-big"
  }, [_vm._v(_vm._s(_vm.formatedRecordTime))])]), _vm._v(" "), _c('view', {
    staticClass: "page-body-buttons"
  }, [_c('view', {
    staticClass: "page-body-button"
  }), _vm._v(" "), _c('view', {
    staticClass: "page-body-button",
    attrs: {
      "eventid": '1'
    },
    on: {
      "tap": _vm.stopRecord
    }
  }, [_c('view', {
    staticClass: "button-stop-record"
  })]), _vm._v(" "), _c('view', {
    staticClass: "page-body-button"
  })])]) : _vm._e(), _vm._v(" "), (_vm.hasRecord === true && _vm.playing === false) ? _c('block', [_c('view', {
    staticClass: "page-body-time"
  }, [_c('text', {
    staticClass: "time-big"
  }, [_vm._v(_vm._s(_vm.formatedPlayTime))]), _vm._v(" "), _c('text', {
    staticClass: "time-small"
  }, [_vm._v(_vm._s(_vm.formatedRecordTime))])]), _vm._v(" "), _c('view', {
    staticClass: "page-body-buttons"
  }, [_c('view', {
    staticClass: "page-body-button"
  }), _vm._v(" "), _c('view', {
    staticClass: "page-body-button",
    attrs: {
      "eventid": '2'
    },
    on: {
      "tap": _vm.playVoice
    }
  }, [_c('image', {
    attrs: {
      "src": "../../../static/play.png"
    }
  })]), _vm._v(" "), _c('view', {
    staticClass: "page-body-button",
    attrs: {
      "eventid": '3'
    },
    on: {
      "tap": _vm.clear
    }
  }, [_c('image', {
    attrs: {
      "src": "../../../static/trash.png"
    }
  })])])]) : _vm._e(), _vm._v(" "), (_vm.hasRecord === true && _vm.playing === true) ? _c('block', [_c('view', {
    staticClass: "page-body-time"
  }, [_c('text', {
    staticClass: "time-big"
  }, [_vm._v(_vm._s(_vm.formatedPlayTime))]), _vm._v(" "), _c('text', {
    staticClass: "time-small"
  }, [_vm._v(_vm._s(_vm.formatedRecordTime))])]), _vm._v(" "), _c('view', {
    staticClass: "page-body-buttons"
  }, [_c('view', {
    staticClass: "page-body-button",
    attrs: {
      "eventid": '4'
    },
    on: {
      "tap": _vm.stopVoice
    }
  }, [_c('image', {
    attrs: {
      "src": "../../../static/stop.png"
    }
  })]), _vm._v(" "), _c('view', {
    staticClass: "page-body-button",
    attrs: {
      "eventid": '5'
    },
    on: {
      "tap": _vm.clear
    }
  }, [_c('image', {
    attrs: {
      "src": "../../../static/trash.png"
    }
  })])])]) : _vm._e()], 1)])], 1)
}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ 217:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

var _vue = __webpack_require__(1);var _vue2 = _interopRequireDefault(_vue);
var _voice = __webpack_require__(40);var _voice2 = _interopRequireDefault(_voice);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}var uni = __webpack_require__(0).default;
var app = new _vue2.default(_voice2.default);
app.$mount();exports.default =

{
	config: { "navigationBarTitleText": "录音" } };

/***/ }),

/***/ 306:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });






























































var _pageHead = __webpack_require__(3);var _pageHead2 = _interopRequireDefault(_pageHead);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}var uni = __webpack_require__(0).default;

var util = __webpack_require__(4);
var playTimeInterval = null;
var recordTimeInterval = null;
var recorderManager = null;
var music = null;exports.default =
{
	data: function data() {
		return {
			title: 'start/stopRecord、play/stopVoice',
			recording: false, //录音中
			playing: false, //播放中
			hasRecord: false, //是否有了一个
			tempFilePath: '',
			recordTime: 0,
			playTime: 0,
			formatedRecordTime: '00:00:00', //录音的总时间
			formatedPlayTime: '00:00:00' //播放录音的当前时间
		};
	},
	onUnload: function onUnload() {
		this.end();
	},
	onLoad: function onLoad() {var _this = this;
		music = uni.createInnerAudioContext();
		music.onEnded(function () {
			clearInterval(playTimeInterval);
			var playTime = 0;
			console.log('play voice finished');
			_this.playing = false;
			_this.formatedPlayTime = util.formatTime(playTime);
			_this.playTime = playTime;
		});
		recorderManager = uni.getRecorderManager();
		recorderManager.onStart(function () {
			console.log('recorder start');
		});
		recorderManager.onStop(function (res) {
			music.src = res.tempFilePath;

			_this.hasRecord = true;
			_this.recording = false;
		});
	},
	methods: {
		startRecord: function startRecord() {var _this2 = this; //开始录音
			this.recording = true;

			recordTimeInterval = setInterval(function () {
				_this2.recordTime += 1;
				_this2.formatedRecordTime = util.formatTime(_this2.recordTime);
			}, 1000);

			recorderManager.start();
		},
		stopRecord: function stopRecord() {//停止录音
			recorderManager.stop();
			clearInterval(recordTimeInterval);
		},
		playVoice: function playVoice() {var _this3 = this;
			playTimeInterval = setInterval(function () {
				_this3.playing = true;
				_this3.playTime += 1;
				_this3.formatedPlayTime = util.formatTime(_this3.playTime);
			}, 1000);
			music.play();
		},
		stopVoice: function stopVoice() {
			clearInterval(playTimeInterval);
			this.playing = false,
			this.formatedPlayTime = util.formatTime(0),
			this.playTime = 0;
			music.stop();
		},
		end: function end() {
			music.stop();
			recorderManager.stop();
			clearInterval(recordTimeInterval);
			clearInterval(playTimeInterval);
			this.recording = false, this.playing = false, this.hasRecord = false;
			this.playTime = 0, this.recordTime = 0;
			this.formatedRecordTime = "00:00:00", this.formatedRecordTime = "00:00:00";
		},
		clear: function clear() {
			this.end();
		} },

	components: {
		pageHead: _pageHead2.default } };

/***/ }),

/***/ 40:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_node_modules_babel_loader_babelrc_false_retainLines_true_presets_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_node_modules_babel_preset_env_modules_commonjs_targets_browsers_1_last_2_versions_not_ie_8_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_node_modules_babel_preset_stage_2_plugins_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_node_modules_babel_plugin_transform_runtime_helpers_false_polyfill_false_regenerator_true_moduleName_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_node_modules_babel_runtime_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_lib_uni_loader_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_lib_preprocessor_loader_js_type_js_context_APP_PLUS_true_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_lib_mpvue_loader_lib_selector_type_script_index_0_voice_vue__ = __webpack_require__(306);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_node_modules_babel_loader_babelrc_false_retainLines_true_presets_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_node_modules_babel_preset_env_modules_commonjs_targets_browsers_1_last_2_versions_not_ie_8_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_node_modules_babel_preset_stage_2_plugins_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_node_modules_babel_plugin_transform_runtime_helpers_false_polyfill_false_regenerator_true_moduleName_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_node_modules_babel_runtime_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_lib_uni_loader_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_lib_preprocessor_loader_js_type_js_context_APP_PLUS_true_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_lib_mpvue_loader_lib_selector_type_script_index_0_voice_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_node_modules_babel_loader_babelrc_false_retainLines_true_presets_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_node_modules_babel_preset_env_modules_commonjs_targets_browsers_1_last_2_versions_not_ie_8_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_node_modules_babel_preset_stage_2_plugins_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_node_modules_babel_plugin_transform_runtime_helpers_false_polyfill_false_regenerator_true_moduleName_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_node_modules_babel_runtime_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_lib_uni_loader_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_lib_preprocessor_loader_js_type_js_context_APP_PLUS_true_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_lib_mpvue_loader_lib_selector_type_script_index_0_voice_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_lib_mpvue_loader_lib_template_compiler_index_id_data_v_6fc8b27c_hasScoped_false_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_lib_preprocessor_loader_js_type_html_context_APP_PLUS_true_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_lib_mpvue_loader_lib_selector_type_template_index_0_voice_vue__ = __webpack_require__(161);
function injectStyle (ssrContext) {
  __webpack_require__(424)
}
var normalizeComponent = __webpack_require__(2)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_node_modules_babel_loader_babelrc_false_retainLines_true_presets_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_node_modules_babel_preset_env_modules_commonjs_targets_browsers_1_last_2_versions_not_ie_8_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_node_modules_babel_preset_stage_2_plugins_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_node_modules_babel_plugin_transform_runtime_helpers_false_polyfill_false_regenerator_true_moduleName_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_node_modules_babel_runtime_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_lib_uni_loader_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_lib_preprocessor_loader_js_type_js_context_APP_PLUS_true_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_lib_mpvue_loader_lib_selector_type_script_index_0_voice_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_lib_mpvue_loader_lib_template_compiler_index_id_data_v_6fc8b27c_hasScoped_false_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_lib_preprocessor_loader_js_type_html_context_APP_PLUS_true_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_lib_mpvue_loader_lib_selector_type_template_index_0_voice_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 424:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })

},[217]);