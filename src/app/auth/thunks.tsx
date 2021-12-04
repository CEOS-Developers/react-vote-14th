import createAsyncThunk from '../../utils/createAsyncThunk';
import api from '../api';
import { postLoginAsync, postSignUpAsync } from './actions';

export const postSignUpThunk = createAsyncThunk(
  postSignUpAsync,
  api.requestPostSignUp,
);

export const postLoginThunk = createAsyncThunk(
  postLoginAsync,
  api.requestPostLogin,
);

export {};
