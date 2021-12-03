import { getCandidates, postVote } from './actions';
import createAsyncThunk from '../../utils/createAsyncThunk';
import { requestGetCandidates, requestPostVote } from './api';
export const getCandidateThunk = createAsyncThunk(
  getCandidates,
  requestGetCandidates,
);
export const postVoteThunk = createAsyncThunk(postVote, requestPostVote);
