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
/******/ 	return __webpack_require__(__webpack_require__.s = 66);
/******/ })
/************************************************************************/
/******/ ({

/***/ 40:
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(41)
)

/* script */
__vue_exports__ = __webpack_require__(42)

/* template */
var __vue_template__ = __webpack_require__(44)
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
__vue_options__.__file = "/Users/emohacker/weex/weex-ui-developer/src/page/demo2-3.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-5a4634fe"
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

/***/ 41:
/***/ (function(module, exports) {

module.exports = {
  "container": {
    "flex": 1,
    "backgroundColor": "#eeeeee"
  },
  "border": {
    "height": 1000,
    "paddingLeft": 35,
    "paddingRight": 35,
    "paddingTop": 100
  },
  "box": {
    "width": 680,
    "height": 450,
    "backgroundColor": "#651FFF"
  },
  "head": {
    "backgroundColor": "#651FFF",
    "width": 680,
    "height": 120,
    "flexDirection": "row",
    "alignItems": "center"
  },
  "content": {
    "width": 680,
    "height": 240,
    "backgroundColor": "#651FFF",
    "paddingLeft": 24,
    "paddingTop": 24,
    "paddingRight": 24,
    "boxSizing": "border-box"
  },
  "footer": {
    "width": 680,
    "height": 90,
    "backgroundColor": "#ffffff",
    "alignItems": "center",
    "justifyContent": "flex-end",
    "paddingRight": 25,
    "flexDirection": "row",
    "boxSizing": "border-box"
  },
  "action": {
    "fontSize": 35,
    "paddingRight": 20
  },
  "desc": {
    "fontSize": 32,
    "color": "#ffffff",
    "paddingLeft": 24
  },
  "avatar": {
    "width": 96,
    "height": 96,
    "borderRadius": 48,
    "backgroundColor": "#CDDC39",
    "marginLeft": 36,
    "marginRight": 48
  },
  "username": {
    "color": "#ffffff",
    "fontSize": 32
  }
}

/***/ }),

/***/ 42:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _weexBindingx = __webpack_require__(43);

var _weexBindingx2 = _interopRequireDefault(_weexBindingx);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = {
  data: {
    x: 0,
    y: 0,
    isInAnimation: false,
    gesToken: 0,
    opacity: 1
  },
  methods: {

    getEl: function getEl(e) {
      return e.ref;
    },
    touchStart: function touchStart(e) {
      var self = this;
      if (this.isInAnimation === true) {
        console.log('we are in animation, drop pan gesture...');
        if (this.gesToken) {
          _weexBindingx2.default.unbind({
            eventType: 'pan',
            token: self.gesToken
          });
          this.gesToken = undefined;
        }
        return;
      }

      var my = this.getEl(this.$refs.my);
      var translate_x_origin = 'x+0';

      var opacity_x_origin = '1-abs(x)/600';
      console.log(my);
      var gesTokenObj = _weexBindingx2.default.bind({
        anchor: my,
        eventType: 'pan',
        props: [{
          element: my,
          property: 'transform.translateX',
          expression: translate_x_origin
        }, {
          element: my,
          property: 'opacity',
          expression: opacity_x_origin
        }]
      }, function (e) {
        if (e.state === 'end') {
          self.x += e.deltaX;
          self.y += e.deltaY;
          self.opacity = 1 - Math.abs(e.deltaX) / 600;

          // anim
          self.bindTiming();
        }
      });

      self.gesToken = gesTokenObj.token;
    },
    bindTiming: function bindTiming() {
      this.isInAnimation = true;

      var my = this.getEl(this.$refs.my);
      var self = this;

      // should equal with timing duration
      var exit_origin = 't>1000';

      var changed_x;
      var final_x;

      var final_opacity;

      var translate_x_origin;

      var shouldDismiss = false;

      if (self.x >= -750 / 2 && self.x <= 750 / 2) {

        shouldDismiss = false;
        final_x = 0;
        changed_x = 0 - self.x;
        final_opacity = 1;
        translate_x_origin = 'easeOutElastic(t,' + self.x + ',' + changed_x + ',1000)';
      } else if (self.x < -750 / 2) {
        shouldDismiss = true;
        final_x = -750;
        changed_x = -750 - self.x;
        final_opacity = 0;
        translate_x_origin = 'easeOutExpo(t,' + self.x + ',' + changed_x + ',1000)';
      } else {
        // x > 750/2
        final_x = 750;
        shouldDismiss = true;
        changed_x = 750 - self.x;
        final_opacity = 0;
        translate_x_origin = 'easeOutExpo(t,' + self.x + ',' + changed_x + ',1000)';
      }

      var changed_opacity = final_opacity - self.opacity;
      var opacity_origin = 'linear(t,' + self.opacity + ',' + changed_opacity + ',1000)';

      var result = _weexBindingx2.default.bind({
        eventType: 'timing',
        exitExpression: exit_origin,
        props: [{
          element: my,
          property: 'transform.translateX',
          expression: translate_x_origin
        }, {
          element: my,
          property: 'opacity',
          expression: opacity_origin
        }]

      }, function (e) {
        if (e.state === 'end' || e.state === 'exit') {
          // reset x
          self.x = final_x;
          self.isInAnimation = false;

          if (shouldDismiss) {
            // remove card from hierarchy
          }
        }
      });
    }
  }
}; //
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

/***/ }),

/***/ 43:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var __WEBPACK_AMD_DEFINE_RESULT__;

var _typeof2 = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

