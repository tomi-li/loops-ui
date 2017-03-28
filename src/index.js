/**
 * All Codes below are Lifetime Warranted by Tomi since 22/03/2017.
 */
import 'normalize.css/normalize.css';

import Button from './Button.vue';
import Card from './Card.vue';
import Section from './Section.vue';
import TopNavigation from './TopNavigation.vue';
import Widget from './Widget.vue';
import Spinner from './Spinner.vue';
import Page from './Page.vue';
import Circle from './Circle.vue';
import filters from './filters';

const componentsArray = [
  Button,
  Card,
  Section,
  TopNavigation,
  Widget,
  Spinner,
  Page,
  Circle,
];


function install(Vue) {
  /* istanbul ignore if */
  if (install.installed) return;

  componentsArray.map(component => Vue.component(component.name, component));
  Vue.filter('shortenNumber', filters.shortenNumber);
}

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
};
