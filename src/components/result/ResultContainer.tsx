import {
  Wrapper,
  Title,
  ResultBox,
  ResultsWrapper,
  ResultWrapper,
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
          {FEResult.map((candidate: any) => (
            <ResultWrapper key={candidate.id}>{candidate.name}</ResultWrapper>
          ))}
        </ResultsWrapper>
        <ResultsWrapper>
          {BEResult.map((candidate: any) => (
            <ResultWrapper key={candidate.id}>{candidate.name}</ResultWrapper>
          ))}
        </ResultsWrapper>
      </ResultBox>
    </Wrapper>
  );
};

export default ResultContainer;
