import * as types from '../types/news';

let initialState = {news: []};

export default (state = initialState, action) => {
  let {type} = action;
  console.log(action);
  switch (type) {
    case 'GET_NEWS_SUCCESS':
      return {
        ...state,
        news: [...action.data.articles],
      };
    case 'FILTER_NEWS':
      return {
        ...state,
        news: [...action.data],
      };
    default:
      return state;
  }
};
