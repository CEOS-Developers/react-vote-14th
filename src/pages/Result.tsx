import ResultContainer from "../components/result/ResultContainer";
import SidebarContainer from "../components/sidebar/SidebarContainer";

import styled from "styled-components";

const Result = () => {
  return (
    <Wrapper>
      <SidebarContainer />
      <ResultContainer />
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
