import * as types from '../types/news';

let initialState = {news: []};

export default (state = initialState, action) => {
  let {type} = action;
  switch (type) {
    case 'GET_NEWS_SUCCESS':
      return {
        ...state,
        news: [...action.data.articles],
      };
    default:
      return state;
  }
};
