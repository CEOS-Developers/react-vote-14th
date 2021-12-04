import * as actions from './actions';
import { ActionType } from 'typesafe-actions';

export type ActionT = ActionType<typeof actions>;

export interface UserI {
  id: number;
  username: string;
  voted: boolean;
}

export interface LoginPayloadI {
  username: string;
  email: string;
  password: string;
}

export interface LoginResponseI {
  user: {
    username: string;
  };
  token: string;
}

export interface SignUpPayloadI {
  username: string;
  email: string;
  password1: string;
  password2: string;
}

export interface SignUpResponseI {
  user: UserI;
}

export interface AuthReducerI {
  loading: boolean;
  success: boolean;
}

export {};
