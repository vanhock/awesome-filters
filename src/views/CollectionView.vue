<template>
  <div class="collection-view" data-af-filters-view>
    <div class="container">
      <collection-navigation-bar :current-collection="currentCollection" />
      <div class="row">
        <div :class="collectionsColClass">
          <collection-tree ref="collections"
            ><slot name="collections"></slot
          ></collection-tree>
        </div>
        <div :class="filtersColClass">
          <slot name="before-filters"></slot>
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
          <slot name="after-filters"></slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CollectionNavigationBar from "../organisms/CollectionNavigationBar";
import CollectionTree from "../organisms/CollectionTree";
import CollectionFilters from "../organisms/CollectionFilters";
import CollectionProducts from "../organisms/CollectionProducts";
import {
  COLLECTIONS_CLEAR_CHANGED_FILTERS,
  COLLECTIONS_SET_FILTERS,
  COLLECTIONS_SET_INTERFACE_SETTINGS,
  COLLECTIONS_SET_PAGINATION,
  COLLECTIONS_SET_PRODUCTS
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
    const pageSize = getParameterByName("page_size") || this.pageSize;
    if (currentPage) {
      this.$store.commit(COLLECTIONS_SET_PAGINATION, {
        currentPage: parseInt(currentPage),
        total: this.productsTotalCount || 0,
        pageSize: pageSize
      });
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
    pageSize: {
      type: Number,
      default: 24
    },
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
    isSeoFilter: Boolean,
    scrollingElement: String
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
      page = parseInt(getParameterByName("page") || "1"),
      activeFiltersString = this.activeFiltersString
    ) {
      if (!source && !this.changedFilters.length) {
        return;
      }
      const scrollingElement =
        (this.scrollingElement &&
          document.querySelector(this.scrollingElement)) ||
        window;
      scrollingElement.scrollTo(0, 0);
      let filtersUrl = "";
      let productsUrl = "";
      let searchQuery = getParameterByName("q");
      let params = activeFiltersString;
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
            ? location.hash.replace("#/", "")
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
[data-af-filters-view] {
  text-align: left;
  box-sizing: border-box;
  font-size: 14px;
  @import "../_assets/styles/normalize";
  @import "../_assets/styles/grid.min";
  @import "../_assets/styles/product-card";

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
  pre {
    font-family: inherit;
    margin: 0;
  }

  h1,
  h2,
  h3,
  h4 {
    font-weight: bold;
  }

  h1.title {
    font-weight: 100;
    text-align: center;
  }

  a {
    text-decoration: none;
    color: $color-b1;
    &.link {
      color: $color-base;
      font-weight: bold;
    }
  }

  .gap-header-link {
    & > *:not(:last-child) {
      margin-right: 48px;
    }
  }

  @media (max-width: 1200px) {
    .gap-header-link {
      & > *:not(:last-child) {
        margin-right: 16px;
      }
    }
  }

  .up-button {
    display: none;
  }

  .active {
    & > a {
      &:hover {
        border-bottom: 0;
      }
    }
  }

  ul {
    margin: 0;
    padding: 0;
    list-style: none;

    li {
      margin: 0;
      padding: 0;
    }
  }

  .bold {
    font-weight: bold;
  }

  .highlight {
    & > a {
      color: $color-w3 !important;
    }
  }

  .clearfix:after {
    content: "";
    display: block;
    clear: both;
  }

  .hidden-h1 {
    visibility: hidden;
    margin: 0;
    padding: 0;
    width: 0;
    height: 0;
    position: absolute;
    z-index: -1;
  }

  .fixed-top-left {
    position: fixed;
    top: 0;
    margin-left: 960px;
    height: 100%;
    z-index: 999;
  }

  button,
  input,
  [contenteditable] {
    border: 0;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    background-color: transparent;

    &:focus,
    &:active,
    &:visited {
      -webkit-appearance: none;
      -moz-appearance: none;
      appearance: none;
      border: 0;
      outline: 0;
    }
  }

  .text-right {
    text-align: right;
  }

  .right-align {
    margin-left: auto;
  }

  .center-align {
    position: absolute;
    margin: 0 50%;
    left: 0;

    a {
      display: flex;
      margin: 0 0 0 -50%;
    }
  }

  @media (min-width: 1200px) {
    .container {
      max-width: calc(1400px + 15px + 15px) !important;
    }
  }

  .city-select-list {
    position: absolute;
    margin-top: 15px;
    background-color: #fff;
    border: 1px solid $color-b5;
    z-index: 9999999999;

    & > li {
      display: block;

      &:not(:first-child) {
        border-top: 1px solid $color-b5;
      }

      a {
        display: block;
        color: $color-b2;
        padding: 10px 15px;
        font-size: 12px;

        &:hover {
          color: $color-b1;
        }

        b {
          display: block;
          margin-top: 3px;
        }
      }

      &:hover a {
        background-color: $color-b6;
        color: $color-b1;
      }
    }
  }

  .layout--a {
    padding-right: 15px;
    padding-left: 15px;
  }
}
</style>
