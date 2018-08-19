global.webpackJsonp([5],{

/***/ 112:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('view', [_c('page-head', {
    attrs: {
      "title": _vm.title,
      "mpcomid": '0'
    }
  }), _vm._v(" "), (_vm.provider[0]) ? _c('view', {
    staticClass: "page-body"
  }, [_c('view', {
    staticClass: "btn-area"
  }, [_c('button', {
    attrs: {
      "type": "primary",
      "eventid": '0'
    },
    on: {
      "tap": _vm.openPush
    }
  }, [_vm._v("开启push")]), _vm._v(" "), _c('button', {
    attrs: {
      "type": "primary",
      "eventid": '1'
    },
    on: {
      "tap": _vm.closePush
    }
  }, [_vm._v("关闭push")]), _vm._v(" "), _c('button', {
    attrs: {
      "type": "primary",
      "eventid": '2'
    },
    on: {
      "tap": _vm.listenTranMsg
    }
  }, [_vm._v("监听透传数据")]), _vm._v(" "), _c('button', {
    attrs: {
      "type": "primary",
      "eventid": '3'
    },
    on: {
      "tap": _vm.removeTranMsg
    }
  }, [_vm._v("移除监听透传数据")])], 1), _vm._v(" "), _c('view', {
    staticClass: "btn-area"
  }, [_c('button', {
    attrs: {
      "type": "primary",
      "eventid": '4'
    },
    on: {
      "tap": _vm.requireTranMsg
    }
  }, [_vm._v("发送\"透传数据\"消息")])], 1), _vm._v(" "), _c('view', {
    staticClass: "page-section-title"
  }, [_vm._v("透传内容：")]), _vm._v(" "), _c('view', {
    staticClass: "page-section"
  }, [_c('view', {
    staticClass: "textare-view"
  }, [_c('textarea', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.tranMsg),
      expression: "tranMsg"
    }],
    staticClass: "textarea",
    attrs: {
      "eventid": '5'
    },
    domProps: {
      "value": (_vm.tranMsg)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.tranMsg = $event.target.value
      }
    }
  })])])]) : _vm._e()], 1)
}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ 267:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

var _vue = __webpack_require__(1);var _vue2 = _interopRequireDefault(_vue);
var _push = __webpack_require__(90);var _push2 = _interopRequireDefault(_push);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}var uni = __webpack_require__(0).default;
var app = new _vue2.default(_push2.default);
app.$mount();exports.default =

{
	config: { "navigationBarTitleText": "推送" } };

/***/ }),

/***/ 356:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });






















var _pageHead = __webpack_require__(3);var _pageHead2 = _interopRequireDefault(_pageHead);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}var uni = __webpack_require__(0).default;exports.default =

{
	data: function data() {
		return {
			title: 'push',
			provider: [],
			pushServer: 'http://demo.dcloud.net.cn/push/?',
			tranMsg: '' };

	},
	onLoad: function onLoad() {var _this = this;
		uni.getProvider({
			service: "push",
			success: function success(e) {
				console.log("success", e);
				_this.provider = e.provider;
			},
			fail: function fail(e) {
				console.log("获取推送通道失败", e);
			} });

	},
	onUnload: function onUnload() {
		this.tranMsg = '';
	},
	methods: {
		openPush: function openPush() {
			uni.subscribePush({
				provider: this.provider[0],
				success: function success(e) {
					uni.showToast({
						title: "已开启push接收" });

				} });

		},
		closePush: function closePush() {
			uni.unsubscribePush({
				provider: this.provider[0],
				success: function success(e) {
					uni.showToast({
						title: "已关闭push接收" });

				} });

		},
		listenTranMsg: function listenTranMsg() {var _this2 = this;
			uni.onPush({
				provider: this.provider[0],
				success: function success(e) {
					uni.showToast({
						title: "开始监听透传数据" });

				},
				callback: function callback(e) {
					uni.showToast({
						title: "接收到透传数据" });

					_this2.tranMsg = e.data;
				} });

		},
		removeTranMsg: function removeTranMsg() {
			uni.offPush({
				provider: this.provider[0],
				success: function success(e) {
					console.log("移除监听透传数据");
					uni.showToast({
						title: "移除监听透传数据" });

				} });

		},
		requireTranMsg: function requireTranMsg() {//请求‘透传数据’推送消息
			var inf = plus.push.getClientInfo();
			var url = this.pushServer + 'type=tran&appid=' + encodeURIComponent(plus.runtime.appid);
			inf.id && (url += '&id=' + inf.id);
			url += '&cid=' + encodeURIComponent(inf.clientid);
			if (plus.os.name == 'iOS') {
				url += '&token=' + encodeURIComponent(inf.token);
			}
			url += '&title=' + encodeURIComponent('Hello uniapp');
			url += '&content=' + encodeURIComponent('带透传数据推送通知！');
			url += '&payload=' + encodeURIComponent('\'{"title":"Hello uniapp Test","content":"test content","payload":"1234567890"}\'');
			url += '&version=' + encodeURIComponent(plus.runtime.version);
			plus.runtime.openURL(url);
		} },

	components: {
		pageHead: _pageHead2.default } };

