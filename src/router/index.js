import Vue from 'vue';
import Router from 'vue-router';
import Index from '../pages/Index';
import Typography from '../pages/Typography';
import Buttons from '../pages/Buttons';
import Containers from '../pages/Containers';

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
  ],
});
