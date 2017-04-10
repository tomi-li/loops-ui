import Vue from 'vue';
import App from './App.vue';
import router from './router';
import VueLoops from '../src';
import ExampleComponents from './components';

console.clear();

Vue.use(VueLoops);
Vue.config.productionTip = false;

Vue.component(ExampleComponents.CodeBlock.name, ExampleComponents.CodeBlock);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App),
});
