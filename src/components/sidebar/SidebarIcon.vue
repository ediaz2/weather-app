<template>
  <Container class="icon-background">
    <div class="icon-wrapper">
      <svg-icon name="partlyCloudyDayRain"></svg-icon>
    </div>
  </Container>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';

  import Container from '@/components/ui/objects/Container.vue';

  export default defineComponent({
    name: 'SidebarIcon',
    components: { Container },
  });
</script>

<style lang="scss" scoped>
  @use "@/assets/scss/settings/_variables.scss";

  .icon {
    &-wrapper svg {
      width: 100%;
      height: 16rem;
    }
    &-background {
      position: relative;
    }
    &-background::before {
      content: '';
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      opacity: 0.1;
      background-image: url('@/assets/img/cloud-background.png');
      background-repeat: no-repeat;
      background-position: top;
      background-size: cover;
    }
  }
</style>
