<template>
  <Container>
    <div class="measure-wrapper">
      <Pill :class="{ measure__active: isCelsius }" @click="setCelsius">
        °C
      </Pill>
      <Pill :class="{ measure__active: !isCelsius }" @click="setFahrenheit">
        °F
      </Pill>
    </div>
  </Container>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';

  import Pill from '@/components/ui/atoms/Pill.vue';
  import Container from '@/components/ui/objects/Container.vue';
  import { isCelsius } from '@/hooks/useUtils';

  export default defineComponent({
    name: 'BodyMeasureCards',
    components: { Container, Pill },

    setup() {
      const setCelsius = () => (isCelsius.value = true);
      const setFahrenheit = () => (isCelsius.value = false);
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
