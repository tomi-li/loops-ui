<template>
  <img class="avatar" :class="`size-${size}`" :src="src" alt="">
</template>

<script>
  export default {
    name: 'lo-avatar',
    props: {
      src: {
        type: String,
      },
      size: {
        type: Number,
        default: 1,
      },
    },
  };
</script>

<style lang="scss" scoped>
  .avatar {
    border-radius: 100%;

    &.size-1 {
      width: 80px;
      height: 80px;
    }

    &.size-2 {
      width: 55px;
      height: 55px;
    }

    &.size-3 {
      width: 40px;
      height: 40px;
    }

    &.size-4 {
      width: 36px;
      height: 36px;
    }

    &.size-5 {
      width: 28px;
      height: 28px;
    }
  }
</style>
