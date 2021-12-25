import API from '../../utils/API';

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

  const [title, setTitle] = useState('');
  const [candidates, setCandidates] = useState([]);
  const [selectedCandidateId, setSelectedCandidateId]: any = useState(-1);

  const token = JSON.stringify(localStorage.getItem('token'));
  const user = localStorage.getItem('userData');

  useEffect(() => {
    const fetchCandidates = async () => {
      const response = await API.get(`/candidate?part=${part}`);
      setCandidates(response.data);
    };
    fetchCandidates();

    if (part === 'frontend') {
      setTitle('프론트엔드');
    }
    if (part === 'backend') {
      setTitle('백엔드');
    }
  }, [part]);

  const handleCandidateButtonClick = (e: any) => {
    setSelectedCandidateId(e.target.value);
  };

  const handleSubmit = () => {
    if (user != 'null') {
      API.post(`/candidate/${selectedCandidateId}`, null, {
        headers: {
          Authorization: `JWT ${token.replaceAll('"', '')}`,
        },
      });

      alert('Voted successfully!');
      navigate('/result');
    } else {
      alert('로그인 후 투표할 수 있습니다.');
      navigate('/');
    }
  };

  return (
    <Wrapper>
      <Title>{`${title} 파트장 투표 🚀`}</Title>
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
