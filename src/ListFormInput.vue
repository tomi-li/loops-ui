<template>
  <li class="lo-list-form-input">
    <input class="lo-input" type="text" :placeholder="placeholder" @focus="checkDirty" @input="checkDirty"/>
    <span v-show="dirty" @click="clear" class="clear-icon"><img :src="require('./assets/cross.svg')"></span>
  </li>
</template>

<script>
  export default {
    name: 'lo-list-form-input',
    props: {
      placeholder: {
        type: String,
        default: '',
      },
      onValue: {
        type: Function,
      },
    },
    data() {
      return {
        dirty: false,
      };
    },
    methods: {
      clear() {
        const elm = this.$el.querySelector('.lo-input');
        elm.value = '';
        elm.focus(); // focus to make mobile safari show placeholder.
        this.dirty = false;
        elm.blur();

        if (this.onValue) this.onValue('');
      },
      checkDirty(e) {
        if (e.target.value && !this.dirty) this.dirty = true;
        if (!e.target.value && this.dirty) this.dirty = false;

        if (this.onValue) this.onValue(e.target.value);
      },
    },
  };
</script>


<style lang="scss" scoped>
  @import "consts";

  $clear-icon-size: 20px;

  .lo-list-form-input {
    height: 48px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: .5px solid $dl1;
    padding: 0 15px;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);

    .lo-input {
      @include body_2;
      width: 100%;
      color: $t1;
      border: none;
      outline: none;
      -webkit-appearance: none;

      ::-webkit-input-placeholder {
        color: $t4;
      }
    }

    .clear-icon {
      display: flex;
      width: $clear-icon-size;
      height: $clear-icon-size;
      font-family: monospace;
      background-color: $bg1;
      border-radius: 100%;
      cursor: pointer;
      align-items: center;
      justify-content: center;

      img {
        max-width: 50%;
      }
    }

    .clear-icon-enter-active, .clear-icon-leave-active {
      transition: opacity .2s;
    }
    .clear-icon-enter, .clear-icon-leave-to {
      opacity: 0;
    }

  }

  .inapp {
    .lo-list-form-input {
      padding: 0 30px;

      .lo-input {
        @include body_2(2);
      }
      .clear-icon {
        width: $clear-icon-size * 2;
        height: $clear-icon-size * 2;
      }
    }

  }
</style>
