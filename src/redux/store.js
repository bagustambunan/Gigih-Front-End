import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './counterSlice';
import queryReducer from './querySlice';

export default configureStore({
  reducer: {
    counter: counterReducer,
    query: queryReducer,
  },
});