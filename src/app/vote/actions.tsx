import { AxiosError } from 'axios';
import { createAsyncAction } from 'typesafe-actions';
import { CandidatePayloadI } from './types';
export const getCandidates = createAsyncAction(
  'vote/GET_CANDIDATES_REQUEST',
  'vote/GET_CANDIDATES_SUCCESS',
  'vote/GET_CANDIDATES_FAIL',
)<unknown, CandidatePayloadI[], AxiosError>();

export const postVote = createAsyncAction(
  'vote/POST_VOTE_REQUEST',
  'vote/POST_VOTE_SUCCESS',
  'vote/POST_VOTE_FAIL',
)<unknown, number, AxiosError>();
