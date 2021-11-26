import {
  createAsyncThunk,
  createSelector,
  createSlice,
  PayloadAction,
} from '@reduxjs/toolkit';
import axios from 'axios';
import { memo } from 'react';
import MOCK_SERVER_URL from '../../config';

export interface MemoI {
  id: number;
  title: string;
  body: string;
}

export interface MemoReducerI {
  memoList: MemoI[];
  loading: boolean;
  error: boolean;
}

export interface PostMemoPayloadI {
  title: string;
  body: string;
}

export interface DeleteMemoPayloadI {
  id: number;
}

const initialState: MemoReducerI = {
  memoList: [
    {
      id: -1,
      title: '',
      body: '',
    },
  ],
  loading: false,
  error: false,
};

export const postMemoAsync = createAsyncThunk(
  // 이거는 맘에 안 드는데..
  //   사실 Api 클래스 안에 axios 다 넣고 thunk에서는 api.postMemo 이런 식으로 호출해주는 게 좋을 것 같긴해!
  //  근데 그러면 ThunkAPI 어떻게 받는지 몰라서 일단 이렇게 했구 더 찾아보거나 이거 별로 상관없다 그러면 이대루 그냥 짜고,,
  'memo/postMemo',
  async (payload: PostMemoPayloadI, ThunkAPI) => {
    try {
      const res = await axios.post(`${MOCK_SERVER_URL}`, payload);
      return res.data;
    } catch (e) {
      return ThunkAPI.rejectWithValue(e);
    }
  },
);

const memoSlice = createSlice({
  name: 'memo', // reducer type
  initialState,
  reducers: {
    // client state 관련 reducer
    // 따로 action creator 함수 안 만들어두되더라구! action id를 알아서 만들어줘 memo/deleteMemo 이런 식으로
    deleteMemo: (state, action: PayloadAction<DeleteMemoPayloadI>) => {
      state.memoList.filter((memo) => memo.id !== action.payload.id); // 이렇게.. 해도 알아서 불변성 지켜줌!
    },
  },
  extraReducers: {
    // extraReducer에는 위에 createAsyncThunk로 만든 thunk 처리하면 되는데 아래처럼 pending/fulfill/reject 처리를 알아서 해줘서 비동기 처리가 좀 편해지더라고??
    /////// POST Memo ///////
    [postMemoAsync.pending.type]: (state, action) => {
      state.loading = true;
      state.error = false;
    },
    [postMemoAsync.fulfilled.type]: (state, action: PayloadAction<MemoI>) => {
      state.loading = false;
      state.memoList.push(action.payload);
    },
    [postMemoAsync.rejected.type]: (state, action) => {
      state.loading = false;
      state.error = true;
    },
  },
});

export const { actions } = memoSlice;
export default memoSlice.reducer;
