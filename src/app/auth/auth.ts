import {
  createAsyncThunk,
  createSelector,
  createSlice,
  PayloadAction,
} from '@reduxjs/toolkit';
import axios from '../customAxios';

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

const initialState: AuthReducerI = {
  loading: false,
  success: true,
};

export const postLoginAsync = createAsyncThunk(
  'auth/login',
  async (payload: LoginPayloadI, ThunkAPI) => {
    try {
      const res = await axios.post('login', payload);
      console.log('login response: ', res);
      return res.data;
    } catch (e) {
      return ThunkAPI.rejectWithValue(e);
    }
  },
);

export const postSignUpAsync = createAsyncThunk(
  'auth/sign-up',
  async (payload: SignUpPayloadI, ThunkAPI) => {
    try {
      const res = await axios.post('register', payload);
      console.log('register response: ', res);
      return res.data;
    } catch (e) {
      return ThunkAPI.rejectWithValue(e);
    }
  },
);

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: {
    //   LOGIN
    [postLoginAsync.pending.type]: (state, action) => {},
    [postLoginAsync.fulfilled.type]: (state, action) => {},
    [postLoginAsync.rejected.type]: (state, action) => {},

    // SIGN UP
    [postSignUpAsync.pending.type]: (state, action) => {},
    [postSignUpAsync.fulfilled.type]: (state, action) => {},
    [postSignUpAsync.rejected.type]: (state, action) => {},
  },
});

export const { actions } = authSlice;
export default authSlice.reducer;
