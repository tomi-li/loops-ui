<template>
  <a class="button"
     @click="_onPress"
     :class="type">
    <span class="text">{{title}}</span>
  </a>
</template>

<script>
  export default{
    name: 'lo-button',
    props: {
      type: {
        type: String,
        default: 'default',
      },
      title: {
        type: String,
        default: '',
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
    cursor: pointer;
    height: 42px;
    width: 240px;
    border-radius: 21px;

    &.primary {
      background-color: $primary-color;
      color: $white;
    }
  }

  .button .text {
    font-weight: bold;
    user-select: none;
  }
</style>
