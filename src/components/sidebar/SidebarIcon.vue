<template>
  <Container class="icon-background">
    <div class="icon-wrapper">
      <svg-icon
        :name="`weather-${weatherToday?.weather_state_abbr}`"
      ></svg-icon>
    </div>
  </Container>
</template>

<script lang="ts">
  import { defineComponent, ref } from 'vue';

  import Container from '@/components/ui/objects/Container.vue';
  import { getWeatherToday } from '@/hooks/useWeather';

  export default defineComponent({
    name: 'SidebarIcon',
    components: { Container },

    setup() {
      const weatherToday = ref(getWeatherToday);
      return { weatherToday };
    },
  });
</script>

<style lang="scss" scoped>
  @use "@/assets/scss/settings/_variables.scss";

  .icon {
    &-wrapper svg {
      width: 100%;
      height: 16rem;
      @media only screen and (max-width: 768px) {
        height: 12rem;
      }
    }
    &-background {
      position: relative;
    }
    &-background::before {
      content: '';
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      opacity: 0.1;
      background-image: url('@/assets/img/cloud-background.png');
      background-repeat: no-repeat;
      background-position: top;
      background-size: cover;
    }
  }
</style>
