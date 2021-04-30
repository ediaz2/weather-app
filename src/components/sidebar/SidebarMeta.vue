<template>
  <Container>
    <div class="meta-wrapper">
      <div class="meta-info">
        <span> {{ convertToF(weatherToday?.the_temp, isCelsius, 0) }} </span>
        <span>{{ isCelsius ? '°C' : '°F' }}</span>
      </div>
      <div class="meta-time">{{ weatherToday?.weather_state_name }}</div>
      <div>Today . {{ fmDate(weatherToday?.applicable_date) }}</div>
      <div class="meta-footer">
        <svg-icon name="nearMe" /><span>{{ location?.title }}</span>
      </div>
    </div>
  </Container>
</template>

<script lang="ts">
  import { defineComponent, ref } from 'vue';

  import Container from '@/components/ui/objects/Container.vue';
  import { isCelsius } from '@/hooks/useUtils';
  import { getLocation, getWeatherToday } from '@/hooks/useWeather';
  import { convertToF, fmDate } from '@/utils/formats';

  export default defineComponent({
    name: 'SidebarMeta',
    components: { Container },

    setup() {
      const weatherToday = ref(getWeatherToday);
      const location = ref(getLocation);
      return { fmDate, isCelsius, convertToF, weatherToday, location };
    },
  });
</script>

<style lang="scss" scoped>
  @use "@/assets/scss/settings/_variables.scss";

  .meta {
    &-wrapper {
      color: variables.$text-muted-color;
      text-align: center;
    }
    &-info {
      margin: 0.2rem;
      color: variables.$text-inverted-color;
      font-size: variables.$fs-title-xxl;
      font-weight: 600;
      line-height: 1;
      @media only screen and (max-width: 768px) {
        padding: 3rem 0;
      }
      & span:nth-last-child(1) {
        padding-left: 0.3rem;
        color: variables.$text-muted-color;
        font-size: variables.$fs-title-l;
        font-weight: 400;
      }
    }
    &-time {
      padding: 5rem 0;
      font-size: variables.$fs-title-m;
      @media only screen and (max-width: 768px) {
        padding: 3rem 0;
      }
    }
    &-footer {
      display: flex;
      align-items: center;
      justify-content: center;
      svg {
        width: 1rem;
        height: 1rem;
        fill: variables.$text-muted-color;
      }
    }
  }
</style>
