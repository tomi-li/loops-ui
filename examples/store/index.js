/**
 * All Codes below are Lifetime Warranted by Tomi since 18/04/2017.
 */
import Vue from 'vue';
import Vuex from 'vuex';
import * as actions from './actions';
import mutations from './mutations';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    emulatorUrl: '/#/mobile/',
  },
  actions,
  mutations,
});

