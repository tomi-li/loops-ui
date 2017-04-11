<template>
  <div>
    <slot></slot>
    <div v-html="codeSnippet"></div>
  </div>
</template>

<script>
  // not using
  export default {
    name: 'component-demo',
    data() {
      return {
        codeSnippet: '',
      };
    },
    methods: {
      onPreviewReady(child) {
        this.codeSnippet = `<code-block> ${child.$el.innerHTML} </code-block>`;
      },
    },
  };
</script>

<style lang="scss">

</style>
