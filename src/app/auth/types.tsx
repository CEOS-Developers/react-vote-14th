import * as actions from './actions';
import { AxiosError } from 'axios';
import { ActionType } from 'typesafe-actions';

export type ActionT = ActionType<typeof actions>;

export interface LoginPayloadI {
  username: string;
  password: string;
}

export interface SignUpPayloadI {
  username: string;
  email: string;
  password1: string;
  password2: string;
}

export interface AuthReducerI {
  loading: boolean;
  success: boolean;
}

export {};
