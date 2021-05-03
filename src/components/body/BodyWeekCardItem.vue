<template>
  <Box>
    <h5 class="week-title">
      {{ index === 0 ? 'Tomorrow' : fmDate(info?.applicable_date) }}
    </h5>
    <svg-icon
      class="week-icon"
      :name="`weather-${info?.weather_state_abbr}`"
      size="100"
    />
    <div class="week-meta">
      <span>
        {{ convertToF(info?.min_temp, isCelsius) }}
        {{ isCelsius ? '°C' : '°F' }}
      </span>
      <span>
        {{ convertToF(info?.max_temp, isCelsius) }}
        {{ isCelsius ? '°C' : '°F' }}
      </span>
    </div>
  </Box>
</template>

<script lang="ts">
  import { defineComponent, PropType } from 'vue';

  import Box from '@/components/ui/atoms/Box.vue';
  import { isCelsius } from '@/hooks/useUtils';
  import { IConsolidatedWeather } from '@/types/weather';
  import { convertToF, fmDate } from '@/utils/formats';

  export default defineComponent({
    components: { Box },
    props: {
      info: {
        type: Object as PropType<IConsolidatedWeather>,
        required: true,
      },
      index: { type: Number, default: 0, require: true },
    },

    setup() {
      return { isCelsius, convertToF, fmDate };
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
