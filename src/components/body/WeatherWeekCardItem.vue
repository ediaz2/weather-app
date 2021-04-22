<template>
  <Box>
    <h5 class="week__title">{{ info.title }}</h5>
    <svg-icon class="week__icon" :name="info.icon"></svg-icon>
    <div class="week__meta">
      <span>16 °C</span>
      <span>11 °C</span>
    </div>
  </Box>
</template>

<script>
  import { defineComponent } from 'vue';

  import Box from '@/components/ui/atoms/Box.vue';

  export default defineComponent({
    components: { Box },
    props: {
      info: {
        type: Object,
        required: true,
      },
    },
  });
</script>

<style lang="scss" scoped>
  @use "@/assets/scss/settings/_variables.scss";

  .week {
    &__title {
      margin: 0.2rem;
      font-size: variables.$fs-lead;
      font-weight: 600;
      line-height: 1.3;
      text-align: center;
    }

    &__icon {
      display: block;
      width: calc(100% + 2rem);
      margin: -1rem -1rem 0;
    }

    &__meta {
      display: grid;
      grid-template-columns: 1fr 1fr;

      & span:nth-last-child(1) {
        color: variables.$text-muted-color;
      }
    }
  }
</style>
