<template>
  <div class="frame" v-lo-affix="100">
    {{realUrl}}
    <iframe class="iframe" :src="realUrl" frameborder="0"></iframe>
  </div>
</template>

<script>
  import { mapState } from 'vuex';

  export default {
    name: 'emulator',
    computed: {
      realUrl() {
        const regex = /(.*)#\/.*/;
        const projectUrl = window.location.href.replace(regex, '$1');
        return `${projectUrl}/#${this.emulatorUrl}`;
      },
      ...mapState(['emulatorUrl']),
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
