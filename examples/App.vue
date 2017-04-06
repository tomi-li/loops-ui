<template>
  <div id="app">
    <div class="navigation">
      <ul>
        <li>
          <div class="logo"></div>
          <blockquote>
            <span>A UI component for Loops APP</span>
            <br>
            <small>lishuo.tomi@gmail.com</small>
          </blockquote>
        </li>
        <li>
          <router-link to="/typography">Overview</router-link>
        </li>
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
</template>

<script>
  export default {};
</script>

<style lang="scss">
  @import "../src/consts";

  html {
    height: 100%;
  }

  body {
    @include body;
    position: relative;

    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    min-height: 100%;

    ul {
      list-style: none;
      padding: 0;
      margin: 0;
    }
  }

  #app {
    @include flex(flex, row, flex-start, flex-start);

    .navigation {
      position: absolute;
      width: 300px;
      height: 100%;
      background-color: $bg-color;
      padding: 20px 20px;
      box-sizing: border-box;

      a {
        display: inline-block;
        text-decoration: none;
        color: $text-dark-color;
        font-weight: 600;

        height: 40px;
        line-height: 40px;

        &.router-link-active {
          color: $primary-color;
        }
      }

      .logo {
        width: 40%;
        height: 60px;
        background: center center no-repeat url('./assets/logo-text.svg');
        background-size: contain;
      }

    }

    .content {
      margin-left: 300px;
      padding: 20px;
      flex: 1;
      overflow: auto;
    }

  }

</style>
