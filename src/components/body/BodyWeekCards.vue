<template>
  <Container>
    <div class="week-wrapper">
      <BodyWeekCardItem
        v-for="(item, index) in consolidated"
        :key="index"
        :info="item"
        :index="index" />
    </div>
  </Container>
</template>

<script lang="ts">
  import { defineComponent, ref } from 'vue';

  import BodyWeekCardItem from '@/components/body/BodyWeekCardItem.vue';
  import Container from '@/components/ui/objects/Container.vue';
  import { getConsolidated } from '@/hooks/useWeather';

  export default defineComponent({
    name: 'BodyWeekCards',
    components: { Container, BodyWeekCardItem },

    setup() {
      const consolidated = ref(getConsolidated);
      return { consolidated };
    },
  });
</script>

<style lang="scss" scoped>
  @use '@/assets/scss/settings/_variables.scss';

  .week-wrapper {
    display: grid;
    grid-gap: variables.$spacing;
    grid-template-columns: repeat(auto-fill, minmax(9rem, 1fr));
    gap: variables.$spacing;
  }
</style>
