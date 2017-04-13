import Vue from 'vue';
import Router from 'vue-router';
import Overview from '../pages/Overview.vue';
import Buttons from '../pages/Buttons.vue';
import Containers from '../pages/Containers.vue';
import Navigation from '../pages/Navigation.vue';
import Spinner from '../pages/Spinners.vue';
import Swiper from '../pages/Swipers.vue';
import Colors from '../pages/Color.vue';
import Avatars from '../pages/Avatar.vue';
import ListSingleLine from '../pages/ListSingleLine.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/overview',
    },
    {
      path: '/overview',
      name: 'Overview',
      component: Overview,
    },
    {
      path: '/colors',
      name: 'Colors',
      component: Colors,
    },
    {
      path: '/buttons',
      name: 'Buttons',
      component: Buttons,
    },
    {
      path: '/containers',
      name: 'Containers',
      component: Containers,
    },
    {
      path: '/navigation',
      name: 'Navigation',
      component: Navigation,
    },
    {
      path: '/spinners',
      name: 'Spinner',
      component: Spinner,
    },
    {
      path: '/swiper',
      name: 'Swiper',
      component: Swiper,
    },
    {
      path: '/list-single-line',
      name: 'ListSingleLine',
      component: ListSingleLine,
    },
    {
      path: '/avatar',
      name: 'Avatar',
      component: Avatars,
    },
  ],
});