!function (t) {
  if ("object" == ( false ? "undefined" : _typeof2(exports)) && "undefined" != typeof module) module.exports = t();else if (true) !(__WEBPACK_AMD_DEFINE_RESULT__ = (function (e, n, r) {
    r.exports = t();
  }).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));else {
    ("undefined" != typeof window ? window : "undefined" != typeof self ? self : "undefined" != typeof global ? global : this).index = t();
  }
}(function () {
  return function (t) {
    var e = {};function n(r) {
      if (e[r]) return e[r].exports;var i = e[r] = { i: r, l: !1, exports: {} };return t[r].call(i.exports, i, i.exports, n), i.l = !0, i.exports;
    }return n.m = t, n.c = e, n.d = function (t, e, r) {
      n.o(t, e) || Object.defineProperty(t, e, { configurable: !1, enumerable: !0, get: r });
    }, n.n = function (t) {
      var e = t && t.__esModule ? function () {
        return t.default;
      } : function () {
        return t;
      };return n.d(e, "a", e), e;
    }, n.o = function (t, e) {
      return Object.prototype.hasOwnProperty.call(t, e);
    }, n.p = "", n(n.s = 0);
  }([function (t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 });var r = "function" == typeof Symbol && "symbol" == _typeof2(Symbol.iterator) ? function (t) {
      return typeof t === "undefined" ? "undefined" : _typeof2(t);
    } : function (t) {
      return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t === "undefined" ? "undefined" : _typeof2(t);
    },
        i = n(1),
        o = n(3);function a(t) {
      try {
        if (void 0 !== ("undefined" == typeof weex ? "undefined" : r(weex)) && weex.requireModule) return weex.requireModule(t);
      } catch (t) {}return window.require("@weex-module/" + t);
    }var s = !0,
        u = !0,
        c = void 0,
        l = {};if (i.isWeb) l = n(4);else {
      try {
        c = a("bindingx"), s = !0;
      } catch (t) {
        s = !1;
      }if (!c || !c.bind) try {
        c = a("binding"), s = !0;
      } catch (t) {
        s = !1;
      }if (!(s = !!(c && c.bind && c.unbind))) try {
        c = a("expressionBinding"), u = !0;
      } catch (t) {
        u = !1;
      }u = !(!c || !c.bind && !c.createBinding);
    }function f(t) {
      if (void 0 !== t) {
        try {
          t = JSON.parse(t);
        } catch (t) {}var e = {};if ("string" == typeof t ? e.origin = t : t && (e.origin = t.origin, e.transformed = t.transformed), e.transformed || e.origin) return e.transformed = e.transformed || (0, o.parse)(e.origin), e;
      }
    }e.default = { isSupportNewBinding: s, isSupportBinding: u, _bindingInstances: [], bind: function bind(t) {
        var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : function () {};if (!t) throw new Error("should pass options for binding");if (t.exitExpression = f(t.exitExpression), t.props && t.props.forEach(function (t) {
          t.expression = f(t.expression);
        }), !i.isWeex) return l.bind(t, e);if (c && u) {
          if (s) return c.bind(t, t && "timing" === t.eventType ? function (t) {
            return function () {
              var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};if ("function" == typeof t) return t({ state: "end" === e.state ? "exit" : e.state, t: void 0 !== e.t ? e.t : e.deltaT });
            };
          }(e) : e);c.enableBinding(t.anchor, t.eventType);var n = t.props.map(function (t) {
            return { element: t.element, property: t.property, expression: t.expression.transformed };
          });c.createBinding(t.anchor, t.eventType, "", n, e);
        }
      }, unbind: function unbind(t) {
        if (!t) throw new Error("should pass options for binding");return i.isWeex ? c && u ? s ? c.unbind(t) : c.disableBinding(t.anchor, t.eventType) : void 0 : l.unbind(t);
      }, unbindAll: function unbindAll() {
        return i.isWeex ? c && u ? s ? c.unbindAll() : c.disableAll() : void 0 : l.unbindAll();
      }, prepare: function prepare(t) {
        if (i.isWeex && c && u) return s ? c.prepare(t) : c.enableBinding(t.anchor, t.eventType);
      }, getComputedStyle: function getComputedStyle(t) {
        return i.isWeex ? s ? c.getComputedStyle(t) : {} : l.getComputedStyle(t);
      } }, t.exports = e.default;
  }, function (t, e, n) {
    "use strict";
    (function (n) {
      Object.defineProperty(e, "__esModule", { value: !0 });var r = "function" == typeof Symbol && "symbol" == _typeof2(Symbol.iterator) ? function (t) {
        return typeof t === "undefined" ? "undefined" : _typeof2(t);
      } : function (t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t === "undefined" ? "undefined" : _typeof2(t);
      };e.isWeb = "object" === ("undefined" == typeof navigator ? "undefined" : r(navigator)) && ("Mozilla" === navigator.appCodeName || "Gecko" === navigator.product), e.isNode = void 0 !== n && !(!n.versions || !n.versions.node), e.isWeex = "function" == typeof callNative || "object" === ("undefined" == typeof WXEnvironment ? "undefined" : r(WXEnvironment)) && "Web" !== WXEnvironment.platform, e.isReactNative = "undefined" != typeof __fbBatchedBridgeConfig;e.default = t.exports, e.default = t.exports;
    }).call(e, n(2));
  }, function (t, e) {
    var n,
        r,
        i = t.exports = {};function o() {
      throw new Error("setTimeout has not been defined");
    }function a() {
      throw new Error("clearTimeout has not been defined");
    }function s(t) {
      if (n === setTimeout) return setTimeout(t, 0);if ((n === o || !n) && setTimeout) return n = setTimeout, setTimeout(t, 0);try {
        return n(t, 0);
      } catch (e) {
        try {
          return n.call(null, t, 0);
        } catch (e) {
          return n.call(this, t, 0);
        }
      }
    }!function () {
      try {
        n = "function" == typeof setTimeout ? setTimeout : o;
      } catch (t) {
        n = o;
      }try {
        r = "function" == typeof clearTimeout ? clearTimeout : a;
      } catch (t) {
        r = a;
      }
    }();var u,
        c = [],
        l = !1,
        f = -1;function p() {
      l && u && (l = !1, u.length ? c = u.concat(c) : f = -1, c.length && h());
    }function h() {
      if (!l) {
        var t = s(p);l = !0;for (var e = c.length; e;) {
          for (u = c, c = []; ++f < e;) {
            u && u[f].run();
          }f = -1, e = c.length;
        }u = null, l = !1, function (t) {
          if (r === clearTimeout) return clearTimeout(t);if ((r === a || !r) && clearTimeout) return r = clearTimeout, clearTimeout(t);try {
            r(t);
          } catch (e) {
            try {
              return r.call(null, t);
            } catch (e) {
              return r.call(this, t);
            }
          }
        }(t);
      }
    }function d(t, e) {
      this.fun = t, this.array = e;
    }function m() {}i.nextTick = function (t) {
      var e = new Array(arguments.length - 1);if (arguments.length > 1) for (var n = 1; n < arguments.length; n++) {
        e[n - 1] = arguments[n];
      }c.push(new d(t, e)), 1 !== c.length || l || s(h);
    }, d.prototype.run = function () {
      this.fun.apply(null, this.array);
    }, i.title = "browser", i.browser = !0, i.env = {}, i.argv = [], i.version = "", i.versions = {}, i.on = m, i.addListener = m, i.once = m, i.off = m, i.removeListener = m, i.removeAllListeners = m, i.emit = m, i.prependListener = m, i.prependOnceListener = m, i.listeners = function (t) {
      return [];
    }, i.binding = function (t) {
      throw new Error("process.binding is not supported");
    }, i.cwd = function () {
      return "/";
    }, i.chdir = function (t) {
      throw new Error("process.chdir is not supported");
    }, i.umask = function () {
      return 0;
    };
  }, function (module, exports, __webpack_require__) {
    !function (t, e) {
      module.exports = e();
    }("undefined" != typeof self && self, function () {
      return function (t) {
        var e = {};function n(r) {
          if (e[r]) return e[r].exports;var i = e[r] = { i: r, l: !1, exports: {} };return t[r].call(i.exports, i, i.exports, n), i.l = !0, i.exports;
        }return n.m = t, n.c = e, n.d = function (t, e, r) {
          n.o(t, e) || Object.defineProperty(t, e, { configurable: !1, enumerable: !0, get: r });
        }, n.n = function (t) {
          var e = t && t.__esModule ? function () {
            return t.default;
          } : function () {
            return t;
          };return n.d(e, "a", e), e;
        }, n.o = function (t, e) {
          return Object.prototype.hasOwnProperty.call(t, e);
        }, n.p = "", n(n.s = 0);
      }([function (module, exports, __webpack_require__) {
        "use strict";
        var _typeof = "function" == typeof Symbol && "symbol" == _typeof2(Symbol.iterator) ? function (t) {
          return typeof t === "undefined" ? "undefined" : _typeof2(t);
        } : function (t) {
          return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t === "undefined" ? "undefined" : _typeof2(t);
        },
            lex = { InputElementDiv: "<WhiteSpace>|<LineTerminator>|<ReservedWord>|<Identifier>|<NumericLiteral>|<Punctuator>|<StringLiteral>", InputElementRegExp: "<WhiteSpace>|<LineTerminator>|<ReservedWord>|<Identifier>|<NumericLiteral>|<Punctuator>|<StringLiteral>", ReservedWord: "<Keyword>|<NullLiteral>|<BooleanLiteral>", WhiteSpace: /[\t\v\f\u0020\u00A0\u1680\u180E\u2000-\u200A\u202F\u205f\u3000\uFEFF]/, LineTerminator: /[\n\r\u2028\u2029]/, Keyword: /new(?![_$a-zA-Z0-9])|void(?![_$a-zA-Z0-9])|delete(?![_$a-zA-Z0-9])|in(?![_$a-zA-Z0-9])|instanceof(?![_$a-zA-Z0-9])|typeof(?![_$a-zA-Z0-9])/, NullLiteral: /null(?![_$a-zA-Z0-9])/, BooleanLiteral: /(?:true|false)(?![_$a-zA-Z0-9])/, Identifier: /[_$a-zA-Z][_$a-zA-Z0-9]*/, Punctuator: /\/|=>|\*\*|>>>=|>>=|<<=|===|!==|>>>|<<|%=|\*=|-=|\+=|<=|>=|==|!=|\^=|\|=|\|\||&&|&=|>>|\+\+|--|\:|}|\*|&|\||\^|!|~|-|\+|\?|%|=|>|<|,|;|\.(?![0-9])|\]|\[|\)|\(|{/, DivPunctuator: /\/=|\//, NumericLiteral: /(?:0[xX][0-9a-fA-F]*|\.[0-9]+|(?:[1-9]+[0-9]*|0)(?:\.[0-9]*|\.)?)(?:[eE][+-]{0,1}[0-9]+)?(?![_$a-zA-Z0-9])/, StringLiteral: /"(?:[^"\n\\\r\u2028\u2029]|\\(?:['"\\bfnrtv\n\r\u2028\u2029]|\r\n)|\\x[0-9a-fA-F]{2}|\\u[0-9a-fA-F]{4}|\\[^0-9ux'"\\bfnrtv\n\\\r\u2028\u2029])*"|'(?:[^'\n\\\r\u2028\u2029]|\\(?:['"\\bfnrtv\n\r\u2028\u2029]|\r\n)|\\x[0-9a-fA-F]{2}|\\u[0-9a-fA-F]{4}|\\[^0-9ux'"\\bfnrtv\n\\\r\u2028\u2029])*'/, RegularExpressionLiteral: /\/(?:\[(?:\\[\s\S]|[^\]])*\]|[^*\/\\\n\r\u2028\u2029]|\\[^\n\r\u2028\u2029])(?:\[(?:\\[\s\S]|[^\]])*\]|[^\/\\\n\r\u2028\u2029]|\\[^\n\r\u2028\u2029])*\/[0-9a-zA-Z]*/ };function XRegExp(t, e, n) {
          var r = [e];var i = function e(i) {
            var o = new RegExp();return o.compile(i.replace(/<([^>]+)>/g, function (n, i) {
              return t[i] ? (r.push(i), t[i] instanceof RegExp ? "(" + t[i].source + ")" : "(" + e(t[i]).source + ")") : "";
            }), n), o;
          }(t[e]);this.exec = function (t) {
            var e = i.exec(t);if (null == e) return null;for (var n = new String(e[0]), o = 0; o < r.length; o++) {
              e[o] && (n[r[o]] = e[o]);
            }return n;
          }, Object.defineProperty(this, "lastIndex", { get: function get() {
              return i.lastIndex;
            }, set: function set(t) {
              i.lastIndex = t;
            } });
        }function LexicalParser() {
          var t,
              e = new XRegExp(lex, "InputElementDiv", "g"),
              n = new XRegExp(lex, "InputElementRegExp", "g");Object.defineProperty(this, "source", { get: function get() {
              return t;
            }, set: function set(r) {
              t = r, e.lastIndex = 0, n.lastIndex = 0;
            } }), this.reset = function () {
            e.lastIndex = 0, n.lastIndex = 0;
          }, this.getNextToken = function (r) {
            var i,
                o = e.lastIndex,
                a = (i = r ? e : n).exec(t);if (a && i.lastIndex - o > a.length) throw new SyntaxError("Unexpected token ILLEGAL");return e.lastIndex = i.lastIndex, n.lastIndex = i.lastIndex, a;
          };
        }var rules = { IdentifierName: [["Identifier"]], Literal: [["NullLiteral"], ["BooleanLiteral"], ["NumericLiteral"], ["StringLiteral"], ["RegularExpressionLiteral"]], PrimaryExpression: [["Identifier"], ["Literal"], ["(", "Expression", ")"]], CallExpression: [["PrimaryExpression", "Arguments"], ["CallExpression", "Arguments"]], Arguments: [["(", ")"], ["(", "ArgumentList", ")"]], ArgumentList: [["ConditionalExpression"], ["ArgumentList", ",", "ConditionalExpression"]], LeftHandSideExpression: [["PrimaryExpression"], ["CallExpression"]], UnaryExpression: [["LeftHandSideExpression"], ["void", "UnaryExpression"], ["+", "UnaryExpression"], ["-", "UnaryExpression"], ["~", "UnaryExpression"], ["!", "UnaryExpression"]], ExponentiationExpression: [["UnaryExpression"], ["ExponentiationExpression", "**", "UnaryExpression"]], MultiplicativeExpression: [["MultiplicativeExpression", "/", "ExponentiationExpression"], ["ExponentiationExpression"], ["MultiplicativeExpression", "*", "ExponentiationExpression"], ["MultiplicativeExpression", "%", "ExponentiationExpression"]], AdditiveExpression: [["MultiplicativeExpression"], ["AdditiveExpression", "+", "MultiplicativeExpression"], ["AdditiveExpression", "-", "MultiplicativeExpression"]], ShiftExpression: [["AdditiveExpression"], ["ShiftExpression", "<<", "AdditiveExpression"], ["ShiftExpression", ">>", "AdditiveExpression"], ["ShiftExpression", ">>>", "AdditiveExpression"]], RelationalExpression: [["ShiftExpression"], ["RelationalExpression", "<", "ShiftExpression"], ["RelationalExpression", ">", "ShiftExpression"], ["RelationalExpression", "<=", "ShiftExpression"], ["RelationalExpression", ">=", "ShiftExpression"], ["RelationalExpression", "instanceof", "ShiftExpression"], ["RelationalExpression", "in", "ShiftExpression"]], EqualityExpression: [["RelationalExpression"], ["EqualityExpression", "==", "RelationalExpression"], ["EqualityExpression", "!=", "RelationalExpression"], ["EqualityExpression", "===", "RelationalExpression"], ["EqualityExpression", "!==", "RelationalExpression"]], BitwiseANDExpression: [["EqualityExpression"], ["BitwiseANDExpression", "&", "EqualityExpression"]], BitwiseXORExpression: [["BitwiseANDExpression"], ["BitwiseXORExpression", "^", "BitwiseANDExpression"]], BitwiseORExpression: [["BitwiseXORExpression"], ["BitwiseORExpression", "|", "BitwiseXORExpression"]], LogicalANDExpression: [["BitwiseORExpression"], ["LogicalANDExpression", "&&", "BitwiseORExpression"]], LogicalORExpression: [["LogicalANDExpression"], ["LogicalORExpression", "||", "LogicalANDExpression"]], ConditionalExpression: [["LogicalORExpression"], ["LogicalORExpression", "?", "LogicalORExpression", ":", "LogicalORExpression"]], Expression: [["ConditionalExpression"], ["Expression", ",", "ConditionalExpression"]], Program: [["Expression"]] };function _Symbol(t, e) {
          this.name = t, this.token = e, this.childNodes = [], this.toString = function (t) {
            if (t || (t = ""), 1 == this.childNodes.length) return this.childNodes[0].toString(t);for (var e = t + this.name + (void 0 != this.token && this.name != this.token ? ":" + this.token : "") + "\n", n = 0; n < this.childNodes.length; n++) {
              e += this.childNodes[n].toString(t + "    ");
            }return e;
          };
        }function SyntacticalParser() {
          var t = { Program: "$" },
              e = {};!function t(n) {
            e[JSON.stringify(n)] = n;for (var r = Object.getOwnPropertyNames(n); r.length;) {
              var i = r.shift();rules[i] && rules[i].forEach(function (t) {
                n[t[0]] || r.push(t[0]);var e = n;t.forEach(function (t) {
                  e[t] || (e[t] = {}), e = e[t];
                }), n[i].$div && (e.$div = !0), e.$reduce = i, e.$count = t.length;
              });
            }for (var o in n) {
              "object" != _typeof(n[o]) || "$" == o.charAt(0) || n[o].$closure || (e[JSON.stringify(n[o])] ? n[o] = e[JSON.stringify(n[o])] : t(n[o]));
            }n.$closure = !0;
          }(t);var n = [],
              r = [t],
              i = t;this.insertSymbol = function (t, e) {
            for (; !i[t.name] && i.$reduce;) {
              for (var o = i.$count, a = new _Symbol(i.$reduce); o--;) {
                a.childNodes.push(n.pop()), r.pop();
              }i = r[r.length - 1], this.insertSymbol(a);
            }if (i = i[t.name], n.push(t), r.push(i), !i) throw new Error();return i.$div;
          }, this.reset = function () {
            i = t, n = [], r = [t];
          }, Object.defineProperty(this, "grammarTree", { get: function get() {
              try {
                for (; i.$reduce;) {
                  for (var t = i.$count, e = new _Symbol(i.$reduce); t--;) {
                    e.childNodes.push(n.pop()), r.pop();
                  }i = r[r.length - 1], this.insertSymbol(e);
                }if (n.length > 0 && i[";"]) return this.insertSymbol(new _Symbol(";", ";")), this.grammarTree;if (1 != n.length || "Program" != n[0].name) throw new Error();
              } catch (t) {
                throw new SyntaxError("Unexpected end of input");
              }return n[0];
            } });
        }function Parser() {
          this.lexicalParser = new LexicalParser(), this.syntacticalParser = new SyntacticalParser();var t = {};["NullLiteral", "BooleanLiteral", "NumericLiteral", "StringLiteral", "RegularExpressionLiteral", "Identifier", "**", "=>", "{", "}", "(", ")", "[", "]", ".", ";", ",", "<", ">", "<=", ">=", "==", "!=", "===", "!==", "+", "-", "*", "%", "++", "--", "<<", ">>", ">>>", "&", "|", "^", "!", "~", "&&", "||", "?", ":", "=", "+=", "-=", "*=", "%=", "<<=", ">>=", ">>>=", "&=", "|=", "^=", "/", "/=", "instanceof", "typeof", "new", "void", "debugger", "this", "delete", "in"].forEach(function (e) {
            Object.defineProperty(t, e, {});
          }), this.reset = function () {
            this.lexicalParser.reset(), this.syntacticalParser.reset();
          }, this.parse = function (e, n) {
            var r,
                i = this,
                o = !1;this.lexicalParser.source = e;for (var a = !1; r = this.lexicalParser.getNextToken(a);) {
              n && n(r);try {
                if (Object.getOwnPropertyNames(r).some(function (e) {
                  return !!t.hasOwnProperty(e) && (a = i.syntacticalParser.insertSymbol(new _Symbol(e, r), o), o = !1, !0);
                })) continue;(r.Keyword || r.Punctuator || r.DivPunctuator) && t.hasOwnProperty(r.toString()) && (a = this.syntacticalParser.insertSymbol(new _Symbol(r.toString(), r), o));
              } catch (t) {
                throw new SyntaxError("Unexpected token " + r);
              }
            }return this.syntacticalParser.grammarTree;
          };
        }var parser = new Parser();function JavaScriptExpression(text) {
          parser.reset(), this.tree = parser.parse(text), this.paths = [];var context = Object.create(null),
              me = this,
              pathIndex = Object.create(null);function checkSimple(t) {
            for (var e = t; e.childNodes.length <= 1 && "MemberExpression" !== e.name;) {
              e = e.childNodes[0];
            }"MemberExpression" === e.name ? me.isSimple = !0 : me.isSimple = !1;
          }function walk(t) {
            if ("CallExpression" === t.name && "CallExpression" !== t.childNodes[t.childNodes.length - 1].name) {
              getPath(t.childNodes[1]);walk(t.childNodes[0]);
            } else if ("NewExpression" === t.name && 1 === t.childNodes.length) getPath(t.childNodes[0]);else if ("MemberExpression" === t.name && 1 === t.childNodes.length) getPath(t);else for (var e = 0; e < t.childNodes.length; e++) {
              walk(t.childNodes[e]);
            }
          }function getPath(t) {
            var e;if ("IdentifierName" === t.childNodes[0].name) return (e = getPath(t.childNodes[2])) && (e = e.concat(t.childNodes[0].childNodes[0].token.toString())), createPath(e), e;if ("PrimaryExpression" === t.childNodes[0].name) return "Identifier" === t.childNodes[0].childNodes[0].name ? (createPath(e = [t.childNodes[0].childNodes[0].token.toString()]), e) : null;if ("]" === t.childNodes[0].name) return getPath(t.childNodes[3]), walk(t.childNodes[1]), null;if ("Arguments" === t.childNodes[0].name) return walk(t.childNodes[0]), walk(t.childNodes[1]), null;for (var n = 0; n < t.childNodes.length; n++) {
              walk(t.childNodes[n]);
            }
          }function createPath(t) {
            for (var e = context, n = 0; n < t.length - 1; n++) {
              e[t[n]] || (e[t[n]] = Object.create(null)), e = e[t[n]];
            }me.paths.push(t), pathIndex[t.join(".")] = !1;
          }this.isSimple, this.isConst, walk(this.tree), checkSimple(this.tree), 0 === this.paths.length && (this.isConst = !0), this.setter = function (t) {
            for (var e = context, n = 0; n < t.length - 1; n++) {
              e[t[n]] || (e[t[n]] = Object.create(null)), e = e[t[n]];
            }return { isCompleted: function isCompleted() {
                for (var t in pathIndex) {
                  if (!pathIndex[t]) return !1;
                }return !0;
              }, set: function set(r) {
                return pathIndex[t.join(".")] || (pathIndex[t.join(".")] = !0), e[t[n]] = r, this.isCompleted() ? me.exec() : void 0;
              } };
          }, this.valueOf = this.exec = function () {
            try {
              return function () {
                return eval(text);
              }.call(context);
            } catch (t) {}
          };
        }function visit(t) {
          var e,
              n = t.childNodes.slice().reverse(),
              r = n.filter(function (t) {
            return !t.token || !t.token.Punctuator;
          });if ("UnaryExpression" === t.name && 2 === n.length && "-" === n[0].name && 1 === r.length) return (e = visit(r[0])).value = -e.value, e;if ("Arguments" === t.name) {
            for (var i = [], o = r[0]; o;) {
              3 === o.childNodes.length && (i.unshift(o.childNodes[0]), o = o.childNodes[2]), 1 === o.childNodes.length && (i.unshift(o.childNodes[0]), o = null);
            }return { type: "Arguments", children: i.map(function (t) {
                return visit(t);
              }) };
          }if (r && 1 === r.length) return e = visit(r[0]);if (t.token && ["NullLiteral", "BooleanLiteral", "NumericLiteral", "StringLiteral", "Identifier"].some(function (e) {
            return t.token[e];
          })) {
            var a = Object.keys(t.token).filter(function (t) {
              return t.match(/Literal/) || t.match(/Identifier/);
            })[0];return { type: a, value: { NullLiteral: null, BooleanLiteral: Boolean(t.token), NumericLiteral: Number(t.token), StringLiteral: t.token, Identifier: t.token }[a] };
          }return "CallExpression" === t.name ? { type: "CallExpression", children: [visit(n[0]), visit(n[1])] } : { type: n.filter(function (t) {
              return t.token && t.token.Punctuator;
            })[0].name, children: n.filter(function (t) {
              return !t.token || !t.token.Punctuator;
            }).map(function (t) {
              return visit(t);
            }) };
        }function parse(t) {
          var e = new JavaScriptExpression(t);return JSON.stringify(visit(e.tree), null);
        }module.exports = { parse: parse };
      }]);
    });
  }, function (t, e, n) {
    !function (e, n) {
      t.exports = n();
    }("undefined" != typeof self && self, function () {
      return function (t) {
        var e = {};function n(r) {
          if (e[r]) return e[r].exports;var i = e[r] = { i: r, l: !1, exports: {} };return t[r].call(i.exports, i, i.exports, n), i.l = !0, i.exports;
        }return n.m = t, n.c = e, n.d = function (t, e, r) {
          n.o(t, e) || Object.defineProperty(t, e, { configurable: !1, enumerable: !0, get: r });
        }, n.n = function (t) {
          var e = t && t.__esModule ? function () {
            return t.default;
          } : function () {
            return t;
          };return n.d(e, "a", e), e;
        }, n.o = function (t, e) {
          return Object.prototype.hasOwnProperty.call(t, e);
        }, n.p = "", n(n.s = 8);
      }([function (t, e, n) {
        "use strict";
        /*
        object-assign
        (c) Sindre Sorhus
        @license MIT
        */
        var r = Object.getOwnPropertySymbols,
            i = Object.prototype.hasOwnProperty,
            o = Object.prototype.propertyIsEnumerable;t.exports = function () {
          try {
            if (!Object.assign) return !1;var t = new String("abc");if (t[5] = "de", "5" === Object.getOwnPropertyNames(t)[0]) return !1;for (var e = {}, n = 0; n < 10; n++) {
              e["_" + String.fromCharCode(n)] = n;
            }if ("0123456789" !== Object.getOwnPropertyNames(e).map(function (t) {
              return e[t];
            }).join("")) return !1;var r = {};return "abcdefghijklmnopqrst".split("").forEach(function (t) {
              r[t] = t;
            }), "abcdefghijklmnopqrst" === Object.keys(Object.assign({}, r)).join("");
          } catch (t) {
            return !1;
          }
        }() ? Object.assign : function (t, e) {
          for (var n, a, s = function (t) {
            if (null === t || void 0 === t) throw new TypeError("Object.assign cannot be called with null or undefined");return Object(t);
          }(t), u = 1; u < arguments.length; u++) {
            for (var c in n = Object(arguments[u])) {
              i.call(n, c) && (s[c] = n[c]);
            }if (r) {
              a = r(n);for (var l = 0; l < a.length; l++) {
                o.call(n, a[l]) && (s[a[l]] = n[a[l]]);
              }
            }
          }return s;
        };
      }, function (t, e, n) {
        !function (e, n) {
          t.exports = n();
        }("undefined" != typeof self && self, function () {
          return function (t) {
            var e = {};function n(r) {
              if (e[r]) return e[r].exports;var i = e[r] = { i: r, l: !1, exports: {} };return t[r].call(i.exports, i, i.exports, n), i.l = !0, i.exports;
            }return n.m = t, n.c = e, n.d = function (t, e, r) {
              n.o(t, e) || Object.defineProperty(t, e, { configurable: !1, enumerable: !0, get: r });
            }, n.n = function (t) {
              var e = t && t.__esModule ? function () {
                return t.default;
              } : function () {
                return t;
              };return n.d(e, "a", e), e;
            }, n.o = function (t, e) {
              return Object.prototype.hasOwnProperty.call(t, e);
            }, n.p = "", n(n.s = 0);
          }([function (t, e, n) {
            "use strict";
            function r(t, e) {
              if (t instanceof Array) return Array.prototype.map.call(t, e);var n = [];return i(t, function (t, r) {
                n.push(e(t, r));
              }), n;
            }function i(t, e) {
              if (t instanceof Array) return Array.prototype.forEach.call(t, e);Object.keys(t).forEach(function (n) {
                e(t[n], n);
              });
            }function o(t, e) {
              var n = null;return i(t, function (t, r) {
                if ("function" == typeof e) e(t, r) && (n = t);else {
                  var i = Object.keys(e)[0];i && t[i] === e[i] && (n = t);
                }
              }), n;
            }t.exports = { find: o, forEach: i, map: r, filter: function filter(t, e) {
                var n = [];return i(t, function (t, r) {
                  e(t, r) && n.push(t);
                }), n;
              }, dropWhile: function dropWhile(t, e) {
                var n = [];return r(t, function (t, r) {
                  e(t, r) || n.push(t);
                }), n;
              }, findIndex: function findIndex(t, e) {
                return t.indexOf(o(t, e));
              } };
          }]);
        });
      }, function (t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", { value: !0 });var r = function () {
          return function (t, e) {
            if (Array.isArray(t)) return t;if (Symbol.iterator in Object(t)) return function (t, e) {
              var n = [],
                  r = !0,
                  i = !1,
                  o = void 0;try {
                for (var a, s = t[Symbol.iterator](); !(r = (a = s.next()).done) && (n.push(a.value), !e || n.length !== e); r = !0) {}
              } catch (t) {
                i = !0, o = t;
              } finally {
                try {
                  !r && s.return && s.return();
                } finally {
                  if (i) throw o;
                }
              }return n;
            }(t, e);throw new TypeError("Invalid attempt to destructure non-iterable instance");
          };
        }();function i(t) {
          return t / document.body.clientWidth * 750;
        }var o = function () {
          for (var t = document.createElement("div").style, e = ["t", "webkitT", "MozT", "msT", "OT"], n = 0, r = e.length; n < r; n++) {
            if (e[n] + "ransform" in t) return e[n].substr(0, e[n].length - 1);
          }return !1;
        }();var a = { a: 7, c: 6, h: 1, l: 2, m: 2, q: 4, s: 4, t: 2, v: 1, z: 0 },
            s = /([astvzqmhlc])([^astvzqmhlc]*)/gi;e.matrixToTransformObj = function (t) {
          "none" === t && (t = "matrix(1,0,0,1,0,0)");Math.atan;var e = Math.atan2,
              n = Math.round,
              o = Math.sqrt,
              a = (Math.PI, { skewY: 0, skewX: 0 }),
              s = t.match(/([-+]?[\d\.]+)/g),
              u = r(s, 6),
              c = u[0],
              l = u[1],
              f = u[2],
              p = u[3],
              h = u[4],
              d = u[5];return a.rotate = a.rotateZ = n(e(parseFloat(l), parseFloat(c)) * (180 / Math.PI)) || 0, a.translateX = void 0 !== h ? i(h) : 0, a.translateY = void 0 !== d ? i(d) : 0, a.scaleX = o(c * c + l * l), a.scaleY = o(f * f + p * p), a;
        }, e.pxTo750 = i, e.px = function (t) {
          return t / 750 * document.body.clientWidth;
        }, e.clamp = function (t, e, n) {
          return t < e ? e : t > n ? n : t;
        }, e.prefixStyle = function (t) {
          return !1 !== o && ("" === o ? t : o + t.charAt(0).toUpperCase() + t.substr(1));
        }, e.parseSVGPath = function (t, e) {
          var n = [];return t.replace(s, function (t, e, r) {
            var i = e.toLowerCase();for (r = function (t) {
              var e = t.match(/-?[0-9]*\.?[0-9]+(?:e[-+]?\d+)?/gi);return e ? e.map(Number) : [];
            }(r), "m" === i && r.length > 2 && (n.push([e].concat(r.splice(0, 2))), i = "l", e = "m" === e ? "l" : "L"); r.length >= 0;) {
              if (r.length === a[i]) return r.unshift(e), n.push(r);if (r.length < a[i]) throw new Error("malformed path data");n.push([e].concat(r.splice(0, a[i])));
            }
          }), "function" == typeof e ? n.map(function (t) {
            return t.map(function (t, n) {
              return n > 0 ? e(t) : t;
            });
          }) : n;
        }, e.stringifySVGPath = function (t, e) {
          return "function" == typeof e && (t = t.map(function (t) {
            return t.map(function (t, n) {
              return n > 0 ? e(t) : t;
            });
          })), t.map(function (t) {
            return t.join(" ");
          }).join(" ");
        }, e.interceptSVGPath = function (t, e, n, r) {
          return t && t[e] && (n = [r = (r && r.replace(/'|"/g, "") || t[e][0]).replace(/'|"/g, "")].concat(function (t) {
            if (Array.isArray(t)) {
              for (var e = 0, n = Array(t.length); e < t.length; e++) {
                n[e] = t[e];
              }return n;
            }return Array.from(t);
          }(n)), t[e] = n), t;
        };
      }, function (t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", { value: !0 });var r = function () {
          function t(t, e) {
            for (var n = 0; n < e.length; n++) {
              var r = e[n];r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r);
            }
          }return function (e, n, r) {
            return n && t(e.prototype, n), r && t(e, r), e;
          };
        }(),
            i = function (t) {
          return t && t.__esModule ? t : { default: t };
        }(n(1)),
            o = n(2);var a = function () {
          function t(e) {
            !function (t, e) {
              if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
            }(this, t), this.binding = null, this.binding = e;var n = e.options.props;i.default.map(n, function (t) {
              var e = t.element,
                  n = t.config;n && e && (n.perspective && e.parentNode && (e.parentNode.style[(0, o.prefixStyle)("transformStyle")] = "preserve-3d", e.parentNode.style[(0, o.prefixStyle)("perspective")] = n.perspective + "px", e.parentNode.style[(0, o.prefixStyle)("perspectiveOrigin")] = "0 0"), n.transformOrigin && (e.style[(0, o.prefixStyle)("transformOrigin")] = n.transformOrigin));
            });
          }return r(t, [{ key: "destroy", value: function value() {} }]), t;
        }();e.default = a;
      }, function (t, e, n) {
        !function (e, n) {
          t.exports = n();
        }(0, function () {
          return function (t) {
            var e = {};function n(r) {
              if (e[r]) return e[r].exports;var i = e[r] = { i: r, l: !1, exports: {} };return t[r].call(i.exports, i, i.exports, n), i.l = !0, i.exports;
            }return n.m = t, n.c = e, n.d = function (t, e, r) {
              n.o(t, e) || Object.defineProperty(t, e, { configurable: !1, enumerable: !0, get: r });
            }, n.n = function (t) {
              var e = t && t.__esModule ? function () {
                return t.default;
              } : function () {
                return t;
              };return n.d(e, "a", e), e;
            }, n.o = function (t, e) {
              return Object.prototype.hasOwnProperty.call(t, e);
            }, n.p = "", n(n.s = 3);
          }([function (t, e, n) {
            "use strict";
            var r = Math.PI,
                i = Math.sin,
                o = Math.cos,
                a = Math.sqrt,
                s = Math.pow,
                u = 1.70158,
                c = 1.525 * u,
                l = 2 * r / 3,
                f = 2 * r / 4.5;function p(t) {
              var e = 7.5625,
                  n = 2.75;return t < 1 / n ? e * t * t : t < 2 / n ? e * (t -= 1.5 / n) * t + .75 : t < 2.5 / n ? e * (t -= 2.25 / n) * t + .9375 : e * (t -= 2.625 / n) * t + .984375;
            }var h = { linear: function linear(t) {
                return t;
              }, easeInQuad: function easeInQuad(t) {
                return t * t;
              }, easeOutQuad: function easeOutQuad(t) {
                return 1 - (1 - t) * (1 - t);
              }, easeInOutQuad: function easeInOutQuad(t) {
                return t < .5 ? 2 * t * t : 1 - s(-2 * t + 2, 2) / 2;
              }, easeInCubic: function easeInCubic(t) {
                return t * t * t;
              }, easeOutCubic: function easeOutCubic(t) {
                return 1 - s(1 - t, 3);
              }, easeInOutCubic: function easeInOutCubic(t) {
                return t < .5 ? 4 * t * t * t : 1 - s(-2 * t + 2, 3) / 2;
              }, easeInQuart: function easeInQuart(t) {
                return t * t * t * t;
              }, easeOutQuart: function easeOutQuart(t) {
                return 1 - s(1 - t, 4);
              }, easeInOutQuart: function easeInOutQuart(t) {
                return t < .5 ? 8 * t * t * t * t : 1 - s(-2 * t + 2, 4) / 2;
              }, easeInQuint: function easeInQuint(t) {
                return t * t * t * t * t;
              }, easeOutQuint: function easeOutQuint(t) {
                return 1 - s(1 - t, 5);
              }, easeInOutQuint: function easeInOutQuint(t) {
                return t < .5 ? 16 * t * t * t * t * t : 1 - s(-2 * t + 2, 5) / 2;
              }, easeInSine: function easeInSine(t) {
                return 1 - o(t * r / 2);
              }, easeOutSine: function easeOutSine(t) {
                return i(t * r / 2);
              }, easeInOutSine: function easeInOutSine(t) {
                return -(o(r * t) - 1) / 2;
              }, easeInExpo: function easeInExpo(t) {
                return 0 === t ? 0 : s(2, 10 * t - 10);
              }, easeOutExpo: function easeOutExpo(t) {
                return 1 === t ? 1 : 1 - s(2, -10 * t);
              }, easeInOutExpo: function easeInOutExpo(t) {
                return 0 === t ? 0 : 1 === t ? 1 : t < .5 ? s(2, 20 * t - 10) / 2 : (2 - s(2, -20 * t + 10)) / 2;
              }, easeInCirc: function easeInCirc(t) {
                return 1 - a(1 - s(t, 2));
              }, easeOutCirc: function easeOutCirc(t) {
                return a(1 - s(t - 1, 2));
              }, easeInOutCirc: function easeInOutCirc(t) {
                return t < .5 ? (1 - a(1 - s(2 * t, 2))) / 2 : (a(1 - s(-2 * t + 2, 2)) + 1) / 2;
              }, easeInElastic: function easeInElastic(t) {
                return 0 === t ? 0 : 1 === t ? 1 : -s(2, 10 * t - 10) * i((10 * t - 10.75) * l);
              }, easeOutElastic: function easeOutElastic(t) {
                return 0 === t ? 0 : 1 === t ? 1 : s(2, -10 * t) * i((10 * t - .75) * l) + 1;
              }, easeInOutElastic: function easeInOutElastic(t) {
                return 0 === t ? 0 : 1 === t ? 1 : t < .5 ? -s(2, 20 * t - 10) * i((20 * t - 11.125) * f) / 2 : s(2, -20 * t + 10) * i((20 * t - 11.125) * f) / 2 + 1;
              }, easeInBack: function easeInBack(t) {
                return 2.70158 * t * t * t - u * t * t;
              }, easeOutBack: function easeOutBack(t) {
                return 1 + 2.70158 * s(t - 1, 3) + u * s(t - 1, 2);
              }, easeInOutBack: function easeInOutBack(t) {
                return t < .5 ? s(2 * t, 2) * (7.189819 * t - c) / 2 : (s(2 * t - 2, 2) * ((c + 1) * (2 * t - 2) + c) + 2) / 2;
              }, easeInBounce: function easeInBounce(t) {
                return 1 - p(1 - t);
              }, easeOutBounce: p, easeInOutBounce: function easeInOutBounce(t) {
                return t < .5 ? (1 - p(1 - 2 * t)) / 2 : (1 + p(2 * t - 1)) / 2;
              }, cubicBezier: function cubicBezier() {} };t.exports = h;
          }, function (t, e, n) {
            "use strict";
            t.exports = function (t, e, n, r, i) {
              var o = function o(e) {
                var r = 1 - e;return 3 * r * r * e * t + 3 * r * e * e * n + e * e * e;
              },
                  a = function a(t) {
                var n = 1 - t;return 3 * n * n * t * e + 3 * n * t * t * r + t * t * t;
              },
                  s = function s(e) {
                var r = 1 - e;return 3 * (2 * (e - 1) * e + r * r) * t + 3 * (-e * e * e + 2 * r * e) * n;
              };return function (t) {
                var e,
                    n,
                    r,
                    u,
                    c,
                    l,
                    f = t;for (r = f, l = 0; l < 8; l++) {
                  if (u = o(r) - f, Math.abs(u) < i) return a(r);if (c = s(r), Math.abs(c) < 1e-6) break;r -= u / c;
                }if (n = 1, (r = f) < (e = 0)) return a(e);if (r > n) return a(n);for (; e < n;) {
                  if (u = o(r), Math.abs(u - f) < i) return a(r);f > u ? e = r : n = r, r = .5 * (n - e) + e;
                }return a(r);
              };
            };
          }, function (t, e, n) {
            "use strict";
            var r = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function (t) {
              window.setTimeout(t, 1e3 / 60);
            },
                i = window.cancelAnimationFrame || window.webkitCancelAnimationFrame || window.mozCancelAnimationFrame || window.oCancelAnimationFrame || window.msCancelAnimationFrame || window.clearTimeout;t.exports = { raf: r, cancelRAF: i };
          }, function (t, e, n) {
            "use strict";
            t.exports = n(4);
          }, function (t, e, n) {
            "use strict";
            var r = n(0),
                i = n(1),
                o = n(2),
                a = o.raf,
                s = o.cancelRAF,
                u = n(5),
                c = "start",
                l = "end",
                f = "run",
                p = "stop",
                h = function h() {};function d(t) {
              this.init(t);
            }d.prototype = { init: function init(t) {
                this.cfg = u({ easing: "linear", duration: 1 / 0, onStart: h, onRun: h, onStop: h, onEnd: h }, t);
              }, run: function run() {
                var t = this.cfg,
                    e = t.duration,
                    n = t.onStart,
                    o = t.onRun;if (e <= 1 && (this.isfinished = !0, "function" == typeof o && o({ percent: 1 }), this.stop()), !this.isfinished) {
                  this._hasFinishedPercent = this._stop && this._stop.percent || 0, this._stop = null, this.start = Date.now(), this.percent = 0, "function" == typeof n && n({ percent: 0, type: c });var a = 1e3 / 60 / e / 4,
                      s = this.cfg.bezierArgs;this.easingFn = s && 4 === s.length ? i(s[0], s[1], s[2], s[3], a) : r[this.cfg.easing], this._run();
                }
              }, _run: function _run() {
                var t = this,
                    e = this.cfg,
                    n = e.onRun,
                    r = e.onStop;s(this._raf), this._raf = a(function () {
                  if (t.now = Date.now(), t.t = t.now - t.start, t.duration = t.now - t.start >= t.cfg.duration ? t.cfg.duration : t.now - t.start, t.progress = t.easingFn(t.duration / t.cfg.duration), t.percent = t.duration / t.cfg.duration + t._hasFinishedPercent, t.percent >= 1 || t._stop) return t.percent = t._stop && t._stop.percent ? t._stop.percent : 1, t.duration = t._stop && t._stop.duration ? t._stop.duration : t.duration, "function" == typeof n && n({ percent: t.progress, originPercent: t.percent, t: t.t, type: f }), "function" == typeof r && r({ percent: t.percent, t: t.t, type: p }), void (t.percent >= 1 && (t.isfinished = !0, t.stop()));"function" == typeof n && n({ percent: t.progress, originPercent: t.percent, t: t.t, type: f }), t._run();
                });
              }, stop: function stop() {
                var t = this.cfg.onEnd;this._stop = { percent: this.percent, now: this.now }, "function" == typeof t && t({ percent: 1, t: this.t, type: l }), s(this._raf);
              } }, d.Easing = r, d.Bezier = i, d.raf = a, d.cancelRAF = s, t.exports = d;
          }, function (t, e, n) {
            "use strict";
            /*
            object-assign
            (c) Sindre Sorhus
            @license MIT
            */
            var r = Object.getOwnPropertySymbols,
                i = Object.prototype.hasOwnProperty,
                o = Object.prototype.propertyIsEnumerable;t.exports = function () {
              try {
                if (!Object.assign) return !1;var t = new String("abc");if (t[5] = "de", "5" === Object.getOwnPropertyNames(t)[0]) return !1;for (var e = {}, n = 0; n < 10; n++) {
                  e["_" + String.fromCharCode(n)] = n;
                }if ("0123456789" !== Object.getOwnPropertyNames(e).map(function (t) {
                  return e[t];
                }).join("")) return !1;var r = {};return "abcdefghijklmnopqrst".split("").forEach(function (t) {
                  r[t] = t;
                }), "abcdefghijklmnopqrst" === Object.keys(Object.assign({}, r)).join("");
              } catch (t) {
                return !1;
              }
            }() ? Object.assign : function (t, e) {
              for (var n, a, s = function (t) {
                if (null === t || void 0 === t) throw new TypeError("Object.assign cannot be called with null or undefined");return Object(t);
              }(t), u = 1; u < arguments.length; u++) {
                for (var c in n = Object(arguments[u])) {
                  i.call(n, c) && (s[c] = n[c]);
                }if (r) {
                  a = r(n);for (var l = 0; l < a.length; l++) {
                    o.call(n, a[l]) && (s[a[l]] = n[a[l]]);
                  }
                }
              }return s;
            };
          }]);
        });
      }, function (t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", { value: !0 });var r = function (t) {
          return t && t.__esModule ? t : { default: t };
        }(n(6));function i(t, e, n) {
          this.x = t || 0, this.y = e || 0, this.z = n || 0;
        }i.prototype = { constructor: i, isVector3: !0, set: function set(t, e, n) {
            return this.x = t, this.y = e, this.z = n, this;
          }, applyEuler: function () {
            var t;return function (e) {
              return !1 === (e && e.isEuler) && console.error("THREE.Vector3: .applyEuler() now expects an Euler rotation rather than a Vector3 and order."), void 0 === t && (t = new r.default()), this.applyQuaternion(t.setFromEuler(e));
            };
          }(), applyQuaternion: function applyQuaternion(t) {
            var e = this.x,
                n = this.y,
                r = this.z,
                i = t.x,
                o = t.y,
                a = t.z,
                s = t.w,
                u = s * e + o * r - a * n,
                c = s * n + a * e - i * r,
                l = s * r + i * n - o * e,
                f = -i * e - o * n - a * r;return this.x = u * s + f * -i + c * -a - l * -o, this.y = c * s + f * -o + l * -i - u * -a, this.z = l * s + f * -a + u * -o - c * -i, this;
          } }, e.default = i;
      }, function (t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", { value: !0 });var r = function (t) {
          return t && t.__esModule ? t : { default: t };
        }(n(0));function i(t, e, n, r) {
          this._x = t || 0, this._y = e || 0, this._z = n || 0, this._w = void 0 !== r ? r : 1;
        }i.prototype = { constructor: i, get x() {
            return this._x;
          }, set x(t) {
            this._x = t, this.onChangeCallback();
          }, get y() {
            return this._y;
          }, set y(t) {
            this._y = t, this.onChangeCallback();
          }, get z() {
            return this._z;
          }, set z(t) {
            this._z = t, this.onChangeCallback();
          }, get w() {
            return this._w;
          }, set w(t) {
            this._w = t, this.onChangeCallback();
          }, set: function set(t, e, n, r) {
            return this._x = t, this._y = e, this._z = n, this._w = r, this.onChangeCallback(), this;
          }, clone: function clone() {
            return new this.constructor(this._x, this._y, this._z, this._w);
          }, copy: function copy(t) {
            return this._x = t.x, this._y = t.y, this._z = t.z, this._w = t.w, this.onChangeCallback(), this;
          }, setFromEuler: function setFromEuler(t, e) {
            if (!1 === (t && t.isEuler)) throw new Error("THREE.Quaternion: .setFromEuler() now expects an Euler rotation rather than a Vector3 and order.");var n = Math.cos(t._x / 2),
                r = Math.cos(t._y / 2),
                i = Math.cos(t._z / 2),
                o = Math.sin(t._x / 2),
                a = Math.sin(t._y / 2),
                s = Math.sin(t._z / 2),
                u = t.order;return "XYZ" === u ? (this._x = o * r * i + n * a * s, this._y = n * a * i - o * r * s, this._z = n * r * s + o * a * i, this._w = n * r * i - o * a * s) : "YXZ" === u ? (this._x = o * r * i + n * a * s, this._y = n * a * i - o * r * s, this._z = n * r * s - o * a * i, this._w = n * r * i + o * a * s) : "ZXY" === u ? (this._x = o * r * i - n * a * s, this._y = n * a * i + o * r * s, this._z = n * r * s + o * a * i, this._w = n * r * i - o * a * s) : "ZYX" === u ? (this._x = o * r * i - n * a * s, this._y = n * a * i + o * r * s, this._z = n * r * s - o * a * i, this._w = n * r * i + o * a * s) : "YZX" === u ? (this._x = o * r * i + n * a * s, this._y = n * a * i + o * r * s, this._z = n * r * s - o * a * i, this._w = n * r * i - o * a * s) : "XZY" === u && (this._x = o * r * i - n * a * s, this._y = n * a * i - o * r * s, this._z = n * r * s + o * a * i, this._w = n * r * i + o * a * s), !1 !== e && this.onChangeCallback(), this;
          }, setFromAxisAngle: function setFromAxisAngle(t, e) {
            var n = e / 2,
                r = Math.sin(n);return this._x = t.x * r, this._y = t.y * r, this._z = t.z * r, this._w = Math.cos(n), this.onChangeCallback(), this;
          }, multiply: function multiply(t, e) {
            return void 0 !== e ? (console.warn("THREE.Quaternion: .multiply() now only accepts one argument. Use .multiplyQuaternions( a, b ) instead."), this.multiplyQuaternions(t, e)) : this.multiplyQuaternions(this, t);
          }, multiplyQuaternions: function multiplyQuaternions(t, e) {
            var n = t._x,
                r = t._y,
                i = t._z,
                o = t._w,
                a = e._x,
                s = e._y,
                u = e._z,
                c = e._w;return this._x = n * c + o * a + r * u - i * s, this._y = r * c + o * s + i * a - n * u, this._z = i * c + o * u + n * s - r * a, this._w = o * c - n * a - r * s - i * u, this.onChangeCallback(), this;
          }, slerp: function slerp(t, e) {
            if (0 === e) return this;if (1 === e) return this.copy(t);var n = this._x,
                r = this._y,
                i = this._z,
                o = this._w,
                a = o * t._w + n * t._x + r * t._y + i * t._z;if (a < 0 ? (this._w = -t._w, this._x = -t._x, this._y = -t._y, this._z = -t._z, a = -a) : this.copy(t), a >= 1) return this._w = o, this._x = n, this._y = r, this._z = i, this;var s = Math.sqrt(1 - a * a);if (Math.abs(s) < .001) return this._w = .5 * (o + this._w), this._x = .5 * (n + this._x), this._y = .5 * (r + this._y), this._z = .5 * (i + this._z), this;var u = Math.atan2(s, a),
                c = Math.sin((1 - e) * u) / s,
                l = Math.sin(e * u) / s;return this._w = o * c + this._w * l, this._x = n * c + this._x * l, this._y = r * c + this._y * l, this._z = i * c + this._z * l, this.onChangeCallback(), this;
          }, onChange: function onChange(t) {
            return this.onChangeCallback = t, this;
          }, onChangeCallback: function onChangeCallback() {} }, (0, r.default)(i, { slerp: function slerp(t, e, n, r) {
            return n.copy(t).slerp(e, r);
          }, slerpFlat: function slerpFlat(t, e, n, r, i, o, a) {
            var s = n[r + 0],
                u = n[r + 1],
                c = n[r + 2],
                l = n[r + 3],
                f = i[o + 0],
                p = i[o + 1],
                h = i[o + 2],
                d = i[o + 3];if (l !== d || s !== f || u !== p || c !== h) {
              var m = 1 - a,
                  y = s * f + u * p + c * h + l * d,
                  g = y >= 0 ? 1 : -1,
                  v = 1 - y * y;if (v > Number.EPSILON) {
                var b = Math.sqrt(v),
                    x = Math.atan2(b, y * g);m = Math.sin(m * x) / b, a = Math.sin(a * x) / b;
              }var _ = a * g;if (s = s * m + f * _, u = u * m + p * _, c = c * m + h * _, l = l * m + d * _, m === 1 - a) {
                var w = 1 / Math.sqrt(s * s + u * u + c * c + l * l);s *= w, u *= w, c *= w, l *= w;
              }
            }t[e] = s, t[e + 1] = u, t[e + 2] = c, t[e + 3] = l;
          } }), e.default = i;
      }, function (t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", { value: !0 });var r = { DEG2RAD: Math.PI / 180, RAD2DEG: 180 / Math.PI, degToRad: function degToRad(t) {
            return t * r.DEG2RAD;
          }, radToDeg: function radToDeg(t) {
            return t * r.RAD2DEG;
          } };e.default = r;
      }, function (t, e, n) {
        "use strict";
        var r = function () {
          function t(t, e) {
            for (var n = 0; n < e.length; n++) {
              var r = e[n];r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r);
            }
          }return function (e, n, r) {
            return n && t(e.prototype, n), r && t(e, r), e;
          };
        }(),
            i = l(n(1)),
            o = l(n(9)),
            a = n(10),
            s = n(2),
            u = l(n(18)),
            c = l(n(0));function l(t) {
          return t && t.__esModule ? t : { default: t };
        }var f = (0, s.prefixStyle)("transform");function p(t, e, n) {
          t.transform[e] = n, t.shouldTransform = !0;
        }function h(t) {
          if (t instanceof HTMLElement || t instanceof SVGElement) {
            var e = window.getComputedStyle(t),
                n = (0, s.matrixToTransformObj)(e[f]);return n.opacity = Number(e.opacity), n["background-color"] = e["background-color"], n.color = e.color, n.width = (0, s.pxTo750)(e.width.replace("px", "")), n.height = (0, s.pxTo750)(e.height.replace("px", "")), n["border-top-left-radius"] = (0, s.pxTo750)(e["border-top-left-radius"].replace("px", "")), n["border-top-right-radius"] = (0, s.pxTo750)(e["border-top-right-radius"].replace("px", "")), n["border-bottom-left-radius"] = (0, s.pxTo750)(e["border-bottom-left-radius"].replace("px", "")), n["border-bottom-right-radius"] = (0, s.pxTo750)(e["border-bottom-right-radius"].replace("px", "")), n["margin-top"] = (0, s.pxTo750)(e["margin-top"].replace("px", "")), n["margin-bottom"] = (0, s.pxTo750)(e["margin-bottom"].replace("px", "")), n["margin-left"] = (0, s.pxTo750)(e["margin-left"].replace("px", "")), n["margin-right"] = (0, s.pxTo750)(e["margin-right"].replace("px", "")), n["padding-top"] = (0, s.pxTo750)(e["padding-top"].replace("px", "")), n["padding-bottom"] = (0, s.pxTo750)(e["padding-bottom"].replace("px", "")), n["padding-left"] = (0, s.pxTo750)(e["padding-left"].replace("px", "")), n["padding-right"] = (0, s.pxTo750)(e["padding-right"].replace("px", "")), n;
          }
        }var d = function () {
          function t(e, n) {
            switch (function (t, e) {
              if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
            }(this, t), this._eventHandler = null, this.elTransforms = [], this.elPaths = [], this.token = null, this.options = e, this.callback = n, this.token = this.genToken(), this._initElTransforms(), e.eventType) {case "pan":
                this._eventHandler = new a.PanHandler(this);break;case "orientation":
                this._eventHandler = new a.OrientationHandler(this);break;case "timing":
                this._eventHandler = new a.TimingHandler(this);break;case "scroll":
                this._eventHandler = new a.ScrollHandler(this);}
          }return r(t, [{ key: "genToken", value: function value() {
              return parseInt(1e7 * Math.random());
            } }, { key: "_initElTransforms", value: function value() {
              var t = this.options.props,
                  e = void 0 === t ? [] : t,
                  n = this.elTransforms;e.forEach(function (t) {
                var e = t.element;if (!i.default.find(n, function (t) {
                  return t.element === e;
                })) {
                  var r = { translateX: 0, translateY: 0, translateZ: 0, scaleX: 1, scaleY: 1, scaleZ: 1, rotateX: 0, rotateY: 0, rotateZ: 0, skewX: 0, skewY: 0 };if (e instanceof SVGElement) {
                    var o = h(e);r.translateX = (0, s.px)(o.translateX), r.translateY = (0, s.px)(o.translateY), r.rotateZ = o.rotateZ, r.scaleX = o.scaleX, r.scaleY = o.scaleY, r.skewX = o.skewX, r.skewY = o.skewY;
                  }n.push({ element: e, transform: r });
                }
              });
            } }, { key: "getValue", value: function value(t, e) {
              return o.default.execute(e, (0, c.default)(u.default, t));
            } }, { key: "setProperty", value: function value(t, e, n) {
              if (this.options.debug && console.log("property:", e, " value:", n), t instanceof HTMLElement) {
                var r = i.default.find(this.elTransforms, function (e) {
                  return e.element === t;
                });switch (e) {case "scroll.contentOffsetY":
                    t.scrollTop = (0, s.px)(n);break;case "scroll.contentOffsetX":
                    t.scrollLeft = (0, s.px)(n);break;case "transform.translateX":
                    p(r, "translateX", (0, s.px)(n));break;case "transform.translateY":
                    p(r, "translateY", (0, s.px)(n));break;case "transform.translateZ":
                    p(r, "translateZ", (0, s.px)(n));break;case "transform.rotateX":
                    p(r, "rotateX", n);break;case "transform.rotateY":
                    p(r, "rotateY", n);break;case "transform.rotateZ":case "transform.rotate":
                    p(r, "rotateZ", n);break;case "transform.scaleX":
                    p(r, "scaleX", n);break;case "transform.scaleY":
                    p(r, "scaleY", n);break;case "transform.scale":
                    p(r, "scaleX", n), p(r, "scaleY", n);break;case "opacity":
                    t.style.opacity = n;break;case "background-color":
                    t.style["background-color"] = n;break;case "color":
                    t.style.color = n;break;case "width":case "height":case "border-top-left-radius":case "border-top-right-radius":case "border-bottom-left-radius":case "border-bottom-right-radius":case "border-radius":case "margin-top":case "margin-bottom":case "margin-left":case "margin-right":case "padding-top":case "padding-bottom":case "padding-left":case "padding-right":
                    t.style[e] = (0, s.px)(n) + "px";}r && r.shouldTransform && (t.style[f] = ["translateX(" + r.transform.translateX + "px)", "translateY(" + r.transform.translateY + "px)", "translateZ(" + r.transform.translateZ + "px)", "scaleX(" + r.transform.scaleX + ")", "scaleY(" + r.transform.scaleY + ")", "rotateX(" + r.transform.rotateX + "deg)", "rotateY(" + r.transform.rotateY + "deg)", "rotateZ(" + r.transform.rotateZ + "deg)"].join(" "));
              } else if (t instanceof SVGElement) {
                var o = i.default.find(this.elTransforms, function (e) {
                  return e.element === t;
                });switch (e) {case "svg-dashoffset":
                    t.setAttribute("stroke-dashoffset", (0, s.px)(n));break;case "svg-transform.translateX":
                    p(o, "translateX", (0, s.px)(n));break;case "svg-transform.translateY":
                    p(o, "translateY", (0, s.px)(n));break;case "svg-transform.translateZ":
                    p(o, "translateZ", (0, s.px)(n));break;case "svg-transform.rotateX":
                    p(o, "rotateX", n);break;case "svg-transform.rotateY":
                    p(o, "rotateY", n);break;case "svg-transform.rotateZ":case "svg-transform.rotate":
                    p(o, "rotateZ", n);break;case "svg-transform.scaleX":
                    p(o, "scaleX", n);break;case "svg-transform.scaleY":
                    p(o, "scaleY", n);break;case "svg-transform.scale":
                    p(o, "scaleX", n), p(o, "scaleY", n);break;case "svg-transform.skewX":
                    p(o, "skewX", n);break;case "svg-transform.skewY":
                    p(o, "skewY", n);break;case "svg-path":
                    var a = i.default.find(this.elPaths, function (e) {
                      return e.element === t;
                    });if (a && a.path || (a = { element: t, path: (0, s.parseSVGPath)(t.getAttribute("d"), s.pxTo750) }, this.elPaths.push(a)), a && a.path) if (n && n.length) for (var u = 0; u < n.length; u++) {
                      a.path = (0, s.interceptSVGPath)(a.path, n[u].index, n[u].values, n[u].cmd);
                    } else a.path = (0, s.interceptSVGPath)(a.path, n.index, n.values, n.cmd);}var c = i.default.find(this.elPaths, function (e) {
                  return e.element === t;
                });c && c.path && t.setAttribute("d", (0, s.stringifySVGPath)(c.path, s.px)), o.shouldTransform && (t.style[f] = ["translateX(" + o.transform.translateX + "px)", "translateY(" + o.transform.translateY + "px)", "translateZ(" + o.transform.translateZ + "px)", "scaleX(" + o.transform.scaleX + ")", "scaleY(" + o.transform.scaleY + ")", "rotateX(" + o.transform.rotateX + "deg)", "rotateY(" + o.transform.rotateY + "deg)", "rotateZ(" + o.transform.rotateZ + "deg)", "skewX(" + o.transform.skewX + "deg)", "skewY(" + o.transform.skewY + "deg)"].join(" "));
              } else switch (e) {case "lottie-progress":
                  "function" == typeof t.setProgress && t.setProgress(n);}
            } }, { key: "destroy", value: function value() {
              this._eventHandler.destroy();
            } }]), t;
        }();t.exports = { _bindingInstances: [], bind: function bind(t) {
            var e = this,
                n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : function () {};if (!t) throw new Error("should pass options for binding");var r = i.default.filter(this._bindingInstances, function (e) {
              if (t.anchor) return e.options.anchor === t.anchor && e.options.eventType === t.eventType;
            });r && i.default.forEach(r, function (t) {
              t.destroy(), e._bindingInstances = i.default.dropWhile(e._bindingInstances, function (e) {
                return e === t;
              });
            });var o = new d(t, n);return this._bindingInstances.push(o), { token: o.token };
          }, unbind: function unbind(t) {
            if (!t) throw new Error("should pass options for binding");var e = i.default.find(this._bindingInstances, function (e) {
              return e.options.eventType === t.eventType && e.token === t.token;
            });e && e.destroy();
          }, unbindAll: function unbindAll() {
            this._bindingInstances.forEach(function (t) {
              t.destroy({ eventType: t.options.eventType, token: t.token });
            });
          }, getComputedStyle: h };
      }, function (t, e, n) {
        "use strict";
        function r(t) {
          return Number(t);
        }function i(t) {
          return !!t;
        }function o(t, e) {
          return t == e;
        }function a(t, e) {
          return t === e;
        }Object.defineProperty(e, "__esModule", { value: !0 }), e.default = { execute: function t(e, n) {
            var s = e.type,
                u = e.children;switch (s) {case "StringLiteral":
                return String(e.value);case "NumericLiteral":
                return parseFloat(e.value);case "BooleanLiteral":
                return !!e.value;case "Identifier":
                return n[e.value];case "CallExpression":
                for (var c = t(u[0], n), l = [], f = u[1].children, p = 0; p < f.length; p++) {
                  l.push(t(f[p], n));
                }return c.apply(null, l);case "?":
                return t(u[0], n) ? t(u[1], n) : t(u[2], n);case "+":
                return r(t(u[0], n)) + r(t(u[1], n));case "-":
                return r(t(u[0], n)) - r(t(u[1], n));case "*":
                return r(t(u[0], n)) * r(t(u[1], n));case "/":
                return r(t(u[0], n)) / r(t(u[1], n));case "%":
                return r(t(u[0], n)) % r(t(u[1], n));case "**":
                return Math.pow(r(t(u[0], n)), r(t(u[1], n)));case ">":
                return r(t(u[0], n)) > r(t(u[1], n));case "<":
                return r(t(u[0], n)) < r(t(u[1], n));case ">=":
                return r(t(u[0], n)) >= r(t(u[1], n));case "<=":
                return r(t(u[0], n)) <= r(t(u[1], n));case "==":
                return o(t(u[0], n), t(u[1], n));case "===":
                return a(t(u[0], n), t(u[1], n));case "!=":
                return !o(t(u[0], n), t(u[1], n));case "!==":
                return !a(t(u[0], n), t(u[1], n));case "&&":
                var h = void 0;return i(h = t(u[0], n)) ? t(u[1], n) : h;case "||":
                return i(h = t(u[0], n)) ? h : t(u[1], n);case "!":
                return !i(t(u[0], n));}return null;
          } };
      }, function (t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", { value: !0 }), e.ScrollHandler = e.TimingHandler = e.OrientationHandler = e.PanHandler = void 0;var r = s(n(11)),
            i = s(n(13)),
            o = s(n(16)),
            a = s(n(17));function s(t) {
          return t && t.__esModule ? t : { default: t };
        }e.PanHandler = r.default, e.OrientationHandler = i.default, e.TimingHandler = o.default, e.ScrollHandler = a.default;
      }, function (t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", { value: !0 });var r = function () {
          function t(t, e) {
            for (var n = 0; n < e.length; n++) {
              var r = e[n];r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r);
            }
          }return function (e, n, r) {
            return n && t(e.prototype, n), r && t(e, r), e;
          };
        }(),
            i = a(n(12)),
            o = a(n(3));function a(t) {
          return t && t.__esModule ? t : { default: t };
        }var s = function (t) {
          function e(t) {
            !function (t, e) {
              if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
            }(this, e);var n = function (t, e) {
              if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return !e || "object" != (typeof e === "undefined" ? "undefined" : _typeof2(e)) && "function" != typeof e ? t : e;
            }(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t));n._onPan = function (t) {
              var e = t.deltaX,
                  r = t.deltaY,
                  i = n.binding.options.props;(void 0 === i ? [] : i).forEach(function (t) {
                var i = t.element,
                    o = t.property,
                    a = t.expression,
                    s = JSON.parse(a.transformed),
                    u = n.binding.getValue({ x: e, y: r }, s);n.binding.setProperty(i, o, u);
              });
            }, n._onPanStart = function () {
              n.binding.callback({ deltaX: 0, state: "start", deltaY: 0 });
            }, n._onPanEnd = function (t) {
              n.binding.callback({ deltaX: parseInt(t.deltaX), state: "end", deltaY: parseInt(t.deltaY) });
            };var r = t.options.anchor,
                o = n.panGesture = new i.default(r, t.options.options);return o.on("pan", n._onPan), o.on("panstart", n._onPanStart), o.on("panend", n._onPanEnd), n;
          }return function (t, e) {
            if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + (typeof e === "undefined" ? "undefined" : _typeof2(e)));t.prototype = Object.create(e && e.prototype, { constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 } }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e);
          }(e, o.default), r(e, [{ key: "destroy", value: function value() {
              var t = this.panGesture;t.off("pan", this._onPan), t.off("panstart", this._onPanStart), t.off("panend", this._onPanEnd), t.destroy();
            } }]), e;
        }();e.default = s;
      }, function (t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", { value: !0 });var r = function () {
          function t(t, e) {
            for (var n = 0; n < e.length; n++) {
              var r = e[n];r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r);
            }
          }return function (e, n, r) {
            return n && t(e.prototype, n), r && t(e, r), e;
          };
        }(),
            i = s(n(1)),
            o = s(n(0)),
            a = n(2);function s(t) {
          return t && t.__esModule ? t : { default: t };
        }var u = Math.abs,
            c = { thresholdX: 10, thresholdY: 10, touchAction: "auto", touchActionRatio: .5 },
            l = function () {
          function t(e, n) {
            var r = this;!function (t, e) {
              if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
            }(this, t), this.startX = null, this.startY = null, this.panStartX = null, this.panStartY = null, this.deltaX = 0, this.deltaY = 0, this.events = { panstart: [], pan: [], panend: [], pancancel: [] }, this.onTouchStart = function (t) {}, this.handlePanStart = function (t) {
              if (t.preventDefault(), null === r.panStartX || null === r.panStartY) return r.panStartX = (0, a.pxTo750)(t.touches[0].pageX), r.panStartY = (0, a.pxTo750)(t.touches[0].pageY), void r.events.panstart.forEach(function (e) {
                e(t);
              });
            }, this.onTouchMove = function (t) {
              var e = r.config,
                  n = e.thresholdX,
                  i = e.thresholdY,
                  o = e.touchAction,
                  s = e.touchActionRatio;null !== r.startX && null !== r.startY || (r.startX = t.touches[0].pageX, r.startY = t.touches[0].pageY);var c = t.touches[0].pageX - r.startX,
                  l = t.touches[0].pageY - r.startY;switch (o) {case "auto":
                  t.preventDefault(), (u(c) >= n || u(l) >= i) && r.handlePanStart(t);break;case "pan-x":
                  u(c) >= n && u(l / c) < s && u(l) < i && r.handlePanStart(t);break;case "pan-y":
                  u(l) >= i && u(c / l) < s && u(c) < n && r.handlePanStart(t);}if (null !== r.panStartX && null !== r.panStartY) {
                switch (o) {case "auto":
                    r.deltaX = (0, a.pxTo750)(t.touches[0].pageX) - r.panStartX, r.deltaY = (0, a.pxTo750)(t.touches[0].pageY) - r.panStartY;break;case "pan-x":
                    r.deltaX = (0, a.pxTo750)(t.touches[0].pageX) - r.panStartX, r.deltaY = 0;break;case "pan-y":
                    r.deltaX = 0, r.deltaY = (0, a.pxTo750)(t.touches[0].pageY) - r.panStartY;}t.deltaX = r.deltaX, t.deltaY = r.deltaY, r.events.pan.forEach(function (e) {
                  e(t);
                });
              }
            }, this.onTouchEnd = function (t) {
              t.deltaX = r.deltaX, t.deltaY = r.deltaY, r.events.panend.forEach(function (e) {
                e(t);
              });
            }, this.onTouchCancel = function (t) {
              t.deltaX = r.deltaX, t.deltaY = r.deltaY, r.events.pancancel.forEach(function (e) {
                e(t);
              });
            }, this.el = e, this.config = (0, o.default)(c, n), this.el.addEventListener("touchstart", this.onTouchStart), this.el.addEventListener("touchmove", this.onTouchMove), this.el.addEventListener("touchend", this.onTouchEnd), this.el.addEventListener("touchcancel", this.onTouchCancel);
          }return r(t, [{ key: "on", value: function value(t, e) {
              this.events[t] && this.events[t].push(e);
            } }, { key: "destroy", value: function value() {
              this.el.removeEventListener("touchstart", this.onTouchStart), this.el.removeEventListener("touchmove", this.onTouchMove), this.el.removeEventListener("touchend", this.onTouchEnd), this.el.removeEventListener("touchcancel", this.onTouchCancel), this.offAll(), this.startX = null, this.startY = null, this.panStartX = null, this.panStartY = null;
            } }, { key: "offAll", value: function value() {
              var t = this;i.default.map(this.events, function (e, n) {
                i.default.forEach(e, function (e) {
                  t.off(n, e);
                });
              });
            } }, { key: "off", value: function value(t, e) {
              if (t && t && this.events[t] && this.events[t].length) {
                if (!e) return;var n = i.default.find(this.events[t], function (t) {
                  return t === e;
                }),
                    r = i.default.findIndex(this.events[t], function (t) {
                  return t === e;
                });n && this.events[t].splice(r, 1);
              }
            } }]), t;
        }();e.default = l;
      }, function (t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", { value: !0 });var r = function () {
          function t(t, e) {
            for (var n = 0; n < e.length; n++) {
              var r = e[n];r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r);
            }
          }return function (e, n, r) {
            return n && t(e.prototype, n), r && t(e, r), e;
          };
        }(),
            i = l(n(5)),
            o = l(n(14)),
            a = l(n(7)),
            s = n(4),
            u = l(n(3)),
            c = l(n(0));function l(t) {
          return t && t.__esModule ? t : { default: t };
        }var f = function (t) {
          function e(t) {
            !function (t, e) {
              if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
            }(this, e);var n = function (t, e) {
              if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return !e || "object" != (typeof e === "undefined" ? "undefined" : _typeof2(e)) && "function" != typeof e ? t : e;
            }(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t));return n.binding = null, n.control = null, n.start = null, n.timer = null, n._onOrientation = function (t) {
              n.binding.options.props.forEach(function (e) {
                var r = e.element,
                    i = e.property,
                    o = e.expression,
                    a = JSON.parse(o.transformed),
                    s = n.binding.getValue(t, a);n.binding.setProperty(r, i, s);
              });
            }, n.options = (0, c.default)({ sceneType: "2d" }, t.options.options), n.binding = t, "2d" === n.options.sceneType.toLowerCase() ? (n.controlX = new o.default({ beta: 90 }), n.controlY = new o.default({ gamma: 90, alpha: 0 })) : n.control = new o.default(), n.run(), n;
          }return function (t, e) {
            if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + (typeof e === "undefined" ? "undefined" : _typeof2(e)));t.prototype = Object.create(e && e.prototype, { constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 } }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e);
          }(e, u.default), r(e, [{ key: "run", value: function value() {
              var t = this;if ("2d" === this.options.sceneType.toLowerCase()) {
                this.controlX.update(), this.controlY.update();var e = this.controlX.deviceOrientation,
                    n = e.alpha,
                    r = e.beta,
                    o = e.gamma,
                    u = e.dalpha,
                    c = e.dbeta,
                    l = e.dgamma,
                    f = new i.default(0, 0, 1);f.applyQuaternion(this.controlX.quaternion);var p = new i.default(0, 1, 1);p.applyQuaternion(this.controlY.quaternion);var h = a.default.radToDeg(Math.acos(f.x)) - 90,
                    d = a.default.radToDeg(Math.acos(p.y)) - 90;if (this.start || isNaN(h) || isNaN(d) || (this.start = { x: h, y: d }), this.start) {
                  var m = h - this.start.x,
                      y = d - this.start.y;this._onOrientation({ x: h, y: d, dx: m, dy: y, alpha: n, beta: r, gamma: o, dalpha: u, dbeta: c, dgamma: l });
                }
              } else {
                this.control.update();var g = this.control.deviceOrientation,
                    v = g.alpha,
                    b = g.beta,
                    x = g.gamma,
                    _ = g.dalpha,
                    w = g.dbeta,
                    E = g.dgamma,
                    O = this.control.quaternion,
                    k = O.x,
                    S = O.y,
                    P = O.z;this._onOrientation({ alpha: v, beta: b, gamma: x, dalpha: _, dbeta: w, dgamma: E, x: k, y: S, z: P });
              }this.timer = (0, s.raf)(function () {
                t.run();
              });
            } }, { key: "destroy", value: function value() {
              this.timer && ((0, s.cancelRAF)(this.timer), this.timer = null);
            } }]), e;
        }();e.default = f;
      }, function (t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", { value: !0 });var r = u(n(6)),
            i = u(n(5)),
            o = u(n(15)),
            a = u(n(7)),
            s = u(n(0));function u(t) {
          return t && t.__esModule ? t : { default: t };
        }function c(t) {
          return void 0 === t || isNaN(t) || null === t;
        }e.default = function (t) {
          var e = this;this.object = (0, s.default)({ alphaOffsetAngle: 0, betaOffsetAngle: 0, gammaOffsetAngle: 0 }, t), this.alphaOffsetAngle = this.object.alphaOffsetAngle, this.betaOffsetAngle = this.object.betaOffsetAngle, this.gammaOffsetAngle = this.object.gammaOffsetAngle, this.quaternion = new r.default(0, 0, 0, 1), this.enabled = !0, this.deviceOrientation = {}, this.screenOrientation = 0, this.start = null, this.recordsAlpha = [];var n = function n(t) {
            var n = t.alpha,
                r = t.beta,
                i = t.gamma,
                o = e.recordsAlpha;e.start || (e.start = { alpha: n, beta: r, gamma: i }), o.push(n), o.length > 5 && (o = function (t, e) {
              var n = t.length,
                  r = 0;if (n > 1) for (var i = 0; i < n; i++) {
                void 0 != t[i - 1] && void 0 != t[i] && (t[i] - t[i - 1] < -e / 2 && (r = Math.floor(t[i - 1] / e) + 1, t[i] = t[i] + r * e), t[i] - t[i - 1] > e / 2 && (t[i] = t[i] - e));
              }return t;
            }(o, 360)).shift();var a = (o[o.length - 1] - e.start.alpha) % 360;c(n) || c(r) || c(i) || (e.enabled = !0), e.deviceOrientation = { alpha: n, beta: r, gamma: i, formatAlpha: a, dalpha: n - e.start.alpha, dbeta: r - e.start.beta, dgamma: i - e.start.gamma };
          },
              u = function u() {
            e.screenOrientation = window.orientation || 0;
          },
              l = function () {
            var t = new i.default(0, 0, 1),
                e = new o.default(),
                n = new r.default(),
                a = new r.default(-Math.sqrt(.5), 0, 0, Math.sqrt(.5));return function (r, i, o, s, u) {
              e.set(o, i, -s, "YXZ"), r.setFromEuler(e), r.multiply(a), r.multiply(n.setFromAxisAngle(t, -u));
            };
          }();this.connect = function () {
            u(), window.addEventListener("orientationchange", u, !1), window.addEventListener("deviceorientation", n, !1);
          }, this.disconnect = function () {
            window.removeEventListener("orientationchange", u, !1), window.removeEventListener("deviceorientation", n, !1), e.enabled = !1;
          }, this.update = function () {
            if (!1 !== e.enabled) {
              var t = c(e.deviceOrientation.formatAlpha) ? 0 : a.default.degToRad(c(e.object.alpha) ? e.deviceOrientation.formatAlpha + e.alphaOffsetAngle : e.object.alpha),
                  n = c(e.deviceOrientation.beta) ? 0 : a.default.degToRad(c(e.object.beta) ? e.deviceOrientation.beta + e.betaOffsetAngle : e.object.beta),
                  r = c(e.deviceOrientation.gamma) ? 0 : a.default.degToRad(c(e.object.gamma) ? e.deviceOrientation.gamma + e.gammaOffsetAngle : e.object.gamma),
                  i = e.screenOrientation ? a.default.degToRad(e.screenOrientation) : 0;l(e.quaternion, t, n, r, i);
            }
          }, this.updateAlphaOffsetAngle = function (t) {
            this.alphaOffsetAngle = t, this.update();
          }, this.updateBetaOffsetAngle = function (t) {
            this.betaOffsetAngle = t, this.update();
          }, this.updateGammaOffsetAngle = function (t) {
            this.gammaOffsetAngle = t, this.update();
          }, this.dispose = function () {
            this.disconnect();
          }, this.connect();
        };
      }, function (t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", { value: !0 });var r = function () {
          function t(t, e) {
            for (var n = 0; n < e.length; n++) {
              var r = e[n];r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r);
            }
          }return function (e, n, r) {
            return n && t(e.prototype, n), r && t(e, r), e;
          };
        }();var i = function () {
          function t(e, n, r, i) {
            !function (t, e) {
              if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
            }(this, t), this.isEuler = !0, this._x = 0, this._y = 0, this._z = 0, this._x = e || 0, this._y = n || 0, this._z = r || 0, this._order = i || t.DefaultOrder;
          }return r(t, [{ key: "set", value: function value(t, e, n, r) {
              return this._x = t, this._y = e, this._z = n, this._order = r || this._order, this.onChangeCallback(), this;
            } }, { key: "onChange", value: function value(t) {
              return this.onChangeCallback = t, this;
            } }, { key: "onChangeCallback", value: function value() {} }, { key: "order", get: function get() {
              return this._order;
            }, set: function set(t) {
              this._order = t, this.onChangeCallback();
            } }]), t;
        }();i.RotationOrders = ["XYZ", "YZX", "ZXY", "XZY", "YXZ", "ZYX"], i.DefaultOrder = "XYZ", e.default = i;
      }, function (t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", { value: !0 });var r = Object.assign || function (t) {
          for (var e = 1; e < arguments.length; e++) {
            var n = arguments[e];for (var r in n) {
              Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
            }
          }return t;
        },
            i = function () {
          function t(t, e) {
            for (var n = 0; n < e.length; n++) {
              var r = e[n];r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r);
            }
          }return function (e, n, r) {
            return n && t(e.prototype, n), r && t(e, r), e;
          };
        }(),
            o = s(n(4)),
            a = s(n(3));function s(t) {
          return t && t.__esModule ? t : { default: t };
        }var u = function (t) {
          function e(t) {
            !function (t, e) {
              if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
            }(this, e);var n = function (t, e) {
              if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return !e || "object" != (typeof e === "undefined" ? "undefined" : _typeof2(e)) && "function" != typeof e ? t : e;
            }(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t)),
                i = n.binding.options,
                a = i.props,
                s = void 0 === a ? [] : a,
                u = i.exitExpression;s.forEach(function (t) {
              var e = t.expression;e && e.transformed && "string" == typeof e.transformed && (e.transformed = JSON.parse(e.transformed));
            });var c = void 0;return u && u.transformed && (c = JSON.parse(u.transformed)), (n.animation = new o.default({ duration: 1 / 0, easing: "linear", onStart: function onStart() {
                n.binding.callback({ state: "start", t: 0 });
              }, onRun: function onRun(t) {
                c && n.binding.getValue({ t: t.t }, c) && n.animation.stop(), s.forEach(function (e) {
                  n.animate(r({ exitTransformed: c, t: t.t }, e));
                });
              }, onStop: function onStop(t) {
                n.binding.callback({ state: "exit", t: t.t - 1e3 / 60 });
              } })).run(), n;
          }return function (t, e) {
            if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + (typeof e === "undefined" ? "undefined" : _typeof2(e)));t.prototype = Object.create(e && e.prototype, { constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 } }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e);
          }(e, a.default), i(e, [{ key: "animate", value: function value(t) {
              var e = t.element,
                  n = t.property,
                  r = t.expression,
                  i = t.t,
                  o = this.binding.getValue({ t: i }, r.transformed);this.binding.setProperty(e, n, o);
            } }, { key: "destroy", value: function value() {
              this.animation && this.animation.stop();
            } }]), e;
        }();e.default = u;
      }, function (t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", { value: !0 });var r = function () {
          function t(t, e) {
            for (var n = 0; n < e.length; n++) {
              var r = e[n];r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r);
            }
          }return function (e, n, r) {
            return n && t(e.prototype, n), r && t(e, r), e;
          };
        }(),
            i = function (t) {
          return t && t.__esModule ? t : { default: t };
        }(n(3)),
            o = n(2);function a(t, e) {
          return t / e < 0;
        }var s = function (t) {
          function e(t) {
            !function (t, e) {
              if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
            }(this, e);var n = function (t, e) {
              if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return !e || "object" != (typeof e === "undefined" ? "undefined" : _typeof2(e)) && "function" != typeof e ? t : e;
            }(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t));n.dx = 0, n.dy = 0, n.prevX = null, n.prevY = null, n.tx = 0, n.ty = 0, n.tdx = 0, n.tdy = 0, n._onScroll = function (t) {
              var e = n.binding.options.props,
                  r = n.binding.callback,
                  i = (0, o.pxTo750)(t.target.scrollLeft),
                  s = (0, o.pxTo750)(t.target.scrollTop);if (e.forEach(function (t) {
                var e = t.element,
                    r = t.property,
                    o = t.expression,
                    a = JSON.parse(o.transformed),
                    u = n.binding.getValue({ x: i, y: s, dx: n.dx, dy: n.dy, tdx: n.tdx, tdy: n.tdy }, a);n.binding.setProperty(e, r, u);
              }), null !== n.prevX && null !== n.prevY) {
                var u = i - n.prevX,
                    c = s - n.prevY,
                    l = { x: i, y: s };a(n.dx, u) && (n.tx = i, l.state = "turn"), a(n.dy, c) && (n.ty = s, l.state = "turn"), n.dx = l.dx = i - n.prevX, n.dy = l.dy = s - n.prevY, n.tdx = l.tdx = i - n.tx, n.tdy = l.tdy = s - n.ty, l.state && r(l);
              }n.prevX = i, n.prevY = s;
            };var r = t.options.anchor;return n.tx = (0, o.pxTo750)(r.scrollLeft), n.ty = (0, o.pxTo750)(r.scrollTop), r.addEventListener("scroll", n._onScroll), n;
          }return function (t, e) {
            if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + (typeof e === "undefined" ? "undefined" : _typeof2(e)));t.prototype = Object.create(e && e.prototype, { constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 } }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e);
          }(e, i.default), r(e, [{ key: "destroy", value: function value() {
              this.binding.options.anchor.removeEventListener("scroll", this._onScroll);
            } }]), e;
        }();e.default = s;
      }, function (t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", { value: !0 });var r = function (t) {
          return t && t.__esModule ? t : { default: t };
        }(n(1)),
            i = n(4);function o(t) {
          var e = t.replace(/'|"|#/g, "");return parseInt(e, 16);
        }function a(t) {
          var e = t.replace(/'|"|#/g, ""),
              n = "" + (e = 3 === e.length ? [e[0], e[0], e[1], e[1], e[2], e[2]].join("") : e)[0] + e[1],
              r = "" + e[2] + e[3],
              i = "" + e[4] + e[5];return { r: n, g: r, b: i, dr: o(n), dg: o(r), db: o(i) };
        }var s = { max: Math.max, min: Math.min, sin: Math.sin, cos: Math.cos, tan: Math.tan, sqrt: Math.sqrt, cbrt: Math.cbrt, log: Math.log, abs: Math.abs, atan: Math.atan, floor: Math.floor, ceil: Math.ceil, pow: Math.pow, exp: Math.exp, PI: Math.PI, E: Math.E, acos: Math.acos, asin: Math.asin, sign: Math.sign, atan2: Math.atan2, round: Math.round, rgb: function rgb(t, e, n) {
            return "rgb(" + parseInt(t) + "," + parseInt(e) + "," + parseInt(n) + ")";
          }, rgba: function rgba(t, e, n, r) {
            return "rgb(" + parseInt(t) + "," + parseInt(e) + "," + parseInt(n) + "," + r + ")";
          }, getArgs: function getArgs() {
            return arguments;
          }, evaluateColor: function evaluateColor(t, e, n) {
            n = n > 1 ? 1 : n;var r = a(t),
                i = a(e);return "#" + function (t) {
              for (var e = t.toString(16), n = [], r = 0; r < 6 - e.length; r++) {
                n.push("0");
              }return n.join("") + e;
            }(16 * parseInt((i.dr - r.dr) * n + r.dr) * 16 * 16 * 16 + 16 * parseInt((i.dg - r.dg) * n + r.dg) * 16 + parseInt((i.db - r.db) * n + r.db));
          }, svgDrawCmd: function svgDrawCmd(t, e, n) {
            return { index: t, values: e, cmd: n };
          }, svgDrawCmds: function svgDrawCmds() {
            return arguments;
          }, asArray: function asArray() {
            return [].concat(Array.prototype.slice.call(arguments));
          } };r.default.map(i.Easing, function (t, e) {
          "cubicBezier" !== e && (s[e] = function (e, n, r, i) {
            return e = Math.max(Math.min(e / i, 1)), t(e) * r + n;
          });
        }), s.cubicBezier = function (t, e, n, r, o, a, s, u) {
          t = Math.max(Math.min(t / r, 1));var c = 1e3 / 60 / r / 4;return (0, i.Bezier)(o, a, s, u, c)(t) * n + e;
        }, e.default = s;
      }]);
    });
  }]);
});

