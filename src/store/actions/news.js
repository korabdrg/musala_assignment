import * as types from '../types/news';

export const getNews = () => ({
  type: types.GET_NEWS,
});

export const getNewsSuccess = data => ({
  type: types.GET_NEWS_SUCCESS,
  data,
});
