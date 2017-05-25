<template>
  <div>
    <h1>Card</h1>

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

  </div>
</template>

<script>
  export default {};
</script>
