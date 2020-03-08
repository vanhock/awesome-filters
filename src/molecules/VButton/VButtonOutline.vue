<template>
  <v-button
    class="v-button-outline"
    @click="$emit('click')"
    :loading="loading"
    :theme="appTheme"
    no-shadow
    ><slot></slot
  ></v-button>
</template>

<script>
import VButton from "../../atoms/VButton";
export default {
  name: "VButtonOutline",
  components: { VButton },
  extends: VButton
};
</script>

<style lang="scss" scoped>
.v-button-outline {
  background-color: transparent;
  border: 2px solid $color-w1;
  color: $color-w1;
  &:hover {
    background-color: $color-w1;
    color: #fff;
  }
  @media (max-width: $mobile_width) {
    &:hover {
      background-color: transparent;
      border: 2px solid $color-w1;
      color: $color-w1;
    }
  }
}
</style>
