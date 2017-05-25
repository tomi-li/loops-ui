<template>
  <div>
    <h1> Containers </h1>

    <section>
      <h2> Accordion </h2>

      <div class="pages">
        <div class="page-demo">
          <lo-accordion :oneAtOnce="true">
            <lo-accordion-item title="xxx">TTTest</lo-accordion-item>
            <lo-accordion-item title="yyy">123123</lo-accordion-item>
            <lo-accordion-item title="zzz">123123</lo-accordion-item>
          </lo-accordion>
        </div>
      </div>
    </section>

    <section>
      <h2> Section </h2>
      <lo-section header="123123123">
        <span>what is the </span>
      </lo-section>

      <lo-section header="123123123" :icon="sectionTitleClicked">
        <span>With icon </span>
      </lo-section>
    </section>

  </div>
</template>

<script>
  export default {
    methods: {
      sectionTitleClicked() {
        console.log('title clicked');
      },
    },
    mounted() {
      this.$store.dispatch('changeEmulatorUrl', '/mobile/accordion');
    },
  };
</script>

<style lang="scss">
  .pages {
    display: flex;
    flex-flow: row nowrap;

    .page-demo {
      width: 320px;
      height: 515px;
    }
  }
</style>
