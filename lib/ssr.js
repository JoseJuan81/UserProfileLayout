'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


function mounted() {
	this.movil = window.innerWidth <= this.breakPoint;
	window.addEventListener('resize', this.handlerResize);
}

function beforeDestroy() {
	window.removeEventListener('resize', this.handlerResize);
}

function handlerResize() {
	this.movil = window.innerWidth <= this.breakPoint;
}

function data() {
	return {
		movil: false,
	};
}

var script = {
	name: 'user-profile-layout',
	beforeDestroy: beforeDestroy,
	data: data,
	methods: {
		handlerResize: handlerResize,
	},
	mounted: mounted,
	props: {
		breakPoint: {
			default: 768,
			type: Number,
		},
		show: {
			default: false,
			type: Boolean,
		},
	},
};

function normalizeComponent(template, style, script, scopeId, isFunctionalTemplate, moduleIdentifier /* server only */, shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
    if (typeof shadowMode !== 'boolean') {
        createInjectorSSR = createInjector;
        createInjector = shadowMode;
        shadowMode = false;
    }
    // Vue.extend constructor export interop.
    var options = typeof script === 'function' ? script.options : script;
    // render functions
    if (template && template.render) {
        options.render = template.render;
        options.staticRenderFns = template.staticRenderFns;
        options._compiled = true;
        // functional template
        if (isFunctionalTemplate) {
            options.functional = true;
        }
    }
    // scopedId
    if (scopeId) {
        options._scopeId = scopeId;
    }
    var hook;
    if (moduleIdentifier) {
        // server build
        hook = function (context) {
            // 2.3 injection
            context =
                context || // cached call
                    (this.$vnode && this.$vnode.ssrContext) || // stateful
                    (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext); // functional
            // 2.2 with runInNewContext: true
            if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
                context = __VUE_SSR_CONTEXT__;
            }
            // inject component styles
            if (style) {
                style.call(this, createInjectorSSR(context));
            }
            // register component module identifier for async chunk inference
            if (context && context._registeredComponents) {
                context._registeredComponents.add(moduleIdentifier);
            }
        };
        // used by ssr in case component is cached and beforeCreate
        // never gets called
        options._ssrRegister = hook;
    }
    else if (style) {
        hook = shadowMode
            ? function (context) {
                style.call(this, createInjectorShadow(context, this.$root.$options.shadowRoot));
            }
            : function (context) {
                style.call(this, createInjector(context));
            };
    }
    if (hook) {
        if (options.functional) {
            // register for functional component in vue file
            var originalRender = options.render;
            options.render = function renderWithStyleInjection(h, context) {
                hook.call(context);
                return originalRender(h, context);
            };
        }
        else {
            // inject component registration as beforeCreate hook
            var existing = options.beforeCreate;
            options.beforeCreate = existing ? [].concat(existing, hook) : [hook];
        }
    }
    return script;
}

function createInjectorSSR(context) {
    if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__;
    }
    if (!context)
        { return function () { }; }
    if (!('styles' in context)) {
        context._styles = context._styles || {};
        Object.defineProperty(context, 'styles', {
            enumerable: true,
            get: function () { return context._renderStyles(context._styles); }
        });
        context._renderStyles = context._renderStyles || renderStyles;
    }
    return function (id, style) { return addStyle(id, style, context); };
}
function addStyle(id, css, context) {
    var group = process.env.NODE_ENV === 'production' ? css.media || 'default' : id;
    var style = context._styles[group] || (context._styles[group] = { ids: [], css: '' });
    if (!style.ids.includes(id)) {
        style.media = css.media;
        style.ids.push(id);
        var code = css.source;
        if (process.env.NODE_ENV !== 'production' && css.map) {
            // https://developer.chrome.com/devtools/docs/javascript-debugging
            // this makes source maps inside style tags work properly in Chrome
            code += '\n/*# sourceURL=' + css.map.sources[0] + ' */';
            // http://stackoverflow.com/a/26603875
            code +=
                '\n/*# sourceMappingURL=data:application/json;base64,' +
                    Buffer.from(unescape(encodeURIComponent(JSON.stringify(css.map)))).toString('base64') +
                    ' */';
        }
        style.css += code + '\n';
    }
}
function renderStyles(styles) {
    var css = '';
    for (var key in styles) {
        var style = styles[key];
        css +=
            '<style data-vue-ssr-id="' +
                Array.from(style.ids).join(' ') +
                '"' +
                (style.media ? ' media="' + style.media + '"' : '') +
                '>' +
                style.css +
                '</style>';
    }
    return css;
}

/* script */
var __vue_script__ = script;

