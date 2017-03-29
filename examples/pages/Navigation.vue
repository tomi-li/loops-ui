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
            onPress: () => {
              this.$router.replace({ path: '/title/broadcaster', query: this.$route.query });
            },
            active: false,
          },
          {
            title: 'Looper',
            onPress: () => {
              this.$router.replace({ path: '/title/looper', query: this.$route.query });
            },
            active: true,
          },
        ],
      };
    },
  };
</script>

<style>

</style>
