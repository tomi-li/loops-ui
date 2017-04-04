<template>
  <li>
    <div class="accordion-item-header">
      <span @click="toggleCollapse">{{ title }}</span>
    </div>
    <transition
      v-on:enter="enter"
      v-on:leave="leave"
      :css="false">
      <div class="accordion-item-content" v-show="display">
        <slot></slot>
      </div>
    </transition>
  </li>
</template>

<script>
  /* eslint-disable no-param-reassign,no-unused-vars */

  export default {
    name: 'lo-accordion-item',
    props: {
      title: {
        type: String,
        default: '',
      },
      opened: {
        type: Boolean,
        default: true,
      },
    },
    data() {
      return {
        display: true,
        originalHeight: 0,
      };
    },
    mounted() {
      const content = this.$el.querySelector('.accordion-item-content');
      const defaultContentHeight = `${content.offsetHeight}px`;
      this.originalHeight = defaultContentHeight;
      // little trick here.
      // get the content height first. and close the content if the opened is false.
      content.style.maxHeight = this.opened ? defaultContentHeight : 0;
      // set display
      this.display = this.opened;
    },
    methods: {
      toggleCollapse() {
        this.display = !this.display;

        if (this.display) {
          this.$parent.onChildOpened(this);
        } else {
          this.$parent.onChildClosed(this);
        }
      },
      // FIXME don't know why the 'done' param has to named and leave to empty
      enter(el, done) {
        el.style.maxHeight = this.originalHeight;
        el.style.opacity = 1;
      },
      leave(el, done) {
        el.style.maxHeight = 0;
        el.style.opacity = 0;
      },
    },
  };
</script>

<style lang="scss" scoped>
  .accordion-item-content {
    overflow: hidden;
    transition: max-height .5s, opacity .4s;
  }
</style>
