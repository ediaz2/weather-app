<template>
  <div v-if="isLoading" class="progress">
    <div class="progress-value"></div>
  </div>
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

  import Loader from '@/components/ui/objects/Loader.vue';
  import { getGeolocation, isLoading, isSidebarSearch } from '@/hooks/useUtils';
  import {
    GetByWoeid,
    getLocations,
    SearchLocations,
  } from '@/hooks/useWeather';

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
      const isInitLoading = ref(true);
      onMounted(async () => {
        const { coords } = await getGeolocation();

        await SearchLocations(
          new URLSearchParams({
            lattlong: `${coords.value.latitude},${coords.value.longitude}`,
          })
        );

        if (getLocations.value && coords.value.latitude !== 0) {
          await GetByWoeid(getLocations.value[0].woeid);
          getLocations.value.length = 0;
        } else {
          await GetByWoeid(44418);
        }

        isInitLoading.value = false;
      });
      return { isLoading, isInitLoading, isSidebarSearch };
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

  .progress {
    width: 100%;
    height: 0.4rem;
    background: variables.$background-lighter-color;
    &-value {
      width: 1%;
      height: 100%;
      transform: scaleX(10);
      transform-origin: left;
      animation: anim 1s ease-in-out;
      animation-iteration-count: infinite;
      background: variables.$background-progress-color;
    }
  }

  @keyframes anim {
    0% {
      transform: scaleX(0);
    }

    100% {
      transform: scaleX(100);
    }
  }
</style>
