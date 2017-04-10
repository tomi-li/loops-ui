<template>
  <div class="code">
    <slot></slot>
  </div>
</template>

<script>
  import hljs from 'highlight.js';
  import 'highlight.js/styles/darcula.css';

  export default {
    name: 'code-block',
    mounted() {
      hljs.highlightBlock(this.$el);
    },
  };
</script>

<style>
  .code {
    border-radius: 6px;
    white-space: pre;
  }
</style>

