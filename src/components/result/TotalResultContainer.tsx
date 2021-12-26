import API from '../../utils/API';
import { useEffect, useState } from 'react';

import RenderResult from './RenderResult';
import { Container, Main, Title } from './TotalResultPresenter';

const TotalResultContainer = () => {
  const [frontendResult, setFrontendResult] = useState([]);
  const [backendResult, setBackendResult] = useState([]);

  useEffect(() => {
    const fetchVoteResult = async () => {
      const FEResponse = await API.get('/candidate/result?part=frontend');
      const BEResponse = await API.get('/candidate/result?part=backend');

      setFrontendResult(FEResponse.data);
      setBackendResult(BEResponse.data);
    };

    fetchVoteResult();
  }, []);

  return (
    <Container>
      <Title>투표 결과</Title>
      <Main>
        <RenderResult resultList={frontendResult} />
        <RenderResult resultList={backendResult} />
      </Main>
    </Container>
  );
};

export default TotalResultContainer;
