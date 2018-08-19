global.webpackJsonp([10],{

/***/ 107:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('view', {
    staticClass: "index"
  }, [_c('scroll-view', {
    staticClass: "swiper-tab",
    attrs: {
      "id": "tab-bar",
      "scroll-x": "",
      "scroll-left": _vm.scrollLeft
    }
  }, _vm._l((_vm.tabs), function(tab, index) {
    return _c('block', {
      key: tab.id
    }, [_c('view', {
      class: ['swiper-tab-list', _vm.currentTab == index ? 'on' : ''],
      attrs: {
        "id": tab.id,
        "data-current": index,
        "eventid": '0-' + index
      },
      on: {
        "tap": _vm.swichNav
      }
    }, [_vm._v(_vm._s(tab.name))])])
  })), _vm._v(" "), _c('swiper', {
    staticClass: "swiper-box",
    attrs: {
      "current": _vm.currentTab,
      "duration": "300",
      "eventid": '2'
    },
    on: {
      "change": _vm.bindChange
    }
  }, _vm._l((_vm.newsitems), function(tab, index1) {
    return _c('block', {
      key: index1
    }, [_c('swiper-item', {
      attrs: {
        "mpcomid": '0-' + index1
      }
    }, [_c('scroll-view', {
      staticClass: "index-bd",
      attrs: {
        "scroll-y": "",
        "eventid": '1-' + index1
      },
      on: {
        "scrolltolower": function($event) {
          _vm.loadMore(index1)
        }
      }
    }, _vm._l((tab), function(newsitem, index2) {
      return _c('block', {
        key: index2
      }, [_c('view', {
        staticClass: "tab-list"
      }, [_vm._v(_vm._s(newsitem.name) + "-" + _vm._s(newsitem.label))])])
    }))], 1)], 1)
  }))], 1)
}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ 262:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

var _vue = __webpack_require__(1);var _vue2 = _interopRequireDefault(_vue);
var _tabbar = __webpack_require__(85);var _tabbar2 = _interopRequireDefault(_tabbar);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}var uni = __webpack_require__(0).default;
var app = new _vue2.default(_tabbar2.default);
app.$mount();exports.default =

{
	config: { "navigationBarTitleText": "顶部选项卡" } };

/***/ }),

/***/ 351:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });var _regenerator = __webpack_require__(5);var _regenerator2 = _interopRequireDefault(_regenerator);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function _asyncToGenerator(fn) {return function () {var gen = fn.apply(this, arguments);return new Promise(function (resolve, reject) {function step(key, arg) {try {var info = gen[key](arg);var value = info.value;} catch (error) {reject(error);return;}if (info.done) {resolve(value);} else {return Promise.resolve(value).then(function (value) {step("next", value);}, function (err) {step("throw", err);});}}return step("next");});};}var uni = __webpack_require__(0).default;exports.default =




















{
	data: function data() {
		return {
			title: 'tabbar',
			scrollLeft: 0,
			isClickChange: false,
			currentTab: 0,
			tabs: [{
				name: '关注',
				id: 'guanzhu' },
			{
				name: '推荐',
				id: 'tuijian' },
			{
				name: '体育',
				id: 'tiyu' },
			{
				name: '热点',
				id: 'redian' },
			{
				name: '财经',
				id: 'caijing' },
			{
				name: '娱乐',
				id: 'yule' },
			{
				name: '军事',
				id: 'junshi' },
			{
				name: '历史',
				id: 'lishi' },
			{
				name: '本地',
				id: 'bendi' }],

			newsitems: [] };

	},
	onLoad: function onLoad() {
		this.newsitems = this.randomfn();
	},
	onUnload: function onUnload() {
		this.scrollLeft = 0,
		this.isClickChange = false,
		this.currentTab = 0;
	},
	methods: {
		bindChange: function () {var _ref = _asyncToGenerator( /*#__PURE__*/_regenerator2.default.mark(function _callee(e) {var index, tabBar, tabBarScrollLeft, width, i, result, winWidth, nowElement, nowWidth;return _regenerator2.default.wrap(function _callee$(_context) {while (1) {switch (_context.prev = _context.next) {case 0:
								index = e.target.current;if (!
								this.isClickChange) {_context.next = 5;break;}
								this.currentTab = index;
								this.isClickChange = false;return _context.abrupt('return');case 5:_context.next = 7;return (


									this.getWidth("tab-bar"));case 7:tabBar = _context.sent;
								tabBarScrollLeft = tabBar.scrollLeft;

								width = 0;

								i = 0;case 11:if (!(i < index)) {_context.next = 19;break;}_context.next = 14;return (
									this.getWidth(this.tabs[i].id));case 14:result = _context.sent;
								width += result.width;case 16:i++;_context.next = 11;break;case 19:


								winWidth = uni.getSystemInfoSync().windowWidth;_context.next = 22;return (
									this.getWidth(this.tabs[index].id));case 22:nowElement = _context.sent;
								nowWidth = nowElement.width;

								if (width + nowWidth - tabBarScrollLeft > winWidth) {
									this.scrollLeft = width + nowWidth - winWidth;
								}
								if (width < tabBarScrollLeft) {
									this.scrollLeft = width;
								}
								this.isClickChange = false;
								this.currentTab = index; //一旦访问data就会出问题
							case 28:case 'end':return _context.stop();}}}, _callee, this);}));function bindChange(_x) {return _ref.apply(this, arguments);}return bindChange;}(),
		getWidth: function getWidth(id) {//得到元素的宽高
			return new Promise(function (res, rej) {
				uni.createSelectorQuery().select("#" + id).fields({
					size: true,
					scrollOffset: true },
				function (data) {
					if (id === 'tab-bar') {
						console.log("id=", id, "数据:", data);
					}
					res(data);
				}).exec();
			});
		},
		swichNav: function () {var _ref2 = _asyncToGenerator( /*#__PURE__*/_regenerator2.default.mark(function _callee2(e) {var tabBar, tabBarScrollLeft;return _regenerator2.default.wrap(function _callee2$(_context2) {while (1) {switch (_context2.prev = _context2.next) {case 0:if (!(
								this.currentTab === e.target.dataset.current)) {_context2.next = 4;break;}return _context2.abrupt('return',
								false);case 4:_context2.next = 6;return (

									this.getWidth("tab-bar"));case 6:tabBar = _context2.sent;
								tabBarScrollLeft = tabBar.scrollLeft; //点击的时候记录并设置scrollLeft
								this.scrollLeft = tabBarScrollLeft;
								this.isClickChange = true;
								this.currentTab = e.target.dataset.current;case 11:case 'end':return _context2.stop();}}}, _callee2, this);}));function swichNav(_x2) {return _ref2.apply(this, arguments);}return swichNav;}(),


		loadMore: function loadMore(e) {
			var last = this.newsitems[e][this.newsitems[e].length - 1].label,
			name = this.newsitems[e][this.newsitems[e].length - 1].name;
			for (var i = 1; i <= 10; i++) {
				this.newsitems[e].push({
					name: name,
					label: i + last });

			}
		},
		randomfn: function randomfn() {
			var ary = [];
			for (var i = 0, length = this.tabs.length; i < length; i++) {
				var aryItem = [];
				for (var j = 1; j <= 20; j++) {
					aryItem.push({
						name: this.tabs[i].name,
						label: j });

				}
				ary.push(aryItem);
			}
			return ary;
		} } };

