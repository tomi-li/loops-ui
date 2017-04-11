<template>
  <ul class="lo-top-navigation">
    <li v-for="(link, index) in links" :style="{width: liWidth}" :class="{ active : index === activeIndex }">
      <a class="lo-top-navigation-link" @click="_onPress(link, index)">{{ link.title }}</a>
    </li>
  </ul>
</template>

<script>
  import attachFastClick from 'fastclick';

  function getActiveIndex(array) {
    let activeItem;
    array.forEach((item) => {
      if (item.active) {
        activeItem = item;
      }
    });
    if (!activeItem) return 0;
    return array.indexOf(activeItem);
  }

  export default {
    name: 'lo-top-navigation',
    props: {
      links: {
        type: Array,
        default: [],
      },
    },
    data() {
      return {
        activeIndex: getActiveIndex(this.links),
      };
    },
    computed: {
      liWidth() {
        if (!this.links || this.links.length === 0) return 0;
        return `${parseFloat(100 / this.links.length).toFixed(2)}%`;
      },
    },
    mounted() {
      attachFastClick.attach(this.$el);
    },
    methods: {
      _onPress(link, index) {
        this.activeIndex = index;
        if (link.onPress) link.onPress();
      },
    },
  };
</script>

<style lang="scss" scoped>
  @import "consts";

  .lo-top-navigation {
    @include flex(flex, row);
    background-color: $white;
    border: 1px solid $primary-color;
    border-radius: 4px;
    margin: 0;
    padding: 0;

    li {
      flex: 1;
      color: $primary-color;
      box-sizing: border-box;

      &.active {
        background-color: $primary-color;
        color: $white;
      }

      .lo-top-navigation-link {
        @include flex;
        height: 32px;
        cursor: pointer;
        padding: 0 16px;
      }
    }
  }
</style>
