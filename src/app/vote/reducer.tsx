import { createReducer } from 'typesafe-actions';
import { getCandidates, postVote } from './actions';
import { ActionT, CandidatePayloadI } from './types';
const initialState: CandidatePayloadI[] = [
  {
    id: 0,
    name: '',
    vote: 0,
  },
];
export const voteReducer = createReducer<CandidatePayloadI[], ActionT>(
  initialState,
)
  .handleAction(getCandidates.success, (state, action) => action.payload)
  .handleAction(postVote.success, (state, action) =>
    state.map((candidate) => ({
      ...candidate,
      vote:
        candidate.id === action.payload ? candidate.vote + 1 : candidate.vote,
    })),
  );
