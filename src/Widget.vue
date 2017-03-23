<template>
  <div class="widget">
    <img :style="{width: iconWidth + 'px', height: iconHeight + 'px'}" v-if="icon" :src="icon" alt="">
    <span>{{ text }}</span>
  </div>
</template>

<script>
  export default {
    name: 'lo-widget',
    props: {
      text: {
        type: String,
        default: '',
      },
      icon: {
        type: String,
        default: '',
      },
      iconSize: {
        type: Object,
        default: undefined,
      },
    },
    created() {
      console.log(this);
    },
    computed: {
      iconWidth() {
        return (this.iconSize !== undefined && typeof this.iconSize.width === 'number') ? this.iconSize.width : 'auto';
      },
      iconHeight() {
        return (this.iconSize !== undefined && typeof this.iconSize.width === 'number') ? this.iconSize.height : 'auto';
      },
    },
  };
</script>

<style lang="scss" scoped>
  @import "consts";

  .widget {
    border: 1px solid $divider-color;
    border-radius: 5px;
    padding: 5px 8px;
    @include flex(inline-flex);
    flex-direction: row;

    @media (-webkit-min-device-pixel-ratio: 2) {
      border: .5px solid $divider-color;
    }

    span {
      font-size: 14px;
      padding: 14px;
      font-weight: bold;
    }
  }
</style>
