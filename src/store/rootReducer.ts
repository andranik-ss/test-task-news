import { combineReducers } from '@reduxjs/toolkit';
import newsSlice from '../features/news/newsSlice';

export const rootReducer = combineReducers({
  [newsSlice.name]: newsSlice.reducer,
});
