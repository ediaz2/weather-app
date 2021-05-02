<template>
  <div class="input">
    <svg-icon name="magnify" />
    <input
      v-bind="$attrs"
      type="text"
      :placeholder="placeholder"
      class="input-text"
      :value="modelValue"
      @input="modelInput"
    />
  </div>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';
  export default defineComponent({
    props: {
      modelValue: {
        type: String,
        default: '',
      },
      placeholder: {
        type: String,
        default: '',
      },
    },
    emits: ['update:modelValue'],

    setup(_props, { emit }) {
      const modelInput = (e: Event) => {
        emit('update:modelValue', (e.target as HTMLInputElement)?.value);
      };
      return { modelInput };
    },
  });
</script>

<style lang="scss" scoped>
  @use "@/assets/scss/settings/_variables.scss";

  .input {
    display: flex;
    align-items: center;
    width: 100%;
    padding: variables.$spacing-padding;
    border: 1px variables.$text-muted-color solid;
    &-text {
      height: 100%;
      padding-left: variables.$spacing-padding;
      border: none;
      -webkit-appearance: none;
      -moz-appearance: none;
      border-radius: 0;
      background-color: transparent;
      color: variables.$text-inverted-color;
      &:focus-visible {
        outline: none;
      }
    }
    &:hover,
    &:focus {
      border: 1px variables.$background-lighter-color solid;
    }
  }
</style>
