import { createReducer } from 'typesafe-actions';
import { postLoginAsync, postSignUpAsync } from './actions';
import { ActionT, AuthReducerI } from './types';

const initialState: AuthReducerI = {
  loading: false,
  success: true,
};

export const authReducer = createReducer<AuthReducerI, ActionT>(initialState)
  .handleAction(postSignUpAsync.success, (state, action) => {
    // console.log('action: ', action);
    return state;
  })
  .handleAction(postLoginAsync.success, (state, action) => state);
