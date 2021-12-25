import { useEffect, useState } from 'react';
import API from '../../utils/API';
import Confetti from '../../utils/Confetti';
import {
  Main,
  Container,
  LeaderName,
  Next,
  PartName,
  ResultWrapper,
  Title,
  SubTitle,
} from './LeaderResultPresenter';

const LeaderResultContainer = () => {
  const [frontendLeader, setFrontendLeader] = useState([]);
  const [backendLeader, setBackendLeader] = useState([]);

  useEffect(() => {
    const fetchVoteResult = async () => {
      const FEResponse = await API.get('/candidate/result?part=frontend');
      const BEResponse = await API.get('/candidate/result?part=backend');

      setFrontendLeader(FEResponse.data[0].name);
      setBackendLeader(BEResponse.data[0].name);
    };

    fetchVoteResult();
  }, []);

  return (
    <Container>
      <Confetti />
      <Title>축하합니다!</Title>
      <SubTitle>CEOS 15기 개발 파트장 투표 결과</SubTitle>
      <Main>
        <ResultWrapper>
          <PartName>프론트엔드 파트장</PartName>
          <LeaderName>{`🥇 ${frontendLeader}`}</LeaderName>
        </ResultWrapper>
        <ResultWrapper>
          <PartName>백엔드 파트장</PartName>
          <LeaderName>{`🥇 ${backendLeader}`}</LeaderName>
        </ResultWrapper>
      </Main>
      <Next>⬇ 전체 결과 확인하기</Next>
    </Container>
  );
};

export default LeaderResultContainer;
