global.webpackJsonp([85],{

/***/ 111:
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
          "url": item.url,
          "eventid": '1-' + index + '-' + key
        },
        on: {
          "click": function($event) {
            _vm.goDetailPage(item.url)
          }
        }
      }, [_c('view', {
        staticClass: "uni-list-cell-navigate uni-navigate-right"
      }, [_vm._v(" " + _vm._s(item.name) + " ")])])
    }))])])])
  })], 2)
}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('view', {
    staticClass: "index-hd"
  }, [_c('image', {
    staticClass: "index-logo",
    attrs: {
      "src": "../../static/apiIndex.png"
    }
  }), _vm._v(" "), _c('view', {
    staticClass: "page-section-title"
  }, [_vm._v("以下将演示uni-app接口能力，具体属性参数详见uni-app开发文档。")])])
}]
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ 185:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

var _vue = __webpack_require__(1);var _vue2 = _interopRequireDefault(_vue);
var _API = __webpack_require__(8);var _API2 = _interopRequireDefault(_API);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}var uni = __webpack_require__(0).default;
var app = new _vue2.default(_API2.default);
app.$mount();exports.default =

{
	config: { "navigationBarTitleText": "接口" } };

/***/ }),

/***/ 274:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });var uni = __webpack_require__(0).default;exports.default =
























{
	data: function data() {
		var list = [
		{
			id: 'page',
			name: '界面',
			open: false,
			pages: [{
				name: '设置界面标题',
				url: 'set-navigation-bar-title' },
			{
				name: '标题栏加载动画',
				url: 'navigation-bar-loading' },
			{
				name: '页面跳转',
				url: 'navigator' },
			{
				name: '下拉刷新',
				url: 'pull-down-refresh' },
			{
				name: '创建动画',
				url: 'animation' },
			{
				name: '创建绘画',
				url: 'canvas' },
			{
				name: '显示操作菜单',
				url: 'action-sheet' },
			{
				name: '显示模态弹窗',
				url: 'modal' },
			{
				name: '显示消息提示框',
				url: 'toast' }] },

		{
			id: 'device',
			name: '设备',
			open: false,
			pages: [{
				name: '获取手机网络状态',
				url: 'get-network-type' },
			{
				name: '获取手机系统信息',
				url: 'get-system-info' },
			{
				name: '打电话',
				url: 'make-phone-call' },
			{
				name: '扫码',
				url: 'scan-code' },
			{
				name: '剪贴板',
				url: 'clipboard' },
			{
				name: '监听加速度传感器',
				url: 'on-accelerometer-change' },
			{
				name: '监听罗盘数据',
				url: 'on-compass-change' },


			{
				name: '监听距离传感器',
				url: '/platforms/app-plus/proximity/proximity' },
			{
				name: '监听方向传感器',
				url: '/platforms/app-plus/orientation/orientation' }] },



		{
			id: 'network',
			name: '网络',
			open: false,
			pages: [{
				name: '发起一个请求',
				url: 'request' },
			{
				name: '上传文件',
				url: 'upload-file' },
			{
				name: '下载文件',
				url: 'download-file' }] },

		{
			id: 'media',
			name: '媒体',
			open: false,
			pages: [{
				name: '图片',
				url: 'image' },
			{
				name: '录音',
				url: 'voice' },
			{
				name: '背景音频',
				url: 'background-audio' },
			{
				name: '视频',
				url: 'video' },
			{
				name: '文件',
				url: 'file' }] },

		{
			id: 'location',
			name: '位置',
			open: false,
			pages: [{
				name: '获取当前位置',
				url: 'get-location' },
			{
				name: '使用地图查看位置',
				url: 'open-location' },
			{
				name: '使用地图选择位置',
				url: 'choose-location' }] },

		{
			id: 'storage',
			name: '数据',
			open: false,
			pages: [{
				name: '数据存储',
				url: 'storage' }] },

		{
			id: 'login',
			name: '登录',
			open: false,
			pages: [{
				name: '登录',
				url: 'login' },
			{
				name: '获取用户信息',
				url: 'get-user-info' }] },

		{
			id: 'payment',
			name: '支付',
			open: false,
			pages: [{
				name: '发起支付',
				url: 'request-payment' }] },

		{
			id: 'share',
			name: '分享',
			open: false,
			pages: [{
				name: '分享',
				url: 'share' }] },



		{
			id: 'speech',
			name: '语音',
			open: false,
			pages: [{
				name: '语音识别',
				url: '/platforms/app-plus/speech/speech' }] },

		{
			id: 'push',
			name: '推送',
			open: false,
			pages: [{
				name: '推送',
				url: '/platforms/app-plus/push/push' }] }];




		return {
			lists: list };

	},
	onShareAppMessage: function onShareAppMessage() {
		return {
			title: '欢迎体验uni-app',
			path: '/pages/API/API' };

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
			var url = ~e.indexOf('platform') ? e : '/pages/API/' + e + '/' + e;
			uni.navigateTo({
				url: url });

		} } };

