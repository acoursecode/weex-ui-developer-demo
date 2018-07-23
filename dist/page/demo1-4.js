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
/******/ 	return __webpack_require__(__webpack_require__.s = 303);
/******/ })
/************************************************************************/
/******/ ({

/***/ 10:
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(11)
)

/* script */
__vue_exports__ = __webpack_require__(12)

/* template */
var __vue_template__ = __webpack_require__(13)
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

/***/ 11:
/***/ (function(module, exports) {

module.exports = {
  "ui-tab": {
    "flexDirection": "row",
    "height": "88",
    "flexWrap": "nowrap"
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
    "top": "100",
    "width": "750",
    "height": "89",
    "zIndex": 2,
    "backgroundColor": "#ffffff"
  },
  "line": {
    "position": "fixed",
    "top": "188",
    "left": 0,
    "width": "750",
    "height": "1",
    "backgroundColor": "#E9E9E9"
  }
}

/***/ }),

/***/ 12:
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
            that.changeTab(event.data.currentPage);
        };
    },
    methods: {
        changeTab: function changeTab(index) {
            this.tabIndex = index;
        }
    }
};

/***/ }),

/***/ 13:
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

/***/ }),

/***/ 303:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _demo = __webpack_require__(42);

var _demo2 = _interopRequireDefault(_demo);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_demo2.default.el = '#root';
new Vue(_demo2.default);

/***/ }),

/***/ 42:
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(43)
)

/* script */
__vue_exports__ = __webpack_require__(44)

/* template */
var __vue_template__ = __webpack_require__(45)
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
__vue_options__.__file = "/Users/emohacker/weex/weex-ui-developer/src/page/demo1-4.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-256e113e"
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

/***/ 43:
/***/ (function(module, exports) {

module.exports = {
  "wrapper-inner": {
    "position": "absolute",
    "top": 0,
    "bottom": 0,
    "width": "750",
    "backgroundColor": "#ffffff"
  }
}

/***/ }),

/***/ 44:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slider = __webpack_require__(6);

var _slider2 = _interopRequireDefault(_slider);

var _tab = __webpack_require__(10);

var _tab2 = _interopRequireDefault(_tab);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//
//
//
//
//
//
//

exports.default = {
  name: 'App',
  components: {
    SliderList: _slider2.default, Tab: _tab2.default
  },
  data: function data() {
    return {
      imageList: []
    };
  },
  created: function created() {
    this.imageList = [{ src: 'https://gd2.alicdn.com/bao/uploaded/i2/T14H1LFwBcXXXXXXXX_!!0-item_pic.jpg' }, { src: 'https://gd1.alicdn.com/bao/uploaded/i1/TB1PXJCJFXXXXciXFXXXXXXXXXX_!!0-item_pic.jpg' }, { src: 'https://gd3.alicdn.com/bao/uploaded/i3/TB1x6hYLXXXXXazXVXXXXXXXXXX_!!0-item_pic.jpg' }];
  }
};

/***/ }),

/***/ 45:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["wrapper-inner"]
  }, [_c('Tab'), _c('SliderList')], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),

/***/ 6:
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(7)
)

/* script */
__vue_exports__ = __webpack_require__(8)

/* template */
var __vue_template__ = __webpack_require__(9)
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
__vue_options__.__file = "/Users/emohacker/weex/weex-ui-developer/src/component/slider.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-6bb6c69c"
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

