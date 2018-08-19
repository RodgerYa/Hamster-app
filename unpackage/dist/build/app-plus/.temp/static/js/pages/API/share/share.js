global.webpackJsonp([58],{

/***/ 105:
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
  }, [_c('view', {
    staticClass: "page-section-title"
  }, [_vm._v("分享内容")]), _vm._v(" "), _c('view', {
    staticClass: "page-section"
  }, [_c('view', {
    staticClass: "textarea-wrp"
  }, [_c('textarea', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.shareText),
      expression: "shareText"
    }],
    staticClass: "textarea",
    attrs: {
      "eventid": '0'
    },
    domProps: {
      "value": (_vm.shareText)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.shareText = $event.target.value
      }
    }
  })])]), _vm._v(" "), _c('view', {
    staticClass: "page-section-title"
  }, [_vm._v("分享图片：")]), _vm._v(" "), _c('view', {
    staticClass: "page-section"
  }, [_c('view', {
    staticClass: "uni-uploader-body"
  }, [(!_vm.image) ? _c('view', {
    staticClass: "uni-uploader__input-box",
    attrs: {
      "eventid": '1'
    },
    on: {
      "tap": _vm.chooseImage
    }
  }) : _vm._e(), _vm._v(" "), (_vm.image) ? _c('image', {
    staticClass: "uni-uploader__img",
    attrs: {
      "src": _vm.image
    }
  }) : _vm._e()])]), _vm._v(" "), _c('view', {
    staticClass: "page-section-title"
  }, [_vm._v("分享类型：")]), _vm._v(" "), _c('view', {
    staticClass: "page-section"
  }, [_c('view', {
    staticClass: "uni-uploader-body"
  }, [_c('radio-group', {
    attrs: {
      "eventid": '2',
      "mpcomid": '1'
    },
    on: {
      "change": _vm.radioChange
    }
  }, [_c('label', {
    staticClass: "radio"
  }, [_c('radio', {
    attrs: {
      "value": "1",
      "checked": "true"
    }
  }), _vm._v("文字\n\t\t\t\t\t")], 1), _vm._v(" "), _c('label', {
    staticClass: "radio"
  }, [_c('radio', {
    attrs: {
      "value": "2"
    }
  }), _vm._v("图片\n\t\t\t\t\t")], 1), _vm._v(" "), _c('label', {
    staticClass: "radio"
  }, [_c('radio', {
    attrs: {
      "value": "0"
    }
  }), _vm._v("图文\n\t\t\t\t\t")], 1), _vm._v(" "), _c('label', {
    staticClass: "radio"
  }, [_c('radio', {
    attrs: {
      "value": "5"
    }
  }), _vm._v("小程序\n\t\t\t\t\t")], 1)], 1)], 1)]), _vm._v(" "), (_vm.providerList.length > 0) ? _c('view', {
    staticClass: "btn-area"
  }, _vm._l((_vm.providerList), function(value, index) {
    return _c('block', {
      key: index
    }, [(value) ? _c('button', {
      attrs: {
        "type": "primary",
        "disabled": _vm.shareType === 5 && value.name !== '分享到微信好友',
        "eventid": '3-' + index
      },
      on: {
        "tap": function($event) {
          _vm.share(value)
        }
      }
    }, [_vm._v(_vm._s(value.name))]) : _vm._e()], 1)
  })) : _vm._e()])], 1)
}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ 212:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

var _vue = __webpack_require__(1);var _vue2 = _interopRequireDefault(_vue);
var _share = __webpack_require__(35);var _share2 = _interopRequireDefault(_share);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}var uni = __webpack_require__(0).default;
var app = new _vue2.default(_share2.default);
app.$mount();exports.default =

{
	config: { "navigationBarTitleText": "分享" } };

/***/ }),

/***/ 301:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });var _regenerator = __webpack_require__(5);var _regenerator2 = _interopRequireDefault(_regenerator);




















































var _pageHead = __webpack_require__(3);var _pageHead2 = _interopRequireDefault(_pageHead);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function _asyncToGenerator(fn) {return function () {var gen = fn.apply(this, arguments);return new Promise(function (resolve, reject) {function step(key, arg) {try {var info = gen[key](arg);var value = info.value;} catch (error) {reject(error);return;}if (info.done) {resolve(value);} else {return Promise.resolve(value).then(function (value) {step("next", value);}, function (err) {step("throw", err);});}}return step("next");});};}var uni = __webpack_require__(0).default;exports.default =

