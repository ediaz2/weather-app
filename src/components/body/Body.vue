<template>
  <section class="weather-body">
    <BodyMeasureCards />
    <BodyWeekCards />
    <BodyHighCards />
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

  import BodyHighCards from '@/components/body/BodyHighCards.vue';
  import BodyMeasureCards from '@/components/body/BodyMeasureCards.vue';
  import BodyWeekCards from '@/components/body/BodyWeekCards.vue';

  export default defineComponent({
    name: 'WeatherBody',
    components: { BodyWeekCards, BodyHighCards, BodyMeasureCards },
  });
</script>

<style lang="scss" scoped>
  @use "@/assets/scss/settings/_variables.scss";

  .weather-body {
    background-color: variables.$background-dark-color;
  }
  .footer {
    margin-bottom: 1rem;
    text-align: center;
  }
</style>
