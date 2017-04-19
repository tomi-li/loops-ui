<template>
  <div class="body">
    <router-view></router-view>
  </div>
</template>

<script>
  export default {};
</script>


<style lang="scss">
  @import "../../../src/consts.scss";

  .body {
    @include body;
  }

  .inapp {
    .body {
      @include body(2);
    }
  }
</style>
