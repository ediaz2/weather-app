<template>
  <button class="pill"><slot /></button>
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
    border: none;
    border-radius: 50%;
    background: variables.$background-light-color;
    color: variables.$text-inverted-color;
    font-weight: 600;
    text-decoration: none;
    cursor: pointer;

    /* &:hover,
    &:focus {
      background: variables.$background-lighter-color;
      color: variables.$primary-dark-color;
    } */
  }
</style>
