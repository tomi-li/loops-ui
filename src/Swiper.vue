<template>
  <div class="swiper-container">
    <div class="swiper-wrapper">
      <slot></slot>
    </div>

    <!-- Pagination -->
    <div v-if="options.pagination" class="swiper-pagination" :class="options.pagination.slice(1, options.pagination.length)"></div>
  </div>
</template>

<script>
  import Swiper from 'swiper';
  import 'swiper/dist/css/swiper.min.css';

  export default {
    name: 'lo-swiper',
    props: {
      options: {
        type: Object,
        default: () => ({}),
      },
    },
    data() {
      return {
        swiper: undefined,
      };
    },
    mounted() {
      this.swiper = new Swiper(this.$el, this.options);
    },
    beforeDestroy() {
      this.swiper.destroy();
    },
  };
</script>

<style lang="scss">
  @import './consts.scss';

  /**
    custom to theme color
   */
  .swiper-pagination-bullet-active {
    background-color: $primary-color !important;
  }

  .swiper-pagination-progress .swiper-pagination-progressbar {
    background-color: $primary-color !important;
  }
</style>
