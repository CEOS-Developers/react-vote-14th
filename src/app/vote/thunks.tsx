import { getCandidates, postVote } from './actions';
import { ThunkAction } from 'redux-thunk';
import createAsyncThunk from '../../utils/createAsyncThunk';
import { RootState } from '../store';
import { ActionT } from './types';
import api from '../api';
export const getCandidateThunk = createAsyncThunk(
  getCandidates,
  api.requestGetCandidates,
);
export function postVoteThunk(
  id: number,
): ThunkAction<void, RootState, null, ActionT> {
  return async (dispatch) => {
    const { request, success, failure } = postVote;
    dispatch(request(undefined));
    try {
      await api.requestPostVote(id);
      dispatch(success(id));
    } catch (e: any) {
      dispatch(failure(e));
    }
  };
}
