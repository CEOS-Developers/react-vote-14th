import Confetti from '../../utils/Confetti';
import {
  Box,
  Container,
  LeaderName,
  Next,
  PartName,
  ResultWrapper,
  Title,
} from './LeaderResultPresenter';

const LeaderResultContainer = () => {
  return (
    <Container>
      <Confetti />
      <Title>축하합니다!</Title>
      <ResultWrapper>
        <Box>
          <PartName>프론트엔드 파트장</PartName>
          <LeaderName>🥇 김주현</LeaderName>
        </Box>
        <Box>
          <PartName>백엔드 파트장</PartName>
          <LeaderName>🥇 김주현</LeaderName>
        </Box>
      </ResultWrapper>
      <Next>전체 결과 확인</Next>
    </Container>
  );
};

export default LeaderResultContainer;
