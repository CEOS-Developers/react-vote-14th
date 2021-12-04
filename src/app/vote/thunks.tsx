import { getCandidates, postVote } from './actions';
import createAsyncThunk from '../../utils/createAsyncThunk';
import api from '../api';
export const getCandidateThunk = createAsyncThunk(
  getCandidates,
  api.requestGetCandidates,
);
export const postVoteThunk = createAsyncThunk(postVote, api.requestPostVote);
