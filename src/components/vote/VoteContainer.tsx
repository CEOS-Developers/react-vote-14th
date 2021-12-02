import {
  Wrapper,
  Title,
  CandidatesWrapper,
  CandidateButton,
  SubmitButton,
} from './VotePresenter';

import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const VoteContainer = () => {
  const { part } = useParams();
  const [candidates, setCandidates] = useState([]);
  const [selectedCandidate, setSelectedCandidate] = useState('');

  useEffect(() => {
    const fetchCandidates = async () => {
      const response = await axios.get(
        `https://9a63efda-a674-4015-be3c-824740a2aa52.mock.pstmn.io/vote/${part}`
      );
      setCandidates(response.data);
    };
    fetchCandidates();
  }, [part]);

  const handleCandidateButtonClick = (e: any) => {
    setSelectedCandidate(e.target.value);
  };

  const handleSubmit = (e: any) => {
    axios
      .post(
        'https://9a63efda-a674-4015-be3c-824740a2aa52.mock.pstmn.io/selected',
        selectedCandidate
      )
      .then((res) => {
        console.log(res.config.data);
        // console.log(selectedCandidate);

        alert('Voted successfully');
      });
  };

  return (
    <Wrapper>
      <Title>Front-end</Title>
      <CandidatesWrapper>
        {candidates.map((candidate: any) => (
          <CandidateButton
            key={candidate.name}
            value={candidate.name}
            onClick={handleCandidateButtonClick}
          >
            {candidate.name}
          </CandidateButton>
        ))}
      </CandidatesWrapper>
      <SubmitButton onClick={handleSubmit}>Vote!</SubmitButton>
    </Wrapper>
  );
};

export default VoteContainer;
