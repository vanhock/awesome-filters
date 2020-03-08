<template>
  <div
    class="collection-filters"
    ref="collection-filters"
    :class="{ show: mobileFilterShow }"
  >
    <div class="collection-filters__header-mobile mobile-bar">
      <span class="title">Фильтры</span>
      <v-icon
        v-if="!selectedFilter"
        @click="closeFiltersMobile"
        class="mobile-close-icon mobile-bar__right"
        icon="x"
        :params="{
          iconSize: '22px'
        }"
      />
    </div>
    <div
      class="collection-filters__list"
      :class="{ selected: selectedFilter }"
      v-if="filters && filters.length"
    >
      <div
        class="filter-item"
        :class="[
          `type-${filter.type}`,
          { active: isActive(filter.id) },
          { selected: selectedFilter && selectedFilter.id === filter.id }
        ]"
        v-for="(filter, index) in filters"
        :key="index"
      >
        <div class="filter-item__title">
          <div class="title-text" @click="setSelected(filter.id)">
            <div class="title--desktop">{{ getActiveFilterTitle(filter) }}</div>
            <div
              class="title--mobile"
              v-html="getActiveFilterTitleMobile(filter)"
            ></div>
            <v-icon
              v-if="showDropdownIcon(filter)"
              class="arrow-icon"
              icon="chevron-down"
              :params="{
                iconSize: '16px'
              }"
            />
          </div>
          <template v-if="showFilterActions(filter)">
            <v-icon
              class="close-icon"
              icon="x"
              :params="{
                iconSize: '16px'
              }"
              @click="clearFilter(filter.id)"
            />
            <v-button-inline
              class="reset-filter-mobile"
              @click="clearFilter(filter.id)"
              >Сбросить</v-button-inline
            >
          </template>
        </div>
        <div
          class="filter-item__content"
          v-if="selectedFilter && selectedFilter.id === filter.id"
        >
          <div class="mobile-bar">
            <v-icon
              @click="applyAndCloseFilter"
              class="filter-back mobile-bar__left"
              icon="chevron-left"
              :params="{
                iconSize: '16px'
              }"
            />
            <span class="title">{{ filter.title }}</span>
          </div>
          <filter-general
            v-if="showFilterByType(filter.type, 'general')"
            @apply="
              applyAndCloseFilter();
              closeFiltersMobile();
            "
            :filter="selectedFilter"
          >
            <v-button-outline
              v-show="selectedFilter.type !== 'sorting'"
              @click="applyAndCloseFilter"
              class="apply-filter-button"
              :disabled="!activeFiltersString.length"
              >Применить</v-button-outline
            >
          </filter-general>
          <price-filter
            @apply="
              applyAndCloseFilter();
              closeFiltersMobile();
            "
            v-if="showFilterByType(filter.type, 'price-filter')"
            :filter="selectedFilter"
          >
            <v-button-outline
              @click="applyAndCloseFilter"
              class="apply-filter-button"
              :disabled="!activeFiltersString.length"
              >Применить</v-button-outline
            >
          </price-filter>
          <div class="collection-filters__footer-mobile mobile-bar">
            <v-button-outline
              :disabled="!isActive(filter.id)"
              @click="clearFilter(filter.id)"
              >Сбросить</v-button-outline
            >
            <v-button-primary
              :disabled="!activeFiltersString.length"
              @click="applyAndCloseFilter"
              >Применить</v-button-primary
            >
          </div>
        </div>
      </div>
    </div>
    <v-button-inline
      class="clear-all-filters"
      v-show="activeFilters && Object.keys(activeFilters).length > 1"
      @click="clearAllFilters"
      >Очистить фильтры</v-button-inline
    >
    <div class="collection-filters__footer-mobile mobile-bar">
      <v-button-outline
        :disabled="!activeFilters || Object.keys(activeFilters).length < 1"
        @click="clearAllFilters"
        >Сбросить</v-button-outline
      >
      <v-button-primary
        :disabled="!activeFiltersString.length"
        @click="closeFiltersMobile"
        >Показать</v-button-primary
      >
    </div>
    <div
      class="collection-filters__overlay"
      v-show="selectedFilter"
      @click="applyAndCloseFilter"
    ></div>
  </div>
</template>

