<template>
  <div>
    <h1>Form</h1>

    <div class="columns">
      <section>
        <h2>input_1</h2>

        <lo-list class="demo-list">
          <lo-list-form-input
            placeholder="input here"
            :onValue="onValue1"></lo-list-form-input>
          <lo-list-form-input
            placeholder="input here"
            :onValue="onValue2"></lo-list-form-input>
        </lo-list>

        <div>
          <br>
          <p>Value 1: {{ value1 }}</p>
          <p>Value 2: {{ value2 }}</p>
        </div>
      </section>
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        value1: '',
        value2: '',
      };
    },
    methods: {
      onValue1(value) {
        this.value1 = value;
      },
      onValue2(value) {
        this.value2 = value;
      },
    },
    created() {
      this.$store.dispatch('changeEmulatorUrl', '/#/mobile/form');
    },
  };
</script>
