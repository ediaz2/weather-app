<template>
  <Box>
    <h5 class="week-title">{{ info.title }}</h5>
    <svg-icon class="week-icon" :name="info.icon" />
    <div class="week-meta">
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
