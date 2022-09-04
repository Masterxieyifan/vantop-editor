(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("vue"));
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["vantop-editor"] = factory(require("vue"));
	else
		root["vantop-editor"] = factory(root["Vue"]);
})((typeof self !== 'undefined' ? self : this), function(__WEBPACK_EXTERNAL_MODULE__8bbf__) {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "fb15");
/******/ })
/************************************************************************/
/******/ ({

/***/ "67ab":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "8bbf":
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__8bbf__;

/***/ }),

/***/ "b9dd":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_c412e63a_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("67ab");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_c412e63a_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_c412e63a_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "d3c2":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_1_id_c412e63a_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("db73");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_1_id_c412e63a_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_1_id_c412e63a_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "db73":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "f6fd":
/***/ (function(module, exports) {

// document.currentScript polyfill by Adam Miller

// MIT license

(function(document){
  var currentScript = "currentScript",
      scripts = document.getElementsByTagName('script'); // Live NodeList collection

  // If browser needs currentScript polyfill, add get currentScript() to the document object
  if (!(currentScript in document)) {
    Object.defineProperty(document, currentScript, {
      get: function(){

        // IE 6-10 supports script readyState
        // IE 10+ support stack trace
        try { throw new Error(); }
        catch (err) {

          // Find the second match for the "at" string to get file src url from stack.
          // Specifically works with the format of stack traces in IE.
          var i, res = ((/.*at [^\(]*\((.*):.+:.+\)$/ig).exec(err.stack) || [false])[1];

          // For all scripts on the page, if src matches or if ready state is interactive, return the script tag
          for(i in scripts){
            if(scripts[i].src == res || scripts[i].readyState == "interactive"){
              return scripts[i];
            }
          }

          // If no match, return null
          return null;
        }
      }
    });
  }
})(document);


/***/ }),

/***/ "fb15":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/setPublicPath.js
// This file is imported into lib/wc client bundles.

if (typeof window !== 'undefined') {
  if (true) {
    __webpack_require__("f6fd")
  }

  var i
  if ((i = window.document.currentScript) && (i = i.src.match(/(.+\/)[^/]+\.js(\?.*)?$/))) {
    __webpack_require__.p = i[1] // eslint-disable-line
  }
}

// Indicate to webpack that this file can be concatenated
/* harmony default export */ var setPublicPath = (null);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"13bf2493-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--5!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/VantopEditor/src/index.vue?vue&type=template&id=c412e63a&scoped=true&
var render = function render(){var _vm=this,_c=_vm._self._c;return _c('div',{staticClass:"vantop-editor"},[(_vm.visible)?_c('vue-tinymce',_vm._g(_vm._b({attrs:{"setting":_vm.editorSetting},on:{"change":_vm.change},model:{value:(_vm.content),callback:function ($$v) {_vm.content=$$v},expression:"content"}},'vue-tinymce',_vm.$attrs,false),_vm.$listeners)):_vm._e()],1)
}
var staticRenderFns = []


// CONCATENATED MODULE: ./packages/VantopEditor/src/index.vue?vue&type=template&id=c412e63a&scoped=true&

// EXTERNAL MODULE: external {"commonjs":"vue","commonjs2":"vue","root":"Vue"}
var external_commonjs_vue_commonjs2_vue_root_Vue_ = __webpack_require__("8bbf");
var external_commonjs_vue_commonjs2_vue_root_Vue_default = /*#__PURE__*/__webpack_require__.n(external_commonjs_vue_commonjs2_vue_root_Vue_);

// CONCATENATED MODULE: ./packages/VantopEditor/utils/dynamicLoadScript.js
let callbacks = [];

function loadedTinymce() {
    // to fixed https://github.com/PanJiaChen/vue-element-admin/issues/2144
    // check is successfully downloaded script
    return window.tinymce;
}

const dynamicLoadScript = (src, callback) => {
    const existingScript = document.getElementById(src);
    const cb = callback || function() {};

    if (!existingScript) {
        const script = document.createElement('script');
        script.src = src; // src url for the third-party library being loaded.
        script.id = src;
        document.body.appendChild(script);
        callbacks.push(cb);
        const onEnd = 'onload' in script ? stdOnEnd : ieOnEnd;
        onEnd(script);
    }

    if (existingScript && cb) {
        if (loadedTinymce()) {
            cb(null, existingScript);
        } else {
            callbacks.push(cb);
        }
    }

    function stdOnEnd(script) {
        script.onload = function() {
            // this.onload = null here is necessary
            // because even IE9 works not like others
            this.onerror = this.onload = null;
            for (const cb of callbacks) {
                cb(null, script);
            }
            callbacks = null;
        };
        script.onerror = function() {
            this.onerror = this.onload = null;
            cb(new Error('Failed to load ' + src), script);
        };
    }

    function ieOnEnd(script) {
        script.onreadystatechange = function() {
            if (this.readyState !== 'complete' && this.readyState !== 'loaded') return;
            this.onreadystatechange = null;
            for (const cb of callbacks) {
                cb(null, script); // there is no way to catch loading errors in IE8
            }
            callbacks = null;
        };
    }
};

/* harmony default export */ var utils_dynamicLoadScript = (dynamicLoadScript);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/VantopEditor/components/VueTimyce/index.vue?vue&type=script&lang=js&

/* eslint-disable */

/**
 * 注：编辑器二次刷新处理
 * 编辑器二次刷新具体效果为输入光标重置到第一行第一个字前。
 * 这种效果根本无法正常录入，其原因是双向绑定数据导致编辑器数据更新所致。
 * 根据编辑器的不同状态做标记，当标记为`INPUT`录入时，数据将不会更新至编辑器，
 * 从而避免二次更新的情况，具体请看`content`部分和`editor event`部分的代码。
 * */

const INIT = 0;
const INPUT = 1;
const CHANGED = 2;

const VueTimycevue_type_script_lang_js_status = ['INIT', 'INPUT', 'CHANGED'];
const changedLog = (debug) => {
  if (!debug) return () => false;
  console.warn('`@packy-tang/vue-tinymce`进入debug模式');
  return (e, _status, val, oldVal) =>
    console.log(`来自：%s | 状态：%s \n %s \n %s`, e.type, VueTimycevue_type_script_lang_js_status[_status], val, oldVal);
};

/* harmony default export */ var VueTimycevue_type_script_lang_js_ = ({
  name: 'VueTinymce',
  model: {
    prop: 'content',
    event: 'change',
  },
  props: {
    content: {
      type: [String, Object],
      default: '',
    },
    setup: {
      type: Function,
      default: function() {},
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    setting: {
      type: Object,
      default: function() {
        return {};
      },
    },
    debug: Boolean,
  },
  render(createElement) {
    if (typeof tinymce === 'undefined') {
      return createElement('div', 'tinymce is undefined');
    }
    return createElement('div', {
      attrs: {
        id: this.id,
      },
    });
  },
  data() {
    return {
      id: 'vue-tinymce-' + Date.now() + Math.floor(Math.random() * 1000),
      editor: null,
      status: INIT,
      backup: '',
    };
  },
  watch: {
    content(val, oldVal) {
      this.changedLog({ type: 'propsChanged' }, this.status, val, '--');
      if (this.status === INPUT) return;
      if (!this.editor || !this.editor.initialized) return; // fix editor plugin is loading and set content will throw error.
      if (val === null) return this.resetContent('');
      this.setContent(val);
    },
    disabled(val) {
      this.editor.setMode(val ? 'readonly' : 'design');
    },
  },
  created() {
    this.changedLog = changedLog(this.debug);
    if (typeof tinymce === 'undefined') throw new Error('tinymce undefined');
  },
  beforeMount() {
    const setting = Object.assign({}, this.setting, {
      selector: '#' + this.id,
      setup: (editor) => {
        this.setup(editor);
        // console.log('setup');
        editor.on('init', () => {
          // console.log('init', this.content);
          this.setContent(this.content, editor);

          editor.on('keyup input', (e) => {
            //只在编辑器中打字才会触发
            this.status = INPUT; //编辑器录入文字时标记为`INPUT`状态
          });
          editor.on('SetContent', (e) => {
            //编辑器在插入图片和撤销/重做时触发，组件content更新数据也会导致触发
            this.status = INPUT; //编辑器在响应`setContent`方法后标记为`INPUT`状态
            this.changedLog(e, this.status, editor.getContent(), '--');
          });
          editor.on('Blur', (e) => {
            this.status = INIT;
            this.changedLog(e, this.status, editor.getContent(), '--');
          });
          editor.on('input keyup Change Undo Redo ExecCommand NodeChange', (e) => {
            this.onChanged(e, editor);
          });
        });
      },
    });

    this.editor = tinymce.createEditor(setting.selector, setting);
  },
  mounted() {
    this.editor.targetElm = this.$el;
    this.editor.render();
  },
  updated() {
    this.editor.render();
  },
  beforeDestroy: function() {
    this.editor.remove();
  },
  methods: {
    setContent(val, editor) {
      if (!editor) editor = this.editor;
      return editor.setContent(val);
    },
    resetContent(val, editor) {
      if (!editor) editor = this.editor;
      if (editor.resetContent) return editor.resetContent(val);
      editor.setContent(val);
      editor.setDirty(false);
      editor.undoManager.clear();
    },
    onChanged(e, editor) {
      if (!editor) editor = this.editor;
      const content = editor.getContent();
      this.changedLog(e, this.status, content, '--');
      this.$emit('change', content);
    },
  },
});

// CONCATENATED MODULE: ./packages/VantopEditor/components/VueTimyce/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_VueTimycevue_type_script_lang_js_ = (VueTimycevue_type_script_lang_js_); 
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent(
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier /* server only */,
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options =
    typeof scriptExports === 'function' ? scriptExports.options : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) {
    // server build
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
    hook = shadowMode
      ? function () {
          injectStyles.call(
            this,
            (options.functional ? this.parent : this).$root.$options.shadowRoot
          )
        }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functional component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection(h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing ? [].concat(existing, hook) : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}

// CONCATENATED MODULE: ./packages/VantopEditor/components/VueTimyce/index.vue
var VueTimyce_render, VueTimyce_staticRenderFns




/* normalize component */

var component = normalizeComponent(
  components_VueTimycevue_type_script_lang_js_,
  VueTimyce_render,
  VueTimyce_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var VueTimyce = (component.exports);
// CONCATENATED MODULE: ./packages/VantopEditor/components/VueTimyce/index.js


class VueTimyce_VuePlugin{
    constructor(){
        const { prefix } = { prefix: "" }
        this.prefix = prefix;
    }
    install(Vue, options={}){
        const prefix = options.prefix || this.prefix
        const components = {
            VueTinymce: VueTimyce
        }
        Object.keys(components).forEach(key => {
            const component = components[key];
            Vue.component(prefix+component.name, component);
        });
    }
}
/* harmony default export */ var components_VueTimyce = (new VueTimyce_VuePlugin());
// CONCATENATED MODULE: ./packages/VantopEditor/const/icons.js

/* harmony default export */ var icons = (`tinymce.IconManager.add('custom', {
    icons: {
        'align-center':
            '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"><g fill="none" fill-rule="evenodd"><path d="M0 0h16v16H0z"/><path fill="currentColor" d="M10.75 12.5a.75.75 0 1 1 0 1.5h-5.5a.75.75 0 1 1 0-1.5h5.5zm2.5-3.5a.75.75 0 1 1 0 1.5H2.75a.75.75 0 1 1 0-1.5h10.5zm-2.5-3.5a.75.75 0 1 1 0 1.5h-5.5a.75.75 0 0 1 0-1.5h5.5zm2.5-3.5a.75.75 0 1 1 0 1.5H2.75a.75.75 0 0 1 0-1.5h10.5z"/></g></svg>',

        'align-justify':
            '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"><g fill="none" fill-rule="evenodd"><path d="M0 0h16v16H0z"/><path fill="currentColor" d="M13.25 12.5a.75.75 0 1 1 0 1.5H2.75a.75.75 0 1 1 0-1.5h10.5zm0-3.5a.75.75 0 1 1 0 1.5H2.75a.75.75 0 1 1 0-1.5h10.5zm0-3.5a.75.75 0 1 1 0 1.5H2.75a.75.75 0 0 1 0-1.5h10.5zm0-3.5a.75.75 0 1 1 0 1.5H2.75a.75.75 0 0 1 0-1.5h10.5z"/></g></svg>',

        'align-left':
            '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"><g fill="none" fill-rule="evenodd"><path d="M0 0h16v16H0z"/><path fill="currentColor" d="M8.25 12.5a.75.75 0 1 1 0 1.5h-5.5a.75.75 0 1 1 0-1.5h5.5zm5-3.5a.75.75 0 1 1 0 1.5H2.75a.75.75 0 1 1 0-1.5h10.5zm-5-3.5a.75.75 0 0 1 0 1.5h-5.5a.75.75 0 0 1 0-1.5h5.5zm5-3.5a.75.75 0 1 1 0 1.5H2.75a.75.75 0 0 1 0-1.5h10.5z"/></g></svg>',

        'align-none':
            '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"><g fill="none" fill-rule="evenodd"><path d="M0 0h16v16H0z"/><path fill="currentColor" d="M13.25 12.5a.75.75 0 1 1 0 1.5H2.75a.75.75 0 1 1 0-1.5h10.5zm0-3.5a.75.75 0 1 1 0 1.5H2.75a.75.75 0 1 1 0-1.5h10.5zm0-3.5a.75.75 0 1 1 0 1.5H2.75a.75.75 0 0 1 0-1.5h10.5zm0-3.5a.75.75 0 1 1 0 1.5H2.75a.75.75 0 0 1 0-1.5h10.5z"/><path fill="currentColor" fill-rule="nonzero" stroke="#FFF" stroke-width=".6" d="M11.779.18l1.766 1.135L4.221 15.82l-1.766-1.135L11.779.18z"/></g></svg>',

        'align-right':
            '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"><g fill="none" fill-rule="evenodd"><path d="M0 0h16v16H0z"/><path fill="currentColor" d="M13.25 12.5a.75.75 0 1 1 0 1.5h-5.5a.75.75 0 1 1 0-1.5h5.5zm0-3.5a.75.75 0 1 1 0 1.5H2.75a.75.75 0 1 1 0-1.5h10.5zm0-3.5a.75.75 0 1 1 0 1.5h-5.5a.75.75 0 0 1 0-1.5h5.5zm0-3.5a.75.75 0 1 1 0 1.5H2.75a.75.75 0 0 1 0-1.5h10.5z"/></g></svg>',

        'bold':
            '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"><g fill="none" fill-rule="evenodd"><path d="M0 0h16v16H0z"/><path fill="currentColor" d="M4 3a1 1 0 0 1 1-1h4a3 3 0 0 1 2.196 5.044A3.75 3.75 0 0 1 9.25 14H5a1 1 0 0 1-1-1V3zm5.25 5H5.5v4.5h3.75a2.25 2.25 0 0 0 .154-4.495L9.25 8zM9 3.5H5.5v3H9a1.5 1.5 0 0 0 .144-2.993L9 3.5z"/></g></svg>',

        'chevron-down':
            '<svg xmlns="http://www.w3.org/2000/svg" width="8" height="5" viewBox="0 0 8 5"><path fill-rule="nonzero" d="M.47.47a.75.75 0 0 1 .976-.073L1.53.47 4 2.939 6.47.469a.75.75 0 0 1 .976-.072L7.53.47a.75.75 0 0 1 .073.976l-.073.084-3 3a.75.75 0 0 1-.976.073L3.47 4.53l-3-3a.75.75 0 0 1 0-1.06z"/></svg>',

        'copy':
            '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"><g fill="none" fill-rule="evenodd"><path d="M0 0h16v16H0z"/><path fill="currentColor" d="M11.6 1h-8C2.72 1 2 1.664 2 2.556v8.555h1.6V2.556h8V1zm.8 3.111c.88 0 1.6.66 1.6 1.556v7.777C14 14.34 13.28 15 12.4 15H6.8c-.88 0-1.6-.66-1.6-1.556V5.667c0-.896.72-1.556 1.6-1.556h5.6zm0 9.333V5.667H6.8v7.777h5.6z"/></g></svg>',

        'cut':
            '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"><g fill="none" fill-rule="evenodd"><path d="M0 0h16v16H0z"/><path fill="currentColor" d="M12.655 10.063c.499.508.777 1.093.835 1.756.057.662-.123 1.206-.54 1.631-.18.183-.392.32-.633.413a2.11 2.11 0 0 1-.755.137c-.328 0-.662-.073-1.001-.219a3.038 3.038 0 0 1-.94-.644 2.916 2.916 0 0 1-.7-1.118c-.14-.413-.18-.81-.123-1.194L8 10l-.798.825c.057.383.016.781-.123 1.194-.14.412-.373.785-.7 1.118-.287.284-.6.498-.94.644-.34.146-.673.219-1 .219a2.11 2.11 0 0 1-.756-.137 1.743 1.743 0 0 1-.632-.413c-.418-.425-.598-.969-.54-1.631.057-.663.335-1.248.834-1.757.279-.283.59-.497.934-.643A2.57 2.57 0 0 1 5.286 9.2h.356l.786-.8-3.132-3.2a1.912 1.912 0 0 1-.442-.725 2.652 2.652 0 0 1 0-1.75c.098-.283.246-.525.442-.725L8 6.8 12.704 2c.196.2.344.442.442.725a2.652 2.652 0 0 1 0 1.75 1.912 1.912 0 0 1-.442.725L9.572 8.4l.786.8h.356c.328 0 .663.073 1.007.219.344.146.655.36.934.643zm-6.608 1.712c.041-.1.074-.202.099-.306.024-.104.036-.207.036-.306a1.24 1.24 0 0 0-.049-.32.75.75 0 0 0-.196-.33.732.732 0 0 0-.326-.2 1.213 1.213 0 0 0-.325-.05c-.098 0-.197.012-.295.037a1.918 1.918 0 0 0-.909.525 1.883 1.883 0 0 0-.405.612c-.04.1-.074.2-.098.3-.025.1-.037.2-.037.3 0 .092.016.198.05.32a.75.75 0 0 0 .196.33c.098.1.206.167.325.2.119.034.227.05.325.05.09 0 .187-.012.29-.037a1.72 1.72 0 0 0 .62-.281 2.2 2.2 0 0 0 .282-.244c.09-.083.17-.177.24-.281.069-.104.128-.21.177-.319zM8 9.537c.303 0 .563-.11.78-.33.217-.222.325-.49.325-.807 0-.308-.108-.573-.325-.794A1.055 1.055 0 0 0 8 7.275c-.303 0-.563.11-.78.331-.217.221-.325.486-.325.794 0 .317.108.585.325.806.217.221.477.332.78.332zm4.212 3.15a.75.75 0 0 0 .197-.33c.033-.122.049-.228.049-.32 0-.1-.012-.2-.037-.3a2.027 2.027 0 0 0-.27-.625 2 2 0 0 0-.847-.713 2.049 2.049 0 0 0-.295-.099 1.191 1.191 0 0 0-.295-.038c-.098 0-.207.017-.325.05a.732.732 0 0 0-.326.2.75.75 0 0 0-.196.332 1.24 1.24 0 0 0-.05.319c0 .1.013.202.037.306.025.104.058.206.099.306.049.108.108.215.178.319.07.104.15.198.24.281a2.2 2.2 0 0 0 .282.244 1.72 1.72 0 0 0 .909.319c.098 0 .206-.017.325-.05a.732.732 0 0 0 .325-.2z"/></g></svg>',

        'embed':
            '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"><g fill="none" fill-rule="evenodd"><path d="M0 0h16v16H0z"/><path fill="currentColor" d="M13.5 1.5a1 1 0 0 1 1 1v11a1 1 0 0 1-1 1h-11a1 1 0 0 1-1-1v-11a1 1 0 0 1 1-1h11zM13 3H3v10h10V3zM6.5 5.383a.5.5 0 0 1 .257.071l3.528 2.117a.5.5 0 0 1 0 .858l-3.528 2.117a.5.5 0 0 1-.757-.43V5.884a.5.5 0 0 1 .5-.5z"/></g></svg>',

        'emoji':
            '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"><g fill="none" fill-rule="evenodd"><path d="M0 0h16v16H0z"/><path fill="currentColor" d="M8 1.25a6.75 6.75 0 1 1 0 13.5 6.75 6.75 0 0 1 0-13.5zm0 1.5a5.25 5.25 0 1 0 0 10.5 5.25 5.25 0 0 0 0-10.5zM6.52 9.677l.05.088c.036.07.142.22.316.374.29.259.652.411 1.114.411a1.61 1.61 0 0 0 1.114-.41 1.64 1.64 0 0 0 .285-.324l.03-.051a.75.75 0 1 1 1.342.67c-.115.23-.327.53-.66.826-.553.491-1.26.789-2.111.789-.85 0-1.558-.298-2.11-.79a2.865 2.865 0 0 1-.66-.825.75.75 0 0 1 1.29-.758zM5.9 5.45a.75.75 0 0 1 .743.648l.007.102v1.2a.75.75 0 0 1-1.493.102L5.15 7.4V6.2a.75.75 0 0 1 .75-.75zm4.8.6a.75.75 0 0 1 .102 1.493l-.102.007H9.5a.75.75 0 0 1-.102-1.493L9.5 6.05h1.2z"/></g></svg>',

        'format-painter':
            '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"><g fill="none" fill-rule="evenodd"><path fill="currentColor" d="M11.796 6a.99.99 0 0 1-.98 1H2.98A.99.99 0 0 1 2 6V3c0-.552.439-1 .98-1h7.836a.99.99 0 0 1 .98 1v.75h1.273c.478 0 .871.367.925.84L14 4.7v3.6c0 .487-.36.889-.822.944l-.109.006H8.612V10h.245a.99.99 0 0 1 .98 1v3a.99.99 0 0 1-.98 1H6.898a.99.99 0 0 1-.98-1v-3c0-.552.439-1 .98-1h.245V8.7c0-.487.36-.889.822-.944l.108-.006h4.458v-2.5h-.735V6zm-3.429 5.5h-.98v2h.98v-2zm1.96-8H3.469v2h6.858v-2z"/><path d="M0 0h16v16H0z"/></g></svg>',

        'fullscreen':
            '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"><g fill="none" fill-rule="evenodd"><path d="M0 0h16v16H0z"/><path fill="currentColor" d="M6.53 9.47a.75.75 0 0 1 .073.976l-.073.084-2.22 2.22H5.5l.102.007A.75.75 0 0 1 5.5 14.25H2.472a.754.754 0 0 1-.046-.004l-.028-.003a.748.748 0 0 1-.499-.294l.07.081a.753.753 0 0 1-.219-.53v-3l.007-.102A.75.75 0 0 1 2.5 9.75l.102.007a.75.75 0 0 1 .648.743v1.188L5.47 9.47a.75.75 0 0 1 1.06 0zm6.97.28a.75.75 0 0 1 .743.648l.007.102v3a.75.75 0 0 1-.648.743l-.102.007h-3a.75.75 0 0 1-.102-1.493l.102-.007h2.25V10.5a.75.75 0 0 1 .648-.743l.102-.007zm0-8h.017c.02 0 .04.002.06.004l.025.003a.748.748 0 0 1 .499.294l-.07-.081a.753.753 0 0 1 .219.53v3l-.007.102a.75.75 0 0 1-.743.648l-.102-.007a.75.75 0 0 1-.648-.743V4.31l-2.22 2.22a.75.75 0 0 1-1.133-.976l.073-.084 2.218-2.22H10.5l-.102-.007A.75.75 0 0 1 10.5 1.75h3zm-8 0a.75.75 0 0 1 .102 1.493L5.5 3.25H3.25V5.5a.75.75 0 0 1-.648.743L2.5 6.25a.75.75 0 0 1-.743-.648L1.75 5.5v-3a.75.75 0 0 1 .648-.743L2.5 1.75h3z"/></g></svg>',

        'gallery':
            '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"><g fill="none" fill-rule="evenodd"><path d="M0 0h16v16H0z"/><path fill="currentColor" d="M13.5 3.75a.75.75 0 0 1 .743.648l.007.102v8a1.75 1.75 0 0 1-1.606 1.744l-.144.006h-7a.75.75 0 0 1-.102-1.493l.102-.007h7a.25.25 0 0 0 .243-.193l.007-.057v-8a.75.75 0 0 1 .75-.75zM11.167 2c.46 0 .833.373.833.833v8.334c0 .46-.373.833-.833.833H2.833A.833.833 0 0 1 2 11.167V2.833c0-.46.373-.833.833-.833h8.334zm-.417 1.25h-7.5v7.5h7.5v-7.5zm-2.5 2.5L9.5 7v2.5h-5V7.833L5.333 7l1.25.417L8.25 5.75zM5 4a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/></g></svg>',

        'highlight-bg-color':
            '<svg width="16px" height="16px" viewBox="0 0 16 16" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g id="16px-/-编辑器-/-highlight-bg-color" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><path d="M5.89444444,10.9788235 L2.5,10.9788235 L4.91944444,8.62117647 L4.34888889,8.06352941 L7.66388889,4.82352941 L10.6538889,7.74588235 L7.66388889,10.6682353 C7.52102345,10.8036117 7.29397655,10.8036117 7.15111111,10.6682353 L6.68166667,10.2023529 L5.89444444,10.9788235 Z M8.27777778,4.43454182 L10.3938889,2.38748299 C10.9308022,1.870839 11.7925311,1.870839 12.3294444,2.38748299 L13.3405556,3.4110124 C13.8730773,3.93420374 13.8730773,4.77958579 13.3405556,5.30277711 L11.2461111,7.34983591 L9.95333333,6.0792477 L9.57055556,5.69807123 L8.27777778,4.43454182 Z" id="Shape" fill="currentColor"></path><rect id="tox-icon-highlight-bg-color__color" fill="#4B5563" x="2" y="13" width="12" height="2"></rect></g></svg>',

        'horizontal-rule':
            '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"><g fill="none" fill-rule="evenodd"><path d="M0 0h16v16H0z"/><path fill="currentColor" d="M2 7h12v2H2z"/></g></svg>',

        'image':
            '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"><g fill="none" fill-rule="evenodd"><path d="M0 0h16v16H0z"/><path fill="currentColor" d="M13.5 1.5a1 1 0 0 1 1 1v11a1 1 0 0 1-1 1h-11a1 1 0 0 1-1-1v-11a1 1 0 0 1 1-1h11zM6.072 9.731L3 12.802V13h2.861l1.74-1.739-1.53-1.53zm5.279-.381L7.7 13H13v-2l-1.65-1.65zM13 3H3v7.962l2.612-2.61a.65.65 0 0 1 .838-.068l.08.068 1.99 1.989 2.37-2.37a.65.65 0 0 1 .84-.068l.08.068L13 9.161V3zM6.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3z"/></g></svg>',

        'importword':
            '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"><g fill="none" fill-rule="evenodd"><path d="M0 0h16v16H0z"/><path fill="currentColor" d="M9.586 1a1 1 0 0 1 .707.293l3.414 3.414a1 1 0 0 1 .293.707V8h-1.5V6.75H9.3a1.05 1.05 0 0 1-1.044-.936L8.25 5.7V2.5H3.5v11H8V15H3a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h6.586zm2.909 8.505a.7.7 0 0 1 .074.903l-.074.087-.757.755H14.5a.75.75 0 0 1 .102 1.493l-.102.007h-2.762l.757.755a.7.7 0 0 1 .074.903l-.074.087a.7.7 0 0 1-.903.074l-.087-.074-2-2a.7.7 0 0 1-.074-.903l.074-.087 2-2a.7.7 0 0 1 .99 0zM5.429 7.5l.674 2.574.788-2.574h.342l.787 2.574.674-2.574H10l-1.286 4H7.392l-.33-.659-.33.659H5.409l-1.285-4h1.305zM9.75 2.871V5.25h2.379L9.75 2.871z"/></g></svg>',

        'indent':
            '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"><g fill="none" fill-rule="evenodd"><path d="M0 0h16v16H0z"/><path fill="currentColor" d="M13.25 11.75a.75.75 0 1 1 0 1.5h-9.5a.75.75 0 1 1 0-1.5h9.5zm0-3a.75.75 0 0 1 .102 1.493l-.102.007h-5.5a.75.75 0 0 1-.102-1.493l.102-.007h5.5zM2.3 6.217a.3.3 0 0 1 .149.04L5.044 7.74a.3.3 0 0 1 0 .52L2.45 9.744A.3.3 0 0 1 2 9.483V6.517a.3.3 0 0 1 .3-.3zm10.95-.467a.75.75 0 0 1 .102 1.493l-.102.007h-5.5a.75.75 0 0 1-.102-1.493l.102-.007h5.5zm0-3a.75.75 0 1 1 0 1.5h-9.5a.75.75 0 0 1 0-1.5h9.5z"/></g></svg>',

        'insert-character':
            '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"><g fill="none" fill-rule="evenodd"><path d="M0 0h16v16H0z"/><path fill="currentColor" d="M10.25 12.5h3L14 11v3H9.5v-2.508a3.947 3.947 0 0 0 1.055-.668 4.47 4.47 0 0 0 .832-.978 4.65 4.65 0 0 0 .539-1.213c.133-.438.199-.899.199-1.383 0-.625-.11-1.21-.328-1.758a4.37 4.37 0 0 0-.879-1.424 4.234 4.234 0 0 0-1.313-.955A3.844 3.844 0 0 0 8 2.773c-.57 0-1.105.114-1.605.34-.5.235-.938.553-1.313.955a4.37 4.37 0 0 0-.879 1.424 4.689 4.689 0 0 0-.328 1.758c0 .484.066.945.2 1.383.124.437.304.842.538 1.213.235.37.512.697.832.978.32.281.672.504 1.055.668V14H2v-3l.75 1.5h3v-.387a6.417 6.417 0 0 1-1.512-.773 5.73 5.73 0 0 1-1.19-1.125 4.905 4.905 0 0 1-.767-1.383A4.468 4.468 0 0 1 2 7.25c0-.727.156-1.406.469-2.04.312-.64.74-1.198 1.283-1.675A6.097 6.097 0 0 1 5.668 2.41 6.566 6.566 0 0 1 8 2c.828 0 1.605.137 2.332.41a6.097 6.097 0 0 1 1.916 1.125c.543.477.97 1.035 1.283 1.676.313.633.469 1.312.469 2.039 0 .555-.094 1.082-.281 1.582-.18.5-.436.961-.768 1.383a5.73 5.73 0 0 1-1.19 1.125c-.46.32-.964.578-1.511.773v.387z"/></g></svg>',

        'insert-time':
            '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"><g fill="none" fill-rule="evenodd"><path fill="currentColor" d="M10.5 1.75a.75.75 0 0 1 .743.648l.007.102V3H13a1 1 0 0 1 1 1v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h1.75v-.5a.75.75 0 0 1 1.493-.102l.007.102V3h3.5v-.5a.75.75 0 0 1 .75-.75zm-7 6v4.75h9V7.75h-9zm7.5 1.5a.75.75 0 0 1 .102 1.493L11 10.75H9.5a.75.75 0 0 1-.102-1.493L9.5 9.25H11zm-4.5 0a.75.75 0 0 1 .102 1.493l-.102.007H5a.75.75 0 0 1-.102-1.493L5 9.25h1.5zm-3-3h9V4.5h-1.25V5a.75.75 0 0 1-1.493.102L9.75 5v-.5h-3.5V5a.75.75 0 0 1-1.493.102L4.75 5v-.5H3.5v1.75z"/><path d="M0 0h16v16H0z"/></g></svg>',

        'italic':
            '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"><g fill="none" fill-rule="evenodd"><path d="M0 0h16v16H0z"/><path fill="currentColor" d="M11.5 2l-.14.706h-.208c-.505 0-.869.101-1.09.304-.222.202-.372.503-.45.902l-1.64 8.241a3.09 3.09 0 0 0-.069.468c0 .449.382.673 1.145.673h.201L9.11 14H4.5l.124-.706h.209c.876 0 1.394-.402 1.554-1.206l1.648-8.241c.041-.208.062-.364.062-.468 0-.449-.382-.673-1.145-.673H6.75L6.89 2H11.5z"/></g></svg>',

        'line-height':
            '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"><g fill="none" fill-rule="evenodd"><path d="M0 0h16v16H0z"/><path fill="currentColor" d="M4.858 1.84l.092.06 2 1.5a.75.75 0 0 1-.806 1.26L6.05 4.6l-.8-.6v8l.8-.6.094-.06a.75.75 0 0 1 .89 1.187l-.084.073-2 1.5-.092.06a.75.75 0 0 1-.716 0l-.092-.06-2-1.5-.084-.073a.75.75 0 0 1-.126-.883l.06-.094.073-.084a.75.75 0 0 1 .883-.126l.094.06.8.6V4l-.8.6a.75.75 0 0 1-.977-.066L1.9 4.45a.75.75 0 0 1 .066-.977L2.05 3.4l2-1.5a.75.75 0 0 1 .808-.06zM11.25 12a.75.75 0 1 1 0 1.5h-2.5a.75.75 0 1 1 0-1.5h2.5zm2-3a.75.75 0 1 1 0 1.5h-4.5a.75.75 0 1 1 0-1.5h4.5zm-2-3.5a.75.75 0 1 1 0 1.5h-2.5a.75.75 0 0 1 0-1.5h2.5zm2-3a.75.75 0 1 1 0 1.5h-4.5a.75.75 0 0 1 0-1.5h4.5z"/></g></svg>',

        'link':
            '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"><g fill="none" fill-rule="evenodd"><path d="M0 0h16v16H0z"/><path fill="currentColor" d="M7.47 4.641a1.75 1.75 0 0 0-.114 2.35l.114.125.176.177-.353.353-.177-.176a1.75 1.75 0 0 0-2.37-.098l-.105.098L1.52 10.59a1.75 1.75 0 0 0-.114 2.35l.114.125 1.414 1.414a1.75 1.75 0 0 0 2.35.114l.125-.114L8.53 11.36a1.75 1.75 0 0 0 .114-2.35l-.114-.125-.176-.177.353-.353.177.176a1.75 1.75 0 0 0 2.37.098l.105-.098L14.48 5.41a1.75 1.75 0 0 0 .114-2.35l-.114-.125-1.414-1.414a1.75 1.75 0 0 0-2.35-.114l-.125.114L7.47 4.64zm1.06 1.06l3.122-3.12a.25.25 0 0 1 .3-.041l.053.04 1.414 1.415a.25.25 0 0 1 .041.3l-.04.053-3.122 3.122a.25.25 0 0 1-.3.04l-.053-.04-.177-.177.884-.884a.75.75 0 0 0-.984-1.128l-.077.067-.884.884-.177-.177a.25.25 0 0 1-.036-.308l.036-.045zm-5.95 5.95l3.122-3.12a.25.25 0 0 1 .3-.041l.053.04.177.177-.884.884a.75.75 0 0 0 .984 1.128l.077-.067.884-.884.177.177a.25.25 0 0 1 .036.308l-.036.045-3.122 3.121a.25.25 0 0 1-.3.041l-.053-.04-1.414-1.415a.25.25 0 0 1-.041-.3l.04-.053z"/></g></svg>',

        'more-drawer':
            '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"><g fill="none" fill-rule="evenodd"><path d="M0 0h16v16H0z"/><path fill="currentColor" d="M3.5 6.5C2.675 6.5 2 7.175 2 8s.675 1.5 1.5 1.5S5 8.825 5 8s-.675-1.5-1.5-1.5zm9 0c-.825 0-1.5.675-1.5 1.5s.675 1.5 1.5 1.5S14 8.825 14 8s-.675-1.5-1.5-1.5zM8 6.5c-.825 0-1.5.675-1.5 1.5S7.175 9.5 8 9.5 9.5 8.825 9.5 8 8.825 6.5 8 6.5z"/></g></svg>',

        'ordered-list':
            '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"><g fill="none" fill-rule="evenodd"><path d="M0 0h16v16H0z"/><path fill="currentColor" d="M7.032 2.4h6.194c.427 0 .774.358.774.8 0 .442-.347.8-.774.8H7.032a.787.787 0 01-.774-.8c0-.442.347-.8.774-.8zm0 4.8h6.194c.427 0 .774.358.774.8 0 .442-.347.8-.774.8H7.032a.787.787 0 01-.774-.8c0-.442.347-.8.774-.8zm0 4.8h6.194c.427 0 .774.358.774.8 0 .442-.347.8-.774.8H7.032a.787.787 0 01-.774-.8c0-.442.347-.8.774-.8zM3.867 1v3.281a.468.468 0 11-.934 0V1.938h-.466a.468.468 0 010-.938h1.4zM2.933 8.747c0 .11.09.199.199.199h1.201a.468.468 0 010 .937H2.852A.854.854 0 012 9.028v-.206c0-.39.241-.74.606-.878l1.06-.4a.31.31 0 00.2-.289.204.204 0 00-.203-.205l-1.17.052A.473.473 0 012 6.63c0-.274.22-.496.493-.496h1.455c.47 0 .852.383.852.856v.206c0 .39-.241.74-.606.877l-1.075.405a.287.287 0 00-.186.27zM4.8 12.188v1.874a.935.935 0 01-.933.938H2.469a.47.47 0 010-.942h1.12a.278.278 0 000-.558H2.373a.374.374 0 010-.75H3.59a.279.279 0 000-.559h-1.12a.47.47 0 010-.941h1.398c.515 0 .933.42.933.938z"/></g></svg>',

        'outdent':
            '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"><g fill="none" fill-rule="evenodd"><path d="M0 0h16v16H0z"/><path fill="currentColor" d="M13.25 11.75a.75.75 0 1 1 0 1.5h-9.5a.75.75 0 1 1 0-1.5h9.5zm0-3a.75.75 0 0 1 .102 1.493l-.102.007h-5.5a.75.75 0 0 1-.102-1.493l.102-.007h5.5zM4.895 6.217a.3.3 0 0 1 .292.231l.008.069v2.966a.3.3 0 0 1-.385.288l-.063-.027L2.15 8.26a.3.3 0 0 1-.056-.48l.056-.04 2.596-1.484a.3.3 0 0 1 .148-.039zm8.355-.467a.75.75 0 0 1 .102 1.493l-.102.007h-5.5a.75.75 0 0 1-.102-1.493l.102-.007h5.5zm0-3a.75.75 0 1 1 0 1.5h-9.5a.75.75 0 0 1 0-1.5h9.5z"/></g></svg>',

        'page-break':
            '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"><g fill="none" fill-rule="evenodd"><path d="M0 0h16v16H0z"/><path fill="currentColor" d="M12 9.75l.102.007a.75.75 0 0 1 .648.743v3l-.007.102a.75.75 0 0 1-.743.648l-.102-.007a.75.75 0 0 1-.648-.743v-2.25h-6.5v2.25l-.007.102A.75.75 0 0 1 3.25 13.5v-3l.007-.102A.75.75 0 0 1 4 9.75h8zm-6-2.5v1.5H4v-1.5h2zm3 0v1.5H7v-1.5h2zm3 0v1.5h-2v-1.5h2zm2 0v1.5h-1v-1.5h1zm-11 0v1.5H2v-1.5h1zm9-5.5a.75.75 0 0 1 .743.648l.007.102v3a.75.75 0 0 1-.648.743L12 6.25H4a.75.75 0 0 1-.743-.648L3.25 5.5v-3a.75.75 0 0 1 1.493-.102l.007.102v2.25h6.5V2.5a.75.75 0 0 1 .648-.743L12 1.75z"/></g></svg>',

        'paste':
            '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"><g fill="none" fill-rule="evenodd"><path d="M0 0h16v16H0z"/><path fill="currentColor" d="M13 7a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1h5zM7.647 1c.918 0 1.694.588 1.99 1.4h2.245c.777 0 1.412.63 1.412 1.4V6h-1.412V3.8h-1.411v.7c0 .387-.316.7-.706.7H5.529a.703.703 0 0 1-.705-.7v-.7H3.412v9.1L5 12.899v1.4l-1.588.001A1.41 1.41 0 0 1 2 12.9V3.8c0-.77.635-1.4 1.412-1.4h2.244A2.124 2.124 0 0 1 7.647 1zM12.5 8.5h-4v5h4v-5zM7.647 2.4a.705.705 0 0 0-.706.7.705.705 0 0 0 1.412 0c0-.385-.318-.7-.706-.7z"/></g></svg>',

        'preview':
            '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"><g fill="none" fill-rule="evenodd"><path d="M0 0h16v16H0z"/><path fill="currentColor" d="M1.82 8.369c.377.531.823 1.063 1.332 1.558 1.425 1.382 3.05 2.198 4.851 2.198 1.801 0 3.427-.816 4.851-2.198A11.264 11.264 0 0 0 14.438 8a11.264 11.264 0 0 0-1.583-1.927c-1.425-1.382-3.05-2.198-4.852-2.198-1.8 0-3.426.816-4.85 2.198A11.264 11.264 0 0 0 1.568 8c.069.107.153.23.251.369zM.085 7.683c.095-.172.271-.457.527-.818.424-.597.923-1.193 1.498-1.75C3.785 3.488 5.755 2.5 8.003 2.5c2.249 0 4.219.989 5.893 2.614a12.644 12.644 0 0 1 1.498 1.751c.257.36.433.646.527.818.11.199.11.435 0 .634-.094.172-.27.457-.527.818a12.644 12.644 0 0 1-1.498 1.75c-1.674 1.626-3.644 2.615-5.893 2.615-2.248 0-4.218-.989-5.893-2.614A12.644 12.644 0 0 1 .612 9.135a9.062 9.062 0 0 1-.527-.818.654.654 0 0 1 0-.634zM8.86 5.371c-.505.216-.857.696-.857 1.254 0 .76.652 1.375 1.455 1.375a1.46 1.46 0 0 0 1.326-.81c.084.256.128.528.128.81 0 1.519-1.302 2.75-2.909 2.75-1.606 0-2.909-1.231-2.909-2.75s1.303-2.75 2.91-2.75c.297 0 .585.042.856.121z"/></g></svg>',

        'print':
            '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"><g fill="none" fill-rule="evenodd"><path d="M0 0h16v16H0z"/><path fill="currentColor" d="M12.667 4.4H3.333C2.043 4.4 1 5.472 1 6.8v4.8h1.556V14h10.888v-2.4H15V6.8c0-1.328-1.042-2.4-2.333-2.4zm-.778 8H4.11V9.2h7.778v3.2zm.389-4c-.642 0-1.167-.54-1.167-1.2 0-.66.525-1.2 1.167-1.2.641 0 1.166.54 1.166 1.2 0 .66-.525 1.2-1.166 1.2zm.389-6.4H3.333v1.6h9.334V2z"/></g></svg>',

        'quote':
            '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"><g fill="none" fill-rule="evenodd"><path d="M0 0h16v16H0z"/><path fill="currentColor" d="M5.429 11h.504a.57.57 0 0 0 .51-.332L7.43 8.6v-3c0-.331-.256-.6-.572-.6H4.571C4.256 5 4 5.269 4 5.6V8c0 .331.256.6.571.6h1.143l-.76 1.595a.57.57 0 0 0 .238.746.51.51 0 0 0 .237.059zM10 11h.504a.57.57 0 0 0 .511-.332L12 8.6v-3c0-.331-.256-.6-.571-.6H9.143c-.316 0-.572.269-.572.6V8c0 .331.256.6.572.6h1.143l-.76 1.595a.57.57 0 0 0 .237.746A.51.51 0 0 0 10 11z"/></g></svg>',

        'redo':
            '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"><g fill="none" fill-rule="evenodd"><path d="M0 0h16v16H0z"/><path fill="currentColor" d="M11.325 12.993a.75.75 0 0 0-.102-1.493h-5a3.5 3.5 0 0 1-.192-6.995l.192-.005h6.001v.824a.3.3 0 0 0 .471.246l2.177-1.524a.3.3 0 0 0 0-.492L12.695 2.03a.3.3 0 0 0-.472.246l.001.723-6 .001a5 5 0 0 0 0 10h5z"/></g></svg>',

        'remove-formatting':
            '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"><g fill="none" fill-rule="evenodd"><path d="M0 0h16v16H0z"/><path fill="currentColor" d="M12.554 8.897a.75.75 0 0 1 .976 1.133l-1.219 1.22 1.22 1.22a.75.75 0 0 1-.977 1.133l-.084-.073-1.22-1.219-1.22 1.22-.084.072a.75.75 0 0 1-.976-1.133l1.219-1.22-1.22-1.22a.75.75 0 0 1 .977-1.133l.084.073 1.22 1.219 1.22-1.22.084-.072zM7 12.5a.5.5 0 0 1 .09.992L7 13.5H2a.5.5 0 0 1-.09-.992L2 12.5h5zm3.5-10.25a.75.75 0 0 1 .102 1.493l-.102.007H8.511L5.48 11.549A.776.776 0 0 1 4.5 12a.725.725 0 0 1-.436-.947l2.84-7.303H5a.75.75 0 0 1-.102-1.493L5 2.25h5.5z"/></g></svg>',

        'restore-draft':
            '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"><g fill="none" fill-rule="evenodd"><path d="M0 0h16v16H0z"/><path fill="currentColor" d="M8.25 1.75a6.25 6.25 0 1 1-3.966 11.081.75.75 0 0 1 .953-1.159A4.75 4.75 0 1 0 3.606 7h.583a.3.3 0 0 1 .25.466L3 9.626a.3.3 0 0 1-.499 0l-1.44-2.16A.3.3 0 0 1 1.31 7h.77a6.252 6.252 0 0 1 6.17-5.25zm-.25 3a.75.75 0 0 1 .743.648l.007.102v2.689l1.28 1.28a.75.75 0 0 1 .073.977l-.073.084a.75.75 0 0 1-.976.073l-.084-.073-1.5-1.5a.75.75 0 0 1-.21-.412L7.25 8.5v-3A.75.75 0 0 1 8 4.75z"/></g></svg>',

        'sourcecode':
            '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"><g fill="none" fill-rule="evenodd"><path fill="currentColor" d="M6 3.391v2.016L3.12 7.999 6 10.591v2.018L1.498 8.557a.75.75 0 0 1-.076-1.036l.076-.078L6 3.39zm4 .001l4.502 4.05a.75.75 0 0 1 .076 1.037l-.076.078L10 12.608V10.59L12.879 8 10 5.408V3.392z"/><path d="M0 0h16v16H0z"/></g></svg>',

        'strike-through':
            '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"><g fill="none" fill-rule="evenodd"><path d="M0 0h16v16H0z"/><path fill="currentColor" d="M8.338 2c2.547 0 3.687 1.371 4.125 2.057L11.15 5c-.43-.57-.815-.955-1.153-1.156a3.44 3.44 0 0 0-1.734-.473c-2.363 0-2.45 1.495-2.45 1.805 0 1.383 1.553 1.717 2.8 1.967h5.512c.483 0 .875.384.875.857a.866.866 0 0 1-.875.857h-1.972c.4.528.476 1.061.484 1.484v.145C12.624 11.695 12.025 14 8.262 14c-2.537 0-3.978-1.255-4.637-2.204l1.347-.977c.299.505 1.357 1.783 3.241 1.783 1.39 0 2.126-.4 2.52-1.063.426-.72.323-1.793-.662-2.296a6.913 6.913 0 0 0-.935-.385H1.875A.866.866 0 0 1 1 8c0-.473.392-.857.875-.857h2.94c-.395-.432-.665-1.012-.665-1.8C4.15 2.857 6.494 2 8.338 2z"/></g></svg>',

        'subscript':
            '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"><g fill="none" fill-rule="evenodd"><path d="M0 0h16v16H0z"/><path fill="currentColor" d="M7.812 6.79l3.6 3.665-1.106 1.126-3.6-3.665-3.6 3.665L2 10.455 5.6 6.79 2 3.126 3.106 2l3.6 3.665L10.306 2l1.106 1.126-3.6 3.664zM16 14h-3.827v-.798l.698-.64c.596-.518 1.035-.95 1.333-1.3.29-.352.44-.68.447-.99a.724.724 0 0 0-.212-.56c-.141-.127-.368-.223-.674-.223-.243 0-.455.048-.66.144l-.517.303-.353-.934c.212-.168.463-.311.769-.423a2.93 2.93 0 0 1 1.012-.192c.611.032 1.082.2 1.396.527.313.328.486.743.486 1.254a2.12 2.12 0 0 1-.423 1.237 6.337 6.337 0 0 1-.997 1.086l-.502.415 2.024.016V14z"/></g></svg>',

        'superscript':
            '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"><g fill="none" fill-rule="evenodd"><path d="M0 0h16v16H0z"/><path fill="currentColor" d="M11.412 5.396l-3.6 3.729 3.6 3.73L10.306 14l-3.6-3.73-3.6 3.73L2 12.854l3.6-3.729L2 5.395 3.106 4.25l3.6 3.73 3.6-3.73 1.106 1.146zM16 6.688h-3.827v-.813l.698-.666c.596-.52 1.035-.959 1.333-1.325.29-.357.44-.69.447-.999a.733.733 0 0 0-.212-.569c-.141-.154-.368-.227-.674-.235a1.91 1.91 0 0 0-.66.138l-.517.317-.353-.951c.212-.179.463-.317.769-.43.306-.114.643-.155 1.012-.155.611 0 1.082.163 1.396.496.313.317.486.755.486 1.275a2.183 2.183 0 0 1-.423 1.26c-.267.39-.597.755-.997 1.105l-.502.422v.016H16v1.114z"/></g></svg>',

        'table-cell-properties':
            '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"><g fill="none" fill-rule="evenodd"><path d="M0 0h16v16H0z"/><path fill="currentColor" d="M13.444 2C14.304 2 15 2.672 15 3.5v9c0 .828-.696 1.5-1.556 1.5H2.556C1.696 14 1 13.328 1 12.5v-9C1 2.672 1.696 2 2.556 2h10.888zM7.222 8.75H2.556v3.75h4.666V8.75zm6.222 0H8.778v3.75h4.666V8.75zM7.222 3.5H2.556v3.75h4.666V3.5z"/></g></svg>',

        'table-cell-select-all':
            '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"><g fill="none" fill-rule="evenodd"><path d="M0 0h16v16H0z"/><path fill="currentColor" fill-rule="nonzero" d="M13.444 2C14.304 2 15 2.672 15 3.5v9c0 .828-.696 1.5-1.556 1.5H2.556C1.696 14 1 13.328 1 12.5v-9C1 2.672 1.696 2 2.556 2h10.888zm0 1.5H2.556v9h10.888v-9z"/><path fill="currentColor" fill-rule="nonzero" d="M8.778 3.5v3.75h4.666v1.5H8.778v3.75H7.222V8.75H2.556v-1.5h4.666V3.5z" opacity=".2"/></g></svg>',

        'table-cell-select-inner':
            '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"><g fill="none" fill-rule="evenodd"><path d="M0 0h16v16H0z"/><path fill="currentColor" fill-rule="nonzero" d="M13.444 2C14.304 2 15 2.672 15 3.5v9c0 .828-.696 1.5-1.556 1.5H2.556C1.696 14 1 13.328 1 12.5v-9C1 2.672 1.696 2 2.556 2h10.888zm0 1.5H2.556v9h10.888v-9z" opacity=".201"/><path fill="currentColor" fill-rule="nonzero" d="M8.778 3.5v3.75h4.666v1.5H8.778v3.75H7.222V8.75H2.556v-1.5h4.666V3.5z"/></g></svg>',

        'table-delete-column':
            '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"><g fill="none" fill-rule="evenodd"><path d="M0 0h16v16H0z"/><path fill="currentColor" d="M13.444 2C14.304 2 15 2.672 15 3.5v9c0 .828-.696 1.5-1.556 1.5H2.556C1.696 14 1 13.328 1 12.5v-9C1 2.672 1.696 2 2.556 2h10.888zm-3.11 3H8.777V3.5H7.222V5H5.667V3.5H2.556v9h3.11V11h1.556v1.5h1.556V11h1.555v1.5h3.111v-9h-3.11V5zm.225.368l.716.889L8.95 8l2.325 1.743-.716.889L8 8.712l-2.559 1.92-.716-.889L7.05 8 4.725 6.257l.716-.889L8 7.287l2.559-1.919z"/></g></svg>',

        'table-delete-row':
            '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"><g fill="none" fill-rule="evenodd"><path d="M0 0h16v16H0z"/><path fill="currentColor" d="M13.444 2C14.304 2 15 2.672 15 3.5v9c0 .828-.696 1.5-1.556 1.5H2.556C1.696 14 1 13.328 1 12.5v-9C1 2.672 1.696 2 2.556 2h10.888zm0 1.5H2.556v2.25H4.5v1.5H2.556v1.5H4.5v1.5H2.556v2.25h10.888v-2.25H11.5v-1.5h1.944v-1.5H11.5v-1.5h1.944V3.5zM9.808 4.842l.921.69L8.739 8l1.99 2.467-.92.69L8 8.917l-1.808 2.242-.921-.69L7.261 8 5.27 5.533l.92-.69L8 7.082l1.808-2.24z"/></g></svg>',

        'table-delete-table':
            '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"><g fill="none" fill-rule="evenodd"><path d="M0 0h16v16H0z"/><path fill="currentColor" d="M13.444 2C14.304 2 15 2.672 15 3.5v9c0 .828-.696 1.5-1.556 1.5H2.556C1.696 14 1 13.328 1 12.5v-9C1 2.672 1.696 2 2.556 2h10.888zM2.556 3.5v9h10.888v-9H2.556z"/><path fill="currentColor" d="M9.859 5.412l.824.795L8.824 8l1.859 1.793-.824.795L8 8.795l-1.859 1.793-.824-.795L7.176 8 5.317 6.207l.824-.795L8 7.205z"/></g></svg>',

        'table-insert-column-after':
            '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"><g fill="none" fill-rule="evenodd"><path d="M0 0h16v16H0z"/><path fill="currentColor" d="M14.222 2c.43 0 .778.336.778.75v1.5c0 .414-.348.75-.778.75a.764.764 0 0 1-.778-.75V3.5H7.222v9h6.222v-.75c0-.414.349-.75.778-.75.43 0 .778.336.778.75v1.5a.76.76 0 0 1-.687.745l-.09.005H2.555C1.696 14 1 13.328 1 12.5v-9C1 2.672 1.696 2 2.556 2h11.666zM5.667 8.75H2.556v3.75h3.11V8.75zM11.11 5c.399 0 .728.29.773.663l.005.087v1.5h1.555c.43 0 .778.336.778.75a.76.76 0 0 1-.687.745l-.09.005h-1.556v1.5c0 .414-.348.75-.778.75a.768.768 0 0 1-.772-.663l-.006-.087v-1.5H8.778A.764.764 0 0 1 8 8c0-.385.3-.702.687-.745l.09-.005h1.556v-1.5c0-.414.349-.75.778-.75zM5.667 3.5H2.556v3.75h3.11V3.5z"/></g></svg>',

        'table-insert-column-before':
            '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"><g fill="none" fill-rule="evenodd"><path d="M0 0h16v16H0z"/><path fill="currentColor" d="M13.444 2C14.304 2 15 2.672 15 3.5v9c0 .828-.696 1.5-1.556 1.5H1.778A.764.764 0 0 1 1 13.25v-1.5c0-.414.348-.75.778-.75.43 0 .778.336.778.75v.75h6.222v-9H2.556v.75c0 .414-.349.75-.778.75A.764.764 0 0 1 1 4.25v-1.5c0-.414.348-.75.778-.75h11.666zm0 6.75h-3.11v3.75h3.11V8.75zM4.89 5c.399 0 .728.29.772.663l.006.087v1.5h1.555c.43 0 .778.336.778.75a.76.76 0 0 1-.687.745l-.09.005H5.666v1.5c0 .414-.349.75-.778.75a.768.768 0 0 1-.773-.663l-.005-.087v-1.5H2.556A.764.764 0 0 1 1.778 8c0-.385.3-.702.687-.745l.09-.005h1.556v-1.5c0-.414.348-.75.778-.75zm8.555-1.5h-3.11v3.75h3.11V3.5z"/></g></svg>',

        'table-insert-row-above':
            '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"><g fill="none" fill-rule="evenodd"><path d="M0 0h16v16H0z"/><path fill="currentColor" d="M3.333 1.765c.43 0 .778.342.778.764a.771.771 0 0 1-.778.765h-.777v4.588h10.888V3.294h-.777a.771.771 0 0 1-.778-.765c0-.422.348-.764.778-.764h1.555c.43 0 .778.342.778.764v9.942c0 .844-.696 1.529-1.556 1.529H2.556C1.696 14 1 13.315 1 12.47V2.53c0-.423.348-.765.778-.765h1.555zm3.89 7.647H2.555v3.059h4.666V9.41zm6.221 0H8.778v3.059h4.666V9.41zM8 1c.399 0 .728.295.773.676l.005.089v1.53h1.49c.43 0 .778.341.778.764a.77.77 0 0 1-.687.76l-.09.005H8.778v1.529A.771.771 0 0 1 8 7.118a.773.773 0 0 1-.773-.676l-.005-.09V4.825h-1.49a.771.771 0 0 1-.778-.765c0-.392.3-.716.687-.76l.09-.005h1.491v-1.53C7.222 1.343 7.57 1 8 1z"/></g></svg>',

        'table-insert-row-after':
            '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"><g fill="none" fill-rule="evenodd"><path d="M0 0h16v16H0z"/><path fill="currentColor" d="M8 8.882c.399 0 .728.296.773.676l.005.09v1.528h1.555c.43 0 .778.343.778.765a.77.77 0 0 1-.687.76l-.09.005H8.777v1.53A.771.771 0 0 1 8 15a.773.773 0 0 1-.773-.676l-.005-.089v-1.53H5.667a.771.771 0 0 1-.778-.764c0-.392.3-.715.687-.76l.09-.005h1.556V9.647c0-.422.348-.765.778-.765zm4.667 5.353a.771.771 0 0 1-.778-.764c0-.423.348-.765.778-.765h.777V8.118H2.556v4.588h.777c.43 0 .778.342.778.765a.771.771 0 0 1-.778.764H1.778A.771.771 0 0 1 1 13.471V3.529C1 2.685 1.696 2 2.556 2h10.888C14.304 2 15 2.685 15 3.53v9.94a.77.77 0 0 1-.687.76l-.09.005h-1.556zM7.222 3.53H2.556v3.06h4.666v-3.06zm6.222 0H8.778v3.06h4.666v-3.06z"/></g></svg>',

        'table-left-header':
            '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"><g fill="none" fill-rule="evenodd"><path d="M0 0h16v16H0z"/><path fill="currentColor" d="M13.444 2C14.304 2 15 2.672 15 3.5v9c0 .828-.696 1.5-1.556 1.5H2.556C1.696 14 1 13.328 1 12.5v-9C1 2.672 1.696 2 2.556 2h10.888zm0 6.75h-3.11v3.75h3.11V8.75zm-4.666 0H5.667v3.75h3.11V8.75zm0-5.25H5.667v3.75h3.11V3.5zm4.666 0h-3.11v3.75h3.11V3.5z"/></g></svg>',

        'table-merge-cells':
            '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"><g fill="none" fill-rule="evenodd"><path d="M0 0h16v16H0z"/><path fill="currentColor" d="M13.444 2C14.304 2 15 2.672 15 3.5v9c0 .828-.696 1.5-1.556 1.5H2.556C1.696 14 1 13.328 1 12.5v-9C1 2.672 1.696 2 2.556 2h10.888zM2.556 10.625V12.5h2.333v-1.875H2.556zm10.888-3.75h-7V12.5h7V6.875zm0-3.375h-3.11v1.875h3.11V3.5zm-8.555 0H2.556v1.875h2.333V3.5zm3.889 0H6.444v1.875h2.334V3.5zM2.556 9.125h2.333v-2.25H2.556v2.25z"/></g></svg>',

        'table-row-properties':
            '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"><g fill="none" fill-rule="evenodd"><path d="M0 0h16v16H0z"/><path fill="currentColor" d="M13.444 2C14.304 2 15 2.672 15 3.5v9c0 .828-.696 1.5-1.556 1.5H2.556C1.696 14 1 13.328 1 12.5v-9C1 2.672 1.696 2 2.556 2h10.888zM2.556 10.25v2.25h4.666v-2.25H2.556zm10.888 0H8.778v2.25h4.666v-2.25zm0-6.75H8.778v2.25h4.666V3.5zM2.556 5.75h4.666V3.5H2.556v2.25z"/></g></svg>',

        'table-split-cells':
            '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"><g fill="none" fill-rule="evenodd"><path d="M0 0h16v16H0z"/><path fill="currentColor" d="M13.444 2C14.304 2 15 2.672 15 3.5v9c0 .828-.696 1.5-1.556 1.5H2.556C1.696 14 1 13.328 1 12.5v-9C1 2.672 1.696 2 2.556 2h10.888zM4.89 10.625H2.556V12.5h2.333v-1.875zm8.555-3.75h-7V12.5h7V6.875zm-1.968.727l.825.796-1.531 1.477 1.531 1.477-.825.796-1.532-1.477-1.532 1.477-.824-.796 1.531-1.477-1.531-1.477.824-.796L9.944 9.08l1.532-1.477zM4.89 6.875H2.556v2.25h2.333v-2.25zM13.444 3.5h-3.11v1.875h3.11V3.5zm-8.555 0H2.556v1.875h2.333V3.5zm3.889 0H6.444v1.875h2.334V3.5z"/></g></svg>',

        'table-top-header':
            '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"><g fill="none" fill-rule="evenodd"><path d="M0 0h16v16H0z"/><path fill="currentColor" d="M13.444 2C14.304 2 15 2.672 15 3.5v9c0 .828-.696 1.5-1.556 1.5H2.556C1.696 14 1 13.328 1 12.5v-9C1 2.672 1.696 2 2.556 2h10.888zm-6.222 8.25H2.556v2.25h4.666v-2.25zm6.222 0H8.778v2.25h4.666v-2.25zm0-3.75H8.778v2.25h4.666V6.5zM2.556 8.75h4.666V6.5H2.556v2.25z"/></g></svg>',

        'table':
            '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"><g fill="none" fill-rule="evenodd"><path d="M0 0h16v16H0z"/><path fill="currentColor" d="M13.444 2C14.304 2 15 2.672 15 3.5v9c0 .828-.696 1.5-1.556 1.5H2.556C1.696 14 1 13.328 1 12.5v-9C1 2.672 1.696 2 2.556 2h10.888zM2.556 9.5v3h4.666v-3H2.556zm10.888 0H8.778v3h4.666v-3zm0-4.5H8.778v3h4.666V5zM2.556 8h4.666V5H2.556v3z"/></g></svg>',

        'text-color':
            '<svg width="16px" height="16px" viewBox="0 0 16 16" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g id="16px-/-编辑器-/-text-color" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><path d="M8.53794383,1.52482818 C8.78320692,1.6363114 8.98673079,1.82072387 9.12178114,2.05133126 L9.18347642,2.17036077 L13.197,10.9999865 L11.439,10.9999865 L10.415,8.74998646 L5.582,8.74998646 L4.56,10.9999865 L2.803,10.9999865 L6.81652358,2.17036077 C7.11362175,1.51674479 7.88432785,1.22773 8.53794383,1.52482818 Z M8,3.434 L6.264,7.24998646 L9.733,7.24998646 L8,3.434 Z" id="Shape" fill="currentColor"></path><rect id="tox-icon-text-color__color" fill="#4B5563" x="2" y="13" width="12" height="2"></rect></g></svg>',

        'text-indent':
            '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"><g fill="none" fill-rule="evenodd"><path d="M0 0h16v16H0z"/><path fill="currentColor" d="M13.25 11.283a.75.75 0 1 1 0 1.5H2.75a.75.75 0 1 1 0-1.5h10.5zM2.282 2.248c.049 0 .097.011.14.033l2.436 1.247c.135.07.182.224.105.345a.269.269 0 0 1-.105.094L2.421 5.214c-.135.07-.307.027-.384-.094A.232.232 0 0 1 2 4.995V2.5c0-.14.126-.252.282-.252zm10.86.785c.474 0 .858.336.858.75 0 .38-.322.694-.74.743l-.117.007H6.857c-.473 0-.857-.336-.857-.75 0-.38.322-.693.74-.743l.117-.007h6.286zm.108 3.75a.75.75 0 1 1 0 1.5H2.75a.75.75 0 0 1 0-1.5h10.5z"/></g></svg>',

        'underline':
            '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"><g fill="none" fill-rule="evenodd"><path d="M0 0h16v16H0z"/><path fill="currentColor" d="M12 12.5a.75.75 0 0 1 .102 1.493L12 14H4a.75.75 0 0 1-.102-1.493L4 12.5h8zm-.75-10.25A.75.75 0 0 1 12 3v4.5a4 4 0 1 1-8 0V3l.007-.102A.75.75 0 0 1 5.5 3v4.5a2.5 2.5 0 0 0 2.336 2.495L8 10a2.5 2.5 0 0 0 2.495-2.336L10.5 7.5V3l.007-.102a.75.75 0 0 1 .743-.648z"/></g></svg>',

        'undo':
            '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"><g fill="none" fill-rule="evenodd"><path d="M0 0h16v16H0z"/><path fill="currentColor" d="M4.898 12.993A.75.75 0 0 1 5 11.5h5a3.5 3.5 0 0 0 .192-6.995L10 4.5H4v.824a.3.3 0 0 1-.472.246L1.351 4.046a.3.3 0 0 1 0-.492L3.528 2.03A.3.3 0 0 1 4 2.276V3L10 3a5 5 0 0 1 0 10H5z"/></g></svg>',

        'unlink':
            '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"><g fill="none" fill-rule="evenodd"><path d="M0 0h16v16H0z"/><path fill="currentColor" d="M10.716 1.406a1.75 1.75 0 0 1 2.35.114l1.414 1.414.114.125a1.75 1.75 0 0 1-.114 2.35L11.36 8.53l-.106.098a1.75 1.75 0 0 1-2.37-.098l-.176-.176-.353.353.176.177.114.125a1.75 1.75 0 0 1-.114 2.35L5.41 14.48l-.125.114a1.75 1.75 0 0 1-2.35-.114L1.52 13.066l-.114-.125a1.75 1.75 0 0 1 .114-2.35L4.64 7.47l.106-.098a1.75 1.75 0 0 1 2.37.098l.176.176.353-.353-.176-.177-.114-.125a1.75 1.75 0 0 1 .114-2.35L10.59 1.52zm-1.087 10.37a.46.46 0 0 1 .461.46v1.303a.46.46 0 0 1-.922 0v-1.303a.46.46 0 0 1 .461-.46zM6.002 8.49a.25.25 0 0 0-.3.04L2.58 11.652l-.041.053a.25.25 0 0 0 .04.3l1.415 1.414.053.041a.25.25 0 0 0 .3-.04l3.122-3.122.036-.045a.25.25 0 0 0-.036-.308l-.177-.177-.884.884-.077.067a.75.75 0 0 1-.984-1.128l.884-.884-.177-.177zm5.166 1.9l1.955 1.954a.46.46 0 0 1-.651.652l-1.955-1.955a.46.46 0 0 1 .651-.652zm2.371-1.222a.46.46 0 0 1 0 .922h-1.303a.46.46 0 1 1 0-.922h1.303zM11.952 2.54a.25.25 0 0 0-.3.04L8.53 5.703l-.036.045a.25.25 0 0 0 .036.308l.177.177.884-.884.077-.067a.75.75 0 0 1 .984 1.128l-.884.884.177.177.053.04a.25.25 0 0 0 .3-.04l3.121-3.122.041-.053a.25.25 0 0 0-.04-.3L12.004 2.58zM3.764 5.91a.46.46 0 1 1 0 .922H2.461a.46.46 0 0 1 0-.922h1.303zm-.416-3.34l1.955 1.954a.46.46 0 1 1-.651.652L2.697 3.221a.46.46 0 0 1 .651-.652zM6.371 2a.46.46 0 0 1 .46.46v1.304a.46.46 0 0 1-.921 0V2.461A.46.46 0 0 1 6.37 2z"/></g></svg>',

        'unordered-list':
            '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"><g fill="none" fill-rule="evenodd"><path d="M0 0h16v16H0z"/><path fill="currentColor" d="M7.032 2.4h6.194c.427 0 .774.358.774.8 0 .442-.347.8-.774.8H7.032a.787.787 0 0 1-.774-.8c0-.442.347-.8.774-.8zm0 4.8h6.194c.427 0 .774.358.774.8 0 .442-.347.8-.774.8H7.032a.787.787 0 0 1-.774-.8c0-.442.347-.8.774-.8zm0 4.8h6.194c.427 0 .774.358.774.8 0 .442-.347.8-.774.8H7.032a.787.787 0 0 1-.774-.8c0-.442.347-.8.774-.8zM2 3.2c0-.331.117-.614.352-.848C2.586 2.117 2.869 2 3.2 2c.331 0 .614.117.848.352.235.234.352.517.352.848 0 .331-.117.614-.352.848A1.156 1.156 0 0 1 3.2 4.4c-.331 0-.614-.117-.848-.352A1.156 1.156 0 0 1 2 3.2zM2 8c0-.331.117-.614.352-.848.234-.235.517-.352.848-.352.331 0 .614.117.848.352.235.234.352.517.352.848 0 .331-.117.614-.352.848A1.156 1.156 0 0 1 3.2 9.2c-.331 0-.614-.117-.848-.352A1.156 1.156 0 0 1 2 8zm0 4.8c0-.331.117-.614.352-.848.234-.235.517-.352.848-.352.331 0 .614.117.848.352.235.234.352.517.352.848 0 .331-.117.614-.352.848A1.156 1.156 0 0 1 3.2 14c-.331 0-.614-.117-.848-.352A1.156 1.156 0 0 1 2 12.8z"/></g></svg>',

        'word-import':
            '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"><g fill="none" fill-rule="evenodd"><path d="M0 0h16v16H0z"/><path fill="currentColor" d="M9.586 1a1 1 0 0 1 .707.293l3.414 3.414a1 1 0 0 1 .293.707V8h-1.5V6.75H9.3a1.05 1.05 0 0 1-1.044-.936L8.25 5.7V2.5H3.5v11H8V15H3a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h6.586zm2.909 8.505a.7.7 0 0 1 .074.903l-.074.087-.757.755H14.5a.75.75 0 0 1 .102 1.493l-.102.007h-2.762l.757.755a.7.7 0 0 1 .074.903l-.074.087a.7.7 0 0 1-.903.074l-.087-.074-2-2a.7.7 0 0 1-.074-.903l.074-.087 2-2a.7.7 0 0 1 .99 0zM5.429 7.5l.674 2.574.788-2.574h.342l.787 2.574.674-2.574H10l-1.286 4H7.392l-.33-.659-.33.659H5.409l-1.285-4h1.305zM9.75 2.871V5.25h2.379L9.75 2.871z"/></g></svg>',

        
    },
});`);

// CONCATENATED MODULE: ./packages/VantopEditor/const/plugins.js
/*
 * @Author: Shixin
 * @Date: 2021-07-19 09:01:09
 * @LastEditors: 蔡远程
 * @LastEditTime: 2021-09-03 09:44:07
 * @Description: Do not edit
 * @FilePath: /vantop-editor/packages/VantopEditor/const/plugins.js
 * 🍻 Write code drunkenly.
 */
const plugins = {
    default: [
        `
          link
          image
          table
          lists
          advlist
          charmap
          media
          fullscreen
          insertdatetime
          quickbars
          formatpainter
          hr
          code
          pagebreak
          emoticons
          importword
          `,
      ],
    simple: [
        `
          link
          lists
          advlist
          quickbars
          formatpainter
          `,
      ]
};

/* harmony default export */ var const_plugins = (plugins);
// CONCATENATED MODULE: ./packages/VantopEditor/const/toolbar.js
/*
 * @Author: Shixin
 * @Date: 2021-07-19 09:01:09
 * @LastEditors: 蔡远程
 * @LastEditTime: 2021-09-03 10:41:33
 * @Description: 富文本工具栏
 * @FilePath: /vantop-editor/packages/VantopEditor/const/toolbar.js
 * 🍻 Write code drunkenly.
 */
const toolbar = {
    default: `
        undo redo formatpainter removeformat |
        formatselect fontselect fontsizeselect |
        bold italic strikethrough underline forecolor backcolor |
        subscript superscript link unlink image code |
        indent outdent align numlist bullist | 
        pagebreak hr emoticons importword insertdatetime charmap media |
        table |
        fullscreen |
    `,
    simple: `
        formatselect |
        bold italic strikethrough underline forecolor backcolor |
        indent outdent align numlist bullist | 
        link formatpainter
    `,
};
// preview
/* harmony default export */ var const_toolbar = (toolbar);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/VantopEditor/src/index.vue?vue&type=script&lang=js&





external_commonjs_vue_commonjs2_vue_root_Vue_default.a.use(components_VueTimyce); // 安装vue的tinymce组件





/* harmony default export */ var srcvue_type_script_lang_js_ = ({
  name: 'TinymceEditor',
  props: {
    // 编辑器文本的内容
    value: {
      type: String,
      default: '',
    },
    // 编辑器配置项
    setting: {
      type: Object,
      default: () => ({}),
    },
    // 上传图片、word 等资源文件 路径
    cdn: {
      type: String,
      default: 'https://nextop-web-static-prod.oss-accelerate.aliyuncs.com/tinymce',
    },
    waitTime: {
        type: Number,
        default: 1000,
    },
    type: {
        type: String,
        default: 'default'
    },
  },
  data() {
    return {
      visible: false,
      timer: null,
      content: '', // 编辑器的内容
      editorSetting: {
        skin: 'vantop-editor',
        skin_url: `${this.cdn}/vantop-editor/skins/ui/vantop-editor`,
        toolbar_mode: 'floating',
        menubar: false, // 是否显示菜单栏
        // 快速工具栏
        quickbars_selection_toolbar: 'removeformat | bold italic strikethrough underline forecolor backcolor',
        language: 'zh_CN', // 语言本地化
        language_url: `${this.cdn}/langs/zh_CN.js`,
        branding: true, // 隐藏右下角技术支持
        elementpath: false, // 隐藏底栏的元素路径
        statusbar: false, // 显示隐藏状态栏
        // default_link_target: '_blank',
        convert_urls: true, // 自动转换URL

        // CONFIG
        indentation: '12px', // 增加缩进
        forced_root_block: 'p',
        force_p_newlines: true,
        importcss_append: true,

        content_css: [
          `${this.cdn}/vantop-editor/skins/content/vantop-editor/content.css`,
          `${this.cdn}/styles/index.css`,
        ],

        insert_button_items: 'image link | inserttable',

        // 多图片上传插件处理
        images_upload_base_path: '/demo',
        images_upload_handler: function (blobInfo, succFun, failFun) {
            var xhr, formData;
            var file = blobInfo.blob();//转化为易于理解的file对象
            xhr = new XMLHttpRequest();
            xhr.withCredentials = false;
            xhr.open('POST', '/demo/upimg2.php');
            xhr.onload = function() {
                var json;
                if (xhr.status != 200) {
                    failFun('HTTP Error: ' + xhr.status);
                    return;
                }
                json = JSON.parse(xhr.responseText);
                if (!json || typeof json.location != 'string') {
                    failFun('Invalid JSON: ' + xhr.responseText);
                    return;
                }
                succFun(json.location);
            };
            formData = new FormData();
            formData.append('file', file, file.name );
            xhr.send(formData);
        },

        // CONFIG: Paste
        paste_retain_style_properties: 'all',
        paste_word_valid_elements: '*[*]', // word需要它
        paste_data_images: true, // 粘贴的同时能把内容里的图片自动上传，非常强力的功能
        paste_convert_word_fake_lists: false, // 插入word文档需要该属性
        paste_webkit_styles: 'all',
        paste_merge_formats: true,
        nonbreaking_force_tab: false,
        paste_auto_cleanup_on_paste: false,

        // CONFIG: Font
        fontsize_formats: '10px 11px 12px 14px 16px 18px 20px 24px',

        // FontSelect
        font_formats: `
                    微软雅黑=微软雅黑;
                    宋体=宋体;
                    黑体=黑体;
                    仿宋=仿宋;
                    楷体=楷体;
                    隶书=隶书;
                    幼圆=幼圆;
                    Andale Mono=andale mono,times;
                    Arial=arial, helvetica,
                    sans-serif;
                    Arial Black=arial black, avant garde;
                    Book Antiqua=book antiqua,palatino;
                    Comic Sans MS=comic sans ms,sans-serif;
                    Courier New=courier new,courier;
                    Georgia=georgia,palatino;
                    Helvetica=helvetica;
                    Impact=impact,chicago;
                    Symbol=symbol;
                    Tahoma=tahoma,arial,helvetica,sans-serif;
                    Terminal=terminal,monaco;
                    Times New Roman=times new roman,times;
                    Trebuchet MS=trebuchet ms,geneva;
                    Verdana=verdana,geneva;
                    Webdings=webdings;
                    Wingdings=wingdings,zapf dingbats
                `,

        // Tab
        tabfocus_elements: ':prev,:next',
        object_resizing: true,

        // Image
        imagetools_toolbar: 'rotateleft rotateright | flipv fliph | editimage imageoptions',

        // CONFIG: Powerpaste
        powerpaste_word_import: 'propmt', // 参数可以是propmt, merge, clear，效果自行切换对比
        powerpaste_html_import: 'propmt', // propmt, merge, clear
        powerpaste_allow_local_images: true,
        // CONFIG: Powerpaste

        image_advtab: true, // 为图像属性编辑窗口添加高级属性，可以自定义图片的css样式（内置style）、边距（margin）和边框（border）。
      },
    };
  },
  watch: {
    value: {
      immediate: true,
      deep: true,
      handler(newValue) {
        this.content = newValue;
      },
    },
    setting: {
      immediate: true,
      deep: true,
      handler() {
        this.editorSetting = {
          ...this.editorSetting,
          ...this.setting,
        };

        this.editorSetting.toolbar = this.setting.toolbar || const_toolbar[this.type]
        this.editorSetting.plugins = this.setting.plugins || const_plugins[this.type];
                   
        // console.log(this.editorSetting);
      },
    },
  },
  created() {
    // 生成 icons 临时文件，并赋值
    const blob = new Blob([icons],{type: 'application/javascript'});
    this.blobUrl = URL.createObjectURL(blob);
    this.editorSetting.icons = 'custom';
    this.editorSetting.icons_url = this.blobUrl;

    
    // this.editorSetting.toolbar = toolbar[this.type];
    // this.editorSetting.plugins = plugins[this.type];
  },
  mounted() {
    utils_dynamicLoadScript(this.cdn + '/tinymce.min.js', (err) => {
      //tinymceCDN代表tinymce的CDN地址，下一个参数是回调方法
      if (err) {
        //若脚本加载错误，这弹出错误提示
        return;
      }
      this.visible = true; //否则执行初始化tinymce方法
    });
  },
  beforeDestroy() {
    clearTimeout(this.timer);
    URL.revokeObjectURL(this.blobUrl);
  },
  methods: {
    change() {
      clearTimeout(this.timer);
      this.timer = setTimeout(() => {
        this.$emit('input', this.content);
      }, this.waitTime);
    },
  },
});

// CONCATENATED MODULE: ./packages/VantopEditor/src/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var VantopEditor_srcvue_type_script_lang_js_ = (srcvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./packages/VantopEditor/src/index.vue?vue&type=style&index=0&id=c412e63a&prod&lang=scss&scoped=true&
var srcvue_type_style_index_0_id_c412e63a_prod_lang_scss_scoped_true_ = __webpack_require__("b9dd");

// EXTERNAL MODULE: ./packages/VantopEditor/src/index.vue?vue&type=style&index=1&id=c412e63a&prod&lang=scss&
var srcvue_type_style_index_1_id_c412e63a_prod_lang_scss_ = __webpack_require__("d3c2");

// CONCATENATED MODULE: ./packages/VantopEditor/src/index.vue







/* normalize component */

var src_component = normalizeComponent(
  VantopEditor_srcvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  "c412e63a",
  null
  
)

/* harmony default export */ var src = (src_component.exports);
// CONCATENATED MODULE: ./packages/index.js
// 导入编辑器组件


/* harmony default export */ var packages_0 = (src);

// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/entry-lib.js


/* harmony default export */ var entry_lib = __webpack_exports__["default"] = (packages_0);



/***/ })

/******/ });
});