<template>
  <Container>
    <div class="search-wrapper">
      <!--  <Button @click="searchLocations({ query: 'lima' })">
        Search for places
      </Button> -->
      <Button @click="GetByWoeid(44418)"> Search for places </Button>
      <Pill>°C</Pill>
    </div>
  </Container>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';

  import Button from '@/components/ui/atoms/Button.vue';
  import Pill from '@/components/ui/atoms/Pill.vue';
  import Container from '@/components/ui/objects/Container.vue';
  import { GetByWoeid, SearchLocations } from '@/hooks/useWeather';

  export default defineComponent({
    name: 'SidebarSearch',
    components: { Container, Pill, Button },

    setup() {
      return { SearchLocations, GetByWoeid };
    },
  });
</script>

<style lang="scss" scoped>
  @use "@/assets/scss/settings/_variables.scss";

  .search {
    &-wrapper {
      display: flex;
      justify-content: space-between;
    }
  }
</style>
