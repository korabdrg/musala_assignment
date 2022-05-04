import * as types from '../types/news';

export const getNews = () => ({
  type: types.GET_NEWS,
});

export const getNewsSuccess = data => ({
  type: types.GET_NEWS_SUCCESS,
  data,
});

export const newsFiltered = data => ({
  type: types.FILTER_NEWS,
  data,
});

export const newsFilteredSuccess = data => ({
  type: types.FILTER_NEWS_SUCCESS,
  data,
});
