import React from 'react';
import { postLoginThunk, postSignUpThunk } from '../app/auth/thunks';
import { LoginPayloadI, SignUpPayloadI } from '../app/auth/types';
import { useAppDispatch } from '../app/store';

const useAuth = () => {
  const dispatch = useAppDispatch();

  const postLogin = (loginData: LoginPayloadI) => {
    dispatch(postLoginThunk(loginData));
  };

  const postSignUp = (signUpData: SignUpPayloadI) => {
    dispatch(postSignUpThunk(signUpData));
  };

  return { postLogin, postSignUp };
};

export default useAuth;
