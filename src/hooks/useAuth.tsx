import React from 'react';
import {
  checkUserVerificationThunk,
  postLoginThunk,
  postSignUpThunk,
} from '../app/auth/thunks';
import { LoginPayloadI, SignUpPayloadI } from '../app/auth/types';
import { useAppDispatch, useAppSelector } from '../app/store';

const useAuth = () => {
  const dispatch = useAppDispatch();
  const authLoading = useAppSelector((state) => state.authReducer.loading);
  const authorized = useAppSelector((state) => state.authReducer.authorized);
  const loginSuccess = useAppSelector((state) => state.authReducer.success);

  const postLogin = (loginData: LoginPayloadI) => {
    dispatch(postLoginThunk(loginData));
  };

  const postSignUp = (signUpData: SignUpPayloadI) => {
    dispatch(postSignUpThunk(signUpData));
  };

  const checkUserVerification = () => {
    dispatch(checkUserVerificationThunk());
  };

  return {
    postLogin,
    postSignUp,
    checkUserVerification,
    authorized,
    loginSuccess,
    authLoading,
  };
};

export default useAuth;
