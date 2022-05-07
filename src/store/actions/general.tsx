import {GENERAL_LIST_ACTION_TYPES} from '../types/general';

export const getDarkModePreference = (color: string) => ({
  type: GENERAL_LIST_ACTION_TYPES.GET_DARK_MODE_PREFERENCE,
  color: color,
});
