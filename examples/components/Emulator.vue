<template>
  <div class="frame" v-lo-affix="100">
    <iframe class="iframe" :src="emulatorUrl" frameborder="0"></iframe>
  </div>
</template>

<script>
  import { mapState } from 'vuex';

  export default {
    name: 'emulator',
    computed: {
      ...mapState({
        emulatorUrl: 'emulatorUrl',
      }),
    },
  };
</script>
<style lang="scss">
  @import "../../src/consts";

  .frame {
    position: relative;
    margin-top: 100px;
    width: 424px;
    height: 892px;
    background: url('../assets/iphone-frame.svg') no-repeat center center;
  }

  .iframe {
    position: absolute;
    width: 375px;
    height: 654px;
    top: 123px;
    left: 29.5px;
    background-color: $bg1;
  }
</style>