{
	data: function data() {
		return {
			title: 'share',
			shareText: 'uni-app可以同时发布成原生App、微信小程序，邀请你一起体验！',
			href: "https://uniapp.dcloud.io",
			image: '',
			shareType: 1,
			providerList: [] };

	},
	onShareAppMessage: function onShareAppMessage() {
		return {
			title: this.shareText ? this.shareText : "欢迎体验uni-app",
			path: '/pages/component/component',
			imageUrl: this.image ? this.image : 'https://img-cdn-qiniu.dcloud.net.cn/uniapp/app/share-logo@3.png' };

	},
	onUnload: function onUnload() {
		this.shareText = 'uni-app可以同时发布成原生App、微信小程序，邀请你一起体验！',
		this.href = "https://uniapp.dcloud.io",
		this.image = '';
	},
	onLoad: function onLoad() {var _this = this;
		uni.getProvider({
			service: "share",
			success: function success(e) {
				console.log("success", e);
				var data = [];
				for (var i = 0; i < e.provider.length; i++) {
					switch (e.provider[i]) {
						case 'weixin':
							data.push({
								name: '分享到微信好友',
								id: 'weixin',
								sort: 0 });

							data.push({
								name: '分享到微信朋友圈',
								id: 'weixin',
								type: 'WXSenceTimeline',
								sort: 1 });

							break;
						case 'sinaweibo':
							data.push({
								name: '分享到新浪微博',
								id: 'sinaweibo',
								sort: 2 });

							break;
						case 'qq':
							data.push({
								name: '分享到QQ',
								id: 'qq',
								sort: 3 });

							break;
						default:
							break;}

				}
				_this.providerList = data.sort(function (x, y) {
					return x.sort - y.sort;
				});
			},
			fail: function fail(e) {
				console.log("获取登录通道失败", e);
				uni.showModal({
					content: "获取登录通道失败",
					showCancel: false });

			} });

	},
	methods: {
		share: function share(e) {var _this2 = this;return _asyncToGenerator( /*#__PURE__*/_regenerator2.default.mark(function _callee() {var shareOPtions;return _regenerator2.default.wrap(function _callee$(_context) {while (1) {switch (_context.prev = _context.next) {case 0:
								console.log("分享通道:" + e.id + "； 分享类型:" + _this2.shareType);if (!(

								!_this2.shareText && (_this2.shareType === 1 || _this2.shareType === 0))) {_context.next = 4;break;}
								uni.showModal({
									content: "分享内容不能为空",
									showCancel: false });return _context.abrupt('return');case 4:if (!(




								!_this2.image && (_this2.shareType === 2 || _this2.shareType === 0))) {_context.next = 7;break;}
								uni.showModal({
									content: "分享图片不能为空",
									showCancel: false });return _context.abrupt('return');case 7:




								shareOPtions = {
									provider: e.id,
									scene: e.type && e.type === 'WXSenceTimeline' ? 'WXSenceTimeline' : "WXSceneSession", //WXSceneSession”分享到聊天界面，“WXSenceTimeline”分享到朋友圈，“WXSceneFavorite”分享到微信收藏     
									type: _this2.shareType,
									success: function success(e) {
										console.log("success", e);
										uni.showModal({
											content: "分享成功",
											showCancel: false });

									},
									fail: function fail(e) {
										console.log("fail", e);
										uni.showModal({
											content: e.errMsg,
											showCancel: false });

									},
									complete: function complete() {
										console.log("分享操作结束!");
									} };_context.t0 =


								_this2.shareType;_context.next = _context.t0 ===
								0 ? 11 : _context.t0 ===





								1 ? 16 : _context.t0 ===


								2 ? 18 : _context.t0 ===


								5 ? 20 : 24;break;case 11:shareOPtions.summary = _this2.shareText;shareOPtions.imageUrl = _this2.image;shareOPtions.title = "欢迎体验uniapp";shareOPtions.href = "http://uniapp.dcloud.io";return _context.abrupt('break', 25);case 16:shareOPtions.summary = _this2.shareText;return _context.abrupt('break', 25);case 18:shareOPtions.imageUrl = _this2.image;return _context.abrupt('break', 25);case 20:
								shareOPtions.imageUrl = _this2.image ? _this2.image : 'https://img-cdn-qiniu.dcloud.net.cn/uniapp/app/share-logo@3.png';
								shareOPtions.title = "欢迎体验uniapp";
								shareOPtions.miniProgram = {
									id: "gh_33446d7f7a26",
									path: "/pages/component/component",
									webUrl: "http://uniapp.dcloud.io",
									type: 0 };return _context.abrupt('break', 25);case 24:return _context.abrupt('break', 25);case 25:if (!(






								shareOPtions.type === 0 && plus.os.name === 'iOS')) {_context.next = 29;break;}_context.next = 28;return (
									_this2.compress());case 28:shareOPtions.imageUrl = _context.sent;case 29:

								if (shareOPtions.type === 1 && shareOPtions.provider === 'qq') {//如果是分享文字到qq，则必须加上href和title
									shareOPtions.href = "http://uniapp.dcloud.io";
									shareOPtions.title = "欢迎体验uniapp";
								}
								uni.share(shareOPtions);case 31:case 'end':return _context.stop();}}}, _callee, _this2);}))();
		},
		radioChange: function radioChange(e) {
			console.log("type:" + e.detail.value);
			this.shareType = parseInt(e.detail.value);
		},
		chooseImage: function chooseImage() {var _this3 = this;
			uni.chooseImage({
				count: 1,
				sourceType: ['album', 'camera'],
				sizeType: ['compressed', 'original'],
				success: function success(res) {
					_this3.image = res.tempFilePaths[0];
				} });

		},
		compress: function compress() {//压缩图片 图文分享要求分享图片大小不能超过20Kb
			console.log("开始压缩");
			var img = this.image;
			return new Promise(function (res) {
				var localPath = plus.io.convertAbsoluteFileSystem(img.replace('file://', ''));
				console.log('after' + localPath);
				// 压缩size
				plus.io.resolveLocalFileSystemURL(localPath, function (entry) {
					entry.file(function (file) {// 可通过entry对象操作图片 
						console.log("getFile:" + JSON.stringify(file));
						if (file.size > 20480) {// 压缩后size 大于20Kb
							plus.zip.compressImage({
								src: img,
								dst: img.replace('.jpg', '2222.jpg').replace('.JPG', '2222.JPG'),
								width: '10%',
								height: '10%',
								quality: 1,
								overwrite: true },
							function (event) {
								console.log('success zip****' + event.size);
								var newImg = img.replace('.jpg', '2222.jpg').replace('.JPG', '2222.JPG');
								res(newImg);
							}, function (error) {
								uni.showModal({
									content: "分享图片太大,需要请重新选择图片!",
									showCancel: false });

							});
						}
					});
				}, function (e) {
					console.log("Resolve file URL failed: " + e.message);
					uni.showModal({
						content: "分享图片太大,需要请重新选择图片!",
						showCancel: false });

				});
			});
		} },

	components: {
		pageHead: _pageHead2.default } };

