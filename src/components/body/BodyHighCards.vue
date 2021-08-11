<template>
  <Container>
    <h2>Today's Highlights</h2>
    <div class="high-wrapper">
      <Box>
        <h3 class="high-title">Wind Status</h3>
        <div class="high-info">
          <span>{{ round(weatherToday?.wind_speed) }}</span>
          <span>mph</span>
        </div>
        <div class="high-icon-container">
          <Pill tag="span" sm> <svg-icon ref="nearRef" name="nearMe" /></Pill>
          <span>WSW</span>
        </div>
      </Box>
      <Box>
        <h3 class="high-title">Humidity</h3>
        <div class="high-info">
          <span>{{ round(weatherToday?.humidity) }}</span>
          <span>%</span>
        </div>
        <ProgressBar :value="humidity" />
      </Box>
      <Box>
        <h3 class="high-title">Visibility</h3>
        <div class="high-info">
          <span>{{ round(weatherToday?.visibility) }}</span>
          <span>miles</span>
        </div>
      </Box>
      <Box>
        <h3 class="high-title">Air Pressure</h3>
        <div class="high-info">
          <span>{{ round(weatherToday?.air_pressure) }}</span>
          <span>mb</span>
        </div>
      </Box>
    </div>
  </Container>
</template>

<script lang="ts">
  import { ComponentOptions, defineComponent, Ref, ref, watch } from 'vue';

  import Box from '@/components/ui/atoms/Box.vue';
  import Pill from '@/components/ui/atoms/Pill.vue';
  import ProgressBar from '@/components/ui/atoms/ProgressBar.vue';
  import Container from '@/components/ui/objects/Container.vue';
  import { getWeatherToday } from '@/hooks/useWeather';
  import { round } from '@/utils/formats';

  export default defineComponent({
    name: 'BodyHighCards',
    components: { Box, Container, ProgressBar, Pill },

    setup() {
      const weatherToday = ref(getWeatherToday);
      const winddirection = ref(
        `${weatherToday.value?.wind_direction || 0}deg`,
      );
      const humidity = ref(weatherToday.value?.humidity);

      const nearRef: Ref<ComponentOptions | null> = ref(null);

      watch(weatherToday, () => {
        winddirection.value = `${weatherToday.value?.wind_direction || 0}deg`;
        if (nearRef.value)
          (nearRef.value.$el as HTMLElement).classList.add('rotation');
        setTimeout(() => {
          if (nearRef.value)
            (nearRef.value.$el as HTMLElement).classList.remove('rotation');
        }, 2000);
        humidity.value = weatherToday.value?.humidity;
      });

      return { weatherToday, round, winddirection, humidity, nearRef };
    },
  });
</script>

<style lang="scss" scoped>
  @use "@/assets/scss/settings/_variables.scss";

  .high {
    &-wrapper {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(20rem, 1fr));
      gap: variables.$spacing * 1.5;
    }
    &-title {
      margin: 0.2rem;
      font-size: variables.$fs-lead;
      font-weight: 500;
      line-height: 1.2;
      text-align: center;
    }
    &-icon-container {
      display: flex;
      align-items: center;
      justify-content: center;
      padding-top: 1rem;
      & span {
        padding-left: 0.3rem;
        cursor: auto;
      }
      & svg {
        transform: rotate(v-bind(winddirection));
      }
    }
    &-info {
      margin: 0.2rem;
      font-size: variables.$fs-title-xl;
      font-weight: 600;
      line-height: 1.2;
      text-align: center;
      & span:nth-last-child(1) {
        padding-left: 0.3rem;
        font-size: variables.$fs-title-m;
        font-weight: 500;
      }
    }
  }

  .rotation {
    animation: rotation 2s infinite linear;
  }

  @keyframes rotation {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(v-bind(winddirection));
    }
  }
</style>
