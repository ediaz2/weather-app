<template>
  <section class="weather-sidebar"><input type="text" /></section>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';
  export default defineComponent({
    name: 'WeatherSidebar',
  });
</script>

<style lang="scss" scoped>
  @use "@/assets/scss/settings/_variables.scss";

  .weather-sidebar {
    background: variables.$background-darker-color;
  }
</style>
