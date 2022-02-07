import styled from "styled-components";

import SidebarContainer from "../components/sidebar/SidebarContainer";
import VoteContainer from "../components/vote/VoteContainer";

const Vote = () => {
  return (
    <Wrapper>
      <SidebarContainer />
      <VoteContainer />
    </Wrapper>
  );
};

const Wrapper = styled.section`
  width: 100vw;
  height: 100vh;

  display: flex;
  flex-direction: row;
`;

export default Vote;
