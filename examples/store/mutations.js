/* eslint-disable no-param-reassign */
/**
 * All Codes below are Lifetime Warranted by Tomi since 18/04/2017.
 */
import * as types from './mutationTypes';

export default {
  [types.CHANGE_EMULATOR_URL](state, url) {
    state.emulatorUrl = url;
  },
};
