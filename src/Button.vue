<template>
  <a class="lo-button"
     @click="_onPress"
     :class="[size, type]">
    <span class="lo-button-text">{{title}}</span>
  </a>
</template>

<script>
  import attachFastClick from 'fastclick';

  export default{
    name: 'lo-button',
    props: {
      type: {
        // [primary,  link , blocked, basic ]
        type: [String, Array],
        default: 'primary',
      },
      title: {
        type: [String, Number],
        default: '',
      },
      size: {
        // [regular, small, tiny]
        type: String,
        default: 'regular',
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
    mounted() {
      attachFastClick.attach(this.$el);
    },
  };
</script>


<style lang="scss" scoped>
  @import "consts";

  .lo-button {
    @include flex;
    display: inline-flex;
    cursor: pointer;
    border: .5px solid transparent;

    @include disableUserEvents;

    // types
    &.primary {
      background-color: $m1;
      color: $white;
    }

    &:active, &.active {
      background-color: $cl2;
    }

    &.secondary {
      background-color: $blue;
      color: $white;
    }

    &.disabled {
      background-color: $disable-color;
      color: $white;

      &:active, &.active {
        background-color: $disable-color;
      }
    }

    &.link {
      display: inline-block;
      width: auto !important;
      height: auto !important;;
      color: $m1;
    }

    &.basic {
      background-color: transparent;

      &.primary {
        border: .5px solid $m1;
        color: $m1;
      }

      &.secondary {
        border: .5px solid $blue;
        color: $blue;
      }

      &.disabled {
        border: .5px solid $disable-color;
        color: $disable-color;

        &:active, &.active {
          border: .5px solid $disable-color;
          color: $disable-color;
          background-color: transparent;
        }
      }

      &:active, &.active {
        background-color: rgba($cl2, .2);
      }
    }

    &.blocked {
      display: block;
      width: 100% !important;
    }

    // sizes
    &.regular {
      height: 42px;
      width: 240px;
      border-radius: 21px;
      font-size: $btn_3;
    }

    &.small {
      height: 32px;
      width: 180px;
      border-radius: 16px;
      font-size: $btn_4;
    }

    &.tiny {
      width: 92px;
      height: 28px;
      border-radius: 14px;
      font-size: $btn_4;
    }

  }

  .lo-button-text {
    font-weight: bold;

  }
</style>
