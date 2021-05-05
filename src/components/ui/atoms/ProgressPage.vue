<template>
  <div class="progress">
    <div class="progress-value"></div>
  </div>
</template>

<style lang="scss" scoped>
  @use "@/assets/scss/settings/_variables.scss";

  .progress {
    width: 100%;
    height: 0.4rem;
    background: variables.$background-lighter-color;
    &-value {
      width: 1%;
      height: 100%;
      transform: scaleX(10);
      transform-origin: left;
      animation: anim 1s ease-in-out;
      animation-iteration-count: infinite;
      background: variables.$background-progress-color;
    }
  }

  @keyframes anim {
    0% {
      transform: scaleX(0);
    }

    100% {
      transform: scaleX(100);
    }
  }
</style>
