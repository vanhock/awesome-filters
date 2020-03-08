<template>
  <div class="filter">
    <div class="filter__title" v-if="showTitle && filter.title">
      {{ filter.title }}
    </div>
    <ul class="filter__items" v-if="filter.items">
      <li v-for="(item, index) in filter.items" :key="index">
        <v-radio-checkbox
          :name="item.name"
          :type="radio ? 'radio' : 'checkbox'"
          :label="filterItemTitle(item)"
          :checked="item.active"
          @onchange="onChangeFilter(item, $event)"
        />
      </li>
    </ul>
    <div class="filter__footer" v-show="!radio"><slot></slot></div>
  </div>
</template>

<script>
import VRadioCheckbox from "./VRadioCheckbox";
import { COLLECTIONS_SET_CHANGED_FILTERS } from "../_store/mutation-types";
export default {
  name: "VFilter",
  components: { VRadioCheckbox },
  props: {
    filter: {
      type: Object,
      default: () => ({}),
      required: true
    },
    radio: Boolean,
    showTitle: Boolean
  },
  methods: {
    filterItemTitle(item) {
      return (
        item.title + (item.productsCount ? ` (${item.productsCount})` : "")
      );
    },
    onChangeFilter(item, value) {
      const newItem = JSON.parse(JSON.stringify(item));
      newItem.active = value;
      this.$store.commit(COLLECTIONS_SET_CHANGED_FILTERS, {
        filter: {
          id: this.filter.id,
          item: newItem
        },
        replace: this.radio
      });
      if (this.radio) {
        this.$emit("apply");
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.filter {
  @media (max-width: $mobile_width) {
    padding: $padding;
  }
  &__items {
    list-style: none;
    margin: 0;
    padding: 0;
    li {
      &:not(:last-child) {
        padding-bottom: 10px;
      }
    }
  }
  &__footer {
    border-top: 1px solid $color-b4;
    padding-top: 15px;
    margin-top: 25px;
    @media (max-width: $mobile_width) {
      display: none;
    }
  }
}
</style>
