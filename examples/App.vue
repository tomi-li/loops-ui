<template>
  <div id="app">
    <header class="page-header">
      <h3>Loops</h3>
    </header>

    <div class="body">
      <div class="navigation">
        <ul>
          <li>
            <router-link to="/typography">Typography</router-link>
          </li>
          <li>
            <router-link to="/buttons">Buttons</router-link>
          </li>
          <li>
            <router-link to="/navigation">Navigation</router-link>
          </li>
          <li>
            <router-link to="/containers">Containers</router-link>
          </li>
          <li>
            <router-link to="/spinners">Spinners</router-link>
          </li>
          <li>
            <router-link to="/swipers">Swipers</router-link>
          </li>
        </ul>
      </div>
      <div class="content">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
  export default {};
</script>

<style lang="scss">
  @import "../src/consts";

  body {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

    ul {
      list-style: none;
    }
  }

  #app {
    .page-header {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 40px;
      background-color: $bg-color;
      border-bottom: 1px solid $divider-color;
    }

    .body {
      @include flex(flex, row, flex-start, flex-start);
      padding-top: 44px;

      .navigation {
        width: 300px;
      }

      .lo-card-content {
        flex: 1;
        overflow: auto;
      }
    }
  }

</style>
