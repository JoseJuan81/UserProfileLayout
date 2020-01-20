//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


function created() {
	var this$1 = this;

	this.movil = window.innerWidth <= this.breakPoint;
	window.addEventListener('resize', function () {
		this$1.movil = window.innerWidth <= this$1.breakPoint;
	});
}

function beforeDestroy() {
	window.removeEventListener('resize');
}

function data() {
	return {
		movil: false,
	};
}

var script = {
	name: 'user-profile-layout',
	beforeDestroy: beforeDestroy,
	created: created,
	data: data,
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

var isOldIE = typeof navigator !== 'undefined' &&
    /msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());
function createInjector(context) {
    return function (id, style) { return addStyle(id, style); };
}
var HEAD;
var styles = {};
function addStyle(id, css) {
    var group = isOldIE ? css.media || 'default' : id;
    var style = styles[group] || (styles[group] = { ids: new Set(), styles: [] });
    if (!style.ids.has(id)) {
        style.ids.add(id);
        var code = css.source;
        if (css.map) {
            // https://developer.chrome.com/devtools/docs/javascript-debugging
            // this makes source maps inside style tags work properly in Chrome
            code += '\n/*# sourceURL=' + css.map.sources[0] + ' */';
            // http://stackoverflow.com/a/26603875
            code +=
                '\n/*# sourceMappingURL=data:application/json;base64,' +
                    btoa(unescape(encodeURIComponent(JSON.stringify(css.map)))) +
                    ' */';
        }
        if (!style.element) {
            style.element = document.createElement('style');
            style.element.type = 'text/css';
            if (css.media)
                { style.element.setAttribute('media', css.media); }
            if (HEAD === undefined) {
                HEAD = document.head || document.getElementsByTagName('head')[0];
            }
            HEAD.appendChild(style.element);
        }
        if ('styleSheet' in style.element) {
            style.styles.push(code);
            style.element.styleSheet.cssText = style.styles
                .filter(Boolean)
                .join('\n');
        }
        else {
            var index = style.ids.size - 1;
            var textNode = document.createTextNode(code);
            var nodes = style.element.childNodes;
            if (nodes[index])
                { style.element.removeChild(nodes[index]); }
            if (nodes.length)
                { style.element.insertBefore(textNode, nodes[index]); }
            else
                { style.element.appendChild(textNode); }
        }
    }
}

/* script */
var __vue_script__ = script;

