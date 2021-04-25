<template>
  <Container>
    <div class="meta-wrapper">
      <div class="meta-info"><span>15</span><span>°C</span></div>
      <div class="meta-time">Shower</div>
      <div>Today . Fri, 5 Jun</div>
      <div class="meta-footer">
        <svg-icon name="nearMe" /><span>Helsinki</span>
      </div>
    </div>
  </Container>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';

  import Container from '@/components/ui/objects/Container.vue';

  export default defineComponent({
    name: 'SidebarMeta',
    components: { Container },
  });
</script>

<style lang="scss" scoped>
  @use "@/assets/scss/settings/_variables.scss";

  .meta {
    &-wrapper {
      color: variables.$text-muted-color;
      text-align: center;
    }
    &-info {
      margin: 0.2rem;
      color: variables.$text-inverted-color;
      font-size: variables.$fs-title-xxl;
      font-weight: 600;
      line-height: 1.2;
      & span:nth-last-child(1) {
        padding-left: 0.3rem;
        color: variables.$text-muted-color;
        font-size: variables.$fs-title-l;
        font-weight: 400;
      }
    }
    &-time {
      padding: 5rem 0;
      font-size: variables.$fs-title-m;
    }
    &-footer {
      display: flex;
      align-items: center;
      justify-content: center;
      svg {
        width: 1rem;
        height: 1rem;
        fill: variables.$text-muted-color;
      }
    }
  }
</style>
