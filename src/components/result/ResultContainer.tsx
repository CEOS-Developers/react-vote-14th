import {
  Wrapper,
  Title,
  ResultBox,
  ResultsWrapper,
  ResultWrapper,
  Text,
} from './ResultPresenter';
import axios from 'axios';
import { useEffect, useState } from 'react';

const ResultContainer = () => {
  const [FEResult, setFEResult] = useState([]);
  const [BEResult, setBEResult] = useState([]);

  useEffect(() => {
    const fetchFEResult = async () => {
      const FEResponse = await axios.get(
        'https://vote-mailedit.kro.kr/api/candidate/result?part=FE'
      );

      const BEResponse = await axios.get(
        'https://vote-mailedit.kro.kr/api/candidate/result?part=BE'
      );

      setFEResult(FEResponse.data);
      setBEResult(BEResponse.data);
    };

    fetchFEResult();
  }, []);

  return (
    <Wrapper>
      <Title>Result</Title>
      <ResultBox>
        <ResultsWrapper>
          {FEResult.map((candidate: any, i: number) => (
            <ResultWrapper key={candidate.id}>
              <Text>{i + 1 + '등'}</Text>
              <Text>{candidate.name}</Text>

              <Text>{candidate.vote_count}</Text>
            </ResultWrapper>
          ))}
        </ResultsWrapper>
        <ResultsWrapper>
          {BEResult.map((candidate: any, i: number) => (
            <ResultWrapper key={candidate.id}>
              <Text>{i + 1 + '등'}</Text>
              <Text>{candidate.name}</Text>
              <Text>{candidate.vote_count}</Text>
            </ResultWrapper>
          ))}
        </ResultsWrapper>
      </ResultBox>
    </Wrapper>
  );
};

export default ResultContainer;
