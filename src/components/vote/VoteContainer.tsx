import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router';

import {
  CandidateButton,
  CandidatesWrapper,
  SubmitButton,
  Title,
  Wrapper,
} from './VotePresenter';

const VoteContainer = () => {
  const { part } = useParams();
  const navigate = useNavigate();

  const [candidates, setCandidates] = useState([]);
  const [selectedCandidateId, setSelectedCandidateId]: any = useState(-1);

  useEffect(() => {
    const fetchCandidates = async () => {
      const response = await axios.get(
        `https://vote-mailedit.kro.kr/api/candidate?part=${part}`
      );
      setCandidates(response.data);
    };
    fetchCandidates();
  }, [part]);

  const handleCandidateButtonClick = (e: any) => {
    setSelectedCandidateId(e.target.value);
  };

  const token = JSON.stringify(localStorage.getItem('token'));

  const handleSubmit = () => {
    axios.post(
      `https://vote-mailedit.kro.kr/api/candidate/${selectedCandidateId}`,
      null,
      {
        headers: {
          Authorization: `JWT ${token.replaceAll('"', '')}`,
        },
      }
    );

    alert('Voted successfully!');
    navigate('/result');
  };

  return (
    <Wrapper>
      <Title>{part}</Title>
      <CandidatesWrapper>
        {candidates.map((candidate: any) => (
          <CandidateButton
            key={candidate.name}
            value={candidate.id}
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
