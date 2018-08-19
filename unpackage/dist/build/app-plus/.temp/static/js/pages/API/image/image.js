global.webpackJsonp([72],{

/***/ 152:
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
  }, [_c('form', [_c('view', {
    staticClass: "page-section"
  }, [_c('view', {
    staticClass: "uni-list"
  }, [_c('view', {
    staticClass: "uni-list-cell"
  }, [_c('view', {
    staticClass: "uni-list-cell-left"
  }, [_c('view', {
    staticClass: "uni-label"
  }, [_vm._v("图片来源")])]), _vm._v(" "), _c('view', {
    staticClass: "uni-list-cell-right"
  }, [_c('picker', {
    attrs: {
      "range": _vm.sourceType,
      "value": _vm.sourceTypeIndex,
      "mode": "selector",
      "eventid": '0'
    },
    on: {
      "change": _vm.sourceTypeChange
    }
  }, [_c('view', {
    staticClass: "uni-input"
  }, [_vm._v(_vm._s(_vm.sourceType[_vm.sourceTypeIndex]))])])], 1)]), _vm._v(" "), _c('view', {
    staticClass: "uni-list-cell"
  }, [_c('view', {
    staticClass: "uni-list-cell-left"
  }, [_c('view', {
    staticClass: "uni-label"
  }, [_vm._v("数量限制")])]), _vm._v(" "), _c('view', {
    staticClass: "uni-list-cell-right"
  }, [_c('picker', {
    attrs: {
      "range": _vm.count,
      "mode": "selector",
      "eventid": '1'
    },
    on: {
      "change": _vm.countChange
    }
  }, [_c('view', {
    staticClass: "uni-input"
  }, [_vm._v(_vm._s(_vm.count[_vm.countIndex]))])])], 1)])]), _vm._v(" "), _c('view', {
    staticClass: "uni-list list-pd"
  }, [_c('view', {
    staticClass: "uni-list-cell cell-pd"
  }, [_c('view', {
    staticClass: "uni-uploader"
  }, [_c('view', {
    staticClass: "uni-uploader-head"
  }, [_c('view', {
    staticClass: "uni-uploader-title"
  }, [_vm._v("点击可预览选好的图片")]), _vm._v(" "), _c('view', {
    staticClass: "uni-uploader-info"
  }, [_vm._v(_vm._s(_vm.imageList.length) + "/9")])]), _vm._v(" "), _c('view', {
    staticClass: "uni-uploader-body"
  }, [_c('view', {
    staticClass: "uni-uploader__files"
  }, _vm._l((_vm.imageList), function(image, index) {
    return _c('block', {
      key: index
    }, [_c('view', {
      staticClass: "uni-uploader__file"
    }, [_c('image', {
      staticClass: "uni-uploader__img",
      attrs: {
        "src": image,
        "data-src": image,
        "eventid": '2-' + index
      },
      on: {
        "tap": _vm.previewImage
      }
    })])])
  })), _vm._v(" "), _c('view', {
    staticClass: "uni-uploader__input-box"
  }, [_c('view', {
    staticClass: "uni-uploader__input",
    attrs: {
      "eventid": '3'
    },
    on: {
      "tap": _vm.chooseImage
    }
  })])])])])])])])], 1)], 1)
}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ 198:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

var _vue = __webpack_require__(1);var _vue2 = _interopRequireDefault(_vue);
var _image = __webpack_require__(21);var _image2 = _interopRequireDefault(_image);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}var uni = __webpack_require__(0).default;
var app = new _vue2.default(_image2.default);
app.$mount();exports.default =

{
	config: { "navigationBarTitleText": "图片" } };

/***/ }),

