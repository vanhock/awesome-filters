<template>
  <div class="v-icon" @click="$emit('click')">
    <div
      class="v-icon-image"
      :class="`i-${icon}-${mode}`"
      :style="{
        width: params && params.iconSize,
        height: params && params.iconSize
      }"
    ></div>
  </div>
</template>

<script>
export default {
  name: "VIcon",
  props: {
    icon: {
      type: String,
      required: true
    },
    mode: {
      type: String,
      default: "icon"
    },
    params: {
      type: Object,
      default: () => ({
        iconSize: "24px"
      })
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../../_assets/styles/sprites";
@each $key, $value in $sprites {
  .i-#{$key}-icon {
    mask: url($value) center no-repeat;
    $size: map-get($sizes, $key);
    mask-size: map-get($sizes, width) map-get($size, height);
    background-color: #000;
  }
  .i-#{$key}-image {
    background: url($value) center no-repeat;
    $size: map-get($sizes, $key);
    background-size: map-get($sizes, width) map-get($size, height);
  }
}
.v-icon {
  display: flex;
  &-image {
    background-size: contain;
  }
}
</style>
