import Vue from "vue";
import router from "./_router";
import store from "./_store";
import CollectionView from "./views/CollectionView";
Vue.config.productionTip = false;

if (process.env.NODE_ENV === "production") {
  new Vue({
    store,
    router,
    el: "#app",
    components: { CollectionView }
  });
} else {
  const SandBox = () => import("./App.vue");
  Vue.config.productionTip = false;
  new Vue({
    router,
    store,
    render: h => h(SandBox)
  }).$mount("#app");
}
