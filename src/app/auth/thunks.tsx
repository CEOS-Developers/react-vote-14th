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
      window.alert('회원가입이 완료되었습니다. ');
      await dispatch(success(res));
      await dispatch(
        loginRequest({
          username: signUpData.username,
          email: signUpData.email,
          password: signUpData.password1,
        }),
      );
    } catch (e: any) {
      window.alert(
        '회원가입이 되지 않았습니다. 이메일 또는 User Name이 중복됩니다. ',
      );
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
      window.alert('로그인에 성공했습니다.');
      dispatch(success(res));
    } catch (e: any) {
      window.alert(
        '로그인에 실패했습니다. 이메일, 패스워드, User Name을 확인해주세요',
      );
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
      const res = await api.requestCheckUserVerification();
      dispatch(success(res));
    } catch (e: any) {
      console.log('CHECK USER VERIFICATION THUNK ERR: ', e);
      dispatch(failure(e));
    }

    dispatch(setAuthLoading(false));
  };
}
