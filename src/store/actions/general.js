import * as types from '../types/general';

export const getDarkModePreference = data => ({
  type: types.GET_DARK_MODE_PREFERENCE,
  data,
});
