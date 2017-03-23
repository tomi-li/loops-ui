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
    created() {
      console.log(this);
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

  section {

    header {
      @include flex;
      font-weight: bold;
      background: url('assets/section-header.svg') no-repeat center center;
      background-size: 100%;
      min-height: 7.7vw;
    }

  }
</style>
