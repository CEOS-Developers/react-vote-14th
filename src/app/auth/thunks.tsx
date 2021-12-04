import { ThunkAction } from '@reduxjs/toolkit';
import createAsyncThunk from '../../utils/createAsyncThunk';
import api from '../api';
import { RootState } from '../store';
import {
  checkUserVerificationAsync,
  postLoginAsync,
  postSignUpAsync,
} from './actions';
import {
  ActionT,
  LoginPayloadI,
  SignUpPayloadI,
  SignUpResponseI,
} from './types';

// export const postSignUpThunk = createAsyncThunk(
//   postSignUpAsync,
//   api.requestPostSignUp,
// );

export function postSignUpThunk(
  signUpData: SignUpPayloadI,
): ThunkAction<void, RootState, null, ActionT> {
  return async (dispatch) => {
    const { request, success, failure } = postSignUpAsync;
    const {
      request: loginRequest,
      success: loginSuccess,
      failure: loginFailure,
    } = postLoginAsync;
    dispatch(request(signUpData));

    try {
      const res: SignUpResponseI = await api.requestPostSignUp(signUpData);
      dispatch(success(res));
      dispatch(
        loginRequest({
          username: signUpData.username,
          email: signUpData.email,
          password: signUpData.password1,
        }),
      );
    } catch (e: any) {
      console.log('POST SIGNUP THUNK ERR: ', e);
      dispatch(failure(e));
    }
  };
}

export function postLoginThunk(
  loginData: LoginPayloadI,
): ThunkAction<void, RootState, null, ActionT> {
  return async (dispatch) => {
    const { request, success, failure } = postLoginAsync;
    dispatch(request(loginData));

    try {
      const res = await api.requestPostLogin(loginData);
      dispatch(success(res));
    } catch (e: any) {
      console.log('POST LOGIN THUNK ERR: ', e);
      dispatch(failure(e));
    }
  };
}

export function checkUserVerification(): ThunkAction<
  void,
  RootState,
  null,
  ActionT
> {
  return async (dispatch) => {
    const { request, success, failure } = checkUserVerificationAsync;
    dispatch(success(request(0)));

    try {
      const res = await api.requestCheckUserVerification;
      dispatch(success(res));
    } catch (e: any) {
      console.log('CHECK USER VERIFICATION THUNK ERR: ', e);
      dispatch(failure(e));
    }
  };
}
