import Vue from "vue";
import Vuex from "vuex";
import CollectionsStoreModule from "./CollectionsStoreModule";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    CollectionStoreModule: CollectionsStoreModule
  }
});
