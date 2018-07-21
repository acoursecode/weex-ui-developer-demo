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
/******/ 	return __webpack_require__(__webpack_require__.s = 76);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1,eval)("this");
} catch(e) {
	// This works if the window reference is available
	if(typeof window === "object")
		g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ 1:
/***/ (function(module, exports) {

/* globals __VUE_SSR_CONTEXT__ */

// this module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle

module.exports = function normalizeComponent (
  rawScriptExports,
  compiledTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier /* server only */
) {
  var esModule
  var scriptExports = rawScriptExports = rawScriptExports || {}

  // ES6 modules interop
  var type = typeof rawScriptExports.default
  if (type === 'object' || type === 'function') {
    esModule = rawScriptExports
    scriptExports = rawScriptExports.default
  }

  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (compiledTemplate) {
    options.render = compiledTemplate.render
    options.staticRenderFns = compiledTemplate.staticRenderFns
  }

  // scopedId
  if (scopeId) {
    options._scopeId = scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = injectStyles
  }

  if (hook) {
    var functional = options.functional
    var existing = functional
      ? options.render
      : options.beforeCreate
    if (!functional) {
      // inject component registration as beforeCreate hook
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    } else {
      // register for functioal component in vue file
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return existing(h, context)
      }
    }
  }

  return {
    esModule: esModule,
    exports: scriptExports,
    options: options
  }
}


/***/ }),

/***/ 2:
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),

/***/ 25:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(26)
}
var Component = __webpack_require__(1)(
  /* script */
  __webpack_require__(28),
  /* template */
  __webpack_require__(29),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-7d492133",
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "/Users/emohacker/weex/weex-ui-developer/src/page/demo1-2-b.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] demo1-2-b.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-7d492133", Component.options)
  } else {
    hotAPI.reload("data-v-7d492133", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 26:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(27);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(4)("353bc405", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../node_modules/css-loader/index.js!../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-7d492133\",\"scoped\":true,\"hasInlineConfig\":true}!../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./demo1-2-b.vue", function() {
     var newContent = require("!!../../node_modules/css-loader/index.js!../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-7d492133\",\"scoped\":true,\"hasInlineConfig\":true}!../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./demo1-2-b.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 27:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(false);
// imports


// module
exports.push([module.i, "\n.iconfont-http[data-v-7d492133]{\n  font-family: iconfont-http;\n  font-size: 0.66667rem;\n  text-align: center;\n}\n.iconfont-base64[data-v-7d492133]{\n  font-family: iconfont-base64;\n  font-size: 0.66667rem;\n  text-align: center;\n}\n.h2[data-v-7d492133]{\n  margin-top: 0.4rem;\n  font-size: 0.66667rem;\n  text-align: center;\n  height: 1.46667rem;\n  line-height: 1.46667rem;\n}\n.c2-title[data-v-7d492133]{\n  height: 1.33333rem;\n  line-height: 1.33333rem;\n  text-align: center;\n  background-color: #777777;\n  color:#fff;\n}\n.grid-2[data-v-7d492133]{\n  flex-direction:row;\n  justify-content: space-between;\n}\n.ui-border-right[data-v-7d492133]{\n  border-right-width: 0.02667rem;\n  border-right-style: solid;\n  border-right-color: #ffffff;\n}\n.grid2-item[data-v-7d492133]{\n  width:5rem;\n  position: relative;\n  height: 2.4rem;\n}\n.image-logo[data-v-7d492133]{\n  width: 1.6rem;\n  height: 1.6rem;\n  top:0.26667rem;\n  position: absolute;\n  left:1.69333rem;\n}\n.image-logo-gif[data-v-7d492133]{\n  width: 5.32rem;\n  height: 4rem;\n}\n.grid-3-equal[data-v-7d492133]{ \n  flex-direction:row;\n  justify-content: space-between;\n}\n.grid-item-equal[data-v-7d492133]{\n  text-align:center;\n  width: 3.29333rem;\n  height: 3.29333rem;\n  line-height: 3.29333rem;\n  font-size:1.33333rem;\n  background-color:#000;\n  color:#ffffff;\n}\n.grid-item-image[data-v-7d492133]{\n  width: 100%;\n  height: 100%;\n  /*width: 247px;\n  height: 247px;*/\n}\n", ""]);

// exports


/***/ }),

/***/ 28:
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
//
//
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
  created: function created() {
    var iconBase64 = 'data:font/truetype;base64,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sAIlRyNHI2GwAFRYLiA8IyEbsAIlsAIlRyNHI2EgsAUlsAQlRyNHI2GwBiWwBSVJsAIlYbABRWMjIFhiGyFZY7ABRWJgIy4jICA8ijgjIVktsDMssAAWILAJQyAuRyNHI2EgYLAgYGawgGIjICA8ijgtsDQsIyAuRrACJUZSWCA8WS6xJAEUKy2wNSwjIC5GsAIlRlBYIDxZLrEkARQrLbA2LCMgLkawAiVGUlggPFkjIC5GsAIlRlBYIDxZLrEkARQrLbA3LLAuKyMgLkawAiVGUlggPFkusSQBFCstsDgssC8riiAgPLAEI0KKOCMgLkawAiVGUlggPFkusSQBFCuwBEMusCQrLbA5LLAAFrAEJbAEJiAuRyNHI2GwBkUrIyA8IC4jOLEkARQrLbA6LLEJBCVCsAAWsAQlsAQlIC5HI0cjYSCwBCNCsAZFKyCwYFBYILBAUVizAiADIBuzAiYDGllCQiMgR7AEQ7CAYmAgsAArIIqKYSCwAkNgZCOwA0NhZFBYsAJDYRuwA0NgWbADJbCAYmGwAiVGYTgjIDwjOBshICBGI0ewACsjYTghWbEkARQrLbA7LLAuKy6xJAEUKy2wPCywLyshIyAgPLAEI0IjOLEkARQrsARDLrAkKy2wPSywABUgR7AAI0KyAAEBFRQTLrAqKi2wPiywABUgR7AAI0KyAAEBFRQTLrAqKi2wPyyxAAEUE7ArKi2wQCywLSotsEEssAAWRSMgLiBGiiNhOLEkARQrLbBCLLAJI0KwQSstsEMssgAAOistsEQssgABOistsEUssgEAOistsEYssgEBOistsEcssgAAOystsEgssgABOystsEkssgEAOystsEossgEBOystsEsssgAANystsEwssgABNystsE0ssgEANystsE4ssgEBNystsE8ssgAAOSstsFAssgABOSstsFEssgEAOSstsFIssgEBOSstsFMssgAAPCstsFQssgABPCstsFUssgEAPCstsFYssgEBPCstsFcssgAAOCstsFgssgABOCstsFkssgEAOCstsFossgEBOCstsFsssDArLrEkARQrLbBcLLAwK7A0Ky2wXSywMCuwNSstsF4ssAAWsDArsDYrLbBfLLAxKy6xJAEUKy2wYCywMSuwNCstsGEssDErsDUrLbBiLLAxK7A2Ky2wYyywMisusSQBFCstsGQssDIrsDQrLbBlLLAyK7A1Ky2wZiywMiuwNistsGcssDMrLrEkARQrLbBoLLAzK7A0Ky2waSywMyuwNSstsGossDMrsDYrLbBrLCuwCGWwAyRQeLABFTAtAABLuADIUlixAQGOWbkIAAgAYyCwASNEILADI3CwDkUgIEu4AA5RS7AGU1pYsDQbsChZYGYgilVYsAIlYbABRWMjYrACI0SzCgkFBCuzCgsFBCuzDg8FBCtZsgQoCUVSRLMKDQYEK7EGAUSxJAGIUViwQIhYsQYDRLEmAYhRWLgEAIhYsQYBRFlZWVm4Af+FsASNsQUARAAAAA==';
    var domModule = weex.requireModule("dom");
    domModule.addRule('fontFace', {
      'fontFamily': 'iconfont-http', //注意这里必须是驼峰命名，跟上面的css样式对照
      'src': "url('http://at.alicdn.com/t/font_1469606063_76593.ttf')"
    });
    domModule.addRule('fontFace', {
      'fontFamily': 'iconfont-base64', //注意这里必须是驼峰命名，跟上面的css样式对照
      'src': "url(" + decodeURI(iconBase64) + ")"
    });
  },
  mounted: function mounted() {
    this.images = [{ url: 'http://placeholder.qiniudn.com/260x260' }, { url: 'http://placeholder.qiniudn.com/260x260' }, { url: 'http://placeholder.qiniudn.com/260x260' }];
  }
};

/***/ }),

/***/ 29:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "wrapper weex-ct weex-div",
    attrs: {
      "weex-type": "div"
    }
  }, [_c('div', {
    staticClass: "ui-panel weex-ct weex-div",
    attrs: {
      "weex-type": "div"
    }
  }, [_c('p', {
    staticClass: "h2 weex-el weex-text",
    attrs: {
      "weex-type": "text"
    }
  }, [_vm._v("图片 SIZE")]), _vm._v(" "), _c('div', {
    staticClass: "grid-3 grid-3-equal weex-ct weex-div",
    attrs: {
      "weex-type": "div"
    }
  }, _vm._l((_vm.images), function(item, index) {
    return _c('div', {
      staticClass: "grid-item grid-item-equal weex-ct weex-div",
      attrs: {
        "weex-type": "div"
      }
    }, [_c('figure', {
      staticClass: "grid-item-image weex-el weex-image",
      attrs: {
        "src": item.url,
        "data-img-src": item.url,
        "weex-type": "image"
      }
    })])
  }))]), _vm._v(" "), _c('div', {
    staticClass: "ui-panel weex-ct weex-div",
    attrs: {
      "weex-type": "div"
    }
  }, [_c('p', {
    staticClass: "h2 weex-el weex-text",
    attrs: {
      "weex-type": "text"
    }
  }, [_vm._v("图片 格式")]), _vm._v(" "), _c('div', {
    staticClass: "grid-2 weex-ct weex-div",
    attrs: {
      "weex-type": "div"
    }
  }, [_c('div', {
    staticClass: "grid2-item weex-ct weex-div",
    attrs: {
      "weex-type": "div"
    }
  }, [_c('p', {
    staticClass: "c2-title ui-border-right weex-el weex-text",
    attrs: {
      "weex-type": "text"
    }
  }, [_vm._v("URL")])]), _vm._v(" "), _c('div', {
    staticClass: "grid2-item weex-ct weex-div",
    attrs: {
      "weex-type": "div"
    }
  }, [_c('p', {
    staticClass: "c2-title weex-el weex-text",
    attrs: {
      "weex-type": "text"
    }
  }, [_vm._v("Base64")])])]), _vm._v(" "), _c('div', {
    staticClass: "grid-2 weex-ct weex-div",
    attrs: {
      "weex-type": "div"
    }
  }, [_c('div', {
    staticClass: "grid2-item weex-ct weex-div",
    attrs: {
      "weex-type": "div"
    }
  }, [_c('figure', {
    staticClass: "image-logo weex-el weex-image",
    attrs: {
      "src": "http://111.231.236.41/demo/sam/weex/image/logo.png",
      "data-img-src": "http://111.231.236.41/demo/sam/weex/image/logo.png",
      "weex-type": "image"
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "grid2-item weex-ct weex-div",
    attrs: {
      "weex-type": "div"
    }
  }, [_c('figure', {
    staticClass: "image-logo weex-el weex-image",
    attrs: {
      "src": "data:image/png;base64,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",
      "data-img-src": "data:image/png;base64,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",
      "weex-type": "image"
    }
  })])]), _vm._v(" "), _c('div', {
    staticClass: "grid-2 weex-ct weex-div",
    attrs: {
      "weex-type": "div"
    }
  }, [_c('div', {
    staticClass: "grid2-item weex-ct weex-div",
    attrs: {
      "weex-type": "div"
    }
  }, [_c('figure', {
    staticClass: "image-logo weex-el weex-image",
    attrs: {
      "src": "http://111.231.236.41/demo/sam/weex/image/logo.jpg",
      "data-img-src": "http://111.231.236.41/demo/sam/weex/image/logo.jpg",
      "weex-type": "image"
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "grid2-item weex-ct weex-div",
    attrs: {
      "weex-type": "div"
    }
  }, [_c('figure', {
    staticClass: "image-logo weex-el weex-image",
    attrs: {
      "src": "data:image/jpeg;base64,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QwAAAAMAAAAAUmQgIGRvdWJAb+AAAAAAAAAAAABHcm4gZG91YkBv4AAAAAAAAAAAAEJsICBkb3ViQG/gAAAAAAAAAAAAQnJkVFVudEYjUmx0AAAAAAAAAAAAAAAAQmxkIFVudEYjUmx0AAAAAAAAAAAAAAAAUnNsdFVudEYjUHhsQFIAAAAAAAAAAAAKdmVjdG9yRGF0YWJvb2wBAAAAAFBnUHNlbnVtAAAAAFBnUHMAAAAAUGdQQwAAAABMZWZ0VW50RiNSbHQAAAAAAAAAAAAAAABUb3AgVW50RiNSbHQAAAAAAAAAAAAAAABTY2wgVW50RiNQcmNAWQAAAAAAAAAAABBjcm9wV2hlblByaW50aW5nYm9vbAAAAAAOY3JvcFJlY3RCb3R0b21sb25nAAAAAAAAAAxjcm9wUmVjdExlZnRsb25nAAAAAAAAAA1jcm9wUmVjdFJpZ2h0bG9uZwAAAAAAAAALY3JvcFJlY3RUb3Bsb25nAAAAAAA4QklNA+0AAAAAABAASAAAAAEAAgBIAAAAAQACOEJJTQQmAAAAAAAOAAAAAAAAAAAAAD+AAAA4QklNBA0AAAAAAAQAAAAeOEJJTQQZAAAAAAAEAAAAHjhCSU0D8wAAAAAACQAAAAAAAAAAAQA4QklNJxAAAAAAAAoAAQAAAAAAAAACOEJJTQP1AAAAAABIAC9mZgABAGxmZgAGAAAAAAABAC9mZgABAKGZmgAGAAAAAAABADIAAAABAFoAAAAGAAAAAAABADUAAAABAC0AAAAGAAAAAAABOEJJTQP4AAAAAABwAAD/////////////////////////////A+gAAAAA/////////////////////////////wPoAAAAAP////////////////////////////8D6AAAAAD/////////////////////////////A+gAADhCSU0EAAAAAAAAAgAAOEJJTQQCAAAAAAAEAAAAADhCSU0EMAAAAAAAAgEBOEJJTQQtAAAAAAAGAAEAAAAEOEJJTQQIAAAAAAAQAAAAAQAAAkAAAAJAAAAAADhCSU0EHgAAAAAABAAAAAA4QklNBBoAAAAAAz0AAAAGAAAAAAAAAAAAAAK+AAACvgAAAAQAbABvAGcAbwAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAA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OjI3OjMxKzA4OjAwIiBkYzpmb3JtYXQ9ImltYWdlL2pwZWciIHBob3Rvc2hvcDpDb2xvck1vZGU9IjMiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MjY1NjdlYjMtMGU3Mi00MDZmLTg5ZmItYThiMjU4YjMzYWI2IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjc0MTFjNjdkLWRhNTEtNDU2Yi1iNzFlLTc4ZTAzMzE3MmJiZiIgeG1wTU06T3JpZ2luYWxEb2N1bWVudElEPSJ4bXAuZGlkOjc0MTFjNjdkLWRhNTEtNDU2Yi1iNzFlLTc4ZTAzMzE3MmJiZiI+IDx4bXBNTTpIaXN0b3J5PiA8cmRmOlNlcT4gPHJkZjpsaSBzdEV2dDphY3Rpb249ImNyZWF0ZWQiIHN0RXZ0Omluc3RhbmNlSUQ9InhtcC5paWQ6NzQxMWM2N2QtZGE1MS00NTZiLWI3MWUtNzhlMDMzMTcyYmJmIiBzdEV2dDp3aGVuPSIyMDE4LTA3LTEyVDE4OjI1OjU1KzA4OjAwIiBzdEV2dDpzb2Z0d2FyZUFnZW50PSJBZG9iZSBQaG90b3Nob3AgQ0MgKE1hY2ludG9zaCkiLz4gPHJkZjpsaSBzdEV2dDphY3Rpb249ImNvbnZlcnRlZCIgc3RFdnQ6cGFyYW1ldGVycz0iZnJvbSBpbWFnZS9wbmcgdG8gaW1hZ2UvanBlZyIvPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0ic2F2ZWQiIHN0RXZ0Omluc3RhbmNlSUQ9InhtcC5paWQ6MjY1NjdlYjMtMGU3Mi00MDZmLTg5ZmItYThiMjU4YjMzYWI2IiBzdEV2dDp3aGVuPSIyMDE4LTA3LTEyVDE4OjI3OjMxKzA4OjAwIiBzdEV2dDpzb2Z0d2FyZUFnZW50PSJBZG9iZSBQaG90b3Nob3AgQ0MgKE1hY2ludG9zaCkiIHN0RXZ0OmNoYW5nZWQ9Ii8iLz4gPC9yZGY6U2VxPiA8L3htcE1NOkhpc3Rvcnk+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg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",
      "data-img-src": "data:image/jpeg;base64,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QwAAAAMAAAAAUmQgIGRvdWJAb+AAAAAAAAAAAABHcm4gZG91YkBv4AAAAAAAAAAAAEJsICBkb3ViQG/gAAAAAAAAAAAAQnJkVFVudEYjUmx0AAAAAAAAAAAAAAAAQmxkIFVudEYjUmx0AAAAAAAAAAAAAAAAUnNsdFVudEYjUHhsQFIAAAAAAAAAAAAKdmVjdG9yRGF0YWJvb2wBAAAAAFBnUHNlbnVtAAAAAFBnUHMAAAAAUGdQQwAAAABMZWZ0VW50RiNSbHQAAAAAAAAAAAAAAABUb3AgVW50RiNSbHQAAAAAAAAAAAAAAABTY2wgVW50RiNQcmNAWQAAAAAAAAAAABBjcm9wV2hlblByaW50aW5nYm9vbAAAAAAOY3JvcFJlY3RCb3R0b21sb25nAAAAAAAAAAxjcm9wUmVjdExlZnRsb25nAAAAAAAAAA1jcm9wUmVjdFJpZ2h0bG9uZwAAAAAAAAALY3JvcFJlY3RUb3Bsb25nAAAAAAA4QklNA+0AAAAAABAASAAAAAEAAgBIAAAAAQACOEJJTQQmAAAAAAAOAAAAAAAAAAAAAD+AAAA4QklNBA0AAAAAAAQAAAAeOEJJTQQZAAAAAAAEAAAAHjhCSU0D8wAAAAAACQAAAAAAAAAAAQA4QklNJxAAAAAAAAoAAQAAAAAAAAACOEJJTQP1AAAAAABIAC9mZgABAGxmZgAGAAAAAAABAC9mZgABAKGZmgAGAAAAAAABADIAAAABAFoAAAAGAAAAAAABADUAAAABAC0AAAAGAAAAAAABOEJJTQP4AAAAAABwAAD/////////////////////////////A+gAAAAA/////////////////////////////wPoAAAAAP////////////////////////////8D6AAAAAD/////////////////////////////A+gAADhCSU0EAAAAAAAAAgAAOEJJTQQCAAAAAAAEAAAAADhCSU0EMAAAAAAAAgEBOEJJTQQtAAAAAAAGAAEAAAAEOEJJTQQIAAAAAAAQAAAAAQAAAkAAAAJAAAAAADhCSU0EHgAAAAAABAAAAAA4QklNBBoAAAAAAz0AAAAGAAAAAAAAAAAAAAK+AAACvgAAAAQAbABvAGcAbwAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAA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OjI3OjMxKzA4OjAwIiBkYzpmb3JtYXQ9ImltYWdlL2pwZWciIHBob3Rvc2hvcDpDb2xvck1vZGU9IjMiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MjY1NjdlYjMtMGU3Mi00MDZmLTg5ZmItYThiMjU4YjMzYWI2IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjc0MTFjNjdkLWRhNTEtNDU2Yi1iNzFlLTc4ZTAzMzE3MmJiZiIgeG1wTU06T3JpZ2luYWxEb2N1bWVudElEPSJ4bXAuZGlkOjc0MTFjNjdkLWRhNTEtNDU2Yi1iNzFlLTc4ZTAzMzE3MmJiZiI+IDx4bXBNTTpIaXN0b3J5PiA8cmRmOlNlcT4gPHJkZjpsaSBzdEV2dDphY3Rpb249ImNyZWF0ZWQiIHN0RXZ0Omluc3RhbmNlSUQ9InhtcC5paWQ6NzQxMWM2N2QtZGE1MS00NTZiLWI3MWUtNzhlMDMzMTcyYmJmIiBzdEV2dDp3aGVuPSIyMDE4LTA3LTEyVDE4OjI1OjU1KzA4OjAwIiBzdEV2dDpzb2Z0d2FyZUFnZW50PSJBZG9iZSBQaG90b3Nob3AgQ0MgKE1hY2ludG9zaCkiLz4gPHJkZjpsaSBzdEV2dDphY3Rpb249ImNvbnZlcnRlZCIgc3RFdnQ6cGFyYW1ldGVycz0iZnJvbSBpbWFnZS9wbmcgdG8gaW1hZ2UvanBlZyIvPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0ic2F2ZWQiIHN0RXZ0Omluc3RhbmNlSUQ9InhtcC5paWQ6MjY1NjdlYjMtMGU3Mi00MDZmLTg5ZmItYThiMjU4YjMzYWI2IiBzdEV2dDp3aGVuPSIyMDE4LTA3LTEyVDE4OjI3OjMxKzA4OjAwIiBzdEV2dDpzb2Z0d2FyZUFnZW50PSJBZG9iZSBQaG90b3Nob3AgQ0MgKE1hY2ludG9zaCkiIHN0RXZ0OmNoYW5nZWQ9Ii8iLz4gPC9yZGY6U2VxPiA8L3htcE1NOkhpc3Rvcnk+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg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",
      "weex-type": "image"
    }
  })])]), _vm._v(" "), _c('div', {
    staticClass: "grid-2 weex-ct weex-div",
    attrs: {
      "weex-type": "div"
    }
  }, [_c('div', {
    staticClass: "grid2-item weex-ct weex-div",
    attrs: {
      "weex-type": "div"
    }
  }, [_c('figure', {
    staticClass: "image-logo-gif weex-el weex-image",
    attrs: {
      "src": "http://111.231.236.41/demo/sam/weex/image/logo.gif",
      "data-img-src": "http://111.231.236.41/demo/sam/weex/image/logo.gif",
      "weex-type": "image"
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "grid2-item weex-ct weex-div",
    attrs: {
      "weex-type": "div"
    }
  }, [_c('figure', {
    staticClass: "image-logo-gif weex-el weex-image",
    attrs: {
      "weex-type": "image"
    }
  })])])]), _vm._v(" "), _c('div', {
    staticClass: "ui-panel weex-ct weex-div",
    attrs: {
      "weex-type": "div"
    }
  }, [_c('p', {
    staticClass: "h2 weex-el weex-text",
    attrs: {
      "weex-type": "text"
    }
  }, [_vm._v("Font ICON")]), _vm._v(" "), _c('div', {
    staticClass: "grid-2 weex-ct weex-div",
    attrs: {
      "weex-type": "div"
    }
  }, [_c('div', {
    staticClass: "grid2-item weex-ct weex-div",
    attrs: {
      "weex-type": "div"
    }
  }, [_c('p', {
    staticClass: "c2-title ui-border-right weex-el weex-text",
    attrs: {
      "weex-type": "text"
    }
  }, [_vm._v("URL")])]), _vm._v(" "), _c('div', {
    staticClass: "grid2-item weex-ct weex-div",
    attrs: {
      "weex-type": "div"
    }
  }, [_c('p', {
    staticClass: "c2-title weex-el weex-text",
    attrs: {
      "weex-type": "text"
    }
  }, [_vm._v("Base64")])])]), _vm._v(" "), _c('div', {
    staticClass: "grid-2 weex-ct weex-div",
    attrs: {
      "weex-type": "div"
    }
  }, [_c('div', {
    staticClass: "grid2-item weex-ct weex-div",
    attrs: {
      "weex-type": "div"
    }
  }, [_c('p', {
    staticClass: "iconfont-http weex-el weex-text",
    attrs: {
      "weex-type": "text"
    }
  }, [_vm._v("")])]), _vm._v(" "), _c('div', {
    staticClass: "grid2-item weex-ct weex-div",
    attrs: {
      "weex-type": "div"
    }
  }, [_c('p', {
    staticClass: "iconfont-base64 weex-el weex-text",
    attrs: {
      "weex-type": "text"
    }
  }, [_vm._v("")])])])])])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-7d492133", module.exports)
  }
}

/***/ }),

/***/ 3:
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),

/***/ 4:
/***/ (function(module, exports, __webpack_require__) {

/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
  Modified by Evan You @yyx990803
*/

var hasDocument = typeof document !== 'undefined'

if (typeof DEBUG !== 'undefined' && DEBUG) {
  if (!hasDocument) {
    throw new Error(
    'vue-style-loader cannot be used in a non-browser environment. ' +
    "Use { target: 'node' } in your Webpack config to indicate a server-rendering environment."
  ) }
}

var listToStyles = __webpack_require__(9)

/*
type StyleObject = {
  id: number;
  parts: Array<StyleObjectPart>
}

type StyleObjectPart = {
  css: string;
  media: string;
  sourceMap: ?string
}
*/

var stylesInDom = {/*
  [id: number]: {
    id: number,
    refs: number,
    parts: Array<(obj?: StyleObjectPart) => void>
  }
*/}

var head = hasDocument && (document.head || document.getElementsByTagName('head')[0])
var singletonElement = null
var singletonCounter = 0
var isProduction = false
var noop = function () {}
var options = null
var ssrIdKey = 'data-vue-ssr-id'

// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
// tags it will allow on a page
var isOldIE = typeof navigator !== 'undefined' && /msie [6-9]\b/.test(navigator.userAgent.toLowerCase())

module.exports = function (parentId, list, _isProduction, _options) {
  isProduction = _isProduction

  options = _options || {}

  var styles = listToStyles(parentId, list)
  addStylesToDom(styles)

  return function update (newList) {
    var mayRemove = []
    for (var i = 0; i < styles.length; i++) {
      var item = styles[i]
      var domStyle = stylesInDom[item.id]
      domStyle.refs--
      mayRemove.push(domStyle)
    }
    if (newList) {
      styles = listToStyles(parentId, newList)
      addStylesToDom(styles)
    } else {
      styles = []
    }
    for (var i = 0; i < mayRemove.length; i++) {
      var domStyle = mayRemove[i]
      if (domStyle.refs === 0) {
        for (var j = 0; j < domStyle.parts.length; j++) {
          domStyle.parts[j]()
        }
        delete stylesInDom[domStyle.id]
      }
    }
  }
}

function addStylesToDom (styles /* Array<StyleObject> */) {
  for (var i = 0; i < styles.length; i++) {
    var item = styles[i]
    var domStyle = stylesInDom[item.id]
    if (domStyle) {
      domStyle.refs++
      for (var j = 0; j < domStyle.parts.length; j++) {
        domStyle.parts[j](item.parts[j])
      }
      for (; j < item.parts.length; j++) {
        domStyle.parts.push(addStyle(item.parts[j]))
      }
      if (domStyle.parts.length > item.parts.length) {
        domStyle.parts.length = item.parts.length
      }
    } else {
      var parts = []
      for (var j = 0; j < item.parts.length; j++) {
        parts.push(addStyle(item.parts[j]))
      }
      stylesInDom[item.id] = { id: item.id, refs: 1, parts: parts }
    }
  }
}

function createStyleElement () {
  var styleElement = document.createElement('style')
  styleElement.type = 'text/css'
  head.appendChild(styleElement)
  return styleElement
}

function addStyle (obj /* StyleObjectPart */) {
  var update, remove
  var styleElement = document.querySelector('style[' + ssrIdKey + '~="' + obj.id + '"]')

  if (styleElement) {
    if (isProduction) {
      // has SSR styles and in production mode.
      // simply do nothing.
      return noop
    } else {
      // has SSR styles but in dev mode.
      // for some reason Chrome can't handle source map in server-rendered
      // style tags - source maps in <style> only works if the style tag is
      // created and inserted dynamically. So we remove the server rendered
      // styles and inject new ones.
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  if (isOldIE) {
    // use singleton mode for IE9.
    var styleIndex = singletonCounter++
    styleElement = singletonElement || (singletonElement = createStyleElement())
    update = applyToSingletonTag.bind(null, styleElement, styleIndex, false)
    remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true)
  } else {
    // use multi-style-tag mode in all other cases
    styleElement = createStyleElement()
    update = applyToTag.bind(null, styleElement)
    remove = function () {
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  update(obj)

  return function updateStyle (newObj /* StyleObjectPart */) {
    if (newObj) {
      if (newObj.css === obj.css &&
          newObj.media === obj.media &&
          newObj.sourceMap === obj.sourceMap) {
        return
      }
      update(obj = newObj)
    } else {
      remove()
    }
  }
}

var replaceText = (function () {
  var textStore = []

  return function (index, replacement) {
    textStore[index] = replacement
    return textStore.filter(Boolean).join('\n')
  }
})()

function applyToSingletonTag (styleElement, index, remove, obj) {
  var css = remove ? '' : obj.css

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = replaceText(index, css)
  } else {
    var cssNode = document.createTextNode(css)
    var childNodes = styleElement.childNodes
    if (childNodes[index]) styleElement.removeChild(childNodes[index])
    if (childNodes.length) {
      styleElement.insertBefore(cssNode, childNodes[index])
    } else {
      styleElement.appendChild(cssNode)
    }
  }
}

function applyToTag (styleElement, obj) {
  var css = obj.css
  var media = obj.media
  var sourceMap = obj.sourceMap

  if (media) {
    styleElement.setAttribute('media', media)
  }
  if (options.ssrId) {
    styleElement.setAttribute(ssrIdKey, obj.id)
  }

  if (sourceMap) {
    // https://developer.chrome.com/devtools/docs/javascript-debugging
    // this makes source maps inside style tags work properly in Chrome
    css += '\n/*# sourceURL=' + sourceMap.sources[0] + ' */'
    // http://stackoverflow.com/a/26603875
    css += '\n/*# sourceMappingURL=data:application/json;base64,' + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + ' */'
  }

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild)
    }
    styleElement.appendChild(document.createTextNode(css))
  }
}


/***/ }),

/***/ 5:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function(process, global, setImmediate) {/*!
 * Vue.js v2.5.16
 * (c) 2014-2018 Evan You
 * Released under the MIT License.
 */
/*  */

var emptyObject = Object.freeze({});

// these helpers produces better vm code in JS engines due to their
// explicitness and function inlining
function isUndef (v) {
  return v === undefined || v === null
}

function isDef (v) {
  return v !== undefined && v !== null
}

function isTrue (v) {
  return v === true
}

function isFalse (v) {
  return v === false
}

/**
 * Check if value is primitive
 */
function isPrimitive (value) {
  return (
    typeof value === 'string' ||
    typeof value === 'number' ||
    // $flow-disable-line
    typeof value === 'symbol' ||
    typeof value === 'boolean'
  )
}

/**
 * Quick object check - this is primarily used to tell
 * Objects from primitive values when we know the value
 * is a JSON-compliant type.
 */
function isObject (obj) {
  return obj !== null && typeof obj === 'object'
}

/**
 * Get the raw type string of a value e.g. [object Object]
 */
var _toString = Object.prototype.toString;

function toRawType (value) {
  return _toString.call(value).slice(8, -1)
}

/**
 * Strict object type check. Only returns true
 * for plain JavaScript objects.
 */
function isPlainObject (obj) {
  return _toString.call(obj) === '[object Object]'
}

function isRegExp (v) {
  return _toString.call(v) === '[object RegExp]'
}

/**
 * Check if val is a valid array index.
 */
function isValidArrayIndex (val) {
  var n = parseFloat(String(val));
  return n >= 0 && Math.floor(n) === n && isFinite(val)
}

/**
 * Convert a value to a string that is actually rendered.
 */
function toString (val) {
  return val == null
    ? ''
    : typeof val === 'object'
      ? JSON.stringify(val, null, 2)
      : String(val)
}

/**
 * Convert a input value to a number for persistence.
 * If the conversion fails, return original string.
 */
function toNumber (val) {
  var n = parseFloat(val);
  return isNaN(n) ? val : n
}

/**
 * Make a map and return a function for checking if a key
 * is in that map.
 */
function makeMap (
  str,
  expectsLowerCase
) {
  var map = Object.create(null);
  var list = str.split(',');
  for (var i = 0; i < list.length; i++) {
    map[list[i]] = true;
  }
  return expectsLowerCase
    ? function (val) { return map[val.toLowerCase()]; }
    : function (val) { return map[val]; }
}

/**
 * Check if a tag is a built-in tag.
 */
var isBuiltInTag = makeMap('slot,component', true);

/**
 * Check if a attribute is a reserved attribute.
 */
var isReservedAttribute = makeMap('key,ref,slot,slot-scope,is');

/**
 * Remove an item from an array
 */
function remove (arr, item) {
  if (arr.length) {
    var index = arr.indexOf(item);
    if (index > -1) {
      return arr.splice(index, 1)
    }
  }
}

/**
 * Check whether the object has the property.
 */
var hasOwnProperty = Object.prototype.hasOwnProperty;
function hasOwn (obj, key) {
  return hasOwnProperty.call(obj, key)
}

/**
 * Create a cached version of a pure function.
 */
function cached (fn) {
  var cache = Object.create(null);
  return (function cachedFn (str) {
    var hit = cache[str];
    return hit || (cache[str] = fn(str))
  })
}

/**
 * Camelize a hyphen-delimited string.
 */
var camelizeRE = /-(\w)/g;
var camelize = cached(function (str) {
  return str.replace(camelizeRE, function (_, c) { return c ? c.toUpperCase() : ''; })
});

/**
 * Capitalize a string.
 */
var capitalize = cached(function (str) {
  return str.charAt(0).toUpperCase() + str.slice(1)
});

/**
 * Hyphenate a camelCase string.
 */
var hyphenateRE = /\B([A-Z])/g;
var hyphenate = cached(function (str) {
  return str.replace(hyphenateRE, '-$1').toLowerCase()
});

/**
 * Simple bind polyfill for environments that do not support it... e.g.
 * PhantomJS 1.x. Technically we don't need this anymore since native bind is
 * now more performant in most browsers, but removing it would be breaking for
 * code that was able to run in PhantomJS 1.x, so this must be kept for
 * backwards compatibility.
 */

/* istanbul ignore next */
function polyfillBind (fn, ctx) {
  function boundFn (a) {
    var l = arguments.length;
    return l
      ? l > 1
        ? fn.apply(ctx, arguments)
        : fn.call(ctx, a)
      : fn.call(ctx)
  }

  boundFn._length = fn.length;
  return boundFn
}

function nativeBind (fn, ctx) {
  return fn.bind(ctx)
}

var bind = Function.prototype.bind
  ? nativeBind
  : polyfillBind;

/**
 * Convert an Array-like object to a real Array.
 */
function toArray (list, start) {
  start = start || 0;
  var i = list.length - start;
  var ret = new Array(i);
  while (i--) {
    ret[i] = list[i + start];
  }
  return ret
}

/**
 * Mix properties into target object.
 */
function extend (to, _from) {
  for (var key in _from) {
    to[key] = _from[key];
  }
  return to
}

/**
 * Merge an Array of Objects into a single Object.
 */
function toObject (arr) {
  var res = {};
  for (var i = 0; i < arr.length; i++) {
    if (arr[i]) {
      extend(res, arr[i]);
    }
  }
  return res
}

/**
 * Perform no operation.
 * Stubbing args to make Flow happy without leaving useless transpiled code
 * with ...rest (https://flow.org/blog/2017/05/07/Strict-Function-Call-Arity/)
 */
function noop (a, b, c) {}

/**
 * Always return false.
 */
var no = function (a, b, c) { return false; };

/**
 * Return same value
 */
var identity = function (_) { return _; };

/**
 * Generate a static keys string from compiler modules.
 */


/**
 * Check if two values are loosely equal - that is,
 * if they are plain objects, do they have the same shape?
 */
function looseEqual (a, b) {
  if (a === b) { return true }
  var isObjectA = isObject(a);
  var isObjectB = isObject(b);
  if (isObjectA && isObjectB) {
    try {
      var isArrayA = Array.isArray(a);
      var isArrayB = Array.isArray(b);
      if (isArrayA && isArrayB) {
        return a.length === b.length && a.every(function (e, i) {
          return looseEqual(e, b[i])
        })
      } else if (!isArrayA && !isArrayB) {
        var keysA = Object.keys(a);
        var keysB = Object.keys(b);
        return keysA.length === keysB.length && keysA.every(function (key) {
          return looseEqual(a[key], b[key])
        })
      } else {
        /* istanbul ignore next */
        return false
      }
    } catch (e) {
      /* istanbul ignore next */
      return false
    }
  } else if (!isObjectA && !isObjectB) {
    return String(a) === String(b)
  } else {
    return false
  }
}

function looseIndexOf (arr, val) {
  for (var i = 0; i < arr.length; i++) {
    if (looseEqual(arr[i], val)) { return i }
  }
  return -1
}

/**
 * Ensure a function is called only once.
 */
function once (fn) {
  var called = false;
  return function () {
    if (!called) {
      called = true;
      fn.apply(this, arguments);
    }
  }
}

var SSR_ATTR = 'data-server-rendered';

var ASSET_TYPES = [
  'component',
  'directive',
  'filter'
];

var LIFECYCLE_HOOKS = [
  'beforeCreate',
  'created',
  'beforeMount',
  'mounted',
  'beforeUpdate',
  'updated',
  'beforeDestroy',
  'destroyed',
  'activated',
  'deactivated',
  'errorCaptured'
];

/*  */

var config = ({
  /**
   * Option merge strategies (used in core/util/options)
   */
  // $flow-disable-line
  optionMergeStrategies: Object.create(null),

  /**
   * Whether to suppress warnings.
   */
  silent: false,

  /**
   * Show production mode tip message on boot?
   */
  productionTip: process.env.NODE_ENV !== 'production',

  /**
   * Whether to enable devtools
   */
  devtools: process.env.NODE_ENV !== 'production',

  /**
   * Whether to record perf
   */
  performance: false,

  /**
   * Error handler for watcher errors
   */
  errorHandler: null,

  /**
   * Warn handler for watcher warns
   */
  warnHandler: null,

  /**
   * Ignore certain custom elements
   */
  ignoredElements: [],

  /**
   * Custom user key aliases for v-on
   */
  // $flow-disable-line
  keyCodes: Object.create(null),

  /**
   * Check if a tag is reserved so that it cannot be registered as a
   * component. This is platform-dependent and may be overwritten.
   */
  isReservedTag: no,

  /**
   * Check if an attribute is reserved so that it cannot be used as a component
   * prop. This is platform-dependent and may be overwritten.
   */
  isReservedAttr: no,

  /**
   * Check if a tag is an unknown element.
   * Platform-dependent.
   */
  isUnknownElement: no,

  /**
   * Get the namespace of an element
   */
  getTagNamespace: noop,

  /**
   * Parse the real tag name for the specific platform.
   */
  parsePlatformTagName: identity,

  /**
   * Check if an attribute must be bound using property, e.g. value
   * Platform-dependent.
   */
  mustUseProp: no,

  /**
   * Exposed for legacy reasons
   */
  _lifecycleHooks: LIFECYCLE_HOOKS
})

/*  */

/**
 * Check if a string starts with $ or _
 */
function isReserved (str) {
  var c = (str + '').charCodeAt(0);
  return c === 0x24 || c === 0x5F
}

/**
 * Define a property.
 */
function def (obj, key, val, enumerable) {
  Object.defineProperty(obj, key, {
    value: val,
    enumerable: !!enumerable,
    writable: true,
    configurable: true
  });
}

/**
 * Parse simple path.
 */
var bailRE = /[^\w.$]/;
function parsePath (path) {
  if (bailRE.test(path)) {
    return
  }
  var segments = path.split('.');
  return function (obj) {
    for (var i = 0; i < segments.length; i++) {
      if (!obj) { return }
      obj = obj[segments[i]];
    }
    return obj
  }
}

/*  */

// can we use __proto__?
var hasProto = '__proto__' in {};

// Browser environment sniffing
var inBrowser = typeof window !== 'undefined';
var inWeex = typeof WXEnvironment !== 'undefined' && !!WXEnvironment.platform;
var weexPlatform = inWeex && WXEnvironment.platform.toLowerCase();
var UA = inBrowser && window.navigator.userAgent.toLowerCase();
var isIE = UA && /msie|trident/.test(UA);
var isIE9 = UA && UA.indexOf('msie 9.0') > 0;
var isEdge = UA && UA.indexOf('edge/') > 0;
var isAndroid = (UA && UA.indexOf('android') > 0) || (weexPlatform === 'android');
var isIOS = (UA && /iphone|ipad|ipod|ios/.test(UA)) || (weexPlatform === 'ios');
var isChrome = UA && /chrome\/\d+/.test(UA) && !isEdge;

// Firefox has a "watch" function on Object.prototype...
var nativeWatch = ({}).watch;

var supportsPassive = false;
if (inBrowser) {
  try {
    var opts = {};
    Object.defineProperty(opts, 'passive', ({
      get: function get () {
        /* istanbul ignore next */
        supportsPassive = true;
      }
    })); // https://github.com/facebook/flow/issues/285
    window.addEventListener('test-passive', null, opts);
  } catch (e) {}
}

// this needs to be lazy-evaled because vue may be required before
// vue-server-renderer can set VUE_ENV
var _isServer;
var isServerRendering = function () {
  if (_isServer === undefined) {
    /* istanbul ignore if */
    if (!inBrowser && !inWeex && typeof global !== 'undefined') {
      // detect presence of vue-server-renderer and avoid
      // Webpack shimming the process
      _isServer = global['process'].env.VUE_ENV === 'server';
    } else {
      _isServer = false;
    }
  }
  return _isServer
};

// detect devtools
var devtools = inBrowser && window.__VUE_DEVTOOLS_GLOBAL_HOOK__;

/* istanbul ignore next */
function isNative (Ctor) {
  return typeof Ctor === 'function' && /native code/.test(Ctor.toString())
}

var hasSymbol =
  typeof Symbol !== 'undefined' && isNative(Symbol) &&
  typeof Reflect !== 'undefined' && isNative(Reflect.ownKeys);

var _Set;
/* istanbul ignore if */ // $flow-disable-line
if (typeof Set !== 'undefined' && isNative(Set)) {
  // use native Set when available.
  _Set = Set;
} else {
  // a non-standard Set polyfill that only works with primitive keys.
  _Set = (function () {
    function Set () {
      this.set = Object.create(null);
    }
    Set.prototype.has = function has (key) {
      return this.set[key] === true
    };
    Set.prototype.add = function add (key) {
      this.set[key] = true;
    };
    Set.prototype.clear = function clear () {
      this.set = Object.create(null);
    };

    return Set;
  }());
}

/*  */

var warn = noop;
var tip = noop;
var generateComponentTrace = (noop); // work around flow check
var formatComponentName = (noop);

if (process.env.NODE_ENV !== 'production') {
  var hasConsole = typeof console !== 'undefined';
  var classifyRE = /(?:^|[-_])(\w)/g;
  var classify = function (str) { return str
    .replace(classifyRE, function (c) { return c.toUpperCase(); })
    .replace(/[-_]/g, ''); };

  warn = function (msg, vm) {
    var trace = vm ? generateComponentTrace(vm) : '';

    if (config.warnHandler) {
      config.warnHandler.call(null, msg, vm, trace);
    } else if (hasConsole && (!config.silent)) {
      console.error(("[Vue warn]: " + msg + trace));
    }
  };

  tip = function (msg, vm) {
    if (hasConsole && (!config.silent)) {
      console.warn("[Vue tip]: " + msg + (
        vm ? generateComponentTrace(vm) : ''
      ));
    }
  };

  formatComponentName = function (vm, includeFile) {
    if (vm.$root === vm) {
      return '<Root>'
    }
    var options = typeof vm === 'function' && vm.cid != null
      ? vm.options
      : vm._isVue
        ? vm.$options || vm.constructor.options
        : vm || {};
    var name = options.name || options._componentTag;
    var file = options.__file;
    if (!name && file) {
      var match = file.match(/([^/\\]+)\.vue$/);
      name = match && match[1];
    }

    return (
      (name ? ("<" + (classify(name)) + ">") : "<Anonymous>") +
      (file && includeFile !== false ? (" at " + file) : '')
    )
  };

  var repeat = function (str, n) {
    var res = '';
    while (n) {
      if (n % 2 === 1) { res += str; }
      if (n > 1) { str += str; }
      n >>= 1;
    }
    return res
  };

  generateComponentTrace = function (vm) {
    if (vm._isVue && vm.$parent) {
      var tree = [];
      var currentRecursiveSequence = 0;
      while (vm) {
        if (tree.length > 0) {
          var last = tree[tree.length - 1];
          if (last.constructor === vm.constructor) {
            currentRecursiveSequence++;
            vm = vm.$parent;
            continue
          } else if (currentRecursiveSequence > 0) {
            tree[tree.length - 1] = [last, currentRecursiveSequence];
            currentRecursiveSequence = 0;
          }
        }
        tree.push(vm);
        vm = vm.$parent;
      }
      return '\n\nfound in\n\n' + tree
        .map(function (vm, i) { return ("" + (i === 0 ? '---> ' : repeat(' ', 5 + i * 2)) + (Array.isArray(vm)
            ? ((formatComponentName(vm[0])) + "... (" + (vm[1]) + " recursive calls)")
            : formatComponentName(vm))); })
        .join('\n')
    } else {
      return ("\n\n(found in " + (formatComponentName(vm)) + ")")
    }
  };
}

/*  */


var uid = 0;

/**
 * A dep is an observable that can have multiple
 * directives subscribing to it.
 */
var Dep = function Dep () {
  this.id = uid++;
  this.subs = [];
};

Dep.prototype.addSub = function addSub (sub) {
  this.subs.push(sub);
};

Dep.prototype.removeSub = function removeSub (sub) {
  remove(this.subs, sub);
};

Dep.prototype.depend = function depend () {
  if (Dep.target) {
    Dep.target.addDep(this);
  }
};

Dep.prototype.notify = function notify () {
  // stabilize the subscriber list first
  var subs = this.subs.slice();
  for (var i = 0, l = subs.length; i < l; i++) {
    subs[i].update();
  }
};

// the current target watcher being evaluated.
// this is globally unique because there could be only one
// watcher being evaluated at any time.
Dep.target = null;
var targetStack = [];

function pushTarget (_target) {
  if (Dep.target) { targetStack.push(Dep.target); }
  Dep.target = _target;
}

function popTarget () {
  Dep.target = targetStack.pop();
}

/*  */

var VNode = function VNode (
  tag,
  data,
  children,
  text,
  elm,
  context,
  componentOptions,
  asyncFactory
) {
  this.tag = tag;
  this.data = data;
  this.children = children;
  this.text = text;
  this.elm = elm;
  this.ns = undefined;
  this.context = context;
  this.fnContext = undefined;
  this.fnOptions = undefined;
  this.fnScopeId = undefined;
  this.key = data && data.key;
  this.componentOptions = componentOptions;
  this.componentInstance = undefined;
  this.parent = undefined;
  this.raw = false;
  this.isStatic = false;
  this.isRootInsert = true;
  this.isComment = false;
  this.isCloned = false;
  this.isOnce = false;
  this.asyncFactory = asyncFactory;
  this.asyncMeta = undefined;
  this.isAsyncPlaceholder = false;
};

var prototypeAccessors = { child: { configurable: true } };

// DEPRECATED: alias for componentInstance for backwards compat.
/* istanbul ignore next */
prototypeAccessors.child.get = function () {
  return this.componentInstance
};

Object.defineProperties( VNode.prototype, prototypeAccessors );

var createEmptyVNode = function (text) {
  if ( text === void 0 ) text = '';

  var node = new VNode();
  node.text = text;
  node.isComment = true;
  return node
};

function createTextVNode (val) {
  return new VNode(undefined, undefined, undefined, String(val))
}

// optimized shallow clone
// used for static nodes and slot nodes because they may be reused across
// multiple renders, cloning them avoids errors when DOM manipulations rely
// on their elm reference.
function cloneVNode (vnode) {
  var cloned = new VNode(
    vnode.tag,
    vnode.data,
    vnode.children,
    vnode.text,
    vnode.elm,
    vnode.context,
    vnode.componentOptions,
    vnode.asyncFactory
  );
  cloned.ns = vnode.ns;
  cloned.isStatic = vnode.isStatic;
  cloned.key = vnode.key;
  cloned.isComment = vnode.isComment;
  cloned.fnContext = vnode.fnContext;
  cloned.fnOptions = vnode.fnOptions;
  cloned.fnScopeId = vnode.fnScopeId;
  cloned.isCloned = true;
  return cloned
}

/*
 * not type checking this file because flow doesn't play well with
 * dynamically accessing methods on Array prototype
 */

var arrayProto = Array.prototype;
var arrayMethods = Object.create(arrayProto);

var methodsToPatch = [
  'push',
  'pop',
  'shift',
  'unshift',
  'splice',
  'sort',
  'reverse'
];

/**
 * Intercept mutating methods and emit events
 */
methodsToPatch.forEach(function (method) {
  // cache original method
  var original = arrayProto[method];
  def(arrayMethods, method, function mutator () {
    var args = [], len = arguments.length;
    while ( len-- ) args[ len ] = arguments[ len ];

    var result = original.apply(this, args);
    var ob = this.__ob__;
    var inserted;
    switch (method) {
      case 'push':
      case 'unshift':
        inserted = args;
        break
      case 'splice':
        inserted = args.slice(2);
        break
    }
    if (inserted) { ob.observeArray(inserted); }
    // notify change
    ob.dep.notify();
    return result
  });
});

/*  */

var arrayKeys = Object.getOwnPropertyNames(arrayMethods);

/**
 * In some cases we may want to disable observation inside a component's
 * update computation.
 */
var shouldObserve = true;

function toggleObserving (value) {
  shouldObserve = value;
}

/**
 * Observer class that is attached to each observed
 * object. Once attached, the observer converts the target
 * object's property keys into getter/setters that
 * collect dependencies and dispatch updates.
 */
var Observer = function Observer (value) {
  this.value = value;
  this.dep = new Dep();
  this.vmCount = 0;
  def(value, '__ob__', this);
  if (Array.isArray(value)) {
    var augment = hasProto
      ? protoAugment
      : copyAugment;
    augment(value, arrayMethods, arrayKeys);
    this.observeArray(value);
  } else {
    this.walk(value);
  }
};

/**
 * Walk through each property and convert them into
 * getter/setters. This method should only be called when
 * value type is Object.
 */
Observer.prototype.walk = function walk (obj) {
  var keys = Object.keys(obj);
  for (var i = 0; i < keys.length; i++) {
    defineReactive(obj, keys[i]);
  }
};

/**
 * Observe a list of Array items.
 */
Observer.prototype.observeArray = function observeArray (items) {
  for (var i = 0, l = items.length; i < l; i++) {
    observe(items[i]);
  }
};

// helpers

/**
 * Augment an target Object or Array by intercepting
 * the prototype chain using __proto__
 */
function protoAugment (target, src, keys) {
  /* eslint-disable no-proto */
  target.__proto__ = src;
  /* eslint-enable no-proto */
}

/**
 * Augment an target Object or Array by defining
 * hidden properties.
 */
/* istanbul ignore next */
function copyAugment (target, src, keys) {
  for (var i = 0, l = keys.length; i < l; i++) {
    var key = keys[i];
    def(target, key, src[key]);
  }
}

/**
 * Attempt to create an observer instance for a value,
 * returns the new observer if successfully observed,
 * or the existing observer if the value already has one.
 */
function observe (value, asRootData) {
  if (!isObject(value) || value instanceof VNode) {
    return
  }
  var ob;
  if (hasOwn(value, '__ob__') && value.__ob__ instanceof Observer) {
    ob = value.__ob__;
  } else if (
    shouldObserve &&
    !isServerRendering() &&
    (Array.isArray(value) || isPlainObject(value)) &&
    Object.isExtensible(value) &&
    !value._isVue
  ) {
    ob = new Observer(value);
  }
  if (asRootData && ob) {
    ob.vmCount++;
  }
  return ob
}

/**
 * Define a reactive property on an Object.
 */
function defineReactive (
  obj,
  key,
  val,
  customSetter,
  shallow
) {
  var dep = new Dep();

  var property = Object.getOwnPropertyDescriptor(obj, key);
  if (property && property.configurable === false) {
    return
  }

  // cater for pre-defined getter/setters
  var getter = property && property.get;
  if (!getter && arguments.length === 2) {
    val = obj[key];
  }
  var setter = property && property.set;

  var childOb = !shallow && observe(val);
  Object.defineProperty(obj, key, {
    enumerable: true,
    configurable: true,
    get: function reactiveGetter () {
      var value = getter ? getter.call(obj) : val;
      if (Dep.target) {
        dep.depend();
        if (childOb) {
          childOb.dep.depend();
          if (Array.isArray(value)) {
            dependArray(value);
          }
        }
      }
      return value
    },
    set: function reactiveSetter (newVal) {
      var value = getter ? getter.call(obj) : val;
      /* eslint-disable no-self-compare */
      if (newVal === value || (newVal !== newVal && value !== value)) {
        return
      }
      /* eslint-enable no-self-compare */
      if (process.env.NODE_ENV !== 'production' && customSetter) {
        customSetter();
      }
      if (setter) {
        setter.call(obj, newVal);
      } else {
        val = newVal;
      }
      childOb = !shallow && observe(newVal);
      dep.notify();
    }
  });
}

/**
 * Set a property on an object. Adds the new property and
 * triggers change notification if the property doesn't
 * already exist.
 */
function set (target, key, val) {
  if (process.env.NODE_ENV !== 'production' &&
    (isUndef(target) || isPrimitive(target))
  ) {
    warn(("Cannot set reactive property on undefined, null, or primitive value: " + ((target))));
  }
  if (Array.isArray(target) && isValidArrayIndex(key)) {
    target.length = Math.max(target.length, key);
    target.splice(key, 1, val);
    return val
  }
  if (key in target && !(key in Object.prototype)) {
    target[key] = val;
    return val
  }
  var ob = (target).__ob__;
  if (target._isVue || (ob && ob.vmCount)) {
    process.env.NODE_ENV !== 'production' && warn(
      'Avoid adding reactive properties to a Vue instance or its root $data ' +
      'at runtime - declare it upfront in the data option.'
    );
    return val
  }
  if (!ob) {
    target[key] = val;
    return val
  }
  defineReactive(ob.value, key, val);
  ob.dep.notify();
  return val
}

/**
 * Delete a property and trigger change if necessary.
 */
function del (target, key) {
  if (process.env.NODE_ENV !== 'production' &&
    (isUndef(target) || isPrimitive(target))
  ) {
    warn(("Cannot delete reactive property on undefined, null, or primitive value: " + ((target))));
  }
  if (Array.isArray(target) && isValidArrayIndex(key)) {
    target.splice(key, 1);
    return
  }
  var ob = (target).__ob__;
  if (target._isVue || (ob && ob.vmCount)) {
    process.env.NODE_ENV !== 'production' && warn(
      'Avoid deleting properties on a Vue instance or its root $data ' +
      '- just set it to null.'
    );
    return
  }
  if (!hasOwn(target, key)) {
    return
  }
  delete target[key];
  if (!ob) {
    return
  }
  ob.dep.notify();
}

/**
 * Collect dependencies on array elements when the array is touched, since
 * we cannot intercept array element access like property getters.
 */
function dependArray (value) {
  for (var e = (void 0), i = 0, l = value.length; i < l; i++) {
    e = value[i];
    e && e.__ob__ && e.__ob__.dep.depend();
    if (Array.isArray(e)) {
      dependArray(e);
    }
  }
}

/*  */

/**
 * Option overwriting strategies are functions that handle
 * how to merge a parent option value and a child option
 * value into the final value.
 */
var strats = config.optionMergeStrategies;

/**
 * Options with restrictions
 */
if (process.env.NODE_ENV !== 'production') {
  strats.el = strats.propsData = function (parent, child, vm, key) {
    if (!vm) {
      warn(
        "option \"" + key + "\" can only be used during instance " +
        'creation with the `new` keyword.'
      );
    }
    return defaultStrat(parent, child)
  };
}

/**
 * Helper that recursively merges two data objects together.
 */
function mergeData (to, from) {
  if (!from) { return to }
  var key, toVal, fromVal;
  var keys = Object.keys(from);
  for (var i = 0; i < keys.length; i++) {
    key = keys[i];
    toVal = to[key];
    fromVal = from[key];
    if (!hasOwn(to, key)) {
      set(to, key, fromVal);
    } else if (isPlainObject(toVal) && isPlainObject(fromVal)) {
      mergeData(toVal, fromVal);
    }
  }
  return to
}

/**
 * Data
 */
function mergeDataOrFn (
  parentVal,
  childVal,
  vm
) {
  if (!vm) {
    // in a Vue.extend merge, both should be functions
    if (!childVal) {
      return parentVal
    }
    if (!parentVal) {
      return childVal
    }
    // when parentVal & childVal are both present,
    // we need to return a function that returns the
    // merged result of both functions... no need to
    // check if parentVal is a function here because
    // it has to be a function to pass previous merges.
    return function mergedDataFn () {
      return mergeData(
        typeof childVal === 'function' ? childVal.call(this, this) : childVal,
        typeof parentVal === 'function' ? parentVal.call(this, this) : parentVal
      )
    }
  } else {
    return function mergedInstanceDataFn () {
      // instance merge
      var instanceData = typeof childVal === 'function'
        ? childVal.call(vm, vm)
        : childVal;
      var defaultData = typeof parentVal === 'function'
        ? parentVal.call(vm, vm)
        : parentVal;
      if (instanceData) {
        return mergeData(instanceData, defaultData)
      } else {
        return defaultData
      }
    }
  }
}

strats.data = function (
  parentVal,
  childVal,
  vm
) {
  if (!vm) {
    if (childVal && typeof childVal !== 'function') {
      process.env.NODE_ENV !== 'production' && warn(
        'The "data" option should be a function ' +
        'that returns a per-instance value in component ' +
        'definitions.',
        vm
      );

      return parentVal
    }
    return mergeDataOrFn(parentVal, childVal)
  }

  return mergeDataOrFn(parentVal, childVal, vm)
};

/**
 * Hooks and props are merged as arrays.
 */
function mergeHook (
  parentVal,
  childVal
) {
  return childVal
    ? parentVal
      ? parentVal.concat(childVal)
      : Array.isArray(childVal)
        ? childVal
        : [childVal]
    : parentVal
}

LIFECYCLE_HOOKS.forEach(function (hook) {
  strats[hook] = mergeHook;
});

/**
 * Assets
 *
 * When a vm is present (instance creation), we need to do
 * a three-way merge between constructor options, instance
 * options and parent options.
 */
function mergeAssets (
  parentVal,
  childVal,
  vm,
  key
) {
  var res = Object.create(parentVal || null);
  if (childVal) {
    process.env.NODE_ENV !== 'production' && assertObjectType(key, childVal, vm);
    return extend(res, childVal)
  } else {
    return res
  }
}

ASSET_TYPES.forEach(function (type) {
  strats[type + 's'] = mergeAssets;
});

/**
 * Watchers.
 *
 * Watchers hashes should not overwrite one
 * another, so we merge them as arrays.
 */
strats.watch = function (
  parentVal,
  childVal,
  vm,
  key
) {
  // work around Firefox's Object.prototype.watch...
  if (parentVal === nativeWatch) { parentVal = undefined; }
  if (childVal === nativeWatch) { childVal = undefined; }
  /* istanbul ignore if */
  if (!childVal) { return Object.create(parentVal || null) }
  if (process.env.NODE_ENV !== 'production') {
    assertObjectType(key, childVal, vm);
  }
  if (!parentVal) { return childVal }
  var ret = {};
  extend(ret, parentVal);
  for (var key$1 in childVal) {
    var parent = ret[key$1];
    var child = childVal[key$1];
    if (parent && !Array.isArray(parent)) {
      parent = [parent];
    }
    ret[key$1] = parent
      ? parent.concat(child)
      : Array.isArray(child) ? child : [child];
  }
  return ret
};

/**
 * Other object hashes.
 */
strats.props =
strats.methods =
strats.inject =
strats.computed = function (
  parentVal,
  childVal,
  vm,
  key
) {
  if (childVal && process.env.NODE_ENV !== 'production') {
    assertObjectType(key, childVal, vm);
  }
  if (!parentVal) { return childVal }
  var ret = Object.create(null);
  extend(ret, parentVal);
  if (childVal) { extend(ret, childVal); }
  return ret
};
strats.provide = mergeDataOrFn;

/**
 * Default strategy.
 */
var defaultStrat = function (parentVal, childVal) {
  return childVal === undefined
    ? parentVal
    : childVal
};

/**
 * Validate component names
 */
function checkComponents (options) {
  for (var key in options.components) {
    validateComponentName(key);
  }
}

function validateComponentName (name) {
  if (!/^[a-zA-Z][\w-]*$/.test(name)) {
    warn(
      'Invalid component name: "' + name + '". Component names ' +
      'can only contain alphanumeric characters and the hyphen, ' +
      'and must start with a letter.'
    );
  }
  if (isBuiltInTag(name) || config.isReservedTag(name)) {
    warn(
      'Do not use built-in or reserved HTML elements as component ' +
      'id: ' + name
    );
  }
}

/**
 * Ensure all props option syntax are normalized into the
 * Object-based format.
 */
function normalizeProps (options, vm) {
  var props = options.props;
  if (!props) { return }
  var res = {};
  var i, val, name;
  if (Array.isArray(props)) {
    i = props.length;
    while (i--) {
      val = props[i];
      if (typeof val === 'string') {
        name = camelize(val);
        res[name] = { type: null };
      } else if (process.env.NODE_ENV !== 'production') {
        warn('props must be strings when using array syntax.');
      }
    }
  } else if (isPlainObject(props)) {
    for (var key in props) {
      val = props[key];
      name = camelize(key);
      res[name] = isPlainObject(val)
        ? val
        : { type: val };
    }
  } else if (process.env.NODE_ENV !== 'production') {
    warn(
      "Invalid value for option \"props\": expected an Array or an Object, " +
      "but got " + (toRawType(props)) + ".",
      vm
    );
  }
  options.props = res;
}

/**
 * Normalize all injections into Object-based format
 */
function normalizeInject (options, vm) {
  var inject = options.inject;
  if (!inject) { return }
  var normalized = options.inject = {};
  if (Array.isArray(inject)) {
    for (var i = 0; i < inject.length; i++) {
      normalized[inject[i]] = { from: inject[i] };
    }
  } else if (isPlainObject(inject)) {
    for (var key in inject) {
      var val = inject[key];
      normalized[key] = isPlainObject(val)
        ? extend({ from: key }, val)
        : { from: val };
    }
  } else if (process.env.NODE_ENV !== 'production') {
    warn(
      "Invalid value for option \"inject\": expected an Array or an Object, " +
      "but got " + (toRawType(inject)) + ".",
      vm
    );
  }
}

/**
 * Normalize raw function directives into object format.
 */
function normalizeDirectives (options) {
  var dirs = options.directives;
  if (dirs) {
    for (var key in dirs) {
      var def = dirs[key];
      if (typeof def === 'function') {
        dirs[key] = { bind: def, update: def };
      }
    }
  }
}

function assertObjectType (name, value, vm) {
  if (!isPlainObject(value)) {
    warn(
      "Invalid value for option \"" + name + "\": expected an Object, " +
      "but got " + (toRawType(value)) + ".",
      vm
    );
  }
}

/**
 * Merge two option objects into a new one.
 * Core utility used in both instantiation and inheritance.
 */
function mergeOptions (
  parent,
  child,
  vm
) {
  if (process.env.NODE_ENV !== 'production') {
    checkComponents(child);
  }

  if (typeof child === 'function') {
    child = child.options;
  }

  normalizeProps(child, vm);
  normalizeInject(child, vm);
  normalizeDirectives(child);
  var extendsFrom = child.extends;
  if (extendsFrom) {
    parent = mergeOptions(parent, extendsFrom, vm);
  }
  if (child.mixins) {
    for (var i = 0, l = child.mixins.length; i < l; i++) {
      parent = mergeOptions(parent, child.mixins[i], vm);
    }
  }
  var options = {};
  var key;
  for (key in parent) {
    mergeField(key);
  }
  for (key in child) {
    if (!hasOwn(parent, key)) {
      mergeField(key);
    }
  }
  function mergeField (key) {
    var strat = strats[key] || defaultStrat;
    options[key] = strat(parent[key], child[key], vm, key);
  }
  return options
}

/**
 * Resolve an asset.
 * This function is used because child instances need access
 * to assets defined in its ancestor chain.
 */
function resolveAsset (
  options,
  type,
  id,
  warnMissing
) {
  /* istanbul ignore if */
  if (typeof id !== 'string') {
    return
  }
  var assets = options[type];
  // check local registration variations first
  if (hasOwn(assets, id)) { return assets[id] }
  var camelizedId = camelize(id);
  if (hasOwn(assets, camelizedId)) { return assets[camelizedId] }
  var PascalCaseId = capitalize(camelizedId);
  if (hasOwn(assets, PascalCaseId)) { return assets[PascalCaseId] }
  // fallback to prototype chain
  var res = assets[id] || assets[camelizedId] || assets[PascalCaseId];
  if (process.env.NODE_ENV !== 'production' && warnMissing && !res) {
    warn(
      'Failed to resolve ' + type.slice(0, -1) + ': ' + id,
      options
    );
  }
  return res
}

/*  */

function validateProp (
  key,
  propOptions,
  propsData,
  vm
) {
  var prop = propOptions[key];
  var absent = !hasOwn(propsData, key);
  var value = propsData[key];
  // boolean casting
  var booleanIndex = getTypeIndex(Boolean, prop.type);
  if (booleanIndex > -1) {
    if (absent && !hasOwn(prop, 'default')) {
      value = false;
    } else if (value === '' || value === hyphenate(key)) {
      // only cast empty string / same name to boolean if
      // boolean has higher priority
      var stringIndex = getTypeIndex(String, prop.type);
      if (stringIndex < 0 || booleanIndex < stringIndex) {
        value = true;
      }
    }
  }
  // check default value
  if (value === undefined) {
    value = getPropDefaultValue(vm, prop, key);
    // since the default value is a fresh copy,
    // make sure to observe it.
    var prevShouldObserve = shouldObserve;
    toggleObserving(true);
    observe(value);
    toggleObserving(prevShouldObserve);
  }
  if (
    process.env.NODE_ENV !== 'production' &&
    // skip validation for weex recycle-list child component props
    !(false && isObject(value) && ('@binding' in value))
  ) {
    assertProp(prop, key, value, vm, absent);
  }
  return value
}

/**
 * Get the default value of a prop.
 */
function getPropDefaultValue (vm, prop, key) {
  // no default, return undefined
  if (!hasOwn(prop, 'default')) {
    return undefined
  }
  var def = prop.default;
  // warn against non-factory defaults for Object & Array
  if (process.env.NODE_ENV !== 'production' && isObject(def)) {
    warn(
      'Invalid default value for prop "' + key + '": ' +
      'Props with type Object/Array must use a factory function ' +
      'to return the default value.',
      vm
    );
  }
  // the raw prop value was also undefined from previous render,
  // return previous default value to avoid unnecessary watcher trigger
  if (vm && vm.$options.propsData &&
    vm.$options.propsData[key] === undefined &&
    vm._props[key] !== undefined
  ) {
    return vm._props[key]
  }
  // call factory function for non-Function types
  // a value is Function if its prototype is function even across different execution context
  return typeof def === 'function' && getType(prop.type) !== 'Function'
    ? def.call(vm)
    : def
}

/**
 * Assert whether a prop is valid.
 */
function assertProp (
  prop,
  name,
  value,
  vm,
  absent
) {
  if (prop.required && absent) {
    warn(
      'Missing required prop: "' + name + '"',
      vm
    );
    return
  }
  if (value == null && !prop.required) {
    return
  }
  var type = prop.type;
  var valid = !type || type === true;
  var expectedTypes = [];
  if (type) {
    if (!Array.isArray(type)) {
      type = [type];
    }
    for (var i = 0; i < type.length && !valid; i++) {
      var assertedType = assertType(value, type[i]);
      expectedTypes.push(assertedType.expectedType || '');
      valid = assertedType.valid;
    }
  }
  if (!valid) {
    warn(
      "Invalid prop: type check failed for prop \"" + name + "\"." +
      " Expected " + (expectedTypes.map(capitalize).join(', ')) +
      ", got " + (toRawType(value)) + ".",
      vm
    );
    return
  }
  var validator = prop.validator;
  if (validator) {
    if (!validator(value)) {
      warn(
        'Invalid prop: custom validator check failed for prop "' + name + '".',
        vm
      );
    }
  }
}

var simpleCheckRE = /^(String|Number|Boolean|Function|Symbol)$/;

function assertType (value, type) {
  var valid;
  var expectedType = getType(type);
  if (simpleCheckRE.test(expectedType)) {
    var t = typeof value;
    valid = t === expectedType.toLowerCase();
    // for primitive wrapper objects
    if (!valid && t === 'object') {
      valid = value instanceof type;
    }
  } else if (expectedType === 'Object') {
    valid = isPlainObject(value);
  } else if (expectedType === 'Array') {
    valid = Array.isArray(value);
  } else {
    valid = value instanceof type;
  }
  return {
    valid: valid,
    expectedType: expectedType
  }
}

/**
 * Use function string name to check built-in types,
 * because a simple equality check will fail when running
 * across different vms / iframes.
 */
function getType (fn) {
  var match = fn && fn.toString().match(/^\s*function (\w+)/);
  return match ? match[1] : ''
}

function isSameType (a, b) {
  return getType(a) === getType(b)
}

function getTypeIndex (type, expectedTypes) {
  if (!Array.isArray(expectedTypes)) {
    return isSameType(expectedTypes, type) ? 0 : -1
  }
  for (var i = 0, len = expectedTypes.length; i < len; i++) {
    if (isSameType(expectedTypes[i], type)) {
      return i
    }
  }
  return -1
}

/*  */

function handleError (err, vm, info) {
  if (vm) {
    var cur = vm;
    while ((cur = cur.$parent)) {
      var hooks = cur.$options.errorCaptured;
      if (hooks) {
        for (var i = 0; i < hooks.length; i++) {
          try {
            var capture = hooks[i].call(cur, err, vm, info) === false;
            if (capture) { return }
          } catch (e) {
            globalHandleError(e, cur, 'errorCaptured hook');
          }
        }
      }
    }
  }
  globalHandleError(err, vm, info);
}

function globalHandleError (err, vm, info) {
  if (config.errorHandler) {
    try {
      return config.errorHandler.call(null, err, vm, info)
    } catch (e) {
      logError(e, null, 'config.errorHandler');
    }
  }
  logError(err, vm, info);
}

function logError (err, vm, info) {
  if (process.env.NODE_ENV !== 'production') {
    warn(("Error in " + info + ": \"" + (err.toString()) + "\""), vm);
  }
  /* istanbul ignore else */
  if ((inBrowser || inWeex) && typeof console !== 'undefined') {
    console.error(err);
  } else {
    throw err
  }
}

/*  */
/* globals MessageChannel */

var callbacks = [];
var pending = false;

function flushCallbacks () {
  pending = false;
  var copies = callbacks.slice(0);
  callbacks.length = 0;
  for (var i = 0; i < copies.length; i++) {
    copies[i]();
  }
}

// Here we have async deferring wrappers using both microtasks and (macro) tasks.
// In < 2.4 we used microtasks everywhere, but there are some scenarios where
// microtasks have too high a priority and fire in between supposedly
// sequential events (e.g. #4521, #6690) or even between bubbling of the same
// event (#6566). However, using (macro) tasks everywhere also has subtle problems
// when state is changed right before repaint (e.g. #6813, out-in transitions).
// Here we use microtask by default, but expose a way to force (macro) task when
// needed (e.g. in event handlers attached by v-on).
var microTimerFunc;
var macroTimerFunc;
var useMacroTask = false;

// Determine (macro) task defer implementation.
// Technically setImmediate should be the ideal choice, but it's only available
// in IE. The only polyfill that consistently queues the callback after all DOM
// events triggered in the same loop is by using MessageChannel.
/* istanbul ignore if */
if (typeof setImmediate !== 'undefined' && isNative(setImmediate)) {
  macroTimerFunc = function () {
    setImmediate(flushCallbacks);
  };
} else if (typeof MessageChannel !== 'undefined' && (
  isNative(MessageChannel) ||
  // PhantomJS
  MessageChannel.toString() === '[object MessageChannelConstructor]'
)) {
  var channel = new MessageChannel();
  var port = channel.port2;
  channel.port1.onmessage = flushCallbacks;
  macroTimerFunc = function () {
    port.postMessage(1);
  };
} else {
  /* istanbul ignore next */
  macroTimerFunc = function () {
    setTimeout(flushCallbacks, 0);
  };
}

// Determine microtask defer implementation.
/* istanbul ignore next, $flow-disable-line */
if (typeof Promise !== 'undefined' && isNative(Promise)) {
  var p = Promise.resolve();
  microTimerFunc = function () {
    p.then(flushCallbacks);
    // in problematic UIWebViews, Promise.then doesn't completely break, but
    // it can get stuck in a weird state where callbacks are pushed into the
    // microtask queue but the queue isn't being flushed, until the browser
    // needs to do some other work, e.g. handle a timer. Therefore we can
    // "force" the microtask queue to be flushed by adding an empty timer.
    if (isIOS) { setTimeout(noop); }
  };
} else {
  // fallback to macro
  microTimerFunc = macroTimerFunc;
}

/**
 * Wrap a function so that if any code inside triggers state change,
 * the changes are queued using a (macro) task instead of a microtask.
 */
function withMacroTask (fn) {
  return fn._withTask || (fn._withTask = function () {
    useMacroTask = true;
    var res = fn.apply(null, arguments);
    useMacroTask = false;
    return res
  })
}

function nextTick (cb, ctx) {
  var _resolve;
  callbacks.push(function () {
    if (cb) {
      try {
        cb.call(ctx);
      } catch (e) {
        handleError(e, ctx, 'nextTick');
      }
    } else if (_resolve) {
      _resolve(ctx);
    }
  });
  if (!pending) {
    pending = true;
    if (useMacroTask) {
      macroTimerFunc();
    } else {
      microTimerFunc();
    }
  }
  // $flow-disable-line
  if (!cb && typeof Promise !== 'undefined') {
    return new Promise(function (resolve) {
      _resolve = resolve;
    })
  }
}

/*  */

/* not type checking this file because flow doesn't play well with Proxy */

var initProxy;

if (process.env.NODE_ENV !== 'production') {
  var allowedGlobals = makeMap(
    'Infinity,undefined,NaN,isFinite,isNaN,' +
    'parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,' +
    'Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,' +
    'require' // for Webpack/Browserify
  );

  var warnNonPresent = function (target, key) {
    warn(
      "Property or method \"" + key + "\" is not defined on the instance but " +
      'referenced during render. Make sure that this property is reactive, ' +
      'either in the data option, or for class-based components, by ' +
      'initializing the property. ' +
      'See: https://vuejs.org/v2/guide/reactivity.html#Declaring-Reactive-Properties.',
      target
    );
  };

  var hasProxy =
    typeof Proxy !== 'undefined' && isNative(Proxy);

  if (hasProxy) {
    var isBuiltInModifier = makeMap('stop,prevent,self,ctrl,shift,alt,meta,exact');
    config.keyCodes = new Proxy(config.keyCodes, {
      set: function set (target, key, value) {
        if (isBuiltInModifier(key)) {
          warn(("Avoid overwriting built-in modifier in config.keyCodes: ." + key));
          return false
        } else {
          target[key] = value;
          return true
        }
      }
    });
  }

  var hasHandler = {
    has: function has (target, key) {
      var has = key in target;
      var isAllowed = allowedGlobals(key) || key.charAt(0) === '_';
      if (!has && !isAllowed) {
        warnNonPresent(target, key);
      }
      return has || !isAllowed
    }
  };

  var getHandler = {
    get: function get (target, key) {
      if (typeof key === 'string' && !(key in target)) {
        warnNonPresent(target, key);
      }
      return target[key]
    }
  };

  initProxy = function initProxy (vm) {
    if (hasProxy) {
      // determine which proxy handler to use
      var options = vm.$options;
      var handlers = options.render && options.render._withStripped
        ? getHandler
        : hasHandler;
      vm._renderProxy = new Proxy(vm, handlers);
    } else {
      vm._renderProxy = vm;
    }
  };
}

/*  */

var seenObjects = new _Set();

/**
 * Recursively traverse an object to evoke all converted
 * getters, so that every nested property inside the object
 * is collected as a "deep" dependency.
 */
function traverse (val) {
  _traverse(val, seenObjects);
  seenObjects.clear();
}

function _traverse (val, seen) {
  var i, keys;
  var isA = Array.isArray(val);
  if ((!isA && !isObject(val)) || Object.isFrozen(val) || val instanceof VNode) {
    return
  }
  if (val.__ob__) {
    var depId = val.__ob__.dep.id;
    if (seen.has(depId)) {
      return
    }
    seen.add(depId);
  }
  if (isA) {
    i = val.length;
    while (i--) { _traverse(val[i], seen); }
  } else {
    keys = Object.keys(val);
    i = keys.length;
    while (i--) { _traverse(val[keys[i]], seen); }
  }
}

var mark;
var measure;

if (process.env.NODE_ENV !== 'production') {
  var perf = inBrowser && window.performance;
  /* istanbul ignore if */
  if (
    perf &&
    perf.mark &&
    perf.measure &&
    perf.clearMarks &&
    perf.clearMeasures
  ) {
    mark = function (tag) { return perf.mark(tag); };
    measure = function (name, startTag, endTag) {
      perf.measure(name, startTag, endTag);
      perf.clearMarks(startTag);
      perf.clearMarks(endTag);
      perf.clearMeasures(name);
    };
  }
}

/*  */

var normalizeEvent = cached(function (name) {
  var passive = name.charAt(0) === '&';
  name = passive ? name.slice(1) : name;
  var once$$1 = name.charAt(0) === '~'; // Prefixed last, checked first
  name = once$$1 ? name.slice(1) : name;
  var capture = name.charAt(0) === '!';
  name = capture ? name.slice(1) : name;
  return {
    name: name,
    once: once$$1,
    capture: capture,
    passive: passive
  }
});

function createFnInvoker (fns) {
  function invoker () {
    var arguments$1 = arguments;

    var fns = invoker.fns;
    if (Array.isArray(fns)) {
      var cloned = fns.slice();
      for (var i = 0; i < cloned.length; i++) {
        cloned[i].apply(null, arguments$1);
      }
    } else {
      // return handler return value for single handlers
      return fns.apply(null, arguments)
    }
  }
  invoker.fns = fns;
  return invoker
}

function updateListeners (
  on,
  oldOn,
  add,
  remove$$1,
  vm
) {
  var name, def, cur, old, event;
  for (name in on) {
    def = cur = on[name];
    old = oldOn[name];
    event = normalizeEvent(name);
    /* istanbul ignore if */
    if (isUndef(cur)) {
      process.env.NODE_ENV !== 'production' && warn(
        "Invalid handler for event \"" + (event.name) + "\": got " + String(cur),
        vm
      );
    } else if (isUndef(old)) {
      if (isUndef(cur.fns)) {
        cur = on[name] = createFnInvoker(cur);
      }
      add(event.name, cur, event.once, event.capture, event.passive, event.params);
    } else if (cur !== old) {
      old.fns = cur;
      on[name] = old;
    }
  }
  for (name in oldOn) {
    if (isUndef(on[name])) {
      event = normalizeEvent(name);
      remove$$1(event.name, oldOn[name], event.capture);
    }
  }
}

/*  */

function mergeVNodeHook (def, hookKey, hook) {
  if (def instanceof VNode) {
    def = def.data.hook || (def.data.hook = {});
  }
  var invoker;
  var oldHook = def[hookKey];

  function wrappedHook () {
    hook.apply(this, arguments);
    // important: remove merged hook to ensure it's called only once
    // and prevent memory leak
    remove(invoker.fns, wrappedHook);
  }

  if (isUndef(oldHook)) {
    // no existing hook
    invoker = createFnInvoker([wrappedHook]);
  } else {
    /* istanbul ignore if */
    if (isDef(oldHook.fns) && isTrue(oldHook.merged)) {
      // already a merged invoker
      invoker = oldHook;
      invoker.fns.push(wrappedHook);
    } else {
      // existing plain hook
      invoker = createFnInvoker([oldHook, wrappedHook]);
    }
  }

  invoker.merged = true;
  def[hookKey] = invoker;
}

/*  */

function extractPropsFromVNodeData (
  data,
  Ctor,
  tag
) {
  // we are only extracting raw values here.
  // validation and default values are handled in the child
  // component itself.
  var propOptions = Ctor.options.props;
  if (isUndef(propOptions)) {
    return
  }
  var res = {};
  var attrs = data.attrs;
  var props = data.props;
  if (isDef(attrs) || isDef(props)) {
    for (var key in propOptions) {
      var altKey = hyphenate(key);
      if (process.env.NODE_ENV !== 'production') {
        var keyInLowerCase = key.toLowerCase();
        if (
          key !== keyInLowerCase &&
          attrs && hasOwn(attrs, keyInLowerCase)
        ) {
          tip(
            "Prop \"" + keyInLowerCase + "\" is passed to component " +
            (formatComponentName(tag || Ctor)) + ", but the declared prop name is" +
            " \"" + key + "\". " +
            "Note that HTML attributes are case-insensitive and camelCased " +
            "props need to use their kebab-case equivalents when using in-DOM " +
            "templates. You should probably use \"" + altKey + "\" instead of \"" + key + "\"."
          );
        }
      }
      checkProp(res, props, key, altKey, true) ||
      checkProp(res, attrs, key, altKey, false);
    }
  }
  return res
}

function checkProp (
  res,
  hash,
  key,
  altKey,
  preserve
) {
  if (isDef(hash)) {
    if (hasOwn(hash, key)) {
      res[key] = hash[key];
      if (!preserve) {
        delete hash[key];
      }
      return true
    } else if (hasOwn(hash, altKey)) {
      res[key] = hash[altKey];
      if (!preserve) {
        delete hash[altKey];
      }
      return true
    }
  }
  return false
}

/*  */

// The template compiler attempts to minimize the need for normalization by
// statically analyzing the template at compile time.
//
// For plain HTML markup, normalization can be completely skipped because the
// generated render function is guaranteed to return Array<VNode>. There are
// two cases where extra normalization is needed:

// 1. When the children contains components - because a functional component
// may return an Array instead of a single root. In this case, just a simple
// normalization is needed - if any child is an Array, we flatten the whole
// thing with Array.prototype.concat. It is guaranteed to be only 1-level deep
// because functional components already normalize their own children.
function simpleNormalizeChildren (children) {
  for (var i = 0; i < children.length; i++) {
    if (Array.isArray(children[i])) {
      return Array.prototype.concat.apply([], children)
    }
  }
  return children
}

// 2. When the children contains constructs that always generated nested Arrays,
// e.g. <template>, <slot>, v-for, or when the children is provided by user
// with hand-written render functions / JSX. In such cases a full normalization
// is needed to cater to all possible types of children values.
function normalizeChildren (children) {
  return isPrimitive(children)
    ? [createTextVNode(children)]
    : Array.isArray(children)
      ? normalizeArrayChildren(children)
      : undefined
}

function isTextNode (node) {
  return isDef(node) && isDef(node.text) && isFalse(node.isComment)
}

function normalizeArrayChildren (children, nestedIndex) {
  var res = [];
  var i, c, lastIndex, last;
  for (i = 0; i < children.length; i++) {
    c = children[i];
    if (isUndef(c) || typeof c === 'boolean') { continue }
    lastIndex = res.length - 1;
    last = res[lastIndex];
    //  nested
    if (Array.isArray(c)) {
      if (c.length > 0) {
        c = normalizeArrayChildren(c, ((nestedIndex || '') + "_" + i));
        // merge adjacent text nodes
        if (isTextNode(c[0]) && isTextNode(last)) {
          res[lastIndex] = createTextVNode(last.text + (c[0]).text);
          c.shift();
        }
        res.push.apply(res, c);
      }
    } else if (isPrimitive(c)) {
      if (isTextNode(last)) {
        // merge adjacent text nodes
        // this is necessary for SSR hydration because text nodes are
        // essentially merged when rendered to HTML strings
        res[lastIndex] = createTextVNode(last.text + c);
      } else if (c !== '') {
        // convert primitive to vnode
        res.push(createTextVNode(c));
      }
    } else {
      if (isTextNode(c) && isTextNode(last)) {
        // merge adjacent text nodes
        res[lastIndex] = createTextVNode(last.text + c.text);
      } else {
        // default key for nested array children (likely generated by v-for)
        if (isTrue(children._isVList) &&
          isDef(c.tag) &&
          isUndef(c.key) &&
          isDef(nestedIndex)) {
          c.key = "__vlist" + nestedIndex + "_" + i + "__";
        }
        res.push(c);
      }
    }
  }
  return res
}

/*  */

function ensureCtor (comp, base) {
  if (
    comp.__esModule ||
    (hasSymbol && comp[Symbol.toStringTag] === 'Module')
  ) {
    comp = comp.default;
  }
  return isObject(comp)
    ? base.extend(comp)
    : comp
}

function createAsyncPlaceholder (
  factory,
  data,
  context,
  children,
  tag
) {
  var node = createEmptyVNode();
  node.asyncFactory = factory;
  node.asyncMeta = { data: data, context: context, children: children, tag: tag };
  return node
}

function resolveAsyncComponent (
  factory,
  baseCtor,
  context
) {
  if (isTrue(factory.error) && isDef(factory.errorComp)) {
    return factory.errorComp
  }

  if (isDef(factory.resolved)) {
    return factory.resolved
  }

  if (isTrue(factory.loading) && isDef(factory.loadingComp)) {
    return factory.loadingComp
  }

  if (isDef(factory.contexts)) {
    // already pending
    factory.contexts.push(context);
  } else {
    var contexts = factory.contexts = [context];
    var sync = true;

    var forceRender = function () {
      for (var i = 0, l = contexts.length; i < l; i++) {
        contexts[i].$forceUpdate();
      }
    };

    var resolve = once(function (res) {
      // cache resolved
      factory.resolved = ensureCtor(res, baseCtor);
      // invoke callbacks only if this is not a synchronous resolve
      // (async resolves are shimmed as synchronous during SSR)
      if (!sync) {
        forceRender();
      }
    });

    var reject = once(function (reason) {
      process.env.NODE_ENV !== 'production' && warn(
        "Failed to resolve async component: " + (String(factory)) +
        (reason ? ("\nReason: " + reason) : '')
      );
      if (isDef(factory.errorComp)) {
        factory.error = true;
        forceRender();
      }
    });

    var res = factory(resolve, reject);

    if (isObject(res)) {
      if (typeof res.then === 'function') {
        // () => Promise
        if (isUndef(factory.resolved)) {
          res.then(resolve, reject);
        }
      } else if (isDef(res.component) && typeof res.component.then === 'function') {
        res.component.then(resolve, reject);

        if (isDef(res.error)) {
          factory.errorComp = ensureCtor(res.error, baseCtor);
        }

        if (isDef(res.loading)) {
          factory.loadingComp = ensureCtor(res.loading, baseCtor);
          if (res.delay === 0) {
            factory.loading = true;
          } else {
            setTimeout(function () {
              if (isUndef(factory.resolved) && isUndef(factory.error)) {
                factory.loading = true;
                forceRender();
              }
            }, res.delay || 200);
          }
        }

        if (isDef(res.timeout)) {
          setTimeout(function () {
            if (isUndef(factory.resolved)) {
              reject(
                process.env.NODE_ENV !== 'production'
                  ? ("timeout (" + (res.timeout) + "ms)")
                  : null
              );
            }
          }, res.timeout);
        }
      }
    }

    sync = false;
    // return in case resolved synchronously
    return factory.loading
      ? factory.loadingComp
      : factory.resolved
  }
}

/*  */

function isAsyncPlaceholder (node) {
  return node.isComment && node.asyncFactory
}

/*  */

function getFirstComponentChild (children) {
  if (Array.isArray(children)) {
    for (var i = 0; i < children.length; i++) {
      var c = children[i];
      if (isDef(c) && (isDef(c.componentOptions) || isAsyncPlaceholder(c))) {
        return c
      }
    }
  }
}

/*  */

/*  */

function initEvents (vm) {
  vm._events = Object.create(null);
  vm._hasHookEvent = false;
  // init parent attached events
  var listeners = vm.$options._parentListeners;
  if (listeners) {
    updateComponentListeners(vm, listeners);
  }
}

var target;

function add (event, fn, once) {
  if (once) {
    target.$once(event, fn);
  } else {
    target.$on(event, fn);
  }
}

function remove$1 (event, fn) {
  target.$off(event, fn);
}

function updateComponentListeners (
  vm,
  listeners,
  oldListeners
) {
  target = vm;
  updateListeners(listeners, oldListeners || {}, add, remove$1, vm);
  target = undefined;
}

function eventsMixin (Vue) {
  var hookRE = /^hook:/;
  Vue.prototype.$on = function (event, fn) {
    var this$1 = this;

    var vm = this;
    if (Array.isArray(event)) {
      for (var i = 0, l = event.length; i < l; i++) {
        this$1.$on(event[i], fn);
      }
    } else {
      (vm._events[event] || (vm._events[event] = [])).push(fn);
      // optimize hook:event cost by using a boolean flag marked at registration
      // instead of a hash lookup
      if (hookRE.test(event)) {
        vm._hasHookEvent = true;
      }
    }
    return vm
  };

  Vue.prototype.$once = function (event, fn) {
    var vm = this;
    function on () {
      vm.$off(event, on);
      fn.apply(vm, arguments);
    }
    on.fn = fn;
    vm.$on(event, on);
    return vm
  };

  Vue.prototype.$off = function (event, fn) {
    var this$1 = this;

    var vm = this;
    // all
    if (!arguments.length) {
      vm._events = Object.create(null);
      return vm
    }
    // array of events
    if (Array.isArray(event)) {
      for (var i = 0, l = event.length; i < l; i++) {
        this$1.$off(event[i], fn);
      }
      return vm
    }
    // specific event
    var cbs = vm._events[event];
    if (!cbs) {
      return vm
    }
    if (!fn) {
      vm._events[event] = null;
      return vm
    }
    if (fn) {
      // specific handler
      var cb;
      var i$1 = cbs.length;
      while (i$1--) {
        cb = cbs[i$1];
        if (cb === fn || cb.fn === fn) {
          cbs.splice(i$1, 1);
          break
        }
      }
    }
    return vm
  };

  Vue.prototype.$emit = function (event) {
    var vm = this;
    if (process.env.NODE_ENV !== 'production') {
      var lowerCaseEvent = event.toLowerCase();
      if (lowerCaseEvent !== event && vm._events[lowerCaseEvent]) {
        tip(
          "Event \"" + lowerCaseEvent + "\" is emitted in component " +
          (formatComponentName(vm)) + " but the handler is registered for \"" + event + "\". " +
          "Note that HTML attributes are case-insensitive and you cannot use " +
          "v-on to listen to camelCase events when using in-DOM templates. " +
          "You should probably use \"" + (hyphenate(event)) + "\" instead of \"" + event + "\"."
        );
      }
    }
    var cbs = vm._events[event];
    if (cbs) {
      cbs = cbs.length > 1 ? toArray(cbs) : cbs;
      var args = toArray(arguments, 1);
      for (var i = 0, l = cbs.length; i < l; i++) {
        try {
          cbs[i].apply(vm, args);
        } catch (e) {
          handleError(e, vm, ("event handler for \"" + event + "\""));
        }
      }
    }
    return vm
  };
}

/*  */



/**
 * Runtime helper for resolving raw children VNodes into a slot object.
 */
function resolveSlots (
  children,
  context
) {
  var slots = {};
  if (!children) {
    return slots
  }
  for (var i = 0, l = children.length; i < l; i++) {
    var child = children[i];
    var data = child.data;
    // remove slot attribute if the node is resolved as a Vue slot node
    if (data && data.attrs && data.attrs.slot) {
      delete data.attrs.slot;
    }
    // named slots should only be respected if the vnode was rendered in the
    // same context.
    if ((child.context === context || child.fnContext === context) &&
      data && data.slot != null
    ) {
      var name = data.slot;
      var slot = (slots[name] || (slots[name] = []));
      if (child.tag === 'template') {
        slot.push.apply(slot, child.children || []);
      } else {
        slot.push(child);
      }
    } else {
      (slots.default || (slots.default = [])).push(child);
    }
  }
  // ignore slots that contains only whitespace
  for (var name$1 in slots) {
    if (slots[name$1].every(isWhitespace)) {
      delete slots[name$1];
    }
  }
  return slots
}

function isWhitespace (node) {
  return (node.isComment && !node.asyncFactory) || node.text === ' '
}

function resolveScopedSlots (
  fns, // see flow/vnode
  res
) {
  res = res || {};
  for (var i = 0; i < fns.length; i++) {
    if (Array.isArray(fns[i])) {
      resolveScopedSlots(fns[i], res);
    } else {
      res[fns[i].key] = fns[i].fn;
    }
  }
  return res
}

/*  */

var activeInstance = null;
var isUpdatingChildComponent = false;

function initLifecycle (vm) {
  var options = vm.$options;

  // locate first non-abstract parent
  var parent = options.parent;
  if (parent && !options.abstract) {
    while (parent.$options.abstract && parent.$parent) {
      parent = parent.$parent;
    }
    parent.$children.push(vm);
  }

  vm.$parent = parent;
  vm.$root = parent ? parent.$root : vm;

  vm.$children = [];
  vm.$refs = {};

  vm._watcher = null;
  vm._inactive = null;
  vm._directInactive = false;
  vm._isMounted = false;
  vm._isDestroyed = false;
  vm._isBeingDestroyed = false;
}

function lifecycleMixin (Vue) {
  Vue.prototype._update = function (vnode, hydrating) {
    var vm = this;
    if (vm._isMounted) {
      callHook(vm, 'beforeUpdate');
    }
    var prevEl = vm.$el;
    var prevVnode = vm._vnode;
    var prevActiveInstance = activeInstance;
    activeInstance = vm;
    vm._vnode = vnode;
    // Vue.prototype.__patch__ is injected in entry points
    // based on the rendering backend used.
    if (!prevVnode) {
      // initial render
      vm.$el = vm.__patch__(
        vm.$el, vnode, hydrating, false /* removeOnly */,
        vm.$options._parentElm,
        vm.$options._refElm
      );
      // no need for the ref nodes after initial patch
      // this prevents keeping a detached DOM tree in memory (#5851)
      vm.$options._parentElm = vm.$options._refElm = null;
    } else {
      // updates
      vm.$el = vm.__patch__(prevVnode, vnode);
    }
    activeInstance = prevActiveInstance;
    // update __vue__ reference
    if (prevEl) {
      prevEl.__vue__ = null;
    }
    if (vm.$el) {
      vm.$el.__vue__ = vm;
    }
    // if parent is an HOC, update its $el as well
    if (vm.$vnode && vm.$parent && vm.$vnode === vm.$parent._vnode) {
      vm.$parent.$el = vm.$el;
    }
    // updated hook is called by the scheduler to ensure that children are
    // updated in a parent's updated hook.
  };

  Vue.prototype.$forceUpdate = function () {
    var vm = this;
    if (vm._watcher) {
      vm._watcher.update();
    }
  };

  Vue.prototype.$destroy = function () {
    var vm = this;
    if (vm._isBeingDestroyed) {
      return
    }
    callHook(vm, 'beforeDestroy');
    vm._isBeingDestroyed = true;
    // remove self from parent
    var parent = vm.$parent;
    if (parent && !parent._isBeingDestroyed && !vm.$options.abstract) {
      remove(parent.$children, vm);
    }
    // teardown watchers
    if (vm._watcher) {
      vm._watcher.teardown();
    }
    var i = vm._watchers.length;
    while (i--) {
      vm._watchers[i].teardown();
    }
    // remove reference from data ob
    // frozen object may not have observer.
    if (vm._data.__ob__) {
      vm._data.__ob__.vmCount--;
    }
    // call the last hook...
    vm._isDestroyed = true;
    // invoke destroy hooks on current rendered tree
    vm.__patch__(vm._vnode, null);
    // fire destroyed hook
    callHook(vm, 'destroyed');
    // turn off all instance listeners.
    vm.$off();
    // remove __vue__ reference
    if (vm.$el) {
      vm.$el.__vue__ = null;
    }
    // release circular reference (#6759)
    if (vm.$vnode) {
      vm.$vnode.parent = null;
    }
  };
}

function mountComponent (
  vm,
  el,
  hydrating
) {
  vm.$el = el;
  if (!vm.$options.render) {
    vm.$options.render = createEmptyVNode;
    if (process.env.NODE_ENV !== 'production') {
      /* istanbul ignore if */
      if ((vm.$options.template && vm.$options.template.charAt(0) !== '#') ||
        vm.$options.el || el) {
        warn(
          'You are using the runtime-only build of Vue where the template ' +
          'compiler is not available. Either pre-compile the templates into ' +
          'render functions, or use the compiler-included build.',
          vm
        );
      } else {
        warn(
          'Failed to mount component: template or render function not defined.',
          vm
        );
      }
    }
  }
  callHook(vm, 'beforeMount');

  var updateComponent;
  /* istanbul ignore if */
  if (process.env.NODE_ENV !== 'production' && config.performance && mark) {
    updateComponent = function () {
      var name = vm._name;
      var id = vm._uid;
      var startTag = "vue-perf-start:" + id;
      var endTag = "vue-perf-end:" + id;

      mark(startTag);
      var vnode = vm._render();
      mark(endTag);
      measure(("vue " + name + " render"), startTag, endTag);

      mark(startTag);
      vm._update(vnode, hydrating);
      mark(endTag);
      measure(("vue " + name + " patch"), startTag, endTag);
    };
  } else {
    updateComponent = function () {
      vm._update(vm._render(), hydrating);
    };
  }

  // we set this to vm._watcher inside the watcher's constructor
  // since the watcher's initial patch may call $forceUpdate (e.g. inside child
  // component's mounted hook), which relies on vm._watcher being already defined
  new Watcher(vm, updateComponent, noop, null, true /* isRenderWatcher */);
  hydrating = false;

  // manually mounted instance, call mounted on self
  // mounted is called for render-created child components in its inserted hook
  if (vm.$vnode == null) {
    vm._isMounted = true;
    callHook(vm, 'mounted');
  }
  return vm
}

function updateChildComponent (
  vm,
  propsData,
  listeners,
  parentVnode,
  renderChildren
) {
  if (process.env.NODE_ENV !== 'production') {
    isUpdatingChildComponent = true;
  }

  // determine whether component has slot children
  // we need to do this before overwriting $options._renderChildren
  var hasChildren = !!(
    renderChildren ||               // has new static slots
    vm.$options._renderChildren ||  // has old static slots
    parentVnode.data.scopedSlots || // has new scoped slots
    vm.$scopedSlots !== emptyObject // has old scoped slots
  );

  vm.$options._parentVnode = parentVnode;
  vm.$vnode = parentVnode; // update vm's placeholder node without re-render

  if (vm._vnode) { // update child tree's parent
    vm._vnode.parent = parentVnode;
  }
  vm.$options._renderChildren = renderChildren;

  // update $attrs and $listeners hash
  // these are also reactive so they may trigger child update if the child
  // used them during render
  vm.$attrs = parentVnode.data.attrs || emptyObject;
  vm.$listeners = listeners || emptyObject;

  // update props
  if (propsData && vm.$options.props) {
    toggleObserving(false);
    var props = vm._props;
    var propKeys = vm.$options._propKeys || [];
    for (var i = 0; i < propKeys.length; i++) {
      var key = propKeys[i];
      var propOptions = vm.$options.props; // wtf flow?
      props[key] = validateProp(key, propOptions, propsData, vm);
    }
    toggleObserving(true);
    // keep a copy of raw propsData
    vm.$options.propsData = propsData;
  }

  // update listeners
  listeners = listeners || emptyObject;
  var oldListeners = vm.$options._parentListeners;
  vm.$options._parentListeners = listeners;
  updateComponentListeners(vm, listeners, oldListeners);

  // resolve slots + force update if has children
  if (hasChildren) {
    vm.$slots = resolveSlots(renderChildren, parentVnode.context);
    vm.$forceUpdate();
  }

  if (process.env.NODE_ENV !== 'production') {
    isUpdatingChildComponent = false;
  }
}

function isInInactiveTree (vm) {
  while (vm && (vm = vm.$parent)) {
    if (vm._inactive) { return true }
  }
  return false
}

function activateChildComponent (vm, direct) {
  if (direct) {
    vm._directInactive = false;
    if (isInInactiveTree(vm)) {
      return
    }
  } else if (vm._directInactive) {
    return
  }
  if (vm._inactive || vm._inactive === null) {
    vm._inactive = false;
    for (var i = 0; i < vm.$children.length; i++) {
      activateChildComponent(vm.$children[i]);
    }
    callHook(vm, 'activated');
  }
}

function deactivateChildComponent (vm, direct) {
  if (direct) {
    vm._directInactive = true;
    if (isInInactiveTree(vm)) {
      return
    }
  }
  if (!vm._inactive) {
    vm._inactive = true;
    for (var i = 0; i < vm.$children.length; i++) {
      deactivateChildComponent(vm.$children[i]);
    }
    callHook(vm, 'deactivated');
  }
}

function callHook (vm, hook) {
  // #7573 disable dep collection when invoking lifecycle hooks
  pushTarget();
  var handlers = vm.$options[hook];
  if (handlers) {
    for (var i = 0, j = handlers.length; i < j; i++) {
      try {
        handlers[i].call(vm);
      } catch (e) {
        handleError(e, vm, (hook + " hook"));
      }
    }
  }
  if (vm._hasHookEvent) {
    vm.$emit('hook:' + hook);
  }
  popTarget();
}

/*  */


var MAX_UPDATE_COUNT = 100;

var queue = [];
var activatedChildren = [];
var has = {};
var circular = {};
var waiting = false;
var flushing = false;
var index = 0;

/**
 * Reset the scheduler's state.
 */
function resetSchedulerState () {
  index = queue.length = activatedChildren.length = 0;
  has = {};
  if (process.env.NODE_ENV !== 'production') {
    circular = {};
  }
  waiting = flushing = false;
}

/**
 * Flush both queues and run the watchers.
 */
function flushSchedulerQueue () {
  flushing = true;
  var watcher, id;

  // Sort queue before flush.
  // This ensures that:
  // 1. Components are updated from parent to child. (because parent is always
  //    created before the child)
  // 2. A component's user watchers are run before its render watcher (because
  //    user watchers are created before the render watcher)
  // 3. If a component is destroyed during a parent component's watcher run,
  //    its watchers can be skipped.
  queue.sort(function (a, b) { return a.id - b.id; });

  // do not cache length because more watchers might be pushed
  // as we run existing watchers
  for (index = 0; index < queue.length; index++) {
    watcher = queue[index];
    id = watcher.id;
    has[id] = null;
    watcher.run();
    // in dev build, check and stop circular updates.
    if (process.env.NODE_ENV !== 'production' && has[id] != null) {
      circular[id] = (circular[id] || 0) + 1;
      if (circular[id] > MAX_UPDATE_COUNT) {
        warn(
          'You may have an infinite update loop ' + (
            watcher.user
              ? ("in watcher with expression \"" + (watcher.expression) + "\"")
              : "in a component render function."
          ),
          watcher.vm
        );
        break
      }
    }
  }

  // keep copies of post queues before resetting state
  var activatedQueue = activatedChildren.slice();
  var updatedQueue = queue.slice();

  resetSchedulerState();

  // call component updated and activated hooks
  callActivatedHooks(activatedQueue);
  callUpdatedHooks(updatedQueue);

  // devtool hook
  /* istanbul ignore if */
  if (devtools && config.devtools) {
    devtools.emit('flush');
  }
}

function callUpdatedHooks (queue) {
  var i = queue.length;
  while (i--) {
    var watcher = queue[i];
    var vm = watcher.vm;
    if (vm._watcher === watcher && vm._isMounted) {
      callHook(vm, 'updated');
    }
  }
}

/**
 * Queue a kept-alive component that was activated during patch.
 * The queue will be processed after the entire tree has been patched.
 */
function queueActivatedComponent (vm) {
  // setting _inactive to false here so that a render function can
  // rely on checking whether it's in an inactive tree (e.g. router-view)
  vm._inactive = false;
  activatedChildren.push(vm);
}

function callActivatedHooks (queue) {
  for (var i = 0; i < queue.length; i++) {
    queue[i]._inactive = true;
    activateChildComponent(queue[i], true /* true */);
  }
}

/**
 * Push a watcher into the watcher queue.
 * Jobs with duplicate IDs will be skipped unless it's
 * pushed when the queue is being flushed.
 */
function queueWatcher (watcher) {
  var id = watcher.id;
  if (has[id] == null) {
    has[id] = true;
    if (!flushing) {
      queue.push(watcher);
    } else {
      // if already flushing, splice the watcher based on its id
      // if already past its id, it will be run next immediately.
      var i = queue.length - 1;
      while (i > index && queue[i].id > watcher.id) {
        i--;
      }
      queue.splice(i + 1, 0, watcher);
    }
    // queue the flush
    if (!waiting) {
      waiting = true;
      nextTick(flushSchedulerQueue);
    }
  }
}

/*  */

var uid$1 = 0;

/**
 * A watcher parses an expression, collects dependencies,
 * and fires callback when the expression value changes.
 * This is used for both the $watch() api and directives.
 */
var Watcher = function Watcher (
  vm,
  expOrFn,
  cb,
  options,
  isRenderWatcher
) {
  this.vm = vm;
  if (isRenderWatcher) {
    vm._watcher = this;
  }
  vm._watchers.push(this);
  // options
  if (options) {
    this.deep = !!options.deep;
    this.user = !!options.user;
    this.lazy = !!options.lazy;
    this.sync = !!options.sync;
  } else {
    this.deep = this.user = this.lazy = this.sync = false;
  }
  this.cb = cb;
  this.id = ++uid$1; // uid for batching
  this.active = true;
  this.dirty = this.lazy; // for lazy watchers
  this.deps = [];
  this.newDeps = [];
  this.depIds = new _Set();
  this.newDepIds = new _Set();
  this.expression = process.env.NODE_ENV !== 'production'
    ? expOrFn.toString()
    : '';
  // parse expression for getter
  if (typeof expOrFn === 'function') {
    this.getter = expOrFn;
  } else {
    this.getter = parsePath(expOrFn);
    if (!this.getter) {
      this.getter = function () {};
      process.env.NODE_ENV !== 'production' && warn(
        "Failed watching path: \"" + expOrFn + "\" " +
        'Watcher only accepts simple dot-delimited paths. ' +
        'For full control, use a function instead.',
        vm
      );
    }
  }
  this.value = this.lazy
    ? undefined
    : this.get();
};

/**
 * Evaluate the getter, and re-collect dependencies.
 */
Watcher.prototype.get = function get () {
  pushTarget(this);
  var value;
  var vm = this.vm;
  try {
    value = this.getter.call(vm, vm);
  } catch (e) {
    if (this.user) {
      handleError(e, vm, ("getter for watcher \"" + (this.expression) + "\""));
    } else {
      throw e
    }
  } finally {
    // "touch" every property so they are all tracked as
    // dependencies for deep watching
    if (this.deep) {
      traverse(value);
    }
    popTarget();
    this.cleanupDeps();
  }
  return value
};

/**
 * Add a dependency to this directive.
 */
Watcher.prototype.addDep = function addDep (dep) {
  var id = dep.id;
  if (!this.newDepIds.has(id)) {
    this.newDepIds.add(id);
    this.newDeps.push(dep);
    if (!this.depIds.has(id)) {
      dep.addSub(this);
    }
  }
};

/**
 * Clean up for dependency collection.
 */
Watcher.prototype.cleanupDeps = function cleanupDeps () {
    var this$1 = this;

  var i = this.deps.length;
  while (i--) {
    var dep = this$1.deps[i];
    if (!this$1.newDepIds.has(dep.id)) {
      dep.removeSub(this$1);
    }
  }
  var tmp = this.depIds;
  this.depIds = this.newDepIds;
  this.newDepIds = tmp;
  this.newDepIds.clear();
  tmp = this.deps;
  this.deps = this.newDeps;
  this.newDeps = tmp;
  this.newDeps.length = 0;
};

/**
 * Subscriber interface.
 * Will be called when a dependency changes.
 */
Watcher.prototype.update = function update () {
  /* istanbul ignore else */
  if (this.lazy) {
    this.dirty = true;
  } else if (this.sync) {
    this.run();
  } else {
    queueWatcher(this);
  }
};

/**
 * Scheduler job interface.
 * Will be called by the scheduler.
 */
Watcher.prototype.run = function run () {
  if (this.active) {
    var value = this.get();
    if (
      value !== this.value ||
      // Deep watchers and watchers on Object/Arrays should fire even
      // when the value is the same, because the value may
      // have mutated.
      isObject(value) ||
      this.deep
    ) {
      // set new value
      var oldValue = this.value;
      this.value = value;
      if (this.user) {
        try {
          this.cb.call(this.vm, value, oldValue);
        } catch (e) {
          handleError(e, this.vm, ("callback for watcher \"" + (this.expression) + "\""));
        }
      } else {
        this.cb.call(this.vm, value, oldValue);
      }
    }
  }
};

/**
 * Evaluate the value of the watcher.
 * This only gets called for lazy watchers.
 */
Watcher.prototype.evaluate = function evaluate () {
  this.value = this.get();
  this.dirty = false;
};

/**
 * Depend on all deps collected by this watcher.
 */
Watcher.prototype.depend = function depend () {
    var this$1 = this;

  var i = this.deps.length;
  while (i--) {
    this$1.deps[i].depend();
  }
};

/**
 * Remove self from all dependencies' subscriber list.
 */
Watcher.prototype.teardown = function teardown () {
    var this$1 = this;

  if (this.active) {
    // remove self from vm's watcher list
    // this is a somewhat expensive operation so we skip it
    // if the vm is being destroyed.
    if (!this.vm._isBeingDestroyed) {
      remove(this.vm._watchers, this);
    }
    var i = this.deps.length;
    while (i--) {
      this$1.deps[i].removeSub(this$1);
    }
    this.active = false;
  }
};

/*  */

var sharedPropertyDefinition = {
  enumerable: true,
  configurable: true,
  get: noop,
  set: noop
};

function proxy (target, sourceKey, key) {
  sharedPropertyDefinition.get = function proxyGetter () {
    return this[sourceKey][key]
  };
  sharedPropertyDefinition.set = function proxySetter (val) {
    this[sourceKey][key] = val;
  };
  Object.defineProperty(target, key, sharedPropertyDefinition);
}

function initState (vm) {
  vm._watchers = [];
  var opts = vm.$options;
  if (opts.props) { initProps(vm, opts.props); }
  if (opts.methods) { initMethods(vm, opts.methods); }
  if (opts.data) {
    initData(vm);
  } else {
    observe(vm._data = {}, true /* asRootData */);
  }
  if (opts.computed) { initComputed(vm, opts.computed); }
  if (opts.watch && opts.watch !== nativeWatch) {
    initWatch(vm, opts.watch);
  }
}

function initProps (vm, propsOptions) {
  var propsData = vm.$options.propsData || {};
  var props = vm._props = {};
  // cache prop keys so that future props updates can iterate using Array
  // instead of dynamic object key enumeration.
  var keys = vm.$options._propKeys = [];
  var isRoot = !vm.$parent;
  // root instance props should be converted
  if (!isRoot) {
    toggleObserving(false);
  }
  var loop = function ( key ) {
    keys.push(key);
    var value = validateProp(key, propsOptions, propsData, vm);
    /* istanbul ignore else */
    if (process.env.NODE_ENV !== 'production') {
      var hyphenatedKey = hyphenate(key);
      if (isReservedAttribute(hyphenatedKey) ||
          config.isReservedAttr(hyphenatedKey)) {
        warn(
          ("\"" + hyphenatedKey + "\" is a reserved attribute and cannot be used as component prop."),
          vm
        );
      }
      defineReactive(props, key, value, function () {
        if (vm.$parent && !isUpdatingChildComponent) {
          warn(
            "Avoid mutating a prop directly since the value will be " +
            "overwritten whenever the parent component re-renders. " +
            "Instead, use a data or computed property based on the prop's " +
            "value. Prop being mutated: \"" + key + "\"",
            vm
          );
        }
      });
    } else {
      defineReactive(props, key, value);
    }
    // static props are already proxied on the component's prototype
    // during Vue.extend(). We only need to proxy props defined at
    // instantiation here.
    if (!(key in vm)) {
      proxy(vm, "_props", key);
    }
  };

  for (var key in propsOptions) loop( key );
  toggleObserving(true);
}

function initData (vm) {
  var data = vm.$options.data;
  data = vm._data = typeof data === 'function'
    ? getData(data, vm)
    : data || {};
  if (!isPlainObject(data)) {
    data = {};
    process.env.NODE_ENV !== 'production' && warn(
      'data functions should return an object:\n' +
      'https://vuejs.org/v2/guide/components.html#data-Must-Be-a-Function',
      vm
    );
  }
  // proxy data on instance
  var keys = Object.keys(data);
  var props = vm.$options.props;
  var methods = vm.$options.methods;
  var i = keys.length;
  while (i--) {
    var key = keys[i];
    if (process.env.NODE_ENV !== 'production') {
      if (methods && hasOwn(methods, key)) {
        warn(
          ("Method \"" + key + "\" has already been defined as a data property."),
          vm
        );
      }
    }
    if (props && hasOwn(props, key)) {
      process.env.NODE_ENV !== 'production' && warn(
        "The data property \"" + key + "\" is already declared as a prop. " +
        "Use prop default value instead.",
        vm
      );
    } else if (!isReserved(key)) {
      proxy(vm, "_data", key);
    }
  }
  // observe data
  observe(data, true /* asRootData */);
}

function getData (data, vm) {
  // #7573 disable dep collection when invoking data getters
  pushTarget();
  try {
    return data.call(vm, vm)
  } catch (e) {
    handleError(e, vm, "data()");
    return {}
  } finally {
    popTarget();
  }
}

var computedWatcherOptions = { lazy: true };

function initComputed (vm, computed) {
  // $flow-disable-line
  var watchers = vm._computedWatchers = Object.create(null);
  // computed properties are just getters during SSR
  var isSSR = isServerRendering();

  for (var key in computed) {
    var userDef = computed[key];
    var getter = typeof userDef === 'function' ? userDef : userDef.get;
    if (process.env.NODE_ENV !== 'production' && getter == null) {
      warn(
        ("Getter is missing for computed property \"" + key + "\"."),
        vm
      );
    }

    if (!isSSR) {
      // create internal watcher for the computed property.
      watchers[key] = new Watcher(
        vm,
        getter || noop,
        noop,
        computedWatcherOptions
      );
    }

    // component-defined computed properties are already defined on the
    // component prototype. We only need to define computed properties defined
    // at instantiation here.
    if (!(key in vm)) {
      defineComputed(vm, key, userDef);
    } else if (process.env.NODE_ENV !== 'production') {
      if (key in vm.$data) {
        warn(("The computed property \"" + key + "\" is already defined in data."), vm);
      } else if (vm.$options.props && key in vm.$options.props) {
        warn(("The computed property \"" + key + "\" is already defined as a prop."), vm);
      }
    }
  }
}

function defineComputed (
  target,
  key,
  userDef
) {
  var shouldCache = !isServerRendering();
  if (typeof userDef === 'function') {
    sharedPropertyDefinition.get = shouldCache
      ? createComputedGetter(key)
      : userDef;
    sharedPropertyDefinition.set = noop;
  } else {
    sharedPropertyDefinition.get = userDef.get
      ? shouldCache && userDef.cache !== false
        ? createComputedGetter(key)
        : userDef.get
      : noop;
    sharedPropertyDefinition.set = userDef.set
      ? userDef.set
      : noop;
  }
  if (process.env.NODE_ENV !== 'production' &&
      sharedPropertyDefinition.set === noop) {
    sharedPropertyDefinition.set = function () {
      warn(
        ("Computed property \"" + key + "\" was assigned to but it has no setter."),
        this
      );
    };
  }
  Object.defineProperty(target, key, sharedPropertyDefinition);
}

function createComputedGetter (key) {
  return function computedGetter () {
    var watcher = this._computedWatchers && this._computedWatchers[key];
    if (watcher) {
      if (watcher.dirty) {
        watcher.evaluate();
      }
      if (Dep.target) {
        watcher.depend();
      }
      return watcher.value
    }
  }
}

function initMethods (vm, methods) {
  var props = vm.$options.props;
  for (var key in methods) {
    if (process.env.NODE_ENV !== 'production') {
      if (methods[key] == null) {
        warn(
          "Method \"" + key + "\" has an undefined value in the component definition. " +
          "Did you reference the function correctly?",
          vm
        );
      }
      if (props && hasOwn(props, key)) {
        warn(
          ("Method \"" + key + "\" has already been defined as a prop."),
          vm
        );
      }
      if ((key in vm) && isReserved(key)) {
        warn(
          "Method \"" + key + "\" conflicts with an existing Vue instance method. " +
          "Avoid defining component methods that start with _ or $."
        );
      }
    }
    vm[key] = methods[key] == null ? noop : bind(methods[key], vm);
  }
}

function initWatch (vm, watch) {
  for (var key in watch) {
    var handler = watch[key];
    if (Array.isArray(handler)) {
      for (var i = 0; i < handler.length; i++) {
        createWatcher(vm, key, handler[i]);
      }
    } else {
      createWatcher(vm, key, handler);
    }
  }
}

function createWatcher (
  vm,
  expOrFn,
  handler,
  options
) {
  if (isPlainObject(handler)) {
    options = handler;
    handler = handler.handler;
  }
  if (typeof handler === 'string') {
    handler = vm[handler];
  }
  return vm.$watch(expOrFn, handler, options)
}

function stateMixin (Vue) {
  // flow somehow has problems with directly declared definition object
  // when using Object.defineProperty, so we have to procedurally build up
  // the object here.
  var dataDef = {};
  dataDef.get = function () { return this._data };
  var propsDef = {};
  propsDef.get = function () { return this._props };
  if (process.env.NODE_ENV !== 'production') {
    dataDef.set = function (newData) {
      warn(
        'Avoid replacing instance root $data. ' +
        'Use nested data properties instead.',
        this
      );
    };
    propsDef.set = function () {
      warn("$props is readonly.", this);
    };
  }
  Object.defineProperty(Vue.prototype, '$data', dataDef);
  Object.defineProperty(Vue.prototype, '$props', propsDef);

  Vue.prototype.$set = set;
  Vue.prototype.$delete = del;

  Vue.prototype.$watch = function (
    expOrFn,
    cb,
    options
  ) {
    var vm = this;
    if (isPlainObject(cb)) {
      return createWatcher(vm, expOrFn, cb, options)
    }
    options = options || {};
    options.user = true;
    var watcher = new Watcher(vm, expOrFn, cb, options);
    if (options.immediate) {
      cb.call(vm, watcher.value);
    }
    return function unwatchFn () {
      watcher.teardown();
    }
  };
}

/*  */

function initProvide (vm) {
  var provide = vm.$options.provide;
  if (provide) {
    vm._provided = typeof provide === 'function'
      ? provide.call(vm)
      : provide;
  }
}

function initInjections (vm) {
  var result = resolveInject(vm.$options.inject, vm);
  if (result) {
    toggleObserving(false);
    Object.keys(result).forEach(function (key) {
      /* istanbul ignore else */
      if (process.env.NODE_ENV !== 'production') {
        defineReactive(vm, key, result[key], function () {
          warn(
            "Avoid mutating an injected value directly since the changes will be " +
            "overwritten whenever the provided component re-renders. " +
            "injection being mutated: \"" + key + "\"",
            vm
          );
        });
      } else {
        defineReactive(vm, key, result[key]);
      }
    });
    toggleObserving(true);
  }
}

function resolveInject (inject, vm) {
  if (inject) {
    // inject is :any because flow is not smart enough to figure out cached
    var result = Object.create(null);
    var keys = hasSymbol
      ? Reflect.ownKeys(inject).filter(function (key) {
        /* istanbul ignore next */
        return Object.getOwnPropertyDescriptor(inject, key).enumerable
      })
      : Object.keys(inject);

    for (var i = 0; i < keys.length; i++) {
      var key = keys[i];
      var provideKey = inject[key].from;
      var source = vm;
      while (source) {
        if (source._provided && hasOwn(source._provided, provideKey)) {
          result[key] = source._provided[provideKey];
          break
        }
        source = source.$parent;
      }
      if (!source) {
        if ('default' in inject[key]) {
          var provideDefault = inject[key].default;
          result[key] = typeof provideDefault === 'function'
            ? provideDefault.call(vm)
            : provideDefault;
        } else if (process.env.NODE_ENV !== 'production') {
          warn(("Injection \"" + key + "\" not found"), vm);
        }
      }
    }
    return result
  }
}

/*  */

/**
 * Runtime helper for rendering v-for lists.
 */
function renderList (
  val,
  render
) {
  var ret, i, l, keys, key;
  if (Array.isArray(val) || typeof val === 'string') {
    ret = new Array(val.length);
    for (i = 0, l = val.length; i < l; i++) {
      ret[i] = render(val[i], i);
    }
  } else if (typeof val === 'number') {
    ret = new Array(val);
    for (i = 0; i < val; i++) {
      ret[i] = render(i + 1, i);
    }
  } else if (isObject(val)) {
    keys = Object.keys(val);
    ret = new Array(keys.length);
    for (i = 0, l = keys.length; i < l; i++) {
      key = keys[i];
      ret[i] = render(val[key], key, i);
    }
  }
  if (isDef(ret)) {
    (ret)._isVList = true;
  }
  return ret
}

/*  */

/**
 * Runtime helper for rendering <slot>
 */
function renderSlot (
  name,
  fallback,
  props,
  bindObject
) {
  var scopedSlotFn = this.$scopedSlots[name];
  var nodes;
  if (scopedSlotFn) { // scoped slot
    props = props || {};
    if (bindObject) {
      if (process.env.NODE_ENV !== 'production' && !isObject(bindObject)) {
        warn(
          'slot v-bind without argument expects an Object',
          this
        );
      }
      props = extend(extend({}, bindObject), props);
    }
    nodes = scopedSlotFn(props) || fallback;
  } else {
    var slotNodes = this.$slots[name];
    // warn duplicate slot usage
    if (slotNodes) {
      if (process.env.NODE_ENV !== 'production' && slotNodes._rendered) {
        warn(
          "Duplicate presence of slot \"" + name + "\" found in the same render tree " +
          "- this will likely cause render errors.",
          this
        );
      }
      slotNodes._rendered = true;
    }
    nodes = slotNodes || fallback;
  }

  var target = props && props.slot;
  if (target) {
    return this.$createElement('template', { slot: target }, nodes)
  } else {
    return nodes
  }
}

/*  */

/**
 * Runtime helper for resolving filters
 */
function resolveFilter (id) {
  return resolveAsset(this.$options, 'filters', id, true) || identity
}

/*  */

function isKeyNotMatch (expect, actual) {
  if (Array.isArray(expect)) {
    return expect.indexOf(actual) === -1
  } else {
    return expect !== actual
  }
}

/**
 * Runtime helper for checking keyCodes from config.
 * exposed as Vue.prototype._k
 * passing in eventKeyName as last argument separately for backwards compat
 */
function checkKeyCodes (
  eventKeyCode,
  key,
  builtInKeyCode,
  eventKeyName,
  builtInKeyName
) {
  var mappedKeyCode = config.keyCodes[key] || builtInKeyCode;
  if (builtInKeyName && eventKeyName && !config.keyCodes[key]) {
    return isKeyNotMatch(builtInKeyName, eventKeyName)
  } else if (mappedKeyCode) {
    return isKeyNotMatch(mappedKeyCode, eventKeyCode)
  } else if (eventKeyName) {
    return hyphenate(eventKeyName) !== key
  }
}

/*  */

/**
 * Runtime helper for merging v-bind="object" into a VNode's data.
 */
function bindObjectProps (
  data,
  tag,
  value,
  asProp,
  isSync
) {
  if (value) {
    if (!isObject(value)) {
      process.env.NODE_ENV !== 'production' && warn(
        'v-bind without argument expects an Object or Array value',
        this
      );
    } else {
      if (Array.isArray(value)) {
        value = toObject(value);
      }
      var hash;
      var loop = function ( key ) {
        if (
          key === 'class' ||
          key === 'style' ||
          isReservedAttribute(key)
        ) {
          hash = data;
        } else {
          var type = data.attrs && data.attrs.type;
          hash = asProp || config.mustUseProp(tag, type, key)
            ? data.domProps || (data.domProps = {})
            : data.attrs || (data.attrs = {});
        }
        if (!(key in hash)) {
          hash[key] = value[key];

          if (isSync) {
            var on = data.on || (data.on = {});
            on[("update:" + key)] = function ($event) {
              value[key] = $event;
            };
          }
        }
      };

      for (var key in value) loop( key );
    }
  }
  return data
}

/*  */

/**
 * Runtime helper for rendering static trees.
 */
function renderStatic (
  index,
  isInFor
) {
  var cached = this._staticTrees || (this._staticTrees = []);
  var tree = cached[index];
  // if has already-rendered static tree and not inside v-for,
  // we can reuse the same tree.
  if (tree && !isInFor) {
    return tree
  }
  // otherwise, render a fresh tree.
  tree = cached[index] = this.$options.staticRenderFns[index].call(
    this._renderProxy,
    null,
    this // for render fns generated for functional component templates
  );
  markStatic(tree, ("__static__" + index), false);
  return tree
}

/**
 * Runtime helper for v-once.
 * Effectively it means marking the node as static with a unique key.
 */
function markOnce (
  tree,
  index,
  key
) {
  markStatic(tree, ("__once__" + index + (key ? ("_" + key) : "")), true);
  return tree
}

function markStatic (
  tree,
  key,
  isOnce
) {
  if (Array.isArray(tree)) {
    for (var i = 0; i < tree.length; i++) {
      if (tree[i] && typeof tree[i] !== 'string') {
        markStaticNode(tree[i], (key + "_" + i), isOnce);
      }
    }
  } else {
    markStaticNode(tree, key, isOnce);
  }
}

function markStaticNode (node, key, isOnce) {
  node.isStatic = true;
  node.key = key;
  node.isOnce = isOnce;
}

/*  */

function bindObjectListeners (data, value) {
  if (value) {
    if (!isPlainObject(value)) {
      process.env.NODE_ENV !== 'production' && warn(
        'v-on without argument expects an Object value',
        this
      );
    } else {
      var on = data.on = data.on ? extend({}, data.on) : {};
      for (var key in value) {
        var existing = on[key];
        var ours = value[key];
        on[key] = existing ? [].concat(existing, ours) : ours;
      }
    }
  }
  return data
}

/*  */

function installRenderHelpers (target) {
  target._o = markOnce;
  target._n = toNumber;
  target._s = toString;
  target._l = renderList;
  target._t = renderSlot;
  target._q = looseEqual;
  target._i = looseIndexOf;
  target._m = renderStatic;
  target._f = resolveFilter;
  target._k = checkKeyCodes;
  target._b = bindObjectProps;
  target._v = createTextVNode;
  target._e = createEmptyVNode;
  target._u = resolveScopedSlots;
  target._g = bindObjectListeners;
}

/*  */

function FunctionalRenderContext (
  data,
  props,
  children,
  parent,
  Ctor
) {
  var options = Ctor.options;
  // ensure the createElement function in functional components
  // gets a unique context - this is necessary for correct named slot check
  var contextVm;
  if (hasOwn(parent, '_uid')) {
    contextVm = Object.create(parent);
    // $flow-disable-line
    contextVm._original = parent;
  } else {
    // the context vm passed in is a functional context as well.
    // in this case we want to make sure we are able to get a hold to the
    // real context instance.
    contextVm = parent;
    // $flow-disable-line
    parent = parent._original;
  }
  var isCompiled = isTrue(options._compiled);
  var needNormalization = !isCompiled;

  this.data = data;
  this.props = props;
  this.children = children;
  this.parent = parent;
  this.listeners = data.on || emptyObject;
  this.injections = resolveInject(options.inject, parent);
  this.slots = function () { return resolveSlots(children, parent); };

  // support for compiled functional template
  if (isCompiled) {
    // exposing $options for renderStatic()
    this.$options = options;
    // pre-resolve slots for renderSlot()
    this.$slots = this.slots();
    this.$scopedSlots = data.scopedSlots || emptyObject;
  }

  if (options._scopeId) {
    this._c = function (a, b, c, d) {
      var vnode = createElement(contextVm, a, b, c, d, needNormalization);
      if (vnode && !Array.isArray(vnode)) {
        vnode.fnScopeId = options._scopeId;
        vnode.fnContext = parent;
      }
      return vnode
    };
  } else {
    this._c = function (a, b, c, d) { return createElement(contextVm, a, b, c, d, needNormalization); };
  }
}

installRenderHelpers(FunctionalRenderContext.prototype);

function createFunctionalComponent (
  Ctor,
  propsData,
  data,
  contextVm,
  children
) {
  var options = Ctor.options;
  var props = {};
  var propOptions = options.props;
  if (isDef(propOptions)) {
    for (var key in propOptions) {
      props[key] = validateProp(key, propOptions, propsData || emptyObject);
    }
  } else {
    if (isDef(data.attrs)) { mergeProps(props, data.attrs); }
    if (isDef(data.props)) { mergeProps(props, data.props); }
  }

  var renderContext = new FunctionalRenderContext(
    data,
    props,
    children,
    contextVm,
    Ctor
  );

  var vnode = options.render.call(null, renderContext._c, renderContext);

  if (vnode instanceof VNode) {
    return cloneAndMarkFunctionalResult(vnode, data, renderContext.parent, options)
  } else if (Array.isArray(vnode)) {
    var vnodes = normalizeChildren(vnode) || [];
    var res = new Array(vnodes.length);
    for (var i = 0; i < vnodes.length; i++) {
      res[i] = cloneAndMarkFunctionalResult(vnodes[i], data, renderContext.parent, options);
    }
    return res
  }
}

function cloneAndMarkFunctionalResult (vnode, data, contextVm, options) {
  // #7817 clone node before setting fnContext, otherwise if the node is reused
  // (e.g. it was from a cached normal slot) the fnContext causes named slots
  // that should not be matched to match.
  var clone = cloneVNode(vnode);
  clone.fnContext = contextVm;
  clone.fnOptions = options;
  if (data.slot) {
    (clone.data || (clone.data = {})).slot = data.slot;
  }
  return clone
}

function mergeProps (to, from) {
  for (var key in from) {
    to[camelize(key)] = from[key];
  }
}

/*  */




// Register the component hook to weex native render engine.
// The hook will be triggered by native, not javascript.


// Updates the state of the component to weex native render engine.

/*  */

// https://github.com/Hanks10100/weex-native-directive/tree/master/component

// listening on native callback

/*  */

/*  */

// inline hooks to be invoked on component VNodes during patch
var componentVNodeHooks = {
  init: function init (
    vnode,
    hydrating,
    parentElm,
    refElm
  ) {
    if (
      vnode.componentInstance &&
      !vnode.componentInstance._isDestroyed &&
      vnode.data.keepAlive
    ) {
      // kept-alive components, treat as a patch
      var mountedNode = vnode; // work around flow
      componentVNodeHooks.prepatch(mountedNode, mountedNode);
    } else {
      var child = vnode.componentInstance = createComponentInstanceForVnode(
        vnode,
        activeInstance,
        parentElm,
        refElm
      );
      child.$mount(hydrating ? vnode.elm : undefined, hydrating);
    }
  },

  prepatch: function prepatch (oldVnode, vnode) {
    var options = vnode.componentOptions;
    var child = vnode.componentInstance = oldVnode.componentInstance;
    updateChildComponent(
      child,
      options.propsData, // updated props
      options.listeners, // updated listeners
      vnode, // new parent vnode
      options.children // new children
    );
  },

  insert: function insert (vnode) {
    var context = vnode.context;
    var componentInstance = vnode.componentInstance;
    if (!componentInstance._isMounted) {
      componentInstance._isMounted = true;
      callHook(componentInstance, 'mounted');
    }
    if (vnode.data.keepAlive) {
      if (context._isMounted) {
        // vue-router#1212
        // During updates, a kept-alive component's child components may
        // change, so directly walking the tree here may call activated hooks
        // on incorrect children. Instead we push them into a queue which will
        // be processed after the whole patch process ended.
        queueActivatedComponent(componentInstance);
      } else {
        activateChildComponent(componentInstance, true /* direct */);
      }
    }
  },

  destroy: function destroy (vnode) {
    var componentInstance = vnode.componentInstance;
    if (!componentInstance._isDestroyed) {
      if (!vnode.data.keepAlive) {
        componentInstance.$destroy();
      } else {
        deactivateChildComponent(componentInstance, true /* direct */);
      }
    }
  }
};

var hooksToMerge = Object.keys(componentVNodeHooks);

function createComponent (
  Ctor,
  data,
  context,
  children,
  tag
) {
  if (isUndef(Ctor)) {
    return
  }

  var baseCtor = context.$options._base;

  // plain options object: turn it into a constructor
  if (isObject(Ctor)) {
    Ctor = baseCtor.extend(Ctor);
  }

  // if at this stage it's not a constructor or an async component factory,
  // reject.
  if (typeof Ctor !== 'function') {
    if (process.env.NODE_ENV !== 'production') {
      warn(("Invalid Component definition: " + (String(Ctor))), context);
    }
    return
  }

  // async component
  var asyncFactory;
  if (isUndef(Ctor.cid)) {
    asyncFactory = Ctor;
    Ctor = resolveAsyncComponent(asyncFactory, baseCtor, context);
    if (Ctor === undefined) {
      // return a placeholder node for async component, which is rendered
      // as a comment node but preserves all the raw information for the node.
      // the information will be used for async server-rendering and hydration.
      return createAsyncPlaceholder(
        asyncFactory,
        data,
        context,
        children,
        tag
      )
    }
  }

  data = data || {};

  // resolve constructor options in case global mixins are applied after
  // component constructor creation
  resolveConstructorOptions(Ctor);

  // transform component v-model data into props & events
  if (isDef(data.model)) {
    transformModel(Ctor.options, data);
  }

  // extract props
  var propsData = extractPropsFromVNodeData(data, Ctor, tag);

  // functional component
  if (isTrue(Ctor.options.functional)) {
    return createFunctionalComponent(Ctor, propsData, data, context, children)
  }

  // extract listeners, since these needs to be treated as
  // child component listeners instead of DOM listeners
  var listeners = data.on;
  // replace with listeners with .native modifier
  // so it gets processed during parent component patch.
  data.on = data.nativeOn;

  if (isTrue(Ctor.options.abstract)) {
    // abstract components do not keep anything
    // other than props & listeners & slot

    // work around flow
    var slot = data.slot;
    data = {};
    if (slot) {
      data.slot = slot;
    }
  }

  // install component management hooks onto the placeholder node
  installComponentHooks(data);

  // return a placeholder vnode
  var name = Ctor.options.name || tag;
  var vnode = new VNode(
    ("vue-component-" + (Ctor.cid) + (name ? ("-" + name) : '')),
    data, undefined, undefined, undefined, context,
    { Ctor: Ctor, propsData: propsData, listeners: listeners, tag: tag, children: children },
    asyncFactory
  );

  // Weex specific: invoke recycle-list optimized @render function for
  // extracting cell-slot template.
  // https://github.com/Hanks10100/weex-native-directive/tree/master/component
  /* istanbul ignore if */
  return vnode
}

function createComponentInstanceForVnode (
  vnode, // we know it's MountedComponentVNode but flow doesn't
  parent, // activeInstance in lifecycle state
  parentElm,
  refElm
) {
  var options = {
    _isComponent: true,
    parent: parent,
    _parentVnode: vnode,
    _parentElm: parentElm || null,
    _refElm: refElm || null
  };
  // check inline-template render functions
  var inlineTemplate = vnode.data.inlineTemplate;
  if (isDef(inlineTemplate)) {
    options.render = inlineTemplate.render;
    options.staticRenderFns = inlineTemplate.staticRenderFns;
  }
  return new vnode.componentOptions.Ctor(options)
}

function installComponentHooks (data) {
  var hooks = data.hook || (data.hook = {});
  for (var i = 0; i < hooksToMerge.length; i++) {
    var key = hooksToMerge[i];
    hooks[key] = componentVNodeHooks[key];
  }
}

// transform component v-model info (value and callback) into
// prop and event handler respectively.
function transformModel (options, data) {
  var prop = (options.model && options.model.prop) || 'value';
  var event = (options.model && options.model.event) || 'input';(data.props || (data.props = {}))[prop] = data.model.value;
  var on = data.on || (data.on = {});
  if (isDef(on[event])) {
    on[event] = [data.model.callback].concat(on[event]);
  } else {
    on[event] = data.model.callback;
  }
}

/*  */

var SIMPLE_NORMALIZE = 1;
var ALWAYS_NORMALIZE = 2;

// wrapper function for providing a more flexible interface
// without getting yelled at by flow
function createElement (
  context,
  tag,
  data,
  children,
  normalizationType,
  alwaysNormalize
) {
  if (Array.isArray(data) || isPrimitive(data)) {
    normalizationType = children;
    children = data;
    data = undefined;
  }
  if (isTrue(alwaysNormalize)) {
    normalizationType = ALWAYS_NORMALIZE;
  }
  return _createElement(context, tag, data, children, normalizationType)
}

function _createElement (
  context,
  tag,
  data,
  children,
  normalizationType
) {
  if (isDef(data) && isDef((data).__ob__)) {
    process.env.NODE_ENV !== 'production' && warn(
      "Avoid using observed data object as vnode data: " + (JSON.stringify(data)) + "\n" +
      'Always create fresh vnode data objects in each render!',
      context
    );
    return createEmptyVNode()
  }
  // object syntax in v-bind
  if (isDef(data) && isDef(data.is)) {
    tag = data.is;
  }
  if (!tag) {
    // in case of component :is set to falsy value
    return createEmptyVNode()
  }
  // warn against non-primitive key
  if (process.env.NODE_ENV !== 'production' &&
    isDef(data) && isDef(data.key) && !isPrimitive(data.key)
  ) {
    {
      warn(
        'Avoid using non-primitive value as key, ' +
        'use string/number value instead.',
        context
      );
    }
  }
  // support single function children as default scoped slot
  if (Array.isArray(children) &&
    typeof children[0] === 'function'
  ) {
    data = data || {};
    data.scopedSlots = { default: children[0] };
    children.length = 0;
  }
  if (normalizationType === ALWAYS_NORMALIZE) {
    children = normalizeChildren(children);
  } else if (normalizationType === SIMPLE_NORMALIZE) {
    children = simpleNormalizeChildren(children);
  }
  var vnode, ns;
  if (typeof tag === 'string') {
    var Ctor;
    ns = (context.$vnode && context.$vnode.ns) || config.getTagNamespace(tag);
    if (config.isReservedTag(tag)) {
      // platform built-in elements
      vnode = new VNode(
        config.parsePlatformTagName(tag), data, children,
        undefined, undefined, context
      );
    } else if (isDef(Ctor = resolveAsset(context.$options, 'components', tag))) {
      // component
      vnode = createComponent(Ctor, data, context, children, tag);
    } else {
      // unknown or unlisted namespaced elements
      // check at runtime because it may get assigned a namespace when its
      // parent normalizes children
      vnode = new VNode(
        tag, data, children,
        undefined, undefined, context
      );
    }
  } else {
    // direct component options / constructor
    vnode = createComponent(tag, data, context, children);
  }
  if (Array.isArray(vnode)) {
    return vnode
  } else if (isDef(vnode)) {
    if (isDef(ns)) { applyNS(vnode, ns); }
    if (isDef(data)) { registerDeepBindings(data); }
    return vnode
  } else {
    return createEmptyVNode()
  }
}

function applyNS (vnode, ns, force) {
  vnode.ns = ns;
  if (vnode.tag === 'foreignObject') {
    // use default namespace inside foreignObject
    ns = undefined;
    force = true;
  }
  if (isDef(vnode.children)) {
    for (var i = 0, l = vnode.children.length; i < l; i++) {
      var child = vnode.children[i];
      if (isDef(child.tag) && (
        isUndef(child.ns) || (isTrue(force) && child.tag !== 'svg'))) {
        applyNS(child, ns, force);
      }
    }
  }
}

// ref #5318
// necessary to ensure parent re-render when deep bindings like :style and
// :class are used on slot nodes
function registerDeepBindings (data) {
  if (isObject(data.style)) {
    traverse(data.style);
  }
  if (isObject(data.class)) {
    traverse(data.class);
  }
}

/*  */

function initRender (vm) {
  vm._vnode = null; // the root of the child tree
  vm._staticTrees = null; // v-once cached trees
  var options = vm.$options;
  var parentVnode = vm.$vnode = options._parentVnode; // the placeholder node in parent tree
  var renderContext = parentVnode && parentVnode.context;
  vm.$slots = resolveSlots(options._renderChildren, renderContext);
  vm.$scopedSlots = emptyObject;
  // bind the createElement fn to this instance
  // so that we get proper render context inside it.
  // args order: tag, data, children, normalizationType, alwaysNormalize
  // internal version is used by render functions compiled from templates
  vm._c = function (a, b, c, d) { return createElement(vm, a, b, c, d, false); };
  // normalization is always applied for the public version, used in
  // user-written render functions.
  vm.$createElement = function (a, b, c, d) { return createElement(vm, a, b, c, d, true); };

  // $attrs & $listeners are exposed for easier HOC creation.
  // they need to be reactive so that HOCs using them are always updated
  var parentData = parentVnode && parentVnode.data;

  /* istanbul ignore else */
  if (process.env.NODE_ENV !== 'production') {
    defineReactive(vm, '$attrs', parentData && parentData.attrs || emptyObject, function () {
      !isUpdatingChildComponent && warn("$attrs is readonly.", vm);
    }, true);
    defineReactive(vm, '$listeners', options._parentListeners || emptyObject, function () {
      !isUpdatingChildComponent && warn("$listeners is readonly.", vm);
    }, true);
  } else {
    defineReactive(vm, '$attrs', parentData && parentData.attrs || emptyObject, null, true);
    defineReactive(vm, '$listeners', options._parentListeners || emptyObject, null, true);
  }
}

function renderMixin (Vue) {
  // install runtime convenience helpers
  installRenderHelpers(Vue.prototype);

  Vue.prototype.$nextTick = function (fn) {
    return nextTick(fn, this)
  };

  Vue.prototype._render = function () {
    var vm = this;
    var ref = vm.$options;
    var render = ref.render;
    var _parentVnode = ref._parentVnode;

    // reset _rendered flag on slots for duplicate slot check
    if (process.env.NODE_ENV !== 'production') {
      for (var key in vm.$slots) {
        // $flow-disable-line
        vm.$slots[key]._rendered = false;
      }
    }

    if (_parentVnode) {
      vm.$scopedSlots = _parentVnode.data.scopedSlots || emptyObject;
    }

    // set parent vnode. this allows render functions to have access
    // to the data on the placeholder node.
    vm.$vnode = _parentVnode;
    // render self
    var vnode;
    try {
      vnode = render.call(vm._renderProxy, vm.$createElement);
    } catch (e) {
      handleError(e, vm, "render");
      // return error render result,
      // or previous vnode to prevent render error causing blank component
      /* istanbul ignore else */
      if (process.env.NODE_ENV !== 'production') {
        if (vm.$options.renderError) {
          try {
            vnode = vm.$options.renderError.call(vm._renderProxy, vm.$createElement, e);
          } catch (e) {
            handleError(e, vm, "renderError");
            vnode = vm._vnode;
          }
        } else {
          vnode = vm._vnode;
        }
      } else {
        vnode = vm._vnode;
      }
    }
    // return empty vnode in case the render function errored out
    if (!(vnode instanceof VNode)) {
      if (process.env.NODE_ENV !== 'production' && Array.isArray(vnode)) {
        warn(
          'Multiple root nodes returned from render function. Render function ' +
          'should return a single root node.',
          vm
        );
      }
      vnode = createEmptyVNode();
    }
    // set parent
    vnode.parent = _parentVnode;
    return vnode
  };
}

/*  */

var uid$3 = 0;

function initMixin (Vue) {
  Vue.prototype._init = function (options) {
    var vm = this;
    // a uid
    vm._uid = uid$3++;

    var startTag, endTag;
    /* istanbul ignore if */
    if (process.env.NODE_ENV !== 'production' && config.performance && mark) {
      startTag = "vue-perf-start:" + (vm._uid);
      endTag = "vue-perf-end:" + (vm._uid);
      mark(startTag);
    }

    // a flag to avoid this being observed
    vm._isVue = true;
    // merge options
    if (options && options._isComponent) {
      // optimize internal component instantiation
      // since dynamic options merging is pretty slow, and none of the
      // internal component options needs special treatment.
      initInternalComponent(vm, options);
    } else {
      vm.$options = mergeOptions(
        resolveConstructorOptions(vm.constructor),
        options || {},
        vm
      );
    }
    /* istanbul ignore else */
    if (process.env.NODE_ENV !== 'production') {
      initProxy(vm);
    } else {
      vm._renderProxy = vm;
    }
    // expose real self
    vm._self = vm;
    initLifecycle(vm);
    initEvents(vm);
    initRender(vm);
    callHook(vm, 'beforeCreate');
    initInjections(vm); // resolve injections before data/props
    initState(vm);
    initProvide(vm); // resolve provide after data/props
    callHook(vm, 'created');

    /* istanbul ignore if */
    if (process.env.NODE_ENV !== 'production' && config.performance && mark) {
      vm._name = formatComponentName(vm, false);
      mark(endTag);
      measure(("vue " + (vm._name) + " init"), startTag, endTag);
    }

    if (vm.$options.el) {
      vm.$mount(vm.$options.el);
    }
  };
}

function initInternalComponent (vm, options) {
  var opts = vm.$options = Object.create(vm.constructor.options);
  // doing this because it's faster than dynamic enumeration.
  var parentVnode = options._parentVnode;
  opts.parent = options.parent;
  opts._parentVnode = parentVnode;
  opts._parentElm = options._parentElm;
  opts._refElm = options._refElm;

  var vnodeComponentOptions = parentVnode.componentOptions;
  opts.propsData = vnodeComponentOptions.propsData;
  opts._parentListeners = vnodeComponentOptions.listeners;
  opts._renderChildren = vnodeComponentOptions.children;
  opts._componentTag = vnodeComponentOptions.tag;

  if (options.render) {
    opts.render = options.render;
    opts.staticRenderFns = options.staticRenderFns;
  }
}

function resolveConstructorOptions (Ctor) {
  var options = Ctor.options;
  if (Ctor.super) {
    var superOptions = resolveConstructorOptions(Ctor.super);
    var cachedSuperOptions = Ctor.superOptions;
    if (superOptions !== cachedSuperOptions) {
      // super option changed,
      // need to resolve new options.
      Ctor.superOptions = superOptions;
      // check if there are any late-modified/attached options (#4976)
      var modifiedOptions = resolveModifiedOptions(Ctor);
      // update base extend options
      if (modifiedOptions) {
        extend(Ctor.extendOptions, modifiedOptions);
      }
      options = Ctor.options = mergeOptions(superOptions, Ctor.extendOptions);
      if (options.name) {
        options.components[options.name] = Ctor;
      }
    }
  }
  return options
}

function resolveModifiedOptions (Ctor) {
  var modified;
  var latest = Ctor.options;
  var extended = Ctor.extendOptions;
  var sealed = Ctor.sealedOptions;
  for (var key in latest) {
    if (latest[key] !== sealed[key]) {
      if (!modified) { modified = {}; }
      modified[key] = dedupe(latest[key], extended[key], sealed[key]);
    }
  }
  return modified
}

function dedupe (latest, extended, sealed) {
  // compare latest and sealed to ensure lifecycle hooks won't be duplicated
  // between merges
  if (Array.isArray(latest)) {
    var res = [];
    sealed = Array.isArray(sealed) ? sealed : [sealed];
    extended = Array.isArray(extended) ? extended : [extended];
    for (var i = 0; i < latest.length; i++) {
      // push original options and not sealed options to exclude duplicated options
      if (extended.indexOf(latest[i]) >= 0 || sealed.indexOf(latest[i]) < 0) {
        res.push(latest[i]);
      }
    }
    return res
  } else {
    return latest
  }
}

function Vue (options) {
  if (process.env.NODE_ENV !== 'production' &&
    !(this instanceof Vue)
  ) {
    warn('Vue is a constructor and should be called with the `new` keyword');
  }
  this._init(options);
}

initMixin(Vue);
stateMixin(Vue);
eventsMixin(Vue);
lifecycleMixin(Vue);
renderMixin(Vue);

/*  */

function initUse (Vue) {
  Vue.use = function (plugin) {
    var installedPlugins = (this._installedPlugins || (this._installedPlugins = []));
    if (installedPlugins.indexOf(plugin) > -1) {
      return this
    }

    // additional parameters
    var args = toArray(arguments, 1);
    args.unshift(this);
    if (typeof plugin.install === 'function') {
      plugin.install.apply(plugin, args);
    } else if (typeof plugin === 'function') {
      plugin.apply(null, args);
    }
    installedPlugins.push(plugin);
    return this
  };
}

/*  */

function initMixin$1 (Vue) {
  Vue.mixin = function (mixin) {
    this.options = mergeOptions(this.options, mixin);
    return this
  };
}

/*  */

function initExtend (Vue) {
  /**
   * Each instance constructor, including Vue, has a unique
   * cid. This enables us to create wrapped "child
   * constructors" for prototypal inheritance and cache them.
   */
  Vue.cid = 0;
  var cid = 1;

  /**
   * Class inheritance
   */
  Vue.extend = function (extendOptions) {
    extendOptions = extendOptions || {};
    var Super = this;
    var SuperId = Super.cid;
    var cachedCtors = extendOptions._Ctor || (extendOptions._Ctor = {});
    if (cachedCtors[SuperId]) {
      return cachedCtors[SuperId]
    }

    var name = extendOptions.name || Super.options.name;
    if (process.env.NODE_ENV !== 'production' && name) {
      validateComponentName(name);
    }

    var Sub = function VueComponent (options) {
      this._init(options);
    };
    Sub.prototype = Object.create(Super.prototype);
    Sub.prototype.constructor = Sub;
    Sub.cid = cid++;
    Sub.options = mergeOptions(
      Super.options,
      extendOptions
    );
    Sub['super'] = Super;

    // For props and computed properties, we define the proxy getters on
    // the Vue instances at extension time, on the extended prototype. This
    // avoids Object.defineProperty calls for each instance created.
    if (Sub.options.props) {
      initProps$1(Sub);
    }
    if (Sub.options.computed) {
      initComputed$1(Sub);
    }

    // allow further extension/mixin/plugin usage
    Sub.extend = Super.extend;
    Sub.mixin = Super.mixin;
    Sub.use = Super.use;

    // create asset registers, so extended classes
    // can have their private assets too.
    ASSET_TYPES.forEach(function (type) {
      Sub[type] = Super[type];
    });
    // enable recursive self-lookup
    if (name) {
      Sub.options.components[name] = Sub;
    }

    // keep a reference to the super options at extension time.
    // later at instantiation we can check if Super's options have
    // been updated.
    Sub.superOptions = Super.options;
    Sub.extendOptions = extendOptions;
    Sub.sealedOptions = extend({}, Sub.options);

    // cache constructor
    cachedCtors[SuperId] = Sub;
    return Sub
  };
}

function initProps$1 (Comp) {
  var props = Comp.options.props;
  for (var key in props) {
    proxy(Comp.prototype, "_props", key);
  }
}

function initComputed$1 (Comp) {
  var computed = Comp.options.computed;
  for (var key in computed) {
    defineComputed(Comp.prototype, key, computed[key]);
  }
}

/*  */

function initAssetRegisters (Vue) {
  /**
   * Create asset registration methods.
   */
  ASSET_TYPES.forEach(function (type) {
    Vue[type] = function (
      id,
      definition
    ) {
      if (!definition) {
        return this.options[type + 's'][id]
      } else {
        /* istanbul ignore if */
        if (process.env.NODE_ENV !== 'production' && type === 'component') {
          validateComponentName(id);
        }
        if (type === 'component' && isPlainObject(definition)) {
          definition.name = definition.name || id;
          definition = this.options._base.extend(definition);
        }
        if (type === 'directive' && typeof definition === 'function') {
          definition = { bind: definition, update: definition };
        }
        this.options[type + 's'][id] = definition;
        return definition
      }
    };
  });
}

/*  */

function getComponentName (opts) {
  return opts && (opts.Ctor.options.name || opts.tag)
}

function matches (pattern, name) {
  if (Array.isArray(pattern)) {
    return pattern.indexOf(name) > -1
  } else if (typeof pattern === 'string') {
    return pattern.split(',').indexOf(name) > -1
  } else if (isRegExp(pattern)) {
    return pattern.test(name)
  }
  /* istanbul ignore next */
  return false
}

function pruneCache (keepAliveInstance, filter) {
  var cache = keepAliveInstance.cache;
  var keys = keepAliveInstance.keys;
  var _vnode = keepAliveInstance._vnode;
  for (var key in cache) {
    var cachedNode = cache[key];
    if (cachedNode) {
      var name = getComponentName(cachedNode.componentOptions);
      if (name && !filter(name)) {
        pruneCacheEntry(cache, key, keys, _vnode);
      }
    }
  }
}

function pruneCacheEntry (
  cache,
  key,
  keys,
  current
) {
  var cached$$1 = cache[key];
  if (cached$$1 && (!current || cached$$1.tag !== current.tag)) {
    cached$$1.componentInstance.$destroy();
  }
  cache[key] = null;
  remove(keys, key);
}

var patternTypes = [String, RegExp, Array];

var KeepAlive = {
  name: 'keep-alive',
  abstract: true,

  props: {
    include: patternTypes,
    exclude: patternTypes,
    max: [String, Number]
  },

  created: function created () {
    this.cache = Object.create(null);
    this.keys = [];
  },

  destroyed: function destroyed () {
    var this$1 = this;

    for (var key in this$1.cache) {
      pruneCacheEntry(this$1.cache, key, this$1.keys);
    }
  },

  mounted: function mounted () {
    var this$1 = this;

    this.$watch('include', function (val) {
      pruneCache(this$1, function (name) { return matches(val, name); });
    });
    this.$watch('exclude', function (val) {
      pruneCache(this$1, function (name) { return !matches(val, name); });
    });
  },

  render: function render () {
    var slot = this.$slots.default;
    var vnode = getFirstComponentChild(slot);
    var componentOptions = vnode && vnode.componentOptions;
    if (componentOptions) {
      // check pattern
      var name = getComponentName(componentOptions);
      var ref = this;
      var include = ref.include;
      var exclude = ref.exclude;
      if (
        // not included
        (include && (!name || !matches(include, name))) ||
        // excluded
        (exclude && name && matches(exclude, name))
      ) {
        return vnode
      }

      var ref$1 = this;
      var cache = ref$1.cache;
      var keys = ref$1.keys;
      var key = vnode.key == null
        // same constructor may get registered as different local components
        // so cid alone is not enough (#3269)
        ? componentOptions.Ctor.cid + (componentOptions.tag ? ("::" + (componentOptions.tag)) : '')
        : vnode.key;
      if (cache[key]) {
        vnode.componentInstance = cache[key].componentInstance;
        // make current key freshest
        remove(keys, key);
        keys.push(key);
      } else {
        cache[key] = vnode;
        keys.push(key);
        // prune oldest entry
        if (this.max && keys.length > parseInt(this.max)) {
          pruneCacheEntry(cache, keys[0], keys, this._vnode);
        }
      }

      vnode.data.keepAlive = true;
    }
    return vnode || (slot && slot[0])
  }
}

var builtInComponents = {
  KeepAlive: KeepAlive
}

/*  */

function initGlobalAPI (Vue) {
  // config
  var configDef = {};
  configDef.get = function () { return config; };
  if (process.env.NODE_ENV !== 'production') {
    configDef.set = function () {
      warn(
        'Do not replace the Vue.config object, set individual fields instead.'
      );
    };
  }
  Object.defineProperty(Vue, 'config', configDef);

  // exposed util methods.
  // NOTE: these are not considered part of the public API - avoid relying on
  // them unless you are aware of the risk.
  Vue.util = {
    warn: warn,
    extend: extend,
    mergeOptions: mergeOptions,
    defineReactive: defineReactive
  };

  Vue.set = set;
  Vue.delete = del;
  Vue.nextTick = nextTick;

  Vue.options = Object.create(null);
  ASSET_TYPES.forEach(function (type) {
    Vue.options[type + 's'] = Object.create(null);
  });

  // this is used to identify the "base" constructor to extend all plain-object
  // components with in Weex's multi-instance scenarios.
  Vue.options._base = Vue;

  extend(Vue.options.components, builtInComponents);

  initUse(Vue);
  initMixin$1(Vue);
  initExtend(Vue);
  initAssetRegisters(Vue);
}

initGlobalAPI(Vue);

Object.defineProperty(Vue.prototype, '$isServer', {
  get: isServerRendering
});

Object.defineProperty(Vue.prototype, '$ssrContext', {
  get: function get () {
    /* istanbul ignore next */
    return this.$vnode && this.$vnode.ssrContext
  }
});

// expose FunctionalRenderContext for ssr runtime helper installation
Object.defineProperty(Vue, 'FunctionalRenderContext', {
  value: FunctionalRenderContext
});

Vue.version = '2.5.16';

/*  */

// these are reserved for web because they are directly compiled away
// during template compilation
var isReservedAttr = makeMap('style,class');

// attributes that should be using props for binding
var acceptValue = makeMap('input,textarea,option,select,progress');
var mustUseProp = function (tag, type, attr) {
  return (
    (attr === 'value' && acceptValue(tag)) && type !== 'button' ||
    (attr === 'selected' && tag === 'option') ||
    (attr === 'checked' && tag === 'input') ||
    (attr === 'muted' && tag === 'video')
  )
};

var isEnumeratedAttr = makeMap('contenteditable,draggable,spellcheck');

var isBooleanAttr = makeMap(
  'allowfullscreen,async,autofocus,autoplay,checked,compact,controls,declare,' +
  'default,defaultchecked,defaultmuted,defaultselected,defer,disabled,' +
  'enabled,formnovalidate,hidden,indeterminate,inert,ismap,itemscope,loop,multiple,' +
  'muted,nohref,noresize,noshade,novalidate,nowrap,open,pauseonexit,readonly,' +
  'required,reversed,scoped,seamless,selected,sortable,translate,' +
  'truespeed,typemustmatch,visible'
);

var xlinkNS = 'http://www.w3.org/1999/xlink';

var isXlink = function (name) {
  return name.charAt(5) === ':' && name.slice(0, 5) === 'xlink'
};

var getXlinkProp = function (name) {
  return isXlink(name) ? name.slice(6, name.length) : ''
};

var isFalsyAttrValue = function (val) {
  return val == null || val === false
};

/*  */

function genClassForVnode (vnode) {
  var data = vnode.data;
  var parentNode = vnode;
  var childNode = vnode;
  while (isDef(childNode.componentInstance)) {
    childNode = childNode.componentInstance._vnode;
    if (childNode && childNode.data) {
      data = mergeClassData(childNode.data, data);
    }
  }
  while (isDef(parentNode = parentNode.parent)) {
    if (parentNode && parentNode.data) {
      data = mergeClassData(data, parentNode.data);
    }
  }
  return renderClass(data.staticClass, data.class)
}

function mergeClassData (child, parent) {
  return {
    staticClass: concat(child.staticClass, parent.staticClass),
    class: isDef(child.class)
      ? [child.class, parent.class]
      : parent.class
  }
}

function renderClass (
  staticClass,
  dynamicClass
) {
  if (isDef(staticClass) || isDef(dynamicClass)) {
    return concat(staticClass, stringifyClass(dynamicClass))
  }
  /* istanbul ignore next */
  return ''
}

function concat (a, b) {
  return a ? b ? (a + ' ' + b) : a : (b || '')
}

function stringifyClass (value) {
  if (Array.isArray(value)) {
    return stringifyArray(value)
  }
  if (isObject(value)) {
    return stringifyObject(value)
  }
  if (typeof value === 'string') {
    return value
  }
  /* istanbul ignore next */
  return ''
}

function stringifyArray (value) {
  var res = '';
  var stringified;
  for (var i = 0, l = value.length; i < l; i++) {
    if (isDef(stringified = stringifyClass(value[i])) && stringified !== '') {
      if (res) { res += ' '; }
      res += stringified;
    }
  }
  return res
}

function stringifyObject (value) {
  var res = '';
  for (var key in value) {
    if (value[key]) {
      if (res) { res += ' '; }
      res += key;
    }
  }
  return res
}

/*  */

var namespaceMap = {
  svg: 'http://www.w3.org/2000/svg',
  math: 'http://www.w3.org/1998/Math/MathML'
};

var isHTMLTag = makeMap(
  'html,body,base,head,link,meta,style,title,' +
  'address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,hgroup,nav,section,' +
  'div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,' +
  'a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,rtc,ruby,' +
  's,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,' +
  'embed,object,param,source,canvas,script,noscript,del,ins,' +
  'caption,col,colgroup,table,thead,tbody,td,th,tr,' +
  'button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,' +
  'output,progress,select,textarea,' +
  'details,dialog,menu,menuitem,summary,' +
  'content,element,shadow,template,blockquote,iframe,tfoot'
);

// this map is intentionally selective, only covering SVG elements that may
// contain child elements.
var isSVG = makeMap(
  'svg,animate,circle,clippath,cursor,defs,desc,ellipse,filter,font-face,' +
  'foreignObject,g,glyph,image,line,marker,mask,missing-glyph,path,pattern,' +
  'polygon,polyline,rect,switch,symbol,text,textpath,tspan,use,view',
  true
);



var isReservedTag = function (tag) {
  return isHTMLTag(tag) || isSVG(tag)
};

function getTagNamespace (tag) {
  if (isSVG(tag)) {
    return 'svg'
  }
  // basic support for MathML
  // note it doesn't support other MathML elements being component roots
  if (tag === 'math') {
    return 'math'
  }
}

var unknownElementCache = Object.create(null);
function isUnknownElement (tag) {
  /* istanbul ignore if */
  if (!inBrowser) {
    return true
  }
  if (isReservedTag(tag)) {
    return false
  }
  tag = tag.toLowerCase();
  /* istanbul ignore if */
  if (unknownElementCache[tag] != null) {
    return unknownElementCache[tag]
  }
  var el = document.createElement(tag);
  if (tag.indexOf('-') > -1) {
    // http://stackoverflow.com/a/28210364/1070244
    return (unknownElementCache[tag] = (
      el.constructor === window.HTMLUnknownElement ||
      el.constructor === window.HTMLElement
    ))
  } else {
    return (unknownElementCache[tag] = /HTMLUnknownElement/.test(el.toString()))
  }
}

var isTextInputType = makeMap('text,number,password,search,email,tel,url');

/*  */

/**
 * Query an element selector if it's not an element already.
 */
function query (el) {
  if (typeof el === 'string') {
    var selected = document.querySelector(el);
    if (!selected) {
      process.env.NODE_ENV !== 'production' && warn(
        'Cannot find element: ' + el
      );
      return document.createElement('div')
    }
    return selected
  } else {
    return el
  }
}

/*  */

function createElement$1 (tagName, vnode) {
  var elm = document.createElement(tagName);
  if (tagName !== 'select') {
    return elm
  }
  // false or null will remove the attribute but undefined will not
  if (vnode.data && vnode.data.attrs && vnode.data.attrs.multiple !== undefined) {
    elm.setAttribute('multiple', 'multiple');
  }
  return elm
}

function createElementNS (namespace, tagName) {
  return document.createElementNS(namespaceMap[namespace], tagName)
}

function createTextNode (text) {
  return document.createTextNode(text)
}

function createComment (text) {
  return document.createComment(text)
}

function insertBefore (parentNode, newNode, referenceNode) {
  parentNode.insertBefore(newNode, referenceNode);
}

function removeChild (node, child) {
  node.removeChild(child);
}

function appendChild (node, child) {
  node.appendChild(child);
}

function parentNode (node) {
  return node.parentNode
}

function nextSibling (node) {
  return node.nextSibling
}

function tagName (node) {
  return node.tagName
}

function setTextContent (node, text) {
  node.textContent = text;
}

function setStyleScope (node, scopeId) {
  node.setAttribute(scopeId, '');
}


var nodeOps = Object.freeze({
	createElement: createElement$1,
	createElementNS: createElementNS,
	createTextNode: createTextNode,
	createComment: createComment,
	insertBefore: insertBefore,
	removeChild: removeChild,
	appendChild: appendChild,
	parentNode: parentNode,
	nextSibling: nextSibling,
	tagName: tagName,
	setTextContent: setTextContent,
	setStyleScope: setStyleScope
});

/*  */

var ref = {
  create: function create (_, vnode) {
    registerRef(vnode);
  },
  update: function update (oldVnode, vnode) {
    if (oldVnode.data.ref !== vnode.data.ref) {
      registerRef(oldVnode, true);
      registerRef(vnode);
    }
  },
  destroy: function destroy (vnode) {
    registerRef(vnode, true);
  }
}

function registerRef (vnode, isRemoval) {
  var key = vnode.data.ref;
  if (!isDef(key)) { return }

  var vm = vnode.context;
  var ref = vnode.componentInstance || vnode.elm;
  var refs = vm.$refs;
  if (isRemoval) {
    if (Array.isArray(refs[key])) {
      remove(refs[key], ref);
    } else if (refs[key] === ref) {
      refs[key] = undefined;
    }
  } else {
    if (vnode.data.refInFor) {
      if (!Array.isArray(refs[key])) {
        refs[key] = [ref];
      } else if (refs[key].indexOf(ref) < 0) {
        // $flow-disable-line
        refs[key].push(ref);
      }
    } else {
      refs[key] = ref;
    }
  }
}

/**
 * Virtual DOM patching algorithm based on Snabbdom by
 * Simon Friis Vindum (@paldepind)
 * Licensed under the MIT License
 * https://github.com/paldepind/snabbdom/blob/master/LICENSE
 *
 * modified by Evan You (@yyx990803)
 *
 * Not type-checking this because this file is perf-critical and the cost
 * of making flow understand it is not worth it.
 */

var emptyNode = new VNode('', {}, []);

var hooks = ['create', 'activate', 'update', 'remove', 'destroy'];

function sameVnode (a, b) {
  return (
    a.key === b.key && (
      (
        a.tag === b.tag &&
        a.isComment === b.isComment &&
        isDef(a.data) === isDef(b.data) &&
        sameInputType(a, b)
      ) || (
        isTrue(a.isAsyncPlaceholder) &&
        a.asyncFactory === b.asyncFactory &&
        isUndef(b.asyncFactory.error)
      )
    )
  )
}

function sameInputType (a, b) {
  if (a.tag !== 'input') { return true }
  var i;
  var typeA = isDef(i = a.data) && isDef(i = i.attrs) && i.type;
  var typeB = isDef(i = b.data) && isDef(i = i.attrs) && i.type;
  return typeA === typeB || isTextInputType(typeA) && isTextInputType(typeB)
}

function createKeyToOldIdx (children, beginIdx, endIdx) {
  var i, key;
  var map = {};
  for (i = beginIdx; i <= endIdx; ++i) {
    key = children[i].key;
    if (isDef(key)) { map[key] = i; }
  }
  return map
}

function createPatchFunction (backend) {
  var i, j;
  var cbs = {};

  var modules = backend.modules;
  var nodeOps = backend.nodeOps;

  for (i = 0; i < hooks.length; ++i) {
    cbs[hooks[i]] = [];
    for (j = 0; j < modules.length; ++j) {
      if (isDef(modules[j][hooks[i]])) {
        cbs[hooks[i]].push(modules[j][hooks[i]]);
      }
    }
  }

  function emptyNodeAt (elm) {
    return new VNode(nodeOps.tagName(elm).toLowerCase(), {}, [], undefined, elm)
  }

  function createRmCb (childElm, listeners) {
    function remove () {
      if (--remove.listeners === 0) {
        removeNode(childElm);
      }
    }
    remove.listeners = listeners;
    return remove
  }

  function removeNode (el) {
    var parent = nodeOps.parentNode(el);
    // element may have already been removed due to v-html / v-text
    if (isDef(parent)) {
      nodeOps.removeChild(parent, el);
    }
  }

  function isUnknownElement$$1 (vnode, inVPre) {
    return (
      !inVPre &&
      !vnode.ns &&
      !(
        config.ignoredElements.length &&
        config.ignoredElements.some(function (ignore) {
          return isRegExp(ignore)
            ? ignore.test(vnode.tag)
            : ignore === vnode.tag
        })
      ) &&
      config.isUnknownElement(vnode.tag)
    )
  }

  var creatingElmInVPre = 0;

  function createElm (
    vnode,
    insertedVnodeQueue,
    parentElm,
    refElm,
    nested,
    ownerArray,
    index
  ) {
    if (isDef(vnode.elm) && isDef(ownerArray)) {
      // This vnode was used in a previous render!
      // now it's used as a new node, overwriting its elm would cause
      // potential patch errors down the road when it's used as an insertion
      // reference node. Instead, we clone the node on-demand before creating
      // associated DOM element for it.
      vnode = ownerArray[index] = cloneVNode(vnode);
    }

    vnode.isRootInsert = !nested; // for transition enter check
    if (createComponent(vnode, insertedVnodeQueue, parentElm, refElm)) {
      return
    }

    var data = vnode.data;
    var children = vnode.children;
    var tag = vnode.tag;
    if (isDef(tag)) {
      if (process.env.NODE_ENV !== 'production') {
        if (data && data.pre) {
          creatingElmInVPre++;
        }
        if (isUnknownElement$$1(vnode, creatingElmInVPre)) {
          warn(
            'Unknown custom element: <' + tag + '> - did you ' +
            'register the component correctly? For recursive components, ' +
            'make sure to provide the "name" option.',
            vnode.context
          );
        }
      }

      vnode.elm = vnode.ns
        ? nodeOps.createElementNS(vnode.ns, tag)
        : nodeOps.createElement(tag, vnode);
      setScope(vnode);

      /* istanbul ignore if */
      {
        createChildren(vnode, children, insertedVnodeQueue);
        if (isDef(data)) {
          invokeCreateHooks(vnode, insertedVnodeQueue);
        }
        insert(parentElm, vnode.elm, refElm);
      }

      if (process.env.NODE_ENV !== 'production' && data && data.pre) {
        creatingElmInVPre--;
      }
    } else if (isTrue(vnode.isComment)) {
      vnode.elm = nodeOps.createComment(vnode.text);
      insert(parentElm, vnode.elm, refElm);
    } else {
      vnode.elm = nodeOps.createTextNode(vnode.text);
      insert(parentElm, vnode.elm, refElm);
    }
  }

  function createComponent (vnode, insertedVnodeQueue, parentElm, refElm) {
    var i = vnode.data;
    if (isDef(i)) {
      var isReactivated = isDef(vnode.componentInstance) && i.keepAlive;
      if (isDef(i = i.hook) && isDef(i = i.init)) {
        i(vnode, false /* hydrating */, parentElm, refElm);
      }
      // after calling the init hook, if the vnode is a child component
      // it should've created a child instance and mounted it. the child
      // component also has set the placeholder vnode's elm.
      // in that case we can just return the element and be done.
      if (isDef(vnode.componentInstance)) {
        initComponent(vnode, insertedVnodeQueue);
        if (isTrue(isReactivated)) {
          reactivateComponent(vnode, insertedVnodeQueue, parentElm, refElm);
        }
        return true
      }
    }
  }

  function initComponent (vnode, insertedVnodeQueue) {
    if (isDef(vnode.data.pendingInsert)) {
      insertedVnodeQueue.push.apply(insertedVnodeQueue, vnode.data.pendingInsert);
      vnode.data.pendingInsert = null;
    }
    vnode.elm = vnode.componentInstance.$el;
    if (isPatchable(vnode)) {
      invokeCreateHooks(vnode, insertedVnodeQueue);
      setScope(vnode);
    } else {
      // empty component root.
      // skip all element-related modules except for ref (#3455)
      registerRef(vnode);
      // make sure to invoke the insert hook
      insertedVnodeQueue.push(vnode);
    }
  }

  function reactivateComponent (vnode, insertedVnodeQueue, parentElm, refElm) {
    var i;
    // hack for #4339: a reactivated component with inner transition
    // does not trigger because the inner node's created hooks are not called
    // again. It's not ideal to involve module-specific logic in here but
    // there doesn't seem to be a better way to do it.
    var innerNode = vnode;
    while (innerNode.componentInstance) {
      innerNode = innerNode.componentInstance._vnode;
      if (isDef(i = innerNode.data) && isDef(i = i.transition)) {
        for (i = 0; i < cbs.activate.length; ++i) {
          cbs.activate[i](emptyNode, innerNode);
        }
        insertedVnodeQueue.push(innerNode);
        break
      }
    }
    // unlike a newly created component,
    // a reactivated keep-alive component doesn't insert itself
    insert(parentElm, vnode.elm, refElm);
  }

  function insert (parent, elm, ref$$1) {
    if (isDef(parent)) {
      if (isDef(ref$$1)) {
        if (ref$$1.parentNode === parent) {
          nodeOps.insertBefore(parent, elm, ref$$1);
        }
      } else {
        nodeOps.appendChild(parent, elm);
      }
    }
  }

  function createChildren (vnode, children, insertedVnodeQueue) {
    if (Array.isArray(children)) {
      if (process.env.NODE_ENV !== 'production') {
        checkDuplicateKeys(children);
      }
      for (var i = 0; i < children.length; ++i) {
        createElm(children[i], insertedVnodeQueue, vnode.elm, null, true, children, i);
      }
    } else if (isPrimitive(vnode.text)) {
      nodeOps.appendChild(vnode.elm, nodeOps.createTextNode(String(vnode.text)));
    }
  }

  function isPatchable (vnode) {
    while (vnode.componentInstance) {
      vnode = vnode.componentInstance._vnode;
    }
    return isDef(vnode.tag)
  }

  function invokeCreateHooks (vnode, insertedVnodeQueue) {
    for (var i$1 = 0; i$1 < cbs.create.length; ++i$1) {
      cbs.create[i$1](emptyNode, vnode);
    }
    i = vnode.data.hook; // Reuse variable
    if (isDef(i)) {
      if (isDef(i.create)) { i.create(emptyNode, vnode); }
      if (isDef(i.insert)) { insertedVnodeQueue.push(vnode); }
    }
  }

  // set scope id attribute for scoped CSS.
  // this is implemented as a special case to avoid the overhead
  // of going through the normal attribute patching process.
  function setScope (vnode) {
    var i;
    if (isDef(i = vnode.fnScopeId)) {
      nodeOps.setStyleScope(vnode.elm, i);
    } else {
      var ancestor = vnode;
      while (ancestor) {
        if (isDef(i = ancestor.context) && isDef(i = i.$options._scopeId)) {
          nodeOps.setStyleScope(vnode.elm, i);
        }
        ancestor = ancestor.parent;
      }
    }
    // for slot content they should also get the scopeId from the host instance.
    if (isDef(i = activeInstance) &&
      i !== vnode.context &&
      i !== vnode.fnContext &&
      isDef(i = i.$options._scopeId)
    ) {
      nodeOps.setStyleScope(vnode.elm, i);
    }
  }

  function addVnodes (parentElm, refElm, vnodes, startIdx, endIdx, insertedVnodeQueue) {
    for (; startIdx <= endIdx; ++startIdx) {
      createElm(vnodes[startIdx], insertedVnodeQueue, parentElm, refElm, false, vnodes, startIdx);
    }
  }

  function invokeDestroyHook (vnode) {
    var i, j;
    var data = vnode.data;
    if (isDef(data)) {
      if (isDef(i = data.hook) && isDef(i = i.destroy)) { i(vnode); }
      for (i = 0; i < cbs.destroy.length; ++i) { cbs.destroy[i](vnode); }
    }
    if (isDef(i = vnode.children)) {
      for (j = 0; j < vnode.children.length; ++j) {
        invokeDestroyHook(vnode.children[j]);
      }
    }
  }

  function removeVnodes (parentElm, vnodes, startIdx, endIdx) {
    for (; startIdx <= endIdx; ++startIdx) {
      var ch = vnodes[startIdx];
      if (isDef(ch)) {
        if (isDef(ch.tag)) {
          removeAndInvokeRemoveHook(ch);
          invokeDestroyHook(ch);
        } else { // Text node
          removeNode(ch.elm);
        }
      }
    }
  }

  function removeAndInvokeRemoveHook (vnode, rm) {
    if (isDef(rm) || isDef(vnode.data)) {
      var i;
      var listeners = cbs.remove.length + 1;
      if (isDef(rm)) {
        // we have a recursively passed down rm callback
        // increase the listeners count
        rm.listeners += listeners;
      } else {
        // directly removing
        rm = createRmCb(vnode.elm, listeners);
      }
      // recursively invoke hooks on child component root node
      if (isDef(i = vnode.componentInstance) && isDef(i = i._vnode) && isDef(i.data)) {
        removeAndInvokeRemoveHook(i, rm);
      }
      for (i = 0; i < cbs.remove.length; ++i) {
        cbs.remove[i](vnode, rm);
      }
      if (isDef(i = vnode.data.hook) && isDef(i = i.remove)) {
        i(vnode, rm);
      } else {
        rm();
      }
    } else {
      removeNode(vnode.elm);
    }
  }

  function updateChildren (parentElm, oldCh, newCh, insertedVnodeQueue, removeOnly) {
    var oldStartIdx = 0;
    var newStartIdx = 0;
    var oldEndIdx = oldCh.length - 1;
    var oldStartVnode = oldCh[0];
    var oldEndVnode = oldCh[oldEndIdx];
    var newEndIdx = newCh.length - 1;
    var newStartVnode = newCh[0];
    var newEndVnode = newCh[newEndIdx];
    var oldKeyToIdx, idxInOld, vnodeToMove, refElm;

    // removeOnly is a special flag used only by <transition-group>
    // to ensure removed elements stay in correct relative positions
    // during leaving transitions
    var canMove = !removeOnly;

    if (process.env.NODE_ENV !== 'production') {
      checkDuplicateKeys(newCh);
    }

    while (oldStartIdx <= oldEndIdx && newStartIdx <= newEndIdx) {
      if (isUndef(oldStartVnode)) {
        oldStartVnode = oldCh[++oldStartIdx]; // Vnode has been moved left
      } else if (isUndef(oldEndVnode)) {
        oldEndVnode = oldCh[--oldEndIdx];
      } else if (sameVnode(oldStartVnode, newStartVnode)) {
        patchVnode(oldStartVnode, newStartVnode, insertedVnodeQueue);
        oldStartVnode = oldCh[++oldStartIdx];
        newStartVnode = newCh[++newStartIdx];
      } else if (sameVnode(oldEndVnode, newEndVnode)) {
        patchVnode(oldEndVnode, newEndVnode, insertedVnodeQueue);
        oldEndVnode = oldCh[--oldEndIdx];
        newEndVnode = newCh[--newEndIdx];
      } else if (sameVnode(oldStartVnode, newEndVnode)) { // Vnode moved right
        patchVnode(oldStartVnode, newEndVnode, insertedVnodeQueue);
        canMove && nodeOps.insertBefore(parentElm, oldStartVnode.elm, nodeOps.nextSibling(oldEndVnode.elm));
        oldStartVnode = oldCh[++oldStartIdx];
        newEndVnode = newCh[--newEndIdx];
      } else if (sameVnode(oldEndVnode, newStartVnode)) { // Vnode moved left
        patchVnode(oldEndVnode, newStartVnode, insertedVnodeQueue);
        canMove && nodeOps.insertBefore(parentElm, oldEndVnode.elm, oldStartVnode.elm);
        oldEndVnode = oldCh[--oldEndIdx];
        newStartVnode = newCh[++newStartIdx];
      } else {
        if (isUndef(oldKeyToIdx)) { oldKeyToIdx = createKeyToOldIdx(oldCh, oldStartIdx, oldEndIdx); }
        idxInOld = isDef(newStartVnode.key)
          ? oldKeyToIdx[newStartVnode.key]
          : findIdxInOld(newStartVnode, oldCh, oldStartIdx, oldEndIdx);
        if (isUndef(idxInOld)) { // New element
          createElm(newStartVnode, insertedVnodeQueue, parentElm, oldStartVnode.elm, false, newCh, newStartIdx);
        } else {
          vnodeToMove = oldCh[idxInOld];
          if (sameVnode(vnodeToMove, newStartVnode)) {
            patchVnode(vnodeToMove, newStartVnode, insertedVnodeQueue);
            oldCh[idxInOld] = undefined;
            canMove && nodeOps.insertBefore(parentElm, vnodeToMove.elm, oldStartVnode.elm);
          } else {
            // same key but different element. treat as new element
            createElm(newStartVnode, insertedVnodeQueue, parentElm, oldStartVnode.elm, false, newCh, newStartIdx);
          }
        }
        newStartVnode = newCh[++newStartIdx];
      }
    }
    if (oldStartIdx > oldEndIdx) {
      refElm = isUndef(newCh[newEndIdx + 1]) ? null : newCh[newEndIdx + 1].elm;
      addVnodes(parentElm, refElm, newCh, newStartIdx, newEndIdx, insertedVnodeQueue);
    } else if (newStartIdx > newEndIdx) {
      removeVnodes(parentElm, oldCh, oldStartIdx, oldEndIdx);
    }
  }

  function checkDuplicateKeys (children) {
    var seenKeys = {};
    for (var i = 0; i < children.length; i++) {
      var vnode = children[i];
      var key = vnode.key;
      if (isDef(key)) {
        if (seenKeys[key]) {
          warn(
            ("Duplicate keys detected: '" + key + "'. This may cause an update error."),
            vnode.context
          );
        } else {
          seenKeys[key] = true;
        }
      }
    }
  }

  function findIdxInOld (node, oldCh, start, end) {
    for (var i = start; i < end; i++) {
      var c = oldCh[i];
      if (isDef(c) && sameVnode(node, c)) { return i }
    }
  }

  function patchVnode (oldVnode, vnode, insertedVnodeQueue, removeOnly) {
    if (oldVnode === vnode) {
      return
    }

    var elm = vnode.elm = oldVnode.elm;

    if (isTrue(oldVnode.isAsyncPlaceholder)) {
      if (isDef(vnode.asyncFactory.resolved)) {
        hydrate(oldVnode.elm, vnode, insertedVnodeQueue);
      } else {
        vnode.isAsyncPlaceholder = true;
      }
      return
    }

    // reuse element for static trees.
    // note we only do this if the vnode is cloned -
    // if the new node is not cloned it means the render functions have been
    // reset by the hot-reload-api and we need to do a proper re-render.
    if (isTrue(vnode.isStatic) &&
      isTrue(oldVnode.isStatic) &&
      vnode.key === oldVnode.key &&
      (isTrue(vnode.isCloned) || isTrue(vnode.isOnce))
    ) {
      vnode.componentInstance = oldVnode.componentInstance;
      return
    }

    var i;
    var data = vnode.data;
    if (isDef(data) && isDef(i = data.hook) && isDef(i = i.prepatch)) {
      i(oldVnode, vnode);
    }

    var oldCh = oldVnode.children;
    var ch = vnode.children;
    if (isDef(data) && isPatchable(vnode)) {
      for (i = 0; i < cbs.update.length; ++i) { cbs.update[i](oldVnode, vnode); }
      if (isDef(i = data.hook) && isDef(i = i.update)) { i(oldVnode, vnode); }
    }
    if (isUndef(vnode.text)) {
      if (isDef(oldCh) && isDef(ch)) {
        if (oldCh !== ch) { updateChildren(elm, oldCh, ch, insertedVnodeQueue, removeOnly); }
      } else if (isDef(ch)) {
        if (isDef(oldVnode.text)) { nodeOps.setTextContent(elm, ''); }
        addVnodes(elm, null, ch, 0, ch.length - 1, insertedVnodeQueue);
      } else if (isDef(oldCh)) {
        removeVnodes(elm, oldCh, 0, oldCh.length - 1);
      } else if (isDef(oldVnode.text)) {
        nodeOps.setTextContent(elm, '');
      }
    } else if (oldVnode.text !== vnode.text) {
      nodeOps.setTextContent(elm, vnode.text);
    }
    if (isDef(data)) {
      if (isDef(i = data.hook) && isDef(i = i.postpatch)) { i(oldVnode, vnode); }
    }
  }

  function invokeInsertHook (vnode, queue, initial) {
    // delay insert hooks for component root nodes, invoke them after the
    // element is really inserted
    if (isTrue(initial) && isDef(vnode.parent)) {
      vnode.parent.data.pendingInsert = queue;
    } else {
      for (var i = 0; i < queue.length; ++i) {
        queue[i].data.hook.insert(queue[i]);
      }
    }
  }

  var hydrationBailed = false;
  // list of modules that can skip create hook during hydration because they
  // are already rendered on the client or has no need for initialization
  // Note: style is excluded because it relies on initial clone for future
  // deep updates (#7063).
  var isRenderedModule = makeMap('attrs,class,staticClass,staticStyle,key');

  // Note: this is a browser-only function so we can assume elms are DOM nodes.
  function hydrate (elm, vnode, insertedVnodeQueue, inVPre) {
    var i;
    var tag = vnode.tag;
    var data = vnode.data;
    var children = vnode.children;
    inVPre = inVPre || (data && data.pre);
    vnode.elm = elm;

    if (isTrue(vnode.isComment) && isDef(vnode.asyncFactory)) {
      vnode.isAsyncPlaceholder = true;
      return true
    }
    // assert node match
    if (process.env.NODE_ENV !== 'production') {
      if (!assertNodeMatch(elm, vnode, inVPre)) {
        return false
      }
    }
    if (isDef(data)) {
      if (isDef(i = data.hook) && isDef(i = i.init)) { i(vnode, true /* hydrating */); }
      if (isDef(i = vnode.componentInstance)) {
        // child component. it should have hydrated its own tree.
        initComponent(vnode, insertedVnodeQueue);
        return true
      }
    }
    if (isDef(tag)) {
      if (isDef(children)) {
        // empty element, allow client to pick up and populate children
        if (!elm.hasChildNodes()) {
          createChildren(vnode, children, insertedVnodeQueue);
        } else {
          // v-html and domProps: innerHTML
          if (isDef(i = data) && isDef(i = i.domProps) && isDef(i = i.innerHTML)) {
            if (i !== elm.innerHTML) {
              /* istanbul ignore if */
              if (process.env.NODE_ENV !== 'production' &&
                typeof console !== 'undefined' &&
                !hydrationBailed
              ) {
                hydrationBailed = true;
                console.warn('Parent: ', elm);
                console.warn('server innerHTML: ', i);
                console.warn('client innerHTML: ', elm.innerHTML);
              }
              return false
            }
          } else {
            // iterate and compare children lists
            var childrenMatch = true;
            var childNode = elm.firstChild;
            for (var i$1 = 0; i$1 < children.length; i$1++) {
              if (!childNode || !hydrate(childNode, children[i$1], insertedVnodeQueue, inVPre)) {
                childrenMatch = false;
                break
              }
              childNode = childNode.nextSibling;
            }
            // if childNode is not null, it means the actual childNodes list is
            // longer than the virtual children list.
            if (!childrenMatch || childNode) {
              /* istanbul ignore if */
              if (process.env.NODE_ENV !== 'production' &&
                typeof console !== 'undefined' &&
                !hydrationBailed
              ) {
                hydrationBailed = true;
                console.warn('Parent: ', elm);
                console.warn('Mismatching childNodes vs. VNodes: ', elm.childNodes, children);
              }
              return false
            }
          }
        }
      }
      if (isDef(data)) {
        var fullInvoke = false;
        for (var key in data) {
          if (!isRenderedModule(key)) {
            fullInvoke = true;
            invokeCreateHooks(vnode, insertedVnodeQueue);
            break
          }
        }
        if (!fullInvoke && data['class']) {
          // ensure collecting deps for deep class bindings for future updates
          traverse(data['class']);
        }
      }
    } else if (elm.data !== vnode.text) {
      elm.data = vnode.text;
    }
    return true
  }

  function assertNodeMatch (node, vnode, inVPre) {
    if (isDef(vnode.tag)) {
      return vnode.tag.indexOf('vue-component') === 0 || (
        !isUnknownElement$$1(vnode, inVPre) &&
        vnode.tag.toLowerCase() === (node.tagName && node.tagName.toLowerCase())
      )
    } else {
      return node.nodeType === (vnode.isComment ? 8 : 3)
    }
  }

  return function patch (oldVnode, vnode, hydrating, removeOnly, parentElm, refElm) {
    if (isUndef(vnode)) {
      if (isDef(oldVnode)) { invokeDestroyHook(oldVnode); }
      return
    }

    var isInitialPatch = false;
    var insertedVnodeQueue = [];

    if (isUndef(oldVnode)) {
      // empty mount (likely as component), create new root element
      isInitialPatch = true;
      createElm(vnode, insertedVnodeQueue, parentElm, refElm);
    } else {
      var isRealElement = isDef(oldVnode.nodeType);
      if (!isRealElement && sameVnode(oldVnode, vnode)) {
        // patch existing root node
        patchVnode(oldVnode, vnode, insertedVnodeQueue, removeOnly);
      } else {
        if (isRealElement) {
          // mounting to a real element
          // check if this is server-rendered content and if we can perform
          // a successful hydration.
          if (oldVnode.nodeType === 1 && oldVnode.hasAttribute(SSR_ATTR)) {
            oldVnode.removeAttribute(SSR_ATTR);
            hydrating = true;
          }
          if (isTrue(hydrating)) {
            if (hydrate(oldVnode, vnode, insertedVnodeQueue)) {
              invokeInsertHook(vnode, insertedVnodeQueue, true);
              return oldVnode
            } else if (process.env.NODE_ENV !== 'production') {
              warn(
                'The client-side rendered virtual DOM tree is not matching ' +
                'server-rendered content. This is likely caused by incorrect ' +
                'HTML markup, for example nesting block-level elements inside ' +
                '<p>, or missing <tbody>. Bailing hydration and performing ' +
                'full client-side render.'
              );
            }
          }
          // either not server-rendered, or hydration failed.
          // create an empty node and replace it
          oldVnode = emptyNodeAt(oldVnode);
        }

        // replacing existing element
        var oldElm = oldVnode.elm;
        var parentElm$1 = nodeOps.parentNode(oldElm);

        // create new node
        createElm(
          vnode,
          insertedVnodeQueue,
          // extremely rare edge case: do not insert if old element is in a
          // leaving transition. Only happens when combining transition +
          // keep-alive + HOCs. (#4590)
          oldElm._leaveCb ? null : parentElm$1,
          nodeOps.nextSibling(oldElm)
        );

        // update parent placeholder node element, recursively
        if (isDef(vnode.parent)) {
          var ancestor = vnode.parent;
          var patchable = isPatchable(vnode);
          while (ancestor) {
            for (var i = 0; i < cbs.destroy.length; ++i) {
              cbs.destroy[i](ancestor);
            }
            ancestor.elm = vnode.elm;
            if (patchable) {
              for (var i$1 = 0; i$1 < cbs.create.length; ++i$1) {
                cbs.create[i$1](emptyNode, ancestor);
              }
              // #6513
              // invoke insert hooks that may have been merged by create hooks.
              // e.g. for directives that uses the "inserted" hook.
              var insert = ancestor.data.hook.insert;
              if (insert.merged) {
                // start at index 1 to avoid re-invoking component mounted hook
                for (var i$2 = 1; i$2 < insert.fns.length; i$2++) {
                  insert.fns[i$2]();
                }
              }
            } else {
              registerRef(ancestor);
            }
            ancestor = ancestor.parent;
          }
        }

        // destroy old node
        if (isDef(parentElm$1)) {
          removeVnodes(parentElm$1, [oldVnode], 0, 0);
        } else if (isDef(oldVnode.tag)) {
          invokeDestroyHook(oldVnode);
        }
      }
    }

    invokeInsertHook(vnode, insertedVnodeQueue, isInitialPatch);
    return vnode.elm
  }
}

/*  */

var directives = {
  create: updateDirectives,
  update: updateDirectives,
  destroy: function unbindDirectives (vnode) {
    updateDirectives(vnode, emptyNode);
  }
}

function updateDirectives (oldVnode, vnode) {
  if (oldVnode.data.directives || vnode.data.directives) {
    _update(oldVnode, vnode);
  }
}

function _update (oldVnode, vnode) {
  var isCreate = oldVnode === emptyNode;
  var isDestroy = vnode === emptyNode;
  var oldDirs = normalizeDirectives$1(oldVnode.data.directives, oldVnode.context);
  var newDirs = normalizeDirectives$1(vnode.data.directives, vnode.context);

  var dirsWithInsert = [];
  var dirsWithPostpatch = [];

  var key, oldDir, dir;
  for (key in newDirs) {
    oldDir = oldDirs[key];
    dir = newDirs[key];
    if (!oldDir) {
      // new directive, bind
      callHook$1(dir, 'bind', vnode, oldVnode);
      if (dir.def && dir.def.inserted) {
        dirsWithInsert.push(dir);
      }
    } else {
      // existing directive, update
      dir.oldValue = oldDir.value;
      callHook$1(dir, 'update', vnode, oldVnode);
      if (dir.def && dir.def.componentUpdated) {
        dirsWithPostpatch.push(dir);
      }
    }
  }

  if (dirsWithInsert.length) {
    var callInsert = function () {
      for (var i = 0; i < dirsWithInsert.length; i++) {
        callHook$1(dirsWithInsert[i], 'inserted', vnode, oldVnode);
      }
    };
    if (isCreate) {
      mergeVNodeHook(vnode, 'insert', callInsert);
    } else {
      callInsert();
    }
  }

  if (dirsWithPostpatch.length) {
    mergeVNodeHook(vnode, 'postpatch', function () {
      for (var i = 0; i < dirsWithPostpatch.length; i++) {
        callHook$1(dirsWithPostpatch[i], 'componentUpdated', vnode, oldVnode);
      }
    });
  }

  if (!isCreate) {
    for (key in oldDirs) {
      if (!newDirs[key]) {
        // no longer present, unbind
        callHook$1(oldDirs[key], 'unbind', oldVnode, oldVnode, isDestroy);
      }
    }
  }
}

var emptyModifiers = Object.create(null);

function normalizeDirectives$1 (
  dirs,
  vm
) {
  var res = Object.create(null);
  if (!dirs) {
    // $flow-disable-line
    return res
  }
  var i, dir;
  for (i = 0; i < dirs.length; i++) {
    dir = dirs[i];
    if (!dir.modifiers) {
      // $flow-disable-line
      dir.modifiers = emptyModifiers;
    }
    res[getRawDirName(dir)] = dir;
    dir.def = resolveAsset(vm.$options, 'directives', dir.name, true);
  }
  // $flow-disable-line
  return res
}

function getRawDirName (dir) {
  return dir.rawName || ((dir.name) + "." + (Object.keys(dir.modifiers || {}).join('.')))
}

function callHook$1 (dir, hook, vnode, oldVnode, isDestroy) {
  var fn = dir.def && dir.def[hook];
  if (fn) {
    try {
      fn(vnode.elm, dir, vnode, oldVnode, isDestroy);
    } catch (e) {
      handleError(e, vnode.context, ("directive " + (dir.name) + " " + hook + " hook"));
    }
  }
}

var baseModules = [
  ref,
  directives
]

/*  */

function updateAttrs (oldVnode, vnode) {
  var opts = vnode.componentOptions;
  if (isDef(opts) && opts.Ctor.options.inheritAttrs === false) {
    return
  }
  if (isUndef(oldVnode.data.attrs) && isUndef(vnode.data.attrs)) {
    return
  }
  var key, cur, old;
  var elm = vnode.elm;
  var oldAttrs = oldVnode.data.attrs || {};
  var attrs = vnode.data.attrs || {};
  // clone observed objects, as the user probably wants to mutate it
  if (isDef(attrs.__ob__)) {
    attrs = vnode.data.attrs = extend({}, attrs);
  }

  for (key in attrs) {
    cur = attrs[key];
    old = oldAttrs[key];
    if (old !== cur) {
      setAttr(elm, key, cur);
    }
  }
  // #4391: in IE9, setting type can reset value for input[type=radio]
  // #6666: IE/Edge forces progress value down to 1 before setting a max
  /* istanbul ignore if */
  if ((isIE || isEdge) && attrs.value !== oldAttrs.value) {
    setAttr(elm, 'value', attrs.value);
  }
  for (key in oldAttrs) {
    if (isUndef(attrs[key])) {
      if (isXlink(key)) {
        elm.removeAttributeNS(xlinkNS, getXlinkProp(key));
      } else if (!isEnumeratedAttr(key)) {
        elm.removeAttribute(key);
      }
    }
  }
}

function setAttr (el, key, value) {
  if (el.tagName.indexOf('-') > -1) {
    baseSetAttr(el, key, value);
  } else if (isBooleanAttr(key)) {
    // set attribute for blank value
    // e.g. <option disabled>Select one</option>
    if (isFalsyAttrValue(value)) {
      el.removeAttribute(key);
    } else {
      // technically allowfullscreen is a boolean attribute for <iframe>,
      // but Flash expects a value of "true" when used on <embed> tag
      value = key === 'allowfullscreen' && el.tagName === 'EMBED'
        ? 'true'
        : key;
      el.setAttribute(key, value);
    }
  } else if (isEnumeratedAttr(key)) {
    el.setAttribute(key, isFalsyAttrValue(value) || value === 'false' ? 'false' : 'true');
  } else if (isXlink(key)) {
    if (isFalsyAttrValue(value)) {
      el.removeAttributeNS(xlinkNS, getXlinkProp(key));
    } else {
      el.setAttributeNS(xlinkNS, key, value);
    }
  } else {
    baseSetAttr(el, key, value);
  }
}

function baseSetAttr (el, key, value) {
  if (isFalsyAttrValue(value)) {
    el.removeAttribute(key);
  } else {
    // #7138: IE10 & 11 fires input event when setting placeholder on
    // <textarea>... block the first input event and remove the blocker
    // immediately.
    /* istanbul ignore if */
    if (
      isIE && !isIE9 &&
      el.tagName === 'TEXTAREA' &&
      key === 'placeholder' && !el.__ieph
    ) {
      var blocker = function (e) {
        e.stopImmediatePropagation();
        el.removeEventListener('input', blocker);
      };
      el.addEventListener('input', blocker);
      // $flow-disable-line
      el.__ieph = true; /* IE placeholder patched */
    }
    el.setAttribute(key, value);
  }
}

var attrs = {
  create: updateAttrs,
  update: updateAttrs
}

/*  */

function updateClass (oldVnode, vnode) {
  var el = vnode.elm;
  var data = vnode.data;
  var oldData = oldVnode.data;
  if (
    isUndef(data.staticClass) &&
    isUndef(data.class) && (
      isUndef(oldData) || (
        isUndef(oldData.staticClass) &&
        isUndef(oldData.class)
      )
    )
  ) {
    return
  }

  var cls = genClassForVnode(vnode);

  // handle transition classes
  var transitionClass = el._transitionClasses;
  if (isDef(transitionClass)) {
    cls = concat(cls, stringifyClass(transitionClass));
  }

  // set the class
  if (cls !== el._prevClass) {
    el.setAttribute('class', cls);
    el._prevClass = cls;
  }
}

var klass = {
  create: updateClass,
  update: updateClass
}

/*  */

/*  */









// add a raw attr (use this in preTransforms)








// note: this only removes the attr from the Array (attrsList) so that it
// doesn't get processed by processAttrs.
// By default it does NOT remove it from the map (attrsMap) because the map is
// needed during codegen.

/*  */

/**
 * Cross-platform code generation for component v-model
 */


/**
 * Cross-platform codegen helper for generating v-model value assignment code.
 */

/*  */

// in some cases, the event used has to be determined at runtime
// so we used some reserved tokens during compile.
var RANGE_TOKEN = '__r';
var CHECKBOX_RADIO_TOKEN = '__c';

/*  */

// normalize v-model event tokens that can only be determined at runtime.
// it's important to place the event as the first in the array because
// the whole point is ensuring the v-model callback gets called before
// user-attached handlers.
function normalizeEvents (on) {
  /* istanbul ignore if */
  if (isDef(on[RANGE_TOKEN])) {
    // IE input[type=range] only supports `change` event
    var event = isIE ? 'change' : 'input';
    on[event] = [].concat(on[RANGE_TOKEN], on[event] || []);
    delete on[RANGE_TOKEN];
  }
  // This was originally intended to fix #4521 but no longer necessary
  // after 2.5. Keeping it for backwards compat with generated code from < 2.4
  /* istanbul ignore if */
  if (isDef(on[CHECKBOX_RADIO_TOKEN])) {
    on.change = [].concat(on[CHECKBOX_RADIO_TOKEN], on.change || []);
    delete on[CHECKBOX_RADIO_TOKEN];
  }
}

var target$1;

function createOnceHandler (handler, event, capture) {
  var _target = target$1; // save current target element in closure
  return function onceHandler () {
    var res = handler.apply(null, arguments);
    if (res !== null) {
      remove$2(event, onceHandler, capture, _target);
    }
  }
}

function add$1 (
  event,
  handler,
  once$$1,
  capture,
  passive
) {
  handler = withMacroTask(handler);
  if (once$$1) { handler = createOnceHandler(handler, event, capture); }
  target$1.addEventListener(
    event,
    handler,
    supportsPassive
      ? { capture: capture, passive: passive }
      : capture
  );
}

function remove$2 (
  event,
  handler,
  capture,
  _target
) {
  (_target || target$1).removeEventListener(
    event,
    handler._withTask || handler,
    capture
  );
}

function updateDOMListeners (oldVnode, vnode) {
  if (isUndef(oldVnode.data.on) && isUndef(vnode.data.on)) {
    return
  }
  var on = vnode.data.on || {};
  var oldOn = oldVnode.data.on || {};
  target$1 = vnode.elm;
  normalizeEvents(on);
  updateListeners(on, oldOn, add$1, remove$2, vnode.context);
  target$1 = undefined;
}

var events = {
  create: updateDOMListeners,
  update: updateDOMListeners
}

/*  */

function updateDOMProps (oldVnode, vnode) {
  if (isUndef(oldVnode.data.domProps) && isUndef(vnode.data.domProps)) {
    return
  }
  var key, cur;
  var elm = vnode.elm;
  var oldProps = oldVnode.data.domProps || {};
  var props = vnode.data.domProps || {};
  // clone observed objects, as the user probably wants to mutate it
  if (isDef(props.__ob__)) {
    props = vnode.data.domProps = extend({}, props);
  }

  for (key in oldProps) {
    if (isUndef(props[key])) {
      elm[key] = '';
    }
  }
  for (key in props) {
    cur = props[key];
    // ignore children if the node has textContent or innerHTML,
    // as these will throw away existing DOM nodes and cause removal errors
    // on subsequent patches (#3360)
    if (key === 'textContent' || key === 'innerHTML') {
      if (vnode.children) { vnode.children.length = 0; }
      if (cur === oldProps[key]) { continue }
      // #6601 work around Chrome version <= 55 bug where single textNode
      // replaced by innerHTML/textContent retains its parentNode property
      if (elm.childNodes.length === 1) {
        elm.removeChild(elm.childNodes[0]);
      }
    }

    if (key === 'value') {
      // store value as _value as well since
      // non-string values will be stringified
      elm._value = cur;
      // avoid resetting cursor position when value is the same
      var strCur = isUndef(cur) ? '' : String(cur);
      if (shouldUpdateValue(elm, strCur)) {
        elm.value = strCur;
      }
    } else {
      elm[key] = cur;
    }
  }
}

// check platforms/web/util/attrs.js acceptValue


function shouldUpdateValue (elm, checkVal) {
  return (!elm.composing && (
    elm.tagName === 'OPTION' ||
    isNotInFocusAndDirty(elm, checkVal) ||
    isDirtyWithModifiers(elm, checkVal)
  ))
}

function isNotInFocusAndDirty (elm, checkVal) {
  // return true when textbox (.number and .trim) loses focus and its value is
  // not equal to the updated value
  var notInFocus = true;
  // #6157
  // work around IE bug when accessing document.activeElement in an iframe
  try { notInFocus = document.activeElement !== elm; } catch (e) {}
  return notInFocus && elm.value !== checkVal
}

function isDirtyWithModifiers (elm, newVal) {
  var value = elm.value;
  var modifiers = elm._vModifiers; // injected by v-model runtime
  if (isDef(modifiers)) {
    if (modifiers.lazy) {
      // inputs with lazy should only be updated when not in focus
      return false
    }
    if (modifiers.number) {
      return toNumber(value) !== toNumber(newVal)
    }
    if (modifiers.trim) {
      return value.trim() !== newVal.trim()
    }
  }
  return value !== newVal
}

var domProps = {
  create: updateDOMProps,
  update: updateDOMProps
}

/*  */

var parseStyleText = cached(function (cssText) {
  var res = {};
  var listDelimiter = /;(?![^(]*\))/g;
  var propertyDelimiter = /:(.+)/;
  cssText.split(listDelimiter).forEach(function (item) {
    if (item) {
      var tmp = item.split(propertyDelimiter);
      tmp.length > 1 && (res[tmp[0].trim()] = tmp[1].trim());
    }
  });
  return res
});

// merge static and dynamic style data on the same vnode
function normalizeStyleData (data) {
  var style = normalizeStyleBinding(data.style);
  // static style is pre-processed into an object during compilation
  // and is always a fresh object, so it's safe to merge into it
  return data.staticStyle
    ? extend(data.staticStyle, style)
    : style
}

// normalize possible array / string values into Object
function normalizeStyleBinding (bindingStyle) {
  if (Array.isArray(bindingStyle)) {
    return toObject(bindingStyle)
  }
  if (typeof bindingStyle === 'string') {
    return parseStyleText(bindingStyle)
  }
  return bindingStyle
}

/**
 * parent component style should be after child's
 * so that parent component's style could override it
 */
function getStyle (vnode, checkChild) {
  var res = {};
  var styleData;

  if (checkChild) {
    var childNode = vnode;
    while (childNode.componentInstance) {
      childNode = childNode.componentInstance._vnode;
      if (
        childNode && childNode.data &&
        (styleData = normalizeStyleData(childNode.data))
      ) {
        extend(res, styleData);
      }
    }
  }

  if ((styleData = normalizeStyleData(vnode.data))) {
    extend(res, styleData);
  }

  var parentNode = vnode;
  while ((parentNode = parentNode.parent)) {
    if (parentNode.data && (styleData = normalizeStyleData(parentNode.data))) {
      extend(res, styleData);
    }
  }
  return res
}

/*  */

var cssVarRE = /^--/;
var importantRE = /\s*!important$/;
var setProp = function (el, name, val) {
  /* istanbul ignore if */
  if (cssVarRE.test(name)) {
    el.style.setProperty(name, val);
  } else if (importantRE.test(val)) {
    el.style.setProperty(name, val.replace(importantRE, ''), 'important');
  } else {
    var normalizedName = normalize(name);
    if (Array.isArray(val)) {
      // Support values array created by autoprefixer, e.g.
      // {display: ["-webkit-box", "-ms-flexbox", "flex"]}
      // Set them one by one, and the browser will only set those it can recognize
      for (var i = 0, len = val.length; i < len; i++) {
        el.style[normalizedName] = val[i];
      }
    } else {
      el.style[normalizedName] = val;
    }
  }
};

var vendorNames = ['Webkit', 'Moz', 'ms'];

var emptyStyle;
var normalize = cached(function (prop) {
  emptyStyle = emptyStyle || document.createElement('div').style;
  prop = camelize(prop);
  if (prop !== 'filter' && (prop in emptyStyle)) {
    return prop
  }
  var capName = prop.charAt(0).toUpperCase() + prop.slice(1);
  for (var i = 0; i < vendorNames.length; i++) {
    var name = vendorNames[i] + capName;
    if (name in emptyStyle) {
      return name
    }
  }
});

function updateStyle (oldVnode, vnode) {
  var data = vnode.data;
  var oldData = oldVnode.data;

  if (isUndef(data.staticStyle) && isUndef(data.style) &&
    isUndef(oldData.staticStyle) && isUndef(oldData.style)
  ) {
    return
  }

  var cur, name;
  var el = vnode.elm;
  var oldStaticStyle = oldData.staticStyle;
  var oldStyleBinding = oldData.normalizedStyle || oldData.style || {};

  // if static style exists, stylebinding already merged into it when doing normalizeStyleData
  var oldStyle = oldStaticStyle || oldStyleBinding;

  var style = normalizeStyleBinding(vnode.data.style) || {};

  // store normalized style under a different key for next diff
  // make sure to clone it if it's reactive, since the user likely wants
  // to mutate it.
  vnode.data.normalizedStyle = isDef(style.__ob__)
    ? extend({}, style)
    : style;

  var newStyle = getStyle(vnode, true);

  for (name in oldStyle) {
    if (isUndef(newStyle[name])) {
      setProp(el, name, '');
    }
  }
  for (name in newStyle) {
    cur = newStyle[name];
    if (cur !== oldStyle[name]) {
      // ie9 setting to null has no effect, must use empty string
      setProp(el, name, cur == null ? '' : cur);
    }
  }
}

var style = {
  create: updateStyle,
  update: updateStyle
}

/*  */

/**
 * Add class with compatibility for SVG since classList is not supported on
 * SVG elements in IE
 */
function addClass (el, cls) {
  /* istanbul ignore if */
  if (!cls || !(cls = cls.trim())) {
    return
  }

  /* istanbul ignore else */
  if (el.classList) {
    if (cls.indexOf(' ') > -1) {
      cls.split(/\s+/).forEach(function (c) { return el.classList.add(c); });
    } else {
      el.classList.add(cls);
    }
  } else {
    var cur = " " + (el.getAttribute('class') || '') + " ";
    if (cur.indexOf(' ' + cls + ' ') < 0) {
      el.setAttribute('class', (cur + cls).trim());
    }
  }
}

/**
 * Remove class with compatibility for SVG since classList is not supported on
 * SVG elements in IE
 */
function removeClass (el, cls) {
  /* istanbul ignore if */
  if (!cls || !(cls = cls.trim())) {
    return
  }

  /* istanbul ignore else */
  if (el.classList) {
    if (cls.indexOf(' ') > -1) {
      cls.split(/\s+/).forEach(function (c) { return el.classList.remove(c); });
    } else {
      el.classList.remove(cls);
    }
    if (!el.classList.length) {
      el.removeAttribute('class');
    }
  } else {
    var cur = " " + (el.getAttribute('class') || '') + " ";
    var tar = ' ' + cls + ' ';
    while (cur.indexOf(tar) >= 0) {
      cur = cur.replace(tar, ' ');
    }
    cur = cur.trim();
    if (cur) {
      el.setAttribute('class', cur);
    } else {
      el.removeAttribute('class');
    }
  }
}

/*  */

function resolveTransition (def) {
  if (!def) {
    return
  }
  /* istanbul ignore else */
  if (typeof def === 'object') {
    var res = {};
    if (def.css !== false) {
      extend(res, autoCssTransition(def.name || 'v'));
    }
    extend(res, def);
    return res
  } else if (typeof def === 'string') {
    return autoCssTransition(def)
  }
}

var autoCssTransition = cached(function (name) {
  return {
    enterClass: (name + "-enter"),
    enterToClass: (name + "-enter-to"),
    enterActiveClass: (name + "-enter-active"),
    leaveClass: (name + "-leave"),
    leaveToClass: (name + "-leave-to"),
    leaveActiveClass: (name + "-leave-active")
  }
});

var hasTransition = inBrowser && !isIE9;
var TRANSITION = 'transition';
var ANIMATION = 'animation';

// Transition property/event sniffing
var transitionProp = 'transition';
var transitionEndEvent = 'transitionend';
var animationProp = 'animation';
var animationEndEvent = 'animationend';
if (hasTransition) {
  /* istanbul ignore if */
  if (window.ontransitionend === undefined &&
    window.onwebkittransitionend !== undefined
  ) {
    transitionProp = 'WebkitTransition';
    transitionEndEvent = 'webkitTransitionEnd';
  }
  if (window.onanimationend === undefined &&
    window.onwebkitanimationend !== undefined
  ) {
    animationProp = 'WebkitAnimation';
    animationEndEvent = 'webkitAnimationEnd';
  }
}

// binding to window is necessary to make hot reload work in IE in strict mode
var raf = inBrowser
  ? window.requestAnimationFrame
    ? window.requestAnimationFrame.bind(window)
    : setTimeout
  : /* istanbul ignore next */ function (fn) { return fn(); };

function nextFrame (fn) {
  raf(function () {
    raf(fn);
  });
}

function addTransitionClass (el, cls) {
  var transitionClasses = el._transitionClasses || (el._transitionClasses = []);
  if (transitionClasses.indexOf(cls) < 0) {
    transitionClasses.push(cls);
    addClass(el, cls);
  }
}

function removeTransitionClass (el, cls) {
  if (el._transitionClasses) {
    remove(el._transitionClasses, cls);
  }
  removeClass(el, cls);
}

function whenTransitionEnds (
  el,
  expectedType,
  cb
) {
  var ref = getTransitionInfo(el, expectedType);
  var type = ref.type;
  var timeout = ref.timeout;
  var propCount = ref.propCount;
  if (!type) { return cb() }
  var event = type === TRANSITION ? transitionEndEvent : animationEndEvent;
  var ended = 0;
  var end = function () {
    el.removeEventListener(event, onEnd);
    cb();
  };
  var onEnd = function (e) {
    if (e.target === el) {
      if (++ended >= propCount) {
        end();
      }
    }
  };
  setTimeout(function () {
    if (ended < propCount) {
      end();
    }
  }, timeout + 1);
  el.addEventListener(event, onEnd);
}

var transformRE = /\b(transform|all)(,|$)/;

function getTransitionInfo (el, expectedType) {
  var styles = window.getComputedStyle(el);
  var transitionDelays = styles[transitionProp + 'Delay'].split(', ');
  var transitionDurations = styles[transitionProp + 'Duration'].split(', ');
  var transitionTimeout = getTimeout(transitionDelays, transitionDurations);
  var animationDelays = styles[animationProp + 'Delay'].split(', ');
  var animationDurations = styles[animationProp + 'Duration'].split(', ');
  var animationTimeout = getTimeout(animationDelays, animationDurations);

  var type;
  var timeout = 0;
  var propCount = 0;
  /* istanbul ignore if */
  if (expectedType === TRANSITION) {
    if (transitionTimeout > 0) {
      type = TRANSITION;
      timeout = transitionTimeout;
      propCount = transitionDurations.length;
    }
  } else if (expectedType === ANIMATION) {
    if (animationTimeout > 0) {
      type = ANIMATION;
      timeout = animationTimeout;
      propCount = animationDurations.length;
    }
  } else {
    timeout = Math.max(transitionTimeout, animationTimeout);
    type = timeout > 0
      ? transitionTimeout > animationTimeout
        ? TRANSITION
        : ANIMATION
      : null;
    propCount = type
      ? type === TRANSITION
        ? transitionDurations.length
        : animationDurations.length
      : 0;
  }
  var hasTransform =
    type === TRANSITION &&
    transformRE.test(styles[transitionProp + 'Property']);
  return {
    type: type,
    timeout: timeout,
    propCount: propCount,
    hasTransform: hasTransform
  }
}

function getTimeout (delays, durations) {
  /* istanbul ignore next */
  while (delays.length < durations.length) {
    delays = delays.concat(delays);
  }

  return Math.max.apply(null, durations.map(function (d, i) {
    return toMs(d) + toMs(delays[i])
  }))
}

function toMs (s) {
  return Number(s.slice(0, -1)) * 1000
}

/*  */

function enter (vnode, toggleDisplay) {
  var el = vnode.elm;

  // call leave callback now
  if (isDef(el._leaveCb)) {
    el._leaveCb.cancelled = true;
    el._leaveCb();
  }

  var data = resolveTransition(vnode.data.transition);
  if (isUndef(data)) {
    return
  }

  /* istanbul ignore if */
  if (isDef(el._enterCb) || el.nodeType !== 1) {
    return
  }

  var css = data.css;
  var type = data.type;
  var enterClass = data.enterClass;
  var enterToClass = data.enterToClass;
  var enterActiveClass = data.enterActiveClass;
  var appearClass = data.appearClass;
  var appearToClass = data.appearToClass;
  var appearActiveClass = data.appearActiveClass;
  var beforeEnter = data.beforeEnter;
  var enter = data.enter;
  var afterEnter = data.afterEnter;
  var enterCancelled = data.enterCancelled;
  var beforeAppear = data.beforeAppear;
  var appear = data.appear;
  var afterAppear = data.afterAppear;
  var appearCancelled = data.appearCancelled;
  var duration = data.duration;

  // activeInstance will always be the <transition> component managing this
  // transition. One edge case to check is when the <transition> is placed
  // as the root node of a child component. In that case we need to check
  // <transition>'s parent for appear check.
  var context = activeInstance;
  var transitionNode = activeInstance.$vnode;
  while (transitionNode && transitionNode.parent) {
    transitionNode = transitionNode.parent;
    context = transitionNode.context;
  }

  var isAppear = !context._isMounted || !vnode.isRootInsert;

  if (isAppear && !appear && appear !== '') {
    return
  }

  var startClass = isAppear && appearClass
    ? appearClass
    : enterClass;
  var activeClass = isAppear && appearActiveClass
    ? appearActiveClass
    : enterActiveClass;
  var toClass = isAppear && appearToClass
    ? appearToClass
    : enterToClass;

  var beforeEnterHook = isAppear
    ? (beforeAppear || beforeEnter)
    : beforeEnter;
  var enterHook = isAppear
    ? (typeof appear === 'function' ? appear : enter)
    : enter;
  var afterEnterHook = isAppear
    ? (afterAppear || afterEnter)
    : afterEnter;
  var enterCancelledHook = isAppear
    ? (appearCancelled || enterCancelled)
    : enterCancelled;

  var explicitEnterDuration = toNumber(
    isObject(duration)
      ? duration.enter
      : duration
  );

  if (process.env.NODE_ENV !== 'production' && explicitEnterDuration != null) {
    checkDuration(explicitEnterDuration, 'enter', vnode);
  }

  var expectsCSS = css !== false && !isIE9;
  var userWantsControl = getHookArgumentsLength(enterHook);

  var cb = el._enterCb = once(function () {
    if (expectsCSS) {
      removeTransitionClass(el, toClass);
      removeTransitionClass(el, activeClass);
    }
    if (cb.cancelled) {
      if (expectsCSS) {
        removeTransitionClass(el, startClass);
      }
      enterCancelledHook && enterCancelledHook(el);
    } else {
      afterEnterHook && afterEnterHook(el);
    }
    el._enterCb = null;
  });

  if (!vnode.data.show) {
    // remove pending leave element on enter by injecting an insert hook
    mergeVNodeHook(vnode, 'insert', function () {
      var parent = el.parentNode;
      var pendingNode = parent && parent._pending && parent._pending[vnode.key];
      if (pendingNode &&
        pendingNode.tag === vnode.tag &&
        pendingNode.elm._leaveCb
      ) {
        pendingNode.elm._leaveCb();
      }
      enterHook && enterHook(el, cb);
    });
  }

  // start enter transition
  beforeEnterHook && beforeEnterHook(el);
  if (expectsCSS) {
    addTransitionClass(el, startClass);
    addTransitionClass(el, activeClass);
    nextFrame(function () {
      removeTransitionClass(el, startClass);
      if (!cb.cancelled) {
        addTransitionClass(el, toClass);
        if (!userWantsControl) {
          if (isValidDuration(explicitEnterDuration)) {
            setTimeout(cb, explicitEnterDuration);
          } else {
            whenTransitionEnds(el, type, cb);
          }
        }
      }
    });
  }

  if (vnode.data.show) {
    toggleDisplay && toggleDisplay();
    enterHook && enterHook(el, cb);
  }

  if (!expectsCSS && !userWantsControl) {
    cb();
  }
}

function leave (vnode, rm) {
  var el = vnode.elm;

  // call enter callback now
  if (isDef(el._enterCb)) {
    el._enterCb.cancelled = true;
    el._enterCb();
  }

  var data = resolveTransition(vnode.data.transition);
  if (isUndef(data) || el.nodeType !== 1) {
    return rm()
  }

  /* istanbul ignore if */
  if (isDef(el._leaveCb)) {
    return
  }

  var css = data.css;
  var type = data.type;
  var leaveClass = data.leaveClass;
  var leaveToClass = data.leaveToClass;
  var leaveActiveClass = data.leaveActiveClass;
  var beforeLeave = data.beforeLeave;
  var leave = data.leave;
  var afterLeave = data.afterLeave;
  var leaveCancelled = data.leaveCancelled;
  var delayLeave = data.delayLeave;
  var duration = data.duration;

  var expectsCSS = css !== false && !isIE9;
  var userWantsControl = getHookArgumentsLength(leave);

  var explicitLeaveDuration = toNumber(
    isObject(duration)
      ? duration.leave
      : duration
  );

  if (process.env.NODE_ENV !== 'production' && isDef(explicitLeaveDuration)) {
    checkDuration(explicitLeaveDuration, 'leave', vnode);
  }

  var cb = el._leaveCb = once(function () {
    if (el.parentNode && el.parentNode._pending) {
      el.parentNode._pending[vnode.key] = null;
    }
    if (expectsCSS) {
      removeTransitionClass(el, leaveToClass);
      removeTransitionClass(el, leaveActiveClass);
    }
    if (cb.cancelled) {
      if (expectsCSS) {
        removeTransitionClass(el, leaveClass);
      }
      leaveCancelled && leaveCancelled(el);
    } else {
      rm();
      afterLeave && afterLeave(el);
    }
    el._leaveCb = null;
  });

  if (delayLeave) {
    delayLeave(performLeave);
  } else {
    performLeave();
  }

  function performLeave () {
    // the delayed leave may have already been cancelled
    if (cb.cancelled) {
      return
    }
    // record leaving element
    if (!vnode.data.show) {
      (el.parentNode._pending || (el.parentNode._pending = {}))[(vnode.key)] = vnode;
    }
    beforeLeave && beforeLeave(el);
    if (expectsCSS) {
      addTransitionClass(el, leaveClass);
      addTransitionClass(el, leaveActiveClass);
      nextFrame(function () {
        removeTransitionClass(el, leaveClass);
        if (!cb.cancelled) {
          addTransitionClass(el, leaveToClass);
          if (!userWantsControl) {
            if (isValidDuration(explicitLeaveDuration)) {
              setTimeout(cb, explicitLeaveDuration);
            } else {
              whenTransitionEnds(el, type, cb);
            }
          }
        }
      });
    }
    leave && leave(el, cb);
    if (!expectsCSS && !userWantsControl) {
      cb();
    }
  }
}

// only used in dev mode
function checkDuration (val, name, vnode) {
  if (typeof val !== 'number') {
    warn(
      "<transition> explicit " + name + " duration is not a valid number - " +
      "got " + (JSON.stringify(val)) + ".",
      vnode.context
    );
  } else if (isNaN(val)) {
    warn(
      "<transition> explicit " + name + " duration is NaN - " +
      'the duration expression might be incorrect.',
      vnode.context
    );
  }
}

function isValidDuration (val) {
  return typeof val === 'number' && !isNaN(val)
}

/**
 * Normalize a transition hook's argument length. The hook may be:
 * - a merged hook (invoker) with the original in .fns
 * - a wrapped component method (check ._length)
 * - a plain function (.length)
 */
function getHookArgumentsLength (fn) {
  if (isUndef(fn)) {
    return false
  }
  var invokerFns = fn.fns;
  if (isDef(invokerFns)) {
    // invoker
    return getHookArgumentsLength(
      Array.isArray(invokerFns)
        ? invokerFns[0]
        : invokerFns
    )
  } else {
    return (fn._length || fn.length) > 1
  }
}

function _enter (_, vnode) {
  if (vnode.data.show !== true) {
    enter(vnode);
  }
}

var transition = inBrowser ? {
  create: _enter,
  activate: _enter,
  remove: function remove$$1 (vnode, rm) {
    /* istanbul ignore else */
    if (vnode.data.show !== true) {
      leave(vnode, rm);
    } else {
      rm();
    }
  }
} : {}

var platformModules = [
  attrs,
  klass,
  events,
  domProps,
  style,
  transition
]

/*  */

// the directive module should be applied last, after all
// built-in modules have been applied.
var modules = platformModules.concat(baseModules);

var patch = createPatchFunction({ nodeOps: nodeOps, modules: modules });

/**
 * Not type checking this file because flow doesn't like attaching
 * properties to Elements.
 */

/* istanbul ignore if */
if (isIE9) {
  // http://www.matts411.com/post/internet-explorer-9-oninput/
  document.addEventListener('selectionchange', function () {
    var el = document.activeElement;
    if (el && el.vmodel) {
      trigger(el, 'input');
    }
  });
}

var directive = {
  inserted: function inserted (el, binding, vnode, oldVnode) {
    if (vnode.tag === 'select') {
      // #6903
      if (oldVnode.elm && !oldVnode.elm._vOptions) {
        mergeVNodeHook(vnode, 'postpatch', function () {
          directive.componentUpdated(el, binding, vnode);
        });
      } else {
        setSelected(el, binding, vnode.context);
      }
      el._vOptions = [].map.call(el.options, getValue);
    } else if (vnode.tag === 'textarea' || isTextInputType(el.type)) {
      el._vModifiers = binding.modifiers;
      if (!binding.modifiers.lazy) {
        el.addEventListener('compositionstart', onCompositionStart);
        el.addEventListener('compositionend', onCompositionEnd);
        // Safari < 10.2 & UIWebView doesn't fire compositionend when
        // switching focus before confirming composition choice
        // this also fixes the issue where some browsers e.g. iOS Chrome
        // fires "change" instead of "input" on autocomplete.
        el.addEventListener('change', onCompositionEnd);
        /* istanbul ignore if */
        if (isIE9) {
          el.vmodel = true;
        }
      }
    }
  },

  componentUpdated: function componentUpdated (el, binding, vnode) {
    if (vnode.tag === 'select') {
      setSelected(el, binding, vnode.context);
      // in case the options rendered by v-for have changed,
      // it's possible that the value is out-of-sync with the rendered options.
      // detect such cases and filter out values that no longer has a matching
      // option in the DOM.
      var prevOptions = el._vOptions;
      var curOptions = el._vOptions = [].map.call(el.options, getValue);
      if (curOptions.some(function (o, i) { return !looseEqual(o, prevOptions[i]); })) {
        // trigger change event if
        // no matching option found for at least one value
        var needReset = el.multiple
          ? binding.value.some(function (v) { return hasNoMatchingOption(v, curOptions); })
          : binding.value !== binding.oldValue && hasNoMatchingOption(binding.value, curOptions);
        if (needReset) {
          trigger(el, 'change');
        }
      }
    }
  }
};

function setSelected (el, binding, vm) {
  actuallySetSelected(el, binding, vm);
  /* istanbul ignore if */
  if (isIE || isEdge) {
    setTimeout(function () {
      actuallySetSelected(el, binding, vm);
    }, 0);
  }
}

function actuallySetSelected (el, binding, vm) {
  var value = binding.value;
  var isMultiple = el.multiple;
  if (isMultiple && !Array.isArray(value)) {
    process.env.NODE_ENV !== 'production' && warn(
      "<select multiple v-model=\"" + (binding.expression) + "\"> " +
      "expects an Array value for its binding, but got " + (Object.prototype.toString.call(value).slice(8, -1)),
      vm
    );
    return
  }
  var selected, option;
  for (var i = 0, l = el.options.length; i < l; i++) {
    option = el.options[i];
    if (isMultiple) {
      selected = looseIndexOf(value, getValue(option)) > -1;
      if (option.selected !== selected) {
        option.selected = selected;
      }
    } else {
      if (looseEqual(getValue(option), value)) {
        if (el.selectedIndex !== i) {
          el.selectedIndex = i;
        }
        return
      }
    }
  }
  if (!isMultiple) {
    el.selectedIndex = -1;
  }
}

function hasNoMatchingOption (value, options) {
  return options.every(function (o) { return !looseEqual(o, value); })
}

function getValue (option) {
  return '_value' in option
    ? option._value
    : option.value
}

function onCompositionStart (e) {
  e.target.composing = true;
}

function onCompositionEnd (e) {
  // prevent triggering an input event for no reason
  if (!e.target.composing) { return }
  e.target.composing = false;
  trigger(e.target, 'input');
}

function trigger (el, type) {
  var e = document.createEvent('HTMLEvents');
  e.initEvent(type, true, true);
  el.dispatchEvent(e);
}

/*  */

// recursively search for possible transition defined inside the component root
function locateNode (vnode) {
  return vnode.componentInstance && (!vnode.data || !vnode.data.transition)
    ? locateNode(vnode.componentInstance._vnode)
    : vnode
}

var show = {
  bind: function bind (el, ref, vnode) {
    var value = ref.value;

    vnode = locateNode(vnode);
    var transition$$1 = vnode.data && vnode.data.transition;
    var originalDisplay = el.__vOriginalDisplay =
      el.style.display === 'none' ? '' : el.style.display;
    if (value && transition$$1) {
      vnode.data.show = true;
      enter(vnode, function () {
        el.style.display = originalDisplay;
      });
    } else {
      el.style.display = value ? originalDisplay : 'none';
    }
  },

  update: function update (el, ref, vnode) {
    var value = ref.value;
    var oldValue = ref.oldValue;

    /* istanbul ignore if */
    if (!value === !oldValue) { return }
    vnode = locateNode(vnode);
    var transition$$1 = vnode.data && vnode.data.transition;
    if (transition$$1) {
      vnode.data.show = true;
      if (value) {
        enter(vnode, function () {
          el.style.display = el.__vOriginalDisplay;
        });
      } else {
        leave(vnode, function () {
          el.style.display = 'none';
        });
      }
    } else {
      el.style.display = value ? el.__vOriginalDisplay : 'none';
    }
  },

  unbind: function unbind (
    el,
    binding,
    vnode,
    oldVnode,
    isDestroy
  ) {
    if (!isDestroy) {
      el.style.display = el.__vOriginalDisplay;
    }
  }
}

var platformDirectives = {
  model: directive,
  show: show
}

/*  */

// Provides transition support for a single element/component.
// supports transition mode (out-in / in-out)

var transitionProps = {
  name: String,
  appear: Boolean,
  css: Boolean,
  mode: String,
  type: String,
  enterClass: String,
  leaveClass: String,
  enterToClass: String,
  leaveToClass: String,
  enterActiveClass: String,
  leaveActiveClass: String,
  appearClass: String,
  appearActiveClass: String,
  appearToClass: String,
  duration: [Number, String, Object]
};

// in case the child is also an abstract component, e.g. <keep-alive>
// we want to recursively retrieve the real component to be rendered
function getRealChild (vnode) {
  var compOptions = vnode && vnode.componentOptions;
  if (compOptions && compOptions.Ctor.options.abstract) {
    return getRealChild(getFirstComponentChild(compOptions.children))
  } else {
    return vnode
  }
}

function extractTransitionData (comp) {
  var data = {};
  var options = comp.$options;
  // props
  for (var key in options.propsData) {
    data[key] = comp[key];
  }
  // events.
  // extract listeners and pass them directly to the transition methods
  var listeners = options._parentListeners;
  for (var key$1 in listeners) {
    data[camelize(key$1)] = listeners[key$1];
  }
  return data
}

function placeholder (h, rawChild) {
  if (/\d-keep-alive$/.test(rawChild.tag)) {
    return h('keep-alive', {
      props: rawChild.componentOptions.propsData
    })
  }
}

function hasParentTransition (vnode) {
  while ((vnode = vnode.parent)) {
    if (vnode.data.transition) {
      return true
    }
  }
}

function isSameChild (child, oldChild) {
  return oldChild.key === child.key && oldChild.tag === child.tag
}

var Transition = {
  name: 'transition',
  props: transitionProps,
  abstract: true,

  render: function render (h) {
    var this$1 = this;

    var children = this.$slots.default;
    if (!children) {
      return
    }

    // filter out text nodes (possible whitespaces)
    children = children.filter(function (c) { return c.tag || isAsyncPlaceholder(c); });
    /* istanbul ignore if */
    if (!children.length) {
      return
    }

    // warn multiple elements
    if (process.env.NODE_ENV !== 'production' && children.length > 1) {
      warn(
        '<transition> can only be used on a single element. Use ' +
        '<transition-group> for lists.',
        this.$parent
      );
    }

    var mode = this.mode;

    // warn invalid mode
    if (process.env.NODE_ENV !== 'production' &&
      mode && mode !== 'in-out' && mode !== 'out-in'
    ) {
      warn(
        'invalid <transition> mode: ' + mode,
        this.$parent
      );
    }

    var rawChild = children[0];

    // if this is a component root node and the component's
    // parent container node also has transition, skip.
    if (hasParentTransition(this.$vnode)) {
      return rawChild
    }

    // apply transition data to child
    // use getRealChild() to ignore abstract components e.g. keep-alive
    var child = getRealChild(rawChild);
    /* istanbul ignore if */
    if (!child) {
      return rawChild
    }

    if (this._leaving) {
      return placeholder(h, rawChild)
    }

    // ensure a key that is unique to the vnode type and to this transition
    // component instance. This key will be used to remove pending leaving nodes
    // during entering.
    var id = "__transition-" + (this._uid) + "-";
    child.key = child.key == null
      ? child.isComment
        ? id + 'comment'
        : id + child.tag
      : isPrimitive(child.key)
        ? (String(child.key).indexOf(id) === 0 ? child.key : id + child.key)
        : child.key;

    var data = (child.data || (child.data = {})).transition = extractTransitionData(this);
    var oldRawChild = this._vnode;
    var oldChild = getRealChild(oldRawChild);

    // mark v-show
    // so that the transition module can hand over the control to the directive
    if (child.data.directives && child.data.directives.some(function (d) { return d.name === 'show'; })) {
      child.data.show = true;
    }

    if (
      oldChild &&
      oldChild.data &&
      !isSameChild(child, oldChild) &&
      !isAsyncPlaceholder(oldChild) &&
      // #6687 component root is a comment node
      !(oldChild.componentInstance && oldChild.componentInstance._vnode.isComment)
    ) {
      // replace old child transition data with fresh one
      // important for dynamic transitions!
      var oldData = oldChild.data.transition = extend({}, data);
      // handle transition mode
      if (mode === 'out-in') {
        // return placeholder node and queue update when leave finishes
        this._leaving = true;
        mergeVNodeHook(oldData, 'afterLeave', function () {
          this$1._leaving = false;
          this$1.$forceUpdate();
        });
        return placeholder(h, rawChild)
      } else if (mode === 'in-out') {
        if (isAsyncPlaceholder(child)) {
          return oldRawChild
        }
        var delayedLeave;
        var performLeave = function () { delayedLeave(); };
        mergeVNodeHook(data, 'afterEnter', performLeave);
        mergeVNodeHook(data, 'enterCancelled', performLeave);
        mergeVNodeHook(oldData, 'delayLeave', function (leave) { delayedLeave = leave; });
      }
    }

    return rawChild
  }
}

/*  */

// Provides transition support for list items.
// supports move transitions using the FLIP technique.

// Because the vdom's children update algorithm is "unstable" - i.e.
// it doesn't guarantee the relative positioning of removed elements,
// we force transition-group to update its children into two passes:
// in the first pass, we remove all nodes that need to be removed,
// triggering their leaving transition; in the second pass, we insert/move
// into the final desired state. This way in the second pass removed
// nodes will remain where they should be.

var props = extend({
  tag: String,
  moveClass: String
}, transitionProps);

delete props.mode;

var TransitionGroup = {
  props: props,

  render: function render (h) {
    var tag = this.tag || this.$vnode.data.tag || 'span';
    var map = Object.create(null);
    var prevChildren = this.prevChildren = this.children;
    var rawChildren = this.$slots.default || [];
    var children = this.children = [];
    var transitionData = extractTransitionData(this);

    for (var i = 0; i < rawChildren.length; i++) {
      var c = rawChildren[i];
      if (c.tag) {
        if (c.key != null && String(c.key).indexOf('__vlist') !== 0) {
          children.push(c);
          map[c.key] = c
          ;(c.data || (c.data = {})).transition = transitionData;
        } else if (process.env.NODE_ENV !== 'production') {
          var opts = c.componentOptions;
          var name = opts ? (opts.Ctor.options.name || opts.tag || '') : c.tag;
          warn(("<transition-group> children must be keyed: <" + name + ">"));
        }
      }
    }

    if (prevChildren) {
      var kept = [];
      var removed = [];
      for (var i$1 = 0; i$1 < prevChildren.length; i$1++) {
        var c$1 = prevChildren[i$1];
        c$1.data.transition = transitionData;
        c$1.data.pos = c$1.elm.getBoundingClientRect();
        if (map[c$1.key]) {
          kept.push(c$1);
        } else {
          removed.push(c$1);
        }
      }
      this.kept = h(tag, null, kept);
      this.removed = removed;
    }

    return h(tag, null, children)
  },

  beforeUpdate: function beforeUpdate () {
    // force removing pass
    this.__patch__(
      this._vnode,
      this.kept,
      false, // hydrating
      true // removeOnly (!important, avoids unnecessary moves)
    );
    this._vnode = this.kept;
  },

  updated: function updated () {
    var children = this.prevChildren;
    var moveClass = this.moveClass || ((this.name || 'v') + '-move');
    if (!children.length || !this.hasMove(children[0].elm, moveClass)) {
      return
    }

    // we divide the work into three loops to avoid mixing DOM reads and writes
    // in each iteration - which helps prevent layout thrashing.
    children.forEach(callPendingCbs);
    children.forEach(recordPosition);
    children.forEach(applyTranslation);

    // force reflow to put everything in position
    // assign to this to avoid being removed in tree-shaking
    // $flow-disable-line
    this._reflow = document.body.offsetHeight;

    children.forEach(function (c) {
      if (c.data.moved) {
        var el = c.elm;
        var s = el.style;
        addTransitionClass(el, moveClass);
        s.transform = s.WebkitTransform = s.transitionDuration = '';
        el.addEventListener(transitionEndEvent, el._moveCb = function cb (e) {
          if (!e || /transform$/.test(e.propertyName)) {
            el.removeEventListener(transitionEndEvent, cb);
            el._moveCb = null;
            removeTransitionClass(el, moveClass);
          }
        });
      }
    });
  },

  methods: {
    hasMove: function hasMove (el, moveClass) {
      /* istanbul ignore if */
      if (!hasTransition) {
        return false
      }
      /* istanbul ignore if */
      if (this._hasMove) {
        return this._hasMove
      }
      // Detect whether an element with the move class applied has
      // CSS transitions. Since the element may be inside an entering
      // transition at this very moment, we make a clone of it and remove
      // all other transition classes applied to ensure only the move class
      // is applied.
      var clone = el.cloneNode();
      if (el._transitionClasses) {
        el._transitionClasses.forEach(function (cls) { removeClass(clone, cls); });
      }
      addClass(clone, moveClass);
      clone.style.display = 'none';
      this.$el.appendChild(clone);
      var info = getTransitionInfo(clone);
      this.$el.removeChild(clone);
      return (this._hasMove = info.hasTransform)
    }
  }
}

function callPendingCbs (c) {
  /* istanbul ignore if */
  if (c.elm._moveCb) {
    c.elm._moveCb();
  }
  /* istanbul ignore if */
  if (c.elm._enterCb) {
    c.elm._enterCb();
  }
}

function recordPosition (c) {
  c.data.newPos = c.elm.getBoundingClientRect();
}

function applyTranslation (c) {
  var oldPos = c.data.pos;
  var newPos = c.data.newPos;
  var dx = oldPos.left - newPos.left;
  var dy = oldPos.top - newPos.top;
  if (dx || dy) {
    c.data.moved = true;
    var s = c.elm.style;
    s.transform = s.WebkitTransform = "translate(" + dx + "px," + dy + "px)";
    s.transitionDuration = '0s';
  }
}

var platformComponents = {
  Transition: Transition,
  TransitionGroup: TransitionGroup
}

/*  */

// install platform specific utils
Vue.config.mustUseProp = mustUseProp;
Vue.config.isReservedTag = isReservedTag;
Vue.config.isReservedAttr = isReservedAttr;
Vue.config.getTagNamespace = getTagNamespace;
Vue.config.isUnknownElement = isUnknownElement;

// install platform runtime directives & components
extend(Vue.options.directives, platformDirectives);
extend(Vue.options.components, platformComponents);

// install platform patch function
Vue.prototype.__patch__ = inBrowser ? patch : noop;

// public mount method
Vue.prototype.$mount = function (
  el,
  hydrating
) {
  el = el && inBrowser ? query(el) : undefined;
  return mountComponent(this, el, hydrating)
};

// devtools global hook
/* istanbul ignore next */
if (inBrowser) {
  setTimeout(function () {
    if (config.devtools) {
      if (devtools) {
        devtools.emit('init', Vue);
      } else if (
        process.env.NODE_ENV !== 'production' &&
        process.env.NODE_ENV !== 'test' &&
        isChrome
      ) {
        console[console.info ? 'info' : 'log'](
          'Download the Vue Devtools extension for a better development experience:\n' +
          'https://github.com/vuejs/vue-devtools'
        );
      }
    }
    if (process.env.NODE_ENV !== 'production' &&
      process.env.NODE_ENV !== 'test' &&
      config.productionTip !== false &&
      typeof console !== 'undefined'
    ) {
      console[console.info ? 'info' : 'log'](
        "You are running Vue in development mode.\n" +
        "Make sure to turn on production mode when deploying for production.\n" +
        "See more tips at https://vuejs.org/guide/deployment.html"
      );
    }
  }, 0);
}

/*  */

/* harmony default export */ __webpack_exports__["default"] = (Vue);

/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(2), __webpack_require__(0), __webpack_require__(6).setImmediate))

/***/ }),

/***/ 6:
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var scope = (typeof global !== "undefined" && global) ||
            (typeof self !== "undefined" && self) ||
            window;
var apply = Function.prototype.apply;

// DOM APIs, for completeness

exports.setTimeout = function() {
  return new Timeout(apply.call(setTimeout, scope, arguments), clearTimeout);
};
exports.setInterval = function() {
  return new Timeout(apply.call(setInterval, scope, arguments), clearInterval);
};
exports.clearTimeout =
exports.clearInterval = function(timeout) {
  if (timeout) {
    timeout.close();
  }
};

function Timeout(id, clearFn) {
  this._id = id;
  this._clearFn = clearFn;
}
Timeout.prototype.unref = Timeout.prototype.ref = function() {};
Timeout.prototype.close = function() {
  this._clearFn.call(scope, this._id);
};

// Does not start the time, just sets up the members needed.
exports.enroll = function(item, msecs) {
  clearTimeout(item._idleTimeoutId);
  item._idleTimeout = msecs;
};

exports.unenroll = function(item) {
  clearTimeout(item._idleTimeoutId);
  item._idleTimeout = -1;
};

exports._unrefActive = exports.active = function(item) {
  clearTimeout(item._idleTimeoutId);

  var msecs = item._idleTimeout;
  if (msecs >= 0) {
    item._idleTimeoutId = setTimeout(function onTimeout() {
      if (item._onTimeout)
        item._onTimeout();
    }, msecs);
  }
};

// setimmediate attaches itself to the global object
__webpack_require__(7);
// On some exotic environments, it's not clear which object `setimmediate` was
// able to install onto.  Search each possibility in the same order as the
// `setimmediate` library.
exports.setImmediate = (typeof self !== "undefined" && self.setImmediate) ||
                       (typeof global !== "undefined" && global.setImmediate) ||
                       (this && this.setImmediate);
exports.clearImmediate = (typeof self !== "undefined" && self.clearImmediate) ||
                         (typeof global !== "undefined" && global.clearImmediate) ||
                         (this && this.clearImmediate);

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),

/***/ 7:
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global, process) {(function (global, undefined) {
    "use strict";

    if (global.setImmediate) {
        return;
    }

    var nextHandle = 1; // Spec says greater than zero
    var tasksByHandle = {};
    var currentlyRunningATask = false;
    var doc = global.document;
    var registerImmediate;

    function setImmediate(callback) {
      // Callback can either be a function or a string
      if (typeof callback !== "function") {
        callback = new Function("" + callback);
      }
      // Copy function arguments
      var args = new Array(arguments.length - 1);
      for (var i = 0; i < args.length; i++) {
          args[i] = arguments[i + 1];
      }
      // Store and register the task
      var task = { callback: callback, args: args };
      tasksByHandle[nextHandle] = task;
      registerImmediate(nextHandle);
      return nextHandle++;
    }

    function clearImmediate(handle) {
        delete tasksByHandle[handle];
    }

    function run(task) {
        var callback = task.callback;
        var args = task.args;
        switch (args.length) {
        case 0:
            callback();
            break;
        case 1:
            callback(args[0]);
            break;
        case 2:
            callback(args[0], args[1]);
            break;
        case 3:
            callback(args[0], args[1], args[2]);
            break;
        default:
            callback.apply(undefined, args);
            break;
        }
    }

    function runIfPresent(handle) {
        // From the spec: "Wait until any invocations of this algorithm started before this one have completed."
        // So if we're currently running a task, we'll need to delay this invocation.
        if (currentlyRunningATask) {
            // Delay by doing a setTimeout. setImmediate was tried instead, but in Firefox 7 it generated a
            // "too much recursion" error.
            setTimeout(runIfPresent, 0, handle);
        } else {
            var task = tasksByHandle[handle];
            if (task) {
                currentlyRunningATask = true;
                try {
                    run(task);
                } finally {
                    clearImmediate(handle);
                    currentlyRunningATask = false;
                }
            }
        }
    }

    function installNextTickImplementation() {
        registerImmediate = function(handle) {
            process.nextTick(function () { runIfPresent(handle); });
        };
    }

    function canUsePostMessage() {
        // The test against `importScripts` prevents this implementation from being installed inside a web worker,
        // where `global.postMessage` means something completely different and can't be used for this purpose.
        if (global.postMessage && !global.importScripts) {
            var postMessageIsAsynchronous = true;
            var oldOnMessage = global.onmessage;
            global.onmessage = function() {
                postMessageIsAsynchronous = false;
            };
            global.postMessage("", "*");
            global.onmessage = oldOnMessage;
            return postMessageIsAsynchronous;
        }
    }

    function installPostMessageImplementation() {
        // Installs an event handler on `global` for the `message` event: see
        // * https://developer.mozilla.org/en/DOM/window.postMessage
        // * http://www.whatwg.org/specs/web-apps/current-work/multipage/comms.html#crossDocumentMessages

        var messagePrefix = "setImmediate$" + Math.random() + "$";
        var onGlobalMessage = function(event) {
            if (event.source === global &&
                typeof event.data === "string" &&
                event.data.indexOf(messagePrefix) === 0) {
                runIfPresent(+event.data.slice(messagePrefix.length));
            }
        };

        if (global.addEventListener) {
            global.addEventListener("message", onGlobalMessage, false);
        } else {
            global.attachEvent("onmessage", onGlobalMessage);
        }

        registerImmediate = function(handle) {
            global.postMessage(messagePrefix + handle, "*");
        };
    }

    function installMessageChannelImplementation() {
        var channel = new MessageChannel();
        channel.port1.onmessage = function(event) {
            var handle = event.data;
            runIfPresent(handle);
        };

        registerImmediate = function(handle) {
            channel.port2.postMessage(handle);
        };
    }

    function installReadyStateChangeImplementation() {
        var html = doc.documentElement;
        registerImmediate = function(handle) {
            // Create a <script> element; its readystatechange event will be fired asynchronously once it is inserted
            // into the document. Do so, thus queuing up the task. Remember to clean up once it's been called.
            var script = doc.createElement("script");
            script.onreadystatechange = function () {
                runIfPresent(handle);
                script.onreadystatechange = null;
                html.removeChild(script);
                script = null;
            };
            html.appendChild(script);
        };
    }

    function installSetTimeoutImplementation() {
        registerImmediate = function(handle) {
            setTimeout(runIfPresent, 0, handle);
        };
    }

    // If supported, we should attach to the prototype of global, since that is where setTimeout et al. live.
    var attachTo = Object.getPrototypeOf && Object.getPrototypeOf(global);
    attachTo = attachTo && attachTo.setTimeout ? attachTo : global;

    // Don't get fooled by e.g. browserify environments.
    if ({}.toString.call(global.process) === "[object process]") {
        // For Node.js before 0.9
        installNextTickImplementation();

    } else if (canUsePostMessage()) {
        // For non-IE10 modern browsers
        installPostMessageImplementation();

    } else if (global.MessageChannel) {
        // For web workers, where supported
        installMessageChannelImplementation();

    } else if (doc && "onreadystatechange" in doc.createElement("script")) {
        // For IE 6–8
        installReadyStateChangeImplementation();

    } else {
        // For older browsers
        installSetTimeoutImplementation();
    }

    attachTo.setImmediate = setImmediate;
    attachTo.clearImmediate = clearImmediate;
}(typeof self === "undefined" ? typeof global === "undefined" ? this : global : self));

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0), __webpack_require__(2)))

/***/ }),

/***/ 76:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _vue = __webpack_require__(5);

var _vue2 = _interopRequireDefault(_vue);

var _weexVueRender = __webpack_require__(8);

var _weexVueRender2 = _interopRequireDefault(_weexVueRender);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_weexVueRender2.default.init(_vue2.default);

var App = __webpack_require__(25);
new _vue2.default(_vue2.default.util.extend({ el: '#root' }, App));

/***/ }),

/***/ 8:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

console.log('START WEEX VUE RENDER: 1.0.26, Build 2018-05-28 14:19.');

(function (global, factory) {
  ( false ? 'undefined' : _typeof(exports)) === 'object' && typeof module !== 'undefined' ? module.exports = factory() :  true ? !(__WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
				__WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : global.WeexVueRender = factory();
})(undefined, function () {
  'use strict';

  function __$styleInject(css, returnValue) {
    if (typeof document === 'undefined') {
      return returnValue;
    }
    css = css || '';
    var head = document.head || document.getElementsByTagName('head')[0];
    var style = document.createElement('style');
    style.type = 'text/css';
    head.appendChild(style);

    if (style.styleSheet) {
      style.styleSheet.cssText = css;
    } else {
      style.appendChild(document.createTextNode(css));
    }
    return returnValue;
  }

  __$styleInject("/*\n * Licensed to the Apache Software Foundation (ASF) under one\n * or more contributor license agreements.  See the NOTICE file\n * distributed with this work for additional information\n * regarding copyright ownership.  The ASF licenses this file\n * to you under the Apache License, Version 2.0 (the\n * \"License\"); you may not use this file except in compliance\n * with the License.  You may obtain a copy of the License at\n *\n *   http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing,\n * software distributed under the License is distributed on an\n * \"AS IS\" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY\n * KIND, either express or implied.  See the License for the\n * specific language governing permissions and limitations\n * under the License.\n */\n \n.weex-root,\n.weex-root * {\n  color: initial;\n  cursor: initial;\n  direction: initial;\n  /* In chrome, there's a chance that user set the miximum font-size to \n  a abnormal smaller size. But actually the smaller size is never working\n  if this font / font-size default value is set to initial. Perhaps a bug\n  for chrome. */\n  font: initial;\n  font-size: initial;\n  font-family: initial;\n  font-style: initial;\n  font-variant: initial;\n  font-weight: initial;\n  line-height: initial;\n  text-align: initial;\n  text-indent: initial;\n  visibility: initial;\n  white-space: initial;\n  word-spacing: initial;\n  font-family: BlinkMacSystemFont, 'Source Sans Pro', 'Helvetica Neue', Helvetica, Arial, sans-serif;\n}\n\n.weex-root,\n.weex-root *,\n.weex-root *::before,\n.weex-root *::after {\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  -webkit-text-size-adjust: none;\n     -moz-text-size-adjust: none;\n      -ms-text-size-adjust: none;\n          text-size-adjust: none;\n}\n\n.weex-root a,\n.weex-root button,\n.weex-root [role=\"button\"],\n.weex-root input,\n.weex-root label,\n.weex-root select,\n.weex-root textarea {\n      touch-action: manipulation;\n}\n\n.weex-root p,\n.weex-root ol,\n.weex-root ul,\n.weex-root dl,\n.weex-root figure {\n  margin: 0;\n  padding: 0;\n}\n\n.weex-root li {\n  list-style: none;\n}\n\n.weex-root figure {\n  margin: 0;\n}\n\n.weex-root textarea {\n  resize: none;\n}\n\n/* show no scroll bar. */\n::-webkit-scrollbar {\n  display: none;\n}\n", undefined);

  __$styleInject("/*\n * Licensed to the Apache Software Foundation (ASF) under one\n * or more contributor license agreements.  See the NOTICE file\n * distributed with this work for additional information\n * regarding copyright ownership.  The ASF licenses this file\n * to you under the Apache License, Version 2.0 (the\n * \"License\"); you may not use this file except in compliance\n * with the License.  You may obtain a copy of the License at\n *\n *   http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing,\n * software distributed under the License is distributed on an\n * \"AS IS\" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY\n * KIND, either express or implied.  See the License for the\n * specific language governing permissions and limitations\n * under the License.\n */\n \n.weex-root * {\n  border-width: 0;\n  border-color: inherit;\n  border-style: solid;\n}\n\ndiv.weex-root {\n  min-height: 100%;\n}\n\n/**\n * slider will overflow in horizontal axis, which will cause container\n * horizontally expanding. below styles will prevent this from happening.\n */\n.weex-root {\n  width: 100%;\n  overflow-x: hidden;\n}\n\n.weex-root figure {\n  background-repeat: no-repeat;\n  background-position: 50% 50%;\n}\n\n.weex-flex-ct {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: flex;\n}\n\n.weex-ct {\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: flex;\n  position: relative;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n  -webkit-flex-direction: column;\n          flex-direction: column;\n  -webkit-flex-shrink: 0;\n          flex-shrink: 0;\n  -webkit-box-flex: 0;\n  -webkit-flex-grow: 0;\n          flex-grow: 0;\n  -webkit-flex-basis: auto;\n          flex-basis: auto;\n  -webkit-box-align: stretch;\n  -webkit-align-items: stretch;\n          align-items: stretch;\n  -webkit-align-content: flex-start;\n          align-content: flex-start;\n  border: 0 solid black;\n  margin: 0;\n  padding: 0;\n  min-width: 0;\n}\n\n.weex-ct.horizontal {\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n  -webkit-flex-direction: row;\n          flex-direction: row;\n}\n\n.weex-el {\n  display: block;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  position: relative;\n  -webkit-flex-shrink: 0;\n          flex-shrink: 0;\n  -webkit-box-flex: 0;\n  -webkit-flex-grow: 0;\n          flex-grow: 0;\n  -webkit-flex-basis: auto;\n          flex-basis: auto;\n  border: 0 solid black;\n  margin: 0;\n  padding: 0;\n  min-width: 0;\n}\n\n.weex-text {\n  display: -webkit-box;\n  display: -moz-box;\n  -webkit-box-orient: vertical;\n  position: relative;\n  white-space: pre-wrap;  /* not using 'pre': support auto line feed. */\n  font-size: 0.4266666666666667rem;\n  word-wrap: break-word;\n  overflow: hidden; /* it'll be clipped if the height is not high enough. */\n}\n\n.weex-image {\n  background-repeat: no-repeat;\n  background-position: 50% 50%;\n  background-size: 100% 100%;\n}\n\n.weex-a {\n  text-decoration: none;\n}\n\n.weex-ios-sticky {\n  position: -webkit-sticky !important;\n  position: sticky !important;\n  z-index: 9999;\n  top: 0;\n}\n\n.weex-fixed {\n  position: fixed;\n  z-index: 1;\n}\n\n.weex-sticky {\n  position: fixed;\n  top: 0;\n  z-index: 9999;\n}\n", undefined);

  // 7.1.4 ToInteger
  var ceil = Math.ceil;
  var floor = Math.floor;
  var _toInteger = function _toInteger(it) {
    return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
  };

  // 7.2.1 RequireObjectCoercible(argument)
  var _defined = function _defined(it) {
    if (it == undefined) {
      throw TypeError("Can't call method on  " + it);
    }
    return it;
  };

  // true  -> String#at
  // false -> String#codePointAt
  var _stringAt = function _stringAt(TO_STRING) {
    return function (that, pos) {
      var s = String(_defined(that));
      var i = _toInteger(pos);
      var l = s.length;
      var a, b;
      if (i < 0 || i >= l) {
        return TO_STRING ? '' : undefined;
      }
      a = s.charCodeAt(i);
      return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff ? TO_STRING ? s.charAt(i) : a : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
    };
  };

  var _library = false;

  function createCommonjsModule(fn, module) {
    return module = { exports: {} }, fn(module, module.exports), module.exports;
  }

  var _global = createCommonjsModule(function (module) {
    // https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
    var global = module.exports = typeof window != 'undefined' && window.Math == Math ? window : typeof self != 'undefined' && self.Math == Math ? self
    // eslint-disable-next-line no-new-func
    : Function('return this')();
    if (typeof __g == 'number') {
      __g = global;
    } // eslint-disable-line no-undef
  });

  var _core = createCommonjsModule(function (module) {
    var core = module.exports = { version: '2.5.2' };
    if (typeof __e == 'number') {
      __e = core;
    } // eslint-disable-line no-undef
  });

  var _core_1 = _core.version;

  var _isObject = function _isObject(it) {
    return (typeof it === 'undefined' ? 'undefined' : _typeof(it)) === 'object' ? it !== null : typeof it === 'function';
  };

  var _anObject = function _anObject(it) {
    if (!_isObject(it)) {
      throw TypeError(it + ' is not an object!');
    }
    return it;
  };

  var _fails = function _fails(exec) {
    try {
      return !!exec();
    } catch (e) {
      return true;
    }
  };

  // Thank's IE8 for his funny defineProperty
  var _descriptors = !_fails(function () {
    return Object.defineProperty({}, 'a', { get: function get() {
        return 7;
      } }).a != 7;
  });

  var document$1 = _global.document;
  // typeof document.createElement is 'object' in old IE
  var is = _isObject(document$1) && _isObject(document$1.createElement);
  var _domCreate = function _domCreate(it) {
    return is ? document$1.createElement(it) : {};
  };

  var _ie8DomDefine = !_descriptors && !_fails(function () {
    return Object.defineProperty(_domCreate('div'), 'a', { get: function get() {
        return 7;
      } }).a != 7;
  });

  // 7.1.1 ToPrimitive(input [, PreferredType])

  // instead of the ES6 spec version, we didn't implement @@toPrimitive case
  // and the second argument - flag - preferred type is a string
  var _toPrimitive = function _toPrimitive(it, S) {
    if (!_isObject(it)) {
      return it;
    }
    var fn, val;
    if (S && typeof (fn = it.toString) == 'function' && !_isObject(val = fn.call(it))) {
      return val;
    }
    if (typeof (fn = it.valueOf) == 'function' && !_isObject(val = fn.call(it))) {
      return val;
    }
    if (!S && typeof (fn = it.toString) == 'function' && !_isObject(val = fn.call(it))) {
      return val;
    }
    throw TypeError("Can't convert object to primitive value");
  };

  var dP = Object.defineProperty;

  var f = _descriptors ? Object.defineProperty : function defineProperty(O, P, Attributes) {
    _anObject(O);
    P = _toPrimitive(P, true);
    _anObject(Attributes);
    if (_ie8DomDefine) {
      try {
        return dP(O, P, Attributes);
      } catch (e) {/* empty */}
    }
    if ('get' in Attributes || 'set' in Attributes) {
      throw TypeError('Accessors not supported!');
    }
    if ('value' in Attributes) {
      O[P] = Attributes.value;
    }
    return O;
  };

  var _objectDp = {
    f: f
  };

  var _propertyDesc = function _propertyDesc(bitmap, value) {
    return {
      enumerable: !(bitmap & 1),
      configurable: !(bitmap & 2),
      writable: !(bitmap & 4),
      value: value
    };
  };

  var _hide = _descriptors ? function (object, key, value) {
    return _objectDp.f(object, key, _propertyDesc(1, value));
  } : function (object, key, value) {
    object[key] = value;
    return object;
  };

  var hasOwnProperty = {}.hasOwnProperty;
  var _has = function _has(it, key) {
    return hasOwnProperty.call(it, key);
  };

  var id = 0;
  var px = Math.random();
  var _uid = function _uid(key) {
    return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
  };

  var _redefine = createCommonjsModule(function (module) {
    var SRC = _uid('src');
    var TO_STRING = 'toString';
    var $toString = Function[TO_STRING];
    var TPL = ('' + $toString).split(TO_STRING);

    _core.inspectSource = function (it) {
      return $toString.call(it);
    };

    (module.exports = function (O, key, val, safe) {
      var isFunction = typeof val == 'function';
      if (isFunction) {
        _has(val, 'name') || _hide(val, 'name', key);
      }
      if (O[key] === val) {
        return;
      }
      if (isFunction) {
        _has(val, SRC) || _hide(val, SRC, O[key] ? '' + O[key] : TPL.join(String(key)));
      }
      if (O === _global) {
        O[key] = val;
      } else if (!safe) {
        delete O[key];
        _hide(O, key, val);
      } else if (O[key]) {
        O[key] = val;
      } else {
        _hide(O, key, val);
      }
      // add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
    })(Function.prototype, TO_STRING, function toString() {
      return typeof this == 'function' && this[SRC] || $toString.call(this);
    });
  });

  var _aFunction = function _aFunction(it) {
    if (typeof it != 'function') {
      throw TypeError(it + ' is not a function!');
    }
    return it;
  };

  // optional / simple context binding

  var _ctx = function _ctx(fn, that, length) {
    _aFunction(fn);
    if (that === undefined) {
      return fn;
    }
    switch (length) {
      case 1:
        return function (a) {
          return fn.call(that, a);
        };
      case 2:
        return function (a, b) {
          return fn.call(that, a, b);
        };
      case 3:
        return function (a, b, c) {
          return fn.call(that, a, b, c);
        };
    }
    return function () /* ...args */{
      return fn.apply(that, arguments);
    };
  };

  var PROTOTYPE = 'prototype';

  var $export = function $export(type, name, source) {
    var IS_FORCED = type & $export.F;
    var IS_GLOBAL = type & $export.G;
    var IS_STATIC = type & $export.S;
    var IS_PROTO = type & $export.P;
    var IS_BIND = type & $export.B;
    var target = IS_GLOBAL ? _global : IS_STATIC ? _global[name] || (_global[name] = {}) : (_global[name] || {})[PROTOTYPE];
    var exports = IS_GLOBAL ? _core : _core[name] || (_core[name] = {});
    var expProto = exports[PROTOTYPE] || (exports[PROTOTYPE] = {});
    var key, own, out, exp;
    if (IS_GLOBAL) {
      source = name;
    }
    for (key in source) {
      // contains in native
      own = !IS_FORCED && target && target[key] !== undefined;
      // export native or passed
      out = (own ? target : source)[key];
      // bind timers to global for call from export context
      exp = IS_BIND && own ? _ctx(out, _global) : IS_PROTO && typeof out == 'function' ? _ctx(Function.call, out) : out;
      // extend global
      if (target) {
        _redefine(target, key, out, type & $export.U);
      }
      // export
      if (exports[key] != out) {
        _hide(exports, key, exp);
      }
      if (IS_PROTO && expProto[key] != out) {
        expProto[key] = out;
      }
    }
  };
  _global.core = _core;
  // type bitmap
  $export.F = 1; // forced
  $export.G = 2; // global
  $export.S = 4; // static
  $export.P = 8; // proto
  $export.B = 16; // bind
  $export.W = 32; // wrap
  $export.U = 64; // safe
  $export.R = 128; // real proto method for `library`
  var _export = $export;

  var _iterators = {};

  var toString = {}.toString;

  var _cof = function _cof(it) {
    return toString.call(it).slice(8, -1);
  };

  // fallback for non-array-like ES3 and non-enumerable old V8 strings

  // eslint-disable-next-line no-prototype-builtins
  var _iobject = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
    return _cof(it) == 'String' ? it.split('') : Object(it);
  };

  // to indexed object, toObject with fallback for non-array-like ES3 strings


  var _toIobject = function _toIobject(it) {
    return _iobject(_defined(it));
  };

  // 7.1.15 ToLength

  var min = Math.min;
  var _toLength = function _toLength(it) {
    return it > 0 ? min(_toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
  };

  var max = Math.max;
  var min$1 = Math.min;
  var _toAbsoluteIndex = function _toAbsoluteIndex(index, length) {
    index = _toInteger(index);
    return index < 0 ? max(index + length, 0) : min$1(index, length);
  };

  // false -> Array#indexOf
  // true  -> Array#includes


  var _arrayIncludes = function _arrayIncludes(IS_INCLUDES) {
    return function ($this, el, fromIndex) {
      var O = _toIobject($this);
      var length = _toLength(O.length);
      var index = _toAbsoluteIndex(fromIndex, length);
      var value;
      // Array#includes uses SameValueZero equality algorithm
      // eslint-disable-next-line no-self-compare
      if (IS_INCLUDES && el != el) {
        while (length > index) {
          value = O[index++];
          // eslint-disable-next-line no-self-compare
          if (value != value) {
            return true;
          }
          // Array#indexOf ignores holes, Array#includes - not
        }
      } else {
        for (; length > index; index++) {
          if (IS_INCLUDES || index in O) {
            if (O[index] === el) {
              return IS_INCLUDES || index || 0;
            }
          }
        }
      }return !IS_INCLUDES && -1;
    };
  };

  var SHARED = '__core-js_shared__';
  var store = _global[SHARED] || (_global[SHARED] = {});
  var _shared = function _shared(key) {
    return store[key] || (store[key] = {});
  };

  var shared = _shared('keys');

  var _sharedKey = function _sharedKey(key) {
    return shared[key] || (shared[key] = _uid(key));
  };

  var arrayIndexOf = _arrayIncludes(false);
  var IE_PROTO$1 = _sharedKey('IE_PROTO');

  var _objectKeysInternal = function _objectKeysInternal(object, names) {
    var O = _toIobject(object);
    var i = 0;
    var result = [];
    var key;
    for (key in O) {
      if (key != IE_PROTO$1) {
        _has(O, key) && result.push(key);
      }
    }
    // Don't enum bug & hidden keys
    while (names.length > i) {
      if (_has(O, key = names[i++])) {
        ~arrayIndexOf(result, key) || result.push(key);
      }
    }
    return result;
  };

  // IE 8- don't enum bug keys
  var _enumBugKeys = 'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'.split(',');

  // 19.1.2.14 / 15.2.3.14 Object.keys(O)


  var _objectKeys = Object.keys || function keys(O) {
    return _objectKeysInternal(O, _enumBugKeys);
  };

  var _objectDps = _descriptors ? Object.defineProperties : function defineProperties(O, Properties) {
    _anObject(O);
    var keys = _objectKeys(Properties);
    var length = keys.length;
    var i = 0;
    var P;
    while (length > i) {
      _objectDp.f(O, P = keys[i++], Properties[P]);
    }
    return O;
  };

  var document$2 = _global.document;
  var _html = document$2 && document$2.documentElement;

  // 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])


  var IE_PROTO = _sharedKey('IE_PROTO');
  var Empty = function Empty() {/* empty */};
  var PROTOTYPE$1 = 'prototype';

  // Create object with fake `null` prototype: use iframe Object with cleared prototype
  var _createDict = function createDict() {
    // Thrash, waste and sodomy: IE GC bug
    var iframe = _domCreate('iframe');
    var i = _enumBugKeys.length;
    var lt = '<';
    var gt = '>';
    var iframeDocument;
    iframe.style.display = 'none';
    _html.appendChild(iframe);
    iframe.src = 'javascript:'; // eslint-disable-line no-script-url
    // createDict = iframe.contentWindow.Object;
    // html.removeChild(iframe);
    iframeDocument = iframe.contentWindow.document;
    iframeDocument.open();
    iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
    iframeDocument.close();
    _createDict = iframeDocument.F;
    while (i--) {
      delete _createDict[PROTOTYPE$1][_enumBugKeys[i]];
    }
    return _createDict();
  };

  var _objectCreate = Object.create || function create(O, Properties) {
    var result;
    if (O !== null) {
      Empty[PROTOTYPE$1] = _anObject(O);
      result = new Empty();
      Empty[PROTOTYPE$1] = null;
      // add "__proto__" for Object.getPrototypeOf polyfill
      result[IE_PROTO] = O;
    } else {
      result = _createDict();
    }
    return Properties === undefined ? result : _objectDps(result, Properties);
  };

  var _wks = createCommonjsModule(function (module) {
    var store = _shared('wks');

    var _Symbol = _global.Symbol;
    var USE_SYMBOL = typeof _Symbol == 'function';

    var $exports = module.exports = function (name) {
      return store[name] || (store[name] = USE_SYMBOL && _Symbol[name] || (USE_SYMBOL ? _Symbol : _uid)('Symbol.' + name));
    };

    $exports.store = store;
  });

  var def = _objectDp.f;

  var TAG = _wks('toStringTag');

  var _setToStringTag = function _setToStringTag(it, tag, stat) {
    if (it && !_has(it = stat ? it : it.prototype, TAG)) {
      def(it, TAG, { configurable: true, value: tag });
    }
  };

  var IteratorPrototype = {};

  // 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
  _hide(IteratorPrototype, _wks('iterator'), function () {
    return this;
  });

  var _iterCreate = function _iterCreate(Constructor, NAME, next) {
    Constructor.prototype = _objectCreate(IteratorPrototype, { next: _propertyDesc(1, next) });
    _setToStringTag(Constructor, NAME + ' Iterator');
  };

  // 7.1.13 ToObject(argument)

  var _toObject = function _toObject(it) {
    return Object(_defined(it));
  };

  // 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)


  var IE_PROTO$2 = _sharedKey('IE_PROTO');
  var ObjectProto = Object.prototype;

  var _objectGpo = Object.getPrototypeOf || function (O) {
    O = _toObject(O);
    if (_has(O, IE_PROTO$2)) {
      return O[IE_PROTO$2];
    }
    if (typeof O.constructor == 'function' && O instanceof O.constructor) {
      return O.constructor.prototype;
    }return O instanceof Object ? ObjectProto : null;
  };

  var ITERATOR = _wks('iterator');
  var BUGGY = !([].keys && 'next' in [].keys()); // Safari has buggy iterators w/o `next`
  var FF_ITERATOR = '@@iterator';
  var KEYS = 'keys';
  var VALUES = 'values';

  var returnThis = function returnThis() {
    return this;
  };

  var _iterDefine = function _iterDefine(Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
    _iterCreate(Constructor, NAME, next);
    var getMethod = function getMethod(kind) {
      if (!BUGGY && kind in proto) {
        return proto[kind];
      }
      switch (kind) {
        case KEYS:
          return function keys() {
            return new Constructor(this, kind);
          };
        case VALUES:
          return function values() {
            return new Constructor(this, kind);
          };
      }return function entries() {
        return new Constructor(this, kind);
      };
    };
    var TAG = NAME + ' Iterator';
    var DEF_VALUES = DEFAULT == VALUES;
    var VALUES_BUG = false;
    var proto = Base.prototype;
    var $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT];
    var $default = $native || getMethod(DEFAULT);
    var $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined;
    var $anyNative = NAME == 'Array' ? proto.entries || $native : $native;
    var methods, key, IteratorPrototype;
    // Fix native
    if ($anyNative) {
      IteratorPrototype = _objectGpo($anyNative.call(new Base()));
      if (IteratorPrototype !== Object.prototype && IteratorPrototype.next) {
        // Set @@toStringTag to native iterators
        _setToStringTag(IteratorPrototype, TAG, true);
        // fix for some old engines
        if (!_library && !_has(IteratorPrototype, ITERATOR)) {
          _hide(IteratorPrototype, ITERATOR, returnThis);
        }
      }
    }
    // fix Array#{values, @@iterator}.name in V8 / FF
    if (DEF_VALUES && $native && $native.name !== VALUES) {
      VALUES_BUG = true;
      $default = function values() {
        return $native.call(this);
      };
    }
    // Define iterator
    if ((!_library || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
      _hide(proto, ITERATOR, $default);
    }
    // Plug for library
    _iterators[NAME] = $default;
    _iterators[TAG] = returnThis;
    if (DEFAULT) {
      methods = {
        values: DEF_VALUES ? $default : getMethod(VALUES),
        keys: IS_SET ? $default : getMethod(KEYS),
        entries: $entries
      };
      if (FORCED) {
        for (key in methods) {
          if (!(key in proto)) {
            _redefine(proto, key, methods[key]);
          }
        }
      } else {
        _export(_export.P + _export.F * (BUGGY || VALUES_BUG), NAME, methods);
      }
    }
    return methods;
  };

  var $at = _stringAt(true);

  // 21.1.3.27 String.prototype[@@iterator]()
  _iterDefine(String, 'String', function (iterated) {
    this._t = String(iterated); // target
    this._i = 0; // next index
    // 21.1.5.2.1 %StringIteratorPrototype%.next()
  }, function () {
    var O = this._t;
    var index = this._i;
    var point;
    if (index >= O.length) {
      return { value: undefined, done: true };
    }
    point = $at(O, index);
    this._i += point.length;
    return { value: point, done: false };
  });

  // call something on iterator step with safe closing on error

  var _iterCall = function _iterCall(iterator, fn, value, entries) {
    try {
      return entries ? fn(_anObject(value)[0], value[1]) : fn(value);
      // 7.4.6 IteratorClose(iterator, completion)
    } catch (e) {
      var ret = iterator['return'];
      if (ret !== undefined) {
        _anObject(ret.call(iterator));
      }
      throw e;
    }
  };

  // check on default Array iterator

  var ITERATOR$1 = _wks('iterator');
  var ArrayProto = Array.prototype;

  var _isArrayIter = function _isArrayIter(it) {
    return it !== undefined && (_iterators.Array === it || ArrayProto[ITERATOR$1] === it);
  };

  var _createProperty = function _createProperty(object, index, value) {
    if (index in object) {
      _objectDp.f(object, index, _propertyDesc(0, value));
    } else {
      object[index] = value;
    }
  };

  // getting tag from 19.1.3.6 Object.prototype.toString()

  var TAG$1 = _wks('toStringTag');
  // ES3 wrong here
  var ARG = _cof(function () {
    return arguments;
  }()) == 'Arguments';

  // fallback for IE11 Script Access Denied error
  var tryGet = function tryGet(it, key) {
    try {
      return it[key];
    } catch (e) {/* empty */}
  };

  var _classof = function _classof(it) {
    var O, T, B;
    return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (T = tryGet(O = Object(it), TAG$1)) == 'string' ? T
    // builtinTag case
    : ARG ? _cof(O)
    // ES3 arguments fallback
    : (B = _cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
  };

  var ITERATOR$2 = _wks('iterator');

  var core_getIteratorMethod = _core.getIteratorMethod = function (it) {
    if (it != undefined) {
      return it[ITERATOR$2] || it['@@iterator'] || _iterators[_classof(it)];
    }
  };

  var ITERATOR$3 = _wks('iterator');
  var SAFE_CLOSING = false;

  try {
    var riter = [7][ITERATOR$3]();
    riter['return'] = function () {
      SAFE_CLOSING = true;
    };
    // eslint-disable-next-line no-throw-literal
  } catch (e) {/* empty */}

  var _iterDetect = function _iterDetect(exec, skipClosing) {
    if (!skipClosing && !SAFE_CLOSING) {
      return false;
    }
    var safe = false;
    try {
      var arr = [7];
      var iter = arr[ITERATOR$3]();
      iter.next = function () {
        return { done: safe = true };
      };
      arr[ITERATOR$3] = function () {
        return iter;
      };
      exec(arr);
    } catch (e) {/* empty */}
    return safe;
  };

  _export(_export.S + _export.F * !_iterDetect(function (iter) {}), 'Array', {
    // 22.1.2.1 Array.from(arrayLike, mapfn = undefined, thisArg = undefined)
    from: function from(arrayLike /*  mapfn = undefined, thisArg = undefined */) {
      var O = _toObject(arrayLike);
      var C = typeof this == 'function' ? this : Array;
      var aLen = arguments.length;
      var mapfn = aLen > 1 ? arguments[1] : undefined;
      var mapping = mapfn !== undefined;
      var index = 0;
      var iterFn = core_getIteratorMethod(O);
      var length, result, step, iterator;
      if (mapping) {
        mapfn = _ctx(mapfn, aLen > 2 ? arguments[2] : undefined, 2);
      }
      // if object isn't iterable or it's array with default iterator - use simple case
      if (iterFn != undefined && !(C == Array && _isArrayIter(iterFn))) {
        for (iterator = iterFn.call(O), result = new C(); !(step = iterator.next()).done; index++) {
          _createProperty(result, index, mapping ? _iterCall(iterator, mapfn, [step.value, index], true) : step.value);
        }
      } else {
        length = _toLength(O.length);
        for (result = new C(length); length > index; index++) {
          _createProperty(result, index, mapping ? mapfn(O[index], index) : O[index]);
        }
      }
      result.length = index;
      return result;
    }
  });

  var from = _core.Array.from;

  var f$1 = Object.getOwnPropertySymbols;

  var _objectGops = {
    f: f$1
  };

  var f$2 = {}.propertyIsEnumerable;

  var _objectPie = {
    f: f$2
  };

  // 19.1.2.1 Object.assign(target, source, ...)


  var $assign = Object.assign;

  // should work with symbols and should have deterministic property order (V8 bug)
  var _objectAssign = !$assign || _fails(function () {
    var A = {};
    var B = {};
    // eslint-disable-next-line no-undef
    var S = Symbol();
    var K = 'abcdefghijklmnopqrst';
    A[S] = 7;
    K.split('').forEach(function (k) {
      B[k] = k;
    });
    return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
  }) ? function assign(target, source) {
    var arguments$1 = arguments;
    // eslint-disable-line no-unused-vars
    var T = _toObject(target);
    var aLen = arguments.length;
    var index = 1;
    var getSymbols = _objectGops.f;
    var isEnum = _objectPie.f;
    while (aLen > index) {
      var S = _iobject(arguments$1[index++]);
      var keys = getSymbols ? _objectKeys(S).concat(getSymbols(S)) : _objectKeys(S);
      var length = keys.length;
      var j = 0;
      var key;
      while (length > j) {
        if (isEnum.call(S, key = keys[j++])) {
          T[key] = S[key];
        }
      }
    }return T;
  } : $assign;

  // 19.1.3.1 Object.assign(target, source)


  _export(_export.S + _export.F, 'Object', { assign: _objectAssign });

  var assign = _core.Object.assign;

  var gOPD = Object.getOwnPropertyDescriptor;

  var f$3 = _descriptors ? gOPD : function getOwnPropertyDescriptor(O, P) {
    O = _toIobject(O);
    P = _toPrimitive(P, true);
    if (_ie8DomDefine) {
      try {
        return gOPD(O, P);
      } catch (e) {/* empty */}
    }
    if (_has(O, P)) {
      return _propertyDesc(!_objectPie.f.call(O, P), O[P]);
    }
  };

  var _objectGopd = {
    f: f$3
  };

  // Works with __proto__ only. Old v8 can't work with null proto objects.
  /* eslint-disable no-proto */

  var check = function check(O, proto) {
    _anObject(O);
    if (!_isObject(proto) && proto !== null) {
      throw TypeError(proto + ": can't set as prototype!");
    }
  };
  var _setProto = {
    set: Object.setPrototypeOf || ('__proto__' in {} ? // eslint-disable-line
    function (test, buggy, set) {
      try {
        set = _ctx(Function.call, _objectGopd.f(Object.prototype, '__proto__').set, 2);
        set(test, []);
        buggy = !(test instanceof Array);
      } catch (e) {
        buggy = true;
      }
      return function setPrototypeOf(O, proto) {
        check(O, proto);
        if (buggy) {
          O.__proto__ = proto;
        } else {
          set(O, proto);
        }
        return O;
      };
    }({}, false) : undefined),
    check: check
  };

  // 19.1.3.19 Object.setPrototypeOf(O, proto)

  _export(_export.S, 'Object', { setPrototypeOf: _setProto.set });

  var setPrototypeOf = _core.Object.setPrototypeOf;

  // 19.1.3.6 Object.prototype.toString()

  var test = {};
  test[_wks('toStringTag')] = 'z';
  if (test + '' != '[object z]') {
    _redefine(Object.prototype, 'toString', function toString() {
      return '[object ' + _classof(this) + ']';
    }, true);
  }

  // 22.1.3.31 Array.prototype[@@unscopables]
  var UNSCOPABLES = _wks('unscopables');
  var ArrayProto$1 = Array.prototype;
  if (ArrayProto$1[UNSCOPABLES] == undefined) {
    _hide(ArrayProto$1, UNSCOPABLES, {});
  }
  var _addToUnscopables = function _addToUnscopables(key) {
    ArrayProto$1[UNSCOPABLES][key] = true;
  };

  var _iterStep = function _iterStep(done, value) {
    return { value: value, done: !!done };
  };

  // 22.1.3.4 Array.prototype.entries()
  // 22.1.3.13 Array.prototype.keys()
  // 22.1.3.29 Array.prototype.values()
  // 22.1.3.30 Array.prototype[@@iterator]()
  var es6_array_iterator = _iterDefine(Array, 'Array', function (iterated, kind) {
    this._t = _toIobject(iterated); // target
    this._i = 0; // next index
    this._k = kind; // kind
    // 22.1.5.2.1 %ArrayIteratorPrototype%.next()
  }, function () {
    var O = this._t;
    var kind = this._k;
    var index = this._i++;
    if (!O || index >= O.length) {
      this._t = undefined;
      return _iterStep(1);
    }
    if (kind == 'keys') {
      return _iterStep(0, index);
    }
    if (kind == 'values') {
      return _iterStep(0, O[index]);
    }
    return _iterStep(0, [index, O[index]]);
  }, 'values');

  // argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
  _iterators.Arguments = _iterators.Array;

  _addToUnscopables('keys');
  _addToUnscopables('values');
  _addToUnscopables('entries');

  var ITERATOR$4 = _wks('iterator');
  var TO_STRING_TAG = _wks('toStringTag');
  var ArrayValues = _iterators.Array;

  var DOMIterables = {
    CSSRuleList: true, // TODO: Not spec compliant, should be false.
    CSSStyleDeclaration: false,
    CSSValueList: false,
    ClientRectList: false,
    DOMRectList: false,
    DOMStringList: false,
    DOMTokenList: true,
    DataTransferItemList: false,
    FileList: false,
    HTMLAllCollection: false,
    HTMLCollection: false,
    HTMLFormElement: false,
    HTMLSelectElement: false,
    MediaList: true, // TODO: Not spec compliant, should be false.
    MimeTypeArray: false,
    NamedNodeMap: false,
    NodeList: true,
    PaintRequestList: false,
    Plugin: false,
    PluginArray: false,
    SVGLengthList: false,
    SVGNumberList: false,
    SVGPathSegList: false,
    SVGPointList: false,
    SVGStringList: false,
    SVGTransformList: false,
    SourceBufferList: false,
    StyleSheetList: true, // TODO: Not spec compliant, should be false.
    TextTrackCueList: false,
    TextTrackList: false,
    TouchList: false
  };

  for (var collections = _objectKeys(DOMIterables), i = 0; i < collections.length; i++) {
    var NAME = collections[i];
    var explicit = DOMIterables[NAME];
    var Collection = _global[NAME];
    var proto = Collection && Collection.prototype;
    var key;
    if (proto) {
      if (!proto[ITERATOR$4]) {
        _hide(proto, ITERATOR$4, ArrayValues);
      }
      if (!proto[TO_STRING_TAG]) {
        _hide(proto, TO_STRING_TAG, NAME);
      }
      _iterators[NAME] = ArrayValues;
      if (explicit) {
        for (key in es6_array_iterator) {
          if (!proto[key]) {
            _redefine(proto, key, es6_array_iterator[key], true);
          }
        }
      }
    }
  }

  var _anInstance = function _anInstance(it, Constructor, name, forbiddenField) {
    if (!(it instanceof Constructor) || forbiddenField !== undefined && forbiddenField in it) {
      throw TypeError(name + ': incorrect invocation!');
    }return it;
  };

  var _forOf = createCommonjsModule(function (module) {
    var BREAK = {};
    var RETURN = {};
    var exports = module.exports = function (iterable, entries, fn, that, ITERATOR) {
      var iterFn = ITERATOR ? function () {
        return iterable;
      } : core_getIteratorMethod(iterable);
      var f = _ctx(fn, that, entries ? 2 : 1);
      var index = 0;
      var length, step, iterator, result;
      if (typeof iterFn != 'function') {
        throw TypeError(iterable + ' is not iterable!');
      }
      // fast case for arrays with default iterator
      if (_isArrayIter(iterFn)) {
        for (length = _toLength(iterable.length); length > index; index++) {
          result = entries ? f(_anObject(step = iterable[index])[0], step[1]) : f(iterable[index]);
          if (result === BREAK || result === RETURN) {
            return result;
          }
        }
      } else {
        for (iterator = iterFn.call(iterable); !(step = iterator.next()).done;) {
          result = _iterCall(iterator, f, step.value, entries);
          if (result === BREAK || result === RETURN) {
            return result;
          }
        }
      }
    };
    exports.BREAK = BREAK;
    exports.RETURN = RETURN;
  });

  // 7.3.20 SpeciesConstructor(O, defaultConstructor)


  var SPECIES = _wks('species');
  var _speciesConstructor = function _speciesConstructor(O, D) {
    var C = _anObject(O).constructor;
    var S;
    return C === undefined || (S = _anObject(C)[SPECIES]) == undefined ? D : _aFunction(S);
  };

  // fast apply, http://jsperf.lnkit.com/fast-apply/5
  var _invoke = function _invoke(fn, args, that) {
    var un = that === undefined;
    switch (args.length) {
      case 0:
        return un ? fn() : fn.call(that);
      case 1:
        return un ? fn(args[0]) : fn.call(that, args[0]);
      case 2:
        return un ? fn(args[0], args[1]) : fn.call(that, args[0], args[1]);
      case 3:
        return un ? fn(args[0], args[1], args[2]) : fn.call(that, args[0], args[1], args[2]);
      case 4:
        return un ? fn(args[0], args[1], args[2], args[3]) : fn.call(that, args[0], args[1], args[2], args[3]);
    }return fn.apply(that, args);
  };

  var process$1 = _global.process;
  var setTask = _global.setImmediate;
  var clearTask = _global.clearImmediate;
  var MessageChannel = _global.MessageChannel;
  var Dispatch = _global.Dispatch;
  var counter = 0;
  var queue = {};
  var ONREADYSTATECHANGE = 'onreadystatechange';
  var defer;
  var channel;
  var port;
  var run = function run() {
    var id = +this;
    // eslint-disable-next-line no-prototype-builtins
    if (queue.hasOwnProperty(id)) {
      var fn = queue[id];
      delete queue[id];
      fn();
    }
  };
  var listener = function listener(event) {
    run.call(event.data);
  };
  // Node.js 0.9+ & IE10+ has setImmediate, otherwise:
  if (!setTask || !clearTask) {
    setTask = function setImmediate(fn) {
      var arguments$1 = arguments;

      var args = [];
      var i = 1;
      while (arguments.length > i) {
        args.push(arguments$1[i++]);
      }
      queue[++counter] = function () {
        // eslint-disable-next-line no-new-func
        _invoke(typeof fn == 'function' ? fn : Function(fn), args);
      };
      defer(counter);
      return counter;
    };
    clearTask = function clearImmediate(id) {
      delete queue[id];
    };
    // Node.js 0.8-
    if (_cof(process$1) == 'process') {
      defer = function defer(id) {
        process$1.nextTick(_ctx(run, id, 1));
      };
      // Sphere (JS game engine) Dispatch API
    } else if (Dispatch && Dispatch.now) {
      defer = function defer(id) {
        Dispatch.now(_ctx(run, id, 1));
      };
      // Browsers with MessageChannel, includes WebWorkers
    } else if (MessageChannel) {
      channel = new MessageChannel();
      port = channel.port2;
      channel.port1.onmessage = listener;
      defer = _ctx(port.postMessage, port, 1);
      // Browsers with postMessage, skip WebWorkers
      // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
    } else if (_global.addEventListener && typeof postMessage == 'function' && !_global.importScripts) {
      defer = function defer(id) {
        _global.postMessage(id + '', '*');
      };
      _global.addEventListener('message', listener, false);
      // IE8-
    } else if (ONREADYSTATECHANGE in _domCreate('script')) {
      defer = function defer(id) {
        _html.appendChild(_domCreate('script'))[ONREADYSTATECHANGE] = function () {
          _html.removeChild(this);
          run.call(id);
        };
      };
      // Rest old browsers
    } else {
      defer = function defer(id) {
        setTimeout(_ctx(run, id, 1), 0);
      };
    }
  }
  var _task = {
    set: setTask,
    clear: clearTask
  };

  var macrotask = _task.set;
  var Observer = _global.MutationObserver || _global.WebKitMutationObserver;
  var process$2 = _global.process;
  var Promise = _global.Promise;
  var isNode$1 = _cof(process$2) == 'process';

  var _microtask = function _microtask() {
    var head, last, notify;

    var flush = function flush() {
      var parent, fn;
      if (isNode$1 && (parent = process$2.domain)) {
        parent.exit();
      }
      while (head) {
        fn = head.fn;
        head = head.next;
        try {
          fn();
        } catch (e) {
          if (head) {
            notify();
          } else {
            last = undefined;
          }
          throw e;
        }
      }last = undefined;
      if (parent) {
        parent.enter();
      }
    };

    // Node.js
    if (isNode$1) {
      notify = function notify() {
        process$2.nextTick(flush);
      };
      // browsers with MutationObserver, except iOS Safari - https://github.com/zloirock/core-js/issues/339
    } else if (Observer && !(_global.navigator && _global.navigator.standalone)) {
      var toggle = true;
      var node = document.createTextNode('');
      new Observer(flush).observe(node, { characterData: true }); // eslint-disable-line no-new
      notify = function notify() {
        node.data = toggle = !toggle;
      };
      // environments with maybe non-completely correct, but existent Promise
    } else if (Promise && Promise.resolve) {
      var promise = Promise.resolve();
      notify = function notify() {
        promise.then(flush);
      };
      // for other environments - macrotask based on:
      // - setImmediate
      // - MessageChannel
      // - window.postMessag
      // - onreadystatechange
      // - setTimeout
    } else {
      notify = function notify() {
        // strange IE + webpack dev server bug - use .call(global)
        macrotask.call(_global, flush);
      };
    }

    return function (fn) {
      var task = { fn: fn, next: undefined };
      if (last) {
        last.next = task;
      }
      if (!head) {
        head = task;
        notify();
      }last = task;
    };
  };

  // 25.4.1.5 NewPromiseCapability(C)


  function PromiseCapability(C) {
    var resolve, reject;
    this.promise = new C(function ($$resolve, $$reject) {
      if (resolve !== undefined || reject !== undefined) {
        throw TypeError('Bad Promise constructor');
      }
      resolve = $$resolve;
      reject = $$reject;
    });
    this.resolve = _aFunction(resolve);
    this.reject = _aFunction(reject);
  }

  var f$4 = function f$4(C) {
    return new PromiseCapability(C);
  };

  var _newPromiseCapability = {
    f: f$4
  };

  var _perform = function _perform(exec) {
    try {
      return { e: false, v: exec() };
    } catch (e) {
      return { e: true, v: e };
    }
  };

  var _promiseResolve = function _promiseResolve(C, x) {
    _anObject(C);
    if (_isObject(x) && x.constructor === C) {
      return x;
    }
    var promiseCapability = _newPromiseCapability.f(C);
    var resolve = promiseCapability.resolve;
    resolve(x);
    return promiseCapability.promise;
  };

  var _redefineAll = function _redefineAll(target, src, safe) {
    for (var key in src) {
      _redefine(target, key, src[key], safe);
    }
    return target;
  };

  var SPECIES$1 = _wks('species');

  var _setSpecies = function _setSpecies(KEY) {
    var C = _global[KEY];
    if (_descriptors && C && !C[SPECIES$1]) {
      _objectDp.f(C, SPECIES$1, {
        configurable: true,
        get: function get() {
          return this;
        }
      });
    }
  };

  var task = _task.set;
  var microtask = _microtask();

  var PROMISE = 'Promise';
  var TypeError$1 = _global.TypeError;
  var process = _global.process;
  var $Promise = _global[PROMISE];
  var isNode = _classof(process) == 'process';
  var empty = function empty() {/* empty */};
  var Internal;
  var newGenericPromiseCapability;
  var OwnPromiseCapability;
  var Wrapper;
  var newPromiseCapability = newGenericPromiseCapability = _newPromiseCapability.f;

  var USE_NATIVE = !!function () {
    try {
      // correct subclassing with @@species support
      var promise = $Promise.resolve(1);
      var FakePromise = (promise.constructor = {})[_wks('species')] = function (exec) {
        exec(empty, empty);
      };
      // unhandled rejections tracking support, NodeJS Promise without it fails @@species test
      return (isNode || typeof PromiseRejectionEvent == 'function') && promise.then(empty) instanceof FakePromise;
    } catch (e) {/* empty */}
  }();

  // helpers
  var isThenable = function isThenable(it) {
    var then;
    return _isObject(it) && typeof (then = it.then) == 'function' ? then : false;
  };
  var notify = function notify(promise, isReject) {
    if (promise._n) {
      return;
    }
    promise._n = true;
    var chain = promise._c;
    microtask(function () {
      var value = promise._v;
      var ok = promise._s == 1;
      var i = 0;
      var run = function run(reaction) {
        var handler = ok ? reaction.ok : reaction.fail;
        var resolve = reaction.resolve;
        var reject = reaction.reject;
        var domain = reaction.domain;
        var result, then;
        try {
          if (handler) {
            if (!ok) {
              if (promise._h == 2) {
                onHandleUnhandled(promise);
              }
              promise._h = 1;
            }
            if (handler === true) {
              result = value;
            } else {
              if (domain) {
                domain.enter();
              }
              result = handler(value);
              if (domain) {
                domain.exit();
              }
            }
            if (result === reaction.promise) {
              reject(TypeError$1('Promise-chain cycle'));
            } else if (then = isThenable(result)) {
              then.call(result, resolve, reject);
            } else {
              resolve(result);
            }
          } else {
            reject(value);
          }
        } catch (e) {
          reject(e);
        }
      };
      while (chain.length > i) {
        run(chain[i++]);
      } // variable length - can't use forEach
      promise._c = [];
      promise._n = false;
      if (isReject && !promise._h) {
        onUnhandled(promise);
      }
    });
  };
  var onUnhandled = function onUnhandled(promise) {
    task.call(_global, function () {
      var value = promise._v;
      var unhandled = isUnhandled(promise);
      var result, handler, console;
      if (unhandled) {
        result = _perform(function () {
          if (isNode) {
            process.emit('unhandledRejection', value, promise);
          } else if (handler = _global.onunhandledrejection) {
            handler({ promise: promise, reason: value });
          } else if ((console = _global.console) && console.error) {
            console.error('Unhandled promise rejection', value);
          }
        });
        // Browsers should not trigger `rejectionHandled` event if it was handled here, NodeJS - should
        promise._h = isNode || isUnhandled(promise) ? 2 : 1;
      }promise._a = undefined;
      if (unhandled && result.e) {
        throw result.v;
      }
    });
  };
  var isUnhandled = function isUnhandled(promise) {
    if (promise._h == 1) {
      return false;
    }
    var chain = promise._a || promise._c;
    var i = 0;
    var reaction;
    while (chain.length > i) {
      reaction = chain[i++];
      if (reaction.fail || !isUnhandled(reaction.promise)) {
        return false;
      }
    }return true;
  };
  var onHandleUnhandled = function onHandleUnhandled(promise) {
    task.call(_global, function () {
      var handler;
      if (isNode) {
        process.emit('rejectionHandled', promise);
      } else if (handler = _global.onrejectionhandled) {
        handler({ promise: promise, reason: promise._v });
      }
    });
  };
  var $reject = function $reject(value) {
    var promise = this;
    if (promise._d) {
      return;
    }
    promise._d = true;
    promise = promise._w || promise; // unwrap
    promise._v = value;
    promise._s = 2;
    if (!promise._a) {
      promise._a = promise._c.slice();
    }
    notify(promise, true);
  };
  var $resolve = function $resolve(value) {
    var promise = this;
    var then;
    if (promise._d) {
      return;
    }
    promise._d = true;
    promise = promise._w || promise; // unwrap
    try {
      if (promise === value) {
        throw TypeError$1("Promise can't be resolved itself");
      }
      if (then = isThenable(value)) {
        microtask(function () {
          var wrapper = { _w: promise, _d: false }; // wrap
          try {
            then.call(value, _ctx($resolve, wrapper, 1), _ctx($reject, wrapper, 1));
          } catch (e) {
            $reject.call(wrapper, e);
          }
        });
      } else {
        promise._v = value;
        promise._s = 1;
        notify(promise, false);
      }
    } catch (e) {
      $reject.call({ _w: promise, _d: false }, e); // wrap
    }
  };

  // constructor polyfill
  if (!USE_NATIVE) {
    // 25.4.3.1 Promise(executor)
    $Promise = function Promise(executor) {
      _anInstance(this, $Promise, PROMISE, '_h');
      _aFunction(executor);
      Internal.call(this);
      try {
        executor(_ctx($resolve, this, 1), _ctx($reject, this, 1));
      } catch (err) {
        $reject.call(this, err);
      }
    };
    // eslint-disable-next-line no-unused-vars
    Internal = function Promise(executor) {
      this._c = []; // <- awaiting reactions
      this._a = undefined; // <- checked in isUnhandled reactions
      this._s = 0; // <- state
      this._d = false; // <- done
      this._v = undefined; // <- value
      this._h = 0; // <- rejection state, 0 - default, 1 - handled, 2 - unhandled
      this._n = false; // <- notify
    };
    Internal.prototype = _redefineAll($Promise.prototype, {
      // 25.4.5.3 Promise.prototype.then(onFulfilled, onRejected)
      then: function then(onFulfilled, onRejected) {
        var reaction = newPromiseCapability(_speciesConstructor(this, $Promise));
        reaction.ok = typeof onFulfilled == 'function' ? onFulfilled : true;
        reaction.fail = typeof onRejected == 'function' && onRejected;
        reaction.domain = isNode ? process.domain : undefined;
        this._c.push(reaction);
        if (this._a) {
          this._a.push(reaction);
        }
        if (this._s) {
          notify(this, false);
        }
        return reaction.promise;
      },
      // 25.4.5.1 Promise.prototype.catch(onRejected)
      'catch': function _catch(onRejected) {
        return this.then(undefined, onRejected);
      }
    });
    OwnPromiseCapability = function OwnPromiseCapability() {
      var promise = new Internal();
      this.promise = promise;
      this.resolve = _ctx($resolve, promise, 1);
      this.reject = _ctx($reject, promise, 1);
    };
    _newPromiseCapability.f = newPromiseCapability = function newPromiseCapability(C) {
      return C === $Promise || C === Wrapper ? new OwnPromiseCapability(C) : newGenericPromiseCapability(C);
    };
  }

  _export(_export.G + _export.W + _export.F * !USE_NATIVE, { Promise: $Promise });
  _setToStringTag($Promise, PROMISE);
  _setSpecies(PROMISE);
  Wrapper = _core[PROMISE];

  // statics
  _export(_export.S + _export.F * !USE_NATIVE, PROMISE, {
    // 25.4.4.5 Promise.reject(r)
    reject: function reject(r) {
      var capability = newPromiseCapability(this);
      var $$reject = capability.reject;
      $$reject(r);
      return capability.promise;
    }
  });
  _export(_export.S + _export.F * (_library || !USE_NATIVE), PROMISE, {
    // 25.4.4.6 Promise.resolve(x)
    resolve: function resolve(x) {
      return _promiseResolve(_library && this === Wrapper ? $Promise : this, x);
    }
  });
  _export(_export.S + _export.F * !(USE_NATIVE && _iterDetect(function (iter) {
    $Promise.all(iter)['catch'](empty);
  })), PROMISE, {
    // 25.4.4.1 Promise.all(iterable)
    all: function all(iterable) {
      var C = this;
      var capability = newPromiseCapability(C);
      var resolve = capability.resolve;
      var reject = capability.reject;
      var result = _perform(function () {
        var values = [];
        var index = 0;
        var remaining = 1;
        _forOf(iterable, false, function (promise) {
          var $index = index++;
          var alreadyCalled = false;
          values.push(undefined);
          remaining++;
          C.resolve(promise).then(function (value) {
            if (alreadyCalled) {
              return;
            }
            alreadyCalled = true;
            values[$index] = value;
            --remaining || resolve(values);
          }, reject);
        });
        --remaining || resolve(values);
      });
      if (result.e) {
        reject(result.v);
      }
      return capability.promise;
    },
    // 25.4.4.4 Promise.race(iterable)
    race: function race(iterable) {
      var C = this;
      var capability = newPromiseCapability(C);
      var reject = capability.reject;
      var result = _perform(function () {
        _forOf(iterable, false, function (promise) {
          C.resolve(promise).then(capability.resolve, reject);
        });
      });
      if (result.e) {
        reject(result.v);
      }
      return capability.promise;
    }
  });

  /*
   * Licensed to the Apache Software Foundation (ASF) under one
   * or more contributor license agreements.  See the NOTICE file
   * distributed with this work for additional information
   * regarding copyright ownership.  The ASF licenses this file
   * to you under the Apache License, Version 2.0 (the
   * "License"); you may not use this file except in compliance
   * with the License.  You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing,
   * software distributed under the License is distributed on an
   * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
   * KIND, either express or implied.  See the License for the
   * specific language governing permissions and limitations
   * under the License.
   */
  /* eslint-disable */

  var isInitialized = false;

  // major events supported:
  //   panstart
  //   panmove
  //   panend
  //   swipe
  //   longpress
  // extra events supported:
  //   dualtouchstart
  //   dualtouch
  //   dualtouchend
  //   tap
  //   doubletap
  //   pressend

  var doc = window.document;
  var docEl = doc.documentElement;
  var slice = Array.prototype.slice;
  var gestures = {};
  var lastTap = null;

  /**
   * find the closest common ancestor
   * if there's no one, return null
   *
   * @param  {Element} el1 first element
   * @param  {Element} el2 second element
   * @return {Element}     common ancestor
   */
  function getCommonAncestor(el1, el2) {
    var el = el1;
    while (el) {
      if (el.contains(el2) || el == el2) {
        return el;
      }
      el = el.parentNode;
    }
    return null;
  }

  /**
   * fire a HTMLEvent
   *
   * @param  {Element} element which element to fire a event on
   * @param  {string}  type    type of event
   * @param  {object}  extra   extra data for the event object
   */
  function fireEvent(element, type, extra) {
    var event = doc.createEvent('HTMLEvents');
    event.initEvent(type, true, true);

    if ((typeof extra === 'undefined' ? 'undefined' : _typeof(extra)) === 'object') {
      for (var p in extra) {
        event[p] = extra[p];
      }
    }

    /**
     * A flag to distinguish with other events with the same name generated
     * by another library in the same page.
     */
    event._for = 'weex';

    element.dispatchEvent(event);
  }

  /**
   * calc the transform
   * assume 4 points ABCD on the coordinate system
   * > rotate：angle rotating from AB to CD
   * > scale：scale ratio from AB to CD
   * > translate：translate shift from A to C
   *
   * @param  {number} x1 abscissa of A
   * @param  {number} y1 ordinate of A
   * @param  {number} x2 abscissa of B
   * @param  {number} y2 ordinate of B
   * @param  {number} x3 abscissa of C
   * @param  {number} y3 ordinate of C
   * @param  {number} x4 abscissa of D
   * @param  {number} y4 ordinate of D
   * @return {object}    transform object like
   *   {rotate, scale, translate[2], matrix[3][3]}
   */
  function calc(x1, y1, x2, y2, x3, y3, x4, y4) {
    var rotate = Math.atan2(y4 - y3, x4 - x3) - Math.atan2(y2 - y1, x2 - x1);
    var scale = Math.sqrt((Math.pow(y4 - y3, 2) + Math.pow(x4 - x3, 2)) / (Math.pow(y2 - y1, 2) + Math.pow(x2 - x1, 2)));
    var translate = [x3 - scale * x1 * Math.cos(rotate) + scale * y1 * Math.sin(rotate), y3 - scale * y1 * Math.cos(rotate) - scale * x1 * Math.sin(rotate)];

    return {
      rotate: rotate,
      scale: scale,
      translate: translate,
      matrix: [[scale * Math.cos(rotate), -scale * Math.sin(rotate), translate[0]], [scale * Math.sin(rotate), scale * Math.cos(rotate), translate[1]], [0, 0, 1]]
    };
  }

  /**
   * take over the touchstart events. Add new touches to the gestures.
   * If there is no previous records, then bind touchmove, tochend
   * and touchcancel events.
   * new touches initialized with state 'tapping', and within 500 milliseconds
   * if the state is still tapping, then trigger gesture 'press'.
   * If there are two touche points, then the 'dualtouchstart' is triggerd. The
   * node of the touch gesture is their cloest common ancestor.
   *
   * @event
   * @param  {event} event
   */
  function touchstartHandler(event) {

    if (Object.keys(gestures).length === 0) {
      docEl.addEventListener('touchmove', touchmoveHandler, true);
      docEl.addEventListener('touchend', touchendHandler, true);
      docEl.addEventListener('touchcancel', touchcancelHandler, true);
    }

    // record every touch
    for (var i = 0; i < event.changedTouches.length; i++) {
      var touch = event.changedTouches[i];
      var touchRecord = {};

      for (var p in touch) {
        touchRecord[p] = touch[p];
      }

      var gesture = {
        startTouch: touchRecord,
        startTime: Date.now(),
        status: 'tapping',
        element: event.srcElement || event.target,
        pressingHandler: setTimeout(function (element, touch) {
          return function () {
            if (gesture.status === 'tapping') {
              gesture.status = 'pressing';

              fireEvent(element, 'longpress', {
                // add touch data for weex
                touch: touch,
                touches: event.touches,
                changedTouches: event.changedTouches,
                touchEvent: event
              });
            }

            clearTimeout(gesture.pressingHandler);
            gesture.pressingHandler = null;
          };
        }(event.srcElement || event.target, event.changedTouches[i]), 500)
      };
      gestures[touch.identifier] = gesture;
    }

    if (Object.keys(gestures).length == 2) {
      var elements = [];

      for (var p in gestures) {
        elements.push(gestures[p].element);
      }

      fireEvent(getCommonAncestor(elements[0], elements[1]), 'dualtouchstart', {
        touches: slice.call(event.touches),
        touchEvent: event
      });
    }
  }

  /**
   * take over touchmove events, and handle pan and dual related gestures.
   *
   * 1. traverse every touch point：
   * > if 'tapping' and the shift is over 10 pixles, then it's a 'panning'.
   * 2. if there are two touch points, then calc the tranform and trigger
   *   'dualtouch'.
   *
   * @event
   * @param  {event} event
   */
  function touchmoveHandler(event) {
    for (var i = 0; i < event.changedTouches.length; i++) {
      var touch = event.changedTouches[i];
      var gesture = gestures[touch.identifier];

      if (!gesture) {
        return;
      }

      if (!gesture.lastTouch) {
        gesture.lastTouch = gesture.startTouch;
      }
      if (!gesture.lastTime) {
        gesture.lastTime = gesture.startTime;
      }
      if (!gesture.velocityX) {
        gesture.velocityX = 0;
      }
      if (!gesture.velocityY) {
        gesture.velocityY = 0;
      }
      if (!gesture.duration) {
        gesture.duration = 0;
      }

      var time = Date.now() - gesture.lastTime;
      var vx = (touch.clientX - gesture.lastTouch.clientX) / time;
      var vy = (touch.clientY - gesture.lastTouch.clientY) / time;

      var RECORD_DURATION = 70;
      if (time > RECORD_DURATION) {
        time = RECORD_DURATION;
      }
      if (gesture.duration + time > RECORD_DURATION) {
        gesture.duration = RECORD_DURATION - time;
      }

      gesture.velocityX = (gesture.velocityX * gesture.duration + vx * time) / (gesture.duration + time);
      gesture.velocityY = (gesture.velocityY * gesture.duration + vy * time) / (gesture.duration + time);
      gesture.duration += time;

      gesture.lastTouch = {};

      for (var p in touch) {
        gesture.lastTouch[p] = touch[p];
      }
      gesture.lastTime = Date.now();

      var displacementX = touch.clientX - gesture.startTouch.clientX;
      var displacementY = touch.clientY - gesture.startTouch.clientY;
      var distance = Math.sqrt(Math.pow(displacementX, 2) + Math.pow(displacementY, 2));
      var isVertical = !(Math.abs(displacementX) > Math.abs(displacementY));
      var direction = isVertical ? displacementY >= 0 ? 'down' : 'up' : displacementX >= 0 ? 'right' : 'left';

      // magic number 10: moving 10px means pan, not tap
      if ((gesture.status === 'tapping' || gesture.status === 'pressing') && distance > 10) {
        gesture.status = 'panning';
        gesture.isVertical = isVertical;
        gesture.direction = direction;

        fireEvent(gesture.element, 'panstart', {
          touch: touch,
          touches: event.touches,
          changedTouches: event.changedTouches,
          touchEvent: event,
          isVertical: gesture.isVertical,
          direction: direction
        });
      }

      if (gesture.status === 'panning') {
        gesture.panTime = Date.now();

        fireEvent(gesture.element, 'panmove', {
          displacementX: displacementX,
          displacementY: displacementY,
          touch: touch,
          touches: event.touches,
          changedTouches: event.changedTouches,
          touchEvent: event,
          isVertical: gesture.isVertical,
          direction: direction
        });
      }
    }

    if (Object.keys(gestures).length == 2) {
      var position = [];
      var current = [];
      var elements = [];
      var transform;

      for (var i = 0; i < event.touches.length; i++) {
        var touch = event.touches[i];
        var gesture = gestures[touch.identifier];
        position.push([gesture.startTouch.clientX, gesture.startTouch.clientY]);
        current.push([touch.clientX, touch.clientY]);
      }

      for (var p in gestures) {
        elements.push(gestures[p].element);
      }

      transform = calc(position[0][0], position[0][1], position[1][0], position[1][1], current[0][0], current[0][1], current[1][0], current[1][1]);
      fireEvent(getCommonAncestor(elements[0], elements[1]), 'dualtouch', {
        transform: transform,
        touches: event.touches,
        touchEvent: event
      });
    }
  }

  /**
   * handle touchend event
   *
   * 1. if there are tow touch points, then trigger 'dualtouchend'如
   *
   * 2. traverse every touch piont：
   * > if tapping, then trigger 'tap'.
   * If there is a tap 300 milliseconds before, then it's a 'doubletap'.
   * > if padding, then decide to trigger 'panend' or 'swipe'
   * > if pressing, then trigger 'pressend'.
   *
   * 3. remove listeners.
   *
   * @event
   * @param  {event} event
   */
  function touchendHandler(event) {

    if (Object.keys(gestures).length == 2) {
      var elements = [];
      for (var p in gestures) {
        elements.push(gestures[p].element);
      }
      fireEvent(getCommonAncestor(elements[0], elements[1]), 'dualtouchend', {
        touches: slice.call(event.touches),
        touchEvent: event
      });
    }

    for (var i = 0; i < event.changedTouches.length; i++) {
      var touch = event.changedTouches[i];
      var id = touch.identifier;
      var gesture = gestures[id];

      if (!gesture) {
        continue;
      }

      if (gesture.pressingHandler) {
        clearTimeout(gesture.pressingHandler);
        gesture.pressingHandler = null;
      }

      if (gesture.status === 'tapping') {
        gesture.timestamp = Date.now();
        // fire click, not tap.
        fireEvent(gesture.element, 'weex$tap', {
          touch: touch,
          touchEvent: event
        });

        if (lastTap && gesture.timestamp - lastTap.timestamp < 300) {
          fireEvent(gesture.element, 'doubletap', {
            touch: touch,
            touchEvent: event
          });
        }

        lastTap = gesture;
      }

      if (gesture.status === 'panning') {
        var now = Date.now();
        var duration = now - gesture.startTime;
        var displacementX = touch.clientX - gesture.startTouch.clientX;
        var displacementY = touch.clientY - gesture.startTouch.clientY;

        var velocity = Math.sqrt(gesture.velocityY * gesture.velocityY + gesture.velocityX * gesture.velocityX);
        var isSwipe = velocity > 0.5 && now - gesture.lastTime < 100;
        var extra = {
          duration: duration,
          isSwipe: isSwipe,
          velocityX: gesture.velocityX,
          velocityY: gesture.velocityY,
          displacementX: displacementX,
          displacementY: displacementY,
          touch: touch,
          touches: event.touches,
          changedTouches: event.changedTouches,
          touchEvent: event,
          isVertical: gesture.isVertical,
          direction: gesture.direction
        };

        fireEvent(gesture.element, 'panend', extra);
        if (isSwipe) {
          fireEvent(gesture.element, 'swipe', extra);
        }
      }

      if (gesture.status === 'pressing') {
        fireEvent(gesture.element, 'pressend', {
          touch: touch,
          touchEvent: event
        });
      }

      delete gestures[id];
    }

    if (Object.keys(gestures).length === 0) {
      docEl.removeEventListener('touchmove', touchmoveHandler, false);
      docEl.removeEventListener('touchend', touchendHandler, false);
      docEl.removeEventListener('touchcancel', touchcancelHandler, false);
    }
  }

  /**
   * handle touchcancel
   *
   * 1. if there are two touch points, then trigger 'dualtouchend'
   *
   * 2. traverse everty touch point:
   * > if pannnig, then trigger 'panend'
   * > if pressing, then trigger 'pressend'
   *
   * 3. remove listeners
   *
   * @event
   * @param  {event} event
   */
  function touchcancelHandler(event) {

    if (Object.keys(gestures).length == 2) {
      var elements = [];
      for (var p in gestures) {
        elements.push(gestures[p].element);
      }
      fireEvent(getCommonAncestor(elements[0], elements[1]), 'dualtouchend', {
        touches: slice.call(event.touches),
        touchEvent: event
      });
    }

    for (var i = 0; i < event.changedTouches.length; i++) {
      var touch = event.changedTouches[i];
      var id = touch.identifier;
      var gesture = gestures[id];

      if (!gesture) {
        continue;
      }

      if (gesture.pressingHandler) {
        clearTimeout(gesture.pressingHandler);
        gesture.pressingHandler = null;
      }

      if (gesture.status === 'panning') {
        fireEvent(gesture.element, 'panend', {
          touch: touch,
          touches: event.touches,
          changedTouches: event.changedTouches,
          touchEvent: event
        });
      }
      if (gesture.status === 'pressing') {
        fireEvent(gesture.element, 'pressend', {
          touch: touch,
          touchEvent: event
        });
      }
      delete gestures[id];
    }

    if (Object.keys(gestures).length === 0) {
      docEl.removeEventListener('touchmove', touchmoveHandler, true);
      docEl.removeEventListener('touchend', touchendHandler, true);
      docEl.removeEventListener('touchcancel', touchcancelHandler, true);
    }
  }

  if (!isInitialized) {
    docEl.addEventListener('touchstart', touchstartHandler, true);
    isInitialized = true;
  }

  var lib$2 = window.lib || (window.lib = {});

  /**
   * Version class.
   * @class lib.env~Version
   * @param {String} v - version number.
   */
  function Version(v) {
    Object.defineProperty(this, 'val', {
      value: v.toString(),
      enumerable: true
    });

    /**
     * larger than
     * @method gt
     * @param {String} v - version
     * @return {Boolean} result
     * @instance
     * @memberof Version
     */
    this.gt = function (v) {
      return Version.compare(this, v) > 0;
    };

    /**
     * larger than or equal to.
     * @method gte
     * @param {String} v - version
     * @return {Boolean} result
     * @instance
     * @memberof Version
     */
    this.gte = function (v) {
      return Version.compare(this, v) >= 0;
    };

    /**
     * less than.
     * @method lt
     * @param {String} v - version
     * @return {Boolean} result
     * @instance
     * @memberof Version
     */
    this.lt = function (v) {
      return Version.compare(this, v) < 0;
    };

    /**
     * less than or equal to.
     * @method lte
     * @param {String} v - version
     * @return {Boolean} result
     * @instance
     * @memberof Version
     */
    this.lte = function (v) {
      return Version.compare(this, v) <= 0;
    };

    /**
     * equal to.
     * @method eq
     * @param {String} v - version
     * @return {Boolean} equal to
     * @instance
     * @memberof Version
     */
    this.eq = function (v) {
      return Version.compare(this, v) === 0;
    };
  }

  /**
   * version number string.
   * @method toString
   * @return {String} current version number string.
   * @instance
   * @memberof Version
   */
  Version.prototype.toString = function () {
    return this.val;
  };

  /**
   * return current version number.
   * @method valueOf
   * @return {Boolean} version number
   * @instance
   * @memberof Version
   */
  Version.prototype.valueOf = function () {
    var v = this.val.split('.');
    var r = [];
    for (var i = 0; i < v.length; i++) {
      var n = parseInt(v[i], 10);
      if (isNaN(n)) {
        n = 0;
      }
      var s = n.toString();
      if (s.length < 5) {
        s = Array(6 - s.length).join('0') + s;
      }
      r.push(s);
      if (r.length === 1) {
        r.push('.');
      }
    }
    return parseFloat(r.join(''));
  };

  /**
   * compare two versions.
   * @method compare
   * @param {String} v1 - version1
   * @param {String} v2 - version2
   * @return {Number} 0 for equality，-1 for less than，1 for larger than.
   * @memberof Version
   */
  Version.compare = function (v1, v2) {
    v1 = v1.toString().split('.');
    v2 = v2.toString().split('.');
    for (var i = 0; i < v1.length || i < v2.length; i++) {
      var n1 = parseInt(v1[i], 10);
      var n2 = parseInt(v2[i], 10);
      if (window.isNaN(n1)) {
        n1 = 0;
      }
      if (window.isNaN(n2)) {
        n2 = 0;
      }
      if (n1 < n2) {
        return -1;
      } else if (n1 > n2) {
        return 1;
      }
    }
    return 0;
  };

  /**
   * 解析和操作版本号
   * @method version
   * @param {string} v - 需要解析的版本号
   * @return {lib.env~Version} Verson实例
   * @memberof lib
   */
  lib$2.version = function (v) {
    return new Version(v);
  };

  var lib$3 = window.lib || (window.lib = {});
  var env$1 = lib$3.env || (lib$3.env = {});

  var search = window.location.search.replace(/^\?/, '');
  env$1.params = {};
  if (search) {
    var params = search.split('&');
    for (var i$1 = 0; i$1 < params.length; i$1++) {
      params[i$1] = params[i$1].split('=');
      try {
        env$1.params[params[i$1][0]] = decodeURIComponent(params[i$1][1]);
      } catch (e) {
        env$1.params[params[i$1][0]] = params[i$1][1];
      }
    }
  }

  var lib$1 = window.lib || (window.lib = {});
  var env = lib$1.env || (lib$1.env = {});

  var ua = window.navigator.userAgent;
  var match;

  /**
   * os
   */

  match = ua.match(/Windows\sPhone\s(?:OS\s)?([\d.]+)/);
  if (match) {
    /**
     * @type {Object}
     * @memberof lib.env
     * @property {String} name - os name, e.g. Android/AndroidPad/iPhone/iPod/iPad/Windows Phone/unknown, etc.
     * @property {lib.env~Version} version - os version.
     * @property {Boolean} isWindowsPhone
     * @property {Boolean} isIPhone - is iPhone/iTouch
     * @property {Boolean} isIPad
     * @property {Boolean} isIOS
     * @property {Boolean} isAndroid
     * @property {Boolean} isAndroidPad
     */
    env.os = {
      name: 'Windows Phone',
      isWindowsPhone: true,
      version: match[1]
    };
  } else if (!!ua.match(/Safari/) && (match = ua.match(/Android[\s/]([\d.]+)/))) {
    env.os = {
      version: match[1]
    };

    if (ua.match(/Mobile\s+Safari/)) {
      env.os.name = 'Android';
      env.os.isAndroid = true;
    } else {
      env.os.name = 'AndroidPad';
      env.os.isAndroidPad = true;
    }
  } else if (match = ua.match(/(iPhone|iPad|iPod)/)) {
    var name = match[1];

    match = ua.match(/OS ([\d_.]+) like Mac OS X/);

    env.os = {
      name: name,
      isIPhone: name === 'iPhone' || name === 'iPod',
      isIPad: name === 'iPad',
      isIOS: true,
      version: match && match[1].split('_').join('.') || ''
    };
  } else {
    env.os = {
      name: 'unknown',
      version: '0.0.0'
    };
  }

  if (lib$1.version) {
    env.os.version = lib$1.version(env.os.version);
  }

  /**
   * browser
   */

  match = ua.match(/(?:UCWEB|UCBrowser\/)([\d.]+)/);

  if (match) {
    /**
     * @type {Object}
     * @memberof env
     * @property {String} name - browser name，e.g. UC/QQ/Firefox/Chrome/Android/Safari/iOS Webview/Chrome Webview/IE/IEMobile/unknown, etc.
     * @property {env~Version} version - browser version.
     * @property {Boolean} isUC
     * @property {Boolean} isQQ
     * @property {Boolean} isIE
     * @property {Boolean} isIEMobile
     * @property {Boolean} isIELikeWebkit
     * @property {Boolean} isChrome
     * @property {Boolean} isAndroid
     * @property {Boolean} isSafari
     * @property {Boolean} isWebview
     */
    env.browser = {
      name: 'UC',
      isUC: true,
      version: match[1]
    };
  } else if (match = ua.match(/MQQBrowser\/([\d.]+)/)) {
    env.browser = {
      name: 'QQ',
      isQQ: true,
      version: match[1]
    };
  } else if (match = ua.match(/Firefox\/([\d.]+)/)) {
    env.browser = {
      name: 'Firefox',
      isFirefox: true,
      version: match[1]
    };
  } else if ((match = ua.match(/MSIE\s([\d.]+)/)) || (match = ua.match(/IEMobile\/([\d.]+)/))) {
    env.browser = {
      version: match[1]
    };

    if (ua.match(/IEMobile/)) {
      env.browser.name = 'IEMobile';
      env.browser.isIEMobile = true;
    } else {
      env.browser.name = 'IE';
      env.browser.isIE = true;
    }

    if (ua.match(/Android|iPhone/)) {
      env.browser.isIELikeWebkit = true;
    }
  } else if (match = ua.match(/(?:Chrome|CriOS)\/([\d.]+)/)) {
    env.browser = {
      name: 'Chrome',
      isChrome: true,
      version: match[1]
    };

    if (ua.match(/Version\/[\d+.]+\s*Chrome/)) {
      env.browser.name = 'Chrome Webview';
      env.browser.isWebview = true;
    }
  } else if (!!ua.match(/Safari/) && (match = ua.match(/Android[\s/]([\d.]+)/))) {
    env.browser = {
      name: 'Android',
      isAndroid: true,
      version: match[1]
    };
  } else if (ua.match(/iPhone|iPad|iPod/)) {
    if (ua.match(/Safari/)) {
      match = ua.match(/Version\/([\d.]+)/);
      env.browser = {
        name: 'Safari',
        isSafari: true,
        version: match && match[1] || ''
      };
    } else {
      match = ua.match(/OS ([\d_.]+) like Mac OS X/);
      env.browser = {
        name: 'iOS Webview',
        isWebview: true,
        version: match && match[1].replace(/_/g, '.') || ''
      };
    }
  } else {
    env.browser = {
      name: 'unknown',
      version: '0.0.0'
    };
  }

  if (lib$1.version) {
    env.browser.version = lib$1.version(env.browser.version);
  }

  /*
   * Licensed to the Apache Software Foundation (ASF) under one
   * or more contributor license agreements.  See the NOTICE file
   * distributed with this work for additional information
   * regarding copyright ownership.  The ASF licenses this file
   * to you under the Apache License, Version 2.0 (the
   * "License"); you may not use this file except in compliance
   * with the License.  You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing,
   * software distributed under the License is distributed on an
   * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
   * KIND, either express or implied.  See the License for the
   * specific language governing permissions and limitations
   * under the License.
   */

  var toString$1 = Object.prototype.toString;

  /**
   * Strict object type check. Only returns true
   * for plain JavaScript objects.
   *
   * @param {*} obj
   * @return {Boolean}
   */
  var OBJECT_STRING = '[object Object]';
  function isPlainObject(obj) {
    return toString$1.call(obj) === OBJECT_STRING;
  }

  var ARRAY_STRING = '[object Array]';
  function isArray(arr) {
    return toString$1.call(arr) === ARRAY_STRING;
  }

  function isPrimitive(val) {
    return typeof value === 'string' || typeof value === 'number' || (typeof value === 'undefined' ? 'undefined' : _typeof(value)) === 'symbol' || typeof value === 'boolean';
  }

  function isDef(val) {
    return val !== undefined && val !== null;
  }

  /*
   * Licensed to the Apache Software Foundation (ASF) under one
   * or more contributor license agreements.  See the NOTICE file
   * distributed with this work for additional information
   * regarding copyright ownership.  The ASF licenses this file
   * to you under the Apache License, Version 2.0 (the
   * "License"); you may not use this file except in compliance
   * with the License.  You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing,
   * software distributed under the License is distributed on an
   * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
   * KIND, either express or implied.  See the License for the
   * specific language governing permissions and limitations
   * under the License.
   */
  /**
   * Mix properties into target object.
   * the rightest object's value has the highest priority.
   */
  function extend(to) {
    var args = [],
        len = arguments.length - 1;
    while (len-- > 0) {
      args[len] = arguments[len + 1];
    }if (!args || args.length <= 0) {
      return to;
    }
    args.forEach(function (from) {
      if ((typeof from === 'undefined' ? 'undefined' : _typeof(from)) !== 'object') {
        return;
      }
      for (var key in from) {
        to[key] = from[key];
      }
    });
    return to;
  }
  /**
   * Mix truthy or '' property values into target object.
   * mostly for merging styles. (that's why '' is falsy but still should be counted in.)
   * the rightest object's value has the highest priority.
   */
  function extendTruthy(to) {
    var args = [],
        len = arguments.length - 1;
    while (len-- > 0) {
      args[len] = arguments[len + 1];
    }if (!args || args.length <= 0) {
      return to;
    }
    args.forEach(function (from) {
      if ((typeof from === 'undefined' ? 'undefined' : _typeof(from)) !== 'object') {
        return;
      }
      var i;
      for (var key in from) {
        if (((i = from[key]) || i === '' || i === 0) && i !== 'undefined') {
          to[key] = i;
        }
      }
    });
    return to;
  }
  /**
   * Mix specified properties into target object.
   */
  function extendKeys(to, from, keys) {
    if (from === void 0) from = {};

    (keys || []).forEach(function (key) {
      from && (to[key] = from[key]);
    });
    return to;
  }
  /**
   * Extract specified properties from src to target object.
   */
  function extractKeys(to, from, keys) {
    if (from === void 0) from = {};

    if (!from) {
      return to;
    }
    (keys || []).forEach(function (key) {
      from && (to[key] = from[key]);
      from && delete from[key];
    });
    return to;
  }
  /**
   * Simple bind, faster than native
   *
   * @param {Function} fn
   * @param {Object} ctx
   * @return {Function}
   */
  function bind(fn, ctx) {
    return function (a) {
      var l = arguments.length;
      return l ? l > 1 ? fn.apply(ctx, arguments) : fn.call(ctx, a) : fn.call(ctx);
    };
  }
  /**
   * Only call the func the last time before it's not that frequently called.
   */
  function debounce(func, wait) {
    var timerId;
    return function () {
      var args = [],
          len = arguments.length;
      while (len--) {
        args[len] = arguments[len];
      }clearTimeout(timerId);
      timerId = setTimeout(function later() {
        timerId = null;
        func.apply(null, args);
      }, wait);
    };
  }
  /**
   * Only call the func the first time before a series frequently function calls happen.
   */
  function depress(func, wait) {
    var timerId;

    function later() {
      timerId = null;
    }
    return function () {
      if (!timerId) {
        func.apply();
      }
      clearTimeout(timerId);
      timerId = setTimeout(later, wait);
    };
  }
  /**
   * Only call the func every time after a wait milliseconds if it's too frequently called.
   */
  function throttle(func, wait, callLastTime) {
    var last = 0;
    var lastTimer = null;
    var lastTimeDuration = wait + (wait > 25 ? wait : 25); // plus half wait time.
    return function () {
      var args = [],
          len = arguments.length;
      while (len--) {
        args[len] = arguments[len];
      }var context = this;
      var time = new Date().getTime();
      if (time - last > wait) {
        if (callLastTime) {
          lastTimer && clearTimeout(lastTimer);
          lastTimer = setTimeout(function () {
            lastTimer = null;
            func.apply(context, args);
          }, lastTimeDuration);
        }
        func.apply(context, args);
        last = time;
      }
    };
  }
  // direction: 'l' | 'r', default is 'r'
  // num: how many times to loop, should be a positive integer
  function loopArray(arr, num, direction) {
    if (!isArray(arr)) {
      return;
    }
    var isLeft = (direction + '').toLowerCase() === 'l';
    var len = arr.length;
    num = num % len;
    if (num < 0) {
      num = -num;
      isLeft = !isLeft;
    }
    if (num === 0) {
      return arr;
    }
    var lp, rp;
    if (isLeft) {
      lp = arr.slice(0, num);
      rp = arr.slice(num);
    } else {
      lp = arr.slice(0, len - num);
      rp = arr.slice(len - num);
    }
    return rp.concat(lp);
  }

  /**
   * Create a cached version of a pure function.
   */
  function cached(fn) {
    var cache = Object.create(null);
    return function cachedFn(str) {
      var hit = cache[str];
      return hit || (cache[str] = fn(str));
    };
  }
  /**
   * Camelize a hyphen-delmited string.
   */
  var camelizeRE = /-(\w)/g;
  var camelize = cached(function (str) {
    return str.replace(camelizeRE, function (_, c) {
      return c.toUpperCase();
    });
  });
  function camelizeKeys(obj) {
    var res = {};
    for (var key in obj) {
      res[camelize(key)] = obj[key];
    }
    return res;
  }
  /**
   * Capitalize a string.
   */
  var capitalize = cached(function (str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  });
  /**
   * Hyphenate a camelCase string.
   */
  var hyphenateRE = /([^-])([A-Z])/g;
  var hyphenate = cached(function (str) {
    return str.replace(hyphenateRE, '$1-$2').replace(hyphenateRE, '$1-$2').toLowerCase();
  });
  function hyphenateKeys(obj) {
    var res = {};
    for (var key in obj) {
      res[hyphenate(key)] = obj[key];
    }
    return res;
  }
  var vendorsReg = /webkit-|moz-|o-|ms-/;
  function hyphenateStyleKeys(obj) {
    var res = {};
    for (var key in obj) {
      var hk = hyphenate(key).replace(vendorsReg, function ($0) {
        return '-' + $0;
      });
      res[hk] = obj[key];
    }
    return res;
  }
  function camelToKebab(name) {
    if (!name) {
      return '';
    }
    return name.replace(/([A-Z])/g, function (g, g1) {
      return "-" + g1.toLowerCase();
    });
  }
  function appendCss(css, cssId, replace) {
    var style = document.getElementById(cssId);
    if (style && replace) {
      style.parentNode.removeChild(style);
      style = null;
    }
    if (!style) {
      style = document.createElement('style');
      style.type = 'text/css';
      cssId && (style.id = cssId);
      document.getElementsByTagName('head')[0].appendChild(style);
    }
    style.appendChild(document.createTextNode(css));
  }
  function nextFrame(callback) {
    var runner = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || function (cb) {
      return setTimeout(cb, 16);
    };
    runner(callback);
  }
  function toCSSText(object) {
    if (!object) {
      return;
    }
    var obj = hyphenateStyleKeys(object);
    var cssText = '';
    for (var key in obj) {
      cssText += key + ":" + obj[key] + ";";
    }
    return cssText;
  }

  /*
   * Licensed to the Apache Software Foundation (ASF) under one
   * or more contributor license agreements.  See the NOTICE file
   * distributed with this work for additional information
   * regarding copyright ownership.  The ASF licenses this file
   * to you under the Apache License, Version 2.0 (the
   * "License"); you may not use this file except in compliance
   * with the License.  You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing,
   * software distributed under the License is distributed on an
   * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
   * KIND, either express or implied.  See the License for the
   * specific language governing permissions and limitations
   * under the License.
   */

  /**
   * viewport priority:
   *
   * 1. meta weex-viewport (developer custom)
   * 2. setViewport(config) := config.width (private code) @deprecated
   * 3. 750 (buid time)
   *
   */
  var isInited = false;
  var DEFAULT_VIEWPORT_WIDTH = 750;

  /**
   * get viewport width from weex-viewport meta.
   */
  var envViewportWidth = parseInt(750);
  var width = !isNaN(envViewportWidth) && envViewportWidth > 0 ? envViewportWidth : DEFAULT_VIEWPORT_WIDTH;

  var wxViewportMeta = document.querySelector('meta[name="weex-viewport"]');
  var metaWidth = wxViewportMeta && parseInt(wxViewportMeta.getAttribute('content'));
  if (metaWidth && !isNaN(metaWidth) && metaWidth > 0) {
    width = metaWidth;
  }

  var dpr = 0;
  var screenWidth = 0;
  var screenHeight = 0;

  var info = {
    dpr: dpr,
    scale: 0,
    rootValue: 0,
    rem: 0,
    deviceWidth: 0,
    deviceHeight: 0
  };

  /**
   * set root font-size for rem units. If already been set, just skip this.
   */
  function setRootFont(width, viewportWidth, force) {
    var doc = window.document;
    var rem = width * 750 / viewportWidth / 10;
    if (!doc.documentElement) {
      return;
    }
    var rootFontSize = doc.documentElement.style.fontSize;
    if (!rootFontSize || force) {
      doc.documentElement.style.fontSize = rem + 'px';
    }
    info.rem = rem;
    info.rootValue = viewportWidth / 10;
  }

  function setMetaViewport(width) {
    if (!wxViewportMeta) {
      wxViewportMeta = document.createElement('meta');
      wxViewportMeta.setAttribute('name', 'weex-viewport');
      var firstMeta = document.querySelector('meta');
      var head = firstMeta && firstMeta.parentElement || document.documentElement.children[0];
      firstMeta ? head.insertBefore(wxViewportMeta, firstMeta) : head.appendChild(wxViewportMeta);
    } else {
      var metaWidth = parseInt(wxViewportMeta.getAttribute('content'));
      if (metaWidth === width) {
        return;
      }
    }
    wxViewportMeta.setAttribute('content', width + '');
  }

  /**
   * export viewport info.
   */
  function init$1(viewportWidth) {
    if (viewportWidth === void 0) viewportWidth = width;

    if (!isInited) {
      isInited = true;

      var doc = window.document;
      if (!doc) {
        console.error('[vue-render] window.document is undfined.');
        return;
      }
      if (!doc.documentElement) {
        console.error('[vue-render] document.documentElement is undfined.');
        return;
      }

      dpr = info.dpr = window.devicePixelRatio;
      screenWidth = doc.documentElement.clientWidth;
      screenHeight = doc.documentElement.clientHeight;

      var resetDeviceHeight = function resetDeviceHeight() {
        screenHeight = doc.documentElement.clientHeight;
        var env = window.weex && window.weex.config.env;
        info.deviceHeight = env.deviceHeight = screenHeight * dpr;
      };

      // set root font for rem.
      setRootFont(screenWidth, viewportWidth);
      setMetaViewport(viewportWidth);

      window.addEventListener('resize', resetDeviceHeight);

      /**
       * why not to use window.screen.width to get screenWidth ? Because in some
       * old webkit browser on android system it get the device pixel width, which
       * is the screenWidth multiply by the device pixel ratio.
       * e.g. ip6 -> get 375 for virtual screen width.
       */
      var scale = screenWidth / viewportWidth;
      /**
       * 1. if set initial/maximum/mimimum-scale some how the page will have a bounce
       * effect when user drag the page towards horizontal axis.
       * 2. Due to compatibility reasons, not to use viewport meta anymore.
       * 3. viewport meta should always be:
       *    <meta name="viewport"
       *      content="width=device-width,
       *      initial-scale=1,
       *      maximum-scale=1,
       *      user-scalable=no" />
       */
      extend(info, {
        scale: scale,
        rootValue: viewportWidth / 10,
        deviceWidth: screenWidth * dpr,
        deviceHeight: screenHeight * dpr
      });
    }

    return info;
  }

  /**
   * reset viewport width and scale.
   * @return new scale.
   */
  function resetViewport(viewportWidth) {
    setRootFont(screenWidth, viewportWidth, true);
    setMetaViewport(viewportWidth);
    var newScale = screenWidth / viewportWidth;
    info.scale = newScale;
    return newScale;
  }

  /*
   * Licensed to the Apache Software Foundation (ASF) under one
   * or more contributor license agreements.  See the NOTICE file
   * distributed with this work for additional information
   * regarding copyright ownership.  The ASF licenses this file
   * to you under the Apache License, Version 2.0 (the
   * "License"); you may not use this file except in compliance
   * with the License.  You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing,
   * software distributed under the License is distributed on an
   * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
   * KIND, either express or implied.  See the License for the
   * specific language governing permissions and limitations
   * under the License.
   */

  function extend$1(to) {
    var args = [],
        len = arguments.length - 1;
    while (len-- > 0) {
      args[len] = arguments[len + 1];
    }if (!args || args.length <= 0) {
      return to;
    }
    args.forEach(function (from) {
      if ((typeof from === 'undefined' ? 'undefined' : _typeof(from)) !== 'object') {
        return;
      }
      for (var key in from) {
        to[key] = from[key];
      }
    });
    return to;
  }

  // if support passive event listeners.
  var _supportsPassive = false;
  try {
    document.createElement('div').addEventListener('test', function (_) {}, {
      get passive() {
        _supportsPassive = true;
      }
    });
  } catch (e) {
    // do nothing.
  }
  function supportsPassive() {
    return _supportsPassive;
  }

  /**
   * Create Event.
   * @param {DOMString} type
   * @param {Object} props
   */
  function createEvent(target, type, props) {
    var event = new Event(type, { bubbles: false });

    extend$1(event, props);
    //  phantomjs don't support customer event
    if (window.navigator.userAgent.toLowerCase().indexOf('phantomjs') !== -1) {
      return event;
    }
    try {
      Object.defineProperty(event, 'target', {
        enumerable: true,
        value: target
      });
    } catch (err) {
      return extend$1({}, event, { target: target });
    }
    return event;
  }

  /**
   * Create a bubbable Event.
   * @param {DOMString} type
   * @param {Object} props
   */
  function createBubblesEvent(target, type, props) {
    var event = new Event(type, { bubbles: true });
    extend$1(event, props);
    //  phantomjs don't support customer event
    if (window.navigator.userAgent.toLowerCase().indexOf('phantomjs') !== -1) {
      return event;
    }
    try {
      Object.defineProperty(event, 'target', {
        enumerable: true,
        value: target
      });
    } catch (err) {
      return extend$1({}, event, { target: target });
    }
    return event;
  }

  /**
   * Create Custom Event.
   * @param {DOMString} type
   * @param {Object} props
   */
  function createCustomEvent(target, type, props) {
    // compatibility: http://caniuse.com/#search=customevent
    // const event = new CustomEvent(type)
    var event = document.createEvent('CustomEvent');
    event.initCustomEvent(type, false, true, {});
    // event.preventDefault()
    // event.stopPropagation()

    extend$1(event, props);

    // event.target is readonly
    try {
      Object.defineProperty(event, 'target', {
        enumerable: true,
        value: target || null
      });
    } catch (err) {
      return extend$1({}, event, { target: target || null });
    }

    return event;
  }

  /**
   * dispatch a event on a HTML element.
   * @param  {HTMLElement} elm
   * @param  {Event} type event name.
   * @param  {Object} data extra data.
   */
  function dispatchNativeEvent(elm, type, data) {
    elm.dispatchEvent(createEvent(elm, type, data));
  }

  function mapFormEvents(context) {
    var eventMap = {};['input', 'change', 'focus', 'blur', 'return'].forEach(function (type) {
      eventMap[type] = function (event) {
        if (context.$el) {
          event.value = context.$el.value;
          // for the sake of v-model, a input event must be emitted.
          if (type === 'input') {
            context.$emit(type, event);
          }
        }
      };
    });
    return eventMap;
  }

  /*
   * Licensed to the Apache Software Foundation (ASF) under one
   * or more contributor license agreements.  See the NOTICE file
   * distributed with this work for additional information
   * regarding copyright ownership.  The ASF licenses this file
   * to you under the Apache License, Version 2.0 (the
   * "License"); you may not use this file except in compliance
   * with the License.  You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing,
   * software distributed under the License is distributed on an
   * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
   * KIND, either express or implied.  See the License for the
   * specific language governing permissions and limitations
   * under the License.
   */
  var scaleStyles = ['width', 'height', 'left', 'right', 'top', 'bottom', 'border', 'borderRadius', 'borderWidth', 'borderLeft', 'borderRight', 'borderTop', 'borderBottom', 'borderLeftWidth', 'borderRightWidth', 'borderTopWidth', 'borderBottomWidth', 'margin', 'marginLeft', 'marginRight', 'marginTop', 'marginBottom', 'padding', 'paddingLeft', 'paddingRight', 'paddingTop', 'paddingBottom', 'fontSize', 'lineHeight', 'transform', 'webkitTransform', 'WebkitTransform', 'mozTransform', 'MozTransform', 'itemSize'];

  var vendorReg = /webkit|moz/i;
  function hyphen(key) {
    return hyphenate(key.replace(vendorReg, function ($0) {
      return "-" + $0.toLowerCase() + "-";
    }));
  }

  function getAllStyles() {
    return Object.keys(scaleStyles.reduce(function (pre, key) {
      pre[key] = 1;
      pre[hyphen(key)] = 1;
      return pre;
    }, {}));
  }

  var allStyles = getAllStyles();

  var config = {
    scrollableTypes: ['scroller', 'list', 'waterfall'],
    gestureEvents: ['panstart', 'panmove', 'panend', 'swipe', 'longpress', 'tap'],
    // these components should not bind events with .native.
    weexBuiltInComponents: ['div', 'container', 'text', 'image', 'img', 'cell', 'a'],
    bindingStyleNamesForPx2Rem: allStyles
  };

  /*
   * Licensed to the Apache Software Foundation (ASF) under one
   * or more contributor license agreements.  See the NOTICE file
   * distributed with this work for additional information
   * regarding copyright ownership.  The ASF licenses this file
   * to you under the Apache License, Version 2.0 (the
   * "License"); you may not use this file except in compliance
   * with the License.  You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing,
   * software distributed under the License is distributed on an
   * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
   * KIND, either express or implied.  See the License for the
   * specific language governing permissions and limitations
   * under the License.
   */
  /**
   * whether ct contains el.
   * @param {HTMLElement} container
   * @param {HTMLElement} target
   */
  function contains(container, target, includeSelf) {
    if (includeSelf && container === target) {
      return true;
    }
    return container.contains ? container.contains(target) && container !== target : container.compareDocumentPosition(target) & 16 !== 0;
  }

  function insideA(el) {
    if (typeof el._insideA === 'boolean') {
      return el._insideA;
    }
    var parent = el.parentElement;
    var parents = [];
    var checkParents = function checkParents(inside) {
      for (var i = 0, l = parents.length; i < l; i++) {
        parents[i]._insideA = inside;
      }
    };
    var check = function check(inside) {
      el._insideA = inside;
      checkParents(inside);
      return inside;
    };
    while (parent !== document.body) {
      if (parent.tagName.toLowerCase() === 'a') {
        return check(true);
      }
      if (typeof parent._insideA === 'boolean') {
        return check(parent._insideA);
      }
      parents.push(parent);
      parent = parent.parentElement;
    }
    return check(false);
  }

  /**
   * get parent scroller vComponent.
   * return a VueComponent or null.
   */
  function getParentScroller(vm) {
    if (!vm) {
      return null;
    }
    if (vm._parentScroller) {
      return vm._parentScroller;
    }
    function _getParentScroller(parent) {
      if (!parent) {
        return;
      }
      if (config.scrollableTypes.indexOf(parent.weexType) > -1) {
        vm._parentScroller = parent;
        return parent;
      }
      return _getParentScroller(parent.$parent);
    }
    return _getParentScroller(vm.$parent);
  }

  /**
   * get scroller's element.
   * @param vm {HTMLElement | VueCOmponent} vm or element.
   * return the element or document.body.
   */
  function getParentScrollerElement(vm) {
    if (!vm) {
      return null;
    }
    var el = vm instanceof HTMLElement ? vm : vm.$el;
    if (!el || el.nodeType !== 1) {
      return;
    }
    if (vm._parentScroller) {
      return vm._parentScroller;
    }
    function _getParentScroller(parent) {
      if (!parent) {
        return;
      }
      var tagName = parent.tagName.toLowerCase();
      if (tagName === 'body' || tagName === 'main' && config.scrollableTypes.indexOf(parent.getAttribute('weex-type')) > -1) {
        vm._parentScroller = parent;
        return parent;
      }
      return _getParentScroller(parent.parentElement);
    }
    return _getParentScroller(el);
  }

  function horizontalBalance(rect, ctRect) {
    return rect.left < ctRect.right && rect.right > ctRect.left;
  }

  function verticalBalance(rect, ctRect) {
    return rect.top < ctRect.bottom && rect.bottom > ctRect.top;
  }

  /**
   * return a data array with two boolean value, which are:
   * 1. visible in current ct's viewport.
   * 2. visible with offset in current ct's viewport.
   */
  function hasIntersection(rect, ctRect, dir, offset) {
    dir = dir || 'up';
    var isHorizontal = dir === 'left' || dir === 'right';
    var isVertical = dir === 'up' || dir === 'down';
    if (isHorizontal && !verticalBalance(rect, ctRect)) {
      return [false, false];
    }
    if (isVertical && !horizontalBalance(rect, ctRect)) {
      return [false, false];
    }
    offset = offset ? parseInt(offset) * weex.config.env.scale : 0;
    switch (dir) {
      case 'up':
        return [rect.top < ctRect.bottom && rect.bottom > ctRect.top, rect.top < ctRect.bottom + offset && rect.bottom > ctRect.top - offset];
      case 'down':
        return [rect.bottom > ctRect.top && rect.top < ctRect.bottom, rect.bottom > ctRect.top - offset && rect.top < ctRect.bottom + offset];
      case 'left':
        return [rect.left < ctRect.right && rect.right > ctRect.left, rect.left < ctRect.right + offset && rect.right > ctRect.left - offset];
      case 'right':
        return [rect.right > ctRect.left && rect.left < ctRect.right, rect.right > ctRect.left - offset && rect.left < ctRect.right + offset];
    }
  }

  /**
   * isElementVisible
   * @param  {HTMLElement}  el    a dom element.
   * @param  {HTMLElement}  container  optional, the container of this el.
   */
  function isElementVisible(el, container, dir, offset) {
    if (!el.getBoundingClientRect) {
      return false;
    }
    var bodyRect = {
      top: 0,
      left: 0,
      bottom: window.innerHeight,
      right: window.innerWidth
    };
    var ctRect = container === window || container === document.body ? bodyRect : container ? container.getBoundingClientRect() : bodyRect;
    return hasIntersection(el.getBoundingClientRect(), ctRect, dir, offset);
  }

  // to trigger the appear/disappear event.
  function triggerAppearEvent(elm, evt, dir) {
    dispatchNativeEvent(elm, evt, {
      direction: dir
    });
  }

  /**
   * get all event listeners. including bound handlers in all parent vnodes.
   */
  function getEventHandlers(context) {
    var vnode = context.$vnode;
    var handlers = {};
    var attachedVnodes = [];
    while (vnode) {
      attachedVnodes.push(vnode);
      vnode = vnode.parent;
    }
    attachedVnodes.forEach(function (vnode) {
      var parentListeners = vnode.componentOptions && vnode.componentOptions.listeners;
      var dataOn = vnode.data && vnode.data.on;
      extend(handlers, parentListeners, dataOn);
    });
    return handlers;
  }

  function getAppearOffset(el) {
    return el && el.getAttribute('appear-offset');
  }

  function updateWatchAppearList(container) {
    container._watchAppearList = Array.prototype.slice.call(container.querySelectorAll('[weex-appear]'));
  }

  /**
   * inject removeChild function to watch disappear and offsetDisappear events.
   */
  if (!window._rmInjected) {
    window._rmInjected = true;
    var nativeRemove = HTMLElement.prototype.removeChild;
    HTMLElement.prototype.removeChild = function (el) {
      el._visible && triggerAppearEvent(el, 'disappear', null);
      el._offsetVisible && triggerAppearEvent(el, 'offsetDisappear', null);
      nativeRemove.apply(this, arguments);
    };
  }

  /**
   * Watch element's visibility to tell whether should trigger a appear/disappear
   * event in scroll handler.
   */
  function watchAppear(context, fireNow) {
    var el = context && context.$el;
    if (!el || el.nodeType !== 1) {
      return;
    }

    var isWindow = false;
    var container = getParentScrollerElement(context);
    if (!container) {
      return;
    }
    if (container === document.body) {
      isWindow = true;
    }
    /**
     * Code below will only exec once for binding scroll handler for parent container.
     */
    var scrollHandler = container._scrollHandler;
    if (!scrollHandler) {
      scrollHandler = container._scrollHandler = function (event$$1) {
        updateWatchAppearList(container);
        /**
         * detect scrolling direction.
         * direction only support up & down yet.
         * TODO: direction support left & right.
         */
        var scrollTop = isWindow ? window.pageYOffset : container.scrollTop;
        var preTop = container._lastScrollTop;
        container._lastScrollTop = scrollTop;
        var dir = (scrollTop < preTop ? 'down' : scrollTop > preTop ? 'up' : container._prevDirection) || null;
        container._prevDirection = dir;
        var watchAppearList = container._watchAppearList || [];
        var len = watchAppearList.length;
        for (var i = 0; i < len; i++) {
          var el = watchAppearList[i];
          var appearOffset = getAppearOffset(el);
          var visibleData = isElementVisible(el, container, dir, appearOffset);
          detectAppear(el, visibleData, dir);
        }
      };
      container.addEventListener('scroll', throttle(scrollHandler, 100, true));
    }
    if (fireNow) {
      context.$nextTick(scrollHandler);
    }
  }

  /**
   * decide whether to trigger a appear/disappear event.
   * @param {VueComponent} context
   * @param {boolean} visible
   * @param {string} dir
   */
  function detectAppear(el, visibleData, dir, appearOffset) {
    if (dir === void 0) dir = null;

    if (!el) {
      return;
    }
    var visible = visibleData[0];
    var offsetVisible = visibleData[1];
    /**
     * No matter it's binding appear/disappear or both of them. Always
     * should test it's visibility and change the el._visible.
     * If neigher has been bound, then ignore it.
     */
    /**
     * if the component hasn't appeared for once yet, then it shouldn't trigger
     * a disappear event at all.
     */
    if (el._appearedOnce || visible) {
      if (el._visible !== visible) {
        el._visible = visible;
        if (visible && !el._appearedOnce) {
          el._appearedOnce = true;
        }
        var evtName = visible ? 'appear' : 'disappear';
        if (el.getAttribute("data-evt-" + evtName) === '') {
          triggerAppearEvent(el, evtName, dir);
        }
      }
    }
    if (el._offsetAppearedOnce || offsetVisible) {
      if (el._offsetVisible !== offsetVisible) {
        el._offsetVisible = offsetVisible;
        if (offsetVisible && !el._offsetAppearedOnce) {
          el._offsetAppearedOnce = true;
        }
        var evt = offsetVisible ? ['offset-appear', 'offsetAppear'] : ['offset-disappear', 'offsetDisappear'];
        if (el.getAttribute("data-evt-" + evt[0]) === '') {
          triggerAppearEvent(el, evt[1], dir);
        }
      }
    }
  }

  /*
   * Licensed to the Apache Software Foundation (ASF) under one
   * or more contributor license agreements.  See the NOTICE file
   * distributed with this work for additional information
   * regarding copyright ownership.  The ASF licenses this file
   * to you under the Apache License, Version 2.0 (the
   * "License"); you may not use this file except in compliance
   * with the License.  You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing,
   * software distributed under the License is distributed on an
   * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
   * KIND, either express or implied.  See the License for the
   * specific language governing permissions and limitations
   * under the License.
   */

  var lazyloadAttr = 'data-img-src';
  var placeholderAttr = 'placeholder';

  function preLoadImg(src, loadCallback, errorCallback) {
    var img = new Image();
    img.onload = loadCallback ? loadCallback.bind(img) : null;
    img.onerror = errorCallback ? errorCallback.bind(img) : null;
    img.src = src;
  }

  function applySrc(item, src, placeholderSrc) {
    if (!src) {
      return;
    }
    function finallCb() {
      delete item._src_loading;
    }

    if (window._processImgSrc) {
      src = window._processImgSrc(src, item);
      if (placeholderSrc) {
        placeholderSrc = window._processImgSrc(placeholderSrc, item);
      }
    }

    if (item._src_loading === src) {
      return;
    }

    /**
     * 1. apply src immediately in case javscript blocks the image loading
     *  before next tick.
     */
    item.style.backgroundImage = "url(" + (src || '') + ")";
    item.removeAttribute(lazyloadAttr);
    /**
     * 2. then load the img src with Image constructor (but would not post
     *  a request again), just to trigger the load event.
     */
    item._src_loading = src;
    preLoadImg(src, function (evt) {
      item.style.backgroundImage = "url(" + (src || '') + ")";
      var ref = this;
      var naturalWidth = ref.width;
      var naturalHeight = ref.height;
      var params = {
        success: true,
        size: { naturalWidth: naturalWidth, naturalHeight: naturalHeight }
      };
      dispatchNativeEvent(item, 'load', params);
      finallCb();
    }, function (evt) {
      var params = {
        success: false,
        size: { naturalWidth: 0, naturalHeight: 0 }
      };
      dispatchNativeEvent(item, 'load', params);
      if (placeholderSrc) {
        preLoadImg(placeholderSrc, function () {
          item.style.backgroundImage = "url(" + (placeholderSrc || '') + ")";
        });
      }
      finallCb();
    });
  }

  function getCtScroller(el) {
    if (!el) {
      return;
    }
    var scroller = el._ptScroller;
    if (!scroller) {
      var pt = el.parentElement;
      while (pt && pt !== document.body) {
        if ((pt.className + '' || '').match(/weex-list|weex-scroller|weex-waterfall/)) {
          scroller = pt;
          break;
        }
        pt = pt.parentElement;
      }
      scroller = pt;
      el._ptScroller = pt;
    }
    return scroller;
  }

  function fireLazyload(el, ignoreVisibility) {
    if (Array.isArray(el)) {
      return el.forEach(function (ct) {
        return fireLazyload(ct);
      });
    }
    el = el || document.body;
    if (!el) {
      return;
    }
    var imgs = (el || document.body).querySelectorAll("[" + lazyloadAttr + "]");
    if (el.getAttribute(lazyloadAttr)) {
      imgs = [el];
    }
    for (var i = 0; i < imgs.length; i++) {
      var img = imgs[i];
      if (typeof ignoreVisibility === 'boolean' && ignoreVisibility) {
        applySrc(img, img.getAttribute(lazyloadAttr), img.getAttribute(placeholderAttr));
      } else if (isElementVisible(img, getCtScroller(el))[0]) {
        applySrc(img, img.getAttribute(lazyloadAttr), img.getAttribute(placeholderAttr));
      }
    }
  }

  /**
   * cache a throttle lazyload function for every container element
   * once for different wait times separate.
   *   the architecture of this cache:
   *      cache: {
   *        el.id: {
   *          wait: throttledFunction () { ... }
   *        }
   *      }
   */
  var cache = {};
  var _uid$2 = 1;
  function getThrottleLazyload(wait, el) {
    if (wait === void 0) wait = 16;
    if (el === void 0) el = document.body;

    var id = +(el && el.dataset.throttleId);
    if (isNaN(id) || id <= 0) {
      id = _uid$2++;
      el && el.setAttribute('data-throttle-id', id + '');
    }

    !cache[id] && (cache[id] = {});
    var throttled = cache[id][wait] || (cache[id][wait] = throttle(fireLazyload.bind(this, el), parseFloat(wait),
    // true for callLastTime.
    // to trigger once more time after the last throttled function called with a little more delay.
    true));
    return throttled;
  }

  /*
   * Licensed to the Apache Software Foundation (ASF) under one
   * or more contributor license agreements.  See the NOTICE file
   * distributed with this work for additional information
   * regarding copyright ownership.  The ASF licenses this file
   * to you under the Apache License, Version 2.0 (the
   * "License"); you may not use this file except in compliance
   * with the License.  You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing,
   * software distributed under the License is distributed on an
   * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
   * KIND, either express or implied.  See the License for the
   * specific language governing permissions and limitations
   * under the License.
   */

  var bindingStyleNamesForPx2Rem = config.bindingStyleNamesForPx2Rem;

  // whether to support using 0.5px to paint 1px width border.
  var _supportHairlines;
  function supportHairlines() {
    if (typeof _supportHairlines === 'undefined') {
      var dpr = window.devicePixelRatio;
      if (dpr && dpr >= 2 && document.documentElement) {
        var docElm = document.documentElement;
        var testElm = document.createElement('div');
        var fakeBody = document.createElement('body');
        var beforeNode = docElm.firstElementChild || docElm.firstChild;
        testElm.style.border = '0.5px solid transparent';
        fakeBody.appendChild(testElm);
        docElm.insertBefore(fakeBody, beforeNode);
        _supportHairlines = testElm.offsetHeight === 1;
        docElm.removeChild(fakeBody);
      } else {
        _supportHairlines = false;
      }
    }
    return _supportHairlines;
  }

  var support = null;

  function supportSticky() {
    if (support !== null) {
      return support;
    }
    var element = window.document.createElement('div');
    var elementStyle = element.style;
    elementStyle.cssText = 'position:-webkit-sticky;position:sticky;';
    support = elementStyle.position.indexOf('sticky') !== -1;
    return support;
  }

  /**
   * get transformObj
   */
  function getTransformObj(elm) {
    var styleObj = {};
    if (!elm) {
      return styleObj;
    }
    var transformStr = elm.style.webkitTransform || elm.style.mozTransform || elm.style.transform;
    if (transformStr && transformStr.match(/(?: *(?:translate|rotate|scale)[^(]*\([^(]+\))+/i)) {
      styleObj = transformStr.trim().replace(/, +/g, ',').split(' ').reduce(function (pre, str) {
        ['translate', 'scale', 'rotate'].forEach(function (name) {
          if (new RegExp(name, 'i').test(str)) {
            pre[name] = str;
          }
        });
        return pre;
      }, {});
    }
    return styleObj;
  }

  /**
   * translate a transform string from a transformObj.
   */
  function getTransformStr(obj) {
    return Object.keys(obj).reduce(function (pre, key) {
      return pre + obj[key] + ' ';
    }, '');
  }

  /**
   * add transform style to element.
   * @param {HTMLElement} elm
   * @param {object} style: transform object, format is like this:
   *   {
   *     translate: 'translate3d(2px, 2px, 2px)',
   *     scale: 'scale(0.2)',
   *     rotate: 'rotate(30deg)'
   *   }
   * @param {boolean} replace: whether to replace all transform properties.
   */
  function addTransform(elm, style, replace) {
    if (!style) {
      return;
    }
    var styleObj = {};
    if (!replace) {
      styleObj = getTransformObj(elm);
    }
    for (var key in style) {
      var val = style[key];
      if (val) {
        styleObj[key] = val;
      }
    }
    var resStr = getTransformStr(styleObj);
    elm.style.webkitTransform = resStr;
    elm.style.mozTransform = resStr;
    elm.style.transform = resStr;
  }

  /**
   * copy a transform behaviour from one element to another.
   * key could be: 'translate' | 'scale' | 'rotate'
   */
  function copyTransform(from, to, key) {
    var str;
    if (!key) {
      str = from.style.webkitTransform || from.style.mozTransform || from.style.transform;
    } else {
      var fromObj = getTransformObj(from);
      if (!fromObj[key]) {
        return;
      }
      var toObj = getTransformObj(to);
      toObj[key] = fromObj[key];
      str = getTransformStr(toObj);
    }
    to.style.webkitTransform = str;
    to.style.mozTransform = str;
    to.style.transform = str;
  }

  /**
   * get color's r, g, b value.
   * @param {string} color support all kinds of value of color.
   */
  function getRgb(color) {
    var haxReg = /#([\da-fA-F]{2})([\da-fA-F]{2})([\da-fA-F]{2})/;
    var rgbReg = /rgb\((\d+),\s*(\d+),\s*(\d+)\)/;
    var span = document.createElement('span');
    var body = document.body;
    span.style.cssText = "color: " + color + "; width: 0px; height: 0px;";
    body && body.appendChild(span);
    color = window.getComputedStyle(span).color + '';
    body && body.removeChild(span);

    var match;
    match = color.match(haxReg);
    if (match) {
      return {
        r: parseInt(match[1], 16),
        g: parseInt(match[2], 16),
        b: parseInt(match[3], 16)
      };
    }
    match = color.match(rgbReg);
    if (match) {
      return {
        r: parseInt(match[1]),
        g: parseInt(match[2]),
        b: parseInt(match[3])
      };
    }
  }

  /**
   * get style sheet with owner node's id
   * @param {string} id owner node id.
   */
  function getStyleSheetById(id) {
    if (!id) {
      return;
    }
    var styleSheets = document.styleSheets;
    var len = styleSheets.length;
    for (var i = 0; i < len; i++) {
      var styleSheet = styleSheets[i];
      if (styleSheet.ownerNode.id === id) {
        return styleSheet;
      }
    }
  }

  function getChildrenTotalWidth(children) {
    var len = children.length;
    var total = 0;
    for (var i = 0; i < len; i++) {
      total += children[i].getBoundingClientRect().width;
    }
    return total;
  }
  /**
   * get total content width of the element.
   * @param {HTMLElement} elm
   */
  function getRangeWidth(elm) {
    var children = elm.children;
    if (!children) {
      return elm.getBoundingClientRect().width;
    }
    if (!Range) {
      return getChildrenTotalWidth(children);
    }
    var range = document.createRange();
    if (!range.selectNodeContents) {
      return getChildrenTotalWidth(children);
    }
    range.selectNodeContents(elm);
    return range.getBoundingClientRect().width;
  }

  /**
   * px2rem and camelize keys.
   */
  function styleObject2rem(style, rootValue) {
    var obj = {};
    for (var k in style) {
      var camK = camelize(k);
      if (bindingStyleNamesForPx2Rem.indexOf(camK) > -1) {
        obj[camK] = px2rem(style[k] + '', rootValue);
      } else {
        obj[camK] = style[k];
      }
    }
    return obj;
  }

  function px2rem(px, rootValue) {
    return px.replace(/([+-]?\d+(?:.\d*)?)([p|w]x)/g, function ($0, $1, $2) {
      if ($2 === 'wx') {
        // 'wx' -> px
        return $1 + 'px';
      } else {
        // 'px' -> rem
        var pxVal = parseFloat($1);
        var sign = pxVal > 0 ? 1 : pxVal < 0 ? -1 : 0;
        if (Math.abs(pxVal) <= 1) {
          return supportHairlines() ? sign * 0.5 + "px" : sign * 1 + "px";
        }
        return pxVal / (rootValue || window.weex.config.env.rem) + 'rem';
      }
    });
  }

  function rem2px(rem, rootValue) {
    return rem.replace(/([+-]?\d+(?:.\d*)?)rem/g, function ($0, $1) {
      return parseFloat($1) * (rootValue || window.weex.config.env.rem) + 'px';
    });
  }

  /*
   * Licensed to the Apache Software Foundation (ASF) under one
   * or more contributor license agreements.  See the NOTICE file
   * distributed with this work for additional information
   * regarding copyright ownership.  The ASF licenses this file
   * to you under the Apache License, Version 2.0 (the
   * "License"); you may not use this file except in compliance
   * with the License.  You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing,
   * software distributed under the License is distributed on an
   * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
   * KIND, either express or implied.  See the License for the
   * specific language governing permissions and limitations
   * under the License.
   */

  var utils = Object.freeze({
    extend: extend,
    extendTruthy: extendTruthy,
    extendKeys: extendKeys,
    extractKeys: extractKeys,
    bind: bind,
    debounce: debounce,
    depress: depress,
    throttle: throttle,
    loopArray: loopArray,
    cached: cached,
    camelize: camelize,
    camelizeKeys: camelizeKeys,
    capitalize: capitalize,
    hyphenate: hyphenate,
    hyphenateKeys: hyphenateKeys,
    hyphenateStyleKeys: hyphenateStyleKeys,
    camelToKebab: camelToKebab,
    appendCss: appendCss,
    nextFrame: nextFrame,
    toCSSText: toCSSText,
    supportsPassive: supportsPassive,
    createEvent: createEvent,
    createBubblesEvent: createBubblesEvent,
    createCustomEvent: createCustomEvent,
    dispatchNativeEvent: dispatchNativeEvent,
    mapFormEvents: mapFormEvents,
    contains: contains,
    insideA: insideA,
    getParentScroller: getParentScroller,
    getParentScrollerElement: getParentScrollerElement,
    hasIntersection: hasIntersection,
    isElementVisible: isElementVisible,
    getEventHandlers: getEventHandlers,
    watchAppear: watchAppear,
    detectAppear: detectAppear,
    applySrc: applySrc,
    fireLazyload: fireLazyload,
    getThrottleLazyload: getThrottleLazyload,
    supportHairlines: supportHairlines,
    supportSticky: supportSticky,
    getTransformObj: getTransformObj,
    getTransformStr: getTransformStr,
    addTransform: addTransform,
    copyTransform: copyTransform,
    getRgb: getRgb,
    getStyleSheetById: getStyleSheetById,
    getRangeWidth: getRangeWidth,
    styleObject2rem: styleObject2rem,
    px2rem: px2rem,
    rem2px: rem2px,
    isPlainObject: isPlainObject,
    isArray: isArray,
    isPrimitive: isPrimitive,
    isDef: isDef
  });

  /*
   * Licensed to the Apache Software Foundation (ASF) under one
   * or more contributor license agreements.  See the NOTICE file
   * distributed with this work for additional information
   * regarding copyright ownership.  The ASF licenses this file
   * to you under the Apache License, Version 2.0 (the
   * "License"); you may not use this file except in compliance
   * with the License.  You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing,
   * software distributed under the License is distributed on an
   * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
   * KIND, either express or implied.  See the License for the
   * specific language governing permissions and limitations
   * under the License.
   */
  /**
   * get WXEnvironment info.
   * @param  {object} viewportInfo: info about viewport.
   * @param  {object} envInfo: info parsed from lib.env.
   */
  function initEnv(viewportInfo, envInfo) {
    var browserName = envInfo.browser ? envInfo.browser.name : navigator.appName;
    var browserVersion = envInfo.browser ? envInfo.browser.version.val : null;
    var osName = envInfo.os.name;
    if (osName.match(/(iPhone|iPad|iPod)/i)) {
      osName = 'iOS';
    } else if (osName.match(/Android/i)) {
      osName = 'android';
    }
    var osVersion = envInfo.os.version.val;
    var env = {
      platform: 'Web',
      weexVersion: '1.0.26',
      userAgent: navigator.userAgent,
      appName: browserName,
      appVersion: browserVersion,
      osName: osName,
      osVersion: osVersion,
      deviceModel: envInfo.os.name || null
    };
    /**
     * viewportInfo: scale, deviceWidth, deviceHeight. dpr
     */
    return extend(viewportInfo, env);
  }

  // const viewportInfo = initViewport()

  // 750 by default currently
  // const scale = viewportInfo.scale

  // const units = {
  //   REM: 12 * scale,
  //   VW: viewportInfo.deviceWidth / 100,
  //   VH: viewportInfo.deviceHeight / 100,
  //   VMIN: Math.min(viewportInfo.deviceWidth, viewportInfo.deviceHeight) / 100,
  //   VMAX: Math.max(viewportInfo.deviceWidth, viewportInfo.deviceHeight) / 100,
  //   CM: 96 / 2.54 * scale,
  //   MM: 96 / 25.4 * scale,
  //   Q: 96 / 25.4 / 4 * scale,
  //   IN: 96 * scale,
  //   PT: 96 / 72 * scale,
  //   PC: 96 / 6 * scale,
  //   PX: scale
  // }

  // Object.freeze(units)
  // Object.freeze(env)

  // window.CSS_UNIT = units
  window.WXEnvironment = initEnv(init$1(), window.lib.env);

  /*
   * Licensed to the Apache Software Foundation (ASF) under one
   * or more contributor license agreements.  See the NOTICE file
   * distributed with this work for additional information
   * regarding copyright ownership.  The ASF licenses this file
   * to you under the Apache License, Version 2.0 (the
   * "License"); you may not use this file except in compliance
   * with the License.  You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing,
   * software distributed under the License is distributed on an
   * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
   * KIND, either express or implied.  See the License for the
   * specific language governing permissions and limitations
   * under the License.
   */
  /* global Vue */

  var weexModules = {};
  var _roots = [];

  var weex$4 = {
    __vue__: null,
    utils: utils,
    // units: window.CSS_UNIT,
    config: {
      env: window.WXEnvironment,
      bundleUrl: location.href
    },

    _components: {},
    _modules: weexModules,

    _meta: {
      mounted: {},
      updated: {},
      destroyed: {},
      requiredModules: {},
      apiCalled: {},
      perf: {}
    },

    document: {
      body: {}
    },

    requireModule: function requireModule(moduleName) {
      var metaMod = weex$4._meta.requiredModules;
      if (!metaMod[moduleName]) {
        metaMod[moduleName] = 0;
      }
      metaMod[moduleName]++;
      return weexModules[moduleName];
    },

    registerModule: function registerModule() {
      var args = [],
          len = arguments.length;
      while (len--) {
        args[len] = arguments[len];
      }return (ref = this).registerApiModule.apply(ref, args);
      var ref;
    },

    support: function support(feature) {
      if (feature === void 0) feature = '';

      var match = (feature + '').match(/@(component|module)\/(\w+)(.\w+)?/);
      if (match) {
        var type = match[1];
        var mod = match[2];
        var method = match[3];
        method = method && method.replace(/^\./, '');
        switch (type) {
          case 'component':
            return typeof this._components[mod] !== 'undefined';
          case 'module':
            var module = weexModules[mod];
            return module && method ? !!module[method] : !!module;
        }
      } else {
        console.warn("[vue-render] invalid argument for weex.support: " + feature);
        return null;
      }
    },

    /**
     * Register a new vue instance in this weex instance. Put its root element into weex.document.body.children, so
     * that user can use weex.document.body to walk through all dom structures in all vue instances in the page.
     */
    registerVueInstance: function registerVueInstance(instance) {
      if (!instance instanceof Vue) {
        return;
      }
      var root = instance.$root;
      if (!root || !root.$el) {
        return;
      }
      this.document.body.children.push(root.$el);
    },

    // @deprecated
    require: function require() {
      var args = [],
          len = arguments.length;
      while (len--) {
        args[len] = arguments[len];
      }console.log("[Vue Render] \"weex.require\" is deprecated, please use \"weex.requireModule\" instead.");
      return (ref = this).requireModule.apply(ref, args);
      var ref;
    },

    // @deprecated
    // TODO: rename to registerModule
    registerApiModule: function registerApiModule(name, module, meta) {
      if (!weexModules[name]) {
        weexModules[name] = {};
      }
      if (!!meta && meta.registerType === 'assignment') {
        weexModules[name] = module;
      } else {
        var loop = function loop(key) {
          if (module.hasOwnProperty(key)) {
            weexModules[name][key] = function () {
              var called = weex$4._meta.apiCalled;
              if (!called[name]) {
                called[name] = {};
              }
              var calledMod = called[name];
              if (!calledMod[key]) {
                calledMod[key] = 0;
              }
              calledMod[key]++;
              return module[key].apply(weex$4, arguments);
            };
          }
        };

        for (var key in module) {
          loop(key);
        }
      }
    },

    registerComponent: function registerComponent(name, component) {
      if (!this.__vue__) {
        return console.log('[Vue Render] Vue is not found. Please import Vue.js before register a component.');
      }
      this._components[name] = 0;
      if (component._css) {
        var css = component._css.replace(/\b[+-]?[\d.]+rem;?\b/g, function (m) {
          return parseFloat(m) * 75 * weex$4.config.env.scale + 'px';
        });
        appendCss(css, "weex-cmp-" + name);
        delete component._css;
      }
      this.__vue__.component(name, component);
    },

    // @deprecated
    getRoot: function getRoot() {},

    // @deprecated
    sender: {
      performCallback: function performCallback(callback, data, keepAlive) {
        if (typeof callback === 'function') {
          return callback(data);
        }
        return null;
      }
    },

    // @deprecated
    install: function install(module) {
      module.init(this);
    }
  };

  Object.defineProperty(weex$4.document.body, 'children', {
    get: function get() {
      return _roots;
    }
  });['on', 'once', 'off', 'emit'].forEach(function (method) {
    weex$4[method] = function () {
      var args = [],
          len = arguments.length;
      while (len--) {
        args[len] = arguments[len];
      }if (!this._vue) {
        this._vue = new this.__vue__();
      }
      return (ref = this._vue)["$" + method].apply(ref, args);
      var ref;
    };
  });

  /*
   * Licensed to the Apache Software Foundation (ASF) under one
   * or more contributor license agreements.  See the NOTICE file
   * distributed with this work for additional information
   * regarding copyright ownership.  The ASF licenses this file
   * to you under the Apache License, Version 2.0 (the
   * "License"); you may not use this file except in compliance
   * with the License.  You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing,
   * software distributed under the License is distributed on an
   * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
   * KIND, either express or implied.  See the License for the
   * specific language governing permissions and limitations
   * under the License.
   */
  function getInlineStyle(vnode) {
    var data = vnode.data || {};
    return extendTruthy({}, data.staticStyle, data.style);
  }

  function extractComponentStyle(context) {
    return getComponentInlineStyle(context);
    // return getComponentStyle(context, true)
  }

  function getComponentInlineStyle(context) {
    var vnode = context && context.$vnode;
    if (!vnode) {
      return {};
    }
    var style = {};
    while (vnode) {
      extend(style, getInlineStyle(vnode));
      vnode = vnode.parent;
    }
    return style;
  }

  var text$2 = {
    transform: function transform(style) {
      var lines = style.lines;
      if (lines > 0) {
        return Object.assign(style, {
          overflow: 'hidden',
          textOverflow: 'ellipsis',
          WebkitLineClamp: lines
        });
      }
      return style;
    }
  };

  var tagMap$1 = {
    text: text$2
  };

  var getTransformer$1 = function getTransformer$1(tag) {
    return tagMap$1[tag];
  };

  var transformer = {
    getTransformer: getTransformer$1
  };

  var getTransformer = transformer.getTransformer;

  var getTransformer_1 = getTransformer;

  /*
   * Licensed to the Apache Software Foundation (ASF) under one
   * or more contributor license agreements.  See the NOTICE file
   * distributed with this work for additional information
   * regarding copyright ownership.  The ASF licenses this file
   * to you under the Apache License, Version 2.0 (the
   * "License"); you may not use this file except in compliance
   * with the License.  You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing,
   * software distributed under the License is distributed on an
   * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
   * KIND, either express or implied.  See the License for the
   * specific language governing permissions and limitations
   * under the License.
   */
  var weexBuiltInComponents = config.weexBuiltInComponents;

  var appearEventsMap = {
    appear: 'appear',
    disappear: 'disappear',
    offsetAppear: 'offset-appear',
    offsetDisappear: 'offset-disappear'
  };

  /**
   * remove text nodes in the nodes array.
   * @param  {Array} nodes
   * @return {Array} nodes without text nodes.
   */
  function trimTextVNodes(vnodes) {
    if (isArray(vnodes)) {
      return vnodes.filter(function (vnode) {
        return !!vnode.tag;
      });
    }
    return vnodes;
  }

  /**
   * ==================================================
   * method to transform args passed to createElement
   * for render function.
   * ==================================================
   */

  // should share with precompiler.
  var metaMap = {
    figure: ['img', 'image', 'figure'],
    p: ['text', 'p'],
    div: ['container', 'div'],
    section: ['cell']
  };

  var checkMap = Object.keys(metaMap).reduce(function (pre, targetTag) {
    var tagArr = metaMap[targetTag];
    tagArr.forEach(function (fromTag) {
      pre[fromTag] = targetTag;
    });
    return pre;
  }, {});

  var _stdTagMap = {
    p: 'text',
    figure: 'image',
    section: 'cell'
  };
  function getStdTag(tag) {
    var stdTag = _stdTagMap[tag];
    return stdTag || tag;
  }

  var precompiledClassMap = {
    div: {
      'weex-ct': true,
      'weex-div': true
    },
    image: {
      'weex-el': true,
      'weex-image': true
    },
    text: {
      'weex-el': true,
      'weex-text': true
    },
    cell: {
      'weex-ct': true,
      'weex-cell': true
    },
    a: {
      'weex-ct': true,
      'weex-a': true
    }
  };

  function isPrecompiled(tag) {
    return config.weexBuiltInComponents.indexOf(tag) > -1;
  }

  function transformRender(ctx, h) {
    return function (tag, data, children, normalizationType, alwaysNormalize) {
      if (isArray(data) || isPrimitive(data)) {
        normalizationType = children;
        children = data;
        data = {};
      }
      if (!isDef(data)) {
        data = {};
      }
      if (isDef(data.is)) {
        tag = data.is;
      }
      if (typeof tag === 'string') {
        data = transformData(this, data, tag);
        tag = transformTag(this, tag);
      } else {
        // direct component options / constructor
        data = transformData(this, data, undefined);
      }
      return h.call(this, tag, data, children, normalizationType, alwaysNormalize);
    }.bind(ctx);
  }

  function transformTag(ctx, tag) {
    var elementTag = checkMap[tag];
    return elementTag || tag;
  }

  /**
   * Tell whether a element is contained in a element who has
   * a attribute 'bubble'=true.
   * @param {HTMLElement} el
   */
  // function inBubble (el) {
  //   if (typeof el._inBubble === 'boolean') {
  //     return el._inBubble
  //   }
  //   const parents = []
  //   let parent = el.parentElement
  //   let inBubble
  //   while (parent && parent !== document.body) {
  //     if (typeof parent._inBubble === 'boolean') {
  //       inBubble = parent._inBubble
  //       break
  //     }
  //     const attr = parent.getAttribute('bubble')
  //     if (attr !== '') {
  //       inBubble = attr === true || attr === 'true'
  //       break
  //     }
  //     parents.push(parent)
  //     parent = parent.parentElement
  //   }
  //   el._inBubble = inBubble
  //   for (let i = 0, l = parents.length; i < l; i++) {
  //     parents[i]._inBubble = inBubble
  //   }
  //   return inBubble
  // }

  function bindEvents(ctx, evts, attrs, tag, appearAttached) {
    for (var key in evts) {
      var appearEvtName = appearEventsMap[key];
      if (appearEvtName) {
        attrs["data-evt-" + appearEvtName] = '';
        if (!appearAttached.value) {
          appearAttached.value = true;
          attrs['weex-appear'] = '';
        }
      } else {
        attrs["data-evt-" + key] = '';
        if (key !== 'click') {
          // should stop propagation by default.
          // TODO: should test inBubble first.
          var handler = evts[key];
          if (isArray(evts[key])) {
            handler.unshift(ctx.$stopPropagation);
          } else {
            evts[key] = [ctx.$stopPropagation, handler];
          }
        }
      }
    }
    if (evts.click) {
      evts.weex$tap = evts.click;
      evts.click = ctx.$stopOuterA;
    }
    if (evts.scroll) {
      evts.weex$scroll = evts.scroll;
      delete evts.scroll;
    }
  }

  function transformOn(ctx, data, tag) {
    var on = data.on;
    var nativeOn = data.nativeOn;
    if (weexBuiltInComponents.indexOf(tag) > -1) {
      /**
       * for div, image, text, cell, a, ...
       * user should bind all events without .native.
       */
      nativeOn = null;
      delete data.nativeOn;
    }
    if (isDef(weex._components[tag])) {
      /**
       * for slider, list, ...
       * user should bind events without .native.
       * in our events handling, all events should transfer to
       * .native binding.
       */
      delete data.nativeOn;
      nativeOn = null;
      if (on) {
        nativeOn = data.nativeOn = on;
      }
      on = null;
      delete data.on;
    }

    var attrs = data.attrs;
    if (!attrs) {
      attrs = data.attrs = {};
    }

    var appearAttached = {
      value: false
    };
    if (on) {
      bindEvents(ctx, on, attrs, tag, appearAttached);
    }
    if (nativeOn) {
      bindEvents(ctx, nativeOn, attrs, tag, appearAttached);
    }

    /**
     * binding a weex$tap to <a> element to stop propagation if there
     * is no bubbles=true flag showing on parents.
     */
    if (tag === 'a') {
      if (!on) {
        on = data.on = {};
      }
      // if (!checkBubble(el)) {
      var evt = on['weex$tap'];
      if (!evt) {
        on['weex$tap'] = ctx.$stopPropagation;
      } else if (Array.isArray(evt)) {
        evt.unshift(ctx.$stopPropagation);
      } else {
        evt = [ctx.$stopPropagation, evt];
      }
      // }
    }
  }

  function transformClass(data, tag) {
    var classData = data.class;
    var tagClassObj = precompiledClassMap[tag];
    if (!classData) {
      classData = data.class = [];
    }
    if (classData && isArray(classData)) {
      data.class = classData.concat(Object.keys(tagClassObj));
    } else if ((typeof classData === 'undefined' ? 'undefined' : _typeof(classData)) === 'object') {
      Object.assign(classData, tagClassObj);
    }
  }

  function transformStyle(ctx, data, tag) {
    var style = data.style;
    if (!style) {
      return;
    }
    var transformer = getTransformer_1(getStdTag(tag));
    if (transformer) {
      data.style = ctx._px2rem(transformer.transform(style), 75);
    } else {
      data.style = ctx._px2rem(style, 75);
    }
  }

  /**
   * transformAttrs:
   *  - add weex-type attrs for precompiledTags.
   *  - image.resize: transform to directive weex-resize.
   */
  function transformAttrs(data, tag) {
    var attrs = data.attrs;
    var directives = data.directives;
    if (!attrs) {
      attrs = data.attrs = {};
    }
    attrs['weex-type'] = tag;
    if (tag === 'image') {
      var src = attrs.src;
      var resize = attrs.resize;
      if (src) {
        attrs['data-img-src'] = src;
      }
      if (resize) {
        if (!directives) {
          directives = data.directives = [];
        }
        directives.push({
          name: 'weex-resize',
          value: attrs.resize
        });
      }
    }
  }

  function transformData(ctx, data, tag) {
    if (isArray(data)) {
      // parameter data is ommited.
      return data;
    }
    var isP = isPrecompiled(tag);
    // class
    isP && transformClass(data, tag);
    // style
    transformStyle(ctx, data, tag);
    // attrs
    isP && transformAttrs(data, tag);
    // on
    transformOn(ctx, data, tag);
    return data;
  }

  function mapNativeEvents(ctx, map) {
    var eventMap = {};
    var loop = function loop(origEvent) {
      eventMap[origEvent] = function (evt) {
        var el = evt.target;
        dispatchNativeEvent(el, map[origEvent]);
      };
    };

    for (var origEvent in map) {
      loop(origEvent);
    }return eventMap;
  }

  /*
   * Licensed to the Apache Software Foundation (ASF) under one
   * or more contributor license agreements.  See the NOTICE file
   * distributed with this work for additional information
   * regarding copyright ownership.  The ASF licenses this file
   * to you under the Apache License, Version 2.0 (the
   * "License"); you may not use this file except in compliance
   * with the License.  You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing,
   * software distributed under the License is distributed on an
   * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
   * KIND, either express or implied.  See the License for the
   * specific language governing permissions and limitations
   * under the License.
   */

  var core = Object.freeze({
    extractComponentStyle: extractComponentStyle,
    getComponentInlineStyle: getComponentInlineStyle,
    trimTextVNodes: trimTextVNodes,
    transformRender: transformRender,
    transformTag: transformTag,
    transformData: transformData,
    mapNativeEvents: mapNativeEvents
  });

  /*
   * Licensed to the Apache Software Foundation (ASF) under one
   * or more contributor license agreements.  See the NOTICE file
   * distributed with this work for additional information
   * regarding copyright ownership.  The ASF licenses this file
   * to you under the Apache License, Version 2.0 (the
   * "License"); you may not use this file except in compliance
   * with the License.  You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing,
   * software distributed under the License is distributed on an
   * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
   * KIND, either express or implied.  See the License for the
   * specific language governing permissions and limitations
   * under the License.
   */
  var scrollableTypes = config.scrollableTypes;

  var lazyloadWatched = false;
  function watchLazyload() {
    lazyloadWatched = true;['scroll',
    // 'transitionend',
    // 'webkitTransitionEnd',
    // 'animationend',
    // 'webkitAnimationEnd',
    'resize'].forEach(function (evt) {
      window.addEventListener(evt, getThrottleLazyload(25, document.body));
    });
    /**
     * In case the users use the body's overflow to scroll. Then the scroll
     * event would not be triggered on the window object but on the body.
     */
    document.body.addEventListener('scroll', getThrottleLazyload(25, document.body));
  }

  var idCnt = 0;
  var appearWatched = false;

  /**
   * during updating, the appear watcher binding on the appearWatched context
   * should be triggered within a debounced wrapper.
   * If the updating interval is shorter then 50 ms, then the appear events will
   * ignore the change in the previous 50 ms due to the debounce wrapper.
   */
  var debouncedWatchAppear = debounce(function () {
    watchAppear(appearWatched, true);
  }, 50);

  /**
   * if it's a scrollable tag, then watch appear events for it.
   */
  function watchAppearForScrollables(tagName, context) {
    // when this is a scroller/list/waterfall
    if (scrollableTypes.indexOf(tagName) > -1) {
      var sd = context.scrollDirection;
      if (!sd || sd !== 'horizontal') {
        appearWatched = context;
        watchAppear(context, true);
      }
    }
  }

  var base$1 = {
    beforeCreate: function beforeCreate() {
      if (!lazyloadWatched) {
        watchLazyload();
      }
    },

    updated: function updated() {
      var el = this.$el;
      if (!el || el.nodeType !== 1) {
        return;
      }
      if (this._rootId) {
        if (el.className.indexOf('weex-root') <= -1) {
          el.classList.add('weex-root');
          el.classList.add('weex-ct');
          el.setAttribute('data-wx-root-id', this._rootId);
        }
      }

      var tagName = this.$options && this.$options._componentTag;
      var metaUp = weex._meta.updated;
      if (!metaUp[tagName]) {
        metaUp[tagName] = 0;
      }
      metaUp[tagName]++;
      // will check appearing when no other changes in latest 50ms.
      debouncedWatchAppear();
      /**
       * since the updating of component may affect the layout, the lazyloading should
       * be fired.
       */
      this._fireLazyload();
    },

    mounted: function mounted() {
      var tagName = this.$options && this.$options._componentTag;
      var el = this.$el;
      if (!el || el.nodeType !== 1) {
        return;
      }
      if (typeof weex._components[tagName] !== 'undefined') {
        weex._components[tagName]++;
      }
      var metaMt = weex._meta.mounted;
      if (!metaMt[tagName]) {
        metaMt[tagName] = 0;
      }
      metaMt[tagName]++;

      watchAppearForScrollables(tagName, this);

      // when this is the root element of Vue instance.
      if (this === this.$root) {
        var rootId = "wx-root-" + idCnt++;
        if (!weex._root) {
          weex._root = {};
        }
        weex._root[rootId] = this;
        this._rootId = rootId;
        if (el.nodeType !== 1) {
          return;
        }
        el.classList.add('weex-root');
        el.classList.add('weex-ct');
        el.setAttribute('data-wx-root-id', rootId);

        /**
         * there's no scrollable component in this page. That is to say,
         * the page is using body scrolling instead of scrollabe components.
         * Then the appear watcher should be attached on the body.
         */
        if (!appearWatched) {
          appearWatched = this;
          watchAppear(this, true);
        }

        this._fireLazyload(el);
      }

      // give warning for not using $processStyle in vue-loader config.
      // if (!warned && !window._style_processing_added) {
      //   warnProcessStyle()
      // }
    },

    destroyed: function destroyed() {
      var el = this.$el;
      if (!el || el.nodeType !== 1) {
        return;
      }
      /**
       * if the destroyed element is above another panel with images inside, and the images
       * moved into the viewport, then the lazyloading should be triggered.
       */
      if (this._rootId) {
        delete weex._root[this._rootId];
        delete this._rootId;
      }
      var tagName = this.$options && this.$options._componentTag;
      if (typeof weex._components[tagName] !== 'undefined') {
        weex._components[tagName]--;
      }
      var metaDs = weex._meta.destroyed;
      if (!metaDs[tagName]) {
        metaDs[tagName] = 0;
      }
      metaDs[tagName]++;
      this._fireLazyload();
    },

    methods: {
      _fireLazyload: function _fireLazyload(el) {
        getThrottleLazyload(25, el || document.body)();
      }
    }
  };

  var event$1 = {
    methods: {
      // deprecated.
      $stopOutterA: function $stopOutterA(e) {
        return this.$stopOuterA(e);
      },

      $stopOuterA: function $stopOuterA(e) {
        if (e && e.preventDefault && e.target) {
          if (insideA(e.target)) {
            e.preventDefault();
          }
        }
      },

      $stopPropagation: function $stopPropagation(e) {
        if (e && e.stopPropagation) {
          e.stopPropagation();
        }
      }
    }
  };

  /*
   * Licensed to the Apache Software Foundation (ASF) under one
   * or more contributor license agreements.  See the NOTICE file
   * distributed with this work for additional information
   * regarding copyright ownership.  The ASF licenses this file
   * to you under the Apache License, Version 2.0 (the
   * "License"); you may not use this file except in compliance
   * with the License.  You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing,
   * software distributed under the License is distributed on an
   * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
   * KIND, either express or implied.  See the License for the
   * specific language governing permissions and limitations
   * under the License.
   */

  var bindingStyleNamesForPx2Rem$1 = config.bindingStyleNamesForPx2Rem;

  var style = {
    methods: {
      _px2rem: function _px2rem(value, rootValue) {
        var this$1 = this;

        if (typeof value === 'string') {
          return (value + '').replace(/[+-]?\d+(?:.\d*)?[pw]x/gi, function ($0) {
            return weex.utils.px2rem($0, rootValue);
          });
        }
        if (typeof value === 'number') {
          return weex.utils.px2rem(value + '', rootValue);
        }
        if (isPlainObject(value)) {
          for (var k in value) {
            if (value.hasOwnProperty(k) && bindingStyleNamesForPx2Rem$1.indexOf(k) > -1) {
              value[k] = weex.utils.px2rem(value[k] + '', rootValue);
            }
          }
          return value;
        }
        if (isArray(value)) {
          for (var i = 0, l = value.length; i < l; i++) {
            this$1._px2rem(value[i], rootValue);
          }
          return value;
        }
      },

      _processExclusiveStyle: function _processExclusiveStyle(styleObj, rootValue, tagName) {
        var transformer = getTransformer_1(tagName);
        return this._px2rem(transformer.transform(styleObj), rootValue);
      },

      _getParentRect: function _getParentRect() {
        var el = this.$el;
        var parent = el && el.parentElement;
        return parent && parent.getBoundingClientRect();
      }
    }
  };

  /*
   * Licensed to the Apache Software Foundation (ASF) under one
   * or more contributor license agreements.  See the NOTICE file
   * distributed with this work for additional information
   * regarding copyright ownership.  The ASF licenses this file
   * to you under the Apache License, Version 2.0 (the
   * "License"); you may not use this file except in compliance
   * with the License.  You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing,
   * software distributed under the License is distributed on an
   * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
   * KIND, either express or implied.  See the License for the
   * specific language governing permissions and limitations
   * under the License.
   */

  // input and textare has some common api and event
  var findEnterKeyType = function findEnterKeyType(key) {
    var keys = ['default', 'go', 'next', 'search', 'send'];
    if (keys.indexOf(key) > -1) {
      return key;
    }
    return 'done';
  };

  var inputCommon = {
    methods: {
      focus: function focus() {
        this.$el && this.$el.focus();
      },
      blur: function blur() {
        this.$el && this.$el.blur();
      },

      setSelectionRange: function setSelectionRange(start, end) {
        try {
          this.$el.setSelectionRange(start, end);
        } catch (e) {}
      },

      getSelectionRange: function getSelectionRange(callback) {
        try {
          var selection = window.getSelection();
          var str = selection.toString();
          var selectionStart = this.$el.value.indexOf(str);
          var selectionEnd = selectionStart === -1 ? selectionStart : selectionStart + str.length;
          callback && callback({
            selectionStart: selectionStart,
            selectionEnd: selectionEnd
          });
        } catch (e) {
          callback && callback(new Error('[vue-render] getSelection is not supported.'));
        }
      },

      getEditSelectionRange: function getEditSelectionRange(callback) {
        this.getSelectionRange(callback);
      },

      // support enter key event
      createKeyboardEvent: function createKeyboardEvent(events) {
        var customKeyType = this.returnKeyType;
        if (customKeyType) {
          var keyboardEvents = {
            'keyup': function keyup(ev) {
              var code = ev.keyCode;
              var key = ev.key;
              if (code === 13) {
                if (!key || key.toLowerCase() === 'tab') {
                  key = 'next';
                }
                dispatchNativeEvent(ev.target, 'return', {
                  key: key,
                  returnKeyType: findEnterKeyType(customKeyType),
                  value: ev.target.value
                });
              }
            }
          };
          events = extend(events, keyboardEvents);
        }
        return events;
      }
    }
  };

  /*
   * Licensed to the Apache Software Foundation (ASF) under one
   * or more contributor license agreements.  See the NOTICE file
   * distributed with this work for additional information
   * regarding copyright ownership.  The ASF licenses this file
   * to you under the Apache License, Version 2.0 (the
   * "License"); you may not use this file except in compliance
   * with the License.  You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing,
   * software distributed under the License is distributed on an
   * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
   * KIND, either express or implied.  See the License for the
   * specific language governing permissions and limitations
   * under the License.
   */
  var sticky = {
    destroyed: function destroyed() {
      if (!this._stickyAdded) {
        return;
      }
      var scroller = getParentScroller(this);
      if (!scroller) {
        return;
      }
      delete scroller._stickyChildren[this._uid];
    },

    methods: {
      _addSticky: function _addSticky() {
        var el = this.$el;
        if (!el || el.nodeType === 1) {
          return;
        }
        el.classList.add('sticky');
        if (!this._placeholder) {
          this._placeholder = el.cloneNode(true);
        }
        this._placeholder.style.display = 'block';
        this._placeholder.style.width = this.$el.offsetWidth + 'px';
        this._placeholder.style.height = this.$el.offsetHeight + 'px';
        el.parentNode.insertBefore(this._placeholder, this.$el);
      },

      _removeSticky: function _removeSticky() {
        var el = this.$el;
        if (!el || el.nodeType === 1) {
          return;
        }
        el.classList.remove('sticky');
        if (this._placeholder) {
          this._placeholder.parentNode.removeChild(this._placeholder);
        }
        this._placeholder = null;
      }
    }
  };

  /*
   * Licensed to the Apache Software Foundation (ASF) under one
   * or more contributor license agreements.  See the NOTICE file
   * distributed with this work for additional information
   * regarding copyright ownership.  The ASF licenses this file
   * to you under the Apache License, Version 2.0 (the
   * "License"); you may not use this file except in compliance
   * with the License.  You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing,
   * software distributed under the License is distributed on an
   * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
   * KIND, either express or implied.  See the License for the
   * specific language governing permissions and limitations
   * under the License.
   */

  /*
   * Licensed to the Apache Software Foundation (ASF) under one
   * or more contributor license agreements.  See the NOTICE file
   * distributed with this work for additional information
   * regarding copyright ownership.  The ASF licenses this file
   * to you under the Apache License, Version 2.0 (the
   * "License"); you may not use this file except in compliance
   * with the License.  You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing,
   * software distributed under the License is distributed on an
   * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
   * KIND, either express or implied.  See the License for the
   * specific language governing permissions and limitations
   * under the License.
   */
  window.global = window;
  window.weex = weex$4;

  weex$4._styleMap = {};['getComponentInlineStyle', 'extractComponentStyle', 'mapNativeEvents', 'trimTextVNodes'].forEach(function (method) {
    weex$4[method] = core[method].bind(weex$4);
  });

  weex$4.mixins = {
    inputCommon: inputCommon
  };

  /*
   * Licensed to the Apache Software Foundation (ASF) under one
   * or more contributor license agreements.  See the NOTICE file
   * distributed with this work for additional information
   * regarding copyright ownership.  The ASF licenses this file
   * to you under the Apache License, Version 2.0 (the
   * "License"); you may not use this file except in compliance
   * with the License.  You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing,
   * software distributed under the License is distributed on an
   * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
   * KIND, either express or implied.  See the License for the
   * specific language governing permissions and limitations
   * under the License.
   */
  var _inited$1 = false;

  var renderFunctionPlugin = {
    init: function init(weex) {
      if (_inited$1) {
        return;
      }
      _inited$1 = true;
      var Vue = weex.__vue__;
      var _render = Vue.prototype._render;
      Vue.prototype._render = function () {
        var weexRender = this._weexRender;
        var tag = this.$options && this.$options._componentTag;
        if (!weexRender && !isDef(weex._components[tag])) {
          var origRender = this.$options.render;
          weexRender = this._weexRender = function (h) {
            var args = [],
                len = arguments.length - 1;
            while (len-- > 0) {
              args[len] = arguments[len + 1];
            }return origRender.call.apply(origRender, [this, transformRender(this, h)].concat(args));
          };
          this.$options.render = weexRender;
        }
        return _render.call(this);
      };
    }
  };

  /*
   * Licensed to the Apache Software Foundation (ASF) under one
   * or more contributor license agreements.  See the NOTICE file
   * distributed with this work for additional information
   * regarding copyright ownership.  The ASF licenses this file
   * to you under the Apache License, Version 2.0 (the
   * "License"); you may not use this file except in compliance
   * with the License.  You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing,
   * software distributed under the License is distributed on an
   * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
   * KIND, either express or implied.  See the License for the
   * specific language governing permissions and limitations
   * under the License.
   */
  if (global.Vue) {
    setVue(global.Vue);
  }

  function setVue(vue) {
    if (!vue) {
      throw new Error('[Vue Render] Vue not found. Please make sure vue 2.x runtime is imported.');
    }
    if (global.weex.__vue__) {
      return;
    }
    global.weex.__vue__ = vue;
    weex.install(renderFunctionPlugin);
    console.log("[Vue Render] install Vue " + vue.version + ".");
  }

  /*
   * Licensed to the Apache Software Foundation (ASF) under one
   * or more contributor license agreements.  See the NOTICE file
   * distributed with this work for additional information
   * regarding copyright ownership.  The ASF licenses this file
   * to you under the Apache License, Version 2.0 (the
   * "License"); you may not use this file except in compliance
   * with the License.  You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing,
   * software distributed under the License is distributed on an
   * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
   * KIND, either express or implied.  See the License for the
   * specific language governing permissions and limitations
   * under the License.
   */
  /**
   * init weex.
   * @param  {Vue$2} Vue: Vue Constructor.
   * @param  {object} options: extend weex plugins.
   *         - components.
   *         - modules.
   */
  var _inited = false;
  function init(Vue /* options = {}*/) {
    if (_inited) {
      return;
    }
    _inited = true;

    setVue(Vue);

    Vue.prototype.$getConfig = function () {
      console.warn('[Vue Render] "this.$getConfig" is deprecated, please use "weex.config" instead.');
      return weex.config;
    };

    var htmlRegex = /^html:/i;
    Vue.config.isReservedTag = function (tag) {
      return htmlRegex.test(tag);
    };
    Vue.config.parsePlatformTagName = function (tag) {
      return tag.replace(htmlRegex, '');
    };

    function isWeexTag(tag) {
      return typeof weex._components[tag] !== 'undefined';
    }
    var oldGetTagNamespace = Vue.config.getTagNamespace;
    Vue.config.getTagNamespace = function (tag) {
      if (isWeexTag(tag)) {
        return;
      }
      return oldGetTagNamespace(tag);
    };

    Vue.mixin(base$1);
    Vue.mixin(event$1);
    Vue.mixin(style);
    Vue.mixin(sticky);
  }

  // auto init in dist mode.
  if (typeof window !== 'undefined' && window.Vue) {
    init(window.Vue);
  }

  weex.init = init;

  /*
   * Licensed to the Apache Software Foundation (ASF) under one
   * or more contributor license agreements.  See the NOTICE file
   * distributed with this work for additional information
   * regarding copyright ownership.  The ASF licenses this file
   * to you under the Apache License, Version 2.0 (the
   * "License"); you may not use this file except in compliance
   * with the License.  You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing,
   * software distributed under the License is distributed on an
   * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
   * KIND, either express or implied.  See the License for the
   * specific language governing permissions and limitations
   * under the License.
   */

  /**
   * @fileOverview Input component.
   * Support v-model only if vue version is larger than 2.2.0
   */
  var mapFormEvents$1;
  var appendCss$1;

  var ID_PREFIX_PLACEHOLDER_COLOR = 'wipt_plc_';
  var ID_PREFIX_INPUT = 'wipt_';
  var idCount = 0;

  function setPlaceholderColor(inputVm, placeholderColor) {
    if (!placeholderColor) {
      return;
    }
    var vendors = ['::-webkit-input-placeholder', ':-moz-placeholder', '::-moz-placeholder', ':-ms-input-placeholder', ':placeholder-shown'];
    var id = inputVm._id;
    appendCss$1(vendors.map(function (vendor, idx) {
      return "#" + ID_PREFIX_INPUT + id + vendors[idx] + "{color:" + placeholderColor + ";}";
    }).join(''), "" + ID_PREFIX_PLACEHOLDER_COLOR + id, true);
  }

  function processStyle(vm) {
    var styles = getComponentInlineStyle(vm);
    var phColor = styles.placeholderColor || styles['placeholder-color'];
    if (phColor) {
      setPlaceholderColor(vm, phColor);
    }
    return styles;
  }

  function getInput(weex) {
    var ref = weex.mixins;
    var inputCommon = ref.inputCommon;

    return {
      name: 'weex-input',
      mixins: [inputCommon],
      props: {
        type: {
          type: String,
          default: 'text',
          validator: function validator(value) {
            return ['email', 'number', 'password', 'search', 'tel', 'text', 'url', 'date', 'datetime', 'time'].indexOf(value) !== -1;
          }
        },
        value: String,
        placeholder: String,
        disabled: {
          type: [String, Boolean],
          default: false
        },
        autofocus: {
          type: [String, Boolean],
          default: false
        },
        maxlength: [String, Number],
        returnKeyType: String
      },

      render: function render(createElement) {
        if (!this._id) {
          this._id = idCount++;
        }
        var events = mapFormEvents$1(this);
        return createElement('html:input', {
          attrs: {
            'weex-type': 'input',
            id: "" + ID_PREFIX_INPUT + this._id,
            type: this.type,
            value: this.value,
            disabled: this.disabled !== 'false' && this.disabled !== false,
            autofocus: this.autofocus !== 'false' && this.autofocus !== false,
            placeholder: this.placeholder,
            maxlength: this.maxlength,
            'returnKeyType': this.returnKeyType
          },
          domProps: {
            value: this.value
          },
          on: this.createKeyboardEvent(events),
          staticClass: 'weex-input weex-el',
          staticStyle: processStyle(this)
        });
      }
    };
  }

  var input = {
    init: function init(weex) {
      mapFormEvents$1 = weex.utils.mapFormEvents;
      appendCss$1 = weex.utils.appendCss;

      weex.registerComponent('input', getInput(weex));
    }
  };

  __$styleInject("/*\n * Licensed to the Apache Software Foundation (ASF) under one\n * or more contributor license agreements.  See the NOTICE file\n * distributed with this work for additional information\n * regarding copyright ownership.  The ASF licenses this file\n * to you under the Apache License, Version 2.0 (the\n * \"License\"); you may not use this file except in compliance\n * with the License.  You may obtain a copy of the License at\n *\n *   http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing,\n * software distributed under the License is distributed on an\n * \"AS IS\" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY\n * KIND, either express or implied.  See the License for the\n * specific language governing permissions and limitations\n * under the License.\n */\n\n.weex-switch {\n  border: 0.013333rem solid #dfdfdf;\n  cursor: pointer;\n  vertical-align: middle;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  -webkit-box-sizing: content-box;\n          box-sizing: content-box;\n  background-clip: content-box;\n  color: #64bd63;\n  width: 1.333333rem;\n  height: 0.8rem;\n  background-color: white;\n  border-color: #dfdfdf;\n  -webkit-box-shadow: #dfdfdf 0 0 0 0 inset;\n          box-shadow: #dfdfdf 0 0 0 0 inset;\n  border-radius: 0.8rem;\n  -webkit-transition: border 0.4s, background-color 1.2s, -webkit-box-shadow 0.4s;\n  transition: border 0.4s, background-color 1.2s, -webkit-box-shadow 0.4s;\n  transition: border 0.4s, box-shadow 0.4s, background-color 1.2s;\n  transition: border 0.4s, box-shadow 0.4s, background-color 1.2s, -webkit-box-shadow 0.4s;\n}\n\n.weex-switch-checked {\n  background-color: #64bd63;\n  border-color: #64bd63;\n  -webkit-box-shadow: #64bd63 0 0 0 0.533333rem inset;\n          box-shadow: #64bd63 0 0 0 0.533333rem inset;\n}\n\n.weex-switch-checked.weex-switch-disabled {\n  opacity: 0.3\n}\n\n.weex-switch-disabled {\n  background-color: #EEEEEE;\n}\n\n.weex-switch-inner {\n  width: 0.8rem;\n  height: 0.8rem;\n  background: #fff;\n  border-radius: 100%;\n  -webkit-box-shadow: 0 0.013333rem 0.04rem rgba(0, 0, 0, 0.4);\n          box-shadow: 0 0.013333rem 0.04rem rgba(0, 0, 0, 0.4);\n  position: absolute;\n  top: 0;\n  left: 0;\n  -webkit-transition: background-color 0.4s, left 0.2s;\n  transition: background-color 0.4s, left 0.2s;\n}\n\n.weex-switch-checked > .weex-switch-inner {\n  left: 0.533333rem;\n}\n", undefined);

  /*
   * Licensed to the Apache Software Foundation (ASF) under one
   * or more contributor license agreements.  See the NOTICE file
   * distributed with this work for additional information
   * regarding copyright ownership.  The ASF licenses this file
   * to you under the Apache License, Version 2.0 (the
   * "License"); you may not use this file except in compliance
   * with the License.  You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing,
   * software distributed under the License is distributed on an
   * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
   * KIND, either express or implied.  See the License for the
   * specific language governing permissions and limitations
   * under the License.
   */
  function getSwitch(weex) {
    var extractComponentStyle = weex.extractComponentStyle;
    var ref = weex.utils;
    var dispatchNativeEvent = ref.dispatchNativeEvent;

    return {
      name: 'weex-switch',
      props: {
        checked: {
          type: [Boolean, String],
          default: false
        },
        disabled: {
          type: [Boolean, String],
          default: false
        },
        // Border color  when the switch is turned off
        tintColor: String,
        // Background color when the switch is turned on.
        onTintColor: String,
        // Color of the foreground switch grip.
        thumbTintColor: String
      },
      data: function data() {
        return {
          isChecked: this.checked !== 'false' && this.checked !== false,
          isDisabled: this.disabled !== 'false' && this.disabled !== false
        };
      },
      computed: {
        wrapperClass: function wrapperClass() {
          var classArray = ['weex-el', 'weex-switch'];
          this.isChecked && classArray.push('weex-switch-checked');
          this.isDisabled && classArray.push('weex-switch-disabled');
          return classArray.join(' ');
        },
        mergeStyle: function mergeStyle() {
          var style = extractComponentStyle(this);
          var ref = this;
          var tintColor = ref.tintColor;
          var onTintColor = ref.onTintColor;
          var isChecked = ref.isChecked;
          var isDisabled = ref.isDisabled;

          if (!isChecked && tintColor) {
            Object.assign(style, {
              borderColor: tintColor,
              boxShadow: tintColor + " 0 0 0 0 inset"
            });
          }

          if (isChecked && onTintColor) {
            Object.assign(style, {
              backgroundColor: onTintColor,
              color: onTintColor,
              borderColor: onTintColor,
              boxShadow: onTintColor + " 0 0 0 0.533333rem inset"
            });
          }

          isDisabled && Object.assign(style, {
            opacity: 0.3
          });

          return style;
        },
        smallStyle: function smallStyle() {
          var ref = this;
          var thumbTintColor = ref.thumbTintColor;
          var smallStyle = {};

          if (thumbTintColor) {
            smallStyle = {
              background: thumbTintColor
            };
          }
          return smallStyle;
        }
      },
      methods: {
        toggle: function toggle() {
          // TODO: handle the events
          if (!this.isDisabled) {
            this.isChecked = !this.isChecked;
            dispatchNativeEvent(this.$el, 'change', { value: this.isChecked });
          }
        }
      },

      mounted: function mounted() {
        var this$1 = this;

        var el = this.$el;
        if (el && el.nodeType === 1) {
          if (!this._removeClickHandler) {
            var handler = function handler(evt) {
              this$1.toggle();
            };
            this._removeClickHandler = el.removeEventListener.bind(el, 'weex$tap', handler);
            el.addEventListener('weex$tap', handler);
          }
        }
      },

      beforeDestroy: function beforeDestroy() {
        var rm = this._removeClickHandler;
        if (rm) {
          rm();
          delete this._removeClickHandler;
        }
      },

      render: function render(createElement) {
        return createElement('span', {
          attrs: { 'weex-type': 'switch' },
          staticClass: this.wrapperClass,
          staticStyle: this.mergeStyle
        }, [createElement('small', {
          staticClass: 'weex-switch-inner',
          staticStyle: this.smallStyle
        })]);
      }
    };
  }

  var _switch = {
    init: function init(weex) {
      weex.registerComponent('switch', getSwitch(weex));
    }
  };

  /*
   * Licensed to the Apache Software Foundation (ASF) under one
   * or more contributor license agreements.  See the NOTICE file
   * distributed with this work for additional information
   * regarding copyright ownership.  The ASF licenses this file
   * to you under the Apache License, Version 2.0 (the
   * "License"); you may not use this file except in compliance
   * with the License.  You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing,
   * software distributed under the License is distributed on an
   * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
   * KIND, either express or implied.  See the License for the
   * specific language governing permissions and limitations
   * under the License.
   */

  var DEFAULT_OFFSET_ACCURACY = 10;
  var DEFAULT_LOADMORE_OFFSET = 0;

  function getThrottledScroll(context) {
    var scale = weex.config.env.scale;
    if (!context._throttleScroll) {
      var wrapper = context.$refs.wrapper;
      var inner = context.$refs.inner;
      var preOffset = (context.scrollDirection === 'horizontal' ? wrapper.scrollLeft : wrapper.scrollTop) || 0;
      context._throttleScroll = weex.utils.throttle(function (evt) {
        var offset = context.scrollDirection === 'horizontal' ? wrapper.scrollLeft : wrapper.scrollTop;
        var indent = parseInt(context.offsetAccuracy) * scale;
        function triggerScroll() {
          var rect = inner.getBoundingClientRect();
          var evtObj = {
            contentSize: { width: rect.width, height: rect.height },
            contentOffset: {
              x: wrapper.scrollLeft,
              /**
               * positive direciton for y-axis is down.
               * so should use negative operation on scrollTop.
               *
               *  (0,0)---------------> x
               *       |
               *       |
               *       |
               *       |
               *       v y
               *
               */
              y: -wrapper.scrollTop
            }
          };
          if (context.$el) {
            weex.utils.dispatchNativeEvent(context.$el, 'weex$scroll', evtObj);
          }
        }
        if (Math.abs(offset - preOffset) >= indent) {
          triggerScroll();
          preOffset = offset;
        }
      }, 16, true);
    }
    return context._throttleScroll;
  }

  var scrollable$1 = {
    props: {
      loadmoreoffset: {
        type: [String, Number],
        default: DEFAULT_LOADMORE_OFFSET,
        validator: function validator(value) {
          var val = parseInt(value);
          return !isNaN(val) && val >= DEFAULT_LOADMORE_OFFSET;
        }
      },

      offsetAccuracy: {
        type: [Number, String],
        default: DEFAULT_OFFSET_ACCURACY,
        validator: function validator(value) {
          var val = parseInt(value);
          return !isNaN(val) && val >= DEFAULT_OFFSET_ACCURACY;
        }
      }
    },

    created: function created() {
      // should call resetLoadmore() to enable loadmore event.
      this._loadmoreReset = true;
    },

    mounted: function mounted() {
      this.reloadStickyChildren();
    },

    updated: function updated() {
      this.reloadStickyChildren();
    },

    methods: {
      updateLayout: function updateLayout() {
        var wrapper = this.$refs.wrapper;
        if (wrapper) {
          var rect = wrapper.getBoundingClientRect();
          this._wrapperWidth = rect.width;
          this._wrapperHeight = rect.height;
        }
        var inner = this.$refs.inner;
        var children = inner && inner.children;
        if (inner) {
          var rect$1 = inner.getBoundingClientRect();
          this._innerWidth = rect$1.width;
          this._innerHeight = rect$1.height;
        }
        var loadingEl = this._loading && this._loading.$el;
        var refreshEl = this._refresh && this._refresh.$el;
        if (loadingEl) {
          this._innerHeight -= loadingEl.getBoundingClientRect().height;
        }
        if (refreshEl) {
          this._innerHeight -= refreshEl.getBoundingClientRect().height;
        }
        // inner width is always the viewport width somehow in horizontal
        // scoller, therefore the inner width should be reclaculated.
        if (this.scrollDirection === 'horizontal' && children) {
          this._innerWidth = weex.utils.getRangeWidth(inner);
        }
      },

      resetLoadmore: function resetLoadmore() {
        this._loadmoreReset = true;
      },

      /**
       * process sticky children in scrollable components.
       * current only support list and vertical scroller.
       */
      processSticky: function processSticky() {
        var this$1 = this;

        /**
         * current browser support 'sticky' or '-webkit-sticky', so there's no need
         * to do further more.
         */
        var stickyChildren = this._stickyChildren;
        var len = stickyChildren && stickyChildren.length || 0;
        if (len <= 0) {
          return;
        }

        var origSticky = weex.utils.supportSticky();
        // current only support list and vertical scroller.
        if (this.scrollDirection === 'horizontal') {
          return;
        }

        var container = this.$el;
        if (!container) {
          return;
        }
        var scrollTop = container.scrollTop;

        var stickyChild;
        for (var i = 0; i < len; i++) {
          stickyChild = stickyChildren[i];
          if (origSticky) {
            this$1.addSticky(stickyChild, origSticky);
          } else if (stickyChild._initOffsetTop < scrollTop) {
            this$1.addSticky(stickyChild);
          } else {
            this$1.removeSticky(stickyChild);
          }
        }
      },

      addSticky: function addSticky(el, supportSticky) {
        if (supportSticky) {
          el.classList.add('weex-ios-sticky');
        } else {
          if (el._sticky === true) {
            return;
          }
          el._sticky = true;
          if (!el._placeholder) {
            var placeholder = el.cloneNode(true);
            placeholder._origNode = el;
            placeholder.classList.add('weex-sticky-placeholder');
            el._placeholder = placeholder;
          }
          el.parentNode.insertBefore(el._placeholder, el);
          el.style.width = window.getComputedStyle(el).width;
          el.classList.add('weex-sticky');
        }
      },

      removeSticky: function removeSticky(el) {
        if (typeof el._sticky === 'undefined' || el._sticky === false) {
          return;
        }
        el._sticky = false;
        el.parentNode.removeChild(el._placeholder);
        el.classList.remove('weex-sticky');
      },

      reloadStickyChildren: function reloadStickyChildren() {
        var container = this.$el;
        if (!container) {
          return;
        }
        var stickyChildren = [];
        var children = container.querySelectorAll('[sticky]');
        for (var i = 0, l = children.length; i < l; i++) {
          var child = children[i];
          if (/weex-sticky-placeholder/.test(child.className)) {
            // is a placeholder.
            var origNode = child._origNode;
            if (!origNode || !origNode.parentNode || origNode.parentNode !== child.parentNode) {
              child.parentNode.removeChild(child);
            }
          } else {
            // is a sticky node.
            stickyChildren.push(child);
            if (!child._sticky) {
              child._initOffsetTop = child.offsetTop;
            }
          }
        }
        this._stickyChildren = stickyChildren;
      },

      handleScroll: function handleScroll(event) {
        weex.utils.getThrottleLazyload(25, this.$el, 'scroll')();
        getThrottledScroll(this)(event);

        this.processSticky();

        // fire loadmore event.
        var inner = this.$refs.inner;
        if (inner) {
          var innerLength = this.scrollDirection === 'horizontal' ? this._innerWidth : this._innerHeight;
          if (!this._innerLength) {
            this._innerLength = innerLength;
          }
          if (this._innerLength !== innerLength) {
            this._innerLength = innerLength;
            this._loadmoreReset = true;
          }
          if (this._loadmoreReset && this.reachBottom(this.loadmoreoffset)) {
            this._loadmoreReset = false;
            var el = this.$el;
            if (el) {
              weex.utils.dispatchNativeEvent(el, 'loadmore');
            }
          }
        }
      },

      reachTop: function reachTop() {
        var wrapper = this.$refs.wrapper;
        return !!wrapper && wrapper.scrollTop <= 0;
      },

      reachBottom: function reachBottom(offset) {
        var wrapper = this.$refs.wrapper;
        var inner = this.$refs.inner;
        offset = parseInt(offset || 0) * weex.config.env.scale;

        if (wrapper && inner) {
          var key = this.scrollDirection === 'horizontal' ? 'width' : 'height';
          var innerLength = this["_inner" + key[0].toUpperCase() + key.substr(1)];
          var wrapperLength = this["_wrapper" + key[0].toUpperCase() + key.substr(1)];
          var scrollOffset = this.scrollDirection === 'horizontal' ? wrapper.scrollLeft : wrapper.scrollTop;
          return scrollOffset >= innerLength - wrapperLength - offset;
        }
        return false;
      },

      handleTouchStart: function handleTouchStart(event) {
        if (this._loading || this._refresh) {
          var touch = event.changedTouches[0];
          this._touchParams = {
            reachTop: this.reachTop(),
            reachBottom: this.reachBottom(),
            startTouchEvent: touch,
            startX: touch.pageX,
            startY: touch.pageY,
            timeStamp: event.timeStamp
          };
        }
      },

      handleTouchMove: function handleTouchMove(event) {
        if (!this._touchParams || !this._refresh && !this._loading) {
          return;
        }
        var inner = this.$refs.inner;
        var ref = this._touchParams;
        var startY = ref.startY;
        var reachTop = ref.reachTop;
        var reachBottom = ref.reachBottom;
        if (inner) {
          var touch = event.changedTouches[0];
          var offsetY = touch.pageY - startY;
          var dir = offsetY > 0 ? 'down' : 'up';
          this._touchParams.offsetY = offsetY;
          if (this._refresh && dir === 'down' && reachTop) {
            this._refresh.pullingDown(offsetY);
          } else if (this._loading && dir === 'up' && reachBottom) {
            this._loading.pullingUp(-offsetY);
          }
        }
      },

      handleTouchEnd: function handleTouchEnd(event) {
        if (!this._touchParams || !this._refresh && !this._loading) {
          return;
        }
        var inner = this.$refs.inner;
        var ref = this._touchParams;
        var startY = ref.startY;
        var reachTop = ref.reachTop;
        var reachBottom = ref.reachBottom;
        if (inner) {
          var touch = event.changedTouches[0];
          var offsetY = touch.pageY - startY;
          var dir = offsetY > 0 ? 'down' : 'up';
          this._touchParams.offsetY = offsetY;
          if (this._refresh && dir === 'down' && reachTop) {
            this._refresh.pullingEnd();
          } else if (this._loading && dir === 'up' && reachBottom) {
            this._loading.pullingEnd();
          }
        }
        delete this._touchParams;
      }
    }
  };

  /*
   * Licensed to the Apache Software Foundation (ASF) under one
   * or more contributor license agreements.  See the NOTICE file
   * distributed with this work for additional information
   * regarding copyright ownership.  The ASF licenses this file
   * to you under the Apache License, Version 2.0 (the
   * "License"); you may not use this file except in compliance
   * with the License.  You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing,
   * software distributed under the License is distributed on an
   * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
   * KIND, either express or implied.  See the License for the
   * specific language governing permissions and limitations
   * under the License.
   */

  /*
   * Licensed to the Apache Software Foundation (ASF) under one
   * or more contributor license agreements.  See the NOTICE file
   * distributed with this work for additional information
   * regarding copyright ownership.  The ASF licenses this file
   * to you under the Apache License, Version 2.0 (the
   * "License"); you may not use this file except in compliance
   * with the License.  You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing,
   * software distributed under the License is distributed on an
   * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
   * KIND, either express or implied.  See the License for the
   * specific language governing permissions and limitations
   * under the License.
   */
  function getList(weex) {
    var extractComponentStyle = weex.extractComponentStyle;

    return {
      name: 'weex-list',
      mixins: [scrollable$1],
      computed: {
        wrapperClass: function wrapperClass() {
          var classArray = ['weex-list', 'weex-list-wrapper', 'weex-ct'];
          this._refresh && classArray.push('with-refresh');
          this._loading && classArray.push('with-loading');
          return classArray.join(' ');
        }
      },

      methods: {
        createChildren: function createChildren(h) {
          var slots = this.$slots.default || [];
          this._cells = slots.filter(function (vnode) {
            if (!vnode.tag && !vnode.componentOptions) {
              return false;
            }
            return true;
          });
          return [h('article', {
            ref: 'inner',
            staticClass: 'weex-list-inner weex-ct'
          }, this._cells)];
        }
      },

      render: function render(createElement) {
        var this$1 = this;

        this.weexType = 'list';

        this.$nextTick(function () {
          this$1.updateLayout();
        });

        return createElement('main', {
          ref: 'wrapper',
          attrs: { 'weex-type': 'list' },
          staticClass: this.wrapperClass,
          on: {
            scroll: this.handleScroll,
            touchstart: this.handleTouchStart,
            touchmove: this.handleTouchMove,
            touchend: this.handleTouchEnd
          },
          staticStyle: extractComponentStyle(this)
        }, this.createChildren(createElement));
      }
    };
  }

  var list = {
    init: function init(weex) {
      weex.registerComponent('list', getList(weex));
    }
  };

  /*
   * Licensed to the Apache Software Foundation (ASF) under one
   * or more contributor license agreements.  See the NOTICE file
   * distributed with this work for additional information
   * regarding copyright ownership.  The ASF licenses this file
   * to you under the Apache License, Version 2.0 (the
   * "License"); you may not use this file except in compliance
   * with the License.  You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing,
   * software distributed under the License is distributed on an
   * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
   * KIND, either express or implied.  See the License for the
   * specific language governing permissions and limitations
   * under the License.
   */

  function getScroller(weex) {
    var extractComponentStyle = weex.extractComponentStyle;

    return {
      name: 'weex-scroller',
      mixins: [scrollable$1],
      props: {
        scrollDirection: {
          type: [String],
          default: 'vertical',
          validator: function validator(value) {
            return ['horizontal', 'vertical'].indexOf(value) !== -1;
          }
        },
        scrollable: {
          type: [Boolean],
          default: true
        }
      },
      computed: {
        wrapperClass: function wrapperClass() {
          var classArray = ['weex-scroller', 'weex-scroller-wrapper', 'weex-ct'];
          if (this.scrollDirection === 'horizontal') {
            classArray.push('weex-scroller-horizontal');
          } else {
            classArray.push('weex-scroller-vertical');
          }
          if (!this.scrollable) {
            classArray.push('weex-scroller-disabled');
          }
          return classArray.join(' ');
        }
      },

      methods: {
        createChildren: function createChildren(h) {
          var slots = this.$slots.default || [];
          this._cells = slots.filter(function (vnode) {
            if (!vnode.tag && !vnode.componentOptions) {
              return false;
            }
            return true;
          });
          return [h('article', {
            ref: 'inner',
            staticClass: 'weex-scroller-inner weex-ct'
          }, this._cells)];
        }
      },

      render: function render(createElement) {
        var this$1 = this;

        this.weexType = 'scroller';

        /* istanbul ignore next */
        // if ("production" === 'development') {
        //   validateStyles('scroller', this.$vnode.data && this.$vnode.data.staticStyle)
        // }

        this._cells = this.$slots.default || [];
        this.$nextTick(function () {
          this$1.updateLayout();
        });

        return createElement('main', {
          ref: 'wrapper',
          attrs: { 'weex-type': 'scroller' },
          on: {
            scroll: this.handleScroll,
            touchstart: this.handleTouchStart,
            touchmove: this.handleTouchMove,
            touchend: this.handleTouchEnd
          },
          staticClass: this.wrapperClass,
          staticStyle: extractComponentStyle(this)
        }, this.createChildren(createElement));
      }
    };
  }

  var scroller = {
    init: function init(weex) {
      weex.registerComponent('scroller', getScroller(weex));
    }
  };

  /*
   * Licensed to the Apache Software Foundation (ASF) under one
   * or more contributor license agreements.  See the NOTICE file
   * distributed with this work for additional information
   * regarding copyright ownership.  The ASF licenses this file
   * to you under the Apache License, Version 2.0 (the
   * "License"); you may not use this file except in compliance
   * with the License.  You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing,
   * software distributed under the License is distributed on an
   * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
   * KIND,  either express or implied.  See the License for the
   * specific language governing permissions and limitations
   * under the License.
   */

  /**
   * @fileoverview waterfall
   * NOTE: only support full screen width waterfall.
   */

  var NORMAL_GAP_SIZE = 32;
  var DEFAULT_COLUMN_COUNT = 1;

  function getWaterfall(weex) {
    var extractComponentStyle = weex.extractComponentStyle;

    return {
      name: 'weex-waterfall',
      mixins: [scrollable$1],
      props: {
        /**
         * specified gap size.
         * value can be number or 'normal'. 'normal' (32px) by default.
         */
        columnGap: {
          type: [String, Number],
          default: 'normal',
          validator: function validator(val) {
            if (!val || val === 'normal') {
              return true;
            }
            val = parseInt(val);
            return !isNaN(val) && val > 0;
          }
        },
        /**
         * the maximum column counts.
         * value can be number or 'auto'. 1 by default.
         */
        columnCount: {
          type: [String, Number],
          default: DEFAULT_COLUMN_COUNT,
          validator: function validator(val) {
            val = parseInt(val);
            return !isNaN(val) && val > 0;
          }
        },
        /**
         * the mimimum column width.
         * value can be number or 'auto'. 'auto' by default.
         */
        columnWidth: {
          type: [String, Number],
          default: 'auto',
          validator: function validator(val) {
            if (!val || val === 'auto') {
              return true;
            }
            val = parseInt(val);
            return !isNaN(val) && val > 0;
          }
        }
      },

      mounted: function mounted() {
        this._nextTick();
      },

      updated: function updated() {
        this.$nextTick(this._nextTick());
      },

      methods: {
        _createChildren: function _createChildren(h, rootStyle) {
          var this$1 = this;

          var slots = (this.$slots.default || []).slice();
          this._headers = [];
          this._footers = [];
          this._others = [];
          var len = slots.length;

          for (var i = 0; i < len; i++) {
            var vnode = slots[i];
            var tag = vnode.componentOptions && vnode.componentOptions.tag || vnode.tag;
            if (tag === 'refresh' || tag === 'loading') {
              continue;
            }
            if (tag === 'section') {
              // cell
              break;
            }
            if (tag === 'header') {
              this$1._headers.push(vnode);
              slots[i] = null; // should not included in footer.
            }
          }

          for (var i$1 = len - 1; i$1 >= 0; i$1--) {
            var vnode$1 = slots[i$1];
            if (!vnode$1) {
              continue;
            } // already taken by header.
            var tag$1 = vnode$1.componentOptions && vnode$1.componentOptions.tag || vnode$1.tag;
            if (tag$1 === 'refresh' || tag$1 === 'loading') {
              continue;
            }
            if (tag$1 === 'section') {
              // cell
              break;
            }
            if (tag$1 === 'header') {
              this$1._footers.push(vnode$1);
            }
          }

          this._cells = slots.filter(function (vnode) {
            if (!vnode) {
              return false;
            }
            var cmpOpts = vnode.componentOptions;
            if (!vnode.tag && !cmpOpts) {
              return false;
            }
            var tag = cmpOpts && cmpOpts.tag || vnode.tag;
            if (tag === 'refresh' || tag === 'loading') {
              this$1["_" + tag] = vnode;
              return false;
            }
            if (tag !== 'section') {
              this$1._others.push(vnode);
              return false;
            }
            return true;
          });

          this._reCalc(rootStyle);
          this._genColumns(h);
          var children = [];
          this._refresh && children.push(this._refresh);
          children = children.concat(this._headers);
          // .concat(this._others)
          children.push(h('html:div', {
            ref: 'columns',
            staticClass: 'weex-waterfall-inner-columns weex-ct'
          }, this._columns));
          children.push(h('html:div', {
            ref: 'footers',
            staticClass: 'weex-waterfall-footers weex-ct'
          }, this._footers));
          this._loading && children.push(this._loading);
          return [h('article', {
            ref: 'inner',
            staticClass: 'weex-waterfall-inner weex-ct'
          }, children)];
        },

        _reCalc: function _reCalc(rootStyle) {
          /**
           * NOTE: columnGap and columnWidth can't both be auto.
           * NOTE: the formula:
           *  totalWidth = n * w + (n - 1) * gap
           * 1. if columnCount = n then calc w
           * 2. if columnWidth = w then calc n
           * 3. if columnWidth = w and columnCount = n then calc totalWidth
           *    3.1 if totalWidth < ctWidth then increase columnWidth
           *    3.2 if totalWidth > ctWidth then decrease columnCount
           */
          var width, gap, cnt, ctWidth;
          var scale = weex.config.env.scale;
          var el = this.$el;
          function getCtWidth(width, style) {
            var padding = style.padding ? parseInt(style.padding) * 2 : parseInt(style.paddingLeft || 0) + parseInt(style.paddingRight || 0);
            return width - padding;
          }
          if (el && el.nodeType === 1) {
            // already mounted
            var cstyle = window.getComputedStyle(el);
            ctWidth = getCtWidth(el.getBoundingClientRect().width, cstyle);
          } else {
            // not mounted.
            // only support full screen width for waterfall component.
            ctWidth = getCtWidth(document.documentElement.clientWidth, rootStyle);
          }

          gap = this.columnGap;
          if (gap && gap !== 'normal') {
            gap = parseInt(gap);
          } else {
            gap = NORMAL_GAP_SIZE;
          }
          gap = gap * scale;

          width = this.columnWidth;
          cnt = this.columnCount;
          if (width && width !== 'auto') {
            width = parseInt(width) * scale;
          }
          if (cnt && cnt !== 'auto') {
            cnt = parseInt(cnt);
          }

          // 0. if !columnCount && !columnWidth
          if (cnt === 'auto' && width === 'auto') {}
          // 1. if columnCount = n then calc w.
          else if (cnt !== 'auto' && width === 'auto') {
              width = (ctWidth - (cnt - 1) * gap) / cnt;
            }
            // 2. if columnWidth = w then calc n.
            else if (cnt === 'auto' && width !== 'auto') {
                cnt = (ctWidth + gap) / (width + gap);
              }
              // 3. if columnWidth = w and columnCount = n then calc totalWidth
              else if (cnt !== 'auto' && width !== 'auto') {
                  var totalWidth;
                  var adjustCountAndWidth = function adjustCountAndWidth() {
                    totalWidth = cnt * width + (cnt - 1) * gap;
                    if (totalWidth < ctWidth) {
                      width += (ctWidth - totalWidth) / cnt;
                    } else if (totalWidth > ctWidth && cnt > 1) {
                      cnt--;
                      adjustCountAndWidth();
                    } else if (totalWidth > ctWidth) {
                      // cnt === 1
                      width = ctWidth;
                    }
                  };
                  adjustCountAndWidth();
                }
          this._columnCount = cnt;
          this._columnWidth = width;
          this._columnGap = gap;
        },

        _genColumns: function _genColumns(createElement) {
          var this$1 = this;

          this._columns = [];
          var cells = this._cells;
          var columnCnt = this._columnCount;
          var len = cells.length;
          var columnCells = this._columnCells = Array(columnCnt).join('.').split('.').map(function () {
            return [];
          });
          // spread cells to the columns using simpole polling algorithm.
          for (var i = 0; i < len; i++) {
            (cells[i].data.attrs || (cells[i].data.attrs = {}))['data-cell'] = i;
            columnCells[i % columnCnt].push(cells[i]);
          }
          for (var i$1 = 0; i$1 < columnCnt; i$1++) {
            this$1._columns.push(createElement('html:div', {
              ref: "column" + i$1,
              attrs: {
                'data-column': i$1
              },
              staticClass: 'weex-ct',
              staticStyle: {
                width: this$1._columnWidth + 'px',
                marginLeft: i$1 === 0 ? 0 : this$1._columnGap + 'px'
              }
            }, columnCells[i$1]));
          }
        },

        _nextTick: function _nextTick() {
          this._reLayoutChildren();
        },

        _reLayoutChildren: function _reLayoutChildren() {
          var this$1 = this;

          /**
           * treat the shortest column bottom as the match standard.
           * whichever cell exceeded it would be rearranged.
           * 1. m = shortest column bottom.
           * 2. get all cell ids who is below m.
           * 3. calculate which cell should be in which column.
           */
          var columnCnt = this._columnCount;
          var columnDoms = [];
          var columnAppendFragments = [];
          var columnBottoms = [];
          var minBottom = Number.MAX_SAFE_INTEGER;
          var minBottomColumnIndex = 0;

          // 1. find the shortest column bottom.
          for (var i = 0; i < columnCnt; i++) {
            var columnDom = this$1._columns[i].elm;
            var lastChild = columnDom.lastElementChild;
            var bottom = lastChild ? lastChild.getBoundingClientRect().bottom : 0;
            columnDoms.push(columnDom);
            columnBottoms[i] = bottom;
            columnAppendFragments.push(document.createDocumentFragment());
            if (bottom < minBottom) {
              minBottom = bottom;
              minBottomColumnIndex = i;
            }
          }

          // 2. get all cell ids who is below m.
          var belowCellIds = [];
          var belowCells = {};
          for (var i$1 = 0; i$1 < columnCnt; i$1++) {
            if (i$1 === minBottomColumnIndex) {
              continue;
            }
            var columnDom$1 = columnDoms[i$1];
            var cellsInColumn = columnDom$1.querySelectorAll('section.weex-cell');
            var len = cellsInColumn.length;
            for (var j = len - 1; j >= 0; j--) {
              var cellDom = cellsInColumn[j];
              var cellRect = cellDom.getBoundingClientRect();
              if (cellRect.top > minBottom) {
                var id = ~~cellDom.getAttribute('data-cell');
                belowCellIds.push(id);
                belowCells[id] = { elm: cellDom, height: cellRect.height };
                columnBottoms[i$1] -= cellRect.height;
              }
            }
          }

          // 3. calculate which cell should be in which column and rearrange them
          //  in the dom tree.
          belowCellIds.sort(function (a, b) {
            return a > b;
          });
          var cellIdsLen = belowCellIds.length;
          function addToShortestColumn(belowCell) {
            // find shortest bottom.
            minBottom = Math.min.apply(Math, columnBottoms);
            minBottomColumnIndex = columnBottoms.indexOf(minBottom);
            var cellElm = belowCell.elm;
            var cellHeight = belowCell.height;
            columnAppendFragments[minBottomColumnIndex].appendChild(cellElm);
            columnBottoms[minBottomColumnIndex] += cellHeight;
          }
          for (var i$2 = 0; i$2 < cellIdsLen; i$2++) {
            addToShortestColumn(belowCells[belowCellIds[i$2]]);
          }
          for (var i$3 = 0; i$3 < columnCnt; i$3++) {
            columnDoms[i$3].appendChild(columnAppendFragments[i$3]);
          }
        }
      },

      render: function render(createElement) {
        var this$1 = this;

        this.weexType = 'waterfall';
        this._cells = this.$slots.default || [];
        this.$nextTick(function () {
          this$1.updateLayout();
        });
        var mergedStyle = extractComponentStyle(this);
        return createElement('main', {
          ref: 'wrapper',
          attrs: { 'weex-type': 'waterfall' },
          on: {
            scroll: this.handleScroll,
            touchstart: this.handleTouchStart,
            touchmove: this.handleTouchMove,
            touchend: this.handleTouchEnd
          },
          staticClass: 'weex-waterfall weex-waterfall-wrapper weex-ct',
          staticStyle: mergedStyle
        }, this._createChildren(createElement, mergedStyle));
      }
    };
  }

  var waterfall = {
    init: function init(weex) {
      weex.registerComponent('waterfall', getWaterfall(weex));
    }
  };

  /*
   * Licensed to the Apache Software Foundation (ASF) under one
   * or more contributor license agreements.  See the NOTICE file
   * distributed with this work for additional information
   * regarding copyright ownership.  The ASF licenses this file
   * to you under the Apache License, Version 2.0 (the
   * "License"); you may not use this file except in compliance
   * with the License.  You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing,
   * software distributed under the License is distributed on an
   * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
   * KIND, either express or implied.  See the License for the
   * specific language governing permissions and limitations
   * under the License.
   */

  function getHeader(weex) {
    var extractComponentStyle = weex.extractComponentStyle;

    return {
      render: function render(createElement) {
        var attrs = this.$vnode.data.attrs;
        return createElement('html:header', {
          attrs: {
            'weex-type': 'header',
            sticky: this.$parent.weexType === 'waterfall' && typeof attrs.sticky === 'undefined' ? undefined : ''
          },
          ref: 'header',
          staticClass: 'weex-header weex-ct',
          staticStyle: extractComponentStyle(this)
        }, this.$slots.default);
      }
    };
  }

  var header = {
    init: function init(weex) {
      weex.registerComponent('header', getHeader(weex));
    }
  };

  /*
   * Licensed to the Apache Software Foundation (ASF) under one
   * or more contributor license agreements.  See the NOTICE file
   * distributed with this work for additional information
   * regarding copyright ownership.  The ASF licenses this file
   * to you under the Apache License, Version 2.0 (the
   * "License"); you may not use this file except in compliance
   * with the License.  You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing,
   * software distributed under the License is distributed on an
   * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
   * KIND, either express or implied.  See the License for the
   * specific language governing permissions and limitations
   * under the License.
   */

  function getLoading() {
    var extractComponentStyle = weex.extractComponentStyle;
    var ref = weex.utils;
    var dispatchNativeEvent = ref.dispatchNativeEvent;

    return {
      name: 'weex-loading',
      props: {
        display: {
          type: String,
          default: 'show',
          validator: function validator(value) {
            return ['show', 'hide'].indexOf(value) !== -1;
          }
        }
      },
      data: function data() {
        return {
          height: -1,
          viewHeight: 0
        };
      },
      mounted: function mounted() {
        this.viewHeight = this.$el.offsetHeight;
        if (this.display === 'hide') {
          this.height = 0;
        } else {
          this.height = this.viewHeight;
        }
      },
      watch: {
        height: function height(val) {
          var offset = val + "px";
          this.$el.style.height = offset;
          this.$el.style.bottom = offset;
        },
        display: function display(val) {
          if (val === 'hide') {
            this.height = 0;
          } else {
            this.height = this.viewHeight;
          }
        }
      },
      methods: {
        pulling: function pulling(offsetY) {
          if (offsetY === void 0) offsetY = 0;

          this.height = offsetY;
        },
        pullingUp: function pullingUp(offsetY) {
          this.$el.style.transition = "height 0s";
          this.pulling(offsetY);
        },
        pullingEnd: function pullingEnd() {
          this.$el && (this.$el.style.transition = "height .2s");
          if (this.height >= this.viewHeight) {
            this.pulling(this.viewHeight);
            if (this.$el) {
              dispatchNativeEvent(this.$el, 'loading');
            }
          } else {
            this.pulling(0);
          }
        },
        getChildren: function getChildren() {
          var children = this.$slots.default || [];
          if (this.display === 'show') {
            return children;
          }
          return children.filter(function (vnode) {
            return vnode.componentOptions && vnode.componentOptions.tag !== 'loading-indicator';
          });
        }
      },
      render: function render(createElement) {
        this.$parent._loading = this;
        return createElement('aside', {
          ref: 'loading',
          attrs: { 'weex-type': 'loading' },
          staticClass: 'weex-loading weex-ct',
          staticStyle: extractComponentStyle(this)
        }, this.getChildren());
      }
    };
  }

  var loading = {
    init: function init(weex) {
      weex.registerComponent('loading', getLoading(weex));
    }
  };

  /*
   * Licensed to the Apache Software Foundation (ASF) under one
   * or more contributor license agreements.  See the NOTICE file
   * distributed with this work for additional information
   * regarding copyright ownership.  The ASF licenses this file
   * to you under the Apache License, Version 2.0 (the
   * "License"); you may not use this file except in compliance
   * with the License.  You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing,
   * software distributed under the License is distributed on an
   * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
   * KIND, either express or implied.  See the License for the
   * specific language governing permissions and limitations
   * under the License.
   */

  function getRefresh(weex) {
    var extractComponentStyle = weex.extractComponentStyle;
    var ref = weex.utils;
    var dispatchNativeEvent = ref.dispatchNativeEvent;

    return {
      name: 'weex-refresh',
      props: {
        display: {
          type: String,
          default: 'show',
          validator: function validator(value) {
            return ['show', 'hide'].indexOf(value) !== -1;
          }
        }
      },
      data: function data() {
        return {
          lastDy: 0,
          viewHeight: 0,
          height: -1
        };
      },
      mounted: function mounted() {
        this.viewHeight = this.$el.offsetHeight;
        if (this.display === 'hide') {
          this.height = 0;
        } else {
          this.height = this.viewHeight;
        }
      },
      watch: {
        height: function height(val) {
          this.$el.style.height = val + "px";
        },
        display: function display(val) {
          if (val === 'hide') {
            this.height = 0;
          } else {
            this.height = this.viewHeight;
          }
        }
      },
      methods: {
        pulling: function pulling(offsetY) {
          if (offsetY === void 0) offsetY = 0;

          this.height = offsetY;
          if (this.$el) {
            dispatchNativeEvent(this.$el, 'pullingdown', {
              dy: offsetY - this.lastDy,
              pullingDistance: offsetY,
              viewHeight: this.viewHeight
            });
          }
          this.lastDy = offsetY;
        },
        pullingDown: function pullingDown(offsetY) {
          this.$el.style.transition = "height 0s";
          this.pulling(offsetY);
        },
        pullingEnd: function pullingEnd() {
          this.$el && (this.$el.style.transition = "height .2s");
          if (this.height >= this.viewHeight) {
            this.pulling(this.viewHeight);
            if (this.$el) {
              dispatchNativeEvent(this.$el, 'refresh');
            }
          } else {
            this.pulling(0);
          }
        },
        getChildren: function getChildren() {
          var children = this.$slots.default || [];
          if (this.display === 'show') {
            return children;
          }
          return children.filter(function (vnode) {
            return vnode.componentOptions && vnode.componentOptions.tag !== 'loading-indicator';
          });
        }
      },
      render: function render(createElement) {
        this.$parent._refresh = this;
        return createElement('aside', {
          ref: 'refresh',
          attrs: { 'weex-type': 'refresh' },
          staticClass: 'weex-refresh weex-ct',
          staticStyle: extractComponentStyle(this)
        }, this.getChildren());
      }
    };
  }

  var refresh = {
    init: function init(weex) {
      weex.registerComponent('refresh', getRefresh(weex));
    }
  };

  /*
   * Licensed to the Apache Software Foundation (ASF) under one
   * or more contributor license agreements.  See the NOTICE file
   * distributed with this work for additional information
   * regarding copyright ownership.  The ASF licenses this file
   * to you under the Apache License, Version 2.0 (the
   * "License"); you may not use this file except in compliance
   * with the License.  You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing,
   * software distributed under the License is distributed on an
   * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
   * KIND, either express or implied.  See the License for the
   * specific language governing permissions and limitations
   * under the License.
   */
  var extractComponentStyle$1;
  var getRgb$1;
  var loopArray$1;
  var getStyleSheetById$1;

  var _css = "\n.weex-refresh-indicator,\n.weex-loading-indicator {\n  width: 1rem !important;\n  height: 1rem !important;\n  -webkit-box-align: center;\n  -moz-box-align: center;\n  -webkit-align-items: center;\n  -ms-flex-align: center;\n  align-items: center;\n  -webkit-box-pack: center;\n  -moz-box-pack: center;\n  -webkit-justify-content: center;\n  -ms-flex-pack: center;\n  justify-content: center;\n  overflow: visible;\n  background: none;\n}\n.weex-refresh-indicator:before,\n.weex-loading-indicator:before {\n  display: block;\n  content: '';\n  font-size: 0.16rem;\n  width: 0.5em;\n  height: 0.5em;\n  left: 0;\n  top: 0;\n  border-radius: 50%;\n  position: relative;\n  text-indent: -9999em;\n  -webkit-animation: weex-spinner 1.1s infinite ease;\n  -moz-animation: weex-spinner 1.1s infinite ease;\n  animation: weex-spinner 1.1s infinite ease;\n}\n\n@-webkit-keyframes weex-spinner {\n  0%,\n  100% {\n    box-shadow: 0em -1.3em 0em 0em #ffffff, 0.9em -0.9em 0 0em rgba(255, 255, 255, 0.2), 1.25em 0em 0 0em rgba(255, 255, 255, 0.2), 0.875em 0.875em 0 0em rgba(255, 255, 255, 0.2), 0em 1.25em 0 0em rgba(255, 255, 255, 0.2), -0.9em 0.9em 0 0em rgba(255, 255, 255, 0.2), -1.3em 0em 0 0em rgba(255, 255, 255, 0.5), -0.9em -0.9em 0 0em rgba(255, 255, 255, 0.7);\n  }\n  11.25% {\n    box-shadow: 0em -1.3em 0em 0em rgba(255, 255, 255, 0.7), 0.9em -0.9em 0 0em #ffffff, 1.25em 0em 0 0em rgba(255, 255, 255, 0.2), 0.875em 0.875em 0 0em rgba(255, 255, 255, 0.2), 0em 1.25em 0 0em rgba(255, 255, 255, 0.2), -0.9em 0.9em 0 0em rgba(255, 255, 255, 0.2), -1.3em 0em 0 0em rgba(255, 255, 255, 0.2), -0.9em -0.9em 0 0em rgba(255, 255, 255, 0.5);\n  }\n  25% {\n    box-shadow: 0em -1.3em 0em 0em rgba(255, 255, 255, 0.5), 0.9em -0.9em 0 0em rgba(255, 255, 255, 0.7), 1.25em 0em 0 0em #ffffff, 0.875em 0.875em 0 0em rgba(255, 255, 255, 0.2), 0em 1.25em 0 0em rgba(255, 255, 255, 0.2), -0.9em 0.9em 0 0em rgba(255, 255, 255, 0.2), -1.3em 0em 0 0em rgba(255, 255, 255, 0.2), -0.9em -0.9em 0 0em rgba(255, 255, 255, 0.2);\n  }\n  37.5% {\n    box-shadow: 0em -1.3em 0em 0em rgba(255, 255, 255, 0.2), 0.9em -0.9em 0 0em rgba(255, 255, 255, 0.5), 1.25em 0em 0 0em rgba(255, 255, 255, 0.7), 0.875em 0.875em 0 0em #ffffff, 0em 1.25em 0 0em rgba(255, 255, 255, 0.2), -0.9em 0.9em 0 0em rgba(255, 255, 255, 0.2), -1.3em 0em 0 0em rgba(255, 255, 255, 0.2), -0.9em -0.9em 0 0em rgba(255, 255, 255, 0.2);\n  }\n  50% {\n    box-shadow: 0em -1.3em 0em 0em rgba(255, 255, 255, 0.2), 0.9em -0.9em 0 0em rgba(255, 255, 255, 0.2), 1.25em 0em 0 0em rgba(255, 255, 255, 0.5), 0.875em 0.875em 0 0em rgba(255, 255, 255, 0.7), 0em 1.25em 0 0em #ffffff, -0.9em 0.9em 0 0em rgba(255, 255, 255, 0.2), -1.3em 0em 0 0em rgba(255, 255, 255, 0.2), -0.9em -0.9em 0 0em rgba(255, 255, 255, 0.2);\n  }\n  61.25% {\n    box-shadow: 0em -1.3em 0em 0em rgba(255, 255, 255, 0.2), 0.9em -0.9em 0 0em rgba(255, 255, 255, 0.2), 1.25em 0em 0 0em rgba(255, 255, 255, 0.2), 0.875em 0.875em 0 0em rgba(255, 255, 255, 0.5), 0em 1.25em 0 0em rgba(255, 255, 255, 0.7), -0.9em 0.9em 0 0em #ffffff, -1.3em 0em 0 0em rgba(255, 255, 255, 0.2), -0.9em -0.9em 0 0em rgba(255, 255, 255, 0.2);\n  }\n  75% {\n    box-shadow: 0em -1.3em 0em 0em rgba(255, 255, 255, 0.2), 0.9em -0.9em 0 0em rgba(255, 255, 255, 0.2), 1.25em 0em 0 0em rgba(255, 255, 255, 0.2), 0.875em 0.875em 0 0em rgba(255, 255, 255, 0.2), 0em 1.25em 0 0em rgba(255, 255, 255, 0.5), -0.9em 0.9em 0 0em rgba(255, 255, 255, 0.7), -1.3em 0em 0 0em #ffffff, -0.9em -0.9em 0 0em rgba(255, 255, 255, 0.2);\n  }\n  87.5% {\n    box-shadow: 0em -1.3em 0em 0em rgba(255, 255, 255, 0.2), 0.9em -0.9em 0 0em rgba(255, 255, 255, 0.2), 1.25em 0em 0 0em rgba(255, 255, 255, 0.2), 0.875em 0.875em 0 0em rgba(255, 255, 255, 0.2), 0em 1.25em 0 0em rgba(255, 255, 255, 0.2), -0.9em 0.9em 0 0em rgba(255, 255, 255, 0.5), -1.3em 0em 0 0em rgba(255, 255, 255, 0.7), -0.9em -0.9em 0 0em #ffffff;\n  }\n}\n\n@keyframes weex-spinner {\n  0%,\n  100% {\n    box-shadow: 0em -1.3em 0em 0em #ffffff, 0.9em -0.9em 0 0em rgba(255, 255, 255, 0.2), 1.25em 0em 0 0em rgba(255, 255, 255, 0.2), 0.875em 0.875em 0 0em rgba(255, 255, 255, 0.2), 0em 1.25em 0 0em rgba(255, 255, 255, 0.2), -0.9em 0.9em 0 0em rgba(255, 255, 255, 0.2), -1.3em 0em 0 0em rgba(255, 255, 255, 0.5), -0.9em -0.9em 0 0em rgba(255, 255, 255, 0.7);\n  }\n  11.25% {\n    box-shadow: 0em -1.3em 0em 0em rgba(255, 255, 255, 0.7), 0.9em -0.9em 0 0em #ffffff, 1.25em 0em 0 0em rgba(255, 255, 255, 0.2), 0.875em 0.875em 0 0em rgba(255, 255, 255, 0.2), 0em 1.25em 0 0em rgba(255, 255, 255, 0.2), -0.9em 0.9em 0 0em rgba(255, 255, 255, 0.2), -1.3em 0em 0 0em rgba(255, 255, 255, 0.2), -0.9em -0.9em 0 0em rgba(255, 255, 255, 0.5);\n  }\n  25% {\n    box-shadow: 0em -1.3em 0em 0em rgba(255, 255, 255, 0.5), 0.9em -0.9em 0 0em rgba(255, 255, 255, 0.7), 1.25em 0em 0 0em #ffffff, 0.875em 0.875em 0 0em rgba(255, 255, 255, 0.2), 0em 1.25em 0 0em rgba(255, 255, 255, 0.2), -0.9em 0.9em 0 0em rgba(255, 255, 255, 0.2), -1.3em 0em 0 0em rgba(255, 255, 255, 0.2), -0.9em -0.9em 0 0em rgba(255, 255, 255, 0.2);\n  }\n  37.5% {\n    box-shadow: 0em -1.3em 0em 0em rgba(255, 255, 255, 0.2), 0.9em -0.9em 0 0em rgba(255, 255, 255, 0.5), 1.25em 0em 0 0em rgba(255, 255, 255, 0.7), 0.875em 0.875em 0 0em #ffffff, 0em 1.25em 0 0em rgba(255, 255, 255, 0.2), -0.9em 0.9em 0 0em rgba(255, 255, 255, 0.2), -1.3em 0em 0 0em rgba(255, 255, 255, 0.2), -0.9em -0.9em 0 0em rgba(255, 255, 255, 0.2);\n  }\n  50% {\n    box-shadow: 0em -1.3em 0em 0em rgba(255, 255, 255, 0.2), 0.9em -0.9em 0 0em rgba(255, 255, 255, 0.2), 1.25em 0em 0 0em rgba(255, 255, 255, 0.5), 0.875em 0.875em 0 0em rgba(255, 255, 255, 0.7), 0em 1.25em 0 0em #ffffff, -0.9em 0.9em 0 0em rgba(255, 255, 255, 0.2), -1.3em 0em 0 0em rgba(255, 255, 255, 0.2), -0.9em -0.9em 0 0em rgba(255, 255, 255, 0.2);\n  }\n  61.25% {\n    box-shadow: 0em -1.3em 0em 0em rgba(255, 255, 255, 0.2), 0.9em -0.9em 0 0em rgba(255, 255, 255, 0.2), 1.25em 0em 0 0em rgba(255, 255, 255, 0.2), 0.875em 0.875em 0 0em rgba(255, 255, 255, 0.5), 0em 1.25em 0 0em rgba(255, 255, 255, 0.7), -0.9em 0.9em 0 0em #ffffff, -1.3em 0em 0 0em rgba(255, 255, 255, 0.2), -0.9em -0.9em 0 0em rgba(255, 255, 255, 0.2);\n  }\n  75% {\n    box-shadow: 0em -1.3em 0em 0em rgba(255, 255, 255, 0.2), 0.9em -0.9em 0 0em rgba(255, 255, 255, 0.2), 1.25em 0em 0 0em rgba(255, 255, 255, 0.2), 0.875em 0.875em 0 0em rgba(255, 255, 255, 0.2), 0em 1.25em 0 0em rgba(255, 255, 255, 0.5), -0.9em 0.9em 0 0em rgba(255, 255, 255, 0.7), -1.3em 0em 0 0em #ffffff, -0.9em -0.9em 0 0em rgba(255, 255, 255, 0.2);\n  }\n  87.5% {\n    box-shadow: 0em -1.3em 0em 0em rgba(255, 255, 255, 0.2), 0.9em -0.9em 0 0em rgba(255, 255, 255, 0.2), 1.25em 0em 0 0em rgba(255, 255, 255, 0.2), 0.875em 0.875em 0 0em rgba(255, 255, 255, 0.2), 0em 1.25em 0 0em rgba(255, 255, 255, 0.2), -0.9em 0.9em 0 0em rgba(255, 255, 255, 0.5), -1.3em 0em 0 0em rgba(255, 255, 255, 0.7), -0.9em -0.9em 0 0em #ffffff;\n  }\n}\n";

  function getStyleSheet(spinnerVm) {
    if (spinnerVm._styleSheet) {
      return;
    }
    spinnerVm._styleSheet = getStyleSheetById$1('weex-cmp-loading-indicator');
  }

  function setKeyframeColor(spinnerVm, val) {
    getStyleSheet(spinnerVm);
    var keyframeRules = computeKeyFrameRules(val);
    var rules = spinnerVm._styleSheet.rules || spinnerVm._styleSheet.cssRules;
    for (var i = 0, l = rules.length; i < l; i++) {
      var item = rules.item(i);
      if ((item.type === CSSRule.KEYFRAMES_RULE || item.type === CSSRule.WEBKIT_KEYFRAMES_RULE) && item.name === 'weex-spinner') {
        var cssRules = item.cssRules;
        for (var j = 0, m = cssRules.length; j < m; j++) {
          var keyframe = cssRules[j];
          if (keyframe.type === CSSRule.KEYFRAME_RULE || keyframe.type === CSSRule.WEBKIT_KEYFRAME_RULE) {
            keyframe.style.boxShadow = keyframeRules[j];
          }
        }
      }
    }
  }

  function computeKeyFrameRules(rgb) {
    if (!rgb) {
      return;
    }
    var scaleArr = ['0em -1.3em 0em 0em', '0.9em -0.9em 0 0em', '1.25em 0em 0 0em', '0.875em 0.875em 0 0em', '0em 1.25em 0 0em', '-0.9em 0.9em 0 0em', '-1.3em 0em 0 0em', '-0.9em -0.9em 0 0em'];
    var colorArr = ['1', '0.2', '0.2', '0.2', '0.2', '0.2', '0.5', '0.7'].map(function (e) {
      return 'rgba(' + rgb.r + ',' + rgb.g + ',' + rgb.b + ',' + e + ')';
    });
    var rules = [];
    var loop = function loop(i) {
      var tmpColorArr = loopArray$1(colorArr, i, 'r');
      rules.push(scaleArr.map(function (scaleStr, i) {
        return scaleStr + ' ' + tmpColorArr[i];
      }).join(', '));
    };

    for (var i = 0; i < scaleArr.length; i++) {
      loop(i);
    }return rules;
  }

  function processStyle$1(vm) {
    var style = extractComponentStyle$1(vm);
    var color = style.color;
    var rgb = color && getRgb$1(color);
    if (rgb) {
      setKeyframeColor(vm, rgb);
    }
    return style;
  }

  var loadingIndicator = {
    name: 'weex-loading-indicator',
    render: function render(createElement) {
      this.weexType = 'loading-indicator';
      return createElement('mark', {
        attrs: { 'weex-type': 'loading-indicator' },
        staticClass: 'weex-loading-indicator weex-ct',
        staticStyle: processStyle$1(this)
      });
    },
    _css: _css
  };

  var loadingIndicator$1 = {
    init: function init(weex) {
      extractComponentStyle$1 = weex.extractComponentStyle;
      getRgb$1 = weex.utils.getRgb;
      loopArray$1 = weex.utils.loopArray;
      getStyleSheetById$1 = weex.utils.getStyleSheetById;
      weex.registerComponent('loading-indicator', loadingIndicator);
    }
  };

  __$styleInject("/*\n * Licensed to the Apache Software Foundation (ASF) under one\n * or more contributor license agreements.  See the NOTICE file\n * distributed with this work for additional information\n * regarding copyright ownership.  The ASF licenses this file\n * to you under the Apache License, Version 2.0 (the\n * \"License\"); you may not use this file except in compliance\n * with the License.  You may obtain a copy of the License at\n *\n *   http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing,\n * software distributed under the License is distributed on an\n * \"AS IS\" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY\n * KIND, either express or implied.  See the License for the\n * specific language governing permissions and limitations\n * under the License.\n */\n\nbody > .weex-list,\nbody > .weex-scroller,\nbody > .weex-waterfall {\n  max-height: 100%;\n}\n\n.weex-list-wrapper,\n.weex-scroller-wrapper,\n.weex-waterfall-wrapper {\n  -webkit-overflow-scrolling: touch;\n}\n\n.weex-list-wrapper,\n.weex-waterfall-wrapper {\n  overflow-y: scroll !important;\n  overflow-x: hidden !important;\n}\n\n.weex-list-inner,\n.weex-scroller-inner,\n.weex-waterfall-inner {\n  -webkit-overflow-scrolling: touch;\n}\n\n.weex-waterfall-inner-columns {\n  -webkit-flex-direction: row;\n  flex-direction: row;\n  -webkit-box-orient: horizontal;\n}\n\n.weex-scroller-wrapper.weex-scroller-vertical {\n  overflow-x: hidden;\n  overflow-y: scroll;\n}\n\n.weex-scroller-wrapper.weex-scroller-horizontal {\n  overflow-x: scroll;\n  overflow-y: hidden;\n}\n\n.weex-scroller-wrapper.weex-scroller-disabled {\n  overflow-x: hidden;\n  overflow-y: hidden;\n}\n\n.weex-scroller-horizontal .weex-scroller-inner {\n  -webkit-flex-direction: row;\n  flex-direction: row;\n  -webkit-box-orient: horizontal;\n  height: 100%;\n}\n\n.weex-cell {\n  width: 100%;\n}\n\n.weex-refresh,\n.weex-loading {\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n  align-items: center;\n  -webkit-box-pack: center;\n  -webkit-justify-content: center;\n  justify-content: center;\n  width: 100%;\n  overflow: hidden;\n}\n", undefined);

  /*
   * Licensed to the Apache Software Foundation (ASF) under one
   * or more contributor license agreements.  See the NOTICE file
   * distributed with this work for additional information
   * regarding copyright ownership.  The ASF licenses this file
   * to you under the Apache License, Version 2.0 (the
   * "License"); you may not use this file except in compliance
   * with the License.  You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing,
   * software distributed under the License is distributed on an
   * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
   * KIND, either express or implied.  See the License for the
   * specific language governing permissions and limitations
   * under the License.
   */

  // import cell from './cell'
  var modules = [list, scroller, waterfall,
  // cell,
  header, loading, refresh, loadingIndicator$1];

  var scrollable = {
    init: function init(weex) {
      modules.forEach(function (mod) {
        weex.install(mod);
      });
    }
  };

  /*
   * Licensed to the Apache Software Foundation (ASF) under one
   * or more contributor license agreements.  See the NOTICE file
   * distributed with this work for additional information
   * regarding copyright ownership.  The ASF licenses this file
   * to you under the Apache License, Version 2.0 (the
   * "License"); you may not use this file except in compliance
   * with the License.  You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing,
   * software distributed under the License is distributed on an
   * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
   * KIND, either express or implied.  See the License for the
   * specific language governing permissions and limitations
   * under the License.
   */
  var TRANSITION_TIME = 400;
  var NEIGHBOR_SCALE_TIME = 100;
  var MAIN_SLIDE_OPACITY = 1;
  var THROTTLE_SCROLL_TIME = 25;
  var INTERVAL_MINIMUM = 200;

  var slideMixin = {
    created: function created() {
      this._clones = [];
      this.innerOffset = 0;
      this._indicator = null;
    },

    beforeUpdate: function beforeUpdate() {
      this._getWrapperSize();
    },

    updated: function updated() {
      var this$1 = this;

      var children = this.$children;
      var len = children && children.length;
      if (children && len > 0) {
        for (var i = 0; i < len; i++) {
          var vm = children[i];
          if (vm.$options._componentTag === 'indicator' || vm.$vnode.data.ref === 'indicator') {
            vm._watcher.get();
            break;
          }
        }
      }

      var frameCount = this.frameCount;
      if (!this._preFrameCount) {
        this._preFrameCount = frameCount;
      } else if (this._preFrameCount !== frameCount) {
        this._resetNodes();
        this._preFrameCount = frameCount;
        var resetBlankFrame = function resetBlankFrame() {
          if (this$1.currentIndex >= frameCount) {
            // reset blank page.
            this$1._stopAutoPlay();
            this$1._slideTo(0);
          }
        };
        if (this._sliding) {
          // If it's sliding, then the currentIndex is the last frame. The actual currentIndex
          // should be the next index.
          // That is to say, this updating happens Between _parepareNodes and _rearrangeNodes,
          // and the sliding is not yet finished, and the state is not updated yet.
          setTimeout(resetBlankFrame, TRANSITION_TIME + NEIGHBOR_SCALE_TIME);
        } else {
          resetBlankFrame();
        }
      }
      weex.utils.fireLazyload(this.$el, true);
      if (this._preIndex !== this.currentIndex) {
        this._slideTo(this.currentIndex);
      }
    },

    mounted: function mounted() {
      this._getWrapperSize();
      this._slideTo(this.currentIndex);
      weex.utils.fireLazyload(this.$el, true);
    },

    methods: {
      _getWrapperSize: function _getWrapperSize() {
        var wrapper = this.$refs.wrapper;
        if (wrapper) {
          var rect = wrapper.getBoundingClientRect();
          this._wrapperWidth = rect.width;
          this._wrapperHeight = rect.height;
        }
      },

      _formatChildren: function _formatChildren(createElement) {
        var this$1 = this;

        var children = this.$slots.default || [];
        var indicatorVnode;
        var cells = children.filter(function (vnode) {
          if (!vnode.tag) {
            return false;
          }
          if (vnode.componentOptions && vnode.componentOptions.tag === 'indicator') {
            indicatorVnode = vnode;
            return false;
          }
          return true;
        }).map(function (vnode) {
          return createElement('li', {
            ref: 'cells',
            staticClass: "weex-slider-cell weex-ct" + (this$1.isNeighbor ? ' neighbor-cell' : '')
          }, [vnode]);
        });
        if (indicatorVnode) {
          indicatorVnode.data.attrs = indicatorVnode.data.attrs || {};
          indicatorVnode.data.attrs.count = cells.length;
          indicatorVnode.data.attrs.active = this.currentIndex;
          this._indicator = indicatorVnode;
        }
        return cells;
      },

      _renderSlides: function _renderSlides(createElement) {
        this._cells = this._formatChildren(createElement);
        this.frameCount = this._cells.length;
        return createElement('nav', {
          ref: 'wrapper',
          attrs: { 'weex-type': this.isNeighbor ? 'slider-neighbor' : 'slider' },
          on: {
            touchstart: this._handleTouchStart,
            touchmove: weex.utils.throttle(weex.utils.bind(this._handleTouchMove, this), 25),
            touchend: this._handleTouchEnd,
            touchcancel: this._handleTouchCancel
          },
          staticClass: 'weex-slider weex-slider-wrapper weex-ct',
          staticStyle: weex.extractComponentStyle(this)
        }, [createElement('ul', {
          ref: 'inner',
          staticClass: 'weex-slider-inner weex-ct'
        }, this._cells), this._indicator]);
      },

      // get standard index
      _normalizeIndex: function _normalizeIndex(index) {
        var newIndex = (index + this.frameCount) % this.frameCount;
        return Math.min(Math.max(newIndex, 0), this.frameCount - 1);
      },

      _startAutoPlay: function _startAutoPlay() {
        if (!this.autoPlay || this.autoPlay === 'false') {
          return;
        }
        if (this._autoPlayTimer) {
          clearTimeout(this._autoPlayTimer);
          this._autoPlayTimer = null;
        }
        var interval = parseInt(this.interval - TRANSITION_TIME - NEIGHBOR_SCALE_TIME);
        interval = interval > INTERVAL_MINIMUM ? interval : INTERVAL_MINIMUM;
        this._autoPlayTimer = setTimeout(weex.utils.bind(this._next, this), interval);
      },

      _stopAutoPlay: function _stopAutoPlay() {
        if (this._autoPlayTimer) {
          clearTimeout(this._autoPlayTimer);
          this._autoPlayTimer = null;
        }
      },

      _slideTo: function _slideTo(index, isTouchScroll) {
        var this$1 = this;

        if (this.frameCount <= 0) {
          return;
        }
        if (!this.infinite || this.infinite === 'false') {
          if (index === -1 || index > this.frameCount - 1) {
            this._slideTo(this.currentIndex);
            return;
          }
        }
        if (!this._preIndex && this._preIndex !== 0) {
          if (this._showNodes && this._showNodes[0]) {
            this._preIndex = this._showNodes[0].index;
          } else {
            this._preIndex = this.currentIndex;
          }
        }

        if (this._sliding) {
          return;
        }
        this._sliding = true;

        var newIndex = this._normalizeIndex(index);
        var inner = this.$refs.inner;
        var step = this._step = this.frameCount <= 1 ? 0 : this._preIndex - index;

        if (inner) {
          this._prepareNodes();
          var translate = weex.utils.getTransformObj(inner).translate;
          var match = translate && translate.match(/translate[^(]+\(([+-\d.]+)/);
          var innerX = match && match[1] || 0;
          var dist = innerX - this.innerOffset;
          this.innerOffset += step * this._wrapperWidth;
          // transform the whole slides group.
          inner.style.webkitTransition = "-webkit-transform " + TRANSITION_TIME / 1000 + "s ease-in-out";
          inner.style.mozTransition = "transform " + TRANSITION_TIME / 1000 + "s ease-in-out";
          inner.style.transition = "transform " + TRANSITION_TIME / 1000 + "s ease-in-out";
          inner.style.webkitTransform = "translate3d(" + this.innerOffset + "px, 0, 0)";
          inner.style.mozTransform = "translate3d(" + this.innerOffset + "px, 0, 0)";
          inner.style.transform = "translate3d(" + this.innerOffset + "px, 0, 0)";

          // emit scroll events.
          if (!isTouchScroll) {
            this._emitScrollEvent('scrollstart');
          }
          setTimeout(function () {
            this$1._throttleEmitScroll(dist, function () {
              this$1._emitScrollEvent('scrollend');
            });
          }, THROTTLE_SCROLL_TIME);

          this._loopShowNodes(step);

          setTimeout(function () {
            if (this$1.isNeighbor) {
              this$1._setNeighbors();
            }

            setTimeout(function () {
              inner.style.webkitTransition = '';
              inner.style.mozTransition = '';
              inner.style.transition = '';
              for (var i = this$1._showStartIdx; i <= this$1._showEndIdx; i++) {
                var node = this$1._showNodes[i];
                if (!node) {
                  continue;
                }
                var elm = node.firstElementChild;
                elm.style.webkitTransition = '';
                elm.style.mozTransition = '';
                elm.style.transition = '';
              }
              // clean cloned nodes and rearrange slide cells.
              this$1._rearrangeNodes(newIndex);
            }, NEIGHBOR_SCALE_TIME);
          }, TRANSITION_TIME);
        }

        if (newIndex !== this._preIndex) {
          weex.utils.dispatchNativeEvent(this.$el, 'change', {
            index: newIndex
          });
        }
      },

      _clearNodesOffset: function _clearNodesOffset() {
        var this$1 = this;

        var end = this._showEndIdx;
        for (var i = this._showStartIdx; i <= end; i++) {
          var node = this$1._showNodes[i];
          node = node && node.firstElementChild;
          if (!node) {
            continue;
          }
          weex.utils.addTransform(this$1._showNodes[i].firstElementChild, {
            translate: 'translate3d(0px, 0px, 0px)'
          });
        }
      },

      _loopShowNodes: function _loopShowNodes(step) {
        var this$1 = this;

        if (!step || this.frameCount <= 1) {
          return;
        }
        var sign = step > 0 ? 1 : -1;
        var i = step <= 0 ? this._showStartIdx : this._showEndIdx;
        var end = step <= 0 ? this._showEndIdx : this._showStartIdx;
        for (; i !== end - sign; i -= sign) {
          var nextIdx = i + step;
          this$1._showNodes[nextIdx] = this$1._showNodes[i];
          this$1._showNodes[nextIdx]._showIndex = nextIdx;
          delete this$1._showNodes[i];
        }
        this._showStartIdx += step;
        this._showEndIdx += step;
      },

      _prepareNodes: function _prepareNodes() {
        // test if the next slide towards the direction exists.
        // e.g. currentIndex 0 -> 1: should prepare 4 slides: -1, 0, 1, 2
        // if not, translate a node to here, or just clone it.
        var step = this._step;
        if (!this._inited) {
          this._initNodes();
          this._inited = true;
          this._showNodes = {};
        }
        if (this.frameCount <= 1) {
          this._showStartIdx = this._showEndIdx = 0;
          var node = this._cells[0].elm;
          node.style.opacity = 1;
          node.style.zIndex = 99;
          node.index = 0;
          this._showNodes[0] = node;
          node._inShow = true;
          node._showIndex = 0;
          return;
        }

        var showCount = this._showCount = Math.abs(step) + 3;
        this._showStartIdx = step <= 0 ? -1 : 2 - showCount;
        this._showEndIdx = step <= 0 ? showCount - 2 : 1;
        this._clearNodesOffset();
        this._positionNodes(this._showStartIdx, this._showEndIdx, step);
      },

      _clearClones: function _clearClones() {
        var this$1 = this;

        // clear all clones.
        Object.keys(this._clones).forEach(function (key) {
          this$1._clones[key].forEach(function (cloneNode) {
            cloneNode.parentNode.removeChild(cloneNode);
          });
          this$1._clones[key] = [];
        });
      },

      // reset nodes' index and _inShow state. But leave the styles
      // as they are to prevent dom rerendering.
      _resetNodes: function _resetNodes() {
        this._clearClones();
        // reset status.
        this._cells.forEach(function (cell, idx) {
          var elm = cell.elm;
          elm.index = idx;
          elm._inShow = false;
        });
      },

      _initNodes: function _initNodes() {
        this._cells.forEach(function (cell, idx) {
          var node = cell.elm;
          node.index = idx;
          node._inShow = false;
          node.style.zIndex = 0;
          node.style.opacity = 0;
        });
      },

      _positionNodes: function _positionNodes(begin, end, step, anim) {
        var this$1 = this;

        var cells = this._cells;
        var start = step <= 0 ? begin : end;
        var stop = step <= 0 ? end : begin;
        var sign = step <= 0 ? -1 : 1;
        var cellIndex = this._preIndex + sign;
        for (var i = start; i !== stop - sign; i = i - sign) {
          var node = cells[this$1._normalizeIndex(cellIndex)].elm;
          cellIndex = cellIndex - sign;
          this$1._positionNode(node, i);
        }
      },

      /**
       * index: position index in the showing cells' view.
       */
      _positionNode: function _positionNode(node, index) {
        var holder = this._showNodes[index];
        if (node._inShow && (holder !== node || holder._showIndex !== index)) {
          if (holder && holder._isClone) {
            this._removeClone(holder);
          }
          node = this._getClone(node.index);
        } else if (node._inShow) {
          // holder === node
          return;
        }

        node._inShow = true;
        var translateX = index * this._wrapperWidth - this.innerOffset;
        weex.utils.addTransform(node, {
          translate: "translate3d(" + translateX + "px, 0px, 0px)"
        });
        node.style.zIndex = 99 - Math.abs(index);
        node.style.opacity = 1;
        node._showIndex = index;
        this._showNodes[index] = node;
      },

      _getClone: function _getClone(index) {
        var arr = this._clones[index] || (this._clones[index] = []);
        var origNode = this._cells[index].elm;
        var clone = origNode.cloneNode(true);
        clone._isClone = true;
        clone._inShow = true;
        // clone._inShow = origNode._inShow
        clone.index = origNode.index;
        clone.style.opacity = 0;
        clone.style.zIndex = 0;
        this.$refs.inner.appendChild(clone);
        arr.push(clone);
        return clone;
        // try {
        //   let arr = this._clones[index]
        //   if (!arr) {
        //     this._clones[index] = arr = []
        //   }
        //   if (arr.length <= 0) {

        //   }
        //   return arr.pop()
        // } catch (err) {
        //   console.error('this._cells -> ', this._cells)
        // }
      },

      _removeClone: function _removeClone(node) {
        var cloneArr = this._clones[node.index];
        var i;
        if (cloneArr && (i = cloneArr.indexOf(node)) > -1) {
          cloneArr.splice(i, 1);
        }
        try {
          node.parentNode.removeChild(node);
        } catch (err) {}
        // maybe cells has been updated and this clone node is already removed from the dom tree
        // throught _clearClones method.

        // const idx = node.index
        // this._hideNode(node)
        // const arr = this._clones[idx]
        // arr.push(node)
      },

      _hideNode: function _hideNode(node) {
        node._inShow = false;
        node.style.opacity = 0;
        node.style.zIndex = 0;
      },

      /**
       * hide nodes from begin to end in showArray.
       * if it is clone node, just move the clone node to the buffer.
       */
      _clearNodes: function _clearNodes(begin, end) {
        var this$1 = this;

        for (var i = begin; i <= end; i++) {
          var node = this$1._showNodes[i];
          if (!node) {
            return;
          }
          if (node._isClone) {
            this$1._removeClone(node);
          } else if (!node._inShow) {
            this$1._hideNode(node);
          }
          delete this$1._showNodes[i];
        }
      },

      /**
       * copy node style props (opacity and zIndex) and transform status from
       * one element to another.
       */
      _copyStyle: function _copyStyle(from, to, styles, transformExtra) {
        if (styles === void 0) styles = ['opacity', 'zIndex'];
        if (transformExtra === void 0) transformExtra = {};

        weex.utils.extendKeys(to.style, from.style, styles);
        var transObj = weex.utils.getTransformObj(from);
        for (var k in transformExtra) {
          transObj[k] = transformExtra[k];
        }
        weex.utils.addTransform(to, transObj);
        var fromInner = from.firstElementChild;
        var toInner = to.firstElementChild;
        toInner.style.opacity = fromInner.style.opacity;
        weex.utils.copyTransform(fromInner, toInner);
      },

      /**
       * replace a clone node with the original node if it's not in use.
       */
      _replaceClone: function _replaceClone(clone, pos) {
        var this$1 = this;

        var origCell = this._cells[clone.index];
        if (!origCell) {
          return;
        }
        var origNode = origCell.elm;
        if (origNode._inShow) {
          return;
        }
        var origShowIndex = origNode._showIndex;
        var styleProps = ['opacity', 'zIndex'];
        var cl;
        if (Math.abs(origShowIndex) <= 1) {
          // leave a clone to replace the origNode in the show zone(-1 ~ 1).
          cl = this._getClone(origNode.index);
          this._copyStyle(origNode, cl);
          this._showNodes[origShowIndex] = cl;
        }
        origNode._inShow = true;
        var transObj = weex.utils.getTransformObj(clone);
        transObj.translate = transObj.translate.replace(/[+-\d.]+[pw]x/, function ($0) {
          return pos * this$1._wrapperWidth - this$1.innerOffset + 'px';
        });
        this._copyStyle(clone, origNode, styleProps, transObj);
        this._removeClone(clone);
        if (!cl) {
          delete this._showNodes[origShowIndex];
        }
        this._showNodes[pos] = origNode;
        origNode._showIndex = pos;
      },

      _rearrangeNodes: function _rearrangeNodes(newIndex) {
        var this$1 = this;

        if (this.frameCount <= 1) {
          this._sliding = false;
          this.currentIndex = 0;
          return;
        }

        // clear autoPlay timer (and restart after updated hook).
        this._startAutoPlay();

        /**
         * clean nodes. replace current node with non-cloned node.
         * set current index to the new index.
         */
        var shows = this._showNodes;
        for (var i = this._showStartIdx; i <= this._showEndIdx; i++) {
          shows[i]._inShow = false;
        }
        for (var i$1 = -1; i$1 <= 1; i$1++) {
          var node = shows[i$1];
          if (!node._isClone) {
            node._inShow = true;
          } else {
            this$1._replaceClone(node, i$1);
          }
        }

        this._clearNodes(this._showStartIdx, -2);
        this._showStartIdx = -1;
        this._clearNodes(2, this._showEndIdx);
        this._showEndIdx = 1;
        this._sliding = false;

        // set current index to the new index.
        this.currentIndex = newIndex;
        this._preIndex = newIndex;
      },

      /**
       * according to the attrs: neighborScale, neighborAlpha, neighborSpace.
       * 1. apply the main cell transform effects.
       * 2. set the previous cell and the next cell's positon, scale and alpha.
       * 3. set other cells' scale and alpha.
       */
      _setNeighbors: function _setNeighbors() {
        var this$1 = this;

        for (var i = this._showStartIdx; i <= this._showEndIdx; i++) {
          var elm = this$1._showNodes[i].firstElementChild;
          elm.style.webkitTransition = "all " + NEIGHBOR_SCALE_TIME / 1000 + "s ease";
          elm.style.mozTransition = "all " + NEIGHBOR_SCALE_TIME / 1000 + "s ease";
          elm.style.transition = "all " + NEIGHBOR_SCALE_TIME / 1000 + "s ease";
          var transObj = {
            scale: "scale(" + (i === 0 ? this$1.currentItemScale : this$1.neighborScale) + ")"
          };
          var translateX = void 0;
          if (!this$1._neighborWidth) {
            this$1._neighborWidth = parseFloat(elm.style.width) || elm.getBoundingClientRect().width;
          }
          // calculate position offsets according to neighbor scales.
          if (Math.abs(i) === 1) {
            var dist = ((this$1._wrapperWidth - this$1._neighborWidth * this$1.neighborScale) / 2 + this$1.neighborSpace * weex.config.env.scale) / this$1.neighborScale;
            translateX = -i * dist;
          } else {
            // clear position offsets.
            translateX = 0;
          }
          transObj.translate = "translate3d(" + translateX + "px, 0px, 0px)";
          weex.utils.addTransform(elm, transObj);
          elm.style.opacity = i === 0 ? MAIN_SLIDE_OPACITY : this$1.neighborAlpha;
        }
      },

      _next: function _next() {
        var next = this.currentIndex + 1;
        if (this.frameCount <= 1) {
          next--;
        }
        this._slideTo(next);
      },

      _prev: function _prev() {
        var prev = this.currentIndex - 1;
        if (this.frameCount <= 1) {
          prev++;
        }
        this._slideTo(prev);
      },

      _handleTouchStart: function _handleTouchStart(event) {
        var touch = event.changedTouches[0];
        this._stopAutoPlay();
        var inner = this.$refs.inner;
        this._touchParams = {
          originalTransform: inner.style.webkitTransform || inner.style.mozTransform || inner.style.transform,
          startTouchEvent: touch,
          startX: touch.pageX,
          startY: touch.pageY,
          timeStamp: event.timeStamp
        };
      },

      _handleTouchMove: function _handleTouchMove(event) {
        var tp = this._touchParams;
        if (!tp) {
          return;
        }
        if (this._sliding) {
          return;
        }
        var ref = this._touchParams;
        var startX = ref.startX;
        var startY = ref.startY;
        var touch = event.changedTouches[0];
        var offsetX = touch.pageX - startX;
        var offsetY = touch.pageY - startY;
        tp.offsetX = offsetX;
        tp.offsetY = offsetY;
        var isV = tp.isVertical;
        if (typeof isV === 'undefined') {
          isV = tp.isVertical = Math.abs(offsetX) < Math.abs(offsetY);
          if (!isV) {
            this._emitScrollEvent('scrollstart');
          }
        }
        // vertical scroll. just ignore it.
        if (isV) {
          return;
        }
        // horizontal scroll. trigger scroll event.
        event.preventDefault();
        var inner = this.$refs.inner;
        if (inner && offsetX) {
          if (!this._nodesOffsetCleared) {
            this._nodesOffsetCleared = true;
            this._clearNodesOffset();
          }
          this._emitScrollEvent('weex$scroll', {
            offsetXRatio: offsetX / this._wrapperWidth
          });
          inner.style.webkitTransform = "translate3d(" + (this.innerOffset + offsetX) + "px, 0, 0)";
          inner.style.mozTransform = "translate3d(" + (this.innerOffset + offsetX) + "px, 0, 0)";
          inner.style.transform = "translate3d(" + (this.innerOffset + offsetX) + "px, 0, 0)";
        }
      },

      _handleTouchEnd: function _handleTouchEnd(event) {
        this._startAutoPlay();
        var tp = this._touchParams;
        if (!tp) {
          return;
        }
        var isV = tp.isVertical;
        if (typeof isV === 'undefined') {
          return;
        }
        var inner = this.$refs.inner;
        var offsetX = tp.offsetX;
        if (inner) {
          this._nodesOffsetCleared = false;
          // TODO: test the velocity if it's less than 0.2.
          var reset = Math.abs(offsetX / this._wrapperWidth) < 0.2;
          var direction = offsetX > 0 ? 1 : -1;
          var newIndex = reset ? this.currentIndex : this.currentIndex - direction;
          this._slideTo(newIndex, true);
        }
        delete this._touchParams;
      },

      _handleTouchCancel: function _handleTouchCancel(event) {
        return this._handleTouchEnd(event);
      },

      _emitScrollEvent: function _emitScrollEvent(type, data) {
        if (data === void 0) data = {};

        var el = this.$el;
        if (el) {
          weex.utils.dispatchNativeEvent(el, type, data);
        }
      },

      _throttleEmitScroll: function _throttleEmitScroll(offset, callback) {
        var this$1 = this;

        var i = 0;
        var throttleTime = THROTTLE_SCROLL_TIME;
        var cnt = parseInt(TRANSITION_TIME / throttleTime) - 1;
        var sign = offset > 0 ? 1 : -1;
        var r = Math.abs(offset / this._wrapperWidth);
        var throttledScroll = function throttledScroll() {
          if (++i > cnt) {
            return callback && callback.call(this$1);
          }
          var ratio = this$1._step === 0 ? sign * r * (1 - i / cnt) : sign * (r + (1 - r) * i / cnt);
          this$1._emitScrollEvent('weex$scroll', {
            offsetXRatio: ratio
          });
          setTimeout(throttledScroll, THROTTLE_SCROLL_TIME);
        };
        throttledScroll();
      }
    }
  };

  /*
   * Licensed to the Apache Software Foundation (ASF) under one
   * or more contributor license agreements.  See the NOTICE file
   * distributed with this work for additional information
   * regarding copyright ownership.  The ASF licenses this file
   * to you under the Apache License, Version 2.0 (the
   * "License"); you may not use this file except in compliance
   * with the License.  You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing,
   * software distributed under the License is distributed on an
   * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
   * KIND, either express or implied.  See the License for the
   * specific language governing permissions and limitations
   * under the License.
   */
  // import { validateStyles } from '../../validator'
  // import indicator from './indicator'
  var slider$1 = {
    mixins: [slideMixin],
    props: {
      index: {
        type: [String, Number],
        default: 0
      },
      'auto-play': {
        type: [String, Boolean],
        default: false
      },
      interval: {
        type: [String, Number],
        default: 3000
      },
      infinite: {
        type: [String, Boolean],
        default: true
      }
    },

    watch: {
      index: function index() {
        this.currentIndex = this._normalizeIndex(this.index);
      }
    },

    data: function data() {
      return {
        frameCount: 0,
        currentIndex: this.index
      };
    },

    beforeCreate: function beforeCreate() {
      this.weexType = 'slider';
    },

    render: function render(createElement) {
      /* istanbul ignore next */
      // if ("production" === 'development') {
      //   validateStyles('slider', this.$vnode.data && this.$vnode.data.staticStyle)
      // }
      return this._renderSlides(createElement);
    }
  };

  var slider$2 = {
    init: function init(weex) {
      weex.registerComponent('slider', slider$1);
      weex.registerComponent('cycleslider', slider$1);
    }
  };

  /*
   * Licensed to the Apache Software Foundation (ASF) under one
   * or more contributor license agreements.  See the NOTICE file
   * distributed with this work for additional information
   * regarding copyright ownership.  The ASF licenses this file
   * to you under the Apache License, Version 2.0 (the
   * "License"); you may not use this file except in compliance
   * with the License.  You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing,
   * software distributed under the License is distributed on an
   * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
   * KIND, either express or implied.  See the License for the
   * specific language governing permissions and limitations
   * under the License.
   */
  var DEFAULT_NEIGHBOR_SPACE = 20;
  var DEFAULT_NEIGHBOR_ALPHA = 0.6;
  var DEFAULT_NEIGHBOR_SCALE = 0.8;
  var DEFAULT_CURRENT_ITEM_SCALE = 0.9;

  var sliderNeighbor = {
    mixins: [slideMixin],
    props: {
      index: {
        type: [String, Number],
        default: 0
      },
      autoPlay: {
        type: [String, Boolean],
        default: false
      },
      interval: {
        type: [String, Number],
        default: 3000
      },
      infinite: {
        type: [String, Boolean],
        default: true
      },
      neighborSpace: {
        type: [String, Number],
        validator: function validator(val) {
          val = parseFloat(val);
          return !isNaN(val) && val > 0;
        },
        default: DEFAULT_NEIGHBOR_SPACE
      },
      neighborAlpha: {
        type: [String, Number],
        validator: function validator(val) {
          val = parseFloat(val);
          return !isNaN(val) && val >= 0 && val <= 1;
        },
        default: DEFAULT_NEIGHBOR_ALPHA
      },
      neighborScale: {
        type: [String, Number],
        validator: function validator(val) {
          val = parseFloat(val);
          return !isNaN(val) && val >= 0 && val <= 1;
        },
        default: DEFAULT_NEIGHBOR_SCALE
      },
      currentItemScale: {
        type: [String, Number],
        validator: function validator(val) {
          val = parseFloat(val);
          return !isNaN(val) && val >= 0 && val <= 1;
        },
        default: DEFAULT_CURRENT_ITEM_SCALE
      }
    },

    watch: {
      index: function index() {
        this.currentIndex = this._normalizeIndex(this.index);
      }
    },

    data: function data() {
      return {
        currentIndex: this.index,
        frameCount: 0
      };
    },

    beforeCreate: function beforeCreate() {
      this.isNeighbor = true;
      this.weexType = 'slider-neighbor';
    },

    render: function render(createElement) {
      return this._renderSlides(createElement);
    }
  };

  var neighbor = {
    init: function init(weex) {
      weex.registerComponent('slider-neighbor', sliderNeighbor);
    }
  };

  /*
   * Licensed to the Apache Software Foundation (ASF) under one
   * or more contributor license agreements.  See the NOTICE file
   * distributed with this work for additional information
   * regarding copyright ownership.  The ASF licenses this file
   * to you under the Apache License, Version 2.0 (the
   * "License"); you may not use this file except in compliance
   * with the License.  You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing,
   * software distributed under the License is distributed on an
   * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
   * KIND, either express or implied.  See the License for the
   * specific language governing permissions and limitations
   * under the License.
   */

  var getComponentInlineStyle$1;

  function getIndicatorItemStyle(ms, isActive) {
    var style = {};
    var bgColor = isActive ? ms['itemSelectedColor'] || ms['item-selected-color'] : ms['itemColor'] || ms['item-color'];
    style['background-color'] = bgColor;
    style['width'] = style['height'] = ms['itemSize'] || ms['item-size'];
    return style;
  }

  function getScopeIds(context) {
    var scopeIds = context._scopeIds;
    if (scopeIds) {
      return scopeIds;
    } else {
      scopeIds = [];
    }
    var parent = context.$parent;
    while (parent) {
      var i = void 0;
      if ((i = parent.$options) && (i = i._scopeId)) {
        scopeIds.push(i);
      }
      parent = parent.$parent;
    }
    context._scopeIds = scopeIds;
    return scopeIds;
  }

  function _render(context, h) {
    var children = [];
    var mergedStyle = getComponentInlineStyle$1(context);
    var scopeIds = getScopeIds(context);
    var attrs = {};
    for (var i = 0, l = scopeIds.length; i < l; i++) {
      attrs[scopeIds[i]] = '';
    }
    for (var i$1 = 0; i$1 < Number(context.count); ++i$1) {
      var classNames = ['weex-indicator-item weex-el'];
      var isActive = false;
      if (i$1 === Number(context.active)) {
        classNames.push('weex-indicator-item-active');
        isActive = true;
      }
      children.push(h('mark', {
        attrs: attrs,
        staticClass: classNames.join(' '),
        staticStyle: getIndicatorItemStyle(mergedStyle, isActive)
      }));
    }
    return h('nav', {
      attrs: { 'weex-type': 'indicator' },
      staticClass: 'weex-indicator weex-ct'
    }, [
    // the indicator nav may cover the slides, and may stop the
    // click event be triggered on the slides.
    // so a smaller wrapper is needed to prevent the overlap.
    // This wrapper will cover only the whole size of all the
    // indicator pointers' item-sizes.
    h('div', {
      staticClass: 'weex-indicator-inner'
    }, children)]);
  }

  var indicator = {
    name: 'weex-indicator',
    methods: {
      show: function show() {
        this.$el.style.visibility = 'visible';
      }
    },
    props: {
      itemColor: [String],
      itemSelectedColor: [String],
      itemSize: [String]
    },
    data: function data() {
      return {
        count: 0,
        active: 0
      };
    },
    render: function render(createElement) {
      var ref = this.$vnode.data.attrs || {};
      var count = ref.count;
      var active = ref.active;
      this.count = count;
      this.active = active;
      if (!this.count) {
        return;
      }
      return _render(this, createElement);
    }
  };

  var indicator$1 = {
    init: function init(weex) {
      getComponentInlineStyle$1 = weex.getComponentInlineStyle;
      weex.registerComponent('indicator', indicator);
    }
  };

  __$styleInject("/*\n * Licensed to the Apache Software Foundation (ASF) under one\n * or more contributor license agreements.  See the NOTICE file\n * distributed with this work for additional information\n * regarding copyright ownership.  The ASF licenses this file\n * to you under the Apache License, Version 2.0 (the\n * \"License\"); you may not use this file except in compliance\n * with the License.  You may obtain a copy of the License at\n *\n *   http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing,\n * software distributed under the License is distributed on an\n * \"AS IS\" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY\n * KIND, either express or implied.  See the License for the\n * specific language governing permissions and limitations\n * under the License.\n */\n \n.weex-slider-wrapper {\n  overflow: hidden;\n}\n\n.weex-slider-inner {\n  width: 100%;\n  height: 100%;\n  overflow: visible;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n  -webkit-flex-direction: row;\n          flex-direction: row;\n}\n\n.weex-slider-cell {\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  top: 0px;\n  left: 0px;\n  background: transparent !important;\n  overflow: hidden;\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n          align-items: center;\n  -webkit-box-pack: center;\n  -webkit-justify-content: center;\n          justify-content: center;\n}\n\n.neighbor-cell {\n  overflow: visible !important;\n}\n\nnav.weex-indicator {\n  position: absolute;\n  z-index: 10;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n  -webkit-flex-direction: row;\n          flex-direction: row;\n  margin: 0;\n  padding: 0;\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n          align-items: center;\n  -webkit-box-pack: center;\n  -webkit-justify-content: center;\n          justify-content: center;\n  -webkit-transform: translate(-10rem, 0px);\n          transform: translate(-10rem, 0px)\n}\n\ndiv.weex-indicator-inner {\n  -webkit-transform: translate(10rem, 0px);\n          transform: translate(10rem, 0px);\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n  -webkit-flex-direction: row;\n          flex-direction: row;\n}\n\n.weex-indicator-item {\n  display: inline-block;\n  position: relative;\n  border-radius: 50%;\n  width: 0.266667rem;\n  height: 0.266667rem;\n  background-color: #BBBBBB;\n}\n.weex-indicator-item + .weex-indicator-item {\n  margin-left: 0.133333rem;\n}\n\n.weex-indicator-item-active {\n  background-color: blue;\n}", undefined);

  /*
   * Licensed to the Apache Software Foundation (ASF) under one
   * or more contributor license agreements.  See the NOTICE file
   * distributed with this work for additional information
   * regarding copyright ownership.  The ASF licenses this file
   * to you under the Apache License, Version 2.0 (the
   * "License"); you may not use this file except in compliance
   * with the License.  You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing,
   * software distributed under the License is distributed on an
   * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
   * KIND, either express or implied.  See the License for the
   * specific language governing permissions and limitations
   * under the License.
   */

  var slider = {
    init: function init(weex) {
      weex.install(slider$2);
      weex.install(neighbor);
      weex.install(indicator$1);
    }
  };

  __$styleInject("/*\n * Licensed to the Apache Software Foundation (ASF) under one\n * or more contributor license agreements.  See the NOTICE file\n * distributed with this work for additional information\n * regarding copyright ownership.  The ASF licenses this file\n * to you under the Apache License, Version 2.0 (the\n * \"License\"); you may not use this file except in compliance\n * with the License.  You may obtain a copy of the License at\n *\n *   http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing,\n * software distributed under the License is distributed on an\n * \"AS IS\" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY\n * KIND, either express or implied.  See the License for the\n * specific language governing permissions and limitations\n * under the License.\n */\n.weex-textarea {\n  font-size: 0.426667rem\n}\n.weex-textarea:focus {\n  outline: none;\n}\n", undefined);

  /*
   * Licensed to the Apache Software Foundation (ASF) under one
   * or more contributor license agreements.  See the NOTICE file
   * distributed with this work for additional information
   * regarding copyright ownership.  The ASF licenses this file
   * to you under the Apache License, Version 2.0 (the
   * "License"); you may not use this file except in compliance
   * with the License.  You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing,
   * software distributed under the License is distributed on an
   * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
   * KIND, either express or implied.  See the License for the
   * specific language governing permissions and limitations
   * under the License.
   */
  function getTextarea(weex) {
    var extractComponentStyle = weex.extractComponentStyle;
    var ref = weex.mixins;
    var inputCommon = ref.inputCommon;
    var ref$1 = weex.utils;
    var extend = ref$1.extend;
    var mapFormEvents = ref$1.mapFormEvents;

    return {
      name: 'weex-textarea',
      mixins: [inputCommon],
      props: {
        value: String,
        placeholder: String,
        disabled: {
          type: [String, Boolean],
          default: false
        },
        autofocus: {
          type: [String, Boolean],
          default: false
        },
        rows: {
          type: [String, Number],
          default: 2
        },
        returnKeyType: String
      },

      render: function render(createElement) {
        /* istanbul ignore next */
        // if ("production" === 'development') {
        //   validateStyles('textarea', this.$vnode.data && this.$vnode.data.staticStyle)
        // }
        var events = extend(mapFormEvents(this));
        return createElement('html:textarea', {
          attrs: {
            'weex-type': 'textarea',
            value: this.value,
            disabled: this.disabled !== 'false' && this.disabled !== false,
            autofocus: this.autofocus !== 'false' && this.autofocus !== false,
            placeholder: this.placeholder,
            rows: this.rows,
            'return-key-type': this.returnKeyType
          },
          domProps: {
            value: this.value
          },
          on: this.createKeyboardEvent(events),
          staticClass: 'weex-textarea weex-el',
          staticStyle: extractComponentStyle(this)
        });
      }
    };
  }

  var textarea = {
    init: function init(weex) {
      weex.registerComponent('textarea', getTextarea(weex));
    }
  };

  /*
  * Licensed to the Apache Software Foundation (ASF) under one
  * or more contributor license agreements.  See the NOTICE file
  * distributed with this work for additional information
  * regarding copyright ownership.  The ASF licenses this file
  * to you under the Apache License, Version 2.0 (the
  * "License"); you may not use this file except in compliance
  * with the License.  You may obtain a copy of the License at
  *
  *   http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing,
  * software distributed under the License is distributed on an
  * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
  * KIND, either express or implied.  See the License for the
  * specific language governing permissions and limitations
  * under the License.
  */

  function getVideo(weex) {
    var extractComponentStyle = weex.extractComponentStyle;
    var mapNativeEvents = weex.mapNativeEvents;
    var ref = weex.utils;
    var dispatchNativeEvent = ref.dispatchNativeEvent;

    return {
      name: 'weex-video',
      props: {
        src: String,
        playStatus: {
          type: String,
          default: 'pause',
          validator: function validator(value) {
            return ['play', 'pause'].indexOf(value) !== -1;
          }
        },
        autoplay: {
          type: [String, Boolean],
          default: false
        },
        autoPlay: {
          type: [String, Boolean],
          default: false
        },
        playsinline: {
          type: [String, Boolean],
          default: true
        },
        controls: {
          type: [String, Boolean],
          default: false
        }
      },

      render: function render(createElement) {
        if (this.playStatus === 'play') {
          this.$nextTick(function () {
            try {
              this.$el && this.$el.play();
            } catch (err) {
              dispatchNativeEvent(this && this.$el, 'error', {
                message: err.message
              });
            }
          });
        } else if (this.playStatus === 'pause') {
          this.$nextTick(function () {
            this.$el && this.$el.pause();
          });
        }

        return createElement('html:video', {
          attrs: {
            'weex-type': 'video',
            autoplay: this.autoplay !== 'false' && this.autoplay !== false || this.autoPlay !== 'false' && this.autoPlay !== false,
            'webkit-playsinline': this.playsinline,
            controls: this.controls,
            src: this.src
          },
          on: mapNativeEvents(this, {
            play: 'start',
            error: 'fail'
          }),
          staticClass: 'weex-video weex-el',
          staticStyle: extractComponentStyle(this)
        });
      }
    };
  }

  var video = {
    init: function init(weex) {
      weex.registerComponent('video', getVideo(weex));
    }
  };

  __$styleInject("/*\n * Licensed to the Apache Software Foundation (ASF) under one\n * or more contributor license agreements.  See the NOTICE file\n * distributed with this work for additional information\n * regarding copyright ownership.  The ASF licenses this file\n * to you under the Apache License, Version 2.0 (the\n * \"License\"); you may not use this file except in compliance\n * with the License.  You may obtain a copy of the License at\n *\n *   http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing,\n * software distributed under the License is distributed on an\n * \"AS IS\" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY\n * KIND, either express or implied.  See the License for the\n * specific language governing permissions and limitations\n * under the License.\n */\n.weex-web {\n  position: relative;\n  width: 100%;\n  height: 100%;\n  border: none;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n}\n", undefined);

  /*
   * Licensed to the Apache Software Foundation (ASF) under one
   * or more contributor license agreements.  See the NOTICE file
   * distributed with this work for additional information
   * regarding copyright ownership.  The ASF licenses this file
   * to you under the Apache License, Version 2.0 (the
   * "License"); you may not use this file except in compliance
   * with the License.  You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing,
   * software distributed under the License is distributed on an
   * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
   * KIND, either express or implied.  See the License for the
   * specific language governing permissions and limitations
   * under the License.
   */
  function getWeb(weex) {
    var extractComponentStyle = weex.extractComponentStyle;
    var ref = weex.utils;
    var dispatchNativeEvent = ref.dispatchNativeEvent;

    return {
      data: function data() {
        return {
          currentSrc: ''
        };
      },
      name: 'weex-web',
      props: {
        src: String
      },
      watch: {
        src: function src(newVal) {
          this.currentSrc = newVal;
        }
      },
      methods: {
        goBack: function goBack() {
          var el = this.$el;
          if (el) {
            var win = el.contentWindow;
            try {
              win.history.back();
              this.currentSrc = win.location.href;
            } catch (err) {
              dispatchNativeEvent(el, 'error', err);
            }
          }
        },
        goForward: function goForward() {
          var el = this.$el;
          if (el) {
            var win = el.contentWindow;
            try {
              win.history.forward();
              this.currentSrc = win.location.href;
            } catch (err) {
              dispatchNativeEvent(el, 'error', err);
            }
          }
        },
        reload: function reload() {
          var el = this.$el;
          if (el) {
            try {
              el.contentWindow.location.reload();
              dispatchNativeEvent(el, 'pagestart', { url: this.currentSrc });
            } catch (err) {
              dispatchNativeEvent(el, 'error', err);
            }
          }
        }
      },

      created: function created() {
        this.currentSrc = this.src;
      },

      mounted: function mounted() {
        var el = this.$el;
        this._prevSrc = this.currentSrc;
        if (el) {
          dispatchNativeEvent(el, 'pagestart', { url: this.currentSrc });
        }
      },

      updated: function updated() {
        if (this.currentSrc !== this._prevSrc) {
          this._prevSrc = this.currentSrc;
          dispatchNativeEvent(this.$el, 'pagestart', { url: this.currentSrc });
        }
      },

      render: function render(createElement) {
        var this$1 = this;

        return createElement('iframe', {
          attrs: {
            'weex-type': 'web',
            src: this.currentSrc
          },
          on: {
            load: function load(event) {
              this$1.$nextTick(function () {
                var el = this.$el;
                try {
                  var html = el.contentWindow.document.documentElement;
                  if (html) {
                    dispatchNativeEvent(el, 'pagefinish', { url: this.currentSrc });
                  } else {
                    dispatchNativeEvent(el, 'error', new Error('[vue-render]:found no page content.'));
                  }
                } catch (err) {
                  dispatchNativeEvent(el, 'error', err);
                }
              });
            }
          },
          staticClass: 'weex-web weex-el',
          staticStyle: extractComponentStyle(this)
        });
      }
    };
  }

  var web = {
    init: function init(weex) {
      weex.registerComponent('web', getWeb(weex));
    }
  };

  /*
   * Licensed to the Apache Software Foundation (ASF) under one
   * or more contributor license agreements.  See the NOTICE file
   * distributed with this work for additional information
   * regarding copyright ownership.  The ASF licenses this file
   * to you under the Apache License, Version 2.0 (the
   * "License"); you may not use this file except in compliance
   * with the License.  You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing,
   * software distributed under the License is distributed on an
   * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
   * KIND, either express or implied.  See the License for the
   * specific language governing permissions and limitations
   * under the License.
   */
  // import a from './a'
  // import div from './div'
  // import image from './image'
  // import text from './text'
  var components = [
  // a,
  // div,
  // image,
  input, _switch, scrollable, slider,
  // text,
  textarea, video, web];

  /*
   * Licensed to the Apache Software Foundation (ASF) under one
   * or more contributor license agreements.  See the NOTICE file
   * distributed with this work for additional information
   * regarding copyright ownership.  The ASF licenses this file
   * to you under the Apache License, Version 2.0 (the
   * "License"); you may not use this file except in compliance
   * with the License.  You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing,
   * software distributed under the License is distributed on an
   * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
   * KIND, either express or implied.  See the License for the
   * specific language governing permissions and limitations
   * under the License.
   */
  var supportGeolocation = 'geolocation' in navigator;
  var errorMsg = "[h5-render]: browser doesn't support geolocation.";

  var geolocation = {
    // options:
    //   - enableHighAccuracy optional, value is true or false, false by default.
    //   - timeout [none-native] optional, value is a number (milliseconds), default vaule is FINFINITY.
    //   - maximumAge [none-native] optional, value is a number (milliseconds), default value is 0.
    getCurrentPosition: function getCurrentPosition(successCbId, errorCbId, options) {
      var this$1 = this;

      var successCb = function successCb(pos) {
        return this$1.sender.performCallback(successCbId, pos);
      };
      var errorCb = function errorCb(err) {
        return this$1.sender.performCallback(errorCbId, err);
      };
      if (supportGeolocation) {
        navigator.geolocation.getCurrentPosition(successCb, errorCb, options);
      } else {
        console.warn(errorMsg);
        errorCb(new Error(errorMsg));
      }
    },

    // options: the same with `getCurrentPosition`.
    watchPosition: function watchPosition(successCbId, errorCbId, options) {
      var this$1 = this;

      var successCb = function successCb(pos) {
        return this$1.sender.performCallback(successCbId, pos, true);
      };
      var errorCb = function errorCb(err) {
        return this$1.sender.performCallback(errorCbId, err);
      };
      if (supportGeolocation) {
        var id = navigator.geolocation.watchPosition(function (pos) {
          pos.watchId = id;
          successCb(pos);
        }, errorCb, options);
      } else {
        console.warn(errorMsg);
        errorCb(new Error(errorMsg));
      }
    },

    clearWatch: function clearWatch(watchId) {
      if (supportGeolocation) {
        navigator.geolocation.clearWatch(watchId);
      } else {
        console.warn(errorMsg);
      }
    }
  };

  var meta = {
    geolocation: [{
      name: 'getCurrentPosition',
      args: ['function', 'function', 'object']
    }, {
      name: 'watchPosition',
      args: ['function', 'function', 'object']
    }, {
      name: 'clearWatch',
      args: ['string']
    }]
  };

  var geolocation$1 = {
    init: function init(Weex) {
      Weex.registerApiModule('geolocation', geolocation, meta);
    }
  };

  /*
   * Licensed to the Apache Software Foundation (ASF) under one
   * or more contributor license agreements.  See the NOTICE file
   * distributed with this work for additional information
   * regarding copyright ownership.  The ASF licenses this file
   * to you under the Apache License, Version 2.0 (the
   * "License"); you may not use this file except in compliance
   * with the License.  You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing,
   * software distributed under the License is distributed on an
   * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
   * KIND, either express or implied.  See the License for the
   * specific language governing permissions and limitations
   * under the License.
   */
  /* global localStorage */

  var supportLocalStorage = false;
  try {
    supportLocalStorage = typeof localStorage !== 'undefined';
  } catch (err) {
    // not support.
  }

  var SUCCESS = 'success';
  var FAILED = 'failed';
  var INVALID_PARAM = 'invalid_param';
  var UNDEFINED = 'undefined';

  function callFail(sender, callbackId, errorMsg) {
    sender.performCallback(callbackId, {
      result: FAILED,
      data: errorMsg || UNDEFINED
    });
  }

  function callNotSupportFail(sender, callbackId) {
    sender.performCallback(callbackId, {
      result: FAILED,
      data: 'localStorage is disabled or not supported.'
    });
  }

  var storage = {

    /**
     * When passed a key name and value, will add that key to the storage,
     * or update that key's value if it already exists.
     * @param {string} key
     * @param {string} value not null nor undifined，but 0 works.
     * @param {function} callbackId
     */
    setItem: function setItem(key, value, callbackId) {
      var sender = this.sender;
      if (!supportLocalStorage) {
        return callNotSupportFail(sender, callbackId);
      }
      if (!key || !value && value !== 0) {
        sender.performCallback(callbackId, {
          result: 'failed',
          data: INVALID_PARAM
        });
        return;
      }
      try {
        localStorage.setItem(key, value);
        sender.performCallback(callbackId, {
          result: SUCCESS,
          data: UNDEFINED
        });
      } catch (e) {
        // accept any exception thrown during a storage attempt as a quota error
        callFail(sender, callbackId);
      }
    },

    /**
     * When passed a key name, will return that key's value.
     * @param {string} key
     * @param {function} callbackId
     */
    getItem: function getItem(key, callbackId) {
      var sender = this.sender;
      if (!supportLocalStorage) {
        return callNotSupportFail(sender, callbackId);
      }
      if (!key) {
        sender.performCallback(callbackId, {
          result: FAILED,
          data: INVALID_PARAM
        });
        return;
      }
      try {
        var val = localStorage.getItem(key);
        sender.performCallback(callbackId, {
          result: val ? SUCCESS : FAILED,
          data: val || UNDEFINED
        });
      } catch (e) {
        // accept any exception thrown during a storage attempt as a quota error
        callFail(sender, callbackId);
      }
    },

    /**
     *When passed a key name, will remove that key from the storage.
     * @param {string} key
     * @param {function} callbackId
     */
    removeItem: function removeItem(key, callbackId) {
      var sender = this.sender;
      if (!supportLocalStorage) {
        return callNotSupportFail(sender, callbackId);
      }
      if (!key) {
        sender.performCallback(callbackId, {
          result: FAILED,
          data: INVALID_PARAM
        });
        return;
      }
      try {
        localStorage.removeItem(key);
        sender.performCallback(callbackId, {
          result: SUCCESS,
          data: UNDEFINED
        });
      } catch (e) {
        // accept any exception thrown during a storage attempt as a quota error
        callFail(sender, callbackId);
      }
    },

    /**
     * Returns an integer representing the number of data items stored in the Storage object.
     * @param {function} callbackId
     */
    length: function length(callbackId) {
      var sender = this.sender;
      if (!supportLocalStorage) {
        return callNotSupportFail(sender, callbackId);
      }
      try {
        var len = localStorage.length;
        sender.performCallback(callbackId, {
          result: SUCCESS,
          data: len
        });
      } catch (e) {
        // accept any exception thrown during a storage attempt as a quota error
        callFail(sender, callbackId);
      }
    },

    /**
     * Returns an array that contains all keys stored in Storage object.
     * @param {function} callbackId
     */
    getAllKeys: function getAllKeys(callbackId) {
      var sender = this.sender;
      if (!supportLocalStorage) {
        return callNotSupportFail(sender, callbackId);
      }
      try {
        var _arr = [];
        for (var i = 0; i < localStorage.length; i++) {
          _arr.push(localStorage.key(i));
        }
        sender.performCallback(callbackId, {
          result: SUCCESS,
          data: _arr
        });
      } catch (e) {
        // accept any exception thrown during a storage attempt as a quota error
        callFail(sender, callbackId);
      }
    }
  };

  var meta$1 = {
    storage: [{
      name: 'setItem',
      args: ['string', 'string', 'function']
    }, {
      name: 'getItem',
      args: ['string', 'function']
    }, {
      name: 'removeItem',
      args: ['string', 'function']
    }, {
      name: 'length',
      args: ['function']
    }, {
      name: 'getAllKeys',
      args: ['function']
    }]
  };

  var storage$1 = {
    init: function init(Weex) {
      Weex.registerApiModule('storage', storage, meta$1);
    }
  };

  typeof window === 'undefined' && (window = { ctrl: {}, lib: {} });!window.ctrl && (window.ctrl = {});!window.lib && (window.lib = {});!function (a, b) {
    function c(a) {
      var b = {};Object.defineProperty(this, "params", { set: function set(a) {
          if ("object" == (typeof a === 'undefined' ? 'undefined' : _typeof(a))) {
            for (var c in b) {
              delete b[c];
            }for (var c in a) {
              b[c] = a[c];
            }
          }
        }, get: function get() {
          return b;
        }, enumerable: !0 }), Object.defineProperty(this, "search", { set: function set(a) {
          if ("string" == typeof a) {
            0 === a.indexOf("?") && (a = a.substr(1));var c = a.split("&");for (var d in b) {
              delete b[d];
            }for (var e = 0; e < c.length; e++) {
              var f = c[e].split("=");if (void 0 !== f[1] && (f[1] = f[1].toString()), f[0]) {
                try {
                  b[decodeURIComponent(f[0])] = decodeURIComponent(f[1]);
                } catch (g) {
                  b[f[0]] = f[1];
                }
              }
            }
          }
        }, get: function get() {
          var a = [];for (var c in b) {
            if (void 0 !== b[c]) {
              if ("" !== b[c]) {
                try {
                  a.push(encodeURIComponent(c) + "=" + encodeURIComponent(b[c]));
                } catch (d) {
                  a.push(c + "=" + b[c]);
                }
              } else {
                try {
                  a.push(encodeURIComponent(c));
                } catch (d) {
                  a.push(c);
                }
              }
            }
          }return a.length ? "?" + a.join("&") : "";
        }, enumerable: !0 });var c;Object.defineProperty(this, "hash", { set: function set(a) {
          "string" == typeof a && (a && a.indexOf("#") < 0 && (a = "#" + a), c = a || "");
        }, get: function get() {
          return c;
        }, enumerable: !0 }), this.set = function (a) {
        a = a || "";var b;if (!(b = a.match(new RegExp("^([a-z0-9-]+:)?[/]{2}(?:([^@/:?]+)(?::([^@/:]+))?@)?([^:/?#]+)(?:[:]([0-9]+))?([/][^?#;]*)?(?:[?]([^#]*))?([#][^?]*)?$", "i")))) {
          throw new Error("Wrong uri scheme.");
        }this.protocol = b[1] || ("object" == (typeof location === 'undefined' ? 'undefined' : _typeof(location)) ? location.protocol : ""), this.username = b[2] || "", this.password = b[3] || "", this.hostname = this.host = b[4], this.port = b[5] || "", this.pathname = b[6] || "/", this.search = b[7] || "", this.hash = b[8] || "", this.origin = this.protocol + "//" + this.hostname;
      }, this.toString = function () {
        var a = this.protocol + "//";return this.username && (a += this.username, this.password && (a += ":" + this.password), a += "@"), a += this.host, this.port && "80" !== this.port && (a += ":" + this.port), this.pathname && (a += this.pathname), this.search && (a += this.search), this.hash && (a += this.hash), a;
      }, a && this.set(a.toString());
    }b.httpurl = function (a) {
      return new c(a);
    };
  }(window, window.lib || (window.lib = {}));var httpurl_common = window.lib['httpurl'];

  var strictUriEncode = function strictUriEncode(str) {
    return encodeURIComponent(str).replace(/[!'()*]/g, function (c) {
      return '%' + c.charCodeAt(0).toString(16).toUpperCase();
    });
  };

  /*
  object-assign
  (c) Sindre Sorhus
  @license MIT
  */

  /* eslint-disable no-unused-vars */
  var getOwnPropertySymbols = Object.getOwnPropertySymbols;
  var hasOwnProperty$1 = Object.prototype.hasOwnProperty;
  var propIsEnumerable = Object.prototype.propertyIsEnumerable;

  function toObject$1(val) {
    if (val === null || val === undefined) {
      throw new TypeError('Object.assign cannot be called with null or undefined');
    }

    return Object(val);
  }

  function shouldUseNative() {
    try {
      if (!Object.assign) {
        return false;
      }

      // Detect buggy property enumeration order in older V8 versions.

      // https://bugs.chromium.org/p/v8/issues/detail?id=4118
      var test1 = new String('abc'); // eslint-disable-line no-new-wrappers
      test1[5] = 'de';
      if (Object.getOwnPropertyNames(test1)[0] === '5') {
        return false;
      }

      // https://bugs.chromium.org/p/v8/issues/detail?id=3056
      var test2 = {};
      for (var i = 0; i < 10; i++) {
        test2['_' + String.fromCharCode(i)] = i;
      }
      var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
        return test2[n];
      });
      if (order2.join('') !== '0123456789') {
        return false;
      }

      // https://bugs.chromium.org/p/v8/issues/detail?id=3056
      var test3 = {};
      'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
        test3[letter] = letter;
      });
      if (Object.keys(Object.assign({}, test3)).join('') !== 'abcdefghijklmnopqrst') {
        return false;
      }

      return true;
    } catch (err) {
      // We don't expect any of the above to throw, but better to be safe.
      return false;
    }
  }

  var objectAssign = shouldUseNative() ? Object.assign : function (target, source) {
    var arguments$1 = arguments;

    var from;
    var to = toObject$1(target);
    var symbols;

    for (var s = 1; s < arguments.length; s++) {
      from = Object(arguments$1[s]);

      for (var key in from) {
        if (hasOwnProperty$1.call(from, key)) {
          to[key] = from[key];
        }
      }

      if (getOwnPropertySymbols) {
        symbols = getOwnPropertySymbols(from);
        for (var i = 0; i < symbols.length; i++) {
          if (propIsEnumerable.call(from, symbols[i])) {
            to[symbols[i]] = from[symbols[i]];
          }
        }
      }
    }

    return to;
  };

  function encoderForArrayFormat(opts) {
    switch (opts.arrayFormat) {
      case 'index':
        return function (key, value, index) {
          return value === null ? [encode(key, opts), '[', index, ']'].join('') : [encode(key, opts), '[', encode(index, opts), ']=', encode(value, opts)].join('');
        };

      case 'bracket':
        return function (key, value) {
          return value === null ? encode(key, opts) : [encode(key, opts), '[]=', encode(value, opts)].join('');
        };

      default:
        return function (key, value) {
          return value === null ? encode(key, opts) : [encode(key, opts), '=', encode(value, opts)].join('');
        };
    }
  }

  function parserForArrayFormat(opts) {
    var result;

    switch (opts.arrayFormat) {
      case 'index':
        return function (key, value, accumulator) {
          result = /\[(\d*)\]$/.exec(key);

          key = key.replace(/\[\d*\]$/, '');

          if (!result) {
            accumulator[key] = value;
            return;
          }

          if (accumulator[key] === undefined) {
            accumulator[key] = {};
          }

          accumulator[key][result[1]] = value;
        };

      case 'bracket':
        return function (key, value, accumulator) {
          result = /(\[\])$/.exec(key);
          key = key.replace(/\[\]$/, '');

          if (!result) {
            accumulator[key] = value;
            return;
          } else if (accumulator[key] === undefined) {
            accumulator[key] = [value];
            return;
          }

          accumulator[key] = [].concat(accumulator[key], value);
        };

      default:
        return function (key, value, accumulator) {
          if (accumulator[key] === undefined) {
            accumulator[key] = value;
            return;
          }

          accumulator[key] = [].concat(accumulator[key], value);
        };
    }
  }

  function encode(value, opts) {
    if (opts.encode) {
      return opts.strict ? strictUriEncode(value) : encodeURIComponent(value);
    }

    return value;
  }

  function keysSorter(input) {
    if (Array.isArray(input)) {
      return input.sort();
    } else if ((typeof input === 'undefined' ? 'undefined' : _typeof(input)) === 'object') {
      return keysSorter(Object.keys(input)).sort(function (a, b) {
        return Number(a) - Number(b);
      }).map(function (key) {
        return input[key];
      });
    }

    return input;
  }

  var extract = function extract(str) {
    return str.split('?')[1] || '';
  };

  var parse = function parse(str, opts) {
    opts = objectAssign({ arrayFormat: 'none' }, opts);

    var formatter = parserForArrayFormat(opts);

    // Create an object with no prototype
    // https://github.com/sindresorhus/query-string/issues/47
    var ret = Object.create(null);

    if (typeof str !== 'string') {
      return ret;
    }

    str = str.trim().replace(/^(\?|#|&)/, '');

    if (!str) {
      return ret;
    }

    str.split('&').forEach(function (param) {
      var parts = param.replace(/\+/g, ' ').split('=');
      // Firefox (pre 40) decodes `%3D` to `=`
      // https://github.com/sindresorhus/query-string/pull/37
      var key = parts.shift();
      var val = parts.length > 0 ? parts.join('=') : undefined;

      // missing `=` should be `null`:
      // http://w3.org/TR/2012/WD-url-20120524/#collect-url-parameters
      val = val === undefined ? null : decodeURIComponent(val);

      formatter(decodeURIComponent(key), val, ret);
    });

    return Object.keys(ret).sort().reduce(function (result, key) {
      var val = ret[key];
      if (Boolean(val) && (typeof val === 'undefined' ? 'undefined' : _typeof(val)) === 'object' && !Array.isArray(val)) {
        // Sort object keys, not values
        result[key] = keysSorter(val);
      } else {
        result[key] = val;
      }

      return result;
    }, Object.create(null));
  };

  var stringify = function stringify(obj, opts) {
    var defaults = {
      encode: true,
      strict: true,
      arrayFormat: 'none'
    };

    opts = objectAssign(defaults, opts);

    var formatter = encoderForArrayFormat(opts);

    return obj ? Object.keys(obj).sort().map(function (key) {
      var val = obj[key];

      if (val === undefined) {
        return '';
      }

      if (val === null) {
        return encode(key, opts);
      }

      if (Array.isArray(val)) {
        var result = [];

        val.slice().forEach(function (val2) {
          if (val2 === undefined) {
            return;
          }

          result.push(formatter(key, val2, result.length));
        });

        return result.join('&');
      }

      return encode(key, opts) + '=' + encode(val, opts);
    }).filter(function (x) {
      return x.length > 0;
    }).join('&') : '';
  };

  var queryString = {
    extract: extract,
    parse: parse,
    stringify: stringify
  };

  /*
   * Licensed to the Apache Software Foundation (ASF) under one
   * or more contributor license agreements.  See the NOTICE file
   * distributed with this work for additional information
   * regarding copyright ownership.  The ASF licenses this file
   * to you under the Apache License, Version 2.0 (the
   * "License"); you may not use this file except in compliance
   * with the License.  You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing,
   * software distributed under the License is distributed on an
   * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
   * KIND, either express or implied.  See the License for the
   * specific language governing permissions and limitations
   * under the License.
   */
  /* global lib, XMLHttpRequest */
  /* deps: httpurl */

  var utils$1;

  var jsonpCnt = 0;
  var ERROR_STATE = -1;

  function _jsonp(config, callback, progressCallback) {
    var cbName = config.jsonpCallbackName || 'jsonp_' + ++jsonpCnt;
    var url;

    if (!config.url) {
      console.error('[h5-render] config.url should be set in _jsonp for \'fetch\' API.');
    }

    global[cbName] = function (cb) {
      return function (response) {
        callback({
          status: 200,
          ok: true,
          statusText: 'OK',
          data: response
        });
        delete global[cb];
      };
    }(cbName);

    var script = document.createElement('script');
    try {
      url = lib.httpurl(config.url);
    } catch (err) {
      console.error('[h5-render] invalid config.url in _jsonp for \'fetch\' API: ' + config.url);
    }
    url.params.callback = cbName;
    script.type = 'text/javascript';
    script.src = url.toString();
    // script.onerror is not working on IE or safari.
    // but they are not considered here.
    script.onerror = function (cb) {
      return function (err) {
        console.error('[h5-render] unexpected error in _jsonp for \'fetch\' API', err);
        callback({
          status: ERROR_STATE,
          ok: false,
          statusText: '',
          data: ''
        });
        delete global[cb];
      };
    }(cbName);
    var head = document.getElementsByTagName('head')[0];
    head.insertBefore(script, null);
  }

  function _xhr(config, callback, progressCallback) {
    var xhr = new XMLHttpRequest();
    xhr.responseType = config.type;
    xhr.open(config.method, config.url, true);

    // cors cookie support
    if (config.withCredentials === true) {
      xhr.withCredentials = true;
    }

    var headers = config.headers || {};
    for (var k in headers) {
      xhr.setRequestHeader(k, headers[k]);
    }

    xhr.onload = function (res) {
      callback({
        status: xhr.status,
        ok: xhr.status >= 200 && xhr.status < 300,
        statusText: xhr.statusText,
        data: xhr.response,
        headers: xhr.getAllResponseHeaders().split('\n').reduce(function (obj, headerStr) {
          var headerArr = headerStr.match(/(.+): (.+)/);
          if (headerArr) {
            obj[headerArr[1]] = headerArr[2];
          }
          return obj;
        }, {})
      });
    };

    if (progressCallback) {
      xhr.onprogress = function (e) {
        progressCallback({
          readyState: xhr.readyState,
          status: xhr.status,
          length: e.loaded,
          total: e.total,
          statusText: xhr.statusText,
          headers: xhr.getAllResponseHeaders().split('\n').reduce(function (obj, headerStr) {
            var headerArr = headerStr.match(/(.+): (.+)/);
            if (headerArr) {
              obj[headerArr[1]] = headerArr[2];
            }
            return obj;
          }, {})
        });
      };
    }

    xhr.onerror = function (err) {
      console.error('[h5-render] unexpected error in _xhr for \'fetch\' API', err);
      callback({
        status: ERROR_STATE,
        ok: false,
        statusText: '',
        data: ''
      });
    };

    xhr.send(config.body || null);
  }

  var stream = {

    /**
     * sendHttp
     * @deprecated
     * Note: This API is deprecated. Please use stream.fetch instead.
     * send a http request through XHR.
     * @param  {obj} params
     *  - method: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'HEAD' | 'PATCH',
     *  - url: url requested
     * @param  {string} callbackId
     */
    sendHttp: function sendHttp(param, callbackId) {
      if (typeof param === 'string') {
        try {
          param = JSON.parse(param);
        } catch (e) {
          return;
        }
      }
      if ((typeof param === 'undefined' ? 'undefined' : _typeof(param)) !== 'object' || !param.url) {
        return console.error('[h5-render] invalid config or invalid config.url for sendHttp API');
      }

      var sender = this.sender;
      var method = param.method || 'GET';
      var xhr = new XMLHttpRequest();
      xhr.open(method, param.url, true);
      xhr.onload = function () {
        sender.performCallback(callbackId, this.responseText);
      };
      xhr.onerror = function (error) {
        return console.error('[h5-render] unexpected error in sendHttp API', error);
        // sender.performCallback(
        //   callbackId,
        //   new Error('unexpected error in sendHttp API')
        // )
      };
      xhr.send();
    },

    /**
     * fetch
     * use stream.fetch to request for a json file, a plain text file or
     * a arraybuffer for a file stream. (You can use Blob and FileReader
     * API implemented by most modern browsers to read a arraybuffer.)
     * @param  {object} options config options
     *   - method: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'HEAD' | 'PATCH'
     *   - headers {obj}
     *   - url {string}
     *   - mode {string} 'cors' | 'no-cors' | 'same-origin' | 'navigate'
     *   - withCredentials {boolean}
     *   - body
     *   - type {string} 'json' | 'jsonp' | 'text'
     * @param  {string} callbackId
     * @param  {string} progressCallbackId
     */
    fetch: function fetch(options, callbackId, progressCallbackId) {
      var DEFAULT_METHOD = 'GET';
      var DEFAULT_MODE = 'cors';
      var DEFAULT_TYPE = 'text';

      var methodOptions = ['GET', 'POST', 'PUT', 'DELETE', 'HEAD', 'PATCH'];
      var modeOptions = ['cors', 'no-cors', 'same-origin', 'navigate'];
      var typeOptions = ['text', 'json', 'jsonp', 'arraybuffer'];

      // const fallback = false  // fallback from 'fetch' API to XHR.
      var sender = this.sender;

      var config = utils$1.extend({}, options);

      // validate options.method
      if (typeof config.method === 'undefined') {
        config.method = DEFAULT_METHOD;
        console.warn('[h5-render] options.method for \'fetch\' API has been set to ' + 'default value \'' + config.method + '\'');
      } else if (methodOptions.indexOf((config.method + '').toUpperCase()) === -1) {
        return console.error('[h5-render] options.method \'' + config.method + '\' for \'fetch\' API should be one of ' + methodOptions + '.');
      }

      // validate options.url
      if (!config.url) {
        return console.error('[h5-render] options.url should be set for \'fetch\' API.');
      }

      // validate body content for method 'GET'.
      if (config.method.toUpperCase() === 'GET') {
        var body = config.body;
        if (utils$1.isPlainObject(body)) {
          body = queryString.stringify(body);
        }
        var url = config.url;
        var hashIdx = url.indexOf('#');
        hashIdx <= -1 && (hashIdx = url.length);
        var hash = url.substr(hashIdx);
        if (hash && hash[0] === '#') {
          hash = hash.substr(1);
        }
        url = url.substring(0, hashIdx);
        if (body) {
          url += (config.url.indexOf('?') <= -1 ? '?' : '&') + body;
        }
        url += '#' + hash;
        config.url = url;
      }

      // validate options.mode
      if (typeof config.mode === 'undefined') {
        config.mode = DEFAULT_MODE;
      } else if (modeOptions.indexOf((config.mode + '').toLowerCase()) === -1) {
        return console.error('[h5-render] options.mode \'' + config.mode + '\' for \'fetch\' API should be one of ' + modeOptions + '.');
      }

      // validate options.type
      if (typeof config.type === 'undefined') {
        config.type = DEFAULT_TYPE;
        console.warn('[h5-render] options.type for \'fetch\' API has been set to ' + 'default value \'' + config.type + '\'.');
      } else if (typeOptions.indexOf((config.type + '').toLowerCase()) === -1) {
        return console.error('[h5-render] options.type \'' + config.type + '\' for \'fetch\' API should be one of ' + typeOptions + '.');
      }

      // validate options.headers
      config.headers = config.headers || {};
      if (!utils$1.isPlainObject(config.headers)) {
        return console.error('[h5-render] options.headers should be a plain object');
      }

      // validate options.timeout
      config.timeout = parseInt(config.timeout, 10) || 2500;

      var _callArgs = [config, function (res) {
        sender.performCallback(callbackId, res);
      }];
      if (progressCallbackId) {
        _callArgs.push(function (res) {
          // Set 'keepAlive' to true for sending continuous callbacks
          sender.performCallback(progressCallbackId, res, true);
        });
      }

      if (config.type === 'jsonp') {
        _jsonp.apply(this, _callArgs);
      } else {
        _xhr.apply(this, _callArgs);
      }
    }

  };

  var meta$2 = {
    stream: [{
      name: 'sendHttp',
      args: ['object', 'function']
    }, {
      name: 'fetch',
      args: ['object', 'function', 'function']
    }]
  };

  var stream$1 = {
    init: function init(Weex) {
      utils$1 = Weex.utils;
      Weex.registerApiModule('stream', stream, meta$2);
    }
  };

  /*
   * Licensed to the Apache Software Foundation (ASF) under one
   * or more contributor license agreements.  See the NOTICE file
   * distributed with this work for additional information
   * regarding copyright ownership.  The ASF licenses this file
   * to you under the Apache License, Version 2.0 (the
   * "License"); you may not use this file except in compliance
   * with the License.  You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing,
   * software distributed under the License is distributed on an
   * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
   * KIND, either express or implied.  See the License for the
   * specific language governing permissions and limitations
   * under the License.
   */
  /**
  
  AUCTION:
  taskQueue
  Clipboard.setString()  NOW not works, facing to user-act lose of taskQueue.
  
  works in Chrome Firefox Opera. but not in Safari.
  @see https://developer.mozilla.org/en-US/docs/Web/API/Document/execCommand#Browser_compatibility
  
  Clipboard.getString() unimplemented. There is no easy way to do paste from clipboard to js variable.
  
  So look out your app behavior, when downgrade to html5 render.
  Any idea is welcome.
  **/

  var WEEX_CLIPBOARD_ID = '__weex_clipboard_id__';

  var clipboard = {

    getString: function getString(callbackId) {
      // not supported in html5
      console.log('clipboard.getString() is not supported now.');
    },

    setString: function setString(text) {
      // not support safari
      if (typeof text === 'string' && text !== '' && document.execCommand) {
        var tempInput = element();
        tempInput.value = text;

        tempInput.select();
        document.execCommand('copy');
        // var out = document.execCommand('copy');
        // console.log("execCommand out is " + out);
        tempInput.value = '';
        tempInput.blur();
      } else {
        console.log('only support string input now');
      }
    }

  };

  function element() {
    var tempInput = document.getElementById(WEEX_CLIPBOARD_ID);
    if (!tempInput) {
      tempInput = document.createElement('input');
      tempInput.setAttribute('id', WEEX_CLIPBOARD_ID);
      tempInput.style.cssText = 'height:1px;width:1px;border:none;';
      // tempInput.style.cssText = "height:40px;width:300px;border:solid;"
      document.body.appendChild(tempInput);
    }
    return tempInput;
  }

  var meta$3 = {
    clipboard: [{
      name: 'getString',
      args: ['function']
    }, {
      name: 'setString',
      args: ['string']
    }]
  };

  var clipboard$1 = {
    init: function init(Weex) {
      Weex.registerApiModule('clipboard', clipboard, meta$3);
    }
  };

  /*
   * Licensed to the Apache Software Foundation (ASF) under one
   * or more contributor license agreements.  See the NOTICE file
   * distributed with this work for additional information
   * regarding copyright ownership.  The ASF licenses this file
   * to you under the Apache License, Version 2.0 (the
   * "License"); you may not use this file except in compliance
   * with the License.  You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing,
   * software distributed under the License is distributed on an
   * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
   * KIND, either express or implied.  See the License for the
   * specific language governing permissions and limitations
   * under the License.
   */
  var event$2 = {
    /**
     * openUrl
     * @param  {string} url
     */
    openURL: function openURL(url) {
      location.href = url;
    }

  };

  var meta$4 = {
    event: [{
      name: 'openURL',
      args: ['string']
    }]
  };

  var eventModule = {
    init: function init(Weex) {
      Weex.registerApiModule('event', event$2, meta$4);
    }
  };

  /*
   * Licensed to the Apache Software Foundation (ASF) under one
   * or more contributor license agreements.  See the NOTICE file
   * distributed with this work for additional information
   * regarding copyright ownership.  The ASF licenses this file
   * to you under the Apache License, Version 2.0 (the
   * "License"); you may not use this file except in compliance
   * with the License.  You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing,
   * software distributed under the License is distributed on an
   * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
   * KIND, either express or implied.  See the License for the
   * specific language governing permissions and limitations
   * under the License.
   */
  var utils$2 = {};
  var endEvent;
  var styleName;

  var DESIGN_ROOT_VALUE = 75;

  var EVENT_NAME_MAP = {
    transition: 'transitionend',
    WebkitTransition: 'webkitTransitionEnd',
    MozTransition: 'mozTransitionEnd',
    OTransition: 'oTransitionEnd',
    msTransition: 'MSTransitionEnd'
  };

  function detectEvents() {
    var testEl = document.createElement('div');
    var style = testEl.style;
    for (var name in EVENT_NAME_MAP) {
      if (name in style) {
        endEvent = EVENT_NAME_MAP[name];
        styleName = name;
        break;
      }
    }
  }

  detectEvents();

  function transitionOnce(vnode, config, callback) {
    var nextFrame = utils$2.nextFrame;
    var toCSSText = utils$2.toCSSText;
    var styleObject2rem = utils$2.styleObject2rem;
    var isArray = utils$2.isArray;

    if (isArray(vnode)) {
      vnode = vnode[0];
    }

    var duration = config.duration || 0; // ms
    var timing = config.timingFunction || 'linear';
    var delay = config.delay || 0; // ms

    // TODO: parse transition properties
    var transitionValue = "all " + duration + "ms " + timing + " " + delay + "ms";

    var dom = vnode instanceof HTMLElement ? vnode : vnode.$el;
    // trigger image lazyloading by force.
    dom && weex.utils.fireLazyload(dom, true);

    var transitionEndHandler = function transitionEndHandler(event) {
      event && event.stopPropagation();
      if (endEvent) {
        dom.removeEventListener(endEvent, transitionEndHandler);
        dom.style[styleName] = '';
      }
      callback();
    };
    if (endEvent) {
      dom.style[styleName] = transitionValue;
      dom.addEventListener(endEvent, transitionEndHandler);
    }
    nextFrame(function () {
      dom.style.cssText += toCSSText(styleObject2rem(config.styles, DESIGN_ROOT_VALUE) || {});
    });
  }

  var animation = {
    /**
     * transition
     * @param  {String} vnode
     * @param  {Object} config
     * @param  {String} callback
     */
    transition: function transition(vnode, config, callback) {
      if (!config.styles) {
        return;
      }
      return transitionOnce(vnode, config, function () {
        callback && callback();
      });
    }
  };

  var animation$1 = {
    init: function init(weex) {
      var extendKeys = weex.utils.extendKeys;
      extendKeys(utils$2, weex.utils, ['nextFrame', 'toCSSText', 'styleObject2rem',
      // 'autoPrefix',
      // 'normalizeStyle',
      'isArray']);

      weex.registerModule('animation', animation);
    }
  };

  /*
   * Licensed to the Apache Software Foundation (ASF) under one
   * or more contributor license agreements.  See the NOTICE file
   * distributed with this work for additional information
   * regarding copyright ownership.  The ASF licenses this file
   * to you under the Apache License, Version 2.0 (the
   * "License"); you may not use this file except in compliance
   * with the License.  You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing,
   * software distributed under the License is distributed on an
   * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
   * KIND, either express or implied.  See the License for the
   * specific language governing permissions and limitations
   * under the License.
   */
  var utils$3 = {};

  function now() {
    var now = window.performance && window.performance.now ? window.performance.now.bind(window.performance) : Date.now;
    return now();
  }

  function scrollElement(dSuffix, position) {
    if (this === document.body || this === window && window.scrollTo) {
      return window.scrollTo(0, position);
    }
    this["scroll" + dSuffix] = position;
  }
  /**
   * self invoked function that, given a context, steps through scrolling
   * @method step
   * @param {Object} context
   */
  function step$1(context) {
    // call method again on next available frame
    context.frame = window.requestAnimationFrame(step$1.bind(window, context));
    var time = now();
    var elapsed = (time - context.startTime) / 468;
    // avoid elapsed times higher than one
    elapsed = elapsed > 1 ? 1 : elapsed;
    // apply easing to elapsed time
    var value = ease(elapsed);
    var currentPosition = context.startPosition + (context.position - context.startPosition) * value;
    context.method.call(context.scrollable, context.dSuffix, currentPosition);
    // return when end points have been reached
    /**
      * NOTE: should use ~~ to parse position number into integer. Otherwise
      * this two float numbers maybe have a slicely little difference, which
      * will cause this function never to stop.
    */
    if (~~currentPosition === ~~context.position) {
      window.cancelAnimationFrame(context.frame);
      return;
    }
  }
  /**
   * returns result of applying ease math function to a number
   * @method ease
   * @param {Number} k
   * @returns {Number}
   */
  function ease(k) {
    return 0.5 * (1 - Math.cos(Math.PI * k));
  }
  var dom = {
    /**
     * scrollToElement
     * @param  {Vnode | VComponent} vnode
     * @param  {Object} options {offset:Number}
     *   ps: scroll-to has 'ease' and 'duration'(ms) as options.
     */
    scrollToElement: function scrollToElement(vnode, options) {
      var isArray = utils$3.isArray;
      var getParentScrollerElement = utils$3.getParentScrollerElement;
      if (isArray(vnode)) {
        vnode = vnode[0];
      }
      var isElement = vnode instanceof HTMLElement;
      var el = isElement ? vnode : vnode.$el || vnode.elm;
      var ct = getParentScrollerElement(vnode);
      var scroller = ct.__vue__;
      var isWindow = ct === document.body;
      var scrollDirection = isWindow ? 'vertical' : scroller && scroller.scrollDirection || 'vertical';
      if (ct && el) {
        var dSuffix = {
          horizontal: 'Left',
          vertical: 'Top'
        }[scrollDirection];
        var ctRect = ct.getBoundingClientRect();
        var elRect = el.getBoundingClientRect();
        /**
          * if it's a waterfall, and you want to scroll to a header, then just
          * scroll to the top.
        */
        if (!isElement && scroller && scroller.weexType === 'waterfall' && scroller._headers && scroller._headers.indexOf(vnode.$vnode || vnode) > -1) {
          // it's in waterfall. just scroll to the top.
          elRect = ct.firstElementChild.getBoundingClientRect();
        }
        var dir = dSuffix.toLowerCase();
        var offset = (isWindow ? 0 : ct["scroll" + dSuffix]) + elRect[dir] - ctRect[dir];
        if (options) {
          offset += options.offset && options.offset * weex.config.env.scale || 0;
        } else {}
        if (options && options.animated === false) {
          return scrollElement.call(ct, dSuffix, offset);
        }
        step$1({
          scrollable: ct,
          startTime: now(),
          frame: null,
          startPosition: isWindow ? window.pageYOffset : ct["scroll" + dSuffix],
          position: offset,
          method: scrollElement,
          dSuffix: dSuffix
        });
      }
    },
    /**
     * getComponentRect
     * @param {String} vnode
     * @param {Function} callback
     */
    getComponentRect: function getComponentRect(vnode, callback) {
      var isArray = utils$3.isArray;
      if (isArray(vnode)) {
        vnode = vnode[0];
      }
      var scale = window.weex.config.env.scale;
      var info = {
        result: false
      };
      var rectKeys = ['width', 'height', 'top', 'bottom', 'left', 'right'];

      function recalc(rect) {
        var res = {};
        rectKeys.forEach(function (key) {
          if (rect[key]) {
            res[key] = rect[key] / scale;
          }
        });
        return res;
      }
      if (vnode && vnode === 'viewport') {
        info.result = true;
        info.size = recalc({
          width: document.documentElement.clientWidth,
          height: document.documentElement.clientHeight,
          top: 0,
          left: 0,
          right: document.documentElement.clientWidth,
          bottom: document.documentElement.clientHeight
        });
      } else if (vnode) {
        var el = vnode instanceof HTMLElement ? vnode : vnode.$el;
        if (el.getBoundingClientRect) {
          info.result = true;
          info.size = recalc(el.getBoundingClientRect());
        } else {
          info.result = false;
        }
      }
      var message = info.result ? info : {
        result: false,
        errMsg: 'Illegal parameter'
      };
      callback && callback(message);
      return message;
    },
    /**
     * for adding fontFace
     * @param {string} key fontFace
     * @param {object} styles rules
     */
    addRule: function addRule(key, styles) {
      var camelToKebab = utils$3.camelToKebab;
      var appendCss = utils$3.appendCss;
      key = camelToKebab(key);
      var stylesText = '';
      for (var k in styles) {
        if (styles.hasOwnProperty(k)) {
          stylesText += camelToKebab(k) + ':' + styles[k] + ';';
        }
      }
      var styleText = "@" + key + "{" + stylesText + "}";
      appendCss(styleText, 'dom-added-rules');
    }
  };
  var dom$1 = {
    init: function init(weex) {
      var extendKeys = weex.utils.extendKeys;
      extendKeys(utils$3, weex.utils, ['camelToKebab', 'appendCss', 'isArray', 'getParentScrollerElement']);
      weex.registerModule('dom', dom);
    }
  };

  /*
   * Licensed to the Apache Software Foundation (ASF) under one
   * or more contributor license agreements.  See the NOTICE file
   * distributed with this work for additional information
   * regarding copyright ownership.  The ASF licenses this file
   * to you under the Apache License, Version 2.0 (the
   * "License"); you may not use this file except in compliance
   * with the License.  You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing,
   * software distributed under the License is distributed on an
   * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
   * KIND, either express or implied.  See the License for the
   * specific language governing permissions and limitations
   * under the License.
   */
  /**
   * globalEvent API:
   * @doc http://weex.apache.org/cn/references/modules/globalevent.html
   */
  // track varies kinds of events and listeners.
  var handlerTraker = {};

  var globalEvent = {
    /**
     * addEventListener
     * NOTE: one callback can only be bound to the same event once. Bind a callback twice doesn't
     *  mean it will be called twice when the event fired once.
     * @param {string} evt - the event name to add a listener on.
     */
    addEventListener: function addEventListener(evt, callback) {
      if (!callback) {
        return;
      }
      var handlers = handlerTraker[evt];
      if (!handlers) {
        handlers = handlerTraker[evt] = [];
      }
      var len = handlers.length;
      for (var i = 0; i < len; i++) {
        if (handlers[i] === callback) {
          // this callback is already bound. no need to bind it again.
          return;
        }
      }
      handlers.push(callback);
      document.addEventListener(evt, callback);
    },

    /**
     * removeEventListener
     * NOTE: remove all the event handlers for the specified event type.
     * @param {string} evt - the event name to remove a listener from.
     */
    removeEventListener: function removeEventListener(evt) {
      var handlers = handlerTraker[evt];
      if (!handlers) {
        // evt handlers has been already removed.
        return;
      }
      handlers.forEach(function (cb) {
        return document.removeEventListener(evt, cb);
      });
      delete handlerTraker[evt];
    }
  };

  var globalEvent$1 = {
    init: function init(weex) {
      weex.registerModule('globalEvent', globalEvent);
    }
  };

  /*
   * Licensed to the Apache Software Foundation (ASF) under one
   * or more contributor license agreements.  See the NOTICE file
   * distributed with this work for additional information
   * regarding copyright ownership.  The ASF licenses this file
   * to you under the Apache License, Version 2.0 (the
   * "License"); you may not use this file except in compliance
   * with the License.  You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing,
   * software distributed under the License is distributed on an
   * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
   * KIND, either express or implied.  See the License for the
   * specific language governing permissions and limitations
   * under the License.
   */
  var queue$1 = [];
  var isProcessing = false;
  var toastWin;
  var TOAST_WIN_CLASS_NAME = 'weex-toast';
  var TOAST_TRANSITION_DURATION = 0.4;

  var DEFAULT_DURATION = 0.8;

  function showToastWindow(msg, callback) {
    if (!toastWin) {
      toastWin = document.createElement('div');
      toastWin.classList.add(TOAST_WIN_CLASS_NAME);
      toastWin.classList.add('hide');
      document.body.appendChild(toastWin);
    }
    toastWin.textContent = msg;
    setTimeout(function () {
      toastWin.classList.remove('hide');
      callback && callback();
    }, 16);
  }

  function hideToastWindow(callback) {
    if (!toastWin) {
      return;
    }
    toastWin.classList.add('hide');
    setTimeout(function () {
      callback && callback();
    }, TOAST_TRANSITION_DURATION * 1000);
  }

  var _toast = {
    push: function push(msg, duration) {
      queue$1.push({
        msg: msg,
        duration: duration || DEFAULT_DURATION
      });
      this.show();
    },

    show: function show() {
      var that = this;

      // All messages had been toasted already, so remove the toast window,
      if (!queue$1.length) {
        toastWin && toastWin.parentNode.removeChild(toastWin);
        toastWin = null;
        return;
      }

      // the previous toast is not ended yet.
      if (isProcessing) {
        return;
      }
      isProcessing = true;

      var toastInfo = queue$1.shift();
      showToastWindow(toastInfo.msg, function () {
        setTimeout(function () {
          hideToastWindow(function () {
            isProcessing = false;
            that.show();
          });
        }, toastInfo.duration * 1000);
      });
    }
  };

  /*
   * Licensed to the Apache Software Foundation (ASF) under one
   * or more contributor license agreements.  See the NOTICE file
   * distributed with this work for additional information
   * regarding copyright ownership.  The ASF licenses this file
   * to you under the Apache License, Version 2.0 (the
   * "License"); you may not use this file except in compliance
   * with the License.  You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing,
   * software distributed under the License is distributed on an
   * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
   * KIND, either express or implied.  See the License for the
   * specific language governing permissions and limitations
   * under the License.
   */

  // there will be only one instance of modal.
  var MODAL_WRAP_CLASS = 'weex-modal-wrap';
  var MODAL_NODE_CLASS = 'weex-modal-node';

  function Modal() {
    this.wrap = document.querySelector(MODAL_WRAP_CLASS);
    this.node = document.querySelector(MODAL_NODE_CLASS);
    if (!this.wrap) {
      this.createWrap();
    }
    if (!this.node) {
      this.createNode();
    }
    this.clearNode();
    this.createNodeContent();
    this.bindEvents();
  }

  Modal.prototype = {

    show: function show() {
      this.wrap.style.display = 'block';
      this.node.classList.remove('hide');
    },

    destroy: function destroy() {
      document.body.removeChild(this.wrap);
      document.body.removeChild(this.node);
      this.wrap = null;
      this.node = null;
    },

    createWrap: function createWrap() {
      this.wrap = document.createElement('div');
      this.wrap.className = MODAL_WRAP_CLASS;
      document.body.appendChild(this.wrap);
    },

    createNode: function createNode() {
      this.node = document.createElement('div');
      this.node.classList.add(MODAL_NODE_CLASS, 'hide');
      document.body.appendChild(this.node);
    },

    clearNode: function clearNode() {
      this.node.innerHTML = '';
    },

    createNodeContent: function createNodeContent() {

      // do nothing.
      // child classes can override this method.
    },

    bindEvents: function bindEvents() {
      this.wrap.addEventListener('click', function (e) {
        e.preventDefault();
        e.stopPropagation();
      });
    }
  };

  /*
   * Licensed to the Apache Software Foundation (ASF) under one
   * or more contributor license agreements.  See the NOTICE file
   * distributed with this work for additional information
   * regarding copyright ownership.  The ASF licenses this file
   * to you under the Apache License, Version 2.0 (the
   * "License"); you may not use this file except in compliance
   * with the License.  You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing,
   * software distributed under the License is distributed on an
   * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
   * KIND, either express or implied.  See the License for the
   * specific language governing permissions and limitations
   * under the License.
   */
  var CONTENT_CLASS = 'content';
  var MSG_CLASS = 'content-msg';
  var BUTTON_GROUP_CLASS = 'btn-group';
  var BUTTON_CLASS = 'btn';

  function Alert(config) {
    this.msg = config.message || '';
    this.callback = config.callback;
    this.okTitle = config.okTitle || 'OK';
    Modal.call(this);
    this.node.classList.add('weex-alert');
  }

  Alert.prototype = Object.create(Modal.prototype);

  Alert.prototype.createNodeContent = function () {
    var content = document.createElement('div');
    content.classList.add(CONTENT_CLASS);
    this.node.appendChild(content);

    var msg = document.createElement('div');
    msg.classList.add(MSG_CLASS);
    msg.appendChild(document.createTextNode(this.msg));
    content.appendChild(msg);

    var buttonGroup = document.createElement('div');
    buttonGroup.classList.add(BUTTON_GROUP_CLASS);
    this.node.appendChild(buttonGroup);
    var button = document.createElement('div');
    button.classList.add(BUTTON_CLASS, 'alert-ok');
    button.appendChild(document.createTextNode(this.okTitle));
    buttonGroup.appendChild(button);
  };

  Alert.prototype.bindEvents = function () {
    Modal.prototype.bindEvents.call(this);
    var button = this.node.querySelector('.' + BUTTON_CLASS);
    button.addEventListener('click', function () {
      this.destroy();
      this.callback && this.callback();
    }.bind(this));
  };

  /*
   * Licensed to the Apache Software Foundation (ASF) under one
   * or more contributor license agreements.  See the NOTICE file
   * distributed with this work for additional information
   * regarding copyright ownership.  The ASF licenses this file
   * to you under the Apache License, Version 2.0 (the
   * "License"); you may not use this file except in compliance
   * with the License.  You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing,
   * software distributed under the License is distributed on an
   * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
   * KIND, either express or implied.  See the License for the
   * specific language governing permissions and limitations
   * under the License.
   */
  var CONTENT_CLASS$1 = 'content';
  var MSG_CLASS$1 = 'content-msg';
  var BUTTON_GROUP_CLASS$1 = 'btn-group';
  var BUTTON_CLASS$1 = 'btn';

  function Confirm(config) {
    this.msg = config.message || '';
    this.callback = config.callback;
    this.okTitle = config.okTitle || 'OK';
    this.cancelTitle = config.cancelTitle || 'Cancel';
    Modal.call(this);
    this.node.classList.add('weex-confirm');
  }

  Confirm.prototype = Object.create(Modal.prototype);

  Confirm.prototype.createNodeContent = function () {
    var content = document.createElement('div');
    content.classList.add(CONTENT_CLASS$1);
    this.node.appendChild(content);

    var msg = document.createElement('div');
    msg.classList.add(MSG_CLASS$1);
    msg.appendChild(document.createTextNode(this.msg));
    content.appendChild(msg);

    var buttonGroup = document.createElement('div');
    buttonGroup.classList.add(BUTTON_GROUP_CLASS$1);
    this.node.appendChild(buttonGroup);
    var btnOk = document.createElement('div');
    btnOk.appendChild(document.createTextNode(this.okTitle));
    btnOk.classList.add('btn-ok', BUTTON_CLASS$1);
    var btnCancel = document.createElement('div');
    btnCancel.appendChild(document.createTextNode(this.cancelTitle));
    btnCancel.classList.add('btn-cancel', BUTTON_CLASS$1);
    buttonGroup.appendChild(btnOk);
    buttonGroup.appendChild(btnCancel);
    this.node.appendChild(buttonGroup);
  };

  Confirm.prototype.bindEvents = function () {
    Modal.prototype.bindEvents.call(this);
    var btnOk = this.node.querySelector('.' + BUTTON_CLASS$1 + '.btn-ok');
    var btnCancel = this.node.querySelector('.' + BUTTON_CLASS$1 + '.btn-cancel');
    btnOk.addEventListener('click', function () {
      this.destroy();
      this.callback && this.callback(this.okTitle);
    }.bind(this));
    btnCancel.addEventListener('click', function () {
      this.destroy();
      this.callback && this.callback(this.cancelTitle);
    }.bind(this));
  };

  /*
   * Licensed to the Apache Software Foundation (ASF) under one
   * or more contributor license agreements.  See the NOTICE file
   * distributed with this work for additional information
   * regarding copyright ownership.  The ASF licenses this file
   * to you under the Apache License, Version 2.0 (the
   * "License"); you may not use this file except in compliance
   * with the License.  You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing,
   * software distributed under the License is distributed on an
   * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
   * KIND, either express or implied.  See the License for the
   * specific language governing permissions and limitations
   * under the License.
   */
  var CONTENT_CLASS$2 = 'content';
  var MSG_CLASS$2 = 'content-msg';
  var BUTTON_GROUP_CLASS$2 = 'btn-group';
  var BUTTON_CLASS$2 = 'btn';
  var INPUT_WRAP_CLASS = 'input-wrap';
  var INPUT_CLASS = 'input';

  function Prompt(config) {
    this.msg = config.message || '';
    this.defaultMsg = config.default || '';
    this.callback = config.callback;
    this.okTitle = config.okTitle || 'OK';
    this.cancelTitle = config.cancelTitle || 'Cancel';
    Modal.call(this);
    this.node.classList.add('weex-prompt');
  }

  Prompt.prototype = Object.create(Modal.prototype);

  Prompt.prototype.createNodeContent = function () {
    var content = document.createElement('div');
    content.classList.add(CONTENT_CLASS$2);
    this.node.appendChild(content);

    var msg = document.createElement('div');
    msg.classList.add(MSG_CLASS$2);
    msg.appendChild(document.createTextNode(this.msg));
    content.appendChild(msg);

    var inputWrap = document.createElement('div');
    inputWrap.classList.add(INPUT_WRAP_CLASS);
    content.appendChild(inputWrap);
    var input = document.createElement('input');
    input.classList.add(INPUT_CLASS);
    input.type = 'text';
    input.autofocus = true;
    input.placeholder = this.defaultMsg;
    inputWrap.appendChild(input);

    var buttonGroup = document.createElement('div');
    buttonGroup.classList.add(BUTTON_GROUP_CLASS$2);
    var btnOk = document.createElement('div');
    btnOk.appendChild(document.createTextNode(this.okTitle));
    btnOk.classList.add('btn-ok', BUTTON_CLASS$2);
    var btnCancel = document.createElement('div');
    btnCancel.appendChild(document.createTextNode(this.cancelTitle));
    btnCancel.classList.add('btn-cancel', BUTTON_CLASS$2);
    buttonGroup.appendChild(btnOk);
    buttonGroup.appendChild(btnCancel);
    this.node.appendChild(buttonGroup);
  };

  Prompt.prototype.bindEvents = function () {
    Modal.prototype.bindEvents.call(this);
    var btnOk = this.node.querySelector('.' + BUTTON_CLASS$2 + '.btn-ok');
    var btnCancel = this.node.querySelector('.' + BUTTON_CLASS$2 + '.btn-cancel');
    var that = this;
    btnOk.addEventListener('click', function () {
      var val = document.querySelector('input').value;
      this.destroy();
      this.callback && this.callback({
        result: that.okTitle,
        data: val
      });
    }.bind(this));
    btnCancel.addEventListener('click', function () {
      var val = document.querySelector('input').value;
      this.destroy();
      this.callback && this.callback({
        result: that.cancelTitle,
        data: val
      });
    }.bind(this));
  };

  /*
   * Licensed to the Apache Software Foundation (ASF) under one
   * or more contributor license agreements.  See the NOTICE file
   * distributed with this work for additional information
   * regarding copyright ownership.  The ASF licenses this file
   * to you under the Apache License, Version 2.0 (the
   * "License"); you may not use this file except in compliance
   * with the License.  You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing,
   * software distributed under the License is distributed on an
   * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
   * KIND, either express or implied.  See the License for the
   * specific language governing permissions and limitations
   * under the License.
   */
  var _css$1 = "\n.weex-toast {\n  font-size: 0.426667rem;\n  line-height: 0.426667rem;\n  position: fixed;\n  z-index: 1999999999;\n  box-sizing: border-box;\n  max-width: 80%;\n  bottom: 50%;\n  left: 50%;\n  padding: 0.213333rem;\n  background-color: #000;\n  color: #fff;\n  text-align: center;\n  opacity: 0.7;\n  -webkit-transition: all 0.4s ease-in-out;\n  -moz-transition: all 0.4s ease-in-out;\n  -ms-transition: all 0.4s ease-in-out;\n  transition: all 0.4s ease-in-out;\n  border-radius: 0.066667rem;\n  -webkit-transform: translateX(-50%);\n  -moz-transform: translateX(-50%);\n  -ms-transform: translateX(-50%);\n  transform: translateX(-50%);\n}\n\n.weex-toast.hide {\n  opacity: 0;\n}\n\n.weex-alert .weex-alert-ok {\n  width: 100%;\n}\n\n.weex-confirm .btn-group .btn {\n  float: left;\n  width: 50%;\n}\n\n.weex-confirm .btn-group .btn.btn-ok {\n  border-right: 0.013333rem solid #ddd;\n}\n\n.weex-modal-wrap {\n  display: none;\n  position: fixed;\n  z-index: 999999999;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background-color: #000;\n  opacity: 0.5;\n}\n\n.weex-modal-node {\n  position: fixed;\n  z-index: 9999999999;\n  top: 50%;\n  left: 50%;\n  width: 6.666667rem;\n  min-height: 2.666667rem;\n  border-radius: 0.066667rem;\n  -webkit-transform: translate(-50%, -50%);\n  -moz-transform: translate(-50%, -50%);\n  -ms-transform: translate(-50%, -50%);\n  transform: translate(-50%, -50%);\n  background-color: #fff;\n}\n\n.weex-modal-node.hide {\n  display: none;\n}\n\n.weex-modal-node .content {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -moz-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-flex-direction: column;\n  -moz-box-orient: vertical;\n  -moz-box-direction: normal;\n  -ms-flex-direction: column;\n      flex-direction: column;\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n  -ms-flex-align: center;\n  -moz-box-align: center;\n  -ms-flex-align: center;\n  align-items: center;\n  -webkit-box-pack: center;\n  -webkit-justify-content: center;\n  -moz-box-pack: center;\n  -ms-flex-pack: center;\n  justify-content: center;\n  width: 100%;\n  min-height: 1.866667rem;\n  box-sizing: border-box;\n  font-size: 0.426667rem;\n  line-height: 0.426667rem;\n  padding: 0.213333rem;\n  border-bottom: 0.013333rem solid #ddd;\n}\n\n.weex-modal-node .btn-group {\n  width: 100%;\n  height: 0.8rem;\n  font-size: 0.373333rem;\n  text-align: center;\n  margin: 0;\n  padding: 0;\n  border: none;\n}\n\n.weex-modal-node .btn-group .btn {\n  text-align: center;\n}\n\n.weex-modal-node .btn-group .btn {\n  box-sizing: border-box;\n  height: 0.8rem;\n  line-height: 0.8rem;\n  margin: 0;\n  padding: 0;\n  border: none;\n  background: none;\n  text-align: center;\n}\n\n.weex-prompt .input-wrap {\n  box-sizing: border-box;\n  width: 100%;\n  margin-top: 0.133333rem;\n  height: 0.96rem;\n}\n\n.weex-prompt .input-wrap .input {\n  box-sizing: border-box;\n  width: 100%;\n  height: 0.56rem;\n  line-height: 0.56rem;\n  font-size: 0.426667rem;\n  border: 0.013333rem solid #999;\n}\n\n.weex-prompt .btn-group .btn {\n  float: left;\n  width: 50%;\n}\n\n.weex-prompt .btn-group .btn.btn-ok {\n  border-right: 0.013333rem solid #ddd;\n}\n";

  /*
   * Licensed to the Apache Software Foundation (ASF) under one
   * or more contributor license agreements.  See the NOTICE file
   * distributed with this work for additional information
   * regarding copyright ownership.  The ASF licenses this file
   * to you under the Apache License, Version 2.0 (the
   * "License"); you may not use this file except in compliance
   * with the License.  You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing,
   * software distributed under the License is distributed on an
   * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
   * KIND, either express or implied.  See the License for the
   * specific language governing permissions and limitations
   * under the License.
   */
  // TODO: rewrite the modal styles
  var modal = {

    // duration: default is 0.8 seconds.
    toast: function toast(config) {
      _toast.push(config.message, config.duration);
    },

    // config:
    //  - message: string
    //  - okTitle: title of ok button
    //  - callback
    alert: function alert(config, callback) {
      config.callback = function () {
        callback && callback();
      };
      new Alert(config).show();
    },

    // config:
    //  - message: string
    //  - okTitle: title of ok button
    //  - cancelTitle: title of cancel button
    //  - callback
    confirm: function confirm(config, callback) {
      config.callback = function (val) {
        callback && callback(val);
      };
      new Confirm(config).show();
    },

    // config:
    //  - message: string
    //  - okTitle: title of ok button
    //  - cancelTitle: title of cancel button
    //  - callback
    prompt: function prompt(config, callback) {
      config.callback = function (val) {
        callback && callback(val);
      };
      new Prompt(config).show();
    }
  };

  var modal$1 = {
    init: function init(Weex) {
      Weex.utils.appendCss(_css$1, 'weex-mud-modal');
      Weex.registerModule('modal', modal);
    }
  };

  /*
   * Licensed to the Apache Software Foundation (ASF) under one
   * or more contributor license agreements.  See the NOTICE file
   * distributed with this work for additional information
   * regarding copyright ownership.  The ASF licenses this file
   * to you under the Apache License, Version 2.0 (the
   * "License"); you may not use this file except in compliance
   * with the License.  You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing,
   * software distributed under the License is distributed on an
   * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
   * KIND, either express or implied.  See the License for the
   * specific language governing permissions and limitations
   * under the License.
   */

  /**
   * Navigator module
   */
  var navigatorModule = {
    push: function push(config, callback) {
      window.location.href = config.url;
      callback && callback();
    },

    pop: function pop(config, callback) {
      window.history.back();
      callback && callback();
    }
  };

  var navigatorModule$1 = {
    init: function init(weex) {
      weex.registerModule('navigator', navigatorModule);
    }
  };

  /*
   * Licensed to the Apache Software Foundation (ASF) under one
   * or more contributor license agreements.  See the NOTICE file
   * distributed with this work for additional information
   * regarding copyright ownership.  The ASF licenses this file
   * to you under the Apache License, Version 2.0 (the
   * "License"); you may not use this file except in compliance
   * with the License.  You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing,
   * software distributed under the License is distributed on an
   * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
   * KIND, either express or implied.  See the License for the
   * specific language governing permissions and limitations
   * under the License.
   */

  /**
   * Webview module
   */
  var isArray$1;

  var webview = {
    goBack: function goBack(vnode) {
      if (isArray$1(vnode)) {
        vnode = vnode[0];
      }
      if (vnode && typeof vnode.goBack === 'function') {
        vnode.goBack();
      }
    },
    goForward: function goForward(vnode) {
      if (isArray$1(vnode)) {
        vnode = vnode[0];
      }
      if (vnode && typeof vnode.goForward === 'function') {
        vnode.goForward();
      }
    },
    reload: function reload(vnode) {
      if (isArray$1(vnode)) {
        vnode = vnode[0];
      }
      if (vnode && typeof vnode.reload === 'function') {
        vnode.reload();
      }
    }
  };

  var webview$1 = {
    init: function init(weex) {
      isArray$1 = weex.utils.isArray;
      weex.registerModule('webview', webview);
    }
  };

  /*
   * Licensed to the Apache Software Foundation (ASF) under one
   * or more contributor license agreements.  See the NOTICE file
   * distributed with this work for additional information
   * regarding copyright ownership.  The ASF licenses this file
   * to you under the Apache License, Version 2.0 (the
   * "License"); you may not use this file except in compliance
   * with the License.  You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing,
   * software distributed under the License is distributed on an
   * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
   * KIND, either express or implied.  See the License for the
   * specific language governing permissions and limitations
   * under the License.
   */
  /**
   * websocket module
   */
  /*global WebSocket*/
  var websocket$1 = function () {
    var registerListeners = ['onopen', 'onmessage', 'onerror', 'onclose'];
    var ws = {
      INSTANCE: null,
      WebSocket: function (_WebSocket) {
        function WebSocket(_x, _x2) {
          return _WebSocket.apply(this, arguments);
        }

        WebSocket.toString = function () {
          return _WebSocket.toString();
        };

        return WebSocket;
      }(function (url, protocol) {
        if (!url) {
          ws.INSTANCE = null;
          return;
        }
        if (!protocol) {
          ws.INSTANCE = new WebSocket(url);
        } else {
          ws.INSTANCE = new WebSocket(url, protocol);
        }
        return ws.INSTANCE;
      }),
      send: function send(messages) {
        ws.INSTANCE && ws.INSTANCE.send(messages);
      },
      close: function close() {
        ws.INSTANCE && ws.INSTANCE.close();
      }
    };
    var loop = function loop(i) {
      if (registerListeners.hasOwnProperty(i)) {
        Object.defineProperty(ws, registerListeners[i], {
          get: function get() {
            return ws.INSTANCE && ws.INSTANCE[registerListeners[i]];
          },
          set: function set(fn) {
            if (ws.INSTANCE) {
              ws.INSTANCE[registerListeners[i]] = fn;
            }
          }
        });
      }
    };

    for (var i in registerListeners) {
      loop(i);
    }return ws;
  }();

  /*
   * Licensed to the Apache Software Foundation (ASF) under one
   * or more contributor license agreements.  See the NOTICE file
   * distributed with this work for additional information
   * regarding copyright ownership.  The ASF licenses this file
   * to you under the Apache License, Version 2.0 (the
   * "License"); you may not use this file except in compliance
   * with the License.  You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing,
   * software distributed under the License is distributed on an
   * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
   * KIND, either express or implied.  See the License for the
   * specific language governing permissions and limitations
   * under the License.
   */
  // TODO: rewrite the module meta
  var websocket = {
    init: function init(Weex) {
      Weex.registerModule('webSocket', websocket$1, { registerType: 'assignment' });
    }
  };

  /*
   * Licensed to the Apache Software Foundation (ASF) under one
   * or more contributor license agreements.  See the NOTICE file
   * distributed with this work for additional information
   * regarding copyright ownership.  The ASF licenses this file
   * to you under the Apache License, Version 2.0 (the
   * "License"); you may not use this file except in compliance
   * with the License.  You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing,
   * software distributed under the License is distributed on an
   * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
   * KIND, either express or implied.  See the License for the
   * specific language governing permissions and limitations
   * under the License.
   */

  var meta$5 = {
    /**
     * setViewport.
     * Changing viewport design width at runtime.
     */
    setViewport: function setViewport(options) {
      if (!options) {
        console.error("[vue-render] set viewport width invalid options: " + options);
      }
      var newWidth = parseInt(options.width);
      if (!isNaN(newWidth) && newWidth > 0) {
        resetViewport(options.width);
      } else {
        console.error("[vue-render] set viewport width invalid options.width: " + options.width);
      }
    }
  };

  var meta$6 = {
    init: function init(weex) {
      weex.registerModule('meta', meta$5);
    }
  };

  /*
   * Licensed to the Apache Software Foundation (ASF) under one
   * or more contributor license agreements.  See the NOTICE file
   * distributed with this work for additional information
   * regarding copyright ownership.  The ASF licenses this file
   * to you under the Apache License, Version 2.0 (the
   * "License"); you may not use this file except in compliance
   * with the License.  You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing,
   * software distributed under the License is distributed on an
   * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
   * KIND, either express or implied.  See the License for the
   * specific language governing permissions and limitations
   * under the License.
   */

  // modules from render/browesr (legacy modules)

  // custom modules
  var modules$1 = [geolocation$1, storage$1, stream$1, clipboard$1, eventModule, modal$1, websocket, animation$1, dom$1, globalEvent$1, navigatorModule$1, webview$1, meta$6];

  /*
   * Licensed to the Apache Software Foundation (ASF) under one
   * or more contributor license agreements.  See the NOTICE file
   * distributed with this work for additional information
   * regarding copyright ownership.  The ASF licenses this file
   * to you under the Apache License, Version 2.0 (the
   * "License"); you may not use this file except in compliance
   * with the License.  You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing,
   * software distributed under the License is distributed on an
   * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
   * KIND, either express or implied.  See the License for the
   * specific language governing permissions and limitations
   * under the License.
   */
  var valMap = {
    contain: 'contain',
    cover: 'cover',
    stretch: '100% 100%'
  };
  var vals = Object.keys(valMap);
  var defaultVal = 'stretch';

  var resize = {
    init: function init(weex) {
      weex.__vue__.directive('weex-resize', function (el, binding) {
        if (el.tagName.toLowerCase() !== 'figure') {
          return;
        }
        var value = binding.value;
        var oldValue = binding.oldvalue;
        if (value === oldValue) {
          return;
        }
        if (vals.indexOf(value) <= -1) {
          value = defaultVal;
        }
        el.style.backgroundSize = valMap[value];
      });
    }
  };

  /*
   * Licensed to the Apache Software Foundation (ASF) under one
   * or more contributor license agreements.  See the NOTICE file
   * distributed with this work for additional information
   * regarding copyright ownership.  The ASF licenses this file
   * to you under the Apache License, Version 2.0 (the
   * "License"); you may not use this file except in compliance
   * with the License.  You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing,
   * software distributed under the License is distributed on an
   * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
   * KIND, either express or implied.  See the License for the
   * specific language governing permissions and limitations
   * under the License.
   */
  var directives = {
    resize: resize
  };

  var preInit = weex.init;

  weex.init = function () {
    preInit.apply(weex, arguments);
    var plugins = components.concat(modules$1);

    plugins.forEach(function (plugin) {
      weex.install(plugin);
    });

    for (var k in directives) {
      weex.install(directives[k]);
    }
  };

  if (global.Vue) {
    weex.init(global.Vue);
  }

  return weex;
});
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),

/***/ 9:
/***/ (function(module, exports) {

/**
 * Translates the list format produced by css-loader into something
 * easier to manipulate.
 */
module.exports = function listToStyles (parentId, list) {
  var styles = []
  var newStyles = {}
  for (var i = 0; i < list.length; i++) {
    var item = list[i]
    var id = item[0]
    var css = item[1]
    var media = item[2]
    var sourceMap = item[3]
    var part = {
      id: parentId + ':' + i,
      css: css,
      media: media,
      sourceMap: sourceMap
    }
    if (!newStyles[id]) {
      styles.push(newStyles[id] = { id: id, parts: [part] })
    } else {
      newStyles[id].parts.push(part)
    }
  }
  return styles
}


/***/ })

/******/ });