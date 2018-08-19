global.webpackJsonp([44],{

/***/ 180:
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
  }, [_vm._m(0), _vm._v(" "), _c('view', {
    staticClass: "page-section"
  }, [_c('view', {
    staticClass: "page-section-title"
  }, [_vm._v("实时获取输入值：" + _vm._s(_vm.inputValue))]), _vm._v(" "), _c('view', {
    staticClass: "uni-list"
  }, [_c('view', {
    staticClass: "uni-list-cell"
  }, [_c('input', {
    staticClass: "uni-input",
    attrs: {
      "maxlength": "10",
      "placeholder": "输入同步到view中",
      "eventid": '0'
    },
    on: {
      "input": _vm.bindKeyInput
    }
  })])])]), _vm._v(" "), _c('view', {
    staticClass: "page-section"
  }, [_c('view', {
    staticClass: "page-section-title"
  }, [_vm._v("控制输入的input")]), _vm._v(" "), _c('view', {
    staticClass: "uni-list"
  }, [_c('view', {
    staticClass: "uni-list-cell"
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.changeValue),
      expression: "changeValue"
    }],
    staticClass: "uni-input",
    attrs: {
      "placeholder": "连续的两个1会变成2",
      "eventid": '1'
    },
    domProps: {
      "value": (_vm.changeValue)
    },
    on: {
      "input": [function($event) {
        if ($event.target.composing) { return; }
        _vm.changeValue = $event.target.value
      }, _vm.bindReplaceInput]
    }
  })])])]), _vm._v(" "), _c('view', {
    staticClass: "page-section"
  }, [_c('view', {
    staticClass: "page-section-title"
  }, [_vm._v("控制键盘的input")]), _vm._v(" "), _c('view', {
    staticClass: "uni-list"
  }, [_c('view', {
    staticClass: "uni-list-cell"
  }, [_c('input', {
    ref: "input1",
    staticClass: "uni-input",
    attrs: {
      "placeholder": "输入123自动收起键盘",
      "eventid": '2'
    },
    on: {
      "input": _vm.bindHideKeyboard
    }
  })])])]), _vm._v(" "), _vm._m(1), _vm._v(" "), _vm._m(2), _vm._v(" "), _vm._m(3), _vm._v(" "), _vm._m(4), _vm._v(" "), _vm._m(5), _vm._v(" "), _c('view', {
    staticClass: "page-section"
  }, [_c('view', {
    staticClass: "page-section-title"
  }, [_vm._v("带清除按钮的输入框")]), _vm._v(" "), _c('view', {
    staticClass: "uni-list"
  }, [_c('view', {
    staticClass: "uni-list-cell"
  }, [_c('input', {
    staticClass: "uni-input",
    attrs: {
      "placeholder": "带清除按钮的输入框",
      "value": _vm.inputClearValue,
      "eventid": '3'
    },
    on: {
      "input": _vm.bindClearInput
    }
  }), _vm._v(" "), (_vm.showClearIcon) ? _c('view', {
    staticClass: "uni-icon uni-icon-clear",
    attrs: {
      "eventid": '4'
    },
    on: {
      "click": _vm.clearIcon
    }
  }) : _vm._e()])])]), _vm._v(" "), _c('view', {
    staticClass: "page-section"
  }, [_c('view', {
    staticClass: "page-section-title"
  }, [_vm._v("可查看密码的输入框")]), _vm._v(" "), _c('view', {
    staticClass: "uni-list"
  }, [_c('view', {
    staticClass: "uni-list-cell"
  }, [_c('input', {
    staticClass: "uni-input",
    attrs: {
      "placeholder": "请输入密码",
      "password": _vm.showPassword
    }
  }), _vm._v(" "), _c('view', {
    staticClass: "uni-icon uni-icon-eye",
    class: [!_vm.showPassword ? 'uni-active' : ''],
    attrs: {
      "eventid": '5'
    },
    on: {
      "click": _vm.changePassword
    }
  })])])])])], 1)
}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('view', {
    staticClass: "page-section"
  }, [_c('view', {
    staticClass: "page-section-title"
  }, [_vm._v("控制最大输入长度的input")]), _vm._v(" "), _c('view', {
    staticClass: "uni-list"
  }, [_c('view', {
    staticClass: "uni-list-cell"
  }, [_c('input', {
    staticClass: "uni-input",
    attrs: {
      "maxlength": "10",
      "placeholder": "最大输入长度为10"
    }
  })])])])
},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('view', {
    staticClass: "page-section"
  }, [_c('view', {
    staticClass: "page-section-title"
  }, [_vm._v("数字输入的input")]), _vm._v(" "), _c('view', {
    staticClass: "uni-list"
  }, [_c('view', {
    staticClass: "uni-list-cell"
  }, [_c('input', {
    staticClass: "uni-input",
    attrs: {
      "type": "number",
      "placeholder": "这是一个数字输入框"
    }
  })])])])
},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('view', {
    staticClass: "page-section"
  }, [_c('view', {
    staticClass: "page-section-title"
  }, [_vm._v("密码输入的input")]), _vm._v(" "), _c('view', {
    staticClass: "uni-list"
  }, [_c('view', {
    staticClass: "uni-list-cell"
  }, [_c('input', {
    staticClass: "uni-input",
    attrs: {
      "password": "",
      "type": "text",
      "placeholder": "这是一个密码输入框"
    }
  })])])])
},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('view', {
    staticClass: "page-section"
  }, [_c('view', {
    staticClass: "page-section-title"
  }, [_vm._v("带小数点的input")]), _vm._v(" "), _c('view', {
    staticClass: "uni-list"
  }, [_c('view', {
    staticClass: "uni-list-cell"
  }, [_c('input', {
    staticClass: "uni-input",
    attrs: {
      "type": "digit",
      "placeholder": "带小数点的数字键盘"
    }
  })])])])
},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('view', {
    staticClass: "page-section"
  }, [_c('view', {
    staticClass: "page-section-title"
  }, [_vm._v("身份证输入的input")]), _vm._v(" "), _c('view', {
    staticClass: "uni-list"
  }, [_c('view', {
    staticClass: "uni-list-cell"
  }, [_c('input', {
    staticClass: "uni-input",
    attrs: {
      "type": "idcard",
      "placeholder": "身份证输入键盘"
    }
  })])])])
},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('view', {
    staticClass: "page-section"
  }, [_c('view', {
    staticClass: "page-section-title"
  }, [_vm._v("控制占位符颜色的input")]), _vm._v(" "), _c('view', {
    staticClass: "uni-list"
  }, [_c('view', {
    staticClass: "uni-list-cell"
  }, [_c('input', {
    staticClass: "uni-input",
    attrs: {
      "placeholder-style": "color:#F76260",
      "placeholder": "占位符字体是红色的"
    }
  })])])])
}]
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ 226:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

