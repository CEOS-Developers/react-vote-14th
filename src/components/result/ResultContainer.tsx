import {
  Wrapper,
  Title,
  ResultsWrapper,
  ResultWrapper,
} from './ResultPresenter';
import axios from 'axios';
import { useEffect, useState } from 'react';

const ResultContainer = () => {
  const [FEResult, setFEResult] = useState([]);
  const [BEResult, setBEResult] = useState([]);

  useEffect(() => {
    const fetchResult = async () => {
      const response = await axios.get(
        `
        https://9a63efda-a674-4015-be3c-824740a2aa52.mock.pstmn.io/result`
      );

      setFEResult(response.data[0].data);
      setBEResult(response.data[1].data);
    };
    fetchResult();
  }, []);

  return (
    <Wrapper>
      <Title>Result</Title>
      <ResultsWrapper>
        {FEResult.map((result: any) => (
          <ResultWrapper key={result.id}>{result.name}</ResultWrapper>
        ))}
      </ResultsWrapper>
      <ResultsWrapper>
        {BEResult.map((result: any) => (
          <ResultWrapper key={result.id}>{result.name}</ResultWrapper>
        ))}
      </ResultsWrapper>
    </Wrapper>
  );
};

export default ResultContainer;
