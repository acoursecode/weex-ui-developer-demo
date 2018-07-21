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
/******/ 	return __webpack_require__(__webpack_require__.s = 47);
/******/ })
/************************************************************************/
/******/ ({

/***/ 4:
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(5)
)

/* script */
__vue_exports__ = __webpack_require__(6)

/* template */
var __vue_template__ = __webpack_require__(7)
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
__vue_options__.__file = "/Users/emohacker/weex/weex-ui-developer/src/component/tab.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-ef6bf22c"
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

/***/ 47:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _tab = __webpack_require__(4);

var _tab2 = _interopRequireDefault(_tab);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_tab2.default.el = '#root';
new Vue(_tab2.default);

/***/ }),

/***/ 5:
/***/ (function(module, exports) {

module.exports = {
  "ui-tab": {
    "flexDirection": "row",
    "height": "88",
    "flexWrap": "nowrap",
    "//borderBottomWidth": "1",
    "//borderBottomColor": "#E9E9E9",
    "//borderBottomStyle": "solid"
  },
  "ui-tab-item": {
    "marginLeft": "25",
    "marginRight": "25",
    "justifyContent": "center",
    "position": "relative"
  },
  "tab-indicator": {
    "content": "\"\"",
    "position": "absolute",
    "left": "0",
    "bottom": 0,
    "right": "0",
    "height": "4",
    "backgroundImage": "linear-gradient(to right, #E6BC5C,rgba(255, 217, 128, 0.99))"
  },
  "item-text": {
    "textAlign": "center",
    "fontSize": "32"
  },
  "item-text-active": {
    "color": "#E6B035"
  },
  "tab-btn": {
    "position": "absolute",
    "right": "30",
    "top": "60"
  },
  "tab-scroller": {
    "flexDirection": "row",
    "position": "fixed",
    "top": "0",
    "width": "750",
    "height": "89",
    "zIndex": 2,
    "backgroundColor": "#ffffff"
  },
  "line": {
    "position": "fixed",
    "top": "88",
    "left": 0,
    "width": "750",
    "height": "1",
    "backgroundColor": "#E9E9E9"
  }
}

/***/ }),

/***/ 6:
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

var bbc = new BroadcastChannel('game-list');
exports.default = {
    data: function data() {
        return {
            list: ['热门', '角色', '射击', '卡牌', '策略', '动作', '竞技'],
            tabIndex: 0
        };
    },

    created: function created() {
        var that = this;
        bbc.onmessage = function (event) {

            // that.changeTab(event.data.currentPage);
        };
    },
    methods: {
        changeTab: function changeTab(index) {
            this.tabIndex = index;
        }
    }
};

/***/ }),

/***/ 7:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('scroller', {
    staticClass: ["tab-scroller"],
    attrs: {
      "scrollDirection": "horizontal",
      "showScrollbar": "false"
    }
  }, [_c('div', {
    staticClass: ["line"]
  }), _c('div', {
    staticClass: ["ui-tab"]
  }, _vm._l((_vm.list), function(item, index) {
    return _c('div', {
      ref: 'tabItem' + index,
      refInFor: true,
      staticClass: ["ui-tab-item"]
    }, [_c('text', {
      staticClass: ["item-text"],
      class: _vm.tabIndex == index ? ['item-text-active'] : [''],
      on: {
        "click": function($event) {
          _vm.changeTab(index)
        }
      }
    }, [_vm._v(_vm._s(item))]), (_vm.tabIndex == index) ? _c('div', {
      staticClass: ["tab-indicator"]
    }) : _vm._e()])
  }))])])
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ })

/******/ });