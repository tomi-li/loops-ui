<template>
  <ul class="lo-accordion">
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

<style lang="scss">
  @import './consts';

  .lo-accordion {
    width: 100%;
  }

  .lo-card .lo-accordion li:last-child .lo-accordion-item-header {
    border-radius: 0 0 5px 5px;
  }

  .inapp {
    .lo-card .lo-accordion li:last-child .lo-accordion-item-header {
      border-radius: 0 0 5px * $ratio 5px * $ratio;
    }
  }
</style>