/***/ }),

/***/ 375:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 90:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_node_modules_babel_loader_babelrc_false_retainLines_true_presets_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_node_modules_babel_preset_env_modules_commonjs_targets_browsers_1_last_2_versions_not_ie_8_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_node_modules_babel_preset_stage_2_plugins_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_node_modules_babel_plugin_transform_runtime_helpers_false_polyfill_false_regenerator_true_moduleName_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_node_modules_babel_runtime_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_lib_uni_loader_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_lib_preprocessor_loader_js_type_js_context_APP_PLUS_true_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_lib_mpvue_loader_lib_selector_type_script_index_0_push_vue__ = __webpack_require__(356);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_node_modules_babel_loader_babelrc_false_retainLines_true_presets_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_node_modules_babel_preset_env_modules_commonjs_targets_browsers_1_last_2_versions_not_ie_8_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_node_modules_babel_preset_stage_2_plugins_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_node_modules_babel_plugin_transform_runtime_helpers_false_polyfill_false_regenerator_true_moduleName_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_node_modules_babel_runtime_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_lib_uni_loader_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_lib_preprocessor_loader_js_type_js_context_APP_PLUS_true_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_lib_mpvue_loader_lib_selector_type_script_index_0_push_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_node_modules_babel_loader_babelrc_false_retainLines_true_presets_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_node_modules_babel_preset_env_modules_commonjs_targets_browsers_1_last_2_versions_not_ie_8_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_node_modules_babel_preset_stage_2_plugins_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_node_modules_babel_plugin_transform_runtime_helpers_false_polyfill_false_regenerator_true_moduleName_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_node_modules_babel_runtime_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_lib_uni_loader_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_lib_preprocessor_loader_js_type_js_context_APP_PLUS_true_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_lib_mpvue_loader_lib_selector_type_script_index_0_push_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_lib_mpvue_loader_lib_template_compiler_index_id_data_v_1d9fb804_hasScoped_false_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_lib_preprocessor_loader_js_type_html_context_APP_PLUS_true_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_lib_mpvue_loader_lib_selector_type_template_index_0_push_vue__ = __webpack_require__(112);
function injectStyle (ssrContext) {
  __webpack_require__(375)
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
  __WEBPACK_IMPORTED_MODULE_0__Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_node_modules_babel_loader_babelrc_false_retainLines_true_presets_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_node_modules_babel_preset_env_modules_commonjs_targets_browsers_1_last_2_versions_not_ie_8_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_node_modules_babel_preset_stage_2_plugins_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_node_modules_babel_plugin_transform_runtime_helpers_false_polyfill_false_regenerator_true_moduleName_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_node_modules_babel_runtime_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_lib_uni_loader_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_lib_preprocessor_loader_js_type_js_context_APP_PLUS_true_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_lib_mpvue_loader_lib_selector_type_script_index_0_push_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_lib_mpvue_loader_lib_template_compiler_index_id_data_v_1d9fb804_hasScoped_false_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_lib_preprocessor_loader_js_type_html_context_APP_PLUS_true_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_lib_mpvue_loader_lib_selector_type_template_index_0_push_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ })

},[267]);