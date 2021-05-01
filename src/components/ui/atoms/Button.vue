<template>
  <button class="btn" :class="{ btn__accent: accent }">
    <slot />
  </button>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';
  export default defineComponent({
    props: {
      accent: {
        type: Boolean,
        default: false,
      },
    },
  });
</script>

<style lang="scss" scoped>
  @use "@/assets/scss/settings/_variables.scss";

  .btn {
    display: inline-block;
    padding: 0.75rem 1.87rem;
    transition: all 0.2s;
    border: none;
    background: variables.$background-light-color;
    color: variables.$text-inverted-color;
    font-size: variables.$fs-btn;
    font-weight: 600;
    letter-spacing: 0.03em;
    text-align: center;
    text-decoration: none;
    cursor: pointer;
    &__accent {
      background: variables.$background-accent-color;
    }
  }
</style>
