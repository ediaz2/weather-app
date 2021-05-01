<template>
  <Container>
    <div class="search-wrapper">
      <Button @click.prevent="isSidebarSearch = true">
        Search for places
      </Button>
      <Pill>{{ isCelsius ? '°C' : '°F' }}</Pill>
    </div>
  </Container>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';

  import Button from '@/components/ui/atoms/Button.vue';
  import Pill from '@/components/ui/atoms/Pill.vue';
  import Container from '@/components/ui/objects/Container.vue';
  import { isCelsius } from '@/hooks/useUtils';
  import { isSidebarSearch } from '@/hooks/useUtils';

  export default defineComponent({
    name: 'SidebarSearch',
    components: { Container, Pill, Button },

    setup() {
      return { isSidebarSearch, isCelsius };
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
