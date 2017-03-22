<template>
  <div id="buttons">
    <lo-button title="Submit" type="primary" :onPress="log"/>
  </div>
</template>

<script>
  export default {
    methods: {
      log() {
        console.log(this);
        console.log('!@3');
      },
    },
  };
</script>
