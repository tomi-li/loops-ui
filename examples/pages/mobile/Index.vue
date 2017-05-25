<template>
  <div class="body">
    <transition name="router">
      <router-view></router-view>
    </transition>
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

  .router-enter-active, .router-leave-active {
    transition: opacity .5s
  }

  .router-enter, .router-leave-to {
    opacity: 0
  }
</style>
