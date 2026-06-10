import { _ as __nuxt_component_0 } from './nuxt-link-BFAFMVM7.mjs';
import { withAsyncContext, computed, mergeProps, withCtx, createTextVNode, toDisplayString, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderList, ssrRenderComponent, ssrInterpolate } from 'vue/server-renderer';
import { useRoute } from 'vue-router';
import { u as useAsyncData, q as queryCollection } from './app-D-ip-D3C.mjs';
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
import '@unhead/addons';
import '@unhead/schema-org/vue';
import 'perfect-debounce';

const perPage = 10;
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const { data: currentAffairs } = ([__temp, __restore] = withAsyncContext(() => useAsyncData(
      "currentAffairs",
      () => queryCollection("currentAffairs").all()
    )), __temp = await __temp, __restore(), __temp);
    const grouped = computed(() => {
      return (currentAffairs.value || []).reduce((acc, item) => {
        if (!acc[item.meta.date]) acc[item.meta.date] = [];
        acc[item.meta.date].push(item);
        return acc;
      }, {});
    });
    const sortedDates = computed(
      () => Object.keys(grouped.value).sort((a, b) => b.localeCompare(a))
    );
    const route = useRoute();
    const page = parseInt(route.query.page || "1");
    const start = (page - 1) * perPage;
    const pagedDates = computed(
      () => sortedDates.value.slice(start, start + perPage)
    );
    const hasMore = computed(() => sortedDates.value.length > start + perPage);
    const formatDate = (d) => new Date(d).toLocaleDateString("en-GB", {
      day: "numeric",
      month: "long",
      year: "numeric"
    });
    const slugifyDate = (d) => formatDate(d).toLowerCase().replace(/\s+/g, "-");
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "container mx-auto px-4 py-8" }, _attrs))}><h1 class="text-2xl font-bold mb-6">Current Affairs</h1><div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"><!--[-->`);
      ssrRenderList(pagedDates.value, (date) => {
        _push(`<div class="bg-white dark:bg-gray-900 border rounded-lg p-4 shadow hover:shadow-lg transition">`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: `/current-affair/${slugifyDate(date)}`,
          class: "block text-lg font-semibold text-blue-600 dark:text-blue-400 hover:underline"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(formatDate(date))} Current Affair `);
            } else {
              return [
                createTextVNode(toDisplayString(formatDate(date)) + " Current Affair ", 1)
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`<p class="text-gray-600 dark:text-gray-400 mt-2"> Daily Top 10 Current Affairs </p></div>`);
      });
      _push(`<!--]--></div><div class="mt-6 flex justify-between">`);
      if (unref(page) > 1) {
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: `/current-affair?page=${unref(page) - 1}`,
          class: "text-blue-600 dark:text-blue-400 hover:underline"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` Previous `);
            } else {
              return [
                createTextVNode(" Previous ")
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
          to: `/current-affair?page=${unref(page) + 1}`,
          class: "text-blue-600 dark:text-blue-400 hover:underline ml-auto"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` Next `);
            } else {
              return [
                createTextVNode(" Next ")
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/current-affair/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-iSlsQtow.mjs.map
