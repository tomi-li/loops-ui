<template>
  <div class="lo-widget">
    <div class="lo-widget-img-container">
      <img :style="{width: iconWidth + 'px', height: iconHeight + 'px'}" v-if="icon" :src="icon" alt="">
    </div>
    <span>{{ text }}</span>
  </div>
</template>

<script>
  export default {
    name: 'lo-widget',
    props: {
      text: {
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

  .lo-widget {
    border: 1px solid $dl1;
    border-radius: 5px;
    padding: 5px 8px;
    @include flex(inline-flex);
    flex-direction: row;

    @media (-webkit-min-device-pixel-ratio: 2) {
      border: .5px solid $dl1;
    }

    span {
      display: inline-block;
      width: 50%;
      font-size: 14px;
      font-weight: bold;
      color: $t2;
    }

    .lo-widget-img-container {
      width: 50%;
    }
  }
</style>
