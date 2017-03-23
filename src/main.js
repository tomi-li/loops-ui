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
Vue.component('lo-top-navigation', components.TopNavigation);
Vue.component('lo-section', components.Section);
Vue.component('lo-widget', components.Widget);
Vue.component('lo-spinner', components.Spinner);
Vue.component('lo-page', components.Page);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App },
});
