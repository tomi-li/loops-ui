<template>
  <div class="frame" v-lo-affix="100">
    <div id="qrcode"></div>
    <iframe class="iframe" :src="realUrl" frameborder="0"></iframe>
  </div>
</template>

<script>
  import { mapState } from 'vuex';
  import QRCode from '../utils/QRMaker';

  export default {
    name: 'emulator',
    data() {
      return {
        qrcode: undefined,
      };
    },
    computed: {
      realUrl() {
        const regex = /(.*)#\/.*/;
        const projectUrl = window.location.href.replace(regex, '$1');
        return `${projectUrl}/#${this.emulatorUrl}`;
      },
      ...mapState(['emulatorUrl']),
    },
    mounted() {
      this.qrcode = new QRCode('qrcode', {
        width: 90,
        height: 90,
        colorDark: '#000000',
        colorLight: '#ffffff',
        correctLevel: QRCode.CorrectLevel.M,
      });
      this.qrcode.makeCode(this.realUrl);
    },
    updated() {
      this.qrcode.makeCode(this.realUrl);
    },
  };
</script>
<style lang="scss">
  @import "../../src/consts";

  .frame {
    position: relative;
    width: 424px;
    height: 892px;
    background: url('../assets/iphone-frame.svg') no-repeat center center;
    margin: 100px 40px 0;
  }

  #qrcode {
    position: absolute;
    top: 20px;
    right: 40px;
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
