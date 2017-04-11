<template>
  <div class="demo-section" :class="{inverse}">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'demo-section',
    props: {
      inverse: Boolean,
      default: false,
    },
  };
</script>


<style lang="scss" scoped>
  @import '../../src/consts';

  .demo-section {
    width: 600px;
  }

  .inverse {
    @include darkBg;
  }

</style>
