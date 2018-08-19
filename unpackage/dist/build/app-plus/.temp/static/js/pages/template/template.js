global.webpackJsonp([9],{

/***/ 156:
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
      staticClass: "uni-list-cell-navigate",
      class: [list.open ? 'uni-active' : '', list.pages ? 'uni-navigate-bottom' : 'uni-navigate-right'],
      attrs: {
        "hover-class": "uni-list-cell-hover",
        "eventid": '0-' + index
      },
      on: {
        "click": function($event) {
          _vm.trigerCollapse(index)
        }
      }
    }, [_vm._v("\n\t\t\t\t\t" + _vm._s(list.name) + "\n\t\t\t\t")]), _vm._v(" "), (list.pages) ? _c('view', {
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
      }, [_vm._v(" " + _vm._s(item.name ? item.name : item) + " ")])])
    })) : _vm._e()])])])
  })], 2)
}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('view', {
    staticClass: "index-hd"
  }, [_c('image', {
    staticClass: "index-logo",
    attrs: {
      "src": "../../static/templateIndex.png"
    }
  }), _vm._v(" "), _c('view', {
    staticClass: "page-section-title"
  }, [_vm._v("以下是uni-app的部分模版示例，欢迎大家积极分享更多的模版，一起完善uni-app生态。")])])
}]
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ 263:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

var _vue = __webpack_require__(1);var _vue2 = _interopRequireDefault(_vue);
var _template = __webpack_require__(86);var _template2 = _interopRequireDefault(_template);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}var uni = __webpack_require__(0).default;
var app = new _vue2.default(_template2.default);
app.$mount();exports.default =

{
	config: { "navigationBarTitleText": "模版" } };

/***/ }),

/***/ 352:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });var uni = __webpack_require__(0).default;exports.default =
























{
	data: function data() {
		return {
			lists: [{
				name: '折叠面板',
				url: 'accordion' },
			{
				name: '数字角标',
				url: 'badge' },
			{
				name: '卡片视图',
				url: 'cardview' },
			{
				id: 'lists',
				name: '列表',
				open: false,
				pages: [{
					name: '右侧带角标',
					url: 'list-with-badges' },
				{
					name: '二级列表',
					url: 'list-with-collapses' },
				{
					name: '三行列表',
					url: 'list-triplex-row' }] },

			{
				name: '图文列表',
				url: 'media-list' },
			{
				name: '商品列表',
				url: 'product-list' },
			{
				name: '九宫格',
				url: 'grid' },
			{
				name: 'popup',
				url: 'popup' },
			{
				name: '选项卡',
				url: 'tabbar' },

			// 					{
			// 						name: '问题反馈',
			// 						url: '/platforms/app-plus/feedback/feedback'
			// 					},
			{
				name: '数字选择框',
				url: 'number-box' },
			{
				name: '列表到详情示例',
				url: 'list2detail-list' }] };



	},
	onShareAppMessage: function onShareAppMessage() {
		return {
			title: '欢迎体验uni-app',
			path: '/pages/template/template' };

	},
	methods: {
		trigerCollapse: function trigerCollapse(e) {
			for (var i = 0, len = this.lists.length; i < len; ++i) {
				if (e === i) {
					this.lists[i].pages ? this.lists[i].open = !this.lists[e].open : this.goDetailPage(this.lists[i].
					url);
				} else {
					this.lists[i].pages ? this.lists[i].open = false : "";
				}
			}
		},
		goDetailPage: function goDetailPage(e) {
			var path = e.url ? e.url : e;
			var url = ~path.indexOf('platform') ? e : '/pages/template/' + path + '/' + path;
			uni.navigateTo({
				url: url });

		} } };

/***/ }),

/***/ 419:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 86:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_node_modules_babel_loader_babelrc_false_retainLines_true_presets_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_node_modules_babel_preset_env_modules_commonjs_targets_browsers_1_last_2_versions_not_ie_8_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_node_modules_babel_preset_stage_2_plugins_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_node_modules_babel_plugin_transform_runtime_helpers_false_polyfill_false_regenerator_true_moduleName_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_node_modules_babel_runtime_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_lib_uni_loader_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_lib_preprocessor_loader_js_type_js_context_APP_PLUS_true_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_lib_mpvue_loader_lib_selector_type_script_index_0_template_vue__ = __webpack_require__(352);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_node_modules_babel_loader_babelrc_false_retainLines_true_presets_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_node_modules_babel_preset_env_modules_commonjs_targets_browsers_1_last_2_versions_not_ie_8_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_node_modules_babel_preset_stage_2_plugins_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_node_modules_babel_plugin_transform_runtime_helpers_false_polyfill_false_regenerator_true_moduleName_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_node_modules_babel_runtime_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_lib_uni_loader_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_lib_preprocessor_loader_js_type_js_context_APP_PLUS_true_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_lib_mpvue_loader_lib_selector_type_script_index_0_template_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_node_modules_babel_loader_babelrc_false_retainLines_true_presets_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_node_modules_babel_preset_env_modules_commonjs_targets_browsers_1_last_2_versions_not_ie_8_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_node_modules_babel_preset_stage_2_plugins_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_node_modules_babel_plugin_transform_runtime_helpers_false_polyfill_false_regenerator_true_moduleName_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_node_modules_babel_runtime_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_lib_uni_loader_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_lib_preprocessor_loader_js_type_js_context_APP_PLUS_true_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_lib_mpvue_loader_lib_selector_type_script_index_0_template_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_lib_mpvue_loader_lib_template_compiler_index_id_data_v_6ac1d6eb_hasScoped_false_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_lib_preprocessor_loader_js_type_html_context_APP_PLUS_true_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_lib_mpvue_loader_lib_selector_type_template_index_0_template_vue__ = __webpack_require__(156);
function injectStyle (ssrContext) {
  __webpack_require__(419)
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
  __WEBPACK_IMPORTED_MODULE_0__Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_node_modules_babel_loader_babelrc_false_retainLines_true_presets_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_node_modules_babel_preset_env_modules_commonjs_targets_browsers_1_last_2_versions_not_ie_8_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_node_modules_babel_preset_stage_2_plugins_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_node_modules_babel_plugin_transform_runtime_helpers_false_polyfill_false_regenerator_true_moduleName_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_node_modules_babel_runtime_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_lib_uni_loader_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_lib_preprocessor_loader_js_type_js_context_APP_PLUS_true_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_lib_mpvue_loader_lib_selector_type_script_index_0_template_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_lib_mpvue_loader_lib_template_compiler_index_id_data_v_6ac1d6eb_hasScoped_false_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_lib_preprocessor_loader_js_type_html_context_APP_PLUS_true_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_lib_mpvue_loader_lib_selector_type_template_index_0_template_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ })

},[263]);