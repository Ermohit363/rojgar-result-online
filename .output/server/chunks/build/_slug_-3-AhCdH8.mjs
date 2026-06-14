import { _ as _sfc_main$1 } from './ContentRenderer-CTwdfSYa.mjs';
import { withAsyncContext, computed, mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr } from 'vue/server-renderer';
import { u as useAsyncData, q as queryCollection } from './app-D-ip-D3C.mjs';
import { b as useRoute, u as useHead, d as useRequestEvent } from './server.mjs';
import { ah as getRequestURL } from '../nitro/nitro.mjs';
import 'property-information';
import 'minimark/hast';
import 'perfect-debounce';
import 'vue-router';
import '@unhead/addons';
import 'unhead/plugins';
import '@unhead/schema-org/vue';
import 'devalue';
import 'lru-cache';
import '@unocss/core';
import '@unocss/preset-wind3';
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
import 'unhead/utils';
import 'vue-bundle-renderer/runtime';
import 'better-sqlite3';

function useRequestURL(opts) {
  {
    return getRequestURL(useRequestEvent(), opts);
  }
}
const _sfc_main = {
  __name: "[slug]",
  __ssrInlineRender: true,
  async setup(__props) {
    var _a;
    let __temp, __restore;
    const route = useRoute();
    const url = useRequestURL();
    const slug = route.params.slug;
    const { data: currentAffairs } = ([__temp, __restore] = withAsyncContext(() => useAsyncData(
      "currentAffairs",
      () => queryCollection("currentAffairs").all()
    )), __temp = await __temp, __restore(), __temp);
    const dateStr = computed(() => {
      const [day, month, year] = slug.replace("-current-affair", "").split("-");
      const monthMap = {
        january: "01",
        february: "02",
        march: "03",
        april: "04",
        may: "05",
        june: "06",
        july: "07",
        august: "08",
        september: "09",
        october: "10",
        november: "11",
        december: "12"
      };
      const mm = monthMap[month.toLowerCase()];
      return `${year}-${mm}-${day.padStart(2, "0")}`;
    });
    const doc = computed(
      () => {
        var _a2;
        return (_a2 = currentAffairs.value) == null ? void 0 : _a2.find((a) => a.meta.date === dateStr.value);
      }
    );
    const pageTitle = computed(
      () => {
        var _a2;
        return ((_a2 = doc.value) == null ? void 0 : _a2.title) || `${dateStr.value} Current Affair`;
      }
    );
    const currentUrl = computed(() => url.href);
    useHead({
      title: pageTitle.value,
      meta: [{ name: "description", content: ((_a = doc.value) == null ? void 0 : _a.title) || "" }]
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ContentRenderer = _sfc_main$1;
      if (doc.value) {
        _push(`<article${ssrRenderAttrs(mergeProps({ class: "max-w-4xl mx-auto px-4 py-8" }, _attrs))}>`);
        if (doc.value.body) {
          _push(`<section class="mb-8 prose prose-lg dark:prose-dark max-w-none w-full">`);
          _push(ssrRenderComponent(_component_ContentRenderer, {
            value: doc.value.body
          }, null, _parent));
          _push(`</section>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<section class="mt-8 flex flex-wrap gap-3"><a${ssrRenderAttr("href", `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentUrl.value)}`)} target="_blank" rel="noopener" class="px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition"> Share on Facebook </a><a${ssrRenderAttr("href", `https://twitter.com/intent/tweet?url=${encodeURIComponent(currentUrl.value)}&text=${encodeURIComponent(pageTitle.value)}`)} target="_blank" rel="noopener" class="px-4 py-2 rounded-lg bg-sky-500 text-white hover:bg-sky-600 transition"> Share on Twitter </a><a${ssrRenderAttr("href", `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(currentUrl.value)}`)} target="_blank" rel="noopener" class="px-4 py-2 rounded-lg bg-blue-800 text-white hover:bg-blue-900 transition"> Share on LinkedIn </a><a${ssrRenderAttr("href", `https://api.whatsapp.com/send?text=${encodeURIComponent(pageTitle.value + " " + currentUrl.value)}`)} target="_blank" rel="noopener" class="px-4 py-2 rounded-lg bg-green-600 text-white hover:bg-green-700 transition"> Share on WhatsApp </a><a${ssrRenderAttr("href", `https://t.me/share/url?url=${encodeURIComponent(currentUrl.value)}&text=${encodeURIComponent(pageTitle.value)}`)} target="_blank" rel="noopener" class="px-4 py-2 rounded-lg bg-indigo-600 text-white hover:bg-indigo-700 transition"> Share on Telegram </a></section></article>`);
      } else {
        _push(`<div${ssrRenderAttrs(mergeProps({ class: "text-center py-16 text-gray-500" }, _attrs))}> Loading post or post not found... </div>`);
      }
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/current-affair/[slug].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=_slug_-3-AhCdH8.mjs.map
