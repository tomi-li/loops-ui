<template>
  <ul class="top-navigation">
    <li v-for="(link, index) in links">
      <a class="link" @click="_onPress(index)" :class="{ active : index === activeIndex }">
        <span>{{ link.title }}</span>
      </a>
    </li>
  </ul>
</template>

<script>
  export default {
    props: {
      links: {
        type: Array,
        default: [],
      },
      onPress: {
        type: Function,
        default: undefined,
      },
    },
    data: () => ({
      activeIndex: 0,
    }),
    methods: {
      _onPress(index) {
        this.activeIndex = index;
        if (this.onPress) this.onPress();
      },
    },
  };
</script>

<style lang="scss" scoped>
  @import "../consts";

  .top-navigation {
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
