import Vue from 'vue';
import App from './App.vue';
import router from './router';
import VueLoops from '../src';
import { componentsArray } from './components';

console.clear();

Vue.use(VueLoops);
Vue.config.productionTip = false;

componentsArray.forEach(component => Vue.component(component.name, component));

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App),
});
