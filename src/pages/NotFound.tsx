import styled from 'styled-components';

import COLORS from '../constants/Colors';
import SidebarContainer from '../components/sidebar/SidebarContainer';

const NotFound = () => {
  return (
    <Wrapper>
      <SidebarContainer />
      <Main>Not Found</Main>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  width: 100vw;
  height: 100vh;

  display: flex;
  flex-direction: row;
`;

const Main = styled.main`
  width: 80%;
  background: ${COLORS.background};

  display: flex;
  align-items: center;
  justify-content: center;
`;

export default NotFound;
