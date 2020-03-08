<template>
  <v-filter
    :filter="filter"
    :show-title="showTitle"
    :radio="filter.type === 'sorting'"
    @change="$emit('change')"
    @apply="$emit('apply')"
    ><slot></slot
  ></v-filter>
</template>

<script>
import VFilter from "../atoms/VFilter";
export default {
  name: "FilterGeneral",
  components: { VFilter },
  extends: VFilter
};
</script>

<style scoped></style>