/***/ 7:
/***/ (function(module, exports) {

module.exports = {
  "ui-list": {
    "width": "750",
    "position": "absolute",
    "top": "0",
    "bottom": "0",
    "left": "0",
    "right": "0"
  },
  "ui-list-cell": {
    "width": "750"
  },
  "ui-list-inner": {
    "display": "flex",
    "borderBottomWidth": "1",
    "borderBottomColor": "#E9E9E9",
    "borderBottomStyle": "solid",
    "marginLeft": "86",
    "position": "relative",
    "paddingTop": "30",
    "paddingBottom": "30",
    "flexDirection": "row",
    "height": "180",
    "//marginLeft": "106"
  },
  "ui-list-thumb": {
    "width": "120",
    "height": "120",
    "marginRight": "20"
  },
  "ui-list-img": {
    "width": "120",
    "height": "120"
  },
  "ui-thumb-img": {
    "width": "120",
    "height": "120"
  },
  "ui-list-info": {
    "display": "flex",
    "justifyContent": "center",
    "flex": 1,
    "paddingRight": "168"
  },
  "info-h3": {
    "color": "#000000",
    "fontSize": "32",
    "lines": 1,
    "textOverflow": "ellipsis"
  },
  "info-p": {
    "color": "#888899",
    "fontSize": "24"
  },
  "ui-btn": {
    "position": "absolute",
    "right": 0,
    "top": "0",
    "width": "128",
    "height": "60",
    "borderRadius": "60",
    "borderWidth": "2",
    "borderColor": "#888899",
    "justifyContent": "center",
    "color": "#888899",
    "background": "transparent",
    "opacity": 1,
    "outline:focus": "none",
    "opacity:active": 0.5
  },
  "ui-btn-text": {
    "fontSize": "24",
    "textAlign": "center"
  },
  "ui-btn-primary": {
    "borderWidth": 0,
    "backgroundImage": "linear-gradient(to right,#FFD980,#E6BC5C)"
  },
  "ui-btn-progress": {
    "position": "absolute",
    "backgroundImage": "none",
    "backgroundColor": "#FFD980",
    "overflow": "hidden",
    "paddingLeft": "2",
    "paddingRight": "2",
    "paddingTop": "2",
    "paddingBottom": "2",
    "alignItems": "center",
    "zIndex": 2
  },
  "btn-progress-inner": {
    "backgroundColor": "#ffffff",
    "position": "absolute",
    "left": "2",
    "top": "2",
    "right": "2",
    "height": "56",
    "borderRadius": "60"
  },
  "btn-progress-bar": {
    "position": "absolute",
    "left": 0,
    "top": 0,
    "height": "60",
    "width": 50,
    "backgroundImage": "linear-gradient(to right,#FFD980,#E6BC5C)",
    "//borderTopLeftRadius": "60",
    "//borderBottomLeftRadius": "60"
  },
  "btn-progress-text": {
    "position": "relative",
    "zIndex": 1,
    "color": "#000000"
  },
  "star-wrap": {
    "flexDirection": "row",
    "alignItems": "center"
  },
  "star": {
    "width": "20",
    "height": "19",
    "marginRight": "3"
  },
  "scroe-text": {
    "fontSize": "24",
    "color": "#E6B035",
    "marginLeft": "10"
  },
  "slider": {
    "position": "absolute",
    "top": "188",
    "bottom": "0",
    "width": "750"
  },
  "list-rank": {
    "width": "86",
    "height": "38",
    "position": "absolute",
    "left": "0",
    "top": "70",
    "alignItems": "center"
  },
  "list-rank-num": {
    "width": "60",
    "fontSize": "32",
    "textAlign": "center"
  },
  "rank-icon": {
    "position": "absolute",
    "width": "30",
    "height": "30",
    "left": "60",
    "top": "4"
  },
  "empty-cell": {
    "width": "750",
    "position": "absolute",
    "top": "0",
    "bottom": "88",
    "left": "0",
    "right": "0",
    "zIndex": 9999,
    "alignItems": "center",
    "justifyContent": "center"
  },
  "btn-position": {
    "position": "absolute",
    "right": "30",
    "top": "60",
    "width": "128",
    "height": "64"
  },
  "wait": {
    "position": "absolute",
    "right": "30",
    "top": "60",
    "width": "128",
    "height": "60",
    "justifyContent": "center",
    "alignItems": "center"
  },
  "wait-text": {
    "fontSize": "28",
    "color": "#b2b2b2"
  }
}

/***/ }),

/***/ 8:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

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

var platform = weex.config.env.platform;

var isWeb = (typeof window === 'undefined' ? 'undefined' : _typeof(window)) === 'object' && platform.toLowerCase() === 'web';
var bbc = new BroadcastChannel('game-list');
exports.default = {
    components: {},
    data: function data() {
        return {
            avatarUrl: 'http://placeholder.qiniudn.com/100x100',
            photoUrl: 'http://placeholder.qiniudn.com/750x422',
            linkImg: {
                up: 'https://raw.githubusercontent.com/acoursecode/weex-ui-developer-demo/master/dist/assets/image/up.png',
                down: 'https://raw.githubusercontent.com/acoursecode/weex-ui-developer-demo/master/dist/assets/image/down.png',
                hold: 'https://raw.githubusercontent.com/acoursecode/weex-ui-developer-demo/master/dist/assets/image/hold.png',
                stared: 'https://raw.githubusercontent.com/acoursecode/weex-ui-developer-demo/master/dist/assets/image/stared.png',
                star: 'https://raw.githubusercontent.com/acoursecode/weex-ui-developer-demo/master/dist/assets/image/star.png',
                placeholderImg: 'https://raw.githubusercontent.com/acoursecode/weex-ui-developer-demo/master/dist/assets/image/game.png'
            },
            isDownload: false,
            btnProgress: 0,
            btnProgressText: this.isDownload ? '0%' : '下载'
        };
    },


    computed: {
        downloadBtnClass: function downloadBtnClass() {
            return this.isDownload ? ['ui-btn', 'ui-btn-primary', 'ui-btn-progress'] : ['ui-btn'];
        },
        downloadBtnTextClass: function downloadBtnTextClass() {
            return this.isDownload ? ['ui-btn-text', 'btn-progress-text'] : ['ui-btn-text'];
        },
        positionStyle: function positionStyle() {
            return weex.config.env.platform == 'android' ? 'absolute' : 'fixed';
        }
    },
    methods: {
        sliderChanged: function sliderChanged(e) {
            bbc.postMessage({ currentPage: e.index });
        },
        downloadGame: function downloadGame() {
            var self = this;
            var btnWidth = isWeb ? 68 : 136;
            self.isDownload = true;
            self.btnProgressText = self.isDownload ? '0%' : '下载';
            var run = setInterval(function () {
                self.btnProgress += 4;
                self.btnProgressText = parseInt(self.btnProgress / btnWidth * 100) + '%';
                if (self.btnProgress == btnWidth) {
                    self.btnProgress = 0;
                    self.isDownload = false;
                    self.btnProgressText = '下载';
                    clearInterval(run);
                }
            }, 50);
        }
    }
};

