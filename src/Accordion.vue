<template>
  <div>
    <ul>
      <slot></slot>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'lo-accordion',
    props: {
      openAtOnce: {
        type: Boolean,
        default: false,
      },
    },
    methods: {
      onChildClosed() {
      },
      onChildOpened(child) {
        if (this.openAtOnce) {
          this.$children.forEach((each) => {
            if (each !== child && each.display) each.toggleCollapse();
          });
        }
      },
    },
  };
</script>

<style>

</style>