<script>
import FilterGeneral from "../molecules/FilterGeneral";
import VIcon from "../atoms/VIcon/VIcon";
import { mapGetters } from "vuex";
import {
  COLLECTIONS_CLEAR_ALL_FILTERS,
  COLLECTIONS_CLEAR_FILTER,
  COLLECTIONS_SET_SELECTED_FILTER,
  COLLECTIONS_TOGGLE_MOBILE_FILTER
} from "../_store/mutation-types";
import "../_mixins/DirectivesMixin";
import VButtonOutline from "../molecules/VButton/VButtonOutline";
import VButtonInline from "../molecules/VButton/VButtonInline";
import VButtonPrimary from "../molecules/VButton/VButtonPrimary";
import PriceFilter from "../molecules/PriceFilter";
export default {
  name: "CollectionFilters",
  components: {
    PriceFilter,
    VButtonPrimary,
    VButtonInline,
    VButtonOutline,
    VIcon,
    FilterGeneral
  },
  mounted() {
    this.popupItem = this.$el;
  },
  computed: {
    ...mapGetters([
      "filters",
      "mobileFilterShow",
      "selectedFilter",
      "activeFilters",
      "activeFiltersString",
      "changedFilters",
      "loadingFilters"
    ])
  },
  methods: {
    setSelected(id) {
      this.selectedFilter && this.selectedFilter.id === id
        ? this.$store.commit(COLLECTIONS_SET_SELECTED_FILTER, "")
        : this.$store.commit(COLLECTIONS_SET_SELECTED_FILTER, id);
    },
    isActive(id) {
      return (
        this.activeFilters &&
        this.activeFilters.some(f => {
          if (f.type === "price-filter" && f.id === id) {
            return f.items.length > 1;
          }
          return f.id === id;
        })
      );
    },
    showFilterByType(type, componentName = "general") {
      switch (componentName) {
        case "price-filter":
          return type === "price-filter";
        case "single":
          return type === "field";
        case "general":
          return type === "property" || type === "sorting";
        default:
          return false;
      }
    },
    showDropdownIcon(filter) {
      return (
        (filter.type === "property" && !filter.active) ||
        filter.type === "sorting"
      );
    },
    showFilterActions(filter) {
      return filter.type !== "sorting" && this.isActive(filter.id);
    },
    getActiveFilterTitle(filter) {
      if (!this.activeFilters || !this.activeFilters.length) {
        return filter.title || "";
      }
      if (filter.type === "price-filter") {
        return this.activePriceFilterTitleSpecialRule(filter);
      }
      let delimiter =
        filter.title && filter.title.length && filter.type !== "sorting"
          ? ": "
          : "";
      let title = filter.title && filter.type !== "sorting" ? filter.title : "";
      this.activeFilters.some(f => {
        if (filter.id === f.id && f.active.length) {
          f.active.length === 1
            ? (title += delimiter + f.items[0].title)
            : (title += delimiter + f.active.length);
        }
      });
      return title;
    },
    getActiveFilterTitleMobile(filter) {
      if (!this.activeFilters || !this.activeFilters.length) {
        return filter.title || "";
      }
      if (filter.type === "price-filter") {
        return this.activePriceFilterTitleSpecialRule(filter);
      }
      let title = "";
      this.activeFilters.forEach(f => {
        if (filter.id === f.id && f.active.length) {
          f.items.forEach(
            item => (title += `${title.length ? ", " : ""}${item.title}`)
          );
        }
      });
      return title.length
        ? `${filter.title}:<span>${title}</span>`
        : filter.title;
    },
    activePriceFilterTitleSpecialRule(filter) {
      let title = filter.title;
      let values = {
        price_min: undefined,
        price_max: undefined
      };
      this.activeFilters.forEach(f => {
        if (filter.id !== f.id) {
          return;
        }
        f.items.forEach(item => {
          if (item.type !== "range" || !item.active) {
            return;
          }
          values[item.name] = item.value;
        });
      });
      if (values.price_min !== undefined && values.price_max !== undefined) {
        title = `От ${values.price_min} до ${values.price_max} руб.`;
      }
      return title;
    },
    applyAndCloseFilter() {
      this.selectedFilter && this.setSelected("");
      this.$emit("change");
    },
    closeFiltersMobile() {
      this.$store.commit(COLLECTIONS_TOGGLE_MOBILE_FILTER);
    },
    clearFilter(filterId) {
      this.selectedFilter && this.setSelected("");
      this.$store.commit(COLLECTIONS_CLEAR_FILTER, filterId);
      this.$emit("change");
    },
    clearAllFilters() {
      this.$store.commit(COLLECTIONS_CLEAR_ALL_FILTERS);
      this.$emit("change");
      this.closeFiltersMobile();
    }
  }
};
</script>

