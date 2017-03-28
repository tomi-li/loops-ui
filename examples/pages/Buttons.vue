<template>
  <div>
    <h1>Buttons</h1>

    <section>
      <h2> Types </h2>

      <div>
        <h3>Primary</h3>
        <lo-button title="Submit" type="primary" :onPress="log"></lo-button>
      </div>
      <div>
        <h3>Link</h3>
        <lo-button title="Link" type="link" :onPress="log"></lo-button>
      </div>
      <div>
        <h3>Secondary</h3>
        <lo-button title="Link" type="secondary" :onPress="log"></lo-button>
      </div>
    </section>

  </div>
</template>

<script>
  export default {
    methods: {
      log() {
        console.log('clicked');
      },
    },
  };
</script>
