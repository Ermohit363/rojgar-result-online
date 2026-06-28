import { _ as __nuxt_component_0 } from './nuxt-link-BFAFMVM7.mjs';
import { withAsyncContext, computed, watchEffect, mergeProps, withCtx, createTextVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderList, ssrRenderComponent } from 'vue/server-renderer';
import { _ as _sfc_main$1 } from './PostCard-wmr4lSaZ.mjs';
import { u as useAsyncData, q as queryCollection } from './app-D-ip-D3C.mjs';
import { b as useRoute, c as createError, a as useRuntimeConfig, u as useHead } from './server.mjs';
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
import 'perfect-debounce';
import 'vue-router';
import '@unhead/addons';
import '@unhead/schema-org/vue';

const perPage = 10;
const _sfc_main = {
  __name: "[slug]",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const config = useRuntimeConfig();
    const route = useRoute();
    const { data: posts } = ([__temp, __restore] = withAsyncContext(() => useAsyncData(
      "posts",
      () => queryCollection("posts").all()
    )), __temp = await __temp, __restore(), __temp);
    const slug = computed(() => route.params.slug);
    const page = computed(() => parseInt(route.query.page || "1"));
    const categoryName = computed(
      () => slug.value.replace(/-/g, " ").replace(/\b\w/g, (l) => l.toUpperCase())
    );
    const filtered = computed(
      () => (posts.value || []).filter(
        (p) => {
          var _a;
          return ((_a = p.meta.category) == null ? void 0 : _a.toLowerCase().replace(/\s+/g, "-")) === slug.value;
        }
      ).sort((a, b) => {
        var _a, _b;
        const dateA = new Date(((_a = a.meta) == null ? void 0 : _a.date) || 0);
        const dateB = new Date(((_b = b.meta) == null ? void 0 : _b.date) || 0);
        return dateB - dateA;
      })
    );
    const start = computed(() => (page.value - 1) * perPage);
    const paged = computed(() => filtered.value.slice(start.value, start.value + perPage));
    const hasMore = computed(() => filtered.value.length > start.value + perPage);
    watchEffect(() => {
      if (posts.value && !filtered.value.length) {
        throw createError({ statusCode: 404, statusMessage: "Category not found" });
      }
    });
    const title = computed(() => `${categoryName.value} - ${config.public.siteName}`);
    const description = computed(() => `Posts in ${categoryName.value}`);
    const ogTitle = computed(() => `${categoryName.value} - ${config.public.siteName}`);
    const ogDescription = computed(() => `Posts in ${categoryName.value}`);
    const ogUrl = computed(() => `${config.public.baseUrl}/category/${slug.value}`);
    const canonicalUrl = computed(() => `${config.public.baseUrl}/category/${slug.value}`);
    useHead({
      title,
      meta: [
        { name: "description", content: description.value },
        { property: "og:title", content: ogTitle.value },
        { property: "og:description", content: ogDescription.value },
        { property: "og:url", content: ogUrl.value }
      ],
      link: [
        { rel: "canonical", href: canonicalUrl.value }
      ]
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "max-w-7xl mx-auto w-full px-4 py-8" }, _attrs))}><h1 class="text-2xl font-bold mb-6"> Category: ${ssrInterpolate(categoryName.value)}</h1><div class="space-y-4"><!--[-->`);
      ssrRenderList(paged.value, (p) => {
        _push(ssrRenderComponent(_sfc_main$1, {
          key: p.id,
          post: p
        }, null, _parent));
      });
      _push(`<!--]--></div><div class="mt-8 flex justify-between items-center">`);
      if (page.value > 1) {
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: `/category/${slug.value}?page=${page.value - 1}`,
          class: "px-4 py-2 bg-amber-500 text-white rounded hover:bg-amber-600 transition"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` \u2190 Previous `);
            } else {
              return [
                createTextVNode(" \u2190 Previous ")
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<!---->`);
      }
      if (hasMore.value) {
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: `/category/${slug.value}?page=${page.value + 1}`,
          class: "px-4 py-2 bg-amber-500 text-white rounded hover:bg-amber-600 transition ml-auto"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` Next \u2192 `);
            } else {
              return [
                createTextVNode(" Next \u2192 ")
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/category/[slug].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=_slug_-BWLTJV_k.mjs.map
