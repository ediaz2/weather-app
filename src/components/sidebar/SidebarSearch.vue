<template>
  <section class="search-container">
    <Container>
      <div class="search-header">
        <Pill transparent @click.prevent="isSidebarSearch = false">
          <svg-icon name="close" />
        </Pill>
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
      <div class="result-container">
        <SidebarSearchItem
          v-for="(item, index) in getLocations"
          :key="index"
          :name="item.title"
          @search="searchItem(item.woeid)"
        />
      </div>
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
  import { isSidebarSearch, setLoading } from '@/hooks/useUtils';
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
        setLoading(true);
        await GetByWoeid(woeid);
        if (getLocations.value) getLocations.value.length = 0;
        isSidebarSearch.value = false;
        setLoading(false);
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
      @media only screen and (max-width: 768px) {
        width: 100%;
      }
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

  .result-container {
    height: 75vh;
    overflow-y: auto;
    @media only screen and (max-width: 768px) {
      height: 60vh;
    }

    &::-webkit-scrollbar {
      width: variables.$spacing-padding;
    }
    &::-webkit-scrollbar-track {
      background: #373b51;
    }
    &::-webkit-scrollbar-thumb {
      background: #2a2e45;
      &:hover {
        background: #24273f;
      }
    }
  }
</style>
