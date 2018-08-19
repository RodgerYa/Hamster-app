global.webpackJsonp([8],{

/***/ 166:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('view', {
    staticClass: "page"
  }, [_c('view', {
    staticClass: "feedback-title"
  }, [_c('text', [_vm._v("问题和意见")]), _vm._v(" "), _c('text', {
    staticClass: "feedback-quick",
    attrs: {
      "eventid": '0'
    },
    on: {
      "tap": _vm.chooseMsg
    }
  }, [_vm._v("快速键入")])]), _vm._v(" "), _c('view', {
    staticClass: "feedback-body"
  }, [_c('textarea', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.sendDate.content),
      expression: "sendDate.content"
    }],
    staticClass: "feedback-textare",
    attrs: {
      "auto-focus": "true",
      "placeholder": "请详细描述你的问题和意见...",
      "eventid": '1'
    },
    domProps: {
      "value": (_vm.sendDate.content)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.sendDate.content = $event.target.value
      }
    }
  })]), _vm._v(" "), _vm._m(0), _vm._v(" "), _c('view', {
    staticClass: "feedback-body feedback-uploader"
  }, [_c('view', {
    staticClass: "uni-uploader"
  }, [_c('view', {
    staticClass: "uni-uploader-head"
  }, [_c('view', {
    staticClass: "uni-uploader-title"
  }, [_vm._v("点击预览图片")]), _vm._v(" "), _c('view', {
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
      "tap": _vm.chooseImg
    }
  })])])])]), _vm._v(" "), _vm._m(1), _vm._v(" "), _c('view', {
    staticClass: "feedback-body"
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.sendDate.contact),
      expression: "sendDate.contact"
    }],
    staticClass: "feedback-input",
    attrs: {
      "placeholder": "(选填,方便我们联系你 )",
      "eventid": '4'
    },
    domProps: {
      "value": (_vm.sendDate.contact)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.sendDate.contact = $event.target.value
      }
    }
  })]), _vm._v(" "), _c('view', {
    staticClass: "feedback-title feedback-star-view"
  }, [_c('text', [_vm._v("应用评分")]), _vm._v(" "), _c('view', {
    staticClass: "feedback-star-view"
  }, _vm._l((_vm.stars), function(value, key) {
    return _c('text', {
      key: key,
      staticClass: "feedback-star",
      class: key < _vm.sendDate.score ? 'active' : '',
      attrs: {
        "eventid": '5-' + key
      },
      on: {
        "tap": function($event) {
          _vm.chooseStar(value)
        }
      }
    })
  }))]), _vm._v(" "), _c('button', {
    staticClass: "feedback-submit",
    attrs: {
      "type": "primary",
      "eventid": '6'
    },
    on: {
      "tap": _vm.send
    }
  }, [_vm._v("提交")]), _vm._v(" "), _vm._m(2)], 1)
}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('view', {
    staticClass: "feedback-title"
  }, [_c('text', [_vm._v("图片(选填,提供问题截图,总大小10M以下)")])])
},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('view', {
    staticClass: "feedback-title"
  }, [_c('text', [_vm._v("QQ/邮箱")])])
},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('view', {
    staticClass: "feedback-title"
  }, [_c('text', [_vm._v("用户反馈的结果可在app打包后于DCloud开发者中心查看")])])
}]
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ 264:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

var _vue = __webpack_require__(1);var _vue2 = _interopRequireDefault(_vue);
var _feedback = __webpack_require__(87);var _feedback2 = _interopRequireDefault(_feedback);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}var uni = __webpack_require__(0).default;
var app = new _vue2.default(_feedback2.default);
app.$mount();exports.default =

{
	config: { "navigationBarTitleText": "问题反馈" } };

/***/ }),

/***/ 353:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });var uni = __webpack_require__(0).default;exports.default =



















































