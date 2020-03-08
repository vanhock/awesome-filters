<template>
  <div class="v-tag">
    <span class="v-tag-text">{{ name }}</span>
  </div>
</template>

<script>
export default {
  name: "VTag",
  props: {
    name: {
      type: String,
      required: true
    }
  }
};
</script>

<style lang="scss" scoped>
.v-tag {
  display: inline-flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  vertical-align: center;
  background-color: $color-b3;
  color: #fff;
  font-size: 12px;
  padding: 4px 8px;
  border-radius: 15px;
}
</style>
