<template>
  <div class="a-box">
    <slot />
  </div>
</template>

<style lang="scss" scoped>
  @use "@/assets/scss/settings/_variables.scss";

  .a-box {
    padding: 1rem 1.6rem;
    background: variables.$background-darker-color;
  }
</style>
