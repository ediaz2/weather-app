<template>
  <Container>
    <div class="search-wrapper">
      <Button
        aria-label="show info of your location"
        @click.stop="isSidebarSearch = true"
      >
        Search for places
      </Button>
      <Pill aria-label="show info of your location" @click.stop="setLocation">
        <svg-icon name="crosshairsGps" />
      </Pill>
    </div>
  </Container>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';

  import Button from '@/components/ui/atoms/Button.vue';
  import Pill from '@/components/ui/atoms/Pill.vue';
  import Container from '@/components/ui/objects/Container.vue';
  import {
    getGeolocation,
    isSidebarSearch,
    setLoading,
  } from '@/hooks/useUtils';
  import {
    GetByWoeid,
    getLocations,
    SearchLocations,
  } from '@/hooks/useWeather';

  export default defineComponent({
    name: 'SidebarSearch',
    components: { Container, Pill, Button },

    setup() {
      const setLocation = async () => {
        setLoading(true);
        const { coords } = await getGeolocation();

        await SearchLocations(
          new URLSearchParams({
            lattlong: `${coords.value.latitude},${coords.value.longitude}`,
          })
        );

        if (getLocations.value) {
          await GetByWoeid(getLocations.value[0].woeid);
          getLocations.value.length = 0;
        }
        setLoading(false);
      };

      return { isSidebarSearch, setLocation };
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
