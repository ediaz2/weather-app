<template>
  <Container>
    <div class="week-wrapper">
      <WeatherWeekCardItem
        v-for="(item, index) in 5"
        :key="index"
        :info="{ title: 'Tomorrow', icon: 'partlyCloudyDayRain' }"
      />
    </div>
  </Container>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';

  import WeatherWeekCardItem from '@/components/body/WeatherWeekCardItem.vue';
  import Container from '@/components/ui/objects/Container.vue';

  export default defineComponent({
    name: 'WeatherBody',
    components: { Container, WeatherWeekCardItem },
  });
</script>

<style lang="scss" scoped>
  @use "@/assets/scss/settings/_variables.scss";

  .week-wrapper {
    display: grid;
    grid-gap: variables.$spacing;
    grid-template-columns: repeat(auto-fill, minmax(9rem, 1fr));
    gap: variables.$spacing;
  }
</style>
