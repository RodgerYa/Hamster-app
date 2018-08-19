global.webpackJsonp([86],{

/***/ 184:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });var _extends = Object.assign || function (target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i];for (var key in source) {if (Object.prototype.hasOwnProperty.call(source, key)) {target[key] = source[key];}}}return target;};var _vue = __webpack_require__(1);var _vue2 = _interopRequireDefault(_vue);
var _App = __webpack_require__(7);var _App2 = _interopRequireDefault(_App);

var _store = __webpack_require__(93);var _store2 = _interopRequireDefault(_store);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}var uni = __webpack_require__(0).default;

_vue2.default.config.productionTip = false;

_vue2.default.prototype.$store = _store2.default;

_App2.default.mpType = 'app';

var app = new _vue2.default(_extends({
	store: _store2.default },
_App2.default));

app.$mount();exports.default =

{ config: { "pages": ["^pages/component/component", "pages/API/API", "pages/template/template", "pages/component/view/view", "pages/component/scroll-view/scroll-view", "pages/component/swiper/swiper", "pages/template/number-box/number-box", "pages/component/text/text", "pages/component/rich-text/rich-text", "pages/component/progress/progress", "pages/component/button/button", "pages/component/checkbox/checkbox", "pages/component/form/form", "pages/component/input/input", "pages/component/label/label", "pages/component/picker/picker", "pages/component/radio/radio", "pages/component/slider/slider", "pages/component/switch/switch", "pages/component/textarea/textarea", "pages/component/navigator/navigator", "pages/component/navigator/navigate/navigate", "pages/component/navigator/redirect/redirect", "pages/component/image/image", "pages/component/audio/audio", "pages/component/video/video", "pages/component/map/map", "pages/component/canvas/canvas", "pages/component/web-view/web-view", "pages/API/login/login", "pages/API/get-user-info/get-user-info", "pages/API/request-payment/request-payment", "pages/API/share/share", "pages/API/set-navigation-bar-title/set-navigation-bar-title", "pages/API/navigation-bar-loading/navigation-bar-loading", "pages/API/navigator/navigator", "pages/API/pull-down-refresh/pull-down-refresh", "pages/API/animation/animation", "pages/API/canvas/canvas", "pages/API/action-sheet/action-sheet", "pages/API/modal/modal", "pages/API/toast/toast", "pages/API/get-network-type/get-network-type", "pages/API/get-system-info/get-system-info", "pages/API/on-accelerometer-change/on-accelerometer-change", "platforms/app-plus/shake/shake", "pages/API/on-compass-change/on-compass-change", "pages/API/make-phone-call/make-phone-call", "pages/API/scan-code/scan-code", "pages/API/clipboard/clipboard", "pages/API/request/request", "pages/API/upload-file/upload-file", "pages/API/download-file/download-file", "pages/API/image/image", "pages/API/voice/voice", "pages/API/background-audio/background-audio", "pages/API/video/video", "pages/API/file/file", "pages/API/get-location/get-location", "pages/API/open-location/open-location", "pages/API/choose-location/choose-location", "pages/API/storage/storage", "platforms/app-plus/speech/speech", "platforms/app-plus/orientation/orientation", "platforms/app-plus/proximity/proximity", "platforms/app-plus/push/push", "pages/component/icon/icon", "pages/template/popup/popup", "pages/template/tabbar/tabbar", "pages/template/media-list/media-list", "pages/template/grid/grid", "pages/template/drag-right/drag-right", "pages/template/drag-right-zoom/drag-right-zoom", "pages/template/drag-left/drag-left", "pages/template/drag-left-zoom/drag-left-zoom", "pages/template/badge/badge", "pages/template/accordion/accordion", "pages/template/cardview/cardview", "pages/template/list-with-badges/list-with-badges", "pages/template/list-with-collapses/list-with-collapses", "pages/template/list-triplex-row/list-triplex-row", "pages/template/list2detail-list/list2detail-list", "pages/template/list2detail-detail/list2detail-detail", "platforms/app-plus/feedback/feedback", "pages/template/product-list/product-list"], "window": { "navigationBarTextStyle": "black", "navigationBarTitleText": "演示", "navigationBarBackgroundColor": "#F8F8F8", "backgroundColor": "#F8F8F8" }, "tabBar": { "color": "#7A7E83", "selectedColor": "#007AFF", "borderStyle": "black", "backgroundColor": "#ffffff", "list": [{ "pagePath": "pages/component/component", "iconPath": "static/component.png", "selectedIconPath": "static/componentHL.png", "text": "组件" }, { "pagePath": "pages/API/API", "iconPath": "static/api.png", "selectedIconPath": "static/apiHL.png", "text": "接口" }, { "pagePath": "pages/template/template", "iconPath": "static/template.png", "selectedIconPath": "static/templateHL.png", "text": "模版" }] } } };

/***/ }),

/***/ 270:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });var uni = __webpack_require__(0).default;exports.default =
{
	onLaunch: function onLaunch() {
		console.log('App Launch');

		/* 5+环境锁定屏幕方向 */
		plus.screen.lockOrientation('portrait-primary'); //锁定
		/* 5+环境升级提示 */
		var server = "https://uniapp.dcloud.io/update"; //检查更新地址
		var req = { //升级检测数据
			"appid": plus.runtime.appid,
			"version": plus.runtime.version,
			"imei": plus.device.imei };

		uni.request({
			url: server,
			data: req,
			success: function success(res) {
				console.log("success", res);
				if (res.statusCode == 200 && res.data.isUpdate) {
					var openUrl = plus.os.name === 'iOS' ? res.data.iOS : res.data.Android;
					uni.showModal({ //提醒用户更新
						title: '更新提示',
						content: '是否选择更新',
						success: function success(res) {
							if (res.confirm) {
								plus.runtime.openURL(openUrl);
							}
						} });

				}
			} });


	},
	onShow: function onShow() {
		console.log('App Show');
	},
	onHide: function onHide() {
		console.log('App Hide');
	} };

