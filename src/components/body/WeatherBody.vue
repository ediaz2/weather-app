<template>
  <section class="weather-body">
    <WeatherWeekCards />
    <h2>Today's Hightlights</h2>
  </section>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';

  import WeatherWeekCards from '@/components/body/WeatherWeekCards.vue';

  export default defineComponent({
    name: 'WeatherBody',
    components: { WeatherWeekCards },
  });
</script>

<style lang="scss" scoped>
  @use "@/assets/scss/settings/_variables.scss";

  .weather-body {
    background-color: variables.$background-dark-color;
  }
</style>
