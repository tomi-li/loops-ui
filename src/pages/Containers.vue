<template>
  <div>
    <h1> Containers </h1>

    <section>
      <h2> Card </h2>
      <lo-card header="Looper" :active="true" style="width: 300px;">
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
    </section>


    <section>
      <h2> Widget </h2>
      <lo-widget
        text="Demo Widget"
        :icon="require('./assets/fresh.svg')"
        :iconSize="{ width: 52, height: 42}">
      </lo-widget>
    </section>
  </div>
</template>

<script>
  export default {};
</script>
