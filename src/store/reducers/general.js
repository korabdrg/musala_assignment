import * as types from '../types/general';

let initialState = {color: 'white'};

export default (state = initialState, action) => {
  let {type} = action;
  switch (type) {
    case 'GET_DARK_MODE_PREFERENCE':
      return {
        color: action.data == 'dark',
      };
    default:
      return state;
  }
};
