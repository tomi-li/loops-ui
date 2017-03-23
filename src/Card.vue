<template>
  <div class="card" :class="{ active }">
    <!-- Header -->
    <header v-show="showHeader">
      <span>{{header}}</span>
    </header>

    <!-- Content -->
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'lo-card',
    props: {
      header: {
        type: String,
        default: '',
      },
      active: {
        type: Boolean,
        default: false,
      },
    },
    computed: {
      showHeader() {
        return this.header !== '';
      },
    },
  };
</script>

<style lang="scss" scoped>
  @import "consts";

  .card {
    @include flex;
    margin: 10px;
    border-radius: 5px;
    border: 1px solid $divider-color;
    background-color: $white;

    @media (-webkit-min-device-pixel-ratio: 2) {
      border: .5px solid $divider-color;
    }
  }

  .card header {
    @include flex;
    width: 100%; // flex align-items will cause width collapse.
    height: 45px;
    background-color: $bg-color;
    border-radius: 5px 5px 0 0;
    font-size: 17px;
    font-weight: bold;
    user-select: none;
    cursor: default;
    color: #b0b0bb;
  }

  .card.active header {
    color: $primary-color;
  }

  .content {
    @include flex;
  }

</style>
