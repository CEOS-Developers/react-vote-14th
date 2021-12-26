import styled from 'styled-components';
import COLORS from '../../constants/Colors';
import { slideUpAnimation } from '../../utils/animations';

export const Container = styled.section`
  width: 80%;
  height: 100vh;

  display: grid;
  justify-content: center;

  grid-template-rows: 2fr 1fr 5fr 2fr;

  grid-template-areas:
    'title'
    'subtitle'
    'result'
    'scrollDown';
  text-align: center;

  color: ${COLORS.grayFont};
  background: ${COLORS.background};
`;

export const Title = styled.span`
  grid-area: title;

  display: flex;
  align-items: end;
  justify-content: center;

  font-size: 36px;
`;

export const SubTitle = styled.span`
  grid-area: subtitle;

  display: flex;
  justify-content: center;
  margin-top: 20px;

  font-size: 18px;
`;

export const Main = styled.main`
  grid-area: result;

  width: 500px;
  height: 175px;

  display: flex;
  justify-content: center;
  margin-top: 50px;

  border: 1px solid gray;
  border-radius: 30px;

  animation: ${slideUpAnimation} 2s;
`;

export const ResultWrapper = styled.section`
  width: 50%;
  height: 100%;

  display: grid;
  grid-template-rows: 1fr 2fr;

  grid-template-areas:
    'partName'
    'leaderName';
`;

export const PartName = styled.h3`
  grid-area: partName;

  margin: 0;

  display: flex;
  align-items: end;
  justify-content: center;
`;

export const LeaderName = styled.h4`
  grid-area: leaderName;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ScrollDown = styled.span`
  grid-area: scrollDown;

  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    cursor: pointer;
  }
`;
