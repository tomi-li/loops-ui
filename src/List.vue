<template>
  <ul class="lo-list" :class="`size-${size}`">
    <slot></slot>
  </ul>
</template>

<script>
  export default {
    name: 'lo-list',
    props: {
      size: {
        type: Number,
        default: 1,
      },
    },
  };
</script>

<style lang="scss">
  .lo-list {
    line-height: 1em;

    // size
    &.size-1, &.size-2, &.size-3 {
      li {
        height: 48px;
      }
    }

    &.size-4 {
      li {
        height: 56px;
      }
    }

    &.size-5 {
      li {
        height: 74px;
      }
    }
  }

</style>
