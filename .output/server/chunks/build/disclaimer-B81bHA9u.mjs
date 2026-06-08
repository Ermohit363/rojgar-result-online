import { ssrRenderAttrs } from 'vue/server-renderer';
import { useSSRContext } from 'vue';
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
  __name: "disclaimer",
  __ssrInlineRender: true,
  setup(__props) {
    const config = useRuntimeConfig();
    useHead({
      title: `Disclaimer - ${config.public.siteName}`,
      meta: [
        { name: "description", content: "Disclaimer for RojgarResultOnline.com explaining that content is for informational purposes only and no guarantees are made." },
        { name: "keywords", content: "disclaimer, rojgar result disclaimer, site disclaimer, AdSense disclaimer, Sarkari Naukri disclaimer" },
        { property: "og:title", content: `Disclaimer - ${config.public.siteName}` },
        { property: "og:description", content: "Disclaimer for RojgarResultOnline.com explaining that content is for informational purposes only and no guarantees are made." },
        { property: "og:type", content: "website" },
        { property: "og:url", content: `${config.public.baseUrl}/disclaimer` },
        { property: "og:image", content: `${config.public.baseUrl}/logo.png` }
      ],
      link: [
        { rel: "canonical", href: `${config.public.baseUrl}/disclaimer` }
      ]
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(_attrs)}><div class="bg-white dark:bg-gray-800 shadow-md p-8"><h1 class="text-3xl font-bold mb-6 text-center">Disclaimer</h1><div class="space-y-6 text-gray-800 dark:text-gray-200"><p> The information provided on <strong>RojgarResultOnline.com</strong> is for general informational purposes only. While we strive to keep the content accurate and up-to-date, we make no guarantees regarding the completeness, reliability, or accuracy of any information on the site. </p><h2 class="text-2xl font-semibold">No Guarantee of Employment</h2><p> RojgarResultOnline.com provides information about government and private job opportunities, exam results, admit cards, and related resources. However, we do not guarantee employment or success in any examination. </p><h2 class="text-2xl font-semibold">External Links Disclaimer</h2><p> Our website may contain links to third-party websites for your convenience. We have no control over the content or practices of these sites and are not responsible for their accuracy or reliability. </p><h2 class="text-2xl font-semibold">Ad Disclaimer</h2><p> Some content on this website may contain advertisements powered by Google AdSense. We do not have control over the ads displayed, and inclusion of ads does not imply endorsement of any product or service. </p><h2 class="text-2xl font-semibold">Limitation of Liability</h2><p> In no event shall RojgarResultOnline.com or its owners be liable for any direct, indirect, incidental, consequential, or punitive damages arising from your use of this website. </p><h2 class="text-2xl font-semibold">Contact Us</h2><p> If you have any questions about this Disclaimer, please contact us at: <a href="mailto:contact.rojgarresultonline@gmail.com" class="text-blue-600 dark:text-blue-400 hover:underline"> contact.rojgarresultonline@gmail.com </a></p></div></div></section>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/disclaimer.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=disclaimer-B81bHA9u.mjs.map
