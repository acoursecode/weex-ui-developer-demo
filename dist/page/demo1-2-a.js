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
/******/ 	return __webpack_require__(__webpack_require__.s = 53);
/******/ })
/************************************************************************/
/******/ ({

/***/ 10:
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
//
//

exports.default = {
  name: 'Demo12A'
};

/***/ }),

/***/ 11:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _vm._m(0)
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('scroller', {
    staticClass: ["wrapper"]
  }, [_c('text', {
    staticClass: ["h2"]
  }, [_vm._v("传统web思路（错误示范）")]), _c('div', {
    staticClass: ["grid-3", "grid-3-web"]
  }, [_c('div', {
    staticClass: ["grid-item-web"]
  }, [_c('div', {
    staticClass: ["inner"]
  }, [_c('div', {
    staticClass: ["t"]
  }, [_vm._v("A")])])]), _c('div', {
    staticClass: ["grid-item-web"]
  }, [_c('div', {
    staticClass: ["inner"]
  }, [_c('div', {
    staticClass: ["t"]
  }, [_vm._v("B")])])]), _c('div', {
    staticClass: ["grid-item-web"]
  }, [_c('div', {
    staticClass: ["inner"]
  }, [_c('div', {
    staticClass: ["t"]
  }, [_vm._v("C")])])])]), _c('text', {
    staticClass: ["h2"]
  }, [_vm._v("Flex布局 - 宫格布局")]), _c('div', {
    staticClass: ["grid-3", "grid-3-normal"]
  }, [_c('text', {
    staticClass: ["grid-item", "grid-item-normal"]
  }, [_vm._v("A")]), _c('text', {
    staticClass: ["grid-item", "grid-item-normal"]
  }, [_vm._v("B")]), _c('text', {
    staticClass: ["grid-item", "grid-item-normal"]
  }, [_vm._v("C")])]), _c('text', {
    staticClass: ["h2"]
  }, [_vm._v("Flex布局 - 宫格布局 间距不固定")]), _c('div', {
    staticClass: ["grid-3", "grid-3-equal"]
  }, [_c('text', {
    staticClass: ["grid-item", "grid-item-equal"]
  }, [_vm._v("A")]), _c('text', {
    staticClass: ["grid-item", "grid-item-equal"]
  }, [_vm._v("B")]), _c('text', {
    staticClass: ["grid-item", "grid-item-equal"]
  }, [_vm._v("C")])]), _c('text', {
    staticClass: ["h2"]
  }, [_vm._v("子项目居中对齐")]), _c('div', {
    staticClass: ["list-row"]
  }, [_c('image', {
    staticClass: ["list-row-avatar"],
    attrs: {
      "src": "http://placeholder.qiniudn.com/200x200"
    }
  }), _c('div', {
    staticClass: ["list-row-info"]
  }, [_c('text', {
    staticClass: ["list-row-title"]
  }, [_vm._v("主标题文案")]), _c('text', {
    staticClass: ["list-row-subtitle"]
  }, [_vm._v("副标题文案副标题文案")])]), _c('text', {
    staticClass: ["list-row-btn"]
  }, [_vm._v("下载")])]), _c('text', {
    staticClass: ["h2"]
  }, [_vm._v("Flex布局 - 9宫格")]), _c('div', {
    staticClass: ["grid-3", "grid-3-equal", "grid-3-equal-wrap"]
  }, [_c('text', {
    staticClass: ["grid-item", "grid-item-equal"]
  }, [_vm._v("1")]), _c('text', {
    staticClass: ["grid-item", "grid-item-equal"]
  }, [_vm._v("2")]), _c('text', {
    staticClass: ["grid-item", "grid-item-equal"]
  }, [_vm._v("3")]), _c('text', {
    staticClass: ["grid-item", "grid-item-equal"]
  }, [_vm._v("4")]), _c('text', {
    staticClass: ["grid-item", "grid-item-equal"]
  }, [_vm._v("5")]), _c('text', {
    staticClass: ["grid-item", "grid-item-equal"]
  }, [_vm._v("6")]), _c('text', {
    staticClass: ["grid-item", "grid-item-equal"]
  }, [_vm._v("7")]), _c('text', {
    staticClass: ["grid-item", "grid-item-equal"]
  }, [_vm._v("8")]), _c('text', {
    staticClass: ["grid-item", "grid-item-equal"]
  }, [_vm._v("9")])])])
}]}
module.exports.render._withStripped = true

/***/ }),

/***/ 53:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _demo12A = __webpack_require__(8);

var _demo12A2 = _interopRequireDefault(_demo12A);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_demo12A2.default.el = '#root';
new Vue(_demo12A2.default);

/***/ }),

/***/ 8:
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(9)
)

/* script */
__vue_exports__ = __webpack_require__(10)

/* template */
var __vue_template__ = __webpack_require__(11)
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
__vue_options__.__file = "/Users/emohacker/weex/weex-ui-developer/src/page/demo1-2-a.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-15658510"
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

/***/ 9:
/***/ (function(module, exports) {

module.exports = {
  "h2": {
    "fontSize": "50",
    "textAlign": "center",
    "height": "110",
    "lineHeight": "110"
  },
  "grid-3": {
    "paddingTop": "20",
    "flexDirection": "row"
  },
  "grid-item-web": {
    "width": 33.33
  },
  "grid-item": {
    "textAlign": "center",
    "width": "247",
    "height": "247",
    "lineHeight": "247",
    "fontSize": "100",
    "backgroundColor": "#000000",
    "color": "#ffffff",
    "marginBottom": "4"
  },
  "grid-3-normal": {
    "marginLeft": "-4"
  },
  "grid-item-normal": {
    "marginLeft": "4"
  },
  "grid-3-equal": {
    "marginLeft": 0,
    "justifyContent": "space-between"
  },
  "list-row": {
    "height": "188",
    "position": "relative",
    "paddingLeft": "188",
    "borderTopWidth": "1",
    "borderTopStyle": "solid",
    "borderTopColor": "#aaaaaa",
    "borderBottomWidth": "1",
    "borderBottomStyle": "solid",
    "borderBottomColor": "#aaaaaa",
    "flexDirection": "row",
    "justifyContent": "space-between",
    "alignItems": "center"
  },
  "list-row-avatar": {
    "width": "140",
    "height": "140",
    "position": "absolute",
    "left": "24",
    "top": "24"
  },
  "list-row-btn": {
    "width": "120",
    "height": "60",
    "textAlign": "center",
    "lineHeight": "60",
    "fontSize": "28",
    "borderRadius": "4",
    "marginRight": "24",
    "borderWidth": "1",
    "borderStyle": "solid",
    "borderColor": "#aaaaaa"
  },
  "list-row-title": {
    "fontSize": "30"
  },
  "list-row-subtitle": {
    "fontSize": "24",
    "color": "#777777"
  },
  "grid-3-equal-wrap": {
    "flexWrap": "wrap",
    "height": "750"
  }
}

/***/ })

/******/ });