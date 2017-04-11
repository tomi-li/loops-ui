<template>
  <div id="app">
    <div class="navigation">
      <ul>
        <li class="top-logo">
          <div class="logo"></div>
          <blockquote>
            <span>A UI component for Loops APP</span>
            <br>
            <small>
              <lo-button type="link" href="mailto:lishuo@mozat.com" title="lishuo@mozat.com"></lo-button>
            </small>
          </blockquote>
        </li>
        <li>
          <router-link to="/overview">Overview</router-link>
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
      box-sizing: border-box;

      .top-logo {
        padding: 20px;
      }

      li > a {
        display: block;
        text-decoration: none;
        color: $text-dark-color;
        font-weight: 600;
        padding: 0 20px;
        height: 40px;
        line-height: 40px;

        transition: box-shadow .5s, color .5s ease-out;

        &.router-link-active {
          color: $primary-color;
        }

        &:hover {
          @include boxShadow;
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

      & > div {
        & > h1 {
          padding-bottom: 10px;
        }

        & > h2 {
          padding-bottom: 10px;
          border-bottom: .5px solid $divider-color;
        }
      }
    }
  }
</style>