var _vue = __webpack_require__(1);var _vue2 = _interopRequireDefault(_vue);
var _input = __webpack_require__(49);var _input2 = _interopRequireDefault(_input);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}var uni = __webpack_require__(0).default;
var app = new _vue2.default(_input2.default);
app.$mount();exports.default =

{
	config: { "navigationBarTitleText": "input" } };

/***/ }),

/***/ 315:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

































































































var _pageHead = __webpack_require__(3);var _pageHead2 = _interopRequireDefault(_pageHead);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}var uni = __webpack_require__(0).default;exports.default =

{
	data: function data() {
		return {
			title: 'input',
			focus: false,
			inputValue: '',
			showClearIcon: false,
			inputClearValue: "",
			changeValue: "",
			showPassword: true,
			src: "../../../static/eye-1.png" };

	},
	methods: {
		bindKeyInput: function bindKeyInput(e) {
			this.inputValue = e.target.value;
		},
		bindReplaceInput: function bindReplaceInput(e) {
			var value = e.target.value;
			if (value === '11') {
				this.changeValue = "2";
			}
		},
		bindHideKeyboard: function bindHideKeyboard(e) {
			if (e.target.value === '123') {
				// 收起键盘
				uni.hideKeyboard();
			}
		},
		bindClearInput: function bindClearInput(e) {
			this.inputClearValue = e.target.value;
			if (e.target.value.length > 0) {
				this.showClearIcon = true;
			} else {
				this.showClearIcon = false;
			}
		},
		clearIcon: function clearIcon() {
			this.inputClearValue = "";
			this.showClearIcon = false;
		},
		changePassword: function changePassword() {
			this.showPassword = !this.showPassword;
		} },

	components: {
		pageHead: _pageHead2.default } };

