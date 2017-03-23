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

  }

  .content {

  }
</style>
