import { createReducer } from 'typesafe-actions';
import {
  checkUserVerificationAsync,
  postLoginAsync,
  postSignUpAsync,
} from './actions';
import { ActionT, AuthReducerI, SET_AUTH_LOADING } from './types';

const initialState: AuthReducerI = {
  username: '',
  loading: false,
  success: false,
  authorized: false,
};

export const authReducer = createReducer<AuthReducerI, ActionT>(initialState, {
  [SET_AUTH_LOADING]: (state, action) => ({
    ...state,
    loading: action.payload,
  }),
})
  .handleAction(postSignUpAsync.success, (state, action) => {
    // console.log('action: ', action);
    return state;
  })
  .handleAction(postLoginAsync.success, (state, action) => ({
    ...state,
    success: true,
    username: action.payload.user.username,
  }))
  .handleAction(postLoginAsync.failure, (state, action) => ({
    ...state,
    success: false,
  }))
  .handleAction(checkUserVerificationAsync.success, (state, action) => ({
    ...state,
    authorized: true,
  }))
  .handleAction(checkUserVerificationAsync.failure, (state, action) => ({
    ...state,
    authorized: false,
  }));
