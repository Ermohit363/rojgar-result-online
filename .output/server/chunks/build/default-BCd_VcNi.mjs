import { ref, mergeProps, withCtx, createVNode, createTextVNode, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderSlot, ssrRenderAttr, ssrRenderList, ssrInterpolate } from 'vue/server-renderer';
import { _ as __nuxt_component_0 } from './nuxt-link-BFAFMVM7.mjs';
import { p as publicAssetsURL } from '../nitro/nitro.mjs';
import { useRoute } from 'vue-router';
import { u as useHead, a as useRuntimeConfig } from './server.mjs';
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
import '@unhead/addons';
import '@unhead/schema-org/vue';

const _imports_0 = publicAssetsURL("/rojgar-result-online-new.png");
const _sfc_main$2 = {
  __name: "Header",
  __ssrInlineRender: true,
  setup(__props) {
    const categories = ["Latest Jobs", "Admit Card", "Result", "Answer Key", "Syllabus"];
    const slugify = (s) => s.toLowerCase().replace(/\s+/g, "-");
    const mobileOpen = ref(false);
    const isDark = ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<header${ssrRenderAttrs(mergeProps({ class: "bg-amber-500 dark:bg-amber-600 text-white shadow-md" }, _attrs))}><div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center py-4">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/",
        class: "text-xl font-bold hover:text-gray-800 transition flex items-center",
        target: "_blank"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<img${ssrRenderAttr("src", _imports_0)} alt="rojgar result online" class="h-16 w-auto mr-3"${_scopeId}>`);
          } else {
            return [
              createVNode("img", {
                src: _imports_0,
                alt: "rojgar result online",
                class: "h-16 w-auto mr-3"
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<nav class="hidden md:flex space-x-4 text-sm sm:text-base items-center">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/",
        class: "font-semibold hover:text-gray-800 transition",
        target: "_blank"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Home`);
          } else {
            return [
              createTextVNode("Home")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<!--[-->`);
      ssrRenderList(categories, (c) => {
        _push(ssrRenderComponent(_component_NuxtLink, {
          key: c,
          to: `/category/${slugify(c)}`,
          class: "font-semibold hover:text-gray-800 transition",
          target: "_blank"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(c)}`);
            } else {
              return [
                createTextVNode(toDisplayString(c), 1)
              ];
            }
          }),
          _: 2
        }, _parent));
      });
      _push(`<!--]-->`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/contact",
        class: "font-semibold hover:text-gray-800 transition",
        target: "_blank"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Contact`);
          } else {
            return [
              createTextVNode("Contact")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<button class="ml-4 p-1 rounded hover:bg-white/20 transition">`);
      if (!isDark.value) {
        _push(`<span>\u{1F319}</span>`);
      } else {
        _push(`<span>\u2600\uFE0F</span>`);
      }
      _push(`</button></nav><div class="md:hidden flex items-center"><button class="p-2 rounded hover:bg-white/20 transition">`);
      if (!mobileOpen.value) {
        _push(`<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>`);
      } else {
        _push(`<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>`);
      }
      _push(`</button></div></div>`);
      if (mobileOpen.value) {
        _push(`<div class="md:hidden bg-amber-500 dark:bg-gray-900 px-4 pb-4 space-y-2"><!--[-->`);
        ssrRenderList(categories, (c) => {
          _push(ssrRenderComponent(_component_NuxtLink, {
            key: c,
            to: `/category/${slugify(c)}`,
            class: "block text-white hover:text-blue-300 transition",
            onClick: ($event) => mobileOpen.value = false
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`${ssrInterpolate(c)}`);
              } else {
                return [
                  createTextVNode(toDisplayString(c), 1)
                ];
              }
            }),
            _: 2
          }, _parent));
        });
        _push(`<!--]-->`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: "/contact",
          class: "block text-white hover:text-blue-300 transition",
          onClick: ($event) => mobileOpen.value = false
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` Contact `);
            } else {
              return [
                createTextVNode(" Contact ")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`<button class="mt-2 w-full p-2 rounded bg-white/10 hover:bg-white/20 transition text-white">`);
        if (!isDark.value) {
          _push(`<span>\u{1F319} Dark Mode</span>`);
        } else {
          _push(`<span>\u2600\uFE0F Light Mode</span>`);
        }
        _push(`</button></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</header>`);
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Header.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const siteName = "Rojgar Result Online";
const _sfc_main$1 = {
  __name: "Footer",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<footer${ssrRenderAttrs(mergeProps({ class: "bg-amber-500 dark:bg-amber-600 text-white mt-12" }, _attrs))}><div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col md:flex-row justify-between items-center"><p class="text-sm sm:text-base">\xA9 ${ssrInterpolate((/* @__PURE__ */ new Date()).getFullYear())} ${ssrInterpolate(siteName)}. All rights reserved.</p><div class="mt-2 md:mt-0 space-x-4 text-sm sm:text-base">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/about",
        class: "hover:text-gray-800 transition",
        target: "_blank"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`About`);
          } else {
            return [
              createTextVNode("About")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/contact",
        class: "hover:text-gray-800 transition",
        target: "_blank"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Contact`);
          } else {
            return [
              createTextVNode("Contact")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/privacy-policy",
        class: "hover:text-gray-800 transition",
        target: "_blank"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Privacy Policy`);
          } else {
            return [
              createTextVNode("Privacy Policy")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/disclaimer",
        class: "hover:text-gray-800 transition",
        target: "_blank"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Disclaimer`);
          } else {
            return [
              createTextVNode("Disclaimer")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></footer>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Footer.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = {
  __name: "default",
  __ssrInlineRender: true,
  setup(__props) {
    const route = useRoute();
    const isDark = ref(false);
    useHead({
      title: "Rojgar Result Online : RojgarResultOnline.Com | Latest Jobs | Naukari | Result | Admit Card | Answer Key | Syllabus | Daily Current Affairs",
      meta: [
        { name: "description", content: "Rojgar Result Online provides Sarkari Result, Govt Job Alerts, Rojgar Result, Admit Card, Results, Answer Keys, Daily Current Affairs, Syllabus and more updates for 2025." },
        //{ property: 'og:title', content: 'Rojgar Result Online - Sarkari Result Online & Govt Job Updates' },
        // { property: 'og:description', content: 'Get latest Rojgar Result Online updates including Rojgar Result, Sarkari Results, Govt Jobs, Admit Cards, Daily Current Affairs and Recruitment 2025 notifications.' },
        { property: "og:site_name", content: "Rojgar Result Online" },
        { property: "og:url", content: `${useRuntimeConfig().public.baseUrl}` },
        { hid: "og:image", property: "og:image", content: "https://www.rojgarresultonline.com/rojgar-result-online-new.png" },
        { hid: "og:image:width", property: "og:image:width", content: "1200" },
        { hid: "og:image:height", property: "og:image:height", content: "630" },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:title", content: "Rojgar Result Online - Sarkari Result Online & Govt Job Updates" },
        { name: "twitter:description", content: "Get latest Rojgar Result Online updates including Rojgar Result, Sarkari Results, Govt Jobs, Admit Cards, Daily Current Affairs and Recruitment 2025 notifications." },
        { name: "twitter:image", content: "https://www.rojgarresultonline.com/rojgar-result-online-new.png" },
        { name: "google-site-verification", content: "nAu6Mw-j_7wsDOkPoBtw2GCnn7pl9JMxkLOH7jMBEKI" }
      ],
      link: [{ rel: "canonical", href: "https://www.rojgarresultonline.com" + route.path }]
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: [{ dark: isDark.value }, "flex flex-col min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300"]
      }, _attrs))}>`);
      _push(ssrRenderComponent(_sfc_main$2, null, null, _parent));
      _push(`<main class="flex-1 max-w-7xl mx-auto px-4 py-8">`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</main>`);
      _push(ssrRenderComponent(_sfc_main$1, null, null, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/default.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=default-BCd_VcNi.mjs.map