/* template */
var __vue_render__ = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c(
    "div",
    { staticClass: "dl-layout-main-container" },
    [
      _vm._ssrNode(
        '<div class="dl-container-layout">',
        "</div>",
        [
          _vm._ssrNode(
            '<aside class="dl-aside-container"' +
              _vm._ssrStyle(null, null, { display: !_vm.movil ? "" : "none" }) +
              ">",
            "</aside>",
            [_vm._t("asideLeft")],
            2
          ),
          _vm._ssrNode(" "),
          _vm._ssrNode(
            '<section class="dl-section-container">',
            "</section>",
            [_vm._t("main-content")],
            2
          ),
          _vm._ssrNode(" "),
          _vm._ssrNode(
            '<aside class="dl-aside-container"' +
              _vm._ssrStyle(null, null, { display: !_vm.movil ? "" : "none" }) +
              ">",
            "</aside>",
            [_vm._t("asideRight")],
            2
          )
        ],
        2
      ),
      _vm._ssrNode(" "),
      _vm._ssrNode(
        "<div" +
          _vm._ssrClass(null, [
            "dl-menu-movil",
            { "dl-show-menu-movil": _vm.show && _vm.movil }
          ]) +
          ">",
        "</div>",
        [_vm._t("menu-movil")],
        2
      )
    ],
    2
  )
};
var __vue_staticRenderFns__ = [];
__vue_render__._withStripped = true;

  /* style */
  var __vue_inject_styles__ = function (inject) {
    if (!inject) { return }
    inject("data-v-7fd70d03_0", { source: ".dl-layout-main-container {\n  height: 100%;\n}\n.dl-menu-movil {\n  bottom: 0;\n  left: -110%;\n  position: absolute;\n  top: 0;\n  transition: left 200ms ease-in-out;\n  z-index: 99;\n}\n.dl-show-menu-movil {\n  left: 0%;\n}\n\n/*# sourceMappingURL=user-profile-layout.vue.map */", map: {"version":3,"sources":["/Users/frontend/Documents/JJ/dl-components/my-components/UserProfileLayout/src/components/user-profile-layout.vue","user-profile-layout.vue"],"names":[],"mappings":"AAkEA;EACA,YAAA;ACjEA;ADoEA;EACA,SAAA;EACA,WAAA;EACA,kBAAA;EACA,MAAA;EACA,kCAAA;EACA,WAAA;ACjEA;ADoEA;EACA,QAAA;ACjEA;;AAEA,kDAAkD","file":"user-profile-layout.vue","sourcesContent":["<template>\n\t<div class=\"dl-layout-main-container\">\n\t\t<div class=\"dl-container-layout\">\n\t\t\t<aside class=\"dl-aside-container\" v-show=\"!movil\">\n\t\t\t\t<slot name=\"asideLeft\"></slot>\n\t\t\t</aside>\n\t\t\t<section class=\"dl-section-container\">\n\t\t\t\t<slot name=\"main-content\"></slot>\n\t\t\t</section>\n\t\t\t<aside class=\"dl-aside-container\" v-show=\"!movil\">\n\t\t\t\t<slot name=\"asideRight\"></slot>\n\t\t\t</aside>\n\t\t</div>\n\t\t<div\n\t\t\t:class=\"[\n\t\t\t\t'dl-menu-movil',\n\t\t\t\t{ 'dl-show-menu-movil': show && movil },\n\t\t\t]\"\n\t\t>\n\t\t\t<slot name=\"menu-movil\"></slot>\n\t\t</div>\n\t</div>\n</template>\n<script>\n\nfunction mounted() {\n\tthis.movil = window.innerWidth <= this.breakPoint;\n\twindow.addEventListener('resize', this.handlerResize);\n}\n\nfunction beforeDestroy() {\n\twindow.removeEventListener('resize', this.handlerResize);\n}\n\nfunction handlerResize() {\n\tthis.movil = window.innerWidth <= this.breakPoint;\n}\n\nfunction data() {\n\treturn {\n\t\tmovil: false,\n\t};\n}\n\nexport default {\n\tname: 'user-profile-layout',\n\tbeforeDestroy,\n\tdata,\n\tmethods: {\n\t\thandlerResize,\n\t},\n\tmounted,\n\tprops: {\n\t\tbreakPoint: {\n\t\t\tdefault: 768,\n\t\t\ttype: Number,\n\t\t},\n\t\tshow: {\n\t\t\tdefault: false,\n\t\t\ttype: Boolean,\n\t\t},\n\t},\n};\n</script>\n\n<style lang=\"scss\">\n\t.dl-layout-main-container {\n\t\theight: 100%;\n\t}\n\n\t.dl-menu-movil {\n\t\tbottom: 0;\n\t\tleft: -110%;\n\t\tposition: absolute;\n\t\ttop: 0;\n\t\ttransition: left 200ms ease-in-out;\n\t\tz-index: 99;\n\t}\n\n\t.dl-show-menu-movil {\n\t\tleft: 0%;\n\t}\n</style>\n",".dl-layout-main-container {\n  height: 100%;\n}\n\n.dl-menu-movil {\n  bottom: 0;\n  left: -110%;\n  position: absolute;\n  top: 0;\n  transition: left 200ms ease-in-out;\n  z-index: 99;\n}\n\n.dl-show-menu-movil {\n  left: 0%;\n}\n\n/*# sourceMappingURL=user-profile-layout.vue.map */"]}, media: undefined });

  };
  /* scoped */
  var __vue_scope_id__ = undefined;
  /* module identifier */
  var __vue_module_identifier__ = "data-v-7fd70d03";
  /* functional template */
  var __vue_is_functional_template__ = false;
  /* style inject shadow dom */
  

  
  var __vue_component__ = normalizeComponent(
    { render: __vue_render__, staticRenderFns: __vue_staticRenderFns__ },
    __vue_inject_styles__,
    __vue_script__,
    __vue_scope_id__,
    __vue_is_functional_template__,
    __vue_module_identifier__,
    false,
    undefined,
    createInjectorSSR,
    undefined
  );

var install = function install(Vue) {
	if (install.intalled) { return; }
	install.installed = true;
	Vue.component(__vue_component__.name, __vue_component__);
};

__vue_component__.install = install;

var plugin = {
	install: install,
};

var GlobalVue = null;
if (typeof window !== 'undefined') {
	GlobalVue = window.Vue;
} else if (typeof global !== 'undefined') {
	GlobalVue = global.Vue;
}

if (GlobalVue) {
	GlobalVue.use(plugin);
}

exports.default = __vue_component__;
