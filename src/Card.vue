<template>
  <div class="lo-card" :class="{ active }">
    <!-- Header -->
    <header class="lo-card-header" v-show="showHeader">
      <span>{{header}}</span>
    </header>

    <!-- Content -->
    <div class="lo-card-content">
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

  .lo-card {
    @include flex;
    margin: 10px;
    border-radius: 5px;
    border: 1px solid $dl1;
    background-color: $ic2;

    @media (-webkit-min-device-pixel-ratio: 2) {
      border: .5px solid $dl1;
    }
  }

  .lo-card .lo-card-header {
    @include flex;
    width: 100%; // flex align-items will cause width collapse.
    height: 45px;
    background-color: $bg1;
    border-radius: 5px 5px 0 0;
    font-size: 17px;
    font-weight: bold;
    user-select: none;
    cursor: default;
    color: #b0b0bb;
  }

  .lo-card.active .lo-card-header {
    color: $m1;
  }

  .lo-card-content {
    @include flex;
    flex: 1;
  }

</style>
