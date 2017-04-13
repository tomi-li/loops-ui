<template>
  <li class="lo-list-item-dense-line">
    <div class="left">
      <lo-avatar class="item-avatar" v-if="avatar" :src="avatar" :size="3"></lo-avatar>
      <p v-if="text">{{ text }}</p>
      <div>
        <span v-if="subheading1" class="item-subheading1"> {{ subheading1 }}</span>
        <span v-if="subheading2" class="item-subheading2"> {{ subheading2 }}</span>
        <span v-if="list" class="item-list"> {{ list }}</span>
      </div>
    </div>
  </li>
</template>

<script>
  export default {
    props: {
      text: {
        type: String,
      },
      avatar: {
        type: String,
      },
      subheading1: {
        type: String,
      },
      subheading2: {
        type: String,
      },
      list: {
        type: String,
      },
    },
    name: 'lo-list-item-dense-line',
  };
</script>


<style lang="scss" scoped>
  @import "consts";

  .lo-list-item-dense-line {
    @include list-item;
    overflow: hidden;

    .left {
      display: flex;
      align-items: center;
      .item-avatar {
        margin-right: 15px;
      }

      .item-subheading1 {
        @include body_2;
        display: block;
      }
      .item-subheading2 {
        @include body_2;
        font-weight: bold;
        display: block;
      }
      .item-list {
        @include h_4;
      }
    }
  }

</style>
