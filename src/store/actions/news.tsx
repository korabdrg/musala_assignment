import {NEWS_ACTION_LIST_TYPES} from '../types/news';

export const getNews = () => ({
  type: NEWS_ACTION_LIST_TYPES.GET_NEWS,
});

export const getNewsSuccess = data => ({
  type: NEWS_ACTION_LIST_TYPES.GET_NEWS_SUCCESS,
  data,
});

export const newsFiltered = data => ({
  type: NEWS_ACTION_LIST_TYPES.FILTER_NEWS,
  data,
});

export const newsFilteredSuccess = data => ({
  type: NEWS_ACTION_LIST_TYPES.FILTER_NEWS_SUCCESS,
  data,
});