/***/ }),

/***/ 444:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 49:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_node_modules_babel_loader_babelrc_false_retainLines_true_presets_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_node_modules_babel_preset_env_modules_commonjs_targets_browsers_1_last_2_versions_not_ie_8_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_node_modules_babel_preset_stage_2_plugins_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_node_modules_babel_plugin_transform_runtime_helpers_false_polyfill_false_regenerator_true_moduleName_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_node_modules_babel_runtime_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_lib_uni_loader_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_lib_preprocessor_loader_js_type_js_context_APP_PLUS_true_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_lib_mpvue_loader_lib_selector_type_script_index_0_input_vue__ = __webpack_require__(315);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_node_modules_babel_loader_babelrc_false_retainLines_true_presets_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_node_modules_babel_preset_env_modules_commonjs_targets_browsers_1_last_2_versions_not_ie_8_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_node_modules_babel_preset_stage_2_plugins_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_node_modules_babel_plugin_transform_runtime_helpers_false_polyfill_false_regenerator_true_moduleName_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_node_modules_babel_runtime_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_lib_uni_loader_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_lib_preprocessor_loader_js_type_js_context_APP_PLUS_true_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_lib_mpvue_loader_lib_selector_type_script_index_0_input_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_node_modules_babel_loader_babelrc_false_retainLines_true_presets_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_node_modules_babel_preset_env_modules_commonjs_targets_browsers_1_last_2_versions_not_ie_8_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_node_modules_babel_preset_stage_2_plugins_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_node_modules_babel_plugin_transform_runtime_helpers_false_polyfill_false_regenerator_true_moduleName_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_node_modules_babel_runtime_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_lib_uni_loader_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_lib_preprocessor_loader_js_type_js_context_APP_PLUS_true_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_lib_mpvue_loader_lib_selector_type_script_index_0_input_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_lib_mpvue_loader_lib_template_compiler_index_id_data_v_e22ad8a2_hasScoped_false_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_lib_preprocessor_loader_js_type_html_context_APP_PLUS_true_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_lib_mpvue_loader_lib_selector_type_template_index_0_input_vue__ = __webpack_require__(180);
function injectStyle (ssrContext) {
  __webpack_require__(444)
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
  __WEBPACK_IMPORTED_MODULE_0__Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_node_modules_babel_loader_babelrc_false_retainLines_true_presets_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_node_modules_babel_preset_env_modules_commonjs_targets_browsers_1_last_2_versions_not_ie_8_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_node_modules_babel_preset_stage_2_plugins_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_node_modules_babel_plugin_transform_runtime_helpers_false_polyfill_false_regenerator_true_moduleName_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_node_modules_babel_runtime_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_lib_uni_loader_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_lib_preprocessor_loader_js_type_js_context_APP_PLUS_true_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_lib_mpvue_loader_lib_selector_type_script_index_0_input_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_lib_mpvue_loader_lib_template_compiler_index_id_data_v_e22ad8a2_hasScoped_false_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_lib_preprocessor_loader_js_type_html_context_APP_PLUS_true_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_lib_mpvue_loader_lib_selector_type_template_index_0_input_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ })

},[226]);