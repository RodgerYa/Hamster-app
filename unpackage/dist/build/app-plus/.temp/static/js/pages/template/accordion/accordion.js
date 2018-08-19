global.webpackJsonp([25],{

/***/ 160:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('view', {
    staticClass: "page"
  }, [_c('page-head', {
    attrs: {
      "title": _vm.title,
      "mpcomid": '0'
    }
  }), _vm._v(" "), _c('view', {
    staticClass: "uni-card"
  }, [_c('view', {
    staticClass: "uni-list"
  }, _vm._l((_vm.lists), function(list, index) {
    return _c('block', {
      key: index
    }, [_c('view', {
      staticClass: "uni-list-cell uni-collapse"
    }, [_c('view', {
      staticClass: "uni-list-cell-navigate uni-navigate-bottom",
      class: list.show ? 'uni-active' : '',
      attrs: {
        "eventid": '0-' + index
      },
      on: {
        "click": function($event) {
          _vm.trigerCollapse(index)
        }
      }
    }, [_vm._v("\n\t\t\t\t\t\t" + _vm._s(list.title) + "\n\t\t\t\t\t")]), _vm._v(" "), _c('view', {
      staticClass: "uni-collapse-content",
      class: list.show ? 'uni-active' : ''
    }, [(list.type === 'swiper') ? _c('swiper', {
      staticStyle: {
        "height": "400px"
      },
      attrs: {
        "autoplay": "true",
        "indicator-dots": "true",
        "circular": "true"
      }
    }, _vm._l((_vm.imgUrls), function(img, key) {
      return _c('swiper-item', {
        key: key,
        attrs: {
          "mpcomid": '1-' + index + '-' + key
        }
      }, [_c('image', {
        staticStyle: {
          "height": "400px"
        },
        attrs: {
          "src": img
        }
      })])
    })) : _vm._e(), _vm._v(" "), (list.type === 'font') ? _c('view', {
      staticClass: "page-pd"
    }, [_c('view', {
      staticClass: "size-5"
    }, [_vm._v("hello uni-app")]), _vm._v(" "), _c('view', {
      staticClass: "size-4"
    }, [_vm._v("hello uni-app")]), _vm._v(" "), _c('view', {
      staticClass: "size-3"
    }, [_vm._v("hello uni-app")]), _vm._v(" "), _c('view', {
      staticClass: "size-2"
    }, [_vm._v("hello uni-app")]), _vm._v(" "), _c('view', {
      staticClass: "size-1"
    }, [_vm._v("hello uni-app")])]) : _vm._e(), _vm._v(" "), (list.type === 'list') ? _c('view', [_c('view', {
      staticClass: "uni-list"
    }, [_c('view', {
      staticClass: "uni-list-cell",
      attrs: {
        "hover-class": "uni-list-cell-hover"
      }
    }, [_c('view', {
      staticClass: "uni-list-cell-navigate uni-navigate-right"
    }, [_vm._v("hello uni-app")])]), _vm._v(" "), _c('view', {
      staticClass: "uni-list-cell",
      attrs: {
        "hover-class": "uni-list-cell-hover"
      }
    }, [_c('view', {
      staticClass: "uni-list-cell-navigate uni-navigate-right"
    }, [_vm._v("hello uni-app")])]), _vm._v(" "), _c('view', {
      staticClass: "uni-list-cell",
      attrs: {
        "hover-class": "uni-list-cell-hover"
      }
    }, [_c('view', {
      staticClass: "uni-list-cell-navigate uni-navigate-right"
    }, [_vm._v("hello uni-app")])])])]) : _vm._e()], 1)])])
  }))])], 1)
}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ 245:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

var _vue = __webpack_require__(1);var _vue2 = _interopRequireDefault(_vue);
var _accordion = __webpack_require__(68);var _accordion2 = _interopRequireDefault(_accordion);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}var uni = __webpack_require__(0).default;
var app = new _vue2.default(_accordion2.default);
app.$mount();exports.default =

{
	config: { "navigationBarTitleText": "折叠面板" } };

/***/ }),

/***/ 334:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });












































