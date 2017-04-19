import Vue from 'vue';
import Router from 'vue-router';
import Index from '../pages/Index.vue';
import Overview from '../pages/Overview.vue';
import Buttons from '../pages/Buttons.vue';
import Containers from '../pages/Containers.vue';
import Navigation from '../pages/Navigation.vue';
import Spinner from '../pages/Spinners.vue';
import Swiper from '../pages/Swipers.vue';
import Colors from '../pages/Color.vue';
import Avatars from '../pages/Avatar.vue';
import ListSingleLine from '../pages/ListSingleLine.vue';
import ListTwoLine from '../pages/ListTwoLine.vue';
import ListDenseLine from '../pages/ListDenseLine.vue';
import Form from '../pages/Form.vue';

// mobiles
import MobileIndex from '../pages/mobile/Index.vue';
import MobileList from '../pages/mobile/List.vue';
import MobileButton from '../pages/mobile/Button.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/doc/overview',
    },
    {
      path: '/doc',
      name: 'Doc',
      component: Index,
      children: [
        {
          path: 'overview',
          name: 'Overview',
          component: Overview,
        },
        {
          path: 'colors',
          name: 'Colors',
          component: Colors,
        },
        {
          path: 'buttons',
          name: 'Buttons',
          component: Buttons,
        },
        {
          path: 'containers',
          name: 'Containers',
          component: Containers,
        },
        {
          path: 'navigation',
          name: 'Navigation',
          component: Navigation,
        },
        {
          path: 'spinners',
          name: 'Spinner',
          component: Spinner,
        },
        {
          path: 'swiper',
          name: 'Swiper',
          component: Swiper,
        },
        {
          path: 'list-single-line',
          name: 'ListSingleLine',
          component: ListSingleLine,
        },
        {
          path: 'avatar',
          name: 'Avatar',
          component: Avatars,
        },
        {
          path: 'list-two-line',
          name: 'ListTwoLine',
          component: ListTwoLine,
        },
        {
          path: 'list-dense-line',
          name: 'ListDenseLine',
          component: ListDenseLine,
        },
        {
          path: 'form',
          name: 'Form',
          component: Form,
        },
      ],
    },
    {
      path: '/mobile',
      name: 'Mobile',
      component: MobileIndex,
      children: [
        {
          path: 'list',
          name: 'MobileList',
          component: MobileList,
        },
        {
          path: 'button',
          name: 'MobileButton',
          component: MobileButton,
        },
      ],
    },
    {
      path: '*',
      redirect: '/',
    },
  ],
});
