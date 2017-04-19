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
  @import "consts";

  .lo-list {
    // size
    &.size-1, &.size-2, &.size-3 {
      li {
        height: 48px;
      }
    }

    &.size-4, &.size-6, &.size-7 {
      li {
        height: 56px;
      }
    }

    &.size-5, &.size-11 {
      li {
        height: 74px;
      }
    }

    &.size-8, &.size-9, &.size-10 {
      li {
        height: 64px;
      }
    }

    &.size-12 {
      li {
        height: 80px;
      }
    }

    &.size-13, &.size-15 {
      li {
        height: 74px;
      }
    }
    &.size-14 {
      li {
        height: 90px;
      }
    }
  }

  .inapp {
    .lo-list {
      // size
      &.size-1, &.size-2, &.size-3 {
        li {
          height: 48px * $ratio;
        }
      }

      &.size-4, &.size-6, &.size-7 {
        li {
          height: 56px * $ratio;
        }
      }

      &.size-5, &.size-11 {
        li {
          height: 74px * $ratio;
        }
      }

      &.size-8, &.size-9, &.size-10 {
        li {
          height: 64px * $ratio;
        }
      }

      &.size-12 {
        li {
          height: 80px * $ratio;
        }
      }

      &.size-13, &.size-15 {
        li {
          height: 74px * $ratio;
        }
      }
      &.size-14 {
        li {
          height: 90px * $ratio;
        }
      }
    }
  }
</style>
