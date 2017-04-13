<template>
  <li class="lo-list-form-input">
    <input class="input" type="text" :placeholder="placeholder" @focus="checkDirty" @input="checkDirty"/>
    <span v-if="dirty" @click="clear" class="clear-icon">X</span>
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
        const elm = this.$el.querySelector('.input');
        elm.value = '';
        this.dirty = false;

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

  .lo-list-form-input {
    height: 48px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: .5px solid $dl1;
    padding: 0 15px;

    .input {
      width: 100%;
      color: $t1;
      border: none;
      outline: none;
      -webkit-appearance: none;
      height: 100%;

      ::-webkit-input-placeholder,
      ::-moz-placeholder,
      :-ms-input-placeholder {
        @include body_2;
        color: $t4;
      }
    }

    .clear-icon {
      display: inline-block;
      width: 16px;
      height: 16px;
      font-family: monospace;
      background-color: $bg1;
      border-radius: 100%;
      text-align: center;
      line-height: 16px;
      font-size: 10px;
    }
  }
</style>
