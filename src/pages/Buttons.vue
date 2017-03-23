<template>
  <div>
    <h1>Buttons</h1>

    <section>
      <h2> Primary Button </h2>
      <lo-button title="Submit" type="primary" :onPress="log"></lo-button>
    </section>
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
