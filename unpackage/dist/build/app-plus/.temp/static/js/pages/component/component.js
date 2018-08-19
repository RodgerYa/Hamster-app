global.webpackJsonp([48],{

/***/ 153:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('view', {
    staticClass: "index"
  }, [_vm._m(0), _vm._v(" "), _vm._l((_vm.lists), function(list, index) {
    return _c('view', {
      key: index,
      staticClass: "uni-card"
    }, [_c('view', {
      staticClass: "uni-list"
    }, [_c('view', {
      staticClass: "uni-list-cell uni-collapse"
    }, [_c('view', {
      staticClass: "uni-list-cell-navigate uni-navigate-bottom",
      class: list.open ? 'uni-active' : '',
      attrs: {
        "hover-class": "uni-list-cell-hover",
        "eventid": '0-' + index
      },
      on: {
        "click": function($event) {
          _vm.trigerCollapse(index)
        }
      }
    }, [_vm._v("\n\t\t\t\t\t" + _vm._s(list.name) + "\n\t\t\t\t")]), _vm._v(" "), _c('view', {
      staticClass: "uni-list uni-collapse",
      class: list.open ? 'uni-active' : ''
    }, _vm._l((list.pages), function(item, key) {
      return _c('view', {
        key: key,
        staticClass: "uni-list-cell",
        attrs: {
          "hover-class": "uni-list-cell-hover",
          "eventid": '1-' + index + '-' + key
        },
        on: {
          "click": function($event) {
            _vm.goDetailPage(item)
          }
        }
      }, [_c('view', {
        staticClass: "uni-list-cell-navigate uni-navigate-right"
      }, [_vm._v(" " + _vm._s(item) + " ")])])
    }))])])])
  })], 2)
}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('view', {
    staticClass: "index-hd"
  }, [_c('image', {
    staticClass: "index-logo",
    attrs: {
      "src": "../../static/componentIndex.png"
    }
  }), _vm._v(" "), _c('view', {
    staticClass: "page-section-title"
  }, [_vm._v("\n\t\t\t以下将展示uni-app官方组件能力，组件样式仅供参考，开发者可根据自身需求自定义组件样式，具体属性参数详见uni-app开发文档。\n\t\t")])])
}]
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ 222:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

var _vue = __webpack_require__(1);var _vue2 = _interopRequireDefault(_vue);
var _component = __webpack_require__(45);var _component2 = _interopRequireDefault(_component);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}var uni = __webpack_require__(0).default;
var app = new _vue2.default(_component2.default);
app.$mount();exports.default =

{
	config: { "navigationBarTitleText": "组件" } };

/***/ }),

/***/ 311:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });var uni = __webpack_require__(0).default;exports.default =

























{
	data: function data() {
		return {
			lists: [{
				id: 'view',
				name: '视图容器',
				open: false,
				pages: ['view', 'scroll-view', 'swiper'] },
			{
				id: 'content',
				name: '基础内容',
				open: false,
				pages: ['text', 'rich-text', 'icon', 'progress'] },
			{
				id: 'form',
				name: '表单组件',
				open: false,
				pages: ['button', 'checkbox', 'form', 'input', 'label', 'picker', 'radio', 'slider',
				'switch', 'textarea'] },

			{
				id: 'nav',
				name: '导航',
				open: false,
				pages: ['navigator'] },
			{
				id: 'media',
				name: '媒体组件',
				open: false,
				pages: ['image', 'audio', 'video'] },
			{
				id: 'map',
				name: '地图',
				open: false,
				pages: ['map'] },
			{
				id: 'web-view',
				name: '网页',
				open: false,
				pages: ['web-view'] }] };


	},
	onShareAppMessage: function onShareAppMessage() {
		return {
			title: '欢迎体验uni-app',
			path: '/pages/component/component' };

	},
	methods: {
		trigerCollapse: function trigerCollapse(e) {
			for (var i = 0, len = this.lists.length; i < len; ++i) {
				if (e === i) {
					this.lists[i].open = !this.lists[i].open;
				} else {
					this.lists[i].open = false;
				}
			}
		},
		goDetailPage: function goDetailPage(e) {
			uni.navigateTo({
				url: '/pages/component/' + e + '/' + e });

		} } };

/***/ }),

/***/ 416:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 45:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_node_modules_babel_loader_babelrc_false_retainLines_true_presets_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_node_modules_babel_preset_env_modules_commonjs_targets_browsers_1_last_2_versions_not_ie_8_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_node_modules_babel_preset_stage_2_plugins_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_node_modules_babel_plugin_transform_runtime_helpers_false_polyfill_false_regenerator_true_moduleName_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_node_modules_babel_runtime_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_lib_uni_loader_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_lib_preprocessor_loader_js_type_js_context_APP_PLUS_true_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_lib_mpvue_loader_lib_selector_type_script_index_0_component_vue__ = __webpack_require__(311);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_node_modules_babel_loader_babelrc_false_retainLines_true_presets_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_node_modules_babel_preset_env_modules_commonjs_targets_browsers_1_last_2_versions_not_ie_8_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_node_modules_babel_preset_stage_2_plugins_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_node_modules_babel_plugin_transform_runtime_helpers_false_polyfill_false_regenerator_true_moduleName_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_node_modules_babel_runtime_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_lib_uni_loader_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_lib_preprocessor_loader_js_type_js_context_APP_PLUS_true_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_lib_mpvue_loader_lib_selector_type_script_index_0_component_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_node_modules_babel_loader_babelrc_false_retainLines_true_presets_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_node_modules_babel_preset_env_modules_commonjs_targets_browsers_1_last_2_versions_not_ie_8_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_node_modules_babel_preset_stage_2_plugins_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_node_modules_babel_plugin_transform_runtime_helpers_false_polyfill_false_regenerator_true_moduleName_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_node_modules_babel_runtime_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_lib_uni_loader_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_lib_preprocessor_loader_js_type_js_context_APP_PLUS_true_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_lib_mpvue_loader_lib_selector_type_script_index_0_component_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_lib_mpvue_loader_lib_template_compiler_index_id_data_v_63cc8be7_hasScoped_false_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_lib_preprocessor_loader_js_type_html_context_APP_PLUS_true_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_lib_mpvue_loader_lib_selector_type_template_index_0_component_vue__ = __webpack_require__(153);
function injectStyle (ssrContext) {
  __webpack_require__(416)
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
  __WEBPACK_IMPORTED_MODULE_0__Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_node_modules_babel_loader_babelrc_false_retainLines_true_presets_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_node_modules_babel_preset_env_modules_commonjs_targets_browsers_1_last_2_versions_not_ie_8_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_node_modules_babel_preset_stage_2_plugins_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_node_modules_babel_plugin_transform_runtime_helpers_false_polyfill_false_regenerator_true_moduleName_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_node_modules_babel_runtime_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_lib_uni_loader_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_lib_preprocessor_loader_js_type_js_context_APP_PLUS_true_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_lib_mpvue_loader_lib_selector_type_script_index_0_component_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_lib_mpvue_loader_lib_template_compiler_index_id_data_v_63cc8be7_hasScoped_false_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_lib_preprocessor_loader_js_type_html_context_APP_PLUS_true_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_lib_mpvue_loader_lib_selector_type_template_index_0_component_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ })

},[222]);