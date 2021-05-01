<template>
  <div class="search-item" @click.stop="$emit('search')">
    <span>{{ name }}</span>
    <svg-icon name="chevronRight" class="search__svg" />
  </div>
</template>

<script lang="ts">
  import { defineComponent, ref } from 'vue';

  export default defineComponent({
    name: 'SidebarSearchItem',

    props: {
      name: {
        type: String,
        required: true,
      },
    },
    emits: ['search'],

    setup() {
      let searchInput = ref('');

      return { searchInput };
    },
  });
</script>

<style lang="scss" scoped>
  @use "@/assets/scss/settings/_variables.scss";

  .search {
    &-item {
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 100%;
      margin-bottom: variables.$spacing-s;
      padding: variables.$spacing-padding;
      &:hover {
        border: 1px variables.$background-lighter-color solid;
        cursor: pointer;
      }
    }
    &__svg {
      width: 1.2rem;
      height: 1.2rem;
      fill: variables.$text-muted-color;
    }
  }
</style>
