import { _ as __nuxt_component_0 } from './nuxt-link-BFAFMVM7.mjs';
import { withAsyncContext, computed, withCtx, createTextVNode, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderList, ssrInterpolate, ssrRenderComponent } from 'vue/server-renderer';
import { _ as _sfc_main$1 } from './PostCard-wmr4lSaZ.mjs';
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
import 'vue-router';
import '@unhead/addons';
import '@unhead/schema-org/vue';
import 'perfect-debounce';

const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    useHead({
      title: "Rojgar Result Online \u2013 Sarkari Result, Admit Card, Latest Govt Jobs",
      meta: [
        {
          property: "og:title",
          content: "Rojgar Result Online \u2013 Sarkari Result, Admit Card, Latest Govt Jobs"
        }
      ]
    });
    const tools = [
      "Rojgar Result Online",
      "Rojgar Result Online",
      "Rojgar Result Online",
      "Rojgar Result Online",
      "Rojgar Result Online",
      "Rojgar Result Online &",
      "Rojgar Result Online",
      "Rojgar Result Online &",
      "Rojgar Result Online",
      "Rojgar Result Online",
      "Rojgar Result Online"
    ];
    const mainCategories = ["Latest Jobs", "Admit Card", "Result", "Answer Key", "Syllabus"];
    const { data: postsData } = ([__temp, __restore] = withAsyncContext(async () => useAsyncData("posts", async () => {
      const posts = await queryCollection("posts").all();
      return posts.sort((a, b) => new Date(b.meta.date) - new Date(a.meta.date));
    })), __temp = await __temp, __restore(), __temp);
    const { data: currentAffairsData } = ([__temp, __restore] = withAsyncContext(async () => useAsyncData("currentAffairs", async () => {
      const affairs = await queryCollection("currentAffairs").all();
      return affairs.sort((a, b) => new Date(b.meta.date) - new Date(a.meta.date));
    })), __temp = await __temp, __restore(), __temp);
    const getPosts = (category) => (postsData.value || []).filter((p) => p.meta.category === category);
    const grouped = computed(
      () => (currentAffairsData.value || []).reduce((acc, item) => {
        var _a;
        if (!((_a = item.meta) == null ? void 0 : _a.date)) return acc;
        if (!acc[item.meta.date]) acc[item.meta.date] = [];
        acc[item.meta.date].push(item);
        return acc;
      }, {})
    );
    const sortedDates = computed(
      () => Object.keys(grouped.value).sort((a, b) => b.localeCompare(a))
    );
    const slugify = (s) => s.toLowerCase().replace(/\s+/g, "-");
    const formatDate = (d) => new Date(d).toLocaleDateString("en-GB", {
      day: "numeric",
      month: "long",
      year: "numeric"
    });
    const slugifyDate = (d) => formatDate(d).toLowerCase().replace(/\s+/g, "-");
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<!--[--><div class="w-full px-4 py-8 container mx-auto"><h1 class="text-2xl font-bold mb-6">Latest Updates</h1><div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"><!--[-->`);
      ssrRenderList(mainCategories, (c) => {
        _push(`<div class="bg-white dark:bg-gray-900 shadow rounded-lg flex flex-col hover:shadow-lg"><div class="bg-amber-500 dark:bg-amber-600 px-4 py-2"><h2 class="text-lg font-semibold text-white">${ssrInterpolate(c)}</h2></div><div class="flex-1 p-4 space-y-3"><!--[-->`);
        ssrRenderList(getPosts(c).slice(0, 10), (p) => {
          _push(ssrRenderComponent(_sfc_main$1, {
            key: p._path,
            post: p
          }, null, _parent));
        });
        _push(`<!--]--></div>`);
        if (getPosts(c).length > 10) {
          _push(`<div class="px-4 py-3 text-right border-t dark:border-gray-700">`);
          _push(ssrRenderComponent(_component_NuxtLink, {
            to: `/category/${slugify(c)}`,
            class: "text-blue-600 dark:text-blue-400 font-medium hover:underline"
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(` More \u2192 `);
              } else {
                return [
                  createTextVNode(" More \u2192 ")
                ];
              }
            }),
            _: 2
          }, _parent));
          _push(`</div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
      });
      _push(`<!--]--><div class="bg-white dark:bg-gray-900 shadow rounded-lg flex flex-col hover:shadow-lg"><div class="bg-amber-500 dark:bg-amber-600 px-4 py-2"><h2 class="text-lg font-semibold text-white">Current Affairs</h2></div><div class="flex-1 p-4 space-y-2"><ul><!--[-->`);
      ssrRenderList(sortedDates.value, (date) => {
        _push(`<li class="mb-2">`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: `/current-affair/${slugifyDate(date)}`,
          target: "_blank",
          class: "text-blue-600 dark:text-blue-400 hover:underline"
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
        _push(`</li>`);
      });
      _push(`<!--]--></ul></div>`);
      if (sortedDates.value.length > 10) {
        _push(`<div class="px-4 py-3 text-right border-t dark:border-gray-700">`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: "/current-affair",
          class: "text-blue-600 dark:text-blue-400 font-medium hover:underline"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` More \u2192 `);
            } else {
              return [
                createTextVNode(" More \u2192 ")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div></div><section class="bg-amber-50 dark:bg-gray-900 border rounded-lg shadow-md max-w-5xl mx-auto my-8 p-6"><div class="text-center mb-6"><h1 class="text-3xl font-extrabold text-amber-700 dark:text-amber-400 uppercase"> Rojgar Result Online \u2013 Sarkari Naukri &amp; Govt Jobs 2025 </h1><p class="text-lg font-semibold text-gray-700 dark:text-gray-300"> Latest Jobs, Admit Cards, Results &amp; Sarkari Alerts </p></div><div class="space-y-6 text-gray-800 dark:text-gray-300 leading-relaxed"><div><h2 class="text-xl font-bold text-amber-600 mb-2"> \u{1F539} Rojgar Result Online \u2013 Latest Sarkari Jobs </h2><p> Rojgar Result Online is your trusted portal for <strong>Sarkari Naukri</strong>, Govt Jobs, Admit Cards, Results, and Job Notifications in 2025. Stay updated with the latest recruitment alerts and government exam updates at RojgarResultOnline.Com. </p></div><div><p> \u25BA <strong>RojgarResultOnline.Com</strong> offers complete information about all latest Govt Jobs &amp; Sarkari Naukri across India including Online Form Notifications, Admit Card updates, Sarkari Results, and Answer Keys. Explore opportunities in various sectors such as Banking, Railway, Police, Teaching, Defence, and more. </p></div><div><h2 class="text-xl font-bold text-amber-600 mb-2"> \u{1F539} Why Choose Rojgar Result Online </h2><p> \u25BA Students and job seekers rely on <strong>Rojgar Result Online</strong> to access genuine and up-to-date Sarkari Naukri alerts, including eligibility, last date, vacancy details, application link, syllabus, and exam pattern. Our portal provides State-wise and Category-wise job notifications for ease of access. </p></div><div><p> \u25BA From Railway jobs to Bank jobs, UPSC exams to State PSC recruitment, Rojgar Result Online keeps you informed about every important Sarkari result and job alert so you never miss an opportunity. </p></div><div><p> \u25BA <strong>Disclaimer:</strong> Rojgar Result Online only publishes information from official government sources. We are not affiliated with any government organization. </p></div></div></section><section class="bg-amber-50 dark:bg-gray-900 border rounded-lg shadow-md max-w-5xl mx-auto my-10 p-6"><div class="text-center mb-6"><h2 class="text-2xl font-extrabold text-amber-700 dark:text-amber-400"> Rojgar Result Online \u2013 Central Government Jobs &amp; Sarkari Naukri 2025 </h2></div><div class="space-y-6 text-gray-800 dark:text-gray-300 leading-relaxed"><p> \u25BA <strong>Rojgar Result Online</strong> is your one-stop source for all Central Government Jobs, Sarkari Naukri updates, Admit Cards, Answer Keys, and Exam Notifications in 2025. </p><p> \u25BA Explore the latest online forms, exam dates, results, and admit card downloads for UPSC, SSC, Railway RRB, Defence, Banking, and other government sectors \u2014 all available on <strong>RojgarResultOnline.Com</strong>. </p><p> \u25BA Get direct links to notifications for Police, Teaching, Railway, Medical, Defence, and State Government jobs. Rojgar Result Online ensures candidates never miss important updates. </p></div><div class="mb-6 text-center pt-4"><p class="text-sm text-red-600 dark:text-red-400 font-semibold"> \u26A0\uFE0F Disclaimer: Rojgar Result Online is not affiliated with any government agency. We only provide information about official notifications. </p></div><div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 text-gray-800 dark:text-gray-300"><div class="flex items-center gap-2 bg-white dark:bg-gray-800 border rounded-lg p-3 shadow-sm">\u2705 UPSC Recruitment</div><div class="flex items-center gap-2 bg-white dark:bg-gray-800 border rounded-lg p-3 shadow-sm">\u2705 SSC Jobs</div><div class="flex items-center gap-2 bg-white dark:bg-gray-800 border rounded-lg p-3 shadow-sm">\u2705 Defence Jobs (Army/Navy/Airforce)</div><div class="flex items-center gap-2 bg-white dark:bg-gray-800 border rounded-lg p-3 shadow-sm">\u2705 Railway Jobs (RRB)</div><div class="flex items-center gap-2 bg-white dark:bg-gray-800 border rounded-lg p-3 shadow-sm">\u2705 State PSC Jobs</div><div class="flex items-center gap-2 bg-white dark:bg-gray-800 border rounded-lg p-3 shadow-sm">\u2705 Banking Jobs (IBPS/SBI)</div></div></section><section class="bg-amber-50 dark:bg-gray-900 border rounded-lg shadow-md max-w-5xl mx-auto my-10 p-6"><div class="text-center mb-6"><h2 class="text-2xl font-extrabold text-green-700 dark:text-green-400"> How Rojgar Result Online Portal Helps You Find Sarkari Naukri &amp; Govt Jobs </h2></div><p class="mb-4 text-gray-700 dark:text-gray-300 leading-relaxed"><strong>Rojgar Result Online 2025</strong> provides the latest government and private job updates, admit cards, results, and Sarkari Naukri alerts. Candidates can easily access recruitment details for multiple sectors including: </p><div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 mb-6 text-gray-800 dark:text-gray-300"><div class="flex items-center gap-2 bg-gray-50 dark:bg-gray-800 border rounded-lg p-2 shadow-sm">\u2705 UPSC Jobs</div><div class="flex items-center gap-2 bg-gray-50 dark:bg-gray-800 border rounded-lg p-2 shadow-sm">\u2705 SSC Jobs</div><div class="flex items-center gap-2 bg-gray-50 dark:bg-gray-800 border rounded-lg p-2 shadow-sm">\u2705 Railway Recruitment</div><div class="flex items-center gap-2 bg-gray-50 dark:bg-gray-800 border rounded-lg p-2 shadow-sm">\u2705 Banking Jobs</div><div class="flex items-center gap-2 bg-gray-50 dark:bg-gray-800 border rounded-lg p-2 shadow-sm">\u2705 Police Jobs</div><div class="flex items-center gap-2 bg-gray-50 dark:bg-gray-800 border rounded-lg p-2 shadow-sm">\u2705 Teaching Jobs</div><div class="flex items-center gap-2 bg-gray-50 dark:bg-gray-800 border rounded-lg p-2 shadow-sm">\u2705 Defence Jobs</div><div class="flex items-center gap-2 bg-gray-50 dark:bg-gray-800 border rounded-lg p-2 shadow-sm">\u2705 State Government Jobs</div></div><p class="text-gray-700 dark:text-gray-300 leading-relaxed"> Rojgar Result Online gives you direct access to the latest admit cards, results, answer keys, exam syllabus, and recruitment notifications so you can apply to Sarkari Naukri without delay. All updates are available in Hindi and English for easy accessibility. </p></section><section class="bg-amber-50 dark:bg-gray-900 border rounded-lg shadow-md max-w-5xl mx-auto my-10 p-6"><div class="text-center mb-6"><h2 class="text-2xl font-extrabold text-indigo-700 dark:text-indigo-400"> Rojgar Result Online Tools for Sarkari Job Seekers </h2></div><p class="mb-4 text-gray-700 dark:text-gray-300 leading-relaxed text-center"> Explore free tools at <strong>RojgarResultOnline.Com</strong> to simplify your search for Sarkari Naukri, Admit Cards, Results, and Govt Jobs in 2025. </p><div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 mt-6 text-gray-800 dark:text-gray-200"><!--[-->`);
      ssrRenderList(tools, (tool, index) => {
        _push(`<div class="flex items-center gap-2 bg-white dark:bg-gray-900 border rounded-lg p-2 shadow-sm hover:shadow-md transition"> \u2705 ${ssrInterpolate(tool)}</div>`);
      });
      _push(`<!--]--></div></section><section class="bg-amber-50 dark:bg-gray-900 max-w-5xl mx-auto my-10 px-6 py-10 rounded-lg shadow-md border"><div class="text-center mb-8"><h2 class="text-3xl font-extrabold text-amber-600 dark:text-amber-400"> Latest Rojgar Result Online Notifications 2025 \u2013 Sarkari Naukri Updates </h2><p class="text-gray-700 dark:text-gray-300 mt-2"> Get all Sarkari Job notifications, Admit Cards, Results &amp; Exam Alerts on RojgarResultOnline.Com </p></div><div class="space-y-6 text-gray-800 dark:text-gray-200 leading-relaxed"><p><strong>Rojgar Result Online</strong> provides the latest Govt Jobs &amp; Sarkari Naukri updates with direct links for online application. </p><p> Candidates can find Admit Cards, Results, Answer Keys, and Syllabus updates for UPSC, SSC, Railway, Banking, and State PSC exams. </p><p> Stay updated with Rojgar Result Online for the latest Sarkari job alerts including Railway Jobs, Bank Jobs, Police Jobs, Teacher Jobs, Defence Jobs, and more. </p></div></section><section class="bg-amber-50 dark:bg-gray-900 max-w-5xl mx-auto my-10 px-6 py-8 rounded-lg shadow-md border"><h3 class="text-2xl font-bold text-indigo-700 dark:text-indigo-400 mb-6 text-center"> \u{1F4CC} RojgarResultOnline.Com \u2014 Complete Sarkari Naukri &amp; Govt Jobs List 2025 </h3><p class="text-gray-700 dark:text-gray-300 text-center mb-6"> Explore the full list of latest Sarkari Naukri, Govt Jobs, Admit Cards, Results, and Recruitment updates available on RojgarResultOnline.Com. </p><div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4"><div class="bg-white dark:bg-gray-800 border rounded-lg p-4 shadow-sm"><p class="font-semibold text-gray-800 dark:text-gray-200">Rojgar Result Online 2025</p><p class="text-gray-600 dark:text-gray-400">Latest Sarkari Naukri Updates</p></div><div class="bg-white dark:bg-gray-800 border rounded-lg p-4 shadow-sm"><p class="font-semibold text-gray-800 dark:text-gray-200">Rojgar Result Online Railway Jobs</p><p class="text-gray-600 dark:text-gray-400">Railway Group D &amp; RPF Results</p></div><div class="bg-white dark:bg-gray-800 border rounded-lg p-4 shadow-sm"><p class="font-semibold text-gray-800 dark:text-gray-200">Rojgar Result Online SSC Jobs</p><p class="text-gray-600 dark:text-gray-400">SSC CGL, CHSL, MTS &amp; JE Updates</p></div><div class="bg-white dark:bg-gray-800 border rounded-lg p-4 shadow-sm"><p class="font-semibold text-gray-800 dark:text-gray-200">Rojgar Result Online Defence Jobs</p><p class="text-gray-600 dark:text-gray-400">Army, Navy, Airforce, Coast Guard</p></div><div class="bg-white dark:bg-gray-800 border rounded-lg p-4 shadow-sm"><p class="font-semibold text-gray-800 dark:text-gray-200">Rojgar Result Online Teacher Jobs</p><p class="text-gray-600 dark:text-gray-400">Bihar Teacher Bharti &amp; State PSC Jobs</p></div><div class="bg-white dark:bg-gray-800 border rounded-lg p-4 shadow-sm"><p class="font-semibold text-gray-800 dark:text-gray-200">Rojgar Result Online Bank Jobs</p><p class="text-gray-600 dark:text-gray-400">IBPS, SBI, RBI Recruitment Updates</p></div><div class="bg-white dark:bg-gray-800 border rounded-lg p-4 shadow-sm"><p class="font-semibold text-gray-800 dark:text-gray-200">Rojgar Result Online Private Jobs</p><p class="text-gray-600 dark:text-gray-400">Latest Private Sector Job Alerts</p></div><div class="bg-white dark:bg-gray-800 border rounded-lg p-4 shadow-sm"><p class="font-semibold text-gray-800 dark:text-gray-200">Rojgar Result Online Admit Cards</p><p class="text-gray-600 dark:text-gray-400">Direct Links for Download</p></div><div class="bg-white dark:bg-gray-800 border rounded-lg p-4 shadow-sm"><p class="font-semibold text-gray-800 dark:text-gray-200">Rojgar Result Online Exam Results</p><p class="text-gray-600 dark:text-gray-400">Latest Sarkari Exam Results</p></div></div></section><section class="bg-amber-50 dark:bg-gray-900 max-w-5xl mx-auto my-10 px-6 py-8 rounded-lg shadow-md border"><h3 class="text-2xl font-bold text-indigo-700 dark:text-indigo-400 mb-6 text-center"> Rojgar Result Online FAQ \u2013 Sarkari Naukri &amp; Govt Jobs 2025 </h3><div class="space-y-6 text-gray-800 dark:text-gray-200"><div><h4 class="text-lg font-semibold">Q1: What is Rojgar Result Online?</h4><p> Rojgar Result Online is a trusted portal for Sarkari Naukri &amp; Govt Jobs, providing daily updates about Admit Cards, Results, Syllabus, Answer Keys, and recruitment notifications. </p></div><div><h4 class="text-lg font-semibold">Q2: Is Rojgar Result Online updated daily?</h4><p> Yes, Rojgar Result Online updates daily with the latest Sarkari Naukri, Online Forms, Admit Cards, and Results to ensure candidates never miss any important government job notification. </p></div><div><h4 class="text-lg font-semibold">Q3: Is Rojgar Result Online a Government Website?</h4><p> No. Rojgar Result Online is not affiliated with any government department. It provides official Sarkari Job information collected from authentic sources. </p></div><div><h4 class="text-lg font-semibold">Q4: Does Rojgar Result Online offer job alerts for all sectors?</h4><p> Yes, it provides comprehensive job alerts including Railway, Banking, Police, Teaching, Defence, UPSC, SSC, and State PSC exams. </p></div><div><h4 class="text-lg font-semibold">Q5: Can I access Rojgar Result Online on mobile?</h4><p> Yes, Rojgar Result Online is accessible on all devices, and you can also join our Telegram, WhatsApp, and social media channels for instant updates. </p></div></div></section><!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-D3WBbddX.mjs.map
