import Vue from "vue";
import { mobilecheck } from "../_helpers/utils";
(function() {
  let handleOutsideClick;
  Vue.directive("clickoutside", {
    bind(el, binding, vnode) {
      handleOutsideClick = e => {
        e.stopPropagation();
        const { handler, exclude = [], target = "body" } = binding.value;
        const targetArea = document.querySelector(target);
        if (!targetArea || !targetArea.contains(e.target)) {
          return;
        }
        let clickedOnExcludedEl = false;
        exclude.forEach(refName => {
          if (!clickedOnExcludedEl) {
            const excludedEl = vnode.context.$refs[refName];
            clickedOnExcludedEl = excludedEl && excludedEl.contains(e.target);
          }
        });
        if (!el.contains(e.target) && !clickedOnExcludedEl) {
          vnode.context[handler]();
        }
      };
      document.addEventListener("click", handleOutsideClick);
      document.addEventListener("touchstart", handleOutsideClick);
    },

    unbind() {
      document.removeEventListener("click", handleOutsideClick);
      document.removeEventListener("touchstart", handleOutsideClick);
    }
  });
})();
