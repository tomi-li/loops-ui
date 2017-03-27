<template>
  <ul class="top-navigation">
    <li v-for="(link, index) in links" :style="{width: liWidth}">
      <a class="link" @click="_onPress(link, index)" :class="{ active : index === activeIndex }">
        <span>{{ link.title }}</span>
      </a>
    </li>
  </ul>
</template>

<script>
  import attachFastClick from 'fastclick';

  export default {
    name: 'lo-top-navigation',
    props: {
      links: {
        type: Array,
        default: [],
      },
    },
    data: () => ({
      activeIndex: 0,
    }),
    computed: {
      liWidth() {
        if (!this.links || this.links.length === 0) return 0;
        return `${parseFloat(100 / this.links.length).toFixed(2)}px`;
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

  .top-navigation {
    @include flex;
    flex-flow: row nowrap;
    border: 1px solid $primary-color;
    border-radius: 4px;
    margin: 0;
    padding: 0;

    li {
      flex: 1;
    }

    .link {
      @include flex;
      padding: 10px 16px;
      cursor: pointer;
      color: $primary-color;

      &.active {
        background-color: $primary-color;
        color: $white;
      }
    }
  }
</style>
