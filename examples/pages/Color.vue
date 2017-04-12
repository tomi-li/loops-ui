<template>
  <div>
    <h1>Color</h1>

    <div class="columns">
      <!-- Main -->
      <section v-for="(types, key) in colors">
        <h2>{{ key }}</h2>
        <div class="color" v-for="(value, name) in types">
          <h3>{{ name }}</h3>
          <span class="color-block" :class="name" :data-clipboard-text="value">{{ value }}</span>
        </div>
      </section>

    </div>
  </div>
</template>

<script>
  import Clipboard from 'clipboard';

  const colors = {
    'Main Color': {
      m1: '#ec2c7a',
    },
    'Font Color': {
      t1: '#2c2c30',
      t2: '#777681',
      t3: '#B0B0BB',
      t4: '#d4d4d4',
      t5: '#ffffff',
    },
    'Background Color': {
      bg1: '#EAEBED',
      bg2: '#f1fbff',
    },
    'Dividing Line Color': {
      dl1: '#e2e2e2',
    },
    'Icon Color': {
      ic1: '#abadbb',
      ic2: '#ffffff',
    },
    'Mark Color': {
      bm1: '#000000 50%',
    },
    'Tapping Color': {
      cl1: '#eeeeee',
      cl2: 'c20059',
    },
  };

  export default {
    data() {
      return { colors };
    },
    mounted() {
      // eslint-disable-next-line no-new
      new Clipboard('.color-block');
    },
  };
</script>


<style lang="scss">
  @import '../../src/consts';

  .columns {
    display: flex;
    flex-flow: row wrap;
    section {
      padding: 0 20px;
      min-height: 300px;
      border-left: .5px solid $dl1;
      margin-bottom: 40px;

      h2 {
        font-size: 14px;
        text-align: center;
      }

      .color {
        margin: 0 0 30px;

        h3 {
          font-size: 16px;
          margin: .6em;
          text-align: center;
        }
      }
    }
  }

  .color-block {
    display: block;
    width: 140px;
    color: $white;
    text-align: center;
    font-size: 12px;
    font-weight: bold;
    padding: 12px 0;
    text-transform: uppercase;
    border: .5px solid transparent;
    cursor: pointer;

    &.m1 {
      background-color: $m1;
    }
    &.t1 {
      background-color: $t1;
    }
    &.t2 {
      background-color: $t2;
    }
    &.t3 {
      background-color: $t3;
    }
    &.t4 {
      background-color: $t4;
    }
    &.t5 {
      background-color: $t5;
      border: .5px solid $m1;
      color: $t1;
    }
    &.bg1 {
      background-color: $bg1;
      color: $t1;
    }
    &.bg2 {
      background-color: $bg2;
      color: $t1;
    }
    &.dl1 {
      background-color: $dl1;
      color: $t1;
    }
    &.ic1 {
      background-color: $ic1;
    }
    &.ic2 {
      background-color: $ic2;
      border: .5px solid $m1;
      color: $t1;
    }
    &.bm1 {
      background-color: $bm1;
    }
    &.cl1 {
      background-color: $cl1;
      color: $t1;
    }
    &.cl2 {
      background-color: $cl2;
    }
  }
</style>
