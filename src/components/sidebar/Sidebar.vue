<template>
  <section class="weather-sidebar">
    <SidebarHeader />
    <SidebarIcon />
    <SidebarMeta />
  </section>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';

  import SidebarHeader from '@/components/sidebar/SidebarHeader.vue';
  import SidebarIcon from '@/components/sidebar/SidebarIcon.vue';
  import SidebarMeta from '@/components/sidebar/SidebarMeta.vue';

  export default defineComponent({
    name: 'Sidebar',
    components: { SidebarHeader, SidebarMeta, SidebarIcon },
  });
</script>

<style lang="scss" scoped>
  @use "@/assets/scss/settings/_variables.scss";

  .weather-sidebar {
    height: 100%;
    background-color: variables.$background-darker-color;
  }
</style>
