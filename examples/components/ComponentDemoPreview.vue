<template>
  <div>
    <slot></slot>
  </div>
</template>

<script>
  // not using
  export default {
    name: 'component-demo-preview',
    mounted() {
      this.$parent.onPreviewReady(this);
    },
  };
</script>

<style lang="scss">

</style>
