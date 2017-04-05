<template>
  <ul>
    <slot></slot>
  </ul>
</template>

<script>
  export default {
    name: 'lo-accordion',
    props: {
      oneAtOnce: {
        type: Boolean,
        default: false,
      },
    },
    methods: {
      onChildClosed() {
      },
      onChildOpened(child) {
        if (this.oneAtOnce) {
          this.$children.forEach((each) => {
            if (each !== child && each.display) each.toggleCollapse();
          });
        }
      },
    },
  };
</script>
