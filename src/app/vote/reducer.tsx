import { createReducer } from 'typesafe-actions';
import { getCandidates, postVote } from './actions';
import { ActionT, CandidatePayloadI } from './types';
export const voteReducer = createReducer<CandidatePayloadI[], ActionT>([])
  .handleAction(getCandidates.success, (state, action) => action.payload)
  .handleAction(postVote.success, (state, action) =>
    state.map((candidate) => ({
      ...candidate,
      vote:
        candidate.id === action.payload ? candidate.vote + 1 : candidate.vote,
    })),
  );
