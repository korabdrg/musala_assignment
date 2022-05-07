import {call, put, select, takeLatest} from 'redux-saga/effects';
import {NEWS_ACTION_LIST_TYPES} from '../types/news';
import api from '../../api/index.js';
import * as newsActions from '../actions/news';

export function* getNews() {
  try {
    const {data: response} = yield call(
      api.get,
      'https://newsapi.org/v2/everything?q=apple&from=2022-05-03&to=2022-05-03&sortBy=popularity&apiKey=637393da9b834d59a6ba4ce026223a72',
    );
    yield put(newsActions.getNewsSuccess(response.articles));
  } catch (error) {
    console.log('Error on login', error);
  }
}

export default function* root() {
  yield takeLatest(NEWS_ACTION_LIST_TYPES.GET_NEWS, getNews);
}
