<template>
  <section>
    <h2> Circle </h2>
    <lo-circle :current="20" :maximum="67">

    </lo-circle>

    <lo-circle :current="8800" :maximum="30000">

    </lo-circle>
  </section>

  <section>
    <h2> Widget </h2>
    <lo-widget
      text="Demo Widget"
      :icon="require('./assets/fresh.svg')"
      :iconSize="{ width: 52, height: 42}">
    </lo-widget>
  </section>
</template>

<script>
  export default {};
</script>
