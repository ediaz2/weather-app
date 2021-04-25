<template>
  <section class="weather-body">
    <WeatherMeasurement />
    <WeatherWeekCards />
    <WeatherHighCards />
    <div class="footer">
      <span>
        created by
        <a href="https://github.com/diaz268/weather-app" target="_blank">
          @diaz268
        </a>
        - devChallenges.io
      </span>
    </div>
  </section>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';

  import WeatherHighCards from '@/components/body/WeatherHighCards.vue';
  import WeatherMeasurement from '@/components/body/WeatherMeasurement.vue';
  import WeatherWeekCards from '@/components/body/WeatherWeekCards.vue';

  export default defineComponent({
    name: 'WeatherBody',
    components: { WeatherWeekCards, WeatherHighCards, WeatherMeasurement },
  });
</script>

<style lang="scss" scoped>
  @use "@/assets/scss/settings/_variables.scss";

  .weather-body {
    background-color: variables.$background-dark-color;
  }
  .footer {
    text-align: center;
  }
</style>
