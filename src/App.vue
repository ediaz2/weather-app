<template>
  <div v-if="isLoading" class="wrapper-loader">
    <Loader />
  </div>
  <div v-else class="wrapper">
    <SidebarSearch v-if="isSidebarSearch" />
    <Sidebar />
    <Body />
  </div>
</template>

<script lang="ts">
  import { defineAsyncComponent, defineComponent, onMounted, ref } from 'vue';

  import Loader from '@/components/ui/objects/Loader.vue';
  import { isSidebarSearch } from '@/hooks/useUtils';
  import { GetByWoeid } from '@/hooks/useWeather';

  export default defineComponent({
    name: 'App',
    components: {
      Sidebar: defineAsyncComponent(
        () => import('@/components/sidebar/Sidebar.vue')
      ),
      SidebarSearch: defineAsyncComponent(
        () => import('@/components/sidebar/SidebarSearch.vue')
      ),
      Body: defineAsyncComponent(() => import('@/components/body/Body.vue')),
      Loader,
    },

    setup() {
      let isLoading = ref(true);
      onMounted(async () => {
        // TODO: Load data Weather
        await GetByWoeid(44418);
        isLoading.value = false;
      });
      return { isLoading, isSidebarSearch };
    },
  });
</script>

<style lang="scss" scoped>
  @use "@/assets/scss/settings/_variables.scss";
  .wrapper {
    display: grid;
    position: relative;
    grid-template-columns: 24rem 1fr;
    height: 100vh;

    @media only screen and (max-width: 768px) {
      grid-template-columns: 1fr;
    }
    &-loader {
      display: flex;
      position: absolute;
      z-index: 2;
      align-items: center;
      justify-content: center;
      width: 100vw;
      height: 100vh;
      background-color: variables.$background-darker-color;
    }
  }
</style>
