<template>
  <button class="btn">
    <slot />
  </button>
</template>

<style lang="scss" scoped>
  @use "@/assets/scss/settings/_variables.scss";

  .btn {
    display: inline-block;
    padding: 0.75rem 1.87rem;
    transition: all 0.2s;
    border: none;
    background: variables.$background-light-color;
    color: variables.$text-inverted-color;
    font-size: variables.$fs-btn;
    font-weight: 600;
    letter-spacing: 0.03em;
    text-align: center;
    text-decoration: none;
    cursor: pointer;

    &:hover,
    &:focus {
      background: variables.$background-lighter-color;
      color: variables.$primary-dark-color;
    }
  }
</style>
