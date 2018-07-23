// { "framework": "Vue"} 

/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 301);
/******/ })
/************************************************************************/
/******/ ({

/***/ 301:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _demo13A = __webpack_require__(34);

var _demo13A2 = _interopRequireDefault(_demo13A);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_demo13A2.default.el = '#root';
new Vue(_demo13A2.default);

/***/ }),

/***/ 34:
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(35)
)

/* script */
__vue_exports__ = __webpack_require__(36)

/* template */
var __vue_template__ = __webpack_require__(37)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "/Users/emohacker/weex/weex-ui-developer/src/page/demo1-3-a.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-4a4bc051"
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

module.exports = __vue_exports__


/***/ }),

/***/ 35:
/***/ (function(module, exports) {

module.exports = {
  "iconfont-http": {
    "fontFamily": "iconfont-http"
  },
  "h2": {
    "marginTop": "30",
    "fontSize": "50",
    "textAlign": "center",
    "height": "110",
    "lineHeight": "110"
  },
  "c2-title": {
    "height": "100",
    "lineHeight": "100",
    "textAlign": "center",
    "backgroundColor": "#777777",
    "color": "#ffffff"
  },
  "grid-2": {
    "flexDirection": "row",
    "justifyContent": "space-between"
  },
  "ui-border-right": {
    "borderRightWidth": "2",
    "borderRightStyle": "solid",
    "borderRightColor": "#ffffff"
  },
  "grid2-item": {
    "width": "375",
    "position": "relative",
    "height": "180"
  }
}

/***/ }),

/***/ 36:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

var modal = weex.requireModule('modal');
exports.default = {
  name: 'App',
  components: {},
  data: function data() {
    return {
      beforeCreateTest: 1,
      createdTest: 0,
      beforeMountTest: 0,
      mountedTest: 0,
      beforeDistroyTest: 0,
      destroyedTest: 0
    };
  },
  beforeCreate: function beforeCreate() {
    var domModule = weex.requireModule("dom");
    domModule.addRule('fontFace', {
      'fontFamily': 'iconfont-http', //注意这里必须是驼峰命名，跟上面的css样式对照
      'src': "url('http://at.alicdn.com/t/font_1469606063_76593.ttf')"
    });
  },
  created: function created() {
    this.createdTest = 1;
  },
  beforeMount: function beforeMount() {
    this.beforeMountTest = 1;
  },
  mounted: function mounted() {
    this.mountedTest = 1;
  },
  beforeDestroy: function beforeDestroy() {
    modal.alert({
      message: 'This is beforeDestroy'
    });
  },
  destroyed: function destroyed() {
    modal.toast({
      message: 'destroyed',
      duration: 3
    });
  }
};

/***/ }),

/***/ 37:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["wrapper"]
  }, [_c('text', {
    staticClass: ["h2"]
  }, [_vm._v("生命周期")]), _vm._m(0), _c('div', {
    staticClass: ["grid-2"]
  }, [_vm._m(1), _c('div', {
    staticClass: ["grid2-item"]
  }, [_c('text', {
    staticClass: ["c2-title"]
  }, [_vm._v(_vm._s(_vm.createdTest))])])]), _c('div', {
    staticClass: ["grid-2"]
  }, [_vm._m(2), _c('div', {
    staticClass: ["grid2-item"]
  }, [_c('text', {
    staticClass: ["c2-title"]
  }, [_vm._v(_vm._s(_vm.beforeMountTest))])])]), _c('div', {
    staticClass: ["grid-2"]
  }, [_vm._m(3), _c('div', {
    staticClass: ["grid2-item"]
  }, [_c('text', {
    staticClass: ["c2-title"]
  }, [_vm._v(_vm._s(_vm.mountedTest))])])]), _c('div', {
    staticClass: ["grid-2"]
  }, [_vm._m(4), _c('div', {
    staticClass: ["grid2-item"]
  }, [_c('text', {
    staticClass: ["c2-title"]
  }, [_vm._v(_vm._s(_vm.beforeDistroyTest))])])]), _c('div', {
    staticClass: ["grid-2"]
  }, [_vm._m(5), _c('div', {
    staticClass: ["grid2-item"]
  }, [_c('text', {
    staticClass: ["c2-title"]
  }, [_vm._v(_vm._s(_vm.destroyedTest))])])])])
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["grid-2"]
  }, [_c('div', {
    staticClass: ["grid2-item"]
  }, [_c('text', {
    staticClass: ["c2-title", "ui-border-right"]
  }, [_vm._v("beforeCreate")])]), _c('div', {
    staticClass: ["grid2-item"]
  }, [_c('text', {
    staticClass: ["c2-title", "iconfont-http"]
  }, [_vm._v("")])])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["grid2-item"]
  }, [_c('text', {
    staticClass: ["c2-title", "ui-border-right"]
  }, [_vm._v("created")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["grid2-item"]
  }, [_c('text', {
    staticClass: ["c2-title", "ui-border-right"]
  }, [_vm._v("beforeMount")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["grid2-item"]
  }, [_c('text', {
    staticClass: ["c2-title", "ui-border-right"]
  }, [_vm._v("mounted")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["grid2-item"]
  }, [_c('text', {
    staticClass: ["c2-title", "ui-border-right"]
  }, [_vm._v("beforeDistroy")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["grid2-item"]
  }, [_c('text', {
    staticClass: ["c2-title", "ui-border-right"]
  }, [_vm._v("destroyed")])])
}]}
module.exports.render._withStripped = true

/***/ })

/******/ });