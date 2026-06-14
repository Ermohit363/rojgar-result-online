import { ssrRenderAttrs, ssrRenderAttr, ssrInterpolate } from 'vue/server-renderer';
import { ref, useSSRContext } from 'vue';
import { u as useHead, a as useRuntimeConfig } from './server.mjs';
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
import 'vue-router';
import '@unhead/addons';
import '@unhead/schema-org/vue';

const _sfc_main = {
  __name: "contact",
  __ssrInlineRender: true,
  setup(__props) {
    const config = useRuntimeConfig();
    const form = ref({
      name: "",
      email: "",
      subject: "",
      message: ""
    });
    const success = ref(false);
    useHead({
      title: `Contact - ${config.public.siteName}`,
      meta: [
        { name: "description", content: "Contact us for any queries or feedback." },
        { property: "og:title", content: `Contact - ${config.public.siteName}` },
        { property: "og:description", content: "Contact us for any queries or feedback." },
        { property: "og:url", content: `${config.public.baseUrl}/contact` }
      ],
      link: [{ rel: "canonical", href: `${config.public.baseUrl}/contact` }]
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(_attrs)}><div class="bg-white dark:bg-gray-800 shadow-md p-8"><h1 class="text-3xl font-bold mb-6 text-center">Contact Us</h1>`);
      if (success.value) {
        _push(`<div class="mb-6 rounded-lg bg-green-100 text-green-800 px-4 py-3 border border-green-300 text-center"> \u2705 Your message has been sent successfully! </div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<form class="space-y-6"><div class="grid grid-cols-1 md:grid-cols-2 gap-6"><div><label class="block text-sm font-medium mb-2">Name</label><input${ssrRenderAttr("value", form.value.name)} type="text" class="w-full border border-gray-300 dark:border-gray-700 rounded px-4 py-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-900" placeholder="Your Name" required></div><div><label class="block text-sm font-medium mb-2">Email</label><input${ssrRenderAttr("value", form.value.email)} type="email" class="w-full border border-gray-300 dark:border-gray-700 rounded px-4 py-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-900" placeholder="you@example.com" required></div></div><div><label class="block text-sm font-medium mb-2">Subject</label><input${ssrRenderAttr("value", form.value.subject)} type="text" class="w-full border border-gray-300 dark:border-gray-700 rounded px-4 py-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-900" placeholder="Subject" required></div><div><label class="block text-sm font-medium mb-2">Message</label><textarea rows="6" class="w-full border border-gray-300 dark:border-gray-700 rounded px-4 py-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-900" placeholder="Your message..." required>${ssrInterpolate(form.value.message)}</textarea></div><div class="text-center"><button type="submit" class="bg-amber-500 text-white font-semibold px-8 py-3 rounded hover:bg-amber-600 transition"> Send Message </button></div></form><div class="mt-8 border-t border-gray-200 dark:border-gray-700 pt-6 text-center space-y-2"><p> \u{1F4E7} Email us at: <a href="mailto:contact.rojgarresultonline@gmail.com" class="text-blue-600 dark:text-blue-400 hover:underline">contact.rojgarresultonline@gmail.com </a></p><p>Business hours: Monday \u2013 Friday, 9 AM \u2013 5 PM IST</p></div></div>`);
      if (success.value) {
        _push(`<div class="fixed top-6 left-1/2 transform -translate-x-1/2 bg-green-100 border border-green-300 text-green-800 px-4 py-2 rounded shadow-lg"> \u2705 Your message has been sent! </div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</section>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/contact.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=contact-D1BK99Cw.mjs.map