/***/ 21:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_node_modules_babel_loader_babelrc_false_retainLines_true_presets_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_node_modules_babel_preset_env_modules_commonjs_targets_browsers_1_last_2_versions_not_ie_8_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_node_modules_babel_preset_stage_2_plugins_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_node_modules_babel_plugin_transform_runtime_helpers_false_polyfill_false_regenerator_true_moduleName_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_node_modules_babel_runtime_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_lib_uni_loader_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_lib_preprocessor_loader_js_type_js_context_APP_PLUS_true_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_lib_mpvue_loader_lib_selector_type_script_index_0_image_vue__ = __webpack_require__(287);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_node_modules_babel_loader_babelrc_false_retainLines_true_presets_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_node_modules_babel_preset_env_modules_commonjs_targets_browsers_1_last_2_versions_not_ie_8_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_node_modules_babel_preset_stage_2_plugins_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_node_modules_babel_plugin_transform_runtime_helpers_false_polyfill_false_regenerator_true_moduleName_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_node_modules_babel_runtime_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_lib_uni_loader_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_lib_preprocessor_loader_js_type_js_context_APP_PLUS_true_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_lib_mpvue_loader_lib_selector_type_script_index_0_image_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_node_modules_babel_loader_babelrc_false_retainLines_true_presets_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_node_modules_babel_preset_env_modules_commonjs_targets_browsers_1_last_2_versions_not_ie_8_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_node_modules_babel_preset_stage_2_plugins_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_node_modules_babel_plugin_transform_runtime_helpers_false_polyfill_false_regenerator_true_moduleName_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_node_modules_babel_runtime_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_lib_uni_loader_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_lib_preprocessor_loader_js_type_js_context_APP_PLUS_true_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_lib_mpvue_loader_lib_selector_type_script_index_0_image_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_lib_mpvue_loader_lib_template_compiler_index_id_data_v_6206b1e4_hasScoped_false_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_lib_preprocessor_loader_js_type_html_context_APP_PLUS_true_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_lib_mpvue_loader_lib_selector_type_template_index_0_image_vue__ = __webpack_require__(152);
function injectStyle (ssrContext) {
  __webpack_require__(415)
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
  __WEBPACK_IMPORTED_MODULE_0__Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_node_modules_babel_loader_babelrc_false_retainLines_true_presets_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_node_modules_babel_preset_env_modules_commonjs_targets_browsers_1_last_2_versions_not_ie_8_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_node_modules_babel_preset_stage_2_plugins_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_node_modules_babel_plugin_transform_runtime_helpers_false_polyfill_false_regenerator_true_moduleName_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_node_modules_babel_runtime_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_lib_uni_loader_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_lib_preprocessor_loader_js_type_js_context_APP_PLUS_true_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_lib_mpvue_loader_lib_selector_type_script_index_0_image_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_lib_mpvue_loader_lib_template_compiler_index_id_data_v_6206b1e4_hasScoped_false_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_lib_preprocessor_loader_js_type_html_context_APP_PLUS_true_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_lib_mpvue_loader_lib_selector_type_template_index_0_image_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 287:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });var _regenerator = __webpack_require__(5);var _regenerator2 = _interopRequireDefault(_regenerator);






































































var _pageHead = __webpack_require__(3);var _pageHead2 = _interopRequireDefault(_pageHead);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function _asyncToGenerator(fn) {return function () {var gen = fn.apply(this, arguments);return new Promise(function (resolve, reject) {function step(key, arg) {try {var info = gen[key](arg);var value = info.value;} catch (error) {reject(error);return;}if (info.done) {resolve(value);} else {return Promise.resolve(value).then(function (value) {step("next", value);}, function (err) {step("throw", err);});}}return step("next");});};}var uni = __webpack_require__(0).default;

var sourceType = [
['camera'],
['album'],
['camera', 'album']];

var sizeType = [
['compressed'],
['original'],
['compressed', 'original']];exports.default =

{
	data: function data() {
		return {
			title: 'choose/previewImage',
			imageList: [],
			sourceTypeIndex: 2,
			sourceType: ['拍照', '相册', '拍照或相册'],
			sizeTypeIndex: 2,
			sizeType: ['压缩', '原图', '压缩或原图'],
			countIndex: 8,
			count: [1, 2, 3, 4, 5, 6, 7, 8, 9] };

	},
	onUnload: function onUnload() {
		this.imageList = [],
		this.sourceTypeIndex = 2,
		this.sourceType = ['拍照', '相册', '拍照或相册'],
		this.sizeTypeIndex = 2,
		this.sizeType = ['压缩', '原图', '压缩或原图'],
		this.countIndex = 8;
	},
	methods: {
		sourceTypeChange: function sourceTypeChange(e) {
			this.sourceTypeIndex = e.target.value;
		},
		sizeTypeChange: function sizeTypeChange(e) {
			this.sizeTypeIndex = e.target.value;
		},
		countChange: function countChange(e) {
			this.countIndex = e.target.value;
		},
		chooseImage: function () {var _ref = _asyncToGenerator( /*#__PURE__*/_regenerator2.default.mark(function _callee() {var _this = this;var isContinue;return _regenerator2.default.wrap(function _callee$(_context) {while (1) {switch (_context.prev = _context.next) {case 0:if (!(
								this.imageList.length === 9)) {_context.next = 7;break;}_context.next = 3;return (
									this.isFullImg());case 3:isContinue = _context.sent;
								console.log("是否继续?", isContinue);if (
								isContinue) {_context.next = 7;break;}return _context.abrupt('return');case 7:



								uni.chooseImage({
									sourceType: sourceType[this.sourceTypeIndex],



									count: this.imageList.length + this.count[this.countIndex] > 9 ? 9 - this.imageList.length : this.count[this.countIndex],
									success: function success(res) {
										_this.imageList = _this.imageList.concat(res.tempFilePaths);
									} });case 8:case 'end':return _context.stop();}}}, _callee, this);}));function chooseImage() {return _ref.apply(this, arguments);}return chooseImage;}(),


		isFullImg: function isFullImg() {var _this2 = this;
			return new Promise(function (res) {
				uni.showModal({
					content: "已经有9张图片了,是否清空现有图片？",
					success: function success(e) {
						if (e.confirm) {
							_this2.imageList = [];
							res(true);
						} else {
							res(false);
						}
					},
					fail: function fail() {
						res(false);
					} });

			});
		},
		previewImage: function previewImage(e) {
			var current = e.target.dataset.src;
			uni.previewImage({
				current: current,
				urls: this.imageList });

		} },

	components: {
		pageHead: _pageHead2.default } };

/***/ }),

/***/ 415:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })

},[198]);