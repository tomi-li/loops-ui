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

  .inapp {
    .avatar {
      &.size-1 {
        width: 80px * 2;
        height: 80px * 2;
      }

      &.size-2 {
        width: 55px * 2;
        height: 55px * 2;
      }

      &.size-3 {
        width: 40px * 2;
        height: 40px * 2;
      }

      &.size-4 {
        width: 36px * 2;
        height: 36px * 2;
      }

      &.size-5 {
        width: 28px * 2;
        height: 28px * 2;
      }
    }
  }
</style>
