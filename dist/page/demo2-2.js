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
/******/ 	return __webpack_require__(__webpack_require__.s = 305);
/******/ })
/************************************************************************/
/******/ ({

/***/ 305:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _demo = __webpack_require__(50);

var _demo2 = _interopRequireDefault(_demo);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_demo2.default.el = '#root';
new Vue(_demo2.default);

/***/ }),

/***/ 50:
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(51)
)

/* script */
__vue_exports__ = __webpack_require__(52)

/* template */
var __vue_template__ = __webpack_require__(53)
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
__vue_options__.__file = "/Users/emohacker/weex/weex-ui-developer/src/page/demo2-2.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-5a381d7d"
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

/***/ 51:
/***/ (function(module, exports) {

module.exports = {
  "btn": {
    "width": "300",
    "height": "120",
    "backgroundColor": "#000000"
  },
  "btn-txt": {
    "color": "#ffffff",
    "textAlign": "center",
    "height": "120",
    "fontSize": "40",
    "lineHeight": "120"
  },
  "h2": {
    "marginTop": "30",
    "fontSize": "50",
    "textAlign": "center",
    "height": "110",
    "lineHeight": "110"
  },
  "rotate1": {
    "height": "530",
    "position": "relative"
  },
  "rotate2": {
    "height": "530",
    "position": "relative"
  },
  "animating": {
    "transform": "rotate(720deg)",
    "transitionProperty": "transform",
    "transitionDuration": 2000,
    "transitionDelay": 2000,
    "transitionTimingFunction": "cubic-bezier(0.25,0.1,0.25,1)"
  },
  "@TRANSITION": {
    "animating": {
      "property": "transform",
      "duration": 2000,
      "delay": 2000,
      "timingFunction": "cubic-bezier(0.25,0.1,0.25,1)"
    }
  },
  "juhua1": {
    "position": "absolute",
    "width": "330",
    "height": "330",
    "top": "100",
    "left": "210"
  },
  "juhua2": {
    "position": "absolute",
    "width": "330",
    "height": "330",
    "top": "100",
    "left": "210"
  }
}

/***/ }),

/***/ 52:
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

var modal = weex.requireModule('modal');
var animation = weex.requireModule('animation');
exports.default = {
  name: 'App',
  components: {},
  data: function data() {
    return {
      animating: false
    };
  },
  created: function created() {
    this.createdTest = 1;
  },

  methods: {
    doCssAnimation: function doCssAnimation() {
      modal.toast({
        message: '触发执行CSS动画',
        duration: 1
      });
      this.animating = true;
    },
    doJsAnimation: function doJsAnimation() {
      var juhua = this.$refs.juhua;
      animation.transition(juhua, {
        styles: {
          transform: 'translate(100px, -100px) rotate(720deg)'
        },
        duration: 800, //ms
        timingFunction: 'ease',
        needLayout: false,
        delay: 0 //ms
      }, function () {});
    }
  }
};

/***/ }),

/***/ 53:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["wrapper"]
  }, [_c('div', {
    staticClass: ["btn"],
    on: {
      "click": function($event) {
        _vm.doCssAnimation()
      }
    }
  }, [_c('text', {
    staticClass: ["btn-txt"]
  }, [_vm._v("执行CSS动画")])]), _c('div', {
    staticClass: ["rotate1"]
  }, [_c('image', {
    staticClass: ["juhua1"],
    class: _vm.animating ? 'animating' : '',
    attrs: {
      "src": "https://raw.githubusercontent.com/acoursecode/weex-ui-developer-demo/master/dist/assets/image/juhua.png"
    }
  })]), _c('div', {
    staticClass: ["btn"],
    on: {
      "click": function($event) {
        _vm.doJsAnimation()
      }
    }
  }, [_c('text', {
    staticClass: ["btn-txt"]
  }, [_vm._v("执行JS动画")])]), _c('div', {
    staticClass: ["rotate2"]
  }, [_c('image', {
    ref: "juhua",
    staticClass: ["juhua2"],
    attrs: {
      "src": "https://raw.githubusercontent.com/acoursecode/weex-ui-developer-demo/master/dist/assets/image/juhua.png"
    }
  })])])
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ })

/******/ });