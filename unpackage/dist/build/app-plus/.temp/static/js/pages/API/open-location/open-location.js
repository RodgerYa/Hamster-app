global.webpackJsonp([64],{

/***/ 145:
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
  }, [_c('form', {
    attrs: {
      "eventid": '0'
    },
    on: {
      "submit": _vm.openLocation
    }
  }, [_c('view', {
    staticClass: "uni-list"
  }, [_c('view', {
    staticClass: "uni-list-cell"
  }, [_c('view', {
    staticClass: "uni-list-cell-left"
  }, [_c('view', {
    staticClass: "uni-label"
  }, [_vm._v("经度")])]), _vm._v(" "), _c('view', {
    staticClass: "uni-list-cell-db"
  }, [_c('input', {
    staticClass: "uni-input",
    attrs: {
      "type": "text",
      "disabled": true,
      "value": "116.39742",
      "name": "longitude"
    }
  })])]), _vm._v(" "), _c('view', {
    staticClass: "uni-list-cell"
  }, [_c('view', {
    staticClass: "uni-list-cell-left"
  }, [_c('view', {
    staticClass: "uni-label"
  }, [_vm._v("纬度")])]), _vm._v(" "), _c('view', {
    staticClass: "uni-list-cell-db"
  }, [_c('input', {
    staticClass: "uni-input",
    attrs: {
      "type": "text",
      "disabled": true,
      "value": "39.909",
      "name": "latitude"
    }
  })])]), _vm._v(" "), _c('view', {
    staticClass: "uni-list-cell"
  }, [_c('view', {
    staticClass: "uni-list-cell-left"
  }, [_c('view', {
    staticClass: "uni-label"
  }, [_vm._v("位置名称")])]), _vm._v(" "), _c('view', {
    staticClass: "uni-list-cell-db"
  }, [_c('input', {
    staticClass: "uni-input",
    attrs: {
      "type": "text",
      "disabled": true,
      "value": "天安门",
      "name": "name"
    }
  })])]), _vm._v(" "), _c('view', {
    staticClass: "uni-list-cell"
  }, [_c('view', {
    staticClass: "uni-list-cell-left"
  }, [_c('view', {
    staticClass: "uni-label"
  }, [_vm._v("详细位置")])]), _vm._v(" "), _c('view', {
    staticClass: "uni-list-cell-db"
  }, [_c('input', {
    staticClass: "uni-input",
    attrs: {
      "type": "text",
      "disabled": true,
      "value": "北京市东城区东长安街",
      "name": "address"
    }
  })])])]), _vm._v(" "), _c('view', {
    staticClass: "btn-area"
  }, [_c('button', {
    attrs: {
      "type": "primary",
      "formType": "submit"
    }
  }, [_vm._v("查看位置")])], 1)])], 1)])], 1)
}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ 206:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

var _vue = __webpack_require__(1);var _vue2 = _interopRequireDefault(_vue);
var _openLocation = __webpack_require__(29);var _openLocation2 = _interopRequireDefault(_openLocation);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}var uni = __webpack_require__(0).default;
var app = new _vue2.default(_openLocation2.default);
app.$mount();exports.default =

{
	config: { "navigationBarTitleText": "查看位置" } };

/***/ }),

/***/ 29:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_node_modules_babel_loader_babelrc_false_retainLines_true_presets_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_node_modules_babel_preset_env_modules_commonjs_targets_browsers_1_last_2_versions_not_ie_8_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_node_modules_babel_preset_stage_2_plugins_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_node_modules_babel_plugin_transform_runtime_helpers_false_polyfill_false_regenerator_true_moduleName_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_node_modules_babel_runtime_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_lib_uni_loader_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_lib_preprocessor_loader_js_type_js_context_APP_PLUS_true_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_lib_mpvue_loader_lib_selector_type_script_index_0_open_location_vue__ = __webpack_require__(295);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_node_modules_babel_loader_babelrc_false_retainLines_true_presets_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_node_modules_babel_preset_env_modules_commonjs_targets_browsers_1_last_2_versions_not_ie_8_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_node_modules_babel_preset_stage_2_plugins_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_node_modules_babel_plugin_transform_runtime_helpers_false_polyfill_false_regenerator_true_moduleName_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_node_modules_babel_runtime_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_lib_uni_loader_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_lib_preprocessor_loader_js_type_js_context_APP_PLUS_true_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_lib_mpvue_loader_lib_selector_type_script_index_0_open_location_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_node_modules_babel_loader_babelrc_false_retainLines_true_presets_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_node_modules_babel_preset_env_modules_commonjs_targets_browsers_1_last_2_versions_not_ie_8_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_node_modules_babel_preset_stage_2_plugins_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_node_modules_babel_plugin_transform_runtime_helpers_false_polyfill_false_regenerator_true_moduleName_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_node_modules_babel_runtime_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_lib_uni_loader_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_lib_preprocessor_loader_js_type_js_context_APP_PLUS_true_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_lib_mpvue_loader_lib_selector_type_script_index_0_open_location_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_lib_mpvue_loader_lib_template_compiler_index_id_data_v_5d875e48_hasScoped_false_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_lib_preprocessor_loader_js_type_html_context_APP_PLUS_true_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_lib_mpvue_loader_lib_selector_type_template_index_0_open_location_vue__ = __webpack_require__(145);
function injectStyle (ssrContext) {
  __webpack_require__(408)
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
  __WEBPACK_IMPORTED_MODULE_0__Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_node_modules_babel_loader_babelrc_false_retainLines_true_presets_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_node_modules_babel_preset_env_modules_commonjs_targets_browsers_1_last_2_versions_not_ie_8_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_node_modules_babel_preset_stage_2_plugins_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_node_modules_babel_plugin_transform_runtime_helpers_false_polyfill_false_regenerator_true_moduleName_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_node_modules_babel_runtime_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_lib_uni_loader_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_lib_preprocessor_loader_js_type_js_context_APP_PLUS_true_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_lib_mpvue_loader_lib_selector_type_script_index_0_open_location_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_lib_mpvue_loader_lib_template_compiler_index_id_data_v_5d875e48_hasScoped_false_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_lib_preprocessor_loader_js_type_html_context_APP_PLUS_true_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_lib_mpvue_loader_lib_selector_type_template_index_0_open_location_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 295:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
















































var _pageHead = __webpack_require__(3);var _pageHead2 = _interopRequireDefault(_pageHead);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}var uni = __webpack_require__(0).default;exports.default =

{
	data: function data() {
		return {
			title: 'openLocation' };

	},
	methods: {
		openLocation: function openLocation(e) {
			console.log(e);
			var value = e.target.value;
			uni.openLocation({
				longitude: Number(value.longitude),
				latitude: Number(value.latitude),
				name: value.name,
				address: value.address });

		} },

	components: {
		pageHead: _pageHead2.default } };

/***/ }),

/***/ 408:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })

},[206]);