var _pageHead = __webpack_require__(3);var _pageHead2 = _interopRequireDefault(_pageHead);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}var uni = __webpack_require__(0).default;exports.default =

{
	data: {
		title: 'accordion',
		lists: [{
			title: "图片轮播",
			type: 'swiper',
			show: false },

		{
			title: "列表",
			type: 'list',
			show: false },

		{
			title: "文字排版",
			type: 'font',
			show: false }],


		imgUrls: [
		'https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/shuijiao.jpg',
		'https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/muwu.jpg',
		'https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/cbd.jpg'] },


	methods: {
		trigerCollapse: function trigerCollapse(e) {
			for (var i = 0, len = this.lists.length; i < len; ++i) {
				if (e === i) {
					this.lists[i].show = !this.lists[i].show;
				} else {
					this.lists[i].show = false;
				}
			}
		} },

	components: {
		pageHead: _pageHead2.default } };

/***/ }),

/***/ 423:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 68:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_node_modules_babel_loader_babelrc_false_retainLines_true_presets_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_node_modules_babel_preset_env_modules_commonjs_targets_browsers_1_last_2_versions_not_ie_8_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_node_modules_babel_preset_stage_2_plugins_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_node_modules_babel_plugin_transform_runtime_helpers_false_polyfill_false_regenerator_true_moduleName_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_node_modules_babel_runtime_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_lib_uni_loader_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_lib_preprocessor_loader_js_type_js_context_APP_PLUS_true_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_lib_mpvue_loader_lib_selector_type_script_index_0_accordion_vue__ = __webpack_require__(334);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_node_modules_babel_loader_babelrc_false_retainLines_true_presets_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_node_modules_babel_preset_env_modules_commonjs_targets_browsers_1_last_2_versions_not_ie_8_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_node_modules_babel_preset_stage_2_plugins_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_node_modules_babel_plugin_transform_runtime_helpers_false_polyfill_false_regenerator_true_moduleName_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_node_modules_babel_runtime_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_lib_uni_loader_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_lib_preprocessor_loader_js_type_js_context_APP_PLUS_true_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_lib_mpvue_loader_lib_selector_type_script_index_0_accordion_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_node_modules_babel_loader_babelrc_false_retainLines_true_presets_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_node_modules_babel_preset_env_modules_commonjs_targets_browsers_1_last_2_versions_not_ie_8_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_node_modules_babel_preset_stage_2_plugins_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_node_modules_babel_plugin_transform_runtime_helpers_false_polyfill_false_regenerator_true_moduleName_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_node_modules_babel_runtime_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_lib_uni_loader_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_lib_preprocessor_loader_js_type_js_context_APP_PLUS_true_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_lib_mpvue_loader_lib_selector_type_script_index_0_accordion_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_lib_mpvue_loader_lib_template_compiler_index_id_data_v_6fbdee40_hasScoped_false_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_lib_preprocessor_loader_js_type_html_context_APP_PLUS_true_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_lib_mpvue_loader_lib_selector_type_template_index_0_accordion_vue__ = __webpack_require__(160);
function injectStyle (ssrContext) {
  __webpack_require__(423)
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
  __WEBPACK_IMPORTED_MODULE_0__Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_node_modules_babel_loader_babelrc_false_retainLines_true_presets_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_node_modules_babel_preset_env_modules_commonjs_targets_browsers_1_last_2_versions_not_ie_8_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_node_modules_babel_preset_stage_2_plugins_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_node_modules_babel_plugin_transform_runtime_helpers_false_polyfill_false_regenerator_true_moduleName_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_node_modules_babel_runtime_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_lib_uni_loader_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_lib_preprocessor_loader_js_type_js_context_APP_PLUS_true_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_lib_mpvue_loader_lib_selector_type_script_index_0_accordion_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_lib_mpvue_loader_lib_template_compiler_index_id_data_v_6fbdee40_hasScoped_false_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_lib_preprocessor_loader_js_type_html_context_APP_PLUS_true_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_lib_mpvue_loader_lib_selector_type_template_index_0_accordion_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ })

},[245]);