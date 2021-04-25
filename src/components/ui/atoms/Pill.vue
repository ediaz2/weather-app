<template>
  <span class="pill"><slot /></span>
</template>

<script>
  import { defineComponent } from 'vue';

  export default defineComponent({
    props: {
      sm: {
        type: Boolean,
        default: false,
      },
    },

    setup(props) {
      const size = `${props.sm ? '1.8rem' : '2.4rem'}`;
      return { size };
    },
  });
</script>

<style lang="scss" scoped>
  @use "@/assets/scss/settings/_variables.scss";

  .pill {
    display: flex;
    align-items: center;
    justify-content: center;
    width: v-bind(size);
    height: v-bind(size);
    padding: 0.2rem;
    border-radius: 50%;
    background: variables.$background-light-color;
    color: variables.$text-inverted-color;
  }
</style>
