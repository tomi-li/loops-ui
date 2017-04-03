<template>
  <div class="page">
    <div v-if="loading" class="backdrop">
      <spinner></spinner>
    </div>

    <!-- Could have Header -->
    <div v-if="navigator" class="page-header">
      <h1>{{ navigator }}</h1>
    </div>

    <div class="page-content">
      <slot></slot>
    </div>
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
      navigator: {
        type: String,
        default: undefined,
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
      background-color: rgba(0, 0, 0, .5);
      z-index: 100;
    }

    .page-header {
      @include flex;
      height: 64px;
      border-bottom: 1px solid $divider-color;

      h1 {
        font-size: 20px;
      }
    }

  }
</style>
