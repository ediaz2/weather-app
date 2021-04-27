<template>
  <Box>
    <h5 class="week-title">{{ fmDate(info?.applicable_date) }}</h5>
    <svg-icon class="week-icon" :name="`weather-${info?.weather_state_abbr}`" />
    <div class="week-meta">
      <span>{{ round(info?.min_temp) }} °C</span>
      <span>{{ round(info?.max_temp) }} °C</span>
    </div>
  </Box>
</template>

<script>
  import { defineComponent } from 'vue';

  import Box from '@/components/ui/atoms/Box.vue';
  import { fmDate, round } from '@/utils/formats';

  export default defineComponent({
    components: { Box },
    props: {
      info: {
        type: Object,
        required: true,
      },
    },

    setup() {
      return { fmDate, round };
    },
  });
</script>

<style lang="scss" scoped>
  @use "@/assets/scss/settings/_variables.scss";

  .week {
    &-title {
      margin: 0.2rem;
      font-size: variables.$fs-lead;
      font-weight: 600;
      line-height: 1.3;
      text-align: center;
    }
    &-icon {
      display: block;
      width: 100%;
      margin: -2.2rem 0 -1rem;
    }
    &-meta {
      display: grid;
      grid-template-columns: 1fr 1fr;
      & span:nth-last-child(1) {
        color: variables.$text-muted-color;
      }
    }
  }
</style>
