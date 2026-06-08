import { _ as __nuxt_component_0 } from './nuxt-link-BFAFMVM7.mjs';
import { mergeProps, withCtx, createVNode, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrInterpolate } from 'vue/server-renderer';

const _sfc_main = {
  __name: "PostCard",
  __ssrInlineRender: true,
  props: {
    post: {
      type: Object,
      required: true
    }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(ssrRenderComponent(_component_NuxtLink, mergeProps({
        to: `/post/${__props.post.meta.slug}`,
        target: "_blank",
        class: "block p-4 rounded-lg bg-white dark:bg-gray-800 shadow hover:shadow-lg transition"
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<h3 class="text-lg font-bold text-gray-800 dark:text-gray-100"${_scopeId}>${ssrInterpolate(__props.post.title)}</h3><p class="text-gray-600 dark:text-gray-300 line-clamp-2"${_scopeId}>${ssrInterpolate(__props.post.summary)}</p>`);
          } else {
            return [
              createVNode("h3", { class: "text-lg font-bold text-gray-800 dark:text-gray-100" }, toDisplayString(__props.post.title), 1),
              createVNode("p", { class: "text-gray-600 dark:text-gray-300 line-clamp-2" }, toDisplayString(__props.post.summary), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/PostCard.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as _ };
//# sourceMappingURL=PostCard-wmr4lSaZ.mjs.map
