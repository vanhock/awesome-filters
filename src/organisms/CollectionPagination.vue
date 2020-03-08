<template>
  <div class="collection-pagination" v-if="paginationPages > 1">
    <div
      class="collection-pagination__item"
      :class="{ active: paginationCurrentPage === 1 }"
      @click="$emit('change', paginationCurrentPage - 1)"
    >
      <v-icon icon="chevron-left" :params="iconParams" />
      <span>Назад</span>
    </div>
    <div
      class="collection-pagination__item"
      v-for="(page, index) in paginationPages"
      :key="index"
      v-if="showPage(page)"
      :class="{ active: paginationCurrentPage === page }"
      @click="$emit('change', page)"
    >
      {{ page }}
    </div>
    <div
      class="collection-pagination__item"
      :class="{ active: paginationCurrentPage === paginationPages }"
      @click="$emit('change', paginationCurrentPage + 1)"
    >
      <span>Вперёд</span>
      <v-icon icon="chevron-right" :params="iconParams" />
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import VIcon from "../atoms/VIcon/VIcon";
export default {
  name: "CollectionPagination",
  components: { VIcon },
  computed: {
    ...mapGetters(["paginationCurrentPage", "paginationPages"])
  },
  data: () => ({
    iconParams: {
      iconSize: "16px"
    }
  }),
  methods: {
    showPage(page) {
      return (
        this.paginationCurrentPage === page ||
        (page >= this.paginationCurrentPage - 3 &&
          page <= this.paginationCurrentPage + 3)
      );
    }
  }
};
</script>

<style lang="scss" scoped>
.collection-pagination {
  display: flex;
  margin-top: 15px;
  margin-bottom: 15px;
  &__item {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    border-bottom: 1px solid $color-b2;
    border-top: 1px solid $color-b2;
    border-left: 1px solid $color-b2;
    width: 38px;
    height: 38px;
    font-size: 14px;
    &:not(.active) {
      cursor: pointer;
    }
    .v-icon {
      margin: 0 5px;
    }
    &.active {
      background-color: $color-b2;
      color: #fff;
      pointer-events: none;
    }
    &:last-child,
    &:first-child {
      border-right: 1px solid $color-b2;
      border-radius: 4px;
      width: auto;

      &.active {
        display: none;
      }
    }
    &:first-child {
      margin-right: 10px;
      padding-right: 10px;
      border: 1px solid $color-b2;
    }
    &:last-child {
      padding-left: 10px;
      margin-left: 10px;
      border: 1px solid $color-b2;
    }
    &:nth-last-child(2) {
      border-right: 1px solid $color-b2;
      border-radius: 0 4px 4px 0;
    }
    &:nth-child(2) {
      border-radius: 4px 0 0 4px;
    }
  }
}
</style>
