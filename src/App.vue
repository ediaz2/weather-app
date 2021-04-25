<template>
  <div class="wrapper">
    <Sidebar />
    <Body />
  </div>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';

  import Body from '@/components/body/Body.vue';
  import Sidebar from '@/components/sidebar/Sidebar.vue';

  export default defineComponent({
    name: 'App',
    components: { Sidebar, Body },
  });
</script>

<style lang="scss" scoped>
  .wrapper {
    display: grid;
    grid-template-columns: 24rem 1fr;
    height: 100vh;

    @media only screen and (max-width: 768px) {
      grid-template-columns: 1fr;
    }
  }
</style>
