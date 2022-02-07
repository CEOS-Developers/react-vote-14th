import styled from 'styled-components';
import SidebarContainer from '../components/sidebar/SidebarContainer';
import LeaderResultContainer from '../components/result/LeaderResultContainer';
import COLORS from '../constants/colors';
import { useEffect, useState } from 'react';
import TotalResultContainer from '../components/result/TotalResultContainer';

const Result = () => {
  const [isScrollDownBtnClicked, setIsScrollDownBtnClicked] = useState(false);

  useEffect(() => {
    setIsScrollDownBtnClicked(false);
  }, []);

  const handleScrollDownBtnClick = () => {
    setIsScrollDownBtnClicked(!isScrollDownBtnClicked);
  };

  return (
    <Wrapper>
      <SidebarContainer />
      {isScrollDownBtnClicked ? (
        <TotalResultContainer />
      ) : (
        <LeaderResultContainer
          handleScrollDownBtnClick={handleScrollDownBtnClick}
        />
      )}
    </Wrapper>
  );
};

const Wrapper = styled.section`
  width: 100vw;
  height: 100vh;

  display: flex;
  flex-direction: row;

  background: ${COLORS.background};
`;

export default Result;
