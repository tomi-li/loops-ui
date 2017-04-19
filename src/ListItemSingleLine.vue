<template>
  <li class="list-item-single-line">
    <div class="left">
      <lo-avatar class="item-avatar" v-if="avatar" :src="avatar" :size="3"></lo-avatar>
      <span class="item-title">{{ title }}</span>
    </div>
    <div class="right">
      <span v-if="subTitle" class="item-sub-title">{{ subTitle }}</span>
      <a v-if="icon" class="item-icon" @click="onIconClick"><img :src="icon"/></a>
      <lo-button v-if="button" :type="['basic', 'primary']" size='tiny' :title="button" :onPress="onButtonClick"></lo-button>
    </div>
  </li>
</template>

<script>
  export default {
    name: 'lo-list-item-single-line',
    props: {
      size: {
        type: Number,
        default: 1,
      },
      title: {
        type: String,
      },
      subTitle: {
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
      button: {
        type: String,
      },
      buttonClick: {
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
      onButtonClick() {
        if (this.buttonClick) {
          this.buttonClick();
        } else {
          console.warn('[loops-ui] \'buttonClick\' is not defined');
        }
      },
    },
  };
</script>

<style lang="scss">
  @import '../src/consts';

  $item-icon-size: 22px;

  .list-item-single-line {
    @include list-item;

    .item-avatar {
      margin-right: 15px;
    }

    .item-title {
      @include h_3;
    }

    .item-icon {
      width: $item-icon-size;
      height: $item-icon-size;
      display: flex;
      align-items: center;
      justify-content: center;

      img {
        max-width: 100%;
        max-height: 100%;
      }
    }

    .item-sub-title {
      @include body_2;
    }

    .left, .right {
      display: flex;
      align-items: center;
    }
  }

  .inapp {
    .list-item-single-line {
      padding: 0 15px * $ratio;

      .item-avatar {
        margin-right: 15px * $ratio;
      }
      .item-title {
        @include h_3($ratio);
      }
      .item-sub-title {
        @include body_2($ratio);
      }

      .item-icon {
        width: $item-icon-size * 2;
        height: $item-icon-size * 2;
      }
    }
  }
</style>
