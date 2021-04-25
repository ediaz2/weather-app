<template>
  <section class="weather-sidebar">
    <SidebarSearch />
    <SidebarIcon />
    <SidebarMeta />
  </section>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';

  import SidebarIcon from '@/components/sidebar/SidebarIcon.vue';
  import SidebarMeta from '@/components/sidebar/SidebarMeta.vue';
  import SidebarSearch from '@/components/sidebar/SidebarSearch.vue';

  export default defineComponent({
    name: 'Sidebar',
    components: { SidebarSearch, SidebarMeta, SidebarIcon },
  });
</script>

<style lang="scss" scoped>
  @use "@/assets/scss/settings/_variables.scss";

  .weather-sidebar {
    height: 100vh;
    background: variables.$background-darker-color;
  }
</style>
