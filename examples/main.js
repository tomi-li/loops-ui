import Vue from 'vue';
import store from './store';
import router from './router';
import RegisterDirectives from './directives';
import VueLoops from '../src';
import { componentsArray } from './components';

Vue.use(VueLoops);
Vue.config.productionTip = false;

componentsArray.forEach(component => Vue.component(component.name, component));
RegisterDirectives(Vue);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h('router-view'),
});
