<template>
  <div class="page">
    <div v-if="loading" class="backdrop">
      <spinner></spinner>
    </div>
    <slot></slot>
  </div>
</template>

<script>
  import Spinner from './Spinner.vue';

  export default {
    name: 'lo-page',
    components: {
      spinner: Spinner,
    },
    props: {
      loading: {
        type: Boolean,
        default: false,
      },
    },
  };
</script>

<style lang="scss" scoped>
  @import "consts";

  .page {
    position: relative;
    min-height: 100%;
    min-width: 100%;
    background-color: $bg-color;
    overflow: auto; // prevent margin collapse

    .backdrop {
      @include flex;
      position: absolute;
      top: 0;
      left: 0;
      height: 100%;
      width: 100%;
      background-color: rgba(171, 173, 187, .8);
      z-index: 100;
    }

  }
</style>
