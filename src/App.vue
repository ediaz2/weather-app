<template>
  <ProgressPage v-if="isLoading" />
  <div v-if="isInitLoading" class="wrapper-loader">
    <Loader />
  </div>
  <div v-else class="wrapper">
    <transition name="slide-fade">
      <SidebarSearch v-if="isSidebarSearch" />
    </transition>
    <Sidebar />
    <Body />
  </div>
</template>

<script lang="ts">
  import { defineAsyncComponent, defineComponent, onMounted, ref } from 'vue';

  import ProgressPage from '@/components/ui/atoms/ProgressPage.vue';
  import Loader from '@/components/ui/objects/Loader.vue';
  import { isLoading, isSidebarSearch } from '@/hooks/useUtils';
  import { GetByWoeid } from '@/hooks/useWeather';

  export default defineComponent({
    name: 'App',
    components: {
      Sidebar: defineAsyncComponent(
        () => import('@/components/sidebar/Sidebar.vue'),
      ),
      SidebarSearch: defineAsyncComponent(
        () => import('@/components/sidebar/SidebarSearch.vue'),
      ),
      Body: defineAsyncComponent(() => import('@/components/body/Body.vue')),
      ProgressPage,
      Loader,
    },

    setup() {
      const isInitLoading = ref(true);
      onMounted(async () => {
        await GetByWoeid(44418);

        isInitLoading.value = false;
      });
      return { isLoading, isInitLoading, isSidebarSearch };
    },
  });
</script>

<style lang="scss" scoped>
  @use '@/assets/scss/settings/_variables.scss';
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

  .slide-fade-enter-active {
    transition: all 0.3s ease-in-out;
  }

  .slide-fade-leave-active {
    transition: all 0.3s ease-in-out;
  }

  .slide-fade-enter-from,
  .slide-fade-leave-to {
    transform: translateX(-20px);
    opacity: 0;
  }
</style>
