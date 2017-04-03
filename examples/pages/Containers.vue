<template>
  <div>
    <h1> Containers </h1>

    <section>
      <h2> Accordion </h2>

      <lo-accordion>
        <lo-accordion-item>123123</lo-accordion-item>
      </lo-accordion>

    </section>

    <section>
      <h2> Card </h2>
      <lo-card header="Looper" :active="true" style="width: 300px;">
        <div>
          <lo-button title="Submit" type="primary"></lo-button>
        </div>
      </lo-card>

      <lo-card header="Looper" :active="false" style="width: 300px;">
        <div>
          <lo-button title="Submit" type="primary"></lo-button>
        </div>
      </lo-card>

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

    <section>
      <h2> Page </h2>
      <div class="pages">
        <div class="page-demo">
          <lo-page>
            <span> Page Contents </span>
          </lo-page>
        </div>
        <div class="page-demo">
          <lo-page :loading="true">
            <span> Page Contents </span>
          </lo-page>
        </div>
      </div>
    </section>

  </div>
</template>

<script>
  export default {
    methods: {
      sectionTitleClicked() {
        console.log(this);
      },
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
