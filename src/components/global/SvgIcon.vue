<template>
  <svg :class="$attrs.class" aria-hidden="true" :width="size" :height="size">
    <use :xlink:href="symbolId" />
  </svg>
</template>

<script>
  import { computed, defineComponent } from 'vue';
  export default defineComponent({
    name: 'SvgIcon',
    inheritAttrs: false,
    props: {
      prefix: {
        type: String,
        default: 'icon',
      },
      name: {
        type: String,
        required: true,
      },
      size: {
        type: [String, Number],
        default: 24,
      },
    },
    setup(props) {
      const symbolId = computed(() => `#${props.prefix}-${props.name}`);
      return { symbolId };
    },
  });
</script>
