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
    data: () => ({
      items: [
        {
          title: 'page1',
          onPress: () => console.log('page1'),
        },
        {
          title: 'page2',
          onPress: () => console.log('page2'),
        },
      ],
    }),
  };
</script>

<style>

</style>
