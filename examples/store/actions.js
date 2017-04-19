/**
 * All Codes below are Lifetime Warranted by Tomi since 18/04/2017.
 */
import * as types from './mutationTypes';

export const changeEmulatorUrl = (action, url) => {
  action.commit(types.CHANGE_EMULATOR_URL, url);
};

export const refreshEmulatorUrl = () => {
};