/***/ }),

/***/ 374:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 8:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_node_modules_babel_loader_babelrc_false_retainLines_true_presets_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_node_modules_babel_preset_env_modules_commonjs_targets_browsers_1_last_2_versions_not_ie_8_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_node_modules_babel_preset_stage_2_plugins_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_node_modules_babel_plugin_transform_runtime_helpers_false_polyfill_false_regenerator_true_moduleName_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_node_modules_babel_runtime_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_lib_uni_loader_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_lib_preprocessor_loader_js_type_js_context_APP_PLUS_true_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_lib_mpvue_loader_lib_selector_type_script_index_0_API_vue__ = __webpack_require__(274);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_node_modules_babel_loader_babelrc_false_retainLines_true_presets_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_node_modules_babel_preset_env_modules_commonjs_targets_browsers_1_last_2_versions_not_ie_8_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_node_modules_babel_preset_stage_2_plugins_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_node_modules_babel_plugin_transform_runtime_helpers_false_polyfill_false_regenerator_true_moduleName_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_node_modules_babel_runtime_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_lib_uni_loader_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_lib_preprocessor_loader_js_type_js_context_APP_PLUS_true_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_lib_mpvue_loader_lib_selector_type_script_index_0_API_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_node_modules_babel_loader_babelrc_false_retainLines_true_presets_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_node_modules_babel_preset_env_modules_commonjs_targets_browsers_1_last_2_versions_not_ie_8_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_node_modules_babel_preset_stage_2_plugins_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_node_modules_babel_plugin_transform_runtime_helpers_false_polyfill_false_regenerator_true_moduleName_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_node_modules_babel_runtime_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_lib_uni_loader_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_lib_preprocessor_loader_js_type_js_context_APP_PLUS_true_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_lib_mpvue_loader_lib_selector_type_script_index_0_API_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_lib_mpvue_loader_lib_template_compiler_index_id_data_v_1b00ca3e_hasScoped_false_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_lib_preprocessor_loader_js_type_html_context_APP_PLUS_true_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_lib_mpvue_loader_lib_selector_type_template_index_0_API_vue__ = __webpack_require__(111);
function injectStyle (ssrContext) {
  __webpack_require__(374)
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
  __WEBPACK_IMPORTED_MODULE_0__Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_node_modules_babel_loader_babelrc_false_retainLines_true_presets_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_node_modules_babel_preset_env_modules_commonjs_targets_browsers_1_last_2_versions_not_ie_8_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_node_modules_babel_preset_stage_2_plugins_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_node_modules_babel_plugin_transform_runtime_helpers_false_polyfill_false_regenerator_true_moduleName_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_node_modules_babel_runtime_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_lib_uni_loader_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_lib_preprocessor_loader_js_type_js_context_APP_PLUS_true_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_lib_mpvue_loader_lib_selector_type_script_index_0_API_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_lib_mpvue_loader_lib_template_compiler_index_id_data_v_1b00ca3e_hasScoped_false_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_lib_preprocessor_loader_js_type_html_context_APP_PLUS_true_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_lib_mpvue_loader_lib_selector_type_template_index_0_API_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ })

},[185]);