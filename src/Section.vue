<template>
  <section class="lo-section">
    <header class="lo-section-header" v-show="showHeader">
      <span>{{ header }}</span>
      <span v-if="icon" class="icon" @click="onPress">?</span>
    </header>
    <div class="lo-section-content">
      <slot></slot>
    </div>
  </section>
</template>

<script>
  export default {
    name: 'lo-section',
    props: {
      header: {
        type: String,
        default: '',
      },
      icon: {
        type: Function,
        default: undefined,
      },
    },
    computed: {
      showHeader() {
        return this.header !== '';
      },
    },
    methods: {
      onPress() {
        if (this.icon) this.icon();
      },
    },
  };
</script>

<style lang="scss" scoped>
  @import "consts";

  section.lo-section {
    @include flex;
    width: 100%;

    .lo-section-header {
      @include flex;
      flex-flow: row nowrap;
      align-items: center;
      width: 100%;
      font-weight: bold;
      background: url('assets/section-header.svg') no-repeat center center;
      background-size: 100%;
      min-height: 7.7vw;
      color: $text-color;
      color: $text-dark-color;

      .icon {
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: #e5e5e5;
        color: $white;
        border-radius: 5px;
        width: 1.2rem;
        height: 1.2rem;
        text-align: center;
        margin-left: 6px;
      }
    }

    .lo-section-content {
      width: 100%;
    }
  }
</style>
