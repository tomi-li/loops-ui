<template>
  <div class="lo-page">
    <div v-if="loading" class="lo-backdrop">
      <spinner :inverse="true"></spinner>
    </div>

    <!-- Could have Header -->
    <div v-if="navigator" class="lo-page-header">
      <h1>{{ navigator }}</h1>
    </div>

    <div class="lo-page-content">
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

  .lo-page {
    position: relative;
    min-height: 100%;
    min-width: 100%;
    background-color: $bg1;
    overflow: auto; // prevent margin collapse

    .lo-backdrop {
      @include flex;
      position: absolute;
      top: 0;
      left: 0;
      height: 100%;
      width: 100%;
      background-color: rgba(0, 0, 0, .5);
      z-index: 100;
    }

    .lo-page-header {
      @include flex;
      height: 64px;
      border-bottom: 1px solid $dl1;

      h1 {
        font-size: 20px;
      }
    }

  }
</style>
