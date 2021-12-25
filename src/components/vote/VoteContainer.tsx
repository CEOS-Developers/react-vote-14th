import API from '../../utils/API';

import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router';

import {
  CandidateButton,
  Main,
  SubmitButton,
  Title,
  VoteForm,
  Wrapper,
} from './VotePresenter';

interface candidatesProps {
  id: number;
  name: string;
  part: string;
}

const VoteContainer = () => {
  const { part } = useParams();
  const navigate = useNavigate();

  const [title, setTitle] = useState('');

  const [candidates, setCandidates] = useState([]);
  const [selectedCandidateId, setSelectedCandidateId] = useState(-1);

  const token = localStorage.getItem('token');
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
    if (user) {
      API.post(`/candidate/${selectedCandidateId}`, null, {
        headers: {
          Authorization: `JWT ${token}`,
        },
      });

      alert('Voted successfully!');
      navigate('/result');
    } else {
      alert('로그인 후 이용 가능합니다.');
      navigate('/');
    }
  };

  return (
    <Wrapper>
      <Title>{`${title} 파트장 투표 🚀`}</Title>
      <Main>
        <VoteForm>
          {candidates.map((candidate: candidatesProps) => (
            <CandidateButton
              key={candidate.name}
              value={candidate.id}
              onClick={handleCandidateButtonClick}
            >
              {candidate.name}
            </CandidateButton>
          ))}

          <SubmitButton
            onClick={handleSubmit}
            margin={part === 'frontend' ? 10 : 7.5}
          >
            투표하기
          </SubmitButton>
        </VoteForm>
      </Main>
    </Wrapper>
  );
};

export default VoteContainer;
