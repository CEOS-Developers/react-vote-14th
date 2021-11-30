import React from 'react';
import {
  postLoginAsync,
  LoginPayloadI,
  postSignUpAsync,
  SignUpPayloadI,
} from '../app/auth/auth';
import { useAppDispatch } from '../app/store';

const useAuth = () => {
  const dispatch = useAppDispatch();

  const postLogin = (loginData: LoginPayloadI) => {
    dispatch(postLoginAsync(loginData));
  };

  const postSignUp = (signUpData: SignUpPayloadI) => {
    dispatch(postSignUpAsync(signUpData));
  };

  return { postLogin, postSignUp };
};

export default useAuth;
