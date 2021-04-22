<template>
  <div class="wrapper">
    <WeatherSidebar />
    <WeatherBody />
  </div>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';

  import WeatherBody from '@/components/body/WeatherBody.vue';
  import WeatherSidebar from '@/components/sidebar/WeatherSidebar.vue';

  export default defineComponent({
    name: 'App',
    components: {
      WeatherSidebar,
      WeatherBody,
    },
  });
</script>

<style lang="scss" scoped>
  .wrapper {
    display: grid;
    grid-template-columns: 24rem 1fr;
    height: 100vw;
  }
</style>
