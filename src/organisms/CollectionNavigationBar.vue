<template>
  <div class="collection-navigation-bar navbar">
    <div class="navbar__header mobile-bar layout--a">
      <v-icon
        class="button-back"
        icon="chevron-left"
        :params="{
          iconSize: '16px'
        }"
        @click="back()"
      />
      <div class="title mobile-bar__center">
        {{ currentCollection }}<span>{{ productsTotalCount }}</span>
      </div>
    </div>
    <div class="navbar__actions mobile-bar layout--a">
      <button
        v-show="!interfaceSettings['hideCollectionsMenu']"
        class="collections-toggle mobile-bar__button mobile-bar__left"
        @click="onCollectionButtonClick"
      >
        <span>{{title}}</span>
        <v-icon
          icon="chevron-down"
          :params="{
            iconSize: '14px'
          }"
        />
      </button>
      <button
        class="filters-toggle mobile-bar__button mobile-bar__right"
        @click="onFilterButtonClick"
      >
        <span>Фильтры</span>
        <v-icon
          v-show="!activeFiltersString"
          icon="chevron-right"
          :params="{
            iconSize: '14px'
          }"
        />
        <span v-show="activeFiltersString" class="has-active-filters"></span>
      </button>
    </div>
  </div>
</template>

<script>
import VIcon from "../atoms/VIcon/VIcon";
import {
  COLLECTIONS_TOGGLE_MOBILE_COLLECTIONS,
  COLLECTIONS_TOGGLE_MOBILE_FILTER
} from "../_store/mutation-types";
import { mapGetters } from "vuex";
export default {
  name: "CollectionNavigationBar",
  components: { VIcon },
  props: {
    currentCollection: String,
    title: {
      type: String,
      default: "Коллекции"
    }
  },
  computed: {
    ...mapGetters([
      "activeFiltersString",
      "productsTotalCount",
      "interfaceSettings"
    ])
  },
  methods: {
    onFilterButtonClick() {
      this.$store.commit(COLLECTIONS_TOGGLE_MOBILE_FILTER, true);
    },
    onCollectionButtonClick() {
      this.$store.commit(COLLECTIONS_TOGGLE_MOBILE_COLLECTIONS);
    },
    back() {
      history.back();
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../_assets/styles/base";
.collection-navigation-bar {
  width: 100%;
  & + * {
    margin-top: 25px;
  }
  .title {
    span {
      color: $color-b3;
      margin-left: 5px;
    }
  }
  .button-back {
    position: absolute;
    @include valign();
    left: 0;
    width: 48px;
    height: 40px;
    justify-content: center;
    align-items: center;
  }
  .filters-toggle {
    .has-active-filters {
      background-color: $color-w1;
      width: 12px;
      height: 12px;
      border-radius: 50%;
      margin-top: -1px;
      margin-left: 5px;
    }
  }
}
</style>
