import { ThunkAction } from '@reduxjs/toolkit';
import createAsyncThunk from '../../utils/createAsyncThunk';
import api from '../api';
import { RootState } from '../store';
import {
  checkUserVerificationAsync,
  postLoginAsync,
  postSignUpAsync,
  setAuthLoading,
} from './actions';
import {
  ActionT,
  LoginPayloadI,
  LoginResponseI,
  SignUpPayloadI,
  SignUpResponseI,
} from './types';

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

    dispatch(setAuthLoading(true));
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

    dispatch(setAuthLoading(false));
  };
}

export function postLoginThunk(
  loginData: LoginPayloadI,
): ThunkAction<void, RootState, null, ActionT> {
  return async (dispatch) => {
    const { request, success, failure } = postLoginAsync;
    dispatch(request(loginData));
    dispatch(setAuthLoading(true));

    try {
      const res: LoginResponseI = await api.requestPostLogin(loginData);
      window.localStorage.setItem('token: ', res.token);
      dispatch(success(res));
    } catch (e: any) {
      console.log('POST LOGIN THUNK ERR: ', e);
      dispatch(failure(e));
    }

    dispatch(setAuthLoading(false));
  };
}

export function checkUserVerificationThunk(): ThunkAction<
  void,
  RootState,
  null,
  ActionT
> {
  return async (dispatch) => {
    const { request, success, failure } = checkUserVerificationAsync;
    dispatch(request(0));
    dispatch(setAuthLoading(true));

    try {
      const res = await api.requestCheckUserVerification;
      dispatch(success(res));
    } catch (e: any) {
      console.log('CHECK USER VERIFICATION THUNK ERR: ', e);
      dispatch(failure(e));
    }

    dispatch(setAuthLoading(false));
  };
}
