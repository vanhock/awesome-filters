import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/SandboxCollectionView.vue";

Vue.use(VueRouter);
let routes;
if (process.env.NODE_ENV !== "production") {
  routes = [
    {
      path: "/",
      name: "Home",
      component: Home
    }
  ];
}

const router = new VueRouter({
  mode: process.env.NODE_ENV !== "development" ? "history" : "hash",
  routes
});

export default router;
