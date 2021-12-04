import { combineReducers } from 'redux';
import { voteReducer } from './vote/reducer';

const rootReducer = combineReducers({
  voteReducer: voteReducer,
});
export default rootReducer;
