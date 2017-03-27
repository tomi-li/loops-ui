<template>
  <section>
    <header v-show="showHeader">{{ header }}</header>
    <div class="content">
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

  section.section {
    @include flex;
    width: 100%;

    .header {
      @include flex;
      width: 100%;
      font-weight: bold;
      background: url('assets/section-header.svg') no-repeat center center;
      background-size: 100%;
      min-height: 7.7vw;
    }

  }
</style>
