global.webpackJsonp([13],{

/***/ 143:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('view', {
    staticClass: "page"
  }, [_c('view', {
    staticClass: "banner",
    attrs: {
      "eventid": '0'
    },
    on: {
      "click": function($event) {
        _vm.goDetail(_vm.banner)
      }
    }
  }, [_c('image', {
    staticClass: "banner-img",
    attrs: {
      "src": _vm.banner.cover
    }
  }), _vm._v(" "), _c('view', {
    staticClass: "banner-title"
  }, [_vm._v(_vm._s(_vm.banner.title))])]), _vm._v(" "), _c('view', {
    staticClass: "uni-list"
  }, _vm._l((_vm.listData), function(value, key) {
    return _c('view', {
      key: key,
      staticClass: "uni-list-cell",
      attrs: {
        "hover-class": "uni-list-cell-hover",
        "eventid": '1-' + key
      },
      on: {
        "click": function($event) {
          _vm.goDetail(value)
        }
      }
    }, [_c('view', {
      staticClass: "uni-media-list"
    }, [_c('image', {
      staticClass: "uni-media-list-logo",
      attrs: {
        "src": value.cover
      }
    }), _vm._v(" "), _c('view', {
      staticClass: "uni-media-list-body"
    }, [_c('view', {
      staticClass: "uni-media-list-text-top"
    }, [_vm._v(_vm._s(value.title))]), _vm._v(" "), _c('view', {
      staticClass: "uni-media-list-text-bottom"
    }, [_c('text', [_vm._v(_vm._s(value.author_name))]), _vm._v(" "), _c('text', [_vm._v(_vm._s(value.published_at))])])])])])
  }))])
}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ 257:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

var _vue = __webpack_require__(1);var _vue2 = _interopRequireDefault(_vue);
var _list2detailList = __webpack_require__(80);var _list2detailList2 = _interopRequireDefault(_list2detailList);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}var uni = __webpack_require__(0).default;
var app = new _vue2.default(_list2detailList2.default);
app.$mount();exports.default =

{
	config: { "navigationBarTitleText": "列表到详情示例", "enablePullDownRefresh": true } };

/***/ }),

/***/ 346:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });var uni = __webpack_require__(0).default;























var dateUtils = __webpack_require__(4).dateUtils;exports.default =

{
	data: {
		banner: {},
		listData: [],
		last_id: "",
		reload: false },

	onLoad: function onLoad() {
		this.getBanner();
		this.getList();
	},
	onPullDownRefresh: function onPullDownRefresh() {
		this.reload = true;
		this.last_id = "";
		this.getBanner();
		this.getList();
	},
	onUnload: function onUnload() {
		this.banner = {},
		this.listData = [],
		this.last_id = "";
	},
	onReachBottom: function onReachBottom() {
		this.getList();
	},
	methods: {
		getBanner: function getBanner() {var _this = this;
			var data = {
				column: "id,post_id,title,author_name,cover,published_at" //需要的字段名
			};
			uni.request({
				url: 'https://spider.dcloud.net.cn/api/banner/36kr',
				data: data,
				success: function success(data) {
					uni.stopPullDownRefresh();
					if (data.statusCode == 200) {
						_this.banner = data.data;
					}
				},
				fail: function fail(data, code) {
					console.log('fail' + JSON.stringify(data));
				} });

		},
		getList: function getList() {var _this2 = this;
			var data = {
				column: "id,post_id,title,author_name,cover,published_at" //需要的字段名
			};
			console.log(this.last_id);
			if (this.last_id) {//说明已有数据，目前处于上拉加载
				data.minId = this.last_id;
				data.time = new Date().getTime() + "";
				data.pageSize = 10;
			}
			uni.request({
				url: 'https://spider.dcloud.net.cn/api/news',
				data: data,
				success: function success(data) {
					if (data.statusCode == 200) {
						var list = _this2.setTime(data.data);
						_this2.listData = _this2.reload ? list : _this2.listData.concat(list);
						_this2.last_id = list[list.length - 1].id;
						_this2.reload = false;
					}
				},
				fail: function fail(data, code) {
					console.log('fail' + JSON.stringify(data));
				} });

		},
		goDetail: function goDetail(e) {
			console.log(e);
			if (!/前|刚刚/.test(e.published_at)) {
				e.published_at = dateUtils.format(e.published_at);
			}
			var detail = {
				author_name: e.author_name,
				cover: e.cover,
				id: e.id,
				post_id: e.post_id,
				published_at: e.published_at,
				title: e.title };

			uni.navigateTo({
				url: "../list2detail-detail/list2detail-detail?detailDate=" + JSON.stringify(detail) });

		},
		setTime: function setTime(items) {
			var newItems = [];
			items.forEach(function (e) {
				newItems.push({
					author_name: e.author_name,
					cover: e.cover,
					id: e.id,
					post_id: e.post_id,
					published_at: dateUtils.format(e.published_at),
					title: e.title });

			});
			return newItems;
		} } };

