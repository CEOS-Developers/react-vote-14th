import { combineReducers } from '@reduxjs/toolkit';
import memoReducer from './ExampleRTK/exampleRTK';

const rootReducer = combineReducers({
  memoReducer: memoReducer,
});

export default rootReducer;
