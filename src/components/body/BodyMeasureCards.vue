<template>
  <Container>
    <div class="measure-wrapper">
      <Pill
        aria-label="convert to degrees celsius"
        :class="{ measure__active: isCelsius }"
        @click="setCelsius"
      >
        °C
      </Pill>
      <Pill
        aria-label="convert to degrees Fahrenheit"
        :class="{ measure__active: !isCelsius }"
        @click="setFahrenheit"
      >
        °F
      </Pill>
    </div>
  </Container>
</template>

<script lang="ts">
  /* eslint-disable no-return-assign */
  import { defineComponent } from 'vue';

  import Pill from '@/components/ui/atoms/Pill.vue';
  import Container from '@/components/ui/objects/Container.vue';
  import { isCelsius } from '@/hooks/useUtils';

  export default defineComponent({
    name: 'BodyMeasureCards',
    components: { Container, Pill },

    setup() {
      const setCelsius = (): boolean => (isCelsius.value = true);
      const setFahrenheit = (): boolean => (isCelsius.value = false);
      return { setCelsius, setFahrenheit, isCelsius };
    },
  });
</script>

<style lang="scss" scoped>
  @use "@/assets/scss/settings/_variables.scss";

  .measure {
    &-wrapper {
      display: flex;
      justify-content: flex-end;
      & button {
        font-weight: 700;
        &:nth-last-child(1) {
          margin-left: 0.3rem;
        }
      }
    }
    &__active {
      background: variables.$background-lighter-color;
      color: variables.$primary-dark-color;
    }
  }
</style>
