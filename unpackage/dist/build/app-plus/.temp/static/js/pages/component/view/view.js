global.webpackJsonp([27],{

/***/ 129:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('view', [_c('page-head', {
    attrs: {
      "title": _vm.title,
      "mpcomid": '0'
    }
  }), _vm._v(" "), _vm._m(0)], 1)
}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('view', {
    staticClass: "page-body"
  }, [_c('view', {
    staticClass: "page-section"
  }, [_c('view', {
    staticClass: "page-section-title"
  }, [_c('text', [_vm._v("\n\t\t\t\t\tFlex是Flexible Box的缩写，意为“弹性布局”，用来为盒状模型提供最大的灵活性。当设置display: flex后，继续给view等容器组件设置flex-direction: row或column，就可以在该容器内按行或列排布子组件。uni-app默认全局使用flex布局(在App.vue里预设了)。因为flex布局有利于跨更多平台，尤其是采用原生渲染的平台。\n\t\t\t\t")])])]), _vm._v(" "), _c('view', {
    staticClass: "page-section"
  }, [_c('view', {
    staticClass: "page-section-title"
  }, [_c('text', [_vm._v("flex-direction: row\\n横向布局")])]), _vm._v(" "), _c('view', {
    staticClass: "page-section-spacing"
  }, [_c('view', {
    staticClass: "uni-flex uni-row",
    staticStyle: {
      "margin-top": "60px"
    }
  }, [_c('view', {
    staticClass: "flex-item color1"
  }, [_vm._v("A")]), _vm._v(" "), _c('view', {
    staticClass: "flex-item color2"
  }, [_vm._v("B")]), _vm._v(" "), _c('view', {
    staticClass: "flex-item color3"
  }, [_vm._v("C")])])])]), _vm._v(" "), _c('view', {
    staticClass: "page-section"
  }, [_c('view', {
    staticClass: "page-section-title"
  }, [_c('text', [_vm._v("flex-direction: column\\n纵向布局")])]), _vm._v(" "), _c('view', {
    staticClass: "uni-flex uni-column",
    staticStyle: {
      "margin-top": "60px"
    }
  }, [_c('view', {
    staticClass: "flex-item flex-item-V color1"
  }, [_vm._v("A")]), _vm._v(" "), _c('view', {
    staticClass: "flex-item flex-item-V color2"
  }, [_vm._v("B")]), _vm._v(" "), _c('view', {
    staticClass: "flex-item flex-item-V color3"
  }, [_vm._v("C")])])]), _vm._v(" "), _c('view', {
    staticClass: "page-section"
  }, [_c('view', {
    staticClass: "page-section-title"
  }, [_c('text', [_vm._v("更多布局示例")])]), _vm._v(" "), _c('view', {
    staticClass: "text"
  }, [_vm._v("纵向布局-自动宽度")]), _vm._v(" "), _c('view', {
    staticClass: "text",
    staticStyle: {
      "width": "300px"
    }
  }, [_vm._v("纵向布局-固定宽度")]), _vm._v(" "), _c('view', {
    staticClass: "uni-flex uni-row"
  }, [_c('view', {
    staticClass: "text"
  }, [_vm._v("横向布局-自动宽度")]), _vm._v(" "), _c('view', {
    staticClass: "text"
  }, [_vm._v("横向布局-自动宽度")])]), _vm._v(" "), _c('view', {
    staticClass: "uni-flex uni-row",
    staticStyle: {
      "justify-content": "center"
    }
  }, [_c('view', {
    staticClass: "text"
  }, [_vm._v("横向布局-居中")]), _vm._v(" "), _c('view', {
    staticClass: "text"
  }, [_vm._v("横向布局-居中")])]), _vm._v(" "), _c('view', {
    staticClass: "uni-flex uni-row",
    staticStyle: {
      "justify-content": "flex-end"
    }
  }, [_c('view', {
    staticClass: "text"
  }, [_vm._v("横向布局-居右")]), _vm._v(" "), _c('view', {
    staticClass: "text"
  }, [_vm._v("横向布局-居右")])]), _vm._v(" "), _c('view', {
    staticClass: "uni-flex uni-row"
  }, [_c('view', {
    staticClass: "text",
    staticStyle: {
      "flex": "1"
    }
  }, [_vm._v("横向布局-平均分布")]), _vm._v(" "), _c('view', {
    staticClass: "text",
    staticStyle: {
      "flex": "1"
    }
  }, [_vm._v("横向布局-平均分布")])]), _vm._v(" "), _c('view', {
    staticClass: "uni-flex uni-row",
    staticStyle: {
      "justify-content": "space-between"
    }
  }, [_c('view', {
    staticClass: "text"
  }, [_vm._v("横向布局-两端对齐")]), _vm._v(" "), _c('view', {
    staticClass: "text"
  }, [_vm._v("横向布局-两端对齐")])]), _vm._v(" "), _c('view', {
    staticClass: "uni-flex uni-row"
  }, [_c('view', {
    staticClass: "text",
    staticStyle: {
      "width": "200px"
    }
  }, [_vm._v("固定宽度")]), _vm._v(" "), _c('view', {
    staticClass: "text",
    staticStyle: {
      "flex": "1"
    }
  }, [_vm._v("自动占满余量")])]), _vm._v(" "), _c('view', {
    staticClass: "uni-flex uni-row"
  }, [_c('view', {
    staticClass: "text",
    staticStyle: {
      "width": "200px"
    }
  }, [_vm._v("固定宽度")]), _vm._v(" "), _c('view', {
    staticClass: "text",
    staticStyle: {
      "flex": "1"
    }
  }, [_vm._v("自动占满")]), _vm._v(" "), _c('view', {
    staticClass: "text",
    staticStyle: {
      "width": "200px"
    }
  }, [_vm._v("固定宽度")])]), _vm._v(" "), _c('view', {
    staticClass: "uni-flex uni-row",
    staticStyle: {
      "flex-wrap": "wrap"
    }
  }, [_c('view', {
    staticClass: "text",
    staticStyle: {
      "width": "280px"
    }
  }, [_vm._v("一行显示不全,wrap折行")]), _vm._v(" "), _c('view', {
    staticClass: "text",
    staticStyle: {
      "width": "280px"
    }
  }, [_vm._v("一行显示不全,wrap折行")]), _vm._v(" "), _c('view', {
    staticClass: "text",
    staticStyle: {
      "width": "280px"
    }
  }, [_vm._v("一行显示不全,wrap折行")])]), _vm._v(" "), _c('view', {
    staticClass: "uni-flex uni-row"
  }, [_c('view', {
    staticClass: "text",
    staticStyle: {
      "flex": "1",
      "height": "200px",
      "display": "flex",
      "justify-content": "center",
      "align-items": "flex-start"
    }
  }, [_c('text', [_vm._v("垂直居顶")])]), _vm._v(" "), _c('view', {
    staticClass: "text",
    staticStyle: {
      "flex": "1",
      "height": "200px",
      "display": "flex",
      "justify-content": "center",
      "align-items": "center"
    }
  }, [_c('text', [_vm._v("垂直居中")])]), _vm._v(" "), _c('view', {
    staticClass: "text",
    staticStyle: {
      "flex": "1",
      "height": "200px",
      "display": "flex",
      "justify-content": "center",
      "align-items": "flex-end"
    }
  }, [_c('text', [_vm._v("垂直居底")])])])]), _vm._v(" "), _c('view', {
    staticClass: "page-section"
  }, [_c('view', {
    staticClass: "page-section-title"
  }, [_c('text', [_vm._v("组合示例：")])]), _vm._v(" "), _c('view', {
    staticClass: "uni-flex uni-row"
  }, [_c('view', {
    staticClass: "text",
    staticStyle: {
      "width": "200px",
      "height": "220px",
      "display": "flex",
      "justify-content": "center",
      "align-items": "center"
    }
  }, [_c('image', {
    staticStyle: {
      "width": "150px",
      "height": "150px"
    },
    attrs: {
      "src": "../../../static/plus.png"
    }
  })]), _vm._v(" "), _c('view', {
    staticClass: "uni-flex uni-column",
    staticStyle: {
      "flex": "1",
      "justify-content": "space-between"
    }
  }, [_c('view', {
    staticClass: "text",
    staticStyle: {
      "height": "120px",
      "text-align": "left",
      "padding-left": "20px",
      "padding-top": "10px"
    }
  }, [_vm._v("\n\t\t\t\t\t\t文字居左，留出左间距\n\t\t\t\t\t")]), _vm._v(" "), _c('view', {
    staticClass: "uni-flex uni-row"
  }, [_c('view', {
    staticClass: "text",
    staticStyle: {
      "flex": "1"
    }
  }, [_vm._v("剩余数量")]), _vm._v(" "), _c('view', {
    staticClass: "text",
    staticStyle: {
      "flex": "1"
    }
  }, [_vm._v("立即购买")])])])])])])
}]
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ 243:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

