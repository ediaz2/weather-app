<template>
  <section class="o-container">
    <WeatherSidebar />
    <WeatherBody />
  </section>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';

  import WeatherBody from '@/components/body/WeatherBody.vue';
  import WeatherSidebar from '@/components/sidebar/WeatherSidebar.vue';

  export default defineComponent({
    name: 'App',
    components: {
      WeatherSidebar,
      WeatherBody,
    },
  });
</script>
