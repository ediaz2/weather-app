<template>
  <Container>
    <div class="measure-wrapper">
      <Pill>°C</Pill>
      <Pill>°F</Pill>
    </div>
  </Container>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';

  import Pill from '@/components/ui/atoms/Pill.vue';
  import Container from '@/components/ui/objects/Container.vue';

  export default defineComponent({
    name: 'BodyMeasureCards',
    components: { Container, Pill },
  });
</script>

<style lang="scss" scoped>
  @use "@/assets/scss/settings/_variables.scss";

  .measure {
    &-wrapper {
      display: flex;
      justify-content: flex-end;
      & span {
        font-weight: 700;
        &:nth-last-child(1) {
          margin-left: 0.3rem;
        }
      }
    }
  }
</style>
