<template>
  <div class="progress-container">
    <div class="progress__numbers">
      <span>0</span><span>50</span><span>100</span>
    </div>
    <div class="progress_background">
      <div class="progress-value"></div>
    </div>
    <div class="progress__unity"><span>%</span></div>
  </div>
</template>

<script>
  import { computed, defineComponent } from 'vue';

  export default defineComponent({
    props: {
      value: {
        type: Number,
        default: 20,
      },
    },
    setup(props) {
      const percentage = computed(() => `${props.value}%`);
      return { percentage };
    },
  });
</script>

<style lang="scss" scoped>
  @use "@/assets/scss/settings/_variables.scss";

  .progress {
    &-container {
      padding-top: 0.8rem;
    }
    &_background {
      width: 100%;
      height: 0.6rem;
      border-radius: 0.3rem;
      background: variables.$background-lighter-color;
    }
    &-value {
      width: v-bind(percentage);
      height: 100%;
      border-radius: 0.3rem;
      background: variables.$background-progress-color;
    }
    &__numbers {
      display: flex;
      justify-content: space-between;
    }
    &__unity {
      display: flex;
      justify-content: flex-end;
    }
  }
</style>
