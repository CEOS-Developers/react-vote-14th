import React, { useEffect } from 'react';
import { RootState } from '../app/store';
import { useAppDispatch, useAppSelector } from '../app/store';
import { getCandidateThunk, postVoteThunk } from '../app/vote/thunks';
const useVote = () => {
  const dispatch = useAppDispatch();
  const candidates = useAppSelector((state: RootState) => state.voteReducer);
  const postVote = (id: number) => {
    dispatch(postVoteThunk(id));
  };
  useEffect(() => {
    dispatch(getCandidateThunk());
  }, [candidates, dispatch]);
  return {
    candidates,
    postVote,
  };
};
export default useVote;
