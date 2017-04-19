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
<style>
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
    background-color: #3bd80d;
    top: 123px;
    left: 29.5px;
  }
</style>