var _vue = __webpack_require__(1);var _vue2 = _interopRequireDefault(_vue);
var _view = __webpack_require__(66);var _view2 = _interopRequireDefault(_view);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}var uni = __webpack_require__(0).default;
var app = new _vue2.default(_view2.default);
app.$mount();exports.default =

{
	config: { "navigationBarTitleText": "view" } };

/***/ }),

/***/ 332:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });












































































































var _pageHead = __webpack_require__(3);var _pageHead2 = _interopRequireDefault(_pageHead);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}var uni = __webpack_require__(0).default;exports.default =

{
	data: function data() {
		return {
			title: 'view' };

	},
	components: {
		pageHead: _pageHead2.default } };

/***/ }),

/***/ 392:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 66:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_node_modules_babel_loader_babelrc_false_retainLines_true_presets_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_node_modules_babel_preset_env_modules_commonjs_targets_browsers_1_last_2_versions_not_ie_8_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_node_modules_babel_preset_stage_2_plugins_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_node_modules_babel_plugin_transform_runtime_helpers_false_polyfill_false_regenerator_true_moduleName_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_node_modules_babel_runtime_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_lib_uni_loader_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_lib_preprocessor_loader_js_type_js_context_APP_PLUS_true_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_lib_mpvue_loader_lib_selector_type_script_index_0_view_vue__ = __webpack_require__(332);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_node_modules_babel_loader_babelrc_false_retainLines_true_presets_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_node_modules_babel_preset_env_modules_commonjs_targets_browsers_1_last_2_versions_not_ie_8_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_node_modules_babel_preset_stage_2_plugins_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_node_modules_babel_plugin_transform_runtime_helpers_false_polyfill_false_regenerator_true_moduleName_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_node_modules_babel_runtime_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_lib_uni_loader_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_lib_preprocessor_loader_js_type_js_context_APP_PLUS_true_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_lib_mpvue_loader_lib_selector_type_script_index_0_view_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_node_modules_babel_loader_babelrc_false_retainLines_true_presets_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_node_modules_babel_preset_env_modules_commonjs_targets_browsers_1_last_2_versions_not_ie_8_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_node_modules_babel_preset_stage_2_plugins_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_node_modules_babel_plugin_transform_runtime_helpers_false_polyfill_false_regenerator_true_moduleName_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_node_modules_babel_runtime_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_lib_uni_loader_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_lib_preprocessor_loader_js_type_js_context_APP_PLUS_true_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_lib_mpvue_loader_lib_selector_type_script_index_0_view_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_lib_mpvue_loader_lib_template_compiler_index_id_data_v_3ae4348e_hasScoped_false_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_lib_preprocessor_loader_js_type_html_context_APP_PLUS_true_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_lib_mpvue_loader_lib_selector_type_template_index_0_view_vue__ = __webpack_require__(129);
function injectStyle (ssrContext) {
  __webpack_require__(392)
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
  __WEBPACK_IMPORTED_MODULE_0__Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_node_modules_babel_loader_babelrc_false_retainLines_true_presets_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_node_modules_babel_preset_env_modules_commonjs_targets_browsers_1_last_2_versions_not_ie_8_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_node_modules_babel_preset_stage_2_plugins_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_node_modules_babel_plugin_transform_runtime_helpers_false_polyfill_false_regenerator_true_moduleName_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_node_modules_babel_runtime_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_lib_uni_loader_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_lib_preprocessor_loader_js_type_js_context_APP_PLUS_true_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_lib_mpvue_loader_lib_selector_type_script_index_0_view_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_lib_mpvue_loader_lib_template_compiler_index_id_data_v_3ae4348e_hasScoped_false_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_lib_preprocessor_loader_js_type_html_context_APP_PLUS_true_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_lib_mpvue_loader_lib_selector_type_template_index_0_view_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ })

},[243]);