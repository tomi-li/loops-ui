<template>
  <div class="code-block" :class="lang">
    <span class="lang">{{ lang }}</span>
    <div class="code">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  import hljs from 'highlight.js';
  import 'highlight.js/styles/github-gist.css';

  export default {
    name: 'code-block',
    props: {
      lang: {
        type: String,
        default: 'javascript',
      },
    },
    beforeCreate() {
//      console.log(Object.assign({}, this.$slots.default));
    },
    mounted() {
      const code = this.$el.querySelector('.code');
      code.innerHTML = code.innerHTML.trim().replace(/</g, '&lt;').replace(/>/g, '&gt;');
      hljs.highlightBlock(code);
    },
  };
</script>

<style lang="scss">
  @import '../../src/consts.scss';

  .code-block {
    position: relative;
    margin: 10px 0;
    padding: 10px 14px 8px;
    border: .5px solid $dl1;
    border-radius: 3px;

    .lang {
      position: absolute;
      right: 6px;
      top: 0;
      font-size: 12px;
      padding: 3px 8px;
      background-color: $bg2;
      border-radius: 0 0 3px 3px;
    }

    .code {
      white-space: pre-line;
      font-family: 'Roboto Mono', Monaco, courier, monospace;
      font-size: 12px;
      line-height: 1.4;
    }
  }

</style>

