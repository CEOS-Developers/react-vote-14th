import {
  Wrapper,
  Title,
  ResultsWrapper,
  ResultWrapper,
} from "./ResultPresenter";
import axios from "axios";
import { useEffect, useState } from "react";

const ResultContainer = () => {
  const [resultList, setResultList] = useState([]);

  useEffect(() => {
    const fetchResult = async () => {
      const response = await axios.get(
        "https://9a63efda-a674-4015-be3c-824740a2aa52.mock.pstmn.io/vote"
      );
      setResultList(response.data);
    };
    fetchResult();
  }, []);

  resultList.sort((a, b: any) => {
    return b["voteCount"] - a["voteCount"];
  });

  console.log(resultList);

  return (
    <Wrapper>
      <Title>Result</Title>
      <ResultsWrapper>
        {resultList.map((result: any) => (
          <ResultWrapper key={result.name}>{result.name}</ResultWrapper>
        ))}
      </ResultsWrapper>
    </Wrapper>
  );
};

export default ResultContainer;
