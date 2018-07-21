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
/******/ 	return __webpack_require__(__webpack_require__.s = 55);
/******/ })
/************************************************************************/
/******/ ({

/***/ 16:
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(17)
)

/* script */
__vue_exports__ = __webpack_require__(18)

/* template */
var __vue_template__ = __webpack_require__(19)
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
__vue_options__.__file = "/Users/emohacker/weex/weex-ui-developer/src/page/demo1-2-c.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-1581b412"
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

/***/ 17:
/***/ (function(module, exports) {

module.exports = {
  "h2": {
    "marginTop": "30",
    "fontSize": "50",
    "textAlign": "center",
    "height": "110",
    "lineHeight": "110"
  },
  "z": {
    "width": "400",
    "height": "400",
    "position": "relative",
    "backgroundColor": "#eeeeee"
  },
  "block": {
    "width": "200",
    "height": "200",
    "position": "absolute"
  },
  "a": {
    "left": "10",
    "top": "10",
    "backgroundColor": "#ff9300"
  },
  "b": {
    "left": "160",
    "top": "160",
    "backgroundColor": "#e60012"
  },
  "c": {
    "left": "310",
    "top": "310",
    "backgroundColor": "#00a0e9"
  },
  "t": {
    "fontSize": "50",
    "width": "200",
    "height": "200",
    "lineHeight": "200",
    "textAlign": "center"
  }
}

/***/ }),

/***/ 18:
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

exports.default = {
  name: 'App',
  components: {},
  data: function data() {
    return {
      images: []
    };
  },
  mounted: function mounted() {
    this.images = [{ url: 'http://placeholder.qiniudn.com/260x260' }, { url: 'http://placeholder.qiniudn.com/260x260' }, { url: 'http://placeholder.qiniudn.com/260x260' }];
  }
};

/***/ }),

/***/ 19:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _vm._m(0)
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["wrapper"]
  }, [_c('text', {
    staticClass: ["h2"]
  }, [_vm._v("层级关系 z-index")]), _c('div', {
    staticClass: ["z"]
  }, [_c('div', {
    staticClass: ["block", "a"]
  }, [_c('text', {
    staticClass: ["t"]
  }, [_vm._v("A")])]), _c('div', {
    staticClass: ["block", "b"]
  }, [_c('text', {
    staticClass: ["t"]
  }, [_vm._v("B")])]), _c('div', {
    staticClass: ["block", "c"]
  }, [_c('text', {
    staticClass: ["t"]
  }, [_vm._v("C")])])])])
}]}
module.exports.render._withStripped = true

/***/ }),

/***/ 55:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _demo12C = __webpack_require__(16);

var _demo12C2 = _interopRequireDefault(_demo12C);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_demo12C2.default.el = '#root';
new Vue(_demo12C2.default);

/***/ })

/******/ });