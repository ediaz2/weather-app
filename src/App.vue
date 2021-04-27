<template>
  <div class="wrapper">
    <Sidebar />
    <Body />
  </div>
</template>

<script lang="ts">
  import { defineAsyncComponent, defineComponent, onMounted } from 'vue';

  import { GetByWoeid } from '@/hooks/useWeather';

  export default defineComponent({
    name: 'App',
    components: {
      Sidebar: defineAsyncComponent(
        () => import('@/components/sidebar/Sidebar.vue')
      ),
      Body: defineAsyncComponent(() => import('@/components/body/Body.vue')),
    },

    setup() {
      onMounted(async () => {
        // TODO: Load data Weather
        await GetByWoeid(44418);
      });
    },
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
