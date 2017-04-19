<template>
  <lo-page>
    <h2>Top Navigation</h2>
    <div class="header-container">
      <lo-top-navigation :links="links"></lo-top-navigation>
    </div>
  </lo-page>
</template>

<script>
  export default {
    data() {
      return {
        links: [
          { title: 'test' },
          { title: 'test' },
        ],
      };
    },
  };
</script>

<style lang="scss">
  .header-container {
    width: 250px;
    margin: 0 auto;
  }

  .inapp {
    .header-container {
      width: 250px * 2;
      margin: 0 auto;
    }
  }
</style>
