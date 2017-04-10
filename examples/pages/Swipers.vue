<template>
  <div>
    <h1>Swipers</h1>

    <lo-swiper class="my-swiper" :options="{pagination: '.swiper-pagination'}">
      <lo-swiper-slide class="my-slide">Slide 1</lo-swiper-slide>
      <lo-swiper-slide class="my-slide">Slide 2</lo-swiper-slide>
      <lo-swiper-slide class="my-slide">Slide 3</lo-swiper-slide>
    </lo-swiper>
  </div>
</template>

<script>
  export default {};
</script>

<style>
  .my-swiper {
    width: 600px;
    height: 300px;
  }

  .my-slide {
    display: flex;
    align-items: center;
    justify-content: center;
  }
</style>
