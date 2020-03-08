<template>
  <div class="collection-products">
    <div v-if="productsHTML && productsHTML.length" v-html="productsHTML"></div>
    <template v-if="!productsHTML">
      <slot></slot>
    </template>
    <empty-placeholder
      icon="empty"
      title="Товар закончился"
      v-show="hasNoProducts"
    >
      <v-button-primary @click="back">Вернуться назад</v-button-primary>
    </empty-placeholder>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import EmptyPlaceholder from "../molecules/EmptyPlaceholder";
import VButtonPrimary from "../molecules/VButton/VButtonPrimary";

export default {
  name: "CollectionProducts",
  components: { VButtonPrimary, EmptyPlaceholder },
  computed: {
    ...mapGetters([
      "productsHTML",
      "loadingProducts"
    ]),
    isSlotFilled() {
      return (
        !!this.$slots["default"] &&
        !!this.$slots.default.length &&
        !this.hideProductsSlot
      );
    },
    hasNoProducts() {
      return (
        !this.isSlotFilled &&
        !this.loadingProducts &&
        (!this.productsHTML || !this.productsHTML.length)
      );
    }
  },
  methods: {
    back() {
      history.back();
    }
  }
};
</script>

<style lang="scss">
.collection-products .empty-placeholder {
  @media (min-width: $mobile-width) {
    position: absolute;
    top: -5px;
    z-index: 20;
  }
}
</style>
