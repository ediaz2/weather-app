<template>
  <div class="box">
    <slot />
  </div>
</template>

<style lang="scss" scoped>
  @use "@/assets/scss/settings/_variables.scss";

  .box {
    padding: 1rem 1.6rem;
    background: variables.$background-darker-color;
  }
</style>
