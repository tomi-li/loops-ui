<template>
  <div id="app">
    <div class="navigation">
      <ul>
        <li class="top-logo">
          <div class="logo"><img src="./assets/logo-text.svg"/></div>
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
          <router-link to="/colors">Color Pallet</router-link>
        </li>
        <li>
          <router-link to="/buttons">Buttons</router-link>
        </li>
        <li>
          <router-link to="/avatar">Avatar</router-link>
        </li>
        <li>
          <router-link to="/list-single-line">List - SingleLine</router-link>
        </li>
        <li>
          <router-link to="/list-two-line">List - TwoLine</router-link>
        </li>
        <li>
          <router-link to="/list-dense-line">List - DenseLine</router-link>
        </li>
        <li>
          <router-link to="/form">Form</router-link>
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
          <router-link to="/swiper">Swipers</router-link>
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

<style src="./App.scss" lang="scss"></style>
