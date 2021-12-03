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
  const [selectedCandidateId, setSelectedCandidateId]: any = useState(-1);

  const [urlPart, setUrlPart] = useState('');

  useEffect(() => {
    // url 수정 예정이라 일단 대충 이렇게 짰어요... ^^ 부끄러운 코드
    if (part === 'frontend') {
      setUrlPart('FE');
    } else if (part === 'backend') {
      setUrlPart('BE');
    }

    const fetchCandidates = async () => {
      const response = await axios.get(
        `https://vote-mailedit.kro.kr/api/candidate?part=${urlPart}`
      );
      setCandidates(response.data);
    };
    fetchCandidates();
  }, [part, urlPart]);

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
