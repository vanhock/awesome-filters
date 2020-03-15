<template>
  <div class="price-filter filter">
    <div class="price-filter__range">
      <div class="range-item">
        <label :for="rangeIds[0]">{{ rangeLabels[0] }}</label>
        <input
          ref="priceMin"
          :type="type"
          :id="rangeIds[0]"
          v-model="rangeMin"
          :placeholder="priceMin"
          @click="$event.target.select()"
          @input="onChangeFilter"
        />
      </div>
      <div class="range-item">
        <label :for="rangeIds[1]">{{ rangeLabels[1] }}</label>
        <input
          ref="priceMax"
          :type="type"
          :id="rangeIds[1]"
          v-model="rangeMax"
          :placeholder="priceMax || filterMaxValue"
          @input="onChangeFilter"
          @click="$event.target.select()"
          @blur="checkMaxPrice"
        />
      </div>
    </div>
    <ul class="price-filter__variants" v-if="hasVariants">
      <li
        v-for="(value, index) in Object.values(variants)"
        :class="{ active: value.active }"
        :key="index"
        @click="onChangeFilter(value.items, true)"
      >
        {{ rangeLabels[0] }} <b>{{ value.price_min }}</b
        >{{ rangeLabels[1] }} <b>{{ value.price_max }}</b> руб.
      </li>
    </ul>
    <div class="filter__footer"><slot></slot></div>
  </div>
</template>

<script>
import { COLLECTIONS_SET_CHANGED_FILTERS } from "../_store/mutation-types";
import { throttle } from "../_helpers/utils";

export default {
  name: "PriceFilter",
  created() {
    // Set default values to range filter
    /* this.rangeMin = this.filter.items[0].value;
    this.rangeMax = this.filter.items[1].value;*/
  },
  mounted() {
    this.$refs.priceMax.focus();
  },
  data: () => ({
    rangeMin: undefined,
    rangeMax: undefined
  }),
  props: {
    filter: {
      type: Object,
      default: () => ({
        title: "Фильтр по цене",
        type: "price-filter",
        maxValue: 75000,
        items: []
      }),
      required: true
    },
    type: {
      type: String,
      default: "number"
    },
    rangeIds: {
      type: Array,
      default: () => ["price_min", "price_max"]
    },
    rangeLabels: {
      type: Array,
      default: () => ["от", "до"]
    }
  },
  computed: {
    range() {
      if (!this.filter || !this.filter["items"]) {
        return;
      }
      return this.filter.items.filter(i => i.type === "range");
    },
    priceMin() {
      return (this.range && this.range[0] && this.range[0].value) || 0;
    },
    priceMax() {
      return (this.range && this.range[1] && this.range[1].value) || 0;
    },
    variants() {
      if (!this.filter || !this.filter["items"]) {
        return;
      }
      const variants = {};
      const self = this;
      this.filter.items.forEach(i => {
        if (i.type !== "variant") {
          return;
        }
        if (!variants.hasOwnProperty(i.title)) self.$set(variants, i.title, {});
        self.$set(variants[i.title], i.name, i.value);
        variants[i.title].hasOwnProperty("active")
          ? (variants[i.title]["active"] =
              variants[i.title]["active"] && i.active)
          : self.$set(variants[i.title], "active", i.active);
        variants[i.title]["items"]
          ? variants[i.title]["items"].push(i)
          : self.$set(variants[i.title], "items", [i]);
      });
      return variants;
    },
    hasVariants() {
      return this.variants && Object.keys(this.variants).length;
    },
    filterMaxValue() {
      return (this.filter && this.filter.maxValue) || 0;
    }
  },
  methods: {
    onChangeFilter: throttle(function(items, apply) {
      let changedFilters = [];
      if (this.checkMaxPrice()) return;
      if (!items || !items.length) {
        changedFilters = [
          {
            ...this.filter.items[0],
            active: !!this.rangeMin || !!this.priceMin,
            value: this.rangeMin || this.filter.items[0].value
          },
          {
            ...this.filter.items[1],
            active: !!this.rangeMax || !!this.priceMax,
            value: this.rangeMax || this.filter.items[1].value
          }
        ];
      } else {
        changedFilters = items.map(item => ({ ...item, active: true }));
      }
      this.$store.commit(COLLECTIONS_SET_CHANGED_FILTERS, {
        filter: {
          id: this.filter.id,
          items: changedFilters
        },
        replace: true
      });
      if (apply) {
        this.$nextTick(() => {
          this.$emit("apply");
        });
      }
    }, 300),
    checkMaxPrice() {
      if (!this.rangeMax) return;
      this.rangeMax =
        (parseInt(this.rangeMax) >= this.filter.maxValue &&
          this.filter.maxValue) ||
        parseInt(this.rangeMax);
      return parseInt(this.rangeMax) > this.filter.maxValue;
    }
  }
};
</script>

<style lang="scss" scoped>
.filter {
  &__footer {
    margin-top: 25px;
    @media (max-width: $mobile_width) {
      display: none;
    }
  }
}
.price-filter {
  @media (max-width: $mobile_width) {
    padding: $padding;
  }
  &__range {
    display: flex;
    .range-item {
      label {
        display: block;
        margin-bottom: 5px;
        font-weight: bold;
      }
      input {
        display: block;
        background-color: $color-b5;
        border: 1px solid $color-b3;
        color: $color-b2;
        height: 27px;
        width: 140px;
        padding: 0 10px;
        &:focus {
          box-shadow: 0 0 5px $color-w1;
        }
      }
      &:first-child {
        margin-right: 10px;
      }
    }
  }
  &__variants {
    margin-bottom: 20px;
    &:before {
      content: "";
      display: block;
      width: 30%;
      height: 1px;
      margin: 20px auto;
      background-color: $color-b4;
    }
    li {
      display: flex;
      height: 33px;
      padding: 0 10px;
      align-items: center;
      margin-bottom: 10px;
      cursor: pointer;
      border-radius: 5px;
      background-color: $color-b5;
      border: 1px solid $color-b4;
      b {
        display: inline-block;
        margin: 0 4px;
      }
      &:not(.active):hover {
        border: 1px solid $color-b2;
      }
      &.active {
        border: 1px solid $color-b2;
        background-color: $color-b2;
        color: #fff;
      }
    }
  }
}
</style>
