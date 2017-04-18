<template>
  <li class="lo-list-item-two-line">
    <div class="left">
      <a v-if="leftIcon" class="item-left-icon" @click="onLeftIconClick"><img :src="leftIcon"/></a>
      <lo-avatar v-if="avatar" :src="avatar" :size="this.$parent.size === 12 ? 2 : 3"></lo-avatar>
      <div class="headers">
        <span class="item-title" v-if="title">{{ title }}</span>
        <span class="item-sub-title" v-if="subTitle">{{ subTitle }}</span>
        <span class="item-list" v-if="list">{{ list }}</span>
      </div>
    </div>
    <div class="right">
      <a v-if="icon" class="item-icon" @click="onIconClick"><img :src="icon"/></a>
    </div>
  </li>
</template>

<script>
  export default {
    name: 'lo-list-item-two-line',
    props: {
      title: {
        type: String,
      },
      subTitle: {
        type: String,
      },
      list: {
        type: String,
      },
      avatar: {
        type: String,
      },
      icon: {
        type: String,
      },
      iconClick: {
        type: Function,
      },
      leftIcon: {
        type: String,
      },
      leftIconClick: {
        type: Function,
      },
    },
    methods: {
      onIconClick() {
        if (this.iconClick) {
          this.iconClick();
        } else {
          console.warn('[loops-ui] \'iconClick\' is not defined');
        }
      },
      onLeftIconClick() {
        if (this.leftIconClick) {
          this.leftIconClick();
        } else {
          console.warn('[loops-ui] \'leftIconClick\' is not defined');
        }
      },
    },
  };
</script>

<style lang="scss" scoped>
  @import "../src/consts";

  .lo-list-item-two-line {
    @include list-item;

    .headers {
      display: flex;
      flex-flow: column;
    }

    .left {
      display: flex;
      align-items: center;

      .avatar {
        margin-right: 15px;
      }

      .item-title, .item-list {
        @include h_3;
      }

      .item-sub-title {
        @include body_2;
      }

      .item-left-icon {
        margin-right: 15px;
        width: 22px;
        height: 22px;
        display: flex;
        align-items: center;
        justify-content: center;

        img {
          max-width: 100%;
          max-height: 100%;
        }
      }
    }

    .right {
      .item-icon {
        width: 22px;
        height: 22px;
        display: flex;
        align-items: center;
        justify-content: center;

        img {
          max-width: 100%;
          max-height: 100%;
        }
      }
    }

  }
</style>
