import Vue from 'vue';
import Router from 'vue-router';
import Index from '../pages/Index.vue';
import Overview from '../pages/Overview.vue';
import Buttons from '../pages/Buttons.vue';
import Accordion from '../pages/Accordion.vue';
import Card from '../pages/Card.vue';
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
import MobileOverview from '../pages/mobile/Overview.vue';
import MobileListSingleLine from '../pages/mobile/ListSingleLine.vue';
import MobileListDoubleLine from '../pages/mobile/ListDoubleLine.vue';
import MobileListDenseLine from '../pages/mobile/ListDenseLine.vue';
import MobileButton from '../pages/mobile/Button.vue';
import MobileForm from '../pages/mobile/Form.vue';
import MobileTopNavigation from '../pages/mobile/Navigation.vue';
import MobileAccordion from '../pages/mobile/Accordion.vue';
import MobileSpinner from '../pages/mobile/Spinner.vue';

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
          path: 'accordion',
          name: 'Accordion',
          component: Accordion,
        },
        {
          path: 'card',
          name: 'Card',
          component: Card,
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
          path: 'avatar',
          name: 'Avatar',
          component: Avatars,
        },
        {
          path: 'list-single-line',
          name: 'ListSingleLine',
          component: ListSingleLine,
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
          path: 'overview',
          name: 'MobileOverview',
          component: MobileOverview,
        },
        {
          path: 'list-single-line',
          name: 'MobileListSingleLine',
          component: MobileListSingleLine,
        },
        {
          path: 'list-double-line',
          name: 'MobileListDoubleLine',
          component: MobileListDoubleLine,
        },
        {
          path: 'list-dense-line',
          name: 'MobileListDenseLine',
          component: MobileListDenseLine,
        },
        {
          path: 'button',
          name: 'MobileButton',
          component: MobileButton,
        },
        {
          path: 'form',
          name: 'MobileForm',
          component: MobileForm,
        },
        {
          path: 'top-navigation',
          name: 'MobileTopNavigation',
          component: MobileTopNavigation,
        },
        {
          path: 'accordion',
          name: 'MobileAccordion',
          component: MobileAccordion,
        },
        {
          path: 'spinner',
          name: 'MobileSpinner',
          component: MobileSpinner,
        },
      ],
    },
    {
      path: '/mobile/*',
      redirect: '/mobile/button',
    },
    {
      path: '*',
      redirect: '/',
    },
  ],
});
