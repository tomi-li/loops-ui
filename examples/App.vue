<template>
  <div id="app">
    <div class="navigation">
      <ul>
        <li class="top-logo">
          <svg viewBox="0 0 225.01 86.95" class="logo">
            <g fill="#ffffff" fillRule="evenodd" stroke="#ec2c7a" strokeWidth="1" class="lines">
              <path
                d="M12,12V43c0,6.89.16,13,11,13H33.48A24.49,24.49,0,1,1,56,67.89V68H54.28l-31,0H21A20.19,20.19,0,0,1,2.78,56.67C.89,52.85,0,47.72,0,40.19V.09S12-1.83,12,12ZM54.51,56A12.48,12.48,0,0,0,67,43.51s0,0,0,0A12.48,12.48,0,0,0,54.56,31h0a12.5,12.5,0,0,0,0,25Zm53-37A24.5,24.5,0,1,1,83,43.46,24.45,24.45,0,0,1,107.52,19Zm0,37A12.48,12.48,0,0,0,120,43.51s0,0,0,0A12.48,12.48,0,0,0,107.56,31h0a12.5,12.5,0,0,0,0,25Zm53-37A24.5,24.5,0,1,1,148,64.49V74.85C148,86.9,136,87,136,87V43h0A24.5,24.5,0,0,1,160.52,19Zm0,37A12.48,12.48,0,0,0,173,43.51s0,0,0,0A12.48,12.48,0,0,0,160.56,31h0a12.5,12.5,0,0,0,0,25Zm25.6,0H209V55.9a3.59,3.59,0,0,0,.5.05,3.5,3.5,0,0,0,0-7,3.59,3.59,0,0,0-.5.05v0h-6.43v0c-.19,0-.37,0-.56,0a15,15,0,0,1,0-30h23s.1,9.36-8.42,11.54c0,.15.08.3.12.46H202a3,3,0,0,0,0,6h7v0l.5,0a15.5,15.5,0,0,1,0,31c-.18,0-.33,0-.5,0v0H175a28.46,28.46,0,0,0,11.08-12Z"/>
            </g>
          </svg>
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
  import anime from 'animejs';

  export default {
    mounted() {
      const basicTimeline = anime.timeline();

      basicTimeline
        .add({
          targets: '.top-logo path',
          strokeDashoffset: [anime.setDashoffset, 300],
          easing: 'easeInOutSine',
          direction: 'alternate',
          duration: 2500,
        })
        .add({
          targets: '.top-logo .lines',
          easing: 'easeInOutSine',
          duration: 200,
          fill: '#ec2c7a',
        });
    },
  };
</script>

<style src="./App.scss" lang="scss"></style>