/***/ }),

/***/ 44:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["container"]
  }, [_c('div', {
    staticClass: ["border"]
  }, [_c('div', {
    ref: "my",
    staticClass: ["box"],
    on: {
      "touchstart": _vm.touchStart
    }
  }, [_vm._m(0), _vm._m(1), _vm._m(2)])]), _vm._m(3)])
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["head"]
  }, [_c('div', {
    staticClass: ["avatar"]
  }), _c('text', {
    staticClass: ["username"]
  }, [_vm._v("HACKER")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["content"]
  }, [_c('text', {
    staticClass: ["desc"]
  }, [_vm._v("Google announced a new version of Nearby Connections for fully offline.high\n                bandwidth peer to peer device communications.")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["footer"]
  }, [_c('text', {
    staticClass: ["action"]
  }, [_vm._v("SHARE")]), _c('text', {
    staticClass: ["action"],
    staticStyle: {
      color: "#7C4DFF"
    }
  }, [_vm._v("EXPLORE")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticStyle: {
      width: "750",
      alignItems: "center",
      justifyContent: "center"
    }
  }, [_c('text', {
    staticStyle: {
      fontSize: "40"
    }
  }, [_vm._v("Swipeable Card")])])
}]}
module.exports.render._withStripped = true

/***/ }),

/***/ 66:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _demo = __webpack_require__(40);

var _demo2 = _interopRequireDefault(_demo);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_demo2.default.el = '#root';
new Vue(_demo2.default);

/***/ })

/******/ });