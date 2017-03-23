<template>
  <div id="app">
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
      </ul>
    </div>
    <div class="content">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
  export default {};
</script>

<style lang="scss">
  @import "consts";

  body {
    @include body;
  }

  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

    ul {
      list-style: none;
    }

    display: flex;
  }

  .navigation {
    width: 300px;
  }

  .content {
    flex: 1;
  }
</style>
