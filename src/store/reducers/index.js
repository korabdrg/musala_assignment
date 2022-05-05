import {combineReducers} from 'redux';
import news from './news';
import general from './general';
export const combinedReducers = combineReducers({news, general});
