import { _ as _sfc_main$1 } from './ContentRenderer-CTwdfSYa.mjs';
import { withAsyncContext, computed, mergeProps, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr } from 'vue/server-renderer';
import { useRoute } from 'vue-router';
import { u as useHead } from './server.mjs';
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
import 'property-information';
import 'minimark/hast';
import '@unhead/addons';
import '@unhead/schema-org/vue';
import 'perfect-debounce';

const _sfc_main = {
  __name: "[slug]",
  __ssrInlineRender: true,
  async setup(__props) {
    var _a, _b, _c, _d, _e;
    let __temp, __restore;
    const route = useRoute();
    const slug = route.params.slug;
    const { data: posts } = ([__temp, __restore] = withAsyncContext(() => useAsyncData(
      "posts",
      () => queryCollection("posts").all()
    )), __temp = await __temp, __restore(), __temp);
    const post = computed(
      () => {
        var _a2;
        return ((_a2 = posts.value) == null ? void 0 : _a2.find((p) => p.meta.slug === slug)) || null;
      }
    );
    console.log(post);
    const pageTitle = ((_a = post.value) == null ? void 0 : _a.title) || slug.replace(/-/g, " ").replace(/\b\w/g, (l) => l.toUpperCase());
    const currentUrl = `https://www.rojgarresultonline.com/${slug}`;
    useHead({
      title: pageTitle,
      meta: [
        { property: "og:title", content: ((_b = post.value) == null ? void 0 : _b.title) || "" },
        { property: "og:description", content: ((_d = (_c = post.value) == null ? void 0 : _c.meta) == null ? void 0 : _d.summary) || "" },
        { property: "og:url", content: currentUrl },
        { property: "og:type", content: "article" },
        // ✅ if single slug
        { property: "article:tag", content: slug },
        // ✅ if multiple tags
        ...(((_e = post.value) == null ? void 0 : _e.tags) || []).map((tag) => ({
          property: "article:tag",
          content: tag
        }))
      ]
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ContentRenderer = _sfc_main$1;
      if (post.value) {
        _push(`<article${ssrRenderAttrs(mergeProps({ class: "max-w-4xl mx-auto px-4 py-8" }, _attrs))}>`);
        if (post.value.body) {
          _push(`<section class="mb-8 prose prose-lg dark:prose-dark max-w-none w-full">`);
          _push(ssrRenderComponent(_component_ContentRenderer, {
            value: post.value.body
          }, null, _parent));
          _push(`</section>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<section class="mt-8 flex flex-wrap gap-3"><a${ssrRenderAttr("href", `https://www.facebook.com/sharer/sharer.php?u=${currentUrl}`)} target="_blank" rel="noopener noreferrer" class="px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700"> Share on Facebook </a><a${ssrRenderAttr("href", `https://twitter.com/intent/tweet?url=${currentUrl}&text=${unref(pageTitle)}`)} target="_blank" rel="noopener noreferrer" class="px-4 py-2 rounded-lg bg-sky-500 text-white hover:bg-sky-600"> Share on Twitter/X </a><a${ssrRenderAttr("href", `https://wa.me/?text=${unref(pageTitle)} - ${currentUrl}`)} target="_blank" rel="noopener noreferrer" class="px-4 py-2 rounded-lg bg-green-500 text-white hover:bg-green-600"> Share on WhatsApp </a><a${ssrRenderAttr("href", `https://www.linkedin.com/sharing/share-offsite/?url=${currentUrl}`)} target="_blank" rel="noopener noreferrer" class="px-4 py-2 rounded-lg bg-blue-700 text-white hover:bg-blue-800"> Share on LinkedIn </a><button class="px-4 py-2 rounded-lg bg-gray-600 text-white hover:bg-gray-700"> Copy Link </button></section></article>`);
      } else {
        _push(`<div${ssrRenderAttrs(mergeProps({ class: "text-center py-16 text-gray-500" }, _attrs))}> Loading post or post not found... </div>`);
      }
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/post/[slug].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=_slug_-DlsHIexz.mjs.map
