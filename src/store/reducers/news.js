import * as types from '../types/news';

let initialState = {};

export default (state = initialState, action) => {
  let {type} = action;
  switch (type) {
    default:
      return state;
  }
};
