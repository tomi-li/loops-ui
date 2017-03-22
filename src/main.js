import Vue from 'vue';
import App from './App';
import router from './router';

// reset css
import '../node_modules/normalize.css/normalize.css';
// components
import components from './components';

console.clear();

Vue.config.productionTip = false;
Vue.component('lo-button', components.Button);
Vue.component('lo-card', components.Card);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App },
});