/***/ }),

/***/ 35:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_node_modules_babel_loader_babelrc_false_retainLines_true_presets_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_node_modules_babel_preset_env_modules_commonjs_targets_browsers_1_last_2_versions_not_ie_8_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_node_modules_babel_preset_stage_2_plugins_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_node_modules_babel_plugin_transform_runtime_helpers_false_polyfill_false_regenerator_true_moduleName_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_node_modules_babel_runtime_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_lib_uni_loader_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_lib_preprocessor_loader_js_type_js_context_APP_PLUS_true_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_lib_mpvue_loader_lib_selector_type_script_index_0_share_vue__ = __webpack_require__(301);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_node_modules_babel_loader_babelrc_false_retainLines_true_presets_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_node_modules_babel_preset_env_modules_commonjs_targets_browsers_1_last_2_versions_not_ie_8_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_node_modules_babel_preset_stage_2_plugins_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_node_modules_babel_plugin_transform_runtime_helpers_false_polyfill_false_regenerator_true_moduleName_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_node_modules_babel_runtime_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_lib_uni_loader_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_lib_preprocessor_loader_js_type_js_context_APP_PLUS_true_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_lib_mpvue_loader_lib_selector_type_script_index_0_share_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_node_modules_babel_loader_babelrc_false_retainLines_true_presets_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_node_modules_babel_preset_env_modules_commonjs_targets_browsers_1_last_2_versions_not_ie_8_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_node_modules_babel_preset_stage_2_plugins_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_node_modules_babel_plugin_transform_runtime_helpers_false_polyfill_false_regenerator_true_moduleName_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_node_modules_babel_runtime_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_lib_uni_loader_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_lib_preprocessor_loader_js_type_js_context_APP_PLUS_true_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_lib_mpvue_loader_lib_selector_type_script_index_0_share_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_lib_mpvue_loader_lib_template_compiler_index_id_data_v_12e7bd16_hasScoped_false_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_lib_preprocessor_loader_js_type_html_context_APP_PLUS_true_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_lib_mpvue_loader_lib_selector_type_template_index_0_share_vue__ = __webpack_require__(105);
function injectStyle (ssrContext) {
  __webpack_require__(368)
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
  __WEBPACK_IMPORTED_MODULE_0__Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_node_modules_babel_loader_babelrc_false_retainLines_true_presets_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_node_modules_babel_preset_env_modules_commonjs_targets_browsers_1_last_2_versions_not_ie_8_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_node_modules_babel_preset_stage_2_plugins_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_node_modules_babel_plugin_transform_runtime_helpers_false_polyfill_false_regenerator_true_moduleName_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_node_modules_babel_runtime_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_lib_uni_loader_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_lib_preprocessor_loader_js_type_js_context_APP_PLUS_true_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_lib_mpvue_loader_lib_selector_type_script_index_0_share_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_lib_mpvue_loader_lib_template_compiler_index_id_data_v_12e7bd16_hasScoped_false_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_lib_preprocessor_loader_js_type_html_context_APP_PLUS_true_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_lib_mpvue_loader_lib_selector_type_template_index_0_share_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 368:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })

},[212]);