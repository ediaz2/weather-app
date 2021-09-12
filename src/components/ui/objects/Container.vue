<template>
  <component :is="tag" class="container">
    <slot />
  </component>
</template>

<script>
  import { defineComponent } from 'vue';

  export default defineComponent({
    props: {
      tag: {
        type: String,
        default: 'div',
      },
    },
  });
</script>

<style lang="scss" scoped>
  @use '@/assets/scss/settings/_variables.scss';

  .container {
    max-width: variables.$max-width;
    margin: 0 auto;
    padding: variables.$spacing variables.$spacing-s;
  }
</style>