/* template */
var __vue_render__ = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("div", { staticClass: "layout-main-container" }, [
    _c("div", { staticClass: "container-layout" }, [
      _c(
        "aside",
        {
          directives: [
            {
              name: "show",
              rawName: "v-show",
              value: !_vm.movil,
              expression: "!movil"
            }
          ],
          staticClass: "aside-container"
        },
        [_vm._t("aside")],
        2
      ),
      _vm._v(" "),
      _c(
        "section",
        { staticClass: "section-container" },
        [_vm._t("main-content")],
        2
      )
    ]),
    _vm._v(" "),
    _c(
      "div",
      { class: ["menu-movil", { "show-menu-movil": _vm.show && _vm.movil }] },
      [_vm._t("menu-movil")],
      2
    )
  ])
};
var __vue_staticRenderFns__ = [];
__vue_render__._withStripped = true;

  /* style */
  var __vue_inject_styles__ = function (inject) {
    if (!inject) { return }
    inject("data-v-6e99e873_0", { source: ".layout-main-container[data-v-6e99e873] {\n  height: 100%;\n}\n.container-layout[data-v-6e99e873] {\n  align-items: flex-start;\n  display: flex;\n  justify-content: flex-start;\n}\n.aside-container[data-v-6e99e873] {\n  flex-basis: 17%;\n}\n.section-container[data-v-6e99e873] {\n  flex-basis: auto;\n  flex-grow: 1;\n}\n.menu-movil[data-v-6e99e873] {\n  background-color: white;\n  bottom: 0;\n  left: -110%;\n  position: absolute;\n  top: 0;\n  transition: left 200ms ease-in-out;\n  z-index: 99;\n}\n.show-menu-movil[data-v-6e99e873] {\n  left: 0%;\n}\n\n/*# sourceMappingURL=UserProfileLayout.vue.map */", map: {"version":3,"sources":["/home/dobu/Documentos/JJ/Desarrollo/proyectos/componentes/UserProfileLayout/src/components/UserProfileLayout.vue","UserProfileLayout.vue"],"names":[],"mappings":"AA0DA;EACA,YAAA;ACzDA;AD4DA;EACA,uBAAA;EACA,aAAA;EACA,2BAAA;ACzDA;AD4DA;EACA,eAAA;ACzDA;AD4DA;EACA,gBAAA;EACA,YAAA;ACzDA;AD4DA;EACA,uBAAA;EACA,SAAA;EACA,WAAA;EACA,kBAAA;EACA,MAAA;EACA,kCAAA;EACA,WAAA;ACzDA;AD4DA;EACA,QAAA;ACzDA;;AAEA,gDAAgD","file":"UserProfileLayout.vue","sourcesContent":["<template>\n\t<div class=\"layout-main-container\">\n\t\t<div class=\"container-layout\">\n\t\t\t<aside class=\"aside-container\" v-show=\"!movil\">\n\t\t\t\t<slot name=\"aside\"></slot>\n\t\t\t</aside>\n\t\t\t<section class=\"section-container\">\n\t\t\t\t<slot name=\"main-content\"></slot>\n\t\t\t</section>\n\t\t</div>\n\t\t<div\n\t\t\t:class=\"[\n\t\t\t\t'menu-movil',\n\t\t\t\t{ 'show-menu-movil': show && movil },\n\t\t\t]\"\n\t\t>\n\t\t\t<slot name=\"menu-movil\"></slot>\n\t\t</div>\n\t</div>\n</template>\n<script>\n\nfunction created() {\n\tthis.movil = window.innerWidth <= this.breakPoint;\n\twindow.addEventListener('resize', () => {\n\t\tthis.movil = window.innerWidth <= this.breakPoint;\n\t});\n}\n\nfunction beforeDestroy() {\n\twindow.removeEventListener('resize');\n}\n\nfunction data() {\n\treturn {\n\t\tmovil: false,\n\t};\n}\n\nexport default {\n\tname: 'user-profile-layout',\n\tbeforeDestroy,\n\tcreated,\n\tdata,\n\tprops: {\n\t\tbreakPoint: {\n\t\t\tdefault: 768,\n\t\t\ttype: Number,\n\t\t},\n\t\tshow: {\n\t\t\tdefault: false,\n\t\t\ttype: Boolean,\n\t\t},\n\t},\n};\n</script>\n\n<style lang=\"scss\" scoped>\n\t.layout-main-container {\n\t\theight: 100%;\n\t}\n\n\t.container-layout {\n\t\talign-items: flex-start;\n\t\tdisplay: flex;\n\t\tjustify-content: flex-start;\n\t}\n\n\t.aside-container {\n\t\tflex-basis: 17%;\n\t}\n\n\t.section-container {\n\t\tflex-basis: auto;\n\t\tflex-grow: 1;\n\t}\n\n\t.menu-movil {\n\t\tbackground-color: white;\n\t\tbottom: 0;\n\t\tleft: -110%;\n\t\tposition: absolute;\n\t\ttop: 0;\n\t\ttransition: left 200ms ease-in-out;\n\t\tz-index: 99\n\t}\n\n\t.show-menu-movil {\n\t\tleft: 0%;\n\t}\n</style>\n",".layout-main-container {\n  height: 100%;\n}\n\n.container-layout {\n  align-items: flex-start;\n  display: flex;\n  justify-content: flex-start;\n}\n\n.aside-container {\n  flex-basis: 17%;\n}\n\n.section-container {\n  flex-basis: auto;\n  flex-grow: 1;\n}\n\n.menu-movil {\n  background-color: white;\n  bottom: 0;\n  left: -110%;\n  position: absolute;\n  top: 0;\n  transition: left 200ms ease-in-out;\n  z-index: 99;\n}\n\n.show-menu-movil {\n  left: 0%;\n}\n\n/*# sourceMappingURL=UserProfileLayout.vue.map */"]}, media: undefined });

  };
  /* scoped */
  var __vue_scope_id__ = "data-v-6e99e873";
  /* module identifier */
  var __vue_module_identifier__ = undefined;
  /* functional template */
  var __vue_is_functional_template__ = false;
  /* style inject SSR */
  
  /* style inject shadow dom */
  

  
  var __vue_component__ = normalizeComponent(
    { render: __vue_render__, staticRenderFns: __vue_staticRenderFns__ },
    __vue_inject_styles__,
    __vue_script__,
    __vue_scope_id__,
    __vue_is_functional_template__,
    __vue_module_identifier__,
    false,
    createInjector,
    undefined,
    undefined
  );

function install(Vue) {
	if (install.intalled) { return; }
	install.installed = true;
	Vue.component('user-profile-layout', __vue_component__);
}

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

export default __vue_component__;
export { install };
