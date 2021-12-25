import LeaderResultContainer from '../components/result/LeaderResultContainer';
import styled from 'styled-components';
import SidebarContainer from '../components/sidebar/SidebarContainer';

const LeaderResult = () => {
  return (
    <Wrapper>
      <SidebarContainer />
      <LeaderResultContainer />
    </Wrapper>
  );
};

const Wrapper = styled.section`
  width: 100vw;
  height: 100vh;

  display: flex;
  flex-direction: row;
`;

export default LeaderResult;
