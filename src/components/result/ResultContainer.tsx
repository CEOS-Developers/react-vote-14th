import axios from 'axios';
import { useEffect, useState } from 'react';
import {
  Container,
  RankWrapper,
  Result,
  ResultBox,
  Text,
  Title,
} from './ResultPresenter';

const ResultContainer = () => {
  const [FEResult, setFEResult] = useState([]);
  const [BEResult, setBEResult] = useState([]);

  useEffect(() => {
    const fetchFEResult = async () => {
      const FEResponse = await axios.get(
        'https://vote-mailedit.kro.kr/api/candidate/result?part=frontend'
      );

      const BEResponse = await axios.get(
        'https://vote-mailedit.kro.kr/api/candidate/result?part=backend'
      );

      setFEResult(FEResponse.data);
      setBEResult(BEResponse.data);
    };

    fetchFEResult();
  }, []);

  return (
    <Container>
      <Title>Result</Title>
      <ResultBox>
        <Result>
          {FEResult.map((candidate: any, i: number) => (
            <RankWrapper key={candidate.id}>
              <Text>{i + 1 + '등'}</Text>
              <Text>{candidate.name}</Text>

              <Text>{candidate.vote_count}</Text>
            </RankWrapper>
          ))}
        </Result>
        <Result>
          {BEResult.map((candidate: any, i: number) => (
            <RankWrapper key={candidate.id}>
              <Text>{i + 1 + '등'}</Text>
              <Text>{candidate.name}</Text>

              <Text>{candidate.vote_count}</Text>
            </RankWrapper>
          ))}
        </Result>
      </ResultBox>
    </Container>
  );
};

export default ResultContainer;
