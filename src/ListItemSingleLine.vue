<template>
  <li class="list-item-single-line">
    <div class="left">
      <lo-avatar class="item-avatar" v-if="avatar" :src="avatar" :size="3"></lo-avatar>
      <span class="item-title">{{ title }}</span>
    </div>
    <span v-if="subTitle" class="item-sub-title">{{ subTitle }}</span>
    <div v-if="icon" class="item-icon"><img :src="icon"/></div>
    <lo-button v-if="button" :type="['basic', 'primary']" size='tiny' :title="button"></lo-button>
  </li>
</template>

<script>
  import attachFastClick from 'fastclick';

  export default {
    name: 'lo-list-item-single-line',
    props: {
      size: {
        type: Number,
        default: 1,
      },
      title: {
        type: String,
        default: '',
      },
      subTitle: {
        type: String,
        default: '',
      },
      avatar: {
        type: String,
      },
      icon: {
        type: String,
      },
      button: {
        type: String,
      },
    },
    mounted() {
      attachFastClick.attach(this.$el);
    },
  };
</script>

<style lang="scss">
  @import '../src/consts';

  .list-item-single-line {
    @include disableUserEvents;
    border-top: .5px solid $dl1;
    padding: 0 15px;
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    align-items: center;

    &:active {
      background-color: $cl1;
    }

    .item-avatar {
      margin-right: 15px;
    }

    .item-title {
      @include h_3;
    }

    .item-sub-title {
      @include body_2;
    }

    .left {
      display: flex;
      align-items: center;
    }
  }
</style>