/***/ }),

/***/ 370:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 85:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_node_modules_babel_loader_babelrc_false_retainLines_true_presets_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_node_modules_babel_preset_env_modules_commonjs_targets_browsers_1_last_2_versions_not_ie_8_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_node_modules_babel_preset_stage_2_plugins_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_node_modules_babel_plugin_transform_runtime_helpers_false_polyfill_false_regenerator_true_moduleName_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_node_modules_babel_runtime_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_lib_uni_loader_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_lib_preprocessor_loader_js_type_js_context_APP_PLUS_true_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_lib_mpvue_loader_lib_selector_type_script_index_0_tabbar_vue__ = __webpack_require__(351);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_node_modules_babel_loader_babelrc_false_retainLines_true_presets_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_node_modules_babel_preset_env_modules_commonjs_targets_browsers_1_last_2_versions_not_ie_8_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_node_modules_babel_preset_stage_2_plugins_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_node_modules_babel_plugin_transform_runtime_helpers_false_polyfill_false_regenerator_true_moduleName_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_node_modules_babel_runtime_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_lib_uni_loader_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_lib_preprocessor_loader_js_type_js_context_APP_PLUS_true_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_lib_mpvue_loader_lib_selector_type_script_index_0_tabbar_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_node_modules_babel_loader_babelrc_false_retainLines_true_presets_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_node_modules_babel_preset_env_modules_commonjs_targets_browsers_1_last_2_versions_not_ie_8_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_node_modules_babel_preset_stage_2_plugins_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_node_modules_babel_plugin_transform_runtime_helpers_false_polyfill_false_regenerator_true_moduleName_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_node_modules_babel_runtime_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_lib_uni_loader_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_lib_preprocessor_loader_js_type_js_context_APP_PLUS_true_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_lib_mpvue_loader_lib_selector_type_script_index_0_tabbar_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_lib_mpvue_loader_lib_template_compiler_index_id_data_v_1772d90e_hasScoped_false_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_lib_preprocessor_loader_js_type_html_context_APP_PLUS_true_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_lib_mpvue_loader_lib_selector_type_template_index_0_tabbar_vue__ = __webpack_require__(107);
function injectStyle (ssrContext) {
  __webpack_require__(370)
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
  __WEBPACK_IMPORTED_MODULE_0__Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_node_modules_babel_loader_babelrc_false_retainLines_true_presets_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_node_modules_babel_preset_env_modules_commonjs_targets_browsers_1_last_2_versions_not_ie_8_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_node_modules_babel_preset_stage_2_plugins_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_node_modules_babel_plugin_transform_runtime_helpers_false_polyfill_false_regenerator_true_moduleName_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_node_modules_babel_runtime_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_lib_uni_loader_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_lib_preprocessor_loader_js_type_js_context_APP_PLUS_true_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_lib_mpvue_loader_lib_selector_type_script_index_0_tabbar_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_lib_mpvue_loader_lib_template_compiler_index_id_data_v_1772d90e_hasScoped_false_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_lib_preprocessor_loader_js_type_html_context_APP_PLUS_true_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_lib_mpvue_loader_lib_selector_type_template_index_0_tabbar_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ })

},[262]);