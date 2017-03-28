<template>
  <a class="button"
     @click="_onPress"
     :class="[size, type]">
    <span class="text">{{title}}</span>
  </a>
</template>

<script>
  export default{
    name: 'lo-button',
    props: {
      type: {
        // [ default , primary , secondary,  link , blocked, basic ]
        type: String,
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

  .button {
    @include flex;
    display: inline-flex;
    cursor: pointer;

    // types
    &.disabled {
      background-color: $disable-color;
      color: $disable-text-color;
    }

    &.default {
      background-color: $primary-color;
      color: $white;
    }

    &.primary {
      background-color: $primary-color;
      color: $white;
    }

    &.secondary {
      background-color: $bg-dark-color;
      color: $white;
    }

    &.link {
      display: inline-block;
      width: auto !important;
      height: auto !important;;
      color: $primary-color;
      font-weight: normal;
    }

    &.basic {
      
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

  .button .text {
    font-weight: bold;
    user-select: none;
  }
</style>
