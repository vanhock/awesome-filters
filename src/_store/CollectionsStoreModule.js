import Vue from "vue";
import {
  COLLECTIONS_CLEAR_CHANGED_FILTERS,
  COLLECTIONS_GET_COLLECTION,
  COLLECTIONS_SET_PRODUCTS,
  COLLECTIONS_SET_CHANGED_FILTERS,
  COLLECTIONS_SET_COLLECTIONS,
  COLLECTIONS_SET_FILTERS,
  COLLECTIONS_SET_SELECTED_FILTER,
  COLLECTIONS_TOGGLE_MOBILE_FILTER,
  COLLECTIONS_SET_LOADING,
  COLLECTIONS_CLEAR_FILTER,
  COLLECTIONS_CLEAR_ALL_FILTERS,
  COLLECTIONS_TOGGLE_MOBILE_COLLECTIONS,
  COLLECTIONS_SET_PAGINATION,
  COLLECTIONS_SET_SORTING,
  COLLECTIONS_SET_INTERFACE_SETTINGS
} from "./mutation-types";
import webApi from "../webApi";
import { getParameterByName } from "../_helpers/utils";

export default {
  state: {
    collections: [],
    collection: {},
    products: [],
    productsHTML: "",
    productsTotalCount: 0,
    paginationCurrentPage: 1,
    paginationPageSize: 24,
    hideProductsSlot: false,
    filters: [],
    newFilters: [],
    changedFilters: [],
    selectedFilterId: "",
    mobileFilterShow: false,
    mobileCollectionsShow: false,
    loadingProducts: false,
    loadingFilters: false,
    interfaceSettings: {
      hideCollectionsMenu: false
    }
  },
  getters: {
    loadingProducts: state => state.loadingProducts,
    loadingFilters: state => state.loadingProducts,
    products: state => state.products,
    productsHTML: state => state.productsHTML,
    hasProducts: state => state.products && state.products.length,
    productsTotalCount: state => state.productsTotalCount,
    paginationPages(state) {
      if (!state.productsTotalCount || parseInt(state.productsTotalCount) < 0) {
        return;
      }
      const pages = Math.ceil(
        parseInt(state.productsTotalCount) / state.paginationPageSize
      );
      return pages > 0 ? pages : 0;
    },
    paginationCurrentPage: state =>
      state.paginationCurrentPage || parseInt(state.paginationCurrentPage) || 1,
    paginationPageSize: state => state.paginationPageSize,
    hideProductsSlot: state => state.hideProductsSlot,
    filters: state => state.filters,
    newFilters: state => state.newFilters,
    activeFilters(state) {
      return state.filters
        .map(filter => {
          if (!filter) {
            return;
          }
          const active = [];
          const items =
            (filter.items &&
              filter.items.filter(i => {
                i.active && active.push(i.id);
                return i.active;
              })) ||
            [];
          return {
            id: filter.id,
            title: filter.title,
            type: filter.type,
            active: active,
            items: items
          };
        })
        .filter(filter => filter && filter.active.length);
    },
    activeFiltersString(state) {
      let string = "";
      /**
       * newFilters
       * Changed, but not applied filters and didn't show on UI, used for server call
       */
      state.newFilters.forEach(f => {
        if (!f || !Object.keys(f).length || !f.hasOwnProperty("items")) {
          return;
        }
        f.items.forEach((i, index) => {
          i.active ? (string += `${i.name}=${i.value}&`) : "";
        });
      });
      return string.substring(0, string.length - 1);
    },
    changedFilters: state => state.changedFilters,
    selectedFilter(state) {
      if (!state.selectedFilterId.length) {
        return;
      }
      for (let key in state.filters) {
        if (
          state.filters.hasOwnProperty(key) &&
          state.filters[key].id === state.selectedFilterId
        ) {
          return state.filters[key];
        }
      }
    },
    mobileFilterShow: state => state.mobileFilterShow,
    mobileCollectionsShow: state => state.mobileCollectionsShow,
    interfaceSettings: state => state.interfaceSettings
  },
  mutations: {
    [COLLECTIONS_GET_COLLECTION](state, payload) {
      state.collection = payload || {};
    },
    [COLLECTIONS_SET_COLLECTIONS](state, payload) {
      state.collections = payload || [];
    },
    [COLLECTIONS_SET_FILTERS](state, payload) {
      if (!payload || !payload.length) {
        return;
      }
      let filters = [];
      /** Exclude empty filters **/
      payload.forEach(
        f =>
          f && typeof f === "object" && Object.keys(f).length && filters.push(f)
      );
      if (typeof payload === "string") {
        filters = payload.replace(/^\s+|\s+$/g, "").replace("var filters = ");
        filters = filters && filters.replace(new RegExp(",]", "g"), "]");
        filters = (filters && JSON.parse(filters)) || [];
      }
      state.filters = filters;
      state.newFilters = filters;
    },
    [COLLECTIONS_SET_PRODUCTS](state, payload) {
      if (typeof payload === "string") {
        state.productsHTML = payload;
      } else {
        state.products = payload || [];
      }
      state.hideProductsSlot = true;
    },
    [COLLECTIONS_SET_PAGINATION](state, { currentPage, total, pageSize }) {
      if (currentPage) state.paginationCurrentPage = currentPage || 1;
      if (total) state.productsTotalCount = total || 0;
      if (pageSize) state.paginationPageSize = pageSize;
    },
    [COLLECTIONS_SET_SELECTED_FILTER](state, payload) {
      state.selectedFilterId = payload || "";
    },
    [COLLECTIONS_SET_CHANGED_FILTERS](state, { filter, replace }) {
      if (!filter) {
        return;
      }
      const tempFilters = [...state.filters];
      tempFilters.some((f, i) => {
        if (
          !!f &&
          Object.keys(f).length &&
          f.hasOwnProperty("items") &&
          f.id === filter.id
        ) {
          return f.items.some((item, index) => {
            /** If passed one filter item as object **/
            if (filter.item) {
              if (item.id === filter.item.id) {
                tempFilters[i]["items"][index] = filter.item;
                if (!replace) /** Change only selected value **/ return true;
              } else if (replace) {
                item.active = false;
              }
            }
            /** If passed several filter items as array **/
            if (filter.items) {
              filter.items.some(nfi => {
                if (nfi.id === item.id && nfi.name === item.name) {
                  tempFilters[i]["items"][index] = nfi;
                  return true;
                }
              });
              if (replace) {
                item.active = false;
              }
            }
          });
        }
      });
      state.newFilters = [...tempFilters];
      if (filter.item) {
        const index = state.changedFilters.indexOf(filter.item.id);
        index !== -1
          ? state.changedFilters.slice(index, 1)
          : state.changedFilters.push(filter.item.id);
      }
      if (filter.items) {
        filter.items.forEach(nfi => {
          const index = state.changedFilters.indexOf(nfi.id);
          index !== -1
            ? state.changedFilters.slice(index, 1)
            : state.changedFilters.push(nfi.id);
        });
      }
    },
    [COLLECTIONS_CLEAR_CHANGED_FILTERS](state) {
      state.changedFilters = [];
    },
    [COLLECTIONS_CLEAR_FILTER](state, filterId) {
      /** Clear not applied filters in selected filterGroup **/
      for (let key in state.newFilters) {
        if (
          state.newFilters.hasOwnProperty(key) &&
          state.newFilters[key].id === filterId
        ) {
          const newFilter = state.newFilters[key];
          const newItems = [];
          state.newFilters[key].items.forEach(filter => {
            newItems.push({ ...filter, active: false });
            const index = state.changedFilters.indexOf(filter.id);
            index !== -1
              ? state.changedFilters.slice(index, 1)
              : state.changedFilters.push(filter.id);
          });
          newFilter.items = newItems;
          Vue.set(state.newFilters, key, newFilter);
        }
      }
    },
    [COLLECTIONS_CLEAR_ALL_FILTERS](state) {
      state.changedFilters = ["true"];
      state.newFilters = [];
    },
    [COLLECTIONS_TOGGLE_MOBILE_FILTER](state, payload) {
      state.mobileFilterShow = payload || !state.mobileFilterShow;
    },
    [COLLECTIONS_TOGGLE_MOBILE_COLLECTIONS](state, payload) {
      state.mobileCollectionsShow = payload || !state.mobileCollectionsShow;
    },
    [COLLECTIONS_SET_LOADING](state, { target, value }) {
      if (!target) {
        return;
      }
      state[`loading${target}`] = value || !state[`loading${target}`];
    },
    [COLLECTIONS_SET_INTERFACE_SETTINGS](state, settings) {
      if (
        !settings ||
        typeof settings !== "object" ||
        !Object.keys(settings).length
      ) {
        return;
      }
      for (let key in settings) {
        if (settings.hasOwnProperty(key)) {
          Vue.set(state.interfaceSettings, key, settings[key]);
        }
      }
    }
  },
  actions: {
    async [COLLECTIONS_SET_FILTERS](
      { commit, getters },
      { url, needProducts }
    ) {
      const el = document.createElement("html");
      commit(COLLECTIONS_SET_LOADING, { target: "Filters", value: true });
      if (needProducts)
        commit(COLLECTIONS_SET_LOADING, { target: "Products", value: true });
      const { data, responseUrl } = await webApi.get(url);
      if (!data || !data.length) {
        return commit(COLLECTIONS_SET_LOADING, {
          target: "filters",
          value: false
        });
      }
      el.innerHTML = data;
      let filtersString = el.querySelector("[data-filters]");
      filtersString = filtersString.innerHTML.replace("var filters = ", "");
      if (filtersString) {
        commit(COLLECTIONS_SET_FILTERS, eval(filtersString));
      }
      if (needProducts) {
        let products = el.querySelector(
          "collection-view template[slot='products']"
        );
        const paginationTotal =
          el.querySelector("collection-view") &&
          el
            .querySelector("collection-view")
            .getAttribute(":products-total-count");
        const paginationPage = getParameterByName("page", responseUrl) || 1;
        if (products) {
          commit(COLLECTIONS_SET_PRODUCTS, products.innerHTML);
        }
        if (paginationTotal && paginationPage) {
          commit(COLLECTIONS_SET_PAGINATION, {
            currentPage: parseInt(paginationPage),
            total: parseInt(paginationTotal)
          });
        }
        commit(COLLECTIONS_SET_LOADING, { target: "Products", value: false });
      }
      commit(COLLECTIONS_SET_LOADING, { target: "Filters", value: false });
      return responseUrl;
    },
    async [COLLECTIONS_SET_PRODUCTS]({ commit, getters }, { url, page }) {
      commit(COLLECTIONS_SET_LOADING, { target: "Products", value: true });
      const { data } = await webApi.get(url);
      if (data && data.status === "ok") {
        commit(COLLECTIONS_SET_LOADING, { target: "Products", value: false });
        commit(COLLECTIONS_SET_PRODUCTS, data.products);
        commit(COLLECTIONS_SET_PAGINATION, {
          currentPage: page,
          total: data.count
        });
        return true;
      }
    }
  }
};
