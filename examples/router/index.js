import Vue from 'vue';
import Router from 'vue-router';
import Index from '../pages/Index.vue';
import Typography from '../pages/Typography.vue';
import Buttons from '../pages/Buttons.vue';
import Containers from '../pages/Containers.vue';
import Navigation from '../pages/Navigation.vue';
import Spinner from '../pages/Spinners.vue';
import Swiper from '../pages/Swipers.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index,
    },
    {
      path: '/typography',
      name: 'Typography',
      component: Typography,
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
      path: '/swipers',
      name: 'Swiper',
      component: Swiper,
    },
  ],
});
