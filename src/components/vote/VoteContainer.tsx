import {
  Wrapper,
  Title,
  CandidatesWrapper,
  CandidateButton,
  SubmitButton,
} from './VotePresenter';

import axios from 'axios';
import { useEffect, useState } from 'react';

const VoteContainer = () => {
  const [candidates, setCandidates] = useState([]);

  useEffect(() => {
    const fetchCandidates = async () => {
      const response = await axios.get(
        'https://9a63efda-a674-4015-be3c-824740a2aa52.mock.pstmn.io/vote/frontend'
      );
      setCandidates(response.data);
    };
    fetchCandidates();
  }, []);

  return (
    <Wrapper>
      <Title>Front-end</Title>
      <CandidatesWrapper>
        {candidates.map((candidate: any) => (
          <CandidateButton key={candidate.id} value={candidate.name}>
            {candidate.name}
          </CandidateButton>
        ))}
      </CandidatesWrapper>
      <SubmitButton>Vote!</SubmitButton>
    </Wrapper>
  );
};

export default VoteContainer;