/***/ }),

/***/ 427:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 7:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_node_modules_babel_loader_babelrc_false_retainLines_true_presets_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_node_modules_babel_preset_env_modules_commonjs_targets_browsers_1_last_2_versions_not_ie_8_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_node_modules_babel_preset_stage_2_plugins_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_node_modules_babel_plugin_transform_runtime_helpers_false_polyfill_false_regenerator_true_moduleName_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_node_modules_babel_runtime_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_lib_uni_loader_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_lib_preprocessor_loader_js_type_js_context_APP_PLUS_true_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_lib_mpvue_loader_lib_selector_type_script_index_0_App_vue__ = __webpack_require__(270);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_node_modules_babel_loader_babelrc_false_retainLines_true_presets_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_node_modules_babel_preset_env_modules_commonjs_targets_browsers_1_last_2_versions_not_ie_8_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_node_modules_babel_preset_stage_2_plugins_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_node_modules_babel_plugin_transform_runtime_helpers_false_polyfill_false_regenerator_true_moduleName_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_node_modules_babel_runtime_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_lib_uni_loader_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_lib_preprocessor_loader_js_type_js_context_APP_PLUS_true_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_lib_mpvue_loader_lib_selector_type_script_index_0_App_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_node_modules_babel_loader_babelrc_false_retainLines_true_presets_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_node_modules_babel_preset_env_modules_commonjs_targets_browsers_1_last_2_versions_not_ie_8_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_node_modules_babel_preset_stage_2_plugins_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_node_modules_babel_plugin_transform_runtime_helpers_false_polyfill_false_regenerator_true_moduleName_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_node_modules_babel_runtime_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_lib_uni_loader_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_lib_preprocessor_loader_js_type_js_context_APP_PLUS_true_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_lib_mpvue_loader_lib_selector_type_script_index_0_App_vue__);
function injectStyle (ssrContext) {
  __webpack_require__(427)
}
var normalizeComponent = __webpack_require__(2)
/* script */

/* template */
var __vue_template__ = null
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_node_modules_babel_loader_babelrc_false_retainLines_true_presets_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_node_modules_babel_preset_env_modules_commonjs_targets_browsers_1_last_2_versions_not_ie_8_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_node_modules_babel_preset_stage_2_plugins_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_node_modules_babel_plugin_transform_runtime_helpers_false_polyfill_false_regenerator_true_moduleName_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_node_modules_babel_runtime_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_lib_uni_loader_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_lib_preprocessor_loader_js_type_js_context_APP_PLUS_true_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_lib_mpvue_loader_lib_selector_type_script_index_0_App_vue___default.a,
  __vue_template__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 93:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });var _regenerator = __webpack_require__(5);var _regenerator2 = _interopRequireDefault(_regenerator);var _vue = __webpack_require__(1);var _vue2 = _interopRequireDefault(_vue);
var _vuex = __webpack_require__(6);var _vuex2 = _interopRequireDefault(_vuex);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function _asyncToGenerator(fn) {return function () {var gen = fn.apply(this, arguments);return new Promise(function (resolve, reject) {function step(key, arg) {try {var info = gen[key](arg);var value = info.value;} catch (error) {reject(error);return;}if (info.done) {resolve(value);} else {return Promise.resolve(value).then(function (value) {step("next", value);}, function (err) {step("throw", err);});}}return step("next");});};}var uni = __webpack_require__(0).default;

_vue2.default.use(_vuex2.default);

var store = new _vuex2.default.Store({
	state: {
		hasLogin: false,
		loginProvider: "",
		openid: null },

	mutations: {
		login: function login(state, provider) {
			state.hasLogin = true;
			state.loginProvider = provider;
		},
		logout: function logout(state) {
			state.hasLogin = false;
			state.openid = null;
		},
		setOpenid: function setOpenid(state, openid) {
			state.openid = openid;
		} },

	actions: {
		// lazy loading openid
		getUserOpenId: function () {var _ref = _asyncToGenerator( /*#__PURE__*/_regenerator2.default.mark(function _callee(_ref2) {var
				commit = _ref2.commit,
				state = _ref2.state;return _regenerator2.default.wrap(function _callee$(_context) {while (1) {switch (_context.prev = _context.next) {case 0:_context.next = 2;return (

									new Promise(function (resolve, reject) {
										if (state.openid) {
											resolve(state.openid);
										} else {
											uni.login({
												success: function success(data) {
													commit('login');
													setTimeout(function () {//模拟异步请求服务器获取 openid
														var openid = '123456789';
														console.log('uni.request mock openid[' + openid + ']');
														commit('setOpenid', openid);
														resolve(openid);
													}, 1000);
												},
												fail: function fail(err) {
													console.log('uni.login 接口调用失败，将无法正常使用开放接口等服务', err);
													reject(err);
												} });

										}
									}));case 2:return _context.abrupt('return', _context.sent);case 3:case 'end':return _context.stop();}}}, _callee, this);}));function getUserOpenId(_x) {return _ref.apply(this, arguments);}return getUserOpenId;}() } });exports.default =




store;

/***/ })

},[184]);