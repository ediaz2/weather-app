<template>
  <div class="search-item" @click.stop="$emit('search')">
    <span>{{ name }}</span>
    <svg-icon name="chevronRight" size="20" />
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
  }
</style>
