import styled from 'styled-components';

import SidebarContainer from '../components/sidebar/SidebarContainer';
import LeaderResultContainer from '../components/result/LeaderResultContainer';
import TotalResultContainer from '../components/result/TotalResultContainer';

const Result = () => {
  return (
    <Wrapper>
      <SidebarContainer />
      <TotalResultContainer />
    </Wrapper>
  );
};

const Wrapper = styled.section`
  width: 100vw;
  height: 100vh;

  display: flex;
  flex-direction: row;
`;

export default Result;
