<template>
  <div>
    <!-- Header -->
    <h1> Navigation </h1>

    <!-- Top Navigation -->
    <section>
      <h2> Top Navigation </h2>
      <div>
        <lo-top-navigation :links="items"></lo-top-navigation>
      </div>
    </section>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        items: [
          {
            title: 'Broadcaster',
            onPress: () => console.log('pressed'),
          },
          {
            title: 'Looper',
            onPress: () => console.log('pressed'),
          },
        ],
      };
    },
  };
</script>

<style>

</style>
