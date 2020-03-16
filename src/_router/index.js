import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);
let routes;
if (process.env.NODE_ENV !== "production") {
  routes = [
    {
      path: "/",
      name: "Home",
      component: () => import(/* webpackChunkName: "SandboxCollectionView" */ "../views/SandboxCollectionView.vue"),
    }
  ];
}

const router = new VueRouter({
  mode: process.env.NODE_ENV !== "development" ? "history" : "hash",
  routes
});

export default router;