/***/ }),

/***/ 406:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 80:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_node_modules_babel_loader_babelrc_false_retainLines_true_presets_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_node_modules_babel_preset_env_modules_commonjs_targets_browsers_1_last_2_versions_not_ie_8_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_node_modules_babel_preset_stage_2_plugins_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_node_modules_babel_plugin_transform_runtime_helpers_false_polyfill_false_regenerator_true_moduleName_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_node_modules_babel_runtime_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_lib_uni_loader_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_lib_preprocessor_loader_js_type_js_context_APP_PLUS_true_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_lib_mpvue_loader_lib_selector_type_script_index_0_list2detail_list_vue__ = __webpack_require__(346);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_node_modules_babel_loader_babelrc_false_retainLines_true_presets_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_node_modules_babel_preset_env_modules_commonjs_targets_browsers_1_last_2_versions_not_ie_8_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_node_modules_babel_preset_stage_2_plugins_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_node_modules_babel_plugin_transform_runtime_helpers_false_polyfill_false_regenerator_true_moduleName_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_node_modules_babel_runtime_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_lib_uni_loader_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_lib_preprocessor_loader_js_type_js_context_APP_PLUS_true_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_lib_mpvue_loader_lib_selector_type_script_index_0_list2detail_list_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_node_modules_babel_loader_babelrc_false_retainLines_true_presets_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_node_modules_babel_preset_env_modules_commonjs_targets_browsers_1_last_2_versions_not_ie_8_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_node_modules_babel_preset_stage_2_plugins_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_node_modules_babel_plugin_transform_runtime_helpers_false_polyfill_false_regenerator_true_moduleName_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_node_modules_babel_runtime_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_lib_uni_loader_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_lib_preprocessor_loader_js_type_js_context_APP_PLUS_true_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_lib_mpvue_loader_lib_selector_type_script_index_0_list2detail_list_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_lib_mpvue_loader_lib_template_compiler_index_id_data_v_55b99b4e_hasScoped_false_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_lib_preprocessor_loader_js_type_html_context_APP_PLUS_true_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_lib_mpvue_loader_lib_selector_type_template_index_0_list2detail_list_vue__ = __webpack_require__(143);
function injectStyle (ssrContext) {
  __webpack_require__(406)
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
  __WEBPACK_IMPORTED_MODULE_0__Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_node_modules_babel_loader_babelrc_false_retainLines_true_presets_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_node_modules_babel_preset_env_modules_commonjs_targets_browsers_1_last_2_versions_not_ie_8_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_node_modules_babel_preset_stage_2_plugins_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_node_modules_babel_plugin_transform_runtime_helpers_false_polyfill_false_regenerator_true_moduleName_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_node_modules_babel_runtime_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_lib_uni_loader_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_lib_preprocessor_loader_js_type_js_context_APP_PLUS_true_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_lib_mpvue_loader_lib_selector_type_script_index_0_list2detail_list_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_lib_mpvue_loader_lib_template_compiler_index_id_data_v_55b99b4e_hasScoped_false_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_lib_preprocessor_loader_js_type_html_context_APP_PLUS_true_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_lib_mpvue_loader_lib_selector_type_template_index_0_list2detail_list_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ })

},[257]);