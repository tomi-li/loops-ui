<template>
  <div class="swiper-slide">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'lo-swiper-slide',
    mounted() {
      if (this.$parent.swiper) {
        this.$parent.swiper.update(true);
      }
    },
  };
</script>