{
	data: {
		msgContents: ["界面显示错乱", "启动缓慢，卡出翔了", "UI无法直视，丑哭了", "偶发性崩溃"],
		stars: [1, 2, 3, 4, 5],
		imageList: [],
		sendDate: {
			score: 0,
			content: "",
			contact: "" } },


	onUnload: function onUnload() {
		this.imageList = [];
		this.sendDate = {
			score: 0,
			content: "",
			contact: "" };

	},
	onLoad: function onLoad() {
		var deviceInfo = {
			appid: plus.runtime.appid,
			imei: plus.device.imei, //设备标识
			p: plus.os.name === 'Android' ? 'a' : 'i', //平台类型，i表示iOS平台，a表示Android平台。
			md: plus.device.model, //设备型号
			app_version: plus.runtime.version,
			plus_version: plus.runtime.innerVersion, //基座版本号
			os: plus.os.version,
			net: '' + plus.networkinfo.getCurrentType() };

		this.sendDate = Object.assign(deviceInfo, this.sendDate);
	},
	methods: {
		chooseMsg: function chooseMsg() {var _this = this; //快速输入
			uni.showActionSheet({
				itemList: this.msgContents,
				success: function success(res) {
					_this.sendDate.content = _this.msgContents[res.tapIndex];
				} });

		},
		chooseImg: function chooseImg() {var _this2 = this; //选择图片
			uni.chooseImage({
				sourceType: ['camera', 'album'],
				sizeType: "compressed",
				count: 9,
				success: function success(res) {
					_this2.imageList = res.tempFilePaths;
				} });

		},
		chooseStar: function chooseStar(e) {//点击评星
			this.sendDate.score = e;
		},
		previewImage: function previewImage() {//预览图片
			uni.previewImage({
				urls: this.imageList });

		},
		send: function send() {var _this3 = this; //发送反馈
			console.log(this.sendDate);
			var imgs = this.imageList.map(function (value) {
				return {
					name: "uni-app.feedback",
					uri: value };

			});
			console.log(imgs);
			uni.uploadFile({
				url: 'https://service.dcloud.net.cn/feedback',
				files: imgs,
				formData: this.sendDate,
				success: function success(res) {
					if (res.statusCode === 200) {
						uni.showToast({
							title: "反馈成功!" });

						_this3.imageList = [];
						_this3.sendDate = {
							score: 0,
							content: "",
							contact: "" };

					}
				},
				fail: function fail(res) {
					console.log(res);
				} });

		} } };

/***/ }),

/***/ 430:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 87:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_node_modules_babel_loader_babelrc_false_retainLines_true_presets_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_node_modules_babel_preset_env_modules_commonjs_targets_browsers_1_last_2_versions_not_ie_8_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_node_modules_babel_preset_stage_2_plugins_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_node_modules_babel_plugin_transform_runtime_helpers_false_polyfill_false_regenerator_true_moduleName_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_node_modules_babel_runtime_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_lib_uni_loader_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_lib_preprocessor_loader_js_type_js_context_APP_PLUS_true_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_lib_mpvue_loader_lib_selector_type_script_index_0_feedback_vue__ = __webpack_require__(353);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_node_modules_babel_loader_babelrc_false_retainLines_true_presets_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_node_modules_babel_preset_env_modules_commonjs_targets_browsers_1_last_2_versions_not_ie_8_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_node_modules_babel_preset_stage_2_plugins_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_node_modules_babel_plugin_transform_runtime_helpers_false_polyfill_false_regenerator_true_moduleName_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_node_modules_babel_runtime_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_lib_uni_loader_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_lib_preprocessor_loader_js_type_js_context_APP_PLUS_true_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_lib_mpvue_loader_lib_selector_type_script_index_0_feedback_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_node_modules_babel_loader_babelrc_false_retainLines_true_presets_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_node_modules_babel_preset_env_modules_commonjs_targets_browsers_1_last_2_versions_not_ie_8_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_node_modules_babel_preset_stage_2_plugins_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_node_modules_babel_plugin_transform_runtime_helpers_false_polyfill_false_regenerator_true_moduleName_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_node_modules_babel_runtime_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_lib_uni_loader_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_lib_preprocessor_loader_js_type_js_context_APP_PLUS_true_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_lib_mpvue_loader_lib_selector_type_script_index_0_feedback_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_lib_mpvue_loader_lib_template_compiler_index_id_data_v_82fdba44_hasScoped_false_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_lib_preprocessor_loader_js_type_html_context_APP_PLUS_true_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_lib_mpvue_loader_lib_selector_type_template_index_0_feedback_vue__ = __webpack_require__(166);
function injectStyle (ssrContext) {
  __webpack_require__(430)
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
  __WEBPACK_IMPORTED_MODULE_0__Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_node_modules_babel_loader_babelrc_false_retainLines_true_presets_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_node_modules_babel_preset_env_modules_commonjs_targets_browsers_1_last_2_versions_not_ie_8_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_node_modules_babel_preset_stage_2_plugins_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_node_modules_babel_plugin_transform_runtime_helpers_false_polyfill_false_regenerator_true_moduleName_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_node_modules_babel_runtime_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_lib_uni_loader_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_lib_preprocessor_loader_js_type_js_context_APP_PLUS_true_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_lib_mpvue_loader_lib_selector_type_script_index_0_feedback_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_lib_mpvue_loader_lib_template_compiler_index_id_data_v_82fdba44_hasScoped_false_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_lib_preprocessor_loader_js_type_html_context_APP_PLUS_true_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_lib_mpvue_loader_lib_selector_type_template_index_0_feedback_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ })

},[264]);