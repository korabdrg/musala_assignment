import {call, put, select, takeLatest} from 'redux-saga/effects';
import * as types from '../types/news';
import api from '../../api/index.js';

export function* getNews() {
  try {
    const {data: response} = yield call(
      api.get,
      'https://newsapi.org/v2/everything?q=apple&from=2022-05-03&to=2022-05-03&sortBy=popularity&apiKey=637393da9b834d59a6ba4ce026223a72',
    );
    console.log(response);
  } catch (error) {
    console.log('Error on login', error);
  }
}

export default function* root() {
  yield takeLatest(types.GET_NEWS, getNews);
}
