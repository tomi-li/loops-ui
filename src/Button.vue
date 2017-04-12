<template>
  <a class="lo-button"
     @click="_onPress"
     :class="[size, type]">
    <span class="lo-button-text">{{title}}</span>
  </a>
</template>

<script>
  export default{
    name: 'lo-button',
    props: {
      type: {
        // [ default , primary , secondary,  link , blocked, basic ]
        type: [String, Array],
        default: 'default',
      },
      title: {
        type: [String, Number],
        default: '',
      },
      size: {
        // [ sm, md, lg ]
        type: String,
        default: 'md',
      },
      onPress: {
        type: Function,
        default: undefined,
      },
    },
    methods: {
      _onPress() {
        if (this.onPress) this.onPress();
      },
    },
  };
</script>


<style lang="scss" scoped>
  @import "consts";

  .lo-button {
    @include flex;
    display: inline-flex;
    cursor: pointer;

    // types
    &.disabled {
      background-color: $disable-color;
      color: $disable-text-color;
    }

    &.default {
      background-color: $m1;
      color: $ic2;
    }

    &.primary {
      background-color: $m1;
      color: $ic2;
    }

    &.secondary {
      background-color: $bg2;
      color: $ic2;
    }

    &.link {
      display: inline-block;
      width: auto !important;
      height: auto !important;;
      color: $m1;
      font-weight: normal;
    }

    &.basic {
      background-color: transparent;

      &.default {
        border: 1px solid $m1;
        color: $m1;
      }

      &.primary {
        border: 1px solid $m1;
        color: $m1;
      }

      &.secondary {
        border: 1px solid $t2;
        color: $t2;
      }
    }

    &.blocked {
      display: block;
      width: 100% !important;
    }

    // sizes
    &.sm {
      height: 32px;
      width: 180px;
      border-radius: 16px;
    }

    &.md {
      height: 42px;
      width: 240px;
      border-radius: 21px;
    }

    &.large {
      height: 46px;
      width: 260px;
      border-radius: 23px;
    }
  }

  .lo-button .lo-button-text {
    font-weight: bold;
    user-select: none;
  }
</style>
