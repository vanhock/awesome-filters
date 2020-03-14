<template>
  <div class="collection-view">
    <div class="container">
      <collection-navigation-bar :current-collection="currentCollection" />
      <div class="row">
        <div :class="collectionsColClass">
          <collection-tree ref="collections"
            ><slot name="collections"></slot
          ></collection-tree>
        </div>
        <div :class="filtersColClass">
          <collection-filters @change="getFiltersAndProducts(false, 1)" />
          <collection-products
            ref="productsRef"
            class="collection-view__products"
          >
            <slot name="products"></slot>
            <template v-slot:product-card="{ productCard }"
              ><slot
                name="product-card"
                v-bind:product-card="productCard"
              ></slot
            ></template>
          </collection-products>
          <collection-pagination
            class="collection-view__pagination"
            @change="getFiltersAndProducts('pagination', $event)"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import "bootstrap-4-grid/css/grid.min.css";
import CollectionNavigationBar from "../organisms/CollectionNavigationBar";
import CollectionTree from "../organisms/CollectionTree";
import CollectionFilters from "../organisms/CollectionFilters";
import CollectionProducts from "../organisms/CollectionProducts";
import {
  COLLECTIONS_CLEAR_CHANGED_FILTERS,
  COLLECTIONS_SET_FILTERS,
  COLLECTIONS_SET_INTERFACE_SETTINGS,
  COLLECTIONS_SET_PAGINATION,
  COLLECTIONS_SET_PRODUCTS,
  COLLECTIONS_SET_SORTING
} from "../_store/mutation-types";
import { mapGetters } from "vuex";
import CollectionPagination from "../organisms/CollectionPagination";
import { getParameterByName } from "../_helpers/utils";
export default {
  name: "CollectionView",
  components: {
    CollectionPagination,
    CollectionProducts,
    CollectionFilters,
    CollectionTree,
    CollectionNavigationBar
  },
  created() {
    /** Set starting data of page  **/
    const currentPage = getParameterByName("page") || 1;
    if (currentPage) {
      this.$store.commit(COLLECTIONS_SET_PAGINATION, {
        currentPage: parseInt(currentPage),
        total: this.productsTotalCount || 0
      });
    }
    const currentSorting = getParameterByName("order");
    if (currentSorting) {
      this.$store.commit(COLLECTIONS_SET_SORTING, currentSorting);
    }
    if (this.filters && this.filters.length) {
      this.$store.commit(COLLECTIONS_SET_FILTERS, this.filters);
    }
    if (this.hideCollectionsMenu) {
      this.$store.commit(COLLECTIONS_SET_INTERFACE_SETTINGS, {
        hideCollectionsMenu: true
      });
    }
  },
  mounted() {
    if (
      !this.$slots["products"] ||
      !this.$slots["products"].length ||
      !this.filters ||
      !this.filters.length
    ) {
      this.getFiltersAndProducts("router");
    }
    this.$router.beforeEach((to, from, next) => {
      if (this.noNeedToHandleRoute) {
        this.noNeedToHandleRoute = false;
        return next();
      }
      console.log("On router change");
      this.getFiltersAndProducts("router");
      next();
    });
  },
  data: () => ({
    noNeedToHandleRoute: false
  }),
  props: {
    products: {
      type: Array,
      default: () => []
    },
    filters: {
      type: [Array, String],
      default: () => []
    },
    sorting: {
      type: Array,
      default: () => []
    },
    currentCollection: String,
    productsTotalCount: Number,
    testUrl: String,
    collectionsColClass: {
      type: String,
      default: "col-sm-12 col-lg-2"
    },
    filtersColClass: {
      type: String,
      default: "col-sm-12 col-lg-10"
    },
    parseProducts: {
      type: Boolean,
      default: true
    } /** In this mode, products will get from HTML instead of API **/,
    hideCollectionsMenu: Boolean,
    isSeoFilter: Boolean
  },
  computed: {
    ...mapGetters([
      "changedFilters",
      "activeFiltersString",
      "activeFiltersQuery",
      "paginationPageSize",
      "productQuickViewBrand",
      "productStockStores",
      "hasProducts",
      "productsHTML"
    ])
  },
  methods: {
    async getFiltersAndProducts(
      source,
      page = parseInt(getParameterByName("page") || "1")
    ) {
      if (!source && !this.changedFilters.length) {
        return;
      }
      window.scrollTo(0, 0);
      let filtersUrl = "";
      let productsUrl = "";
      let searchQuery = getParameterByName("q");
      let params = this.activeFiltersString;
      params = params.length
        ? `${params}&page=${page}&page_size=${this.paginationPageSize}`
        : `page=${page}&page_size=${this.paginationPageSize}`;
      if (searchQuery) params += `&q=${searchQuery}`;
      params = encodeURI(params);
      const useSourceUrl = source === "router";
      if (process.env.NODE_ENV !== "development") {
        let pathname = location.pathname;
        if (this.isSeoFilter && location.pathname !== "/collection/all") {
          pathname = "/collection/all";
        }
        filtersUrl = useSourceUrl
          ? location.href
          : `${location.origin}${pathname}?${params}`;
        productsUrl = useSourceUrl
          ? `${location.origin}${pathname}.json${location.search}`
          : `${location.origin}${pathname}.json?${params}`;
      } else {
        const url = this.testUrl;
        const query =
          process.env.NODE_ENV === "development"
            ? location.hash.replace("#/collection", "")
            : "";
        filtersUrl = useSourceUrl ? `${url}${query}` : `${url}?${params}`;
        productsUrl = useSourceUrl
          ? `${url}.json${query}`
          : `${url}.json?${params}`;
      }
      const gotProducts = !this.parseProducts
        ? await this.$store.dispatch(COLLECTIONS_SET_PRODUCTS, {
            url: productsUrl,
            page: page || 1
          })
        : true;
      const gotFilters = await this.$store.dispatch(COLLECTIONS_SET_FILTERS, {
        url: filtersUrl,
        needProducts: this.parseProducts
      });
      if (gotFilters) this.$store.commit(COLLECTIONS_CLEAR_CHANGED_FILTERS);
      if (source !== "router" && gotProducts && gotFilters) {
        this.noNeedToHandleRoute = true;
        const targetRouteUrl =
          process.env.NODE_ENV !== "development"
            ? gotFilters.replace(location.origin, "")
            : `?${params}`;
        await this.$router.push(targetRouteUrl);
        this.$emit("update");
      }
    }
  }
};
</script>

