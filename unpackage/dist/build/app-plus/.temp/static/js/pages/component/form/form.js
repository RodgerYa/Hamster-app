global.webpackJsonp([47],{

/***/ 223:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

var _vue = __webpack_require__(1);var _vue2 = _interopRequireDefault(_vue);
var _form = __webpack_require__(46);var _form2 = _interopRequireDefault(_form);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}var uni = __webpack_require__(0).default;
var app = new _vue2.default(_form2.default);
app.$mount();exports.default =

{
	config: { "navigationBarTitleText": "form" } };

/***/ }),

/***/ 312:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });




















































var _pageHead = __webpack_require__(3);var _pageHead2 = _interopRequireDefault(_pageHead);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}var uni = __webpack_require__(0).default;exports.default =

{
	data: function data() {
		return {
			title: 'form',
			pickerHidden: true,
			chosen: '' };

	},
	methods: {
		pickerConfirm: function pickerConfirm(e) {
			this.pickerHidden = true;
			this.chosen = e.target.value;
		},
		pickerCancel: function pickerCancel(e) {
			this.pickerHidden = true;
		},
		pickerShow: function pickerShow(e) {
			this.pickerHidden = false;
		},
		formSubmit: function formSubmit(e) {
			console.log('form发生了submit事件，携带数据为：' + JSON.stringify(e.detail.value));
		},
		formReset: function formReset(e) {
			console.log("清空数据");
			this.chosen = '';
		} },

	components: {
		pageHead: _pageHead2.default } };

/***/ }),

/***/ 359:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 46:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_node_modules_babel_loader_babelrc_false_retainLines_true_presets_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_node_modules_babel_preset_env_modules_commonjs_targets_browsers_1_last_2_versions_not_ie_8_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_node_modules_babel_preset_stage_2_plugins_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_node_modules_babel_plugin_transform_runtime_helpers_false_polyfill_false_regenerator_true_moduleName_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_node_modules_babel_runtime_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_lib_uni_loader_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_lib_preprocessor_loader_js_type_js_context_APP_PLUS_true_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_lib_mpvue_loader_lib_selector_type_script_index_0_form_vue__ = __webpack_require__(312);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_node_modules_babel_loader_babelrc_false_retainLines_true_presets_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_node_modules_babel_preset_env_modules_commonjs_targets_browsers_1_last_2_versions_not_ie_8_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_node_modules_babel_preset_stage_2_plugins_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_node_modules_babel_plugin_transform_runtime_helpers_false_polyfill_false_regenerator_true_moduleName_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_node_modules_babel_runtime_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_lib_uni_loader_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_lib_preprocessor_loader_js_type_js_context_APP_PLUS_true_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_lib_mpvue_loader_lib_selector_type_script_index_0_form_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_node_modules_babel_loader_babelrc_false_retainLines_true_presets_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_node_modules_babel_preset_env_modules_commonjs_targets_browsers_1_last_2_versions_not_ie_8_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_node_modules_babel_preset_stage_2_plugins_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_node_modules_babel_plugin_transform_runtime_helpers_false_polyfill_false_regenerator_true_moduleName_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_node_modules_babel_runtime_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_lib_uni_loader_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_lib_preprocessor_loader_js_type_js_context_APP_PLUS_true_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_lib_mpvue_loader_lib_selector_type_script_index_0_form_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_lib_mpvue_loader_lib_template_compiler_index_id_data_v_023ab119_hasScoped_false_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_lib_preprocessor_loader_js_type_html_context_APP_PLUS_true_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_lib_mpvue_loader_lib_selector_type_template_index_0_form_vue__ = __webpack_require__(96);
function injectStyle (ssrContext) {
  __webpack_require__(359)
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
  __WEBPACK_IMPORTED_MODULE_0__Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_node_modules_babel_loader_babelrc_false_retainLines_true_presets_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_node_modules_babel_preset_env_modules_commonjs_targets_browsers_1_last_2_versions_not_ie_8_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_node_modules_babel_preset_stage_2_plugins_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_node_modules_babel_plugin_transform_runtime_helpers_false_polyfill_false_regenerator_true_moduleName_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_node_modules_babel_runtime_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_lib_uni_loader_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_lib_preprocessor_loader_js_type_js_context_APP_PLUS_true_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_lib_mpvue_loader_lib_selector_type_script_index_0_form_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_lib_mpvue_loader_lib_template_compiler_index_id_data_v_023ab119_hasScoped_false_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_lib_preprocessor_loader_js_type_html_context_APP_PLUS_true_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_lib_mpvue_loader_lib_selector_type_template_index_0_form_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 96:
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
  }, [_c('form', {
    attrs: {
      "eventid": '0'
    },
    on: {
      "submit": _vm.formSubmit,
      "reset": _vm.formReset
    }
  }, [_c('view', {
    staticClass: "page-section page-section-gap"
  }, [_c('view', {
    staticClass: "page-section-title"
  }, [_vm._v("switch")]), _vm._v(" "), _c('switch', {
    attrs: {
      "name": "switch"
    }
  })]), _vm._v(" "), _c('view', {
    staticClass: "page-section page-section-gap"
  }, [_c('view', {
    staticClass: "page-section-title"
  }, [_vm._v("radio")]), _vm._v(" "), _c('radio-group', {
    staticClass: "uni-flex",
    attrs: {
      "name": "radio",
      "mpcomid": '1'
    }
  }, [_c('label', [_c('radio', {
    attrs: {
      "value": "radio1"
    }
  }), _vm._v("选项一")], 1), _vm._v(" "), _c('label', [_c('radio', {
    attrs: {
      "value": "radio2"
    }
  }), _vm._v("选项二")], 1)], 1)], 1), _vm._v(" "), _c('view', {
    staticClass: "page-section page-section-gap"
  }, [_c('view', {
    staticClass: "page-section-title"
  }, [_vm._v("checkbox")]), _vm._v(" "), _c('checkbox-group', {
    staticClass: "uni-flex",
    attrs: {
      "name": "checkbox",
      "mpcomid": '2'
    }
  }, [_c('label', [_c('checkbox', {
    attrs: {
      "value": "checkbox1"
    }
  }), _vm._v("选项一")], 1), _vm._v(" "), _c('label', [_c('checkbox', {
    attrs: {
      "value": "checkbox2"
    }
  }), _vm._v("选项二")], 1)], 1)], 1), _vm._v(" "), _c('view', {
    staticClass: "page-section page-section-gap"
  }, [_c('view', {
    staticClass: "page-section-title"
  }, [_vm._v("slider")]), _vm._v(" "), _c('slider', {
    attrs: {
      "value": "50",
      "name": "slider",
      "show-value": ""
    }
  })]), _vm._v(" "), _c('view', {
    staticClass: "page-section"
  }, [_c('view', {
    staticClass: "page-section-title"
  }, [_vm._v("input")]), _vm._v(" "), _c('view', {
    staticClass: "uni-list"
  }, [_c('view', {
    staticClass: "uni-list-cell"
  }, [_c('input', {
    staticClass: "uni-input",
    attrs: {
      "name": "input",
      "placeholder": "这是一个输入框"
    }
  })])])]), _vm._v(" "), _c('view', {
    staticClass: "btn-area"
  }, [_c('button', {
    staticClass: "btn-submit",
    attrs: {
      "formType": "submit"
    }
  }, [_vm._v("Submit")]), _vm._v(" "), _c('button', {
    attrs: {
      "type": "default",
      "formType": "reset"
    }
  }, [_vm._v("Reset")])], 1)])], 1)], 1)
}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ })

},[223]);