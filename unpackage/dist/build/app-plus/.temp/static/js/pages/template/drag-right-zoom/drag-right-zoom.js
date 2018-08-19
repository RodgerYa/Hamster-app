global.webpackJsonp([20],{

/***/ 163:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('view', [_c('view', {
    staticClass: "page-bottom",
    attrs: {
      "eventid": '0'
    },
    on: {
      "touchmove": _vm.tap_drag,
      "touchend": _vm.tap_end,
      "touchstart": _vm.tap_start
    }
  }, [_c('view', {
    staticClass: "page-content"
  }, [_c('view', {
    staticClass: "wc"
  }, [_c('navigator', {
    attrs: {
      "url": "#",
      "hover-class": "navigator-hover"
    }
  }, [_vm._v("第一个菜单")])], 1), _vm._v(" "), _c('view', {
    staticClass: "wc"
  }, [_c('navigator', {
    attrs: {
      "url": "#",
      "hover-class": "navigator-hover"
    }
  }, [_vm._v("第二个菜单（缩放）")])], 1), _vm._v(" "), _c('view', {
    staticClass: "wc"
  }, [_c('navigator', {
    attrs: {
      "url": "#",
      "hover-class": "navigator-hover"
    }
  }, [_vm._v("第三个菜单（拖动）")])], 1), _vm._v(" "), _c('view', {
    staticClass: "wc"
  }, [_c('navigator', {
    attrs: {
      "url": "#",
      "hover-class": "navigator-hover"
    }
  }, [_vm._v("第四个菜单")])], 1)])]), _vm._v(" "), _c('view', {
    class: ['page-top', _vm.openDrag ? 'c-state2' : '', _vm.openClick ? 'c-state2' : ''],
    attrs: {
      "eventid": '2'
    },
    on: {
      "touchmove": _vm.tap_drag,
      "touchend": _vm.tap_end,
      "touchstart": _vm.tap_start
    }
  }, [_c('image', {
    attrs: {
      "src": "../../../static/menu.png",
      "eventid": '1'
    },
    on: {
      "tap": _vm.tap_ch
    }
  })])])
}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ 250:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

var _vue = __webpack_require__(1);var _vue2 = _interopRequireDefault(_vue);
var _dragRightZoom = __webpack_require__(73);var _dragRightZoom2 = _interopRequireDefault(_dragRightZoom);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}var uni = __webpack_require__(0).default;
var app = new _vue2.default(_dragRightZoom2.default);
app.$mount();exports.default =

{
	config: { "navigationBarTitleText": "右滑菜单（缩放）" } };

/***/ }),

/***/ 339:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });var uni = __webpack_require__(0).default;exports.default =























{
	data: function data() {
		return {
			openDrag: false,
			openClick: false,
			markX: 0,
			newmarkX: 0,
			markY: 0,
			newmarkY: 0,
			istoright: false };

	},
	onReady: function onReady() {
		//如果返回时侧滑仍是打开状态，则再次打开页面，侧滑依然显示。如果不想看到，可以进来的时候重置下状态
		this.openDrag = false;
		this.openClick = false;
	},
	methods: {
		tap_ch: function tap_ch(e) {
			if (this.openClick || this.openDrag) {
				this.openClick = false;
				this.openDrag = false;
			} else {
				this.openClick = true;
			}
		},
		tap_start: function tap_start(e) {
			this.markX = this.newmarkX = e.touches[0].pageX;
			this.markY = this.newmarkY = e.touches[0].pageY;
			console.log('e.touches[0].pageX:' + e.touches[0].pageX);
		},
		tap_drag: function tap_drag(e) {
			this.newmarkX = e.touches[0].pageX;
			this.newmarkY = e.touches[0].pageY;
			console.log('this.newmarkX:' + e.touches[0].pageX);
			if (this.markX > this.newmarkX) {
				this.istoright = false;
			} else {
				this.istoright = true;
			}
			this.markX = this.newmarkX;
		},
		tap_end: function tap_end() {
			if (this.newmarkY - this.markY > 25 || this.markY - this.newmarkY > 25) {//防止上下拖动时触发侧滑
				return false;
			}
			this.markX = 0;
			this.newmarkX = 0;
			this.markY = 0;
			this.newmarkY = 0;
			if (this.istoright) {
				this.openDrag = true;
			} else {
				this.openDrag = false;
			}
		} } };

/***/ }),

/***/ 426:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 73:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_node_modules_babel_loader_babelrc_false_retainLines_true_presets_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_node_modules_babel_preset_env_modules_commonjs_targets_browsers_1_last_2_versions_not_ie_8_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_node_modules_babel_preset_stage_2_plugins_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_node_modules_babel_plugin_transform_runtime_helpers_false_polyfill_false_regenerator_true_moduleName_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_node_modules_babel_runtime_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_lib_uni_loader_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_lib_preprocessor_loader_js_type_js_context_APP_PLUS_true_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_lib_mpvue_loader_lib_selector_type_script_index_0_drag_right_zoom_vue__ = __webpack_require__(339);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_node_modules_babel_loader_babelrc_false_retainLines_true_presets_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_node_modules_babel_preset_env_modules_commonjs_targets_browsers_1_last_2_versions_not_ie_8_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_node_modules_babel_preset_stage_2_plugins_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_node_modules_babel_plugin_transform_runtime_helpers_false_polyfill_false_regenerator_true_moduleName_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_node_modules_babel_runtime_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_lib_uni_loader_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_lib_preprocessor_loader_js_type_js_context_APP_PLUS_true_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_lib_mpvue_loader_lib_selector_type_script_index_0_drag_right_zoom_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_node_modules_babel_loader_babelrc_false_retainLines_true_presets_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_node_modules_babel_preset_env_modules_commonjs_targets_browsers_1_last_2_versions_not_ie_8_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_node_modules_babel_preset_stage_2_plugins_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_node_modules_babel_plugin_transform_runtime_helpers_false_polyfill_false_regenerator_true_moduleName_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_node_modules_babel_runtime_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_lib_uni_loader_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_lib_preprocessor_loader_js_type_js_context_APP_PLUS_true_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_lib_mpvue_loader_lib_selector_type_script_index_0_drag_right_zoom_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_lib_mpvue_loader_lib_template_compiler_index_id_data_v_7923544a_hasScoped_false_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_lib_preprocessor_loader_js_type_html_context_APP_PLUS_true_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_lib_mpvue_loader_lib_selector_type_template_index_0_drag_right_zoom_vue__ = __webpack_require__(163);
function injectStyle (ssrContext) {
  __webpack_require__(426)
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
  __WEBPACK_IMPORTED_MODULE_0__Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_node_modules_babel_loader_babelrc_false_retainLines_true_presets_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_node_modules_babel_preset_env_modules_commonjs_targets_browsers_1_last_2_versions_not_ie_8_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_node_modules_babel_preset_stage_2_plugins_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_node_modules_babel_plugin_transform_runtime_helpers_false_polyfill_false_regenerator_true_moduleName_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_node_modules_babel_runtime_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_lib_uni_loader_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_lib_preprocessor_loader_js_type_js_context_APP_PLUS_true_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_lib_mpvue_loader_lib_selector_type_script_index_0_drag_right_zoom_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_lib_mpvue_loader_lib_template_compiler_index_id_data_v_7923544a_hasScoped_false_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_lib_preprocessor_loader_js_type_html_context_APP_PLUS_true_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_lib_mpvue_loader_lib_selector_type_template_index_0_drag_right_zoom_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ })

},[250]);