<style lang="scss">
@import "../_assets/styles/product-card";
button,
input,
[contenteditable] {
  border: 0;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  background-color: transparent;
}
.collection-view {
  margin-top: 25px;
  min-height: 700px;
  .collection-products {
    margin-top: 35px;
  }
  &__pagination {
    justify-content: flex-end;
    border-top: 1px solid $color-b3;
    padding-top: 15px;
  }
}
.mobile-bar {
  display: none;
  position: relative;
  justify-content: center;
  align-items: center;
  height: 44px;
  width: 100%;
  background-color: #fff;
  border-bottom: 2px solid $color-b4;
  .title {
    text-transform: uppercase;
    font-weight: 600;
    font-size: 12px;
  }
  &__left,
  &__right {
    position: absolute;
    @include valign();
    &.v-icon {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 44px;
      height: 44px;
    }
  }
  &__left {
    left: $padding;
    &.v-icon {
      left: 0;
    }
  }
  &__right {
    right: $padding;
    &.v-icon {
      right: 0;
    }
  }
  &__center {
    margin: 0 auto;
  }
  &__button {
    display: flex;
    align-items: center;
    text-transform: uppercase;
    font-weight: 600;
    font-size: 12px;
    .v-icon {
      margin-left: 5px;
    }
  }
  @media (max-width: $mobile_width) {
    display: flex;
  }
}
</style>
