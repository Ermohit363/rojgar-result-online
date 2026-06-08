import { _ as __nuxt_component_0 } from './nuxt-link-BFAFMVM7.mjs';
import { mergeProps, withCtx, createTextVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderComponent } from 'vue/server-renderer';
import '../nitro/nitro.mjs';
import 'lru-cache';
import '@unocss/core';
import '@unocss/preset-wind3';
import 'devalue';
import 'consola';
import 'unhead';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import 'node:url';
import 'unhead/server';
import 'unhead/plugins';
import 'unhead/utils';
import 'vue-bundle-renderer/runtime';
import 'better-sqlite3';
import './server.mjs';
import 'vue-router';
import '@unhead/addons';
import '@unhead/schema-org/vue';

const _sfc_main = {
  __name: "404",
  __ssrInlineRender: true,
  props: {
    error: {
      type: Object,
      required: true
    }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "min-h-screen flex flex-col items-center justify-center text-center px-4" }, _attrs))}><h1 class="text-6xl font-bold text-red-600">${ssrInterpolate(__props.error.statusCode)}</h1><p class="text-xl mt-4">${ssrInterpolate(__props.error.statusMessage || "Page not found")}</p>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/",
        class: "mt-6 text-blue-600 hover:underline"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Go back home `);
          } else {
            return [
              createTextVNode(" Go back home ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</section>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/404.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=404-cUU62QQh.mjs.map
