/**
 * All Codes below are Lifetime Warranted by Tomi since 22/03/2017.
 */
import 'normalize.css/normalize.css';
import attachFastClick from 'fastclick';

import Button from './Button.vue';
import Card from './Card.vue';
import Section from './Section.vue';
import TopNavigation from './TopNavigation.vue';
import Widget from './Widget.vue';
import Spinner from './Spinner.vue';
import Page from './Page.vue';
import Circle from './Circle.vue';
import Accordion from './Accordion.vue';
import AccordionItem from './AccordionItem.vue';
import Swiper from './Swiper.vue';
import SwiperSlide from './SwiperSlide.vue';
import Avatar from './Avatar.vue';
import filters from './filters';
import List from './List.vue';
import ListItemDenseLine from './ListItemDenseLine.vue';
import ListItemSingleLine from './ListItemSingleLine.vue';
import ListItemTwoLine from './ListItemTwoLine.vue';
import ListFormInput from './ListFormInput.vue';
import PackageFile from '../package.json';

const VERSION = PackageFile.version;

const componentsArray = [
  Button,
  Card,
  Section,
  TopNavigation,
  Widget,
  Spinner,
  Page,
  Circle,
  Accordion,
  AccordionItem,
  Swiper,
  SwiperSlide,
  Avatar,
  List,
  ListItemDenseLine,
  ListItemSingleLine,
  ListItemTwoLine,
  ListFormInput,
];


const install = (Vue) => {
  /* istanbul ignore if */
  if (install.installed) return;

  componentsArray.map(component => Vue.component(component.name, component));
  Vue.filter('shortenNumber', filters.shortenNumber);

  // add fastclick to body
  document.addEventListener('DOMContentLoaded', () => attachFastClick.attach(document.body), false);

  // add inapp class to body
  const metas = document.getElementsByTagName('meta');
  if (metas.length > 0) {
    // eslint-disable-next-line no-plusplus
    for (let i = 0; i < metas.length; i++) {
      const each = metas[i];
      if (each.name === 'viewport') {
        if (window.innerWidth === 750 && /width=750/.test(each.content)) {
          document.body.className += 'inapp';
        }
      }
    }
  }
};

export default install;

export const components = {
  Button,
  Card,
  Section,
  TopNavigation,
  Widget,
  Spinner,
  Page,
  Circle,
  Accordion,
  AccordionItem,
  Swiper,
  SwiperSlide,
  Avatar,
  List,
  ListItemDenseLine,
  ListItemSingleLine,
  ListItemTwoLine,
  ListFormInput,
  VERSION,
};

