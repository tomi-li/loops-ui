<template>
  <ul class="lo-top-navigation">
    <li v-for="(link, index) in links" :style="{width: liWidth}" :class="{ active : index === activeIndex }">
      <a class="lo-top-navigation-link" @click="_onPress(link, index)">{{ link.title }}</a>
    </li>
  </ul>
</template>

<script>
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
    background-color: $ic2;
    border: 1px solid $m1;
    border-radius: 4px;
    margin: 0;
    padding: 0;

    li {
      flex: 1;
      color: $m1;
      box-sizing: border-box;
      transition: backgroundColor .1s, color .05s;

      &.active {
        background-color: $m1;
        color: $ic2;
      }

      .lo-top-navigation-link {
        @include disableUserEvents;
        @include flex;
        height: 32px;
        cursor: pointer;
        padding: 0 16px;
        transition: backgroundColor .1s;

        &:active, &.active {
          background-color: rgba($m1, .4);
        }
      }
    }
  }

  .inapp {
    .lo-top-navigation {
      border-radius: 4px * $ratio;

      li {
        font-size: 14px * $ratio;

        .lo-top-navigation-link {
          height: 32px * $ratio;
          padding: 0 16px * $ratio;
        }
      }
    }
  }
</style>
