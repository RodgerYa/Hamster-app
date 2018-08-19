global.webpackJsonp([43],{

/***/ 157:
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
    staticClass: "page-section page-section-gap"
  }, [_c('view', {
    staticClass: "page-section-title"
  }, [_vm._v("表单组件在label内")]), _vm._v(" "), _c('checkbox-group', {
    staticClass: "group",
    attrs: {
      "eventid": '0',
      "mpcomid": '1'
    },
    on: {
      "change": _vm.checkboxChange
    }
  }, _vm._l((_vm.checkboxItems), function(item, index) {
    return _c('view', {
      key: item.name,
      staticClass: "label-1"
    }, [_c('label', [_c('checkbox', {
      attrs: {
        "value": item.name,
        "checked": item.checked
      }
    }), _vm._v(" "), _c('text', {
      staticClass: "label-1-text"
    }, [_vm._v(_vm._s(item.value))])], 1)], 1)
  }))], 1), _vm._v(" "), _c('view', {
    staticClass: "page-section page-section-gap"
  }, [_c('view', {
    staticClass: "page-section-title"
  }, [_vm._v("label用for标识表单组件")]), _vm._v(" "), _c('radio-group', {
    staticClass: "group",
    attrs: {
      "eventid": '1',
      "mpcomid": '2'
    },
    on: {
      "change": _vm.radioChange
    }
  }, _vm._l((_vm.radioItems), function(item, index) {
    return _c('view', {
      key: index,
      staticClass: "label-2"
    }, [_c('radio', {
      attrs: {
        "id": item.name,
        "value": item.name,
        "checked": item.checked
      }
    }), _vm._v(" "), _c('label', {
      staticClass: "label-2-text",
      attrs: {
        "for": item.name
      }
    }, [_c('text', [_vm._v(_vm._s(item.name))])])], 1)
  }))], 1), _vm._v(" "), _c('view', {
    staticClass: "page-section page-section-gap"
  }, [_c('view', {
    staticClass: "page-section-title"
  }, [_vm._v("label内有多个时选中第一个")]), _vm._v(" "), _c('label', {
    staticClass: "label-3"
  }, [_c('checkbox', {
    staticClass: "checkbox-3"
  }, [_vm._v("选项一")]), _vm._v(" "), _c('checkbox', {
    staticClass: "checkbox-3"
  }, [_vm._v("选项二")]), _vm._v(" "), _c('view', {
    staticClass: "label-3-text"
  }, [_vm._v("点击该label下的文字默认选中第一个checkbox")])], 1)], 1)])], 1)
}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ 227:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

var _vue = __webpack_require__(1);var _vue2 = _interopRequireDefault(_vue);
var _label = __webpack_require__(50);var _label2 = _interopRequireDefault(_label);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}var uni = __webpack_require__(0).default;
var app = new _vue2.default(_label2.default);
app.$mount();exports.default =

{
	config: { "navigationBarTitleText": "label" } };

/***/ }),

/***/ 316:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });







































var _pageHead = __webpack_require__(3);var _pageHead2 = _interopRequireDefault(_pageHead);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}var uni = __webpack_require__(0).default;exports.default =

{
	data: function data() {
		return {
			title: 'label',
			checkboxItems: [{
				name: 'USA',
				value: '美国' },

			{
				name: 'CHN',
				value: '中国',
				checked: 'true' }],


			radioItems: [{
				name: 'USA',
				value: '美国' },

			{
				name: 'CHN',
				value: '中国',
				checked: 'true' }],


			hidden: false };

	},
	methods: {
		checkboxChange: function checkboxChange(e) {
			var checked = e.target.value;
			var changed = {};
			for (var i = 0; i < this.checkboxItems.length; i++) {
				if (checked.indexOf(this.checkboxItems[i].name) !== -1) {
					changed['checkboxItems[' + i + '].checked'] = true;
				} else {
					changed['checkboxItems[' + i + '].checked'] = false;
				}
			}
		},
		radioChange: function radioChange(e) {
			var checked = e.target.value;
			var changed = {};
			for (var i = 0; i < this.radioItems.length; i++) {
				if (checked.indexOf(this.radioItems[i].name) !== -1) {
					changed['radioItems[' + i + '].checked'] = true;
				} else {
					changed['radioItems[' + i + '].checked'] = false;
				}
			}
		},
		tapEvent: function tapEvent(e) {
			console.log('按钮被点击');
		} },

	components: {
		pageHead: _pageHead2.default } };

/***/ }),

/***/ 420:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 50:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_node_modules_babel_loader_babelrc_false_retainLines_true_presets_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_node_modules_babel_preset_env_modules_commonjs_targets_browsers_1_last_2_versions_not_ie_8_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_node_modules_babel_preset_stage_2_plugins_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_node_modules_babel_plugin_transform_runtime_helpers_false_polyfill_false_regenerator_true_moduleName_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_node_modules_babel_runtime_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_lib_uni_loader_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_lib_preprocessor_loader_js_type_js_context_APP_PLUS_true_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_lib_mpvue_loader_lib_selector_type_script_index_0_label_vue__ = __webpack_require__(316);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_node_modules_babel_loader_babelrc_false_retainLines_true_presets_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_node_modules_babel_preset_env_modules_commonjs_targets_browsers_1_last_2_versions_not_ie_8_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_node_modules_babel_preset_stage_2_plugins_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_node_modules_babel_plugin_transform_runtime_helpers_false_polyfill_false_regenerator_true_moduleName_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_node_modules_babel_runtime_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_lib_uni_loader_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_lib_preprocessor_loader_js_type_js_context_APP_PLUS_true_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_lib_mpvue_loader_lib_selector_type_script_index_0_label_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_node_modules_babel_loader_babelrc_false_retainLines_true_presets_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_node_modules_babel_preset_env_modules_commonjs_targets_browsers_1_last_2_versions_not_ie_8_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_node_modules_babel_preset_stage_2_plugins_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_node_modules_babel_plugin_transform_runtime_helpers_false_polyfill_false_regenerator_true_moduleName_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_node_modules_babel_runtime_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_lib_uni_loader_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_lib_preprocessor_loader_js_type_js_context_APP_PLUS_true_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_lib_mpvue_loader_lib_selector_type_script_index_0_label_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_lib_mpvue_loader_lib_template_compiler_index_id_data_v_6cd7d083_hasScoped_false_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_lib_preprocessor_loader_js_type_html_context_APP_PLUS_true_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_lib_mpvue_loader_lib_selector_type_template_index_0_label_vue__ = __webpack_require__(157);
function injectStyle (ssrContext) {
  __webpack_require__(420)
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
  __WEBPACK_IMPORTED_MODULE_0__Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_node_modules_babel_loader_babelrc_false_retainLines_true_presets_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_node_modules_babel_preset_env_modules_commonjs_targets_browsers_1_last_2_versions_not_ie_8_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_node_modules_babel_preset_stage_2_plugins_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_node_modules_babel_plugin_transform_runtime_helpers_false_polyfill_false_regenerator_true_moduleName_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_node_modules_babel_runtime_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_lib_uni_loader_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_lib_preprocessor_loader_js_type_js_context_APP_PLUS_true_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_lib_mpvue_loader_lib_selector_type_script_index_0_label_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_lib_mpvue_loader_lib_template_compiler_index_id_data_v_6cd7d083_hasScoped_false_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_lib_preprocessor_loader_js_type_html_context_APP_PLUS_true_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_lib_mpvue_loader_lib_selector_type_template_index_0_label_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ })

},[227]);