<style lang="scss" scoped>
.collection-filters {
  position: relative;
  z-index: 12;
  background-color: #fff;
  padding-bottom: 20px;
  @media (min-width: $mobile_width) {
    position: sticky;
    top: $sticky-top;
    display: flex;
    align-items: flex-start;
    margin-left: -$padding;
    margin-right: -$padding;
    padding-left: $padding;
    padding-right: $padding;
    &:before {
      content: "";
      display: block;
      position: absolute;
      height: 15px;
      width: 100%;
      top: -15px;
      left: 0;
      background-color: #fff;
    }
  }
  @media (max-width: $mobile_width) {
    display: none;
    position: fixed;
    height: 100%;
    width: 100%;
    top: 0;
    left: 0;
    z-index: 12;
    &.show {
      display: block;
    }
  }
  &__header-mobile {
    @media (min-width: $mobile_width) {
      display: none;
    }
    @media (max-width: $mobile_width) {
      display: flex;
      justify-content: center;
      align-items: center;
      position: relative;
      .title {
        font-size: 14px;
        line-height: 14px;
      }
      .mobile-close-icon {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 100%;
        width: 42px;
        right: 0;
        z-index: 14;
      }
    }
  }
  &__list {
    display: block;
    @media (max-width: $mobile_width) {
      flex-direction: column;
      justify-content: flex-start;
      height: 100%;
      max-height: calc(100% - 100px);
    }
    @media (min-width: $mobile_width) {
      margin: -5px;
    }
    &.selected {
      .filter-item:not(.selected) .filter-item__title {
        opacity: 0.7;
      }
    }
  }
  &__footer-mobile {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    border-bottom: 0;
    border-top: 2px solid $color-b4;
    display: flex;
    justify-content: space-between;
    height: 60px;
    .v-button {
      width: 100%;
      margin: 0 10px;
      padding: 8px 19px;
    }
    @media (min-width: $mobile_width) {
      display: none;
    }
  }
  .filter-item {
    margin: 5px;
    position: relative;
    @media (max-width: $mobile_width) {
      padding-left: $padding;
      padding-right: $padding;
    }
    @media (min-width: $mobile_width) {
      display: inline-block;
    }
    &__title,
    &__title > div {
      display: flex;
      align-items: center;
    }
    &__title {
      .title-text > * {
        display: flex;
        align-items: center;
      }
      .title-text,
      .title-text > *,
      .close-icon {
        height: 100%;
      }
      @media (max-width: $mobile_width) {
        justify-content: flex-start;
        width: 100%;
        font-size: 14px;
        padding-top: 15px;
        padding-bottom: 15px;
        .arrow-icon,
        .close-icon,
        .title--desktop {
          display: none;
        }
        .reset-filter-mobile {
          margin-left: auto;
        }
        .title-text,
        .title--mobile {
          height: 15px;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
        .title-text {
          width: calc(100% - 50px);
        }
        .title--mobile {
          width: 100%;
        }
      }
      @media (min-width: $mobile_width) {
        position: relative;
        z-index: 3;
        justify-content: center;
        height: 24px;
        border: 1px solid $color-b2;
        border-radius: 5px;
        font-size: 14px;
        cursor: pointer;
        .title--mobile,
        .reset-filter-mobile {
          display: none;
        }
        .title-text {
          padding: 0 7px;
        }
      }
      .v-icon {
        margin-left: 5px;
        margin-right: -3px;
      }
      .close-icon {
        position: relative;
        padding: 0 7px 0 5px;
        margin-left: 0;
        &:before {
          content: "";
          position: absolute;
          width: 1px;
          height: calc(100% + 10px);
          left: 0;
          top: -5px;
          background-color: #fff;
        }
        &:hover {
          opacity: 0.8;
        }
        .v-icon-image {
          mask-size: 11px;
        }
      }
    }
    @media (max-width: $mobile_width) {
      &:not(:last-child) .filter-item__title {
        border-bottom: 1px solid $color-b4;
      }
    }
    &__content {
      @media (max-width: $mobile_width) {
        position: fixed;
        top: 0;
        left: 0;
        z-index: 15;
        width: 100%;
        height: 100%;
        background-color: #fff;
      }
      @media (min-width: $mobile_width) {
        position: absolute;
        left: 50%;
        top: 40px;
        transform: translate(-50%, 0);
        z-index: 10;
        &:before {
          content: "";
          position: absolute;
          border-left: 10px solid transparent;
          border-right: 10px solid transparent;
          border-bottom: 10px solid #fff;
          left: 50%;
          top: -10px;
          transform: translate(-50%, 0);
        }
        .filter {
          background-color: #fff;
          @include box-shadow(medium);
          padding: 20px 15px;
          font-size: 14px;
          min-width: 250px;
        }
      }
    }
    &.active .filter-item__title {
      @media (min-width: $mobile_width) {
        background-color: $color-b2;
        color: #fff;
      }
    }
    &.selected {
      .filter-item__title {
        z-index: 3;
      }
    }
    &.type-property &__title {
    }
  }
  &__overlay {
    content: "";
    position: fixed;
    top: 0;
    bottom: 0;
    background: rgba(255, 255, 255, 0.5);
    right: 0;
    left: 0;
    z-index: 1;
  }
}
.apply-filter-button {
  border: 1px solid $color-b3;
  color: $color-b2;
  &:hover {
    border: 1px solid $color-w1;
  }
}
.clear-all-filters {
  @media (max-width: $mobile_width) {
    display: none;
  }
}
</style>
<style lang="scss">
.filter-item.active .filter-item__title {
  .v-icon .v-icon-image {
    background-color: #fff;
  }
  .close-icon .v-icon-image {
    mask-size: 11px;
  }
  @media (max-width: $mobile_width) {
    .title--mobile {
      color: $color-b1;
      span {
        color: $color-b3;
      }
    }
  }
}
</style>
