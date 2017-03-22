import Vue from 'vue';
import Router from 'vue-router';
import Index from '../pages/Index';
import Typography from '../pages/Typography';


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
  ],
});
