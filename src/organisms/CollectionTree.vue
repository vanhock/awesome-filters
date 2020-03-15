<template>
  <div
    class="collection-tree"
    :class="{ show: mobileCollectionsShow }"
    v-show="showCollections"
  >
    <slot></slot>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "CollectionTree",
  mounted() {
    this.showCollections =
      !!this.$slots["default"] && !!this.$slots["default"].length;
  },
  data: () => ({
    showCollections: false
  }),
  computed: {
    ...mapGetters(["mobileCollectionsShow"])
  }
};
</script>

<style lang="scss" scoped>
.collection-tree {
  position: sticky;
  top: $sticky-top;
  @media (max-width: $mobile_width) {
    display: none;
    &.show {
      display: block;
      z-index: 10;
      padding-top: 15px;
      padding-bottom: 30px;
      overflow-y: auto;
      background-color: #fff;
    }
  }
  &__header {
    margin-bottom: 10px;
    padding-bottom: 10px;
    border-bottom: 1px solid $color-b4;
    font-size: 18px;
    color: $color-b3;
    cursor: default;
    @media (max-width: $mobile_width) {
      display: none;
    }
  }
  &__list {
    @media (min-width: $mobile_width) {
      max-height: 700px;
      padding-right: 10px;
      overflow-y: auto;
      @include scroll(0);
      &::-webkit-scrollbar {
        width: 10px;
        height: 10px;
      }
    }
    &__item {
      color: #000;
      font-size: 14px;
      line-height: 15px;
      &:not(:last-child) {
        margin-bottom: 10px;
      }
      a {
        display: flex;
        padding: 3px 7px;
        align-items: center;
      }
      &.active > a {
        background-color: #161616;
        color: #f5f5f5;
        border-radius: 3px;
      }
      .products-count {
        margin-left: 10px;
        color: $color-b3;
        font-size: 11px;
      }
      &:not(.root) {
        margin: 10px 0 10px 15px;
      }
      @media (min-width: $mobile_width) {
        &:not(.active) > .collection-tree__list__item {
          display: none;
        }
      }
    }
    @media (max-width: $mobile_width) {
      &.active {
        .collection-tree__list__item {
          &.root:not(.has_child) {
            display: none;
          }
          &.root > a {
            display: none;
          }
        }
      }
      &:not(.active) {
        .root > .collection-tree__list__item {
          display: none;
        }
      }
      &__item {
        font-size: 16px;
        line-height: 18px;
        &:not(:last-child):not(.active) {
          margin-bottom: 8px;
          padding-bottom: 8px;
          border-bottom: 1px solid $color-b41;
        }
        &.active > a {
          background-color: transparent;
          font-weight: bold;
          color: $color-b1;
        }
      }
    }
  }
}
</style>
