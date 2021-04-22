<template>
  <section class="courses">
    <Container>
      <WeatherWeekCards />
      <h2>Today's Hightlights</h2>
    </Container>
  </section>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';

  import WeatherWeekCards from '@/components/body/WeatherWeekCards.vue';
  import Container from '@/components/ui/objects/Container.vue';

  export default defineComponent({
    name: 'WeatherBody',
    components: { Container, WeatherWeekCards },
  });
</script>
