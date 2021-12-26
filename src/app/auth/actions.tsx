import { AxiosError } from 'axios';
import { createAction, createAsyncAction } from 'typesafe-actions';
import {
  LoginPayloadI,
  LoginResponseI,
  SET_AUTH_LOADING,
  SignUpPayloadI,
  SignUpResponseI,
} from './types';

export const setAuthLoading = createAction(SET_AUTH_LOADING)<boolean>();

export const postSignUpAsync = createAsyncAction(
  'auth/POST_SIGN_UP_REQUEST',
  'auth/POST_SIGN_UP_SUCCESS',
  'auth/POST_SIGN_UP_FAIL',
)<SignUpPayloadI, SignUpResponseI, AxiosError>();

export const postLoginAsync = createAsyncAction(
  'auth/POST_LOGIN_REQUEST',
  'auth/POST_LOGIN_SUCCESS',
  'auth/POST_LOGIN_FAIL',
)<LoginPayloadI, LoginResponseI, AxiosError>();

export const checkUserVerificationAsync = createAsyncAction(
  'auth/CHECK_USER_VERIFICATION',
  'auth/CHECK_USER_VERIFICATION_SUCCESS',
  'auth/CHECK_USER_VERIFICATION_FAIL',
)<unknown, any, AxiosError>();
