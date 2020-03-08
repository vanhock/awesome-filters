<template>
  <div
    class="v-input-search"
    v-clickoutside="{
      handler: 'onClickOutside',
      exclude: [],
      target: '.v-modal'
    }"
  >
    <label class="v-input-search__label" v-if="label">{{ label }}</label>
    <div
      class="v-input-search__container"
      :class="{ 'options-open': showOptions }"
    >
      <v-input
        ref="input"
        :type="type"
        :id="id"
        :name="name"
        :value="value"
        :placeholder="placeholder"
        :required="required"
        :autocomplete="autocomplete"
        :validation-message="validationMessage"
        :show-validation="showInputValidation"
        :mask="mask"
        :mask-pattern="maskPattern"
        :disabled="disabled"
        :theme="theme"
        :autofocus="autofocus"
        validation-show-manual
        @onchange="onchange"
        @onfocus="showOptions = true"
        @onblur="showOptions = false"
      />
      <v-button-inline
        v-if="showOptions"
        class="v-input-search__submit"
        @click="onclick"
      >
        <v-icon
          v-if="!noIcon"
          :icon="buttonIcon"
          :params="{ iconSize: '28px' }"
        />
        <span>{{ buttonText }}</span>
      </v-button-inline>
      <div
        class="v-input-search__selected-options"
        v-if="multiSelect && selectedOptions.length"
      >
        <v-tag
          class="v-input-search__selected-options__option"
          v-for="(o, index) in selectedOptions"
          :key="index"
          :name="o.name"
        />
      </div>
      <div class="v-input-search__options" v-show="showOptions">
        <div
          class="v-input-search__options__option"
          :class="{
            selected: showSelectedOption(o)
          }"
          v-for="(o, index) in filteredOptions"
          :key="index"
          @click="toggleSelectOption(o)"
        >
          {{ o.name }}
        </div>
        <div class="not-found" v-if="!filteredOptions.length">
          {{ $t("Nothing found") }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import VInput from "../../atoms/VInput";
import VIcon from "../../atoms/VIcon/VIcon";
import VButtonInline from "../VButton/VButtonInline";
import VTag from "../../atoms/VTag";
import "../../mixins/DirectivesMixin";
export default {
  name: "VInputSearch",
  components: { VTag, VButtonInline, VIcon, VInput },
  mounted() {
    const self = this;
    this.$refs.input.$on("onchange", data => {
      self.currentValue = data.value;
      self.isValid = data.valid;
      self.$emit("onchange", data);
      self.optionsFilter = true;
    });
    this.$refs.input.$on("focus", () => {
      self.showOptions = true;
    });
  },
  data: () => ({
    showOptions: false,
    optionsFilter: false,
    currentValue: "",
    isValid: false,
    showInputValidation: false,
    selectedOption: {},
    selectedOptions: []
  }),
  extends: VInput,
  props: {
    items: {
      type: Array,
      default: () => []
    },
    buttonText: String,
    buttonIcon: {
      type: String,
      default: "arrow-right-circle"
    },
    noIcon: Boolean,
    options: {
      type: Array,
      default: () => []
    },
    autofocus: Boolean,
    multiSelect: Boolean /** Support multi-select **/
  },
  computed: {
    filteredOptions() {
      if (!this.optionsFilter || !this.currentValue) {
        return this.options;
      }
      return this.options.filter(o =>
        o.name.toLowerCase().includes(this.currentValue.toLowerCase())
      );
    }
  },
  methods: {
    onclick() {
      if (this.isValid) {
        this.$emit("onclick");
      }
      this.showInputValidation = true;
      this.showOptions = false;
    },
    onchange(value, valid, event) {
      console.log(event);
      this.$emit("onchange");
    },
    clear() {
      this.$refs.input.clearValue();
      this.$nextTick(() => {
        this.showInputValidation = false;
      });
    },
    toggleSelectOption(option) {
      if (this.selectedOption === option) {
        this.selectedOption = {};
      } else {
        this.selectedOption = option;
        if (!this.multiSelect) {
          this.currentValue = option.name;
          this.$refs.input.inputValue = option.name;
          this.showOptions = false;
          this.optionsFilter = false;
        }
      }
      if (this.selectedOptions.includes(option)) {
        this.selectedOptions.splice(this.selectedOptions.indexOf(option), 1);
      } else {
        this.selectedOptions.push(option);
      }
    },
    showSelectedOption(option) {
      if (this.multiSelect) {
        return this.selectedOptions && this.selectedOptions.includes(option);
      } else {
        return option === this.selectedOption;
      }
    },
    onClickOutside() {
      this.showOptions = false;
      /** ToDo: Improve clickoutside directive, add target element **/
    }
  }
};
</script>

<style lang="scss">
.v-input-search {
  &__label {
    display: block;
    margin-bottom: 15px;
    font-weight: bold;
    font-size: 18px;
    color: $color-b3;
  }
  &__container {
    position: relative;
    @include box-shadow(medium);
    border-radius: 7px;
    border: 1px solid rgba(204, 204, 204, 0.72);
    &.options-open {
      border-radius: 7px 7px 0 0;
    }
  }
  .v-input {
    max-width: calc(100% - 75px);
    margin: 0;
    .input {
      input {
        border-bottom: 0;
        padding: 10px 20px;
        box-sizing: border-box;
        font-size: 18px;
      }
      .validation-message {
        @include valign();
      }
    }
  }
  &__submit {
    position: absolute;
    right: 0;
    top: 0;
    padding: 8px 20px;
    span {
      margin-top: 1px;
      margin-left: 7px;
    }
  }
  &__options {
    position: absolute;
    width: 100%;
    top: 100%;
    left: -1px;
    margin-top: 1px;
    max-height: 200px;
    overflow: auto;
    @include scroll();
    background-color: #fff;
    @include box-shadow(medium);
    border-radius: 0 0 7px 7px;
    border: 1px solid rgba(204, 204, 204, 0.72);
    box-sizing: content-box;
    z-index: 10;
    &__option {
      padding: 10px 20px;
      cursor: pointer;
      color: $color-b3;
      &.selected {
        font-weight: bold;
        color: $color-b2;
        background-color: $color-b6;
      }
      &:not(:last-child) {
        border-bottom: 1px solid $color-b5;
      }
      &:not(.selected):hover {
        color: $color-b2;
      }
    }
    .not-found {
      padding: 10px 20px;
    }
  }
  &__selected-options {
    padding: 15px 20px 10px;
    border-top: 1px solid $color-b5;
    &__option {
      margin: 0 5px 5px;
    }
  }
}
</style>
