import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { RootState } from '../../app/store';
import { getCandidateThunk } from '../../app/vote/thunks';
const Vote = () => {
  const dispatch = useDispatch();
  const candidates = useSelector((state: RootState) => state.voteReducer);
  useEffect(() => {
    dispatch(getCandidateThunk());
  }, [dispatch]);
  return (
    <div>
      {candidates.map((candidate) => {
        return (
          <div key={candidate.id}>
            {candidate.name} {candidate.vote}
          </div>
        );
      })}
    </div>
  );
};

export default Vote;
