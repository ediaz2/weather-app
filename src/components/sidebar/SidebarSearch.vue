<template>
  <section class="search-container">
    <Container>
      <div class="search-header">
        <Pill @click.prevent="isSidebarSearch = false">x</Pill>
      </div>
    </Container>
    <Container>
      <div class="search-input">
        <InputText
          v-model="searchInput"
          class="mr"
          placeholder="search location"
        />
        <Button accent @click.prevent="search"> Search </Button>
      </div>
    </Container>
    <Container>
      <SidebarSearchItem
        v-for="(item, index) in getLocations"
        :key="index"
        :name="item.title"
        @search="searchItem(item.woeid)"
      />
    </Container>
  </section>
</template>

<script lang="ts">
  import { defineComponent, ref } from 'vue';

  import SidebarSearchItem from '@/components/sidebar/SidebarSearchItem.vue';
  import Button from '@/components/ui/atoms/Button.vue';
  import InputText from '@/components/ui/atoms/InputText.vue';
  import Pill from '@/components/ui/atoms/Pill.vue';
  import Container from '@/components/ui/objects/Container.vue';
  import { isSidebarSearch } from '@/hooks/useUtils';
  import {
    GetByWoeid,
    getLocations,
    SearchLocations,
  } from '@/hooks/useWeather';

  export default defineComponent({
    name: 'SidebarSearch',
    components: { Button, InputText, Container, Pill, SidebarSearchItem },

    setup() {
      let searchInput = ref('');
      const search = async () => {
        await SearchLocations(
          new URLSearchParams({ query: searchInput.value })
        );
        searchInput.value = '';
      };

      const searchItem = async (woeid: number) => {
        await GetByWoeid(woeid);
        isSidebarSearch.value = false;
      };
      return { search, searchInput, searchItem, getLocations, isSidebarSearch };
    },
  });
</script>

<style lang="scss" scoped>
  @use "@/assets/scss/settings/_variables.scss";

  .mr {
    margin-right: variables.$spacing-padding;
  }
  .search {
    &-container {
      position: absolute;
      z-index: 1;
      width: 24rem;
      height: 100%;
      background-color: variables.$background-darker-color;
    }
    &-header {
      display: flex;
      justify-content: flex-end;
    }
    &-input {
      display: flex;
      justify-content: space-between;
    }
  }
</style>