/***/ }),

/***/ 9:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('slider', {
    staticClass: ["slider"],
    on: {
      "change": _vm.sliderChanged
    }
  }, _vm._l((7), function(v, i) {
    return _c('list', {
      staticClass: ["ui-list"]
    }, _vm._l((16), function(item, index) {
      return _c('cell', {
        staticClass: ["ui-list-cell"],
        appendAsTree: true,
        attrs: {
          "append": "tree"
        }
      }, [_c('div', {
        staticClass: ["list-rank"]
      }, [_c('text', {
        staticClass: ["list-rank-num"]
      }, [_vm._v(_vm._s(1 + index))]), (false) ? _c('div', [(index == 0) ? _c('image', {
        staticClass: ["rank-icon", "rank-up"],
        attrs: {
          "src": _vm.linkImg.up
        }
      }) : _vm._e(), (index == 1) ? _c('image', {
        staticClass: ["rank-icon", "rank-down"],
        attrs: {
          "src": _vm.linkImg.down
        }
      }) : _vm._e(), (index > 1) ? _c('image', {
        staticClass: ["rank-icon", "rank-hold"],
        attrs: {
          "src": _vm.linkImg.hold
        }
      }) : _vm._e()]) : _vm._e()]), _c('div', {
        staticClass: ["ui-list-inner"]
      }, [_c('div', {
        staticClass: ["ui-list-thumb"]
      }, [_c('image', {
        staticClass: ["ui-list-img"],
        attrs: {
          "src": _vm.linkImg.placeholderImg
        }
      })]), _c('div', {
        staticClass: ["ui-list-info"]
      }, [_c('text', {
        staticClass: ["info-h3"]
      }, [_vm._v("全民飞机全民飞机全民飞机全民飞机全民飞机")]), _c('div', {
        staticClass: ["star-wrap"]
      }, [_vm._l((4), function(s, j) {
        return _c('image', {
          staticClass: ["star"],
          attrs: {
            "src": _vm.linkImg.stared
          }
        })
      }), _c('image', {
        staticClass: ["star"],
        attrs: {
          "src": _vm.linkImg.star
        }
      }), _c('text', {
        staticClass: ["scroe-text"]
      }, [_vm._v("9.2分")])], 2), _c('text', {
        staticClass: ["info-p"]
      }, [_vm._v("293881人已安装")])]), (index == 3) ? _c('div', {
        staticClass: ["wait"]
      }, [_c('text', {
        staticClass: ["wait-text"]
      }, [_vm._v("敬请期待")])]) : _c('div', {
        staticClass: ["btn-position"]
      }, [(index != 2) ? _c('div', {
        staticClass: ["ui-btn"]
      }, [_c('text', {
        staticClass: ["ui-btn-text"]
      }, [_vm._v("下载")])]) : _vm._e(), (index === 2) ? _c('div', {
        class: _vm.downloadBtnClass,
        on: {
          "click": _vm.downloadGame
        }
      }, [(_vm.isDownload) ? _c('div', {
        staticClass: ["btn-progress-inner"]
      }) : _vm._e(), (_vm.isDownload) ? _c('div', {
        staticClass: ["btn-progress-bar"],
        style: {
          width: _vm.btnProgress + 'px'
        }
      }) : _vm._e(), _c('text', {
        class: _vm.downloadBtnTextClass
      }, [_vm._v(_vm._s(_vm.btnProgressText))])]) : _vm._e()])])])
    }))
  }))
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ })

/******/ });