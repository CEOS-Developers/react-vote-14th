import { combineReducers } from 'redux';
import memoReducer from './ExampleRTK/exampleRTK';
import { voteReducer } from './vote/reducer';

const rootReducer = combineReducers({
  memoReducer: memoReducer,
  voteReducer: voteReducer,
});
export default rootReducer;
