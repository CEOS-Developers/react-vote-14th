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
    // url 수정 예정이라 일단 이렇게 짰어요
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
    axios
      .post(
        `https://vote-mailedit.kro.kr/api/candidate/${selectedCandidateId}`,
        null,
        {
          headers: {
            Authorization: `JWT ${token}`,
          },
        }
      )
      .then((response) => {
        console.log(response);

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
