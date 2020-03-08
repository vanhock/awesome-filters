<template>
  <div class="v-radio-checkbox">
    <input
      ref="input"
      :type="type"
      :name="name"
      :id="uniqueId"
      :class="{ ios: ios }"
      :checked="checked"
      @change="onChange"
    />
    <label :for="uniqueId"
      ><span class="v-radio-checkbox__label">{{ label }}</span></label
    >
  </div>
</template>

<script>
export default {
  /** ToDo: Need to refactor VRadioCheckbox component **/
  name: "VRadioCheckbox",
  data: () => ({
    inputValue: false
  }),
  mounted() {
    this.resetValue();
  },
  props: {
    name: {
      type: String,
      required: true
    },
    label: {
      type: String
    },
    id: {
      type: String,
      default: `v-radio`
    },
    type: {
      type: String,
      default: "checkbox"
    },
    checked: {
      type: Boolean,
      default: false
    },
    description: String,
    ios: Boolean
  },
  computed: {
    changed() {
      return (!this.inputValue && false) || this.inputValue !== this.value;
    },
    uniqueId() {
      return this.id + Math.random();
    }
  },
  methods: {
    resetValue() {
      this.inputValue = this.checked || false;
    },
    onChange() {
      this.$emit("onchange", (this.inputValue = !this.inputValue));
    }
  }
};
</script>

<style lang="scss" scoped>
.v-radio-checkbox {
  display: flex;
  align-items: center;
  &__label {
    margin-left: 10px;
    cursor: pointer;
  }
  [type="checkbox"],
  [type="radio"] {
    display: none;
    &,
    &:after,
    &:before,
    & *,
    & *:after,
    & *:before,
    & + .tgl-btn {
      box-sizing: border-box;
      &::selection {
        background: none;
      }
    }
    & + label {
      display: flex;
      vertical-align: top;
      position: relative;
      padding-left: 15px;
      cursor: pointer;
      user-select: none;
      line-height: 19px;
      &:before,
      &:after {
        content: "";
        position: absolute;
        @include valign();
        left: 0;
      }
      &:before {
        width: 14px;
        height: 14px;
        border: 1px solid #000;
      }
      &:after {
        -webkit-transform: translate(-50%, -50%) scale(0);
        transform: translate(-50%, -50%) scale(0);
        -webkit-transition: -webkit-transform 0.2s;
        transition: -webkit-transform 0.2s;
        transition: transform 0.2s;
      }
    }
    &:not(:checked) {
      & + label {
        &:hover {
          &:before {
            background-color: $color-b5;
          }
        }
      }
    }
    &:checked {
      & + label {
        &:before {
          background-color: #000;
        }
        &:after {
          width: 10px;
          height: 10px;
          background-image: url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 8'%3E%3Cpath fill='%23fff' d='M6.564.75l-3.59 3.612-1.538-1.55L0 4.26 2.974 7.25 8 2.193z'/%3E%3C/svg%3E");
          transform: translate(-50%, -50%) scale(1);
          left: 7px;
        }
      }
    }
  }

  // ios style
  [type="checkbox"] {
    &.ios {
      & + label {
        outline: 0;
        display: block;
        width: 3em;
        height: 1.5em;
        position: relative;
        cursor: pointer;
        user-select: none;
        background-color: $color-b4;
        border-radius: 2em;
        padding: 2px;
        transition: all 0.4s ease;
        &:after,
        &:before {
          position: relative;
          display: block;
          content: "";
          width: 50%;
          height: 100%;
          @include valign();
        }
        &:after {
          left: 0;
          border-radius: 50%;
          background: #fff;
          transition: all 0.2s ease;
        }
        &:before {
          display: none;
        }
      }
      &:checked + label {
        background-color: $color-w1;
        &:after {
          left: 50%;
        }
      }
    }
  }
}
</style>
